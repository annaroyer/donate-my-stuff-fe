/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(24);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ae4bfc99b89de07931a039f128ce789e.jpg";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8d405b05857f00335a7a63091fcb3b59.png";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0ba66bad54ab998f622cb91e1fdbe800.png";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "735bf095ed46b829456435c54ba87c2e.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8f9333a1e5aaace54736d4fbbfd6164a.svg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./base.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./base.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato|Signika);", ""]);

	// module
	exports.push([module.id, "header, aside, .data-content, .organization-aside, .pickup-container {\n  display: flex;\n  flex-direction: column; }\n\nbody, .unframed {\n  margin: 0;\n  padding: 0; }\n\nhtml {\n  height: 100%;\n  width: 100%; }\n\nbody {\n  background: url(" + __webpack_require__(1) + ") repeat;\n  min-height: 100%;\n  min-width: 100%; }\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  width: 100vw;\n  height: 100vh;\n  overflow: auto; }\n\nheader {\n  grid-area: 1 / 1 / auto / span 12;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  background: url(" + __webpack_require__(9) + ") no-repeat center center;\n  background-size: cover;\n  min-height: 20rem; }\n\n.data-container {\n  grid-area: 6 / 1 / auto / span 8;\n  padding: 0 1rem; }\n\naside {\n  grid-area: 6 / 9 / auto / span 4; }\n\nfooter {\n  height: 2rem; }\n\n.centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap; }\n\n.even-rows {\n  display: flex;\n  justify-content: space-evenly; }\n\n.spaced {\n  display: flex;\n  justify-content: space-between; }\n\n.logo {\n  max-width: 4rem;\n  height: auto;\n  margin-right: 1rem; }\n\n.many-orgs-image {\n  max-width: 20rem; }\n\n.single-org-image {\n  max-width: 30rem;\n  grid-area: 2 / auto / auto / 6; }\n\n.arrow-button {\n  width: 10rem;\n  border-radius: 0.5rem;\n  color: #545454;\n  font-family: 'Lato', sans-serif;\n  font-weight: 300;\n  font-size: 0.9rem;\n  padding: 0.5rem;\n  text-decoration: none;\n  border: 0.1rem solid #fbfdfd;\n  background: #c2ebef url(" + __webpack_require__(5) + ") no-repeat center;\n  background-size: 1.5rem 2.5rem;\n  background-position: right 5% center; }\n\n.button-container {\n  display: flex;\n  justify-content: flex-end; }\n  .button-container .arrow-button {\n    position: absolute; }\n\n.search-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 3rem;\n  width: 7rem;\n  border-radius: 0.3rem;\n  margin: 0.5rem;\n  background: #ff3b3f url(" + __webpack_require__(2) + ") no-repeat center;\n  background-size: 2.3rem;\n  outline: none;\n  justify-self: center; }\n\n.done-button {\n  color: #545454;\n  font-size: 1rem;\n  text-decoration: none;\n  margin: 0.5rem;\n  border: 0.2rem solid #545454;\n  height: 2rem;\n  border-radius: 0.3rem;\n  background-color: #c2ebef;\n  padding: 0.5rem;\n  outline: none; }\n\n.modal-box .done-button {\n  margin: 1rem 25%; }\n\n.search-form {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .search-form .zipcode-search {\n    width: 30rem;\n    height: 3rem;\n    border-radius: 0.3rem;\n    font: 2rem 'Lato', sans-serif;\n    padding: 0 1rem;\n    outline: none;\n    margin: 0.5rem; }\n\n.label-text {\n  color: #545454;\n  font-family: 'Signika', sans-serif;\n  font-size: 1rem;\n  font-weight: 300; }\n\n.small-form {\n  line-height: 1.5rem;\n  border-radius: 0.5rem;\n  color: #545454;\n  font-size: 1rem;\n  font-weight: 100;\n  font-family: 'Signika', sans-serif;\n  outline: none;\n  margin-bottom: 1rem; }\n\n.column-form {\n  display: inline-grid;\n  padding: 0 15%; }\n  .column-form .search-button {\n    width: 50%;\n    min-width: 7rem; }\n\n.medium-input {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  font-family: 'Signika', sans-serif;\n  font-size: 1.2rem;\n  font-weight: 100;\n  outline: none;\n  margin: 0.5rem 20%; }\n\n.register-organization {\n  grid-area: 1 / 3 / auto / span 8;\n  background: linear-gradient(rgba(203, 234, 237, 0.55), rgba(194, 235, 239, 0.45));\n  box-shadow: 0 -1rem 15rem #545454;\n  align-items: center;\n  align-content: start;\n  padding-top: 1%;\n  min-height: 100%; }\n  .register-organization textarea {\n    height: 5rem;\n    border: 2px inset; }\n  .register-organization .label-text {\n    font-size: 2rem; }\n  .register-organization .label-text, .register-organization input[type=submit] {\n    margin: 3rem 0 1rem 0; }\n  .register-organization input[type=\"submit\"] {\n    border: 2px inset; }\n  .register-organization input[type=\"submit\"]:hover {\n    border-top: none;\n    border-left: none;\n    box-shadow: -0.2rem -0.2rem 0.3rem #a9a9a9; }\n  .register-organization .medium-input {\n    margin: 0.5rem 0; }\n\n.red-border {\n  border-color: #ff3b3f; }\n\n.modalDialog {\n  position: fixed;\n  font-family: 'Signika', sans-serif;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 99999;\n  opacity: 0;\n  transition: opacity 400ms ease-in;\n  pointer-events: none; }\n  .modalDialog div {\n    width: 30rem;\n    position: relative;\n    margin: 10% auto;\n    padding: 2rem;\n    border-radius: 0.8rem;\n    background: #fbfdfd; }\n    .modalDialog div form {\n      display: inline-grid;\n      width: 100%; }\n      .modalDialog div form input[type=\"submit\"] {\n        box-shadow: 0.1rem 0.1rem 0.2rem #545454; }\n      .modalDialog div form select {\n        border: 2px inset;\n        color: #545454;\n        line-height: 2rem; }\n  .modalDialog .close {\n    background: #545454;\n    color: #fbfdfd;\n    line-height: 1.5rem;\n    position: absolute;\n    right: -0.75rem;\n    text-align: center;\n    top: -0.6rem;\n    width: 1.5rem;\n    text-decoration: none;\n    font-weight: bold;\n    border-radius: 0.75rem;\n    box-shadow: 0.1rem 0.1rem 0.3rem black; }\n  .modalDialog .close:hover {\n    background: #00d9ff; }\n\n.modalDialog:target {\n  opacity: 1;\n  pointer-events: auto; }\n\n.no-transition {\n  transition: none; }\n\n.login-form .label-text {\n  margin: 0 20%; }\n\n.login-form .arrow-button {\n  justify-self: end;\n  margin: 2rem 0 0 0; }\n\nnav {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 0;\n  background-color: #fbfdfd; }\n  nav .nav-title {\n    display: flex;\n    align-items: center;\n    color: #a9a9a9;\n    text-decoration: none;\n    line-height: 4.5rem;\n    font-family: 'Lato', sans-serif;\n    font-size: 1.5rem;\n    font-weight: bolder; }\n  nav .nav-title:hover {\n    color: #ff3b3f; }\n  nav .nav-menu .nav-link {\n    color: #a9a9a9;\n    text-decoration: none;\n    padding: 0 2rem;\n    font-family: 'Signika', sans-serif;\n    font-size: 1.1rem;\n    font-weight: 100; }\n  nav .nav-menu .active,\n  nav .nav-menu .nav-link:hover {\n    color: #ff3b3f; }\n\n.nav-logo {\n  max-width: 3rem; }\n\n.blue-text, .message, .normal, .schedule-link, .website-link, .modal-header, .pickup {\n  color: #545454;\n  font-family: 'Signika', sans-serif;\n  font-size: 1rem;\n  font-weight: 300;\n  text-align: center; }\n\n.sub-header, .large-header {\n  font-family: 'Signika', sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: url(" + __webpack_require__(3) + ") no-repeat center bottom; }\n\n.blue-text, .message, .pickup {\n  background-color: #c2ebef;\n  padding: 1rem; }\n\n.sub-header {\n  color: #a9a9a9;\n  padding: 1rem;\n  text-align: center; }\n\n.organization-link {\n  text-decoration: none; }\n\na.organization-link:hover .sub-header {\n  color: #545454; }\n\n.large-header {\n  color: #545454;\n  font-size: 3rem;\n  padding: 0 0 0.4rem 0;\n  grid-area: 1 / 4 / span 1 / span 6;\n  background-size: 2.5rem; }\n\n.blue-text {\n  padding: 1rem;\n  width: 50%; }\n\n.message {\n  display: none;\n  grid-area: 1 / 3 / span 12 / span 8;\n  font-size: 2rem;\n  margin: 0;\n  padding: 15%;\n  box-shadow: 0 -1rem 15rem #545454;\n  text-align: center; }\n\n.error {\n  color: #ff3b3f;\n  margin: 0 20%; }\n\n.normal {\n  font-size: 1.2rem; }\n\n.schedule-link, .website-link {\n  font-size: 1.2rem; }\n\n.schedule-link:hover, .website-link:hover {\n  color: #ff3b3f; }\n\n.schedule-link {\n  place-self: flex-end; }\n\n.modal-header {\n  font-size: 1.2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-self: left;\n  margin: 2rem 20% 0.5rem 20%; }\n\n.organization {\n  width: 22rem;\n  padding: 3rem; }\n\n.organization-aside {\n  justify-content: space-evenly;\n  grid-area: 2 / 7 / auto / auto; }\n  .organization-aside .small-list {\n    margin: 0;\n    min-width: max-content; }\n\n.organization-description {\n  grid-area: 3 / 5 / auto / 9; }\n\n.pickup-container {\n  grid-area: 6 / 1 / auto / 13;\n  display: flex;\n  align-items: center; }\n\n.pickup {\n  font-size: 1.2rem;\n  width: 75%;\n  display: inline-grid;\n  box-shadow: 0.5rem 0.5rem 1rem #a9a9a9;\n  border-radius: 0.7rem;\n  margin: 2rem; }\n", ""]);

	// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "549b5ed9b589dfac47f99cb7be6bb400.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	const baseUrl = () => {
	  const host = window.location.hostname;
	  if (host === "localhost" || host === "127.0.0.1") {
	    return "http://localhost:3000";
	  } else {
	    return 'https://desolate-oasis-56246.herokuapp.com';
	  }
	};

	module.exports = { baseUrl };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	const firebase = __webpack_require__(13);
	__webpack_require__(22);

	const config = {
	  apiKey: "AIzaSyCnR9jW53w2TD0Hij8zgt0j3vHfihKxwDA",
	  authDomain: "donate-my-stuff.firebaseapp.com",
	  databaseURL: "https://donate-my-stuff.firebaseio.com",
	  projectId: "donate-my-stuff",
	  storageBucket: "donate-my-stuff.appspot.com",
	  messagingSenderId: "481539298605"
	};

	firebase.initializeApp(config);
	//
	// const provider = new firebase.auth.GoogleAuthProvider()
	// provider.addScope('profile')
	// provider.addScope('email')
	//
	// function toggleSignIn(){
	//   if(firebase.auth().currentUser){
	//     firebase.auth().signOut()
	//     .then(() => {
	//       document.getElementById('nav-login').textContent = 'login'
	//       let joinLink = document.getElementById('nav-join')
	//       joinLink.textContent = 'join'
	//       joinLink.setAttribute('href', '#userRegistration')
	//     })
	//   } else {
	//     firebase.auth().signInWithPopup(provider)
	//     .then(result => {
	//       const token = result.credential.accessToken
	//       const user = result.user
	//     })
	//     .catch(error => {
	//       const errorCode = error.code
	//       const errorMessage = error.message
	//       const email = error.email
	//       const credential = error.credential
	//     })
	//   }
	// }
	//
	//
	//   firebase.auth().onAuthStateChanged(user => {
	//     if(user) {
	//       const name = user.displayName
	//       const email = user.email
	//       document.getElementById('nav-login').textContent = 'logout'
	//       let joinLink = document.getElementById('nav-join')
	//       joinLink.textContent = 'dashboard'
	//       joinLink.setAttribute('href', 'organization-dashboard.html')
	//       window.sessionStorage.setItem('organization_id', 1)
	//     } else {
	//       document.getElementById('nav-login').textContent = 'login'
	//       let joinLink = document.getElementById('nav-join')
	//       joinLink.textContent = 'join'
	//       joinLink.setAttribute('href', '#userRegistration')
	//     }
	//   })
	//
	//
	//
	// document.getElementById('nav-login')
	// .addEventListener('click', toggleSignIn(), false)

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	__webpack_require__(14);
	var firebase = _interopDefault(__webpack_require__(19));

	/**
	 * Copyright 2018 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	module.exports = firebase;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, global) {'use strict';

	__webpack_require__(18);

	// Store setTimeout reference so promise-polyfill will be unaffected by
	// other code modifying setTimeout (like sinon.useFakeTimers())
	var setTimeoutFunc = setTimeout;

	function noop() {}

	// Polyfill for Function.prototype.bind
	function bind(fn, thisArg) {
	  return function() {
	    fn.apply(thisArg, arguments);
	  };
	}

	function Promise(fn) {
	  if (!(this instanceof Promise))
	    throw new TypeError('Promises must be constructed via new');
	  if (typeof fn !== 'function') throw new TypeError('not a function');
	  this._state = 0;
	  this._handled = false;
	  this._value = undefined;
	  this._deferreds = [];

	  doResolve(fn, this);
	}

	function handle(self, deferred) {
	  while (self._state === 3) {
	    self = self._value;
	  }
	  if (self._state === 0) {
	    self._deferreds.push(deferred);
	    return;
	  }
	  self._handled = true;
	  Promise._immediateFn(function() {
	    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	      return;
	    }
	    var ret;
	    try {
	      ret = cb(self._value);
	    } catch (e) {
	      reject(deferred.promise, e);
	      return;
	    }
	    resolve(deferred.promise, ret);
	  });
	}

	function resolve(self, newValue) {
	  try {
	    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	    if (newValue === self)
	      throw new TypeError('A promise cannot be resolved with itself.');
	    if (
	      newValue &&
	      (typeof newValue === 'object' || typeof newValue === 'function')
	    ) {
	      var then = newValue.then;
	      if (newValue instanceof Promise) {
	        self._state = 3;
	        self._value = newValue;
	        finale(self);
	        return;
	      } else if (typeof then === 'function') {
	        doResolve(bind(then, newValue), self);
	        return;
	      }
	    }
	    self._state = 1;
	    self._value = newValue;
	    finale(self);
	  } catch (e) {
	    reject(self, e);
	  }
	}

	function reject(self, newValue) {
	  self._state = 2;
	  self._value = newValue;
	  finale(self);
	}

	function finale(self) {
	  if (self._state === 2 && self._deferreds.length === 0) {
	    Promise._immediateFn(function() {
	      if (!self._handled) {
	        Promise._unhandledRejectionFn(self._value);
	      }
	    });
	  }

	  for (var i = 0, len = self._deferreds.length; i < len; i++) {
	    handle(self, self._deferreds[i]);
	  }
	  self._deferreds = null;
	}

	function Handler(onFulfilled, onRejected, promise) {
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, self) {
	  var done = false;
	  try {
	    fn(
	      function(value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      },
	      function(reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      }
	    );
	  } catch (ex) {
	    if (done) return;
	    done = true;
	    reject(self, ex);
	  }
	}

	Promise.prototype['catch'] = function(onRejected) {
	  return this.then(null, onRejected);
	};

	Promise.prototype.then = function(onFulfilled, onRejected) {
	  var prom = new this.constructor(noop);

	  handle(this, new Handler(onFulfilled, onRejected, prom));
	  return prom;
	};

	Promise.prototype['finally'] = function(callback) {
	  var constructor = this.constructor;
	  return this.then(
	    function(value) {
	      return constructor.resolve(callback()).then(function() {
	        return value;
	      });
	    },
	    function(reason) {
	      return constructor.resolve(callback()).then(function() {
	        return constructor.reject(reason);
	      });
	    }
	  );
	};

	Promise.all = function(arr) {
	  return new Promise(function(resolve, reject) {
	    if (!arr || typeof arr.length === 'undefined')
	      throw new TypeError('Promise.all accepts an array');
	    var args = Array.prototype.slice.call(arr);
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;

	    function res(i, val) {
	      try {
	        if (val && (typeof val === 'object' || typeof val === 'function')) {
	          var then = val.then;
	          if (typeof then === 'function') {
	            then.call(
	              val,
	              function(val) {
	                res(i, val);
	              },
	              reject
	            );
	            return;
	          }
	        }
	        args[i] = val;
	        if (--remaining === 0) {
	          resolve(args);
	        }
	      } catch (ex) {
	        reject(ex);
	      }
	    }

	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};

	Promise.resolve = function(value) {
	  if (value && typeof value === 'object' && value.constructor === Promise) {
	    return value;
	  }

	  return new Promise(function(resolve) {
	    resolve(value);
	  });
	};

	Promise.reject = function(value) {
	  return new Promise(function(resolve, reject) {
	    reject(value);
	  });
	};

	Promise.race = function(values) {
	  return new Promise(function(resolve, reject) {
	    for (var i = 0, len = values.length; i < len; i++) {
	      values[i].then(resolve, reject);
	    }
	  });
	};

	// Use polyfill for setImmediate for performance gains
	Promise._immediateFn =
	  (typeof setImmediate === 'function' &&
	    function(fn) {
	      setImmediate(fn);
	    }) ||
	  function(fn) {
	    setTimeoutFunc(fn, 0);
	  };

	Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
	  if (typeof console !== 'undefined' && console) {
	    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	  }
	};

	var globalNS = (function() {
	  // the only reliable means to get the global object is
	  // `Function('return this')()`
	  // However, this causes CSP violations in Chrome apps.
	  if (typeof self !== 'undefined') {
	    return self;
	  }
	  if (typeof window !== 'undefined') {
	    return window;
	  }
	  if (typeof global !== 'undefined') {
	    return global;
	  }
	  throw new Error('unable to locate global object');
	})();

	if (!globalNS.Promise) {
	  globalNS.Promise = Promise;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.5.5' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document) && _isObject(document.createElement);
	var _domCreate = function (it) {
	  return is ? document.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var _redefine = createCommonjsModule(function (module) {
	var SRC = _uid('src');
	var TO_STRING = 'toString';
	var $toString = Function[TO_STRING];
	var TPL = ('' + $toString).split(TO_STRING);

	_core.inspectSource = function (it) {
	  return $toString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === _global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    _hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    _hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});
	});

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // extend global
	    if (target) _redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) _hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	_global.core = _core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return _cof(arg) == 'Array';
	};

	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});
	var _shared = function (key) {
	  return store[key] || (store[key] = {});
	};

	var _wks = createCommonjsModule(function (module) {
	var store = _shared('wks');

	var Symbol = _global.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var SPECIES = _wks('species');

	var _arraySpeciesConstructor = function (original) {
	  var C;
	  if (_isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
	    if (_isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


	var _arraySpeciesCreate = function (original, length) {
	  return new (_arraySpeciesConstructor(original))(length);
	};

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex





	var _arrayMethods = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || _arraySpeciesCreate;
	  return function ($this, callbackfn, that) {
	    var O = _toObject($this);
	    var self = _iobject(O);
	    var f = _ctx(callbackfn, that, 3);
	    var length = _toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = _wks('unscopables');
	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
	var _addToUnscopables = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

	var $find = _arrayMethods(5);
	var KEY = 'find';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	_export(_export.P + _export.F * forced, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY);

	var find = _core.Array.find;

	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

	var $find$1 = _arrayMethods(6);
	var KEY$1 = 'findIndex';
	var forced$1 = true;
	// Shouldn't skip holes
	if (KEY$1 in []) Array(1)[KEY$1](function () { forced$1 = false; });
	_export(_export.P + _export.F * forced$1, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY$1);

	var findIndex = _core.Array.findIndex;

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var f$1 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$1
	};

	var f$2 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$2
	};

	// 19.1.2.1 Object.assign(target, source, ...)





	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	var _objectAssign = !$assign || _fails(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = _toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = _objectGops.f;
	  var isEnum = _objectPie.f;
	  while (aLen > index) {
	    var S = _iobject(arguments[index++]);
	    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;

	// 19.1.3.1 Object.assign(target, source)


	_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

	var assign = _core.Object.assign;

	// 7.2.8 IsRegExp(argument)


	var MATCH = _wks('match');
	var _isRegexp = function (it) {
	  var isRegExp;
	  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
	};

	// helper for String#{startsWith, endsWith, includes}



	var _stringContext = function (that, searchString, NAME) {
	  if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(_defined(that));
	};

	var MATCH$1 = _wks('match');
	var _failsIsRegexp = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH$1] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
	};

	var STARTS_WITH = 'startsWith';
	var $startsWith = ''[STARTS_WITH];

	_export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = _stringContext(this, searchString, STARTS_WITH);
	    var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

	var startsWith = _core.String.startsWith;

	var _stringRepeat = function repeat(count) {
	  var str = String(_defined(this));
	  var res = '';
	  var n = _toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	  return res;
	};

	_export(_export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: _stringRepeat
	});

	var repeat = _core.String.repeat;

	var _meta = createCommonjsModule(function (module) {
	var META = _uid('meta');


	var setDesc = _objectDp.f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !_fails(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};
	});
	var _meta_1 = _meta.KEY;
	var _meta_2 = _meta.NEED;
	var _meta_3 = _meta.fastKey;
	var _meta_4 = _meta.getWeak;
	var _meta_5 = _meta.onFreeze;

	var def = _objectDp.f;

	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var f$3 = _wks;

	var _wksExt = {
		f: f$3
	};

	var _library = false;

	var defineProperty = _objectDp.f;
	var _wksDefine = function (name) {
	  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
	};

	// all enumerable object keys, includes symbols



	var _enumKeys = function (it) {
	  var result = _objectKeys(it);
	  var getSymbols = _objectGops.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = _objectPie.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$1 = _global.document;
	var _html = document$1 && document$1.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$4
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

	var gOPN = _objectGopn.f;
	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
	};

	var _objectGopnExt = {
		f: f$5
	};

	var gOPD = Object.getOwnPropertyDescriptor;

	var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if (_ie8DomDefine) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$6
	};

	// ECMAScript 6 symbols shim





	var META = _meta.KEY;



















	var gOPD$1 = _objectGopd.f;
	var dP$1 = _objectDp.f;
	var gOPN$1 = _objectGopnExt.f;
	var $Symbol = _global.Symbol;
	var $JSON = _global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE$2 = 'prototype';
	var HIDDEN = _wks('_hidden');
	var TO_PRIMITIVE = _wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = _shared('symbol-registry');
	var AllSymbols = _shared('symbols');
	var OPSymbols = _shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE$2];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = _global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = _descriptors && _fails(function () {
	  return _objectCreate(dP$1({}, 'a', {
	    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD$1(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP$1(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP$1(ObjectProto, key, protoDesc);
	} : dP$1;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  _anObject(it);
	  key = _toPrimitive(key, true);
	  _anObject(D);
	  if (_has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP$1(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  _anObject(it);
	  var keys = _enumKeys(P = _toIobject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = _toPrimitive(key, true));
	  if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
	  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = _toIobject(it);
	  key = _toPrimitive(key, true);
	  if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
	  var D = gOPD$1(it, key);
	  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN$1(_toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, _propertyDesc(1, value));
	    };
	    if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
	    return this._k;
	  });

	  _objectGopd.f = $getOwnPropertyDescriptor;
	  _objectDp.f = $defineProperty;
	  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
	  _objectPie.f = $propertyIsEnumerable;
	  _objectGops.f = $getOwnPropertySymbols;

	  if (_descriptors && !_library) {
	    _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  _wksExt.f = function (name) {
	    return wrap(_wks(name));
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

	for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

	_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return _has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!_isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	_setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	_setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	_setToStringTag(_global.JSON, 'JSON', true);

	// getting tag from 19.1.3.6 Object.prototype.toString()

	var TAG$1 = _wks('toStringTag');
	// ES3 wrong here
	var ARG = _cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
	    // builtinTag case
	    : ARG ? _cof(O)
	    // ES3 arguments fallback
	    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	// 19.1.3.6 Object.prototype.toString()

	var test = {};
	test[_wks('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  _redefine(Object.prototype, 'toString', function toString() {
	    return '[object ' + _classof(this) + ']';
	  }, true);
	}

	_wksDefine('asyncIterator');

	_wksDefine('observable');

	var symbol = _core.Symbol;

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var _iterators = {};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = _sharedKey('IE_PROTO');
	var ObjectProto$1 = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto$1 : null;
	};

	var ITERATOR = _wks('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    _hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	var $at = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	_addToUnscopables('keys');
	_addToUnscopables('values');
	_addToUnscopables('entries');

	var ITERATOR$1 = _wks('iterator');
	var TO_STRING_TAG = _wks('toStringTag');
	var ArrayValues = _iterators.Array;

	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};

	for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = _global[NAME];
	  var proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
	    if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
	    _iterators[NAME] = ArrayValues;
	    if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
	  }
	}

	var iterator = _wksExt.f('iterator');

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15).setImmediate, (function() { return this; }())))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
	            (typeof self !== "undefined" && self) ||
	            window;
	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(scope, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(16);
	// On some exotic environments, it's not clear which object `setimmediate` was
	// able to install onto.  Search each possibility in the same order as the
	// `setimmediate` library.
	exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
	                       (typeof global !== "undefined" && global.setImmediate) ||
	                       (this && this.setImmediate);
	exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
	                         (typeof global !== "undefined" && global.clearImmediate) ||
	                         (this && this.clearImmediate);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(17)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]

	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }

	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	    } else if (Array.isArray(headers)) {
	      headers.forEach(function(header) {
	        this.append(header[0], header[1])
	      }, this)
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }

	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body

	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = String(input)
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	    // https://tools.ietf.org/html/rfc7230#section-3.2
	    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
	    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = options.status === undefined ? 200 : options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      } else if (request.credentials === 'omit') {
	        xhr.withCredentials = false
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	var util = __webpack_require__(20);

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var contains = function (obj, key) {
	    return Object.prototype.hasOwnProperty.call(obj, key);
	};
	var DEFAULT_ENTRY_NAME = '[DEFAULT]';
	// An array to capture listeners before the true auth functions
	// exist
	var tokenListeners = [];
	/**
	 * Global context object for a collection of services using
	 * a shared authentication state.
	 */
	var FirebaseAppImpl = /** @class */ (function () {
	    function FirebaseAppImpl(options, config, firebase_) {
	        this.firebase_ = firebase_;
	        this.isDeleted_ = false;
	        this.services_ = {};
	        this.name_ = config.name;
	        this._automaticDataCollectionEnabled =
	            config.automaticDataCollectionEnabled || false;
	        this.options_ = util.deepCopy(options);
	        this.INTERNAL = {
	            getUid: function () { return null; },
	            getToken: function () { return Promise.resolve(null); },
	            addAuthTokenListener: function (callback) {
	                tokenListeners.push(callback);
	                // Make sure callback is called, asynchronously, in the absence of the auth module
	                setTimeout(function () { return callback(null); }, 0);
	            },
	            removeAuthTokenListener: function (callback) {
	                tokenListeners = tokenListeners.filter(function (listener) { return listener !== callback; });
	            }
	        };
	    }
	    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
	        get: function () {
	            this.checkDestroyed_();
	            return this._automaticDataCollectionEnabled;
	        },
	        set: function (val) {
	            this.checkDestroyed_();
	            this._automaticDataCollectionEnabled = val;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
	        get: function () {
	            this.checkDestroyed_();
	            return this.name_;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
	        get: function () {
	            this.checkDestroyed_();
	            return this.options_;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FirebaseAppImpl.prototype.delete = function () {
	        var _this = this;
	        return new Promise(function (resolve) {
	            _this.checkDestroyed_();
	            resolve();
	        })
	            .then(function () {
	            _this.firebase_.INTERNAL.removeApp(_this.name_);
	            var services = [];
	            Object.keys(_this.services_).forEach(function (serviceKey) {
	                Object.keys(_this.services_[serviceKey]).forEach(function (instanceKey) {
	                    services.push(_this.services_[serviceKey][instanceKey]);
	                });
	            });
	            return Promise.all(services.map(function (service) {
	                return service.INTERNAL.delete();
	            }));
	        })
	            .then(function () {
	            _this.isDeleted_ = true;
	            _this.services_ = {};
	        });
	    };
	    /**
	     * Return a service instance associated with this app (creating it
	     * on demand), identified by the passed instanceIdentifier.
	     *
	     * NOTE: Currently storage is the only one that is leveraging this
	     * functionality. They invoke it by calling:
	     *
	     * ```javascript
	     * firebase.app().storage('STORAGE BUCKET ID')
	     * ```
	     *
	     * The service name is passed to this already
	     * @internal
	     */
	    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
	        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
	        this.checkDestroyed_();
	        if (!this.services_[name]) {
	            this.services_[name] = {};
	        }
	        if (!this.services_[name][instanceIdentifier]) {
	            /**
	             * If a custom instance has been defined (i.e. not '[DEFAULT]')
	             * then we will pass that instance on, otherwise we pass `null`
	             */
	            var instanceSpecifier = instanceIdentifier !== DEFAULT_ENTRY_NAME
	                ? instanceIdentifier
	                : undefined;
	            var service = this.firebase_.INTERNAL.factories[name](this, this.extendApp.bind(this), instanceSpecifier);
	            this.services_[name][instanceIdentifier] = service;
	        }
	        return this.services_[name][instanceIdentifier];
	    };
	    /**
	     * Callback function used to extend an App instance at the time
	     * of service instance creation.
	     */
	    FirebaseAppImpl.prototype.extendApp = function (props) {
	        var _this = this;
	        // Copy the object onto the FirebaseAppImpl prototype
	        util.deepExtend(this, props);
	        /**
	         * If the app has overwritten the addAuthTokenListener stub, forward
	         * the active token listeners on to the true fxn.
	         *
	         * TODO: This function is required due to our current module
	         * structure. Once we are able to rely strictly upon a single module
	         * implementation, this code should be refactored and Auth should
	         * provide these stubs and the upgrade logic
	         */
	        if (props.INTERNAL && props.INTERNAL.addAuthTokenListener) {
	            tokenListeners.forEach(function (listener) {
	                _this.INTERNAL.addAuthTokenListener(listener);
	            });
	            tokenListeners = [];
	        }
	    };
	    /**
	     * This function will throw an Error if the App has already been deleted -
	     * use before performing API actions on the App.
	     */
	    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
	        if (this.isDeleted_) {
	            error('app-deleted', { name: this.name_ });
	        }
	    };
	    return FirebaseAppImpl;
	}());
	// Prevent dead-code elimination of these methods w/o invalid property
	// copying.
	(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
	    FirebaseAppImpl.prototype.delete ||
	    console.log('dc');
	/**
	 * Return a firebase namespace object.
	 *
	 * In production, this will be called exactly once and the result
	 * assigned to the 'firebase' global.  It may be called multiple times
	 * in unit tests.
	 */
	function createFirebaseNamespace() {
	    var apps_ = {};
	    var factories = {};
	    var appHooks = {};
	    // A namespace is a plain JavaScript Object.
	    var namespace = {
	        // Hack to prevent Babel from modifying the object returned
	        // as the firebase namespace.
	        __esModule: true,
	        initializeApp: initializeApp,
	        app: app,
	        apps: null,
	        Promise: Promise,
	        SDK_VERSION: '5.0.4',
	        INTERNAL: {
	            registerService: registerService,
	            createFirebaseNamespace: createFirebaseNamespace,
	            extendNamespace: extendNamespace,
	            createSubscribe: util.createSubscribe,
	            ErrorFactory: util.ErrorFactory,
	            removeApp: removeApp,
	            factories: factories,
	            useAsService: useAsService,
	            Promise: Promise,
	            deepExtend: util.deepExtend
	        }
	    };
	    // Inject a circular default export to allow Babel users who were previously
	    // using:
	    //
	    //   import firebase from 'firebase';
	    //   which becomes: var firebase = require('firebase').default;
	    //
	    // instead of
	    //
	    //   import * as firebase from 'firebase';
	    //   which becomes: var firebase = require('firebase');
	    util.patchProperty(namespace, 'default', namespace);
	    // firebase.apps is a read-only getter.
	    Object.defineProperty(namespace, 'apps', {
	        get: getApps
	    });
	    /**
	     * Called by App.delete() - but before any services associated with the App
	     * are deleted.
	     */
	    function removeApp(name) {
	        var app = apps_[name];
	        callAppHooks(app, 'delete');
	        delete apps_[name];
	    }
	    /**
	     * Get the App object for a given name (or DEFAULT).
	     */
	    function app(name) {
	        name = name || DEFAULT_ENTRY_NAME;
	        if (!contains(apps_, name)) {
	            error('no-app', { name: name });
	        }
	        return apps_[name];
	    }
	    util.patchProperty(app, 'App', FirebaseAppImpl);
	    function initializeApp(options, rawConfig) {
	        if (rawConfig === void 0) { rawConfig = {}; }
	        if (typeof rawConfig !== 'object' || rawConfig === null) {
	            var name_1 = rawConfig;
	            rawConfig = { name: name_1 };
	        }
	        var config = rawConfig;
	        if (config.name === undefined) {
	            config.name = DEFAULT_ENTRY_NAME;
	        }
	        var name = config.name;
	        if (typeof name !== 'string' || !name) {
	            error('bad-app-name', { name: name + '' });
	        }
	        if (contains(apps_, name)) {
	            error('duplicate-app', { name: name });
	        }
	        var app = new FirebaseAppImpl(options, config, namespace);
	        apps_[name] = app;
	        callAppHooks(app, 'create');
	        return app;
	    }
	    /*
	     * Return an array of all the non-deleted FirebaseApps.
	     */
	    function getApps() {
	        // Make a copy so caller cannot mutate the apps list.
	        return Object.keys(apps_).map(function (name) { return apps_[name]; });
	    }
	    /*
	     * Register a Firebase Service.
	     *
	     * firebase.INTERNAL.registerService()
	     *
	     * TODO: Implement serviceProperties.
	     */
	    function registerService(name, createService, serviceProperties, appHook, allowMultipleInstances) {
	        // Cannot re-register a service that already exists
	        if (factories[name]) {
	            error('duplicate-service', { name: name });
	        }
	        // Capture the service factory for later service instantiation
	        factories[name] = createService;
	        // Capture the appHook, if passed
	        if (appHook) {
	            appHooks[name] = appHook;
	            // Run the **new** app hook on all existing apps
	            getApps().forEach(function (app) {
	                appHook('create', app);
	            });
	        }
	        // The Service namespace is an accessor function ...
	        var serviceNamespace = function (appArg) {
	            if (appArg === void 0) { appArg = app(); }
	            if (typeof appArg[name] !== 'function') {
	                // Invalid argument.
	                // This happens in the following case: firebase.storage('gs:/')
	                error('invalid-app-argument', { name: name });
	            }
	            // Forward service instance lookup to the FirebaseApp.
	            return appArg[name]();
	        };
	        // ... and a container for service-level properties.
	        if (serviceProperties !== undefined) {
	            util.deepExtend(serviceNamespace, serviceProperties);
	        }
	        // Monkey-patch the serviceNamespace onto the firebase namespace
	        namespace[name] = serviceNamespace;
	        // Patch the FirebaseAppImpl prototype
	        FirebaseAppImpl.prototype[name] = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            var serviceFxn = this._getService.bind(this, name);
	            return serviceFxn.apply(this, allowMultipleInstances ? args : []);
	        };
	        return serviceNamespace;
	    }
	    /**
	     * Patch the top-level firebase namespace with additional properties.
	     *
	     * firebase.INTERNAL.extendNamespace()
	     */
	    function extendNamespace(props) {
	        util.deepExtend(namespace, props);
	    }
	    function callAppHooks(app, eventName) {
	        Object.keys(factories).forEach(function (serviceName) {
	            // Ignore virtual services
	            var factoryName = useAsService(app, serviceName);
	            if (factoryName === null) {
	                return;
	            }
	            if (appHooks[factoryName]) {
	                appHooks[factoryName](eventName, app);
	            }
	        });
	    }
	    // Map the requested service to a registered service name
	    // (used to map auth to serverAuth service when needed).
	    function useAsService(app, name) {
	        if (name === 'serverAuth') {
	            return null;
	        }
	        var useService = name;
	        var options = app.options;
	        return useService;
	    }
	    return namespace;
	}
	function error(code, args) {
	    throw appErrors.create(code, args);
	}
	// TypeScript does not support non-string indexes!
	// let errors: {[code: AppError: string} = {
	var errors = {
	    'no-app': "No Firebase App '{$name}' has been created - " +
	        'call Firebase App.initializeApp()',
	    'bad-app-name': "Illegal App name: '{$name}",
	    'duplicate-app': "Firebase App named '{$name}' already exists",
	    'app-deleted': "Firebase App named '{$name}' already deleted",
	    'duplicate-service': "Firebase service named '{$name}' already registered",
	    'sa-not-supported': 'Initializing the Firebase SDK with a service ' +
	        'account is only allowed in a Node.js environment. On client ' +
	        'devices, you should instead initialize the SDK with an api key and ' +
	        'auth domain',
	    'invalid-app-argument': 'firebase.{$name}() takes either no argument or a ' +
	        'Firebase App instance.'
	};
	var appErrors = new util.ErrorFactory('app', 'Firebase', errors);

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var firebase = createFirebaseNamespace();

	exports.firebase = firebase;
	exports.default = firebase;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	var tslib_1 = __webpack_require__(21);

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
	 */
	var CONSTANTS = {
	    /**
	     * @define {boolean} Whether this is the client Node.js SDK.
	     */
	    NODE_CLIENT: false,
	    /**
	     * @define {boolean} Whether this is the Admin Node.js SDK.
	     */
	    NODE_ADMIN: false,
	    /**
	     * Firebase SDK Version
	     */
	    SDK_VERSION: '${JSCORE_VERSION}'
	};

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * Throws an error if the provided assertion is falsy
	 * @param {*} assertion The assertion to be tested for falsiness
	 * @param {!string} message The message to display if the check fails
	 */
	var assert = function (assertion, message) {
	    if (!assertion) {
	        throw assertionError(message);
	    }
	};
	/**
	 * Returns an Error object suitable for throwing.
	 * @param {string} message
	 * @return {!Error}
	 */
	var assertionError = function (message) {
	    return new Error('Firebase Database (' +
	        CONSTANTS.SDK_VERSION +
	        ') INTERNAL ASSERT FAILED: ' +
	        message);
	};

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var stringToByteArray = function (str) {
	    // TODO(user): Use native implementations if/when available
	    var out = [], p = 0;
	    for (var i = 0; i < str.length; i++) {
	        var c = str.charCodeAt(i);
	        if (c < 128) {
	            out[p++] = c;
	        }
	        else if (c < 2048) {
	            out[p++] = (c >> 6) | 192;
	            out[p++] = (c & 63) | 128;
	        }
	        else if ((c & 0xfc00) == 0xd800 &&
	            i + 1 < str.length &&
	            (str.charCodeAt(i + 1) & 0xfc00) == 0xdc00) {
	            // Surrogate Pair
	            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
	            out[p++] = (c >> 18) | 240;
	            out[p++] = ((c >> 12) & 63) | 128;
	            out[p++] = ((c >> 6) & 63) | 128;
	            out[p++] = (c & 63) | 128;
	        }
	        else {
	            out[p++] = (c >> 12) | 224;
	            out[p++] = ((c >> 6) & 63) | 128;
	            out[p++] = (c & 63) | 128;
	        }
	    }
	    return out;
	};
	/**
	 * Turns an array of numbers into the string given by the concatenation of the
	 * characters to which the numbers correspond.
	 * @param {Array<number>} bytes Array of numbers representing characters.
	 * @return {string} Stringification of the array.
	 */
	var byteArrayToString = function (bytes) {
	    // TODO(user): Use native implementations if/when available
	    var out = [], pos = 0, c = 0;
	    while (pos < bytes.length) {
	        var c1 = bytes[pos++];
	        if (c1 < 128) {
	            out[c++] = String.fromCharCode(c1);
	        }
	        else if (c1 > 191 && c1 < 224) {
	            var c2 = bytes[pos++];
	            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
	        }
	        else if (c1 > 239 && c1 < 365) {
	            // Surrogate Pair
	            var c2 = bytes[pos++];
	            var c3 = bytes[pos++];
	            var c4 = bytes[pos++];
	            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
	                0x10000;
	            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
	            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
	        }
	        else {
	            var c2 = bytes[pos++];
	            var c3 = bytes[pos++];
	            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
	        }
	    }
	    return out.join('');
	};
	// Static lookup maps, lazily populated by init_()
	var base64 = {
	    /**
	     * Maps bytes to characters.
	     * @type {Object}
	     * @private
	     */
	    byteToCharMap_: null,
	    /**
	     * Maps characters to bytes.
	     * @type {Object}
	     * @private
	     */
	    charToByteMap_: null,
	    /**
	     * Maps bytes to websafe characters.
	     * @type {Object}
	     * @private
	     */
	    byteToCharMapWebSafe_: null,
	    /**
	     * Maps websafe characters to bytes.
	     * @type {Object}
	     * @private
	     */
	    charToByteMapWebSafe_: null,
	    /**
	     * Our default alphabet, shared between
	     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
	     * @type {string}
	     */
	    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
	    /**
	     * Our default alphabet. Value 64 (=) is special; it means "nothing."
	     * @type {string}
	     */
	    get ENCODED_VALS() {
	        return this.ENCODED_VALS_BASE + '+/=';
	    },
	    /**
	     * Our websafe alphabet.
	     * @type {string}
	     */
	    get ENCODED_VALS_WEBSAFE() {
	        return this.ENCODED_VALS_BASE + '-_.';
	    },
	    /**
	     * Whether this browser supports the atob and btoa functions. This extension
	     * started at Mozilla but is now implemented by many browsers. We use the
	     * ASSUME_* variables to avoid pulling in the full useragent detection library
	     * but still allowing the standard per-browser compilations.
	     *
	     * @type {boolean}
	     */
	    HAS_NATIVE_SUPPORT: typeof atob === 'function',
	    /**
	     * Base64-encode an array of bytes.
	     *
	     * @param {Array<number>|Uint8Array} input An array of bytes (numbers with
	     *     value in [0, 255]) to encode.
	     * @param {boolean=} opt_webSafe Boolean indicating we should use the
	     *     alternative alphabet.
	     * @return {string} The base64 encoded string.
	     */
	    encodeByteArray: function (input, opt_webSafe) {
	        if (!Array.isArray(input)) {
	            throw Error('encodeByteArray takes an array as a parameter');
	        }
	        this.init_();
	        var byteToCharMap = opt_webSafe
	            ? this.byteToCharMapWebSafe_
	            : this.byteToCharMap_;
	        var output = [];
	        for (var i = 0; i < input.length; i += 3) {
	            var byte1 = input[i];
	            var haveByte2 = i + 1 < input.length;
	            var byte2 = haveByte2 ? input[i + 1] : 0;
	            var haveByte3 = i + 2 < input.length;
	            var byte3 = haveByte3 ? input[i + 2] : 0;
	            var outByte1 = byte1 >> 2;
	            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
	            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
	            var outByte4 = byte3 & 0x3f;
	            if (!haveByte3) {
	                outByte4 = 64;
	                if (!haveByte2) {
	                    outByte3 = 64;
	                }
	            }
	            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
	        }
	        return output.join('');
	    },
	    /**
	     * Base64-encode a string.
	     *
	     * @param {string} input A string to encode.
	     * @param {boolean=} opt_webSafe If true, we should use the
	     *     alternative alphabet.
	     * @return {string} The base64 encoded string.
	     */
	    encodeString: function (input, opt_webSafe) {
	        // Shortcut for Mozilla browsers that implement
	        // a native base64 encoder in the form of "btoa/atob"
	        if (this.HAS_NATIVE_SUPPORT && !opt_webSafe) {
	            return btoa(input);
	        }
	        return this.encodeByteArray(stringToByteArray(input), opt_webSafe);
	    },
	    /**
	     * Base64-decode a string.
	     *
	     * @param {string} input to decode.
	     * @param {boolean=} opt_webSafe True if we should use the
	     *     alternative alphabet.
	     * @return {string} string representing the decoded value.
	     */
	    decodeString: function (input, opt_webSafe) {
	        // Shortcut for Mozilla browsers that implement
	        // a native base64 encoder in the form of "btoa/atob"
	        if (this.HAS_NATIVE_SUPPORT && !opt_webSafe) {
	            return atob(input);
	        }
	        return byteArrayToString(this.decodeStringToByteArray(input, opt_webSafe));
	    },
	    /**
	     * Base64-decode a string.
	     *
	     * In base-64 decoding, groups of four characters are converted into three
	     * bytes.  If the encoder did not apply padding, the input length may not
	     * be a multiple of 4.
	     *
	     * In this case, the last group will have fewer than 4 characters, and
	     * padding will be inferred.  If the group has one or two characters, it decodes
	     * to one byte.  If the group has three characters, it decodes to two bytes.
	     *
	     * @param {string} input Input to decode.
	     * @param {boolean=} opt_webSafe True if we should use the web-safe alphabet.
	     * @return {!Array<number>} bytes representing the decoded value.
	     */
	    decodeStringToByteArray: function (input, opt_webSafe) {
	        this.init_();
	        var charToByteMap = opt_webSafe
	            ? this.charToByteMapWebSafe_
	            : this.charToByteMap_;
	        var output = [];
	        for (var i = 0; i < input.length;) {
	            var byte1 = charToByteMap[input.charAt(i++)];
	            var haveByte2 = i < input.length;
	            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
	            ++i;
	            var haveByte3 = i < input.length;
	            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
	            ++i;
	            var haveByte4 = i < input.length;
	            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
	            ++i;
	            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
	                throw Error();
	            }
	            var outByte1 = (byte1 << 2) | (byte2 >> 4);
	            output.push(outByte1);
	            if (byte3 != 64) {
	                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
	                output.push(outByte2);
	                if (byte4 != 64) {
	                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
	                    output.push(outByte3);
	                }
	            }
	        }
	        return output;
	    },
	    /**
	     * Lazy static initialization function. Called before
	     * accessing any of the static map variables.
	     * @private
	     */
	    init_: function () {
	        if (!this.byteToCharMap_) {
	            this.byteToCharMap_ = {};
	            this.charToByteMap_ = {};
	            this.byteToCharMapWebSafe_ = {};
	            this.charToByteMapWebSafe_ = {};
	            // We want quick mappings back and forth, so we precompute two maps.
	            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
	                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
	                this.charToByteMap_[this.byteToCharMap_[i]] = i;
	                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
	                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
	                // Be forgiving when decoding and correctly decode both encodings.
	                if (i >= this.ENCODED_VALS_BASE.length) {
	                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
	                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
	                }
	            }
	        }
	    }
	};
	/**
	 * URL-safe base64 encoding
	 * @param {!string} str
	 * @return {!string}
	 */
	var base64Encode = function (str) {
	    var utf8Bytes = stringToByteArray(str);
	    return base64.encodeByteArray(utf8Bytes, true);
	};
	/**
	 * URL-safe base64 decoding
	 *
	 * NOTE: DO NOT use the global atob() function - it does NOT support the
	 * base64Url variant encoding.
	 *
	 * @param {string} str To be decoded
	 * @return {?string} Decoded result, if possible
	 */
	var base64Decode = function (str) {
	    try {
	        return base64.decodeString(str, true);
	    }
	    catch (e) {
	        console.error('base64Decode failed: ', e);
	    }
	    return null;
	};

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * Do a deep-copy of basic JavaScript Objects or Arrays.
	 */
	function deepCopy(value) {
	    return deepExtend(undefined, value);
	}
	/**
	 * Copy properties from source to target (recursively allows extension
	 * of Objects and Arrays).  Scalar values in the target are over-written.
	 * If target is undefined, an object of the appropriate type will be created
	 * (and returned).
	 *
	 * We recursively copy all child properties of plain Objects in the source- so
	 * that namespace- like dictionaries are merged.
	 *
	 * Note that the target can be a function, in which case the properties in
	 * the source Object are copied onto it as static properties of the Function.
	 */
	function deepExtend(target, source) {
	    if (!(source instanceof Object)) {
	        return source;
	    }
	    switch (source.constructor) {
	        case Date:
	            // Treat Dates like scalars; if the target date object had any child
	            // properties - they will be lost!
	            var dateValue = source;
	            return new Date(dateValue.getTime());
	        case Object:
	            if (target === undefined) {
	                target = {};
	            }
	            break;
	        case Array:
	            // Always copy the array source and overwrite the target.
	            target = [];
	            break;
	        default:
	            // Not a plain Object - treat it as a scalar.
	            return source;
	    }
	    for (var prop in source) {
	        if (!source.hasOwnProperty(prop)) {
	            continue;
	        }
	        target[prop] = deepExtend(target[prop], source[prop]);
	    }
	    return target;
	}
	// TODO: Really needed (for JSCompiler type checking)?
	function patchProperty(obj, prop, value) {
	    obj[prop] = value;
	}

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var Deferred = /** @class */ (function () {
	    function Deferred() {
	        var _this = this;
	        this.promise = new Promise(function (resolve, reject) {
	            _this.resolve = resolve;
	            _this.reject = reject;
	        });
	    }
	    /**
	     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
	     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
	     * and returns a node-style callback which will resolve or reject the Deferred's promise.
	     * @param {((?function(?(Error)): (?|undefined))| (?function(?(Error),?=): (?|undefined)))=} callback
	     * @return {!function(?(Error), ?=)}
	     */
	    Deferred.prototype.wrapCallback = function (callback) {
	        var _this = this;
	        return function (error, value) {
	            if (error) {
	                _this.reject(error);
	            }
	            else {
	                _this.resolve(value);
	            }
	            if (typeof callback === 'function') {
	                // Attaching noop handler just in case developer wasn't expecting
	                // promises
	                _this.promise.catch(function () { });
	                // Some of our callbacks don't expect a value and our own tests
	                // assert that the parameter length is 1
	                if (callback.length === 1) {
	                    callback(error);
	                }
	                else {
	                    callback(error, value);
	                }
	            }
	        };
	    };
	    return Deferred;
	}());

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * Returns navigator.userAgent string or '' if it's not defined.
	 * @return {string} user agent string
	 */
	var getUA = function () {
	    if (typeof navigator !== 'undefined' &&
	        typeof navigator['userAgent'] === 'string') {
	        return navigator['userAgent'];
	    }
	    else {
	        return '';
	    }
	};
	/**
	 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
	 *
	 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap in the Ripple emulator) nor
	 * Cordova `onDeviceReady`, which would normally wait for a callback.
	 *
	 * @return {boolean} isMobileCordova
	 */
	var isMobileCordova = function () {
	    return (typeof window !== 'undefined' &&
	        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
	        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
	};
	/**
	 * Detect React Native.
	 *
	 * @return {boolean} True if ReactNative environment is detected.
	 */
	var isReactNative = function () {
	    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
	};
	/**
	 * Detect Node.js.
	 *
	 * @return {boolean} True if Node.js environment is detected.
	 */
	var isNodeSdk = function () {
	    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
	};

	var ERROR_NAME = 'FirebaseError';
	var captureStackTrace = Error
	    .captureStackTrace;
	// Export for faking in tests
	function patchCapture(captureFake) {
	    var result = captureStackTrace;
	    captureStackTrace = captureFake;
	    return result;
	}
	var FirebaseError = /** @class */ (function () {
	    function FirebaseError(code, message) {
	        this.code = code;
	        this.message = message;
	        // We want the stack value, if implemented by Error
	        if (captureStackTrace) {
	            // Patches this.stack, omitted calls above ErrorFactory#create
	            captureStackTrace(this, ErrorFactory.prototype.create);
	        }
	        else {
	            try {
	                // In case of IE11, stack will be set only after error is raised.
	                // https://docs.microsoft.com/en-us/scripting/javascript/reference/stack-property-error-javascript
	                throw Error.apply(this, arguments);
	            }
	            catch (err) {
	                this.name = ERROR_NAME;
	                // Make non-enumerable getter for the property.
	                Object.defineProperty(this, 'stack', {
	                    get: function () {
	                        return err.stack;
	                    }
	                });
	            }
	        }
	    }
	    return FirebaseError;
	}());
	// Back-door inheritance
	FirebaseError.prototype = Object.create(Error.prototype);
	FirebaseError.prototype.constructor = FirebaseError;
	FirebaseError.prototype.name = ERROR_NAME;
	var ErrorFactory = /** @class */ (function () {
	    function ErrorFactory(service, serviceName, errors) {
	        this.service = service;
	        this.serviceName = serviceName;
	        this.errors = errors;
	        // Matches {$name}, by default.
	        this.pattern = /\{\$([^}]+)}/g;
	        // empty
	    }
	    ErrorFactory.prototype.create = function (code, data) {
	        if (data === undefined) {
	            data = {};
	        }
	        var template = this.errors[code];
	        var fullCode = this.service + '/' + code;
	        var message;
	        if (template === undefined) {
	            message = 'Error';
	        }
	        else {
	            message = template.replace(this.pattern, function (match, key) {
	                var value = data[key];
	                return value !== undefined ? value.toString() : '<' + key + '?>';
	            });
	        }
	        // Service: Error message (service/code).
	        message = this.serviceName + ': ' + message + ' (' + fullCode + ').';
	        var err = new FirebaseError(fullCode, message);
	        // Populate the Error object with message parts for programmatic
	        // accesses (e.g., e.file).
	        for (var prop in data) {
	            if (!data.hasOwnProperty(prop) || prop.slice(-1) === '_') {
	                continue;
	            }
	            err[prop] = data[prop];
	        }
	        return err;
	    };
	    return ErrorFactory;
	}());

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * Evaluates a JSON string into a javascript object.
	 *
	 * @param {string} str A string containing JSON.
	 * @return {*} The javascript object representing the specified JSON.
	 */
	function jsonEval(str) {
	    return JSON.parse(str);
	}
	/**
	 * Returns JSON representing a javascript object.
	 * @param {*} data Javascript object to be stringified.
	 * @return {string} The JSON contents of the object.
	 */
	function stringify(data) {
	    return JSON.stringify(data);
	}

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * Decodes a Firebase auth. token into constituent parts.
	 *
	 * Notes:
	 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
	 * - Doesn't check if the token is actually valid.
	 *
	 * @param {?string} token
	 * @return {{header: *, claims: *, data: *, signature: string}}
	 */
	var decode = function (token) {
	    var header = {}, claims = {}, data = {}, signature = '';
	    try {
	        var parts = token.split('.');
	        header = jsonEval(base64Decode(parts[0]) || '');
	        claims = jsonEval(base64Decode(parts[1]) || '');
	        signature = parts[2];
	        data = claims['d'] || {};
	        delete claims['d'];
	    }
	    catch (e) { }
	    return {
	        header: header,
	        claims: claims,
	        data: data,
	        signature: signature
	    };
	};
	/**
	 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
	 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
	 *
	 * Notes:
	 * - May return a false negative if there's no native base64 decoding support.
	 * - Doesn't check if the token is actually valid.
	 *
	 * @param {?string} token
	 * @return {boolean}
	 */
	var isValidTimestamp = function (token) {
	    var claims = decode(token).claims, now = Math.floor(new Date().getTime() / 1000), validSince, validUntil;
	    if (typeof claims === 'object') {
	        if (claims.hasOwnProperty('nbf')) {
	            validSince = claims['nbf'];
	        }
	        else if (claims.hasOwnProperty('iat')) {
	            validSince = claims['iat'];
	        }
	        if (claims.hasOwnProperty('exp')) {
	            validUntil = claims['exp'];
	        }
	        else {
	            // token will expire after 24h by default
	            validUntil = validSince + 86400;
	        }
	    }
	    return (now && validSince && validUntil && now >= validSince && now <= validUntil);
	};
	/**
	 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
	 *
	 * Notes:
	 * - May return null if there's no native base64 decoding support.
	 * - Doesn't check if the token is actually valid.
	 *
	 * @param {?string} token
	 * @return {?number}
	 */
	var issuedAtTime = function (token) {
	    var claims = decode(token).claims;
	    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
	        return claims['iat'];
	    }
	    return null;
	};
	/**
	 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time and non-empty
	 * signature.
	 *
	 * Notes:
	 * - May return a false negative if there's no native base64 decoding support.
	 * - Doesn't check if the token is actually valid.
	 *
	 * @param {?string} token
	 * @return {boolean}
	 */
	var isValidFormat = function (token) {
	    var decoded = decode(token), claims = decoded.claims;
	    return (!!decoded.signature &&
	        !!claims &&
	        typeof claims === 'object' &&
	        claims.hasOwnProperty('iat'));
	};
	/**
	 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
	 *
	 * Notes:
	 * - May return a false negative if there's no native base64 decoding support.
	 * - Doesn't check if the token is actually valid.
	 *
	 * @param {?string} token
	 * @return {boolean}
	 */
	var isAdmin = function (token) {
	    var claims = decode(token).claims;
	    return typeof claims === 'object' && claims['admin'] === true;
	};

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	// See http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/
	var contains = function (obj, key) {
	    return Object.prototype.hasOwnProperty.call(obj, key);
	};
	var safeGet = function (obj, key) {
	    if (Object.prototype.hasOwnProperty.call(obj, key))
	        return obj[key];
	    // else return undefined.
	};
	/**
	 * Enumerates the keys/values in an object, excluding keys defined on the prototype.
	 *
	 * @param {?Object.<K,V>} obj Object to enumerate.
	 * @param {!function(K, V)} fn Function to call for each key and value.
	 * @template K,V
	 */
	var forEach = function (obj, fn) {
	    for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) {
	            fn(key, obj[key]);
	        }
	    }
	};
	/**
	 * Copies all the (own) properties from one object to another.
	 * @param {!Object} objTo
	 * @param {!Object} objFrom
	 * @return {!Object} objTo
	 */
	var extend = function (objTo, objFrom) {
	    forEach(objFrom, function (key, value) {
	        objTo[key] = value;
	    });
	    return objTo;
	};
	/**
	 * Returns a clone of the specified object.
	 * @param {!Object} obj
	 * @return {!Object} cloned obj.
	 */
	var clone = function (obj) {
	    return extend({}, obj);
	};
	/**
	 * Returns true if obj has typeof "object" and is not null.  Unlike goog.isObject(), does not return true
	 * for functions.
	 *
	 * @param obj {*} A potential object.
	 * @returns {boolean} True if it's an object.
	 */
	var isNonNullObject = function (obj) {
	    return typeof obj === 'object' && obj !== null;
	};
	var isEmpty = function (obj) {
	    for (var key in obj) {
	        return false;
	    }
	    return true;
	};
	var getCount = function (obj) {
	    var rv = 0;
	    for (var key in obj) {
	        rv++;
	    }
	    return rv;
	};
	var map = function (obj, f, opt_obj) {
	    var res = {};
	    for (var key in obj) {
	        res[key] = f.call(opt_obj, obj[key], key, obj);
	    }
	    return res;
	};
	var findKey = function (obj, fn, opt_this) {
	    for (var key in obj) {
	        if (fn.call(opt_this, obj[key], key, obj)) {
	            return key;
	        }
	    }
	    return undefined;
	};
	var findValue = function (obj, fn, opt_this) {
	    var key = findKey(obj, fn, opt_this);
	    return key && obj[key];
	};
	var getAnyKey = function (obj) {
	    for (var key in obj) {
	        return key;
	    }
	};
	var getValues = function (obj) {
	    var res = [];
	    var i = 0;
	    for (var key in obj) {
	        res[i++] = obj[key];
	    }
	    return res;
	};
	/**
	 * Tests whether every key/value pair in an object pass the test implemented
	 * by the provided function
	 *
	 * @param {?Object.<K,V>} obj Object to test.
	 * @param {!function(K, V)} fn Function to call for each key and value.
	 * @template K,V
	 */
	var every = function (obj, fn) {
	    for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) {
	            if (!fn(key, obj[key])) {
	                return false;
	            }
	        }
	    }
	    return true;
	};

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a params
	 * object (e.g. {arg: 'val', arg2: 'val2'})
	 * Note: You must prepend it with ? when adding it to a URL.
	 *
	 * @param {!Object} querystringParams
	 * @return {string}
	 */
	var querystring = function (querystringParams) {
	    var params = [];
	    forEach(querystringParams, function (key, value) {
	        if (Array.isArray(value)) {
	            value.forEach(function (arrayVal) {
	                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
	            });
	        }
	        else {
	            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
	        }
	    });
	    return params.length ? '&' + params.join('&') : '';
	};
	/**
	 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object (e.g. {arg: 'val', arg2: 'val2'})
	 *
	 * @param {string} querystring
	 * @return {!Object}
	 */
	var querystringDecode = function (querystring) {
	    var obj = {};
	    var tokens = querystring.replace(/^\?/, '').split('&');
	    tokens.forEach(function (token) {
	        if (token) {
	            var key = token.split('=');
	            obj[key[0]] = key[1];
	        }
	    });
	    return obj;
	};

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	// Copyright 2011 The Closure Library Authors. All Rights Reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS-IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	/**
	 * @fileoverview Abstract cryptographic hash interface.
	 *
	 * See Sha1 and Md5 for sample implementations.
	 *
	 */
	/**
	 * Create a cryptographic hash instance.
	 *
	 * @constructor
	 * @struct
	 */
	var Hash = /** @class */ (function () {
	    function Hash() {
	        /**
	         * The block size for the hasher.
	         * @type {number}
	         */
	        this.blockSize = -1;
	    }
	    return Hash;
	}());

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * @fileoverview SHA-1 cryptographic hash.
	 * Variable names follow the notation in FIPS PUB 180-3:
	 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
	 *
	 * Usage:
	 *   var sha1 = new sha1();
	 *   sha1.update(bytes);
	 *   var hash = sha1.digest();
	 *
	 * Performance:
	 *   Chrome 23:   ~400 Mbit/s
	 *   Firefox 16:  ~250 Mbit/s
	 *
	 */
	/**
	 * SHA-1 cryptographic hash constructor.
	 *
	 * The properties declared here are discussed in the above algorithm document.
	 * @constructor
	 * @extends {Hash}
	 * @final
	 * @struct
	 */
	var Sha1 = /** @class */ (function (_super) {
	    tslib_1.__extends(Sha1, _super);
	    function Sha1() {
	        var _this = _super.call(this) || this;
	        /**
	         * Holds the previous values of accumulated variables a-e in the compress_
	         * function.
	         * @type {!Array<number>}
	         * @private
	         */
	        _this.chain_ = [];
	        /**
	         * A buffer holding the partially computed hash result.
	         * @type {!Array<number>}
	         * @private
	         */
	        _this.buf_ = [];
	        /**
	         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
	         * as the message schedule in the docs.
	         * @type {!Array<number>}
	         * @private
	         */
	        _this.W_ = [];
	        /**
	         * Contains data needed to pad messages less than 64 bytes.
	         * @type {!Array<number>}
	         * @private
	         */
	        _this.pad_ = [];
	        /**
	         * @private {number}
	         */
	        _this.inbuf_ = 0;
	        /**
	         * @private {number}
	         */
	        _this.total_ = 0;
	        _this.blockSize = 512 / 8;
	        _this.pad_[0] = 128;
	        for (var i = 1; i < _this.blockSize; ++i) {
	            _this.pad_[i] = 0;
	        }
	        _this.reset();
	        return _this;
	    }
	    Sha1.prototype.reset = function () {
	        this.chain_[0] = 0x67452301;
	        this.chain_[1] = 0xefcdab89;
	        this.chain_[2] = 0x98badcfe;
	        this.chain_[3] = 0x10325476;
	        this.chain_[4] = 0xc3d2e1f0;
	        this.inbuf_ = 0;
	        this.total_ = 0;
	    };
	    /**
	     * Internal compress helper function.
	     * @param {!Array<number>|!Uint8Array|string} buf Block to compress.
	     * @param {number=} opt_offset Offset of the block in the buffer.
	     * @private
	     */
	    Sha1.prototype.compress_ = function (buf, opt_offset) {
	        if (!opt_offset) {
	            opt_offset = 0;
	        }
	        var W = this.W_;
	        // get 16 big endian words
	        if (typeof buf === 'string') {
	            for (var i = 0; i < 16; i++) {
	                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
	                // have a bug that turns the post-increment ++ operator into pre-increment
	                // during JIT compilation.  We have code that depends heavily on SHA-1 for
	                // correctness and which is affected by this bug, so I've removed all uses
	                // of post-increment ++ in which the result value is used.  We can revert
	                // this change once the Safari bug
	                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
	                // most clients have been updated.
	                W[i] =
	                    (buf.charCodeAt(opt_offset) << 24) |
	                        (buf.charCodeAt(opt_offset + 1) << 16) |
	                        (buf.charCodeAt(opt_offset + 2) << 8) |
	                        buf.charCodeAt(opt_offset + 3);
	                opt_offset += 4;
	            }
	        }
	        else {
	            for (var i = 0; i < 16; i++) {
	                W[i] =
	                    (buf[opt_offset] << 24) |
	                        (buf[opt_offset + 1] << 16) |
	                        (buf[opt_offset + 2] << 8) |
	                        buf[opt_offset + 3];
	                opt_offset += 4;
	            }
	        }
	        // expand to 80 words
	        for (var i = 16; i < 80; i++) {
	            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
	        }
	        var a = this.chain_[0];
	        var b = this.chain_[1];
	        var c = this.chain_[2];
	        var d = this.chain_[3];
	        var e = this.chain_[4];
	        var f, k;
	        // TODO(user): Try to unroll this loop to speed up the computation.
	        for (var i = 0; i < 80; i++) {
	            if (i < 40) {
	                if (i < 20) {
	                    f = d ^ (b & (c ^ d));
	                    k = 0x5a827999;
	                }
	                else {
	                    f = b ^ c ^ d;
	                    k = 0x6ed9eba1;
	                }
	            }
	            else {
	                if (i < 60) {
	                    f = (b & c) | (d & (b | c));
	                    k = 0x8f1bbcdc;
	                }
	                else {
	                    f = b ^ c ^ d;
	                    k = 0xca62c1d6;
	                }
	            }
	            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
	            e = d;
	            d = c;
	            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
	            b = a;
	            a = t;
	        }
	        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
	        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
	        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
	        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
	        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
	    };
	    Sha1.prototype.update = function (bytes, opt_length) {
	        // TODO(johnlenz): tighten the function signature and remove this check
	        if (bytes == null) {
	            return;
	        }
	        if (opt_length === undefined) {
	            opt_length = bytes.length;
	        }
	        var lengthMinusBlock = opt_length - this.blockSize;
	        var n = 0;
	        // Using local instead of member variables gives ~5% speedup on Firefox 16.
	        var buf = this.buf_;
	        var inbuf = this.inbuf_;
	        // The outer while loop should execute at most twice.
	        while (n < opt_length) {
	            // When we have no data in the block to top up, we can directly process the
	            // input buffer (assuming it contains sufficient data). This gives ~25%
	            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
	            // the data is provided in large chunks (or in multiples of 64 bytes).
	            if (inbuf == 0) {
	                while (n <= lengthMinusBlock) {
	                    this.compress_(bytes, n);
	                    n += this.blockSize;
	                }
	            }
	            if (typeof bytes === 'string') {
	                while (n < opt_length) {
	                    buf[inbuf] = bytes.charCodeAt(n);
	                    ++inbuf;
	                    ++n;
	                    if (inbuf == this.blockSize) {
	                        this.compress_(buf);
	                        inbuf = 0;
	                        // Jump to the outer loop so we use the full-block optimization.
	                        break;
	                    }
	                }
	            }
	            else {
	                while (n < opt_length) {
	                    buf[inbuf] = bytes[n];
	                    ++inbuf;
	                    ++n;
	                    if (inbuf == this.blockSize) {
	                        this.compress_(buf);
	                        inbuf = 0;
	                        // Jump to the outer loop so we use the full-block optimization.
	                        break;
	                    }
	                }
	            }
	        }
	        this.inbuf_ = inbuf;
	        this.total_ += opt_length;
	    };
	    /** @override */
	    Sha1.prototype.digest = function () {
	        var digest = [];
	        var totalBits = this.total_ * 8;
	        // Add pad 0x80 0x00*.
	        if (this.inbuf_ < 56) {
	            this.update(this.pad_, 56 - this.inbuf_);
	        }
	        else {
	            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
	        }
	        // Add # bits.
	        for (var i = this.blockSize - 1; i >= 56; i--) {
	            this.buf_[i] = totalBits & 255;
	            totalBits /= 256; // Don't use bit-shifting here!
	        }
	        this.compress_(this.buf_);
	        var n = 0;
	        for (var i = 0; i < 5; i++) {
	            for (var j = 24; j >= 0; j -= 8) {
	                digest[n] = (this.chain_[i] >> j) & 255;
	                ++n;
	            }
	        }
	        return digest;
	    };
	    return Sha1;
	}(Hash));

	/**
	 * Helper to make a Subscribe function (just like Promise helps make a
	 * Thenable).
	 *
	 * @param executor Function which can make calls to a single Observer
	 *     as a proxy.
	 * @param onNoObservers Callback when count of Observers goes to zero.
	 */
	function createSubscribe(executor, onNoObservers) {
	    var proxy = new ObserverProxy(executor, onNoObservers);
	    return proxy.subscribe.bind(proxy);
	}
	/**
	 * Implement fan-out for any number of Observers attached via a subscribe
	 * function.
	 */
	var ObserverProxy = /** @class */ (function () {
	    /**
	     * @param executor Function which can make calls to a single Observer
	     *     as a proxy.
	     * @param onNoObservers Callback when count of Observers goes to zero.
	     */
	    function ObserverProxy(executor, onNoObservers) {
	        var _this = this;
	        this.observers = [];
	        this.unsubscribes = [];
	        this.observerCount = 0;
	        // Micro-task scheduling by calling task.then().
	        this.task = Promise.resolve();
	        this.finalized = false;
	        this.onNoObservers = onNoObservers;
	        // Call the executor asynchronously so subscribers that are called
	        // synchronously after the creation of the subscribe function
	        // can still receive the very first value generated in the executor.
	        this.task
	            .then(function () {
	            executor(_this);
	        })
	            .catch(function (e) {
	            _this.error(e);
	        });
	    }
	    ObserverProxy.prototype.next = function (value) {
	        this.forEachObserver(function (observer) {
	            observer.next(value);
	        });
	    };
	    ObserverProxy.prototype.error = function (error) {
	        this.forEachObserver(function (observer) {
	            observer.error(error);
	        });
	        this.close(error);
	    };
	    ObserverProxy.prototype.complete = function () {
	        this.forEachObserver(function (observer) {
	            observer.complete();
	        });
	        this.close();
	    };
	    /**
	     * Subscribe function that can be used to add an Observer to the fan-out list.
	     *
	     * - We require that no event is sent to a subscriber sychronously to their
	     *   call to subscribe().
	     */
	    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
	        var _this = this;
	        var observer;
	        if (nextOrObserver === undefined &&
	            error === undefined &&
	            complete === undefined) {
	            throw new Error('Missing Observer.');
	        }
	        // Assemble an Observer object when passed as callback functions.
	        if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
	            observer = nextOrObserver;
	        }
	        else {
	            observer = {
	                next: nextOrObserver,
	                error: error,
	                complete: complete
	            };
	        }
	        if (observer.next === undefined) {
	            observer.next = noop;
	        }
	        if (observer.error === undefined) {
	            observer.error = noop;
	        }
	        if (observer.complete === undefined) {
	            observer.complete = noop;
	        }
	        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
	        // Attempt to subscribe to a terminated Observable - we
	        // just respond to the Observer with the final error or complete
	        // event.
	        if (this.finalized) {
	            this.task.then(function () {
	                try {
	                    if (_this.finalError) {
	                        observer.error(_this.finalError);
	                    }
	                    else {
	                        observer.complete();
	                    }
	                }
	                catch (e) {
	                    // nothing
	                }
	                return;
	            });
	        }
	        this.observers.push(observer);
	        return unsub;
	    };
	    // Unsubscribe is synchronous - we guarantee that no events are sent to
	    // any unsubscribed Observer.
	    ObserverProxy.prototype.unsubscribeOne = function (i) {
	        if (this.observers === undefined || this.observers[i] === undefined) {
	            return;
	        }
	        delete this.observers[i];
	        this.observerCount -= 1;
	        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
	            this.onNoObservers(this);
	        }
	    };
	    ObserverProxy.prototype.forEachObserver = function (fn) {
	        if (this.finalized) {
	            // Already closed by previous event....just eat the additional values.
	            return;
	        }
	        // Since sendOne calls asynchronously - there is no chance that
	        // this.observers will become undefined.
	        for (var i = 0; i < this.observers.length; i++) {
	            this.sendOne(i, fn);
	        }
	    };
	    // Call the Observer via one of it's callback function. We are careful to
	    // confirm that the observe has not been unsubscribed since this asynchronous
	    // function had been queued.
	    ObserverProxy.prototype.sendOne = function (i, fn) {
	        var _this = this;
	        // Execute the callback asynchronously
	        this.task.then(function () {
	            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
	                try {
	                    fn(_this.observers[i]);
	                }
	                catch (e) {
	                    // Ignore exceptions raised in Observers or missing methods of an
	                    // Observer.
	                    // Log error to console. b/31404806
	                    if (typeof console !== 'undefined' && console.error) {
	                        console.error(e);
	                    }
	                }
	            }
	        });
	    };
	    ObserverProxy.prototype.close = function (err) {
	        var _this = this;
	        if (this.finalized) {
	            return;
	        }
	        this.finalized = true;
	        if (err !== undefined) {
	            this.finalError = err;
	        }
	        // Proxy is no longer needed - garbage collect references
	        this.task.then(function () {
	            _this.observers = undefined;
	            _this.onNoObservers = undefined;
	        });
	    };
	    return ObserverProxy;
	}());
	/** Turn synchronous function into one called asynchronously. */
	function async(fn, onError) {
	    return function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        Promise.resolve(true)
	            .then(function () {
	            fn.apply(void 0, args);
	        })
	            .catch(function (error) {
	            if (onError) {
	                onError(error);
	            }
	        });
	    };
	}
	/**
	 * Return true if the object passed in implements any of the named methods.
	 */
	function implementsAnyMethods(obj, methods) {
	    if (typeof obj !== 'object' || obj === null) {
	        return false;
	    }
	    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
	        var method = methods_1[_i];
	        if (method in obj && typeof obj[method] === 'function') {
	            return true;
	        }
	    }
	    return false;
	}
	function noop() {
	    // do nothing
	}

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	/**
	 * Check to make sure the appropriate number of arguments are provided for a public function.
	 * Throws an error if it fails.
	 *
	 * @param {!string} fnName The function name
	 * @param {!number} minCount The minimum number of arguments to allow for the function call
	 * @param {!number} maxCount The maximum number of argument to allow for the function call
	 * @param {!number} argCount The actual number of arguments provided.
	 */
	var validateArgCount = function (fnName, minCount, maxCount, argCount) {
	    var argError;
	    if (argCount < minCount) {
	        argError = 'at least ' + minCount;
	    }
	    else if (argCount > maxCount) {
	        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
	    }
	    if (argError) {
	        var error = fnName +
	            ' failed: Was called with ' +
	            argCount +
	            (argCount === 1 ? ' argument.' : ' arguments.') +
	            ' Expects ' +
	            argError +
	            '.';
	        throw new Error(error);
	    }
	};
	/**
	 * Generates a string to prefix an error message about failed argument validation
	 *
	 * @param {!string} fnName The function name
	 * @param {!number} argumentNumber The index of the argument
	 * @param {boolean} optional Whether or not the argument is optional
	 * @return {!string} The prefix to add to the error thrown for validation.
	 */
	function errorPrefix(fnName, argumentNumber, optional) {
	    var argName = '';
	    switch (argumentNumber) {
	        case 1:
	            argName = optional ? 'first' : 'First';
	            break;
	        case 2:
	            argName = optional ? 'second' : 'Second';
	            break;
	        case 3:
	            argName = optional ? 'third' : 'Third';
	            break;
	        case 4:
	            argName = optional ? 'fourth' : 'Fourth';
	            break;
	        default:
	            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
	    }
	    var error = fnName + ' failed: ';
	    error += argName + ' argument ';
	    return error;
	}
	/**
	 * @param {!string} fnName
	 * @param {!number} argumentNumber
	 * @param {!string} namespace
	 * @param {boolean} optional
	 */
	function validateNamespace(fnName, argumentNumber, namespace, optional) {
	    if (optional && !namespace)
	        return;
	    if (typeof namespace !== 'string') {
	        //TODO: I should do more validation here. We only allow certain chars in namespaces.
	        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
	            'must be a valid firebase namespace.');
	    }
	}
	function validateCallback(fnName, argumentNumber, callback, optional) {
	    if (optional && !callback)
	        return;
	    if (typeof callback !== 'function')
	        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
	            'must be a valid function.');
	}
	function validateContextObject(fnName, argumentNumber, context, optional) {
	    if (optional && !context)
	        return;
	    if (typeof context !== 'object' || context === null)
	        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
	            'must be a valid context object.');
	}

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
	// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
	// so it's been modified.
	// Note that not all Unicode characters appear as single characters in JavaScript strings.
	// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
	// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
	// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
	// pair).
	// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
	/**
	 * @param {string} str
	 * @return {Array}
	 */
	var stringToByteArray$1 = function (str) {
	    var out = [], p = 0;
	    for (var i = 0; i < str.length; i++) {
	        var c = str.charCodeAt(i);
	        // Is this the lead surrogate in a surrogate pair?
	        if (c >= 0xd800 && c <= 0xdbff) {
	            var high = c - 0xd800; // the high 10 bits.
	            i++;
	            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
	            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
	            c = 0x10000 + (high << 10) + low;
	        }
	        if (c < 128) {
	            out[p++] = c;
	        }
	        else if (c < 2048) {
	            out[p++] = (c >> 6) | 192;
	            out[p++] = (c & 63) | 128;
	        }
	        else if (c < 65536) {
	            out[p++] = (c >> 12) | 224;
	            out[p++] = ((c >> 6) & 63) | 128;
	            out[p++] = (c & 63) | 128;
	        }
	        else {
	            out[p++] = (c >> 18) | 240;
	            out[p++] = ((c >> 12) & 63) | 128;
	            out[p++] = ((c >> 6) & 63) | 128;
	            out[p++] = (c & 63) | 128;
	        }
	    }
	    return out;
	};
	/**
	 * Calculate length without actually converting; useful for doing cheaper validation.
	 * @param {string} str
	 * @return {number}
	 */
	var stringLength = function (str) {
	    var p = 0;
	    for (var i = 0; i < str.length; i++) {
	        var c = str.charCodeAt(i);
	        if (c < 128) {
	            p++;
	        }
	        else if (c < 2048) {
	            p += 2;
	        }
	        else if (c >= 0xd800 && c <= 0xdbff) {
	            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
	            p += 4;
	            i++; // skip trail surrogate.
	        }
	        else {
	            p += 3;
	        }
	    }
	    return p;
	};

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	exports.assert = assert;
	exports.assertionError = assertionError;
	exports.base64 = base64;
	exports.base64Decode = base64Decode;
	exports.base64Encode = base64Encode;
	exports.CONSTANTS = CONSTANTS;
	exports.deepCopy = deepCopy;
	exports.deepExtend = deepExtend;
	exports.patchProperty = patchProperty;
	exports.Deferred = Deferred;
	exports.getUA = getUA;
	exports.isMobileCordova = isMobileCordova;
	exports.isNodeSdk = isNodeSdk;
	exports.isReactNative = isReactNative;
	exports.ErrorFactory = ErrorFactory;
	exports.FirebaseError = FirebaseError;
	exports.patchCapture = patchCapture;
	exports.jsonEval = jsonEval;
	exports.stringify = stringify;
	exports.decode = decode;
	exports.isAdmin = isAdmin;
	exports.issuedAtTime = issuedAtTime;
	exports.isValidFormat = isValidFormat;
	exports.isValidTimestamp = isValidTimestamp;
	exports.clone = clone;
	exports.contains = contains;
	exports.every = every;
	exports.extend = extend;
	exports.findKey = findKey;
	exports.findValue = findValue;
	exports.forEach = forEach;
	exports.getAnyKey = getAnyKey;
	exports.getCount = getCount;
	exports.getValues = getValues;
	exports.isEmpty = isEmpty;
	exports.isNonNullObject = isNonNullObject;
	exports.map = map;
	exports.safeGet = safeGet;
	exports.querystring = querystring;
	exports.querystringDecode = querystringDecode;
	exports.Sha1 = Sha1;
	exports.async = async;
	exports.createSubscribe = createSubscribe;
	exports.errorPrefix = errorPrefix;
	exports.validateArgCount = validateArgCount;
	exports.validateCallback = validateCallback;
	exports.validateContextObject = validateContextObject;
	exports.validateNamespace = validateNamespace;
	exports.stringLength = stringLength;
	exports.stringToByteArray = stringToByteArray$1;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global global, define, System, Reflect, Promise */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __metadata;
	var __awaiter;
	var __generator;
	var __exportStar;
	var __values;
	var __read;
	var __spread;
	var __await;
	var __asyncGenerator;
	var __asyncDelegator;
	var __asyncValues;
	var __makeTemplateObject;
	var __importStar;
	var __importDefault;
	(function (factory) {
	    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) { factory(createExporter(root, createExporter(exports))); }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === "object" && typeof module.exports === "object") {
	        factory(createExporter(root, createExporter(module.exports)));
	    }
	    else {
	        factory(createExporter(root));
	    }
	    function createExporter(exports, previous) {
	        if (exports !== root) {
	            if (typeof Object.create === "function") {
	                Object.defineProperty(exports, "__esModule", { value: true });
	            }
	            else {
	                exports.__esModule = true;
	            }
	        }
	        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
	    }
	})
	(function (exporter) {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

	    __extends = function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };

	    __assign = Object.assign || function (t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };

	    __rest = function (s, e) {
	        var t = {};
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	        if (s != null && typeof Object.getOwnPropertySymbols === "function")
	            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
	                t[p[i]] = s[p[i]];
	        return t;
	    };

	    __decorate = function (decorators, target, key, desc) {
	        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        return c > 3 && r && Object.defineProperty(target, key, r), r;
	    };

	    __param = function (paramIndex, decorator) {
	        return function (target, key) { decorator(target, key, paramIndex); }
	    };

	    __metadata = function (metadataKey, metadataValue) {
	        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	    };

	    __awaiter = function (thisArg, _arguments, P, generator) {
	        return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	        });
	    };

	    __generator = function (thisArg, body) {
	        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	        function verb(n) { return function (v) { return step([n, v]); }; }
	        function step(op) {
	            if (f) throw new TypeError("Generator is already executing.");
	            while (_) try {
	                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	                if (y = 0, t) op = [0, t.value];
	                switch (op[0]) {
	                    case 0: case 1: t = op; break;
	                    case 4: _.label++; return { value: op[1], done: false };
	                    case 5: _.label++; y = op[1]; op = [0]; continue;
	                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                    default:
	                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                        if (t[2]) _.ops.pop();
	                        _.trys.pop(); continue;
	                }
	                op = body.call(thisArg, _);
	            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	        }
	    };

	    __exportStar = function (m, exports) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    };

	    __values = function (o) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
	        if (m) return m.call(o);
	        return {
	            next: function () {
	                if (o && i >= o.length) o = void 0;
	                return { value: o && o[i++], done: !o };
	            }
	        };
	    };

	    __read = function (o, n) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator];
	        if (!m) return o;
	        var i = m.call(o), r, ar = [], e;
	        try {
	            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	        }
	        catch (error) { e = { error: error }; }
	        finally {
	            try {
	                if (r && !r.done && (m = i["return"])) m.call(i);
	            }
	            finally { if (e) throw e.error; }
	        }
	        return ar;
	    };

	    __spread = function () {
	        for (var ar = [], i = 0; i < arguments.length; i++)
	            ar = ar.concat(__read(arguments[i]));
	        return ar;
	    };

	    __await = function (v) {
	        return this instanceof __await ? (this.v = v, this) : new __await(v);
	    };

	    __asyncGenerator = function (thisArg, _arguments, generator) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var g = generator.apply(thisArg, _arguments || []), i, q = [];
	        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
	        function fulfill(value) { resume("next", value); }
	        function reject(value) { resume("throw", value); }
	        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	    };

	    __asyncDelegator = function (o) {
	        var i, p;
	        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	        function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
	    };

	    __asyncValues = function (o) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var m = o[Symbol.asyncIterator];
	        return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
	    };

	    __makeTemplateObject = function (cooked, raw) {
	        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	        return cooked;
	    };

	    __importStar = function (mod) {
	        if (mod && mod.__esModule) return mod;
	        var result = {};
	        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	        result["default"] = mod;
	        return result;
	    };

	    __importDefault = function (mod) {
	        return (mod && mod.__esModule) ? mod : { "default": mod };
	    };

	    exporter("__extends", __extends);
	    exporter("__assign", __assign);
	    exporter("__rest", __rest);
	    exporter("__decorate", __decorate);
	    exporter("__param", __param);
	    exporter("__metadata", __metadata);
	    exporter("__awaiter", __awaiter);
	    exporter("__generator", __generator);
	    exporter("__exportStar", __exportStar);
	    exporter("__values", __values);
	    exporter("__read", __read);
	    exporter("__spread", __spread);
	    exporter("__await", __await);
	    exporter("__asyncGenerator", __asyncGenerator);
	    exporter("__asyncDelegator", __asyncDelegator);
	    exporter("__asyncValues", __asyncValues);
	    exporter("__makeTemplateObject", __makeTemplateObject);
	    exporter("__importStar", __importStar);
	    exporter("__importDefault", __importDefault);
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(23);

	/**
	 * Copyright 2017 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {(function() {
	  var firebase = __webpack_require__(19).default;
	  var g,aa=aa||{},k=this;function l(a){return"string"==typeof a}function ba(a){return"boolean"==typeof a}function ca(){}
	function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return null===a}function fa(a){return"array"==da(a)}function ha(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function n(a){return"function"==da(a)}function q(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
	function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=ka:r=la;return r.apply(null,arguments)}
	function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var na=Date.now||function(){return+new Date};function t(a,b){function c(){}c.prototype=b.prototype;a.lb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.cd=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function oa(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function pa(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}t(u,Error);u.prototype.name="CustomError";function qa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d])}t(qa,u);qa.prototype.name="AssertionError";function ra(a,b){throw new qa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function sa(a,b){this.c=a;this.f=b;this.b=0;this.a=null}sa.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function ta(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function ua(){this.b=this.a=null}var wa=new sa(function(){return new va},function(a){a.reset()});ua.prototype.add=function(a,b){var c=wa.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function xa(){var a=ya,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function va(){this.next=this.b=this.a=null}va.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};va.prototype.reset=function(){this.next=this.b=this.a=null};var za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(l(a))return l(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},v=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
	function Aa(a,b){var c=a.length,d=l(a)?a.split(""):a;for(--c;0<=c;--c)c in d&&b.call(void 0,d[c],c,a)}
	var Ba=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=l(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Ca=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};
	function Da(a){a:{var b=Ea;for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:l(a)?a.charAt(b):a[b]}function Fa(a,b){return 0<=za(a,b)}function Ga(a,b){b=za(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function Ha(a,b){var c=0;Aa(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++})}function Ia(a){return Array.prototype.concat.apply([],arguments)}
	function Ja(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Ka(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var La=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
	function Ma(a){if(!Na.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Qa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ra,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Sa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ta,"&#0;"));return a}var Oa=/&/g,Pa=/</g,Qa=/>/g,Ra=/"/g,Sa=/'/g,Ta=/\x00/g,Na=/[\x00&<>"']/;function w(a,b){return-1!=a.indexOf(b)}function Ua(a,b){return a<b?-1:a>b?1:0};var Va;a:{var Wa=k.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){Va=Xa;break a}}Va=""}function x(a){return w(Va,a)};function Ya(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Za(a){for(var b in a)return!1;return!0}function $a(a){var b={},c;for(c in a)b[c]=a[c];return b}var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function cb(a){k.setTimeout(function(){throw a;},0)}var db;
	function eb(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=r(function(a){if(("*"==d||a.origin==d)&&a.data==
	c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.tb;c.tb=null;a()}};return function(a){d.next={tb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
	b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};function fb(a,b){gb||hb();ib||(gb(),ib=!0);ya.add(a,b)}var gb;function hb(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve(void 0);gb=function(){a.then(jb)}}else gb=function(){var a=jb;!n(k.setImmediate)||k.Window&&k.Window.prototype&&!x("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(db||(db=eb()),db(a)):k.setImmediate(a)}}var ib=!1,ya=new ua;function jb(){for(var a;a=xa();){try{a.a.call(a.b)}catch(b){cb(b)}ta(wa,a)}ib=!1};function y(a,b){this.a=kb;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=ca)try{var c=this;a.call(b,function(a){lb(c,mb,a)},function(a){if(!(a instanceof nb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}lb(c,ob,a)})}catch(d){lb(this,ob,d)}}var kb=0,mb=2,ob=3;function pb(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1}pb.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1};var qb=new sa(function(){return new pb},function(a){a.reset()});
	function rb(a,b,c){var d=qb.get();d.g=a;d.b=b;d.f=c;return d}function A(a){if(a instanceof y)return a;var b=new y(ca);lb(b,mb,a);return b}function B(a){return new y(function(b,c){c(a)})}function sb(a,b,c){tb(a,b,c,null)||fb(ma(b,a))}function ub(a){return new y(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},h=function(a){c(a)},m=0,p;m<a.length;m++)p=a[m],sb(p,ma(f,m),h);else b(e)})}
	function vb(a){return new y(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Zb:!0,value:f}:{Zb:!1,reason:f};0==c&&b(d)},f=0,h;f<a.length;f++)h=a[f],sb(h,ma(e,f,!0),ma(e,f,!1));else b(d)})}y.prototype.then=function(a,b,c){return wb(this,n(a)?a:null,n(b)?b:null,c)};oa(y);g=y.prototype;g.ia=function(a,b){a=rb(a,a,b);a.c=!0;xb(this,a);return this};g.s=function(a,b){return wb(this,null,a,b)};g.cancel=function(a){this.a==kb&&fb(function(){var b=new nb(a);yb(this,b)},this)};
	function yb(a,b){if(a.a==kb)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,h=c.b;h&&(h.c||(d++,h.a==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(c.a==kb&&1==d?yb(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):zb(c),Ab(c,e,ob,b)))}a.c=null}else lb(a,ob,b)}function xb(a,b){a.b||a.a!=mb&&a.a!=ob||Bb(a);a.f?a.f.next=b:a.b=b;a.f=b}
	function wb(a,b,c,d){var e=rb(null,null,null);e.a=new y(function(a,h){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(z){h(z)}}:a;e.b=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof nb?h(b):a(e)}catch(z){h(z)}}:h});e.a.c=a;xb(a,e);return e.a}g.Lc=function(a){this.a=kb;lb(this,mb,a)};g.Mc=function(a){this.a=kb;lb(this,ob,a)};
	function lb(a,b,c){a.a==kb&&(a===c&&(b=ob,c=new TypeError("Promise cannot resolve to itself")),a.a=1,tb(c,a.Lc,a.Mc,a)||(a.i=c,a.a=b,a.c=null,Bb(a),b!=ob||c instanceof nb||Cb(a,c)))}function tb(a,b,c,d){if(a instanceof y)return xb(a,rb(b||ca,c||null,d)),!0;if(pa(a))return a.then(b,c,d),!0;if(q(a))try{var e=a.then;if(n(e))return Db(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
	function Db(a,b,c,d,e){function f(a){m||(m=!0,d.call(e,a))}function h(a){m||(m=!0,c.call(e,a))}var m=!1;try{b.call(a,h,f)}catch(p){f(p)}}function Bb(a){a.h||(a.h=!0,fb(a.Ub,a))}function zb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}g.Ub=function(){for(var a;a=zb(this);)Ab(this,a,this.a,this.i);this.h=!1};
	function Ab(a,b,c,d){if(c==ob&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Eb(b,c,d);else try{b.c?b.g.call(b.f):Eb(b,c,d)}catch(e){Fb.call(null,e)}ta(qb,b)}function Eb(a,b,c){b==mb?a.g.call(a.f,c):a.b&&a.b.call(a.f,c)}function Cb(a,b){a.g=!0;fb(function(){a.g&&Fb.call(null,b)})}var Fb=cb;function nb(a){u.call(this,a)}t(nb,u);nb.prototype.name="cancel";function Gb(){0!=Hb&&(Ib[this[ia]||(this[ia]=++ja)]=this);this.pa=this.pa;this.ja=this.ja}var Hb=0,Ib={};Gb.prototype.pa=!1;function Jb(a){if(!a.pa&&(a.pa=!0,a.ua(),0!=Hb)){var b=a[ia]||(a[ia]=++ja);if(0!=Hb&&a.ja&&0<a.ja.length)throw Error(a+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Ib[b]}}Gb.prototype.ua=function(){if(this.ja)for(;this.ja.length;)this.ja.shift()()};function Kb(a){Kb[" "](a);return a}Kb[" "]=ca;function Lb(a,b){var c=Mb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Nb=x("Opera"),Ob=x("Trident")||x("MSIE"),Pb=x("Edge"),Qb=Pb||Ob,Rb=x("Gecko")&&!(w(Va.toLowerCase(),"webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),Sb=w(Va.toLowerCase(),"webkit")&&!x("Edge");function Tb(){var a=k.document;return a?a.documentMode:void 0}var Ub;
	a:{var Vb="",Wb=function(){var a=Va;if(Rb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Pb)return/Edge\/([\d\.]+)/.exec(a);if(Ob)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Sb)return/WebKit\/(\S+)/.exec(a);if(Nb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Wb&&(Vb=Wb?Wb[1]:"");if(Ob){var Xb=Tb();if(null!=Xb&&Xb>parseFloat(Vb)){Ub=String(Xb);break a}}Ub=Vb}var Mb={};
	function Yb(a){return Lb(a,function(){for(var b=0,c=La(String(Ub)).split("."),d=La(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",m=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==h[0].length&&0==m[0].length)break;b=Ua(0==h[1].length?0:parseInt(h[1],10),0==m[1].length?0:parseInt(m[1],10))||Ua(0==h[2].length,0==m[2].length)||Ua(h[2],m[2]);h=h[3];m=m[3]}while(0==b)}return 0<=b})}var Zb;var $b=k.document;
	Zb=$b&&Ob?Tb()||("CSS1Compat"==$b.compatMode?parseInt(Ub,10):5):void 0;var ac=Object.freeze||function(a){return a};var bc=!Ob||9<=Number(Zb),cc=Ob&&!Yb("9"),dc=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",ca,b);k.removeEventListener("test",ca,b);return a}();function C(a,b){this.type=a;this.b=this.target=b;this.Gb=!0}C.prototype.preventDefault=function(){this.Gb=!1};function ec(a,b){C.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(Rb){a:{try{Kb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=
	a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
	a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=l(a.pointerType)?a.pointerType:fc[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault()}}t(ec,C);var fc=ac({2:"touch",3:"pen",4:"mouse"});ec.prototype.preventDefault=function(){ec.lb.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,cc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};ec.prototype.f=function(){return this.a};var gc="closure_listenable_"+(1E6*Math.random()|0),hc=0;function ic(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.La=e;this.key=++hc;this.na=this.Ia=!1}function jc(a){a.na=!0;a.listener=null;a.proxy=null;a.src=null;a.La=null};function kc(a){this.src=a;this.a={};this.b=0}kc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=lc(a,b,d,e);-1<h?(b=a[h],c||(b.Ia=!1)):(b=new ic(b,this.src,f,!!d,e),b.Ia=c,a.push(b));return b};function mc(a,b){var c=b.type;c in a.a&&Ga(a.a[c],b)&&(jc(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function lc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.na&&f.listener==b&&f.capture==!!c&&f.La==d)return e}return-1};var nc="closure_lm_"+(1E6*Math.random()|0),oc={},qc=0;function rc(a,b,c,d,e){if(d&&d.once)sc(a,b,c,d,e);else if(fa(b))for(var f=0;f<b.length;f++)rc(a,b[f],c,d,e);else c=tc(c),a&&a[gc]?uc(a,b,c,q(d)?!!d.capture:!!d,e):vc(a,b,c,!1,d,e)}
	function vc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=q(e)?!!e.capture:!!e,m=wc(a);m||(a[nc]=m=new kc(a));c=m.add(b,c,d,h,f);if(!c.proxy){d=xc();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)dc||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(yc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");qc++}}
	function xc(){var a=zc,b=bc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function sc(a,b,c,d,e){if(fa(b))for(var f=0;f<b.length;f++)sc(a,b[f],c,d,e);else c=tc(c),a&&a[gc]?Ac(a,b,c,q(d)?!!d.capture:!!d,e):vc(a,b,c,!0,d,e)}
	function D(a,b,c,d,e){if(fa(b))for(var f=0;f<b.length;f++)D(a,b[f],c,d,e);else(d=q(d)?!!d.capture:!!d,c=tc(c),a&&a[gc])?(a=a.m,b=String(b).toString(),b in a.a&&(f=a.a[b],c=lc(f,c,d,e),-1<c&&(jc(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=wc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=lc(b,c,d,e)),(c=-1<a?b[a]:null)&&Bc(c))}
	function Bc(a){if("number"!=typeof a&&a&&!a.na){var b=a.src;if(b&&b[gc])mc(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(yc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);qc--;(c=wc(b))?(mc(c,a),0==c.b&&(c.src=null,b[nc]=null)):jc(a)}}}function yc(a){return a in oc?oc[a]:oc[a]="on"+a}
	function Cc(a,b,c,d){var e=!0;if(a=wc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.na&&(f=Dc(f,d),e=e&&!1!==f)}return e}function Dc(a,b){var c=a.listener,d=a.La||a.src;a.Ia&&Bc(a);return c.call(d,b)}
	function zc(a,b){if(a.na)return!0;if(!bc){if(!b)a:{b=["window","event"];for(var c=k,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new ec(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(h){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=Cc(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=Cc(d[e],a,!1,b),c=c&&f}return c}return Dc(a,
	new ec(b,this))}function wc(a){a=a[nc];return a instanceof kc?a:null}var Ec="__closure_events_fn_"+(1E9*Math.random()>>>0);function tc(a){if(n(a))return a;a[Ec]||(a[Ec]=function(b){return a.handleEvent(b)});return a[Ec]};function E(){Gb.call(this);this.m=new kc(this);this.Nb=this;this.Ua=null}t(E,Gb);E.prototype[gc]=!0;E.prototype.addEventListener=function(a,b,c,d){rc(this,a,b,c,d)};E.prototype.removeEventListener=function(a,b,c,d){D(this,a,b,c,d)};
	E.prototype.dispatchEvent=function(a){var b,c=this.Ua;if(c)for(b=[];c;c=c.Ua)b.push(c);c=this.Nb;var d=a.type||a;if(l(a))a=new C(a,c);else if(a instanceof C)a.target=a.target||c;else{var e=a;a=new C(d,c);bb(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var h=a.b=b[f];e=Fc(h,d,!0,a)&&e}h=a.b=c;e=Fc(h,d,!0,a)&&e;e=Fc(h,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)h=a.b=b[f],e=Fc(h,d,!1,a)&&e;return e};
	E.prototype.ua=function(){E.lb.ua.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,jc(d[e]);delete a.a[c];a.b--}}this.Ua=null};function uc(a,b,c,d,e){a.m.add(String(b),c,!1,d,e)}function Ac(a,b,c,d,e){a.m.add(String(b),c,!0,d,e)}
	function Fc(a,b,c,d){b=a.m.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.na&&h.capture==c){var m=h.listener,p=h.La||h.src;h.Ia&&mc(a.m,h);e=!1!==m.call(p,d)&&e}}return e&&0!=d.Gb};function Gc(a,b,c){if(n(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)}function Hc(a){var b=null;return(new y(function(c,d){b=Gc(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).s(function(a){k.clearTimeout(b);throw a;})};function Ic(a){if(a.S&&"function"==typeof a.S)return a.S();if(l(a))return a.split("");if(ha(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function Jc(a){if(a.U&&"function"==typeof a.U)return a.U();if(!a.S||"function"!=typeof a.S){if(ha(a)||l(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
	function Kc(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ha(a)||l(a))v(a,b,void 0);else for(var c=Jc(a),d=Ic(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};function Lc(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Lc)for(c=a.U(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}g=Lc.prototype;g.S=function(){Mc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};g.U=function(){Mc(this);return this.a.concat()};
	g.clear=function(){this.b={};this.c=this.a.length=0};function Mc(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Nc(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Nc(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}g.get=function(a,b){return Nc(this.b,a)?this.b[a]:b};g.set=function(a,b){Nc(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
	g.forEach=function(a,b){for(var c=this.U(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function Nc(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Oc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Qc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function Rc(a,b){this.b=this.m=this.c="";this.i=null;this.h=this.g="";this.f=!1;if(a instanceof Rc){this.f=void 0!==b?b:a.f;Sc(this,a.c);this.m=a.m;this.b=a.b;Tc(this,a.i);this.g=a.g;b=a.a;var c=new Uc;c.c=b.c;b.a&&(c.a=new Lc(b.a),c.b=b.b);Vc(this,c);this.h=a.h}else a&&(c=String(a).match(Oc))?(this.f=!!b,Sc(this,c[1]||"",!0),this.m=Wc(c[2]||""),this.b=Wc(c[3]||"",!0),Tc(this,c[4]),this.g=Wc(c[5]||"",!0),Vc(this,c[6]||"",!0),this.h=Wc(c[7]||"")):(this.f=!!b,this.a=new Uc(null,this.f))}
	Rc.prototype.toString=function(){var a=[],b=this.c;b&&a.push(Xc(b,Yc,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.m)&&a.push(Xc(b,Yc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.g)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Xc(c,"/"==c.charAt(0)?Zc:$c,!0));(c=this.a.toString())&&a.push("?",c);(c=this.h)&&a.push("#",Xc(c,ad));return a.join("")};
	function Sc(a,b,c){a.c=c?Wc(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""))}function Tc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b}else a.i=null}function Vc(a,b,c){b instanceof Uc?(a.a=b,bd(a.a,a.f)):(c||(b=Xc(b,cd)),a.a=new Uc(b,a.f))}function F(a,b,c){a.a.set(b,c)}function dd(a,b){return a.a.get(b)}function ed(a){return a instanceof Rc?new Rc(a):new Rc(a,void 0)}function fd(a,b){var c=new Rc(null,void 0);Sc(c,"https");a&&(c.b=a);b&&(c.g=b);return c}
	function Wc(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xc(a,b,c){return l(a)?(a=encodeURI(a).replace(b,gd),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function gd(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Yc=/[#\/\?@]/g,$c=/[#\?:]/g,Zc=/[#\?]/g,cd=/[#\?@]/g,ad=/#/g;function Uc(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b}
	function hd(a){a.a||(a.a=new Lc,a.b=0,a.c&&Qc(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function id(a){var b=Jc(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Uc(null,void 0);a=Ic(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];fa(f)?jd(c,e,f):c.add(e,f)}return c}g=Uc.prototype;g.add=function(a,b){hd(this);this.c=null;a=kd(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};
	function ld(a,b){hd(a);b=kd(a,b);Nc(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Nc(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&Mc(a)))}g.clear=function(){this.a=this.c=null;this.b=0};function md(a,b){hd(a);b=kd(a,b);return Nc(a.a.b,b)}g.forEach=function(a,b){hd(this);this.a.forEach(function(c,d){v(c,function(c){a.call(b,c,d,this)},this)},this)};g.U=function(){hd(this);for(var a=this.a.S(),b=this.a.U(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
	g.S=function(a){hd(this);var b=[];if(l(a))md(this,a)&&(b=Ia(b,this.a.get(kd(this,a))));else{a=this.a.S();for(var c=0;c<a.length;c++)b=Ia(b,a[c])}return b};g.set=function(a,b){hd(this);this.c=null;a=kd(this,a);md(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};g.get=function(a,b){a=a?this.S(a):[];return 0<a.length?String(a[0]):b};function jd(a,b,c){ld(a,b);0<c.length&&(a.c=null,a.a.set(kd(a,b),Ja(c)),a.b+=c.length)}
	g.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.U(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.S(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}}return this.c=a.join("&")};function kd(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function bd(a,b){b&&!a.f&&(hd(a),a.c=null,a.a.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(ld(this,b),jd(this,c,a))},a));a.f=b};var nd=!Ob||9<=Number(Zb);function od(){this.a="";this.b=pd}od.prototype.ma=!0;od.prototype.la=function(){return this.a};od.prototype.toString=function(){return"Const{"+this.a+"}"};function qd(a){if(a instanceof od&&a.constructor===od&&a.b===pd)return a.a;ra("expected object of type Const, got '"+a+"'");return"type_error:Const"}var pd={};function rd(a){var b=new od;b.a=a;return b}rd("");function sd(){this.a="";this.b=td}sd.prototype.ma=!0;sd.prototype.la=function(){return this.a};sd.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function ud(a){if(a instanceof sd&&a.constructor===sd&&a.b===td)return a.a;ra("expected object of type TrustedResourceUrl, got '"+a+"' of type "+da(a));return"type_error:TrustedResourceUrl"}
	function vd(a,b){var c=qd(a);if(!wd.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(xd,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));a=b[e];return a instanceof od?qd(a):encodeURIComponent(String(a))});return yd(a)}var xd=/%{(\w+)}/g,wd=/^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank#/i,td={};
	function yd(a){var b=new sd;b.a=a;return b};function zd(){this.a="";this.b=Ad}zd.prototype.ma=!0;zd.prototype.la=function(){return this.a};zd.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Bd(a){if(a instanceof zd&&a.constructor===zd&&a.b===Ad)return a.a;ra("expected object of type SafeUrl, got '"+a+"' of type "+da(a));return"type_error:SafeUrl"}var Cd=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
	function Dd(a){if(a instanceof zd)return a;a=a.ma?a.la():String(a);Cd.test(a)||(a="about:invalid#zClosurez");return Ed(a)}var Ad={};function Ed(a){var b=new zd;b.a=a;return b}Ed("about:blank");function Fd(){this.a="";this.b=Gd}Fd.prototype.ma=!0;Fd.prototype.la=function(){return this.a};Fd.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Hd(a){if(a instanceof Fd&&a.constructor===Fd&&a.b===Gd)return a.a;ra("expected object of type SafeHtml, got '"+a+"' of type "+da(a));return"type_error:SafeHtml"}var Gd={};function Id(a){var b=new Fd;b.a=a;return b}Id("<!DOCTYPE html>");Id("");Id("<br>");function Jd(a){var b=document;return l(a)?b.getElementById(a):a}function Kd(a,b){Ya(b,function(b,d){b&&b.ma&&(b=b.la());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ld.hasOwnProperty(d)?a.setAttribute(Ld[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
	var Ld={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
	function Md(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!nd&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',Ma(h.name),'"');if(h.type){f.push(' type="',Ma(h.type),'"');var m={};bb(m,h);delete m.type;h=m}f.push(">");f=f.join("")}f=e.createElement(f);h&&(l(h)?f.className=h:fa(h)?f.className=h.join(" "):Kd(f,h));2<d.length&&Nd(e,f,d);return f}
	function Nd(a,b,c){function d(c){c&&b.appendChild(l(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!ha(f)||q(f)&&0<f.nodeType?d(f):v(Od(f)?Ja(f):f,d)}}function Od(a){if(a&&"number"==typeof a.length){if(q(a))return"function"==typeof a.item||"string"==typeof a.item;if(n(a))return"function"==typeof a.item}return!1};function Pd(a){var b=[];Qd(new Rd,a,b);return b.join("")}function Rd(){}
	function Qd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(fa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Qd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Sd(d,c),c.push(":"),Qd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Sd(b,c);break;case "number":c.push(isFinite(b)&&
	!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Td={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ud=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
	function Sd(a,b){b.push('"',a.replace(Ud,function(a){var b=Td[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Td[a]=b);return b}),'"')};function Vd(){var a=G();return Ob&&!!Zb&&11==Zb||/Edge\/\d+/.test(a)}function Wd(){return k.window&&k.window.location.href||self&&self.location&&self.location.href||""}function Xd(a,b){b=b||k.window;var c="about:blank";a&&(c=Bd(Dd(a)));b.location.href=c}function Yd(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<Yd(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
	function Zd(){var a=G();a=$d(a)!=ae?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!Ob||!Zb||9<Zb}function be(a){a=(a||G()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function ce(a){a=a||k.window;try{a.close()}catch(b){}}
	function de(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=G().toLowerCase();d&&(b.target=d,w(c,"crios/")&&(b.target="_blank"));$d(G())==ee&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof zd?c:Dd("undefined"!=typeof c.href?c.href:String(c));c=a.target||c.target;e=[];
	for(h in a)switch(h){case "width":case "height":case "top":case "left":e.push(h+"="+a[h]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(h+"="+(a[h]?1:0))}var h=e.join(",");(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c?(h=d.document.createElement("A"),b instanceof zd||b instanceof zd||(b=b.ma?b.la():String(b),Cd.test(b)||(b="about:invalid#zClosurez"),b=Ed(b)),h.href=Bd(b),h.setAttribute("target",c),a.noreferrer&&
	h.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),a.initMouseEvent("click",!0,!0,d,1),h.dispatchEvent(a),h={}):a.noreferrer?(h=d.open("",c,h),a=Bd(b),h&&(Qb&&w(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),h.opener=null,rd("b/12014412, meta tag with sanitized URL"),a='<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Ma(a)+'">',a=Id(a),h.document.write(Hd(a)),h.document.close())):(h=d.open(Bd(b),c,h))&&a.noopener&&(h.opener=null);if(h)try{h.focus()}catch(m){}return h}
	function fe(a){return new y(function(b){function c(){Hc(2E3).then(function(){if(!a||a.closed)b();else return c()})}return c()})}var ge=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;function he(){var a=null;return(new y(function(b){"complete"==k.document.readyState?b():(a=function(){b()},sc(window,"load",a))})).s(function(b){D(window,"load",a);throw b;})}
	function ie(){return je(void 0)?he().then(function(){return new y(function(a,b){var c=k.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):B(Error("Cordova must run in an Android or iOS file scheme."))}function je(a){a=a||G();return!("file:"!==ke()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function le(){var a=k.window;try{return!(!a||a==a.top)}catch(b){return!1}}
	function me(){return"object"!==typeof k.window&&"function"===typeof k.importScripts}function ne(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase.INTERNAL.hasOwnProperty("node")?"Node":me()?"Worker":"Browser"}function oe(){var a=ne();return"ReactNative"===a||"Node"===a}function pe(){for(var a=50,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}var ee="Firefox",ae="Chrome";
	function $d(a){var b=a.toLowerCase();if(w(b,"opera/")||w(b,"opr/")||w(b,"opios/"))return"Opera";if(w(b,"iemobile"))return"IEMobile";if(w(b,"msie")||w(b,"trident/"))return"IE";if(w(b,"edge/"))return"Edge";if(w(b,"firefox/"))return ee;if(w(b,"silk/"))return"Silk";if(w(b,"blackberry"))return"Blackberry";if(w(b,"webos"))return"Webos";if(!w(b,"safari/")||w(b,"chrome/")||w(b,"crios/")||w(b,"android"))if(!w(b,"chrome/")&&!w(b,"crios/")||w(b,"edge/")){if(w(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
	2==a.length)return a[1]}else return ae;else return"Safari";return"Other"}var qe={Sc:"FirebaseCore-web",Uc:"FirebaseUI-web"};function re(a,b){b=b||[];var c=[],d={},e;for(e in qe)d[qe[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=ne();"Browser"===c?(d=G(),c=$d(d)):"Worker"===c&&(d=G(),c=$d(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function G(){return k.navigator&&k.navigator.userAgent||""}
	function H(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function se(){try{var a=k.localStorage,b=te();if(a)return a.setItem(b,"1"),a.removeItem(b),Vd()?!!k.indexedDB:!0}catch(c){return me()&&!!k.indexedDB}return!1}function ue(){return(ve()||"chrome-extension:"===ke()||je())&&!oe()&&se()&&!me()}function ve(){return"http:"===ke()||"https:"===ke()}function ke(){return k.location&&k.location.protocol||null}
	function we(a){a=a||G();return be(a)||$d(a)==ee?!1:!0}function xe(a){return"undefined"===typeof a?null:Pd(a)}function ye(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function ze(a){if(null!==a)return JSON.parse(a)}function te(a){return a?a:Math.floor(1E9*Math.random()).toString()}function Ae(a){a=a||G();return"Safari"==$d(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
	function Be(){var a=k.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null}function Ce(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.a=a;this.c=b;a=G();b=ne();this.b=be(a)||"ReactNative"===b}
	Ce.prototype.get=function(){var a=k.navigator;return(a&&"boolean"===typeof a.onLine&&(ve()||"chrome-extension:"===ke()||"undefined"!==typeof a.connection)?a.onLine:1)?this.b?this.c:this.a:Math.min(5E3,this.a)};function De(){var a=k.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}
	function Ee(){var a=k.document,b=null;return De()||!a?A():(new y(function(c){b=function(){De()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).s(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}function Fe(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function Ge(){return!(!H("fireauth.oauthhelper",k)&&!H("fireauth.iframe",k))};var He={};function Ie(a){He[a]||(He[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a))};var Je;try{var Ke={};Object.defineProperty(Ke,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Ke,"abcd",{configurable:!0,enumerable:!0,value:2});Je=2==Ke.abcd}catch(a){Je=!1}function I(a,b,c){Je?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c}function J(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&I(a,c,b[c])}function Le(a){var b={};J(b,a);return b}function Me(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
	function Ne(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0}function Oe(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)I(b,c,Oe(a[c]))}return b};function Pe(a){var b={},c=a[Qe],d=a[Re];a=a[Se];if(!a||a!=Te&&!c)throw Error("Invalid provider user info!");b[Ue]=d||null;b[Ve]=c||null;I(this,We,a);I(this,Xe,Oe(b))}var Te="EMAIL_SIGNIN",Qe="email",Re="newEmail",Se="requestType",Ve="email",Ue="fromEmail",Xe="data",We="operation";function K(a,b){this.code=Ye+a;this.message=b||Ze[a]||""}t(K,Error);K.prototype.D=function(){return{code:this.code,message:this.message}};K.prototype.toJSON=function(){return this.D()};function $e(a){var b=a&&a.code;return b?new K(b.substring(Ye.length),a.message):null}
	var Ye="auth/",Ze={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
	"code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
	"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
	"invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
	"invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.",
	"invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
	"invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
	"invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.",
	"auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.",
	"missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
	"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
	"operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.",
	"quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.",
	"unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.",
	"user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};function af(a){var b=a[bf];if("undefined"===typeof b)throw new K("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new K("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[cf];if(c&&"object"===typeof c){b=c[df];var d=c[ef];c=c[ff];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new K("argument-error",ef+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
	typeof c||"string"===typeof c&&!c.length))throw new K("argument-error",ff+" property must be a non empty string when specified.");this.b=c||null}else{if("undefined"!==typeof b)throw new K("argument-error",df+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new K("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new K("argument-error",cf+" property must be a non null object when specified.");this.f=null;if((b=a[gf])&&"object"===
	typeof b)if(b=b[hf],"string"===typeof b&&b.length)this.f=b;else{if("undefined"!==typeof b)throw new K("argument-error",hf+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new K("argument-error",gf+" property must be a non null object when specified.");a=a[jf];if("undefined"!==typeof a&&"boolean"!==typeof a)throw new K("argument-error",jf+" property must be a boolean when specified.");this.c=!!a}
	var cf="android",jf="handleCodeInApp",gf="iOS",bf="url",ef="installApp",ff="minimumVersion",df="packageName",hf="bundleId";function kf(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;for(var c in b)null===b[c]&&delete b[c];return b};function lf(a){return Ba(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var mf=null,nf=null;function of(a){var b="";pf(a,function(a){b+=String.fromCharCode(a)});return b}function pf(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=nf[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}qf();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),m=c(64);if(64===m&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=m&&b(h<<6&192|m))}}
	function qf(){if(!mf){mf={};nf={};for(var a=0;65>a;a++)mf[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),nf[mf[a]]=a,62<=a&&(nf["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};function rf(a){this.c=a.sub;na();this.a=a.provider_id||a.firebase&&a.firebase.sign_in_provider||null;this.b=!!a.is_anonymous||"anonymous"==this.a}rf.prototype.f=function(){return this.b};function sf(a){return(a=tf(a))&&a.sub&&a.iss&&a.aud&&a.exp?new rf(a):null}function tf(a){if(!a)return null;a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{return JSON.parse(of(a))}catch(d){}return null};var uf="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),vf=["client_id","response_type","scope","redirect_uri","state"],wf={Tc:{Ma:"locale",Ba:500,Aa:600,Na:"facebook.com",eb:vf},Vc:{Ma:null,Ba:500,Aa:620,Na:"github.com",eb:vf},Wc:{Ma:"hl",Ba:515,Aa:680,Na:"google.com",eb:vf},bd:{Ma:"lang",Ba:485,Aa:705,Na:"twitter.com",eb:uf}};function xf(a){for(var b in wf)if(wf[b].Na==a)return wf[b];return null};function yf(a){var b={};b["facebook.com"]=zf;b["google.com"]=Af;b["github.com"]=Bf;b["twitter.com"]=Cf;var c=a&&a[Df];try{if(c)return b[c]?new b[c](a):new Ef(a);if("undefined"!==typeof a[Ff])return new Gf(a)}catch(d){}return null}var Ff="idToken",Df="providerId";
	function Gf(a){var b=a[Df];if(!b&&a[Ff]){var c=sf(a[Ff]);c&&c.a&&(b=c.a)}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);I(this,"providerId",b);I(this,"isNewUser",c)}function Ef(a){Gf.call(this,a);a=ze(a.rawUserInfo||"{}");I(this,"profile",Oe(a||{}))}t(Ef,Gf);
	function zf(a){Ef.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}t(zf,Ef);function Bf(a){Ef.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");I(this,"username",this.profile&&this.profile.login||null)}t(Bf,Ef);function Af(a){Ef.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}t(Af,Ef);
	function Cf(a){Ef.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");I(this,"username",a.screenName||null)}t(Cf,Ef);function Hf(a){this.a=ed(a)};function If(a){var b=ed(a),c=dd(b,"link"),d=dd(ed(c),"link");b=dd(b,"deep_link_id");return dd(ed(b),"link")||b||d||c||a};function Jf(a,b){return a.then(function(a){if(a[L]){var c=sf(a[L]);if(!c||b!=c.c)throw new K("user-mismatch");return a}throw new K("user-mismatch");}).s(function(a){throw a&&a.code&&a.code==Ye+"user-not-found"?new K("user-mismatch"):a;})}
	function Kf(a,b,c){if(b.idToken||b.accessToken)b.idToken&&I(this,"idToken",b.idToken),b.accessToken&&I(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)I(this,"accessToken",b.oauthToken),I(this,"secret",b.oauthTokenSecret);else throw new K("internal-error","failed to construct a credential");I(this,"providerId",a);I(this,"signInMethod",c)}Kf.prototype.ya=function(a){return Lf(a,Mf(this))};Kf.prototype.c=function(a,b){var c=Mf(this);c.idToken=b;return Nf(a,c)};
	Kf.prototype.f=function(a,b){var c=Mf(this);return Jf(Of(a,c),b)};function Mf(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:id(b).toString(),requestUri:"http://localhost"}}
	Kf.prototype.D=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};function Pf(a,b){this.Ac=b||[];J(this,{providerId:a,isOAuthProvider:!0});this.vb={};this.$a=(xf(a)||{}).Ma||null;this.Ya=null}Pf.prototype.Da=function(a){this.vb=$a(a);return this};function M(a){Pf.call(this,a,vf);this.a=[]}t(M,Pf);
	M.prototype.ta=function(a){Fa(this.a,a)||this.a.push(a);return this};M.prototype.Ab=function(){return Ja(this.a)};M.prototype.credential=function(a,b){if(!a&&!b)throw new K("argument-error","credential failed: must provide the ID token and/or the access token.");return new Kf(this.providerId,{idToken:a||null,accessToken:b||null},this.providerId)};function Qf(){M.call(this,"facebook.com")}t(Qf,M);I(Qf,"PROVIDER_ID","facebook.com");I(Qf,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
	function Rf(a){if(!a)throw new K("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new Qf).credential(null,b)}function Sf(){M.call(this,"github.com")}t(Sf,M);I(Sf,"PROVIDER_ID","github.com");I(Sf,"GITHUB_SIGN_IN_METHOD","github.com");function Tf(a){if(!a)throw new K("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new Sf).credential(null,b)}
	function Uf(){M.call(this,"google.com");this.ta("profile")}t(Uf,M);I(Uf,"PROVIDER_ID","google.com");I(Uf,"GOOGLE_SIGN_IN_METHOD","google.com");function Vf(a,b){var c=a;q(a)&&(c=a.idToken,b=a.accessToken);return(new Uf).credential(c,b)}function Wf(){Pf.call(this,"twitter.com",uf)}t(Wf,Pf);I(Wf,"PROVIDER_ID","twitter.com");I(Wf,"TWITTER_SIGN_IN_METHOD","twitter.com");
	function Xf(a,b){var c=a;q(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new K("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Kf("twitter.com",c,"twitter.com")}function Yf(a,b,c){this.a=a;this.b=b;I(this,"providerId","password");I(this,"signInMethod",c===N.EMAIL_LINK_SIGN_IN_METHOD?N.EMAIL_LINK_SIGN_IN_METHOD:N.EMAIL_PASSWORD_SIGN_IN_METHOD)}
	Yf.prototype.ya=function(a){return this.signInMethod==N.EMAIL_LINK_SIGN_IN_METHOD?O(a,Zf,{email:this.a,oobCode:this.b}):O(a,$f,{email:this.a,password:this.b})};Yf.prototype.c=function(a,b){return this.signInMethod==N.EMAIL_LINK_SIGN_IN_METHOD?O(a,ag,{idToken:b,email:this.a,oobCode:this.b}):O(a,bg,{idToken:b,email:this.a,password:this.b})};Yf.prototype.f=function(a,b){return Jf(this.ya(a),b)};Yf.prototype.D=function(){return{email:this.a,password:this.b,signInMethod:this.signInMethod}};
	function N(){J(this,{providerId:"password",isOAuthProvider:!1})}function cg(a,b){b=dg(b);if(!b)throw new K("argument-error","Invalid email link!");return new Yf(a,b,N.EMAIL_LINK_SIGN_IN_METHOD)}function dg(a){a=If(a);a=new Hf(a);var b=dd(a.a,"oobCode")||null;return"signIn"===(dd(a.a,"mode")||null)&&b?b:null}J(N,{PROVIDER_ID:"password"});J(N,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});J(N,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});
	function eg(a){if(!(a.Sa&&a.Ra||a.Fa&&a.$))throw new K("internal-error");this.a=a;I(this,"providerId","phone");I(this,"signInMethod","phone")}eg.prototype.ya=function(a){return a.Ta(fg(this))};eg.prototype.c=function(a,b){var c=fg(this);c.idToken=b;return O(a,gg,c)};eg.prototype.f=function(a,b){var c=fg(this);c.operation="REAUTH";a=O(a,hg,c);return Jf(a,b)};
	eg.prototype.D=function(){var a={providerId:"phone"};this.a.Sa&&(a.verificationId=this.a.Sa);this.a.Ra&&(a.verificationCode=this.a.Ra);this.a.Fa&&(a.temporaryProof=this.a.Fa);this.a.$&&(a.phoneNumber=this.a.$);return a};function fg(a){return a.a.Fa&&a.a.$?{temporaryProof:a.a.Fa,phoneNumber:a.a.$}:{sessionInfo:a.a.Sa,code:a.a.Ra}}
	function ig(a){try{this.a=a||firebase.auth()}catch(b){throw new K("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}J(this,{providerId:"phone",isOAuthProvider:!1})}
	ig.prototype.Ta=function(a,b){var c=this.a.b;return A(b.verify()).then(function(d){if(!l(d))throw new K("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return jg(c,{phoneNumber:a,recaptchaToken:d}).then(function(a){"function"===typeof b.reset&&b.reset();return a},function(a){"function"===typeof b.reset&&b.reset();throw a;});default:throw new K("argument-error",
	'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};function kg(a,b){if(!a)throw new K("missing-verification-id");if(!b)throw new K("missing-verification-code");return new eg({Sa:a,Ra:b})}J(ig,{PROVIDER_ID:"phone"});J(ig,{PHONE_SIGN_IN_METHOD:"phone"});
	function lg(a){if(a.temporaryProof&&a.phoneNumber)return new eg({Fa:a.temporaryProof,$:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return Vf(a,c);case "facebook.com":return Rf(c);case "github.com":return Tf(c);case "twitter.com":return Xf(c,d);default:return(new M(b)).credential(a,c)}}catch(e){return null}}
	function mg(a){if(!a.isOAuthProvider)throw new K("invalid-oauth-provider");};function ng(a,b,c,d,e){this.b=a;this.c=b||null;this.f=c||null;this.g=d||null;this.a=e||null;if(this.f||this.a){if(this.f&&this.a)throw new K("invalid-auth-event");if(this.f&&!this.g)throw new K("invalid-auth-event");}else throw new K("invalid-auth-event");}ng.prototype.D=function(){return{type:this.b,eventId:this.c,urlResponse:this.f,sessionId:this.g,error:this.a&&this.a.D()}};function og(a){a=a||{};return a.type?new ng(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&$e(a.error)):null};function pg(){this.b=null;this.a=[]}var qg=null;pg.prototype.subscribe=function(a){var b=this;this.a.push(a);this.b||(this.b=function(a){for(var c=0;c<b.a.length;c++)b.a[c](a)},a=H("universalLinks.subscribe",k),"function"===typeof a&&a(null,this.b))};pg.prototype.unsubscribe=function(a){Ha(this.a,function(b){return b==a})};function rg(a){var b="unauthorized-domain",c=void 0,d=ed(a);a=d.b;d=d.c;"chrome-extension"==d?c=Ka("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=Ka("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
	K.call(this,b,c)}t(rg,K);function sg(a,b,c){K.call(this,a,c);a=b||{};a.wb&&I(this,"email",a.wb);a.$&&I(this,"phoneNumber",a.$);a.credential&&I(this,"credential",a.credential)}t(sg,K);sg.prototype.D=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.D();b&&bb(a,b);return a};sg.prototype.toJSON=function(){return this.D()};
	function tg(a){if(a.code){var b=a.code||"";0==b.indexOf(Ye)&&(b=b.substring(Ye.length));var c={credential:lg(a)};if(a.email)c.wb=a.email;else if(a.phoneNumber)c.$=a.phoneNumber;else return new K(b,a.message||void 0);return new sg(b,c,a.message)}return null};var ug=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function vg(){}vg.prototype.c=null;function wg(a){return a.c||(a.c=a.b())};var xg;function yg(){}t(yg,vg);yg.prototype.a=function(){var a=zg(this);return a?new ActiveXObject(a):new XMLHttpRequest};yg.prototype.b=function(){var a={};zg(this)&&(a[0]=!0,a[1]=!0);return a};
	function zg(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}xg=new yg;function Ag(){}t(Ag,vg);Ag.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Bg;throw Error("Unsupported browser");};Ag.prototype.b=function(){return{}};
	function Bg(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText="";this.a.onload=r(this.bc,this);this.a.onerror=r(this.Bb,this);this.a.onprogress=r(this.cc,this);this.a.ontimeout=r(this.fc,this)}g=Bg.prototype;g.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
	g.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};g.abort=function(){this.a.abort()};g.setRequestHeader=function(){};g.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.a.contentType:""};g.bc=function(){this.status=200;this.responseText=this.a.responseText;Cg(this,4)};g.Bb=function(){this.status=500;this.responseText="";Cg(this,4)};g.fc=function(){this.Bb()};
	g.cc=function(){this.status=200;Cg(this,1)};function Cg(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}g.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType};function Dg(a,b,c){this.reset(a,b,c,void 0,void 0)}Dg.prototype.a=null;var Eg=0;Dg.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Eg++;d||na();delete this.a};function Fg(a){this.f=a;this.b=this.c=this.a=null}function Gg(a,b){this.name=a;this.value=b}Gg.prototype.toString=function(){return this.name};var Hg=new Gg("SEVERE",1E3),Ig=new Gg("WARNING",900),Jg=new Gg("CONFIG",700),Kg=new Gg("FINE",500);function Lg(a){if(a.c)return a.c;if(a.a)return Lg(a.a);ra("Root logger has no level set.");return null}Fg.prototype.log=function(a,b,c){if(a.value>=Lg(this).value)for(n(b)&&(b=b()),a=new Dg(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var Mg={},Ng=null;
	function Og(a){Ng||(Ng=new Fg(""),Mg[""]=Ng,Ng.c=Jg);var b;if(!(b=Mg[a])){b=new Fg(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Og(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Mg[a]=b}return b};function P(a,b){a&&a.log(Kg,b,void 0)};function Pg(a){this.f=a}t(Pg,vg);Pg.prototype.a=function(){return new Qg(this.f)};Pg.prototype.b=function(a){return function(){return a}}({});function Qg(a){E.call(this);this.i=a;this.readyState=Rg;this.status=0;this.responseText=this.statusText="";this.onreadystatechange=null;this.g=new Headers;this.b=null;this.h="GET";this.c="";this.a=!1;this.f=Og("goog.net.FetchXmlHttp")}t(Qg,E);var Rg=0;g=Qg.prototype;
	g.open=function(a,b){if(this.readyState!=Rg)throw this.abort(),Error("Error reopening a connection");this.h=a;this.c=b;this.readyState=1;Sg(this)};g.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.g,method:this.h,credentials:void 0,cache:void 0};a&&(b.body=a);this.i.fetch(new Request(this.c,b)).then(this.ec.bind(this),this.Cb.bind(this))};
	g.abort=function(){this.responseText="";this.g=new Headers;this.status=0;1<=this.readyState&&this.a&&4!=this.readyState&&(this.readyState=4,this.a=!1,Sg(this));this.readyState=Rg};g.ec=function(a){this.a&&(this.b||(this.b=a.headers,this.readyState=2,Sg(this)),this.a&&(this.readyState=3,Sg(this),this.a&&a.text().then(this.dc.bind(this,a),this.Cb.bind(this))))};g.dc=function(a,b){this.a&&(this.status=a.status,this.statusText=a.statusText,this.responseText=b,this.readyState=4,Sg(this))};
	g.Cb=function(a){var b=this.f;b&&b.log(Ig,"Failed to fetch url "+this.c,a instanceof Error?a:Error(a));this.a&&(this.readyState=4,Sg(this))};g.setRequestHeader=function(a,b){this.g.append(a,b)};g.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.f)&&a.log(Ig,"Attempting to get response header but no headers have been received for url: "+this.c,void 0),"")};
	g.getAllResponseHeaders=function(){if(!this.b){var a=this.f;a&&a.log(Ig,"Attempting to get all response headers but no headers have been received for url: "+this.c,void 0);return""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function Sg(a){a.onreadystatechange&&a.onreadystatechange.call(a)};function Tg(a){E.call(this);this.headers=new Lc;this.C=a||null;this.c=!1;this.w=this.a=null;this.h=this.N=this.l="";this.f=this.I=this.i=this.G=!1;this.g=0;this.u=null;this.o=Ug;this.v=this.O=!1}t(Tg,E);var Ug="";Tg.prototype.b=Og("goog.net.XhrIo");var Vg=/^https?$/i,Wg=["POST","PUT"];
	function Xg(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.N=c;a.G=!1;a.c=!0;a.a=a.C?a.C.a():xg.a();a.w=a.C?wg(a.C):wg(xg);a.a.onreadystatechange=r(a.Fb,a);try{P(a.b,Yg(a,"Opening Xhr")),a.I=!0,a.a.open(c,String(b),!0),a.I=!1}catch(h){P(a.b,Yg(a,"Error opening Xhr: "+h.message));Zg(a,h);return}b=d||"";var f=new Lc(a.headers);e&&Kc(e,function(a,b){f.set(b,a)});e=Da(f.U());d=k.FormData&&b instanceof
	k.FormData;!Fa(Wg,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},a);a.o&&(a.a.responseType=a.o);"withCredentials"in a.a&&a.a.withCredentials!==a.O&&(a.a.withCredentials=a.O);try{$g(a),0<a.g&&(a.v=ah(a.a),P(a.b,Yg(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.v)),a.v?(a.a.timeout=a.g,a.a.ontimeout=r(a.Ga,a)):a.u=Gc(a.Ga,a.g,a)),P(a.b,Yg(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1}catch(h){P(a.b,Yg(a,
	"Send error: "+h.message)),Zg(a,h)}}function ah(a){return Ob&&Yb(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Ea(a){return"content-type"==a.toLowerCase()}g=Tg.prototype;g.Ga=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",P(this.b,Yg(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))};function Zg(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;bh(a);ch(a)}
	function bh(a){a.G||(a.G=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}g.abort=function(){this.a&&this.c&&(P(this.b,Yg(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ch(this))};g.ua=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ch(this,!0));Tg.lb.ua.call(this)};g.Fb=function(){this.pa||(this.I||this.i||this.f?dh(this):this.tc())};g.tc=function(){dh(this)};
	function dh(a){if(a.c&&"undefined"!=typeof aa)if(a.w[1]&&4==eh(a)&&2==fh(a))P(a.b,Yg(a,"Local request error detected and ignored"));else if(a.i&&4==eh(a))Gc(a.Fb,0,a);else if(a.dispatchEvent("readystatechange"),4==eh(a)){P(a.b,Yg(a,"Request complete"));a.c=!1;try{var b=fh(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(Oc)[1]||null;if(!f&&k.self&&k.self.location){var h=k.self.location.protocol;
	f=h.substr(0,h.length-1)}e=!Vg.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var m=2<eh(a)?a.a.statusText:""}catch(p){P(a.b,"Can not get status: "+p.message),m=""}a.h=m+" ["+fh(a)+"]";bh(a)}}finally{ch(a)}}}function ch(a,b){if(a.a){$g(a);var c=a.a,d=a.w[0]?ca:null;a.a=null;a.w=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.b)&&a.log(Hg,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
	function $g(a){a.a&&a.v&&(a.a.ontimeout=null);a.u&&(k.clearTimeout(a.u),a.u=null)}function eh(a){return a.a?a.a.readyState:0}function fh(a){try{return 2<eh(a)?a.a.status:-1}catch(b){return-1}}function gh(a){try{return a.a?a.a.responseText:""}catch(b){return P(a.b,"Can not get responseText: "+b.message),""}}
	g.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.o){case Ug:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(Hg,"Response type "+this.o+" is not supported on this browser",void 0);return null}catch(b){return P(this.b,"Can not get response: "+b.message),null}};function Yg(a,b){return b+" ["+a.N+" "+a.l+" "+fh(a)+"]"};/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	function hh(a,b){this.g=[];this.v=a;this.u=b||null;this.f=this.a=!1;this.c=void 0;this.l=this.w=this.i=!1;this.h=0;this.b=null;this.m=0}hh.prototype.cancel=function(a){if(this.a)this.c instanceof hh&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.m--,0>=b.m&&b.cancel())}this.v?this.v.call(this.u,this):this.l=!0;this.a||(a=new ih(this),jh(this),kh(this,!1,a))}};hh.prototype.o=function(a,b){this.i=!1;kh(this,a,b)};function kh(a,b,c){a.a=!0;a.c=c;a.f=!b;lh(a)}
	function jh(a){if(a.a){if(!a.l)throw new mh(a);a.l=!1}}hh.prototype.C=function(){jh(this);kh(this,!0,null)};function nh(a,b){oh(a,null,b,void 0)}function oh(a,b,c,d){a.g.push([b,c,d]);a.a&&lh(a)}hh.prototype.then=function(a,b,c){var d,e,f=new y(function(a,b){d=a;e=b});oh(this,d,function(a){a instanceof ih?f.cancel():e(a)});return f.then(a,b,c)};oa(hh);function ph(a){return Ca(a.g,function(a){return n(a[1])})}
	function lh(a){if(a.h&&a.a&&ph(a)){var b=a.h,c=qh[b];c&&(k.clearTimeout(c.a),delete qh[b]);a.h=0}a.b&&(a.b.m--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],h=e[1];e=e[2];if(f=a.f?h:f)try{var m=f.call(e||a.u,b);void 0!==m&&(a.f=a.f&&(m==b||m instanceof Error),a.c=b=m);if(pa(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.i=!0}catch(p){b=p,a.f=!0,ph(a)||(c=!0)}}a.c=b;d&&(m=r(a.o,a,!0),d=r(a.o,a,!1),b instanceof hh?(oh(b,m,d),b.w=!0):b.then(m,d));c&&(b=
	new rh(b),qh[b.a]=b,a.h=b.a)}function mh(){u.call(this)}t(mh,u);mh.prototype.message="Deferred has already fired";mh.prototype.name="AlreadyCalledError";function ih(){u.call(this)}t(ih,u);ih.prototype.message="Deferred was canceled";ih.prototype.name="CanceledError";function rh(a){this.a=k.setTimeout(r(this.c,this),0);this.b=a}rh.prototype.c=function(){delete qh[this.a];throw this.b;};var qh={};function sh(a){var b={},c=b.document||document,d=ud(a),e=document.createElement("SCRIPT"),f={Hb:e,Ga:void 0},h=new hh(th,f),m=null,p=null!=b.timeout?b.timeout:5E3;0<p&&(m=window.setTimeout(function(){uh(e,!0);var a=new vh(wh,"Timeout reached for loading script "+d);jh(h);kh(h,!1,a)},p),f.Ga=m);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(uh(e,b.dd||!1,m),h.C())};e.onerror=function(){uh(e,!0,m);var a=new vh(xh,"Error while loading script "+
	d);jh(h);kh(h,!1,a)};f=b.attributes||{};bb(f,{type:"text/javascript",charset:"UTF-8"});Kd(e,f);e.src=ud(a);yh(c).appendChild(e);return h}function yh(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function th(){if(this&&this.Hb){var a=this.Hb;a&&"SCRIPT"==a.tagName&&uh(a,!0,this.Ga)}}
	function uh(a,b,c){null!=c&&k.clearTimeout(c);a.onload=ca;a.onerror=ca;a.onreadystatechange=ca;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var xh=0,wh=1;function vh(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a}t(vh,u);function zh(a){this.f=a}t(zh,vg);zh.prototype.a=function(){return new this.f};zh.prototype.b=function(){return{}};
	function Ah(a,b,c){this.b=a;a=b||{};this.i=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.m=a.secureTokenTimeout||Bh;this.f=$a(a.secureTokenHeaders||Ch);this.g=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.h=a.firebaseTimeout||Dh;this.a=$a(a.firebaseHeaders||Eh);c&&(this.a["X-Client-Version"]=c,this.f["X-Client-Version"]=c);c="Node"==ne();c=k.XMLHttpRequest||c&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!c&&
	!me())throw new K("internal-error","The XMLHttpRequest compatibility library was not found.");this.c=void 0;me()?this.c=new Pg(self):oe()?this.c=new zh(c):this.c=new Ag}var Fh,L="idToken",Bh=new Ce(3E4,6E4),Ch={"Content-Type":"application/x-www-form-urlencoded"},Dh=new Ce(3E4,6E4),Eh={"Content-Type":"application/json"};function Gh(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"]}
	function Hh(a,b){b?(a.a["X-Client-Version"]=b,a.f["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.f["X-Client-Version"])}function Ih(a,b,c,d,e,f,h){Zd()||me()?a=r(a.o,a):(Fh||(Fh=new y(function(a,b){Jh(a,b)})),a=r(a.l,a));a(b,c,d,e,f,h)}
	Ah.prototype.o=function(a,b,c,d,e,f){if(me()&&("undefined"===typeof k.fetch||"undefined"===typeof k.Headers||"undefined"===typeof k.Request))throw new K("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var h=new Tg(this.c);if(f){h.g=Math.max(0,f);var m=setTimeout(function(){h.dispatchEvent("timeout")},f)}uc(h,"complete",function(){m&&clearTimeout(m);var a=null;try{a=
	JSON.parse(gh(this))||null}catch(z){a=null}b&&b(a)});Ac(h,"ready",function(){m&&clearTimeout(m);Jb(this)});Ac(h,"timeout",function(){m&&clearTimeout(m);Jb(this);b&&b(null)});Xg(h,a,c,d,e)};var Kh=rd("https://apis.google.com/js/client.js?onload=%{onload}"),Lh="__fcb"+Math.floor(1E6*Math.random()).toString();
	function Jh(a,b){if(((window.gapi||{}).client||{}).request)a();else{k[Lh]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=vd(Kh,{onload:Lh});nh(sh(c),function(){b(Error("CORS_UNSUPPORTED"))})}}
	Ah.prototype.l=function(a,b,c,d,e){var f=this;Fh.then(function(){window.gapi.client.setApiKey(f.b);var h=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(h);b&&b(a)}})}).s(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
	function Mh(a,b){return new y(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Ih(a,a.i+"?key="+encodeURIComponent(a.b),function(a){a?a.error?d(Nh(a)):a.access_token&&a.refresh_token?c(a):d(new K("internal-error")):d(new K("network-request-failed"))},"POST",id(b).toString(),a.f,a.m.get()):d(new K("internal-error"))})}
	function Oh(a,b,c,d,e,f){var h=ed(a.g+b);F(h,"key",a.b);f&&F(h,"cb",na().toString());var m="GET"==c;if(m)for(var p in d)d.hasOwnProperty(p)&&F(h,p,d[p]);return new y(function(b,f){Ih(a,h.toString(),function(a){a?a.error?f(Nh(a,e||{})):b(a):f(new K("network-request-failed"))},c,m?void 0:Pd(ye(d)),a.a,a.h.get())})}function Ph(a){if(!ug.test(a.email))throw new K("invalid-email");}function Qh(a){"email"in a&&Ph(a)}
	function Rh(a,b){return O(a,Sh,{identifier:b,continueUri:ve()?Wd():"http://localhost"}).then(function(a){return a.allProviders||[]})}function Th(a,b){return O(a,Sh,{identifier:b,continueUri:ve()?Wd():"http://localhost"}).then(function(a){return a.signinMethods||[]})}function Uh(a){return O(a,Vh,{}).then(function(a){return a.authorizedDomains||[]})}function Wh(a){if(!a[L])throw new K("internal-error");}
	function Xh(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new K("internal-error");}else{if(!a.sessionInfo)throw new K("missing-verification-id");if(!a.code)throw new K("missing-verification-code");}}Ah.prototype.Pa=function(){return O(this,Yh,{})};Ah.prototype.mb=function(a,b){return O(this,Zh,{idToken:a,email:b})};Ah.prototype.nb=function(a,b){return O(this,bg,{idToken:a,password:b})};var $h={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};g=Ah.prototype;
	g.ob=function(a,b){var c={idToken:a},d=[];Ya($h,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return O(this,Zh,c)};g.hb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};bb(a,b);return O(this,ai,a)};g.ib=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};bb(a,b);return O(this,bi,a)};g.gb=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};bb(a,b);return O(this,ci,a)};function jg(a,b){return O(a,di,b)}g.Ta=function(a){return O(this,ei,a)};
	function fi(a,b,c){return O(a,gi,{idToken:b,deleteProvider:c})}function hi(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new K("internal-error");}
	function ii(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=tg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=tg(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=tg(a)):a.errorMessage&&(b=ji(a.errorMessage));if(b)throw b;if(!a[L])throw new K("internal-error");}function Lf(a,b){b.returnIdpCredential=!0;return O(a,ki,b)}function Nf(a,b){b.returnIdpCredential=!0;return O(a,li,b)}
	function Of(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return O(a,mi,b)}function ni(a){if(!a.oobCode)throw new K("invalid-action-code");}g.Xa=function(a,b){return O(this,oi,{oobCode:a,newPassword:b})};g.Ja=function(a){return O(this,pi,{oobCode:a})};g.Va=function(a){return O(this,qi,{oobCode:a})};
	var qi={endpoint:"setAccountInfo",B:ni,da:"email"},pi={endpoint:"resetPassword",B:ni,J:function(a){var b=a.requestType;if(!b||!a.email&&"EMAIL_SIGNIN"!=b)throw new K("internal-error");}},ri={endpoint:"signupNewUser",B:function(a){Ph(a);if(!a.password)throw new K("weak-password");},J:Wh,R:!0},Sh={endpoint:"createAuthUri"},si={endpoint:"deleteAccount",T:["idToken"]},gi={endpoint:"setAccountInfo",T:["idToken","deleteProvider"],B:function(a){if(!fa(a.deleteProvider))throw new K("internal-error");}},Zf=
	{endpoint:"emailLinkSignin",T:["email","oobCode"],B:Ph,J:Wh,R:!0},ag={endpoint:"emailLinkSignin",T:["idToken","email","oobCode"],B:Ph,J:Wh,R:!0},ti={endpoint:"getAccountInfo"},bi={endpoint:"getOobConfirmationCode",T:["requestType"],B:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new K("internal-error");Ph(a)},da:"email"},ci={endpoint:"getOobConfirmationCode",T:["idToken","requestType"],B:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new K("internal-error");},da:"email"},ai={endpoint:"getOobConfirmationCode",
	T:["requestType"],B:function(a){if("PASSWORD_RESET"!=a.requestType)throw new K("internal-error");Ph(a)},da:"email"},Vh={rb:!0,endpoint:"getProjectConfig",Eb:"GET"},ui={rb:!0,endpoint:"getRecaptchaParam",Eb:"GET",J:function(a){if(!a.recaptchaSiteKey)throw new K("internal-error");}},oi={endpoint:"resetPassword",B:ni,da:"email"},di={endpoint:"sendVerificationCode",T:["phoneNumber","recaptchaToken"],da:"sessionInfo"},Zh={endpoint:"setAccountInfo",T:["idToken"],B:Qh,R:!0},bg={endpoint:"setAccountInfo",
	T:["idToken"],B:function(a){Qh(a);if(!a.password)throw new K("weak-password");},J:Wh,R:!0},Yh={endpoint:"signupNewUser",J:Wh,R:!0},ki={endpoint:"verifyAssertion",B:hi,J:ii,R:!0},mi={endpoint:"verifyAssertion",B:hi,J:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new K("user-not-found");if(a.errorMessage)throw ji(a.errorMessage);if(!a[L])throw new K("internal-error");},R:!0},li={endpoint:"verifyAssertion",B:function(a){hi(a);if(!a.idToken)throw new K("internal-error");},J:ii,
	R:!0},vi={endpoint:"verifyCustomToken",B:function(a){if(!a.token)throw new K("invalid-custom-token");},J:Wh,R:!0},$f={endpoint:"verifyPassword",B:function(a){Ph(a);if(!a.password)throw new K("wrong-password");},J:Wh,R:!0},ei={endpoint:"verifyPhoneNumber",B:Xh,J:Wh},gg={endpoint:"verifyPhoneNumber",B:function(a){if(!a.idToken)throw new K("internal-error");Xh(a)},J:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",tg(a);Wh(a)}},hg={Tb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",
	B:Xh,J:Wh};function O(a,b,c){if(!Ne(c,b.T))return B(new K("internal-error"));var d=b.Eb||"POST",e;return A(c).then(b.B).then(function(){b.R&&(c.returnSecureToken=!0);return Oh(a,b.endpoint,d,c,b.Tb,b.rb||!1)}).then(function(a){return e=a}).then(b.J).then(function(){if(!b.da)return e;if(!(b.da in e))throw new K("internal-error");return e[b.da]})}function ji(a){return Nh({error:{errors:[{message:a}],code:400,message:a}})}
	function Nh(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new K(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
	MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",
	INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",
	INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",
	UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash"};bb(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new K(d[e],b);!b&&a&&(b=xe(a));return new K("internal-error",b)};var wi={Yc:{Za:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",fb:"https://securetoken.googleapis.com/v1/token",id:"p"},$c:{Za:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",fb:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},ad:{Za:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",fb:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}};
	function xi(a){for(var b in wi)if(wi[b].id===a)return a=wi[b],{firebaseEndpoint:a.Za,secureTokenEndpoint:a.fb};return null}var yi;yi=xi("__EID__")?"__EID__":void 0;function zi(a){this.b=a;this.a=null;this.bb=Ai(this)}
	function Ai(a){return Bi().then(function(){return new y(function(b,c){H("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:H("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b()}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"))},Ci.get());d.ping(e).then(e,function(){c(Error("Network Error"))})})})})}
	function Di(a,b){return a.bb.then(function(){return new y(function(c){a.a.send(b.type,b,c,H("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}function Ei(a,b){a.bb.then(function(){a.a.register("authEvent",b,H("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}var Fi=rd("https://apis.google.com/js/api.js?onload=%{onload}"),Gi=new Ce(3E4,6E4),Ci=new Ce(5E3,15E3),Hi=null;
	function Bi(){return Hi?Hi:Hi=(new y(function(a,b){function c(){Be();H("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Be();b(Error("Network Error"))},timeout:Gi.get()})}if(H("gapi.iframes.Iframe"))a();else if(H("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();k[d]=function(){H("gapi.load")?c():b(Error("Network Error"))};d=vd(Fi,{onload:d});A(sh(d)).s(function(){b(Error("Network Error"))})}})).s(function(a){Hi=null;throw a;})};function Ii(a,b,c){this.i=a;this.g=b;this.h=c;this.f=null;this.a=fd(this.i,"/__/auth/iframe");F(this.a,"apiKey",this.g);F(this.a,"appName",this.h);this.b=null;this.c=[]}Ii.prototype.toString=function(){this.f?F(this.a,"v",this.f):ld(this.a.a,"v");this.b?F(this.a,"eid",this.b):ld(this.a.a,"eid");this.c.length?F(this.a,"fw",this.c.join(",")):ld(this.a.a,"fw");return this.a.toString()};function Ji(a,b,c,d,e){this.o=a;this.l=b;this.c=c;this.m=d;this.h=this.g=this.i=null;this.a=e;this.f=null}
	Ji.prototype.toString=function(){var a=fd(this.o,"/__/auth/handler");F(a,"apiKey",this.l);F(a,"appName",this.c);F(a,"authType",this.m);if(this.a.isOAuthProvider){var b=this.a;try{var c=firebase.app(this.c).auth().ea()}catch(m){c=null}b.Ya=c;F(a,"providerId",this.a.providerId);b=this.a;c=ye(b.vb);for(var d in c)c[d]=c[d].toString();d=b.Ac;c=$a(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.$a&&b.Ya&&!c[b.$a]&&(c[b.$a]=b.Ya);Za(c)||F(a,"customParameters",xe(c))}"function"===typeof this.a.Ab&&
	(b=this.a.Ab(),b.length&&F(a,"scopes",b.join(",")));this.i?F(a,"redirectUrl",this.i):ld(a.a,"redirectUrl");this.g?F(a,"eventId",this.g):ld(a.a,"eventId");this.h?F(a,"v",this.h):ld(a.a,"v");if(this.b)for(var h in this.b)this.b.hasOwnProperty(h)&&!dd(a,h)&&F(a,h,this.b[h]);this.f?F(a,"eid",this.f):ld(a.a,"eid");h=Ki(this.c);h.length&&F(a,"fw",h.join(","));return a.toString()};function Ki(a){try{return firebase.app(a).auth().xa()}catch(b){return[]}}
	function Li(a,b,c,d,e){this.l=a;this.f=b;this.b=c;this.c=d||null;this.h=e||null;this.o=this.u=this.v=null;this.g=[];this.m=this.a=null}
	function Mi(a){var b=Wd();return Uh(a).then(function(a){a:{var c=ed(b),e=c.c;c=c.b;for(var f=0;f<a.length;f++){var h=a[f];var m=c;var p=e;0==h.indexOf("chrome-extension://")?m=ed(h).b==m&&"chrome-extension"==p:"http"!=p&&"https"!=p?m=!1:ge.test(h)?m=m==h:(h=h.split(".").join("\\."),m=(new RegExp("^(.+\\."+h+"|"+h+")$","i")).test(m));if(m){a=!0;break a}}a=!1}if(!a)throw new rg(Wd());})}
	function Ni(a){if(a.m)return a.m;a.m=he().then(function(){if(!a.u){var b=a.c,c=a.h,d=Ki(a.b),e=new Ii(a.l,a.f,a.b);e.f=b;e.b=c;e.c=Ja(d||[]);a.u=e.toString()}a.i=new zi(a.u);Oi(a)});return a.m}g=Li.prototype;g.Ea=function(a,b,c){var d=new K("popup-closed-by-user"),e=new K("web-storage-unsupported"),f=this,h=!1;return this.ga().then(function(){Pi(f).then(function(c){c||(a&&ce(a),b(e),h=!0)})}).s(function(){}).then(function(){if(!h)return fe(a)}).then(function(){if(!h)return Hc(c).then(function(){b(d)})})};
	g.Ib=function(){var a=G();return!we(a)&&!Ae(a)};g.Db=function(){return!1};
	g.zb=function(a,b,c,d,e,f,h){if(!a)return B(new K("popup-blocked"));if(h&&!we())return this.ga().s(function(b){ce(a);e(b)}),d(),A();this.a||(this.a=Mi(Qi(this)));var m=this;return this.a.then(function(){var b=m.ga().s(function(b){ce(a);e(b);throw b;});d();return b}).then(function(){mg(c);if(!h){var d=Ri(m.l,m.f,m.b,b,c,null,f,m.c,void 0,m.h);Xd(d,a)}}).s(function(a){"auth/network-request-failed"==a.code&&(m.a=null);throw a;})};
	function Qi(a){a.o||(a.v=a.c?re(a.c,Ki(a.b)):null,a.o=new Ah(a.f,xi(a.h),a.v));return a.o}g.Ca=function(a,b,c){this.a||(this.a=Mi(Qi(this)));var d=this;return this.a.then(function(){mg(b);var e=Ri(d.l,d.f,d.b,a,b,Wd(),c,d.c,void 0,d.h);Xd(e)}).s(function(a){"auth/network-request-failed"==a.code&&(d.a=null);throw a;})};g.ga=function(){var a=this;return Ni(this).then(function(){return a.i.bb}).s(function(){a.a=null;throw new K("network-request-failed");})};g.Mb=function(){return!0};
	function Ri(a,b,c,d,e,f,h,m,p,z){a=new Ji(a,b,c,d,e);a.i=f;a.g=h;a.h=m;a.b=$a(p||null);a.f=z;return a.toString()}function Oi(a){if(!a.i)throw Error("IfcHandler must be initialized!");Ei(a.i,function(b){var c={};if(b&&b.authEvent){var d=!1;b=og(b.authEvent);for(c=0;c<a.g.length;c++)d=a.g[c](b)||d;c={};c.status=d?"ACK":"ERROR";return A(c)}c.status="ERROR";return A(c)})}
	function Pi(a){var b={type:"webStorageSupport"};return Ni(a).then(function(){return Di(a.i,b)}).then(function(a){if(a&&a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})}g.va=function(a){this.g.push(a)};g.Ka=function(a){Ha(this.g,function(b){return b==a})};function Si(a){this.a=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new K("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}g=Si.prototype;g.get=function(a){return A(this.a.getItem(a)).then(function(a){return a&&ze(a)})};g.set=function(a,b){return A(this.a.setItem(a,xe(b)))};g.P=function(a){return A(this.a.removeItem(a))};g.Y=function(){};g.ca=function(){};function Ti(){if(!Ui())throw new K("web-storage-unsupported");this.f={};this.a=[];this.b=0;this.g=k.indexedDB;this.type="indexedDB"}var Vi;function Wi(a){return new y(function(b,c){var d=a.g.deleteDatabase("firebaseLocalStorageDb");d.onsuccess=function(){b()};d.onerror=function(a){c(Error(a.target.error))}})}
	function Xi(a){return new y(function(b,c){var d=a.g.open("firebaseLocalStorageDb",1);d.onerror=function(a){try{a.preventDefault()}catch(f){}c(Error(a.target.error))};d.onupgradeneeded=function(a){a=a.target.result;try{a.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(f){c(f)}};d.onsuccess=function(d){d=d.target.result;d.objectStoreNames.contains("firebaseLocalStorage")?b(d):Wi(a).then(function(){return Xi(a)}).then(function(a){b(a)}).s(function(a){c(a)})}})}
	function Yi(a){a.h||(a.h=Xi(a));return a.h}function Ui(){try{return!!k.indexedDB}catch(a){return!1}}function Zi(a){return a.objectStore("firebaseLocalStorage")}function $i(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}function aj(a){return new y(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})}g=Ti.prototype;
	g.set=function(a,b){var c=!1,d,e=this;return Yi(this).then(function(b){d=b;b=Zi($i(d,!0));return aj(b.get(a))}).then(function(f){var h=Zi($i(d,!0));if(f)return f.value=b,aj(h.put(f));e.b++;c=!0;f={};f.fbase_key=a;f.value=b;return aj(h.add(f))}).then(function(){e.f[a]=b}).ia(function(){c&&e.b--})};g.get=function(a){return Yi(this).then(function(b){return aj(Zi($i(b,!1)).get(a))}).then(function(a){return a&&a.value})};
	g.P=function(a){var b=!1,c=this;return Yi(this).then(function(d){b=!0;c.b++;return aj(Zi($i(d,!0))["delete"](a))}).then(function(){delete c.f[a]}).ia(function(){b&&c.b--})};
	g.Kc=function(){var a=this;return Yi(this).then(function(a){var b=Zi($i(a,!1));return b.getAll?aj(b.getAll()):new y(function(a,c){var d=[],e=b.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){c(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.b){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=Yd(a.f,c);a.f=c}return d})};g.Y=function(a){0==this.a.length&&bj(this);this.a.push(a)};
	g.ca=function(a){Ha(this.a,function(b){return b==a});0==this.a.length&&this.c&&this.c.cancel("STOP_EVENT")};function bj(a){function b(){a.c=Hc(800).then(r(a.Kc,a)).then(function(b){0<b.length&&v(a.a,function(a){a(b)})}).then(b).s(function(a){"STOP_EVENT"!=a.message&&b()});return a.c}a.c&&a.c.cancel("STOP_EVENT");b()};function cj(a){var b=this,c=null;this.a=[];this.type="indexedDB";this.c=a;this.b=A().then(function(){return Ui()?(Vi||(Vi=new Ti),c=Vi,c.set("__sak","!").then(function(){return c.get("__sak")}).then(function(a){if("!"!==a)throw Error("indexedDB not supported!");return c.P("__sak")}).then(function(){return c}).s(function(){return b.c})):b.c}).then(function(a){b.type=a.type;a.Y(function(a){v(b.a,function(b){b(a)})});return a})}g=cj.prototype;g.get=function(a){return this.b.then(function(b){return b.get(a)})};
	g.set=function(a,b){return this.b.then(function(c){return c.set(a,b)})};g.P=function(a){return this.b.then(function(b){return b.P(a)})};g.Y=function(a){this.a.push(a)};g.ca=function(a){Ha(this.a,function(b){return b==a})};function dj(){this.a={};this.type="inMemory"}g=dj.prototype;g.get=function(a){return A(this.a[a])};g.set=function(a,b){this.a[a]=b;return A()};g.P=function(a){delete this.a[a];return A()};g.Y=function(){};g.ca=function(){};function ej(){if(!fj()){if("Node"==ne())throw new K("internal-error","The LocalStorage compatibility library was not found.");throw new K("web-storage-unsupported");}this.a=gj()||firebase.INTERNAL.node.localStorage;this.type="localStorage"}function gj(){try{var a=k.localStorage,b=te();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
	function fj(){var a="Node"==ne();a=gj()||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}g=ej.prototype;g.get=function(a){var b=this;return A().then(function(){var c=b.a.getItem(a);return ze(c)})};g.set=function(a,b){var c=this;return A().then(function(){var d=xe(b);null===d?c.P(a):c.a.setItem(a,d)})};g.P=function(a){var b=this;return A().then(function(){b.a.removeItem(a)})};
	g.Y=function(a){k.window&&rc(k.window,"storage",a)};g.ca=function(a){k.window&&D(k.window,"storage",a)};function hj(){this.type="nullStorage"}g=hj.prototype;g.get=function(){return A(null)};g.set=function(){return A()};g.P=function(){return A()};g.Y=function(){};g.ca=function(){};function ij(){if(!jj()){if("Node"==ne())throw new K("internal-error","The SessionStorage compatibility library was not found.");throw new K("web-storage-unsupported");}this.a=kj()||firebase.INTERNAL.node.sessionStorage;this.type="sessionStorage"}function kj(){try{var a=k.sessionStorage,b=te();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
	function jj(){var a="Node"==ne();a=kj()||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}g=ij.prototype;g.get=function(a){var b=this;return A().then(function(){var c=b.a.getItem(a);return ze(c)})};g.set=function(a,b){var c=this;return A().then(function(){var d=xe(b);null===d?c.P(a):c.a.setItem(a,d)})};g.P=function(a){var b=this;return A().then(function(){b.a.removeItem(a)})};g.Y=function(){};
	g.ca=function(){};function lj(){var a={};a.Browser=mj;a.Node=nj;a.ReactNative=oj;a.Worker=pj;this.a=a[ne()]}var qj,mj={A:ej,Qa:ij},nj={A:ej,Qa:ij},oj={A:Si,Qa:hj},pj={A:ej,Qa:hj};var rj={Xc:"local",NONE:"none",Zc:"session"};function sj(a){var b=new K("invalid-persistence-type"),c=new K("unsupported-persistence-type");a:{for(d in rj)if(rj[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(ne()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!se()&&"none"!==a)throw c;}}
	function tj(){var a=!Ae(G())&&le()?!0:!1,b=we(),c=se();this.o=a;this.h=b;this.m=c;this.a={};qj||(qj=new lj);a=qj;try{this.g=!Vd()&&Ge()||!k.indexedDB?new a.a.A:new cj(me()?new dj:new a.a.A)}catch(d){this.g=new dj,this.h=!0}try{this.i=new a.a.Qa}catch(d){this.i=new dj}this.l=new dj;this.f=r(this.Lb,this);this.b={}}var uj;function vj(){uj||(uj=new tj);return uj}function wj(a,b){switch(b){case "session":return a.i;case "none":return a.l;default:return a.g}}
	function xj(a,b){return"firebase:"+a.name+(b?":"+b:"")}function yj(a,b,c){var d=xj(b,c),e=wj(a,b.A);return a.get(b,c).then(function(f){var h=null;try{h=ze(k.localStorage.getItem(d))}catch(m){}if(h&&!f)return k.localStorage.removeItem(d),a.set(b,h,c);h&&f&&"localStorage"!=e.type&&k.localStorage.removeItem(d)})}g=tj.prototype;g.get=function(a,b){return wj(this,a.A).get(xj(a,b))};function zj(a,b,c){c=xj(b,c);"local"==b.A&&(a.b[c]=null);return wj(a,b.A).P(c)}
	g.set=function(a,b,c){var d=xj(a,c),e=this,f=wj(this,a.A);return f.set(d,b).then(function(){return f.get(d)}).then(function(b){"local"==a.A&&(e.b[d]=b)})};g.addListener=function(a,b,c){a=xj(a,b);this.m&&(this.b[a]=k.localStorage.getItem(a));Za(this.a)&&(wj(this,"local").Y(this.f),this.h||(Vd()||!Ge())&&k.indexedDB||!this.m||Aj(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c)};
	g.removeListener=function(a,b,c){a=xj(a,b);this.a[a]&&(Ha(this.a[a],function(a){return a==c}),0==this.a[a].length&&delete this.a[a]);Za(this.a)&&(wj(this,"local").ca(this.f),Bj(this))};function Aj(a){Bj(a);a.c=setInterval(function(){for(var b in a.a){var c=k.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new ec({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Lb(c))}},1E3)}function Bj(a){a.c&&(clearInterval(a.c),a.c=null)}
	g.Lb=function(a){if(a&&a.f){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=k.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.Wa(c))}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?wj(this,"local").ca(this.f):Bj(this);if(this.o)if(c=k.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?k.localStorage.setItem(b,d):k.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
	typeof a.a.a||f.b[b]!==k.localStorage.getItem(b))f.b[b]=k.localStorage.getItem(b),f.Wa(b)};Ob&&Zb&&10==Zb&&k.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c()}}else v(a,r(this.Wa,this))};g.Wa=function(a){this.a[a]&&v(this.a[a],function(a){a()})};function Cj(a){this.a=a;this.b=vj()}var Dj={name:"authEvent",A:"local"};function Ej(a){return a.b.get(Dj,a.a).then(function(a){return og(a)})};function Fj(){this.a=vj()};function Gj(){this.b=-1};function Hj(a,b){this.b=-1;this.b=Ij;this.f=k.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.m=k.Int32Array?new Int32Array(64):Array(64);void 0!==Jj||(k.Int32Array?Jj=new Int32Array(Kj):Jj=Kj);this.reset()}var Jj;t(Hj,Gj);for(var Ij=64,Lj=Ij-1,Mj=[],Nj=0;Nj<Lj;Nj++)Mj[Nj]=0;var Oj=Ia(128,Mj);Hj.prototype.reset=function(){this.g=this.c=0;this.a=k.Int32Array?new Int32Array(this.h):Ja(this.h)};
	function Pj(a){for(var b=a.f,c=a.m,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,h=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+h|0}d=a.a[0]|0;e=a.a[1]|0;var m=a.a[2]|0,p=a.a[3]|0,z=a.a[4]|0,pc=a.a[5]|0,Pc=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var Rl=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&m^e&m)|0;h=z&pc^~z&Pc;f=f+((z>>>6|z<<26)^(z>>>11|z<<21)^(z>>>
	25|z<<7))|0;h=h+(Jj[b]|0)|0;h=f+(h+(c[b]|0)|0)|0;f=Pc;Pc=pc;pc=z;z=p+h|0;p=m;m=e;e=d;d=h+Rl|0}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+m|0;a.a[3]=a.a[3]+p|0;a.a[4]=a.a[4]+z|0;a.a[5]=a.a[5]+pc|0;a.a[6]=a.a[6]+Pc|0;a.a[7]=a.a[7]+f|0}
	function Qj(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if(l(b))for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(Pj(a),e=0);else if(ha(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(Pj(a),e=0)}else throw Error("message must be string or array");a.c=e;a.g+=c}
	var Kj=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
	4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function Rj(){Hj.call(this,8,Sj)}t(Rj,Hj);var Sj=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function Tj(a,b,c,d,e){this.l=a;this.i=b;this.m=c;this.o=d||null;this.u=e||null;this.h=b+":"+c;this.v=new Fj;this.g=new Cj(this.h);this.f=null;this.b=[];this.a=this.c=null}function Uj(a){return new K("invalid-cordova-configuration",a)}g=Tj.prototype;
	g.ga=function(){return this.za?this.za:this.za=ie().then(function(){if("function"!==typeof H("universalLinks.subscribe",k))throw Uj("cordova-universal-links-plugin is not installed");if("undefined"===typeof H("BuildInfo.packageName",k))throw Uj("cordova-plugin-buildinfo is not installed");if("function"!==typeof H("cordova.plugins.browsertab.openUrl",k))throw Uj("cordova-plugin-browsertab is not installed");if("function"!==typeof H("cordova.InAppBrowser.open",k))throw Uj("cordova-plugin-inappbrowser is not installed");
	},function(){throw new K("cordova-not-ready");})};function Vj(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function Wj(a){var b=new Rj;Qj(b,a);a=[];var c=8*b.g;56>b.c?Qj(b,Oj,56-b.c):Qj(b,Oj,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;Pj(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return lf(a)}
	g.Ea=function(a,b){b(new K("operation-not-supported-in-this-environment"));return A()};g.zb=function(){return B(new K("operation-not-supported-in-this-environment"))};g.Mb=function(){return!1};g.Ib=function(){return!0};g.Db=function(){return!0};
	g.Ca=function(a,b,c){if(this.c)return B(new K("redirect-operation-pending"));var d=this,e=k.document,f=null,h=null,m=null,p=null;return this.c=A().then(function(){mg(b);return Xj(d)}).then(function(){return Yj(d,a,b,c)}).then(function(){return(new y(function(a,b){h=function(){var b=H("cordova.plugins.browsertab.close",k);a();"function"===typeof b&&b();d.a&&"function"===typeof d.a.close&&(d.a.close(),d.a=null);return!1};d.va(h);m=function(){f||(f=Hc(2E3).then(function(){b(new K("redirect-cancelled-by-user"))}))};
	p=function(){De()&&m()};e.addEventListener("resume",m,!1);G().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",p,!1)})).s(function(a){return Zj(d).then(function(){throw a;})})}).ia(function(){m&&e.removeEventListener("resume",m,!1);p&&e.removeEventListener("visibilitychange",p,!1);f&&f.cancel();h&&d.Ka(h);d.c=null})};
	function Yj(a,b,c,d){var e=Vj(),f=new ng(b,d,null,e,new K("no-auth-event")),h=H("BuildInfo.packageName",k);if("string"!==typeof h)throw new K("invalid-cordova-configuration");var m=H("BuildInfo.displayName",k),p={};if(G().toLowerCase().match(/iphone|ipad|ipod/))p.ibi=h;else if(G().toLowerCase().match(/android/))p.apn=h;else return B(new K("operation-not-supported-in-this-environment"));m&&(p.appDisplayName=m);e=Wj(e);p.sessionId=e;var z=Ri(a.l,a.i,a.m,b,c,null,d,a.o,p,a.u);return a.ga().then(function(){var b=
	a.h;return a.v.a.set(Dj,f.D(),b)}).then(function(){var b=H("cordova.plugins.browsertab.isAvailable",k);if("function"!==typeof b)throw new K("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=H("cordova.plugins.browsertab.openUrl",k);if("function"!==typeof c)throw new K("invalid-cordova-configuration");c(z)}else{c=H("cordova.InAppBrowser.open",k);if("function"!==typeof c)throw new K("invalid-cordova-configuration");b=G();b=!(!b.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!b.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
	a.a=c(z,b?"_blank":"_system","location=yes")}})})}function ak(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b)}catch(d){}}function Xj(a){a.f||(a.f=a.ga().then(function(){return new y(function(b){function c(d){b(d);a.Ka(c);return!1}a.va(c);bk(a)})}));return a.f}function Zj(a){var b=null;return Ej(a.g).then(function(c){b=c;c=a.g;return zj(c.b,Dj,c.a)}).then(function(){return b})}
	function bk(a){function b(b){d=!0;e&&e.cancel();Zj(a).then(function(d){var e=c;if(d&&b&&b.url){var f=null;e=If(b.url);-1!=e.indexOf("/__/auth/callback")&&(f=ed(e),f=ze(dd(f,"firebaseError")||null),f=(f="object"===typeof f?$e(f):null)?new ng(d.b,d.c,null,null,f):new ng(d.b,d.c,e,d.g));e=f||c}ak(a,e)})}var c=new ng("unknown",null,null,null,new K("no-auth-event")),d=!1,e=Hc(500).then(function(){return Zj(a).then(function(){d||ak(a,c)})}),f=k.handleOpenURL;k.handleOpenURL=function(a){0==a.toLowerCase().indexOf(H("BuildInfo.packageName",
	k).toLowerCase()+"://")&&b({url:a});if("function"===typeof f)try{f(a)}catch(m){console.error(m)}};qg||(qg=new pg);qg.subscribe(b)}g.va=function(a){this.b.push(a);Xj(this).s(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new ng("unknown",null,null,null,new K("no-auth-event")),a(b))})};g.Ka=function(a){Ha(this.b,function(b){return b==a})};function ck(a){this.a=a;this.b=vj()}var dk={name:"pendingRedirect",A:"session"};function ek(a){return a.b.set(dk,"pending",a.a)}function fk(a){return zj(a.b,dk,a.a)}function gk(a){return a.b.get(dk,a.a).then(function(a){return"pending"==a})};function hk(a,b,c){this.v=a;this.m=b;this.l=c;this.h=[];this.f=!1;this.i=r(this.o,this);this.c=new ik;this.u=new jk;this.g=new ck(this.m+":"+this.l);this.b={};this.b.unknown=this.c;this.b.signInViaRedirect=this.c;this.b.linkViaRedirect=this.c;this.b.reauthViaRedirect=this.c;this.b.signInViaPopup=this.u;this.b.linkViaPopup=this.u;this.b.reauthViaPopup=this.u;this.a=kk(this.v,this.m,this.l,yi)}function kk(a,b,c,d){var e=firebase.SDK_VERSION||null;return je()?new Tj(a,b,c,e,d):new Li(a,b,c,e,d)}
	hk.prototype.reset=function(){this.f=!1;this.a.Ka(this.i);this.a=kk(this.v,this.m,this.l)};function lk(a){a.f||(a.f=!0,a.a.va(a.i));var b=a.a;return a.a.ga().s(function(c){a.a==b&&a.reset();throw c;})}function mk(a){a.a.Ib()&&lk(a).s(function(b){var c=new ng("unknown",null,null,null,new K("operation-not-supported-in-this-environment"));nk(b)&&a.o(c)});a.a.Db()||ok(a.c)}
	hk.prototype.subscribe=function(a){Fa(this.h,a)||this.h.push(a);if(!this.f){var b=this;gk(this.g).then(function(a){a?fk(b.g).then(function(){lk(b).s(function(a){var c=new ng("unknown",null,null,null,new K("operation-not-supported-in-this-environment"));nk(a)&&b.o(c)})}):mk(b)}).s(function(){mk(b)})}};hk.prototype.unsubscribe=function(a){Ha(this.h,function(b){return b==a})};
	hk.prototype.o=function(a){if(!a)throw new K("invalid-auth-event");for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.sb(a.b,a.c)){(b=this.b[a.b])&&b.h(a,d);b=!0;break}}ok(this.c);return b};var pk=new Ce(2E3,1E4),qk=new Ce(3E4,6E4);hk.prototype.fa=function(){return this.c.fa()};function rk(a,b,c,d,e,f){return a.a.zb(b,c,d,function(){a.f||(a.f=!0,a.a.va(a.i))},function(){a.reset()},e,f)}function nk(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
	hk.prototype.Ca=function(a,b,c){var d=this,e;return ek(this.g).then(function(){return d.a.Ca(a,b,c).s(function(a){if(nk(a))throw new K("operation-not-supported-in-this-environment");e=a;return fk(d.g).then(function(){throw e;})}).then(function(){return d.a.Mb()?new y(function(){}):fk(d.g).then(function(){return d.fa()}).then(function(){}).s(function(){})})})};hk.prototype.Ea=function(a,b,c,d){return this.a.Ea(c,function(c){a.ha(b,null,c,d)},pk.get())};var sk={};
	function tk(a,b,c){var d=b+":"+c;sk[d]||(sk[d]=new hk(a,b,c));return sk[d]}function ik(){this.b=null;this.f=[];this.c=[];this.a=null;this.g=!1}ik.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null)};
	ik.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.b,d=a.c,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;"unknown"!=c||e||f?a.a?(uk(this,!0,null,a.a),A()):b.wa(c,d)?vk(this,a,b):B(new K("invalid-auth-event")):(uk(this,!1,null,null),A())}else B(new K("invalid-auth-event"))};function ok(a){a.g||(a.g=!0,uk(a,!1,null,null))}
	function vk(a,b,c){c=c.wa(b.b,b.c);var d=b.f,e=b.g,f=!!b.b.match(/Redirect$/);c(d,e).then(function(b){uk(a,f,b,null)}).s(function(b){uk(a,f,null,b)})}function wk(a,b){a.b=function(){return B(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b)}function xk(a,b){a.b=function(){return A(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b)}function uk(a,b,c,d){b?d?wk(a,d):xk(a,c):xk(a,{user:null});a.f=[];a.c=[]}
	ik.prototype.fa=function(){var a=this;return new y(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),yk(a))})};function yk(a){var b=new K("timeout");a.a&&a.a.cancel();a.a=Hc(qk.get()).then(function(){a.b||uk(a,!0,null,b)})}function jk(){}jk.prototype.h=function(a,b){if(a){var c=a.b,d=a.c;a.a?(b.ha(a.b,null,a.a,a.c),A()):b.wa(c,d)?zk(a,b):B(new K("invalid-auth-event"))}else B(new K("invalid-auth-event"))};
	function zk(a,b){var c=a.c,d=a.b;b.wa(d,c)(a.f,a.g).then(function(a){b.ha(d,a,null,c)}).s(function(a){b.ha(d,null,a,c)})};function Ak(){this.pb=!1;Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.pb},set:function(a){this.pb=a},enumerable:!1})};function Bk(a,b){this.a=b;I(this,"verificationId",a)}Bk.prototype.confirm=function(a){a=kg(this.verificationId,a);return this.a(a)};function Ck(a,b,c,d){return(new ig(a)).Ta(b,c).then(function(a){return new Bk(a,d)})};function Dk(a){var b=tf(a);if(!(b&&b.exp&&b.auth_time&&b.iat))throw new K("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");J(this,{token:a,expirationTime:Fe(1E3*b.exp),authTime:Fe(1E3*b.auth_time),issuedAtTime:Fe(1E3*b.iat),signInProvider:b.firebase&&b.firebase.sign_in_provider?b.firebase.sign_in_provider:null,claims:b})};function Ek(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}Ek.prototype.start=function(){this.a=this.c;Fk(this,!0)};function Gk(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function Fk(a,b){a.stop();a.b=Hc(Gk(a,b)).then(function(){return Ee()}).then(function(){return a.h()}).then(function(){Fk(a,!0)}).s(function(b){a.i(b)&&Fk(a,!1)})}
	Ek.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)};function Hk(a){this.f=a;this.b=this.a=null;this.c=0}Hk.prototype.D=function(){return{apiKey:this.f.b,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}};function Ik(a,b){var c=b[L],d=b.refreshToken;b=Jk(b.expiresIn);a.b=c;a.c=b;a.a=d}function Kk(a,b){a.b=b.b;a.a=b.a;a.c=b.c}function Jk(a){return na()+1E3*parseInt(a,10)}
	function Lk(a,b){return Mh(a.f,b).then(function(b){a.b=b.access_token;a.c=Jk(b.expires_in);a.a=b.refresh_token;return{accessToken:a.b,expirationTime:a.c,refreshToken:a.a}}).s(function(b){"auth/user-token-expired"==b.code&&(a.a=null);throw b;})}Hk.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?B(new K("user-token-expired")):a||!this.b||na()>this.c-3E4?this.a?Lk(this,{grant_type:"refresh_token",refresh_token:this.a}):A(null):A({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})};function Mk(a,b){this.a=a||null;this.b=b||null;J(this,{lastSignInTime:Fe(b||null),creationTime:Fe(a||null)})}function Nk(a){return new Mk(a.a,a.b)}Mk.prototype.D=function(){return{lastLoginAt:this.b,createdAt:this.a}};function Ok(a,b,c,d,e,f){J(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})}function Pk(a,b){C.call(this,a);for(var c in b)this[c]=b[c]}t(Pk,C);
	function Q(a,b,c){this.G=[];this.l=a.apiKey;this.o=a.appName;this.u=a.authDomain||null;a=firebase.SDK_VERSION?re(firebase.SDK_VERSION):null;this.b=new Ah(this.l,xi(yi),a);this.h=new Hk(this.b);Qk(this,b[L]);Ik(this.h,b);I(this,"refreshToken",this.h.a);Rk(this,c||{});E.call(this);this.I=!1;this.u&&ue()&&(this.a=tk(this.u,this.l,this.o));this.N=[];this.i=null;this.w=Sk(this);this.V=r(this.Ha,this);var d=this;this.ka=null;this.sa=function(a){d.oa(a.g)};this.X=null;this.O=[];this.ra=function(a){Tk(d,
	a.c)};this.W=null}t(Q,E);Q.prototype.oa=function(a){this.ka=a;Gh(this.b,a)};Q.prototype.ea=function(){return this.ka};function Uk(a,b){a.X&&D(a.X,"languageCodeChanged",a.sa);(a.X=b)&&rc(b,"languageCodeChanged",a.sa)}function Tk(a,b){a.O=b;Hh(a.b,firebase.SDK_VERSION?re(firebase.SDK_VERSION,a.O):null)}Q.prototype.xa=function(){return Ja(this.O)};function Vk(a,b){a.W&&D(a.W,"frameworkChanged",a.ra);(a.W=b)&&rc(b,"frameworkChanged",a.ra)}Q.prototype.Ha=function(){this.w.b&&(this.w.stop(),this.w.start())};
	function Wk(a){try{return firebase.app(a.o).auth()}catch(b){throw new K("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.o+"'!");}}function Sk(a){return new Ek(function(){return a.F(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.h.c-na()-3E5;return 0<b?b:0})}function Xk(a){a.C||a.w.b||(a.w.start(),D(a,"tokenChanged",a.V),rc(a,"tokenChanged",a.V))}function Yk(a){D(a,"tokenChanged",a.V);a.w.stop()}
	function Qk(a,b){a.qa=b;I(a,"_lat",b)}function Zk(a,b){Ha(a.N,function(a){return a==b})}function $k(a){for(var b=[],c=0;c<a.N.length;c++)b.push(a.N[c](a));return vb(b).then(function(){return a})}function al(a){a.a&&!a.I&&(a.I=!0,a.a.subscribe(a))}
	function Rk(a,b){J(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,metadata:new Mk(b.createdAt,b.lastLoginAt),providerData:[]})}I(Q.prototype,"providerId","firebase");function bl(){}function cl(a){return A().then(function(){if(a.C)throw new K("app-deleted");})}function dl(a){return Ba(a.providerData,function(a){return a.providerId})}
	function el(a,b){b&&(fl(a,b.providerId),a.providerData.push(b))}function fl(a,b){Ha(a.providerData,function(a){return a.providerId==b})}function gl(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&I(a,b,c)}
	function hl(a,b){a!=b&&(J(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,providerData:[]}),b.metadata?I(a,"metadata",Nk(b.metadata)):I(a,"metadata",new Mk),v(b.providerData,function(b){el(a,b)}),Kk(a.h,b.h),I(a,"refreshToken",a.h.a))}g=Q.prototype;g.reload=function(){var a=this;return R(this,cl(this).then(function(){return il(a).then(function(){return $k(a)}).then(bl)}))};
	function il(a){return a.F().then(function(b){var c=a.isAnonymous;return jl(a,b).then(function(){c||gl(a,"isAnonymous",!1);return b})})}g.ac=function(a){return this.F(a).then(function(a){return new Dk(a)})};g.F=function(a){var b=this;return R(this,cl(this).then(function(){return b.h.getToken(a)}).then(function(a){if(!a)throw new K("internal-error");a.accessToken!=b.qa&&(Qk(b,a.accessToken),b.dispatchEvent(new Pk("tokenChanged")));gl(b,"refreshToken",a.refreshToken);return a.accessToken}))};
	function kl(a,b){b[L]&&a.qa!=b[L]&&(Ik(a.h,b),a.dispatchEvent(new Pk("tokenChanged")),Qk(a,b[L]),gl(a,"refreshToken",a.h.a))}function jl(a,b){return O(a.b,ti,{idToken:b}).then(r(a.uc,a))}
	g.uc=function(a){a=a.users;if(!a||!a.length)throw new K("internal-error");a=a[0];Rk(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt});for(var b=ll(a),c=0;c<b.length;c++)el(this,b[c]);gl(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
	function ll(a){return(a=a.providerUserInfo)&&a.length?Ba(a,function(a){return new Ok(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl,a.phoneNumber)}):[]}g.cb=function(a){var b=this,c=null;return R(this,a.f(this.b,this.uid).then(function(a){kl(b,a);c=ml(b,a,"reauthenticate");b.i=null;return b.reload()}).then(function(){return c}),!0)};
	g.vc=function(a){Ie("firebase.User.prototype.reauthenticateWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential instead.");return this.cb(a).then(function(){})};function nl(a,b){return il(a).then(function(){if(Fa(dl(a),b))return $k(a).then(function(){throw new K("provider-already-linked");})})}
	g.ab=function(a){var b=this,c=null;return R(this,nl(this,a.providerId).then(function(){return b.F()}).then(function(c){return a.c(b.b,c)}).then(function(a){c=ml(b,a,"link");return ol(b,a)}).then(function(){return c}))};g.mc=function(a){Ie("firebase.User.prototype.linkWithCredential is deprecated. Please use firebase.User.prototype.linkAndRetrieveDataWithCredential instead.");return this.ab(a).then(function(a){return a.user})};
	g.nc=function(a,b){var c=this;return R(this,nl(this,"phone").then(function(){return Ck(Wk(c),a,b,r(c.ab,c))}))};g.wc=function(a,b){var c=this;return R(this,A().then(function(){return Ck(Wk(c),a,b,r(c.cb,c))}),!0)};function ml(a,b,c){var d=lg(b);b=yf(b);return Le({user:a,credential:d,additionalUserInfo:b,operationType:c})}function ol(a,b){kl(a,b);return a.reload().then(function(){return a})}
	g.mb=function(a){var b=this;return R(this,this.F().then(function(c){return b.b.mb(c,a)}).then(function(a){kl(b,a);return b.reload()}))};g.Pc=function(a){var b=this;return R(this,this.F().then(function(c){return a.c(b.b,c)}).then(function(a){kl(b,a);return b.reload()}))};g.nb=function(a){var b=this;return R(this,this.F().then(function(c){return b.b.nb(c,a)}).then(function(a){kl(b,a);return b.reload()}))};
	g.ob=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return cl(this);var b=this;return R(this,this.F().then(function(c){return b.b.ob(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){kl(b,a);gl(b,"displayName",a.displayName||null);gl(b,"photoURL",a.photoUrl||null);v(b.providerData,function(a){"password"===a.providerId&&(I(a,"displayName",b.displayName),I(a,"photoURL",b.photoURL))});return $k(b)}).then(bl))};
	g.Nc=function(a){var b=this;return R(this,il(this).then(function(c){return Fa(dl(b),a)?fi(b.b,c,[a]).then(function(a){var c={};v(a.providerUserInfo||[],function(a){c[a.providerId]=!0});v(dl(b),function(a){c[a]||fl(b,a)});c[ig.PROVIDER_ID]||I(b,"phoneNumber",null);return $k(b)}):$k(b).then(function(){throw new K("no-such-provider");})}))};
	g.delete=function(){var a=this;return R(this,this.F().then(function(b){return O(a.b,si,{idToken:b})}).then(function(){a.dispatchEvent(new Pk("userDeleted"))})).then(function(){for(var b=0;b<a.G.length;b++)a.G[b].cancel("app-deleted");Uk(a,null);Vk(a,null);a.G=[];a.C=!0;Yk(a);I(a,"refreshToken",null);a.a&&a.a.unsubscribe(a)})};
	g.sb=function(a,b){return"linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.aa||null)==b||"reauthViaRedirect"==a&&(this.aa||null)==b?!0:!1};g.ha=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};
	g.wa=function(a,b){return"linkViaPopup"==a&&b==(this.g||null)?r(this.xb,this):"reauthViaPopup"==a&&b==(this.g||null)?r(this.yb,this):"linkViaRedirect"==a&&(this.aa||null)==b?r(this.xb,this):"reauthViaRedirect"==a&&(this.aa||null)==b?r(this.yb,this):null};g.oc=function(a){var b=this;return pl(this,"linkViaPopup",a,function(){return nl(b,a.providerId).then(function(){return $k(b)})},!1)};g.xc=function(a){return pl(this,"reauthViaPopup",a,function(){return A()},!0)};
	function pl(a,b,c,d,e){if(!ue())return B(new K("operation-not-supported-in-this-environment"));if(a.i&&!e)return B(a.i);var f=xf(c.providerId),h=te(a.uid+":::"),m=null;(!we()||le())&&a.u&&c.isOAuthProvider&&(m=Ri(a.u,a.l,a.o,b,c,null,h,firebase.SDK_VERSION||null));var p=de(m,f&&f.Ba,f&&f.Aa);d=d().then(function(){ql(a);if(!e)return a.F().then(function(){})}).then(function(){return rk(a.a,p,b,c,h,!!m)}).then(function(){return new y(function(c,d){a.ha(b,null,new K("cancelled-popup-request"),a.g||null);
	a.f=c;a.v=d;a.g=h;a.c=a.a.Ea(a,b,p,h)})}).then(function(a){p&&ce(p);return a?Le(a):null}).s(function(a){p&&ce(p);throw a;});return R(a,d,e)}g.pc=function(a){var b=this;return rl(this,"linkViaRedirect",a,function(){return nl(b,a.providerId)},!1)};g.yc=function(a){return rl(this,"reauthViaRedirect",a,function(){return A()},!0)};
	function rl(a,b,c,d,e){if(!ue())return B(new K("operation-not-supported-in-this-environment"));if(a.i&&!e)return B(a.i);var f=null,h=te(a.uid+":::");d=d().then(function(){ql(a);if(!e)return a.F().then(function(){})}).then(function(){a.aa=h;return $k(a)}).then(function(b){a.ba&&(b=a.ba,b=b.b.set(sl,a.D(),b.a));return b}).then(function(){return a.a.Ca(b,c,h)}).s(function(b){f=b;if(a.ba)return tl(a.ba);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
	function ql(a){if(!a.a||!a.I){if(a.a&&!a.I)throw new K("internal-error");throw new K("auth-domain-config-required");}}g.xb=function(a,b){var c=this;this.c&&(this.c.cancel(),this.c=null);var d=null,e=this.F().then(function(d){return Nf(c.b,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=ml(c,a,"link");return ol(c,a)}).then(function(){return d});return R(this,e)};
	g.yb=function(a,b){var c=this;this.c&&(this.c.cancel(),this.c=null);var d=null,e=A().then(function(){return Jf(Of(c.b,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=ml(c,a,"reauthenticate");kl(c,a);c.i=null;return c.reload()}).then(function(){return d});return R(this,e,!0)};g.gb=function(a){var b=this,c=null;return R(this,this.F().then(function(b){c=b;return"undefined"===typeof a||Za(a)?{}:kf(new af(a))}).then(function(a){return b.b.gb(c,a)}).then(function(a){if(b.email!=a)return b.reload()}).then(function(){}))};
	function R(a,b,c){var d=ul(a,b,c);a.G.push(d);d.ia(function(){Ga(a.G,d)});return d}function ul(a,b,c){return a.i&&!c?(b.cancel(),B(a.i)):b.s(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.i||a.dispatchEvent(new Pk("userInvalidated")),a.i=b);throw b;})}g.toJSON=function(){return this.D()};
	g.D=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.l,appName:this.o,authDomain:this.u,stsTokenManager:this.h.D(),redirectEventId:this.aa||null};this.metadata&&bb(a,this.metadata.D());v(this.providerData,function(b){a.providerData.push(Me(b))});return a};
	function vl(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c[L]=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-na())/1E3;else return null;var d=new Q(b,c,a);a.providerData&&v(a.providerData,function(a){a&&el(d,Le(a))});a.redirectEventId&&(d.aa=a.redirectEventId);return d}
	function wl(a,b,c,d){var e=new Q(a,b);c&&(e.ba=c);d&&Tk(e,d);return e.reload().then(function(){return e})}function xl(a,b,c,d){b=b||{apiKey:a.l,authDomain:a.u,appName:a.o};var e=a.h,f={};f[L]=e.b;f.refreshToken=e.a;f.expiresIn=(e.c-na())/1E3;b=new Q(b,f);c&&(b.ba=c);d&&Tk(b,d);hl(b,a);return b};function yl(a){this.a=a;this.b=vj()}var sl={name:"redirectUser",A:"session"};function tl(a){return zj(a.b,sl,a.a)}function zl(a,b){return a.b.get(sl,a.a).then(function(a){a&&b&&(a.authDomain=b);return vl(a||{})})};function Al(a){this.a=a;this.b=vj();this.c=null;this.f=Bl(this);this.b.addListener(Cl("local"),this.a,r(this.g,this))}Al.prototype.g=function(){var a=this,b=Cl("local");Dl(this,function(){return A().then(function(){return a.c&&"local"!=a.c.A?a.b.get(b,a.a):null}).then(function(c){if(c)return El(a,"local").then(function(){a.c=b})})})};function El(a,b){var c=[],d;for(d in rj)rj[d]!==b&&c.push(zj(a.b,Cl(rj[d]),a.a));c.push(zj(a.b,Fl,a.a));return ub(c)}
	function Bl(a){var b=Cl("local"),c=Cl("session"),d=Cl("none");return yj(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(c){return c?d:a.b.get(b,a.a).then(function(c){return c?b:a.b.get(Fl,a.a).then(function(a){return a?Cl(a):b})})})}).then(function(b){a.c=b;return El(a,b.A)}).s(function(){a.c||(a.c=b)})}var Fl={name:"persistence",A:"session"};function Cl(a){return{name:"authUser",A:a}}
	Al.prototype.jb=function(a){var b=null,c=this;sj(a);return Dl(this,function(){return a!=c.c.A?c.b.get(c.c,c.a).then(function(d){b=d;return El(c,a)}).then(function(){c.c=Cl(a);if(b)return c.b.set(c.c,b,c.a)}):A()})};function Gl(a){return Dl(a,function(){return a.b.set(Fl,a.c.A,a.a)})}function Hl(a,b){return Dl(a,function(){return a.b.set(a.c,b.D(),a.a)})}function Il(a){return Dl(a,function(){return zj(a.b,a.c,a.a)})}
	function Jl(a,b){return Dl(a,function(){return a.b.get(a.c,a.a).then(function(a){a&&b&&(a.authDomain=b);return vl(a||{})})})}function Dl(a,b){a.f=a.f.then(b,b);return a.f};function Kl(a){this.l=!1;I(this,"settings",new Ak);I(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=firebase.SDK_VERSION?re(firebase.SDK_VERSION):null,this.b=new Ah(S(this).options&&S(this).options.apiKey,xi(yi),a);else throw new K("invalid-api-key");this.N=[];this.o=[];this.I=[];this.Pb=firebase.INTERNAL.createSubscribe(r(this.ic,this));this.O=void 0;this.Qb=firebase.INTERNAL.createSubscribe(r(this.jc,this));Ll(this,null);this.h=new Al(S(this).options.apiKey+":"+S(this).name);this.w=
	new yl(S(this).options.apiKey+":"+S(this).name);this.V=T(this,Ml(this));this.i=T(this,Nl(this));this.X=!1;this.ka=r(this.Jc,this);this.Ha=r(this.Z,this);this.qa=r(this.Yb,this);this.ra=r(this.gc,this);this.sa=r(this.hc,this);Ol(this);this.INTERNAL={};this.INTERNAL["delete"]=r(this.delete,this);this.INTERNAL.logFramework=r(this.qc,this);this.u=0;E.call(this);Pl(this);this.G=[]}t(Kl,E);function Ql(a){C.call(this,"languageCodeChanged");this.g=a}t(Ql,C);
	function Sl(a){C.call(this,"frameworkChanged");this.c=a}t(Sl,C);g=Kl.prototype;g.jb=function(a){a=this.h.jb(a);return T(this,a)};g.oa=function(a){this.W===a||this.l||(this.W=a,Gh(this.b,this.W),this.dispatchEvent(new Ql(this.ea())))};g.ea=function(){return this.W};g.Qc=function(){var a=k.navigator;this.oa(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};g.qc=function(a){this.G.push(a);Hh(this.b,firebase.SDK_VERSION?re(firebase.SDK_VERSION,this.G):null);this.dispatchEvent(new Sl(this.G))};
	g.xa=function(){return Ja(this.G)};function Pl(a){Object.defineProperty(a,"lc",{get:function(){return this.ea()},set:function(a){this.oa(a)},enumerable:!1});a.W=null}g.toJSON=function(){return{apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).D()}};function Tl(a){return a.Ob||B(new K("auth-domain-config-required"))}
	function Ol(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&ue()&&(a.Ob=a.V.then(function(){if(!a.l){a.a=tk(b,c,S(a).name);a.a.subscribe(a);U(a)&&al(U(a));if(a.C){al(a.C);var d=a.C;d.oa(a.ea());Uk(d,a);d=a.C;Tk(d,a.G);Vk(d,a);a.C=null}return a.a}}))}g.sb=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.g==b&&!!this.f;default:return!1}};
	g.ha=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};g.wa=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?r(this.Xb,this):null};
	g.Xb=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.c&&(this.c.cancel(),this.c=null);var d=null,e=null,f=Lf(c.b,a).then(function(a){d=lg(a);e=yf(a);return a});a=c.V.then(function(){return f}).then(function(a){return Ul(c,a)}).then(function(){return Le({user:U(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return T(this,a)};
	g.Hc=function(a){if(!ue())return B(new K("operation-not-supported-in-this-environment"));var b=this,c=xf(a.providerId),d=te(),e=null;(!we()||le())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=Ri(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=de(e,c&&c.Ba,c&&c.Aa);c=Tl(this).then(function(b){return rk(b,f,"signInViaPopup",a,d,!!e)}).then(function(){return new y(function(a,c){b.ha("signInViaPopup",null,new K("cancelled-popup-request"),
	b.g);b.f=a;b.v=c;b.g=d;b.c=b.a.Ea(b,"signInViaPopup",f,d)})}).then(function(a){f&&ce(f);return a?Le(a):null}).s(function(a){f&&ce(f);throw a;});return T(this,c)};g.Ic=function(a){if(!ue())return B(new K("operation-not-supported-in-this-environment"));var b=this,c=Tl(this).then(function(){return Gl(b.h)}).then(function(){return b.a.Ca("signInViaRedirect",a)});return T(this,c)};
	g.fa=function(){if(!ue())return B(new K("operation-not-supported-in-this-environment"));var a=this,b=Tl(this).then(function(){return a.a.fa()}).then(function(a){return a?Le(a):null});return T(this,b)};
	g.Oc=function(a){if(!a)return B(new K("null-user"));var b=this,c={};c.apiKey=S(this).options.apiKey;c.authDomain=S(this).options.authDomain;c.appName=S(this).name;var d=xl(a,c,b.w,b.xa());return T(this,this.i.then(function(){if(S(b).options.apiKey!=a.l)return d.reload()}).then(function(){if(U(b)&&a.uid==U(b).uid)return hl(U(b),a),b.Z(a);Ll(b,d);al(d);return b.Z(d)}).then(function(){Vl(b)}))};
	function Ul(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;return a.V.then(function(){return wl(c,b,a.w,a.xa())}).then(function(b){if(U(a)&&b.uid==U(a).uid)return hl(U(a),b),a.Z(b);Ll(a,b);al(b);return a.Z(b)}).then(function(){Vl(a)})}
	function Ll(a,b){U(a)&&(Zk(U(a),a.Ha),D(U(a),"tokenChanged",a.qa),D(U(a),"userDeleted",a.ra),D(U(a),"userInvalidated",a.sa),Yk(U(a)));b&&(b.N.push(a.Ha),rc(b,"tokenChanged",a.qa),rc(b,"userDeleted",a.ra),rc(b,"userInvalidated",a.sa),0<a.u&&Xk(b));I(a,"currentUser",b);b&&(b.oa(a.ea()),Uk(b,a),Tk(b,a.G),Vk(b,a))}g.kb=function(){var a=this,b=this.i.then(function(){if(!U(a))return A();Ll(a,null);return Il(a.h).then(function(){Vl(a)})});return T(this,b)};
	function Wl(a){var b=zl(a.w,S(a).options.authDomain).then(function(b){if(a.C=b)b.ba=a.w;return tl(a.w)});return T(a,b)}function Ml(a){var b=S(a).options.authDomain,c=Wl(a).then(function(){return Jl(a.h,b)}).then(function(b){return b?(b.ba=a.w,a.C&&(a.C.aa||null)==(b.aa||null)?b:b.reload().then(function(){return Hl(a.h,b).then(function(){return b})}).s(function(c){return"auth/network-request-failed"==c.code?b:Il(a.h)})):null}).then(function(b){Ll(a,b||null)});return T(a,c)}
	function Nl(a){return a.V.then(function(){return a.fa()}).s(function(){}).then(function(){if(!a.l)return a.ka()}).s(function(){}).then(function(){if(!a.l){a.X=!0;var b=a.h;b.b.addListener(Cl("local"),b.a,a.ka)}})}
	g.Jc=function(){var a=this;return Jl(this.h,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return hl(U(a),b),U(a).F();if(U(a)||b)Ll(a,b),b&&(al(b),b.ba=a.w),a.a&&a.a.subscribe(a),Vl(a)}})};g.Z=function(a){return Hl(this.h,a)};g.Yb=function(){Vl(this);this.Z(U(this))};g.gc=function(){this.kb()};g.hc=function(){this.kb()};
	function Xl(a,b){var c=null,d=null;return T(a,b.then(function(b){c=lg(b);d=yf(b);return Ul(a,b)}).then(function(){return Le({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}g.ic=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};g.jc=function(a){var b=this;Yl(this,function(){a.next(U(b))})};g.sc=function(a,b,c){var d=this;this.X&&firebase.Promise.resolve().then(function(){n(a)?a(U(d)):n(a.next)&&a.next(U(d))});return this.Pb(a,b,c)};
	g.rc=function(a,b,c){var d=this;this.X&&firebase.Promise.resolve().then(function(){d.O=d.getUid();n(a)?a(U(d)):n(a.next)&&a.next(U(d))});return this.Qb(a,b,c)};g.$b=function(a){var b=this,c=this.i.then(function(){return U(b)?U(b).F(a).then(function(a){return{accessToken:a}}):null});return T(this,c)};g.Jb=function(a){var b=this;return this.i.then(function(){return Xl(b,O(b.b,vi,{token:a}))}).then(function(a){var c=a.user;gl(c,"isAnonymous",!1);b.Z(c);return a})};
	g.Bc=function(a){Ie("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCustomToken is deprecated. Please use firebase.auth.Auth.prototype.signInWithCustomToken instead.");return this.Jb(a)};g.Cc=function(a,b){Ie("firebase.auth.Auth.prototype.signInAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.signInWithEmailAndPassword instead.");return this.Kb(a,b)};g.Kb=function(a,b){var c=this;return this.i.then(function(){return Xl(c,O(c.b,$f,{email:a,password:b}))})};
	g.ub=function(a,b){var c=this;return this.i.then(function(){return Xl(c,O(c.b,ri,{email:a,password:b}))})};g.Sb=function(a,b){Ie("firebase.auth.Auth.prototype.createUserAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.createUserWithEmailAndPassword instead.");return this.ub(a,b)};g.Ec=function(a){Ie("firebase.auth.Auth.prototype.signInWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential instead.");return this.Oa(a).then(function(a){return a.user})};
	g.Oa=function(a){var b=this;return this.i.then(function(){return Xl(b,a.ya(b.b))})};g.Pa=function(){var a=this;return this.i.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=Le({providerId:null,isNewUser:!1});return Le({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return Xl(a,a.b.Pa()).then(function(b){var c=b.user;gl(c,"isAnonymous",!0);a.Z(c);return b})})};
	g.Dc=function(){Ie("firebase.auth.Auth.prototype.signInAnonymouslyAndRetrieveData is deprecated. Please use firebase.auth.Auth.prototype.signInAnonymously instead.");return this.Pa()};function S(a){return a.app}function U(a){return a.currentUser}g.getUid=function(){return U(this)&&U(this).uid||null};function Zl(a){return U(a)&&U(a)._lat||null}
	function Vl(a){if(a.X){for(var b=0;b<a.o.length;b++)if(a.o[b])a.o[b](Zl(a));if(a.O!==a.getUid()&&a.I.length)for(a.O=a.getUid(),b=0;b<a.I.length;b++)if(a.I[b])a.I[b](Zl(a))}}g.Rb=function(a){this.addAuthTokenListener(a);this.u++;0<this.u&&U(this)&&Xk(U(this))};g.zc=function(a){var b=this;v(this.o,function(c){c==a&&b.u--});0>this.u&&(this.u=0);0==this.u&&U(this)&&Yk(U(this));this.removeAuthTokenListener(a)};
	g.addAuthTokenListener=function(a){var b=this;this.o.push(a);T(this,this.i.then(function(){b.l||Fa(b.o,a)&&a(Zl(b))}))};g.removeAuthTokenListener=function(a){Ha(this.o,function(b){return b==a})};function Yl(a,b){a.I.push(b);T(a,a.i.then(function(){!a.l&&Fa(a.I,b)&&a.O!==a.getUid()&&(a.O=a.getUid(),b(Zl(a)))}))}
	g.delete=function(){this.l=!0;for(var a=0;a<this.N.length;a++)this.N[a].cancel("app-deleted");this.N=[];this.h&&(a=this.h,a.b.removeListener(Cl("local"),a.a,this.ka));this.a&&this.a.unsubscribe(this);return firebase.Promise.resolve()};function T(a,b){a.N.push(b);b.ia(function(){Ga(a.N,b)});return b}g.Vb=function(a){Ie("firebase.auth.Auth.prototype.fetchProvidersForEmail is deprecated. Please use firebase.auth.Auth.prototype.fetchSignInMethodsForEmail instead.");return T(this,Rh(this.b,a))};
	g.Wb=function(a){return T(this,Th(this.b,a))};g.kc=function(a){return!!dg(a)};g.ib=function(a,b){var c=this;return T(this,A().then(function(){var a=new af(b);if(!a.c)throw new K("argument-error",jf+" must be true when sending sign in link to email");return kf(a)}).then(function(b){return c.b.ib(a,b)}).then(function(){}))};g.Rc=function(a){return this.Ja(a).then(function(a){return a.data.email})};g.Xa=function(a,b){return T(this,this.b.Xa(a,b).then(function(){}))};g.Ja=function(a){return T(this,this.b.Ja(a).then(function(a){return new Pe(a)}))};
	g.Va=function(a){return T(this,this.b.Va(a).then(function(){}))};g.hb=function(a,b){var c=this;return T(this,A().then(function(){return"undefined"===typeof b||Za(b)?{}:kf(new af(b))}).then(function(b){return c.b.hb(a,b)}).then(function(){}))};g.Gc=function(a,b){return T(this,Ck(this,a,b,r(this.Oa,this)))};g.Fc=function(a,b){var c=this;return T(this,A().then(function(){var d=cg(a,b||Wd());return c.Oa(d)}))};function $l(){}$l.prototype.render=function(){};$l.prototype.reset=function(){};$l.prototype.getResponse=function(){};$l.prototype.execute=function(){};function am(){this.a={};this.b=1E12}var bm=null;am.prototype.render=function(a,b){this.a[this.b.toString()]=new cm(a,b);return this.b++};am.prototype.reset=function(a){var b=dm(this,a);a=em(a);b&&a&&(b.delete(),delete this.a[a])};am.prototype.getResponse=function(a){return(a=dm(this,a))?a.getResponse():null};am.prototype.execute=function(a){(a=dm(this,a))&&a.execute()};function dm(a,b){return(b=em(b))?a.a[b]||null:null}function em(a){return(a="undefined"===typeof a?1E12:a)?a.toString():null}
	function cm(a,b){this.g=!1;this.c=b;this.a=this.b=null;this.h="invisible"!==this.c.size;this.f=Jd(a);var c=this;this.i=function(){c.execute()};this.h?this.execute():rc(this.f,"click",this.i)}cm.prototype.getResponse=function(){fm(this);return this.b};
	cm.prototype.execute=function(){fm(this);var a=this;this.a||(this.a=setTimeout(function(){a.b=pe();var b=a.c.callback,c=a.c["expired-callback"];if(b)try{b(a.b)}catch(d){}a.a=setTimeout(function(){a.a=null;a.b=null;if(c)try{c()}catch(d){}a.h&&a.execute()},6E4)},500))};cm.prototype.delete=function(){fm(this);this.g=!0;clearTimeout(this.a);this.a=null;D(this.f,"click",this.i)};function fm(a){if(a.g)throw Error("reCAPTCHA mock was already deleted!");};function gm(){}gm.prototype.g=function(){bm||(bm=new am);return A(bm)};gm.prototype.c=function(){};var hm=null;function im(){this.b=k.grecaptcha?Infinity:0;this.f=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString()}var jm=rd("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),km=new Ce(3E4,6E4);
	im.prototype.g=function(a){var b=this;return new y(function(c,d){var e=setTimeout(function(){d(new K("network-request-failed"))},km.get());if(!k.grecaptcha||a!==b.f&&!b.b){k[b.a]=function(){if(k.grecaptcha){b.f=a;var f=k.grecaptcha.render;k.grecaptcha.render=function(a,c){a=f(a,c);b.b++;return a};clearTimeout(e);c(k.grecaptcha)}else clearTimeout(e),d(new K("internal-error"));delete k[b.a]};var f=vd(jm,{onload:b.a,hl:a||""});A(sh(f)).s(function(){clearTimeout(e);d(new K("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else clearTimeout(e),
	c(k.grecaptcha)})};im.prototype.c=function(){this.b--};var lm=null;function mm(a,b,c,d,e,f,h){I(this,"type","recaptcha");this.c=this.f=null;this.C=!1;this.l=b;this.g=null;h?(hm||(hm=new gm),h=hm):(lm||(lm=new im),h=lm);this.o=h;this.a=c||{theme:"light",type:"image"};this.h=[];if(this.a[nm])throw new K("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.i="invisible"===this.a[om];if(!k.document)throw new K("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
	if(!Jd(b)||!this.i&&Jd(b).hasChildNodes())throw new K("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.u=new Ah(a,f||null,e||null);this.v=d||function(){return null};var m=this;this.m=[];var p=this.a[pm];this.a[pm]=function(a){qm(m,a);if("function"===typeof p)p(a);else if("string"===typeof p){var b=H(p,k);"function"===typeof b&&b(a)}};var z=this.a[rm];this.a[rm]=function(){qm(m,null);if("function"===typeof z)z();else if("string"===typeof z){var a=
	H(z,k);"function"===typeof a&&a()}}}var pm="callback",rm="expired-callback",nm="sitekey",om="size";function qm(a,b){for(var c=0;c<a.m.length;c++)try{a.m[c](b)}catch(d){}}function sm(a,b){Ha(a.m,function(a){return a==b})}function tm(a,b){a.h.push(b);b.ia(function(){Ga(a.h,b)});return b}g=mm.prototype;
	g.za=function(){var a=this;return this.f?this.f:this.f=tm(this,A().then(function(){if(ve()&&!me())return he();throw new K("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return a.o.g(a.v())}).then(function(b){a.g=b;return O(a.u,ui,{})}).then(function(b){a.a[nm]=b.recaptchaSiteKey}).s(function(b){a.f=null;throw b;}))};
	g.render=function(){um(this);var a=this;return tm(this,this.za().then(function(){if(null===a.c){var b=a.l;if(!a.i){var c=Jd(b);b=Md("DIV");c.appendChild(b)}a.c=a.g.render(b,a.a)}return a.c}))};g.verify=function(){um(this);var a=this;return tm(this,this.render().then(function(b){return new y(function(c){var d=a.g.getResponse(b);if(d)c(d);else{var e=function(b){b&&(sm(a,e),c(b))};a.m.push(e);a.i&&a.g.execute(a.c)}})}))};g.reset=function(){um(this);null!==this.c&&this.g.reset(this.c)};
	function um(a){if(a.C)throw new K("internal-error","RecaptchaVerifier instance has been destroyed.");}g.clear=function(){um(this);this.C=!0;this.o.c();for(var a=0;a<this.h.length;a++)this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){a=Jd(this.l);for(var b;b=a.firstChild;)a.removeChild(b)}};
	function vm(a,b,c){var d=!1;try{this.b=c||firebase.app()}catch(h){throw new K("argument-error","No firebase.app.App instance is currently initialized.");}if(this.b.options&&this.b.options.apiKey)c=this.b.options.apiKey;else throw new K("invalid-api-key");var e=this,f=null;try{f=this.b.auth().xa()}catch(h){}try{d=this.b.auth().settings.appVerificationDisabledForTesting}catch(h){}f=firebase.SDK_VERSION?re(firebase.SDK_VERSION,f):null;mm.call(this,c,a,b,function(){try{var a=e.b.auth().ea()}catch(m){a=
	null}return a},f,xi(yi),d)}t(vm,mm);function wm(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,h=0;h<b.length;h++)if(b[h].optional)f=!0;else{if(f)throw new K("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].M(c[e])&&!f){b=b[e];if(0>e||e>=xm.length)throw new K("internal-error",
	"Argument validator received an unsupported number of arguments.");c=xm[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.K+".";break a}d=null}}if(d)throw new K("argument-error",a+" failed: "+d);}var xm="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return{name:a||"",K:"a valid string",optional:!!b,M:l}}function ym(a,b){return{name:a||"",K:"a boolean",optional:!!b,M:ba}}
	function W(a,b){return{name:a||"",K:"a valid object",optional:!!b,M:q}}function zm(a,b){return{name:a||"",K:"a function",optional:!!b,M:n}}function Am(a,b){return{name:a||"",K:"null",optional:!!b,M:ea}}function Bm(){return{name:"",K:"an HTML element",optional:!1,M:function(a){return!!(a&&a instanceof Element)}}}function Cm(){return{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(a){return!!(a&&a instanceof Kl)}}}
	function Dm(){return{name:"app",K:"an instance of Firebase App",optional:!0,M:function(a){return!!(a&&a instanceof firebase.app.App)}}}function Em(a){return{name:a?a+"Credential":"credential",K:a?"a valid "+a+" credential":"a valid credential",optional:!1,M:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.ya||!c)}}}
	function Fm(){return{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function Gm(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(a){return!!(a&&l(a.type)&&n(a.verify))}}}function X(a,b,c,d){return{name:c||"",K:a.K+" or "+b.K,optional:!!d,M:function(c){return a.M(c)||b.M(c)}}};function Y(a,b){for(var c in b){var d=b[c].name;a[d]=Hm(d,a[c],b[c].j)}}function Im(a,b){for(var c in b){var d=b[c].name;if(d!==c){var e=b[c].qb;Object.defineProperty(a,d,{get:function(){return this[c]},set:function(a){wm(d,[e],[a],!0);this[c]=a},enumerable:!0})}}}function Z(a,b,c,d){a[b]=Hm(b,c,d)}
	function Hm(a,b,c){function d(){var a=Array.prototype.slice.call(arguments);wm(e,c,a);return b.apply(this,a)}if(!c)return b;var e=Jm(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function Jm(a){a=a.split(".");return a[a.length-1]};Y(Kl.prototype,{Va:{name:"applyActionCode",j:[V("code")]},Ja:{name:"checkActionCode",j:[V("code")]},Xa:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},ub:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},Sb:{name:"createUserAndRetrieveDataWithEmailAndPassword",j:[V("email"),V("password")]},Vb:{name:"fetchProvidersForEmail",j:[V("email")]},Wb:{name:"fetchSignInMethodsForEmail",j:[V("email")]},fa:{name:"getRedirectResult",j:[]},kc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},
	rc:{name:"onAuthStateChanged",j:[X(W(),zm(),"nextOrObserver"),zm("opt_error",!0),zm("opt_completed",!0)]},sc:{name:"onIdTokenChanged",j:[X(W(),zm(),"nextOrObserver"),zm("opt_error",!0),zm("opt_completed",!0)]},hb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),Am(null,!0),"opt_actionCodeSettings",!0)]},ib:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},jb:{name:"setPersistence",j:[V("persistence")]},Oa:{name:"signInAndRetrieveDataWithCredential",
	j:[Em()]},Pa:{name:"signInAnonymously",j:[]},Dc:{name:"signInAnonymouslyAndRetrieveData",j:[]},Ec:{name:"signInWithCredential",j:[Em()]},Jb:{name:"signInWithCustomToken",j:[V("token")]},Bc:{name:"signInAndRetrieveDataWithCustomToken",j:[V("token")]},Kb:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Fc:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Cc:{name:"signInAndRetrieveDataWithEmailAndPassword",j:[V("email"),V("password")]},Gc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),
	Gm()]},Hc:{name:"signInWithPopup",j:[Fm()]},Ic:{name:"signInWithRedirect",j:[Fm()]},Oc:{name:"updateCurrentUser",j:[X(function(a){return{name:"user",K:"an instance of Firebase User",optional:!!a,M:function(a){return!!(a&&a instanceof Q)}}}(),Am(),"user")]},kb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,!0)]},Qc:{name:"useDeviceLanguage",j:[]},Rc:{name:"verifyPasswordResetCode",j:[V("code")]}});Im(Kl.prototype,{lc:{name:"languageCode",qb:X(V(),Am(),"languageCode")}});Kl.Persistence=rj;
	Kl.Persistence.LOCAL="local";Kl.Persistence.SESSION="session";Kl.Persistence.NONE="none";
	Y(Q.prototype,{"delete":{name:"delete",j:[]},ac:{name:"getIdTokenResult",j:[ym("opt_forceRefresh",!0)]},F:{name:"getIdToken",j:[ym("opt_forceRefresh",!0)]},ab:{name:"linkAndRetrieveDataWithCredential",j:[Em()]},mc:{name:"linkWithCredential",j:[Em()]},nc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),Gm()]},oc:{name:"linkWithPopup",j:[Fm()]},pc:{name:"linkWithRedirect",j:[Fm()]},cb:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Em()]},vc:{name:"reauthenticateWithCredential",j:[Em()]},wc:{name:"reauthenticateWithPhoneNumber",
	j:[V("phoneNumber"),Gm()]},xc:{name:"reauthenticateWithPopup",j:[Fm()]},yc:{name:"reauthenticateWithRedirect",j:[Fm()]},reload:{name:"reload",j:[]},gb:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),Am(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},Nc:{name:"unlink",j:[V("provider")]},mb:{name:"updateEmail",j:[V("email")]},nb:{name:"updatePassword",j:[V("password")]},Pc:{name:"updatePhoneNumber",j:[Em("phone")]},ob:{name:"updateProfile",j:[W("profile")]}});
	Y(am.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y($l.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(y.prototype,{ia:{name:"finally"},s:{name:"catch"},then:{name:"then"}});Im(Ak.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",qb:ym("appVerificationDisabledForTesting")}});Y(Bk.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});
	Z(N,"credential",function(a,b){return new Yf(a,b)},[V("email"),V("password")]);Y(Qf.prototype,{ta:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Qf,"credential",Rf,[X(V(),W(),"token")]);Z(N,"credentialWithLink",cg,[V("email"),V("emailLink")]);Y(Sf.prototype,{ta:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Sf,"credential",Tf,[X(V(),W(),"token")]);
	Y(Uf.prototype,{ta:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Uf,"credential",Vf,[X(V(),X(W(),Am()),"idToken"),X(V(),Am(),"accessToken",!0)]);Y(Wf.prototype,{Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Wf,"credential",Xf,[X(V(),W(),"token"),V("secret",!0)]);
	Y(M.prototype,{ta:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),Am(),"idToken",!0),X(V(),Am(),"accessToken",!0)]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(ig,"credential",kg,[V("verificationId"),V("verificationCode")]);Y(ig.prototype,{Ta:{name:"verifyPhoneNumber",j:[V("phoneNumber"),Gm()]}});Y(K.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(sg.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});
	Y(rg.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(vm.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});
	(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Kl,Error:K};Z(a,"EmailAuthProvider",N,[]);Z(a,"FacebookAuthProvider",Qf,[]);Z(a,"GithubAuthProvider",Sf,[]);Z(a,"GoogleAuthProvider",Uf,[]);Z(a,"TwitterAuthProvider",Wf,[]);Z(a,"OAuthProvider",M,[V("providerId")]);Z(a,"PhoneAuthProvider",ig,[Cm()]);Z(a,"RecaptchaVerifier",vm,[X(V(),Bm(),"recaptchaContainer"),W("recaptchaParameters",!0),Dm()]);firebase.INTERNAL.registerService("auth",function(a,
	c){a=new Kl(a);c({INTERNAL:{getUid:r(a.getUid,a),getToken:r(a.$b,a),addAuthTokenListener:r(a.Rb,a),removeAuthTokenListener:r(a.zc,a)}});return a},a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:Q})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();
	}).call(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {const baseUrl = __webpack_require__(11).baseUrl();

	const pickupHeading = organization => {
	  return $(`<h1 class="centered">${organization.name}</h1>`).prepend($(`<img class="logo" src=${organization.logo} alt="${organization.name} logo" />`));
	};

	const pickupCaption = pickup => {
	  return $('<center></center>').append($(`<p>${pickup.date}<p>`), $(`<p>accepting: ${pickup.accepted_items.join(', ')}</p>`));
	};

	const schedulePickup = id => {
	  return $('<div></div>').addClass('spaced').append($('<div></div>').append($(`<input type="checkbox" name="pickup_id" value="${id}">`), $('<label>Choose this Pickup</label>')), $(`<a href="#openRegistration" class="schedule-link">Schedule Pickup >>></a>`));
	};

	const appendPickup = pickup => {
	  $('<figure class="pickup"></figure>').append(pickupHeading(pickup.organization), pickupCaption(pickup), schedulePickup(pickup.id)).appendTo($('div.centered').last());
	};

	const appendAllPickups = pickups => {
	  $('section h1.sub-header').text('Pickups Near You');
	  $('.organization').hide();
	  pickups.forEach(appendPickup);
	};

	const getPickupsByZipcode = zipcode => {
	  fetch(`${baseUrl}/api/v1/pickups?zipcode=${zipcode}`).then(response => response.json()).then(appendAllPickups);
	};

	$('.search-form').submit(event => {
	  event.preventDefault();
	  let zipcode = $('.zipcode-search').val();
	  getPickupsByZipcode(zipcode);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.3.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2018-01-20T17:24Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};

	var isFunction = function isFunction( obj ) {

	      // Support: Chrome <=57, Firefox <=52
	      // In some browsers, typeof returns "function" for HTML <object> elements
	      // (i.e., `typeof document.createElement( "object" ) === "function"`).
	      // We don't want to classify *any* DOM node as a function.
	      return typeof obj === "function" && typeof obj.nodeType !== "number";
	  };


	var isWindow = function isWindow( obj ) {
			return obj != null && obj === obj.window;
		};




		var preservedScriptAttributes = {
			type: true,
			src: true,
			noModule: true
		};

		function DOMEval( code, doc, node ) {
			doc = doc || document;

			var i,
				script = doc.createElement( "script" );

			script.text = code;
			if ( node ) {
				for ( i in preservedScriptAttributes ) {
					if ( node[ i ] ) {
						script[ i ] = node[ i ];
					}
				}
			}
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.3.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && Array.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = toType( obj );

		if ( isFunction( obj ) || isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;



	function nodeName( elem, name ) {

	  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

	};
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Filtered directly for both simple and complex selectors
		return jQuery.filter( qualifier, elements, not );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
	        if ( nodeName( elem, "iframe" ) ) {
	            return elem.contentDocument;
	        }

	        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
	        // Treat the template element as a regular one in browsers that
	        // don't support it.
	        if ( nodeName( elem, "template" ) ) {
	            elem = elem.content || elem;
	        }

	        return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && toType( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject, noValue ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[ 3 - i ][ 3 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock,

						// progress_handlers.lock
						tuples[ 0 ][ 3 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
					!remaining );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( toType( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};


	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g;

	// Used by camelCase as callback to replace()
	function fcamelCase( all, letter ) {
		return letter.toUpperCase();
	}

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (#9572)
	function camelCase( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	}
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( camelCase );
				} else {
					key = camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted, scale,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			while ( maxIterations-- ) {

				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style( elem, prop, initialInUnit + unit );
				if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;

			}

			initialInUnit = initialInUnit * 2;
			jQuery.style( elem, prop, initialInUnit + unit );

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( toType( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || Date.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
			elem.type = elem.type.slice( 5 );
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			valueIsFunction = isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( valueIsFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( valueIsFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
				"margin-top:1px;padding:0;border:0";
			div.style.cssText =
				"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
				"margin:auto;border:1px;padding:1px;" +
				"width:60%;top:1%";
			documentElement.appendChild( container ).appendChild( div );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			div.style.position = "absolute";
			scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		function roundPixelMeasures( measure ) {
			return Math.round( parseFloat( measure ) );
		}

		var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
			reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		jQuery.extend( support, {
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function() {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function() {
				computeStyleTests();
				return scrollboxSizeVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,

			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rcustomProp = /^--/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName( name ) {
		var ret = jQuery.cssProps[ name ];
		if ( !ret ) {
			ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
		}
		return ret;
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
		var i = dimension === "width" ? 1 : 0,
			extra = 0,
			delta = 0;

		// Adjustment may not be necessary
		if ( box === ( isBorderBox ? "border" : "content" ) ) {
			return 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin
			if ( box === "margin" ) {
				delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
			}

			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if ( !isBorderBox ) {

				// Add padding
				delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// For "border" or "margin", add border
				if ( box !== "padding" ) {
					delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

				// But still keep track of it otherwise
				} else {
					extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}

			// If we get here with a border-box (content + padding + border), we're seeking "content" or
			// "padding" or "margin"
			} else {

				// For "content", subtract padding
				if ( box === "content" ) {
					delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// For "content" or "padding", subtract border
				if ( box !== "margin" ) {
					delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		// Account for positive content-box scroll gutter when requested by providing computedVal
		if ( !isBorderBox && computedVal >= 0 ) {

			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max( 0, Math.ceil(
				elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
				computedVal -
				delta -
				extra -
				0.5
			) );
		}

		return delta;
	}

	function getWidthOrHeight( elem, dimension, extra ) {

		// Start with computed style
		var styles = getStyles( elem ),
			val = curCSS( elem, dimension, styles ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
			valueIsBorderBox = isBorderBox;

		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = valueIsBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ dimension ] );

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		if ( val === "auto" ||
			!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

			val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

			// offsetWidth/offsetHeight provide border-box values
			valueIsBorderBox = true;
		}

		// Normalize "" and auto
		val = parseFloat( val ) || 0;

		// Adjust for the element's box model
		return ( val +
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles,

				// Provide the current computed size to request scroll gutter calculation (gh-3589)
				val
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name );

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}

			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, dimension ) {
		jQuery.cssHooks[ dimension ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, dimension, extra );
							} ) :
							getWidthOrHeight( elem, dimension, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = getStyles( elem ),
					isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra && boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					);

				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if ( isBorderBox && support.scrollboxSize() === styles.position ) {
					subtract -= Math.ceil(
						elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
						parseFloat( styles[ dimension ] ) -
						boxModelAdjustment( elem, dimension, "border", false, styles ) -
						0.5
					);
				}

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ dimension ] = value;
					value = jQuery.css( elem, dimension );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( prefix !== "margin" ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = Date.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						result.stop.bind( result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation;
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction( easing ) && easing
		};

		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = Date.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function() {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	function classesToArray( value ) {
		if ( Array.isArray( value ) ) {
			return value;
		}
		if ( typeof value === "string" ) {
			return value.match( rnothtmlwhite ) || [];
		}
		return [];
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value,
				isValidValue = type === "string" || Array.isArray( value );

			if ( typeof stateVal === "boolean" && isValidValue ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( isValidValue ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = classesToArray( value );

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, valueIsFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			valueIsFunction = isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( valueIsFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	support.focusin = "onfocusin" in window;


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		stopPropagationCallback = function( e ) {
			e.stopPropagation();
		};

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = lastElement = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
				lastElement = cur;
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;

						if ( event.isPropagationStopped() ) {
							lastElement.addEventListener( type, stopPropagationCallback );
						}

						elem[ type ]();

						if ( event.isPropagationStopped() ) {
							lastElement.removeEventListener( type, stopPropagationCallback );
						}

						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = Date.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( Array.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && toType( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 15
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available and should be processed, append data to url
				if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var htmlIsFunction = isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.ontimeout =
										xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {

		// offset() relates an element's border box to the document origin
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var rect, win,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},

		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset, doc,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();

			} else {
				offset = this.offset();

				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while ( offsetParent &&
					( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) {

					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery( offsetParent ).offset();
					parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
					parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
				}
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {

				// Coalesce documents and windows
				var win;
				if ( isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	};

	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;

	jQuery.now = Date.now;

	jQuery.isNumeric = function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	};




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;
	} );


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {const baseUrl = __webpack_require__(11).baseUrl();

	const addToSearchField = organization => {
	  $(`<option value=${organization.id}>${organization.name}</option>`).appendTo($('select[name=organizations]'));
	};

	const buildSmallOrganization = organization => {
	  return $('<div class="organization"></div>').append($(`<img class="many-orgs-image" src=${organization.image} />`), $(`<a class="organization-link" href="organization.html?id=${organization.id}"><h1 class="sub-header">${organization.name}</h1><a>`), $(`<p class="normal">${organization.description}</p>`));
	};

	const appendSmallOrganization = organization => {
	  addToSearchField(organization);
	  buildSmallOrganization(organization).appendTo('div.centered');
	};

	const getAllOrganizations = () => {
	  fetch(`${baseUrl}/api/v1/organizations`).then(response => response.json()).then(organizations => {
	    $('form select[name="organizations"]').attr('size', organizations.count);
	    organizations.forEach(appendSmallOrganization);
	  });
	};

	const appendLargeOrganization = organization => {
	  $('.large-header').text(organization.name);
	  $('.single-org-image').attr('src', organization.image);
	  $('.website-link').text(organization.website).attr('href', organization.website);
	  organization.accepted_items.forEach(item => {
	    $('.small-list').append($(`<li>${item}</li>`));
	  });
	  $('.organization-description').text(organization.description);
	};

	const appendListedElements = (elements, container) => {
	  let list = elements.join(', ');
	  if (list) {
	    container.append(list);
	  } else {
	    container.hide();
	  }
	};

	const appendOrganizationPickup = (pickup, index, pickups) => {
	  $('center').last().text(pickup.date);
	  let zipcodes = pickup.zipcodes.map(zipcode => zipcode.zipcode);
	  appendListedElements(pickup.accepted_items, $('p:nth-last-of-type(2)'));
	  appendListedElements(zipcodes, $('p').last());
	  $('input[type=checked]').last().val(pickup.id);
	  if (index < pickups.length - 1) {
	    $('.pickup').last().clone().appendTo('.pickup-container');
	  }
	};

	const currentOrgId = () => {
	  if (window.location.pathname == '/organization.html') {
	    return window.location.search.slice(4);
	  } else if (window.location.pathname == "/organization-dashboard.html") {
	    return window.localStorage.getItem('current_org');
	  }
	};

	const getSingleOrganization = () => {
	  $('#pickup-form').hide();
	  let id = window.location.search.slice(4);
	  fetch(`${baseUrl}/api/v1/organizations/${id}`).then(response => response.json()).then(organization => {
	    appendLargeOrganization(organization);
	    organization.pickups.forEach(appendOrganizationPickup);
	  });
	};

	const getListOfOrgs = () => {
	  fetch(`${baseUrl}/api/v1/organizations`).then(response => response.json()).then(organizations => {
	    $('form select[name="organizations"]').attr('size', organizations.count);
	    organizations.forEach(addToSearchField);
	  });
	};

	$('#orgLogin').submit(event => {
	  event.preventDefault();
	  let id = document.querySelector('[name=organizations]')[0].value;
	  $('#join-link').text('dashboard');
	  $('#join-link').attr('href', `organization-dashboard.html?id=${id}`);
	  $('#nav-login').text('logout');
	  window.location.replace(`/organization-dashboard.html?id=${id}`);
	  window.location.hash = '#close';
	});

	$('#new-pickup').click(() => {
	  $('#pickup-form').addClass('pickup').show();
	});

	$('#add-zippy').click(() => {
	  let zip = $('input[name=zipcodes]').val();
	  $('<p></p>').append(zip).appendTo('#zip-list');
	});

	$('#pickup-form').submit(event => {
	  event.preventDefault();
	  let zips = [];
	  let zipcodes = document.getElementById('zip-list').children;
	  for (i = 0; i < zipcodes.length; i++) {
	    zips.push(zipcodes[i].innerText);
	  }
	  let items = [];
	  let options = document.querySelector('[name=items]').children;
	  for (i = 0; i < options.length; i++) {
	    if (options[i].selected) {
	      items.push(options[i].innerText);
	    }
	  }
	  let date = $('input[name=date]').val();
	  let body = { date: date, zipcodes: zips, accepted_items: items };
	  fetch(`${baseUrl}/api/v1/organizations/1/pickups`, {
	    method: 'POST',
	    body: JSON.stringify(body),
	    headers: { 'Content-Type': 'application/json' },
	    mode: 'cors'
	  }).then(response => response.json()).then(pickup => {
	    $('center').last().text(pickup.date);
	    let zipcodes = pickup.zipcodes.map(zipcode => zipcode.zipcode);
	    $('.pickup').last().clone().appendTo('.pickup-container');
	    appendListedElements(pickup.accepted_items, $('p:nth-last-of-type(2)'));
	    appendListedElements(zipcodes, $('p').last());
	    $('input[type=checked]').last().val(pickup.id);
	    $('#pickup-form').hide();
	  });
	});

	const windowOptions = {
	  "index.html": getAllOrganizations,
	  "organizations.html": getAllOrganizations,
	  "organization.html": getSingleOrganization,
	  "organization-dashboard.html": getSingleOrganization
	};

	const hashOptions = {
	  "#openRegistration": $('.donor-registration-message').hide()
	};

	const currentPage = () => {
	  return window.location.pathname.split('/').pop();
	};

	$(document).ready(() => {
	  setTimeout(() => {
	    $('div.modalDialog').removeClass('no-transition');
	  });
	});

	window.onload = windowOptions[currentPage()] || getListOfOrgs;
	window.onhashchange = hashOptions[window.location.hash];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {$('.register-organization').submit(event => {
	  event.preventDefault();
	  let organization = new Organization();
	  let options = new Options(organization);
	  postOrganization(options);
	});

	function Organization() {
	  this.name = $('input[name=name]').val(), this.description = $('textarea').val(), this.website = $('input[name=website]').val(), this.contact_person = new ContactPerson();
	}

	function ContactPerson() {
	  this.first_name = $('input[name=first_name]').val(), this.last_name = $('input[name=last_name]').val(), this.email = $('input[name=email]').val(), this.phone = $('input[name=phone]').val();
	}

	function Options(organization) {
	  this.method = 'POST', this.body = JSON.stringify(organization);
	  this.headers = { 'Content-Type': 'application/json' }, this.mode = 'cors';
	}

	function postOrganization(options) {
	  fetch('http://localhost:3000/api/v1/organizations', options).then(response => appendMessage(response)).catch(error => console.error({ error }));
	}

	function appendMessage(response) {
	  if (response.status === 204) {
	    successMessage();
	  } else {
	    response.json().then(response => getErrors(response));
	  }
	}

	function successMessage() {
	  $('.register-organization').fadeOut(600);
	  $('.message').fadeIn(600);
	}

	function getErrors(response) {
	  response.errors.forEach(error => {
	    let input = $(`input[name="${error.path}"]`).addClass('red-border');
	    $(`<p class="error">${error.message}</p>`).insertBefore(input);
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {const baseUrl = __webpack_require__(11).baseUrl();

	function DonorPickup() {
	  this.street_address = $('input[name=street_address]').val(), this.city = $('input[name=city]').val(), this.state = $('select[name=state]').val(), this.zipcode = $('input[name=zipcode]').val(), this.phone = $('input[name=phone]').val(), this.email = $('input[name=email]').val();
	}

	const successMessage = donor => {
	  $('.register-donor-pickup > input').hide();
	  $('.register-donor-pickup > select').hide();
	  $('.register-donor-pickup > label').hide();
	  $('.donor-registration-message').show();
	  $('.donor-registration-message').addClass('unframed');
	  $('.donor-registration-message').append($(`<p>Pickup donation with ${donor.pickup.organization.name} on ${donor.pickup.date}</p>`), $(`<p>${donor.street_address}<br>${donor.city}, ${donor.state} ${donor.zipcode}</p>`), $(`<input type="checkbox" name="phone-reminder"><label>Remind me via phone ${donor.phone}<label><br>`), $(`<input type="checkbox" name="email-reminder"><label>Remind me via email ${donor.email}</label><br>`), $('<br><a href="#close" class="done-button">Finish</a>'));
	};

	const errorMessage = errors => {
	  errors.forEach(error => {
	    let input = $(`input[name=${error.path}]`) || $(`select[name=${error.path}]`);
	    input.addClass('red-border');
	    $(`<p class="error">${error.message}</p>`).insertBefore(input);
	  });
	};

	const appendMessage = response => {
	  if (response.errors) {
	    errorMessage(response.errors);
	  } else {
	    successMessage(response);
	  }
	};
	const postDonorPickup = pickup_id => {
	  fetch(`${baseUrl}/api/v1/pickups/${pickup_id}/donors`, {
	    method: 'POST',
	    body: JSON.stringify(new DonorPickup()),
	    headers: { 'Content-Type': 'application/json' },
	    mode: 'cors'
	  }).then(response => response.json()).then(appendMessage).catch(error => console.error({ error }));
	};

	$('.register-donor-pickup').submit(event => {
	  event.preventDefault();
	  let pickup_id = $('input:checked').val();
	  postDonorPickup(pickup_id);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ })
/******/ ]);