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

/***/ "./node_modules/css-loader/index.js!./src/css/hugo.css":
/*!****************************************************!*\
  !*** ./node_modules/css-loader!./src/css/hugo.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font-bold {\n    font-weight: bold;\n}\n\n.font-italic {\n    font-style: italic;\n}\n\n.font-underline {\n    text-decoration: underline;\n}\n\n.font-proportional {\n    font-family: serif;\n    font-size: 17px;\n}\n\n.font-fixed-width {\n    font-family: monospace;\n    font-size: 15px;\n    padding: 2px 0;\n}\n\n.textcolor-0 {               /* black */\n    color: #000;\n}\n\n.textcolor-1 {               /* blue */\n    color: #00a;\n}\n\n.textcolor-2 {               /* green */\n    color: #0a0;\n}\n\n.textcolor-3 {               /* cyan */\n    color: #0aa;\n}\n\n.textcolor-4 {               /* red */\n    color: #a00;\n}\n\n.textcolor-5 {               /* magenta */\n    color: #a0a;\n}\n\n.textcolor-6 {               /* brown */\n    color: #a50;\n}\n\n.textcolor-7 {               /* white */\n    color: #aaa;\n}\n\n.textcolor-8 {               /* dark gray */\n    color: #555;\n}\n\n.textcolor-9 {               /* light blue */\n    color: #55f;\n}\n\n.textcolor-10 {              /* light green */\n    color: #5f5;\n}\n\n.textcolor-11 {              /* light cyan */\n    color: #5ff;\n}\n\n.textcolor-12 {              /* light red */\n    color: #f55;\n}\n\n.textcolor-13 {              /* light magenta */\n    color: #f5f;\n}\n\n.textcolor-14 {              /* yellow */\n    color: #ff5;\n}\n\n.textcolor-15 {              /* bright white */\n    color: #fff;\n}\n\n\n\n.bgcolor-0 {                 /* black */\n    background-color: #000;\n}\n\n.bgcolor-1 {                 /* blue */\n    background-color: #00a;\n}\n\n.bgcolor-2 {                 /* green */\n    background-color: #0a0;\n}\n\n.bgcolor-3 {                 /* cyan */\n    background-color: #0aa;\n}\n\n.bgcolor-4 {                 /* red */\n    background-color: #a00;\n}\n\n.bgcolor-5 {                 /* magenta */\n    background-color: #a0a;\n}\n\n.bgcolor-6 {                 /* brown */\n    background-color: #a50;\n}\n\n.bgcolor-7 {                 /* white */\n    background-color: #aaa;\n}\n\n.bgcolor-8 {                 /* dark gray */\n    background-color: #555;\n}\n\n.bgcolor-9 {                 /* light blue */\n    background-color: #55f;\n}\n\n.bgcolor-10 {                /* light green */\n    background-color: #5f5;\n}\n\n.bgcolor-11 {                /* light cyan */\n    background-color: #5ff;\n}\n\n.bgcolor-12 {                /* light red */\n    background-color: #f55;\n}\n\n.bgcolor-13 {                /* light magenta */\n    background-color: #f5f;\n}\n\n.bgcolor-14 {                /* yellow */\n    background-color: #ff5;\n}\n\n.bgcolor-15 {                /* bright white */\n    background-color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/css/ui.css":
/*!**************************************************!*\
  !*** ./node_modules/css-loader!./src/css/ui.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    overflow-y: scroll;\n}\n\nbody,\ninput,\n#loader {\n    color: #aaa;\n    background-color: #000;\n    font-family: monospace;\n}\n\nbody,\ninput {\n    font-size: 17px;\n}\n\n#lineinput {\n    display: inline-block;\n}\n\n#output {\n    max-width: 751px;\n    padding: 0 15px 10px 15px;\n    margin: 0 auto;\n}\n\n#output span {\n    white-space: pre-wrap;\n}\n\n#lineinput {\n    display: inline-block;\n    width: 500px;\n}\n\n#lineinput-field {\n    border: 0;\n    display: inline;\n    outline: 0;\n    padding: 0;\n    width: 100%;\n}\n\n.havenwindow {\n    position: fixed;\n    overflow: hidden;\n}\n\n.safarifix .havenwindow {\n    position: absolute;\n}\n\n#loader {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n}\n\n#loader-message {\n    margin-top: 100px;\n    text-align: center;\n}\n\n#loader.stopped #loader-message {\n    text-decoration: line-through;\n}\n\n#spinner {\n    position: fixed;\n    padding-top: 90px;\n    font-family: serif;\n    color: #555;\n    background-color: #000;\n    opacity: 0.7;\n    top: 0;\n    left: 5%;\n    width: 100%;\n    height: 100%;\n    line-height: 100%;\n    font-size: 50px;\n    animation: slide 5s ease-in-out forwards;\n    animation-iteration-count: infinite;\n}\n\n@keyframes slide {\n    50% { left: 90%; }\n    100% { left: 5%; }\n}\n\n#fatal-error {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding: 1em;\n    color: #fff;\n    background-color: #600;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/custom-event-polyfill/custom-event-polyfill.js":
/*!*********************************************************************!*\
  !*** ./node_modules/custom-event-polyfill/custom-event-polyfill.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

try {
    var ce = new window.CustomEvent('test');
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
        // IE has problems with .preventDefault() on custom events
        // http://stackoverflow.com/questions/23349191
        throw new Error('Could not prevent default');
    }
} catch(e) {
  var CustomEvent = function(event, params) {
    var evt, origPrevent;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };

    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    origPrevent = evt.preventDefault;
    evt.preventDefault = function () {
      origPrevent.call(this);
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () {
            return true;
          }
        });
      } catch(e) {
        this.defaultPrevented = true;
      }
    };
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent; // expose definition to window
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/css/hugo.css":
/*!**************************!*\
  !*** ./src/css/hugo.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./hugo.css */ "./node_modules/css-loader/index.js!./src/css/hugo.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/ui.css":
/*!************************!*\
  !*** ./src/css/ui.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./ui.css */ "./node_modules/css-loader/index.js!./src/css/ui.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/haven/assets.js":
/*!*****************************!*\
  !*** ./src/haven/assets.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCallback = addCallback;
exports.expect = expect;
exports.finalCallback = finalCallback;
exports.finished = finished;
// assets that need to load before we can start
var expectedAssets = ['engine', 'storyfile']; // functions that are called when all assets have loaded

var callbacks = []; // the callback that's called the very last

var lastCallback;
/**
 * When all assets are ready, run the callbacks.
 */

function done() {
  var i = 0;

  var metaCallback = function metaCallback() {
    i++;

    if (i < callbacks.length) {
      callbacks[i](metaCallback);
    } else if (lastCallback) {
      lastCallback();
    }
  };

  if (callbacks.length === 0) {
    return;
  }

  callbacks[0](metaCallback);
}
/**
 * Adds a callback that's run when all assets are ready.
 * If all assets have already loaded, call the callback immediately.
 *
 * The first parameter of the callback function must be a function that
 * itself calls as a callback when it has finished.
 *
 * @param cb
 */


function addCallback(cb) {
  if (expectedAssets.length === 0) {
    // make the function consistently asynchronous
    setTimeout(cb, 0);
  }

  callbacks.push(cb);
}

;
/**
 * Add an expected asset to the list.
 *
 * @param {function} asset
 */

function expect(asset) {
  if (expectedAssets.length === 0) {
    console.warn('An expected asset "' + asset + '" was added ' + 'but all previous assets have already finished loading');
    return;
  }

  expectedAssets.push(asset);
}

;
/**
 * As a bit of a hack this ensures the game starting callback is always
 * the last one.
 *
 * @param cb
 */

function finalCallback(cb) {
  lastCallback = cb;
}

;
/**
 * When an asset has finished loading, this method should be called.
 *
 * @param asset The name of the asset that's ready
 * @returns {boolean} true if asset was expected
 */

function finished(asset) {
  var index = expectedAssets.indexOf(asset);

  if (index === -1) {
    return false;
  } // remove from the list of expected assets


  expectedAssets.splice(index, 1); // if everything's ready, run the callbacks

  if (expectedAssets.length === 0) {
    done();
  }

  return true;
}

;

/***/ }),

/***/ "./src/haven/bootstrap.js":
/*!********************************!*\
  !*** ./src/haven/bootstrap.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assets = __webpack_require__(/*! ./assets */ "./src/haven/assets.js");

var _error = _interopRequireDefault(__webpack_require__(/*! ./error */ "./src/haven/error.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Module = {
  arguments: [],
  preRun: [],
  postRun: [function () {
    (0, _assets.finished)('engine');
  }],
  print: function print(text) {
    // The engine should always use the custom text printing methods.
    // Anything printed to stdout is an error.
    (0, _error.default)("Unexpected engine output to stdout: " + text);
  },
  printErr: function printErr() {
    console.log(arguments);
    (0, _error.default)(Array.prototype.slice.call(arguments).join(' '));
  },
  TOTAL_MEMORY: 33554432 // Twice the default; this is enough to run any existing Glulx game.

};

/***/ }),

/***/ "./src/haven/buffer.js":
/*!*****************************!*\
  !*** ./src/haven/buffer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.append = append;
exports.flush = flush;
exports.newline = newline;

var _input = __webpack_require__(/*! ./input */ "./src/haven/input.js");

// output buffers for all windows
var outputBuffer = [""];
/**
 * Make text HTML-printable
 *
 * @param text
 * @returns {string}
 */

function encodeHtml(text) {
  var encoded = "";

  for (var i = 0; i < text.length; ++i) {
    // Extended Latin-1 characters need to be added as HTML entities
    if (text.charCodeAt(i) > 127) {
      encoded += "&#" + text.charCodeAt(i) + ";";
    } else {
      switch (text[i]) {
        case '&':
          encoded += '&amp;';
          break;

        case '<':
          encoded += '&lt;';
          break;

        case '>':
          encoded += '&gt;';
          break;

        case '\r':
          encoded += '\n';
          break;

        default:
          encoded += text[i];
          break;
      }
    }
  }

  return encoded;
}
/**
 * Add text to the text buffer
 *
 * @param text
 * @param targetWindow
 */


function append(text, targetWindow) {
  if (!outputBuffer[targetWindow]) {
    outputBuffer[targetWindow] = "";
  }

  if (text.indexOf('\n') > -1 || text.indexOf('\r') > -1) {
    var nextLBR = Math.max(text.lastIndexOf('\n'), text.lastIndexOf('\r')) + 1;
    outputBuffer[targetWindow] += encodeHtml(text.substr(0, nextLBR));
    flush(targetWindow);
    outputBuffer[targetWindow] = encodeHtml(text.substr(nextLBR));
  } else {
    outputBuffer[targetWindow] += encodeHtml(text);
  }
}
/**
 * Print out the text buffer
 *
 * @param targetWindow
 */


function flush(targetWindow) {
  if (targetWindow === undefined) {
    for (var i in outputBuffer) {
      flush(+i);
    }
  }

  if (!outputBuffer[targetWindow] || !haven.window.get(targetWindow)) {
    return;
  } //        console.log('flushing', outputBuffer[ targetWindow ] );
  // if( outputBuffer[ targetWindow ] === '\n') debugger;


  haven.window.append(outputBuffer[targetWindow], targetWindow);
  outputBuffer[targetWindow] = "";

  if (targetWindow === 0) {
    (0, _input.textWasPrinted)(true);
  }
}
/**
 * Add a newline to the buffer.
 *
 * @param targetWindow
 */


function newline(targetWindow) {
  if (outputBuffer[targetWindow]) {
    outputBuffer[targetWindow] += '\n';
  } else {
    outputBuffer[targetWindow] = '\n';
  }

  flush(targetWindow);
}

/***/ }),

/***/ "./src/haven/error.js":
/*!****************************!*\
  !*** ./src/haven/error.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = error;

/**
 * Show an error message and halt.
 */
function error(message) {
  var elem = document.createElement('div');
  var spinner = document.getElementById('spinner');
  var loader = document.getElementById('loader');
  elem.id = 'fatal-error';
  elem.innerHTML = message;
  document.body.appendChild(elem); // remove spinner animation if error happened on load

  if (spinner) {
    spinner.parentNode.removeChild(spinner);
  } // visual notification that loading has stopped


  if (loader) {
    loader.className = 'stopped';
  }

  throw new Error(message);
}

/***/ }),

/***/ "./src/haven/file.js":
/*!***************************!*\
  !*** ./src/haven/file.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.prompt = prompt;
exports.readUIState = readUIState;
exports.syncfs = syncfs;

var _assets = __webpack_require__(/*! ./assets */ "./src/haven/assets.js");

var _error = _interopRequireDefault(__webpack_require__(/*! ./error */ "./src/haven/error.js"));

var _input = __webpack_require__(/*! ./input */ "./src/haven/input.js");

var _options = __webpack_require__(/*! ./options */ "./src/haven/options.js");

var _prompt = __webpack_require__(/*! ./prompt */ "./src/haven/prompt.js");

var _state = __webpack_require__(/*! ./state */ "./src/haven/state.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/custom-event-polyfill.js");

var interpreterLoaded = false;
var isGamefileLoaded = false;
var gamefile;
var checksum;
var datadir;
var storyFilename;
/**
 * FNV32-algorithm to calculate the story file's checksum.
 * The checksum is used to name the directories for save games.
 *
 * Taken from https://codepen.io/ImagineProgramming/post/checksum-algorithms-in-javascript-checksum-js-engine
 */

function fnv32(a) {
  var len = a.length;
  var fnv = 0;

  for (var i = 0; i < len; i++) {
    fnv = fnv + ((fnv << 1) + (fnv << 4) + (fnv << 7) + (fnv << 8) + (fnv << 24) >>> 0) ^ a[i] & 0xff;
  }

  return fnv >>> 0;
}
/**
 * Writes the loaded game file into the virtual file system, but only
 * if both the interpreter and the game file are both loaded.
 *
 * @return {boolean} true when all required assets have finished loading
 */


function writeGamefile(done) {
  // re-show loader if hidden
  document.getElementById('loader').style.display = "block";

  if (!interpreterLoaded || !isGamefileLoaded) {
    if (!interpreterLoaded) {
      document.getElementById('loader-message').innerHTML = 'Loading interpreter';
    } else {
      document.getElementById('loader-message').innerHTML = 'Loading game file';
    }
  }

  document.getElementById('loader-message').innerHTML = 'Starting game';
  FS.writeFile(storyFilename, gamefile, {
    encoding: 'binary'
  }); // create the virtual savefile directory if it doesn't exist

  datadir = '/gamedata_' + checksum;

  if (!FS.analyzePath(datadir).exists) {
    FS.mkdir(datadir);
  }

  FS.mount(IDBFS, {
    root: '.'
  }, datadir); // create a directory for shared game data

  if (!FS.analyzePath('gamedata').exists) {
    FS.mkdir('gamedata');
  }

  FS.mount(IDBFS, {
    root: '.'
  }, 'gamedata');
  FS.chdir('gamedata'); // synchronize with local data

  FS.syncfs(true, function () {
    if ((0, _options.get)('autosave')) {
      _state.autosave.setName('/gamedata_' + checksum + '/autosave');

      _state.autosave.restore();
    } // start reacting to keypresses


    _input.keypress.init();

    done();
  });
}
/**
 * Start loading the story file.
 */


function init(virtualFilename) {
  var gameUrl = (0, _options.get)('story');
  var uploadedFile = (0, _options.get)('uploadedFile');
  var proxyOption = (0, _options.get)('use_proxy');
  var requestUrl;
  var useProxy;

  var processStoryFile = function processStoryFile(file) {
    isGamefileLoaded = true;
    gamefile = new Uint8Array(file);
    checksum = fnv32(gamefile).toString(16); // signal that the story file is ready

    (0, _assets.finished)('storyfile');
  };

  storyFilename = virtualFilename; // if the user has uploaded a file, process that instead of loading from a URL

  if (uploadedFile) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var uploadContainer = document.getElementById('uploadContainer');

      if (uploadContainer) {
        uploadContainer.parentNode.removeChild(uploadContainer);
      }

      processStoryFile(e.target.result);
    };

    (0, _assets.addCallback)(writeGamefile);
    reader.readAsArrayBuffer(uploadedFile);
    return;
  } else if (!gameUrl) {
    (0, _error.default)("No story file specified");
  }

  var xmlhttp = new XMLHttpRequest();

  switch ("" + proxyOption) {
    case 'always':
    case 'true':
    case '1':
      useProxy = true;
      break;

    case 'never':
    case 'false':
    case '0':
      useProxy = false;
      break;
    //          case 'auto':

    default:
      // use proxy for CORS requests
      useProxy = /^https?:\/\//.test(gameUrl) && gameUrl.indexOf(window.location.protocol + '//' + window.location.host) !== 0; // warn about invalid option

      if (proxyOption !== 'auto') {
        console.warn('Unknown use_proxy option "' + proxyOption + '", using "auto"');
      }

      break;
  }

  if (useProxy) {
    requestUrl = (0, _options.get)('proxy_url').split('%s').join(encodeURIComponent(gameUrl));
  } else {
    requestUrl = gameUrl;
  }

  (0, _assets.addCallback)(writeGamefile);

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      switch (xmlhttp.status) {
        case 200:
          processStoryFile(xmlhttp.response);
          break;

        case 404:
          (0, _error.default)("Game file not found");
          break;

        case 415:
          if (useProxy) {
            (0, _error.default)(String.fromCharCode.apply(null, new Uint8Array(xmlhttp.response)));
          } else {
            (0, _error.default)('Unsupported Media Type error encountered when loading game file');
          }

          break;

        case 0:
          // probably cross-origin error
          (0, _error.default)("Unspecified error loading game file (possibly cross-origin restriction)");
          break;

        default:
          (0, _error.default)("Error loading game file. Server returned status code " + xmlhttp.status + " (" + xmlhttp.statusText + ")");
          break;
      }
    }
  };

  xmlhttp.open("GET", requestUrl, true);
  xmlhttp.responseType = "arraybuffer"; // this must be exactly here, otherwise IE11 breaks

  xmlhttp.send();
}

;
/**
 * Ask the user to provide a file name.
 *
 * @param why The reason why a file is being prompted.
 *            One of "for command recording", "for command playback",
 *            "to restore", "to save" or "to begin transcription (or printer name)"
 */

function prompt(why) {
  var filename = window.prompt("Enter filename " + why);
  var input = (0, _prompt.get)().getElementsByClassName("INPUT")[0];

  if (filename && /\S/.test(filename)) {
    input.value = datadir + '/' + filename.split('/').join('-');
  } else {
    input.value = "";
  } // we'll have to wait for the UI to get ready before submitting the input


  setTimeout(function () {
    _prompt.get.dispatchEvent(new Event('submit')); // ..and another timeout to sync the filesystem.
    // We should hook to the file save itself, but this should do for now,
    // especially since this exists only as a backup measure if the
    // same thing in the onbeforeunload event fails.


    setTimeout(function () {
      FS.syncfs(false, function () {});
    }, 1000);
  }, 1);
}

;
/**
 * Read the UI state from the filesystem.
 */

function readUIState() {
  try {
    var state = FS.readFile(autosaveFilename + '_haven_uidata', {
      encoding: 'utf8'
    });
    return JSON.parse(state);
  } catch (e) {
    return null;
  }
}

;
/**
 * Synchronize virtual filesystem status with IndexedDB.
 * Called by the engine.
 */

function syncfs() {
  FS.syncfs(false, function () {});
}

; // store data saved by the game file

window.onbeforeunload = function () {
  FS.syncfs(false, function () {});
};

document.getElementById('loader-message').innerHTML = 'Loading interpreter and game file';

/***/ }),

/***/ "./src/haven/haven.js":
/*!****************************!*\
  !*** ./src/haven/haven.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;

var _assets = __webpack_require__(/*! ./assets */ "./src/haven/assets.js");

var fileMethods = _interopRequireWildcard(__webpack_require__(/*! ./file */ "./src/haven/file.js"));

var inputMethods = _interopRequireWildcard(__webpack_require__(/*! ./input */ "./src/haven/input.js"));

var _loader = __webpack_require__(/*! ./loader */ "./src/haven/loader.js");

var _options = __webpack_require__(/*! ./options */ "./src/haven/options.js");

var promptMethods = _interopRequireWildcard(__webpack_require__(/*! ./prompt */ "./src/haven/prompt.js"));

var _style = __webpack_require__(/*! ./style */ "./src/haven/style.js");

var _fastclick = _interopRequireDefault(__webpack_require__(/*! ./vendor/fastclick */ "./src/haven/vendor/fastclick.js"));

var stateMethods = _interopRequireWildcard(__webpack_require__(/*! ./state */ "./src/haven/state.js"));

var windowMethods = _interopRequireWildcard(__webpack_require__(/*! ./window */ "./src/haven/window.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Starts the C engine. The engine should have replaced main() with an
 * otherwise empty function that only stores the command line arguments
 * for passing to the real main() later.
 *
 * startEngine() calls haven_start() in the C code, which should run
 * the real main() function that has been renamed to something else.
 *
 * Example:
 *
 * static char **my_argv;
 *
 * int main(int argc, char *argv[])
 * {
     *    my_argv = argv;
     *    return 0;
     * }
 *
 * int EMSCRIPTEN_KEEPALIVE haven_start()
 * {
     *    return real_main(2, my_argv);
     * }
 *
 * int real_main(int argc, char *argv[])  // renamed from main()
 */
function startEngine() {
  _haven_start();
}
/**
 * Start the game. If assets haven't loaded yet, the game starts
 * as soon as they're ready.
 */


function start(opt) {
  // load the Emterpreter engine
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'engine.bin', true);
  xhr.responseType = 'arraybuffer';

  xhr.onload = function () {
    Module.emterpreterFile = xhr.response;
    var script = document.createElement('script');
    script.src = 'engine.js';
    document.body.appendChild(script);
  };

  xhr.send(null); // read options from URL

  (0, _options.init)(opt.options); // load the story file

  (0, fileMethods.init)(opt.virtualStoryfile); // set up input handlers

  (0, _assets.addCallback)(function (cb) {
    (0, inputMethods.init)();
    cb();
  }); // set up the prompt

  (0, promptMethods.init)({
    enginePrompt: !!opt.enginePrompt,
    unicode: !!opt.unicode
  }); // initialize style options

  (0, _style.init)({
    engineColors: !!opt.engineColors,
    engineFontFamily: !!opt.engineFontFamily
  }); // remove the loader

  (0, _assets.addCallback)(function (cb) {
    (0, _loader.remove)();
    cb();
  }); // start the engine

  (0, _assets.finalCallback)(startEngine);
  /**
   * fastclick.js initializer - fixes tapping issues in mobile browsers
   */

  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
      _fastclick.default.attach(document.body);
    }, false);
  }
}

// expose methods for the C engine to use
window.haven = {
  file: fileMethods,
  input: inputMethods,
  prompt: promptMethods,
  state: stateMethods,
  window: windowMethods
};

/***/ }),

/***/ "./src/haven/input.js":
/*!****************************!*\
  !*** ./src/haven/input.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMode = getMode;
exports.init = init;
exports.setMode = setMode;
exports.textWasPrinted = textWasPrinted;
exports.getTextWasPrinted = getTextWasPrinted;
exports.keypress = void 0;

var _buffer = __webpack_require__(/*! ./buffer */ "./src/haven/buffer.js");

var _prompt = __webpack_require__(/*! ./prompt */ "./src/haven/prompt.js");

var _error = _interopRequireDefault(__webpack_require__(/*! ./error */ "./src/haven/error.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// current mode of input the game expects: buffer, getkey, getline or endgame.
// null is no input accepted (during startup)
var inputMode = null; // stores keypresses pressed when the engine isn't specifically expecting them ("buffer" inputMode)

var keypressBuffer = [];
var isTextPrinted = false;
/**
 * Returns the current input mode.
 *
 * @returns {string}
 */

function getMode() {
  return inputMode;
}

function init() {
  // listen to keypresses and mouse clicks
  document.addEventListener('keydown', keypress.send, false);
  document.addEventListener('click', keypress.send, false);
}

var keypress = {
  /**
   * Called when the game starts.
   */
  init: function init() {
    // start expecting keypresses
    if (!inputMode) {
      inputMode = 'buffer';
    }
  },

  /**
   * Check if there's a keypress waiting in the buffer.
   *
   * Called by the engine.
   *
   * @returns {boolean}
   */
  isWaiting: function isWaiting() {
    (0, _buffer.flush)();

    if (isTextPrinted) {
      (0, _prompt.scrollOrFocus)();
    }

    return keypressBuffer.length > 0;
  },
  send: function send(e) {
    var keyCode = e.keyCode;
    var doc = document.documentElement;
    var scrolltop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0); // don't react to modifier keys

    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      return;
    }

    switch (inputMode) {
      case 'buffer':
        keypressBuffer.push(keyCode);
        break;

      case 'getline':
      case null:
        // do nothing except scroll
        (0, _prompt.scrollOrFocus)(e);
        return;

      case 'getkey':
        // continue with script
        break;

      case 'endgame':
        window.location = hugojs_options.exit_url;
        return;

      default:
        (0, _error.default)('Interpreter error: unknown input mode ' + inputMode);
    }

    inputMode = 'buffer'; // let the scroll handler take this if we're not at the end of the page

    if (scrolltop + window.innerHeight < document.body.clientHeight - 40) {
      (0, _prompt.scrollOrFocus)(e);
      return;
    }

    Module.ccall('haven_getkey', 'null', ['number'], [keyCode]);
  },
  wait: function wait() {
    inputMode = 'getkey';
    (0, _buffer.flush)();
    (0, _prompt.setDoScroll)(); // if there's something in the keypress buffer, "push" that key

    if (keypressBuffer.length > 0) {
      keypress.send({
        keyCode: keypressBuffer.shift()
      });
    }
  }
};
/**
 * Set a new input mode.
 *
 * @param mode
 */

exports.keypress = keypress;

function setMode(mode) {
  inputMode = mode;
}
/**
 * Makes a note that text has been printed on the screen since last check
 *
 * @param newState
 */


function textWasPrinted() {
  var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  isTextPrinted = newState;
}

function getTextWasPrinted() {
  return textWasPrinted;
}

/***/ }),

/***/ "./src/haven/loader.js":
/*!*****************************!*\
  !*** ./src/haven/loader.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = remove;

function remove() {
  var loaderOverlay = document.getElementById('loader');

  if (loaderOverlay) {
    loaderOverlay.parentNode.removeChild(loaderOverlay);
  }
}

/***/ }),

/***/ "./src/haven/options.js":
/*!******************************!*\
  !*** ./src/haven/options.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParameter = getParameter;
exports.get = get;
exports.init = init;
exports.set = set;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var opt = {
  autosave: true,
  exit_url: '',
  extra_opcodes: true,
  proxy_url: 'proxy.php',
  use_proxy: 'auto',
  windowing: true
};
/**
 * Parse a GET parameter.
 *
 * @param name
 * @param type
 * @param defaultValue
 */

function getParameter(name, type, defaultValue) {
  var valueSearch = new RegExp('[?&]' + name + '=(.*?)(#|&|$)', 'i').exec(window.location.href),
      value;

  if (valueSearch === null || valueSearch.length < 2) {
    return defaultValue;
  }

  value = decodeURIComponent(valueSearch[1].split('+').join(' '));

  switch (type) {
    case 'boolean':
      if (value.toLowerCase() === 'true' || value === 'on' || value === '1') {
        return true;
      }

      if (value.toLowerCase() === 'false' || value === 'off' || value === '0') {
        return false;
      }

      return defaultValue;

    case 'number':
      if (parseFloat(value) + "" === value) {
        return parseFloat(value);
      }

      return NaN;

    default:
      if (value.length === 0) {
        return defaultValue;
      }

      return value;
  }
}
/**
 * Returns the value of an option.
 *
 * @param name
 * @returns {*}
 */


function get(name) {
  return opt[name];
}
/**
 * Read options from the URL
 */


function init(defaults) {
  var option_key;
  defaults = defaults || {};

  for (option_key in defaults) {
    if (defaults.hasOwnProperty(option_key) && defaults[option_key] !== undefined) {
      opt[option_key] = defaults[option_key];
    }
  }

  if (!opt.lock_story) {
    opt.story = getParameter('story', 'string', opt.story);
  }

  if (!opt.lock_options) {
    for (option_key in opt) {
      if (option_key !== 'story' && opt.hasOwnProperty(option_key)) {
        opt[option_key] = getParameter(option_key, _typeof(opt[option_key]), opt[option_key]);
      }
    } // special cases


    if (opt.exit_url === 'false' || opt.exit_url === '0') {
      opt.exit_url = false;
    }
  }
}
/**
 * Set the value of an option.
 *
 * @param name
 * @returns {*}
 */


function set(name, value) {
  opt[name] = value;
}

/***/ }),

/***/ "./src/haven/prompt.js":
/*!*****************************!*\
  !*** ./src/haven/prompt.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeInput = resizeInput;
exports.get = get;
exports.hide = hide;
exports.init = init;
exports.isReady = isReady;
exports.scrollOrFocus = scrollOrFocus;
exports.setDoScroll = setDoScroll;
exports.show = show;
exports.prefix = exports.history = void 0;

var _buffer = __webpack_require__(/*! ./buffer */ "./src/haven/buffer.js");

var _input = __webpack_require__(/*! ./input */ "./src/haven/input.js");

var _state = __webpack_require__(/*! ./state */ "./src/haven/state.js");

var _window = __webpack_require__(/*! ./window */ "./src/haven/window.js");

// command history
var cmdHistory = []; // current position in the command history. -1: new input

var currentCmdHistory = -1; // stores the currently typed command when browsing the history

var currentCmdText = ""; // should the screen scroll down? Set to false after screen clear.

var doScroll = false; // does the engine handle printing the prompt prefix?

var enginePrompt = false; // input element

var inputElem = document.getElementById('lineinput-field'); // input element's X position in relation to the window

var inputX = 0; // has text been printed on screen?

var isTextPrinted = false; // prefix, i.e. the > or whatever else is shown before the input field

var prefixElem = document.getElementById('lineinput-prefix'); // the parent prompt form element

var promptElem = document.getElementById('lineinput'); // new event type for others (mainly Vorple) who need to know when line
// input is available

var lineinputReadyEvent = new CustomEvent('lineinputReady');
/**
 * Append the line input to the transcript.
 *
 * @param caret
 * @param inputText
 * @param targetContainer
 */

function appendPrompt(caret, inputText, targetContainer) {
  var target = _window.container.get(targetContainer);

  var lastLineinput = document.createElement('div');
  var lastPrefix = document.createElement('span');
  var lastCommand = document.createElement('span'); // remove the last marker from the previously last input

  var previousLastPrompt = document.getElementsByClassName('lineinput last');

  for (var i = previousLastPrompt.length - 1; i >= 0; --i) {
    previousLastPrompt[i].classList.remove('last');
  }

  lastLineinput.className = 'lineinput last';
  lastPrefix.className = 'prompt-prefix';
  lastCommand.className = 'prompt-input';
  lastPrefix.innerHTML = caret;
  lastCommand.innerHTML = inputText;
  lastLineinput.appendChild(lastPrefix);
  lastLineinput.appendChild(lastCommand);
  target.appendChild(lastLineinput);
}
/**
 * Change the prompt input to next or previous command in the command history.
 *
 * @param delta 1 for next command, -1 for previous
 */


function getCmdFromHistory(delta) {
  var current = currentCmdHistory;
  var new_current = current + delta;

  if (current === -1) {
    currentCmdText = inputElem.value;
  } // Check it's within range


  if (new_current < cmdHistory.length && new_current >= 0) {
    inputElem.value = cmdHistory[new_current];
    currentCmdHistory = new_current;
  } else if (new_current === -1) {
    inputElem.value = currentCmdText;
    currentCmdHistory = new_current;
  }
}
/**
 * Resize the input field so that it fits on the same line as the prompt.
 */


function resizeInput() {
  inputElem.style.width = (0, _window.get)(0).clientWidth - inputX - 2 + 'px';
}
/**
 * Scroll down until text content becomes visible.
 */


function scrollToContent() {
  var output = (0, _window.get)(0);
  var statusline = (0, _window.get)(1);
  var nodes = textNodesUnder(output);
  var scrolltop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
  var nonWhitespaceRegex = /\S/;

  for (var i = 0; i < nodes.length; ++i) {
    if (nonWhitespaceRegex.test(nodes[i].textContent)) {
      var newScrollTop = nodes[i].parentNode.getBoundingClientRect().top - window.innerHeight / 3;

      if (statusline) {
        newScrollTop += statusline.getBoundingClientRect().height;
      }

      if (scrolltop < newScrollTop) {
        window.scrollTo(0, newScrollTop);
      }

      return;
    }
  }
}
/**
 * Get all text nodes contained by a DOM node
 *
 * From http://stackoverflow.com/a/10730777
 *
 * @param node
 * @returns {Array}
 */


function textNodesUnder(node) {
  var all = [];

  for (node = node.firstChild; node; node = node.nextSibling) {
    if (node.nodeType === 3) {
      all.push(node);
    } else {
      all = all.concat(textNodesUnder(node));
    }
  }

  return all;
}
/**
 * Getter for the lineinput form element.
 *
 * @returns {Element}
 */


function get() {
  return promptElem;
}
/**
 * Hide the prompt and stop expecting line input.
 */


function hide() {
  (0, _input.setMode)('buffer');

  if (promptElem.parentNode) {
    promptElem.parentNode.removeChild(promptElem);
  }
}

;
/**
 * Add, remove, and clear commands in the history.
 */

var history = {
  /**
   * Add a command to the command history.
   *
   * @param cmd
   * @returns {boolean} True if successful
   */
  add: function add(cmd) {
    if (cmd) {
      cmdHistory.push(cmd);
      return true;
    }

    return false;
  },

  /**
   * Clear the entire command history.
   */
  clear: function clear() {
    cmdHistory = [];
  },

  /**
   * Returns a copy of the entire command history.
   *
   * @returns {Array}
   */
  get: function get() {
    return cmdHistory.slice();
  },

  /**
   * Remove a single item from the command history.
   *
   * @param {number} index The index of the command to remove. If empty,
   *  the last command will be removed.
   * @returns {boolean} True if removal was successful.
   */
  remove: function remove(index) {
    if (cmdHistory.length === 0) {
      return false;
    }

    if (typeof index !== 'number') {
      cmdHistory.pop();
      return true;
    }

    if (index < 0 || index >= cmdHistory.length) {
      return false;
    }

    cmdHistory.splice(index, 1);
  },

  /**
   * Sets a completely new command history.
   *
   * @param {Array} newHistory An array of strings that becomes the new
   *  command history.
   */
  set: function set(newHistory) {
    cmdHistory = newHistory.slice();
  }
}; // Convert accented characters to plain ASCII. From http://stackoverflow.com/a/18391901

exports.history = history;
var defaultDiacriticsRemovalMap = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'OE',
  letters: "\x8C\u0152"
}, {
  base: 'oe',
  letters: "\x9C\u0153"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var diacriticsMap = {};

for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
  var letters = defaultDiacriticsRemovalMap[i].letters;

  for (var j = 0; j < letters.length; j++) {
    diacriticsMap[letters[j]] = defaultDiacriticsRemovalMap[i].base;
  }
}
/**
 * Initialize line input event handlers.
 */


function init(opt) {
  // make a note if the engine handles printing the prompt or not
  enginePrompt = !!opt.enginePrompt; // handle line input submission

  promptElem.addEventListener('submit', function (e) {
    e.preventDefault(); // Change accented characters to plain ASCII.
    // The Hugo engine doesn't receive non-ASCII characters correctly.

    if (!opt.unicode) {
      inputElem.value = inputElem.value.replace(/[^\u0000-\u007E]/g, function (a) {
        return diacriticsMap[a] || a;
      });
    } // save input to history


    if (inputElem.value !== cmdHistory[0] && /\S/.test(inputElem.value)) {
      cmdHistory.unshift(inputElem.value);
    } // reset the current spot in the command history


    currentCmdHistory = -1; // append the command to the transcript, unless the submit events tells us not to

    if (!enginePrompt && !(e.detail && e.detail.silent)) {
      appendPrompt(prefix.get(), inputElem.value, 0);
    } // pass the command to the engine


    Module.ccall('haven_getline', 'null', ['string'], [inputElem.value + '\n']); // cleanup

    inputElem.value = "";
    hide();
  }, false); // Command history. Adapted from Parchment.

  inputElem.addEventListener('keydown', function (e) {
    var keyCode = e.which || e.keyCode; // Check for up/down to use the command history

    if (keyCode === 38) // up -> prev
      {
        getCmdFromHistory(1);
        e.preventDefault();
      }

    if (keyCode === 40) // down -> next
      {
        getCmdFromHistory(-1);
        e.preventDefault();
      }
  }, false); // fix Mobile Safari bug that breaks fixed positioning when the virtual keyboard pops up

  if ('ontouchstart' in window) {
    // the focus event at the start of the game doesn't open the keyboard
    var firstFocus = true;
    inputElem.addEventListener('focus', function () {
      if (!firstFocus) {
        document.body.classList.add("safarifix");
      } else {
        firstFocus = false;
      }
    });
    inputElem.addEventListener('blur', function () {
      document.body.classList.remove("safarifix");
    });
  } // resize input field when window size changes


  window.addEventListener('resize', resizeInput, false); // remove the prompt from the DOM

  promptElem.parentNode.removeChild(promptElem);
}

;
/**
 * Returns true if the command prompt is ready for line input.
 */

function isReady() {
  return (0, _input.getMode)() === 'getline';
}

;
var prefix = {
  /**
   * Get the current prompt prefix, or empty string if the engine is
   * handling printing the prompt.
   *
   * @returns {string}
   */
  get: function get() {
    if (enginePrompt) {
      return "";
    }

    return prefixElem.innerHTML;
  },

  /**
   * Set the prefix (>) that's shown before the command input.
   * The caret is expected to be "clean" i.e. it's safe to use innerHTML
   * to place it in the element.
   *
   * @param {string} prefix
   */
  set: function set(prefix) {
    if (!enginePrompt) {
      prefixElem.innerHTML = prefix;
    }
  }
};
/**
 * Either scroll the page down one page, or if the prompt is visible,
 * set focus to the prompt.
 *
 * @param e
 */

exports.prefix = prefix;

function scrollOrFocus(e) {
  var doc = document.documentElement;
  var scrolltop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  var selection = window.getSelection || function () {
    return document.selection ? document.selection.createRange().text : '';
  };

  var playAreaHeight = window.innerHeight;

  if ((0, _window.get)(1)) {
    playAreaHeight = window.innerHeight - haven.window.get(1).getBoundingClientRect().height;
  } // let non-ASCII keycodes, navigation keys, keys pressed with ctrl/alt/cmd pass
  // so that they don't block browser shortcuts


  if (e && (e.keycode === 32 || e.keyCode > 127 || e.altKey || e.ctrlKey || e.metaKey)) {
    return;
  } // Only intercept on things that aren't inputs and if the user isn't selecting text
  // and if the prompt is available


  if (!e || e.target && e.target.nodeName !== 'INPUT' && selection().toString() === '') {
    // If the input box is close to the viewport then focus it
    if (scrolltop + window.innerHeight > document.body.clientHeight - 40) {
      if (promptElem.parentNode) {
        window.scrollTo(0, 9e9); // Manually reset the target in case focus/trigger don't - we don't want the trigger to recurse

        inputElem.focus(); // Stop propagating after re-triggering it, so that the trigger will work for all keys

        if (e && e.stopPropagation && document.activeElement !== inputElem) {
          e.stopPropagation();
        }
      }
    } else {
      // if there's no prompt, scroll down one pageful
      if (doScroll) {
        window.scrollTo(0, scrolltop + playAreaHeight - 40); // focus on the prompt if it's visible

        if (promptElem.parentNode && scrolltop + playAreaHeight + window.innerHeight - 40 >= document.body.clientHeight) {
          inputElem.focus();
        }

        if (e && e.preventDefault) {
          e.preventDefault();
        }
      } // otherwise just scroll the content into view
      else {
          scrollToContent();
        } // Intercept the backspace key


      if (e && e.type === 'keydown' && (e.which || e.keyCode) === 8) {
        return false;
      }
    }
  }

  isTextPrinted = false;
}

;
/**
 * Set the "doScroll" status which tells whether a keypress scrolls the page.
 */

function setDoScroll(status) {
  doScroll = status;
}
/**
 * Show the prompt and start expecting line input.
 */


function show() {
  (0, _input.setMode)('getline');
  (0, _buffer.flush)();
  (0, _window.get)(0).appendChild(promptElem); // calculate input's location and resize to fit

  if (enginePrompt) {
    inputX = inputElem.offsetLeft - (0, _window.get)(0).offsetLeft;
  } else {
    inputX = prefixElem.offsetWidth;
  }

  resizeInput(); // scroll page down or give the prompt focus

  scrollOrFocus();
  doScroll = true; // do autosave when line input is expected

  _state.autosave.save();

  promptElem.dispatchEvent(lineinputReadyEvent);
}

;

/***/ }),

/***/ "./src/haven/state.js":
/*!****************************!*\
  !*** ./src/haven/state.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreUI = restoreUI;
exports.autosave = void 0;

var _options = __webpack_require__(/*! ./options */ "./src/haven/options.js");

var _prompt = __webpack_require__(/*! ./prompt */ "./src/haven/prompt.js");

var _window = __webpack_require__(/*! ./window */ "./src/haven/window.js");

var _style = __webpack_require__(/*! ./style */ "./src/haven/style.js");

var autosaveFilename = "";
/**
 * Read the UI state from the filesystem.
 */

function readUIState() {
  try {
    var state = FS.readFile(autosaveFilename + '_uidata', {
      encoding: 'utf8'
    });
    return JSON.parse(state);
  } catch (e) {
    return null;
  }
}

var autosave = {
  /**
   * Delete the autosave files.
   */
  remove: function remove() {
    try {
      FS.unlink(autosaveFilename);
    } catch (e) {}

    try {
      FS.unlink(autosaveFilename + '_uidata');
    } catch (e) {}
  },

  /**
   * Pass the autosave's filename to the engine that takes care of
   * reloading the save.
   */
  restore: function restore() {
    try {
      // Try to open the autosave file.
      // If it doesn't exist, this throws an error.
      FS.stat(autosaveFilename);
      Module.ccall('hugojs_set_autosave_filename', 'null', ['string'], [autosaveFilename]);
    } catch (e) {// autosave file doesn't exist, do nothing
    }
  },
  save: function save() {
    if (!(0, _options.get)('autosave')) {
      return;
    } // trigger engine autosave


    var engineSaveSucceeded = Module.ccall('haven_save_autosave', 'int', ['string'], [autosaveFilename]); // save UI state

    if (engineSaveSucceeded) {
      FS.writeFile(autosaveFilename + '_uidata', JSON.stringify(haven.window.getUIState()), {
        encoding: 'utf8'
      });
    }
  },

  /**
   * Remember the autosave's filename
   * @param filename
   */
  setName: function setName(filename) {
    autosaveFilename = filename;
  }
};
/**
 * Restore saved UI state.
 */

exports.autosave = autosave;

function restoreUI() {
  var savedState = readUIState();
  var windowCount;

  if (!savedState) {
    return;
  } // if windowing has been set off in options, restore only the main window


  if ((0, _options.get)('windowing')) {
    windowCount = savedState.windowContents.length;
  } else {
    windowCount = 1;
  }

  (0, _window.clear)();

  for (var i = 0; i < windowCount; ++i) {
    (0, _window.create)(i, savedState.windowDimensions[i].left, savedState.windowDimensions[i].top, savedState.windowDimensions[i].right, savedState.windowDimensions[i].bottom);
  }

  _style.color.restore(savedState.currentColors);

  (0, _style.restore)(savedState.font);

  _window.position.restore(savedState.position);

  if (savedState.title) {
    document.title = savedState.title;
  }

  for (var _i = 0; _i < savedState.windowContents.length; ++_i) {
    (0, _window.get)(_i).innerHTML = savedState.windowContents[_i];
    (0, _style.apply)(haven.window.get(_i), _i);
  }

  (0, _style.apply)(document.body, 0); // TODO: only for Hugo!
  // set the same style we had when saving

  Module.ccall('hugojs_set_font', 'null', ['int'], [savedState.font[0].original]);
  Module.ccall('hugojs_set_colors', 'null', ['int', 'int'], [savedState.currentColors[0].text, savedState.currentColors[0].background]); // restore command history

  _prompt.history.set(savedState.cmdHistory || []); // scroll to the bottom


  window.scrollTo(0, 9e9);
  (0, _prompt.setDoScroll)();
}

/***/ }),

/***/ "./src/haven/style.js":
/*!****************************!*\
  !*** ./src/haven/style.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apply = apply;
exports.init = init;
exports.restore = restore;
exports.set = set;
exports.font = exports.color = void 0;

var _buffer = __webpack_require__(/*! ./buffer */ "./src/haven/buffer.js");

var _options = __webpack_require__(/*! ./options */ "./src/haven/options.js");

var _prompt = __webpack_require__(/*! ./prompt */ "./src/haven/prompt.js");

// currently set colors
var currentColors = [defaultColors(0)]; // currently set fonts

var currentFont = [defaultStyles()]; // let engine decide text and background colors?

var engineColors = true; // ignore font family settings? (proportional/fixed-width)

var ignoreFontFamily = false;
/**
 * Get the default colors of a font object
 *
 * @param targetWindow
 * @returns {{text: number, background: number}}
 */

function defaultColors(targetWindow) {
  if (targetWindow === 1) {
    // status line
    return {
      text: 15,
      background: 1
    };
  } else {
    return {
      text: 7,
      background: 0
    };
  }
}
/**
 * Default styles of the font
 */


function defaultStyles() {
  return {
    bold: false,
    italic: false,
    underline: false,
    proportional: true,
    original: 0 // the original integer value of the font

  };
}
/**
 * Set currently active font styles and colors to an element.
 *
 * @param elem
 * @param targetWindow
 */


function apply(elem, targetWindow) {
  var newClasses = [];
  var prompt = (0, _prompt.get)().getElementsByTagName('INPUT')[0];
  var setPromptStyle = targetWindow === 0;

  if (!currentColors[targetWindow]) {
    currentColors[targetWindow] = defaultColors(targetWindow);
  }

  if (engineColors) {
    newClasses.push("textcolor-" + currentColors[targetWindow].text);
    newClasses.push("bgcolor-" + currentColors[targetWindow].background);
  } // remove old class styles


  elem.className = elem.className.replace(/\b(text|bg)color-\d+/g, "");
  elem.classList.remove("font-fixed-width");

  if (setPromptStyle) {
    prompt.className = prompt.className.replace(/\b(text|bg)color-\d+/g, "");
    prompt.classList.remove("font-fixed-width");
  }

  if (!currentFont[targetWindow]) {
    currentFont[targetWindow] = defaultStyles();
  }

  for (var prop in currentFont[targetWindow]) {
    if (ignoreFontFamily && prop === 'proportional') {
      continue;
    }

    if (currentFont[targetWindow].hasOwnProperty(prop)) {
      elem.classList.remove("font-" + prop);

      if (setPromptStyle) {
        prompt.classList.remove("font-" + prop);
      }

      if (currentFont[targetWindow][prop]) {
        newClasses.push("font-" + prop);
      }
    }
  }

  if (!ignoreFontFamily && currentFont[targetWindow].hasOwnProperty('proportional') && !currentFont[targetWindow].proportional) {
    newClasses.push("font-fixed-width");
  }

  for (var i = 0; i < newClasses.length; ++i) {
    elem.classList.add(newClasses[i]);

    if (setPromptStyle) {
      prompt.classList.add(newClasses[i]);
    }
  }
}

;
var color = {
  get: function get() {
    return currentColors;
  },
  restore: function restore(oldState) {
    currentColors = oldState;
  },

  /**
   * Set colors in windows
   *
   * @param which
   * @param color
   * @param targetWindow
   */
  set: function set(which, color, targetWindow) {
    if (!currentColors[targetWindow]) {
      currentColors[targetWindow] = defaultColors(targetWindow);
    }

    if (currentColors[targetWindow][which] === color) {
      // the color doesn't change, do nothing
      return;
    }

    (0, _buffer.flush)(targetWindow);
    currentColors[targetWindow][which] = color;
  }
};
exports.color = color;
var font = {
  get: function get() {
    return currentFont;
  }
};
exports.font = font;

function init(options) {
  ignoreFontFamily = !options.engineFontFamily;
  engineColors = options.engineColors;
}
/**
 * Restore the entire style state.
 *
 * @param oldState
 */


function restore(oldState) {
  currentFont = oldState;
}
/**
 * Set a current style attribute.
 *
 * @param {string} type  bold, italic, underline, or proportional
 * @param {boolean} value
 * @param {number} targetWindow
 */


function set(type, value, targetWindow) {
  (0, _buffer.flush)(targetWindow);
  currentFont[targetWindow][type] = value;
}

/***/ }),

/***/ "./src/haven/vendor/fastclick.js":
/*!***************************************!*\
  !*** ./src/haven/vendor/fastclick.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

;

(function () {
  'use strict';
  /**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */

  /*jslint browser:true, node:true*/

  /*global define, Event, Node*/

  /**
   * Instantiate fast-clicking listeners on the specified layer.
   *
   * @constructor
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */

  function FastClick(layer, options) {
    var oldOnClick;
    options = options || {};
    /**
     * Whether a click is currently being tracked.
     *
     * @type boolean
     */

    this.trackingClick = false;
    /**
     * Timestamp for when click tracking started.
     *
     * @type number
     */

    this.trackingClickStart = 0;
    /**
     * The element being tracked for a click.
     *
     * @type EventTarget
     */

    this.targetElement = null;
    /**
     * X-coordinate of touch start event.
     *
     * @type number
     */

    this.touchStartX = 0;
    /**
     * Y-coordinate of touch start event.
     *
     * @type number
     */

    this.touchStartY = 0;
    /**
     * ID of the last touch, retrieved from Touch.identifier.
     *
     * @type number
     */

    this.lastTouchIdentifier = 0;
    /**
     * Touchmove boundary, beyond which a click will be cancelled.
     *
     * @type number
     */

    this.touchBoundary = options.touchBoundary || 10;
    /**
     * The FastClick layer.
     *
     * @type Element
     */

    this.layer = layer;
    /**
     * The minimum time between tap(touchstart and touchend) events
     *
     * @type number
     */

    this.tapDelay = options.tapDelay || 200;
    /**
     * The maximum time for a tap
     *
     * @type number
     */

    this.tapTimeout = options.tapTimeout || 700;

    if (FastClick.notNeeded(layer)) {
      return;
    } // Some old versions of Android don't have Function.prototype.bind


    function bind(method, context) {
      return function () {
        return method.apply(context, arguments);
      };
    }

    var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
    var context = this;

    for (var i = 0, l = methods.length; i < l; i++) {
      context[methods[i]] = bind(context[methods[i]], context);
    } // Set up event handlers as required


    if (deviceIsAndroid) {
      layer.addEventListener('mouseover', this.onMouse, true);
      layer.addEventListener('mousedown', this.onMouse, true);
      layer.addEventListener('mouseup', this.onMouse, true);
    }

    layer.addEventListener('click', this.onClick, true);
    layer.addEventListener('touchstart', this.onTouchStart, false);
    layer.addEventListener('touchmove', this.onTouchMove, false);
    layer.addEventListener('touchend', this.onTouchEnd, false);
    layer.addEventListener('touchcancel', this.onTouchCancel, false); // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
    // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
    // layer when they are cancelled.

    if (!Event.prototype.stopImmediatePropagation) {
      layer.removeEventListener = function (type, callback, capture) {
        var rmv = Node.prototype.removeEventListener;

        if (type === 'click') {
          rmv.call(layer, type, callback.hijacked || callback, capture);
        } else {
          rmv.call(layer, type, callback, capture);
        }
      };

      layer.addEventListener = function (type, callback, capture) {
        var adv = Node.prototype.addEventListener;

        if (type === 'click') {
          adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
            if (!event.propagationStopped) {
              callback(event);
            }
          }), capture);
        } else {
          adv.call(layer, type, callback, capture);
        }
      };
    } // If a handler is already declared in the element's onclick attribute, it will be fired before
    // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
    // adding it as listener.


    if (typeof layer.onclick === 'function') {
      // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
      // - the old one won't work if passed to addEventListener directly.
      oldOnClick = layer.onclick;
      layer.addEventListener('click', function (event) {
        oldOnClick(event);
      }, false);
      layer.onclick = null;
    }
  }
  /**
  * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
  *
  * @type boolean
  */


  var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
  /**
   * Android requires exceptions.
   *
   * @type boolean
   */

  var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
  /**
   * iOS requires exceptions.
   *
   * @type boolean
   */

  var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
  /**
   * iOS 4 requires an exception for select elements.
   *
   * @type boolean
   */

  var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
  /**
   * iOS 6.0-7.* requires the target element to be manually derived
   *
   * @type boolean
   */

  var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);
  /**
   * BlackBerry requires exceptions.
   *
   * @type boolean
   */

  var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
  /**
   * Determine whether a given element requires a native click.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element needs a native click
   */

  FastClick.prototype.needsClick = function (target) {
    switch (target.nodeName.toLowerCase()) {
      // Don't send a synthetic click to disabled inputs (issue #62)
      case 'button':
      case 'select':
      case 'textarea':
        if (target.disabled) {
          return true;
        }

        break;

      case 'input':
        // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
        if (deviceIsIOS && target.type === 'file' || target.disabled) {
          return true;
        }

        break;

      case 'label':
      case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames

      case 'video':
        return true;
    }

    return /\bneedsclick\b/.test(target.className);
  };
  /**
   * Determine whether a given element requires a call to focus to simulate click into element.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
   */


  FastClick.prototype.needsFocus = function (target) {
    switch (target.nodeName.toLowerCase()) {
      case 'textarea':
        return true;

      case 'select':
        return !deviceIsAndroid;

      case 'input':
        switch (target.type) {
          case 'button':
          case 'checkbox':
          case 'file':
          case 'image':
          case 'radio':
          case 'submit':
            return false;
        } // No point in attempting to focus disabled inputs


        return !target.disabled && !target.readOnly;

      default:
        return /\bneedsfocus\b/.test(target.className);
    }
  };
  /**
   * Send a click event to the specified element.
   *
   * @param {EventTarget|Element} targetElement
   * @param {Event} event
   */


  FastClick.prototype.sendClick = function (targetElement, event) {
    var clickEvent, touch; // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)

    if (document.activeElement && document.activeElement !== targetElement) {
      document.activeElement.blur();
    }

    touch = event.changedTouches[0]; // Synthesise a click event, with an extra attribute so it can be tracked

    clickEvent = document.createEvent('MouseEvents');
    clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
    clickEvent.forwardedTouchEvent = true;
    targetElement.dispatchEvent(clickEvent);
  };

  FastClick.prototype.determineEventType = function (targetElement) {
    //Issue #159: Android Chrome Select Box does not open with a synthetic click event
    if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
      return 'mousedown';
    }

    return 'click';
  };
  /**
   * @param {EventTarget|Element} targetElement
   */


  FastClick.prototype.focus = function (targetElement) {
    var length; // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.

    if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
      length = targetElement.value.length;
      targetElement.setSelectionRange(length, length);
    } else {
      targetElement.focus();
    }
  };
  /**
   * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
   *
   * @param {EventTarget|Element} targetElement
   */


  FastClick.prototype.updateScrollParent = function (targetElement) {
    var scrollParent, parentElement;
    scrollParent = targetElement.fastClickScrollParent; // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
    // target element was moved to another parent.

    if (!scrollParent || !scrollParent.contains(targetElement)) {
      parentElement = targetElement;

      do {
        if (parentElement.scrollHeight > parentElement.offsetHeight) {
          scrollParent = parentElement;
          targetElement.fastClickScrollParent = parentElement;
          break;
        }

        parentElement = parentElement.parentElement;
      } while (parentElement);
    } // Always update the scroll top tracker if possible.


    if (scrollParent) {
      scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
    }
  };
  /**
   * @param {EventTarget} targetElement
   * @returns {Element|EventTarget}
   */


  FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
    // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
    if (eventTarget.nodeType === Node.TEXT_NODE) {
      return eventTarget.parentNode;
    }

    return eventTarget;
  };
  /**
   * On touch start, record the position and scroll offset.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onTouchStart = function (event) {
    var targetElement, touch, selection; // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).

    if (event.targetTouches.length > 1) {
      return true;
    }

    targetElement = this.getTargetElementFromEventTarget(event.target);
    touch = event.targetTouches[0];

    if (deviceIsIOS) {
      // Only trusted events will deselect text on iOS (issue #49)
      selection = window.getSelection();

      if (selection.rangeCount && !selection.isCollapsed) {
        return true;
      }

      if (!deviceIsIOS4) {
        // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
        // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
        // with the same identifier as the touch event that previously triggered the click that triggered the alert.
        // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
        // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
        // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
        // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
        // random integers, it's safe to to continue if the identifier is 0 here.
        if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
          event.preventDefault();
          return false;
        }

        this.lastTouchIdentifier = touch.identifier; // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
        // 1) the user does a fling scroll on the scrollable layer
        // 2) the user stops the fling scroll with another tap
        // then the event.target of the last 'touchend' event will be the element that was under the user's finger
        // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
        // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).

        this.updateScrollParent(targetElement);
      }
    }

    this.trackingClick = true;
    this.trackingClickStart = event.timeStamp;
    this.targetElement = targetElement;
    this.touchStartX = touch.pageX;
    this.touchStartY = touch.pageY; // Prevent phantom clicks on fast double-tap (issue #36)

    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
      event.preventDefault();
    }

    return true;
  };
  /**
   * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.touchHasMoved = function (event) {
    var touch = event.changedTouches[0],
        boundary = this.touchBoundary;

    if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
      return true;
    }

    return false;
  };
  /**
   * Update the last position.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onTouchMove = function (event) {
    if (!this.trackingClick) {
      return true;
    } // If the touch has moved, cancel the click tracking


    if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
      this.trackingClick = false;
      this.targetElement = null;
    }

    return true;
  };
  /**
   * Attempt to find the labelled control for the given label element.
   *
   * @param {EventTarget|HTMLLabelElement} labelElement
   * @returns {Element|null}
   */


  FastClick.prototype.findControl = function (labelElement) {
    // Fast path for newer browsers supporting the HTML5 control attribute
    if (labelElement.control !== undefined) {
      return labelElement.control;
    } // All browsers under test that support touch events also support the HTML5 htmlFor attribute


    if (labelElement.htmlFor) {
      return document.getElementById(labelElement.htmlFor);
    } // If no for attribute exists, attempt to retrieve the first labellable descendant element
    // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label


    return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
  };
  /**
   * On touch end, determine whether to send a click event at once.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onTouchEnd = function (event) {
    var forElement,
        trackingClickStart,
        targetTagName,
        scrollParent,
        touch,
        targetElement = this.targetElement;

    if (!this.trackingClick) {
      return true;
    } // Prevent phantom clicks on fast double-tap (issue #36)


    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
      this.cancelNextClick = true;
      return true;
    }

    if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
      return true;
    } // Reset to prevent wrong click cancel on input (issue #156).


    this.cancelNextClick = false;
    this.lastClickTime = event.timeStamp;
    trackingClickStart = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0; // On some iOS devices, the targetElement supplied with the event is invalid if the layer
    // is performing a transition or scroll, and has to be re-detected manually. Note that
    // for this to function correctly, it must be called *after* the event target is checked!
    // See issue #57; also filed as rdar://13048589 .

    if (deviceIsIOSWithBadTarget) {
      touch = event.changedTouches[0]; // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null

      targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
      targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
    }

    targetTagName = targetElement.tagName.toLowerCase();

    if (targetTagName === 'label') {
      forElement = this.findControl(targetElement);

      if (forElement) {
        this.focus(targetElement);

        if (deviceIsAndroid) {
          return false;
        }

        targetElement = forElement;
      }
    } else if (this.needsFocus(targetElement)) {
      // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
      // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
      if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
        this.targetElement = null;
        return false;
      }

      this.focus(targetElement);
      this.sendClick(targetElement, event); // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
      // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)

      if (!deviceIsIOS || targetTagName !== 'select') {
        this.targetElement = null;
        event.preventDefault();
      }

      return false;
    }

    if (deviceIsIOS && !deviceIsIOS4) {
      // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
      // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
      scrollParent = targetElement.fastClickScrollParent;

      if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
        return true;
      }
    } // Prevent the actual click from going though - unless the target node is marked as requiring
    // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.


    if (!this.needsClick(targetElement)) {
      event.preventDefault();
      this.sendClick(targetElement, event);
    }

    return false;
  };
  /**
   * On touch cancel, stop tracking the click.
   *
   * @returns {void}
   */


  FastClick.prototype.onTouchCancel = function () {
    this.trackingClick = false;
    this.targetElement = null;
  };
  /**
   * Determine mouse events which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onMouse = function (event) {
    // If a target element was never set (because a touch event was never fired) allow the event
    if (!this.targetElement) {
      return true;
    }

    if (event.forwardedTouchEvent) {
      return true;
    } // Programmatically generated events targeting a specific element should be permitted


    if (!event.cancelable) {
      return true;
    } // Derive and check the target element to see whether the mouse event needs to be permitted;
    // unless explicitly enabled, prevent non-touch click events from triggering actions,
    // to prevent ghost/doubleclicks.


    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
      // Prevent any user-added listeners declared on FastClick element from being fired.
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      } else {
        // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        event.propagationStopped = true;
      } // Cancel the event


      event.stopPropagation();
      event.preventDefault();
      return false;
    } // If the mouse event is permitted, return true for the action to go through.


    return true;
  };
  /**
   * On actual clicks, determine whether this is a touch-generated click, a click action occurring
   * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
   * an actual click which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */


  FastClick.prototype.onClick = function (event) {
    var permitted; // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.

    if (this.trackingClick) {
      this.targetElement = null;
      this.trackingClick = false;
      return true;
    } // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.


    if (event.target.type === 'submit' && event.detail === 0) {
      return true;
    }

    permitted = this.onMouse(event); // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.

    if (!permitted) {
      this.targetElement = null;
    } // If clicks are permitted, return true for the action to go through.


    return permitted;
  };
  /**
   * Remove all FastClick's event listeners.
   *
   * @returns {void}
   */


  FastClick.prototype.destroy = function () {
    var layer = this.layer;

    if (deviceIsAndroid) {
      layer.removeEventListener('mouseover', this.onMouse, true);
      layer.removeEventListener('mousedown', this.onMouse, true);
      layer.removeEventListener('mouseup', this.onMouse, true);
    }

    layer.removeEventListener('click', this.onClick, true);
    layer.removeEventListener('touchstart', this.onTouchStart, false);
    layer.removeEventListener('touchmove', this.onTouchMove, false);
    layer.removeEventListener('touchend', this.onTouchEnd, false);
    layer.removeEventListener('touchcancel', this.onTouchCancel, false);
  };
  /**
   * Check whether FastClick is needed.
   *
   * @param {Element} layer The layer to listen on
   */


  FastClick.notNeeded = function (layer) {
    var metaViewport;
    var chromeVersion;
    var blackberryVersion;
    var firefoxVersion; // Devices that don't support touch don't need FastClick

    if (typeof window.ontouchstart === 'undefined') {
      return true;
    } // Chrome version - zero for other browsers


    chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

    if (chromeVersion) {
      if (deviceIsAndroid) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          } // Chrome 32 and above with width=device-width or less don't need FastClick


          if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        } // Chrome desktop doesn't need FastClick (issue #15)

      } else {
        return true;
      }
    }

    if (deviceIsBlackBerry10) {
      blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/); // BlackBerry 10.3+ does not require Fastclick library.
      // https://github.com/ftlabs/fastclick/issues/251

      if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // user-scalable=no eliminates click delay.
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          } // width=device-width (or less than device-width) eliminates click delay.


          if (document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
    } // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)


    if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    } // Firefox version - zero for other browsers


    firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

    if (firefoxVersion >= 27) {
      // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896
      metaViewport = document.querySelector('meta[name=viewport]');

      if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
        return true;
      }
    } // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
    // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx


    if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    }

    return false;
  };
  /**
   * Factory method for creating a FastClick object
   *
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */


  FastClick.attach = function (layer, options) {
    return new FastClick(layer, options);
  };

  if ("function" === 'function' && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return FastClick;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = FastClick.attach;
    module.exports.FastClick = FastClick;
  } else {
    window.FastClick = FastClick;
  }
})();

/***/ }),

/***/ "./src/haven/window.js":
/*!*****************************!*\
  !*** ./src/haven/window.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.append = append;
exports.clear = clear;
exports.create = create;
exports.get = get;
exports.getUIState = getUIState;
exports.measureDimensions = measureDimensions;
exports.setTitle = setTitle;
exports.position = exports.container = void 0;

var _buffer = __webpack_require__(/*! ./buffer */ "./src/haven/buffer.js");

var _options = __webpack_require__(/*! ./options */ "./src/haven/options.js");

var _prompt = __webpack_require__(/*! ./prompt */ "./src/haven/prompt.js");

var _style = __webpack_require__(/*! ./style */ "./src/haven/style.js");

// DOM containers for windows
var outputWindows = [document.getElementById('window0')]; // the parent of all windows

var mainContainer = document.getElementById('output');
var currentContainers = [outputWindows[0]];
var windowDimensions = [];
var cursorPosition = [];
/**
 * Add lines to the output.
 *
 * @param amount Number of lines
 * @param column Number of spaces that are added to the last line
 * @param havenWindow
 */

function createLines(amount, column, havenWindow) {
  for (var i = 0; i < amount; ++i) {
    var newlineFiller = document.createElement('span');
    newlineFiller.className = 'font-fixed-width';
    newlineFiller.innerHTML = '\n';
    outputWindows[havenWindow].appendChild(newlineFiller);
  }

  if (column > 0) {
    var spaceFiller = document.createElement('span');
    spaceFiller.innerHTML = Array(column).join(" ");
    spaceFiller.className = 'font-fixed-width';
    outputWindows[havenWindow].appendChild(spaceFiller);
  }

  position.reset(havenWindow);
}
/**
 * Prints text to a specific spot in the text window.
 *
 * @param line
 * @param col
 * @param newContent
 * @param havenWindow
 */


function replacePart(line, col, newContent, havenWindow) {
  //        console.log( 'Replacing line', line, 'col', col, 'with', newContent.innerHTML, 'in window', havenWindow );
  var output = outputWindows[havenWindow];
  var nodes = textNodesUnder(output);
  var range = document.createRange();
  var currentLine = 1;
  var currentCol = 1;
  var startFound = false;
  var endCounter = 0; // check if the new content goes on top of existing content or does the
  // container "overflow" (i.e. new lines need to be created as a padding)

  var overflow = function () {
    for (var i = 0; i < nodes.length; ++i) {
      var textContent = nodes[i].textContent;

      if (currentLine === line) {
        for (var j = 0; j < textContent.length; ++j) {
          if (startFound) {
            endCounter++;

            if (endCounter === newContent.textContent.length || textContent[j] === '\n') {
              range.setEnd(nodes[i], j);
              return false;
            }
          } else if (currentCol === col) {
            range.setStart(nodes[i], j);
            startFound = true;

            if (j === textContent.length - 1) {
              range.setEnd(nodes[i], j);
              return false;
            }
          } else if (textContent[j] === '\n') {
            var filler = document.createTextNode(Array(col - currentCol + 1).join(' ') + '\n');
            nodes[i].textContent = textContent.substr(0, j) + ' ';
            nodes[i].parentNode.insertBefore(filler, nodes[i].nextSibling);
            range.setStart(filler, col - currentCol - 1);
            range.setEnd(filler, col - currentCol - 1);
            return false;
          }

          currentCol++;
        }
      } else {
        if (textContent.indexOf('\n') > -1) {
          currentLine++;
        }
      }
    }

    return true;
  }();

  if (overflow) {
    createLines(cursorPosition[havenWindow].line - currentLine, col, havenWindow);
    output.appendChild(newContent);
    return;
  }

  if (newContent.textContent.indexOf('\n') > -1) {
    newContent.textContent = newContent.textContent.replace('\n', '');
    cursorPosition[havenWindow].line++;
    cursorPosition[havenWindow].col = 1;
  } else {
    cursorPosition[havenWindow].col += newContent.textContent.length;
  }

  range.deleteContents();
  range.insertNode(newContent);

  if (!newContent.nextSibling) {
    cursorPosition[havenWindow].line = null;
    cursorPosition[havenWindow].col = null;
  }
}
/**
 * Get all text nodes contained by a DOM node
 *
 * From http://stackoverflow.com/a/10730777
 *
 * @param node
 * @returns {Array}
 */


function textNodesUnder(node) {
  var all = [];

  for (node = node.firstChild; node; node = node.nextSibling) {
    if (node.nodeType === 3) {
      all.push(node);
    } else {
      all = all.concat(textNodesUnder(node));
    }
  }

  return all;
}
/**
 * Append content to a window.
 *
 * @param content
 * @param targetWindow
 */


function append(content, targetWindow) {
  var textContainer = document.createElement('span');

  if (!cursorPosition[targetWindow]) {
    cursorPosition[targetWindow] = {
      col: null,
      line: null
    };
  }

  (0, _style.apply)(textContainer, targetWindow);
  textContainer.innerHTML = content; // console.log( content, content.length );

  if (cursorPosition[targetWindow].col !== null && cursorPosition[targetWindow].line !== null) {
    replacePart(cursorPosition[targetWindow].line, cursorPosition[targetWindow].col, textContainer, targetWindow);
  } else {
    //             outputWindows[ targetWindow ].appendChild( textContainer );
    currentContainers[targetWindow].appendChild(textContainer);
  }
}

;
/**
 * Clears an output window.
 *
 * @param targetWindow
 */

function clear(targetWindow) {
  if (targetWindow === undefined) {
    (0, _buffer.flush)(0);
    mainContainer.innerHTML = "";
    mainContainer.appendChild(outputWindows[0]);
    (0, _style.apply)(outputWindows[0], 0);
    (0, _style.apply)(document.body, 0);
    position.reset();
  } else {
    if (!outputWindows[targetWindow]) {
      return;
    } // console.log( 'clear window', targetWindow );


    (0, _buffer.flush)(targetWindow);
    outputWindows[targetWindow].innerHTML = "";
    (0, _style.apply)(outputWindows[targetWindow], targetWindow); // when clearing the main window, set the entire page's style

    if (targetWindow === 0) {
      (0, _style.apply)(document.body, 0);
    }

    position.reset(targetWindow);
  } // don't scroll automatically right after clearing the main window


  if (targetWindow < 1) {// hugoui.doScroll = false;
  }
}

;
/**
 * Create a new window (Hugo only).
 *
 * @param outputWindow
 * @param left
 * @param top
 * @param right
 * @param bottom
 */

function create(outputWindow, left, top, right, bottom) {
  //        console.log( 'creating window', outputWindow + ':  left', left, 'top', top, 'right', right, 'bottom', bottom );
  var dimensions = measureDimensions();
  var charHeight = dimensions.char.height;
  var mainContainer = get(0).parentNode;
  var newWindow;
  windowDimensions[outputWindow] = {
    left: left,
    top: top,
    right: right,
    bottom: bottom
  };

  if (!(0, _options.get)('windowing')) {
    return false;
  } // the main window only changes size


  if (outputWindow === 0) {
    //                outputWindow[0].style.paddingLeft = ( left - 1 ) + 'px';
    get(0).style.paddingTop = (top - 1) * dimensions.char.height + 'px'; //                outputWindow[0].style.width = ( ( right + 1 ) * dimensions.char.width ) + 'px';

    return;
  }

  if (get(outputWindow)) {
    mainContainer.removeChild(get(outputWindow));
  }

  newWindow = document.createElement('div');
  newWindow.id = 'window' + outputWindow;
  newWindow.className = 'havenwindow font-fixed-width';
  newWindow.style.height = charHeight * (bottom - top + 1) + 'px';
  newWindow.style.top = (top - 1) * charHeight + 'px';
  newWindow.style.marginLeft = left - 1 + 'px';
  newWindow.style.width = (right - left + 2) * dimensions.char.width + 'px';
  outputWindows[outputWindow] = newWindow;
  currentContainers[outputWindow] = newWindow;
  container.append(newWindow, mainContainer);
}

;
/**
 * Output containers inside the windows.
 */

var container = {
  append: function append(container, target) {
    if (typeof target === 'number') {
      outputWindows[target].appendChild(container);
    } else {
      target.appendChild(container);
    }
  },
  get: function get(targetWindow) {
    return currentContainers[targetWindow];
  },
  set: function set(newContainer, targetWindow) {
    currentContainers[targetWindow] = newContainer;
  }
};
/**
 * Returns the output window element.
 *
 * @param targetWindow
 * @returns {*}
 */

exports.container = container;

function get(targetWindow) {
  return outputWindows[targetWindow];
}
/**
 * Get all data required to later reconstruct the UI state.
 */


function getUIState() {
  var windowContents = [];
  var promptElem = (0, _prompt.get)();
  var promptParent = promptElem.parentNode; // put prompt away during the save

  if (promptParent) {
    promptParent.removeChild(promptElem);
  } // remove the >


  var lastChild = outputWindows[0].lastChild;
  outputWindows[0].removeChild(lastChild);

  for (var i = 0; i < outputWindows.length; ++i) {
    windowContents[i] = outputWindows[i].innerHTML;
  } // put back what was removed


  outputWindows[0].appendChild(lastChild);

  if (promptParent) {
    promptParent.appendChild(promptElem);
  } // this should be done better, but remove the last line break
  // because restoring adds one back again


  var lastLbr = windowContents[0].lastIndexOf('\n');
  windowContents[0] = windowContents[0].substring(0, lastLbr) + windowContents[0].substring(lastLbr + 1);
  return {
    cmdHistory: _prompt.history.get(),
    currentColors: _style.color.get(),
    font: _style.font.get(),
    position: cursorPosition,
    title: document.title,
    windowDimensions: windowDimensions,
    windowContents: windowContents
  };
}
/**
 * When the window size changes, measure the window width in characters (Hugo only)
 */


function measureDimensions() {
  var outputContainer = get(0).parentNode;
  var dimensions = {
    window: {
      width: parseInt(window.getComputedStyle(outputContainer).width, 10),
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    },
    line: {},
    char: {}
  };
  var measureElem = document.createElement('span');
  var outputDimensions = dimensions.window;
  var measureElemHeight;
  measureElem.innerHTML = '00000<br>00000<br>00000';
  measureElem.className = 'font-fixed-width';
  measureElem.style.display = 'inline-block';
  outputContainer.appendChild(measureElem);
  dimensions.char.width = measureElem.offsetWidth / 5;
  dimensions.line.width = Math.floor((outputDimensions.width - 1) / dimensions.char.width);
  measureElem.style.display = 'block';
  measureElemHeight = measureElem.clientHeight;
  measureElem.innerHTML += '<br>00000<br>00000';
  dimensions.char.height = (measureElem.clientHeight - measureElemHeight) / 2 + 3;
  dimensions.line.height = Math.floor(outputDimensions.height / dimensions.char.height);
  measureElem.parentNode.removeChild(measureElem);
  return dimensions;
}
/**
 * Set the cursor position inside the target window. Hugo only.
 */


var position = {
  reset: function reset(targetWindow) {
    // if no window specified, reset all positions
    if (targetWindow === undefined) {
      cursorPosition = [{
        col: null,
        line: null
      }];
    } else {
      position.set(null, null, targetWindow);
    }
  },
  restore: function restore(oldState) {
    cursorPosition = oldState;
  },
  set: function set(col, line, havenWindow) {
    if (!cursorPosition[havenWindow]) {
      cursorPosition[havenWindow] = {};
    }

    cursorPosition[havenWindow].col = col;
    cursorPosition[havenWindow].line = line;
  }
};
/**
 * Set the window title
 *
 * @param title
 */

exports.position = position;

function setTitle(title) {
  document.title = title;
}

/***/ }),

/***/ "./src/hugo.js":
/*!*********************!*\
  !*** ./src/hugo.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.gameEnded = gameEnded;
exports.init = init;
exports.initScreen = initScreen;
exports.print = print;
exports.restoreUI = restoreUI;
exports.sendWindowDimensions = sendWindowDimensions;
exports.setTitle = setTitle;
exports.position = exports.font = exports.color = exports.opcodes = void 0;

var _buffer = __webpack_require__(/*! ./haven/buffer */ "./src/haven/buffer.js");

var _haven = __webpack_require__(/*! ./haven/haven */ "./src/haven/haven.js");

var _options = __webpack_require__(/*! ./haven/options */ "./src/haven/options.js");

var _input = __webpack_require__(/*! ./haven/input */ "./src/haven/input.js");

var _state = __webpack_require__(/*! ./haven/state */ "./src/haven/state.js");

var _style = __webpack_require__(/*! ./haven/style */ "./src/haven/style.js");

var _window = __webpack_require__(/*! ./haven/window */ "./src/haven/window.js");

var _opcodes = _interopRequireWildcard(__webpack_require__(/*! ./opcodes */ "./src/opcodes.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var opcodes = _opcodes;
/**
 * Clear target window, or if omitted, the entire screen.
 *
 * @param hugoWindow
 */

exports.opcodes = opcodes;

function clear(hugoWindow) {
  (0, _window.clear)(hugoWindow);
}

var color = {
  /**
   * Set colors in windows
   *
   * @param which
   * @param newColor
   * @param hugoWindow
   */
  set: function set(which, newColor, hugoWindow) {
    _style.color.set(which, newColor, hugoWindow);
  }
};
exports.color = color;
var font = {
  /**
   * Set font styles
   *
   * @param f
   * @param hugoWindow
   */
  set: function set(f, hugoWindow) {
    (0, _style.set)("bold", !!(f & 1), hugoWindow);
    (0, _style.set)("italic", !!(f & 2), hugoWindow);
    (0, _style.set)("underline", !!(f & 4), hugoWindow);
    (0, _style.set)("proportional", !!(f & 8), hugoWindow);
    (0, _style.set)("original", f, hugoWindow); // setStyle( flushedText, hugoWindow );
  }
};
/**
 * Called by the engine when the game has ended.
 */

exports.font = font;

function gameEnded() {
  // delete the autosave file
  if ((0, _options.get)('autosave')) {
    _state.autosave.remove();
  } // Redirect to an exit URL when the game ends.
  // A fatal error should block the redirection.
  // As a crude check for whether an error was thrown,
  // check if the error message div is present.


  if ((0, _options.get)('exit_url') && !document.getElementById('fatal-error')) {
    // if any text is printed after previous input,
    // wait for keypress/click before redirecting
    if ((0, _input.getTextWasPrinted)()) {
      (0, _input.setMode)('endgame');
    } else {
      window.location = (0, _options.get)('exit_url');
    }
  }
}
/**
 * Initialize HugoJS methods and start Haven
 */


function init() {
  var ready = function ready() {
    (0, _haven.start)({
      // Hugo engine decides text and background colors
      engineColors: true,
      // the Hugo engine will handle printing the prompt,
      // as opposed to Vorple that uses a custom prompt
      enginePrompt: true,
      // let the Hugo engine set the font family
      // (fixed width or proportional)
      engineFontFamily: true,
      // user-provided options
      options: hugojs_options,
      // no Unicode support
      unicode: false,
      // the name of the story file in the virtual filesystem
      virtualStoryfile: 'game.hex'
    });
    opcodes.init();
  }; // let the user upload a game file unless one is already supplied
  // and it's not been explicitly disallowed


  if (hugojs_options.allow_upload && !hugojs_options.lock_story && !(0, _options.getParameter)('story')) {
    var uploadContainer = document.createElement("div");
    var header = document.createElement("h2");
    var fileUpload = document.createElement("input");
    uploadContainer.id = "uploadContainer";
    header.textContent = "Upload Hugo story file (.hex)";
    fileUpload.type = "file";
    fileUpload.addEventListener("change", function (e) {
      (0, _options.set)('uploadedFile', this.files[0]);
      ready();
    });
    document.getElementById('loader').style.display = "none";
    uploadContainer.appendChild(header);
    uploadContainer.appendChild(fileUpload);
    document.body.appendChild(uploadContainer);
  } else {
    ready();
  }
}

function removeLoader() {
  var loader = document.getElementById('loader');

  if (loader) {
    loader.parentNode.removeChild(loader);
  }
}
/**
 * Send the current window dimensions back to the engine.
 *
 * Called by the engine when it needs to init the display.
 */


function initScreen() {
  removeLoader();
  sendWindowDimensions();
}
/**
 * Set the print cursor position.
 */


var position = {
  set: function set(column, line, hugoWindow) {
    _window.position.set(column, line, hugoWindow);
  }
};
/**
 * Print text.
 *
 * @param text
 * @param hugoWindow
 */

exports.position = position;

function print(text, hugoWindow) {
  // \n is a carriage return, not needed in the browser environment
  if (text === '\n') {
    return;
  }

  (0, _buffer.append)(text, hugoWindow);
}
/**
 * Reset UI state after restore
 */


function restoreUI() {
  (0, _state.restoreUI)();
}
/**
 * Send the window dimensions to the engine (Hugo only)
 */


function sendWindowDimensions() {
  var dimensions = (0, _window.measureDimensions)();
  Module.ccall('hugo_set_window_dimensions', 'null', ['number', 'number', 'number', 'number', 'number', 'number'], [dimensions.window.width, dimensions.window.height, dimensions.line.width, dimensions.line.height, dimensions.char.width, dimensions.char.height]);
}
/**
 * Sets the window title. Called by the engine.
 *
 * @param title
 */


function setTitle(title) {
  (0, _window.setTitle)(title);
} // Set Emscripten's command line arguments that load the story file


window.Module.arguments = ['/game.hex'];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./haven/bootstrap */ "./src/haven/bootstrap.js");

var ui = _interopRequireWildcard(__webpack_require__(/*! ./hugo */ "./src/hugo.js"));

__webpack_require__(/*! ./css/hugo.css */ "./src/css/hugo.css");

__webpack_require__(/*! ./css/ui.css */ "./src/css/ui.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

window.hugoui = ui;

/***/ }),

/***/ "./src/opcodes.js":
/*!************************!*\
  !*** ./src/opcodes.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.process = process;

var _assets = __webpack_require__(/*! ./haven/assets */ "./src/haven/assets.js");

var _options = __webpack_require__(/*! ./haven/options */ "./src/haven/options.js");

/**
 * Support for non-standard opcodes.
 */
var OPCODE_CONTROL_FILE = "HrCtlAPI";
var OPCODE_CHECK_FILE = "OpCheck";
/**
 * Save the virtual file that tells the game file we support extra opcodes.
 */

function init() {
  (0, _assets.addCallback)(function (done) {
    FS.syncfs(true, function () {
      if ((0, _options.get)('extra_opcodes')) {
        FS.writeFile(OPCODE_CHECK_FILE, new Uint8Array([89, 47]) // == 12121
        );
      } else {
        try {
          FS.unlink(OPCODE_CHECK_FILE);
        } catch (e) {}
      }

      try {
        FS.unlink(OPCODE_CONTROL_FILE);
      } catch (e) {}

      FS.syncfs(false, done);
    });
  });
}
/**
 * The engine has written to the opcode file. See what's in it,
 * execute the opcode, and write the response (if any).
 */


function process() {
  if (!(0, _options.get)('extra_opcodes')) {
    return;
  }

  var opcodeData = FS.readFile(OPCODE_CONTROL_FILE);
  var paramcount = opcodeData.length / 2 - 1;
  var response = [];

  var addResponse = function addResponse(value) {
    response.push(value % 256);
    response.push(value >> 8);
  };

  var readWord = function readWord(index) {
    return opcodeData[index * 2] + opcodeData[index * 2 + 1] * 256;
  };

  var writeResponse = function writeResponse() {
    FS.writeFile(OPCODE_CONTROL_FILE, new Uint8Array(response));
  }; // odd number of bytes in the input, should never happen


  if (opcodeData.length % 2 === 1) {
    addResponse(20); // 20: RESULT_WRONG_BYTE_COUNT

    writeResponse();
    return;
  }

  var opcodes = {
    1: function _() {
      // IS_OPCODE_AVAILABLE
      if (opcodes[readWord(1)]) {
        addResponse(1);
      } else {
        addResponse(1);
      }
    },
    200: function _() {
      // GET_OS
      addResponse(6); // 6 = Browser
    },
    300: function _() {
      // ABORT
      // try to close the window – won't work unless the interpreter
      // window was programmatically opened by another page
      window.close(); // quick-and-dirty abort by throwing an exception

      throw new Error('Abort opcode called');
    },
    500: function _() {
      // OPEN_URL
      var url = Module.ccall('hugojs_get_dictionary_word', 'string', ['int'], [opcodeData[2] + opcodeData[3] * 256]);

      if (confirm('Game wants to open web address ' + url + '. Continue?')) {
        window.open(url);
      }
    },
    800: function _() {
      // IS_MUSIC_PLAYING
      addResponse(0);
    },
    900: function _() {
      // IS_SAMPLE_PLAYING
      addResponse(0);
    },
    1000: function _() {
      // IS_FLUID_LAYOUT
      addResponse(1);
    },

    /*
     1100: function() {  // SET_COLOR
     hugoui.setCustomColor( opcodeData[ 2 ], opcodeData[ 4 ], opcodeData[ 6 ], opcodeData[ 8 ] );
     },
     */
    1300: function _() {
      // HIDES_CURSOR
      addResponse(1);
    }
  }; // all non-zero parameter counts

  var paramCounts = {
    1: 1,
    400: 4,
    500: 1,
    600: 1,
    700: 1,
    1100: 4,
    1600: 2
  };
  var op = readWord(0);

  if (opcodes[op]) {
    var requiredParams = paramCounts[op] || 0; // check that the parameter count is correct

    if (paramcount !== requiredParams) {
      addResponse(10);
      writeResponse();
      return;
    } // execute the opcode


    addResponse(0); // 0: RESULT_OK

    opcodes[op]();
  } else {
    // unknown opcode or no support
    addResponse(30); // 30: UNRECOGNIZED_OPCODE

    addResponse(op);
    addResponse(paramcount);

    for (var i = 1; i < paramcount; ++i) {
      addResponse(readWord(i));
    }
  } // write the response to the control file


  writeResponse();
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9odWdvLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1c3RvbS1ldmVudC1wb2x5ZmlsbC9jdXN0b20tZXZlbnQtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvaHVnby5jc3M/NGU0OSIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3VpLmNzcz80YzBhIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL2Fzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi4vaHVnb2pzL3NyYy9oYXZlbi9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaGF2ZW4vYnVmZmVyLmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL2Vycm9yLmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaGF2ZW4vaGF2ZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaGF2ZW4vaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaGF2ZW4vbG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaGF2ZW4vcHJvbXB0LmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL3N0eWxlLmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2hhdmVuL3ZlbmRvci9mYXN0Y2xpY2suanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaGF2ZW4vd2luZG93LmpzIiwid2VicGFjazovLy8uLi9odWdvanMvc3JjL2h1Z28uanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2h1Z29qcy9zcmMvb3Bjb2Rlcy5qcyJdLCJuYW1lcyI6WyJleHBlY3RlZEFzc2V0cyIsImNhbGxiYWNrcyIsImxhc3RDYWxsYmFjayIsImRvbmUiLCJpIiwibWV0YUNhbGxiYWNrIiwibGVuZ3RoIiwiYWRkQ2FsbGJhY2siLCJjYiIsInNldFRpbWVvdXQiLCJwdXNoIiwiZXhwZWN0IiwiYXNzZXQiLCJjb25zb2xlIiwid2FybiIsImZpbmFsQ2FsbGJhY2siLCJmaW5pc2hlZCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIndpbmRvdyIsIk1vZHVsZSIsImFyZ3VtZW50cyIsInByZVJ1biIsInBvc3RSdW4iLCJwcmludCIsInRleHQiLCJwcmludEVyciIsImxvZyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiam9pbiIsIlRPVEFMX01FTU9SWSIsIm91dHB1dEJ1ZmZlciIsImVuY29kZUh0bWwiLCJlbmNvZGVkIiwiY2hhckNvZGVBdCIsImFwcGVuZCIsInRhcmdldFdpbmRvdyIsIm5leHRMQlIiLCJNYXRoIiwibWF4IiwibGFzdEluZGV4T2YiLCJzdWJzdHIiLCJmbHVzaCIsInVuZGVmaW5lZCIsImhhdmVuIiwiZ2V0IiwibmV3bGluZSIsImVycm9yIiwibWVzc2FnZSIsImVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcGlubmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2FkZXIiLCJpZCIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNsYXNzTmFtZSIsIkVycm9yIiwicmVxdWlyZSIsImludGVycHJldGVyTG9hZGVkIiwiaXNHYW1lZmlsZUxvYWRlZCIsImdhbWVmaWxlIiwiY2hlY2tzdW0iLCJkYXRhZGlyIiwic3RvcnlGaWxlbmFtZSIsImZudjMyIiwiYSIsImxlbiIsImZudiIsIndyaXRlR2FtZWZpbGUiLCJzdHlsZSIsImRpc3BsYXkiLCJGUyIsIndyaXRlRmlsZSIsImVuY29kaW5nIiwiYW5hbHl6ZVBhdGgiLCJleGlzdHMiLCJta2RpciIsIm1vdW50IiwiSURCRlMiLCJyb290IiwiY2hkaXIiLCJzeW5jZnMiLCJhdXRvc2F2ZSIsInNldE5hbWUiLCJyZXN0b3JlIiwia2V5cHJlc3MiLCJpbml0IiwidmlydHVhbEZpbGVuYW1lIiwiZ2FtZVVybCIsInVwbG9hZGVkRmlsZSIsInByb3h5T3B0aW9uIiwicmVxdWVzdFVybCIsInVzZVByb3h5IiwicHJvY2Vzc1N0b3J5RmlsZSIsImZpbGUiLCJVaW50OEFycmF5IiwidG9TdHJpbmciLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsInVwbG9hZENvbnRhaW5lciIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc0FycmF5QnVmZmVyIiwieG1saHR0cCIsIlhNTEh0dHBSZXF1ZXN0IiwidGVzdCIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0Iiwic3BsaXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInN0YXR1cyIsInJlc3BvbnNlIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXBwbHkiLCJzdGF0dXNUZXh0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsInNlbmQiLCJwcm9tcHQiLCJ3aHkiLCJmaWxlbmFtZSIsImlucHV0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInZhbHVlIiwiZ2V0UHJvbXB0IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwicmVhZFVJU3RhdGUiLCJzdGF0ZSIsInJlYWRGaWxlIiwiYXV0b3NhdmVGaWxlbmFtZSIsIkpTT04iLCJwYXJzZSIsIm9uYmVmb3JldW5sb2FkIiwic3RhcnRFbmdpbmUiLCJfaGF2ZW5fc3RhcnQiLCJzdGFydCIsIm9wdCIsInhociIsImVtdGVycHJldGVyRmlsZSIsInNjcmlwdCIsInNyYyIsIm9wdGlvbnMiLCJ2aXJ0dWFsU3RvcnlmaWxlIiwiZW5naW5lUHJvbXB0IiwidW5pY29kZSIsImVuZ2luZUNvbG9ycyIsImVuZ2luZUZvbnRGYW1pbHkiLCJhZGRFdmVudExpc3RlbmVyIiwiRmFzdENsaWNrIiwiYXR0YWNoIiwiZmlsZU1ldGhvZHMiLCJpbnB1dE1ldGhvZHMiLCJwcm9tcHRNZXRob2RzIiwic3RhdGVNZXRob2RzIiwid2luZG93TWV0aG9kcyIsImlucHV0TW9kZSIsImtleXByZXNzQnVmZmVyIiwiaXNUZXh0UHJpbnRlZCIsImdldE1vZGUiLCJpc1dhaXRpbmciLCJrZXlDb2RlIiwiZG9jIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsdG9wIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJjbGllbnRUb3AiLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiaHVnb2pzX29wdGlvbnMiLCJleGl0X3VybCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2NhbGwiLCJ3YWl0Iiwic2hpZnQiLCJzZXRNb2RlIiwibW9kZSIsInRleHRXYXNQcmludGVkIiwibmV3U3RhdGUiLCJnZXRUZXh0V2FzUHJpbnRlZCIsInJlbW92ZSIsImxvYWRlck92ZXJsYXkiLCJleHRyYV9vcGNvZGVzIiwicHJveHlfdXJsIiwidXNlX3Byb3h5Iiwid2luZG93aW5nIiwiZ2V0UGFyYW1ldGVyIiwibmFtZSIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZVNlYXJjaCIsIlJlZ0V4cCIsImV4ZWMiLCJocmVmIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidG9Mb3dlckNhc2UiLCJwYXJzZUZsb2F0IiwiTmFOIiwiZGVmYXVsdHMiLCJvcHRpb25fa2V5IiwiaGFzT3duUHJvcGVydHkiLCJsb2NrX3N0b3J5Iiwic3RvcnkiLCJsb2NrX29wdGlvbnMiLCJzZXQiLCJjbWRIaXN0b3J5IiwiY3VycmVudENtZEhpc3RvcnkiLCJjdXJyZW50Q21kVGV4dCIsImRvU2Nyb2xsIiwiaW5wdXRFbGVtIiwiaW5wdXRYIiwicHJlZml4RWxlbSIsInByb21wdEVsZW0iLCJsaW5laW5wdXRSZWFkeUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhcHBlbmRQcm9tcHQiLCJjYXJldCIsImlucHV0VGV4dCIsInRhcmdldENvbnRhaW5lciIsIndpbmRvd0NvbnRhaW5lciIsImxhc3RMaW5laW5wdXQiLCJsYXN0UHJlZml4IiwibGFzdENvbW1hbmQiLCJwcmV2aW91c0xhc3RQcm9tcHQiLCJjbGFzc0xpc3QiLCJnZXRDbWRGcm9tSGlzdG9yeSIsImRlbHRhIiwiY3VycmVudCIsIm5ld19jdXJyZW50IiwicmVzaXplSW5wdXQiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwic2Nyb2xsVG9Db250ZW50Iiwib3V0cHV0Iiwic3RhdHVzbGluZSIsIm5vZGVzIiwidGV4dE5vZGVzVW5kZXIiLCJub25XaGl0ZXNwYWNlUmVnZXgiLCJ0ZXh0Q29udGVudCIsIm5ld1Njcm9sbFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImhlaWdodCIsInNjcm9sbFRvIiwibm9kZSIsImFsbCIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsIm5vZGVUeXBlIiwiY29uY2F0IiwiaGlkZSIsImhpc3RvcnkiLCJhZGQiLCJjbWQiLCJjbGVhciIsInBvcCIsIm5ld0hpc3RvcnkiLCJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRpYWNyaXRpY3NNYXAiLCJqIiwicHJldmVudERlZmF1bHQiLCJyZXBsYWNlIiwidW5zaGlmdCIsImRldGFpbCIsInNpbGVudCIsInByZWZpeCIsIndoaWNoIiwiZmlyc3RGb2N1cyIsImlzUmVhZHkiLCJzY3JvbGxPckZvY3VzIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiY3JlYXRlUmFuZ2UiLCJwbGF5QXJlYUhlaWdodCIsImtleWNvZGUiLCJub2RlTmFtZSIsImZvY3VzIiwic3RvcFByb3BhZ2F0aW9uIiwiYWN0aXZlRWxlbWVudCIsInNldERvU2Nyb2xsIiwic2hvdyIsIm9mZnNldExlZnQiLCJvZmZzZXRXaWR0aCIsInNhdmUiLCJ1bmxpbmsiLCJzdGF0IiwiZW5naW5lU2F2ZVN1Y2NlZWRlZCIsInN0cmluZ2lmeSIsImdldFVJU3RhdGUiLCJyZXN0b3JlVUkiLCJzYXZlZFN0YXRlIiwid2luZG93Q291bnQiLCJ3aW5kb3dDb250ZW50cyIsIndpbmRvd0RpbWVuc2lvbnMiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJjb2xvciIsImN1cnJlbnRDb2xvcnMiLCJmb250Iiwid2luZG93UG9zaXRpb24iLCJwb3NpdGlvbiIsInRpdGxlIiwib3JpZ2luYWwiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdENvbG9ycyIsImN1cnJlbnRGb250IiwiZGVmYXVsdFN0eWxlcyIsImlnbm9yZUZvbnRGYW1pbHkiLCJib2xkIiwiaXRhbGljIiwidW5kZXJsaW5lIiwicHJvcG9ydGlvbmFsIiwibmV3Q2xhc3NlcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0UHJvbXB0U3R5bGUiLCJwcm9wIiwib2xkU3RhdGUiLCJsYXllciIsIm9sZE9uQ2xpY2siLCJ0cmFja2luZ0NsaWNrIiwidHJhY2tpbmdDbGlja1N0YXJ0IiwidGFyZ2V0RWxlbWVudCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJsYXN0VG91Y2hJZGVudGlmaWVyIiwidG91Y2hCb3VuZGFyeSIsInRhcERlbGF5IiwidGFwVGltZW91dCIsIm5vdE5lZWRlZCIsImJpbmQiLCJtZXRob2QiLCJjb250ZXh0IiwibWV0aG9kcyIsImwiLCJkZXZpY2VJc0FuZHJvaWQiLCJvbk1vdXNlIiwib25DbGljayIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsIm9uVG91Y2hDYW5jZWwiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2siLCJjYXB0dXJlIiwicm12IiwiTm9kZSIsImhpamFja2VkIiwiYWR2IiwiZXZlbnQiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJvbmNsaWNrIiwiZGV2aWNlSXNXaW5kb3dzUGhvbmUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkZXZpY2VJc0lPUyIsImRldmljZUlzSU9TNCIsImRldmljZUlzSU9TV2l0aEJhZFRhcmdldCIsImRldmljZUlzQmxhY2tCZXJyeTEwIiwibmVlZHNDbGljayIsImRpc2FibGVkIiwibmVlZHNGb2N1cyIsInJlYWRPbmx5Iiwic2VuZENsaWNrIiwiY2xpY2tFdmVudCIsInRvdWNoIiwiYmx1ciIsImNoYW5nZWRUb3VjaGVzIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRldGVybWluZUV2ZW50VHlwZSIsInNjcmVlblgiLCJzY3JlZW5ZIiwiY2xpZW50WCIsImNsaWVudFkiLCJmb3J3YXJkZWRUb3VjaEV2ZW50IiwidGFnTmFtZSIsInNldFNlbGVjdGlvblJhbmdlIiwidXBkYXRlU2Nyb2xsUGFyZW50Iiwic2Nyb2xsUGFyZW50IiwicGFyZW50RWxlbWVudCIsImZhc3RDbGlja1Njcm9sbFBhcmVudCIsImNvbnRhaW5zIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZmFzdENsaWNrTGFzdFNjcm9sbFRvcCIsImdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQiLCJldmVudFRhcmdldCIsIlRFWFRfTk9ERSIsInRhcmdldFRvdWNoZXMiLCJyYW5nZUNvdW50IiwiaXNDb2xsYXBzZWQiLCJpZGVudGlmaWVyIiwidGltZVN0YW1wIiwicGFnZVgiLCJwYWdlWSIsImxhc3RDbGlja1RpbWUiLCJ0b3VjaEhhc01vdmVkIiwiYm91bmRhcnkiLCJhYnMiLCJmaW5kQ29udHJvbCIsImxhYmVsRWxlbWVudCIsImNvbnRyb2wiLCJodG1sRm9yIiwicXVlcnlTZWxlY3RvciIsImZvckVsZW1lbnQiLCJ0YXJnZXRUYWdOYW1lIiwiY2FuY2VsTmV4dENsaWNrIiwiZWxlbWVudEZyb21Qb2ludCIsInBhZ2VYT2Zmc2V0IiwiY2FuY2VsYWJsZSIsInBlcm1pdHRlZCIsImRlc3Ryb3kiLCJtZXRhVmlld3BvcnQiLCJjaHJvbWVWZXJzaW9uIiwiYmxhY2tiZXJyeVZlcnNpb24iLCJmaXJlZm94VmVyc2lvbiIsIm9udG91Y2hzdGFydCIsImNvbnRlbnQiLCJzY3JvbGxXaWR0aCIsIm91dGVyV2lkdGgiLCJtYXRjaCIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaEFjdGlvbiIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJvdXRwdXRXaW5kb3dzIiwibWFpbkNvbnRhaW5lciIsImN1cnJlbnRDb250YWluZXJzIiwiY3Vyc29yUG9zaXRpb24iLCJjcmVhdGVMaW5lcyIsImFtb3VudCIsImNvbHVtbiIsImhhdmVuV2luZG93IiwibmV3bGluZUZpbGxlciIsInNwYWNlRmlsbGVyIiwicmVzZXQiLCJyZXBsYWNlUGFydCIsImxpbmUiLCJjb2wiLCJuZXdDb250ZW50IiwicmFuZ2UiLCJjdXJyZW50TGluZSIsImN1cnJlbnRDb2wiLCJzdGFydEZvdW5kIiwiZW5kQ291bnRlciIsIm92ZXJmbG93Iiwic2V0RW5kIiwic2V0U3RhcnQiLCJmaWxsZXIiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydEJlZm9yZSIsImRlbGV0ZUNvbnRlbnRzIiwiaW5zZXJ0Tm9kZSIsInRleHRDb250YWluZXIiLCJjcmVhdGUiLCJvdXRwdXRXaW5kb3ciLCJkaW1lbnNpb25zIiwibWVhc3VyZURpbWVuc2lvbnMiLCJjaGFySGVpZ2h0IiwiY2hhciIsIm5ld1dpbmRvdyIsInBhZGRpbmdUb3AiLCJtYXJnaW5MZWZ0IiwiY29udGFpbmVyIiwibmV3Q29udGFpbmVyIiwicHJvbXB0UGFyZW50IiwibGFzdENoaWxkIiwibGFzdExiciIsInN1YnN0cmluZyIsIm91dHB1dENvbnRhaW5lciIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1lYXN1cmVFbGVtIiwib3V0cHV0RGltZW5zaW9ucyIsIm1lYXN1cmVFbGVtSGVpZ2h0IiwiZmxvb3IiLCJzZXRUaXRsZSIsIm9wY29kZXMiLCJfb3Bjb2RlcyIsImh1Z29XaW5kb3ciLCJuZXdDb2xvciIsImNvbG9ycyIsImYiLCJnYW1lRW5kZWQiLCJyZWFkeSIsImFsbG93X3VwbG9hZCIsImhlYWRlciIsImZpbGVVcGxvYWQiLCJmaWxlcyIsInJlbW92ZUxvYWRlciIsImluaXRTY3JlZW4iLCJzZW5kV2luZG93RGltZW5zaW9ucyIsImh1Z291aSIsInVpIiwiT1BDT0RFX0NPTlRST0xfRklMRSIsIk9QQ09ERV9DSEVDS19GSUxFIiwicHJvY2VzcyIsIm9wY29kZURhdGEiLCJwYXJhbWNvdW50IiwiYWRkUmVzcG9uc2UiLCJyZWFkV29yZCIsIndyaXRlUmVzcG9uc2UiLCJjbG9zZSIsInVybCIsImNvbmZpcm0iLCJwYXJhbUNvdW50cyIsIm9wIiwicmVxdWlyZWRQYXJhbXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTs7O0FBR0E7QUFDQSxxQ0FBc0Msd0JBQXdCLEdBQUcsa0JBQWtCLHlCQUF5QixHQUFHLHFCQUFxQixpQ0FBaUMsR0FBRyx3QkFBd0IseUJBQXlCLHNCQUFzQixHQUFHLHVCQUF1Qiw2QkFBNkIsc0JBQXNCLHFCQUFxQixHQUFHLGtCQUFrQiw0Q0FBNEMsR0FBRyxrQkFBa0IsMkNBQTJDLEdBQUcsa0JBQWtCLDRDQUE0QyxHQUFHLGtCQUFrQiwyQ0FBMkMsR0FBRyxrQkFBa0IsMENBQTBDLEdBQUcsa0JBQWtCLDhDQUE4QyxHQUFHLGtCQUFrQiw0Q0FBNEMsR0FBRyxrQkFBa0IsNENBQTRDLEdBQUcsa0JBQWtCLGdEQUFnRCxHQUFHLGtCQUFrQixpREFBaUQsR0FBRyxtQkFBbUIsaURBQWlELEdBQUcsbUJBQW1CLGdEQUFnRCxHQUFHLG1CQUFtQiwrQ0FBK0MsR0FBRyxtQkFBbUIsbURBQW1ELEdBQUcsbUJBQW1CLDRDQUE0QyxHQUFHLG1CQUFtQixrREFBa0QsR0FBRyxvQkFBb0IseURBQXlELEdBQUcsZ0JBQWdCLHdEQUF3RCxHQUFHLGdCQUFnQix5REFBeUQsR0FBRyxnQkFBZ0Isd0RBQXdELEdBQUcsZ0JBQWdCLHVEQUF1RCxHQUFHLGdCQUFnQiwyREFBMkQsR0FBRyxnQkFBZ0IseURBQXlELEdBQUcsZ0JBQWdCLHlEQUF5RCxHQUFHLGdCQUFnQiw2REFBNkQsR0FBRyxnQkFBZ0IsOERBQThELEdBQUcsaUJBQWlCLDhEQUE4RCxHQUFHLGlCQUFpQiw2REFBNkQsR0FBRyxpQkFBaUIsNERBQTRELEdBQUcsaUJBQWlCLGdFQUFnRSxHQUFHLGlCQUFpQix5REFBeUQsR0FBRyxpQkFBaUIsK0RBQStELEdBQUc7O0FBRXBuRjs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxxQ0FBc0MsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUseUJBQXlCLEdBQUcsNEJBQTRCLGtCQUFrQiw2QkFBNkIsNkJBQTZCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLGdCQUFnQiw0QkFBNEIsR0FBRyxhQUFhLHVCQUF1QixnQ0FBZ0MscUJBQXFCLEdBQUcsa0JBQWtCLDRCQUE0QixHQUFHLGdCQUFnQiw0QkFBNEIsbUJBQW1CLEdBQUcsc0JBQXNCLGdCQUFnQixzQkFBc0IsaUJBQWlCLGlCQUFpQixrQkFBa0IsR0FBRyxrQkFBa0Isc0JBQXNCLHVCQUF1QixHQUFHLDZCQUE2Qix5QkFBeUIsR0FBRyxhQUFhLHNCQUFzQixhQUFhLGVBQWUsY0FBYyxnQkFBZ0IsR0FBRyxxQkFBcUIsd0JBQXdCLHlCQUF5QixHQUFHLHFDQUFxQyxvQ0FBb0MsR0FBRyxjQUFjLHNCQUFzQix3QkFBd0IseUJBQXlCLGtCQUFrQiw2QkFBNkIsbUJBQW1CLGFBQWEsZUFBZSxrQkFBa0IsbUJBQW1CLHdCQUF3QixzQkFBc0IsK0NBQStDLDBDQUEwQyxHQUFHLHNCQUFzQixXQUFXLFdBQVcsRUFBRSxZQUFZLFVBQVUsRUFBRSxHQUFHLGtCQUFrQixzQkFBc0IsYUFBYSxjQUFjLGVBQWUsbUJBQW1CLGtCQUFrQiw2QkFBNkIsR0FBRzs7QUFFemlEOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7OztBQ2xCQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBLElBQU1BLGlCQUFpQixDQUFFLFFBQUYsRUFBWSxXQUFaLENBQXZCLEMsQ0FFQTs7QUFDQSxJQUFNQyxZQUFZLEVBQWxCLEMsQ0FFQTs7QUFDQSxJQUFJQyxZQUFKO0FBR0E7Ozs7QUFHQSxTQUFTQyxJQUFULEdBQWdCO0FBQ1osTUFBSUMsSUFBSSxDQUFSOztBQUNBLE1BQU1DLGVBQWUsU0FBZkEsWUFBZSxHQUFXO0FBQzVCRDs7QUFDQSxRQUFJQSxJQUFJSCxVQUFVSyxNQUFsQixFQUEyQjtBQUN2QkwsZ0JBQVdHLENBQVgsRUFBZ0JDLFlBQWhCO0FBQ0gsS0FGRCxNQUdLLElBQUlILFlBQUosRUFBbUI7QUFDcEJBO0FBQ0g7QUFDSixHQVJEOztBQVVBLE1BQUlELFVBQVVLLE1BQVYsS0FBcUIsQ0FBekIsRUFBNkI7QUFDekI7QUFDSDs7QUFFREwsWUFBVyxDQUFYLEVBQWdCSSxZQUFoQjtBQUNIO0FBR0Q7Ozs7Ozs7Ozs7O0FBU08sU0FBU0UsV0FBVCxDQUFzQkMsRUFBdEIsRUFBMkI7QUFDOUIsTUFBSVIsZUFBZU0sTUFBZixLQUEwQixDQUE5QixFQUFrQztBQUM5QjtBQUNBRyxlQUFZRCxFQUFaLEVBQWdCLENBQWhCO0FBQ0g7O0FBRURQLFlBQVVTLElBQVYsQ0FBZ0JGLEVBQWhCO0FBQ0g7O0FBQUE7QUFHRDs7Ozs7O0FBS08sU0FBU0csTUFBVCxDQUFpQkMsS0FBakIsRUFBeUI7QUFDNUIsTUFBSVosZUFBZU0sTUFBZixLQUEwQixDQUE5QixFQUFrQztBQUM5Qk8sWUFBUUMsSUFBUixDQUFjLHdCQUF3QkYsS0FBeEIsR0FBZ0MsY0FBaEMsR0FDUix1REFETjtBQUVBO0FBQ0g7O0FBRURaLGlCQUFlVSxJQUFmLENBQXFCRSxLQUFyQjtBQUNIOztBQUFBO0FBR0Q7Ozs7Ozs7QUFNTyxTQUFTRyxhQUFULENBQXdCUCxFQUF4QixFQUE2QjtBQUNoQ04saUJBQWVNLEVBQWY7QUFDSDs7QUFBQTtBQUdEOzs7Ozs7O0FBTU8sU0FBU1EsUUFBVCxDQUFtQkosS0FBbkIsRUFBMkI7QUFDOUIsTUFBTUssUUFBUWpCLGVBQWVrQixPQUFmLENBQXdCTixLQUF4QixDQUFkOztBQUVBLE1BQUlLLFVBQVUsQ0FBQyxDQUFmLEVBQW1CO0FBQ2YsV0FBTyxLQUFQO0FBQ0gsR0FMNkIsQ0FPOUI7OztBQUNBakIsaUJBQWVtQixNQUFmLENBQXVCRixLQUF2QixFQUE4QixDQUE5QixFQVI4QixDQVU5Qjs7QUFDQSxNQUFJakIsZUFBZU0sTUFBZixLQUEwQixDQUE5QixFQUFrQztBQUM5Qkg7QUFDSDs7QUFFRCxTQUFPLElBQVA7QUFDSDs7QUFBQSxDOzs7Ozs7Ozs7Ozs7OztBQ3JHRDs7QUFDQTs7OztBQUVBaUIsT0FBT0MsTUFBUCxHQUFnQjtBQUNaQyxhQUFXLEVBREM7QUFFWkMsVUFBUSxFQUZJO0FBR1pDLFdBQVMsQ0FBRSxZQUFXO0FBQUUsMEJBQVUsUUFBVjtBQUF1QixHQUF0QyxDQUhHO0FBSVpDLFNBQU8sZUFBVUMsSUFBVixFQUFpQjtBQUNwQjtBQUNBO0FBQ0Esd0JBQU8seUNBQXlDQSxJQUFoRDtBQUNILEdBUlc7QUFTWkMsWUFBVSxvQkFBVztBQUNqQmQsWUFBUWUsR0FBUixDQUFhTixTQUFiO0FBQ0Esd0JBQU9PLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQlYsU0FBM0IsRUFBc0NXLElBQXRDLENBQTJDLEdBQTNDLENBQVA7QUFDSCxHQVpXO0FBYVpDLGdCQUFjLFFBYkYsQ0FhWTs7QUFiWixDQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7QUFFQTtBQUNBLElBQU1DLGVBQWUsQ0FBRSxFQUFGLENBQXJCO0FBR0E7Ozs7Ozs7QUFNQSxTQUFTQyxVQUFULENBQXFCVixJQUFyQixFQUE0QjtBQUN4QixNQUFJVyxVQUFVLEVBQWQ7O0FBQ0EsT0FBSyxJQUFJakMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJc0IsS0FBS3BCLE1BQXpCLEVBQWlDLEVBQUVGLENBQW5DLEVBQXVDO0FBRW5DO0FBQ0EsUUFBSXNCLEtBQUtZLFVBQUwsQ0FBaUJsQyxDQUFqQixJQUF1QixHQUEzQixFQUFpQztBQUM3QmlDLGlCQUFXLE9BQU9YLEtBQUtZLFVBQUwsQ0FBaUJsQyxDQUFqQixDQUFQLEdBQThCLEdBQXpDO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsY0FBUXNCLEtBQU10QixDQUFOLENBQVI7QUFDSSxhQUFLLEdBQUw7QUFDSWlDLHFCQUFXLE9BQVg7QUFDQTs7QUFFSixhQUFLLEdBQUw7QUFDSUEscUJBQVcsTUFBWDtBQUNBOztBQUVKLGFBQUssR0FBTDtBQUNJQSxxQkFBVyxNQUFYO0FBQ0E7O0FBRUosYUFBSyxJQUFMO0FBQ0lBLHFCQUFXLElBQVg7QUFDQTs7QUFFSjtBQUNJQSxxQkFBV1gsS0FBTXRCLENBQU4sQ0FBWDtBQUNBO0FBbkJSO0FBcUJIO0FBQ0o7O0FBRUQsU0FBT2lDLE9BQVA7QUFDSDtBQUdEOzs7Ozs7OztBQU1PLFNBQVNFLE1BQVQsQ0FBaUJiLElBQWpCLEVBQXVCYyxZQUF2QixFQUFzQztBQUN6QyxNQUFJLENBQUNMLGFBQWNLLFlBQWQsQ0FBTCxFQUFvQztBQUNoQ0wsaUJBQWNLLFlBQWQsSUFBK0IsRUFBL0I7QUFDSDs7QUFFRCxNQUFJZCxLQUFLUixPQUFMLENBQWMsSUFBZCxJQUF1QixDQUFDLENBQXhCLElBQTZCUSxLQUFLUixPQUFMLENBQWMsSUFBZCxJQUF1QixDQUFDLENBQXpELEVBQTZEO0FBQ3pELFFBQU11QixVQUFVQyxLQUFLQyxHQUFMLENBQVVqQixLQUFLa0IsV0FBTCxDQUFrQixJQUFsQixDQUFWLEVBQW9DbEIsS0FBS2tCLFdBQUwsQ0FBa0IsSUFBbEIsQ0FBcEMsSUFBaUUsQ0FBakY7QUFFQVQsaUJBQWNLLFlBQWQsS0FBZ0NKLFdBQVlWLEtBQUttQixNQUFMLENBQWEsQ0FBYixFQUFnQkosT0FBaEIsQ0FBWixDQUFoQztBQUNBSyxVQUFPTixZQUFQO0FBQ0FMLGlCQUFjSyxZQUFkLElBQStCSixXQUFZVixLQUFLbUIsTUFBTCxDQUFhSixPQUFiLENBQVosQ0FBL0I7QUFDSCxHQU5ELE1BT0s7QUFDRE4saUJBQWNLLFlBQWQsS0FBZ0NKLFdBQVlWLElBQVosQ0FBaEM7QUFDSDtBQUNKO0FBR0Q7Ozs7Ozs7QUFLTyxTQUFTb0IsS0FBVCxDQUFnQk4sWUFBaEIsRUFBK0I7QUFDbEMsTUFBSUEsaUJBQWlCTyxTQUFyQixFQUFpQztBQUM3QixTQUFLLElBQUkzQyxDQUFULElBQWMrQixZQUFkLEVBQTZCO0FBQ3pCVyxZQUFPLENBQUMxQyxDQUFSO0FBQ0g7QUFDSjs7QUFFRCxNQUFJLENBQUMrQixhQUFjSyxZQUFkLENBQUQsSUFBaUMsQ0FBQ1EsTUFBTTVCLE1BQU4sQ0FBYTZCLEdBQWIsQ0FBa0JULFlBQWxCLENBQXRDLEVBQXlFO0FBQ3JFO0FBQ0gsR0FUaUMsQ0FXdEM7QUFDSTs7O0FBRUFRLFFBQU01QixNQUFOLENBQWFtQixNQUFiLENBQXFCSixhQUFjSyxZQUFkLENBQXJCLEVBQW1EQSxZQUFuRDtBQUNBTCxlQUFjSyxZQUFkLElBQStCLEVBQS9COztBQUVBLE1BQUlBLGlCQUFpQixDQUFyQixFQUF5QjtBQUNyQiwrQkFBZ0IsSUFBaEI7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTVSxPQUFULENBQWtCVixZQUFsQixFQUFpQztBQUNwQyxNQUFJTCxhQUFjSyxZQUFkLENBQUosRUFBbUM7QUFDL0JMLGlCQUFjSyxZQUFkLEtBQWdDLElBQWhDO0FBQ0gsR0FGRCxNQUdLO0FBQ0RMLGlCQUFjSyxZQUFkLElBQStCLElBQS9CO0FBQ0g7O0FBRURNLFFBQU9OLFlBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhEOzs7QUFHZSxTQUFTVyxLQUFULENBQWdCQyxPQUFoQixFQUEwQjtBQUNyQyxNQUFNQyxPQUFPQyxTQUFTQyxhQUFULENBQXdCLEtBQXhCLENBQWI7QUFDQSxNQUFNQyxVQUFVRixTQUFTRyxjQUFULENBQXlCLFNBQXpCLENBQWhCO0FBQ0EsTUFBTUMsU0FBU0osU0FBU0csY0FBVCxDQUF5QixRQUF6QixDQUFmO0FBRUFKLE9BQUtNLEVBQUwsR0FBVSxhQUFWO0FBQ0FOLE9BQUtPLFNBQUwsR0FBaUJSLE9BQWpCO0FBQ0FFLFdBQVNPLElBQVQsQ0FBY0MsV0FBZCxDQUEyQlQsSUFBM0IsRUFQcUMsQ0FTckM7O0FBQ0EsTUFBSUcsT0FBSixFQUFjO0FBQ1ZBLFlBQVFPLFVBQVIsQ0FBbUJDLFdBQW5CLENBQWdDUixPQUFoQztBQUNILEdBWm9DLENBY3JDOzs7QUFDQSxNQUFJRSxNQUFKLEVBQWE7QUFDVEEsV0FBT08sU0FBUCxHQUFtQixTQUFuQjtBQUNIOztBQUVELFFBQU0sSUFBSUMsS0FBSixDQUFXZCxPQUFYLENBQU47QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJEOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBUEEsbUJBQUFlLENBQVMsNEZBQVQ7O0FBU0EsSUFBSUMsb0JBQW9CLEtBQXhCO0FBQ0EsSUFBSUMsbUJBQW1CLEtBQXZCO0FBQ0EsSUFBSUMsUUFBSjtBQUNBLElBQUlDLFFBQUo7QUFDQSxJQUFJQyxPQUFKO0FBQ0EsSUFBSUMsYUFBSjtBQUdBOzs7Ozs7O0FBTUEsU0FBU0MsS0FBVCxDQUFnQkMsQ0FBaEIsRUFBb0I7QUFDaEIsTUFBTUMsTUFBTUQsRUFBRXJFLE1BQWQ7QUFDQSxNQUFJdUUsTUFBTSxDQUFWOztBQUVBLE9BQUssSUFBSXpFLElBQUksQ0FBYixFQUFnQkEsSUFBSXdFLEdBQXBCLEVBQXlCeEUsR0FBekIsRUFBK0I7QUFDM0J5RSxVQUFPQSxPQUFRLENBQUNBLE9BQU8sQ0FBUixLQUFjQSxPQUFPLENBQXJCLEtBQTJCQSxPQUFPLENBQWxDLEtBQXdDQSxPQUFPLENBQS9DLEtBQXFEQSxPQUFPLEVBQTVELENBQUQsS0FBc0UsQ0FBN0UsQ0FBRCxHQUFxRkYsRUFBR3ZFLENBQUgsSUFBUyxJQUFwRztBQUNIOztBQUVELFNBQU95RSxRQUFRLENBQWY7QUFDSDtBQUdEOzs7Ozs7OztBQU1BLFNBQVNDLGFBQVQsQ0FBd0IzRSxJQUF4QixFQUErQjtBQUMzQjtBQUNBbUQsV0FBU0csY0FBVCxDQUF5QixRQUF6QixFQUFvQ3NCLEtBQXBDLENBQTBDQyxPQUExQyxHQUFvRCxPQUFwRDs7QUFFQSxNQUFJLENBQUNaLGlCQUFELElBQXNCLENBQUNDLGdCQUEzQixFQUE4QztBQUMxQyxRQUFJLENBQUNELGlCQUFMLEVBQXlCO0FBQ3JCZCxlQUFTRyxjQUFULENBQXlCLGdCQUF6QixFQUE0Q0csU0FBNUMsR0FBd0QscUJBQXhEO0FBQ0gsS0FGRCxNQUdLO0FBQ0ROLGVBQVNHLGNBQVQsQ0FBeUIsZ0JBQXpCLEVBQTRDRyxTQUE1QyxHQUF3RCxtQkFBeEQ7QUFDSDtBQUNKOztBQUVETixXQUFTRyxjQUFULENBQXlCLGdCQUF6QixFQUE0Q0csU0FBNUMsR0FBd0QsZUFBeEQ7QUFFQXFCLEtBQUdDLFNBQUgsQ0FDSVQsYUFESixFQUVJSCxRQUZKLEVBR0k7QUFBQ2EsY0FBVTtBQUFYLEdBSEosRUFmMkIsQ0FxQjNCOztBQUNBWCxZQUFVLGVBQWVELFFBQXpCOztBQUVBLE1BQUksQ0FBQ1UsR0FBR0csV0FBSCxDQUFnQlosT0FBaEIsRUFBMEJhLE1BQS9CLEVBQXdDO0FBQ3BDSixPQUFHSyxLQUFILENBQVVkLE9BQVY7QUFDSDs7QUFFRFMsS0FBR00sS0FBSCxDQUFVQyxLQUFWLEVBQWlCO0FBQUNDLFVBQU07QUFBUCxHQUFqQixFQUE4QmpCLE9BQTlCLEVBNUIyQixDQThCM0I7O0FBQ0EsTUFBSSxDQUFDUyxHQUFHRyxXQUFILENBQWdCLFVBQWhCLEVBQTZCQyxNQUFsQyxFQUEyQztBQUN2Q0osT0FBR0ssS0FBSCxDQUFVLFVBQVY7QUFDSDs7QUFFREwsS0FBR00sS0FBSCxDQUFVQyxLQUFWLEVBQWlCO0FBQUNDLFVBQU07QUFBUCxHQUFqQixFQUE4QixVQUE5QjtBQUNBUixLQUFHUyxLQUFILENBQVUsVUFBVixFQXBDMkIsQ0FzQzNCOztBQUNBVCxLQUFHVSxNQUFILENBQVcsSUFBWCxFQUFpQixZQUFXO0FBQ3hCLFFBQUksa0JBQUssVUFBTCxDQUFKLEVBQXdCO0FBQ3BCQyxzQkFBU0MsT0FBVCxDQUFrQixlQUFldEIsUUFBZixHQUEwQixXQUE1Qzs7QUFDQXFCLHNCQUFTRSxPQUFUO0FBQ0gsS0FKdUIsQ0FNeEI7OztBQUNBQyxvQkFBU0MsSUFBVDs7QUFFQTdGO0FBQ0gsR0FWRDtBQVdIO0FBR0Q7Ozs7O0FBR08sU0FBUzZGLElBQVQsQ0FBZUMsZUFBZixFQUFpQztBQUNwQyxNQUFNQyxVQUFVLGtCQUFLLE9BQUwsQ0FBaEI7QUFDQSxNQUFNQyxlQUFlLGtCQUFLLGNBQUwsQ0FBckI7QUFDQSxNQUFNQyxjQUFjLGtCQUFLLFdBQUwsQ0FBcEI7QUFDQSxNQUFJQyxVQUFKO0FBQ0EsTUFBSUMsUUFBSjs7QUFFQSxNQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFVQyxJQUFWLEVBQWlCO0FBQ3RDbkMsdUJBQW1CLElBQW5CO0FBQ0FDLGVBQVcsSUFBSW1DLFVBQUosQ0FBZ0JELElBQWhCLENBQVg7QUFDQWpDLGVBQVdHLE1BQU9KLFFBQVAsRUFBa0JvQyxRQUFsQixDQUE0QixFQUE1QixDQUFYLENBSHNDLENBS3RDOztBQUNBLDBCQUFVLFdBQVY7QUFDSCxHQVBEOztBQVNBakMsa0JBQWdCd0IsZUFBaEIsQ0FoQm9DLENBa0JwQzs7QUFDQSxNQUFJRSxZQUFKLEVBQW1CO0FBQ2YsUUFBTVEsU0FBUyxJQUFJQyxVQUFKLEVBQWY7O0FBRUFELFdBQU9FLE1BQVAsR0FBZ0IsVUFBVUMsQ0FBVixFQUFjO0FBQzFCLFVBQU1DLGtCQUFrQnpELFNBQVNHLGNBQVQsQ0FBeUIsaUJBQXpCLENBQXhCOztBQUVBLFVBQUlzRCxlQUFKLEVBQXNCO0FBQ2xCQSx3QkFBZ0JoRCxVQUFoQixDQUEyQkMsV0FBM0IsQ0FBd0MrQyxlQUF4QztBQUNIOztBQUVEUix1QkFBa0JPLEVBQUVFLE1BQUYsQ0FBU0MsTUFBM0I7QUFDSCxLQVJEOztBQVVBLDZCQUFhbkMsYUFBYjtBQUNBNkIsV0FBT08saUJBQVAsQ0FBMEJmLFlBQTFCO0FBRUE7QUFDSCxHQWpCRCxNQWtCSyxJQUFJLENBQUNELE9BQUwsRUFBZTtBQUNoQix3QkFBTyx5QkFBUDtBQUNIOztBQUVELE1BQU1pQixVQUFVLElBQUlDLGNBQUosRUFBaEI7O0FBRUEsVUFBUSxLQUFLaEIsV0FBYjtBQUNJLFNBQUssUUFBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssR0FBTDtBQUNJRSxpQkFBVyxJQUFYO0FBQ0E7O0FBRUosU0FBSyxPQUFMO0FBQ0EsU0FBSyxPQUFMO0FBQ0EsU0FBSyxHQUFMO0FBQ0lBLGlCQUFXLEtBQVg7QUFDQTtBQUVaOztBQUNRO0FBQ0k7QUFDQUEsaUJBQVcsZUFBZWUsSUFBZixDQUFxQm5CLE9BQXJCLEtBQWtDQSxRQUFRaEYsT0FBUixDQUFpQkUsT0FBT2tHLFFBQVAsQ0FBZ0JDLFFBQWhCLEdBQTJCLElBQTNCLEdBQWtDbkcsT0FBT2tHLFFBQVAsQ0FBZ0JFLElBQW5FLE1BQThFLENBQTNILENBRkosQ0FJSTs7QUFDQSxVQUFJcEIsZ0JBQWdCLE1BQXBCLEVBQTZCO0FBQ3pCdkYsZ0JBQVFDLElBQVIsQ0FBYywrQkFBK0JzRixXQUEvQixHQUE2QyxpQkFBM0Q7QUFDSDs7QUFDRDtBQXRCUjs7QUF5QkEsTUFBSUUsUUFBSixFQUFlO0FBQ1hELGlCQUFhLGtCQUFLLFdBQUwsRUFBbUJvQixLQUFuQixDQUEwQixJQUExQixFQUFpQ3hGLElBQWpDLENBQXVDeUYsbUJBQW9CeEIsT0FBcEIsQ0FBdkMsQ0FBYjtBQUNILEdBRkQsTUFHSztBQUNERyxpQkFBYUgsT0FBYjtBQUNIOztBQUVELDJCQUFhcEIsYUFBYjs7QUFFQXFDLFVBQVFRLGtCQUFSLEdBQTZCLFlBQVc7QUFDcEMsUUFBSVIsUUFBUVMsVUFBUixJQUFzQlIsZUFBZVMsSUFBekMsRUFBZ0Q7QUFDNUMsY0FBUVYsUUFBUVcsTUFBaEI7QUFDSSxhQUFLLEdBQUw7QUFDSXZCLDJCQUFrQlksUUFBUVksUUFBMUI7QUFDQTs7QUFFSixhQUFLLEdBQUw7QUFDSSw4QkFBTyxxQkFBUDtBQUNBOztBQUVKLGFBQUssR0FBTDtBQUNJLGNBQUl6QixRQUFKLEVBQWU7QUFDWCxnQ0FBTzBCLE9BQU9DLFlBQVAsQ0FBb0JDLEtBQXBCLENBQTJCLElBQTNCLEVBQWlDLElBQUl6QixVQUFKLENBQWdCVSxRQUFRWSxRQUF4QixDQUFqQyxDQUFQO0FBQ0gsV0FGRCxNQUdLO0FBQ0QsZ0NBQU8saUVBQVA7QUFDSDs7QUFDRDs7QUFFSixhQUFLLENBQUw7QUFBWTtBQUNSLDhCQUFPLHlFQUFQO0FBQ0E7O0FBRUo7QUFDSSw4QkFBTywwREFBMERaLFFBQVFXLE1BQWxFLEdBQTJFLElBQTNFLEdBQWtGWCxRQUFRZ0IsVUFBMUYsR0FBdUcsR0FBOUc7QUFDQTtBQXhCUjtBQTBCSDtBQUNKLEdBN0JEOztBQStCQWhCLFVBQVFpQixJQUFSLENBQWMsS0FBZCxFQUFxQi9CLFVBQXJCLEVBQWlDLElBQWpDO0FBQ0FjLFVBQVFrQixZQUFSLEdBQXVCLGFBQXZCLENBN0dvQyxDQTZHSTs7QUFDeENsQixVQUFRbUIsSUFBUjtBQUNIOztBQUFBO0FBR0Q7Ozs7Ozs7O0FBT08sU0FBU0MsTUFBVCxDQUFpQkMsR0FBakIsRUFBdUI7QUFDMUIsTUFBTUMsV0FBV3JILE9BQU9tSCxNQUFQLENBQWUsb0JBQW9CQyxHQUFuQyxDQUFqQjtBQUNBLE1BQU1FLFFBQVEsbUJBQVlDLHNCQUFaLENBQW9DLE9BQXBDLEVBQThDLENBQTlDLENBQWQ7O0FBRUEsTUFBSUYsWUFBWSxLQUFLcEIsSUFBTCxDQUFXb0IsUUFBWCxDQUFoQixFQUF3QztBQUNwQ0MsVUFBTUUsS0FBTixHQUFjcEUsVUFBVSxHQUFWLEdBQWdCaUUsU0FBU2hCLEtBQVQsQ0FBZ0IsR0FBaEIsRUFBc0J4RixJQUF0QixDQUE0QixHQUE1QixDQUE5QjtBQUNILEdBRkQsTUFHSztBQUNEeUcsVUFBTUUsS0FBTixHQUFjLEVBQWQ7QUFDSCxHQVR5QixDQVcxQjs7O0FBQ0FuSSxhQUFZLFlBQVc7QUFDbkJvSSxnQkFBVUMsYUFBVixDQUF5QixJQUFJQyxLQUFKLENBQVcsUUFBWCxDQUF6QixFQURtQixDQUduQjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0F0SSxlQUFZLFlBQVc7QUFDbkJ3RSxTQUFHVSxNQUFILENBQVcsS0FBWCxFQUFrQixZQUFXLENBQzVCLENBREQ7QUFFSCxLQUhELEVBR0csSUFISDtBQUlILEdBWEQsRUFXRyxDQVhIO0FBWUg7O0FBQUE7QUFHRDs7OztBQUdPLFNBQVNxRCxXQUFULEdBQXVCO0FBQzFCLE1BQUk7QUFDQSxRQUFNQyxRQUFRaEUsR0FBR2lFLFFBQUgsQ0FDVkMsbUJBQW1CLGVBRFQsRUFFVjtBQUFDaEUsZ0JBQVU7QUFBWCxLQUZVLENBQWQ7QUFLQSxXQUFPaUUsS0FBS0MsS0FBTCxDQUFZSixLQUFaLENBQVA7QUFDSCxHQVBELENBUUEsT0FBTW5DLENBQU4sRUFBUztBQUNMLFdBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBQUE7QUFHRDs7Ozs7QUFJTyxTQUFTbkIsTUFBVCxHQUFrQjtBQUNyQlYsS0FBR1UsTUFBSCxDQUFXLEtBQVgsRUFBa0IsWUFBVyxDQUFFLENBQS9CO0FBQ0g7O0FBQUEsQyxDQUdEOztBQUNBdkUsT0FBT2tJLGNBQVAsR0FBd0IsWUFBVztBQUMvQnJFLEtBQUdVLE1BQUgsQ0FBVyxLQUFYLEVBQWtCLFlBQVcsQ0FBRSxDQUEvQjtBQUNILENBRkQ7O0FBSUFyQyxTQUFTRyxjQUFULENBQXlCLGdCQUF6QixFQUE0Q0csU0FBNUMsR0FBd0QsbUNBQXhELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBaUdBOztBQUNBOzs7Ozs7QUFoR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsU0FBUzJGLFdBQVQsR0FBdUI7QUFDbkJDO0FBQ0g7QUFHRDs7Ozs7O0FBSU8sU0FBU0MsS0FBVCxDQUFnQkMsR0FBaEIsRUFBc0I7QUFDekI7QUFDQSxNQUFNQyxNQUFNLElBQUl2QyxjQUFKLEVBQVo7QUFFQXVDLE1BQUl2QixJQUFKLENBQVUsS0FBVixFQUFpQixZQUFqQixFQUErQixJQUEvQjtBQUNBdUIsTUFBSXRCLFlBQUosR0FBbUIsYUFBbkI7O0FBQ0FzQixNQUFJOUMsTUFBSixHQUFhLFlBQVc7QUFDcEJ4RixXQUFPdUksZUFBUCxHQUF5QkQsSUFBSTVCLFFBQTdCO0FBRUEsUUFBTThCLFNBQVN2RyxTQUFTQyxhQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQXNHLFdBQU9DLEdBQVAsR0FBYSxXQUFiO0FBQ0F4RyxhQUFTTyxJQUFULENBQWNDLFdBQWQsQ0FBMkIrRixNQUEzQjtBQUNILEdBTkQ7O0FBT0FGLE1BQUlyQixJQUFKLENBQVUsSUFBVixFQWJ5QixDQWV6Qjs7QUFDQSxxQkFBYW9CLElBQUlLLE9BQWpCLEVBaEJ5QixDQWtCekI7O0FBQ0Esd0JBQVVMLElBQUlNLGdCQUFkLEVBbkJ5QixDQXFCekI7O0FBQ0EsMkJBQWEsVUFBVXhKLEVBQVYsRUFBZTtBQUN4QjtBQUNBQTtBQUNILEdBSEQsRUF0QnlCLENBMkJ6Qjs7QUFDQSwwQkFBWTtBQUNSeUosa0JBQWMsQ0FBQyxDQUFDUCxJQUFJTyxZQURaO0FBRVJDLGFBQVMsQ0FBQyxDQUFDUixJQUFJUTtBQUZQLEdBQVosRUE1QnlCLENBaUN6Qjs7QUFDQSxtQkFBVztBQUNQQyxrQkFBYyxDQUFDLENBQUNULElBQUlTLFlBRGI7QUFFUEMsc0JBQWtCLENBQUMsQ0FBQ1YsSUFBSVU7QUFGakIsR0FBWCxFQWxDeUIsQ0F1Q3pCOztBQUNBLDJCQUFhLFVBQVU1SixFQUFWLEVBQWU7QUFDeEI7QUFDQUE7QUFDSCxHQUhELEVBeEN5QixDQTZDekI7O0FBQ0EsNkJBQWUrSSxXQUFmO0FBRUE7Ozs7QUFHQSxNQUFJLHNCQUFzQmpHLFFBQTFCLEVBQXFDO0FBQ2pDQSxhQUFTK0csZ0JBQVQsQ0FBMkIsa0JBQTNCLEVBQStDLFlBQVc7QUFDdERDLHlCQUFVQyxNQUFWLENBQWtCakgsU0FBU08sSUFBM0I7QUFDSCxLQUZELEVBRUcsS0FGSDtBQUdIO0FBQ0o7O0FBUUQ7QUFDQXpDLE9BQU80QixLQUFQLEdBQWU7QUFDWHdELFFBQU1nRSxXQURLO0FBRVg5QixTQUFPK0IsWUFGSTtBQUdYbEMsVUFBUW1DLGFBSEc7QUFJWHpCLFNBQU8wQixZQUpJO0FBS1h2SixVQUFRd0o7QUFMRyxDQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTs7QUFDQTs7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQSxJQUFJQyxZQUFZLElBQWhCLEMsQ0FFQTs7QUFDQSxJQUFNQyxpQkFBaUIsRUFBdkI7QUFFQSxJQUFJQyxnQkFBZ0IsS0FBcEI7QUFHQTs7Ozs7O0FBS08sU0FBU0MsT0FBVCxHQUFtQjtBQUN0QixTQUFPSCxTQUFQO0FBQ0g7O0FBR00sU0FBUzdFLElBQVQsR0FBZ0I7QUFDbkI7QUFDQTFDLFdBQVMrRyxnQkFBVCxDQUEyQixTQUEzQixFQUFzQ3RFLFNBQVN1QyxJQUEvQyxFQUFxRCxLQUFyRDtBQUNBaEYsV0FBUytHLGdCQUFULENBQTJCLE9BQTNCLEVBQW9DdEUsU0FBU3VDLElBQTdDLEVBQW1ELEtBQW5EO0FBQ0g7O0FBR00sSUFBTXZDLFdBQVc7QUFDcEI7OztBQUdBQyxRQUFNLGdCQUFXO0FBQ2I7QUFDQSxRQUFJLENBQUM2RSxTQUFMLEVBQWlCO0FBQ2JBLGtCQUFZLFFBQVo7QUFDSDtBQUNKLEdBVG1COztBQVdwQjs7Ozs7OztBQU9BSSxhQUFXLHFCQUFXO0FBQ2xCOztBQUVBLFFBQUlGLGFBQUosRUFBb0I7QUFDaEI7QUFDSDs7QUFFRCxXQUFPRCxlQUFleEssTUFBZixHQUF3QixDQUEvQjtBQUNILEdBMUJtQjtBQTRCcEJnSSxRQUFNLGNBQVV4QixDQUFWLEVBQWM7QUFDaEIsUUFBTW9FLFVBQVVwRSxFQUFFb0UsT0FBbEI7QUFDQSxRQUFNQyxNQUFNN0gsU0FBUzhILGVBQXJCO0FBQ0EsUUFBTUMsWUFBWSxDQUFDakssT0FBT2tLLFdBQVAsSUFBc0JILElBQUlJLFNBQTNCLEtBQXlDSixJQUFJSyxTQUFKLElBQWlCLENBQTFELENBQWxCLENBSGdCLENBS2hCOztBQUNBLFFBQUkxRSxFQUFFMkUsTUFBRixJQUFZM0UsRUFBRTRFLE9BQWQsSUFBeUI1RSxFQUFFNkUsT0FBM0IsSUFBc0M3RSxFQUFFOEUsUUFBNUMsRUFBdUQ7QUFDbkQ7QUFDSDs7QUFFRCxZQUFRZixTQUFSO0FBQ0ksV0FBSyxRQUFMO0FBQ0lDLHVCQUFlcEssSUFBZixDQUFxQndLLE9BQXJCO0FBQ0E7O0FBRUosV0FBSyxTQUFMO0FBQ0EsV0FBSyxJQUFMO0FBQ0k7QUFDQSxtQ0FBZXBFLENBQWY7QUFDQTs7QUFFSixXQUFLLFFBQUw7QUFDSTtBQUNBOztBQUVKLFdBQUssU0FBTDtBQUNJMUYsZUFBT2tHLFFBQVAsR0FBa0J1RSxlQUFlQyxRQUFqQztBQUNBOztBQUVKO0FBQ0ksNEJBQU8sMkNBQTJDakIsU0FBbEQ7QUFwQlI7O0FBdUJBQSxnQkFBWSxRQUFaLENBakNnQixDQW1DaEI7O0FBQ0EsUUFBSVEsWUFBWWpLLE9BQU8ySyxXQUFuQixHQUFpQ3pJLFNBQVNPLElBQVQsQ0FBY21JLFlBQWQsR0FBNkIsRUFBbEUsRUFBdUU7QUFDbkUsaUNBQWVsRixDQUFmO0FBQ0E7QUFDSDs7QUFFRHpGLFdBQU80SyxLQUFQLENBQ0ksY0FESixFQUVJLE1BRkosRUFHSSxDQUFFLFFBQUYsQ0FISixFQUlJLENBQUVmLE9BQUYsQ0FKSjtBQU1ILEdBM0VtQjtBQTZFcEJnQixRQUFNLGdCQUFXO0FBQ2JyQixnQkFBWSxRQUFaO0FBRUE7QUFDQSwrQkFKYSxDQU1iOztBQUNBLFFBQUlDLGVBQWV4SyxNQUFmLEdBQXdCLENBQTVCLEVBQWdDO0FBQzVCeUYsZUFBU3VDLElBQVQsQ0FBYztBQUFFNEMsaUJBQVNKLGVBQWVxQixLQUFmO0FBQVgsT0FBZDtBQUNIO0FBQ0o7QUF2Rm1CLENBQWpCO0FBMkZQOzs7Ozs7OztBQUtPLFNBQVNDLE9BQVQsQ0FBa0JDLElBQWxCLEVBQXlCO0FBQzVCeEIsY0FBWXdCLElBQVo7QUFDSDtBQUdEOzs7Ozs7O0FBS08sU0FBU0MsY0FBVCxHQUEyQztBQUFBLE1BQWxCQyxRQUFrQix1RUFBUCxJQUFPO0FBQzlDeEIsa0JBQWdCd0IsUUFBaEI7QUFDSDs7QUFFTSxTQUFTQyxpQkFBVCxHQUE2QjtBQUNoQyxTQUFPRixjQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9JTSxTQUFTRyxNQUFULEdBQWtCO0FBQ3JCLE1BQU1DLGdCQUFnQnBKLFNBQVNHLGNBQVQsQ0FBeUIsUUFBekIsQ0FBdEI7O0FBRUEsTUFBSWlKLGFBQUosRUFBb0I7QUFDaEJBLGtCQUFjM0ksVUFBZCxDQUF5QkMsV0FBekIsQ0FBc0MwSSxhQUF0QztBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQsSUFBTWhELE1BQU07QUFDUjlELFlBQVUsSUFERjtBQUVSa0csWUFBVSxFQUZGO0FBR1JhLGlCQUFlLElBSFA7QUFJUkMsYUFBVyxXQUpIO0FBS1JDLGFBQVcsTUFMSDtBQU1SQyxhQUFXO0FBTkgsQ0FBWjtBQVVBOzs7Ozs7OztBQU9PLFNBQVNDLFlBQVQsQ0FBdUJDLElBQXZCLEVBQTZCQyxJQUE3QixFQUFtQ0MsWUFBbkMsRUFBa0Q7QUFDckQsTUFBSUMsY0FBYyxJQUFJQyxNQUFKLENBQVksU0FBU0osSUFBVCxHQUFnQixlQUE1QixFQUE2QyxHQUE3QyxFQUFtREssSUFBbkQsQ0FBeURqTSxPQUFPa0csUUFBUCxDQUFnQmdHLElBQXpFLENBQWxCO0FBQUEsTUFDSTFFLEtBREo7O0FBR0EsTUFBSXVFLGdCQUFnQixJQUFoQixJQUF3QkEsWUFBWTdNLE1BQVosR0FBcUIsQ0FBakQsRUFBcUQ7QUFDakQsV0FBTzRNLFlBQVA7QUFDSDs7QUFFRHRFLFVBQVEyRSxtQkFBb0JKLFlBQWEsQ0FBYixFQUFpQjFGLEtBQWpCLENBQXdCLEdBQXhCLEVBQThCeEYsSUFBOUIsQ0FBb0MsR0FBcEMsQ0FBcEIsQ0FBUjs7QUFFQSxVQUFRZ0wsSUFBUjtBQUNJLFNBQUssU0FBTDtBQUNJLFVBQUlyRSxNQUFNNEUsV0FBTixPQUF3QixNQUF4QixJQUFrQzVFLFVBQVUsSUFBNUMsSUFBb0RBLFVBQVUsR0FBbEUsRUFBd0U7QUFDcEUsZUFBTyxJQUFQO0FBQ0g7O0FBRUQsVUFBSUEsTUFBTTRFLFdBQU4sT0FBd0IsT0FBeEIsSUFBbUM1RSxVQUFVLEtBQTdDLElBQXNEQSxVQUFVLEdBQXBFLEVBQTBFO0FBQ3RFLGVBQU8sS0FBUDtBQUNIOztBQUVELGFBQU9zRSxZQUFQOztBQUVKLFNBQUssUUFBTDtBQUNJLFVBQUlPLFdBQVk3RSxLQUFaLElBQXNCLEVBQXRCLEtBQTZCQSxLQUFqQyxFQUF5QztBQUNyQyxlQUFPNkUsV0FBWTdFLEtBQVosQ0FBUDtBQUNIOztBQUVELGFBQU84RSxHQUFQOztBQUVKO0FBQ0ksVUFBSTlFLE1BQU10SSxNQUFOLEtBQWlCLENBQXJCLEVBQXlCO0FBQ3JCLGVBQU80TSxZQUFQO0FBQ0g7O0FBRUQsYUFBT3RFLEtBQVA7QUF4QlI7QUEwQkg7QUFHRDs7Ozs7Ozs7QUFNTyxTQUFTM0YsR0FBVCxDQUFjK0osSUFBZCxFQUFxQjtBQUN4QixTQUFPdEQsSUFBS3NELElBQUwsQ0FBUDtBQUNIO0FBR0Q7Ozs7O0FBR08sU0FBU2hILElBQVQsQ0FBZTJILFFBQWYsRUFBMEI7QUFDN0IsTUFBSUMsVUFBSjtBQUVBRCxhQUFXQSxZQUFZLEVBQXZCOztBQUVBLE9BQUtDLFVBQUwsSUFBbUJELFFBQW5CLEVBQThCO0FBQzFCLFFBQUlBLFNBQVNFLGNBQVQsQ0FBeUJELFVBQXpCLEtBQXlDRCxTQUFVQyxVQUFWLE1BQTJCN0ssU0FBeEUsRUFBb0Y7QUFDaEYyRyxVQUFLa0UsVUFBTCxJQUFvQkQsU0FBVUMsVUFBVixDQUFwQjtBQUNIO0FBQ0o7O0FBRUQsTUFBSSxDQUFDbEUsSUFBSW9FLFVBQVQsRUFBc0I7QUFDbEJwRSxRQUFJcUUsS0FBSixHQUFZaEIsYUFBYyxPQUFkLEVBQXVCLFFBQXZCLEVBQWlDckQsSUFBSXFFLEtBQXJDLENBQVo7QUFDSDs7QUFFRCxNQUFJLENBQUNyRSxJQUFJc0UsWUFBVCxFQUF3QjtBQUNwQixTQUFLSixVQUFMLElBQW1CbEUsR0FBbkIsRUFBeUI7QUFDckIsVUFBSWtFLGVBQWUsT0FBZixJQUEwQmxFLElBQUltRSxjQUFKLENBQW9CRCxVQUFwQixDQUE5QixFQUFpRTtBQUM3RGxFLFlBQUtrRSxVQUFMLElBQW9CYixhQUFjYSxVQUFkLFVBQWlDbEUsSUFBS2tFLFVBQUwsQ0FBakMsR0FBb0RsRSxJQUFLa0UsVUFBTCxDQUFwRCxDQUFwQjtBQUNIO0FBQ0osS0FMbUIsQ0FPcEI7OztBQUNBLFFBQUlsRSxJQUFJb0MsUUFBSixLQUFpQixPQUFqQixJQUE0QnBDLElBQUlvQyxRQUFKLEtBQWlCLEdBQWpELEVBQXVEO0FBQ25EcEMsVUFBSW9DLFFBQUosR0FBZSxLQUFmO0FBQ0g7QUFDSjtBQUNKO0FBR0Q7Ozs7Ozs7O0FBTU8sU0FBU21DLEdBQVQsQ0FBY2pCLElBQWQsRUFBb0JwRSxLQUFwQixFQUE0QjtBQUMvQmMsTUFBS3NELElBQUwsSUFBY3BFLEtBQWQ7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R0Q7O0FBRUE7O0FBS0E7O0FBRUE7O0FBS0E7QUFDQSxJQUFJc0YsYUFBYSxFQUFqQixDLENBRUE7O0FBQ0EsSUFBSUMsb0JBQW9CLENBQUMsQ0FBekIsQyxDQUVBOztBQUNBLElBQUlDLGlCQUFpQixFQUFyQixDLENBRUE7O0FBQ0EsSUFBSUMsV0FBVyxLQUFmLEMsQ0FFQTs7QUFDQSxJQUFJcEUsZUFBZSxLQUFuQixDLENBRUE7O0FBQ0EsSUFBSXFFLFlBQVloTCxTQUFTRyxjQUFULENBQXlCLGlCQUF6QixDQUFoQixDLENBRUE7O0FBQ0EsSUFBSThLLFNBQVMsQ0FBYixDLENBRUE7O0FBQ0EsSUFBSXhELGdCQUFnQixLQUFwQixDLENBRUE7O0FBQ0EsSUFBSXlELGFBQWFsTCxTQUFTRyxjQUFULENBQXlCLGtCQUF6QixDQUFqQixDLENBRUE7O0FBQ0EsSUFBSWdMLGFBQWFuTCxTQUFTRyxjQUFULENBQXlCLFdBQXpCLENBQWpCLEMsQ0FFQTtBQUNBOztBQUNBLElBQUlpTCxzQkFBc0IsSUFBSUMsV0FBSixDQUFpQixnQkFBakIsQ0FBMUI7QUFHQTs7Ozs7Ozs7QUFPQSxTQUFTQyxZQUFULENBQXVCQyxLQUF2QixFQUE4QkMsU0FBOUIsRUFBeUNDLGVBQXpDLEVBQTJEO0FBQ3ZELE1BQU0vSCxTQUFTZ0ksa0JBQWdCL0wsR0FBaEIsQ0FBcUI4TCxlQUFyQixDQUFmOztBQUNBLE1BQU1FLGdCQUFnQjNMLFNBQVNDLGFBQVQsQ0FBd0IsS0FBeEIsQ0FBdEI7QUFDQSxNQUFNMkwsYUFBYTVMLFNBQVNDLGFBQVQsQ0FBd0IsTUFBeEIsQ0FBbkI7QUFDQSxNQUFNNEwsY0FBYzdMLFNBQVNDLGFBQVQsQ0FBd0IsTUFBeEIsQ0FBcEIsQ0FKdUQsQ0FNdkQ7O0FBQ0EsTUFBTTZMLHFCQUFxQjlMLFNBQVNxRixzQkFBVCxDQUFpQyxnQkFBakMsQ0FBM0I7O0FBRUEsT0FBSyxJQUFJdkksSUFBSWdQLG1CQUFtQjlPLE1BQW5CLEdBQTRCLENBQXpDLEVBQTRDRixLQUFLLENBQWpELEVBQW9ELEVBQUVBLENBQXRELEVBQTBEO0FBQ3REZ1AsdUJBQW9CaFAsQ0FBcEIsRUFBd0JpUCxTQUF4QixDQUFrQzVDLE1BQWxDLENBQTBDLE1BQTFDO0FBQ0g7O0FBRUR3QyxnQkFBY2hMLFNBQWQsR0FBMEIsZ0JBQTFCO0FBQ0FpTCxhQUFXakwsU0FBWCxHQUF1QixlQUF2QjtBQUNBa0wsY0FBWWxMLFNBQVosR0FBd0IsY0FBeEI7QUFFQWlMLGFBQVd0TCxTQUFYLEdBQXVCaUwsS0FBdkI7QUFDQU0sY0FBWXZMLFNBQVosR0FBd0JrTCxTQUF4QjtBQUVBRyxnQkFBY25MLFdBQWQsQ0FBMkJvTCxVQUEzQjtBQUNBRCxnQkFBY25MLFdBQWQsQ0FBMkJxTCxXQUEzQjtBQUVBbkksU0FBT2xELFdBQVAsQ0FBb0JtTCxhQUFwQjtBQUNIO0FBR0Q7Ozs7Ozs7QUFLQSxTQUFTSyxpQkFBVCxDQUE0QkMsS0FBNUIsRUFBb0M7QUFDaEMsTUFBTUMsVUFBVXJCLGlCQUFoQjtBQUNBLE1BQU1zQixjQUFjRCxVQUFVRCxLQUE5Qjs7QUFFQSxNQUFJQyxZQUFZLENBQUMsQ0FBakIsRUFBcUI7QUFDakJwQixxQkFBaUJFLFVBQVUxRixLQUEzQjtBQUNILEdBTitCLENBUWhDOzs7QUFDQSxNQUFJNkcsY0FBY3ZCLFdBQVc1TixNQUF6QixJQUFtQ21QLGVBQWUsQ0FBdEQsRUFBMEQ7QUFDdERuQixjQUFVMUYsS0FBVixHQUFrQnNGLFdBQVl1QixXQUFaLENBQWxCO0FBQ0F0Qix3QkFBb0JzQixXQUFwQjtBQUNILEdBSEQsTUFJSyxJQUFJQSxnQkFBZ0IsQ0FBQyxDQUFyQixFQUF5QjtBQUMxQm5CLGNBQVUxRixLQUFWLEdBQWtCd0YsY0FBbEI7QUFDQUQsd0JBQW9Cc0IsV0FBcEI7QUFDSDtBQUNKO0FBR0Q7Ozs7O0FBR08sU0FBU0MsV0FBVCxHQUF1QjtBQUMxQnBCLFlBQVV2SixLQUFWLENBQWdCNEssS0FBaEIsR0FBMEIsaUJBQVcsQ0FBWCxFQUFlQyxXQUFmLEdBQTZCckIsTUFBN0IsR0FBc0MsQ0FBeEMsR0FBOEMsSUFBdEU7QUFDSDtBQUdEOzs7OztBQUdBLFNBQVNzQixlQUFULEdBQTJCO0FBQ3ZCLE1BQU1DLFNBQVMsaUJBQVcsQ0FBWCxDQUFmO0FBQ0EsTUFBTUMsYUFBYSxpQkFBVyxDQUFYLENBQW5CO0FBQ0EsTUFBTUMsUUFBUUMsZUFBZ0JILE1BQWhCLENBQWQ7QUFDQSxNQUFNekUsWUFBWSxDQUFDakssT0FBT2tLLFdBQVAsSUFBc0JoSSxTQUFTOEgsZUFBVCxDQUF5QkcsU0FBaEQsS0FBOERqSSxTQUFTOEgsZUFBVCxDQUF5QkksU0FBekIsSUFBc0MsQ0FBcEcsQ0FBbEI7QUFDQSxNQUFNMEUscUJBQXFCLElBQTNCOztBQUVBLE9BQUssSUFBSTlQLElBQUksQ0FBYixFQUFnQkEsSUFBSTRQLE1BQU0xUCxNQUExQixFQUFrQyxFQUFFRixDQUFwQyxFQUF3QztBQUNwQyxRQUFJOFAsbUJBQW1CN0ksSUFBbkIsQ0FBeUIySSxNQUFPNVAsQ0FBUCxFQUFXK1AsV0FBcEMsQ0FBSixFQUF3RDtBQUNwRCxVQUFJQyxlQUFlSixNQUFPNVAsQ0FBUCxFQUFXMkQsVUFBWCxDQUFzQnNNLHFCQUF0QixHQUE4Q0MsR0FBOUMsR0FBb0RsUCxPQUFPMkssV0FBUCxHQUFxQixDQUE1Rjs7QUFFQSxVQUFJZ0UsVUFBSixFQUFpQjtBQUNiSyx3QkFBZ0JMLFdBQVdNLHFCQUFYLEdBQW1DRSxNQUFuRDtBQUNIOztBQUVELFVBQUlsRixZQUFZK0UsWUFBaEIsRUFBK0I7QUFDM0JoUCxlQUFPb1AsUUFBUCxDQUFpQixDQUFqQixFQUFvQkosWUFBcEI7QUFDSDs7QUFDRDtBQUNIO0FBQ0o7QUFDSjtBQUdEOzs7Ozs7Ozs7O0FBUUEsU0FBU0gsY0FBVCxDQUF5QlEsSUFBekIsRUFBZ0M7QUFDNUIsTUFBSUMsTUFBTSxFQUFWOztBQUVBLE9BQUtELE9BQU9BLEtBQUtFLFVBQWpCLEVBQTZCRixJQUE3QixFQUFtQ0EsT0FBT0EsS0FBS0csV0FBL0MsRUFBNkQ7QUFDekQsUUFBSUgsS0FBS0ksUUFBTCxLQUFrQixDQUF0QixFQUEwQjtBQUN0QkgsVUFBSWhRLElBQUosQ0FBVStQLElBQVY7QUFDSCxLQUZELE1BR0s7QUFDREMsWUFBTUEsSUFBSUksTUFBSixDQUFZYixlQUFnQlEsSUFBaEIsQ0FBWixDQUFOO0FBQ0g7QUFDSjs7QUFFRCxTQUFPQyxHQUFQO0FBQ0g7QUFHRDs7Ozs7OztBQUtPLFNBQVN6TixHQUFULEdBQWU7QUFDbEIsU0FBT3dMLFVBQVA7QUFDSDtBQUdEOzs7OztBQUdPLFNBQVNzQyxJQUFULEdBQWdCO0FBQ25CLHNCQUFjLFFBQWQ7O0FBRUEsTUFBSXRDLFdBQVcxSyxVQUFmLEVBQTRCO0FBQ3hCMEssZUFBVzFLLFVBQVgsQ0FBc0JDLFdBQXRCLENBQW1DeUssVUFBbkM7QUFDSDtBQUNKOztBQUFBO0FBR0Q7Ozs7QUFHTyxJQUFNdUMsVUFBVTtBQUNuQjs7Ozs7O0FBTUFDLE9BQUssYUFBVUMsR0FBVixFQUFnQjtBQUNqQixRQUFJQSxHQUFKLEVBQVU7QUFDTmhELGlCQUFXeE4sSUFBWCxDQUFpQndRLEdBQWpCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7O0FBRUQsV0FBTyxLQUFQO0FBQ0gsR0Fka0I7O0FBaUJuQjs7O0FBR0FDLFNBQU8saUJBQVc7QUFDZGpELGlCQUFhLEVBQWI7QUFDSCxHQXRCa0I7O0FBeUJuQjs7Ozs7QUFLQWpMLE9BQUssZUFBVztBQUNaLFdBQU9pTCxXQUFXbk0sS0FBWCxFQUFQO0FBQ0gsR0FoQ2tCOztBQW1DbkI7Ozs7Ozs7QUFPQTBLLFVBQVEsZ0JBQVV4TCxLQUFWLEVBQWtCO0FBQ3RCLFFBQUlpTixXQUFXNU4sTUFBWCxLQUFzQixDQUExQixFQUE4QjtBQUMxQixhQUFPLEtBQVA7QUFDSDs7QUFFRCxRQUFJLE9BQU9XLEtBQVAsS0FBaUIsUUFBckIsRUFBZ0M7QUFDNUJpTixpQkFBV2tELEdBQVg7QUFDQSxhQUFPLElBQVA7QUFDSDs7QUFFRCxRQUFJblEsUUFBUSxDQUFSLElBQWFBLFNBQVNpTixXQUFXNU4sTUFBckMsRUFBOEM7QUFDMUMsYUFBTyxLQUFQO0FBQ0g7O0FBRUQ0TixlQUFXL00sTUFBWCxDQUFtQkYsS0FBbkIsRUFBMEIsQ0FBMUI7QUFDSCxHQXpEa0I7O0FBNERuQjs7Ozs7O0FBTUFnTixPQUFLLGFBQVVvRCxVQUFWLEVBQXVCO0FBQ3hCbkQsaUJBQWFtRCxXQUFXdFAsS0FBWCxFQUFiO0FBQ0g7QUFwRWtCLENBQWhCLEMsQ0F3RVA7OztBQUNBLElBQU11UCw4QkFBOEIsQ0FDaEM7QUFDSUMsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQURnQyxFQUtoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQUxnQyxFQU1oQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQU5nQyxFQU9oQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQVBnQyxFQVFoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQVJnQyxFQVNoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQVRnQyxFQVVoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQVZnQyxFQVdoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBWGdDLEVBZWhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0FmZ0MsRUFtQmhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0FuQmdDLEVBdUJoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQXZCZ0MsRUF3QmhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBeEJnQyxFQXlCaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQXpCZ0MsRUE2QmhDO0FBQUNELFFBQU0sR0FBUDtBQUFZQyxXQUFTO0FBQXJCLENBN0JnQyxFQThCaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQTlCZ0MsRUFrQ2hDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0FsQ2dDLEVBc0NoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBdENnQyxFQTBDaEM7QUFBQ0QsUUFBTSxHQUFQO0FBQVlDLFdBQVM7QUFBckIsQ0ExQ2dDLEVBMkNoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBM0NnQyxFQStDaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQS9DZ0MsRUFtRGhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBbkRnQyxFQW9EaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FwRGdDLEVBcURoQztBQUFDRCxRQUFNLEdBQVA7QUFBWUMsV0FBUztBQUFyQixDQXJEZ0MsRUFzRGhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0F0RGdDLEVBMERoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQTFEZ0MsRUEyRGhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBM0RnQyxFQTREaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQTVEZ0MsRUFnRWhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBaEVnQyxFQWlFaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FqRWdDLEVBa0VoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQWxFZ0MsRUFtRWhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBbkVnQyxFQW9FaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FwRWdDLEVBcUVoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBckVnQyxFQXlFaEM7QUFBQ0QsUUFBTSxHQUFQO0FBQVlDLFdBQVM7QUFBckIsQ0F6RWdDLEVBMEVoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBMUVnQyxFQThFaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQTlFZ0MsRUFrRmhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0FsRmdDLEVBc0ZoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQXRGZ0MsRUF1RmhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0F2RmdDLEVBMkZoQztBQUFDRCxRQUFNLEdBQVA7QUFBWUMsV0FBUztBQUFyQixDQTNGZ0MsRUE0RmhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBNUZnQyxFQTZGaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQTdGZ0MsRUFpR2hDO0FBQUNELFFBQU0sR0FBUDtBQUFZQyxXQUFTO0FBQXJCLENBakdnQyxFQWtHaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQWxHZ0MsRUFzR2hDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0F0R2dDLEVBMEdoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBMUdnQyxFQThHaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0E5R2dDLEVBK0doQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQS9HZ0MsRUFnSGhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBaEhnQyxFQWlIaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FqSGdDLEVBa0hoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQWxIZ0MsRUFtSGhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBbkhnQyxFQW9IaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQXBIZ0MsRUF3SGhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0F4SGdDLEVBNEhoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBNUhnQyxFQWdJaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FoSWdDLEVBaUloQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBaklnQyxFQXFJaEM7QUFBQ0QsUUFBTSxHQUFQO0FBQVlDLFdBQVM7QUFBckIsQ0FySWdDLEVBc0loQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBdElnQyxFQTBJaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQTFJZ0MsRUE4SWhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBOUlnQyxFQStJaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQS9JZ0MsRUFtSmhDO0FBQUNELFFBQU0sR0FBUDtBQUFZQyxXQUFTO0FBQXJCLENBbkpnQyxFQW9KaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQXBKZ0MsRUF3SmhDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0F4SmdDLEVBNEpoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQTVKZ0MsRUE2SmhDO0FBQUNELFFBQU0sR0FBUDtBQUFZQyxXQUFTO0FBQXJCLENBN0pnQyxFQThKaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQTlKZ0MsRUFrS2hDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBbEtnQyxFQW1LaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQW5LZ0MsRUF1S2hDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBdktnQyxFQXdLaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0F4S2dDLEVBeUtoQztBQUFDRCxRQUFNLElBQVA7QUFBYUMsV0FBUztBQUF0QixDQXpLZ0MsRUEwS2hDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0ExS2dDLEVBOEtoQztBQUFDRCxRQUFNLEdBQVA7QUFBWUMsV0FBUztBQUFyQixDQTlLZ0MsRUErS2hDO0FBQ0lELFFBQU0sR0FEVjtBQUVJQyxXQUFTO0FBRmIsQ0EvS2dDLEVBbUxoQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBbkxnQyxFQXVMaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQXZMZ0MsRUEyTGhDO0FBQUNELFFBQU0sSUFBUDtBQUFhQyxXQUFTO0FBQXRCLENBM0xnQyxFQTRMaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQTVMZ0MsRUFnTWhDO0FBQUNELFFBQU0sR0FBUDtBQUFZQyxXQUFTO0FBQXJCLENBaE1nQyxFQWlNaEM7QUFBQ0QsUUFBTSxJQUFQO0FBQWFDLFdBQVM7QUFBdEIsQ0FqTWdDLEVBa01oQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBbE1nQyxFQXNNaEM7QUFBQ0QsUUFBTSxHQUFQO0FBQVlDLFdBQVM7QUFBckIsQ0F0TWdDLEVBdU1oQztBQUNJRCxRQUFNLEdBRFY7QUFFSUMsV0FBUztBQUZiLENBdk1nQyxFQTJNaEM7QUFDSUQsUUFBTSxHQURWO0FBRUlDLFdBQVM7QUFGYixDQTNNZ0MsQ0FBcEM7QUFpTkEsSUFBTUMsZ0JBQWdCLEVBQXRCOztBQUVBLEtBQUssSUFBSXJSLElBQUksQ0FBYixFQUFnQkEsSUFBSWtSLDRCQUE0QmhSLE1BQWhELEVBQXdERixHQUF4RCxFQUE4RDtBQUMxRCxNQUFNb1IsVUFBVUYsNEJBQTZCbFIsQ0FBN0IsRUFBaUNvUixPQUFqRDs7QUFDQSxPQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsUUFBUWxSLE1BQTVCLEVBQW9Db1IsR0FBcEMsRUFBMEM7QUFDdENELGtCQUFlRCxRQUFTRSxDQUFULENBQWYsSUFBZ0NKLDRCQUE4QmxSLENBQTlCLEVBQWtDbVIsSUFBbEU7QUFDSDtBQUNKO0FBR0Q7Ozs7O0FBR08sU0FBU3ZMLElBQVQsQ0FBZTBELEdBQWYsRUFBcUI7QUFDeEI7QUFDQU8saUJBQWUsQ0FBQyxDQUFDUCxJQUFJTyxZQUFyQixDQUZ3QixDQUl4Qjs7QUFDQXdFLGFBQVdwRSxnQkFBWCxDQUE2QixRQUE3QixFQUF1QyxVQUFVdkQsQ0FBVixFQUFjO0FBQ2pEQSxNQUFFNkssY0FBRixHQURpRCxDQUdqRDtBQUNBOztBQUNBLFFBQUksQ0FBQ2pJLElBQUlRLE9BQVQsRUFBbUI7QUFDZm9FLGdCQUFVMUYsS0FBVixHQUFrQjBGLFVBQVUxRixLQUFWLENBQWdCZ0osT0FBaEIsQ0FBeUIsbUJBQXpCLEVBQThDLFVBQVVqTixDQUFWLEVBQWM7QUFDMUUsZUFBTzhNLGNBQWU5TSxDQUFmLEtBQXNCQSxDQUE3QjtBQUNILE9BRmlCLENBQWxCO0FBR0gsS0FUZ0QsQ0FXakQ7OztBQUNBLFFBQUkySixVQUFVMUYsS0FBVixLQUFvQnNGLFdBQVksQ0FBWixDQUFwQixJQUF1QyxLQUFLN0csSUFBTCxDQUFXaUgsVUFBVTFGLEtBQXJCLENBQTNDLEVBQTBFO0FBQ3RFc0YsaUJBQVcyRCxPQUFYLENBQW9CdkQsVUFBVTFGLEtBQTlCO0FBQ0gsS0FkZ0QsQ0FnQmpEOzs7QUFDQXVGLHdCQUFvQixDQUFDLENBQXJCLENBakJpRCxDQW1CakQ7O0FBQ0EsUUFBSSxDQUFDbEUsWUFBRCxJQUFpQixFQUFFbkQsRUFBRWdMLE1BQUYsSUFBWWhMLEVBQUVnTCxNQUFGLENBQVNDLE1BQXZCLENBQXJCLEVBQXNEO0FBQ2xEbkQsbUJBQWNvRCxPQUFPL08sR0FBUCxFQUFkLEVBQTRCcUwsVUFBVTFGLEtBQXRDLEVBQTZDLENBQTdDO0FBQ0gsS0F0QmdELENBd0JqRDs7O0FBQ0F2SCxXQUFPNEssS0FBUCxDQUNJLGVBREosRUFFSSxNQUZKLEVBR0ksQ0FBRSxRQUFGLENBSEosRUFJSSxDQUFFcUMsVUFBVTFGLEtBQVYsR0FBa0IsSUFBcEIsQ0FKSixFQXpCaUQsQ0FnQ2pEOztBQUNBMEYsY0FBVTFGLEtBQVYsR0FBa0IsRUFBbEI7QUFDQW1JO0FBQ0gsR0FuQ0QsRUFtQ0csS0FuQ0gsRUFMd0IsQ0EwQ3hCOztBQUNBekMsWUFBVWpFLGdCQUFWLENBQTRCLFNBQTVCLEVBQXVDLFVBQVV2RCxDQUFWLEVBQWM7QUFDakQsUUFBTW9FLFVBQVVwRSxFQUFFbUwsS0FBRixJQUFXbkwsRUFBRW9FLE9BQTdCLENBRGlELENBR2pEOztBQUNBLFFBQUlBLFlBQVksRUFBaEIsRUFBcUI7QUFDckI7QUFDSW9FLDBCQUFtQixDQUFuQjtBQUNBeEksVUFBRTZLLGNBQUY7QUFDSDs7QUFDRCxRQUFJekcsWUFBWSxFQUFoQixFQUFxQjtBQUNyQjtBQUNJb0UsMEJBQW1CLENBQUMsQ0FBcEI7QUFDQXhJLFVBQUU2SyxjQUFGO0FBQ0g7QUFDSixHQWRELEVBY0csS0FkSCxFQTNDd0IsQ0EyRHhCOztBQUNBLE1BQUksa0JBQWtCdlEsTUFBdEIsRUFBK0I7QUFDM0I7QUFDQSxRQUFJOFEsYUFBYSxJQUFqQjtBQUVBNUQsY0FBVWpFLGdCQUFWLENBQTRCLE9BQTVCLEVBQXFDLFlBQVc7QUFDNUMsVUFBSSxDQUFDNkgsVUFBTCxFQUFrQjtBQUNkNU8saUJBQVNPLElBQVQsQ0FBY3dMLFNBQWQsQ0FBd0I0QixHQUF4QixDQUE2QixXQUE3QjtBQUNILE9BRkQsTUFHSztBQUNEaUIscUJBQWEsS0FBYjtBQUNIO0FBQ0osS0FQRDtBQVNBNUQsY0FBVWpFLGdCQUFWLENBQTRCLE1BQTVCLEVBQW9DLFlBQVc7QUFDM0MvRyxlQUFTTyxJQUFULENBQWN3TCxTQUFkLENBQXdCNUMsTUFBeEIsQ0FBZ0MsV0FBaEM7QUFDSCxLQUZEO0FBR0gsR0E1RXVCLENBOEV4Qjs7O0FBQ0FyTCxTQUFPaUosZ0JBQVAsQ0FBeUIsUUFBekIsRUFBbUNxRixXQUFuQyxFQUFnRCxLQUFoRCxFQS9Fd0IsQ0FpRnhCOztBQUNBakIsYUFBVzFLLFVBQVgsQ0FBc0JDLFdBQXRCLENBQW1DeUssVUFBbkM7QUFDSDs7QUFBQTtBQUdEOzs7O0FBR08sU0FBUzBELE9BQVQsR0FBbUI7QUFDdEIsU0FBTywwQkFBbUIsU0FBMUI7QUFDSDs7QUFBQTtBQUdNLElBQU1ILFNBQVM7QUFDbEI7Ozs7OztBQU1BL08sT0FBSyxlQUFXO0FBQ1osUUFBSWdILFlBQUosRUFBbUI7QUFDZixhQUFPLEVBQVA7QUFDSDs7QUFFRCxXQUFPdUUsV0FBVzVLLFNBQWxCO0FBQ0gsR0FiaUI7O0FBZWxCOzs7Ozs7O0FBT0FxSyxPQUFLLGFBQVUrRCxNQUFWLEVBQW1CO0FBQ3BCLFFBQUksQ0FBQy9ILFlBQUwsRUFBb0I7QUFDaEJ1RSxpQkFBVzVLLFNBQVgsR0FBdUJvTyxNQUF2QjtBQUNIO0FBQ0o7QUExQmlCLENBQWY7QUE2QlA7Ozs7Ozs7OztBQU1PLFNBQVNJLGFBQVQsQ0FBd0J0TCxDQUF4QixFQUE0QjtBQUMvQixNQUFNcUUsTUFBTTdILFNBQVM4SCxlQUFyQjtBQUNBLE1BQU1DLFlBQVksQ0FBQ2pLLE9BQU9rSyxXQUFQLElBQXNCSCxJQUFJSSxTQUEzQixLQUF5Q0osSUFBSUssU0FBSixJQUFpQixDQUExRCxDQUFsQjs7QUFDQSxNQUFNNkcsWUFBWWpSLE9BQU9rUixZQUFQLElBQ1YsWUFBVztBQUNQLFdBQU9oUCxTQUFTK08sU0FBVCxHQUFxQi9PLFNBQVMrTyxTQUFULENBQW1CRSxXQUFuQixHQUFpQzdRLElBQXRELEdBQTZELEVBQXBFO0FBQ0gsR0FIVDs7QUFJQSxNQUFJOFEsaUJBQWlCcFIsT0FBTzJLLFdBQTVCOztBQUVBLE1BQUksaUJBQVcsQ0FBWCxDQUFKLEVBQXFCO0FBQ2pCeUcscUJBQWlCcFIsT0FBTzJLLFdBQVAsR0FBcUIvSSxNQUFNNUIsTUFBTixDQUFhNkIsR0FBYixDQUFrQixDQUFsQixFQUFzQm9OLHFCQUF0QixHQUE4Q0UsTUFBcEY7QUFDSCxHQVg4QixDQWEvQjtBQUNBOzs7QUFDQSxNQUFJekosTUFBTUEsRUFBRTJMLE9BQUYsS0FBYyxFQUFkLElBQW9CM0wsRUFBRW9FLE9BQUYsR0FBWSxHQUFoQyxJQUF1Q3BFLEVBQUUyRSxNQUF6QyxJQUFtRDNFLEVBQUU0RSxPQUFyRCxJQUFnRTVFLEVBQUU2RSxPQUF4RSxDQUFKLEVBQXVGO0FBQ25GO0FBQ0gsR0FqQjhCLENBbUIvQjtBQUNBOzs7QUFDQSxNQUFJLENBQUM3RSxDQUFELElBQU9BLEVBQUVFLE1BQUYsSUFBWUYsRUFBRUUsTUFBRixDQUFTMEwsUUFBVCxLQUFzQixPQUFsQyxJQUE2Q0wsWUFBWTNMLFFBQVosT0FBMkIsRUFBbkYsRUFBeUY7QUFDckY7QUFDQSxRQUFJMkUsWUFBWWpLLE9BQU8ySyxXQUFuQixHQUFpQ3pJLFNBQVNPLElBQVQsQ0FBY21JLFlBQWQsR0FBNkIsRUFBbEUsRUFBdUU7QUFDbkUsVUFBSXlDLFdBQVcxSyxVQUFmLEVBQTRCO0FBQ3hCM0MsZUFBT29QLFFBQVAsQ0FBaUIsQ0FBakIsRUFBb0IsR0FBcEIsRUFEd0IsQ0FHeEI7O0FBQ0FsQyxrQkFBVXFFLEtBQVYsR0FKd0IsQ0FNeEI7O0FBQ0EsWUFBSTdMLEtBQUtBLEVBQUU4TCxlQUFQLElBQTBCdFAsU0FBU3VQLGFBQVQsS0FBMkJ2RSxTQUF6RCxFQUFxRTtBQUNqRXhILFlBQUU4TCxlQUFGO0FBQ0g7QUFDSjtBQUNKLEtBWkQsTUFhSztBQUNEO0FBQ0EsVUFBSXZFLFFBQUosRUFBZTtBQUNYak4sZUFBT29QLFFBQVAsQ0FBaUIsQ0FBakIsRUFBb0JuRixZQUFZbUgsY0FBWixHQUE2QixFQUFqRCxFQURXLENBR1g7O0FBQ0EsWUFBSS9ELFdBQVcxSyxVQUFYLElBQXlCc0gsWUFBWW1ILGNBQVosR0FBNkJwUixPQUFPMkssV0FBcEMsR0FBa0QsRUFBbEQsSUFBd0R6SSxTQUFTTyxJQUFULENBQWNtSSxZQUFuRyxFQUFrSDtBQUM5R3NDLG9CQUFVcUUsS0FBVjtBQUNIOztBQUVELFlBQUk3TCxLQUFLQSxFQUFFNkssY0FBWCxFQUE0QjtBQUN4QjdLLFlBQUU2SyxjQUFGO0FBQ0g7QUFDSixPQVhELENBWUE7QUFaQSxXQWFLO0FBQ0Q5QjtBQUNILFNBakJBLENBbUJEOzs7QUFDQSxVQUFJL0ksS0FBS0EsRUFBRW1HLElBQUYsS0FBVyxTQUFoQixJQUE2QixDQUFDbkcsRUFBRW1MLEtBQUYsSUFBV25MLEVBQUVvRSxPQUFkLE1BQTJCLENBQTVELEVBQWdFO0FBQzVELGVBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDSjs7QUFFREgsa0JBQWdCLEtBQWhCO0FBQ0g7O0FBQUE7QUFHRDs7OztBQUdPLFNBQVMrSCxXQUFULENBQXNCaEwsTUFBdEIsRUFBK0I7QUFDbEN1RyxhQUFXdkcsTUFBWDtBQUNIO0FBR0Q7Ozs7O0FBR08sU0FBU2lMLElBQVQsR0FBZ0I7QUFDbkIsc0JBQWMsU0FBZDtBQUNBO0FBQ0EsbUJBQVcsQ0FBWCxFQUFlalAsV0FBZixDQUE0QjJLLFVBQTVCLEVBSG1CLENBS25COztBQUNBLE1BQUl4RSxZQUFKLEVBQW1CO0FBQ2ZzRSxhQUFTRCxVQUFVMEUsVUFBVixHQUF1QixpQkFBVyxDQUFYLEVBQWVBLFVBQS9DO0FBQ0gsR0FGRCxNQUdLO0FBQ0R6RSxhQUFTQyxXQUFXeUUsV0FBcEI7QUFDSDs7QUFFRHZELGdCQWJtQixDQWVuQjs7QUFDQTBDO0FBQ0EvRCxhQUFXLElBQVgsQ0FqQm1CLENBbUJuQjs7QUFDQXpJLGtCQUFTc04sSUFBVDs7QUFFQXpFLGFBQVczRixhQUFYLENBQTBCNEYsbUJBQTFCO0FBQ0g7O0FBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1c0JEOztBQUNBOztBQUVBOztBQU9BOztBQU1BLElBQUl2RixtQkFBbUIsRUFBdkI7QUFHQTs7OztBQUdBLFNBQVNILFdBQVQsR0FBd0I7QUFDcEIsTUFBSTtBQUNBLFFBQU1DLFFBQVFoRSxHQUFHaUUsUUFBSCxDQUNWQyxtQkFBbUIsU0FEVCxFQUVWO0FBQUNoRSxnQkFBVTtBQUFYLEtBRlUsQ0FBZDtBQUtBLFdBQU9pRSxLQUFLQyxLQUFMLENBQVlKLEtBQVosQ0FBUDtBQUNILEdBUEQsQ0FRQSxPQUFNbkMsQ0FBTixFQUFTO0FBQ0wsV0FBTyxJQUFQO0FBQ0g7QUFDSjs7QUFHTSxJQUFNbEIsV0FBVztBQUNwQjs7O0FBR0E2RyxVQUFRLGtCQUFXO0FBQ2YsUUFBSTtBQUNBeEgsU0FBR2tPLE1BQUgsQ0FBV2hLLGdCQUFYO0FBQ0gsS0FGRCxDQUdBLE9BQU1yQyxDQUFOLEVBQVMsQ0FBRTs7QUFFWCxRQUFJO0FBQ0E3QixTQUFHa08sTUFBSCxDQUFXaEssbUJBQW1CLFNBQTlCO0FBQ0gsS0FGRCxDQUdBLE9BQU1yQyxDQUFOLEVBQVMsQ0FBRTtBQUNkLEdBZG1COztBQWdCcEI7Ozs7QUFJQWhCLFdBQVMsbUJBQVc7QUFDaEIsUUFBSTtBQUNBO0FBQ0E7QUFDQWIsU0FBR21PLElBQUgsQ0FBU2pLLGdCQUFUO0FBRUE5SCxhQUFPNEssS0FBUCxDQUNJLDhCQURKLEVBRUksTUFGSixFQUdJLENBQUUsUUFBRixDQUhKLEVBSUksQ0FBRTlDLGdCQUFGLENBSko7QUFNSCxLQVhELENBWUEsT0FBTXJDLENBQU4sRUFBUyxDQUNMO0FBQ0g7QUFDSixHQXBDbUI7QUFzQ3BCb00sUUFBTSxnQkFBVztBQUNiLFFBQUksQ0FBQyxrQkFBVyxVQUFYLENBQUwsRUFBK0I7QUFDM0I7QUFDSCxLQUhZLENBS2I7OztBQUNBLFFBQU1HLHNCQUFzQmhTLE9BQU80SyxLQUFQLENBQ3hCLHFCQUR3QixFQUV4QixLQUZ3QixFQUd4QixDQUFFLFFBQUYsQ0FId0IsRUFJeEIsQ0FBRTlDLGdCQUFGLENBSndCLENBQTVCLENBTmEsQ0FhYjs7QUFDQSxRQUFJa0ssbUJBQUosRUFBMEI7QUFDdEJwTyxTQUFHQyxTQUFILENBQ0lpRSxtQkFBbUIsU0FEdkIsRUFFSUMsS0FBS2tLLFNBQUwsQ0FBZ0J0USxNQUFNNUIsTUFBTixDQUFhbVMsVUFBYixFQUFoQixDQUZKLEVBR0k7QUFBQ3BPLGtCQUFVO0FBQVgsT0FISjtBQUtIO0FBQ0osR0EzRG1COztBQTZEcEI7Ozs7QUFJQVUsV0FBUyxpQkFBVTRDLFFBQVYsRUFBcUI7QUFDMUJVLHVCQUFtQlYsUUFBbkI7QUFDSDtBQW5FbUIsQ0FBakI7QUF1RVA7Ozs7OztBQUdPLFNBQVMrSyxTQUFULEdBQXFCO0FBQ3hCLE1BQU1DLGFBQWF6SyxhQUFuQjtBQUNBLE1BQUkwSyxXQUFKOztBQUVBLE1BQUksQ0FBQ0QsVUFBTCxFQUFrQjtBQUNkO0FBQ0gsR0FOdUIsQ0FReEI7OztBQUNBLE1BQUksa0JBQVcsV0FBWCxDQUFKLEVBQStCO0FBQzNCQyxrQkFBY0QsV0FBV0UsY0FBWCxDQUEwQnJULE1BQXhDO0FBQ0gsR0FGRCxNQUdLO0FBQ0RvVCxrQkFBYyxDQUFkO0FBQ0g7O0FBRUQ7O0FBRUEsT0FBSyxJQUFJdFQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJc1QsV0FBcEIsRUFBaUMsRUFBRXRULENBQW5DLEVBQXVDO0FBQ25DLHdCQUNJQSxDQURKLEVBRUlxVCxXQUFXRyxnQkFBWCxDQUE2QnhULENBQTdCLEVBQWlDeVQsSUFGckMsRUFHSUosV0FBV0csZ0JBQVgsQ0FBNkJ4VCxDQUE3QixFQUFpQ2tRLEdBSHJDLEVBSUltRCxXQUFXRyxnQkFBWCxDQUE2QnhULENBQTdCLEVBQWlDMFQsS0FKckMsRUFLSUwsV0FBV0csZ0JBQVgsQ0FBNkJ4VCxDQUE3QixFQUFpQzJULE1BTHJDO0FBT0g7O0FBRURDLGVBQU1sTyxPQUFOLENBQWUyTixXQUFXUSxhQUExQjs7QUFDQSxzQkFBY1IsV0FBV1MsSUFBekI7O0FBQ0FDLG1CQUFlck8sT0FBZixDQUF3QjJOLFdBQVdXLFFBQW5DOztBQUVBLE1BQUlYLFdBQVdZLEtBQWYsRUFBdUI7QUFDbkIvUSxhQUFTK1EsS0FBVCxHQUFpQlosV0FBV1ksS0FBNUI7QUFDSDs7QUFFRCxPQUFLLElBQUlqVSxLQUFJLENBQWIsRUFBZ0JBLEtBQUlxVCxXQUFXRSxjQUFYLENBQTBCclQsTUFBOUMsRUFBc0QsRUFBRUYsRUFBeEQsRUFBNEQ7QUFDeEQscUJBQVdBLEVBQVgsRUFBZXdELFNBQWYsR0FBMkI2UCxXQUFXRSxjQUFYLENBQTJCdlQsRUFBM0IsQ0FBM0I7QUFDQSxzQkFBWTRDLE1BQU01QixNQUFOLENBQWE2QixHQUFiLENBQWtCN0MsRUFBbEIsQ0FBWixFQUFtQ0EsRUFBbkM7QUFDSDs7QUFFRCxvQkFBWWtELFNBQVNPLElBQXJCLEVBQTJCLENBQTNCLEVBekN3QixDQTJDeEI7QUFDQTs7QUFDQXhDLFNBQU80SyxLQUFQLENBQ0ksaUJBREosRUFFSSxNQUZKLEVBR0ksQ0FBRSxLQUFGLENBSEosRUFJSSxDQUFFd0gsV0FBV1MsSUFBWCxDQUFpQixDQUFqQixFQUFxQkksUUFBdkIsQ0FKSjtBQU9BalQsU0FBTzRLLEtBQVAsQ0FDSSxtQkFESixFQUVJLE1BRkosRUFHSSxDQUFFLEtBQUYsRUFBUyxLQUFULENBSEosRUFJSSxDQUFFd0gsV0FBV1EsYUFBWCxDQUEwQixDQUExQixFQUE4QnZTLElBQWhDLEVBQXNDK1IsV0FBV1EsYUFBWCxDQUEwQixDQUExQixFQUE4Qk0sVUFBcEUsQ0FKSixFQXBEd0IsQ0EyRHhCOztBQUNBdkQsa0JBQVEvQyxHQUFSLENBQWF3RixXQUFXdkYsVUFBWCxJQUF5QixFQUF0QyxFQTVEd0IsQ0E4RHhCOzs7QUFDQTlNLFNBQU9vUCxRQUFQLENBQWlCLENBQWpCLEVBQW9CLEdBQXBCO0FBQ0E7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMRDs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBLElBQUl5RCxnQkFBZ0IsQ0FBRU8sY0FBZSxDQUFmLENBQUYsQ0FBcEIsQyxDQUVBOztBQUNBLElBQUlDLGNBQWMsQ0FBRUMsZUFBRixDQUFsQixDLENBRUE7O0FBQ0EsSUFBSXZLLGVBQWUsSUFBbkIsQyxDQUVBOztBQUNBLElBQUl3SyxtQkFBbUIsS0FBdkI7QUFHQTs7Ozs7OztBQU1BLFNBQVNILGFBQVQsQ0FBd0JoUyxZQUF4QixFQUF1QztBQUNuQyxNQUFJQSxpQkFBaUIsQ0FBckIsRUFBeUI7QUFBRztBQUN4QixXQUFPO0FBQ0hkLFlBQU0sRUFESDtBQUVINlMsa0JBQVk7QUFGVCxLQUFQO0FBSUgsR0FMRCxNQU1LO0FBQ0QsV0FBTztBQUNIN1MsWUFBTSxDQURIO0FBRUg2UyxrQkFBWTtBQUZULEtBQVA7QUFJSDtBQUNKO0FBR0Q7Ozs7O0FBR0EsU0FBU0csYUFBVCxHQUF5QjtBQUNyQixTQUFPO0FBQ0hFLFVBQU0sS0FESDtBQUVIQyxZQUFRLEtBRkw7QUFHSEMsZUFBVyxLQUhSO0FBSUhDLGtCQUFjLElBSlg7QUFLSFQsY0FBVSxDQUxQLENBS2E7O0FBTGIsR0FBUDtBQU9IO0FBR0Q7Ozs7Ozs7O0FBTU8sU0FBU3BNLEtBQVQsQ0FBZ0I3RSxJQUFoQixFQUFzQmIsWUFBdEIsRUFBcUM7QUFDeEMsTUFBTXdTLGFBQWEsRUFBbkI7QUFDQSxNQUFNek0sU0FBUyxtQkFBWTBNLG9CQUFaLENBQWtDLE9BQWxDLEVBQTZDLENBQTdDLENBQWY7QUFDQSxNQUFNQyxpQkFBa0IxUyxpQkFBaUIsQ0FBekM7O0FBRUEsTUFBSSxDQUFDeVIsY0FBZXpSLFlBQWYsQ0FBTCxFQUFxQztBQUNqQ3lSLGtCQUFlelIsWUFBZixJQUFnQ2dTLGNBQWVoUyxZQUFmLENBQWhDO0FBQ0g7O0FBRUQsTUFBSTJILFlBQUosRUFBbUI7QUFDZjZLLGVBQVd0VSxJQUFYLENBQWlCLGVBQWV1VCxjQUFlelIsWUFBZixFQUE4QmQsSUFBOUQ7QUFDQXNULGVBQVd0VSxJQUFYLENBQWlCLGFBQWF1VCxjQUFlelIsWUFBZixFQUE4QitSLFVBQTVEO0FBQ0gsR0FadUMsQ0FjeEM7OztBQUNBbFIsT0FBS1ksU0FBTCxHQUFpQlosS0FBS1ksU0FBTCxDQUFlMk4sT0FBZixDQUF3Qix1QkFBeEIsRUFBaUQsRUFBakQsQ0FBakI7QUFDQXZPLE9BQUtnTSxTQUFMLENBQWU1QyxNQUFmLENBQXVCLGtCQUF2Qjs7QUFFQSxNQUFJeUksY0FBSixFQUFxQjtBQUNqQjNNLFdBQU90RSxTQUFQLEdBQW1Cc0UsT0FBT3RFLFNBQVAsQ0FBaUIyTixPQUFqQixDQUEwQix1QkFBMUIsRUFBbUQsRUFBbkQsQ0FBbkI7QUFDQXJKLFdBQU84RyxTQUFQLENBQWlCNUMsTUFBakIsQ0FBeUIsa0JBQXpCO0FBQ0g7O0FBRUQsTUFBSSxDQUFDZ0ksWUFBYWpTLFlBQWIsQ0FBTCxFQUFtQztBQUMvQmlTLGdCQUFhalMsWUFBYixJQUE4QmtTLGVBQTlCO0FBQ0g7O0FBRUQsT0FBSyxJQUFJUyxJQUFULElBQWlCVixZQUFhalMsWUFBYixDQUFqQixFQUErQztBQUMzQyxRQUFJbVMsb0JBQW9CUSxTQUFTLGNBQWpDLEVBQWtEO0FBQzlDO0FBQ0g7O0FBRUQsUUFBSVYsWUFBYWpTLFlBQWIsRUFBNEJxTCxjQUE1QixDQUE0Q3NILElBQTVDLENBQUosRUFBeUQ7QUFDckQ5UixXQUFLZ00sU0FBTCxDQUFlNUMsTUFBZixDQUF1QixVQUFVMEksSUFBakM7O0FBRUEsVUFBSUQsY0FBSixFQUFxQjtBQUNqQjNNLGVBQU84RyxTQUFQLENBQWlCNUMsTUFBakIsQ0FBeUIsVUFBVTBJLElBQW5DO0FBQ0g7O0FBRUQsVUFBSVYsWUFBYWpTLFlBQWIsRUFBNkIyUyxJQUE3QixDQUFKLEVBQTBDO0FBQ3RDSCxtQkFBV3RVLElBQVgsQ0FBaUIsVUFBVXlVLElBQTNCO0FBQ0g7QUFDSjtBQUNKOztBQUVELE1BQUksQ0FBQ1IsZ0JBQUQsSUFBcUJGLFlBQWFqUyxZQUFiLEVBQTRCcUwsY0FBNUIsQ0FBNEMsY0FBNUMsQ0FBckIsSUFBcUYsQ0FBQzRHLFlBQWFqUyxZQUFiLEVBQTRCdVMsWUFBdEgsRUFBcUk7QUFDaklDLGVBQVd0VSxJQUFYLENBQWlCLGtCQUFqQjtBQUNIOztBQUVELE9BQUssSUFBSU4sSUFBSSxDQUFiLEVBQWdCQSxJQUFJNFUsV0FBVzFVLE1BQS9CLEVBQXVDLEVBQUVGLENBQXpDLEVBQTZDO0FBQ3pDaUQsU0FBS2dNLFNBQUwsQ0FBZTRCLEdBQWYsQ0FBb0IrRCxXQUFZNVUsQ0FBWixDQUFwQjs7QUFFQSxRQUFJOFUsY0FBSixFQUFxQjtBQUNqQjNNLGFBQU84RyxTQUFQLENBQWlCNEIsR0FBakIsQ0FBc0IrRCxXQUFZNVUsQ0FBWixDQUF0QjtBQUNIO0FBQ0o7QUFDSjs7QUFBQTtBQUdNLElBQU00VCxRQUFRO0FBQ2pCL1EsT0FBSyxlQUFXO0FBQ1osV0FBT2dSLGFBQVA7QUFDSCxHQUhnQjtBQUtqQm5PLFdBQVMsaUJBQVVzUCxRQUFWLEVBQXFCO0FBQzFCbkIsb0JBQWdCbUIsUUFBaEI7QUFDSCxHQVBnQjs7QUFTakI7Ozs7Ozs7QUFPQW5ILE9BQUssYUFBVWdFLEtBQVYsRUFBaUIrQixLQUFqQixFQUF3QnhSLFlBQXhCLEVBQXVDO0FBQ3hDLFFBQUksQ0FBQ3lSLGNBQWV6UixZQUFmLENBQUwsRUFBcUM7QUFDakN5UixvQkFBZXpSLFlBQWYsSUFBZ0NnUyxjQUFlaFMsWUFBZixDQUFoQztBQUNIOztBQUVELFFBQUl5UixjQUFlelIsWUFBZixFQUErQnlQLEtBQS9CLE1BQTJDK0IsS0FBL0MsRUFBdUQ7QUFDbkQ7QUFDQTtBQUNIOztBQUVELHVCQUFPeFIsWUFBUDtBQUVBeVIsa0JBQWV6UixZQUFmLEVBQStCeVAsS0FBL0IsSUFBeUMrQixLQUF6QztBQUNIO0FBN0JnQixDQUFkOztBQWlDQSxJQUFNRSxPQUFPO0FBQ2hCalIsT0FBSyxlQUFXO0FBQ1osV0FBT3dSLFdBQVA7QUFDSDtBQUhlLENBQWI7OztBQU9BLFNBQVN6TyxJQUFULENBQWUrRCxPQUFmLEVBQXlCO0FBQzVCNEsscUJBQW1CLENBQUM1SyxRQUFRSyxnQkFBNUI7QUFDQUQsaUJBQWVKLFFBQVFJLFlBQXZCO0FBQ0g7QUFHRDs7Ozs7OztBQUtPLFNBQVNyRSxPQUFULENBQWtCc1AsUUFBbEIsRUFBNkI7QUFDaENYLGdCQUFjVyxRQUFkO0FBQ0g7QUFHRDs7Ozs7Ozs7O0FBT08sU0FBU25ILEdBQVQsQ0FBY2hCLElBQWQsRUFBb0JyRSxLQUFwQixFQUEyQnBHLFlBQTNCLEVBQTBDO0FBQzdDLHFCQUFPQSxZQUFQO0FBQ0FpUyxjQUFhalMsWUFBYixFQUE2QnlLLElBQTdCLElBQXNDckUsS0FBdEM7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeExEOztBQUFFLGFBQVk7QUFDYjtBQUVBOzs7Ozs7OztBQVFBOztBQUNBOztBQUdBOzs7Ozs7OztBQU9BLFdBQVMwQixTQUFULENBQW1CK0ssS0FBbkIsRUFBMEJ0TCxPQUExQixFQUFtQztBQUNsQyxRQUFJdUwsVUFBSjtBQUVBdkwsY0FBVUEsV0FBVyxFQUFyQjtBQUVBOzs7Ozs7QUFLQSxTQUFLd0wsYUFBTCxHQUFxQixLQUFyQjtBQUdBOzs7Ozs7QUFLQSxTQUFLQyxrQkFBTCxHQUEwQixDQUExQjtBQUdBOzs7Ozs7QUFLQSxTQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBR0E7Ozs7OztBQUtBLFNBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFHQTs7Ozs7O0FBS0EsU0FBS0MsV0FBTCxHQUFtQixDQUFuQjtBQUdBOzs7Ozs7QUFLQSxTQUFLQyxtQkFBTCxHQUEyQixDQUEzQjtBQUdBOzs7Ozs7QUFLQSxTQUFLQyxhQUFMLEdBQXFCOUwsUUFBUThMLGFBQVIsSUFBeUIsRUFBOUM7QUFHQTs7Ozs7O0FBS0EsU0FBS1IsS0FBTCxHQUFhQSxLQUFiO0FBRUE7Ozs7OztBQUtBLFNBQUtTLFFBQUwsR0FBZ0IvTCxRQUFRK0wsUUFBUixJQUFvQixHQUFwQztBQUVBOzs7Ozs7QUFLQSxTQUFLQyxVQUFMLEdBQWtCaE0sUUFBUWdNLFVBQVIsSUFBc0IsR0FBeEM7O0FBRUEsUUFBSXpMLFVBQVUwTCxTQUFWLENBQW9CWCxLQUFwQixDQUFKLEVBQWdDO0FBQy9CO0FBQ0EsS0FwRmlDLENBc0ZsQzs7O0FBQ0EsYUFBU1ksSUFBVCxDQUFjQyxNQUFkLEVBQXNCQyxPQUF0QixFQUErQjtBQUM5QixhQUFPLFlBQVc7QUFBRSxlQUFPRCxPQUFPaE8sS0FBUCxDQUFhaU8sT0FBYixFQUFzQjdVLFNBQXRCLENBQVA7QUFBMEMsT0FBOUQ7QUFDQTs7QUFHRCxRQUFJOFUsVUFBVSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLGNBQXZCLEVBQXVDLGFBQXZDLEVBQXNELFlBQXRELEVBQW9FLGVBQXBFLENBQWQ7QUFDQSxRQUFJRCxVQUFVLElBQWQ7O0FBQ0EsU0FBSyxJQUFJL1YsSUFBSSxDQUFSLEVBQVdpVyxJQUFJRCxRQUFROVYsTUFBNUIsRUFBb0NGLElBQUlpVyxDQUF4QyxFQUEyQ2pXLEdBQTNDLEVBQWdEO0FBQy9DK1YsY0FBUUMsUUFBUWhXLENBQVIsQ0FBUixJQUFzQjZWLEtBQUtFLFFBQVFDLFFBQVFoVyxDQUFSLENBQVIsQ0FBTCxFQUEwQitWLE9BQTFCLENBQXRCO0FBQ0EsS0FoR2lDLENBa0dsQzs7O0FBQ0EsUUFBSUcsZUFBSixFQUFxQjtBQUNwQmpCLFlBQU1oTCxnQkFBTixDQUF1QixXQUF2QixFQUFvQyxLQUFLa00sT0FBekMsRUFBa0QsSUFBbEQ7QUFDQWxCLFlBQU1oTCxnQkFBTixDQUF1QixXQUF2QixFQUFvQyxLQUFLa00sT0FBekMsRUFBa0QsSUFBbEQ7QUFDQWxCLFlBQU1oTCxnQkFBTixDQUF1QixTQUF2QixFQUFrQyxLQUFLa00sT0FBdkMsRUFBZ0QsSUFBaEQ7QUFDQTs7QUFFRGxCLFVBQU1oTCxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxLQUFLbU0sT0FBckMsRUFBOEMsSUFBOUM7QUFDQW5CLFVBQU1oTCxnQkFBTixDQUF1QixZQUF2QixFQUFxQyxLQUFLb00sWUFBMUMsRUFBd0QsS0FBeEQ7QUFDQXBCLFVBQU1oTCxnQkFBTixDQUF1QixXQUF2QixFQUFvQyxLQUFLcU0sV0FBekMsRUFBc0QsS0FBdEQ7QUFDQXJCLFVBQU1oTCxnQkFBTixDQUF1QixVQUF2QixFQUFtQyxLQUFLc00sVUFBeEMsRUFBb0QsS0FBcEQ7QUFDQXRCLFVBQU1oTCxnQkFBTixDQUF1QixhQUF2QixFQUFzQyxLQUFLdU0sYUFBM0MsRUFBMEQsS0FBMUQsRUE3R2tDLENBK0dsQztBQUNBO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDN04sTUFBTWpILFNBQU4sQ0FBZ0IrVSx3QkFBckIsRUFBK0M7QUFDOUN4QixZQUFNeUIsbUJBQU4sR0FBNEIsVUFBUzdKLElBQVQsRUFBZThKLFFBQWYsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQzdELFlBQUlDLE1BQU1DLEtBQUtwVixTQUFMLENBQWVnVixtQkFBekI7O0FBQ0EsWUFBSTdKLFNBQVMsT0FBYixFQUFzQjtBQUNyQmdLLGNBQUlqVixJQUFKLENBQVNxVCxLQUFULEVBQWdCcEksSUFBaEIsRUFBc0I4SixTQUFTSSxRQUFULElBQXFCSixRQUEzQyxFQUFxREMsT0FBckQ7QUFDQSxTQUZELE1BRU87QUFDTkMsY0FBSWpWLElBQUosQ0FBU3FULEtBQVQsRUFBZ0JwSSxJQUFoQixFQUFzQjhKLFFBQXRCLEVBQWdDQyxPQUFoQztBQUNBO0FBQ0QsT0FQRDs7QUFTQTNCLFlBQU1oTCxnQkFBTixHQUF5QixVQUFTNEMsSUFBVCxFQUFlOEosUUFBZixFQUF5QkMsT0FBekIsRUFBa0M7QUFDMUQsWUFBSUksTUFBTUYsS0FBS3BWLFNBQUwsQ0FBZXVJLGdCQUF6Qjs7QUFDQSxZQUFJNEMsU0FBUyxPQUFiLEVBQXNCO0FBQ3JCbUssY0FBSXBWLElBQUosQ0FBU3FULEtBQVQsRUFBZ0JwSSxJQUFoQixFQUFzQjhKLFNBQVNJLFFBQVQsS0FBc0JKLFNBQVNJLFFBQVQsR0FBb0IsVUFBU0UsS0FBVCxFQUFnQjtBQUMvRSxnQkFBSSxDQUFDQSxNQUFNQyxrQkFBWCxFQUErQjtBQUM5QlAsdUJBQVNNLEtBQVQ7QUFDQTtBQUNELFdBSnFCLENBQXRCLEVBSUlMLE9BSko7QUFLQSxTQU5ELE1BTU87QUFDTkksY0FBSXBWLElBQUosQ0FBU3FULEtBQVQsRUFBZ0JwSSxJQUFoQixFQUFzQjhKLFFBQXRCLEVBQWdDQyxPQUFoQztBQUNBO0FBQ0QsT0FYRDtBQVlBLEtBeElpQyxDQTBJbEM7QUFDQTtBQUNBOzs7QUFDQSxRQUFJLE9BQU8zQixNQUFNa0MsT0FBYixLQUF5QixVQUE3QixFQUF5QztBQUV4QztBQUNBO0FBQ0FqQyxtQkFBYUQsTUFBTWtDLE9BQW5CO0FBQ0FsQyxZQUFNaEwsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBU2dOLEtBQVQsRUFBZ0I7QUFDL0MvQixtQkFBVytCLEtBQVg7QUFDQSxPQUZELEVBRUcsS0FGSDtBQUdBaEMsWUFBTWtDLE9BQU4sR0FBZ0IsSUFBaEI7QUFDQTtBQUNEO0FBRUQ7Ozs7Ozs7QUFLQSxNQUFJQyx1QkFBdUJDLFVBQVVDLFNBQVYsQ0FBb0J4VyxPQUFwQixDQUE0QixlQUE1QixLQUFnRCxDQUEzRTtBQUVBOzs7Ozs7QUFLQSxNQUFJb1Ysa0JBQWtCbUIsVUFBVUMsU0FBVixDQUFvQnhXLE9BQXBCLENBQTRCLFNBQTVCLElBQXlDLENBQXpDLElBQThDLENBQUNzVyxvQkFBckU7QUFHQTs7Ozs7O0FBS0EsTUFBSUcsY0FBYyxpQkFBaUJ0USxJQUFqQixDQUFzQm9RLFVBQVVDLFNBQWhDLEtBQThDLENBQUNGLG9CQUFqRTtBQUdBOzs7Ozs7QUFLQSxNQUFJSSxlQUFlRCxlQUFnQixlQUFELENBQWtCdFEsSUFBbEIsQ0FBdUJvUSxVQUFVQyxTQUFqQyxDQUFsQztBQUdBOzs7Ozs7QUFLQSxNQUFJRywyQkFBMkJGLGVBQWdCLGFBQUQsQ0FBZ0J0USxJQUFoQixDQUFxQm9RLFVBQVVDLFNBQS9CLENBQTlDO0FBRUE7Ozs7OztBQUtBLE1BQUlJLHVCQUF1QkwsVUFBVUMsU0FBVixDQUFvQnhXLE9BQXBCLENBQTRCLE1BQTVCLElBQXNDLENBQWpFO0FBRUE7Ozs7Ozs7QUFNQW9KLFlBQVV4SSxTQUFWLENBQW9CaVcsVUFBcEIsR0FBaUMsVUFBUy9RLE1BQVQsRUFBaUI7QUFDakQsWUFBUUEsT0FBTzBMLFFBQVAsQ0FBZ0JsRixXQUFoQixFQUFSO0FBRUE7QUFDQSxXQUFLLFFBQUw7QUFDQSxXQUFLLFFBQUw7QUFDQSxXQUFLLFVBQUw7QUFDQyxZQUFJeEcsT0FBT2dSLFFBQVgsRUFBcUI7QUFDcEIsaUJBQU8sSUFBUDtBQUNBOztBQUVEOztBQUNELFdBQUssT0FBTDtBQUVDO0FBQ0EsWUFBS0wsZUFBZTNRLE9BQU9pRyxJQUFQLEtBQWdCLE1BQWhDLElBQTJDakcsT0FBT2dSLFFBQXRELEVBQWdFO0FBQy9ELGlCQUFPLElBQVA7QUFDQTs7QUFFRDs7QUFDRCxXQUFLLE9BQUw7QUFDQSxXQUFLLFFBQUwsQ0FwQkEsQ0FvQmU7O0FBQ2YsV0FBSyxPQUFMO0FBQ0MsZUFBTyxJQUFQO0FBdEJEOztBQXlCQSxXQUFRLGdCQUFELENBQW1CM1EsSUFBbkIsQ0FBd0JMLE9BQU8vQyxTQUEvQixDQUFQO0FBQ0EsR0EzQkQ7QUE4QkE7Ozs7Ozs7O0FBTUFxRyxZQUFVeEksU0FBVixDQUFvQm1XLFVBQXBCLEdBQWlDLFVBQVNqUixNQUFULEVBQWlCO0FBQ2pELFlBQVFBLE9BQU8wTCxRQUFQLENBQWdCbEYsV0FBaEIsRUFBUjtBQUNBLFdBQUssVUFBTDtBQUNDLGVBQU8sSUFBUDs7QUFDRCxXQUFLLFFBQUw7QUFDQyxlQUFPLENBQUM4SSxlQUFSOztBQUNELFdBQUssT0FBTDtBQUNDLGdCQUFRdFAsT0FBT2lHLElBQWY7QUFDQSxlQUFLLFFBQUw7QUFDQSxlQUFLLFVBQUw7QUFDQSxlQUFLLE1BQUw7QUFDQSxlQUFLLE9BQUw7QUFDQSxlQUFLLE9BQUw7QUFDQSxlQUFLLFFBQUw7QUFDQyxtQkFBTyxLQUFQO0FBUEQsU0FERCxDQVdDOzs7QUFDQSxlQUFPLENBQUNqRyxPQUFPZ1IsUUFBUixJQUFvQixDQUFDaFIsT0FBT2tSLFFBQW5DOztBQUNEO0FBQ0MsZUFBUSxnQkFBRCxDQUFtQjdRLElBQW5CLENBQXdCTCxPQUFPL0MsU0FBL0IsQ0FBUDtBQW5CRDtBQXFCQSxHQXRCRDtBQXlCQTs7Ozs7Ozs7QUFNQXFHLFlBQVV4SSxTQUFWLENBQW9CcVcsU0FBcEIsR0FBZ0MsVUFBUzFDLGFBQVQsRUFBd0I0QixLQUF4QixFQUErQjtBQUM5RCxRQUFJZSxVQUFKLEVBQWdCQyxLQUFoQixDQUQ4RCxDQUc5RDs7QUFDQSxRQUFJL1UsU0FBU3VQLGFBQVQsSUFBMEJ2UCxTQUFTdVAsYUFBVCxLQUEyQjRDLGFBQXpELEVBQXdFO0FBQ3ZFblMsZUFBU3VQLGFBQVQsQ0FBdUJ5RixJQUF2QjtBQUNBOztBQUVERCxZQUFRaEIsTUFBTWtCLGNBQU4sQ0FBcUIsQ0FBckIsQ0FBUixDQVI4RCxDQVU5RDs7QUFDQUgsaUJBQWE5VSxTQUFTa1YsV0FBVCxDQUFxQixhQUFyQixDQUFiO0FBQ0FKLGVBQVdLLGNBQVgsQ0FBMEIsS0FBS0Msa0JBQUwsQ0FBd0JqRCxhQUF4QixDQUExQixFQUFrRSxJQUFsRSxFQUF3RSxJQUF4RSxFQUE4RXJVLE1BQTlFLEVBQXNGLENBQXRGLEVBQXlGaVgsTUFBTU0sT0FBL0YsRUFBd0dOLE1BQU1PLE9BQTlHLEVBQXVIUCxNQUFNUSxPQUE3SCxFQUFzSVIsTUFBTVMsT0FBNUksRUFBcUosS0FBckosRUFBNEosS0FBNUosRUFBbUssS0FBbkssRUFBMEssS0FBMUssRUFBaUwsQ0FBakwsRUFBb0wsSUFBcEw7QUFDQVYsZUFBV1csbUJBQVgsR0FBaUMsSUFBakM7QUFDQXRELGtCQUFjM00sYUFBZCxDQUE0QnNQLFVBQTVCO0FBQ0EsR0FmRDs7QUFpQkE5TixZQUFVeEksU0FBVixDQUFvQjRXLGtCQUFwQixHQUF5QyxVQUFTakQsYUFBVCxFQUF3QjtBQUVoRTtBQUNBLFFBQUlhLG1CQUFtQmIsY0FBY3VELE9BQWQsQ0FBc0J4TCxXQUF0QixPQUF3QyxRQUEvRCxFQUF5RTtBQUN4RSxhQUFPLFdBQVA7QUFDQTs7QUFFRCxXQUFPLE9BQVA7QUFDQSxHQVJEO0FBV0E7Ozs7O0FBR0FsRCxZQUFVeEksU0FBVixDQUFvQjZRLEtBQXBCLEdBQTRCLFVBQVM4QyxhQUFULEVBQXdCO0FBQ25ELFFBQUluVixNQUFKLENBRG1ELENBR25EOztBQUNBLFFBQUlxWCxlQUFlbEMsY0FBY3dELGlCQUE3QixJQUFrRHhELGNBQWN4SSxJQUFkLENBQW1CL0wsT0FBbkIsQ0FBMkIsTUFBM0IsTUFBdUMsQ0FBekYsSUFBOEZ1VSxjQUFjeEksSUFBZCxLQUF1QixNQUFySCxJQUErSHdJLGNBQWN4SSxJQUFkLEtBQXVCLE9BQTFKLEVBQW1LO0FBQ2xLM00sZUFBU21WLGNBQWM3TSxLQUFkLENBQW9CdEksTUFBN0I7QUFDQW1WLG9CQUFjd0QsaUJBQWQsQ0FBZ0MzWSxNQUFoQyxFQUF3Q0EsTUFBeEM7QUFDQSxLQUhELE1BR087QUFDTm1WLG9CQUFjOUMsS0FBZDtBQUNBO0FBQ0QsR0FWRDtBQWFBOzs7Ozs7O0FBS0FySSxZQUFVeEksU0FBVixDQUFvQm9YLGtCQUFwQixHQUF5QyxVQUFTekQsYUFBVCxFQUF3QjtBQUNoRSxRQUFJMEQsWUFBSixFQUFrQkMsYUFBbEI7QUFFQUQsbUJBQWUxRCxjQUFjNEQscUJBQTdCLENBSGdFLENBS2hFO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDRixZQUFELElBQWlCLENBQUNBLGFBQWFHLFFBQWIsQ0FBc0I3RCxhQUF0QixDQUF0QixFQUE0RDtBQUMzRDJELHNCQUFnQjNELGFBQWhCOztBQUNBLFNBQUc7QUFDRixZQUFJMkQsY0FBY0csWUFBZCxHQUE2QkgsY0FBY0ksWUFBL0MsRUFBNkQ7QUFDNURMLHlCQUFlQyxhQUFmO0FBQ0EzRCx3QkFBYzRELHFCQUFkLEdBQXNDRCxhQUF0QztBQUNBO0FBQ0E7O0FBRURBLHdCQUFnQkEsY0FBY0EsYUFBOUI7QUFDQSxPQVJELFFBUVNBLGFBUlQ7QUFTQSxLQWxCK0QsQ0FvQmhFOzs7QUFDQSxRQUFJRCxZQUFKLEVBQWtCO0FBQ2pCQSxtQkFBYU0sc0JBQWIsR0FBc0NOLGFBQWE1TixTQUFuRDtBQUNBO0FBQ0QsR0F4QkQ7QUEyQkE7Ozs7OztBQUlBakIsWUFBVXhJLFNBQVYsQ0FBb0I0WCwrQkFBcEIsR0FBc0QsVUFBU0MsV0FBVCxFQUFzQjtBQUUzRTtBQUNBLFFBQUlBLFlBQVk5SSxRQUFaLEtBQXlCcUcsS0FBSzBDLFNBQWxDLEVBQTZDO0FBQzVDLGFBQU9ELFlBQVk1VixVQUFuQjtBQUNBOztBQUVELFdBQU80VixXQUFQO0FBQ0EsR0FSRDtBQVdBOzs7Ozs7OztBQU1BclAsWUFBVXhJLFNBQVYsQ0FBb0IyVSxZQUFwQixHQUFtQyxVQUFTWSxLQUFULEVBQWdCO0FBQ2xELFFBQUk1QixhQUFKLEVBQW1CNEMsS0FBbkIsRUFBMEJoRyxTQUExQixDQURrRCxDQUdsRDs7QUFDQSxRQUFJZ0YsTUFBTXdDLGFBQU4sQ0FBb0J2WixNQUFwQixHQUE2QixDQUFqQyxFQUFvQztBQUNuQyxhQUFPLElBQVA7QUFDQTs7QUFFRG1WLG9CQUFnQixLQUFLaUUsK0JBQUwsQ0FBcUNyQyxNQUFNclEsTUFBM0MsQ0FBaEI7QUFDQXFSLFlBQVFoQixNQUFNd0MsYUFBTixDQUFvQixDQUFwQixDQUFSOztBQUVBLFFBQUlsQyxXQUFKLEVBQWlCO0FBRWhCO0FBQ0F0RixrQkFBWWpSLE9BQU9rUixZQUFQLEVBQVo7O0FBQ0EsVUFBSUQsVUFBVXlILFVBQVYsSUFBd0IsQ0FBQ3pILFVBQVUwSCxXQUF2QyxFQUFvRDtBQUNuRCxlQUFPLElBQVA7QUFDQTs7QUFFRCxVQUFJLENBQUNuQyxZQUFMLEVBQW1CO0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJUyxNQUFNMkIsVUFBTixJQUFvQjNCLE1BQU0yQixVQUFOLEtBQXFCLEtBQUtwRSxtQkFBbEQsRUFBdUU7QUFDdEV5QixnQkFBTTFGLGNBQU47QUFDQSxpQkFBTyxLQUFQO0FBQ0E7O0FBRUQsYUFBS2lFLG1CQUFMLEdBQTJCeUMsTUFBTTJCLFVBQWpDLENBZmtCLENBaUJsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsYUFBS2Qsa0JBQUwsQ0FBd0J6RCxhQUF4QjtBQUNBO0FBQ0Q7O0FBRUQsU0FBS0YsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCNkIsTUFBTTRDLFNBQWhDO0FBQ0EsU0FBS3hFLGFBQUwsR0FBcUJBLGFBQXJCO0FBRUEsU0FBS0MsV0FBTCxHQUFtQjJDLE1BQU02QixLQUF6QjtBQUNBLFNBQUt2RSxXQUFMLEdBQW1CMEMsTUFBTThCLEtBQXpCLENBbkRrRCxDQXFEbEQ7O0FBQ0EsUUFBSzlDLE1BQU00QyxTQUFOLEdBQWtCLEtBQUtHLGFBQXhCLEdBQXlDLEtBQUt0RSxRQUFsRCxFQUE0RDtBQUMzRHVCLFlBQU0xRixjQUFOO0FBQ0E7O0FBRUQsV0FBTyxJQUFQO0FBQ0EsR0EzREQ7QUE4REE7Ozs7Ozs7O0FBTUFySCxZQUFVeEksU0FBVixDQUFvQnVZLGFBQXBCLEdBQW9DLFVBQVNoRCxLQUFULEVBQWdCO0FBQ25ELFFBQUlnQixRQUFRaEIsTUFBTWtCLGNBQU4sQ0FBcUIsQ0FBckIsQ0FBWjtBQUFBLFFBQXFDK0IsV0FBVyxLQUFLekUsYUFBckQ7O0FBRUEsUUFBSW5ULEtBQUs2WCxHQUFMLENBQVNsQyxNQUFNNkIsS0FBTixHQUFjLEtBQUt4RSxXQUE1QixJQUEyQzRFLFFBQTNDLElBQXVENVgsS0FBSzZYLEdBQUwsQ0FBU2xDLE1BQU04QixLQUFOLEdBQWMsS0FBS3hFLFdBQTVCLElBQTJDMkUsUUFBdEcsRUFBZ0g7QUFDL0csYUFBTyxJQUFQO0FBQ0E7O0FBRUQsV0FBTyxLQUFQO0FBQ0EsR0FSRDtBQVdBOzs7Ozs7OztBQU1BaFEsWUFBVXhJLFNBQVYsQ0FBb0I0VSxXQUFwQixHQUFrQyxVQUFTVyxLQUFULEVBQWdCO0FBQ2pELFFBQUksQ0FBQyxLQUFLOUIsYUFBVixFQUF5QjtBQUN4QixhQUFPLElBQVA7QUFDQSxLQUhnRCxDQUtqRDs7O0FBQ0EsUUFBSSxLQUFLRSxhQUFMLEtBQXVCLEtBQUtpRSwrQkFBTCxDQUFxQ3JDLE1BQU1yUSxNQUEzQyxDQUF2QixJQUE2RSxLQUFLcVQsYUFBTCxDQUFtQmhELEtBQW5CLENBQWpGLEVBQTRHO0FBQzNHLFdBQUs5QixhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsV0FBS0UsYUFBTCxHQUFxQixJQUFyQjtBQUNBOztBQUVELFdBQU8sSUFBUDtBQUNBLEdBWkQ7QUFlQTs7Ozs7Ozs7QUFNQW5MLFlBQVV4SSxTQUFWLENBQW9CMFksV0FBcEIsR0FBa0MsVUFBU0MsWUFBVCxFQUF1QjtBQUV4RDtBQUNBLFFBQUlBLGFBQWFDLE9BQWIsS0FBeUIzWCxTQUE3QixFQUF3QztBQUN2QyxhQUFPMFgsYUFBYUMsT0FBcEI7QUFDQSxLQUx1RCxDQU94RDs7O0FBQ0EsUUFBSUQsYUFBYUUsT0FBakIsRUFBMEI7QUFDekIsYUFBT3JYLFNBQVNHLGNBQVQsQ0FBd0JnWCxhQUFhRSxPQUFyQyxDQUFQO0FBQ0EsS0FWdUQsQ0FZeEQ7QUFDQTs7O0FBQ0EsV0FBT0YsYUFBYUcsYUFBYixDQUEyQixxRkFBM0IsQ0FBUDtBQUNBLEdBZkQ7QUFrQkE7Ozs7Ozs7O0FBTUF0USxZQUFVeEksU0FBVixDQUFvQjZVLFVBQXBCLEdBQWlDLFVBQVNVLEtBQVQsRUFBZ0I7QUFDaEQsUUFBSXdELFVBQUo7QUFBQSxRQUFnQnJGLGtCQUFoQjtBQUFBLFFBQW9Dc0YsYUFBcEM7QUFBQSxRQUFtRDNCLFlBQW5EO0FBQUEsUUFBaUVkLEtBQWpFO0FBQUEsUUFBd0U1QyxnQkFBZ0IsS0FBS0EsYUFBN0Y7O0FBRUEsUUFBSSxDQUFDLEtBQUtGLGFBQVYsRUFBeUI7QUFDeEIsYUFBTyxJQUFQO0FBQ0EsS0FMK0MsQ0FPaEQ7OztBQUNBLFFBQUs4QixNQUFNNEMsU0FBTixHQUFrQixLQUFLRyxhQUF4QixHQUF5QyxLQUFLdEUsUUFBbEQsRUFBNEQ7QUFDM0QsV0FBS2lGLGVBQUwsR0FBdUIsSUFBdkI7QUFDQSxhQUFPLElBQVA7QUFDQTs7QUFFRCxRQUFLMUQsTUFBTTRDLFNBQU4sR0FBa0IsS0FBS3pFLGtCQUF4QixHQUE4QyxLQUFLTyxVQUF2RCxFQUFtRTtBQUNsRSxhQUFPLElBQVA7QUFDQSxLQWYrQyxDQWlCaEQ7OztBQUNBLFNBQUtnRixlQUFMLEdBQXVCLEtBQXZCO0FBRUEsU0FBS1gsYUFBTCxHQUFxQi9DLE1BQU00QyxTQUEzQjtBQUVBekUseUJBQXFCLEtBQUtBLGtCQUExQjtBQUNBLFNBQUtELGFBQUwsR0FBcUIsS0FBckI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixDQUExQixDQXhCZ0QsQ0EwQmhEO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQUlxQyx3QkFBSixFQUE4QjtBQUM3QlEsY0FBUWhCLE1BQU1rQixjQUFOLENBQXFCLENBQXJCLENBQVIsQ0FENkIsQ0FHN0I7O0FBQ0E5QyxzQkFBZ0JuUyxTQUFTMFgsZ0JBQVQsQ0FBMEIzQyxNQUFNNkIsS0FBTixHQUFjOVksT0FBTzZaLFdBQS9DLEVBQTRENUMsTUFBTThCLEtBQU4sR0FBYy9ZLE9BQU9rSyxXQUFqRixLQUFpR21LLGFBQWpIO0FBQ0FBLG9CQUFjNEQscUJBQWQsR0FBc0MsS0FBSzVELGFBQUwsQ0FBbUI0RCxxQkFBekQ7QUFDQTs7QUFFRHlCLG9CQUFnQnJGLGNBQWN1RCxPQUFkLENBQXNCeEwsV0FBdEIsRUFBaEI7O0FBQ0EsUUFBSXNOLGtCQUFrQixPQUF0QixFQUErQjtBQUM5QkQsbUJBQWEsS0FBS0wsV0FBTCxDQUFpQi9FLGFBQWpCLENBQWI7O0FBQ0EsVUFBSW9GLFVBQUosRUFBZ0I7QUFDZixhQUFLbEksS0FBTCxDQUFXOEMsYUFBWDs7QUFDQSxZQUFJYSxlQUFKLEVBQXFCO0FBQ3BCLGlCQUFPLEtBQVA7QUFDQTs7QUFFRGIsd0JBQWdCb0YsVUFBaEI7QUFDQTtBQUNELEtBVkQsTUFVTyxJQUFJLEtBQUs1QyxVQUFMLENBQWdCeEMsYUFBaEIsQ0FBSixFQUFvQztBQUUxQztBQUNBO0FBQ0EsVUFBSzRCLE1BQU00QyxTQUFOLEdBQWtCekUsa0JBQW5CLEdBQXlDLEdBQXpDLElBQWlEbUMsZUFBZXZXLE9BQU9rUCxHQUFQLEtBQWVsUCxNQUE5QixJQUF3QzBaLGtCQUFrQixPQUEvRyxFQUF5SDtBQUN4SCxhQUFLckYsYUFBTCxHQUFxQixJQUFyQjtBQUNBLGVBQU8sS0FBUDtBQUNBOztBQUVELFdBQUs5QyxLQUFMLENBQVc4QyxhQUFYO0FBQ0EsV0FBSzBDLFNBQUwsQ0FBZTFDLGFBQWYsRUFBOEI0QixLQUE5QixFQVYwQyxDQVkxQztBQUNBOztBQUNBLFVBQUksQ0FBQ00sV0FBRCxJQUFnQm1ELGtCQUFrQixRQUF0QyxFQUFnRDtBQUMvQyxhQUFLckYsYUFBTCxHQUFxQixJQUFyQjtBQUNBNEIsY0FBTTFGLGNBQU47QUFDQTs7QUFFRCxhQUFPLEtBQVA7QUFDQTs7QUFFRCxRQUFJZ0csZUFBZSxDQUFDQyxZQUFwQixFQUFrQztBQUVqQztBQUNBO0FBQ0F1QixxQkFBZTFELGNBQWM0RCxxQkFBN0I7O0FBQ0EsVUFBSUYsZ0JBQWdCQSxhQUFhTSxzQkFBYixLQUF3Q04sYUFBYTVOLFNBQXpFLEVBQW9GO0FBQ25GLGVBQU8sSUFBUDtBQUNBO0FBQ0QsS0EvRStDLENBaUZoRDtBQUNBOzs7QUFDQSxRQUFJLENBQUMsS0FBS3dNLFVBQUwsQ0FBZ0J0QyxhQUFoQixDQUFMLEVBQXFDO0FBQ3BDNEIsWUFBTTFGLGNBQU47QUFDQSxXQUFLd0csU0FBTCxDQUFlMUMsYUFBZixFQUE4QjRCLEtBQTlCO0FBQ0E7O0FBRUQsV0FBTyxLQUFQO0FBQ0EsR0F6RkQ7QUE0RkE7Ozs7Ozs7QUFLQS9NLFlBQVV4SSxTQUFWLENBQW9COFUsYUFBcEIsR0FBb0MsWUFBVztBQUM5QyxTQUFLckIsYUFBTCxHQUFxQixLQUFyQjtBQUNBLFNBQUtFLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxHQUhEO0FBTUE7Ozs7Ozs7O0FBTUFuTCxZQUFVeEksU0FBVixDQUFvQnlVLE9BQXBCLEdBQThCLFVBQVNjLEtBQVQsRUFBZ0I7QUFFN0M7QUFDQSxRQUFJLENBQUMsS0FBSzVCLGFBQVYsRUFBeUI7QUFDeEIsYUFBTyxJQUFQO0FBQ0E7O0FBRUQsUUFBSTRCLE1BQU0wQixtQkFBVixFQUErQjtBQUM5QixhQUFPLElBQVA7QUFDQSxLQVQ0QyxDQVc3Qzs7O0FBQ0EsUUFBSSxDQUFDMUIsTUFBTTZELFVBQVgsRUFBdUI7QUFDdEIsYUFBTyxJQUFQO0FBQ0EsS0FkNEMsQ0FnQjdDO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSSxDQUFDLEtBQUtuRCxVQUFMLENBQWdCLEtBQUt0QyxhQUFyQixDQUFELElBQXdDLEtBQUtzRixlQUFqRCxFQUFrRTtBQUVqRTtBQUNBLFVBQUkxRCxNQUFNUix3QkFBVixFQUFvQztBQUNuQ1EsY0FBTVIsd0JBQU47QUFDQSxPQUZELE1BRU87QUFFTjtBQUNBUSxjQUFNQyxrQkFBTixHQUEyQixJQUEzQjtBQUNBLE9BVGdFLENBV2pFOzs7QUFDQUQsWUFBTXpFLGVBQU47QUFDQXlFLFlBQU0xRixjQUFOO0FBRUEsYUFBTyxLQUFQO0FBQ0EsS0FuQzRDLENBcUM3Qzs7O0FBQ0EsV0FBTyxJQUFQO0FBQ0EsR0F2Q0Q7QUEwQ0E7Ozs7Ozs7Ozs7QUFRQXJILFlBQVV4SSxTQUFWLENBQW9CMFUsT0FBcEIsR0FBOEIsVUFBU2EsS0FBVCxFQUFnQjtBQUM3QyxRQUFJOEQsU0FBSixDQUQ2QyxDQUc3Qzs7QUFDQSxRQUFJLEtBQUs1RixhQUFULEVBQXdCO0FBQ3ZCLFdBQUtFLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxXQUFLRixhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsYUFBTyxJQUFQO0FBQ0EsS0FSNEMsQ0FVN0M7OztBQUNBLFFBQUk4QixNQUFNclEsTUFBTixDQUFhaUcsSUFBYixLQUFzQixRQUF0QixJQUFrQ29LLE1BQU12RixNQUFOLEtBQWlCLENBQXZELEVBQTBEO0FBQ3pELGFBQU8sSUFBUDtBQUNBOztBQUVEcUosZ0JBQVksS0FBSzVFLE9BQUwsQ0FBYWMsS0FBYixDQUFaLENBZjZDLENBaUI3Qzs7QUFDQSxRQUFJLENBQUM4RCxTQUFMLEVBQWdCO0FBQ2YsV0FBSzFGLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxLQXBCNEMsQ0FzQjdDOzs7QUFDQSxXQUFPMEYsU0FBUDtBQUNBLEdBeEJEO0FBMkJBOzs7Ozs7O0FBS0E3USxZQUFVeEksU0FBVixDQUFvQnNaLE9BQXBCLEdBQThCLFlBQVc7QUFDeEMsUUFBSS9GLFFBQVEsS0FBS0EsS0FBakI7O0FBRUEsUUFBSWlCLGVBQUosRUFBcUI7QUFDcEJqQixZQUFNeUIsbUJBQU4sQ0FBMEIsV0FBMUIsRUFBdUMsS0FBS1AsT0FBNUMsRUFBcUQsSUFBckQ7QUFDQWxCLFlBQU15QixtQkFBTixDQUEwQixXQUExQixFQUF1QyxLQUFLUCxPQUE1QyxFQUFxRCxJQUFyRDtBQUNBbEIsWUFBTXlCLG1CQUFOLENBQTBCLFNBQTFCLEVBQXFDLEtBQUtQLE9BQTFDLEVBQW1ELElBQW5EO0FBQ0E7O0FBRURsQixVQUFNeUIsbUJBQU4sQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS04sT0FBeEMsRUFBaUQsSUFBakQ7QUFDQW5CLFVBQU15QixtQkFBTixDQUEwQixZQUExQixFQUF3QyxLQUFLTCxZQUE3QyxFQUEyRCxLQUEzRDtBQUNBcEIsVUFBTXlCLG1CQUFOLENBQTBCLFdBQTFCLEVBQXVDLEtBQUtKLFdBQTVDLEVBQXlELEtBQXpEO0FBQ0FyQixVQUFNeUIsbUJBQU4sQ0FBMEIsVUFBMUIsRUFBc0MsS0FBS0gsVUFBM0MsRUFBdUQsS0FBdkQ7QUFDQXRCLFVBQU15QixtQkFBTixDQUEwQixhQUExQixFQUF5QyxLQUFLRixhQUE5QyxFQUE2RCxLQUE3RDtBQUNBLEdBZEQ7QUFpQkE7Ozs7Ozs7QUFLQXRNLFlBQVUwTCxTQUFWLEdBQXNCLFVBQVNYLEtBQVQsRUFBZ0I7QUFDckMsUUFBSWdHLFlBQUo7QUFDQSxRQUFJQyxhQUFKO0FBQ0EsUUFBSUMsaUJBQUo7QUFDQSxRQUFJQyxjQUFKLENBSnFDLENBTXJDOztBQUNBLFFBQUksT0FBT3BhLE9BQU9xYSxZQUFkLEtBQStCLFdBQW5DLEVBQWdEO0FBQy9DLGFBQU8sSUFBUDtBQUNBLEtBVG9DLENBV3JDOzs7QUFDQUgsb0JBQWdCLENBQUMsQ0FBQyxtQkFBbUJqTyxJQUFuQixDQUF3Qm9LLFVBQVVDLFNBQWxDLEtBQWdELEdBQUUsQ0FBRixDQUFqRCxFQUF1RCxDQUF2RCxDQUFqQjs7QUFFQSxRQUFJNEQsYUFBSixFQUFtQjtBQUVsQixVQUFJaEYsZUFBSixFQUFxQjtBQUNwQitFLHVCQUFlL1gsU0FBU3NYLGFBQVQsQ0FBdUIscUJBQXZCLENBQWY7O0FBRUEsWUFBSVMsWUFBSixFQUFrQjtBQUNqQjtBQUNBLGNBQUlBLGFBQWFLLE9BQWIsQ0FBcUJ4YSxPQUFyQixDQUE2QixrQkFBN0IsTUFBcUQsQ0FBQyxDQUExRCxFQUE2RDtBQUM1RCxtQkFBTyxJQUFQO0FBQ0EsV0FKZ0IsQ0FLakI7OztBQUNBLGNBQUlvYSxnQkFBZ0IsRUFBaEIsSUFBc0JoWSxTQUFTOEgsZUFBVCxDQUF5QnVRLFdBQXpCLElBQXdDdmEsT0FBT3dhLFVBQXpFLEVBQXFGO0FBQ3BGLG1CQUFPLElBQVA7QUFDQTtBQUNELFNBWm1CLENBY3JCOztBQUNDLE9BZkQsTUFlTztBQUNOLGVBQU8sSUFBUDtBQUNBO0FBQ0Q7O0FBRUQsUUFBSTlELG9CQUFKLEVBQTBCO0FBQ3pCeUQsMEJBQW9COUQsVUFBVUMsU0FBVixDQUFvQm1FLEtBQXBCLENBQTBCLDZCQUExQixDQUFwQixDQUR5QixDQUd6QjtBQUNBOztBQUNBLFVBQUlOLGtCQUFrQixDQUFsQixLQUF3QixFQUF4QixJQUE4QkEsa0JBQWtCLENBQWxCLEtBQXdCLENBQTFELEVBQTZEO0FBQzVERix1QkFBZS9YLFNBQVNzWCxhQUFULENBQXVCLHFCQUF2QixDQUFmOztBQUVBLFlBQUlTLFlBQUosRUFBa0I7QUFDakI7QUFDQSxjQUFJQSxhQUFhSyxPQUFiLENBQXFCeGEsT0FBckIsQ0FBNkIsa0JBQTdCLE1BQXFELENBQUMsQ0FBMUQsRUFBNkQ7QUFDNUQsbUJBQU8sSUFBUDtBQUNBLFdBSmdCLENBS2pCOzs7QUFDQSxjQUFJb0MsU0FBUzhILGVBQVQsQ0FBeUJ1USxXQUF6QixJQUF3Q3ZhLE9BQU93YSxVQUFuRCxFQUErRDtBQUM5RCxtQkFBTyxJQUFQO0FBQ0E7QUFDRDtBQUNEO0FBQ0QsS0F2RG9DLENBeURyQzs7O0FBQ0EsUUFBSXZHLE1BQU10USxLQUFOLENBQVkrVyxhQUFaLEtBQThCLE1BQTlCLElBQXdDekcsTUFBTXRRLEtBQU4sQ0FBWWdYLFdBQVosS0FBNEIsY0FBeEUsRUFBd0Y7QUFDdkYsYUFBTyxJQUFQO0FBQ0EsS0E1RG9DLENBOERyQzs7O0FBQ0FQLHFCQUFpQixDQUFDLENBQUMsb0JBQW9Cbk8sSUFBcEIsQ0FBeUJvSyxVQUFVQyxTQUFuQyxLQUFpRCxHQUFFLENBQUYsQ0FBbEQsRUFBd0QsQ0FBeEQsQ0FBbEI7O0FBRUEsUUFBSThELGtCQUFrQixFQUF0QixFQUEwQjtBQUN6QjtBQUVBSCxxQkFBZS9YLFNBQVNzWCxhQUFULENBQXVCLHFCQUF2QixDQUFmOztBQUNBLFVBQUlTLGlCQUFpQkEsYUFBYUssT0FBYixDQUFxQnhhLE9BQXJCLENBQTZCLGtCQUE3QixNQUFxRCxDQUFDLENBQXRELElBQTJEb0MsU0FBUzhILGVBQVQsQ0FBeUJ1USxXQUF6QixJQUF3Q3ZhLE9BQU93YSxVQUEzSCxDQUFKLEVBQTRJO0FBQzNJLGVBQU8sSUFBUDtBQUNBO0FBQ0QsS0F4RW9DLENBMEVyQztBQUNBOzs7QUFDQSxRQUFJdkcsTUFBTXRRLEtBQU4sQ0FBWWdYLFdBQVosS0FBNEIsTUFBNUIsSUFBc0MxRyxNQUFNdFEsS0FBTixDQUFZZ1gsV0FBWixLQUE0QixjQUF0RSxFQUFzRjtBQUNyRixhQUFPLElBQVA7QUFDQTs7QUFFRCxXQUFPLEtBQVA7QUFDQSxHQWpGRDtBQW9GQTs7Ozs7Ozs7QUFNQXpSLFlBQVVDLE1BQVYsR0FBbUIsVUFBUzhLLEtBQVQsRUFBZ0J0TCxPQUFoQixFQUF5QjtBQUMzQyxXQUFPLElBQUlPLFNBQUosQ0FBYytLLEtBQWQsRUFBcUJ0TCxPQUFyQixDQUFQO0FBQ0EsR0FGRDs7QUFLQSxNQUFJLGVBQWtCLFVBQWxCLElBQWdDLFFBQU8sZ0dBQVAsTUFBc0IsUUFBdEQsSUFBa0UsZ0dBQXRFLEVBQWtGO0FBRWpGO0FBQ0FpUyxJQUFBLG1DQUFPLFlBQVc7QUFDakIsYUFBTzFSLFNBQVA7QUFDQSxLQUZEO0FBQUE7QUFHQSxHQU5ELE1BTU8sSUFBSSxPQUFPMlIsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT0MsT0FBNUMsRUFBcUQ7QUFDM0RELFdBQU9DLE9BQVAsR0FBaUI1UixVQUFVQyxNQUEzQjtBQUNBMFIsV0FBT0MsT0FBUCxDQUFlNVIsU0FBZixHQUEyQkEsU0FBM0I7QUFDQSxHQUhNLE1BR0E7QUFDTmxKLFdBQU9rSixTQUFQLEdBQW1CQSxTQUFuQjtBQUNBO0FBQ0QsQ0F4MEJDLEdBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRDs7QUFDQTs7QUFFQTs7QUFLQTs7QUFPQTtBQUNBLElBQU02UixnQkFBZ0IsQ0FBRTdZLFNBQVNHLGNBQVQsQ0FBeUIsU0FBekIsQ0FBRixDQUF0QixDLENBRUE7O0FBQ0EsSUFBTTJZLGdCQUFnQjlZLFNBQVNHLGNBQVQsQ0FBeUIsUUFBekIsQ0FBdEI7QUFDQSxJQUFNNFksb0JBQW9CLENBQUVGLGNBQWUsQ0FBZixDQUFGLENBQTFCO0FBQ0EsSUFBTXZJLG1CQUFtQixFQUF6QjtBQUVBLElBQUkwSSxpQkFBaUIsRUFBckI7QUFHQTs7Ozs7Ozs7QUFPQSxTQUFTQyxXQUFULENBQXNCQyxNQUF0QixFQUE4QkMsTUFBOUIsRUFBc0NDLFdBQXRDLEVBQW9EO0FBQ2hELE9BQUssSUFBSXRjLElBQUksQ0FBYixFQUFnQkEsSUFBSW9jLE1BQXBCLEVBQTRCLEVBQUVwYyxDQUE5QixFQUFrQztBQUM5QixRQUFNdWMsZ0JBQWdCclosU0FBU0MsYUFBVCxDQUF3QixNQUF4QixDQUF0QjtBQUVBb1osa0JBQWMxWSxTQUFkLEdBQTBCLGtCQUExQjtBQUNBMFksa0JBQWMvWSxTQUFkLEdBQTBCLElBQTFCO0FBQ0F1WSxrQkFBZU8sV0FBZixFQUE2QjVZLFdBQTdCLENBQTBDNlksYUFBMUM7QUFDSDs7QUFFRCxNQUFJRixTQUFTLENBQWIsRUFBaUI7QUFDYixRQUFNRyxjQUFjdFosU0FBU0MsYUFBVCxDQUF3QixNQUF4QixDQUFwQjtBQUVBcVosZ0JBQVloWixTQUFaLEdBQXdCL0IsTUFBTzRhLE1BQVAsRUFBZ0J4YSxJQUFoQixDQUFzQixHQUF0QixDQUF4QjtBQUNBMmEsZ0JBQVkzWSxTQUFaLEdBQXdCLGtCQUF4QjtBQUNBa1ksa0JBQWVPLFdBQWYsRUFBNkI1WSxXQUE3QixDQUEwQzhZLFdBQTFDO0FBQ0g7O0FBRUR4SSxXQUFTeUksS0FBVCxDQUFnQkgsV0FBaEI7QUFDSDtBQUdEOzs7Ozs7Ozs7O0FBUUEsU0FBU0ksV0FBVCxDQUFzQkMsSUFBdEIsRUFBNEJDLEdBQTVCLEVBQWlDQyxVQUFqQyxFQUE2Q1AsV0FBN0MsRUFBMkQ7QUFDM0Q7QUFDSSxNQUFNNU0sU0FBU3FNLGNBQWVPLFdBQWYsQ0FBZjtBQUNBLE1BQU0xTSxRQUFRQyxlQUFnQkgsTUFBaEIsQ0FBZDtBQUNBLE1BQU1vTixRQUFRNVosU0FBU2lQLFdBQVQsRUFBZDtBQUVBLE1BQUk0SyxjQUFjLENBQWxCO0FBQ0EsTUFBSUMsYUFBYSxDQUFqQjtBQUNBLE1BQUlDLGFBQWEsS0FBakI7QUFDQSxNQUFJQyxhQUFhLENBQWpCLENBVHVELENBV3ZEO0FBQ0E7O0FBQ0EsTUFBTUMsV0FBWSxZQUFXO0FBQ3pCLFNBQUssSUFBSW5kLElBQUksQ0FBYixFQUFnQkEsSUFBSTRQLE1BQU0xUCxNQUExQixFQUFrQyxFQUFFRixDQUFwQyxFQUF3QztBQUNwQyxVQUFJK1AsY0FBY0gsTUFBTzVQLENBQVAsRUFBVytQLFdBQTdCOztBQUNBLFVBQUlnTixnQkFBZ0JKLElBQXBCLEVBQTJCO0FBQ3ZCLGFBQUssSUFBSXJMLElBQUksQ0FBYixFQUFnQkEsSUFBSXZCLFlBQVk3UCxNQUFoQyxFQUF3QyxFQUFFb1IsQ0FBMUMsRUFBOEM7QUFDMUMsY0FBSTJMLFVBQUosRUFBaUI7QUFDYkM7O0FBQ0EsZ0JBQUlBLGVBQWVMLFdBQVc5TSxXQUFYLENBQXVCN1AsTUFBdEMsSUFBZ0Q2UCxZQUFhdUIsQ0FBYixNQUFxQixJQUF6RSxFQUFnRjtBQUM1RXdMLG9CQUFNTSxNQUFOLENBQWN4TixNQUFPNVAsQ0FBUCxDQUFkLEVBQTBCc1IsQ0FBMUI7QUFDQSxxQkFBTyxLQUFQO0FBQ0g7QUFDSixXQU5ELE1BT0ssSUFBSTBMLGVBQWVKLEdBQW5CLEVBQXlCO0FBQzFCRSxrQkFBTU8sUUFBTixDQUFnQnpOLE1BQU81UCxDQUFQLENBQWhCLEVBQTRCc1IsQ0FBNUI7QUFDQTJMLHlCQUFhLElBQWI7O0FBQ0EsZ0JBQUkzTCxNQUFNdkIsWUFBWTdQLE1BQVosR0FBcUIsQ0FBL0IsRUFBbUM7QUFDL0I0YyxvQkFBTU0sTUFBTixDQUFjeE4sTUFBTzVQLENBQVAsQ0FBZCxFQUEwQnNSLENBQTFCO0FBQ0EscUJBQU8sS0FBUDtBQUNIO0FBQ0osV0FQSSxNQVFBLElBQUl2QixZQUFhdUIsQ0FBYixNQUFxQixJQUF6QixFQUFnQztBQUNqQyxnQkFBTWdNLFNBQVNwYSxTQUFTcWEsY0FBVCxDQUF5QjliLE1BQU9tYixNQUFNSSxVQUFOLEdBQW1CLENBQTFCLEVBQThCbmIsSUFBOUIsQ0FBb0MsR0FBcEMsSUFBNEMsSUFBckUsQ0FBZjtBQUVBK04sa0JBQU81UCxDQUFQLEVBQVcrUCxXQUFYLEdBQXlCQSxZQUFZdE4sTUFBWixDQUFvQixDQUFwQixFQUF1QjZPLENBQXZCLElBQTZCLEdBQXREO0FBQ0ExQixrQkFBTzVQLENBQVAsRUFBVzJELFVBQVgsQ0FBc0I2WixZQUF0QixDQUFvQ0YsTUFBcEMsRUFBNEMxTixNQUFPNVAsQ0FBUCxFQUFXd1EsV0FBdkQ7QUFDQXNNLGtCQUFNTyxRQUFOLENBQWdCQyxNQUFoQixFQUF3QlYsTUFBTUksVUFBTixHQUFtQixDQUEzQztBQUNBRixrQkFBTU0sTUFBTixDQUFjRSxNQUFkLEVBQXNCVixNQUFNSSxVQUFOLEdBQW1CLENBQXpDO0FBQ0EsbUJBQU8sS0FBUDtBQUNIOztBQUVEQTtBQUNIO0FBQ0osT0E3QkQsTUE4Qks7QUFDRCxZQUFJak4sWUFBWWpQLE9BQVosQ0FBcUIsSUFBckIsSUFBOEIsQ0FBQyxDQUFuQyxFQUF1QztBQUNuQ2ljO0FBQ0g7QUFDSjtBQUNKOztBQUVELFdBQU8sSUFBUDtBQUNILEdBekNnQixFQUFqQjs7QUEyQ0EsTUFBSUksUUFBSixFQUFlO0FBQ1hoQixnQkFBYUQsZUFBZ0JJLFdBQWhCLEVBQThCSyxJQUE5QixHQUFxQ0ksV0FBbEQsRUFBK0RILEdBQS9ELEVBQW9FTixXQUFwRTtBQUNBNU0sV0FBT2hNLFdBQVAsQ0FBb0JtWixVQUFwQjtBQUNBO0FBQ0g7O0FBRUQsTUFBSUEsV0FBVzlNLFdBQVgsQ0FBdUJqUCxPQUF2QixDQUFnQyxJQUFoQyxJQUF5QyxDQUFDLENBQTlDLEVBQWtEO0FBQzlDK2IsZUFBVzlNLFdBQVgsR0FBeUI4TSxXQUFXOU0sV0FBWCxDQUF1QnlCLE9BQXZCLENBQWdDLElBQWhDLEVBQXNDLEVBQXRDLENBQXpCO0FBQ0EwSyxtQkFBZ0JJLFdBQWhCLEVBQThCSyxJQUE5QjtBQUNBVCxtQkFBZ0JJLFdBQWhCLEVBQThCTSxHQUE5QixHQUFvQyxDQUFwQztBQUNILEdBSkQsTUFLSztBQUNEVixtQkFBZ0JJLFdBQWhCLEVBQThCTSxHQUE5QixJQUFxQ0MsV0FBVzlNLFdBQVgsQ0FBdUI3UCxNQUE1RDtBQUNIOztBQUVENGMsUUFBTVcsY0FBTjtBQUNBWCxRQUFNWSxVQUFOLENBQWtCYixVQUFsQjs7QUFFQSxNQUFJLENBQUNBLFdBQVdyTSxXQUFoQixFQUE4QjtBQUMxQjBMLG1CQUFnQkksV0FBaEIsRUFBOEJLLElBQTlCLEdBQXFDLElBQXJDO0FBQ0FULG1CQUFnQkksV0FBaEIsRUFBOEJNLEdBQTlCLEdBQW9DLElBQXBDO0FBQ0g7QUFDSjtBQUdEOzs7Ozs7Ozs7O0FBUUEsU0FBUy9NLGNBQVQsQ0FBeUJRLElBQXpCLEVBQWdDO0FBQzVCLE1BQUlDLE1BQU0sRUFBVjs7QUFFQSxPQUFLRCxPQUFPQSxLQUFLRSxVQUFqQixFQUE2QkYsSUFBN0IsRUFBbUNBLE9BQU9BLEtBQUtHLFdBQS9DLEVBQTZEO0FBQ3pELFFBQUlILEtBQUtJLFFBQUwsS0FBa0IsQ0FBdEIsRUFBMEI7QUFDdEJILFVBQUloUSxJQUFKLENBQVUrUCxJQUFWO0FBQ0gsS0FGRCxNQUdLO0FBQ0RDLFlBQU1BLElBQUlJLE1BQUosQ0FBWWIsZUFBZ0JRLElBQWhCLENBQVosQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0MsR0FBUDtBQUNIO0FBR0Q7Ozs7Ozs7O0FBTU8sU0FBU25PLE1BQVQsQ0FBaUJtWixPQUFqQixFQUEwQmxaLFlBQTFCLEVBQXlDO0FBQzVDLE1BQU11YixnQkFBZ0J6YSxTQUFTQyxhQUFULENBQXdCLE1BQXhCLENBQXRCOztBQUVBLE1BQUksQ0FBQytZLGVBQWdCOVosWUFBaEIsQ0FBTCxFQUFzQztBQUNsQzhaLG1CQUFnQjlaLFlBQWhCLElBQWlDO0FBQzdCd2EsV0FBSyxJQUR3QjtBQUU3QkQsWUFBTTtBQUZ1QixLQUFqQztBQUlIOztBQUVELG9CQUFZZ0IsYUFBWixFQUEyQnZiLFlBQTNCO0FBQ0F1YixnQkFBY25hLFNBQWQsR0FBMEI4WCxPQUExQixDQVg0QyxDQVk1Qzs7QUFFQSxNQUFJWSxlQUFnQjlaLFlBQWhCLEVBQStCd2EsR0FBL0IsS0FBdUMsSUFBdkMsSUFBK0NWLGVBQWdCOVosWUFBaEIsRUFBK0J1YSxJQUEvQixLQUF3QyxJQUEzRixFQUFrRztBQUM5RkQsZ0JBQWFSLGVBQWdCOVosWUFBaEIsRUFBK0J1YSxJQUE1QyxFQUFrRFQsZUFBZ0I5WixZQUFoQixFQUErQndhLEdBQWpGLEVBQXNGZSxhQUF0RixFQUFxR3ZiLFlBQXJHO0FBQ0gsR0FGRCxNQUdLO0FBQ1Q7QUFDUTZaLHNCQUFtQjdaLFlBQW5CLEVBQWtDc0IsV0FBbEMsQ0FBK0NpYSxhQUEvQztBQUNIO0FBQ0o7O0FBQUE7QUFHRDs7Ozs7O0FBS08sU0FBUzVNLEtBQVQsQ0FBZ0IzTyxZQUFoQixFQUErQjtBQUNsQyxNQUFJQSxpQkFBaUJPLFNBQXJCLEVBQWlDO0FBQzdCLHVCQUFPLENBQVA7QUFDQXFaLGtCQUFjeFksU0FBZCxHQUEwQixFQUExQjtBQUNBd1ksa0JBQWN0WSxXQUFkLENBQTJCcVksY0FBZSxDQUFmLENBQTNCO0FBQ0Esc0JBQVlBLGNBQWUsQ0FBZixDQUFaLEVBQWdDLENBQWhDO0FBQ0Esc0JBQVk3WSxTQUFTTyxJQUFyQixFQUEyQixDQUEzQjtBQUNBdVEsYUFBU3lJLEtBQVQ7QUFDSCxHQVBELE1BUUs7QUFDRCxRQUFJLENBQUNWLGNBQWUzWixZQUFmLENBQUwsRUFBcUM7QUFDakM7QUFDSCxLQUhBLENBS1Q7OztBQUNRLHVCQUFPQSxZQUFQO0FBQ0EyWixrQkFBZTNaLFlBQWYsRUFBOEJvQixTQUE5QixHQUEwQyxFQUExQztBQUNBLHNCQUFZdVksY0FBZTNaLFlBQWYsQ0FBWixFQUEyQ0EsWUFBM0MsRUFSQyxDQVVEOztBQUNBLFFBQUlBLGlCQUFpQixDQUFyQixFQUF5QjtBQUNyQix3QkFBWWMsU0FBU08sSUFBckIsRUFBMkIsQ0FBM0I7QUFDSDs7QUFFRHVRLGFBQVN5SSxLQUFULENBQWdCcmEsWUFBaEI7QUFDSCxHQXpCaUMsQ0EyQmxDOzs7QUFDQSxNQUFJQSxlQUFlLENBQW5CLEVBQXVCLENBQ25CO0FBQ0g7QUFDSjs7QUFBQTtBQUdEOzs7Ozs7Ozs7O0FBU08sU0FBU3diLE1BQVQsQ0FBaUJDLFlBQWpCLEVBQStCcEssSUFBL0IsRUFBcUN2RCxHQUFyQyxFQUEwQ3dELEtBQTFDLEVBQWlEQyxNQUFqRCxFQUEwRDtBQUNqRTtBQUNJLE1BQU1tSyxhQUFhQyxtQkFBbkI7QUFDQSxNQUFNQyxhQUFhRixXQUFXRyxJQUFYLENBQWdCOU4sTUFBbkM7QUFDQSxNQUFNNkwsZ0JBQWdCblosSUFBSyxDQUFMLEVBQVNjLFVBQS9CO0FBRUEsTUFBSXVhLFNBQUo7QUFFQTFLLG1CQUFrQnFLLFlBQWxCLElBQW1DO0FBQy9CcEssVUFBTUEsSUFEeUI7QUFFL0J2RCxTQUFLQSxHQUYwQjtBQUcvQndELFdBQU9BLEtBSHdCO0FBSS9CQyxZQUFRQTtBQUp1QixHQUFuQzs7QUFPQSxNQUFJLENBQUMsa0JBQVcsV0FBWCxDQUFMLEVBQWdDO0FBQzVCLFdBQU8sS0FBUDtBQUNILEdBakI0RCxDQW1CN0Q7OztBQUNBLE1BQUlrSyxpQkFBaUIsQ0FBckIsRUFBeUI7QUFDN0I7QUFDUWhiLFFBQUssQ0FBTCxFQUFTOEIsS0FBVCxDQUFld1osVUFBZixHQUE2QixDQUFDak8sTUFBTSxDQUFQLElBQVk0TixXQUFXRyxJQUFYLENBQWdCOU4sTUFBN0IsR0FBdUMsSUFBbkUsQ0FGcUIsQ0FHN0I7O0FBQ1E7QUFDSDs7QUFFRCxNQUFJdE4sSUFBS2diLFlBQUwsQ0FBSixFQUEwQjtBQUN0QjdCLGtCQUFjcFksV0FBZCxDQUEyQmYsSUFBS2diLFlBQUwsQ0FBM0I7QUFDSDs7QUFFREssY0FBWWhiLFNBQVNDLGFBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtBQUNBK2EsWUFBVTNhLEVBQVYsR0FBZSxXQUFXc2EsWUFBMUI7QUFDQUssWUFBVXJhLFNBQVYsR0FBc0IsOEJBQXRCO0FBQ0FxYSxZQUFVdlosS0FBVixDQUFnQndMLE1BQWhCLEdBQXlCNk4sY0FBY3JLLFNBQVN6RCxHQUFULEdBQWUsQ0FBN0IsSUFBa0MsSUFBM0Q7QUFDQWdPLFlBQVV2WixLQUFWLENBQWdCdUwsR0FBaEIsR0FBdUIsQ0FBQ0EsTUFBTSxDQUFQLElBQVk4TixVQUFiLEdBQTJCLElBQWpEO0FBQ0FFLFlBQVV2WixLQUFWLENBQWdCeVosVUFBaEIsR0FBOEIzSyxPQUFPLENBQVIsR0FBYSxJQUExQztBQUNBeUssWUFBVXZaLEtBQVYsQ0FBZ0I0SyxLQUFoQixHQUF5QixDQUFDbUUsUUFBUUQsSUFBUixHQUFlLENBQWhCLElBQXFCcUssV0FBV0csSUFBWCxDQUFnQjFPLEtBQXRDLEdBQStDLElBQXZFO0FBRUF3TSxnQkFBZThCLFlBQWYsSUFBZ0NLLFNBQWhDO0FBQ0FqQyxvQkFBbUI0QixZQUFuQixJQUFvQ0ssU0FBcEM7QUFDQUcsWUFBVWxjLE1BQVYsQ0FBa0IrYixTQUFsQixFQUE2QmxDLGFBQTdCO0FBQ0g7O0FBQUE7QUFHRDs7OztBQUdPLElBQU1xQyxZQUFZO0FBQ3JCbGMsVUFBUSxnQkFBVWtjLFNBQVYsRUFBcUJ6WCxNQUFyQixFQUE4QjtBQUNsQyxRQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBdEIsRUFBaUM7QUFDN0JtVixvQkFBZW5WLE1BQWYsRUFBd0JsRCxXQUF4QixDQUFxQzJhLFNBQXJDO0FBQ0gsS0FGRCxNQUdLO0FBQ0R6WCxhQUFPbEQsV0FBUCxDQUFvQjJhLFNBQXBCO0FBQ0g7QUFDSixHQVJvQjtBQVVyQnhiLE9BQUssYUFBVVQsWUFBVixFQUF5QjtBQUMxQixXQUFPNlosa0JBQW1CN1osWUFBbkIsQ0FBUDtBQUNILEdBWm9CO0FBY3JCeUwsT0FBSyxhQUFVeVEsWUFBVixFQUF3QmxjLFlBQXhCLEVBQXVDO0FBQ3hDNlosc0JBQW1CN1osWUFBbkIsSUFBb0NrYyxZQUFwQztBQUNIO0FBaEJvQixDQUFsQjtBQW9CUDs7Ozs7Ozs7O0FBTU8sU0FBU3piLEdBQVQsQ0FBY1QsWUFBZCxFQUE2QjtBQUNoQyxTQUFPMlosY0FBZTNaLFlBQWYsQ0FBUDtBQUNIO0FBR0Q7Ozs7O0FBR08sU0FBUytRLFVBQVQsR0FBc0I7QUFDekIsTUFBTUksaUJBQWlCLEVBQXZCO0FBQ0EsTUFBTWxGLGFBQWEsa0JBQW5CO0FBQ0EsTUFBTWtRLGVBQWVsUSxXQUFXMUssVUFBaEMsQ0FIeUIsQ0FLekI7O0FBQ0EsTUFBSTRhLFlBQUosRUFBbUI7QUFDZkEsaUJBQWEzYSxXQUFiLENBQTBCeUssVUFBMUI7QUFDSCxHQVJ3QixDQVV6Qjs7O0FBQ0EsTUFBSW1RLFlBQVl6QyxjQUFlLENBQWYsRUFBbUJ5QyxTQUFuQztBQUNBekMsZ0JBQWUsQ0FBZixFQUFtQm5ZLFdBQW5CLENBQWdDNGEsU0FBaEM7O0FBRUEsT0FBSyxJQUFJeGUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJK2IsY0FBYzdiLE1BQWxDLEVBQTBDLEVBQUVGLENBQTVDLEVBQWdEO0FBQzVDdVQsbUJBQWdCdlQsQ0FBaEIsSUFBc0IrYixjQUFlL2IsQ0FBZixFQUFtQndELFNBQXpDO0FBQ0gsR0FoQndCLENBa0J6Qjs7O0FBQ0F1WSxnQkFBZSxDQUFmLEVBQW1CclksV0FBbkIsQ0FBZ0M4YSxTQUFoQzs7QUFFQSxNQUFJRCxZQUFKLEVBQW1CO0FBQ2ZBLGlCQUFhN2EsV0FBYixDQUEwQjJLLFVBQTFCO0FBQ0gsR0F2QndCLENBeUJ6QjtBQUNBOzs7QUFDQSxNQUFNb1EsVUFBVWxMLGVBQWdCLENBQWhCLEVBQW9CL1EsV0FBcEIsQ0FBaUMsSUFBakMsQ0FBaEI7QUFDQStRLGlCQUFnQixDQUFoQixJQUFzQkEsZUFBZ0IsQ0FBaEIsRUFBb0JtTCxTQUFwQixDQUErQixDQUEvQixFQUFrQ0QsT0FBbEMsSUFBOENsTCxlQUFnQixDQUFoQixFQUFvQm1MLFNBQXBCLENBQStCRCxVQUFVLENBQXpDLENBQXBFO0FBRUEsU0FBTztBQUNIM1EsZ0JBQVk4QyxnQkFBUS9OLEdBQVIsRUFEVDtBQUVIZ1IsbUJBQWVELGFBQU0vUSxHQUFOLEVBRlo7QUFHSGlSLFVBQU1BLFlBQUtqUixHQUFMLEVBSEg7QUFJSG1SLGNBQVVrSSxjQUpQO0FBS0hqSSxXQUFPL1EsU0FBUytRLEtBTGI7QUFNSFQsc0JBQWtCQSxnQkFOZjtBQU9IRCxvQkFBZ0JBO0FBUGIsR0FBUDtBQVNIO0FBR0Q7Ozs7O0FBR08sU0FBU3dLLGlCQUFULEdBQTZCO0FBQ2hDLE1BQU1ZLGtCQUFrQjliLElBQUssQ0FBTCxFQUFTYyxVQUFqQztBQUNBLE1BQU1tYSxhQUFhO0FBQ1g5YyxZQUFRO0FBQ0p1TyxhQUFPcVAsU0FBVTVkLE9BQU82ZCxnQkFBUCxDQUF5QkYsZUFBekIsRUFBMkNwUCxLQUFyRCxFQUE0RCxFQUE1RCxDQURIO0FBRUpZLGNBQVFuUCxPQUFPMkssV0FBUCxJQUFzQnpJLFNBQVM4SCxlQUFULENBQXlCWSxZQUEvQyxJQUErRDFJLFNBQVNPLElBQVQsQ0FBY21JO0FBRmpGLEtBREc7QUFLWCtRLFVBQU0sRUFMSztBQU1Yc0IsVUFBTTtBQU5LLEdBQW5CO0FBUUEsTUFBTWEsY0FBYzViLFNBQVNDLGFBQVQsQ0FBd0IsTUFBeEIsQ0FBcEI7QUFDQSxNQUFNNGIsbUJBQW1CakIsV0FBVzljLE1BQXBDO0FBRUEsTUFBSWdlLGlCQUFKO0FBRUFGLGNBQVl0YixTQUFaLEdBQXdCLHlCQUF4QjtBQUNBc2IsY0FBWWpiLFNBQVosR0FBd0Isa0JBQXhCO0FBQ0FpYixjQUFZbmEsS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsY0FBNUI7QUFFQStaLGtCQUFnQmpiLFdBQWhCLENBQTZCb2IsV0FBN0I7QUFFQWhCLGFBQVdHLElBQVgsQ0FBZ0IxTyxLQUFoQixHQUF3QnVQLFlBQVlqTSxXQUFaLEdBQTBCLENBQWxEO0FBQ0FpTCxhQUFXbkIsSUFBWCxDQUFnQnBOLEtBQWhCLEdBQXdCak4sS0FBSzJjLEtBQUwsQ0FBWSxDQUFFRixpQkFBaUJ4UCxLQUFqQixHQUF5QixDQUEzQixJQUFpQ3VPLFdBQVdHLElBQVgsQ0FBZ0IxTyxLQUE3RCxDQUF4QjtBQUVBdVAsY0FBWW5hLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE9BQTVCO0FBQ0FvYSxzQkFBb0JGLFlBQVlsVCxZQUFoQztBQUNBa1QsY0FBWXRiLFNBQVosSUFBeUIsb0JBQXpCO0FBQ0FzYSxhQUFXRyxJQUFYLENBQWdCOU4sTUFBaEIsR0FBeUIsQ0FBQzJPLFlBQVlsVCxZQUFaLEdBQTJCb1QsaUJBQTVCLElBQWlELENBQWpELEdBQXFELENBQTlFO0FBQ0FsQixhQUFXbkIsSUFBWCxDQUFnQnhNLE1BQWhCLEdBQXlCN04sS0FBSzJjLEtBQUwsQ0FBWUYsaUJBQWlCNU8sTUFBakIsR0FBMEIyTixXQUFXRyxJQUFYLENBQWdCOU4sTUFBdEQsQ0FBekI7QUFFQTJPLGNBQVluYixVQUFaLENBQXVCQyxXQUF2QixDQUFvQ2tiLFdBQXBDO0FBRUEsU0FBT2hCLFVBQVA7QUFDSDtBQUdEOzs7OztBQUdPLElBQU05SixXQUFXO0FBQ3BCeUksU0FBTyxlQUFVcmEsWUFBVixFQUF5QjtBQUM1QjtBQUNBLFFBQUlBLGlCQUFpQk8sU0FBckIsRUFBaUM7QUFDN0J1Wix1QkFBaUIsQ0FBQztBQUNkVSxhQUFLLElBRFM7QUFFZEQsY0FBTTtBQUZRLE9BQUQsQ0FBakI7QUFJSCxLQUxELE1BTUs7QUFDRDNJLGVBQVNuRyxHQUFULENBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQnpMLFlBQTFCO0FBQ0g7QUFDSixHQVptQjtBQWNwQnNELFdBQVMsaUJBQVVzUCxRQUFWLEVBQXFCO0FBQzFCa0gscUJBQWlCbEgsUUFBakI7QUFDSCxHQWhCbUI7QUFrQnBCbkgsT0FBSyxhQUFVK08sR0FBVixFQUFlRCxJQUFmLEVBQXFCTCxXQUFyQixFQUFtQztBQUNwQyxRQUFJLENBQUNKLGVBQWdCSSxXQUFoQixDQUFMLEVBQXFDO0FBQ2pDSixxQkFBZ0JJLFdBQWhCLElBQWdDLEVBQWhDO0FBQ0g7O0FBRURKLG1CQUFnQkksV0FBaEIsRUFBOEJNLEdBQTlCLEdBQW9DQSxHQUFwQztBQUNBVixtQkFBZ0JJLFdBQWhCLEVBQThCSyxJQUE5QixHQUFxQ0EsSUFBckM7QUFDSDtBQXpCbUIsQ0FBakI7QUE2QlA7Ozs7Ozs7O0FBS08sU0FBU3VDLFFBQVQsQ0FBbUJqTCxLQUFuQixFQUEyQjtBQUM5Qi9RLFdBQVMrUSxLQUFULEdBQWlCQSxLQUFqQjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzliRDs7QUFDQTs7QUFDQTs7QUFFQTs7QUFXQTs7QUFLQTs7QUFLQTs7QUFPQTs7OztBQUVPLElBQU1rTCxVQUFVQyxRQUFoQjtBQUdQOzs7Ozs7OztBQUtPLFNBQVNyTyxLQUFULENBQWdCc08sVUFBaEIsRUFBNkI7QUFDaEMscUJBQWFBLFVBQWI7QUFDSDs7QUFHTSxJQUFNekwsUUFBUTtBQUNqQjs7Ozs7OztBQU9BL0YsT0FBSyxhQUFVZ0UsS0FBVixFQUFpQnlOLFFBQWpCLEVBQTJCRCxVQUEzQixFQUF3QztBQUN6Q0UsaUJBQU8xUixHQUFQLENBQVlnRSxLQUFaLEVBQW1CeU4sUUFBbkIsRUFBNkJELFVBQTdCO0FBQ0g7QUFWZ0IsQ0FBZDs7QUFjQSxJQUFNdkwsT0FBTztBQUNoQjs7Ozs7O0FBTUFqRyxPQUFLLGFBQVUyUixDQUFWLEVBQWFILFVBQWIsRUFBMEI7QUFDM0Isb0JBQVUsTUFBVixFQUFrQixDQUFDLEVBQUVHLElBQUksQ0FBTixDQUFuQixFQUE2QkgsVUFBN0I7QUFDQSxvQkFBVSxRQUFWLEVBQW9CLENBQUMsRUFBRUcsSUFBSSxDQUFOLENBQXJCLEVBQStCSCxVQUEvQjtBQUNBLG9CQUFVLFdBQVYsRUFBdUIsQ0FBQyxFQUFFRyxJQUFJLENBQU4sQ0FBeEIsRUFBa0NILFVBQWxDO0FBQ0Esb0JBQVUsY0FBVixFQUEwQixDQUFDLEVBQUVHLElBQUksQ0FBTixDQUEzQixFQUFxQ0gsVUFBckM7QUFDQSxvQkFBVSxVQUFWLEVBQXNCRyxDQUF0QixFQUF5QkgsVUFBekIsRUFMMkIsQ0FPM0I7QUFDSDtBQWZlLENBQWI7QUFtQlA7Ozs7OztBQUdPLFNBQVNJLFNBQVQsR0FBcUI7QUFDeEI7QUFDQSxNQUFJLGtCQUFXLFVBQVgsQ0FBSixFQUE4QjtBQUMxQmphLG9CQUFTNkcsTUFBVDtBQUNILEdBSnVCLENBTXhCO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFJLGtCQUFXLFVBQVgsS0FBMkIsQ0FBQ25KLFNBQVNHLGNBQVQsQ0FBeUIsYUFBekIsQ0FBaEMsRUFBMkU7QUFDdkU7QUFDQTtBQUNBLFFBQUksK0JBQUosRUFBMEI7QUFDdEIsMEJBQVMsU0FBVDtBQUNILEtBRkQsTUFHSztBQUNEckMsYUFBT2tHLFFBQVAsR0FBa0Isa0JBQVcsVUFBWCxDQUFsQjtBQUNIO0FBQ0o7QUFDSjtBQUdEOzs7OztBQUdPLFNBQVN0QixJQUFULEdBQWdCO0FBQ25CLE1BQU04WixRQUFRLFNBQVJBLEtBQVEsR0FBVztBQUNyQixzQkFBTztBQUNIO0FBQ0EzVixvQkFBYyxJQUZYO0FBSUg7QUFDQTtBQUNBRixvQkFBYyxJQU5YO0FBUUg7QUFDQTtBQUNBRyx3QkFBa0IsSUFWZjtBQVlIO0FBQ0FMLGVBQVM4QixjQWJOO0FBZUg7QUFDQTNCLGVBQVMsS0FoQk47QUFrQkg7QUFDQUYsd0JBQWtCO0FBbkJmLEtBQVA7QUFzQkF1VixZQUFRdlosSUFBUjtBQUNILEdBeEJELENBRG1CLENBMkJuQjtBQUNBOzs7QUFDQSxNQUFJNkYsZUFBZWtVLFlBQWYsSUFBK0IsQ0FBQ2xVLGVBQWVpQyxVQUEvQyxJQUE2RCxDQUFDLDJCQUFjLE9BQWQsQ0FBbEUsRUFBNEY7QUFDeEYsUUFBTS9HLGtCQUFrQnpELFNBQVNDLGFBQVQsQ0FBd0IsS0FBeEIsQ0FBeEI7QUFDQSxRQUFNeWMsU0FBUzFjLFNBQVNDLGFBQVQsQ0FBd0IsSUFBeEIsQ0FBZjtBQUNBLFFBQU0wYyxhQUFhM2MsU0FBU0MsYUFBVCxDQUF3QixPQUF4QixDQUFuQjtBQUVBd0Qsb0JBQWdCcEQsRUFBaEIsR0FBcUIsaUJBQXJCO0FBQ0FxYyxXQUFPN1AsV0FBUCxHQUFxQiwrQkFBckI7QUFFQThQLGVBQVdoVCxJQUFYLEdBQWtCLE1BQWxCO0FBQ0FnVCxlQUFXNVYsZ0JBQVgsQ0FBNkIsUUFBN0IsRUFBdUMsVUFBVXZELENBQVYsRUFBYztBQUNqRCx3QkFBVyxjQUFYLEVBQTJCLEtBQUtvWixLQUFMLENBQVksQ0FBWixDQUEzQjtBQUNBSjtBQUNILEtBSEQ7QUFLQXhjLGFBQVNHLGNBQVQsQ0FBeUIsUUFBekIsRUFBb0NzQixLQUFwQyxDQUEwQ0MsT0FBMUMsR0FBb0QsTUFBcEQ7QUFDQStCLG9CQUFnQmpELFdBQWhCLENBQTZCa2MsTUFBN0I7QUFDQWpaLG9CQUFnQmpELFdBQWhCLENBQTZCbWMsVUFBN0I7QUFDQTNjLGFBQVNPLElBQVQsQ0FBY0MsV0FBZCxDQUEyQmlELGVBQTNCO0FBQ0gsR0FsQkQsTUFtQks7QUFDRCtZO0FBQ0g7QUFFSjs7QUFFRCxTQUFTSyxZQUFULEdBQXdCO0FBQ3BCLE1BQU16YyxTQUFTSixTQUFTRyxjQUFULENBQXlCLFFBQXpCLENBQWY7O0FBRUEsTUFBSUMsTUFBSixFQUFhO0FBQ1RBLFdBQU9LLFVBQVAsQ0FBa0JDLFdBQWxCLENBQStCTixNQUEvQjtBQUNIO0FBQ0o7QUFFRDs7Ozs7OztBQUtPLFNBQVMwYyxVQUFULEdBQXNCO0FBQ3pCRDtBQUNBRTtBQUNIO0FBR0Q7Ozs7O0FBR08sSUFBTWpNLFdBQVc7QUFDcEJuRyxPQUFLLGFBQVV3TyxNQUFWLEVBQWtCTSxJQUFsQixFQUF3QjBDLFVBQXhCLEVBQXFDO0FBQ3RDdEwscUJBQWVsRyxHQUFmLENBQW9Cd08sTUFBcEIsRUFBNEJNLElBQTVCLEVBQWtDMEMsVUFBbEM7QUFDSDtBQUhtQixDQUFqQjtBQU9QOzs7Ozs7Ozs7QUFNTyxTQUFTaGUsS0FBVCxDQUFnQkMsSUFBaEIsRUFBc0IrZCxVQUF0QixFQUFtQztBQUN0QztBQUNBLE1BQUkvZCxTQUFTLElBQWIsRUFBb0I7QUFDaEI7QUFDSDs7QUFFRCxzQkFBZ0JBLElBQWhCLEVBQXNCK2QsVUFBdEI7QUFDSDtBQUdEOzs7OztBQUdPLFNBQVNqTSxTQUFULEdBQXFCO0FBQ3hCO0FBQ0g7QUFHRDs7Ozs7QUFHTyxTQUFTNk0sb0JBQVQsR0FBZ0M7QUFDbkMsTUFBTW5DLGFBQWEsZ0NBQW5CO0FBRUE3YyxTQUFPNEssS0FBUCxDQUNJLDRCQURKLEVBRUksTUFGSixFQUdJLENBQUUsUUFBRixFQUFZLFFBQVosRUFBc0IsUUFBdEIsRUFBZ0MsUUFBaEMsRUFBMEMsUUFBMUMsRUFBb0QsUUFBcEQsQ0FISixFQUlJLENBQ0lpUyxXQUFXOWMsTUFBWCxDQUFrQnVPLEtBRHRCLEVBRUl1TyxXQUFXOWMsTUFBWCxDQUFrQm1QLE1BRnRCLEVBR0kyTixXQUFXbkIsSUFBWCxDQUFnQnBOLEtBSHBCLEVBSUl1TyxXQUFXbkIsSUFBWCxDQUFnQnhNLE1BSnBCLEVBS0kyTixXQUFXRyxJQUFYLENBQWdCMU8sS0FMcEIsRUFNSXVPLFdBQVdHLElBQVgsQ0FBZ0I5TixNQU5wQixDQUpKO0FBYUg7QUFHRDs7Ozs7OztBQUtPLFNBQVMrTyxRQUFULENBQW1CakwsS0FBbkIsRUFBMkI7QUFDOUIsd0JBQWdCQSxLQUFoQjtBQUNILEMsQ0FHRDs7O0FBQ0FqVCxPQUFPQyxNQUFQLENBQWNDLFNBQWQsR0FBMEIsQ0FBRSxXQUFGLENBQTFCLEM7Ozs7Ozs7Ozs7Ozs7O0FDelBBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUFGLE9BQU9rZixNQUFQLEdBQWdCQyxFQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUNBOztBQUxBOzs7QUFPQSxJQUFNQyxzQkFBc0IsVUFBNUI7QUFDQSxJQUFNQyxvQkFBb0IsU0FBMUI7QUFHQTs7OztBQUdPLFNBQVN6YSxJQUFULEdBQWdCO0FBQ25CLDJCQUFhLFVBQVU3RixJQUFWLEVBQWlCO0FBQzFCOEUsT0FBR1UsTUFBSCxDQUFXLElBQVgsRUFBaUIsWUFBVztBQUN4QixVQUFJLGtCQUFXLGVBQVgsQ0FBSixFQUFtQztBQUMvQlYsV0FBR0MsU0FBSCxDQUNJdWIsaUJBREosRUFFSSxJQUFJaGEsVUFBSixDQUFlLENBQUUsRUFBRixFQUFNLEVBQU4sQ0FBZixDQUZKLENBRWlDO0FBRmpDO0FBSUgsT0FMRCxNQU1LO0FBQ0QsWUFBSTtBQUNBeEIsYUFBR2tPLE1BQUgsQ0FBV3NOLGlCQUFYO0FBQ0gsU0FGRCxDQUdBLE9BQU0zWixDQUFOLEVBQVMsQ0FDUjtBQUNKOztBQUVELFVBQUk7QUFDQTdCLFdBQUdrTyxNQUFILENBQVdxTixtQkFBWDtBQUNILE9BRkQsQ0FHQSxPQUFNMVosQ0FBTixFQUFTLENBQ1I7O0FBRUQ3QixTQUFHVSxNQUFILENBQVcsS0FBWCxFQUFrQnhGLElBQWxCO0FBQ0gsS0F0QkQ7QUF1QkgsR0F4QkQ7QUF5Qkg7QUFFRDs7Ozs7O0FBSU8sU0FBU3VnQixPQUFULEdBQW1CO0FBQ3RCLE1BQUksQ0FBQyxrQkFBVyxlQUFYLENBQUwsRUFBb0M7QUFDaEM7QUFDSDs7QUFFRCxNQUFNQyxhQUFhMWIsR0FBR2lFLFFBQUgsQ0FBYXNYLG1CQUFiLENBQW5CO0FBQ0EsTUFBTUksYUFBYUQsV0FBV3JnQixNQUFYLEdBQW9CLENBQXBCLEdBQXdCLENBQTNDO0FBQ0EsTUFBTXlILFdBQVcsRUFBakI7O0FBRUEsTUFBTThZLGNBQWMsU0FBZEEsV0FBYyxDQUFValksS0FBVixFQUFrQjtBQUNsQ2IsYUFBU3JILElBQVQsQ0FBZWtJLFFBQVEsR0FBdkI7QUFDQWIsYUFBU3JILElBQVQsQ0FBZWtJLFNBQVMsQ0FBeEI7QUFDSCxHQUhEOztBQUtBLE1BQU1rWSxXQUFXLFNBQVhBLFFBQVcsQ0FBVTdmLEtBQVYsRUFBa0I7QUFDL0IsV0FBTzBmLFdBQVkxZixRQUFRLENBQXBCLElBQTBCMGYsV0FBWTFmLFFBQVEsQ0FBUixHQUFZLENBQXhCLElBQThCLEdBQS9EO0FBQ0gsR0FGRDs7QUFJQSxNQUFNOGYsZ0JBQWdCLFNBQWhCQSxhQUFnQixHQUFXO0FBQzdCOWIsT0FBR0MsU0FBSCxDQUFjc2IsbUJBQWQsRUFBbUMsSUFBSS9aLFVBQUosQ0FBZ0JzQixRQUFoQixDQUFuQztBQUNILEdBRkQsQ0FsQnNCLENBc0J0Qjs7O0FBQ0EsTUFBSTRZLFdBQVdyZ0IsTUFBWCxHQUFvQixDQUFwQixLQUEwQixDQUE5QixFQUFrQztBQUM5QnVnQixnQkFBYSxFQUFiLEVBRDhCLENBQ1Y7O0FBQ3BCRTtBQUNBO0FBQ0g7O0FBRUQsTUFBTXhCLFVBQVU7QUFDWixPQUFHLGFBQVc7QUFBTTtBQUNoQixVQUFJQSxRQUFTdUIsU0FBVSxDQUFWLENBQVQsQ0FBSixFQUErQjtBQUMzQkQsb0JBQWEsQ0FBYjtBQUNILE9BRkQsTUFHSztBQUNEQSxvQkFBYSxDQUFiO0FBQ0g7QUFDSixLQVJXO0FBVVosU0FBSyxhQUFXO0FBQUk7QUFDaEJBLGtCQUFhLENBQWIsRUFEWSxDQUNRO0FBQ3ZCLEtBWlc7QUFjWixTQUFLLGFBQVc7QUFBSTtBQUNoQjtBQUNBO0FBQ0F6ZixhQUFPNGYsS0FBUCxHQUhZLENBS1o7O0FBQ0EsWUFBTSxJQUFJOWMsS0FBSixDQUFXLHFCQUFYLENBQU47QUFDSCxLQXJCVztBQXVCWixTQUFLLGFBQVc7QUFBSTtBQUNoQixVQUFNK2MsTUFBTTVmLE9BQU80SyxLQUFQLENBQ1IsNEJBRFEsRUFFUixRQUZRLEVBR1IsQ0FBRSxLQUFGLENBSFEsRUFJUixDQUFFMFUsV0FBWSxDQUFaLElBQWtCQSxXQUFZLENBQVosSUFBa0IsR0FBdEMsQ0FKUSxDQUFaOztBQU9BLFVBQUlPLFFBQVMsb0NBQW9DRCxHQUFwQyxHQUEwQyxhQUFuRCxDQUFKLEVBQXlFO0FBQ3JFN2YsZUFBT2dILElBQVAsQ0FBYTZZLEdBQWI7QUFDSDtBQUNKLEtBbENXO0FBb0NaLFNBQUssYUFBVztBQUFJO0FBQ2hCSixrQkFBYSxDQUFiO0FBQ0gsS0F0Q1c7QUF3Q1osU0FBSyxhQUFXO0FBQUk7QUFDaEJBLGtCQUFhLENBQWI7QUFDSCxLQTFDVztBQTRDWixVQUFNLGFBQVc7QUFBRztBQUNoQkEsa0JBQWEsQ0FBYjtBQUNILEtBOUNXOztBQStDWjs7Ozs7QUFLQSxVQUFNLGFBQVc7QUFBRztBQUNoQkEsa0JBQWEsQ0FBYjtBQUNIO0FBdERXLEdBQWhCLENBN0JzQixDQXNGdEI7O0FBQ0EsTUFBTU0sY0FBYztBQUNoQixPQUFHLENBRGE7QUFFaEIsU0FBSyxDQUZXO0FBR2hCLFNBQUssQ0FIVztBQUloQixTQUFLLENBSlc7QUFLaEIsU0FBSyxDQUxXO0FBTWhCLFVBQU0sQ0FOVTtBQU9oQixVQUFNO0FBUFUsR0FBcEI7QUFVQSxNQUFNQyxLQUFLTixTQUFVLENBQVYsQ0FBWDs7QUFFQSxNQUFJdkIsUUFBUzZCLEVBQVQsQ0FBSixFQUFvQjtBQUNoQixRQUFNQyxpQkFBaUJGLFlBQWFDLEVBQWIsS0FBcUIsQ0FBNUMsQ0FEZ0IsQ0FHaEI7O0FBQ0EsUUFBSVIsZUFBZVMsY0FBbkIsRUFBb0M7QUFDaENSLGtCQUFhLEVBQWI7QUFDQUU7QUFDQTtBQUNILEtBUmUsQ0FVaEI7OztBQUNBRixnQkFBYSxDQUFiLEVBWGdCLENBV0k7O0FBQ3BCdEIsWUFBUzZCLEVBQVQ7QUFDSCxHQWJELE1BY0s7QUFDRDtBQUNBUCxnQkFBYSxFQUFiLEVBRkMsQ0FFbUI7O0FBQ3BCQSxnQkFBYU8sRUFBYjtBQUNBUCxnQkFBYUQsVUFBYjs7QUFFQSxTQUFLLElBQUl4Z0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJd2dCLFVBQXBCLEVBQWdDLEVBQUV4Z0IsQ0FBbEMsRUFBc0M7QUFDbEN5Z0Isa0JBQWFDLFNBQVUxZ0IsQ0FBVixDQUFiO0FBQ0g7QUFDSixHQTFIcUIsQ0E0SHRCOzs7QUFDQTJnQjtBQUNILEMiLCJmaWxlIjoicGxheS9odWdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9udC1ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb250LWl0YWxpYyB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmZvbnQtdW5kZXJsaW5lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5mb250LXByb3BvcnRpb25hbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4uZm9udC1maXhlZC13aWR0aCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZzogMnB4IDA7XFxufVxcblxcbi50ZXh0Y29sb3ItMCB7ICAgICAgICAgICAgICAgLyogYmxhY2sgKi9cXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi50ZXh0Y29sb3ItMSB7ICAgICAgICAgICAgICAgLyogYmx1ZSAqL1xcbiAgICBjb2xvcjogIzAwYTtcXG59XFxuXFxuLnRleHRjb2xvci0yIHsgICAgICAgICAgICAgICAvKiBncmVlbiAqL1xcbiAgICBjb2xvcjogIzBhMDtcXG59XFxuXFxuLnRleHRjb2xvci0zIHsgICAgICAgICAgICAgICAvKiBjeWFuICovXFxuICAgIGNvbG9yOiAjMGFhO1xcbn1cXG5cXG4udGV4dGNvbG9yLTQgeyAgICAgICAgICAgICAgIC8qIHJlZCAqL1xcbiAgICBjb2xvcjogI2EwMDtcXG59XFxuXFxuLnRleHRjb2xvci01IHsgICAgICAgICAgICAgICAvKiBtYWdlbnRhICovXFxuICAgIGNvbG9yOiAjYTBhO1xcbn1cXG5cXG4udGV4dGNvbG9yLTYgeyAgICAgICAgICAgICAgIC8qIGJyb3duICovXFxuICAgIGNvbG9yOiAjYTUwO1xcbn1cXG5cXG4udGV4dGNvbG9yLTcgeyAgICAgICAgICAgICAgIC8qIHdoaXRlICovXFxuICAgIGNvbG9yOiAjYWFhO1xcbn1cXG5cXG4udGV4dGNvbG9yLTggeyAgICAgICAgICAgICAgIC8qIGRhcmsgZ3JheSAqL1xcbiAgICBjb2xvcjogIzU1NTtcXG59XFxuXFxuLnRleHRjb2xvci05IHsgICAgICAgICAgICAgICAvKiBsaWdodCBibHVlICovXFxuICAgIGNvbG9yOiAjNTVmO1xcbn1cXG5cXG4udGV4dGNvbG9yLTEwIHsgICAgICAgICAgICAgIC8qIGxpZ2h0IGdyZWVuICovXFxuICAgIGNvbG9yOiAjNWY1O1xcbn1cXG5cXG4udGV4dGNvbG9yLTExIHsgICAgICAgICAgICAgIC8qIGxpZ2h0IGN5YW4gKi9cXG4gICAgY29sb3I6ICM1ZmY7XFxufVxcblxcbi50ZXh0Y29sb3ItMTIgeyAgICAgICAgICAgICAgLyogbGlnaHQgcmVkICovXFxuICAgIGNvbG9yOiAjZjU1O1xcbn1cXG5cXG4udGV4dGNvbG9yLTEzIHsgICAgICAgICAgICAgIC8qIGxpZ2h0IG1hZ2VudGEgKi9cXG4gICAgY29sb3I6ICNmNWY7XFxufVxcblxcbi50ZXh0Y29sb3ItMTQgeyAgICAgICAgICAgICAgLyogeWVsbG93ICovXFxuICAgIGNvbG9yOiAjZmY1O1xcbn1cXG5cXG4udGV4dGNvbG9yLTE1IHsgICAgICAgICAgICAgIC8qIGJyaWdodCB3aGl0ZSAqL1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuXFxuXFxuLmJnY29sb3ItMCB7ICAgICAgICAgICAgICAgICAvKiBibGFjayAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uYmdjb2xvci0xIHsgICAgICAgICAgICAgICAgIC8qIGJsdWUgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTtcXG59XFxuXFxuLmJnY29sb3ItMiB7ICAgICAgICAgICAgICAgICAvKiBncmVlbiAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwO1xcbn1cXG5cXG4uYmdjb2xvci0zIHsgICAgICAgICAgICAgICAgIC8qIGN5YW4gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhYTtcXG59XFxuXFxuLmJnY29sb3ItNCB7ICAgICAgICAgICAgICAgICAvKiByZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwMDtcXG59XFxuXFxuLmJnY29sb3ItNSB7ICAgICAgICAgICAgICAgICAvKiBtYWdlbnRhICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGE7XFxufVxcblxcbi5iZ2NvbG9yLTYgeyAgICAgICAgICAgICAgICAgLyogYnJvd24gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1MDtcXG59XFxuXFxuLmJnY29sb3ItNyB7ICAgICAgICAgICAgICAgICAvKiB3aGl0ZSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xcbn1cXG5cXG4uYmdjb2xvci04IHsgICAgICAgICAgICAgICAgIC8qIGRhcmsgZ3JheSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG5cXG4uYmdjb2xvci05IHsgICAgICAgICAgICAgICAgIC8qIGxpZ2h0IGJsdWUgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1ZjtcXG59XFxuXFxuLmJnY29sb3ItMTAgeyAgICAgICAgICAgICAgICAvKiBsaWdodCBncmVlbiAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1O1xcbn1cXG5cXG4uYmdjb2xvci0xMSB7ICAgICAgICAgICAgICAgIC8qIGxpZ2h0IGN5YW4gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmZjtcXG59XFxuXFxuLmJnY29sb3ItMTIgeyAgICAgICAgICAgICAgICAvKiBsaWdodCByZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NTtcXG59XFxuXFxuLmJnY29sb3ItMTMgeyAgICAgICAgICAgICAgICAvKiBsaWdodCBtYWdlbnRhICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY7XFxufVxcblxcbi5iZ2NvbG9yLTE0IHsgICAgICAgICAgICAgICAgLyogeWVsbG93ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjU7XFxufVxcblxcbi5iZ2NvbG9yLTE1IHsgICAgICAgICAgICAgICAgLyogYnJpZ2h0IHdoaXRlICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSwgaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuYm9keSxcXG5pbnB1dCxcXG4jbG9hZGVyIHtcXG4gICAgY29sb3I6ICNhYWE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbmJvZHksXFxuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbiNsaW5laW5wdXQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbiNvdXRwdXQge1xcbiAgICBtYXgtd2lkdGg6IDc1MXB4O1xcbiAgICBwYWRkaW5nOiAwIDE1cHggMTBweCAxNXB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI291dHB1dCBzcGFuIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4jbGluZWlucHV0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTAwcHg7XFxufVxcblxcbiNsaW5laW5wdXQtZmllbGQge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oYXZlbndpbmRvdyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNhZmFyaWZpeCAuaGF2ZW53aW5kb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiNsb2FkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG59XFxuXFxuI2xvYWRlci1tZXNzYWdlIHtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2xvYWRlci5zdG9wcGVkICNsb2FkZXItbWVzc2FnZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4jc3Bpbm5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcGFkZGluZy10b3A6IDkwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG4gICAgY29sb3I6ICM1NTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiA1JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZSA1cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUge1xcbiAgICA1MCUgeyBsZWZ0OiA5MCU7IH1cXG4gICAgMTAwJSB7IGxlZnQ6IDUlOyB9XFxufVxcblxcbiNmYXRhbC1lcnJvciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwMDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLy8gUG9seWZpbGwgZm9yIGNyZWF0aW5nIEN1c3RvbUV2ZW50cyBvbiBJRTkvMTAvMTFcblxuLy8gY29kZSBwdWxsZWQgZnJvbTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kNHRvY2NoaW5pL2N1c3RvbWV2ZW50LXBvbHlmaWxsXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQjUG9seWZpbGxcblxudHJ5IHtcbiAgICB2YXIgY2UgPSBuZXcgd2luZG93LkN1c3RvbUV2ZW50KCd0ZXN0Jyk7XG4gICAgY2UucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY2UuZGVmYXVsdFByZXZlbnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICAvLyBJRSBoYXMgcHJvYmxlbXMgd2l0aCAucHJldmVudERlZmF1bHQoKSBvbiBjdXN0b20gZXZlbnRzXG4gICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMzNDkxOTFcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgcHJldmVudCBkZWZhdWx0Jyk7XG4gICAgfVxufSBjYXRjaChlKSB7XG4gIHZhciBDdXN0b21FdmVudCA9IGZ1bmN0aW9uKGV2ZW50LCBwYXJhbXMpIHtcbiAgICB2YXIgZXZ0LCBvcmlnUHJldmVudDtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgIGRldGFpbDogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcbiAgICBvcmlnUHJldmVudCA9IGV2dC5wcmV2ZW50RGVmYXVsdDtcbiAgICBldnQucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBvcmlnUHJldmVudC5jYWxsKHRoaXMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdkZWZhdWx0UHJldmVudGVkJywge1xuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGV2dDtcbiAgfTtcblxuICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xuICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDsgLy8gZXhwb3NlIGRlZmluaXRpb24gdG8gd2luZG93XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9odWdvLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9odWdvLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaHVnby5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi91aS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdWkuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi91aS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBhc3NldHMgdGhhdCBuZWVkIHRvIGxvYWQgYmVmb3JlIHdlIGNhbiBzdGFydFxuY29uc3QgZXhwZWN0ZWRBc3NldHMgPSBbICdlbmdpbmUnLCAnc3RvcnlmaWxlJyBdO1xuXG4vLyBmdW5jdGlvbnMgdGhhdCBhcmUgY2FsbGVkIHdoZW4gYWxsIGFzc2V0cyBoYXZlIGxvYWRlZFxuY29uc3QgY2FsbGJhY2tzID0gW107XG5cbi8vIHRoZSBjYWxsYmFjayB0aGF0J3MgY2FsbGVkIHRoZSB2ZXJ5IGxhc3RcbmxldCBsYXN0Q2FsbGJhY2s7XG5cblxuLyoqXG4gKiBXaGVuIGFsbCBhc3NldHMgYXJlIHJlYWR5LCBydW4gdGhlIGNhbGxiYWNrcy5cbiAqL1xuZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbWV0YUNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgaWYoIGkgPCBjYWxsYmFja3MubGVuZ3RoICkge1xuICAgICAgICAgICAgY2FsbGJhY2tzWyBpIF0oIG1ldGFDYWxsYmFjayApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGxhc3RDYWxsYmFjayApIHtcbiAgICAgICAgICAgIGxhc3RDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmKCBjYWxsYmFja3MubGVuZ3RoID09PSAwICkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FsbGJhY2tzWyAwIF0oIG1ldGFDYWxsYmFjayApO1xufVxuXG5cbi8qKlxuICogQWRkcyBhIGNhbGxiYWNrIHRoYXQncyBydW4gd2hlbiBhbGwgYXNzZXRzIGFyZSByZWFkeS5cbiAqIElmIGFsbCBhc3NldHMgaGF2ZSBhbHJlYWR5IGxvYWRlZCwgY2FsbCB0aGUgY2FsbGJhY2sgaW1tZWRpYXRlbHkuXG4gKlxuICogVGhlIGZpcnN0IHBhcmFtZXRlciBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gbXVzdCBiZSBhIGZ1bmN0aW9uIHRoYXRcbiAqIGl0c2VsZiBjYWxscyBhcyBhIGNhbGxiYWNrIHdoZW4gaXQgaGFzIGZpbmlzaGVkLlxuICpcbiAqIEBwYXJhbSBjYlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FsbGJhY2soIGNiICkge1xuICAgIGlmKCBleHBlY3RlZEFzc2V0cy5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIGZ1bmN0aW9uIGNvbnNpc3RlbnRseSBhc3luY2hyb25vdXNcbiAgICAgICAgc2V0VGltZW91dCggY2IsIDAgKTtcbiAgICB9XG5cbiAgICBjYWxsYmFja3MucHVzaCggY2IgKTtcbn07XG5cblxuLyoqXG4gKiBBZGQgYW4gZXhwZWN0ZWQgYXNzZXQgdG8gdGhlIGxpc3QuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gYXNzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cGVjdCggYXNzZXQgKSB7XG4gICAgaWYoIGV4cGVjdGVkQXNzZXRzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCAnQW4gZXhwZWN0ZWQgYXNzZXQgXCInICsgYXNzZXQgKyAnXCIgd2FzIGFkZGVkICdcbiAgICAgICAgICAgICsgJ2J1dCBhbGwgcHJldmlvdXMgYXNzZXRzIGhhdmUgYWxyZWFkeSBmaW5pc2hlZCBsb2FkaW5nJyApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXhwZWN0ZWRBc3NldHMucHVzaCggYXNzZXQgKTtcbn07XG5cblxuLyoqXG4gKiBBcyBhIGJpdCBvZiBhIGhhY2sgdGhpcyBlbnN1cmVzIHRoZSBnYW1lIHN0YXJ0aW5nIGNhbGxiYWNrIGlzIGFsd2F5c1xuICogdGhlIGxhc3Qgb25lLlxuICpcbiAqIEBwYXJhbSBjYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluYWxDYWxsYmFjayggY2IgKSB7XG4gICAgbGFzdENhbGxiYWNrID0gY2I7XG59O1xuXG5cbi8qKlxuICogV2hlbiBhbiBhc3NldCBoYXMgZmluaXNoZWQgbG9hZGluZywgdGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cbiAqXG4gKiBAcGFyYW0gYXNzZXQgVGhlIG5hbWUgb2YgdGhlIGFzc2V0IHRoYXQncyByZWFkeVxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgYXNzZXQgd2FzIGV4cGVjdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5pc2hlZCggYXNzZXQgKSB7XG4gICAgY29uc3QgaW5kZXggPSBleHBlY3RlZEFzc2V0cy5pbmRleE9mKCBhc3NldCApO1xuXG4gICAgaWYoIGluZGV4ID09PSAtMSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBmcm9tIHRoZSBsaXN0IG9mIGV4cGVjdGVkIGFzc2V0c1xuICAgIGV4cGVjdGVkQXNzZXRzLnNwbGljZSggaW5kZXgsIDEgKTtcblxuICAgIC8vIGlmIGV2ZXJ5dGhpbmcncyByZWFkeSwgcnVuIHRoZSBjYWxsYmFja3NcbiAgICBpZiggZXhwZWN0ZWRBc3NldHMubGVuZ3RoID09PSAwICkge1xuICAgICAgICBkb25lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59OyIsImltcG9ydCB7IGZpbmlzaGVkIH0gZnJvbSBcIi4vYXNzZXRzXCI7XG5pbXBvcnQgZXJyb3IgZnJvbSBcIi4vZXJyb3JcIjtcblxud2luZG93Lk1vZHVsZSA9IHtcbiAgICBhcmd1bWVudHM6IFtdLFxuICAgIHByZVJ1bjogW10sXG4gICAgcG9zdFJ1bjogWyBmdW5jdGlvbigpIHsgZmluaXNoZWQoICdlbmdpbmUnICk7IH0gXSxcbiAgICBwcmludDogZnVuY3Rpb24oIHRleHQgKSB7XG4gICAgICAgIC8vIFRoZSBlbmdpbmUgc2hvdWxkIGFsd2F5cyB1c2UgdGhlIGN1c3RvbSB0ZXh0IHByaW50aW5nIG1ldGhvZHMuXG4gICAgICAgIC8vIEFueXRoaW5nIHByaW50ZWQgdG8gc3Rkb3V0IGlzIGFuIGVycm9yLlxuICAgICAgICBlcnJvciggXCJVbmV4cGVjdGVkIGVuZ2luZSBvdXRwdXQgdG8gc3Rkb3V0OiBcIiArIHRleHQgKTtcbiAgICB9LFxuICAgIHByaW50RXJyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coIGFyZ3VtZW50cyApO1xuICAgICAgICBlcnJvciggQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5qb2luKCcgJykgKTtcbiAgICB9LFxuICAgIFRPVEFMX01FTU9SWTogMzM1NTQ0MzIgIC8vIFR3aWNlIHRoZSBkZWZhdWx0OyB0aGlzIGlzIGVub3VnaCB0byBydW4gYW55IGV4aXN0aW5nIEdsdWx4IGdhbWUuXG59OyIsImltcG9ydCB7IHRleHRXYXNQcmludGVkIH0gZnJvbSBcIi4vaW5wdXRcIjtcblxuLy8gb3V0cHV0IGJ1ZmZlcnMgZm9yIGFsbCB3aW5kb3dzXG5jb25zdCBvdXRwdXRCdWZmZXIgPSBbIFwiXCIgXTtcblxuXG4vKipcbiAqIE1ha2UgdGV4dCBIVE1MLXByaW50YWJsZVxuICpcbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVIdG1sKCB0ZXh0ICkge1xuICAgIGxldCBlbmNvZGVkID0gXCJcIjtcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyArK2kgKSB7XG5cbiAgICAgICAgLy8gRXh0ZW5kZWQgTGF0aW4tMSBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgYWRkZWQgYXMgSFRNTCBlbnRpdGllc1xuICAgICAgICBpZiggdGV4dC5jaGFyQ29kZUF0KCBpICkgPiAxMjcgKSB7XG4gICAgICAgICAgICBlbmNvZGVkICs9IFwiJiNcIiArIHRleHQuY2hhckNvZGVBdCggaSApICsgXCI7XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2goIHRleHRbIGkgXSApIHtcbiAgICAgICAgICAgICAgICBjYXNlICcmJzpcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlZCArPSAnJmFtcDsnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVkICs9ICcmbHQ7JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlZCArPSAnJmd0Oyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnXFxyJzpcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlZCArPSAnXFxuJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVkICs9IHRleHRbIGkgXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW5jb2RlZDtcbn1cblxuXG4vKipcbiAqIEFkZCB0ZXh0IHRvIHRoZSB0ZXh0IGJ1ZmZlclxuICpcbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gdGFyZ2V0V2luZG93XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmQoIHRleHQsIHRhcmdldFdpbmRvdyApIHtcbiAgICBpZiggIW91dHB1dEJ1ZmZlclsgdGFyZ2V0V2luZG93IF0gKSB7XG4gICAgICAgIG91dHB1dEJ1ZmZlclsgdGFyZ2V0V2luZG93IF0gPSBcIlwiO1xuICAgIH1cblxuICAgIGlmKCB0ZXh0LmluZGV4T2YoICdcXG4nICkgPiAtMSB8fCB0ZXh0LmluZGV4T2YoICdcXHInICkgPiAtMSApIHtcbiAgICAgICAgY29uc3QgbmV4dExCUiA9IE1hdGgubWF4KCB0ZXh0Lmxhc3RJbmRleE9mKCAnXFxuJyApLCB0ZXh0Lmxhc3RJbmRleE9mKCAnXFxyJyApICkgKyAxO1xuXG4gICAgICAgIG91dHB1dEJ1ZmZlclsgdGFyZ2V0V2luZG93IF0gKz0gZW5jb2RlSHRtbCggdGV4dC5zdWJzdHIoIDAsIG5leHRMQlIgKSApO1xuICAgICAgICBmbHVzaCggdGFyZ2V0V2luZG93ICk7XG4gICAgICAgIG91dHB1dEJ1ZmZlclsgdGFyZ2V0V2luZG93IF0gPSBlbmNvZGVIdG1sKCB0ZXh0LnN1YnN0ciggbmV4dExCUiApICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBvdXRwdXRCdWZmZXJbIHRhcmdldFdpbmRvdyBdICs9IGVuY29kZUh0bWwoIHRleHQgKTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBQcmludCBvdXQgdGhlIHRleHQgYnVmZmVyXG4gKlxuICogQHBhcmFtIHRhcmdldFdpbmRvd1xuICovXG5leHBvcnQgZnVuY3Rpb24gZmx1c2goIHRhcmdldFdpbmRvdyApIHtcbiAgICBpZiggdGFyZ2V0V2luZG93ID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgIGZvciggdmFyIGkgaW4gb3V0cHV0QnVmZmVyICkge1xuICAgICAgICAgICAgZmx1c2goICtpICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggIW91dHB1dEJ1ZmZlclsgdGFyZ2V0V2luZG93IF0gfHwgIWhhdmVuLndpbmRvdy5nZXQoIHRhcmdldFdpbmRvdyApICkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4vLyAgICAgICAgY29uc29sZS5sb2coJ2ZsdXNoaW5nJywgb3V0cHV0QnVmZmVyWyB0YXJnZXRXaW5kb3cgXSApO1xuICAgIC8vIGlmKCBvdXRwdXRCdWZmZXJbIHRhcmdldFdpbmRvdyBdID09PSAnXFxuJykgZGVidWdnZXI7XG5cbiAgICBoYXZlbi53aW5kb3cuYXBwZW5kKCBvdXRwdXRCdWZmZXJbIHRhcmdldFdpbmRvdyBdLCB0YXJnZXRXaW5kb3cgKTtcbiAgICBvdXRwdXRCdWZmZXJbIHRhcmdldFdpbmRvdyBdID0gXCJcIjtcblxuICAgIGlmKCB0YXJnZXRXaW5kb3cgPT09IDAgKSB7XG4gICAgICAgIHRleHRXYXNQcmludGVkKCB0cnVlICk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhIG5ld2xpbmUgdG8gdGhlIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0V2luZG93XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXdsaW5lKCB0YXJnZXRXaW5kb3cgKSB7XG4gICAgaWYoIG91dHB1dEJ1ZmZlclsgdGFyZ2V0V2luZG93IF0gKSB7XG4gICAgICAgIG91dHB1dEJ1ZmZlclsgdGFyZ2V0V2luZG93IF0gKz0gJ1xcbic7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBvdXRwdXRCdWZmZXJbIHRhcmdldFdpbmRvdyBdID0gJ1xcbic7XG4gICAgfVxuXG4gICAgZmx1c2goIHRhcmdldFdpbmRvdyApO1xufVxuIiwiLyoqXG4gKiBTaG93IGFuIGVycm9yIG1lc3NhZ2UgYW5kIGhhbHQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVycm9yKCBtZXNzYWdlICkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NwaW5uZXInICk7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsb2FkZXInICk7XG5cbiAgICBlbGVtLmlkID0gJ2ZhdGFsLWVycm9yJztcbiAgICBlbGVtLmlubmVySFRNTCA9IG1lc3NhZ2U7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZWxlbSApO1xuXG4gICAgLy8gcmVtb3ZlIHNwaW5uZXIgYW5pbWF0aW9uIGlmIGVycm9yIGhhcHBlbmVkIG9uIGxvYWRcbiAgICBpZiggc3Bpbm5lciApIHtcbiAgICAgICAgc3Bpbm5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBzcGlubmVyICk7XG4gICAgfVxuXG4gICAgLy8gdmlzdWFsIG5vdGlmaWNhdGlvbiB0aGF0IGxvYWRpbmcgaGFzIHN0b3BwZWRcbiAgICBpZiggbG9hZGVyICkge1xuICAgICAgICBsb2FkZXIuY2xhc3NOYW1lID0gJ3N0b3BwZWQnO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvciggbWVzc2FnZSApO1xufVxuIiwicmVxdWlyZSggXCJjdXN0b20tZXZlbnQtcG9seWZpbGxcIiApO1xuXG5pbXBvcnQgeyBhZGRDYWxsYmFjaywgZmluaXNoZWQgfSBmcm9tIFwiLi9hc3NldHNcIjtcbmltcG9ydCBlcnJvciBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHsga2V5cHJlc3MgfSBmcm9tIFwiLi9pbnB1dFwiO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgZ2V0IGFzIGdldFByb21wdCB9IGZyb20gXCIuL3Byb21wdFwiO1xuaW1wb3J0IHsgYXV0b3NhdmUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuXG5sZXQgaW50ZXJwcmV0ZXJMb2FkZWQgPSBmYWxzZTtcbmxldCBpc0dhbWVmaWxlTG9hZGVkID0gZmFsc2U7XG5sZXQgZ2FtZWZpbGU7XG5sZXQgY2hlY2tzdW07XG5sZXQgZGF0YWRpcjtcbmxldCBzdG9yeUZpbGVuYW1lO1xuXG5cbi8qKlxuICogRk5WMzItYWxnb3JpdGhtIHRvIGNhbGN1bGF0ZSB0aGUgc3RvcnkgZmlsZSdzIGNoZWNrc3VtLlxuICogVGhlIGNoZWNrc3VtIGlzIHVzZWQgdG8gbmFtZSB0aGUgZGlyZWN0b3JpZXMgZm9yIHNhdmUgZ2FtZXMuXG4gKlxuICogVGFrZW4gZnJvbSBodHRwczovL2NvZGVwZW4uaW8vSW1hZ2luZVByb2dyYW1taW5nL3Bvc3QvY2hlY2tzdW0tYWxnb3JpdGhtcy1pbi1qYXZhc2NyaXB0LWNoZWNrc3VtLWpzLWVuZ2luZVxuICovXG5mdW5jdGlvbiBmbnYzMiggYSApIHtcbiAgICBjb25zdCBsZW4gPSBhLmxlbmd0aDtcbiAgICBsZXQgZm52ID0gMDtcblxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICAgIGZudiA9IChmbnYgKyAoKChmbnYgPDwgMSkgKyAoZm52IDw8IDQpICsgKGZudiA8PCA3KSArIChmbnYgPDwgOCkgKyAoZm52IDw8IDI0KSkgPj4+IDApKSBeIChhWyBpIF0gJiAweGZmKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm52ID4+PiAwO1xufVxuXG5cbi8qKlxuICogV3JpdGVzIHRoZSBsb2FkZWQgZ2FtZSBmaWxlIGludG8gdGhlIHZpcnR1YWwgZmlsZSBzeXN0ZW0sIGJ1dCBvbmx5XG4gKiBpZiBib3RoIHRoZSBpbnRlcnByZXRlciBhbmQgdGhlIGdhbWUgZmlsZSBhcmUgYm90aCBsb2FkZWQuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSB3aGVuIGFsbCByZXF1aXJlZCBhc3NldHMgaGF2ZSBmaW5pc2hlZCBsb2FkaW5nXG4gKi9cbmZ1bmN0aW9uIHdyaXRlR2FtZWZpbGUoIGRvbmUgKSB7XG4gICAgLy8gcmUtc2hvdyBsb2FkZXIgaWYgaGlkZGVuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsb2FkZXInICkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIGlmKCAhaW50ZXJwcmV0ZXJMb2FkZWQgfHwgIWlzR2FtZWZpbGVMb2FkZWQgKSB7XG4gICAgICAgIGlmKCAhaW50ZXJwcmV0ZXJMb2FkZWQgKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvYWRlci1tZXNzYWdlJyApLmlubmVySFRNTCA9ICdMb2FkaW5nIGludGVycHJldGVyJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbG9hZGVyLW1lc3NhZ2UnICkuaW5uZXJIVE1MID0gJ0xvYWRpbmcgZ2FtZSBmaWxlJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbG9hZGVyLW1lc3NhZ2UnICkuaW5uZXJIVE1MID0gJ1N0YXJ0aW5nIGdhbWUnO1xuXG4gICAgRlMud3JpdGVGaWxlKFxuICAgICAgICBzdG9yeUZpbGVuYW1lLFxuICAgICAgICBnYW1lZmlsZSxcbiAgICAgICAge2VuY29kaW5nOiAnYmluYXJ5J31cbiAgICApO1xuXG4gICAgLy8gY3JlYXRlIHRoZSB2aXJ0dWFsIHNhdmVmaWxlIGRpcmVjdG9yeSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgZGF0YWRpciA9ICcvZ2FtZWRhdGFfJyArIGNoZWNrc3VtO1xuXG4gICAgaWYoICFGUy5hbmFseXplUGF0aCggZGF0YWRpciApLmV4aXN0cyApIHtcbiAgICAgICAgRlMubWtkaXIoIGRhdGFkaXIgKTtcbiAgICB9XG5cbiAgICBGUy5tb3VudCggSURCRlMsIHtyb290OiAnLid9LCBkYXRhZGlyICk7XG5cbiAgICAvLyBjcmVhdGUgYSBkaXJlY3RvcnkgZm9yIHNoYXJlZCBnYW1lIGRhdGFcbiAgICBpZiggIUZTLmFuYWx5emVQYXRoKCAnZ2FtZWRhdGEnICkuZXhpc3RzICkge1xuICAgICAgICBGUy5ta2RpciggJ2dhbWVkYXRhJyApO1xuICAgIH1cblxuICAgIEZTLm1vdW50KCBJREJGUywge3Jvb3Q6ICcuJ30sICdnYW1lZGF0YScgKTtcbiAgICBGUy5jaGRpciggJ2dhbWVkYXRhJyApO1xuXG4gICAgLy8gc3luY2hyb25pemUgd2l0aCBsb2NhbCBkYXRhXG4gICAgRlMuc3luY2ZzKCB0cnVlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoIGdldCggJ2F1dG9zYXZlJyApICkge1xuICAgICAgICAgICAgYXV0b3NhdmUuc2V0TmFtZSggJy9nYW1lZGF0YV8nICsgY2hlY2tzdW0gKyAnL2F1dG9zYXZlJyApO1xuICAgICAgICAgICAgYXV0b3NhdmUucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhcnQgcmVhY3RpbmcgdG8ga2V5cHJlc3Nlc1xuICAgICAgICBrZXlwcmVzcy5pbml0KCk7XG5cbiAgICAgICAgZG9uZSgpO1xuICAgIH0gKTtcbn1cblxuXG4vKipcbiAqIFN0YXJ0IGxvYWRpbmcgdGhlIHN0b3J5IGZpbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCB2aXJ0dWFsRmlsZW5hbWUgKSB7XG4gICAgY29uc3QgZ2FtZVVybCA9IGdldCggJ3N0b3J5JyApO1xuICAgIGNvbnN0IHVwbG9hZGVkRmlsZSA9IGdldCggJ3VwbG9hZGVkRmlsZScgKTtcbiAgICBjb25zdCBwcm94eU9wdGlvbiA9IGdldCggJ3VzZV9wcm94eScgKTtcbiAgICBsZXQgcmVxdWVzdFVybDtcbiAgICBsZXQgdXNlUHJveHk7XG5cbiAgICBjb25zdCBwcm9jZXNzU3RvcnlGaWxlID0gZnVuY3Rpb24oIGZpbGUgKSB7XG4gICAgICAgIGlzR2FtZWZpbGVMb2FkZWQgPSB0cnVlO1xuICAgICAgICBnYW1lZmlsZSA9IG5ldyBVaW50OEFycmF5KCBmaWxlICk7XG4gICAgICAgIGNoZWNrc3VtID0gZm52MzIoIGdhbWVmaWxlICkudG9TdHJpbmcoIDE2ICk7XG5cbiAgICAgICAgLy8gc2lnbmFsIHRoYXQgdGhlIHN0b3J5IGZpbGUgaXMgcmVhZHlcbiAgICAgICAgZmluaXNoZWQoICdzdG9yeWZpbGUnICk7XG4gICAgfTtcblxuICAgIHN0b3J5RmlsZW5hbWUgPSB2aXJ0dWFsRmlsZW5hbWU7XG5cbiAgICAvLyBpZiB0aGUgdXNlciBoYXMgdXBsb2FkZWQgYSBmaWxlLCBwcm9jZXNzIHRoYXQgaW5zdGVhZCBvZiBsb2FkaW5nIGZyb20gYSBVUkxcbiAgICBpZiggdXBsb2FkZWRGaWxlICkge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiggZSApIHtcbiAgICAgICAgICAgIGNvbnN0IHVwbG9hZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndXBsb2FkQ29udGFpbmVyJyApO1xuXG4gICAgICAgICAgICBpZiggdXBsb2FkQ29udGFpbmVyICkge1xuICAgICAgICAgICAgICAgIHVwbG9hZENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB1cGxvYWRDb250YWluZXIgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvY2Vzc1N0b3J5RmlsZSggZS50YXJnZXQucmVzdWx0ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYWRkQ2FsbGJhY2soIHdyaXRlR2FtZWZpbGUgKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKCB1cGxvYWRlZEZpbGUgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYoICFnYW1lVXJsICkge1xuICAgICAgICBlcnJvciggXCJObyBzdG9yeSBmaWxlIHNwZWNpZmllZFwiICk7XG4gICAgfVxuXG4gICAgY29uc3QgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgc3dpdGNoKCBcIlwiICsgcHJveHlPcHRpb24gKSB7XG4gICAgICAgIGNhc2UgJ2Fsd2F5cyc6XG4gICAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgIHVzZVByb3h5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ25ldmVyJzpcbiAgICAgICAgY2FzZSAnZmFsc2UnOlxuICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgIHVzZVByb3h5ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcblxuLy8gICAgICAgICAgY2FzZSAnYXV0byc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyB1c2UgcHJveHkgZm9yIENPUlMgcmVxdWVzdHNcbiAgICAgICAgICAgIHVzZVByb3h5ID0gL15odHRwcz86XFwvXFwvLy50ZXN0KCBnYW1lVXJsICkgJiYgZ2FtZVVybC5pbmRleE9mKCB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKSAhPT0gMDtcblxuICAgICAgICAgICAgLy8gd2FybiBhYm91dCBpbnZhbGlkIG9wdGlvblxuICAgICAgICAgICAgaWYoIHByb3h5T3B0aW9uICE9PSAnYXV0bycgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCAnVW5rbm93biB1c2VfcHJveHkgb3B0aW9uIFwiJyArIHByb3h5T3B0aW9uICsgJ1wiLCB1c2luZyBcImF1dG9cIicgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmKCB1c2VQcm94eSApIHtcbiAgICAgICAgcmVxdWVzdFVybCA9IGdldCggJ3Byb3h5X3VybCcgKS5zcGxpdCggJyVzJyApLmpvaW4oIGVuY29kZVVSSUNvbXBvbmVudCggZ2FtZVVybCApICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXF1ZXN0VXJsID0gZ2FtZVVybDtcbiAgICB9XG5cbiAgICBhZGRDYWxsYmFjayggd3JpdGVHYW1lZmlsZSApO1xuXG4gICAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoIHhtbGh0dHAucmVhZHlTdGF0ZSA9PSBYTUxIdHRwUmVxdWVzdC5ET05FICkge1xuICAgICAgICAgICAgc3dpdGNoKCB4bWxodHRwLnN0YXR1cyApIHtcbiAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1N0b3J5RmlsZSggeG1saHR0cC5yZXNwb25zZSApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgICAgICBlcnJvciggXCJHYW1lIGZpbGUgbm90IGZvdW5kXCIgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQxNTpcbiAgICAgICAgICAgICAgICAgICAgaWYoIHVzZVByb3h5ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoIG51bGwsIG5ldyBVaW50OEFycmF5KCB4bWxodHRwLnJlc3BvbnNlICkgKSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IoICdVbnN1cHBvcnRlZCBNZWRpYSBUeXBlIGVycm9yIGVuY291bnRlcmVkIHdoZW4gbG9hZGluZyBnYW1lIGZpbGUnICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDA6ICAgICAvLyBwcm9iYWJseSBjcm9zcy1vcmlnaW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoIFwiVW5zcGVjaWZpZWQgZXJyb3IgbG9hZGluZyBnYW1lIGZpbGUgKHBvc3NpYmx5IGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbilcIiApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKCBcIkVycm9yIGxvYWRpbmcgZ2FtZSBmaWxlLiBTZXJ2ZXIgcmV0dXJuZWQgc3RhdHVzIGNvZGUgXCIgKyB4bWxodHRwLnN0YXR1cyArIFwiIChcIiArIHhtbGh0dHAuc3RhdHVzVGV4dCArIFwiKVwiICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhtbGh0dHAub3BlbiggXCJHRVRcIiwgcmVxdWVzdFVybCwgdHJ1ZSApO1xuICAgIHhtbGh0dHAucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiOyAgIC8vIHRoaXMgbXVzdCBiZSBleGFjdGx5IGhlcmUsIG90aGVyd2lzZSBJRTExIGJyZWFrc1xuICAgIHhtbGh0dHAuc2VuZCgpO1xufTtcblxuXG4vKipcbiAqIEFzayB0aGUgdXNlciB0byBwcm92aWRlIGEgZmlsZSBuYW1lLlxuICpcbiAqIEBwYXJhbSB3aHkgVGhlIHJlYXNvbiB3aHkgYSBmaWxlIGlzIGJlaW5nIHByb21wdGVkLlxuICogICAgICAgICAgICBPbmUgb2YgXCJmb3IgY29tbWFuZCByZWNvcmRpbmdcIiwgXCJmb3IgY29tbWFuZCBwbGF5YmFja1wiLFxuICogICAgICAgICAgICBcInRvIHJlc3RvcmVcIiwgXCJ0byBzYXZlXCIgb3IgXCJ0byBiZWdpbiB0cmFuc2NyaXB0aW9uIChvciBwcmludGVyIG5hbWUpXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb21wdCggd2h5ICkge1xuICAgIGNvbnN0IGZpbGVuYW1lID0gd2luZG93LnByb21wdCggXCJFbnRlciBmaWxlbmFtZSBcIiArIHdoeSApO1xuICAgIGNvbnN0IGlucHV0ID0gZ2V0UHJvbXB0KCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggXCJJTlBVVFwiIClbMF07XG5cbiAgICBpZiggZmlsZW5hbWUgJiYgL1xcUy8udGVzdCggZmlsZW5hbWUgKSApIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBkYXRhZGlyICsgJy8nICsgZmlsZW5hbWUuc3BsaXQoICcvJyApLmpvaW4oICctJyApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH1cblxuICAgIC8vIHdlJ2xsIGhhdmUgdG8gd2FpdCBmb3IgdGhlIFVJIHRvIGdldCByZWFkeSBiZWZvcmUgc3VibWl0dGluZyB0aGUgaW5wdXRcbiAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgZ2V0UHJvbXB0LmRpc3BhdGNoRXZlbnQoIG5ldyBFdmVudCggJ3N1Ym1pdCcgKSApO1xuXG4gICAgICAgIC8vIC4uYW5kIGFub3RoZXIgdGltZW91dCB0byBzeW5jIHRoZSBmaWxlc3lzdGVtLlxuICAgICAgICAvLyBXZSBzaG91bGQgaG9vayB0byB0aGUgZmlsZSBzYXZlIGl0c2VsZiwgYnV0IHRoaXMgc2hvdWxkIGRvIGZvciBub3csXG4gICAgICAgIC8vIGVzcGVjaWFsbHkgc2luY2UgdGhpcyBleGlzdHMgb25seSBhcyBhIGJhY2t1cCBtZWFzdXJlIGlmIHRoZVxuICAgICAgICAvLyBzYW1lIHRoaW5nIGluIHRoZSBvbmJlZm9yZXVubG9hZCBldmVudCBmYWlscy5cbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBGUy5zeW5jZnMoIGZhbHNlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfSwgMTAwMCApO1xuICAgIH0sIDEgKTtcbn07XG5cblxuLyoqXG4gKiBSZWFkIHRoZSBVSSBzdGF0ZSBmcm9tIHRoZSBmaWxlc3lzdGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZFVJU3RhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBGUy5yZWFkRmlsZShcbiAgICAgICAgICAgIGF1dG9zYXZlRmlsZW5hbWUgKyAnX2hhdmVuX3VpZGF0YScsXG4gICAgICAgICAgICB7ZW5jb2Rpbmc6ICd1dGY4J31cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSggc3RhdGUgKTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuXG5cbi8qKlxuICogU3luY2hyb25pemUgdmlydHVhbCBmaWxlc3lzdGVtIHN0YXR1cyB3aXRoIEluZGV4ZWREQi5cbiAqIENhbGxlZCBieSB0aGUgZW5naW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3luY2ZzKCkge1xuICAgIEZTLnN5bmNmcyggZmFsc2UsIGZ1bmN0aW9uKCkge30gKTtcbn07XG5cblxuLy8gc3RvcmUgZGF0YSBzYXZlZCBieSB0aGUgZ2FtZSBmaWxlXG53aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBGUy5zeW5jZnMoIGZhbHNlLCBmdW5jdGlvbigpIHt9ICk7XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvYWRlci1tZXNzYWdlJyApLmlubmVySFRNTCA9ICdMb2FkaW5nIGludGVycHJldGVyIGFuZCBnYW1lIGZpbGUnO1xuIiwiaW1wb3J0IHthZGRDYWxsYmFjaywgZmluYWxDYWxsYmFja30gZnJvbSBcIi4vYXNzZXRzXCI7XG5pbXBvcnQge2luaXQgYXMgaW5pdEZpbGV9IGZyb20gXCIuL2ZpbGVcIjtcbmltcG9ydCB7aW5pdCBhcyBpbnB1dEluaXR9IGZyb20gXCIuL2lucHV0XCI7XG5pbXBvcnQge3JlbW92ZX0gZnJvbSBcIi4vbG9hZGVyXCI7XG5pbXBvcnQge2luaXQgYXMgaW5pdE9wdGlvbnN9IGZyb20gXCIuL29wdGlvbnNcIjtcbmltcG9ydCB7aW5pdCBhcyBpbml0UHJvbXB0fSBmcm9tIFwiLi9wcm9tcHRcIjtcbmltcG9ydCB7aW5pdCBhcyBpbml0U3R5bGV9IGZyb20gXCIuL3N0eWxlXCI7XG5pbXBvcnQgRmFzdENsaWNrIGZyb20gXCIuL3ZlbmRvci9mYXN0Y2xpY2tcIjtcblxuLyoqXG4gKiBTdGFydHMgdGhlIEMgZW5naW5lLiBUaGUgZW5naW5lIHNob3VsZCBoYXZlIHJlcGxhY2VkIG1haW4oKSB3aXRoIGFuXG4gKiBvdGhlcndpc2UgZW1wdHkgZnVuY3Rpb24gdGhhdCBvbmx5IHN0b3JlcyB0aGUgY29tbWFuZCBsaW5lIGFyZ3VtZW50c1xuICogZm9yIHBhc3NpbmcgdG8gdGhlIHJlYWwgbWFpbigpIGxhdGVyLlxuICpcbiAqIHN0YXJ0RW5naW5lKCkgY2FsbHMgaGF2ZW5fc3RhcnQoKSBpbiB0aGUgQyBjb2RlLCB3aGljaCBzaG91bGQgcnVuXG4gKiB0aGUgcmVhbCBtYWluKCkgZnVuY3Rpb24gdGhhdCBoYXMgYmVlbiByZW5hbWVkIHRvIHNvbWV0aGluZyBlbHNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogc3RhdGljIGNoYXIgKipteV9hcmd2O1xuICpcbiAqIGludCBtYWluKGludCBhcmdjLCBjaGFyICphcmd2W10pXG4gKiB7XG4gICAgICogICAgbXlfYXJndiA9IGFyZ3Y7XG4gICAgICogICAgcmV0dXJuIDA7XG4gICAgICogfVxuICpcbiAqIGludCBFTVNDUklQVEVOX0tFRVBBTElWRSBoYXZlbl9zdGFydCgpXG4gKiB7XG4gICAgICogICAgcmV0dXJuIHJlYWxfbWFpbigyLCBteV9hcmd2KTtcbiAgICAgKiB9XG4gKlxuICogaW50IHJlYWxfbWFpbihpbnQgYXJnYywgY2hhciAqYXJndltdKSAgLy8gcmVuYW1lZCBmcm9tIG1haW4oKVxuICovXG5mdW5jdGlvbiBzdGFydEVuZ2luZSgpIHtcbiAgICBfaGF2ZW5fc3RhcnQoKTtcbn1cblxuXG4vKipcbiAqIFN0YXJ0IHRoZSBnYW1lLiBJZiBhc3NldHMgaGF2ZW4ndCBsb2FkZWQgeWV0LCB0aGUgZ2FtZSBzdGFydHNcbiAqIGFzIHNvb24gYXMgdGhleSdyZSByZWFkeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCBvcHQgKSB7XG4gICAgLy8gbG9hZCB0aGUgRW10ZXJwcmV0ZXIgZW5naW5lXG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICB4aHIub3BlbiggJ0dFVCcsICdlbmdpbmUuYmluJywgdHJ1ZSApO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgTW9kdWxlLmVtdGVycHJldGVyRmlsZSA9IHhoci5yZXNwb25zZTtcblxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc2NyaXB0JyApO1xuICAgICAgICBzY3JpcHQuc3JjID0gJ2VuZ2luZS5qcyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHNjcmlwdCApO1xuICAgIH07XG4gICAgeGhyLnNlbmQoIG51bGwgKTtcblxuICAgIC8vIHJlYWQgb3B0aW9ucyBmcm9tIFVSTFxuICAgIGluaXRPcHRpb25zKCBvcHQub3B0aW9ucyApO1xuXG4gICAgLy8gbG9hZCB0aGUgc3RvcnkgZmlsZVxuICAgIGluaXRGaWxlKCBvcHQudmlydHVhbFN0b3J5ZmlsZSApO1xuXG4gICAgLy8gc2V0IHVwIGlucHV0IGhhbmRsZXJzXG4gICAgYWRkQ2FsbGJhY2soIGZ1bmN0aW9uKCBjYiApIHtcbiAgICAgICAgaW5wdXRJbml0KCk7XG4gICAgICAgIGNiKCk7XG4gICAgfSApO1xuXG4gICAgLy8gc2V0IHVwIHRoZSBwcm9tcHRcbiAgICBpbml0UHJvbXB0KCB7XG4gICAgICAgIGVuZ2luZVByb21wdDogISFvcHQuZW5naW5lUHJvbXB0LFxuICAgICAgICB1bmljb2RlOiAhIW9wdC51bmljb2RlXG4gICAgfSApO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBzdHlsZSBvcHRpb25zXG4gICAgaW5pdFN0eWxlKCB7XG4gICAgICAgIGVuZ2luZUNvbG9yczogISFvcHQuZW5naW5lQ29sb3JzLFxuICAgICAgICBlbmdpbmVGb250RmFtaWx5OiAhIW9wdC5lbmdpbmVGb250RmFtaWx5XG4gICAgfSApO1xuXG4gICAgLy8gcmVtb3ZlIHRoZSBsb2FkZXJcbiAgICBhZGRDYWxsYmFjayggZnVuY3Rpb24oIGNiICkge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgY2IoKTtcbiAgICB9ICk7XG5cbiAgICAvLyBzdGFydCB0aGUgZW5naW5lXG4gICAgZmluYWxDYWxsYmFjayggc3RhcnRFbmdpbmUgKTtcblxuICAgIC8qKlxuICAgICAqIGZhc3RjbGljay5qcyBpbml0aWFsaXplciAtIGZpeGVzIHRhcHBpbmcgaXNzdWVzIGluIG1vYmlsZSBicm93c2Vyc1xuICAgICAqL1xuICAgIGlmKCAnYWRkRXZlbnRMaXN0ZW5lcicgaW4gZG9jdW1lbnQgKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBGYXN0Q2xpY2suYXR0YWNoKCBkb2N1bWVudC5ib2R5ICk7XG4gICAgICAgIH0sIGZhbHNlICk7XG4gICAgfVxufVxuXG5pbXBvcnQgKiBhcyBmaWxlTWV0aG9kcyBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgKiBhcyBpbnB1dE1ldGhvZHMgZnJvbSBcIi4vaW5wdXRcIjtcbmltcG9ydCAqIGFzIHByb21wdE1ldGhvZHMgZnJvbSBcIi4vcHJvbXB0XCI7XG5pbXBvcnQgKiBhcyBzdGF0ZU1ldGhvZHMgZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCAqIGFzIHdpbmRvd01ldGhvZHMgZnJvbSBcIi4vd2luZG93XCI7XG5cbi8vIGV4cG9zZSBtZXRob2RzIGZvciB0aGUgQyBlbmdpbmUgdG8gdXNlXG53aW5kb3cuaGF2ZW4gPSB7XG4gICAgZmlsZTogZmlsZU1ldGhvZHMsXG4gICAgaW5wdXQ6IGlucHV0TWV0aG9kcyxcbiAgICBwcm9tcHQ6IHByb21wdE1ldGhvZHMsXG4gICAgc3RhdGU6IHN0YXRlTWV0aG9kcyxcbiAgICB3aW5kb3c6IHdpbmRvd01ldGhvZHNcbn07IiwiaW1wb3J0IHsgZmx1c2ggfSBmcm9tIFwiLi9idWZmZXJcIjtcbmltcG9ydCB7IHNjcm9sbE9yRm9jdXMsIHNldERvU2Nyb2xsIH0gZnJvbSBcIi4vcHJvbXB0XCI7XG5pbXBvcnQgZXJyb3IgZnJvbSBcIi4vZXJyb3JcIjtcblxuLy8gY3VycmVudCBtb2RlIG9mIGlucHV0IHRoZSBnYW1lIGV4cGVjdHM6IGJ1ZmZlciwgZ2V0a2V5LCBnZXRsaW5lIG9yIGVuZGdhbWUuXG4vLyBudWxsIGlzIG5vIGlucHV0IGFjY2VwdGVkIChkdXJpbmcgc3RhcnR1cClcbmxldCBpbnB1dE1vZGUgPSBudWxsO1xuXG4vLyBzdG9yZXMga2V5cHJlc3NlcyBwcmVzc2VkIHdoZW4gdGhlIGVuZ2luZSBpc24ndCBzcGVjaWZpY2FsbHkgZXhwZWN0aW5nIHRoZW0gKFwiYnVmZmVyXCIgaW5wdXRNb2RlKVxuY29uc3Qga2V5cHJlc3NCdWZmZXIgPSBbXTtcblxubGV0IGlzVGV4dFByaW50ZWQgPSBmYWxzZTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgaW5wdXQgbW9kZS5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kZSgpIHtcbiAgICByZXR1cm4gaW5wdXRNb2RlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIGxpc3RlbiB0byBrZXlwcmVzc2VzIGFuZCBtb3VzZSBjbGlja3NcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIGtleXByZXNzLnNlbmQsIGZhbHNlICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywga2V5cHJlc3Muc2VuZCwgZmFsc2UgKTtcbn1cblxuXG5leHBvcnQgY29uc3Qga2V5cHJlc3MgPSB7XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGdhbWUgc3RhcnRzLlxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBzdGFydCBleHBlY3Rpbmcga2V5cHJlc3Nlc1xuICAgICAgICBpZiggIWlucHV0TW9kZSApIHtcbiAgICAgICAgICAgIGlucHV0TW9kZSA9ICdidWZmZXInO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZXJlJ3MgYSBrZXlwcmVzcyB3YWl0aW5nIGluIHRoZSBidWZmZXIuXG4gICAgICpcbiAgICAgKiBDYWxsZWQgYnkgdGhlIGVuZ2luZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzV2FpdGluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIGZsdXNoKCk7XG5cbiAgICAgICAgaWYoIGlzVGV4dFByaW50ZWQgKSB7XG4gICAgICAgICAgICBzY3JvbGxPckZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5cHJlc3NCdWZmZXIubGVuZ3RoID4gMDtcbiAgICB9LFxuXG4gICAgc2VuZDogZnVuY3Rpb24oIGUgKSB7XG4gICAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsdG9wID0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2Muc2Nyb2xsVG9wKSAtIChkb2MuY2xpZW50VG9wIHx8IDApO1xuXG4gICAgICAgIC8vIGRvbid0IHJlYWN0IHRvIG1vZGlmaWVyIGtleXNcbiAgICAgICAgaWYoIGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgZS5zaGlmdEtleSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCggaW5wdXRNb2RlICkge1xuICAgICAgICAgICAgY2FzZSAnYnVmZmVyJzpcbiAgICAgICAgICAgICAgICBrZXlwcmVzc0J1ZmZlci5wdXNoKCBrZXlDb2RlICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2dldGxpbmUnOlxuICAgICAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmcgZXhjZXB0IHNjcm9sbFxuICAgICAgICAgICAgICAgIHNjcm9sbE9yRm9jdXMoIGUgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGNhc2UgJ2dldGtleSc6XG4gICAgICAgICAgICAgICAgLy8gY29udGludWUgd2l0aCBzY3JpcHRcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZW5kZ2FtZSc6XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gaHVnb2pzX29wdGlvbnMuZXhpdF91cmw7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGVycm9yKCAnSW50ZXJwcmV0ZXIgZXJyb3I6IHVua25vd24gaW5wdXQgbW9kZSAnICsgaW5wdXRNb2RlICk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dE1vZGUgPSAnYnVmZmVyJztcblxuICAgICAgICAvLyBsZXQgdGhlIHNjcm9sbCBoYW5kbGVyIHRha2UgdGhpcyBpZiB3ZSdyZSBub3QgYXQgdGhlIGVuZCBvZiB0aGUgcGFnZVxuICAgICAgICBpZiggc2Nyb2xsdG9wICsgd2luZG93LmlubmVySGVpZ2h0IDwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSA0MCApIHtcbiAgICAgICAgICAgIHNjcm9sbE9yRm9jdXMoIGUgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIE1vZHVsZS5jY2FsbChcbiAgICAgICAgICAgICdoYXZlbl9nZXRrZXknLFxuICAgICAgICAgICAgJ251bGwnLFxuICAgICAgICAgICAgWyAnbnVtYmVyJyBdLFxuICAgICAgICAgICAgWyBrZXlDb2RlIF1cbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgd2FpdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlucHV0TW9kZSA9ICdnZXRrZXknO1xuXG4gICAgICAgIGZsdXNoKCk7XG4gICAgICAgIHNldERvU2Nyb2xsKCk7XG5cbiAgICAgICAgLy8gaWYgdGhlcmUncyBzb21ldGhpbmcgaW4gdGhlIGtleXByZXNzIGJ1ZmZlciwgXCJwdXNoXCIgdGhhdCBrZXlcbiAgICAgICAgaWYoIGtleXByZXNzQnVmZmVyLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICBrZXlwcmVzcy5zZW5kKHsga2V5Q29kZToga2V5cHJlc3NCdWZmZXIuc2hpZnQoKSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLyoqXG4gKiBTZXQgYSBuZXcgaW5wdXQgbW9kZS5cbiAqXG4gKiBAcGFyYW0gbW9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TW9kZSggbW9kZSApIHtcbiAgICBpbnB1dE1vZGUgPSBtb2RlO1xufVxuXG5cbi8qKlxuICogTWFrZXMgYSBub3RlIHRoYXQgdGV4dCBoYXMgYmVlbiBwcmludGVkIG9uIHRoZSBzY3JlZW4gc2luY2UgbGFzdCBjaGVja1xuICpcbiAqIEBwYXJhbSBuZXdTdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGV4dFdhc1ByaW50ZWQoIG5ld1N0YXRlID0gdHJ1ZSApIHtcbiAgICBpc1RleHRQcmludGVkID0gbmV3U3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0V2FzUHJpbnRlZCgpIHtcbiAgICByZXR1cm4gdGV4dFdhc1ByaW50ZWQ7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICBjb25zdCBsb2FkZXJPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsb2FkZXInICk7XG5cbiAgICBpZiggbG9hZGVyT3ZlcmxheSApIHtcbiAgICAgICAgbG9hZGVyT3ZlcmxheS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBsb2FkZXJPdmVybGF5ICk7XG4gICAgfVxufSIsImNvbnN0IG9wdCA9IHtcbiAgICBhdXRvc2F2ZTogdHJ1ZSxcbiAgICBleGl0X3VybDogJycsXG4gICAgZXh0cmFfb3Bjb2RlczogdHJ1ZSxcbiAgICBwcm94eV91cmw6ICdwcm94eS5waHAnLFxuICAgIHVzZV9wcm94eTogJ2F1dG8nLFxuICAgIHdpbmRvd2luZzogdHJ1ZVxufTtcblxuXG4vKipcbiAqIFBhcnNlIGEgR0VUIHBhcmFtZXRlci5cbiAqXG4gKiBAcGFyYW0gbmFtZVxuICogQHBhcmFtIHR5cGVcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtZXRlciggbmFtZSwgdHlwZSwgZGVmYXVsdFZhbHVlICkge1xuICAgIHZhciB2YWx1ZVNlYXJjaCA9IG5ldyBSZWdFeHAoICdbPyZdJyArIG5hbWUgKyAnPSguKj8pKCN8JnwkKScsICdpJyApLmV4ZWMoIHdpbmRvdy5sb2NhdGlvbi5ocmVmICksXG4gICAgICAgIHZhbHVlO1xuXG4gICAgaWYoIHZhbHVlU2VhcmNoID09PSBudWxsIHx8IHZhbHVlU2VhcmNoLmxlbmd0aCA8IDIgKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoIHZhbHVlU2VhcmNoWyAxIF0uc3BsaXQoICcrJyApLmpvaW4oICcgJyApICk7XG5cbiAgICBzd2l0Y2goIHR5cGUgKSB7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgaWYoIHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJyB8fCB2YWx1ZSA9PT0gJ29uJyB8fCB2YWx1ZSA9PT0gJzEnICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJyB8fCB2YWx1ZSA9PT0gJ29mZicgfHwgdmFsdWUgPT09ICcwJyApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGlmKCBwYXJzZUZsb2F0KCB2YWx1ZSApICsgXCJcIiA9PT0gdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBOYU47XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmKCB2YWx1ZS5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGFuIG9wdGlvbi5cbiAqXG4gKiBAcGFyYW0gbmFtZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQoIG5hbWUgKSB7XG4gICAgcmV0dXJuIG9wdFsgbmFtZSBdO1xufVxuXG5cbi8qKlxuICogUmVhZCBvcHRpb25zIGZyb20gdGhlIFVSTFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCggZGVmYXVsdHMgKSB7XG4gICAgbGV0IG9wdGlvbl9rZXk7XG5cbiAgICBkZWZhdWx0cyA9IGRlZmF1bHRzIHx8IHt9O1xuXG4gICAgZm9yKCBvcHRpb25fa2V5IGluIGRlZmF1bHRzICkge1xuICAgICAgICBpZiggZGVmYXVsdHMuaGFzT3duUHJvcGVydHkoIG9wdGlvbl9rZXkgKSAmJiBkZWZhdWx0c1sgb3B0aW9uX2tleSBdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBvcHRbIG9wdGlvbl9rZXkgXSA9IGRlZmF1bHRzWyBvcHRpb25fa2V5IF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggIW9wdC5sb2NrX3N0b3J5ICkge1xuICAgICAgICBvcHQuc3RvcnkgPSBnZXRQYXJhbWV0ZXIoICdzdG9yeScsICdzdHJpbmcnLCBvcHQuc3RvcnkgKTtcbiAgICB9XG5cbiAgICBpZiggIW9wdC5sb2NrX29wdGlvbnMgKSB7XG4gICAgICAgIGZvciggb3B0aW9uX2tleSBpbiBvcHQgKSB7XG4gICAgICAgICAgICBpZiggb3B0aW9uX2tleSAhPT0gJ3N0b3J5JyAmJiBvcHQuaGFzT3duUHJvcGVydHkoIG9wdGlvbl9rZXkgKSApIHtcbiAgICAgICAgICAgICAgICBvcHRbIG9wdGlvbl9rZXkgXSA9IGdldFBhcmFtZXRlciggb3B0aW9uX2tleSwgdHlwZW9mIG9wdFsgb3B0aW9uX2tleSBdLCBvcHRbIG9wdGlvbl9rZXkgXSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlc1xuICAgICAgICBpZiggb3B0LmV4aXRfdXJsID09PSAnZmFsc2UnIHx8IG9wdC5leGl0X3VybCA9PT0gJzAnICkge1xuICAgICAgICAgICAgb3B0LmV4aXRfdXJsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGFuIG9wdGlvbi5cbiAqXG4gKiBAcGFyYW0gbmFtZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQoIG5hbWUsIHZhbHVlICkge1xuICAgIG9wdFsgbmFtZSBdID0gdmFsdWU7XG59XG4iLCJpbXBvcnQgeyBmbHVzaCB9IGZyb20gXCIuL2J1ZmZlclwiO1xuXG5pbXBvcnQge1xuICAgIGdldE1vZGUgYXMgZ2V0SW5wdXRNb2RlLFxuICAgIHNldE1vZGUgYXMgc2V0SW5wdXRNb2RlXG59IGZyb20gXCIuL2lucHV0XCI7XG5cbmltcG9ydCB7IGF1dG9zYXZlIH0gZnJvbSBcIi4vc3RhdGVcIjtcblxuaW1wb3J0IHtcbiAgICBjb250YWluZXIgYXMgd2luZG93Q29udGFpbmVyLFxuICAgIGdldCBhcyBnZXRXaW5kb3dcbn0gZnJvbSBcIi4vd2luZG93XCI7XG5cbi8vIGNvbW1hbmQgaGlzdG9yeVxubGV0IGNtZEhpc3RvcnkgPSBbXTtcblxuLy8gY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY29tbWFuZCBoaXN0b3J5LiAtMTogbmV3IGlucHV0XG5sZXQgY3VycmVudENtZEhpc3RvcnkgPSAtMTtcblxuLy8gc3RvcmVzIHRoZSBjdXJyZW50bHkgdHlwZWQgY29tbWFuZCB3aGVuIGJyb3dzaW5nIHRoZSBoaXN0b3J5XG5sZXQgY3VycmVudENtZFRleHQgPSBcIlwiO1xuXG4vLyBzaG91bGQgdGhlIHNjcmVlbiBzY3JvbGwgZG93bj8gU2V0IHRvIGZhbHNlIGFmdGVyIHNjcmVlbiBjbGVhci5cbmxldCBkb1Njcm9sbCA9IGZhbHNlO1xuXG4vLyBkb2VzIHRoZSBlbmdpbmUgaGFuZGxlIHByaW50aW5nIHRoZSBwcm9tcHQgcHJlZml4P1xubGV0IGVuZ2luZVByb21wdCA9IGZhbHNlO1xuXG4vLyBpbnB1dCBlbGVtZW50XG5sZXQgaW5wdXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsaW5laW5wdXQtZmllbGQnICk7XG5cbi8vIGlucHV0IGVsZW1lbnQncyBYIHBvc2l0aW9uIGluIHJlbGF0aW9uIHRvIHRoZSB3aW5kb3dcbmxldCBpbnB1dFggPSAwO1xuXG4vLyBoYXMgdGV4dCBiZWVuIHByaW50ZWQgb24gc2NyZWVuP1xubGV0IGlzVGV4dFByaW50ZWQgPSBmYWxzZTtcblxuLy8gcHJlZml4LCBpLmUuIHRoZSA+IG9yIHdoYXRldmVyIGVsc2UgaXMgc2hvd24gYmVmb3JlIHRoZSBpbnB1dCBmaWVsZFxubGV0IHByZWZpeEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xpbmVpbnB1dC1wcmVmaXgnICk7XG5cbi8vIHRoZSBwYXJlbnQgcHJvbXB0IGZvcm0gZWxlbWVudFxubGV0IHByb21wdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xpbmVpbnB1dCcgKTtcblxuLy8gbmV3IGV2ZW50IHR5cGUgZm9yIG90aGVycyAobWFpbmx5IFZvcnBsZSkgd2hvIG5lZWQgdG8ga25vdyB3aGVuIGxpbmVcbi8vIGlucHV0IGlzIGF2YWlsYWJsZVxubGV0IGxpbmVpbnB1dFJlYWR5RXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoICdsaW5laW5wdXRSZWFkeScgKTtcblxuXG4vKipcbiAqIEFwcGVuZCB0aGUgbGluZSBpbnB1dCB0byB0aGUgdHJhbnNjcmlwdC5cbiAqXG4gKiBAcGFyYW0gY2FyZXRcbiAqIEBwYXJhbSBpbnB1dFRleHRcbiAqIEBwYXJhbSB0YXJnZXRDb250YWluZXJcbiAqL1xuZnVuY3Rpb24gYXBwZW5kUHJvbXB0KCBjYXJldCwgaW5wdXRUZXh0LCB0YXJnZXRDb250YWluZXIgKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gd2luZG93Q29udGFpbmVyLmdldCggdGFyZ2V0Q29udGFpbmVyICk7XG4gICAgY29uc3QgbGFzdExpbmVpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG4gICAgY29uc3QgbGFzdFByZWZpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuICAgIGNvbnN0IGxhc3RDb21tYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cbiAgICAvLyByZW1vdmUgdGhlIGxhc3QgbWFya2VyIGZyb20gdGhlIHByZXZpb3VzbHkgbGFzdCBpbnB1dFxuICAgIGNvbnN0IHByZXZpb3VzTGFzdFByb21wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoICdsaW5laW5wdXQgbGFzdCcgKTtcblxuICAgIGZvciggbGV0IGkgPSBwcmV2aW91c0xhc3RQcm9tcHQubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkgKSB7XG4gICAgICAgIHByZXZpb3VzTGFzdFByb21wdFsgaSBdLmNsYXNzTGlzdC5yZW1vdmUoICdsYXN0JyApO1xuICAgIH1cblxuICAgIGxhc3RMaW5laW5wdXQuY2xhc3NOYW1lID0gJ2xpbmVpbnB1dCBsYXN0JztcbiAgICBsYXN0UHJlZml4LmNsYXNzTmFtZSA9ICdwcm9tcHQtcHJlZml4JztcbiAgICBsYXN0Q29tbWFuZC5jbGFzc05hbWUgPSAncHJvbXB0LWlucHV0JztcblxuICAgIGxhc3RQcmVmaXguaW5uZXJIVE1MID0gY2FyZXQ7XG4gICAgbGFzdENvbW1hbmQuaW5uZXJIVE1MID0gaW5wdXRUZXh0O1xuXG4gICAgbGFzdExpbmVpbnB1dC5hcHBlbmRDaGlsZCggbGFzdFByZWZpeCApO1xuICAgIGxhc3RMaW5laW5wdXQuYXBwZW5kQ2hpbGQoIGxhc3RDb21tYW5kICk7XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoIGxhc3RMaW5laW5wdXQgKTtcbn1cblxuXG4vKipcbiAqIENoYW5nZSB0aGUgcHJvbXB0IGlucHV0IHRvIG5leHQgb3IgcHJldmlvdXMgY29tbWFuZCBpbiB0aGUgY29tbWFuZCBoaXN0b3J5LlxuICpcbiAqIEBwYXJhbSBkZWx0YSAxIGZvciBuZXh0IGNvbW1hbmQsIC0xIGZvciBwcmV2aW91c1xuICovXG5mdW5jdGlvbiBnZXRDbWRGcm9tSGlzdG9yeSggZGVsdGEgKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGN1cnJlbnRDbWRIaXN0b3J5O1xuICAgIGNvbnN0IG5ld19jdXJyZW50ID0gY3VycmVudCArIGRlbHRhO1xuXG4gICAgaWYoIGN1cnJlbnQgPT09IC0xICkge1xuICAgICAgICBjdXJyZW50Q21kVGV4dCA9IGlucHV0RWxlbS52YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpdCdzIHdpdGhpbiByYW5nZVxuICAgIGlmKCBuZXdfY3VycmVudCA8IGNtZEhpc3RvcnkubGVuZ3RoICYmIG5ld19jdXJyZW50ID49IDAgKSB7XG4gICAgICAgIGlucHV0RWxlbS52YWx1ZSA9IGNtZEhpc3RvcnlbIG5ld19jdXJyZW50IF07XG4gICAgICAgIGN1cnJlbnRDbWRIaXN0b3J5ID0gbmV3X2N1cnJlbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYoIG5ld19jdXJyZW50ID09PSAtMSApIHtcbiAgICAgICAgaW5wdXRFbGVtLnZhbHVlID0gY3VycmVudENtZFRleHQ7XG4gICAgICAgIGN1cnJlbnRDbWRIaXN0b3J5ID0gbmV3X2N1cnJlbnQ7XG4gICAgfVxufVxuXG5cbi8qKlxuICogUmVzaXplIHRoZSBpbnB1dCBmaWVsZCBzbyB0aGF0IGl0IGZpdHMgb24gdGhlIHNhbWUgbGluZSBhcyB0aGUgcHJvbXB0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplSW5wdXQoKSB7XG4gICAgaW5wdXRFbGVtLnN0eWxlLndpZHRoID0gKCBnZXRXaW5kb3coIDAgKS5jbGllbnRXaWR0aCAtIGlucHV0WCAtIDIgKSArICdweCc7XG59XG5cblxuLyoqXG4gKiBTY3JvbGwgZG93biB1bnRpbCB0ZXh0IGNvbnRlbnQgYmVjb21lcyB2aXNpYmxlLlxuICovXG5mdW5jdGlvbiBzY3JvbGxUb0NvbnRlbnQoKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gZ2V0V2luZG93KCAwICk7XG4gICAgY29uc3Qgc3RhdHVzbGluZSA9IGdldFdpbmRvdyggMSApO1xuICAgIGNvbnN0IG5vZGVzID0gdGV4dE5vZGVzVW5kZXIoIG91dHB1dCApO1xuICAgIGNvbnN0IHNjcm9sbHRvcCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCAwKTtcbiAgICBjb25zdCBub25XaGl0ZXNwYWNlUmVnZXggPSAvXFxTLztcblxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyArK2kgKSB7XG4gICAgICAgIGlmKCBub25XaGl0ZXNwYWNlUmVnZXgudGVzdCggbm9kZXNbIGkgXS50ZXh0Q29udGVudCApICkge1xuICAgICAgICAgICAgbGV0IG5ld1Njcm9sbFRvcCA9IG5vZGVzWyBpIF0ucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAzO1xuXG4gICAgICAgICAgICBpZiggc3RhdHVzbGluZSApIHtcbiAgICAgICAgICAgICAgICBuZXdTY3JvbGxUb3AgKz0gc3RhdHVzbGluZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBzY3JvbGx0b3AgPCBuZXdTY3JvbGxUb3AgKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKCAwLCBuZXdTY3JvbGxUb3AgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIEdldCBhbGwgdGV4dCBub2RlcyBjb250YWluZWQgYnkgYSBET00gbm9kZVxuICpcbiAqIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTA3MzA3NzdcbiAqXG4gKiBAcGFyYW0gbm9kZVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5mdW5jdGlvbiB0ZXh0Tm9kZXNVbmRlciggbm9kZSApIHtcbiAgICBsZXQgYWxsID0gW107XG5cbiAgICBmb3IoIG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7IG5vZGU7IG5vZGUgPSBub2RlLm5leHRTaWJsaW5nICkge1xuICAgICAgICBpZiggbm9kZS5ub2RlVHlwZSA9PT0gMyApIHtcbiAgICAgICAgICAgIGFsbC5wdXNoKCBub2RlICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhbGwgPSBhbGwuY29uY2F0KCB0ZXh0Tm9kZXNVbmRlciggbm9kZSApICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWxsO1xufVxuXG5cbi8qKlxuICogR2V0dGVyIGZvciB0aGUgbGluZWlucHV0IGZvcm0gZWxlbWVudC5cbiAqXG4gKiBAcmV0dXJucyB7RWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gcHJvbXB0RWxlbTtcbn1cblxuXG4vKipcbiAqIEhpZGUgdGhlIHByb21wdCBhbmQgc3RvcCBleHBlY3RpbmcgbGluZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgc2V0SW5wdXRNb2RlKCAnYnVmZmVyJyApO1xuXG4gICAgaWYoIHByb21wdEVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgcHJvbXB0RWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBwcm9tcHRFbGVtICk7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIEFkZCwgcmVtb3ZlLCBhbmQgY2xlYXIgY29tbWFuZHMgaW4gdGhlIGhpc3RvcnkuXG4gKi9cbmV4cG9ydCBjb25zdCBoaXN0b3J5ID0ge1xuICAgIC8qKlxuICAgICAqIEFkZCBhIGNvbW1hbmQgdG8gdGhlIGNvbW1hbmQgaGlzdG9yeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjbWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiggY21kICkge1xuICAgICAgICBpZiggY21kICkge1xuICAgICAgICAgICAgY21kSGlzdG9yeS5wdXNoKCBjbWQgKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHRoZSBlbnRpcmUgY29tbWFuZCBoaXN0b3J5LlxuICAgICAqL1xuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY21kSGlzdG9yeSA9IFtdO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBjb3B5IG9mIHRoZSBlbnRpcmUgY29tbWFuZCBoaXN0b3J5LlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjbWRIaXN0b3J5LnNsaWNlKCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgc2luZ2xlIGl0ZW0gZnJvbSB0aGUgY29tbWFuZCBoaXN0b3J5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgY29tbWFuZCB0byByZW1vdmUuIElmIGVtcHR5LFxuICAgICAqICB0aGUgbGFzdCBjb21tYW5kIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiByZW1vdmFsIHdhcyBzdWNjZXNzZnVsLlxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24oIGluZGV4ICkge1xuICAgICAgICBpZiggY21kSGlzdG9yeS5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICAgIGNtZEhpc3RvcnkucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBpbmRleCA8IDAgfHwgaW5kZXggPj0gY21kSGlzdG9yeS5sZW5ndGggKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjbWRIaXN0b3J5LnNwbGljZSggaW5kZXgsIDEgKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgY29tcGxldGVseSBuZXcgY29tbWFuZCBoaXN0b3J5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gbmV3SGlzdG9yeSBBbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgYmVjb21lcyB0aGUgbmV3XG4gICAgICogIGNvbW1hbmQgaGlzdG9yeS5cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKCBuZXdIaXN0b3J5ICkge1xuICAgICAgICBjbWRIaXN0b3J5ID0gbmV3SGlzdG9yeS5zbGljZSgpO1xuICAgIH1cbn07XG5cblxuLy8gQ29udmVydCBhY2NlbnRlZCBjaGFyYWN0ZXJzIHRvIHBsYWluIEFTQ0lJLiBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4MzkxOTAxXG5jb25zdCBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAgPSBbXG4gICAge1xuICAgICAgICBiYXNlOiAnQScsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDQxXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGJ1xuICAgIH0sXG4gICAge2Jhc2U6ICdBQScsIGxldHRlcnM6ICdcXHVBNzMyJ30sXG4gICAge2Jhc2U6ICdBRScsIGxldHRlcnM6ICdcXHUwMEM2XFx1MDFGQ1xcdTAxRTInfSxcbiAgICB7YmFzZTogJ0FPJywgbGV0dGVyczogJ1xcdUE3MzQnfSxcbiAgICB7YmFzZTogJ0FVJywgbGV0dGVyczogJ1xcdUE3MzYnfSxcbiAgICB7YmFzZTogJ0FWJywgbGV0dGVyczogJ1xcdUE3MzhcXHVBNzNBJ30sXG4gICAge2Jhc2U6ICdBWScsIGxldHRlcnM6ICdcXHVBNzNDJ30sXG4gICAge1xuICAgICAgICBiYXNlOiAnQicsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdDJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ0QnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA0NFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzknXG4gICAgfSxcbiAgICB7YmFzZTogJ0RaJywgbGV0dGVyczogJ1xcdTAxRjFcXHUwMUM0J30sXG4gICAge2Jhc2U6ICdEeicsIGxldHRlcnM6ICdcXHUwMUYyXFx1MDFDNSd9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ0UnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFJ1xuICAgIH0sXG4gICAge2Jhc2U6ICdGJywgbGV0dGVyczogJ1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Qid9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ0cnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAnSCcsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDQ4XFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ0knLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTcnXG4gICAgfSxcbiAgICB7YmFzZTogJ0onLCBsZXR0ZXJzOiAnXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDgnfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdLJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAnTCcsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODAnXG4gICAgfSxcbiAgICB7YmFzZTogJ0xKJywgbGV0dGVyczogJ1xcdTAxQzcnfSxcbiAgICB7YmFzZTogJ0xqJywgbGV0dGVyczogJ1xcdTAxQzgnfSxcbiAgICB7YmFzZTogJ00nLCBsZXR0ZXJzOiAnXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUMnfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdOJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTQnXG4gICAgfSxcbiAgICB7YmFzZTogJ05KJywgbGV0dGVyczogJ1xcdTAxQ0EnfSxcbiAgICB7YmFzZTogJ05qJywgbGV0dGVyczogJ1xcdTAxQ0InfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdPJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NEMnXG4gICAgfSxcbiAgICB7YmFzZTogJ09JJywgbGV0dGVyczogJ1xcdTAxQTInfSxcbiAgICB7YmFzZTogJ09PJywgbGV0dGVyczogJ1xcdUE3NEUnfSxcbiAgICB7YmFzZTogJ09VJywgbGV0dGVyczogJ1xcdTAyMjInfSxcbiAgICB7YmFzZTogJ09FJywgbGV0dGVyczogJ1xcdTAwOENcXHUwMTUyJ30sXG4gICAge2Jhc2U6ICdvZScsIGxldHRlcnM6ICdcXHUwMDlDXFx1MDE1Myd9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ1AnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NCdcbiAgICB9LFxuICAgIHtiYXNlOiAnUScsIGxldHRlcnM6ICdcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEEnfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdSJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNTJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAnUycsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ1QnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2J1xuICAgIH0sXG4gICAge2Jhc2U6ICdUWicsIGxldHRlcnM6ICdcXHVBNzI4J30sXG4gICAge1xuICAgICAgICBiYXNlOiAnVScsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDU1XFx1MjRDQVxcdUZGMzVcXHUwMEQ5XFx1MDBEQVxcdTAwREJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xcdTAwRENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0J1xuICAgIH0sXG4gICAge2Jhc2U6ICdWJywgbGV0dGVyczogJ1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1J30sXG4gICAge2Jhc2U6ICdWWScsIGxldHRlcnM6ICdcXHVBNzYwJ30sXG4gICAge1xuICAgICAgICBiYXNlOiAnVycsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyJ1xuICAgIH0sXG4gICAge2Jhc2U6ICdYJywgbGV0dGVyczogJ1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDJ30sXG4gICAge1xuICAgICAgICBiYXNlOiAnWScsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdaJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNUFcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAnYScsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MCdcbiAgICB9LFxuICAgIHtiYXNlOiAnYWEnLCBsZXR0ZXJzOiAnXFx1QTczMyd9LFxuICAgIHtiYXNlOiAnYWUnLCBsZXR0ZXJzOiAnXFx1MDBFNlxcdTAxRkRcXHUwMUUzJ30sXG4gICAge2Jhc2U6ICdhbycsIGxldHRlcnM6ICdcXHVBNzM1J30sXG4gICAge2Jhc2U6ICdhdScsIGxldHRlcnM6ICdcXHVBNzM3J30sXG4gICAge2Jhc2U6ICdhdicsIGxldHRlcnM6ICdcXHVBNzM5XFx1QTczQid9LFxuICAgIHtiYXNlOiAnYXknLCBsZXR0ZXJzOiAnXFx1QTczRCd9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ2InLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAnYycsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDYzXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDBFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAnZCcsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QSdcbiAgICB9LFxuICAgIHtiYXNlOiAnZHonLCBsZXR0ZXJzOiAnXFx1MDFGM1xcdTAxQzYnfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdlJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxREQnXG4gICAgfSxcbiAgICB7YmFzZTogJ2YnLCBsZXR0ZXJzOiAnXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDJ30sXG4gICAge1xuICAgICAgICBiYXNlOiAnZycsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDY3XFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0YnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdoJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NSdcbiAgICB9LFxuICAgIHtiYXNlOiAnaHYnLCBsZXR0ZXJzOiAnXFx1MDE5NSd9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ2knLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzEnXG4gICAgfSxcbiAgICB7YmFzZTogJ2onLCBsZXR0ZXJzOiAnXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5J30sXG4gICAge1xuICAgICAgICBiYXNlOiAnaycsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBMydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ2wnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0NydcbiAgICB9LFxuICAgIHtiYXNlOiAnbGonLCBsZXR0ZXJzOiAnXFx1MDFDOSd9LFxuICAgIHtiYXNlOiAnbScsIGxldHRlcnM6ICdcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rid9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ24nLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTUnXG4gICAgfSxcbiAgICB7YmFzZTogJ25qJywgbGV0dGVyczogJ1xcdTAxQ0MnfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdvJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzUnXG4gICAgfSxcbiAgICB7YmFzZTogJ29pJywgbGV0dGVyczogJ1xcdTAxQTMnfSxcbiAgICB7YmFzZTogJ291JywgbGV0dGVyczogJ1xcdTAyMjMnfSxcbiAgICB7YmFzZTogJ29vJywgbGV0dGVyczogJ1xcdUE3NEYnfSxcbiAgICB7XG4gICAgICAgIGJhc2U6ICdwJyxcbiAgICAgICAgbGV0dGVyczogJ1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTUnXG4gICAgfSxcbiAgICB7YmFzZTogJ3EnLCBsZXR0ZXJzOiAnXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5J30sXG4gICAge1xuICAgICAgICBiYXNlOiAncicsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4MydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ3MnLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA3M1xcdTI0RTJcXHVGRjUzXFx1MDBERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBiYXNlOiAndCcsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3J1xuICAgIH0sXG4gICAge2Jhc2U6ICd0eicsIGxldHRlcnM6ICdcXHVBNzI5J30sXG4gICAge1xuICAgICAgICBiYXNlOiAndScsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5J1xuICAgIH0sXG4gICAge2Jhc2U6ICd2JywgbGV0dGVyczogJ1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDJ30sXG4gICAge2Jhc2U6ICd2eScsIGxldHRlcnM6ICdcXHVBNzYxJ30sXG4gICAge1xuICAgICAgICBiYXNlOiAndycsXG4gICAgICAgIGxldHRlcnM6ICdcXHUwMDc3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3MydcbiAgICB9LFxuICAgIHtiYXNlOiAneCcsIGxldHRlcnM6ICdcXHUwMDc4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RCd9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ3knLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYmFzZTogJ3onLFxuICAgICAgICBsZXR0ZXJzOiAnXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjMnXG4gICAgfVxuXTtcblxuY29uc3QgZGlhY3JpdGljc01hcCA9IHt9O1xuXG5mb3IoIGxldCBpID0gMDsgaSA8IGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcC5sZW5ndGg7IGkrKyApIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwWyBpIF0ubGV0dGVycztcbiAgICBmb3IoIGxldCBqID0gMDsgaiA8IGxldHRlcnMubGVuZ3RoOyBqKysgKSB7XG4gICAgICAgIGRpYWNyaXRpY3NNYXBbIGxldHRlcnNbIGogXSBdID0gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwIFsgaSBdLmJhc2U7XG4gICAgfVxufVxuXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBsaW5lIGlucHV0IGV2ZW50IGhhbmRsZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCggb3B0ICkge1xuICAgIC8vIG1ha2UgYSBub3RlIGlmIHRoZSBlbmdpbmUgaGFuZGxlcyBwcmludGluZyB0aGUgcHJvbXB0IG9yIG5vdFxuICAgIGVuZ2luZVByb21wdCA9ICEhb3B0LmVuZ2luZVByb21wdDtcblxuICAgIC8vIGhhbmRsZSBsaW5lIGlucHV0IHN1Ym1pc3Npb25cbiAgICBwcm9tcHRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoICdzdWJtaXQnLCBmdW5jdGlvbiggZSApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIENoYW5nZSBhY2NlbnRlZCBjaGFyYWN0ZXJzIHRvIHBsYWluIEFTQ0lJLlxuICAgICAgICAvLyBUaGUgSHVnbyBlbmdpbmUgZG9lc24ndCByZWNlaXZlIG5vbi1BU0NJSSBjaGFyYWN0ZXJzIGNvcnJlY3RseS5cbiAgICAgICAgaWYoICFvcHQudW5pY29kZSApIHtcbiAgICAgICAgICAgIGlucHV0RWxlbS52YWx1ZSA9IGlucHV0RWxlbS52YWx1ZS5yZXBsYWNlKCAvW15cXHUwMDAwLVxcdTAwN0VdL2csIGZ1bmN0aW9uKCBhICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkaWFjcml0aWNzTWFwWyBhIF0gfHwgYTtcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgaW5wdXQgdG8gaGlzdG9yeVxuICAgICAgICBpZiggaW5wdXRFbGVtLnZhbHVlICE9PSBjbWRIaXN0b3J5WyAwIF0gJiYgL1xcUy8udGVzdCggaW5wdXRFbGVtLnZhbHVlICkgKSB7XG4gICAgICAgICAgICBjbWRIaXN0b3J5LnVuc2hpZnQoIGlucHV0RWxlbS52YWx1ZSApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIGN1cnJlbnQgc3BvdCBpbiB0aGUgY29tbWFuZCBoaXN0b3J5XG4gICAgICAgIGN1cnJlbnRDbWRIaXN0b3J5ID0gLTE7XG5cbiAgICAgICAgLy8gYXBwZW5kIHRoZSBjb21tYW5kIHRvIHRoZSB0cmFuc2NyaXB0LCB1bmxlc3MgdGhlIHN1Ym1pdCBldmVudHMgdGVsbHMgdXMgbm90IHRvXG4gICAgICAgIGlmKCAhZW5naW5lUHJvbXB0ICYmICEoZS5kZXRhaWwgJiYgZS5kZXRhaWwuc2lsZW50KSApIHtcbiAgICAgICAgICAgIGFwcGVuZFByb21wdCggcHJlZml4LmdldCgpLCBpbnB1dEVsZW0udmFsdWUsIDAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhc3MgdGhlIGNvbW1hbmQgdG8gdGhlIGVuZ2luZVxuICAgICAgICBNb2R1bGUuY2NhbGwoXG4gICAgICAgICAgICAnaGF2ZW5fZ2V0bGluZScsXG4gICAgICAgICAgICAnbnVsbCcsXG4gICAgICAgICAgICBbICdzdHJpbmcnIF0sXG4gICAgICAgICAgICBbIGlucHV0RWxlbS52YWx1ZSArICdcXG4nIF1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBjbGVhbnVwXG4gICAgICAgIGlucHV0RWxlbS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGhpZGUoKTtcbiAgICB9LCBmYWxzZSApO1xuXG4gICAgLy8gQ29tbWFuZCBoaXN0b3J5LiBBZGFwdGVkIGZyb20gUGFyY2htZW50LlxuICAgIGlucHV0RWxlbS5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIGZ1bmN0aW9uKCBlICkge1xuICAgICAgICBjb25zdCBrZXlDb2RlID0gZS53aGljaCB8fCBlLmtleUNvZGU7XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHVwL2Rvd24gdG8gdXNlIHRoZSBjb21tYW5kIGhpc3RvcnlcbiAgICAgICAgaWYoIGtleUNvZGUgPT09IDM4ICkgLy8gdXAgLT4gcHJldlxuICAgICAgICB7XG4gICAgICAgICAgICBnZXRDbWRGcm9tSGlzdG9yeSggMSApO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCBrZXlDb2RlID09PSA0MCApIC8vIGRvd24gLT4gbmV4dFxuICAgICAgICB7XG4gICAgICAgICAgICBnZXRDbWRGcm9tSGlzdG9yeSggLTEgKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0sIGZhbHNlICk7XG5cbiAgICAvLyBmaXggTW9iaWxlIFNhZmFyaSBidWcgdGhhdCBicmVha3MgZml4ZWQgcG9zaXRpb25pbmcgd2hlbiB0aGUgdmlydHVhbCBrZXlib2FyZCBwb3BzIHVwXG4gICAgaWYoICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyApIHtcbiAgICAgICAgLy8gdGhlIGZvY3VzIGV2ZW50IGF0IHRoZSBzdGFydCBvZiB0aGUgZ2FtZSBkb2Vzbid0IG9wZW4gdGhlIGtleWJvYXJkXG4gICAgICAgIGxldCBmaXJzdEZvY3VzID0gdHJ1ZTtcblxuICAgICAgICBpbnB1dEVsZW0uYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiggIWZpcnN0Rm9jdXMgKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCBcInNhZmFyaWZpeFwiICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaXJzdEZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKTtcblxuICAgICAgICBpbnB1dEVsZW0uYWRkRXZlbnRMaXN0ZW5lciggJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggXCJzYWZhcmlmaXhcIiApO1xuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgLy8gcmVzaXplIGlucHV0IGZpZWxkIHdoZW4gd2luZG93IHNpemUgY2hhbmdlc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgcmVzaXplSW5wdXQsIGZhbHNlICk7XG5cbiAgICAvLyByZW1vdmUgdGhlIHByb21wdCBmcm9tIHRoZSBET01cbiAgICBwcm9tcHRFbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHByb21wdEVsZW0gKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbW1hbmQgcHJvbXB0IGlzIHJlYWR5IGZvciBsaW5lIGlucHV0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkeSgpIHtcbiAgICByZXR1cm4gZ2V0SW5wdXRNb2RlKCkgPT09ICdnZXRsaW5lJztcbn07XG5cblxuZXhwb3J0IGNvbnN0IHByZWZpeCA9IHtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcHJvbXB0IHByZWZpeCwgb3IgZW1wdHkgc3RyaW5nIGlmIHRoZSBlbmdpbmUgaXNcbiAgICAgKiBoYW5kbGluZyBwcmludGluZyB0aGUgcHJvbXB0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiggZW5naW5lUHJvbXB0ICkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJlZml4RWxlbS5pbm5lckhUTUw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcHJlZml4ICg+KSB0aGF0J3Mgc2hvd24gYmVmb3JlIHRoZSBjb21tYW5kIGlucHV0LlxuICAgICAqIFRoZSBjYXJldCBpcyBleHBlY3RlZCB0byBiZSBcImNsZWFuXCIgaS5lLiBpdCdzIHNhZmUgdG8gdXNlIGlubmVySFRNTFxuICAgICAqIHRvIHBsYWNlIGl0IGluIHRoZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24oIHByZWZpeCApIHtcbiAgICAgICAgaWYoICFlbmdpbmVQcm9tcHQgKSB7XG4gICAgICAgICAgICBwcmVmaXhFbGVtLmlubmVySFRNTCA9IHByZWZpeDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogRWl0aGVyIHNjcm9sbCB0aGUgcGFnZSBkb3duIG9uZSBwYWdlLCBvciBpZiB0aGUgcHJvbXB0IGlzIHZpc2libGUsXG4gKiBzZXQgZm9jdXMgdG8gdGhlIHByb21wdC5cbiAqXG4gKiBAcGFyYW0gZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsT3JGb2N1cyggZSApIHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3Qgc2Nyb2xsdG9wID0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2Muc2Nyb2xsVG9wKSAtIChkb2MuY2xpZW50VG9wIHx8IDApO1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24gfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5zZWxlY3Rpb24gPyBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS50ZXh0IDogJyc7XG4gICAgICAgICAgICB9O1xuICAgIGxldCBwbGF5QXJlYUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmKCBnZXRXaW5kb3coIDEgKSApIHtcbiAgICAgICAgcGxheUFyZWFIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBoYXZlbi53aW5kb3cuZ2V0KCAxICkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIGxldCBub24tQVNDSUkga2V5Y29kZXMsIG5hdmlnYXRpb24ga2V5cywga2V5cyBwcmVzc2VkIHdpdGggY3RybC9hbHQvY21kIHBhc3NcbiAgICAvLyBzbyB0aGF0IHRoZXkgZG9uJ3QgYmxvY2sgYnJvd3NlciBzaG9ydGN1dHNcbiAgICBpZiggZSAmJiAoZS5rZXljb2RlID09PSAzMiB8fCBlLmtleUNvZGUgPiAxMjcgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPbmx5IGludGVyY2VwdCBvbiB0aGluZ3MgdGhhdCBhcmVuJ3QgaW5wdXRzIGFuZCBpZiB0aGUgdXNlciBpc24ndCBzZWxlY3RpbmcgdGV4dFxuICAgIC8vIGFuZCBpZiB0aGUgcHJvbXB0IGlzIGF2YWlsYWJsZVxuICAgIGlmKCAhZSB8fCAoZS50YXJnZXQgJiYgZS50YXJnZXQubm9kZU5hbWUgIT09ICdJTlBVVCcgJiYgc2VsZWN0aW9uKCkudG9TdHJpbmcoKSA9PT0gJycpICkge1xuICAgICAgICAvLyBJZiB0aGUgaW5wdXQgYm94IGlzIGNsb3NlIHRvIHRoZSB2aWV3cG9ydCB0aGVuIGZvY3VzIGl0XG4gICAgICAgIGlmKCBzY3JvbGx0b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDQwICkge1xuICAgICAgICAgICAgaWYoIHByb21wdEVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oIDAsIDllOSApO1xuXG4gICAgICAgICAgICAgICAgLy8gTWFudWFsbHkgcmVzZXQgdGhlIHRhcmdldCBpbiBjYXNlIGZvY3VzL3RyaWdnZXIgZG9uJ3QgLSB3ZSBkb24ndCB3YW50IHRoZSB0cmlnZ2VyIHRvIHJlY3Vyc2VcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW0uZm9jdXMoKTtcblxuICAgICAgICAgICAgICAgIC8vIFN0b3AgcHJvcGFnYXRpbmcgYWZ0ZXIgcmUtdHJpZ2dlcmluZyBpdCwgc28gdGhhdCB0aGUgdHJpZ2dlciB3aWxsIHdvcmsgZm9yIGFsbCBrZXlzXG4gICAgICAgICAgICAgICAgaWYoIGUgJiYgZS5zdG9wUHJvcGFnYXRpb24gJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gaW5wdXRFbGVtICkge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gcHJvbXB0LCBzY3JvbGwgZG93biBvbmUgcGFnZWZ1bFxuICAgICAgICAgICAgaWYoIGRvU2Nyb2xsICkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyggMCwgc2Nyb2xsdG9wICsgcGxheUFyZWFIZWlnaHQgLSA0MCApO1xuXG4gICAgICAgICAgICAgICAgLy8gZm9jdXMgb24gdGhlIHByb21wdCBpZiBpdCdzIHZpc2libGVcbiAgICAgICAgICAgICAgICBpZiggcHJvbXB0RWxlbS5wYXJlbnROb2RlICYmIHNjcm9sbHRvcCArIHBsYXlBcmVhSGVpZ2h0ICsgd2luZG93LmlubmVySGVpZ2h0IC0gNDAgPj0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RWxlbS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCBlICYmIGUucHJldmVudERlZmF1bHQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UganVzdCBzY3JvbGwgdGhlIGNvbnRlbnQgaW50byB2aWV3XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb0NvbnRlbnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW50ZXJjZXB0IHRoZSBiYWNrc3BhY2Uga2V5XG4gICAgICAgICAgICBpZiggZSAmJiBlLnR5cGUgPT09ICdrZXlkb3duJyAmJiAoZS53aGljaCB8fCBlLmtleUNvZGUpID09PSA4ICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzVGV4dFByaW50ZWQgPSBmYWxzZTtcbn07XG5cblxuLyoqXG4gKiBTZXQgdGhlIFwiZG9TY3JvbGxcIiBzdGF0dXMgd2hpY2ggdGVsbHMgd2hldGhlciBhIGtleXByZXNzIHNjcm9sbHMgdGhlIHBhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXREb1Njcm9sbCggc3RhdHVzICkge1xuICAgIGRvU2Nyb2xsID0gc3RhdHVzO1xufVxuXG5cbi8qKlxuICogU2hvdyB0aGUgcHJvbXB0IGFuZCBzdGFydCBleHBlY3RpbmcgbGluZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgc2V0SW5wdXRNb2RlKCAnZ2V0bGluZScgKTtcbiAgICBmbHVzaCgpO1xuICAgIGdldFdpbmRvdyggMCApLmFwcGVuZENoaWxkKCBwcm9tcHRFbGVtICk7XG5cbiAgICAvLyBjYWxjdWxhdGUgaW5wdXQncyBsb2NhdGlvbiBhbmQgcmVzaXplIHRvIGZpdFxuICAgIGlmKCBlbmdpbmVQcm9tcHQgKSB7XG4gICAgICAgIGlucHV0WCA9IGlucHV0RWxlbS5vZmZzZXRMZWZ0IC0gZ2V0V2luZG93KCAwICkub2Zmc2V0TGVmdDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlucHV0WCA9IHByZWZpeEVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgfVxuXG4gICAgcmVzaXplSW5wdXQoKTtcblxuICAgIC8vIHNjcm9sbCBwYWdlIGRvd24gb3IgZ2l2ZSB0aGUgcHJvbXB0IGZvY3VzXG4gICAgc2Nyb2xsT3JGb2N1cygpO1xuICAgIGRvU2Nyb2xsID0gdHJ1ZTtcblxuICAgIC8vIGRvIGF1dG9zYXZlIHdoZW4gbGluZSBpbnB1dCBpcyBleHBlY3RlZFxuICAgIGF1dG9zYXZlLnNhdmUoKTtcblxuICAgIHByb21wdEVsZW0uZGlzcGF0Y2hFdmVudCggbGluZWlucHV0UmVhZHlFdmVudCApO1xufTsiLCJpbXBvcnQgeyBnZXQgYXMgZ2V0T3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgaGlzdG9yeSwgc2V0RG9TY3JvbGwgfSBmcm9tIFwiLi9wcm9tcHRcIjtcblxuaW1wb3J0IHtcbiAgICBjbGVhciBhcyBjbGVhcldpbmRvdyxcbiAgICBjcmVhdGUgYXMgY3JlYXRlV2luZG93LFxuICAgIGdldCBhcyBnZXRXaW5kb3csXG4gICAgcG9zaXRpb24gYXMgd2luZG93UG9zaXRpb25cbn0gZnJvbSBcIi4vd2luZG93XCI7XG5cbmltcG9ydCB7XG4gICAgYXBwbHkgYXMgYXBwbHlTdHlsZSxcbiAgICBjb2xvcixcbiAgICByZXN0b3JlIGFzIHJlc3RvcmVTdHlsZVxufSBmcm9tIFwiLi9zdHlsZVwiO1xuXG5sZXQgYXV0b3NhdmVGaWxlbmFtZSA9IFwiXCI7XG5cblxuLyoqXG4gKiBSZWFkIHRoZSBVSSBzdGF0ZSBmcm9tIHRoZSBmaWxlc3lzdGVtLlxuICovXG5mdW5jdGlvbiByZWFkVUlTdGF0ZSAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBGUy5yZWFkRmlsZShcbiAgICAgICAgICAgIGF1dG9zYXZlRmlsZW5hbWUgKyAnX3VpZGF0YScsXG4gICAgICAgICAgICB7ZW5jb2Rpbmc6ICd1dGY4J31cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSggc3RhdGUgKTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGF1dG9zYXZlID0ge1xuICAgIC8qKlxuICAgICAqIERlbGV0ZSB0aGUgYXV0b3NhdmUgZmlsZXMuXG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEZTLnVubGluayggYXV0b3NhdmVGaWxlbmFtZSApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHt9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEZTLnVubGluayggYXV0b3NhdmVGaWxlbmFtZSArICdfdWlkYXRhJyApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHt9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBhc3MgdGhlIGF1dG9zYXZlJ3MgZmlsZW5hbWUgdG8gdGhlIGVuZ2luZSB0aGF0IHRha2VzIGNhcmUgb2ZcbiAgICAgKiByZWxvYWRpbmcgdGhlIHNhdmUuXG4gICAgICovXG4gICAgcmVzdG9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gb3BlbiB0aGUgYXV0b3NhdmUgZmlsZS5cbiAgICAgICAgICAgIC8vIElmIGl0IGRvZXNuJ3QgZXhpc3QsIHRoaXMgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgICAgICAgRlMuc3RhdCggYXV0b3NhdmVGaWxlbmFtZSApO1xuXG4gICAgICAgICAgICBNb2R1bGUuY2NhbGwoXG4gICAgICAgICAgICAgICAgJ2h1Z29qc19zZXRfYXV0b3NhdmVfZmlsZW5hbWUnLFxuICAgICAgICAgICAgICAgICdudWxsJyxcbiAgICAgICAgICAgICAgICBbICdzdHJpbmcnIF0sXG4gICAgICAgICAgICAgICAgWyBhdXRvc2F2ZUZpbGVuYW1lIF1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgICAgLy8gYXV0b3NhdmUgZmlsZSBkb2Vzbid0IGV4aXN0LCBkbyBub3RoaW5nXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2F2ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCAhZ2V0T3B0aW9uKCAnYXV0b3NhdmUnICkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmlnZ2VyIGVuZ2luZSBhdXRvc2F2ZVxuICAgICAgICBjb25zdCBlbmdpbmVTYXZlU3VjY2VlZGVkID0gTW9kdWxlLmNjYWxsKFxuICAgICAgICAgICAgJ2hhdmVuX3NhdmVfYXV0b3NhdmUnLFxuICAgICAgICAgICAgJ2ludCcsXG4gICAgICAgICAgICBbICdzdHJpbmcnIF0sXG4gICAgICAgICAgICBbIGF1dG9zYXZlRmlsZW5hbWUgXVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNhdmUgVUkgc3RhdGVcbiAgICAgICAgaWYoIGVuZ2luZVNhdmVTdWNjZWVkZWQgKSB7XG4gICAgICAgICAgICBGUy53cml0ZUZpbGUoXG4gICAgICAgICAgICAgICAgYXV0b3NhdmVGaWxlbmFtZSArICdfdWlkYXRhJyxcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSggaGF2ZW4ud2luZG93LmdldFVJU3RhdGUoKSApLFxuICAgICAgICAgICAgICAgIHtlbmNvZGluZzogJ3V0ZjgnfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1lbWJlciB0aGUgYXV0b3NhdmUncyBmaWxlbmFtZVxuICAgICAqIEBwYXJhbSBmaWxlbmFtZVxuICAgICAqL1xuICAgIHNldE5hbWU6IGZ1bmN0aW9uKCBmaWxlbmFtZSApIHtcbiAgICAgICAgYXV0b3NhdmVGaWxlbmFtZSA9IGZpbGVuYW1lO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBSZXN0b3JlIHNhdmVkIFVJIHN0YXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZVVJKCkge1xuICAgIGNvbnN0IHNhdmVkU3RhdGUgPSByZWFkVUlTdGF0ZSgpO1xuICAgIGxldCB3aW5kb3dDb3VudDtcblxuICAgIGlmKCAhc2F2ZWRTdGF0ZSApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHdpbmRvd2luZyBoYXMgYmVlbiBzZXQgb2ZmIGluIG9wdGlvbnMsIHJlc3RvcmUgb25seSB0aGUgbWFpbiB3aW5kb3dcbiAgICBpZiggZ2V0T3B0aW9uKCAnd2luZG93aW5nJyApICkge1xuICAgICAgICB3aW5kb3dDb3VudCA9IHNhdmVkU3RhdGUud2luZG93Q29udGVudHMubGVuZ3RoO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2luZG93Q291bnQgPSAxO1xuICAgIH1cblxuICAgIGNsZWFyV2luZG93KCk7XG5cbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHdpbmRvd0NvdW50OyArK2kgKSB7XG4gICAgICAgIGNyZWF0ZVdpbmRvdyhcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBzYXZlZFN0YXRlLndpbmRvd0RpbWVuc2lvbnNbIGkgXS5sZWZ0LFxuICAgICAgICAgICAgc2F2ZWRTdGF0ZS53aW5kb3dEaW1lbnNpb25zWyBpIF0udG9wLFxuICAgICAgICAgICAgc2F2ZWRTdGF0ZS53aW5kb3dEaW1lbnNpb25zWyBpIF0ucmlnaHQsXG4gICAgICAgICAgICBzYXZlZFN0YXRlLndpbmRvd0RpbWVuc2lvbnNbIGkgXS5ib3R0b21cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb2xvci5yZXN0b3JlKCBzYXZlZFN0YXRlLmN1cnJlbnRDb2xvcnMgKTtcbiAgICByZXN0b3JlU3R5bGUoIHNhdmVkU3RhdGUuZm9udCApO1xuICAgIHdpbmRvd1Bvc2l0aW9uLnJlc3RvcmUoIHNhdmVkU3RhdGUucG9zaXRpb24gKTtcblxuICAgIGlmKCBzYXZlZFN0YXRlLnRpdGxlICkge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHNhdmVkU3RhdGUudGl0bGU7XG4gICAgfVxuXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBzYXZlZFN0YXRlLndpbmRvd0NvbnRlbnRzLmxlbmd0aDsgKytpICkge1xuICAgICAgICBnZXRXaW5kb3coIGkgKS5pbm5lckhUTUwgPSBzYXZlZFN0YXRlLndpbmRvd0NvbnRlbnRzWyBpIF07XG4gICAgICAgIGFwcGx5U3R5bGUoIGhhdmVuLndpbmRvdy5nZXQoIGkgKSwgaSApO1xuICAgIH1cblxuICAgIGFwcGx5U3R5bGUoIGRvY3VtZW50LmJvZHksIDAgKTtcblxuICAgIC8vIFRPRE86IG9ubHkgZm9yIEh1Z28hXG4gICAgLy8gc2V0IHRoZSBzYW1lIHN0eWxlIHdlIGhhZCB3aGVuIHNhdmluZ1xuICAgIE1vZHVsZS5jY2FsbChcbiAgICAgICAgJ2h1Z29qc19zZXRfZm9udCcsXG4gICAgICAgICdudWxsJyxcbiAgICAgICAgWyAnaW50JyBdLFxuICAgICAgICBbIHNhdmVkU3RhdGUuZm9udFsgMCBdLm9yaWdpbmFsIF1cbiAgICApO1xuXG4gICAgTW9kdWxlLmNjYWxsKFxuICAgICAgICAnaHVnb2pzX3NldF9jb2xvcnMnLFxuICAgICAgICAnbnVsbCcsXG4gICAgICAgIFsgJ2ludCcsICdpbnQnIF0sXG4gICAgICAgIFsgc2F2ZWRTdGF0ZS5jdXJyZW50Q29sb3JzWyAwIF0udGV4dCwgc2F2ZWRTdGF0ZS5jdXJyZW50Q29sb3JzWyAwIF0uYmFja2dyb3VuZCBdXG4gICAgKTtcblxuICAgIC8vIHJlc3RvcmUgY29tbWFuZCBoaXN0b3J5XG4gICAgaGlzdG9yeS5zZXQoIHNhdmVkU3RhdGUuY21kSGlzdG9yeSB8fCBbXSApO1xuXG4gICAgLy8gc2Nyb2xsIHRvIHRoZSBib3R0b21cbiAgICB3aW5kb3cuc2Nyb2xsVG8oIDAsIDllOSApO1xuICAgIHNldERvU2Nyb2xsKCk7XG59IiwiaW1wb3J0IHsgZmx1c2ggfSBmcm9tIFwiLi9idWZmZXJcIjtcbmltcG9ydCB7IGdldCBhcyBnZXRPcHRpb24gfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBnZXQgYXMgZ2V0UHJvbXB0IH0gZnJvbSBcIi4vcHJvbXB0XCI7XG5cbi8vIGN1cnJlbnRseSBzZXQgY29sb3JzXG5sZXQgY3VycmVudENvbG9ycyA9IFsgZGVmYXVsdENvbG9ycyggMCApIF07XG5cbi8vIGN1cnJlbnRseSBzZXQgZm9udHNcbmxldCBjdXJyZW50Rm9udCA9IFsgZGVmYXVsdFN0eWxlcygpIF07XG5cbi8vIGxldCBlbmdpbmUgZGVjaWRlIHRleHQgYW5kIGJhY2tncm91bmQgY29sb3JzP1xubGV0IGVuZ2luZUNvbG9ycyA9IHRydWU7XG5cbi8vIGlnbm9yZSBmb250IGZhbWlseSBzZXR0aW5ncz8gKHByb3BvcnRpb25hbC9maXhlZC13aWR0aClcbmxldCBpZ25vcmVGb250RmFtaWx5ID0gZmFsc2U7XG5cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgY29sb3JzIG9mIGEgZm9udCBvYmplY3RcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0V2luZG93XG4gKiBAcmV0dXJucyB7e3RleHQ6IG51bWJlciwgYmFja2dyb3VuZDogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZGVmYXVsdENvbG9ycyggdGFyZ2V0V2luZG93ICkge1xuICAgIGlmKCB0YXJnZXRXaW5kb3cgPT09IDEgKSB7ICAvLyBzdGF0dXMgbGluZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogMTUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAxXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogNyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBEZWZhdWx0IHN0eWxlcyBvZiB0aGUgZm9udFxuICovXG5mdW5jdGlvbiBkZWZhdWx0U3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvbGQ6IGZhbHNlLFxuICAgICAgICBpdGFsaWM6IGZhbHNlLFxuICAgICAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgICAgICBwcm9wb3J0aW9uYWw6IHRydWUsXG4gICAgICAgIG9yaWdpbmFsOiAwICAgICAvLyB0aGUgb3JpZ2luYWwgaW50ZWdlciB2YWx1ZSBvZiB0aGUgZm9udFxuICAgIH07XG59XG5cblxuLyoqXG4gKiBTZXQgY3VycmVudGx5IGFjdGl2ZSBmb250IHN0eWxlcyBhbmQgY29sb3JzIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIGVsZW1cbiAqIEBwYXJhbSB0YXJnZXRXaW5kb3dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KCBlbGVtLCB0YXJnZXRXaW5kb3cgKSB7XG4gICAgY29uc3QgbmV3Q2xhc3NlcyA9IFtdO1xuICAgIGNvbnN0IHByb21wdCA9IGdldFByb21wdCgpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnSU5QVVQnIClbIDAgXTtcbiAgICBjb25zdCBzZXRQcm9tcHRTdHlsZSA9ICh0YXJnZXRXaW5kb3cgPT09IDApO1xuXG4gICAgaWYoICFjdXJyZW50Q29sb3JzWyB0YXJnZXRXaW5kb3cgXSApIHtcbiAgICAgICAgY3VycmVudENvbG9yc1sgdGFyZ2V0V2luZG93IF0gPSBkZWZhdWx0Q29sb3JzKCB0YXJnZXRXaW5kb3cgKTtcbiAgICB9XG5cbiAgICBpZiggZW5naW5lQ29sb3JzICkge1xuICAgICAgICBuZXdDbGFzc2VzLnB1c2goIFwidGV4dGNvbG9yLVwiICsgY3VycmVudENvbG9yc1sgdGFyZ2V0V2luZG93IF0udGV4dCApO1xuICAgICAgICBuZXdDbGFzc2VzLnB1c2goIFwiYmdjb2xvci1cIiArIGN1cnJlbnRDb2xvcnNbIHRhcmdldFdpbmRvdyBdLmJhY2tncm91bmQgKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgb2xkIGNsYXNzIHN0eWxlc1xuICAgIGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUucmVwbGFjZSggL1xcYih0ZXh0fGJnKWNvbG9yLVxcZCsvZywgXCJcIiApO1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSggXCJmb250LWZpeGVkLXdpZHRoXCIgKTtcblxuICAgIGlmKCBzZXRQcm9tcHRTdHlsZSApIHtcbiAgICAgICAgcHJvbXB0LmNsYXNzTmFtZSA9IHByb21wdC5jbGFzc05hbWUucmVwbGFjZSggL1xcYih0ZXh0fGJnKWNvbG9yLVxcZCsvZywgXCJcIiApO1xuICAgICAgICBwcm9tcHQuY2xhc3NMaXN0LnJlbW92ZSggXCJmb250LWZpeGVkLXdpZHRoXCIgKTtcbiAgICB9XG5cbiAgICBpZiggIWN1cnJlbnRGb250WyB0YXJnZXRXaW5kb3cgXSApIHtcbiAgICAgICAgY3VycmVudEZvbnRbIHRhcmdldFdpbmRvdyBdID0gZGVmYXVsdFN0eWxlcygpO1xuICAgIH1cblxuICAgIGZvciggbGV0IHByb3AgaW4gY3VycmVudEZvbnRbIHRhcmdldFdpbmRvdyBdICkge1xuICAgICAgICBpZiggaWdub3JlRm9udEZhbWlseSAmJiBwcm9wID09PSAncHJvcG9ydGlvbmFsJyApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIGN1cnJlbnRGb250WyB0YXJnZXRXaW5kb3cgXS5oYXNPd25Qcm9wZXJ0eSggcHJvcCApICkge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCBcImZvbnQtXCIgKyBwcm9wICk7XG5cbiAgICAgICAgICAgIGlmKCBzZXRQcm9tcHRTdHlsZSApIHtcbiAgICAgICAgICAgICAgICBwcm9tcHQuY2xhc3NMaXN0LnJlbW92ZSggXCJmb250LVwiICsgcHJvcCApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggY3VycmVudEZvbnRbIHRhcmdldFdpbmRvdyBdWyBwcm9wIF0gKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2xhc3Nlcy5wdXNoKCBcImZvbnQtXCIgKyBwcm9wICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggIWlnbm9yZUZvbnRGYW1pbHkgJiYgY3VycmVudEZvbnRbIHRhcmdldFdpbmRvdyBdLmhhc093blByb3BlcnR5KCAncHJvcG9ydGlvbmFsJyApICYmICFjdXJyZW50Rm9udFsgdGFyZ2V0V2luZG93IF0ucHJvcG9ydGlvbmFsICkge1xuICAgICAgICBuZXdDbGFzc2VzLnB1c2goIFwiZm9udC1maXhlZC13aWR0aFwiICk7XG4gICAgfVxuXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBuZXdDbGFzc2VzLmxlbmd0aDsgKytpICkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoIG5ld0NsYXNzZXNbIGkgXSApO1xuXG4gICAgICAgIGlmKCBzZXRQcm9tcHRTdHlsZSApIHtcbiAgICAgICAgICAgIHByb21wdC5jbGFzc0xpc3QuYWRkKCBuZXdDbGFzc2VzWyBpIF0gKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Q29sb3JzO1xuICAgIH0sXG5cbiAgICByZXN0b3JlOiBmdW5jdGlvbiggb2xkU3RhdGUgKSB7XG4gICAgICAgIGN1cnJlbnRDb2xvcnMgPSBvbGRTdGF0ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IGNvbG9ycyBpbiB3aW5kb3dzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2hpY2hcbiAgICAgKiBAcGFyYW0gY29sb3JcbiAgICAgKiBAcGFyYW0gdGFyZ2V0V2luZG93XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiggd2hpY2gsIGNvbG9yLCB0YXJnZXRXaW5kb3cgKSB7XG4gICAgICAgIGlmKCAhY3VycmVudENvbG9yc1sgdGFyZ2V0V2luZG93IF0gKSB7XG4gICAgICAgICAgICBjdXJyZW50Q29sb3JzWyB0YXJnZXRXaW5kb3cgXSA9IGRlZmF1bHRDb2xvcnMoIHRhcmdldFdpbmRvdyApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIGN1cnJlbnRDb2xvcnNbIHRhcmdldFdpbmRvdyBdWyB3aGljaCBdID09PSBjb2xvciApIHtcbiAgICAgICAgICAgIC8vIHRoZSBjb2xvciBkb2Vzbid0IGNoYW5nZSwgZG8gbm90aGluZ1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZmx1c2goIHRhcmdldFdpbmRvdyApO1xuXG4gICAgICAgIGN1cnJlbnRDb2xvcnNbIHRhcmdldFdpbmRvdyBdWyB3aGljaCBdID0gY29sb3I7XG4gICAgfVxufTtcblxuXG5leHBvcnQgY29uc3QgZm9udCA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudEZvbnQ7XG4gICAgfVxufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCggb3B0aW9ucyApIHtcbiAgICBpZ25vcmVGb250RmFtaWx5ID0gIW9wdGlvbnMuZW5naW5lRm9udEZhbWlseTtcbiAgICBlbmdpbmVDb2xvcnMgPSBvcHRpb25zLmVuZ2luZUNvbG9ycztcbn1cblxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGVudGlyZSBzdHlsZSBzdGF0ZS5cbiAqXG4gKiBAcGFyYW0gb2xkU3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmUoIG9sZFN0YXRlICkge1xuICAgIGN1cnJlbnRGb250ID0gb2xkU3RhdGU7XG59XG5cblxuLyoqXG4gKiBTZXQgYSBjdXJyZW50IHN0eWxlIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAgYm9sZCwgaXRhbGljLCB1bmRlcmxpbmUsIG9yIHByb3BvcnRpb25hbFxuICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IHRhcmdldFdpbmRvd1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KCB0eXBlLCB2YWx1ZSwgdGFyZ2V0V2luZG93ICkge1xuICAgIGZsdXNoKCB0YXJnZXRXaW5kb3cgKTtcbiAgICBjdXJyZW50Rm9udFsgdGFyZ2V0V2luZG93IF1bIHR5cGUgXSA9IHZhbHVlO1xufVxuIiwiOyhmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogQHByZXNlcnZlIEZhc3RDbGljazogcG9seWZpbGwgdG8gcmVtb3ZlIGNsaWNrIGRlbGF5cyBvbiBicm93c2VycyB3aXRoIHRvdWNoIFVJcy5cblx0ICpcblx0ICogQGNvZGluZ3N0YW5kYXJkIGZ0bGFicy1qc3YyXG5cdCAqIEBjb3B5cmlnaHQgVGhlIEZpbmFuY2lhbCBUaW1lcyBMaW1pdGVkIFtBbGwgUmlnaHRzIFJlc2VydmVkXVxuXHQgKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoc2VlIExJQ0VOU0UudHh0KVxuXHQgKi9cblxuXHQvKmpzbGludCBicm93c2VyOnRydWUsIG5vZGU6dHJ1ZSovXG5cdC8qZ2xvYmFsIGRlZmluZSwgRXZlbnQsIE5vZGUqL1xuXG5cblx0LyoqXG5cdCAqIEluc3RhbnRpYXRlIGZhc3QtY2xpY2tpbmcgbGlzdGVuZXJzIG9uIHRoZSBzcGVjaWZpZWQgbGF5ZXIuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHNcblx0ICovXG5cdGZ1bmN0aW9uIEZhc3RDbGljayhsYXllciwgb3B0aW9ucykge1xuXHRcdHZhciBvbGRPbkNsaWNrO1xuXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIGEgY2xpY2sgaXMgY3VycmVudGx5IGJlaW5nIHRyYWNrZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRpbWVzdGFtcCBmb3Igd2hlbiBjbGljayB0cmFja2luZyBzdGFydGVkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaGUgZWxlbWVudCBiZWluZyB0cmFja2VkIGZvciBhIGNsaWNrLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgRXZlbnRUYXJnZXRcblx0XHQgKi9cblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXG5cblx0XHQvKipcblx0XHQgKiBYLWNvb3JkaW5hdGUgb2YgdG91Y2ggc3RhcnQgZXZlbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoU3RhcnRYID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogWS1jb29yZGluYXRlIG9mIHRvdWNoIHN0YXJ0IGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaFN0YXJ0WSA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIElEIG9mIHRoZSBsYXN0IHRvdWNoLCByZXRyaWV2ZWQgZnJvbSBUb3VjaC5pZGVudGlmaWVyLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVG91Y2htb3ZlIGJvdW5kYXJ5LCBiZXlvbmQgd2hpY2ggYSBjbGljayB3aWxsIGJlIGNhbmNlbGxlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hCb3VuZGFyeSA9IG9wdGlvbnMudG91Y2hCb3VuZGFyeSB8fCAxMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIEZhc3RDbGljayBsYXllci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIEVsZW1lbnRcblx0XHQgKi9cblx0XHR0aGlzLmxheWVyID0gbGF5ZXI7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbWluaW11bSB0aW1lIGJldHdlZW4gdGFwKHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kKSBldmVudHNcblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudGFwRGVsYXkgPSBvcHRpb25zLnRhcERlbGF5IHx8IDIwMDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBtYXhpbXVtIHRpbWUgZm9yIGEgdGFwXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRhcFRpbWVvdXQgPSBvcHRpb25zLnRhcFRpbWVvdXQgfHwgNzAwO1xuXG5cdFx0aWYgKEZhc3RDbGljay5ub3ROZWVkZWQobGF5ZXIpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU29tZSBvbGQgdmVyc2lvbnMgb2YgQW5kcm9pZCBkb24ndCBoYXZlIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5cdFx0ZnVuY3Rpb24gYmluZChtZXRob2QsIGNvbnRleHQpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ldGhvZC5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpOyB9O1xuXHRcdH1cblxuXG5cdFx0dmFyIG1ldGhvZHMgPSBbJ29uTW91c2UnLCAnb25DbGljaycsICdvblRvdWNoU3RhcnQnLCAnb25Ub3VjaE1vdmUnLCAnb25Ub3VjaEVuZCcsICdvblRvdWNoQ2FuY2VsJ107XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXHRcdGZvciAodmFyIGkgPSAwLCBsID0gbWV0aG9kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdGNvbnRleHRbbWV0aG9kc1tpXV0gPSBiaW5kKGNvbnRleHRbbWV0aG9kc1tpXV0sIGNvbnRleHQpO1xuXHRcdH1cblxuXHRcdC8vIFNldCB1cCBldmVudCBoYW5kbGVycyBhcyByZXF1aXJlZFxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCBmYWxzZSk7XG5cblx0XHQvLyBIYWNrIGlzIHJlcXVpcmVkIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgRXZlbnQjc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIChlLmcuIEFuZHJvaWQgMilcblx0XHQvLyB3aGljaCBpcyBob3cgRmFzdENsaWNrIG5vcm1hbGx5IHN0b3BzIGNsaWNrIGV2ZW50cyBidWJibGluZyB0byBjYWxsYmFja3MgcmVnaXN0ZXJlZCBvbiB0aGUgRmFzdENsaWNrXG5cdFx0Ly8gbGF5ZXIgd2hlbiB0aGV5IGFyZSBjYW5jZWxsZWQuXG5cdFx0aWYgKCFFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIHJtdiA9IE5vZGUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0cm12LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRybXYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIGFkdiA9IE5vZGUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0YWR2LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IChjYWxsYmFjay5oaWphY2tlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhldmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksIGNhcHR1cmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYSBoYW5kbGVyIGlzIGFscmVhZHkgZGVjbGFyZWQgaW4gdGhlIGVsZW1lbnQncyBvbmNsaWNrIGF0dHJpYnV0ZSwgaXQgd2lsbCBiZSBmaXJlZCBiZWZvcmVcblx0XHQvLyBGYXN0Q2xpY2sncyBvbkNsaWNrIGhhbmRsZXIuIEZpeCB0aGlzIGJ5IHB1bGxpbmcgb3V0IHRoZSB1c2VyLWRlZmluZWQgaGFuZGxlciBmdW5jdGlvbiBhbmRcblx0XHQvLyBhZGRpbmcgaXQgYXMgbGlzdGVuZXIuXG5cdFx0aWYgKHR5cGVvZiBsYXllci5vbmNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cblx0XHRcdC8vIEFuZHJvaWQgYnJvd3NlciBvbiBhdCBsZWFzdCAzLjIgcmVxdWlyZXMgYSBuZXcgcmVmZXJlbmNlIHRvIHRoZSBmdW5jdGlvbiBpbiBsYXllci5vbmNsaWNrXG5cdFx0XHQvLyAtIHRoZSBvbGQgb25lIHdvbid0IHdvcmsgaWYgcGFzc2VkIHRvIGFkZEV2ZW50TGlzdGVuZXIgZGlyZWN0bHkuXG5cdFx0XHRvbGRPbkNsaWNrID0gbGF5ZXIub25jbGljaztcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0b2xkT25DbGljayhldmVudCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRsYXllci5vbmNsaWNrID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBXaW5kb3dzIFBob25lIDguMSBmYWtlcyB1c2VyIGFnZW50IHN0cmluZyB0byBsb29rIGxpa2UgQW5kcm9pZCBhbmQgaVBob25lLlxuXHQqXG5cdCogQHR5cGUgYm9vbGVhblxuXHQqL1xuXHR2YXIgZGV2aWNlSXNXaW5kb3dzUGhvbmUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIFBob25lXCIpID49IDA7XG5cblx0LyoqXG5cdCAqIEFuZHJvaWQgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzQW5kcm9pZCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMCAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUyA9IC9pUChhZHxob25lfG9kKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIDQgcmVxdWlyZXMgYW4gZXhjZXB0aW9uIGZvciBzZWxlY3QgZWxlbWVudHMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUzQgPSBkZXZpY2VJc0lPUyAmJiAoL09TIDRfXFxkKF9cXGQpPy8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblxuXHQvKipcblx0ICogaU9TIDYuMC03LiogcmVxdWlyZXMgdGhlIHRhcmdldCBlbGVtZW50IHRvIGJlIG1hbnVhbGx5IGRlcml2ZWRcblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzSU9TV2l0aEJhZFRhcmdldCA9IGRldmljZUlzSU9TICYmICgvT1MgWzYtN11fXFxkLykudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXHQvKipcblx0ICogQmxhY2tCZXJyeSByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNCbGFja0JlcnJ5MTAgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0JCMTAnKSA+IDA7XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIGEgZ2l2ZW4gZWxlbWVudCByZXF1aXJlcyBhIG5hdGl2ZSBjbGljay5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgbmVlZHMgYSBuYXRpdmUgY2xpY2tcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNDbGljayA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgdG8gZGlzYWJsZWQgaW5wdXRzIChpc3N1ZSAjNjIpXG5cdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdGlmICh0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2lucHV0JzpcblxuXHRcdFx0Ly8gRmlsZSBpbnB1dHMgbmVlZCByZWFsIGNsaWNrcyBvbiBpT1MgNiBkdWUgdG8gYSBicm93c2VyIGJ1ZyAoaXNzdWUgIzY4KVxuXHRcdFx0aWYgKChkZXZpY2VJc0lPUyAmJiB0YXJnZXQudHlwZSA9PT0gJ2ZpbGUnKSB8fCB0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2xhYmVsJzpcblx0XHRjYXNlICdpZnJhbWUnOiAvLyBpT1M4IGhvbWVzY3JlZW4gYXBwcyBjYW4gcHJldmVudCBldmVudHMgYnViYmxpbmcgaW50byBmcmFtZXNcblx0XHRjYXNlICd2aWRlbyc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKC9cXGJuZWVkc2NsaWNrXFxiLykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIGNsaWNrIGludG8gZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIG5hdGl2ZSBjbGljay5cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNGb2N1cyA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0cmV0dXJuICFkZXZpY2VJc0FuZHJvaWQ7XG5cdFx0Y2FzZSAnaW5wdXQnOlxuXHRcdFx0c3dpdGNoICh0YXJnZXQudHlwZSkge1xuXHRcdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ2ZpbGUnOlxuXHRcdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBObyBwb2ludCBpbiBhdHRlbXB0aW5nIHRvIGZvY3VzIGRpc2FibGVkIGlucHV0c1xuXHRcdFx0cmV0dXJuICF0YXJnZXQuZGlzYWJsZWQgJiYgIXRhcmdldC5yZWFkT25seTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICgvXFxibmVlZHNmb2N1c1xcYi8pLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFNlbmQgYSBjbGljayBldmVudCB0byB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5zZW5kQ2xpY2sgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50LCBldmVudCkge1xuXHRcdHZhciBjbGlja0V2ZW50LCB0b3VjaDtcblxuXHRcdC8vIE9uIHNvbWUgQW5kcm9pZCBkZXZpY2VzIGFjdGl2ZUVsZW1lbnQgbmVlZHMgdG8gYmUgYmx1cnJlZCBvdGhlcndpc2UgdGhlIHN5bnRoZXRpYyBjbGljayB3aWxsIGhhdmUgbm8gZWZmZWN0ICgjMjQpXG5cdFx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGFyZ2V0RWxlbWVudCkge1xuXHRcdFx0ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG5cdFx0fVxuXG5cdFx0dG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdC8vIFN5bnRoZXNpc2UgYSBjbGljayBldmVudCwgd2l0aCBhbiBleHRyYSBhdHRyaWJ1dGUgc28gaXQgY2FuIGJlIHRyYWNrZWRcblx0XHRjbGlja0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XG5cdFx0Y2xpY2tFdmVudC5pbml0TW91c2VFdmVudCh0aGlzLmRldGVybWluZUV2ZW50VHlwZSh0YXJnZXRFbGVtZW50KSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxLCB0b3VjaC5zY3JlZW5YLCB0b3VjaC5zY3JlZW5ZLCB0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG5cdFx0Y2xpY2tFdmVudC5mb3J3YXJkZWRUb3VjaEV2ZW50ID0gdHJ1ZTtcblx0XHR0YXJnZXRFbGVtZW50LmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XG5cdH07XG5cblx0RmFzdENsaWNrLnByb3RvdHlwZS5kZXRlcm1pbmVFdmVudFR5cGUgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cblx0XHQvL0lzc3VlICMxNTk6IEFuZHJvaWQgQ2hyb21lIFNlbGVjdCBCb3ggZG9lcyBub3Qgb3BlbiB3aXRoIGEgc3ludGhldGljIGNsaWNrIGV2ZW50XG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCAmJiB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcblx0XHRcdHJldHVybiAnbW91c2Vkb3duJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJ2NsaWNrJztcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cdFx0dmFyIGxlbmd0aDtcblxuXHRcdC8vIElzc3VlICMxNjA6IG9uIGlPUyA3LCBzb21lIGlucHV0IGVsZW1lbnRzIChlLmcuIGRhdGUgZGF0ZXRpbWUgbW9udGgpIHRocm93IGEgdmFndWUgVHlwZUVycm9yIG9uIHNldFNlbGVjdGlvblJhbmdlLiBUaGVzZSBlbGVtZW50cyBkb24ndCBoYXZlIGFuIGludGVnZXIgdmFsdWUgZm9yIHRoZSBzZWxlY3Rpb25TdGFydCBhbmQgc2VsZWN0aW9uRW5kIHByb3BlcnRpZXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IHRoYXQgY2FuJ3QgYmUgdXNlZCBmb3IgZGV0ZWN0aW9uIGJlY2F1c2UgYWNjZXNzaW5nIHRoZSBwcm9wZXJ0aWVzIGFsc28gdGhyb3dzIGEgVHlwZUVycm9yLiBKdXN0IGNoZWNrIHRoZSB0eXBlIGluc3RlYWQuIEZpbGVkIGFzIEFwcGxlIGJ1ZyAjMTUxMjI3MjQuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmIHRhcmdldEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UgJiYgdGFyZ2V0RWxlbWVudC50eXBlLmluZGV4T2YoJ2RhdGUnKSAhPT0gMCAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICd0aW1lJyAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdtb250aCcpIHtcblx0XHRcdGxlbmd0aCA9IHRhcmdldEVsZW1lbnQudmFsdWUubGVuZ3RoO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShsZW5ndGgsIGxlbmd0aCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiBhIHNjcm9sbGFibGUgbGF5ZXIgYW5kIGlmIHNvLCBzZXQgYSBmbGFnIG9uIGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUudXBkYXRlU2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXHRcdHZhciBzY3JvbGxQYXJlbnQsIHBhcmVudEVsZW1lbnQ7XG5cblx0XHRzY3JvbGxQYXJlbnQgPSB0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblxuXHRcdC8vIEF0dGVtcHQgdG8gZGlzY292ZXIgd2hldGhlciB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHNjcm9sbGFibGUgbGF5ZXIuIFJlLWNoZWNrIGlmIHRoZVxuXHRcdC8vIHRhcmdldCBlbGVtZW50IHdhcyBtb3ZlZCB0byBhbm90aGVyIHBhcmVudC5cblx0XHRpZiAoIXNjcm9sbFBhcmVudCB8fCAhc2Nyb2xsUGFyZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRwYXJlbnRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcblx0XHRcdGRvIHtcblx0XHRcdFx0aWYgKHBhcmVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQpIHtcblx0XHRcdFx0XHRzY3JvbGxQYXJlbnQgPSBwYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50ID0gcGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9IHdoaWxlIChwYXJlbnRFbGVtZW50KTtcblx0XHR9XG5cblx0XHQvLyBBbHdheXMgdXBkYXRlIHRoZSBzY3JvbGwgdG9wIHRyYWNrZXIgaWYgcG9zc2libGUuXG5cdFx0aWYgKHNjcm9sbFBhcmVudCkge1xuXHRcdFx0c2Nyb2xsUGFyZW50LmZhc3RDbGlja0xhc3RTY3JvbGxUb3AgPSBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSB0YXJnZXRFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fEV2ZW50VGFyZ2V0fVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24oZXZlbnRUYXJnZXQpIHtcblxuXHRcdC8vIE9uIHNvbWUgb2xkZXIgYnJvd3NlcnMgKG5vdGFibHkgU2FmYXJpIG9uIGlPUyA0LjEgLSBzZWUgaXNzdWUgIzU2KSB0aGUgZXZlbnQgdGFyZ2V0IG1heSBiZSBhIHRleHQgbm9kZS5cblx0XHRpZiAoZXZlbnRUYXJnZXQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gZXZlbnRUYXJnZXQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRUYXJnZXQ7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggc3RhcnQsIHJlY29yZCB0aGUgcG9zaXRpb24gYW5kIHNjcm9sbCBvZmZzZXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0YXJnZXRFbGVtZW50LCB0b3VjaCwgc2VsZWN0aW9uO1xuXG5cdFx0Ly8gSWdub3JlIG11bHRpcGxlIHRvdWNoZXMsIG90aGVyd2lzZSBwaW5jaC10by16b29tIGlzIHByZXZlbnRlZCBpZiBib3RoIGZpbmdlcnMgYXJlIG9uIHRoZSBGYXN0Q2xpY2sgZWxlbWVudCAoaXNzdWUgIzExMSkuXG5cdFx0aWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0RWxlbWVudCA9IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdHRvdWNoID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcblxuXHRcdGlmIChkZXZpY2VJc0lPUykge1xuXG5cdFx0XHQvLyBPbmx5IHRydXN0ZWQgZXZlbnRzIHdpbGwgZGVzZWxlY3QgdGV4dCBvbiBpT1MgKGlzc3VlICM0OSlcblx0XHRcdHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblx0XHRcdGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCAmJiAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWRldmljZUlzSU9TNCkge1xuXG5cdFx0XHRcdC8vIFdlaXJkIHRoaW5ncyBoYXBwZW4gb24gaU9TIHdoZW4gYW4gYWxlcnQgb3IgY29uZmlybSBkaWFsb2cgaXMgb3BlbmVkIGZyb20gYSBjbGljayBldmVudCBjYWxsYmFjayAoaXNzdWUgIzIzKTpcblx0XHRcdFx0Ly8gd2hlbiB0aGUgdXNlciBuZXh0IHRhcHMgYW55d2hlcmUgZWxzZSBvbiB0aGUgcGFnZSwgbmV3IHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kIGV2ZW50cyBhcmUgZGlzcGF0Y2hlZFxuXHRcdFx0XHQvLyB3aXRoIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgdGhlIHRvdWNoIGV2ZW50IHRoYXQgcHJldmlvdXNseSB0cmlnZ2VyZWQgdGhlIGNsaWNrIHRoYXQgdHJpZ2dlcmVkIHRoZSBhbGVydC5cblx0XHRcdFx0Ly8gU2FkbHksIHRoZXJlIGlzIGFuIGlzc3VlIG9uIGlPUyA0IHRoYXQgY2F1c2VzIHNvbWUgbm9ybWFsIHRvdWNoIGV2ZW50cyB0byBoYXZlIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgYW5cblx0XHRcdFx0Ly8gaW1tZWRpYXRlbHkgcHJlY2VlZGluZyB0b3VjaCBldmVudCAoaXNzdWUgIzUyKSwgc28gdGhpcyBmaXggaXMgdW5hdmFpbGFibGUgb24gdGhhdCBwbGF0Zm9ybS5cblx0XHRcdFx0Ly8gSXNzdWUgMTIwOiB0b3VjaC5pZGVudGlmaWVyIGlzIDAgd2hlbiBDaHJvbWUgZGV2IHRvb2xzICdFbXVsYXRlIHRvdWNoIGV2ZW50cycgaXMgc2V0IHdpdGggYW4gaU9TIGRldmljZSBVQSBzdHJpbmcsXG5cdFx0XHRcdC8vIHdoaWNoIGNhdXNlcyBhbGwgdG91Y2ggZXZlbnRzIHRvIGJlIGlnbm9yZWQuIEFzIHRoaXMgYmxvY2sgb25seSBhcHBsaWVzIHRvIGlPUywgYW5kIGlPUyBpZGVudGlmaWVycyBhcmUgYWx3YXlzIGxvbmcsXG5cdFx0XHRcdC8vIHJhbmRvbSBpbnRlZ2VycywgaXQncyBzYWZlIHRvIHRvIGNvbnRpbnVlIGlmIHRoZSBpZGVudGlmaWVyIGlzIDAgaGVyZS5cblx0XHRcdFx0aWYgKHRvdWNoLmlkZW50aWZpZXIgJiYgdG91Y2guaWRlbnRpZmllciA9PT0gdGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmxhc3RUb3VjaElkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuXG5cdFx0XHRcdC8vIElmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIGEgc2Nyb2xsYWJsZSBsYXllciAodXNpbmcgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoKSBhbmQ6XG5cdFx0XHRcdC8vIDEpIHRoZSB1c2VyIGRvZXMgYSBmbGluZyBzY3JvbGwgb24gdGhlIHNjcm9sbGFibGUgbGF5ZXJcblx0XHRcdFx0Ly8gMikgdGhlIHVzZXIgc3RvcHMgdGhlIGZsaW5nIHNjcm9sbCB3aXRoIGFub3RoZXIgdGFwXG5cdFx0XHRcdC8vIHRoZW4gdGhlIGV2ZW50LnRhcmdldCBvZiB0aGUgbGFzdCAndG91Y2hlbmQnIGV2ZW50IHdpbGwgYmUgdGhlIGVsZW1lbnQgdGhhdCB3YXMgdW5kZXIgdGhlIHVzZXIncyBmaW5nZXJcblx0XHRcdFx0Ly8gd2hlbiB0aGUgZmxpbmcgc2Nyb2xsIHdhcyBzdGFydGVkLCBjYXVzaW5nIEZhc3RDbGljayB0byBzZW5kIGEgY2xpY2sgZXZlbnQgdG8gdGhhdCBsYXllciAtIHVubGVzcyBhIGNoZWNrXG5cdFx0XHRcdC8vIGlzIG1hZGUgdG8gZW5zdXJlIHRoYXQgYSBwYXJlbnQgbGF5ZXIgd2FzIG5vdCBzY3JvbGxlZCBiZWZvcmUgc2VuZGluZyBhIHN5bnRoZXRpYyBjbGljayAoaXNzdWUgIzQyKS5cblx0XHRcdFx0dGhpcy51cGRhdGVTY3JvbGxQYXJlbnQodGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gdHJ1ZTtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCA9IGV2ZW50LnRpbWVTdGFtcDtcblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50O1xuXG5cdFx0dGhpcy50b3VjaFN0YXJ0WCA9IHRvdWNoLnBhZ2VYO1xuXHRcdHRoaXMudG91Y2hTdGFydFkgPSB0b3VjaC5wYWdlWTtcblxuXHRcdC8vIFByZXZlbnQgcGhhbnRvbSBjbGlja3Mgb24gZmFzdCBkb3VibGUtdGFwIChpc3N1ZSAjMzYpXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpIDwgdGhpcy50YXBEZWxheSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBCYXNlZCBvbiBhIHRvdWNobW92ZSBldmVudCBvYmplY3QsIGNoZWNrIHdoZXRoZXIgdGhlIHRvdWNoIGhhcyBtb3ZlZCBwYXN0IGEgYm91bmRhcnkgc2luY2UgaXQgc3RhcnRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLnRvdWNoSGFzTW92ZWQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLCBib3VuZGFyeSA9IHRoaXMudG91Y2hCb3VuZGFyeTtcblxuXHRcdGlmIChNYXRoLmFicyh0b3VjaC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpID4gYm91bmRhcnkgfHwgTWF0aC5hYnModG91Y2gucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSA+IGJvdW5kYXJ5KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXHQvKipcblx0ICogVXBkYXRlIHRoZSBsYXN0IHBvc2l0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaE1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmICghdGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgdG91Y2ggaGFzIG1vdmVkLCBjYW5jZWwgdGhlIGNsaWNrIHRyYWNraW5nXG5cdFx0aWYgKHRoaXMudGFyZ2V0RWxlbWVudCAhPT0gdGhpcy5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0KGV2ZW50LnRhcmdldCkgfHwgdGhpcy50b3VjaEhhc01vdmVkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEF0dGVtcHQgdG8gZmluZCB0aGUgbGFiZWxsZWQgY29udHJvbCBmb3IgdGhlIGdpdmVuIGxhYmVsIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8SFRNTExhYmVsRWxlbWVudH0gbGFiZWxFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fG51bGx9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmZpbmRDb250cm9sID0gZnVuY3Rpb24obGFiZWxFbGVtZW50KSB7XG5cblx0XHQvLyBGYXN0IHBhdGggZm9yIG5ld2VyIGJyb3dzZXJzIHN1cHBvcnRpbmcgdGhlIEhUTUw1IGNvbnRyb2wgYXR0cmlidXRlXG5cdFx0aWYgKGxhYmVsRWxlbWVudC5jb250cm9sICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBsYWJlbEVsZW1lbnQuY29udHJvbDtcblx0XHR9XG5cblx0XHQvLyBBbGwgYnJvd3NlcnMgdW5kZXIgdGVzdCB0aGF0IHN1cHBvcnQgdG91Y2ggZXZlbnRzIGFsc28gc3VwcG9ydCB0aGUgSFRNTDUgaHRtbEZvciBhdHRyaWJ1dGVcblx0XHRpZiAobGFiZWxFbGVtZW50Lmh0bWxGb3IpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYWJlbEVsZW1lbnQuaHRtbEZvcik7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgbm8gZm9yIGF0dHJpYnV0ZSBleGlzdHMsIGF0dGVtcHQgdG8gcmV0cmlldmUgdGhlIGZpcnN0IGxhYmVsbGFibGUgZGVzY2VuZGFudCBlbGVtZW50XG5cdFx0Ly8gdGhlIGxpc3Qgb2Ygd2hpY2ggaXMgZGVmaW5lZCBoZXJlOiBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxhYmVsXG5cdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24sIGlucHV0Om5vdChbdHlwZT1oaWRkZW5dKSwga2V5Z2VuLCBtZXRlciwgb3V0cHV0LCBwcm9ncmVzcywgc2VsZWN0LCB0ZXh0YXJlYScpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIHRvdWNoIGVuZCwgZGV0ZXJtaW5lIHdoZXRoZXIgdG8gc2VuZCBhIGNsaWNrIGV2ZW50IGF0IG9uY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgZm9yRWxlbWVudCwgdHJhY2tpbmdDbGlja1N0YXJ0LCB0YXJnZXRUYWdOYW1lLCBzY3JvbGxQYXJlbnQsIHRvdWNoLCB0YXJnZXRFbGVtZW50ID0gdGhpcy50YXJnZXRFbGVtZW50O1xuXG5cdFx0aWYgKCF0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFByZXZlbnQgcGhhbnRvbSBjbGlja3Mgb24gZmFzdCBkb3VibGUtdGFwIChpc3N1ZSAjMzYpXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpIDwgdGhpcy50YXBEZWxheSkge1xuXHRcdFx0dGhpcy5jYW5jZWxOZXh0Q2xpY2sgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCkgPiB0aGlzLnRhcFRpbWVvdXQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFJlc2V0IHRvIHByZXZlbnQgd3JvbmcgY2xpY2sgY2FuY2VsIG9uIGlucHV0IChpc3N1ZSAjMTU2KS5cblx0XHR0aGlzLmNhbmNlbE5leHRDbGljayA9IGZhbHNlO1xuXG5cdFx0dGhpcy5sYXN0Q2xpY2tUaW1lID0gZXZlbnQudGltZVN0YW1wO1xuXG5cdFx0dHJhY2tpbmdDbGlja1N0YXJ0ID0gdGhpcy50cmFja2luZ0NsaWNrU3RhcnQ7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cdFx0Ly8gT24gc29tZSBpT1MgZGV2aWNlcywgdGhlIHRhcmdldEVsZW1lbnQgc3VwcGxpZWQgd2l0aCB0aGUgZXZlbnQgaXMgaW52YWxpZCBpZiB0aGUgbGF5ZXJcblx0XHQvLyBpcyBwZXJmb3JtaW5nIGEgdHJhbnNpdGlvbiBvciBzY3JvbGwsIGFuZCBoYXMgdG8gYmUgcmUtZGV0ZWN0ZWQgbWFudWFsbHkuIE5vdGUgdGhhdFxuXHRcdC8vIGZvciB0aGlzIHRvIGZ1bmN0aW9uIGNvcnJlY3RseSwgaXQgbXVzdCBiZSBjYWxsZWQgKmFmdGVyKiB0aGUgZXZlbnQgdGFyZ2V0IGlzIGNoZWNrZWQhXG5cdFx0Ly8gU2VlIGlzc3VlICM1NzsgYWxzbyBmaWxlZCBhcyByZGFyOi8vMTMwNDg1ODkgLlxuXHRcdGlmIChkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQpIHtcblx0XHRcdHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHRcdC8vIEluIGNlcnRhaW4gY2FzZXMgYXJndW1lbnRzIG9mIGVsZW1lbnRGcm9tUG9pbnQgY2FuIGJlIG5lZ2F0aXZlLCBzbyBwcmV2ZW50IHNldHRpbmcgdGFyZ2V0RWxlbWVudCB0byBudWxsXG5cdFx0XHR0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpIHx8IHRhcmdldEVsZW1lbnQ7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudCA9IHRoaXMudGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0VGFnTmFtZSA9IHRhcmdldEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICh0YXJnZXRUYWdOYW1lID09PSAnbGFiZWwnKSB7XG5cdFx0XHRmb3JFbGVtZW50ID0gdGhpcy5maW5kQ29udHJvbCh0YXJnZXRFbGVtZW50KTtcblx0XHRcdGlmIChmb3JFbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0YXJnZXRFbGVtZW50ID0gZm9yRWxlbWVudDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMubmVlZHNGb2N1cyh0YXJnZXRFbGVtZW50KSkge1xuXG5cdFx0XHQvLyBDYXNlIDE6IElmIHRoZSB0b3VjaCBzdGFydGVkIGEgd2hpbGUgYWdvIChiZXN0IGd1ZXNzIGlzIDEwMG1zIGJhc2VkIG9uIHRlc3RzIGZvciBpc3N1ZSAjMzYpIHRoZW4gZm9jdXMgd2lsbCBiZSB0cmlnZ2VyZWQgYW55d2F5LiBSZXR1cm4gZWFybHkgYW5kIHVuc2V0IHRoZSB0YXJnZXQgZWxlbWVudCByZWZlcmVuY2Ugc28gdGhhdCB0aGUgc3Vic2VxdWVudCBjbGljayB3aWxsIGJlIGFsbG93ZWQgdGhyb3VnaC5cblx0XHRcdC8vIENhc2UgMjogV2l0aG91dCB0aGlzIGV4Y2VwdGlvbiBmb3IgaW5wdXQgZWxlbWVudHMgdGFwcGVkIHdoZW4gdGhlIGRvY3VtZW50IGlzIGNvbnRhaW5lZCBpbiBhbiBpZnJhbWUsIHRoZW4gYW55IGlucHV0dGVkIHRleHQgd29uJ3QgYmUgdmlzaWJsZSBldmVuIHRob3VnaCB0aGUgdmFsdWUgYXR0cmlidXRlIGlzIHVwZGF0ZWQgYXMgdGhlIHVzZXIgdHlwZXMgKGlzc3VlICMzNykuXG5cdFx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRyYWNraW5nQ2xpY2tTdGFydCkgPiAxMDAgfHwgKGRldmljZUlzSU9TICYmIHdpbmRvdy50b3AgIT09IHdpbmRvdyAmJiB0YXJnZXRUYWdOYW1lID09PSAnaW5wdXQnKSkge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR0aGlzLnNlbmRDbGljayh0YXJnZXRFbGVtZW50LCBldmVudCk7XG5cblx0XHRcdC8vIFNlbGVjdCBlbGVtZW50cyBuZWVkIHRoZSBldmVudCB0byBnbyB0aHJvdWdoIG9uIGlPUyA0LCBvdGhlcndpc2UgdGhlIHNlbGVjdG9yIG1lbnUgd29uJ3Qgb3Blbi5cblx0XHRcdC8vIEFsc28gdGhpcyBicmVha3Mgb3BlbmluZyBzZWxlY3RzIHdoZW4gVm9pY2VPdmVyIGlzIGFjdGl2ZSBvbiBpT1M2LCBpT1M3IChhbmQgcG9zc2libHkgb3RoZXJzKVxuXHRcdFx0aWYgKCFkZXZpY2VJc0lPUyB8fCB0YXJnZXRUYWdOYW1lICE9PSAnc2VsZWN0Jykge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmICFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdFx0Ly8gRG9uJ3Qgc2VuZCBhIHN5bnRoZXRpYyBjbGljayBldmVudCBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHBhcmVudCBsYXllciB0aGF0IHdhcyBzY3JvbGxlZFxuXHRcdFx0Ly8gYW5kIHRoaXMgdGFwIGlzIGJlaW5nIHVzZWQgdG8gc3RvcCB0aGUgc2Nyb2xsaW5nICh1c3VhbGx5IGluaXRpYXRlZCBieSBhIGZsaW5nIC0gaXNzdWUgIzQyKS5cblx0XHRcdHNjcm9sbFBhcmVudCA9IHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHRcdFx0aWYgKHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQuZmFzdENsaWNrTGFzdFNjcm9sbFRvcCAhPT0gc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmV2ZW50IHRoZSBhY3R1YWwgY2xpY2sgZnJvbSBnb2luZyB0aG91Z2ggLSB1bmxlc3MgdGhlIHRhcmdldCBub2RlIGlzIG1hcmtlZCBhcyByZXF1aXJpbmdcblx0XHQvLyByZWFsIGNsaWNrcyBvciBpZiBpdCBpcyBpbiB0aGUgd2hpdGVsaXN0IGluIHdoaWNoIGNhc2Ugb25seSBub24tcHJvZ3JhbW1hdGljIGNsaWNrcyBhcmUgcGVybWl0dGVkLlxuXHRcdGlmICghdGhpcy5uZWVkc0NsaWNrKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5zZW5kQ2xpY2sodGFyZ2V0RWxlbWVudCwgZXZlbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBjYW5jZWwsIHN0b3AgdHJhY2tpbmcgdGhlIGNsaWNrLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaENhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdH07XG5cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIG1vdXNlIGV2ZW50cyB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Nb3VzZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cblx0XHQvLyBJZiBhIHRhcmdldCBlbGVtZW50IHdhcyBuZXZlciBzZXQgKGJlY2F1c2UgYSB0b3VjaCBldmVudCB3YXMgbmV2ZXIgZmlyZWQpIGFsbG93IHRoZSBldmVudFxuXHRcdGlmICghdGhpcy50YXJnZXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZm9yd2FyZGVkVG91Y2hFdmVudCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUHJvZ3JhbW1hdGljYWxseSBnZW5lcmF0ZWQgZXZlbnRzIHRhcmdldGluZyBhIHNwZWNpZmljIGVsZW1lbnQgc2hvdWxkIGJlIHBlcm1pdHRlZFxuXHRcdGlmICghZXZlbnQuY2FuY2VsYWJsZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gRGVyaXZlIGFuZCBjaGVjayB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gc2VlIHdoZXRoZXIgdGhlIG1vdXNlIGV2ZW50IG5lZWRzIHRvIGJlIHBlcm1pdHRlZDtcblx0XHQvLyB1bmxlc3MgZXhwbGljaXRseSBlbmFibGVkLCBwcmV2ZW50IG5vbi10b3VjaCBjbGljayBldmVudHMgZnJvbSB0cmlnZ2VyaW5nIGFjdGlvbnMsXG5cdFx0Ly8gdG8gcHJldmVudCBnaG9zdC9kb3VibGVjbGlja3MuXG5cdFx0aWYgKCF0aGlzLm5lZWRzQ2xpY2sodGhpcy50YXJnZXRFbGVtZW50KSB8fCB0aGlzLmNhbmNlbE5leHRDbGljaykge1xuXG5cdFx0XHQvLyBQcmV2ZW50IGFueSB1c2VyLWFkZGVkIGxpc3RlbmVycyBkZWNsYXJlZCBvbiBGYXN0Q2xpY2sgZWxlbWVudCBmcm9tIGJlaW5nIGZpcmVkLlxuXHRcdFx0aWYgKGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuXHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFydCBvZiB0aGUgaGFjayBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IEV2ZW50I3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoZS5nLiBBbmRyb2lkIDIpXG5cdFx0XHRcdGV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbmNlbCB0aGUgZXZlbnRcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBtb3VzZSBldmVudCBpcyBwZXJtaXR0ZWQsIHJldHVybiB0cnVlIGZvciB0aGUgYWN0aW9uIHRvIGdvIHRocm91Z2guXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gYWN0dWFsIGNsaWNrcywgZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhIHRvdWNoLWdlbmVyYXRlZCBjbGljaywgYSBjbGljayBhY3Rpb24gb2NjdXJyaW5nXG5cdCAqIG5hdHVyYWxseSBhZnRlciBhIGRlbGF5IGFmdGVyIGEgdG91Y2ggKHdoaWNoIG5lZWRzIHRvIGJlIGNhbmNlbGxlZCB0byBhdm9pZCBkdXBsaWNhdGlvbiksIG9yXG5cdCAqIGFuIGFjdHVhbCBjbGljayB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHBlcm1pdHRlZDtcblxuXHRcdC8vIEl0J3MgcG9zc2libGUgZm9yIGFub3RoZXIgRmFzdENsaWNrLWxpa2UgbGlicmFyeSBkZWxpdmVyZWQgd2l0aCB0aGlyZC1wYXJ0eSBjb2RlIHRvIGZpcmUgYSBjbGljayBldmVudCBiZWZvcmUgRmFzdENsaWNrIGRvZXMgKGlzc3VlICM0NCkuIEluIHRoYXQgY2FzZSwgc2V0IHRoZSBjbGljay10cmFja2luZyBmbGFnIGJhY2sgdG8gZmFsc2UgYW5kIHJldHVybiBlYXJseS4gVGhpcyB3aWxsIGNhdXNlIG9uVG91Y2hFbmQgdG8gcmV0dXJuIGVhcmx5LlxuXHRcdGlmICh0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFZlcnkgb2RkIGJlaGF2aW91ciBvbiBpT1MgKGlzc3VlICMxOCk6IGlmIGEgc3VibWl0IGVsZW1lbnQgaXMgcHJlc2VudCBpbnNpZGUgYSBmb3JtIGFuZCB0aGUgdXNlciBoaXRzIGVudGVyIGluIHRoZSBpT1Mgc2ltdWxhdG9yIG9yIGNsaWNrcyB0aGUgR28gYnV0dG9uIG9uIHRoZSBwb3AtdXAgT1Mga2V5Ym9hcmQgdGhlIGEga2luZCBvZiAnZmFrZScgY2xpY2sgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCB0aGUgc3VibWl0LXR5cGUgaW5wdXQgZWxlbWVudCBhcyB0aGUgdGFyZ2V0LlxuXHRcdGlmIChldmVudC50YXJnZXQudHlwZSA9PT0gJ3N1Ym1pdCcgJiYgZXZlbnQuZGV0YWlsID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRwZXJtaXR0ZWQgPSB0aGlzLm9uTW91c2UoZXZlbnQpO1xuXG5cdFx0Ly8gT25seSB1bnNldCB0YXJnZXRFbGVtZW50IGlmIHRoZSBjbGljayBpcyBub3QgcGVybWl0dGVkLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgdGhlIGNoZWNrIGZvciAhdGFyZ2V0RWxlbWVudCBpbiBvbk1vdXNlIGZhaWxzIGFuZCB0aGUgYnJvd3NlcidzIGNsaWNrIGRvZXNuJ3QgZ28gdGhyb3VnaC5cblx0XHRpZiAoIXBlcm1pdHRlZCkge1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBJZiBjbGlja3MgYXJlIHBlcm1pdHRlZCwgcmV0dXJuIHRydWUgZm9yIHRoZSBhY3Rpb24gdG8gZ28gdGhyb3VnaC5cblx0XHRyZXR1cm4gcGVybWl0dGVkO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgRmFzdENsaWNrJ3MgZXZlbnQgbGlzdGVuZXJzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBsYXllciA9IHRoaXMubGF5ZXI7XG5cblx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdH1cblxuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMub25Ub3VjaENhbmNlbCwgZmFsc2UpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgRmFzdENsaWNrIGlzIG5lZWRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqL1xuXHRGYXN0Q2xpY2subm90TmVlZGVkID0gZnVuY3Rpb24obGF5ZXIpIHtcblx0XHR2YXIgbWV0YVZpZXdwb3J0O1xuXHRcdHZhciBjaHJvbWVWZXJzaW9uO1xuXHRcdHZhciBibGFja2JlcnJ5VmVyc2lvbjtcblx0XHR2YXIgZmlyZWZveFZlcnNpb247XG5cblx0XHQvLyBEZXZpY2VzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0b3VjaCBkb24ndCBuZWVkIEZhc3RDbGlja1xuXHRcdGlmICh0eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIENocm9tZSB2ZXJzaW9uIC0gemVybyBmb3Igb3RoZXIgYnJvd3NlcnNcblx0XHRjaHJvbWVWZXJzaW9uID0gKygvQ2hyb21lXFwvKFswLTldKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgWywwXSlbMV07XG5cblx0XHRpZiAoY2hyb21lVmVyc2lvbikge1xuXG5cdFx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuXHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0KSB7XG5cdFx0XHRcdFx0Ly8gQ2hyb21lIG9uIEFuZHJvaWQgd2l0aCB1c2VyLXNjYWxhYmxlPVwibm9cIiBkb2Vzbid0IG5lZWQgRmFzdENsaWNrIChpc3N1ZSAjODkpXG5cdFx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydC5jb250ZW50LmluZGV4T2YoJ3VzZXItc2NhbGFibGU9bm8nKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBDaHJvbWUgMzIgYW5kIGFib3ZlIHdpdGggd2lkdGg9ZGV2aWNlLXdpZHRoIG9yIGxlc3MgZG9uJ3QgbmVlZCBGYXN0Q2xpY2tcblx0XHRcdFx0XHRpZiAoY2hyb21lVmVyc2lvbiA+IDMxICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdC8vIENocm9tZSBkZXNrdG9wIGRvZXNuJ3QgbmVlZCBGYXN0Q2xpY2sgKGlzc3VlICMxNSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChkZXZpY2VJc0JsYWNrQmVycnkxMCkge1xuXHRcdFx0YmxhY2tiZXJyeVZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9WZXJzaW9uXFwvKFswLTldKilcXC4oWzAtOV0qKS8pO1xuXG5cdFx0XHQvLyBCbGFja0JlcnJ5IDEwLjMrIGRvZXMgbm90IHJlcXVpcmUgRmFzdGNsaWNrIGxpYnJhcnkuXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZnRsYWJzL2Zhc3RjbGljay9pc3N1ZXMvMjUxXG5cdFx0XHRpZiAoYmxhY2tiZXJyeVZlcnNpb25bMV0gPj0gMTAgJiYgYmxhY2tiZXJyeVZlcnNpb25bMl0gPj0gMykge1xuXHRcdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cblx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydCkge1xuXHRcdFx0XHRcdC8vIHVzZXItc2NhbGFibGU9bm8gZWxpbWluYXRlcyBjbGljayBkZWxheS5cblx0XHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIHdpZHRoPWRldmljZS13aWR0aCAob3IgbGVzcyB0aGFuIGRldmljZS13aWR0aCkgZWxpbWluYXRlcyBjbGljayBkZWxheS5cblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJRTEwIHdpdGggLW1zLXRvdWNoLWFjdGlvbjogbm9uZSBvciBtYW5pcHVsYXRpb24sIHdoaWNoIGRpc2FibGVzIGRvdWJsZS10YXAtdG8tem9vbSAoaXNzdWUgIzk3KVxuXHRcdGlmIChsYXllci5zdHlsZS5tc1RvdWNoQWN0aW9uID09PSAnbm9uZScgfHwgbGF5ZXIuc3R5bGUudG91Y2hBY3Rpb24gPT09ICdtYW5pcHVsYXRpb24nKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBGaXJlZm94IHZlcnNpb24gLSB6ZXJvIGZvciBvdGhlciBicm93c2Vyc1xuXHRcdGZpcmVmb3hWZXJzaW9uID0gKygvRmlyZWZveFxcLyhbMC05XSspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IFssMF0pWzFdO1xuXG5cdFx0aWYgKGZpcmVmb3hWZXJzaW9uID49IDI3KSB7XG5cdFx0XHQvLyBGaXJlZm94IDI3KyBkb2VzIG5vdCBoYXZlIHRhcCBkZWxheSBpZiB0aGUgY29udGVudCBpcyBub3Qgem9vbWFibGUgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD05MjI4OTZcblxuXHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXHRcdFx0aWYgKG1ldGFWaWV3cG9ydCAmJiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElFMTE6IHByZWZpeGVkIC1tcy10b3VjaC1hY3Rpb24gaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBhbmQgaXQncyByZWNvbWVuZGVkIHRvIHVzZSBub24tcHJlZml4ZWQgdmVyc2lvblxuXHRcdC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS93aW5kb3dzL2FwcHMvSGg3NjczMTMuYXNweFxuXHRcdGlmIChsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ25vbmUnIHx8IGxheWVyLnN0eWxlLnRvdWNoQWN0aW9uID09PSAnbWFuaXB1bGF0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEZhY3RvcnkgbWV0aG9kIGZvciBjcmVhdGluZyBhIEZhc3RDbGljayBvYmplY3Rcblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzXG5cdCAqL1xuXHRGYXN0Q2xpY2suYXR0YWNoID0gZnVuY3Rpb24obGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gbmV3IEZhc3RDbGljayhsYXllciwgb3B0aW9ucyk7XG5cdH07XG5cblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBGYXN0Q2xpY2s7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEZhc3RDbGljay5hdHRhY2g7XG5cdFx0bW9kdWxlLmV4cG9ydHMuRmFzdENsaWNrID0gRmFzdENsaWNrO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5GYXN0Q2xpY2sgPSBGYXN0Q2xpY2s7XG5cdH1cbn0oKSk7XG4iLCJpbXBvcnQgeyBmbHVzaCB9IGZyb20gXCIuL2J1ZmZlclwiO1xuaW1wb3J0IHsgZ2V0IGFzIGdldE9wdGlvbiB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuaW1wb3J0IHtcbiAgICBnZXQgYXMgZ2V0UHJvbXB0LFxuICAgIGhpc3Rvcnlcbn0gZnJvbSBcIi4vcHJvbXB0XCI7XG5cbmltcG9ydCB7IGNvbG9yIH0gZnJvbSBcIi4vc3R5bGVcIjtcblxuaW1wb3J0IHtcbiAgICBhcHBseSBhcyBhcHBseVN0eWxlLFxuICAgIGZvbnRcbn0gZnJvbSBcIi4vc3R5bGVcIjtcblxuLy8gRE9NIGNvbnRhaW5lcnMgZm9yIHdpbmRvd3NcbmNvbnN0IG91dHB1dFdpbmRvd3MgPSBbIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnd2luZG93MCcgKSBdO1xuXG4vLyB0aGUgcGFyZW50IG9mIGFsbCB3aW5kb3dzXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdvdXRwdXQnICk7XG5jb25zdCBjdXJyZW50Q29udGFpbmVycyA9IFsgb3V0cHV0V2luZG93c1sgMCBdIF07XG5jb25zdCB3aW5kb3dEaW1lbnNpb25zID0gW107XG5cbmxldCBjdXJzb3JQb3NpdGlvbiA9IFtdO1xuXG5cbi8qKlxuICogQWRkIGxpbmVzIHRvIHRoZSBvdXRwdXQuXG4gKlxuICogQHBhcmFtIGFtb3VudCBOdW1iZXIgb2YgbGluZXNcbiAqIEBwYXJhbSBjb2x1bW4gTnVtYmVyIG9mIHNwYWNlcyB0aGF0IGFyZSBhZGRlZCB0byB0aGUgbGFzdCBsaW5lXG4gKiBAcGFyYW0gaGF2ZW5XaW5kb3dcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTGluZXMoIGFtb3VudCwgY29sdW1uLCBoYXZlbldpbmRvdyApIHtcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IGFtb3VudDsgKytpICkge1xuICAgICAgICBjb25zdCBuZXdsaW5lRmlsbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG5cbiAgICAgICAgbmV3bGluZUZpbGxlci5jbGFzc05hbWUgPSAnZm9udC1maXhlZC13aWR0aCc7XG4gICAgICAgIG5ld2xpbmVGaWxsZXIuaW5uZXJIVE1MID0gJ1xcbic7XG4gICAgICAgIG91dHB1dFdpbmRvd3NbIGhhdmVuV2luZG93IF0uYXBwZW5kQ2hpbGQoIG5ld2xpbmVGaWxsZXIgKTtcbiAgICB9XG5cbiAgICBpZiggY29sdW1uID4gMCApIHtcbiAgICAgICAgY29uc3Qgc3BhY2VGaWxsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcblxuICAgICAgICBzcGFjZUZpbGxlci5pbm5lckhUTUwgPSBBcnJheSggY29sdW1uICkuam9pbiggXCIgXCIgKTtcbiAgICAgICAgc3BhY2VGaWxsZXIuY2xhc3NOYW1lID0gJ2ZvbnQtZml4ZWQtd2lkdGgnO1xuICAgICAgICBvdXRwdXRXaW5kb3dzWyBoYXZlbldpbmRvdyBdLmFwcGVuZENoaWxkKCBzcGFjZUZpbGxlciApO1xuICAgIH1cblxuICAgIHBvc2l0aW9uLnJlc2V0KCBoYXZlbldpbmRvdyApO1xufVxuXG5cbi8qKlxuICogUHJpbnRzIHRleHQgdG8gYSBzcGVjaWZpYyBzcG90IGluIHRoZSB0ZXh0IHdpbmRvdy5cbiAqXG4gKiBAcGFyYW0gbGluZVxuICogQHBhcmFtIGNvbFxuICogQHBhcmFtIG5ld0NvbnRlbnRcbiAqIEBwYXJhbSBoYXZlbldpbmRvd1xuICovXG5mdW5jdGlvbiByZXBsYWNlUGFydCggbGluZSwgY29sLCBuZXdDb250ZW50LCBoYXZlbldpbmRvdyApIHtcbi8vICAgICAgICBjb25zb2xlLmxvZyggJ1JlcGxhY2luZyBsaW5lJywgbGluZSwgJ2NvbCcsIGNvbCwgJ3dpdGgnLCBuZXdDb250ZW50LmlubmVySFRNTCwgJ2luIHdpbmRvdycsIGhhdmVuV2luZG93ICk7XG4gICAgY29uc3Qgb3V0cHV0ID0gb3V0cHV0V2luZG93c1sgaGF2ZW5XaW5kb3cgXTtcbiAgICBjb25zdCBub2RlcyA9IHRleHROb2Rlc1VuZGVyKCBvdXRwdXQgKTtcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbiAgICBsZXQgY3VycmVudExpbmUgPSAxO1xuICAgIGxldCBjdXJyZW50Q29sID0gMTtcbiAgICBsZXQgc3RhcnRGb3VuZCA9IGZhbHNlO1xuICAgIGxldCBlbmRDb3VudGVyID0gMDtcblxuICAgIC8vIGNoZWNrIGlmIHRoZSBuZXcgY29udGVudCBnb2VzIG9uIHRvcCBvZiBleGlzdGluZyBjb250ZW50IG9yIGRvZXMgdGhlXG4gICAgLy8gY29udGFpbmVyIFwib3ZlcmZsb3dcIiAoaS5lLiBuZXcgbGluZXMgbmVlZCB0byBiZSBjcmVhdGVkIGFzIGEgcGFkZGluZylcbiAgICBjb25zdCBvdmVyZmxvdyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7ICsraSApIHtcbiAgICAgICAgICAgIGxldCB0ZXh0Q29udGVudCA9IG5vZGVzWyBpIF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBpZiggY3VycmVudExpbmUgPT09IGxpbmUgKSB7XG4gICAgICAgICAgICAgICAgZm9yKCBsZXQgaiA9IDA7IGogPCB0ZXh0Q29udGVudC5sZW5ndGg7ICsraiApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHN0YXJ0Rm91bmQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZW5kQ291bnRlciA9PT0gbmV3Q29udGVudC50ZXh0Q29udGVudC5sZW5ndGggfHwgdGV4dENvbnRlbnRbIGogXSA9PT0gJ1xcbicgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2V0RW5kKCBub2Rlc1sgaSBdLCBqICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIGN1cnJlbnRDb2wgPT09IGNvbCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KCBub2Rlc1sgaSBdLCBqICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBqID09PSB0ZXh0Q29udGVudC5sZW5ndGggLSAxICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZCggbm9kZXNbIGkgXSwgaiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCB0ZXh0Q29udGVudFsgaiBdID09PSAnXFxuJyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCBBcnJheSggY29sIC0gY3VycmVudENvbCArIDEgKS5qb2luKCAnICcgKSArICdcXG4nICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzWyBpIF0udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudC5zdWJzdHIoIDAsIGogKSArICcgJztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzWyBpIF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGZpbGxlciwgbm9kZXNbIGkgXS5uZXh0U2libGluZyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoIGZpbGxlciwgY29sIC0gY3VycmVudENvbCAtIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZCggZmlsbGVyLCBjb2wgLSBjdXJyZW50Q29sIC0gMSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKCB0ZXh0Q29udGVudC5pbmRleE9mKCAnXFxuJyApID4gLTEgKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkoKTtcblxuICAgIGlmKCBvdmVyZmxvdyApIHtcbiAgICAgICAgY3JlYXRlTGluZXMoIGN1cnNvclBvc2l0aW9uWyBoYXZlbldpbmRvdyBdLmxpbmUgLSBjdXJyZW50TGluZSwgY29sLCBoYXZlbldpbmRvdyApO1xuICAgICAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoIG5ld0NvbnRlbnQgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCBuZXdDb250ZW50LnRleHRDb250ZW50LmluZGV4T2YoICdcXG4nICkgPiAtMSApIHtcbiAgICAgICAgbmV3Q29udGVudC50ZXh0Q29udGVudCA9IG5ld0NvbnRlbnQudGV4dENvbnRlbnQucmVwbGFjZSggJ1xcbicsICcnICk7XG4gICAgICAgIGN1cnNvclBvc2l0aW9uWyBoYXZlbldpbmRvdyBdLmxpbmUrKztcbiAgICAgICAgY3Vyc29yUG9zaXRpb25bIGhhdmVuV2luZG93IF0uY29sID0gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGN1cnNvclBvc2l0aW9uWyBoYXZlbldpbmRvdyBdLmNvbCArPSBuZXdDb250ZW50LnRleHRDb250ZW50Lmxlbmd0aDtcbiAgICB9XG5cbiAgICByYW5nZS5kZWxldGVDb250ZW50cygpO1xuICAgIHJhbmdlLmluc2VydE5vZGUoIG5ld0NvbnRlbnQgKTtcblxuICAgIGlmKCAhbmV3Q29udGVudC5uZXh0U2libGluZyApIHtcbiAgICAgICAgY3Vyc29yUG9zaXRpb25bIGhhdmVuV2luZG93IF0ubGluZSA9IG51bGw7XG4gICAgICAgIGN1cnNvclBvc2l0aW9uWyBoYXZlbldpbmRvdyBdLmNvbCA9IG51bGw7XG4gICAgfVxufVxuXG5cbi8qKlxuICogR2V0IGFsbCB0ZXh0IG5vZGVzIGNvbnRhaW5lZCBieSBhIERPTSBub2RlXG4gKlxuICogRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMDczMDc3N1xuICpcbiAqIEBwYXJhbSBub2RlXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHRleHROb2Rlc1VuZGVyKCBub2RlICkge1xuICAgIGxldCBhbGwgPSBbXTtcblxuICAgIGZvciggbm9kZSA9IG5vZGUuZmlyc3RDaGlsZDsgbm9kZTsgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmcgKSB7XG4gICAgICAgIGlmKCBub2RlLm5vZGVUeXBlID09PSAzICkge1xuICAgICAgICAgICAgYWxsLnB1c2goIG5vZGUgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFsbCA9IGFsbC5jb25jYXQoIHRleHROb2Rlc1VuZGVyKCBub2RlICkgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWxsO1xufVxuXG5cbi8qKlxuICogQXBwZW5kIGNvbnRlbnQgdG8gYSB3aW5kb3cuXG4gKlxuICogQHBhcmFtIGNvbnRlbnRcbiAqIEBwYXJhbSB0YXJnZXRXaW5kb3dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZCggY29udGVudCwgdGFyZ2V0V2luZG93ICkge1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcblxuICAgIGlmKCAhY3Vyc29yUG9zaXRpb25bIHRhcmdldFdpbmRvdyBdICkge1xuICAgICAgICBjdXJzb3JQb3NpdGlvblsgdGFyZ2V0V2luZG93IF0gPSB7XG4gICAgICAgICAgICBjb2w6IG51bGwsXG4gICAgICAgICAgICBsaW5lOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXBwbHlTdHlsZSggdGV4dENvbnRhaW5lciwgdGFyZ2V0V2luZG93ICk7XG4gICAgdGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIC8vIGNvbnNvbGUubG9nKCBjb250ZW50LCBjb250ZW50Lmxlbmd0aCApO1xuXG4gICAgaWYoIGN1cnNvclBvc2l0aW9uWyB0YXJnZXRXaW5kb3cgXS5jb2wgIT09IG51bGwgJiYgY3Vyc29yUG9zaXRpb25bIHRhcmdldFdpbmRvdyBdLmxpbmUgIT09IG51bGwgKSB7XG4gICAgICAgIHJlcGxhY2VQYXJ0KCBjdXJzb3JQb3NpdGlvblsgdGFyZ2V0V2luZG93IF0ubGluZSwgY3Vyc29yUG9zaXRpb25bIHRhcmdldFdpbmRvdyBdLmNvbCwgdGV4dENvbnRhaW5lciwgdGFyZ2V0V2luZG93ICk7XG4gICAgfVxuICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgb3V0cHV0V2luZG93c1sgdGFyZ2V0V2luZG93IF0uYXBwZW5kQ2hpbGQoIHRleHRDb250YWluZXIgKTtcbiAgICAgICAgY3VycmVudENvbnRhaW5lcnNbIHRhcmdldFdpbmRvdyBdLmFwcGVuZENoaWxkKCB0ZXh0Q29udGFpbmVyICk7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIENsZWFycyBhbiBvdXRwdXQgd2luZG93LlxuICpcbiAqIEBwYXJhbSB0YXJnZXRXaW5kb3dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKCB0YXJnZXRXaW5kb3cgKSB7XG4gICAgaWYoIHRhcmdldFdpbmRvdyA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICBmbHVzaCggMCApO1xuICAgICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoIG91dHB1dFdpbmRvd3NbIDAgXSApO1xuICAgICAgICBhcHBseVN0eWxlKCBvdXRwdXRXaW5kb3dzWyAwIF0sIDAgKTtcbiAgICAgICAgYXBwbHlTdHlsZSggZG9jdW1lbnQuYm9keSwgMCApO1xuICAgICAgICBwb3NpdGlvbi5yZXNldCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYoICFvdXRwdXRXaW5kb3dzWyB0YXJnZXRXaW5kb3cgXSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4vLyBjb25zb2xlLmxvZyggJ2NsZWFyIHdpbmRvdycsIHRhcmdldFdpbmRvdyApO1xuICAgICAgICBmbHVzaCggdGFyZ2V0V2luZG93ICk7XG4gICAgICAgIG91dHB1dFdpbmRvd3NbIHRhcmdldFdpbmRvdyBdLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGFwcGx5U3R5bGUoIG91dHB1dFdpbmRvd3NbIHRhcmdldFdpbmRvdyBdLCB0YXJnZXRXaW5kb3cgKTtcblxuICAgICAgICAvLyB3aGVuIGNsZWFyaW5nIHRoZSBtYWluIHdpbmRvdywgc2V0IHRoZSBlbnRpcmUgcGFnZSdzIHN0eWxlXG4gICAgICAgIGlmKCB0YXJnZXRXaW5kb3cgPT09IDAgKSB7XG4gICAgICAgICAgICBhcHBseVN0eWxlKCBkb2N1bWVudC5ib2R5LCAwICk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbi5yZXNldCggdGFyZ2V0V2luZG93ICk7XG4gICAgfVxuXG4gICAgLy8gZG9uJ3Qgc2Nyb2xsIGF1dG9tYXRpY2FsbHkgcmlnaHQgYWZ0ZXIgY2xlYXJpbmcgdGhlIG1haW4gd2luZG93XG4gICAgaWYoIHRhcmdldFdpbmRvdyA8IDEgKSB7XG4gICAgICAgIC8vIGh1Z291aS5kb1Njcm9sbCA9IGZhbHNlO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgd2luZG93IChIdWdvIG9ubHkpLlxuICpcbiAqIEBwYXJhbSBvdXRwdXRXaW5kb3dcbiAqIEBwYXJhbSBsZWZ0XG4gKiBAcGFyYW0gdG9wXG4gKiBAcGFyYW0gcmlnaHRcbiAqIEBwYXJhbSBib3R0b21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSggb3V0cHV0V2luZG93LCBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gKSB7XG4vLyAgICAgICAgY29uc29sZS5sb2coICdjcmVhdGluZyB3aW5kb3cnLCBvdXRwdXRXaW5kb3cgKyAnOiAgbGVmdCcsIGxlZnQsICd0b3AnLCB0b3AsICdyaWdodCcsIHJpZ2h0LCAnYm90dG9tJywgYm90dG9tICk7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IG1lYXN1cmVEaW1lbnNpb25zKCk7XG4gICAgY29uc3QgY2hhckhlaWdodCA9IGRpbWVuc2lvbnMuY2hhci5oZWlnaHQ7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGdldCggMCApLnBhcmVudE5vZGU7XG5cbiAgICBsZXQgbmV3V2luZG93O1xuXG4gICAgd2luZG93RGltZW5zaW9uc1sgb3V0cHV0V2luZG93IF0gPSB7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgfTtcblxuICAgIGlmKCAhZ2V0T3B0aW9uKCAnd2luZG93aW5nJyApICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gdGhlIG1haW4gd2luZG93IG9ubHkgY2hhbmdlcyBzaXplXG4gICAgaWYoIG91dHB1dFdpbmRvdyA9PT0gMCApIHtcbi8vICAgICAgICAgICAgICAgIG91dHB1dFdpbmRvd1swXS5zdHlsZS5wYWRkaW5nTGVmdCA9ICggbGVmdCAtIDEgKSArICdweCc7XG4gICAgICAgIGdldCggMCApLnN0eWxlLnBhZGRpbmdUb3AgPSAoKHRvcCAtIDEpICogZGltZW5zaW9ucy5jaGFyLmhlaWdodCkgKyAncHgnO1xuLy8gICAgICAgICAgICAgICAgb3V0cHV0V2luZG93WzBdLnN0eWxlLndpZHRoID0gKCAoIHJpZ2h0ICsgMSApICogZGltZW5zaW9ucy5jaGFyLndpZHRoICkgKyAncHgnO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIGdldCggb3V0cHV0V2luZG93ICkgKSB7XG4gICAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQoIGdldCggb3V0cHV0V2luZG93ICkgKTtcbiAgICB9XG5cbiAgICBuZXdXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuICAgIG5ld1dpbmRvdy5pZCA9ICd3aW5kb3cnICsgb3V0cHV0V2luZG93O1xuICAgIG5ld1dpbmRvdy5jbGFzc05hbWUgPSAnaGF2ZW53aW5kb3cgZm9udC1maXhlZC13aWR0aCc7XG4gICAgbmV3V2luZG93LnN0eWxlLmhlaWdodCA9IGNoYXJIZWlnaHQgKiAoYm90dG9tIC0gdG9wICsgMSkgKyAncHgnO1xuICAgIG5ld1dpbmRvdy5zdHlsZS50b3AgPSAoKHRvcCAtIDEpICogY2hhckhlaWdodCkgKyAncHgnO1xuICAgIG5ld1dpbmRvdy5zdHlsZS5tYXJnaW5MZWZ0ID0gKGxlZnQgLSAxKSArICdweCc7XG4gICAgbmV3V2luZG93LnN0eWxlLndpZHRoID0gKChyaWdodCAtIGxlZnQgKyAyKSAqIGRpbWVuc2lvbnMuY2hhci53aWR0aCkgKyAncHgnO1xuXG4gICAgb3V0cHV0V2luZG93c1sgb3V0cHV0V2luZG93IF0gPSBuZXdXaW5kb3c7XG4gICAgY3VycmVudENvbnRhaW5lcnNbIG91dHB1dFdpbmRvdyBdID0gbmV3V2luZG93O1xuICAgIGNvbnRhaW5lci5hcHBlbmQoIG5ld1dpbmRvdywgbWFpbkNvbnRhaW5lciApO1xufTtcblxuXG4vKipcbiAqIE91dHB1dCBjb250YWluZXJzIGluc2lkZSB0aGUgd2luZG93cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICBhcHBlbmQ6IGZ1bmN0aW9uKCBjb250YWluZXIsIHRhcmdldCApIHtcbiAgICAgICAgaWYoIHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInICkge1xuICAgICAgICAgICAgb3V0cHV0V2luZG93c1sgdGFyZ2V0IF0uYXBwZW5kQ2hpbGQoIGNvbnRhaW5lciApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKCBjb250YWluZXIgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uKCB0YXJnZXRXaW5kb3cgKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50Q29udGFpbmVyc1sgdGFyZ2V0V2luZG93IF07XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24oIG5ld0NvbnRhaW5lciwgdGFyZ2V0V2luZG93ICkge1xuICAgICAgICBjdXJyZW50Q29udGFpbmVyc1sgdGFyZ2V0V2luZG93IF0gPSBuZXdDb250YWluZXI7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIG91dHB1dCB3aW5kb3cgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0V2luZG93XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldCggdGFyZ2V0V2luZG93ICkge1xuICAgIHJldHVybiBvdXRwdXRXaW5kb3dzWyB0YXJnZXRXaW5kb3cgXTtcbn1cblxuXG4vKipcbiAqIEdldCBhbGwgZGF0YSByZXF1aXJlZCB0byBsYXRlciByZWNvbnN0cnVjdCB0aGUgVUkgc3RhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVSVN0YXRlKCkge1xuICAgIGNvbnN0IHdpbmRvd0NvbnRlbnRzID0gW107XG4gICAgY29uc3QgcHJvbXB0RWxlbSA9IGdldFByb21wdCgpO1xuICAgIGNvbnN0IHByb21wdFBhcmVudCA9IHByb21wdEVsZW0ucGFyZW50Tm9kZTtcblxuICAgIC8vIHB1dCBwcm9tcHQgYXdheSBkdXJpbmcgdGhlIHNhdmVcbiAgICBpZiggcHJvbXB0UGFyZW50ICkge1xuICAgICAgICBwcm9tcHRQYXJlbnQucmVtb3ZlQ2hpbGQoIHByb21wdEVsZW0gKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgdGhlID5cbiAgICBsZXQgbGFzdENoaWxkID0gb3V0cHV0V2luZG93c1sgMCBdLmxhc3RDaGlsZDtcbiAgICBvdXRwdXRXaW5kb3dzWyAwIF0ucmVtb3ZlQ2hpbGQoIGxhc3RDaGlsZCApO1xuXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBvdXRwdXRXaW5kb3dzLmxlbmd0aDsgKytpICkge1xuICAgICAgICB3aW5kb3dDb250ZW50c1sgaSBdID0gb3V0cHV0V2luZG93c1sgaSBdLmlubmVySFRNTDtcbiAgICB9XG5cbiAgICAvLyBwdXQgYmFjayB3aGF0IHdhcyByZW1vdmVkXG4gICAgb3V0cHV0V2luZG93c1sgMCBdLmFwcGVuZENoaWxkKCBsYXN0Q2hpbGQgKTtcblxuICAgIGlmKCBwcm9tcHRQYXJlbnQgKSB7XG4gICAgICAgIHByb21wdFBhcmVudC5hcHBlbmRDaGlsZCggcHJvbXB0RWxlbSApO1xuICAgIH1cblxuICAgIC8vIHRoaXMgc2hvdWxkIGJlIGRvbmUgYmV0dGVyLCBidXQgcmVtb3ZlIHRoZSBsYXN0IGxpbmUgYnJlYWtcbiAgICAvLyBiZWNhdXNlIHJlc3RvcmluZyBhZGRzIG9uZSBiYWNrIGFnYWluXG4gICAgY29uc3QgbGFzdExiciA9IHdpbmRvd0NvbnRlbnRzWyAwIF0ubGFzdEluZGV4T2YoICdcXG4nICk7XG4gICAgd2luZG93Q29udGVudHNbIDAgXSA9IHdpbmRvd0NvbnRlbnRzWyAwIF0uc3Vic3RyaW5nKCAwLCBsYXN0TGJyICkgKyB3aW5kb3dDb250ZW50c1sgMCBdLnN1YnN0cmluZyggbGFzdExiciArIDEgKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNtZEhpc3Rvcnk6IGhpc3RvcnkuZ2V0KCksXG4gICAgICAgIGN1cnJlbnRDb2xvcnM6IGNvbG9yLmdldCgpLFxuICAgICAgICBmb250OiBmb250LmdldCgpLFxuICAgICAgICBwb3NpdGlvbjogY3Vyc29yUG9zaXRpb24sXG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC50aXRsZSxcbiAgICAgICAgd2luZG93RGltZW5zaW9uczogd2luZG93RGltZW5zaW9ucyxcbiAgICAgICAgd2luZG93Q29udGVudHM6IHdpbmRvd0NvbnRlbnRzXG4gICAgfTtcbn1cblxuXG4vKipcbiAqIFdoZW4gdGhlIHdpbmRvdyBzaXplIGNoYW5nZXMsIG1lYXN1cmUgdGhlIHdpbmRvdyB3aWR0aCBpbiBjaGFyYWN0ZXJzIChIdWdvIG9ubHkpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlRGltZW5zaW9ucygpIHtcbiAgICBjb25zdCBvdXRwdXRDb250YWluZXIgPSBnZXQoIDAgKS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB7XG4gICAgICAgICAgICB3aW5kb3c6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogcGFyc2VJbnQoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBvdXRwdXRDb250YWluZXIgKS53aWR0aCwgMTAgKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluZToge30sXG4gICAgICAgICAgICBjaGFyOiB7fVxuICAgICAgICB9O1xuICAgIGNvbnN0IG1lYXN1cmVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XG4gICAgY29uc3Qgb3V0cHV0RGltZW5zaW9ucyA9IGRpbWVuc2lvbnMud2luZG93O1xuXG4gICAgbGV0IG1lYXN1cmVFbGVtSGVpZ2h0O1xuXG4gICAgbWVhc3VyZUVsZW0uaW5uZXJIVE1MID0gJzAwMDAwPGJyPjAwMDAwPGJyPjAwMDAwJztcbiAgICBtZWFzdXJlRWxlbS5jbGFzc05hbWUgPSAnZm9udC1maXhlZC13aWR0aCc7XG4gICAgbWVhc3VyZUVsZW0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuXG4gICAgb3V0cHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKCBtZWFzdXJlRWxlbSApO1xuXG4gICAgZGltZW5zaW9ucy5jaGFyLndpZHRoID0gbWVhc3VyZUVsZW0ub2Zmc2V0V2lkdGggLyA1O1xuICAgIGRpbWVuc2lvbnMubGluZS53aWR0aCA9IE1hdGguZmxvb3IoICggb3V0cHV0RGltZW5zaW9ucy53aWR0aCAtIDEgKSAvIGRpbWVuc2lvbnMuY2hhci53aWR0aCApO1xuXG4gICAgbWVhc3VyZUVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbWVhc3VyZUVsZW1IZWlnaHQgPSBtZWFzdXJlRWxlbS5jbGllbnRIZWlnaHQ7XG4gICAgbWVhc3VyZUVsZW0uaW5uZXJIVE1MICs9ICc8YnI+MDAwMDA8YnI+MDAwMDAnO1xuICAgIGRpbWVuc2lvbnMuY2hhci5oZWlnaHQgPSAobWVhc3VyZUVsZW0uY2xpZW50SGVpZ2h0IC0gbWVhc3VyZUVsZW1IZWlnaHQpIC8gMiArIDM7XG4gICAgZGltZW5zaW9ucy5saW5lLmhlaWdodCA9IE1hdGguZmxvb3IoIG91dHB1dERpbWVuc2lvbnMuaGVpZ2h0IC8gZGltZW5zaW9ucy5jaGFyLmhlaWdodCApO1xuXG4gICAgbWVhc3VyZUVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggbWVhc3VyZUVsZW0gKTtcblxuICAgIHJldHVybiBkaW1lbnNpb25zO1xufVxuXG5cbi8qKlxuICogU2V0IHRoZSBjdXJzb3IgcG9zaXRpb24gaW5zaWRlIHRoZSB0YXJnZXQgd2luZG93LiBIdWdvIG9ubHkuXG4gKi9cbmV4cG9ydCBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICByZXNldDogZnVuY3Rpb24oIHRhcmdldFdpbmRvdyApIHtcbiAgICAgICAgLy8gaWYgbm8gd2luZG93IHNwZWNpZmllZCwgcmVzZXQgYWxsIHBvc2l0aW9uc1xuICAgICAgICBpZiggdGFyZ2V0V2luZG93ID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBjdXJzb3JQb3NpdGlvbiA9IFt7XG4gICAgICAgICAgICAgICAgY29sOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpbmU6IG51bGxcbiAgICAgICAgICAgIH1dO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb24uc2V0KCBudWxsLCBudWxsLCB0YXJnZXRXaW5kb3cgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZXN0b3JlOiBmdW5jdGlvbiggb2xkU3RhdGUgKSB7XG4gICAgICAgIGN1cnNvclBvc2l0aW9uID0gb2xkU3RhdGU7XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24oIGNvbCwgbGluZSwgaGF2ZW5XaW5kb3cgKSB7XG4gICAgICAgIGlmKCAhY3Vyc29yUG9zaXRpb25bIGhhdmVuV2luZG93IF0gKSB7XG4gICAgICAgICAgICBjdXJzb3JQb3NpdGlvblsgaGF2ZW5XaW5kb3cgXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgY3Vyc29yUG9zaXRpb25bIGhhdmVuV2luZG93IF0uY29sID0gY29sO1xuICAgICAgICBjdXJzb3JQb3NpdGlvblsgaGF2ZW5XaW5kb3cgXS5saW5lID0gbGluZTtcbiAgICB9XG59O1xuXG5cbi8qKlxuICogU2V0IHRoZSB3aW5kb3cgdGl0bGVcbiAqXG4gKiBAcGFyYW0gdGl0bGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFRpdGxlKCB0aXRsZSApIHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xufSIsImltcG9ydCB7YXBwZW5kIGFzIGFwcGVuZFRvQnVmZmVyfSBmcm9tIFwiLi9oYXZlbi9idWZmZXJcIjtcbmltcG9ydCB7c3RhcnR9IGZyb20gXCIuL2hhdmVuL2hhdmVuXCI7XG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwiLi9oYXZlbi9vcHRpb25zXCI7XG5cbmltcG9ydCB7XG4gICAgZ2V0VGV4dFdhc1ByaW50ZWQsXG4gICAgc2V0TW9kZVxufSBmcm9tIFwiLi9oYXZlbi9pbnB1dFwiO1xuXG5pbXBvcnQge1xuICAgIGdldCBhcyBnZXRPcHRpb24sXG4gICAgZ2V0UGFyYW1ldGVyLFxuICAgIHNldCBhcyBzZXRPcHRpb25cbn0gZnJvbSBcIi4vaGF2ZW4vb3B0aW9uc1wiO1xuXG5pbXBvcnQge1xuICAgIGF1dG9zYXZlLFxuICAgIHJlc3RvcmVVSSBhcyByZXN0b3JlSGF2ZW5VSVxufSBmcm9tIFwiLi9oYXZlbi9zdGF0ZVwiO1xuXG5pbXBvcnQge1xuICAgIGNvbG9yIGFzIGNvbG9ycyxcbiAgICBzZXQgYXMgc2V0U3R5bGVcbn0gZnJvbSBcIi4vaGF2ZW4vc3R5bGVcIjtcblxuaW1wb3J0IHtcbiAgICBjbGVhciBhcyBjbGVhcldpbmRvdyxcbiAgICBtZWFzdXJlRGltZW5zaW9ucyxcbiAgICBwb3NpdGlvbiBhcyB3aW5kb3dQb3NpdGlvbixcbiAgICBzZXRUaXRsZSBhcyBzZXRXaW5kb3dUaXRsZVxufSBmcm9tIFwiLi9oYXZlbi93aW5kb3dcIjtcblxuaW1wb3J0ICogYXMgX29wY29kZXMgZnJvbSBcIi4vb3Bjb2Rlc1wiO1xuXG5leHBvcnQgY29uc3Qgb3Bjb2RlcyA9IF9vcGNvZGVzO1xuXG5cbi8qKlxuICogQ2xlYXIgdGFyZ2V0IHdpbmRvdywgb3IgaWYgb21pdHRlZCwgdGhlIGVudGlyZSBzY3JlZW4uXG4gKlxuICogQHBhcmFtIGh1Z29XaW5kb3dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKCBodWdvV2luZG93ICkge1xuICAgIGNsZWFyV2luZG93KCBodWdvV2luZG93ICk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICAgIC8qKlxuICAgICAqIFNldCBjb2xvcnMgaW4gd2luZG93c1xuICAgICAqXG4gICAgICogQHBhcmFtIHdoaWNoXG4gICAgICogQHBhcmFtIG5ld0NvbG9yXG4gICAgICogQHBhcmFtIGh1Z29XaW5kb3dcbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uKCB3aGljaCwgbmV3Q29sb3IsIGh1Z29XaW5kb3cgKSB7XG4gICAgICAgIGNvbG9ycy5zZXQoIHdoaWNoLCBuZXdDb2xvciwgaHVnb1dpbmRvdyApO1xuICAgIH1cbn07XG5cblxuZXhwb3J0IGNvbnN0IGZvbnQgPSB7XG4gICAgLyoqXG4gICAgICogU2V0IGZvbnQgc3R5bGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZlxuICAgICAqIEBwYXJhbSBodWdvV2luZG93XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiggZiwgaHVnb1dpbmRvdyApIHtcbiAgICAgICAgc2V0U3R5bGUoIFwiYm9sZFwiLCAhIShmICYgMSksIGh1Z29XaW5kb3cgKTtcbiAgICAgICAgc2V0U3R5bGUoIFwiaXRhbGljXCIsICEhKGYgJiAyKSwgaHVnb1dpbmRvdyApO1xuICAgICAgICBzZXRTdHlsZSggXCJ1bmRlcmxpbmVcIiwgISEoZiAmIDQpLCBodWdvV2luZG93ICk7XG4gICAgICAgIHNldFN0eWxlKCBcInByb3BvcnRpb25hbFwiLCAhIShmICYgOCksIGh1Z29XaW5kb3cgKTtcbiAgICAgICAgc2V0U3R5bGUoIFwib3JpZ2luYWxcIiwgZiwgaHVnb1dpbmRvdyApO1xuXG4gICAgICAgIC8vIHNldFN0eWxlKCBmbHVzaGVkVGV4dCwgaHVnb1dpbmRvdyApO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBDYWxsZWQgYnkgdGhlIGVuZ2luZSB3aGVuIHRoZSBnYW1lIGhhcyBlbmRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdhbWVFbmRlZCgpIHtcbiAgICAvLyBkZWxldGUgdGhlIGF1dG9zYXZlIGZpbGVcbiAgICBpZiggZ2V0T3B0aW9uKCAnYXV0b3NhdmUnICkgKSB7XG4gICAgICAgIGF1dG9zYXZlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIFJlZGlyZWN0IHRvIGFuIGV4aXQgVVJMIHdoZW4gdGhlIGdhbWUgZW5kcy5cbiAgICAvLyBBIGZhdGFsIGVycm9yIHNob3VsZCBibG9jayB0aGUgcmVkaXJlY3Rpb24uXG4gICAgLy8gQXMgYSBjcnVkZSBjaGVjayBmb3Igd2hldGhlciBhbiBlcnJvciB3YXMgdGhyb3duLFxuICAgIC8vIGNoZWNrIGlmIHRoZSBlcnJvciBtZXNzYWdlIGRpdiBpcyBwcmVzZW50LlxuICAgIGlmKCBnZXRPcHRpb24oICdleGl0X3VybCcgKSAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdmYXRhbC1lcnJvcicgKSApIHtcbiAgICAgICAgLy8gaWYgYW55IHRleHQgaXMgcHJpbnRlZCBhZnRlciBwcmV2aW91cyBpbnB1dCxcbiAgICAgICAgLy8gd2FpdCBmb3Iga2V5cHJlc3MvY2xpY2sgYmVmb3JlIHJlZGlyZWN0aW5nXG4gICAgICAgIGlmKCBnZXRUZXh0V2FzUHJpbnRlZCgpICkge1xuICAgICAgICAgICAgc2V0TW9kZSggJ2VuZGdhbWUnICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBnZXRPcHRpb24oICdleGl0X3VybCcgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIEluaXRpYWxpemUgSHVnb0pTIG1ldGhvZHMgYW5kIHN0YXJ0IEhhdmVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IHJlYWR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN0YXJ0KCB7XG4gICAgICAgICAgICAvLyBIdWdvIGVuZ2luZSBkZWNpZGVzIHRleHQgYW5kIGJhY2tncm91bmQgY29sb3JzXG4gICAgICAgICAgICBlbmdpbmVDb2xvcnM6IHRydWUsXG5cbiAgICAgICAgICAgIC8vIHRoZSBIdWdvIGVuZ2luZSB3aWxsIGhhbmRsZSBwcmludGluZyB0aGUgcHJvbXB0LFxuICAgICAgICAgICAgLy8gYXMgb3Bwb3NlZCB0byBWb3JwbGUgdGhhdCB1c2VzIGEgY3VzdG9tIHByb21wdFxuICAgICAgICAgICAgZW5naW5lUHJvbXB0OiB0cnVlLFxuXG4gICAgICAgICAgICAvLyBsZXQgdGhlIEh1Z28gZW5naW5lIHNldCB0aGUgZm9udCBmYW1pbHlcbiAgICAgICAgICAgIC8vIChmaXhlZCB3aWR0aCBvciBwcm9wb3J0aW9uYWwpXG4gICAgICAgICAgICBlbmdpbmVGb250RmFtaWx5OiB0cnVlLFxuXG4gICAgICAgICAgICAvLyB1c2VyLXByb3ZpZGVkIG9wdGlvbnNcbiAgICAgICAgICAgIG9wdGlvbnM6IGh1Z29qc19vcHRpb25zLFxuXG4gICAgICAgICAgICAvLyBubyBVbmljb2RlIHN1cHBvcnRcbiAgICAgICAgICAgIHVuaWNvZGU6IGZhbHNlLFxuXG4gICAgICAgICAgICAvLyB0aGUgbmFtZSBvZiB0aGUgc3RvcnkgZmlsZSBpbiB0aGUgdmlydHVhbCBmaWxlc3lzdGVtXG4gICAgICAgICAgICB2aXJ0dWFsU3RvcnlmaWxlOiAnZ2FtZS5oZXgnXG4gICAgICAgIH0gKTtcblxuICAgICAgICBvcGNvZGVzLmluaXQoKTtcbiAgICB9O1xuXG4gICAgLy8gbGV0IHRoZSB1c2VyIHVwbG9hZCBhIGdhbWUgZmlsZSB1bmxlc3Mgb25lIGlzIGFscmVhZHkgc3VwcGxpZWRcbiAgICAvLyBhbmQgaXQncyBub3QgYmVlbiBleHBsaWNpdGx5IGRpc2FsbG93ZWRcbiAgICBpZiggaHVnb2pzX29wdGlvbnMuYWxsb3dfdXBsb2FkICYmICFodWdvanNfb3B0aW9ucy5sb2NrX3N0b3J5ICYmICFnZXRQYXJhbWV0ZXIoICdzdG9yeScgKSApIHtcbiAgICAgICAgY29uc3QgdXBsb2FkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImgyXCIgKTtcbiAgICAgICAgY29uc3QgZmlsZVVwbG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXG4gICAgICAgIHVwbG9hZENvbnRhaW5lci5pZCA9IFwidXBsb2FkQ29udGFpbmVyXCI7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVXBsb2FkIEh1Z28gc3RvcnkgZmlsZSAoLmhleClcIjtcblxuICAgICAgICBmaWxlVXBsb2FkLnR5cGUgPSBcImZpbGVcIjtcbiAgICAgICAgZmlsZVVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCBcImNoYW5nZVwiLCBmdW5jdGlvbiggZSApIHtcbiAgICAgICAgICAgIHNldE9wdGlvbiggJ3VwbG9hZGVkRmlsZScsIHRoaXMuZmlsZXNbIDAgXSApO1xuICAgICAgICAgICAgcmVhZHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsb2FkZXInICkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB1cGxvYWRDb250YWluZXIuYXBwZW5kQ2hpbGQoIGhlYWRlciApO1xuICAgICAgICB1cGxvYWRDb250YWluZXIuYXBwZW5kQ2hpbGQoIGZpbGVVcGxvYWQgKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggdXBsb2FkQ29udGFpbmVyICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZWFkeSgpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiByZW1vdmVMb2FkZXIoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdsb2FkZXInICk7XG5cbiAgICBpZiggbG9hZGVyICkge1xuICAgICAgICBsb2FkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggbG9hZGVyICk7XG4gICAgfVxufVxuXG4vKipcbiAqIFNlbmQgdGhlIGN1cnJlbnQgd2luZG93IGRpbWVuc2lvbnMgYmFjayB0byB0aGUgZW5naW5lLlxuICpcbiAqIENhbGxlZCBieSB0aGUgZW5naW5lIHdoZW4gaXQgbmVlZHMgdG8gaW5pdCB0aGUgZGlzcGxheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRTY3JlZW4oKSB7XG4gICAgcmVtb3ZlTG9hZGVyKCk7XG4gICAgc2VuZFdpbmRvd0RpbWVuc2lvbnMoKTtcbn1cblxuXG4vKipcbiAqIFNldCB0aGUgcHJpbnQgY3Vyc29yIHBvc2l0aW9uLlxuICovXG5leHBvcnQgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgc2V0OiBmdW5jdGlvbiggY29sdW1uLCBsaW5lLCBodWdvV2luZG93ICkge1xuICAgICAgICB3aW5kb3dQb3NpdGlvbi5zZXQoIGNvbHVtbiwgbGluZSwgaHVnb1dpbmRvdyApO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBQcmludCB0ZXh0LlxuICpcbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gaHVnb1dpbmRvd1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnQoIHRleHQsIGh1Z29XaW5kb3cgKSB7XG4gICAgLy8gXFxuIGlzIGEgY2FycmlhZ2UgcmV0dXJuLCBub3QgbmVlZGVkIGluIHRoZSBicm93c2VyIGVudmlyb25tZW50XG4gICAgaWYoIHRleHQgPT09ICdcXG4nICkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXBwZW5kVG9CdWZmZXIoIHRleHQsIGh1Z29XaW5kb3cgKTtcbn1cblxuXG4vKipcbiAqIFJlc2V0IFVJIHN0YXRlIGFmdGVyIHJlc3RvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVVSSgpIHtcbiAgICByZXN0b3JlSGF2ZW5VSSgpO1xufVxuXG5cbi8qKlxuICogU2VuZCB0aGUgd2luZG93IGRpbWVuc2lvbnMgdG8gdGhlIGVuZ2luZSAoSHVnbyBvbmx5KVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZFdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IG1lYXN1cmVEaW1lbnNpb25zKCk7XG5cbiAgICBNb2R1bGUuY2NhbGwoXG4gICAgICAgICdodWdvX3NldF93aW5kb3dfZGltZW5zaW9ucycsXG4gICAgICAgICdudWxsJyxcbiAgICAgICAgWyAnbnVtYmVyJywgJ251bWJlcicsICdudW1iZXInLCAnbnVtYmVyJywgJ251bWJlcicsICdudW1iZXInIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIGRpbWVuc2lvbnMud2luZG93LndpZHRoLFxuICAgICAgICAgICAgZGltZW5zaW9ucy53aW5kb3cuaGVpZ2h0LFxuICAgICAgICAgICAgZGltZW5zaW9ucy5saW5lLndpZHRoLFxuICAgICAgICAgICAgZGltZW5zaW9ucy5saW5lLmhlaWdodCxcbiAgICAgICAgICAgIGRpbWVuc2lvbnMuY2hhci53aWR0aCxcbiAgICAgICAgICAgIGRpbWVuc2lvbnMuY2hhci5oZWlnaHRcbiAgICAgICAgXVxuICAgICk7XG59XG5cblxuLyoqXG4gKiBTZXRzIHRoZSB3aW5kb3cgdGl0bGUuIENhbGxlZCBieSB0aGUgZW5naW5lLlxuICpcbiAqIEBwYXJhbSB0aXRsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0VGl0bGUoIHRpdGxlICkge1xuICAgIHNldFdpbmRvd1RpdGxlKCB0aXRsZSApO1xufVxuXG5cbi8vIFNldCBFbXNjcmlwdGVuJ3MgY29tbWFuZCBsaW5lIGFyZ3VtZW50cyB0aGF0IGxvYWQgdGhlIHN0b3J5IGZpbGVcbndpbmRvdy5Nb2R1bGUuYXJndW1lbnRzID0gWyAnL2dhbWUuaGV4JyBdOyIsImltcG9ydCBcIi4vaGF2ZW4vYm9vdHN0cmFwXCI7XG5pbXBvcnQgKiBhcyB1aSBmcm9tIFwiLi9odWdvXCI7XG5cbmltcG9ydCBcIi4vY3NzL2h1Z28uY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy91aS5jc3NcIjtcblxud2luZG93Lmh1Z291aSA9IHVpOyIsIi8qKlxuICogU3VwcG9ydCBmb3Igbm9uLXN0YW5kYXJkIG9wY29kZXMuXG4gKi9cblxuaW1wb3J0IHsgYWRkQ2FsbGJhY2sgfSBmcm9tIFwiLi9oYXZlbi9hc3NldHNcIjtcbmltcG9ydCB7IGdldCBhcyBnZXRPcHRpb24gfSBmcm9tIFwiLi9oYXZlbi9vcHRpb25zXCI7XG5cbmNvbnN0IE9QQ09ERV9DT05UUk9MX0ZJTEUgPSBcIkhyQ3RsQVBJXCI7XG5jb25zdCBPUENPREVfQ0hFQ0tfRklMRSA9IFwiT3BDaGVja1wiO1xuXG5cbi8qKlxuICogU2F2ZSB0aGUgdmlydHVhbCBmaWxlIHRoYXQgdGVsbHMgdGhlIGdhbWUgZmlsZSB3ZSBzdXBwb3J0IGV4dHJhIG9wY29kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAgIGFkZENhbGxiYWNrKCBmdW5jdGlvbiggZG9uZSApIHtcbiAgICAgICAgRlMuc3luY2ZzKCB0cnVlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKCBnZXRPcHRpb24oICdleHRyYV9vcGNvZGVzJyApICkge1xuICAgICAgICAgICAgICAgIEZTLndyaXRlRmlsZShcbiAgICAgICAgICAgICAgICAgICAgT1BDT0RFX0NIRUNLX0ZJTEUsXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KFsgODksIDQ3IF0pICAgLy8gPT0gMTIxMjFcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgRlMudW5saW5rKCBPUENPREVfQ0hFQ0tfRklMRSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIEZTLnVubGluayggT1BDT0RFX0NPTlRST0xfRklMRSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGUy5zeW5jZnMoIGZhbHNlLCBkb25lICk7XG4gICAgICAgIH0gKTtcbiAgICB9ICk7XG59XG5cbi8qKlxuICogVGhlIGVuZ2luZSBoYXMgd3JpdHRlbiB0byB0aGUgb3Bjb2RlIGZpbGUuIFNlZSB3aGF0J3MgaW4gaXQsXG4gKiBleGVjdXRlIHRoZSBvcGNvZGUsIGFuZCB3cml0ZSB0aGUgcmVzcG9uc2UgKGlmIGFueSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgIGlmKCAhZ2V0T3B0aW9uKCAnZXh0cmFfb3Bjb2RlcycgKSApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9wY29kZURhdGEgPSBGUy5yZWFkRmlsZSggT1BDT0RFX0NPTlRST0xfRklMRSApO1xuICAgIGNvbnN0IHBhcmFtY291bnQgPSBvcGNvZGVEYXRhLmxlbmd0aCAvIDIgLSAxO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gW107XG5cbiAgICBjb25zdCBhZGRSZXNwb25zZSA9IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgcmVzcG9uc2UucHVzaCggdmFsdWUgJSAyNTYgKTtcbiAgICAgICAgcmVzcG9uc2UucHVzaCggdmFsdWUgPj4gOCApO1xuICAgIH07XG5cbiAgICBjb25zdCByZWFkV29yZCA9IGZ1bmN0aW9uKCBpbmRleCApIHtcbiAgICAgICAgcmV0dXJuIG9wY29kZURhdGFbIGluZGV4ICogMiBdICsgb3Bjb2RlRGF0YVsgaW5kZXggKiAyICsgMSBdICogMjU2O1xuICAgIH07XG5cbiAgICBjb25zdCB3cml0ZVJlc3BvbnNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIEZTLndyaXRlRmlsZSggT1BDT0RFX0NPTlRST0xfRklMRSwgbmV3IFVpbnQ4QXJyYXkoIHJlc3BvbnNlICkgKTtcbiAgICB9O1xuXG4gICAgLy8gb2RkIG51bWJlciBvZiBieXRlcyBpbiB0aGUgaW5wdXQsIHNob3VsZCBuZXZlciBoYXBwZW5cbiAgICBpZiggb3Bjb2RlRGF0YS5sZW5ndGggJSAyID09PSAxICkge1xuICAgICAgICBhZGRSZXNwb25zZSggMjAgKTsgIC8vIDIwOiBSRVNVTFRfV1JPTkdfQllURV9DT1VOVFxuICAgICAgICB3cml0ZVJlc3BvbnNlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvcGNvZGVzID0ge1xuICAgICAgICAxOiBmdW5jdGlvbigpIHsgICAgIC8vIElTX09QQ09ERV9BVkFJTEFCTEVcbiAgICAgICAgICAgIGlmKCBvcGNvZGVzWyByZWFkV29yZCggMSApIF0gKSB7XG4gICAgICAgICAgICAgICAgYWRkUmVzcG9uc2UoIDEgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZFJlc3BvbnNlKCAxICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgMjAwOiBmdW5jdGlvbigpIHsgICAvLyBHRVRfT1NcbiAgICAgICAgICAgIGFkZFJlc3BvbnNlKCA2ICk7ICAgLy8gNiA9IEJyb3dzZXJcbiAgICAgICAgfSxcblxuICAgICAgICAzMDA6IGZ1bmN0aW9uKCkgeyAgIC8vIEFCT1JUXG4gICAgICAgICAgICAvLyB0cnkgdG8gY2xvc2UgdGhlIHdpbmRvdyDigJMgd29uJ3Qgd29yayB1bmxlc3MgdGhlIGludGVycHJldGVyXG4gICAgICAgICAgICAvLyB3aW5kb3cgd2FzIHByb2dyYW1tYXRpY2FsbHkgb3BlbmVkIGJ5IGFub3RoZXIgcGFnZVxuICAgICAgICAgICAgd2luZG93LmNsb3NlKCk7XG5cbiAgICAgICAgICAgIC8vIHF1aWNrLWFuZC1kaXJ0eSBhYm9ydCBieSB0aHJvd2luZyBhbiBleGNlcHRpb25cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggJ0Fib3J0IG9wY29kZSBjYWxsZWQnICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgNTAwOiBmdW5jdGlvbigpIHsgICAvLyBPUEVOX1VSTFxuICAgICAgICAgICAgY29uc3QgdXJsID0gTW9kdWxlLmNjYWxsKFxuICAgICAgICAgICAgICAgICdodWdvanNfZ2V0X2RpY3Rpb25hcnlfd29yZCcsXG4gICAgICAgICAgICAgICAgJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgWyAnaW50JyBdLFxuICAgICAgICAgICAgICAgIFsgb3Bjb2RlRGF0YVsgMiBdICsgb3Bjb2RlRGF0YVsgMyBdICogMjU2IF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmKCBjb25maXJtKCAnR2FtZSB3YW50cyB0byBvcGVuIHdlYiBhZGRyZXNzICcgKyB1cmwgKyAnLiBDb250aW51ZT8nICkgKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oIHVybCApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIDgwMDogZnVuY3Rpb24oKSB7ICAgLy8gSVNfTVVTSUNfUExBWUlOR1xuICAgICAgICAgICAgYWRkUmVzcG9uc2UoIDAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICA5MDA6IGZ1bmN0aW9uKCkgeyAgIC8vIElTX1NBTVBMRV9QTEFZSU5HXG4gICAgICAgICAgICBhZGRSZXNwb25zZSggMCApO1xuICAgICAgICB9LFxuXG4gICAgICAgIDEwMDA6IGZ1bmN0aW9uKCkgeyAgLy8gSVNfRkxVSURfTEFZT1VUXG4gICAgICAgICAgICBhZGRSZXNwb25zZSggMSApO1xuICAgICAgICB9LFxuICAgICAgICAvKlxuICAgICAgICAgMTEwMDogZnVuY3Rpb24oKSB7ICAvLyBTRVRfQ09MT1JcbiAgICAgICAgIGh1Z291aS5zZXRDdXN0b21Db2xvciggb3Bjb2RlRGF0YVsgMiBdLCBvcGNvZGVEYXRhWyA0IF0sIG9wY29kZURhdGFbIDYgXSwgb3Bjb2RlRGF0YVsgOCBdICk7XG4gICAgICAgICB9LFxuICAgICAgICAgKi9cbiAgICAgICAgMTMwMDogZnVuY3Rpb24oKSB7ICAvLyBISURFU19DVVJTT1JcbiAgICAgICAgICAgIGFkZFJlc3BvbnNlKCAxICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYWxsIG5vbi16ZXJvIHBhcmFtZXRlciBjb3VudHNcbiAgICBjb25zdCBwYXJhbUNvdW50cyA9IHtcbiAgICAgICAgMTogMSxcbiAgICAgICAgNDAwOiA0LFxuICAgICAgICA1MDA6IDEsXG4gICAgICAgIDYwMDogMSxcbiAgICAgICAgNzAwOiAxLFxuICAgICAgICAxMTAwOiA0LFxuICAgICAgICAxNjAwOiAyXG4gICAgfTtcblxuICAgIGNvbnN0IG9wID0gcmVhZFdvcmQoIDAgKTtcblxuICAgIGlmKCBvcGNvZGVzWyBvcCBdICkge1xuICAgICAgICBjb25zdCByZXF1aXJlZFBhcmFtcyA9IHBhcmFtQ291bnRzWyBvcCBdIHx8IDA7XG5cbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgcGFyYW1ldGVyIGNvdW50IGlzIGNvcnJlY3RcbiAgICAgICAgaWYoIHBhcmFtY291bnQgIT09IHJlcXVpcmVkUGFyYW1zICkge1xuICAgICAgICAgICAgYWRkUmVzcG9uc2UoIDEwICk7XG4gICAgICAgICAgICB3cml0ZVJlc3BvbnNlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBleGVjdXRlIHRoZSBvcGNvZGVcbiAgICAgICAgYWRkUmVzcG9uc2UoIDAgKTsgICAvLyAwOiBSRVNVTFRfT0tcbiAgICAgICAgb3Bjb2Rlc1sgb3AgXSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gdW5rbm93biBvcGNvZGUgb3Igbm8gc3VwcG9ydFxuICAgICAgICBhZGRSZXNwb25zZSggMzAgKTsgIC8vIDMwOiBVTlJFQ09HTklaRURfT1BDT0RFXG4gICAgICAgIGFkZFJlc3BvbnNlKCBvcCApO1xuICAgICAgICBhZGRSZXNwb25zZSggcGFyYW1jb3VudCApO1xuXG4gICAgICAgIGZvciggbGV0IGkgPSAxOyBpIDwgcGFyYW1jb3VudDsgKytpICkge1xuICAgICAgICAgICAgYWRkUmVzcG9uc2UoIHJlYWRXb3JkKCBpICkgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHdyaXRlIHRoZSByZXNwb25zZSB0byB0aGUgY29udHJvbCBmaWxlXG4gICAgd3JpdGVSZXNwb25zZSgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=