import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // New brand colors
        turquoise: {
          DEFAULT: "#00D4D4",
          light: "#33E0E0",
          dark: "#00B8B8",
          50: "#E6FAFA",
          100: "#CCF5F5",
          200: "#99EBEB",
          300: "#66E0E0",
          400: "#33D6D6",
          500: "#00D4D4",
          600: "#00AAAA",
          700: "#008080",
          800: "#005555",
          900: "#002B2B",
        },
        coral: {
          DEFAULT: "#FF6B47",
          light: "#FF8A6B",
          dark: "#FF4C23",
          50: "#FFF2EF",
          100: "#FFE5DF",
          200: "#FFCBBF",
          300: "#FFB19F",
          400: "#FF977F",
          500: "#FF6B47",
          600: "#FF4C23",
          700: "#E6330A",
          800: "#B32608",
          900: "#801A06",
        },
        // Keep existing colors for compatibility
        gold: {
          DEFAULT: "#00D4D4", // Changed to turquoise
          light: "#33E0E0",
          dark: "#00B8B8",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px #00D4D4" },
          "50%": { boxShadow: "0 0 20px #00D4D4, 0 0 30px #00D4D4" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
