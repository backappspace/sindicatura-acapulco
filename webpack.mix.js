const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

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

mix.js('resources/js/manager.js', 'public/js')
    .js('resources/js/webapp.js', 'public/js')
    .js('resources/js/website.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css').options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ],
}).purgeCss();

if (mix.inProduction()) {
    mix.version()
}
