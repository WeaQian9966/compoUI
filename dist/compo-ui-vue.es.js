import Nt, { forwardRef as St, createElement as G, Component as st, Fragment as Ft } from "react";
import { Fragment as Dt, h as B, reactive as Xt, getCurrentInstance as te, Teleport as ee, createApp as re, Comment as ne, Text as oe } from "vue";
import rt, { version as ae, createPortal as ue } from "react-dom";
import { F as ie, K as se, a as ce, T as le, b as pe } from "./Track-BQAk5yNF.js";
function ht(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, o = Array(e); r < e; r++) o[r] = t[r];
  return o;
}
function fe(t) {
  if (Array.isArray(t)) return t;
}
function _e(t) {
  if (Array.isArray(t)) return ht(t);
}
function ye(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Ot(t, e, r, o, i, a, n) {
  try {
    var s = t[a](n), c = s.value;
  } catch (u) {
    return void r(u);
  }
  s.done ? e(c) : Promise.resolve(c).then(o, i);
}
function de(t) {
  return function() {
    var e = this, r = arguments;
    return new Promise(function(o, i) {
      var a = t.apply(e, r);
      function n(c) {
        Ot(a, o, i, n, s, "next", c);
      }
      function s(c) {
        Ot(a, o, i, n, s, "throw", c);
      }
      n(void 0);
    });
  };
}
function ct(t, e, r) {
  return e = mt(e), Pe(t, Ut() ? Reflect.construct(e, r || [], mt(t).constructor) : e.apply(t, r));
}
function nt(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Ct(t, e) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, it(o.key), o);
  }
}
function ot(t, e, r) {
  return e && Ct(t.prototype, e), r && Ct(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function tt(t, e, r) {
  return (e = it(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Z() {
  return (Z = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r, o = arguments[e];
      for (r in o) !{}.hasOwnProperty.call(o, r) || (t[r] = o[r]);
    }
    return t;
  }).apply(null, arguments);
}
function mt(t) {
  return (mt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  })(t);
}
function lt(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Mt(t, e);
}
function Ut() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ut = function() {
    return !!t;
  })();
}
function ve(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function he(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var o, i, a, n, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(t)).next, e !== 0) for (; !(c = (o = a.call(r)).done) && (s.push(o.value), s.length !== e); c = !0) ;
    } catch (p) {
      u = !0, i = p;
    } finally {
      try {
        if (!c && r.return != null && (n = r.return(), Object(n) !== n)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function me() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ge() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kt(t, e) {
  var r, o = Object.keys(t);
  return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(i) {
    return Object.getOwnPropertyDescriptor(t, i).enumerable;
  })), o.push.apply(o, r)), o;
}
function l(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? kt(Object(r), !0).forEach(function(o) {
      tt(t, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : kt(Object(r)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return t;
}
function M(t, e) {
  if (t == null) return {};
  var r, o = be(t, e);
  if (Object.getOwnPropertySymbols) for (var i = Object.getOwnPropertySymbols(t), a = 0; a < i.length; a++) r = i[a], e.includes(r) || {}.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
  return o;
}
function be(t, e) {
  if (t == null) return {};
  var r, o = {};
  for (r in t) if ({}.hasOwnProperty.call(t, r)) {
    if (e.includes(r)) continue;
    o[r] = t[r];
  }
  return o;
}
function Pe(t, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ye(t);
}
function Q() {
  Q = function() {
    return e;
  };
  var t, e = {}, r = Object.prototype, o = r.hasOwnProperty, i = Object.defineProperty || function(f, _, m) {
    f[_] = m.value;
  }, C = typeof Symbol == "function" ? Symbol : {}, a = C.iterator || "@@iterator", n = C.asyncIterator || "@@asyncIterator", s = C.toStringTag || "@@toStringTag";
  function c(f, _, m) {
    return Object.defineProperty(f, _, { value: m, enumerable: !0, configurable: !0, writable: !0 }), f[_];
  }
  try {
    c({}, "");
  } catch {
    c = function(_, m, w) {
      return _[m] = w;
    };
  }
  function u(f, W, m, J) {
    var g, T, k, D, W = W && W.prototype instanceof I ? W : I, W = Object.create(W.prototype), J = new j(J || []);
    return i(W, "_invoke", { value: (g = f, T = m, k = J, D = d, function(K, H) {
      if (D === v) throw Error("Generator is already running");
      if (D === b) {
        if (K === "throw") throw H;
        return { value: t, done: !0 };
      }
      for (k.method = K, k.arg = H; ; ) {
        var $ = k.delegate;
        if ($ && ($ = function et(U, E) {
          var Y = E.method, q = U.iterator[Y];
          return q === t ? (E.delegate = null, Y === "throw" && U.iterator.return && (E.method = "return", E.arg = t, et(U, E), E.method === "throw") || Y !== "return" && (E.method = "throw", E.arg = new TypeError("The iterator does not provide a '" + Y + "' method")), h) : (Y = p(q, U.iterator, E.arg), Y.type === "throw" ? (E.method = "throw", E.arg = Y.arg, E.delegate = null, h) : (q = Y.arg, q ? q.done ? (E[U.resultName] = q.value, E.next = U.nextLoc, E.method !== "return" && (E.method = "next", E.arg = t), E.delegate = null, h) : q : (E.method = "throw", E.arg = new TypeError("iterator result is not an object"), E.delegate = null, h)));
        }($, k), $)) {
          if ($ === h) continue;
          return $;
        }
        if (k.method === "next") k.sent = k._sent = k.arg;
        else if (k.method === "throw") {
          if (D === d) throw D = b, k.arg;
          k.dispatchException(k.arg);
        } else k.method === "return" && k.abrupt("return", k.arg);
        if (D = v, $ = p(g, T, k), $.type === "normal") {
          if (D = k.done ? b : y, $.arg === h) continue;
          return { value: $.arg, done: k.done };
        }
        $.type === "throw" && (D = b, k.method = "throw", k.arg = $.arg);
      }
    }) }), W;
  }
  function p(f, _, m) {
    try {
      return { type: "normal", arg: f.call(_, m) };
    } catch (w) {
      return { type: "throw", arg: w };
    }
  }
  e.wrap = u;
  var d = "suspendedStart", y = "suspendedYield", v = "executing", b = "completed", h = {};
  function I() {
  }
  function V() {
  }
  function O() {
  }
  var C = {}, R = (c(C, a, function() {
    return this;
  }), Object.getPrototypeOf), R = R && R(R(A([]))), S = (R && R !== r && o.call(R, a) && (C = R), O.prototype = I.prototype = Object.create(C));
  function N(f) {
    ["next", "throw", "return"].forEach(function(_) {
      c(f, _, function(m) {
        return this._invoke(_, m);
      });
    });
  }
  function F(f, _) {
    var m;
    i(this, "_invoke", { value: function(w, g) {
      function T() {
        return new _(function(k, D) {
          (function W(U, K, H, $) {
            var et, U = p(f[U], f, K);
            if (U.type !== "throw") return (K = (et = U.arg).value) && typeof K == "object" && o.call(K, "__await") ? _.resolve(K.__await).then(function(E) {
              W("next", E, H, $);
            }, function(E) {
              W("throw", E, H, $);
            }) : _.resolve(K).then(function(E) {
              et.value = E, H(et);
            }, function(E) {
              return W("throw", E, H, $);
            });
            $(U.arg);
          })(w, g, k, D);
        });
      }
      return m = m ? m.then(T, T) : T();
    } });
  }
  function P(f) {
    var _ = { tryLoc: f[0] };
    1 in f && (_.catchLoc = f[1]), 2 in f && (_.finallyLoc = f[2], _.afterLoc = f[3]), this.tryEntries.push(_);
  }
  function x(f) {
    var _ = f.completion || {};
    _.type = "normal", delete _.arg, f.completion = _;
  }
  function j(f) {
    this.tryEntries = [{ tryLoc: "root" }], f.forEach(P, this), this.reset(!0);
  }
  function A(f) {
    if (f || f === "") {
      var _, m = f[a];
      if (m) return m.call(f);
      if (typeof f.next == "function") return f;
      if (!isNaN(f.length)) return _ = -1, (m = function w() {
        for (; ++_ < f.length; ) if (o.call(f, _)) return w.value = f[_], w.done = !1, w;
        return w.value = t, w.done = !0, w;
      }).next = m;
    }
    throw new TypeError(typeof f + " is not iterable");
  }
  return i(S, "constructor", { value: V.prototype = O, configurable: !0 }), i(O, "constructor", { value: V, configurable: !0 }), V.displayName = c(O, s, "GeneratorFunction"), e.isGeneratorFunction = function(f) {
    return f = typeof f == "function" && f.constructor, !!f && (f === V || (f.displayName || f.name) === "GeneratorFunction");
  }, e.mark = function(f) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(f, O) : (f.__proto__ = O, c(f, s, "GeneratorFunction")), f.prototype = Object.create(S), f;
  }, e.awrap = function(f) {
    return { __await: f };
  }, N(F.prototype), c(F.prototype, n, function() {
    return this;
  }), e.AsyncIterator = F, e.async = function(f, _, m, w, g) {
    g === void 0 && (g = Promise);
    var T = new F(u(f, _, m, w), g);
    return e.isGeneratorFunction(_) ? T : T.next().then(function(k) {
      return k.done ? k.value : T.next();
    });
  }, N(S), c(S, s, "Generator"), c(S, a, function() {
    return this;
  }), c(S, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(f) {
    var _, m = Object(f), w = [];
    for (_ in m) w.push(_);
    return w.reverse(), function g() {
      for (; w.length; ) {
        var T = w.pop();
        if (T in m) return g.value = T, g.done = !1, g;
      }
      return g.done = !0, g;
    };
  }, e.values = A, j.prototype = { constructor: j, reset: function(f) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(x), !f) for (var _ in this) _.charAt(0) === "t" && o.call(this, _) && !isNaN(+_.slice(1)) && (this[_] = t);
  }, stop: function() {
    this.done = !0;
    var f = this.tryEntries[0].completion;
    if (f.type === "throw") throw f.arg;
    return this.rval;
  }, dispatchException: function(f) {
    if (this.done) throw f;
    var _ = this;
    function m(W, J) {
      return T.type = "throw", T.arg = f, _.next = W, J && (_.method = "next", _.arg = t), !!J;
    }
    for (var w = this.tryEntries.length - 1; 0 <= w; --w) {
      var g = this.tryEntries[w], T = g.completion;
      if (g.tryLoc === "root") return m("end");
      if (g.tryLoc <= this.prev) {
        var k = o.call(g, "catchLoc"), D = o.call(g, "finallyLoc");
        if (k && D) {
          if (this.prev < g.catchLoc) return m(g.catchLoc, !0);
          if (this.prev < g.finallyLoc) return m(g.finallyLoc);
        } else if (k) {
          if (this.prev < g.catchLoc) return m(g.catchLoc, !0);
        } else {
          if (!D) throw Error("try statement without catch or finally");
          if (this.prev < g.finallyLoc) return m(g.finallyLoc);
        }
      }
    }
  }, abrupt: function(f, _) {
    for (var m = this.tryEntries.length - 1; 0 <= m; --m) {
      var w = this.tryEntries[m];
      if (w.tryLoc <= this.prev && o.call(w, "finallyLoc") && this.prev < w.finallyLoc) {
        var g = w;
        break;
      }
    }
    var T = (g = g && (f === "break" || f === "continue") && g.tryLoc <= _ && _ <= g.finallyLoc ? null : g) ? g.completion : {};
    return T.type = f, T.arg = _, g ? (this.method = "next", this.next = g.finallyLoc, h) : this.complete(T);
  }, complete: function(f, _) {
    if (f.type === "throw") throw f.arg;
    return f.type === "break" || f.type === "continue" ? this.next = f.arg : f.type === "return" ? (this.rval = this.arg = f.arg, this.method = "return", this.next = "end") : f.type === "normal" && _ && (this.next = _), h;
  }, finish: function(f) {
    for (var _ = this.tryEntries.length - 1; 0 <= _; --_) {
      var m = this.tryEntries[_];
      if (m.finallyLoc === f) return this.complete(m.completion, m.afterLoc), x(m), h;
    }
  }, catch: function(f) {
    for (var _ = this.tryEntries.length - 1; 0 <= _; --_) {
      var m, w, g = this.tryEntries[_];
      if (g.tryLoc === f) return (m = g.completion).type === "throw" && (w = m.arg, x(g)), w;
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(f, _, m) {
    return this.delegate = { iterator: A(f), resultName: _, nextLoc: m }, this.method === "next" && (this.arg = t), h;
  } }, e;
}
function Mt(t, e) {
  return (Mt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  })(t, e);
}
function Et(t, e) {
  return fe(t) || he(t, e) || Gt(t, e) || me();
}
function pt(t) {
  return _e(t) || ve(t) || Gt(t) || ge();
}
function Re(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r === void 0) return (e === "string" ? String : Number)(t);
  if (r = r.call(t, e), typeof r != "object") return r;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function it(t) {
  return t = Re(t, "string"), typeof t == "symbol" ? t : t + "";
}
function L(t) {
  return (L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(t);
}
function Gt(t, e) {
  var r;
  if (t) return typeof t == "string" ? ht(t, e) : (r = (r = {}.toString.call(t).slice(8, -1)) === "Object" && t.constructor ? t.constructor.name : r) === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ht(t, e) : void 0;
}
var Kt = { react: { componentWrap: "div", slotWrap: "div", componentWrapAttrs: { __use_react_component_wrap: "", style: { all: "unset" } }, slotWrapAttrs: { __use_react_slot_wrap: "", style: { all: "unset" } }, vueNamedSlotsKey: ["node:"] }, vue: { componentWrapHOC: function(t) {
  return function() {
    var e = (0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}).portals;
    return G(Ft, null, t, (e === void 0 ? [] : e).map(function(r) {
      var o = r.Portal;
      return G(o, { key: r.key });
    }));
  };
}, componentWrapAttrs: { "data-use-vue-component-wrap": "", style: { all: "unset" } }, slotWrapAttrs: { "data-use-vue-slot-wrap": "", style: { all: "unset" } } } };
function Bt() {
  var t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : { react: {}, vue: {} }, r = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : Kt, e = 2 < arguments.length ? arguments[2] : void 0, r = (t.vue || (t.vue = {}), t.react || (t.react = {}), [r, l(l({}, t), {}, { react: l(l(l({}, r.react), t.react), {}, { componentWrapAttrs: l(l({}, r.react.componentWrapAttrs), t.react.componentWrapAttrs), slotWrapAttrs: l(l({}, r.react.slotWrapAttrs), t.react.slotWrapAttrs) }), vue: l(l(l({}, r.vue), t.vue), {}, { componentWrapAttrs: l(l({}, r.vue.componentWrapAttrs), t.vue.componentWrapAttrs), slotWrapAttrs: l(l({}, r.vue.slotWrapAttrs), t.vue.slotWrapAttrs) }) })]);
  return e && r.unshift({}), Object.assign.apply(this, r);
}
var Yt = ["getElementById", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "querySelector", "querySelectorAll"], X = { Document: {}, Element: {} };
function Se(t) {
  Object.keys(X).forEach(function(e) {
    Yt.forEach(function(r) {
      var o = X[e][r] || window[e].prototype[r];
      o && (X[e][r] = o, window[e].prototype[r] = function() {
        for (var i = arguments.length, a = new Array(i), n = 0; n < i; n++) a[n] = arguments[n];
        var s = o.apply(this, a);
        return s && (s.constructor !== NodeList || s.constructor === NodeList && 0 < s.length) ? s : ((s = r) === "getElementById" && (s = "querySelector", a = ["#" + a[0]]), (X.Element[s] || Element.prototype[s]).apply(t, a));
      });
    });
  });
}
function we() {
  Object.keys(X).forEach(function(t) {
    Yt.forEach(function(e) {
      window[t].prototype[e] = X[t][e];
    });
  });
}
var Oe = ["ref"], Ce = ["key"], ke = ["hashList"], dt = parseInt(ae);
var Ee = (() => {
  function t(e) {
    return nt(this, t), ct(this, t, [e]);
  }
  return lt(t, st), ot(t, [{ key: "render", value: function() {
    var e = this.props.component, r = this.props.passedProps, r = (r.ref, M(r, Oe));
    return G(e, r, this.props.children);
  } }]);
})(), Ie = function(t, e, r) {
  var o = (() => {
    function i(a) {
      var n;
      return nt(this, i), (n = ct(this, i, [a])).state = l(l({}, a), e.isSlots ? { children: t } : {}), n.setRef = n.setRef.bind(n), n.vueInReactCall = n.vueInReactCall.bind(n), (n.__veauryVueWrapperRef__ = r).__veauryVueInReactCall__ = n.vueInReactCall, n;
    }
    return lt(i, st), ot(i, [{ key: "reactPropsLinkToVueInstance", value: function(a) {
      Object.keys(a).forEach(function(n) {
        r[n] || (r[n] = a[n]);
      }), Object.getOwnPropertyNames(a.__proto__).filter(function(n) {
        return ["constructor", "render"].indexOf(n) < 0;
      }).forEach(function(n) {
        r[n] || (r[n] = a[n]);
      });
    } }, { key: "setRef", value: function(a) {
      var n = this;
      a && (r.__veauryReactRef__ = a, this.reactPropsLinkToVueInstance(a), Promise.resolve().then(function() {
        return n.reactPropsLinkToVueInstance(a);
      }), (this.setRef.current = a).__veauryVueWrapperRef__ = r);
    } }, { key: "createSlot", value: function(a) {
      return { originVNode: a, inheritAttrs: !1, __fromReactSlot: !0, render: function() {
        var n, s;
        return ((n = a = (a = ((s = this.$slots) == null || (n = s.default) == null ? void 0 : n.call(s)) || a) instanceof Function ? a(this) : a) == null ? void 0 : n.length) === 1 && (s = a[0]) != null && s.data && ((n = this.$attrs).key, s = M(n, Ce), a[0].props = l(l({}, s), a[0].props)), a;
      } };
    } }, { key: "componentWillUnmount", value: function() {
      r.__veauryReactRef__ && (r.__veauryReactRef__.__veauryVueWrapperRef__ = null, r.__veauryReactRef__ = null);
    } }, { key: "vueInReactCall", value: function(a) {
      var n = this, s = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return 2 < arguments.length && arguments[2] && a && a[0] ? a.map(function(c, u) {
        return ut(n.createSlot(c instanceof Function ? c : [c]), l(l(l({}, e), s), {}, { isSlots: !0, wrapInstance: r })).render({ key: (c == null ? void 0 : c.key) || void 0 });
      }) : ut(this.createSlot(a), l(l(l({}, e), s), {}, { isSlots: !0, wrapInstance: r })).render();
    } }, { key: "render", value: function() {
      var a, n, s, c = this, h = this.state, u = h.hashList, p = M(h, ke), d = {}, y = {};
      for (a in p) n = a, s = void 0, p.hasOwnProperty(n) && p[n] != null && (p[n].__slot ? (p[n].reactSlot ? p[n] = p[n].reactSlot : (s = p[n], e.defaultSlotsFormatter && p[n].__trueChildren ? (p[n].__trueChildren.__top__ = c.__veauryVueWrapperRef__, p[n] = e.defaultSlotsFormatter(p[n].__trueChildren, c.vueInReactCall, u), p[n] instanceof Array ? p[n] = pt(p[n]) : -1 < ["string", "number"].indexOf(L(p[n])) ? p[n] = [p[n]] : L(p[n]) === "object" && (p[n] = l({}, p[n]))) : p[n] = l({}, ut(c.createSlot(p[n]), l(l({}, e), {}, { isSlots: !0, wrapInstance: r })).render()), p[n].vueFunction = s), d[n] = p[n]) : p[n].__scopedSlot && (p[n] = p[n](c.createSlot), y[n] = p[n]));
      var v, b, h = {};
      return h.ref = this.setRef, e.isSlots ? this.state.children || this.props.children : (v = p, t.__syncUpdateForPureReactInVue && Object.keys(t.__syncUpdateForPureReactInVue).map(function(I) {
        var V, O;
        v[I] && typeof v[I] == "function" && (V = c.__veauryVueWrapperRef__, O = v[I], v[I] = function() {
          for (var C = arguments.length, R = new Array(C), S = 0; S < C; S++) R[S] = arguments[S];
          V.__veaurySyncUpdateProps__(t.__syncUpdateForPureReactInVue[I].apply(this, R)), O.apply(this, R), V.macroTaskUpdate = !0, V.__veauryMountReactComponent__(!0, !0, {});
        });
      }), b = l(l(l({}, v = e.defaultPropsFormatter ? e.defaultPropsFormatter.call(this, v, this.vueInReactCall, u) : v), d), y), Object.getPrototypeOf(t) !== Function.prototype && (L(t) !== "object" || t.render) || i.catchVueRefs() ? (Object.getPrototypeOf(t) === Function.prototype && delete h.ref, G(t, Z({}, b, h))) : G(Ee, Z({ passedProps: b, component: t }, h), b.children));
    } }], [{ key: "catchVueRefs", value: function() {
      if (r.$parent) {
        for (var a in r.$parent.$refs) if (r.$parent.$refs[a] === r) return !0;
      }
      return !1;
    } }]);
  })();
  return tt(o, "displayName", "applyReact_".concat(t.displayName || t.name || "Component")), o;
};
function wt(t) {
  var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return t.__esModule && t.default && (t = t.default), e.isSlots && (t = t()), e = Bt(e, void 0, !0), { originReactComponent: t, setup: function(r, o) {
    var i, a, n, s;
    if (!e.isSlots) return i = {}, a = Xt({}), n = te(), typeof (s = e.useInjectPropsFromWrapper || t.__veauryInjectPropsFromWrapper__) == "function" && (typeof (s = s.call(n.proxy, r)) != "function" ? (Object.assign(a, s), i.__veauryInjectedProps__ = a) : n.proxy.__veauryInjectedComputed__ = s), i;
  }, data: function() {
    return { VEAURY_Portals: [] };
  }, created: function() {
    this.__veauryPortalKeyPool__ = [], this.__veauryMaxPortalCount__ = 0;
  }, computed: { __veauryInjectedProps__: function() {
    var r;
    return (r = this.__veauryInjectedComputed__) == null ? void 0 : r.call(this);
  } }, render: function() {
    var r = B(e.react.componentWrap, l({ ref: "react" }, e.react.componentWrapAttrs || {}), this.VEAURY_Portals.map(function(o) {
      return (0, o.Portal)(B, o.key);
    }));
    return this.__veauryCheckReactSlot__(this.$slots), r;
  }, methods: { __veauryCheckReactSlot__: function(r) {
    var o = this;
    function i(a, n, s) {
      return n[s] && (a[s] = n[s], 1);
    }
    L(r) === "object" && r != null && (r instanceof Array ? r.forEach(function(a) {
      o.__veauryCheckReactSlot__(a.children);
    }) : Object.keys(r).forEach(function(c) {
      var n, s, c = r[c];
      if (typeof c == "function") {
        try {
          n = c.apply(o, c.__reactArgs || [{}]);
        } catch {
          return;
        }
        (c.__trueChildren = n).forEach(function(u) {
          u.children && o.__veauryCheckReactSlot__(u.children);
        }), n.length !== 1 || i(c, n = n[0], "reactSlot") || i(c, n, "reactFunction") || n.type !== Dt || ((s = n.children) == null ? void 0 : s.length) !== 1 || i(c, s = n.children[0], "reactSlot") || i(c, s, "reactFunction");
      }
    }));
  }, __veauryPushVuePortal__: function(r) {
    var o = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    this.VEAURY_Portals.push({ Portal: r, key: o });
  }, __veauryRemoveVuePortal__: function(r) {
    var o, i = this.VEAURY_Portals.find(function(a, n) {
      if (a.Portal === r) return o = n, !0;
    });
    this.__veauryPortalKeyPool__.push(i.key), this.VEAURY_Portals.splice(o, 1);
  }, __veauryGetScopeSlot__: function(r, o, i) {
    var a = this;
    function n(s) {
      function c() {
        for (var u, p = this, d = arguments.length, y = new Array(d), v = 0; v < d; v++) y[v] = arguments[v];
        return r.reactFunction ? r.reactFunction.apply(this, y) : e.defaultSlotsFormatter ? ((u = r.apply(this, y)).__top__ = a, (u = e.defaultSlotsFormatter(u, a.__veauryVueInReactCall__, o)) instanceof Array || -1 < L(u).indexOf("string", "number") ? u = pt(u) : L(u) === "object" && (u = l({}, u)), u) : ut(s(function() {
          return r.apply(p, y);
        }), l(l({}, e), {}, { isSlots: !0, wrapInstance: a })).render();
      }
      return e.pureTransformer && i ? c.vueFunction = i : c.vueFunction = r, c;
    }
    return n.__scopedSlot = !0, n;
  }, __veaurySyncUpdateProps__: function(r) {
    this.__veauryReactInstance__ && this.__veauryReactInstance__.setState(r);
  }, __veauryMountReactComponent__: function(r, o) {
    var i = arguments, a = this;
    return de(Q().mark(function n() {
      var s, c, u, p, d, y, v, b, h, I, V, O, C, R, S, N, F;
      return Q().wrap(function(P) {
        for (; ; ) switch (P.prev = P.next) {
          case 0:
            if (s = 2 < i.length && i[2] !== void 0 ? i[2] : {}, c = {}, u = [], (b = a.$.vnode.scopeId) && (c[b] = "", u.push(b)), p = {}, d = {}, r && (o == null || !o.slot)) {
              P.next = 18;
              break;
            }
            v = Q().mark(function x(j) {
              var A;
              return Q().wrap(function(f) {
                for (; ; ) switch (f.prev = f.next) {
                  case 0:
                    if (a.$slots.hasOwnProperty(j) && a.$slots[j] != null) {
                      f.next = 2;
                      break;
                    }
                    return f.abrupt("return", 0);
                  case 2:
                    if ((A = e.react.vueNamedSlotsKey.find(function(_) {
                      return j.indexOf(_) === 0;
                    })) || j === "default") return A = j.replace(new RegExp("^".concat(A)), ""), p[A] = a.$slots[j], p[A].__slot = !0, f.abrupt("return", 0);
                    f.next = 8;
                    break;
                  case 8:
                    d[j] = a.__veauryGetScopeSlot__(a.$slots[j], u, (A = a.$.vnode) == null || (A = A.children) == null ? void 0 : A[j]);
                  case 9:
                  case "end":
                    return f.stop();
                }
              }, x);
            }), P.t0 = Q().keys(a.$slots || {});
          case 10:
            if ((P.t1 = P.t0()).done) {
              P.next = 18;
              break;
            }
            return b = P.t1.value, P.delegateYield(v(b), "t2", 13);
          case 13:
            if (P.t2 === 0) return P.abrupt("continue", 10);
            P.next = 16;
            break;
          case 16:
            P.next = 10;
            break;
          case 18:
            if ((!r || o != null && o.slot) && (h = l({}, p), y = h.default, delete h.default), a.__veauryLast__ = a.__veauryLast__ || {}, a.__veauryLast__.slot = a.__veauryLast__.slot || {}, a.__veauryLast__.attrs = a.__veauryLast__.attrs || {}, I = { slot: function() {
              a.__veauryLast__.slot = l(l(l({}, y ? { children: y } : { children: null }), h), d);
            }, attrs: function() {
              a.__veauryLast__.attrs = a.$attrs;
            } }, o && Object.keys(o).forEach(function(x) {
              return I[x]();
            }), r) {
              P.next = 64;
              break;
            }
            if (a.__reactBoundedPromise__ = new Promise(function(x) {
              V = x;
            }), a.__reactBoundedPromise__.resolve = V, I.slot(), I.attrs(), R = Ie(t, e, a), O = G(R, Z({}, a.$attrs, a.__veauryInjectedProps__, { children: y }, h, d, a.$attrs.class ? { className: a.$attrs.class } : {}, c, { hashList: u }, a.$attrs.style ? { style: a.$attrs.style } : {}, { ref: function(x) {
              a.__veauryReactInstance__ = x, a.__reactBoundedPromise__.resolve(!0);
            } })), C = a.$refs.react, R = e.wrapInstance) {
              P.next = 47;
              break;
            }
            S = a.$parent;
          case 35:
            if (S) {
              if (S.parentReactWrapperRef) return R = S.parentReactWrapperRef, P.abrupt("break", 45);
              P.next = 39;
            } else P.next = 45;
            break;
          case 39:
            if (S.reactWrapperRef) return R = S.reactWrapperRef, P.abrupt("break", 45);
            P.next = 42;
            break;
          case 42:
            S = S.$parent, P.next = 35;
            break;
          case 45:
            P.next = 49;
            break;
          case 47:
            (R = e.wrapInstance).__veauryVueWrapperRef__ = a;
          case 49:
            if (R) return a.parentReactWrapperRef = R, a.reactPortal = function() {
              return ue(O, C);
            }, R.pushReactPortal(a.reactPortal), P.abrupt("return");
            P.next = 54;
            break;
          case 54:
            if (17 < dt) return rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED !== void 0 && (rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = !0), N = e.react.createRoot || rt.createRoot, 18 < dt && !N && console.warn("'react-dom 19' no longer supports dynamically determining whether to use 'render' or 'createRoot'. In order to be compatible with 'react-dom 17' and previous versions, you need to manually configure 'createRoot' in the veaury configuration."), a.__veauryReactApp__ = N(C), a.__veauryReactApp__.render(O), P.abrupt("return");
            P.next = 61;
            break;
          case 61:
            rt.render(O, C), P.next = 71;
            break;
          case 64:
            return P.next = 66, a.__reactBoundedPromise__;
          case 66:
            F = function() {
              a.__veauryReactInstance__.setState(function(x) {
                return Object.keys(x).forEach(function(j) {
                  e.isSlots && j === "children" || delete x[j];
                }), l(l(l(l({}, a.__veauryCache__), a.__veauryInjectedProps__), !e.isSlots && a.__veauryLast__.slot), a.__veauryLast__.attrs);
              }), a.__veauryCache__ = null;
            }, !a.microTaskUpdate || a.__veauryCache__ || a.$nextTick(function() {
              F(), a.microTaskUpdate = !1;
            }), a.macroTaskUpdate && (clearTimeout(a.updateTimer), a.updateTimer = setTimeout(function() {
              clearTimeout(a.updateTimer), F(), a.macroTaskUpdate = !1;
            })), a.__veauryCache__ = l(l({}, a.__veauryCache__ || {}), l(l(l(l({}, s), a.$attrs.class ? { className: a.$attrs.class } : {}), l({}, c)), {}, { hashList: u }, a.$attrs.style ? { style: a.$attrs.style } : {})), a.macroTaskUpdate || a.microTaskUpdate || F();
          case 71:
          case "end":
            return P.stop();
        }
      }, n);
    }))();
  } }, mounted: function() {
    var r = this;
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ = !0, Promise.resolve().then(function() {
      r.__VEAURY_IGNORE_STRANGE_UPDATE__ = !1;
    }), clearTimeout(this.updateTimer), this.__veauryMountReactComponent__();
  }, beforeUnmount: function() {
    var r;
    clearTimeout(this.updateTimer), Se(this.$refs.react), this.reactPortal ? (r = this.parentReactWrapperRef) != null && r.removeReactPortal(this.reactPortal) : 17 < dt ? (r = this.__veauryReactApp__) != null && r.unmount() : rt.unmountComponentAtNode(this.$refs.react), we();
  }, updated: function() {
    this.__VEAURY_IGNORE_STRANGE_UPDATE__ || this.__veauryMountReactComponent__(!0, { slot: !0 });
  }, inheritAttrs: !1, watch: { $attrs: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 }, __veauryInjectedProps__: { handler: function() {
    this.__veauryMountReactComponent__(!0, { attrs: !0 });
  }, deep: !0 } } };
}
var Ve = /* @__PURE__ */ new Set(["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onChange", "onInput", "onInvalid", "onReset", "onSubmit", "onError", "onLoad", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onGotPointerCapture", "onLostPointerCapture", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd", "onToggle"]);
function Ae(t, e) {
  for (var r = (t = e = (t == null ? void 0 : t._reactInternals) || (t == null ? void 0 : t._reactInternalFiber) || e) == null ? void 0 : t.return; r; ) {
    var o = r.stateNode;
    if (o = (o == null ? void 0 : o.parentVueWrapperRef) || (o == null ? void 0 : o.__veauryVueWrapperRef__)) return o;
    r = r.return;
  }
}
function It(t, e, r) {
  var o = {};
  return r.forEach(function(i) {
    o[i] = !0;
  }), t[(e === "modelValue" ? "model" : e) + "Modifiers"] = o;
}
function Vt(t, e, r) {
  var o = this, i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "v-model";
  if (!(e instanceof Array)) throw Error("[error:veaury] Parameter type error from '".concat(i, "', a single v-model is an array, such as [val, setter, argumentKey, modifiers] or [val, setter, modifiers]"));
  if (typeof e[1] != "function") throw Error("[error:veaury] Parameter type error from '".concat(i, "', a single v-model is an array, the second element of the array must be a setter function"));
  var a = e[1], n = (typeof e[2] == "string" ? (r = e[2], e[3] instanceof Array && It(t, r, e[3])) : e[2] instanceof Array && It(t, r, e[2]), t["onUpdate:" + r]);
  t["onUpdate:" + r] = typeof n == "function" ? function() {
    for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
    n.apply(o, c), a.apply(o, c);
  } : a, t[r] = e[0];
}
function gt(t) {
  var e = this, r = {}, o = l({}, t);
  return Object.keys(t).forEach(function(i) {
    var a, n = i.match(/^onUpdate-([^-]+)/);
    if (n) delete o[i], a = r["onUpdate:".concat(n[1])], r["onUpdate:".concat(n[1])] = typeof a == "function" ? function() {
      for (var c = arguments.length, u = new Array(c), p = 0; p < c; p++) u[p] = arguments[p];
      a.apply(e, u), t[i].apply(e, u);
    } : t[i];
    else if (n = i.match(/^v-model($|:([^:]+)|-([^:]+))/)) n = n[2] || n[3] || "modelValue", Vt(r, t[i], n), delete o[i];
    else if (i === "v-models") {
      if (L(t[i]) !== "object" || t[i] instanceof Array) throw Error("[error:veaury] The parameter 'v-models' must be an object type, such as {[argumentKey]: singleVModel}");
      var s = t[i];
      Object.keys(s).forEach(function(c) {
        Vt(r, s[c], c, "v-models");
      }), delete o[i];
    }
  }), l(l({}, o), r);
}
var ft = ot(function t() {
  nt(this, t), tt(this, "pool", /* @__PURE__ */ new Set());
}, [{ key: "getRandomId", value: function(t) {
  var e = t + (Math.random() + "").substr(2);
  return this.pool.has(e) ? this.getRandomId(t) : (this.pool.add(e), e);
} }]);
function Ht(o, e) {
  var r, o = o.node;
  if (typeof o == "function" && (o = o()), (r = e) != null && r.current || typeof e == "function" || (r = e) != null && r.toString().match(/^function/) || (e = null), -1 < ["string", "number"].indexOf(L(o))) return o;
  if (o instanceof Array) {
    if (o.length !== 1) return o;
    o = o[0];
  }
  return l(l({}, o), {}, { ref: e });
}
var je = wt(Ht);
function bt(t) {
  return B(je, { node: function() {
    return t.node;
  } });
}
bt.originReactComponent = St(Ht);
var xe = ["component", "node"], Te = ["component", "$slots", "children", "class", "style"], $e = ["className", "classname"], z = "veaury-options", At = new ft();
function Le(t, e) {
  var r;
  return t = typeof t == "string" && e ? (e = e.$) == null || (e = e.appContext) == null || (e = e.app) == null || (r = e.component) == null ? void 0 : r.call(e, t) : t;
}
function jt(t) {
  if (t) return Object.keys(t).forEach(function(e) {
    var r = t[e];
    r != null && (typeof r == "function" ? (t[e] = r, t[e].reactFunction = r) : (t[e] = function() {
      return r;
    }, t[e].reactSlot = r), r.vueFunction) && (t[e].vueFunction = r.vueFunction);
  }), t;
}
function We(t) {
  var e;
  return (e = t.node) == null ? void 0 : e.call(t);
}
var Pt = St(function(i, e) {
  var r, n = i.component, o = i.node, i = M(i, xe);
  if (n == null && o == null) return null;
  if (o != null) {
    if (o.$$typeof || typeof o == "string" || typeof o == "number") return o;
    typeof o != "function" && (r = o, o = function() {
      return r;
    });
  }
  var a, n = n || We, s = Bt(i[z] || {}, void 0, !0), c = s.useInjectPropsFromWrapper || n.__veauryInjectPropsFromWrapper__;
  return s.isSlots || typeof c == "function" && (a = c(i)), G(Ne, Z({}, l(l(l(l({ component: n }, o ? { node: o } : {}), i), a), {}, tt({}, z, s)), { ref: e }));
}), Ne = (() => {
  function t(e) {
    var r;
    return nt(this, t), (r = ct(this, t, [e])).state = { portals: [] }, r.__veauryPortalKeyPool__ = [], r.__veauryMaxPortalCount__ = 0, r.__veauryCurrentVueComponent__ = e.component, r.__veauryCreateVueInstance__ = r.__veauryCreateVueInstance__.bind(r), r.__veauryVueComponentContainer__ = r.createVueComponentContainer(), r;
  }
  return lt(t, st), ot(t, [{ key: "pushReactPortal", value: function(e) {
    var r = this.state.portals, o = this.__veauryPortalKeyPool__.shift() || this.__veauryMaxPortalCount__++;
    r.push({ Portal: e, key: o }), this.setState({ portals: r });
  } }, { key: "removeReactPortal", value: function(e) {
    var r, o = this.state.portals, i = o.find(function(a, n) {
      if (a.Portal === e) return r = n, !0;
    });
    this.__veauryPortalKeyPool__.push(i.key), o.splice(r, 1), this.__veauryVueRef__ && this.setState({ portals: o });
  } }, { key: "createVueComponentContainer", value: function() {
    var e = this, r = {}, o = this.props[z];
    return o.isSlots ? (Object.keys(this.props).forEach(function(i) {
      Ve.has(i) && typeof e.props[i] == "function" && (r[i] = e.props[i]);
    }), o.vue.slotWrapAttrs && (r = l(l({}, r), o.vue.slotWrapAttrs))) : o.vue.componentWrapAttrs && (r = l(l({}, r), o.vue.componentWrapAttrs)), o.vue.componentWrapHOC(G("div", Z({}, o.vue.componentWrapAttrs, { ref: this.__veauryCreateVueInstance__, key: null })), r);
  } }, { key: "shouldComponentUpdate", value: function(e, r, o) {
    var i, a, n, s, c = this;
    return e === this.props || (i = e.component, a = (a = e["v-slots"]) === void 0 ? null : a, n = e.children, e = M(e, ["component", z, "v-slots", "children"].map(it)), this.__veauryCurrentVueComponent__ !== i && this.updateVueComponent(i), i.__fromReactSlot) || this.__veauryVueInstance__ && (n && (a = a || {}, L(n) !== "object" || n instanceof Array || n.$$typeof ? a.default = n : a = n), (s = this.__veauryVueInstance__.$data.$slots) && Object.keys(s).forEach(function(u) {
      delete s[u];
    }), a && (s || (this.__veauryVueInstance__.$data.$slots = {}), Object.assign(this.__veauryVueInstance__.$data.$slots, jt(a))), Object.keys(this.__veauryVueInstance__.$data).forEach(function(u) {
      u !== "$slots" && delete c.__veauryVueInstance__.$data[u];
    }), this.__veauryVueInstance__) && Object.assign(this.__veauryVueInstance__.$data, gt(e)), !0;
  } }, { key: "componentWillUnmount", value: function() {
    this.vuePortal ? this.parentVueWrapperRef.__veauryRemoveVuePortal__(this.vuePortal) : (this.__veauryVueInstance__ && this.__veauryVueInstance__.$.appContext.app.unmount(), At.pool.delete(this.__veauryVueTargetId__), this.vueCreated = !1);
  } }, { key: "componentDidMount", value: function() {
    this.__veauryCreateVueInstance__(this.vueContainerElement);
  } }, { key: "__veauryCreateVueInstance__", value: function(e) {
    var r, o, i, a, n, s, c, u, p = this;
    function d(y) {
      this.__veauryVueInstance__ || (this.__veauryVueInstance__ = y);
    }
    this.vueCreated || (this.vueCreated = !0, (r = this).vueContainerElement = e, (i = this.props).component, o = i[z], c = i.children, u = (u = i["v-slots"]) === void 0 ? {} : u, i = M(i, ["component", z, "children", "v-slots"].map(it)), c && (L(c) !== "object" || c instanceof Array || c.$$typeof ? u.default = c : u = c), (u = jt(u)) && (i.$slots = u), d = d.bind(this), a = l({}, gt(i)), n = { data: function() {
      return o.isSlots ? { children: r.__veauryCurrentVueComponent__.originVNode } : a;
    }, created: function() {
      this.reactWrapperRef = r, d(this);
    }, methods: { reactInVueCall: function(y) {
      return 2 < arguments.length && arguments[2] && y && y[0] ? y.map(function(v, b) {
        return B(bt, { node: v, key: (v == null || (v = v.data) == null ? void 0 : v.key) || b });
      }) : B(bt, { node: y });
    }, getScopedSlots: function(y, v) {
      var b, h = this, I = (this.getScopedSlots.__scopeSlots || (this.getScopedSlots.__scopeSlots = {}), l({}, v));
      for (b in I) ((V) => {
        var O, C;
        !I.hasOwnProperty(V) || (O = I[V]) == null || (I[V] = (C = O, function() {
          for (var R, S, N, F, P = arguments.length, x = new Array(P), j = 0; j < P; j++) x[j] = arguments[j];
          return C.vueFunction ? C.vueFunction.apply(h, x) : (N = C.reactFunction, N = C.reactSlot || (N == null ? void 0 : N.apply(h, x)), F = o.defaultSlotsFormatter, (R = h.getScopedSlots.__scopeSlots[V]) != null && (R = R.component) != null && (R = R.ctx) != null && R.__veauryReactInstance__ ? (S = h.getScopedSlots.__scopeSlots[V], Promise.resolve().then(function() {
            var A;
            (A = S) != null && (A = A.component) != null && (A = A.ctx) != null && (A = A.__veauryReactInstance__) != null && A.setState({ children: C.apply(h, x) });
          })) : (S = F && N ? [F(N, h.reactInVueCall)] : y(wt(function() {
            return C.apply(h, x);
          }, l(l({}, o), {}, { isSlots: !0, wrapInstance: r }))), h.getScopedSlots.__scopeSlots[V] = S), C.reactFunction ? S.reactFunction = C.reactFunction : C.reactSlot && (S.reactSlot = C.reactSlot), S);
        }), I[V].reactFunction = O);
      })(b);
      return I;
    } }, mounted: function() {
      e.removeAttribute("id"), r.__veauryVueRef__ = this.$refs.use_vue_wrapper, this.$refs.use_vue_wrapper.reactWrapperRef = r;
    }, beforeUnmount: function() {
      r.__veauryVueRef__ = null, this.$refs.use_vue_wrapper.reactWrapperRef = null;
    }, render: function() {
      var y = this, O = this.$data, I = (O.component, O.$slots), v = O.class, b = O.style, O = M(O, Te), h = this.getScopedSlots(B, l({}, I)), I = O.className, V = O.classname, O = M(O, $e), C = {};
      return Object.keys(h).forEach(function(R) {
        var S = h[R];
        C[R] = typeof S == "function" ? S : function() {
          return S;
        };
      }), B(Le(r.__veauryCurrentVueComponent__, this), l(l(l(l({}, O), v || I || V ? { class: v || I || V } : {}), b ? { style: b } : {}), {}, { ref: "use_vue_wrapper" }), l({}, o.isSlots && this.children ? { default: typeof this.children == "function" ? this.children : function() {
        return y.children;
      } } : l({}, C)));
    } }, e && (s = At.getRandomId("__vue_wrapper_container_"), e.id = s, this.__veauryVueTargetId__ = s, (c = o.wrapInstance) ? (c = o.wrapInstance).reactWrapperRef = r : c = Ae(this), c && document.getElementById(s) ? (this.parentVueWrapperRef = c, this.vuePortal = function(y, v) {
      return y(ee, { to: "#" + s, key: s }, [y(Object.assign(n, { router: p._router }))]);
    }, c.__veauryPushVuePortal__(this.vuePortal)) : (u = re(n), typeof o.beforeVueAppMount == "function" && o.beforeVueAppMount(u), this.__veauryVueInstance__ = u.mount(e))));
  } }, { key: "updateVueComponent", value: function(e) {
    this.__veauryVueInstance__ && (e.__fromReactSlot ? this.__veauryVueInstance__.children = typeof e.originVNode == "function" ? e.originVNode : function() {
      return e.originVNode;
    } : (this.__veauryCurrentVueComponent__ = e, this.__veauryVueInstance__.$forceUpdate()));
  } }, { key: "render", value: function() {
    return G(this.__veauryVueComponentContainer__, { portals: this.state.portals });
  } }]);
})();
function ut(t) {
  var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || console.warn("Component must be passed in applyVueInReact!"), t.__esModule && t.default && (t = t.default), St(function(o, i) {
    return G(Pt, Z({}, o, { component: t, ref: i }, tt({}, z, e)));
  }));
  return r.originVueComponent = t, r;
}
new ft();
function Fe(t) {
  var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, r = e.globalName, o = wt(t, e.combinedOption || {});
  return o.install = function(i) {
    var a = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).globalName;
    return r && i.component(a || r, o), o;
  }, o;
}
function xt(t) {
  return t.replace(/-(\w)/g, function(e, r) {
    return r.toUpperCase();
  });
}
function _t(t) {
  var e;
  return t ? typeof t == "string" ? (t = t.trim()).split(/\s*;\s*/).reduce(function(r, o) {
    return o && (o = o.split(/\s*:\s*/)).length === 2 && Object.assign(r, tt({}, xt(o[0]), o[1])), r;
  }, {}) : L(t) === "object" ? (e = {}, Object.keys(t).forEach(function(r) {
    e[xt(r)] = t[r];
  }), e) : {} : {};
}
function yt(t) {
  return t ? t instanceof Array ? t : typeof t == "string" ? (t = t.trim()).split(/\s+/) : L(t) === "object" ? Object.keys(t).filter(function(e) {
    return !!t[e];
  }) : [] : [];
}
var De = ["ref"];
function Ue(t, e, r, o, i) {
  var a = t.props || {}, a = (a.ref, M(a, De)), n = {}, s = (Object.keys(t.children || {}).forEach(function(p) {
    var d = t.children[p], y = Kt.react.vueNamedSlotsKey.find(function(v) {
      return p.indexOf(v) === 0;
    });
    y || p === "default" ? (y = p.replace(new RegExp("^".concat(y)), "").replace(/^default$/, "children"), n[y] = o.call(t.__top__, d(), r, i)) : typeof d == "function" && (n[p] = function() {
      for (var v = arguments.length, b = new Array(v), h = 0; h < v; h++) b[h] = arguments[h];
      return d.__reactArgs = b, o(d.apply(this, b), r, i);
    });
  }), {}), c = _t(a.style), u = Array.from(new Set(yt(a.class))).join(" ");
  return 0 < Object.keys(c).length && (s.style = c), u !== "" && (s.className = u), Object.assign(a, l(l({}, s), n)), delete a.class, typeof a.ref_for == "boolean" && delete a.ref_for, a;
}
function Tt(t) {
  return t.type === oe;
}
new ft();
function qt(t, e) {
  var r;
  return 0 < ((r = t.dirs) == null ? void 0 : r.length) ? G(Me, { vnode: t }, e) : e;
}
var Me = (() => {
  function t(e) {
    var r;
    return nt(this, t), (r = ct(this, t, [e])).state = { prevVnode: null, savedDirectives: [], ref: null, prevProps: e }, r;
  }
  return lt(t, st), ot(t, [{ key: "findDirectiveName", value: function(e) {
    var r = e.dir, o = -1;
    return [this.state.savedDirectives.find(function(i, a) {
      if (i.dir === r) return o = a, !0;
    }), o];
  } }, { key: "doDirective", value: function() {
    var e = this, a = this.state, r = a.savedDirectives;
    if (!(o = a.ref)) {
      for (var o = (this._reactInternals || this._reactInternalFiber).child; o && o.tag !== 5; ) o = o.child;
      if (!o) return;
      o = o.stateNode;
    }
    var i = this.props.vnode, a = i.dirs;
    a && (a.forEach(function(n) {
      var s, c, u, p, d, y, v;
      n && (v = (s = Et(e.findDirectiveName(n), 2))[0], s = s[1], c = (d = n.dir).created, u = d.beforeMount, p = d.mounted, y = d.beforeUpdate, d = d.updated, v ? (r[s] = l(l(l({}, v), n), {}, { oldValue: v.oldValue }), v = [o, r[s], i, e.state.prevVnode], y != null && y.apply(null, v), d != null && d.apply(null, v), r[s].oldValue = n.value) : (r.push(n), y = [o, n, i, null], c != null && c.apply(null, y), u != null && u.apply(null, y), p != null && p.apply(null, y), n.oldValue = n.value));
    }), this.setState({ prevVnode: l({}, i), savedDirectives: r, ref: o }));
  } }, { key: "componentDidMount", value: function() {
    this.doDirective();
  } }, { key: "componentDidUpdate", value: function(e) {
    e.vnode !== this.props.vnode && this.doDirective();
  } }, { key: "componentWillUnmount", value: function() {
    var e = this, r = this.props.vnode, n = this.state, o = n.savedDirectives, i = n.ref, a = n.prevVnode, n = r.dirs;
    n && (n.forEach(function(s) {
      var c, u, p, d;
      s && (c = (d = Et(e.findDirectiveName(s), 2))[0]) && (u = (p = s.dir).beforeUnmount, p = p.unmounted, o[d[1]] = l(l({}, c), s), d = [i, c, r, a], u != null && u.apply(null, d), p != null) && p.apply(null, d);
    }), this.setState({ prevVnode: l({}, r), savedDirectives: o }));
  } }, { key: "render", value: function() {
    var e = this.props;
    return e.vnode, e.children;
  } }]);
})();
function Ge(t, e) {
  var r;
  return typeof t == "function" && (r = t.toString(), t.prototype !== void 0) && t.prototype.constructor === t && (r.slice(0, 5) == "class" || 2 <= Object.getOwnPropertyNames(t.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(r) && (!(!e || !/^function\s+[A-Z]/.test(r)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(r) && (!(e && !/classCallCheck\(this/.test(r)) || /^function\sdefault_\d+\s*\(/.test(r))));
}
function zt(t, e) {
  var r, o, i, a;
  return typeof ((i = t.type) == null ? void 0 : i.originReactComponent) != "function" || Ge((i = t.type) == null ? void 0 : i.originReactComponent) ? ((i = t.ref) != null && i.k ? (r = (i = t.ref) == null ? void 0 : i.k, o = (i = t.ref) == null ? void 0 : i.r) : r = (i = t.ref) == null ? void 0 : i.r, r && typeof r == "string" && (a = r, r = function(n) {
    var s;
    (s = t.ref) != null && (s = s.i) != null && s.refs && ((s = l({}, t.ref.i.refs))[a] = n, t.ref.i.refs = s), o ? o.value = n : t.ref.i.setupState && a in t.ref.i.setupState && (t.ref.i.setupState[a] = n), n && (n.__syncUpdateProps = function() {
      e.__top__ && (t.__extraData = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, e.__top__.__syncUpdateProps({}));
    });
  }, r = new Proxy(r, { get: function(n, s) {
    return n[s];
  }, set: function(n, s, c) {
    var u;
    return (u = t.ref) != null && (u = u.i) != null && u.refs && a in ((u = t.ref) == null || (u = u.i) == null ? void 0 : u.refs) && ((u = l({}, t.ref.i.refs))[s] = c, t.ref.i.refs = u), c;
  } })), r) : null;
}
function Rt(t, e) {
  return !e || e instanceof Array && e.length === 0 || (typeof e == "string" && (e = [e]), (t = l({}, t)).props = l({}, t.props), e.forEach(function(r) {
    t.props[r] = "";
  })), t;
}
var Ke = ["style", "class"];
function $t(t, e, r, o, i, a, n) {
  var s, c, u;
  return e === "all" || e instanceof Array || (e = e ? [e] : []), t.type === Dt ? i.call(n, t.children, r, a) : typeof t.type == "string" && (e === "all" || -1 < e.indexOf(t.type)) ? (e = zt(t), u = (c = t.props || {}).style, s = c.class, c = l(l({}, M(c, Ke)), {}, { style: _t(u), className: Array.from(new Set(yt(s))).join(" ") }, e ? { ref: e } : {}), (u = t.children || c.children) && ((u = -1 < ["string", "number"].indexOf(L(u)) ? [u] : pt(u)).__top__ = n), qt(t, Rt(Nt.createElement(t.type, c, i.call(n, u, r, a)), t.scopeId))) : r([t], null, o);
}
function Be() {
  var t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, e = 1 < arguments.length ? arguments[1] : void 0, r = 2 < arguments.length ? arguments[2] : void 0;
  return r.__syncUpdateForPureReactInVue && Object.keys(r.__syncUpdateForPureReactInVue).map(function(o) {
    var i;
    t[o] && typeof t[o] == "function" && e.__top__ && (i = t[o], t[o] = function() {
      for (var a = arguments.length, n = new Array(a), s = 0; s < a; s++) n[s] = arguments[s];
      e.__extraData = r.__syncUpdateForPureReactInVue[o].apply(this, n), e.__top__.__veaurySyncUpdateProps__({}), e.__top__.macroTaskUpdate = !0, i.apply(this, n), e.__top__ && Promise.resolve().then(function() {
        e.__extraData = null, e.__top__.__veauryMountReactComponent__(!0);
      });
    });
  }), t;
}
function Lt(t, e, r) {
  return !((t = t instanceof Array && t.length === 1 ? t[0] : t) instanceof Array) && t.key == null && 1 < e.length && ((t = l({}, t)).key = "_key_".concat(r)), t;
}
function Zt(o) {
  var e = o.reactComponents, r = o.domTags, o = o.division, i = o === void 0 || o;
  return function a(n, s, c) {
    var u;
    return n && n.forEach ? (n.__top__ || (n.__top__ = this), u = [], n.forEach(function(p, d) {
      if (p && p.type !== ne) {
        if ((b = p.type) == null || !b.originReactComponent) return p.$$typeof || typeof p == "string" || typeof p == "number" ? void u.push(p) : Tt(p) ? void (p.children.trim() !== "" && u.push(p.children.trim())) : void (p.type && (Rt(b = Lt($t(p, r, s, i, a, c, n.__top__), n, d), p.scopeId), u.push(b)));
        var y, v, b = p.type.originReactComponent;
        Rt(y = Lt(y = (e = e === "all" || e instanceof Array ? e : [e]) === "all" || -1 < e.indexOf(b) ? (p.__top__ = n.__top__, y = Ue(p, "_key_".concat(d), s, a, c), v = zt(p, n), p.children && (p.children.__top__ = n.__top__), qt(p, Nt.createElement(b, l(l(l({}, Be(y, p, b)), p.__extraData || {}), v ? { ref: v } : {})))) : Tt(p) ? p.text : $t(p, r, s, i, a, c), n, d), p.scopeId), u.push(y);
      }
    }), u.length === 1 ? u[0] : u) : n;
  };
}
var vt = Zt({ reactComponents: "all", domTags: "all" });
function at(t, e) {
  return Fe(t, { combinedOption: l({ pureTransformer: !0, defaultSlotsFormatter: vt, defaultPropsFormatter: function(r, o, i) {
    var a = {};
    return Object.keys(r).forEach(function(n) {
      var s = r[n];
      s && (s.vueFunction ? (a[n] = function() {
        for (var c = arguments.length, u = new Array(c), p = 0; p < c; p++) u[p] = arguments[p];
        return vt(s.vueFunction.apply(this, u), o, i);
      }, Object.defineProperty(a[n], "length", { get: function() {
        return s.vueFunction.length;
      } })) : s.vueSlot && (a[n] = vt(s.vueSlot, o, i)));
    }), Object.assign(r, a);
  } }, e) });
}
Zt({ reactComponents: "all", domTags: "all" });
var Ye = ["ref", "children", "v-slots"];
function He(c, e, r, o, i) {
  var c = c.props || {}, u = (c.ref, c.children), n = c["v-slots"], a = n === void 0 ? {} : n, n = M(c, Ye), s = (u && (L(u) !== "object" || u instanceof Array || u.$$typeof ? a.default = u : a = u), null), c = (Object.keys(a || {}).forEach(function(d) {
    var y = a[d];
    (s = s || {})[d] = function() {
      if (typeof y == "function") {
        for (var v = arguments.length, b = new Array(v), h = 0; h < v; h++) b[h] = arguments[h];
        y = y.apply(this, b);
      }
      return o(y, r, i);
    };
  }), {}), u = _t(n.style), p = Array.from(new Set(yt(n.className))).join(" ");
  return 0 < Object.keys(u).length && (c.style = u), p !== "" && (c.class = p), Object.assign(n, l({}, c)), delete n.className, { props: n = gt(n), slots: s };
}
function Jt(t) {
  var e = t.ref;
  if (e) return L(e) === "object" ? function(r) {
    t.ref.current = r;
  } : typeof e == "function" ? e : void 0;
}
var qe = ["style", "class", "children"];
function Wt(t, e, r, o, i, a) {
  var n, s, c, u;
  return e === "all" || e instanceof Array || (e = e ? [e] : []), t.type === Ft ? i((n = t.props) == null ? void 0 : n.children, r) : typeof t.type == "string" && (e === "all" || -1 < e.indexOf(t.type)) ? (n = Jt(t), u = (e = t.props || {}).style, c = e.class, s = e.children, e = M(e, qe), c = Array.from(new Set(yt(c))).join(" "), u = _t(u), e = l(l(l(l({}, e), Object.keys(u).length === 0 ? {} : { style: u }), c ? { className: c } : {}), n ? { ref: n } : {}), Object.keys(e).length === 0 && (e = null), (u = s) && ((u = -1 < ["string", "number"].indexOf(L(u)) ? [u] : u instanceof Array ? pt(u) : l({}, u)).__top__ = a), B(t.type, e, i(u, r))) : r([t], null, o);
}
function Qt(o) {
  var e = o.vueComponents, r = o.domTags, o = o.division, i = o === void 0 || o;
  return function a(n, s) {
    if (n == null) return n;
    n instanceof Array || (n = [n]);
    var c = [];
    return n.forEach(function(u, p) {
      if (((d = u.type) == null || !d.originVueComponent) && u.type !== Pt) return u.__v_isVNode || typeof u == "string" || typeof u == "number" ? void c.push(u) : void (u.type && (d = Wt(u, r, s, i, a, n.__top__), c.push(d)));
      var d = u.type.originVueComponent;
      if (u.type === Pt) {
        if (!u.props.component) return void c.push(u.props.node);
        d = u.props.component, u = l({}, u);
        var y = l({}, u.props);
        delete y.component, u.props = y;
      }
      d = (e = e === "all" || e instanceof Array ? e : [e]) === "all" || -1 < e.indexOf(d) ? ((u = l({}, u)).__top__ = n.__top__, p = (y = He(u, "_key_".concat(p), s, a)).props, y = y.slots, Jt(u), u.children && (u.children.__top__ = n.__top__), B(d, l({}, p), y)) : Wt(u, r, s, i, a), c.push(d);
    }), (c = c.flat(1 / 0)).length === 1 ? c[0] : c;
  };
}
Qt({ vueComponents: "all", domTags: "all" });
Qt({ reactComponents: "all", domTags: "all" });
new ft();
const Xe = at(ce), tr = at(ie), er = at(se), rr = at(le), nr = at(pe);
export {
  tr as Fader,
  er as Keyboard,
  Xe as Knob,
  rr as Timeline,
  nr as Track,
  at as toVue
};
