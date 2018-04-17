/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Components/Comment.js":
/*!***********************************!*\
  !*** ./src/Components/Comment.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = Comment;\nvar liStyle = {\n    marginBottom: '.5em',\n    fontFamily: 'Avenir, Helvetica, sans-serif',\n    fontSize: '20px',\n    listStyleType: 'none'\n};\n\nvar nameStyle = {\n    paddingRight: \"8px\"\n};\n\nfunction Comment(props) {\n    var _props$comment = props.comment,\n        author_name = _props$comment.author_name,\n        date = _props$comment.date,\n        rendered = _props$comment.content.rendered,\n        author_avatar_urls = _props$comment.author_avatar_urls;\n\n    //ONLY USE WITH TRUSTED CONTENT\n\n    function cleanRendered(string) {\n        var element = document.createElement('div');\n        element.innerHTML = string.trim();\n        return element.textContent || element.innerText || \"\";\n    }\n\n    return React.createElement(\n        'li',\n        { style: liStyle },\n        React.createElement(\n            'strong',\n            { style: nameStyle },\n            author_name,\n            ':'\n        ),\n        React.createElement(\n            'span',\n            null,\n            date\n        ),\n        React.createElement(\n            'span',\n            null,\n            cleanRendered(rendered)\n        )\n    );\n}\n\n//# sourceURL=webpack:///./src/Components/Comment.js?");

/***/ }),

/***/ "./src/Components/InputBar.js":
/*!************************************!*\
  !*** ./src/Components/InputBar.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _styles = __webpack_require__(/*! ../Styles/styles */ \"./src/Styles/styles.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar barStyles = {\n    display: 'flex'\n};\n\nvar inputStyles = {\n    padding: '1em',\n    fontFamily: 'Avenir, Helvetica, sans-serif',\n    flex: '1'\n};\n\nvar InputBar = function (_React$Component) {\n    _inherits(InputBar, _React$Component);\n\n    function InputBar() {\n        _classCallCheck(this, InputBar);\n\n        var _this = _possibleConstructorReturn(this, (InputBar.__proto__ || Object.getPrototypeOf(InputBar)).call(this));\n\n        _this.state = {\n            text: ''\n        };\n\n        _this.sendMessage = _this.sendMessage.bind(_this);\n        return _this;\n    }\n\n    _createClass(InputBar, [{\n        key: 'sendMessage',\n        value: function sendMessage() {\n            this.props.post({\n                text: this.state.text\n            });\n            this.setState({\n                text: ''\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return React.createElement(\n                'div',\n                { style: barStyles },\n                React.createElement('input', {\n                    type: 'text',\n                    value: this.state.text,\n                    onChange: function onChange(event) {\n                        return _this2.setState({ text: event.target.value });\n                    },\n                    onKeyDown: function onKeyDown(event) {\n                        return event.keyCode === 13 ? _this2.sendMessage() : null;\n                    },\n                    style: inputStyles\n                }),\n                React.createElement(\n                    'button',\n                    {\n                        style: _styles.buttonStyle,\n                        onClick: this.sendMessage\n                    },\n                    'Send'\n                )\n            );\n        }\n    }]);\n\n    return InputBar;\n}(React.Component);\n\nexports.default = InputBar;\n\n//# sourceURL=webpack:///./src/Components/InputBar.js?");

/***/ }),

