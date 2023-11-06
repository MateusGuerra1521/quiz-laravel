import preset from './vendor/filament/support/tailwind.config.preset'


module.exports = {
  presets: [preset],
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    './app/Filament/**/*.php',
    './resources/views/filament/**/*.blade.php',
    './vendor/filament/**/*.blade.php',
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};