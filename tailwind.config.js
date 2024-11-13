/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inkunt': ['inkunt', 'sans-serif'],
        "space": ['Space Mono', 'monospace'], 
        'lobster': ['Lobster', 'cursive'],
        'stalemate': ['Stalemate', 'cursive'],
        'homemade': ['Homemade Apple', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
        'inknut': ['Inknut Antiqua', 'serif'],
        'slabo': ['Slabo 13px', 'serif'],
        'special': ['Special Elite', 'cursive'],
        'chivo': ['Chivo Mono', 'monospace'],
        'kurale': ['Kurale', 'serif'],
        'zilla': ['Zilla Slab', 'serif']
      
      }
    },
  },
  plugins: [],
}

