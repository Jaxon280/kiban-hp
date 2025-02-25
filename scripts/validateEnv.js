const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

/**
 * Parse a .env file and return an object with key-value pairs.
 * @param {string} filePath Path to the .env file.
 * @returns {object} Parsed environment variables.
 */
function parseEnvFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  return dotenv.parse(content);
}

function main() {
  const envExamplePath = path.join(process.cwd(), ".env.example");
  const vercelJsonPath = path.join(process.cwd(), "vercel.json");

  if (!fs.existsSync(envExamplePath)) {
    console.error(".env.example file not found.");
    process.exit(1);
  }
  if (!fs.existsSync(vercelJsonPath)) {
    console.error("vercel.json file not found.");
    process.exit(1);
  }

  const envExample = parseEnvFile(envExamplePath);
  const vercelJson = JSON.parse(fs.readFileSync(vercelJsonPath, "utf8"));

  const envExampleKeys = Object.keys(envExample).sort();
  const vercelEnv = vercelJson.env || {};
  const vercelKeys = Object.keys(vercelEnv).sort();

  if (JSON.stringify(envExampleKeys) !== JSON.stringify(vercelKeys)) {
    console.error(
      "Mismatch between .env.example keys and vercel.json env keys"
    );
    console.error(".env.example keys:", envExampleKeys);
    console.error("vercel.json env keys:", vercelKeys);
    process.exit(1);
  } else {
    console.log("Environment keys match between .env.example and vercel.json");
  }
}

main();
