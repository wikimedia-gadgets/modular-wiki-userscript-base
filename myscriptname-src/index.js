import App from './modules/App';

Promise.all([
	// Resource loader modules
	mw.loader.using(['mediawiki.util', 'mediawiki.api', 'mediawiki.Title']),
	// Page ready
	$.ready
]).then(function() {
	App();
});
