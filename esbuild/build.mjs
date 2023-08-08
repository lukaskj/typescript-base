import * as esbuild from "esbuild";
import { esbuildConfig } from "./esbuild-config.mjs";

await esbuild.build(esbuildConfig);
