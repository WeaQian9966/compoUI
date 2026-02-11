import ke, { useRef as le, useCallback as te, useState as Ge, useMemo as Be } from "react";
var be = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function Rr() {
  if (Ue) return ne;
  Ue = 1;
  var a = ke, s = Symbol.for("react.element"), l = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, j = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(w, v, x) {
    var p, S = {}, f = null, T = null;
    x !== void 0 && (f = "" + x), v.key !== void 0 && (f = "" + v.key), v.ref !== void 0 && (T = v.ref);
    for (p in v) i.call(v, p) && !m.hasOwnProperty(p) && (S[p] = v[p]);
    if (w && w.defaultProps) for (p in v = w.defaultProps, v) S[p] === void 0 && (S[p] = v[p]);
    return { $$typeof: s, type: w, key: f, ref: T, props: S, _owner: j.current };
  }
  return ne.Fragment = l, ne.jsx = R, ne.jsxs = R, ne;
}
var ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function wr() {
  return Xe || (Xe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ke, s = Symbol.for("react.element"), l = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), w = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), u = Symbol.iterator, k = "@@iterator";
    function y(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = u && e[u] || e[k];
      return typeof r == "function" ? r : null;
    }
    var _ = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        M("error", e, t);
      }
    }
    function M(e, r, t) {
      {
        var o = _.ReactDebugCurrentFrame, b = o.getStackAddendum();
        b !== "" && (r += "%s", t = t.concat([b]));
        var E = t.map(function(h) {
          return String(h);
        });
        E.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var V = !1, F = !1, G = !1, n = !1, N = !1, $;
    $ = Symbol.for("react.module.reference");
    function H(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === m || N || e === j || e === x || e === p || n || e === T || V || F || G || typeof e == "object" && e !== null && (e.$$typeof === f || e.$$typeof === S || e.$$typeof === R || e.$$typeof === w || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === $ || e.getModuleId !== void 0));
    }
    function U(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var b = r.displayName || r.name || "";
      return b !== "" ? t + "(" + b + ")" : t;
    }
    function X(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case l:
          return "Portal";
        case m:
          return "Profiler";
        case j:
          return "StrictMode";
        case x:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return X(r) + ".Consumer";
          case R:
            var t = e;
            return X(t._context) + ".Provider";
          case v:
            return U(e, e.render, "ForwardRef");
          case S:
            var o = e.displayName || null;
            return o !== null ? o : I(e.type) || "Memo";
          case f: {
            var b = e, E = b._payload, h = b._init;
            try {
              return I(h(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, ee = 0, ge, Ee, je, Re, we, xe, Te;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function ze() {
      {
        if (ee === 0) {
          ge = console.log, Ee = console.info, je = console.warn, Re = console.error, we = console.group, xe = console.groupCollapsed, Te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ee++;
      }
    }
    function Qe() {
      {
        if (ee--, ee === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ge
            }),
            info: O({}, e, {
              value: Ee
            }),
            warn: O({}, e, {
              value: je
            }),
            error: O({}, e, {
              value: Re
            }),
            group: O({}, e, {
              value: we
            }),
            groupCollapsed: O({}, e, {
              value: xe
            }),
            groupEnd: O({}, e, {
              value: Te
            })
          });
        }
        ee < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = _.ReactCurrentDispatcher, fe;
    function oe(e, r, t) {
      {
        if (fe === void 0)
          try {
            throw Error();
          } catch (b) {
            var o = b.stack.trim().match(/\n( *(at )?)/);
            fe = o && o[1] || "";
          }
        return `
` + fe + e;
      }
    }
    var de = !1, se;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      se = new Ze();
    }
    function Ce(e, r) {
      if (!e || de)
        return "";
      {
        var t = se.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      de = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = ue.current, ue.current = null, ze();
      try {
        if (r) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (D) {
              o = D;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (D) {
              o = D;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            o = D;
          }
          e();
        }
      } catch (D) {
        if (D && o && typeof D.stack == "string") {
          for (var d = D.stack.split(`
`), A = o.stack.split(`
`), C = d.length - 1, L = A.length - 1; C >= 1 && L >= 0 && d[C] !== A[L]; )
            L--;
          for (; C >= 1 && L >= 0; C--, L--)
            if (d[C] !== A[L]) {
              if (C !== 1 || L !== 1)
                do
                  if (C--, L--, L < 0 || d[C] !== A[L]) {
                    var K = `
` + d[C].replace(" at new ", " at ");
                    return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), typeof e == "function" && se.set(e, K), K;
                  }
                while (C >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        de = !1, ue.current = E, Qe(), Error.prepareStackTrace = b;
      }
      var Q = e ? e.displayName || e.name : "", B = Q ? oe(Q) : "";
      return typeof e == "function" && se.set(e, B), B;
    }
    function er(e, r, t) {
      return Ce(e, !1);
    }
    function rr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ie(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ce(e, rr(e));
      if (typeof e == "string")
        return oe(e);
      switch (e) {
        case x:
          return oe("Suspense");
        case p:
          return oe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return er(e.render);
          case S:
            return ie(e.type, r, t);
          case f: {
            var o = e, b = o._payload, E = o._init;
            try {
              return ie(E(b), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, Le = {}, Me = _.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var r = e._owner, t = ie(e.type, e._source, r ? r.type : null);
        Me.setExtraStackFrame(t);
      } else
        Me.setExtraStackFrame(null);
    }
    function tr(e, r, t, o, b) {
      {
        var E = Function.call.bind(re);
        for (var h in e)
          if (E(e, h)) {
            var d = void 0;
            try {
              if (typeof e[h] != "function") {
                var A = Error((o || "React class") + ": " + t + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              d = e[h](r, h, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              d = C;
            }
            d && !(d instanceof Error) && (ce(b), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, h, typeof d), ce(null)), d instanceof Error && !(d.message in Le) && (Le[d.message] = !0, ce(b), g("Failed %s type: %s", t, d.message), ce(null));
          }
      }
    }
    var nr = Array.isArray;
    function ve(e) {
      return nr(e);
    }
    function ar(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function or(e) {
      try {
        return Ne(e), !1;
      } catch {
        return !0;
      }
    }
    function Ne(e) {
      return "" + e;
    }
    function Pe(e) {
      if (or(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), Ne(e);
    }
    var Ae = _.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, De;
    function ir(e) {
      if (re.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function cr(e) {
      if (re.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lr(e, r) {
      typeof e.ref == "string" && Ae.current;
    }
    function ur(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function fr(e, r) {
      {
        var t = function() {
          De || (De = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var dr = function(e, r, t, o, b, E, h) {
      var d = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: h,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function vr(e, r, t, o, b) {
      {
        var E, h = {}, d = null, A = null;
        t !== void 0 && (Pe(t), d = "" + t), cr(r) && (Pe(r.key), d = "" + r.key), ir(r) && (A = r.ref, lr(r, b));
        for (E in r)
          re.call(r, E) && !sr.hasOwnProperty(E) && (h[E] = r[E]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (E in C)
            h[E] === void 0 && (h[E] = C[E]);
        }
        if (d || A) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && ur(h, L), A && fr(h, L);
        }
        return dr(e, d, A, b, o, Ae.current, h);
      }
    }
    var he = _.ReactCurrentOwner, $e = _.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = ie(e.type, e._source, r ? r.type : null);
        $e.setExtraStackFrame(t);
      } else
        $e.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Ke() {
      {
        if (he.current) {
          var e = I(he.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function hr(e) {
      return "";
    }
    var Fe = {};
    function _r(e) {
      {
        var r = Ke();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function We(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = _r(r);
        if (Fe[t])
          return;
        Fe[t] = !0;
        var o = "";
        e && e._owner && e._owner !== he.current && (o = " It was passed a child from " + I(e._owner.type) + "."), z(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), z(null);
      }
    }
    function Ie(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ve(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            me(o) && We(o, r);
          }
        else if (me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = y(e);
          if (typeof b == "function" && b !== e.entries)
            for (var E = b.call(e), h; !(h = E.next()).done; )
              me(h.value) && We(h.value, r);
        }
      }
    }
    function mr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === S))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = I(r);
          tr(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !_e) {
          _e = !0;
          var b = I(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            z(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    var Ye = {};
    function Ve(e, r, t, o, b, E) {
      {
        var h = H(e);
        if (!h) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = hr();
          A ? d += A : d += Ke();
          var C;
          e === null ? C = "null" : ve(e) ? C = "array" : e !== void 0 && e.$$typeof === s ? (C = "<" + (I(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, d);
        }
        var L = vr(e, r, t, b, E);
        if (L == null)
          return L;
        if (h) {
          var K = r.children;
          if (K !== void 0)
            if (o)
              if (ve(K)) {
                for (var Q = 0; Q < K.length; Q++)
                  Ie(K[Q], e);
                Object.freeze && Object.freeze(K);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(K, e);
        }
        if (re.call(r, "key")) {
          var B = I(e), D = Object.keys(r).filter(function(jr) {
            return jr !== "key";
          }), pe = D.length > 0 ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[B + pe]) {
            var Er = D.length > 0 ? "{" + D.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pe, B, Er, B), Ye[B + pe] = !0;
          }
        }
        return e === i ? pr(L) : mr(L), L;
      }
    }
    function yr(e, r, t) {
      return Ve(e, r, t, !0);
    }
    function br(e, r, t) {
      return Ve(e, r, t, !1);
    }
    var kr = br, gr = yr;
    ae.Fragment = i, ae.jsx = kr, ae.jsxs = gr;
  }()), ae;
}
process.env.NODE_ENV === "production" ? be.exports = Rr() : be.exports = wr();
var c = be.exports;
function Je({
  onDrag: a,
  onDragStart: s,
  onDragEnd: l,
  sensitivity: i = 1,
  direction: j = "vertical"
}) {
  const m = le(!1), R = le(null), w = te(
    (f, T) => {
      if (!m.current || !R.current) return;
      const u = f - R.current.x, k = R.current.y - T, _ = (j === "vertical" ? k : u) / i;
      a(_), R.current = { x: f, y: T };
    },
    [a, i, j]
  ), v = te(
    (f) => {
      f.preventDefault(), w(f.clientX, f.clientY);
    },
    [w]
  ), x = te(
    (f) => {
      const T = f.touches[0];
      w(T.clientX, T.clientY);
    },
    [w]
  ), p = te(() => {
    m.current = !1, R.current = null, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", p), document.removeEventListener("touchmove", x), document.removeEventListener("touchend", p), l == null || l(), document.body.style.cursor = "", document.body.style.userSelect = "";
  }, [v, x, l]), S = te(
    (f) => {
      f.preventDefault(), f.stopPropagation(), m.current = !0;
      const T = "touches" in f ? f.touches[0].clientX : f.clientX, u = "touches" in f ? f.touches[0].clientY : f.clientY;
      R.current = { x: T, y: u }, document.addEventListener("mousemove", v), document.addEventListener("mouseup", p), document.addEventListener("touchmove", x, { passive: !1 }), document.addEventListener("touchend", p), document.body.style.cursor = j === "vertical" ? "ns-resize" : "ew-resize", document.body.style.userSelect = "none", s == null || s();
    },
    [v, x, p, s, j]
  );
  return {
    onMouseDown: S,
    onTouchStart: S
  };
}
const xr = "_container_1mdr0_1", Tr = "_knobControl_1mdr0_8", Sr = "_valueArc_1mdr0_18", Cr = "_label_1mdr0_22", Lr = "_valueDisplay_1mdr0_31", Z = {
  container: xr,
  knobControl: Tr,
  valueArc: Sr,
  label: Cr,
  valueDisplay: Lr
};
function qe(a) {
  var s, l, i = "";
  if (typeof a == "string" || typeof a == "number") i += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var j = a.length;
    for (s = 0; s < j; s++) a[s] && (l = qe(a[s])) && (i && (i += " "), i += l);
  } else for (l in a) a[l] && (i && (i += " "), i += l);
  return i;
}
function Y() {
  for (var a, s, l = 0, i = "", j = arguments.length; l < j; l++) (a = arguments[l]) && (s = qe(a)) && (i && (i += " "), i += s);
  return i;
}
const He = ({
  value: a,
  min: s = 0,
  max: l = 100,
  step: i = 1,
  onChange: j,
  size: m = 64,
  label: R,
  color: w = "#3b82f6",
  sensitivity: v = 1,
  className: x
}) => {
  const u = -135 + Math.min(Math.max((a - s) / (l - s), 0), 1) * 270, { onMouseDown: k, onTouchStart: y } = Je({
    onDrag: (H) => {
      const U = l - s, I = H * v * U / 200;
      let O = a + I;
      i > 0 && (O = Math.round(O / i) * i), O = Math.min(Math.max(O, s), l), O !== a && j(O);
    },
    sensitivity: 1
    // handled inside onDrag
  }), _ = m * 0.08, g = m / 2 - _, M = m / 2, V = 2 * Math.PI * g, F = 270 / 360 * V, G = F - (u - -135) / 270 * F, n = (u - 90) * (Math.PI / 180), N = M + g * 0.8 * Math.cos(n), $ = M + g * 0.8 * Math.sin(n);
  return /* @__PURE__ */ c.jsxs("div", { className: Y(Z.container, x), style: { width: m }, children: [
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: Z.knobControl,
        onMouseDown: k,
        onTouchStart: y,
        role: "slider",
        "aria-valuemin": s,
        "aria-valuemax": l,
        "aria-valuenow": a,
        style: { width: m, height: m },
        children: /* @__PURE__ */ c.jsxs("svg", { width: m, height: m, viewBox: `0 0 ${m} ${m}`, children: [
          /* @__PURE__ */ c.jsx(
            "circle",
            {
              cx: M,
              cy: M,
              r: g,
              fill: "none",
              stroke: "#333",
              strokeWidth: _,
              strokeLinecap: "round",
              strokeDasharray: `${F} ${V}`,
              transform: `rotate(-45 ${M} ${M})`
            }
          ),
          /* @__PURE__ */ c.jsx(
            "circle",
            {
              cx: M,
              cy: M,
              r: g,
              fill: "none",
              stroke: w,
              strokeWidth: _,
              strokeLinecap: "round",
              strokeDasharray: `${F} ${V}`,
              strokeDashoffset: G,
              transform: `rotate(-45 ${M} ${M})`,
              className: Z.valueArc
            }
          ),
          /* @__PURE__ */ c.jsx(
            "line",
            {
              x1: M,
              y1: M,
              x2: N,
              y2: $,
              stroke: w,
              strokeWidth: 2,
              strokeLinecap: "round",
              className: Z.pointer
            }
          )
        ] })
      }
    ),
    R && /* @__PURE__ */ c.jsx("div", { className: Z.label, children: R }),
    /* @__PURE__ */ c.jsx("div", { className: Z.valueDisplay, children: a.toFixed(i < 1 ? 2 : 0) })
  ] });
}, Mr = "_container_bntkv_1", Nr = "_faderTrackArea_bntkv_7", Pr = "_trackLine_bntkv_16", Ar = "_thumb_bntkv_27", Or = "_thumbLine_bntkv_48", Dr = "_label_bntkv_54", $r = "_valueDisplay_bntkv_61", J = {
  container: Mr,
  faderTrackArea: Nr,
  trackLine: Pr,
  thumb: Ar,
  thumbLine: Or,
  label: Dr,
  valueDisplay: $r
}, pt = ({
  value: a,
  min: s = 0,
  max: l = 100,
  step: i = 1,
  onChange: j,
  height: m = 200,
  width: R = 36,
  label: w,
  color: v = "#3b82f6",
  className: x
}) => {
  const p = le(null), S = Math.min(Math.max((a - s) / (l - s), 0), 1), { onMouseDown: f, onTouchStart: T } = Je({
    onDrag: (u) => {
      const k = l - s, y = u / m * k;
      let _ = a + y;
      i > 0 && (_ = Math.round(_ / i) * i), _ = Math.min(Math.max(_, s), l), _ !== a && j(_);
    },
    sensitivity: 1,
    // 1:1 pixel movement mapping
    direction: "vertical"
  });
  return /* @__PURE__ */ c.jsxs("div", { className: Y(J.container, x), style: { width: R }, children: [
    /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: J.faderTrackArea,
        style: { height: m, width: R },
        ref: p,
        onMouseDown: f,
        onTouchStart: T,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: J.trackLine }),
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: J.thumb,
              style: {
                bottom: `${S * 100}%`,
                backgroundColor: v,
                boxShadow: `0 0 10px ${v}40`
              },
              children: /* @__PURE__ */ c.jsx("div", { className: J.thumbLine })
            }
          )
        ]
      }
    ),
    w && /* @__PURE__ */ c.jsx("div", { className: J.label, children: w }),
    /* @__PURE__ */ c.jsx("div", { className: J.valueDisplay, children: a.toFixed(i < 1 ? 2 : 0) })
  ] });
}, Kr = "_keyboard_dlspo_1", Fr = "_whiteKeyLayer_dlspo_10", Wr = "_whiteKey_dlspo_10", Ir = "_active_dlspo_31", Yr = "_blackKeyLayer_dlspo_37", Vr = "_blackKey_dlspo_37", q = {
  keyboard: Kr,
  whiteKeyLayer: Fr,
  whiteKey: Wr,
  active: Ir,
  blackKeyLayer: Yr,
  blackKey: Vr
}, Gr = 12, ye = (a) => {
  const s = a % 12;
  return s === 1 || s === 3 || s === 6 || s === 8 || s === 10;
}, yt = ({
  startNote: a = 48,
  octaves: s = 2,
  width: l = "100%",
  height: i = 120,
  onNoteOn: j,
  onNoteOff: m,
  activeNotes: R = [],
  className: w
}) => {
  const v = s * Gr, x = Array.from({ length: v }, (n, N) => a + N), p = x.filter((n) => !ye(n)), S = p.length, T = 100 / S * 0.65, [u, k] = Ge(!1), [y, _] = Ge(null), g = (n) => {
    j && j(n);
  }, M = (n) => {
    m && m(n);
  }, V = (n) => {
    k(!0), _(n), g(n);
  }, F = (n) => {
    u && (y !== null && y !== n && M(y), _(n), g(n));
  }, G = (n) => {
    u && y === n && (M(n), _(null));
  };
  return ke.useEffect(() => {
    const n = () => {
      u && y !== null && M(y), k(!1), _(null);
    };
    return window.addEventListener("mouseup", n), () => window.removeEventListener("mouseup", n);
  }, [u, y]), /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: Y(q.keyboard, w),
      style: { width: l, height: i },
      onMouseLeave: () => {
      },
      children: [
        x.map((n) => (ye(n), null)),
        /* @__PURE__ */ c.jsx("div", { className: q.whiteKeyLayer, children: p.map((n) => {
          const N = R.includes(n) || u && y === n;
          return /* @__PURE__ */ c.jsx(
            "div",
            {
              className: Y(q.whiteKey, N && q.active),
              onMouseDown: () => V(n),
              onMouseEnter: () => F(n),
              onMouseLeave: () => G(n)
            },
            n
          );
        }) }),
        /* @__PURE__ */ c.jsx("div", { className: q.blackKeyLayer, children: x.map((n) => {
          if (!ye(n)) return null;
          const N = R.includes(n) || u && y === n, $ = n - 1, H = p.indexOf($);
          if (H === -1) return null;
          const U = (H + 1) / S * 100;
          return /* @__PURE__ */ c.jsx(
            "div",
            {
              className: Y(q.blackKey, N && q.active),
              style: {
                left: `${U}%`,
                width: `${T}%`,
                marginLeft: `-${T / 2}%`
              },
              onMouseDown: (X) => {
                X.stopPropagation(), V(n);
              },
              onMouseEnter: (X) => {
                X.stopPropagation(), F(n);
              },
              onMouseLeave: (X) => {
                X.stopPropagation(), G(n);
              }
            },
            n
          );
        }) })
      ]
    }
  );
}, Ur = "_timelineContainer_1ikjj_1", Xr = "_header_1ikjj_16", Hr = "_cornerSpacer_1ikjj_28", Br = "_ruler_1ikjj_37", Jr = "_tick_1ikjj_47", qr = "_majorTick_1ikjj_54", zr = "_minorTick_1ikjj_59", Qr = "_timeLabel_1ikjj_64", Zr = "_playheadHead_1ikjj_74", et = "_tracksContainer_1ikjj_94", rt = "_playheadLine_1ikjj_101", W = {
  timelineContainer: Ur,
  header: Xr,
  cornerSpacer: Hr,
  ruler: Br,
  tick: Jr,
  majorTick: qr,
  minorTick: zr,
  timeLabel: Qr,
  playheadHead: Zr,
  tracksContainer: et,
  playheadLine: rt
}, bt = ({
  duration: a,
  currentTime: s,
  zoom: l = 100,
  sidebarWidth: i = 220,
  onTimeChange: j,
  onZoomChange: m,
  className: R,
  children: w
}) => {
  const v = le(null), x = a * l, p = (u) => {
    if (!v.current) return;
    const k = v.current.getBoundingClientRect(), _ = u - k.left + v.current.scrollLeft - i, g = Math.max(0, Math.min(_ / l, a));
    j == null || j(g);
  }, S = (u) => {
    p(u.clientX);
    const k = (_) => {
      p(_.clientX);
    }, y = () => {
      document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", y);
    };
    document.addEventListener("mousemove", k), document.addEventListener("mouseup", y);
  }, f = Be(() => {
    let u = 1;
    l < 20 ? u = 5 : l < 50 ? u = 2 : l > 200 && (u = 0.5);
    const k = [];
    for (let y = 0; y <= a; y += u)
      k.push({ time: y, isMajor: y % 1 === 0 || y % 5 === 0 });
    return k;
  }, [a, l]), T = (u) => {
    if (u.altKey || u.ctrlKey || u.metaKey) {
      u.preventDefault();
      const k = u.deltaY > 0 ? 0.9 : 1.1, y = Math.max(10, Math.min(l * k, 1e3));
      m == null || m(y);
    }
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: Y(W.timelineContainer, R),
      ref: v,
      onWheel: T,
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: W.header, children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: W.cornerSpacer,
              style: { width: i, minWidth: i, flexShrink: 0 }
            }
          ),
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: W.ruler,
              style: { width: x },
              onMouseDown: S,
              children: [
                f.map((u, k) => /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    className: Y(W.tick, u.isMajor ? W.majorTick : W.minorTick),
                    style: { left: u.time * l },
                    children: u.isMajor && /* @__PURE__ */ c.jsx("span", { className: W.timeLabel, children: tt(u.time) })
                  },
                  k
                )),
                /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    className: W.playheadHead,
                    style: { left: s * l }
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: W.tracksContainer, style: { width: x + i }, children: [
          w,
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: W.playheadLine,
              style: { left: s * l + i }
            }
          )
        ] })
      ]
    }
  );
}, tt = (a) => {
  const s = Math.floor(a / 60), l = Math.floor(a % 60), i = Math.floor(a % 1 * 10);
  return `${s}:${l.toString().padStart(2, "0")}.${i}`;
}, nt = "_trackRow_5ykwz_1", at = "_trackHeader_5ykwz_9", ot = "_trackInfo_5ykwz_24", st = "_trackName_5ykwz_31", it = "_trackControls_5ykwz_42", ct = "_btn_5ykwz_47", lt = "_mute_5ykwz_64", ut = "_active_5ykwz_64", ft = "_solo_5ykwz_70", dt = "_trackKnobs_5ykwz_76", vt = "_knobWrapper_5ykwz_82", ht = "_trackLane_5ykwz_88", _t = "_waveformSvg_5ykwz_97", P = {
  trackRow: nt,
  trackHeader: at,
  trackInfo: ot,
  trackName: st,
  trackControls: it,
  btn: ct,
  mute: lt,
  active: ut,
  solo: ft,
  trackKnobs: dt,
  knobWrapper: vt,
  trackLane: ht,
  waveformSvg: _t
}, kt = ({
  data: a,
  volume: s,
  pan: l,
  muted: i,
  soloed: j,
  onVolumeChange: m,
  onPanChange: R,
  onMuteToggle: w,
  onSoloToggle: v,
  zoom: x = 100,
  duration: p = 10,
  className: S
}) => {
  const { name: f, color: T = "#555", type: u = "audio" } = a, k = p * x, y = Be(() => {
    const _ = [], F = Math.ceil(k / 2), G = f.charCodeAt(0) + (f.charCodeAt(1) || 0);
    _.push("M 0 40");
    for (let n = 0; n <= F; n++) {
      const N = n * 2;
      let $ = 0;
      if (u === "kick") {
        const U = Math.max(0, 1 - N % 100 / 20);
        $ = (Math.random() - 0.5) * U * 2;
      } else if (u === "snare") {
        const U = Math.abs(Math.sin(N * 0.05));
        $ = (Math.random() - 0.5) * (U > 0.8 ? 1.5 : 0.1);
      } else u === "bass" ? $ = Math.sin(N * 0.1) * Math.sin(N * 0.02) : $ = Math.sin((n + G) * 0.1) * Math.cos(n * 0.5 + G) * Math.sin(n * 0.05);
      const H = 40 + $ * 30;
      _.push(`L ${N} ${H}`);
    }
    return _.join(" ");
  }, [k, f, u]);
  return /* @__PURE__ */ c.jsxs("div", { className: Y(P.trackRow, S), style: {
    /* width is handled by content */
  }, children: [
    /* @__PURE__ */ c.jsxs("div", { className: P.trackHeader, children: [
      /* @__PURE__ */ c.jsxs("div", { className: P.trackInfo, children: [
        /* @__PURE__ */ c.jsx("div", { className: P.trackName, style: { borderLeftColor: T }, children: f }),
        /* @__PURE__ */ c.jsxs("div", { className: P.trackControls, children: [
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: Y(P.btn, P.mute, i && P.active),
              onClick: w,
              children: "M"
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: Y(P.btn, P.solo, j && P.active),
              onClick: v,
              children: "S"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: P.trackKnobs, children: [
        /* @__PURE__ */ c.jsx("div", { className: P.knobWrapper, children: /* @__PURE__ */ c.jsx(
          He,
          {
            value: s,
            onChange: m,
            size: 32,
            color: "#ec4899",
            min: 0,
            max: 100
          }
        ) }),
        /* @__PURE__ */ c.jsx("div", { className: P.knobWrapper, children: /* @__PURE__ */ c.jsx(
          He,
          {
            value: l,
            onChange: R,
            size: 32,
            color: "#a855f7",
            min: -50,
            max: 50
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: P.trackLane, style: { width: k, minWidth: k }, children: /* @__PURE__ */ c.jsxs(
      "svg",
      {
        width: k,
        height: 80,
        preserveAspectRatio: "none",
        className: P.waveformSvg,
        children: [
          /* @__PURE__ */ c.jsx("path", { d: y, stroke: T, strokeWidth: "2", fill: "none", opacity: "0.8" }),
          /* @__PURE__ */ c.jsx("path", { d: `${y} V 80 H 0 Z`, fill: T, opacity: "0.2", stroke: "none" })
        ]
      }
    ) })
  ] });
};
export {
  pt as F,
  yt as K,
  bt as T,
  He as a,
  kt as b
};
