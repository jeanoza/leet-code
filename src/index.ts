import * as path from "path";

async function runScript(scriptPath: string): Promise<void> {
  try {
    const absolutePath = path.resolve("src", scriptPath);
    const scriptModule = await import(absolutePath);
  } catch (error) {
    console.error(`Error loading script: ${error}`);
  }
}

const scriptPath = process.argv[2];

if (scriptPath) {
  runScript(scriptPath);
} else {
  console.error("Please provide a script path as a command-line argument.");
}
