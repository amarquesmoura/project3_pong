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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_game_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);

 // create a game instance

var game = new _partials_Game__WEBPACK_IMPORTED_MODULE_1__["default"]("game", 512, 256);

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Imports
var urlEscape = __webpack_require__(4);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(5));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(5) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(6));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(7));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(8) + "#silkscreennormal");

// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: \"Silkscreen Web\";\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___1___ + ")\n      format(\"embedded-opentype\"),\n    url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL___3___ + ") format(\"truetype\"),\n    url(" + ___CSS_LOADER_URL___4___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: \"Silkscreen Web\", monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n.game-wrapper {\n  width: 512px;\n}\n", ""]);



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ }),
/* 9 */
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
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

var	fixUrls = __webpack_require__(10);

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
		var nextSibling = getElement(options.insertAt.before, target);
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

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
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

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

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
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _Paddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _MobilePlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _ComputerPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Create alias for SVG namespace
 // Import Game elements classes






 // Declare the Game class and instantiates its elements

var Game =
/*#__PURE__*/
function () {
  function Game(element, width, height) {
    var _this = this;

    _classCallCheck(this, Game);

    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(element); // instantiate the Board

    this.board = new _Board__WEBPACK_IMPORTED_MODULE_1__["default"](this.width, this.height); // set properties for the paddles

    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10; // check if the player is using a mobile device
    // @source: https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript

    function isMobileDevice() {
      return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1;
    }

    if (isMobileDevice()) {
      this.player1 = new _MobilePlayer__WEBPACK_IMPORTED_MODULE_3__["default"](this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height - this.paddleHeight) / 2);
      this.player2 = new _ComputerPlayer__WEBPACK_IMPORTED_MODULE_4__["default"](this.height, this.paddleWidth, this.paddleHeight, this.width - this.paddleWidth - this.boardGap, (this.height - this.paddleHeight) / 2);
    } else {
      // instantiate the 2 players on desktop
      this.player1 = new _Paddle__WEBPACK_IMPORTED_MODULE_2__["default"](this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height - this.paddleHeight) / 2, _settings__WEBPACK_IMPORTED_MODULE_0__["KEYS"].a, _settings__WEBPACK_IMPORTED_MODULE_0__["KEYS"].z);
      this.player2 = new _Paddle__WEBPACK_IMPORTED_MODULE_2__["default"](this.height, this.paddleWidth, this.paddleHeight, this.width - this.paddleWidth - this.boardGap, (this.height - this.paddleHeight) / 2, _settings__WEBPACK_IMPORTED_MODULE_0__["KEYS"].up, _settings__WEBPACK_IMPORTED_MODULE_0__["KEYS"].down);
    } // set properties for the ball


    this.radius = 8; // instantiate the Ball

    this.ball = new _Ball__WEBPACK_IMPORTED_MODULE_5__["default"](this.radius, this.width, this.height); // instantiate the Score

    this.score1 = new _Score__WEBPACK_IMPORTED_MODULE_6__["default"](this.width / 2 - 22, 20, 30);
    this.score2 = new _Score__WEBPACK_IMPORTED_MODULE_6__["default"](this.width / 2 + 10, 20, 30); // add a function for pausing the game

    document.addEventListener("keydown", function (event) {
      if (event.key === _settings__WEBPACK_IMPORTED_MODULE_0__["KEYS"].spaceBar) {
        _this.pause = !_this.pause;
      }
    });
  } // Declare render function for Game class


  _createClass(Game, [{
    key: "render",
    value: function render() {
      // check if the game is paused
      if (this.pause) {
        return;
      } // empty out game element before re-rendering


      this.gameElement.innerHTML = ""; // declare the svg variable with its atributes

      var svg = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "svg");
      svg.setAttributeNS(null, "width", this.width);
      svg.setAttributeNS(null, "height", this.height);
      svg.setAttributeNS(null, "viewBox", "0 0 ".concat(this.width, " ").concat(this.height));
      svg.setAttributeNS(null, "version", "1.1"); // append the SVG element to the DOM

      this.gameElement.appendChild(svg); // render all game elements inside the SVG

      this.board.render(svg);
      this.player1.render(svg);
      this.player2.render(svg);
      this.ball.render(svg, this.player1, this.player2);
      this.score1.render(svg, this.player1.score);
      this.score2.render(svg, this.player2.score);
    }
  }]);

  return Game;
}();



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG_NS", function() { return SVG_NS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
// Set the namespace for svg elements
var SVG_NS = "http://www.w3.org/2000/svg"; // Set the controler keys

