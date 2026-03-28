function readOptionalEnv(name: string) {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

export const env = {
  NEXT_PUBLIC_GA_MEASUREMENT_ID: readOptionalEnv("NEXT_PUBLIC_GA_MEASUREMENT_ID")
};
