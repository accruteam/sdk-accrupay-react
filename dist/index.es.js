import xa, { createContext as Aa, memo as ii, useEffect as nt, useContext as Ca, useState as qe, useRef as si } from "react";
import { loadStripe as li } from "@stripe/stripe-js";
import { Elements as ui, useStripe as ci, useElements as Ra } from "@stripe/react-stripe-js";
var ro = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function di(t) {
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
var er = { exports: {} }, Ct = {};
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
function hi() {
  if (no) return Ct;
  no = 1;
  var t = xa, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, y, _) {
    var l, h = {}, T = null, m = null;
    _ !== void 0 && (T = "" + _), y.key !== void 0 && (T = "" + y.key), y.ref !== void 0 && (m = y.ref);
    for (l in y) n.call(y, l) && !s.hasOwnProperty(l) && (h[l] = y[l]);
    if (f && f.defaultProps) for (l in y = f.defaultProps, y) h[l] === void 0 && (h[l] = y[l]);
    return { $$typeof: e, type: f, key: T, ref: m, props: h, _owner: a.current };
  }
  return Ct.Fragment = r, Ct.jsx = c, Ct.jsxs = c, Ct;
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
function fi() {
  return oo || (oo = 1, process.env.NODE_ENV !== "production" && function() {
    var t = xa, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.iterator, O = "@@iterator";
    function u(i) {
      if (i === null || typeof i != "object")
        return null;
      var E = g && i[g] || i[O];
      return typeof E == "function" ? E : null;
    }
    var p = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(i) {
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
        var B = x.map(function(k) {
          return String(k);
        });
        B.unshift("Warning: " + E), Function.prototype.apply.call(console[i], console, B);
      }
    }
    var S = !1, A = !1, w = !1, I = !1, R = !1, G;
    G = Symbol.for("react.module.reference");
    function C(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === s || R || i === a || i === _ || i === l || I || i === m || S || A || w || typeof i == "object" && i !== null && (i.$$typeof === T || i.$$typeof === h || i.$$typeof === c || i.$$typeof === f || i.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === G || i.getModuleId !== void 0));
    }
    function L(i, E, x) {
      var M = i.displayName;
      if (M)
        return M;
      var j = E.displayName || E.name || "";
      return j !== "" ? x + "(" + j + ")" : x;
    }
    function $(i) {
      return i.displayName || "Context";
    }
    function Q(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
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
            return $(E) + ".Consumer";
          case c:
            var x = i;
            return $(x._context) + ".Provider";
          case y:
            return L(i, i.render, "ForwardRef");
          case h:
            var M = i.displayName || null;
            return M !== null ? M : Q(i.type) || "Memo";
          case T: {
            var j = i, B = j._payload, k = j._init;
            try {
              return Q(k(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, N = 0, fe, Oe, F, ye, pe, Me, $e;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function Ie() {
      {
        if (N === 0) {
          fe = console.log, Oe = console.info, F = console.warn, ye = console.error, pe = console.group, Me = console.groupCollapsed, $e = console.groupEnd;
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
              value: $e
            })
          });
        }
        N < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = p.ReactCurrentDispatcher, H;
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
      B = re.current, re.current = null, Ie();
      try {
        if (E) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (Te) {
              M = Te;
            }
            Reflect.construct(i, [], k);
          } else {
            try {
              k.call();
            } catch (Te) {
              M = Te;
            }
            i.call(k.prototype);
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
          for (var q = Te.stack.split(`
`), de = M.stack.split(`
`), X = q.length - 1, ae = de.length - 1; X >= 1 && ae >= 0 && q[X] !== de[ae]; )
            ae--;
          for (; X >= 1 && ae >= 0; X--, ae--)
            if (q[X] !== de[ae]) {
              if (X !== 1 || ae !== 1)
                do
                  if (X--, ae--, ae < 0 || q[X] !== de[ae]) {
                    var Se = `
` + q[X].replace(" at new ", " at ");
                    return i.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", i.displayName)), typeof i == "function" && z.set(i, Se), Se;
                  }
                while (X >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        W = !1, re.current = B, we(), Error.prepareStackTrace = j;
      }
      var st = i ? i.displayName || i.name : "", Qe = st ? V(st) : "";
      return typeof i == "function" && z.set(i, Qe), Qe;
    }
    function ne(i, E, x) {
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
          case y:
            return ne(i.render);
          case h:
            return Pe(i.type, E, x);
          case T: {
            var M = i, j = M._payload, B = M._init;
            try {
              return Pe(B(j), E, x);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, ue = {}, ge = p.ReactDebugCurrentFrame;
    function Ee(i) {
      if (i) {
        var E = i._owner, x = Pe(i.type, i._source, E ? E.type : null);
        ge.setExtraStackFrame(x);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ue(i, E, x, M, j) {
      {
        var B = Function.call.bind(oe);
        for (var k in i)
          if (B(i, k)) {
            var q = void 0;
            try {
              if (typeof i[k] != "function") {
                var de = Error((M || "React class") + ": " + x + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              q = i[k](E, k, M, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              q = X;
            }
            q && !(q instanceof Error) && (Ee(j), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", x, k, typeof q), Ee(null)), q instanceof Error && !(q.message in ue) && (ue[q.message] = !0, Ee(j), P("Failed %s type: %s", x, q.message), Ee(null));
          }
      }
    }
    var Le = Array.isArray;
    function gt(i) {
      return Le(i);
    }
    function Mr(i) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, x = E && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return x;
      }
    }
    function $r(i) {
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
      if ($r(i))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mr(i)), Jt(i);
    }
    var Ve = p.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ot, _t, Et;
    Et = {};
    function Ir(i) {
      if (oe.call(i, "ref")) {
        var E = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function St(i) {
      if (oe.call(i, "key")) {
        var E = Object.getOwnPropertyDescriptor(i, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function at(i, E) {
      if (typeof i.ref == "string" && Ve.current && E && Ve.current.stateNode !== E) {
        var x = Q(Ve.current.type);
        Et[x] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(Ve.current.type), i.ref), Et[x] = !0);
      }
    }
    function d(i, E) {
      {
        var x = function() {
          ot || (ot = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        x.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function v(i, E) {
      {
        var x = function() {
          _t || (_t = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        x.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var U = function(i, E, x, M, j, B, k) {
      var q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: i,
        key: E,
        ref: x,
        props: k,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return q._store = {}, Object.defineProperty(q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.defineProperty(q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function Y(i, E, x, M, j) {
      {
        var B, k = {}, q = null, de = null;
        x !== void 0 && (Tt(x), q = "" + x), St(E) && (Tt(E.key), q = "" + E.key), Ir(E) && (de = E.ref, at(E, j));
        for (B in E)
          oe.call(E, B) && !Ke.hasOwnProperty(B) && (k[B] = E[B]);
        if (i && i.defaultProps) {
          var X = i.defaultProps;
          for (B in X)
            k[B] === void 0 && (k[B] = X[B]);
        }
        if (q || de) {
          var ae = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          q && d(k, ae), de && v(k, ae);
        }
        return U(i, q, de, j, M, Ve.current, k);
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
    var Ae;
    Ae = !1;
    function ce(i) {
      return typeof i == "object" && i !== null && i.$$typeof === e;
    }
    function Ce() {
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
    var Fe = {};
    function _e(i) {
      {
        var E = Ce();
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
        if (Fe[x])
          return;
        Fe[x] = !0;
        var M = "";
        i && i._owner && i._owner !== K.current && (M = " It was passed a child from " + Q(i._owner.type) + "."), ve(i), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, M), ve(null);
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
            for (var B = j.call(i), k; !(k = B.next()).done; )
              ce(k.value) && Ot(k.value, E);
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
        else if (typeof E == "object" && (E.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === h))
          x = E.propTypes;
        else
          return;
        if (x) {
          var M = Q(E);
          Ue(x, i.props, "prop", M, i);
        } else if (E.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var j = Q(E);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ye(i) {
      {
        for (var E = Object.keys(i.props), x = 0; x < E.length; x++) {
          var M = E[x];
          if (M !== "children" && M !== "key") {
            ve(i), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), ve(null);
            break;
          }
        }
        i.ref !== null && (ve(i), P("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    var it = {};
    function Je(i, E, x, M, j, B) {
      {
        var k = C(i);
        if (!k) {
          var q = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = bt();
          de ? q += de : q += Ce();
          var X;
          i === null ? X = "null" : gt(i) ? X = "array" : i !== void 0 && i.$$typeof === e ? (X = "<" + (Q(i.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : X = typeof i, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, q);
        }
        var ae = Y(i, E, x, j, B);
        if (ae == null)
          return ae;
        if (k) {
          var Se = E.children;
          if (Se !== void 0)
            if (M)
              if (gt(Se)) {
                for (var st = 0; st < Se.length; st++)
                  wt(Se[st], i);
                Object.freeze && Object.freeze(Se);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wt(Se, i);
        }
        if (oe.call(E, "key")) {
          var Qe = Q(i), Te = Object.keys(E).filter(function(ai) {
            return ai !== "key";
          }), Gr = Te.length > 0 ? "{key: someKey, " + Te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!it[Qe + Gr]) {
            var oi = Te.length > 0 ? "{" + Te.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Gr, Qe, oi, Qe), it[Qe + Gr] = !0;
          }
        }
        return i === n ? Ye(ae) : Qt(ae), ae;
      }
    }
    function xt(i, E, x) {
      return Je(i, E, x, !0);
    }
    function At(i, E, x) {
      return Je(i, E, x, !1);
    }
    var Xt = At, Zt = xt;
    Rt.Fragment = n, Rt.jsx = Xt, Rt.jsxs = Zt;
  }()), Rt;
}
var ao;
function pi() {
  return ao || (ao = 1, process.env.NODE_ENV === "production" ? er.exports = hi() : er.exports = fi()), er.exports;
}
var ie = pi();
function mi(t) {
  const e = t.getFullYear(), r = String(t.getMonth() + 1).padStart(2, "0"), n = String(t.getDate()).padStart(2, "0"), a = String(t.getHours()).padStart(2, "0"), s = String(t.getMinutes()).padStart(2, "0"), c = String(t.getSeconds()).padStart(2, "0");
  return `${e}${r}${n}${a}${s}${c}`;
}
async function vi(t, e) {
  const r = `${t.merchantId}${t.merchantSiteId}${t.clientRequestId}${t.amount}${t.currency}${t.timeStamp}${e}`, a = new TextEncoder().encode(r), s = await crypto.subtle.digest("SHA-256", a);
  return Array.from(new Uint8Array(s)).map((c) => c.toString(16).padStart(2, "0")).join("");
}
async function yi(t, e) {
  const r = {
    merchantId: e.merchantId,
    merchantSiteId: e.merchantSiteId,
    amount: t,
    currency: "USD",
    timeStamp: mi(/* @__PURE__ */ new Date()),
    clientRequestId: "nicola@fyclabs.com",
    billingAddress: {
      country: "US",
      email: "nicola@fyclabs.com",
      firstName: "nicola",
      lastName: "luongo"
    },
    checksum: ""
  };
  r.checksum = await vi(r, e.merchantSecretKey);
  try {
    const n = await fetch("https://ppp-test.nuvei.com/ppp/api/v1/openOrder.do", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(r)
    }), { sessionToken: a } = await n.json();
    return a;
  } catch (n) {
    throw console.error(n), new Error("Error initializing session");
  }
}
class be {
  /** The client name used for diagnostics. */
  getClientName() {
    throw new Error("getClientName not implemented.");
  }
  makeRequest(e, r, n, a, s, c, f, y) {
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
class Ma {
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
      const c = new Promise((y, _) => {
        s = setTimeout(() => {
          s = null, _(be.makeTimeoutError());
        }, a);
      }), f = e(r, n);
      return Promise.race([f, c]).finally(() => {
        s && clearTimeout(s);
      });
    };
  }
  static makeFetchWithAbortTimeout(e) {
    return async (r, n, a) => {
      const s = new AbortController();
      let c = setTimeout(() => {
        c = null, s.abort(be.makeTimeoutError());
      }, a);
      try {
        return await e(r, Object.assign(Object.assign({}, n), { signal: s.signal }));
      } catch (f) {
        throw f.name === "AbortError" ? be.makeTimeoutError() : f;
      } finally {
        c && clearTimeout(c);
      }
    };
  }
  /** @override. */
  getClientName() {
    return "fetch";
  }
  async makeRequest(e, r, n, a, s, c, f, y) {
    const _ = f === "http", l = new URL(n, `${_ ? "http" : "https"}://${e}`);
    l.port = r;
    const h = a == "POST" || a == "PUT" || a == "PATCH", T = c || (h ? "" : void 0), m = await this._fetchFn(l.toString(), {
      method: a,
      // @ts-ignore
      headers: s,
      // @ts-ignore
      body: T
    }, y);
    return new Ln(m);
  }
}
class Ln extends Ma {
  constructor(e) {
    super(e.status, Ln._transformHeadersToObject(e.headers)), this._res = e;
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
class $a {
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
class Ia extends Error {
}
class Pi extends $a {
  constructor(e) {
    super(), this.subtleCrypto = e || crypto.subtle;
  }
  /** @override */
  computeHMACSignature(e, r) {
    throw new Ia("SubtleCryptoProvider cannot be used in a synchronous context.");
  }
  /** @override */
  async computeHMACSignatureAsync(e, r) {
    const n = new TextEncoder(), a = await this.subtleCrypto.importKey("raw", n.encode(r), {
      name: "HMAC",
      hash: { name: "SHA-256" }
    }, !1, ["sign"]), s = await this.subtleCrypto.sign("hmac", a, n.encode(e)), c = new Uint8Array(s), f = new Array(c.length);
    for (let y = 0; y < c.length; y++)
      f[y] = Fn[c[y]];
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
class gi {
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
    return new Pi(e);
  }
  createDefaultCryptoProvider() {
    throw new Error("createDefaultCryptoProvider not implemented.");
  }
}
class Ti extends Event {
  constructor(e, r) {
    super(e), this.data = r;
  }
}
class _i {
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
    return this.eventTarget.dispatchEvent(new Ti(e, r));
  }
}
class Ei extends gi {
  /** @override */
  getUname() {
    return Promise.resolve(null);
  }
  /** @override */
  createEmitter() {
    return new _i();
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
      return new Da(t);
    case "invalid_request_error":
      return new jn(t);
    case "api_error":
      return new Hn(t);
    case "authentication_error":
      return new Bn(t);
    case "rate_limit_error":
      return new Wn(t);
    case "idempotency_error":
      return new Fa(t);
    case "invalid_grant":
      return new Na(t);
    default:
      return new Ua(t);
  }
}, Ga = (t) => {
  switch (t.type) {
    // switchCases: The beginning of the section generated from our OpenAPI spec
    case "temporary_session_expired":
      return new La(t);
  }
  switch (t.code) {
    case "invalid_fields":
      return new jn(t);
  }
  return xr(t);
};
class he extends Error {
  constructor(e = {}, r = null) {
    super(e.message), this.type = r || this.constructor.name, this.raw = e, this.rawType = e.type, this.code = e.code, this.doc_url = e.doc_url, this.param = e.param, this.detail = e.detail, this.headers = e.headers, this.requestId = e.requestId, this.statusCode = e.statusCode, this.message = e.message, this.userMessage = e.user_message, this.charge = e.charge, this.decline_code = e.decline_code, this.payment_intent = e.payment_intent, this.payment_method = e.payment_method, this.payment_method_type = e.payment_method_type, this.setup_intent = e.setup_intent, this.source = e.source;
  }
}
he.generate = xr;
class Da extends he {
  constructor(e = {}) {
    super(e, "StripeCardError");
  }
}
class jn extends he {
  constructor(e = {}) {
    super(e, "StripeInvalidRequestError");
  }
}
class Hn extends he {
  constructor(e = {}) {
    super(e, "StripeAPIError");
  }
}
class Bn extends he {
  constructor(e = {}) {
    super(e, "StripeAuthenticationError");
  }
}
class ka extends he {
  constructor(e = {}) {
    super(e, "StripePermissionError");
  }
}
class Wn extends he {
  constructor(e = {}) {
    super(e, "StripeRateLimitError");
  }
}
class qa extends he {
  constructor(e = {}) {
    super(e, "StripeConnectionError");
  }
}
class ze extends he {
  constructor(e, r, n = {}) {
    super(n, "StripeSignatureVerificationError"), this.header = e, this.payload = r;
  }
}
class Fa extends he {
  constructor(e = {}) {
    super(e, "StripeIdempotencyError");
  }
}
class Na extends he {
  constructor(e = {}) {
    super(e, "StripeInvalidGrantError");
  }
}
class Ua extends he {
  constructor(e = {}) {
    super(e, "StripeUnknownError");
  }
}
class La extends he {
  constructor(e = {}) {
    super(e, "TemporarySessionExpiredError");
  }
}
const io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  StripeAPIError: Hn,
  StripeAuthenticationError: Bn,
  StripeCardError: Da,
  StripeConnectionError: qa,
  StripeError: he,
  StripeIdempotencyError: Fa,
  StripeInvalidGrantError: Na,
  StripeInvalidRequestError: jn,
  StripePermissionError: ka,
  StripeRateLimitError: Wn,
  StripeSignatureVerificationError: ze,
  StripeUnknownError: Ua,
  TemporarySessionExpiredError: La,
  generateV1Error: xr,
  generateV2Error: Ga
}, Symbol.toStringTag, { value: "Module" }));
var Dr, so;
function Pt() {
  return so || (so = 1, Dr = TypeError), Dr;
}
const Si = {}, bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Si
}, Symbol.toStringTag, { value: "Module" })), Oi = /* @__PURE__ */ di(bi);
var kr, lo;
function Ar() {
  if (lo) return kr;
  lo = 1;
  var t = typeof Map == "function" && Map.prototype, e = Object.getOwnPropertyDescriptor && t ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = t && e && typeof e.get == "function" ? e.get : null, n = t && Map.prototype.forEach, a = typeof Set == "function" && Set.prototype, s = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, c = a && s && typeof s.get == "function" ? s.get : null, f = a && Set.prototype.forEach, y = typeof WeakMap == "function" && WeakMap.prototype, _ = y ? WeakMap.prototype.has : null, l = typeof WeakSet == "function" && WeakSet.prototype, h = l ? WeakSet.prototype.has : null, T = typeof WeakRef == "function" && WeakRef.prototype, m = T ? WeakRef.prototype.deref : null, g = Boolean.prototype.valueOf, O = Object.prototype.toString, u = Function.prototype.toString, p = String.prototype.match, P = String.prototype.slice, b = String.prototype.replace, S = String.prototype.toUpperCase, A = String.prototype.toLowerCase, w = RegExp.prototype.test, I = Array.prototype.concat, R = Array.prototype.join, G = Array.prototype.slice, C = Math.floor, L = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, $ = Object.getOwnPropertySymbols, Q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Z = typeof Symbol == "function" && typeof Symbol.iterator == "object", N = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Z || !0) ? Symbol.toStringTag : null, fe = Object.prototype.propertyIsEnumerable, Oe = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(d) {
    return d.__proto__;
  } : null);
  function F(d, v) {
    if (d === 1 / 0 || d === -1 / 0 || d !== d || d && d > -1e3 && d < 1e3 || w.call(/e/, v))
      return v;
    var U = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof d == "number") {
      var Y = d < 0 ? -C(-d) : C(d);
      if (Y !== d) {
        var K = String(Y), D = P.call(v, K.length + 1);
        return b.call(K, U, "$&_") + "." + b.call(b.call(D, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return b.call(v, U, "$&_");
  }
  var ye = Oi, pe = ye.custom, Me = ne(pe) ? pe : null, $e = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Ne = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  kr = function d(v, U, Y, K) {
    var D = U || {};
    if (oe(D, "quoteStyle") && !oe($e, D.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (oe(D, "maxStringLength") && (typeof D.maxStringLength == "number" ? D.maxStringLength < 0 && D.maxStringLength !== 1 / 0 : D.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var ve = oe(D, "customInspect") ? D.customInspect : !0;
    if (typeof ve != "boolean" && ve !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (oe(D, "indent") && D.indent !== null && D.indent !== "	" && !(parseInt(D.indent, 10) === D.indent && D.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (oe(D, "numericSeparator") && typeof D.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Ae = D.numericSeparator;
    if (typeof v > "u")
      return "undefined";
    if (v === null)
      return "null";
    if (typeof v == "boolean")
      return v ? "true" : "false";
    if (typeof v == "string")
      return Tt(v, D);
    if (typeof v == "number") {
      if (v === 0)
        return 1 / 0 / v > 0 ? "0" : "-0";
      var ce = String(v);
      return Ae ? F(v, ce) : ce;
    }
    if (typeof v == "bigint") {
      var Ce = String(v) + "n";
      return Ae ? F(v, Ce) : Ce;
    }
    var bt = typeof D.depth > "u" ? 5 : D.depth;
    if (typeof Y > "u" && (Y = 0), Y >= bt && bt > 0 && typeof v == "object")
      return re(v) ? "[Array]" : "[Object]";
    var Fe = Ir(D, Y);
    if (typeof K > "u")
      K = [];
    else if (Ee(K, v) >= 0)
      return "[Circular]";
    function _e(k, q, de) {
      if (q && (K = G.call(K), K.push(q)), de) {
        var X = {
          depth: D.depth
        };
        return oe(D, "quoteStyle") && (X.quoteStyle = D.quoteStyle), d(k, X, Y + 1, K);
      }
      return d(k, D, Y + 1, K);
    }
    if (typeof v == "function" && !V(v)) {
      var Ot = ge(v), wt = at(v, _e);
      return "[Function" + (Ot ? ": " + Ot : " (anonymous)") + "]" + (wt.length > 0 ? " { " + R.call(wt, ", ") + " }" : "");
    }
    if (ne(v)) {
      var Qt = Z ? b.call(String(v), /^(Symbol\(.*\))_[^)]*$/, "$1") : Q.call(v);
      return typeof v == "object" && !Z ? Ke(Qt) : Qt;
    }
    if (Jt(v)) {
      for (var Ye = "<" + A.call(String(v.nodeName)), it = v.attributes || [], Je = 0; Je < it.length; Je++)
        Ye += " " + it[Je].name + "=" + Ie(we(it[Je].value), "double", D);
      return Ye += ">", v.childNodes && v.childNodes.length && (Ye += "..."), Ye += "</" + A.call(String(v.nodeName)) + ">", Ye;
    }
    if (re(v)) {
      if (v.length === 0)
        return "[]";
      var xt = at(v, _e);
      return Fe && !Et(xt) ? "[" + St(xt, Fe) + "]" : "[ " + R.call(xt, ", ") + " ]";
    }
    if (W(v)) {
      var At = at(v, _e);
      return !("cause" in Error.prototype) && "cause" in v && !fe.call(v, "cause") ? "{ [" + String(v) + "] " + R.call(I.call("[cause]: " + _e(v.cause), At), ", ") + " }" : At.length === 0 ? "[" + String(v) + "]" : "{ [" + String(v) + "] " + R.call(At, ", ") + " }";
    }
    if (typeof v == "object" && ve) {
      if (Me && typeof v[Me] == "function" && ye)
        return ye(v, { depth: bt - Y });
      if (ve !== "symbol" && typeof v.inspect == "function")
        return v.inspect();
    }
    if (Ue(v)) {
      var Xt = [];
      return n && n.call(v, function(k, q) {
        Xt.push(_e(q, v, !0) + " => " + _e(k, v));
      }), _t("Map", r.call(v), Xt, Fe);
    }
    if (Mr(v)) {
      var Zt = [];
      return f && f.call(v, function(k) {
        Zt.push(_e(k, v));
      }), _t("Set", c.call(v), Zt, Fe);
    }
    if (Le(v))
      return ot("WeakMap");
    if ($r(v))
      return ot("WeakSet");
    if (gt(v))
      return ot("WeakRef");
    if (le(v))
      return Ke(_e(Number(v)));
    if (xe(v))
      return Ke(_e(L.call(v)));
    if (me(v))
      return Ke(g.call(v));
    if (z(v))
      return Ke(_e(String(v)));
    if (typeof window < "u" && v === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && v === globalThis || typeof ro < "u" && v === ro)
      return "{ [object globalThis] }";
    if (!H(v) && !V(v)) {
      var i = at(v, _e), E = Oe ? Oe(v) === Object.prototype : v instanceof Object || v.constructor === Object, x = v instanceof Object ? "" : "null prototype", M = !E && N && Object(v) === v && N in v ? P.call(ue(v), 8, -1) : x ? "Object" : "", j = E || typeof v.constructor != "function" ? "" : v.constructor.name ? v.constructor.name + " " : "", B = j + (M || x ? "[" + R.call(I.call([], M || [], x || []), ": ") + "] " : "");
      return i.length === 0 ? B + "{}" : Fe ? B + "{" + St(i, Fe) + "}" : B + "{ " + R.call(i, ", ") + " }";
    }
    return String(v);
  };
  function Ie(d, v, U) {
    var Y = U.quoteStyle || v, K = $e[Y];
    return K + d + K;
  }
  function we(d) {
    return b.call(String(d), /"/g, "&quot;");
  }
  function re(d) {
    return ue(d) === "[object Array]" && (!N || !(typeof d == "object" && N in d));
  }
  function H(d) {
    return ue(d) === "[object Date]" && (!N || !(typeof d == "object" && N in d));
  }
  function V(d) {
    return ue(d) === "[object RegExp]" && (!N || !(typeof d == "object" && N in d));
  }
  function W(d) {
    return ue(d) === "[object Error]" && (!N || !(typeof d == "object" && N in d));
  }
  function z(d) {
    return ue(d) === "[object String]" && (!N || !(typeof d == "object" && N in d));
  }
  function le(d) {
    return ue(d) === "[object Number]" && (!N || !(typeof d == "object" && N in d));
  }
  function me(d) {
    return ue(d) === "[object Boolean]" && (!N || !(typeof d == "object" && N in d));
  }
  function ne(d) {
    if (Z)
      return d && typeof d == "object" && d instanceof Symbol;
    if (typeof d == "symbol")
      return !0;
    if (!d || typeof d != "object" || !Q)
      return !1;
    try {
      return Q.call(d), !0;
    } catch {
    }
    return !1;
  }
  function xe(d) {
    if (!d || typeof d != "object" || !L)
      return !1;
    try {
      return L.call(d), !0;
    } catch {
    }
    return !1;
  }
  var Pe = Object.prototype.hasOwnProperty || function(d) {
    return d in this;
  };
  function oe(d, v) {
    return Pe.call(d, v);
  }
  function ue(d) {
    return O.call(d);
  }
  function ge(d) {
    if (d.name)
      return d.name;
    var v = p.call(u.call(d), /^function\s*([\w$]+)/);
    return v ? v[1] : null;
  }
  function Ee(d, v) {
    if (d.indexOf)
      return d.indexOf(v);
    for (var U = 0, Y = d.length; U < Y; U++)
      if (d[U] === v)
        return U;
    return -1;
  }
  function Ue(d) {
    if (!r || !d || typeof d != "object")
      return !1;
    try {
      r.call(d);
      try {
        c.call(d);
      } catch {
        return !0;
      }
      return d instanceof Map;
    } catch {
    }
    return !1;
  }
  function Le(d) {
    if (!_ || !d || typeof d != "object")
      return !1;
    try {
      _.call(d, _);
      try {
        h.call(d, h);
      } catch {
        return !0;
      }
      return d instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function gt(d) {
    if (!m || !d || typeof d != "object")
      return !1;
    try {
      return m.call(d), !0;
    } catch {
    }
    return !1;
  }
  function Mr(d) {
    if (!c || !d || typeof d != "object")
      return !1;
    try {
      c.call(d);
      try {
        r.call(d);
      } catch {
        return !0;
      }
      return d instanceof Set;
    } catch {
    }
    return !1;
  }
  function $r(d) {
    if (!h || !d || typeof d != "object")
      return !1;
    try {
      h.call(d, h);
      try {
        _.call(d, _);
      } catch {
        return !0;
      }
      return d instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Jt(d) {
    return !d || typeof d != "object" ? !1 : typeof HTMLElement < "u" && d instanceof HTMLElement ? !0 : typeof d.nodeName == "string" && typeof d.getAttribute == "function";
  }
  function Tt(d, v) {
    if (d.length > v.maxStringLength) {
      var U = d.length - v.maxStringLength, Y = "... " + U + " more character" + (U > 1 ? "s" : "");
      return Tt(P.call(d, 0, v.maxStringLength), v) + Y;
    }
    var K = Ne[v.quoteStyle || "single"];
    K.lastIndex = 0;
    var D = b.call(b.call(d, K, "\\$1"), /[\x00-\x1f]/g, Ve);
    return Ie(D, "single", v);
  }
  function Ve(d) {
    var v = d.charCodeAt(0), U = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[v];
    return U ? "\\" + U : "\\x" + (v < 16 ? "0" : "") + S.call(v.toString(16));
  }
  function Ke(d) {
    return "Object(" + d + ")";
  }
  function ot(d) {
    return d + " { ? }";
  }
  function _t(d, v, U, Y) {
    var K = Y ? St(U, Y) : R.call(U, ", ");
    return d + " (" + v + ") {" + K + "}";
  }
  function Et(d) {
    for (var v = 0; v < d.length; v++)
      if (Ee(d[v], `
`) >= 0)
        return !1;
    return !0;
  }
  function Ir(d, v) {
    var U;
    if (d.indent === "	")
      U = "	";
    else if (typeof d.indent == "number" && d.indent > 0)
      U = R.call(Array(d.indent + 1), " ");
    else
      return null;
    return {
      base: U,
      prev: R.call(Array(v + 1), U)
    };
  }
  function St(d, v) {
    if (d.length === 0)
      return "";
    var U = `
` + v.prev + v.base;
    return U + R.call(d, "," + U) + `
` + v.prev;
  }
  function at(d, v) {
    var U = re(d), Y = [];
    if (U) {
      Y.length = d.length;
      for (var K = 0; K < d.length; K++)
        Y[K] = oe(d, K) ? v(d[K], d) : "";
    }
    var D = typeof $ == "function" ? $(d) : [], ve;
    if (Z) {
      ve = {};
      for (var Ae = 0; Ae < D.length; Ae++)
        ve["$" + D[Ae]] = D[Ae];
    }
    for (var ce in d)
      oe(d, ce) && (U && String(Number(ce)) === ce && ce < d.length || Z && ve["$" + ce] instanceof Symbol || (w.call(/[^\w$]/, ce) ? Y.push(v(ce, d) + ": " + v(d[ce], d)) : Y.push(ce + ": " + v(d[ce], d))));
    if (typeof $ == "function")
      for (var Ce = 0; Ce < D.length; Ce++)
        fe.call(d, D[Ce]) && Y.push("[" + v(D[Ce]) + "]: " + v(d[D[Ce]], d));
    return Y;
  }
  return kr;
}
var qr, uo;
function wi() {
  if (uo) return qr;
  uo = 1;
  var t = /* @__PURE__ */ Ar(), e = /* @__PURE__ */ Pt(), r = function(f, y, _) {
    for (var l = f, h; (h = l.next) != null; l = h)
      if (h.key === y)
        return l.next = h.next, _ || (h.next = /** @type {NonNullable<typeof list.next>} */
        f.next, f.next = h), h;
  }, n = function(f, y) {
    if (f) {
      var _ = r(f, y);
      return _ && _.value;
    }
  }, a = function(f, y, _) {
    var l = r(f, y);
    l ? l.value = _ : f.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: y,
      next: f.next,
      value: _
    };
  }, s = function(f, y) {
    return f ? !!r(f, y) : !1;
  }, c = function(f, y) {
    if (f)
      return r(f, y, !0);
  };
  return qr = function() {
    var y, _ = {
      assert: function(l) {
        if (!_.has(l))
          throw new e("Side channel does not contain " + t(l));
      },
      delete: function(l) {
        var h = y && y.next, T = c(y, l);
        return T && h && h === T && (y = void 0), !!T;
      },
      get: function(l) {
        return n(y, l);
      },
      has: function(l) {
        return s(y, l);
      },
      set: function(l, h) {
        y || (y = {
          next: void 0
        }), a(
          /** @type {NonNullable<typeof $o>} */
          y,
          l,
          h
        );
      }
    };
    return _;
  }, qr;
}
var Fr, co;
function xi() {
  return co || (co = 1, Fr = Object), Fr;
}
var Nr, ho;
function Ai() {
  return ho || (ho = 1, Nr = Error), Nr;
}
var Ur, fo;
function Ci() {
  return fo || (fo = 1, Ur = EvalError), Ur;
}
var Lr, po;
function Ri() {
  return po || (po = 1, Lr = RangeError), Lr;
}
var jr, mo;
function Mi() {
  return mo || (mo = 1, jr = ReferenceError), jr;
}
var Hr, vo;
function $i() {
  return vo || (vo = 1, Hr = SyntaxError), Hr;
}
var Br, yo;
function Ii() {
  return yo || (yo = 1, Br = URIError), Br;
}
var Wr, Po;
function Gi() {
  return Po || (Po = 1, Wr = Math.abs), Wr;
}
var zr, go;
function Di() {
  return go || (go = 1, zr = Math.floor), zr;
}
var Vr, To;
function ki() {
  return To || (To = 1, Vr = Math.max), Vr;
}
var Kr, _o;
function qi() {
  return _o || (_o = 1, Kr = Math.min), Kr;
}
var Yr, Eo;
function Fi() {
  return Eo || (Eo = 1, Yr = Math.pow), Yr;
}
var Jr, So;
function Ni() {
  return So || (So = 1, Jr = Object.getOwnPropertyDescriptor), Jr;
}
var Qr, bo;
function ja() {
  if (bo) return Qr;
  bo = 1;
  var t = /* @__PURE__ */ Ni();
  if (t)
    try {
      t([], "length");
    } catch {
      t = null;
    }
  return Qr = t, Qr;
}
var Xr, Oo;
function Ui() {
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
function Li() {
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
    var c = Object.getOwnPropertySymbols(e);
    if (c.length !== 1 || c[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
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
function ji() {
  if (xo) return en;
  xo = 1;
  var t = typeof Symbol < "u" && Symbol, e = Li();
  return en = function() {
    return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, en;
}
var tn, Ao;
function Hi() {
  if (Ao) return tn;
  Ao = 1;
  var t = "Function.prototype.bind called on incompatible ", e = Object.prototype.toString, r = Math.max, n = "[object Function]", a = function(y, _) {
    for (var l = [], h = 0; h < y.length; h += 1)
      l[h] = y[h];
    for (var T = 0; T < _.length; T += 1)
      l[T + y.length] = _[T];
    return l;
  }, s = function(y, _) {
    for (var l = [], h = _, T = 0; h < y.length; h += 1, T += 1)
      l[T] = y[h];
    return l;
  }, c = function(f, y) {
    for (var _ = "", l = 0; l < f.length; l += 1)
      _ += f[l], l + 1 < f.length && (_ += y);
    return _;
  };
  return tn = function(y) {
    var _ = this;
    if (typeof _ != "function" || e.apply(_) !== n)
      throw new TypeError(t + _);
    for (var l = s(arguments, 1), h, T = function() {
      if (this instanceof h) {
        var p = _.apply(
          this,
          a(l, arguments)
        );
        return Object(p) === p ? p : this;
      }
      return _.apply(
        y,
        a(l, arguments)
      );
    }, m = r(0, _.length - l.length), g = [], O = 0; O < m; O++)
      g[O] = "$" + O;
    if (h = Function("binder", "return function (" + c(g, ",") + "){ return binder.apply(this,arguments); }")(T), _.prototype) {
      var u = function() {
      };
      u.prototype = _.prototype, h.prototype = new u(), u.prototype = null;
    }
    return h;
  }, tn;
}
var rn, Co;
function Cr() {
  if (Co) return rn;
  Co = 1;
  var t = Hi();
  return rn = Function.prototype.bind || t, rn;
}
var nn, Ro;
function zn() {
  return Ro || (Ro = 1, nn = Function.prototype.call), nn;
}
var on, Mo;
function Ha() {
  return Mo || (Mo = 1, on = Function.prototype.apply), on;
}
var an, $o;
function Bi() {
  return $o || ($o = 1, an = typeof Reflect < "u" && Reflect && Reflect.apply), an;
}
var sn, Io;
function Wi() {
  if (Io) return sn;
  Io = 1;
  var t = Cr(), e = Ha(), r = zn(), n = Bi();
  return sn = n || t.call(r, e), sn;
}
var ln, Go;
function Ba() {
  if (Go) return ln;
  Go = 1;
  var t = Cr(), e = /* @__PURE__ */ Pt(), r = zn(), n = Wi();
  return ln = function(s) {
    if (s.length < 1 || typeof s[0] != "function")
      throw new e("a function is required");
    return n(t, r, s);
  }, ln;
}
var un, Do;
function zi() {
  if (Do) return un;
  Do = 1;
  var t = Ba(), e = /* @__PURE__ */ ja(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (c) {
    if (!c || typeof c != "object" || !("code" in c) || c.code !== "ERR_PROTO_ACCESS")
      throw c;
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
var cn, ko;
function Vi() {
  if (ko) return cn;
  ko = 1;
  var t = Function.prototype.call, e = Object.prototype.hasOwnProperty, r = Cr();
  return cn = r.call(t, e), cn;
}
var dn, qo;
function Vn() {
  if (qo) return dn;
  qo = 1;
  var t, e = /* @__PURE__ */ xi(), r = /* @__PURE__ */ Ai(), n = /* @__PURE__ */ Ci(), a = /* @__PURE__ */ Ri(), s = /* @__PURE__ */ Mi(), c = /* @__PURE__ */ $i(), f = /* @__PURE__ */ Pt(), y = /* @__PURE__ */ Ii(), _ = /* @__PURE__ */ Gi(), l = /* @__PURE__ */ Di(), h = /* @__PURE__ */ ki(), T = /* @__PURE__ */ qi(), m = /* @__PURE__ */ Fi(), g = Function, O = function(re) {
    try {
      return g('"use strict"; return (' + re + ").constructor;")();
    } catch {
    }
  }, u = /* @__PURE__ */ ja(), p = /* @__PURE__ */ Ui(), P = function() {
    throw new f();
  }, b = u ? function() {
    try {
      return arguments.callee, P;
    } catch {
      try {
        return u(arguments, "callee").get;
      } catch {
        return P;
      }
    }
  }() : P, S = ji()(), A = /* @__PURE__ */ zi(), w = typeof Reflect == "function" && Reflect.getPrototypeOf || e.getPrototypeOf || A, I = Ha(), R = zn(), G = {}, C = typeof Uint8Array > "u" || !w ? t : w(Uint8Array), L = {
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
    "%Function%": g,
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
    "%SyntaxError%": c,
    "%ThrowTypeError%": b,
    "%TypedArray%": C,
    "%TypeError%": f,
    "%Uint8Array%": typeof Uint8Array > "u" ? t : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? t : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? t : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? t : Uint32Array,
    "%URIError%": y,
    "%WeakMap%": typeof WeakMap > "u" ? t : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? t : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? t : WeakSet,
    "%Function.prototype.call%": R,
    "%Function.prototype.apply%": I,
    "%Object.defineProperty%": p,
    "%Math.abs%": _,
    "%Math.floor%": l,
    "%Math.max%": h,
    "%Math.min%": T,
    "%Math.pow%": m
  };
  if (w)
    try {
      null.error;
    } catch (re) {
      var $ = w(w(re));
      L["%Error.prototype%"] = $;
    }
  var Q = function re(H) {
    var V;
    if (H === "%AsyncFunction%")
      V = O("async function () {}");
    else if (H === "%GeneratorFunction%")
      V = O("function* () {}");
    else if (H === "%AsyncGeneratorFunction%")
      V = O("async function* () {}");
    else if (H === "%AsyncGenerator%") {
      var W = re("%AsyncGeneratorFunction%");
      W && (V = W.prototype);
    } else if (H === "%AsyncIteratorPrototype%") {
      var z = re("%AsyncGenerator%");
      z && w && (V = w(z.prototype));
    }
    return L[H] = V, V;
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
  }, N = Cr(), fe = /* @__PURE__ */ Vi(), Oe = N.call(R, Array.prototype.concat), F = N.call(I, Array.prototype.splice), ye = N.call(R, String.prototype.replace), pe = N.call(R, String.prototype.slice), Me = N.call(R, RegExp.prototype.exec), $e = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ne = /\\(\\)?/g, Ie = function(H) {
    var V = pe(H, 0, 1), W = pe(H, -1);
    if (V === "%" && W !== "%")
      throw new c("invalid intrinsic syntax, expected closing `%`");
    if (W === "%" && V !== "%")
      throw new c("invalid intrinsic syntax, expected opening `%`");
    var z = [];
    return ye(H, $e, function(le, me, ne, xe) {
      z[z.length] = ne ? ye(xe, Ne, "$1") : me || le;
    }), z;
  }, we = function(H, V) {
    var W = H, z;
    if (fe(Z, W) && (z = Z[W], W = "%" + z[0] + "%"), fe(L, W)) {
      var le = L[W];
      if (le === G && (le = Q(W)), typeof le > "u" && !V)
        throw new f("intrinsic " + H + " exists, but is not available. Please file an issue!");
      return {
        alias: z,
        name: W,
        value: le
      };
    }
    throw new c("intrinsic " + H + " does not exist!");
  };
  return dn = function(H, V) {
    if (typeof H != "string" || H.length === 0)
      throw new f("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof V != "boolean")
      throw new f('"allowMissing" argument must be a boolean');
    if (Me(/^%?[^%]*%?$/, H) === null)
      throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var W = Ie(H), z = W.length > 0 ? W[0] : "", le = we("%" + z + "%", V), me = le.name, ne = le.value, xe = !1, Pe = le.alias;
    Pe && (z = Pe[0], F(W, Oe([0, 1], Pe)));
    for (var oe = 1, ue = !0; oe < W.length; oe += 1) {
      var ge = W[oe], Ee = pe(ge, 0, 1), Ue = pe(ge, -1);
      if ((Ee === '"' || Ee === "'" || Ee === "`" || Ue === '"' || Ue === "'" || Ue === "`") && Ee !== Ue)
        throw new c("property names with quotes must have matching quotes");
      if ((ge === "constructor" || !ue) && (xe = !0), z += "." + ge, me = "%" + z + "%", fe(L, me))
        ne = L[me];
      else if (ne != null) {
        if (!(ge in ne)) {
          if (!V)
            throw new f("base intrinsic for " + H + " exists, but the property is not available.");
          return;
        }
        if (u && oe + 1 >= W.length) {
          var Le = u(ne, ge);
          ue = !!Le, ue && "get" in Le && !("originalValue" in Le.get) ? ne = Le.get : ne = ne[ge];
        } else
          ue = fe(ne, ge), ne = ne[ge];
        ue && !xe && (L[me] = ne);
      }
    }
    return ne;
  }, dn;
}
var hn, Fo;
function Wa() {
  if (Fo) return hn;
  Fo = 1;
  var t = /* @__PURE__ */ Vn(), e = Ba(), r = e([t("%String.prototype.indexOf%")]);
  return hn = function(a, s) {
    var c = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      t(a, !!s)
    );
    return typeof c == "function" && r(a, ".prototype.") > -1 ? e([c]) : c;
  }, hn;
}
var fn, No;
function za() {
  if (No) return fn;
  No = 1;
  var t = /* @__PURE__ */ Vn(), e = /* @__PURE__ */ Wa(), r = /* @__PURE__ */ Ar(), n = /* @__PURE__ */ Pt(), a = t("%Map%", !0), s = e("Map.prototype.get", !0), c = e("Map.prototype.set", !0), f = e("Map.prototype.has", !0), y = e("Map.prototype.delete", !0), _ = e("Map.prototype.size", !0);
  return fn = !!a && /** @type {Exclude<import('.'), false>} */
  function() {
    var h, T = {
      assert: function(m) {
        if (!T.has(m))
          throw new n("Side channel does not contain " + r(m));
      },
      delete: function(m) {
        if (h) {
          var g = y(h, m);
          return _(h) === 0 && (h = void 0), g;
        }
        return !1;
      },
      get: function(m) {
        if (h)
          return s(h, m);
      },
      has: function(m) {
        return h ? f(h, m) : !1;
      },
      set: function(m, g) {
        h || (h = new a()), c(h, m, g);
      }
    };
    return T;
  }, fn;
}
var pn, Uo;
function Ki() {
  if (Uo) return pn;
  Uo = 1;
  var t = /* @__PURE__ */ Vn(), e = /* @__PURE__ */ Wa(), r = /* @__PURE__ */ Ar(), n = za(), a = /* @__PURE__ */ Pt(), s = t("%WeakMap%", !0), c = e("WeakMap.prototype.get", !0), f = e("WeakMap.prototype.set", !0), y = e("WeakMap.prototype.has", !0), _ = e("WeakMap.prototype.delete", !0);
  return pn = s ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var h, T, m = {
        assert: function(g) {
          if (!m.has(g))
            throw new a("Side channel does not contain " + r(g));
        },
        delete: function(g) {
          if (s && g && (typeof g == "object" || typeof g == "function")) {
            if (h)
              return _(h, g);
          } else if (n && T)
            return T.delete(g);
          return !1;
        },
        get: function(g) {
          return s && g && (typeof g == "object" || typeof g == "function") && h ? c(h, g) : T && T.get(g);
        },
        has: function(g) {
          return s && g && (typeof g == "object" || typeof g == "function") && h ? y(h, g) : !!T && T.has(g);
        },
        set: function(g, O) {
          s && g && (typeof g == "object" || typeof g == "function") ? (h || (h = new s()), f(h, g, O)) : n && (T || (T = n()), T.set(g, O));
        }
      };
      return m;
    }
  ) : n, pn;
}
var mn, Lo;
function Yi() {
  if (Lo) return mn;
  Lo = 1;
  var t = /* @__PURE__ */ Pt(), e = /* @__PURE__ */ Ar(), r = wi(), n = za(), a = Ki(), s = a || n || r;
  return mn = function() {
    var f, y = {
      assert: function(_) {
        if (!y.has(_))
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
    return y;
  }, mn;
}
var vn, jo;
function Kn() {
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
function Va() {
  if (Ho) return yn;
  Ho = 1;
  var t = /* @__PURE__ */ Kn(), e = Object.prototype.hasOwnProperty, r = Array.isArray, n = function() {
    for (var u = [], p = 0; p < 256; ++p)
      u.push("%" + ((p < 16 ? "0" : "") + p.toString(16)).toUpperCase());
    return u;
  }(), a = function(p) {
    for (; p.length > 1; ) {
      var P = p.pop(), b = P.obj[P.prop];
      if (r(b)) {
        for (var S = [], A = 0; A < b.length; ++A)
          typeof b[A] < "u" && S.push(b[A]);
        P.obj[P.prop] = S;
      }
    }
  }, s = function(p, P) {
    for (var b = P && P.plainObjects ? { __proto__: null } : {}, S = 0; S < p.length; ++S)
      typeof p[S] < "u" && (b[S] = p[S]);
    return b;
  }, c = function u(p, P, b) {
    if (!P)
      return p;
    if (typeof P != "object" && typeof P != "function") {
      if (r(p))
        p.push(P);
      else if (p && typeof p == "object")
        (b && (b.plainObjects || b.allowPrototypes) || !e.call(Object.prototype, P)) && (p[P] = !0);
      else
        return [p, P];
      return p;
    }
    if (!p || typeof p != "object")
      return [p].concat(P);
    var S = p;
    return r(p) && !r(P) && (S = s(p, b)), r(p) && r(P) ? (P.forEach(function(A, w) {
      if (e.call(p, w)) {
        var I = p[w];
        I && typeof I == "object" && A && typeof A == "object" ? p[w] = u(I, A, b) : p.push(A);
      } else
        p[w] = A;
    }), p) : Object.keys(P).reduce(function(A, w) {
      var I = P[w];
      return e.call(A, w) ? A[w] = u(A[w], I, b) : A[w] = I, A;
    }, S);
  }, f = function(p, P) {
    return Object.keys(P).reduce(function(b, S) {
      return b[S] = P[S], b;
    }, p);
  }, y = function(u, p, P) {
    var b = u.replace(/\+/g, " ");
    if (P === "iso-8859-1")
      return b.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(b);
    } catch {
      return b;
    }
  }, _ = 1024, l = function(p, P, b, S, A) {
    if (p.length === 0)
      return p;
    var w = p;
    if (typeof p == "symbol" ? w = Symbol.prototype.toString.call(p) : typeof p != "string" && (w = String(p)), b === "iso-8859-1")
      return escape(w).replace(/%u[0-9a-f]{4}/gi, function(Q) {
        return "%26%23" + parseInt(Q.slice(2), 16) + "%3B";
      });
    for (var I = "", R = 0; R < w.length; R += _) {
      for (var G = w.length >= _ ? w.slice(R, R + _) : w, C = [], L = 0; L < G.length; ++L) {
        var $ = G.charCodeAt(L);
        if ($ === 45 || $ === 46 || $ === 95 || $ === 126 || $ >= 48 && $ <= 57 || $ >= 65 && $ <= 90 || $ >= 97 && $ <= 122 || A === t.RFC1738 && ($ === 40 || $ === 41)) {
          C[C.length] = G.charAt(L);
          continue;
        }
        if ($ < 128) {
          C[C.length] = n[$];
          continue;
        }
        if ($ < 2048) {
          C[C.length] = n[192 | $ >> 6] + n[128 | $ & 63];
          continue;
        }
        if ($ < 55296 || $ >= 57344) {
          C[C.length] = n[224 | $ >> 12] + n[128 | $ >> 6 & 63] + n[128 | $ & 63];
          continue;
        }
        L += 1, $ = 65536 + (($ & 1023) << 10 | G.charCodeAt(L) & 1023), C[C.length] = n[240 | $ >> 18] + n[128 | $ >> 12 & 63] + n[128 | $ >> 6 & 63] + n[128 | $ & 63];
      }
      I += C.join("");
    }
    return I;
  }, h = function(p) {
    for (var P = [{ obj: { o: p }, prop: "o" }], b = [], S = 0; S < P.length; ++S)
      for (var A = P[S], w = A.obj[A.prop], I = Object.keys(w), R = 0; R < I.length; ++R) {
        var G = I[R], C = w[G];
        typeof C == "object" && C !== null && b.indexOf(C) === -1 && (P.push({ obj: w, prop: G }), b.push(C));
      }
    return a(P), p;
  }, T = function(p) {
    return Object.prototype.toString.call(p) === "[object RegExp]";
  }, m = function(p) {
    return !p || typeof p != "object" ? !1 : !!(p.constructor && p.constructor.isBuffer && p.constructor.isBuffer(p));
  }, g = function(p, P) {
    return [].concat(p, P);
  }, O = function(p, P) {
    if (r(p)) {
      for (var b = [], S = 0; S < p.length; S += 1)
        b.push(P(p[S]));
      return b;
    }
    return P(p);
  };
  return yn = {
    arrayToObject: s,
    assign: f,
    combine: g,
    compact: h,
    decode: y,
    encode: l,
    isBuffer: m,
    isRegExp: T,
    maybeMap: O,
    merge: c
  }, yn;
}
var Pn, Bo;
function Ji() {
  if (Bo) return Pn;
  Bo = 1;
  var t = Yi(), e = /* @__PURE__ */ Va(), r = /* @__PURE__ */ Kn(), n = Object.prototype.hasOwnProperty, a = {
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
  }, s = Array.isArray, c = Array.prototype.push, f = function(O, u) {
    c.apply(O, s(u) ? u : [u]);
  }, y = Date.prototype.toISOString, _ = r.default, l = {
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
      return y.call(u);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, h = function(u) {
    return typeof u == "string" || typeof u == "number" || typeof u == "boolean" || typeof u == "symbol" || typeof u == "bigint";
  }, T = {}, m = function O(u, p, P, b, S, A, w, I, R, G, C, L, $, Q, Z, N, fe, Oe) {
    for (var F = u, ye = Oe, pe = 0, Me = !1; (ye = ye.get(T)) !== void 0 && !Me; ) {
      var $e = ye.get(u);
      if (pe += 1, typeof $e < "u") {
        if ($e === pe)
          throw new RangeError("Cyclic object value");
        Me = !0;
      }
      typeof ye.get(T) > "u" && (pe = 0);
    }
    if (typeof G == "function" ? F = G(p, F) : F instanceof Date ? F = $(F) : P === "comma" && s(F) && (F = e.maybeMap(F, function(Pe) {
      return Pe instanceof Date ? $(Pe) : Pe;
    })), F === null) {
      if (A)
        return R && !N ? R(p, l.encoder, fe, "key", Q) : p;
      F = "";
    }
    if (h(F) || e.isBuffer(F)) {
      if (R) {
        var Ne = N ? p : R(p, l.encoder, fe, "key", Q);
        return [Z(Ne) + "=" + Z(R(F, l.encoder, fe, "value", Q))];
      }
      return [Z(p) + "=" + Z(String(F))];
    }
    var Ie = [];
    if (typeof F > "u")
      return Ie;
    var we;
    if (P === "comma" && s(F))
      N && R && (F = e.maybeMap(F, R)), we = [{ value: F.length > 0 ? F.join(",") || null : void 0 }];
    else if (s(G))
      we = G;
    else {
      var re = Object.keys(F);
      we = C ? re.sort(C) : re;
    }
    var H = I ? String(p).replace(/\./g, "%2E") : String(p), V = b && s(F) && F.length === 1 ? H + "[]" : H;
    if (S && s(F) && F.length === 0)
      return V + "[]";
    for (var W = 0; W < we.length; ++W) {
      var z = we[W], le = typeof z == "object" && z && typeof z.value < "u" ? z.value : F[z];
      if (!(w && le === null)) {
        var me = L && I ? String(z).replace(/\./g, "%2E") : String(z), ne = s(F) ? typeof P == "function" ? P(V, me) : V : V + (L ? "." + me : "[" + me + "]");
        Oe.set(u, pe);
        var xe = t();
        xe.set(T, Oe), f(Ie, O(
          le,
          ne,
          P,
          b,
          S,
          A,
          w,
          I,
          P === "comma" && N && s(F) ? null : R,
          G,
          C,
          L,
          $,
          Q,
          Z,
          N,
          fe,
          xe
        ));
      }
    }
    return Ie;
  }, g = function(u) {
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
    var P = r.default;
    if (typeof u.format < "u") {
      if (!n.call(r.formatters, u.format))
        throw new TypeError("Unknown format option provided.");
      P = u.format;
    }
    var b = r.formatters[P], S = l.filter;
    (typeof u.filter == "function" || s(u.filter)) && (S = u.filter);
    var A;
    if (u.arrayFormat in a ? A = u.arrayFormat : "indices" in u ? A = u.indices ? "indices" : "repeat" : A = l.arrayFormat, "commaRoundTrip" in u && typeof u.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var w = typeof u.allowDots > "u" ? u.encodeDotInKeys === !0 ? !0 : l.allowDots : !!u.allowDots;
    return {
      addQueryPrefix: typeof u.addQueryPrefix == "boolean" ? u.addQueryPrefix : l.addQueryPrefix,
      allowDots: w,
      allowEmptyArrays: typeof u.allowEmptyArrays == "boolean" ? !!u.allowEmptyArrays : l.allowEmptyArrays,
      arrayFormat: A,
      charset: p,
      charsetSentinel: typeof u.charsetSentinel == "boolean" ? u.charsetSentinel : l.charsetSentinel,
      commaRoundTrip: !!u.commaRoundTrip,
      delimiter: typeof u.delimiter > "u" ? l.delimiter : u.delimiter,
      encode: typeof u.encode == "boolean" ? u.encode : l.encode,
      encodeDotInKeys: typeof u.encodeDotInKeys == "boolean" ? u.encodeDotInKeys : l.encodeDotInKeys,
      encoder: typeof u.encoder == "function" ? u.encoder : l.encoder,
      encodeValuesOnly: typeof u.encodeValuesOnly == "boolean" ? u.encodeValuesOnly : l.encodeValuesOnly,
      filter: S,
      format: P,
      formatter: b,
      serializeDate: typeof u.serializeDate == "function" ? u.serializeDate : l.serializeDate,
      skipNulls: typeof u.skipNulls == "boolean" ? u.skipNulls : l.skipNulls,
      sort: typeof u.sort == "function" ? u.sort : null,
      strictNullHandling: typeof u.strictNullHandling == "boolean" ? u.strictNullHandling : l.strictNullHandling
    };
  };
  return Pn = function(O, u) {
    var p = O, P = g(u), b, S;
    typeof P.filter == "function" ? (S = P.filter, p = S("", p)) : s(P.filter) && (S = P.filter, b = S);
    var A = [];
    if (typeof p != "object" || p === null)
      return "";
    var w = a[P.arrayFormat], I = w === "comma" && P.commaRoundTrip;
    b || (b = Object.keys(p)), P.sort && b.sort(P.sort);
    for (var R = t(), G = 0; G < b.length; ++G) {
      var C = b[G], L = p[C];
      P.skipNulls && L === null || f(A, m(
        L,
        C,
        w,
        I,
        P.allowEmptyArrays,
        P.strictNullHandling,
        P.skipNulls,
        P.encodeDotInKeys,
        P.encode ? P.encoder : null,
        P.filter,
        P.sort,
        P.allowDots,
        P.serializeDate,
        P.format,
        P.formatter,
        P.encodeValuesOnly,
        P.charset,
        R
      ));
    }
    var $ = A.join(P.delimiter), Q = P.addQueryPrefix === !0 ? "?" : "";
    return P.charsetSentinel && (P.charset === "iso-8859-1" ? Q += "utf8=%26%2310003%3B&" : Q += "utf8=%E2%9C%93&"), $.length > 0 ? Q + $ : "";
  }, Pn;
}
var gn, Wo;
function Qi() {
  if (Wo) return gn;
  Wo = 1;
  var t = /* @__PURE__ */ Va(), e = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
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
  }, a = function(T) {
    return T.replace(/&#(\d+);/g, function(m, g) {
      return String.fromCharCode(parseInt(g, 10));
    });
  }, s = function(T, m) {
    return T && typeof T == "string" && m.comma && T.indexOf(",") > -1 ? T.split(",") : T;
  }, c = "utf8=%26%2310003%3B", f = "utf8=%E2%9C%93", y = function(m, g) {
    var O = { __proto__: null }, u = g.ignoreQueryPrefix ? m.replace(/^\?/, "") : m;
    u = u.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var p = g.parameterLimit === 1 / 0 ? void 0 : g.parameterLimit, P = u.split(g.delimiter, p), b = -1, S, A = g.charset;
    if (g.charsetSentinel)
      for (S = 0; S < P.length; ++S)
        P[S].indexOf("utf8=") === 0 && (P[S] === f ? A = "utf-8" : P[S] === c && (A = "iso-8859-1"), b = S, S = P.length);
    for (S = 0; S < P.length; ++S)
      if (S !== b) {
        var w = P[S], I = w.indexOf("]="), R = I === -1 ? w.indexOf("=") : I + 1, G, C;
        R === -1 ? (G = g.decoder(w, n.decoder, A, "key"), C = g.strictNullHandling ? null : "") : (G = g.decoder(w.slice(0, R), n.decoder, A, "key"), C = t.maybeMap(
          s(w.slice(R + 1), g),
          function($) {
            return g.decoder($, n.decoder, A, "value");
          }
        )), C && g.interpretNumericEntities && A === "iso-8859-1" && (C = a(String(C))), w.indexOf("[]=") > -1 && (C = r(C) ? [C] : C);
        var L = e.call(O, G);
        L && g.duplicates === "combine" ? O[G] = t.combine(O[G], C) : (!L || g.duplicates === "last") && (O[G] = C);
      }
    return O;
  }, _ = function(T, m, g, O) {
    for (var u = O ? m : s(m, g), p = T.length - 1; p >= 0; --p) {
      var P, b = T[p];
      if (b === "[]" && g.parseArrays)
        P = g.allowEmptyArrays && (u === "" || g.strictNullHandling && u === null) ? [] : [].concat(u);
      else {
        P = g.plainObjects ? { __proto__: null } : {};
        var S = b.charAt(0) === "[" && b.charAt(b.length - 1) === "]" ? b.slice(1, -1) : b, A = g.decodeDotInKeys ? S.replace(/%2E/g, ".") : S, w = parseInt(A, 10);
        !g.parseArrays && A === "" ? P = { 0: u } : !isNaN(w) && b !== A && String(w) === A && w >= 0 && g.parseArrays && w <= g.arrayLimit ? (P = [], P[w] = u) : A !== "__proto__" && (P[A] = u);
      }
      u = P;
    }
    return u;
  }, l = function(m, g, O, u) {
    if (m) {
      var p = O.allowDots ? m.replace(/\.([^.[]+)/g, "[$1]") : m, P = /(\[[^[\]]*])/, b = /(\[[^[\]]*])/g, S = O.depth > 0 && P.exec(p), A = S ? p.slice(0, S.index) : p, w = [];
      if (A) {
        if (!O.plainObjects && e.call(Object.prototype, A) && !O.allowPrototypes)
          return;
        w.push(A);
      }
      for (var I = 0; O.depth > 0 && (S = b.exec(p)) !== null && I < O.depth; ) {
        if (I += 1, !O.plainObjects && e.call(Object.prototype, S[1].slice(1, -1)) && !O.allowPrototypes)
          return;
        w.push(S[1]);
      }
      if (S) {
        if (O.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + O.depth + " and strictDepth is true");
        w.push("[" + p.slice(S.index) + "]");
      }
      return _(w, g, O, u);
    }
  }, h = function(m) {
    if (!m)
      return n;
    if (typeof m.allowEmptyArrays < "u" && typeof m.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof m.decodeDotInKeys < "u" && typeof m.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (m.decoder !== null && typeof m.decoder < "u" && typeof m.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof m.charset < "u" && m.charset !== "utf-8" && m.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var g = typeof m.charset > "u" ? n.charset : m.charset, O = typeof m.duplicates > "u" ? n.duplicates : m.duplicates;
    if (O !== "combine" && O !== "first" && O !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var u = typeof m.allowDots > "u" ? m.decodeDotInKeys === !0 ? !0 : n.allowDots : !!m.allowDots;
    return {
      allowDots: u,
      allowEmptyArrays: typeof m.allowEmptyArrays == "boolean" ? !!m.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof m.allowPrototypes == "boolean" ? m.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof m.allowSparse == "boolean" ? m.allowSparse : n.allowSparse,
      arrayLimit: typeof m.arrayLimit == "number" ? m.arrayLimit : n.arrayLimit,
      charset: g,
      charsetSentinel: typeof m.charsetSentinel == "boolean" ? m.charsetSentinel : n.charsetSentinel,
      comma: typeof m.comma == "boolean" ? m.comma : n.comma,
      decodeDotInKeys: typeof m.decodeDotInKeys == "boolean" ? m.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof m.decoder == "function" ? m.decoder : n.decoder,
      delimiter: typeof m.delimiter == "string" || t.isRegExp(m.delimiter) ? m.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof m.depth == "number" || m.depth === !1 ? +m.depth : n.depth,
      duplicates: O,
      ignoreQueryPrefix: m.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof m.interpretNumericEntities == "boolean" ? m.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof m.parameterLimit == "number" ? m.parameterLimit : n.parameterLimit,
      parseArrays: m.parseArrays !== !1,
      plainObjects: typeof m.plainObjects == "boolean" ? m.plainObjects : n.plainObjects,
      strictDepth: typeof m.strictDepth == "boolean" ? !!m.strictDepth : n.strictDepth,
      strictNullHandling: typeof m.strictNullHandling == "boolean" ? m.strictNullHandling : n.strictNullHandling
    };
  };
  return gn = function(T, m) {
    var g = h(m);
    if (T === "" || T === null || typeof T > "u")
      return g.plainObjects ? { __proto__: null } : {};
    for (var O = typeof T == "string" ? y(T, g) : T, u = g.plainObjects ? { __proto__: null } : {}, p = Object.keys(O), P = 0; P < p.length; ++P) {
      var b = p[P], S = l(b, O[b], g, typeof T == "string");
      u = t.merge(u, S, g);
    }
    return g.allowSparse === !0 ? u : t.compact(u);
  }, gn;
}
var Tn, zo;
function Xi() {
  if (zo) return Tn;
  zo = 1;
  var t = /* @__PURE__ */ Ji(), e = /* @__PURE__ */ Qi(), r = /* @__PURE__ */ Kn();
  return Tn = {
    formats: r,
    parse: e,
    stringify: t
  }, Tn;
}
var Zi = /* @__PURE__ */ Xi();
const Yn = [
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
function Ka(t) {
  return t && typeof t == "object" && Yn.some((e) => Object.prototype.hasOwnProperty.call(t, e));
}
function Rr(t, e) {
  return Zi.stringify(t, {
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
function es(t) {
  const e = t.match(/\{\w+\}/g);
  return e ? e.map((r) => r.replace(/[{}]/g, "")) : [];
}
function Jn(t) {
  if (!Array.isArray(t) || !t[0] || typeof t[0] != "object")
    return {};
  if (!Ka(t[0]))
    return t.shift();
  const e = Object.keys(t[0]), r = e.filter((n) => Yn.includes(n));
  return r.length > 0 && r.length !== e.length && wr(`Options found in arguments (${r.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`), {};
}
function Ya(t) {
  const e = {
    host: null,
    headers: {},
    settings: {}
  };
  if (t.length > 0) {
    const r = t[t.length - 1];
    if (typeof r == "string")
      e.authenticator = Un(t.pop());
    else if (Ka(r)) {
      const n = Object.assign({}, t.pop()), a = Object.keys(n).filter((s) => !Yn.includes(s));
      if (a.length && wr(`Invalid options found (${a.join(", ")}); ignoring.`), n.apiKey && (e.authenticator = Un(n.apiKey)), n.idempotencyKey && (e.headers["Idempotency-Key"] = n.idempotencyKey), n.stripeAccount && (e.headers["Stripe-Account"] = n.stripeAccount), n.stripeContext) {
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
function ts(t) {
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
function rs(t) {
  return t && typeof t == "object" ? Object.keys(t).reduce((e, r) => (e[ns(r)] = t[r], e), {}) : t;
}
function ns(t) {
  return t.split("-").map((e) => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()).join("-");
}
function Qn(t, e) {
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
function os(t) {
  return t === "OAuth" ? "oauth" : t[0].toLowerCase() + t.substring(1);
}
function wr(t) {
  return typeof process.emitWarning != "function" ? console.warn(`Stripe: ${t}`) : process.emitWarning(t, "Stripe");
}
function as(t) {
  const e = typeof t;
  return (e === "function" || e === "object") && !!t;
}
function is(t) {
  const e = {}, r = (n, a) => {
    Object.entries(n).forEach(([s, c]) => {
      const f = a ? `${a}[${s}]` : s;
      if (as(c)) {
        if (!(c instanceof Uint8Array) && !Object.prototype.hasOwnProperty.call(c, "data"))
          return r(c, f);
        e[f] = c;
      } else
        e[f] = String(c);
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
function ss() {
  return typeof process > "u" ? {} : {
    lang_version: process.version,
    platform: process.platform
  };
}
function Un(t) {
  const e = (r) => (r.headers.Authorization = "Bearer " + t, Promise.resolve());
  return e._apiKey = t, e;
}
function ls(t, e) {
  return this[t] instanceof Date ? Math.floor(this[t].getTime() / 1e3).toString() : e;
}
function us(t) {
  return JSON.stringify(t, ls);
}
function Xn(t) {
  return t && t.startsWith("/v2") ? "v2" : "v1";
}
const cs = 60;
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
      const s = a.getHeaders(), c = () => {
        const y = this._makeResponseEvent(e, a.getStatusCode(), s);
        this._stripe._emitter.emit("response", y), this._recordRequestMetrics(this._getRequestId(s), y.elapsed, r);
      }, f = a.toStream(c);
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
      const c = s.getHeaders(), f = this._getRequestId(c), y = s.getStatusCode(), _ = this._makeResponseEvent(e, y, c);
      this._stripe._emitter.emit("response", _), s.toJSON().then((l) => {
        if (l.error) {
          let h;
          throw typeof l.error == "string" && (l.error = {
            type: l.error,
            message: l.error_description
          }), l.error.headers = c, l.error.statusCode = y, l.error.requestId = f, y === 401 ? h = new Bn(l.error) : y === 403 ? h = new ka(l.error) : y === 429 ? h = new Wn(l.error) : r === "v2" ? h = Ga(l.error) : h = xr(l.error), h;
        }
        return l;
      }, (l) => {
        throw new Hn({
          message: "Invalid JSON received from the Stripe API",
          exception: l,
          requestId: c["request-id"]
        });
      }).then((l) => {
        this._recordRequestMetrics(f, _.elapsed, n);
        const h = s.getRawResponse();
        this._addHeadersDirectlyToObject(h, c), Object.defineProperty(l, "lastResponse", {
          enumerable: !1,
          writable: !1,
          value: h
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
    return s *= 0.5 * (1 + Math.random()), s = Math.max(n, s), Number.isInteger(r) && r <= cs && (s = Math.max(s, r)), s * 1e3;
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
  _makeHeaders({ contentType: e, contentLength: r, apiVersion: n, clientUserAgent: a, method: s, userSuppliedHeaders: c, userSuppliedSettings: f, stripeAccount: y, stripeContext: _, apiMode: l }) {
    const h = {
      Accept: "application/json",
      "Content-Type": e,
      "User-Agent": this._getUserAgentString(l),
      "X-Stripe-Client-User-Agent": a,
      "X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
      "Stripe-Version": n,
      "Stripe-Account": y,
      "Stripe-Context": _,
      "Idempotency-Key": this._defaultIdempotencyKey(s, f, l)
    }, T = s == "POST" || s == "PUT" || s == "PATCH";
    return (T || r) && (T || wr(`${s} method had non-zero contentLength but no payload is expected for this verb`), h["Content-Length"] = r), Object.assign(
      _n(h),
      // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
      rs(c)
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
    return new Promise((c, f) => {
      let y;
      try {
        const m = e.toUpperCase();
        if (m !== "POST" && n && Object.keys(n).length !== 0)
          throw new Error("rawRequest only supports params on POST requests. Please pass null and add your parameters to path.");
        const g = [].slice.call([n, a]), O = Jn(g), u = Object.assign({}, O), p = Ya(g), P = p.headers, b = p.authenticator;
        y = {
          requestMethod: m,
          requestPath: r,
          bodyData: u,
          queryData: {},
          authenticator: b,
          headers: P,
          host: null,
          streaming: !1,
          settings: {},
          usage: ["raw_request"]
        };
      } catch (m) {
        f(m);
        return;
      }
      function _(m, g) {
        m ? f(m) : c(g);
      }
      const { headers: l, settings: h } = y, T = y.authenticator;
      this._request(y.requestMethod, y.host, r, y.bodyData, T, { headers: l, settings: h, streaming: y.streaming }, y.usage, _);
    });
  }
  _request(e, r, n, a, s, c, f = [], y, _ = null) {
    var l;
    let h;
    s = (l = s ?? this._stripe._authenticator) !== null && l !== void 0 ? l : null;
    const T = Xn(n), m = (u, p, P, b, S) => setTimeout(u, this._getSleepTimeInMS(b, S), p, P, b + 1), g = (u, p, P) => {
      const b = c.settings && c.settings.timeout && Number.isInteger(c.settings.timeout) && c.settings.timeout >= 0 ? c.settings.timeout : this._stripe.getApiField("timeout"), S = {
        host: r || this._stripe.getApiField("host"),
        port: this._stripe.getApiField("port"),
        path: n,
        method: e,
        headers: Object.assign({}, p),
        body: h,
        protocol: this._stripe.getApiField("protocol")
      };
      s(S).then(() => {
        const A = this._stripe.getApiField("httpClient").makeRequest(S.host, S.port, S.path, S.method, S.headers, S.body, S.protocol, b), w = Date.now(), I = _n({
          api_version: u,
          account: p["Stripe-Account"],
          idempotency_key: p["Idempotency-Key"],
          method: e,
          path: n,
          request_start_time: w
        }), R = P || 0, G = this._getMaxNetworkRetries(c.settings || {});
        this._stripe._emitter.emit("request", I), A.then((C) => Yt._shouldRetry(C, R, G) ? m(
          g,
          u,
          p,
          R,
          // @ts-ignore
          C.getHeaders()["retry-after"]
        ) : c.streaming && C.getStatusCode() < 400 ? this._streamingResponseHandler(I, f, y)(C) : this._jsonResponseHandler(I, T, f, y)(C)).catch((C) => {
          if (Yt._shouldRetry(null, R, G, C))
            return m(g, u, p, R, null);
          {
            const L = C.code && C.code === be.TIMEOUT_ERROR_CODE;
            return y(new qa({
              message: L ? `Request aborted due to timeout being reached (${b}ms)` : Yt._generateConnectionErrorMessage(R),
              // @ts-ignore
              detail: C
            }));
          }
        });
      }).catch((A) => {
        throw new he({
          message: "Unable to authenticate the request",
          exception: A
        });
      });
    }, O = (u, p) => {
      if (u)
        return y(u);
      h = p, this._stripe.getClientUserAgent((P) => {
        const b = this._stripe.getApiField("version"), S = this._makeHeaders({
          contentType: T == "v2" ? "application/json" : "application/x-www-form-urlencoded",
          contentLength: h.length,
          apiVersion: b,
          clientUserAgent: P,
          method: e,
          userSuppliedHeaders: c.headers,
          userSuppliedSettings: c.settings,
          stripeAccount: T == "v2" ? null : this._stripe.getApiField("stripeAccount"),
          stripeContext: T == "v2" ? this._stripe.getApiField("stripeContext") : null,
          apiMode: T
        });
        g(b, S, 0);
      });
    };
    if (_)
      _(e, a, c.headers, O);
    else {
      let u;
      T == "v2" ? u = a ? us(a) : "" : u = Rr(a || {}, T), O(null, u);
    }
  }
}
class Ja {
  constructor(e, r, n, a) {
    this.index = 0, this.pagePromise = e, this.promiseCache = { currentPromise: null }, this.requestArgs = r, this.spec = n, this.stripeResource = a;
  }
  async iterate(e) {
    if (!(e && e.data && typeof e.data.length == "number"))
      throw Error("Unexpected: Stripe API response does not have a well-formed `data` array.");
    const r = Qa(this.requestArgs);
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
class ds extends Ja {
  getNextPage(e) {
    const r = Qa(this.requestArgs), n = Ps(e, r);
    return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
      [r ? "ending_before" : "starting_after"]: n
    });
  }
}
class hs extends Ja {
  getNextPage(e) {
    if (!e.next_page)
      throw Error("Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.");
    return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
      page: e.next_page
    });
  }
}
class fs {
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
const ps = (t, e, r, n) => {
  const a = Xn(r.fullPath || r.path);
  return a !== "v2" && r.methodType === "search" ? Sn(new hs(n, e, r, t)) : a !== "v2" && r.methodType === "list" ? Sn(new ds(n, e, r, t)) : a === "v2" && r.methodType === "list" ? Sn(new fs(n, e, r, t)) : null;
}, Sn = (t) => {
  const e = gs((...a) => t.next(...a)), r = Ts(e), n = {
    autoPagingEach: e,
    autoPagingToArray: r,
    // Async iterator functions:
    next: () => t.next(),
    return: () => ({}),
    [ms()]: () => n
  };
  return n;
};
function ms() {
  return typeof Symbol < "u" && Symbol.asyncIterator ? Symbol.asyncIterator : "@@asyncIterator";
}
function vs(t) {
  if (t.length < 2)
    return null;
  const e = t[1];
  if (typeof e != "function")
    throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof e}`);
  return e;
}
function ys(t) {
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
function Ps(t, e) {
  const r = e ? 0 : t.data.length - 1, n = t.data[r], a = n && n.id;
  if (!a)
    throw Error("Unexpected: No `id` found on the last item while auto-paging a list.");
  return a;
}
function gs(t) {
  return function() {
    const r = [].slice.call(arguments), n = ys(r), a = vs(r);
    if (r.length > 2)
      throw Error(`autoPagingEach takes up to two arguments; received ${r}`);
    const s = _s(
      t,
      // @ts-ignore we might need a null check
      n
    );
    return Qn(s, a);
  };
}
function Ts(t) {
  return function(r, n) {
    const a = r && r.limit;
    if (!a)
      throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");
    if (a > 1e4)
      throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");
    const s = new Promise((c, f) => {
      const y = [];
      t((_) => {
        if (y.push(_), y.length >= a)
          return !1;
      }).then(() => {
        c(y);
      }).catch(f);
    });
    return Qn(s, n);
  };
}
function _s(t, e) {
  return new Promise((r, n) => {
    function a(s) {
      if (s.done) {
        r();
        return;
      }
      const c = s.value;
      return new Promise((f) => {
        e(c, f);
      }).then((f) => f === !1 ? a({ done: !0, value: void 0 }) : t().then(a));
    }
    t().then(a).catch(n);
  });
}
function Qa(t) {
  const e = [].slice.call(t);
  return !!Jn(e).ending_before;
}
function Es(t) {
  if (t.path !== void 0 && t.fullPath !== void 0)
    throw new Error(`Method spec specified both a 'path' (${t.path}) and a 'fullPath' (${t.fullPath}).`);
  return function(...e) {
    const r = typeof e[e.length - 1] == "function" && e.pop();
    t.urlParams = es(t.fullPath || this.createResourcePathWithSymbols(t.path || ""));
    const n = Qn(this._makeRequest(e, t, {}), r);
    return Object.assign(n, ps(this, e, t, n)), n;
  };
}
o.extend = ts;
o.method = Es;
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
    const a = (e.method || "GET").toUpperCase(), s = e.usage || [], c = e.urlParams || [], f = e.encode || ((I) => I), y = !!e.fullPath, _ = Nn(y ? e.fullPath : e.path || ""), l = y ? e.fullPath : this.createResourcePathWithSymbols(e.path), h = [].slice.call(t), T = c.reduce((I, R) => {
      const G = h.shift();
      if (typeof G != "string")
        throw new Error(`Stripe: Argument "${R}" must be a string, but got: ${G} (on API request to \`${a} ${l}\`)`);
      return I[R] = G, I;
    }, {}), m = Jn(h), g = f(Object.assign({}, m, r)), O = Ya(h), u = O.host || e.host, p = !!e.streaming;
    if (h.filter((I) => I != null).length)
      throw new Error(`Stripe: Unknown arguments (${h}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${a} \`${l}\`)`);
    const P = y ? _(T) : this.createFullPath(_, T), b = Object.assign(O.headers, e.headers);
    e.validator && e.validator(g, { headers: b });
    const S = e.method === "GET" || e.method === "DELETE";
    return {
      requestMethod: a,
      requestPath: P,
      bodyData: S ? null : g,
      queryData: S ? g : {},
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
      let c;
      try {
        c = this._getRequestOpts(t, e, r);
      } catch (T) {
        a(T);
        return;
      }
      function f(T, m) {
        T ? a(T) : n(e.transformResponseData ? e.transformResponseData(m) : m);
      }
      const y = Object.keys(c.queryData).length === 0, _ = [
        c.requestPath,
        y ? "" : "?",
        Rr(c.queryData, Xn(c.requestPath))
      ].join(""), { headers: l, settings: h } = c;
      this._stripe._requestSender._request(c.requestMethod, c.host, _, c.bodyData, c.authenticator, {
        headers: l,
        settings: h,
        streaming: c.streaming
      }, c.usage, f, (s = this.requestDataProcessor) === null || s === void 0 ? void 0 : s.bind(this));
    });
  }
};
function Vo(t) {
  const e = {
    DEFAULT_TOLERANCE: 300,
    // @ts-ignore
    signature: null,
    constructEvent(l, h, T, m, g, O) {
      try {
        this.signature.verifyHeader(l, h, T, m || e.DEFAULT_TOLERANCE, g, O);
      } catch (p) {
        throw p instanceof Ia && (p.message += "\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`"), p;
      }
      return l instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(l)) : JSON.parse(l);
    },
    async constructEventAsync(l, h, T, m, g, O) {
      return await this.signature.verifyHeaderAsync(l, h, T, m || e.DEFAULT_TOLERANCE, g, O), l instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(l)) : JSON.parse(l);
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
      const h = _(l), T = h.signature || h.cryptoProvider.computeHMACSignature(h.payloadString, h.secret);
      return h.generateHeaderString(T);
    },
    generateTestHeaderStringAsync: async function(l) {
      const h = _(l), T = h.signature || await h.cryptoProvider.computeHMACSignatureAsync(h.payloadString, h.secret);
      return h.generateHeaderString(T);
    }
  }, r = {
    EXPECTED_SCHEME: "v1",
    verifyHeader(l, h, T, m, g, O) {
      const { decodedHeader: u, decodedPayload: p, details: P, suspectPayloadType: b } = a(l, h, this.EXPECTED_SCHEME), S = /\s/.test(T);
      g = g || y();
      const A = g.computeHMACSignature(n(p, P), T);
      return s(p, u, P, A, m, b, S, O), !0;
    },
    async verifyHeaderAsync(l, h, T, m, g, O) {
      const { decodedHeader: u, decodedPayload: p, details: P, suspectPayloadType: b } = a(l, h, this.EXPECTED_SCHEME), S = /\s/.test(T);
      g = g || y();
      const A = await g.computeHMACSignatureAsync(n(p, P), T);
      return s(p, u, P, A, m, b, S, O);
    }
  };
  function n(l, h) {
    return `${h.timestamp}.${l}`;
  }
  function a(l, h, T) {
    if (!l)
      throw new ze(h, l, {
        message: "No webhook payload was provided."
      });
    const m = typeof l != "string" && !(l instanceof Uint8Array), g = new TextDecoder("utf8"), O = l instanceof Uint8Array ? g.decode(l) : l;
    if (Array.isArray(h))
      throw new Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");
    if (h == null || h == "")
      throw new ze(h, l, {
        message: "No stripe-signature header value was provided."
      });
    const u = h instanceof Uint8Array ? g.decode(h) : h, p = c(u, T);
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
      suspectPayloadType: m
    };
  }
  function s(l, h, T, m, g, O, u, p) {
    const P = !!T.signatures.filter(t.secureCompare.bind(t, m)).length, b = `
Learn more about webhook signing and explore webhook integration examples for various frameworks at https://docs.stripe.com/webhooks/signature`, S = u ? `

Note: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value` : "";
    if (!P)
      throw O ? new ze(h, l, {
        message: `Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. 
Signature verification is impossible without access to the original signed material. 
` + b + `
` + S
      }) : new ze(h, l, {
        message: `No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? 
 If a webhook request is being forwarded by a third-party tool, ensure that the exact request body, including JSON formatting and new line style, is preserved.
` + b + `
` + S
      });
    const A = Math.floor((typeof p == "number" ? p : Date.now()) / 1e3) - T.timestamp;
    if (g > 0 && A > g)
      throw new ze(h, l, {
        message: "Timestamp outside the tolerance zone"
      });
    return !0;
  }
  function c(l, h) {
    return typeof l != "string" ? null : l.split(",").reduce((T, m) => {
      const g = m.split("=");
      return g[0] === "t" && (T.timestamp = parseInt(g[1], 10)), g[0] === h && T.signatures.push(g[1]), T;
    }, {
      timestamp: -1,
      signatures: []
    });
  }
  let f = null;
  function y() {
    return f || (f = t.createDefaultCryptoProvider()), f;
  }
  function _(l) {
    if (!l)
      throw new he({
        message: "Options are required"
      });
    const h = Math.floor(l.timestamp) || Math.floor(Date.now() / 1e3), T = l.scheme || r.EXPECTED_SCHEME, m = l.cryptoProvider || y(), g = `${h}.${l.payload}`, O = (u) => `t=${h},${T}=${u}`;
    return Object.assign(Object.assign({}, l), {
      timestamp: h,
      scheme: T,
      cryptoProvider: m,
      payloadString: g,
      generateHeaderString: O
    });
  }
  return e.signature = r, e;
}
const Ss = "2024-11-20.acacia";
function bs(t, e) {
  for (const r in e) {
    if (!Object.prototype.hasOwnProperty.call(e, r))
      continue;
    const n = r[0].toLowerCase() + r.substring(1), a = new e[r](t);
    this[n] = a;
  }
}
function ee(t, e) {
  return function(r) {
    return new bs(r, e);
  };
}
const Xe = o.method, Os = o.extend({
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
}), Ko = o.method, ws = o.extend({
  retrieve: Ko({
    method: "GET",
    fullPath: "/v1/entitlements/active_entitlements/{id}"
  }),
  list: Ko({
    method: "GET",
    fullPath: "/v1/entitlements/active_entitlements",
    methodType: "list"
  })
}), lt = o.method, xs = o.extend({
  create: lt({ method: "POST", fullPath: "/v1/billing/alerts" }),
  retrieve: lt({ method: "GET", fullPath: "/v1/billing/alerts/{id}" }),
  list: lt({
    method: "GET",
    fullPath: "/v1/billing/alerts",
    methodType: "list"
  }),
  activate: lt({
    method: "POST",
    fullPath: "/v1/billing/alerts/{id}/activate"
  }),
  archive: lt({
    method: "POST",
    fullPath: "/v1/billing/alerts/{id}/archive"
  }),
  deactivate: lt({
    method: "POST",
    fullPath: "/v1/billing/alerts/{id}/deactivate"
  })
}), Ze = o.method, As = o.extend({
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
}), Mt = o.method, Cs = o.extend({
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
}), bn = o.method, Rs = o.extend({
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
}), tr = o.method, Ms = o.extend({
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
}), $t = o.method, $s = o.extend({
  deliverCard: $t({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/deliver"
  }),
  failCard: $t({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/fail"
  }),
  returnCard: $t({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/return"
  }),
  shipCard: $t({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/ship"
  }),
  submitCard: $t({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/submit"
  })
}), rr = o.method, Is = o.extend({
  create: rr({ method: "POST", fullPath: "/v1/issuing/cards" }),
  retrieve: rr({ method: "GET", fullPath: "/v1/issuing/cards/{card}" }),
  update: rr({ method: "POST", fullPath: "/v1/issuing/cards/{card}" }),
  list: rr({
    method: "GET",
    fullPath: "/v1/issuing/cards",
    methodType: "list"
  })
}), nr = o.method, Gs = o.extend({
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
}), It = o.method, Ds = o.extend({
  create: It({
    method: "POST",
    fullPath: "/v1/terminal/configurations"
  }),
  retrieve: It({
    method: "GET",
    fullPath: "/v1/terminal/configurations/{configuration}"
  }),
  update: It({
    method: "POST",
    fullPath: "/v1/terminal/configurations/{configuration}"
  }),
  list: It({
    method: "GET",
    fullPath: "/v1/terminal/configurations",
    methodType: "list"
  }),
  del: It({
    method: "DELETE",
    fullPath: "/v1/terminal/configurations/{configuration}"
  })
}), ks = o.method, qs = o.extend({
  create: ks({
    method: "POST",
    fullPath: "/v1/test_helpers/confirmation_tokens"
  })
}), Fs = o.method, Ns = o.extend({
  create: Fs({
    method: "POST",
    fullPath: "/v1/terminal/connection_tokens"
  })
}), Us = o.method, Ls = o.extend({
  retrieve: Us({
    method: "GET",
    fullPath: "/v1/billing/credit_balance_summary"
  })
}), Yo = o.method, js = o.extend({
  retrieve: Yo({
    method: "GET",
    fullPath: "/v1/billing/credit_balance_transactions/{id}"
  }),
  list: Yo({
    method: "GET",
    fullPath: "/v1/billing/credit_balance_transactions",
    methodType: "list"
  })
}), ut = o.method, Hs = o.extend({
  create: ut({ method: "POST", fullPath: "/v1/billing/credit_grants" }),
  retrieve: ut({
    method: "GET",
    fullPath: "/v1/billing/credit_grants/{id}"
  }),
  update: ut({
    method: "POST",
    fullPath: "/v1/billing/credit_grants/{id}"
  }),
  list: ut({
    method: "GET",
    fullPath: "/v1/billing/credit_grants",
    methodType: "list"
  }),
  expire: ut({
    method: "POST",
    fullPath: "/v1/billing/credit_grants/{id}/expire"
  }),
  voidGrant: ut({
    method: "POST",
    fullPath: "/v1/billing/credit_grants/{id}/void"
  })
}), On = o.method, Bs = o.extend({
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
}), Ws = o.method, zs = o.extend({
  fundCashBalance: Ws({
    method: "POST",
    fullPath: "/v1/test_helpers/customers/{customer}/fund_cash_balance"
  })
}), wn = o.method, Vs = o.extend({
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
}), Gt = o.method, Ks = o.extend({
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
}), Jo = o.method, Ys = o.extend({
  retrieve: Jo({
    method: "GET",
    fullPath: "/v1/radar/early_fraud_warnings/{early_fraud_warning}"
  }),
  list: Jo({
    method: "GET",
    fullPath: "/v1/radar/early_fraud_warnings",
    methodType: "list"
  })
}), je = o.method, Js = o.extend({
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
}), xn = o.method, Qs = o.extend({
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
}), or = o.method, Xs = o.extend({
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
}), ct = o.method, Zs = o.extend({
  create: ct({
    method: "POST",
    fullPath: "/v1/treasury/financial_accounts"
  }),
  retrieve: ct({
    method: "GET",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}"
  }),
  update: ct({
    method: "POST",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}"
  }),
  list: ct({
    method: "GET",
    fullPath: "/v1/treasury/financial_accounts",
    methodType: "list"
  }),
  retrieveFeatures: ct({
    method: "GET",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
  }),
  updateFeatures: ct({
    method: "POST",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
  })
}), An = o.method, el = o.extend({
  fail: An({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/fail"
  }),
  returnInboundTransfer: An({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/return"
  }),
  succeed: An({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed"
  })
}), ar = o.method, tl = o.extend({
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
}), Dt = o.method, rl = o.extend({
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
}), nl = o.method, ol = o.extend({
  create: nl({
    method: "POST",
    fullPath: "/v1/billing/meter_event_adjustments"
  })
}), al = o.method, il = o.extend({
  create: al({
    method: "POST",
    fullPath: "/v2/billing/meter_event_adjustments"
  })
}), sl = o.method, ll = o.extend({
  create: sl({
    method: "POST",
    fullPath: "/v2/billing/meter_event_session"
  })
}), ul = o.method, cl = o.extend({
  create: ul({
    method: "POST",
    fullPath: "/v2/billing/meter_event_stream",
    host: "meter-events.stripe.com"
  })
}), dl = o.method, hl = o.extend({
  create: dl({ method: "POST", fullPath: "/v1/billing/meter_events" })
}), fl = o.method, pl = o.extend({
  create: fl({ method: "POST", fullPath: "/v2/billing/meter_events" })
}), et = o.method, ml = o.extend({
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
}), kt = o.method, vl = o.extend({
  create: kt({ method: "POST", fullPath: "/v1/climate/orders" }),
  retrieve: kt({
    method: "GET",
    fullPath: "/v1/climate/orders/{order}"
  }),
  update: kt({
    method: "POST",
    fullPath: "/v1/climate/orders/{order}"
  }),
  list: kt({
    method: "GET",
    fullPath: "/v1/climate/orders",
    methodType: "list"
  }),
  cancel: kt({
    method: "POST",
    fullPath: "/v1/climate/orders/{order}/cancel"
  })
}), ir = o.method, yl = o.extend({
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
}), sr = o.method, Pl = o.extend({
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
}), lr = o.method, gl = o.extend({
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
}), ur = o.method, Tl = o.extend({
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
}), Cn = o.method, _l = o.extend({
  activate: Cn({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate"
  }),
  deactivate: Cn({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate"
  }),
  reject: Cn({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject"
  })
}), cr = o.method, El = o.extend({
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
}), Qo = o.method, Sl = o.extend({
  retrieve: Qo({
    method: "GET",
    fullPath: "/v1/issuing/physical_bundles/{physical_bundle}"
  }),
  list: Qo({
    method: "GET",
    fullPath: "/v1/issuing/physical_bundles",
    methodType: "list"
  })
}), Xo = o.method, bl = o.extend({
  retrieve: Xo({
    method: "GET",
    fullPath: "/v1/climate/products/{product}"
  }),
  list: Xo({
    method: "GET",
    fullPath: "/v1/climate/products",
    methodType: "list"
  })
}), Ol = o.method, wl = o.extend({
  presentPaymentMethod: Ol({
    method: "POST",
    fullPath: "/v1/test_helpers/terminal/readers/{reader}/present_payment_method"
  })
}), Ge = o.method, xl = o.extend({
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
}), Al = o.method, Cl = o.extend({
  create: Al({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/received_credits"
  })
}), Zo = o.method, Rl = o.extend({
  retrieve: Zo({
    method: "GET",
    fullPath: "/v1/treasury/received_credits/{id}"
  }),
  list: Zo({
    method: "GET",
    fullPath: "/v1/treasury/received_credits",
    methodType: "list"
  })
}), Ml = o.method, $l = o.extend({
  create: Ml({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/received_debits"
  })
}), ea = o.method, Il = o.extend({
  retrieve: ea({
    method: "GET",
    fullPath: "/v1/treasury/received_debits/{id}"
  }),
  list: ea({
    method: "GET",
    fullPath: "/v1/treasury/received_debits",
    methodType: "list"
  })
}), Gl = o.method, Dl = o.extend({
  expire: Gl({
    method: "POST",
    fullPath: "/v1/test_helpers/refunds/{refund}/expire"
  })
}), dr = o.method, kl = o.extend({
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
}), Rn = o.method, ql = o.extend({
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
}), ta = o.method, Fl = o.extend({
  retrieve: ta({
    method: "GET",
    fullPath: "/v1/reporting/report_types/{report_type}"
  }),
  list: ta({
    method: "GET",
    fullPath: "/v1/reporting/report_types",
    methodType: "list"
  })
}), Mn = o.method, Nl = o.extend({
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
}), ra = o.method, Ul = o.extend({
  retrieve: ra({
    method: "GET",
    fullPath: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}"
  }),
  list: ra({
    method: "GET",
    fullPath: "/v1/sigma/scheduled_query_runs",
    methodType: "list"
  })
}), hr = o.method, Ll = o.extend({
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
}), jl = o.method, Hl = o.extend({
  create: jl({
    method: "POST",
    fullPath: "/v1/billing_portal/sessions"
  })
}), dt = o.method, Bl = o.extend({
  create: dt({ method: "POST", fullPath: "/v1/checkout/sessions" }),
  retrieve: dt({
    method: "GET",
    fullPath: "/v1/checkout/sessions/{session}"
  }),
  update: dt({
    method: "POST",
    fullPath: "/v1/checkout/sessions/{session}"
  }),
  list: dt({
    method: "GET",
    fullPath: "/v1/checkout/sessions",
    methodType: "list"
  }),
  expire: dt({
    method: "POST",
    fullPath: "/v1/checkout/sessions/{session}/expire"
  }),
  listLineItems: dt({
    method: "GET",
    fullPath: "/v1/checkout/sessions/{session}/line_items",
    methodType: "list"
  })
}), na = o.method, Wl = o.extend({
  create: na({
    method: "POST",
    fullPath: "/v1/financial_connections/sessions"
  }),
  retrieve: na({
    method: "GET",
    fullPath: "/v1/financial_connections/sessions/{session}"
  })
}), oa = o.method, zl = o.extend({
  retrieve: oa({ method: "GET", fullPath: "/v1/tax/settings" }),
  update: oa({ method: "POST", fullPath: "/v1/tax/settings" })
}), aa = o.method, Vl = o.extend({
  retrieve: aa({
    method: "GET",
    fullPath: "/v1/climate/suppliers/{supplier}"
  }),
  list: aa({
    method: "GET",
    fullPath: "/v1/climate/suppliers",
    methodType: "list"
  })
}), qt = o.method, Kl = o.extend({
  create: qt({
    method: "POST",
    fullPath: "/v1/test_helpers/test_clocks"
  }),
  retrieve: qt({
    method: "GET",
    fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
  }),
  list: qt({
    method: "GET",
    fullPath: "/v1/test_helpers/test_clocks",
    methodType: "list"
  }),
  del: qt({
    method: "DELETE",
    fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
  }),
  advance: qt({
    method: "POST",
    fullPath: "/v1/test_helpers/test_clocks/{test_clock}/advance"
  })
}), $n = o.method, Yl = o.extend({
  retrieve: $n({
    method: "GET",
    fullPath: "/v1/issuing/tokens/{token}"
  }),
  update: $n({
    method: "POST",
    fullPath: "/v1/issuing/tokens/{token}"
  }),
  list: $n({
    method: "GET",
    fullPath: "/v1/issuing/tokens",
    methodType: "list"
  })
}), ia = o.method, Jl = o.extend({
  retrieve: ia({
    method: "GET",
    fullPath: "/v1/treasury/transaction_entries/{id}"
  }),
  list: ia({
    method: "GET",
    fullPath: "/v1/treasury/transaction_entries",
    methodType: "list"
  })
}), In = o.method, Ql = o.extend({
  createForceCapture: In({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/transactions/create_force_capture"
  }),
  createUnlinkedRefund: In({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/transactions/create_unlinked_refund"
  }),
  refund: In({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/transactions/{transaction}/refund"
  })
}), sa = o.method, Xl = o.extend({
  retrieve: sa({
    method: "GET",
    fullPath: "/v1/financial_connections/transactions/{transaction}"
  }),
  list: sa({
    method: "GET",
    fullPath: "/v1/financial_connections/transactions",
    methodType: "list"
  })
}), Gn = o.method, Zl = o.extend({
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
}), fr = o.method, eu = o.extend({
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
}), la = o.method, tu = o.extend({
  retrieve: la({
    method: "GET",
    fullPath: "/v1/treasury/transactions/{id}"
  }),
  list: la({
    method: "GET",
    fullPath: "/v1/treasury/transactions",
    methodType: "list"
  })
}), pr = o.method, ru = o.extend({
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
}), Ft = o.method, nu = o.extend({
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
}), ua = o.method, ou = o.extend({
  retrieve: ua({
    method: "GET",
    fullPath: "/v1/identity/verification_reports/{report}"
  }),
  list: ua({
    method: "GET",
    fullPath: "/v1/identity/verification_reports",
    methodType: "list"
  })
}), ht = o.method, au = o.extend({
  create: ht({
    method: "POST",
    fullPath: "/v1/identity/verification_sessions"
  }),
  retrieve: ht({
    method: "GET",
    fullPath: "/v1/identity/verification_sessions/{session}"
  }),
  update: ht({
    method: "POST",
    fullPath: "/v1/identity/verification_sessions/{session}"
  }),
  list: ht({
    method: "GET",
    fullPath: "/v1/identity/verification_sessions",
    methodType: "list"
  }),
  cancel: ht({
    method: "POST",
    fullPath: "/v1/identity/verification_sessions/{session}/cancel"
  }),
  redact: ht({
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
}), iu = o.method, su = o.extend({
  create: iu({ method: "POST", fullPath: "/v1/account_links" })
}), lu = o.method, uu = o.extend({
  create: lu({ method: "POST", fullPath: "/v1/account_sessions" })
}), mr = o.method, cu = o.extend({
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
}), ft = o.method, du = o.extend({
  retrieve: ft({
    method: "GET",
    fullPath: "/v1/application_fees/{id}"
  }),
  list: ft({
    method: "GET",
    fullPath: "/v1/application_fees",
    methodType: "list"
  }),
  createRefund: ft({
    method: "POST",
    fullPath: "/v1/application_fees/{id}/refunds"
  }),
  listRefunds: ft({
    method: "GET",
    fullPath: "/v1/application_fees/{id}/refunds",
    methodType: "list"
  }),
  retrieveRefund: ft({
    method: "GET",
    fullPath: "/v1/application_fees/{fee}/refunds/{id}"
  }),
  updateRefund: ft({
    method: "POST",
    fullPath: "/v1/application_fees/{fee}/refunds/{id}"
  })
}), hu = o.method, fu = o.extend({
  retrieve: hu({ method: "GET", fullPath: "/v1/balance" })
}), da = o.method, pu = o.extend({
  retrieve: da({
    method: "GET",
    fullPath: "/v1/balance_transactions/{id}"
  }),
  list: da({
    method: "GET",
    fullPath: "/v1/balance_transactions",
    methodType: "list"
  })
}), pt = o.method, mu = o.extend({
  create: pt({ method: "POST", fullPath: "/v1/charges" }),
  retrieve: pt({ method: "GET", fullPath: "/v1/charges/{charge}" }),
  update: pt({ method: "POST", fullPath: "/v1/charges/{charge}" }),
  list: pt({
    method: "GET",
    fullPath: "/v1/charges",
    methodType: "list"
  }),
  capture: pt({
    method: "POST",
    fullPath: "/v1/charges/{charge}/capture"
  }),
  search: pt({
    method: "GET",
    fullPath: "/v1/charges/search",
    methodType: "search"
  })
}), vu = o.method, yu = o.extend({
  retrieve: vu({
    method: "GET",
    fullPath: "/v1/confirmation_tokens/{confirmation_token}"
  })
}), ha = o.method, Pu = o.extend({
  retrieve: ha({
    method: "GET",
    fullPath: "/v1/country_specs/{country}"
  }),
  list: ha({
    method: "GET",
    fullPath: "/v1/country_specs",
    methodType: "list"
  })
}), Nt = o.method, gu = o.extend({
  create: Nt({ method: "POST", fullPath: "/v1/coupons" }),
  retrieve: Nt({ method: "GET", fullPath: "/v1/coupons/{coupon}" }),
  update: Nt({ method: "POST", fullPath: "/v1/coupons/{coupon}" }),
  list: Nt({
    method: "GET",
    fullPath: "/v1/coupons",
    methodType: "list"
  }),
  del: Nt({ method: "DELETE", fullPath: "/v1/coupons/{coupon}" })
}), He = o.method, Tu = o.extend({
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
}), _u = o.method, Eu = o.extend({
  create: _u({ method: "POST", fullPath: "/v1/customer_sessions" })
}), J = o.method, Su = o.extend({
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
}), vr = o.method, bu = o.extend({
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
}), fa = o.method, Ou = o.extend({
  create: fa({
    method: "POST",
    fullPath: "/v1/ephemeral_keys",
    validator: (t, e) => {
      if (!e.headers || !e.headers["Stripe-Version"])
        throw new Error("Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node");
    }
  }),
  del: fa({ method: "DELETE", fullPath: "/v1/ephemeral_keys/{key}" })
}), pa = o.method, wu = o.extend({
  retrieve: pa({ method: "GET", fullPath: "/v1/events/{id}" }),
  list: pa({
    method: "GET",
    fullPath: "/v1/events",
    methodType: "list"
  })
}), ma = o.method, xu = o.extend({
  retrieve: ma({
    method: "GET",
    fullPath: "/v1/exchange_rates/{rate_id}"
  }),
  list: ma({
    method: "GET",
    fullPath: "/v1/exchange_rates",
    methodType: "list"
  })
}), yr = o.method, Au = o.extend({
  create: yr({ method: "POST", fullPath: "/v1/file_links" }),
  retrieve: yr({ method: "GET", fullPath: "/v1/file_links/{link}" }),
  update: yr({ method: "POST", fullPath: "/v1/file_links/{link}" }),
  list: yr({
    method: "GET",
    fullPath: "/v1/file_links",
    methodType: "list"
  })
}), Cu = (t, e, r) => {
  const n = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
  r["Content-Type"] = `multipart/form-data; boundary=${n}`;
  const a = new TextEncoder();
  let s = new Uint8Array(0);
  const c = a.encode(`\r
`);
  function f(l) {
    const h = s, T = l instanceof Uint8Array ? l : new Uint8Array(a.encode(l));
    s = new Uint8Array(h.length + T.length + 2), s.set(h), s.set(T, h.length), s.set(c, s.length - 2);
  }
  function y(l) {
    return `"${l.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
  }
  const _ = is(e);
  for (const l in _) {
    if (!Object.prototype.hasOwnProperty.call(_, l))
      continue;
    const h = _[l];
    if (f(`--${n}`), Object.prototype.hasOwnProperty.call(h, "data")) {
      const T = h;
      f(`Content-Disposition: form-data; name=${y(l)}; filename=${y(T.name || "blob")}`), f(`Content-Type: ${T.type || "application/octet-stream"}`), f(""), f(T.data);
    } else
      f(`Content-Disposition: form-data; name=${y(l)}`), f(""), f(h);
  }
  return f(`--${n}--`), s;
};
function Ru(t, e, r, n) {
  if (e = e || {}, t !== "POST")
    return n(null, Rr(e));
  this._stripe._platformFunctions.tryBufferData(e).then((a) => {
    const s = Cu(t, a, r);
    return n(null, s);
  }).catch((a) => n(a, null));
}
const Dn = o.method, Mu = o.extend({
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
  requestDataProcessor: Ru
}), Ut = o.method, $u = o.extend({
  create: Ut({ method: "POST", fullPath: "/v1/invoiceitems" }),
  retrieve: Ut({
    method: "GET",
    fullPath: "/v1/invoiceitems/{invoiceitem}"
  }),
  update: Ut({
    method: "POST",
    fullPath: "/v1/invoiceitems/{invoiceitem}"
  }),
  list: Ut({
    method: "GET",
    fullPath: "/v1/invoiceitems",
    methodType: "list"
  }),
  del: Ut({
    method: "DELETE",
    fullPath: "/v1/invoiceitems/{invoiceitem}"
  })
}), Pr = o.method, Iu = o.extend({
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
}), se = o.method, Gu = o.extend({
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
}), Du = o.method, ku = o.extend({
  retrieve: Du({ method: "GET", fullPath: "/v1/mandates/{mandate}" })
}), va = o.method, kn = "connect.stripe.com", qu = o.extend({
  basePath: "/",
  authorizeUrl(t, e) {
    t = t || {}, e = e || {};
    let r = "oauth/authorize";
    return e.express && (r = `express/${r}`), t.response_type || (t.response_type = "code"), t.client_id || (t.client_id = this._stripe.getClientId()), t.scope || (t.scope = "read_write"), `https://${kn}/${r}?${Rr(t)}`;
  },
  token: va({
    method: "POST",
    path: "oauth/token",
    host: kn
  }),
  deauthorize(t, ...e) {
    return t.client_id || (t.client_id = this._stripe.getClientId()), va({
      method: "POST",
      path: "oauth/deauthorize",
      host: kn
    }).apply(this, [t, ...e]);
  }
}), Re = o.method, Fu = o.extend({
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
}), Lt = o.method, Nu = o.extend({
  create: Lt({ method: "POST", fullPath: "/v1/payment_links" }),
  retrieve: Lt({
    method: "GET",
    fullPath: "/v1/payment_links/{payment_link}"
  }),
  update: Lt({
    method: "POST",
    fullPath: "/v1/payment_links/{payment_link}"
  }),
  list: Lt({
    method: "GET",
    fullPath: "/v1/payment_links",
    methodType: "list"
  }),
  listLineItems: Lt({
    method: "GET",
    fullPath: "/v1/payment_links/{payment_link}/line_items",
    methodType: "list"
  })
}), gr = o.method, Uu = o.extend({
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
}), jt = o.method, Lu = o.extend({
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
}), mt = o.method, ju = o.extend({
  create: mt({ method: "POST", fullPath: "/v1/payment_methods" }),
  retrieve: mt({
    method: "GET",
    fullPath: "/v1/payment_methods/{payment_method}"
  }),
  update: mt({
    method: "POST",
    fullPath: "/v1/payment_methods/{payment_method}"
  }),
  list: mt({
    method: "GET",
    fullPath: "/v1/payment_methods",
    methodType: "list"
  }),
  attach: mt({
    method: "POST",
    fullPath: "/v1/payment_methods/{payment_method}/attach"
  }),
  detach: mt({
    method: "POST",
    fullPath: "/v1/payment_methods/{payment_method}/detach"
  })
}), vt = o.method, Hu = o.extend({
  create: vt({ method: "POST", fullPath: "/v1/payouts" }),
  retrieve: vt({ method: "GET", fullPath: "/v1/payouts/{payout}" }),
  update: vt({ method: "POST", fullPath: "/v1/payouts/{payout}" }),
  list: vt({
    method: "GET",
    fullPath: "/v1/payouts",
    methodType: "list"
  }),
  cancel: vt({
    method: "POST",
    fullPath: "/v1/payouts/{payout}/cancel"
  }),
  reverse: vt({
    method: "POST",
    fullPath: "/v1/payouts/{payout}/reverse"
  })
}), Ht = o.method, Bu = o.extend({
  create: Ht({ method: "POST", fullPath: "/v1/plans" }),
  retrieve: Ht({ method: "GET", fullPath: "/v1/plans/{plan}" }),
  update: Ht({ method: "POST", fullPath: "/v1/plans/{plan}" }),
  list: Ht({
    method: "GET",
    fullPath: "/v1/plans",
    methodType: "list"
  }),
  del: Ht({ method: "DELETE", fullPath: "/v1/plans/{plan}" })
}), Bt = o.method, Wu = o.extend({
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
}), De = o.method, zu = o.extend({
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
}), Tr = o.method, Vu = o.extend({
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
}), ke = o.method, Ku = o.extend({
  create: ke({ method: "POST", fullPath: "/v1/quotes" }),
  retrieve: ke({ method: "GET", fullPath: "/v1/quotes/{quote}" }),
  update: ke({ method: "POST", fullPath: "/v1/quotes/{quote}" }),
  list: ke({
    method: "GET",
    fullPath: "/v1/quotes",
    methodType: "list"
  }),
  accept: ke({ method: "POST", fullPath: "/v1/quotes/{quote}/accept" }),
  cancel: ke({ method: "POST", fullPath: "/v1/quotes/{quote}/cancel" }),
  finalizeQuote: ke({
    method: "POST",
    fullPath: "/v1/quotes/{quote}/finalize"
  }),
  listComputedUpfrontLineItems: ke({
    method: "GET",
    fullPath: "/v1/quotes/{quote}/computed_upfront_line_items",
    methodType: "list"
  }),
  listLineItems: ke({
    method: "GET",
    fullPath: "/v1/quotes/{quote}/line_items",
    methodType: "list"
  }),
  pdf: ke({
    method: "GET",
    fullPath: "/v1/quotes/{quote}/pdf",
    host: "files.stripe.com",
    streaming: !0
  })
}), Wt = o.method, Yu = o.extend({
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
}), qn = o.method, Ju = o.extend({
  retrieve: qn({ method: "GET", fullPath: "/v1/reviews/{review}" }),
  list: qn({
    method: "GET",
    fullPath: "/v1/reviews",
    methodType: "list"
  }),
  approve: qn({
    method: "POST",
    fullPath: "/v1/reviews/{review}/approve"
  })
}), Qu = o.method, Xu = o.extend({
  list: Qu({
    method: "GET",
    fullPath: "/v1/setup_attempts",
    methodType: "list"
  })
}), tt = o.method, Zu = o.extend({
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
}), _r = o.method, ec = o.extend({
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
}), zt = o.method, tc = o.extend({
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
}), rt = o.method, rc = o.extend({
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
}), yt = o.method, nc = o.extend({
  create: yt({
    method: "POST",
    fullPath: "/v1/subscription_schedules"
  }),
  retrieve: yt({
    method: "GET",
    fullPath: "/v1/subscription_schedules/{schedule}"
  }),
  update: yt({
    method: "POST",
    fullPath: "/v1/subscription_schedules/{schedule}"
  }),
  list: yt({
    method: "GET",
    fullPath: "/v1/subscription_schedules",
    methodType: "list"
  }),
  cancel: yt({
    method: "POST",
    fullPath: "/v1/subscription_schedules/{schedule}/cancel"
  }),
  release: yt({
    method: "POST",
    fullPath: "/v1/subscription_schedules/{schedule}/release"
  })
}), Be = o.method, oc = o.extend({
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
}), ya = o.method, ac = o.extend({
  retrieve: ya({ method: "GET", fullPath: "/v1/tax_codes/{id}" }),
  list: ya({
    method: "GET",
    fullPath: "/v1/tax_codes",
    methodType: "list"
  })
}), Er = o.method, ic = o.extend({
  create: Er({ method: "POST", fullPath: "/v1/tax_ids" }),
  retrieve: Er({ method: "GET", fullPath: "/v1/tax_ids/{id}" }),
  list: Er({
    method: "GET",
    fullPath: "/v1/tax_ids",
    methodType: "list"
  }),
  del: Er({ method: "DELETE", fullPath: "/v1/tax_ids/{id}" })
}), Sr = o.method, sc = o.extend({
  create: Sr({ method: "POST", fullPath: "/v1/tax_rates" }),
  retrieve: Sr({ method: "GET", fullPath: "/v1/tax_rates/{tax_rate}" }),
  update: Sr({ method: "POST", fullPath: "/v1/tax_rates/{tax_rate}" }),
  list: Sr({
    method: "GET",
    fullPath: "/v1/tax_rates",
    methodType: "list"
  })
}), Pa = o.method, lc = o.extend({
  create: Pa({ method: "POST", fullPath: "/v1/tokens" }),
  retrieve: Pa({ method: "GET", fullPath: "/v1/tokens/{token}" })
}), Vt = o.method, uc = o.extend({
  create: Vt({ method: "POST", fullPath: "/v1/topups" }),
  retrieve: Vt({ method: "GET", fullPath: "/v1/topups/{topup}" }),
  update: Vt({ method: "POST", fullPath: "/v1/topups/{topup}" }),
  list: Vt({
    method: "GET",
    fullPath: "/v1/topups",
    methodType: "list"
  }),
  cancel: Vt({ method: "POST", fullPath: "/v1/topups/{topup}/cancel" })
}), We = o.method, cc = o.extend({
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
}), Kt = o.method, dc = o.extend({
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
}), hc = ee("apps", { Secrets: Ll }), fc = ee("billing", {
  Alerts: xs,
  CreditBalanceSummary: Ls,
  CreditBalanceTransactions: js,
  CreditGrants: Hs,
  MeterEventAdjustments: ol,
  MeterEvents: hl,
  Meters: ml
}), pc = ee("billingPortal", {
  Configurations: Gs,
  Sessions: Hl
}), mc = ee("checkout", {
  Sessions: Bl
}), vc = ee("climate", {
  Orders: vl,
  Products: bl,
  Suppliers: Vl
}), yc = ee("entitlements", {
  ActiveEntitlements: ws,
  Features: Xs
}), Pc = ee("financialConnections", {
  Accounts: Os,
  Sessions: Wl,
  Transactions: Xl
}), gc = ee("forwarding", {
  Requests: Nl
}), Tc = ee("identity", {
  VerificationReports: ou,
  VerificationSessions: au
}), _c = ee("issuing", {
  Authorizations: Cs,
  Cardholders: Ms,
  Cards: Is,
  Disputes: Ks,
  PersonalizationDesigns: El,
  PhysicalBundles: Sl,
  Tokens: Yl,
  Transactions: Zl
}), Ec = ee("radar", {
  EarlyFraudWarnings: Ys,
  ValueListItems: ru,
  ValueLists: nu
}), Sc = ee("reporting", {
  ReportRuns: ql,
  ReportTypes: Fl
}), bc = ee("sigma", {
  ScheduledQueryRuns: Ul
}), Oc = ee("tax", {
  Calculations: Rs,
  Registrations: kl,
  Settings: zl,
  Transactions: eu
}), wc = ee("terminal", {
  Configurations: Ds,
  ConnectionTokens: Ns,
  Locations: rl,
  Readers: xl
}), xc = ee("testHelpers", {
  ConfirmationTokens: qs,
  Customers: zs,
  Refunds: Dl,
  TestClocks: Kl,
  Issuing: ee("issuing", {
    Authorizations: As,
    Cards: $s,
    PersonalizationDesigns: _l,
    Transactions: Ql
  }),
  Terminal: ee("terminal", {
    Readers: wl
  }),
  Treasury: ee("treasury", {
    InboundTransfers: el,
    OutboundPayments: yl,
    OutboundTransfers: gl,
    ReceivedCredits: Cl,
    ReceivedDebits: $l
  })
}), Ac = ee("treasury", {
  CreditReversals: Bs,
  DebitReversals: Vs,
  FinancialAccounts: Zs,
  InboundTransfers: tl,
  OutboundPayments: Pl,
  OutboundTransfers: Tl,
  ReceivedCredits: Rl,
  ReceivedDebits: Il,
  TransactionEntries: Jl,
  Transactions: tu
}), Cc = ee("v2", {
  Billing: ee("billing", {
    MeterEventAdjustments: il,
    MeterEventSession: ll,
    MeterEventStream: cl,
    MeterEvents: pl
  }),
  Core: ee("core", {
    EventDestinations: Js,
    Events: Qs
  })
}), br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Account: ca,
  AccountLinks: su,
  AccountSessions: uu,
  Accounts: ca,
  ApplePayDomains: cu,
  ApplicationFees: du,
  Apps: hc,
  Balance: fu,
  BalanceTransactions: pu,
  Billing: fc,
  BillingPortal: pc,
  Charges: mu,
  Checkout: mc,
  Climate: vc,
  ConfirmationTokens: yu,
  CountrySpecs: Pu,
  Coupons: gu,
  CreditNotes: Tu,
  CustomerSessions: Eu,
  Customers: Su,
  Disputes: bu,
  Entitlements: yc,
  EphemeralKeys: Ou,
  Events: wu,
  ExchangeRates: xu,
  FileLinks: Au,
  Files: Mu,
  FinancialConnections: Pc,
  Forwarding: gc,
  Identity: Tc,
  InvoiceItems: $u,
  InvoiceRenderingTemplates: Iu,
  Invoices: Gu,
  Issuing: _c,
  Mandates: ku,
  OAuth: qu,
  PaymentIntents: Fu,
  PaymentLinks: Nu,
  PaymentMethodConfigurations: Uu,
  PaymentMethodDomains: Lu,
  PaymentMethods: ju,
  Payouts: Hu,
  Plans: Bu,
  Prices: Wu,
  Products: zu,
  PromotionCodes: Vu,
  Quotes: Ku,
  Radar: Ec,
  Refunds: Yu,
  Reporting: Sc,
  Reviews: Ju,
  SetupAttempts: Xu,
  SetupIntents: Zu,
  ShippingRates: ec,
  Sigma: bc,
  Sources: tc,
  SubscriptionItems: rc,
  SubscriptionSchedules: nc,
  Subscriptions: oc,
  Tax: Oc,
  TaxCodes: ac,
  TaxIds: ic,
  TaxRates: sc,
  Terminal: wc,
  TestHelpers: xc,
  Tokens: lc,
  Topups: uc,
  Transfers: cc,
  Treasury: Ac,
  V2: Cc,
  WebhookEndpoints: dc
}, Symbol.toStringTag, { value: "Module" })), ga = "api.stripe.com", Ta = "443", _a = "/v1/", Ea = Ss, Sa = 8e4, ba = 5, Oa = 0.5, Rc = ["name", "version", "url", "partner_id"], wa = [
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
], Mc = (t) => new Yt(t, o.MAX_BUFFERED_REQUEST_METRICS);
function $c(t, e = Mc) {
  n.PACKAGE_VERSION = "17.4.0", n.USER_AGENT = Object.assign({ bindings_version: n.PACKAGE_VERSION, lang: "node", publisher: "stripe", uname: null, typescript: !1 }, ss()), n.StripeResource = o, n.resources = br, n.HttpClient = be, n.HttpClientResponse = Ma, n.CryptoProvider = $a;
  function r(a = t) {
    return Vo(a);
  }
  n.webhooks = Object.assign(r, Vo(t));
  function n(a, s = {}) {
    if (!(this instanceof n))
      return new n(a, s);
    const c = this._getPropsFromConfig(s);
    this._platformFunctions = t, Object.defineProperty(this, "_emitter", {
      value: this._platformFunctions.createEmitter(),
      enumerable: !1,
      configurable: !1,
      writable: !1
    }), this.VERSION = n.PACKAGE_VERSION, this.on = this._emitter.on.bind(this._emitter), this.once = this._emitter.once.bind(this._emitter), this.off = this._emitter.removeListener.bind(this._emitter);
    const f = c.httpAgent || null;
    this._api = {
      host: c.host || ga,
      port: c.port || Ta,
      protocol: c.protocol || "https",
      basePath: _a,
      version: c.apiVersion || Ea,
      timeout: En("timeout", c.timeout, Sa),
      maxNetworkRetries: En("maxNetworkRetries", c.maxNetworkRetries, 2),
      agent: f,
      httpClient: c.httpClient || (f ? this._platformFunctions.createNodeHttpClient(f) : this._platformFunctions.createDefaultHttpClient()),
      dev: !1,
      stripeAccount: c.stripeAccount || null,
      stripeContext: c.stripeContext || null
    };
    const y = c.typescript || !1;
    y !== n.USER_AGENT.typescript && (n.USER_AGENT.typescript = y), c.appInfo && this._setAppInfo(c.appInfo), this._prepResources(), this._setAuthenticator(a, c.authenticator), this.errors = io, this.webhooks = r(), this._prevRequestMetrics = [], this._enableTelemetry = c.telemetry !== !1, this._requestSender = e(this), this.StripeResource = n.StripeResource;
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
    rawRequest(a, s, c, f) {
      return this._requestSender._rawRequest(a, s, c, f);
    },
    /**
     * @private
     */
    _setAuthenticator(a, s) {
      if (a && s)
        throw new Error("Can't specify both apiKey and authenticator");
      if (!a && !s)
        throw new Error("Neither apiKey nor config.authenticator provided");
      this._authenticator = a ? Un(a) : s;
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
      a = a || {}, this._appInfo = Rc.reduce(
        (s, c) => (typeof a[c] == "string" && (s = s || {}, s[c] = a[c]), s),
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
    _setApiNumberField(a, s, c) {
      const f = En(a, s, c);
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
      this._platformFunctions.getUname().then((c) => {
        var f;
        const y = {};
        for (const l in a)
          Object.prototype.hasOwnProperty.call(a, l) && (y[l] = encodeURIComponent((f = a[l]) !== null && f !== void 0 ? f : "null"));
        y.uname = encodeURIComponent(c || "UNKNOWN");
        const _ = this.getApiField("httpClient");
        _ && (y.httplib = encodeURIComponent(_.getClientName())), this._appInfo && (y.application = this._appInfo), s(JSON.stringify(y));
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
        Object.prototype.hasOwnProperty.call(br, a) && (this[os(a)] = new br[a](this));
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
      if (Object.keys(a).filter((y) => !wa.includes(y)).length > 0)
        throw new Error(`Config object may only contain the following: ${wa.join(", ")}`);
      return a;
    },
    parseThinEvent(a, s, c, f, y, _) {
      return this.webhooks.constructEvent(a, s, c, f, y, _);
    }
  }, n;
}
const Ic = $c(new Ei());
async function Gc(t, e) {
  return (await new Ic(e.secretKey).paymentIntents.create({
    customer: "cus_RQATBsWqSFeYZp",
    amount: t,
    currency: "USD",
    automatic_payment_methods: { enabled: !0 }
  })).client_secret;
}
async function Xa(t, { amount: e }, r) {
  if (t === "nuvei")
    return yi(e.toString(), r);
  if (t === "stripe")
    return Gc(e, r);
}
async function Dc(t) {
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
function kc(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Za(t) {
  const { text: e, onSuccess: r, onError: n, onComplete: a, submitPayment: s, ...c } = t;
  return /* @__PURE__ */ ie.jsx("button", { onClick: async () => (c.onSubmit && await c.onSubmit(), s({
    onSuccess: r || (() => {
    }),
    onError: n || (() => {
    }),
    onComplete: a || (() => {
    })
  })), ...c, children: e });
}
function ei(t) {
  const { onChange: e, ...r } = t;
  return /* @__PURE__ */ ie.jsx("input", { onChange: e, ...r });
}
const qc = "https://cdn.safecharge.com/safecharge_resources/v1/websdk/safecharge.js", ti = Aa(void 0);
async function Fc(t, e) {
  return new Promise(function(r, n) {
    t.createPayment(
      e,
      (a) => {
        if (a.result === "APPROVED")
          r(a);
        else {
          const s = a.errorDescription ? String(a.errorDescription).toLowerCase() : "", c = a.transactionStatus ? String(a.transactionStatus).toLowerCase() : "failed";
          n(new Error(`Transaction ${c}.${c.includes(s) ? "" : ` Reason: ${kc(s)}.`}`));
        }
      }
    );
  });
}
function Nc({ children: t, amount: e, config: r }) {
  const [n, a] = qe({
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
    cardHolderName: ""
  }), [s, c] = qe(), [f, y] = qe(), [_, l] = qe("");
  if (!r)
    throw new Error("config missing");
  nt(() => {
    async function m() {
      const g = await Xa("nuvei", { amount: e }, r);
      l(g);
    }
    m();
  }, []), nt(() => {
    Dc(qc).then(() => {
      window.SafeCharge !== void 0 && c(
        window.SafeCharge({
          env: r.env,
          merchantId: r.merchantId,
          merchantSiteId: r.merchantSiteId
        })
      );
    });
  }, []), nt(() => {
    if (s && !f) {
      const m = s.fields({
        // fonts: [{ cssUrl: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap' }],
        // locale: 'en',
        // fontSize: '16px',
      });
      y(m);
    }
  }, [s, f]);
  function h(m, g) {
    a((O) => ({ ...O, [m]: g }));
  }
  async function T(m) {
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
      console.error(g), m.onError(g), m.onComplete();
      return;
    }
    try {
      const g = await Fc(s, {
        cardHolderName: n.cardHolderName,
        sessionToken: _,
        paymentOption: n.cardNumber
      });
      m.onSuccess(g);
    } catch (g) {
      console.error(g), m.onError(g);
    }
    m.onComplete();
  }
  return !s || !f || !_ ? null : /* @__PURE__ */ ie.jsx(ti.Provider, { value: { submitPayment: T, form: n, updateField: h, safeCharge: s, safeChargeFields: f }, children: t });
}
function Zn() {
  return Ca(ti);
}
function Uc(t) {
  switch (t) {
    case "cardNumber":
      return "ccNumber";
    case "cardExpiry":
      return "ccExpiration";
    case "cardCvc":
      return "ccCvc";
  }
}
const eo = ii(({ fieldType: t }) => {
  const { updateField: e, safeChargeFields: r } = Zn(), n = `accru-payment-form-${t}-container`;
  return nt(() => {
    const a = Uc(t);
    if (!r.instances.map((s) => s.type).includes(a)) {
      const s = r.create(a, {});
      s.attach(`#${n}`), e(t, s);
    }
  }, []), /* @__PURE__ */ ie.jsx("div", { id: n });
});
function Lc() {
  return /* @__PURE__ */ ie.jsx(eo, { fieldType: "cardNumber" });
}
function jc() {
  return /* @__PURE__ */ ie.jsx(eo, { fieldType: "cardExpiry" });
}
function Hc() {
  return /* @__PURE__ */ ie.jsx(eo, { fieldType: "cardCvc" });
}
function Bc(t) {
  const { updateField: e } = Zn();
  function r(n) {
    return e("cardHolderName", n.target.value);
  }
  return /* @__PURE__ */ ie.jsx(ei, { ...t, onChange: r });
}
function Wc(t) {
  const { submitPayment: e } = Zn();
  return /* @__PURE__ */ ie.jsx(Za, { ...t, submitPayment: e });
}
const zc = {
  CardHolderName: Bc,
  CreditCardNumber: Lc,
  CreditCardExpiration: jc,
  CreditCardCvc: Hc,
  SubmitBtn: Wc
}, ri = Aa(void 0);
function Vc({ amount: t, children: e, config: r }) {
  const [n, a] = qe(), [s, c] = qe("");
  return nt(() => {
    async function f() {
      const y = await li(r.publishableKey), _ = t * 100, l = parseInt(_.toFixed(2), 10), h = await Xa("stripe", { amount: l }, { secretKey: r.secretKey });
      a(y), c(h);
    }
    f();
  }, []), !s || !n ? null : /* @__PURE__ */ ie.jsx(ui, { stripe: n, options: { clientSecret: s }, children: /* @__PURE__ */ ie.jsx(Kc, { clientSecret: s, children: e }) });
}
function Kc({ children: t, clientSecret: e }) {
  const r = ci(), n = Ra(), [a, s] = qe({
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
    cardHolderName: ""
  });
  function c(y, _) {
    s((l) => ({ ...l, [y]: _ }));
  }
  async function f(y) {
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
        y.onSuccess(l);
      } catch (_) {
        y.onError(_);
      } finally {
        y.onComplete();
      }
  }
  return /* @__PURE__ */ ie.jsx(ri.Provider, { value: { submitPayment: f, form: a, updateField: c }, children: t });
}
function ni() {
  return Ca(ri);
}
const to = ({ fieldType: t }) => {
  const e = Ra(), r = `accru-payment-form-${t}-container`, n = si(!1);
  return nt(() => {
    function a() {
      e.create(t).mount(`#${r}`);
    }
    n.current || (n.current = !0, a());
  }, []), /* @__PURE__ */ ie.jsx("div", { id: r });
};
function Yc(t) {
  const { updateField: e } = ni();
  function r(n) {
    return e("cardHolderName", n.target.value);
  }
  return /* @__PURE__ */ ie.jsx(ei, { ...t, onChange: r });
}
function Jc(t) {
  const { submitPayment: e } = ni();
  return /* @__PURE__ */ ie.jsx(Za, { ...t, submitPayment: e });
}
function Qc() {
  return /* @__PURE__ */ ie.jsx(to, { fieldType: "cardNumber" });
}
function Xc() {
  return /* @__PURE__ */ ie.jsx(to, { fieldType: "cardExpiry" });
}
function Zc() {
  return /* @__PURE__ */ ie.jsx(to, { fieldType: "cardCvc" });
}
const ed = {
  CardHolderName: Yc,
  CreditCardNumber: Qc,
  CreditCardExpiration: Xc,
  CreditCardCvc: Zc,
  SubmitBtn: Jc
};
function td(t, e) {
  return e.find((r) => r.name === t).config;
}
function ad(t) {
  const [e, r] = qe(!1), [n] = qe(t.preferredProvider), [a, s] = qe([]);
  if (nt(() => {
    async function f() {
      const y = await t.preReleaseGetProviders();
      if (!y.map((l) => l.name).includes(n))
        throw new Error(
          "Provider not found."
        );
      s(y), r(!0);
    }
    f();
  }, []), e === !1)
    return null;
  const c = td(n, a);
  return n === "nuvei" ? /* @__PURE__ */ ie.jsx(Nc, { amount: t.amount, config: c, children: t.children }) : n === "stripe" ? /* @__PURE__ */ ie.jsx(Vc, { amount: t.amount, config: c, children: t.children }) : null;
}
function id(t) {
  return t === "nuvei" ? zc : t === "stripe" ? ed : null;
}
export {
  ad as AccruPay,
  id as form
};
