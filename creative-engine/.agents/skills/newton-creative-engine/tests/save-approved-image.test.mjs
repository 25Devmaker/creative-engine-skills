import test from "node:test"; // Run the real save command without adding a test dependency.
import assert from "node:assert/strict"; // Fail if approval storage does not match the expected behavior.
import { spawnSync } from "node:child_process"; // Exercise the same CLI a skill will call.
import { mkdtemp, readFile, rmdir, unlink, writeFile } from "node:fs/promises"; // Create and clean an isolated source image.
import { tmpdir } from "node:os"; // Keep the input fixture outside the repository.
import { dirname, join } from "node:path"; // Compare the actual destination with the one shared folder.
import { fileURLToPath } from "node:url"; // Resolve skill-relative paths independent of the test's working directory.

const script = fileURLToPath(new URL("../scripts/save-approved-image.mjs", import.meta.url)); // Target the real helper, not a copy.
const approvedDir = dirname(fileURLToPath(new URL("../../../../../approved-images/.keep", import.meta.url))); // Normalize the shared folder path for a precise flat-layout check.
const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScL/nwAAAABJRU5ErkJggg==", "base64"); // Supply a tiny valid PNG without external assets.

test("a Good-rated image is copied into the single approved-images folder", async (t) => { // Catch missing saves or per-image subfolder creation.
  const inputDir = await mkdtemp(join(tmpdir(), "creative-approved-test-")); // Isolate the source fixture from real outputs.
  const source = join(inputDir, "creative.png"); // Give the helper a realistic local image path.
  await writeFile(source, png); // Create the exact bytes that should be retained.
  let saved; // Remember only the file this test owns for safe cleanup.
  t.after(async () => { // Remove test artifacts without touching user-approved images.
    if (saved) await unlink(saved); // Delete only the image created by this test.
    await unlink(source); // Delete only this test's source fixture.
    await rmdir(inputDir); // Remove the now-empty temporary fixture folder.
  }); // Finish the owned-artifact cleanup.
  const result = spawnSync(process.execPath, [script, "--approved-by-user", source], { encoding: "utf8" }); // Invoke the exact approved-save command.
  assert.equal(result.status, 0, result.stderr); // Fail if the command cannot save a user-approved image.
  saved = result.stdout.trim(); // Capture the destination printed by the command.
  assert.equal(dirname(saved), approvedDir); // Catch any per-image folder or wrong repository path.
  assert.deepEqual(await readFile(saved), png); // Catch conversion, truncation, or a wrong source file.
}); // End the flat approved-image storage test.

test("a file is not saved without the explicit Good-rating marker", async (t) => { // Catch accidental approval during ordinary generation.
  const inputDir = await mkdtemp(join(tmpdir(), "creative-unapproved-test-")); // Isolate a real image fixture.
  const source = join(inputDir, "creative.png"); // Give the command a valid image so only the approval gate decides.
  await writeFile(source, png); // Create the image before invoking the command.
  const result = spawnSync(process.execPath, [script, "--not-approved", source], { encoding: "utf8" }); // Attempt a save without the required marker.
  t.after(async () => { // Clean up only this test's files, including a wrongly saved copy.
    if (result.stdout.trim()) await unlink(result.stdout.trim()); // Remove a copy produced by the missing gate.
    await unlink(source); // Remove the fixture image.
    await rmdir(inputDir); // Remove its temporary folder.
  }); // Finish the owned-artifact cleanup.
  assert.notEqual(result.status, 0); // Require the command to refuse an unapproved save.
  assert.equal(result.stdout.trim(), ""); // Require no approved-image path on failure.
}); // End the explicit-Good-gate test.

test("a fake image is not saved even when marked Good", async (t) => { // Catch non-image payloads entering the approved library.
  const inputDir = await mkdtemp(join(tmpdir(), "creative-fake-test-")); // Isolate the malformed fixture.
  const source = join(inputDir, "fake.png"); // Use an image extension that should not be trusted alone.
  await writeFile(source, "not an image"); // Make the content fail image-signature validation.
  const result = spawnSync(process.execPath, [script, "--approved-by-user", source], { encoding: "utf8" }); // Attempt to save the fake file.
  t.after(async () => { // Clean up only this test's files, including a wrongly saved copy.
    if (result.stdout.trim()) await unlink(result.stdout.trim()); // Remove a copy produced by missing validation.
    await unlink(source); // Remove the malformed fixture.
    await rmdir(inputDir); // Remove its temporary folder.
  }); // Finish the owned-artifact cleanup.
  assert.notEqual(result.status, 0); // Require image validation before persistence.
  assert.equal(result.stdout.trim(), ""); // Require no approved-image path on failure.
}); // End the invalid-image test.
