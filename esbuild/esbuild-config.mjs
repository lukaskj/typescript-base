export const esbuildConfig = {
  entryPoints: ["src/index.ts"],
  outfile: "dist/index.mjs",
  bundle: true,
  treeShaking: true,
  minify: true,
  platform: "node",
  format: "esm",
  target: "es2016",
  sourcemap: true,
  keepNames: true,
  logLevel: "info",
};
