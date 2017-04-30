Function.prototype.bind || (Function.prototype.bind = function (h) {
  if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n = Array.prototype.slice.call(arguments, 1),
      r = this,
      p = function () {},
      l = function () {
    return r.apply(this instanceof p && h ? this : h, n.concat(Array.prototype.slice.call(arguments)));
  };p.prototype = this.prototype;l.prototype = new p();return l;
});!window.MutationObserver && window.WebKitMutationObserver && (window.MutationObserver = window.WebKitMutationObserver);
if (!window.MutationObserver) throw Error("The CustomElements polyfill requires MutationObserver support. Include the MutationObserver polyfill then include the CustomElements polyfill.");
(function () {
  var h = { logFlags: { dom: !1 } };if (!Boolean(document.register)) {
    var n = function (a) {
      return (a = q(a)) ? n(a["extends"]).concat([a]) : [];
    },
        r = function (a, e) {
      e.is && a.setAttribute("is", e.is);a.removeAttribute("unresolved");if (!Object.__proto__) for (var c = e["native"], d = {}, f = e.prototype; f !== c && f !== HTMLUnknownElement.prototype;) {
        for (var m = Object.getOwnPropertyNames(f), k = 0, t; t = m[k]; k++) d[t] || (Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(f, t)), d[t] = 1);f = Object.getPrototypeOf(f);
      }a.__proto__ = e.prototype;
      a.__upgraded__ = !0;h.addedSubtree(a);a.createdCallback && a.createdCallback();return a;
    },
        p = function (a) {
      if (!a.setAttribute._polyfilled) {
        var e = a.setAttribute;a.setAttribute = function (a, c) {
          l.call(this, a, c, e);
        };var c = a.removeAttribute;a.removeAttribute = function (a) {
          l.call(this, a, null, c);
        };a.setAttribute._polyfilled = !0;
      }
    },
        l = function (a, e, c) {
      var d = this.getAttribute(a);c.apply(this, arguments);var f = this.getAttribute(a);this.attributeChangedCallback && f !== d && this.attributeChangedCallback(a, d, f);
    },
        s = {};h.registry = s;var q = function (a) {
      if (a) return s[a.toLowerCase()];
    },
        v = function (a) {
      return function () {
        return r(u(a.tag), a);
      };
    },
        u = document.createElement.bind(document),
        A = Node.prototype.cloneNode;document.register = function (a, e) {
      var c = e || {};if (!a) throw Error("document.register: first argument `name` must not be empty");if (0 > a.indexOf("-")) throw Error("document.register: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(a) + "'.");if (q(a)) throw Error("DuplicateDefinitionError: a type with name '" + String(a) + "' is already registered");if (!c.prototype) throw Error("Options missing required prototype property");c.name = a.toLowerCase();c.lifecycle = c.lifecycle || {};c.ancestry = n(c["extends"]);for (var d = c["extends"], f = 0, m; m = c.ancestry[f]; f++) d = m.is && m.tag;c.tag = d || c.name;d && (c.is = c.name);if (!Object.__proto__) {
        var k = HTMLElement.prototype;c.is && (k = document.createElement(c.tag), k = Object.getPrototypeOf(k));for (d = c.prototype; d && d !== k;) f = Object.getPrototypeOf(d), d = d.__proto__ = f;
      }c["native"] = k;p(c.prototype);
      s[c.name] = c;c.ctor = v(c);c.ctor.prototype = c.prototype;c.prototype.constructor = c.ctor;h.addedNode(document);return c.ctor;
    };document.createElement = function (a, e) {
      var c = q(e || a);return c ? new c.ctor() : u(a);
    };Node.prototype.cloneNode = function (a) {
      a = A.call(this, a);addedNode(a);return a;
    };h.upgradeElement = function (a) {
      if (!a.__upgraded__ && a.nodeType === Node.ELEMENT_NODE) {
        var e = a.getAttribute("is") || a.localName;return (e = q(e)) && r(a, e);
      }
    };
  }(function (a) {
    function e(b, a, c) {
      var d = b.firstElementChild;if (!d) for (d = b.firstChild; d && d.nodeType !== Node.ELEMENT_NODE;) d = d.nextSibling;for (; d;) !0 !== a(d, c) && e(d, a, c), d = d.nextElementSibling;return null;
    }function c(b, a) {
      e(b, function (b) {
        if (a(b)) return !0;
      });
    }function d(b) {
      var c;a: {
        if (!b.__upgraded__ && b.nodeType === Node.ELEMENT_NODE && (c = b.getAttribute("is") || b.localName, a.registry[c])) {
          g.dom && console.group("upgrade:", b.localName);a.upgradeElement(b);g.dom && console.groupEnd();c = !0;break a;
        }c = void 0;
      }if (c) return k(b), !0;l(b);
    }function f(b) {
      c(b, function (b) {
        if (d(b)) return !0;
      });
    }function m(b) {
      return d(b) || f(b);
    }function k(b) {
      l(b);w(b) && c(b, function (b) {
        l(b);
      });
    }function h(b) {
      x.push(b);y || (y = !0, (window.Platform && window.Platform.endOfMicrotask || setTimeout)(p));
    }function p() {
      y = !1;for (var b = x, a = 0, c = b.length, d; a < c && (d = b[a]); a++) d();x = [];
    }function l(b) {
      u ? h(function () {
        n(b);
      }) : n(b);
    }function n(b) {
      if (b.enteredViewCallback || b.__upgraded__ && g.dom) g.dom && console.group("inserted:", b.localName), w(b) && (b.__inserted = (b.__inserted || 0) + 1, 1 > b.__inserted && (b.__inserted = 1), 1 < b.__inserted ? g.dom && console.warn("inserted:", b.localName, "insert/remove count:", b.__inserted) : b.enteredViewCallback && (g.dom && console.log("inserted:", b.localName), b.enteredViewCallback())), g.dom && console.groupEnd();
    }function r(b) {
      q(b);c(b, function (b) {
        q(b);
      });
    }function q(b) {
      u ? h(function () {
        s(b);
      }) : s(b);
    }function s(b) {
      if (b.leftViewCallback || b.__upgraded__ && g.dom) g.dom && console.log("removed:", b.localName), w(b) || (b.__inserted = (b.__inserted || 0) - 1, 0 < b.__inserted && (b.__inserted = 0), 0 > b.__inserted ? g.dom && console.warn("removed:", b.localName, "insert/remove count:", b.__inserted) : b.leftViewCallback && b.leftViewCallback());
    }function w(b) {
      for (var a = document; b;) {
        if (b == a) return !0;b = b.parentNode || b.host;
      }
    }var g = a.logFlags,
        u = window.MutationObserver === window.MutationObserverPolyfill,
        y = !1,
        x = [],
        v = new MutationObserver(function (b) {
      if (g.dom) {
        var a = b[0];if (a && "childList" === a.type && a.addedNodes && a.addedNodes) {
          for (a = a.addedNodes[0]; a && a !== document && !a.host;) a = a.parentNode;var c = a && (a.URL || a._URL || a.host && a.host.localName) || "",
              c = c.split("/?").shift().split("/").pop();
        }console.group("mutations (%d) [%s]", b.length, c || "");
      }b.forEach(function (a) {
        "childList" === a.type && (z(a.addedNodes, function (a) {
          a.localName && m(a);
        }), z(a.removedNodes, function (a) {
          a.localName && r(a);
        }));
      });g.dom && console.groupEnd();
    }),
        z = Array.prototype.forEach.call.bind(Array.prototype.forEach);a.addedNode = m;a.addedSubtree = f;v.observe(document, { childList: !0, subtree: !0 });window.addEventListener("DOMContentLoaded", function () {
      g.dom && console.group("upgradeDocument: ", (document.URL || document._URL || "").split("/").pop());m(document);g.dom && console.groupEnd();
    });
  })(h);
})();

