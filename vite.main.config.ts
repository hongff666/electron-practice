import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    build: {
      sourcemap: isDev,
      minify: !isDev,
    },
  };
});
