import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "HeadlessContextMenu",
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "zustand",
        "tailwindcss",
        "@headlessui/react",
      ],
      output: {
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          zustand: "zustand",
          tailwindcss: "tailwindcss",
          "@headlessui/react": "headlessUI",
        },
      },
    },
  },
});
