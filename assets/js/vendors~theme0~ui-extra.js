(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["vendors~theme0~ui-extra"],{

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*!\n * clipboard.js v2.0.10\n * https://clipboardjs.com/\n *\n * Licensed MIT © Zeno Rocha\n */\n(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(this, function() {\nreturn /******/ (function() { // webpackBootstrap\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ 686:\n/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": function() { return /* binding */ clipboard; }\n});\n\n// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js\nvar tiny_emitter = __webpack_require__(279);\nvar tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);\n// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js\nvar listen = __webpack_require__(370);\nvar listen_default = /*#__PURE__*/__webpack_require__.n(listen);\n// EXTERNAL MODULE: ./node_modules/select/src/select.js\nvar src_select = __webpack_require__(817);\nvar select_default = /*#__PURE__*/__webpack_require__.n(src_select);\n;// CONCATENATED MODULE: ./src/common/command.js\n/**\n * Executes a given operation type.\n * @param {String} type\n * @return {Boolean}\n */\nfunction command(type) {\n  try {\n    return document.execCommand(type);\n  } catch (err) {\n    return false;\n  }\n}\n;// CONCATENATED MODULE: ./src/actions/cut.js\n\n\n/**\n * Cut action wrapper.\n * @param {String|HTMLElement} target\n * @return {String}\n */\n\nvar ClipboardActionCut = function ClipboardActionCut(target) {\n  var selectedText = select_default()(target);\n  command('cut');\n  return selectedText;\n};\n\n/* harmony default export */ var actions_cut = (ClipboardActionCut);\n;// CONCATENATED MODULE: ./src/common/create-fake-element.js\n/**\n * Creates a fake textarea element with a value.\n * @param {String} value\n * @return {HTMLElement}\n */\nfunction createFakeElement(value) {\n  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';\n  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS\n\n  fakeElement.style.fontSize = '12pt'; // Reset box model\n\n  fakeElement.style.border = '0';\n  fakeElement.style.padding = '0';\n  fakeElement.style.margin = '0'; // Move element out of screen horizontally\n\n  fakeElement.style.position = 'absolute';\n  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically\n\n  var yPosition = window.pageYOffset || document.documentElement.scrollTop;\n  fakeElement.style.top = \"\".concat(yPosition, \"px\");\n  fakeElement.setAttribute('readonly', '');\n  fakeElement.value = value;\n  return fakeElement;\n}\n;// CONCATENATED MODULE: ./src/actions/copy.js\n\n\n\n/**\n * Copy action wrapper.\n * @param {String|HTMLElement} target\n * @param {Object} options\n * @return {String}\n */\n\nvar ClipboardActionCopy = function ClipboardActionCopy(target) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    container: document.body\n  };\n  var selectedText = '';\n\n  if (typeof target === 'string') {\n    var fakeElement = createFakeElement(target);\n    options.container.appendChild(fakeElement);\n    selectedText = select_default()(fakeElement);\n    command('copy');\n    fakeElement.remove();\n  } else {\n    selectedText = select_default()(target);\n    command('copy');\n  }\n\n  return selectedText;\n};\n\n/* harmony default export */ var actions_copy = (ClipboardActionCopy);\n;// CONCATENATED MODULE: ./src/actions/default.js\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n/**\n * Inner function which performs selection from either `text` or `target`\n * properties and then executes copy or cut operations.\n * @param {Object} options\n */\n\nvar ClipboardActionDefault = function ClipboardActionDefault() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  // Defines base properties passed from constructor.\n  var _options$action = options.action,\n      action = _options$action === void 0 ? 'copy' : _options$action,\n      container = options.container,\n      target = options.target,\n      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.\n\n  if (action !== 'copy' && action !== 'cut') {\n    throw new Error('Invalid \"action\" value, use either \"copy\" or \"cut\"');\n  } // Sets the `target` property using an element that will be have its content copied.\n\n\n  if (target !== undefined) {\n    if (target && _typeof(target) === 'object' && target.nodeType === 1) {\n      if (action === 'copy' && target.hasAttribute('disabled')) {\n        throw new Error('Invalid \"target\" attribute. Please use \"readonly\" instead of \"disabled\" attribute');\n      }\n\n      if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {\n        throw new Error('Invalid \"target\" attribute. You can\\'t cut text from elements with \"readonly\" or \"disabled\" attributes');\n      }\n    } else {\n      throw new Error('Invalid \"target\" value, use a valid Element');\n    }\n  } // Define selection strategy based on `text` property.\n\n\n  if (text) {\n    return actions_copy(text, {\n      container: container\n    });\n  } // Defines which selection strategy based on `target` property.\n\n\n  if (target) {\n    return action === 'cut' ? actions_cut(target) : actions_copy(target, {\n      container: container\n    });\n  }\n};\n\n/* harmony default export */ var actions_default = (ClipboardActionDefault);\n;// CONCATENATED MODULE: ./src/clipboard.js\nfunction clipboard_typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return clipboard_typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n/**\n * Helper function to retrieve attribute value.\n * @param {String} suffix\n * @param {Element} element\n */\n\nfunction getAttributeValue(suffix, element) {\n  var attribute = \"data-clipboard-\".concat(suffix);\n\n  if (!element.hasAttribute(attribute)) {\n    return;\n  }\n\n  return element.getAttribute(attribute);\n}\n/**\n * Base class which takes one or more elements, adds event listeners to them,\n * and instantiates a new `ClipboardAction` on each click.\n */\n\n\nvar Clipboard = /*#__PURE__*/function (_Emitter) {\n  _inherits(Clipboard, _Emitter);\n\n  var _super = _createSuper(Clipboard);\n\n  /**\n   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger\n   * @param {Object} options\n   */\n  function Clipboard(trigger, options) {\n    var _this;\n\n    _classCallCheck(this, Clipboard);\n\n    _this = _super.call(this);\n\n    _this.resolveOptions(options);\n\n    _this.listenClick(trigger);\n\n    return _this;\n  }\n  /**\n   * Defines if attributes would be resolved using internal setter functions\n   * or custom functions that were passed in the constructor.\n   * @param {Object} options\n   */\n\n\n  _createClass(Clipboard, [{\n    key: \"resolveOptions\",\n    value: function resolveOptions() {\n      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;\n      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;\n      this.text = typeof options.text === 'function' ? options.text : this.defaultText;\n      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;\n    }\n    /**\n     * Adds a click event listener to the passed trigger.\n     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger\n     */\n\n  }, {\n    key: \"listenClick\",\n    value: function listenClick(trigger) {\n      var _this2 = this;\n\n      this.listener = listen_default()(trigger, 'click', function (e) {\n        return _this2.onClick(e);\n      });\n    }\n    /**\n     * Defines a new `ClipboardAction` on each click event.\n     * @param {Event} e\n     */\n\n  }, {\n    key: \"onClick\",\n    value: function onClick(e) {\n      var trigger = e.delegateTarget || e.currentTarget;\n      var action = this.action(trigger) || 'copy';\n      var text = actions_default({\n        action: action,\n        container: this.container,\n        target: this.target(trigger),\n        text: this.text(trigger)\n      }); // Fires an event based on the copy operation result.\n\n      this.emit(text ? 'success' : 'error', {\n        action: action,\n        text: text,\n        trigger: trigger,\n        clearSelection: function clearSelection() {\n          if (trigger) {\n            trigger.focus();\n          }\n\n          document.activeElement.blur();\n          window.getSelection().removeAllRanges();\n        }\n      });\n    }\n    /**\n     * Default `action` lookup function.\n     * @param {Element} trigger\n     */\n\n  }, {\n    key: \"defaultAction\",\n    value: function defaultAction(trigger) {\n      return getAttributeValue('action', trigger);\n    }\n    /**\n     * Default `target` lookup function.\n     * @param {Element} trigger\n     */\n\n  }, {\n    key: \"defaultTarget\",\n    value: function defaultTarget(trigger) {\n      var selector = getAttributeValue('target', trigger);\n\n      if (selector) {\n        return document.querySelector(selector);\n      }\n    }\n    /**\n     * Allow fire programmatically a copy action\n     * @param {String|HTMLElement} target\n     * @param {Object} options\n     * @returns Text copied.\n     */\n\n  }, {\n    key: \"defaultText\",\n\n    /**\n     * Default `text` lookup function.\n     * @param {Element} trigger\n     */\n    value: function defaultText(trigger) {\n      return getAttributeValue('text', trigger);\n    }\n    /**\n     * Destroy lifecycle.\n     */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.listener.destroy();\n    }\n  }], [{\n    key: \"copy\",\n    value: function copy(target) {\n      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n        container: document.body\n      };\n      return actions_copy(target, options);\n    }\n    /**\n     * Allow fire programmatically a cut action\n     * @param {String|HTMLElement} target\n     * @returns Text cutted.\n     */\n\n  }, {\n    key: \"cut\",\n    value: function cut(target) {\n      return actions_cut(target);\n    }\n    /**\n     * Returns the support of the given action, or all actions if no action is\n     * given.\n     * @param {String} [action]\n     */\n\n  }, {\n    key: \"isSupported\",\n    value: function isSupported() {\n      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];\n      var actions = typeof action === 'string' ? [action] : action;\n      var support = !!document.queryCommandSupported;\n      actions.forEach(function (action) {\n        support = support && !!document.queryCommandSupported(action);\n      });\n      return support;\n    }\n  }]);\n\n  return Clipboard;\n}((tiny_emitter_default()));\n\n/* harmony default export */ var clipboard = (Clipboard);\n\n/***/ }),\n\n/***/ 828:\n/***/ (function(module) {\n\nvar DOCUMENT_NODE_TYPE = 9;\n\n/**\n * A polyfill for Element.matches()\n */\nif (typeof Element !== 'undefined' && !Element.prototype.matches) {\n    var proto = Element.prototype;\n\n    proto.matches = proto.matchesSelector ||\n                    proto.mozMatchesSelector ||\n                    proto.msMatchesSelector ||\n                    proto.oMatchesSelector ||\n                    proto.webkitMatchesSelector;\n}\n\n/**\n * Finds the closest parent that matches a selector.\n *\n * @param {Element} element\n * @param {String} selector\n * @return {Function}\n */\nfunction closest (element, selector) {\n    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {\n        if (typeof element.matches === 'function' &&\n            element.matches(selector)) {\n          return element;\n        }\n        element = element.parentNode;\n    }\n}\n\nmodule.exports = closest;\n\n\n/***/ }),\n\n/***/ 438:\n/***/ (function(module, __unused_webpack_exports, __webpack_require__) {\n\nvar closest = __webpack_require__(828);\n\n/**\n * Delegates event to a selector.\n *\n * @param {Element} element\n * @param {String} selector\n * @param {String} type\n * @param {Function} callback\n * @param {Boolean} useCapture\n * @return {Object}\n */\nfunction _delegate(element, selector, type, callback, useCapture) {\n    var listenerFn = listener.apply(this, arguments);\n\n    element.addEventListener(type, listenerFn, useCapture);\n\n    return {\n        destroy: function() {\n            element.removeEventListener(type, listenerFn, useCapture);\n        }\n    }\n}\n\n/**\n * Delegates event to a selector.\n *\n * @param {Element|String|Array} [elements]\n * @param {String} selector\n * @param {String} type\n * @param {Function} callback\n * @param {Boolean} useCapture\n * @return {Object}\n */\nfunction delegate(elements, selector, type, callback, useCapture) {\n    // Handle the regular Element usage\n    if (typeof elements.addEventListener === 'function') {\n        return _delegate.apply(null, arguments);\n    }\n\n    // Handle Element-less usage, it defaults to global delegation\n    if (typeof type === 'function') {\n        // Use `document` as the first parameter, then apply arguments\n        // This is a short way to .unshift `arguments` without running into deoptimizations\n        return _delegate.bind(null, document).apply(null, arguments);\n    }\n\n    // Handle Selector-based usage\n    if (typeof elements === 'string') {\n        elements = document.querySelectorAll(elements);\n    }\n\n    // Handle Array-like based usage\n    return Array.prototype.map.call(elements, function (element) {\n        return _delegate(element, selector, type, callback, useCapture);\n    });\n}\n\n/**\n * Finds closest match and invokes callback.\n *\n * @param {Element} element\n * @param {String} selector\n * @param {String} type\n * @param {Function} callback\n * @return {Function}\n */\nfunction listener(element, selector, type, callback) {\n    return function(e) {\n        e.delegateTarget = closest(e.target, selector);\n\n        if (e.delegateTarget) {\n            callback.call(element, e);\n        }\n    }\n}\n\nmodule.exports = delegate;\n\n\n/***/ }),\n\n/***/ 879:\n/***/ (function(__unused_webpack_module, exports) {\n\n/**\n * Check if argument is a HTML element.\n *\n * @param {Object} value\n * @return {Boolean}\n */\nexports.node = function(value) {\n    return value !== undefined\n        && value instanceof HTMLElement\n        && value.nodeType === 1;\n};\n\n/**\n * Check if argument is a list of HTML elements.\n *\n * @param {Object} value\n * @return {Boolean}\n */\nexports.nodeList = function(value) {\n    var type = Object.prototype.toString.call(value);\n\n    return value !== undefined\n        && (type === '[object NodeList]' || type === '[object HTMLCollection]')\n        && ('length' in value)\n        && (value.length === 0 || exports.node(value[0]));\n};\n\n/**\n * Check if argument is a string.\n *\n * @param {Object} value\n * @return {Boolean}\n */\nexports.string = function(value) {\n    return typeof value === 'string'\n        || value instanceof String;\n};\n\n/**\n * Check if argument is a function.\n *\n * @param {Object} value\n * @return {Boolean}\n */\nexports.fn = function(value) {\n    var type = Object.prototype.toString.call(value);\n\n    return type === '[object Function]';\n};\n\n\n/***/ }),\n\n/***/ 370:\n/***/ (function(module, __unused_webpack_exports, __webpack_require__) {\n\nvar is = __webpack_require__(879);\nvar delegate = __webpack_require__(438);\n\n/**\n * Validates all params and calls the right\n * listener function based on its target type.\n *\n * @param {String|HTMLElement|HTMLCollection|NodeList} target\n * @param {String} type\n * @param {Function} callback\n * @return {Object}\n */\nfunction listen(target, type, callback) {\n    if (!target && !type && !callback) {\n        throw new Error('Missing required arguments');\n    }\n\n    if (!is.string(type)) {\n        throw new TypeError('Second argument must be a String');\n    }\n\n    if (!is.fn(callback)) {\n        throw new TypeError('Third argument must be a Function');\n    }\n\n    if (is.node(target)) {\n        return listenNode(target, type, callback);\n    }\n    else if (is.nodeList(target)) {\n        return listenNodeList(target, type, callback);\n    }\n    else if (is.string(target)) {\n        return listenSelector(target, type, callback);\n    }\n    else {\n        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');\n    }\n}\n\n/**\n * Adds an event listener to a HTML element\n * and returns a remove listener function.\n *\n * @param {HTMLElement} node\n * @param {String} type\n * @param {Function} callback\n * @return {Object}\n */\nfunction listenNode(node, type, callback) {\n    node.addEventListener(type, callback);\n\n    return {\n        destroy: function() {\n            node.removeEventListener(type, callback);\n        }\n    }\n}\n\n/**\n * Add an event listener to a list of HTML elements\n * and returns a remove listener function.\n *\n * @param {NodeList|HTMLCollection} nodeList\n * @param {String} type\n * @param {Function} callback\n * @return {Object}\n */\nfunction listenNodeList(nodeList, type, callback) {\n    Array.prototype.forEach.call(nodeList, function(node) {\n        node.addEventListener(type, callback);\n    });\n\n    return {\n        destroy: function() {\n            Array.prototype.forEach.call(nodeList, function(node) {\n                node.removeEventListener(type, callback);\n            });\n        }\n    }\n}\n\n/**\n * Add an event listener to a selector\n * and returns a remove listener function.\n *\n * @param {String} selector\n * @param {String} type\n * @param {Function} callback\n * @return {Object}\n */\nfunction listenSelector(selector, type, callback) {\n    return delegate(document.body, selector, type, callback);\n}\n\nmodule.exports = listen;\n\n\n/***/ }),\n\n/***/ 817:\n/***/ (function(module) {\n\nfunction select(element) {\n    var selectedText;\n\n    if (element.nodeName === 'SELECT') {\n        element.focus();\n\n        selectedText = element.value;\n    }\n    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {\n        var isReadOnly = element.hasAttribute('readonly');\n\n        if (!isReadOnly) {\n            element.setAttribute('readonly', '');\n        }\n\n        element.select();\n        element.setSelectionRange(0, element.value.length);\n\n        if (!isReadOnly) {\n            element.removeAttribute('readonly');\n        }\n\n        selectedText = element.value;\n    }\n    else {\n        if (element.hasAttribute('contenteditable')) {\n            element.focus();\n        }\n\n        var selection = window.getSelection();\n        var range = document.createRange();\n\n        range.selectNodeContents(element);\n        selection.removeAllRanges();\n        selection.addRange(range);\n\n        selectedText = selection.toString();\n    }\n\n    return selectedText;\n}\n\nmodule.exports = select;\n\n\n/***/ }),\n\n/***/ 279:\n/***/ (function(module) {\n\nfunction E () {\n  // Keep this empty so it's easier to inherit from\n  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)\n}\n\nE.prototype = {\n  on: function (name, callback, ctx) {\n    var e = this.e || (this.e = {});\n\n    (e[name] || (e[name] = [])).push({\n      fn: callback,\n      ctx: ctx\n    });\n\n    return this;\n  },\n\n  once: function (name, callback, ctx) {\n    var self = this;\n    function listener () {\n      self.off(name, listener);\n      callback.apply(ctx, arguments);\n    };\n\n    listener._ = callback\n    return this.on(name, listener, ctx);\n  },\n\n  emit: function (name) {\n    var data = [].slice.call(arguments, 1);\n    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();\n    var i = 0;\n    var len = evtArr.length;\n\n    for (i; i < len; i++) {\n      evtArr[i].fn.apply(evtArr[i].ctx, data);\n    }\n\n    return this;\n  },\n\n  off: function (name, callback) {\n    var e = this.e || (this.e = {});\n    var evts = e[name];\n    var liveEvents = [];\n\n    if (evts && callback) {\n      for (var i = 0, len = evts.length; i < len; i++) {\n        if (evts[i].fn !== callback && evts[i].fn._ !== callback)\n          liveEvents.push(evts[i]);\n      }\n    }\n\n    // Remove event from queue to prevent memory leak\n    // Suggested by https://github.com/lazd\n    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910\n\n    (liveEvents.length)\n      ? e[name] = liveEvents\n      : delete e[name];\n\n    return this;\n  }\n};\n\nmodule.exports = E;\nmodule.exports.TinyEmitter = E;\n\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The module cache\n/******/ \tvar __webpack_module_cache__ = {};\n/******/ \t\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(__webpack_module_cache__[moduleId]) {\n/******/ \t\t\treturn __webpack_module_cache__[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t\t// no module.id needed\n/******/ \t\t\t// no module.loaded needed\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/ \t\n/******/ \t\t// Execute the module function\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __webpack_require__);\n/******/ \t\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/compat get default export */\n/******/ \t!function() {\n/******/ \t\t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t\t__webpack_require__.n = function(module) {\n/******/ \t\t\tvar getter = module && module.__esModule ?\n/******/ \t\t\t\tfunction() { return module['default']; } :\n/******/ \t\t\t\tfunction() { return module; };\n/******/ \t\t\t__webpack_require__.d(getter, { a: getter });\n/******/ \t\t\treturn getter;\n/******/ \t\t};\n/******/ \t}();\n/******/ \t\n/******/ \t/* webpack/runtime/define property getters */\n/******/ \t!function() {\n/******/ \t\t// define getter functions for harmony exports\n/******/ \t\t__webpack_require__.d = function(exports, definition) {\n/******/ \t\t\tfor(var key in definition) {\n/******/ \t\t\t\tif(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t};\n/******/ \t}();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t!function() {\n/******/ \t\t__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }\n/******/ \t}();\n/******/ \t\n/************************************************************************/\n/******/ \t// module exports must be returned from runtime so entry inlining is disabled\n/******/ \t// startup\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(686);\n/******/ })()\n.default;\n});\n\n//# sourceURL=webpack:///./node_modules/clipboard/dist/clipboard.js?");

/***/ })

}]);