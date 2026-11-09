import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default async function Icon() {
  const photo = await readFile(join(process.cwd(), "public/images/eduardo-rosto.jpg"), "base64");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/jpeg;base64,${photo}`}
          alt=""
          width={192}
          height={192}
          style={{ borderRadius: 9999, objectFit: "cover" }}
        />
      </div>
    ),
    { ...size }
  );
}