/***/ "./src/Styles/styles.js":
/*!******************************!*\
  !*** ./src/Styles/styles.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar buttonStyle = {\n    background: 'cadetblue',\n    color: 'white',\n    padding: '.5em 1em'\n};\n\nexports.buttonStyle = buttonStyle;\n\n//# sourceURL=webpack:///./src/Styles/styles.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Comment = __webpack_require__(/*! ./Components/Comment */ \"./src/Components/Comment.js\");\n\nvar _Comment2 = _interopRequireDefault(_Comment);\n\nvar _InputBar = __webpack_require__(/*! ./Components/InputBar */ \"./src/Components/InputBar.js\");\n\nvar _InputBar2 = _interopRequireDefault(_InputBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ulStyle = {\n\tmargin: '0',\n\tpadding: '1em',\n\tbackground: '#f3f3f3',\n\tcolor: '#222'\n};\n\nvar App = function (_React$Component) {\n\t_inherits(App, _React$Component);\n\n\tfunction App(props) {\n\t\t_classCallCheck(this, App);\n\n\t\tvar _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n\t\t_this.state = {\n\t\t\tcomments: [],\n\t\t\twp_api_root: props.wpApiSettings.root,\n\t\t\twp_api_nonce: props.wpApiSettings.nonce,\n\t\t\tchatroom_id: props.chatroomVars.chatroomID,\n\t\t\tauthor: props.chatroomVars.userID,\n\t\t\tauthor_email: props.chatroomVars.userEmail,\n\t\t\tauthor_ip: props.chatroomVars.userIP,\n\t\t\tauthor_name: props.chatroomVars.userDisplayName,\n\t\t\tauthor_url: props.chatroomVars.userURL,\n\t\t\tauthor_user_agent: props.chatroomVars.userAgent,\n\t\t\tauthor_avatar: props.chatroomVars.userAvatar\n\t\t};\n\n\t\t_this.postComment = _this.postComment.bind(_this);\n\t\t_this.refreshComments = _this.refreshComments.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tthis.refreshComments();\n\t\t\tsetInterval(this.refreshComments, 2000);\n\t\t}\n\t}, {\n\t\tkey: 'postComment',\n\t\tvalue: function postComment(messageObject) {\n\t\t\tvar text = messageObject.text;\n\t\t\tvar author_name = this.state.author_name;\n\n\t\t\t//temporarily update comment list to make it appear real time\n\n\t\t\tthis.setState({\n\t\t\t\tcomments: [].concat(_toConsumableArray(this.state.comments), [{\n\t\t\t\t\tauthor_name: author_name,\n\t\t\t\t\tcontent: {\n\t\t\t\t\t\trendered: text\n\t\t\t\t\t},\n\t\t\t\t\tdate: Date.now()\n\t\t\t\t}])\n\t\t\t});\n\n\t\t\tfetch(this.state.wp_api_root + 'wp/v2/comments', {\n\t\t\t\tmethod: 'POST',\n\t\t\t\theaders: {\n\t\t\t\t\t'Content-Type': 'application/json',\n\t\t\t\t\t'X-WP-NONCE': this.state.wp_api_nonce\n\t\t\t\t},\n\t\t\t\tcredentials: 'same-origin',\n\t\t\t\tbody: JSON.stringify({\n\t\t\t\t\tauthor: this.state.author,\n\t\t\t\t\tcontent: text,\n\t\t\t\t\tpost: this.state.chatroom_id\n\t\t\t\t})\n\t\t\t}).then(function (res) {\n\t\t\t\treturn res.json();\n\t\t\t}).then(function (data) {\n\t\t\t\treturn console.log(data);\n\t\t\t}).then(this.refreshComments);\n\t\t}\n\t}, {\n\t\tkey: 'refreshComments',\n\t\tvalue: function refreshComments() {\n\t\t\tvar _this2 = this;\n\n\t\t\tconsole.log('Polling api');\n\t\t\tfetch(this.state.wp_api_root + 'wp/v2/comments?post=' + this.state.chatroom_id).then(function (res) {\n\t\t\t\treturn res.json();\n\t\t\t}).then(function (comments) {\n\t\t\t\tcomments.reverse();\n\t\t\t\tconsole.log(comments);\n\t\t\t\t_this2.setState({ comments: comments });\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'commentChat', style: { margin: '0 1em' } },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'ul',\n\t\t\t\t\t{ style: ulStyle },\n\t\t\t\t\tthis.state.comments.length ? this.state.comments.map(function (el) {\n\t\t\t\t\t\treturn React.createElement(_Comment2.default, { comment: el });\n\t\t\t\t\t}) : React.createElement(\n\t\t\t\t\t\t'strong',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'No messages yet!'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(_InputBar2.default, { post: this.postComment })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(React.Component);\n\nwindow.onload = function () {\n\n\tvar app = document.querySelector('#commentchat');\n\tvar chatroomVars = window.chatroomVars;\n\tvar wpApiSettings = window.wpApiSettings;\n\n\tif (app && chatroomVars) {\n\t\tReactDOM.render(React.createElement(App, {\n\t\t\twpApiSettings: wpApiSettings,\n\t\t\tchatroomVars: chatroomVars\n\t\t}), app);\n\t}\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });