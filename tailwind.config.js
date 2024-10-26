/** @type {import("tailwindcss").Config} */
export default {
  corePlugins: {
    preflight: false
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"]
    },
    variants: {
      fill: ["hover", "focus"]
    },
    extend: {
      fontSize: {
        title: ["40px", "2.5rem"],
        description: ["16px", "1rem"],
        "task-title": ["20px", "1.25rem"],
        "task-button": ["16px", "1rem"],
        "button-text": ["14px", "0.875rem"],
        "input-label": ["12px", "0.75rem"]
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        light: 300
      },
      colors: {}
    }
  }
}
