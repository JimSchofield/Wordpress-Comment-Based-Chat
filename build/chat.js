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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = Comment;\nvar liStyle = {\n    marginBottom: '.5em',\n    fontFamily: 'Avenir, Helvetica, sans-serif',\n    fontSize: '20px',\n    listStyleType: 'none'\n};\n\nvar nameStyle = {\n    paddingRight: \"8px\"\n};\n\nfunction Comment(props) {\n    var _props$comment = props.comment,\n        author_name = _props$comment.author_name,\n        rendered = _props$comment.content.rendered,\n        author_avatar_urls = _props$comment.author_avatar_urls;\n\n    //ONLY USE WITH TRUSTED CONTENT\n\n    function cleanRendered(string) {\n        var element = document.createElement('div');\n        element.innerHTML = string.trim();\n        return element.textContent || element.innerText || \"\";\n    }\n\n    return React.createElement(\n        'li',\n        { style: liStyle },\n        React.createElement(\n            'strong',\n            { style: nameStyle },\n            author_name,\n            ':'\n        ),\n        React.createElement(\n            'span',\n            null,\n            cleanRendered(rendered)\n        )\n    );\n}\n\n//# sourceURL=webpack:///./src/Components/Comment.js?");

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

/***/ "./src/Components/Login.js":
/*!*********************************!*\
  !*** ./src/Components/Login.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _styles = __webpack_require__(/*! ../Styles/styles */ \"./src/Styles/styles.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar loginStyles = {\n    display: 'flex',\n    flexDirection: 'column',\n    justifyContent: 'center',\n    alignItems: 'center',\n    width: '100%',\n    height: '450px',\n    background: 'cadetblue',\n    color: 'white'\n};\n\nvar Login = function (_React$Component) {\n    _inherits(Login, _React$Component);\n\n    function Login() {\n        _classCallCheck(this, Login);\n\n        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));\n\n        _this.state = {\n            author_name: ''\n        };\n        return _this;\n    }\n\n    _createClass(Login, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var author_name = this.state.author_name;\n\n\n            return React.createElement(\n                'div',\n                { style: loginStyles },\n                React.createElement(\n                    'span',\n                    null,\n                    'Please enter your username'\n                ),\n                React.createElement('input', {\n                    type: 'text',\n                    value: author_name,\n                    onChange: function onChange(event) {\n                        return _this2.setState({ author_name: event.target.value });\n                    },\n                    onKeyDown: function onKeyDown(event) {\n                        return event.keyCode === 13 ? _this2.props.logIn(author_name) : null;\n                    }\n                }),\n                React.createElement(\n                    'button',\n                    {\n                        style: _styles.buttonStyle,\n                        onClick: function onClick() {\n                            return _this2.props.logIn(author_name);\n                        }\n                    },\n                    'Join'\n                )\n            );\n        }\n    }]);\n\n    return Login;\n}(React.Component);\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/Components/Login.js?");

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
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Comment = __webpack_require__(/*! ./Components/Comment */ \"./src/Components/Comment.js\");\n\nvar _Comment2 = _interopRequireDefault(_Comment);\n\nvar _InputBar = __webpack_require__(/*! ./Components/InputBar */ \"./src/Components/InputBar.js\");\n\nvar _InputBar2 = _interopRequireDefault(_InputBar);\n\nvar _Login = __webpack_require__(/*! ./Components/Login */ \"./src/Components/Login.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ulStyle = {\n    margin: '0',\n    padding: '1em',\n    background: '#f3f3f3',\n    color: '#222'\n};\n\nvar MockPerson = {\n    author_email: 'test@gmail.com',\n    author_name: 'Mock User',\n    author_url: null,\n    content: 'Mock comment',\n    post: 15\n};\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n        _this.state = {\n            comments: [],\n            author_name: null\n        };\n\n        _this.postComment = _this.postComment.bind(_this);\n        _this.refreshComments = _this.refreshComments.bind(_this);\n        _this.logIn = _this.logIn.bind(_this);\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.refreshComments();\n            setInterval(this.refreshComments, 2000);\n        }\n    }, {\n        key: 'postComment',\n        value: function postComment(messageObject) {\n            var text = messageObject.text;\n            var author_name = this.state.author_name;\n\n            //temporarily update comment list to make it appear real time\n\n            this.setState({\n                comments: [].concat(_toConsumableArray(this.state.comments), [{\n                    author_name: author_name,\n                    content: {\n                        rendered: text\n                    }\n                }])\n            });\n\n            fetch('/wp-json/wp/v2/comments?author_name=' + author_name + '&email=jbob@gmail.com&content=' + text + '&post=15', {\n                method: 'post'\n            }).then(function (res) {\n                return res.json();\n            }).then(function (data) {\n                return console.log(data);\n            }).then(this.refreshComments);\n        }\n    }, {\n        key: 'refreshComments',\n        value: function refreshComments() {\n            var _this2 = this;\n\n            console.log(\"Polling api\");\n            fetch('/wp-json/wp/v2/comments').then(function (res) {\n                return res.json();\n            }).then(function (comments) {\n                comments.reverse();\n                _this2.setState({ comments: comments });\n            });\n        }\n    }, {\n        key: 'logIn',\n        value: function logIn(author_name) {\n            this.setState({ author_name: author_name });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return React.createElement(\n                'div',\n                { className: 'commentChat', style: { margin: '0 1em' } },\n                React.createElement(\n                    'h1',\n                    null,\n                    'Comment-chat!'\n                ),\n                this.state.author_name ? [React.createElement(\n                    'ul',\n                    { style: ulStyle },\n                    this.state.comments.length && this.state.comments.map(function (el) {\n                        return React.createElement(_Comment2.default, { comment: el });\n                    })\n                ), React.createElement(_InputBar2.default, { post: this.postComment })] : React.createElement(\n                    'div',\n                    null,\n                    React.createElement(_Login2.default, { logIn: this.logIn })\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(React.Component);\n\nwindow.onload = function () {\n    var app = document.querySelector('#commentchat');\n    if (app) {\n        ReactDOM.render(React.createElement(App, null), app);\n    }\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });