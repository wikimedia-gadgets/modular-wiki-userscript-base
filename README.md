# modular-wiki-userscript-base
A base for creating MediaWiki userscripts using ES6 modules

## How to use
1. Downloads files and install dependenices
2. Rename the directory "myscriptname-src", replacing 'myscriptname' with the name of your userscript
3. Edit package.json:
   * In the "build:bundle" script, replace 'myscriptname' with the name of the your userscript
   * Replace other keys as require, e.g. name, verson, description, homepage...
4. Write your script within the the "`yourScriptName`-src"
   * You can write in modern javascript
   * Modules go in the "/modules" subdirectory, and can use es6 `import` and `export`
   * index.js is for loading dependencies - typically, ResourceLoader modules and document ready, but other dependencies can go in the Promise.all array
   * Write your App in App.js, importing modules as required
   * While Node modules could be imported, their licences (and their dependencies' licences) might not be compatible with your required licence (CC-BY-SA 3.0 for most Wikimedia wikis, like Wikipedia)
5. Build your app by running `npm build`. This writes two files to the "dist" directory:
   1. out.js - Bundled/transpiled version of the code, with an inline sourcemap for debugging with devtools.
      - You can use this code for the sandbox or testing version of your userscript.
   2. out.min.js - Minified version of out.js, without a sourcemap.
      - You can use this code for the main version of your userscript (that other users import), in order to reduce file size. Keep in mind that without a sourcemap, debugging could be harder
6. Commit changes and push to your repository
7. Deploy to the wiki using `node deploy` (or by manually copy the built files). Or deploy just the sandbox version using `node deploy --sandbox`.
   - This requires some initial setup before first use:
      1. Set up a bot password from [[Special:BotPasswords]]
      2. Create a file `credentials.json` to store the username and password. This should be a plain JSON file, like:
         ```json
         {
            "username": "Exampleuser@somedescription",
            "password": "mybotpassword1234567890123456789"
         }
         ```
         *Do **not** commit this file to your repository!*
      3. Edit deploy.js, filling in the full page names of the main and sandbox versions of the script in the `SCRIPT_PAGE` and `SCRIPT_SANDBOX_PAGE` constants.
