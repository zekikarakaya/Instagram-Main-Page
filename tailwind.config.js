/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0095f6',
        facebook: '#385185',
        link: '#00376b',
        cv:"#303846",
      },
      backgroundImage: {
        'logo-pattern': 'url(https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png)',
      },
      fontFamily:{
            body: ["Rubik"]
      },
    },
  },
  plugins: [],
}
