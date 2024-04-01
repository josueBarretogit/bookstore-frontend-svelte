const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#E1EBEE',
          100: '#B0E0E6',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#00BFFF',
          500: '#1E90FF',
          600: '#0000CD',
          700: '#000080',
          800: '#00008B',
          900: '#002244'
        }
      }
    }
  }
};

module.exports = config;
