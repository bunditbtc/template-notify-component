module.exports = function(t) {
    var n = {};

    function r(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    return r.m = t, r.c = n, r.d = function(t, n, e) {
        r.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: e
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, n) {
        if (1 & n && (t = r(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var o in t) r.d(e, o, function(n) {
                return t[n]
            }.bind(null, o));
        return e
    }, r.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(n, "a", n), n
    }, r.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, r.p = "", r(r.s = 6)
}([function(t, n) {
    t.exports = require("react")
}, function(t, n, r) {
    var e = r(2);
    "string" == typeof e && (e = [
        [t.i, e, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    r(4)(e, o);
    e.locals && (t.exports = e.locals)
}, function(t, n, r) {
    (n = t.exports = r(3)(!1)).push([t.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500);", ""]), n.push([t.i, ":root {\r\n  --tooltip-backcolor: #424242;\r\n  --tooltip-forecolor: #FAFAFA;\r\n}\r\n\r\n.fab-container {\r\n  bottom: 10vh;\r\n  position: fixed;\r\n  margin: 1em;\r\n  right: 8vw;\r\n}\r\n\r\n.fab-item {\r\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n  border-radius: 50%;\r\n  border-style: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 56px;\r\n  height: 56px;\r\n  margin: 20px auto 0;\r\n  position: relative;\r\n  -webkit-transition: transform .1s ease-out, height 100ms ease, opacity 100ms ease;\r\n          transition: transform .1s ease-out, height 100ms ease, opacity 100ms ease;  \r\n  text-decoration: none;\r\n}\r\n\r\n.fab-item:active, \r\n.fab-item:focus, \r\n.fab-item:hover {\r\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n  transition: box-shadow .2s ease;\r\n  outline: none;\r\n}\r\n\r\n.fab-item:not(:last-child) {\r\n  width: 40px;\r\n  height: 0px;\r\n  margin: 0px auto 0;\r\n  opacity: 0;\r\n  -webkit-transform: translateY(50px);\r\n  -ms-transform: translateY(50px);\r\n  transform: translateY(50px);\r\n}\r\n\r\n.fab-container:hover \r\n.fab-item:not(:last-child) {\r\n  height: 40px;\r\n  opacity: 1;\r\n  -webkit-transform: none;\r\n  -ms-transform: none;\r\n  transform: none;\r\n  margin: 15px auto 0;\r\n}\r\n\r\n.fab-item:not(:last-child) i{\r\n  opacity: 0;\r\n}\r\n\r\n.fab-container:hover \r\n.fab-item:not(:last-child) i {\r\n  opacity: 1;\r\n}\r\n\r\n.fab-item:nth-last-child(1) {\r\n  -webkit-transition-delay: 25ms;\r\n          transition-delay: 25ms;\r\n  background-size: contain;\r\n}\r\n\r\n.fab-item:not(:last-child):nth-last-child(2) {\r\n  -webkit-transition-delay: 50ms;\r\n          transition-delay: 20ms;\r\n  background-size: contain;\r\n}\r\n\r\n.fab-item:not(:last-child):nth-last-child(3) {\r\n  -webkit-transition-delay: 75ms;\r\n          transition-delay: 40ms;\r\n  background-size: contain;\r\n}\r\n\r\n.fab-item:not(:last-child):nth-last-child(4) {\r\n  -webkit-transition-delay: 100ms;\r\n          transition-delay: 60ms;\r\n  background-size: contain;\r\n}\r\n\r\n[tooltip]:before {\r\n  bottom: 25%;\r\n  font-family: arial;\r\n  font-weight: 600;\r\n  border-radius: 2px;\r\n  background: var(--tooltip-backcolor);\r\n  color: var(--tooltip-forecolor);\r\n  content: attr(tooltip);\r\n  font-size: 12px;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  padding: 5px 7px;\r\n  margin-right: 12px;\r\n  position: absolute;\r\n  right: 100%;\r\n  white-space: nowrap;\r\n}\r\n\r\n[tooltip]:hover:before,\r\n[tooltip]:hover:after {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: opacity .1s ease-in-out;\r\n}\r\n\r\n.fab-item:nth-last-child(1)[tooltip]:hover:before,\r\n.fab-item:nth-last-child(1)[tooltip]:hover:after {\r\n  transition: opacity .1s step-end;\r\n}\r\n\r\n.fab-item.fab-rotate:active, \r\n.fab-item.fab-rotate:focus, \r\n.fab-item.fab-rotate:hover \r\n{\r\n  transform: rotate(45deg);\r\n  box-shadow: 5px 5px 20px rgba(0,0,0,0.19), 3px 3px 6px rgba(0,0,0,0.23);\r\n  transition: box-shadow .2s ease, transform .1s ease;\r\n  outline: none;\r\n}\r\n\r\n.fab-item.fab-rotate:nth-last-child(1)[tooltip]:hover:before,\r\n.fab-item.fab-rotate:nth-last-child(1)[tooltip]:hover:after \r\n{\r\n  transform: rotate(-45deg);\r\n  bottom: -60%;\r\n  right: 60%;\r\n}\r\n", ""])
}, function(t, n, r) {
    "use strict";
    t.exports = function(t) {
        var n = [];
        return n.toString = function() {
            return this.map(function(n) {
                var r = function(t, n) {
                    var r = t[1] || "",
                        e = t[3];
                    if (!e) return r;
                    if (n && "function" == typeof btoa) {
                        var o = (a = e, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            i = e.sources.map(function(t) {
                                return "/*# sourceURL=" + e.sourceRoot + t + " */"
                            });
                        return [r].concat(i).concat([o]).join("\n")
                    }
                    var a;
                    return [r].join("\n")
                }(n, t);
                return n[2] ? "@media " + n[2] + "{" + r + "}" : r
            }).join("")
        }, n.i = function(t, r) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var e = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                null != i && (e[i] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                null != a[0] && e[a[0]] || (r && !a[2] ? a[2] = r : r && (a[2] = "(" + a[2] + ") and (" + r + ")"), n.push(a))
            }
        }, n
    }
}, function(t, n, r) {
    var e, o, i = {},
        a = (e = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === o && (o = e.apply(this, arguments)), o
        }),
        s = function(t) {
            var n = {};
            return function(t, r) {
                if ("function" == typeof t) return t();
                if (void 0 === n[t]) {
                    var e = function(t, n) {
                        return n ? n.querySelector(t) : document.querySelector(t)
                    }.call(this, t, r);
                    if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
                        e = e.contentDocument.head
                    } catch (t) {
                        e = null
                    }
                    n[t] = e
                }
                return n[t]
            }
        }(),
        c = null,
        l = 0,
        f = [],
        u = r(5);

    function p(t, n) {
        for (var r = 0; r < t.length; r++) {
            var e = t[r],
                o = i[e.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](e.parts[a]);
                for (; a < e.parts.length; a++) o.parts.push(v(e.parts[a], n))
            } else {
                var s = [];
                for (a = 0; a < e.parts.length; a++) s.push(v(e.parts[a], n));
                i[e.id] = {
                    id: e.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function d(t, n) {
        for (var r = [], e = {}, o = 0; o < t.length; o++) {
            var i = t[o],
                a = n.base ? i[0] + n.base : i[0],
                s = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            e[a] ? e[a].parts.push(s) : r.push(e[a] = {
                id: a,
                parts: [s]
            })
        }
        return r
    }

    function b(t, n) {
        var r = s(t.insertInto);
        if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var e = f[f.length - 1];
        if ("top" === t.insertAt) e ? e.nextSibling ? r.insertBefore(n, e.nextSibling) : r.appendChild(n) : r.insertBefore(n, r.firstChild), f.push(n);
        else if ("bottom" === t.insertAt) r.appendChild(n);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = s(t.insertAt.before, r);
            r.insertBefore(n, o)
        }
    }

    function h(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var n = f.indexOf(t);
        n >= 0 && f.splice(n, 1)
    }

    function m(t) {
        var n = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
            var e = function() {
                0;
                return r.nc
            }();
            e && (t.attrs.nonce = e)
        }
        return y(n, t.attrs), b(t, n), n
    }

    function y(t, n) {
        Object.keys(n).forEach(function(r) {
            t.setAttribute(r, n[r])
        })
    }

    function v(t, n) {
        var r, e, o, i;
        if (n.transform && t.css) {
            if (!(i = "function" == typeof n.transform ? n.transform(t.css) : n.transform.default(t.css))) return function() {};
            t.css = i
        }
        if (n.singleton) {
            var a = l++;
            r = c || (c = m(n)), e = w.bind(null, r, a, !1), o = w.bind(null, r, a, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = function(t) {
            var n = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(n, t.attrs), b(t, n), n
        }(n), e = function(t, n, r) {
            var e = r.css,
                o = r.sourceMap,
                i = void 0 === n.convertToAbsoluteUrls && o;
            (n.convertToAbsoluteUrls || i) && (e = u(e));
            o && (e += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([e], {
                    type: "text/css"
                }),
                s = t.href;
            t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, r, n), o = function() {
            h(r), r.href && URL.revokeObjectURL(r.href)
        }) : (r = m(n), e = function(t, n) {
            var r = n.css,
                e = n.media;
            e && t.setAttribute("media", e);
            if (t.styleSheet) t.styleSheet.cssText = r;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(r))
            }
        }.bind(null, r), o = function() {
            h(r)
        });
        return e(t),
            function(n) {
                if (n) {
                    if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
                    e(t = n)
                } else o()
            }
    }
    t.exports = function(t, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs : {}, n.singleton || "boolean" == typeof n.singleton || (n.singleton = a()), n.insertInto || (n.insertInto = "head"), n.insertAt || (n.insertAt = "bottom");
        var r = d(t, n);
        return p(r, n),
            function(t) {
                for (var e = [], o = 0; o < r.length; o++) {
                    var a = r[o];
                    (s = i[a.id]).refs--, e.push(s)
                }
                t && p(d(t, n), n);
                for (o = 0; o < e.length; o++) {
                    var s;
                    if (0 === (s = e[o]).refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete i[s.id]
                    }
                }
            }
    };
    var g, x = (g = [], function(t, n) {
        return g[t] = n, g.filter(Boolean).join("\n")
    });

    function w(t, n, r, e) {
        var o = r ? "" : e.css;
        if (t.styleSheet) t.styleSheet.cssText = x(n, o);
        else {
            var i = document.createTextNode(o),
                a = t.childNodes;
            a[n] && t.removeChild(a[n]), a.length ? t.insertBefore(i, a[n]) : t.appendChild(i)
        }
    }
}, function(t, n) {
    t.exports = function(t) {
        var n = "undefined" != typeof window && window.location;
        if (!n) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var r = n.protocol + "//" + n.host,
            e = r + n.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, n) {
            var o, i = n.trim().replace(/^"(.*)"$/, function(t, n) {
                return n
            }).replace(/^'(.*)'$/, function(t, n) {
                return n
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? r + i : e + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        })
    }
}, function(t, n, r) {
    "use strict";
    r.r(n);
    r(1);
    var e = r(0),
        o = r.n(e),
        i = {
            red: "#ffcdd2",
            pink: "#f8bbd0",
            purple: "#e1bee7",
            lightBlue: "#81d4fa",
            cyan: "#80deea",
            teal: "#80cbc4",
            blue: "#bbdefb",
            green: "#dcedc8",
            yellow: "#fff9c4",
            orange: "#ffe0b2",
            brown: "#d7ccc8",
            grey: "#e0e0e0",
            darkerGrey: "#bdbdbd",
            black: "#212121",
            white: "#f5f5f5"
        },
        a = {
            lighterRed: "#f44336",
            red: "#c62828",
            pink: "#ad1457",
            purple: "#6a1b9a",
            lightBlue: "#01579b",
            cyan: "#00838f",
            teal: "#00695c",
            blue: "#0d47a1",
            green: "#1b5e20",
            yellow: "#f9a825",
            orange: "#e65100",
            brown: "#4e342e",
            grey: "#424242",
            black: "#212121",
            white: "#fafafa"
        };
    r.d(n, "Container", function() {
        return s
    }), r.d(n, "Link", function() {
        return l
    }), r.d(n, "Button", function() {
        return c
    }), r.d(n, "darkColors", function() {
        return a
    }), r.d(n, "lightColors", function() {
        return i
    });
    var s = function(t) {
            return o.a.createElement("nav", {
                className: "fab-container ".concat(t.className),
                style: t.styles
            }, t.children)
        },
        c = function(t) {
            return o.a.createElement("button", {
                onClick: t.onClick,
                className: "fab-item ".concat(t.className, " ").concat(t.rotate ? "fab-rotate" : ""),
                tooltip: t.tooltip,
                style: t.styles || f
            }, o.a.createElement("i", {
                className: t.icon,
                style: t.iconStyles
            }), t.children)
        },
        l = function(t) {
            return o.a.createElement("a", {
                href: t.href,
                className: "fab-item ".concat(t.className, " ").concat(t.rotate ? "fab-rotate" : ""),
                tooltip: t.tooltip,
                style: t.styles || f
            }, o.a.createElement("i", {
                className: t.icon,
                style: t.iconStyles
            }), t.children)
        },
        f = {
            backgroundColor: a.lighterRed,
            color: a.white,
            textDecoration: "none",
            border: "none"
        }
}]);