import type { BlobatarOptions } from "blobatar";

// Preserve the reference editor's seed for axes that were not pinned.
export const brandSeed = "alain00";

export const brandTraits: NonNullable<BlobatarOptions["traits"]> = {
  shape: 0.11,
  "body.ratio": 0.095,
  "body.n": 0.832,
  "eye.ratio": 0.617,
};

export const brandPalette = { head: "#050607", eye: "#F7F7F7" };
