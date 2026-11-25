// The One-Liner Groan-Off entry: a single original dad joke, written out verbatim.
// Same output on every run: the chosen line below, and nothing else, goes to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "My Wi-Fi went down, so I talked to my family for twenty minutes, and honestly the connection was worse than the router's ever was.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
