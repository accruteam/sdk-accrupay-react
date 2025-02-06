import ke, { createContext as yr, memo as gr, useEffect as U, useContext as Er, useState as N } from "react";
var B = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function br() {
  if (je) return L;
  je = 1;
  var a = ke, c = Symbol.for("react.element"), d = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(C, m, P) {
    var g, y = {}, E = null, F = null;
    P !== void 0 && (E = "" + P), m.key !== void 0 && (E = "" + m.key), m.ref !== void 0 && (F = m.ref);
    for (g in m) u.call(m, g) && !l.hasOwnProperty(g) && (y[g] = m[g]);
    if (C && C.defaultProps) for (g in m = C.defaultProps, m) y[g] === void 0 && (y[g] = m[g]);
    return { $$typeof: c, type: C, key: E, ref: F, props: y, _owner: v.current };
  }
  return L.Fragment = d, L.jsx = b, L.jsxs = b, L;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function Rr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ke, c = Symbol.for("react.element"), d = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), C = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), ae = Symbol.iterator, Ae = "@@iterator";
    function Ne(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[Ae];
      return typeof r == "function" ? r : null;
    }
    var k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ie("error", e, t);
      }
    }
    function Ie(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var f = t.map(function(o) {
          return String(o);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var $e = !1, We = !1, Le = !1, Ye = !1, Ue = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === l || Ue || e === v || e === P || e === g || Ye || e === F || $e || We || Le || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === y || e.$$typeof === b || e.$$typeof === C || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case d:
          return "Portal";
        case l:
          return "Profiler";
        case v:
          return "StrictMode";
        case P:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return oe(r) + ".Consumer";
          case b:
            var t = e;
            return oe(t._context) + ".Provider";
          case m:
            return Me(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : x(e.type) || "Memo";
          case E: {
            var s = e, f = s._payload, o = s._init;
            try {
              return x(o(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, I = 0, ue, se, ce, le, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function He() {
      {
        if (I === 0) {
          ue = console.log, se = console.info, ce = console.warn, le = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
        I++;
      }
    }
    function qe() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ue
            }),
            info: j({}, e, {
              value: se
            }),
            warn: j({}, e, {
              value: ce
            }),
            error: j({}, e, {
              value: le
            }),
            group: j({}, e, {
              value: fe
            }),
            groupCollapsed: j({}, e, {
              value: de
            }),
            groupEnd: j({}, e, {
              value: ve
            })
          });
        }
        I < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = k.ReactCurrentDispatcher, K;
    function V(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var G = !1, M;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Be();
    }
    function me(e, r) {
      if (!e || G)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = J.current, J.current = null, He();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (S) {
              n = S;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (S) {
              n = S;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          e();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var i = S.stack.split(`
`), _ = n.stack.split(`
`), p = i.length - 1, h = _.length - 1; p >= 1 && h >= 0 && i[p] !== _[h]; )
            h--;
          for (; p >= 1 && h >= 0; p--, h--)
            if (i[p] !== _[h]) {
              if (p !== 1 || h !== 1)
                do
                  if (p--, h--, h < 0 || i[p] !== _[h]) {
                    var w = `
` + i[p].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, w), w;
                  }
                while (p >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        G = !1, J.current = f, qe(), Error.prepareStackTrace = s;
      }
      var A = e ? e.displayName || e.name : "", O = A ? V(A) : "";
      return typeof e == "function" && M.set(e, O), O;
    }
    function Je(e, r, t) {
      return me(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function H(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Ke(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case P:
          return V("Suspense");
        case g:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Je(e.render);
          case y:
            return H(e.type, r, t);
          case E: {
            var n = e, s = n._payload, f = n._init;
            try {
              return H(f(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, he = {}, ye = k.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = H(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ge(e, r, t, n, s) {
      {
        var f = Function.call.bind($);
        for (var o in e)
          if (f(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var _ = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              i = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              i = p;
            }
            i && !(i instanceof Error) && (q(s), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof i), q(null)), i instanceof Error && !(i.message in he) && (he[i.message] = !0, q(s), R("Failed %s type: %s", t, i.message), q(null));
          }
      }
    }
    var ze = Array.isArray;
    function z(e) {
      return ze(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function Ee(e) {
      if (Ze(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), ge(e);
    }
    var W = k.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, Re, X;
    X = {};
    function er(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = x(W.current.type);
        X[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(W.current.type), e.ref), X[t] = !0);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          be || (be = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          Re || (Re = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, t, n, s, f, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function or(e, r, t, n, s) {
      {
        var f, o = {}, i = null, _ = null;
        t !== void 0 && (Ee(t), i = "" + t), rr(r) && (Ee(r.key), i = "" + r.key), er(r) && (_ = r.ref, tr(r, s));
        for (f in r)
          $.call(r, f) && !Qe.hasOwnProperty(f) && (o[f] = r[f]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (f in p)
            o[f] === void 0 && (o[f] = p[f]);
        }
        if (i || _) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && nr(o, h), _ && ar(o, h);
        }
        return ir(e, i, _, s, n, W.current, o);
      }
    }
    var Z = k.ReactCurrentOwner, _e = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = H(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function Ce() {
      {
        if (Z.current) {
          var e = x(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      return "";
    }
    var Se = {};
    function sr(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + x(e._owner.type) + "."), D(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && we(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Ne(e);
          if (typeof s == "function" && s !== e.entries)
            for (var f = s.call(e), o; !(o = f.next()).done; )
              ee(o.value) && we(o.value, r);
        }
      }
    }
    function cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = x(r);
          Ge(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var s = x(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var xe = {};
    function Pe(e, r, t, n, s, f) {
      {
        var o = Ve(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ur();
          _ ? i += _ : i += Ce();
          var p;
          e === null ? p = "null" : z(e) ? p = "array" : e !== void 0 && e.$$typeof === c ? (p = "<" + (x(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, i);
        }
        var h = or(e, r, t, s, f);
        if (h == null)
          return h;
        if (o) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (z(w)) {
                for (var A = 0; A < w.length; A++)
                  Te(w[A], e);
                Object.freeze && Object.freeze(w);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(w, e);
        }
        if ($.call(r, "key")) {
          var O = x(e), S = Object.keys(r).filter(function(hr) {
            return hr !== "key";
          }), re = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xe[O + re]) {
            var mr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, O, mr, O), xe[O + re] = !0;
          }
        }
        return e === u ? lr(h) : cr(h), h;
      }
    }
    function fr(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function dr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var vr = dr, pr = fr;
    Y.Fragment = u, Y.jsx = vr, Y.jsxs = pr;
  }()), Y;
}
var Fe;
function _r() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? B.exports = br() : B.exports = Rr()), B.exports;
}
var T = _r();
async function Cr(a) {
  return new Promise((c, d) => {
    if (document.querySelector(`script[src="${a}"]`)) {
      c();
      return;
    }
    const v = Object.assign(document.createElement("script"), {
      type: "text/javascript",
      defer: !0,
      src: a,
      onerror: (l) => {
        d(l);
      }
    });
    v.onload = () => {
      c();
    }, document.body.appendChild(v);
  });
}
function Sr(a) {
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function wr(a) {
  const { text: c, onSuccess: d, onError: u, onComplete: v, submitPayment: l, ...b } = a;
  return /* @__PURE__ */ T.jsx("button", { onClick: async () => (b.onSubmit && await b.onSubmit(), l({
    onSuccess: d || (() => {
    }),
    onError: u || (() => {
    }),
    onComplete: v || (() => {
    })
  })), ...b, children: c });
}
function Tr(a) {
  const { onChange: c, ...d } = a;
  return /* @__PURE__ */ T.jsx("input", { onChange: c, ...d });
}
const xr = "https://cdn.safecharge.com/safecharge_resources/v1/websdk/safecharge.js", De = yr(void 0);
async function Pr(a, c) {
  return new Promise(function(d, u) {
    a.createPayment(
      c,
      (v) => {
        if (v.result === "APPROVED")
          d(v);
        else {
          const l = v.errorDescription ? String(v.errorDescription).toLowerCase() : "", b = v.transactionStatus ? String(v.transactionStatus).toLowerCase() : "failed";
          u(new Error(`Transaction ${b}.${b.includes(l) ? "" : ` Reason: ${Sr(l)}.`}`));
        }
      }
    );
  });
}
function jr({ children: a, sessionToken: c, config: d }) {
  const [u, v] = N({
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
    cardHolderName: ""
  }), [l, b] = N(), [C, m] = N();
  if (!d)
    throw new Error("config missing");
  U(() => {
    Cr(xr).then(() => {
      window.SafeCharge !== void 0 && b(
        window.SafeCharge({
          env: d.env,
          merchantId: d.merchantId,
          merchantSiteId: d.merchantSiteId
        })
      );
    });
  }, []), U(() => {
    if (l && !C) {
      const y = l.fields({
        // fonts: [{ cssUrl: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap' }],
        // locale: 'en',
        // fontSize: '16px',
      });
      m(y);
    }
  }, [l, C]);
  function P(y, E) {
    v((F) => ({ ...F, [y]: E }));
  }
  async function g(y) {
    try {
      if (!u.cardHolderName)
        throw new Error("Card holder name is required.");
      if (!u.cardNumber.parentElm.classList.contains(u.cardNumber.stateClass.complete))
        throw new Error("Invalid card number.");
      if (!u.cardExpiry.parentElm.classList.contains(u.cardExpiry.stateClass.complete))
        throw new Error("Invalid card expiry.");
      if (!u.cardCvc.parentElm.classList.contains(u.cardCvc.stateClass.complete))
        throw new Error("Invalid card cvc.");
    } catch (E) {
      console.error(E), y.onError(E), y.onComplete();
      return;
    }
    try {
      const E = await Pr(l, {
        cardHolderName: u.cardHolderName,
        sessionToken: c,
        paymentOption: u.cardNumber
      });
      y.onSuccess(E);
    } catch (E) {
      console.error(E), y.onError(E);
    }
    y.onComplete();
  }
  return !l || !C || !c ? null : /* @__PURE__ */ T.jsx(De.Provider, { value: { submitPayment: g, form: u, updateField: P, safeCharge: l, safeChargeFields: C }, children: a });
}
function te() {
  return Er(De);
}
function Or(a) {
  switch (a) {
    case "cardNumber":
      return "ccNumber";
    case "cardExpiry":
      return "ccExpiration";
    case "cardCvc":
      return "ccCvc";
  }
}
const ne = gr(({ fieldType: a }) => {
  const { updateField: c, safeChargeFields: d } = te(), u = `accru-payment-form-${a}-container`;
  return U(() => {
    const v = Or(a);
    if (!d.instances.map((l) => l.type).includes(v)) {
      const l = d.create(v, {});
      l.attach(`#${u}`), c(a, l);
    }
  }, []), /* @__PURE__ */ T.jsx("div", { id: u });
});
function Fr() {
  return /* @__PURE__ */ T.jsx(ne, { fieldType: "cardNumber" });
}
function kr() {
  return /* @__PURE__ */ T.jsx(ne, { fieldType: "cardExpiry" });
}
function Dr() {
  return /* @__PURE__ */ T.jsx(ne, { fieldType: "cardCvc" });
}
function Ar({ initialValue: a, ...c }) {
  const { form: d, updateField: u } = te();
  U(() => {
    a && u("cardHolderName", a);
  }, []);
  function v(l) {
    return u("cardHolderName", l.target.value);
  }
  return /* @__PURE__ */ T.jsx(Tr, { ...c, onChange: v, value: d.cardHolderName });
}
function Nr(a) {
  const { submitPayment: c } = te();
  return /* @__PURE__ */ T.jsx(wr, { ...a, submitPayment: c });
}
const Ir = {
  CardHolderName: Ar,
  CreditCardNumber: Fr,
  CreditCardExpiration: kr,
  CreditCardCvc: Dr,
  SubmitBtn: Nr
};
function $r(a, c) {
  return c.find((d) => d.name === a).config;
}
function Lr(a) {
  const [c, d] = N(!1), [u] = N(a.preferredProvider), [v, l] = N([]);
  if (U(() => {
    async function C() {
      const m = await a.preReleaseGetProviders();
      if (!m.map((g) => g.name).includes(u))
        throw new Error(
          "Provider not found."
        );
      l(m), d(!0);
    }
    C();
  }, []), c === !1)
    return null;
  const b = $r(u, v);
  return u === "nuvei" ? a.sessionToken ? /* @__PURE__ */ T.jsx(
    jr,
    {
      sessionToken: a.sessionToken,
      config: b,
      children: a.children
    }
  ) : /* @__PURE__ */ T.jsx("div", { children: "Missing sessionToken" }) : null;
}
function Yr(a) {
  return a === "nuvei" ? Ir : null;
}
export {
  Lr as AccruPay,
  Yr as form
};
