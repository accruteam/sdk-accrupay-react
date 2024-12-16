import path from 'path';
import fs from 'fs';

export function capitalizeFirstLetter(str: string){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function readEnv() {
  const fullPath = path.resolve(process.cwd(), '.env');

  if (!fs.existsSync(fullPath)) {
    throw new Error(`.env file not found at path: ${fullPath}`);
  }

  const envContent = fs.readFileSync(fullPath, 'utf-8');
  const envVars: Record<string, string> = {};

  envContent.split('\n').forEach((line) => {
    const trimmedLine = line.trim();
    // Skip comments and empty lines
    if (!trimmedLine || trimmedLine.startsWith('#')) return;

    const [key, ...valueParts] = trimmedLine.split('=');
    const value = valueParts.join('=').trim();

    // Remove surrounding quotes if present
    envVars[key.trim()] = value.replace(/^['"]|['"]$/g, '');
  });

  return envVars;
}

