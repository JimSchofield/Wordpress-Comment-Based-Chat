# Wordpress-Comment-Based-Chat
This is a proof of concept for using wordpress comments to run a "live" chat

1) Clone into plugins folder and activate.  You will need React and ReactDOM as available dependencies, so I just install Project Gutenberg.
2) Create a page or a post that allows comments and contains this div: `<div id="commentchat"></div>`
3) Include this in your functions.php:
```
function filter_rest_allow_anonymous_comments() {
	return true;
}
add_filter('rest_allow_anonymous_comments', 'filter_rest_allow_anonymous_comments');
```
4) In WordPress discussion settings uncheck 'Comment author must fill out name and email' and 'A comment is held for moderation'


To edit you'll need to run `npm install` and then `npm run watch` to set up a watcher.
