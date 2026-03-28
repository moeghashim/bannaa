import { copyFileSync, existsSync, readFileSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const envExamplePath = path.join(rootDir, ".env.example");
const envLocalPath = path.join(rootDir, ".env.local");

function parseEnvFile(filePath) {
  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const separatorIndex = line.indexOf("=");
      if (separatorIndex === -1) {
        return null;
      }

      return {
        key: line.slice(0, separatorIndex).trim(),
        value: line.slice(separatorIndex + 1).trim()
      };
    })
    .filter(Boolean);
}

if (!existsSync(envExamplePath)) {
  console.error("Missing .env.example. Cannot bootstrap local environment.");
  process.exit(1);
}

if (!existsSync(envLocalPath)) {
  copyFileSync(envExamplePath, envLocalPath);
  console.log("Created .env.local from .env.example");
} else {
  console.log("Found existing .env.local");
}

const expectedEntries = parseEnvFile(envExamplePath);
const localEntries = new Map(parseEnvFile(envLocalPath).map((entry) => [entry.key, entry.value]));

const missingKeys = expectedEntries
  .map((entry) => entry.key)
  .filter((key) => !localEntries.get(key));

if (missingKeys.length > 0) {
  console.log("");
  console.log("Fill these variables in .env.local before shipping features:");
  for (const key of missingKeys) {
    console.log(`- ${key}`);
  }
} else {
  console.log("");
  console.log("All environment variables defined in .env.example are present.");
}

console.log("");
console.log("Next steps:");
console.log("- Run npm run dev");
console.log("- Run npm run check before committing");
