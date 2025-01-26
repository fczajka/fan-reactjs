(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const f of o)
      if (f.type === 'childList')
        for (const d of f.addedNodes)
          d.tagName === 'LINK' && d.rel === 'modulepreload' && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(o) {
    const f = {};
    return (
      o.integrity && (f.integrity = o.integrity),
      o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const f = l(o);
    fetch(o.href, f);
  }
})();
function ov(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default')
    ? n.default
    : n;
}
var Rc = { exports: {} },
  _l = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sy;
function QS() {
  if (sy) return _l;
  sy = 1;
  var n = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.fragment');
  function l(s, o, f) {
    var d = null;
    if (
      (f !== void 0 && (d = '' + f),
      o.key !== void 0 && (d = '' + o.key),
      'key' in o)
    ) {
      f = {};
      for (var m in o) m !== 'key' && (f[m] = o[m]);
    } else f = o;
    return (
      (o = f.ref),
      { $$typeof: n, type: s, key: d, ref: o !== void 0 ? o : null, props: f }
    );
  }
  return (_l.Fragment = a), (_l.jsx = l), (_l.jsxs = l), _l;
}
var uy;
function ZS() {
  return uy || ((uy = 1), (Rc.exports = QS())), Rc.exports;
}
var L = ZS(),
  Dc = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oy;
function FS() {
  if (oy) return se;
  oy = 1;
  var n = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.portal'),
    l = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    d = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    p = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function S(R) {
    return R === null || typeof R != 'object'
      ? null
      : ((R = (v && R[v]) || R['@@iterator']),
        typeof R == 'function' ? R : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    A = Object.assign,
    M = {};
  function _(R, X, le) {
    (this.props = R),
      (this.context = X),
      (this.refs = M),
      (this.updater = le || T);
  }
  (_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (R, X) {
      if (typeof R != 'object' && typeof R != 'function' && R != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, R, X, 'setState');
    }),
    (_.prototype.forceUpdate = function (R) {
      this.updater.enqueueForceUpdate(this, R, 'forceUpdate');
    });
  function O() {}
  O.prototype = _.prototype;
  function N(R, X, le) {
    (this.props = R),
      (this.context = X),
      (this.refs = M),
      (this.updater = le || T);
  }
  var U = (N.prototype = new O());
  (U.constructor = N), A(U, _.prototype), (U.isPureReactComponent = !0);
  var q = Array.isArray,
    V = { H: null, A: null, T: null, S: null },
    Y = Object.prototype.hasOwnProperty;
  function $(R, X, le, ne, Z, he) {
    return (
      (le = he.ref),
      {
        $$typeof: n,
        type: R,
        key: X,
        ref: le !== void 0 ? le : null,
        props: he,
      }
    );
  }
  function K(R, X) {
    return $(R.type, X, void 0, void 0, void 0, R.props);
  }
  function k(R) {
    return typeof R == 'object' && R !== null && R.$$typeof === n;
  }
  function W(R) {
    var X = { '=': '=0', ':': '=2' };
    return (
      '$' +
      R.replace(/[=:]/g, function (le) {
        return X[le];
      })
    );
  }
  var Re = /\/+/g;
  function xt(R, X) {
    return typeof R == 'object' && R !== null && R.key != null
      ? W('' + R.key)
      : X.toString(36);
  }
  function Tt() {}
  function Et(R) {
    switch (R.status) {
      case 'fulfilled':
        return R.value;
      case 'rejected':
        throw R.reason;
      default:
        switch (
          (typeof R.status == 'string'
            ? R.then(Tt, Tt)
            : ((R.status = 'pending'),
              R.then(
                function (X) {
                  R.status === 'pending' &&
                    ((R.status = 'fulfilled'), (R.value = X));
                },
                function (X) {
                  R.status === 'pending' &&
                    ((R.status = 'rejected'), (R.reason = X));
                },
              )),
          R.status)
        ) {
          case 'fulfilled':
            return R.value;
          case 'rejected':
            throw R.reason;
        }
    }
    throw R;
  }
  function at(R, X, le, ne, Z) {
    var he = typeof R;
    (he === 'undefined' || he === 'boolean') && (R = null);
    var ue = !1;
    if (R === null) ue = !0;
    else
      switch (he) {
        case 'bigint':
        case 'string':
        case 'number':
          ue = !0;
          break;
        case 'object':
          switch (R.$$typeof) {
            case n:
            case a:
              ue = !0;
              break;
            case g:
              return (ue = R._init), at(ue(R._payload), X, le, ne, Z);
          }
      }
    if (ue)
      return (
        (Z = Z(R)),
        (ue = ne === '' ? '.' + xt(R, 0) : ne),
        q(Z)
          ? ((le = ''),
            ue != null && (le = ue.replace(Re, '$&/') + '/'),
            at(Z, X, le, '', function (Le) {
              return Le;
            }))
          : Z != null &&
            (k(Z) &&
              (Z = K(
                Z,
                le +
                  (Z.key == null || (R && R.key === Z.key)
                    ? ''
                    : ('' + Z.key).replace(Re, '$&/') + '/') +
                  ue,
              )),
            X.push(Z)),
        1
      );
    ue = 0;
    var it = ne === '' ? '.' : ne + ':';
    if (q(R))
      for (var ve = 0; ve < R.length; ve++)
        (ne = R[ve]), (he = it + xt(ne, ve)), (ue += at(ne, X, le, he, Z));
    else if (((ve = S(R)), typeof ve == 'function'))
      for (R = ve.call(R), ve = 0; !(ne = R.next()).done; )
        (ne = ne.value), (he = it + xt(ne, ve++)), (ue += at(ne, X, le, he, Z));
    else if (he === 'object') {
      if (typeof R.then == 'function') return at(Et(R), X, le, ne, Z);
      throw (
        ((X = String(R)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (X === '[object Object]'
              ? 'object with keys {' + Object.keys(R).join(', ') + '}'
              : X) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    }
    return ue;
  }
  function Q(R, X, le) {
    if (R == null) return R;
    var ne = [],
      Z = 0;
    return (
      at(R, ne, '', '', function (he) {
        return X.call(le, he, Z++);
      }),
      ne
    );
  }
  function I(R) {
    if (R._status === -1) {
      var X = R._result;
      (X = X()),
        X.then(
          function (le) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 1), (R._result = le));
          },
          function (le) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 2), (R._result = le));
          },
        ),
        R._status === -1 && ((R._status = 0), (R._result = X));
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var ee =
    typeof reportError == 'function'
      ? reportError
      : function (R) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var X = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof R == 'object' &&
                R !== null &&
                typeof R.message == 'string'
                  ? String(R.message)
                  : String(R),
              error: R,
            });
            if (!window.dispatchEvent(X)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', R);
            return;
          }
          console.error(R);
        };
  function ge() {}
  return (
    (se.Children = {
      map: Q,
      forEach: function (R, X, le) {
        Q(
          R,
          function () {
            X.apply(this, arguments);
          },
          le,
        );
      },
      count: function (R) {
        var X = 0;
        return (
          Q(R, function () {
            X++;
          }),
          X
        );
      },
      toArray: function (R) {
        return (
          Q(R, function (X) {
            return X;
          }) || []
        );
      },
      only: function (R) {
        if (!k(R))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return R;
      },
    }),
    (se.Component = _),
    (se.Fragment = l),
    (se.Profiler = o),
    (se.PureComponent = N),
    (se.StrictMode = s),
    (se.Suspense = h),
    (se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V),
    (se.act = function () {
      throw Error('act(...) is not supported in production builds of React.');
    }),
    (se.cache = function (R) {
      return function () {
        return R.apply(null, arguments);
      };
    }),
    (se.cloneElement = function (R, X, le) {
      if (R == null)
        throw Error(
          'The argument must be a React element, but you passed ' + R + '.',
        );
      var ne = A({}, R.props),
        Z = R.key,
        he = void 0;
      if (X != null)
        for (ue in (X.ref !== void 0 && (he = void 0),
        X.key !== void 0 && (Z = '' + X.key),
        X))
          !Y.call(X, ue) ||
            ue === 'key' ||
            ue === '__self' ||
            ue === '__source' ||
            (ue === 'ref' && X.ref === void 0) ||
            (ne[ue] = X[ue]);
      var ue = arguments.length - 2;
      if (ue === 1) ne.children = le;
      else if (1 < ue) {
        for (var it = Array(ue), ve = 0; ve < ue; ve++)
          it[ve] = arguments[ve + 2];
        ne.children = it;
      }
      return $(R.type, Z, void 0, void 0, he, ne);
    }),
    (se.createContext = function (R) {
      return (
        (R = {
          $$typeof: d,
          _currentValue: R,
          _currentValue2: R,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (R.Provider = R),
        (R.Consumer = { $$typeof: f, _context: R }),
        R
      );
    }),
    (se.createElement = function (R, X, le) {
      var ne,
        Z = {},
        he = null;
      if (X != null)
        for (ne in (X.key !== void 0 && (he = '' + X.key), X))
          Y.call(X, ne) &&
            ne !== 'key' &&
            ne !== '__self' &&
            ne !== '__source' &&
            (Z[ne] = X[ne]);
      var ue = arguments.length - 2;
      if (ue === 1) Z.children = le;
      else if (1 < ue) {
        for (var it = Array(ue), ve = 0; ve < ue; ve++)
          it[ve] = arguments[ve + 2];
        Z.children = it;
      }
      if (R && R.defaultProps)
        for (ne in ((ue = R.defaultProps), ue))
          Z[ne] === void 0 && (Z[ne] = ue[ne]);
      return $(R, he, void 0, void 0, null, Z);
    }),
    (se.createRef = function () {
      return { current: null };
    }),
    (se.forwardRef = function (R) {
      return { $$typeof: m, render: R };
    }),
    (se.isValidElement = k),
    (se.lazy = function (R) {
      return { $$typeof: g, _payload: { _status: -1, _result: R }, _init: I };
    }),
    (se.memo = function (R, X) {
      return { $$typeof: p, type: R, compare: X === void 0 ? null : X };
    }),
    (se.startTransition = function (R) {
      var X = V.T,
        le = {};
      V.T = le;
      try {
        var ne = R(),
          Z = V.S;
        Z !== null && Z(le, ne),
          typeof ne == 'object' &&
            ne !== null &&
            typeof ne.then == 'function' &&
            ne.then(ge, ee);
      } catch (he) {
        ee(he);
      } finally {
        V.T = X;
      }
    }),
    (se.unstable_useCacheRefresh = function () {
      return V.H.useCacheRefresh();
    }),
    (se.use = function (R) {
      return V.H.use(R);
    }),
    (se.useActionState = function (R, X, le) {
      return V.H.useActionState(R, X, le);
    }),
    (se.useCallback = function (R, X) {
      return V.H.useCallback(R, X);
    }),
    (se.useContext = function (R) {
      return V.H.useContext(R);
    }),
    (se.useDebugValue = function () {}),
    (se.useDeferredValue = function (R, X) {
      return V.H.useDeferredValue(R, X);
    }),
    (se.useEffect = function (R, X) {
      return V.H.useEffect(R, X);
    }),
    (se.useId = function () {
      return V.H.useId();
    }),
    (se.useImperativeHandle = function (R, X, le) {
      return V.H.useImperativeHandle(R, X, le);
    }),
    (se.useInsertionEffect = function (R, X) {
      return V.H.useInsertionEffect(R, X);
    }),
    (se.useLayoutEffect = function (R, X) {
      return V.H.useLayoutEffect(R, X);
    }),
    (se.useMemo = function (R, X) {
      return V.H.useMemo(R, X);
    }),
    (se.useOptimistic = function (R, X) {
      return V.H.useOptimistic(R, X);
    }),
    (se.useReducer = function (R, X, le) {
      return V.H.useReducer(R, X, le);
    }),
    (se.useRef = function (R) {
      return V.H.useRef(R);
    }),
    (se.useState = function (R) {
      return V.H.useState(R);
    }),
    (se.useSyncExternalStore = function (R, X, le) {
      return V.H.useSyncExternalStore(R, X, le);
    }),
    (se.useTransition = function () {
      return V.H.useTransition();
    }),
    (se.version = '19.0.0'),
    se
  );
}
var cy;
function eu() {
  return cy || ((cy = 1), (Dc.exports = FS())), Dc.exports;
}
var E = eu();
const na = ov(E);
var wc = { exports: {} },
  zl = {},
  Oc = { exports: {} },
  Cc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fy;
function $S() {
  return (
    fy ||
      ((fy = 1),
      (function (n) {
        function a(Q, I) {
          var ee = Q.length;
          Q.push(I);
          e: for (; 0 < ee; ) {
            var ge = (ee - 1) >>> 1,
              R = Q[ge];
            if (0 < o(R, I)) (Q[ge] = I), (Q[ee] = R), (ee = ge);
            else break e;
          }
        }
        function l(Q) {
          return Q.length === 0 ? null : Q[0];
        }
        function s(Q) {
          if (Q.length === 0) return null;
          var I = Q[0],
            ee = Q.pop();
          if (ee !== I) {
            Q[0] = ee;
            e: for (var ge = 0, R = Q.length, X = R >>> 1; ge < X; ) {
              var le = 2 * (ge + 1) - 1,
                ne = Q[le],
                Z = le + 1,
                he = Q[Z];
              if (0 > o(ne, ee))
                Z < R && 0 > o(he, ne)
                  ? ((Q[ge] = he), (Q[Z] = ee), (ge = Z))
                  : ((Q[ge] = ne), (Q[le] = ee), (ge = le));
              else if (Z < R && 0 > o(he, ee))
                (Q[ge] = he), (Q[Z] = ee), (ge = Z);
              else break e;
            }
          }
          return I;
        }
        function o(Q, I) {
          var ee = Q.sortIndex - I.sortIndex;
          return ee !== 0 ? ee : Q.id - I.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            m = d.now();
          n.unstable_now = function () {
            return d.now() - m;
          };
        }
        var h = [],
          p = [],
          g = 1,
          v = null,
          S = 3,
          T = !1,
          A = !1,
          M = !1,
          _ = typeof setTimeout == 'function' ? setTimeout : null,
          O = typeof clearTimeout == 'function' ? clearTimeout : null,
          N = typeof setImmediate < 'u' ? setImmediate : null;
        function U(Q) {
          for (var I = l(p); I !== null; ) {
            if (I.callback === null) s(p);
            else if (I.startTime <= Q)
              s(p), (I.sortIndex = I.expirationTime), a(h, I);
            else break;
            I = l(p);
          }
        }
        function q(Q) {
          if (((M = !1), U(Q), !A))
            if (l(h) !== null) (A = !0), Et();
            else {
              var I = l(p);
              I !== null && at(q, I.startTime - Q);
            }
        }
        var V = !1,
          Y = -1,
          $ = 5,
          K = -1;
        function k() {
          return !(n.unstable_now() - K < $);
        }
        function W() {
          if (V) {
            var Q = n.unstable_now();
            K = Q;
            var I = !0;
            try {
              e: {
                (A = !1), M && ((M = !1), O(Y), (Y = -1)), (T = !0);
                var ee = S;
                try {
                  t: {
                    for (
                      U(Q), v = l(h);
                      v !== null && !(v.expirationTime > Q && k());

                    ) {
                      var ge = v.callback;
                      if (typeof ge == 'function') {
                        (v.callback = null), (S = v.priorityLevel);
                        var R = ge(v.expirationTime <= Q);
                        if (((Q = n.unstable_now()), typeof R == 'function')) {
                          (v.callback = R), U(Q), (I = !0);
                          break t;
                        }
                        v === l(h) && s(h), U(Q);
                      } else s(h);
                      v = l(h);
                    }
                    if (v !== null) I = !0;
                    else {
                      var X = l(p);
                      X !== null && at(q, X.startTime - Q), (I = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (S = ee), (T = !1);
                }
                I = void 0;
              }
            } finally {
              I ? Re() : (V = !1);
            }
          }
        }
        var Re;
        if (typeof N == 'function')
          Re = function () {
            N(W);
          };
        else if (typeof MessageChannel < 'u') {
          var xt = new MessageChannel(),
            Tt = xt.port2;
          (xt.port1.onmessage = W),
            (Re = function () {
              Tt.postMessage(null);
            });
        } else
          Re = function () {
            _(W, 0);
          };
        function Et() {
          V || ((V = !0), Re());
        }
        function at(Q, I) {
          Y = _(function () {
            Q(n.unstable_now());
          }, I);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (Q) {
            Q.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            A || T || ((A = !0), Et());
          }),
          (n.unstable_forceFrameRate = function (Q) {
            0 > Q || 125 < Q
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : ($ = 0 < Q ? Math.floor(1e3 / Q) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return l(h);
          }),
          (n.unstable_next = function (Q) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = S;
            }
            var ee = S;
            S = I;
            try {
              return Q();
            } finally {
              S = ee;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (Q, I) {
            switch (Q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                Q = 3;
            }
            var ee = S;
            S = Q;
            try {
              return I();
            } finally {
              S = ee;
            }
          }),
          (n.unstable_scheduleCallback = function (Q, I, ee) {
            var ge = n.unstable_now();
            switch (
              (typeof ee == 'object' && ee !== null
                ? ((ee = ee.delay),
                  (ee = typeof ee == 'number' && 0 < ee ? ge + ee : ge))
                : (ee = ge),
              Q)
            ) {
              case 1:
                var R = -1;
                break;
              case 2:
                R = 250;
                break;
              case 5:
                R = 1073741823;
                break;
              case 4:
                R = 1e4;
                break;
              default:
                R = 5e3;
            }
            return (
              (R = ee + R),
              (Q = {
                id: g++,
                callback: I,
                priorityLevel: Q,
                startTime: ee,
                expirationTime: R,
                sortIndex: -1,
              }),
              ee > ge
                ? ((Q.sortIndex = ee),
                  a(p, Q),
                  l(h) === null &&
                    Q === l(p) &&
                    (M ? (O(Y), (Y = -1)) : (M = !0), at(q, ee - ge)))
                : ((Q.sortIndex = R), a(h, Q), A || T || ((A = !0), Et())),
              Q
            );
          }),
          (n.unstable_shouldYield = k),
          (n.unstable_wrapCallback = function (Q) {
            var I = S;
            return function () {
              var ee = S;
              S = I;
              try {
                return Q.apply(this, arguments);
              } finally {
                S = ee;
              }
            };
          });
      })(Cc)),
    Cc
  );
}
var dy;
function JS() {
  return dy || ((dy = 1), (Oc.exports = $S())), Oc.exports;
}
var Mc = { exports: {} },
  et = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hy;
function WS() {
  if (hy) return et;
  hy = 1;
  var n = eu();
  function a(h) {
    var p = 'https://react.dev/errors/' + h;
    if (1 < arguments.length) {
      p += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        p += '&args[]=' + encodeURIComponent(arguments[g]);
    }
    return (
      'Minified React error #' +
      h +
      '; visit ' +
      p +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function l() {}
  var s = {
      d: {
        f: l,
        r: function () {
          throw Error(a(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for('react.portal');
  function f(h, p, g) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: v == null ? null : '' + v,
      children: h,
      containerInfo: p,
      implementation: g,
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(h, p) {
    if (h === 'font') return '';
    if (typeof p == 'string') return p === 'use-credentials' ? p : '';
  }
  return (
    (et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (et.createPortal = function (h, p) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(a(299));
      return f(h, p, null, g);
    }),
    (et.flushSync = function (h) {
      var p = d.T,
        g = s.p;
      try {
        if (((d.T = null), (s.p = 2), h)) return h();
      } finally {
        (d.T = p), (s.p = g), s.d.f();
      }
    }),
    (et.preconnect = function (h, p) {
      typeof h == 'string' &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == 'string'
                ? p === 'use-credentials'
                  ? p
                  : ''
                : void 0))
          : (p = null),
        s.d.C(h, p));
    }),
    (et.prefetchDNS = function (h) {
      typeof h == 'string' && s.d.D(h);
    }),
    (et.preinit = function (h, p) {
      if (typeof h == 'string' && p && typeof p.as == 'string') {
        var g = p.as,
          v = m(g, p.crossOrigin),
          S = typeof p.integrity == 'string' ? p.integrity : void 0,
          T = typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0;
        g === 'style'
          ? s.d.S(h, typeof p.precedence == 'string' ? p.precedence : void 0, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: T,
            })
          : g === 'script' &&
            s.d.X(h, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: T,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
      }
    }),
    (et.preinitModule = function (h, p) {
      if (typeof h == 'string')
        if (typeof p == 'object' && p !== null) {
          if (p.as == null || p.as === 'script') {
            var g = m(p.as, p.crossOrigin);
            s.d.M(h, {
              crossOrigin: g,
              integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
          }
        } else p == null && s.d.M(h);
    }),
    (et.preload = function (h, p) {
      if (
        typeof h == 'string' &&
        typeof p == 'object' &&
        p !== null &&
        typeof p.as == 'string'
      ) {
        var g = p.as,
          v = m(g, p.crossOrigin);
        s.d.L(h, g, {
          crossOrigin: v,
          integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
          type: typeof p.type == 'string' ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == 'string' ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == 'string' ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == 'string' ? p.imageSizes : void 0,
          media: typeof p.media == 'string' ? p.media : void 0,
        });
      }
    }),
    (et.preloadModule = function (h, p) {
      if (typeof h == 'string')
        if (p) {
          var g = m(p.as, p.crossOrigin);
          s.d.m(h, {
            as: typeof p.as == 'string' && p.as !== 'script' ? p.as : void 0,
            crossOrigin: g,
            integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          });
        } else s.d.m(h);
    }),
    (et.requestFormReset = function (h) {
      s.d.r(h);
    }),
    (et.unstable_batchedUpdates = function (h, p) {
      return h(p);
    }),
    (et.useFormState = function (h, p, g) {
      return d.H.useFormState(h, p, g);
    }),
    (et.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (et.version = '19.0.0'),
    et
  );
}
var my;
function cv() {
  if (my) return Mc.exports;
  my = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (Mc.exports = WS()), Mc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var py;
function IS() {
  if (py) return zl;
  py = 1;
  var n = JS(),
    a = eu(),
    l = cv();
  function s(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        t += '&args[]=' + encodeURIComponent(arguments[i]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var f = Symbol.for('react.element'),
    d = Symbol.for('react.transitional.element'),
    m = Symbol.for('react.portal'),
    h = Symbol.for('react.fragment'),
    p = Symbol.for('react.strict_mode'),
    g = Symbol.for('react.profiler'),
    v = Symbol.for('react.provider'),
    S = Symbol.for('react.consumer'),
    T = Symbol.for('react.context'),
    A = Symbol.for('react.forward_ref'),
    M = Symbol.for('react.suspense'),
    _ = Symbol.for('react.suspense_list'),
    O = Symbol.for('react.memo'),
    N = Symbol.for('react.lazy'),
    U = Symbol.for('react.offscreen'),
    q = Symbol.for('react.memo_cache_sentinel'),
    V = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (V && e[V]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var $ = Symbol.for('react.client.reference');
  function K(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === $ ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case h:
        return 'Fragment';
      case m:
        return 'Portal';
      case g:
        return 'Profiler';
      case p:
        return 'StrictMode';
      case M:
        return 'Suspense';
      case _:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case T:
          return (e.displayName || 'Context') + '.Provider';
        case S:
          return (e._context.displayName || 'Context') + '.Consumer';
        case A:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case O:
          return (
            (t = e.displayName || null), t !== null ? t : K(e.type) || 'Memo'
          );
        case N:
          (t = e._payload), (e = e._init);
          try {
            return K(e(t));
          } catch {}
      }
    return null;
  }
  var k = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = Object.assign,
    Re,
    xt;
  function Tt(e) {
    if (Re === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        (Re = (t && t[1]) || ''),
          (xt =
            -1 <
            i.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < i.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      Re +
      e +
      xt
    );
  }
  var Et = !1;
  function at(e, t) {
    if (!e || Et) return '';
    Et = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var G = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(G.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(G, []);
                } catch (B) {
                  var j = B;
                }
                Reflect.construct(e, [], G);
              } else {
                try {
                  G.call();
                } catch (B) {
                  j = B;
                }
                e.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (B) {
                j = B;
              }
              (G = e()) &&
                typeof G.catch == 'function' &&
                G.catch(function () {});
            }
          } catch (B) {
            if (B && j && typeof B.stack == 'string') return [B.stack, j.stack];
          }
          return [null, null];
        },
      };
      r.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var u = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        'name',
      );
      u &&
        u.configurable &&
        Object.defineProperty(r.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var c = r.DetermineComponentFrameRoot(),
        y = c[0],
        b = c[1];
      if (y && b) {
        var x = y.split(`
`),
          w = b.split(`
`);
        for (
          u = r = 0;
          r < x.length && !x[r].includes('DetermineComponentFrameRoot');

        )
          r++;
        for (; u < w.length && !w[u].includes('DetermineComponentFrameRoot'); )
          u++;
        if (r === x.length || u === w.length)
          for (
            r = x.length - 1, u = w.length - 1;
            1 <= r && 0 <= u && x[r] !== w[u];

          )
            u--;
        for (; 1 <= r && 0 <= u; r--, u--)
          if (x[r] !== w[u]) {
            if (r !== 1 || u !== 1)
              do
                if ((r--, u--, 0 > u || x[r] !== w[u])) {
                  var H =
                    `
` + x[r].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      H.includes('<anonymous>') &&
                      (H = H.replace('<anonymous>', e.displayName)),
                    H
                  );
                }
              while (1 <= r && 0 <= u);
            break;
          }
      }
    } finally {
      (Et = !1), (Error.prepareStackTrace = i);
    }
    return (i = e ? e.displayName || e.name : '') ? Tt(i) : '';
  }
  function Q(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Tt(e.type);
      case 16:
        return Tt('Lazy');
      case 13:
        return Tt('Suspense');
      case 19:
        return Tt('SuspenseList');
      case 0:
      case 15:
        return (e = at(e.type, !1)), e;
      case 11:
        return (e = at(e.type.render, !1)), e;
      case 1:
        return (e = at(e.type, !0)), e;
      default:
        return '';
    }
  }
  function I(e) {
    try {
      var t = '';
      do (t += Q(e)), (e = e.return);
      while (e);
      return t;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  function ee(e) {
    var t = e,
      i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (i = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function ge(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function R(e) {
    if (ee(e) !== e) throw Error(s(188));
  }
  function X(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ee(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var i = e, r = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (((r = u.return), r !== null)) {
          i = r;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === i) return R(u), e;
          if (c === r) return R(u), t;
          c = c.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== r.return) (i = u), (r = c);
      else {
        for (var y = !1, b = u.child; b; ) {
          if (b === i) {
            (y = !0), (i = u), (r = c);
            break;
          }
          if (b === r) {
            (y = !0), (r = u), (i = c);
            break;
          }
          b = b.sibling;
        }
        if (!y) {
          for (b = c.child; b; ) {
            if (b === i) {
              (y = !0), (i = c), (r = u);
              break;
            }
            if (b === r) {
              (y = !0), (r = c), (i = u);
              break;
            }
            b = b.sibling;
          }
          if (!y) throw Error(s(189));
        }
      }
      if (i.alternate !== r) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? e : t;
  }
  function le(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = le(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var ne = Array.isArray,
    Z = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    he = { pending: !1, data: null, method: null, action: null },
    ue = [],
    it = -1;
  function ve(e) {
    return { current: e };
  }
  function Le(e) {
    0 > it || ((e.current = ue[it]), (ue[it] = null), it--);
  }
  function De(e, t) {
    it++, (ue[it] = e.current), (e.current = t);
  }
  var Xt = ve(null),
    ji = ve(null),
    _n = ve(null),
    ur = ve(null);
  function or(e, t) {
    switch ((De(_n, t), De(ji, e), De(Xt, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? Up(t) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? t.parentNode : t),
          (t = e.tagName),
          (e = e.namespaceURI))
        )
          (e = Up(e)), (t = Lp(e, t));
        else
          switch (t) {
            case 'svg':
              t = 1;
              break;
            case 'math':
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Le(Xt), De(Xt, t);
  }
  function Ha() {
    Le(Xt), Le(ji), Le(_n);
  }
  function pu(e) {
    e.memoizedState !== null && De(ur, e);
    var t = Xt.current,
      i = Lp(t, e.type);
    t !== i && (De(ji, e), De(Xt, i));
  }
  function cr(e) {
    ji.current === e && (Le(Xt), Le(ji)),
      ur.current === e && (Le(ur), (Dl._currentValue = he));
  }
  var yu = Object.prototype.hasOwnProperty,
    gu = n.unstable_scheduleCallback,
    vu = n.unstable_cancelCallback,
    R1 = n.unstable_shouldYield,
    D1 = n.unstable_requestPaint,
    kt = n.unstable_now,
    w1 = n.unstable_getCurrentPriorityLevel,
    Rd = n.unstable_ImmediatePriority,
    Dd = n.unstable_UserBlockingPriority,
    fr = n.unstable_NormalPriority,
    O1 = n.unstable_LowPriority,
    wd = n.unstable_IdlePriority,
    C1 = n.log,
    M1 = n.unstable_setDisableYieldValue,
    Vi = null,
    ct = null;
  function _1(e) {
    if (ct && typeof ct.onCommitFiberRoot == 'function')
      try {
        ct.onCommitFiberRoot(Vi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function zn(e) {
    if (
      (typeof C1 == 'function' && M1(e),
      ct && typeof ct.setStrictMode == 'function')
    )
      try {
        ct.setStrictMode(Vi, e);
      } catch {}
  }
  var ft = Math.clz32 ? Math.clz32 : j1,
    z1 = Math.log,
    N1 = Math.LN2;
  function j1(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((z1(e) / N1) | 0)) | 0;
  }
  var dr = 128,
    hr = 4194304;
  function ua(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function mr(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var r = 0,
      u = e.suspendedLanes,
      c = e.pingedLanes,
      y = e.warmLanes;
    e = e.finishedLanes !== 0;
    var b = i & 134217727;
    return (
      b !== 0
        ? ((i = b & ~u),
          i !== 0
            ? (r = ua(i))
            : ((c &= b),
              c !== 0
                ? (r = ua(c))
                : e || ((y = b & ~y), y !== 0 && (r = ua(y)))))
        : ((b = i & ~u),
          b !== 0
            ? (r = ua(b))
            : c !== 0
              ? (r = ua(c))
              : e || ((y = i & ~y), y !== 0 && (r = ua(y)))),
      r === 0
        ? 0
        : t !== 0 &&
            t !== r &&
            !(t & u) &&
            ((u = r & -r),
            (y = t & -t),
            u >= y || (u === 32 && (y & 4194176) !== 0))
          ? t
          : r
    );
  }
  function Ui(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function V1(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Od() {
    var e = dr;
    return (dr <<= 1), !(dr & 4194176) && (dr = 128), e;
  }
  function Cd() {
    var e = hr;
    return (hr <<= 1), !(hr & 62914560) && (hr = 4194304), e;
  }
  function bu(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Li(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function U1(e, t, i, r, u, c) {
    var y = e.pendingLanes;
    (e.pendingLanes = i),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= i),
      (e.entangledLanes &= i),
      (e.errorRecoveryDisabledLanes &= i),
      (e.shellSuspendCounter = 0);
    var b = e.entanglements,
      x = e.expirationTimes,
      w = e.hiddenUpdates;
    for (i = y & ~i; 0 < i; ) {
      var H = 31 - ft(i),
        G = 1 << H;
      (b[H] = 0), (x[H] = -1);
      var j = w[H];
      if (j !== null)
        for (w[H] = null, H = 0; H < j.length; H++) {
          var B = j[H];
          B !== null && (B.lane &= -536870913);
        }
      i &= ~G;
    }
    r !== 0 && Md(e, r, 0),
      c !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(y & ~t));
  }
  function Md(e, t, i) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var r = 31 - ft(t);
    (e.entangledLanes |= t),
      (e.entanglements[r] = e.entanglements[r] | 1073741824 | (i & 4194218));
  }
  function _d(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i; ) {
      var r = 31 - ft(i),
        u = 1 << r;
      (u & t) | (e[r] & t) && (e[r] |= t), (i &= ~u);
    }
  }
  function zd(e) {
    return (
      (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function Nd() {
    var e = Z.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : ty(e.type));
  }
  function L1(e, t) {
    var i = Z.p;
    try {
      return (Z.p = e), t();
    } finally {
      Z.p = i;
    }
  }
  var Nn = Math.random().toString(36).slice(2),
    We = '__reactFiber$' + Nn,
    st = '__reactProps$' + Nn,
    Pa = '__reactContainer$' + Nn,
    Su = '__reactEvents$' + Nn,
    B1 = '__reactListeners$' + Nn,
    H1 = '__reactHandles$' + Nn,
    jd = '__reactResources$' + Nn,
    Bi = '__reactMarker$' + Nn;
  function xu(e) {
    delete e[We], delete e[st], delete e[Su], delete e[B1], delete e[H1];
  }
  function oa(e) {
    var t = e[We];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if ((t = i[Pa] || i[We])) {
        if (
          ((i = t.alternate),
          t.child !== null || (i !== null && i.child !== null))
        )
          for (e = Pp(e); e !== null; ) {
            if ((i = e[We])) return i;
            e = Pp(e);
          }
        return t;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function qa(e) {
    if ((e = e[We] || e[Pa])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Hi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ga(e) {
    var t = e[jd];
    return (
      t ||
        (t = e[jd] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ye(e) {
    e[Bi] = !0;
  }
  var Vd = new Set(),
    Ud = {};
  function ca(e, t) {
    Ya(e, t), Ya(e + 'Capture', t);
  }
  function Ya(e, t) {
    for (Ud[e] = t, e = 0; e < t.length; e++) Vd.add(t[e]);
  }
  var nn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    P1 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    Ld = {},
    Bd = {};
  function q1(e) {
    return yu.call(Bd, e)
      ? !0
      : yu.call(Ld, e)
        ? !1
        : P1.test(e)
          ? (Bd[e] = !0)
          : ((Ld[e] = !0), !1);
  }
  function pr(e, t, i) {
    if (q1(t))
      if (i === null) e.removeAttribute(t);
      else {
        switch (typeof i) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var r = t.toLowerCase().slice(0, 5);
            if (r !== 'data-' && r !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + i);
      }
  }
  function yr(e, t, i) {
    if (i === null) e.removeAttribute(t);
    else {
      switch (typeof i) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + i);
    }
  }
  function an(e, t, i, r) {
    if (r === null) e.removeAttribute(i);
    else {
      switch (typeof r) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(t, i, '' + r);
    }
  }
  function At(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Hd(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function G1(e) {
    var t = Hd(e) ? 'checked' : 'value',
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof i < 'u' &&
      typeof i.get == 'function' &&
      typeof i.set == 'function'
    ) {
      var u = i.get,
        c = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (y) {
            (r = '' + y), c.call(this, y);
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (y) {
            r = '' + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function gr(e) {
    e._valueTracker || (e._valueTracker = G1(e));
  }
  function Pd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      r = '';
    return (
      e && (r = Hd(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== i ? (t.setValue(e), !0) : !1
    );
  }
  function vr(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Y1 = /[\n"\\]/g;
  function Rt(e) {
    return e.replace(Y1, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Tu(e, t, i, r, u, c, y, b) {
    (e.name = ''),
      y != null &&
      typeof y != 'function' &&
      typeof y != 'symbol' &&
      typeof y != 'boolean'
        ? (e.type = y)
        : e.removeAttribute('type'),
      t != null
        ? y === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) &&
            (e.value = '' + At(t))
          : e.value !== '' + At(t) && (e.value = '' + At(t))
        : (y !== 'submit' && y !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Eu(e, y, At(t))
        : i != null
          ? Eu(e, y, At(i))
          : r != null && e.removeAttribute('value'),
      u == null && c != null && (e.defaultChecked = !!c),
      u != null &&
        (e.checked = u && typeof u != 'function' && typeof u != 'symbol'),
      b != null &&
      typeof b != 'function' &&
      typeof b != 'symbol' &&
      typeof b != 'boolean'
        ? (e.name = '' + At(b))
        : e.removeAttribute('name');
  }
  function qd(e, t, i, r, u, c, y, b) {
    if (
      (c != null &&
        typeof c != 'function' &&
        typeof c != 'symbol' &&
        typeof c != 'boolean' &&
        (e.type = c),
      t != null || i != null)
    ) {
      if (!((c !== 'submit' && c !== 'reset') || t != null)) return;
      (i = i != null ? '' + At(i) : ''),
        (t = t != null ? '' + At(t) : i),
        b || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = r ?? u),
      (r = typeof r != 'function' && typeof r != 'symbol' && !!r),
      (e.checked = b ? e.checked : !!r),
      (e.defaultChecked = !!r),
      y != null &&
        typeof y != 'function' &&
        typeof y != 'symbol' &&
        typeof y != 'boolean' &&
        (e.name = y);
  }
  function Eu(e, t, i) {
    (t === 'number' && vr(e.ownerDocument) === e) ||
      e.defaultValue === '' + i ||
      (e.defaultValue = '' + i);
  }
  function Xa(e, t, i, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < i.length; u++) t['$' + i[u]] = !0;
      for (i = 0; i < e.length; i++)
        (u = t.hasOwnProperty('$' + e[i].value)),
          e[i].selected !== u && (e[i].selected = u),
          u && r && (e[i].defaultSelected = !0);
    } else {
      for (i = '' + At(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          (e[u].selected = !0), r && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Gd(e, t, i) {
    if (
      t != null &&
      ((t = '' + At(t)), t !== e.value && (e.value = t), i == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = i != null ? '' + At(i) : '';
  }
  function Yd(e, t, i, r) {
    if (t == null) {
      if (r != null) {
        if (i != null) throw Error(s(92));
        if (ne(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        i = r;
      }
      i == null && (i = ''), (t = i);
    }
    (i = At(t)),
      (e.defaultValue = i),
      (r = e.textContent),
      r === i && r !== '' && r !== null && (e.value = r);
  }
  function ka(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var X1 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Xd(e, t, i) {
    var r = t.indexOf('--') === 0;
    i == null || typeof i == 'boolean' || i === ''
      ? r
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : r
        ? e.setProperty(t, i)
        : typeof i != 'number' || i === 0 || X1.has(t)
          ? t === 'float'
            ? (e.cssFloat = i)
            : (e[t] = ('' + i).trim())
          : (e[t] = i + 'px');
  }
  function kd(e, t, i) {
    if (t != null && typeof t != 'object') throw Error(s(62));
    if (((e = e.style), i != null)) {
      for (var r in i)
        !i.hasOwnProperty(r) ||
          (t != null && t.hasOwnProperty(r)) ||
          (r.indexOf('--') === 0
            ? e.setProperty(r, '')
            : r === 'float'
              ? (e.cssFloat = '')
              : (e[r] = ''));
      for (var u in t)
        (r = t[u]), t.hasOwnProperty(u) && i[u] !== r && Xd(e, u, r);
    } else for (var c in t) t.hasOwnProperty(c) && Xd(e, c, t[c]);
  }
  function Au(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var k1 = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    K1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function br(e) {
    return K1.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Ru = null;
  function Du(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ka = null,
    Qa = null;
  function Kd(e) {
    var t = qa(e);
    if (t && (e = t.stateNode)) {
      var i = e[st] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Tu(
              e,
              i.value,
              i.defaultValue,
              i.defaultValue,
              i.checked,
              i.defaultChecked,
              i.type,
              i.name,
            ),
            (t = i.name),
            i.type === 'radio' && t != null)
          ) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                'input[name="' + Rt('' + t) + '"][type="radio"]',
              ),
                t = 0;
              t < i.length;
              t++
            ) {
              var r = i[t];
              if (r !== e && r.form === e.form) {
                var u = r[st] || null;
                if (!u) throw Error(s(90));
                Tu(
                  r,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < i.length; t++)
              (r = i[t]), r.form === e.form && Pd(r);
          }
          break e;
        case 'textarea':
          Gd(e, i.value, i.defaultValue);
          break e;
        case 'select':
          (t = i.value), t != null && Xa(e, !!i.multiple, t, !1);
      }
    }
  }
  var wu = !1;
  function Qd(e, t, i) {
    if (wu) return e(t, i);
    wu = !0;
    try {
      var r = e(t);
      return r;
    } finally {
      if (
        ((wu = !1),
        (Ka !== null || Qa !== null) &&
          (ns(), Ka && ((t = Ka), (e = Qa), (Qa = Ka = null), Kd(t), e)))
      )
        for (t = 0; t < e.length; t++) Kd(e[t]);
    }
  }
  function Pi(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var r = i[st] || null;
    if (r === null) return null;
    i = r[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != 'function') throw Error(s(231, t, typeof i));
    return i;
  }
  var Ou = !1;
  if (nn)
    try {
      var qi = {};
      Object.defineProperty(qi, 'passive', {
        get: function () {
          Ou = !0;
        },
      }),
        window.addEventListener('test', qi, qi),
        window.removeEventListener('test', qi, qi);
    } catch {
      Ou = !1;
    }
  var jn = null,
    Cu = null,
    Sr = null;
  function Zd() {
    if (Sr) return Sr;
    var e,
      t = Cu,
      i = t.length,
      r,
      u = 'value' in jn ? jn.value : jn.textContent,
      c = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++);
    var y = i - e;
    for (r = 1; r <= y && t[i - r] === u[c - r]; r++);
    return (Sr = u.slice(e, 1 < r ? 1 - r : void 0));
  }
  function xr(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Tr() {
    return !0;
  }
  function Fd() {
    return !1;
  }
  function ut(e) {
    function t(i, r, u, c, y) {
      (this._reactName = i),
        (this._targetInst = u),
        (this.type = r),
        (this.nativeEvent = c),
        (this.target = y),
        (this.currentTarget = null);
      for (var b in e)
        e.hasOwnProperty(b) && ((i = e[b]), (this[b] = i ? i(c) : c[b]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Tr
          : Fd),
        (this.isPropagationStopped = Fd),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != 'unknown' && (i.returnValue = !1),
            (this.isDefaultPrevented = Tr));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
            (this.isPropagationStopped = Tr));
        },
        persist: function () {},
        isPersistent: Tr,
      }),
      t
    );
  }
  var fa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Er = ut(fa),
    Gi = W({}, fa, { view: 0, detail: 0 }),
    Q1 = ut(Gi),
    Mu,
    _u,
    Yi,
    Ar = W({}, Gi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Nu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Yi &&
              (Yi && e.type === 'mousemove'
                ? ((Mu = e.screenX - Yi.screenX), (_u = e.screenY - Yi.screenY))
                : (_u = Mu = 0),
              (Yi = e)),
            Mu);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : _u;
      },
    }),
    $d = ut(Ar),
    Z1 = W({}, Ar, { dataTransfer: 0 }),
    F1 = ut(Z1),
    $1 = W({}, Gi, { relatedTarget: 0 }),
    zu = ut($1),
    J1 = W({}, fa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    W1 = ut(J1),
    I1 = W({}, fa, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    eb = ut(I1),
    tb = W({}, fa, { data: 0 }),
    Jd = ut(tb),
    nb = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    ab = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    ib = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function lb(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = ib[e])
        ? !!t[e]
        : !1;
  }
  function Nu() {
    return lb;
  }
  var rb = W({}, Gi, {
      key: function (e) {
        if (e.key) {
          var t = nb[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = xr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? ab[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Nu,
      charCode: function (e) {
        return e.type === 'keypress' ? xr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? xr(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    sb = ut(rb),
    ub = W({}, Ar, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Wd = ut(ub),
    ob = W({}, Gi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Nu,
    }),
    cb = ut(ob),
    fb = W({}, fa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    db = ut(fb),
    hb = W({}, Ar, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    mb = ut(hb),
    pb = W({}, fa, { newState: 0, oldState: 0 }),
    yb = ut(pb),
    gb = [9, 13, 27, 32],
    ju = nn && 'CompositionEvent' in window,
    Xi = null;
  nn && 'documentMode' in document && (Xi = document.documentMode);
  var vb = nn && 'TextEvent' in window && !Xi,
    Id = nn && (!ju || (Xi && 8 < Xi && 11 >= Xi)),
    eh = ' ',
    th = !1;
  function nh(e, t) {
    switch (e) {
      case 'keyup':
        return gb.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function ah(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Za = !1;
  function bb(e, t) {
    switch (e) {
      case 'compositionend':
        return ah(t);
      case 'keypress':
        return t.which !== 32 ? null : ((th = !0), eh);
      case 'textInput':
        return (e = t.data), e === eh && th ? null : e;
      default:
        return null;
    }
  }
  function Sb(e, t) {
    if (Za)
      return e === 'compositionend' || (!ju && nh(e, t))
        ? ((e = Zd()), (Sr = Cu = jn = null), (Za = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Id && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var xb = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ih(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!xb[e.type] : t === 'textarea';
  }
  function lh(e, t, i, r) {
    Ka ? (Qa ? Qa.push(r) : (Qa = [r])) : (Ka = r),
      (t = ss(t, 'onChange')),
      0 < t.length &&
        ((i = new Er('onChange', 'change', null, i, r)),
        e.push({ event: i, listeners: t }));
  }
  var ki = null,
    Ki = null;
  function Tb(e) {
    _p(e, 0);
  }
  function Rr(e) {
    var t = Hi(e);
    if (Pd(t)) return e;
  }
  function rh(e, t) {
    if (e === 'change') return t;
  }
  var sh = !1;
  if (nn) {
    var Vu;
    if (nn) {
      var Uu = 'oninput' in document;
      if (!Uu) {
        var uh = document.createElement('div');
        uh.setAttribute('oninput', 'return;'),
          (Uu = typeof uh.oninput == 'function');
      }
      Vu = Uu;
    } else Vu = !1;
    sh = Vu && (!document.documentMode || 9 < document.documentMode);
  }
  function oh() {
    ki && (ki.detachEvent('onpropertychange', ch), (Ki = ki = null));
  }
  function ch(e) {
    if (e.propertyName === 'value' && Rr(Ki)) {
      var t = [];
      lh(t, Ki, e, Du(e)), Qd(Tb, t);
    }
  }
  function Eb(e, t, i) {
    e === 'focusin'
      ? (oh(), (ki = t), (Ki = i), ki.attachEvent('onpropertychange', ch))
      : e === 'focusout' && oh();
  }
  function Ab(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Rr(Ki);
  }
  function Rb(e, t) {
    if (e === 'click') return Rr(t);
  }
  function Db(e, t) {
    if (e === 'input' || e === 'change') return Rr(t);
  }
  function wb(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var dt = typeof Object.is == 'function' ? Object.is : wb;
  function Qi(e, t) {
    if (dt(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var i = Object.keys(e),
      r = Object.keys(t);
    if (i.length !== r.length) return !1;
    for (r = 0; r < i.length; r++) {
      var u = i[r];
      if (!yu.call(t, u) || !dt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function fh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function dh(e, t) {
    var i = fh(e);
    e = 0;
    for (var r; i; ) {
      if (i.nodeType === 3) {
        if (((r = e + i.textContent.length), e <= t && r >= t))
          return { node: i, offset: t - e };
        e = r;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = fh(i);
    }
  }
  function hh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? hh(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function mh(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = vr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == 'string';
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = vr(e.document);
    }
    return t;
  }
  function Lu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function Ob(e, t) {
    var i = mh(t);
    t = e.focusedElem;
    var r = e.selectionRange;
    if (
      i !== t &&
      t &&
      t.ownerDocument &&
      hh(t.ownerDocument.documentElement, t)
    ) {
      if (r !== null && Lu(t)) {
        if (
          ((e = r.start),
          (i = r.end),
          i === void 0 && (i = e),
          'selectionStart' in t)
        )
          (t.selectionStart = e),
            (t.selectionEnd = Math.min(i, t.value.length));
        else if (
          ((i = ((e = t.ownerDocument || document) && e.defaultView) || window),
          i.getSelection)
        ) {
          i = i.getSelection();
          var u = t.textContent.length,
            c = Math.min(r.start, u);
          (r = r.end === void 0 ? c : Math.min(r.end, u)),
            !i.extend && c > r && ((u = r), (r = c), (c = u)),
            (u = dh(t, c));
          var y = dh(t, r);
          u &&
            y &&
            (i.rangeCount !== 1 ||
              i.anchorNode !== u.node ||
              i.anchorOffset !== u.offset ||
              i.focusNode !== y.node ||
              i.focusOffset !== y.offset) &&
            ((e = e.createRange()),
            e.setStart(u.node, u.offset),
            i.removeAllRanges(),
            c > r
              ? (i.addRange(e), i.extend(y.node, y.offset))
              : (e.setEnd(y.node, y.offset), i.addRange(e)));
        }
      }
      for (e = [], i = t; (i = i.parentNode); )
        i.nodeType === 1 &&
          e.push({ element: i, left: i.scrollLeft, top: i.scrollTop });
      for (typeof t.focus == 'function' && t.focus(), t = 0; t < e.length; t++)
        (i = e[t]),
          (i.element.scrollLeft = i.left),
          (i.element.scrollTop = i.top);
    }
  }
  var Cb = nn && 'documentMode' in document && 11 >= document.documentMode,
    Fa = null,
    Bu = null,
    Zi = null,
    Hu = !1;
  function ph(e, t, i) {
    var r =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Hu ||
      Fa == null ||
      Fa !== vr(r) ||
      ((r = Fa),
      'selectionStart' in r && Lu(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Zi && Qi(Zi, r)) ||
        ((Zi = r),
        (r = ss(Bu, 'onSelect')),
        0 < r.length &&
          ((t = new Er('onSelect', 'select', null, t, i)),
          e.push({ event: t, listeners: r }),
          (t.target = Fa))));
  }
  function da(e, t) {
    var i = {};
    return (
      (i[e.toLowerCase()] = t.toLowerCase()),
      (i['Webkit' + e] = 'webkit' + t),
      (i['Moz' + e] = 'moz' + t),
      i
    );
  }
  var $a = {
      animationend: da('Animation', 'AnimationEnd'),
      animationiteration: da('Animation', 'AnimationIteration'),
      animationstart: da('Animation', 'AnimationStart'),
      transitionrun: da('Transition', 'TransitionRun'),
      transitionstart: da('Transition', 'TransitionStart'),
      transitioncancel: da('Transition', 'TransitionCancel'),
      transitionend: da('Transition', 'TransitionEnd'),
    },
    Pu = {},
    yh = {};
  nn &&
    ((yh = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete $a.animationend.animation,
      delete $a.animationiteration.animation,
      delete $a.animationstart.animation),
    'TransitionEvent' in window || delete $a.transitionend.transition);
  function ha(e) {
    if (Pu[e]) return Pu[e];
    if (!$a[e]) return e;
    var t = $a[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in yh) return (Pu[e] = t[i]);
    return e;
  }
  var gh = ha('animationend'),
    vh = ha('animationiteration'),
    bh = ha('animationstart'),
    Mb = ha('transitionrun'),
    _b = ha('transitionstart'),
    zb = ha('transitioncancel'),
    Sh = ha('transitionend'),
    xh = new Map(),
    Th =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
        ' ',
      );
  function Bt(e, t) {
    xh.set(e, t), ca(t, [e]);
  }
  var Dt = [],
    Ja = 0,
    qu = 0;
  function Dr() {
    for (var e = Ja, t = (qu = Ja = 0); t < e; ) {
      var i = Dt[t];
      Dt[t++] = null;
      var r = Dt[t];
      Dt[t++] = null;
      var u = Dt[t];
      Dt[t++] = null;
      var c = Dt[t];
      if (((Dt[t++] = null), r !== null && u !== null)) {
        var y = r.pending;
        y === null ? (u.next = u) : ((u.next = y.next), (y.next = u)),
          (r.pending = u);
      }
      c !== 0 && Eh(i, u, c);
    }
  }
  function wr(e, t, i, r) {
    (Dt[Ja++] = e),
      (Dt[Ja++] = t),
      (Dt[Ja++] = i),
      (Dt[Ja++] = r),
      (qu |= r),
      (e.lanes |= r),
      (e = e.alternate),
      e !== null && (e.lanes |= r);
  }
  function Gu(e, t, i, r) {
    return wr(e, t, i, r), Or(e);
  }
  function Vn(e, t) {
    return wr(e, null, null, t), Or(e);
  }
  function Eh(e, t, i) {
    e.lanes |= i;
    var r = e.alternate;
    r !== null && (r.lanes |= i);
    for (var u = !1, c = e.return; c !== null; )
      (c.childLanes |= i),
        (r = c.alternate),
        r !== null && (r.childLanes |= i),
        c.tag === 22 &&
          ((e = c.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = c),
        (c = c.return);
    u &&
      t !== null &&
      e.tag === 3 &&
      ((c = e.stateNode),
      (u = 31 - ft(i)),
      (c = c.hiddenUpdates),
      (e = c[u]),
      e === null ? (c[u] = [t]) : e.push(t),
      (t.lane = i | 536870912));
  }
  function Or(e) {
    if (50 < bl) throw ((bl = 0), (Fo = null), Error(s(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Wa = {},
    Ah = new WeakMap();
  function wt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var i = Ah.get(e);
      return i !== void 0
        ? i
        : ((t = { value: e, source: t, stack: I(t) }), Ah.set(e, t), t);
    }
    return { value: e, source: t, stack: I(t) };
  }
  var Ia = [],
    ei = 0,
    Cr = null,
    Mr = 0,
    Ot = [],
    Ct = 0,
    ma = null,
    ln = 1,
    rn = '';
  function pa(e, t) {
    (Ia[ei++] = Mr), (Ia[ei++] = Cr), (Cr = e), (Mr = t);
  }
  function Rh(e, t, i) {
    (Ot[Ct++] = ln), (Ot[Ct++] = rn), (Ot[Ct++] = ma), (ma = e);
    var r = ln;
    e = rn;
    var u = 32 - ft(r) - 1;
    (r &= ~(1 << u)), (i += 1);
    var c = 32 - ft(t) + u;
    if (30 < c) {
      var y = u - (u % 5);
      (c = (r & ((1 << y) - 1)).toString(32)),
        (r >>= y),
        (u -= y),
        (ln = (1 << (32 - ft(t) + u)) | (i << u) | r),
        (rn = c + e);
    } else (ln = (1 << c) | (i << u) | r), (rn = e);
  }
  function Yu(e) {
    e.return !== null && (pa(e, 1), Rh(e, 1, 0));
  }
  function Xu(e) {
    for (; e === Cr; )
      (Cr = Ia[--ei]), (Ia[ei] = null), (Mr = Ia[--ei]), (Ia[ei] = null);
    for (; e === ma; )
      (ma = Ot[--Ct]),
        (Ot[Ct] = null),
        (rn = Ot[--Ct]),
        (Ot[Ct] = null),
        (ln = Ot[--Ct]),
        (Ot[Ct] = null);
  }
  var lt = null,
    Qe = null,
    pe = !1,
    Ht = null,
    Kt = !1,
    ku = Error(s(519));
  function ya(e) {
    var t = Error(s(418, ''));
    throw (Ji(wt(t, e)), ku);
  }
  function Dh(e) {
    var t = e.stateNode,
      i = e.type,
      r = e.memoizedProps;
    switch (((t[We] = e), (t[st] = r), i)) {
      case 'dialog':
        de('cancel', t), de('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        de('load', t);
        break;
      case 'video':
      case 'audio':
        for (i = 0; i < xl.length; i++) de(xl[i], t);
        break;
      case 'source':
        de('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        de('error', t), de('load', t);
        break;
      case 'details':
        de('toggle', t);
        break;
      case 'input':
        de('invalid', t),
          qd(
            t,
            r.value,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name,
            !0,
          ),
          gr(t);
        break;
      case 'select':
        de('invalid', t);
        break;
      case 'textarea':
        de('invalid', t), Yd(t, r.value, r.defaultValue, r.children), gr(t);
    }
    (i = r.children),
      (typeof i != 'string' && typeof i != 'number' && typeof i != 'bigint') ||
      t.textContent === '' + i ||
      r.suppressHydrationWarning === !0 ||
      Vp(t.textContent, i)
        ? (r.popover != null && (de('beforetoggle', t), de('toggle', t)),
          r.onScroll != null && de('scroll', t),
          r.onScrollEnd != null && de('scrollend', t),
          r.onClick != null && (t.onclick = us),
          (t = !0))
        : (t = !1),
      t || ya(e);
  }
  function wh(e) {
    for (lt = e.return; lt; )
      switch (lt.tag) {
        case 3:
        case 27:
          Kt = !0;
          return;
        case 5:
        case 13:
          Kt = !1;
          return;
        default:
          lt = lt.return;
      }
  }
  function Fi(e) {
    if (e !== lt) return !1;
    if (!pe) return wh(e), (pe = !0), !1;
    var t = !1,
      i;
    if (
      ((i = e.tag !== 3 && e.tag !== 27) &&
        ((i = e.tag === 5) &&
          ((i = e.type),
          (i =
            !(i !== 'form' && i !== 'button') || dc(e.type, e.memoizedProps))),
        (i = !i)),
      i && (t = !0),
      t && Qe && ya(e),
      wh(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((i = e.data), i === '/$')) {
              if (t === 0) {
                Qe = qt(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== '$' && i !== '$!' && i !== '$?') || t++;
          e = e.nextSibling;
        }
        Qe = null;
      }
    } else Qe = lt ? qt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function $i() {
    (Qe = lt = null), (pe = !1);
  }
  function Ji(e) {
    Ht === null ? (Ht = [e]) : Ht.push(e);
  }
  var Wi = Error(s(460)),
    Oh = Error(s(474)),
    Ku = { then: function () {} };
  function Ch(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function _r() {}
  function Mh(e, t, i) {
    switch (
      ((i = e[i]),
      i === void 0 ? e.push(t) : i !== t && (t.then(_r, _r), (t = i)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), e === Wi ? Error(s(483)) : e);
      default:
        if (typeof t.status == 'string') t.then(_r, _r);
        else {
          if (((e = Te), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = t),
            (e.status = 'pending'),
            e.then(
              function (r) {
                if (t.status === 'pending') {
                  var u = t;
                  (u.status = 'fulfilled'), (u.value = r);
                }
              },
              function (r) {
                if (t.status === 'pending') {
                  var u = t;
                  (u.status = 'rejected'), (u.reason = r);
                }
              },
            );
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), e === Wi ? Error(s(483)) : e);
        }
        throw ((Ii = t), Wi);
    }
  }
  var Ii = null;
  function _h() {
    if (Ii === null) throw Error(s(459));
    var e = Ii;
    return (Ii = null), e;
  }
  var ti = null,
    el = 0;
  function zr(e) {
    var t = el;
    return (el += 1), ti === null && (ti = []), Mh(ti, e, t);
  }
  function tl(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Nr(e, t) {
    throw t.$$typeof === f
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e,
          ),
        ));
  }
  function zh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Nh(e) {
    function t(C, D) {
      if (e) {
        var z = C.deletions;
        z === null ? ((C.deletions = [D]), (C.flags |= 16)) : z.push(D);
      }
    }
    function i(C, D) {
      if (!e) return null;
      for (; D !== null; ) t(C, D), (D = D.sibling);
      return null;
    }
    function r(C) {
      for (var D = new Map(); C !== null; )
        C.key !== null ? D.set(C.key, C) : D.set(C.index, C), (C = C.sibling);
      return D;
    }
    function u(C, D) {
      return (C = Qn(C, D)), (C.index = 0), (C.sibling = null), C;
    }
    function c(C, D, z) {
      return (
        (C.index = z),
        e
          ? ((z = C.alternate),
            z !== null
              ? ((z = z.index), z < D ? ((C.flags |= 33554434), D) : z)
              : ((C.flags |= 33554434), D))
          : ((C.flags |= 1048576), D)
      );
    }
    function y(C) {
      return e && C.alternate === null && (C.flags |= 33554434), C;
    }
    function b(C, D, z, P) {
      return D === null || D.tag !== 6
        ? ((D = qo(z, C.mode, P)), (D.return = C), D)
        : ((D = u(D, z)), (D.return = C), D);
    }
    function x(C, D, z, P) {
      var F = z.type;
      return F === h
        ? H(C, D, z.props.children, P, z.key)
        : D !== null &&
            (D.elementType === F ||
              (typeof F == 'object' &&
                F !== null &&
                F.$$typeof === N &&
                zh(F) === D.type))
          ? ((D = u(D, z.props)), tl(D, z), (D.return = C), D)
          : ((D = Jr(z.type, z.key, z.props, null, C.mode, P)),
            tl(D, z),
            (D.return = C),
            D);
    }
    function w(C, D, z, P) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== z.containerInfo ||
        D.stateNode.implementation !== z.implementation
        ? ((D = Go(z, C.mode, P)), (D.return = C), D)
        : ((D = u(D, z.children || [])), (D.return = C), D);
    }
    function H(C, D, z, P, F) {
      return D === null || D.tag !== 7
        ? ((D = Da(z, C.mode, P, F)), (D.return = C), D)
        : ((D = u(D, z)), (D.return = C), D);
    }
    function G(C, D, z) {
      if (
        (typeof D == 'string' && D !== '') ||
        typeof D == 'number' ||
        typeof D == 'bigint'
      )
        return (D = qo('' + D, C.mode, z)), (D.return = C), D;
      if (typeof D == 'object' && D !== null) {
        switch (D.$$typeof) {
          case d:
            return (
              (z = Jr(D.type, D.key, D.props, null, C.mode, z)),
              tl(z, D),
              (z.return = C),
              z
            );
          case m:
            return (D = Go(D, C.mode, z)), (D.return = C), D;
          case N:
            var P = D._init;
            return (D = P(D._payload)), G(C, D, z);
        }
        if (ne(D) || Y(D))
          return (D = Da(D, C.mode, z, null)), (D.return = C), D;
        if (typeof D.then == 'function') return G(C, zr(D), z);
        if (D.$$typeof === T) return G(C, Zr(C, D), z);
        Nr(C, D);
      }
      return null;
    }
    function j(C, D, z, P) {
      var F = D !== null ? D.key : null;
      if (
        (typeof z == 'string' && z !== '') ||
        typeof z == 'number' ||
        typeof z == 'bigint'
      )
        return F !== null ? null : b(C, D, '' + z, P);
      if (typeof z == 'object' && z !== null) {
        switch (z.$$typeof) {
          case d:
            return z.key === F ? x(C, D, z, P) : null;
          case m:
            return z.key === F ? w(C, D, z, P) : null;
          case N:
            return (F = z._init), (z = F(z._payload)), j(C, D, z, P);
        }
        if (ne(z) || Y(z)) return F !== null ? null : H(C, D, z, P, null);
        if (typeof z.then == 'function') return j(C, D, zr(z), P);
        if (z.$$typeof === T) return j(C, D, Zr(C, z), P);
        Nr(C, z);
      }
      return null;
    }
    function B(C, D, z, P, F) {
      if (
        (typeof P == 'string' && P !== '') ||
        typeof P == 'number' ||
        typeof P == 'bigint'
      )
        return (C = C.get(z) || null), b(D, C, '' + P, F);
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case d:
            return (
              (C = C.get(P.key === null ? z : P.key) || null), x(D, C, P, F)
            );
          case m:
            return (
              (C = C.get(P.key === null ? z : P.key) || null), w(D, C, P, F)
            );
          case N:
            var ce = P._init;
            return (P = ce(P._payload)), B(C, D, z, P, F);
        }
        if (ne(P) || Y(P)) return (C = C.get(z) || null), H(D, C, P, F, null);
        if (typeof P.then == 'function') return B(C, D, z, zr(P), F);
        if (P.$$typeof === T) return B(C, D, z, Zr(D, P), F);
        Nr(D, P);
      }
      return null;
    }
    function J(C, D, z, P) {
      for (
        var F = null, ce = null, te = D, ae = (D = 0), Ke = null;
        te !== null && ae < z.length;
        ae++
      ) {
        te.index > ae ? ((Ke = te), (te = null)) : (Ke = te.sibling);
        var ye = j(C, te, z[ae], P);
        if (ye === null) {
          te === null && (te = Ke);
          break;
        }
        e && te && ye.alternate === null && t(C, te),
          (D = c(ye, D, ae)),
          ce === null ? (F = ye) : (ce.sibling = ye),
          (ce = ye),
          (te = Ke);
      }
      if (ae === z.length) return i(C, te), pe && pa(C, ae), F;
      if (te === null) {
        for (; ae < z.length; ae++)
          (te = G(C, z[ae], P)),
            te !== null &&
              ((D = c(te, D, ae)),
              ce === null ? (F = te) : (ce.sibling = te),
              (ce = te));
        return pe && pa(C, ae), F;
      }
      for (te = r(te); ae < z.length; ae++)
        (Ke = B(te, C, ae, z[ae], P)),
          Ke !== null &&
            (e &&
              Ke.alternate !== null &&
              te.delete(Ke.key === null ? ae : Ke.key),
            (D = c(Ke, D, ae)),
            ce === null ? (F = Ke) : (ce.sibling = Ke),
            (ce = Ke));
      return (
        e &&
          te.forEach(function (ea) {
            return t(C, ea);
          }),
        pe && pa(C, ae),
        F
      );
    }
    function re(C, D, z, P) {
      if (z == null) throw Error(s(151));
      for (
        var F = null, ce = null, te = D, ae = (D = 0), Ke = null, ye = z.next();
        te !== null && !ye.done;
        ae++, ye = z.next()
      ) {
        te.index > ae ? ((Ke = te), (te = null)) : (Ke = te.sibling);
        var ea = j(C, te, ye.value, P);
        if (ea === null) {
          te === null && (te = Ke);
          break;
        }
        e && te && ea.alternate === null && t(C, te),
          (D = c(ea, D, ae)),
          ce === null ? (F = ea) : (ce.sibling = ea),
          (ce = ea),
          (te = Ke);
      }
      if (ye.done) return i(C, te), pe && pa(C, ae), F;
      if (te === null) {
        for (; !ye.done; ae++, ye = z.next())
          (ye = G(C, ye.value, P)),
            ye !== null &&
              ((D = c(ye, D, ae)),
              ce === null ? (F = ye) : (ce.sibling = ye),
              (ce = ye));
        return pe && pa(C, ae), F;
      }
      for (te = r(te); !ye.done; ae++, ye = z.next())
        (ye = B(te, C, ae, ye.value, P)),
          ye !== null &&
            (e &&
              ye.alternate !== null &&
              te.delete(ye.key === null ? ae : ye.key),
            (D = c(ye, D, ae)),
            ce === null ? (F = ye) : (ce.sibling = ye),
            (ce = ye));
      return (
        e &&
          te.forEach(function (KS) {
            return t(C, KS);
          }),
        pe && pa(C, ae),
        F
      );
    }
    function Ne(C, D, z, P) {
      if (
        (typeof z == 'object' &&
          z !== null &&
          z.type === h &&
          z.key === null &&
          (z = z.props.children),
        typeof z == 'object' && z !== null)
      ) {
        switch (z.$$typeof) {
          case d:
            e: {
              for (var F = z.key; D !== null; ) {
                if (D.key === F) {
                  if (((F = z.type), F === h)) {
                    if (D.tag === 7) {
                      i(C, D.sibling),
                        (P = u(D, z.props.children)),
                        (P.return = C),
                        (C = P);
                      break e;
                    }
                  } else if (
                    D.elementType === F ||
                    (typeof F == 'object' &&
                      F !== null &&
                      F.$$typeof === N &&
                      zh(F) === D.type)
                  ) {
                    i(C, D.sibling),
                      (P = u(D, z.props)),
                      tl(P, z),
                      (P.return = C),
                      (C = P);
                    break e;
                  }
                  i(C, D);
                  break;
                } else t(C, D);
                D = D.sibling;
              }
              z.type === h
                ? ((P = Da(z.props.children, C.mode, P, z.key)),
                  (P.return = C),
                  (C = P))
                : ((P = Jr(z.type, z.key, z.props, null, C.mode, P)),
                  tl(P, z),
                  (P.return = C),
                  (C = P));
            }
            return y(C);
          case m:
            e: {
              for (F = z.key; D !== null; ) {
                if (D.key === F)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === z.containerInfo &&
                    D.stateNode.implementation === z.implementation
                  ) {
                    i(C, D.sibling),
                      (P = u(D, z.children || [])),
                      (P.return = C),
                      (C = P);
                    break e;
                  } else {
                    i(C, D);
                    break;
                  }
                else t(C, D);
                D = D.sibling;
              }
              (P = Go(z, C.mode, P)), (P.return = C), (C = P);
            }
            return y(C);
          case N:
            return (F = z._init), (z = F(z._payload)), Ne(C, D, z, P);
        }
        if (ne(z)) return J(C, D, z, P);
        if (Y(z)) {
          if (((F = Y(z)), typeof F != 'function')) throw Error(s(150));
          return (z = F.call(z)), re(C, D, z, P);
        }
        if (typeof z.then == 'function') return Ne(C, D, zr(z), P);
        if (z.$$typeof === T) return Ne(C, D, Zr(C, z), P);
        Nr(C, z);
      }
      return (typeof z == 'string' && z !== '') ||
        typeof z == 'number' ||
        typeof z == 'bigint'
        ? ((z = '' + z),
          D !== null && D.tag === 6
            ? (i(C, D.sibling), (P = u(D, z)), (P.return = C), (C = P))
            : (i(C, D), (P = qo(z, C.mode, P)), (P.return = C), (C = P)),
          y(C))
        : i(C, D);
    }
    return function (C, D, z, P) {
      try {
        el = 0;
        var F = Ne(C, D, z, P);
        return (ti = null), F;
      } catch (te) {
        if (te === Wi) throw te;
        var ce = Nt(29, te, null, C.mode);
        return (ce.lanes = P), (ce.return = C), ce;
      } finally {
      }
    };
  }
  var ga = Nh(!0),
    jh = Nh(!1),
    ni = ve(null),
    jr = ve(0);
  function Vh(e, t) {
    (e = gn), De(jr, e), De(ni, t), (gn = e | t.baseLanes);
  }
  function Qu() {
    De(jr, gn), De(ni, ni.current);
  }
  function Zu() {
    (gn = jr.current), Le(ni), Le(jr);
  }
  var Mt = ve(null),
    Qt = null;
  function Un(e) {
    var t = e.alternate;
    De(qe, qe.current & 1),
      De(Mt, e),
      Qt === null &&
        (t === null || ni.current !== null || t.memoizedState !== null) &&
        (Qt = e);
  }
  function Uh(e) {
    if (e.tag === 22) {
      if ((De(qe, qe.current), De(Mt, e), Qt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Qt = e);
      }
    } else Ln();
  }
  function Ln() {
    De(qe, qe.current), De(Mt, Mt.current);
  }
  function sn(e) {
    Le(Mt), Qt === e && (Qt = null), Le(qe);
  }
  var qe = ve(0);
  function Vr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === '$?' || i.data === '$!')
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Nb =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (i, r) {
                  e.push(r);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (i) {
                  return i();
                });
            };
          },
    jb = n.unstable_scheduleCallback,
    Vb = n.unstable_NormalPriority,
    Ge = {
      $$typeof: T,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Fu() {
    return { controller: new Nb(), data: new Map(), refCount: 0 };
  }
  function nl(e) {
    e.refCount--,
      e.refCount === 0 &&
        jb(Vb, function () {
          e.controller.abort();
        });
  }
  var al = null,
    $u = 0,
    ai = 0,
    ii = null;
  function Ub(e, t) {
    if (al === null) {
      var i = (al = []);
      ($u = 0),
        (ai = ac()),
        (ii = {
          status: 'pending',
          value: void 0,
          then: function (r) {
            i.push(r);
          },
        });
    }
    return $u++, t.then(Lh, Lh), t;
  }
  function Lh() {
    if (--$u === 0 && al !== null) {
      ii !== null && (ii.status = 'fulfilled');
      var e = al;
      (al = null), (ai = 0), (ii = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Lb(e, t) {
    var i = [],
      r = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (u) {
          i.push(u);
        },
      };
    return (
      e.then(
        function () {
          (r.status = 'fulfilled'), (r.value = t);
          for (var u = 0; u < i.length; u++) (0, i[u])(t);
        },
        function (u) {
          for (r.status = 'rejected', r.reason = u, u = 0; u < i.length; u++)
            (0, i[u])(void 0);
        },
      ),
      r
    );
  }
  var Bh = k.S;
  k.S = function (e, t) {
    typeof t == 'object' &&
      t !== null &&
      typeof t.then == 'function' &&
      Ub(e, t),
      Bh !== null && Bh(e, t);
  };
  var va = ve(null);
  function Ju() {
    var e = va.current;
    return e !== null ? e : Te.pooledCache;
  }
  function Ur(e, t) {
    t === null ? De(va, va.current) : De(va, t.pool);
  }
  function Hh() {
    var e = Ju();
    return e === null ? null : { parent: Ge._currentValue, pool: e };
  }
  var Bn = 0,
    oe = null,
    be = null,
    Be = null,
    Lr = !1,
    li = !1,
    ba = !1,
    Br = 0,
    il = 0,
    ri = null,
    Bb = 0;
  function Ve() {
    throw Error(s(321));
  }
  function Wu(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!dt(e[i], t[i])) return !1;
    return !0;
  }
  function Iu(e, t, i, r, u, c) {
    return (
      (Bn = c),
      (oe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (k.H = e === null || e.memoizedState === null ? Sa : Hn),
      (ba = !1),
      (c = i(r, u)),
      (ba = !1),
      li && (c = qh(t, i, r, u)),
      Ph(e),
      c
    );
  }
  function Ph(e) {
    k.H = Zt;
    var t = be !== null && be.next !== null;
    if (((Bn = 0), (Be = be = oe = null), (Lr = !1), (il = 0), (ri = null), t))
      throw Error(s(300));
    e === null ||
      Xe ||
      ((e = e.dependencies), e !== null && Qr(e) && (Xe = !0));
  }
  function qh(e, t, i, r) {
    oe = e;
    var u = 0;
    do {
      if ((li && (ri = null), (il = 0), (li = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (Be = be = null), e.updateQueue != null)) {
        var c = e.updateQueue;
        (c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0);
      }
      (k.H = xa), (c = t(i, r));
    } while (li);
    return c;
  }
  function Hb() {
    var e = k.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ll(t) : t),
      (e = e.useState()[0]),
      (be !== null ? be.memoizedState : null) !== e && (oe.flags |= 1024),
      t
    );
  }
  function eo() {
    var e = Br !== 0;
    return (Br = 0), e;
  }
  function to(e, t, i) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i);
  }
  function no(e) {
    if (Lr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Lr = !1;
    }
    (Bn = 0), (Be = be = oe = null), (li = !1), (il = Br = 0), (ri = null);
  }
  function ot() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Be === null ? (oe.memoizedState = Be = e) : (Be = Be.next = e), Be;
  }
  function He() {
    if (be === null) {
      var e = oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = be.next;
    var t = Be === null ? oe.memoizedState : Be.next;
    if (t !== null) (Be = t), (be = e);
    else {
      if (e === null)
        throw oe.alternate === null ? Error(s(467)) : Error(s(310));
      (be = e),
        (e = {
          memoizedState: be.memoizedState,
          baseState: be.baseState,
          baseQueue: be.baseQueue,
          queue: be.queue,
          next: null,
        }),
        Be === null ? (oe.memoizedState = Be = e) : (Be = Be.next = e);
    }
    return Be;
  }
  var Hr;
  Hr = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function ll(e) {
    var t = il;
    return (
      (il += 1),
      ri === null && (ri = []),
      (e = Mh(ri, e, t)),
      (t = oe),
      (Be === null ? t.memoizedState : Be.next) === null &&
        ((t = t.alternate),
        (k.H = t === null || t.memoizedState === null ? Sa : Hn)),
      e
    );
  }
  function Pr(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ll(e);
      if (e.$$typeof === T) return Ie(e);
    }
    throw Error(s(438, String(e)));
  }
  function ao(e) {
    var t = null,
      i = oe.updateQueue;
    if ((i !== null && (t = i.memoCache), t == null)) {
      var r = oe.alternate;
      r !== null &&
        ((r = r.updateQueue),
        r !== null &&
          ((r = r.memoCache),
          r != null &&
            (t = {
              data: r.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      i === null && ((i = Hr()), (oe.updateQueue = i)),
      (i.memoCache = t),
      (i = t.data[t.index]),
      i === void 0)
    )
      for (i = t.data[t.index] = Array(e), r = 0; r < e; r++) i[r] = q;
    return t.index++, i;
  }
  function un(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function qr(e) {
    var t = He();
    return io(t, be, e);
  }
  function io(e, t, i) {
    var r = e.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = i;
    var u = e.baseQueue,
      c = r.pending;
    if (c !== null) {
      if (u !== null) {
        var y = u.next;
        (u.next = c.next), (c.next = y);
      }
      (t.baseQueue = u = c), (r.pending = null);
    }
    if (((c = e.baseState), u === null)) e.memoizedState = c;
    else {
      t = u.next;
      var b = (y = null),
        x = null,
        w = t,
        H = !1;
      do {
        var G = w.lane & -536870913;
        if (G !== w.lane ? (me & G) === G : (Bn & G) === G) {
          var j = w.revertLane;
          if (j === 0)
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: w.action,
                  hasEagerState: w.hasEagerState,
                  eagerState: w.eagerState,
                  next: null,
                }),
              G === ai && (H = !0);
          else if ((Bn & j) === j) {
            (w = w.next), j === ai && (H = !0);
            continue;
          } else
            (G = {
              lane: 0,
              revertLane: w.revertLane,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null,
            }),
              x === null ? ((b = x = G), (y = c)) : (x = x.next = G),
              (oe.lanes |= j),
              (Zn |= j);
          (G = w.action),
            ba && i(c, G),
            (c = w.hasEagerState ? w.eagerState : i(c, G));
        } else
          (j = {
            lane: G,
            revertLane: w.revertLane,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          }),
            x === null ? ((b = x = j), (y = c)) : (x = x.next = j),
            (oe.lanes |= G),
            (Zn |= G);
        w = w.next;
      } while (w !== null && w !== t);
      if (
        (x === null ? (y = c) : (x.next = b),
        !dt(c, e.memoizedState) && ((Xe = !0), H && ((i = ii), i !== null)))
      )
        throw i;
      (e.memoizedState = c),
        (e.baseState = y),
        (e.baseQueue = x),
        (r.lastRenderedState = c);
    }
    return u === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function lo(e) {
    var t = He(),
      i = t.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var r = i.dispatch,
      u = i.pending,
      c = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var y = (u = u.next);
      do (c = e(c, y.action)), (y = y.next);
      while (y !== u);
      dt(c, t.memoizedState) || (Xe = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (i.lastRenderedState = c);
    }
    return [c, r];
  }
  function Gh(e, t, i) {
    var r = oe,
      u = He(),
      c = pe;
    if (c) {
      if (i === void 0) throw Error(s(407));
      i = i();
    } else i = t();
    var y = !dt((be || u).memoizedState, i);
    if (
      (y && ((u.memoizedState = i), (Xe = !0)),
      (u = u.queue),
      uo(kh.bind(null, r, u, e), [e]),
      u.getSnapshot !== t || y || (Be !== null && Be.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        si(9, Xh.bind(null, r, u, i, t), { destroy: void 0 }, null),
        Te === null)
      )
        throw Error(s(349));
      c || Bn & 60 || Yh(r, t, i);
    }
    return i;
  }
  function Yh(e, t, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = oe.updateQueue),
      t === null
        ? ((t = Hr()), (oe.updateQueue = t), (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e));
  }
  function Xh(e, t, i, r) {
    (t.value = i), (t.getSnapshot = r), Kh(t) && Qh(e);
  }
  function kh(e, t, i) {
    return i(function () {
      Kh(t) && Qh(e);
    });
  }
  function Kh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !dt(e, i);
    } catch {
      return !0;
    }
  }
  function Qh(e) {
    var t = Vn(e, 2);
    t !== null && rt(t, e, 2);
  }
  function ro(e) {
    var t = ot();
    if (typeof e == 'function') {
      var i = e;
      if (((e = i()), ba)) {
        zn(!0);
        try {
          i();
        } finally {
          zn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Zh(e, t, i, r) {
    return (e.baseState = i), io(e, be, typeof r == 'function' ? r : un);
  }
  function Pb(e, t, i, r, u) {
    if (Xr(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var c = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          c.listeners.push(y);
        },
      };
      k.T !== null ? i(!0) : (c.isTransition = !1),
        r(c),
        (i = t.pending),
        i === null
          ? ((c.next = t.pending = c), Fh(t, c))
          : ((c.next = i.next), (t.pending = i.next = c));
    }
  }
  function Fh(e, t) {
    var i = t.action,
      r = t.payload,
      u = e.state;
    if (t.isTransition) {
      var c = k.T,
        y = {};
      k.T = y;
      try {
        var b = i(u, r),
          x = k.S;
        x !== null && x(y, b), $h(e, t, b);
      } catch (w) {
        so(e, t, w);
      } finally {
        k.T = c;
      }
    } else
      try {
        (c = i(u, r)), $h(e, t, c);
      } catch (w) {
        so(e, t, w);
      }
  }
  function $h(e, t, i) {
    i !== null && typeof i == 'object' && typeof i.then == 'function'
      ? i.then(
          function (r) {
            Jh(e, t, r);
          },
          function (r) {
            return so(e, t, r);
          },
        )
      : Jh(e, t, i);
  }
  function Jh(e, t, i) {
    (t.status = 'fulfilled'),
      (t.value = i),
      Wh(t),
      (e.state = i),
      (t = e.pending),
      t !== null &&
        ((i = t.next),
        i === t ? (e.pending = null) : ((i = i.next), (t.next = i), Fh(e, i)));
  }
  function so(e, t, i) {
    var r = e.pending;
    if (((e.pending = null), r !== null)) {
      r = r.next;
      do (t.status = 'rejected'), (t.reason = i), Wh(t), (t = t.next);
      while (t !== r);
    }
    e.action = null;
  }
  function Wh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ih(e, t) {
    return t;
  }
  function em(e, t) {
    if (pe) {
      var i = Te.formState;
      if (i !== null) {
        e: {
          var r = oe;
          if (pe) {
            if (Qe) {
              t: {
                for (var u = Qe, c = Kt; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break t;
                  }
                  if (((u = qt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (c = u.data), (u = c === 'F!' || c === 'F' ? u : null);
              }
              if (u) {
                (Qe = qt(u.nextSibling)), (r = u.data === 'F!');
                break e;
              }
            }
            ya(r);
          }
          r = !1;
        }
        r && (t = i[0]);
      }
    }
    return (
      (i = ot()),
      (i.memoizedState = i.baseState = t),
      (r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ih,
        lastRenderedState: t,
      }),
      (i.queue = r),
      (i = vm.bind(null, oe, r)),
      (r.dispatch = i),
      (r = ro(!1)),
      (c = mo.bind(null, oe, !1, r.queue)),
      (r = ot()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (r.queue = u),
      (i = Pb.bind(null, oe, u, c, i)),
      (u.dispatch = i),
      (r.memoizedState = e),
      [t, i, !1]
    );
  }
  function tm(e) {
    var t = He();
    return nm(t, be, e);
  }
  function nm(e, t, i) {
    (t = io(e, t, Ih)[0]),
      (e = qr(un)[0]),
      (t =
        typeof t == 'object' && t !== null && typeof t.then == 'function'
          ? ll(t)
          : t);
    var r = He(),
      u = r.queue,
      c = u.dispatch;
    return (
      i !== r.memoizedState &&
        ((oe.flags |= 2048),
        si(9, qb.bind(null, u, i), { destroy: void 0 }, null)),
      [t, c, e]
    );
  }
  function qb(e, t) {
    e.action = t;
  }
  function am(e) {
    var t = He(),
      i = be;
    if (i !== null) return nm(t, i, e);
    He(), (t = t.memoizedState), (i = He());
    var r = i.queue.dispatch;
    return (i.memoizedState = e), [t, r, !1];
  }
  function si(e, t, i, r) {
    return (
      (e = { tag: e, create: t, inst: i, deps: r, next: null }),
      (t = oe.updateQueue),
      t === null && ((t = Hr()), (oe.updateQueue = t)),
      (i = t.lastEffect),
      i === null
        ? (t.lastEffect = e.next = e)
        : ((r = i.next), (i.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function im() {
    return He().memoizedState;
  }
  function Gr(e, t, i, r) {
    var u = ot();
    (oe.flags |= e),
      (u.memoizedState = si(
        1 | t,
        i,
        { destroy: void 0 },
        r === void 0 ? null : r,
      ));
  }
  function Yr(e, t, i, r) {
    var u = He();
    r = r === void 0 ? null : r;
    var c = u.memoizedState.inst;
    be !== null && r !== null && Wu(r, be.memoizedState.deps)
      ? (u.memoizedState = si(t, i, c, r))
      : ((oe.flags |= e), (u.memoizedState = si(1 | t, i, c, r)));
  }
  function lm(e, t) {
    Gr(8390656, 8, e, t);
  }
  function uo(e, t) {
    Yr(2048, 8, e, t);
  }
  function rm(e, t) {
    return Yr(4, 2, e, t);
  }
  function sm(e, t) {
    return Yr(4, 4, e, t);
  }
  function um(e, t) {
    if (typeof t == 'function') {
      e = e();
      var i = t(e);
      return function () {
        typeof i == 'function' ? i() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function om(e, t, i) {
    (i = i != null ? i.concat([e]) : null), Yr(4, 4, um.bind(null, t, e), i);
  }
  function oo() {}
  function cm(e, t) {
    var i = He();
    t = t === void 0 ? null : t;
    var r = i.memoizedState;
    return t !== null && Wu(t, r[1]) ? r[0] : ((i.memoizedState = [e, t]), e);
  }
  function fm(e, t) {
    var i = He();
    t = t === void 0 ? null : t;
    var r = i.memoizedState;
    if (t !== null && Wu(t, r[1])) return r[0];
    if (((r = e()), ba)) {
      zn(!0);
      try {
        e();
      } finally {
        zn(!1);
      }
    }
    return (i.memoizedState = [r, t]), r;
  }
  function co(e, t, i) {
    return i === void 0 || Bn & 1073741824
      ? (e.memoizedState = t)
      : ((e.memoizedState = i), (e = hp()), (oe.lanes |= e), (Zn |= e), i);
  }
  function dm(e, t, i, r) {
    return dt(i, t)
      ? i
      : ni.current !== null
        ? ((e = co(e, i, r)), dt(e, t) || (Xe = !0), e)
        : Bn & 42
          ? ((e = hp()), (oe.lanes |= e), (Zn |= e), t)
          : ((Xe = !0), (e.memoizedState = i));
  }
  function hm(e, t, i, r, u) {
    var c = Z.p;
    Z.p = c !== 0 && 8 > c ? c : 8;
    var y = k.T,
      b = {};
    (k.T = b), mo(e, !1, t, i);
    try {
      var x = u(),
        w = k.S;
      if (
        (w !== null && w(b, x),
        x !== null && typeof x == 'object' && typeof x.then == 'function')
      ) {
        var H = Lb(x, r);
        rl(e, t, H, yt(e));
      } else rl(e, t, r, yt(e));
    } catch (G) {
      rl(e, t, { then: function () {}, status: 'rejected', reason: G }, yt());
    } finally {
      (Z.p = c), (k.T = y);
    }
  }
  function Gb() {}
  function fo(e, t, i, r) {
    if (e.tag !== 5) throw Error(s(476));
    var u = mm(e).queue;
    hm(
      e,
      u,
      t,
      he,
      i === null
        ? Gb
        : function () {
            return pm(e), i(r);
          },
    );
  }
  function mm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: he,
      baseState: he,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: he,
      },
      next: null,
    };
    var i = {};
    return (
      (t.next = {
        memoizedState: i,
        baseState: i,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: un,
          lastRenderedState: i,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function pm(e) {
    var t = mm(e).next.queue;
    rl(e, t, {}, yt());
  }
  function ho() {
    return Ie(Dl);
  }
  function ym() {
    return He().memoizedState;
  }
  function gm() {
    return He().memoizedState;
  }
  function Yb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var i = yt();
          e = Gn(i);
          var r = Yn(t, e, i);
          r !== null && (rt(r, t, i), ol(r, t, i)),
            (t = { cache: Fu() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Xb(e, t, i) {
    var r = yt();
    (i = {
      lane: r,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Xr(e)
        ? bm(t, i)
        : ((i = Gu(e, t, i, r)), i !== null && (rt(i, e, r), Sm(i, t, r)));
  }
  function vm(e, t, i) {
    var r = yt();
    rl(e, t, i, r);
  }
  function rl(e, t, i, r) {
    var u = {
      lane: r,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Xr(e)) bm(t, u);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var y = t.lastRenderedState,
            b = c(y, i);
          if (((u.hasEagerState = !0), (u.eagerState = b), dt(b, y)))
            return wr(e, t, u, 0), Te === null && Dr(), !1;
        } catch {
        } finally {
        }
      if (((i = Gu(e, t, u, r)), i !== null))
        return rt(i, e, r), Sm(i, t, r), !0;
    }
    return !1;
  }
  function mo(e, t, i, r) {
    if (
      ((r = {
        lane: 2,
        revertLane: ac(),
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Xr(e))
    ) {
      if (t) throw Error(s(479));
    } else (t = Gu(e, i, r, 2)), t !== null && rt(t, e, 2);
  }
  function Xr(e) {
    var t = e.alternate;
    return e === oe || (t !== null && t === oe);
  }
  function bm(e, t) {
    li = Lr = !0;
    var i = e.pending;
    i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (e.pending = t);
  }
  function Sm(e, t, i) {
    if (i & 4194176) {
      var r = t.lanes;
      (r &= e.pendingLanes), (i |= r), (t.lanes = i), _d(e, i);
    }
  }
  var Zt = {
    readContext: Ie,
    use: Pr,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useLayoutEffect: Ve,
    useInsertionEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
  };
  (Zt.useCacheRefresh = Ve),
    (Zt.useMemoCache = Ve),
    (Zt.useHostTransitionStatus = Ve),
    (Zt.useFormState = Ve),
    (Zt.useActionState = Ve),
    (Zt.useOptimistic = Ve);
  var Sa = {
    readContext: Ie,
    use: Pr,
    useCallback: function (e, t) {
      return (ot().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ie,
    useEffect: lm,
    useImperativeHandle: function (e, t, i) {
      (i = i != null ? i.concat([e]) : null),
        Gr(4194308, 4, um.bind(null, t, e), i);
    },
    useLayoutEffect: function (e, t) {
      return Gr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      Gr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var i = ot();
      t = t === void 0 ? null : t;
      var r = e();
      if (ba) {
        zn(!0);
        try {
          e();
        } finally {
          zn(!1);
        }
      }
      return (i.memoizedState = [r, t]), r;
    },
    useReducer: function (e, t, i) {
      var r = ot();
      if (i !== void 0) {
        var u = i(t);
        if (ba) {
          zn(!0);
          try {
            i(t);
          } finally {
            zn(!1);
          }
        }
      } else u = t;
      return (
        (r.memoizedState = r.baseState = u),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: u,
        }),
        (r.queue = e),
        (e = e.dispatch = Xb.bind(null, oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ot();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = ro(e);
      var t = e.queue,
        i = vm.bind(null, oe, t);
      return (t.dispatch = i), [e.memoizedState, i];
    },
    useDebugValue: oo,
    useDeferredValue: function (e, t) {
      var i = ot();
      return co(i, e, t);
    },
    useTransition: function () {
      var e = ro(!1);
      return (
        (e = hm.bind(null, oe, e.queue, !0, !1)),
        (ot().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, i) {
      var r = oe,
        u = ot();
      if (pe) {
        if (i === void 0) throw Error(s(407));
        i = i();
      } else {
        if (((i = t()), Te === null)) throw Error(s(349));
        me & 60 || Yh(r, t, i);
      }
      u.memoizedState = i;
      var c = { value: i, getSnapshot: t };
      return (
        (u.queue = c),
        lm(kh.bind(null, r, c, e), [e]),
        (r.flags |= 2048),
        si(9, Xh.bind(null, r, c, i, t), { destroy: void 0 }, null),
        i
      );
    },
    useId: function () {
      var e = ot(),
        t = Te.identifierPrefix;
      if (pe) {
        var i = rn,
          r = ln;
        (i = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + i),
          (t = ':' + t + 'R' + i),
          (i = Br++),
          0 < i && (t += 'H' + i.toString(32)),
          (t += ':');
      } else (i = Bb++), (t = ':' + t + 'r' + i.toString(32) + ':');
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (ot().memoizedState = Yb.bind(null, oe));
    },
  };
  (Sa.useMemoCache = ao),
    (Sa.useHostTransitionStatus = ho),
    (Sa.useFormState = em),
    (Sa.useActionState = em),
    (Sa.useOptimistic = function (e) {
      var t = ot();
      t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = i), (t = mo.bind(null, oe, !0, i)), (i.dispatch = t), [e, t]
      );
    });
  var Hn = {
    readContext: Ie,
    use: Pr,
    useCallback: cm,
    useContext: Ie,
    useEffect: uo,
    useImperativeHandle: om,
    useInsertionEffect: rm,
    useLayoutEffect: sm,
    useMemo: fm,
    useReducer: qr,
    useRef: im,
    useState: function () {
      return qr(un);
    },
    useDebugValue: oo,
    useDeferredValue: function (e, t) {
      var i = He();
      return dm(i, be.memoizedState, e, t);
    },
    useTransition: function () {
      var e = qr(un)[0],
        t = He().memoizedState;
      return [typeof e == 'boolean' ? e : ll(e), t];
    },
    useSyncExternalStore: Gh,
    useId: ym,
  };
  (Hn.useCacheRefresh = gm),
    (Hn.useMemoCache = ao),
    (Hn.useHostTransitionStatus = ho),
    (Hn.useFormState = tm),
    (Hn.useActionState = tm),
    (Hn.useOptimistic = function (e, t) {
      var i = He();
      return Zh(i, be, e, t);
    });
  var xa = {
    readContext: Ie,
    use: Pr,
    useCallback: cm,
    useContext: Ie,
    useEffect: uo,
    useImperativeHandle: om,
    useInsertionEffect: rm,
    useLayoutEffect: sm,
    useMemo: fm,
    useReducer: lo,
    useRef: im,
    useState: function () {
      return lo(un);
    },
    useDebugValue: oo,
    useDeferredValue: function (e, t) {
      var i = He();
      return be === null ? co(i, e, t) : dm(i, be.memoizedState, e, t);
    },
    useTransition: function () {
      var e = lo(un)[0],
        t = He().memoizedState;
      return [typeof e == 'boolean' ? e : ll(e), t];
    },
    useSyncExternalStore: Gh,
    useId: ym,
  };
  (xa.useCacheRefresh = gm),
    (xa.useMemoCache = ao),
    (xa.useHostTransitionStatus = ho),
    (xa.useFormState = am),
    (xa.useActionState = am),
    (xa.useOptimistic = function (e, t) {
      var i = He();
      return be !== null
        ? Zh(i, be, e, t)
        : ((i.baseState = e), [e, i.queue.dispatch]);
    });
  function po(e, t, i, r) {
    (t = e.memoizedState),
      (i = i(r, t)),
      (i = i == null ? t : W({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var yo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ee(e) === e : !1;
    },
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var r = yt(),
        u = Gn(r);
      (u.payload = t),
        i != null && (u.callback = i),
        (t = Yn(e, u, r)),
        t !== null && (rt(t, e, r), ol(t, e, r));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var r = yt(),
        u = Gn(r);
      (u.tag = 1),
        (u.payload = t),
        i != null && (u.callback = i),
        (t = Yn(e, u, r)),
        t !== null && (rt(t, e, r), ol(t, e, r));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = yt(),
        r = Gn(i);
      (r.tag = 2),
        t != null && (r.callback = t),
        (t = Yn(e, r, i)),
        t !== null && (rt(t, e, i), ol(t, e, i));
    },
  };
  function xm(e, t, i, r, u, c, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, c, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Qi(i, r) || !Qi(u, c)
          : !0
    );
  }
  function Tm(e, t, i, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(i, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(i, r),
      t.state !== e && yo.enqueueReplaceState(t, t.state, null);
  }
  function Ta(e, t) {
    var i = t;
    if ('ref' in t) {
      i = {};
      for (var r in t) r !== 'ref' && (i[r] = t[r]);
    }
    if ((e = e.defaultProps)) {
      i === t && (i = W({}, i));
      for (var u in e) i[u] === void 0 && (i[u] = e[u]);
    }
    return i;
  }
  var kr =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' &&
                e !== null &&
                typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function Em(e) {
    kr(e);
  }
  function Am(e) {
    console.error(e);
  }
  function Rm(e) {
    kr(e);
  }
  function Kr(e, t) {
    try {
      var i = e.onUncaughtError;
      i(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Dm(e, t, i) {
    try {
      var r = e.onCaughtError;
      r(i.value, {
        componentStack: i.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function go(e, t, i) {
    return (
      (i = Gn(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        Kr(e, t);
      }),
      i
    );
  }
  function wm(e) {
    return (e = Gn(e)), (e.tag = 3), e;
  }
  function Om(e, t, i, r) {
    var u = i.type.getDerivedStateFromError;
    if (typeof u == 'function') {
      var c = r.value;
      (e.payload = function () {
        return u(c);
      }),
        (e.callback = function () {
          Dm(t, i, r);
        });
    }
    var y = i.stateNode;
    y !== null &&
      typeof y.componentDidCatch == 'function' &&
      (e.callback = function () {
        Dm(t, i, r),
          typeof u != 'function' &&
            (Fn === null ? (Fn = new Set([this])) : Fn.add(this));
        var b = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: b !== null ? b : '',
        });
      });
  }
  function kb(e, t, i, r, u) {
    if (
      ((i.flags |= 32768),
      r !== null && typeof r == 'object' && typeof r.then == 'function')
    ) {
      if (
        ((t = i.alternate),
        t !== null && ul(t, i, u, !0),
        (i = Mt.current),
        i !== null)
      ) {
        switch (i.tag) {
          case 13:
            return (
              Qt === null ? Wo() : i.alternate === null && ze === 0 && (ze = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = u),
              r === Ku
                ? (i.flags |= 16384)
                : ((t = i.updateQueue),
                  t === null ? (i.updateQueue = new Set([r])) : t.add(r),
                  ec(e, r, u)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              r === Ku
                ? (i.flags |= 16384)
                : ((t = i.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r]),
                      }),
                      (i.updateQueue = t))
                    : ((i = t.retryQueue),
                      i === null ? (t.retryQueue = new Set([r])) : i.add(r)),
                  ec(e, r, u)),
              !1
            );
        }
        throw Error(s(435, i.tag));
      }
      return ec(e, r, u), Wo(), !1;
    }
    if (pe)
      return (
        (t = Mt.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            r !== ku && ((e = Error(s(422), { cause: r })), Ji(wt(e, i))))
          : (r !== ku && ((t = Error(s(423), { cause: r })), Ji(wt(t, i))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (r = wt(r, i)),
            (u = go(e.stateNode, r, u)),
            zo(e, u),
            ze !== 4 && (ze = 2)),
        !1
      );
    var c = Error(s(520), { cause: r });
    if (
      ((c = wt(c, i)),
      gl === null ? (gl = [c]) : gl.push(c),
      ze !== 4 && (ze = 2),
      t === null)
    )
      return !0;
    (r = wt(r, i)), (i = t);
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (e = u & -u),
            (i.lanes |= e),
            (e = go(i.stateNode, r, e)),
            zo(i, e),
            !1
          );
        case 1:
          if (
            ((t = i.type),
            (c = i.stateNode),
            (i.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (c !== null &&
                  typeof c.componentDidCatch == 'function' &&
                  (Fn === null || !Fn.has(c)))))
          )
            return (
              (i.flags |= 65536),
              (u &= -u),
              (i.lanes |= u),
              (u = wm(u)),
              Om(u, e, i, r),
              zo(i, u),
              !1
            );
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Cm = Error(s(461)),
    Xe = !1;
  function Ze(e, t, i, r) {
    t.child = e === null ? jh(t, null, i, r) : ga(t, e.child, i, r);
  }
  function Mm(e, t, i, r, u) {
    i = i.render;
    var c = t.ref;
    if ('ref' in r) {
      var y = {};
      for (var b in r) b !== 'ref' && (y[b] = r[b]);
    } else y = r;
    return (
      Aa(t),
      (r = Iu(e, t, i, y, c, u)),
      (b = eo()),
      e !== null && !Xe
        ? (to(e, t, u), on(e, t, u))
        : (pe && b && Yu(t), (t.flags |= 1), Ze(e, t, r, u), t.child)
    );
  }
  function _m(e, t, i, r, u) {
    if (e === null) {
      var c = i.type;
      return typeof c == 'function' &&
        !Po(c) &&
        c.defaultProps === void 0 &&
        i.compare === null
        ? ((t.tag = 15), (t.type = c), zm(e, t, c, r, u))
        : ((e = Jr(i.type, null, r, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !Do(e, u))) {
      var y = c.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : Qi), i(y, r) && e.ref === t.ref)
      )
        return on(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Qn(c, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function zm(e, t, i, r, u) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Qi(c, r) && e.ref === t.ref)
        if (((Xe = !1), (t.pendingProps = r = c), Do(e, u)))
          e.flags & 131072 && (Xe = !0);
        else return (t.lanes = e.lanes), on(e, t, u);
    }
    return vo(e, t, i, r, u);
  }
  function Nm(e, t, i) {
    var r = t.pendingProps,
      u = r.children,
      c = (t.stateNode._pendingVisibility & 2) !== 0,
      y = e !== null ? e.memoizedState : null;
    if ((sl(e, t), r.mode === 'hidden' || c)) {
      if (t.flags & 128) {
        if (((r = y !== null ? y.baseLanes | i : i), e !== null)) {
          for (u = t.child = e.child, c = 0; u !== null; )
            (c = c | u.lanes | u.childLanes), (u = u.sibling);
          t.childLanes = c & ~r;
        } else (t.childLanes = 0), (t.child = null);
        return jm(e, t, r, i);
      }
      if (i & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ur(t, y !== null ? y.cachePool : null),
          y !== null ? Vh(t, y) : Qu(),
          Uh(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          jm(e, t, y !== null ? y.baseLanes | i : i, i)
        );
    } else
      y !== null
        ? (Ur(t, y.cachePool), Vh(t, y), Ln(), (t.memoizedState = null))
        : (e !== null && Ur(t, null), Qu(), Ln());
    return Ze(e, t, u, i), t.child;
  }
  function jm(e, t, i, r) {
    var u = Ju();
    return (
      (u = u === null ? null : { parent: Ge._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: i, cachePool: u }),
      e !== null && Ur(t, null),
      Qu(),
      Uh(t),
      e !== null && ul(e, t, r, !0),
      null
    );
  }
  function sl(e, t) {
    var i = t.ref;
    if (i === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof i != 'function' && typeof i != 'object') throw Error(s(284));
      (e === null || e.ref !== i) && (t.flags |= 2097664);
    }
  }
  function vo(e, t, i, r, u) {
    return (
      Aa(t),
      (i = Iu(e, t, i, r, void 0, u)),
      (r = eo()),
      e !== null && !Xe
        ? (to(e, t, u), on(e, t, u))
        : (pe && r && Yu(t), (t.flags |= 1), Ze(e, t, i, u), t.child)
    );
  }
  function Vm(e, t, i, r, u, c) {
    return (
      Aa(t),
      (t.updateQueue = null),
      (i = qh(t, r, i, u)),
      Ph(e),
      (r = eo()),
      e !== null && !Xe
        ? (to(e, t, c), on(e, t, c))
        : (pe && r && Yu(t), (t.flags |= 1), Ze(e, t, i, c), t.child)
    );
  }
  function Um(e, t, i, r, u) {
    if ((Aa(t), t.stateNode === null)) {
      var c = Wa,
        y = i.contextType;
      typeof y == 'object' && y !== null && (c = Ie(y)),
        (c = new i(r, c)),
        (t.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = yo),
        (t.stateNode = c),
        (c._reactInternals = t),
        (c = t.stateNode),
        (c.props = r),
        (c.state = t.memoizedState),
        (c.refs = {}),
        Mo(t),
        (y = i.contextType),
        (c.context = typeof y == 'object' && y !== null ? Ie(y) : Wa),
        (c.state = t.memoizedState),
        (y = i.getDerivedStateFromProps),
        typeof y == 'function' && (po(t, i, y, r), (c.state = t.memoizedState)),
        typeof i.getDerivedStateFromProps == 'function' ||
          typeof c.getSnapshotBeforeUpdate == 'function' ||
          (typeof c.UNSAFE_componentWillMount != 'function' &&
            typeof c.componentWillMount != 'function') ||
          ((y = c.state),
          typeof c.componentWillMount == 'function' && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == 'function' &&
            c.UNSAFE_componentWillMount(),
          y !== c.state && yo.enqueueReplaceState(c, c.state, null),
          fl(t, r, c, u),
          cl(),
          (c.state = t.memoizedState)),
        typeof c.componentDidMount == 'function' && (t.flags |= 4194308),
        (r = !0);
    } else if (e === null) {
      c = t.stateNode;
      var b = t.memoizedProps,
        x = Ta(i, b);
      c.props = x;
      var w = c.context,
        H = i.contextType;
      (y = Wa), typeof H == 'object' && H !== null && (y = Ie(H));
      var G = i.getDerivedStateFromProps;
      (H =
        typeof G == 'function' ||
        typeof c.getSnapshotBeforeUpdate == 'function'),
        (b = t.pendingProps !== b),
        H ||
          (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof c.componentWillReceiveProps != 'function') ||
          ((b || w !== y) && Tm(t, c, r, y)),
        (qn = !1);
      var j = t.memoizedState;
      (c.state = j),
        fl(t, r, c, u),
        cl(),
        (w = t.memoizedState),
        b || j !== w || qn
          ? (typeof G == 'function' && (po(t, i, G, r), (w = t.memoizedState)),
            (x = qn || xm(t, i, x, r, j, w, y))
              ? (H ||
                  (typeof c.UNSAFE_componentWillMount != 'function' &&
                    typeof c.componentWillMount != 'function') ||
                  (typeof c.componentWillMount == 'function' &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == 'function' &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = w)),
            (c.props = r),
            (c.state = w),
            (c.context = y),
            (r = x))
          : (typeof c.componentDidMount == 'function' && (t.flags |= 4194308),
            (r = !1));
    } else {
      (c = t.stateNode),
        _o(e, t),
        (y = t.memoizedProps),
        (H = Ta(i, y)),
        (c.props = H),
        (G = t.pendingProps),
        (j = c.context),
        (w = i.contextType),
        (x = Wa),
        typeof w == 'object' && w !== null && (x = Ie(w)),
        (b = i.getDerivedStateFromProps),
        (w =
          typeof b == 'function' ||
          typeof c.getSnapshotBeforeUpdate == 'function') ||
          (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof c.componentWillReceiveProps != 'function') ||
          ((y !== G || j !== x) && Tm(t, c, r, x)),
        (qn = !1),
        (j = t.memoizedState),
        (c.state = j),
        fl(t, r, c, u),
        cl();
      var B = t.memoizedState;
      y !== G ||
      j !== B ||
      qn ||
      (e !== null && e.dependencies !== null && Qr(e.dependencies))
        ? (typeof b == 'function' && (po(t, i, b, r), (B = t.memoizedState)),
          (H =
            qn ||
            xm(t, i, H, r, j, B, x) ||
            (e !== null && e.dependencies !== null && Qr(e.dependencies)))
            ? (w ||
                (typeof c.UNSAFE_componentWillUpdate != 'function' &&
                  typeof c.componentWillUpdate != 'function') ||
                (typeof c.componentWillUpdate == 'function' &&
                  c.componentWillUpdate(r, B, x),
                typeof c.UNSAFE_componentWillUpdate == 'function' &&
                  c.UNSAFE_componentWillUpdate(r, B, x)),
              typeof c.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != 'function' ||
                (y === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != 'function' ||
                (y === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = B)),
          (c.props = r),
          (c.state = B),
          (c.context = x),
          (r = H))
        : (typeof c.componentDidUpdate != 'function' ||
            (y === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != 'function' ||
            (y === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return (
      (c = r),
      sl(e, t),
      (r = (t.flags & 128) !== 0),
      c || r
        ? ((c = t.stateNode),
          (i =
            r && typeof i.getDerivedStateFromError != 'function'
              ? null
              : c.render()),
          (t.flags |= 1),
          e !== null && r
            ? ((t.child = ga(t, e.child, null, u)),
              (t.child = ga(t, null, i, u)))
            : Ze(e, t, i, u),
          (t.memoizedState = c.state),
          (e = t.child))
        : (e = on(e, t, u)),
      e
    );
  }
  function Lm(e, t, i, r) {
    return $i(), (t.flags |= 256), Ze(e, t, i, r), t.child;
  }
  var bo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function So(e) {
    return { baseLanes: e, cachePool: Hh() };
  }
  function xo(e, t, i) {
    return (e = e !== null ? e.childLanes & ~i : 0), t && (e |= jt), e;
  }
  function Bm(e, t, i) {
    var r = t.pendingProps,
      u = !1,
      c = (t.flags & 128) !== 0,
      y;
    if (
      ((y = c) ||
        (y =
          e !== null && e.memoizedState === null ? !1 : (qe.current & 2) !== 0),
      y && ((u = !0), (t.flags &= -129)),
      (y = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (pe) {
        if ((u ? Un(t) : Ln(), pe)) {
          var b = Qe,
            x;
          if ((x = b)) {
            e: {
              for (x = b, b = Kt; x.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break e;
                }
                if (((x = qt(x.nextSibling)), x === null)) {
                  b = null;
                  break e;
                }
              }
              b = x;
            }
            b !== null
              ? ((t.memoizedState = {
                  dehydrated: b,
                  treeContext: ma !== null ? { id: ln, overflow: rn } : null,
                  retryLane: 536870912,
                }),
                (x = Nt(18, null, null, 0)),
                (x.stateNode = b),
                (x.return = t),
                (t.child = x),
                (lt = t),
                (Qe = null),
                (x = !0))
              : (x = !1);
          }
          x || ya(t);
        }
        if (
          ((b = t.memoizedState),
          b !== null && ((b = b.dehydrated), b !== null))
        )
          return b.data === '$!' ? (t.lanes = 16) : (t.lanes = 536870912), null;
        sn(t);
      }
      return (
        (b = r.children),
        (r = r.fallback),
        u
          ? (Ln(),
            (u = t.mode),
            (b = Eo({ mode: 'hidden', children: b }, u)),
            (r = Da(r, u, i, null)),
            (b.return = t),
            (r.return = t),
            (b.sibling = r),
            (t.child = b),
            (u = t.child),
            (u.memoizedState = So(i)),
            (u.childLanes = xo(e, y, i)),
            (t.memoizedState = bo),
            r)
          : (Un(t), To(t, b))
      );
    }
    if (
      ((x = e.memoizedState), x !== null && ((b = x.dehydrated), b !== null))
    ) {
      if (c)
        t.flags & 256
          ? (Un(t), (t.flags &= -257), (t = Ao(e, t, i)))
          : t.memoizedState !== null
            ? (Ln(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Ln(),
              (u = r.fallback),
              (b = t.mode),
              (r = Eo({ mode: 'visible', children: r.children }, b)),
              (u = Da(u, b, i, null)),
              (u.flags |= 2),
              (r.return = t),
              (u.return = t),
              (r.sibling = u),
              (t.child = r),
              ga(t, e.child, null, i),
              (r = t.child),
              (r.memoizedState = So(i)),
              (r.childLanes = xo(e, y, i)),
              (t.memoizedState = bo),
              (t = u));
      else if ((Un(t), b.data === '$!')) {
        if (((y = b.nextSibling && b.nextSibling.dataset), y)) var w = y.dgst;
        (y = w),
          (r = Error(s(419))),
          (r.stack = ''),
          (r.digest = y),
          Ji({ value: r, source: null, stack: null }),
          (t = Ao(e, t, i));
      } else if (
        (Xe || ul(e, t, i, !1), (y = (i & e.childLanes) !== 0), Xe || y)
      ) {
        if (((y = Te), y !== null)) {
          if (((r = i & -i), r & 42)) r = 1;
          else
            switch (r) {
              case 2:
                r = 1;
                break;
              case 8:
                r = 4;
                break;
              case 32:
                r = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                r = 64;
                break;
              case 268435456:
                r = 134217728;
                break;
              default:
                r = 0;
            }
          if (
            ((r = r & (y.suspendedLanes | i) ? 0 : r),
            r !== 0 && r !== x.retryLane)
          )
            throw ((x.retryLane = r), Vn(e, r), rt(y, e, r), Cm);
        }
        b.data === '$?' || Wo(), (t = Ao(e, t, i));
      } else
        b.data === '$?'
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = rS.bind(null, e)),
            (b._reactRetry = t),
            (t = null))
          : ((e = x.treeContext),
            (Qe = qt(b.nextSibling)),
            (lt = t),
            (pe = !0),
            (Ht = null),
            (Kt = !1),
            e !== null &&
              ((Ot[Ct++] = ln),
              (Ot[Ct++] = rn),
              (Ot[Ct++] = ma),
              (ln = e.id),
              (rn = e.overflow),
              (ma = t)),
            (t = To(t, r.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (Ln(),
        (u = r.fallback),
        (b = t.mode),
        (x = e.child),
        (w = x.sibling),
        (r = Qn(x, { mode: 'hidden', children: r.children })),
        (r.subtreeFlags = x.subtreeFlags & 31457280),
        w !== null ? (u = Qn(w, u)) : ((u = Da(u, b, i, null)), (u.flags |= 2)),
        (u.return = t),
        (r.return = t),
        (r.sibling = u),
        (t.child = r),
        (r = u),
        (u = t.child),
        (b = e.child.memoizedState),
        b === null
          ? (b = So(i))
          : ((x = b.cachePool),
            x !== null
              ? ((w = Ge._currentValue),
                (x = x.parent !== w ? { parent: w, pool: w } : x))
              : (x = Hh()),
            (b = { baseLanes: b.baseLanes | i, cachePool: x })),
        (u.memoizedState = b),
        (u.childLanes = xo(e, y, i)),
        (t.memoizedState = bo),
        r)
      : (Un(t),
        (i = e.child),
        (e = i.sibling),
        (i = Qn(i, { mode: 'visible', children: r.children })),
        (i.return = t),
        (i.sibling = null),
        e !== null &&
          ((y = t.deletions),
          y === null ? ((t.deletions = [e]), (t.flags |= 16)) : y.push(e)),
        (t.child = i),
        (t.memoizedState = null),
        i);
  }
  function To(e, t) {
    return (
      (t = Eo({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Eo(e, t) {
    return cp(e, t, 0, null);
  }
  function Ao(e, t, i) {
    return (
      ga(t, e.child, null, i),
      (e = To(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Hm(e, t, i) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Oo(e.return, t, i);
  }
  function Ro(e, t, i, r, u) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: i,
          tailMode: u,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = r),
        (c.tail = i),
        (c.tailMode = u));
  }
  function Pm(e, t, i) {
    var r = t.pendingProps,
      u = r.revealOrder,
      c = r.tail;
    if ((Ze(e, t, r.children, i), (r = qe.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Hm(e, i, t);
          else if (e.tag === 19) Hm(e, i, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    switch ((De(qe, r), u)) {
      case 'forwards':
        for (i = t.child, u = null; i !== null; )
          (e = i.alternate),
            e !== null && Vr(e) === null && (u = i),
            (i = i.sibling);
        (i = u),
          i === null
            ? ((u = t.child), (t.child = null))
            : ((u = i.sibling), (i.sibling = null)),
          Ro(t, !1, u, i, c);
        break;
      case 'backwards':
        for (i = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Vr(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = i), (i = u), (u = e);
        }
        Ro(t, !0, i, null, c);
        break;
      case 'together':
        Ro(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function on(e, t, i) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Zn |= t.lanes),
      !(i & t.childLanes))
    )
      if (e !== null) {
        if ((ul(e, t, i, !1), (i & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, i = Qn(e, e.pendingProps), t.child = i, i.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (i = i.sibling = Qn(e, e.pendingProps)),
          (i.return = t);
      i.sibling = null;
    }
    return t.child;
  }
  function Do(e, t) {
    return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && Qr(e)));
  }
  function Kb(e, t, i) {
    switch (t.tag) {
      case 3:
        or(t, t.stateNode.containerInfo),
          Pn(t, Ge, e.memoizedState.cache),
          $i();
        break;
      case 27:
      case 5:
        pu(t);
        break;
      case 4:
        or(t, t.stateNode.containerInfo);
        break;
      case 10:
        Pn(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null)
          return r.dehydrated !== null
            ? (Un(t), (t.flags |= 128), null)
            : i & t.child.childLanes
              ? Bm(e, t, i)
              : (Un(t), (e = on(e, t, i)), e !== null ? e.sibling : null);
        Un(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((r = (i & t.childLanes) !== 0),
          r || (ul(e, t, i, !1), (r = (i & t.childLanes) !== 0)),
          u)
        ) {
          if (r) return Pm(e, t, i);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          De(qe, qe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Nm(e, t, i);
      case 24:
        Pn(t, Ge, e.memoizedState.cache);
    }
    return on(e, t, i);
  }
  function qm(e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Xe = !0;
      else {
        if (!Do(e, i) && !(t.flags & 128)) return (Xe = !1), Kb(e, t, i);
        Xe = !!(e.flags & 131072);
      }
    else (Xe = !1), pe && t.flags & 1048576 && Rh(t, Mr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var r = t.elementType,
            u = r._init;
          if (((r = u(r._payload)), (t.type = r), typeof r == 'function'))
            Po(r)
              ? ((e = Ta(r, e)), (t.tag = 1), (t = Um(null, t, r, e, i)))
              : ((t.tag = 0), (t = vo(null, t, r, e, i)));
          else {
            if (r != null) {
              if (((u = r.$$typeof), u === A)) {
                (t.tag = 11), (t = Mm(null, t, r, e, i));
                break e;
              } else if (u === O) {
                (t.tag = 14), (t = _m(null, t, r, e, i));
                break e;
              }
            }
            throw ((t = K(r) || r), Error(s(306, t, '')));
          }
        }
        return t;
      case 0:
        return vo(e, t, t.type, t.pendingProps, i);
      case 1:
        return (r = t.type), (u = Ta(r, t.pendingProps)), Um(e, t, r, u, i);
      case 3:
        e: {
          if ((or(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          var c = t.pendingProps;
          (u = t.memoizedState), (r = u.element), _o(e, t), fl(t, c, null, i);
          var y = t.memoizedState;
          if (
            ((c = y.cache),
            Pn(t, Ge, c),
            c !== u.cache && Co(t, [Ge], i, !0),
            cl(),
            (c = y.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: c, isDehydrated: !1, cache: y.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Lm(e, t, c, i);
              break e;
            } else if (c !== r) {
              (r = wt(Error(s(424)), t)), Ji(r), (t = Lm(e, t, c, i));
              break e;
            } else
              for (
                Qe = qt(t.stateNode.containerInfo.firstChild),
                  lt = t,
                  pe = !0,
                  Ht = null,
                  Kt = !0,
                  i = jh(t, null, c, i),
                  t.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if (($i(), c === r)) {
              t = on(e, t, i);
              break e;
            }
            Ze(e, t, c, i);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          sl(e, t),
          e === null
            ? (i = Xp(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = i)
              : pe ||
                ((i = t.type),
                (e = t.pendingProps),
                (r = os(_n.current).createElement(i)),
                (r[We] = t),
                (r[st] = e),
                Fe(r, i, e),
                Ye(r),
                (t.stateNode = r))
            : (t.memoizedState = Xp(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          pu(t),
          e === null &&
            pe &&
            ((r = t.stateNode = qp(t.type, t.pendingProps, _n.current)),
            (lt = t),
            (Kt = !0),
            (Qe = qt(r.firstChild))),
          (r = t.pendingProps.children),
          e !== null || pe ? Ze(e, t, r, i) : (t.child = ga(t, null, r, i)),
          sl(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            pe &&
            ((u = r = Qe) &&
              ((r = TS(r, t.type, t.pendingProps, Kt)),
              r !== null
                ? ((t.stateNode = r),
                  (lt = t),
                  (Qe = qt(r.firstChild)),
                  (Kt = !1),
                  (u = !0))
                : (u = !1)),
            u || ya(t)),
          pu(t),
          (u = t.type),
          (c = t.pendingProps),
          (y = e !== null ? e.memoizedProps : null),
          (r = c.children),
          dc(u, c) ? (r = null) : y !== null && dc(u, y) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Iu(e, t, Hb, null, null, i)), (Dl._currentValue = u)),
          sl(e, t),
          Ze(e, t, r, i),
          t.child
        );
      case 6:
        return (
          e === null &&
            pe &&
            ((e = i = Qe) &&
              ((i = ES(i, t.pendingProps, Kt)),
              i !== null
                ? ((t.stateNode = i), (lt = t), (Qe = null), (e = !0))
                : (e = !1)),
            e || ya(t)),
          null
        );
      case 13:
        return Bm(e, t, i);
      case 4:
        return (
          or(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = ga(t, null, r, i)) : Ze(e, t, r, i),
          t.child
        );
      case 11:
        return Mm(e, t, t.type, t.pendingProps, i);
      case 7:
        return Ze(e, t, t.pendingProps, i), t.child;
      case 8:
        return Ze(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return Ze(e, t, t.pendingProps.children, i), t.child;
      case 10:
        return (
          (r = t.pendingProps),
          Pn(t, t.type, r.value),
          Ze(e, t, r.children, i),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (r = t.pendingProps.children),
          Aa(t),
          (u = Ie(u)),
          (r = r(u)),
          (t.flags |= 1),
          Ze(e, t, r, i),
          t.child
        );
      case 14:
        return _m(e, t, t.type, t.pendingProps, i);
      case 15:
        return zm(e, t, t.type, t.pendingProps, i);
      case 19:
        return Pm(e, t, i);
      case 22:
        return Nm(e, t, i);
      case 24:
        return (
          Aa(t),
          (r = Ie(Ge)),
          e === null
            ? ((u = Ju()),
              u === null &&
                ((u = Te),
                (c = Fu()),
                (u.pooledCache = c),
                c.refCount++,
                c !== null && (u.pooledCacheLanes |= i),
                (u = c)),
              (t.memoizedState = { parent: r, cache: u }),
              Mo(t),
              Pn(t, Ge, u))
            : (e.lanes & i && (_o(e, t), fl(t, null, null, i), cl()),
              (u = e.memoizedState),
              (c = t.memoizedState),
              u.parent !== r
                ? ((u = { parent: r, cache: r }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  Pn(t, Ge, r))
                : ((r = c.cache),
                  Pn(t, Ge, r),
                  r !== u.cache && Co(t, [Ge], i, !0))),
          Ze(e, t, t.pendingProps.children, i),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  var wo = ve(null),
    Ea = null,
    cn = null;
  function Pn(e, t, i) {
    De(wo, t._currentValue), (t._currentValue = i);
  }
  function fn(e) {
    (e._currentValue = wo.current), Le(wo);
  }
  function Oo(e, t, i) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function Co(e, t, i, r) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var y = u.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var b = c;
          c = u;
          for (var x = 0; x < t.length; x++)
            if (b.context === t[x]) {
              (c.lanes |= i),
                (b = c.alternate),
                b !== null && (b.lanes |= i),
                Oo(c.return, i, e),
                r || (y = null);
              break e;
            }
          c = b.next;
        }
      } else if (u.tag === 18) {
        if (((y = u.return), y === null)) throw Error(s(341));
        (y.lanes |= i),
          (c = y.alternate),
          c !== null && (c.lanes |= i),
          Oo(y, i, e),
          (y = null);
      } else y = u.child;
      if (y !== null) y.return = u;
      else
        for (y = u; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (((u = y.sibling), u !== null)) {
            (u.return = y.return), (y = u);
            break;
          }
          y = y.return;
        }
      u = y;
    }
  }
  function ul(e, t, i, r) {
    e = null;
    for (var u = t, c = !1; u !== null; ) {
      if (!c) {
        if (u.flags & 524288) c = !0;
        else if (u.flags & 262144) break;
      }
      if (u.tag === 10) {
        var y = u.alternate;
        if (y === null) throw Error(s(387));
        if (((y = y.memoizedProps), y !== null)) {
          var b = u.type;
          dt(u.pendingProps.value, y.value) ||
            (e !== null ? e.push(b) : (e = [b]));
        }
      } else if (u === ur.current) {
        if (((y = u.alternate), y === null)) throw Error(s(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(Dl) : (e = [Dl]));
      }
      u = u.return;
    }
    e !== null && Co(t, e, i, r), (t.flags |= 262144);
  }
  function Qr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!dt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Aa(e) {
    (Ea = e),
      (cn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Ie(e) {
    return Gm(Ea, e);
  }
  function Zr(e, t) {
    return Ea === null && Aa(e), Gm(e, t);
  }
  function Gm(e, t) {
    var i = t._currentValue;
    if (((t = { context: t, memoizedValue: i, next: null }), cn === null)) {
      if (e === null) throw Error(s(308));
      (cn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else cn = cn.next = t;
    return i;
  }
  var qn = !1;
  function Mo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function _o(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Gn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Yn(e, t, i) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), Oe & 2)) {
      var u = r.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (r.pending = t),
        (t = Or(e)),
        Eh(e, null, i),
        t
      );
    }
    return wr(e, r, t, i), Or(e);
  }
  function ol(e, t, i) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194176) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (i |= r), (t.lanes = i), _d(e, i);
    }
  }
  function zo(e, t) {
    var i = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), i === r)) {
      var u = null,
        c = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var y = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null,
          };
          c === null ? (u = c = y) : (c = c.next = y), (i = i.next);
        } while (i !== null);
        c === null ? (u = c = t) : (c = c.next = t);
      } else u = c = t;
      (i = {
        baseState: r.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (e.updateQueue = i);
      return;
    }
    (e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = t) : (e.next = t),
      (i.lastBaseUpdate = t);
  }
  var No = !1;
  function cl() {
    if (No) {
      var e = ii;
      if (e !== null) throw e;
    }
  }
  function fl(e, t, i, r) {
    No = !1;
    var u = e.updateQueue;
    qn = !1;
    var c = u.firstBaseUpdate,
      y = u.lastBaseUpdate,
      b = u.shared.pending;
    if (b !== null) {
      u.shared.pending = null;
      var x = b,
        w = x.next;
      (x.next = null), y === null ? (c = w) : (y.next = w), (y = x);
      var H = e.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (b = H.lastBaseUpdate),
        b !== y &&
          (b === null ? (H.firstBaseUpdate = w) : (b.next = w),
          (H.lastBaseUpdate = x)));
    }
    if (c !== null) {
      var G = u.baseState;
      (y = 0), (H = w = x = null), (b = c);
      do {
        var j = b.lane & -536870913,
          B = j !== b.lane;
        if (B ? (me & j) === j : (r & j) === j) {
          j !== 0 && j === ai && (No = !0),
            H !== null &&
              (H = H.next =
                {
                  lane: 0,
                  tag: b.tag,
                  payload: b.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var J = e,
              re = b;
            j = t;
            var Ne = i;
            switch (re.tag) {
              case 1:
                if (((J = re.payload), typeof J == 'function')) {
                  G = J.call(Ne, G, j);
                  break e;
                }
                G = J;
                break e;
              case 3:
                J.flags = (J.flags & -65537) | 128;
              case 0:
                if (
                  ((J = re.payload),
                  (j = typeof J == 'function' ? J.call(Ne, G, j) : J),
                  j == null)
                )
                  break e;
                G = W({}, G, j);
                break e;
              case 2:
                qn = !0;
            }
          }
          (j = b.callback),
            j !== null &&
              ((e.flags |= 64),
              B && (e.flags |= 8192),
              (B = u.callbacks),
              B === null ? (u.callbacks = [j]) : B.push(j));
        } else
          (B = {
            lane: j,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            H === null ? ((w = H = B), (x = G)) : (H = H.next = B),
            (y |= j);
        if (((b = b.next), b === null)) {
          if (((b = u.shared.pending), b === null)) break;
          (B = b),
            (b = B.next),
            (B.next = null),
            (u.lastBaseUpdate = B),
            (u.shared.pending = null);
        }
      } while (!0);
      H === null && (x = G),
        (u.baseState = x),
        (u.firstBaseUpdate = w),
        (u.lastBaseUpdate = H),
        c === null && (u.shared.lanes = 0),
        (Zn |= y),
        (e.lanes = y),
        (e.memoizedState = G);
    }
  }
  function Ym(e, t) {
    if (typeof e != 'function') throw Error(s(191, e));
    e.call(t);
  }
  function Xm(e, t) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++) Ym(i[e], t);
  }
  function dl(e, t) {
    try {
      var i = t.updateQueue,
        r = i !== null ? i.lastEffect : null;
      if (r !== null) {
        var u = r.next;
        i = u;
        do {
          if ((i.tag & e) === e) {
            r = void 0;
            var c = i.create,
              y = i.inst;
            (r = c()), (y.destroy = r);
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (b) {
      xe(t, t.return, b);
    }
  }
  function Xn(e, t, i) {
    try {
      var r = t.updateQueue,
        u = r !== null ? r.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        r = c;
        do {
          if ((r.tag & e) === e) {
            var y = r.inst,
              b = y.destroy;
            if (b !== void 0) {
              (y.destroy = void 0), (u = t);
              var x = i;
              try {
                b();
              } catch (w) {
                xe(u, x, w);
              }
            }
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (w) {
      xe(t, t.return, w);
    }
  }
  function km(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var i = e.stateNode;
      try {
        Xm(t, i);
      } catch (r) {
        xe(e, e.return, r);
      }
    }
  }
  function Km(e, t, i) {
    (i.props = Ta(e.type, e.memoizedProps)), (i.state = e.memoizedState);
    try {
      i.componentWillUnmount();
    } catch (r) {
      xe(e, t, r);
    }
  }
  function Ra(e, t) {
    try {
      var i = e.ref;
      if (i !== null) {
        var r = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var u = r;
            break;
          default:
            u = r;
        }
        typeof i == 'function' ? (e.refCleanup = i(u)) : (i.current = u);
      }
    } catch (c) {
      xe(e, t, c);
    }
  }
  function ht(e, t) {
    var i = e.ref,
      r = e.refCleanup;
    if (i !== null)
      if (typeof r == 'function')
        try {
          r();
        } catch (u) {
          xe(e, t, u);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof i == 'function')
        try {
          i(null);
        } catch (u) {
          xe(e, t, u);
        }
      else i.current = null;
  }
  function Qm(e) {
    var t = e.type,
      i = e.memoizedProps,
      r = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          i.autoFocus && r.focus();
          break e;
        case 'img':
          i.src ? (r.src = i.src) : i.srcSet && (r.srcset = i.srcSet);
      }
    } catch (u) {
      xe(e, e.return, u);
    }
  }
  function Zm(e, t, i) {
    try {
      var r = e.stateNode;
      gS(r, e.type, i, t), (r[st] = t);
    } catch (u) {
      xe(e, e.return, u);
    }
  }
  function Fm(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function jo(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Vo(e, t, i) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, t)
            : i.insertBefore(e, t)
          : (i.nodeType === 8
              ? ((t = i.parentNode), t.insertBefore(e, i))
              : ((t = i), t.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = us));
    else if (r !== 4 && r !== 27 && ((e = e.child), e !== null))
      for (Vo(e, t, i), e = e.sibling; e !== null; )
        Vo(e, t, i), (e = e.sibling);
  }
  function Fr(e, t, i) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (r !== 4 && r !== 27 && ((e = e.child), e !== null))
      for (Fr(e, t, i), e = e.sibling; e !== null; )
        Fr(e, t, i), (e = e.sibling);
  }
  var dn = !1,
    _e = !1,
    Uo = !1,
    $m = typeof WeakSet == 'function' ? WeakSet : Set,
    ke = null,
    Jm = !1;
  function Qb(e, t) {
    if (((e = e.containerInfo), (cc = ps), (e = mh(e)), Lu(e))) {
      if ('selectionStart' in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var r = i.getSelection && i.getSelection();
          if (r && r.rangeCount !== 0) {
            i = r.anchorNode;
            var u = r.anchorOffset,
              c = r.focusNode;
            r = r.focusOffset;
            try {
              i.nodeType, c.nodeType;
            } catch {
              i = null;
              break e;
            }
            var y = 0,
              b = -1,
              x = -1,
              w = 0,
              H = 0,
              G = e,
              j = null;
            t: for (;;) {
              for (
                var B;
                G !== i || (u !== 0 && G.nodeType !== 3) || (b = y + u),
                  G !== c || (r !== 0 && G.nodeType !== 3) || (x = y + r),
                  G.nodeType === 3 && (y += G.nodeValue.length),
                  (B = G.firstChild) !== null;

              )
                (j = G), (G = B);
              for (;;) {
                if (G === e) break t;
                if (
                  (j === i && ++w === u && (b = y),
                  j === c && ++H === r && (x = y),
                  (B = G.nextSibling) !== null)
                )
                  break;
                (G = j), (j = G.parentNode);
              }
              G = B;
            }
            i = b === -1 || x === -1 ? null : { start: b, end: x };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      fc = { focusedElem: e, selectionRange: i }, ps = !1, ke = t;
      ke !== null;

    )
      if (
        ((t = ke), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (ke = e);
      else
        for (; ke !== null; ) {
          switch (((t = ke), (c = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (e & 1024 && c !== null) {
                (e = void 0),
                  (i = t),
                  (u = c.memoizedProps),
                  (c = c.memoizedState),
                  (r = i.stateNode);
                try {
                  var J = Ta(i.type, u, i.elementType === i.type);
                  (e = r.getSnapshotBeforeUpdate(J, c)),
                    (r.__reactInternalSnapshotBeforeUpdate = e);
                } catch (re) {
                  xe(i, i.return, re);
                }
              }
              break;
            case 3:
              if (e & 1024) {
                if (
                  ((e = t.stateNode.containerInfo), (i = e.nodeType), i === 9)
                )
                  pc(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      pc(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (e & 1024) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (ke = e);
            break;
          }
          ke = t.return;
        }
    return (J = Jm), (Jm = !1), J;
  }
  function Wm(e, t, i) {
    var r = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        mn(e, i), r & 4 && dl(5, i);
        break;
      case 1:
        if ((mn(e, i), r & 4))
          if (((e = i.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (b) {
              xe(i, i.return, b);
            }
          else {
            var u = Ta(i.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (b) {
              xe(i, i.return, b);
            }
          }
        r & 64 && km(i), r & 512 && Ra(i, i.return);
        break;
      case 3:
        if ((mn(e, i), r & 64 && ((r = i.updateQueue), r !== null))) {
          if (((e = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                e = i.child.stateNode;
                break;
              case 1:
                e = i.child.stateNode;
            }
          try {
            Xm(r, e);
          } catch (b) {
            xe(i, i.return, b);
          }
        }
        break;
      case 26:
        mn(e, i), r & 512 && Ra(i, i.return);
        break;
      case 27:
      case 5:
        mn(e, i), t === null && r & 4 && Qm(i), r & 512 && Ra(i, i.return);
        break;
      case 12:
        mn(e, i);
        break;
      case 13:
        mn(e, i), r & 4 && tp(e, i);
        break;
      case 22:
        if (((u = i.memoizedState !== null || dn), !u)) {
          t = (t !== null && t.memoizedState !== null) || _e;
          var c = dn,
            y = _e;
          (dn = u),
            (_e = t) && !y ? kn(e, i, (i.subtreeFlags & 8772) !== 0) : mn(e, i),
            (dn = c),
            (_e = y);
        }
        r & 512 &&
          (i.memoizedProps.mode === 'manual'
            ? Ra(i, i.return)
            : ht(i, i.return));
        break;
      default:
        mn(e, i);
    }
  }
  function Im(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Im(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && xu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Pe = null,
    mt = !1;
  function hn(e, t, i) {
    for (i = i.child; i !== null; ) ep(e, t, i), (i = i.sibling);
  }
  function ep(e, t, i) {
    if (ct && typeof ct.onCommitFiberUnmount == 'function')
      try {
        ct.onCommitFiberUnmount(Vi, i);
      } catch {}
    switch (i.tag) {
      case 26:
        _e || ht(i, t),
          hn(e, t, i),
          i.memoizedState
            ? i.memoizedState.count--
            : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i));
        break;
      case 27:
        _e || ht(i, t);
        var r = Pe,
          u = mt;
        for (
          Pe = i.stateNode, hn(e, t, i), i = i.stateNode, t = i.attributes;
          t.length;

        )
          i.removeAttributeNode(t[0]);
        xu(i), (Pe = r), (mt = u);
        break;
      case 5:
        _e || ht(i, t);
      case 6:
        u = Pe;
        var c = mt;
        if (((Pe = null), hn(e, t, i), (Pe = u), (mt = c), Pe !== null))
          if (mt)
            try {
              (e = Pe),
                (r = i.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r);
            } catch (y) {
              xe(i, t, y);
            }
          else
            try {
              Pe.removeChild(i.stateNode);
            } catch (y) {
              xe(i, t, y);
            }
        break;
      case 18:
        Pe !== null &&
          (mt
            ? ((t = Pe),
              (i = i.stateNode),
              t.nodeType === 8
                ? mc(t.parentNode, i)
                : t.nodeType === 1 && mc(t, i),
              Ml(t))
            : mc(Pe, i.stateNode));
        break;
      case 4:
        (r = Pe),
          (u = mt),
          (Pe = i.stateNode.containerInfo),
          (mt = !0),
          hn(e, t, i),
          (Pe = r),
          (mt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _e || Xn(2, i, t), _e || Xn(4, i, t), hn(e, t, i);
        break;
      case 1:
        _e ||
          (ht(i, t),
          (r = i.stateNode),
          typeof r.componentWillUnmount == 'function' && Km(i, t, r)),
          hn(e, t, i);
        break;
      case 21:
        hn(e, t, i);
        break;
      case 22:
        _e || ht(i, t),
          (_e = (r = _e) || i.memoizedState !== null),
          hn(e, t, i),
          (_e = r);
        break;
      default:
        hn(e, t, i);
    }
  }
  function tp(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ml(e);
      } catch (i) {
        xe(t, t.return, i);
      }
  }
  function Zb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new $m()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new $m()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Lo(e, t) {
    var i = Zb(e);
    t.forEach(function (r) {
      var u = sS.bind(null, e, r);
      i.has(r) || (i.add(r), r.then(u, u));
    });
  }
  function _t(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var r = 0; r < i.length; r++) {
        var u = i[r],
          c = e,
          y = t,
          b = y;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
            case 5:
              (Pe = b.stateNode), (mt = !1);
              break e;
            case 3:
              (Pe = b.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (Pe = b.stateNode.containerInfo), (mt = !0);
              break e;
          }
          b = b.return;
        }
        if (Pe === null) throw Error(s(160));
        ep(c, y, u),
          (Pe = null),
          (mt = !1),
          (c = u.alternate),
          c !== null && (c.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) np(t, e), (t = t.sibling);
  }
  var Pt = null;
  function np(e, t) {
    var i = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        _t(t, e),
          zt(e),
          r & 4 && (Xn(3, e, e.return), dl(3, e), Xn(5, e, e.return));
        break;
      case 1:
        _t(t, e),
          zt(e),
          r & 512 && (_e || i === null || ht(i, i.return)),
          r & 64 &&
            dn &&
            ((e = e.updateQueue),
            e !== null &&
              ((r = e.callbacks),
              r !== null &&
                ((i = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = i === null ? r : i.concat(r)))));
        break;
      case 26:
        var u = Pt;
        if (
          (_t(t, e),
          zt(e),
          r & 512 && (_e || i === null || ht(i, i.return)),
          r & 4)
        ) {
          var c = i !== null ? i.memoizedState : null;
          if (((r = e.memoizedState), i === null))
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  (r = e.type),
                    (i = e.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (r) {
                    case 'title':
                      (c = u.getElementsByTagName('title')[0]),
                        (!c ||
                          c[Bi] ||
                          c[We] ||
                          c.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          c.hasAttribute('itemprop')) &&
                          ((c = u.createElement(r)),
                          u.head.insertBefore(
                            c,
                            u.querySelector('head > title'),
                          )),
                        Fe(c, r, i),
                        (c[We] = e),
                        Ye(c),
                        (r = c);
                      break e;
                    case 'link':
                      var y = Qp('link', 'href', u).get(r + (i.href || ''));
                      if (y) {
                        for (var b = 0; b < y.length; b++)
                          if (
                            ((c = y[b]),
                            c.getAttribute('href') ===
                              (i.href == null ? null : i.href) &&
                              c.getAttribute('rel') ===
                                (i.rel == null ? null : i.rel) &&
                              c.getAttribute('title') ===
                                (i.title == null ? null : i.title) &&
                              c.getAttribute('crossorigin') ===
                                (i.crossOrigin == null ? null : i.crossOrigin))
                          ) {
                            y.splice(b, 1);
                            break t;
                          }
                      }
                      (c = u.createElement(r)),
                        Fe(c, r, i),
                        u.head.appendChild(c);
                      break;
                    case 'meta':
                      if (
                        (y = Qp('meta', 'content', u).get(
                          r + (i.content || ''),
                        ))
                      ) {
                        for (b = 0; b < y.length; b++)
                          if (
                            ((c = y[b]),
                            c.getAttribute('content') ===
                              (i.content == null ? null : '' + i.content) &&
                              c.getAttribute('name') ===
                                (i.name == null ? null : i.name) &&
                              c.getAttribute('property') ===
                                (i.property == null ? null : i.property) &&
                              c.getAttribute('http-equiv') ===
                                (i.httpEquiv == null ? null : i.httpEquiv) &&
                              c.getAttribute('charset') ===
                                (i.charSet == null ? null : i.charSet))
                          ) {
                            y.splice(b, 1);
                            break t;
                          }
                      }
                      (c = u.createElement(r)),
                        Fe(c, r, i),
                        u.head.appendChild(c);
                      break;
                    default:
                      throw Error(s(468, r));
                  }
                  (c[We] = e), Ye(c), (r = c);
                }
                e.stateNode = r;
              } else Zp(u, e.type, e.stateNode);
            else e.stateNode = Kp(u, r, e.memoizedProps);
          else
            c !== r
              ? (c === null
                  ? i.stateNode !== null &&
                    ((i = i.stateNode), i.parentNode.removeChild(i))
                  : c.count--,
                r === null
                  ? Zp(u, e.type, e.stateNode)
                  : Kp(u, r, e.memoizedProps))
              : r === null &&
                e.stateNode !== null &&
                Zm(e, e.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        if (r & 4 && e.alternate === null) {
          (u = e.stateNode), (c = e.memoizedProps);
          try {
            for (var x = u.firstChild; x; ) {
              var w = x.nextSibling,
                H = x.nodeName;
              x[Bi] ||
                H === 'HEAD' ||
                H === 'BODY' ||
                H === 'SCRIPT' ||
                H === 'STYLE' ||
                (H === 'LINK' && x.rel.toLowerCase() === 'stylesheet') ||
                u.removeChild(x),
                (x = w);
            }
            for (var G = e.type, j = u.attributes; j.length; )
              u.removeAttributeNode(j[0]);
            Fe(u, G, c), (u[We] = e), (u[st] = c);
          } catch (J) {
            xe(e, e.return, J);
          }
        }
      case 5:
        if (
          (_t(t, e),
          zt(e),
          r & 512 && (_e || i === null || ht(i, i.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            ka(u, '');
          } catch (J) {
            xe(e, e.return, J);
          }
        }
        r & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Zm(e, u, i !== null ? i.memoizedProps : u)),
          r & 1024 && (Uo = !0);
        break;
      case 6:
        if ((_t(t, e), zt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (r = e.memoizedProps), (i = e.stateNode);
          try {
            i.nodeValue = r;
          } catch (J) {
            xe(e, e.return, J);
          }
        }
        break;
      case 3:
        if (
          ((ds = null),
          (u = Pt),
          (Pt = cs(t.containerInfo)),
          _t(t, e),
          (Pt = u),
          zt(e),
          r & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Ml(t.containerInfo);
          } catch (J) {
            xe(e, e.return, J);
          }
        Uo && ((Uo = !1), ap(e));
        break;
      case 4:
        (r = Pt),
          (Pt = cs(e.stateNode.containerInfo)),
          _t(t, e),
          zt(e),
          (Pt = r);
        break;
      case 12:
        _t(t, e), zt(e);
        break;
      case 13:
        _t(t, e),
          zt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (i !== null && i.memoizedState !== null) &&
            (Ko = kt()),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), Lo(e, r)));
        break;
      case 22:
        if (
          (r & 512 && (_e || i === null || ht(i, i.return)),
          (x = e.memoizedState !== null),
          (w = i !== null && i.memoizedState !== null),
          (H = dn),
          (G = _e),
          (dn = H || x),
          (_e = G || w),
          _t(t, e),
          (_e = G),
          (dn = H),
          zt(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          r & 8192 &&
            ((t._visibility = x ? t._visibility & -2 : t._visibility | 1),
            x && ((t = dn || _e), i === null || w || t || ui(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== 'manual'))
        )
          e: for (i = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (i === null) {
                w = i = t;
                try {
                  if (((u = w.stateNode), x))
                    (c = u.style),
                      typeof c.setProperty == 'function'
                        ? c.setProperty('display', 'none', 'important')
                        : (c.display = 'none');
                  else {
                    (y = w.stateNode), (b = w.memoizedProps.style);
                    var B =
                      b != null && b.hasOwnProperty('display')
                        ? b.display
                        : null;
                    y.style.display =
                      B == null || typeof B == 'boolean' ? '' : ('' + B).trim();
                  }
                } catch (J) {
                  xe(w, w.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (i === null) {
                w = t;
                try {
                  w.stateNode.nodeValue = x ? '' : w.memoizedProps;
                } catch (J) {
                  xe(w, w.return, J);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              i === t && (i = null), (t = t.return);
            }
            i === t && (i = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        r & 4 &&
          ((r = e.updateQueue),
          r !== null &&
            ((i = r.retryQueue),
            i !== null && ((r.retryQueue = null), Lo(e, i))));
        break;
      case 19:
        _t(t, e),
          zt(e),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), Lo(e, r)));
        break;
      case 21:
        break;
      default:
        _t(t, e), zt(e);
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var i = e.return; i !== null; ) {
              if (Fm(i)) {
                var r = i;
                break e;
              }
              i = i.return;
            }
            throw Error(s(160));
          }
          switch (r.tag) {
            case 27:
              var u = r.stateNode,
                c = jo(e);
              Fr(e, c, u);
              break;
            case 5:
              var y = r.stateNode;
              r.flags & 32 && (ka(y, ''), (r.flags &= -33));
              var b = jo(e);
              Fr(e, b, y);
              break;
            case 3:
            case 4:
              var x = r.stateNode.containerInfo,
                w = jo(e);
              Vo(e, w, x);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (H) {
        xe(e, e.return, H);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ap(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ap(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function mn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Wm(e, t.alternate, t), (t = t.sibling);
  }
  function ui(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Xn(4, t, t.return), ui(t);
          break;
        case 1:
          ht(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == 'function' && Km(t, t.return, i),
            ui(t);
          break;
        case 26:
        case 27:
        case 5:
          ht(t, t.return), ui(t);
          break;
        case 22:
          ht(t, t.return), t.memoizedState === null && ui(t);
          break;
        default:
          ui(t);
      }
      e = e.sibling;
    }
  }
  function kn(e, t, i) {
    for (i = i && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var r = t.alternate,
        u = e,
        c = t,
        y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          kn(u, c, i), dl(4, c);
          break;
        case 1:
          if (
            (kn(u, c, i),
            (r = c),
            (u = r.stateNode),
            typeof u.componentDidMount == 'function')
          )
            try {
              u.componentDidMount();
            } catch (w) {
              xe(r, r.return, w);
            }
          if (((r = c), (u = r.updateQueue), u !== null)) {
            var b = r.stateNode;
            try {
              var x = u.shared.hiddenCallbacks;
              if (x !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < x.length; u++)
                  Ym(x[u], b);
            } catch (w) {
              xe(r, r.return, w);
            }
          }
          i && y & 64 && km(c), Ra(c, c.return);
          break;
        case 26:
        case 27:
        case 5:
          kn(u, c, i), i && r === null && y & 4 && Qm(c), Ra(c, c.return);
          break;
        case 12:
          kn(u, c, i);
          break;
        case 13:
          kn(u, c, i), i && y & 4 && tp(u, c);
          break;
        case 22:
          c.memoizedState === null && kn(u, c, i), Ra(c, c.return);
          break;
        default:
          kn(u, c, i);
      }
      t = t.sibling;
    }
  }
  function Bo(e, t) {
    var i = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (i = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== i && (e != null && e.refCount++, i != null && nl(i));
  }
  function Ho(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && nl(e));
  }
  function Kn(e, t, i, r) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) ip(e, t, i, r), (t = t.sibling);
  }
  function ip(e, t, i, r) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Kn(e, t, i, r), u & 2048 && dl(9, t);
        break;
      case 3:
        Kn(e, t, i, r),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && nl(e)));
        break;
      case 12:
        if (u & 2048) {
          Kn(e, t, i, r), (e = t.stateNode);
          try {
            var c = t.memoizedProps,
              y = c.id,
              b = c.onPostCommit;
            typeof b == 'function' &&
              b(
                y,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0,
              );
          } catch (x) {
            xe(t, t.return, x);
          }
        } else Kn(e, t, i, r);
        break;
      case 23:
        break;
      case 22:
        (c = t.stateNode),
          t.memoizedState !== null
            ? c._visibility & 4
              ? Kn(e, t, i, r)
              : hl(e, t)
            : c._visibility & 4
              ? Kn(e, t, i, r)
              : ((c._visibility |= 4),
                oi(e, t, i, r, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && Bo(t.alternate, t);
        break;
      case 24:
        Kn(e, t, i, r), u & 2048 && Ho(t.alternate, t);
        break;
      default:
        Kn(e, t, i, r);
    }
  }
  function oi(e, t, i, r, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e,
        y = t,
        b = i,
        x = r,
        w = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          oi(c, y, b, x, u), dl(8, y);
          break;
        case 23:
          break;
        case 22:
          var H = y.stateNode;
          y.memoizedState !== null
            ? H._visibility & 4
              ? oi(c, y, b, x, u)
              : hl(c, y)
            : ((H._visibility |= 4), oi(c, y, b, x, u)),
            u && w & 2048 && Bo(y.alternate, y);
          break;
        case 24:
          oi(c, y, b, x, u), u && w & 2048 && Ho(y.alternate, y);
          break;
        default:
          oi(c, y, b, x, u);
      }
      t = t.sibling;
    }
  }
  function hl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var i = e,
          r = t,
          u = r.flags;
        switch (r.tag) {
          case 22:
            hl(i, r), u & 2048 && Bo(r.alternate, r);
            break;
          case 24:
            hl(i, r), u & 2048 && Ho(r.alternate, r);
            break;
          default:
            hl(i, r);
        }
        t = t.sibling;
      }
  }
  var ml = 8192;
  function ci(e) {
    if (e.subtreeFlags & ml)
      for (e = e.child; e !== null; ) lp(e), (e = e.sibling);
  }
  function lp(e) {
    switch (e.tag) {
      case 26:
        ci(e),
          e.flags & ml &&
            e.memoizedState !== null &&
            US(Pt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        ci(e);
        break;
      case 3:
      case 4:
        var t = Pt;
        (Pt = cs(e.stateNode.containerInfo)), ci(e), (Pt = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ml), (ml = 16777216), ci(e), (ml = t))
            : ci(e));
        break;
      default:
        ci(e);
    }
  }
  function rp(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function pl(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (ke = r), up(r, e);
        }
      rp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) sp(e), (e = e.sibling);
  }
  function sp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        pl(e), e.flags & 2048 && Xn(9, e, e.return);
        break;
      case 3:
        pl(e);
        break;
      case 12:
        pl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), $r(e))
          : pl(e);
        break;
      default:
        pl(e);
    }
  }
  function $r(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (ke = r), up(r, e);
        }
      rp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Xn(8, t, t.return), $r(t);
          break;
        case 22:
          (i = t.stateNode),
            i._visibility & 4 && ((i._visibility &= -5), $r(t));
          break;
        default:
          $r(t);
      }
      e = e.sibling;
    }
  }
  function up(e, t) {
    for (; ke !== null; ) {
      var i = ke;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Xn(8, i, t);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var r = i.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          nl(i.memoizedState.cache);
      }
      if (((r = i.child), r !== null)) (r.return = i), (ke = r);
      else
        e: for (i = e; ke !== null; ) {
          r = ke;
          var u = r.sibling,
            c = r.return;
          if ((Im(r), r === i)) {
            ke = null;
            break e;
          }
          if (u !== null) {
            (u.return = c), (ke = u);
            break e;
          }
          ke = c;
        }
    }
  }
  function Fb(e, t, i, r) {
    (this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Nt(e, t, i, r) {
    return new Fb(e, t, i, r);
  }
  function Po(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Qn(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = Nt(e.tag, t, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = t),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 31457280),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (i.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      (i.refCleanup = e.refCleanup),
      i
    );
  }
  function op(e, t) {
    e.flags &= 31457282;
    var i = e.alternate;
    return (
      i === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = i.childLanes),
          (e.lanes = i.lanes),
          (e.child = i.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = i.memoizedProps),
          (e.memoizedState = i.memoizedState),
          (e.updateQueue = i.updateQueue),
          (e.type = i.type),
          (t = i.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Jr(e, t, i, r, u, c) {
    var y = 0;
    if (((r = e), typeof e == 'function')) Po(e) && (y = 1);
    else if (typeof e == 'string')
      y = jS(e, i, Xt.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5;
    else
      e: switch (e) {
        case h:
          return Da(i.children, u, c, t);
        case p:
          (y = 8), (u |= 24);
          break;
        case g:
          return (
            (e = Nt(12, i, t, u | 2)), (e.elementType = g), (e.lanes = c), e
          );
        case M:
          return (e = Nt(13, i, t, u)), (e.elementType = M), (e.lanes = c), e;
        case _:
          return (e = Nt(19, i, t, u)), (e.elementType = _), (e.lanes = c), e;
        case U:
          return cp(i, u, c, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case v:
              case T:
                y = 10;
                break e;
              case S:
                y = 9;
                break e;
              case A:
                y = 11;
                break e;
              case O:
                y = 14;
                break e;
              case N:
                (y = 16), (r = null);
                break e;
            }
          (y = 29),
            (i = Error(s(130, e === null ? 'null' : typeof e, ''))),
            (r = null);
      }
    return (
      (t = Nt(y, i, t, u)), (t.elementType = e), (t.type = r), (t.lanes = c), t
    );
  }
  function Da(e, t, i, r) {
    return (e = Nt(7, e, r, t)), (e.lanes = i), e;
  }
  function cp(e, t, i, r) {
    (e = Nt(22, e, r, t)), (e.elementType = U), (e.lanes = i);
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var c = u._current;
        if (c === null) throw Error(s(456));
        if (!(u._pendingVisibility & 2)) {
          var y = Vn(c, 2);
          y !== null && ((u._pendingVisibility |= 2), rt(y, c, 2));
        }
      },
      attach: function () {
        var c = u._current;
        if (c === null) throw Error(s(456));
        if (u._pendingVisibility & 2) {
          var y = Vn(c, 2);
          y !== null && ((u._pendingVisibility &= -3), rt(y, c, 2));
        }
      },
    };
    return (e.stateNode = u), e;
  }
  function qo(e, t, i) {
    return (e = Nt(6, e, null, t)), (e.lanes = i), e;
  }
  function Go(e, t, i) {
    return (
      (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function pn(e) {
    e.flags |= 4;
  }
  function fp(e, t) {
    if (t.type !== 'stylesheet' || t.state.loading & 4) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Fp(t))) {
      if (
        ((t = Mt.current),
        t !== null &&
          ((me & 4194176) === me
            ? Qt !== null
            : ((me & 62914560) !== me && !(me & 536870912)) || t !== Qt))
      )
        throw ((Ii = Ku), Oh);
      e.flags |= 8192;
    }
  }
  function Wr(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Cd() : 536870912), (e.lanes |= t), (di |= t));
  }
  function yl(e, t) {
    if (!pe)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var i = null; t !== null; )
            t.alternate !== null && (i = t), (t = t.sibling);
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case 'collapsed':
          i = e.tail;
          for (var r = null; i !== null; )
            i.alternate !== null && (r = i), (i = i.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function we(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      r = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (i |= u.lanes | u.childLanes),
          (r |= u.subtreeFlags & 31457280),
          (r |= u.flags & 31457280),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (i |= u.lanes | u.childLanes),
          (r |= u.subtreeFlags),
          (r |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = i), t;
  }
  function $b(e, t, i) {
    var r = t.pendingProps;
    switch ((Xu(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return we(t), null;
      case 1:
        return we(t), null;
      case 3:
        return (
          (i = t.stateNode),
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          t.memoizedState.cache !== r && (t.flags |= 2048),
          fn(Ge),
          Ha(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (Fi(t)
              ? pn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Ht !== null && ($o(Ht), (Ht = null)))),
          we(t),
          null
        );
      case 26:
        return (
          (i = t.memoizedState),
          e === null
            ? (pn(t),
              i !== null ? (we(t), fp(t, i)) : (we(t), (t.flags &= -16777217)))
            : i
              ? i !== e.memoizedState
                ? (pn(t), we(t), fp(t, i))
                : (we(t), (t.flags &= -16777217))
              : (e.memoizedProps !== r && pn(t), we(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        cr(t), (i = _n.current);
        var u = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== r && pn(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return we(t), null;
          }
          (e = Xt.current),
            Fi(t) ? Dh(t) : ((e = qp(u, r, i)), (t.stateNode = e), pn(t));
        }
        return we(t), null;
      case 5:
        if ((cr(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== r && pn(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return we(t), null;
          }
          if (((e = Xt.current), Fi(t))) Dh(t);
          else {
            switch (((u = os(_n.current)), e)) {
              case 1:
                e = u.createElementNS('http://www.w3.org/2000/svg', i);
                break;
              case 2:
                e = u.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                break;
              default:
                switch (i) {
                  case 'svg':
                    e = u.createElementNS('http://www.w3.org/2000/svg', i);
                    break;
                  case 'math':
                    e = u.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      i,
                    );
                    break;
                  case 'script':
                    (e = u.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case 'select':
                    (e =
                      typeof r.is == 'string'
                        ? u.createElement('select', { is: r.is })
                        : u.createElement('select')),
                      r.multiple
                        ? (e.multiple = !0)
                        : r.size && (e.size = r.size);
                    break;
                  default:
                    e =
                      typeof r.is == 'string'
                        ? u.createElement(i, { is: r.is })
                        : u.createElement(i);
                }
            }
            (e[We] = t), (e[st] = r);
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break e;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            t.stateNode = e;
            e: switch ((Fe(e, i, r), i)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!r.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && pn(t);
          }
        }
        return we(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== r && pn(t);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(s(166));
          if (((e = _n.current), Fi(t))) {
            if (
              ((e = t.stateNode),
              (i = t.memoizedProps),
              (r = null),
              (u = lt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  r = u.memoizedProps;
              }
            (e[We] = t),
              (e = !!(
                e.nodeValue === i ||
                (r !== null && r.suppressHydrationWarning === !0) ||
                Vp(e.nodeValue, i)
              )),
              e || ya(t);
          } else (e = os(e).createTextNode(r)), (e[We] = t), (t.stateNode = e);
        }
        return we(t), null;
      case 13:
        if (
          ((r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = Fi(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[We] = t;
            } else
              $i(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            we(t), (u = !1);
          } else Ht !== null && ($o(Ht), (Ht = null)), (u = !0);
          if (!u) return t.flags & 256 ? (sn(t), t) : (sn(t), null);
        }
        if ((sn(t), t.flags & 128)) return (t.lanes = i), t;
        if (
          ((i = r !== null), (e = e !== null && e.memoizedState !== null), i)
        ) {
          (r = t.child),
            (u = null),
            r.alternate !== null &&
              r.alternate.memoizedState !== null &&
              r.alternate.memoizedState.cachePool !== null &&
              (u = r.alternate.memoizedState.cachePool.pool);
          var c = null;
          r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (c = r.memoizedState.cachePool.pool),
            c !== u && (r.flags |= 2048);
        }
        return (
          i !== e && i && (t.child.flags |= 8192),
          Wr(t, t.updateQueue),
          we(t),
          null
        );
      case 4:
        return Ha(), e === null && sc(t.stateNode.containerInfo), we(t), null;
      case 10:
        return fn(t.type), we(t), null;
      case 19:
        if ((Le(qe), (u = t.memoizedState), u === null)) return we(t), null;
        if (((r = (t.flags & 128) !== 0), (c = u.rendering), c === null))
          if (r) yl(u, !1);
          else {
            if (ze !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((c = Vr(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      yl(u, !1),
                      e = c.updateQueue,
                      t.updateQueue = e,
                      Wr(t, e),
                      t.subtreeFlags = 0,
                      e = i,
                      i = t.child;
                    i !== null;

                  )
                    op(i, e), (i = i.sibling);
                  return De(qe, (qe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              kt() > Ir &&
              ((t.flags |= 128), (r = !0), yl(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Vr(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Wr(t, e),
                yl(u, !0),
                u.tail === null &&
                  u.tailMode === 'hidden' &&
                  !c.alternate &&
                  !pe)
              )
                return we(t), null;
            } else
              2 * kt() - u.renderingStartTime > Ir &&
                i !== 536870912 &&
                ((t.flags |= 128), (r = !0), yl(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((e = u.last),
              e !== null ? (e.sibling = c) : (t.child = c),
              (u.last = c));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = kt()),
            (t.sibling = null),
            (e = qe.current),
            De(qe, r ? (e & 1) | 2 : e & 1),
            t)
          : (we(t), null);
      case 22:
      case 23:
        return (
          sn(t),
          Zu(),
          (r = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== r && (t.flags |= 8192)
            : r && (t.flags |= 8192),
          r
            ? i & 536870912 &&
              !(t.flags & 128) &&
              (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : we(t),
          (i = t.updateQueue),
          i !== null && Wr(t, i.retryQueue),
          (i = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          (r = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (r = t.memoizedState.cachePool.pool),
          r !== i && (t.flags |= 2048),
          e !== null && Le(va),
          null
        );
      case 24:
        return (
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          fn(Ge),
          we(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Jb(e, t) {
    switch ((Xu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          fn(Ge),
          Ha(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return cr(t), null;
      case 13:
        if (
          (sn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          $i();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Le(qe), null;
      case 4:
        return Ha(), null;
      case 10:
        return fn(t.type), null;
      case 22:
      case 23:
        return (
          sn(t),
          Zu(),
          e !== null && Le(va),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return fn(Ge), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function dp(e, t) {
    switch ((Xu(t), t.tag)) {
      case 3:
        fn(Ge), Ha();
        break;
      case 26:
      case 27:
      case 5:
        cr(t);
        break;
      case 4:
        Ha();
        break;
      case 13:
        sn(t);
        break;
      case 19:
        Le(qe);
        break;
      case 10:
        fn(t.type);
        break;
      case 22:
      case 23:
        sn(t), Zu(), e !== null && Le(va);
        break;
      case 24:
        fn(Ge);
    }
  }
  var Wb = {
      getCacheForType: function (e) {
        var t = Ie(Ge),
          i = t.data.get(e);
        return i === void 0 && ((i = e()), t.data.set(e, i)), i;
      },
    },
    Ib = typeof WeakMap == 'function' ? WeakMap : Map,
    Oe = 0,
    Te = null,
    fe = null,
    me = 0,
    Ee = 0,
    pt = null,
    yn = !1,
    fi = !1,
    Yo = !1,
    gn = 0,
    ze = 0,
    Zn = 0,
    wa = 0,
    Xo = 0,
    jt = 0,
    di = 0,
    gl = null,
    Ft = null,
    ko = !1,
    Ko = 0,
    Ir = 1 / 0,
    es = null,
    Fn = null,
    ts = !1,
    Oa = null,
    vl = 0,
    Qo = 0,
    Zo = null,
    bl = 0,
    Fo = null;
  function yt() {
    if (Oe & 2 && me !== 0) return me & -me;
    if (k.T !== null) {
      var e = ai;
      return e !== 0 ? e : ac();
    }
    return Nd();
  }
  function hp() {
    jt === 0 && (jt = !(me & 536870912) || pe ? Od() : 536870912);
    var e = Mt.current;
    return e !== null && (e.flags |= 32), jt;
  }
  function rt(e, t, i) {
    ((e === Te && Ee === 2) || e.cancelPendingCommit !== null) &&
      (hi(e, 0), vn(e, me, jt, !1)),
      Li(e, i),
      (!(Oe & 2) || e !== Te) &&
        (e === Te && (!(Oe & 2) && (wa |= i), ze === 4 && vn(e, me, jt, !1)),
        $t(e));
  }
  function mp(e, t, i) {
    if (Oe & 6) throw Error(s(327));
    var r = (!i && (t & 60) === 0 && (t & e.expiredLanes) === 0) || Ui(e, t),
      u = r ? nS(e, t) : Io(e, t, !0),
      c = r;
    do {
      if (u === 0) {
        fi && !r && vn(e, t, 0, !1);
        break;
      } else if (u === 6) vn(e, t, 0, !yn);
      else {
        if (((i = e.current.alternate), c && !eS(i))) {
          (u = Io(e, t, !1)), (c = !1);
          continue;
        }
        if (u === 2) {
          if (((c = t), e.errorRecoveryDisabledLanes & c)) var y = 0;
          else
            (y = e.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            t = y;
            e: {
              var b = e;
              u = gl;
              var x = b.current.memoizedState.isDehydrated;
              if ((x && (hi(b, y).flags |= 256), (y = Io(b, y, !1)), y !== 2)) {
                if (Yo && !x) {
                  (b.errorRecoveryDisabledLanes |= c), (wa |= c), (u = 4);
                  break e;
                }
                (c = Ft), (Ft = u), c !== null && $o(c);
              }
              u = y;
            }
            if (((c = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          hi(e, 0), vn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((r = e), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194176) === t) {
                vn(r, t, jt, !yn);
                break e;
              }
              break;
            case 2:
              Ft = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (
            ((r.finishedWork = i),
            (r.finishedLanes = t),
            (t & 62914560) === t && ((c = Ko + 300 - kt()), 10 < c))
          ) {
            if ((vn(r, t, jt, !yn), mr(r, 0) !== 0)) break e;
            r.timeoutHandle = Bp(
              pp.bind(null, r, i, Ft, es, ko, t, jt, wa, di, yn, 2, -0, 0),
              c,
            );
            break e;
          }
          pp(r, i, Ft, es, ko, t, jt, wa, di, yn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    $t(e);
  }
  function $o(e) {
    Ft === null ? (Ft = e) : Ft.push.apply(Ft, e);
  }
  function pp(e, t, i, r, u, c, y, b, x, w, H, G, j) {
    var B = t.subtreeFlags;
    if (
      (B & 8192 || (B & 16785408) === 16785408) &&
      ((Rl = { stylesheets: null, count: 0, unsuspend: VS }),
      lp(t),
      (t = LS()),
      t !== null)
    ) {
      (e.cancelPendingCommit = t(Tp.bind(null, e, i, r, u, y, b, x, 1, G, j))),
        vn(e, c, y, !w);
      return;
    }
    Tp(e, i, r, u, y, b, x, H, G, j);
  }
  function eS(e) {
    for (var t = e; ; ) {
      var i = t.tag;
      if (
        (i === 0 || i === 11 || i === 15) &&
        t.flags & 16384 &&
        ((i = t.updateQueue), i !== null && ((i = i.stores), i !== null))
      )
        for (var r = 0; r < i.length; r++) {
          var u = i[r],
            c = u.getSnapshot;
          u = u.value;
          try {
            if (!dt(c(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = t.child), t.subtreeFlags & 16384 && i !== null))
        (i.return = t), (t = i);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function vn(e, t, i, r) {
    (t &= ~Xo),
      (t &= ~wa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      r && (e.warmLanes |= t),
      (r = e.expirationTimes);
    for (var u = t; 0 < u; ) {
      var c = 31 - ft(u),
        y = 1 << c;
      (r[c] = -1), (u &= ~y);
    }
    i !== 0 && Md(e, i, t);
  }
  function ns() {
    return Oe & 6 ? !0 : (Sl(0), !1);
  }
  function Jo() {
    if (fe !== null) {
      if (Ee === 0) var e = fe.return;
      else (e = fe), (cn = Ea = null), no(e), (ti = null), (el = 0), (e = fe);
      for (; e !== null; ) dp(e.alternate, e), (e = e.return);
      fe = null;
    }
  }
  function hi(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var i = e.timeoutHandle;
    i !== -1 && ((e.timeoutHandle = -1), bS(i)),
      (i = e.cancelPendingCommit),
      i !== null && ((e.cancelPendingCommit = null), i()),
      Jo(),
      (Te = e),
      (fe = i = Qn(e.current, null)),
      (me = t),
      (Ee = 0),
      (pt = null),
      (yn = !1),
      (fi = Ui(e, t)),
      (Yo = !1),
      (di = jt = Xo = wa = Zn = ze = 0),
      (Ft = gl = null),
      (ko = !1),
      t & 8 && (t |= t & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= t; 0 < r; ) {
        var u = 31 - ft(r),
          c = 1 << u;
        (t |= e[u]), (r &= ~c);
      }
    return (gn = t), Dr(), i;
  }
  function yp(e, t) {
    (oe = null),
      (k.H = Zt),
      t === Wi
        ? ((t = _h()), (Ee = 3))
        : t === Oh
          ? ((t = _h()), (Ee = 4))
          : (Ee =
              t === Cm
                ? 8
                : t !== null &&
                    typeof t == 'object' &&
                    typeof t.then == 'function'
                  ? 6
                  : 1),
      (pt = t),
      fe === null && ((ze = 1), Kr(e, wt(t, e.current)));
  }
  function gp() {
    var e = k.H;
    return (k.H = Zt), e === null ? Zt : e;
  }
  function vp() {
    var e = k.A;
    return (k.A = Wb), e;
  }
  function Wo() {
    (ze = 4),
      yn || ((me & 4194176) !== me && Mt.current !== null) || (fi = !0),
      (!(Zn & 134217727) && !(wa & 134217727)) ||
        Te === null ||
        vn(Te, me, jt, !1);
  }
  function Io(e, t, i) {
    var r = Oe;
    Oe |= 2;
    var u = gp(),
      c = vp();
    (Te !== e || me !== t) && ((es = null), hi(e, t)), (t = !1);
    var y = ze;
    e: do
      try {
        if (Ee !== 0 && fe !== null) {
          var b = fe,
            x = pt;
          switch (Ee) {
            case 8:
              Jo(), (y = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Mt.current === null && (t = !0);
              var w = Ee;
              if (((Ee = 0), (pt = null), mi(e, b, x, w), i && fi)) {
                y = 0;
                break e;
              }
              break;
            default:
              (w = Ee), (Ee = 0), (pt = null), mi(e, b, x, w);
          }
        }
        tS(), (y = ze);
        break;
      } catch (H) {
        yp(e, H);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (cn = Ea = null),
      (Oe = r),
      (k.H = u),
      (k.A = c),
      fe === null && ((Te = null), (me = 0), Dr()),
      y
    );
  }
  function tS() {
    for (; fe !== null; ) bp(fe);
  }
  function nS(e, t) {
    var i = Oe;
    Oe |= 2;
    var r = gp(),
      u = vp();
    Te !== e || me !== t
      ? ((es = null), (Ir = kt() + 500), hi(e, t))
      : (fi = Ui(e, t));
    e: do
      try {
        if (Ee !== 0 && fe !== null) {
          t = fe;
          var c = pt;
          t: switch (Ee) {
            case 1:
              (Ee = 0), (pt = null), mi(e, t, c, 1);
              break;
            case 2:
              if (Ch(c)) {
                (Ee = 0), (pt = null), Sp(t);
                break;
              }
              (t = function () {
                Ee === 2 && Te === e && (Ee = 7), $t(e);
              }),
                c.then(t, t);
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              Ch(c)
                ? ((Ee = 0), (pt = null), Sp(t))
                : ((Ee = 0), (pt = null), mi(e, t, c, 7));
              break;
            case 5:
              var y = null;
              switch (fe.tag) {
                case 26:
                  y = fe.memoizedState;
                case 5:
                case 27:
                  var b = fe;
                  if (!y || Fp(y)) {
                    (Ee = 0), (pt = null);
                    var x = b.sibling;
                    if (x !== null) fe = x;
                    else {
                      var w = b.return;
                      w !== null ? ((fe = w), as(w)) : (fe = null);
                    }
                    break t;
                  }
              }
              (Ee = 0), (pt = null), mi(e, t, c, 5);
              break;
            case 6:
              (Ee = 0), (pt = null), mi(e, t, c, 6);
              break;
            case 8:
              Jo(), (ze = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        aS();
        break;
      } catch (H) {
        yp(e, H);
      }
    while (!0);
    return (
      (cn = Ea = null),
      (k.H = r),
      (k.A = u),
      (Oe = i),
      fe !== null ? 0 : ((Te = null), (me = 0), Dr(), ze)
    );
  }
  function aS() {
    for (; fe !== null && !R1(); ) bp(fe);
  }
  function bp(e) {
    var t = qm(e.alternate, e, gn);
    (e.memoizedProps = e.pendingProps), t === null ? as(e) : (fe = t);
  }
  function Sp(e) {
    var t = e,
      i = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Vm(i, t, t.pendingProps, t.type, void 0, me);
        break;
      case 11:
        t = Vm(i, t, t.pendingProps, t.type.render, t.ref, me);
        break;
      case 5:
        no(t);
      default:
        dp(i, t), (t = fe = op(t, gn)), (t = qm(i, t, gn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? as(e) : (fe = t);
  }
  function mi(e, t, i, r) {
    (cn = Ea = null), no(t), (ti = null), (el = 0);
    var u = t.return;
    try {
      if (kb(e, u, t, i, me)) {
        (ze = 1), Kr(e, wt(i, e.current)), (fe = null);
        return;
      }
    } catch (c) {
      if (u !== null) throw ((fe = u), c);
      (ze = 1), Kr(e, wt(i, e.current)), (fe = null);
      return;
    }
    t.flags & 32768
      ? (pe || r === 1
          ? (e = !0)
          : fi || me & 536870912
            ? (e = !1)
            : ((yn = e = !0),
              (r === 2 || r === 3 || r === 6) &&
                ((r = Mt.current),
                r !== null && r.tag === 13 && (r.flags |= 16384))),
        xp(t, e))
      : as(t);
  }
  function as(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        xp(t, yn);
        return;
      }
      e = t.return;
      var i = $b(t.alternate, t, gn);
      if (i !== null) {
        fe = i;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function xp(e, t) {
    do {
      var i = Jb(e.alternate, e);
      if (i !== null) {
        (i.flags &= 32767), (fe = i);
        return;
      }
      if (
        ((i = e.return),
        i !== null &&
          ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        fe = e;
        return;
      }
      fe = e = i;
    } while (e !== null);
    (ze = 6), (fe = null);
  }
  function Tp(e, t, i, r, u, c, y, b, x, w) {
    var H = k.T,
      G = Z.p;
    try {
      (Z.p = 2), (k.T = null), iS(e, t, i, r, G, u, c, y, b, x, w);
    } finally {
      (k.T = H), (Z.p = G);
    }
  }
  function iS(e, t, i, r, u, c, y, b) {
    do pi();
    while (Oa !== null);
    if (Oe & 6) throw Error(s(327));
    var x = e.finishedWork;
    if (((r = e.finishedLanes), x === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), x === e.current))
      throw Error(s(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var w = x.lanes | x.childLanes;
    if (
      ((w |= qu),
      U1(e, r, w, c, y, b),
      e === Te && ((fe = Te = null), (me = 0)),
      (!(x.subtreeFlags & 10256) && !(x.flags & 10256)) ||
        ts ||
        ((ts = !0),
        (Qo = w),
        (Zo = i),
        uS(fr, function () {
          return pi(), null;
        })),
      (i = (x.flags & 15990) !== 0),
      x.subtreeFlags & 15990 || i
        ? ((i = k.T),
          (k.T = null),
          (c = Z.p),
          (Z.p = 2),
          (y = Oe),
          (Oe |= 4),
          Qb(e, x),
          np(x, e),
          Ob(fc, e.containerInfo),
          (ps = !!cc),
          (fc = cc = null),
          (e.current = x),
          Wm(e, x.alternate, x),
          D1(),
          (Oe = y),
          (Z.p = c),
          (k.T = i))
        : (e.current = x),
      ts ? ((ts = !1), (Oa = e), (vl = r)) : Ep(e, w),
      (w = e.pendingLanes),
      w === 0 && (Fn = null),
      _1(x.stateNode),
      $t(e),
      t !== null)
    )
      for (u = e.onRecoverableError, x = 0; x < t.length; x++)
        (w = t[x]), u(w.value, { componentStack: w.stack });
    return (
      vl & 3 && pi(),
      (w = e.pendingLanes),
      r & 4194218 && w & 42
        ? e === Fo
          ? bl++
          : ((bl = 0), (Fo = e))
        : (bl = 0),
      Sl(0),
      null
    );
  }
  function Ep(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), nl(t)));
  }
  function pi() {
    if (Oa !== null) {
      var e = Oa,
        t = Qo;
      Qo = 0;
      var i = zd(vl),
        r = k.T,
        u = Z.p;
      try {
        if (((Z.p = 32 > i ? 32 : i), (k.T = null), Oa === null)) var c = !1;
        else {
          (i = Zo), (Zo = null);
          var y = Oa,
            b = vl;
          if (((Oa = null), (vl = 0), Oe & 6)) throw Error(s(331));
          var x = Oe;
          if (
            ((Oe |= 4),
            sp(y.current),
            ip(y, y.current, b, i),
            (Oe = x),
            Sl(0, !1),
            ct && typeof ct.onPostCommitFiberRoot == 'function')
          )
            try {
              ct.onPostCommitFiberRoot(Vi, y);
            } catch {}
          c = !0;
        }
        return c;
      } finally {
        (Z.p = u), (k.T = r), Ep(e, t);
      }
    }
    return !1;
  }
  function Ap(e, t, i) {
    (t = wt(i, t)),
      (t = go(e.stateNode, t, 2)),
      (e = Yn(e, t, 2)),
      e !== null && (Li(e, 2), $t(e));
  }
  function xe(e, t, i) {
    if (e.tag === 3) Ap(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ap(t, e, i);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (Fn === null || !Fn.has(r)))
          ) {
            (e = wt(i, e)),
              (i = wm(2)),
              (r = Yn(t, i, 2)),
              r !== null && (Om(i, r, t, e), Li(r, 2), $t(r));
            break;
          }
        }
        t = t.return;
      }
  }
  function ec(e, t, i) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ib();
      var u = new Set();
      r.set(t, u);
    } else (u = r.get(t)), u === void 0 && ((u = new Set()), r.set(t, u));
    u.has(i) ||
      ((Yo = !0), u.add(i), (e = lS.bind(null, e, t, i)), t.then(e, e));
  }
  function lS(e, t, i) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (e.pingedLanes |= e.suspendedLanes & i),
      (e.warmLanes &= ~i),
      Te === e &&
        (me & i) === i &&
        (ze === 4 || (ze === 3 && (me & 62914560) === me && 300 > kt() - Ko)
          ? !(Oe & 2) && hi(e, 0)
          : (Xo |= i),
        di === me && (di = 0)),
      $t(e);
  }
  function Rp(e, t) {
    t === 0 && (t = Cd()), (e = Vn(e, t)), e !== null && (Li(e, t), $t(e));
  }
  function rS(e) {
    var t = e.memoizedState,
      i = 0;
    t !== null && (i = t.retryLane), Rp(e, i);
  }
  function sS(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), Rp(e, i);
  }
  function uS(e, t) {
    return gu(e, t);
  }
  var is = null,
    yi = null,
    tc = !1,
    ls = !1,
    nc = !1,
    Ca = 0;
  function $t(e) {
    e !== yi &&
      e.next === null &&
      (yi === null ? (is = yi = e) : (yi = yi.next = e)),
      (ls = !0),
      tc || ((tc = !0), cS(oS));
  }
  function Sl(e, t) {
    if (!nc && ls) {
      nc = !0;
      do
        for (var i = !1, r = is; r !== null; ) {
          if (e !== 0) {
            var u = r.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var y = r.suspendedLanes,
                b = r.pingedLanes;
              (c = (1 << (31 - ft(42 | e) + 1)) - 1),
                (c &= u & ~(y & ~b)),
                (c = c & 201326677 ? (c & 201326677) | 1 : c ? c | 2 : 0);
            }
            c !== 0 && ((i = !0), Op(r, c));
          } else
            (c = me),
              (c = mr(r, r === Te ? c : 0)),
              !(c & 3) || Ui(r, c) || ((i = !0), Op(r, c));
          r = r.next;
        }
      while (i);
      nc = !1;
    }
  }
  function oS() {
    ls = tc = !1;
    var e = 0;
    Ca !== 0 && (vS() && (e = Ca), (Ca = 0));
    for (var t = kt(), i = null, r = is; r !== null; ) {
      var u = r.next,
        c = Dp(r, t);
      c === 0
        ? ((r.next = null),
          i === null ? (is = u) : (i.next = u),
          u === null && (yi = i))
        : ((i = r), (e !== 0 || c & 3) && (ls = !0)),
        (r = u);
    }
    Sl(e);
  }
  function Dp(e, t) {
    for (
      var i = e.suspendedLanes,
        r = e.pingedLanes,
        u = e.expirationTimes,
        c = e.pendingLanes & -62914561;
      0 < c;

    ) {
      var y = 31 - ft(c),
        b = 1 << y,
        x = u[y];
      x === -1
        ? (!(b & i) || b & r) && (u[y] = V1(b, t))
        : x <= t && (e.expiredLanes |= b),
        (c &= ~b);
    }
    if (
      ((t = Te),
      (i = me),
      (i = mr(e, e === t ? i : 0)),
      (r = e.callbackNode),
      i === 0 || (e === t && Ee === 2) || e.cancelPendingCommit !== null)
    )
      return (
        r !== null && r !== null && vu(r),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if (!(i & 3) || Ui(e, i)) {
      if (((t = i & -i), t === e.callbackPriority)) return t;
      switch ((r !== null && vu(r), zd(i))) {
        case 2:
        case 8:
          i = Dd;
          break;
        case 32:
          i = fr;
          break;
        case 268435456:
          i = wd;
          break;
        default:
          i = fr;
      }
      return (
        (r = wp.bind(null, e)),
        (i = gu(i, r)),
        (e.callbackPriority = t),
        (e.callbackNode = i),
        t
      );
    }
    return (
      r !== null && r !== null && vu(r),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function wp(e, t) {
    var i = e.callbackNode;
    if (pi() && e.callbackNode !== i) return null;
    var r = me;
    return (
      (r = mr(e, e === Te ? r : 0)),
      r === 0
        ? null
        : (mp(e, r, t),
          Dp(e, kt()),
          e.callbackNode != null && e.callbackNode === i
            ? wp.bind(null, e)
            : null)
    );
  }
  function Op(e, t) {
    if (pi()) return null;
    mp(e, t, !0);
  }
  function cS(e) {
    SS(function () {
      Oe & 6 ? gu(Rd, e) : e();
    });
  }
  function ac() {
    return Ca === 0 && (Ca = Od()), Ca;
  }
  function Cp(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : br('' + e);
  }
  function Mp(e, t) {
    var i = t.ownerDocument.createElement('input');
    return (
      (i.name = t.name),
      (i.value = t.value),
      e.id && i.setAttribute('form', e.id),
      t.parentNode.insertBefore(i, t),
      (e = new FormData(e)),
      i.parentNode.removeChild(i),
      e
    );
  }
  function fS(e, t, i, r, u) {
    if (t === 'submit' && i && i.stateNode === u) {
      var c = Cp((u[st] || null).action),
        y = r.submitter;
      y &&
        ((t = (t = y[st] || null)
          ? Cp(t.formAction)
          : y.getAttribute('formAction')),
        t !== null && ((c = t), (y = null)));
      var b = new Er('action', 'action', null, r, u);
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (Ca !== 0) {
                  var x = y ? Mp(u, y) : new FormData(u);
                  fo(
                    i,
                    { pending: !0, data: x, method: u.method, action: c },
                    null,
                    x,
                  );
                }
              } else
                typeof c == 'function' &&
                  (b.preventDefault(),
                  (x = y ? Mp(u, y) : new FormData(u)),
                  fo(
                    i,
                    { pending: !0, data: x, method: u.method, action: c },
                    c,
                    x,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var ic = 0; ic < Th.length; ic++) {
    var lc = Th[ic],
      dS = lc.toLowerCase(),
      hS = lc[0].toUpperCase() + lc.slice(1);
    Bt(dS, 'on' + hS);
  }
  Bt(gh, 'onAnimationEnd'),
    Bt(vh, 'onAnimationIteration'),
    Bt(bh, 'onAnimationStart'),
    Bt('dblclick', 'onDoubleClick'),
    Bt('focusin', 'onFocus'),
    Bt('focusout', 'onBlur'),
    Bt(Mb, 'onTransitionRun'),
    Bt(_b, 'onTransitionStart'),
    Bt(zb, 'onTransitionCancel'),
    Bt(Sh, 'onTransitionEnd'),
    Ya('onMouseEnter', ['mouseout', 'mouseover']),
    Ya('onMouseLeave', ['mouseout', 'mouseover']),
    Ya('onPointerEnter', ['pointerout', 'pointerover']),
    Ya('onPointerLeave', ['pointerout', 'pointerover']),
    ca(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    ca(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    ca('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    ca(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    ca(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    ca(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var xl =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    mS = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(xl),
    );
  function _p(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var r = e[i],
        u = r.event;
      r = r.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var y = r.length - 1; 0 <= y; y--) {
            var b = r[y],
              x = b.instance,
              w = b.currentTarget;
            if (((b = b.listener), x !== c && u.isPropagationStopped()))
              break e;
            (c = b), (u.currentTarget = w);
            try {
              c(u);
            } catch (H) {
              kr(H);
            }
            (u.currentTarget = null), (c = x);
          }
        else
          for (y = 0; y < r.length; y++) {
            if (
              ((b = r[y]),
              (x = b.instance),
              (w = b.currentTarget),
              (b = b.listener),
              x !== c && u.isPropagationStopped())
            )
              break e;
            (c = b), (u.currentTarget = w);
            try {
              c(u);
            } catch (H) {
              kr(H);
            }
            (u.currentTarget = null), (c = x);
          }
      }
    }
  }
  function de(e, t) {
    var i = t[Su];
    i === void 0 && (i = t[Su] = new Set());
    var r = e + '__bubble';
    i.has(r) || (zp(t, e, 2, !1), i.add(r));
  }
  function rc(e, t, i) {
    var r = 0;
    t && (r |= 4), zp(i, e, r, t);
  }
  var rs = '_reactListening' + Math.random().toString(36).slice(2);
  function sc(e) {
    if (!e[rs]) {
      (e[rs] = !0),
        Vd.forEach(function (i) {
          i !== 'selectionchange' && (mS.has(i) || rc(i, !1, e), rc(i, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[rs] || ((t[rs] = !0), rc('selectionchange', !1, t));
    }
  }
  function zp(e, t, i, r) {
    switch (ty(t)) {
      case 2:
        var u = PS;
        break;
      case 8:
        u = qS;
        break;
      default:
        u = Sc;
    }
    (i = u.bind(null, t, i, e)),
      (u = void 0),
      !Ou ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (u = !0),
      r
        ? u !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: u })
          : e.addEventListener(t, i, !0)
        : u !== void 0
          ? e.addEventListener(t, i, { passive: u })
          : e.addEventListener(t, i, !1);
  }
  function uc(e, t, i, r, u) {
    var c = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var y = r.tag;
        if (y === 3 || y === 4) {
          var b = r.stateNode.containerInfo;
          if (b === u || (b.nodeType === 8 && b.parentNode === u)) break;
          if (y === 4)
            for (y = r.return; y !== null; ) {
              var x = y.tag;
              if (
                (x === 3 || x === 4) &&
                ((x = y.stateNode.containerInfo),
                x === u || (x.nodeType === 8 && x.parentNode === u))
              )
                return;
              y = y.return;
            }
          for (; b !== null; ) {
            if (((y = oa(b)), y === null)) return;
            if (((x = y.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              r = c = y;
              continue e;
            }
            b = b.parentNode;
          }
        }
        r = r.return;
      }
    Qd(function () {
      var w = c,
        H = Du(i),
        G = [];
      e: {
        var j = xh.get(e);
        if (j !== void 0) {
          var B = Er,
            J = e;
          switch (e) {
            case 'keypress':
              if (xr(i) === 0) break e;
            case 'keydown':
            case 'keyup':
              B = sb;
              break;
            case 'focusin':
              (J = 'focus'), (B = zu);
              break;
            case 'focusout':
              (J = 'blur'), (B = zu);
              break;
            case 'beforeblur':
            case 'afterblur':
              B = zu;
              break;
            case 'click':
              if (i.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              B = $d;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              B = F1;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              B = cb;
              break;
            case gh:
            case vh:
            case bh:
              B = W1;
              break;
            case Sh:
              B = db;
              break;
            case 'scroll':
            case 'scrollend':
              B = Q1;
              break;
            case 'wheel':
              B = mb;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              B = eb;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              B = Wd;
              break;
            case 'toggle':
            case 'beforetoggle':
              B = yb;
          }
          var re = (t & 4) !== 0,
            Ne = !re && (e === 'scroll' || e === 'scrollend'),
            C = re ? (j !== null ? j + 'Capture' : null) : j;
          re = [];
          for (var D = w, z; D !== null; ) {
            var P = D;
            if (
              ((z = P.stateNode),
              (P = P.tag),
              (P !== 5 && P !== 26 && P !== 27) ||
                z === null ||
                C === null ||
                ((P = Pi(D, C)), P != null && re.push(Tl(D, P, z))),
              Ne)
            )
              break;
            D = D.return;
          }
          0 < re.length &&
            ((j = new B(j, J, null, i, H)),
            G.push({ event: j, listeners: re }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((j = e === 'mouseover' || e === 'pointerover'),
            (B = e === 'mouseout' || e === 'pointerout'),
            j &&
              i !== Ru &&
              (J = i.relatedTarget || i.fromElement) &&
              (oa(J) || J[Pa]))
          )
            break e;
          if (
            (B || j) &&
            ((j =
              H.window === H
                ? H
                : (j = H.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            B
              ? ((J = i.relatedTarget || i.toElement),
                (B = w),
                (J = J ? oa(J) : null),
                J !== null &&
                  ((Ne = ee(J)),
                  (re = J.tag),
                  J !== Ne || (re !== 5 && re !== 27 && re !== 6)) &&
                  (J = null))
              : ((B = null), (J = w)),
            B !== J)
          ) {
            if (
              ((re = $d),
              (P = 'onMouseLeave'),
              (C = 'onMouseEnter'),
              (D = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((re = Wd),
                (P = 'onPointerLeave'),
                (C = 'onPointerEnter'),
                (D = 'pointer')),
              (Ne = B == null ? j : Hi(B)),
              (z = J == null ? j : Hi(J)),
              (j = new re(P, D + 'leave', B, i, H)),
              (j.target = Ne),
              (j.relatedTarget = z),
              (P = null),
              oa(H) === w &&
                ((re = new re(C, D + 'enter', J, i, H)),
                (re.target = z),
                (re.relatedTarget = Ne),
                (P = re)),
              (Ne = P),
              B && J)
            )
              t: {
                for (re = B, C = J, D = 0, z = re; z; z = gi(z)) D++;
                for (z = 0, P = C; P; P = gi(P)) z++;
                for (; 0 < D - z; ) (re = gi(re)), D--;
                for (; 0 < z - D; ) (C = gi(C)), z--;
                for (; D--; ) {
                  if (re === C || (C !== null && re === C.alternate)) break t;
                  (re = gi(re)), (C = gi(C));
                }
                re = null;
              }
            else re = null;
            B !== null && Np(G, j, B, re, !1),
              J !== null && Ne !== null && Np(G, Ne, J, re, !0);
          }
        }
        e: {
          if (
            ((j = w ? Hi(w) : window),
            (B = j.nodeName && j.nodeName.toLowerCase()),
            B === 'select' || (B === 'input' && j.type === 'file'))
          )
            var F = rh;
          else if (ih(j))
            if (sh) F = Db;
            else {
              F = Ab;
              var ce = Eb;
            }
          else
            (B = j.nodeName),
              !B ||
              B.toLowerCase() !== 'input' ||
              (j.type !== 'checkbox' && j.type !== 'radio')
                ? w && Au(w.elementType) && (F = rh)
                : (F = Rb);
          if (F && (F = F(e, w))) {
            lh(G, F, i, H);
            break e;
          }
          ce && ce(e, j, w),
            e === 'focusout' &&
              w &&
              j.type === 'number' &&
              w.memoizedProps.value != null &&
              Eu(j, 'number', j.value);
        }
        switch (((ce = w ? Hi(w) : window), e)) {
          case 'focusin':
            (ih(ce) || ce.contentEditable === 'true') &&
              ((Fa = ce), (Bu = w), (Zi = null));
            break;
          case 'focusout':
            Zi = Bu = Fa = null;
            break;
          case 'mousedown':
            Hu = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Hu = !1), ph(G, i, H);
            break;
          case 'selectionchange':
            if (Cb) break;
          case 'keydown':
          case 'keyup':
            ph(G, i, H);
        }
        var te;
        if (ju)
          e: {
            switch (e) {
              case 'compositionstart':
                var ae = 'onCompositionStart';
                break e;
              case 'compositionend':
                ae = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ae = 'onCompositionUpdate';
                break e;
            }
            ae = void 0;
          }
        else
          Za
            ? nh(e, i) && (ae = 'onCompositionEnd')
            : e === 'keydown' &&
              i.keyCode === 229 &&
              (ae = 'onCompositionStart');
        ae &&
          (Id &&
            i.locale !== 'ko' &&
            (Za || ae !== 'onCompositionStart'
              ? ae === 'onCompositionEnd' && Za && (te = Zd())
              : ((jn = H),
                (Cu = 'value' in jn ? jn.value : jn.textContent),
                (Za = !0))),
          (ce = ss(w, ae)),
          0 < ce.length &&
            ((ae = new Jd(ae, e, null, i, H)),
            G.push({ event: ae, listeners: ce }),
            te
              ? (ae.data = te)
              : ((te = ah(i)), te !== null && (ae.data = te)))),
          (te = vb ? bb(e, i) : Sb(e, i)) &&
            ((ae = ss(w, 'onBeforeInput')),
            0 < ae.length &&
              ((ce = new Jd('onBeforeInput', 'beforeinput', null, i, H)),
              G.push({ event: ce, listeners: ae }),
              (ce.data = te))),
          fS(G, e, w, i, H);
      }
      _p(G, t);
    });
  }
  function Tl(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function ss(e, t) {
    for (var i = t + 'Capture', r = []; e !== null; ) {
      var u = e,
        c = u.stateNode;
      (u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          c === null ||
          ((u = Pi(e, i)),
          u != null && r.unshift(Tl(e, u, c)),
          (u = Pi(e, t)),
          u != null && r.push(Tl(e, u, c))),
        (e = e.return);
    }
    return r;
  }
  function gi(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Np(e, t, i, r, u) {
    for (var c = t._reactName, y = []; i !== null && i !== r; ) {
      var b = i,
        x = b.alternate,
        w = b.stateNode;
      if (((b = b.tag), x !== null && x === r)) break;
      (b !== 5 && b !== 26 && b !== 27) ||
        w === null ||
        ((x = w),
        u
          ? ((w = Pi(i, c)), w != null && y.unshift(Tl(i, w, x)))
          : u || ((w = Pi(i, c)), w != null && y.push(Tl(i, w, x)))),
        (i = i.return);
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var pS = /\r\n?/g,
    yS = /\u0000|\uFFFD/g;
  function jp(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        pS,
        `
`,
      )
      .replace(yS, '');
  }
  function Vp(e, t) {
    return (t = jp(t)), jp(e) === t;
  }
  function us() {}
  function Se(e, t, i, r, u, c) {
    switch (i) {
      case 'children':
        typeof r == 'string'
          ? t === 'body' || (t === 'textarea' && r === '') || ka(e, r)
          : (typeof r == 'number' || typeof r == 'bigint') &&
            t !== 'body' &&
            ka(e, '' + r);
        break;
      case 'className':
        yr(e, 'class', r);
        break;
      case 'tabIndex':
        yr(e, 'tabindex', r);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        yr(e, i, r);
        break;
      case 'style':
        kd(e, r, c);
        break;
      case 'data':
        if (t !== 'object') {
          yr(e, 'data', r);
          break;
        }
      case 'src':
      case 'href':
        if (r === '' && (t !== 'a' || i !== 'href')) {
          e.removeAttribute(i);
          break;
        }
        if (
          r == null ||
          typeof r == 'function' ||
          typeof r == 'symbol' ||
          typeof r == 'boolean'
        ) {
          e.removeAttribute(i);
          break;
        }
        (r = br('' + r)), e.setAttribute(i, r);
        break;
      case 'action':
      case 'formAction':
        if (typeof r == 'function') {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof c == 'function' &&
            (i === 'formAction'
              ? (t !== 'input' && Se(e, t, 'name', u.name, u, null),
                Se(e, t, 'formEncType', u.formEncType, u, null),
                Se(e, t, 'formMethod', u.formMethod, u, null),
                Se(e, t, 'formTarget', u.formTarget, u, null))
              : (Se(e, t, 'encType', u.encType, u, null),
                Se(e, t, 'method', u.method, u, null),
                Se(e, t, 'target', u.target, u, null)));
        if (r == null || typeof r == 'symbol' || typeof r == 'boolean') {
          e.removeAttribute(i);
          break;
        }
        (r = br('' + r)), e.setAttribute(i, r);
        break;
      case 'onClick':
        r != null && (e.onclick = us);
        break;
      case 'onScroll':
        r != null && de('scroll', e);
        break;
      case 'onScrollEnd':
        r != null && de('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (r != null) {
          if (typeof r != 'object' || !('__html' in r)) throw Error(s(61));
          if (((i = r.__html), i != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = i;
          }
        }
        break;
      case 'multiple':
        e.multiple = r && typeof r != 'function' && typeof r != 'symbol';
        break;
      case 'muted':
        e.muted = r && typeof r != 'function' && typeof r != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (
          r == null ||
          typeof r == 'function' ||
          typeof r == 'boolean' ||
          typeof r == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        (i = br('' + r)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', i);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        r != null && typeof r != 'function' && typeof r != 'symbol'
          ? e.setAttribute(i, '' + r)
          : e.removeAttribute(i);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        r && typeof r != 'function' && typeof r != 'symbol'
          ? e.setAttribute(i, '')
          : e.removeAttribute(i);
        break;
      case 'capture':
      case 'download':
        r === !0
          ? e.setAttribute(i, '')
          : r !== !1 &&
              r != null &&
              typeof r != 'function' &&
              typeof r != 'symbol'
            ? e.setAttribute(i, r)
            : e.removeAttribute(i);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        r != null &&
        typeof r != 'function' &&
        typeof r != 'symbol' &&
        !isNaN(r) &&
        1 <= r
          ? e.setAttribute(i, r)
          : e.removeAttribute(i);
        break;
      case 'rowSpan':
      case 'start':
        r == null || typeof r == 'function' || typeof r == 'symbol' || isNaN(r)
          ? e.removeAttribute(i)
          : e.setAttribute(i, r);
        break;
      case 'popover':
        de('beforetoggle', e), de('toggle', e), pr(e, 'popover', r);
        break;
      case 'xlinkActuate':
        an(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', r);
        break;
      case 'xlinkArcrole':
        an(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', r);
        break;
      case 'xlinkRole':
        an(e, 'http://www.w3.org/1999/xlink', 'xlink:role', r);
        break;
      case 'xlinkShow':
        an(e, 'http://www.w3.org/1999/xlink', 'xlink:show', r);
        break;
      case 'xlinkTitle':
        an(e, 'http://www.w3.org/1999/xlink', 'xlink:title', r);
        break;
      case 'xlinkType':
        an(e, 'http://www.w3.org/1999/xlink', 'xlink:type', r);
        break;
      case 'xmlBase':
        an(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', r);
        break;
      case 'xmlLang':
        an(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', r);
        break;
      case 'xmlSpace':
        an(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', r);
        break;
      case 'is':
        pr(e, 'is', r);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < i.length) ||
          (i[0] !== 'o' && i[0] !== 'O') ||
          (i[1] !== 'n' && i[1] !== 'N')) &&
          ((i = k1.get(i) || i), pr(e, i, r));
    }
  }
  function oc(e, t, i, r, u, c) {
    switch (i) {
      case 'style':
        kd(e, r, c);
        break;
      case 'dangerouslySetInnerHTML':
        if (r != null) {
          if (typeof r != 'object' || !('__html' in r)) throw Error(s(61));
          if (((i = r.__html), i != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = i;
          }
        }
        break;
      case 'children':
        typeof r == 'string'
          ? ka(e, r)
          : (typeof r == 'number' || typeof r == 'bigint') && ka(e, '' + r);
        break;
      case 'onScroll':
        r != null && de('scroll', e);
        break;
      case 'onScrollEnd':
        r != null && de('scrollend', e);
        break;
      case 'onClick':
        r != null && (e.onclick = us);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Ud.hasOwnProperty(i))
          e: {
            if (
              i[0] === 'o' &&
              i[1] === 'n' &&
              ((u = i.endsWith('Capture')),
              (t = i.slice(2, u ? i.length - 7 : void 0)),
              (c = e[st] || null),
              (c = c != null ? c[i] : null),
              typeof c == 'function' && e.removeEventListener(t, c, u),
              typeof r == 'function')
            ) {
              typeof c != 'function' &&
                c !== null &&
                (i in e
                  ? (e[i] = null)
                  : e.hasAttribute(i) && e.removeAttribute(i)),
                e.addEventListener(t, r, u);
              break e;
            }
            i in e
              ? (e[i] = r)
              : r === !0
                ? e.setAttribute(i, '')
                : pr(e, i, r);
          }
    }
  }
  function Fe(e, t, i) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        de('error', e), de('load', e);
        var r = !1,
          u = !1,
          c;
        for (c in i)
          if (i.hasOwnProperty(c)) {
            var y = i[c];
            if (y != null)
              switch (c) {
                case 'src':
                  r = !0;
                  break;
                case 'srcSet':
                  u = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(s(137, t));
                default:
                  Se(e, t, c, y, i, null);
              }
          }
        u && Se(e, t, 'srcSet', i.srcSet, i, null),
          r && Se(e, t, 'src', i.src, i, null);
        return;
      case 'input':
        de('invalid', e);
        var b = (c = y = u = null),
          x = null,
          w = null;
        for (r in i)
          if (i.hasOwnProperty(r)) {
            var H = i[r];
            if (H != null)
              switch (r) {
                case 'name':
                  u = H;
                  break;
                case 'type':
                  y = H;
                  break;
                case 'checked':
                  x = H;
                  break;
                case 'defaultChecked':
                  w = H;
                  break;
                case 'value':
                  c = H;
                  break;
                case 'defaultValue':
                  b = H;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (H != null) throw Error(s(137, t));
                  break;
                default:
                  Se(e, t, r, H, i, null);
              }
          }
        qd(e, c, b, x, w, y, u, !1), gr(e);
        return;
      case 'select':
        de('invalid', e), (r = y = c = null);
        for (u in i)
          if (i.hasOwnProperty(u) && ((b = i[u]), b != null))
            switch (u) {
              case 'value':
                c = b;
                break;
              case 'defaultValue':
                y = b;
                break;
              case 'multiple':
                r = b;
              default:
                Se(e, t, u, b, i, null);
            }
        (t = c),
          (i = y),
          (e.multiple = !!r),
          t != null ? Xa(e, !!r, t, !1) : i != null && Xa(e, !!r, i, !0);
        return;
      case 'textarea':
        de('invalid', e), (c = u = r = null);
        for (y in i)
          if (i.hasOwnProperty(y) && ((b = i[y]), b != null))
            switch (y) {
              case 'value':
                r = b;
                break;
              case 'defaultValue':
                u = b;
                break;
              case 'children':
                c = b;
                break;
              case 'dangerouslySetInnerHTML':
                if (b != null) throw Error(s(91));
                break;
              default:
                Se(e, t, y, b, i, null);
            }
        Yd(e, r, u, c), gr(e);
        return;
      case 'option':
        for (x in i)
          if (i.hasOwnProperty(x) && ((r = i[x]), r != null))
            switch (x) {
              case 'selected':
                e.selected =
                  r && typeof r != 'function' && typeof r != 'symbol';
                break;
              default:
                Se(e, t, x, r, i, null);
            }
        return;
      case 'dialog':
        de('cancel', e), de('close', e);
        break;
      case 'iframe':
      case 'object':
        de('load', e);
        break;
      case 'video':
      case 'audio':
        for (r = 0; r < xl.length; r++) de(xl[r], e);
        break;
      case 'image':
        de('error', e), de('load', e);
        break;
      case 'details':
        de('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        de('error', e), de('load', e);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (w in i)
          if (i.hasOwnProperty(w) && ((r = i[w]), r != null))
            switch (w) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(s(137, t));
              default:
                Se(e, t, w, r, i, null);
            }
        return;
      default:
        if (Au(t)) {
          for (H in i)
            i.hasOwnProperty(H) &&
              ((r = i[H]), r !== void 0 && oc(e, t, H, r, i, void 0));
          return;
        }
    }
    for (b in i)
      i.hasOwnProperty(b) && ((r = i[b]), r != null && Se(e, t, b, r, i, null));
  }
  function gS(e, t, i, r) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var u = null,
          c = null,
          y = null,
          b = null,
          x = null,
          w = null,
          H = null;
        for (B in i) {
          var G = i[B];
          if (i.hasOwnProperty(B) && G != null)
            switch (B) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                x = G;
              default:
                r.hasOwnProperty(B) || Se(e, t, B, null, r, G);
            }
        }
        for (var j in r) {
          var B = r[j];
          if (((G = i[j]), r.hasOwnProperty(j) && (B != null || G != null)))
            switch (j) {
              case 'type':
                c = B;
                break;
              case 'name':
                u = B;
                break;
              case 'checked':
                w = B;
                break;
              case 'defaultChecked':
                H = B;
                break;
              case 'value':
                y = B;
                break;
              case 'defaultValue':
                b = B;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (B != null) throw Error(s(137, t));
                break;
              default:
                B !== G && Se(e, t, j, B, r, G);
            }
        }
        Tu(e, y, b, x, w, H, c, u);
        return;
      case 'select':
        B = y = b = j = null;
        for (c in i)
          if (((x = i[c]), i.hasOwnProperty(c) && x != null))
            switch (c) {
              case 'value':
                break;
              case 'multiple':
                B = x;
              default:
                r.hasOwnProperty(c) || Se(e, t, c, null, r, x);
            }
        for (u in r)
          if (
            ((c = r[u]),
            (x = i[u]),
            r.hasOwnProperty(u) && (c != null || x != null))
          )
            switch (u) {
              case 'value':
                j = c;
                break;
              case 'defaultValue':
                b = c;
                break;
              case 'multiple':
                y = c;
              default:
                c !== x && Se(e, t, u, c, r, x);
            }
        (t = b),
          (i = y),
          (r = B),
          j != null
            ? Xa(e, !!i, j, !1)
            : !!r != !!i &&
              (t != null ? Xa(e, !!i, t, !0) : Xa(e, !!i, i ? [] : '', !1));
        return;
      case 'textarea':
        B = j = null;
        for (b in i)
          if (
            ((u = i[b]),
            i.hasOwnProperty(b) && u != null && !r.hasOwnProperty(b))
          )
            switch (b) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Se(e, t, b, null, r, u);
            }
        for (y in r)
          if (
            ((u = r[y]),
            (c = i[y]),
            r.hasOwnProperty(y) && (u != null || c != null))
          )
            switch (y) {
              case 'value':
                j = u;
                break;
              case 'defaultValue':
                B = u;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== c && Se(e, t, y, u, r, c);
            }
        Gd(e, j, B);
        return;
      case 'option':
        for (var J in i)
          if (
            ((j = i[J]),
            i.hasOwnProperty(J) && j != null && !r.hasOwnProperty(J))
          )
            switch (J) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Se(e, t, J, null, r, j);
            }
        for (x in r)
          if (
            ((j = r[x]),
            (B = i[x]),
            r.hasOwnProperty(x) && j !== B && (j != null || B != null))
          )
            switch (x) {
              case 'selected':
                e.selected =
                  j && typeof j != 'function' && typeof j != 'symbol';
                break;
              default:
                Se(e, t, x, j, r, B);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var re in i)
          (j = i[re]),
            i.hasOwnProperty(re) &&
              j != null &&
              !r.hasOwnProperty(re) &&
              Se(e, t, re, null, r, j);
        for (w in r)
          if (
            ((j = r[w]),
            (B = i[w]),
            r.hasOwnProperty(w) && j !== B && (j != null || B != null))
          )
            switch (w) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (j != null) throw Error(s(137, t));
                break;
              default:
                Se(e, t, w, j, r, B);
            }
        return;
      default:
        if (Au(t)) {
          for (var Ne in i)
            (j = i[Ne]),
              i.hasOwnProperty(Ne) &&
                j !== void 0 &&
                !r.hasOwnProperty(Ne) &&
                oc(e, t, Ne, void 0, r, j);
          for (H in r)
            (j = r[H]),
              (B = i[H]),
              !r.hasOwnProperty(H) ||
                j === B ||
                (j === void 0 && B === void 0) ||
                oc(e, t, H, j, r, B);
          return;
        }
    }
    for (var C in i)
      (j = i[C]),
        i.hasOwnProperty(C) &&
          j != null &&
          !r.hasOwnProperty(C) &&
          Se(e, t, C, null, r, j);
    for (G in r)
      (j = r[G]),
        (B = i[G]),
        !r.hasOwnProperty(G) ||
          j === B ||
          (j == null && B == null) ||
          Se(e, t, G, j, r, B);
  }
  var cc = null,
    fc = null;
  function os(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Up(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Lp(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function dc(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var hc = null;
  function vS() {
    var e = window.event;
    return e && e.type === 'popstate'
      ? e === hc
        ? !1
        : ((hc = e), !0)
      : ((hc = null), !1);
  }
  var Bp = typeof setTimeout == 'function' ? setTimeout : void 0,
    bS = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Hp = typeof Promise == 'function' ? Promise : void 0,
    SS =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Hp < 'u'
          ? function (e) {
              return Hp.resolve(null).then(e).catch(xS);
            }
          : Bp;
  function xS(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function mc(e, t) {
    var i = t,
      r = 0;
    do {
      var u = i.nextSibling;
      if ((e.removeChild(i), u && u.nodeType === 8))
        if (((i = u.data), i === '/$')) {
          if (r === 0) {
            e.removeChild(u), Ml(t);
            return;
          }
          r--;
        } else (i !== '$' && i !== '$?' && i !== '$!') || r++;
      i = u;
    } while (i);
    Ml(t);
  }
  function pc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var i = t;
      switch (((t = t.nextSibling), i.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          pc(i), xu(i);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (i.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(i);
    }
  }
  function TS(e, t, i, r) {
    for (; e.nodeType === 1; ) {
      var u = i;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (r) {
        if (!e[Bi])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((c = e.getAttribute('rel')),
                c === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                c !== u.rel ||
                e.getAttribute('href') !== (u.href == null ? null : u.href) ||
                e.getAttribute('crossorigin') !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute('title') !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((c = e.getAttribute('src')),
                (c !== (u.src == null ? null : u.src) ||
                  e.getAttribute('type') !== (u.type == null ? null : u.type) ||
                  e.getAttribute('crossorigin') !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  c &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var c = u.name == null ? null : '' + u.name;
        if (u.type === 'hidden' && e.getAttribute('name') === c) return e;
      } else return e;
      if (((e = qt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function ES(e, t, i) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !i) ||
        ((e = qt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function qt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
        )
          break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function Pp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === '$' || i === '$!' || i === '$?') {
          if (t === 0) return e;
          t--;
        } else i === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function qp(e, t, i) {
    switch (((t = os(i)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  var Vt = new Map(),
    Gp = new Set();
  function cs(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var bn = Z.d;
  Z.d = { f: AS, r: RS, D: DS, C: wS, L: OS, m: CS, X: _S, S: MS, M: zS };
  function AS() {
    var e = bn.f(),
      t = ns();
    return e || t;
  }
  function RS(e) {
    var t = qa(e);
    t !== null && t.tag === 5 && t.type === 'form' ? pm(t) : bn.r(e);
  }
  var vi = typeof document > 'u' ? null : document;
  function Yp(e, t, i) {
    var r = vi;
    if (r && typeof t == 'string' && t) {
      var u = Rt(t);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof i == 'string' && (u += '[crossorigin="' + i + '"]'),
        Gp.has(u) ||
          (Gp.add(u),
          (e = { rel: e, crossOrigin: i, href: t }),
          r.querySelector(u) === null &&
            ((t = r.createElement('link')),
            Fe(t, 'link', e),
            Ye(t),
            r.head.appendChild(t)));
    }
  }
  function DS(e) {
    bn.D(e), Yp('dns-prefetch', e, null);
  }
  function wS(e, t) {
    bn.C(e, t), Yp('preconnect', e, t);
  }
  function OS(e, t, i) {
    bn.L(e, t, i);
    var r = vi;
    if (r && e && t) {
      var u = 'link[rel="preload"][as="' + Rt(t) + '"]';
      t === 'image' && i && i.imageSrcSet
        ? ((u += '[imagesrcset="' + Rt(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == 'string' &&
            (u += '[imagesizes="' + Rt(i.imageSizes) + '"]'))
        : (u += '[href="' + Rt(e) + '"]');
      var c = u;
      switch (t) {
        case 'style':
          c = bi(e);
          break;
        case 'script':
          c = Si(e);
      }
      Vt.has(c) ||
        ((e = W(
          {
            rel: 'preload',
            href: t === 'image' && i && i.imageSrcSet ? void 0 : e,
            as: t,
          },
          i,
        )),
        Vt.set(c, e),
        r.querySelector(u) !== null ||
          (t === 'style' && r.querySelector(El(c))) ||
          (t === 'script' && r.querySelector(Al(c))) ||
          ((t = r.createElement('link')),
          Fe(t, 'link', e),
          Ye(t),
          r.head.appendChild(t)));
    }
  }
  function CS(e, t) {
    bn.m(e, t);
    var i = vi;
    if (i && e) {
      var r = t && typeof t.as == 'string' ? t.as : 'script',
        u =
          'link[rel="modulepreload"][as="' + Rt(r) + '"][href="' + Rt(e) + '"]',
        c = u;
      switch (r) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          c = Si(e);
      }
      if (
        !Vt.has(c) &&
        ((e = W({ rel: 'modulepreload', href: e }, t)),
        Vt.set(c, e),
        i.querySelector(u) === null)
      ) {
        switch (r) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (i.querySelector(Al(c))) return;
        }
        (r = i.createElement('link')),
          Fe(r, 'link', e),
          Ye(r),
          i.head.appendChild(r);
      }
    }
  }
  function MS(e, t, i) {
    bn.S(e, t, i);
    var r = vi;
    if (r && e) {
      var u = Ga(r).hoistableStyles,
        c = bi(e);
      t = t || 'default';
      var y = u.get(c);
      if (!y) {
        var b = { loading: 0, preload: null };
        if ((y = r.querySelector(El(c)))) b.loading = 5;
        else {
          (e = W({ rel: 'stylesheet', href: e, 'data-precedence': t }, i)),
            (i = Vt.get(c)) && yc(e, i);
          var x = (y = r.createElement('link'));
          Ye(x),
            Fe(x, 'link', e),
            (x._p = new Promise(function (w, H) {
              (x.onload = w), (x.onerror = H);
            })),
            x.addEventListener('load', function () {
              b.loading |= 1;
            }),
            x.addEventListener('error', function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            fs(y, t, r);
        }
        (y = { type: 'stylesheet', instance: y, count: 1, state: b }),
          u.set(c, y);
      }
    }
  }
  function _S(e, t) {
    bn.X(e, t);
    var i = vi;
    if (i && e) {
      var r = Ga(i).hoistableScripts,
        u = Si(e),
        c = r.get(u);
      c ||
        ((c = i.querySelector(Al(u))),
        c ||
          ((e = W({ src: e, async: !0 }, t)),
          (t = Vt.get(u)) && gc(e, t),
          (c = i.createElement('script')),
          Ye(c),
          Fe(c, 'link', e),
          i.head.appendChild(c)),
        (c = { type: 'script', instance: c, count: 1, state: null }),
        r.set(u, c));
    }
  }
  function zS(e, t) {
    bn.M(e, t);
    var i = vi;
    if (i && e) {
      var r = Ga(i).hoistableScripts,
        u = Si(e),
        c = r.get(u);
      c ||
        ((c = i.querySelector(Al(u))),
        c ||
          ((e = W({ src: e, async: !0, type: 'module' }, t)),
          (t = Vt.get(u)) && gc(e, t),
          (c = i.createElement('script')),
          Ye(c),
          Fe(c, 'link', e),
          i.head.appendChild(c)),
        (c = { type: 'script', instance: c, count: 1, state: null }),
        r.set(u, c));
    }
  }
  function Xp(e, t, i, r) {
    var u = (u = _n.current) ? cs(u) : null;
    if (!u) throw Error(s(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof i.precedence == 'string' && typeof i.href == 'string'
          ? ((t = bi(i.href)),
            (i = Ga(u).hoistableStyles),
            (r = i.get(t)),
            r ||
              ((r = { type: 'style', instance: null, count: 0, state: null }),
              i.set(t, r)),
            r)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          i.rel === 'stylesheet' &&
          typeof i.href == 'string' &&
          typeof i.precedence == 'string'
        ) {
          e = bi(i.href);
          var c = Ga(u).hoistableStyles,
            y = c.get(e);
          if (
            (y ||
              ((u = u.ownerDocument || u),
              (y = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(e, y),
              (c = u.querySelector(El(e))) &&
                !c._p &&
                ((y.instance = c), (y.state.loading = 5)),
              Vt.has(e) ||
                ((i = {
                  rel: 'preload',
                  as: 'style',
                  href: i.href,
                  crossOrigin: i.crossOrigin,
                  integrity: i.integrity,
                  media: i.media,
                  hrefLang: i.hrefLang,
                  referrerPolicy: i.referrerPolicy,
                }),
                Vt.set(e, i),
                c || NS(u, e, i, y.state))),
            t && r === null)
          )
            throw Error(s(528, ''));
          return y;
        }
        if (t && r !== null) throw Error(s(529, ''));
        return null;
      case 'script':
        return (
          (t = i.async),
          (i = i.src),
          typeof i == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = Si(i)),
              (i = Ga(u).hoistableScripts),
              (r = i.get(t)),
              r ||
                ((r = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                i.set(t, r)),
              r)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function bi(e) {
    return 'href="' + Rt(e) + '"';
  }
  function El(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function kp(e) {
    return W({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function NS(e, t, i, r) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (r.loading = 1)
      : ((t = e.createElement('link')),
        (r.preload = t),
        t.addEventListener('load', function () {
          return (r.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (r.loading |= 2);
        }),
        Fe(t, 'link', i),
        Ye(t),
        e.head.appendChild(t));
  }
  function Si(e) {
    return '[src="' + Rt(e) + '"]';
  }
  function Al(e) {
    return 'script[async]' + e;
  }
  function Kp(e, t, i) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var r = e.querySelector('style[data-href~="' + Rt(i.href) + '"]');
          if (r) return (t.instance = r), Ye(r), r;
          var u = W({}, i, {
            'data-href': i.href,
            'data-precedence': i.precedence,
            href: null,
            precedence: null,
          });
          return (
            (r = (e.ownerDocument || e).createElement('style')),
            Ye(r),
            Fe(r, 'style', u),
            fs(r, i.precedence, e),
            (t.instance = r)
          );
        case 'stylesheet':
          u = bi(i.href);
          var c = e.querySelector(El(u));
          if (c) return (t.state.loading |= 4), (t.instance = c), Ye(c), c;
          (r = kp(i)),
            (u = Vt.get(u)) && yc(r, u),
            (c = (e.ownerDocument || e).createElement('link')),
            Ye(c);
          var y = c;
          return (
            (y._p = new Promise(function (b, x) {
              (y.onload = b), (y.onerror = x);
            })),
            Fe(c, 'link', r),
            (t.state.loading |= 4),
            fs(c, i.precedence, e),
            (t.instance = c)
          );
        case 'script':
          return (
            (c = Si(i.src)),
            (u = e.querySelector(Al(c)))
              ? ((t.instance = u), Ye(u), u)
              : ((r = i),
                (u = Vt.get(c)) && ((r = W({}, i)), gc(r, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement('script')),
                Ye(u),
                Fe(u, 'link', r),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case 'void':
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        !(t.state.loading & 4) &&
        ((r = t.instance), (t.state.loading |= 4), fs(r, i.precedence, e));
    return t.instance;
  }
  function fs(e, t, i) {
    for (
      var r = i.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = r.length ? r[r.length - 1] : null,
        c = u,
        y = 0;
      y < r.length;
      y++
    ) {
      var b = r[y];
      if (b.dataset.precedence === t) c = b;
      else if (c !== u) break;
    }
    c
      ? c.parentNode.insertBefore(e, c.nextSibling)
      : ((t = i.nodeType === 9 ? i.head : i), t.insertBefore(e, t.firstChild));
  }
  function yc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function gc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var ds = null;
  function Qp(e, t, i) {
    if (ds === null) {
      var r = new Map(),
        u = (ds = new Map());
      u.set(i, r);
    } else (u = ds), (r = u.get(i)), r || ((r = new Map()), u.set(i, r));
    if (r.has(e)) return r;
    for (
      r.set(e, null), i = i.getElementsByTagName(e), u = 0;
      u < i.length;
      u++
    ) {
      var c = i[u];
      if (
        !(
          c[Bi] ||
          c[We] ||
          (e === 'link' && c.getAttribute('rel') === 'stylesheet')
        ) &&
        c.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var y = c.getAttribute(t) || '';
        y = e + y;
        var b = r.get(y);
        b ? b.push(c) : r.set(y, [c]);
      }
    }
    return r;
  }
  function Zp(e, t, i) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        i,
        t === 'title' ? e.querySelector('head > title') : null,
      );
  }
  function jS(e, t, i) {
    if (i === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return (
              (e = t.disabled), typeof t.precedence == 'string' && e == null
            );
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Fp(e) {
    return !(e.type === 'stylesheet' && !(e.state.loading & 3));
  }
  var Rl = null;
  function VS() {}
  function US(e, t, i) {
    if (Rl === null) throw Error(s(475));
    var r = Rl;
    if (
      t.type === 'stylesheet' &&
      (typeof i.media != 'string' || matchMedia(i.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var u = bi(i.href),
          c = e.querySelector(El(u));
        if (c) {
          (e = c._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (r.count++, (r = hs.bind(r)), e.then(r, r)),
            (t.state.loading |= 4),
            (t.instance = c),
            Ye(c);
          return;
        }
        (c = e.ownerDocument || e),
          (i = kp(i)),
          (u = Vt.get(u)) && yc(i, u),
          (c = c.createElement('link')),
          Ye(c);
        var y = c;
        (y._p = new Promise(function (b, x) {
          (y.onload = b), (y.onerror = x);
        })),
          Fe(c, 'link', i),
          (t.instance = c);
      }
      r.stylesheets === null && (r.stylesheets = new Map()),
        r.stylesheets.set(t, e),
        (e = t.state.preload) &&
          !(t.state.loading & 3) &&
          (r.count++,
          (t = hs.bind(r)),
          e.addEventListener('load', t),
          e.addEventListener('error', t));
    }
  }
  function LS() {
    if (Rl === null) throw Error(s(475));
    var e = Rl;
    return (
      e.stylesheets && e.count === 0 && vc(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var i = setTimeout(function () {
              if ((e.stylesheets && vc(e, e.stylesheets), e.unsuspend)) {
                var r = e.unsuspend;
                (e.unsuspend = null), r();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(i);
              }
            );
          }
        : null
    );
  }
  function hs() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) vc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var ms = null;
  function vc(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (ms = new Map()),
        t.forEach(BS, e),
        (ms = null),
        hs.call(e));
  }
  function BS(e, t) {
    if (!(t.state.loading & 4)) {
      var i = ms.get(e);
      if (i) var r = i.get(null);
      else {
        (i = new Map()), ms.set(e, i);
        for (
          var u = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            c = 0;
          c < u.length;
          c++
        ) {
          var y = u[c];
          (y.nodeName === 'LINK' || y.getAttribute('media') !== 'not all') &&
            (i.set(y.dataset.precedence, y), (r = y));
        }
        r && i.set(null, r);
      }
      (u = t.instance),
        (y = u.getAttribute('data-precedence')),
        (c = i.get(y) || r),
        c === r && i.set(null, u),
        i.set(y, u),
        this.count++,
        (r = hs.bind(this)),
        u.addEventListener('load', r),
        u.addEventListener('error', r),
        c
          ? c.parentNode.insertBefore(u, c.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Dl = {
    $$typeof: T,
    Provider: null,
    Consumer: null,
    _currentValue: he,
    _currentValue2: he,
    _threadCount: 0,
  };
  function HS(e, t, i, r, u, c, y, b) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = bu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = bu(0)),
      (this.hiddenUpdates = bu(null)),
      (this.identifierPrefix = r),
      (this.onUncaughtError = u),
      (this.onCaughtError = c),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map());
  }
  function $p(e, t, i, r, u, c, y, b, x, w, H, G) {
    return (
      (e = new HS(e, t, i, y, b, x, w, G)),
      (t = 1),
      c === !0 && (t |= 24),
      (c = Nt(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (t = Fu()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (c.memoizedState = { element: r, isDehydrated: i, cache: t }),
      Mo(c),
      e
    );
  }
  function Jp(e) {
    return e ? ((e = Wa), e) : Wa;
  }
  function Wp(e, t, i, r, u, c) {
    (u = Jp(u)),
      r.context === null ? (r.context = u) : (r.pendingContext = u),
      (r = Gn(t)),
      (r.payload = { element: i }),
      (c = c === void 0 ? null : c),
      c !== null && (r.callback = c),
      (i = Yn(e, r, t)),
      i !== null && (rt(i, e, t), ol(i, e, t));
  }
  function Ip(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function bc(e, t) {
    Ip(e, t), (e = e.alternate) && Ip(e, t);
  }
  function ey(e) {
    if (e.tag === 13) {
      var t = Vn(e, 67108864);
      t !== null && rt(t, e, 67108864), bc(e, 67108864);
    }
  }
  var ps = !0;
  function PS(e, t, i, r) {
    var u = k.T;
    k.T = null;
    var c = Z.p;
    try {
      (Z.p = 2), Sc(e, t, i, r);
    } finally {
      (Z.p = c), (k.T = u);
    }
  }
  function qS(e, t, i, r) {
    var u = k.T;
    k.T = null;
    var c = Z.p;
    try {
      (Z.p = 8), Sc(e, t, i, r);
    } finally {
      (Z.p = c), (k.T = u);
    }
  }
  function Sc(e, t, i, r) {
    if (ps) {
      var u = xc(r);
      if (u === null) uc(e, t, r, ys, i), ny(e, r);
      else if (YS(u, e, t, i, r)) r.stopPropagation();
      else if ((ny(e, r), t & 4 && -1 < GS.indexOf(e))) {
        for (; u !== null; ) {
          var c = qa(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var y = ua(c.pendingLanes);
                  if (y !== 0) {
                    var b = c;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; y; ) {
                      var x = 1 << (31 - ft(y));
                      (b.entanglements[1] |= x), (y &= ~x);
                    }
                    $t(c), !(Oe & 6) && ((Ir = kt() + 500), Sl(0));
                  }
                }
                break;
              case 13:
                (b = Vn(c, 2)), b !== null && rt(b, c, 2), ns(), bc(c, 2);
            }
          if (((c = xc(r)), c === null && uc(e, t, r, ys, i), c === u)) break;
          u = c;
        }
        u !== null && r.stopPropagation();
      } else uc(e, t, r, null, i);
    }
  }
  function xc(e) {
    return (e = Du(e)), Tc(e);
  }
  var ys = null;
  function Tc(e) {
    if (((ys = null), (e = oa(e)), e !== null)) {
      var t = ee(e);
      if (t === null) e = null;
      else {
        var i = t.tag;
        if (i === 13) {
          if (((e = ge(t)), e !== null)) return e;
          e = null;
        } else if (i === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (ys = e), null;
  }
  function ty(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (w1()) {
          case Rd:
            return 2;
          case Dd:
            return 8;
          case fr:
          case O1:
            return 32;
          case wd:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ec = !1,
    $n = null,
    Jn = null,
    Wn = null,
    wl = new Map(),
    Ol = new Map(),
    In = [],
    GS =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function ny(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        $n = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Jn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Wn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        wl.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Ol.delete(t.pointerId);
    }
  }
  function Cl(e, t, i, r, u, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: i,
          eventSystemFlags: r,
          nativeEvent: c,
          targetContainers: [u],
        }),
        t !== null && ((t = qa(t)), t !== null && ey(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function YS(e, t, i, r, u) {
    switch (t) {
      case 'focusin':
        return ($n = Cl($n, e, t, i, r, u)), !0;
      case 'dragenter':
        return (Jn = Cl(Jn, e, t, i, r, u)), !0;
      case 'mouseover':
        return (Wn = Cl(Wn, e, t, i, r, u)), !0;
      case 'pointerover':
        var c = u.pointerId;
        return wl.set(c, Cl(wl.get(c) || null, e, t, i, r, u)), !0;
      case 'gotpointercapture':
        return (
          (c = u.pointerId), Ol.set(c, Cl(Ol.get(c) || null, e, t, i, r, u)), !0
        );
    }
    return !1;
  }
  function ay(e) {
    var t = oa(e.target);
    if (t !== null) {
      var i = ee(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = ge(i)), t !== null)) {
            (e.blockedOn = t),
              L1(e.priority, function () {
                if (i.tag === 13) {
                  var r = yt(),
                    u = Vn(i, r);
                  u !== null && rt(u, i, r), bc(i, r);
                }
              });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function gs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = xc(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var r = new i.constructor(i.type, i);
        (Ru = r), i.target.dispatchEvent(r), (Ru = null);
      } else return (t = qa(i)), t !== null && ey(t), (e.blockedOn = i), !1;
      t.shift();
    }
    return !0;
  }
  function iy(e, t, i) {
    gs(e) && i.delete(t);
  }
  function XS() {
    (Ec = !1),
      $n !== null && gs($n) && ($n = null),
      Jn !== null && gs(Jn) && (Jn = null),
      Wn !== null && gs(Wn) && (Wn = null),
      wl.forEach(iy),
      Ol.forEach(iy);
  }
  function vs(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ec ||
        ((Ec = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, XS)));
  }
  var bs = null;
  function ly(e) {
    bs !== e &&
      ((bs = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        bs === e && (bs = null);
        for (var t = 0; t < e.length; t += 3) {
          var i = e[t],
            r = e[t + 1],
            u = e[t + 2];
          if (typeof r != 'function') {
            if (Tc(r || i) === null) continue;
            break;
          }
          var c = qa(i);
          c !== null &&
            (e.splice(t, 3),
            (t -= 3),
            fo(c, { pending: !0, data: u, method: i.method, action: r }, r, u));
        }
      }));
  }
  function Ml(e) {
    function t(x) {
      return vs(x, e);
    }
    $n !== null && vs($n, e),
      Jn !== null && vs(Jn, e),
      Wn !== null && vs(Wn, e),
      wl.forEach(t),
      Ol.forEach(t);
    for (var i = 0; i < In.length; i++) {
      var r = In[i];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < In.length && ((i = In[0]), i.blockedOn === null); )
      ay(i), i.blockedOn === null && In.shift();
    if (((i = (e.ownerDocument || e).$$reactFormReplay), i != null))
      for (r = 0; r < i.length; r += 3) {
        var u = i[r],
          c = i[r + 1],
          y = u[st] || null;
        if (typeof c == 'function') y || ly(i);
        else if (y) {
          var b = null;
          if (c && c.hasAttribute('formAction')) {
            if (((u = c), (y = c[st] || null))) b = y.formAction;
            else if (Tc(u) !== null) continue;
          } else b = y.action;
          typeof b == 'function' ? (i[r + 1] = b) : (i.splice(r, 3), (r -= 3)),
            ly(i);
        }
      }
  }
  function Ac(e) {
    this._internalRoot = e;
  }
  (Ss.prototype.render = Ac.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var i = t.current,
        r = yt();
      Wp(i, r, e, t, null, null);
    }),
    (Ss.prototype.unmount = Ac.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && pi(),
            Wp(e.current, 2, null, e, null, null),
            ns(),
            (t[Pa] = null);
        }
      });
  function Ss(e) {
    this._internalRoot = e;
  }
  Ss.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Nd();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < In.length && t !== 0 && t < In[i].priority; i++);
      In.splice(i, 0, e), i === 0 && ay(e);
    }
  };
  var ry = a.version;
  if (ry !== '19.0.0') throw Error(s(527, ry, '19.0.0'));
  Z.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(s(188))
        : ((e = Object.keys(e).join(',')), Error(s(268, e)));
    return (
      (e = X(t)),
      (e = e !== null ? le(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var kS = {
    bundleType: 0,
    version: '19.0.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: k,
    findFiberByHostInstance: oa,
    reconcilerVersion: '19.0.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xs.isDisabled && xs.supportsFiber)
      try {
        (Vi = xs.inject(kS)), (ct = xs);
      } catch {}
  }
  return (
    (zl.createRoot = function (e, t) {
      if (!o(e)) throw Error(s(299));
      var i = !1,
        r = '',
        u = Em,
        c = Am,
        y = Rm,
        b = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (b = t.unstable_transitionCallbacks)),
        (t = $p(e, 1, !1, null, null, i, r, u, c, y, b, null)),
        (e[Pa] = t.current),
        sc(e.nodeType === 8 ? e.parentNode : e),
        new Ac(t)
      );
    }),
    (zl.hydrateRoot = function (e, t, i) {
      if (!o(e)) throw Error(s(299));
      var r = !1,
        u = '',
        c = Em,
        y = Am,
        b = Rm,
        x = null,
        w = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (r = !0),
          i.identifierPrefix !== void 0 && (u = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (c = i.onUncaughtError),
          i.onCaughtError !== void 0 && (y = i.onCaughtError),
          i.onRecoverableError !== void 0 && (b = i.onRecoverableError),
          i.unstable_transitionCallbacks !== void 0 &&
            (x = i.unstable_transitionCallbacks),
          i.formState !== void 0 && (w = i.formState)),
        (t = $p(e, 1, !0, t, i ?? null, r, u, c, y, b, x, w)),
        (t.context = Jp(null)),
        (i = t.current),
        (r = yt()),
        (u = Gn(r)),
        (u.callback = null),
        Yn(i, u, r),
        (t.current.lanes = r),
        Li(t, r),
        $t(t),
        (e[Pa] = t.current),
        sc(e),
        new Ss(t)
      );
    }),
    (zl.version = '19.0.0'),
    zl
  );
}
var yy;
function ex() {
  if (yy) return wc.exports;
  yy = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (wc.exports = IS()), wc.exports;
}
var tx = ex(),
  Nl = {},
  gy;
function nx() {
  if (gy) return Nl;
  (gy = 1),
    Object.defineProperty(Nl, '__esModule', { value: !0 }),
    (Nl.parse = d),
    (Nl.serialize = p);
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    a = /^[\u0021-\u003A\u003C-\u007E]*$/,
    l =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    s = /^[\u0020-\u003A\u003D-\u007E]*$/,
    o = Object.prototype.toString,
    f = (() => {
      const S = function () {};
      return (S.prototype = Object.create(null)), S;
    })();
  function d(S, T) {
    const A = new f(),
      M = S.length;
    if (M < 2) return A;
    const _ = (T == null ? void 0 : T.decode) || g;
    let O = 0;
    do {
      const N = S.indexOf('=', O);
      if (N === -1) break;
      const U = S.indexOf(';', O),
        q = U === -1 ? M : U;
      if (N > q) {
        O = S.lastIndexOf(';', N - 1) + 1;
        continue;
      }
      const V = m(S, O, N),
        Y = h(S, N, V),
        $ = S.slice(V, Y);
      if (A[$] === void 0) {
        let K = m(S, N + 1, q),
          k = h(S, q, K);
        const W = _(S.slice(K, k));
        A[$] = W;
      }
      O = q + 1;
    } while (O < M);
    return A;
  }
  function m(S, T, A) {
    do {
      const M = S.charCodeAt(T);
      if (M !== 32 && M !== 9) return T;
    } while (++T < A);
    return A;
  }
  function h(S, T, A) {
    for (; T > A; ) {
      const M = S.charCodeAt(--T);
      if (M !== 32 && M !== 9) return T + 1;
    }
    return A;
  }
  function p(S, T, A) {
    const M = (A == null ? void 0 : A.encode) || encodeURIComponent;
    if (!n.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
    const _ = M(T);
    if (!a.test(_)) throw new TypeError(`argument val is invalid: ${T}`);
    let O = S + '=' + _;
    if (!A) return O;
    if (A.maxAge !== void 0) {
      if (!Number.isInteger(A.maxAge))
        throw new TypeError(`option maxAge is invalid: ${A.maxAge}`);
      O += '; Max-Age=' + A.maxAge;
    }
    if (A.domain) {
      if (!l.test(A.domain))
        throw new TypeError(`option domain is invalid: ${A.domain}`);
      O += '; Domain=' + A.domain;
    }
    if (A.path) {
      if (!s.test(A.path))
        throw new TypeError(`option path is invalid: ${A.path}`);
      O += '; Path=' + A.path;
    }
    if (A.expires) {
      if (!v(A.expires) || !Number.isFinite(A.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${A.expires}`);
      O += '; Expires=' + A.expires.toUTCString();
    }
    if (
      (A.httpOnly && (O += '; HttpOnly'),
      A.secure && (O += '; Secure'),
      A.partitioned && (O += '; Partitioned'),
      A.priority)
    )
      switch (
        typeof A.priority == 'string' ? A.priority.toLowerCase() : void 0
      ) {
        case 'low':
          O += '; Priority=Low';
          break;
        case 'medium':
          O += '; Priority=Medium';
          break;
        case 'high':
          O += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${A.priority}`);
      }
    if (A.sameSite)
      switch (
        typeof A.sameSite == 'string' ? A.sameSite.toLowerCase() : A.sameSite
      ) {
        case !0:
        case 'strict':
          O += '; SameSite=Strict';
          break;
        case 'lax':
          O += '; SameSite=Lax';
          break;
        case 'none':
          O += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${A.sameSite}`);
      }
    return O;
  }
  function g(S) {
    if (S.indexOf('%') === -1) return S;
    try {
      return decodeURIComponent(S);
    } catch {
      return S;
    }
  }
  function v(S) {
    return o.call(S) === '[object Date]';
  }
  return Nl;
}
nx();
/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var vy = 'popstate';
function ax(n = {}) {
  function a(s, o) {
    let { pathname: f, search: d, hash: m } = s.location;
    return Wc(
      '',
      { pathname: f, search: d, hash: m },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
    );
  }
  function l(s, o) {
    return typeof o == 'string' ? o : kl(o);
  }
  return lx(a, l, null, n);
}
function Me(n, a) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(a);
}
function en(n, a) {
  if (!n) {
    typeof console < 'u' && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function ix() {
  return Math.random().toString(36).substring(2, 10);
}
function by(n, a) {
  return { usr: n.state, key: n.key, idx: a };
}
function Wc(n, a, l = null, s) {
  return {
    pathname: typeof n == 'string' ? n : n.pathname,
    search: '',
    hash: '',
    ...(typeof a == 'string' ? Mi(a) : a),
    state: l,
    key: (a && a.key) || s || ix(),
  };
}
function kl({ pathname: n = '/', search: a = '', hash: l = '' }) {
  return (
    a && a !== '?' && (n += a.charAt(0) === '?' ? a : '?' + a),
    l && l !== '#' && (n += l.charAt(0) === '#' ? l : '#' + l),
    n
  );
}
function Mi(n) {
  let a = {};
  if (n) {
    let l = n.indexOf('#');
    l >= 0 && ((a.hash = n.substring(l)), (n = n.substring(0, l)));
    let s = n.indexOf('?');
    s >= 0 && ((a.search = n.substring(s)), (n = n.substring(0, s))),
      n && (a.pathname = n);
  }
  return a;
}
function lx(n, a, l, s = {}) {
  let { window: o = document.defaultView, v5Compat: f = !1 } = s,
    d = o.history,
    m = 'POP',
    h = null,
    p = g();
  p == null && ((p = 0), d.replaceState({ ...d.state, idx: p }, ''));
  function g() {
    return (d.state || { idx: null }).idx;
  }
  function v() {
    m = 'POP';
    let _ = g(),
      O = _ == null ? null : _ - p;
    (p = _), h && h({ action: m, location: M.location, delta: O });
  }
  function S(_, O) {
    m = 'PUSH';
    let N = Wc(M.location, _, O);
    p = g() + 1;
    let U = by(N, p),
      q = M.createHref(N);
    try {
      d.pushState(U, '', q);
    } catch (V) {
      if (V instanceof DOMException && V.name === 'DataCloneError') throw V;
      o.location.assign(q);
    }
    f && h && h({ action: m, location: M.location, delta: 1 });
  }
  function T(_, O) {
    m = 'REPLACE';
    let N = Wc(M.location, _, O);
    p = g();
    let U = by(N, p),
      q = M.createHref(N);
    d.replaceState(U, '', q),
      f && h && h({ action: m, location: M.location, delta: 0 });
  }
  function A(_) {
    let O = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      N = typeof _ == 'string' ? _ : kl(_);
    return (
      (N = N.replace(/ $/, '%20')),
      Me(
        O,
        `No window.location.(origin|href) available to create URL for href: ${N}`,
      ),
      new URL(N, O)
    );
  }
  let M = {
    get action() {
      return m;
    },
    get location() {
      return n(o, d);
    },
    listen(_) {
      if (h) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(vy, v),
        (h = _),
        () => {
          o.removeEventListener(vy, v), (h = null);
        }
      );
    },
    createHref(_) {
      return a(o, _);
    },
    createURL: A,
    encodeLocation(_) {
      let O = A(_);
      return { pathname: O.pathname, search: O.search, hash: O.hash };
    },
    push: S,
    replace: T,
    go(_) {
      return d.go(_);
    },
  };
  return M;
}
function fv(n, a, l = '/') {
  return rx(n, a, l, !1);
}
function rx(n, a, l, s) {
  let o = typeof a == 'string' ? Mi(a) : a,
    f = aa(o.pathname || '/', l);
  if (f == null) return null;
  let d = dv(n);
  sx(d);
  let m = null;
  for (let h = 0; m == null && h < d.length; ++h) {
    let p = vx(f);
    m = yx(d[h], p, s);
  }
  return m;
}
function dv(n, a = [], l = [], s = '') {
  let o = (f, d, m) => {
    let h = {
      relativePath: m === void 0 ? f.path || '' : m,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f,
    };
    h.relativePath.startsWith('/') &&
      (Me(
        h.relativePath.startsWith(s),
        `Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (h.relativePath = h.relativePath.slice(s.length)));
    let p = xn([s, h.relativePath]),
      g = l.concat(h);
    f.children &&
      f.children.length > 0 &&
      (Me(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${p}".`,
      ),
      dv(f.children, a, g, p)),
      !(f.path == null && !f.index) &&
        a.push({ path: p, score: mx(p, f.index), routesMeta: g });
  };
  return (
    n.forEach((f, d) => {
      var m;
      if (f.path === '' || !((m = f.path) != null && m.includes('?'))) o(f, d);
      else for (let h of hv(f.path)) o(f, d, h);
    }),
    a
  );
}
function hv(n) {
  let a = n.split('/');
  if (a.length === 0) return [];
  let [l, ...s] = a,
    o = l.endsWith('?'),
    f = l.replace(/\?$/, '');
  if (s.length === 0) return o ? [f, ''] : [f];
  let d = hv(s.join('/')),
    m = [];
  return (
    m.push(...d.map((h) => (h === '' ? f : [f, h].join('/')))),
    o && m.push(...d),
    m.map((h) => (n.startsWith('/') && h === '' ? '/' : h))
  );
}
function sx(n) {
  n.sort((a, l) =>
    a.score !== l.score
      ? l.score - a.score
      : px(
          a.routesMeta.map((s) => s.childrenIndex),
          l.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
var ux = /^:[\w-]+$/,
  ox = 3,
  cx = 2,
  fx = 1,
  dx = 10,
  hx = -2,
  Sy = (n) => n === '*';
function mx(n, a) {
  let l = n.split('/'),
    s = l.length;
  return (
    l.some(Sy) && (s += hx),
    a && (s += cx),
    l
      .filter((o) => !Sy(o))
      .reduce((o, f) => o + (ux.test(f) ? ox : f === '' ? fx : dx), s)
  );
}
function px(n, a) {
  return n.length === a.length && n.slice(0, -1).every((s, o) => s === a[o])
    ? n[n.length - 1] - a[a.length - 1]
    : 0;
}
function yx(n, a, l = !1) {
  let { routesMeta: s } = n,
    o = {},
    f = '/',
    d = [];
  for (let m = 0; m < s.length; ++m) {
    let h = s[m],
      p = m === s.length - 1,
      g = f === '/' ? a : a.slice(f.length) || '/',
      v = Hs(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: p },
        g,
      ),
      S = h.route;
    if (
      (!v &&
        p &&
        l &&
        !s[s.length - 1].route.index &&
        (v = Hs(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
          g,
        )),
      !v)
    )
      return null;
    Object.assign(o, v.params),
      d.push({
        params: o,
        pathname: xn([f, v.pathname]),
        pathnameBase: Tx(xn([f, v.pathnameBase])),
        route: S,
      }),
      v.pathnameBase !== '/' && (f = xn([f, v.pathnameBase]));
  }
  return d;
}
function Hs(n, a) {
  typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 });
  let [l, s] = gx(n.path, n.caseSensitive, n.end),
    o = a.match(l);
  if (!o) return null;
  let f = o[0],
    d = f.replace(/(.)\/+$/, '$1'),
    m = o.slice(1);
  return {
    params: s.reduce((p, { paramName: g, isOptional: v }, S) => {
      if (g === '*') {
        let A = m[S] || '';
        d = f.slice(0, f.length - A.length).replace(/(.)\/+$/, '$1');
      }
      const T = m[S];
      return (
        v && !T ? (p[g] = void 0) : (p[g] = (T || '').replace(/%2F/g, '/')), p
      );
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: n,
  };
}
function gx(n, a = !1, l = !0) {
  en(
    n === '*' || !n.endsWith('*') || n.endsWith('/*'),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, '/*')}".`,
  );
  let s = [],
    o =
      '^' +
      n
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, m, h) => (
            s.push({ paramName: m, isOptional: h != null }),
            h ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    n.endsWith('*')
      ? (s.push({ paramName: '*' }),
        (o += n === '*' || n === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : l
        ? (o += '\\/*$')
        : n !== '' && n !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, a ? void 0 : 'i'), s]
  );
}
function vx(n) {
  try {
    return n
      .split('/')
      .map((a) => decodeURIComponent(a).replace(/\//g, '%2F'))
      .join('/');
  } catch (a) {
    return (
      en(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`,
      ),
      n
    );
  }
}
function aa(n, a) {
  if (a === '/') return n;
  if (!n.toLowerCase().startsWith(a.toLowerCase())) return null;
  let l = a.endsWith('/') ? a.length - 1 : a.length,
    s = n.charAt(l);
  return s && s !== '/' ? null : n.slice(l) || '/';
}
function bx(n, a = '/') {
  let {
    pathname: l,
    search: s = '',
    hash: o = '',
  } = typeof n == 'string' ? Mi(n) : n;
  return {
    pathname: l ? (l.startsWith('/') ? l : Sx(l, a)) : a,
    search: Ex(s),
    hash: Ax(o),
  };
}
function Sx(n, a) {
  let l = a.replace(/\/+$/, '').split('/');
  return (
    n.split('/').forEach((o) => {
      o === '..' ? l.length > 1 && l.pop() : o !== '.' && l.push(o);
    }),
    l.length > 1 ? l.join('/') : '/'
  );
}
function _c(n, a, l, s) {
  return `Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function xx(n) {
  return n.filter(
    (a, l) => l === 0 || (a.route.path && a.route.path.length > 0),
  );
}
function mv(n) {
  let a = xx(n);
  return a.map((l, s) => (s === a.length - 1 ? l.pathname : l.pathnameBase));
}
function pv(n, a, l, s = !1) {
  let o;
  typeof n == 'string'
    ? (o = Mi(n))
    : ((o = { ...n }),
      Me(
        !o.pathname || !o.pathname.includes('?'),
        _c('?', 'pathname', 'search', o),
      ),
      Me(
        !o.pathname || !o.pathname.includes('#'),
        _c('#', 'pathname', 'hash', o),
      ),
      Me(!o.search || !o.search.includes('#'), _c('#', 'search', 'hash', o)));
  let f = n === '' || o.pathname === '',
    d = f ? '/' : o.pathname,
    m;
  if (d == null) m = l;
  else {
    let v = a.length - 1;
    if (!s && d.startsWith('..')) {
      let S = d.split('/');
      for (; S[0] === '..'; ) S.shift(), (v -= 1);
      o.pathname = S.join('/');
    }
    m = v >= 0 ? a[v] : '/';
  }
  let h = bx(o, m),
    p = d && d !== '/' && d.endsWith('/'),
    g = (f || d === '.') && l.endsWith('/');
  return !h.pathname.endsWith('/') && (p || g) && (h.pathname += '/'), h;
}
var xn = (n) => n.join('/').replace(/\/\/+/g, '/'),
  Tx = (n) => n.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Ex = (n) => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
  Ax = (n) => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n);
function Rx(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.internal == 'boolean' &&
    'data' in n
  );
}
var yv = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(yv);
var Dx = ['GET', ...yv];
new Set(Dx);
var _i = E.createContext(null);
_i.displayName = 'DataRouter';
var tu = E.createContext(null);
tu.displayName = 'DataRouterState';
var gv = E.createContext({ isTransitioning: !1 });
gv.displayName = 'ViewTransition';
var wx = E.createContext(new Map());
wx.displayName = 'Fetchers';
var Ox = E.createContext(null);
Ox.displayName = 'Await';
var tn = E.createContext(null);
tn.displayName = 'Navigation';
var er = E.createContext(null);
er.displayName = 'Location';
var On = E.createContext({ outlet: null, matches: [], isDataRoute: !1 });
On.displayName = 'Route';
var wf = E.createContext(null);
wf.displayName = 'RouteError';
function Cx(n, { relative: a } = {}) {
  Me(
    tr(),
    'useHref() may be used only in the context of a <Router> component.',
  );
  let { basename: l, navigator: s } = E.useContext(tn),
    { hash: o, pathname: f, search: d } = nr(n, { relative: a }),
    m = f;
  return (
    l !== '/' && (m = f === '/' ? l : xn([l, f])),
    s.createHref({ pathname: m, search: d, hash: o })
  );
}
function tr() {
  return E.useContext(er) != null;
}
function Cn() {
  return (
    Me(
      tr(),
      'useLocation() may be used only in the context of a <Router> component.',
    ),
    E.useContext(er).location
  );
}
var vv =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function bv(n) {
  E.useContext(tn).static || E.useLayoutEffect(n);
}
function Mx() {
  let { isDataRoute: n } = E.useContext(On);
  return n ? Yx() : _x();
}
function _x() {
  Me(
    tr(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let n = E.useContext(_i),
    { basename: a, navigator: l } = E.useContext(tn),
    { matches: s } = E.useContext(On),
    { pathname: o } = Cn(),
    f = JSON.stringify(mv(s)),
    d = E.useRef(!1);
  return (
    bv(() => {
      d.current = !0;
    }),
    E.useCallback(
      (h, p = {}) => {
        if ((en(d.current, vv), !d.current)) return;
        if (typeof h == 'number') {
          l.go(h);
          return;
        }
        let g = pv(h, JSON.parse(f), o, p.relative === 'path');
        n == null &&
          a !== '/' &&
          (g.pathname = g.pathname === '/' ? a : xn([a, g.pathname])),
          (p.replace ? l.replace : l.push)(g, p.state, p);
      },
      [a, l, f, o, n],
    )
  );
}
E.createContext(null);
function nr(n, { relative: a } = {}) {
  let { matches: l } = E.useContext(On),
    { pathname: s } = Cn(),
    o = JSON.stringify(mv(l));
  return E.useMemo(() => pv(n, JSON.parse(o), s, a === 'path'), [n, o, s, a]);
}
function zx(n, a) {
  return Sv(n, a);
}
function Sv(n, a, l, s) {
  var O;
  Me(
    tr(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: o } = E.useContext(tn),
    { matches: f } = E.useContext(On),
    d = f[f.length - 1],
    m = d ? d.params : {},
    h = d ? d.pathname : '/',
    p = d ? d.pathnameBase : '/',
    g = d && d.route;
  {
    let N = (g && g.path) || '';
    xv(
      h,
      !g || N.endsWith('*') || N.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N === '/' ? '*' : `${N}/*`}">.`,
    );
  }
  let v = Cn(),
    S;
  if (a) {
    let N = typeof a == 'string' ? Mi(a) : a;
    Me(
      p === '/' || ((O = N.pathname) == null ? void 0 : O.startsWith(p)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${N.pathname}" was given in the \`location\` prop.`,
    ),
      (S = N);
  } else S = v;
  let T = S.pathname || '/',
    A = T;
  if (p !== '/') {
    let N = p.replace(/^\//, '').split('/');
    A = '/' + T.replace(/^\//, '').split('/').slice(N.length).join('/');
  }
  let M = fv(n, { pathname: A });
  en(
    g || M != null,
    `No routes matched location "${S.pathname}${S.search}${S.hash}" `,
  ),
    en(
      M == null ||
        M[M.length - 1].route.element !== void 0 ||
        M[M.length - 1].route.Component !== void 0 ||
        M[M.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let _ = Lx(
    M &&
      M.map((N) =>
        Object.assign({}, N, {
          params: Object.assign({}, m, N.params),
          pathname: xn([
            p,
            o.encodeLocation
              ? o.encodeLocation(N.pathname).pathname
              : N.pathname,
          ]),
          pathnameBase:
            N.pathnameBase === '/'
              ? p
              : xn([
                  p,
                  o.encodeLocation
                    ? o.encodeLocation(N.pathnameBase).pathname
                    : N.pathnameBase,
                ]),
        }),
      ),
    f,
    l,
    s,
  );
  return a && _
    ? E.createElement(
        er.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...S,
            },
            navigationType: 'POP',
          },
        },
        _,
      )
    : _;
}
function Nx() {
  let n = Gx(),
    a = Rx(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
        ? n.message
        : JSON.stringify(n),
    l = n instanceof Error ? n.stack : null,
    s = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: s },
    f = { padding: '2px 4px', backgroundColor: s },
    d = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', n),
    (d = E.createElement(
      E.Fragment,
      null,
      E.createElement('p', null, '💿 Hey developer 👋'),
      E.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        E.createElement('code', { style: f }, 'ErrorBoundary'),
        ' or',
        ' ',
        E.createElement('code', { style: f }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    E.createElement(
      E.Fragment,
      null,
      E.createElement('h2', null, 'Unexpected Application Error!'),
      E.createElement('h3', { style: { fontStyle: 'italic' } }, a),
      l ? E.createElement('pre', { style: o }, l) : null,
      d,
    )
  );
}
var jx = E.createElement(Nx, null),
  Vx = class extends E.Component {
    constructor(n) {
      super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        });
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, a) {
      return a.location !== n.location ||
        (a.revalidation !== 'idle' && n.revalidation === 'idle')
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : a.error,
            location: a.location,
            revalidation: n.revalidation || a.revalidation,
          };
    }
    componentDidCatch(n, a) {
      console.error(
        'React Router caught the following error during render',
        n,
        a,
      );
    }
    render() {
      return this.state.error !== void 0
        ? E.createElement(
            On.Provider,
            { value: this.props.routeContext },
            E.createElement(wf.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Ux({ routeContext: n, match: a, children: l }) {
  let s = E.useContext(_i);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = a.route.id),
    E.createElement(On.Provider, { value: n }, l)
  );
}
function Lx(n, a = [], l = null, s = null) {
  if (n == null) {
    if (!l) return null;
    if (l.errors) n = l.matches;
    else if (a.length === 0 && !l.initialized && l.matches.length > 0)
      n = l.matches;
    else return null;
  }
  let o = n,
    f = l == null ? void 0 : l.errors;
  if (f != null) {
    let h = o.findIndex(
      (p) => p.route.id && (f == null ? void 0 : f[p.route.id]) !== void 0,
    );
    Me(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(',')}`,
    ),
      (o = o.slice(0, Math.min(o.length, h + 1)));
  }
  let d = !1,
    m = -1;
  if (l)
    for (let h = 0; h < o.length; h++) {
      let p = o[h];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (m = h),
        p.route.id)
      ) {
        let { loaderData: g, errors: v } = l,
          S =
            p.route.loader &&
            !g.hasOwnProperty(p.route.id) &&
            (!v || v[p.route.id] === void 0);
        if (p.route.lazy || S) {
          (d = !0), m >= 0 ? (o = o.slice(0, m + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((h, p, g) => {
    let v,
      S = !1,
      T = null,
      A = null;
    l &&
      ((v = f && p.route.id ? f[p.route.id] : void 0),
      (T = p.route.errorElement || jx),
      d &&
        (m < 0 && g === 0
          ? (xv(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration',
            ),
            (S = !0),
            (A = null))
          : m === g &&
            ((S = !0), (A = p.route.hydrateFallbackElement || null))));
    let M = a.concat(o.slice(0, g + 1)),
      _ = () => {
        let O;
        return (
          v
            ? (O = T)
            : S
              ? (O = A)
              : p.route.Component
                ? (O = E.createElement(p.route.Component, null))
                : p.route.element
                  ? (O = p.route.element)
                  : (O = h),
          E.createElement(Ux, {
            match: p,
            routeContext: { outlet: h, matches: M, isDataRoute: l != null },
            children: O,
          })
        );
      };
    return l && (p.route.ErrorBoundary || p.route.errorElement || g === 0)
      ? E.createElement(Vx, {
          location: l.location,
          revalidation: l.revalidation,
          component: T,
          error: v,
          children: _(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
        })
      : _();
  }, null);
}
function Of(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bx(n) {
  let a = E.useContext(_i);
  return Me(a, Of(n)), a;
}
function Hx(n) {
  let a = E.useContext(tu);
  return Me(a, Of(n)), a;
}
function Px(n) {
  let a = E.useContext(On);
  return Me(a, Of(n)), a;
}
function Cf(n) {
  let a = Px(n),
    l = a.matches[a.matches.length - 1];
  return (
    Me(
      l.route.id,
      `${n} can only be used on routes that contain a unique "id"`,
    ),
    l.route.id
  );
}
function qx() {
  return Cf('useRouteId');
}
function Gx() {
  var s;
  let n = E.useContext(wf),
    a = Hx('useRouteError'),
    l = Cf('useRouteError');
  return n !== void 0 ? n : (s = a.errors) == null ? void 0 : s[l];
}
function Yx() {
  let { router: n } = Bx('useNavigate'),
    a = Cf('useNavigate'),
    l = E.useRef(!1);
  return (
    bv(() => {
      l.current = !0;
    }),
    E.useCallback(
      async (o, f = {}) => {
        en(l.current, vv),
          l.current &&
            (typeof o == 'number'
              ? n.navigate(o)
              : await n.navigate(o, { fromRouteId: a, ...f }));
      },
      [n, a],
    )
  );
}
var xy = {};
function xv(n, a, l) {
  !a && !xy[n] && ((xy[n] = !0), en(!1, l));
}
E.memo(Xx);
function Xx({ routes: n, future: a, state: l }) {
  return Sv(n, void 0, l, a);
}
function Ic(n) {
  Me(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function kx({
  basename: n = '/',
  children: a = null,
  location: l,
  navigationType: s = 'POP',
  navigator: o,
  static: f = !1,
}) {
  Me(
    !tr(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let d = n.replace(/^\/*/, '/'),
    m = E.useMemo(
      () => ({ basename: d, navigator: o, static: f, future: {} }),
      [d, o, f],
    );
  typeof l == 'string' && (l = Mi(l));
  let {
      pathname: h = '/',
      search: p = '',
      hash: g = '',
      state: v = null,
      key: S = 'default',
    } = l,
    T = E.useMemo(() => {
      let A = aa(h, d);
      return A == null
        ? null
        : {
            location: { pathname: A, search: p, hash: g, state: v, key: S },
            navigationType: s,
          };
    }, [d, h, p, g, v, S, s]);
  return (
    en(
      T != null,
      `<Router basename="${d}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    T == null
      ? null
      : E.createElement(
          tn.Provider,
          { value: m },
          E.createElement(er.Provider, { children: a, value: T }),
        )
  );
}
function Kx({ children: n, location: a }) {
  return zx(ef(n), a);
}
function ef(n, a = []) {
  let l = [];
  return (
    E.Children.forEach(n, (s, o) => {
      if (!E.isValidElement(s)) return;
      let f = [...a, o];
      if (s.type === E.Fragment) {
        l.push.apply(l, ef(s.props.children, f));
        return;
      }
      Me(
        s.type === Ic,
        `[${typeof s.type == 'string' ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Me(
          !s.props.index || !s.props.children,
          'An index route cannot have child routes.',
        );
      let d = {
        id: s.props.id || f.join('-'),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      s.props.children && (d.children = ef(s.props.children, f)), l.push(d);
    }),
    l
  );
}
var Ms = 'get',
  _s = 'application/x-www-form-urlencoded';
function nu(n) {
  return n != null && typeof n.tagName == 'string';
}
function Qx(n) {
  return nu(n) && n.tagName.toLowerCase() === 'button';
}
function Zx(n) {
  return nu(n) && n.tagName.toLowerCase() === 'form';
}
function Fx(n) {
  return nu(n) && n.tagName.toLowerCase() === 'input';
}
function $x(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Jx(n, a) {
  return n.button === 0 && (!a || a === '_self') && !$x(n);
}
var Ts = null;
function Wx() {
  if (Ts === null)
    try {
      new FormData(document.createElement('form'), 0), (Ts = !1);
    } catch {
      Ts = !0;
    }
  return Ts;
}
var Ix = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function zc(n) {
  return n != null && !Ix.has(n)
    ? (en(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_s}"`,
      ),
      null)
    : n;
}
function eT(n, a) {
  let l, s, o, f, d;
  if (Zx(n)) {
    let m = n.getAttribute('action');
    (s = m ? aa(m, a) : null),
      (l = n.getAttribute('method') || Ms),
      (o = zc(n.getAttribute('enctype')) || _s),
      (f = new FormData(n));
  } else if (Qx(n) || (Fx(n) && (n.type === 'submit' || n.type === 'image'))) {
    let m = n.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let h = n.getAttribute('formaction') || m.getAttribute('action');
    if (
      ((s = h ? aa(h, a) : null),
      (l = n.getAttribute('formmethod') || m.getAttribute('method') || Ms),
      (o =
        zc(n.getAttribute('formenctype')) ||
        zc(m.getAttribute('enctype')) ||
        _s),
      (f = new FormData(m, n)),
      !Wx())
    ) {
      let { name: p, type: g, value: v } = n;
      if (g === 'image') {
        let S = p ? `${p}.` : '';
        f.append(`${S}x`, '0'), f.append(`${S}y`, '0');
      } else p && f.append(p, v);
    }
  } else {
    if (nu(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (l = Ms), (s = null), (o = _s), (d = n);
  }
  return (
    f && o === 'text/plain' && ((d = f), (f = void 0)),
    { action: s, method: l.toLowerCase(), encType: o, formData: f, body: d }
  );
}
function Mf(n, a) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(a);
}
async function tT(n, a) {
  if (n.id in a) return a[n.id];
  try {
    let l = await import(n.module);
    return (a[n.id] = l), l;
  } catch (l) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`,
      ),
      console.error(l),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function nT(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === 'preload' &&
        typeof n.imageSrcSet == 'string' &&
        typeof n.imageSizes == 'string'
      : typeof n.rel == 'string' && typeof n.href == 'string';
}
async function aT(n, a, l) {
  let s = await Promise.all(
    n.map(async (o) => {
      let f = a.routes[o.route.id];
      if (f) {
        let d = await tT(f, l);
        return d.links ? d.links() : [];
      }
      return [];
    }),
  );
  return sT(
    s
      .flat(1)
      .filter(nT)
      .filter((o) => o.rel === 'stylesheet' || o.rel === 'preload')
      .map((o) =>
        o.rel === 'stylesheet'
          ? { ...o, rel: 'prefetch', as: 'style' }
          : { ...o, rel: 'prefetch' },
      ),
  );
}
function Ty(n, a, l, s, o, f) {
  let d = (h, p) => (l[p] ? h.route.id !== l[p].route.id : !0),
    m = (h, p) => {
      var g;
      return (
        l[p].pathname !== h.pathname ||
        (((g = l[p].route.path) == null ? void 0 : g.endsWith('*')) &&
          l[p].params['*'] !== h.params['*'])
      );
    };
  return f === 'assets'
    ? a.filter((h, p) => d(h, p) || m(h, p))
    : f === 'data'
      ? a.filter((h, p) => {
          var v;
          let g = s.routes[h.route.id];
          if (!g || !g.hasLoader) return !1;
          if (d(h, p) || m(h, p)) return !0;
          if (h.route.shouldRevalidate) {
            let S = h.route.shouldRevalidate({
              currentUrl: new URL(
                o.pathname + o.search + o.hash,
                window.origin,
              ),
              currentParams: ((v = l[0]) == null ? void 0 : v.params) || {},
              nextUrl: new URL(n, window.origin),
              nextParams: h.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof S == 'boolean') return S;
          }
          return !0;
        })
      : [];
}
function iT(n, a) {
  return lT(
    n
      .map((l) => {
        let s = a.routes[l.route.id];
        if (!s) return [];
        let o = [s.module];
        return s.imports && (o = o.concat(s.imports)), o;
      })
      .flat(1),
  );
}
function lT(n) {
  return [...new Set(n)];
}
function rT(n) {
  let a = {},
    l = Object.keys(n).sort();
  for (let s of l) a[s] = n[s];
  return a;
}
function sT(n, a) {
  let l = new Set();
  return (
    new Set(a),
    n.reduce((s, o) => {
      let f = JSON.stringify(rT(o));
      return l.has(f) || (l.add(f), s.push({ key: f, link: o })), s;
    }, [])
  );
}
function uT(n) {
  let a =
    typeof n == 'string'
      ? new URL(
          n,
          typeof window > 'u'
            ? 'server://singlefetch/'
            : window.location.origin,
        )
      : n;
  return (
    a.pathname === '/'
      ? (a.pathname = '_root.data')
      : (a.pathname = `${a.pathname.replace(/\/$/, '')}.data`),
    a
  );
}
function oT() {
  let n = E.useContext(_i);
  return (
    Mf(
      n,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    n
  );
}
function cT() {
  let n = E.useContext(tu);
  return (
    Mf(
      n,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    n
  );
}
var _f = E.createContext(void 0);
_f.displayName = 'FrameworkContext';
function Tv() {
  let n = E.useContext(_f);
  return (
    Mf(n, 'You must render this element inside a <HydratedRouter> element'), n
  );
}
function fT(n, a) {
  let l = E.useContext(_f),
    [s, o] = E.useState(!1),
    [f, d] = E.useState(!1),
    {
      onFocus: m,
      onBlur: h,
      onMouseEnter: p,
      onMouseLeave: g,
      onTouchStart: v,
    } = a,
    S = E.useRef(null);
  E.useEffect(() => {
    if ((n === 'render' && d(!0), n === 'viewport')) {
      let M = (O) => {
          O.forEach((N) => {
            d(N.isIntersecting);
          });
        },
        _ = new IntersectionObserver(M, { threshold: 0.5 });
      return (
        S.current && _.observe(S.current),
        () => {
          _.disconnect();
        }
      );
    }
  }, [n]),
    E.useEffect(() => {
      if (s) {
        let M = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(M);
        };
      }
    }, [s]);
  let T = () => {
      o(!0);
    },
    A = () => {
      o(!1), d(!1);
    };
  return l
    ? n !== 'intent'
      ? [f, S, {}]
      : [
          f,
          S,
          {
            onFocus: jl(m, T),
            onBlur: jl(h, A),
            onMouseEnter: jl(p, T),
            onMouseLeave: jl(g, A),
            onTouchStart: jl(v, T),
          },
        ]
    : [!1, S, {}];
}
function jl(n, a) {
  return (l) => {
    n && n(l), l.defaultPrevented || a(l);
  };
}
function dT({ page: n, ...a }) {
  let { router: l } = oT(),
    s = E.useMemo(() => fv(l.routes, n, l.basename), [l.routes, n, l.basename]);
  return s ? E.createElement(mT, { page: n, matches: s, ...a }) : null;
}
function hT(n) {
  let { manifest: a, routeModules: l } = Tv(),
    [s, o] = E.useState([]);
  return (
    E.useEffect(() => {
      let f = !1;
      return (
        aT(n, a, l).then((d) => {
          f || o(d);
        }),
        () => {
          f = !0;
        }
      );
    }, [n, a, l]),
    s
  );
}
function mT({ page: n, matches: a, ...l }) {
  let s = Cn(),
    { manifest: o, routeModules: f } = Tv(),
    { loaderData: d, matches: m } = cT(),
    h = E.useMemo(() => Ty(n, a, m, o, s, 'data'), [n, a, m, o, s]),
    p = E.useMemo(() => Ty(n, a, m, o, s, 'assets'), [n, a, m, o, s]),
    g = E.useMemo(() => {
      if (n === s.pathname + s.search + s.hash) return [];
      let T = new Set(),
        A = !1;
      if (
        (a.forEach((_) => {
          var N;
          let O = o.routes[_.route.id];
          !O ||
            !O.hasLoader ||
            ((!h.some((U) => U.route.id === _.route.id) &&
              _.route.id in d &&
              (N = f[_.route.id]) != null &&
              N.shouldRevalidate) ||
            O.hasClientLoader
              ? (A = !0)
              : T.add(_.route.id));
        }),
        T.size === 0)
      )
        return [];
      let M = uT(n);
      return (
        A &&
          T.size > 0 &&
          M.searchParams.set(
            '_routes',
            a
              .filter((_) => T.has(_.route.id))
              .map((_) => _.route.id)
              .join(','),
          ),
        [M.pathname + M.search]
      );
    }, [d, s, o, h, a, n, f]),
    v = E.useMemo(() => iT(p, o), [p, o]),
    S = hT(p);
  return E.createElement(
    E.Fragment,
    null,
    g.map((T) =>
      E.createElement('link', {
        key: T,
        rel: 'prefetch',
        as: 'fetch',
        href: T,
        ...l,
      }),
    ),
    v.map((T) =>
      E.createElement('link', { key: T, rel: 'modulepreload', href: T, ...l }),
    ),
    S.map(({ key: T, link: A }) => E.createElement('link', { key: T, ...A })),
  );
}
function pT(...n) {
  return (a) => {
    n.forEach((l) => {
      typeof l == 'function' ? l(a) : l != null && (l.current = a);
    });
  };
}
var Ev =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  Ev && (window.__reactRouterVersion = '7.1.3');
} catch {}
function yT({ basename: n, children: a, window: l }) {
  let s = E.useRef();
  s.current == null && (s.current = ax({ window: l, v5Compat: !0 }));
  let o = s.current,
    [f, d] = E.useState({ action: o.action, location: o.location }),
    m = E.useCallback(
      (h) => {
        E.startTransition(() => d(h));
      },
      [d],
    );
  return (
    E.useLayoutEffect(() => o.listen(m), [o, m]),
    E.createElement(kx, {
      basename: n,
      children: a,
      location: f.location,
      navigationType: f.action,
      navigator: o,
    })
  );
}
var Av = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  au = E.forwardRef(function (
    {
      onClick: a,
      discover: l = 'render',
      prefetch: s = 'none',
      relative: o,
      reloadDocument: f,
      replace: d,
      state: m,
      target: h,
      to: p,
      preventScrollReset: g,
      viewTransition: v,
      ...S
    },
    T,
  ) {
    let { basename: A } = E.useContext(tn),
      M = typeof p == 'string' && Av.test(p),
      _,
      O = !1;
    if (typeof p == 'string' && M && ((_ = p), Ev))
      try {
        let k = new URL(window.location.href),
          W = p.startsWith('//') ? new URL(k.protocol + p) : new URL(p),
          Re = aa(W.pathname, A);
        W.origin === k.origin && Re != null
          ? (p = Re + W.search + W.hash)
          : (O = !0);
      } catch {
        en(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let N = Cx(p, { relative: o }),
      [U, q, V] = fT(s, S),
      Y = ST(p, {
        replace: d,
        state: m,
        target: h,
        preventScrollReset: g,
        relative: o,
        viewTransition: v,
      });
    function $(k) {
      a && a(k), k.defaultPrevented || Y(k);
    }
    let K = E.createElement('a', {
      ...S,
      ...V,
      href: _ || N,
      onClick: O || f ? a : $,
      ref: pT(T, q),
      target: h,
      'data-discover': !M && l === 'render' ? 'true' : void 0,
    });
    return U && !M
      ? E.createElement(E.Fragment, null, K, E.createElement(dT, { page: N }))
      : K;
  });
au.displayName = 'Link';
var gT = E.forwardRef(function (
  {
    'aria-current': a = 'page',
    caseSensitive: l = !1,
    className: s = '',
    end: o = !1,
    style: f,
    to: d,
    viewTransition: m,
    children: h,
    ...p
  },
  g,
) {
  let v = nr(d, { relative: p.relative }),
    S = Cn(),
    T = E.useContext(tu),
    { navigator: A, basename: M } = E.useContext(tn),
    _ = T != null && RT(v) && m === !0,
    O = A.encodeLocation ? A.encodeLocation(v).pathname : v.pathname,
    N = S.pathname,
    U =
      T && T.navigation && T.navigation.location
        ? T.navigation.location.pathname
        : null;
  l ||
    ((N = N.toLowerCase()),
    (U = U ? U.toLowerCase() : null),
    (O = O.toLowerCase())),
    U && M && (U = aa(U, M) || U);
  const q = O !== '/' && O.endsWith('/') ? O.length - 1 : O.length;
  let V = N === O || (!o && N.startsWith(O) && N.charAt(q) === '/'),
    Y =
      U != null &&
      (U === O || (!o && U.startsWith(O) && U.charAt(O.length) === '/')),
    $ = { isActive: V, isPending: Y, isTransitioning: _ },
    K = V ? a : void 0,
    k;
  typeof s == 'function'
    ? (k = s($))
    : (k = [
        s,
        V ? 'active' : null,
        Y ? 'pending' : null,
        _ ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let W = typeof f == 'function' ? f($) : f;
  return E.createElement(
    au,
    {
      ...p,
      'aria-current': K,
      className: k,
      ref: g,
      style: W,
      to: d,
      viewTransition: m,
    },
    typeof h == 'function' ? h($) : h,
  );
});
gT.displayName = 'NavLink';
var vT = E.forwardRef(
  (
    {
      discover: n = 'render',
      fetcherKey: a,
      navigate: l,
      reloadDocument: s,
      replace: o,
      state: f,
      method: d = Ms,
      action: m,
      onSubmit: h,
      relative: p,
      preventScrollReset: g,
      viewTransition: v,
      ...S
    },
    T,
  ) => {
    let A = ET(),
      M = AT(m, { relative: p }),
      _ = d.toLowerCase() === 'get' ? 'get' : 'post',
      O = typeof m == 'string' && Av.test(m),
      N = (U) => {
        if ((h && h(U), U.defaultPrevented)) return;
        U.preventDefault();
        let q = U.nativeEvent.submitter,
          V = (q == null ? void 0 : q.getAttribute('formmethod')) || d;
        A(q || U.currentTarget, {
          fetcherKey: a,
          method: V,
          navigate: l,
          replace: o,
          state: f,
          relative: p,
          preventScrollReset: g,
          viewTransition: v,
        });
      };
    return E.createElement('form', {
      ref: T,
      method: _,
      action: M,
      onSubmit: s ? h : N,
      ...S,
      'data-discover': !O && n === 'render' ? 'true' : void 0,
    });
  },
);
vT.displayName = 'Form';
function bT(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rv(n) {
  let a = E.useContext(_i);
  return Me(a, bT(n)), a;
}
function ST(
  n,
  {
    target: a,
    replace: l,
    state: s,
    preventScrollReset: o,
    relative: f,
    viewTransition: d,
  } = {},
) {
  let m = Mx(),
    h = Cn(),
    p = nr(n, { relative: f });
  return E.useCallback(
    (g) => {
      if (Jx(g, a)) {
        g.preventDefault();
        let v = l !== void 0 ? l : kl(h) === kl(p);
        m(n, {
          replace: v,
          state: s,
          preventScrollReset: o,
          relative: f,
          viewTransition: d,
        });
      }
    },
    [h, m, p, l, s, a, n, o, f, d],
  );
}
var xT = 0,
  TT = () => `__${String(++xT)}__`;
function ET() {
  let { router: n } = Rv('useSubmit'),
    { basename: a } = E.useContext(tn),
    l = qx();
  return E.useCallback(
    async (s, o = {}) => {
      let { action: f, method: d, encType: m, formData: h, body: p } = eT(s, a);
      if (o.navigate === !1) {
        let g = o.fetcherKey || TT();
        await n.fetch(g, l, o.action || f, {
          preventScrollReset: o.preventScrollReset,
          formData: h,
          body: p,
          formMethod: o.method || d,
          formEncType: o.encType || m,
          flushSync: o.flushSync,
        });
      } else
        await n.navigate(o.action || f, {
          preventScrollReset: o.preventScrollReset,
          formData: h,
          body: p,
          formMethod: o.method || d,
          formEncType: o.encType || m,
          replace: o.replace,
          state: o.state,
          fromRouteId: l,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [n, a, l],
  );
}
function AT(n, { relative: a } = {}) {
  let { basename: l } = E.useContext(tn),
    s = E.useContext(On);
  Me(s, 'useFormAction must be used inside a RouteContext');
  let [o] = s.matches.slice(-1),
    f = { ...nr(n || '.', { relative: a }) },
    d = Cn();
  if (n == null) {
    f.search = d.search;
    let m = new URLSearchParams(f.search),
      h = m.getAll('index');
    if (h.some((g) => g === '')) {
      m.delete('index'),
        h.filter((v) => v).forEach((v) => m.append('index', v));
      let g = m.toString();
      f.search = g ? `?${g}` : '';
    }
  }
  return (
    (!n || n === '.') &&
      o.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    l !== '/' && (f.pathname = f.pathname === '/' ? l : xn([l, f.pathname])),
    kl(f)
  );
}
function RT(n, a = {}) {
  let l = E.useContext(gv);
  Me(
    l != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: s } = Rv('useViewTransitionState'),
    o = nr(n, { relative: a.relative });
  if (!l.isTransitioning) return !1;
  let f = aa(l.currentLocation.pathname, s) || l.currentLocation.pathname,
    d = aa(l.nextLocation.pathname, s) || l.nextLocation.pathname;
  return Hs(o.pathname, d) != null || Hs(o.pathname, f) != null;
}
new TextEncoder();
var DT = cv(),
  Nc = { exports: {} },
  jc = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ey;
function wT() {
  if (Ey) return jc;
  Ey = 1;
  var n = eu();
  function a(h, p) {
    return (h === p && (h !== 0 || 1 / h === 1 / p)) || (h !== h && p !== p);
  }
  var l = typeof Object.is == 'function' ? Object.is : a,
    s = n.useSyncExternalStore,
    o = n.useRef,
    f = n.useEffect,
    d = n.useMemo,
    m = n.useDebugValue;
  return (
    (jc.useSyncExternalStoreWithSelector = function (h, p, g, v, S) {
      var T = o(null);
      if (T.current === null) {
        var A = { hasValue: !1, value: null };
        T.current = A;
      } else A = T.current;
      T = d(
        function () {
          function _(V) {
            if (!O) {
              if (((O = !0), (N = V), (V = v(V)), S !== void 0 && A.hasValue)) {
                var Y = A.value;
                if (S(Y, V)) return (U = Y);
              }
              return (U = V);
            }
            if (((Y = U), l(N, V))) return Y;
            var $ = v(V);
            return S !== void 0 && S(Y, $) ? ((N = V), Y) : ((N = V), (U = $));
          }
          var O = !1,
            N,
            U,
            q = g === void 0 ? null : g;
          return [
            function () {
              return _(p());
            },
            q === null
              ? void 0
              : function () {
                  return _(q());
                },
          ];
        },
        [p, g, v, S],
      );
      var M = s(h, T[0], T[1]);
      return (
        f(
          function () {
            (A.hasValue = !0), (A.value = M);
          },
          [M],
        ),
        m(M),
        M
      );
    }),
    jc
  );
}
var Ay;
function OT() {
  return Ay || ((Ay = 1), (Nc.exports = wT())), Nc.exports;
}
var CT = OT();
function MT(n) {
  n();
}
function _T() {
  let n = null,
    a = null;
  return {
    clear() {
      (n = null), (a = null);
    },
    notify() {
      MT(() => {
        let l = n;
        for (; l; ) l.callback(), (l = l.next);
      });
    },
    get() {
      const l = [];
      let s = n;
      for (; s; ) l.push(s), (s = s.next);
      return l;
    },
    subscribe(l) {
      let s = !0;
      const o = (a = { callback: l, next: null, prev: a });
      return (
        o.prev ? (o.prev.next = o) : (n = o),
        function () {
          !s ||
            n === null ||
            ((s = !1),
            o.next ? (o.next.prev = o.prev) : (a = o.prev),
            o.prev ? (o.prev.next = o.next) : (n = o.next));
        }
      );
    },
  };
}
var Ry = { notify() {}, get: () => [] };
function zT(n, a) {
  let l,
    s = Ry,
    o = 0,
    f = !1;
  function d(M) {
    g();
    const _ = s.subscribe(M);
    let O = !1;
    return () => {
      O || ((O = !0), _(), v());
    };
  }
  function m() {
    s.notify();
  }
  function h() {
    A.onStateChange && A.onStateChange();
  }
  function p() {
    return f;
  }
  function g() {
    o++, l || ((l = n.subscribe(h)), (s = _T()));
  }
  function v() {
    o--, l && o === 0 && (l(), (l = void 0), s.clear(), (s = Ry));
  }
  function S() {
    f || ((f = !0), g());
  }
  function T() {
    f && ((f = !1), v());
  }
  const A = {
    addNestedSub: d,
    notifyNestedSubs: m,
    handleChangeWrapper: h,
    isSubscribed: p,
    trySubscribe: S,
    tryUnsubscribe: T,
    getListeners: () => s,
  };
  return A;
}
var NT = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  jT = NT(),
  VT = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  UT = VT(),
  LT = () => (jT || UT ? E.useLayoutEffect : E.useEffect),
  BT = LT(),
  Vc = Symbol.for('react-redux-context'),
  Uc = typeof globalThis < 'u' ? globalThis : {};
function HT() {
  if (!E.createContext) return {};
  const n = Uc[Vc] ?? (Uc[Vc] = new Map());
  let a = n.get(E.createContext);
  return a || ((a = E.createContext(null)), n.set(E.createContext, a)), a;
}
var ia = HT();
function PT(n) {
  const { children: a, context: l, serverState: s, store: o } = n,
    f = E.useMemo(() => {
      const h = zT(o);
      return {
        store: o,
        subscription: h,
        getServerState: s ? () => s : void 0,
      };
    }, [o, s]),
    d = E.useMemo(() => o.getState(), [o]);
  BT(() => {
    const { subscription: h } = f;
    return (
      (h.onStateChange = h.notifyNestedSubs),
      h.trySubscribe(),
      d !== o.getState() && h.notifyNestedSubs(),
      () => {
        h.tryUnsubscribe(), (h.onStateChange = void 0);
      }
    );
  }, [f, d]);
  const m = l || ia;
  return E.createElement(m.Provider, { value: f }, a);
}
var qT = PT;
function zf(n = ia) {
  return function () {
    return E.useContext(n);
  };
}
var Dv = zf();
function wv(n = ia) {
  const a = n === ia ? Dv : zf(n),
    l = () => {
      const { store: s } = a();
      return s;
    };
  return Object.assign(l, { withTypes: () => l }), l;
}
var GT = wv();
function YT(n = ia) {
  const a = n === ia ? GT : wv(n),
    l = () => a().dispatch;
  return Object.assign(l, { withTypes: () => l }), l;
}
var XT = YT(),
  kT = (n, a) => n === a;
function KT(n = ia) {
  const a = n === ia ? Dv : zf(n),
    l = (s, o = {}) => {
      const { equalityFn: f = kT } =
          typeof o == 'function' ? { equalityFn: o } : o,
        d = a(),
        { store: m, subscription: h, getServerState: p } = d;
      E.useRef(!0);
      const g = E.useCallback(
          {
            [s.name](S) {
              return s(S);
            },
          }[s.name],
          [s],
        ),
        v = CT.useSyncExternalStoreWithSelector(
          h.addNestedSub,
          m.getState,
          p || m.getState,
          g,
          f,
        );
      return E.useDebugValue(v), v;
    };
  return Object.assign(l, { withTypes: () => l }), l;
}
var Ov = KT();
function $e(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var QT = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  Dy = QT,
  Lc = () => Math.random().toString(36).substring(7).split('').join('.'),
  ZT = {
    INIT: `@@redux/INIT${Lc()}`,
    REPLACE: `@@redux/REPLACE${Lc()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Lc()}`,
  },
  Ps = ZT;
function Nf(n) {
  if (typeof n != 'object' || n === null) return !1;
  let a = n;
  for (; Object.getPrototypeOf(a) !== null; ) a = Object.getPrototypeOf(a);
  return Object.getPrototypeOf(n) === a || Object.getPrototypeOf(n) === null;
}
function jf(n, a, l) {
  if (typeof n != 'function') throw new Error($e(2));
  if (
    (typeof a == 'function' && typeof l == 'function') ||
    (typeof l == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error($e(0));
  if (
    (typeof a == 'function' && typeof l > 'u' && ((l = a), (a = void 0)),
    typeof l < 'u')
  ) {
    if (typeof l != 'function') throw new Error($e(1));
    return l(jf)(n, a);
  }
  let s = n,
    o = a,
    f = new Map(),
    d = f,
    m = 0,
    h = !1;
  function p() {
    d === f &&
      ((d = new Map()),
      f.forEach((_, O) => {
        d.set(O, _);
      }));
  }
  function g() {
    if (h) throw new Error($e(3));
    return o;
  }
  function v(_) {
    if (typeof _ != 'function') throw new Error($e(4));
    if (h) throw new Error($e(5));
    let O = !0;
    p();
    const N = m++;
    return (
      d.set(N, _),
      function () {
        if (O) {
          if (h) throw new Error($e(6));
          (O = !1), p(), d.delete(N), (f = null);
        }
      }
    );
  }
  function S(_) {
    if (!Nf(_)) throw new Error($e(7));
    if (typeof _.type > 'u') throw new Error($e(8));
    if (typeof _.type != 'string') throw new Error($e(17));
    if (h) throw new Error($e(9));
    try {
      (h = !0), (o = s(o, _));
    } finally {
      h = !1;
    }
    return (
      (f = d).forEach((N) => {
        N();
      }),
      _
    );
  }
  function T(_) {
    if (typeof _ != 'function') throw new Error($e(10));
    (s = _), S({ type: Ps.REPLACE });
  }
  function A() {
    const _ = v;
    return {
      subscribe(O) {
        if (typeof O != 'object' || O === null) throw new Error($e(11));
        function N() {
          const q = O;
          q.next && q.next(g());
        }
        return N(), { unsubscribe: _(N) };
      },
      [Dy]() {
        return this;
      },
    };
  }
  return (
    S({ type: Ps.INIT }),
    { dispatch: S, subscribe: v, getState: g, replaceReducer: T, [Dy]: A }
  );
}
function FT(n) {
  Object.keys(n).forEach((a) => {
    const l = n[a];
    if (typeof l(void 0, { type: Ps.INIT }) > 'u') throw new Error($e(12));
    if (typeof l(void 0, { type: Ps.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error($e(13));
  });
}
function $T(n) {
  const a = Object.keys(n),
    l = {};
  for (let f = 0; f < a.length; f++) {
    const d = a[f];
    typeof n[d] == 'function' && (l[d] = n[d]);
  }
  const s = Object.keys(l);
  let o;
  try {
    FT(l);
  } catch (f) {
    o = f;
  }
  return function (d = {}, m) {
    if (o) throw o;
    let h = !1;
    const p = {};
    for (let g = 0; g < s.length; g++) {
      const v = s[g],
        S = l[v],
        T = d[v],
        A = S(T, m);
      if (typeof A > 'u') throw (m && m.type, new Error($e(14)));
      (p[v] = A), (h = h || A !== T);
    }
    return (h = h || s.length !== Object.keys(d).length), h ? p : d;
  };
}
function qs(...n) {
  return n.length === 0
    ? (a) => a
    : n.length === 1
      ? n[0]
      : n.reduce(
          (a, l) =>
            (...s) =>
              a(l(...s)),
        );
}
function JT(...n) {
  return (a) => (l, s) => {
    const o = a(l, s);
    let f = () => {
      throw new Error($e(15));
    };
    const d = { getState: o.getState, dispatch: (h, ...p) => f(h, ...p) },
      m = n.map((h) => h(d));
    return (f = qs(...m)(o.dispatch)), { ...o, dispatch: f };
  };
}
function WT(n) {
  return Nf(n) && 'type' in n && typeof n.type == 'string';
}
var Cv = Symbol.for('immer-nothing'),
  wy = Symbol.for('immer-draftable'),
  vt = Symbol.for('immer-state');
function Yt(n, ...a) {
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Di = Object.getPrototypeOf;
function Ua(n) {
  return !!n && !!n[vt];
}
function Dn(n) {
  var a;
  return n
    ? Mv(n) ||
        Array.isArray(n) ||
        !!n[wy] ||
        !!((a = n.constructor) != null && a[wy]) ||
        lu(n) ||
        ru(n)
    : !1;
}
var IT = Object.prototype.constructor.toString();
function Mv(n) {
  if (!n || typeof n != 'object') return !1;
  const a = Di(n);
  if (a === null) return !0;
  const l = Object.hasOwnProperty.call(a, 'constructor') && a.constructor;
  return l === Object
    ? !0
    : typeof l == 'function' && Function.toString.call(l) === IT;
}
function Gs(n, a) {
  iu(n) === 0
    ? Reflect.ownKeys(n).forEach((l) => {
        a(l, n[l], n);
      })
    : n.forEach((l, s) => a(s, l, n));
}
function iu(n) {
  const a = n[vt];
  return a ? a.type_ : Array.isArray(n) ? 1 : lu(n) ? 2 : ru(n) ? 3 : 0;
}
function tf(n, a) {
  return iu(n) === 2 ? n.has(a) : Object.prototype.hasOwnProperty.call(n, a);
}
function _v(n, a, l) {
  const s = iu(n);
  s === 2 ? n.set(a, l) : s === 3 ? n.add(l) : (n[a] = l);
}
function e2(n, a) {
  return n === a ? n !== 0 || 1 / n === 1 / a : n !== n && a !== a;
}
function lu(n) {
  return n instanceof Map;
}
function ru(n) {
  return n instanceof Set;
}
function _a(n) {
  return n.copy_ || n.base_;
}
function nf(n, a) {
  if (lu(n)) return new Map(n);
  if (ru(n)) return new Set(n);
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  const l = Mv(n);
  if (a === !0 || (a === 'class_only' && !l)) {
    const s = Object.getOwnPropertyDescriptors(n);
    delete s[vt];
    let o = Reflect.ownKeys(s);
    for (let f = 0; f < o.length; f++) {
      const d = o[f],
        m = s[d];
      m.writable === !1 && ((m.writable = !0), (m.configurable = !0)),
        (m.get || m.set) &&
          (s[d] = {
            configurable: !0,
            writable: !0,
            enumerable: m.enumerable,
            value: n[d],
          });
    }
    return Object.create(Di(n), s);
  } else {
    const s = Di(n);
    if (s !== null && l) return { ...n };
    const o = Object.create(s);
    return Object.assign(o, n);
  }
}
function Vf(n, a = !1) {
  return (
    su(n) ||
      Ua(n) ||
      !Dn(n) ||
      (iu(n) > 1 && (n.set = n.add = n.clear = n.delete = t2),
      Object.freeze(n),
      a && Object.entries(n).forEach(([l, s]) => Vf(s, !0))),
    n
  );
}
function t2() {
  Yt(2);
}
function su(n) {
  return Object.isFrozen(n);
}
var n2 = {};
function La(n) {
  const a = n2[n];
  return a || Yt(0, n), a;
}
var Kl;
function zv() {
  return Kl;
}
function a2(n, a) {
  return {
    drafts_: [],
    parent_: n,
    immer_: a,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Oy(n, a) {
  a &&
    (La('Patches'),
    (n.patches_ = []),
    (n.inversePatches_ = []),
    (n.patchListener_ = a));
}
function af(n) {
  lf(n), n.drafts_.forEach(i2), (n.drafts_ = null);
}
function lf(n) {
  n === Kl && (Kl = n.parent_);
}
function Cy(n) {
  return (Kl = a2(Kl, n));
}
function i2(n) {
  const a = n[vt];
  a.type_ === 0 || a.type_ === 1 ? a.revoke_() : (a.revoked_ = !0);
}
function My(n, a) {
  a.unfinalizedDrafts_ = a.drafts_.length;
  const l = a.drafts_[0];
  return (
    n !== void 0 && n !== l
      ? (l[vt].modified_ && (af(a), Yt(4)),
        Dn(n) && ((n = Ys(a, n)), a.parent_ || Xs(a, n)),
        a.patches_ &&
          La('Patches').generateReplacementPatches_(
            l[vt].base_,
            n,
            a.patches_,
            a.inversePatches_,
          ))
      : (n = Ys(a, l, [])),
    af(a),
    a.patches_ && a.patchListener_(a.patches_, a.inversePatches_),
    n !== Cv ? n : void 0
  );
}
function Ys(n, a, l) {
  if (su(a)) return a;
  const s = a[vt];
  if (!s) return Gs(a, (o, f) => _y(n, s, a, o, f, l)), a;
  if (s.scope_ !== n) return a;
  if (!s.modified_) return Xs(n, s.base_, !0), s.base_;
  if (!s.finalized_) {
    (s.finalized_ = !0), s.scope_.unfinalizedDrafts_--;
    const o = s.copy_;
    let f = o,
      d = !1;
    s.type_ === 3 && ((f = new Set(o)), o.clear(), (d = !0)),
      Gs(f, (m, h) => _y(n, s, o, m, h, l, d)),
      Xs(n, o, !1),
      l &&
        n.patches_ &&
        La('Patches').generatePatches_(s, l, n.patches_, n.inversePatches_);
  }
  return s.copy_;
}
function _y(n, a, l, s, o, f, d) {
  if (Ua(o)) {
    const m =
        f && a && a.type_ !== 3 && !tf(a.assigned_, s) ? f.concat(s) : void 0,
      h = Ys(n, o, m);
    if ((_v(l, s, h), Ua(h))) n.canAutoFreeze_ = !1;
    else return;
  } else d && l.add(o);
  if (Dn(o) && !su(o)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) return;
    Ys(n, o),
      (!a || !a.scope_.parent_) &&
        typeof s != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(l, s) &&
        Xs(n, o);
  }
}
function Xs(n, a, l = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && Vf(a, l);
}
function l2(n, a) {
  const l = Array.isArray(n),
    s = {
      type_: l ? 1 : 0,
      scope_: a ? a.scope_ : zv(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: a,
      base_: n,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = s,
    f = Uf;
  l && ((o = [s]), (f = Ql));
  const { revoke: d, proxy: m } = Proxy.revocable(o, f);
  return (s.draft_ = m), (s.revoke_ = d), m;
}
var Uf = {
    get(n, a) {
      if (a === vt) return n;
      const l = _a(n);
      if (!tf(l, a)) return r2(n, l, a);
      const s = l[a];
      return n.finalized_ || !Dn(s)
        ? s
        : s === Bc(n.base_, a)
          ? (Hc(n), (n.copy_[a] = sf(s, n)))
          : s;
    },
    has(n, a) {
      return a in _a(n);
    },
    ownKeys(n) {
      return Reflect.ownKeys(_a(n));
    },
    set(n, a, l) {
      const s = Nv(_a(n), a);
      if (s != null && s.set) return s.set.call(n.draft_, l), !0;
      if (!n.modified_) {
        const o = Bc(_a(n), a),
          f = o == null ? void 0 : o[vt];
        if (f && f.base_ === l)
          return (n.copy_[a] = l), (n.assigned_[a] = !1), !0;
        if (e2(l, o) && (l !== void 0 || tf(n.base_, a))) return !0;
        Hc(n), rf(n);
      }
      return (
        (n.copy_[a] === l && (l !== void 0 || a in n.copy_)) ||
          (Number.isNaN(l) && Number.isNaN(n.copy_[a])) ||
          ((n.copy_[a] = l), (n.assigned_[a] = !0)),
        !0
      );
    },
    deleteProperty(n, a) {
      return (
        Bc(n.base_, a) !== void 0 || a in n.base_
          ? ((n.assigned_[a] = !1), Hc(n), rf(n))
          : delete n.assigned_[a],
        n.copy_ && delete n.copy_[a],
        !0
      );
    },
    getOwnPropertyDescriptor(n, a) {
      const l = _a(n),
        s = Reflect.getOwnPropertyDescriptor(l, a);
      return (
        s && {
          writable: !0,
          configurable: n.type_ !== 1 || a !== 'length',
          enumerable: s.enumerable,
          value: l[a],
        }
      );
    },
    defineProperty() {
      Yt(11);
    },
    getPrototypeOf(n) {
      return Di(n.base_);
    },
    setPrototypeOf() {
      Yt(12);
    },
  },
  Ql = {};
Gs(Uf, (n, a) => {
  Ql[n] = function () {
    return (arguments[0] = arguments[0][0]), a.apply(this, arguments);
  };
});
Ql.deleteProperty = function (n, a) {
  return Ql.set.call(this, n, a, void 0);
};
Ql.set = function (n, a, l) {
  return Uf.set.call(this, n[0], a, l, n[0]);
};
function Bc(n, a) {
  const l = n[vt];
  return (l ? _a(l) : n)[a];
}
function r2(n, a, l) {
  var o;
  const s = Nv(a, l);
  return s
    ? 'value' in s
      ? s.value
      : (o = s.get) == null
        ? void 0
        : o.call(n.draft_)
    : void 0;
}
function Nv(n, a) {
  if (!(a in n)) return;
  let l = Di(n);
  for (; l; ) {
    const s = Object.getOwnPropertyDescriptor(l, a);
    if (s) return s;
    l = Di(l);
  }
}
function rf(n) {
  n.modified_ || ((n.modified_ = !0), n.parent_ && rf(n.parent_));
}
function Hc(n) {
  n.copy_ || (n.copy_ = nf(n.base_, n.scope_.immer_.useStrictShallowCopy_));
}
var s2 = class {
  constructor(n) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (a, l, s) => {
        if (typeof a == 'function' && typeof l != 'function') {
          const f = l;
          l = a;
          const d = this;
          return function (h = f, ...p) {
            return d.produce(h, (g) => l.call(this, g, ...p));
          };
        }
        typeof l != 'function' && Yt(6),
          s !== void 0 && typeof s != 'function' && Yt(7);
        let o;
        if (Dn(a)) {
          const f = Cy(this),
            d = sf(a, void 0);
          let m = !0;
          try {
            (o = l(d)), (m = !1);
          } finally {
            m ? af(f) : lf(f);
          }
          return Oy(f, s), My(o, f);
        } else if (!a || typeof a != 'object') {
          if (
            ((o = l(a)),
            o === void 0 && (o = a),
            o === Cv && (o = void 0),
            this.autoFreeze_ && Vf(o, !0),
            s)
          ) {
            const f = [],
              d = [];
            La('Patches').generateReplacementPatches_(a, o, f, d), s(f, d);
          }
          return o;
        } else Yt(1, a);
      }),
      (this.produceWithPatches = (a, l) => {
        if (typeof a == 'function')
          return (d, ...m) => this.produceWithPatches(d, (h) => a(h, ...m));
        let s, o;
        return [
          this.produce(a, l, (d, m) => {
            (s = d), (o = m);
          }),
          s,
          o,
        ];
      }),
      typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(n.autoFreeze),
      typeof (n == null ? void 0 : n.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(n.useStrictShallowCopy);
  }
  createDraft(n) {
    Dn(n) || Yt(8), Ua(n) && (n = u2(n));
    const a = Cy(this),
      l = sf(n, void 0);
    return (l[vt].isManual_ = !0), lf(a), l;
  }
  finishDraft(n, a) {
    const l = n && n[vt];
    (!l || !l.isManual_) && Yt(9);
    const { scope_: s } = l;
    return Oy(s, a), My(void 0, s);
  }
  setAutoFreeze(n) {
    this.autoFreeze_ = n;
  }
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n;
  }
  applyPatches(n, a) {
    let l;
    for (l = a.length - 1; l >= 0; l--) {
      const o = a[l];
      if (o.path.length === 0 && o.op === 'replace') {
        n = o.value;
        break;
      }
    }
    l > -1 && (a = a.slice(l + 1));
    const s = La('Patches').applyPatches_;
    return Ua(n) ? s(n, a) : this.produce(n, (o) => s(o, a));
  }
};
function sf(n, a) {
  const l = lu(n)
    ? La('MapSet').proxyMap_(n, a)
    : ru(n)
      ? La('MapSet').proxySet_(n, a)
      : l2(n, a);
  return (a ? a.scope_ : zv()).drafts_.push(l), l;
}
function u2(n) {
  return Ua(n) || Yt(10, n), jv(n);
}
function jv(n) {
  if (!Dn(n) || su(n)) return n;
  const a = n[vt];
  let l;
  if (a) {
    if (!a.modified_) return a.base_;
    (a.finalized_ = !0), (l = nf(n, a.scope_.immer_.useStrictShallowCopy_));
  } else l = nf(n, !0);
  return (
    Gs(l, (s, o) => {
      _v(l, s, jv(o));
    }),
    a && (a.finalized_ = !1),
    l
  );
}
var bt = new s2(),
  Vv = bt.produce;
bt.produceWithPatches.bind(bt);
bt.setAutoFreeze.bind(bt);
bt.setUseStrictShallowCopy.bind(bt);
bt.applyPatches.bind(bt);
bt.createDraft.bind(bt);
bt.finishDraft.bind(bt);
function Uv(n) {
  return ({ dispatch: l, getState: s }) =>
    (o) =>
    (f) =>
      typeof f == 'function' ? f(l, s, n) : o(f);
}
var o2 = Uv(),
  c2 = Uv,
  f2 =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? qs
              : qs.apply(null, arguments);
        };
function zy(n, a) {
  function l(...s) {
    if (a) {
      let o = a(...s);
      if (!o) throw new Error(Tn(0));
      return {
        type: n,
        payload: o.payload,
        ...('meta' in o && { meta: o.meta }),
        ...('error' in o && { error: o.error }),
      };
    }
    return { type: n, payload: s[0] };
  }
  return (
    (l.toString = () => `${n}`),
    (l.type = n),
    (l.match = (s) => WT(s) && s.type === n),
    l
  );
}
var Lv = class Ll extends Array {
  constructor(...a) {
    super(...a), Object.setPrototypeOf(this, Ll.prototype);
  }
  static get [Symbol.species]() {
    return Ll;
  }
  concat(...a) {
    return super.concat.apply(this, a);
  }
  prepend(...a) {
    return a.length === 1 && Array.isArray(a[0])
      ? new Ll(...a[0].concat(this))
      : new Ll(...a.concat(this));
  }
};
function Ny(n) {
  return Dn(n) ? Vv(n, () => {}) : n;
}
function jy(n, a, l) {
  return n.has(a) ? n.get(a) : n.set(a, l(a)).get(a);
}
function d2(n) {
  return typeof n == 'boolean';
}
var h2 = () =>
    function (a) {
      const {
        thunk: l = !0,
        immutableCheck: s = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: f = !0,
      } = a ?? {};
      let d = new Lv();
      return l && (d2(l) ? d.push(o2) : d.push(c2(l.extraArgument))), d;
    },
  m2 = 'RTK_autoBatch',
  Vy = (n) => (a) => {
    setTimeout(a, n);
  },
  p2 =
    (n = { type: 'raf' }) =>
    (a) =>
    (...l) => {
      const s = a(...l);
      let o = !0,
        f = !1,
        d = !1;
      const m = new Set(),
        h =
          n.type === 'tick'
            ? queueMicrotask
            : n.type === 'raf'
              ? typeof window < 'u' && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Vy(10)
              : n.type === 'callback'
                ? n.queueNotification
                : Vy(n.timeout),
        p = () => {
          (d = !1), f && ((f = !1), m.forEach((g) => g()));
        };
      return Object.assign({}, s, {
        subscribe(g) {
          const v = () => o && g(),
            S = s.subscribe(v);
          return (
            m.add(g),
            () => {
              S(), m.delete(g);
            }
          );
        },
        dispatch(g) {
          var v;
          try {
            return (
              (o = !((v = g == null ? void 0 : g.meta) != null && v[m2])),
              (f = !o),
              f && (d || ((d = !0), h(p))),
              s.dispatch(g)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  y2 = (n) =>
    function (l) {
      const { autoBatch: s = !0 } = l ?? {};
      let o = new Lv(n);
      return s && o.push(p2(typeof s == 'object' ? s : void 0)), o;
    };
function g2(n) {
  const a = h2(),
    {
      reducer: l = void 0,
      middleware: s,
      devTools: o = !0,
      preloadedState: f = void 0,
      enhancers: d = void 0,
    } = n;
  let m;
  if (typeof l == 'function') m = l;
  else if (Nf(l)) m = $T(l);
  else throw new Error(Tn(1));
  let h;
  typeof s == 'function' ? (h = s(a)) : (h = a());
  let p = qs;
  o && (p = f2({ trace: !1, ...(typeof o == 'object' && o) }));
  const g = JT(...h),
    v = y2(g);
  let S = typeof d == 'function' ? d(v) : v();
  const T = p(...S);
  return jf(m, f, T);
}
function Bv(n) {
  const a = {},
    l = [];
  let s;
  const o = {
    addCase(f, d) {
      const m = typeof f == 'string' ? f : f.type;
      if (!m) throw new Error(Tn(28));
      if (m in a) throw new Error(Tn(29));
      return (a[m] = d), o;
    },
    addMatcher(f, d) {
      return l.push({ matcher: f, reducer: d }), o;
    },
    addDefaultCase(f) {
      return (s = f), o;
    },
  };
  return n(o), [a, l, s];
}
function v2(n) {
  return typeof n == 'function';
}
function b2(n, a) {
  let [l, s, o] = Bv(a),
    f;
  if (v2(n)) f = () => Ny(n());
  else {
    const m = Ny(n);
    f = () => m;
  }
  function d(m = f(), h) {
    let p = [
      l[h.type],
      ...s.filter(({ matcher: g }) => g(h)).map(({ reducer: g }) => g),
    ];
    return (
      p.filter((g) => !!g).length === 0 && (p = [o]),
      p.reduce((g, v) => {
        if (v)
          if (Ua(g)) {
            const T = v(g, h);
            return T === void 0 ? g : T;
          } else {
            if (Dn(g)) return Vv(g, (S) => v(S, h));
            {
              const S = v(g, h);
              if (S === void 0) {
                if (g === null) return g;
                throw Error(
                  'A case reducer on a non-draftable value must not return undefined',
                );
              }
              return S;
            }
          }
        return g;
      }, m)
    );
  }
  return (d.getInitialState = f), d;
}
var S2 = Symbol.for('rtk-slice-createasyncthunk');
function x2(n, a) {
  return `${n}/${a}`;
}
function T2({ creators: n } = {}) {
  var l;
  const a = (l = n == null ? void 0 : n.asyncThunk) == null ? void 0 : l[S2];
  return function (o) {
    const { name: f, reducerPath: d = f } = o;
    if (!f) throw new Error(Tn(11));
    const m =
        (typeof o.reducers == 'function' ? o.reducers(R2()) : o.reducers) || {},
      h = Object.keys(m),
      p = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      g = {
        addCase(U, q) {
          const V = typeof U == 'string' ? U : U.type;
          if (!V) throw new Error(Tn(12));
          if (V in p.sliceCaseReducersByType) throw new Error(Tn(13));
          return (p.sliceCaseReducersByType[V] = q), g;
        },
        addMatcher(U, q) {
          return p.sliceMatchers.push({ matcher: U, reducer: q }), g;
        },
        exposeAction(U, q) {
          return (p.actionCreators[U] = q), g;
        },
        exposeCaseReducer(U, q) {
          return (p.sliceCaseReducersByName[U] = q), g;
        },
      };
    h.forEach((U) => {
      const q = m[U],
        V = {
          reducerName: U,
          type: x2(f, U),
          createNotation: typeof o.reducers == 'function',
        };
      w2(q) ? C2(V, q, g, a) : D2(V, q, g);
    });
    function v() {
      const [U = {}, q = [], V = void 0] =
          typeof o.extraReducers == 'function'
            ? Bv(o.extraReducers)
            : [o.extraReducers],
        Y = { ...U, ...p.sliceCaseReducersByType };
      return b2(o.initialState, ($) => {
        for (let K in Y) $.addCase(K, Y[K]);
        for (let K of p.sliceMatchers) $.addMatcher(K.matcher, K.reducer);
        for (let K of q) $.addMatcher(K.matcher, K.reducer);
        V && $.addDefaultCase(V);
      });
    }
    const S = (U) => U,
      T = new Map();
    let A;
    function M(U, q) {
      return A || (A = v()), A(U, q);
    }
    function _() {
      return A || (A = v()), A.getInitialState();
    }
    function O(U, q = !1) {
      function V($) {
        let K = $[U];
        return typeof K > 'u' && q && (K = _()), K;
      }
      function Y($ = S) {
        const K = jy(T, q, () => new WeakMap());
        return jy(K, $, () => {
          const k = {};
          for (const [W, Re] of Object.entries(o.selectors ?? {}))
            k[W] = E2(Re, $, _, q);
          return k;
        });
      }
      return {
        reducerPath: U,
        getSelectors: Y,
        get selectors() {
          return Y(V);
        },
        selectSlice: V,
      };
    }
    const N = {
      name: f,
      reducer: M,
      actions: p.actionCreators,
      caseReducers: p.sliceCaseReducersByName,
      getInitialState: _,
      ...O(d),
      injectInto(U, { reducerPath: q, ...V } = {}) {
        const Y = q ?? d;
        return (
          U.inject({ reducerPath: Y, reducer: M }, V), { ...N, ...O(Y, !0) }
        );
      },
    };
    return N;
  };
}
function E2(n, a, l, s) {
  function o(f, ...d) {
    let m = a(f);
    return typeof m > 'u' && s && (m = l()), n(m, ...d);
  }
  return (o.unwrapped = n), o;
}
var A2 = T2();
function R2() {
  function n(a, l) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: a, ...l };
  }
  return (
    (n.withTypes = () => n),
    {
      reducer(a) {
        return Object.assign(
          {
            [a.name](...l) {
              return a(...l);
            },
          }[a.name],
          { _reducerDefinitionType: 'reducer' },
        );
      },
      preparedReducer(a, l) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: a,
          reducer: l,
        };
      },
      asyncThunk: n,
    }
  );
}
function D2({ type: n, reducerName: a, createNotation: l }, s, o) {
  let f, d;
  if ('reducer' in s) {
    if (l && !O2(s)) throw new Error(Tn(17));
    (f = s.reducer), (d = s.prepare);
  } else f = s;
  o.addCase(n, f)
    .exposeCaseReducer(a, f)
    .exposeAction(a, d ? zy(n, d) : zy(n));
}
function w2(n) {
  return n._reducerDefinitionType === 'asyncThunk';
}
function O2(n) {
  return n._reducerDefinitionType === 'reducerWithPrepare';
}
function C2({ type: n, reducerName: a }, l, s, o) {
  if (!o) throw new Error(Tn(18));
  const {
      payloadCreator: f,
      fulfilled: d,
      pending: m,
      rejected: h,
      settled: p,
      options: g,
    } = l,
    v = o(n, f, g);
  s.exposeAction(a, v),
    d && s.addCase(v.fulfilled, d),
    m && s.addCase(v.pending, m),
    h && s.addCase(v.rejected, h),
    p && s.addMatcher(v.settled, p),
    s.exposeCaseReducer(a, {
      fulfilled: d || Es,
      pending: m || Es,
      rejected: h || Es,
      settled: p || Es,
    });
}
function Es() {}
function Tn(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var Lf = 'persist:',
  Bf = 'persist/FLUSH',
  uu = 'persist/REHYDRATE',
  Hf = 'persist/PAUSE',
  Pf = 'persist/PERSIST',
  qf = 'persist/PURGE',
  Gf = 'persist/REGISTER',
  M2 = -1;
function zs(n) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (zs = function (l) {
          return typeof l;
        })
      : (zs = function (l) {
          return l &&
            typeof Symbol == 'function' &&
            l.constructor === Symbol &&
            l !== Symbol.prototype
            ? 'symbol'
            : typeof l;
        }),
    zs(n)
  );
}
function Uy(n, a) {
  var l = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    a &&
      (s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      })),
      l.push.apply(l, s);
  }
  return l;
}
function _2(n) {
  for (var a = 1; a < arguments.length; a++) {
    var l = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? Uy(l, !0).forEach(function (s) {
          z2(n, s, l[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
        : Uy(l).forEach(function (s) {
            Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(l, s));
          });
  }
  return n;
}
function z2(n, a, l) {
  return (
    a in n
      ? Object.defineProperty(n, a, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[a] = l),
    n
  );
}
function N2(n, a, l, s) {
  s.debug;
  var o = _2({}, l);
  return (
    n &&
      zs(n) === 'object' &&
      Object.keys(n).forEach(function (f) {
        f !== '_persist' && a[f] === l[f] && (o[f] = n[f]);
      }),
    o
  );
}
function j2(n) {
  var a = n.blacklist || null,
    l = n.whitelist || null,
    s = n.transforms || [],
    o = n.throttle || 0,
    f = ''.concat(n.keyPrefix !== void 0 ? n.keyPrefix : Lf).concat(n.key),
    d = n.storage,
    m;
  n.serialize === !1
    ? (m = function (V) {
        return V;
      })
    : typeof n.serialize == 'function'
      ? (m = n.serialize)
      : (m = V2);
  var h = n.writeFailHandler || null,
    p = {},
    g = {},
    v = [],
    S = null,
    T = null,
    A = function (V) {
      Object.keys(V).forEach(function (Y) {
        O(Y) && p[Y] !== V[Y] && v.indexOf(Y) === -1 && v.push(Y);
      }),
        Object.keys(p).forEach(function (Y) {
          V[Y] === void 0 &&
            O(Y) &&
            v.indexOf(Y) === -1 &&
            p[Y] !== void 0 &&
            v.push(Y);
        }),
        S === null && (S = setInterval(M, o)),
        (p = V);
    };
  function M() {
    if (v.length === 0) {
      S && clearInterval(S), (S = null);
      return;
    }
    var q = v.shift(),
      V = s.reduce(function (Y, $) {
        return $.in(Y, q, p);
      }, p[q]);
    if (V !== void 0)
      try {
        g[q] = m(V);
      } catch (Y) {
        console.error(
          'redux-persist/createPersistoid: error serializing state',
          Y,
        );
      }
    else delete g[q];
    v.length === 0 && _();
  }
  function _() {
    Object.keys(g).forEach(function (q) {
      p[q] === void 0 && delete g[q];
    }),
      (T = d.setItem(f, m(g)).catch(N));
  }
  function O(q) {
    return !(
      (l && l.indexOf(q) === -1 && q !== '_persist') ||
      (a && a.indexOf(q) !== -1)
    );
  }
  function N(q) {
    h && h(q);
  }
  var U = function () {
    for (; v.length !== 0; ) M();
    return T || Promise.resolve();
  };
  return { update: A, flush: U };
}
function V2(n) {
  return JSON.stringify(n);
}
function U2(n) {
  var a = n.transforms || [],
    l = ''.concat(n.keyPrefix !== void 0 ? n.keyPrefix : Lf).concat(n.key),
    s = n.storage;
  n.debug;
  var o;
  return (
    n.deserialize === !1
      ? (o = function (d) {
          return d;
        })
      : typeof n.deserialize == 'function'
        ? (o = n.deserialize)
        : (o = L2),
    s.getItem(l).then(function (f) {
      if (f)
        try {
          var d = {},
            m = o(f);
          return (
            Object.keys(m).forEach(function (h) {
              d[h] = a.reduceRight(function (p, g) {
                return g.out(p, h, m);
              }, o(m[h]));
            }),
            d
          );
        } catch (h) {
          throw h;
        }
      else return;
    })
  );
}
function L2(n) {
  return JSON.parse(n);
}
function B2(n) {
  var a = n.storage,
    l = ''.concat(n.keyPrefix !== void 0 ? n.keyPrefix : Lf).concat(n.key);
  return a.removeItem(l, H2);
}
function H2(n) {}
function Ly(n, a) {
  var l = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    a &&
      (s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      })),
      l.push.apply(l, s);
  }
  return l;
}
function Sn(n) {
  for (var a = 1; a < arguments.length; a++) {
    var l = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? Ly(l, !0).forEach(function (s) {
          P2(n, s, l[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
        : Ly(l).forEach(function (s) {
            Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(l, s));
          });
  }
  return n;
}
function P2(n, a, l) {
  return (
    a in n
      ? Object.defineProperty(n, a, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[a] = l),
    n
  );
}
function q2(n, a) {
  if (n == null) return {};
  var l = G2(n, a),
    s,
    o;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(n);
    for (o = 0; o < f.length; o++)
      (s = f[o]),
        !(a.indexOf(s) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, s) &&
          (l[s] = n[s]);
  }
  return l;
}
function G2(n, a) {
  if (n == null) return {};
  var l = {},
    s = Object.keys(n),
    o,
    f;
  for (f = 0; f < s.length; f++)
    (o = s[f]), !(a.indexOf(o) >= 0) && (l[o] = n[o]);
  return l;
}
var Y2 = 5e3;
function X2(n, a) {
  var l = n.version !== void 0 ? n.version : M2;
  n.debug;
  var s = n.stateReconciler === void 0 ? N2 : n.stateReconciler,
    o = n.getStoredState || U2,
    f = n.timeout !== void 0 ? n.timeout : Y2,
    d = null,
    m = !1,
    h = !0,
    p = function (v) {
      return v._persist.rehydrated && d && !h && d.update(v), v;
    };
  return function (g, v) {
    var S = g || {},
      T = S._persist,
      A = q2(S, ['_persist']),
      M = A;
    if (v.type === Pf) {
      var _ = !1,
        O = function (K, k) {
          _ || (v.rehydrate(n.key, K, k), (_ = !0));
        };
      if (
        (f &&
          setTimeout(function () {
            !_ &&
              O(
                void 0,
                new Error(
                  'redux-persist: persist timed out for persist key "'.concat(
                    n.key,
                    '"',
                  ),
                ),
              );
          }, f),
        (h = !1),
        d || (d = j2(n)),
        T)
      )
        return Sn({}, a(M, v), { _persist: T });
      if (typeof v.rehydrate != 'function' || typeof v.register != 'function')
        throw new Error(
          'redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.',
        );
      return (
        v.register(n.key),
        o(n).then(
          function ($) {
            var K =
              n.migrate ||
              function (k, W) {
                return Promise.resolve(k);
              };
            K($, l).then(
              function (k) {
                O(k);
              },
              function (k) {
                O(void 0, k);
              },
            );
          },
          function ($) {
            O(void 0, $);
          },
        ),
        Sn({}, a(M, v), { _persist: { version: l, rehydrated: !1 } })
      );
    } else {
      if (v.type === qf)
        return (m = !0), v.result(B2(n)), Sn({}, a(M, v), { _persist: T });
      if (v.type === Bf)
        return v.result(d && d.flush()), Sn({}, a(M, v), { _persist: T });
      if (v.type === Hf) h = !0;
      else if (v.type === uu) {
        if (m) return Sn({}, M, { _persist: Sn({}, T, { rehydrated: !0 }) });
        if (v.key === n.key) {
          var N = a(M, v),
            U = v.payload,
            q = s !== !1 && U !== void 0 ? s(U, g, N, n) : N,
            V = Sn({}, q, { _persist: Sn({}, T, { rehydrated: !0 }) });
          return p(V);
        }
      }
    }
    if (!T) return a(g, v);
    var Y = a(M, v);
    return Y === M ? g : p(Sn({}, Y, { _persist: T }));
  };
}
function By(n) {
  return Q2(n) || K2(n) || k2();
}
function k2() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}
function K2(n) {
  if (
    Symbol.iterator in Object(n) ||
    Object.prototype.toString.call(n) === '[object Arguments]'
  )
    return Array.from(n);
}
function Q2(n) {
  if (Array.isArray(n)) {
    for (var a = 0, l = new Array(n.length); a < n.length; a++) l[a] = n[a];
    return l;
  }
}
function Hy(n, a) {
  var l = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    a &&
      (s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      })),
      l.push.apply(l, s);
  }
  return l;
}
function uf(n) {
  for (var a = 1; a < arguments.length; a++) {
    var l = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? Hy(l, !0).forEach(function (s) {
          Z2(n, s, l[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
        : Hy(l).forEach(function (s) {
            Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(l, s));
          });
  }
  return n;
}
function Z2(n, a, l) {
  return (
    a in n
      ? Object.defineProperty(n, a, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[a] = l),
    n
  );
}
var Hv = { registry: [], bootstrapped: !1 },
  F2 = function () {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Hv,
      l = arguments.length > 1 ? arguments[1] : void 0;
    switch (l.type) {
      case Gf:
        return uf({}, a, { registry: [].concat(By(a.registry), [l.key]) });
      case uu:
        var s = a.registry.indexOf(l.key),
          o = By(a.registry);
        return (
          o.splice(s, 1),
          uf({}, a, { registry: o, bootstrapped: o.length === 0 })
        );
      default:
        return a;
    }
  };
function $2(n, a, l) {
  var s = jf(F2, Hv, void 0),
    o = function (h) {
      s.dispatch({ type: Gf, key: h });
    },
    f = function (h, p, g) {
      var v = { type: uu, payload: p, err: g, key: h };
      n.dispatch(v), s.dispatch(v);
    },
    d = uf({}, s, {
      purge: function () {
        var h = [];
        return (
          n.dispatch({
            type: qf,
            result: function (g) {
              h.push(g);
            },
          }),
          Promise.all(h)
        );
      },
      flush: function () {
        var h = [];
        return (
          n.dispatch({
            type: Bf,
            result: function (g) {
              h.push(g);
            },
          }),
          Promise.all(h)
        );
      },
      pause: function () {
        n.dispatch({ type: Hf });
      },
      persist: function () {
        n.dispatch({ type: Pf, register: o, rehydrate: f });
      },
    });
  return d.persist(), d;
}
var Vl = {},
  As = {},
  Rs = {},
  Py;
function J2() {
  if (Py) return Rs;
  (Py = 1), (Rs.__esModule = !0), (Rs.default = o);
  function n(f) {
    return (
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? (n = function (m) {
            return typeof m;
          })
        : (n = function (m) {
            return m &&
              typeof Symbol == 'function' &&
              m.constructor === Symbol &&
              m !== Symbol.prototype
              ? 'symbol'
              : typeof m;
          }),
      n(f)
    );
  }
  function a() {}
  var l = { getItem: a, setItem: a, removeItem: a };
  function s(f) {
    if (
      (typeof self > 'u' ? 'undefined' : n(self)) !== 'object' ||
      !(f in self)
    )
      return !1;
    try {
      var d = self[f],
        m = 'redux-persist '.concat(f, ' test');
      d.setItem(m, 'test'), d.getItem(m), d.removeItem(m);
    } catch {
      return !1;
    }
    return !0;
  }
  function o(f) {
    var d = ''.concat(f, 'Storage');
    return s(d) ? self[d] : l;
  }
  return Rs;
}
var qy;
function W2() {
  if (qy) return As;
  (qy = 1), (As.__esModule = !0), (As.default = l);
  var n = a(J2());
  function a(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function l(s) {
    var o = (0, n.default)(s);
    return {
      getItem: function (d) {
        return new Promise(function (m, h) {
          m(o.getItem(d));
        });
      },
      setItem: function (d, m) {
        return new Promise(function (h, p) {
          h(o.setItem(d, m));
        });
      },
      removeItem: function (d) {
        return new Promise(function (m, h) {
          m(o.removeItem(d));
        });
      },
    };
  }
  return As;
}
var Gy;
function I2() {
  if (Gy) return Vl;
  (Gy = 1), (Vl.__esModule = !0), (Vl.default = void 0);
  var n = a(W2());
  function a(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var l = (0, n.default)('local');
  return (Vl.default = l), Vl;
}
var eE = I2();
const tE = ov(eE);
function nE(n, a) {
  (n.nutrients[0].value = a.food[0].value),
    typeof n.nutrients[1].value == 'number' &&
      (n.nutrients[1].value += Number(a.food[1].value)),
    typeof n.nutrients[2].value == 'number' &&
      (n.nutrients[2].value += Number(a.food[2].value)),
    typeof n.nutrients[3].value == 'number' &&
      (n.nutrients[3].value += Number(a.food[3].value)),
    typeof n.nutrients[4].value == 'number' &&
      (n.nutrients[4].value += Number(a.food[4].value)),
    typeof n.nutrients[5].value == 'number' &&
      (n.nutrients[5].value += Number(a.food[5].value)),
    typeof n.nutrients[6].value == 'number' &&
      (n.nutrients[6].value += Number(a.food[6].value)),
    typeof n.nutrients[7].value == 'number' &&
      (n.nutrients[7].value += Number(a.food[7].value));
}
function aE(n, a) {
  (n.nutrients[0].value = a.food[0].value),
    typeof n.nutrients[1].value == 'number' &&
      (n.nutrients[1].value -= Number(a.food[1].value)),
    typeof n.nutrients[2].value == 'number' &&
      (n.nutrients[2].value -= Number(a.food[2].value)),
    typeof n.nutrients[3].value == 'number' &&
      (n.nutrients[3].value -= Number(a.food[3].value)),
    typeof n.nutrients[4].value == 'number' &&
      (n.nutrients[4].value -= Number(a.food[4].value)),
    typeof n.nutrients[5].value == 'number' &&
      (n.nutrients[5].value -= Number(a.food[5].value)),
    typeof n.nutrients[6].value == 'number' &&
      (n.nutrients[6].value -= Number(a.food[6].value)),
    typeof n.nutrients[7].value == 'number' &&
      (n.nutrients[7].value -= Number(a.food[7].value));
}
const iE = {
    id: 0,
    name: 'Sum',
    nutrients: [
      { name: 'Name', value: 'Name' },
      { name: 'Energy', value: 0, unit: 'kcal' },
      { name: 'Carbohydrate', value: 0, unit: 'g' },
      { name: 'of which sugars', value: 0, unit: 'g' },
      { name: 'Protein', value: 0, unit: 'g' },
      { name: 'Fat', value: 0, unit: 'g' },
      { name: 'Fiber', value: 0, unit: 'g' },
      { name: 'Grams', value: 0, unit: 'g' },
    ],
    foods: [],
  },
  Pv = A2({
    name: 'Sum',
    initialState: iE,
    reducers: {
      ADD_FOOD: (n, a) => {
        nE(n, a.payload), n.id++, n.foods.push(a.payload);
      },
      DELETE_FOOD: (n, a) => {
        aE(n, a.payload),
          n.foods.splice(
            n.foods.findIndex((l) => l.id === a.payload.id),
            1,
          );
      },
    },
  }),
  { ADD_FOOD: lE, DELETE_FOOD: rE } = Pv.actions,
  sE = Pv.reducer,
  uE = { key: 'root', version: 1, storage: tE },
  oE = X2(uE, sE),
  qv = g2({
    reducer: { sum: oE },
    middleware: (n) =>
      n({ serializableCheck: { ignoredActions: [Bf, uu, Hf, Pf, qf, Gf] } }),
  });
function Ns(n) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Ns = function (l) {
          return typeof l;
        })
      : (Ns = function (l) {
          return l &&
            typeof Symbol == 'function' &&
            l.constructor === Symbol &&
            l !== Symbol.prototype
            ? 'symbol'
            : typeof l;
        }),
    Ns(n)
  );
}
function cE(n, a) {
  if (!(n instanceof a))
    throw new TypeError('Cannot call a class as a function');
}
function fE(n, a) {
  for (var l = 0; l < a.length; l++) {
    var s = a[l];
    (s.enumerable = s.enumerable || !1),
      (s.configurable = !0),
      'value' in s && (s.writable = !0),
      Object.defineProperty(n, s.key, s);
  }
}
function dE(n, a, l) {
  return fE(n.prototype, a), n;
}
function hE(n, a) {
  return a && (Ns(a) === 'object' || typeof a == 'function') ? a : js(n);
}
function of(n) {
  return (
    (of = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (l) {
          return l.__proto__ || Object.getPrototypeOf(l);
        }),
    of(n)
  );
}
function js(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return n;
}
function mE(n, a) {
  if (typeof a != 'function' && a !== null)
    throw new TypeError('Super expression must either be null or a function');
  (n.prototype = Object.create(a && a.prototype, {
    constructor: { value: n, writable: !0, configurable: !0 },
  })),
    a && cf(n, a);
}
function cf(n, a) {
  return (
    (cf =
      Object.setPrototypeOf ||
      function (s, o) {
        return (s.__proto__ = o), s;
      }),
    cf(n, a)
  );
}
function Vs(n, a, l) {
  return (
    a in n
      ? Object.defineProperty(n, a, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[a] = l),
    n
  );
}
var Gv = (function (n) {
  mE(a, n);
  function a() {
    var l, s;
    cE(this, a);
    for (var o = arguments.length, f = new Array(o), d = 0; d < o; d++)
      f[d] = arguments[d];
    return (
      (s = hE(this, (l = of(a)).call.apply(l, [this].concat(f)))),
      Vs(js(s), 'state', { bootstrapped: !1 }),
      Vs(js(s), '_unsubscribe', void 0),
      Vs(js(s), 'handlePersistorState', function () {
        var m = s.props.persistor,
          h = m.getState(),
          p = h.bootstrapped;
        p &&
          (s.props.onBeforeLift
            ? Promise.resolve(s.props.onBeforeLift()).finally(function () {
                return s.setState({ bootstrapped: !0 });
              })
            : s.setState({ bootstrapped: !0 }),
          s._unsubscribe && s._unsubscribe());
      }),
      s
    );
  }
  return (
    dE(a, [
      {
        key: 'componentDidMount',
        value: function () {
          (this._unsubscribe = this.props.persistor.subscribe(
            this.handlePersistorState,
          )),
            this.handlePersistorState();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._unsubscribe && this._unsubscribe();
        },
      },
      {
        key: 'render',
        value: function () {
          return typeof this.props.children == 'function'
            ? this.props.children(this.state.bootstrapped)
            : this.state.bootstrapped
              ? this.props.children
              : this.props.loading;
        },
      },
    ]),
    a
  );
})(E.PureComponent);
Vs(Gv, 'defaultProps', { children: null, loading: null });
const Yf = E.createContext({});
function Xf(n) {
  const a = E.useRef(null);
  return a.current === null && (a.current = n()), a.current;
}
const ou = E.createContext(null),
  kf = E.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: 'never',
  });
class pE extends E.Component {
  getSnapshotBeforeUpdate(a) {
    const l = this.props.childRef.current;
    if (l && a.isPresent && !this.props.isPresent) {
      const s = l.offsetParent,
        o = (s instanceof HTMLElement && s.offsetWidth) || 0,
        f = this.props.sizeRef.current;
      (f.height = l.offsetHeight || 0),
        (f.width = l.offsetWidth || 0),
        (f.top = l.offsetTop),
        (f.left = l.offsetLeft),
        (f.right = o - f.width - f.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function yE({ children: n, isPresent: a, anchorX: l }) {
  const s = E.useId(),
    o = E.useRef(null),
    f = E.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: d } = E.useContext(kf);
  return (
    E.useInsertionEffect(() => {
      const { width: m, height: h, top: p, left: g, right: v } = f.current;
      if (a || !o.current || !m || !h) return;
      const S = l === 'left' ? `left: ${g}` : `right: ${v}`;
      o.current.dataset.motionPopId = s;
      const T = document.createElement('style');
      return (
        d && (T.nonce = d),
        document.head.appendChild(T),
        T.sheet &&
          T.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${h}px !important;
            ${S}px !important;
            top: ${p}px !important;
          }
        `),
        () => {
          document.head.removeChild(T);
        }
      );
    }, [a]),
    L.jsx(pE, {
      isPresent: a,
      childRef: o,
      sizeRef: f,
      children: E.cloneElement(n, { ref: o }),
    })
  );
}
const gE = ({
  children: n,
  initial: a,
  isPresent: l,
  onExitComplete: s,
  custom: o,
  presenceAffectsLayout: f,
  mode: d,
  anchorX: m,
}) => {
  const h = Xf(vE),
    p = E.useId(),
    g = E.useCallback(
      (S) => {
        h.set(S, !0);
        for (const T of h.values()) if (!T) return;
        s && s();
      },
      [h, s],
    ),
    v = E.useMemo(
      () => ({
        id: p,
        initial: a,
        isPresent: l,
        custom: o,
        onExitComplete: g,
        register: (S) => (h.set(S, !1), () => h.delete(S)),
      }),
      f ? [Math.random(), g] : [l, g],
    );
  return (
    E.useMemo(() => {
      h.forEach((S, T) => h.set(T, !1));
    }, [l]),
    E.useEffect(() => {
      !l && !h.size && s && s();
    }, [l]),
    d === 'popLayout' &&
      (n = L.jsx(yE, { isPresent: l, anchorX: m, children: n })),
    L.jsx(ou.Provider, { value: v, children: n })
  );
};
function vE() {
  return new Map();
}
function Yv(n = !0) {
  const a = E.useContext(ou);
  if (a === null) return [!0, null];
  const { isPresent: l, onExitComplete: s, register: o } = a,
    f = E.useId();
  E.useEffect(() => {
    n && o(f);
  }, [n]);
  const d = E.useCallback(() => n && s && s(f), [f, s, n]);
  return !l && s ? [!1, d] : [!0];
}
const Ds = (n) => n.key || '';
function Yy(n) {
  const a = [];
  return (
    E.Children.forEach(n, (l) => {
      E.isValidElement(l) && a.push(l);
    }),
    a
  );
}
const Kf = typeof window < 'u',
  Xv = Kf ? E.useLayoutEffect : E.useEffect,
  bE = ({
    children: n,
    custom: a,
    initial: l = !0,
    onExitComplete: s,
    presenceAffectsLayout: o = !0,
    mode: f = 'sync',
    propagate: d = !1,
    anchorX: m = 'left',
  }) => {
    const [h, p] = Yv(d),
      g = E.useMemo(() => Yy(n), [n]),
      v = d && !h ? [] : g.map(Ds),
      S = E.useRef(!0),
      T = E.useRef(g),
      A = Xf(() => new Map()),
      [M, _] = E.useState(g),
      [O, N] = E.useState(g);
    Xv(() => {
      (S.current = !1), (T.current = g);
      for (let V = 0; V < O.length; V++) {
        const Y = Ds(O[V]);
        v.includes(Y) ? A.delete(Y) : A.get(Y) !== !0 && A.set(Y, !1);
      }
    }, [O, v.length, v.join('-')]);
    const U = [];
    if (g !== M) {
      let V = [...g];
      for (let Y = 0; Y < O.length; Y++) {
        const $ = O[Y],
          K = Ds($);
        v.includes(K) || (V.splice(Y, 0, $), U.push($));
      }
      f === 'wait' && U.length && (V = U), N(Yy(V)), _(g);
      return;
    }
    const { forceRender: q } = E.useContext(Yf);
    return L.jsx(L.Fragment, {
      children: O.map((V) => {
        const Y = Ds(V),
          $ = d && !h ? !1 : g === O || v.includes(Y),
          K = () => {
            if (A.has(Y)) A.set(Y, !0);
            else return;
            let k = !0;
            A.forEach((W) => {
              W || (k = !1);
            }),
              k &&
                (q == null || q(),
                N(T.current),
                d && (p == null || p()),
                s && s());
          };
        return L.jsx(
          gE,
          {
            isPresent: $,
            initial: !S.current || l ? void 0 : !1,
            custom: $ ? void 0 : a,
            presenceAffectsLayout: o,
            mode: f,
            onExitComplete: $ ? void 0 : K,
            anchorX: m,
            children: V,
          },
          Y,
        );
      }),
    });
  },
  gt = (n) => n;
let ff = gt;
function Qf(n) {
  let a;
  return () => (a === void 0 && (a = n()), a);
}
const wi = (n, a, l) => {
    const s = a - n;
    return s === 0 ? 1 : (l - n) / s;
  },
  En = (n) => n * 1e3,
  An = (n) => n / 1e3,
  SE = { skipAnimations: !1, useManualTiming: !1 };
function xE(n) {
  let a = new Set(),
    l = new Set(),
    s = !1,
    o = !1;
  const f = new WeakSet();
  let d = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(p) {
    f.has(p) && (h.schedule(p), n()), p(d);
  }
  const h = {
    schedule: (p, g = !1, v = !1) => {
      const T = v && s ? a : l;
      return g && f.add(p), T.has(p) || T.add(p), p;
    },
    cancel: (p) => {
      l.delete(p), f.delete(p);
    },
    process: (p) => {
      if (((d = p), s)) {
        o = !0;
        return;
      }
      (s = !0),
        ([a, l] = [l, a]),
        a.forEach(m),
        a.clear(),
        (s = !1),
        o && ((o = !1), h.process(p));
    },
  };
  return h;
}
const ws = [
    'read',
    'resolveKeyframes',
    'update',
    'preRender',
    'render',
    'postRender',
  ],
  TE = 40;
function kv(n, a) {
  let l = !1,
    s = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    f = () => (l = !0),
    d = ws.reduce((O, N) => ((O[N] = xE(f)), O), {}),
    {
      read: m,
      resolveKeyframes: h,
      update: p,
      preRender: g,
      render: v,
      postRender: S,
    } = d,
    T = () => {
      const O = performance.now();
      (l = !1),
        (o.delta = s ? 1e3 / 60 : Math.max(Math.min(O - o.timestamp, TE), 1)),
        (o.timestamp = O),
        (o.isProcessing = !0),
        m.process(o),
        h.process(o),
        p.process(o),
        g.process(o),
        v.process(o),
        S.process(o),
        (o.isProcessing = !1),
        l && a && ((s = !1), n(T));
    },
    A = () => {
      (l = !0), (s = !0), o.isProcessing || n(T);
    };
  return {
    schedule: ws.reduce((O, N) => {
      const U = d[N];
      return (O[N] = (q, V = !1, Y = !1) => (l || A(), U.schedule(q, V, Y))), O;
    }, {}),
    cancel: (O) => {
      for (let N = 0; N < ws.length; N++) d[ws[N]].cancel(O);
    },
    state: o,
    steps: d,
  };
}
const {
    schedule: Ae,
    cancel: la,
    state: Je,
    steps: Pc,
  } = kv(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : gt, !0),
  Kv = E.createContext({ strict: !1 }),
  Xy = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  Oi = {};
for (const n in Xy) Oi[n] = { isEnabled: (a) => Xy[n].some((l) => !!a[l]) };
function EE(n) {
  for (const a in n) Oi[a] = { ...Oi[a], ...n[a] };
}
const AE = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
]);
function ks(n) {
  return (
    n.startsWith('while') ||
    (n.startsWith('drag') && n !== 'draggable') ||
    n.startsWith('layout') ||
    n.startsWith('onTap') ||
    n.startsWith('onPan') ||
    n.startsWith('onLayout') ||
    AE.has(n)
  );
}
let Qv = (n) => !ks(n);
function RE(n) {
  n && (Qv = (a) => (a.startsWith('on') ? !ks(a) : n(a)));
}
try {
  RE(require('@emotion/is-prop-valid').default);
} catch {}
function DE(n, a, l) {
  const s = {};
  for (const o in n)
    (o === 'values' && typeof n.values == 'object') ||
      ((Qv(o) ||
        (l === !0 && ks(o)) ||
        (!a && !ks(o)) ||
        (n.draggable && o.startsWith('onDrag'))) &&
        (s[o] = n[o]));
  return s;
}
function wE(n) {
  if (typeof Proxy > 'u') return n;
  const a = new Map(),
    l = (...s) => n(...s);
  return new Proxy(l, {
    get: (s, o) =>
      o === 'create' ? n : (a.has(o) || a.set(o, n(o)), a.get(o)),
  });
}
const cu = E.createContext({});
function Zl(n) {
  return typeof n == 'string' || Array.isArray(n);
}
function fu(n) {
  return n !== null && typeof n == 'object' && typeof n.start == 'function';
}
const Zf = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  Ff = ['initial', ...Zf];
function du(n) {
  return fu(n.animate) || Ff.some((a) => Zl(n[a]));
}
function Zv(n) {
  return !!(du(n) || n.variants);
}
function OE(n, a) {
  if (du(n)) {
    const { initial: l, animate: s } = n;
    return {
      initial: l === !1 || Zl(l) ? l : void 0,
      animate: Zl(s) ? s : void 0,
    };
  }
  return n.inherit !== !1 ? a : {};
}
function CE(n) {
  const { initial: a, animate: l } = OE(n, E.useContext(cu));
  return E.useMemo(() => ({ initial: a, animate: l }), [ky(a), ky(l)]);
}
function ky(n) {
  return Array.isArray(n) ? n.join(' ') : n;
}
const ME = Symbol.for('motionComponentSymbol');
function xi(n) {
  return (
    n &&
    typeof n == 'object' &&
    Object.prototype.hasOwnProperty.call(n, 'current')
  );
}
function _E(n, a, l) {
  return E.useCallback(
    (s) => {
      s && n.onMount && n.onMount(s),
        a && (s ? a.mount(s) : a.unmount()),
        l && (typeof l == 'function' ? l(s) : xi(l) && (l.current = s));
    },
    [a],
  );
}
const $f = (n) => n.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  zE = 'framerAppearId',
  Fv = 'data-' + $f(zE),
  { schedule: Jf, cancel: aC } = kv(queueMicrotask, !1),
  $v = E.createContext({});
function NE(n, a, l, s, o) {
  var f, d;
  const { visualElement: m } = E.useContext(cu),
    h = E.useContext(Kv),
    p = E.useContext(ou),
    g = E.useContext(kf).reducedMotion,
    v = E.useRef(null);
  (s = s || h.renderer),
    !v.current &&
      s &&
      (v.current = s(n, {
        visualState: a,
        parent: m,
        props: l,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: g,
      }));
  const S = v.current,
    T = E.useContext($v);
  S &&
    !S.projection &&
    o &&
    (S.type === 'html' || S.type === 'svg') &&
    jE(v.current, l, o, T);
  const A = E.useRef(!1);
  E.useInsertionEffect(() => {
    S && A.current && S.update(l, p);
  });
  const M = l[Fv],
    _ = E.useRef(
      !!M &&
        !(
          !((f = window.MotionHandoffIsComplete) === null || f === void 0) &&
          f.call(window, M)
        ) &&
        ((d = window.MotionHasOptimisedAnimation) === null || d === void 0
          ? void 0
          : d.call(window, M)),
    );
  return (
    Xv(() => {
      S &&
        ((A.current = !0),
        (window.MotionIsMounted = !0),
        S.updateFeatures(),
        Jf.render(S.render),
        _.current && S.animationState && S.animationState.animateChanges());
    }),
    E.useEffect(() => {
      S &&
        (!_.current && S.animationState && S.animationState.animateChanges(),
        _.current &&
          (queueMicrotask(() => {
            var O;
            (O = window.MotionHandoffMarkAsComplete) === null ||
              O === void 0 ||
              O.call(window, M);
          }),
          (_.current = !1)));
    }),
    S
  );
}
function jE(n, a, l, s) {
  const {
    layoutId: o,
    layout: f,
    drag: d,
    dragConstraints: m,
    layoutScroll: h,
    layoutRoot: p,
  } = a;
  (n.projection = new l(
    n.latestValues,
    a['data-framer-portal-id'] ? void 0 : Jv(n.parent),
  )),
    n.projection.setOptions({
      layoutId: o,
      layout: f,
      alwaysMeasureLayout: !!d || (m && xi(m)),
      visualElement: n,
      animationType: typeof f == 'string' ? f : 'both',
      initialPromotionConfig: s,
      layoutScroll: h,
      layoutRoot: p,
    });
}
function Jv(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : Jv(n.parent);
}
function VE({
  preloadedFeatures: n,
  createVisualElement: a,
  useRender: l,
  useVisualState: s,
  Component: o,
}) {
  var f, d;
  n && EE(n);
  function m(p, g) {
    let v;
    const S = { ...E.useContext(kf), ...p, layoutId: UE(p) },
      { isStatic: T } = S,
      A = CE(p),
      M = s(p, T);
    if (!T && Kf) {
      LE();
      const _ = BE(S);
      (v = _.MeasureLayout),
        (A.visualElement = NE(o, M, S, a, _.ProjectionNode));
    }
    return L.jsxs(cu.Provider, {
      value: A,
      children: [
        v && A.visualElement
          ? L.jsx(v, { visualElement: A.visualElement, ...S })
          : null,
        l(o, p, _E(M, A.visualElement, g), M, T, A.visualElement),
      ],
    });
  }
  m.displayName = `motion.${typeof o == 'string' ? o : `create(${(d = (f = o.displayName) !== null && f !== void 0 ? f : o.name) !== null && d !== void 0 ? d : ''})`}`;
  const h = E.forwardRef(m);
  return (h[ME] = o), h;
}
function UE({ layoutId: n }) {
  const a = E.useContext(Yf).id;
  return a && n !== void 0 ? a + '-' + n : n;
}
function LE(n, a) {
  E.useContext(Kv).strict;
}
function BE(n) {
  const { drag: a, layout: l } = Oi;
  if (!a && !l) return {};
  const s = { ...a, ...l };
  return {
    MeasureLayout:
      (a != null && a.isEnabled(n)) || (l != null && l.isEnabled(n))
        ? s.MeasureLayout
        : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
const HE = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function Wf(n) {
  return typeof n != 'string' || n.includes('-')
    ? !1
    : !!(HE.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function Ky(n) {
  const a = [{}, {}];
  return (
    n == null ||
      n.values.forEach((l, s) => {
        (a[0][s] = l.get()), (a[1][s] = l.getVelocity());
      }),
    a
  );
}
function If(n, a, l, s) {
  if (typeof a == 'function') {
    const [o, f] = Ky(s);
    a = a(l !== void 0 ? l : n.custom, o, f);
  }
  if (
    (typeof a == 'string' && (a = n.variants && n.variants[a]),
    typeof a == 'function')
  ) {
    const [o, f] = Ky(s);
    a = a(l !== void 0 ? l : n.custom, o, f);
  }
  return a;
}
const df = (n) => Array.isArray(n),
  PE = (n) => !!(n && typeof n == 'object' && n.mix && n.toValue),
  qE = (n) => (df(n) ? n[n.length - 1] || 0 : n),
  nt = (n) => !!(n && n.getVelocity);
function Us(n) {
  const a = nt(n) ? n.get() : n;
  return PE(a) ? a.toValue() : a;
}
function GE(
  { scrapeMotionValuesFromProps: n, createRenderState: a, onUpdate: l },
  s,
  o,
  f,
) {
  const d = { latestValues: YE(s, o, f, n), renderState: a() };
  return (
    l &&
      ((d.onMount = (m) => l({ props: s, current: m, ...d })),
      (d.onUpdate = (m) => l(m))),
    d
  );
}
const Wv = (n) => (a, l) => {
  const s = E.useContext(cu),
    o = E.useContext(ou),
    f = () => GE(n, a, s, o);
  return l ? f() : Xf(f);
};
function YE(n, a, l, s) {
  const o = {},
    f = s(n, {});
  for (const S in f) o[S] = Us(f[S]);
  let { initial: d, animate: m } = n;
  const h = du(n),
    p = Zv(n);
  a &&
    p &&
    !h &&
    n.inherit !== !1 &&
    (d === void 0 && (d = a.initial), m === void 0 && (m = a.animate));
  let g = l ? l.initial === !1 : !1;
  g = g || d === !1;
  const v = g ? m : d;
  if (v && typeof v != 'boolean' && !fu(v)) {
    const S = Array.isArray(v) ? v : [v];
    for (let T = 0; T < S.length; T++) {
      const A = If(n, S[T]);
      if (A) {
        const { transitionEnd: M, transition: _, ...O } = A;
        for (const N in O) {
          let U = O[N];
          if (Array.isArray(U)) {
            const q = g ? U.length - 1 : 0;
            U = U[q];
          }
          U !== null && (o[N] = U);
        }
        for (const N in M) o[N] = M[N];
      }
    }
  }
  return o;
}
const zi = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  Ba = new Set(zi),
  Iv = (n) => (a) => typeof a == 'string' && a.startsWith(n),
  ed = Iv('--'),
  XE = Iv('var(--'),
  td = (n) => (XE(n) ? kE.test(n.split('/*')[0].trim()) : !1),
  kE =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  e0 = (n, a) => (a && typeof n == 'number' ? a.transform(n) : n),
  wn = (n, a, l) => (l > a ? a : l < n ? n : l),
  Ni = {
    test: (n) => typeof n == 'number',
    parse: parseFloat,
    transform: (n) => n,
  },
  Fl = { ...Ni, transform: (n) => wn(0, 1, n) },
  Os = { ...Ni, default: 1 },
  ar = (n) => ({
    test: (a) =>
      typeof a == 'string' && a.endsWith(n) && a.split(' ').length === 1,
    parse: parseFloat,
    transform: (a) => `${a}${n}`,
  }),
  ta = ar('deg'),
  Jt = ar('%'),
  ie = ar('px'),
  KE = ar('vh'),
  QE = ar('vw'),
  Qy = {
    ...Jt,
    parse: (n) => Jt.parse(n) / 100,
    transform: (n) => Jt.transform(n * 100),
  },
  ZE = {
    borderWidth: ie,
    borderTopWidth: ie,
    borderRightWidth: ie,
    borderBottomWidth: ie,
    borderLeftWidth: ie,
    borderRadius: ie,
    radius: ie,
    borderTopLeftRadius: ie,
    borderTopRightRadius: ie,
    borderBottomRightRadius: ie,
    borderBottomLeftRadius: ie,
    width: ie,
    maxWidth: ie,
    height: ie,
    maxHeight: ie,
    top: ie,
    right: ie,
    bottom: ie,
    left: ie,
    padding: ie,
    paddingTop: ie,
    paddingRight: ie,
    paddingBottom: ie,
    paddingLeft: ie,
    margin: ie,
    marginTop: ie,
    marginRight: ie,
    marginBottom: ie,
    marginLeft: ie,
    backgroundPositionX: ie,
    backgroundPositionY: ie,
  },
  FE = {
    rotate: ta,
    rotateX: ta,
    rotateY: ta,
    rotateZ: ta,
    scale: Os,
    scaleX: Os,
    scaleY: Os,
    scaleZ: Os,
    skew: ta,
    skewX: ta,
    skewY: ta,
    distance: ie,
    translateX: ie,
    translateY: ie,
    translateZ: ie,
    x: ie,
    y: ie,
    z: ie,
    perspective: ie,
    transformPerspective: ie,
    opacity: Fl,
    originX: Qy,
    originY: Qy,
    originZ: ie,
  },
  Zy = { ...Ni, transform: Math.round },
  nd = {
    ...ZE,
    ...FE,
    zIndex: Zy,
    size: ie,
    fillOpacity: Fl,
    strokeOpacity: Fl,
    numOctaves: Zy,
  },
  $E = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  JE = zi.length;
function WE(n, a, l) {
  let s = '',
    o = !0;
  for (let f = 0; f < JE; f++) {
    const d = zi[f],
      m = n[d];
    if (m === void 0) continue;
    let h = !0;
    if (
      (typeof m == 'number'
        ? (h = m === (d.startsWith('scale') ? 1 : 0))
        : (h = parseFloat(m) === 0),
      !h || l)
    ) {
      const p = e0(m, nd[d]);
      if (!h) {
        o = !1;
        const g = $E[d] || d;
        s += `${g}(${p}) `;
      }
      l && (a[d] = p);
    }
  }
  return (s = s.trim()), l ? (s = l(a, o ? '' : s)) : o && (s = 'none'), s;
}
function ad(n, a, l) {
  const { style: s, vars: o, transformOrigin: f } = n;
  let d = !1,
    m = !1;
  for (const h in a) {
    const p = a[h];
    if (Ba.has(h)) {
      d = !0;
      continue;
    } else if (ed(h)) {
      o[h] = p;
      continue;
    } else {
      const g = e0(p, nd[h]);
      h.startsWith('origin') ? ((m = !0), (f[h] = g)) : (s[h] = g);
    }
  }
  if (
    (a.transform ||
      (d || l
        ? (s.transform = WE(a, n.transform, l))
        : s.transform && (s.transform = 'none')),
    m)
  ) {
    const { originX: h = '50%', originY: p = '50%', originZ: g = 0 } = f;
    s.transformOrigin = `${h} ${p} ${g}`;
  }
}
const IE = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  eA = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function tA(n, a, l = 1, s = 0, o = !0) {
  n.pathLength = 1;
  const f = o ? IE : eA;
  n[f.offset] = ie.transform(-s);
  const d = ie.transform(a),
    m = ie.transform(l);
  n[f.array] = `${d} ${m}`;
}
function Fy(n, a, l) {
  return typeof n == 'string' ? n : ie.transform(a + l * n);
}
function nA(n, a, l) {
  const s = Fy(a, n.x, n.width),
    o = Fy(l, n.y, n.height);
  return `${s} ${o}`;
}
function id(
  n,
  {
    attrX: a,
    attrY: l,
    attrScale: s,
    originX: o,
    originY: f,
    pathLength: d,
    pathSpacing: m = 1,
    pathOffset: h = 0,
    ...p
  },
  g,
  v,
) {
  if ((ad(n, p, v), g)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  (n.attrs = n.style), (n.style = {});
  const { attrs: S, style: T, dimensions: A } = n;
  S.transform && (A && (T.transform = S.transform), delete S.transform),
    A &&
      (o !== void 0 || f !== void 0 || T.transform) &&
      (T.transformOrigin = nA(
        A,
        o !== void 0 ? o : 0.5,
        f !== void 0 ? f : 0.5,
      )),
    a !== void 0 && (S.x = a),
    l !== void 0 && (S.y = l),
    s !== void 0 && (S.scale = s),
    d !== void 0 && tA(S, d, m, h, !1);
}
const ld = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  t0 = () => ({ ...ld(), attrs: {} }),
  rd = (n) => typeof n == 'string' && n.toLowerCase() === 'svg';
function n0(n, { style: a, vars: l }, s, o) {
  Object.assign(n.style, a, o && o.getProjectionStyles(s));
  for (const f in l) n.style.setProperty(f, l[f]);
}
const a0 = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function i0(n, a, l, s) {
  n0(n, a, void 0, s);
  for (const o in a.attrs) n.setAttribute(a0.has(o) ? o : $f(o), a.attrs[o]);
}
const $l = {};
function aA(n) {
  for (const a in n) ($l[a] = n[a]), ed(a) && ($l[a].isCSSVariable = !0);
}
function l0(n, { layout: a, layoutId: l }) {
  return (
    Ba.has(n) ||
    n.startsWith('origin') ||
    ((a || l !== void 0) && (!!$l[n] || n === 'opacity'))
  );
}
function sd(n, a, l) {
  var s;
  const { style: o } = n,
    f = {};
  for (const d in o)
    (nt(o[d]) ||
      (a.style && nt(a.style[d])) ||
      l0(d, n) ||
      ((s = l == null ? void 0 : l.getValue(d)) === null || s === void 0
        ? void 0
        : s.liveStyle) !== void 0) &&
      (f[d] = o[d]);
  return f;
}
function r0(n, a, l) {
  const s = sd(n, a, l);
  for (const o in n)
    if (nt(n[o]) || nt(a[o])) {
      const f =
        zi.indexOf(o) !== -1
          ? 'attr' + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      s[f] = n[o];
    }
  return s;
}
function iA(n, a) {
  try {
    a.dimensions =
      typeof n.getBBox == 'function' ? n.getBBox() : n.getBoundingClientRect();
  } catch {
    a.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const $y = ['x', 'y', 'width', 'height', 'cx', 'cy', 'r'],
  lA = {
    useVisualState: Wv({
      scrapeMotionValuesFromProps: r0,
      createRenderState: t0,
      onUpdate: ({
        props: n,
        prevProps: a,
        current: l,
        renderState: s,
        latestValues: o,
      }) => {
        if (!l) return;
        let f = !!n.drag;
        if (!f) {
          for (const m in o)
            if (Ba.has(m)) {
              f = !0;
              break;
            }
        }
        if (!f) return;
        let d = !a;
        if (a)
          for (let m = 0; m < $y.length; m++) {
            const h = $y[m];
            n[h] !== a[h] && (d = !0);
          }
        d &&
          Ae.read(() => {
            iA(l, s),
              Ae.render(() => {
                id(s, o, rd(l.tagName), n.transformTemplate), i0(l, s);
              });
          });
      },
    }),
  },
  rA = {
    useVisualState: Wv({
      scrapeMotionValuesFromProps: sd,
      createRenderState: ld,
    }),
  };
function s0(n, a, l) {
  for (const s in a) !nt(a[s]) && !l0(s, l) && (n[s] = a[s]);
}
function sA({ transformTemplate: n }, a) {
  return E.useMemo(() => {
    const l = ld();
    return ad(l, a, n), Object.assign({}, l.vars, l.style);
  }, [a]);
}
function uA(n, a) {
  const l = n.style || {},
    s = {};
  return s0(s, l, n), Object.assign(s, sA(n, a)), s;
}
function oA(n, a) {
  const l = {},
    s = uA(n, a);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((l.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = 'none'),
      (s.touchAction =
        n.drag === !0 ? 'none' : `pan-${n.drag === 'x' ? 'y' : 'x'}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (l.tabIndex = 0),
    (l.style = s),
    l
  );
}
function cA(n, a, l, s) {
  const o = E.useMemo(() => {
    const f = t0();
    return (
      id(f, a, rd(s), n.transformTemplate),
      { ...f.attrs, style: { ...f.style } }
    );
  }, [a]);
  if (n.style) {
    const f = {};
    s0(f, n.style, n), (o.style = { ...f, ...o.style });
  }
  return o;
}
function fA(n = !1) {
  return (l, s, o, { latestValues: f }, d) => {
    const h = (Wf(l) ? cA : oA)(s, f, d, l),
      p = DE(s, typeof l == 'string', n),
      g = l !== E.Fragment ? { ...p, ...h, ref: o } : {},
      { children: v } = s,
      S = E.useMemo(() => (nt(v) ? v.get() : v), [v]);
    return E.createElement(l, { ...g, children: S });
  };
}
function dA(n, a) {
  return function (s, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const d = {
      ...(Wf(s) ? lA : rA),
      preloadedFeatures: n,
      useRender: fA(o),
      createVisualElement: a,
      Component: s,
    };
    return VE(d);
  };
}
function u0(n, a) {
  if (!Array.isArray(a)) return !1;
  const l = a.length;
  if (l !== n.length) return !1;
  for (let s = 0; s < l; s++) if (a[s] !== n[s]) return !1;
  return !0;
}
function hu(n, a, l) {
  const s = n.getProps();
  return If(s, a, l !== void 0 ? l : s.custom, n);
}
const hA = Qf(() => window.ScrollTimeline !== void 0);
class mA {
  constructor(a) {
    (this.stop = () => this.runAll('stop')),
      (this.animations = a.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((a) => ('finished' in a ? a.finished : a)),
    );
  }
  getAll(a) {
    return this.animations[0][a];
  }
  setAll(a, l) {
    for (let s = 0; s < this.animations.length; s++) this.animations[s][a] = l;
  }
  attachTimeline(a, l) {
    const s = this.animations.map((o) => {
      if (hA() && o.attachTimeline) return o.attachTimeline(a);
      if (typeof l == 'function') return l(o);
    });
    return () => {
      s.forEach((o, f) => {
        o && o(), this.animations[f].stop();
      });
    };
  }
  get time() {
    return this.getAll('time');
  }
  set time(a) {
    this.setAll('time', a);
  }
  get speed() {
    return this.getAll('speed');
  }
  set speed(a) {
    this.setAll('speed', a);
  }
  get startTime() {
    return this.getAll('startTime');
  }
  get duration() {
    let a = 0;
    for (let l = 0; l < this.animations.length; l++)
      a = Math.max(a, this.animations[l].duration);
    return a;
  }
  runAll(a) {
    this.animations.forEach((l) => l[a]());
  }
  flatten() {
    this.runAll('flatten');
  }
  play() {
    this.runAll('play');
  }
  pause() {
    this.runAll('pause');
  }
  cancel() {
    this.runAll('cancel');
  }
  complete() {
    this.runAll('complete');
  }
}
class pA extends mA {
  then(a, l) {
    return Promise.all(this.animations).then(a).catch(l);
  }
}
function ud(n, a) {
  return n ? n[a] || n.default || n : void 0;
}
const hf = 2e4;
function o0(n) {
  let a = 0;
  const l = 50;
  let s = n.next(a);
  for (; !s.done && a < hf; ) (a += l), (s = n.next(a));
  return a >= hf ? 1 / 0 : a;
}
function od(n) {
  return typeof n == 'function';
}
function Jy(n, a) {
  (n.timeline = a), (n.onfinish = null);
}
const cd = (n) => Array.isArray(n) && typeof n[0] == 'number',
  yA = { linearEasing: void 0 };
function gA(n, a) {
  const l = Qf(n);
  return () => {
    var s;
    return (s = yA[a]) !== null && s !== void 0 ? s : l();
  };
}
const Ks = gA(() => {
    try {
      document
        .createElement('div')
        .animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
    } catch {
      return !1;
    }
    return !0;
  }, 'linearEasing'),
  c0 = (n, a, l = 10) => {
    let s = '';
    const o = Math.max(Math.round(a / l), 2);
    for (let f = 0; f < o; f++) s += n(wi(0, o - 1, f)) + ', ';
    return `linear(${s.substring(0, s.length - 2)})`;
  };
function f0(n) {
  return !!(
    (typeof n == 'function' && Ks()) ||
    !n ||
    (typeof n == 'string' && (n in mf || Ks())) ||
    cd(n) ||
    (Array.isArray(n) && n.every(f0))
  );
}
const Bl = ([n, a, l, s]) => `cubic-bezier(${n}, ${a}, ${l}, ${s})`,
  mf = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Bl([0, 0.65, 0.55, 1]),
    circOut: Bl([0.55, 0, 1, 0.45]),
    backIn: Bl([0.31, 0.01, 0.66, -0.59]),
    backOut: Bl([0.33, 1.53, 0.69, 0.99]),
  };
function d0(n, a) {
  if (n)
    return typeof n == 'function' && Ks()
      ? c0(n, a)
      : cd(n)
        ? Bl(n)
        : Array.isArray(n)
          ? n.map((l) => d0(l, a) || mf.easeOut)
          : mf[n];
}
const Gt = { x: !1, y: !1 };
function h0() {
  return Gt.x || Gt.y;
}
function vA(n, a, l) {
  var s;
  if (n instanceof Element) return [n];
  if (typeof n == 'string') {
    let o = document;
    const f = (s = void 0) !== null && s !== void 0 ? s : o.querySelectorAll(n);
    return f ? Array.from(f) : [];
  }
  return Array.from(n);
}
function m0(n, a) {
  const l = vA(n),
    s = new AbortController(),
    o = { passive: !0, ...a, signal: s.signal };
  return [l, o, () => s.abort()];
}
function Wy(n) {
  return !(n.pointerType === 'touch' || h0());
}
function bA(n, a, l = {}) {
  const [s, o, f] = m0(n, l),
    d = (m) => {
      if (!Wy(m)) return;
      const { target: h } = m,
        p = a(h, m);
      if (typeof p != 'function' || !h) return;
      const g = (v) => {
        Wy(v) && (p(v), h.removeEventListener('pointerleave', g));
      };
      h.addEventListener('pointerleave', g, o);
    };
  return (
    s.forEach((m) => {
      m.addEventListener('pointerenter', d, o);
    }),
    f
  );
}
const p0 = (n, a) => (a ? (n === a ? !0 : p0(n, a.parentElement)) : !1),
  fd = (n) =>
    n.pointerType === 'mouse'
      ? typeof n.button != 'number' || n.button <= 0
      : n.isPrimary !== !1,
  SA = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']);
function xA(n) {
  return SA.has(n.tagName) || n.tabIndex !== -1;
}
const Hl = new WeakSet();
function Iy(n) {
  return (a) => {
    a.key === 'Enter' && n(a);
  };
}
function qc(n, a) {
  n.dispatchEvent(
    new PointerEvent('pointer' + a, { isPrimary: !0, bubbles: !0 }),
  );
}
const TA = (n, a) => {
  const l = n.currentTarget;
  if (!l) return;
  const s = Iy(() => {
    if (Hl.has(l)) return;
    qc(l, 'down');
    const o = Iy(() => {
        qc(l, 'up');
      }),
      f = () => qc(l, 'cancel');
    l.addEventListener('keyup', o, a), l.addEventListener('blur', f, a);
  });
  l.addEventListener('keydown', s, a),
    l.addEventListener('blur', () => l.removeEventListener('keydown', s), a);
};
function eg(n) {
  return fd(n) && !h0();
}
function EA(n, a, l = {}) {
  const [s, o, f] = m0(n, l),
    d = (m) => {
      const h = m.currentTarget;
      if (!eg(m) || Hl.has(h)) return;
      Hl.add(h);
      const p = a(h, m),
        g = (T, A) => {
          window.removeEventListener('pointerup', v),
            window.removeEventListener('pointercancel', S),
            !(!eg(T) || !Hl.has(h)) &&
              (Hl.delete(h), typeof p == 'function' && p(T, { success: A }));
        },
        v = (T) => {
          g(T, l.useGlobalTarget || p0(h, T.target));
        },
        S = (T) => {
          g(T, !1);
        };
      window.addEventListener('pointerup', v, o),
        window.addEventListener('pointercancel', S, o);
    };
  return (
    s.forEach((m) => {
      !xA(m) && m.getAttribute('tabindex') === null && (m.tabIndex = 0),
        (l.useGlobalTarget ? window : m).addEventListener('pointerdown', d, o),
        m.addEventListener('focus', (p) => TA(p, o), o);
    }),
    f
  );
}
function AA(n) {
  return n === 'x' || n === 'y'
    ? Gt[n]
      ? null
      : ((Gt[n] = !0),
        () => {
          Gt[n] = !1;
        })
    : Gt.x || Gt.y
      ? null
      : ((Gt.x = Gt.y = !0),
        () => {
          Gt.x = Gt.y = !1;
        });
}
const y0 = new Set([
  'width',
  'height',
  'top',
  'left',
  'right',
  'bottom',
  ...zi,
]);
let Ls;
function RA() {
  Ls = void 0;
}
const Wt = {
  now: () => (
    Ls === void 0 &&
      Wt.set(
        Je.isProcessing || SE.useManualTiming
          ? Je.timestamp
          : performance.now(),
      ),
    Ls
  ),
  set: (n) => {
    (Ls = n), queueMicrotask(RA);
  },
};
function dd(n, a) {
  n.indexOf(a) === -1 && n.push(a);
}
function hd(n, a) {
  const l = n.indexOf(a);
  l > -1 && n.splice(l, 1);
}
class md {
  constructor() {
    this.subscriptions = [];
  }
  add(a) {
    return dd(this.subscriptions, a), () => hd(this.subscriptions, a);
  }
  notify(a, l, s) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](a, l, s);
      else
        for (let f = 0; f < o; f++) {
          const d = this.subscriptions[f];
          d && d(a, l, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function g0(n, a) {
  return a ? n * (1e3 / a) : 0;
}
const tg = 30,
  DA = (n) => !isNaN(parseFloat(n));
class wA {
  constructor(a, l = {}) {
    (this.version = '12.0.5'),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s, o = !0) => {
        const f = Wt.now();
        this.updatedAt !== f && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(a),
      (this.owner = l.owner);
  }
  setCurrent(a) {
    (this.current = a),
      (this.updatedAt = Wt.now()),
      this.canTrackVelocity === null &&
        a !== void 0 &&
        (this.canTrackVelocity = DA(this.current));
  }
  setPrevFrameValue(a = this.current) {
    (this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(a) {
    return this.on('change', a);
  }
  on(a, l) {
    this.events[a] || (this.events[a] = new md());
    const s = this.events[a].add(l);
    return a === 'change'
      ? () => {
          s(),
            Ae.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const a in this.events) this.events[a].clear();
  }
  attach(a, l) {
    (this.passiveEffect = a), (this.stopPassiveEffect = l);
  }
  set(a, l = !0) {
    !l || !this.passiveEffect
      ? this.updateAndNotify(a, l)
      : this.passiveEffect(a, this.updateAndNotify);
  }
  setWithVelocity(a, l, s) {
    this.set(l),
      (this.prev = void 0),
      (this.prevFrameValue = a),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(a, l = !0) {
    this.updateAndNotify(a),
      (this.prev = a),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      l && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const a = Wt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      a - this.updatedAt > tg
    )
      return 0;
    const l = Math.min(this.updatedAt - this.prevUpdatedAt, tg);
    return g0(parseFloat(this.current) - parseFloat(this.prevFrameValue), l);
  }
  start(a) {
    return (
      this.stop(),
      new Promise((l) => {
        (this.hasAnimated = !0),
          (this.animation = a(l)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Jl(n, a) {
  return new wA(n, a);
}
function OA(n, a, l) {
  n.hasValue(a) ? n.getValue(a).set(l) : n.addValue(a, Jl(l));
}
function CA(n, a) {
  const l = hu(n, a);
  let { transitionEnd: s = {}, transition: o = {}, ...f } = l || {};
  f = { ...f, ...s };
  for (const d in f) {
    const m = qE(f[d]);
    OA(n, d, m);
  }
}
function MA(n) {
  return !!(nt(n) && n.add);
}
function pf(n, a) {
  const l = n.getValue('willChange');
  if (MA(l)) return l.add(a);
}
function v0(n) {
  return n.props[Fv];
}
const b0 = (n, a, l) =>
    (((1 - 3 * l + 3 * a) * n + (3 * l - 6 * a)) * n + 3 * a) * n,
  _A = 1e-7,
  zA = 12;
function NA(n, a, l, s, o) {
  let f,
    d,
    m = 0;
  do (d = a + (l - a) / 2), (f = b0(d, s, o) - n), f > 0 ? (l = d) : (a = d);
  while (Math.abs(f) > _A && ++m < zA);
  return d;
}
function ir(n, a, l, s) {
  if (n === a && l === s) return gt;
  const o = (f) => NA(f, 0, 1, n, l);
  return (f) => (f === 0 || f === 1 ? f : b0(o(f), a, s));
}
const S0 = (n) => (a) => (a <= 0.5 ? n(2 * a) / 2 : (2 - n(2 * (1 - a))) / 2),
  x0 = (n) => (a) => 1 - n(1 - a),
  T0 = ir(0.33, 1.53, 0.69, 0.99),
  pd = x0(T0),
  E0 = S0(pd),
  A0 = (n) =>
    (n *= 2) < 1 ? 0.5 * pd(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  yd = (n) => 1 - Math.sin(Math.acos(n)),
  R0 = x0(yd),
  D0 = S0(yd),
  w0 = (n) => /^0[^.\s]+$/u.test(n);
function jA(n) {
  return typeof n == 'number'
    ? n === 0
    : n !== null
      ? n === 'none' || n === '0' || w0(n)
      : !0;
}
const ql = (n) => Math.round(n * 1e5) / 1e5,
  gd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function VA(n) {
  return n == null;
}
const UA =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  vd = (n, a) => (l) =>
    !!(
      (typeof l == 'string' && UA.test(l) && l.startsWith(n)) ||
      (a && !VA(l) && Object.prototype.hasOwnProperty.call(l, a))
    ),
  O0 = (n, a, l) => (s) => {
    if (typeof s != 'string') return s;
    const [o, f, d, m] = s.match(gd);
    return {
      [n]: parseFloat(o),
      [a]: parseFloat(f),
      [l]: parseFloat(d),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  LA = (n) => wn(0, 255, n),
  Gc = { ...Ni, transform: (n) => Math.round(LA(n)) },
  ja = {
    test: vd('rgb', 'red'),
    parse: O0('red', 'green', 'blue'),
    transform: ({ red: n, green: a, blue: l, alpha: s = 1 }) =>
      'rgba(' +
      Gc.transform(n) +
      ', ' +
      Gc.transform(a) +
      ', ' +
      Gc.transform(l) +
      ', ' +
      ql(Fl.transform(s)) +
      ')',
  };
function BA(n) {
  let a = '',
    l = '',
    s = '',
    o = '';
  return (
    n.length > 5
      ? ((a = n.substring(1, 3)),
        (l = n.substring(3, 5)),
        (s = n.substring(5, 7)),
        (o = n.substring(7, 9)))
      : ((a = n.substring(1, 2)),
        (l = n.substring(2, 3)),
        (s = n.substring(3, 4)),
        (o = n.substring(4, 5)),
        (a += a),
        (l += l),
        (s += s),
        (o += o)),
    {
      red: parseInt(a, 16),
      green: parseInt(l, 16),
      blue: parseInt(s, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const yf = { test: vd('#'), parse: BA, transform: ja.transform },
  Ti = {
    test: vd('hsl', 'hue'),
    parse: O0('hue', 'saturation', 'lightness'),
    transform: ({ hue: n, saturation: a, lightness: l, alpha: s = 1 }) =>
      'hsla(' +
      Math.round(n) +
      ', ' +
      Jt.transform(ql(a)) +
      ', ' +
      Jt.transform(ql(l)) +
      ', ' +
      ql(Fl.transform(s)) +
      ')',
  },
  tt = {
    test: (n) => ja.test(n) || yf.test(n) || Ti.test(n),
    parse: (n) =>
      ja.test(n) ? ja.parse(n) : Ti.test(n) ? Ti.parse(n) : yf.parse(n),
    transform: (n) =>
      typeof n == 'string'
        ? n
        : n.hasOwnProperty('red')
          ? ja.transform(n)
          : Ti.transform(n),
  },
  HA =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function PA(n) {
  var a, l;
  return (
    isNaN(n) &&
    typeof n == 'string' &&
    (((a = n.match(gd)) === null || a === void 0 ? void 0 : a.length) || 0) +
      (((l = n.match(HA)) === null || l === void 0 ? void 0 : l.length) || 0) >
      0
  );
}
const C0 = 'number',
  M0 = 'color',
  qA = 'var',
  GA = 'var(',
  ng = '${}',
  YA =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Wl(n) {
  const a = n.toString(),
    l = [],
    s = { color: [], number: [], var: [] },
    o = [];
  let f = 0;
  const m = a
    .replace(
      YA,
      (h) => (
        tt.test(h)
          ? (s.color.push(f), o.push(M0), l.push(tt.parse(h)))
          : h.startsWith(GA)
            ? (s.var.push(f), o.push(qA), l.push(h))
            : (s.number.push(f), o.push(C0), l.push(parseFloat(h))),
        ++f,
        ng
      ),
    )
    .split(ng);
  return { values: l, split: m, indexes: s, types: o };
}
function _0(n) {
  return Wl(n).values;
}
function z0(n) {
  const { split: a, types: l } = Wl(n),
    s = a.length;
  return (o) => {
    let f = '';
    for (let d = 0; d < s; d++)
      if (((f += a[d]), o[d] !== void 0)) {
        const m = l[d];
        m === C0
          ? (f += ql(o[d]))
          : m === M0
            ? (f += tt.transform(o[d]))
            : (f += o[d]);
      }
    return f;
  };
}
const XA = (n) => (typeof n == 'number' ? 0 : n);
function kA(n) {
  const a = _0(n);
  return z0(n)(a.map(XA));
}
const ra = {
    test: PA,
    parse: _0,
    createTransformer: z0,
    getAnimatableNone: kA,
  },
  KA = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function QA(n) {
  const [a, l] = n.slice(0, -1).split('(');
  if (a === 'drop-shadow') return n;
  const [s] = l.match(gd) || [];
  if (!s) return n;
  const o = l.replace(s, '');
  let f = KA.has(a) ? 1 : 0;
  return s !== l && (f *= 100), a + '(' + f + o + ')';
}
const ZA = /\b([a-z-]*)\(.*?\)/gu,
  gf = {
    ...ra,
    getAnimatableNone: (n) => {
      const a = n.match(ZA);
      return a ? a.map(QA).join(' ') : n;
    },
  },
  FA = {
    ...nd,
    color: tt,
    backgroundColor: tt,
    outlineColor: tt,
    fill: tt,
    stroke: tt,
    borderColor: tt,
    borderTopColor: tt,
    borderRightColor: tt,
    borderBottomColor: tt,
    borderLeftColor: tt,
    filter: gf,
    WebkitFilter: gf,
  },
  bd = (n) => FA[n];
function N0(n, a) {
  let l = bd(n);
  return (
    l !== gf && (l = ra), l.getAnimatableNone ? l.getAnimatableNone(a) : void 0
  );
}
const $A = new Set(['auto', 'none', '0']);
function JA(n, a, l) {
  let s = 0,
    o;
  for (; s < n.length && !o; ) {
    const f = n[s];
    typeof f == 'string' && !$A.has(f) && Wl(f).values.length && (o = n[s]),
      s++;
  }
  if (o && l) for (const f of a) n[f] = N0(l, o);
}
const ag = (n) => n === Ni || n === ie,
  ig = (n, a) => parseFloat(n.split(', ')[a]),
  lg =
    (n, a) =>
    (l, { transform: s }) => {
      if (s === 'none' || !s) return 0;
      const o = s.match(/^matrix3d\((.+)\)$/u);
      if (o) return ig(o[1], a);
      {
        const f = s.match(/^matrix\((.+)\)$/u);
        return f ? ig(f[1], n) : 0;
      }
    },
  WA = new Set(['x', 'y', 'z']),
  IA = zi.filter((n) => !WA.has(n));
function eR(n) {
  const a = [];
  return (
    IA.forEach((l) => {
      const s = n.getValue(l);
      s !== void 0 &&
        (a.push([l, s.get()]), s.set(l.startsWith('scale') ? 1 : 0));
    }),
    a
  );
}
const Ci = {
  width: ({ x: n }, { paddingLeft: a = '0', paddingRight: l = '0' }) =>
    n.max - n.min - parseFloat(a) - parseFloat(l),
  height: ({ y: n }, { paddingTop: a = '0', paddingBottom: l = '0' }) =>
    n.max - n.min - parseFloat(a) - parseFloat(l),
  top: (n, { top: a }) => parseFloat(a),
  left: (n, { left: a }) => parseFloat(a),
  bottom: ({ y: n }, { top: a }) => parseFloat(a) + (n.max - n.min),
  right: ({ x: n }, { left: a }) => parseFloat(a) + (n.max - n.min),
  x: lg(4, 13),
  y: lg(5, 14),
};
Ci.translateX = Ci.x;
Ci.translateY = Ci.y;
const Va = new Set();
let vf = !1,
  bf = !1;
function j0() {
  if (bf) {
    const n = Array.from(Va).filter((s) => s.needsMeasurement),
      a = new Set(n.map((s) => s.element)),
      l = new Map();
    a.forEach((s) => {
      const o = eR(s);
      o.length && (l.set(s, o), s.render());
    }),
      n.forEach((s) => s.measureInitialState()),
      a.forEach((s) => {
        s.render();
        const o = l.get(s);
        o &&
          o.forEach(([f, d]) => {
            var m;
            (m = s.getValue(f)) === null || m === void 0 || m.set(d);
          });
      }),
      n.forEach((s) => s.measureEndState()),
      n.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (bf = !1), (vf = !1), Va.forEach((n) => n.complete()), Va.clear();
}
function V0() {
  Va.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (bf = !0);
  });
}
function tR() {
  V0(), j0();
}
class Sd {
  constructor(a, l, s, o, f, d = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...a]),
      (this.onComplete = l),
      (this.name = s),
      (this.motionValue = o),
      (this.element = f),
      (this.isAsync = d);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Va.add(this),
          vf || ((vf = !0), Ae.read(V0), Ae.resolveKeyframes(j0)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: a,
      name: l,
      element: s,
      motionValue: o,
    } = this;
    for (let f = 0; f < a.length; f++)
      if (a[f] === null)
        if (f === 0) {
          const d = o == null ? void 0 : o.get(),
            m = a[a.length - 1];
          if (d !== void 0) a[0] = d;
          else if (s && l) {
            const h = s.readValue(l, m);
            h != null && (a[0] = h);
          }
          a[0] === void 0 && (a[0] = m), o && d === void 0 && o.set(a[0]);
        } else a[f] = a[f - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Va.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Va.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const U0 = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
  nR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function aR(n) {
  const a = nR.exec(n);
  if (!a) return [,];
  const [, l, s, o] = a;
  return [`--${l ?? s}`, o];
}
function L0(n, a, l = 1) {
  const [s, o] = aR(n);
  if (!s) return;
  const f = window.getComputedStyle(a).getPropertyValue(s);
  if (f) {
    const d = f.trim();
    return U0(d) ? parseFloat(d) : d;
  }
  return td(o) ? L0(o, a, l + 1) : o;
}
const B0 = (n) => (a) => a.test(n),
  iR = { test: (n) => n === 'auto', parse: (n) => n },
  H0 = [Ni, ie, Jt, ta, QE, KE, iR],
  rg = (n) => H0.find(B0(n));
class P0 extends Sd {
  constructor(a, l, s, o, f) {
    super(a, l, s, o, f, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: a, element: l, name: s } = this;
    if (!l || !l.current) return;
    super.readKeyframes();
    for (let h = 0; h < a.length; h++) {
      let p = a[h];
      if (typeof p == 'string' && ((p = p.trim()), td(p))) {
        const g = L0(p, l.current);
        g !== void 0 && (a[h] = g),
          h === a.length - 1 && (this.finalKeyframe = p);
      }
    }
    if ((this.resolveNoneKeyframes(), !y0.has(s) || a.length !== 2)) return;
    const [o, f] = a,
      d = rg(o),
      m = rg(f);
    if (d !== m)
      if (ag(d) && ag(m))
        for (let h = 0; h < a.length; h++) {
          const p = a[h];
          typeof p == 'string' && (a[h] = parseFloat(p));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: a, name: l } = this,
      s = [];
    for (let o = 0; o < a.length; o++) jA(a[o]) && s.push(o);
    s.length && JA(a, s, l);
  }
  measureInitialState() {
    const { element: a, unresolvedKeyframes: l, name: s } = this;
    if (!a || !a.current) return;
    s === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ci[s](
        a.measureViewportBox(),
        window.getComputedStyle(a.current),
      )),
      (l[0] = this.measuredOrigin);
    const o = l[l.length - 1];
    o !== void 0 && a.getValue(s, o).jump(o, !1);
  }
  measureEndState() {
    var a;
    const { element: l, name: s, unresolvedKeyframes: o } = this;
    if (!l || !l.current) return;
    const f = l.getValue(s);
    f && f.jump(this.measuredOrigin, !1);
    const d = o.length - 1,
      m = o[d];
    (o[d] = Ci[s](l.measureViewportBox(), window.getComputedStyle(l.current))),
      m !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = m),
      !((a = this.removedTransforms) === null || a === void 0) &&
        a.length &&
        this.removedTransforms.forEach(([h, p]) => {
          l.getValue(h).set(p);
        }),
      this.resolveNoneKeyframes();
  }
}
const sg = (n, a) =>
  a === 'zIndex'
    ? !1
    : !!(
        typeof n == 'number' ||
        Array.isArray(n) ||
        (typeof n == 'string' &&
          (ra.test(n) || n === '0') &&
          !n.startsWith('url('))
      );
function lR(n) {
  const a = n[0];
  if (n.length === 1) return !0;
  for (let l = 0; l < n.length; l++) if (n[l] !== a) return !0;
}
function rR(n, a, l, s) {
  const o = n[0];
  if (o === null) return !1;
  if (a === 'display' || a === 'visibility') return !0;
  const f = n[n.length - 1],
    d = sg(o, a),
    m = sg(f, a);
  return !d || !m ? !1 : lR(n) || ((l === 'spring' || od(l)) && s);
}
const sR = (n) => n !== null;
function mu(n, { repeat: a, repeatType: l = 'loop' }, s) {
  const o = n.filter(sR),
    f = a && l !== 'loop' && a % 2 === 1 ? 0 : o.length - 1;
  return !f || s === void 0 ? o[f] : s;
}
const uR = 40;
class q0 {
  constructor({
    autoplay: a = !0,
    delay: l = 0,
    type: s = 'keyframes',
    repeat: o = 0,
    repeatDelay: f = 0,
    repeatType: d = 'loop',
    ...m
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Wt.now()),
      (this.options = {
        autoplay: a,
        delay: l,
        type: s,
        repeat: o,
        repeatDelay: f,
        repeatType: d,
        ...m,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > uR
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && tR(), this._resolved;
  }
  onKeyframesResolved(a, l) {
    (this.resolvedAt = Wt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: s,
      type: o,
      velocity: f,
      delay: d,
      onComplete: m,
      onUpdate: h,
      isGenerator: p,
    } = this.options;
    if (!p && !rR(a, s, o, f))
      if (d) this.options.duration = 0;
      else {
        h && h(mu(a, this.options, l)), m && m(), this.resolveFinishedPromise();
        return;
      }
    const g = this.initPlayback(a, l);
    g !== !1 &&
      ((this._resolved = { keyframes: a, finalKeyframe: l, ...g }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(a, l) {
    return this.currentFinishedPromise.then(a, l);
  }
  flatten() {
    (this.options.type = 'keyframes'), (this.options.ease = 'linear');
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((a) => {
      this.resolveFinishedPromise = a;
    });
  }
}
const Ce = (n, a, l) => n + (a - n) * l;
function Yc(n, a, l) {
  return (
    l < 0 && (l += 1),
    l > 1 && (l -= 1),
    l < 1 / 6
      ? n + (a - n) * 6 * l
      : l < 1 / 2
        ? a
        : l < 2 / 3
          ? n + (a - n) * (2 / 3 - l) * 6
          : n
  );
}
function oR({ hue: n, saturation: a, lightness: l, alpha: s }) {
  (n /= 360), (a /= 100), (l /= 100);
  let o = 0,
    f = 0,
    d = 0;
  if (!a) o = f = d = l;
  else {
    const m = l < 0.5 ? l * (1 + a) : l + a - l * a,
      h = 2 * l - m;
    (o = Yc(h, m, n + 1 / 3)), (f = Yc(h, m, n)), (d = Yc(h, m, n - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(f * 255),
    blue: Math.round(d * 255),
    alpha: s,
  };
}
function Qs(n, a) {
  return (l) => (l > 0 ? a : n);
}
const Xc = (n, a, l) => {
    const s = n * n,
      o = l * (a * a - s) + s;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  cR = [yf, ja, Ti],
  fR = (n) => cR.find((a) => a.test(n));
function ug(n) {
  const a = fR(n);
  if (!a) return !1;
  let l = a.parse(n);
  return a === Ti && (l = oR(l)), l;
}
const og = (n, a) => {
    const l = ug(n),
      s = ug(a);
    if (!l || !s) return Qs(n, a);
    const o = { ...l };
    return (f) => (
      (o.red = Xc(l.red, s.red, f)),
      (o.green = Xc(l.green, s.green, f)),
      (o.blue = Xc(l.blue, s.blue, f)),
      (o.alpha = Ce(l.alpha, s.alpha, f)),
      ja.transform(o)
    );
  },
  dR = (n, a) => (l) => a(n(l)),
  lr = (...n) => n.reduce(dR),
  Sf = new Set(['none', 'hidden']);
function hR(n, a) {
  return Sf.has(n) ? (l) => (l <= 0 ? n : a) : (l) => (l >= 1 ? a : n);
}
function mR(n, a) {
  return (l) => Ce(n, a, l);
}
function xd(n) {
  return typeof n == 'number'
    ? mR
    : typeof n == 'string'
      ? td(n)
        ? Qs
        : tt.test(n)
          ? og
          : gR
      : Array.isArray(n)
        ? G0
        : typeof n == 'object'
          ? tt.test(n)
            ? og
            : pR
          : Qs;
}
function G0(n, a) {
  const l = [...n],
    s = l.length,
    o = n.map((f, d) => xd(f)(f, a[d]));
  return (f) => {
    for (let d = 0; d < s; d++) l[d] = o[d](f);
    return l;
  };
}
function pR(n, a) {
  const l = { ...n, ...a },
    s = {};
  for (const o in l)
    n[o] !== void 0 && a[o] !== void 0 && (s[o] = xd(n[o])(n[o], a[o]));
  return (o) => {
    for (const f in s) l[f] = s[f](o);
    return l;
  };
}
function yR(n, a) {
  var l;
  const s = [],
    o = { color: 0, var: 0, number: 0 };
  for (let f = 0; f < a.values.length; f++) {
    const d = a.types[f],
      m = n.indexes[d][o[d]],
      h = (l = n.values[m]) !== null && l !== void 0 ? l : 0;
    (s[f] = h), o[d]++;
  }
  return s;
}
const gR = (n, a) => {
  const l = ra.createTransformer(a),
    s = Wl(n),
    o = Wl(a);
  return s.indexes.var.length === o.indexes.var.length &&
    s.indexes.color.length === o.indexes.color.length &&
    s.indexes.number.length >= o.indexes.number.length
    ? (Sf.has(n) && !o.values.length) || (Sf.has(a) && !s.values.length)
      ? hR(n, a)
      : lr(G0(yR(s, o), o.values), l)
    : Qs(n, a);
};
function Y0(n, a, l) {
  return typeof n == 'number' && typeof a == 'number' && typeof l == 'number'
    ? Ce(n, a, l)
    : xd(n)(n, a);
}
const vR = 5;
function X0(n, a, l) {
  const s = Math.max(a - vR, 0);
  return g0(l - n(s), a - s);
}
const je = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  cg = 0.001;
function bR({
  duration: n = je.duration,
  bounce: a = je.bounce,
  velocity: l = je.velocity,
  mass: s = je.mass,
}) {
  let o,
    f,
    d = 1 - a;
  (d = wn(je.minDamping, je.maxDamping, d)),
    (n = wn(je.minDuration, je.maxDuration, An(n))),
    d < 1
      ? ((o = (p) => {
          const g = p * d,
            v = g * n,
            S = g - l,
            T = xf(p, d),
            A = Math.exp(-v);
          return cg - (S / T) * A;
        }),
        (f = (p) => {
          const v = p * d * n,
            S = v * l + l,
            T = Math.pow(d, 2) * Math.pow(p, 2) * n,
            A = Math.exp(-v),
            M = xf(Math.pow(p, 2), d);
          return ((-o(p) + cg > 0 ? -1 : 1) * ((S - T) * A)) / M;
        }))
      : ((o = (p) => {
          const g = Math.exp(-p * n),
            v = (p - l) * n + 1;
          return -0.001 + g * v;
        }),
        (f = (p) => {
          const g = Math.exp(-p * n),
            v = (l - p) * (n * n);
          return g * v;
        }));
  const m = 5 / n,
    h = xR(o, f, m);
  if (((n = En(n)), isNaN(h)))
    return { stiffness: je.stiffness, damping: je.damping, duration: n };
  {
    const p = Math.pow(h, 2) * s;
    return { stiffness: p, damping: d * 2 * Math.sqrt(s * p), duration: n };
  }
}
const SR = 12;
function xR(n, a, l) {
  let s = l;
  for (let o = 1; o < SR; o++) s = s - n(s) / a(s);
  return s;
}
function xf(n, a) {
  return n * Math.sqrt(1 - a * a);
}
const TR = ['duration', 'bounce'],
  ER = ['stiffness', 'damping', 'mass'];
function fg(n, a) {
  return a.some((l) => n[l] !== void 0);
}
function AR(n) {
  let a = {
    velocity: je.velocity,
    stiffness: je.stiffness,
    damping: je.damping,
    mass: je.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!fg(n, ER) && fg(n, TR))
    if (n.visualDuration) {
      const l = n.visualDuration,
        s = (2 * Math.PI) / (l * 1.2),
        o = s * s,
        f = 2 * wn(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(o);
      a = { ...a, mass: je.mass, stiffness: o, damping: f };
    } else {
      const l = bR(n);
      (a = { ...a, ...l, mass: je.mass }), (a.isResolvedFromDuration = !0);
    }
  return a;
}
function k0(n = je.visualDuration, a = je.bounce) {
  const l =
    typeof n != 'object'
      ? { visualDuration: n, keyframes: [0, 1], bounce: a }
      : n;
  let { restSpeed: s, restDelta: o } = l;
  const f = l.keyframes[0],
    d = l.keyframes[l.keyframes.length - 1],
    m = { done: !1, value: f },
    {
      stiffness: h,
      damping: p,
      mass: g,
      duration: v,
      velocity: S,
      isResolvedFromDuration: T,
    } = AR({ ...l, velocity: -An(l.velocity || 0) }),
    A = S || 0,
    M = p / (2 * Math.sqrt(h * g)),
    _ = d - f,
    O = An(Math.sqrt(h / g)),
    N = Math.abs(_) < 5;
  s || (s = N ? je.restSpeed.granular : je.restSpeed.default),
    o || (o = N ? je.restDelta.granular : je.restDelta.default);
  let U;
  if (M < 1) {
    const V = xf(O, M);
    U = (Y) => {
      const $ = Math.exp(-M * O * Y);
      return (
        d - $ * (((A + M * O * _) / V) * Math.sin(V * Y) + _ * Math.cos(V * Y))
      );
    };
  } else if (M === 1) U = (V) => d - Math.exp(-O * V) * (_ + (A + O * _) * V);
  else {
    const V = O * Math.sqrt(M * M - 1);
    U = (Y) => {
      const $ = Math.exp(-M * O * Y),
        K = Math.min(V * Y, 300);
      return (
        d - ($ * ((A + M * O * _) * Math.sinh(K) + V * _ * Math.cosh(K))) / V
      );
    };
  }
  const q = {
    calculatedDuration: (T && v) || null,
    next: (V) => {
      const Y = U(V);
      if (T) m.done = V >= v;
      else {
        let $ = 0;
        M < 1 && ($ = V === 0 ? En(A) : X0(U, V, Y));
        const K = Math.abs($) <= s,
          k = Math.abs(d - Y) <= o;
        m.done = K && k;
      }
      return (m.value = m.done ? d : Y), m;
    },
    toString: () => {
      const V = Math.min(o0(q), hf),
        Y = c0(($) => q.next(V * $).value, V, 30);
      return V + 'ms ' + Y;
    },
  };
  return q;
}
function dg({
  keyframes: n,
  velocity: a = 0,
  power: l = 0.8,
  timeConstant: s = 325,
  bounceDamping: o = 10,
  bounceStiffness: f = 500,
  modifyTarget: d,
  min: m,
  max: h,
  restDelta: p = 0.5,
  restSpeed: g,
}) {
  const v = n[0],
    S = { done: !1, value: v },
    T = (K) => (m !== void 0 && K < m) || (h !== void 0 && K > h),
    A = (K) =>
      m === void 0
        ? h
        : h === void 0 || Math.abs(m - K) < Math.abs(h - K)
          ? m
          : h;
  let M = l * a;
  const _ = v + M,
    O = d === void 0 ? _ : d(_);
  O !== _ && (M = O - v);
  const N = (K) => -M * Math.exp(-K / s),
    U = (K) => O + N(K),
    q = (K) => {
      const k = N(K),
        W = U(K);
      (S.done = Math.abs(k) <= p), (S.value = S.done ? O : W);
    };
  let V, Y;
  const $ = (K) => {
    T(S.value) &&
      ((V = K),
      (Y = k0({
        keyframes: [S.value, A(S.value)],
        velocity: X0(U, K, S.value),
        damping: o,
        stiffness: f,
        restDelta: p,
        restSpeed: g,
      })));
  };
  return (
    $(0),
    {
      calculatedDuration: null,
      next: (K) => {
        let k = !1;
        return (
          !Y && V === void 0 && ((k = !0), q(K), $(K)),
          V !== void 0 && K >= V ? Y.next(K - V) : (!k && q(K), S)
        );
      },
    }
  );
}
const RR = ir(0.42, 0, 1, 1),
  DR = ir(0, 0, 0.58, 1),
  K0 = ir(0.42, 0, 0.58, 1),
  wR = (n) => Array.isArray(n) && typeof n[0] != 'number',
  hg = {
    linear: gt,
    easeIn: RR,
    easeInOut: K0,
    easeOut: DR,
    circIn: yd,
    circInOut: D0,
    circOut: R0,
    backIn: pd,
    backInOut: E0,
    backOut: T0,
    anticipate: A0,
  },
  mg = (n) => {
    if (cd(n)) {
      ff(n.length === 4);
      const [a, l, s, o] = n;
      return ir(a, l, s, o);
    } else if (typeof n == 'string') return ff(hg[n] !== void 0), hg[n];
    return n;
  };
function OR(n, a, l) {
  const s = [],
    o = l || Y0,
    f = n.length - 1;
  for (let d = 0; d < f; d++) {
    let m = o(n[d], n[d + 1]);
    if (a) {
      const h = Array.isArray(a) ? a[d] || gt : a;
      m = lr(h, m);
    }
    s.push(m);
  }
  return s;
}
function CR(n, a, { clamp: l = !0, ease: s, mixer: o } = {}) {
  const f = n.length;
  if ((ff(f === a.length), f === 1)) return () => a[0];
  if (f === 2 && a[0] === a[1]) return () => a[1];
  const d = n[0] === n[1];
  n[0] > n[f - 1] && ((n = [...n].reverse()), (a = [...a].reverse()));
  const m = OR(a, s, o),
    h = m.length,
    p = (g) => {
      if (d && g < n[0]) return a[0];
      let v = 0;
      if (h > 1) for (; v < n.length - 2 && !(g < n[v + 1]); v++);
      const S = wi(n[v], n[v + 1], g);
      return m[v](S);
    };
  return l ? (g) => p(wn(n[0], n[f - 1], g)) : p;
}
function MR(n, a) {
  const l = n[n.length - 1];
  for (let s = 1; s <= a; s++) {
    const o = wi(0, a, s);
    n.push(Ce(l, 1, o));
  }
}
function _R(n) {
  const a = [0];
  return MR(a, n.length - 1), a;
}
function zR(n, a) {
  return n.map((l) => l * a);
}
function NR(n, a) {
  return n.map(() => a || K0).splice(0, n.length - 1);
}
function Zs({
  duration: n = 300,
  keyframes: a,
  times: l,
  ease: s = 'easeInOut',
}) {
  const o = wR(s) ? s.map(mg) : mg(s),
    f = { done: !1, value: a[0] },
    d = zR(l && l.length === a.length ? l : _R(a), n),
    m = CR(d, a, { ease: Array.isArray(o) ? o : NR(a, o) });
  return {
    calculatedDuration: n,
    next: (h) => ((f.value = m(h)), (f.done = h >= n), f),
  };
}
const jR = (n) => {
    const a = ({ timestamp: l }) => n(l);
    return {
      start: () => Ae.update(a, !0),
      stop: () => la(a),
      now: () => (Je.isProcessing ? Je.timestamp : Wt.now()),
    };
  },
  VR = { decay: dg, inertia: dg, tween: Zs, keyframes: Zs, spring: k0 },
  UR = (n) => n / 100;
class Td extends q0 {
  constructor(a) {
    super(a),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = 'running'),
      (this.startTime = null),
      (this.state = 'idle'),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')
        )
          return;
        this.teardown();
        const { onStop: h } = this.options;
        h && h();
      });
    const { name: l, motionValue: s, element: o, keyframes: f } = this.options,
      d = (o == null ? void 0 : o.KeyframeResolver) || Sd,
      m = (h, p) => this.onKeyframesResolved(h, p);
    (this.resolver = new d(f, m, l, s, o)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        );
  }
  initPlayback(a) {
    const {
        type: l = 'keyframes',
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: f,
        velocity: d = 0,
      } = this.options,
      m = od(l) ? l : VR[l] || Zs;
    let h, p;
    m !== Zs &&
      typeof a[0] != 'number' &&
      ((h = lr(UR, Y0(a[0], a[1]))), (a = [0, 100]));
    const g = m({ ...this.options, keyframes: a });
    f === 'mirror' &&
      (p = m({ ...this.options, keyframes: [...a].reverse(), velocity: -d })),
      g.calculatedDuration === null && (g.calculatedDuration = o0(g));
    const { calculatedDuration: v } = g,
      S = v + o,
      T = S * (s + 1) - o;
    return {
      generator: g,
      mirroredGenerator: p,
      mapPercentToKeyframes: h,
      calculatedDuration: v,
      resolvedDuration: S,
      totalDuration: T,
    };
  }
  onPostResolved() {
    const { autoplay: a = !0 } = this.options;
    this.play(),
      this.pendingPlayState === 'paused' || !a
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(a, l = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: K } = this.options;
      return { done: !0, value: K[K.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: f,
      mirroredGenerator: d,
      mapPercentToKeyframes: m,
      keyframes: h,
      calculatedDuration: p,
      totalDuration: g,
      resolvedDuration: v,
    } = s;
    if (this.startTime === null) return f.next(0);
    const {
      delay: S,
      repeat: T,
      repeatType: A,
      repeatDelay: M,
      onUpdate: _,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, a))
      : this.speed < 0 &&
        (this.startTime = Math.min(a - g / this.speed, this.startTime)),
      l
        ? (this.currentTime = a)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(a - this.startTime) * this.speed);
    const O = this.currentTime - S * (this.speed >= 0 ? 1 : -1),
      N = this.speed >= 0 ? O < 0 : O > g;
    (this.currentTime = Math.max(O, 0)),
      this.state === 'finished' &&
        this.holdTime === null &&
        (this.currentTime = g);
    let U = this.currentTime,
      q = f;
    if (T) {
      const K = Math.min(this.currentTime, g) / v;
      let k = Math.floor(K),
        W = K % 1;
      !W && K >= 1 && (W = 1),
        W === 1 && k--,
        (k = Math.min(k, T + 1)),
        !!(k % 2) &&
          (A === 'reverse'
            ? ((W = 1 - W), M && (W -= M / v))
            : A === 'mirror' && (q = d)),
        (U = wn(0, 1, W) * v);
    }
    const V = N ? { done: !1, value: h[0] } : q.next(U);
    m && (V.value = m(V.value));
    let { done: Y } = V;
    !N &&
      p !== null &&
      (Y = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
    const $ =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && Y));
    return (
      $ && o !== void 0 && (V.value = mu(h, this.options, o)),
      _ && _(V.value),
      $ && this.finish(),
      V
    );
  }
  get duration() {
    const { resolved: a } = this;
    return a ? An(a.calculatedDuration) : 0;
  }
  get time() {
    return An(this.currentTime);
  }
  set time(a) {
    (a = En(a)),
      (this.currentTime = a),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = a)
        : this.driver && (this.startTime = this.driver.now() - a / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(a) {
    const l = this.playbackSpeed !== a;
    (this.playbackSpeed = a), l && (this.time = An(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = 'running';
      return;
    }
    if (this.isStopped) return;
    const { driver: a = jR, onPlay: l, startTime: s } = this.options;
    this.driver || (this.driver = a((f) => this.tick(f))), l && l();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
        ? this.state === 'finished' && (this.startTime = o)
        : (this.startTime = s ?? this.calcStartTime()),
      this.state === 'finished' && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start();
  }
  pause() {
    var a;
    if (!this._resolved) {
      this.pendingPlayState = 'paused';
      return;
    }
    (this.state = 'paused'),
      (this.holdTime = (a = this.currentTime) !== null && a !== void 0 ? a : 0);
  }
  complete() {
    this.state !== 'running' && this.play(),
      (this.pendingPlayState = this.state = 'finished'),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = 'finished');
    const { onComplete: a } = this.options;
    a && a();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = 'idle'),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(a) {
    return (this.startTime = 0), this.tick(a, !0);
  }
}
const LR = new Set(['opacity', 'clipPath', 'filter', 'transform']);
function BR(
  n,
  a,
  l,
  {
    delay: s = 0,
    duration: o = 300,
    repeat: f = 0,
    repeatType: d = 'loop',
    ease: m = 'easeInOut',
    times: h,
  } = {},
) {
  const p = { [a]: l };
  h && (p.offset = h);
  const g = d0(m, o);
  return (
    Array.isArray(g) && (p.easing = g),
    n.animate(p, {
      delay: s,
      duration: o,
      easing: Array.isArray(g) ? 'linear' : g,
      fill: 'both',
      iterations: f + 1,
      direction: d === 'reverse' ? 'alternate' : 'normal',
    })
  );
}
const HR = Qf(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  Fs = 10,
  PR = 2e4;
function qR(n) {
  return od(n.type) || n.type === 'spring' || !f0(n.ease);
}
function GR(n, a) {
  const l = new Td({
    ...a,
    keyframes: n,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let s = { done: !1, value: n[0] };
  const o = [];
  let f = 0;
  for (; !s.done && f < PR; ) (s = l.sample(f)), o.push(s.value), (f += Fs);
  return { times: void 0, keyframes: o, duration: f - Fs, ease: 'linear' };
}
const Q0 = { anticipate: A0, backInOut: E0, circInOut: D0 };
function YR(n) {
  return n in Q0;
}
class pg extends q0 {
  constructor(a) {
    super(a);
    const { name: l, motionValue: s, element: o, keyframes: f } = this.options;
    (this.resolver = new P0(
      f,
      (d, m) => this.onKeyframesResolved(d, m),
      l,
      s,
      o,
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(a, l) {
    let {
      duration: s = 300,
      times: o,
      ease: f,
      type: d,
      motionValue: m,
      name: h,
      startTime: p,
    } = this.options;
    if (!m.owner || !m.owner.current) return !1;
    if (
      (typeof f == 'string' && Ks() && YR(f) && (f = Q0[f]), qR(this.options))
    ) {
      const {
          onComplete: v,
          onUpdate: S,
          motionValue: T,
          element: A,
          ...M
        } = this.options,
        _ = GR(a, M);
      (a = _.keyframes),
        a.length === 1 && (a[1] = a[0]),
        (s = _.duration),
        (o = _.times),
        (f = _.ease),
        (d = 'keyframes');
    }
    const g = BR(m.owner.current, h, a, {
      ...this.options,
      duration: s,
      times: o,
      ease: f,
    });
    return (
      (g.startTime = p ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Jy(g, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (g.onfinish = () => {
            const { onComplete: v } = this.options;
            m.set(mu(a, this.options, l)),
              v && v(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: g, duration: s, times: o, type: d, ease: f, keyframes: a }
    );
  }
  get duration() {
    const { resolved: a } = this;
    if (!a) return 0;
    const { duration: l } = a;
    return An(l);
  }
  get time() {
    const { resolved: a } = this;
    if (!a) return 0;
    const { animation: l } = a;
    return An(l.currentTime || 0);
  }
  set time(a) {
    const { resolved: l } = this;
    if (!l) return;
    const { animation: s } = l;
    s.currentTime = En(a);
  }
  get speed() {
    const { resolved: a } = this;
    if (!a) return 1;
    const { animation: l } = a;
    return l.playbackRate;
  }
  set speed(a) {
    const { resolved: l } = this;
    if (!l) return;
    const { animation: s } = l;
    s.playbackRate = a;
  }
  get state() {
    const { resolved: a } = this;
    if (!a) return 'idle';
    const { animation: l } = a;
    return l.playState;
  }
  get startTime() {
    const { resolved: a } = this;
    if (!a) return null;
    const { animation: l } = a;
    return l.startTime;
  }
  attachTimeline(a) {
    if (!this._resolved) this.pendingTimeline = a;
    else {
      const { resolved: l } = this;
      if (!l) return gt;
      const { animation: s } = l;
      Jy(s, a);
    }
    return gt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: a } = this;
    if (!a) return;
    const { animation: l } = a;
    l.playState === 'finished' && this.updateFinishedPromise(), l.play();
  }
  pause() {
    const { resolved: a } = this;
    if (!a) return;
    const { animation: l } = a;
    l.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle'))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: a } = this;
    if (!a) return;
    const {
      animation: l,
      keyframes: s,
      duration: o,
      type: f,
      ease: d,
      times: m,
    } = a;
    if (l.playState === 'idle' || l.playState === 'finished') return;
    if (this.time) {
      const {
          motionValue: p,
          onUpdate: g,
          onComplete: v,
          element: S,
          ...T
        } = this.options,
        A = new Td({
          ...T,
          keyframes: s,
          duration: o,
          type: f,
          ease: d,
          times: m,
          isGenerator: !0,
        }),
        M = En(this.time);
      p.setWithVelocity(A.sample(M - Fs).value, A.sample(M).value, Fs);
    }
    const { onStop: h } = this.options;
    h && h(), this.cancel();
  }
  complete() {
    const { resolved: a } = this;
    a && a.animation.finish();
  }
  cancel() {
    const { resolved: a } = this;
    a && a.animation.cancel();
  }
  static supports(a) {
    const {
      motionValue: l,
      name: s,
      repeatDelay: o,
      repeatType: f,
      damping: d,
      type: m,
    } = a;
    if (!l || !l.owner || !(l.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: h, transformTemplate: p } = l.owner.getProps();
    return (
      HR() &&
      s &&
      LR.has(s) &&
      !h &&
      !p &&
      !o &&
      f !== 'mirror' &&
      d !== 0 &&
      m !== 'inertia'
    );
  }
}
const XR = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  kR = (n) => ({
    type: 'spring',
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  KR = { type: 'keyframes', duration: 0.8 },
  QR = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ZR = (n, { keyframes: a }) =>
    a.length > 2
      ? KR
      : Ba.has(n)
        ? n.startsWith('scale')
          ? kR(a[1])
          : XR
        : QR;
function FR({
  when: n,
  delay: a,
  delayChildren: l,
  staggerChildren: s,
  staggerDirection: o,
  repeat: f,
  repeatType: d,
  repeatDelay: m,
  from: h,
  elapsed: p,
  ...g
}) {
  return !!Object.keys(g).length;
}
const Ed =
  (n, a, l, s = {}, o, f) =>
  (d) => {
    const m = ud(s, n) || {},
      h = m.delay || s.delay || 0;
    let { elapsed: p = 0 } = s;
    p = p - En(h);
    let g = {
      keyframes: Array.isArray(l) ? l : [null, l],
      ease: 'easeOut',
      velocity: a.getVelocity(),
      ...m,
      delay: -p,
      onUpdate: (S) => {
        a.set(S), m.onUpdate && m.onUpdate(S);
      },
      onComplete: () => {
        d(), m.onComplete && m.onComplete();
      },
      name: n,
      motionValue: a,
      element: f ? void 0 : o,
    };
    FR(m) || (g = { ...g, ...ZR(n, g) }),
      g.duration && (g.duration = En(g.duration)),
      g.repeatDelay && (g.repeatDelay = En(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from);
    let v = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        ((g.duration = 0), g.delay === 0 && (v = !0)),
      v && !f && a.get() !== void 0)
    ) {
      const S = mu(g.keyframes, m);
      if (S !== void 0)
        return (
          Ae.update(() => {
            g.onUpdate(S), g.onComplete();
          }),
          new pA([])
        );
    }
    return !f && pg.supports(g) ? new pg(g) : new Td(g);
  };
function $R({ protectedKeys: n, needsAnimating: a }, l) {
  const s = n.hasOwnProperty(l) && a[l] !== !0;
  return (a[l] = !1), s;
}
function Z0(n, a, { delay: l = 0, transitionOverride: s, type: o } = {}) {
  var f;
  let { transition: d = n.getDefaultTransition(), transitionEnd: m, ...h } = a;
  s && (d = s);
  const p = [],
    g = o && n.animationState && n.animationState.getState()[o];
  for (const v in h) {
    const S = n.getValue(
        v,
        (f = n.latestValues[v]) !== null && f !== void 0 ? f : null,
      ),
      T = h[v];
    if (T === void 0 || (g && $R(g, v))) continue;
    const A = { delay: l, ...ud(d || {}, v) };
    let M = !1;
    if (window.MotionHandoffAnimation) {
      const O = v0(n);
      if (O) {
        const N = window.MotionHandoffAnimation(O, v, Ae);
        N !== null && ((A.startTime = N), (M = !0));
      }
    }
    pf(n, v),
      S.start(
        Ed(v, S, T, n.shouldReduceMotion && y0.has(v) ? { type: !1 } : A, n, M),
      );
    const _ = S.animation;
    _ && p.push(_);
  }
  return (
    m &&
      Promise.all(p).then(() => {
        Ae.update(() => {
          m && CA(n, m);
        });
      }),
    p
  );
}
function Tf(n, a, l = {}) {
  var s;
  const o = hu(
    n,
    a,
    l.type === 'exit'
      ? (s = n.presenceContext) === null || s === void 0
        ? void 0
        : s.custom
      : void 0,
  );
  let { transition: f = n.getDefaultTransition() || {} } = o || {};
  l.transitionOverride && (f = l.transitionOverride);
  const d = o ? () => Promise.all(Z0(n, o, l)) : () => Promise.resolve(),
    m =
      n.variantChildren && n.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: v,
              staggerDirection: S,
            } = f;
            return JR(n, a, g + p, v, S, l);
          }
        : () => Promise.resolve(),
    { when: h } = f;
  if (h) {
    const [p, g] = h === 'beforeChildren' ? [d, m] : [m, d];
    return p().then(() => g());
  } else return Promise.all([d(), m(l.delay)]);
}
function JR(n, a, l = 0, s = 0, o = 1, f) {
  const d = [],
    m = (n.variantChildren.size - 1) * s,
    h = o === 1 ? (p = 0) => p * s : (p = 0) => m - p * s;
  return (
    Array.from(n.variantChildren)
      .sort(WR)
      .forEach((p, g) => {
        p.notify('AnimationStart', a),
          d.push(
            Tf(p, a, { ...f, delay: l + h(g) }).then(() =>
              p.notify('AnimationComplete', a),
            ),
          );
      }),
    Promise.all(d)
  );
}
function WR(n, a) {
  return n.sortNodePosition(a);
}
function IR(n, a, l = {}) {
  n.notify('AnimationStart', a);
  let s;
  if (Array.isArray(a)) {
    const o = a.map((f) => Tf(n, f, l));
    s = Promise.all(o);
  } else if (typeof a == 'string') s = Tf(n, a, l);
  else {
    const o = typeof a == 'function' ? hu(n, a, l.custom) : a;
    s = Promise.all(Z0(n, o, l));
  }
  return s.then(() => {
    n.notify('AnimationComplete', a);
  });
}
const eD = Ff.length;
function F0(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const l = n.parent ? F0(n.parent) || {} : {};
    return n.props.initial !== void 0 && (l.initial = n.props.initial), l;
  }
  const a = {};
  for (let l = 0; l < eD; l++) {
    const s = Ff[l],
      o = n.props[s];
    (Zl(o) || o === !1) && (a[s] = o);
  }
  return a;
}
const tD = [...Zf].reverse(),
  nD = Zf.length;
function aD(n) {
  return (a) =>
    Promise.all(a.map(({ animation: l, options: s }) => IR(n, l, s)));
}
function iD(n) {
  let a = aD(n),
    l = yg(),
    s = !0;
  const o = (h) => (p, g) => {
    var v;
    const S = hu(
      n,
      g,
      h === 'exit'
        ? (v = n.presenceContext) === null || v === void 0
          ? void 0
          : v.custom
        : void 0,
    );
    if (S) {
      const { transition: T, transitionEnd: A, ...M } = S;
      p = { ...p, ...M, ...A };
    }
    return p;
  };
  function f(h) {
    a = h(n);
  }
  function d(h) {
    const { props: p } = n,
      g = F0(n.parent) || {},
      v = [],
      S = new Set();
    let T = {},
      A = 1 / 0;
    for (let _ = 0; _ < nD; _++) {
      const O = tD[_],
        N = l[O],
        U = p[O] !== void 0 ? p[O] : g[O],
        q = Zl(U),
        V = O === h ? N.isActive : null;
      V === !1 && (A = _);
      let Y = U === g[O] && U !== p[O] && q;
      if (
        (Y && s && n.manuallyAnimateOnMount && (Y = !1),
        (N.protectedKeys = { ...T }),
        (!N.isActive && V === null) ||
          (!U && !N.prevProp) ||
          fu(U) ||
          typeof U == 'boolean')
      )
        continue;
      const $ = lD(N.prevProp, U);
      let K = $ || (O === h && N.isActive && !Y && q) || (_ > A && q),
        k = !1;
      const W = Array.isArray(U) ? U : [U];
      let Re = W.reduce(o(O), {});
      V === !1 && (Re = {});
      const { prevResolvedValues: xt = {} } = N,
        Tt = { ...xt, ...Re },
        Et = (I) => {
          (K = !0),
            S.has(I) && ((k = !0), S.delete(I)),
            (N.needsAnimating[I] = !0);
          const ee = n.getValue(I);
          ee && (ee.liveStyle = !1);
        };
      for (const I in Tt) {
        const ee = Re[I],
          ge = xt[I];
        if (T.hasOwnProperty(I)) continue;
        let R = !1;
        df(ee) && df(ge) ? (R = !u0(ee, ge)) : (R = ee !== ge),
          R
            ? ee != null
              ? Et(I)
              : S.add(I)
            : ee !== void 0 && S.has(I)
              ? Et(I)
              : (N.protectedKeys[I] = !0);
      }
      (N.prevProp = U),
        (N.prevResolvedValues = Re),
        N.isActive && (T = { ...T, ...Re }),
        s && n.blockInitialAnimation && (K = !1),
        K &&
          (!(Y && $) || k) &&
          v.push(...W.map((I) => ({ animation: I, options: { type: O } })));
    }
    if (S.size) {
      const _ = {};
      S.forEach((O) => {
        const N = n.getBaseTarget(O),
          U = n.getValue(O);
        U && (U.liveStyle = !0), (_[O] = N ?? null);
      }),
        v.push({ animation: _ });
    }
    let M = !!v.length;
    return (
      s &&
        (p.initial === !1 || p.initial === p.animate) &&
        !n.manuallyAnimateOnMount &&
        (M = !1),
      (s = !1),
      M ? a(v) : Promise.resolve()
    );
  }
  function m(h, p) {
    var g;
    if (l[h].isActive === p) return Promise.resolve();
    (g = n.variantChildren) === null ||
      g === void 0 ||
      g.forEach((S) => {
        var T;
        return (T = S.animationState) === null || T === void 0
          ? void 0
          : T.setActive(h, p);
      }),
      (l[h].isActive = p);
    const v = d(h);
    for (const S in l) l[S].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: d,
    setActive: m,
    setAnimateFunction: f,
    getState: () => l,
    reset: () => {
      (l = yg()), (s = !0);
    },
  };
}
function lD(n, a) {
  return typeof a == 'string' ? a !== n : Array.isArray(a) ? !u0(a, n) : !1;
}
function Ma(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function yg() {
  return {
    animate: Ma(!0),
    whileInView: Ma(),
    whileHover: Ma(),
    whileTap: Ma(),
    whileDrag: Ma(),
    whileFocus: Ma(),
    exit: Ma(),
  };
}
class sa {
  constructor(a) {
    (this.isMounted = !1), (this.node = a);
  }
  update() {}
}
class rD extends sa {
  constructor(a) {
    super(a), a.animationState || (a.animationState = iD(a));
  }
  updateAnimationControlsSubscription() {
    const { animate: a } = this.node.getProps();
    fu(a) && (this.unmountControls = a.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: a } = this.node.getProps(),
      { animate: l } = this.node.prevProps || {};
    a !== l && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var a;
    this.node.animationState.reset(),
      (a = this.unmountControls) === null || a === void 0 || a.call(this);
  }
}
let sD = 0;
class uD extends sa {
  constructor() {
    super(...arguments), (this.id = sD++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: a, onExitComplete: l } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || a === s) return;
    const o = this.node.animationState.setActive('exit', !a);
    l && !a && o.then(() => l(this.id));
  }
  mount() {
    const { register: a } = this.node.presenceContext || {};
    a && (this.unmount = a(this.id));
  }
  unmount() {}
}
const oD = { animation: { Feature: rD }, exit: { Feature: uD } };
function Il(n, a, l, s = { passive: !0 }) {
  return n.addEventListener(a, l, s), () => n.removeEventListener(a, l);
}
function rr(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const cD = (n) => (a) => fd(a) && n(a, rr(a));
function Gl(n, a, l, s) {
  return Il(n, a, cD(l), s);
}
const gg = (n, a) => Math.abs(n - a);
function fD(n, a) {
  const l = gg(n.x, a.x),
    s = gg(n.y, a.y);
  return Math.sqrt(l ** 2 + s ** 2);
}
class $0 {
  constructor(
    a,
    l,
    { transformPagePoint: s, contextWindow: o, dragSnapToOrigin: f = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const v = Kc(this.lastMoveEventInfo, this.history),
          S = this.startEvent !== null,
          T = fD(v.offset, { x: 0, y: 0 }) >= 3;
        if (!S && !T) return;
        const { point: A } = v,
          { timestamp: M } = Je;
        this.history.push({ ...A, timestamp: M });
        const { onStart: _, onMove: O } = this.handlers;
        S ||
          (_ && _(this.lastMoveEvent, v),
          (this.startEvent = this.lastMoveEvent)),
          O && O(this.lastMoveEvent, v);
      }),
      (this.handlePointerMove = (v, S) => {
        (this.lastMoveEvent = v),
          (this.lastMoveEventInfo = kc(S, this.transformPagePoint)),
          Ae.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (v, S) => {
        this.end();
        const { onEnd: T, onSessionEnd: A, resumeAnimation: M } = this.handlers;
        if (
          (this.dragSnapToOrigin && M && M(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const _ = Kc(
          v.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : kc(S, this.transformPagePoint),
          this.history,
        );
        this.startEvent && T && T(v, _), A && A(v, _);
      }),
      !fd(a))
    )
      return;
    (this.dragSnapToOrigin = f),
      (this.handlers = l),
      (this.transformPagePoint = s),
      (this.contextWindow = o || window);
    const d = rr(a),
      m = kc(d, this.transformPagePoint),
      { point: h } = m,
      { timestamp: p } = Je;
    this.history = [{ ...h, timestamp: p }];
    const { onSessionStart: g } = l;
    g && g(a, Kc(m, this.history)),
      (this.removeListeners = lr(
        Gl(this.contextWindow, 'pointermove', this.handlePointerMove),
        Gl(this.contextWindow, 'pointerup', this.handlePointerUp),
        Gl(this.contextWindow, 'pointercancel', this.handlePointerUp),
      ));
  }
  updateHandlers(a) {
    this.handlers = a;
  }
  end() {
    this.removeListeners && this.removeListeners(), la(this.updatePoint);
  }
}
function kc(n, a) {
  return a ? { point: a(n.point) } : n;
}
function vg(n, a) {
  return { x: n.x - a.x, y: n.y - a.y };
}
function Kc({ point: n }, a) {
  return {
    point: n,
    delta: vg(n, J0(a)),
    offset: vg(n, dD(a)),
    velocity: hD(a, 0.1),
  };
}
function dD(n) {
  return n[0];
}
function J0(n) {
  return n[n.length - 1];
}
function hD(n, a) {
  if (n.length < 2) return { x: 0, y: 0 };
  let l = n.length - 1,
    s = null;
  const o = J0(n);
  for (; l >= 0 && ((s = n[l]), !(o.timestamp - s.timestamp > En(a))); ) l--;
  if (!s) return { x: 0, y: 0 };
  const f = An(o.timestamp - s.timestamp);
  if (f === 0) return { x: 0, y: 0 };
  const d = { x: (o.x - s.x) / f, y: (o.y - s.y) / f };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
const W0 = 1e-4,
  mD = 1 - W0,
  pD = 1 + W0,
  I0 = 0.01,
  yD = 0 - I0,
  gD = 0 + I0;
function St(n) {
  return n.max - n.min;
}
function vD(n, a, l) {
  return Math.abs(n - a) <= l;
}
function bg(n, a, l, s = 0.5) {
  (n.origin = s),
    (n.originPoint = Ce(a.min, a.max, n.origin)),
    (n.scale = St(l) / St(a)),
    (n.translate = Ce(l.min, l.max, n.origin) - n.originPoint),
    ((n.scale >= mD && n.scale <= pD) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= yD && n.translate <= gD) || isNaN(n.translate)) &&
      (n.translate = 0);
}
function Yl(n, a, l, s) {
  bg(n.x, a.x, l.x, s ? s.originX : void 0),
    bg(n.y, a.y, l.y, s ? s.originY : void 0);
}
function Sg(n, a, l) {
  (n.min = l.min + a.min), (n.max = n.min + St(a));
}
function bD(n, a, l) {
  Sg(n.x, a.x, l.x), Sg(n.y, a.y, l.y);
}
function xg(n, a, l) {
  (n.min = a.min - l.min), (n.max = n.min + St(a));
}
function Xl(n, a, l) {
  xg(n.x, a.x, l.x), xg(n.y, a.y, l.y);
}
function SD(n, { min: a, max: l }, s) {
  return (
    a !== void 0 && n < a
      ? (n = s ? Ce(a, n, s.min) : Math.max(n, a))
      : l !== void 0 && n > l && (n = s ? Ce(l, n, s.max) : Math.min(n, l)),
    n
  );
}
function Tg(n, a, l) {
  return {
    min: a !== void 0 ? n.min + a : void 0,
    max: l !== void 0 ? n.max + l - (n.max - n.min) : void 0,
  };
}
function xD(n, { top: a, left: l, bottom: s, right: o }) {
  return { x: Tg(n.x, l, o), y: Tg(n.y, a, s) };
}
function Eg(n, a) {
  let l = a.min - n.min,
    s = a.max - n.max;
  return a.max - a.min < n.max - n.min && ([l, s] = [s, l]), { min: l, max: s };
}
function TD(n, a) {
  return { x: Eg(n.x, a.x), y: Eg(n.y, a.y) };
}
function ED(n, a) {
  let l = 0.5;
  const s = St(n),
    o = St(a);
  return (
    o > s
      ? (l = wi(a.min, a.max - s, n.min))
      : s > o && (l = wi(n.min, n.max - o, a.min)),
    wn(0, 1, l)
  );
}
function AD(n, a) {
  const l = {};
  return (
    a.min !== void 0 && (l.min = a.min - n.min),
    a.max !== void 0 && (l.max = a.max - n.min),
    l
  );
}
const Ef = 0.35;
function RD(n = Ef) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Ef),
    { x: Ag(n, 'left', 'right'), y: Ag(n, 'top', 'bottom') }
  );
}
function Ag(n, a, l) {
  return { min: Rg(n, a), max: Rg(n, l) };
}
function Rg(n, a) {
  return typeof n == 'number' ? n : n[a] || 0;
}
const Dg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ei = () => ({ x: Dg(), y: Dg() }),
  wg = () => ({ min: 0, max: 0 }),
  Ue = () => ({ x: wg(), y: wg() });
function Lt(n) {
  return [n('x'), n('y')];
}
function e1({ top: n, left: a, right: l, bottom: s }) {
  return { x: { min: a, max: l }, y: { min: n, max: s } };
}
function DD({ x: n, y: a }) {
  return { top: a.min, right: n.max, bottom: a.max, left: n.min };
}
function wD(n, a) {
  if (!a) return n;
  const l = a({ x: n.left, y: n.top }),
    s = a({ x: n.right, y: n.bottom });
  return { top: l.y, left: l.x, bottom: s.y, right: s.x };
}
function Qc(n) {
  return n === void 0 || n === 1;
}
function Af({ scale: n, scaleX: a, scaleY: l }) {
  return !Qc(n) || !Qc(a) || !Qc(l);
}
function za(n) {
  return (
    Af(n) ||
    t1(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function t1(n) {
  return Og(n.x) || Og(n.y);
}
function Og(n) {
  return n && n !== '0%';
}
function $s(n, a, l) {
  const s = n - l,
    o = a * s;
  return l + o;
}
function Cg(n, a, l, s, o) {
  return o !== void 0 && (n = $s(n, o, s)), $s(n, l, s) + a;
}
function Rf(n, a = 0, l = 1, s, o) {
  (n.min = Cg(n.min, a, l, s, o)), (n.max = Cg(n.max, a, l, s, o));
}
function n1(n, { x: a, y: l }) {
  Rf(n.x, a.translate, a.scale, a.originPoint),
    Rf(n.y, l.translate, l.scale, l.originPoint);
}
const Mg = 0.999999999999,
  _g = 1.0000000000001;
function OD(n, a, l, s = !1) {
  const o = l.length;
  if (!o) return;
  a.x = a.y = 1;
  let f, d;
  for (let m = 0; m < o; m++) {
    (f = l[m]), (d = f.projectionDelta);
    const { visualElement: h } = f.options;
    (h && h.props.style && h.props.style.display === 'contents') ||
      (s &&
        f.options.layoutScroll &&
        f.scroll &&
        f !== f.root &&
        Ri(n, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
      d && ((a.x *= d.x.scale), (a.y *= d.y.scale), n1(n, d)),
      s && za(f.latestValues) && Ri(n, f.latestValues));
  }
  a.x < _g && a.x > Mg && (a.x = 1), a.y < _g && a.y > Mg && (a.y = 1);
}
function Ai(n, a) {
  (n.min = n.min + a), (n.max = n.max + a);
}
function zg(n, a, l, s, o = 0.5) {
  const f = Ce(n.min, n.max, o);
  Rf(n, a, l, f, s);
}
function Ri(n, a) {
  zg(n.x, a.x, a.scaleX, a.scale, a.originX),
    zg(n.y, a.y, a.scaleY, a.scale, a.originY);
}
function a1(n, a) {
  return e1(wD(n.getBoundingClientRect(), a));
}
function CD(n, a, l) {
  const s = a1(n, l),
    { scroll: o } = a;
  return o && (Ai(s.x, o.offset.x), Ai(s.y, o.offset.y)), s;
}
const i1 = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  MD = new WeakMap();
class _D {
  constructor(a) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ue()),
      (this.visualElement = a);
  }
  start(a, { snapToCursor: l = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const o = (g) => {
        const { dragSnapToOrigin: v } = this.getProps();
        v ? this.pauseAnimation() : this.stopAnimation(),
          l && this.snapToCursor(rr(g).point);
      },
      f = (g, v) => {
        const { drag: S, dragPropagation: T, onDragStart: A } = this.getProps();
        if (
          S &&
          !T &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = AA(S)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Lt((_) => {
            let O = this.getAxisMotionValue(_).get() || 0;
            if (Jt.test(O)) {
              const { projection: N } = this.visualElement;
              if (N && N.layout) {
                const U = N.layout.layoutBox[_];
                U && (O = St(U) * (parseFloat(O) / 100));
              }
            }
            this.originPoint[_] = O;
          }),
          A && Ae.postRender(() => A(g, v)),
          pf(this.visualElement, 'transform');
        const { animationState: M } = this.visualElement;
        M && M.setActive('whileDrag', !0);
      },
      d = (g, v) => {
        const {
          dragPropagation: S,
          dragDirectionLock: T,
          onDirectionLock: A,
          onDrag: M,
        } = this.getProps();
        if (!S && !this.openDragLock) return;
        const { offset: _ } = v;
        if (T && this.currentDirection === null) {
          (this.currentDirection = zD(_)),
            this.currentDirection !== null && A && A(this.currentDirection);
          return;
        }
        this.updateAxis('x', v.point, _),
          this.updateAxis('y', v.point, _),
          this.visualElement.render(),
          M && M(g, v);
      },
      m = (g, v) => this.stop(g, v),
      h = () =>
        Lt((g) => {
          var v;
          return (
            this.getAnimationState(g) === 'paused' &&
            ((v = this.getAxisMotionValue(g).animation) === null || v === void 0
              ? void 0
              : v.play())
          );
        }),
      { dragSnapToOrigin: p } = this.getProps();
    this.panSession = new $0(
      a,
      {
        onSessionStart: o,
        onStart: f,
        onMove: d,
        onSessionEnd: m,
        resumeAnimation: h,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: p,
        contextWindow: i1(this.visualElement),
      },
    );
  }
  stop(a, l) {
    const s = this.isDragging;
    if ((this.cancel(), !s)) return;
    const { velocity: o } = l;
    this.startAnimation(o);
    const { onDragEnd: f } = this.getProps();
    f && Ae.postRender(() => f(a, l));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: a, animationState: l } = this.visualElement;
    a && (a.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      l && l.setActive('whileDrag', !1);
  }
  updateAxis(a, l, s) {
    const { drag: o } = this.getProps();
    if (!s || !Cs(a, o, this.currentDirection)) return;
    const f = this.getAxisMotionValue(a);
    let d = this.originPoint[a] + s[a];
    this.constraints &&
      this.constraints[a] &&
      (d = SD(d, this.constraints[a], this.elastic[a])),
      f.set(d);
  }
  resolveConstraints() {
    var a;
    const { dragConstraints: l, dragElastic: s } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (a = this.visualElement.projection) === null || a === void 0
            ? void 0
            : a.layout,
      f = this.constraints;
    l && xi(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && o
        ? (this.constraints = xD(o.layoutBox, l))
        : (this.constraints = !1),
      (this.elastic = RD(s)),
      f !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Lt((d) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(d) &&
            (this.constraints[d] = AD(o.layoutBox[d], this.constraints[d]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: a, onMeasureDragConstraints: l } = this.getProps();
    if (!a || !xi(a)) return !1;
    const s = a.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const f = CD(s, o.root, this.visualElement.getTransformPagePoint());
    let d = TD(o.layout.layoutBox, f);
    if (l) {
      const m = l(DD(d));
      (this.hasMutatedConstraints = !!m), m && (d = e1(m));
    }
    return d;
  }
  startAnimation(a) {
    const {
        drag: l,
        dragMomentum: s,
        dragElastic: o,
        dragTransition: f,
        dragSnapToOrigin: d,
        onDragTransitionEnd: m,
      } = this.getProps(),
      h = this.constraints || {},
      p = Lt((g) => {
        if (!Cs(g, l, this.currentDirection)) return;
        let v = h[g] || {};
        d && (v = { min: 0, max: 0 });
        const S = o ? 200 : 1e6,
          T = o ? 40 : 1e7,
          A = {
            type: 'inertia',
            velocity: s ? a[g] : 0,
            bounceStiffness: S,
            bounceDamping: T,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...f,
            ...v,
          };
        return this.startAxisValueAnimation(g, A);
      });
    return Promise.all(p).then(m);
  }
  startAxisValueAnimation(a, l) {
    const s = this.getAxisMotionValue(a);
    return (
      pf(this.visualElement, a), s.start(Ed(a, s, 0, l, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Lt((a) => this.getAxisMotionValue(a).stop());
  }
  pauseAnimation() {
    Lt((a) => {
      var l;
      return (l = this.getAxisMotionValue(a).animation) === null || l === void 0
        ? void 0
        : l.pause();
    });
  }
  getAnimationState(a) {
    var l;
    return (l = this.getAxisMotionValue(a).animation) === null || l === void 0
      ? void 0
      : l.state;
  }
  getAxisMotionValue(a) {
    const l = `_drag${a.toUpperCase()}`,
      s = this.visualElement.getProps(),
      o = s[l];
    return (
      o ||
      this.visualElement.getValue(a, (s.initial ? s.initial[a] : void 0) || 0)
    );
  }
  snapToCursor(a) {
    Lt((l) => {
      const { drag: s } = this.getProps();
      if (!Cs(l, s, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        f = this.getAxisMotionValue(l);
      if (o && o.layout) {
        const { min: d, max: m } = o.layout.layoutBox[l];
        f.set(a[l] - Ce(d, m, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: a, dragConstraints: l } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!xi(l) || !s || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Lt((d) => {
      const m = this.getAxisMotionValue(d);
      if (m && this.constraints !== !1) {
        const h = m.get();
        o[d] = ED({ min: h, max: h }, this.constraints[d]);
      }
    });
    const { transformTemplate: f } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = f ? f({}, '') : 'none'),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      this.resolveConstraints(),
      Lt((d) => {
        if (!Cs(d, a, null)) return;
        const m = this.getAxisMotionValue(d),
          { min: h, max: p } = this.constraints[d];
        m.set(Ce(h, p, o[d]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    MD.set(this.visualElement, this);
    const a = this.visualElement.current,
      l = Gl(a, 'pointerdown', (h) => {
        const { drag: p, dragListener: g = !0 } = this.getProps();
        p && g && this.start(h);
      }),
      s = () => {
        const { dragConstraints: h } = this.getProps();
        xi(h) && h.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      f = o.addEventListener('measure', s);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      Ae.read(s);
    const d = Il(window, 'resize', () => this.scalePositionWithinConstraints()),
      m = o.addEventListener(
        'didUpdate',
        ({ delta: h, hasLayoutChanged: p }) => {
          this.isDragging &&
            p &&
            (Lt((g) => {
              const v = this.getAxisMotionValue(g);
              v &&
                ((this.originPoint[g] += h[g].translate),
                v.set(v.get() + h[g].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      d(), l(), f(), m && m();
    };
  }
  getProps() {
    const a = this.visualElement.getProps(),
      {
        drag: l = !1,
        dragDirectionLock: s = !1,
        dragPropagation: o = !1,
        dragConstraints: f = !1,
        dragElastic: d = Ef,
        dragMomentum: m = !0,
      } = a;
    return {
      ...a,
      drag: l,
      dragDirectionLock: s,
      dragPropagation: o,
      dragConstraints: f,
      dragElastic: d,
      dragMomentum: m,
    };
  }
}
function Cs(n, a, l) {
  return (a === !0 || a === n) && (l === null || l === n);
}
function zD(n, a = 10) {
  let l = null;
  return Math.abs(n.y) > a ? (l = 'y') : Math.abs(n.x) > a && (l = 'x'), l;
}
class ND extends sa {
  constructor(a) {
    super(a),
      (this.removeGroupControls = gt),
      (this.removeListeners = gt),
      (this.controls = new _D(a));
  }
  mount() {
    const { dragControls: a } = this.node.getProps();
    a && (this.removeGroupControls = a.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || gt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ng = (n) => (a, l) => {
  n && Ae.postRender(() => n(a, l));
};
class jD extends sa {
  constructor() {
    super(...arguments), (this.removePointerDownListener = gt);
  }
  onPointerDown(a) {
    this.session = new $0(a, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: i1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: a,
      onPanStart: l,
      onPan: s,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: Ng(a),
      onStart: Ng(l),
      onMove: s,
      onEnd: (f, d) => {
        delete this.session, o && Ae.postRender(() => o(f, d));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Gl(this.node.current, 'pointerdown', (a) =>
      this.onPointerDown(a),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Bs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function jg(n, a) {
  return a.max === a.min ? 0 : (n / (a.max - a.min)) * 100;
}
const Ul = {
    correct: (n, a) => {
      if (!a.target) return n;
      if (typeof n == 'string')
        if (ie.test(n)) n = parseFloat(n);
        else return n;
      const l = jg(n, a.target.x),
        s = jg(n, a.target.y);
      return `${l}% ${s}%`;
    },
  },
  VD = {
    correct: (n, { treeScale: a, projectionDelta: l }) => {
      const s = n,
        o = ra.parse(n);
      if (o.length > 5) return s;
      const f = ra.createTransformer(n),
        d = typeof o[0] != 'number' ? 1 : 0,
        m = l.x.scale * a.x,
        h = l.y.scale * a.y;
      (o[0 + d] /= m), (o[1 + d] /= h);
      const p = Ce(m, h, 0.5);
      return (
        typeof o[2 + d] == 'number' && (o[2 + d] /= p),
        typeof o[3 + d] == 'number' && (o[3 + d] /= p),
        f(o)
      );
    },
  };
class UD extends E.Component {
  componentDidMount() {
    const {
        visualElement: a,
        layoutGroup: l,
        switchLayoutGroup: s,
        layoutId: o,
      } = this.props,
      { projection: f } = a;
    aA(LD),
      f &&
        (l.group && l.group.add(f),
        s && s.register && o && s.register(f),
        f.root.didUpdate(),
        f.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        f.setOptions({
          ...f.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Bs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(a) {
    const {
        layoutDependency: l,
        visualElement: s,
        drag: o,
        isPresent: f,
      } = this.props,
      d = s.projection;
    return (
      d &&
        ((d.isPresent = f),
        o || a.layoutDependency !== l || l === void 0
          ? d.willUpdate()
          : this.safeToRemove(),
        a.isPresent !== f &&
          (f
            ? d.promote()
            : d.relegate() ||
              Ae.postRender(() => {
                const m = d.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: a } = this.props.visualElement;
    a &&
      (a.root.didUpdate(),
      Jf.postRender(() => {
        !a.currentAnimation && a.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: a,
        layoutGroup: l,
        switchLayoutGroup: s,
      } = this.props,
      { projection: o } = a;
    o &&
      (o.scheduleCheckAfterUnmount(),
      l && l.group && l.group.remove(o),
      s && s.deregister && s.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: a } = this.props;
    a && a();
  }
  render() {
    return null;
  }
}
function l1(n) {
  const [a, l] = Yv(),
    s = E.useContext(Yf);
  return L.jsx(UD, {
    ...n,
    layoutGroup: s,
    switchLayoutGroup: E.useContext($v),
    isPresent: a,
    safeToRemove: l,
  });
}
const LD = {
  borderRadius: {
    ...Ul,
    applyTo: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
  },
  borderTopLeftRadius: Ul,
  borderTopRightRadius: Ul,
  borderBottomLeftRadius: Ul,
  borderBottomRightRadius: Ul,
  boxShadow: VD,
};
function BD(n, a, l) {
  const s = nt(n) ? n : Jl(n);
  return s.start(Ed('', s, a, l)), s.animation;
}
function HD(n) {
  return n instanceof SVGElement && n.tagName !== 'svg';
}
const PD = (n, a) => n.depth - a.depth;
class qD {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(a) {
    dd(this.children, a), (this.isDirty = !0);
  }
  remove(a) {
    hd(this.children, a), (this.isDirty = !0);
  }
  forEach(a) {
    this.isDirty && this.children.sort(PD),
      (this.isDirty = !1),
      this.children.forEach(a);
  }
}
function GD(n, a) {
  const l = Wt.now(),
    s = ({ timestamp: o }) => {
      const f = o - l;
      f >= a && (la(s), n(f - a));
    };
  return Ae.read(s, !0), () => la(s);
}
const r1 = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  YD = r1.length,
  Vg = (n) => (typeof n == 'string' ? parseFloat(n) : n),
  Ug = (n) => typeof n == 'number' || ie.test(n);
function XD(n, a, l, s, o, f) {
  o
    ? ((n.opacity = Ce(0, l.opacity !== void 0 ? l.opacity : 1, kD(s))),
      (n.opacityExit = Ce(a.opacity !== void 0 ? a.opacity : 1, 0, KD(s))))
    : f &&
      (n.opacity = Ce(
        a.opacity !== void 0 ? a.opacity : 1,
        l.opacity !== void 0 ? l.opacity : 1,
        s,
      ));
  for (let d = 0; d < YD; d++) {
    const m = `border${r1[d]}Radius`;
    let h = Lg(a, m),
      p = Lg(l, m);
    if (h === void 0 && p === void 0) continue;
    h || (h = 0),
      p || (p = 0),
      h === 0 || p === 0 || Ug(h) === Ug(p)
        ? ((n[m] = Math.max(Ce(Vg(h), Vg(p), s), 0)),
          (Jt.test(p) || Jt.test(h)) && (n[m] += '%'))
        : (n[m] = p);
  }
  (a.rotate || l.rotate) && (n.rotate = Ce(a.rotate || 0, l.rotate || 0, s));
}
function Lg(n, a) {
  return n[a] !== void 0 ? n[a] : n.borderRadius;
}
const kD = s1(0, 0.5, R0),
  KD = s1(0.5, 0.95, gt);
function s1(n, a, l) {
  return (s) => (s < n ? 0 : s > a ? 1 : l(wi(n, a, s)));
}
function Bg(n, a) {
  (n.min = a.min), (n.max = a.max);
}
function Ut(n, a) {
  Bg(n.x, a.x), Bg(n.y, a.y);
}
function Hg(n, a) {
  (n.translate = a.translate),
    (n.scale = a.scale),
    (n.originPoint = a.originPoint),
    (n.origin = a.origin);
}
function Pg(n, a, l, s, o) {
  return (
    (n -= a), (n = $s(n, 1 / l, s)), o !== void 0 && (n = $s(n, 1 / o, s)), n
  );
}
function QD(n, a = 0, l = 1, s = 0.5, o, f = n, d = n) {
  if (
    (Jt.test(a) &&
      ((a = parseFloat(a)), (a = Ce(d.min, d.max, a / 100) - d.min)),
    typeof a != 'number')
  )
    return;
  let m = Ce(f.min, f.max, s);
  n === f && (m -= a),
    (n.min = Pg(n.min, a, l, m, o)),
    (n.max = Pg(n.max, a, l, m, o));
}
function qg(n, a, [l, s, o], f, d) {
  QD(n, a[l], a[s], a[o], a.scale, f, d);
}
const ZD = ['x', 'scaleX', 'originX'],
  FD = ['y', 'scaleY', 'originY'];
function Gg(n, a, l, s) {
  qg(n.x, a, ZD, l ? l.x : void 0, s ? s.x : void 0),
    qg(n.y, a, FD, l ? l.y : void 0, s ? s.y : void 0);
}
function Yg(n) {
  return n.translate === 0 && n.scale === 1;
}
function u1(n) {
  return Yg(n.x) && Yg(n.y);
}
function Xg(n, a) {
  return n.min === a.min && n.max === a.max;
}
function $D(n, a) {
  return Xg(n.x, a.x) && Xg(n.y, a.y);
}
function kg(n, a) {
  return (
    Math.round(n.min) === Math.round(a.min) &&
    Math.round(n.max) === Math.round(a.max)
  );
}
function o1(n, a) {
  return kg(n.x, a.x) && kg(n.y, a.y);
}
function Kg(n) {
  return St(n.x) / St(n.y);
}
function Qg(n, a) {
  return (
    n.translate === a.translate &&
    n.scale === a.scale &&
    n.originPoint === a.originPoint
  );
}
class JD {
  constructor() {
    this.members = [];
  }
  add(a) {
    dd(this.members, a), a.scheduleRender();
  }
  remove(a) {
    if (
      (hd(this.members, a),
      a === this.prevLead && (this.prevLead = void 0),
      a === this.lead)
    ) {
      const l = this.members[this.members.length - 1];
      l && this.promote(l);
    }
  }
  relegate(a) {
    const l = this.members.findIndex((o) => a === o);
    if (l === 0) return !1;
    let s;
    for (let o = l; o >= 0; o--) {
      const f = this.members[o];
      if (f.isPresent !== !1) {
        s = f;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(a, l) {
    const s = this.lead;
    if (a !== s && ((this.prevLead = s), (this.lead = a), a.show(), s)) {
      s.instance && s.scheduleRender(),
        a.scheduleRender(),
        (a.resumeFrom = s),
        l && (a.resumeFrom.preserveOpacity = !0),
        s.snapshot &&
          ((a.snapshot = s.snapshot),
          (a.snapshot.latestValues = s.animationValues || s.latestValues)),
        a.root && a.root.isUpdating && (a.isLayoutDirty = !0);
      const { crossfade: o } = a.options;
      o === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((a) => {
      const { options: l, resumingFrom: s } = a;
      l.onExitComplete && l.onExitComplete(),
        s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((a) => {
      a.instance && a.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function WD(n, a, l) {
  let s = '';
  const o = n.x.translate / a.x,
    f = n.y.translate / a.y,
    d = (l == null ? void 0 : l.z) || 0;
  if (
    ((o || f || d) && (s = `translate3d(${o}px, ${f}px, ${d}px) `),
    (a.x !== 1 || a.y !== 1) && (s += `scale(${1 / a.x}, ${1 / a.y}) `),
    l)
  ) {
    const {
      transformPerspective: p,
      rotate: g,
      rotateX: v,
      rotateY: S,
      skewX: T,
      skewY: A,
    } = l;
    p && (s = `perspective(${p}px) ${s}`),
      g && (s += `rotate(${g}deg) `),
      v && (s += `rotateX(${v}deg) `),
      S && (s += `rotateY(${S}deg) `),
      T && (s += `skewX(${T}deg) `),
      A && (s += `skewY(${A}deg) `);
  }
  const m = n.x.scale * a.x,
    h = n.y.scale * a.y;
  return (m !== 1 || h !== 1) && (s += `scale(${m}, ${h})`), s || 'none';
}
const Na = {
    type: 'projectionFrame',
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Pl = typeof window < 'u' && window.MotionDebug !== void 0,
  Zc = ['', 'X', 'Y', 'Z'],
  ID = { visibility: 'hidden' },
  Zg = 1e3;
let ew = 0;
function Fc(n, a, l, s) {
  const { latestValues: o } = a;
  o[n] && ((l[n] = o[n]), a.setStaticValue(n, 0), s && (s[n] = 0));
}
function c1(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: a } = n.options;
  if (!a) return;
  const l = v0(a);
  if (window.MotionHasOptimisedAnimation(l, 'transform')) {
    const { layout: o, layoutId: f } = n.options;
    window.MotionCancelOptimisedAnimation(l, 'transform', Ae, !(o || f));
  }
  const { parent: s } = n;
  s && !s.hasCheckedOptimisedAppear && c1(s);
}
function f1({
  attachResizeListener: n,
  defaultParent: a,
  measureScroll: l,
  checkIsScrollRoot: s,
  resetTransform: o,
}) {
  return class {
    constructor(d = {}, m = a == null ? void 0 : a()) {
      (this.id = ew++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Pl &&
              (Na.totalNodes =
                Na.resolvedTargetDeltas =
                Na.recalculatedProjection =
                  0),
            this.nodes.forEach(aw),
            this.nodes.forEach(uw),
            this.nodes.forEach(ow),
            this.nodes.forEach(iw),
            Pl && window.MotionDebug.record(Na);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = d),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0);
      for (let h = 0; h < this.path.length; h++)
        this.path[h].shouldResetTransform = !0;
      this.root === this && (this.nodes = new qD());
    }
    addEventListener(d, m) {
      return (
        this.eventHandlers.has(d) || this.eventHandlers.set(d, new md()),
        this.eventHandlers.get(d).add(m)
      );
    }
    notifyListeners(d, ...m) {
      const h = this.eventHandlers.get(d);
      h && h.notify(...m);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    mount(d, m = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = HD(d)), (this.instance = d);
      const { layoutId: h, layout: p, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(d),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        m && (p || h) && (this.isLayoutDirty = !0),
        n)
      ) {
        let v;
        const S = () => (this.root.updateBlockedByResize = !1);
        n(d, () => {
          (this.root.updateBlockedByResize = !0),
            v && v(),
            (v = GD(S, 250)),
            Bs.hasAnimatedSinceResize &&
              ((Bs.hasAnimatedSinceResize = !1), this.nodes.forEach($g));
        });
      }
      h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          g &&
          (h || p) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: v,
              hasLayoutChanged: S,
              hasRelativeLayoutChanged: T,
              layout: A,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const M =
                  this.options.transition || g.getDefaultTransition() || mw,
                { onLayoutAnimationStart: _, onLayoutAnimationComplete: O } =
                  g.getProps(),
                N = !this.targetLayout || !o1(this.targetLayout, A),
                U = !S && T;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                U ||
                (S && (N || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(v, U);
                const q = { ...ud(M, 'layout'), onPlay: _, onComplete: O };
                (g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((q.delay = 0), (q.type = !1)),
                  this.startAnimation(q);
              } else
                S || $g(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = A;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        la(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(cw),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          c1(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        (v.shouldResetTransform = !0),
          v.updateScroll('snapshot'),
          v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: m, layout: h } = this.options;
      if (m === void 0 && !h) return;
      const p = this.getTransformTemplate();
      (this.prevTransformTemplateValue = p ? p(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        d && this.notifyListeners('willUpdate');
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Fg);
        return;
      }
      this.isUpdating || this.nodes.forEach(rw),
        (this.isUpdating = !1),
        this.nodes.forEach(sw),
        this.nodes.forEach(tw),
        this.nodes.forEach(nw),
        this.clearAllSnapshots();
      const m = Wt.now();
      (Je.delta = wn(0, 1e3 / 60, m - Je.timestamp)),
        (Je.timestamp = m),
        (Je.isProcessing = !0),
        Pc.update.process(Je),
        Pc.preRender.process(Je),
        Pc.render.process(Je),
        (Je.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Jf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(lw), this.sharedNodes.forEach(fw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ae.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ae.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
      const d = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ue()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          d ? d.layoutBox : void 0,
        );
    }
    updateScroll(d = 'measure') {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === d &&
          (m = !1),
        m)
      ) {
        const h = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: h,
          offset: l(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : h,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const d =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !u1(this.projectionDelta),
        h = this.getTransformTemplate(),
        p = h ? h(this.latestValues, '') : void 0,
        g = p !== this.prevTransformTemplateValue;
      d &&
        (m || za(this.latestValues) || g) &&
        (o(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(d = !0) {
      const m = this.measurePageBox();
      let h = this.removeElementScroll(m);
      return (
        d && (h = this.removeTransform(h)),
        pw(h),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: h,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var d;
      const { visualElement: m } = this.options;
      if (!m) return Ue();
      const h = m.measureViewportBox();
      if (
        !(
          ((d = this.scroll) === null || d === void 0 ? void 0 : d.wasRoot) ||
          this.path.some(yw)
        )
      ) {
        const { scroll: g } = this.root;
        g && (Ai(h.x, g.offset.x), Ai(h.y, g.offset.y));
      }
      return h;
    }
    removeElementScroll(d) {
      var m;
      const h = Ue();
      if (
        (Ut(h, d), !((m = this.scroll) === null || m === void 0) && m.wasRoot)
      )
        return h;
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p],
          { scroll: v, options: S } = g;
        g !== this.root &&
          v &&
          S.layoutScroll &&
          (v.wasRoot && Ut(h, d), Ai(h.x, v.offset.x), Ai(h.y, v.offset.y));
      }
      return h;
    }
    applyTransform(d, m = !1) {
      const h = Ue();
      Ut(h, d);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        !m &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          Ri(h, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          za(g.latestValues) && Ri(h, g.latestValues);
      }
      return za(this.latestValues) && Ri(h, this.latestValues), h;
    }
    removeTransform(d) {
      const m = Ue();
      Ut(m, d);
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h];
        if (!p.instance || !za(p.latestValues)) continue;
        Af(p.latestValues) && p.updateSnapshot();
        const g = Ue(),
          v = p.measurePageBox();
        Ut(g, v),
          Gg(m, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, g);
      }
      return za(this.latestValues) && Gg(m, this.latestValues), m;
    }
    setTargetDelta(d) {
      (this.targetDelta = d),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Je.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      var m;
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== h;
      if (
        !(
          d ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((m = this.parent) === null || m === void 0) &&
            m.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: S } = this.options;
      if (!(!this.layout || !(v || S))) {
        if (
          ((this.resolvedRelativeTargetAt = Je.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const T = this.getClosestProjectingParent();
          T && T.layout && this.animationProgress !== 1
            ? ((this.relativeParent = T),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ue()),
              (this.relativeTargetOrigin = Ue()),
              Xl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                T.layout.layoutBox,
              ),
              Ut(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Ue()), (this.targetWithTransforms = Ue())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                bD(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Ut(this.target, this.layout.layoutBox),
                  n1(this.target, this.targetDelta))
                : Ut(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const T = this.getClosestProjectingParent();
            T &&
            !!T.resumingFrom == !!this.resumingFrom &&
            !T.options.layoutScroll &&
            T.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = T),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ue()),
                (this.relativeTargetOrigin = Ue()),
                Xl(this.relativeTargetOrigin, this.target, T.target),
                Ut(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Pl && Na.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Af(this.parent.latestValues) ||
          t1(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var d;
      const m = this.getLead(),
        h = !!this.resumingFrom || this !== m;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          (!((d = this.parent) === null || d === void 0) &&
            d.isProjectionDirty)) &&
          (p = !1),
        h &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === Je.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: g, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || v))
      )
        return;
      Ut(this.layoutCorrected, this.layout.layoutBox);
      const S = this.treeScale.x,
        T = this.treeScale.y;
      OD(this.layoutCorrected, this.treeScale, this.path, h),
        m.layout &&
          !m.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((m.target = m.layout.layoutBox), (m.targetWithTransforms = Ue()));
      const { target: A } = m;
      if (!A) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Hg(this.prevProjectionDelta.x, this.projectionDelta.x),
          Hg(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Yl(this.projectionDelta, this.layoutCorrected, A, this.latestValues),
        (this.treeScale.x !== S ||
          this.treeScale.y !== T ||
          !Qg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Qg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', A)),
        Pl && Na.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      var m;
      if (
        ((m = this.options.visualElement) === null ||
          m === void 0 ||
          m.scheduleRender(),
        d)
      ) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Ei()),
        (this.projectionDelta = Ei()),
        (this.projectionDeltaWithTransform = Ei());
    }
    setAnimationOrigin(d, m = !1) {
      const h = this.snapshot,
        p = h ? h.latestValues : {},
        g = { ...this.latestValues },
        v = Ei();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m);
      const S = Ue(),
        T = h ? h.source : void 0,
        A = this.layout ? this.layout.source : void 0,
        M = T !== A,
        _ = this.getStack(),
        O = !_ || _.members.length <= 1,
        N = !!(M && !O && this.options.crossfade === !0 && !this.path.some(hw));
      this.animationProgress = 0;
      let U;
      (this.mixTargetDelta = (q) => {
        const V = q / 1e3;
        Jg(v.x, d.x, V),
          Jg(v.y, d.y, V),
          this.setTargetDelta(v),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Xl(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            dw(this.relativeTarget, this.relativeTargetOrigin, S, V),
            U && $D(this.relativeTarget, U) && (this.isProjectionDirty = !1),
            U || (U = Ue()),
            Ut(U, this.relativeTarget)),
          M &&
            ((this.animationValues = g), XD(g, p, this.latestValues, V, N, O)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = V);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (la(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ae.update(() => {
          (Bs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = BD(0, Zg, {
              ...d,
              onUpdate: (m) => {
                this.mixTargetDelta(m), d.onUpdate && d.onUpdate(m);
              },
              onComplete: () => {
                d.onComplete && d.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const d = this.getStack();
      d && d.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Zg),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let {
        targetWithTransforms: m,
        target: h,
        layout: p,
        latestValues: g,
      } = d;
      if (!(!m || !h || !p)) {
        if (
          this !== d &&
          this.layout &&
          p &&
          d1(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          h = this.target || Ue();
          const v = St(this.layout.layoutBox.x);
          (h.x.min = d.target.x.min), (h.x.max = h.x.min + v);
          const S = St(this.layout.layoutBox.y);
          (h.y.min = d.target.y.min), (h.y.max = h.y.min + S);
        }
        Ut(m, h),
          Ri(m, g),
          Yl(this.projectionDeltaWithTransform, this.layoutCorrected, m, g);
      }
    }
    registerSharedNode(d, m) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new JD()),
        this.sharedNodes.get(d).add(m);
      const p = m.options.initialPromotionConfig;
      m.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      var d;
      const { layoutId: m } = this.options;
      return m
        ? ((d = this.getStack()) === null || d === void 0 ? void 0 : d.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var d;
      const { layoutId: m } = this.options;
      return m
        ? (d = this.getStack()) === null || d === void 0
          ? void 0
          : d.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d) return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: m, preserveFollowOpacity: h } = {}) {
      const p = this.getStack();
      p && p.promote(this, h),
        d && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m });
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d) return;
      let m = !1;
      const { latestValues: h } = d;
      if (
        ((h.z ||
          h.rotate ||
          h.rotateX ||
          h.rotateY ||
          h.rotateZ ||
          h.skewX ||
          h.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const p = {};
      h.z && Fc('z', d, p, this.animationValues);
      for (let g = 0; g < Zc.length; g++)
        Fc(`rotate${Zc[g]}`, d, p, this.animationValues),
          Fc(`skew${Zc[g]}`, d, p, this.animationValues);
      d.render();
      for (const g in p)
        d.setStaticValue(g, p[g]),
          this.animationValues && (this.animationValues[g] = p[g]);
      d.scheduleRender();
    }
    getProjectionStyles(d) {
      var m, h;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return ID;
      const p = { visibility: '' },
        g = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (p.opacity = ''),
          (p.pointerEvents = Us(d == null ? void 0 : d.pointerEvents) || ''),
          (p.transform = g ? g(this.latestValues, '') : 'none'),
          p
        );
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        const M = {};
        return (
          this.options.layoutId &&
            ((M.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (M.pointerEvents = Us(d == null ? void 0 : d.pointerEvents) || '')),
          this.hasProjected &&
            !za(this.latestValues) &&
            ((M.transform = g ? g({}, '') : 'none'), (this.hasProjected = !1)),
          M
        );
      }
      const S = v.animationValues || v.latestValues;
      this.applyTransformsToTarget(),
        (p.transform = WD(
          this.projectionDeltaWithTransform,
          this.treeScale,
          S,
        )),
        g && (p.transform = g(S, p.transform));
      const { x: T, y: A } = this.projectionDelta;
      (p.transformOrigin = `${T.origin * 100}% ${A.origin * 100}% 0`),
        v.animationValues
          ? (p.opacity =
              v === this
                ? (h =
                    (m = S.opacity) !== null && m !== void 0
                      ? m
                      : this.latestValues.opacity) !== null && h !== void 0
                  ? h
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : S.opacityExit)
          : (p.opacity =
              v === this
                ? S.opacity !== void 0
                  ? S.opacity
                  : ''
                : S.opacityExit !== void 0
                  ? S.opacityExit
                  : 0);
      for (const M in $l) {
        if (S[M] === void 0) continue;
        const { correct: _, applyTo: O, isCSSVariable: N } = $l[M],
          U = p.transform === 'none' ? S[M] : _(S[M], v);
        if (O) {
          const q = O.length;
          for (let V = 0; V < q; V++) p[O[V]] = U;
        } else
          N ? (this.options.visualElement.renderState.vars[M] = U) : (p[M] = U);
      }
      return (
        this.options.layoutId &&
          (p.pointerEvents =
            v === this
              ? Us(d == null ? void 0 : d.pointerEvents) || ''
              : 'none'),
        p
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((d) => {
        var m;
        return (m = d.currentAnimation) === null || m === void 0
          ? void 0
          : m.stop();
      }),
        this.root.nodes.forEach(Fg),
        this.root.sharedNodes.clear();
    }
  };
}
function tw(n) {
  n.updateLayout();
}
function nw(n) {
  var a;
  const l =
    ((a = n.resumeFrom) === null || a === void 0 ? void 0 : a.snapshot) ||
    n.snapshot;
  if (n.isLead() && n.layout && l && n.hasListeners('didUpdate')) {
    const { layoutBox: s, measuredBox: o } = n.layout,
      { animationType: f } = n.options,
      d = l.source !== n.layout.source;
    f === 'size'
      ? Lt((v) => {
          const S = d ? l.measuredBox[v] : l.layoutBox[v],
            T = St(S);
          (S.min = s[v].min), (S.max = S.min + T);
        })
      : d1(f, l.layoutBox, s) &&
        Lt((v) => {
          const S = d ? l.measuredBox[v] : l.layoutBox[v],
            T = St(s[v]);
          (S.max = S.min + T),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[v].max = n.relativeTarget[v].min + T));
        });
    const m = Ei();
    Yl(m, s, l.layoutBox);
    const h = Ei();
    d ? Yl(h, n.applyTransform(o, !0), l.measuredBox) : Yl(h, s, l.layoutBox);
    const p = !u1(m);
    let g = !1;
    if (!n.resumeFrom) {
      const v = n.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: S, layout: T } = v;
        if (S && T) {
          const A = Ue();
          Xl(A, l.layoutBox, S.layoutBox);
          const M = Ue();
          Xl(M, s, T.layoutBox),
            o1(A, M) || (g = !0),
            v.options.layoutRoot &&
              ((n.relativeTarget = M),
              (n.relativeTargetOrigin = A),
              (n.relativeParent = v));
        }
      }
    }
    n.notifyListeners('didUpdate', {
      layout: s,
      snapshot: l,
      delta: h,
      layoutDelta: m,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: g,
    });
  } else if (n.isLead()) {
    const { onExitComplete: s } = n.options;
    s && s();
  }
  n.options.transition = void 0;
}
function aw(n) {
  Pl && Na.totalNodes++,
    n.parent &&
      (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
      n.isSharedProjectionDirty ||
        (n.isSharedProjectionDirty = !!(
          n.isProjectionDirty ||
          n.parent.isProjectionDirty ||
          n.parent.isSharedProjectionDirty
        )),
      n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function iw(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function lw(n) {
  n.clearSnapshot();
}
function Fg(n) {
  n.clearMeasurements();
}
function rw(n) {
  n.isLayoutDirty = !1;
}
function sw(n) {
  const { visualElement: a } = n.options;
  a && a.getProps().onBeforeLayoutMeasure && a.notify('BeforeLayoutMeasure'),
    n.resetTransform();
}
function $g(n) {
  n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0);
}
function uw(n) {
  n.resolveTargetDelta();
}
function ow(n) {
  n.calcProjection();
}
function cw(n) {
  n.resetSkewAndRotation();
}
function fw(n) {
  n.removeLeadSnapshot();
}
function Jg(n, a, l) {
  (n.translate = Ce(a.translate, 0, l)),
    (n.scale = Ce(a.scale, 1, l)),
    (n.origin = a.origin),
    (n.originPoint = a.originPoint);
}
function Wg(n, a, l, s) {
  (n.min = Ce(a.min, l.min, s)), (n.max = Ce(a.max, l.max, s));
}
function dw(n, a, l, s) {
  Wg(n.x, a.x, l.x, s), Wg(n.y, a.y, l.y, s);
}
function hw(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const mw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ig = (n) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  ev = Ig('applewebkit/') && !Ig('chrome/') ? Math.round : gt;
function tv(n) {
  (n.min = ev(n.min)), (n.max = ev(n.max));
}
function pw(n) {
  tv(n.x), tv(n.y);
}
function d1(n, a, l) {
  return (
    n === 'position' || (n === 'preserve-aspect' && !vD(Kg(a), Kg(l), 0.2))
  );
}
function yw(n) {
  var a;
  return (
    n !== n.root &&
    ((a = n.scroll) === null || a === void 0 ? void 0 : a.wasRoot)
  );
}
const gw = f1({
    attachResizeListener: (n, a) => Il(n, 'resize', a),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  $c = { current: void 0 },
  h1 = f1({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!$c.current) {
        const n = new gw({});
        n.mount(window), n.setOptions({ layoutScroll: !0 }), ($c.current = n);
      }
      return $c.current;
    },
    resetTransform: (n, a) => {
      n.style.transform = a !== void 0 ? a : 'none';
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === 'fixed',
  }),
  vw = {
    pan: { Feature: jD },
    drag: { Feature: ND, ProjectionNode: h1, MeasureLayout: l1 },
  };
function nv(n, a, l) {
  const { props: s } = n;
  n.animationState &&
    s.whileHover &&
    n.animationState.setActive('whileHover', l === 'Start');
  const o = 'onHover' + l,
    f = s[o];
  f && Ae.postRender(() => f(a, rr(a)));
}
class bw extends sa {
  mount() {
    const { current: a } = this.node;
    a &&
      (this.unmount = bA(
        a,
        (l, s) => (nv(this.node, s, 'Start'), (o) => nv(this.node, o, 'End')),
      ));
  }
  unmount() {}
}
class Sw extends sa {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let a = !1;
    try {
      a = this.node.current.matches(':focus-visible');
    } catch {
      a = !0;
    }
    !a ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = lr(
      Il(this.node.current, 'focus', () => this.onFocus()),
      Il(this.node.current, 'blur', () => this.onBlur()),
    );
  }
  unmount() {}
}
function av(n, a, l) {
  const { props: s } = n;
  n.animationState &&
    s.whileTap &&
    n.animationState.setActive('whileTap', l === 'Start');
  const o = 'onTap' + (l === 'End' ? '' : l),
    f = s[o];
  f && Ae.postRender(() => f(a, rr(a)));
}
class xw extends sa {
  mount() {
    const { current: a } = this.node;
    a &&
      (this.unmount = EA(
        a,
        (l, s) => (
          av(this.node, s, 'Start'),
          (o, { success: f }) => av(this.node, o, f ? 'End' : 'Cancel')
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Df = new WeakMap(),
  Jc = new WeakMap(),
  Tw = (n) => {
    const a = Df.get(n.target);
    a && a(n);
  },
  Ew = (n) => {
    n.forEach(Tw);
  };
function Aw({ root: n, ...a }) {
  const l = n || document;
  Jc.has(l) || Jc.set(l, {});
  const s = Jc.get(l),
    o = JSON.stringify(a);
  return s[o] || (s[o] = new IntersectionObserver(Ew, { root: n, ...a })), s[o];
}
function Rw(n, a, l) {
  const s = Aw(a);
  return (
    Df.set(n, l),
    s.observe(n),
    () => {
      Df.delete(n), s.unobserve(n);
    }
  );
}
const Dw = { some: 0, all: 1 };
class ww extends sa {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: a = {} } = this.node.getProps(),
      { root: l, margin: s, amount: o = 'some', once: f } = a,
      d = {
        root: l ? l.current : void 0,
        rootMargin: s,
        threshold: typeof o == 'number' ? o : Dw[o],
      },
      m = (h) => {
        const { isIntersecting: p } = h;
        if (
          this.isInView === p ||
          ((this.isInView = p), f && !p && this.hasEnteredView)
        )
          return;
        p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', p);
        const { onViewportEnter: g, onViewportLeave: v } = this.node.getProps(),
          S = p ? g : v;
        S && S(h);
      };
    return Rw(this.node.current, d, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: a, prevProps: l } = this.node;
    ['amount', 'margin', 'root'].some(Ow(a, l)) && this.startObserver();
  }
  unmount() {}
}
function Ow({ viewport: n = {} }, { viewport: a = {} } = {}) {
  return (l) => n[l] !== a[l];
}
const Cw = {
    inView: { Feature: ww },
    tap: { Feature: xw },
    focus: { Feature: Sw },
    hover: { Feature: bw },
  },
  Mw = { layout: { ProjectionNode: h1, MeasureLayout: l1 } },
  Js = { current: null },
  Ad = { current: !1 };
function m1() {
  if (((Ad.current = !0), !!Kf))
    if (window.matchMedia) {
      const n = window.matchMedia('(prefers-reduced-motion)'),
        a = () => (Js.current = n.matches);
      n.addListener(a), a();
    } else Js.current = !1;
}
const _w = [...H0, tt, ra],
  zw = (n) => _w.find(B0(n)),
  iv = new WeakMap();
function Nw(n, a, l) {
  for (const s in a) {
    const o = a[s],
      f = l[s];
    if (nt(o)) n.addValue(s, o);
    else if (nt(f)) n.addValue(s, Jl(o, { owner: n }));
    else if (f !== o)
      if (n.hasValue(s)) {
        const d = n.getValue(s);
        d.liveStyle === !0 ? d.jump(o) : d.hasAnimated || d.set(o);
      } else {
        const d = n.getStaticValue(s);
        n.addValue(s, Jl(d !== void 0 ? d : o, { owner: n }));
      }
  }
  for (const s in l) a[s] === void 0 && n.removeValue(s);
  return a;
}
const lv = [
  'AnimationStart',
  'AnimationComplete',
  'Update',
  'BeforeLayoutMeasure',
  'LayoutMeasure',
  'LayoutAnimationStart',
  'LayoutAnimationComplete',
];
class jw {
  scrapeMotionValuesFromProps(a, l, s) {
    return {};
  }
  constructor(
    {
      parent: a,
      props: l,
      presenceContext: s,
      reducedMotionConfig: o,
      blockInitialAnimation: f,
      visualState: d,
    },
    m = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Sd),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const T = Wt.now();
        this.renderScheduledAt < T &&
          ((this.renderScheduledAt = T), Ae.render(this.render, !1, !0));
      });
    const { latestValues: h, renderState: p, onUpdate: g } = d;
    (this.onUpdate = g),
      (this.latestValues = h),
      (this.baseTarget = { ...h }),
      (this.initialValues = l.initial ? { ...h } : {}),
      (this.renderState = p),
      (this.parent = a),
      (this.props = l),
      (this.presenceContext = s),
      (this.depth = a ? a.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = m),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = du(l)),
      (this.isVariantNode = Zv(l)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(a && a.current));
    const { willChange: v, ...S } = this.scrapeMotionValuesFromProps(
      l,
      {},
      this,
    );
    for (const T in S) {
      const A = S[T];
      h[T] !== void 0 && nt(A) && A.set(h[T], !1);
    }
  }
  mount(a) {
    (this.current = a),
      iv.set(a, this),
      this.projection && !this.projection.instance && this.projection.mount(a),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((l, s) => this.bindToMotionValue(s, l)),
      Ad.current || m1(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : Js.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    iv.delete(this.current),
      this.projection && this.projection.unmount(),
      la(this.notifyUpdate),
      la(this.render),
      this.valueSubscriptions.forEach((a) => a()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const a in this.events) this.events[a].clear();
    for (const a in this.features) {
      const l = this.features[a];
      l && (l.unmount(), (l.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(a, l) {
    this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)();
    const s = Ba.has(a),
      o = l.on('change', (m) => {
        (this.latestValues[a] = m),
          this.props.onUpdate && Ae.preRender(this.notifyUpdate),
          s && this.projection && (this.projection.isTransformDirty = !0);
      }),
      f = l.on('renderRequest', this.scheduleRender);
    let d;
    window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, a, l)),
      this.valueSubscriptions.set(a, () => {
        o(), f(), d && d(), l.owner && l.stop();
      });
  }
  sortNodePosition(a) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== a.type
      ? 0
      : this.sortInstanceNodePosition(this.current, a.current);
  }
  updateFeatures() {
    let a = 'animation';
    for (a in Oi) {
      const l = Oi[a];
      if (!l) continue;
      const { isEnabled: s, Feature: o } = l;
      if (
        (!this.features[a] &&
          o &&
          s(this.props) &&
          (this.features[a] = new o(this)),
        this.features[a])
      ) {
        const f = this.features[a];
        f.isMounted ? f.update() : (f.mount(), (f.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ue();
  }
  getStaticValue(a) {
    return this.latestValues[a];
  }
  setStaticValue(a, l) {
    this.latestValues[a] = l;
  }
  update(a, l) {
    (a.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = a),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = l);
    for (let s = 0; s < lv.length; s++) {
      const o = lv[s];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const f = 'on' + o,
        d = a[f];
      d && (this.propEventSubscriptions[o] = this.on(o, d));
    }
    (this.prevMotionValues = Nw(
      this,
      this.scrapeMotionValuesFromProps(a, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(a) {
    return this.props.variants ? this.props.variants[a] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(a) {
    const l = this.getClosestVariantNode();
    if (l)
      return (
        l.variantChildren && l.variantChildren.add(a),
        () => l.variantChildren.delete(a)
      );
  }
  addValue(a, l) {
    const s = this.values.get(a);
    l !== s &&
      (s && this.removeValue(a),
      this.bindToMotionValue(a, l),
      this.values.set(a, l),
      (this.latestValues[a] = l.get()));
  }
  removeValue(a) {
    this.values.delete(a);
    const l = this.valueSubscriptions.get(a);
    l && (l(), this.valueSubscriptions.delete(a)),
      delete this.latestValues[a],
      this.removeValueFromRenderState(a, this.renderState);
  }
  hasValue(a) {
    return this.values.has(a);
  }
  getValue(a, l) {
    if (this.props.values && this.props.values[a]) return this.props.values[a];
    let s = this.values.get(a);
    return (
      s === void 0 &&
        l !== void 0 &&
        ((s = Jl(l === null ? void 0 : l, { owner: this })),
        this.addValue(a, s)),
      s
    );
  }
  readValue(a, l) {
    var s;
    let o =
      this.latestValues[a] !== void 0 || !this.current
        ? this.latestValues[a]
        : (s = this.getBaseTargetFromProps(this.props, a)) !== null &&
            s !== void 0
          ? s
          : this.readValueFromInstance(this.current, a, this.options);
    return (
      o != null &&
        (typeof o == 'string' && (U0(o) || w0(o))
          ? (o = parseFloat(o))
          : !zw(o) && ra.test(l) && (o = N0(a, l)),
        this.setBaseTarget(a, nt(o) ? o.get() : o)),
      nt(o) ? o.get() : o
    );
  }
  setBaseTarget(a, l) {
    this.baseTarget[a] = l;
  }
  getBaseTarget(a) {
    var l;
    const { initial: s } = this.props;
    let o;
    if (typeof s == 'string' || typeof s == 'object') {
      const d = If(
        this.props,
        s,
        (l = this.presenceContext) === null || l === void 0 ? void 0 : l.custom,
      );
      d && (o = d[a]);
    }
    if (s && o !== void 0) return o;
    const f = this.getBaseTargetFromProps(this.props, a);
    return f !== void 0 && !nt(f)
      ? f
      : this.initialValues[a] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[a];
  }
  on(a, l) {
    return this.events[a] || (this.events[a] = new md()), this.events[a].add(l);
  }
  notify(a, ...l) {
    this.events[a] && this.events[a].notify(...l);
  }
}
class p1 extends jw {
  constructor() {
    super(...arguments), (this.KeyframeResolver = P0);
  }
  sortInstanceNodePosition(a, l) {
    return a.compareDocumentPosition(l) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(a, l) {
    return a.style ? a.style[l] : void 0;
  }
  removeValueFromRenderState(a, { vars: l, style: s }) {
    delete l[a], delete s[a];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: a } = this.props;
    nt(a) &&
      (this.childSubscription = a.on('change', (l) => {
        this.current && (this.current.textContent = `${l}`);
      }));
  }
}
function Vw(n) {
  return window.getComputedStyle(n);
}
class Uw extends p1 {
  constructor() {
    super(...arguments), (this.type = 'html'), (this.renderInstance = n0);
  }
  readValueFromInstance(a, l) {
    if (Ba.has(l)) {
      const s = bd(l);
      return (s && s.default) || 0;
    } else {
      const s = Vw(a),
        o = (ed(l) ? s.getPropertyValue(l) : s[l]) || 0;
      return typeof o == 'string' ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(a, { transformPagePoint: l }) {
    return a1(a, l);
  }
  build(a, l, s) {
    ad(a, l, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(a, l, s) {
    return sd(a, l, s);
  }
}
class Lw extends p1 {
  constructor() {
    super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ue);
  }
  getBaseTargetFromProps(a, l) {
    return a[l];
  }
  readValueFromInstance(a, l) {
    if (Ba.has(l)) {
      const s = bd(l);
      return (s && s.default) || 0;
    }
    return (l = a0.has(l) ? l : $f(l)), a.getAttribute(l);
  }
  scrapeMotionValuesFromProps(a, l, s) {
    return r0(a, l, s);
  }
  build(a, l, s) {
    id(a, l, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(a, l, s, o) {
    i0(a, l, s, o);
  }
  mount(a) {
    (this.isSVGTag = rd(a.tagName)), super.mount(a);
  }
}
const Bw = (n, a) =>
    Wf(n) ? new Lw(a) : new Uw(a, { allowProjection: n !== E.Fragment }),
  Hw = dA({ ...oD, ...Cw, ...vw, ...Mw }, Bw),
  Pw = wE(Hw);
function y1() {
  !Ad.current && m1();
  const [n] = E.useState(Js.current);
  return n;
}
var g1 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  rv = na.createContext && na.createContext(g1),
  qw = ['attr', 'size', 'title'];
function Gw(n, a) {
  if (n == null) return {};
  var l = Yw(n, a),
    s,
    o;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(n);
    for (o = 0; o < f.length; o++)
      (s = f[o]),
        !(a.indexOf(s) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, s) &&
          (l[s] = n[s]);
  }
  return l;
}
function Yw(n, a) {
  if (n == null) return {};
  var l = {};
  for (var s in n)
    if (Object.prototype.hasOwnProperty.call(n, s)) {
      if (a.indexOf(s) >= 0) continue;
      l[s] = n[s];
    }
  return l;
}
function Ws() {
  return (
    (Ws = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var a = 1; a < arguments.length; a++) {
            var l = arguments[a];
            for (var s in l)
              Object.prototype.hasOwnProperty.call(l, s) && (n[s] = l[s]);
          }
          return n;
        }),
    Ws.apply(this, arguments)
  );
}
function sv(n, a) {
  var l = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    a &&
      (s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      })),
      l.push.apply(l, s);
  }
  return l;
}
function Is(n) {
  for (var a = 1; a < arguments.length; a++) {
    var l = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? sv(Object(l), !0).forEach(function (s) {
          Xw(n, s, l[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
        : sv(Object(l)).forEach(function (s) {
            Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(l, s));
          });
  }
  return n;
}
function Xw(n, a, l) {
  return (
    (a = kw(a)),
    a in n
      ? Object.defineProperty(n, a, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[a] = l),
    n
  );
}
function kw(n) {
  var a = Kw(n, 'string');
  return typeof a == 'symbol' ? a : a + '';
}
function Kw(n, a) {
  if (typeof n != 'object' || !n) return n;
  var l = n[Symbol.toPrimitive];
  if (l !== void 0) {
    var s = l.call(n, a || 'default');
    if (typeof s != 'object') return s;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (a === 'string' ? String : Number)(n);
}
function v1(n) {
  return (
    n &&
    n.map((a, l) =>
      na.createElement(a.tag, Is({ key: l }, a.attr), v1(a.child)),
    )
  );
}
function sr(n) {
  return (a) =>
    na.createElement(Qw, Ws({ attr: Is({}, n.attr) }, a), v1(n.child));
}
function Qw(n) {
  var a = (l) => {
    var { attr: s, size: o, title: f } = n,
      d = Gw(n, qw),
      m = o || l.size || '1em',
      h;
    return (
      l.className && (h = l.className),
      n.className && (h = (h ? h + ' ' : '') + n.className),
      na.createElement(
        'svg',
        Ws(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          l.attr,
          s,
          d,
          {
            className: h,
            style: Is(Is({ color: n.color || l.color }, l.style), n.style),
            height: m,
            width: m,
            xmlns: 'http://www.w3.org/2000/svg',
          },
        ),
        f && na.createElement('title', null, f),
        n.children,
      )
    );
  };
  return rv !== void 0
    ? na.createElement(rv.Consumer, null, (l) => a(l))
    : a(g1);
}
function Zw(n) {
  return sr({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z',
        },
        child: [],
      },
    ],
  })(n);
}
function b1(n) {
  return sr({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z',
        },
        child: [],
      },
    ],
  })(n);
}
function Fw({ data: n }) {
  return L.jsxs('thead', {
    className: 'flex',
    children: [
      L.jsxs('tr', {
        className: 'flex basis-3/5 flex-col items-start',
        children: [
          L.jsx('th', {
            className: 'text-base px-2 py-0.5 lg:text-lg',
            children: 'Name',
          }),
          n.nutrients.map((a) =>
            a.unit
              ? L.jsx(
                  'th',
                  {
                    className: 'text-sm px-2 py-0.5 lg:text-base',
                    children: a.name,
                  },
                  a.name,
                )
              : null,
          ),
        ],
      }),
      L.jsxs('tr', {
        className: 'flex basis-2/5 flex-col items-end',
        children: [
          L.jsx('th', {
            className: 'text-base px-2 py-0.5 lg:text-lg',
            children: 'Sum',
          }),
          n.nutrients.map((a) =>
            a.unit
              ? L.jsx(
                  'th',
                  {
                    className: 'text-sm px-2 py-0.5 lg:text-base',
                    children:
                      a.unit === 'kcal'
                        ? typeof a.value == 'number'
                          ? `${Math.abs(Math.round(a.value))} ${a.unit}`
                          : null
                        : typeof a.value == 'number'
                          ? `${Math.abs(a.value).toFixed(2)} ${a.unit}`
                          : null,
                  },
                  a.name,
                )
              : '',
          ),
        ],
      }),
    ],
  });
}
function $w(n) {
  return sr({
    tag: 'svg',
    attr: { version: '1.2', baseProfile: 'tiny', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z',
        },
        child: [],
      },
    ],
  })(n);
}
const S1 = XT,
  Jw = Ov,
  Mn = E.createContext([!1, () => {}]),
  Ww = (n) => `Delete ${n}`;
function Iw({ data: n }) {
  const [a] = E.useContext(Mn),
    l = S1();
  return L.jsx('tbody', {
    className:
      'w-full h-calc-mobile flex flex-col overflow-y-auto overflow-x-hidden lg:h-calc-desktop',
    children: n.foods.map((s) =>
      s.food.map((o) =>
        o.unit
          ? o.name === 'Grams'
            ? L.jsxs(
                na.Fragment,
                {
                  children: [
                    L.jsxs('tr', {
                      className: 'flex',
                      children: [
                        L.jsx('td', {
                          className:
                            'text-sm text-left basis-3/5 px-2 py-0.5 lg:text-base',
                          children: o.name,
                        }),
                        L.jsx('td', {
                          className:
                            'text-sm text-right basis-2/5 px-2 py-0.5 lg:text-base',
                          children: `${o.value} ${o.unit}`,
                        }),
                      ],
                    }),
                    L.jsx('tr', {
                      className: 'flex justify-center',
                      children: L.jsx('td', {
                        className: 'basis-full flex p-0',
                        children: L.jsxs('button', {
                          tabIndex: a ? 0 : -1,
                          onClick: () => {
                            l(rE(s));
                          },
                          className:
                            'flex text-sm items-center py-2 justify-center basis-full transition-all cursor-pointer hover:scale-110 hover:bg-lavender-bright hover:shadow-custom focus:bg-lavender-bright motion-reduce:transition-none lg:text-base',
                          'aria-label': 'Delete food from calculator',
                          children: [Ww(s.food[0].value), L.jsx($w, {})],
                        }),
                      }),
                    }),
                  ],
                },
                o.name,
              )
            : L.jsxs(
                'tr',
                {
                  className: 'flex',
                  children: [
                    L.jsx('td', {
                      className:
                        'text-sm text-left basis-3/5 px-2 py-0.5 lg:text-base',
                      children: o.name,
                    }),
                    L.jsx('td', {
                      className:
                        'text-sm text-right basis-2/5 px-2 py-0.5 lg:text-base',
                      children: `${o.value} ${o.unit}`,
                    }),
                  ],
                },
                o.name,
              )
          : L.jsx(
              'tr',
              {
                className: 'flex',
                children: L.jsx('td', {
                  className:
                    'text-sm text-right basis-full px-2 py-2 bg-sky-pale lg:text-base',
                  children: o.value,
                }),
              },
              o.name,
            ),
      ),
    ),
  });
}
function eO(n, a, l) {
  return {
    id: n.sum.id,
    food: [
      { name: 'Name', value: a.description },
      {
        name: 'Energy',
        value: Number(((a.foodNutrients[3].value * l) / 100).toFixed(0)),
        unit: 'kcal',
      },
      {
        name: 'Carbohydrate',
        value: ((a.foodNutrients[2].value * l) / 100).toFixed(2),
        unit: 'g',
      },
      {
        name: 'of which sugars',
        value: ((a.foodNutrients[8].value * l) / 100).toFixed(2),
        unit: 'g',
      },
      {
        name: 'Protein',
        value: ((a.foodNutrients[0].value * l) / 100).toFixed(2),
        unit: 'g',
      },
      {
        name: 'Fat',
        value: ((a.foodNutrients[1].value * l) / 100).toFixed(2),
        unit: 'g',
      },
      {
        name: 'Fiber',
        value: ((a.foodNutrients[9].value * l) / 100).toFixed(2),
        unit: 'g',
      },
      { name: 'Grams', value: l.toFixed(2), unit: 'g' },
    ],
  };
}
function tO(n) {
  return /^[A-Za-z\s]*$/.test(n);
}
function nO(n, a, l, s) {
  const o = JSON.parse(a);
  if (o.length === 0) {
    l(n);
    return;
  }
  l(n), s(o);
}
function aO(n, a) {
  const l = localStorage.getItem('lastFoodName'),
    s = localStorage.getItem('lastFoodList');
  l && s && nO(l, s, n, a);
}
function iO(n, a) {
  localStorage.setItem('lastFoodName', n),
    localStorage.setItem('lastFoodList', JSON.stringify(a));
}
function lO(n, a, l, s) {
  a(n), l(!0), s(!1);
}
function rO(n, a, l) {
  l(n), a(!1);
}
function x1(n, a) {
  const l = setTimeout(() => n(!a), 3e3);
  return () => clearTimeout(l);
}
function sO(n, a) {
  n(5e3), a('Cannot set grams over 5000');
}
function uO(n, a) {
  n(0), a('Cannot set grams below 0');
}
function oO(n, a) {
  if (n) JSON.parse(n) && a(!1);
  else return;
}
function cO(n, a) {
  n([]),
    a(''),
    localStorage.setItem('lastFoodName', ''),
    localStorage.setItem('lastFoodList', '');
}
function fO(n) {
  function a() {
    (n.current = window.innerHeight * 0.01),
      document.documentElement.style.setProperty('--vh', `${n.current}px`);
  }
  return (
    window.addEventListener('resize', a),
    a(),
    () => window.removeEventListener('resize', a)
  );
}
function dO() {
  const n = Jw((s) => s.sum),
    [a] = E.useContext(Mn),
    l = E.useRef(window.innerHeight * 0.01);
  return (
    E.useEffect(() => {
      fO(l);
    }, []),
    L.jsxs('table', {
      className: `fixed w-60 top-0 z-20 h-screen overflow-hidden transition-all ease-out duration-300 delay-100 bg-sunrise-soft lg:w-80 motion-reduce:transition-none ${a ? '-left-0' : '-left-80'}`,
      children: [L.jsx(Fw, { data: n }), L.jsx(Iw, { data: n })],
    })
  );
}
function Rn({
  children: n,
  callback: a,
  aria: l,
  type: s,
  myStyle: o,
  tabIndex: f,
}) {
  return L.jsx('button', {
    className: `${o} rounded-full transition-all cursor-pointer hover:shadow-custom focus:shadow-custom motion-reduce:transition-none`,
    onClick: () => a(),
    'aria-label': l,
    type: s,
    tabIndex: f,
    children: n,
  });
}
var It = ((n) => (
  (n.button = 'button'), (n.submit = 'submit'), (n.reset = 'reset'), n
))(It || {});
function hO() {
  const [n, a] = E.useContext(Mn);
  return L.jsxs(L.Fragment, {
    children: [
      L.jsx('div', {
        className: `fixed top-0 w-full h-screen text-right z-20 transition-all ease-out duration-700 delay-300 bg-neutral-900/70 motion-reduce:transition-none ${n ? 'left-0' : '-left-full'}`,
        children: L.jsx(Rn, {
          tabIndex: n ? 0 : -1,
          callback: () => a(!1),
          aria: 'Close calculator',
          type: It.button,
          myStyle:
            'mt-8 mr-4 text-3xl text-sunrise-pale rounded-full sm:mr-12 sm:text-4xl lg:mr-16',
          children: L.jsx(b1, {}),
        }),
      }),
      L.jsx(dO, {}),
    ],
  });
}
const mO = 'FOOD AND NUTRIENTS';
function pO() {
  const [n, a] = E.useContext(Mn),
    [l] = E.useState(window.innerWidth);
  return L.jsxs('nav', {
    className:
      'fixed bottom-0 w-full h-16 flex justify-around items-center bg-sunrise-soft shadow-custom z-10 lg:h-20 lg:shadow-none lg:justify-center lg:static',
    children: [
      L.jsx('h1', {
        className: 'font-secondary text-lg sm:text-2xl lg:text-3xl',
        children: mO,
      }),
      L.jsx(Rn, {
        tabIndex: n ? -1 : 0,
        callback: () => a(!n),
        aria: 'Open calculator',
        type: It.button,
        myStyle:
          'p-3 text-sm bg-lavender-light hover:bg-lavender-bright focus:bg-lavender-bright hover:-translate-y-0.5 sm:text-base lg:absolute lg:right-12 lg:p-primary lg:bg-sky-light lg:focus:bg-sky-bright lg:hover:bg-sky-bright',
        children: l >= 1024 ? 'Open calculator' : L.jsx(Zw, {}),
      }),
    ],
  });
}
function yO({ children: n }) {
  const a = E.useRef(null);
  return (
    a.current || (a.current = document.createElement('div')),
    E.useEffect(() => {
      const l = document.getElementById('modal');
      if (!l || !a.current) return;
      l.appendChild(a.current),
        (() => {
          a.current && l.removeChild(a.current);
        })();
    }, []),
    DT.createPortal(L.jsx(L.Fragment, { children: n }), a.current)
  );
}
const gO =
    'Data provided by: U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, 2019. Link:',
  T1 = 'fdc.nal.usda.gov',
  vO = `https://${T1}/`;
function bO({ showModal: n, setShowModal: a }) {
  function l() {
    a(!n), localStorage.setItem('modal', 'true');
  }
  return L.jsx('div', {
    className:
      'fixed w-full h-full flex justify-center items-center bg-neutral-900/70 z-30',
    children: L.jsxs('div', {
      className:
        'relative flex bg-sunrise-soft px-8 py-4 rounded-primary max-w-xs lg:max-w-lg',
      children: [
        L.jsxs('p', {
          className: 'basis-5/6',
          children: [
            gO,
            L.jsx('a', {
              className: 'ml-2 underline',
              href: vO,
              target: '_blank',
              rel: 'noopener noreferrer',
              children: T1,
            }),
          ],
        }),
        L.jsx(Rn, {
          tabIndex: 0,
          callback: l,
          aria: 'Close modal',
          type: It.button,
          myStyle: 'absolute top-4 right-4 text-3xl hover:bg-lavender-bright',
          children: L.jsx(b1, {}),
        }),
      ],
    }),
  });
}
function SO() {
  const [n, a] = E.useState(!0),
    l = localStorage.getItem('modal');
  return (
    E.useEffect(() => {
      oO(l, a);
    }, [l]),
    n
      ? L.jsx(yO, { children: L.jsx(bO, { showModal: n, setShowModal: a }) })
      : null
  );
}
function xO({ children: n }) {
  return L.jsxs('div', {
    className:
      'w-full min-h-screen font-primary text-slate-900 flex flex-col items-center bg-sunrise-soft',
    children: [
      L.jsx(pO, {}),
      L.jsx(SO, {}),
      L.jsx('div', {
        className: 'w-full mt-4 p-4 sm:p-0 sm:w-110',
        children: n,
      }),
      L.jsx(hO, {}),
    ],
  });
}
function E1({ isVisible: n, text: a }) {
  return L.jsx('div', {
    className: `fixed left-1/2 -translate-x-1/2 text-center bg-sky-light text-sm max-w px-4 py-2 rounded-primary transition-all duration-500 lg:text-base motion-reduce:transition-none ${n ? 'bottom-20' : '-bottom-16'}`,
    children: a,
  });
}
const TO = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  EO = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
  };
function A1({ children: n }) {
  const a = y1();
  return L.jsx(Pw.div, {
    variants: a ? EO : TO,
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    transition: a ? { duration: 0 } : { duration: 0.3 },
    children: n,
  });
}
const AO = [1, 5, 10, 100],
  RO = 'Add to Calculator',
  DO = 'Go Back',
  wO = 'Name',
  OO = (n) => `Amount per ${n}g`,
  CO = 'unit',
  MO = 'Set value that changes grams:',
  _O = 'Decrease grams',
  zO = 'Increase grams';
function NO({ inputValue: n, foodInfo: a }) {
  return L.jsxs('table', {
    className: 'w-full',
    children: [
      L.jsx('thead', {
        className: 'text-base bg-sky-light sm:text-lg lg:text-xl',
        children: L.jsxs('tr', {
          children: [
            L.jsx('th', {
              className: 'text-left pl-4 py-2 rounded-tl-primary',
              children: wO,
            }),
            L.jsx('th', {
              className: 'text-right px-4 py-2 sm:py-2',
              children: OO(n),
            }),
            L.jsx('th', {
              className: 'text-right pr-4 py-2 rounded-tr-primary',
              children: CO,
            }),
          ],
        }),
      }),
      L.jsx('tbody', {
        className: 'text-sm sm:text-base lg:text-lg',
        children: a.food.map((l) =>
          l.name === 'Name' || l.name === 'Grams'
            ? ''
            : l.name === 'Fiber'
              ? L.jsxs(
                  'tr',
                  {
                    className: 'even:bg-sky-light',
                    children: [
                      L.jsx('td', {
                        className: 'text-left pl-4 py-2 rounded-bl-primary',
                        children: l.name,
                      }),
                      L.jsx('td', {
                        className: 'text-right px-4 py-2 sm:p-primary',
                        children: l.value,
                      }),
                      L.jsx('td', {
                        className: 'text-right pr-4 py-1 rounded-br-primary',
                        children: l.unit,
                      }),
                    ],
                  },
                  l.name,
                )
              : L.jsxs(
                  'tr',
                  {
                    className: 'even:bg-sky-light',
                    children: [
                      L.jsx('td', {
                        className: 'text-left pl-4 py-2',
                        children: l.name,
                      }),
                      L.jsx('td', {
                        className: 'text-right px-4 py-2',
                        children: l.value,
                      }),
                      L.jsx('td', {
                        className: 'text-right pr-4 py-2',
                        children: l.unit,
                      }),
                    ],
                  },
                  l.name,
                ),
        ),
      }),
    ],
  });
}
function jO({ inputValue: n, setGrams: a }) {
  const [l] = E.useContext(Mn),
    [s, o] = E.useState(1);
  return L.jsxs('div', {
    children: [
      L.jsx('h3', {
        className: 'text-base text-center my-2 lg:text-lg',
        children: 'Grams:',
      }),
      L.jsxs('div', {
        className: 'flex justify-center items-center',
        children: [
          L.jsx(Rn, {
            tabIndex: l ? -1 : 0,
            callback: () => a(n - s),
            aria: _O,
            type: It.submit,
            myStyle:
              'basis-12 h-10 bg-sky-light text-xl hover:bg-sky-bright hover:-translate-y-0.5 focus:bg-sky-bright motion-reduce:transition-none lg:w-12 lg:h-12 lg:text-2xl',
            children: '-',
          }),
          L.jsx('div', { className: 'basis-12 text-center', children: n }),
          L.jsx(Rn, {
            tabIndex: l ? -1 : 0,
            callback: () => a(n + s),
            aria: zO,
            type: It.submit,
            myStyle:
              'basis-12 h-10 bg-sky-light text-xl hover:bg-sky-bright hover:-translate-y-0.5 focus:bg-sky-bright motion-reduce:transition-none lg:w-12 lg:h-12 lg:text-2xl',
            children: '+',
          }),
        ],
      }),
      L.jsx('h3', {
        className: 'text-base text-center my-2 lg:text-lg',
        children: MO,
      }),
      L.jsx('ul', {
        className: 'flex justify-between items-center',
        children: AO.map((f) =>
          L.jsx(
            'li',
            {
              children: L.jsx(Rn, {
                tabIndex: l ? -1 : 0,
                callback: () => {
                  o(f);
                },
                aria: `Set value that changes grams to ${f}`,
                type: It.submit,
                myStyle: `w-10 h-10 text-sm bg-sky-light transition-all hover:bg-sky-bright hover:shadow-custom hover:-translate-y-0.5 focus:bg-sky-bright motion-reduce:transition-none sm:text-base lg:w-12 lg:h-12 lg:text-lg ${s === f ? 'bg-sky-bright' : ''}`,
                children: f,
              }),
            },
            f,
          ),
        ),
      }),
    ],
  });
}
function VO(n) {
  return sr({
    tag: 'svg',
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z',
        },
        child: [],
      },
    ],
  })(n);
}
function UO(n) {
  return sr({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M8 7V11L2 6L8 1V5H13C17.4183 5 21 8.58172 21 13C21 17.4183 17.4183 21 13 21H4V19H13C16.3137 19 19 16.3137 19 13C19 9.68629 16.3137 7 13 7H8Z',
        },
        child: [],
      },
    ],
  })(n);
}
function LO({
  foodInfo: n,
  setShowNotification: a,
  setNotificationMessage: l,
  name: s,
  showNotification: o,
}) {
  const [f] = E.useContext(Mn),
    d = S1();
  function m() {
    d(lE(n)), l(`${s} has been added to the calculator`), a(!o);
  }
  return L.jsxs('div', {
    className: 'flex justify-between mt-4',
    children: [
      L.jsxs(Rn, {
        tabIndex: f ? -1 : 0,
        callback: m,
        aria: `Add ${s} to calculator`,
        type: It.submit,
        myStyle:
          'basis-7/12 p-primary text-sm flex items-center justify-center bg-lavender-light hover:bg-lavender-bright hover:shadow-custom hover:-translate-y-0.5 focus:bg-lavender-bright sm:text-base',
        children: [
          L.jsx('span', { className: 'mx-1', children: RO }),
          L.jsx(VO, {}),
        ],
      }),
      L.jsxs(au, {
        tabIndex: f ? -1 : 0,
        to: '/',
        className:
          'basis-4/12 p-primary text-sm flex items-center justify-center rounded-full bg-sunshine-light transition-all hover:bg-sunshine-bright hover:shadow-custom hover:-translate-y-0.5 focus:bg-sunshine-bright sm:text-base',
        children: [
          L.jsx('span', { className: 'mx-1', children: DO }),
          L.jsx(UO, {}),
        ],
      }),
    ],
  });
}
function BO() {
  const [n, a] = E.useState(!1),
    [l, s] = E.useState(100),
    f = Cn().state,
    d = Ov((v) => v),
    [m, h] = E.useState('');
  function p(v) {
    if (v > 5e3) {
      sO(s, h), a(!n);
      return;
    }
    if (v < 0) {
      uO(s, h), a(!n);
      return;
    }
    s(v);
  }
  E.useEffect(() => {
    n && x1(a, n);
  }, [n]);
  const g = eO(d, f, l);
  return L.jsxs(A1, {
    children: [
      L.jsx('h2', {
        className:
          'text-center font-secondary text-lg pb-4 sm:text-xl lg:text-2xl',
        children: f.description,
      }),
      L.jsx(NO, { inputValue: l, foodInfo: g }),
      L.jsx(jO, { inputValue: l, setGrams: p }),
      L.jsx(LO, {
        foodInfo: g,
        setNotificationMessage: h,
        setShowNotification: a,
        name: f.description,
        showNotification: n,
      }),
      L.jsx(E1, { isVisible: n, text: m }),
    ],
  });
}
const HO = 'XACzP2nhUCT36C7NxU6s3T57yBsa5heaPgIozH1s',
  PO = 'https://api.nal.usda.gov';
function qO(n) {
  const [a, l] = E.useState([]),
    [s, o] = E.useState('unloaded'),
    [f, d] = E.useState(''),
    m = E.useRef(0);
  return (
    E.useEffect(() => {
      if (!tO(n)) {
        o('error'), d('Only letters and spaces are allowed');
        return;
      }
      if (n.length < 3) {
        o('error'), d('Enter at least 3 characters'), l([]);
        return;
      }
      const h = localStorage.getItem(n);
      if (h) {
        o('loading');
        const g = JSON.parse(h);
        if (g.length === 0) {
          l([]), o('error'), d('No food found');
          return;
        }
        l(g), o('loaded');
      } else p();
      async function p() {
        l([]), o('loading'), m.current++;
        const g = await fetch(
          `${PO}/fdc/v1/foods/search?query=${n}&dataType=Survey%20%28FNDDS%29&pageSize=10&pageNumber=1&sortBy=dataType.keyword&api_key=${HO}`,
        );
        if (!g.ok) {
          o('error'), d('Something went wrong'), m.current--;
          return;
        }
        const S = (await g.json()).foods;
        if (
          (localStorage.setItem(n, JSON.stringify(S)), l(S), S.length === 0)
        ) {
          o('error'), d('No food found'), m.current--;
          return;
        }
        o('loaded'), m.current--;
      }
    }, [n, m]),
    [{ food: a, status: s, counter: m.current, errorMessage: f }]
  );
}
function GO({ food: n, delay: a }) {
  const [l] = E.useContext(Mn);
  return L.jsx('li', {
    className: `w-full my-0.5 text-sm animate-fade-in ${a} rounded-md transition-all bg-sky-light sm:text-base lg:text-lg hover:bg-sky-bright hover:shadow-custom hover:-translate-y-0.5 focus:bg-sky-bright focus:shadow-custom first:rounded-t-primary last:rounded-b-primary motion-reduce:animate-none motion-reduce:transition-none`,
    children: L.jsx(au, {
      className: 'w-full block p-primary rounded-[inherit]',
      to: '/details',
      state: n,
      tabIndex: l ? -1 : 0,
      children: n.description,
    }),
  });
}
function YO() {
  return L.jsx('div', {
    className: 'w-full mt-16 text-center',
    children: L.jsx('div', {
      className:
        'w-12 h-12 border-4 border-sky-light border-b-transparent rounded-full inline-block animate-rotation motion-reduce:animate-none',
    }),
  });
}
const XO = ({ counter: n, isClicked: a, shouldReduceMotion: l }) =>
    n && a && !l,
  kO = [
    '[animation-delay:0.1s]',
    '[animation-delay:0.2s]',
    '[animation-delay:0.3s]',
    '[animation-delay:0.4s]',
    '[animation-delay:0.5s]',
    '[animation-delay:0.6s]',
    '[animation-delay:0.7s]',
    '[animation-delay:0.8s]',
    '[animation-delay:0.9s]',
    '[animation-delay:1.0s]',
  ],
  KO = 'Food Name',
  QO = 'Search Food',
  ZO = 'Clear Form',
  FO = 'Clear',
  $O = 'Check';
function JO({ foods: n, counter: a, isClicked: l }) {
  const s = y1();
  return XO({ counter: a, isClicked: l, shouldReduceMotion: s })
    ? L.jsx(YO, {})
    : L.jsx('ul', {
        className: 'w-full my-4 mb-20 lg:mb-0',
        children: n.map((o, f) =>
          L.jsx(GO, { food: o, delay: kO[f] }, o.fdcId),
        ),
      });
}
function WO({ inputValue: n, setInputValue: a, setIsClicked: l, setFoods: s }) {
  const [o] = E.useContext(Mn),
    f = E.useCallback(() => {
      l(!0);
    }, [l]);
  return L.jsxs('form', {
    className: 'w-full',
    onSubmit: (d) => {
      d.preventDefault(), f();
    },
    children: [
      L.jsxs('label', {
        htmlFor: 'food',
        className:
          'flex flex-col text-lg font-secondary sm:text-xl lg:text-2xl',
        children: [
          KO,
          L.jsx('input', {
            tabIndex: o ? -1 : 0,
            className:
              'bg-sky-light font-primary rounded-primary p-primary mt-2 text-sm transition-all placeholder:text-primary hover:bg-sky-bright hover:shadow-custom hover:-translate-y-0.5 focus:bg-sky-bright motion-reduce:transition-none sm:text-base lg:text-lg',
            type: 'text',
            id: 'food',
            placeholder: 'Search',
            value: n,
            onChange: (d) => a(d.target.value),
          }),
        ],
      }),
      L.jsxs('div', {
        className: 'w-full flex justify-between mt-4',
        children: [
          L.jsx(Rn, {
            tabIndex: o ? -1 : 0,
            callback: () => {},
            aria: QO,
            type: It.submit,
            myStyle:
              'basis-7/12 text-sm p-primary bg-lavender-light hover:bg-lavender-bright hover:-translate-y-0.5 focus:bg-lavender-bright sm:text-base',
            children: $O,
          }),
          L.jsx(Rn, {
            tabIndex: o ? -1 : 0,
            callback: () => cO(s, a),
            aria: ZO,
            type: It.reset,
            myStyle:
              'basis-4/12 text-sm p-primary bg-sunshine-light hover:bg-sunshine-bright hover:-translate-y-0.5 focus:bg-sunshine-bright sm:text-base',
            children: FO,
          }),
        ],
      }),
    ],
  });
}
function IO() {
  const [n, a] = E.useState(''),
    [l, s] = E.useState(''),
    [o, f] = E.useState(!1),
    [d, m] = E.useState(!1),
    [h, p] = E.useState([]),
    [g] = qO(n),
    v = E.useCallback(() => {
      iO(n, g.food),
        g.status === 'error' && lO(g.errorMessage, s, f, m),
        g.status === 'loaded' && rO(g.food, m, p);
    }, [g.errorMessage, g.food, g.status, n]);
  return (
    E.useEffect(() => {
      g.counter === 0 && d && v();
    }, [v, g.counter, d]),
    E.useEffect(() => {
      o && x1(f, o);
    }, [o]),
    E.useEffect(() => {
      aO(a, p);
    }, []),
    L.jsxs(A1, {
      children: [
        L.jsx(WO, {
          inputValue: n,
          setInputValue: a,
          setIsClicked: m,
          setFoods: p,
        }),
        L.jsx(JO, { foods: h, counter: g.counter, isClicked: d }),
        L.jsx(E1, { isVisible: o, text: l }),
      ],
    })
  );
}
function eC() {
  const n = Cn();
  return L.jsx(xO, {
    children: L.jsx(bE, {
      mode: 'wait',
      children: L.jsxs(
        Kx,
        {
          location: n,
          children: [
            L.jsx(Ic, { path: '/details', element: L.jsx(BO, {}) }),
            L.jsx(Ic, { path: '/', element: L.jsx(IO, {}) }),
          ],
        },
        n.pathname,
      ),
    }),
  });
}
const tC = $2(qv);
function nC() {
  const n = E.useState(!1);
  return L.jsx(qT, {
    store: qv,
    children: L.jsx(Gv, {
      loading: null,
      persistor: tC,
      children: L.jsx(yT, {
        children: L.jsx(Mn.Provider, { value: n, children: L.jsx(eC, {}) }),
      }),
    }),
  });
}
const uv = document.getElementById('root');
uv
  ? tx.createRoot(uv).render(L.jsx(E.StrictMode, { children: L.jsx(nC, {}) }))
  : console.error('Root element not found');