var KEYS = {
  a: "a",
  z: "z",
  up: "ArrowUp",
  down: "ArrowDown",
  spaceBar: " "
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Create alias for SVG namespace
 // Declare the Board class

var Board =
/*#__PURE__*/
function () {
  function Board(width, height) {
    _classCallCheck(this, Board);

    this.width = width;
    this.height = height;
  } // Declare render function for Board class


  _createClass(Board, [{
    key: "render",
    value: function render(svg) {
      // declare the Board rectangle variable with its atributes
      var rect = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "rect");
      rect.setAttributeNS(null, "width", this.width);
      rect.setAttributeNS(null, "height", this.height);
      rect.setAttributeNS(null, "fill", "#353535"); // declare the mid-board line variable with its atributes

      var line = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "line");
      line.setAttributeNS(null, "x1", this.width / 2);
      line.setAttributeNS(null, "y1", "0");
      line.setAttributeNS(null, "x2", this.width / 2);
      line.setAttributeNS(null, "y2", this.height);
      line.setAttributeNS(null, "stroke", "#FFF");
      line.setAttributeNS(null, "stroke-width", "3");
      line.setAttributeNS(null, "stroke-dasharray", "20 15"); // append the Board to the SVG

      svg.appendChild(rect);
      svg.appendChild(line);
    }
  }]);

  return Board;
}();



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Paddle; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Create alias for SVG namespace
 // Declare the Paddle class

var Paddle =
/*#__PURE__*/
function () {
  function Paddle(boardHeight, width, height, x, y, upKey, downKey) {
    var _this = this;

    _classCallCheck(this, Paddle);

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0; // add a function for control keys

    document.addEventListener("keydown", function (event) {
      switch (event.key) {
        case upKey:
          _this.up();

          break;

        case downKey:
          _this.down();

          break;
      }
    });
  } // Declare a function for moving up without going beyond board limits


  _createClass(Paddle, [{
    key: "up",
    value: function up() {
      this.y = Math.max(0, this.y - this.speed);
    } // Declare a function for moving down without going beyond board limits

  }, {
    key: "down",
    value: function down() {
      this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
    } // Create an object with Paddle's coordinates

  }, {
    key: "coordinates",
    value: function coordinates(x, y, width, height) {
      var leftX = x;
      var rightX = x + width;
      var topY = y;
      var bottomY = y + height;
      return {
        leftX: leftX,
        rightX: rightX,
        topY: topY,
        bottomY: bottomY
      };
    } // Declare render function for Paddle class

  }, {
    key: "render",
    value: function render(svg) {
      // declare the Paddle rectangle variable with its atributes
      var rect = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "rect");
      rect.setAttributeNS(null, "width", this.width);
      rect.setAttributeNS(null, "height", this.height);
      rect.setAttributeNS(null, "x", this.x);
      rect.setAttributeNS(null, "y", this.y);
      rect.setAttributeNS(null, "fill", "#FFF"); // append the Paddle to the SVG

      svg.appendChild(rect);
    }
  }]);

  return Paddle;
}();



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobilePlayer; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Create alias for SVG namespace
 // Declare the Paddle class

