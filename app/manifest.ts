import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Youssef Salah Elbltagi — Frontend Developer & QA Engineer",
    short_name: "Youssef Elbltagi",
    description:
      "Personal portfolio of Youssef Salah Elbltagi, Frontend Developer & Software QA Tester.",
    start_url: "/",
    display: "standalone",
    background_color: "#181818",
    theme_color: "#181818",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
