module.exports = {
    content: ["./index.html"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  module.exports = {
    content: ["./index.html"],
    theme: {
      extend: {
        animation: {
          float: "float 6s ease-in-out infinite",
        },
        keyframes: {
          float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
        },
      },
    },
    plugins: [],
  }
  