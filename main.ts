import { mkdirSync, writeFileSync } from "node:fs";

// One short text, written to intrigue the reader: a quiet house, a small
// mystery in plain concrete details, and a sentence left unfinished.
const text = `Somewhere in the house, a door stands open that no one opened. The hallway is empty. The kettle has gone cold, but the cup beside it is still warm. On the table, a letter with no name. Its first line begins: “By the time you read this—”`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
