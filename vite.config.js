import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { BASE_PATH } from "./BasePath";

export default defineConfig({
  plugins: [react()],
  base: `${BASE_PATH}/`,
  server: {
    port: 3000,
    host: true,
  },
});
