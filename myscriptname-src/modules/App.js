import hello from './hello';

const App = () => {
    // Example: Using a custom module (imported above)
    const helloTo = "me";
    const greeting1 = hello(helloTo);
    console.log("greeting1", greeting1);
    const greeting2 = hello();
    console.log({greeting2});
    
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
	} ).then(response => {
        console.log("response", response);
    });
}

export default App;