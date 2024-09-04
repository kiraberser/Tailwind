/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',  // Asegúrate de que tu archivo HTML esté incluido
    './templates/**/*.html',  // Incluye otras carpetas y archivos que uses
    './static/**/*.css',  // Si tienes estilos en una carpeta estática
    './main.py',  // Si usas Flask, incluye archivos que renderizan HTML dinámico
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
