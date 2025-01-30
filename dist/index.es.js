import xa, { createContext as Ca, memo as ai, useEffect as yt, useContext as Aa, useState as Fe, useRef as ii } from "react";
import { loadStripe as si } from "@stripe/stripe-js";
import { Elements as li, useStripe as ui, useElements as Ra } from "@stripe/react-stripe-js";
var ro = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ci(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var er = { exports: {} }, At = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function di() {
  if (no) return At;
  no = 1;
  var t = xa, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, v, _) {
    var l, c = {}, g = null, P = null;
    _ !== void 0 && (g = "" + _), v.key !== void 0 && (g = "" + v.key), v.ref !== void 0 && (P = v.ref);
    for (l in v) n.call(v, l) && !s.hasOwnProperty(l) && (c[l] = v[l]);
    if (f && f.defaultProps) for (l in v = f.defaultProps, v) c[l] === void 0 && (c[l] = v[l]);
    return { $$typeof: e, type: f, key: g, ref: P, props: c, _owner: a.current };
  }
  return At.Fragment = r, At.jsx = d, At.jsxs = d, At;
}
var Rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo;
function hi() {
  return oo || (oo = 1, process.env.NODE_ENV !== "production" && function() {
    var t = xa, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), f = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), T = Symbol.iterator, O = "@@iterator";
    function u(i) {
      if (i === null || typeof i != "object")
        return null;
      var E = T && i[T] || i[O];
      return typeof E == "function" ? E : null;
    }
    var p = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(i) {
      {
        for (var E = arguments.length, x = new Array(E > 1 ? E - 1 : 0), M = 1; M < E; M++)
          x[M - 1] = arguments[M];
        b("error", i, x);
      }
    }
    function b(i, E, x) {
      {
        var M = p.ReactDebugCurrentFrame, j = M.getStackAddendum();
        j !== "" && (E += "%s", x = x.concat([j]));
        var B = x.map(function(q) {
          return String(q);
        });
        B.unshift("Warning: " + E), Function.prototype.apply.call(console[i], console, B);
      }
    }
    var S = !1, C = !1, w = !1, $ = !1, R = !1, G;
    G = Symbol.for("react.module.reference");
    function A(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === s || R || i === a || i === _ || i === l || $ || i === P || S || C || w || typeof i == "object" && i !== null && (i.$$typeof === g || i.$$typeof === c || i.$$typeof === d || i.$$typeof === f || i.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === G || i.getModuleId !== void 0));
    }
    function U(i, E, x) {
      var M = i.displayName;
      if (M)
        return M;
      var j = E.displayName || E.name || "";
      return j !== "" ? x + "(" + j + ")" : x;
    }
    function I(i) {
      return i.displayName || "Context";
    }
    function Q(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case _:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case f:
            var E = i;
            return I(E) + ".Consumer";
          case d:
            var x = i;
            return I(x._context) + ".Provider";
          case v:
            return U(i, i.render, "ForwardRef");
          case c:
            var M = i.displayName || null;
            return M !== null ? M : Q(i.type) || "Memo";
          case g: {
            var j = i, B = j._payload, q = j._init;
            try {
              return Q(q(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, N = 0, fe, Oe, F, ye, pe, Me, Ie;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function $e() {
      {
        if (N === 0) {
          fe = console.log, Oe = console.info, F = console.warn, ye = console.error, pe = console.group, Me = console.groupCollapsed, Ie = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        N++;
      }
    }
    function we() {
      {
        if (N--, N === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, i, {
              value: fe
            }),
            info: Z({}, i, {
              value: Oe
            }),
            warn: Z({}, i, {
              value: F
            }),
            error: Z({}, i, {
              value: ye
            }),
            group: Z({}, i, {
              value: pe
            }),
            groupCollapsed: Z({}, i, {
              value: Me
            }),
            groupEnd: Z({}, i, {
              value: Ie
            })
          });
        }
        N < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = p.ReactCurrentDispatcher, H;
    function V(i, E, x) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (j) {
            var M = j.stack.trim().match(/\n( *(at )?)/);
            H = M && M[1] || "";
          }
        return `
` + H + i;
      }
    }
    var W = !1, z;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      z = new le();
    }
    function me(i, E) {
      if (!i || W)
        return "";
      {
        var x = z.get(i);
        if (x !== void 0)
          return x;
      }
      var M;
      W = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = ne.current, ne.current = null, $e();
      try {
        if (E) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (Te) {
              M = Te;
            }
            Reflect.construct(i, [], q);
          } else {
            try {
              q.call();
            } catch (Te) {
              M = Te;
            }
            i.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Te) {
            M = Te;
          }
          i();
        }
      } catch (Te) {
        if (Te && M && typeof Te.stack == "string") {
          for (var k = Te.stack.split(`
`), de = M.stack.split(`
`), X = k.length - 1, ie = de.length - 1; X >= 1 && ie >= 0 && k[X] !== de[ie]; )
            ie--;
          for (; X >= 1 && ie >= 0; X--, ie--)
            if (k[X] !== de[ie]) {
              if (X !== 1 || ie !== 1)
                do
                  if (X--, ie--, ie < 0 || k[X] !== de[ie]) {
                    var Se = `
` + k[X].replace(" at new ", " at ");
                    return i.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", i.displayName)), typeof i == "function" && z.set(i, Se), Se;
                  }
                while (X >= 1 && ie >= 0);
              break;
            }
        }
      } finally {
        W = !1, ne.current = B, we(), Error.prepareStackTrace = j;
      }
      var it = i ? i.displayName || i.name : "", Qe = it ? V(it) : "";
      return typeof i == "function" && z.set(i, Qe), Qe;
    }
    function oe(i, E, x) {
      return me(i, !1);
    }
    function xe(i) {
      var E = i.prototype;
      return !!(E && E.isReactComponent);
    }
    function Pe(i, E, x) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return me(i, xe(i));
      if (typeof i == "string")
        return V(i);
      switch (i) {
        case _:
          return V("Suspense");
        case l:
          return V("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case v:
            return oe(i.render);
          case c:
            return Pe(i.type, E, x);
          case g: {
            var M = i, j = M._payload, B = M._init;
            try {
              return Pe(B(j), E, x);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, ue = {}, ge = p.ReactDebugCurrentFrame;
    function Ee(i) {
      if (i) {
        var E = i._owner, x = Pe(i.type, i._source, E ? E.type : null);
        ge.setExtraStackFrame(x);
      } else
        ge.setExtraStackFrame(null);
    }
    function Le(i, E, x, M, j) {
      {
        var B = Function.call.bind(ae);
        for (var q in i)
          if (B(i, q)) {
            var k = void 0;
            try {
              if (typeof i[q] != "function") {
                var de = Error((M || "React class") + ": " + x + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              k = i[q](E, q, M, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              k = X;
            }
            k && !(k instanceof Error) && (Ee(j), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", x, q, typeof k), Ee(null)), k instanceof Error && !(k.message in ue) && (ue[k.message] = !0, Ee(j), y("Failed %s type: %s", x, k.message), Ee(null));
          }
      }
    }
    var Ue = Array.isArray;
    function gt(i) {
      return Ue(i);
    }
    function Mr(i) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, x = E && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return x;
      }
    }
    function Ir(i) {
      try {
        return Jt(i), !1;
      } catch {
        return !0;
      }
    }
    function Jt(i) {
      return "" + i;
    }
    function Tt(i) {
      if (Ir(i))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mr(i)), Jt(i);
    }
    var Ve = p.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nt, _t, Et;
    Et = {};
    function $r(i) {
      if (ae.call(i, "ref")) {
        var E = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function St(i) {
      if (ae.call(i, "key")) {
        var E = Object.getOwnPropertyDescriptor(i, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function ot(i, E) {
      if (typeof i.ref == "string" && Ve.current && E && Ve.current.stateNode !== E) {
        var x = Q(Ve.current.type);
        Et[x] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(Ve.current.type), i.ref), Et[x] = !0);
      }
    }
    function h(i, E) {
      {
        var x = function() {
          nt || (nt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        x.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function m(i, E) {
      {
        var x = function() {
          _t || (_t = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        x.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var L = function(i, E, x, M, j, B, q) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: i,
        key: E,
        ref: x,
        props: q,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Y(i, E, x, M, j) {
      {
        var B, q = {}, k = null, de = null;
        x !== void 0 && (Tt(x), k = "" + x), St(E) && (Tt(E.key), k = "" + E.key), $r(E) && (de = E.ref, ot(E, j));
        for (B in E)
          ae.call(E, B) && !Ke.hasOwnProperty(B) && (q[B] = E[B]);
        if (i && i.defaultProps) {
          var X = i.defaultProps;
          for (B in X)
            q[B] === void 0 && (q[B] = X[B]);
        }
        if (k || de) {
          var ie = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          k && h(q, ie), de && m(q, ie);
        }
        return L(i, k, de, j, M, Ve.current, q);
      }
    }
    var K = p.ReactCurrentOwner, D = p.ReactDebugCurrentFrame;
    function ve(i) {
      if (i) {
        var E = i._owner, x = Pe(i.type, i._source, E ? E.type : null);
        D.setExtraStackFrame(x);
      } else
        D.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function ce(i) {
      return typeof i == "object" && i !== null && i.$$typeof === e;
    }
    function Ae() {
      {
        if (K.current) {
          var i = Q(K.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function bt(i) {
      return "";
    }
    var ke = {};
    function _e(i) {
      {
        var E = Ae();
        if (!E) {
          var x = typeof i == "string" ? i : i.displayName || i.name;
          x && (E = `

Check the top-level render call using <` + x + ">.");
        }
        return E;
      }
    }
    function Ot(i, E) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var x = _e(E);
        if (ke[x])
          return;
        ke[x] = !0;
        var M = "";
        i && i._owner && i._owner !== K.current && (M = " It was passed a child from " + Q(i._owner.type) + "."), ve(i), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, M), ve(null);
      }
    }
    function wt(i, E) {
      {
        if (typeof i != "object")
          return;
        if (gt(i))
          for (var x = 0; x < i.length; x++) {
            var M = i[x];
            ce(M) && Ot(M, E);
          }
        else if (ce(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var j = u(i);
          if (typeof j == "function" && j !== i.entries)
            for (var B = j.call(i), q; !(q = B.next()).done; )
              ce(q.value) && Ot(q.value, E);
        }
      }
    }
    function Qt(i) {
      {
        var E = i.type;
        if (E == null || typeof E == "string")
          return;
        var x;
        if (typeof E == "function")
          x = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === c))
          x = E.propTypes;
        else
          return;
        if (x) {
          var M = Q(E);
          Le(x, i.props, "prop", M, i);
        } else if (E.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var j = Q(E);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ye(i) {
      {
        for (var E = Object.keys(i.props), x = 0; x < E.length; x++) {
          var M = E[x];
          if (M !== "children" && M !== "key") {
            ve(i), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), ve(null);
            break;
          }
        }
        i.ref !== null && (ve(i), y("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    var at = {};
    function Je(i, E, x, M, j, B) {
      {
        var q = A(i);
        if (!q) {
          var k = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = bt();
          de ? k += de : k += Ae();
          var X;
          i === null ? X = "null" : gt(i) ? X = "array" : i !== void 0 && i.$$typeof === e ? (X = "<" + (Q(i.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : X = typeof i, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, k);
        }
        var ie = Y(i, E, x, j, B);
        if (ie == null)
          return ie;
        if (q) {
          var Se = E.children;
          if (Se !== void 0)
            if (M)
              if (gt(Se)) {
                for (var it = 0; it < Se.length; it++)
                  wt(Se[it], i);
                Object.freeze && Object.freeze(Se);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wt(Se, i);
        }
        if (ae.call(E, "key")) {
          var Qe = Q(i), Te = Object.keys(E).filter(function(oi) {
            return oi !== "key";
          }), Gr = Te.length > 0 ? "{key: someKey, " + Te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!at[Qe + Gr]) {
            var ni = Te.length > 0 ? "{" + Te.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Gr, Qe, ni, Qe), at[Qe + Gr] = !0;
          }
        }
        return i === n ? Ye(ie) : Qt(ie), ie;
      }
    }
    function xt(i, E, x) {
      return Je(i, E, x, !0);
    }
    function Ct(i, E, x) {
      return Je(i, E, x, !1);
    }
    var Xt = Ct, Zt = xt;
    Rt.Fragment = n, Rt.jsx = Xt, Rt.jsxs = Zt;
  }()), Rt;
}
var ao;
function fi() {
  return ao || (ao = 1, process.env.NODE_ENV === "production" ? er.exports = di() : er.exports = hi()), er.exports;
}
var re = fi();
async function pi(t) {
  return new Promise((e, r) => {
    if (document.querySelector(`script[src="${t}"]`)) {
      e();
      return;
    }
    const a = Object.assign(document.createElement("script"), {
      type: "text/javascript",
      defer: !0,
      src: t,
      onerror: (s) => {
        r(s);
      }
    });
    a.onload = () => {
      e();
    }, document.body.appendChild(a);
  });
}
function mi(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Ma(t) {
  const { text: e, onSuccess: r, onError: n, onComplete: a, submitPayment: s, ...d } = t;
  return /* @__PURE__ */ re.jsx("button", { onClick: async () => (d.onSubmit && await d.onSubmit(), s({
    onSuccess: r || (() => {
    }),
    onError: n || (() => {
    }),
    onComplete: a || (() => {
    })
  })), ...d, children: e });
}
function Ia(t) {
  const { onChange: e, ...r } = t;
  return /* @__PURE__ */ re.jsx("input", { onChange: e, ...r });
}
const vi = "https://cdn.safecharge.com/safecharge_resources/v1/websdk/safecharge.js", $a = Ca(void 0);
async function yi(t, e) {
  return new Promise(function(r, n) {
    t.createPayment(
      e,
      (a) => {
        if (a.result === "APPROVED")
          r(a);
        else {
          const s = a.errorDescription ? String(a.errorDescription).toLowerCase() : "", d = a.transactionStatus ? String(a.transactionStatus).toLowerCase() : "failed";
          n(new Error(`Transaction ${d}.${d.includes(s) ? "" : ` Reason: ${mi(s)}.`}`));
        }
      }
    );
  });
}
function Pi({ children: t, sessionToken: e, config: r }) {
  const [n, a] = Fe({
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
    cardHolderName: ""
  }), [s, d] = Fe(), [f, v] = Fe();
  if (!r)
    throw new Error("config missing");
  yt(() => {
    pi(vi).then(() => {
      window.SafeCharge !== void 0 && d(
        window.SafeCharge({
          env: r.env,
          merchantId: r.merchantId,
          merchantSiteId: r.merchantSiteId
        })
      );
    });
  }, []), yt(() => {
    if (s && !f) {
      const c = s.fields({
        // fonts: [{ cssUrl: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap' }],
        // locale: 'en',
        // fontSize: '16px',
      });
      v(c);
    }
  }, [s, f]);
  function _(c, g) {
    a((P) => ({ ...P, [c]: g }));
  }
  async function l(c) {
    try {
      if (!n.cardHolderName)
        throw new Error("Card holder name is required.");
      if (!n.cardNumber.parentElm.classList.contains(n.cardNumber.stateClass.complete))
        throw new Error("Invalid card number.");
      if (!n.cardExpiry.parentElm.classList.contains(n.cardExpiry.stateClass.complete))
        throw new Error("Invalid card expiry.");
      if (!n.cardCvc.parentElm.classList.contains(n.cardCvc.stateClass.complete))
        throw new Error("Invalid card cvc.");
    } catch (g) {
      console.error(g), c.onError(g), c.onComplete();
      return;
    }
    try {
      const g = await yi(s, {
        cardHolderName: n.cardHolderName,
        sessionToken: e,
        paymentOption: n.cardNumber
      });
      c.onSuccess(g);
    } catch (g) {
      console.error(g), c.onError(g);
    }
    c.onComplete();
  }
  return !s || !f || !e ? null : /* @__PURE__ */ re.jsx($a.Provider, { value: { submitPayment: l, form: n, updateField: _, safeCharge: s, safeChargeFields: f }, children: t });
}
function Un() {
  return Aa($a);
}
function gi(t) {
  switch (t) {
    case "cardNumber":
      return "ccNumber";
    case "cardExpiry":
      return "ccExpiration";
    case "cardCvc":
      return "ccCvc";
  }
}
const jn = ai(({ fieldType: t }) => {
  const { updateField: e, safeChargeFields: r } = Un(), n = `accru-payment-form-${t}-container`;
  return yt(() => {
    const a = gi(t);
    if (!r.instances.map((s) => s.type).includes(a)) {
      const s = r.create(a, {});
      s.attach(`#${n}`), e(t, s);
    }
  }, []), /* @__PURE__ */ re.jsx("div", { id: n });
});
function Ti() {
  return /* @__PURE__ */ re.jsx(jn, { fieldType: "cardNumber" });
}
function _i() {
  return /* @__PURE__ */ re.jsx(jn, { fieldType: "cardExpiry" });
}
function Ei() {
  return /* @__PURE__ */ re.jsx(jn, { fieldType: "cardCvc" });
}
function Si(t) {
  const { updateField: e } = Un();
  function r(n) {
    return e("cardHolderName", n.target.value);
  }
  return /* @__PURE__ */ re.jsx(Ia, { ...t, onChange: r });
}
function bi(t) {
  const { submitPayment: e } = Un();
  return /* @__PURE__ */ re.jsx(Ma, { ...t, submitPayment: e });
}
const Oi = {
  CardHolderName: Si,
  CreditCardNumber: Ti,
  CreditCardExpiration: _i,
  CreditCardCvc: Ei,
  SubmitBtn: bi
};
class be {
  /** The client name used for diagnostics. */
  getClientName() {
    throw new Error("getClientName not implemented.");
  }
  makeRequest(e, r, n, a, s, d, f, v) {
    throw new Error("makeRequest not implemented.");
  }
  /** Helper to make a consistent timeout error across implementations. */
  static makeTimeoutError() {
    const e = new TypeError(be.TIMEOUT_ERROR_CODE);
    return e.code = be.TIMEOUT_ERROR_CODE, e;
  }
}
be.CONNECTION_CLOSED_ERROR_CODES = ["ECONNRESET", "EPIPE"];
be.TIMEOUT_ERROR_CODE = "ETIMEDOUT";
class Ga {
  constructor(e, r) {
    this._statusCode = e, this._headers = r;
  }
  getStatusCode() {
    return this._statusCode;
  }
  getHeaders() {
    return this._headers;
  }
  getRawResponse() {
    throw new Error("getRawResponse not implemented.");
  }
  toStream(e) {
    throw new Error("toStream not implemented.");
  }
  toJSON() {
    throw new Error("toJSON not implemented.");
  }
}
class Or extends be {
  constructor(e) {
    if (super(), !e) {
      if (!globalThis.fetch)
        throw new Error("fetch() function not provided and is not defined in the global scope. You must provide a fetch implementation.");
      e = globalThis.fetch;
    }
    globalThis.AbortController ? this._fetchFn = Or.makeFetchWithAbortTimeout(e) : this._fetchFn = Or.makeFetchWithRaceTimeout(e);
  }
  static makeFetchWithRaceTimeout(e) {
    return (r, n, a) => {
      let s;
      const d = new Promise((v, _) => {
        s = setTimeout(() => {
          s = null, _(be.makeTimeoutError());
        }, a);
      }), f = e(r, n);
      return Promise.race([f, d]).finally(() => {
        s && clearTimeout(s);
      });
    };
  }
  static makeFetchWithAbortTimeout(e) {
    return async (r, n, a) => {
      const s = new AbortController();
      let d = setTimeout(() => {
        d = null, s.abort(be.makeTimeoutError());
      }, a);
      try {
        return await e(r, Object.assign(Object.assign({}, n), { signal: s.signal }));
      } catch (f) {
        throw f.name === "AbortError" ? be.makeTimeoutError() : f;
      } finally {
        d && clearTimeout(d);
      }
    };
  }
  /** @override. */
  getClientName() {
    return "fetch";
  }
  async makeRequest(e, r, n, a, s, d, f, v) {
    const _ = f === "http", l = new URL(n, `${_ ? "http" : "https"}://${e}`);
    l.port = r;
    const c = a == "POST" || a == "PUT" || a == "PATCH", g = d || (c ? "" : void 0), P = await this._fetchFn(l.toString(), {
      method: a,
      // @ts-ignore
      headers: s,
      // @ts-ignore
      body: g
    }, v);
    return new Hn(P);
  }
}
class Hn extends Ga {
  constructor(e) {
    super(e.status, Hn._transformHeadersToObject(e.headers)), this._res = e;
  }
  getRawResponse() {
    return this._res;
  }
  toStream(e) {
    return e(), this._res.body;
  }
  toJSON() {
    return this._res.json();
  }
  static _transformHeadersToObject(e) {
    const r = {};
    for (const n of e) {
      if (!Array.isArray(n) || n.length != 2)
        throw new Error("Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.");
      r[n[0]] = n[1];
    }
    return r;
  }
}
class Da {
  /**
   * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
   * The output HMAC should be encoded in hexadecimal.
   *
   * Sample values for implementations:
   * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
   * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
   */
  computeHMACSignature(e, r) {
    throw new Error("computeHMACSignature not implemented.");
  }
  /**
   * Asynchronous version of `computeHMACSignature`. Some implementations may
   * only allow support async signature computation.
   *
   * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
   * The output HMAC should be encoded in hexadecimal.
   *
   * Sample values for implementations:
   * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
   * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
   */
  computeHMACSignatureAsync(e, r) {
    throw new Error("computeHMACSignatureAsync not implemented.");
  }
  /**
   * Computes a SHA-256 hash of the data.
   */
  computeSHA256Async(e) {
    throw new Error("computeSHA256 not implemented.");
  }
}
class qa extends Error {
}
class wi extends Da {
  constructor(e) {
    super(), this.subtleCrypto = e || crypto.subtle;
  }
  /** @override */
  computeHMACSignature(e, r) {
    throw new qa("SubtleCryptoProvider cannot be used in a synchronous context.");
  }
  /** @override */
  async computeHMACSignatureAsync(e, r) {
    const n = new TextEncoder(), a = await this.subtleCrypto.importKey("raw", n.encode(r), {
      name: "HMAC",
      hash: { name: "SHA-256" }
    }, !1, ["sign"]), s = await this.subtleCrypto.sign("hmac", a, n.encode(e)), d = new Uint8Array(s), f = new Array(d.length);
    for (let v = 0; v < d.length; v++)
      f[v] = Fn[d[v]];
    return f.join("");
  }
  /** @override */
  async computeSHA256Async(e) {
    return new Uint8Array(await this.subtleCrypto.digest("SHA-256", e));
  }
}
const Fn = new Array(256);
for (let t = 0; t < Fn.length; t++)
  Fn[t] = t.toString(16).padStart(2, "0");
class xi {
  constructor() {
    this._fetchFn = null, this._agent = null;
  }
  /**
   * Gets uname with Node's built-in `exec` function, if available.
   */
  getUname() {
    throw new Error("getUname not implemented.");
  }
  /**
   * Generates a v4 UUID. See https://stackoverflow.com/a/2117523
   */
  uuid4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
      const r = Math.random() * 16 | 0;
      return (e === "x" ? r : r & 3 | 8).toString(16);
    });
  }
  /**
   * Compares strings in constant time.
   */
  secureCompare(e, r) {
    if (e.length !== r.length)
      return !1;
    const n = e.length;
    let a = 0;
    for (let s = 0; s < n; ++s)
      a |= e.charCodeAt(s) ^ r.charCodeAt(s);
    return a === 0;
  }
  /**
   * Creates an event emitter.
   */
  createEmitter() {
    throw new Error("createEmitter not implemented.");
  }
  /**
   * Checks if the request data is a stream. If so, read the entire stream
   * to a buffer and return the buffer.
   */
  tryBufferData(e) {
    throw new Error("tryBufferData not implemented.");
  }
  /**
   * Creates an HTTP client which uses the Node `http` and `https` packages
   * to issue requests.
   */
  createNodeHttpClient(e) {
    throw new Error("createNodeHttpClient not implemented.");
  }
  /**
   * Creates an HTTP client for issuing Stripe API requests which uses the Web
   * Fetch API.
   *
   * A fetch function can optionally be passed in as a parameter. If none is
   * passed, will default to the default `fetch` function in the global scope.
   */
  createFetchHttpClient(e) {
    return new Or(e);
  }
  /**
   * Creates an HTTP client using runtime-specific APIs.
   */
  createDefaultHttpClient() {
    throw new Error("createDefaultHttpClient not implemented.");
  }
  /**
   * Creates a CryptoProvider which uses the Node `crypto` package for its computations.
   */
  createNodeCryptoProvider() {
    throw new Error("createNodeCryptoProvider not implemented.");
  }
  /**
   * Creates a CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
   */
  createSubtleCryptoProvider(e) {
    return new wi(e);
  }
  createDefaultCryptoProvider() {
    throw new Error("createDefaultCryptoProvider not implemented.");
  }
}
class Ci extends Event {
  constructor(e, r) {
    super(e), this.data = r;
  }
}
class Ai {
  constructor() {
    this.eventTarget = new EventTarget(), this.listenerMapping = /* @__PURE__ */ new Map();
  }
  on(e, r) {
    const n = (a) => {
      r(a.data);
    };
    return this.listenerMapping.set(r, n), this.eventTarget.addEventListener(e, n);
  }
  removeListener(e, r) {
    const n = this.listenerMapping.get(r);
    return this.listenerMapping.delete(r), this.eventTarget.removeEventListener(e, n);
  }
  once(e, r) {
    const n = (a) => {
      r(a.data);
    };
    return this.listenerMapping.set(r, n), this.eventTarget.addEventListener(e, n, {
      once: !0
    });
  }
  emit(e, r) {
    return this.eventTarget.dispatchEvent(new Ci(e, r));
  }
}
class Ri extends xi {
  /** @override */
  getUname() {
    return Promise.resolve(null);
  }
  /** @override */
  createEmitter() {
    return new Ai();
  }
  /** @override */
  tryBufferData(e) {
    if (e.file.data instanceof ReadableStream)
      throw new Error("Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case.");
    return Promise.resolve(e);
  }
  /** @override */
  createNodeHttpClient() {
    throw new Error("Stripe: `createNodeHttpClient()` is not available in non-Node environments. Please use `createFetchHttpClient()` instead.");
  }
  /** @override */
  createDefaultHttpClient() {
    return super.createFetchHttpClient();
  }
  /** @override */
  createNodeCryptoProvider() {
    throw new Error("Stripe: `createNodeCryptoProvider()` is not available in non-Node environments. Please use `createSubtleCryptoProvider()` instead.");
  }
  /** @override */
  createDefaultCryptoProvider() {
    return this.createSubtleCryptoProvider();
  }
}
const xr = (t) => {
  switch (t.type) {
    case "card_error":
      return new Fa(t);
    case "invalid_request_error":
      return new Bn(t);
    case "api_error":
      return new Wn(t);
    case "authentication_error":
      return new zn(t);
    case "rate_limit_error":
      return new Vn(t);
    case "idempotency_error":
      return new Ua(t);
    case "invalid_grant":
      return new ja(t);
    default:
      return new Ha(t);
  }
}, ka = (t) => {
  switch (t.type) {
    // switchCases: The beginning of the section generated from our OpenAPI spec
    case "temporary_session_expired":
      return new Ba(t);
  }
  switch (t.code) {
    case "invalid_fields":
      return new Bn(t);
  }
  return xr(t);
};
class he extends Error {
  constructor(e = {}, r = null) {
    super(e.message), this.type = r || this.constructor.name, this.raw = e, this.rawType = e.type, this.code = e.code, this.doc_url = e.doc_url, this.param = e.param, this.detail = e.detail, this.headers = e.headers, this.requestId = e.requestId, this.statusCode = e.statusCode, this.message = e.message, this.userMessage = e.user_message, this.charge = e.charge, this.decline_code = e.decline_code, this.payment_intent = e.payment_intent, this.payment_method = e.payment_method, this.payment_method_type = e.payment_method_type, this.setup_intent = e.setup_intent, this.source = e.source;
  }
}
he.generate = xr;
class Fa extends he {
  constructor(e = {}) {
    super(e, "StripeCardError");
  }
}
class Bn extends he {
  constructor(e = {}) {
    super(e, "StripeInvalidRequestError");
  }
}
class Wn extends he {
  constructor(e = {}) {
    super(e, "StripeAPIError");
  }
}
class zn extends he {
  constructor(e = {}) {
    super(e, "StripeAuthenticationError");
  }
}
class Na extends he {
  constructor(e = {}) {
    super(e, "StripePermissionError");
  }
}
class Vn extends he {
  constructor(e = {}) {
    super(e, "StripeRateLimitError");
  }
}
class La extends he {
  constructor(e = {}) {
    super(e, "StripeConnectionError");
  }
}
class ze extends he {
  constructor(e, r, n = {}) {
    super(n, "StripeSignatureVerificationError"), this.header = e, this.payload = r;
  }
}
class Ua extends he {
  constructor(e = {}) {
    super(e, "StripeIdempotencyError");
  }
}
class ja extends he {
  constructor(e = {}) {
    super(e, "StripeInvalidGrantError");
  }
}
class Ha extends he {
  constructor(e = {}) {
    super(e, "StripeUnknownError");
  }
}
class Ba extends he {
  constructor(e = {}) {
    super(e, "TemporarySessionExpiredError");
  }
}
const io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  StripeAPIError: Wn,
  StripeAuthenticationError: zn,
  StripeCardError: Fa,
  StripeConnectionError: La,
  StripeError: he,
  StripeIdempotencyError: Ua,
  StripeInvalidGrantError: ja,
  StripeInvalidRequestError: Bn,
  StripePermissionError: Na,
  StripeRateLimitError: Vn,
  StripeSignatureVerificationError: ze,
  StripeUnknownError: Ha,
  TemporarySessionExpiredError: Ba,
  generateV1Error: xr,
  generateV2Error: ka
}, Symbol.toStringTag, { value: "Module" }));
var Dr, so;
function Pt() {
  return so || (so = 1, Dr = TypeError), Dr;
}
const Mi = {}, Ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mi
}, Symbol.toStringTag, { value: "Module" })), $i = /* @__PURE__ */ ci(Ii);
var qr, lo;
function Cr() {
  if (lo) return qr;
  lo = 1;
  var t = typeof Map == "function" && Map.prototype, e = Object.getOwnPropertyDescriptor && t ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = t && e && typeof e.get == "function" ? e.get : null, n = t && Map.prototype.forEach, a = typeof Set == "function" && Set.prototype, s = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, d = a && s && typeof s.get == "function" ? s.get : null, f = a && Set.prototype.forEach, v = typeof WeakMap == "function" && WeakMap.prototype, _ = v ? WeakMap.prototype.has : null, l = typeof WeakSet == "function" && WeakSet.prototype, c = l ? WeakSet.prototype.has : null, g = typeof WeakRef == "function" && WeakRef.prototype, P = g ? WeakRef.prototype.deref : null, T = Boolean.prototype.valueOf, O = Object.prototype.toString, u = Function.prototype.toString, p = String.prototype.match, y = String.prototype.slice, b = String.prototype.replace, S = String.prototype.toUpperCase, C = String.prototype.toLowerCase, w = RegExp.prototype.test, $ = Array.prototype.concat, R = Array.prototype.join, G = Array.prototype.slice, A = Math.floor, U = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, I = Object.getOwnPropertySymbols, Q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Z = typeof Symbol == "function" && typeof Symbol.iterator == "object", N = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Z || !0) ? Symbol.toStringTag : null, fe = Object.prototype.propertyIsEnumerable, Oe = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(h) {
    return h.__proto__;
  } : null);
  function F(h, m) {
    if (h === 1 / 0 || h === -1 / 0 || h !== h || h && h > -1e3 && h < 1e3 || w.call(/e/, m))
      return m;
    var L = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof h == "number") {
      var Y = h < 0 ? -A(-h) : A(h);
      if (Y !== h) {
        var K = String(Y), D = y.call(m, K.length + 1);
        return b.call(K, L, "$&_") + "." + b.call(b.call(D, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return b.call(m, L, "$&_");
  }
  var ye = $i, pe = ye.custom, Me = oe(pe) ? pe : null, Ie = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Ne = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  qr = function h(m, L, Y, K) {
    var D = L || {};
    if (ae(D, "quoteStyle") && !ae(Ie, D.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (ae(D, "maxStringLength") && (typeof D.maxStringLength == "number" ? D.maxStringLength < 0 && D.maxStringLength !== 1 / 0 : D.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var ve = ae(D, "customInspect") ? D.customInspect : !0;
    if (typeof ve != "boolean" && ve !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (ae(D, "indent") && D.indent !== null && D.indent !== "	" && !(parseInt(D.indent, 10) === D.indent && D.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (ae(D, "numericSeparator") && typeof D.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Ce = D.numericSeparator;
    if (typeof m > "u")
      return "undefined";
    if (m === null)
      return "null";
    if (typeof m == "boolean")
      return m ? "true" : "false";
    if (typeof m == "string")
      return Tt(m, D);
    if (typeof m == "number") {
      if (m === 0)
        return 1 / 0 / m > 0 ? "0" : "-0";
      var ce = String(m);
      return Ce ? F(m, ce) : ce;
    }
    if (typeof m == "bigint") {
      var Ae = String(m) + "n";
      return Ce ? F(m, Ae) : Ae;
    }
    var bt = typeof D.depth > "u" ? 5 : D.depth;
    if (typeof Y > "u" && (Y = 0), Y >= bt && bt > 0 && typeof m == "object")
      return ne(m) ? "[Array]" : "[Object]";
    var ke = $r(D, Y);
    if (typeof K > "u")
      K = [];
    else if (Ee(K, m) >= 0)
      return "[Circular]";
    function _e(q, k, de) {
      if (k && (K = G.call(K), K.push(k)), de) {
        var X = {
          depth: D.depth
        };
        return ae(D, "quoteStyle") && (X.quoteStyle = D.quoteStyle), h(q, X, Y + 1, K);
      }
      return h(q, D, Y + 1, K);
    }
    if (typeof m == "function" && !V(m)) {
      var Ot = ge(m), wt = ot(m, _e);
      return "[Function" + (Ot ? ": " + Ot : " (anonymous)") + "]" + (wt.length > 0 ? " { " + R.call(wt, ", ") + " }" : "");
    }
    if (oe(m)) {
      var Qt = Z ? b.call(String(m), /^(Symbol\(.*\))_[^)]*$/, "$1") : Q.call(m);
      return typeof m == "object" && !Z ? Ke(Qt) : Qt;
    }
    if (Jt(m)) {
      for (var Ye = "<" + C.call(String(m.nodeName)), at = m.attributes || [], Je = 0; Je < at.length; Je++)
        Ye += " " + at[Je].name + "=" + $e(we(at[Je].value), "double", D);
      return Ye += ">", m.childNodes && m.childNodes.length && (Ye += "..."), Ye += "</" + C.call(String(m.nodeName)) + ">", Ye;
    }
    if (ne(m)) {
      if (m.length === 0)
        return "[]";
      var xt = ot(m, _e);
      return ke && !Et(xt) ? "[" + St(xt, ke) + "]" : "[ " + R.call(xt, ", ") + " ]";
    }
    if (W(m)) {
      var Ct = ot(m, _e);
      return !("cause" in Error.prototype) && "cause" in m && !fe.call(m, "cause") ? "{ [" + String(m) + "] " + R.call($.call("[cause]: " + _e(m.cause), Ct), ", ") + " }" : Ct.length === 0 ? "[" + String(m) + "]" : "{ [" + String(m) + "] " + R.call(Ct, ", ") + " }";
    }
    if (typeof m == "object" && ve) {
      if (Me && typeof m[Me] == "function" && ye)
        return ye(m, { depth: bt - Y });
      if (ve !== "symbol" && typeof m.inspect == "function")
        return m.inspect();
    }
    if (Le(m)) {
      var Xt = [];
      return n && n.call(m, function(q, k) {
        Xt.push(_e(k, m, !0) + " => " + _e(q, m));
      }), _t("Map", r.call(m), Xt, ke);
    }
    if (Mr(m)) {
      var Zt = [];
      return f && f.call(m, function(q) {
        Zt.push(_e(q, m));
      }), _t("Set", d.call(m), Zt, ke);
    }
    if (Ue(m))
      return nt("WeakMap");
    if (Ir(m))
      return nt("WeakSet");
    if (gt(m))
      return nt("WeakRef");
    if (le(m))
      return Ke(_e(Number(m)));
    if (xe(m))
      return Ke(_e(U.call(m)));
    if (me(m))
      return Ke(T.call(m));
    if (z(m))
      return Ke(_e(String(m)));
    if (typeof window < "u" && m === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && m === globalThis || typeof ro < "u" && m === ro)
      return "{ [object globalThis] }";
    if (!H(m) && !V(m)) {
      var i = ot(m, _e), E = Oe ? Oe(m) === Object.prototype : m instanceof Object || m.constructor === Object, x = m instanceof Object ? "" : "null prototype", M = !E && N && Object(m) === m && N in m ? y.call(ue(m), 8, -1) : x ? "Object" : "", j = E || typeof m.constructor != "function" ? "" : m.constructor.name ? m.constructor.name + " " : "", B = j + (M || x ? "[" + R.call($.call([], M || [], x || []), ": ") + "] " : "");
      return i.length === 0 ? B + "{}" : ke ? B + "{" + St(i, ke) + "}" : B + "{ " + R.call(i, ", ") + " }";
    }
    return String(m);
  };
  function $e(h, m, L) {
    var Y = L.quoteStyle || m, K = Ie[Y];
    return K + h + K;
  }
  function we(h) {
    return b.call(String(h), /"/g, "&quot;");
  }
  function ne(h) {
    return ue(h) === "[object Array]" && (!N || !(typeof h == "object" && N in h));
  }
  function H(h) {
    return ue(h) === "[object Date]" && (!N || !(typeof h == "object" && N in h));
  }
  function V(h) {
    return ue(h) === "[object RegExp]" && (!N || !(typeof h == "object" && N in h));
  }
  function W(h) {
    return ue(h) === "[object Error]" && (!N || !(typeof h == "object" && N in h));
  }
  function z(h) {
    return ue(h) === "[object String]" && (!N || !(typeof h == "object" && N in h));
  }
  function le(h) {
    return ue(h) === "[object Number]" && (!N || !(typeof h == "object" && N in h));
  }
  function me(h) {
    return ue(h) === "[object Boolean]" && (!N || !(typeof h == "object" && N in h));
  }
  function oe(h) {
    if (Z)
      return h && typeof h == "object" && h instanceof Symbol;
    if (typeof h == "symbol")
      return !0;
    if (!h || typeof h != "object" || !Q)
      return !1;
    try {
      return Q.call(h), !0;
    } catch {
    }
    return !1;
  }
  function xe(h) {
    if (!h || typeof h != "object" || !U)
      return !1;
    try {
      return U.call(h), !0;
    } catch {
    }
    return !1;
  }
  var Pe = Object.prototype.hasOwnProperty || function(h) {
    return h in this;
  };
  function ae(h, m) {
    return Pe.call(h, m);
  }
  function ue(h) {
    return O.call(h);
  }
  function ge(h) {
    if (h.name)
      return h.name;
    var m = p.call(u.call(h), /^function\s*([\w$]+)/);
    return m ? m[1] : null;
  }
  function Ee(h, m) {
    if (h.indexOf)
      return h.indexOf(m);
    for (var L = 0, Y = h.length; L < Y; L++)
      if (h[L] === m)
        return L;
    return -1;
  }
  function Le(h) {
    if (!r || !h || typeof h != "object")
      return !1;
    try {
      r.call(h);
      try {
        d.call(h);
      } catch {
        return !0;
      }
      return h instanceof Map;
    } catch {
    }
    return !1;
  }
  function Ue(h) {
    if (!_ || !h || typeof h != "object")
      return !1;
    try {
      _.call(h, _);
      try {
        c.call(h, c);
      } catch {
        return !0;
      }
      return h instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function gt(h) {
    if (!P || !h || typeof h != "object")
      return !1;
    try {
      return P.call(h), !0;
    } catch {
    }
    return !1;
  }
  function Mr(h) {
    if (!d || !h || typeof h != "object")
      return !1;
    try {
      d.call(h);
      try {
        r.call(h);
      } catch {
        return !0;
      }
      return h instanceof Set;
    } catch {
    }
    return !1;
  }
  function Ir(h) {
    if (!c || !h || typeof h != "object")
      return !1;
    try {
      c.call(h, c);
      try {
        _.call(h, _);
      } catch {
        return !0;
      }
      return h instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Jt(h) {
    return !h || typeof h != "object" ? !1 : typeof HTMLElement < "u" && h instanceof HTMLElement ? !0 : typeof h.nodeName == "string" && typeof h.getAttribute == "function";
  }
  function Tt(h, m) {
    if (h.length > m.maxStringLength) {
      var L = h.length - m.maxStringLength, Y = "... " + L + " more character" + (L > 1 ? "s" : "");
      return Tt(y.call(h, 0, m.maxStringLength), m) + Y;
    }
    var K = Ne[m.quoteStyle || "single"];
    K.lastIndex = 0;
    var D = b.call(b.call(h, K, "\\$1"), /[\x00-\x1f]/g, Ve);
    return $e(D, "single", m);
  }
  function Ve(h) {
    var m = h.charCodeAt(0), L = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[m];
    return L ? "\\" + L : "\\x" + (m < 16 ? "0" : "") + S.call(m.toString(16));
  }
  function Ke(h) {
    return "Object(" + h + ")";
  }
  function nt(h) {
    return h + " { ? }";
  }
  function _t(h, m, L, Y) {
    var K = Y ? St(L, Y) : R.call(L, ", ");
    return h + " (" + m + ") {" + K + "}";
  }
  function Et(h) {
    for (var m = 0; m < h.length; m++)
      if (Ee(h[m], `
`) >= 0)
        return !1;
    return !0;
  }
  function $r(h, m) {
    var L;
    if (h.indent === "	")
      L = "	";
    else if (typeof h.indent == "number" && h.indent > 0)
      L = R.call(Array(h.indent + 1), " ");
    else
      return null;
    return {
      base: L,
      prev: R.call(Array(m + 1), L)
    };
  }
  function St(h, m) {
    if (h.length === 0)
      return "";
    var L = `
` + m.prev + m.base;
    return L + R.call(h, "," + L) + `
` + m.prev;
  }
  function ot(h, m) {
    var L = ne(h), Y = [];
    if (L) {
      Y.length = h.length;
      for (var K = 0; K < h.length; K++)
        Y[K] = ae(h, K) ? m(h[K], h) : "";
    }
    var D = typeof I == "function" ? I(h) : [], ve;
    if (Z) {
      ve = {};
      for (var Ce = 0; Ce < D.length; Ce++)
        ve["$" + D[Ce]] = D[Ce];
    }
    for (var ce in h)
      ae(h, ce) && (L && String(Number(ce)) === ce && ce < h.length || Z && ve["$" + ce] instanceof Symbol || (w.call(/[^\w$]/, ce) ? Y.push(m(ce, h) + ": " + m(h[ce], h)) : Y.push(ce + ": " + m(h[ce], h))));
    if (typeof I == "function")
      for (var Ae = 0; Ae < D.length; Ae++)
        fe.call(h, D[Ae]) && Y.push("[" + m(D[Ae]) + "]: " + m(h[D[Ae]], h));
    return Y;
  }
  return qr;
}
var kr, uo;
function Gi() {
  if (uo) return kr;
  uo = 1;
  var t = /* @__PURE__ */ Cr(), e = /* @__PURE__ */ Pt(), r = function(f, v, _) {
    for (var l = f, c; (c = l.next) != null; l = c)
      if (c.key === v)
        return l.next = c.next, _ || (c.next = /** @type {NonNullable<typeof list.next>} */
        f.next, f.next = c), c;
  }, n = function(f, v) {
    if (f) {
      var _ = r(f, v);
      return _ && _.value;
    }
  }, a = function(f, v, _) {
    var l = r(f, v);
    l ? l.value = _ : f.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: v,
      next: f.next,
      value: _
    };
  }, s = function(f, v) {
    return f ? !!r(f, v) : !1;
  }, d = function(f, v) {
    if (f)
      return r(f, v, !0);
  };
  return kr = function() {
    var v, _ = {
      assert: function(l) {
        if (!_.has(l))
          throw new e("Side channel does not contain " + t(l));
      },
      delete: function(l) {
        var c = v && v.next, g = d(v, l);
        return g && c && c === g && (v = void 0), !!g;
      },
      get: function(l) {
        return n(v, l);
      },
      has: function(l) {
        return s(v, l);
      },
      set: function(l, c) {
        v || (v = {
          next: void 0
        }), a(
          /** @type {NonNullable<typeof $o>} */
          v,
          l,
          c
        );
      }
    };
    return _;
  }, kr;
}
var Fr, co;
function Di() {
  return co || (co = 1, Fr = Object), Fr;
}
var Nr, ho;
function qi() {
  return ho || (ho = 1, Nr = Error), Nr;
}
var Lr, fo;
function ki() {
  return fo || (fo = 1, Lr = EvalError), Lr;
}
var Ur, po;
function Fi() {
  return po || (po = 1, Ur = RangeError), Ur;
}
var jr, mo;
function Ni() {
  return mo || (mo = 1, jr = ReferenceError), jr;
}
var Hr, vo;
function Li() {
  return vo || (vo = 1, Hr = SyntaxError), Hr;
}
var Br, yo;
function Ui() {
  return yo || (yo = 1, Br = URIError), Br;
}
var Wr, Po;
function ji() {
  return Po || (Po = 1, Wr = Math.abs), Wr;
}
var zr, go;
function Hi() {
  return go || (go = 1, zr = Math.floor), zr;
}
var Vr, To;
function Bi() {
  return To || (To = 1, Vr = Math.max), Vr;
}
var Kr, _o;
function Wi() {
  return _o || (_o = 1, Kr = Math.min), Kr;
}
var Yr, Eo;
function zi() {
  return Eo || (Eo = 1, Yr = Math.pow), Yr;
}
var Jr, So;
function Vi() {
  return So || (So = 1, Jr = Object.getOwnPropertyDescriptor), Jr;
}
var Qr, bo;
function Wa() {
  if (bo) return Qr;
  bo = 1;
  var t = /* @__PURE__ */ Vi();
  if (t)
    try {
      t([], "length");
    } catch {
      t = null;
    }
  return Qr = t, Qr;
}
var Xr, Oo;
function Ki() {
  if (Oo) return Xr;
  Oo = 1;
  var t = Object.defineProperty || !1;
  if (t)
    try {
      t({}, "a", { value: 1 });
    } catch {
      t = !1;
    }
  return Xr = t, Xr;
}
var Zr, wo;
function Yi() {
  return wo || (wo = 1, Zr = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var a = 42;
    e[r] = a;
    for (var s in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var d = Object.getOwnPropertySymbols(e);
    if (d.length !== 1 || d[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var f = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(e, r)
      );
      if (f.value !== a || f.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Zr;
}
var en, xo;
function Ji() {
  if (xo) return en;
  xo = 1;
  var t = typeof Symbol < "u" && Symbol, e = Yi();
  return en = function() {
    return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, en;
}
var tn, Co;
function Qi() {
  if (Co) return tn;
  Co = 1;
  var t = "Function.prototype.bind called on incompatible ", e = Object.prototype.toString, r = Math.max, n = "[object Function]", a = function(v, _) {
    for (var l = [], c = 0; c < v.length; c += 1)
      l[c] = v[c];
    for (var g = 0; g < _.length; g += 1)
      l[g + v.length] = _[g];
    return l;
  }, s = function(v, _) {
    for (var l = [], c = _, g = 0; c < v.length; c += 1, g += 1)
      l[g] = v[c];
    return l;
  }, d = function(f, v) {
    for (var _ = "", l = 0; l < f.length; l += 1)
      _ += f[l], l + 1 < f.length && (_ += v);
    return _;
  };
  return tn = function(v) {
    var _ = this;
    if (typeof _ != "function" || e.apply(_) !== n)
      throw new TypeError(t + _);
    for (var l = s(arguments, 1), c, g = function() {
      if (this instanceof c) {
        var p = _.apply(
          this,
          a(l, arguments)
        );
        return Object(p) === p ? p : this;
      }
      return _.apply(
        v,
        a(l, arguments)
      );
    }, P = r(0, _.length - l.length), T = [], O = 0; O < P; O++)
      T[O] = "$" + O;
    if (c = Function("binder", "return function (" + d(T, ",") + "){ return binder.apply(this,arguments); }")(g), _.prototype) {
      var u = function() {
      };
      u.prototype = _.prototype, c.prototype = new u(), u.prototype = null;
    }
    return c;
  }, tn;
}
var rn, Ao;
function Ar() {
  if (Ao) return rn;
  Ao = 1;
  var t = Qi();
  return rn = Function.prototype.bind || t, rn;
}
var nn, Ro;
function Kn() {
  return Ro || (Ro = 1, nn = Function.prototype.call), nn;
}
var on, Mo;
function za() {
  return Mo || (Mo = 1, on = Function.prototype.apply), on;
}
var an, Io;
function Xi() {
  return Io || (Io = 1, an = typeof Reflect < "u" && Reflect && Reflect.apply), an;
}
var sn, $o;
function Zi() {
  if ($o) return sn;
  $o = 1;
  var t = Ar(), e = za(), r = Kn(), n = Xi();
  return sn = n || t.call(r, e), sn;
}
var ln, Go;
function Va() {
  if (Go) return ln;
  Go = 1;
  var t = Ar(), e = /* @__PURE__ */ Pt(), r = Kn(), n = Zi();
  return ln = function(s) {
    if (s.length < 1 || typeof s[0] != "function")
      throw new e("a function is required");
    return n(t, r, s);
  }, ln;
}
var un, Do;
function es() {
  if (Do) return un;
  Do = 1;
  var t = Va(), e = /* @__PURE__ */ Wa(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (d) {
    if (!d || typeof d != "object" || !("code" in d) || d.code !== "ERR_PROTO_ACCESS")
      throw d;
  }
  var n = !!r && e && e(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), a = Object, s = a.getPrototypeOf;
  return un = n && typeof n.get == "function" ? t([n.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(f) {
      return s(f == null ? f : a(f));
    }
  ) : !1, un;
}
var cn, qo;
function ts() {
  if (qo) return cn;
  qo = 1;
  var t = Function.prototype.call, e = Object.prototype.hasOwnProperty, r = Ar();
  return cn = r.call(t, e), cn;
}
var dn, ko;
function Yn() {
  if (ko) return dn;
  ko = 1;
  var t, e = /* @__PURE__ */ Di(), r = /* @__PURE__ */ qi(), n = /* @__PURE__ */ ki(), a = /* @__PURE__ */ Fi(), s = /* @__PURE__ */ Ni(), d = /* @__PURE__ */ Li(), f = /* @__PURE__ */ Pt(), v = /* @__PURE__ */ Ui(), _ = /* @__PURE__ */ ji(), l = /* @__PURE__ */ Hi(), c = /* @__PURE__ */ Bi(), g = /* @__PURE__ */ Wi(), P = /* @__PURE__ */ zi(), T = Function, O = function(ne) {
    try {
      return T('"use strict"; return (' + ne + ").constructor;")();
    } catch {
    }
  }, u = /* @__PURE__ */ Wa(), p = /* @__PURE__ */ Ki(), y = function() {
    throw new f();
  }, b = u ? function() {
    try {
      return arguments.callee, y;
    } catch {
      try {
        return u(arguments, "callee").get;
      } catch {
        return y;
      }
    }
  }() : y, S = Ji()(), C = /* @__PURE__ */ es(), w = typeof Reflect == "function" && Reflect.getPrototypeOf || e.getPrototypeOf || C, $ = za(), R = Kn(), G = {}, A = typeof Uint8Array > "u" || !w ? t : w(Uint8Array), U = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
    "%ArrayIteratorPrototype%": S && w ? w([][Symbol.iterator]()) : t,
    "%AsyncFromSyncIteratorPrototype%": t,
    "%AsyncFunction%": G,
    "%AsyncGenerator%": G,
    "%AsyncGeneratorFunction%": G,
    "%AsyncIteratorPrototype%": G,
    "%Atomics%": typeof Atomics > "u" ? t : Atomics,
    "%BigInt%": typeof BigInt > "u" ? t : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? t : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? t : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? t : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float32Array%": typeof Float32Array > "u" ? t : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? t : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? t : FinalizationRegistry,
    "%Function%": T,
    "%GeneratorFunction%": G,
    "%Int8Array%": typeof Int8Array > "u" ? t : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? t : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? t : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": S && w ? w(w([][Symbol.iterator]())) : t,
    "%JSON%": typeof JSON == "object" ? JSON : t,
    "%Map%": typeof Map > "u" ? t : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !S || !w ? t : w((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": e,
    "%Object.getOwnPropertyDescriptor%": u,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? t : Promise,
    "%Proxy%": typeof Proxy > "u" ? t : Proxy,
    "%RangeError%": a,
    "%ReferenceError%": s,
    "%Reflect%": typeof Reflect > "u" ? t : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? t : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !S || !w ? t : w((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? t : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": S && w ? w(""[Symbol.iterator]()) : t,
    "%Symbol%": S ? Symbol : t,
    "%SyntaxError%": d,
    "%ThrowTypeError%": b,
    "%TypedArray%": A,
    "%TypeError%": f,
    "%Uint8Array%": typeof Uint8Array > "u" ? t : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? t : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? t : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? t : Uint32Array,
    "%URIError%": v,
    "%WeakMap%": typeof WeakMap > "u" ? t : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? t : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? t : WeakSet,
    "%Function.prototype.call%": R,
    "%Function.prototype.apply%": $,
    "%Object.defineProperty%": p,
    "%Math.abs%": _,
    "%Math.floor%": l,
    "%Math.max%": c,
    "%Math.min%": g,
    "%Math.pow%": P
  };
  if (w)
    try {
      null.error;
    } catch (ne) {
      var I = w(w(ne));
      U["%Error.prototype%"] = I;
    }
  var Q = function ne(H) {
    var V;
    if (H === "%AsyncFunction%")
      V = O("async function () {}");
    else if (H === "%GeneratorFunction%")
      V = O("function* () {}");
    else if (H === "%AsyncGeneratorFunction%")
      V = O("async function* () {}");
    else if (H === "%AsyncGenerator%") {
      var W = ne("%AsyncGeneratorFunction%");
      W && (V = W.prototype);
    } else if (H === "%AsyncIteratorPrototype%") {
      var z = ne("%AsyncGenerator%");
      z && w && (V = w(z.prototype));
    }
    return U[H] = V, V;
  }, Z = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, N = Ar(), fe = /* @__PURE__ */ ts(), Oe = N.call(R, Array.prototype.concat), F = N.call($, Array.prototype.splice), ye = N.call(R, String.prototype.replace), pe = N.call(R, String.prototype.slice), Me = N.call(R, RegExp.prototype.exec), Ie = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ne = /\\(\\)?/g, $e = function(H) {
    var V = pe(H, 0, 1), W = pe(H, -1);
    if (V === "%" && W !== "%")
      throw new d("invalid intrinsic syntax, expected closing `%`");
    if (W === "%" && V !== "%")
      throw new d("invalid intrinsic syntax, expected opening `%`");
    var z = [];
    return ye(H, Ie, function(le, me, oe, xe) {
      z[z.length] = oe ? ye(xe, Ne, "$1") : me || le;
    }), z;
  }, we = function(H, V) {
    var W = H, z;
    if (fe(Z, W) && (z = Z[W], W = "%" + z[0] + "%"), fe(U, W)) {
      var le = U[W];
      if (le === G && (le = Q(W)), typeof le > "u" && !V)
        throw new f("intrinsic " + H + " exists, but is not available. Please file an issue!");
      return {
        alias: z,
        name: W,
        value: le
      };
    }
    throw new d("intrinsic " + H + " does not exist!");
  };
  return dn = function(H, V) {
    if (typeof H != "string" || H.length === 0)
      throw new f("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof V != "boolean")
      throw new f('"allowMissing" argument must be a boolean');
    if (Me(/^%?[^%]*%?$/, H) === null)
      throw new d("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var W = $e(H), z = W.length > 0 ? W[0] : "", le = we("%" + z + "%", V), me = le.name, oe = le.value, xe = !1, Pe = le.alias;
    Pe && (z = Pe[0], F(W, Oe([0, 1], Pe)));
    for (var ae = 1, ue = !0; ae < W.length; ae += 1) {
      var ge = W[ae], Ee = pe(ge, 0, 1), Le = pe(ge, -1);
      if ((Ee === '"' || Ee === "'" || Ee === "`" || Le === '"' || Le === "'" || Le === "`") && Ee !== Le)
        throw new d("property names with quotes must have matching quotes");
      if ((ge === "constructor" || !ue) && (xe = !0), z += "." + ge, me = "%" + z + "%", fe(U, me))
        oe = U[me];
      else if (oe != null) {
        if (!(ge in oe)) {
          if (!V)
            throw new f("base intrinsic for " + H + " exists, but the property is not available.");
          return;
        }
        if (u && ae + 1 >= W.length) {
          var Ue = u(oe, ge);
          ue = !!Ue, ue && "get" in Ue && !("originalValue" in Ue.get) ? oe = Ue.get : oe = oe[ge];
        } else
          ue = fe(oe, ge), oe = oe[ge];
        ue && !xe && (U[me] = oe);
      }
    }
    return oe;
  }, dn;
}
var hn, Fo;
function Ka() {
  if (Fo) return hn;
  Fo = 1;
  var t = /* @__PURE__ */ Yn(), e = Va(), r = e([t("%String.prototype.indexOf%")]);
  return hn = function(a, s) {
    var d = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      t(a, !!s)
    );
    return typeof d == "function" && r(a, ".prototype.") > -1 ? e([d]) : d;
  }, hn;
}
var fn, No;
function Ya() {
  if (No) return fn;
  No = 1;
  var t = /* @__PURE__ */ Yn(), e = /* @__PURE__ */ Ka(), r = /* @__PURE__ */ Cr(), n = /* @__PURE__ */ Pt(), a = t("%Map%", !0), s = e("Map.prototype.get", !0), d = e("Map.prototype.set", !0), f = e("Map.prototype.has", !0), v = e("Map.prototype.delete", !0), _ = e("Map.prototype.size", !0);
  return fn = !!a && /** @type {Exclude<import('.'), false>} */
  function() {
    var c, g = {
      assert: function(P) {
        if (!g.has(P))
          throw new n("Side channel does not contain " + r(P));
      },
      delete: function(P) {
        if (c) {
          var T = v(c, P);
          return _(c) === 0 && (c = void 0), T;
        }
        return !1;
      },
      get: function(P) {
        if (c)
          return s(c, P);
      },
      has: function(P) {
        return c ? f(c, P) : !1;
      },
      set: function(P, T) {
        c || (c = new a()), d(c, P, T);
      }
    };
    return g;
  }, fn;
}
var pn, Lo;
function rs() {
  if (Lo) return pn;
  Lo = 1;
  var t = /* @__PURE__ */ Yn(), e = /* @__PURE__ */ Ka(), r = /* @__PURE__ */ Cr(), n = Ya(), a = /* @__PURE__ */ Pt(), s = t("%WeakMap%", !0), d = e("WeakMap.prototype.get", !0), f = e("WeakMap.prototype.set", !0), v = e("WeakMap.prototype.has", !0), _ = e("WeakMap.prototype.delete", !0);
  return pn = s ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var c, g, P = {
        assert: function(T) {
          if (!P.has(T))
            throw new a("Side channel does not contain " + r(T));
        },
        delete: function(T) {
          if (s && T && (typeof T == "object" || typeof T == "function")) {
            if (c)
              return _(c, T);
          } else if (n && g)
            return g.delete(T);
          return !1;
        },
        get: function(T) {
          return s && T && (typeof T == "object" || typeof T == "function") && c ? d(c, T) : g && g.get(T);
        },
        has: function(T) {
          return s && T && (typeof T == "object" || typeof T == "function") && c ? v(c, T) : !!g && g.has(T);
        },
        set: function(T, O) {
          s && T && (typeof T == "object" || typeof T == "function") ? (c || (c = new s()), f(c, T, O)) : n && (g || (g = n()), g.set(T, O));
        }
      };
      return P;
    }
  ) : n, pn;
}
var mn, Uo;
function ns() {
  if (Uo) return mn;
  Uo = 1;
  var t = /* @__PURE__ */ Pt(), e = /* @__PURE__ */ Cr(), r = Gi(), n = Ya(), a = rs(), s = a || n || r;
  return mn = function() {
    var f, v = {
      assert: function(_) {
        if (!v.has(_))
          throw new t("Side channel does not contain " + e(_));
      },
      delete: function(_) {
        return !!f && f.delete(_);
      },
      get: function(_) {
        return f && f.get(_);
      },
      has: function(_) {
        return !!f && f.has(_);
      },
      set: function(_, l) {
        f || (f = s()), f.set(_, l);
      }
    };
    return v;
  }, mn;
}
var vn, jo;
function Jn() {
  if (jo) return vn;
  jo = 1;
  var t = String.prototype.replace, e = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return vn = {
    default: r.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return t.call(n, e, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: r.RFC1738,
    RFC3986: r.RFC3986
  }, vn;
}
var yn, Ho;
function Ja() {
  if (Ho) return yn;
  Ho = 1;
  var t = /* @__PURE__ */ Jn(), e = Object.prototype.hasOwnProperty, r = Array.isArray, n = function() {
    for (var u = [], p = 0; p < 256; ++p)
      u.push("%" + ((p < 16 ? "0" : "") + p.toString(16)).toUpperCase());
    return u;
  }(), a = function(p) {
    for (; p.length > 1; ) {
      var y = p.pop(), b = y.obj[y.prop];
      if (r(b)) {
        for (var S = [], C = 0; C < b.length; ++C)
          typeof b[C] < "u" && S.push(b[C]);
        y.obj[y.prop] = S;
      }
    }
  }, s = function(p, y) {
    for (var b = y && y.plainObjects ? { __proto__: null } : {}, S = 0; S < p.length; ++S)
      typeof p[S] < "u" && (b[S] = p[S]);
    return b;
  }, d = function u(p, y, b) {
    if (!y)
      return p;
    if (typeof y != "object" && typeof y != "function") {
      if (r(p))
        p.push(y);
      else if (p && typeof p == "object")
        (b && (b.plainObjects || b.allowPrototypes) || !e.call(Object.prototype, y)) && (p[y] = !0);
      else
        return [p, y];
      return p;
    }
    if (!p || typeof p != "object")
      return [p].concat(y);
    var S = p;
    return r(p) && !r(y) && (S = s(p, b)), r(p) && r(y) ? (y.forEach(function(C, w) {
      if (e.call(p, w)) {
        var $ = p[w];
        $ && typeof $ == "object" && C && typeof C == "object" ? p[w] = u($, C, b) : p.push(C);
      } else
        p[w] = C;
    }), p) : Object.keys(y).reduce(function(C, w) {
      var $ = y[w];
      return e.call(C, w) ? C[w] = u(C[w], $, b) : C[w] = $, C;
    }, S);
  }, f = function(p, y) {
    return Object.keys(y).reduce(function(b, S) {
      return b[S] = y[S], b;
    }, p);
  }, v = function(u, p, y) {
    var b = u.replace(/\+/g, " ");
    if (y === "iso-8859-1")
      return b.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(b);
    } catch {
      return b;
    }
  }, _ = 1024, l = function(p, y, b, S, C) {
    if (p.length === 0)
      return p;
    var w = p;
    if (typeof p == "symbol" ? w = Symbol.prototype.toString.call(p) : typeof p != "string" && (w = String(p)), b === "iso-8859-1")
      return escape(w).replace(/%u[0-9a-f]{4}/gi, function(Q) {
        return "%26%23" + parseInt(Q.slice(2), 16) + "%3B";
      });
    for (var $ = "", R = 0; R < w.length; R += _) {
      for (var G = w.length >= _ ? w.slice(R, R + _) : w, A = [], U = 0; U < G.length; ++U) {
        var I = G.charCodeAt(U);
        if (I === 45 || I === 46 || I === 95 || I === 126 || I >= 48 && I <= 57 || I >= 65 && I <= 90 || I >= 97 && I <= 122 || C === t.RFC1738 && (I === 40 || I === 41)) {
          A[A.length] = G.charAt(U);
          continue;
        }
        if (I < 128) {
          A[A.length] = n[I];
          continue;
        }
        if (I < 2048) {
          A[A.length] = n[192 | I >> 6] + n[128 | I & 63];
          continue;
        }
        if (I < 55296 || I >= 57344) {
          A[A.length] = n[224 | I >> 12] + n[128 | I >> 6 & 63] + n[128 | I & 63];
          continue;
        }
        U += 1, I = 65536 + ((I & 1023) << 10 | G.charCodeAt(U) & 1023), A[A.length] = n[240 | I >> 18] + n[128 | I >> 12 & 63] + n[128 | I >> 6 & 63] + n[128 | I & 63];
      }
      $ += A.join("");
    }
    return $;
  }, c = function(p) {
    for (var y = [{ obj: { o: p }, prop: "o" }], b = [], S = 0; S < y.length; ++S)
      for (var C = y[S], w = C.obj[C.prop], $ = Object.keys(w), R = 0; R < $.length; ++R) {
        var G = $[R], A = w[G];
        typeof A == "object" && A !== null && b.indexOf(A) === -1 && (y.push({ obj: w, prop: G }), b.push(A));
      }
    return a(y), p;
  }, g = function(p) {
    return Object.prototype.toString.call(p) === "[object RegExp]";
  }, P = function(p) {
    return !p || typeof p != "object" ? !1 : !!(p.constructor && p.constructor.isBuffer && p.constructor.isBuffer(p));
  }, T = function(p, y) {
    return [].concat(p, y);
  }, O = function(p, y) {
    if (r(p)) {
      for (var b = [], S = 0; S < p.length; S += 1)
        b.push(y(p[S]));
      return b;
    }
    return y(p);
  };
  return yn = {
    arrayToObject: s,
    assign: f,
    combine: T,
    compact: c,
    decode: v,
    encode: l,
    isBuffer: P,
    isRegExp: g,
    maybeMap: O,
    merge: d
  }, yn;
}
var Pn, Bo;
function os() {
  if (Bo) return Pn;
  Bo = 1;
  var t = ns(), e = /* @__PURE__ */ Ja(), r = /* @__PURE__ */ Jn(), n = Object.prototype.hasOwnProperty, a = {
    brackets: function(u) {
      return u + "[]";
    },
    comma: "comma",
    indices: function(u, p) {
      return u + "[" + p + "]";
    },
    repeat: function(u) {
      return u;
    }
  }, s = Array.isArray, d = Array.prototype.push, f = function(O, u) {
    d.apply(O, s(u) ? u : [u]);
  }, v = Date.prototype.toISOString, _ = r.default, l = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: e.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: _,
    formatter: r.formatters[_],
    // deprecated
    indices: !1,
    serializeDate: function(u) {
      return v.call(u);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, c = function(u) {
    return typeof u == "string" || typeof u == "number" || typeof u == "boolean" || typeof u == "symbol" || typeof u == "bigint";
  }, g = {}, P = function O(u, p, y, b, S, C, w, $, R, G, A, U, I, Q, Z, N, fe, Oe) {
    for (var F = u, ye = Oe, pe = 0, Me = !1; (ye = ye.get(g)) !== void 0 && !Me; ) {
      var Ie = ye.get(u);
      if (pe += 1, typeof Ie < "u") {
        if (Ie === pe)
          throw new RangeError("Cyclic object value");
        Me = !0;
      }
      typeof ye.get(g) > "u" && (pe = 0);
    }
    if (typeof G == "function" ? F = G(p, F) : F instanceof Date ? F = I(F) : y === "comma" && s(F) && (F = e.maybeMap(F, function(Pe) {
      return Pe instanceof Date ? I(Pe) : Pe;
    })), F === null) {
      if (C)
        return R && !N ? R(p, l.encoder, fe, "key", Q) : p;
      F = "";
    }
    if (c(F) || e.isBuffer(F)) {
      if (R) {
        var Ne = N ? p : R(p, l.encoder, fe, "key", Q);
        return [Z(Ne) + "=" + Z(R(F, l.encoder, fe, "value", Q))];
      }
      return [Z(p) + "=" + Z(String(F))];
    }
    var $e = [];
    if (typeof F > "u")
      return $e;
    var we;
    if (y === "comma" && s(F))
      N && R && (F = e.maybeMap(F, R)), we = [{ value: F.length > 0 ? F.join(",") || null : void 0 }];
    else if (s(G))
      we = G;
    else {
      var ne = Object.keys(F);
      we = A ? ne.sort(A) : ne;
    }
    var H = $ ? String(p).replace(/\./g, "%2E") : String(p), V = b && s(F) && F.length === 1 ? H + "[]" : H;
    if (S && s(F) && F.length === 0)
      return V + "[]";
    for (var W = 0; W < we.length; ++W) {
      var z = we[W], le = typeof z == "object" && z && typeof z.value < "u" ? z.value : F[z];
      if (!(w && le === null)) {
        var me = U && $ ? String(z).replace(/\./g, "%2E") : String(z), oe = s(F) ? typeof y == "function" ? y(V, me) : V : V + (U ? "." + me : "[" + me + "]");
        Oe.set(u, pe);
        var xe = t();
        xe.set(g, Oe), f($e, O(
          le,
          oe,
          y,
          b,
          S,
          C,
          w,
          $,
          y === "comma" && N && s(F) ? null : R,
          G,
          A,
          U,
          I,
          Q,
          Z,
          N,
          fe,
          xe
        ));
      }
    }
    return $e;
  }, T = function(u) {
    if (!u)
      return l;
    if (typeof u.allowEmptyArrays < "u" && typeof u.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof u.encodeDotInKeys < "u" && typeof u.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (u.encoder !== null && typeof u.encoder < "u" && typeof u.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var p = u.charset || l.charset;
    if (typeof u.charset < "u" && u.charset !== "utf-8" && u.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var y = r.default;
    if (typeof u.format < "u") {
      if (!n.call(r.formatters, u.format))
        throw new TypeError("Unknown format option provided.");
      y = u.format;
    }
    var b = r.formatters[y], S = l.filter;
    (typeof u.filter == "function" || s(u.filter)) && (S = u.filter);
    var C;
    if (u.arrayFormat in a ? C = u.arrayFormat : "indices" in u ? C = u.indices ? "indices" : "repeat" : C = l.arrayFormat, "commaRoundTrip" in u && typeof u.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var w = typeof u.allowDots > "u" ? u.encodeDotInKeys === !0 ? !0 : l.allowDots : !!u.allowDots;
    return {
      addQueryPrefix: typeof u.addQueryPrefix == "boolean" ? u.addQueryPrefix : l.addQueryPrefix,
      allowDots: w,
      allowEmptyArrays: typeof u.allowEmptyArrays == "boolean" ? !!u.allowEmptyArrays : l.allowEmptyArrays,
      arrayFormat: C,
      charset: p,
      charsetSentinel: typeof u.charsetSentinel == "boolean" ? u.charsetSentinel : l.charsetSentinel,
      commaRoundTrip: !!u.commaRoundTrip,
      delimiter: typeof u.delimiter > "u" ? l.delimiter : u.delimiter,
      encode: typeof u.encode == "boolean" ? u.encode : l.encode,
      encodeDotInKeys: typeof u.encodeDotInKeys == "boolean" ? u.encodeDotInKeys : l.encodeDotInKeys,
      encoder: typeof u.encoder == "function" ? u.encoder : l.encoder,
      encodeValuesOnly: typeof u.encodeValuesOnly == "boolean" ? u.encodeValuesOnly : l.encodeValuesOnly,
      filter: S,
      format: y,
      formatter: b,
      serializeDate: typeof u.serializeDate == "function" ? u.serializeDate : l.serializeDate,
      skipNulls: typeof u.skipNulls == "boolean" ? u.skipNulls : l.skipNulls,
      sort: typeof u.sort == "function" ? u.sort : null,
      strictNullHandling: typeof u.strictNullHandling == "boolean" ? u.strictNullHandling : l.strictNullHandling
    };
  };
  return Pn = function(O, u) {
    var p = O, y = T(u), b, S;
    typeof y.filter == "function" ? (S = y.filter, p = S("", p)) : s(y.filter) && (S = y.filter, b = S);
    var C = [];
    if (typeof p != "object" || p === null)
      return "";
    var w = a[y.arrayFormat], $ = w === "comma" && y.commaRoundTrip;
    b || (b = Object.keys(p)), y.sort && b.sort(y.sort);
    for (var R = t(), G = 0; G < b.length; ++G) {
      var A = b[G], U = p[A];
      y.skipNulls && U === null || f(C, P(
        U,
        A,
        w,
        $,
        y.allowEmptyArrays,
        y.strictNullHandling,
        y.skipNulls,
        y.encodeDotInKeys,
        y.encode ? y.encoder : null,
        y.filter,
        y.sort,
        y.allowDots,
        y.serializeDate,
        y.format,
        y.formatter,
        y.encodeValuesOnly,
        y.charset,
        R
      ));
    }
    var I = C.join(y.delimiter), Q = y.addQueryPrefix === !0 ? "?" : "";
    return y.charsetSentinel && (y.charset === "iso-8859-1" ? Q += "utf8=%26%2310003%3B&" : Q += "utf8=%E2%9C%93&"), I.length > 0 ? Q + I : "";
  }, Pn;
}
var gn, Wo;
function as() {
  if (Wo) return gn;
  Wo = 1;
  var t = /* @__PURE__ */ Ja(), e = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: t.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictNullHandling: !1
  }, a = function(g) {
    return g.replace(/&#(\d+);/g, function(P, T) {
      return String.fromCharCode(parseInt(T, 10));
    });
  }, s = function(g, P) {
    return g && typeof g == "string" && P.comma && g.indexOf(",") > -1 ? g.split(",") : g;
  }, d = "utf8=%26%2310003%3B", f = "utf8=%E2%9C%93", v = function(P, T) {
    var O = { __proto__: null }, u = T.ignoreQueryPrefix ? P.replace(/^\?/, "") : P;
    u = u.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var p = T.parameterLimit === 1 / 0 ? void 0 : T.parameterLimit, y = u.split(T.delimiter, p), b = -1, S, C = T.charset;
    if (T.charsetSentinel)
      for (S = 0; S < y.length; ++S)
        y[S].indexOf("utf8=") === 0 && (y[S] === f ? C = "utf-8" : y[S] === d && (C = "iso-8859-1"), b = S, S = y.length);
    for (S = 0; S < y.length; ++S)
      if (S !== b) {
        var w = y[S], $ = w.indexOf("]="), R = $ === -1 ? w.indexOf("=") : $ + 1, G, A;
        R === -1 ? (G = T.decoder(w, n.decoder, C, "key"), A = T.strictNullHandling ? null : "") : (G = T.decoder(w.slice(0, R), n.decoder, C, "key"), A = t.maybeMap(
          s(w.slice(R + 1), T),
          function(I) {
            return T.decoder(I, n.decoder, C, "value");
          }
        )), A && T.interpretNumericEntities && C === "iso-8859-1" && (A = a(String(A))), w.indexOf("[]=") > -1 && (A = r(A) ? [A] : A);
        var U = e.call(O, G);
        U && T.duplicates === "combine" ? O[G] = t.combine(O[G], A) : (!U || T.duplicates === "last") && (O[G] = A);
      }
    return O;
  }, _ = function(g, P, T, O) {
    for (var u = O ? P : s(P, T), p = g.length - 1; p >= 0; --p) {
      var y, b = g[p];
      if (b === "[]" && T.parseArrays)
        y = T.allowEmptyArrays && (u === "" || T.strictNullHandling && u === null) ? [] : [].concat(u);
      else {
        y = T.plainObjects ? { __proto__: null } : {};
        var S = b.charAt(0) === "[" && b.charAt(b.length - 1) === "]" ? b.slice(1, -1) : b, C = T.decodeDotInKeys ? S.replace(/%2E/g, ".") : S, w = parseInt(C, 10);
        !T.parseArrays && C === "" ? y = { 0: u } : !isNaN(w) && b !== C && String(w) === C && w >= 0 && T.parseArrays && w <= T.arrayLimit ? (y = [], y[w] = u) : C !== "__proto__" && (y[C] = u);
      }
      u = y;
    }
    return u;
  }, l = function(P, T, O, u) {
    if (P) {
      var p = O.allowDots ? P.replace(/\.([^.[]+)/g, "[$1]") : P, y = /(\[[^[\]]*])/, b = /(\[[^[\]]*])/g, S = O.depth > 0 && y.exec(p), C = S ? p.slice(0, S.index) : p, w = [];
      if (C) {
        if (!O.plainObjects && e.call(Object.prototype, C) && !O.allowPrototypes)
          return;
        w.push(C);
      }
      for (var $ = 0; O.depth > 0 && (S = b.exec(p)) !== null && $ < O.depth; ) {
        if ($ += 1, !O.plainObjects && e.call(Object.prototype, S[1].slice(1, -1)) && !O.allowPrototypes)
          return;
        w.push(S[1]);
      }
      if (S) {
        if (O.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + O.depth + " and strictDepth is true");
        w.push("[" + p.slice(S.index) + "]");
      }
      return _(w, T, O, u);
    }
  }, c = function(P) {
    if (!P)
      return n;
    if (typeof P.allowEmptyArrays < "u" && typeof P.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof P.decodeDotInKeys < "u" && typeof P.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (P.decoder !== null && typeof P.decoder < "u" && typeof P.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof P.charset < "u" && P.charset !== "utf-8" && P.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var T = typeof P.charset > "u" ? n.charset : P.charset, O = typeof P.duplicates > "u" ? n.duplicates : P.duplicates;
    if (O !== "combine" && O !== "first" && O !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var u = typeof P.allowDots > "u" ? P.decodeDotInKeys === !0 ? !0 : n.allowDots : !!P.allowDots;
    return {
      allowDots: u,
      allowEmptyArrays: typeof P.allowEmptyArrays == "boolean" ? !!P.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof P.allowPrototypes == "boolean" ? P.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof P.allowSparse == "boolean" ? P.allowSparse : n.allowSparse,
      arrayLimit: typeof P.arrayLimit == "number" ? P.arrayLimit : n.arrayLimit,
      charset: T,
      charsetSentinel: typeof P.charsetSentinel == "boolean" ? P.charsetSentinel : n.charsetSentinel,
      comma: typeof P.comma == "boolean" ? P.comma : n.comma,
      decodeDotInKeys: typeof P.decodeDotInKeys == "boolean" ? P.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof P.decoder == "function" ? P.decoder : n.decoder,
      delimiter: typeof P.delimiter == "string" || t.isRegExp(P.delimiter) ? P.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof P.depth == "number" || P.depth === !1 ? +P.depth : n.depth,
      duplicates: O,
      ignoreQueryPrefix: P.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof P.interpretNumericEntities == "boolean" ? P.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof P.parameterLimit == "number" ? P.parameterLimit : n.parameterLimit,
      parseArrays: P.parseArrays !== !1,
      plainObjects: typeof P.plainObjects == "boolean" ? P.plainObjects : n.plainObjects,
      strictDepth: typeof P.strictDepth == "boolean" ? !!P.strictDepth : n.strictDepth,
      strictNullHandling: typeof P.strictNullHandling == "boolean" ? P.strictNullHandling : n.strictNullHandling
    };
  };
  return gn = function(g, P) {
    var T = c(P);
    if (g === "" || g === null || typeof g > "u")
      return T.plainObjects ? { __proto__: null } : {};
    for (var O = typeof g == "string" ? v(g, T) : g, u = T.plainObjects ? { __proto__: null } : {}, p = Object.keys(O), y = 0; y < p.length; ++y) {
      var b = p[y], S = l(b, O[b], T, typeof g == "string");
      u = t.merge(u, S, T);
    }
    return T.allowSparse === !0 ? u : t.compact(u);
  }, gn;
}
var Tn, zo;
function is() {
  if (zo) return Tn;
  zo = 1;
  var t = /* @__PURE__ */ os(), e = /* @__PURE__ */ as(), r = /* @__PURE__ */ Jn();
  return Tn = {
    formats: r,
    parse: e,
    stringify: t
  }, Tn;
}
var ss = /* @__PURE__ */ is();
const Qn = [
  "apiKey",
  "idempotencyKey",
  "stripeAccount",
  "apiVersion",
  "maxNetworkRetries",
  "timeout",
  "host",
  "authenticator",
  "stripeContext",
  "additionalHeaders"
];
function Qa(t) {
  return t && typeof t == "object" && Qn.some((e) => Object.prototype.hasOwnProperty.call(t, e));
}
function Rr(t, e) {
  return ss.stringify(t, {
    serializeDate: (r) => Math.floor(r.getTime() / 1e3).toString(),
    arrayFormat: e == "v2" ? "repeat" : "indices"
  }).replace(/%5B/g, "[").replace(/%5D/g, "]");
}
const Nn = /* @__PURE__ */ (() => {
  const t = {
    "\n": "\\n",
    '"': '\\"',
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  return (e) => {
    const r = e.replace(/["\n\r\u2028\u2029]/g, (n) => t[n]);
    return (n) => r.replace(/\{([\s\S]+?)\}/g, (a, s) => (
      // @ts-ignore
      encodeURIComponent(n[s] || "")
    ));
  };
})();
function ls(t) {
  const e = t.match(/\{\w+\}/g);
  return e ? e.map((r) => r.replace(/[{}]/g, "")) : [];
}
function Xn(t) {
  if (!Array.isArray(t) || !t[0] || typeof t[0] != "object")
    return {};
  if (!Qa(t[0]))
    return t.shift();
  const e = Object.keys(t[0]), r = e.filter((n) => Qn.includes(n));
  return r.length > 0 && r.length !== e.length && wr(`Options found in arguments (${r.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`), {};
}
function Xa(t) {
  const e = {
    host: null,
    headers: {},
    settings: {}
  };
  if (t.length > 0) {
    const r = t[t.length - 1];
    if (typeof r == "string")
      e.authenticator = Ln(t.pop());
    else if (Qa(r)) {
      const n = Object.assign({}, t.pop()), a = Object.keys(n).filter((s) => !Qn.includes(s));
      if (a.length && wr(`Invalid options found (${a.join(", ")}); ignoring.`), n.apiKey && (e.authenticator = Ln(n.apiKey)), n.idempotencyKey && (e.headers["Idempotency-Key"] = n.idempotencyKey), n.stripeAccount && (e.headers["Stripe-Account"] = n.stripeAccount), n.stripeContext) {
        if (e.headers["Stripe-Account"])
          throw new Error("Can't specify both stripeAccount and stripeContext.");
        e.headers["Stripe-Context"] = n.stripeContext;
      }
      if (n.apiVersion && (e.headers["Stripe-Version"] = n.apiVersion), Number.isInteger(n.maxNetworkRetries) && (e.settings.maxNetworkRetries = n.maxNetworkRetries), Number.isInteger(n.timeout) && (e.settings.timeout = n.timeout), n.host && (e.host = n.host), n.authenticator) {
        if (n.apiKey)
          throw new Error("Can't specify both apiKey and authenticator.");
        if (typeof n.authenticator != "function")
          throw new Error("The authenticator must be a function receiving a request as the first parameter.");
        e.authenticator = n.authenticator;
      }
      n.additionalHeaders && (e.headers = n.additionalHeaders);
    }
  }
  return e;
}
function us(t) {
  const e = this, r = Object.prototype.hasOwnProperty.call(t, "constructor") ? t.constructor : function(...n) {
    e.apply(this, n);
  };
  return Object.assign(r, e), r.prototype = Object.create(e.prototype), Object.assign(r.prototype, t), r;
}
function _n(t) {
  if (typeof t != "object")
    throw new Error("Argument must be an object");
  return Object.keys(t).reduce((e, r) => (t[r] != null && (e[r] = t[r]), e), {});
}
function cs(t) {
  return t && typeof t == "object" ? Object.keys(t).reduce((e, r) => (e[ds(r)] = t[r], e), {}) : t;
}
function ds(t) {
  return t.split("-").map((e) => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()).join("-");
}
function Zn(t, e) {
  return e ? t.then((r) => {
    setTimeout(() => {
      e(null, r);
    }, 0);
  }, (r) => {
    setTimeout(() => {
      e(r, null);
    }, 0);
  }) : t;
}
function hs(t) {
  return t === "OAuth" ? "oauth" : t[0].toLowerCase() + t.substring(1);
}
function wr(t) {
  return typeof process.emitWarning != "function" ? console.warn(`Stripe: ${t}`) : process.emitWarning(t, "Stripe");
}
function fs(t) {
  const e = typeof t;
  return (e === "function" || e === "object") && !!t;
}
function ps(t) {
  const e = {}, r = (n, a) => {
    Object.entries(n).forEach(([s, d]) => {
      const f = a ? `${a}[${s}]` : s;
      if (fs(d)) {
        if (!(d instanceof Uint8Array) && !Object.prototype.hasOwnProperty.call(d, "data"))
          return r(d, f);
        e[f] = d;
      } else
        e[f] = String(d);
    });
  };
  return r(t, null), e;
}
function En(t, e, r) {
  if (!Number.isInteger(e)) {
    if (r !== void 0)
      return r;
    throw new Error(`${t} must be an integer`);
  }
  return e;
}
function ms() {
  return typeof process > "u" ? {} : {
    lang_version: process.version,
    platform: process.platform
  };
}
function Ln(t) {
  const e = (r) => (r.headers.Authorization = "Bearer " + t, Promise.resolve());
  return e._apiKey = t, e;
}
function vs(t, e) {
  return this[t] instanceof Date ? Math.floor(this[t].getTime() / 1e3).toString() : e;
}
function ys(t) {
  return JSON.stringify(t, vs);
}
function eo(t) {
  return t && t.startsWith("/v2") ? "v2" : "v1";
}
const Ps = 60;
class Yt {
  constructor(e, r) {
    this._stripe = e, this._maxBufferedRequestMetric = r;
  }
  _addHeadersDirectlyToObject(e, r) {
    e.requestId = r["request-id"], e.stripeAccount = e.stripeAccount || r["stripe-account"], e.apiVersion = e.apiVersion || r["stripe-version"], e.idempotencyKey = e.idempotencyKey || r["idempotency-key"];
  }
  _makeResponseEvent(e, r, n) {
    const a = Date.now(), s = a - e.request_start_time;
    return _n({
      api_version: n["stripe-version"],
      account: n["stripe-account"],
      idempotency_key: n["idempotency-key"],
      method: e.method,
      path: e.path,
      status: r,
      request_id: this._getRequestId(n),
      elapsed: s,
      request_start_time: e.request_start_time,
      request_end_time: a
    });
  }
  _getRequestId(e) {
    return e["request-id"];
  }
  /**
   * Used by methods with spec.streaming === true. For these methods, we do not
   * buffer successful responses into memory or do parse them into stripe
   * objects, we delegate that all of that to the user and pass back the raw
   * http.Response object to the callback.
   *
   * (Unsuccessful responses shouldn't make it here, they should
   * still be buffered/parsed and handled by _jsonResponseHandler -- see
   * makeRequest)
   */
  _streamingResponseHandler(e, r, n) {
    return (a) => {
      const s = a.getHeaders(), d = () => {
        const v = this._makeResponseEvent(e, a.getStatusCode(), s);
        this._stripe._emitter.emit("response", v), this._recordRequestMetrics(this._getRequestId(s), v.elapsed, r);
      }, f = a.toStream(d);
      return this._addHeadersDirectlyToObject(f, s), n(null, f);
    };
  }
  /**
   * Default handler for Stripe responses. Buffers the response into memory,
   * parses the JSON and returns it (i.e. passes it to the callback) if there
   * is no "error" field. Otherwise constructs/passes an appropriate Error.
   */
  _jsonResponseHandler(e, r, n, a) {
    return (s) => {
      const d = s.getHeaders(), f = this._getRequestId(d), v = s.getStatusCode(), _ = this._makeResponseEvent(e, v, d);
      this._stripe._emitter.emit("response", _), s.toJSON().then((l) => {
        if (l.error) {
          let c;
          throw typeof l.error == "string" && (l.error = {
            type: l.error,
            message: l.error_description
          }), l.error.headers = d, l.error.statusCode = v, l.error.requestId = f, v === 401 ? c = new zn(l.error) : v === 403 ? c = new Na(l.error) : v === 429 ? c = new Vn(l.error) : r === "v2" ? c = ka(l.error) : c = xr(l.error), c;
        }
        return l;
      }, (l) => {
        throw new Wn({
          message: "Invalid JSON received from the Stripe API",
          exception: l,
          requestId: d["request-id"]
        });
      }).then((l) => {
        this._recordRequestMetrics(f, _.elapsed, n);
        const c = s.getRawResponse();
        this._addHeadersDirectlyToObject(c, d), Object.defineProperty(l, "lastResponse", {
          enumerable: !1,
          writable: !1,
          value: c
        }), a(null, l);
      }, (l) => a(l, null));
    };
  }
  static _generateConnectionErrorMessage(e) {
    return `An error occurred with our connection to Stripe.${e > 0 ? ` Request was retried ${e} times.` : ""}`;
  }
  // For more on when and how to retry API requests, see https://stripe.com/docs/error-handling#safely-retrying-requests-with-idempotency
  static _shouldRetry(e, r, n, a) {
    return a && r === 0 && be.CONNECTION_CLOSED_ERROR_CODES.includes(a.code) ? !0 : r >= n ? !1 : e ? e.getHeaders()["stripe-should-retry"] === "false" ? !1 : e.getHeaders()["stripe-should-retry"] === "true" || e.getStatusCode() === 409 || e.getStatusCode() >= 500 : !0;
  }
  _getSleepTimeInMS(e, r = null) {
    const n = this._stripe.getInitialNetworkRetryDelay(), a = this._stripe.getMaxNetworkRetryDelay();
    let s = Math.min(n * Math.pow(2, e - 1), a);
    return s *= 0.5 * (1 + Math.random()), s = Math.max(n, s), Number.isInteger(r) && r <= Ps && (s = Math.max(s, r)), s * 1e3;
  }
  // Max retries can be set on a per request basis. Favor those over the global setting
  _getMaxNetworkRetries(e = {}) {
    return e.maxNetworkRetries !== void 0 && Number.isInteger(e.maxNetworkRetries) ? e.maxNetworkRetries : this._stripe.getMaxNetworkRetries();
  }
  _defaultIdempotencyKey(e, r, n) {
    const a = this._getMaxNetworkRetries(r), s = () => `stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`;
    if (n === "v2") {
      if (e === "POST" || e === "DELETE")
        return s();
    } else if (n === "v1" && e === "POST" && a > 0)
      return s();
    return null;
  }
  _makeHeaders({ contentType: e, contentLength: r, apiVersion: n, clientUserAgent: a, method: s, userSuppliedHeaders: d, userSuppliedSettings: f, stripeAccount: v, stripeContext: _, apiMode: l }) {
    const c = {
      Accept: "application/json",
      "Content-Type": e,
      "User-Agent": this._getUserAgentString(l),
      "X-Stripe-Client-User-Agent": a,
      "X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
      "Stripe-Version": n,
      "Stripe-Account": v,
      "Stripe-Context": _,
      "Idempotency-Key": this._defaultIdempotencyKey(s, f, l)
    }, g = s == "POST" || s == "PUT" || s == "PATCH";
    return (g || r) && (g || wr(`${s} method had non-zero contentLength but no payload is expected for this verb`), c["Content-Length"] = r), Object.assign(
      _n(c),
      // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
      cs(d)
    );
  }
  _getUserAgentString(e) {
    const r = this._stripe.getConstant("PACKAGE_VERSION"), n = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : "";
    return `Stripe/${e} NodeBindings/${r} ${n}`.trim();
  }
  _getTelemetryHeader() {
    if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
      const e = this._stripe._prevRequestMetrics.shift();
      return JSON.stringify({
        last_request_metrics: e
      });
    }
  }
  _recordRequestMetrics(e, r, n) {
    if (this._stripe.getTelemetryEnabled() && e)
      if (this._stripe._prevRequestMetrics.length > this._maxBufferedRequestMetric)
        wr("Request metrics buffer is full, dropping telemetry message.");
      else {
        const a = {
          request_id: e,
          request_duration_ms: r
        };
        n && n.length > 0 && (a.usage = n), this._stripe._prevRequestMetrics.push(a);
      }
  }
  _rawRequest(e, r, n, a) {
    return new Promise((d, f) => {
      let v;
      try {
        const P = e.toUpperCase();
        if (P !== "POST" && n && Object.keys(n).length !== 0)
          throw new Error("rawRequest only supports params on POST requests. Please pass null and add your parameters to path.");
        const T = [].slice.call([n, a]), O = Xn(T), u = Object.assign({}, O), p = Xa(T), y = p.headers, b = p.authenticator;
        v = {
          requestMethod: P,
          requestPath: r,
          bodyData: u,
          queryData: {},
          authenticator: b,
          headers: y,
          host: null,
          streaming: !1,
          settings: {},
          usage: ["raw_request"]
        };
      } catch (P) {
        f(P);
        return;
      }
      function _(P, T) {
        P ? f(P) : d(T);
      }
      const { headers: l, settings: c } = v, g = v.authenticator;
      this._request(v.requestMethod, v.host, r, v.bodyData, g, { headers: l, settings: c, streaming: v.streaming }, v.usage, _);
    });
  }
  _request(e, r, n, a, s, d, f = [], v, _ = null) {
    var l;
    let c;
    s = (l = s ?? this._stripe._authenticator) !== null && l !== void 0 ? l : null;
    const g = eo(n), P = (u, p, y, b, S) => setTimeout(u, this._getSleepTimeInMS(b, S), p, y, b + 1), T = (u, p, y) => {
      const b = d.settings && d.settings.timeout && Number.isInteger(d.settings.timeout) && d.settings.timeout >= 0 ? d.settings.timeout : this._stripe.getApiField("timeout"), S = {
        host: r || this._stripe.getApiField("host"),
        port: this._stripe.getApiField("port"),
        path: n,
        method: e,
        headers: Object.assign({}, p),
        body: c,
        protocol: this._stripe.getApiField("protocol")
      };
      s(S).then(() => {
        const C = this._stripe.getApiField("httpClient").makeRequest(S.host, S.port, S.path, S.method, S.headers, S.body, S.protocol, b), w = Date.now(), $ = _n({
          api_version: u,
          account: p["Stripe-Account"],
          idempotency_key: p["Idempotency-Key"],
          method: e,
          path: n,
          request_start_time: w
        }), R = y || 0, G = this._getMaxNetworkRetries(d.settings || {});
        this._stripe._emitter.emit("request", $), C.then((A) => Yt._shouldRetry(A, R, G) ? P(
          T,
          u,
          p,
          R,
          // @ts-ignore
          A.getHeaders()["retry-after"]
        ) : d.streaming && A.getStatusCode() < 400 ? this._streamingResponseHandler($, f, v)(A) : this._jsonResponseHandler($, g, f, v)(A)).catch((A) => {
          if (Yt._shouldRetry(null, R, G, A))
            return P(T, u, p, R, null);
          {
            const U = A.code && A.code === be.TIMEOUT_ERROR_CODE;
            return v(new La({
              message: U ? `Request aborted due to timeout being reached (${b}ms)` : Yt._generateConnectionErrorMessage(R),
              // @ts-ignore
              detail: A
            }));
          }
        });
      }).catch((C) => {
        throw new he({
          message: "Unable to authenticate the request",
          exception: C
        });
      });
    }, O = (u, p) => {
      if (u)
        return v(u);
      c = p, this._stripe.getClientUserAgent((y) => {
        const b = this._stripe.getApiField("version"), S = this._makeHeaders({
          contentType: g == "v2" ? "application/json" : "application/x-www-form-urlencoded",
          contentLength: c.length,
          apiVersion: b,
          clientUserAgent: y,
          method: e,
          userSuppliedHeaders: d.headers,
          userSuppliedSettings: d.settings,
          stripeAccount: g == "v2" ? null : this._stripe.getApiField("stripeAccount"),
          stripeContext: g == "v2" ? this._stripe.getApiField("stripeContext") : null,
          apiMode: g
        });
        T(b, S, 0);
      });
    };
    if (_)
      _(e, a, d.headers, O);
    else {
      let u;
      g == "v2" ? u = a ? ys(a) : "" : u = Rr(a || {}, g), O(null, u);
    }
  }
}
class Za {
  constructor(e, r, n, a) {
    this.index = 0, this.pagePromise = e, this.promiseCache = { currentPromise: null }, this.requestArgs = r, this.spec = n, this.stripeResource = a;
  }
  async iterate(e) {
    if (!(e && e.data && typeof e.data.length == "number"))
      throw Error("Unexpected: Stripe API response does not have a well-formed `data` array.");
    const r = ei(this.requestArgs);
    if (this.index < e.data.length) {
      const n = r ? e.data.length - 1 - this.index : this.index, a = e.data[n];
      return this.index += 1, { value: a, done: !1 };
    } else if (e.has_more) {
      this.index = 0, this.pagePromise = this.getNextPage(e);
      const n = await this.pagePromise;
      return this.iterate(n);
    }
    return { done: !0, value: void 0 };
  }
  /** @abstract */
  getNextPage(e) {
    throw new Error("Unimplemented");
  }
  async _next() {
    return this.iterate(await this.pagePromise);
  }
  next() {
    if (this.promiseCache.currentPromise)
      return this.promiseCache.currentPromise;
    const e = (async () => {
      const r = await this._next();
      return this.promiseCache.currentPromise = null, r;
    })();
    return this.promiseCache.currentPromise = e, e;
  }
}
class gs extends Za {
  getNextPage(e) {
    const r = ei(this.requestArgs), n = ws(e, r);
    return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
      [r ? "ending_before" : "starting_after"]: n
    });
  }
}
class Ts extends Za {
  getNextPage(e) {
    if (!e.next_page)
      throw Error("Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.");
    return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
      page: e.next_page
    });
  }
}
class _s {
  constructor(e, r, n, a) {
    this.currentPageIterator = (async () => (await e).data[Symbol.iterator]())(), this.nextPageUrl = (async () => (await e).next_page_url || null)(), this.requestArgs = r, this.spec = n, this.stripeResource = a;
  }
  async turnPage() {
    const e = await this.nextPageUrl;
    if (!e)
      return null;
    this.spec.fullPath = e;
    const r = await this.stripeResource._makeRequest([], this.spec, {});
    return this.nextPageUrl = Promise.resolve(r.next_page_url), this.currentPageIterator = Promise.resolve(r.data[Symbol.iterator]()), this.currentPageIterator;
  }
  async next() {
    {
      const n = (await this.currentPageIterator).next();
      if (!n.done)
        return { done: !1, value: n.value };
    }
    const e = await this.turnPage();
    if (!e)
      return { done: !0, value: void 0 };
    const r = e.next();
    return r.done ? { done: !0, value: void 0 } : { done: !1, value: r.value };
  }
}
const Es = (t, e, r, n) => {
  const a = eo(r.fullPath || r.path);
  return a !== "v2" && r.methodType === "search" ? Sn(new Ts(n, e, r, t)) : a !== "v2" && r.methodType === "list" ? Sn(new gs(n, e, r, t)) : a === "v2" && r.methodType === "list" ? Sn(new _s(n, e, r, t)) : null;
}, Sn = (t) => {
  const e = xs((...a) => t.next(...a)), r = Cs(e), n = {
    autoPagingEach: e,
    autoPagingToArray: r,
    // Async iterator functions:
    next: () => t.next(),
    return: () => ({}),
    [Ss()]: () => n
  };
  return n;
};
function Ss() {
  return typeof Symbol < "u" && Symbol.asyncIterator ? Symbol.asyncIterator : "@@asyncIterator";
}
function bs(t) {
  if (t.length < 2)
    return null;
  const e = t[1];
  if (typeof e != "function")
    throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof e}`);
  return e;
}
function Os(t) {
  if (t.length === 0)
    return;
  const e = t[0];
  if (typeof e != "function")
    throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof e}`);
  if (e.length === 2)
    return e;
  if (e.length > 2)
    throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${e}`);
  return function(n, a) {
    const s = e(n);
    a(s);
  };
}
function ws(t, e) {
  const r = e ? 0 : t.data.length - 1, n = t.data[r], a = n && n.id;
  if (!a)
    throw Error("Unexpected: No `id` found on the last item while auto-paging a list.");
  return a;
}
function xs(t) {
  return function() {
    const r = [].slice.call(arguments), n = Os(r), a = bs(r);
    if (r.length > 2)
      throw Error(`autoPagingEach takes up to two arguments; received ${r}`);
    const s = As(
      t,
      // @ts-ignore we might need a null check
      n
    );
    return Zn(s, a);
  };
}
function Cs(t) {
  return function(r, n) {
    const a = r && r.limit;
    if (!a)
      throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");
    if (a > 1e4)
      throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");
    const s = new Promise((d, f) => {
      const v = [];
      t((_) => {
        if (v.push(_), v.length >= a)
          return !1;
      }).then(() => {
        d(v);
      }).catch(f);
    });
    return Zn(s, n);
  };
}
function As(t, e) {
  return new Promise((r, n) => {
    function a(s) {
      if (s.done) {
        r();
        return;
      }
      const d = s.value;
      return new Promise((f) => {
        e(d, f);
      }).then((f) => f === !1 ? a({ done: !0, value: void 0 }) : t().then(a));
    }
    t().then(a).catch(n);
  });
}
function ei(t) {
  const e = [].slice.call(t);
  return !!Xn(e).ending_before;
}
function Rs(t) {
  if (t.path !== void 0 && t.fullPath !== void 0)
    throw new Error(`Method spec specified both a 'path' (${t.path}) and a 'fullPath' (${t.fullPath}).`);
  return function(...e) {
    const r = typeof e[e.length - 1] == "function" && e.pop();
    t.urlParams = ls(t.fullPath || this.createResourcePathWithSymbols(t.path || ""));
    const n = Zn(this._makeRequest(e, t, {}), r);
    return Object.assign(n, Es(this, e, t, n)), n;
  };
}
o.extend = us;
o.method = Rs;
o.MAX_BUFFERED_REQUEST_METRICS = 100;
function o(t, e) {
  if (this._stripe = t, e)
    throw new Error("Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.");
  this.basePath = Nn(
    // @ts-ignore changing type of basePath
    this.basePath || t.getApiField("basePath")
  ), this.resourcePath = this.path, this.path = Nn(this.path), this.initialize(...arguments);
}
o.prototype = {
  _stripe: null,
  // @ts-ignore the type of path changes in ctor
  path: "",
  resourcePath: "",
  // Methods that don't use the API's default '/v1' path can override it with this setting.
  basePath: null,
  initialize() {
  },
  // Function to override the default data processor. This allows full control
  // over how a StripeResource's request data will get converted into an HTTP
  // body. This is useful for non-standard HTTP requests. The function should
  // take method name, data, and headers as arguments.
  requestDataProcessor: null,
  // Function to add a validation checks before sending the request, errors should
  // be thrown, and they will be passed to the callback/promise.
  validateRequest: null,
  createFullPath(t, e) {
    const r = [this.basePath(e), this.path(e)];
    if (typeof t == "function") {
      const n = t(e);
      n && r.push(n);
    } else
      r.push(t);
    return this._joinUrlParts(r);
  },
  // Creates a relative resource path with symbols left in (unlike
  // createFullPath which takes some data to replace them with). For example it
  // might produce: /invoices/{id}
  createResourcePathWithSymbols(t) {
    return t ? `/${this._joinUrlParts([this.resourcePath, t])}` : `/${this.resourcePath}`;
  },
  _joinUrlParts(t) {
    return t.join("/").replace(/\/{2,}/g, "/");
  },
  _getRequestOpts(t, e, r) {
    var n;
    const a = (e.method || "GET").toUpperCase(), s = e.usage || [], d = e.urlParams || [], f = e.encode || (($) => $), v = !!e.fullPath, _ = Nn(v ? e.fullPath : e.path || ""), l = v ? e.fullPath : this.createResourcePathWithSymbols(e.path), c = [].slice.call(t), g = d.reduce(($, R) => {
      const G = c.shift();
      if (typeof G != "string")
        throw new Error(`Stripe: Argument "${R}" must be a string, but got: ${G} (on API request to \`${a} ${l}\`)`);
      return $[R] = G, $;
    }, {}), P = Xn(c), T = f(Object.assign({}, P, r)), O = Xa(c), u = O.host || e.host, p = !!e.streaming;
    if (c.filter(($) => $ != null).length)
      throw new Error(`Stripe: Unknown arguments (${c}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${a} \`${l}\`)`);
    const y = v ? _(g) : this.createFullPath(_, g), b = Object.assign(O.headers, e.headers);
    e.validator && e.validator(T, { headers: b });
    const S = e.method === "GET" || e.method === "DELETE";
    return {
      requestMethod: a,
      requestPath: y,
      bodyData: S ? null : T,
      queryData: S ? T : {},
      authenticator: (n = O.authenticator) !== null && n !== void 0 ? n : null,
      headers: b,
      host: u ?? null,
      streaming: p,
      settings: O.settings,
      usage: s
    };
  },
  _makeRequest(t, e, r) {
    return new Promise((n, a) => {
      var s;
      let d;
      try {
        d = this._getRequestOpts(t, e, r);
      } catch (g) {
        a(g);
        return;
      }
      function f(g, P) {
        g ? a(g) : n(e.transformResponseData ? e.transformResponseData(P) : P);
      }
      const v = Object.keys(d.queryData).length === 0, _ = [
        d.requestPath,
        v ? "" : "?",
        Rr(d.queryData, eo(d.requestPath))
      ].join(""), { headers: l, settings: c } = d;
      this._stripe._requestSender._request(d.requestMethod, d.host, _, d.bodyData, d.authenticator, {
        headers: l,
        settings: c,
        streaming: d.streaming
      }, d.usage, f, (s = this.requestDataProcessor) === null || s === void 0 ? void 0 : s.bind(this));
    });
  }
};
function Vo(t) {
  const e = {
    DEFAULT_TOLERANCE: 300,
    // @ts-ignore
    signature: null,
    constructEvent(l, c, g, P, T, O) {
      try {
        this.signature.verifyHeader(l, c, g, P || e.DEFAULT_TOLERANCE, T, O);
      } catch (p) {
        throw p instanceof qa && (p.message += "\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`"), p;
      }
      return l instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(l)) : JSON.parse(l);
    },
    async constructEventAsync(l, c, g, P, T, O) {
      return await this.signature.verifyHeaderAsync(l, c, g, P || e.DEFAULT_TOLERANCE, T, O), l instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(l)) : JSON.parse(l);
    },
    /**
     * Generates a header to be used for webhook mocking
     *
     * @typedef {object} opts
     * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
     * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
     * @property {string} secret - Stripe webhook secret 'whsec_...'
     * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
     * @property {string} signature - Computed webhook signature
     * @property {CryptoProvider} cryptoProvider - Crypto provider to use for computing the signature if none was provided. Defaults to NodeCryptoProvider.
     */
    generateTestHeaderString: function(l) {
      const c = _(l), g = c.signature || c.cryptoProvider.computeHMACSignature(c.payloadString, c.secret);
      return c.generateHeaderString(g);
    },
    generateTestHeaderStringAsync: async function(l) {
      const c = _(l), g = c.signature || await c.cryptoProvider.computeHMACSignatureAsync(c.payloadString, c.secret);
      return c.generateHeaderString(g);
    }
  }, r = {
    EXPECTED_SCHEME: "v1",
    verifyHeader(l, c, g, P, T, O) {
      const { decodedHeader: u, decodedPayload: p, details: y, suspectPayloadType: b } = a(l, c, this.EXPECTED_SCHEME), S = /\s/.test(g);
      T = T || v();
      const C = T.computeHMACSignature(n(p, y), g);
      return s(p, u, y, C, P, b, S, O), !0;
    },
    async verifyHeaderAsync(l, c, g, P, T, O) {
      const { decodedHeader: u, decodedPayload: p, details: y, suspectPayloadType: b } = a(l, c, this.EXPECTED_SCHEME), S = /\s/.test(g);
      T = T || v();
      const C = await T.computeHMACSignatureAsync(n(p, y), g);
      return s(p, u, y, C, P, b, S, O);
    }
  };
  function n(l, c) {
    return `${c.timestamp}.${l}`;
  }
  function a(l, c, g) {
    if (!l)
      throw new ze(c, l, {
        message: "No webhook payload was provided."
      });
    const P = typeof l != "string" && !(l instanceof Uint8Array), T = new TextDecoder("utf8"), O = l instanceof Uint8Array ? T.decode(l) : l;
    if (Array.isArray(c))
      throw new Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");
    if (c == null || c == "")
      throw new ze(c, l, {
        message: "No stripe-signature header value was provided."
      });
    const u = c instanceof Uint8Array ? T.decode(c) : c, p = d(u, g);
    if (!p || p.timestamp === -1)
      throw new ze(u, O, {
        message: "Unable to extract timestamp and signatures from header"
      });
    if (!p.signatures.length)
      throw new ze(u, O, {
        message: "No signatures found with expected scheme"
      });
    return {
      decodedPayload: O,
      decodedHeader: u,
      details: p,
      suspectPayloadType: P
    };
  }
  function s(l, c, g, P, T, O, u, p) {
    const y = !!g.signatures.filter(t.secureCompare.bind(t, P)).length, b = `
Learn more about webhook signing and explore webhook integration examples for various frameworks at https://docs.stripe.com/webhooks/signature`, S = u ? `

Note: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value` : "";
    if (!y)
      throw O ? new ze(c, l, {
        message: `Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. 
Signature verification is impossible without access to the original signed material. 
` + b + `
` + S
      }) : new ze(c, l, {
        message: `No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? 
 If a webhook request is being forwarded by a third-party tool, ensure that the exact request body, including JSON formatting and new line style, is preserved.
` + b + `
` + S
      });
    const C = Math.floor((typeof p == "number" ? p : Date.now()) / 1e3) - g.timestamp;
    if (T > 0 && C > T)
      throw new ze(c, l, {
        message: "Timestamp outside the tolerance zone"
      });
    return !0;
  }
  function d(l, c) {
    return typeof l != "string" ? null : l.split(",").reduce((g, P) => {
      const T = P.split("=");
      return T[0] === "t" && (g.timestamp = parseInt(T[1], 10)), T[0] === c && g.signatures.push(T[1]), g;
    }, {
      timestamp: -1,
      signatures: []
    });
  }
  let f = null;
  function v() {
    return f || (f = t.createDefaultCryptoProvider()), f;
  }
  function _(l) {
    if (!l)
      throw new he({
        message: "Options are required"
      });
    const c = Math.floor(l.timestamp) || Math.floor(Date.now() / 1e3), g = l.scheme || r.EXPECTED_SCHEME, P = l.cryptoProvider || v(), T = `${c}.${l.payload}`, O = (u) => `t=${c},${g}=${u}`;
    return Object.assign(Object.assign({}, l), {
      timestamp: c,
      scheme: g,
      cryptoProvider: P,
      payloadString: T,
      generateHeaderString: O
    });
  }
  return e.signature = r, e;
}
const Ms = "2024-11-20.acacia";
function Is(t, e) {
  for (const r in e) {
    if (!Object.prototype.hasOwnProperty.call(e, r))
      continue;
    const n = r[0].toLowerCase() + r.substring(1), a = new e[r](t);
    this[n] = a;
  }
}
function ee(t, e) {
  return function(r) {
    return new Is(r, e);
  };
}
const Xe = o.method, $s = o.extend({
  retrieve: Xe({
    method: "GET",
    fullPath: "/v1/financial_connections/accounts/{account}"
  }),
  list: Xe({
    method: "GET",
    fullPath: "/v1/financial_connections/accounts",
    methodType: "list"
  }),
  disconnect: Xe({
    method: "POST",
    fullPath: "/v1/financial_connections/accounts/{account}/disconnect"
  }),
  listOwners: Xe({
    method: "GET",
    fullPath: "/v1/financial_connections/accounts/{account}/owners",
    methodType: "list"
  }),
  refresh: Xe({
    method: "POST",
    fullPath: "/v1/financial_connections/accounts/{account}/refresh"
  }),
  subscribe: Xe({
    method: "POST",
    fullPath: "/v1/financial_connections/accounts/{account}/subscribe"
  }),
  unsubscribe: Xe({
    method: "POST",
    fullPath: "/v1/financial_connections/accounts/{account}/unsubscribe"
  })
}), Ko = o.method, Gs = o.extend({
  retrieve: Ko({
    method: "GET",
    fullPath: "/v1/entitlements/active_entitlements/{id}"
  }),
  list: Ko({
    method: "GET",
    fullPath: "/v1/entitlements/active_entitlements",
    methodType: "list"
  })
}), st = o.method, Ds = o.extend({
  create: st({ method: "POST", fullPath: "/v1/billing/alerts" }),
  retrieve: st({ method: "GET", fullPath: "/v1/billing/alerts/{id}" }),
  list: st({
    method: "GET",
    fullPath: "/v1/billing/alerts",
    methodType: "list"
  }),
  activate: st({
    method: "POST",
    fullPath: "/v1/billing/alerts/{id}/activate"
  }),
  archive: st({
    method: "POST",
    fullPath: "/v1/billing/alerts/{id}/archive"
  }),
  deactivate: st({
    method: "POST",
    fullPath: "/v1/billing/alerts/{id}/deactivate"
  })
}), Ze = o.method, qs = o.extend({
  create: Ze({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations"
  }),
  capture: Ze({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/capture"
  }),
  expire: Ze({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/expire"
  }),
  finalizeAmount: Ze({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount"
  }),
  increment: Ze({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/increment"
  }),
  respond: Ze({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond"
  }),
  reverse: Ze({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/reverse"
  })
}), Mt = o.method, ks = o.extend({
  retrieve: Mt({
    method: "GET",
    fullPath: "/v1/issuing/authorizations/{authorization}"
  }),
  update: Mt({
    method: "POST",
    fullPath: "/v1/issuing/authorizations/{authorization}"
  }),
  list: Mt({
    method: "GET",
    fullPath: "/v1/issuing/authorizations",
    methodType: "list"
  }),
  approve: Mt({
    method: "POST",
    fullPath: "/v1/issuing/authorizations/{authorization}/approve"
  }),
  decline: Mt({
    method: "POST",
    fullPath: "/v1/issuing/authorizations/{authorization}/decline"
  })
}), bn = o.method, Fs = o.extend({
  create: bn({ method: "POST", fullPath: "/v1/tax/calculations" }),
  retrieve: bn({
    method: "GET",
    fullPath: "/v1/tax/calculations/{calculation}"
  }),
  listLineItems: bn({
    method: "GET",
    fullPath: "/v1/tax/calculations/{calculation}/line_items",
    methodType: "list"
  })
}), tr = o.method, Ns = o.extend({
  create: tr({ method: "POST", fullPath: "/v1/issuing/cardholders" }),
  retrieve: tr({
    method: "GET",
    fullPath: "/v1/issuing/cardholders/{cardholder}"
  }),
  update: tr({
    method: "POST",
    fullPath: "/v1/issuing/cardholders/{cardholder}"
  }),
  list: tr({
    method: "GET",
    fullPath: "/v1/issuing/cardholders",
    methodType: "list"
  })
}), It = o.method, Ls = o.extend({
  deliverCard: It({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/deliver"
  }),
  failCard: It({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/fail"
  }),
  returnCard: It({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/return"
  }),
  shipCard: It({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/ship"
  }),
  submitCard: It({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/submit"
  })
}), rr = o.method, Us = o.extend({
  create: rr({ method: "POST", fullPath: "/v1/issuing/cards" }),
  retrieve: rr({ method: "GET", fullPath: "/v1/issuing/cards/{card}" }),
  update: rr({ method: "POST", fullPath: "/v1/issuing/cards/{card}" }),
  list: rr({
    method: "GET",
    fullPath: "/v1/issuing/cards",
    methodType: "list"
  })
}), nr = o.method, js = o.extend({
  create: nr({
    method: "POST",
    fullPath: "/v1/billing_portal/configurations"
  }),
  retrieve: nr({
    method: "GET",
    fullPath: "/v1/billing_portal/configurations/{configuration}"
  }),
  update: nr({
    method: "POST",
    fullPath: "/v1/billing_portal/configurations/{configuration}"
  }),
  list: nr({
    method: "GET",
    fullPath: "/v1/billing_portal/configurations",
    methodType: "list"
  })
}), $t = o.method, Hs = o.extend({
  create: $t({
    method: "POST",
    fullPath: "/v1/terminal/configurations"
  }),
  retrieve: $t({
    method: "GET",
    fullPath: "/v1/terminal/configurations/{configuration}"
  }),
  update: $t({
    method: "POST",
    fullPath: "/v1/terminal/configurations/{configuration}"
  }),
  list: $t({
    method: "GET",
    fullPath: "/v1/terminal/configurations",
    methodType: "list"
  }),
  del: $t({
    method: "DELETE",
    fullPath: "/v1/terminal/configurations/{configuration}"
  })
}), Bs = o.method, Ws = o.extend({
  create: Bs({
    method: "POST",
    fullPath: "/v1/test_helpers/confirmation_tokens"
  })
}), zs = o.method, Vs = o.extend({
  create: zs({
    method: "POST",
    fullPath: "/v1/terminal/connection_tokens"
  })
}), Ks = o.method, Ys = o.extend({
  retrieve: Ks({
    method: "GET",
    fullPath: "/v1/billing/credit_balance_summary"
  })
}), Yo = o.method, Js = o.extend({
  retrieve: Yo({
    method: "GET",
    fullPath: "/v1/billing/credit_balance_transactions/{id}"
  }),
  list: Yo({
    method: "GET",
    fullPath: "/v1/billing/credit_balance_transactions",
    methodType: "list"
  })
}), lt = o.method, Qs = o.extend({
  create: lt({ method: "POST", fullPath: "/v1/billing/credit_grants" }),
  retrieve: lt({
    method: "GET",
    fullPath: "/v1/billing/credit_grants/{id}"
  }),
  update: lt({
    method: "POST",
    fullPath: "/v1/billing/credit_grants/{id}"
  }),
  list: lt({
    method: "GET",
    fullPath: "/v1/billing/credit_grants",
    methodType: "list"
  }),
  expire: lt({
    method: "POST",
    fullPath: "/v1/billing/credit_grants/{id}/expire"
  }),
  voidGrant: lt({
    method: "POST",
    fullPath: "/v1/billing/credit_grants/{id}/void"
  })
}), On = o.method, Xs = o.extend({
  create: On({
    method: "POST",
    fullPath: "/v1/treasury/credit_reversals"
  }),
  retrieve: On({
    method: "GET",
    fullPath: "/v1/treasury/credit_reversals/{credit_reversal}"
  }),
  list: On({
    method: "GET",
    fullPath: "/v1/treasury/credit_reversals",
    methodType: "list"
  })
}), Zs = o.method, el = o.extend({
  fundCashBalance: Zs({
    method: "POST",
    fullPath: "/v1/test_helpers/customers/{customer}/fund_cash_balance"
  })
}), wn = o.method, tl = o.extend({
  create: wn({
    method: "POST",
    fullPath: "/v1/treasury/debit_reversals"
  }),
  retrieve: wn({
    method: "GET",
    fullPath: "/v1/treasury/debit_reversals/{debit_reversal}"
  }),
  list: wn({
    method: "GET",
    fullPath: "/v1/treasury/debit_reversals",
    methodType: "list"
  })
}), Gt = o.method, rl = o.extend({
  create: Gt({ method: "POST", fullPath: "/v1/issuing/disputes" }),
  retrieve: Gt({
    method: "GET",
    fullPath: "/v1/issuing/disputes/{dispute}"
  }),
  update: Gt({
    method: "POST",
    fullPath: "/v1/issuing/disputes/{dispute}"
  }),
  list: Gt({
    method: "GET",
    fullPath: "/v1/issuing/disputes",
    methodType: "list"
  }),
  submit: Gt({
    method: "POST",
    fullPath: "/v1/issuing/disputes/{dispute}/submit"
  })
}), Jo = o.method, nl = o.extend({
  retrieve: Jo({
    method: "GET",
    fullPath: "/v1/radar/early_fraud_warnings/{early_fraud_warning}"
  }),
  list: Jo({
    method: "GET",
    fullPath: "/v1/radar/early_fraud_warnings",
    methodType: "list"
  })
}), je = o.method, ol = o.extend({
  create: je({
    method: "POST",
    fullPath: "/v2/core/event_destinations"
  }),
  retrieve: je({
    method: "GET",
    fullPath: "/v2/core/event_destinations/{id}"
  }),
  update: je({
    method: "POST",
    fullPath: "/v2/core/event_destinations/{id}"
  }),
  list: je({
    method: "GET",
    fullPath: "/v2/core/event_destinations",
    methodType: "list"
  }),
  del: je({
    method: "DELETE",
    fullPath: "/v2/core/event_destinations/{id}"
  }),
  disable: je({
    method: "POST",
    fullPath: "/v2/core/event_destinations/{id}/disable"
  }),
  enable: je({
    method: "POST",
    fullPath: "/v2/core/event_destinations/{id}/enable"
  }),
  ping: je({
    method: "POST",
    fullPath: "/v2/core/event_destinations/{id}/ping"
  })
}), xn = o.method, al = o.extend({
  retrieve(...t) {
    return xn({
      method: "GET",
      fullPath: "/v2/core/events/{id}",
      transformResponseData: (r) => this.addFetchRelatedObjectIfNeeded(r)
    }).apply(this, t);
  },
  list(...t) {
    return xn({
      method: "GET",
      fullPath: "/v2/core/events",
      methodType: "list",
      transformResponseData: (r) => Object.assign(Object.assign({}, r), { data: r.data.map(this.addFetchRelatedObjectIfNeeded.bind(this)) })
    }).apply(this, t);
  },
  /**
   * @private
   *
   * For internal use in stripe-node.
   *
   * @param pulledEvent The retrieved event object
   * @returns The retrieved event object with a fetchRelatedObject method,
   * if pulledEvent.related_object is valid (non-null and has a url)
   */
  addFetchRelatedObjectIfNeeded(t) {
    return !t.related_object || !t.related_object.url ? t : Object.assign(Object.assign({}, t), { fetchRelatedObject: () => (
      // call stripeMethod with 'this' resource to fetch
      // the related object. 'this' is needed to construct
      // and send the request, but the method spec controls
      // the url endpoint and method, so it doesn't matter
      // that 'this' is an Events resource object here
      xn({
        method: "GET",
        fullPath: t.related_object.url
      }).apply(this, [
        {
          stripeAccount: t.context
        }
      ])
    ) });
  }
}), or = o.method, il = o.extend({
  create: or({ method: "POST", fullPath: "/v1/entitlements/features" }),
  retrieve: or({
    method: "GET",
    fullPath: "/v1/entitlements/features/{id}"
  }),
  update: or({
    method: "POST",
    fullPath: "/v1/entitlements/features/{id}"
  }),
  list: or({
    method: "GET",
    fullPath: "/v1/entitlements/features",
    methodType: "list"
  })
}), ut = o.method, sl = o.extend({
  create: ut({
    method: "POST",
    fullPath: "/v1/treasury/financial_accounts"
  }),
  retrieve: ut({
    method: "GET",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}"
  }),
  update: ut({
    method: "POST",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}"
  }),
  list: ut({
    method: "GET",
    fullPath: "/v1/treasury/financial_accounts",
    methodType: "list"
  }),
  retrieveFeatures: ut({
    method: "GET",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
  }),
  updateFeatures: ut({
    method: "POST",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
  })
}), Cn = o.method, ll = o.extend({
  fail: Cn({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/fail"
  }),
  returnInboundTransfer: Cn({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/return"
  }),
  succeed: Cn({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed"
  })
}), ar = o.method, ul = o.extend({
  create: ar({
    method: "POST",
    fullPath: "/v1/treasury/inbound_transfers"
  }),
  retrieve: ar({
    method: "GET",
    fullPath: "/v1/treasury/inbound_transfers/{id}"
  }),
  list: ar({
    method: "GET",
    fullPath: "/v1/treasury/inbound_transfers",
    methodType: "list"
  }),
  cancel: ar({
    method: "POST",
    fullPath: "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel"
  })
}), Dt = o.method, cl = o.extend({
  create: Dt({ method: "POST", fullPath: "/v1/terminal/locations" }),
  retrieve: Dt({
    method: "GET",
    fullPath: "/v1/terminal/locations/{location}"
  }),
  update: Dt({
    method: "POST",
    fullPath: "/v1/terminal/locations/{location}"
  }),
  list: Dt({
    method: "GET",
    fullPath: "/v1/terminal/locations",
    methodType: "list"
  }),
  del: Dt({
    method: "DELETE",
    fullPath: "/v1/terminal/locations/{location}"
  })
}), dl = o.method, hl = o.extend({
  create: dl({
    method: "POST",
    fullPath: "/v1/billing/meter_event_adjustments"
  })
}), fl = o.method, pl = o.extend({
  create: fl({
    method: "POST",
    fullPath: "/v2/billing/meter_event_adjustments"
  })
}), ml = o.method, vl = o.extend({
  create: ml({
    method: "POST",
    fullPath: "/v2/billing/meter_event_session"
  })
}), yl = o.method, Pl = o.extend({
  create: yl({
    method: "POST",
    fullPath: "/v2/billing/meter_event_stream",
    host: "meter-events.stripe.com"
  })
}), gl = o.method, Tl = o.extend({
  create: gl({ method: "POST", fullPath: "/v1/billing/meter_events" })
}), _l = o.method, El = o.extend({
  create: _l({ method: "POST", fullPath: "/v2/billing/meter_events" })
}), et = o.method, Sl = o.extend({
  create: et({ method: "POST", fullPath: "/v1/billing/meters" }),
  retrieve: et({ method: "GET", fullPath: "/v1/billing/meters/{id}" }),
  update: et({ method: "POST", fullPath: "/v1/billing/meters/{id}" }),
  list: et({
    method: "GET",
    fullPath: "/v1/billing/meters",
    methodType: "list"
  }),
  deactivate: et({
    method: "POST",
    fullPath: "/v1/billing/meters/{id}/deactivate"
  }),
  listEventSummaries: et({
    method: "GET",
    fullPath: "/v1/billing/meters/{id}/event_summaries",
    methodType: "list"
  }),
  reactivate: et({
    method: "POST",
    fullPath: "/v1/billing/meters/{id}/reactivate"
  })
}), qt = o.method, bl = o.extend({
  create: qt({ method: "POST", fullPath: "/v1/climate/orders" }),
  retrieve: qt({
    method: "GET",
    fullPath: "/v1/climate/orders/{order}"
  }),
  update: qt({
    method: "POST",
    fullPath: "/v1/climate/orders/{order}"
  }),
  list: qt({
    method: "GET",
    fullPath: "/v1/climate/orders",
    methodType: "list"
  }),
  cancel: qt({
    method: "POST",
    fullPath: "/v1/climate/orders/{order}/cancel"
  })
}), ir = o.method, Ol = o.extend({
  update: ir({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}"
  }),
  fail: ir({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/fail"
  }),
  post: ir({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/post"
  }),
  returnOutboundPayment: ir({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/return"
  })
}), sr = o.method, wl = o.extend({
  create: sr({
    method: "POST",
    fullPath: "/v1/treasury/outbound_payments"
  }),
  retrieve: sr({
    method: "GET",
    fullPath: "/v1/treasury/outbound_payments/{id}"
  }),
  list: sr({
    method: "GET",
    fullPath: "/v1/treasury/outbound_payments",
    methodType: "list"
  }),
  cancel: sr({
    method: "POST",
    fullPath: "/v1/treasury/outbound_payments/{id}/cancel"
  })
}), lr = o.method, xl = o.extend({
  update: lr({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}"
  }),
  fail: lr({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail"
  }),
  post: lr({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post"
  }),
  returnOutboundTransfer: lr({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return"
  })
}), ur = o.method, Cl = o.extend({
  create: ur({
    method: "POST",
    fullPath: "/v1/treasury/outbound_transfers"
  }),
  retrieve: ur({
    method: "GET",
    fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}"
  }),
  list: ur({
    method: "GET",
    fullPath: "/v1/treasury/outbound_transfers",
    methodType: "list"
  }),
  cancel: ur({
    method: "POST",
    fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel"
  })
}), An = o.method, Al = o.extend({
  activate: An({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate"
  }),
  deactivate: An({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate"
  }),
  reject: An({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject"
  })
}), cr = o.method, Rl = o.extend({
  create: cr({
    method: "POST",
    fullPath: "/v1/issuing/personalization_designs"
  }),
  retrieve: cr({
    method: "GET",
    fullPath: "/v1/issuing/personalization_designs/{personalization_design}"
  }),
  update: cr({
    method: "POST",
    fullPath: "/v1/issuing/personalization_designs/{personalization_design}"
  }),
  list: cr({
    method: "GET",
    fullPath: "/v1/issuing/personalization_designs",
    methodType: "list"
  })
}), Qo = o.method, Ml = o.extend({
  retrieve: Qo({
    method: "GET",
    fullPath: "/v1/issuing/physical_bundles/{physical_bundle}"
  }),
  list: Qo({
    method: "GET",
    fullPath: "/v1/issuing/physical_bundles",
    methodType: "list"
  })
}), Xo = o.method, Il = o.extend({
  retrieve: Xo({
    method: "GET",
    fullPath: "/v1/climate/products/{product}"
  }),
  list: Xo({
    method: "GET",
    fullPath: "/v1/climate/products",
    methodType: "list"
  })
}), $l = o.method, Gl = o.extend({
  presentPaymentMethod: $l({
    method: "POST",
    fullPath: "/v1/test_helpers/terminal/readers/{reader}/present_payment_method"
  })
}), Ge = o.method, Dl = o.extend({
  create: Ge({ method: "POST", fullPath: "/v1/terminal/readers" }),
  retrieve: Ge({
    method: "GET",
    fullPath: "/v1/terminal/readers/{reader}"
  }),
  update: Ge({
    method: "POST",
    fullPath: "/v1/terminal/readers/{reader}"
  }),
  list: Ge({
    method: "GET",
    fullPath: "/v1/terminal/readers",
    methodType: "list"
  }),
  del: Ge({
    method: "DELETE",
    fullPath: "/v1/terminal/readers/{reader}"
  }),
  cancelAction: Ge({
    method: "POST",
    fullPath: "/v1/terminal/readers/{reader}/cancel_action"
  }),
  processPaymentIntent: Ge({
    method: "POST",
    fullPath: "/v1/terminal/readers/{reader}/process_payment_intent"
  }),
  processSetupIntent: Ge({
    method: "POST",
    fullPath: "/v1/terminal/readers/{reader}/process_setup_intent"
  }),
  refundPayment: Ge({
    method: "POST",
    fullPath: "/v1/terminal/readers/{reader}/refund_payment"
  }),
  setReaderDisplay: Ge({
    method: "POST",
    fullPath: "/v1/terminal/readers/{reader}/set_reader_display"
  })
}), ql = o.method, kl = o.extend({
  create: ql({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/received_credits"
  })
}), Zo = o.method, Fl = o.extend({
  retrieve: Zo({
    method: "GET",
    fullPath: "/v1/treasury/received_credits/{id}"
  }),
  list: Zo({
    method: "GET",
    fullPath: "/v1/treasury/received_credits",
    methodType: "list"
  })
}), Nl = o.method, Ll = o.extend({
  create: Nl({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/received_debits"
  })
}), ea = o.method, Ul = o.extend({
  retrieve: ea({
    method: "GET",
    fullPath: "/v1/treasury/received_debits/{id}"
  }),
  list: ea({
    method: "GET",
    fullPath: "/v1/treasury/received_debits",
    methodType: "list"
  })
}), jl = o.method, Hl = o.extend({
  expire: jl({
    method: "POST",
    fullPath: "/v1/test_helpers/refunds/{refund}/expire"
  })
}), dr = o.method, Bl = o.extend({
  create: dr({ method: "POST", fullPath: "/v1/tax/registrations" }),
  retrieve: dr({
    method: "GET",
    fullPath: "/v1/tax/registrations/{id}"
  }),
  update: dr({
    method: "POST",
    fullPath: "/v1/tax/registrations/{id}"
  }),
  list: dr({
    method: "GET",
    fullPath: "/v1/tax/registrations",
    methodType: "list"
  })
}), Rn = o.method, Wl = o.extend({
  create: Rn({ method: "POST", fullPath: "/v1/reporting/report_runs" }),
  retrieve: Rn({
    method: "GET",
    fullPath: "/v1/reporting/report_runs/{report_run}"
  }),
  list: Rn({
    method: "GET",
    fullPath: "/v1/reporting/report_runs",
    methodType: "list"
  })
}), ta = o.method, zl = o.extend({
  retrieve: ta({
    method: "GET",
    fullPath: "/v1/reporting/report_types/{report_type}"
  }),
  list: ta({
    method: "GET",
    fullPath: "/v1/reporting/report_types",
    methodType: "list"
  })
}), Mn = o.method, Vl = o.extend({
  create: Mn({ method: "POST", fullPath: "/v1/forwarding/requests" }),
  retrieve: Mn({
    method: "GET",
    fullPath: "/v1/forwarding/requests/{id}"
  }),
  list: Mn({
    method: "GET",
    fullPath: "/v1/forwarding/requests",
    methodType: "list"
  })
}), ra = o.method, Kl = o.extend({
  retrieve: ra({
    method: "GET",
    fullPath: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}"
  }),
  list: ra({
    method: "GET",
    fullPath: "/v1/sigma/scheduled_query_runs",
    methodType: "list"
  })
}), hr = o.method, Yl = o.extend({
  create: hr({ method: "POST", fullPath: "/v1/apps/secrets" }),
  list: hr({
    method: "GET",
    fullPath: "/v1/apps/secrets",
    methodType: "list"
  }),
  deleteWhere: hr({
    method: "POST",
    fullPath: "/v1/apps/secrets/delete"
  }),
  find: hr({ method: "GET", fullPath: "/v1/apps/secrets/find" })
}), Jl = o.method, Ql = o.extend({
  create: Jl({
    method: "POST",
    fullPath: "/v1/billing_portal/sessions"
  })
}), ct = o.method, Xl = o.extend({
  create: ct({ method: "POST", fullPath: "/v1/checkout/sessions" }),
  retrieve: ct({
    method: "GET",
    fullPath: "/v1/checkout/sessions/{session}"
  }),
  update: ct({
    method: "POST",
    fullPath: "/v1/checkout/sessions/{session}"
  }),
  list: ct({
    method: "GET",
    fullPath: "/v1/checkout/sessions",
    methodType: "list"
  }),
  expire: ct({
    method: "POST",
    fullPath: "/v1/checkout/sessions/{session}/expire"
  }),
  listLineItems: ct({
    method: "GET",
    fullPath: "/v1/checkout/sessions/{session}/line_items",
    methodType: "list"
  })
}), na = o.method, Zl = o.extend({
  create: na({
    method: "POST",
    fullPath: "/v1/financial_connections/sessions"
  }),
  retrieve: na({
    method: "GET",
    fullPath: "/v1/financial_connections/sessions/{session}"
  })
}), oa = o.method, eu = o.extend({
  retrieve: oa({ method: "GET", fullPath: "/v1/tax/settings" }),
  update: oa({ method: "POST", fullPath: "/v1/tax/settings" })
}), aa = o.method, tu = o.extend({
  retrieve: aa({
    method: "GET",
    fullPath: "/v1/climate/suppliers/{supplier}"
  }),
  list: aa({
    method: "GET",
    fullPath: "/v1/climate/suppliers",
    methodType: "list"
  })
}), kt = o.method, ru = o.extend({
  create: kt({
    method: "POST",
    fullPath: "/v1/test_helpers/test_clocks"
  }),
  retrieve: kt({
    method: "GET",
    fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
  }),
  list: kt({
    method: "GET",
    fullPath: "/v1/test_helpers/test_clocks",
    methodType: "list"
  }),
  del: kt({
    method: "DELETE",
    fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
  }),
  advance: kt({
    method: "POST",
    fullPath: "/v1/test_helpers/test_clocks/{test_clock}/advance"
  })
}), In = o.method, nu = o.extend({
  retrieve: In({
    method: "GET",
    fullPath: "/v1/issuing/tokens/{token}"
  }),
  update: In({
    method: "POST",
    fullPath: "/v1/issuing/tokens/{token}"
  }),
  list: In({
    method: "GET",
    fullPath: "/v1/issuing/tokens",
    methodType: "list"
  })
}), ia = o.method, ou = o.extend({
  retrieve: ia({
    method: "GET",
    fullPath: "/v1/treasury/transaction_entries/{id}"
  }),
  list: ia({
    method: "GET",
    fullPath: "/v1/treasury/transaction_entries",
    methodType: "list"
  })
}), $n = o.method, au = o.extend({
  createForceCapture: $n({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/transactions/create_force_capture"
  }),
  createUnlinkedRefund: $n({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/transactions/create_unlinked_refund"
  }),
  refund: $n({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/transactions/{transaction}/refund"
  })
}), sa = o.method, iu = o.extend({
  retrieve: sa({
    method: "GET",
    fullPath: "/v1/financial_connections/transactions/{transaction}"
  }),
  list: sa({
    method: "GET",
    fullPath: "/v1/financial_connections/transactions",
    methodType: "list"
  })
}), Gn = o.method, su = o.extend({
  retrieve: Gn({
    method: "GET",
    fullPath: "/v1/issuing/transactions/{transaction}"
  }),
  update: Gn({
    method: "POST",
    fullPath: "/v1/issuing/transactions/{transaction}"
  }),
  list: Gn({
    method: "GET",
    fullPath: "/v1/issuing/transactions",
    methodType: "list"
  })
}), fr = o.method, lu = o.extend({
  retrieve: fr({
    method: "GET",
    fullPath: "/v1/tax/transactions/{transaction}"
  }),
  createFromCalculation: fr({
    method: "POST",
    fullPath: "/v1/tax/transactions/create_from_calculation"
  }),
  createReversal: fr({
    method: "POST",
    fullPath: "/v1/tax/transactions/create_reversal"
  }),
  listLineItems: fr({
    method: "GET",
    fullPath: "/v1/tax/transactions/{transaction}/line_items",
    methodType: "list"
  })
}), la = o.method, uu = o.extend({
  retrieve: la({
    method: "GET",
    fullPath: "/v1/treasury/transactions/{id}"
  }),
  list: la({
    method: "GET",
    fullPath: "/v1/treasury/transactions",
    methodType: "list"
  })
}), pr = o.method, cu = o.extend({
  create: pr({
    method: "POST",
    fullPath: "/v1/radar/value_list_items"
  }),
  retrieve: pr({
    method: "GET",
    fullPath: "/v1/radar/value_list_items/{item}"
  }),
  list: pr({
    method: "GET",
    fullPath: "/v1/radar/value_list_items",
    methodType: "list"
  }),
  del: pr({
    method: "DELETE",
    fullPath: "/v1/radar/value_list_items/{item}"
  })
}), Ft = o.method, du = o.extend({
  create: Ft({ method: "POST", fullPath: "/v1/radar/value_lists" }),
  retrieve: Ft({
    method: "GET",
    fullPath: "/v1/radar/value_lists/{value_list}"
  }),
  update: Ft({
    method: "POST",
    fullPath: "/v1/radar/value_lists/{value_list}"
  }),
  list: Ft({
    method: "GET",
    fullPath: "/v1/radar/value_lists",
    methodType: "list"
  }),
  del: Ft({
    method: "DELETE",
    fullPath: "/v1/radar/value_lists/{value_list}"
  })
}), ua = o.method, hu = o.extend({
  retrieve: ua({
    method: "GET",
    fullPath: "/v1/identity/verification_reports/{report}"
  }),
  list: ua({
    method: "GET",
    fullPath: "/v1/identity/verification_reports",
    methodType: "list"
  })
}), dt = o.method, fu = o.extend({
  create: dt({
    method: "POST",
    fullPath: "/v1/identity/verification_sessions"
  }),
  retrieve: dt({
    method: "GET",
    fullPath: "/v1/identity/verification_sessions/{session}"
  }),
  update: dt({
    method: "POST",
    fullPath: "/v1/identity/verification_sessions/{session}"
  }),
  list: dt({
    method: "GET",
    fullPath: "/v1/identity/verification_sessions",
    methodType: "list"
  }),
  cancel: dt({
    method: "POST",
    fullPath: "/v1/identity/verification_sessions/{session}/cancel"
  }),
  redact: dt({
    method: "POST",
    fullPath: "/v1/identity/verification_sessions/{session}/redact"
  })
}), te = o.method, ca = o.extend({
  create: te({ method: "POST", fullPath: "/v1/accounts" }),
  retrieve(t, ...e) {
    return typeof t == "string" ? te({
      method: "GET",
      fullPath: "/v1/accounts/{id}"
    }).apply(this, [t, ...e]) : (t == null && [].shift.apply([t, ...e]), te({
      method: "GET",
      fullPath: "/v1/account"
    }).apply(this, [t, ...e]));
  },
  update: te({ method: "POST", fullPath: "/v1/accounts/{account}" }),
  list: te({
    method: "GET",
    fullPath: "/v1/accounts",
    methodType: "list"
  }),
  del: te({ method: "DELETE", fullPath: "/v1/accounts/{account}" }),
  createExternalAccount: te({
    method: "POST",
    fullPath: "/v1/accounts/{account}/external_accounts"
  }),
  createLoginLink: te({
    method: "POST",
    fullPath: "/v1/accounts/{account}/login_links"
  }),
  createPerson: te({
    method: "POST",
    fullPath: "/v1/accounts/{account}/persons"
  }),
  deleteExternalAccount: te({
    method: "DELETE",
    fullPath: "/v1/accounts/{account}/external_accounts/{id}"
  }),
  deletePerson: te({
    method: "DELETE",
    fullPath: "/v1/accounts/{account}/persons/{person}"
  }),
  listCapabilities: te({
    method: "GET",
    fullPath: "/v1/accounts/{account}/capabilities",
    methodType: "list"
  }),
  listExternalAccounts: te({
    method: "GET",
    fullPath: "/v1/accounts/{account}/external_accounts",
    methodType: "list"
  }),
  listPersons: te({
    method: "GET",
    fullPath: "/v1/accounts/{account}/persons",
    methodType: "list"
  }),
  reject: te({
    method: "POST",
    fullPath: "/v1/accounts/{account}/reject"
  }),
  retrieveCurrent: te({ method: "GET", fullPath: "/v1/account" }),
  retrieveCapability: te({
    method: "GET",
    fullPath: "/v1/accounts/{account}/capabilities/{capability}"
  }),
  retrieveExternalAccount: te({
    method: "GET",
    fullPath: "/v1/accounts/{account}/external_accounts/{id}"
  }),
  retrievePerson: te({
    method: "GET",
    fullPath: "/v1/accounts/{account}/persons/{person}"
  }),
  updateCapability: te({
    method: "POST",
    fullPath: "/v1/accounts/{account}/capabilities/{capability}"
  }),
  updateExternalAccount: te({
    method: "POST",
    fullPath: "/v1/accounts/{account}/external_accounts/{id}"
  }),
  updatePerson: te({
    method: "POST",
    fullPath: "/v1/accounts/{account}/persons/{person}"
  })
}), pu = o.method, mu = o.extend({
  create: pu({ method: "POST", fullPath: "/v1/account_links" })
}), vu = o.method, yu = o.extend({
  create: vu({ method: "POST", fullPath: "/v1/account_sessions" })
}), mr = o.method, Pu = o.extend({
  create: mr({ method: "POST", fullPath: "/v1/apple_pay/domains" }),
  retrieve: mr({
    method: "GET",
    fullPath: "/v1/apple_pay/domains/{domain}"
  }),
  list: mr({
    method: "GET",
    fullPath: "/v1/apple_pay/domains",
    methodType: "list"
  }),
  del: mr({
    method: "DELETE",
    fullPath: "/v1/apple_pay/domains/{domain}"
  })
}), ht = o.method, gu = o.extend({
  retrieve: ht({
    method: "GET",
    fullPath: "/v1/application_fees/{id}"
  }),
  list: ht({
    method: "GET",
    fullPath: "/v1/application_fees",
    methodType: "list"
  }),
  createRefund: ht({
    method: "POST",
    fullPath: "/v1/application_fees/{id}/refunds"
  }),
  listRefunds: ht({
    method: "GET",
    fullPath: "/v1/application_fees/{id}/refunds",
    methodType: "list"
  }),
  retrieveRefund: ht({
    method: "GET",
    fullPath: "/v1/application_fees/{fee}/refunds/{id}"
  }),
  updateRefund: ht({
    method: "POST",
    fullPath: "/v1/application_fees/{fee}/refunds/{id}"
  })
}), Tu = o.method, _u = o.extend({
  retrieve: Tu({ method: "GET", fullPath: "/v1/balance" })
}), da = o.method, Eu = o.extend({
  retrieve: da({
    method: "GET",
    fullPath: "/v1/balance_transactions/{id}"
  }),
  list: da({
    method: "GET",
    fullPath: "/v1/balance_transactions",
    methodType: "list"
  })
}), ft = o.method, Su = o.extend({
  create: ft({ method: "POST", fullPath: "/v1/charges" }),
  retrieve: ft({ method: "GET", fullPath: "/v1/charges/{charge}" }),
  update: ft({ method: "POST", fullPath: "/v1/charges/{charge}" }),
  list: ft({
    method: "GET",
    fullPath: "/v1/charges",
    methodType: "list"
  }),
  capture: ft({
    method: "POST",
    fullPath: "/v1/charges/{charge}/capture"
  }),
  search: ft({
    method: "GET",
    fullPath: "/v1/charges/search",
    methodType: "search"
  })
}), bu = o.method, Ou = o.extend({
  retrieve: bu({
    method: "GET",
    fullPath: "/v1/confirmation_tokens/{confirmation_token}"
  })
}), ha = o.method, wu = o.extend({
  retrieve: ha({
    method: "GET",
    fullPath: "/v1/country_specs/{country}"
  }),
  list: ha({
    method: "GET",
    fullPath: "/v1/country_specs",
    methodType: "list"
  })
}), Nt = o.method, xu = o.extend({
  create: Nt({ method: "POST", fullPath: "/v1/coupons" }),
  retrieve: Nt({ method: "GET", fullPath: "/v1/coupons/{coupon}" }),
  update: Nt({ method: "POST", fullPath: "/v1/coupons/{coupon}" }),
  list: Nt({
    method: "GET",
    fullPath: "/v1/coupons",
    methodType: "list"
  }),
  del: Nt({ method: "DELETE", fullPath: "/v1/coupons/{coupon}" })
}), He = o.method, Cu = o.extend({
  create: He({ method: "POST", fullPath: "/v1/credit_notes" }),
  retrieve: He({ method: "GET", fullPath: "/v1/credit_notes/{id}" }),
  update: He({ method: "POST", fullPath: "/v1/credit_notes/{id}" }),
  list: He({
    method: "GET",
    fullPath: "/v1/credit_notes",
    methodType: "list"
  }),
  listLineItems: He({
    method: "GET",
    fullPath: "/v1/credit_notes/{credit_note}/lines",
    methodType: "list"
  }),
  listPreviewLineItems: He({
    method: "GET",
    fullPath: "/v1/credit_notes/preview/lines",
    methodType: "list"
  }),
  preview: He({ method: "GET", fullPath: "/v1/credit_notes/preview" }),
  voidCreditNote: He({
    method: "POST",
    fullPath: "/v1/credit_notes/{id}/void"
  })
}), Au = o.method, Ru = o.extend({
  create: Au({ method: "POST", fullPath: "/v1/customer_sessions" })
}), J = o.method, Mu = o.extend({
  create: J({ method: "POST", fullPath: "/v1/customers" }),
  retrieve: J({ method: "GET", fullPath: "/v1/customers/{customer}" }),
  update: J({ method: "POST", fullPath: "/v1/customers/{customer}" }),
  list: J({
    method: "GET",
    fullPath: "/v1/customers",
    methodType: "list"
  }),
  del: J({ method: "DELETE", fullPath: "/v1/customers/{customer}" }),
  createBalanceTransaction: J({
    method: "POST",
    fullPath: "/v1/customers/{customer}/balance_transactions"
  }),
  createFundingInstructions: J({
    method: "POST",
    fullPath: "/v1/customers/{customer}/funding_instructions"
  }),
  createSource: J({
    method: "POST",
    fullPath: "/v1/customers/{customer}/sources"
  }),
  createTaxId: J({
    method: "POST",
    fullPath: "/v1/customers/{customer}/tax_ids"
  }),
  deleteDiscount: J({
    method: "DELETE",
    fullPath: "/v1/customers/{customer}/discount"
  }),
  deleteSource: J({
    method: "DELETE",
    fullPath: "/v1/customers/{customer}/sources/{id}"
  }),
  deleteTaxId: J({
    method: "DELETE",
    fullPath: "/v1/customers/{customer}/tax_ids/{id}"
  }),
  listBalanceTransactions: J({
    method: "GET",
    fullPath: "/v1/customers/{customer}/balance_transactions",
    methodType: "list"
  }),
  listCashBalanceTransactions: J({
    method: "GET",
    fullPath: "/v1/customers/{customer}/cash_balance_transactions",
    methodType: "list"
  }),
  listPaymentMethods: J({
    method: "GET",
    fullPath: "/v1/customers/{customer}/payment_methods",
    methodType: "list"
  }),
  listSources: J({
    method: "GET",
    fullPath: "/v1/customers/{customer}/sources",
    methodType: "list"
  }),
  listTaxIds: J({
    method: "GET",
    fullPath: "/v1/customers/{customer}/tax_ids",
    methodType: "list"
  }),
  retrieveBalanceTransaction: J({
    method: "GET",
    fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
  }),
  retrieveCashBalance: J({
    method: "GET",
    fullPath: "/v1/customers/{customer}/cash_balance"
  }),
  retrieveCashBalanceTransaction: J({
    method: "GET",
    fullPath: "/v1/customers/{customer}/cash_balance_transactions/{transaction}"
  }),
  retrievePaymentMethod: J({
    method: "GET",
    fullPath: "/v1/customers/{customer}/payment_methods/{payment_method}"
  }),
  retrieveSource: J({
    method: "GET",
    fullPath: "/v1/customers/{customer}/sources/{id}"
  }),
  retrieveTaxId: J({
    method: "GET",
    fullPath: "/v1/customers/{customer}/tax_ids/{id}"
  }),
  search: J({
    method: "GET",
    fullPath: "/v1/customers/search",
    methodType: "search"
  }),
  updateBalanceTransaction: J({
    method: "POST",
    fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
  }),
  updateCashBalance: J({
    method: "POST",
    fullPath: "/v1/customers/{customer}/cash_balance"
  }),
  updateSource: J({
    method: "POST",
    fullPath: "/v1/customers/{customer}/sources/{id}"
  }),
  verifySource: J({
    method: "POST",
    fullPath: "/v1/customers/{customer}/sources/{id}/verify"
  })
}), vr = o.method, Iu = o.extend({
  retrieve: vr({ method: "GET", fullPath: "/v1/disputes/{dispute}" }),
  update: vr({ method: "POST", fullPath: "/v1/disputes/{dispute}" }),
  list: vr({
    method: "GET",
    fullPath: "/v1/disputes",
    methodType: "list"
  }),
  close: vr({
    method: "POST",
    fullPath: "/v1/disputes/{dispute}/close"
  })
}), fa = o.method, $u = o.extend({
  create: fa({
    method: "POST",
    fullPath: "/v1/ephemeral_keys",
    validator: (t, e) => {
      if (!e.headers || !e.headers["Stripe-Version"])
        throw new Error("Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node");
    }
  }),
  del: fa({ method: "DELETE", fullPath: "/v1/ephemeral_keys/{key}" })
}), pa = o.method, Gu = o.extend({
  retrieve: pa({ method: "GET", fullPath: "/v1/events/{id}" }),
  list: pa({
    method: "GET",
    fullPath: "/v1/events",
    methodType: "list"
  })
}), ma = o.method, Du = o.extend({
  retrieve: ma({
    method: "GET",
    fullPath: "/v1/exchange_rates/{rate_id}"
  }),
  list: ma({
    method: "GET",
    fullPath: "/v1/exchange_rates",
    methodType: "list"
  })
}), yr = o.method, qu = o.extend({
  create: yr({ method: "POST", fullPath: "/v1/file_links" }),
  retrieve: yr({ method: "GET", fullPath: "/v1/file_links/{link}" }),
  update: yr({ method: "POST", fullPath: "/v1/file_links/{link}" }),
  list: yr({
    method: "GET",
    fullPath: "/v1/file_links",
    methodType: "list"
  })
}), ku = (t, e, r) => {
  const n = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
  r["Content-Type"] = `multipart/form-data; boundary=${n}`;
  const a = new TextEncoder();
  let s = new Uint8Array(0);
  const d = a.encode(`\r
`);
  function f(l) {
    const c = s, g = l instanceof Uint8Array ? l : new Uint8Array(a.encode(l));
    s = new Uint8Array(c.length + g.length + 2), s.set(c), s.set(g, c.length), s.set(d, s.length - 2);
  }
  function v(l) {
    return `"${l.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
  }
  const _ = ps(e);
  for (const l in _) {
    if (!Object.prototype.hasOwnProperty.call(_, l))
      continue;
    const c = _[l];
    if (f(`--${n}`), Object.prototype.hasOwnProperty.call(c, "data")) {
      const g = c;
      f(`Content-Disposition: form-data; name=${v(l)}; filename=${v(g.name || "blob")}`), f(`Content-Type: ${g.type || "application/octet-stream"}`), f(""), f(g.data);
    } else
      f(`Content-Disposition: form-data; name=${v(l)}`), f(""), f(c);
  }
  return f(`--${n}--`), s;
};
function Fu(t, e, r, n) {
  if (e = e || {}, t !== "POST")
    return n(null, Rr(e));
  this._stripe._platformFunctions.tryBufferData(e).then((a) => {
    const s = ku(t, a, r);
    return n(null, s);
  }).catch((a) => n(a, null));
}
const Dn = o.method, Nu = o.extend({
  create: Dn({
    method: "POST",
    fullPath: "/v1/files",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    host: "files.stripe.com"
  }),
  retrieve: Dn({ method: "GET", fullPath: "/v1/files/{file}" }),
  list: Dn({
    method: "GET",
    fullPath: "/v1/files",
    methodType: "list"
  }),
  requestDataProcessor: Fu
}), Lt = o.method, Lu = o.extend({
  create: Lt({ method: "POST", fullPath: "/v1/invoiceitems" }),
  retrieve: Lt({
    method: "GET",
    fullPath: "/v1/invoiceitems/{invoiceitem}"
  }),
  update: Lt({
    method: "POST",
    fullPath: "/v1/invoiceitems/{invoiceitem}"
  }),
  list: Lt({
    method: "GET",
    fullPath: "/v1/invoiceitems",
    methodType: "list"
  }),
  del: Lt({
    method: "DELETE",
    fullPath: "/v1/invoiceitems/{invoiceitem}"
  })
}), Pr = o.method, Uu = o.extend({
  retrieve: Pr({
    method: "GET",
    fullPath: "/v1/invoice_rendering_templates/{template}"
  }),
  list: Pr({
    method: "GET",
    fullPath: "/v1/invoice_rendering_templates",
    methodType: "list"
  }),
  archive: Pr({
    method: "POST",
    fullPath: "/v1/invoice_rendering_templates/{template}/archive"
  }),
  unarchive: Pr({
    method: "POST",
    fullPath: "/v1/invoice_rendering_templates/{template}/unarchive"
  })
}), se = o.method, ju = o.extend({
  create: se({ method: "POST", fullPath: "/v1/invoices" }),
  retrieve: se({ method: "GET", fullPath: "/v1/invoices/{invoice}" }),
  update: se({ method: "POST", fullPath: "/v1/invoices/{invoice}" }),
  list: se({
    method: "GET",
    fullPath: "/v1/invoices",
    methodType: "list"
  }),
  del: se({ method: "DELETE", fullPath: "/v1/invoices/{invoice}" }),
  addLines: se({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/add_lines"
  }),
  createPreview: se({
    method: "POST",
    fullPath: "/v1/invoices/create_preview"
  }),
  finalizeInvoice: se({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/finalize"
  }),
  listLineItems: se({
    method: "GET",
    fullPath: "/v1/invoices/{invoice}/lines",
    methodType: "list"
  }),
  listUpcomingLines: se({
    method: "GET",
    fullPath: "/v1/invoices/upcoming/lines",
    methodType: "list"
  }),
  markUncollectible: se({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/mark_uncollectible"
  }),
  pay: se({ method: "POST", fullPath: "/v1/invoices/{invoice}/pay" }),
  removeLines: se({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/remove_lines"
  }),
  retrieveUpcoming: se({
    method: "GET",
    fullPath: "/v1/invoices/upcoming"
  }),
  search: se({
    method: "GET",
    fullPath: "/v1/invoices/search",
    methodType: "search"
  }),
  sendInvoice: se({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/send"
  }),
  updateLines: se({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/update_lines"
  }),
  updateLineItem: se({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/lines/{line_item_id}"
  }),
  voidInvoice: se({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/void"
  })
}), Hu = o.method, Bu = o.extend({
  retrieve: Hu({ method: "GET", fullPath: "/v1/mandates/{mandate}" })
}), va = o.method, qn = "connect.stripe.com", Wu = o.extend({
  basePath: "/",
  authorizeUrl(t, e) {
    t = t || {}, e = e || {};
    let r = "oauth/authorize";
    return e.express && (r = `express/${r}`), t.response_type || (t.response_type = "code"), t.client_id || (t.client_id = this._stripe.getClientId()), t.scope || (t.scope = "read_write"), `https://${qn}/${r}?${Rr(t)}`;
  },
  token: va({
    method: "POST",
    path: "oauth/token",
    host: qn
  }),
  deauthorize(t, ...e) {
    return t.client_id || (t.client_id = this._stripe.getClientId()), va({
      method: "POST",
      path: "oauth/deauthorize",
      host: qn
    }).apply(this, [t, ...e]);
  }
}), Re = o.method, zu = o.extend({
  create: Re({ method: "POST", fullPath: "/v1/payment_intents" }),
  retrieve: Re({
    method: "GET",
    fullPath: "/v1/payment_intents/{intent}"
  }),
  update: Re({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}"
  }),
  list: Re({
    method: "GET",
    fullPath: "/v1/payment_intents",
    methodType: "list"
  }),
  applyCustomerBalance: Re({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}/apply_customer_balance"
  }),
  cancel: Re({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}/cancel"
  }),
  capture: Re({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}/capture"
  }),
  confirm: Re({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}/confirm"
  }),
  incrementAuthorization: Re({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}/increment_authorization"
  }),
  search: Re({
    method: "GET",
    fullPath: "/v1/payment_intents/search",
    methodType: "search"
  }),
  verifyMicrodeposits: Re({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}/verify_microdeposits"
  })
}), Ut = o.method, Vu = o.extend({
  create: Ut({ method: "POST", fullPath: "/v1/payment_links" }),
  retrieve: Ut({
    method: "GET",
    fullPath: "/v1/payment_links/{payment_link}"
  }),
  update: Ut({
    method: "POST",
    fullPath: "/v1/payment_links/{payment_link}"
  }),
  list: Ut({
    method: "GET",
    fullPath: "/v1/payment_links",
    methodType: "list"
  }),
  listLineItems: Ut({
    method: "GET",
    fullPath: "/v1/payment_links/{payment_link}/line_items",
    methodType: "list"
  })
}), gr = o.method, Ku = o.extend({
  create: gr({
    method: "POST",
    fullPath: "/v1/payment_method_configurations"
  }),
  retrieve: gr({
    method: "GET",
    fullPath: "/v1/payment_method_configurations/{configuration}"
  }),
  update: gr({
    method: "POST",
    fullPath: "/v1/payment_method_configurations/{configuration}"
  }),
  list: gr({
    method: "GET",
    fullPath: "/v1/payment_method_configurations",
    methodType: "list"
  })
}), jt = o.method, Yu = o.extend({
  create: jt({
    method: "POST",
    fullPath: "/v1/payment_method_domains"
  }),
  retrieve: jt({
    method: "GET",
    fullPath: "/v1/payment_method_domains/{payment_method_domain}"
  }),
  update: jt({
    method: "POST",
    fullPath: "/v1/payment_method_domains/{payment_method_domain}"
  }),
  list: jt({
    method: "GET",
    fullPath: "/v1/payment_method_domains",
    methodType: "list"
  }),
  validate: jt({
    method: "POST",
    fullPath: "/v1/payment_method_domains/{payment_method_domain}/validate"
  })
}), pt = o.method, Ju = o.extend({
  create: pt({ method: "POST", fullPath: "/v1/payment_methods" }),
  retrieve: pt({
    method: "GET",
    fullPath: "/v1/payment_methods/{payment_method}"
  }),
  update: pt({
    method: "POST",
    fullPath: "/v1/payment_methods/{payment_method}"
  }),
  list: pt({
    method: "GET",
    fullPath: "/v1/payment_methods",
    methodType: "list"
  }),
  attach: pt({
    method: "POST",
    fullPath: "/v1/payment_methods/{payment_method}/attach"
  }),
  detach: pt({
    method: "POST",
    fullPath: "/v1/payment_methods/{payment_method}/detach"
  })
}), mt = o.method, Qu = o.extend({
  create: mt({ method: "POST", fullPath: "/v1/payouts" }),
  retrieve: mt({ method: "GET", fullPath: "/v1/payouts/{payout}" }),
  update: mt({ method: "POST", fullPath: "/v1/payouts/{payout}" }),
  list: mt({
    method: "GET",
    fullPath: "/v1/payouts",
    methodType: "list"
  }),
  cancel: mt({
    method: "POST",
    fullPath: "/v1/payouts/{payout}/cancel"
  }),
  reverse: mt({
    method: "POST",
    fullPath: "/v1/payouts/{payout}/reverse"
  })
}), Ht = o.method, Xu = o.extend({
  create: Ht({ method: "POST", fullPath: "/v1/plans" }),
  retrieve: Ht({ method: "GET", fullPath: "/v1/plans/{plan}" }),
  update: Ht({ method: "POST", fullPath: "/v1/plans/{plan}" }),
  list: Ht({
    method: "GET",
    fullPath: "/v1/plans",
    methodType: "list"
  }),
  del: Ht({ method: "DELETE", fullPath: "/v1/plans/{plan}" })
}), Bt = o.method, Zu = o.extend({
  create: Bt({ method: "POST", fullPath: "/v1/prices" }),
  retrieve: Bt({ method: "GET", fullPath: "/v1/prices/{price}" }),
  update: Bt({ method: "POST", fullPath: "/v1/prices/{price}" }),
  list: Bt({
    method: "GET",
    fullPath: "/v1/prices",
    methodType: "list"
  }),
  search: Bt({
    method: "GET",
    fullPath: "/v1/prices/search",
    methodType: "search"
  })
}), De = o.method, ec = o.extend({
  create: De({ method: "POST", fullPath: "/v1/products" }),
  retrieve: De({ method: "GET", fullPath: "/v1/products/{id}" }),
  update: De({ method: "POST", fullPath: "/v1/products/{id}" }),
  list: De({
    method: "GET",
    fullPath: "/v1/products",
    methodType: "list"
  }),
  del: De({ method: "DELETE", fullPath: "/v1/products/{id}" }),
  createFeature: De({
    method: "POST",
    fullPath: "/v1/products/{product}/features"
  }),
  deleteFeature: De({
    method: "DELETE",
    fullPath: "/v1/products/{product}/features/{id}"
  }),
  listFeatures: De({
    method: "GET",
    fullPath: "/v1/products/{product}/features",
    methodType: "list"
  }),
  retrieveFeature: De({
    method: "GET",
    fullPath: "/v1/products/{product}/features/{id}"
  }),
  search: De({
    method: "GET",
    fullPath: "/v1/products/search",
    methodType: "search"
  })
}), Tr = o.method, tc = o.extend({
  create: Tr({ method: "POST", fullPath: "/v1/promotion_codes" }),
  retrieve: Tr({
    method: "GET",
    fullPath: "/v1/promotion_codes/{promotion_code}"
  }),
  update: Tr({
    method: "POST",
    fullPath: "/v1/promotion_codes/{promotion_code}"
  }),
  list: Tr({
    method: "GET",
    fullPath: "/v1/promotion_codes",
    methodType: "list"
  })
}), qe = o.method, rc = o.extend({
  create: qe({ method: "POST", fullPath: "/v1/quotes" }),
  retrieve: qe({ method: "GET", fullPath: "/v1/quotes/{quote}" }),
  update: qe({ method: "POST", fullPath: "/v1/quotes/{quote}" }),
  list: qe({
    method: "GET",
    fullPath: "/v1/quotes",
    methodType: "list"
  }),
  accept: qe({ method: "POST", fullPath: "/v1/quotes/{quote}/accept" }),
  cancel: qe({ method: "POST", fullPath: "/v1/quotes/{quote}/cancel" }),
  finalizeQuote: qe({
    method: "POST",
    fullPath: "/v1/quotes/{quote}/finalize"
  }),
  listComputedUpfrontLineItems: qe({
    method: "GET",
    fullPath: "/v1/quotes/{quote}/computed_upfront_line_items",
    methodType: "list"
  }),
  listLineItems: qe({
    method: "GET",
    fullPath: "/v1/quotes/{quote}/line_items",
    methodType: "list"
  }),
  pdf: qe({
    method: "GET",
    fullPath: "/v1/quotes/{quote}/pdf",
    host: "files.stripe.com",
    streaming: !0
  })
}), Wt = o.method, nc = o.extend({
  create: Wt({ method: "POST", fullPath: "/v1/refunds" }),
  retrieve: Wt({ method: "GET", fullPath: "/v1/refunds/{refund}" }),
  update: Wt({ method: "POST", fullPath: "/v1/refunds/{refund}" }),
  list: Wt({
    method: "GET",
    fullPath: "/v1/refunds",
    methodType: "list"
  }),
  cancel: Wt({
    method: "POST",
    fullPath: "/v1/refunds/{refund}/cancel"
  })
}), kn = o.method, oc = o.extend({
  retrieve: kn({ method: "GET", fullPath: "/v1/reviews/{review}" }),
  list: kn({
    method: "GET",
    fullPath: "/v1/reviews",
    methodType: "list"
  }),
  approve: kn({
    method: "POST",
    fullPath: "/v1/reviews/{review}/approve"
  })
}), ac = o.method, ic = o.extend({
  list: ac({
    method: "GET",
    fullPath: "/v1/setup_attempts",
    methodType: "list"
  })
}), tt = o.method, sc = o.extend({
  create: tt({ method: "POST", fullPath: "/v1/setup_intents" }),
  retrieve: tt({
    method: "GET",
    fullPath: "/v1/setup_intents/{intent}"
  }),
  update: tt({
    method: "POST",
    fullPath: "/v1/setup_intents/{intent}"
  }),
  list: tt({
    method: "GET",
    fullPath: "/v1/setup_intents",
    methodType: "list"
  }),
  cancel: tt({
    method: "POST",
    fullPath: "/v1/setup_intents/{intent}/cancel"
  }),
  confirm: tt({
    method: "POST",
    fullPath: "/v1/setup_intents/{intent}/confirm"
  }),
  verifyMicrodeposits: tt({
    method: "POST",
    fullPath: "/v1/setup_intents/{intent}/verify_microdeposits"
  })
}), _r = o.method, lc = o.extend({
  create: _r({ method: "POST", fullPath: "/v1/shipping_rates" }),
  retrieve: _r({
    method: "GET",
    fullPath: "/v1/shipping_rates/{shipping_rate_token}"
  }),
  update: _r({
    method: "POST",
    fullPath: "/v1/shipping_rates/{shipping_rate_token}"
  }),
  list: _r({
    method: "GET",
    fullPath: "/v1/shipping_rates",
    methodType: "list"
  })
}), zt = o.method, uc = o.extend({
  create: zt({ method: "POST", fullPath: "/v1/sources" }),
  retrieve: zt({ method: "GET", fullPath: "/v1/sources/{source}" }),
  update: zt({ method: "POST", fullPath: "/v1/sources/{source}" }),
  listSourceTransactions: zt({
    method: "GET",
    fullPath: "/v1/sources/{source}/source_transactions",
    methodType: "list"
  }),
  verify: zt({
    method: "POST",
    fullPath: "/v1/sources/{source}/verify"
  })
}), rt = o.method, cc = o.extend({
  create: rt({ method: "POST", fullPath: "/v1/subscription_items" }),
  retrieve: rt({
    method: "GET",
    fullPath: "/v1/subscription_items/{item}"
  }),
  update: rt({
    method: "POST",
    fullPath: "/v1/subscription_items/{item}"
  }),
  list: rt({
    method: "GET",
    fullPath: "/v1/subscription_items",
    methodType: "list"
  }),
  del: rt({
    method: "DELETE",
    fullPath: "/v1/subscription_items/{item}"
  }),
  createUsageRecord: rt({
    method: "POST",
    fullPath: "/v1/subscription_items/{subscription_item}/usage_records"
  }),
  listUsageRecordSummaries: rt({
    method: "GET",
    fullPath: "/v1/subscription_items/{subscription_item}/usage_record_summaries",
    methodType: "list"
  })
}), vt = o.method, dc = o.extend({
  create: vt({
    method: "POST",
    fullPath: "/v1/subscription_schedules"
  }),
  retrieve: vt({
    method: "GET",
    fullPath: "/v1/subscription_schedules/{schedule}"
  }),
  update: vt({
    method: "POST",
    fullPath: "/v1/subscription_schedules/{schedule}"
  }),
  list: vt({
    method: "GET",
    fullPath: "/v1/subscription_schedules",
    methodType: "list"
  }),
  cancel: vt({
    method: "POST",
    fullPath: "/v1/subscription_schedules/{schedule}/cancel"
  }),
  release: vt({
    method: "POST",
    fullPath: "/v1/subscription_schedules/{schedule}/release"
  })
}), Be = o.method, hc = o.extend({
  create: Be({ method: "POST", fullPath: "/v1/subscriptions" }),
  retrieve: Be({
    method: "GET",
    fullPath: "/v1/subscriptions/{subscription_exposed_id}"
  }),
  update: Be({
    method: "POST",
    fullPath: "/v1/subscriptions/{subscription_exposed_id}"
  }),
  list: Be({
    method: "GET",
    fullPath: "/v1/subscriptions",
    methodType: "list"
  }),
  cancel: Be({
    method: "DELETE",
    fullPath: "/v1/subscriptions/{subscription_exposed_id}"
  }),
  deleteDiscount: Be({
    method: "DELETE",
    fullPath: "/v1/subscriptions/{subscription_exposed_id}/discount"
  }),
  resume: Be({
    method: "POST",
    fullPath: "/v1/subscriptions/{subscription}/resume"
  }),
  search: Be({
    method: "GET",
    fullPath: "/v1/subscriptions/search",
    methodType: "search"
  })
}), ya = o.method, fc = o.extend({
  retrieve: ya({ method: "GET", fullPath: "/v1/tax_codes/{id}" }),
  list: ya({
    method: "GET",
    fullPath: "/v1/tax_codes",
    methodType: "list"
  })
}), Er = o.method, pc = o.extend({
  create: Er({ method: "POST", fullPath: "/v1/tax_ids" }),
  retrieve: Er({ method: "GET", fullPath: "/v1/tax_ids/{id}" }),
  list: Er({
    method: "GET",
    fullPath: "/v1/tax_ids",
    methodType: "list"
  }),
  del: Er({ method: "DELETE", fullPath: "/v1/tax_ids/{id}" })
}), Sr = o.method, mc = o.extend({
  create: Sr({ method: "POST", fullPath: "/v1/tax_rates" }),
  retrieve: Sr({ method: "GET", fullPath: "/v1/tax_rates/{tax_rate}" }),
  update: Sr({ method: "POST", fullPath: "/v1/tax_rates/{tax_rate}" }),
  list: Sr({
    method: "GET",
    fullPath: "/v1/tax_rates",
    methodType: "list"
  })
}), Pa = o.method, vc = o.extend({
  create: Pa({ method: "POST", fullPath: "/v1/tokens" }),
  retrieve: Pa({ method: "GET", fullPath: "/v1/tokens/{token}" })
}), Vt = o.method, yc = o.extend({
  create: Vt({ method: "POST", fullPath: "/v1/topups" }),
  retrieve: Vt({ method: "GET", fullPath: "/v1/topups/{topup}" }),
  update: Vt({ method: "POST", fullPath: "/v1/topups/{topup}" }),
  list: Vt({
    method: "GET",
    fullPath: "/v1/topups",
    methodType: "list"
  }),
  cancel: Vt({ method: "POST", fullPath: "/v1/topups/{topup}/cancel" })
}), We = o.method, Pc = o.extend({
  create: We({ method: "POST", fullPath: "/v1/transfers" }),
  retrieve: We({ method: "GET", fullPath: "/v1/transfers/{transfer}" }),
  update: We({ method: "POST", fullPath: "/v1/transfers/{transfer}" }),
  list: We({
    method: "GET",
    fullPath: "/v1/transfers",
    methodType: "list"
  }),
  createReversal: We({
    method: "POST",
    fullPath: "/v1/transfers/{id}/reversals"
  }),
  listReversals: We({
    method: "GET",
    fullPath: "/v1/transfers/{id}/reversals",
    methodType: "list"
  }),
  retrieveReversal: We({
    method: "GET",
    fullPath: "/v1/transfers/{transfer}/reversals/{id}"
  }),
  updateReversal: We({
    method: "POST",
    fullPath: "/v1/transfers/{transfer}/reversals/{id}"
  })
}), Kt = o.method, gc = o.extend({
  create: Kt({ method: "POST", fullPath: "/v1/webhook_endpoints" }),
  retrieve: Kt({
    method: "GET",
    fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
  }),
  update: Kt({
    method: "POST",
    fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
  }),
  list: Kt({
    method: "GET",
    fullPath: "/v1/webhook_endpoints",
    methodType: "list"
  }),
  del: Kt({
    method: "DELETE",
    fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
  })
}), Tc = ee("apps", { Secrets: Yl }), _c = ee("billing", {
  Alerts: Ds,
  CreditBalanceSummary: Ys,
  CreditBalanceTransactions: Js,
  CreditGrants: Qs,
  MeterEventAdjustments: hl,
  MeterEvents: Tl,
  Meters: Sl
}), Ec = ee("billingPortal", {
  Configurations: js,
  Sessions: Ql
}), Sc = ee("checkout", {
  Sessions: Xl
}), bc = ee("climate", {
  Orders: bl,
  Products: Il,
  Suppliers: tu
}), Oc = ee("entitlements", {
  ActiveEntitlements: Gs,
  Features: il
}), wc = ee("financialConnections", {
  Accounts: $s,
  Sessions: Zl,
  Transactions: iu
}), xc = ee("forwarding", {
  Requests: Vl
}), Cc = ee("identity", {
  VerificationReports: hu,
  VerificationSessions: fu
}), Ac = ee("issuing", {
  Authorizations: ks,
  Cardholders: Ns,
  Cards: Us,
  Disputes: rl,
  PersonalizationDesigns: Rl,
  PhysicalBundles: Ml,
  Tokens: nu,
  Transactions: su
}), Rc = ee("radar", {
  EarlyFraudWarnings: nl,
  ValueListItems: cu,
  ValueLists: du
}), Mc = ee("reporting", {
  ReportRuns: Wl,
  ReportTypes: zl
}), Ic = ee("sigma", {
  ScheduledQueryRuns: Kl
}), $c = ee("tax", {
  Calculations: Fs,
  Registrations: Bl,
  Settings: eu,
  Transactions: lu
}), Gc = ee("terminal", {
  Configurations: Hs,
  ConnectionTokens: Vs,
  Locations: cl,
  Readers: Dl
}), Dc = ee("testHelpers", {
  ConfirmationTokens: Ws,
  Customers: el,
  Refunds: Hl,
  TestClocks: ru,
  Issuing: ee("issuing", {
    Authorizations: qs,
    Cards: Ls,
    PersonalizationDesigns: Al,
    Transactions: au
  }),
  Terminal: ee("terminal", {
    Readers: Gl
  }),
  Treasury: ee("treasury", {
    InboundTransfers: ll,
    OutboundPayments: Ol,
    OutboundTransfers: xl,
    ReceivedCredits: kl,
    ReceivedDebits: Ll
  })
}), qc = ee("treasury", {
  CreditReversals: Xs,
  DebitReversals: tl,
  FinancialAccounts: sl,
  InboundTransfers: ul,
  OutboundPayments: wl,
  OutboundTransfers: Cl,
  ReceivedCredits: Fl,
  ReceivedDebits: Ul,
  TransactionEntries: ou,
  Transactions: uu
}), kc = ee("v2", {
  Billing: ee("billing", {
    MeterEventAdjustments: pl,
    MeterEventSession: vl,
    MeterEventStream: Pl,
    MeterEvents: El
  }),
  Core: ee("core", {
    EventDestinations: ol,
    Events: al
  })
}), br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Account: ca,
  AccountLinks: mu,
  AccountSessions: yu,
  Accounts: ca,
  ApplePayDomains: Pu,
  ApplicationFees: gu,
  Apps: Tc,
  Balance: _u,
  BalanceTransactions: Eu,
  Billing: _c,
  BillingPortal: Ec,
  Charges: Su,
  Checkout: Sc,
  Climate: bc,
  ConfirmationTokens: Ou,
  CountrySpecs: wu,
  Coupons: xu,
  CreditNotes: Cu,
  CustomerSessions: Ru,
  Customers: Mu,
  Disputes: Iu,
  Entitlements: Oc,
  EphemeralKeys: $u,
  Events: Gu,
  ExchangeRates: Du,
  FileLinks: qu,
  Files: Nu,
  FinancialConnections: wc,
  Forwarding: xc,
  Identity: Cc,
  InvoiceItems: Lu,
  InvoiceRenderingTemplates: Uu,
  Invoices: ju,
  Issuing: Ac,
  Mandates: Bu,
  OAuth: Wu,
  PaymentIntents: zu,
  PaymentLinks: Vu,
  PaymentMethodConfigurations: Ku,
  PaymentMethodDomains: Yu,
  PaymentMethods: Ju,
  Payouts: Qu,
  Plans: Xu,
  Prices: Zu,
  Products: ec,
  PromotionCodes: tc,
  Quotes: rc,
  Radar: Rc,
  Refunds: nc,
  Reporting: Mc,
  Reviews: oc,
  SetupAttempts: ic,
  SetupIntents: sc,
  ShippingRates: lc,
  Sigma: Ic,
  Sources: uc,
  SubscriptionItems: cc,
  SubscriptionSchedules: dc,
  Subscriptions: hc,
  Tax: $c,
  TaxCodes: fc,
  TaxIds: pc,
  TaxRates: mc,
  Terminal: Gc,
  TestHelpers: Dc,
  Tokens: vc,
  Topups: yc,
  Transfers: Pc,
  Treasury: qc,
  V2: kc,
  WebhookEndpoints: gc
}, Symbol.toStringTag, { value: "Module" })), ga = "api.stripe.com", Ta = "443", _a = "/v1/", Ea = Ms, Sa = 8e4, ba = 5, Oa = 0.5, Fc = ["name", "version", "url", "partner_id"], wa = [
  "authenticator",
  "apiVersion",
  "typescript",
  "maxNetworkRetries",
  "httpAgent",
  "httpClient",
  "timeout",
  "host",
  "port",
  "protocol",
  "telemetry",
  "appInfo",
  "stripeAccount",
  "stripeContext"
], Nc = (t) => new Yt(t, o.MAX_BUFFERED_REQUEST_METRICS);
function Lc(t, e = Nc) {
  n.PACKAGE_VERSION = "17.4.0", n.USER_AGENT = Object.assign({ bindings_version: n.PACKAGE_VERSION, lang: "node", publisher: "stripe", uname: null, typescript: !1 }, ms()), n.StripeResource = o, n.resources = br, n.HttpClient = be, n.HttpClientResponse = Ga, n.CryptoProvider = Da;
  function r(a = t) {
    return Vo(a);
  }
  n.webhooks = Object.assign(r, Vo(t));
  function n(a, s = {}) {
    if (!(this instanceof n))
      return new n(a, s);
    const d = this._getPropsFromConfig(s);
    this._platformFunctions = t, Object.defineProperty(this, "_emitter", {
      value: this._platformFunctions.createEmitter(),
      enumerable: !1,
      configurable: !1,
      writable: !1
    }), this.VERSION = n.PACKAGE_VERSION, this.on = this._emitter.on.bind(this._emitter), this.once = this._emitter.once.bind(this._emitter), this.off = this._emitter.removeListener.bind(this._emitter);
    const f = d.httpAgent || null;
    this._api = {
      host: d.host || ga,
      port: d.port || Ta,
      protocol: d.protocol || "https",
      basePath: _a,
      version: d.apiVersion || Ea,
      timeout: En("timeout", d.timeout, Sa),
      maxNetworkRetries: En("maxNetworkRetries", d.maxNetworkRetries, 2),
      agent: f,
      httpClient: d.httpClient || (f ? this._platformFunctions.createNodeHttpClient(f) : this._platformFunctions.createDefaultHttpClient()),
      dev: !1,
      stripeAccount: d.stripeAccount || null,
      stripeContext: d.stripeContext || null
    };
    const v = d.typescript || !1;
    v !== n.USER_AGENT.typescript && (n.USER_AGENT.typescript = v), d.appInfo && this._setAppInfo(d.appInfo), this._prepResources(), this._setAuthenticator(a, d.authenticator), this.errors = io, this.webhooks = r(), this._prevRequestMetrics = [], this._enableTelemetry = d.telemetry !== !1, this._requestSender = e(this), this.StripeResource = n.StripeResource;
  }
  return n.errors = io, n.createNodeHttpClient = t.createNodeHttpClient, n.createFetchHttpClient = t.createFetchHttpClient, n.createNodeCryptoProvider = t.createNodeCryptoProvider, n.createSubtleCryptoProvider = t.createSubtleCryptoProvider, n.prototype = {
    // Properties are set in the constructor above
    _appInfo: void 0,
    on: null,
    off: null,
    once: null,
    VERSION: null,
    StripeResource: null,
    webhooks: null,
    errors: null,
    _api: null,
    _prevRequestMetrics: null,
    _emitter: null,
    _enableTelemetry: null,
    _requestSender: null,
    _platformFunctions: null,
    rawRequest(a, s, d, f) {
      return this._requestSender._rawRequest(a, s, d, f);
    },
    /**
     * @private
     */
    _setAuthenticator(a, s) {
      if (a && s)
        throw new Error("Can't specify both apiKey and authenticator");
      if (!a && !s)
        throw new Error("Neither apiKey nor config.authenticator provided");
      this._authenticator = a ? Ln(a) : s;
    },
    /**
     * @private
     * This may be removed in the future.
     */
    _setAppInfo(a) {
      if (a && typeof a != "object")
        throw new Error("AppInfo must be an object.");
      if (a && !a.name)
        throw new Error("AppInfo.name is required");
      a = a || {}, this._appInfo = Fc.reduce(
        (s, d) => (typeof a[d] == "string" && (s = s || {}, s[d] = a[d]), s),
        // @ts-ignore
        void 0
      );
    },
    /**
     * @private
     * This may be removed in the future.
     */
    _setApiField(a, s) {
      this._api[a] = s;
    },
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getApiField(a) {
      return this._api[a];
    },
    setClientId(a) {
      this._clientId = a;
    },
    getClientId() {
      return this._clientId;
    },
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getConstant: (a) => {
      switch (a) {
        case "DEFAULT_HOST":
          return ga;
        case "DEFAULT_PORT":
          return Ta;
        case "DEFAULT_BASE_PATH":
          return _a;
        case "DEFAULT_API_VERSION":
          return Ea;
        case "DEFAULT_TIMEOUT":
          return Sa;
        case "MAX_NETWORK_RETRY_DELAY_SEC":
          return ba;
        case "INITIAL_NETWORK_RETRY_DELAY_SEC":
          return Oa;
      }
      return n[a];
    },
    getMaxNetworkRetries() {
      return this.getApiField("maxNetworkRetries");
    },
    /**
     * @private
     * This may be removed in the future.
     */
    _setApiNumberField(a, s, d) {
      const f = En(a, s, d);
      this._setApiField(a, f);
    },
    getMaxNetworkRetryDelay() {
      return ba;
    },
    getInitialNetworkRetryDelay() {
      return Oa;
    },
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     *
     * Gets a JSON version of a User-Agent and uses a cached version for a slight
     * speed advantage.
     */
    getClientUserAgent(a) {
      return this.getClientUserAgentSeeded(n.USER_AGENT, a);
    },
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     *
     * Gets a JSON version of a User-Agent by encoding a seeded object and
     * fetching a uname from the system.
     */
    getClientUserAgentSeeded(a, s) {
      this._platformFunctions.getUname().then((d) => {
        var f;
        const v = {};
        for (const l in a)
          Object.prototype.hasOwnProperty.call(a, l) && (v[l] = encodeURIComponent((f = a[l]) !== null && f !== void 0 ? f : "null"));
        v.uname = encodeURIComponent(d || "UNKNOWN");
        const _ = this.getApiField("httpClient");
        _ && (v.httplib = encodeURIComponent(_.getClientName())), this._appInfo && (v.application = this._appInfo), s(JSON.stringify(v));
      });
    },
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getAppInfoAsString() {
      if (!this._appInfo)
        return "";
      let a = this._appInfo.name;
      return this._appInfo.version && (a += `/${this._appInfo.version}`), this._appInfo.url && (a += ` (${this._appInfo.url})`), a;
    },
    getTelemetryEnabled() {
      return this._enableTelemetry;
    },
    /**
     * @private
     * This may be removed in the future.
     */
    _prepResources() {
      for (const a in br)
        Object.prototype.hasOwnProperty.call(br, a) && (this[hs(a)] = new br[a](this));
    },
    /**
     * @private
     * This may be removed in the future.
     */
    _getPropsFromConfig(a) {
      if (!a)
        return {};
      const s = typeof a == "string";
      if (!(a === Object(a) && !Array.isArray(a)) && !s)
        throw new Error("Config must either be an object or a string");
      if (s)
        return {
          apiVersion: a
        };
      if (Object.keys(a).filter((v) => !wa.includes(v)).length > 0)
        throw new Error(`Config object may only contain the following: ${wa.join(", ")}`);
      return a;
    },
    parseThinEvent(a, s, d, f, v, _) {
      return this.webhooks.constructEvent(a, s, d, f, v, _);
    }
  }, n;
}
const Uc = Lc(new Ri());
async function jc(t, e) {
  return (await new Uc(e.secretKey).paymentIntents.create({
    customer: "cus_RQATBsWqSFeYZp",
    amount: t,
    currency: "USD",
    automatic_payment_methods: { enabled: !0 }
  })).client_secret;
}
async function Hc(t, { amount: e }, r) {
  return jc(e, r);
}
const ti = Ca(void 0);
function Bc({ amount: t, children: e, config: r }) {
  const [n, a] = Fe(), [s, d] = Fe("");
  return yt(() => {
    async function f() {
      const v = await si(r.publishableKey), _ = t * 100, l = parseInt(_.toFixed(2), 10), c = await Hc("stripe", { amount: l }, { secretKey: r.secretKey });
      a(v), d(c);
    }
    f();
  }, []), !s || !n ? null : /* @__PURE__ */ re.jsx(li, { stripe: n, options: { clientSecret: s }, children: /* @__PURE__ */ re.jsx(Wc, { clientSecret: s, children: e }) });
}
function Wc({ children: t, clientSecret: e }) {
  const r = ui(), n = Ra(), [a, s] = Fe({
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
    cardHolderName: ""
  });
  function d(v, _) {
    s((l) => ({ ...l, [v]: _ }));
  }
  async function f(v) {
    if (!(!r || !n))
      try {
        const _ = n.getElement("cardNumber"), l = await r.confirmCardPayment(e, {
          payment_method: {
            // @ts-ignore
            card: _
          }
        });
        if (l.error)
          throw new Error(l.error.message);
        v.onSuccess(l);
      } catch (_) {
        v.onError(_);
      } finally {
        v.onComplete();
      }
  }
  return /* @__PURE__ */ re.jsx(ti.Provider, { value: { submitPayment: f, form: a, updateField: d }, children: t });
}
function ri() {
  return Aa(ti);
}
const to = ({ fieldType: t }) => {
  const e = Ra(), r = `accru-payment-form-${t}-container`, n = ii(!1);
  return yt(() => {
    function a() {
      e.create(t).mount(`#${r}`);
    }
    n.current || (n.current = !0, a());
  }, []), /* @__PURE__ */ re.jsx("div", { id: r });
};
function zc(t) {
  const { updateField: e } = ri();
  function r(n) {
    return e("cardHolderName", n.target.value);
  }
  return /* @__PURE__ */ re.jsx(Ia, { ...t, onChange: r });
}
function Vc(t) {
  const { submitPayment: e } = ri();
  return /* @__PURE__ */ re.jsx(Ma, { ...t, submitPayment: e });
}
function Kc() {
  return /* @__PURE__ */ re.jsx(to, { fieldType: "cardNumber" });
}
function Yc() {
  return /* @__PURE__ */ re.jsx(to, { fieldType: "cardExpiry" });
}
function Jc() {
  return /* @__PURE__ */ re.jsx(to, { fieldType: "cardCvc" });
}
const Qc = {
  CardHolderName: zc,
  CreditCardNumber: Kc,
  CreditCardExpiration: Yc,
  CreditCardCvc: Jc,
  SubmitBtn: Vc
};
function Xc(t, e) {
  return e.find((r) => r.name === t).config;
}
function rd(t) {
  const [e, r] = Fe(!1), [n] = Fe(t.preferredProvider), [a, s] = Fe([]);
  if (yt(() => {
    async function f() {
      const v = await t.preReleaseGetProviders();
      if (!v.map((l) => l.name).includes(n))
        throw new Error(
          "Provider not found."
        );
      s(v), r(!0);
    }
    f();
  }, []), e === !1)
    return null;
  const d = Xc(n, a);
  return n === "nuvei" ? t.sessionToken ? /* @__PURE__ */ re.jsx(
    Pi,
    {
      sessionToken: t.sessionToken,
      config: d,
      children: t.children
    }
  ) : /* @__PURE__ */ re.jsx("div", { children: "Missing sessionToken" }) : n === "stripe" ? t.amount ? /* @__PURE__ */ re.jsx(Bc, { amount: t.amount, config: d, children: t.children }) : /* @__PURE__ */ re.jsx("div", { children: "Missing amount" }) : null;
}
function nd(t) {
  return t === "nuvei" ? Oi : t === "stripe" ? Qc : null;
}
export {
  rd as AccruPay,
  nd as form
};
