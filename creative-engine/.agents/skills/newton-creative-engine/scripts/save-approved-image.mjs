import { randomUUID } from "node:crypto"; // Give each approved image a collision-resistant filename.
import { constants } from "node:fs"; // Prevent a copy from overwriting another approved image.
import { copyFile, mkdir, open, stat } from "node:fs/promises"; // Inspect a local image before copying its exact bytes.
import { extname, join, resolve } from "node:path"; // Normalize input paths and retain the delivered format.
import { fileURLToPath } from "node:url"; // Locate the repository-root folder regardless of the caller's working directory.

const [approval, input, extra] = process.argv.slice(2); // Accept only an explicit Good marker and one local file path.
if (approval !== "--approved-by-user" || !input || extra) { // Refuse accidental or ambiguous saves before touching storage.
  console.error("Usage: node save-approved-image.mjs --approved-by-user /absolute/path/to/image.png"); // Tell the caller how to provide explicit approval.
  process.exitCode = 2; // Signal that no approved image was saved.
} else { // Continue only after the explicit approval marker is present.
  try { // Report storage failures without falsely printing a saved path.
    const source = resolve(input); // Turn the local source into an unambiguous absolute path.
    const sourceInfo = await stat(source); // Check that the source exists before creating the approved folder.
    if (!sourceInfo.isFile()) throw new Error("Source must be a local image file."); // Refuse directories and other non-file inputs.
    const extension = extname(source).toLowerCase(); // Select the validation rule for the source image format.
    const sourceFile = await open(source, "r"); // Inspect the file header without loading a large image into memory.
    const header = Buffer.alloc(12); // Hold enough bytes to identify PNG, JPEG, WebP, GIF, or AVIF.
    try { await sourceFile.read(header, 0, header.length, 0); } finally { await sourceFile.close(); } // Close the source handle even if reading fails.
    const png = extension === ".png" && header.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])); // Require the PNG signature, not just its filename.
    const jpeg = [".jpg", ".jpeg"].includes(extension) && header[0] === 255 && header[1] === 216 && header[2] === 255; // Require a JPEG header for JPEG extensions.
    const webp = extension === ".webp" && header.toString("ascii", 0, 4) === "RIFF" && header.toString("ascii", 8, 12) === "WEBP"; // Require the WebP RIFF signature.
    const gif = extension === ".gif" && ["GIF87a", "GIF89a"].includes(header.toString("ascii", 0, 6)); // Require an actual GIF header.
    const avif = extension === ".avif" && header.toString("ascii", 4, 8) === "ftyp" && ["avif", "avis"].includes(header.toString("ascii", 8, 12)); // Require an AVIF brand marker.
    if (!(png || jpeg || webp || gif || avif)) throw new Error("Source must be a PNG, JPEG, WebP, GIF, or AVIF image."); // Keep non-images out of the approved library.
    const directory = fileURLToPath(new URL("../../../../../approved-images/", import.meta.url)); // Use one flat repository-root folder for every approved image.
    await mkdir(directory, { recursive: true }); // Create the shared folder in a fresh clone if needed.
    const destination = join(directory, `${Date.now()}-${randomUUID()}${extension}`); // Give every approval a unique filename with its real format.
    await copyFile(source, destination, constants.COPYFILE_EXCL); // Preserve bytes while refusing to overwrite another approval.
    console.log(destination); // Print the exact persisted path for the agent to verify and report.
  } catch (error) { // Treat missing files, invalid images, and copy failures as unsaved outputs.
    console.error(`Approved image was not saved: ${error.message}`); // State failure without claiming persistence.
    process.exitCode = 1; // Return a failing status so the skill cannot mistake this for success.
  } // Finish guarded persistence.
} // Finish the explicit-approval branch.