var MobilePlayer =
/*#__PURE__*/
function () {
  function MobilePlayer(boardHeight, width, height, x, y) {
    var _this = this;

    _classCallCheck(this, MobilePlayer);

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.score = 0; // add a function for motion control

    window.addEventListener("deviceorientation", function (event) {
      if (event.gamma > 0) {
        _this.up();
      } else if (event.gamma < 0) {
        _this.down();
      } else {
        return;
      }
    });
  } // Declare a function for moving up without going beyond board limits


  _createClass(MobilePlayer, [{
    key: "up",
    value: function up() {
      this.y = Math.max(0, this.y - this.speed);
    } // Declare a function for moving down without going beyond board limits

  }, {
    key: "down",
    value: function down() {
      this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
    } // Create an object with Paddle's coordinates

  }, {
    key: "coordinates",
    value: function coordinates(x, y, width, height) {
      var leftX = x;
      var rightX = x + width;
      var topY = y;
      var bottomY = y + height;
      return {
        leftX: leftX,
        rightX: rightX,
        topY: topY,
        bottomY: bottomY
      };
    } // Declare render function for Paddle class

  }, {
    key: "render",
    value: function render(svg) {
      // declare the Paddle rectangle variable with its atributes
      var rect = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "rect");
      rect.setAttributeNS(null, "width", this.width);
      rect.setAttributeNS(null, "height", this.height);
      rect.setAttributeNS(null, "x", this.x);
      rect.setAttributeNS(null, "y", this.y);
      rect.setAttributeNS(null, "fill", "#FFF"); // append the Paddle to the SVG

      svg.appendChild(rect);
    }
  }]);

  return MobilePlayer;
}();



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComputerPlayer; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Create alias for SVG namespace
 // Declare the Paddle class

var ComputerPlayer =
/*#__PURE__*/
function () {
  function ComputerPlayer(boardHeight, width, height, x, y) {
    var _this = this;

    _classCallCheck(this, ComputerPlayer);

    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.score = 0; // add a function for motion control

    window.addEventListener("deviceorientation", function (event) {
      if (event.beta > 0) {
        _this.up();
      } else if (event.beta < 0) {
        _this.down();
      } else {
        return;
      }
    });
  } // Declare a function for moving up without going beyond board limits


  _createClass(ComputerPlayer, [{
    key: "up",
    value: function up() {
      this.y = Math.max(0, this.y - this.speed);
    } // Declare a function for moving down without going beyond board limits

  }, {
    key: "down",
    value: function down() {
      this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
    } // Create an object with Paddle's coordinates

  }, {
    key: "coordinates",
    value: function coordinates(x, y, width, height) {
      var leftX = x;
      var rightX = x + width;
      var topY = y;
      var bottomY = y + height;
      return {
        leftX: leftX,
        rightX: rightX,
        topY: topY,
        bottomY: bottomY
      };
    } // Declare render function for Paddle class

  }, {
    key: "render",
    value: function render(svg) {
      // declare the Paddle rectangle variable with its atributes
      var rect = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "rect");
      rect.setAttributeNS(null, "width", this.width);
      rect.setAttributeNS(null, "height", this.height);
      rect.setAttributeNS(null, "x", this.x);
      rect.setAttributeNS(null, "y", this.y);
      rect.setAttributeNS(null, "fill", "#FFF"); // append the Paddle to the SVG

      svg.appendChild(rect);
    }
  }]);

  return ComputerPlayer;
}();



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ball; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Create alias for SVG namespace
 // Declare the Ball class

