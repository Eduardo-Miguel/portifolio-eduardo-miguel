import type { MetadataRoute } from "next";
import { site } from "@/lib/config";
import { getContent } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  const content = getContent("en");

  return {
    name: `${site.name} — ${content.role}`,
    short_name: site.name,
    description: content.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      { src: "/icon", sizes: "192x192", type: "image/png" },
    ],
  };
}
