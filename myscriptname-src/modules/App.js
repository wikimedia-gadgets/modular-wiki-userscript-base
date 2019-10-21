import hello from './hello';

const App = () => {
    // Example: Using a custom module (imported above)
    var helloTo = "me";
    var greeting1 = hello(helloTo);
    console.log("greeting1", greeting1);
    var greeting2 = hello();
    console.log("greeting2", greeting2);
    
    // Example: Using a MedaiWiki ResourceLoader module (loaded in index.js)
    var api = new mw.Api();
    var id = mw.config.get('wgArticleId');
    api.get( {
		action: 'query',
		pageids: id,
		prop: ['revisions', 'info'],
		rvprop: ['user', 'content'],
		rvlimit: 1,
		rvdir: 'newer'
	} ).then(function(response) {
        console.log("response", response);
    });
}

export default App;