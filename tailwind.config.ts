import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#E4E4E7",
            foreground: "#11181C",
          },
        },
      },
    }),
    require("@vidstack/react/tailwind.cjs")({
      prefix: "media",
    }),
    customVariants,
  ],
} satisfies Config;

function customVariants({
  addVariant,
  matchVariant,
}: {
  addVariant: (name: string, options: string[]) => void;
  matchVariant: (name: string, cb: (value: string) => string) => void;
}) {
  // Strict version of `.group` to help with nesting.
  matchVariant("parent-data", (value: string) => `.parent[data-${value}] > &`);

  addVariant("hocus", ["&:hover", "&:focus-visible"]);
  addVariant("group-hocus", [".group:hover &", ".group:focus-visible &"]);
}
