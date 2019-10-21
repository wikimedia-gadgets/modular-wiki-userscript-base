# modular-wiki-userscript-base
A base for creating MediaWiki userscripts using ES6 modules

## How to use
1. Downloads files and install dependenices
2. Rename directory "myscriptname-src", replacing 'myscriptname' with the name of your userscript
3. Edit package.json:
   * In the "build:bundle" script, replace 'myscriptname' with the name of the your userscript
   * Replace other keys as require, e.g. name, verson, description, homepage...
4. Write your script within the the "`yourScriptName`-src"
   * You can write in modern javascript
   * Modules go in the "/modules" subdirectory, and can use es6 `import` and `export`
   * index.js is for loading dependencies - typically, ResourceLoader modules and document ready, but other dependencies can go in the Promise.all array
   * Write your App in App.js, importing modules as required
   * While Node modules could be imported, their licences (and their dependencies' licences) might not be compatible with your require licence (CC-BY-SA 3.0 for most Wikimedia wikis, like Wikipedia)
5. Build your app by running `npm build`. This writes two files to the "dist" directory:
   1. out.js - Bundled/transpiled version of the code, with an inline sourcemap for debugging with devtools.
      - You can use this code for the sandbox or testing version of your userscript.
   2. out.min.js - Minified version of out.js, without a sourcemap.
      - You can use this code for the main version of your userscript (that other users import), in order to reduce file size. Keep in mind that without a sourcemap, debugging could be harder
6. Push to your repository, and copy the files to the wiki pages for your userscript (and its sandbox version)

