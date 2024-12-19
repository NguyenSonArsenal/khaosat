const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const fs = require("fs");
// fs.readdirSync("resources/client/scss/").forEach(fileName =>
//   mix.sass(`resources/client/scss/${fileName}`, "public/client/css"));

fs.readdirSync("resources/wowtop/scss/").forEach(fileName =>
  mix.sass(`resources/wowtop/scss/${fileName}`, "public/wowtop/assets/css"));

mix.postCss("resources/css/tailwind.css", "public/wowtop/assets/css", [
    require("tailwindcss"),
  ]);

mix.combine([
  'public/wowtop/assets/vendor/bootstrap5/bootstrap.min.css',
  'public/wowtop/assets/vendor/slick/slick.css',
  'public/wowtop/assets/css/theme.css',
  'public/wowtop/assets/css/tailwind.css',
  'public/wowtop/assets/css/common.css',
], 'public/wowtop/assets/css/all.css');
mix.minify('public/wowtop/assets/css/all.css');

mix.combine([
  'public/wowtop/assets//vendor/jquery/jquery-3.5.1.min.js',
  'public/wowtop/assets/vendor/bootstrap5/bootstrap.bundle.min.js',
  'public/wowtop/assets/vendor/slick/slick.min.js',
  'public/wowtop/assets/js/theme.js',
  'public/wowtop/assets/js/app.js',
  'public/wowtop/assets/js/common.js',
], 'public/wowtop/assets/js/all.js');
mix.minify('public/wowtop/assets/js/all.js');
// npm run production to mini file

mix.options({ processCssUrls: false });  // To disable url resolve when compiling
