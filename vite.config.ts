import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { existsSync, readFileSync } from "fs";

const parseEnvFile = (filePath: string) => {
  if (!existsSync(filePath)) return {};

  const file = readFileSync(filePath, "utf8");
  return file
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#") && line.includes("="))
    .reduce<Record<string, string>>((acc, line) => {
      const [key, ...rest] = line.split("=");
      acc[key.trim()] = rest.join("=").trim();
      return acc;
    }, {});
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  const contactEnv = parseEnvFile(path.resolve(__dirname, ".env.contact"));
  const freeTrialEnv = parseEnvFile(path.resolve(__dirname, ".env.free-trial"));
  const customViteEnv = { ...contactEnv, ...freeTrialEnv };

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: Object.fromEntries(
      Object.entries(customViteEnv).map(([key, value]) => [
        `import.meta.env.${key}`,
        JSON.stringify(value),
      ]),
    ),
  };
});