(function () {
  "undefined" === typeof WeakMap && function () {
    var f = Object.defineProperty,
        m = Date.now() % 1E9,
        d = function () {
      this.name = "__st" + (1E9 * Math.random() >>> 0) + (m++ + "__");
    };d.prototype = { set: function (g, l) {
        var d = g[this.name];d && d[0] === g ? d[1] = l : f(g, this.name, { value: [g, l], writable: !0 });
      }, get: function (g) {
        var d;return (d = g[this.name]) && d[0] === g ? d[1] : void 0;
      }, "delete": function (d) {
        this.set(d, void 0);
      } };window.WeakMapPolyfill = d;window.WeakMap = d;
  }();
})();
(function () {
  if (!window.MutationObserver && window.WebKitMutationObserver) window.MutationObserver = window.WebKitMutationObserver;else if (!window.MutationObserver) {
    var f = new WeakMap(),
        m = window.msSetImmediate;if (!m) {
      var d = [],
          g = String(Math.random());window.addEventListener("message", function (a) {
        a.data === g && (a = d, d = [], a.forEach(function (a) {
          a();
        }));
      });m = function (a) {
        d.push(a);window.postMessage(g, "*");
      };
    }var l = !1,
        p = [],
        u = function () {
      l = !1;var a = p;p = [];a.sort(function (a, b) {
        return a.uid_ - b.uid_;
      });var b = !1;a.forEach(function (a) {
        var e = a.takeRecords();y(a);e.length && (a.callback_(e, a), b = !0);
      });b && u();
    },
        y = function (a) {
      a.nodes_.forEach(function (b) {
        (b = f.get(b)) && b.forEach(function (b) {
          b.observer === a && b.removeTransientObservers();
        });
      });
    },
        r = function (a, b) {
      for (var c = a; c; c = c.parentNode) {
        var e = f.get(c);if (e) for (var q = 0; q < e.length; q++) {
          var d = e[q],
              h = d.options;(c === a || h.subtree) && (h = b(h)) && d.enqueue(h);
        }
      }
    },
        z = 0,
        s = function (a) {
      this.callback_ = a;this.nodes_ = [];this.records_ = [];this.uid_ = ++z;
    };s.prototype = { observe: function (a, b) {
        var c = a;a = window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(c) || c;if (!b.childList && !b.attributes && !b.characterData || b.attributeOldValue && !b.attributes || b.attributeFilter && b.attributeFilter.length && !b.attributes || b.characterDataOldValue && !b.characterData) throw new SyntaxError();(c = f.get(a)) || f.set(a, c = []);for (var e, d = 0; d < c.length; d++) if (c[d].observer === this) {
          e = c[d];e.removeListeners();e.options = b;break;
        }e || (e = new v(this, a, b), c.push(e), this.nodes_.push(a));e.addListeners();
      }, disconnect: function () {
        this.nodes_.forEach(function (a) {
          a = f.get(a);for (var b = 0; b < a.length; b++) {
            var c = a[b];if (c.observer === this) {
              c.removeListeners();a.splice(b, 1);break;
            }
          }
        }, this);this.records_ = [];
      }, takeRecords: function () {
        var a = this.records_;this.records_ = [];return a;
      } };var w = function (a, b) {
      this.type = a;this.target = b;this.addedNodes = [];this.removedNodes = [];this.oldValue = this.attributeNamespace = this.attributeName = this.nextSibling = this.previousSibling = null;
    },
        n,
        k,
        t = function (a, b) {
      return n = new w(a, b);
    },
        x = function (a) {
      if (k) return k;var b = n,
          c = new w(b.type, b.target);c.addedNodes = b.addedNodes.slice();c.removedNodes = b.removedNodes.slice();c.previousSibling = b.previousSibling;c.nextSibling = b.nextSibling;c.attributeName = b.attributeName;c.attributeNamespace = b.attributeNamespace;c.oldValue = b.oldValue;k = c;k.oldValue = a;return k;
    },
        v = function (a, b, c) {
      this.observer = a;this.target = b;this.options = c;this.transientObservedNodes = [];
    };v.prototype = { enqueue: function (a) {
        var b = this.observer.records_,
            c = b.length;if (0 < b.length) {
          var e = b[c - 1];e = e === a ? e : !k || e !== k && e !== n ? null : k;if (e) {
            b[c - 1] = e;return;
          }
        } else p.push(this.observer), l || (l = !0, m(u));b[c] = a;
      }, addListeners: function () {
        this.addListeners_(this.target);
      }, addListeners_: function (a) {
        var b = this.options;b.attributes && a.addEventListener("DOMAttrModified", this, !0);b.characterData && a.addEventListener("DOMCharacterDataModified", this, !0);b.childList && a.addEventListener("DOMNodeInserted", this, !0);(b.childList || b.subtree) && a.addEventListener("DOMNodeRemoved", this, !0);
      }, removeListeners: function () {
        this.removeListeners_(this.target);
      }, removeListeners_: function (a) {
        var b = this.options;b.attributes && a.removeEventListener("DOMAttrModified", this, !0);b.characterData && a.removeEventListener("DOMCharacterDataModified", this, !0);b.childList && a.removeEventListener("DOMNodeInserted", this, !0);(b.childList || b.subtree) && a.removeEventListener("DOMNodeRemoved", this, !0);
      }, addTransientObserver: function (a) {
        if (a !== this.target) {
          this.addListeners_(a);this.transientObservedNodes.push(a);var b = f.get(a);b || f.set(a, b = []);b.push(this);
        }
      }, removeTransientObservers: function () {
        var a = this.transientObservedNodes;this.transientObservedNodes = [];a.forEach(function (a) {
          this.removeListeners_(a);a = f.get(a);for (var c = 0; c < a.length; c++) if (a[c] === this) {
            a.splice(c, 1);break;
          }
        }, this);
      }, handleEvent: function (a) {
        a.stopImmediatePropagation();switch (a.type) {case "DOMAttrModified":
            var b = a.attrName,
                c = a.relatedNode.namespaceURI,
                e = a.target,
                d = new t("attributes", e);d.attributeName = b;d.attributeNamespace = c;var f = a.attrChange === MutationEvent.ADDITION ? null : a.prevValue;r(e, function (a) {
              if (a.attributes && (!a.attributeFilter || !a.attributeFilter.length || -1 !== a.attributeFilter.indexOf(b) || -1 !== a.attributeFilter.indexOf(c))) return a.attributeOldValue ? x(f) : d;
            });break;case "DOMCharacterDataModified":
            e = a.target;d = t("characterData", e);f = a.prevValue;r(e, function (a) {
              if (a.characterData) return a.characterDataOldValue ? x(f) : d;
            });break;case "DOMNodeRemoved":
            this.addTransientObserver(a.target);case "DOMNodeInserted":
            var e = a.relatedNode,
                h = a.target,
                g;"DOMNodeInserted" === a.type ? (a = [h], g = []) : (a = [], g = [h]);var l = h.previousSibling,
                h = h.nextSibling,
                d = t("childList", e);d.addedNodes = a;d.removedNodes = g;d.previousSibling = l;d.nextSibling = h;r(e, function (a) {
              if (a.childList) return d;
            });}n = k = void 0;
      } };window.MutationObserverPolyfill = s;window.MutationObserver = s;
  }
})();

function getElementClass() {
  if (typeof HTMLElement !== 'function') {
    // case of Safari
    const BaseElement = () => {};
    BaseElement.prototype = document.createElement('div');
    return BaseElement;
  } else {
    return HTMLElement;
  }
}

class Base$1 extends getElementClass() {
  constructor() {
    super();
  }
  getDefaultStyle() {
    const defaultTheme = document.styleSheets;
    console.log('default themes! ', defaultTheme);
  }
}

class Button$1 extends Base$1 {
  constructor() {
    super();
    // creates a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    // Create a standard img element and set it's attributes.
    const button = document.createElement('button');
    button.innerText = 'BUTTOlol';
    shadow.appendChild(button);
    this.getDefaultStyle();
  }
}

customElements.define('mui-button', Button$1);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
