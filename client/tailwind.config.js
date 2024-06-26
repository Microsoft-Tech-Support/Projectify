import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url(./assets/checkmark.png)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-typewriter')({
      wordsets: {
          fruit: {
              words: ['Projectify.', 'Storage.', 'Hosting.', 'Collaboration.', 'Scaffolding.', 'Projectify.'],
              delay: 0,
              writeSpeed: 0.15,
              repeat: 0,
              eraseSpeed: 0,
              pauseBetween: 2,
              caretWidth: '4px',
          }
      }
    })
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
}