var Ball =
/*#__PURE__*/
function () {
  function Ball(radius, boardWidth, boardHeight) {
    _classCallCheck(this, Ball);

    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.ping = new Audio("public/sounds/pong-01.wav");
    this.reset();
  } // Declares the Reset function


  _createClass(Ball, [{
    key: "reset",
    value: function reset() {
      // set ball x and y coordinates at the center of the Board
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2; // randomize the new ball direction

      this.vy = 0;

      while (this.vy === 0) {
        this.vy = Math.floor(Math.random() * 10 - 5);
      }

      this.vx = this.direction * (6 - Math.abs(this.vy));
    } // Declares the Wall Collision function

  }, {
    key: "wallCollision",
    value: function wallCollision() {
      //set the min and max coordinates for the Ball
      var hitLeft = this.x - this.radius <= 0;
      var hitRight = this.x + this.radius >= this.boardWidth;
      var hitTop = this.y - this.radius <= 0;
      var hitBottom = this.y + this.radius >= this.boardHeight; //check if the Ball hit the boundaries

      if (hitLeft || hitRight) {
        this.vx = -this.vx;
      } else if (hitTop || hitBottom) {
        this.vy = -this.vy;
      }
    } // Declares the Paddle Collision function

  }, {
    key: "paddleCollinsion",
    value: function paddleCollinsion(player1, player2) {
      if (this.vx > 0) {
        // get player2 coordinates
        var paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height); // deconstruct player object

        var leftX = paddle.leftX,
            topY = paddle.topY,
            bottomY = paddle.bottomY; // detect player2 collision

        if (this.x + this.radius >= leftX && this.y >= topY && this.y <= bottomY) {
          // invert Ball direction
          this.vx = -this.vx; // play a sound

          this.ping.play();
        }
      } else {
        // get player1 coordinates
        var _paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height); // deconstruct player object


        var rightX = _paddle.rightX,
            _topY = _paddle.topY,
            _bottomY = _paddle.bottomY; // detect player1 collision

        if (this.x - this.radius <= rightX && this.y >= _topY && this.y <= _bottomY) {
          // invert Ball direction
          this.vx = -this.vx; // play a sound

          this.ping.play();
        }
      }
    } // Declares the Goal function

  }, {
    key: "goal",
    value: function goal(player) {
      // add to player's score
      player.score++; // put Ball back at the center after a goal

      this.reset();
    } // Declares the render function for Ball class

  }, {
    key: "render",
    value: function render(svg, player1, player2) {
      // add movement vector to Ball's postion
      this.x += this.vx;
      this.y += this.vy; // call collision functions

      this.wallCollision();
      this.paddleCollinsion(player1, player2); // declare the Ball circle variable with its atributes

      var circ = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "circle");
      circ.setAttributeNS(null, "r", this.radius);
      circ.setAttributeNS(null, "cx", this.x);
      circ.setAttributeNS(null, "cy", this.y);
      circ.setAttributeNS(null, "fill", "#FFF"); // append the Ball to the SVG

      svg.appendChild(circ); // declares right and left goal variables

      var rightGoal = this.x + this.radius >= this.boardWidth;
      var leftGoal = this.x - this.radius <= 0; // check if a goal was scored

      if (rightGoal) {
        this.goal(player1); // gives advantage to the scoring player

        this.direction = 1;
      } else if (leftGoal) {
        this.goal(player2); // gives advantage to the scoring player

        this.direction = -1;
      }
    }
  }]);

  return Ball;
}();



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Score; });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Create alias for SVG namespace
 // Declare the Score class

var Score =
/*#__PURE__*/
function () {
  function Score(x, y, size) {
    _classCallCheck(this, Score);

    this.x = x;
    this.y = y;
    this.size = size;
  } // Declare render function for Score class


  _createClass(Score, [{
    key: "render",
    value: function render(svg, score) {
      // declare the Score text variable with its atributes
      var text = document.createElementNS(_settings__WEBPACK_IMPORTED_MODULE_0__["SVG_NS"], "text");
      text.setAttributeNS(null, "font-family", "'Silkscreen Web', monotype");
      text.setAttributeNS(null, "fill", "#FFF");
      text.setAttributeNS(null, "x", this.x);
      text.setAttributeNS(null, "y", this.y);
      text.textContent = score; // append the Score to the SVG

      svg.appendChild(text);
    }
  }]);

  return Score;
}();



/***/ })
/******/ ]);