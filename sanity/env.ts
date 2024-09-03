export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-08-15";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const token =
  process.env.SANITY_SECRET_TOKEN ||
  "skR53M5qjiDnVpyfw5NTSzDALVZG32Yi2wLQktCQDcEDKmUEfU6iSg6lDYV3nOFmw0IYxdydZS30ouBXsChoIhEx05CO4Eskdrwj4BNSNQg73tluvU7RY8OUhl4aWGeB55e9qWZmglrt6vd9cHqZJzNnltCkdKoRHOBVhCHkal9BfxDHaQpx";

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
