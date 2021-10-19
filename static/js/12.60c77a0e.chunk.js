(this.webpackJsonpreact_imo = this.webpackJsonpreact_imo || []).push([
  [12],
  {
    608: function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
      "undefined" != typeof navigator &&
        ((root = window || {}),
        (factory = function (window) {
          "use strict";
          var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            initialDefaultFrame = -999999,
            subframeEnabled = !0,
            idPrefix = "",
            expressionsPlugin,
            isSafari = /^((?!chrome|android).)*safari/i.test(
              navigator.userAgent
            ),
            cachedColors = {},
            bmRnd,
            bmPow = Math.pow,
            bmSqrt = Math.sqrt,
            bmFloor = Math.floor,
            bmMax = Math.max,
            bmMin = Math.min,
            BMMath = {};
          function ProjectInterface() {
            return {};
          }
          !(function () {
            for (
              var t = [
                  "abs",
                  "acos",
                  "acosh",
                  "asin",
                  "asinh",
                  "atan",
                  "atanh",
                  "atan2",
                  "ceil",
                  "cbrt",
                  "expm1",
                  "clz32",
                  "cos",
                  "cosh",
                  "exp",
                  "floor",
                  "fround",
                  "hypot",
                  "imul",
                  "log",
                  "log1p",
                  "log2",
                  "log10",
                  "max",
                  "min",
                  "pow",
                  "random",
                  "round",
                  "sign",
                  "sin",
                  "sinh",
                  "sqrt",
                  "tan",
                  "tanh",
                  "trunc",
                  "E",
                  "LN10",
                  "LN2",
                  "LOG10E",
                  "LOG2E",
                  "PI",
                  "SQRT1_2",
                  "SQRT2",
                ],
                e = t.length,
                r = 0;
              r < e;
              r += 1
            )
              BMMath[t[r]] = Math[t[r]];
          })(),
            (BMMath.random = Math.random),
            (BMMath.abs = function (t) {
              if ("object" == typeof t && t.length) {
                for (
                  var e = createSizedArray(t.length), r = t.length, i = 0;
                  i < r;
                  i += 1
                )
                  e[i] = Math.abs(t[i]);
                return e;
              }
              return Math.abs(t);
            });
          var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = 0.5519;
          function roundValues(t) {
            bmRnd = t
              ? Math.round
              : function (t) {
                  return t;
                };
          }
          function styleDiv(t) {
            (t.style.position = "absolute"),
              (t.style.top = 0),
              (t.style.left = 0),
              (t.style.display = "block"),
              (t.style.transformOrigin = "0 0"),
              (t.style.webkitTransformOrigin = "0 0"),
              (t.style.backfaceVisibility = "visible"),
              (t.style.webkitBackfaceVisibility = "visible"),
              (t.style.transformStyle = "preserve-3d"),
              (t.style.webkitTransformStyle = "preserve-3d"),
              (t.style.mozTransformStyle = "preserve-3d");
          }
          function BMEnterFrameEvent(t, e, r, i) {
            (this.type = t),
              (this.currentTime = e),
              (this.totalTime = r),
              (this.direction = i < 0 ? -1 : 1);
          }
          function BMCompleteEvent(t, e) {
            (this.type = t), (this.direction = e < 0 ? -1 : 1);
          }
          function BMCompleteLoopEvent(t, e, r, i) {
            (this.type = t),
              (this.currentLoop = r),
              (this.totalLoops = e),
              (this.direction = i < 0 ? -1 : 1);
          }
          function BMSegmentStartEvent(t, e, r) {
            (this.type = t), (this.firstFrame = e), (this.totalFrames = r);
          }
          function BMDestroyEvent(t, e) {
            (this.type = t), (this.target = e);
          }
          function BMRenderFrameErrorEvent(t, e) {
            (this.type = "renderFrameError"),
              (this.nativeError = t),
              (this.currentTime = e);
          }
          function BMConfigErrorEvent(t) {
            (this.type = "configError"), (this.nativeError = t);
          }
          function BMAnimationConfigErrorEvent(t, e) {
            (this.type = t), (this.nativeError = e);
          }
          roundValues(!1);
          var createElementID =
              ((E = 0),
              function () {
                return idPrefix + "__lottie_element_" + (E += 1);
              }),
            E;
          function HSVtoRGB(t, e, r) {
            var i,
              s,
              a,
              n,
              o = r * (1 - e),
              h = r * (1 - (t = 6 * t - (n = Math.floor(6 * t))) * e),
              l = r * (1 - (1 - t) * e);
            switch (n % 6) {
              case 0:
                (i = r), (s = l), (a = o);
                break;
              case 1:
                (i = h), (s = r), (a = o);
                break;
              case 2:
                (i = o), (s = r), (a = l);
                break;
              case 3:
                (i = o), (s = h), (a = r);
                break;
              case 4:
                (i = l), (s = o), (a = r);
                break;
              case 5:
                (i = r), (s = o), (a = h);
            }
            return [i, s, a];
          }
          function RGBtoHSV(t, e, r) {
            var i,
              s = Math.max(t, e, r),
              a = Math.min(t, e, r),
              n = s - a,
              o = 0 === s ? 0 : n / s,
              h = s / 255;
            switch (s) {
              case a:
                i = 0;
                break;
              case t:
                (i = e - r + n * (e < r ? 6 : 0)), (i /= 6 * n);
                break;
              case e:
                (i = r - t + 2 * n), (i /= 6 * n);
                break;
              case r:
                (i = t - e + 4 * n), (i /= 6 * n);
            }
            return [i, o, h];
          }
          function addSaturationToRGB(t, e) {
            t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return (
              (t[1] += e),
              1 < t[1] ? (t[1] = 1) : t[1] <= 0 && (t[1] = 0),
              HSVtoRGB(t[0], t[1], t[2])
            );
          }
          function addBrightnessToRGB(t, e) {
            t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return (
              (t[2] += e),
              1 < t[2] ? (t[2] = 1) : t[2] < 0 && (t[2] = 0),
              HSVtoRGB(t[0], t[1], t[2])
            );
          }
          function addHueToRGB(t, e) {
            t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return (
              (t[0] += e / 360),
              1 < t[0] ? --t[0] : t[0] < 0 && (t[0] += 1),
              HSVtoRGB(t[0], t[1], t[2])
            );
          }
          var rgbToHex = (function () {
            for (var t, i = [], e = 0; e < 256; e += 1)
              (t = e.toString(16)), (i[e] = 1 === t.length ? "0" + t : t);
            return function (t, e, r) {
              return (
                "#" +
                i[(t = t < 0 ? 0 : t)] +
                i[(e = e < 0 ? 0 : e)] +
                i[(r = r < 0 ? 0 : r)]
              );
            };
          })();
          function BaseEvent() {}
          BaseEvent.prototype = {
            triggerEvent: function (t, e) {
              if (this._cbs[t])
                for (var r = this._cbs[t], i = 0; i < r.length; i += 1) r[i](e);
            },
            addEventListener: function (t, e) {
              return (
                this._cbs[t] || (this._cbs[t] = []),
                this._cbs[t].push(e),
                function () {
                  this.removeEventListener(t, e);
                }.bind(this)
              );
            },
            removeEventListener: function (t, e) {
              if (e) {
                if (this._cbs[t]) {
                  for (var r = 0, i = this._cbs[t].length; r < i; )
                    this._cbs[t][r] === e &&
                      (this._cbs[t].splice(r, 1), --r, --i),
                      (r += 1);
                  this._cbs[t].length || (this._cbs[t] = null);
                }
              } else this._cbs[t] = null;
            },
          };
          var createTypedArray =
            "function" == typeof Uint8ClampedArray &&
            "function" == typeof Float32Array
              ? function (t, e) {
                  return "float32" === t
                    ? new Float32Array(e)
                    : "int16" === t
                    ? new Int16Array(e)
                    : "uint8c" === t
                    ? new Uint8ClampedArray(e)
                    : wa(t, e);
                }
              : wa;
          function wa(t, e) {
            var r,
              i = 0,
              s = [];
            switch (t) {
              case "int16":
              case "uint8c":
                r = 1;
                break;
              default:
                r = 1.1;
            }
            for (i = 0; i < e; i += 1) s.push(r);
            return s;
          }
          function createSizedArray(t) {
            return Array.apply(null, { length: t });
          }
          function createNS(t) {
            return document.createElementNS(svgNS, t);
          }
          function createTag(t) {
            return document.createElement(t);
          }
          function DynamicPropertyContainer() {}
          DynamicPropertyContainer.prototype = {
            addDynamicProperty: function (t) {
              -1 === this.dynamicProperties.indexOf(t) &&
                (this.dynamicProperties.push(t),
                this.container.addDynamicProperty(this),
                (this._isAnimated = !0));
            },
            iterateDynamicProperties: function () {
              this._mdf = !1;
              for (var t = this.dynamicProperties.length, e = 0; e < t; e += 1)
                this.dynamicProperties[e].getValue(),
                  this.dynamicProperties[e]._mdf && (this._mdf = !0);
            },
            initDynamicPropertyContainer: function (t) {
              (this.container = t),
                (this.dynamicProperties = []),
                (this._mdf = !1),
                (this._isAnimated = !1);
            },
          };
          var getBlendMode =
              ((La = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity",
              }),
              function (t) {
                return La[t] || "";
              }),
            lineCapEnum = { 1: "butt", 2: "round", 3: "square" },
            lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" },
            Matrix =
              ((Na = Math.cos),
              (Oa = Math.sin),
              (Pa = Math.tan),
              (Qa = Math.round),
              function () {
                (this.reset = Ra),
                  (this.rotate = Sa),
                  (this.rotateX = Ta),
                  (this.rotateY = Ua),
                  (this.rotateZ = Va),
                  (this.skew = Xa),
                  (this.skewFromAxis = Ya),
                  (this.shear = Wa),
                  (this.scale = Za),
                  (this.setTransform = $a),
                  (this.translate = _a),
                  (this.transform = a0),
                  (this.applyToPoint = f0),
                  (this.applyToX = g0),
                  (this.applyToY = h0),
                  (this.applyToZ = i0),
                  (this.applyToPointArray = n0),
                  (this.applyToTriplePoints = m0),
                  (this.applyToPointStringified = o0),
                  (this.toCSS = p0),
                  (this.to2dCSS = r0),
                  (this.clone = d0),
                  (this.cloneFromProps = e0),
                  (this.equals = c0),
                  (this.inversePoints = l0),
                  (this.inversePoint = k0),
                  (this.getInverseMatrix = j0),
                  (this._t = this.transform),
                  (this.isIdentity = b0),
                  (this._identity = !0),
                  (this._identityCalculated = !1),
                  (this.props = createTypedArray("float32", 16)),
                  this.reset();
              }),
            Na,
            Oa,
            Pa,
            Qa,
            La;
          function Ra() {
            return (
              (this.props[0] = 1),
              (this.props[1] = 0),
              (this.props[2] = 0),
              (this.props[3] = 0),
              (this.props[4] = 0),
              (this.props[5] = 1),
              (this.props[6] = 0),
              (this.props[7] = 0),
              (this.props[8] = 0),
              (this.props[9] = 0),
              (this.props[10] = 1),
              (this.props[11] = 0),
              (this.props[12] = 0),
              (this.props[13] = 0),
              (this.props[14] = 0),
              (this.props[15] = 1),
              this
            );
          }
          function Sa(t) {
            if (0 === t) return this;
            var e = Na(t),
              t = Oa(t);
            return this._t(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function Ta(t) {
            if (0 === t) return this;
            var e = Na(t),
              t = Oa(t);
            return this._t(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1);
          }
          function Ua(t) {
            if (0 === t) return this;
            var e = Na(t),
              t = Oa(t);
            return this._t(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1);
          }
          function Va(t) {
            if (0 === t) return this;
            var e = Na(t),
              t = Oa(t);
            return this._t(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function Wa(t, e) {
            return this._t(1, e, t, 1, 0, 0);
          }
          function Xa(t, e) {
            return this.shear(Pa(t), Pa(e));
          }
          function Ya(t, e) {
            var r = Na(e),
              e = Oa(e);
            return this._t(r, e, 0, 0, -e, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              ._t(1, 0, 0, 0, Pa(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              ._t(r, -e, 0, 0, e, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function Za(t, e, r) {
            return (
              r || 0 === r || (r = 1),
              1 === t && 1 === e && 1 === r
                ? this
                : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
            );
          }
          function $a(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) {
            return (
              (this.props[0] = t),
              (this.props[1] = e),
              (this.props[2] = r),
              (this.props[3] = i),
              (this.props[4] = s),
              (this.props[5] = a),
              (this.props[6] = n),
              (this.props[7] = o),
              (this.props[8] = h),
              (this.props[9] = l),
              (this.props[10] = p),
              (this.props[11] = m),
              (this.props[12] = f),
              (this.props[13] = c),
              (this.props[14] = d),
              (this.props[15] = u),
              this
            );
          }
          function _a(t, e, r) {
            return (
              (r = r || 0),
              0 !== t || 0 !== e || 0 !== r
                ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1)
                : this
            );
          }
          function a0(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) {
            var y = this.props;
            if (
              1 === t &&
              0 === e &&
              0 === r &&
              0 === i &&
              0 === s &&
              1 === a &&
              0 === n &&
              0 === o &&
              0 === h &&
              0 === l &&
              1 === p &&
              0 === m
            )
              return (
                (y[12] = y[12] * t + y[15] * f),
                (y[13] = y[13] * a + y[15] * c),
                (y[14] = y[14] * p + y[15] * d),
                (y[15] *= u),
                (this._identityCalculated = !1),
                this
              );
            var g = y[0],
              v = y[1],
              b = y[2],
              P = y[3],
              E = y[4],
              x = y[5],
              S = y[6],
              A = y[7],
              C = y[8],
              _ = y[9],
              T = y[10],
              k = y[11],
              D = y[12],
              M = y[13],
              F = y[14],
              w = y[15];
            return (
              (y[0] = g * t + v * s + b * h + P * f),
              (y[1] = g * e + v * a + b * l + P * c),
              (y[2] = g * r + v * n + b * p + P * d),
              (y[3] = g * i + v * o + b * m + P * u),
              (y[4] = E * t + x * s + S * h + A * f),
              (y[5] = E * e + x * a + S * l + A * c),
              (y[6] = E * r + x * n + S * p + A * d),
              (y[7] = E * i + x * o + S * m + A * u),
              (y[8] = C * t + _ * s + T * h + k * f),
              (y[9] = C * e + _ * a + T * l + k * c),
              (y[10] = C * r + _ * n + T * p + k * d),
              (y[11] = C * i + _ * o + T * m + k * u),
              (y[12] = D * t + M * s + F * h + w * f),
              (y[13] = D * e + M * a + F * l + w * c),
              (y[14] = D * r + M * n + F * p + w * d),
              (y[15] = D * i + M * o + F * m + w * u),
              (this._identityCalculated = !1),
              this
            );
          }
          function b0() {
            return (
              this._identityCalculated ||
                ((this._identity = !(
                  1 !== this.props[0] ||
                  0 !== this.props[1] ||
                  0 !== this.props[2] ||
                  0 !== this.props[3] ||
                  0 !== this.props[4] ||
                  1 !== this.props[5] ||
                  0 !== this.props[6] ||
                  0 !== this.props[7] ||
                  0 !== this.props[8] ||
                  0 !== this.props[9] ||
                  1 !== this.props[10] ||
                  0 !== this.props[11] ||
                  0 !== this.props[12] ||
                  0 !== this.props[13] ||
                  0 !== this.props[14] ||
                  1 !== this.props[15]
                )),
                (this._identityCalculated = !0)),
              this._identity
            );
          }
          function c0(t) {
            for (var e = 0; e < 16; ) {
              if (t.props[e] !== this.props[e]) return !1;
              e += 1;
            }
            return !0;
          }
          function d0(t) {
            for (var e = 0; e < 16; e += 1) t.props[e] = this.props[e];
            return t;
          }
          function e0(t) {
            for (var e = 0; e < 16; e += 1) this.props[e] = t[e];
          }
          function f0(t, e, r) {
            return {
              x:
                t * this.props[0] +
                e * this.props[4] +
                r * this.props[8] +
                this.props[12],
              y:
                t * this.props[1] +
                e * this.props[5] +
                r * this.props[9] +
                this.props[13],
              z:
                t * this.props[2] +
                e * this.props[6] +
                r * this.props[10] +
                this.props[14],
            };
          }
          function g0(t, e, r) {
            return (
              t * this.props[0] +
              e * this.props[4] +
              r * this.props[8] +
              this.props[12]
            );
          }
          function h0(t, e, r) {
            return (
              t * this.props[1] +
              e * this.props[5] +
              r * this.props[9] +
              this.props[13]
            );
          }
          function i0(t, e, r) {
            return (
              t * this.props[2] +
              e * this.props[6] +
              r * this.props[10] +
              this.props[14]
            );
          }
          function j0() {
            var t =
                this.props[0] * this.props[5] - this.props[1] * this.props[4],
              e = this.props[5] / t,
              r = -this.props[1] / t,
              i = -this.props[4] / t,
              s = this.props[0] / t,
              a =
                (this.props[4] * this.props[13] -
                  this.props[5] * this.props[12]) /
                t,
              n =
                -(
                  this.props[0] * this.props[13] -
                  this.props[1] * this.props[12]
                ) / t,
              t = new Matrix();
            return (
              (t.props[0] = e),
              (t.props[1] = r),
              (t.props[4] = i),
              (t.props[5] = s),
              (t.props[12] = a),
              (t.props[13] = n),
              t
            );
          }
          function k0(t) {
            return this.getInverseMatrix().applyToPointArray(
              t[0],
              t[1],
              t[2] || 0
            );
          }
          function l0(t) {
            for (var e = t.length, r = [], i = 0; i < e; i += 1)
              r[i] = k0(t[i]);
            return r;
          }
          function m0(t, e, r) {
            var i,
              s,
              a,
              n,
              o,
              h,
              l = createTypedArray("float32", 6);
            return (
              this.isIdentity()
                ? ((l[0] = t[0]),
                  (l[1] = t[1]),
                  (l[2] = e[0]),
                  (l[3] = e[1]),
                  (l[4] = r[0]),
                  (l[5] = r[1]))
                : ((i = this.props[0]),
                  (s = this.props[1]),
                  (a = this.props[4]),
                  (n = this.props[5]),
                  (o = this.props[12]),
                  (h = this.props[13]),
                  (l[0] = t[0] * i + t[1] * a + o),
                  (l[1] = t[0] * s + t[1] * n + h),
                  (l[2] = e[0] * i + e[1] * a + o),
                  (l[3] = e[0] * s + e[1] * n + h),
                  (l[4] = r[0] * i + r[1] * a + o),
                  (l[5] = r[0] * s + r[1] * n + h)),
              l
            );
          }
          function n0(t, e, r) {
            return this.isIdentity()
              ? [t, e, r]
              : [
                  t * this.props[0] +
                    e * this.props[4] +
                    r * this.props[8] +
                    this.props[12],
                  t * this.props[1] +
                    e * this.props[5] +
                    r * this.props[9] +
                    this.props[13],
                  t * this.props[2] +
                    e * this.props[6] +
                    r * this.props[10] +
                    this.props[14],
                ];
          }
          function o0(t, e) {
            if (this.isIdentity()) return t + "," + e;
            var r = this.props;
            return (
              Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 +
              "," +
              Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
            );
          }
          function p0() {
            for (var t = 0, e = this.props, r = "matrix3d("; t < 16; )
              (r += Qa(1e4 * e[t]) / 1e4),
                (r += 15 === t ? ")" : ","),
                (t += 1);
            return r;
          }
          function q0(t) {
            return (t < 1e-6 && 0 < t) || (-1e-6 < t && t < 0)
              ? Qa(1e4 * t) / 1e4
              : t;
          }
          function r0() {
            var t = this.props;
            return (
              "matrix(" +
              q0(t[0]) +
              "," +
              q0(t[1]) +
              "," +
              q0(t[4]) +
              "," +
              q0(t[5]) +
              "," +
              q0(t[12]) +
              "," +
              q0(t[13]) +
              ")"
            );
          }
          !(function (a, n) {
            var o = this,
              h = 256,
              l = n.pow(h, 6),
              p = n.pow(2, 52),
              m = 2 * p,
              f = 255;
            function c(t) {
              var e,
                r = t.length,
                n = this,
                i = 0,
                s = (n.i = n.j = 0),
                a = (n.S = []);
              for (r || (t = [r++]); i < h; ) a[i] = i++;
              for (i = 0; i < h; i++)
                (a[i] = a[(s = f & (s + t[i % r] + (e = a[i])))]), (a[s] = e);
              n.g = function (t) {
                for (var e, r = 0, i = n.i, s = n.j, a = n.S; t--; )
                  (e = a[(i = f & (i + 1))]),
                    (r =
                      r * h +
                      a[f & ((a[i] = a[(s = f & (s + e))]) + (a[s] = e))]);
                return (n.i = i), (n.j = s), r;
              };
            }
            function d(t, e) {
              return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
            }
            function u(t, e) {
              for (var r, i = t + "", s = 0; s < i.length; )
                e[f & s] = f & ((r ^= 19 * e[f & s]) + i.charCodeAt(s++));
              return y(e);
            }
            function y(t) {
              return String.fromCharCode.apply(0, t);
            }
            (n.seedrandom = function (t, e, r) {
              var i = [],
                t = u(
                  (function t(e, r) {
                    var i,
                      s = [],
                      a = typeof e;
                    if (r && "object" == a)
                      for (i in e)
                        try {
                          s.push(t(e[i], r - 1));
                        } catch (t) {}
                    return s.length ? s : "string" == a ? e : e + "\0";
                  })(
                    (e = !0 === e ? { entropy: !0 } : e || {}).entropy
                      ? [t, y(a)]
                      : null === t
                      ? (function () {
                          try {
                            var e = new Uint8Array(h);
                            return (
                              (o.crypto || o.msCrypto).getRandomValues(e), y(e)
                            );
                          } catch (t) {
                            (e = o.navigator), (e = e && e.plugins);
                            return [+new Date(), o, e, o.screen, y(a)];
                          }
                        })()
                      : t,
                    3
                  ),
                  i
                ),
                s = new c(i),
                i = function () {
                  for (var t = s.g(6), e = l, r = 0; t < p; )
                    (t = (t + r) * h), (e *= h), (r = s.g(1));
                  for (; m <= t; ) (t /= 2), (e /= 2), (r >>>= 1);
                  return (t + r) / e;
                };
              return (
                (i.int32 = function () {
                  return 0 | s.g(4);
                }),
                (i.quick = function () {
                  return s.g(4) / 4294967296;
                }),
                (i.double = i),
                u(y(s.S), a),
                (
                  e.pass ||
                  r ||
                  function (t, e, r, i) {
                    return (
                      i &&
                        (i.S && d(i, s),
                        (t.state = function () {
                          return d(s, {});
                        })),
                      r ? ((n.random = t), e) : t
                    );
                  }
                )(i, t, "global" in e ? e.global : this == n, e.state)
              );
            }),
              u(n.random(), a);
          })([], BMMath);
          var BezierFactory =
              ((Qc = {
                getBezierEasing: function (t, e, r, i, s) {
                  s =
                    s ||
                    ("bez_" + t + "_" + e + "_" + r + "_" + i).replace(
                      /\./g,
                      "p"
                    );
                  if (Rc[s]) return Rc[s];
                  i = new Zc([t, e, r, i]);
                  return (Rc[s] = i);
                },
              }),
              (Rc = {}),
              (Tc = "function" == typeof Float32Array),
              (Zc.prototype = {
                get: function (t) {
                  var e = this._p[0],
                    r = this._p[1],
                    i = this._p[2],
                    s = this._p[3];
                  return (
                    this._precomputed || this._precompute(),
                    e === r && i === s
                      ? t
                      : 0 === t
                      ? 0
                      : 1 === t
                      ? 1
                      : Xc(this._getTForX(t), r, s)
                  );
                },
                _precompute: function () {
                  var t = this._p[0],
                    e = this._p[1],
                    r = this._p[2],
                    i = this._p[3];
                  (this._precomputed = !0),
                    (t === e && r === i) || this._calcSampleValues();
                },
                _calcSampleValues: function () {
                  for (var t = this._p[0], e = this._p[2], r = 0; r < 11; ++r)
                    this._mSampleValues[r] = Xc(0.1 * r, t, e);
                },
                _getTForX: function (t) {
                  for (
                    var e = this._p[0],
                      r = this._p[2],
                      i = this._mSampleValues,
                      s = 0,
                      a = 1;
                    10 !== a && i[a] <= t;
                    ++a
                  )
                    s += 0.1;
                  var n = s + ((t - i[--a]) / (i[a + 1] - i[a])) * 0.1,
                    o = Yc(n, e, r);
                  return 0.001 <= o
                    ? (function (t, e, r, i) {
                        for (var s = 0; s < 4; ++s) {
                          var a = Yc(e, r, i);
                          if (0 === a) return e;
                          e -= (Xc(e, r, i) - t) / a;
                        }
                        return e;
                      })(t, n, e, r)
                    : 0 === o
                    ? n
                    : (function (t, e, r, i, s) {
                        for (
                          var a, n, o = 0;
                          0 < (a = Xc((n = e + (r - e) / 2), i, s) - t)
                            ? (r = n)
                            : (e = n),
                            1e-7 < Math.abs(a) && ++o < 10;

                        );
                        return n;
                      })(t, s, s + 0.1, e, r);
                },
              }),
              Qc),
            Qc,
            Rc,
            Tc;
          function Uc(t, e) {
            return 1 - 3 * e + 3 * t;
          }
          function Xc(t, e, r) {
            return ((Uc(e, r) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
          }
          function Yc(t, e, r) {
            return 3 * Uc(e, r) * t * t + 2 * (3 * r - 6 * e) * t + 3 * e;
          }
          function Zc(t) {
            (this._p = t),
              (this._mSampleValues = new (Tc ? Float32Array : Array)(11)),
              (this._precomputed = !1),
              (this.get = this.get.bind(this));
          }
          function extendPrototype(t, e) {
            for (var r, i = t.length, s = 0; s < i; s += 1)
              for (var a in (r = t[s].prototype))
                Object.prototype.hasOwnProperty.call(r, a) &&
                  (e.prototype[a] = r[a]);
          }
          function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e);
          }
          function createProxyFunction(t) {
            function e() {}
            return (e.prototype = t), e;
          }
          function bezFunction() {
            var _ = Math;
            function y(t, e, r, i, s, a) {
              e = t * i + e * s + r * a - s * i - a * t - r * e;
              return -0.001 < e && e < 0.001;
            }
            function p(t, e, r, i) {
              for (
                var s,
                  a,
                  n,
                  o,
                  h = defaultCurveSegments,
                  l = 0,
                  p = [],
                  m = [],
                  f = bezierLengthPool.newElement(),
                  c = r.length,
                  d = 0;
                d < h;
                d += 1
              ) {
                for (n = d / (h - 1), s = o = 0; s < c; s += 1)
                  (a =
                    bmPow(1 - n, 3) * t[s] +
                    3 * bmPow(1 - n, 2) * n * r[s] +
                    3 * (1 - n) * bmPow(n, 2) * i[s] +
                    bmPow(n, 3) * e[s]),
                    (p[s] = a),
                    null !== m[s] && (o += bmPow(p[s] - m[s], 2)),
                    (m[s] = p[s]);
                o && (l += o = bmSqrt(o)),
                  (f.percents[d] = n),
                  (f.lengths[d] = l);
              }
              return (f.addedLength = l), f;
            }
            function g(t) {
              (this.segmentLength = 0), (this.points = new Array(t));
            }
            function v(t, e) {
              (this.partialLength = t), (this.point = e);
            }
            var b,
              t =
                ((b = {}),
                function (t, e, r, i) {
                  var s = (
                    t[0] +
                    "_" +
                    t[1] +
                    "_" +
                    e[0] +
                    "_" +
                    e[1] +
                    "_" +
                    r[0] +
                    "_" +
                    r[1] +
                    "_" +
                    i[0] +
                    "_" +
                    i[1]
                  ).replace(/\./g, "p");
                  if (!b[s]) {
                    for (
                      var a,
                        n,
                        o,
                        h,
                        l,
                        p = defaultCurveSegments,
                        m = 0,
                        f = null,
                        c = new g(
                          (p =
                            2 === t.length &&
                            (t[0] !== e[0] || t[1] !== e[1]) &&
                            y(
                              t[0],
                              t[1],
                              e[0],
                              e[1],
                              t[0] + r[0],
                              t[1] + r[1]
                            ) &&
                            y(t[0], t[1], e[0], e[1], e[0] + i[0], e[1] + i[1])
                              ? 2
                              : p)
                        ),
                        d = r.length,
                        u = 0;
                      u < p;
                      u += 1
                    ) {
                      for (
                        l = createSizedArray(d), o = u / (p - 1), a = h = 0;
                        a < d;
                        a += 1
                      )
                        (n =
                          bmPow(1 - o, 3) * t[a] +
                          3 * bmPow(1 - o, 2) * o * (t[a] + r[a]) +
                          3 * (1 - o) * bmPow(o, 2) * (e[a] + i[a]) +
                          bmPow(o, 3) * e[a]),
                          (l[a] = n),
                          null !== f && (h += bmPow(l[a] - f[a], 2));
                      (m += h = bmSqrt(h)),
                        (c.points[u] = new v(h, l)),
                        (f = l);
                    }
                    (c.segmentLength = m), (b[s] = c);
                  }
                  return b[s];
                });
            function T(t, e) {
              var r = e.percents,
                i = e.lengths,
                s = r.length,
                a = bmFloor((s - 1) * t),
                n = t * e.addedLength,
                o = 0;
              if (a === s - 1 || 0 === a || n === i[a]) return r[a];
              for (var h = i[a] > n ? -1 : 1, l = !0; l; )
                if (
                  (i[a] <= n && i[a + 1] > n
                    ? ((o = (n - i[a]) / (i[a + 1] - i[a])), (l = !1))
                    : (a += h),
                  a < 0 || s - 1 <= a)
                ) {
                  if (a === s - 1) return r[a];
                  l = !1;
                }
              return r[a] + (r[a + 1] - r[a]) * o;
            }
            var k = createTypedArray("float32", 8);
            return {
              getSegmentsLength: function (t) {
                for (
                  var e = segmentsLengthPool.newElement(),
                    r = t.c,
                    i = t.v,
                    s = t.o,
                    a = t.i,
                    n = t._length,
                    o = e.lengths,
                    h = 0,
                    l = 0;
                  l < n - 1;
                  l += 1
                )
                  (o[l] = p(i[l], i[l + 1], s[l], a[l + 1])),
                    (h += o[l].addedLength);
                return (
                  r &&
                    n &&
                    ((o[l] = p(i[l], i[0], s[l], a[0])),
                    (h += o[l].addedLength)),
                  (e.totalLength = h),
                  e
                );
              },
              getNewSegment: function (t, e, r, i, s, a, n) {
                s < 0 ? (s = 0) : 1 < s && (s = 1);
                for (
                  var o = T(s, n),
                    s = T((a = 1 < a ? 1 : a), n),
                    h = t.length,
                    a = 1 - o,
                    n = 1 - s,
                    l = a * a * a,
                    p = o * a * a * 3,
                    m = o * o * a * 3,
                    f = o * o * o,
                    c = a * a * n,
                    d = o * a * n + a * o * n + a * a * s,
                    u = o * o * n + a * o * s + o * a * s,
                    y = o * o * s,
                    g = a * n * n,
                    v = o * n * n + a * s * n + a * n * s,
                    b = o * s * n + a * s * s + o * n * s,
                    P = o * s * s,
                    E = n * n * n,
                    x = s * n * n + n * s * n + n * n * s,
                    S = s * s * n + n * s * s + s * n * s,
                    A = s * s * s,
                    C = 0;
                  C < h;
                  C += 1
                )
                  (k[4 * C] =
                    _.round(1e3 * (l * t[C] + p * r[C] + m * i[C] + f * e[C])) /
                    1e3),
                    (k[4 * C + 1] =
                      _.round(
                        1e3 * (c * t[C] + d * r[C] + u * i[C] + y * e[C])
                      ) / 1e3),
                    (k[4 * C + 2] =
                      _.round(
                        1e3 * (g * t[C] + v * r[C] + b * i[C] + P * e[C])
                      ) / 1e3),
                    (k[4 * C + 3] =
                      _.round(
                        1e3 * (E * t[C] + x * r[C] + S * i[C] + A * e[C])
                      ) / 1e3);
                return k;
              },
              getPointInSegment: function (t, e, r, i, s, a) {
                (s = T(s, a)), (a = 1 - s);
                return [
                  _.round(
                    1e3 *
                      (a * a * a * t[0] +
                        (s * a * a + a * s * a + a * a * s) * r[0] +
                        (s * s * a + a * s * s + s * a * s) * i[0] +
                        s * s * s * e[0])
                  ) / 1e3,
                  _.round(
                    1e3 *
                      (a * a * a * t[1] +
                        (s * a * a + a * s * a + a * a * s) * r[1] +
                        (s * s * a + a * s * s + s * a * s) * i[1] +
                        s * s * s * e[1])
                  ) / 1e3,
                ];
              },
              buildBezierData: t,
              pointOnLine2D: y,
              pointOnLine3D: function (t, e, r, i, s, a, n, o, h) {
                if (0 === r && 0 === a && 0 === h) return y(t, e, i, s, n, o);
                var l = _.sqrt(
                    _.pow(i - t, 2) + _.pow(s - e, 2) + _.pow(a - r, 2)
                  ),
                  r = _.sqrt(
                    _.pow(n - t, 2) + _.pow(o - e, 2) + _.pow(h - r, 2)
                  ),
                  a = _.sqrt(
                    _.pow(n - i, 2) + _.pow(o - s, 2) + _.pow(h - a, 2)
                  );
                return (
                  -1e-4 <
                    (a =
                      r < l
                        ? a < l
                          ? l - r - a
                          : a - r - l
                        : r < a
                        ? a - r - l
                        : r - l - a) && a < 1e-4
                );
              },
            };
          }
          !(function () {
            for (
              var s = 0, t = ["ms", "moz", "webkit", "o"], e = 0;
              e < t.length && !window.requestAnimationFrame;
              ++e
            )
              (window.requestAnimationFrame =
                window[t[e] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[t[e] + "CancelAnimationFrame"] ||
                  window[t[e] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (t) {
                var e = new Date().getTime(),
                  r = Math.max(0, 16 - (e - s)),
                  i = setTimeout(function () {
                    t(e + r);
                  }, r);
                return (s = e + r), i;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (t) {
                  clearTimeout(t);
                });
          })();
          var bez = bezFunction();
          function dataFunctionManager() {
            function m(t, e, r) {
              for (var i, s, a, n = t.length, o = 0; o < n; o += 1)
                if ("ks" in (a = t[o]) && !a.completed) {
                  if (
                    ((a.completed = !0),
                    a.tt && (t[o - 1].td = a.tt),
                    a.hasMask)
                  )
                    for (
                      var h = a.masksProperties, l = h.length, p = 0;
                      p < l;
                      p += 1
                    )
                      if (h[p].pt.k.i) f(h[p].pt.k);
                      else
                        for (s = h[p].pt.k.length, i = 0; i < s; i += 1)
                          h[p].pt.k[i].s && f(h[p].pt.k[i].s[0]),
                            h[p].pt.k[i].e && f(h[p].pt.k[i].e[0]);
                  0 === a.ty
                    ? ((a.layers = (function (t, e) {
                        for (var r = 0, i = e.length; r < i; ) {
                          if (e[r].id === t)
                            return e[r].layers.__used
                              ? JSON.parse(JSON.stringify(e[r].layers))
                              : ((e[r].layers.__used = !0), e[r].layers);
                          r += 1;
                        }
                        return null;
                      })(a.refId, e)),
                      m(a.layers, e, r))
                    : 4 === a.ty
                    ? (function t(e) {
                        var r, i, s;
                        for (r = e.length - 1; 0 <= r; --r)
                          if ("sh" === e[r].ty)
                            if (e[r].ks.k.i) f(e[r].ks.k);
                            else
                              for (s = e[r].ks.k.length, i = 0; i < s; i += 1)
                                e[r].ks.k[i].s && f(e[r].ks.k[i].s[0]),
                                  e[r].ks.k[i].e && f(e[r].ks.k[i].e[0]);
                          else "gr" === e[r].ty && t(e[r].it);
                      })(a.shapes)
                    : 5 === a.ty &&
                      (0 !== (a = a).t.a.length ||
                        "m" in a.t.p ||
                        (a.singleShape = !0));
                }
            }
            function f(t) {
              for (var e = t.i.length, r = 0; r < e; r += 1)
                (t.i[r][0] += t.v[r][0]),
                  (t.i[r][1] += t.v[r][1]),
                  (t.o[r][0] += t.v[r][0]),
                  (t.o[r][1] += t.v[r][1]);
            }
            function o(t, e) {
              e = e ? e.split(".") : [100, 100, 100];
              return (
                t[0] > e[0] ||
                (!(e[0] > t[0]) &&
                  (t[1] > e[1] ||
                    (!(e[1] > t[1]) && (t[2] > e[2] || (e[2], t[2], 0)))))
              );
            }
            var i,
              s,
              h,
              a,
              r =
                ((a = [4, 4, 14]),
                function (t) {
                  if (o(a, t.v) && (u(t.layers), t.assets))
                    for (var e = t.assets.length, r = 0; r < e; r += 1)
                      t.assets[r].layers && u(t.assets[r].layers);
                }),
              n =
                ((h = [4, 7, 99]),
                function (t) {
                  if (t.chars && !o(h, t.v))
                    for (
                      var e, r, i, s, a = t.chars.length, n = 0;
                      n < a;
                      n += 1
                    )
                      if (t.chars[n].data && t.chars[n].data.shapes)
                        for (
                          r = (s = t.chars[n].data.shapes[0].it).length, e = 0;
                          e < r;
                          e += 1
                        )
                          (i = s[e].ks.k).__converted ||
                            (f(s[e].ks.k), (i.__converted = !0));
                }),
              l =
                ((s = [4, 1, 9]),
                function (t) {
                  if (o(s, t.v) && (d(t.layers), t.assets))
                    for (var e = t.assets.length, r = 0; r < e; r += 1)
                      t.assets[r].layers && d(t.assets[r].layers);
                }),
              p =
                ((i = [4, 4, 18]),
                function (t) {
                  if (o(i, t.v) && (c(t.layers), t.assets))
                    for (var e = t.assets.length, r = 0; r < e; r += 1)
                      t.assets[r].layers && c(t.assets[r].layers);
                });
            function c(t) {
              for (var e, r, i, s = t.length, a = 0; a < s; a += 1) {
                if ((e = t[a]).hasMask)
                  for (
                    var n = e.masksProperties, o = n.length, h = 0;
                    h < o;
                    h += 1
                  )
                    if (n[h].pt.k.i) n[h].pt.k.c = n[h].cl;
                    else
                      for (i = n[h].pt.k.length, r = 0; r < i; r += 1)
                        n[h].pt.k[r].s && (n[h].pt.k[r].s[0].c = n[h].cl),
                          n[h].pt.k[r].e && (n[h].pt.k[r].e[0].c = n[h].cl);
                4 === e.ty &&
                  (function t(e) {
                    for (var r, i, s = e.length - 1; 0 <= s; --s)
                      if ("sh" === e[s].ty)
                        if (e[s].ks.k.i) e[s].ks.k.c = e[s].closed;
                        else
                          for (i = e[s].ks.k.length, r = 0; r < i; r += 1)
                            e[s].ks.k[r].s &&
                              (e[s].ks.k[r].s[0].c = e[s].closed),
                              e[s].ks.k[r].e &&
                                (e[s].ks.k[r].e[0].c = e[s].closed);
                      else "gr" === e[s].ty && t(e[s].it);
                  })(e.shapes);
              }
            }
            function d(t) {
              for (var e = t.length, r = 0; r < e; r += 1)
                4 === t[r].ty &&
                  (function t(e) {
                    for (var r, i, s = e.length, a = 0; a < s; a += 1)
                      if ("gr" === e[a].ty) t(e[a].it);
                      else if ("fl" === e[a].ty || "st" === e[a].ty)
                        if (e[a].c.k && e[a].c.k[0].i)
                          for (i = e[a].c.k.length, r = 0; r < i; r += 1)
                            e[a].c.k[r].s &&
                              ((e[a].c.k[r].s[0] /= 255),
                              (e[a].c.k[r].s[1] /= 255),
                              (e[a].c.k[r].s[2] /= 255),
                              (e[a].c.k[r].s[3] /= 255)),
                              e[a].c.k[r].e &&
                                ((e[a].c.k[r].e[0] /= 255),
                                (e[a].c.k[r].e[1] /= 255),
                                (e[a].c.k[r].e[2] /= 255),
                                (e[a].c.k[r].e[3] /= 255));
                        else
                          (e[a].c.k[0] /= 255),
                            (e[a].c.k[1] /= 255),
                            (e[a].c.k[2] /= 255),
                            (e[a].c.k[3] /= 255);
                  })(t[r].shapes);
            }
            function u(t) {
              for (var e, r, i = t.length, s = 0; s < i; s += 1)
                5 === t[s].ty &&
                  ((e = t[s]),
                  (r = void 0),
                  (r = e.t.d),
                  (e.t.d = { k: [{ s: r, t: 0 }] }));
            }
            var t = {
              completeData: function (t, e) {
                t.__complete ||
                  (l(t),
                  r(t),
                  n(t),
                  p(t),
                  m(t.layers, t.assets, e),
                  (t.__complete = !0));
              },
            };
            return (
              (t.checkColors = l),
              (t.checkChars = n),
              (t.checkShapes = p),
              (t.completeLayers = m),
              t
            );
          }
          var dataManager = dataFunctionManager();
          function getFontProperties(t) {
            for (
              var e = t.fStyle ? t.fStyle.split(" ") : [],
                r = "normal",
                i = "normal",
                s = e.length,
                a = 0;
              a < s;
              a += 1
            )
              switch (e[a].toLowerCase()) {
                case "italic":
                  i = "italic";
                  break;
                case "bold":
                  r = "700";
                  break;
                case "black":
                  r = "900";
                  break;
                case "medium":
                  r = "500";
                  break;
                case "regular":
                case "normal":
                  r = "400";
                  break;
                case "light":
                case "thin":
                  r = "200";
              }
            return { style: i, weight: t.fWeight || r };
          }
          var FontManager =
              ((qf = { w: 0, size: 0, shapes: [] }),
              (rf = (rf = []).concat([
                2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367,
                2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377,
                2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390,
                2391, 2402, 2403,
              ])),
              (sf = [
                "d83cdffb",
                "d83cdffc",
                "d83cdffd",
                "d83cdffe",
                "d83cdfff",
              ]),
              (tf = [65039, 8205]),
              (wf.isModifier = function (t, e) {
                e = t.toString(16) + e.toString(16);
                return -1 !== sf.indexOf(e);
              }),
              (wf.isZeroWidthJoiner = function (t, e) {
                return e ? t === tf[0] && e === tf[1] : t === tf[1];
              }),
              (wf.isCombinedCharacter = function (t) {
                return -1 !== rf.indexOf(t);
              }),
              (wf.prototype = {
                addChars: function (t) {
                  if (t) {
                    this.chars || (this.chars = []);
                    for (
                      var e, r, i = t.length, s = this.chars.length, a = 0;
                      a < i;
                      a += 1
                    ) {
                      for (e = 0, r = !1; e < s; )
                        this.chars[e].style === t[a].style &&
                          this.chars[e].fFamily === t[a].fFamily &&
                          this.chars[e].ch === t[a].ch &&
                          (r = !0),
                          (e += 1);
                      r || (this.chars.push(t[a]), (s += 1));
                    }
                  }
                },
                addFonts: function (t, e) {
                  if (t) {
                    if (this.chars)
                      return (this.isLoaded = !0), void (this.fonts = t.list);
                    for (
                      var r = t.list, i = r.length, s = i, a = 0;
                      a < i;
                      a += 1
                    ) {
                      var n,
                        o,
                        h,
                        l,
                        p = !0;
                      if (
                        ((r[a].loaded = !1),
                        (r[a].monoCase = uf(r[a].fFamily, "monospace")),
                        (r[a].sansCase = uf(r[a].fFamily, "sans-serif")),
                        r[a].fPath)
                      ) {
                        if ("p" === r[a].fOrigin || 3 === r[a].origin)
                          (p =
                            !(
                              0 <
                              (n = document.querySelectorAll(
                                'style[f-forigin="p"][f-family="' +
                                  r[a].fFamily +
                                  '"], style[f-origin="3"][f-family="' +
                                  r[a].fFamily +
                                  '"]'
                              )).length
                            ) && p) &&
                            ((h = createTag("style")).setAttribute(
                              "f-forigin",
                              r[a].fOrigin
                            ),
                            h.setAttribute("f-origin", r[a].origin),
                            h.setAttribute("f-family", r[a].fFamily),
                            (h.type = "text/css"),
                            (h.innerText =
                              "@font-face {font-family: " +
                              r[a].fFamily +
                              "; font-style: normal; src: url('" +
                              r[a].fPath +
                              "');}"),
                            e.appendChild(h));
                        else if ("g" === r[a].fOrigin || 1 === r[a].origin) {
                          for (
                            n = document.querySelectorAll(
                              'link[f-forigin="g"], link[f-origin="1"]'
                            ),
                              o = 0;
                            o < n.length;
                            o += 1
                          )
                            -1 !== n[o].href.indexOf(r[a].fPath) && (p = !1);
                          p &&
                            ((l = createTag("link")).setAttribute(
                              "f-forigin",
                              r[a].fOrigin
                            ),
                            l.setAttribute("f-origin", r[a].origin),
                            (l.type = "text/css"),
                            (l.rel = "stylesheet"),
                            (l.href = r[a].fPath),
                            document.body.appendChild(l));
                        } else if ("t" === r[a].fOrigin || 2 === r[a].origin) {
                          for (
                            n = document.querySelectorAll(
                              'script[f-forigin="t"], script[f-origin="2"]'
                            ),
                              o = 0;
                            o < n.length;
                            o += 1
                          )
                            r[a].fPath === n[o].src && (p = !1);
                          p &&
                            ((l = createTag("link")).setAttribute(
                              "f-forigin",
                              r[a].fOrigin
                            ),
                            l.setAttribute("f-origin", r[a].origin),
                            l.setAttribute("rel", "stylesheet"),
                            l.setAttribute("href", r[a].fPath),
                            e.appendChild(l));
                        }
                      } else (r[a].loaded = !0), --s;
                      (r[a].helper = (function (t, e) {
                        var r = createNS("text");
                        r.style.fontSize = "100px";
                        var i = getFontProperties(e);
                        return (
                          r.setAttribute("font-family", e.fFamily),
                          r.setAttribute("font-style", i.style),
                          r.setAttribute("font-weight", i.weight),
                          (r.textContent = "1"),
                          e.fClass
                            ? ((r.style.fontFamily = "inherit"),
                              r.setAttribute("class", e.fClass))
                            : (r.style.fontFamily = e.fFamily),
                          t.appendChild(r),
                          (createTag("canvas").getContext("2d").font =
                            e.fWeight + " " + e.fStyle + " 100px " + e.fFamily),
                          r
                        );
                      })(e, r[a])),
                        (r[a].cache = {}),
                        this.fonts.push(r[a]);
                    }
                    0 === s
                      ? (this.isLoaded = !0)
                      : setTimeout(this.checkLoadedFonts.bind(this), 100);
                  } else this.isLoaded = !0;
                },
                getCharData: function (t, e, r) {
                  for (var i = 0, s = this.chars.length; i < s; ) {
                    if (
                      this.chars[i].ch === t &&
                      this.chars[i].style === e &&
                      this.chars[i].fFamily === r
                    )
                      return this.chars[i];
                    i += 1;
                  }
                  return (
                    (("string" == typeof t && 13 !== t.charCodeAt(0)) || !t) &&
                      console &&
                      console.warn &&
                      !this._warned &&
                      (this._warned = !0),
                    qf
                  );
                },
                getFontByName: function (t) {
                  for (var e = 0, r = this.fonts.length; e < r; ) {
                    if (this.fonts[e].fName === t) return this.fonts[e];
                    e += 1;
                  }
                  return this.fonts[0];
                },
                measureText: function (t, e, r) {
                  var i,
                    s,
                    a = this.getFontByName(e),
                    n = t.charCodeAt(0);
                  return (
                    a.cache[n + 1] ||
                      ((i = a.helper),
                      " " === t
                        ? ((i.textContent = "|" + t + "|"),
                          (s = i.getComputedTextLength()),
                          (i.textContent = "||"),
                          (e = i.getComputedTextLength()),
                          (a.cache[n + 1] = (s - e) / 100))
                        : ((i.textContent = t),
                          (a.cache[n + 1] = i.getComputedTextLength() / 100))),
                    a.cache[n + 1] * r
                  );
                },
                checkLoadedFonts: function () {
                  for (
                    var t, e, r = this.fonts.length, i = r, s = 0;
                    s < r;
                    s += 1
                  )
                    this.fonts[s].loaded
                      ? --i
                      : "n" === this.fonts[s].fOrigin ||
                        0 === this.fonts[s].origin
                      ? (this.fonts[s].loaded = !0)
                      : ((t = this.fonts[s].monoCase.node),
                        (e = this.fonts[s].monoCase.w),
                        t.offsetWidth !== e
                          ? (--i, (this.fonts[s].loaded = !0))
                          : ((t = this.fonts[s].sansCase.node),
                            (e = this.fonts[s].sansCase.w),
                            t.offsetWidth !== e &&
                              (--i, (this.fonts[s].loaded = !0))),
                        this.fonts[s].loaded &&
                          (this.fonts[s].sansCase.parent.parentNode.removeChild(
                            this.fonts[s].sansCase.parent
                          ),
                          this.fonts[s].monoCase.parent.parentNode.removeChild(
                            this.fonts[s].monoCase.parent
                          )));
                  0 !== i && Date.now() - this.initTime < 5e3
                    ? setTimeout(this.checkLoadedFontsBinded, 20)
                    : setTimeout(this.setIsLoadedBinded, 10);
                },
                setIsLoaded: function () {
                  this.isLoaded = !0;
                },
              }),
              wf),
            PropertyFactory =
              ((C5 = initialDefaultFrame),
              (D5 = Math.abs),
              {
                getProp: function (t, e, r, i, s) {
                  var a;
                  if (e.k.length)
                    if ("number" == typeof e.k[0]) a = new L5(t, e, i, s);
                    else
                      switch (r) {
                        case 0:
                          a = new M5(t, e, i, s);
                          break;
                        case 1:
                          a = new N5(t, e, i, s);
                      }
                  else a = new K5(t, e, i, s);
                  return a.effectsSequence.length && s.addDynamicProperty(a), a;
                },
              }),
            TransformPropertyFactory =
              ((O6 = [0, 0]),
              (P6.prototype = {
                applyToMatrix: function (t) {
                  var e = this._mdf;
                  this.iterateDynamicProperties(),
                    (this._mdf = this._mdf || e),
                    this.a &&
                      t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                    this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                    this.r
                      ? t.rotate(-this.r.v)
                      : t
                          .rotateZ(-this.rz.v)
                          .rotateY(this.ry.v)
                          .rotateX(this.rx.v)
                          .rotateZ(-this.or.v[2])
                          .rotateY(this.or.v[1])
                          .rotateX(this.or.v[0]),
                    this.data.p.s
                      ? this.data.p.z
                        ? t.translate(this.px.v, this.py.v, -this.pz.v)
                        : t.translate(this.px.v, this.py.v, 0)
                      : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                },
                getValue: function (t) {
                  var e, r, i, s;
                  this.elem.globalData.frameId !== this.frameId &&
                    (this._isDirty &&
                      (this.precalculateMatrix(), (this._isDirty = !1)),
                    this.iterateDynamicProperties(),
                    (this._mdf || t) &&
                      (this.v.cloneFromProps(this.pre.props),
                      this.appliedTransformations < 1 &&
                        this.v.translate(
                          -this.a.v[0],
                          -this.a.v[1],
                          this.a.v[2]
                        ),
                      this.appliedTransformations < 2 &&
                        this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      this.sk &&
                        this.appliedTransformations < 3 &&
                        this.v.skewFromAxis(-this.sk.v, this.sa.v),
                      this.r && this.appliedTransformations < 4
                        ? this.v.rotate(-this.r.v)
                        : !this.r &&
                          this.appliedTransformations < 4 &&
                          this.v
                            .rotateZ(-this.rz.v)
                            .rotateY(this.ry.v)
                            .rotateX(this.rx.v)
                            .rotateZ(-this.or.v[2])
                            .rotateY(this.or.v[1])
                            .rotateX(this.or.v[0]),
                      this.autoOriented &&
                        ((s = this.elem.globalData.frameRate),
                        this.p && this.p.keyframes && this.p.getValueAtTime
                          ? (r =
                              this.p._caching.lastFrame + this.p.offsetTime <=
                              this.p.keyframes[0].t
                                ? ((e = this.p.getValueAtTime(
                                    (this.p.keyframes[0].t + 0.01) / s,
                                    0
                                  )),
                                  this.p.getValueAtTime(
                                    this.p.keyframes[0].t / s,
                                    0
                                  ))
                                : this.p._caching.lastFrame +
                                    this.p.offsetTime >=
                                  this.p.keyframes[this.p.keyframes.length - 1]
                                    .t
                                ? ((e = this.p.getValueAtTime(
                                    this.p.keyframes[
                                      this.p.keyframes.length - 1
                                    ].t / s,
                                    0
                                  )),
                                  this.p.getValueAtTime(
                                    (this.p.keyframes[
                                      this.p.keyframes.length - 1
                                    ].t -
                                      0.05) /
                                      s,
                                    0
                                  ))
                                : ((e = this.p.pv),
                                  this.p.getValueAtTime(
                                    (this.p._caching.lastFrame +
                                      this.p.offsetTime -
                                      0.01) /
                                      s,
                                    this.p.offsetTime
                                  )))
                          : this.px &&
                            this.px.keyframes &&
                            this.py.keyframes &&
                            this.px.getValueAtTime &&
                            this.py.getValueAtTime
                          ? ((e = []),
                            (r = []),
                            (i = this.px),
                            (t = this.py),
                            i._caching.lastFrame + i.offsetTime <=
                            i.keyframes[0].t
                              ? ((e[0] = i.getValueAtTime(
                                  (i.keyframes[0].t + 0.01) / s,
                                  0
                                )),
                                (e[1] = t.getValueAtTime(
                                  (t.keyframes[0].t + 0.01) / s,
                                  0
                                )),
                                (r[0] = i.getValueAtTime(
                                  i.keyframes[0].t / s,
                                  0
                                )),
                                (r[1] = t.getValueAtTime(
                                  t.keyframes[0].t / s,
                                  0
                                )))
                              : i._caching.lastFrame + i.offsetTime >=
                                i.keyframes[i.keyframes.length - 1].t
                              ? ((e[0] = i.getValueAtTime(
                                  i.keyframes[i.keyframes.length - 1].t / s,
                                  0
                                )),
                                (e[1] = t.getValueAtTime(
                                  t.keyframes[t.keyframes.length - 1].t / s,
                                  0
                                )),
                                (r[0] = i.getValueAtTime(
                                  (i.keyframes[i.keyframes.length - 1].t -
                                    0.01) /
                                    s,
                                  0
                                )),
                                (r[1] = t.getValueAtTime(
                                  (t.keyframes[t.keyframes.length - 1].t -
                                    0.01) /
                                    s,
                                  0
                                )))
                              : ((e = [i.pv, t.pv]),
                                (r[0] = i.getValueAtTime(
                                  (i._caching.lastFrame + i.offsetTime - 0.01) /
                                    s,
                                  i.offsetTime
                                )),
                                (r[1] = t.getValueAtTime(
                                  (t._caching.lastFrame + t.offsetTime - 0.01) /
                                    s,
                                  t.offsetTime
                                ))))
                          : (e = r = O6),
                        this.v.rotate(-Math.atan2(e[1] - r[1], e[0] - r[0]))),
                      this.data.p && this.data.p.s
                        ? this.data.p.z
                          ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                          : this.v.translate(this.px.v, this.py.v, 0)
                        : this.v.translate(
                            this.p.v[0],
                            this.p.v[1],
                            -this.p.v[2]
                          )),
                    (this.frameId = this.elem.globalData.frameId));
                },
                precalculateMatrix: function () {
                  if (
                    !this.a.k &&
                    (this.pre.translate(
                      -this.a.v[0],
                      -this.a.v[1],
                      this.a.v[2]
                    ),
                    (this.appliedTransformations = 1),
                    !this.s.effectsSequence.length)
                  ) {
                    if (
                      (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      (this.appliedTransformations = 2),
                      this.sk)
                    ) {
                      if (
                        this.sk.effectsSequence.length ||
                        this.sa.effectsSequence.length
                      )
                        return;
                      this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                        (this.appliedTransformations = 3);
                    }
                    this.r
                      ? this.r.effectsSequence.length ||
                        (this.pre.rotate(-this.r.v),
                        (this.appliedTransformations = 4))
                      : this.rz.effectsSequence.length ||
                        this.ry.effectsSequence.length ||
                        this.rx.effectsSequence.length ||
                        this.or.effectsSequence.length ||
                        (this.pre
                          .rotateZ(-this.rz.v)
                          .rotateY(this.ry.v)
                          .rotateX(this.rx.v)
                          .rotateZ(-this.or.v[2])
                          .rotateY(this.or.v[1])
                          .rotateX(this.or.v[0]),
                        (this.appliedTransformations = 4));
                  }
                },
                autoOrient: function () {},
              }),
              extendPrototype([DynamicPropertyContainer], P6),
              (P6.prototype.addDynamicProperty = function (t) {
                this._addDynamicProperty(t),
                  this.elem.addDynamicProperty(t),
                  (this._isDirty = !0);
              }),
              (P6.prototype._addDynamicProperty =
                DynamicPropertyContainer.prototype.addDynamicProperty),
              {
                getTransformProperty: function (t, e, r) {
                  return new P6(t, e, r);
                },
              }),
            O6,
            C5,
            D5,
            qf,
            rf,
            sf,
            tf;
          function P6(t, e, r) {
            if (
              ((this.elem = t),
              (this.frameId = -1),
              (this.propType = "transform"),
              (this.data = e),
              (this.v = new Matrix()),
              (this.pre = new Matrix()),
              (this.appliedTransformations = 0),
              this.initDynamicPropertyContainer(r || t),
              e.p && e.p.s
                ? ((this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this)),
                  (this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this)),
                  e.p.z &&
                    (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this)))
                : (this.p = PropertyFactory.getProp(
                    t,
                    e.p || { k: [0, 0, 0] },
                    1,
                    0,
                    this
                  )),
              e.rx)
            ) {
              if (
                ((this.rx = PropertyFactory.getProp(
                  t,
                  e.rx,
                  0,
                  degToRads,
                  this
                )),
                (this.ry = PropertyFactory.getProp(
                  t,
                  e.ry,
                  0,
                  degToRads,
                  this
                )),
                (this.rz = PropertyFactory.getProp(
                  t,
                  e.rz,
                  0,
                  degToRads,
                  this
                )),
                e.or.k[0].ti)
              )
                for (var i = e.or.k.length, s = 0; s < i; s += 1)
                  (e.or.k[s].to = null), (e.or.k[s].ti = null);
              (this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this)),
                (this.or.sh = !0);
            } else
              this.r = PropertyFactory.getProp(
                t,
                e.r || { k: 0 },
                0,
                degToRads,
                this
              );
            e.sk &&
              ((this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this)),
              (this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this))),
              (this.a = PropertyFactory.getProp(
                t,
                e.a || { k: [0, 0, 0] },
                1,
                0,
                this
              )),
              (this.s = PropertyFactory.getProp(
                t,
                e.s || { k: [100, 100, 100] },
                1,
                0.01,
                this
              )),
              e.o
                ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t))
                : (this.o = { _mdf: !1, v: 1 }),
              (this._isDirty = !0),
              this.dynamicProperties.length || this.getValue(!0);
          }
          function E5(t, e) {
            var r,
              i = this.offsetTime;
            "multidimensional" === this.propType &&
              (r = createTypedArray("float32", this.pv.length));
            for (
              var s,
                a,
                n,
                o = e.lastIndex,
                h = o,
                l = this.keyframes.length - 1,
                p = !0;
              p;

            ) {
              if (
                ((s = this.keyframes[h]),
                (a = this.keyframes[h + 1]),
                h === l - 1 && t >= a.t - i)
              ) {
                s.h && (s = a), (o = 0);
                break;
              }
              if (a.t - i > t) {
                o = h;
                break;
              }
              h < l - 1 ? (h += 1) : ((o = 0), (p = !1));
            }
            var m,
              f,
              c,
              d,
              u,
              y,
              g,
              v,
              b,
              P,
              E,
              x,
              S,
              A,
              C = a.t - i,
              _ = s.t - i;
            if (s.to) {
              s.bezierData ||
                (s.bezierData = bez.buildBezierData(
                  s.s,
                  a.s || s.e,
                  s.to,
                  s.ti
                ));
              var T = s.bezierData;
              if (C <= t || t < _)
                for (
                  var k = C <= t ? T.points.length - 1 : 0,
                    D = T.points[k].point.length,
                    M = 0;
                  M < D;
                  M += 1
                )
                  r[M] = T.points[k].point[M];
              else {
                s.__fnct
                  ? (n = s.__fnct)
                  : ((n = BezierFactory.getBezierEasing(
                      s.o.x,
                      s.o.y,
                      s.i.x,
                      s.i.y,
                      s.n
                    ).get),
                    (s.__fnct = n));
                for (
                  var F,
                    w = n((t - _) / (C - _)),
                    I = T.segmentLength * w,
                    V =
                      e.lastFrame < t && e._lastKeyframeIndex === h
                        ? e._lastAddedLength
                        : 0,
                    R =
                      e.lastFrame < t && e._lastKeyframeIndex === h
                        ? e._lastPoint
                        : 0,
                    p = !0,
                    B = T.points.length;
                  p;

                ) {
                  if (
                    ((V += T.points[R].partialLength),
                    0 == I || 0 === w || R === T.points.length - 1)
                  ) {
                    for (D = T.points[R].point.length, M = 0; M < D; M += 1)
                      r[M] = T.points[R].point[M];
                    break;
                  }
                  if (V <= I && I < V + T.points[R + 1].partialLength) {
                    for (
                      F = (I - V) / T.points[R + 1].partialLength,
                        D = T.points[R].point.length,
                        M = 0;
                      M < D;
                      M += 1
                    )
                      r[M] =
                        T.points[R].point[M] +
                        (T.points[R + 1].point[M] - T.points[R].point[M]) * F;
                    break;
                  }
                  R < B - 1 ? (R += 1) : (p = !1);
                }
                (e._lastPoint = R),
                  (e._lastAddedLength = V - T.points[R].partialLength),
                  (e._lastKeyframeIndex = h);
              }
            } else {
              var L,
                G,
                z,
                N,
                O,
                l = s.s.length,
                H = a.s || s.e;
              if (this.sh && 1 !== s.h)
                C <= t
                  ? ((r[0] = H[0]), (r[1] = H[1]), (r[2] = H[2]))
                  : t <= _
                  ? ((r[0] = s.s[0]), (r[1] = s.s[1]), (r[2] = s.s[2]))
                  : ((m = r),
                    (f = F5(s.s)),
                    (c = F5(H)),
                    (d = (t - _) / (C - _)),
                    (y = []),
                    (g = f[0]),
                    (v = f[1]),
                    (b = f[2]),
                    (P = f[3]),
                    (E = c[0]),
                    (x = c[1]),
                    (S = c[2]),
                    (A = c[3]),
                    (f = g * E + v * x + b * S + P * A) < 0 &&
                      ((f = -f), (E = -E), (x = -x), (S = -S), (A = -A)),
                    (d =
                      1e-6 < 1 - f
                        ? ((c = Math.acos(f)),
                          (f = Math.sin(c)),
                          (u = Math.sin((1 - d) * c) / f),
                          Math.sin(d * c) / f)
                        : ((u = 1 - d), d)),
                    (y[0] = u * g + d * E),
                    (y[1] = u * v + d * x),
                    (y[2] = u * b + d * S),
                    (y[3] = u * P + d * A),
                    (u = (S = y)[0]),
                    (P = S[1]),
                    (d = S[2]),
                    (A = S[3]),
                    (y = Math.atan2(
                      2 * P * A - 2 * u * d,
                      1 - 2 * P * P - 2 * d * d
                    )),
                    (S = Math.asin(2 * u * P + 2 * d * A)),
                    (d = Math.atan2(
                      2 * u * A - 2 * P * d,
                      1 - 2 * u * u - 2 * d * d
                    )),
                    (m[0] = y / degToRads),
                    (m[1] = S / degToRads),
                    (m[2] = d / degToRads));
              else
                for (h = 0; h < l; h += 1)
                  1 !== s.h &&
                    (w =
                      C <= t
                        ? 1
                        : t < _
                        ? 0
                        : (s.o.x.constructor === Array
                            ? (s.__fnct || (s.__fnct = []),
                              s.__fnct[h]
                                ? (n = s.__fnct[h])
                                : ((L =
                                    void 0 === s.o.x[h] ? s.o.x[0] : s.o.x[h]),
                                  (G =
                                    void 0 === s.o.y[h] ? s.o.y[0] : s.o.y[h]),
                                  (z =
                                    void 0 === s.i.x[h] ? s.i.x[0] : s.i.x[h]),
                                  (N =
                                    void 0 === s.i.y[h] ? s.i.y[0] : s.i.y[h]),
                                  (n = BezierFactory.getBezierEasing(
                                    L,
                                    G,
                                    z,
                                    N
                                  ).get),
                                  (s.__fnct[h] = n)))
                            : s.__fnct
                            ? (n = s.__fnct)
                            : ((L = s.o.x),
                              (G = s.o.y),
                              (z = s.i.x),
                              (N = s.i.y),
                              (n = BezierFactory.getBezierEasing(
                                L,
                                G,
                                z,
                                N
                              ).get),
                              (s.__fnct = n)),
                          n((t - _) / (C - _)))),
                    (H = a.s || s.e),
                    (O = 1 === s.h ? s.s[h] : s.s[h] + (H[h] - s.s[h]) * w),
                    "multidimensional" === this.propType ? (r[h] = O) : (r = O);
            }
            return (e.lastIndex = o), r;
          }
          function F5(t) {
            var e = t[0] * degToRads,
              r = t[1] * degToRads,
              i = t[2] * degToRads,
              s = Math.cos(e / 2),
              a = Math.cos(r / 2),
              t = Math.cos(i / 2),
              e = Math.sin(e / 2),
              r = Math.sin(r / 2),
              i = Math.sin(i / 2);
            return [
              e * r * t + s * a * i,
              e * a * t + s * r * i,
              s * r * t - e * a * i,
              s * a * t - e * r * i,
            ];
          }
          function G5() {
            var t = this.comp.renderedFrame - this.offsetTime,
              e = this.keyframes[0].t - this.offsetTime,
              r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            return (
              t === this._caching.lastFrame ||
                (this._caching.lastFrame !== C5 &&
                  ((this._caching.lastFrame >= r && r <= t) ||
                    (this._caching.lastFrame < e && t < e))) ||
                (this._caching.lastFrame >= t &&
                  ((this._caching._lastKeyframeIndex = -1),
                  (this._caching.lastIndex = 0)),
                (e = this.interpolateValue(t, this._caching)),
                (this.pv = e)),
              (this._caching.lastFrame = t),
              this.pv
            );
          }
          function H5(t) {
            var e;
            if ("unidimensional" === this.propType)
              (e = t * this.mult),
                1e-5 < D5(this.v - e) && ((this.v = e), (this._mdf = !0));
            else
              for (var r = 0, i = this.v.length; r < i; )
                (e = t[r] * this.mult),
                  1e-5 < D5(this.v[r] - e) &&
                    ((this.v[r] = e), (this._mdf = !0)),
                  (r += 1);
          }
          function I5() {
            if (
              this.elem.globalData.frameId !== this.frameId &&
              this.effectsSequence.length
            )
              if (this.lock) this.setVValue(this.pv);
              else {
                (this.lock = !0), (this._mdf = this._isFirstFrame);
                for (
                  var t = this.effectsSequence.length,
                    e = this.kf ? this.pv : this.data.k,
                    r = 0;
                  r < t;
                  r += 1
                )
                  e = this.effectsSequence[r](e);
                this.setVValue(e),
                  (this._isFirstFrame = !1),
                  (this.lock = !1),
                  (this.frameId = this.elem.globalData.frameId);
              }
          }
          function J5(t) {
            this.effectsSequence.push(t),
              this.container.addDynamicProperty(this);
          }
          function K5(t, e, r, i) {
            (this.propType = "unidimensional"),
              (this.mult = r || 1),
              (this.data = e),
              (this.v = r ? e.k * r : e.k),
              (this.pv = e.k),
              (this._mdf = !1),
              (this.elem = t),
              (this.container = i),
              (this.comp = t.comp),
              (this.k = !1),
              (this.kf = !1),
              (this.vel = 0),
              (this.effectsSequence = []),
              (this._isFirstFrame = !0),
              (this.getValue = I5),
              (this.setVValue = H5),
              (this.addEffect = J5);
          }
          function L5(t, e, r, i) {
            var s;
            (this.propType = "multidimensional"),
              (this.mult = r || 1),
              (this.data = e),
              (this._mdf = !1),
              (this.elem = t),
              (this.container = i),
              (this.comp = t.comp),
              (this.k = !1),
              (this.kf = !1),
              (this.frameId = -1);
            var a = e.k.length;
            for (
              this.v = createTypedArray("float32", a),
                this.pv = createTypedArray("float32", a),
                this.vel = createTypedArray("float32", a),
                s = 0;
              s < a;
              s += 1
            )
              (this.v[s] = e.k[s] * this.mult), (this.pv[s] = e.k[s]);
            (this._isFirstFrame = !0),
              (this.effectsSequence = []),
              (this.getValue = I5),
              (this.setVValue = H5),
              (this.addEffect = J5);
          }
          function M5(t, e, r, i) {
            (this.propType = "unidimensional"),
              (this.keyframes = e.k),
              (this.offsetTime = t.data.st),
              (this.frameId = -1),
              (this._caching = {
                lastFrame: C5,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1,
              }),
              (this.k = !0),
              (this.kf = !0),
              (this.data = e),
              (this.mult = r || 1),
              (this.elem = t),
              (this.container = i),
              (this.comp = t.comp),
              (this.v = C5),
              (this.pv = C5),
              (this._isFirstFrame = !0),
              (this.getValue = I5),
              (this.setVValue = H5),
              (this.interpolateValue = E5),
              (this.effectsSequence = [G5.bind(this)]),
              (this.addEffect = J5);
          }
          function N5(t, e, r, i) {
            this.propType = "multidimensional";
            for (var s, a, n, o, h = e.k.length, l = 0; l < h - 1; l += 1)
              e.k[l].to &&
                e.k[l].s &&
                e.k[l + 1] &&
                e.k[l + 1].s &&
                ((s = e.k[l].s),
                (a = e.k[l + 1].s),
                (n = e.k[l].to),
                (o = e.k[l].ti),
                ((2 === s.length &&
                  (s[0] !== a[0] || s[1] !== a[1]) &&
                  bez.pointOnLine2D(
                    s[0],
                    s[1],
                    a[0],
                    a[1],
                    s[0] + n[0],
                    s[1] + n[1]
                  ) &&
                  bez.pointOnLine2D(
                    s[0],
                    s[1],
                    a[0],
                    a[1],
                    a[0] + o[0],
                    a[1] + o[1]
                  )) ||
                  (3 === s.length &&
                    (s[0] !== a[0] || s[1] !== a[1] || s[2] !== a[2]) &&
                    bez.pointOnLine3D(
                      s[0],
                      s[1],
                      s[2],
                      a[0],
                      a[1],
                      a[2],
                      s[0] + n[0],
                      s[1] + n[1],
                      s[2] + n[2]
                    ) &&
                    bez.pointOnLine3D(
                      s[0],
                      s[1],
                      s[2],
                      a[0],
                      a[1],
                      a[2],
                      a[0] + o[0],
                      a[1] + o[1],
                      a[2] + o[2]
                    ))) &&
                  ((e.k[l].to = null), (e.k[l].ti = null)),
                s[0] === a[0] &&
                  s[1] === a[1] &&
                  0 === n[0] &&
                  0 === n[1] &&
                  0 === o[0] &&
                  0 === o[1] &&
                  (2 === s.length ||
                    (s[2] === a[2] && 0 === n[2] && 0 === o[2])) &&
                  ((e.k[l].to = null), (e.k[l].ti = null)));
            (this.effectsSequence = [G5.bind(this)]),
              (this.data = e),
              (this.keyframes = e.k),
              (this.offsetTime = t.data.st),
              (this.k = !0),
              (this.kf = !0),
              (this._isFirstFrame = !0),
              (this.mult = r || 1),
              (this.elem = t),
              (this.container = i),
              (this.comp = t.comp),
              (this.getValue = I5),
              (this.setVValue = H5),
              (this.interpolateValue = E5),
              (this.frameId = -1);
            var p = e.k[0].s.length;
            for (
              this.v = createTypedArray("float32", p),
                this.pv = createTypedArray("float32", p),
                l = 0;
              l < p;
              l += 1
            )
              (this.v[l] = C5), (this.pv[l] = C5);
            (this._caching = {
              lastFrame: C5,
              lastIndex: 0,
              value: createTypedArray("float32", p),
            }),
              (this.addEffect = J5);
          }
          function uf(s, t) {
            var e = createTag("span");
            e.setAttribute("aria-hidden", !0), (e.style.fontFamily = t);
            var r = createTag("span");
            (r.innerText = "giItT1WQy@!-/#"),
              (e.style.position = "absolute"),
              (e.style.left = "-10000px"),
              (e.style.top = "-10000px"),
              (e.style.fontSize = "300px"),
              (e.style.fontVariant = "normal"),
              (e.style.fontStyle = "normal"),
              (e.style.fontWeight = "normal"),
              (e.style.letterSpacing = "0"),
              e.appendChild(r),
              document.body.appendChild(e);
            var i = r.offsetWidth;
            return (
              (r.style.fontFamily =
                (function () {
                  for (
                    var t = s.split(","), e = t.length, r = [], i = 0;
                    i < e;
                    i += 1
                  )
                    "sans-serif" !== t[i] &&
                      "monospace" !== t[i] &&
                      r.push(t[i]);
                  return r.join(",");
                })() +
                ", " +
                t),
              { node: r, w: i, parent: e }
            );
          }
          function wf() {
            (this.fonts = []),
              (this.chars = null),
              (this.typekitLoaded = 0),
              (this.isLoaded = !1),
              (this._warned = !1),
              (this.initTime = Date.now()),
              (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
              (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
          }
          function ShapePath() {
            (this.c = !1),
              (this._length = 0),
              (this._maxLength = 8),
              (this.v = createSizedArray(this._maxLength)),
              (this.o = createSizedArray(this._maxLength)),
              (this.i = createSizedArray(this._maxLength));
          }
          (ShapePath.prototype.setPathData = function (t, e) {
            (this.c = t), this.setLength(e);
            for (var r = 0; r < e; )
              (this.v[r] = pointPool.newElement()),
                (this.o[r] = pointPool.newElement()),
                (this.i[r] = pointPool.newElement()),
                (r += 1);
          }),
            (ShapePath.prototype.setLength = function (t) {
              for (; this._maxLength < t; ) this.doubleArrayLength();
              this._length = t;
            }),
            (ShapePath.prototype.doubleArrayLength = function () {
              (this.v = this.v.concat(createSizedArray(this._maxLength))),
                (this.i = this.i.concat(createSizedArray(this._maxLength))),
                (this.o = this.o.concat(createSizedArray(this._maxLength))),
                (this._maxLength *= 2);
            }),
            (ShapePath.prototype.setXYAt = function (t, e, r, i, s) {
              var a;
              switch (
                ((this._length = Math.max(this._length, i + 1)),
                this._length >= this._maxLength && this.doubleArrayLength(),
                r)
              ) {
                case "v":
                  a = this.v;
                  break;
                case "i":
                  a = this.i;
                  break;
                case "o":
                  a = this.o;
                  break;
                default:
                  a = [];
              }
              (a[i] && (!a[i] || s)) || (a[i] = pointPool.newElement()),
                (a[i][0] = t),
                (a[i][1] = e);
            }),
            (ShapePath.prototype.setTripleAt = function (
              t,
              e,
              r,
              i,
              s,
              a,
              n,
              o
            ) {
              this.setXYAt(t, e, "v", n, o),
                this.setXYAt(r, i, "o", n, o),
                this.setXYAt(s, a, "i", n, o);
            }),
            (ShapePath.prototype.reverse = function () {
              var t = new ShapePath();
              t.setPathData(this.c, this._length);
              var e = this.v,
                r = this.o,
                i = this.i,
                s = 0;
              this.c &&
                (t.setTripleAt(
                  e[0][0],
                  e[0][1],
                  i[0][0],
                  i[0][1],
                  r[0][0],
                  r[0][1],
                  0,
                  !1
                ),
                (s = 1));
              for (
                var a = this._length - 1, n = this._length, o = s;
                o < n;
                o += 1
              )
                t.setTripleAt(
                  e[a][0],
                  e[a][1],
                  i[a][0],
                  i[a][1],
                  r[a][0],
                  r[a][1],
                  o,
                  !1
                ),
                  --a;
              return t;
            });
          var ShapePropertyFactory = (function () {
              var s = -999999;
              function t(t, e, r) {
                var i,
                  s,
                  a,
                  n,
                  o,
                  h,
                  l,
                  p = r.lastIndex,
                  m = this.keyframes;
                if (t < m[0].t - this.offsetTime)
                  (i = m[0].s[0]), (s = !0), (p = 0);
                else if (t >= m[m.length - 1].t - this.offsetTime)
                  (i = (
                    m[m.length - 1].s ? m[m.length - 1].s : m[m.length - 2].e
                  )[0]),
                    (s = !0);
                else {
                  for (
                    var f, c, d = p, u = m.length - 1, y = !0;
                    y &&
                    ((f = m[d]), !((c = m[d + 1]).t - this.offsetTime > t));

                  )
                    d < u - 1 ? (d += 1) : (y = !1);
                  var g,
                    v,
                    b,
                    p = d;
                  (s = 1 === f.h) ||
                    ((v =
                      t >= c.t - this.offsetTime
                        ? 1
                        : t < f.t - this.offsetTime
                        ? 0
                        : (f.__fnct
                            ? (g = f.__fnct)
                            : ((g = BezierFactory.getBezierEasing(
                                f.o.x,
                                f.o.y,
                                f.i.x,
                                f.i.y
                              ).get),
                              (f.__fnct = g)),
                          g(
                            (t - (f.t - this.offsetTime)) /
                              (c.t - this.offsetTime - (f.t - this.offsetTime))
                          ))),
                    (b = (c.s || f.e)[0])),
                    (i = f.s[0]);
                }
                for (
                  o = e._length, h = i.i[0].length, r.lastIndex = p, a = 0;
                  a < o;
                  a += 1
                )
                  for (n = 0; n < h; n += 1)
                    (l = s
                      ? i.i[a][n]
                      : i.i[a][n] + (b.i[a][n] - i.i[a][n]) * v),
                      (e.i[a][n] = l),
                      (l = s
                        ? i.o[a][n]
                        : i.o[a][n] + (b.o[a][n] - i.o[a][n]) * v),
                      (e.o[a][n] = l),
                      (l = s
                        ? i.v[a][n]
                        : i.v[a][n] + (b.v[a][n] - i.v[a][n]) * v),
                      (e.v[a][n] = l);
              }
              function i() {
                this.paths = this.localShapeCollection;
              }
              function e(t) {
                !(function (t, e) {
                  if (t._length === e._length && t.c === e.c) {
                    for (var r = t._length, i = 0; i < r; i += 1)
                      if (
                        t.v[i][0] !== e.v[i][0] ||
                        t.v[i][1] !== e.v[i][1] ||
                        t.o[i][0] !== e.o[i][0] ||
                        t.o[i][1] !== e.o[i][1] ||
                        t.i[i][0] !== e.i[i][0] ||
                        t.i[i][1] !== e.i[i][1]
                      )
                        return;
                    return 1;
                  }
                })(this.v, t) &&
                  ((this.v = shapePool.clone(t)),
                  this.localShapeCollection.releaseShapes(),
                  this.localShapeCollection.addShape(this.v),
                  (this._mdf = !0),
                  (this.paths = this.localShapeCollection));
              }
              function r() {
                if (this.elem.globalData.frameId !== this.frameId)
                  if (this.effectsSequence.length)
                    if (this.lock) this.setVValue(this.pv);
                    else {
                      (this.lock = !0), (this._mdf = !1);
                      for (
                        var t = this.kf
                            ? this.pv
                            : (this.data.ks || this.data.pt).k,
                          e = this.effectsSequence.length,
                          r = 0;
                        r < e;
                        r += 1
                      )
                        t = this.effectsSequence[r](t);
                      this.setVValue(t),
                        (this.lock = !1),
                        (this.frameId = this.elem.globalData.frameId);
                    }
                  else this._mdf = !1;
              }
              function a(t, e, r) {
                (this.propType = "shape"),
                  (this.comp = t.comp),
                  (this.container = t),
                  (this.elem = t),
                  (this.data = e),
                  (this.k = !1),
                  (this.kf = !1),
                  (this._mdf = !1);
                e = (3 === r ? e.pt : e.ks).k;
                (this.v = shapePool.clone(e)),
                  (this.pv = shapePool.clone(this.v)),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.paths.addShape(this.v),
                  (this.reset = i),
                  (this.effectsSequence = []);
              }
              function n(t) {
                this.effectsSequence.push(t),
                  this.container.addDynamicProperty(this);
              }
              function o(t, e, r) {
                (this.propType = "shape"),
                  (this.comp = t.comp),
                  (this.elem = t),
                  (this.container = t),
                  (this.offsetTime = t.data.st),
                  (this.keyframes = (3 === r ? e.pt : e.ks).k),
                  (this.k = !0),
                  (this.kf = !0);
                e = this.keyframes[0].s[0].i.length;
                (this.v = shapePool.newElement()),
                  this.v.setPathData(this.keyframes[0].s[0].c, e),
                  (this.pv = shapePool.clone(this.v)),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.paths.addShape(this.v),
                  (this.lastFrame = s),
                  (this.reset = i),
                  (this._caching = { lastFrame: s, lastIndex: 0 }),
                  (this.effectsSequence = [
                    function () {
                      var t = this.comp.renderedFrame - this.offsetTime,
                        e = this.keyframes[0].t - this.offsetTime,
                        r =
                          this.keyframes[this.keyframes.length - 1].t -
                          this.offsetTime,
                        i = this._caching.lastFrame;
                      return (
                        (i !== s && ((i < e && t < e) || (r < i && r < t))) ||
                          ((this._caching.lastIndex =
                            i < t ? this._caching.lastIndex : 0),
                          this.interpolateShape(t, this.pv, this._caching)),
                        (this._caching.lastFrame = t),
                        this.pv
                      );
                    }.bind(this),
                  ]);
              }
              (a.prototype.interpolateShape = t),
                (a.prototype.getValue = r),
                (a.prototype.setVValue = e),
                (a.prototype.addEffect = n),
                (o.prototype.getValue = r),
                (o.prototype.interpolateShape = t),
                (o.prototype.setVValue = e),
                (o.prototype.addEffect = n);
              var h,
                l =
                  ((h = roundCorner),
                  (d.prototype = {
                    reset: i,
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function () {
                      var t = this.p.v[0],
                        e = this.p.v[1],
                        r = this.s.v[0] / 2,
                        i = this.s.v[1] / 2,
                        s = 3 !== this.d,
                        a = this.v;
                      (a.v[0][0] = t),
                        (a.v[0][1] = e - i),
                        (a.v[1][0] = s ? t + r : t - r),
                        (a.v[1][1] = e),
                        (a.v[2][0] = t),
                        (a.v[2][1] = e + i),
                        (a.v[3][0] = s ? t - r : t + r),
                        (a.v[3][1] = e),
                        (a.i[0][0] = s ? t - r * h : t + r * h),
                        (a.i[0][1] = e - i),
                        (a.i[1][0] = s ? t + r : t - r),
                        (a.i[1][1] = e - i * h),
                        (a.i[2][0] = s ? t + r * h : t - r * h),
                        (a.i[2][1] = e + i),
                        (a.i[3][0] = s ? t - r : t + r),
                        (a.i[3][1] = e + i * h),
                        (a.o[0][0] = s ? t + r * h : t - r * h),
                        (a.o[0][1] = e - i),
                        (a.o[1][0] = s ? t + r : t - r),
                        (a.o[1][1] = e + i * h),
                        (a.o[2][0] = s ? t - r * h : t + r * h),
                        (a.o[2][1] = e + i),
                        (a.o[3][0] = s ? t - r : t + r),
                        (a.o[3][1] = e - i * h);
                    },
                  }),
                  extendPrototype([DynamicPropertyContainer], d),
                  d),
                p =
                  ((c.prototype = {
                    reset: i,
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function () {
                      var t = 2 * Math.floor(this.pt.v),
                        e = (2 * Math.PI) / t,
                        r = !0,
                        i = this.or.v,
                        s = this.ir.v,
                        a = this.os.v,
                        n = this.is.v,
                        o = (2 * Math.PI * i) / (2 * t),
                        h = (2 * Math.PI * s) / (2 * t),
                        l = -Math.PI / 2;
                      l += this.r.v;
                      for (
                        var p = 3 === this.data.d ? -1 : 1,
                          m = (this.v._length = 0);
                        m < t;
                        m += 1
                      ) {
                        var f = r ? a : n,
                          c = r ? o : h,
                          d = (g = r ? i : s) * Math.cos(l),
                          u = g * Math.sin(l),
                          y =
                            0 === d && 0 === u
                              ? 0
                              : u / Math.sqrt(d * d + u * u),
                          g =
                            0 === d && 0 === u
                              ? 0
                              : -d / Math.sqrt(d * d + u * u);
                        (d += +this.p.v[0]),
                          (u += +this.p.v[1]),
                          this.v.setTripleAt(
                            d,
                            u,
                            d - y * c * f * p,
                            u - g * c * f * p,
                            d + y * c * f * p,
                            u + g * c * f * p,
                            m,
                            !0
                          ),
                          (r = !r),
                          (l += e * p);
                      }
                    },
                    convertPolygonToPath: function () {
                      var t,
                        e = Math.floor(this.pt.v),
                        r = (2 * Math.PI) / e,
                        i = this.or.v,
                        s = this.os.v,
                        a = (2 * Math.PI * i) / (4 * e),
                        n = 0.5 * -Math.PI,
                        o = 3 === this.data.d ? -1 : 1;
                      for (
                        n += this.r.v, t = this.v._length = 0;
                        t < e;
                        t += 1
                      ) {
                        var h = i * Math.cos(n),
                          l = i * Math.sin(n),
                          p =
                            0 === h && 0 === l
                              ? 0
                              : l / Math.sqrt(h * h + l * l),
                          m =
                            0 === h && 0 === l
                              ? 0
                              : -h / Math.sqrt(h * h + l * l);
                        (h += +this.p.v[0]),
                          (l += +this.p.v[1]),
                          this.v.setTripleAt(
                            h,
                            l,
                            h - p * a * s * o,
                            l - m * a * s * o,
                            h + p * a * s * o,
                            l + m * a * s * o,
                            t,
                            !0
                          ),
                          (n += r * o);
                      }
                      (this.paths.length = 0), (this.paths[0] = this.v);
                    },
                  }),
                  extendPrototype([DynamicPropertyContainer], c),
                  c),
                m =
                  ((f.prototype = {
                    convertRectToPath: function () {
                      var t = this.p.v[0],
                        e = this.p.v[1],
                        r = this.s.v[0] / 2,
                        i = this.s.v[1] / 2,
                        s = bmMin(r, i, this.r.v),
                        a = s * (1 - roundCorner);
                      (this.v._length = 0),
                        2 === this.d || 1 === this.d
                          ? (this.v.setTripleAt(
                              t + r,
                              e - i + s,
                              t + r,
                              e - i + s,
                              t + r,
                              e - i + a,
                              0,
                              !0
                            ),
                            this.v.setTripleAt(
                              t + r,
                              e + i - s,
                              t + r,
                              e + i - a,
                              t + r,
                              e + i - s,
                              1,
                              !0
                            ),
                            0 !== s
                              ? (this.v.setTripleAt(
                                  t + r - s,
                                  e + i,
                                  t + r - s,
                                  e + i,
                                  t + r - a,
                                  e + i,
                                  2,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r + s,
                                  e + i,
                                  t - r + a,
                                  e + i,
                                  t - r + s,
                                  e + i,
                                  3,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + i - s,
                                  t - r,
                                  e + i - s,
                                  t - r,
                                  e + i - a,
                                  4,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - i + s,
                                  t - r,
                                  e - i + a,
                                  t - r,
                                  e - i + s,
                                  5,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r + s,
                                  e - i,
                                  t - r + s,
                                  e - i,
                                  t - r + a,
                                  e - i,
                                  6,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + r - s,
                                  e - i,
                                  t + r - a,
                                  e - i,
                                  t + r - s,
                                  e - i,
                                  7,
                                  !0
                                ))
                              : (this.v.setTripleAt(
                                  t - r,
                                  e + i,
                                  t - r + a,
                                  e + i,
                                  t - r,
                                  e + i,
                                  2
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - i,
                                  t - r,
                                  e - i + a,
                                  t - r,
                                  e - i,
                                  3
                                )))
                          : (this.v.setTripleAt(
                              t + r,
                              e - i + s,
                              t + r,
                              e - i + a,
                              t + r,
                              e - i + s,
                              0,
                              !0
                            ),
                            0 !== s
                              ? (this.v.setTripleAt(
                                  t + r - s,
                                  e - i,
                                  t + r - s,
                                  e - i,
                                  t + r - a,
                                  e - i,
                                  1,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r + s,
                                  e - i,
                                  t - r + a,
                                  e - i,
                                  t - r + s,
                                  e - i,
                                  2,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - i + s,
                                  t - r,
                                  e - i + s,
                                  t - r,
                                  e - i + a,
                                  3,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + i - s,
                                  t - r,
                                  e + i - a,
                                  t - r,
                                  e + i - s,
                                  4,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r + s,
                                  e + i,
                                  t - r + s,
                                  e + i,
                                  t - r + a,
                                  e + i,
                                  5,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + r - s,
                                  e + i,
                                  t + r - a,
                                  e + i,
                                  t + r - s,
                                  e + i,
                                  6,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + r,
                                  e + i - s,
                                  t + r,
                                  e + i - s,
                                  t + r,
                                  e + i - a,
                                  7,
                                  !0
                                ))
                              : (this.v.setTripleAt(
                                  t - r,
                                  e - i,
                                  t - r + a,
                                  e - i,
                                  t - r,
                                  e - i,
                                  1,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + i,
                                  t - r,
                                  e + i - a,
                                  t - r,
                                  e + i,
                                  2,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + r,
                                  e + i,
                                  t + r - a,
                                  e + i,
                                  t + r,
                                  e + i,
                                  3,
                                  !0
                                )));
                    },
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertRectToPath());
                    },
                    reset: i,
                  }),
                  extendPrototype([DynamicPropertyContainer], f),
                  f);
              function f(t, e) {
                (this.v = shapePool.newElement()),
                  (this.v.c = !0),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  this.localShapeCollection.addShape(this.v),
                  (this.paths = this.localShapeCollection),
                  (this.elem = t),
                  (this.comp = t.comp),
                  (this.frameId = -1),
                  (this.d = e.d),
                  this.initDynamicPropertyContainer(t),
                  (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                  (this.r = PropertyFactory.getProp(t, e.r, 0, 0, this)),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertRectToPath());
              }
              function c(t, e) {
                (this.v = shapePool.newElement()),
                  this.v.setPathData(!0, 0),
                  (this.elem = t),
                  (this.comp = t.comp),
                  (this.data = e),
                  (this.frameId = -1),
                  (this.d = e.d),
                  this.initDynamicPropertyContainer(t),
                  1 === e.sy
                    ? ((this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this)),
                      (this.is = PropertyFactory.getProp(
                        t,
                        e.is,
                        0,
                        0.01,
                        this
                      )),
                      (this.convertToPath = this.convertStarToPath))
                    : (this.convertToPath = this.convertPolygonToPath),
                  (this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this)),
                  (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                  (this.r = PropertyFactory.getProp(
                    t,
                    e.r,
                    0,
                    degToRads,
                    this
                  )),
                  (this.or = PropertyFactory.getProp(t, e.or, 0, 0, this)),
                  (this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this)),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  this.localShapeCollection.addShape(this.v),
                  (this.paths = this.localShapeCollection),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertToPath());
              }
              function d(t, e) {
                (this.v = shapePool.newElement()),
                  this.v.setPathData(!0, 4),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.localShapeCollection.addShape(this.v),
                  (this.d = e.d),
                  (this.elem = t),
                  (this.comp = t.comp),
                  (this.frameId = -1),
                  this.initDynamicPropertyContainer(t),
                  (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertEllToPath());
              }
              return {
                getShapeProp: function (t, e, r) {
                  var i;
                  return (
                    3 === r || 4 === r
                      ? (i = new ((3 === r ? e.pt : e.ks).k.length ? o : a)(
                          t,
                          e,
                          r
                        ))
                      : 5 === r
                      ? (i = new m(t, e))
                      : 6 === r
                      ? (i = new l(t, e))
                      : 7 === r && (i = new p(t, e)),
                    i.k && t.addDynamicProperty(i),
                    i
                  );
                },
                getConstructorFunction: function () {
                  return a;
                },
                getKeyframedConstructorFunction: function () {
                  return o;
                },
              };
            })(),
            ShapeModifiers =
              ((Ii = {}),
              (Ji = {}),
              (Ii.registerModifier = function (t, e) {
                Ji[t] || (Ji[t] = e);
              }),
              (Ii.getModifier = function (t, e, r) {
                return new Ji[t](e, r);
              }),
              Ii),
            Ii,
            Ji;
          function ShapeModifier() {}
          function TrimModifier() {}
          function RoundCornersModifier() {}
          function PuckerAndBloatModifier() {}
          function RepeaterModifier() {}
          function ShapeCollection() {
            (this._length = 0),
              (this._maxLength = 4),
              (this.shapes = createSizedArray(this._maxLength));
          }
          function DashProperty(t, e, r, i) {
            (this.elem = t),
              (this.frameId = -1),
              (this.dataProps = createSizedArray(e.length)),
              (this.renderer = r),
              (this.k = !1),
              (this.dashStr = ""),
              (this.dashArray = createTypedArray(
                "float32",
                e.length ? e.length - 1 : 0
              )),
              (this.dashoffset = createTypedArray("float32", 1)),
              this.initDynamicPropertyContainer(i);
            for (var s, a = e.length || 0, n = 0; n < a; n += 1)
              (s = PropertyFactory.getProp(t, e[n].v, 0, 0, this)),
                (this.k = s.k || this.k),
                (this.dataProps[n] = { n: e[n].n, p: s });
            this.k || this.getValue(!0), (this._isAnimated = this.k);
          }
          function GradientProperty(t, e, r) {
            (this.data = e), (this.c = createTypedArray("uint8c", 4 * e.p));
            var i = e.k.k[0].s
              ? e.k.k[0].s.length - 4 * e.p
              : e.k.k.length - 4 * e.p;
            (this.o = createTypedArray("float32", i)),
              (this._cmdf = !1),
              (this._omdf = !1),
              (this._collapsable = this.checkCollapsable()),
              (this._hasOpacity = i),
              this.initDynamicPropertyContainer(r),
              (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
              (this.k = this.prop.k),
              this.getValue(!0);
          }
          (ShapeModifier.prototype.initModifierProperties = function () {}),
            (ShapeModifier.prototype.addShapeToModifier = function () {}),
            (ShapeModifier.prototype.addShape = function (t) {
              var e;
              this.closed ||
                (t.sh.container.addDynamicProperty(t.sh),
                (e = {
                  shape: t.sh,
                  data: t,
                  localShapeCollection:
                    shapeCollectionPool.newShapeCollection(),
                }),
                this.shapes.push(e),
                this.addShapeToModifier(e),
                this._isAnimated && t.setAsAnimated());
            }),
            (ShapeModifier.prototype.init = function (t, e) {
              (this.shapes = []),
                (this.elem = t),
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e),
                (this.frameId = initialDefaultFrame),
                (this.closed = !1),
                (this.k = !1),
                this.dynamicProperties.length
                  ? (this.k = !0)
                  : this.getValue(!0);
            }),
            (ShapeModifier.prototype.processKeys = function () {
              this.elem.globalData.frameId !== this.frameId &&
                ((this.frameId = this.elem.globalData.frameId),
                this.iterateDynamicProperties());
            }),
            extendPrototype([DynamicPropertyContainer], ShapeModifier),
            extendPrototype([ShapeModifier], TrimModifier),
            (TrimModifier.prototype.initModifierProperties = function (t, e) {
              (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
                (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
                (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
                (this.sValue = 0),
                (this.eValue = 0),
                (this.getValue = this.processKeys),
                (this.m = e.m),
                (this._isAnimated =
                  !!this.s.effectsSequence.length ||
                  !!this.e.effectsSequence.length ||
                  !!this.o.effectsSequence.length);
            }),
            (TrimModifier.prototype.addShapeToModifier = function (t) {
              t.pathsData = [];
            }),
            (TrimModifier.prototype.calculateShapeEdges = function (
              t,
              e,
              r,
              i,
              s
            ) {
              var a = [];
              e <= 1
                ? a.push({ s: t, e: e })
                : 1 <= t
                ? a.push({ s: t - 1, e: e - 1 })
                : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
              for (var n, o, h = [], l = a.length, p = 0; p < l; p += 1)
                (o = a[p]).e * s < i ||
                  o.s * s > i + r ||
                  ((n = o.s * s <= i ? 0 : (o.s * s - i) / r),
                  (o = o.e * s >= i + r ? 1 : (o.e * s - i) / r),
                  h.push([n, o]));
              return h.length || h.push([0, 0]), h;
            }),
            (TrimModifier.prototype.releasePathsData = function (t) {
              for (var e = t.length, r = 0; r < e; r += 1)
                segmentsLengthPool.release(t[r]);
              return (t.length = 0), t;
            }),
            (TrimModifier.prototype.processShapes = function (t) {
              var e, r, i, s;
              this._mdf || t
                ? ((r = (this.o.v % 360) / 360) < 0 && (r += 1),
                  (i =
                    1 < this.s.v
                      ? 1 + r
                      : this.s.v < 0
                      ? 0 + r
                      : this.s.v + r) >
                    (s =
                      1 < this.e.v
                        ? 1 + r
                        : this.e.v < 0
                        ? 0 + r
                        : this.e.v + r) && ((r = i), (i = s), (s = r)),
                  (i = 1e-4 * Math.round(1e4 * i)),
                  (s = 1e-4 * Math.round(1e4 * s)),
                  (this.sValue = i),
                  (this.eValue = s))
                : ((i = this.sValue), (s = this.eValue));
              var a,
                n,
                o,
                h,
                l,
                p = this.shapes.length,
                m = 0;
              if (s === i)
                for (u = 0; u < p; u += 1)
                  this.shapes[u].localShapeCollection.releaseShapes(),
                    (this.shapes[u].shape._mdf = !0),
                    (this.shapes[u].shape.paths =
                      this.shapes[u].localShapeCollection),
                    this._mdf && (this.shapes[u].pathsData.length = 0);
              else if ((1 === s && 0 === i) || (0 === s && 1 === i)) {
                if (this._mdf)
                  for (u = 0; u < p; u += 1)
                    (this.shapes[u].pathsData.length = 0),
                      (this.shapes[u].shape._mdf = !0);
              } else {
                for (var f, c, d = [], u = 0; u < p; u += 1)
                  if (
                    (f = this.shapes[u]).shape._mdf ||
                    this._mdf ||
                    t ||
                    2 === this.m
                  ) {
                    if (
                      ((n = (e = f.shape.paths)._length),
                      (l = 0),
                      !f.shape._mdf && f.pathsData.length)
                    )
                      l = f.totalShapeLength;
                    else {
                      for (
                        o = this.releasePathsData(f.pathsData), a = 0;
                        a < n;
                        a += 1
                      )
                        (h = bez.getSegmentsLength(e.shapes[a])),
                          o.push(h),
                          (l += h.totalLength);
                      (f.totalShapeLength = l), (f.pathsData = o);
                    }
                    (m += l), (f.shape._mdf = !0);
                  } else f.shape.paths = f.localShapeCollection;
                var y,
                  g = i,
                  v = s,
                  b = 0;
                for (u = p - 1; 0 <= u; --u)
                  if ((f = this.shapes[u]).shape._mdf) {
                    for (
                      (c = f.localShapeCollection).releaseShapes(),
                        2 === this.m && 1 < p
                          ? ((y = this.calculateShapeEdges(
                              i,
                              s,
                              f.totalShapeLength,
                              b,
                              m
                            )),
                            (b += f.totalShapeLength))
                          : (y = [[g, v]]),
                        n = y.length,
                        a = 0;
                      a < n;
                      a += 1
                    ) {
                      (g = y[a][0]),
                        (v = y[a][1]),
                        (d.length = 0),
                        v <= 1
                          ? d.push({
                              s: f.totalShapeLength * g,
                              e: f.totalShapeLength * v,
                            })
                          : 1 <= g
                          ? d.push({
                              s: f.totalShapeLength * (g - 1),
                              e: f.totalShapeLength * (v - 1),
                            })
                          : (d.push({
                              s: f.totalShapeLength * g,
                              e: f.totalShapeLength,
                            }),
                            d.push({ s: 0, e: f.totalShapeLength * (v - 1) }));
                      var P,
                        E = this.addShapes(f, d[0]);
                      d[0].s !== d[0].e &&
                        (1 < d.length &&
                          (E = f.shape.paths.shapes[f.shape.paths._length - 1].c
                            ? ((P = E.pop()),
                              this.addPaths(E, c),
                              this.addShapes(f, d[1], P))
                            : (this.addPaths(E, c), this.addShapes(f, d[1]))),
                        this.addPaths(E, c));
                    }
                    f.shape.paths = c;
                  }
              }
            }),
            (TrimModifier.prototype.addPaths = function (t, e) {
              for (var r = t.length, i = 0; i < r; i += 1) e.addShape(t[i]);
            }),
            (TrimModifier.prototype.addSegment = function (
              t,
              e,
              r,
              i,
              s,
              a,
              n
            ) {
              s.setXYAt(e[0], e[1], "o", a),
                s.setXYAt(r[0], r[1], "i", a + 1),
                n && s.setXYAt(t[0], t[1], "v", a),
                s.setXYAt(i[0], i[1], "v", a + 1);
            }),
            (TrimModifier.prototype.addSegmentFromArray = function (
              t,
              e,
              r,
              i
            ) {
              e.setXYAt(t[1], t[5], "o", r),
                e.setXYAt(t[2], t[6], "i", r + 1),
                i && e.setXYAt(t[0], t[4], "v", r),
                e.setXYAt(t[3], t[7], "v", r + 1);
            }),
            (TrimModifier.prototype.addShapes = function (t, e, r) {
              var i,
                s,
                a,
                n,
                o,
                h,
                l,
                p,
                m = t.pathsData,
                f = t.shape.paths.shapes,
                c = t.shape.paths._length,
                d = 0,
                u = [],
                y = !0,
                g = r
                  ? ((n = r._length), r._length)
                  : ((r = shapePool.newElement()), (n = 0));
              for (u.push(r), i = 0; i < c; i += 1) {
                for (
                  o = m[i].lengths,
                    r.c = f[i].c,
                    a = f[i].c ? o.length : o.length + 1,
                    s = 1;
                  s < a;
                  s += 1
                )
                  if (d + (p = o[s - 1]).addedLength < e.s)
                    (d += p.addedLength), (r.c = !1);
                  else {
                    if (d > e.e) {
                      r.c = !1;
                      break;
                    }
                    e.s <= d && e.e >= d + p.addedLength
                      ? (this.addSegment(
                          f[i].v[s - 1],
                          f[i].o[s - 1],
                          f[i].i[s],
                          f[i].v[s],
                          r,
                          n,
                          y
                        ),
                        (y = !1))
                      : ((h = bez.getNewSegment(
                          f[i].v[s - 1],
                          f[i].v[s],
                          f[i].o[s - 1],
                          f[i].i[s],
                          (e.s - d) / p.addedLength,
                          (e.e - d) / p.addedLength,
                          o[s - 1]
                        )),
                        this.addSegmentFromArray(h, r, n, y),
                        (r.c = y = !1)),
                      (d += p.addedLength),
                      (n += 1);
                  }
                if (
                  (f[i].c &&
                    o.length &&
                    ((p = o[s - 1]),
                    d <= e.e
                      ? ((l = o[s - 1].addedLength),
                        e.s <= d && e.e >= d + l
                          ? (this.addSegment(
                              f[i].v[s - 1],
                              f[i].o[s - 1],
                              f[i].i[0],
                              f[i].v[0],
                              r,
                              n,
                              y
                            ),
                            (y = !1))
                          : ((h = bez.getNewSegment(
                              f[i].v[s - 1],
                              f[i].v[0],
                              f[i].o[s - 1],
                              f[i].i[0],
                              (e.s - d) / l,
                              (e.e - d) / l,
                              o[s - 1]
                            )),
                            this.addSegmentFromArray(h, r, n, y),
                            (r.c = y = !1)))
                      : (r.c = !1),
                    (d += p.addedLength),
                    (n += 1)),
                  r._length &&
                    (r.setXYAt(r.v[g][0], r.v[g][1], "i", g),
                    r.setXYAt(
                      r.v[r._length - 1][0],
                      r.v[r._length - 1][1],
                      "o",
                      r._length - 1
                    )),
                  d > e.e)
                )
                  break;
                i < c - 1 &&
                  ((r = shapePool.newElement()), (y = !0), u.push(r), (n = 0));
              }
              return u;
            }),
            ShapeModifiers.registerModifier("tm", TrimModifier),
            extendPrototype([ShapeModifier], RoundCornersModifier),
            (RoundCornersModifier.prototype.initModifierProperties = function (
              t,
              e
            ) {
              (this.getValue = this.processKeys),
                (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
                (this._isAnimated = !!this.rd.effectsSequence.length);
            }),
            (RoundCornersModifier.prototype.processPath = function (t, e) {
              var r = shapePool.newElement();
              r.c = t.c;
              for (
                var i, s, a, n, o, h, l, p, m, f, c = t._length, d = 0, u = 0;
                u < c;
                u += 1
              )
                (i = t.v[u]),
                  (a = t.o[u]),
                  (s = t.i[u]),
                  i[0] === a[0] &&
                  i[1] === a[1] &&
                  i[0] === s[0] &&
                  i[1] === s[1]
                    ? (0 !== u && u !== c - 1) || t.c
                      ? ((n = 0 === u ? t.v[c - 1] : t.v[u - 1]),
                        (h = (o = Math.sqrt(
                          Math.pow(i[0] - n[0], 2) + Math.pow(i[1] - n[1], 2)
                        ))
                          ? Math.min(o / 2, e) / o
                          : 0),
                        (m = i[0] + (n[0] - i[0]) * h),
                        (f = i[1] - (i[1] - n[1]) * h),
                        (l = m - (m - i[0]) * roundCorner),
                        (p = f - (f - i[1]) * roundCorner),
                        r.setTripleAt(m, f, l, p, m, f, d),
                        (d += 1),
                        (n = u === c - 1 ? t.v[0] : t.v[u + 1]),
                        (h = (o = Math.sqrt(
                          Math.pow(i[0] - n[0], 2) + Math.pow(i[1] - n[1], 2)
                        ))
                          ? Math.min(o / 2, e) / o
                          : 0),
                        (l = i[0] + (n[0] - i[0]) * h),
                        (p = i[1] + (n[1] - i[1]) * h),
                        (m = l - (l - i[0]) * roundCorner),
                        (f = p - (p - i[1]) * roundCorner),
                        r.setTripleAt(l, p, l, p, m, f, d))
                      : r.setTripleAt(i[0], i[1], a[0], a[1], s[0], s[1], d)
                    : r.setTripleAt(
                        t.v[u][0],
                        t.v[u][1],
                        t.o[u][0],
                        t.o[u][1],
                        t.i[u][0],
                        t.i[u][1],
                        d
                      ),
                  (d += 1);
              return r;
            }),
            (RoundCornersModifier.prototype.processShapes = function (t) {
              var e,
                r,
                i,
                s,
                a,
                n,
                o = this.shapes.length,
                h = this.rd.v;
              if (0 !== h)
                for (r = 0; r < o; r += 1) {
                  if (
                    ((n = (a = this.shapes[r]).localShapeCollection),
                    a.shape._mdf || this._mdf || t)
                  )
                    for (
                      n.releaseShapes(),
                        a.shape._mdf = !0,
                        e = a.shape.paths.shapes,
                        s = a.shape.paths._length,
                        i = 0;
                      i < s;
                      i += 1
                    )
                      n.addShape(this.processPath(e[i], h));
                  a.shape.paths = a.localShapeCollection;
                }
              this.dynamicProperties.length || (this._mdf = !1);
            }),
            ShapeModifiers.registerModifier("rd", RoundCornersModifier),
            extendPrototype([ShapeModifier], PuckerAndBloatModifier),
            (PuckerAndBloatModifier.prototype.initModifierProperties =
              function (t, e) {
                (this.getValue = this.processKeys),
                  (this.amount = PropertyFactory.getProp(
                    t,
                    e.a,
                    0,
                    null,
                    this
                  )),
                  (this._isAnimated = !!this.amount.effectsSequence.length);
              }),
            (PuckerAndBloatModifier.prototype.processPath = function (t, e) {
              for (
                var r = e / 100, i = [0, 0], s = t._length, a = 0, a = 0;
                a < s;
                a += 1
              )
                (i[0] += t.v[a][0]), (i[1] += t.v[a][1]);
              (i[0] /= s), (i[1] /= s);
              var n,
                o,
                h,
                l,
                p,
                m,
                f = shapePool.newElement();
              for (f.c = t.c, a = 0; a < s; a += 1)
                (n = t.v[a][0] + (i[0] - t.v[a][0]) * r),
                  (o = t.v[a][1] + (i[1] - t.v[a][1]) * r),
                  (h = t.o[a][0] + (i[0] - t.o[a][0]) * -r),
                  (l = t.o[a][1] + (i[1] - t.o[a][1]) * -r),
                  (p = t.i[a][0] + (i[0] - t.i[a][0]) * -r),
                  (m = t.i[a][1] + (i[1] - t.i[a][1]) * -r),
                  f.setTripleAt(n, o, h, l, p, m, a);
              return f;
            }),
            (PuckerAndBloatModifier.prototype.processShapes = function (t) {
              var e,
                r,
                i,
                s,
                a,
                n,
                o = this.shapes.length,
                h = this.amount.v;
              if (0 !== h)
                for (r = 0; r < o; r += 1) {
                  if (
                    ((n = (a = this.shapes[r]).localShapeCollection),
                    a.shape._mdf || this._mdf || t)
                  )
                    for (
                      n.releaseShapes(),
                        a.shape._mdf = !0,
                        e = a.shape.paths.shapes,
                        s = a.shape.paths._length,
                        i = 0;
                      i < s;
                      i += 1
                    )
                      n.addShape(this.processPath(e[i], h));
                  a.shape.paths = a.localShapeCollection;
                }
              this.dynamicProperties.length || (this._mdf = !1);
            }),
            ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
            extendPrototype([ShapeModifier], RepeaterModifier),
            (RepeaterModifier.prototype.initModifierProperties = function (
              t,
              e
            ) {
              (this.getValue = this.processKeys),
                (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
                (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
                (this.tr = TransformPropertyFactory.getTransformProperty(
                  t,
                  e.tr,
                  this
                )),
                (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
                (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
                (this.data = e),
                this.dynamicProperties.length || this.getValue(!0),
                (this._isAnimated = !!this.dynamicProperties.length),
                (this.pMatrix = new Matrix()),
                (this.rMatrix = new Matrix()),
                (this.sMatrix = new Matrix()),
                (this.tMatrix = new Matrix()),
                (this.matrix = new Matrix());
            }),
            (RepeaterModifier.prototype.applyTransforms = function (
              t,
              e,
              r,
              i,
              s,
              a
            ) {
              var n = a ? -1 : 1,
                o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
                h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
              t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]),
                e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
                e.rotate(-i.r.v * n * s),
                e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
                r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
                r.scale(a ? 1 / o : o, a ? 1 / h : h),
                r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
            }),
            (RepeaterModifier.prototype.init = function (t, e, r, i) {
              for (
                this.elem = t,
                  this.arr = e,
                  this.pos = r,
                  this.elemsData = i,
                  this._currentCopies = 0,
                  this._elements = [],
                  this._groups = [],
                  this.frameId = -1,
                  this.initDynamicPropertyContainer(t),
                  this.initModifierProperties(t, e[r]);
                0 < r;

              )
                this._elements.unshift(e[--r]);
              this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
            }),
            (RepeaterModifier.prototype.resetElements = function (t) {
              for (var e = t.length, r = 0; r < e; r += 1)
                (t[r]._processed = !1),
                  "gr" === t[r].ty && this.resetElements(t[r].it);
            }),
            (RepeaterModifier.prototype.cloneElements = function (t) {
              t = JSON.parse(JSON.stringify(t));
              return this.resetElements(t), t;
            }),
            (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
              for (var r = t.length, i = 0; i < r; i += 1)
                (t[i]._render = e),
                  "gr" === t[i].ty && this.changeGroupRender(t[i].it, e);
            }),
            (RepeaterModifier.prototype.processShapes = function (t) {
              var e,
                r,
                i,
                s,
                a,
                n = !1;
              if (this._mdf || t) {
                var o,
                  h = Math.ceil(this.c.v);
                if (this._groups.length < h) {
                  for (; this._groups.length < h; ) {
                    var l = {
                      it: this.cloneElements(this._elements),
                      ty: "gr",
                    };
                    l.it.push({
                      a: { a: 0, ix: 1, k: [0, 0] },
                      nm: "Transform",
                      o: { a: 0, ix: 7, k: 100 },
                      p: { a: 0, ix: 2, k: [0, 0] },
                      r: {
                        a: 1,
                        ix: 6,
                        k: [
                          { s: 0, e: 0, t: 0 },
                          { s: 0, e: 0, t: 1 },
                        ],
                      },
                      s: { a: 0, ix: 3, k: [100, 100] },
                      sa: { a: 0, ix: 5, k: 0 },
                      sk: { a: 0, ix: 4, k: 0 },
                      ty: "tr",
                    }),
                      this.arr.splice(0, 0, l),
                      this._groups.splice(0, 0, l),
                      (this._currentCopies += 1);
                  }
                  this.elem.reloadShapes(), (n = !0);
                }
                for (i = a = 0; i <= this._groups.length - 1; i += 1)
                  (this._groups[i]._render = o = a < h),
                    this.changeGroupRender(this._groups[i].it, o),
                    o ||
                      (0 !==
                      (o = (o = this.elemsData[i].it)[o.length - 1]).transform
                        .op.v
                        ? ((o.transform.op._mdf = !0), (o.transform.op.v = 0))
                        : (o.transform.op._mdf = !1)),
                    (a += 1);
                this._currentCopies = h;
                var p = this.o.v,
                  t = p % 1,
                  m = 0 < p ? Math.floor(p) : Math.ceil(p),
                  f = this.pMatrix.props,
                  c = this.rMatrix.props,
                  d = this.sMatrix.props;
                this.pMatrix.reset(),
                  this.rMatrix.reset(),
                  this.sMatrix.reset(),
                  this.tMatrix.reset(),
                  this.matrix.reset();
                var u,
                  y,
                  g = 0;
                if (0 < p) {
                  for (; g < m; )
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !1
                    ),
                      (g += 1);
                  t &&
                    (this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      t,
                      !1
                    ),
                    (g += t));
                } else if (p < 0) {
                  for (; m < g; )
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !0
                    ),
                      --g;
                  t &&
                    (this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      -t,
                      !0
                    ),
                    (g -= t));
                }
                for (
                  i = 1 === this.data.m ? 0 : this._currentCopies - 1,
                    s = 1 === this.data.m ? 1 : -1,
                    a = this._currentCopies;
                  a;

                ) {
                  if (
                    ((y = (r = (e = this.elemsData[i].it)[e.length - 1]
                      .transform.mProps.v.props).length),
                    (e[e.length - 1].transform.mProps._mdf = !0),
                    (e[e.length - 1].transform.op._mdf = !0),
                    (e[e.length - 1].transform.op.v =
                      1 === this._currentCopies
                        ? this.so.v
                        : this.so.v +
                          (this.eo.v - this.so.v) *
                            (i / (this._currentCopies - 1))),
                    0 !== g)
                  ) {
                    for (
                      ((0 !== i && 1 === s) ||
                        (i !== this._currentCopies - 1 && -1 === s)) &&
                        this.applyTransforms(
                          this.pMatrix,
                          this.rMatrix,
                          this.sMatrix,
                          this.tr,
                          1,
                          !1
                        ),
                        this.matrix.transform(
                          c[0],
                          c[1],
                          c[2],
                          c[3],
                          c[4],
                          c[5],
                          c[6],
                          c[7],
                          c[8],
                          c[9],
                          c[10],
                          c[11],
                          c[12],
                          c[13],
                          c[14],
                          c[15]
                        ),
                        this.matrix.transform(
                          d[0],
                          d[1],
                          d[2],
                          d[3],
                          d[4],
                          d[5],
                          d[6],
                          d[7],
                          d[8],
                          d[9],
                          d[10],
                          d[11],
                          d[12],
                          d[13],
                          d[14],
                          d[15]
                        ),
                        this.matrix.transform(
                          f[0],
                          f[1],
                          f[2],
                          f[3],
                          f[4],
                          f[5],
                          f[6],
                          f[7],
                          f[8],
                          f[9],
                          f[10],
                          f[11],
                          f[12],
                          f[13],
                          f[14],
                          f[15]
                        ),
                        u = 0;
                      u < y;
                      u += 1
                    )
                      r[u] = this.matrix.props[u];
                    this.matrix.reset();
                  } else
                    for (this.matrix.reset(), u = 0; u < y; u += 1)
                      r[u] = this.matrix.props[u];
                  (g += 1), --a, (i += s);
                }
              } else
                for (a = this._currentCopies, i = 0, s = 1; a; )
                  (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps
                    .v.props),
                    (e[e.length - 1].transform.mProps._mdf = !1),
                    (e[e.length - 1].transform.op._mdf = !1),
                    --a,
                    (i += s);
              return n;
            }),
            (RepeaterModifier.prototype.addShape = function () {}),
            ShapeModifiers.registerModifier("rp", RepeaterModifier),
            (ShapeCollection.prototype.addShape = function (t) {
              this._length === this._maxLength &&
                ((this.shapes = this.shapes.concat(
                  createSizedArray(this._maxLength)
                )),
                (this._maxLength *= 2)),
                (this.shapes[this._length] = t),
                (this._length += 1);
            }),
            (ShapeCollection.prototype.releaseShapes = function () {
              for (var t = 0; t < this._length; t += 1)
                shapePool.release(this.shapes[t]);
              this._length = 0;
            }),
            (DashProperty.prototype.getValue = function (t) {
              if (
                (this.elem.globalData.frameId !== this.frameId || t) &&
                ((this.frameId = this.elem.globalData.frameId),
                this.iterateDynamicProperties(),
                (this._mdf = this._mdf || t),
                this._mdf)
              ) {
                var e = 0,
                  r = this.dataProps.length;
                for (
                  "svg" === this.renderer && (this.dashStr = ""), e = 0;
                  e < r;
                  e += 1
                )
                  "o" !== this.dataProps[e].n
                    ? "svg" === this.renderer
                      ? (this.dashStr += " " + this.dataProps[e].p.v)
                      : (this.dashArray[e] = this.dataProps[e].p.v)
                    : (this.dashoffset[0] = this.dataProps[e].p.v);
              }
            }),
            extendPrototype([DynamicPropertyContainer], DashProperty),
            (GradientProperty.prototype.comparePoints = function (t, e) {
              for (var r = 0, i = this.o.length / 2; r < i; ) {
                if (0.01 < Math.abs(t[4 * r] - t[4 * e + 2 * r])) return !1;
                r += 1;
              }
              return !0;
            }),
            (GradientProperty.prototype.checkCollapsable = function () {
              if (this.o.length / 2 != this.c.length / 4) return !1;
              if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e; ) {
                  if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                    return !1;
                  t += 1;
                }
              else if (!this.comparePoints(this.data.k.k, this.data.p))
                return !1;
              return !0;
            }),
            (GradientProperty.prototype.getValue = function (t) {
              if (
                (this.prop.getValue(),
                (this._mdf = !1),
                (this._cmdf = !1),
                (this._omdf = !1),
                this.prop._mdf || t)
              ) {
                for (var e, r, i = 4 * this.data.p, s = 0; s < i; s += 1)
                  (e = s % 4 == 0 ? 100 : 255),
                    (r = Math.round(this.prop.v[s] * e)),
                    this.c[s] !== r && ((this.c[s] = r), (this._cmdf = !t));
                if (this.o.length)
                  for (
                    i = this.prop.v.length, s = 4 * this.data.p;
                    s < i;
                    s += 1
                  )
                    (e = s % 2 == 0 ? 100 : 1),
                      (r =
                        s % 2 == 0
                          ? Math.round(100 * this.prop.v[s])
                          : this.prop.v[s]),
                      this.o[s - 4 * this.data.p] !== r &&
                        ((this.o[s - 4 * this.data.p] = r), (this._omdf = !t));
                this._mdf = !t;
              }
            }),
            extendPrototype([DynamicPropertyContainer], GradientProperty);
          var buildShapeString = function (t, e, r, i) {
              if (0 === e) return "";
              for (
                var s = t.o,
                  a = t.i,
                  n = t.v,
                  o = " M" + i.applyToPointStringified(n[0][0], n[0][1]),
                  h = 1;
                h < e;
                h += 1
              )
                o +=
                  " C" +
                  i.applyToPointStringified(s[h - 1][0], s[h - 1][1]) +
                  " " +
                  i.applyToPointStringified(a[h][0], a[h][1]) +
                  " " +
                  i.applyToPointStringified(n[h][0], n[h][1]);
              return (
                r &&
                  e &&
                  ((o +=
                    " C" +
                    i.applyToPointStringified(s[h - 1][0], s[h - 1][1]) +
                    " " +
                    i.applyToPointStringified(a[0][0], a[0][1]) +
                    " " +
                    i.applyToPointStringified(n[0][0], n[0][1])),
                  (o += "z")),
                o
              );
            },
            audioControllerFactory =
              ((Lk.prototype = {
                addAudio: function (t) {
                  this.audios.push(t);
                },
                pause: function () {
                  for (var t = this.audios.length, e = 0; e < t; e += 1)
                    this.audios[e].pause();
                },
                resume: function () {
                  for (var t = this.audios.length, e = 0; e < t; e += 1)
                    this.audios[e].resume();
                },
                setRate: function (t) {
                  for (var e = this.audios.length, r = 0; r < e; r += 1)
                    this.audios[r].setRate(t);
                },
                createAudio: function (t) {
                  return this.audioFactory
                    ? this.audioFactory(t)
                    : Howl
                    ? new Howl({ src: [t] })
                    : {
                        isPlaying: !1,
                        play: function () {
                          this.isPlaying = !0;
                        },
                        seek: function () {
                          this.isPlaying = !1;
                        },
                        playing: function () {},
                        rate: function () {},
                        setVolume: function () {},
                      };
                },
                setAudioFactory: function (t) {
                  this.audioFactory = t;
                },
                setVolume: function (t) {
                  (this._volume = t), this._updateVolume();
                },
                mute: function () {
                  (this._isMuted = !0), this._updateVolume();
                },
                unmute: function () {
                  (this._isMuted = !1), this._updateVolume();
                },
                getVolume: function () {
                  return this._volume;
                },
                _updateVolume: function () {
                  for (var t = this.audios.length, e = 0; e < t; e += 1)
                    this.audios[e].volume(
                      this._volume * (this._isMuted ? 0 : 1)
                    );
                },
              }),
              function () {
                return new Lk();
              }),
            ImagePreloader =
              (($k = (function () {
                var t = createTag("canvas");
                (t.width = 1), (t.height = 1);
                var e = t.getContext("2d");
                return (
                  (e.fillStyle = "rgba(0,0,0,0)"), e.fillRect(0, 0, 1, 1), t
                );
              })()),
              (el.prototype = {
                loadAssets: function (t, e) {
                  this.imagesLoadedCb = e;
                  for (var r = t.length, i = 0; i < r; i += 1)
                    t[i].layers ||
                      (t[i].t && "seq" !== t[i].t
                        ? 3 === t[i].t &&
                          ((this.totalFootages += 1),
                          this.images.push(this.createFootageData(t[i])))
                        : ((this.totalImages += 1),
                          this.images.push(this._createImageData(t[i]))));
                },
                setAssetsPath: function (t) {
                  this.assetsPath = t || "";
                },
                setPath: function (t) {
                  this.path = t || "";
                },
                loadedImages: function () {
                  return this.totalImages === this.loadedAssets;
                },
                loadedFootages: function () {
                  return this.totalFootages === this.loadedFootagesCount;
                },
                destroy: function () {
                  (this.imagesLoadedCb = null), (this.images.length = 0);
                },
                getAsset: function (t) {
                  for (var e = 0, r = this.images.length; e < r; ) {
                    if (this.images[e].assetData === t)
                      return this.images[e].img;
                    e += 1;
                  }
                  return null;
                },
                createImgData: function (t) {
                  var e = bl(t, this.assetsPath, this.path),
                    r = createTag("img");
                  (r.crossOrigin = "anonymous"),
                    r.addEventListener("load", this._imageLoaded, !1),
                    r.addEventListener(
                      "error",
                      function () {
                        (i.img = $k), this._imageLoaded();
                      }.bind(this),
                      !1
                    ),
                    (r.src = e);
                  var i = { img: r, assetData: t };
                  return i;
                },
                createImageData: function (t) {
                  var e = bl(t, this.assetsPath, this.path),
                    r = createNS("image");
                  isSafari
                    ? this.testImageLoaded(r)
                    : r.addEventListener("load", this._imageLoaded, !1),
                    r.addEventListener(
                      "error",
                      function () {
                        (i.img = $k), this._imageLoaded();
                      }.bind(this),
                      !1
                    ),
                    r.setAttributeNS("http://www.w3.org/1999/xlink", "href", e),
                    this._elementHelper.append
                      ? this._elementHelper.append(r)
                      : this._elementHelper.appendChild(r);
                  var i = { img: r, assetData: t };
                  return i;
                },
                imageLoaded: _k,
                footageLoaded: al,
                setCacheType: function (t, e) {
                  "svg" === t
                    ? ((this._elementHelper = e),
                      (this._createImageData = this.createImageData.bind(this)))
                    : (this._createImageData = this.createImgData.bind(this));
                },
              }),
              el),
            featureSupport =
              ((Ml = { maskType: !0 }),
              (/MSIE 10/i.test(navigator.userAgent) ||
                /MSIE 9/i.test(navigator.userAgent) ||
                /rv:11.0/i.test(navigator.userAgent) ||
                /Edge\/\d./i.test(navigator.userAgent)) &&
                (Ml.maskType = !1),
              Ml),
            filtersFactory = {
              createFilter: function (t, e) {
                var r = createNS("filter");
                return (
                  r.setAttribute("id", t),
                  !0 !== e &&
                    (r.setAttribute("filterUnits", "objectBoundingBox"),
                    r.setAttribute("x", "0%"),
                    r.setAttribute("y", "0%"),
                    r.setAttribute("width", "100%"),
                    r.setAttribute("height", "100%")),
                  r
                );
              },
              createAlphaToLuminanceFilter: function () {
                var t = createNS("feColorMatrix");
                return (
                  t.setAttribute("type", "matrix"),
                  t.setAttribute("color-interpolation-filters", "sRGB"),
                  t.setAttribute(
                    "values",
                    "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
                  ),
                  t
                );
              },
            },
            assetLoader = {
              load: function (t, e, r) {
                var i,
                  s = new XMLHttpRequest();
                try {
                  s.responseType = "json";
                } catch (t) {}
                (s.onreadystatechange = function () {
                  if (4 === s.readyState)
                    if (200 === s.status) (i = Sl(s)), e(i);
                    else
                      try {
                        (i = Sl(s)), e(i);
                      } catch (t) {
                        r && r(t);
                      }
                }),
                  s.open("GET", t, !0),
                  s.send();
              },
            },
            Ml,
            $k;
          function Sl(t) {
            return t.response && "object" == typeof t.response
              ? t.response
              : t.response && "string" == typeof t.response
              ? JSON.parse(t.response)
              : t.responseText
              ? JSON.parse(t.responseText)
              : null;
          }
          function _k() {
            (this.loadedAssets += 1),
              this.loadedAssets === this.totalImages &&
                this.loadedFootagesCount === this.totalFootages &&
                this.imagesLoadedCb &&
                this.imagesLoadedCb(null);
          }
          function al() {
            (this.loadedFootagesCount += 1),
              this.loadedAssets === this.totalImages &&
                this.loadedFootagesCount === this.totalFootages &&
                this.imagesLoadedCb &&
                this.imagesLoadedCb(null);
          }
          function bl(t, e, r) {
            var i = "";
            return (
              t.e
                ? (i = t.p)
                : e
                ? (i =
                    e +
                    (e =
                      -1 !== (e = t.p).indexOf("images/")
                        ? e.split("/")[1]
                        : e))
                : ((i = r), (i += t.u || ""), (i += t.p)),
              i
            );
          }
          function el() {
            (this._imageLoaded = _k.bind(this)),
              (this._footageLoaded = al.bind(this)),
              (this.testImageLoaded = function (t) {
                var e = 0,
                  r = setInterval(
                    function () {
                      (t.getBBox().width || 500 < e) &&
                        (this._imageLoaded(), clearInterval(r)),
                        (e += 1);
                    }.bind(this),
                    50
                  );
              }.bind(this)),
              (this.createFootageData = function (t) {
                var e = { assetData: t },
                  t = bl(t, this.assetsPath, this.path);
                return (
                  assetLoader.load(
                    t,
                    function (t) {
                      (e.img = t), this._footageLoaded();
                    }.bind(this),
                    function () {
                      (e.img = {}), this._footageLoaded();
                    }.bind(this)
                  ),
                  e
                );
              }.bind(this)),
              (this.assetsPath = ""),
              (this.path = ""),
              (this.totalImages = 0),
              (this.totalFootages = 0),
              (this.loadedAssets = 0),
              (this.loadedFootagesCount = 0),
              (this.imagesLoadedCb = null),
              (this.images = []);
          }
          function Lk(t) {
            (this.audios = []),
              (this.audioFactory = t),
              (this._volume = 1),
              (this._isMuted = !1);
          }
          function TextAnimatorProperty(t, e, r) {
            (this._isFirstFrame = !0),
              (this._hasMaskedPath = !1),
              (this._frameId = -1),
              (this._textData = t),
              (this._renderType = e),
              (this._elem = r),
              (this._animatorsData = createSizedArray(this._textData.a.length)),
              (this._pathData = {}),
              (this._moreOptions = { alignment: {} }),
              (this.renderedLetters = []),
              (this.lettersChangedFlag = !1),
              this.initDynamicPropertyContainer(r);
          }
          function TextAnimatorDataProperty(t, e, r) {
            var i = { propType: !1 },
              s = PropertyFactory.getProp,
              a = e.a;
            (this.a = {
              r: a.r ? s(t, a.r, 0, degToRads, r) : i,
              rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
              ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
              sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
              sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
              s: a.s ? s(t, a.s, 1, 0.01, r) : i,
              a: a.a ? s(t, a.a, 1, 0, r) : i,
              o: a.o ? s(t, a.o, 0, 0.01, r) : i,
              p: a.p ? s(t, a.p, 1, 0, r) : i,
              sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
              sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
              fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
              fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
              fs: a.fs ? s(t, a.fs, 0, 0.01, r) : i,
              fb: a.fb ? s(t, a.fb, 0, 0.01, r) : i,
              t: a.t ? s(t, a.t, 0, 0, r) : i,
            }),
              (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r)),
              (this.s.t = e.s.t);
          }
          function LetterProps(t, e, r, i, s, a) {
            (this.o = t),
              (this.sw = e),
              (this.sc = r),
              (this.fc = i),
              (this.m = s),
              (this.p = a),
              (this._mdf = { o: !0, sw: !!e, sc: !!r, fc: !!i, m: !0, p: !0 });
          }
          function TextProperty(t, e) {
            (this._frameId = initialDefaultFrame),
              (this.pv = ""),
              (this.v = ""),
              (this.kf = !1),
              (this._isFirstFrame = !0),
              (this._mdf = !1),
              (this.data = e),
              (this.elem = t),
              (this.comp = this.elem.comp),
              (this.keysIndex = 0),
              (this.canResize = !1),
              (this.minimumFontSize = 1),
              (this.effectsSequence = []),
              (this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1,
              }),
              this.copyData(this.currentData, this.data.d.k[0].s),
              this.searchProperty() || this.completeTextData(this.currentData);
          }
          (TextAnimatorProperty.prototype.searchProperties = function () {
            for (
              var t,
                e = this._textData.a.length,
                r = PropertyFactory.getProp,
                i = 0;
              i < e;
              i += 1
            )
              (t = this._textData.a[i]),
                (this._animatorsData[i] = new TextAnimatorDataProperty(
                  this._elem,
                  t,
                  this
                ));
            this._textData.p && "m" in this._textData.p
              ? ((this._pathData = {
                  f: r(this._elem, this._textData.p.f, 0, 0, this),
                  l: r(this._elem, this._textData.p.l, 0, 0, this),
                  r: this._textData.p.r,
                  m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
                }),
                (this._hasMaskedPath = !0))
              : (this._hasMaskedPath = !1),
              (this._moreOptions.alignment = r(
                this._elem,
                this._textData.m.a,
                1,
                0,
                this
              ));
          }),
            (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
              if (
                ((this.lettersChangedFlag = e),
                this._mdf ||
                  this._isFirstFrame ||
                  e ||
                  (this._hasMaskedPath && this._pathData.m._mdf))
              ) {
                this._isFirstFrame = !1;
                var r,
                  i,
                  s,
                  a,
                  n,
                  o,
                  h,
                  l,
                  p,
                  m,
                  f,
                  c,
                  d,
                  u = this._moreOptions.alignment.v,
                  y = this._animatorsData,
                  g = this._textData,
                  v = this.mHelper,
                  b = this._renderType,
                  P = this.renderedLetters.length,
                  E = t.l;
                if (this._hasMaskedPath) {
                  if (
                    ((d = this._pathData.m),
                    !this._pathData.n || this._pathData._mdf)
                  ) {
                    for (
                      var x,
                        S = d.v,
                        A = { tLength: 0, segments: [] },
                        C =
                          (S = this._pathData.r ? S.reverse() : S)._length - 1,
                        _ = (f = 0);
                      _ < C;
                      _ += 1
                    )
                      (x = bez.buildBezierData(
                        S.v[_],
                        S.v[_ + 1],
                        [S.o[_][0] - S.v[_][0], S.o[_][1] - S.v[_][1]],
                        [
                          S.i[_ + 1][0] - S.v[_ + 1][0],
                          S.i[_ + 1][1] - S.v[_ + 1][1],
                        ]
                      )),
                        (A.tLength += x.segmentLength),
                        A.segments.push(x),
                        (f += x.segmentLength);
                    (_ = C),
                      d.v.c &&
                        ((x = bez.buildBezierData(
                          S.v[_],
                          S.v[0],
                          [S.o[_][0] - S.v[_][0], S.o[_][1] - S.v[_][1]],
                          [S.i[0][0] - S.v[0][0], S.i[0][1] - S.v[0][1]]
                        )),
                        (A.tLength += x.segmentLength),
                        A.segments.push(x),
                        (f += x.segmentLength)),
                      (this._pathData.pi = A);
                  }
                  if (
                    ((A = this._pathData.pi),
                    (r = this._pathData.f.v),
                    (n = 1),
                    (a = !(s = o = 0)),
                    (p = A.segments),
                    r < 0 && d.v.c)
                  )
                    for (
                      A.tLength < Math.abs(r) && (r = -Math.abs(r) % A.tLength),
                        n = (l = p[(o = p.length - 1)].points).length - 1;
                      r < 0;

                    )
                      (r += l[n].partialLength),
                        --n < 0 && (n = (l = p[--o].points).length - 1);
                  (h = (l = p[o].points)[n - 1]),
                    (m = (i = l[n]).partialLength);
                }
                C = E.length;
                var T,
                  k,
                  D,
                  M,
                  F,
                  w,
                  I,
                  V,
                  R,
                  B,
                  L,
                  G,
                  z,
                  N,
                  O,
                  H,
                  J = 0,
                  q = 0,
                  j = 1.2 * t.finalSize * 0.714,
                  W = !0,
                  X = y.length,
                  Y = -1,
                  U = r,
                  $ = o,
                  K = n,
                  Z = -1,
                  Q = "",
                  tt = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                  var et = 0,
                    rt = 0,
                    it = 2 === t.j ? -0.5 : -1,
                    st = 0,
                    at = !0;
                  for (_ = 0; _ < C; _ += 1)
                    if (E[_].n) {
                      for (et && (et += rt); st < _; )
                        (E[st].animatorJustifyOffset = et), (st += 1);
                      at = !(et = 0);
                    } else {
                      for (ot = 0; ot < X; ot += 1)
                        (T = y[ot].a).t.propType &&
                          (at && 2 === t.j && (rt += T.t.v * it),
                          (D = y[ot].s.getMult(
                            E[_].anIndexes[ot],
                            g.a[ot].s.totalChars
                          )).length
                            ? (et += T.t.v * D[0] * it)
                            : (et += T.t.v * D * it));
                      at = !1;
                    }
                  for (et && (et += rt); st < _; )
                    (E[st].animatorJustifyOffset = et), (st += 1);
                }
                for (_ = 0; _ < C; _ += 1) {
                  if ((v.reset(), (I = 1), E[_].n))
                    (J = 0),
                      (q += t.yOffset),
                      (q += W ? 1 : 0),
                      (r = U),
                      (W = !1),
                      this._hasMaskedPath &&
                        ((h = (l = p[(o = $)].points)[(n = K) - 1]),
                        (m = (i = l[n]).partialLength),
                        (s = 0)),
                      (O = G = N = Q = ""),
                      (tt = this.defaultPropsArray);
                  else {
                    if (this._hasMaskedPath) {
                      if (Z !== E[_].line) {
                        switch (t.j) {
                          case 1:
                            r += f - t.lineWidths[E[_].line];
                            break;
                          case 2:
                            r += (f - t.lineWidths[E[_].line]) / 2;
                        }
                        Z = E[_].line;
                      }
                      Y !== E[_].ind &&
                        (E[Y] && (r += E[Y].extra),
                        (r += E[_].an / 2),
                        (Y = E[_].ind)),
                        (r += u[0] * E[_].an * 0.005);
                      for (var nt = 0, ot = 0; ot < X; ot += 1)
                        (T = y[ot].a).p.propType &&
                          ((D = y[ot].s.getMult(
                            E[_].anIndexes[ot],
                            g.a[ot].s.totalChars
                          )).length
                            ? (nt += T.p.v[0] * D[0])
                            : (nt += T.p.v[0] * D)),
                          T.a.propType &&
                            ((D = y[ot].s.getMult(
                              E[_].anIndexes[ot],
                              g.a[ot].s.totalChars
                            )).length
                              ? (nt += T.a.v[0] * D[0])
                              : (nt += T.a.v[0] * D));
                      for (a = !0; a; )
                        r + nt <= s + m || !l
                          ? ((c = (r + nt - s) / i.partialLength),
                            (F = h.point[0] + (i.point[0] - h.point[0]) * c),
                            (w = h.point[1] + (i.point[1] - h.point[1]) * c),
                            v.translate(
                              -u[0] * E[_].an * 0.005,
                              -u[1] * j * 0.01
                            ),
                            (a = !1))
                          : l &&
                            ((s += i.partialLength),
                            (n += 1) >= l.length &&
                              ((n = 0),
                              (l = p[(o += 1)]
                                ? p[o].points
                                : d.v.c
                                ? p[(o = n = 0)].points
                                : ((s -= i.partialLength), null))),
                            l && ((h = i), (m = (i = l[n]).partialLength)));
                      (M = E[_].an / 2 - E[_].add), v.translate(-M, 0, 0);
                    } else
                      (M = E[_].an / 2 - E[_].add),
                        v.translate(-M, 0, 0),
                        v.translate(
                          -u[0] * E[_].an * 0.005,
                          -u[1] * j * 0.01,
                          0
                        );
                    for (ot = 0; ot < X; ot += 1)
                      (T = y[ot].a).t.propType &&
                        ((D = y[ot].s.getMult(
                          E[_].anIndexes[ot],
                          g.a[ot].s.totalChars
                        )),
                        (0 === J && 0 === t.j) ||
                          (this._hasMaskedPath
                            ? D.length
                              ? (r += T.t.v * D[0])
                              : (r += T.t.v * D)
                            : D.length
                            ? (J += T.t.v * D[0])
                            : (J += T.t.v * D)));
                    for (
                      t.strokeWidthAnim && (R = t.sw || 0),
                        t.strokeColorAnim &&
                          (V = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                        t.fillColorAnim &&
                          t.fc &&
                          (B = [t.fc[0], t.fc[1], t.fc[2]]),
                        ot = 0;
                      ot < X;
                      ot += 1
                    )
                      (T = y[ot].a).a.propType &&
                        ((D = y[ot].s.getMult(
                          E[_].anIndexes[ot],
                          g.a[ot].s.totalChars
                        )).length
                          ? v.translate(
                              -T.a.v[0] * D[0],
                              -T.a.v[1] * D[1],
                              T.a.v[2] * D[2]
                            )
                          : v.translate(
                              -T.a.v[0] * D,
                              -T.a.v[1] * D,
                              T.a.v[2] * D
                            ));
                    for (ot = 0; ot < X; ot += 1)
                      (T = y[ot].a).s.propType &&
                        ((D = y[ot].s.getMult(
                          E[_].anIndexes[ot],
                          g.a[ot].s.totalChars
                        )).length
                          ? v.scale(
                              1 + (T.s.v[0] - 1) * D[0],
                              1 + (T.s.v[1] - 1) * D[1],
                              1
                            )
                          : v.scale(
                              1 + (T.s.v[0] - 1) * D,
                              1 + (T.s.v[1] - 1) * D,
                              1
                            ));
                    for (ot = 0; ot < X; ot += 1) {
                      if (
                        ((T = y[ot].a),
                        (D = y[ot].s.getMult(
                          E[_].anIndexes[ot],
                          g.a[ot].s.totalChars
                        )),
                        T.sk.propType &&
                          (D.length
                            ? v.skewFromAxis(-T.sk.v * D[0], T.sa.v * D[1])
                            : v.skewFromAxis(-T.sk.v * D, T.sa.v * D)),
                        T.r.propType &&
                          (D.length
                            ? v.rotateZ(-T.r.v * D[2])
                            : v.rotateZ(-T.r.v * D)),
                        T.ry.propType &&
                          (D.length
                            ? v.rotateY(T.ry.v * D[1])
                            : v.rotateY(T.ry.v * D)),
                        T.rx.propType &&
                          (D.length
                            ? v.rotateX(T.rx.v * D[0])
                            : v.rotateX(T.rx.v * D)),
                        T.o.propType &&
                          (D.length
                            ? (I += (T.o.v * D[0] - I) * D[0])
                            : (I += (T.o.v * D - I) * D)),
                        t.strokeWidthAnim &&
                          T.sw.propType &&
                          (D.length ? (R += T.sw.v * D[0]) : (R += T.sw.v * D)),
                        t.strokeColorAnim && T.sc.propType)
                      )
                        for (L = 0; L < 3; L += 1)
                          D.length
                            ? (V[L] += (T.sc.v[L] - V[L]) * D[0])
                            : (V[L] += (T.sc.v[L] - V[L]) * D);
                      if (t.fillColorAnim && t.fc) {
                        if (T.fc.propType)
                          for (L = 0; L < 3; L += 1)
                            D.length
                              ? (B[L] += (T.fc.v[L] - B[L]) * D[0])
                              : (B[L] += (T.fc.v[L] - B[L]) * D);
                        T.fh.propType &&
                          (B = D.length
                            ? addHueToRGB(B, T.fh.v * D[0])
                            : addHueToRGB(B, T.fh.v * D)),
                          T.fs.propType &&
                            (B = D.length
                              ? addSaturationToRGB(B, T.fs.v * D[0])
                              : addSaturationToRGB(B, T.fs.v * D)),
                          T.fb.propType &&
                            (B = D.length
                              ? addBrightnessToRGB(B, T.fb.v * D[0])
                              : addBrightnessToRGB(B, T.fb.v * D));
                      }
                    }
                    for (ot = 0; ot < X; ot += 1)
                      (T = y[ot].a).p.propType &&
                        ((D = y[ot].s.getMult(
                          E[_].anIndexes[ot],
                          g.a[ot].s.totalChars
                        )),
                        this._hasMaskedPath
                          ? D.length
                            ? v.translate(0, T.p.v[1] * D[0], -T.p.v[2] * D[1])
                            : v.translate(0, T.p.v[1] * D, -T.p.v[2] * D)
                          : D.length
                          ? v.translate(
                              T.p.v[0] * D[0],
                              T.p.v[1] * D[1],
                              -T.p.v[2] * D[2]
                            )
                          : v.translate(
                              T.p.v[0] * D,
                              T.p.v[1] * D,
                              -T.p.v[2] * D
                            ));
                    if (
                      (t.strokeWidthAnim && (G = R < 0 ? 0 : R),
                      t.strokeColorAnim &&
                        (z =
                          "rgb(" +
                          Math.round(255 * V[0]) +
                          "," +
                          Math.round(255 * V[1]) +
                          "," +
                          Math.round(255 * V[2]) +
                          ")"),
                      t.fillColorAnim &&
                        t.fc &&
                        (N =
                          "rgb(" +
                          Math.round(255 * B[0]) +
                          "," +
                          Math.round(255 * B[1]) +
                          "," +
                          Math.round(255 * B[2]) +
                          ")"),
                      this._hasMaskedPath)
                    )
                      v.translate(0, -t.ls),
                        v.translate(0, u[1] * j * 0.01 + q, 0),
                        g.p.p &&
                          ((H =
                            (i.point[1] - h.point[1]) /
                            (i.point[0] - h.point[0])),
                          (H = (180 * Math.atan(H)) / Math.PI),
                          i.point[0] < h.point[0] && (H += 180),
                          v.rotate((-H * Math.PI) / 180)),
                        v.translate(F, w, 0),
                        (r -= u[0] * E[_].an * 0.005),
                        E[_ + 1] &&
                          Y !== E[_ + 1].ind &&
                          ((r += E[_].an / 2),
                          (r += 0.001 * t.tr * t.finalSize));
                    else {
                      switch (
                        (v.translate(J, q, 0),
                        t.ps && v.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                        t.j)
                      ) {
                        case 1:
                          v.translate(
                            E[_].animatorJustifyOffset +
                              t.justifyOffset +
                              (t.boxWidth - t.lineWidths[E[_].line]),
                            0,
                            0
                          );
                          break;
                        case 2:
                          v.translate(
                            E[_].animatorJustifyOffset +
                              t.justifyOffset +
                              (t.boxWidth - t.lineWidths[E[_].line]) / 2,
                            0,
                            0
                          );
                      }
                      v.translate(0, -t.ls),
                        v.translate(M, 0, 0),
                        v.translate(u[0] * E[_].an * 0.005, u[1] * j * 0.01, 0),
                        (J += E[_].l + 0.001 * t.tr * t.finalSize);
                    }
                    "html" === b
                      ? (Q = v.toCSS())
                      : "svg" === b
                      ? (Q = v.to2dCSS())
                      : (tt = [
                          v.props[0],
                          v.props[1],
                          v.props[2],
                          v.props[3],
                          v.props[4],
                          v.props[5],
                          v.props[6],
                          v.props[7],
                          v.props[8],
                          v.props[9],
                          v.props[10],
                          v.props[11],
                          v.props[12],
                          v.props[13],
                          v.props[14],
                          v.props[15],
                        ]),
                      (O = I);
                  }
                  P <= _
                    ? ((k = new LetterProps(O, G, z, N, Q, tt)),
                      this.renderedLetters.push(k),
                      (P += 1),
                      (this.lettersChangedFlag = !0))
                    : ((k = this.renderedLetters[_]),
                      (this.lettersChangedFlag =
                        k.update(O, G, z, N, Q, tt) ||
                        this.lettersChangedFlag));
                }
              }
            }),
            (TextAnimatorProperty.prototype.getValue = function () {
              this._elem.globalData.frameId !== this._frameId &&
                ((this._frameId = this._elem.globalData.frameId),
                this.iterateDynamicProperties());
            }),
            (TextAnimatorProperty.prototype.mHelper = new Matrix()),
            (TextAnimatorProperty.prototype.defaultPropsArray = []),
            extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
            (LetterProps.prototype.update = function (t, e, r, i, s, a) {
              (this._mdf.o = !1),
                (this._mdf.sw = !1),
                (this._mdf.sc = !1),
                (this._mdf.fc = !1),
                (this._mdf.m = !1);
              var n = (this._mdf.p = !1);
              return (
                this.o !== t && ((this.o = t), (n = this._mdf.o = !0)),
                this.sw !== e && ((this.sw = e), (n = this._mdf.sw = !0)),
                this.sc !== r && ((this.sc = r), (n = this._mdf.sc = !0)),
                this.fc !== i && ((this.fc = i), (n = this._mdf.fc = !0)),
                this.m !== s && ((this.m = s), (n = this._mdf.m = !0)),
                !a.length ||
                  (this.p[0] === a[0] &&
                    this.p[1] === a[1] &&
                    this.p[4] === a[4] &&
                    this.p[5] === a[5] &&
                    this.p[12] === a[12] &&
                    this.p[13] === a[13]) ||
                  ((this.p = a), (n = this._mdf.p = !0)),
                n
              );
            }),
            (TextProperty.prototype.defaultBoxWidth = [0, 0]),
            (TextProperty.prototype.copyData = function (t, e) {
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }),
            (TextProperty.prototype.setCurrentData = function (t) {
              t.__complete || this.completeTextData(t),
                (this.currentData = t),
                (this.currentData.boxWidth =
                  this.currentData.boxWidth || this.defaultBoxWidth),
                (this._mdf = !0);
            }),
            (TextProperty.prototype.searchProperty = function () {
              return this.searchKeyframes();
            }),
            (TextProperty.prototype.searchKeyframes = function () {
              return (
                (this.kf = 1 < this.data.d.k.length),
                this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
                this.kf
              );
            }),
            (TextProperty.prototype.addEffect = function (t) {
              this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.getValue = function (t) {
              if (
                (this.elem.globalData.frameId !== this.frameId &&
                  this.effectsSequence.length) ||
                t
              ) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData,
                  r = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData);
                else {
                  (this.lock = !0), (this._mdf = !1);
                  for (
                    var i = this.effectsSequence.length,
                      s = t || this.data.d.k[this.keysIndex].s,
                      a = 0;
                    a < i;
                    a += 1
                  )
                    s =
                      r !== this.keysIndex
                        ? this.effectsSequence[a](s, s.t)
                        : this.effectsSequence[a](this.currentData, s.t);
                  e !== s && this.setCurrentData(s),
                    (this.v = this.currentData),
                    (this.pv = this.v),
                    (this.lock = !1),
                    (this.frameId = this.elem.globalData.frameId);
                }
              }
            }),
            (TextProperty.prototype.getKeyframeValue = function () {
              for (
                var t = this.data.d.k,
                  e = this.elem.comp.renderedFrame,
                  r = 0,
                  i = t.length;
                r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);

              )
                r += 1;
              return (
                this.keysIndex !== r && (this.keysIndex = r),
                this.data.d.k[this.keysIndex].s
              );
            }),
            (TextProperty.prototype.buildFinalText = function (t) {
              for (var e, r, i = [], s = 0, a = t.length, n = !1; s < a; )
                (e = t.charCodeAt(s)),
                  FontManager.isCombinedCharacter(e)
                    ? (i[i.length - 1] += t.charAt(s))
                    : 55296 <= e && e <= 56319
                    ? 56320 <= (r = t.charCodeAt(s + 1)) && r <= 57343
                      ? (n || FontManager.isModifier(e, r)
                          ? ((i[i.length - 1] += t.substr(s, 2)), (n = !1))
                          : i.push(t.substr(s, 2)),
                        (s += 1))
                      : i.push(t.charAt(s))
                    : 56319 < e
                    ? ((r = t.charCodeAt(s + 1)),
                      FontManager.isZeroWidthJoiner(e, r)
                        ? ((n = !0),
                          (i[i.length - 1] += t.substr(s, 2)),
                          (s += 1))
                        : i.push(t.charAt(s)))
                    : FontManager.isZeroWidthJoiner(e)
                    ? ((i[i.length - 1] += t.charAt(s)), (n = !0))
                    : i.push(t.charAt(s)),
                  (s += 1);
              return i;
            }),
            (TextProperty.prototype.completeTextData = function (t) {
              t.__complete = !0;
              var e,
                r,
                i,
                s = this.elem.globalData.fontManager,
                a = this.data,
                n = [],
                o = 0,
                h = a.m.g,
                l = 0,
                p = 0,
                m = 0,
                f = [],
                c = 0,
                d = 0,
                u = s.getFontByName(t.f),
                y = 0,
                g = getFontProperties(u);
              (t.fWeight = g.weight),
                (t.fStyle = g.style),
                (t.finalSize = t.s),
                (t.finalText = this.buildFinalText(t.t)),
                (C = t.finalText.length),
                (t.finalLineHeight = t.lh);
              var v,
                b = (t.tr / 1e3) * t.finalSize;
              if (t.sz)
                for (var P, E = !0, x = t.sz[0], S = t.sz[1]; E; ) {
                  for (
                    var A = 0,
                      c = 0,
                      C = (P = this.buildFinalText(t.t)).length,
                      b = (t.tr / 1e3) * t.finalSize,
                      _ = -1,
                      T = 0;
                    T < C;
                    T += 1
                  )
                    (v = P[T].charCodeAt(0)),
                      (e = !1),
                      " " === P[T]
                        ? (_ = T)
                        : (13 !== v && 3 !== v) ||
                          ((e = !(c = 0)),
                          (A += t.finalLineHeight || 1.2 * t.finalSize)),
                      x <
                        c +
                          (y = s.chars
                            ? ((i = s.getCharData(P[T], u.fStyle, u.fFamily)),
                              e ? 0 : (i.w * t.finalSize) / 100)
                            : s.measureText(P[T], t.f, t.finalSize)) &&
                      " " !== P[T]
                        ? (-1 === _ ? (C += 1) : (T = _),
                          (A += t.finalLineHeight || 1.2 * t.finalSize),
                          P.splice(T, _ === T ? 1 : 0, "\r"),
                          (_ = -1),
                          (c = 0))
                        : ((c += y), (c += b));
                  (A += (u.ascent * t.finalSize) / 100),
                    this.canResize &&
                    t.finalSize > this.minimumFontSize &&
                    S < A
                      ? (--t.finalSize,
                        (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                      : ((t.finalText = P), (C = t.finalText.length), (E = !1));
                }
              c = -b;
              var k,
                y = 0,
                D = 0;
              for (T = 0; T < C; T += 1)
                if (
                  ((e = !1),
                  13 === (v = (k = t.finalText[T]).charCodeAt(0)) || 3 === v
                    ? ((D = 0),
                      f.push(c),
                      (d = d < c ? c : d),
                      (c = -2 * b),
                      (e = !(r = "")),
                      (m += 1))
                    : (r = k),
                  (y = s.chars
                    ? ((i = s.getCharData(
                        k,
                        u.fStyle,
                        s.getFontByName(t.f).fFamily
                      )),
                      e ? 0 : (i.w * t.finalSize) / 100)
                    : s.measureText(r, t.f, t.finalSize)),
                  " " === k ? (D += y + b) : ((c += y + b + D), (D = 0)),
                  n.push({
                    l: y,
                    an: y,
                    add: l,
                    n: e,
                    anIndexes: [],
                    val: r,
                    line: m,
                    animatorJustifyOffset: 0,
                  }),
                  2 == h)
                ) {
                  if (((l += y), "" === r || " " === r || T === C - 1)) {
                    for (("" !== r && " " !== r) || (l -= y); p <= T; )
                      (n[p].an = l), (n[p].ind = o), (n[p].extra = y), (p += 1);
                    (o += 1), (l = 0);
                  }
                } else if (3 == h) {
                  if (((l += y), "" === r || T === C - 1)) {
                    for ("" === r && (l -= y); p <= T; )
                      (n[p].an = l), (n[p].ind = o), (n[p].extra = y), (p += 1);
                    (l = 0), (o += 1);
                  }
                } else (n[o].ind = o), (n[o].extra = 0), (o += 1);
              if (((t.l = n), (d = d < c ? c : d), f.push(c), t.sz))
                (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
              else
                switch (((t.boxWidth = d), t.j)) {
                  case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                  case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                  default:
                    t.justifyOffset = 0;
                }
              t.lineWidths = f;
              for (
                var M, F, w, I, V = a.a, R = V.length, B = [], L = 0;
                L < R;
                L += 1
              ) {
                for (
                  (M = V[L]).a.sc && (t.strokeColorAnim = !0),
                    M.a.sw && (t.strokeWidthAnim = !0),
                    (M.a.fc || M.a.fh || M.a.fs || M.a.fb) &&
                      (t.fillColorAnim = !0),
                    w = M.s.b,
                    T = I = 0;
                  T < C;
                  T += 1
                )
                  ((F = n[T]).anIndexes[L] = I),
                    ((1 == w && "" !== F.val) ||
                      (2 == w && "" !== F.val && " " !== F.val) ||
                      (3 == w && (F.n || " " == F.val || T == C - 1)) ||
                      (4 == w && (F.n || T == C - 1))) &&
                      (1 === M.s.rn && B.push(I), (I += 1));
                a.a[L].s.totalChars = I;
                var G,
                  z = -1;
                if (1 === M.s.rn)
                  for (T = 0; T < C; T += 1)
                    z != (F = n[T]).anIndexes[L] &&
                      ((z = F.anIndexes[L]),
                      (G = B.splice(
                        Math.floor(Math.random() * B.length),
                        1
                      )[0])),
                      (F.anIndexes[L] = G);
              }
              (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
                (t.ls = t.ls || 0),
                (t.ascent = (u.ascent * t.finalSize) / 100);
            }),
            (TextProperty.prototype.updateDocumentData = function (t, e) {
              e = void 0 === e ? this.keysIndex : e;
              var r = this.copyData({}, this.data.d.k[e].s),
                r = this.copyData(r, t);
              (this.data.d.k[e].s = r),
                this.recalculate(e),
                this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.recalculate = function (t) {
              t = this.data.d.k[t].s;
              (t.__complete = !1),
                (this.keysIndex = 0),
                (this._isFirstFrame = !0),
                this.getValue(t);
            }),
            (TextProperty.prototype.canResizeFont = function (t) {
              (this.canResize = t),
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.setMinimumFontSize = function (t) {
              (this.minimumFontSize = Math.floor(t) || 1),
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this);
            });
          var TextSelectorProp =
              ((_o = Math.max),
              (ap = Math.min),
              (bp = Math.floor),
              (cp.prototype = {
                getMult: function (t) {
                  this._currentTextLength !==
                    this.elem.textProperty.currentData.l.length &&
                    this.getValue();
                  var e = 0,
                    r = 0,
                    i = 1,
                    s = 1;
                  0 < this.ne.v
                    ? (e = this.ne.v / 100)
                    : (r = -this.ne.v / 100),
                    0 < this.xe.v
                      ? (i = 1 - this.xe.v / 100)
                      : (s = 1 + this.xe.v / 100);
                  var a = BezierFactory.getBezierEasing(e, r, i, s).get,
                    n = 0,
                    o = this.finalS,
                    e = this.finalE,
                    r = this.data.sh;
                  return (
                    (n =
                      2 === r
                        ? a(
                            (n =
                              e === o
                                ? e <= t
                                  ? 1
                                  : 0
                                : _o(
                                    0,
                                    ap(0.5 / (e - o) + (t - o) / (e - o), 1)
                                  ))
                          )
                        : 3 === r
                        ? a(
                            (n =
                              e === o
                                ? e <= t
                                  ? 0
                                  : 1
                                : 1 -
                                  _o(
                                    0,
                                    ap(0.5 / (e - o) + (t - o) / (e - o), 1)
                                  ))
                          )
                        : 4 === r
                        ? (e === o
                            ? (n = 0)
                            : (n = _o(
                                0,
                                ap(0.5 / (e - o) + (t - o) / (e - o), 1)
                              )) < 0.5
                            ? (n *= 2)
                            : (n = 1 - 2 * (n - 0.5)),
                          a(n))
                        : 5 === r
                        ? a(
                            (n =
                              e === o
                                ? 0
                                : ((s =
                                    -(i = e - o) / 2 +
                                    (t = ap(_o(0, t + 0.5 - o), e - o))),
                                  (i = i / 2),
                                  Math.sqrt(1 - (s * s) / (i * i))))
                          )
                        : (6 === r
                            ? (n =
                                e === o
                                  ? 0
                                  : ((t = ap(_o(0, t + 0.5 - o), e - o)),
                                    (1 +
                                      Math.cos(
                                        Math.PI + (2 * Math.PI * t) / (e - o)
                                      )) /
                                      2))
                            : t >= bp(o) &&
                              (n = _o(
                                0,
                                ap(t - o < 0 ? ap(e, 1) - (o - t) : e - t, 1)
                              )),
                          a(n))) * this.a.v
                  );
                },
                getValue: function (t) {
                  this.iterateDynamicProperties(),
                    (this._mdf = t || this._mdf),
                    (this._currentTextLength =
                      this.elem.textProperty.currentData.l.length || 0),
                    t &&
                      2 === this.data.r &&
                      (this.e.v = this._currentTextLength);
                  var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                    r = this.o.v / e,
                    t = this.s.v / e + r,
                    e = this.e.v / e + r;
                  e < t && ((r = t), (t = e), (e = r)),
                    (this.finalS = t),
                    (this.finalE = e);
                },
              }),
              extendPrototype([DynamicPropertyContainer], cp),
              {
                getTextSelectorProp: function (t, e, r) {
                  return new cp(t, e);
                },
              }),
            poolFactory = function (t, e, r) {
              var i = 0,
                s = t,
                a = createSizedArray(s);
              return {
                newElement: function () {
                  return i ? a[--i] : e();
                },
                release: function (t) {
                  i === s && ((a = pooling.double(a)), (s *= 2)),
                    r && r(t),
                    (a[i] = t),
                    (i += 1);
                },
              };
            },
            pooling = {
              double: function (t) {
                return t.concat(createSizedArray(t.length));
              },
            },
            pointPool = poolFactory(8, function () {
              return createTypedArray("float32", 2);
            }),
            shapePool =
              ((Jp = poolFactory(
                4,
                function () {
                  return new ShapePath();
                },
                function (t) {
                  for (var e = t._length, r = 0; r < e; r += 1)
                    pointPool.release(t.v[r]),
                      pointPool.release(t.i[r]),
                      pointPool.release(t.o[r]),
                      (t.v[r] = null),
                      (t.i[r] = null),
                      (t.o[r] = null);
                  (t._length = 0), (t.c = !1);
                }
              )),
              (Jp.clone = function (t) {
                var e,
                  r = Jp.newElement(),
                  i = void 0 === t._length ? t.v.length : t._length;
                for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1)
                  r.setTripleAt(
                    t.v[e][0],
                    t.v[e][1],
                    t.o[e][0],
                    t.o[e][1],
                    t.i[e][0],
                    t.i[e][1],
                    e
                  );
                return r;
              }),
              Jp),
            shapeCollectionPool =
              ((Rp = {
                newShapeCollection: function () {
                  return Sp ? Up[--Sp] : new ShapeCollection();
                },
                release: function (t) {
                  for (var e = t._length, r = 0; r < e; r += 1)
                    shapePool.release(t.shapes[r]);
                  (t._length = 0),
                    Sp === Tp && ((Up = pooling.double(Up)), (Tp *= 2)),
                    (Up[Sp] = t),
                    (Sp += 1);
                },
              }),
              (Sp = 0),
              (Tp = 4),
              (Up = createSizedArray(Tp)),
              Rp),
            segmentsLengthPool = poolFactory(
              8,
              function () {
                return { lengths: [], totalLength: 0 };
              },
              function (t) {
                for (var e = t.lengths.length, r = 0; r < e; r += 1)
                  bezierLengthPool.release(t.lengths[r]);
                t.lengths.length = 0;
              }
            ),
            bezierLengthPool = poolFactory(8, function () {
              return {
                addedLength: 0,
                percents: createTypedArray("float32", defaultCurveSegments),
                lengths: createTypedArray("float32", defaultCurveSegments),
              };
            }),
            markerParser = function (e) {
              for (var t = [], r = 0; r < e.length; r += 1) {
                var i = e[r],
                  i = { time: i.tm, duration: i.dr };
                try {
                  i.payload = JSON.parse(e[r].cm);
                } catch (t) {
                  try {
                    i.payload = (function (t) {
                      for (
                        var e, r = t.split("\r\n"), i = {}, s = 0, a = 0;
                        a < r.length;
                        a += 1
                      )
                        2 === (e = r[a].split(":")).length &&
                          ((i[e[0]] = e[1].trim()), (s += 1));
                      if (0 === s) throw new Error();
                      return i;
                    })(e[r].cm);
                  } catch (t) {
                    i.payload = { name: e[r] };
                  }
                }
                t.push(i);
              }
              return t;
            },
            Rp,
            Sp,
            Tp,
            Up,
            Jp,
            _o,
            ap,
            bp;
          function cp(t, e) {
            (this._currentTextLength = -1),
              (this.k = !1),
              (this.data = e),
              (this.elem = t),
              (this.comp = t.comp),
              (this.finalS = 0),
              (this.finalE = 0),
              this.initDynamicPropertyContainer(t),
              (this.s = PropertyFactory.getProp(
                t,
                e.s || { k: 0 },
                0,
                0,
                this
              )),
              (this.e =
                "e" in e
                  ? PropertyFactory.getProp(t, e.e, 0, 0, this)
                  : { v: 100 }),
              (this.o = PropertyFactory.getProp(
                t,
                e.o || { k: 0 },
                0,
                0,
                this
              )),
              (this.xe = PropertyFactory.getProp(
                t,
                e.xe || { k: 0 },
                0,
                0,
                this
              )),
              (this.ne = PropertyFactory.getProp(
                t,
                e.ne || { k: 0 },
                0,
                0,
                this
              )),
              (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
              this.dynamicProperties.length || this.getValue();
          }
          function BaseRenderer() {}
          function SVGRenderer(t, e) {
            (this.animationItem = t),
              (this.layers = null),
              (this.renderedFrame = -1),
              (this.svgElement = createNS("svg"));
            var r,
              i = "";
            e &&
              e.title &&
              ((t = createNS("title")),
              (r = createElementID()),
              t.setAttribute("id", r),
              (t.textContent = e.title),
              this.svgElement.appendChild(t),
              (i += r)),
              e &&
                e.description &&
                ((r = createNS("desc")),
                (s = createElementID()),
                r.setAttribute("id", s),
                (r.textContent = e.description),
                this.svgElement.appendChild(r),
                (i += " " + s)),
              i && this.svgElement.setAttribute("aria-labelledby", i);
            var s = createNS("defs");
            this.svgElement.appendChild(s);
            i = createNS("g");
            this.svgElement.appendChild(i),
              (this.layerElement = i),
              (this.renderConfig = {
                preserveAspectRatio:
                  (e && e.preserveAspectRatio) || "xMidYMid meet",
                imagePreserveAspectRatio:
                  (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                progressiveLoad: (e && e.progressiveLoad) || !1,
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                viewBoxOnly: (e && e.viewBoxOnly) || !1,
                viewBoxSize: (e && e.viewBoxSize) || !1,
                className: (e && e.className) || "",
                id: (e && e.id) || "",
                focusable: e && e.focusable,
                filterSize: {
                  width: (e && e.filterSize && e.filterSize.width) || "100%",
                  height: (e && e.filterSize && e.filterSize.height) || "100%",
                  x: (e && e.filterSize && e.filterSize.x) || "0%",
                  y: (e && e.filterSize && e.filterSize.y) || "0%",
                },
              }),
              (this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: s,
                renderConfig: this.renderConfig,
              }),
              (this.elements = []),
              (this.pendingElements = []),
              (this.destroyed = !1),
              (this.rendererType = "svg");
          }
          function CanvasRenderer(t, e) {
            (this.animationItem = t),
              (this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: (e && e.context) || null,
                progressiveLoad: (e && e.progressiveLoad) || !1,
                preserveAspectRatio:
                  (e && e.preserveAspectRatio) || "xMidYMid meet",
                imagePreserveAspectRatio:
                  (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                className: (e && e.className) || "",
                id: (e && e.id) || "",
              }),
              (this.renderConfig.dpr = (e && e.dpr) || 1),
              this.animationItem.wrapper &&
                (this.renderConfig.dpr =
                  (e && e.dpr) || window.devicePixelRatio || 1),
              (this.renderedFrame = -1),
              (this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1,
              }),
              (this.contextData = new CVContextData()),
              (this.elements = []),
              (this.pendingElements = []),
              (this.transformMat = new Matrix()),
              (this.completeLayers = !1),
              (this.rendererType = "canvas");
          }
          function HybridRenderer(t, e) {
            (this.animationItem = t),
              (this.layers = null),
              (this.renderedFrame = -1),
              (this.renderConfig = {
                className: (e && e.className) || "",
                imagePreserveAspectRatio:
                  (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                filterSize: {
                  width: (e && e.filterSize && e.filterSize.width) || "400%",
                  height: (e && e.filterSize && e.filterSize.height) || "400%",
                  x: (e && e.filterSize && e.filterSize.x) || "-100%",
                  y: (e && e.filterSize && e.filterSize.y) || "-100%",
                },
              }),
              (this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig,
              }),
              (this.pendingElements = []),
              (this.elements = []),
              (this.threeDElements = []),
              (this.destroyed = !1),
              (this.camera = null),
              (this.supports3d = !0),
              (this.rendererType = "html");
          }
          function MaskElement(t, e, r) {
            (this.data = t),
              (this.element = e),
              (this.globalData = r),
              (this.storedData = []),
              (this.masksProperties = this.data.masksProperties || []),
              (this.maskElement = null);
            var i,
              s = this.globalData.defs,
              a = this.masksProperties ? this.masksProperties.length : 0;
            (this.viewData = createSizedArray(a)), (this.solidPath = "");
            for (
              var n,
                o,
                h,
                l,
                p = this.masksProperties,
                m = 0,
                f = [],
                c = createElementID(),
                d = "clipPath",
                u = "clip-path",
                y = 0;
              y < a;
              y += 1
            )
              if (
                ((("a" !== p[y].mode && "n" !== p[y].mode) ||
                  p[y].inv ||
                  100 !== p[y].o.k ||
                  p[y].o.x) &&
                  (u = d = "mask"),
                ("s" !== p[y].mode && "i" !== p[y].mode) || 0 !== m
                  ? (n = null)
                  : ((n = createNS("rect")).setAttribute("fill", "#ffffff"),
                    n.setAttribute("width", this.element.comp.data.w || 0),
                    n.setAttribute("height", this.element.comp.data.h || 0),
                    f.push(n)),
                (i = createNS("path")),
                "n" === p[y].mode)
              )
                (this.viewData[y] = {
                  op: PropertyFactory.getProp(
                    this.element,
                    p[y].o,
                    0,
                    0.01,
                    this.element
                  ),
                  prop: ShapePropertyFactory.getShapeProp(
                    this.element,
                    p[y],
                    3
                  ),
                  elem: i,
                  lastPath: "",
                }),
                  s.appendChild(i);
              else {
                if (
                  ((m += 1),
                  i.setAttribute(
                    "fill",
                    "s" === p[y].mode ? "#000000" : "#ffffff"
                  ),
                  i.setAttribute("clip-rule", "nonzero"),
                  0 !== p[y].x.k
                    ? ((u = d = "mask"),
                      (h = PropertyFactory.getProp(
                        this.element,
                        p[y].x,
                        0,
                        null,
                        this.element
                      )),
                      (l = createElementID()),
                      (P = createNS("filter")).setAttribute("id", l),
                      (o = createNS("feMorphology")).setAttribute(
                        "operator",
                        "erode"
                      ),
                      o.setAttribute("in", "SourceGraphic"),
                      o.setAttribute("radius", "0"),
                      P.appendChild(o),
                      s.appendChild(P),
                      i.setAttribute(
                        "stroke",
                        "s" === p[y].mode ? "#000000" : "#ffffff"
                      ))
                    : (h = o = null),
                  (this.storedData[y] = {
                    elem: i,
                    x: h,
                    expan: o,
                    lastPath: "",
                    lastOperator: "",
                    filterId: l,
                    lastRadius: 0,
                  }),
                  "i" === p[y].mode)
                ) {
                  for (
                    var g = f.length, v = createNS("g"), b = 0;
                    b < g;
                    b += 1
                  )
                    v.appendChild(f[b]);
                  var P = createNS("mask");
                  P.setAttribute("mask-type", "alpha"),
                    P.setAttribute("id", c + "_" + m),
                    P.appendChild(i),
                    s.appendChild(P),
                    v.setAttribute(
                      "mask",
                      "url(" + locationHref + "#" + c + "_" + m + ")"
                    ),
                    (f.length = 0),
                    f.push(v);
                } else f.push(i);
                p[y].inv &&
                  !this.solidPath &&
                  (this.solidPath = this.createLayerSolidPath()),
                  (this.viewData[y] = {
                    elem: i,
                    lastPath: "",
                    op: PropertyFactory.getProp(
                      this.element,
                      p[y].o,
                      0,
                      0.01,
                      this.element
                    ),
                    prop: ShapePropertyFactory.getShapeProp(
                      this.element,
                      p[y],
                      3
                    ),
                    invRect: n,
                  }),
                  this.viewData[y].prop.k ||
                    this.drawPath(
                      p[y],
                      this.viewData[y].prop.v,
                      this.viewData[y]
                    );
              }
            for (
              this.maskElement = createNS(d), a = f.length, y = 0;
              y < a;
              y += 1
            )
              this.maskElement.appendChild(f[y]);
            0 < m &&
              (this.maskElement.setAttribute("id", c),
              this.element.maskedElement.setAttribute(
                u,
                "url(" + locationHref + "#" + c + ")"
              ),
              s.appendChild(this.maskElement)),
              this.viewData.length && this.element.addRenderableComponent(this);
          }
          function HierarchyElement() {}
          function FrameElement() {}
          function TransformElement() {}
          function RenderableElement() {}
          function RenderableDOMElement() {}
          function ProcessedElement(t, e) {
            (this.elem = t), (this.pos = e);
          }
          function SVGStyleData(t, e) {
            (this.data = t),
              (this.type = t.ty),
              (this.d = ""),
              (this.lvl = e),
              (this._mdf = !1),
              (this.closed = !0 === t.hd),
              (this.pElem = createNS("path")),
              (this.msElem = null);
          }
          function SVGShapeData(t, e, r) {
            (this.caches = []),
              (this.styles = []),
              (this.transformers = t),
              (this.lStr = ""),
              (this.sh = r),
              (this.lvl = e),
              (this._isAnimated = !!r.k);
            for (var i = 0, s = t.length; i < s; ) {
              if (t[i].mProps.dynamicProperties.length) {
                this._isAnimated = !0;
                break;
              }
              i += 1;
            }
          }
          function SVGTransformData(t, e, r) {
            (this.transform = { mProps: t, op: e, container: r }),
              (this.elements = []),
              (this._isAnimated =
                this.transform.mProps.dynamicProperties.length ||
                this.transform.op.effectsSequence.length);
          }
          function SVGStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
              (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
              (this.d = new DashProperty(t, e.d || {}, "svg", this)),
              (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
              (this.style = r),
              (this._isAnimated = !!this._isAnimated);
          }
          function SVGFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
              (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
              (this.style = r);
          }
          function SVGGradientFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              this.initGradientData(t, e, r);
          }
          function SVGGradientStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
              (this.d = new DashProperty(t, e.d || {}, "svg", this)),
              this.initGradientData(t, e, r),
              (this._isAnimated = !!this._isAnimated);
          }
          function ShapeGroupData() {
            (this.it = []), (this.prevViewData = []), (this.gr = createNS("g"));
          }
          (BaseRenderer.prototype.checkLayers = function (t) {
            var e,
              r,
              i = this.layers.length;
            for (this.completeLayers = !0, e = i - 1; 0 <= e; --e)
              this.elements[e] ||
                ((r = this.layers[e]).ip - r.st <= t - this.layers[e].st &&
                  r.op - r.st > t - this.layers[e].st &&
                  this.buildItem(e)),
                (this.completeLayers =
                  !!this.elements[e] && this.completeLayers);
            this.checkPendingElements();
          }),
            (BaseRenderer.prototype.createItem = function (t) {
              switch (t.ty) {
                case 2:
                  return this.createImage(t);
                case 0:
                  return this.createComp(t);
                case 1:
                  return this.createSolid(t);
                case 3:
                  return this.createNull(t);
                case 4:
                  return this.createShape(t);
                case 5:
                  return this.createText(t);
                case 6:
                  return this.createAudio(t);
                case 13:
                  return this.createCamera(t);
                case 15:
                  return this.createFootage(t);
                default:
                  return this.createNull(t);
              }
            }),
            (BaseRenderer.prototype.createCamera = function () {
              throw new Error(
                "You're using a 3d camera. Try the html renderer."
              );
            }),
            (BaseRenderer.prototype.createAudio = function (t) {
              return new AudioElement(t, this.globalData, this);
            }),
            (BaseRenderer.prototype.createFootage = function (t) {
              return new FootageElement(t, this.globalData, this);
            }),
            (BaseRenderer.prototype.buildAllItems = function () {
              for (var t = this.layers.length, e = 0; e < t; e += 1)
                this.buildItem(e);
              this.checkPendingElements();
            }),
            (BaseRenderer.prototype.includeLayers = function (t) {
              this.completeLayers = !1;
              for (
                var e, r = t.length, i = this.layers.length, s = 0;
                s < r;
                s += 1
              )
                for (e = 0; e < i; ) {
                  if (this.layers[e].id === t[s].id) {
                    this.layers[e] = t[s];
                    break;
                  }
                  e += 1;
                }
            }),
            (BaseRenderer.prototype.setProjectInterface = function (t) {
              this.globalData.projectInterface = t;
            }),
            (BaseRenderer.prototype.initItems = function () {
              this.globalData.progressiveLoad || this.buildAllItems();
            }),
            (BaseRenderer.prototype.buildElementParenting = function (t, e, r) {
              for (
                var i = this.elements, s = this.layers, a = 0, n = s.length;
                a < n;

              )
                s[a].ind == e &&
                  (i[a] && !0 !== i[a]
                    ? (r.push(i[a]),
                      i[a].setAsParent(),
                      void 0 !== s[a].parent
                        ? this.buildElementParenting(t, s[a].parent, r)
                        : t.setHierarchy(r))
                    : (this.buildItem(a), this.addPendingElement(t))),
                  (a += 1);
            }),
            (BaseRenderer.prototype.addPendingElement = function (t) {
              this.pendingElements.push(t);
            }),
            (BaseRenderer.prototype.searchExtraCompositions = function (t) {
              for (var e, r = t.length, i = 0; i < r; i += 1)
                t[i].xt &&
                  ((e = this.createComp(t[i])).initExpressions(),
                  this.globalData.projectInterface.registerComposition(e));
            }),
            (BaseRenderer.prototype.setupGlobalData = function (t, e) {
              (this.globalData.fontManager = new FontManager()),
                this.globalData.fontManager.addChars(t.chars),
                this.globalData.fontManager.addFonts(t.fonts, e),
                (this.globalData.getAssetData =
                  this.animationItem.getAssetData.bind(this.animationItem)),
                (this.globalData.getAssetsPath =
                  this.animationItem.getAssetsPath.bind(this.animationItem)),
                (this.globalData.imageLoader =
                  this.animationItem.imagePreloader),
                (this.globalData.audioController =
                  this.animationItem.audioController),
                (this.globalData.frameId = 0),
                (this.globalData.frameRate = t.fr),
                (this.globalData.nm = t.nm),
                (this.globalData.compSize = { w: t.w, h: t.h });
            }),
            extendPrototype([BaseRenderer], SVGRenderer),
            (SVGRenderer.prototype.createNull = function (t) {
              return new NullElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createShape = function (t) {
              return new SVGShapeElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createText = function (t) {
              return new SVGTextLottieElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createImage = function (t) {
              return new IImageElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createComp = function (t) {
              return new SVGCompElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createSolid = function (t) {
              return new ISolidElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.configAnimation = function (t) {
              this.svgElement.setAttribute(
                "xmlns",
                "http://www.w3.org/2000/svg"
              ),
                this.renderConfig.viewBoxSize
                  ? this.svgElement.setAttribute(
                      "viewBox",
                      this.renderConfig.viewBoxSize
                    )
                  : this.svgElement.setAttribute(
                      "viewBox",
                      "0 0 " + t.w + " " + t.h
                    ),
                this.renderConfig.viewBoxOnly ||
                  (this.svgElement.setAttribute("width", t.w),
                  this.svgElement.setAttribute("height", t.h),
                  (this.svgElement.style.width = "100%"),
                  (this.svgElement.style.height = "100%"),
                  (this.svgElement.style.transform = "translate3d(0,0,0)")),
                this.renderConfig.className &&
                  this.svgElement.setAttribute(
                    "class",
                    this.renderConfig.className
                  ),
                this.renderConfig.id &&
                  this.svgElement.setAttribute("id", this.renderConfig.id),
                void 0 !== this.renderConfig.focusable &&
                  this.svgElement.setAttribute(
                    "focusable",
                    this.renderConfig.focusable
                  ),
                this.svgElement.setAttribute(
                  "preserveAspectRatio",
                  this.renderConfig.preserveAspectRatio
                ),
                this.animationItem.wrapper.appendChild(this.svgElement);
              var e = this.globalData.defs;
              this.setupGlobalData(t, e),
                (this.globalData.progressiveLoad =
                  this.renderConfig.progressiveLoad),
                (this.data = t);
              var r = createNS("clipPath"),
                i = createNS("rect");
              i.setAttribute("width", t.w),
                i.setAttribute("height", t.h),
                i.setAttribute("x", 0),
                i.setAttribute("y", 0);
              var s = createElementID();
              r.setAttribute("id", s),
                r.appendChild(i),
                this.layerElement.setAttribute(
                  "clip-path",
                  "url(" + locationHref + "#" + s + ")"
                ),
                e.appendChild(r),
                (this.layers = t.layers),
                (this.elements = createSizedArray(t.layers.length));
            }),
            (SVGRenderer.prototype.destroy = function () {
              this.animationItem.wrapper &&
                (this.animationItem.wrapper.innerText = ""),
                (this.layerElement = null),
                (this.globalData.defs = null);
              for (
                var t = this.layers ? this.layers.length : 0, e = 0;
                e < t;
                e += 1
              )
                this.elements[e] && this.elements[e].destroy();
              (this.elements.length = 0),
                (this.destroyed = !0),
                (this.animationItem = null);
            }),
            (SVGRenderer.prototype.updateContainerSize = function () {}),
            (SVGRenderer.prototype.buildItem = function (t) {
              var e,
                r = this.elements;
              r[t] ||
                99 === this.layers[t].ty ||
                ((r[t] = !0),
                (e = this.createItem(this.layers[t])),
                (r[t] = e),
                expressionsPlugin &&
                  (0 === this.layers[t].ty &&
                    this.globalData.projectInterface.registerComposition(e),
                  e.initExpressions()),
                this.appendElementInPos(e, t),
                this.layers[t].tt &&
                  (this.elements[t - 1] && !0 !== this.elements[t - 1]
                    ? e.setMatte(r[t - 1].layerId)
                    : (this.buildItem(t - 1), this.addPendingElement(e))));
            }),
            (SVGRenderer.prototype.checkPendingElements = function () {
              for (; this.pendingElements.length; ) {
                var t = this.pendingElements.pop();
                if ((t.checkParenting(), t.data.tt))
                  for (var e = 0, r = this.elements.length; e < r; ) {
                    if (this.elements[e] === t) {
                      t.setMatte(this.elements[e - 1].layerId);
                      break;
                    }
                    e += 1;
                  }
              }
            }),
            (SVGRenderer.prototype.renderFrame = function (t) {
              if (this.renderedFrame !== t && !this.destroyed) {
                var e;
                null === t
                  ? (t = this.renderedFrame)
                  : (this.renderedFrame = t),
                  (this.globalData.frameNum = t),
                  (this.globalData.frameId += 1),
                  (this.globalData.projectInterface.currentFrame = t),
                  (this.globalData._mdf = !1);
                var r = this.layers.length;
                for (
                  this.completeLayers || this.checkLayers(t), e = r - 1;
                  0 <= e;
                  --e
                )
                  (this.completeLayers || this.elements[e]) &&
                    this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                  for (e = 0; e < r; e += 1)
                    (this.completeLayers || this.elements[e]) &&
                      this.elements[e].renderFrame();
              }
            }),
            (SVGRenderer.prototype.appendElementInPos = function (t, e) {
              t = t.getBaseElement();
              if (t) {
                for (var r, i = 0; i < e; )
                  this.elements[i] &&
                    !0 !== this.elements[i] &&
                    this.elements[i].getBaseElement() &&
                    (r = this.elements[i].getBaseElement()),
                    (i += 1);
                r
                  ? this.layerElement.insertBefore(t, r)
                  : this.layerElement.appendChild(t);
              }
            }),
            (SVGRenderer.prototype.hide = function () {
              this.layerElement.style.display = "none";
            }),
            (SVGRenderer.prototype.show = function () {
              this.layerElement.style.display = "block";
            }),
            extendPrototype([BaseRenderer], CanvasRenderer),
            (CanvasRenderer.prototype.createShape = function (t) {
              return new CVShapeElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createText = function (t) {
              return new CVTextElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createImage = function (t) {
              return new CVImageElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createComp = function (t) {
              return new CVCompElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createSolid = function (t) {
              return new CVSolidElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createNull =
              SVGRenderer.prototype.createNull),
            (CanvasRenderer.prototype.ctxTransform = function (t) {
              var e;
              (1 === t[0] &&
                0 === t[1] &&
                0 === t[4] &&
                1 === t[5] &&
                0 === t[12] &&
                0 === t[13]) ||
                (this.renderConfig.clearCanvas
                  ? (this.transformMat.cloneFromProps(t),
                    (e = this.contextData.cTr.props),
                    this.transformMat.transform(
                      e[0],
                      e[1],
                      e[2],
                      e[3],
                      e[4],
                      e[5],
                      e[6],
                      e[7],
                      e[8],
                      e[9],
                      e[10],
                      e[11],
                      e[12],
                      e[13],
                      e[14],
                      e[15]
                    ),
                    this.contextData.cTr.cloneFromProps(
                      this.transformMat.props
                    ),
                    (e = this.contextData.cTr.props),
                    this.canvasContext.setTransform(
                      e[0],
                      e[1],
                      e[4],
                      e[5],
                      e[12],
                      e[13]
                    ))
                  : this.canvasContext.transform(
                      t[0],
                      t[1],
                      t[4],
                      t[5],
                      t[12],
                      t[13]
                    ));
            }),
            (CanvasRenderer.prototype.ctxOpacity = function (t) {
              if (!this.renderConfig.clearCanvas)
                return (
                  (this.canvasContext.globalAlpha *= t < 0 ? 0 : t),
                  void (this.globalData.currentGlobalAlpha =
                    this.contextData.cO)
                );
              (this.contextData.cO *= t < 0 ? 0 : t),
                this.globalData.currentGlobalAlpha !== this.contextData.cO &&
                  ((this.canvasContext.globalAlpha = this.contextData.cO),
                  (this.globalData.currentGlobalAlpha = this.contextData.cO));
            }),
            (CanvasRenderer.prototype.reset = function () {
              this.renderConfig.clearCanvas
                ? this.contextData.reset()
                : this.canvasContext.restore();
            }),
            (CanvasRenderer.prototype.save = function (t) {
              if (this.renderConfig.clearCanvas) {
                t && this.canvasContext.save();
                var e = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos &&
                  this.contextData.duplicate();
                for (
                  var r = this.contextData.saved[this.contextData.cArrPos],
                    i = 0;
                  i < 16;
                  i += 1
                )
                  r[i] = e[i];
                (this.contextData.savedOp[this.contextData.cArrPos] =
                  this.contextData.cO),
                  (this.contextData.cArrPos += 1);
              } else this.canvasContext.save();
            }),
            (CanvasRenderer.prototype.restore = function (t) {
              if (this.renderConfig.clearCanvas) {
                t &&
                  (this.canvasContext.restore(),
                  (this.globalData.blendMode = "source-over")),
                  --this.contextData.cArrPos;
                for (
                  var e = this.contextData.saved[this.contextData.cArrPos],
                    r = this.contextData.cTr.props,
                    i = 0;
                  i < 16;
                  i += 1
                )
                  r[i] = e[i];
                this.canvasContext.setTransform(
                  e[0],
                  e[1],
                  e[4],
                  e[5],
                  e[12],
                  e[13]
                ),
                  (e = this.contextData.savedOp[this.contextData.cArrPos]),
                  (this.contextData.cO = e),
                  this.globalData.currentGlobalAlpha !== e &&
                    ((this.canvasContext.globalAlpha = e),
                    (this.globalData.currentGlobalAlpha = e));
              } else this.canvasContext.restore();
            }),
            (CanvasRenderer.prototype.configAnimation = function (t) {
              var e, r;
              this.animationItem.wrapper
                ? ((this.animationItem.container = createTag("canvas")),
                  ((e = this.animationItem.container.style).width = "100%"),
                  (e.height = "100%"),
                  (e.transformOrigin = r = "0px 0px 0px"),
                  (e.mozTransformOrigin = r),
                  (e.webkitTransformOrigin = r),
                  (e["-webkit-transform"] = r),
                  this.animationItem.wrapper.appendChild(
                    this.animationItem.container
                  ),
                  (this.canvasContext =
                    this.animationItem.container.getContext("2d")),
                  this.renderConfig.className &&
                    this.animationItem.container.setAttribute(
                      "class",
                      this.renderConfig.className
                    ),
                  this.renderConfig.id &&
                    this.animationItem.container.setAttribute(
                      "id",
                      this.renderConfig.id
                    ))
                : (this.canvasContext = this.renderConfig.context),
                (this.data = t),
                (this.layers = t.layers),
                (this.transformCanvas = {
                  w: t.w,
                  h: t.h,
                  sx: 0,
                  sy: 0,
                  tx: 0,
                  ty: 0,
                }),
                this.setupGlobalData(t, document.body),
                (this.globalData.canvasContext = this.canvasContext),
                ((this.globalData.renderer = this).globalData.isDashed = !1),
                (this.globalData.progressiveLoad =
                  this.renderConfig.progressiveLoad),
                (this.globalData.transformCanvas = this.transformCanvas),
                (this.elements = createSizedArray(t.layers.length)),
                this.updateContainerSize();
            }),
            (CanvasRenderer.prototype.updateContainerSize = function () {
              var t, e, r, i, s, a, n;
              this.reset(),
                this.animationItem.wrapper && this.animationItem.container
                  ? ((t = this.animationItem.wrapper.offsetWidth),
                    (e = this.animationItem.wrapper.offsetHeight),
                    this.animationItem.container.setAttribute(
                      "width",
                      t * this.renderConfig.dpr
                    ),
                    this.animationItem.container.setAttribute(
                      "height",
                      e * this.renderConfig.dpr
                    ))
                  : ((t =
                      this.canvasContext.canvas.width * this.renderConfig.dpr),
                    (e =
                      this.canvasContext.canvas.height *
                      this.renderConfig.dpr)),
                -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") ||
                -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")
                  ? ((i =
                      (r =
                        this.renderConfig.preserveAspectRatio.split(" "))[1] ||
                      "meet"),
                    (s = (n = r[0] || "xMidYMid").substr(0, 4)),
                    (a = n.substr(4)),
                    ((r = this.transformCanvas.w / this.transformCanvas.h) >
                      (n = t / e) &&
                      "meet" === i) ||
                    (r < n && "slice" === i)
                      ? ((this.transformCanvas.sx =
                          t / (this.transformCanvas.w / this.renderConfig.dpr)),
                        (this.transformCanvas.sy =
                          t / (this.transformCanvas.w / this.renderConfig.dpr)))
                      : ((this.transformCanvas.sx =
                          e / (this.transformCanvas.h / this.renderConfig.dpr)),
                        (this.transformCanvas.sy =
                          e /
                          (this.transformCanvas.h / this.renderConfig.dpr))),
                    (this.transformCanvas.tx =
                      "xMid" === s &&
                      ((r < n && "meet" === i) || (n < r && "slice" === i))
                        ? ((t -
                            this.transformCanvas.w *
                              (e / this.transformCanvas.h)) /
                            2) *
                          this.renderConfig.dpr
                        : "xMax" === s &&
                          ((r < n && "meet" === i) || (n < r && "slice" === i))
                        ? (t -
                            this.transformCanvas.w *
                              (e / this.transformCanvas.h)) *
                          this.renderConfig.dpr
                        : 0),
                    (this.transformCanvas.ty =
                      "YMid" === a &&
                      ((n < r && "meet" === i) || (r < n && "slice" === i))
                        ? ((e -
                            this.transformCanvas.h *
                              (t / this.transformCanvas.w)) /
                            2) *
                          this.renderConfig.dpr
                        : "YMax" === a &&
                          ((n < r && "meet" === i) || (r < n && "slice" === i))
                        ? (e -
                            this.transformCanvas.h *
                              (t / this.transformCanvas.w)) *
                          this.renderConfig.dpr
                        : 0))
                  : ("none" === this.renderConfig.preserveAspectRatio
                      ? ((this.transformCanvas.sx =
                          t / (this.transformCanvas.w / this.renderConfig.dpr)),
                        (this.transformCanvas.sy =
                          e / (this.transformCanvas.h / this.renderConfig.dpr)))
                      : ((this.transformCanvas.sx = this.renderConfig.dpr),
                        (this.transformCanvas.sy = this.renderConfig.dpr)),
                    (this.transformCanvas.tx = 0),
                    (this.transformCanvas.ty = 0)),
                (this.transformCanvas.props = [
                  this.transformCanvas.sx,
                  0,
                  0,
                  0,
                  0,
                  this.transformCanvas.sy,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  this.transformCanvas.tx,
                  this.transformCanvas.ty,
                  0,
                  1,
                ]),
                this.ctxTransform(this.transformCanvas.props),
                this.canvasContext.beginPath(),
                this.canvasContext.rect(
                  0,
                  0,
                  this.transformCanvas.w,
                  this.transformCanvas.h
                ),
                this.canvasContext.closePath(),
                this.canvasContext.clip(),
                this.renderFrame(this.renderedFrame, !0);
            }),
            (CanvasRenderer.prototype.destroy = function () {
              var t;
              for (
                this.renderConfig.clearCanvas &&
                  this.animationItem.wrapper &&
                  (this.animationItem.wrapper.innerText = ""),
                  t = (this.layers ? this.layers.length : 0) - 1;
                0 <= t;
                --t
              )
                this.elements[t] && this.elements[t].destroy();
              (this.elements.length = 0),
                (this.globalData.canvasContext = null),
                (this.animationItem.container = null),
                (this.destroyed = !0);
            }),
            (CanvasRenderer.prototype.renderFrame = function (t, e) {
              if (
                (this.renderedFrame !== t ||
                  !0 !== this.renderConfig.clearCanvas ||
                  e) &&
                !this.destroyed &&
                -1 !== t
              ) {
                var r;
                (this.renderedFrame = t),
                  (this.globalData.frameNum =
                    t - this.animationItem._isFirstFrame),
                  (this.globalData.frameId += 1),
                  (this.globalData._mdf = !this.renderConfig.clearCanvas || e),
                  (this.globalData.projectInterface.currentFrame = t);
                var i = this.layers.length;
                for (
                  this.completeLayers || this.checkLayers(t), r = 0;
                  r < i;
                  r += 1
                )
                  (this.completeLayers || this.elements[r]) &&
                    this.elements[r].prepareFrame(t - this.layers[r].st);
                if (this.globalData._mdf) {
                  for (
                    !0 === this.renderConfig.clearCanvas
                      ? this.canvasContext.clearRect(
                          0,
                          0,
                          this.transformCanvas.w,
                          this.transformCanvas.h
                        )
                      : this.save(),
                      r = i - 1;
                    0 <= r;
                    --r
                  )
                    (this.completeLayers || this.elements[r]) &&
                      this.elements[r].renderFrame();
                  !0 !== this.renderConfig.clearCanvas && this.restore();
                }
              }
            }),
            (CanvasRenderer.prototype.buildItem = function (t) {
              var e,
                r = this.elements;
              r[t] ||
                99 === this.layers[t].ty ||
                ((e = this.createItem(this.layers[t], this, this.globalData)),
                (r[t] = e).initExpressions());
            }),
            (CanvasRenderer.prototype.checkPendingElements = function () {
              for (; this.pendingElements.length; )
                this.pendingElements.pop().checkParenting();
            }),
            (CanvasRenderer.prototype.hide = function () {
              this.animationItem.container.style.display = "none";
            }),
            (CanvasRenderer.prototype.show = function () {
              this.animationItem.container.style.display = "block";
            }),
            extendPrototype([BaseRenderer], HybridRenderer),
            (HybridRenderer.prototype.buildItem =
              SVGRenderer.prototype.buildItem),
            (HybridRenderer.prototype.checkPendingElements = function () {
              for (; this.pendingElements.length; )
                this.pendingElements.pop().checkParenting();
            }),
            (HybridRenderer.prototype.appendElementInPos = function (t, e) {
              var r = t.getBaseElement();
              if (r) {
                t = this.layers[e];
                if (t.ddd && this.supports3d) this.addTo3dContainer(r, e);
                else if (this.threeDElements) this.addTo3dContainer(r, e);
                else {
                  for (var i, s, a = 0; a < e; )
                    this.elements[a] &&
                      !0 !== this.elements[a] &&
                      this.elements[a].getBaseElement &&
                      ((s = this.elements[a]),
                      (i =
                        (this.layers[a].ddd
                          ? this.getThreeDContainerByPos(a)
                          : s.getBaseElement()) || i)),
                      (a += 1);
                  i
                    ? (t.ddd && this.supports3d) ||
                      this.layerElement.insertBefore(r, i)
                    : (t.ddd && this.supports3d) ||
                      this.layerElement.appendChild(r);
                }
              }
            }),
            (HybridRenderer.prototype.createShape = function (t) {
              return new (this.supports3d ? HShapeElement : SVGShapeElement)(
                t,
                this.globalData,
                this
              );
            }),
            (HybridRenderer.prototype.createText = function (t) {
              return new (
                this.supports3d ? HTextElement : SVGTextLottieElement
              )(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createCamera = function (t) {
              return (
                (this.camera = new HCameraElement(t, this.globalData, this)),
                this.camera
              );
            }),
            (HybridRenderer.prototype.createImage = function (t) {
              return new (this.supports3d ? HImageElement : IImageElement)(
                t,
                this.globalData,
                this
              );
            }),
            (HybridRenderer.prototype.createComp = function (t) {
              return new (this.supports3d ? HCompElement : SVGCompElement)(
                t,
                this.globalData,
                this
              );
            }),
            (HybridRenderer.prototype.createSolid = function (t) {
              return new (this.supports3d ? HSolidElement : ISolidElement)(
                t,
                this.globalData,
                this
              );
            }),
            (HybridRenderer.prototype.createNull =
              SVGRenderer.prototype.createNull),
            (HybridRenderer.prototype.getThreeDContainerByPos = function (t) {
              for (var e = 0, r = this.threeDElements.length; e < r; ) {
                if (
                  this.threeDElements[e].startPos <= t &&
                  this.threeDElements[e].endPos >= t
                )
                  return this.threeDElements[e].perspectiveElem;
                e += 1;
              }
              return null;
            }),
            (HybridRenderer.prototype.createThreeDContainer = function (t, e) {
              var r,
                i = createTag("div");
              styleDiv(i);
              var s,
                a = createTag("div");
              styleDiv(a),
                "3d" === e &&
                  (((r = i.style).width = this.globalData.compSize.w + "px"),
                  (r.height = this.globalData.compSize.h + "px"),
                  (r.webkitTransformOrigin = s = "50% 50%"),
                  (r.mozTransformOrigin = s),
                  (r.transformOrigin = s),
                  ((r = a.style).transform = s =
                    "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"),
                  (r.webkitTransform = s)),
                i.appendChild(a);
              e = {
                container: a,
                perspectiveElem: i,
                startPos: t,
                endPos: t,
                type: e,
              };
              return this.threeDElements.push(e), e;
            }),
            (HybridRenderer.prototype.build3dContainers = function () {
              for (var t, e = this.layers.length, r = "", i = 0; i < e; i += 1)
                this.layers[i].ddd && 3 !== this.layers[i].ty
                  ? "3d" !== r &&
                    (t = this.createThreeDContainer(i, (r = "3d")))
                  : "2d" !== r &&
                    (t = this.createThreeDContainer(i, (r = "2d"))),
                  (t.endPos = Math.max(t.endPos, i));
              for (i = (e = this.threeDElements.length) - 1; 0 <= i; --i)
                this.resizerElem.appendChild(
                  this.threeDElements[i].perspectiveElem
                );
            }),
            (HybridRenderer.prototype.addTo3dContainer = function (t, e) {
              for (var r = 0, i = this.threeDElements.length; r < i; ) {
                if (e <= this.threeDElements[r].endPos) {
                  for (var s, a = this.threeDElements[r].startPos; a < e; )
                    this.elements[a] &&
                      this.elements[a].getBaseElement &&
                      (s = this.elements[a].getBaseElement()),
                      (a += 1);
                  s
                    ? this.threeDElements[r].container.insertBefore(t, s)
                    : this.threeDElements[r].container.appendChild(t);
                  break;
                }
                r += 1;
              }
            }),
            (HybridRenderer.prototype.configAnimation = function (t) {
              var e = createTag("div"),
                r = this.animationItem.wrapper,
                i = e.style;
              (i.width = t.w + "px"),
                (i.height = t.h + "px"),
                styleDiv((this.resizerElem = e)),
                (i.transformStyle = "flat"),
                (i.mozTransformStyle = "flat"),
                (i.webkitTransformStyle = "flat"),
                this.renderConfig.className &&
                  e.setAttribute("class", this.renderConfig.className),
                r.appendChild(e),
                (i.overflow = "hidden");
              e = createNS("svg");
              e.setAttribute("width", "1"),
                e.setAttribute("height", "1"),
                styleDiv(e),
                this.resizerElem.appendChild(e);
              i = createNS("defs");
              e.appendChild(i),
                (this.data = t),
                this.setupGlobalData(t, e),
                (this.globalData.defs = i),
                (this.layers = t.layers),
                (this.layerElement = this.resizerElem),
                this.build3dContainers(),
                this.updateContainerSize();
            }),
            (HybridRenderer.prototype.destroy = function () {
              this.animationItem.wrapper &&
                (this.animationItem.wrapper.innerText = ""),
                (this.animationItem.container = null),
                (this.globalData.defs = null);
              for (
                var t = this.layers ? this.layers.length : 0, e = 0;
                e < t;
                e += 1
              )
                this.elements[e].destroy();
              (this.elements.length = 0),
                (this.destroyed = !0),
                (this.animationItem = null);
            }),
            (HybridRenderer.prototype.updateContainerSize = function () {
              var t,
                e,
                r,
                i = this.animationItem.wrapper.offsetWidth,
                s = this.animationItem.wrapper.offsetHeight,
                i =
                  this.globalData.compSize.w / this.globalData.compSize.h >
                  i / s
                    ? ((t = i / this.globalData.compSize.w),
                      (e = i / this.globalData.compSize.w),
                      (r = 0),
                      (s -
                        this.globalData.compSize.h *
                          (i / this.globalData.compSize.w)) /
                        2)
                    : ((t = s / this.globalData.compSize.h),
                      (e = s / this.globalData.compSize.h),
                      (r =
                        (i -
                          this.globalData.compSize.w *
                            (s / this.globalData.compSize.h)) /
                        2),
                      0),
                s = this.resizerElem.style;
              (s.webkitTransform =
                "matrix3d(" +
                t +
                ",0,0,0,0," +
                e +
                ",0,0,0,0,1,0," +
                r +
                "," +
                i +
                ",0,1)"),
                (s.transform = s.webkitTransform);
            }),
            (HybridRenderer.prototype.renderFrame =
              SVGRenderer.prototype.renderFrame),
            (HybridRenderer.prototype.hide = function () {
              this.resizerElem.style.display = "none";
            }),
            (HybridRenderer.prototype.show = function () {
              this.resizerElem.style.display = "block";
            }),
            (HybridRenderer.prototype.initItems = function () {
              if ((this.buildAllItems(), this.camera)) this.camera.setup();
              else
                for (
                  var t = this.globalData.compSize.w,
                    e = this.globalData.compSize.h,
                    r = this.threeDElements.length,
                    i = 0;
                  i < r;
                  i += 1
                ) {
                  var s = this.threeDElements[i].perspectiveElem.style;
                  (s.webkitPerspective =
                    Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px"),
                    (s.perspective = s.webkitPerspective);
                }
            }),
            (HybridRenderer.prototype.searchExtraCompositions = function (t) {
              for (
                var e, r = t.length, i = createTag("div"), s = 0;
                s < r;
                s += 1
              )
                t[s].xt &&
                  ((e = this.createComp(
                    t[s],
                    i,
                    this.globalData.comp,
                    null
                  )).initExpressions(),
                  this.globalData.projectInterface.registerComposition(e));
            }),
            (MaskElement.prototype.getMaskProperty = function (t) {
              return this.viewData[t].prop;
            }),
            (MaskElement.prototype.renderFrame = function (t) {
              for (
                var e,
                  r = this.element.finalTransform.mat,
                  i = this.masksProperties.length,
                  s = 0;
                s < i;
                s += 1
              )
                (this.viewData[s].prop._mdf || t) &&
                  this.drawPath(
                    this.masksProperties[s],
                    this.viewData[s].prop.v,
                    this.viewData[s]
                  ),
                  (this.viewData[s].op._mdf || t) &&
                    this.viewData[s].elem.setAttribute(
                      "fill-opacity",
                      this.viewData[s].op.v
                    ),
                  "n" !== this.masksProperties[s].mode &&
                    (this.viewData[s].invRect &&
                      (this.element.finalTransform.mProp._mdf || t) &&
                      this.viewData[s].invRect.setAttribute(
                        "transform",
                        r.getInverseMatrix().to2dCSS()
                      ),
                    this.storedData[s].x && (this.storedData[s].x._mdf || t)) &&
                    ((e = this.storedData[s].expan),
                    this.storedData[s].x.v < 0
                      ? ("erode" !== this.storedData[s].lastOperator &&
                          ((this.storedData[s].lastOperator = "erode"),
                          this.storedData[s].elem.setAttribute(
                            "filter",
                            "url(" +
                              locationHref +
                              "#" +
                              this.storedData[s].filterId +
                              ")"
                          )),
                        e.setAttribute("radius", -this.storedData[s].x.v))
                      : ("dilate" !== this.storedData[s].lastOperator &&
                          ((this.storedData[s].lastOperator = "dilate"),
                          this.storedData[s].elem.setAttribute("filter", null)),
                        this.storedData[s].elem.setAttribute(
                          "stroke-width",
                          2 * this.storedData[s].x.v
                        )));
            }),
            (MaskElement.prototype.getMaskelement = function () {
              return this.maskElement;
            }),
            (MaskElement.prototype.createLayerSolidPath = function () {
              var t = "M0,0 ";
              return (
                (t += " h" + this.globalData.compSize.w),
                (t += " v" + this.globalData.compSize.h),
                (t += " h-" + this.globalData.compSize.w) +
                  (" v-" + this.globalData.compSize.h) +
                  " "
              );
            }),
            (MaskElement.prototype.drawPath = function (t, e, r) {
              for (
                var i,
                  s = " M" + e.v[0][0] + "," + e.v[0][1],
                  a = e._length,
                  n = 1;
                n < a;
                n += 1
              )
                s +=
                  " C" +
                  e.o[n - 1][0] +
                  "," +
                  e.o[n - 1][1] +
                  " " +
                  e.i[n][0] +
                  "," +
                  e.i[n][1] +
                  " " +
                  e.v[n][0] +
                  "," +
                  e.v[n][1];
              e.c &&
                1 < a &&
                (s +=
                  " C" +
                  e.o[n - 1][0] +
                  "," +
                  e.o[n - 1][1] +
                  " " +
                  e.i[0][0] +
                  "," +
                  e.i[0][1] +
                  " " +
                  e.v[0][0] +
                  "," +
                  e.v[0][1]),
                r.lastPath !== s &&
                  ((i = ""),
                  r.elem &&
                    (e.c && (i = t.inv ? this.solidPath + s : s),
                    r.elem.setAttribute("d", i)),
                  (r.lastPath = s));
            }),
            (MaskElement.prototype.destroy = function () {
              (this.element = null),
                (this.globalData = null),
                (this.maskElement = null),
                (this.data = null),
                (this.masksProperties = null);
            }),
            (HierarchyElement.prototype = {
              initHierarchy: function () {
                (this.hierarchy = []),
                  (this._isParent = !1),
                  this.checkParenting();
              },
              setHierarchy: function (t) {
                this.hierarchy = t;
              },
              setAsParent: function () {
                this._isParent = !0;
              },
              checkParenting: function () {
                void 0 !== this.data.parent &&
                  this.comp.buildElementParenting(this, this.data.parent, []);
              },
            }),
            (FrameElement.prototype = {
              initFrame: function () {
                (this._isFirstFrame = !1),
                  (this.dynamicProperties = []),
                  (this._mdf = !1);
              },
              prepareProperties: function (t, e) {
                for (
                  var r = this.dynamicProperties.length, i = 0;
                  i < r;
                  i += 1
                )
                  (e ||
                    (this._isParent &&
                      "transform" === this.dynamicProperties[i].propType)) &&
                    (this.dynamicProperties[i].getValue(),
                    this.dynamicProperties[i]._mdf &&
                      ((this.globalData._mdf = !0), (this._mdf = !0)));
              },
              addDynamicProperty: function (t) {
                -1 === this.dynamicProperties.indexOf(t) &&
                  this.dynamicProperties.push(t);
              },
            }),
            (TransformElement.prototype = {
              initTransform: function () {
                (this.finalTransform = {
                  mProp: this.data.ks
                    ? TransformPropertyFactory.getTransformProperty(
                        this,
                        this.data.ks,
                        this
                      )
                    : { o: 0 },
                  _matMdf: !1,
                  _opMdf: !1,
                  mat: new Matrix(),
                }),
                  this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                  this.data.ty;
              },
              renderTransform: function () {
                if (
                  ((this.finalTransform._opMdf =
                    this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                  (this.finalTransform._matMdf =
                    this.finalTransform.mProp._mdf || this._isFirstFrame),
                  this.hierarchy)
                ) {
                  var t,
                    e = this.finalTransform.mat,
                    r = 0,
                    i = this.hierarchy.length;
                  if (!this.finalTransform._matMdf)
                    for (; r < i; ) {
                      if (this.hierarchy[r].finalTransform.mProp._mdf) {
                        this.finalTransform._matMdf = !0;
                        break;
                      }
                      r += 1;
                    }
                  if (this.finalTransform._matMdf)
                    for (
                      t = this.finalTransform.mProp.v.props,
                        e.cloneFromProps(t),
                        r = 0;
                      r < i;
                      r += 1
                    )
                      (t = this.hierarchy[r].finalTransform.mProp.v.props),
                        e.transform(
                          t[0],
                          t[1],
                          t[2],
                          t[3],
                          t[4],
                          t[5],
                          t[6],
                          t[7],
                          t[8],
                          t[9],
                          t[10],
                          t[11],
                          t[12],
                          t[13],
                          t[14],
                          t[15]
                        );
                }
              },
              globalToLocal: function (t) {
                var e = [];
                e.push(this.finalTransform);
                for (var r = !0, i = this.comp; r; )
                  i.finalTransform
                    ? (i.data.hasMask && e.splice(0, 0, i.finalTransform),
                      (i = i.comp))
                    : (r = !1);
                for (var s, a = e.length, n = 0; n < a; n += 1)
                  (s = e[n].mat.applyToPointArray(0, 0, 0)),
                    (t = [t[0] - s[0], t[1] - s[1], 0]);
                return t;
              },
              mHelper: new Matrix(),
            }),
            (RenderableElement.prototype = {
              initRenderable: function () {
                (this.isInRange = !1),
                  (this.hidden = !1),
                  (this.isTransparent = !1),
                  (this.renderableComponents = []);
              },
              addRenderableComponent: function (t) {
                -1 === this.renderableComponents.indexOf(t) &&
                  this.renderableComponents.push(t);
              },
              removeRenderableComponent: function (t) {
                -1 !== this.renderableComponents.indexOf(t) &&
                  this.renderableComponents.splice(
                    this.renderableComponents.indexOf(t),
                    1
                  );
              },
              prepareRenderableFrame: function (t) {
                this.checkLayerLimits(t);
              },
              checkTransparency: function () {
                this.finalTransform.mProp.o.v <= 0
                  ? !this.isTransparent &&
                    this.globalData.renderConfig.hideOnTransparent &&
                    ((this.isTransparent = !0), this.hide())
                  : this.isTransparent &&
                    ((this.isTransparent = !1), this.show());
              },
              checkLayerLimits: function (t) {
                this.data.ip - this.data.st <= t &&
                this.data.op - this.data.st > t
                  ? !0 !== this.isInRange &&
                    ((this.globalData._mdf = !0),
                    (this._mdf = !0),
                    (this.isInRange = !0),
                    this.show())
                  : !1 !== this.isInRange &&
                    ((this.globalData._mdf = !0),
                    (this.isInRange = !1),
                    this.hide());
              },
              renderRenderable: function () {
                for (
                  var t = this.renderableComponents.length, e = 0;
                  e < t;
                  e += 1
                )
                  this.renderableComponents[e].renderFrame(this._isFirstFrame);
              },
              sourceRectAtTime: function () {
                return { top: 0, left: 0, width: 100, height: 100 };
              },
              getLayerSize: function () {
                return 5 === this.data.ty
                  ? {
                      w: this.data.textData.width,
                      h: this.data.textData.height,
                    }
                  : { w: this.data.width, h: this.data.height };
              },
            }),
            extendPrototype(
              [
                RenderableElement,
                createProxyFunction({
                  initElement: function (t, e, r) {
                    this.initFrame(),
                      this.initBaseData(t, e, r),
                      this.initTransform(t, e, r),
                      this.initHierarchy(),
                      this.initRenderable(),
                      this.initRendererElement(),
                      this.createContainerElements(),
                      this.createRenderableComponents(),
                      this.createContent(),
                      this.hide();
                  },
                  hide: function () {
                    this.hidden ||
                      (this.isInRange && !this.isTransparent) ||
                      (((this.baseElement || this.layerElement).style.display =
                        "none"),
                      (this.hidden = !0));
                  },
                  show: function () {
                    this.isInRange &&
                      !this.isTransparent &&
                      (this.data.hd ||
                        ((this.baseElement || this.layerElement).style.display =
                          "block"),
                      (this.hidden = !1),
                      (this._isFirstFrame = !0));
                  },
                  renderFrame: function () {
                    this.data.hd ||
                      this.hidden ||
                      (this.renderTransform(),
                      this.renderRenderable(),
                      this.renderElement(),
                      this.renderInnerContent(),
                      this._isFirstFrame && (this._isFirstFrame = !1));
                  },
                  renderInnerContent: function () {},
                  prepareFrame: function (t) {
                    (this._mdf = !1),
                      this.prepareRenderableFrame(t),
                      this.prepareProperties(t, this.isInRange),
                      this.checkTransparency();
                  },
                  destroy: function () {
                    (this.innerElem = null), this.destroyBaseElement();
                  },
                }),
              ],
              RenderableDOMElement
            ),
            (SVGStyleData.prototype.reset = function () {
              (this.d = ""), (this._mdf = !1);
            }),
            (SVGShapeData.prototype.setAsAnimated = function () {
              this._isAnimated = !0;
            }),
            extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
            extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
            (SVGGradientFillStyleData.prototype.initGradientData = function (
              t,
              e,
              r
            ) {
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
                (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
                (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
                (this.h = PropertyFactory.getProp(
                  t,
                  e.h || { k: 0 },
                  0,
                  0.01,
                  this
                )),
                (this.a = PropertyFactory.getProp(
                  t,
                  e.a || { k: 0 },
                  0,
                  degToRads,
                  this
                )),
                (this.g = new GradientProperty(t, e.g, this)),
                (this.style = r),
                (this.stops = []),
                this.setGradientData(r.pElem, e),
                this.setGradientOpacity(e, r),
                (this._isAnimated = !!this._isAnimated);
            }),
            (SVGGradientFillStyleData.prototype.setGradientData = function (
              t,
              e
            ) {
              var r = createElementID(),
                i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
              i.setAttribute("id", r),
                i.setAttribute("spreadMethod", "pad"),
                i.setAttribute("gradientUnits", "userSpaceOnUse");
              for (var s, a = [], n = 4 * e.g.p, o = 0; o < n; o += 4)
                (s = createNS("stop")), i.appendChild(s), a.push(s);
              t.setAttribute(
                "gf" === e.ty ? "fill" : "stroke",
                "url(" + locationHref + "#" + r + ")"
              ),
                (this.gf = i),
                (this.cst = a);
            }),
            (SVGGradientFillStyleData.prototype.setGradientOpacity = function (
              t,
              e
            ) {
              if (this.g._hasOpacity && !this.g._collapsable) {
                var r,
                  i = createNS("mask"),
                  s = createNS("path");
                i.appendChild(s);
                var a = createElementID(),
                  n = createElementID();
                i.setAttribute("id", n);
                var o = createNS(
                  1 === t.t ? "linearGradient" : "radialGradient"
                );
                o.setAttribute("id", a),
                  o.setAttribute("spreadMethod", "pad"),
                  o.setAttribute("gradientUnits", "userSpaceOnUse");
                for (
                  var h = (t.g.k.k[0].s || t.g.k.k).length,
                    l = this.stops,
                    p = 4 * t.g.p;
                  p < h;
                  p += 2
                )
                  (r = createNS("stop")).setAttribute(
                    "stop-color",
                    "rgb(255,255,255)"
                  ),
                    o.appendChild(r),
                    l.push(r);
                s.setAttribute(
                  "gf" === t.ty ? "fill" : "stroke",
                  "url(" + locationHref + "#" + a + ")"
                ),
                  "gs" === t.ty &&
                    (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                    s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                    1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)),
                  (this.of = o),
                  (this.ms = i),
                  (this.ost = l),
                  (this.maskId = n),
                  (e.msElem = s);
              }
            }),
            extendPrototype(
              [DynamicPropertyContainer],
              SVGGradientFillStyleData
            ),
            extendPrototype(
              [SVGGradientFillStyleData, DynamicPropertyContainer],
              SVGGradientStrokeStyleData
            );
          var SVGElementsRenderer =
              ((tv = new Matrix()),
              (uv = new Matrix()),
              {
                createRenderFunction: function (t) {
                  switch (t.ty) {
                    case "fl":
                      return xv;
                    case "gf":
                      return zv;
                    case "gs":
                      return yv;
                    case "st":
                      return Av;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                      return wv;
                    case "tr":
                      return vv;
                    default:
                      return null;
                  }
                },
              }),
            tv,
            uv;
          function vv(t, e, r) {
            (r || e.transform.op._mdf) &&
              e.transform.container.setAttribute("opacity", e.transform.op.v),
              (r || e.transform.mProps._mdf) &&
                e.transform.container.setAttribute(
                  "transform",
                  e.transform.mProps.v.to2dCSS()
                );
          }
          function wv(t, e, r) {
            for (
              var i,
                s,
                a,
                n,
                o,
                h,
                l,
                p,
                m,
                f,
                c = e.styles.length,
                d = e.lvl,
                u = 0;
              u < c;
              u += 1
            ) {
              if (((n = e.sh._mdf || r), e.styles[u].lvl < d)) {
                for (
                  l = uv.reset(),
                    m = d - e.styles[u].lvl,
                    f = e.transformers.length - 1;
                  !n && 0 < m;

                )
                  (n = e.transformers[f].mProps._mdf || n), --m, --f;
                if (n)
                  for (
                    m = d - e.styles[u].lvl, f = e.transformers.length - 1;
                    0 < m;

                  )
                    (p = e.transformers[f].mProps.v.props),
                      l.transform(
                        p[0],
                        p[1],
                        p[2],
                        p[3],
                        p[4],
                        p[5],
                        p[6],
                        p[7],
                        p[8],
                        p[9],
                        p[10],
                        p[11],
                        p[12],
                        p[13],
                        p[14],
                        p[15]
                      ),
                      --m,
                      --f;
              } else l = tv;
              if (((s = (h = e.sh.paths)._length), n)) {
                for (a = "", i = 0; i < s; i += 1)
                  (o = h.shapes[i]) &&
                    o._length &&
                    (a += buildShapeString(o, o._length, o.c, l));
                e.caches[u] = a;
              } else a = e.caches[u];
              (e.styles[u].d += !0 === t.hd ? "" : a),
                (e.styles[u]._mdf = n || e.styles[u]._mdf);
            }
          }
          function xv(t, e, r) {
            var i = e.style;
            (e.c._mdf || r) &&
              i.pElem.setAttribute(
                "fill",
                "rgb(" +
                  bmFloor(e.c.v[0]) +
                  "," +
                  bmFloor(e.c.v[1]) +
                  "," +
                  bmFloor(e.c.v[2]) +
                  ")"
              ),
              (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v);
          }
          function yv(t, e, r) {
            zv(t, e, r), Av(0, e, r);
          }
          function zv(t, e, r) {
            var i,
              s,
              a,
              n,
              o = e.gf,
              h = e.g._hasOpacity,
              l = e.s.v,
              p = e.e.v;
            if (
              ((e.o._mdf || r) &&
                ((a = "gf" === t.ty ? "fill-opacity" : "stroke-opacity"),
                e.style.pElem.setAttribute(a, e.o.v)),
              (e.s._mdf || r) &&
                ((a = "x1" == (s = 1 === t.t ? "x1" : "cx") ? "y1" : "cy"),
                o.setAttribute(s, l[0]),
                o.setAttribute(a, l[1]),
                h &&
                  !e.g._collapsable &&
                  (e.of.setAttribute(s, l[0]), e.of.setAttribute(a, l[1]))),
              e.g._cmdf || r)
            )
              for (var m = e.cst, f = e.g.c, c = m.length, d = 0; d < c; d += 1)
                (i = m[d]).setAttribute("offset", f[4 * d] + "%"),
                  i.setAttribute(
                    "stop-color",
                    "rgb(" +
                      f[4 * d + 1] +
                      "," +
                      f[4 * d + 2] +
                      "," +
                      f[4 * d + 3] +
                      ")"
                  );
            if (h && (e.g._omdf || r)) {
              var u = e.g.o;
              for (
                c = (m = e.g._collapsable ? e.cst : e.ost).length, d = 0;
                d < c;
                d += 1
              )
                (i = m[d]),
                  e.g._collapsable || i.setAttribute("offset", u[2 * d] + "%"),
                  i.setAttribute("stop-opacity", u[2 * d + 1]);
            }
            1 === t.t
              ? (e.e._mdf || r) &&
                (o.setAttribute("x2", p[0]),
                o.setAttribute("y2", p[1]),
                h &&
                  !e.g._collapsable &&
                  (e.of.setAttribute("x2", p[0]),
                  e.of.setAttribute("y2", p[1])))
              : ((e.s._mdf || e.e._mdf || r) &&
                  ((n = Math.sqrt(
                    Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)
                  )),
                  o.setAttribute("r", n),
                  h && !e.g._collapsable && e.of.setAttribute("r", n)),
                (e.e._mdf || e.h._mdf || e.a._mdf || r) &&
                  ((n =
                    n ||
                    Math.sqrt(
                      Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)
                    )),
                  (r = Math.atan2(p[1] - l[1], p[0] - l[0])),
                  1 <= (p = e.h.v) ? (p = 0.99) : p <= -1 && (p = -0.99),
                  (n = n * p),
                  (p = Math.cos(r + e.a.v) * n + l[0]),
                  (l = Math.sin(r + e.a.v) * n + l[1]),
                  o.setAttribute("fx", p),
                  o.setAttribute("fy", l),
                  h &&
                    !e.g._collapsable &&
                    (e.of.setAttribute("fx", p), e.of.setAttribute("fy", l))));
          }
          function Av(t, e, r) {
            var i = e.style,
              s = e.d;
            s &&
              (s._mdf || r) &&
              s.dashStr &&
              (i.pElem.setAttribute("stroke-dasharray", s.dashStr),
              i.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])),
              e.c &&
                (e.c._mdf || r) &&
                i.pElem.setAttribute(
                  "stroke",
                  "rgb(" +
                    bmFloor(e.c.v[0]) +
                    "," +
                    bmFloor(e.c.v[1]) +
                    "," +
                    bmFloor(e.c.v[2]) +
                    ")"
                ),
              (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v),
              (e.w._mdf || r) &&
                (i.pElem.setAttribute("stroke-width", e.w.v),
                i.msElem && i.msElem.setAttribute("stroke-width", e.w.v));
          }
          function ShapeTransformManager() {
            (this.sequences = {}),
              (this.sequenceList = []),
              (this.transform_key_count = 0);
          }
          function CVShapeData(t, e, r, i) {
            (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
            var s = 4;
            "rc" === e.ty
              ? (s = 5)
              : "el" === e.ty
              ? (s = 6)
              : "sr" === e.ty && (s = 7),
              (this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t));
            for (var a, n = r.length, o = 0; o < n; o += 1)
              r[o].closed ||
                ((a = {
                  transforms: i.addTransformSequence(r[o].transforms),
                  trNodes: [],
                }),
                this.styledShapes.push(a),
                r[o].elements.push(a));
          }
          function BaseElement() {}
          function NullElement(t, e, r) {
            this.initFrame(),
              this.initBaseData(t, e, r),
              this.initFrame(),
              this.initTransform(t, e, r),
              this.initHierarchy();
          }
          function SVGBaseElement() {}
          function IShapeElement() {}
          function ITextElement() {}
          function ICompElement() {}
          function IImageElement(t, e, r) {
            (this.assetData = e.getAssetData(t.refId)),
              this.initElement(t, e, r),
              (this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h,
              });
          }
          function ISolidElement(t, e, r) {
            this.initElement(t, e, r);
          }
          function AudioElement(t, e, r) {
            this.initFrame(),
              this.initRenderable(),
              (this.assetData = e.getAssetData(t.refId)),
              this.initBaseData(t, e, r),
              (this._isPlaying = !1),
              (this._canPlay = !1);
            r = this.globalData.getAssetsPath(this.assetData);
            (this.audio = this.globalData.audioController.createAudio(r)),
              (this._currentTime = 0),
              this.globalData.audioController.addAudio(this),
              (this.tm = t.tm
                ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                : { _placeholder: !0 });
          }
          function FootageElement(t, e, r) {
            this.initFrame(),
              this.initRenderable(),
              (this.assetData = e.getAssetData(t.refId)),
              (this.footageData = e.imageLoader.getAsset(this.assetData)),
              this.initBaseData(t, e, r);
          }
          function SVGCompElement(t, e, r) {
            (this.layers = t.layers),
              (this.supports3d = !0),
              (this.completeLayers = !1),
              (this.pendingElements = []),
              (this.elements = this.layers
                ? createSizedArray(this.layers.length)
                : []),
              this.initElement(t, e, r),
              (this.tm = t.tm
                ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                : { _placeholder: !0 });
          }
          function SVGTextLottieElement(t, e, r) {
            (this.textSpans = []),
              (this.renderType = "svg"),
              this.initElement(t, e, r);
          }
          function SVGShapeElement(t, e, r) {
            (this.shapes = []),
              (this.shapesData = t.shapes),
              (this.stylesList = []),
              (this.shapeModifiers = []),
              (this.itemsData = []),
              (this.processedElements = []),
              (this.animatedContents = []),
              this.initElement(t, e, r),
              (this.prevViewData = []);
          }
          function SVGTintFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"),
              r.setAttribute("color-interpolation-filters", "linearRGB"),
              r.setAttribute(
                "values",
                "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
              ),
              r.setAttribute("result", "f1"),
              t.appendChild(r),
              (r = createNS("feColorMatrix")).setAttribute("type", "matrix"),
              r.setAttribute("color-interpolation-filters", "sRGB"),
              r.setAttribute(
                "values",
                "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
              ),
              r.setAttribute("result", "f2"),
              t.appendChild(r),
              (this.matrixFilter = r),
              (100 === e.effectElements[2].p.v && !e.effectElements[2].p.k) ||
                ((e = createNS("feMerge")),
                t.appendChild(e),
                (t = createNS("feMergeNode")).setAttribute(
                  "in",
                  "SourceGraphic"
                ),
                e.appendChild(t),
                (t = createNS("feMergeNode")).setAttribute("in", "f2"),
                e.appendChild(t));
          }
          function SVGFillFilter(t, e) {
            this.filterManager = e;
            e = createNS("feColorMatrix");
            e.setAttribute("type", "matrix"),
              e.setAttribute("color-interpolation-filters", "sRGB"),
              e.setAttribute(
                "values",
                "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
              ),
              t.appendChild(e),
              (this.matrixFilter = e);
          }
          function SVGGaussianBlurEffect(t, e) {
            t.setAttribute("x", "-100%"),
              t.setAttribute("y", "-100%"),
              t.setAttribute("width", "300%"),
              t.setAttribute("height", "300%"),
              (this.filterManager = e);
            e = createNS("feGaussianBlur");
            t.appendChild(e), (this.feGaussianBlur = e);
          }
          function SVGStrokeEffect(t, e) {
            (this.initialized = !1),
              (this.filterManager = e),
              (this.elem = t),
              (this.paths = []);
          }
          function SVGTritoneFilter(t, e) {
            this.filterManager = e;
            e = createNS("feColorMatrix");
            e.setAttribute("type", "matrix"),
              e.setAttribute("color-interpolation-filters", "linearRGB"),
              e.setAttribute(
                "values",
                "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
              ),
              e.setAttribute("result", "f1"),
              t.appendChild(e);
            e = createNS("feComponentTransfer");
            e.setAttribute("color-interpolation-filters", "sRGB"),
              t.appendChild(e),
              (this.matrixFilter = e);
            t = createNS("feFuncR");
            t.setAttribute("type", "table"),
              e.appendChild(t),
              (this.feFuncR = t);
            t = createNS("feFuncG");
            t.setAttribute("type", "table"),
              e.appendChild(t),
              (this.feFuncG = t);
            t = createNS("feFuncB");
            t.setAttribute("type", "table"),
              e.appendChild(t),
              (this.feFuncB = t);
          }
          function SVGProLevelsFilter(t, e) {
            this.filterManager = e;
            var r = this.filterManager.effectElements,
              e = createNS("feComponentTransfer");
            (r[10].p.k ||
              0 !== r[10].p.v ||
              r[11].p.k ||
              1 !== r[11].p.v ||
              r[12].p.k ||
              1 !== r[12].p.v ||
              r[13].p.k ||
              0 !== r[13].p.v ||
              r[14].p.k ||
              1 !== r[14].p.v) &&
              (this.feFuncR = this.createFeFunc("feFuncR", e)),
              (r[17].p.k ||
                0 !== r[17].p.v ||
                r[18].p.k ||
                1 !== r[18].p.v ||
                r[19].p.k ||
                1 !== r[19].p.v ||
                r[20].p.k ||
                0 !== r[20].p.v ||
                r[21].p.k ||
                1 !== r[21].p.v) &&
                (this.feFuncG = this.createFeFunc("feFuncG", e)),
              (r[24].p.k ||
                0 !== r[24].p.v ||
                r[25].p.k ||
                1 !== r[25].p.v ||
                r[26].p.k ||
                1 !== r[26].p.v ||
                r[27].p.k ||
                0 !== r[27].p.v ||
                r[28].p.k ||
                1 !== r[28].p.v) &&
                (this.feFuncB = this.createFeFunc("feFuncB", e)),
              (r[31].p.k ||
                0 !== r[31].p.v ||
                r[32].p.k ||
                1 !== r[32].p.v ||
                r[33].p.k ||
                1 !== r[33].p.v ||
                r[34].p.k ||
                0 !== r[34].p.v ||
                r[35].p.k ||
                1 !== r[35].p.v) &&
                (this.feFuncA = this.createFeFunc("feFuncA", e)),
              (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
                (e.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(e),
                (e = createNS("feComponentTransfer"))),
              (r[3].p.k ||
                0 !== r[3].p.v ||
                r[4].p.k ||
                1 !== r[4].p.v ||
                r[5].p.k ||
                1 !== r[5].p.v ||
                r[6].p.k ||
                0 !== r[6].p.v ||
                r[7].p.k ||
                1 !== r[7].p.v) &&
                (e.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(e),
                (this.feFuncRComposed = this.createFeFunc("feFuncR", e)),
                (this.feFuncGComposed = this.createFeFunc("feFuncG", e)),
                (this.feFuncBComposed = this.createFeFunc("feFuncB", e)));
          }
          function SVGDropShadowEffect(t, e) {
            var r = e.container.globalData.renderConfig.filterSize;
            t.setAttribute("x", r.x),
              t.setAttribute("y", r.y),
              t.setAttribute("width", r.width),
              t.setAttribute("height", r.height),
              (this.filterManager = e);
            e = createNS("feGaussianBlur");
            e.setAttribute("in", "SourceAlpha"),
              e.setAttribute("result", "drop_shadow_1"),
              e.setAttribute("stdDeviation", "0"),
              (this.feGaussianBlur = e),
              t.appendChild(e);
            e = createNS("feOffset");
            e.setAttribute("dx", "25"),
              e.setAttribute("dy", "0"),
              e.setAttribute("in", "drop_shadow_1"),
              e.setAttribute("result", "drop_shadow_2"),
              (this.feOffset = e),
              t.appendChild(e);
            e = createNS("feFlood");
            e.setAttribute("flood-color", "#00ff00"),
              e.setAttribute("flood-opacity", "1"),
              e.setAttribute("result", "drop_shadow_3"),
              (this.feFlood = e),
              t.appendChild(e);
            e = createNS("feComposite");
            e.setAttribute("in", "drop_shadow_3"),
              e.setAttribute("in2", "drop_shadow_2"),
              e.setAttribute("operator", "in"),
              e.setAttribute("result", "drop_shadow_4"),
              t.appendChild(e);
            e = createNS("feMerge");
            t.appendChild(e),
              (t = createNS("feMergeNode")),
              e.appendChild(t),
              (t = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
              (this.feMergeNode = t),
              (this.feMerge = e),
              (this.originalNodeAdded = !1),
              e.appendChild(t);
          }
          (ShapeTransformManager.prototype = {
            addTransformSequence: function (t) {
              for (var e = t.length, r = "_", i = 0; i < e; i += 1)
                r += t[i].transform.key + "_";
              var s = this.sequences[r];
              return (
                s ||
                  ((s = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix(),
                    _mdf: !1,
                  }),
                  (this.sequences[r] = s),
                  this.sequenceList.push(s)),
                s
              );
            },
            processSequence: function (t, e) {
              for (
                var r, i = 0, s = t.transforms.length, a = e;
                i < s && !e;

              ) {
                if (t.transforms[i].transform.mProps._mdf) {
                  a = !0;
                  break;
                }
                i += 1;
              }
              if (a)
                for (t.finalTransform.reset(), i = s - 1; 0 <= i; --i)
                  (r = t.transforms[i].transform.mProps.v.props),
                    t.finalTransform.transform(
                      r[0],
                      r[1],
                      r[2],
                      r[3],
                      r[4],
                      r[5],
                      r[6],
                      r[7],
                      r[8],
                      r[9],
                      r[10],
                      r[11],
                      r[12],
                      r[13],
                      r[14],
                      r[15]
                    );
              t._mdf = a;
            },
            processSequences: function (t) {
              for (var e = this.sequenceList.length, r = 0; r < e; r += 1)
                this.processSequence(this.sequenceList[r], t);
            },
            getNewKey: function () {
              return (
                (this.transform_key_count += 1), "_" + this.transform_key_count
              );
            },
          }),
            (CVShapeData.prototype.setAsAnimated =
              SVGShapeData.prototype.setAsAnimated),
            (BaseElement.prototype = {
              checkMasks: function () {
                if (!this.data.hasMask) return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                  if (
                    "n" !== this.data.masksProperties[t].mode &&
                    !1 !== this.data.masksProperties[t].cl
                  )
                    return !0;
                  t += 1;
                }
                return !1;
              },
              initExpressions: function () {
                (this.layerInterface = LayerExpressionInterface(this)),
                  this.data.hasMask &&
                    this.maskManager &&
                    this.layerInterface.registerMaskInterface(this.maskManager);
                var t = EffectsExpressionInterface.createEffectsInterface(
                  this,
                  this.layerInterface
                );
                this.layerInterface.registerEffectsInterface(t),
                  0 === this.data.ty || this.data.xt
                    ? (this.compInterface = CompExpressionInterface(this))
                    : 4 === this.data.ty
                    ? ((this.layerInterface.shapeInterface =
                        ShapeExpressionInterface(
                          this.shapesData,
                          this.itemsData,
                          this.layerInterface
                        )),
                      (this.layerInterface.content =
                        this.layerInterface.shapeInterface))
                    : 5 === this.data.ty &&
                      ((this.layerInterface.textInterface =
                        TextExpressionInterface(this)),
                      (this.layerInterface.text =
                        this.layerInterface.textInterface));
              },
              setBlendMode: function () {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style[
                  "mix-blend-mode"
                ] = t;
              },
              initBaseData: function (t, e, r) {
                (this.globalData = e),
                  (this.comp = r),
                  (this.data = t),
                  (this.layerId = createElementID()),
                  this.data.sr || (this.data.sr = 1),
                  (this.effectsManager = new EffectsManager(
                    this.data,
                    this,
                    this.dynamicProperties
                  ));
              },
              getType: function () {
                return this.type;
              },
              sourceRectAtTime: function () {},
            }),
            (NullElement.prototype.prepareFrame = function (t) {
              this.prepareProperties(t, !0);
            }),
            (NullElement.prototype.renderFrame = function () {}),
            (NullElement.prototype.getBaseElement = function () {
              return null;
            }),
            (NullElement.prototype.destroy = function () {}),
            (NullElement.prototype.sourceRectAtTime = function () {}),
            (NullElement.prototype.hide = function () {}),
            extendPrototype(
              [BaseElement, TransformElement, HierarchyElement, FrameElement],
              NullElement
            ),
            (SVGBaseElement.prototype = {
              initRendererElement: function () {
                this.layerElement = createNS("g");
              },
              createContainerElements: function () {
                (this.matteElement = createNS("g")),
                  (this.transformedElement = this.layerElement),
                  (this.maskedElement = this.layerElement),
                  (this._sizeChanged = !1);
                var t,
                  e,
                  r,
                  i,
                  s,
                  a,
                  n,
                  o = null;
                this.data.td
                  ? 3 == this.data.td || 1 == this.data.td
                    ? ((i = createNS("mask")).setAttribute("id", this.layerId),
                      i.setAttribute(
                        "mask-type",
                        3 == this.data.td ? "luminance" : "alpha"
                      ),
                      i.appendChild(this.layerElement),
                      this.globalData.defs.appendChild((o = i)),
                      featureSupport.maskType ||
                        1 != this.data.td ||
                        (i.setAttribute("mask-type", "luminance"),
                        (t = createElementID()),
                        (e = filtersFactory.createFilter(t)),
                        this.globalData.defs.appendChild(e),
                        e.appendChild(
                          filtersFactory.createAlphaToLuminanceFilter()
                        ),
                        (s = createNS("g")).appendChild(this.layerElement),
                        (o = s),
                        i.appendChild(s),
                        s.setAttribute(
                          "filter",
                          "url(" + locationHref + "#" + t + ")"
                        )))
                    : 2 == this.data.td &&
                      ((a = createNS("mask")).setAttribute("id", this.layerId),
                      a.setAttribute("mask-type", "alpha"),
                      (n = createNS("g")),
                      a.appendChild(n),
                      (t = createElementID()),
                      (e = filtersFactory.createFilter(t)),
                      (r = createNS("feComponentTransfer")).setAttribute(
                        "in",
                        "SourceGraphic"
                      ),
                      e.appendChild(r),
                      (i = createNS("feFuncA")).setAttribute("type", "table"),
                      i.setAttribute("tableValues", "1.0 0.0"),
                      r.appendChild(i),
                      this.globalData.defs.appendChild(e),
                      (i = createNS("rect")).setAttribute(
                        "width",
                        this.comp.data.w
                      ),
                      i.setAttribute("height", this.comp.data.h),
                      i.setAttribute("x", "0"),
                      i.setAttribute("y", "0"),
                      i.setAttribute("fill", "#ffffff"),
                      i.setAttribute("opacity", "0"),
                      n.setAttribute(
                        "filter",
                        "url(" + locationHref + "#" + t + ")"
                      ),
                      n.appendChild(i),
                      n.appendChild(this.layerElement),
                      (o = n),
                      featureSupport.maskType ||
                        (a.setAttribute("mask-type", "luminance"),
                        e.appendChild(
                          filtersFactory.createAlphaToLuminanceFilter()
                        ),
                        (s = createNS("g")),
                        n.appendChild(i),
                        s.appendChild(this.layerElement),
                        (o = s),
                        n.appendChild(s)),
                      this.globalData.defs.appendChild(a))
                  : this.data.tt
                  ? (this.matteElement.appendChild(this.layerElement),
                    (o = this.matteElement),
                    (this.baseElement = this.matteElement))
                  : (this.baseElement = this.layerElement),
                  this.data.ln &&
                    this.layerElement.setAttribute("id", this.data.ln),
                  this.data.cl &&
                    this.layerElement.setAttribute("class", this.data.cl),
                  0 !== this.data.ty ||
                    this.data.hd ||
                    ((n = createNS("clipPath")),
                    (s = createNS("path")).setAttribute(
                      "d",
                      "M0,0 L" +
                        this.data.w +
                        ",0 L" +
                        this.data.w +
                        "," +
                        this.data.h +
                        " L0," +
                        this.data.h +
                        "z"
                    ),
                    (a = createElementID()),
                    n.setAttribute("id", a),
                    n.appendChild(s),
                    this.globalData.defs.appendChild(n),
                    this.checkMasks()
                      ? ((n = createNS("g")).setAttribute(
                          "clip-path",
                          "url(" + locationHref + "#" + a + ")"
                        ),
                        n.appendChild(this.layerElement),
                        (this.transformedElement = n),
                        o
                          ? o.appendChild(this.transformedElement)
                          : (this.baseElement = this.transformedElement))
                      : this.layerElement.setAttribute(
                          "clip-path",
                          "url(" + locationHref + "#" + a + ")"
                        )),
                  0 !== this.data.bm && this.setBlendMode();
              },
              renderElement: function () {
                this.finalTransform._matMdf &&
                  this.transformedElement.setAttribute(
                    "transform",
                    this.finalTransform.mat.to2dCSS()
                  ),
                  this.finalTransform._opMdf &&
                    this.transformedElement.setAttribute(
                      "opacity",
                      this.finalTransform.mProp.o.v
                    );
              },
              destroyBaseElement: function () {
                (this.layerElement = null),
                  (this.matteElement = null),
                  this.maskManager.destroy();
              },
              getBaseElement: function () {
                return this.data.hd ? null : this.baseElement;
              },
              createRenderableComponents: function () {
                (this.maskManager = new MaskElement(
                  this.data,
                  this,
                  this.globalData
                )),
                  (this.renderableEffectsManager = new SVGEffects(this));
              },
              setMatte: function (t) {
                this.matteElement &&
                  this.matteElement.setAttribute(
                    "mask",
                    "url(" + locationHref + "#" + t + ")"
                  );
              },
            }),
            (IShapeElement.prototype = {
              addShapeToModifiers: function (t) {
                for (var e = this.shapeModifiers.length, r = 0; r < e; r += 1)
                  this.shapeModifiers[r].addShape(t);
              },
              isShapeInAnimatedModifiers: function (t) {
                for (var e = this.shapeModifiers.length; 0 < e; )
                  if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1;
              },
              renderModifiers: function () {
                if (this.shapeModifiers.length) {
                  for (var t = this.shapes.length, e = 0; e < t; e += 1)
                    this.shapes[e].sh.reset();
                  for (
                    e = (t = this.shapeModifiers.length) - 1;
                    0 <= e &&
                    !this.shapeModifiers[e].processShapes(this._isFirstFrame);
                    --e
                  );
                }
              },
              searchProcessedElement: function (t) {
                for (
                  var e = this.processedElements, r = 0, i = e.length;
                  r < i;

                ) {
                  if (e[r].elem === t) return e[r].pos;
                  r += 1;
                }
                return 0;
              },
              addProcessedElement: function (t, e) {
                for (var r = this.processedElements, i = r.length; i; )
                  if (r[--i].elem === t) return void (r[i].pos = e);
                r.push(new ProcessedElement(t, e));
              },
              prepareFrame: function (t) {
                this.prepareRenderableFrame(t),
                  this.prepareProperties(t, this.isInRange);
              },
            }),
            (ITextElement.prototype.initElement = function (t, e, r) {
              (this.lettersChangedFlag = !0),
                this.initFrame(),
                this.initBaseData(t, e, r),
                (this.textProperty = new TextProperty(
                  this,
                  t.t,
                  this.dynamicProperties
                )),
                (this.textAnimator = new TextAnimatorProperty(
                  t.t,
                  this.renderType,
                  this
                )),
                this.initTransform(t, e, r),
                this.initHierarchy(),
                this.initRenderable(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                this.createContent(),
                this.hide(),
                this.textAnimator.searchProperties(this.dynamicProperties);
            }),
            (ITextElement.prototype.prepareFrame = function (t) {
              (this._mdf = !1),
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
                  (this.buildNewText(),
                  (this.textProperty._isFirstFrame = !1),
                  (this.textProperty._mdf = !1));
            }),
            (ITextElement.prototype.createPathShape = function (t, e) {
              for (var r, i = e.length, s = "", a = 0; a < i; a += 1)
                (r = e[a].ks.k), (s += buildShapeString(r, r.i.length, !0, t));
              return s;
            }),
            (ITextElement.prototype.updateDocumentData = function (t, e) {
              this.textProperty.updateDocumentData(t, e);
            }),
            (ITextElement.prototype.canResizeFont = function (t) {
              this.textProperty.canResizeFont(t);
            }),
            (ITextElement.prototype.setMinimumFontSize = function (t) {
              this.textProperty.setMinimumFontSize(t);
            }),
            (ITextElement.prototype.applyTextPropertiesToMatrix = function (
              t,
              e,
              r,
              i,
              s
            ) {
              switch (
                (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                e.translate(0, -t.ls, 0),
                t.j)
              ) {
                case 1:
                  e.translate(
                    t.justifyOffset + (t.boxWidth - t.lineWidths[r]),
                    0,
                    0
                  );
                  break;
                case 2:
                  e.translate(
                    t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2,
                    0,
                    0
                  );
              }
              e.translate(i, s, 0);
            }),
            (ITextElement.prototype.buildColor = function (t) {
              return (
                "rgb(" +
                Math.round(255 * t[0]) +
                "," +
                Math.round(255 * t[1]) +
                "," +
                Math.round(255 * t[2]) +
                ")"
              );
            }),
            (ITextElement.prototype.emptyProp = new LetterProps()),
            (ITextElement.prototype.destroy = function () {}),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              ICompElement
            ),
            (ICompElement.prototype.initElement = function (t, e, r) {
              this.initFrame(),
                this.initBaseData(t, e, r),
                this.initTransform(t, e, r),
                this.initRenderable(),
                this.initHierarchy(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
                this.hide();
            }),
            (ICompElement.prototype.prepareFrame = function (t) {
              if (
                ((this._mdf = !1),
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                this.isInRange || this.data.xt)
              ) {
                this.tm._placeholder
                  ? (this.renderedFrame = t / this.data.sr)
                  : ((r = this.tm.v) === this.data.op && (r = this.data.op - 1),
                    (this.renderedFrame = r));
                var e,
                  r = this.elements.length;
                for (
                  this.completeLayers || this.checkLayers(this.renderedFrame),
                    e = r - 1;
                  0 <= e;
                  --e
                )
                  (this.completeLayers || this.elements[e]) &&
                    (this.elements[e].prepareFrame(
                      this.renderedFrame - this.layers[e].st
                    ),
                    this.elements[e]._mdf && (this._mdf = !0));
              }
            }),
            (ICompElement.prototype.renderInnerContent = function () {
              for (var t = this.layers.length, e = 0; e < t; e += 1)
                (this.completeLayers || this.elements[e]) &&
                  this.elements[e].renderFrame();
            }),
            (ICompElement.prototype.setElements = function (t) {
              this.elements = t;
            }),
            (ICompElement.prototype.getElements = function () {
              return this.elements;
            }),
            (ICompElement.prototype.destroyElements = function () {
              for (var t = this.layers.length, e = 0; e < t; e += 1)
                this.elements[e] && this.elements[e].destroy();
            }),
            (ICompElement.prototype.destroy = function () {
              this.destroyElements(), this.destroyBaseElement();
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              IImageElement
            ),
            (IImageElement.prototype.createContent = function () {
              var t = this.globalData.getAssetsPath(this.assetData);
              (this.innerElem = createNS("image")),
                this.innerElem.setAttribute("width", this.assetData.w + "px"),
                this.innerElem.setAttribute("height", this.assetData.h + "px"),
                this.innerElem.setAttribute(
                  "preserveAspectRatio",
                  this.assetData.pr ||
                    this.globalData.renderConfig.imagePreserveAspectRatio
                ),
                this.innerElem.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "href",
                  t
                ),
                this.layerElement.appendChild(this.innerElem);
            }),
            (IImageElement.prototype.sourceRectAtTime = function () {
              return this.sourceRect;
            }),
            extendPrototype([IImageElement], ISolidElement),
            (ISolidElement.prototype.createContent = function () {
              var t = createNS("rect");
              t.setAttribute("width", this.data.sw),
                t.setAttribute("height", this.data.sh),
                t.setAttribute("fill", this.data.sc),
                this.layerElement.appendChild(t);
            }),
            (AudioElement.prototype.prepareFrame = function (t) {
              this.prepareRenderableFrame(t, !0),
                this.prepareProperties(t, !0),
                this.tm._placeholder
                  ? (this._currentTime = t / this.data.sr)
                  : ((t = this.tm.v), (this._currentTime = t));
            }),
            extendPrototype(
              [RenderableElement, BaseElement, FrameElement],
              AudioElement
            ),
            (AudioElement.prototype.renderFrame = function () {
              this.isInRange &&
                this._canPlay &&
                (this._isPlaying
                  ? (!this.audio.playing() ||
                      0.1 <
                        Math.abs(
                          this._currentTime / this.globalData.frameRate -
                            this.audio.seek()
                        )) &&
                    this.audio.seek(
                      this._currentTime / this.globalData.frameRate
                    )
                  : (this.audio.play(),
                    this.audio.seek(
                      this._currentTime / this.globalData.frameRate
                    ),
                    (this._isPlaying = !0)));
            }),
            (AudioElement.prototype.show = function () {}),
            (AudioElement.prototype.hide = function () {
              this.audio.pause(), (this._isPlaying = !1);
            }),
            (AudioElement.prototype.pause = function () {
              this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1);
            }),
            (AudioElement.prototype.resume = function () {
              this._canPlay = !0;
            }),
            (AudioElement.prototype.setRate = function (t) {
              this.audio.rate(t);
            }),
            (AudioElement.prototype.volume = function (t) {
              this.audio.volume(t);
            }),
            (AudioElement.prototype.getBaseElement = function () {
              return null;
            }),
            (AudioElement.prototype.destroy = function () {}),
            (AudioElement.prototype.sourceRectAtTime = function () {}),
            (AudioElement.prototype.initExpressions = function () {}),
            (FootageElement.prototype.prepareFrame = function () {}),
            extendPrototype(
              [RenderableElement, BaseElement, FrameElement],
              FootageElement
            ),
            (FootageElement.prototype.getBaseElement = function () {
              return null;
            }),
            (FootageElement.prototype.renderFrame = function () {}),
            (FootageElement.prototype.destroy = function () {}),
            (FootageElement.prototype.initExpressions = function () {
              this.layerInterface = FootageInterface(this);
            }),
            (FootageElement.prototype.getFootageData = function () {
              return this.footageData;
            }),
            extendPrototype(
              [SVGRenderer, ICompElement, SVGBaseElement],
              SVGCompElement
            ),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement,
              ],
              SVGTextLottieElement
            ),
            (SVGTextLottieElement.prototype.createContent = function () {
              this.data.singleShape &&
                !this.globalData.fontManager.chars &&
                (this.textContainer = createNS("text"));
            }),
            (SVGTextLottieElement.prototype.buildTextContents = function (t) {
              for (var e = 0, r = t.length, i = [], s = ""; e < r; )
                t[e] === String.fromCharCode(13) ||
                t[e] === String.fromCharCode(3)
                  ? (i.push(s), (s = ""))
                  : (s += t[e]),
                  (e += 1);
              return i.push(s), i;
            }),
            (SVGTextLottieElement.prototype.buildNewText = function () {
              var t = this.textProperty.currentData;
              (this.renderedLetters = createSizedArray(t ? t.l.length : 0)),
                t.fc
                  ? this.layerElement.setAttribute(
                      "fill",
                      this.buildColor(t.fc)
                    )
                  : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
                t.sc &&
                  (this.layerElement.setAttribute(
                    "stroke",
                    this.buildColor(t.sc)
                  ),
                  this.layerElement.setAttribute("stroke-width", t.sw)),
                this.layerElement.setAttribute("font-size", t.finalSize);
              var e,
                r,
                i = this.globalData.fontManager.getFontByName(t.f);
              i.fClass
                ? this.layerElement.setAttribute("class", i.fClass)
                : (this.layerElement.setAttribute("font-family", i.fFamily),
                  (e = t.fWeight),
                  (r = t.fStyle),
                  this.layerElement.setAttribute("font-style", r),
                  this.layerElement.setAttribute("font-weight", e)),
                this.layerElement.setAttribute("aria-label", t.t);
              var s,
                a = t.l || [],
                n = !!this.globalData.fontManager.chars;
              P = a.length;
              var o = this.mHelper,
                h = "",
                l = this.data.singleShape,
                p = 0,
                m = 0,
                f = !0,
                c = 0.001 * t.tr * t.finalSize;
              if (!l || n || t.sz) {
                for (var d, u = this.textSpans.length, y = 0; y < P; y += 1)
                  (n && l && 0 !== y) ||
                    ((s =
                      y < u
                        ? this.textSpans[y]
                        : createNS(n ? "path" : "text")),
                    u <= y &&
                      (s.setAttribute("stroke-linecap", "butt"),
                      s.setAttribute("stroke-linejoin", "round"),
                      s.setAttribute("stroke-miterlimit", "4"),
                      (this.textSpans[y] = s),
                      this.layerElement.appendChild(s)),
                    (s.style.display = "inherit")),
                    o.reset(),
                    o.scale(t.finalSize / 100, t.finalSize / 100),
                    l &&
                      (a[y].n &&
                        ((p = -c),
                        (m += t.yOffset),
                        (m += f ? 1 : 0),
                        (f = !1)),
                      this.applyTextPropertiesToMatrix(t, o, a[y].line, p, m),
                      (p += a[y].l || 0),
                      (p += c)),
                    n
                      ? ((d = (d =
                          ((d = this.globalData.fontManager.getCharData(
                            t.finalText[y],
                            i.fStyle,
                            this.globalData.fontManager.getFontByName(t.f)
                              .fFamily
                          )) &&
                            d.data) ||
                          {}).shapes
                          ? d.shapes[0].it
                          : []),
                        l
                          ? (h += this.createPathShape(o, d))
                          : s.setAttribute("d", this.createPathShape(o, d)))
                      : (l &&
                          s.setAttribute(
                            "transform",
                            "translate(" + o.props[12] + "," + o.props[13] + ")"
                          ),
                        (s.textContent = a[y].val),
                        s.setAttributeNS(
                          "http://www.w3.org/XML/1998/namespace",
                          "xml:space",
                          "preserve"
                        ));
                l && s && s.setAttribute("d", h);
              } else {
                var g = this.textContainer,
                  v = "start";
                switch (t.j) {
                  case 1:
                    v = "end";
                    break;
                  case 2:
                    v = "middle";
                    break;
                  default:
                    v = "start";
                }
                g.setAttribute("text-anchor", v),
                  g.setAttribute("letter-spacing", c);
                var b = this.buildTextContents(t.finalText),
                  P = b.length,
                  m = t.ps ? t.ps[1] + t.ascent : 0;
                for (y = 0; y < P; y += 1)
                  ((s = this.textSpans[y] || createNS("tspan")).textContent =
                    b[y]),
                    s.setAttribute("x", 0),
                    s.setAttribute("y", m),
                    (s.style.display = "inherit"),
                    g.appendChild(s),
                    (this.textSpans[y] = s),
                    (m += t.finalLineHeight);
                this.layerElement.appendChild(g);
              }
              for (; y < this.textSpans.length; )
                (this.textSpans[y].style.display = "none"), (y += 1);
              this._sizeChanged = !0;
            }),
            (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
              var t;
              return (
                this.prepareFrame(this.comp.renderedFrame - this.data.st),
                this.renderInnerContent(),
                this._sizeChanged &&
                  ((this._sizeChanged = !1),
                  (t = this.layerElement.getBBox()),
                  (this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height,
                  })),
                this.bbox
              );
            }),
            (SVGTextLottieElement.prototype.renderInnerContent = function () {
              if (
                !this.data.singleShape &&
                (this.textAnimator.getMeasures(
                  this.textProperty.currentData,
                  this.lettersChangedFlag
                ),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
              ) {
                this._sizeChanged = !0;
                for (
                  var t,
                    e,
                    r = this.textAnimator.renderedLetters,
                    i = this.textProperty.currentData.l,
                    s = i.length,
                    a = 0;
                  a < s;
                  a += 1
                )
                  i[a].n ||
                    ((t = r[a]),
                    (e = this.textSpans[a]),
                    t._mdf.m && e.setAttribute("transform", t.m),
                    t._mdf.o && e.setAttribute("opacity", t.o),
                    t._mdf.sw && e.setAttribute("stroke-width", t.sw),
                    t._mdf.sc && e.setAttribute("stroke", t.sc),
                    t._mdf.fc && e.setAttribute("fill", t.fc));
              }
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              SVGShapeElement
            ),
            (SVGShapeElement.prototype.initSecondaryElement = function () {}),
            (SVGShapeElement.prototype.identityMatrix = new Matrix()),
            (SVGShapeElement.prototype.buildExpressionInterface =
              function () {}),
            (SVGShapeElement.prototype.createContent = function () {
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                this.layerElement,
                0,
                [],
                !0
              ),
                this.filterUniqueShapes();
            }),
            (SVGShapeElement.prototype.filterUniqueShapes = function () {
              for (
                var t,
                  e,
                  r,
                  i = this.shapes.length,
                  s = this.stylesList.length,
                  a = [],
                  n = !1,
                  o = 0;
                o < s;
                o += 1
              ) {
                for (
                  r = this.stylesList[o], n = !1, t = a.length = 0;
                  t < i;
                  t += 1
                )
                  -1 !== (e = this.shapes[t]).styles.indexOf(r) &&
                    (a.push(e), (n = e._isAnimated || n));
                1 < a.length && n && this.setShapesAsAnimated(a);
              }
            }),
            (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
              for (var e = t.length, r = 0; r < e; r += 1) t[r].setAsAnimated();
            }),
            (SVGShapeElement.prototype.createStyleElement = function (t, e) {
              var r,
                i = new SVGStyleData(t, e),
                e = i.pElem;
              return (
                "st" === t.ty
                  ? (r = new SVGStrokeStyleData(this, t, i))
                  : "fl" === t.ty
                  ? (r = new SVGFillStyleData(this, t, i))
                  : ("gf" !== t.ty && "gs" !== t.ty) ||
                    ((r = new (
                      "gf" === t.ty
                        ? SVGGradientFillStyleData
                        : SVGGradientStrokeStyleData
                    )(this, t, i)),
                    this.globalData.defs.appendChild(r.gf),
                    r.maskId &&
                      (this.globalData.defs.appendChild(r.ms),
                      this.globalData.defs.appendChild(r.of),
                      e.setAttribute(
                        "mask",
                        "url(" + locationHref + "#" + r.maskId + ")"
                      ))),
                ("st" !== t.ty && "gs" !== t.ty) ||
                  (e.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                  e.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                  e.setAttribute("fill-opacity", "0"),
                  1 === t.lj && e.setAttribute("stroke-miterlimit", t.ml)),
                2 === t.r && e.setAttribute("fill-rule", "evenodd"),
                t.ln && e.setAttribute("id", t.ln),
                t.cl && e.setAttribute("class", t.cl),
                t.bm && (e.style["mix-blend-mode"] = getBlendMode(t.bm)),
                this.stylesList.push(i),
                this.addToAnimatedContents(t, r),
                r
              );
            }),
            (SVGShapeElement.prototype.createGroupElement = function (t) {
              var e = new ShapeGroupData();
              return (
                t.ln && e.gr.setAttribute("id", t.ln),
                t.cl && e.gr.setAttribute("class", t.cl),
                t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
                e
              );
            }),
            (SVGShapeElement.prototype.createTransformElement = function (
              t,
              e
            ) {
              var r = TransformPropertyFactory.getTransformProperty(
                  this,
                  t,
                  this
                ),
                e = new SVGTransformData(r, r.o, e);
              return this.addToAnimatedContents(t, e), e;
            }),
            (SVGShapeElement.prototype.createShapeElement = function (t, e, r) {
              var i = 4;
              "rc" === t.ty
                ? (i = 5)
                : "el" === t.ty
                ? (i = 6)
                : "sr" === t.ty && (i = 7);
              i = new SVGShapeData(
                e,
                r,
                ShapePropertyFactory.getShapeProp(this, t, i, this)
              );
              return (
                this.shapes.push(i),
                this.addShapeToModifiers(i),
                this.addToAnimatedContents(t, i),
                i
              );
            }),
            (SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
              for (var r = 0, i = this.animatedContents.length; r < i; ) {
                if (this.animatedContents[r].element === e) return;
                r += 1;
              }
              this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t,
              });
            }),
            (SVGShapeElement.prototype.setElementStyles = function (t) {
              for (
                var e = t.styles, r = this.stylesList.length, i = 0;
                i < r;
                i += 1
              )
                this.stylesList[i].closed || e.push(this.stylesList[i]);
            }),
            (SVGShapeElement.prototype.reloadShapes = function () {
              this._isFirstFrame = !0;
              for (var t = this.itemsData.length, e = 0; e < t; e += 1)
                this.prevViewData[e] = this.itemsData[e];
              for (
                this.searchShapes(
                  this.shapesData,
                  this.itemsData,
                  this.prevViewData,
                  this.layerElement,
                  0,
                  [],
                  !0
                ),
                  this.filterUniqueShapes(),
                  t = this.dynamicProperties.length,
                  e = 0;
                e < t;
                e += 1
              )
                this.dynamicProperties[e].getValue();
              this.renderModifiers();
            }),
            (SVGShapeElement.prototype.searchShapes = function (
              t,
              e,
              r,
              i,
              s,
              a,
              n
            ) {
              for (
                var o,
                  h,
                  l,
                  p,
                  m,
                  f = [].concat(a),
                  c = t.length - 1,
                  d = [],
                  u = [],
                  y = c;
                0 <= y;
                --y
              ) {
                if (
                  ((m = this.searchProcessedElement(t[y]))
                    ? (e[y] = r[m - 1])
                    : (t[y]._render = n),
                  "fl" === t[y].ty ||
                    "st" === t[y].ty ||
                    "gf" === t[y].ty ||
                    "gs" === t[y].ty)
                )
                  m
                    ? (e[y].style.closed = !1)
                    : (e[y] = this.createStyleElement(t[y], s)),
                    t[y]._render && i.appendChild(e[y].style.pElem),
                    d.push(e[y].style);
                else if ("gr" === t[y].ty) {
                  if (m)
                    for (h = e[y].it.length, o = 0; o < h; o += 1)
                      e[y].prevViewData[o] = e[y].it[o];
                  else e[y] = this.createGroupElement(t[y]);
                  this.searchShapes(
                    t[y].it,
                    e[y].it,
                    e[y].prevViewData,
                    e[y].gr,
                    s + 1,
                    f,
                    n
                  ),
                    t[y]._render && i.appendChild(e[y].gr);
                } else
                  "tr" === t[y].ty
                    ? (m || (e[y] = this.createTransformElement(t[y], i)),
                      (l = e[y].transform),
                      f.push(l))
                    : "sh" === t[y].ty ||
                      "rc" === t[y].ty ||
                      "el" === t[y].ty ||
                      "sr" === t[y].ty
                    ? (m || (e[y] = this.createShapeElement(t[y], f, s)),
                      this.setElementStyles(e[y]))
                    : "tm" === t[y].ty ||
                      "rd" === t[y].ty ||
                      "ms" === t[y].ty ||
                      "pb" === t[y].ty
                    ? (m
                        ? ((p = e[y]).closed = !1)
                        : ((p = ShapeModifiers.getModifier(t[y].ty)).init(
                            this,
                            t[y]
                          ),
                          (e[y] = p),
                          this.shapeModifiers.push(p)),
                      u.push(p))
                    : "rp" === t[y].ty &&
                      (m
                        ? ((p = e[y]).closed = !0)
                        : ((p = ShapeModifiers.getModifier(t[y].ty)),
                          (e[y] = p).init(this, t, y, e),
                          this.shapeModifiers.push(p),
                          (n = !1)),
                      u.push(p));
                this.addProcessedElement(t[y], y + 1);
              }
              for (c = d.length, y = 0; y < c; y += 1) d[y].closed = !0;
              for (c = u.length, y = 0; y < c; y += 1) u[y].closed = !0;
            }),
            (SVGShapeElement.prototype.renderInnerContent = function () {
              this.renderModifiers();
              for (var t = this.stylesList.length, e = 0; e < t; e += 1)
                this.stylesList[e].reset();
              for (this.renderShape(), e = 0; e < t; e += 1)
                (this.stylesList[e]._mdf || this._isFirstFrame) &&
                  (this.stylesList[e].msElem &&
                    (this.stylesList[e].msElem.setAttribute(
                      "d",
                      this.stylesList[e].d
                    ),
                    (this.stylesList[e].d = "M0 0" + this.stylesList[e].d)),
                  this.stylesList[e].pElem.setAttribute(
                    "d",
                    this.stylesList[e].d || "M0 0"
                  ));
            }),
            (SVGShapeElement.prototype.renderShape = function () {
              for (
                var t, e = this.animatedContents.length, r = 0;
                r < e;
                r += 1
              )
                (t = this.animatedContents[r]),
                  (this._isFirstFrame || t.element._isAnimated) &&
                    !0 !== t.data &&
                    t.fn(t.data, t.element, this._isFirstFrame);
            }),
            (SVGShapeElement.prototype.destroy = function () {
              this.destroyBaseElement(),
                (this.shapesData = null),
                (this.itemsData = null);
            }),
            (SVGTintFilter.prototype.renderFrame = function (t) {
              var e, r;
              (t || this.filterManager._mdf) &&
                ((e = this.filterManager.effectElements[0].p.v),
                (r = this.filterManager.effectElements[1].p.v),
                (t = this.filterManager.effectElements[2].p.v / 100),
                this.matrixFilter.setAttribute(
                  "values",
                  r[0] -
                    e[0] +
                    " 0 0 0 " +
                    e[0] +
                    " " +
                    (r[1] - e[1]) +
                    " 0 0 0 " +
                    e[1] +
                    " " +
                    (r[2] - e[2]) +
                    " 0 0 0 " +
                    e[2] +
                    " 0 0 0 " +
                    t +
                    " 0"
                ));
            }),
            (SVGFillFilter.prototype.renderFrame = function (t) {
              var e;
              (t || this.filterManager._mdf) &&
                ((e = this.filterManager.effectElements[2].p.v),
                (t = this.filterManager.effectElements[6].p.v),
                this.matrixFilter.setAttribute(
                  "values",
                  "0 0 0 0 " +
                    e[0] +
                    " 0 0 0 0 " +
                    e[1] +
                    " 0 0 0 0 " +
                    e[2] +
                    " 0 0 0 " +
                    t +
                    " 0"
                ));
            }),
            (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
              var e;
              (t || this.filterManager._mdf) &&
                ((e = 0.3 * this.filterManager.effectElements[0].p.v),
                (t = this.filterManager.effectElements[1].p.v),
                this.feGaussianBlur.setAttribute(
                  "stdDeviation",
                  (3 == t ? 0 : e) + " " + (2 == t ? 0 : e)
                ),
                (e =
                  1 == this.filterManager.effectElements[2].p.v
                    ? "wrap"
                    : "duplicate"),
                this.feGaussianBlur.setAttribute("edgeMode", e));
            }),
            (SVGStrokeEffect.prototype.initialize = function () {
              var t,
                e,
                r,
                i,
                s =
                  this.elem.layerElement.children ||
                  this.elem.layerElement.childNodes;
              for (
                1 === this.filterManager.effectElements[1].p.v
                  ? ((i = this.elem.maskManager.masksProperties.length),
                    (r = 0))
                  : (i =
                      1 + (r = this.filterManager.effectElements[0].p.v - 1)),
                  (e = createNS("g")).setAttribute("fill", "none"),
                  e.setAttribute("stroke-linecap", "round"),
                  e.setAttribute("stroke-dashoffset", 1);
                r < i;
                r += 1
              )
                (t = createNS("path")),
                  e.appendChild(t),
                  this.paths.push({ p: t, m: r });
              if (3 === this.filterManager.effectElements[10].p.v) {
                var a = createNS("mask"),
                  n = createElementID();
                a.setAttribute("id", n),
                  a.setAttribute("mask-type", "alpha"),
                  a.appendChild(e),
                  this.elem.globalData.defs.appendChild(a);
                var o = createNS("g");
                for (
                  o.setAttribute("mask", "url(" + locationHref + "#" + n + ")");
                  s[0];

                )
                  o.appendChild(s[0]);
                this.elem.layerElement.appendChild(o),
                  (this.masker = a),
                  e.setAttribute("stroke", "#fff");
              } else if (
                1 === this.filterManager.effectElements[10].p.v ||
                2 === this.filterManager.effectElements[10].p.v
              ) {
                if (2 === this.filterManager.effectElements[10].p.v)
                  for (
                    s =
                      this.elem.layerElement.children ||
                      this.elem.layerElement.childNodes;
                    s.length;

                  )
                    this.elem.layerElement.removeChild(s[0]);
                this.elem.layerElement.appendChild(e),
                  this.elem.layerElement.removeAttribute("mask"),
                  e.setAttribute("stroke", "#fff");
              }
              (this.initialized = !0), (this.pathMasker = e);
            }),
            (SVGStrokeEffect.prototype.renderFrame = function (t) {
              this.initialized || this.initialize();
              for (var e, r, i = this.paths.length, s = 0; s < i; s += 1)
                if (
                  -1 !== this.paths[s].m &&
                  ((l = this.elem.maskManager.viewData[this.paths[s].m]),
                  (e = this.paths[s].p),
                  (t || this.filterManager._mdf || l.prop._mdf) &&
                    e.setAttribute("d", l.lastPath),
                  t ||
                    this.filterManager.effectElements[9].p._mdf ||
                    this.filterManager.effectElements[4].p._mdf ||
                    this.filterManager.effectElements[7].p._mdf ||
                    this.filterManager.effectElements[8].p._mdf ||
                    l.prop._mdf)
                ) {
                  if (
                    0 !== this.filterManager.effectElements[7].p.v ||
                    100 !== this.filterManager.effectElements[8].p.v
                  ) {
                    for (
                      var a =
                          0.01 *
                          Math.min(
                            this.filterManager.effectElements[7].p.v,
                            this.filterManager.effectElements[8].p.v
                          ),
                        n =
                          0.01 *
                          Math.max(
                            this.filterManager.effectElements[7].p.v,
                            this.filterManager.effectElements[8].p.v
                          ),
                        o = e.getTotalLength(),
                        h = "0 0 0 " + o * a + " ",
                        l =
                          1 +
                          2 *
                            this.filterManager.effectElements[4].p.v *
                            this.filterManager.effectElements[9].p.v *
                            0.01,
                        p = Math.floor((o * (n - a)) / l),
                        m = 0;
                      m < p;
                      m += 1
                    )
                      h +=
                        "1 " +
                        2 *
                          this.filterManager.effectElements[4].p.v *
                          this.filterManager.effectElements[9].p.v *
                          0.01 +
                        " ";
                    h += "0 " + 10 * o + " 0 0";
                  } else
                    h =
                      "1 " +
                      2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v *
                        0.01;
                  e.setAttribute("stroke-dasharray", h);
                }
              (t || this.filterManager.effectElements[4].p._mdf) &&
                this.pathMasker.setAttribute(
                  "stroke-width",
                  2 * this.filterManager.effectElements[4].p.v
                ),
                (t || this.filterManager.effectElements[6].p._mdf) &&
                  this.pathMasker.setAttribute(
                    "opacity",
                    this.filterManager.effectElements[6].p.v
                  ),
                (1 !== this.filterManager.effectElements[10].p.v &&
                  2 !== this.filterManager.effectElements[10].p.v) ||
                  (!t && !this.filterManager.effectElements[3].p._mdf) ||
                  ((r = this.filterManager.effectElements[3].p.v),
                  this.pathMasker.setAttribute(
                    "stroke",
                    "rgb(" +
                      bmFloor(255 * r[0]) +
                      "," +
                      bmFloor(255 * r[1]) +
                      "," +
                      bmFloor(255 * r[2]) +
                      ")"
                  ));
            }),
            (SVGTritoneFilter.prototype.renderFrame = function (t) {
              var e, r, i, s;
              (t || this.filterManager._mdf) &&
                ((s = this.filterManager.effectElements[0].p.v),
                (e = this.filterManager.effectElements[1].p.v),
                (i =
                  (r = this.filterManager.effectElements[2].p.v)[0] +
                  " " +
                  e[0] +
                  " " +
                  s[0]),
                (t = r[1] + " " + e[1] + " " + s[1]),
                (s = r[2] + " " + e[2] + " " + s[2]),
                this.feFuncR.setAttribute("tableValues", i),
                this.feFuncG.setAttribute("tableValues", t),
                this.feFuncB.setAttribute("tableValues", s));
            }),
            (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
              t = createNS(t);
              return t.setAttribute("type", "table"), e.appendChild(t), t;
            }),
            (SVGProLevelsFilter.prototype.getTableValue = function (
              t,
              e,
              r,
              i,
              s
            ) {
              for (
                var a,
                  n = 0,
                  o = Math.min(t, e),
                  h = Math.max(t, e),
                  l = Array.call(null, { length: 256 }),
                  p = 0,
                  m = s - i,
                  f = e - t;
                n <= 256;

              )
                (a =
                  (a = n / 256) <= o
                    ? f < 0
                      ? s
                      : i
                    : h <= a
                    ? f < 0
                      ? i
                      : s
                    : i + m * Math.pow((a - t) / f, 1 / r)),
                  (l[p] = a),
                  (p += 1),
                  (n += 256 / 255);
              return l.join(" ");
            }),
            (SVGProLevelsFilter.prototype.renderFrame = function (t) {
              var e, r;
              (t || this.filterManager._mdf) &&
                ((r = this.filterManager.effectElements),
                this.feFuncRComposed &&
                  (t ||
                    r[3].p._mdf ||
                    r[4].p._mdf ||
                    r[5].p._mdf ||
                    r[6].p._mdf ||
                    r[7].p._mdf) &&
                  ((e = this.getTableValue(
                    r[3].p.v,
                    r[4].p.v,
                    r[5].p.v,
                    r[6].p.v,
                    r[7].p.v
                  )),
                  this.feFuncRComposed.setAttribute("tableValues", e),
                  this.feFuncGComposed.setAttribute("tableValues", e),
                  this.feFuncBComposed.setAttribute("tableValues", e)),
                this.feFuncR &&
                  (t ||
                    r[10].p._mdf ||
                    r[11].p._mdf ||
                    r[12].p._mdf ||
                    r[13].p._mdf ||
                    r[14].p._mdf) &&
                  ((e = this.getTableValue(
                    r[10].p.v,
                    r[11].p.v,
                    r[12].p.v,
                    r[13].p.v,
                    r[14].p.v
                  )),
                  this.feFuncR.setAttribute("tableValues", e)),
                this.feFuncG &&
                  (t ||
                    r[17].p._mdf ||
                    r[18].p._mdf ||
                    r[19].p._mdf ||
                    r[20].p._mdf ||
                    r[21].p._mdf) &&
                  ((e = this.getTableValue(
                    r[17].p.v,
                    r[18].p.v,
                    r[19].p.v,
                    r[20].p.v,
                    r[21].p.v
                  )),
                  this.feFuncG.setAttribute("tableValues", e)),
                this.feFuncB &&
                  (t ||
                    r[24].p._mdf ||
                    r[25].p._mdf ||
                    r[26].p._mdf ||
                    r[27].p._mdf ||
                    r[28].p._mdf) &&
                  ((e = this.getTableValue(
                    r[24].p.v,
                    r[25].p.v,
                    r[26].p.v,
                    r[27].p.v,
                    r[28].p.v
                  )),
                  this.feFuncB.setAttribute("tableValues", e)),
                this.feFuncA &&
                  (t ||
                    r[31].p._mdf ||
                    r[32].p._mdf ||
                    r[33].p._mdf ||
                    r[34].p._mdf ||
                    r[35].p._mdf) &&
                  ((e = this.getTableValue(
                    r[31].p.v,
                    r[32].p.v,
                    r[33].p.v,
                    r[34].p.v,
                    r[35].p.v
                  )),
                  this.feFuncA.setAttribute("tableValues", e)));
            }),
            (SVGDropShadowEffect.prototype.renderFrame = function (t) {
              var e, r;
              (t || this.filterManager._mdf) &&
                ((t || this.filterManager.effectElements[4].p._mdf) &&
                  this.feGaussianBlur.setAttribute(
                    "stdDeviation",
                    this.filterManager.effectElements[4].p.v / 4
                  ),
                (t || this.filterManager.effectElements[0].p._mdf) &&
                  ((r = this.filterManager.effectElements[0].p.v),
                  this.feFlood.setAttribute(
                    "flood-color",
                    rgbToHex(
                      Math.round(255 * r[0]),
                      Math.round(255 * r[1]),
                      Math.round(255 * r[2])
                    )
                  )),
                (t || this.filterManager.effectElements[1].p._mdf) &&
                  this.feFlood.setAttribute(
                    "flood-opacity",
                    this.filterManager.effectElements[1].p.v / 255
                  ),
                (t ||
                  this.filterManager.effectElements[2].p._mdf ||
                  this.filterManager.effectElements[3].p._mdf) &&
                  ((e = this.filterManager.effectElements[3].p.v),
                  (r =
                    (this.filterManager.effectElements[2].p.v - 90) *
                    degToRads),
                  (t = e * Math.cos(r)),
                  (r = e * Math.sin(r)),
                  this.feOffset.setAttribute("dx", t),
                  this.feOffset.setAttribute("dy", r)));
            });
          var _svgMatteSymbols = [];
          function SVGMatte3Effect(t, e, r) {
            (this.initialized = !1),
              (this.filterManager = e),
              (this.filterElem = t),
              ((this.elem = r).matteElement = createNS("g")),
              r.matteElement.appendChild(r.layerElement),
              r.matteElement.appendChild(r.transformedElement),
              (r.baseElement = r.matteElement);
          }
          function SVGEffects(t) {
            var e,
              r,
              i = t.data.ef ? t.data.ef.length : 0,
              s = createElementID(),
              a = filtersFactory.createFilter(s, !0),
              n = 0;
            for (this.filters = [], e = 0; e < i; e += 1)
              (r = null),
                20 === t.data.ef[e].ty
                  ? ((n += 1),
                    (r = new SVGTintFilter(
                      a,
                      t.effectsManager.effectElements[e]
                    )))
                  : 21 === t.data.ef[e].ty
                  ? ((n += 1),
                    (r = new SVGFillFilter(
                      a,
                      t.effectsManager.effectElements[e]
                    )))
                  : 22 === t.data.ef[e].ty
                  ? (r = new SVGStrokeEffect(
                      t,
                      t.effectsManager.effectElements[e]
                    ))
                  : 23 === t.data.ef[e].ty
                  ? ((n += 1),
                    (r = new SVGTritoneFilter(
                      a,
                      t.effectsManager.effectElements[e]
                    )))
                  : 24 === t.data.ef[e].ty
                  ? ((n += 1),
                    (r = new SVGProLevelsFilter(
                      a,
                      t.effectsManager.effectElements[e]
                    )))
                  : 25 === t.data.ef[e].ty
                  ? ((n += 1),
                    (r = new SVGDropShadowEffect(
                      a,
                      t.effectsManager.effectElements[e]
                    )))
                  : 28 === t.data.ef[e].ty
                  ? (r = new SVGMatte3Effect(
                      a,
                      t.effectsManager.effectElements[e],
                      t
                    ))
                  : 29 === t.data.ef[e].ty &&
                    ((n += 1),
                    (r = new SVGGaussianBlurEffect(
                      a,
                      t.effectsManager.effectElements[e]
                    ))),
                r && this.filters.push(r);
            n &&
              (t.globalData.defs.appendChild(a),
              t.layerElement.setAttribute(
                "filter",
                "url(" + locationHref + "#" + s + ")"
              )),
              this.filters.length && t.addRenderableComponent(this);
          }
          function CVContextData() {
            var t;
            for (
              this.saved = [],
                this.cArrPos = 0,
                this.cTr = new Matrix(),
                this.cO = 1,
                this.savedOp = createTypedArray("float32", 15),
                t = 0;
              t < 15;
              t += 1
            )
              this.saved[t] = createTypedArray("float32", 16);
            this._length = 15;
          }
          function CVBaseElement() {}
          function CVImageElement(t, e, r) {
            (this.assetData = e.getAssetData(t.refId)),
              (this.img = e.imageLoader.getAsset(this.assetData)),
              this.initElement(t, e, r);
          }
          function CVCompElement(t, e, r) {
            (this.completeLayers = !1),
              (this.layers = t.layers),
              (this.pendingElements = []),
              (this.elements = createSizedArray(this.layers.length)),
              this.initElement(t, e, r),
              (this.tm = t.tm
                ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                : { _placeholder: !0 });
          }
          function CVMaskElement(t, e) {
            (this.data = t),
              (this.element = e),
              (this.masksProperties = this.data.masksProperties || []),
              (this.viewData = createSizedArray(this.masksProperties.length));
            for (
              var r = this.masksProperties.length, i = !1, s = 0;
              s < r;
              s += 1
            )
              "n" !== this.masksProperties[s].mode && (i = !0),
                (this.viewData[s] = ShapePropertyFactory.getShapeProp(
                  this.element,
                  this.masksProperties[s],
                  3
                ));
            (this.hasMasks = i) && this.element.addRenderableComponent(this);
          }
          function CVShapeElement(t, e, r) {
            (this.shapes = []),
              (this.shapesData = t.shapes),
              (this.stylesList = []),
              (this.itemsData = []),
              (this.prevViewData = []),
              (this.shapeModifiers = []),
              (this.processedElements = []),
              (this.transformsManager = new ShapeTransformManager()),
              this.initElement(t, e, r);
          }
          function CVSolidElement(t, e, r) {
            this.initElement(t, e, r);
          }
          function CVTextElement(t, e, r) {
            (this.textSpans = []),
              (this.yOffset = 0),
              (this.fillColorAnim = !1),
              (this.strokeColorAnim = !1),
              (this.strokeWidthAnim = !1),
              (this.stroke = !1),
              (this.fill = !1),
              (this.justifyOffset = 0),
              (this.currentRender = null),
              (this.renderType = "canvas"),
              (this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: "",
              }),
              this.initElement(t, e, r);
          }
          function CVEffects() {}
          function HBaseElement() {}
          function HSolidElement(t, e, r) {
            this.initElement(t, e, r);
          }
          function HCompElement(t, e, r) {
            (this.layers = t.layers),
              (this.supports3d = !t.hasMask),
              (this.completeLayers = !1),
              (this.pendingElements = []),
              (this.elements = this.layers
                ? createSizedArray(this.layers.length)
                : []),
              this.initElement(t, e, r),
              (this.tm = t.tm
                ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
                : { _placeholder: !0 });
          }
          function HShapeElement(t, e, r) {
            (this.shapes = []),
              (this.shapesData = t.shapes),
              (this.stylesList = []),
              (this.shapeModifiers = []),
              (this.itemsData = []),
              (this.processedElements = []),
              (this.animatedContents = []),
              (this.shapesContainer = createNS("g")),
              this.initElement(t, e, r),
              (this.prevViewData = []),
              (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
          }
          function HTextElement(t, e, r) {
            (this.textSpans = []),
              (this.textPaths = []),
              (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
              (this.renderType = "svg"),
              (this.isMasked = !1),
              this.initElement(t, e, r);
          }
          function HImageElement(t, e, r) {
            (this.assetData = e.getAssetData(t.refId)),
              this.initElement(t, e, r);
          }
          function HCameraElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
            r = PropertyFactory.getProp;
            if (
              ((this.pe = r(this, t.pe, 0, 0, this)),
              t.ks.p.s
                ? ((this.px = r(this, t.ks.p.x, 1, 0, this)),
                  (this.py = r(this, t.ks.p.y, 1, 0, this)),
                  (this.pz = r(this, t.ks.p.z, 1, 0, this)))
                : (this.p = r(this, t.ks.p, 1, 0, this)),
              t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)),
              t.ks.or.k.length && t.ks.or.k[0].to)
            )
              for (var i = t.ks.or.k.length, s = 0; s < i; s += 1)
                (t.ks.or.k[s].to = null), (t.ks.or.k[s].ti = null);
            (this.or = r(this, t.ks.or, 1, degToRads, this)),
              (this.or.sh = !0),
              (this.rx = r(this, t.ks.rx, 0, degToRads, this)),
              (this.ry = r(this, t.ks.ry, 0, degToRads, this)),
              (this.rz = r(this, t.ks.rz, 0, degToRads, this)),
              (this.mat = new Matrix()),
              (this._prevMat = new Matrix()),
              (this._isFirstFrame = !0),
              (this.finalTransform = { mProp: this });
          }
          function HEffects() {}
          (SVGMatte3Effect.prototype.findSymbol = function (t) {
            for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
              if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
              e += 1;
            }
            return null;
          }),
            (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
              var r = t.layerElement.parentNode;
              if (r) {
                for (
                  var i, s = r.children, a = 0, n = s.length;
                  a < n && s[a] !== t.layerElement;

                )
                  a += 1;
                a <= n - 2 && (i = s[a + 1]);
                var o = createNS("use");
                o.setAttribute("href", "#" + e),
                  i ? r.insertBefore(o, i) : r.appendChild(o);
              }
            }),
            (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
              var r, i, s, a;
              this.findSymbol(e) ||
                ((r = createElementID()),
                (i = createNS("mask")).setAttribute("id", e.layerId),
                i.setAttribute("mask-type", "alpha"),
                _svgMatteSymbols.push(e),
                (s = t.globalData.defs).appendChild(i),
                (a = createNS("symbol")).setAttribute("id", r),
                this.replaceInParent(e, r),
                a.appendChild(e.layerElement),
                s.appendChild(a),
                (a = createNS("use")).setAttribute("href", "#" + r),
                i.appendChild(a),
                (e.data.hd = !1),
                e.show()),
                t.setMatte(e.layerId);
            }),
            (SVGMatte3Effect.prototype.initialize = function () {
              for (
                var t = this.filterManager.effectElements[0].p.v,
                  e = this.elem.comp.elements,
                  r = 0,
                  i = e.length;
                r < i;

              )
                e[r] &&
                  e[r].data.ind === t &&
                  this.setElementAsMask(this.elem, e[r]),
                  (r += 1);
              this.initialized = !0;
            }),
            (SVGMatte3Effect.prototype.renderFrame = function () {
              this.initialized || this.initialize();
            }),
            (SVGEffects.prototype.renderFrame = function (t) {
              for (var e = this.filters.length, r = 0; r < e; r += 1)
                this.filters[r].renderFrame(t);
            }),
            (CVContextData.prototype.duplicate = function () {
              var t = 2 * this._length,
                e = this.savedOp;
              (this.savedOp = createTypedArray("float32", t)),
                this.savedOp.set(e);
              for (var r = 0, r = this._length; r < t; r += 1)
                this.saved[r] = createTypedArray("float32", 16);
              this._length = t;
            }),
            (CVContextData.prototype.reset = function () {
              (this.cArrPos = 0), this.cTr.reset(), (this.cO = 1);
            }),
            (CVBaseElement.prototype = {
              createElements: function () {},
              initRendererElement: function () {},
              createContainerElements: function () {
                (this.canvasContext = this.globalData.canvasContext),
                  (this.renderableEffectsManager = new CVEffects(this));
              },
              createContent: function () {},
              setBlendMode: function () {
                var t,
                  e = this.globalData;
                e.blendMode !== this.data.bm &&
                  ((e.blendMode = this.data.bm),
                  (t = getBlendMode(this.data.bm)),
                  (e.canvasContext.globalCompositeOperation = t));
              },
              createRenderableComponents: function () {
                this.maskManager = new CVMaskElement(this.data, this);
              },
              hideElement: function () {
                this.hidden ||
                  (this.isInRange && !this.isTransparent) ||
                  (this.hidden = !0);
              },
              showElement: function () {
                this.isInRange &&
                  !this.isTransparent &&
                  ((this.hidden = !1),
                  (this._isFirstFrame = !0),
                  (this.maskManager._isFirstFrame = !0));
              },
              renderFrame: function () {
                var t;
                this.hidden ||
                  this.data.hd ||
                  (this.renderTransform(),
                  this.renderRenderable(),
                  this.setBlendMode(),
                  (t = 0 === this.data.ty),
                  this.globalData.renderer.save(t),
                  this.globalData.renderer.ctxTransform(
                    this.finalTransform.mat.props
                  ),
                  this.globalData.renderer.ctxOpacity(
                    this.finalTransform.mProp.o.v
                  ),
                  this.renderInnerContent(),
                  this.globalData.renderer.restore(t),
                  this.maskManager.hasMasks &&
                    this.globalData.renderer.restore(!0),
                  this._isFirstFrame && (this._isFirstFrame = !1));
              },
              destroy: function () {
                (this.canvasContext = null),
                  (this.data = null),
                  (this.globalData = null),
                  this.maskManager.destroy();
              },
              mHelper: new Matrix(),
            }),
            (CVBaseElement.prototype.hide =
              CVBaseElement.prototype.hideElement),
            (CVBaseElement.prototype.show =
              CVBaseElement.prototype.showElement),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              CVImageElement
            ),
            (CVImageElement.prototype.initElement =
              SVGShapeElement.prototype.initElement),
            (CVImageElement.prototype.prepareFrame =
              IImageElement.prototype.prepareFrame),
            (CVImageElement.prototype.createContent = function () {
              var t, e, r, i, s, a, n, o, h;
              !this.img.width ||
                (this.assetData.w === this.img.width &&
                  this.assetData.h === this.img.height) ||
                (((t = createTag("canvas")).width = this.assetData.w),
                (t.height = this.assetData.h),
                (i = t.getContext("2d")),
                (s = this.img.width),
                (a = this.img.height),
                (o = this.assetData.w / this.assetData.h),
                (h =
                  this.assetData.pr ||
                  this.globalData.renderConfig.imagePreserveAspectRatio),
                (o < (n = s / a) && "xMidYMid slice" === h) ||
                (n < o && "xMidYMid slice" !== h)
                  ? (e = (r = a) * o)
                  : (r = (e = s) / o),
                i.drawImage(
                  this.img,
                  (s - e) / 2,
                  (a - r) / 2,
                  e,
                  r,
                  0,
                  0,
                  this.assetData.w,
                  this.assetData.h
                ),
                (this.img = t));
            }),
            (CVImageElement.prototype.renderInnerContent = function () {
              this.canvasContext.drawImage(this.img, 0, 0);
            }),
            (CVImageElement.prototype.destroy = function () {
              this.img = null;
            }),
            extendPrototype(
              [CanvasRenderer, ICompElement, CVBaseElement],
              CVCompElement
            ),
            (CVCompElement.prototype.renderInnerContent = function () {
              var t,
                e = this.canvasContext;
              for (
                e.beginPath(),
                  e.moveTo(0, 0),
                  e.lineTo(this.data.w, 0),
                  e.lineTo(this.data.w, this.data.h),
                  e.lineTo(0, this.data.h),
                  e.lineTo(0, 0),
                  e.clip(),
                  t = this.layers.length - 1;
                0 <= t;
                --t
              )
                (this.completeLayers || this.elements[t]) &&
                  this.elements[t].renderFrame();
            }),
            (CVCompElement.prototype.destroy = function () {
              for (var t = this.layers.length - 1; 0 <= t; --t)
                this.elements[t] && this.elements[t].destroy();
              (this.layers = null), (this.elements = null);
            }),
            (CVMaskElement.prototype.renderFrame = function () {
              if (this.hasMasks) {
                var t,
                  e,
                  r,
                  i,
                  s = this.element.finalTransform.mat,
                  a = this.element.canvasContext,
                  n = this.masksProperties.length;
                for (a.beginPath(), t = 0; t < n; t += 1)
                  if ("n" !== this.masksProperties[t].mode) {
                    this.masksProperties[t].inv &&
                      (a.moveTo(0, 0),
                      a.lineTo(this.element.globalData.compSize.w, 0),
                      a.lineTo(
                        this.element.globalData.compSize.w,
                        this.element.globalData.compSize.h
                      ),
                      a.lineTo(0, this.element.globalData.compSize.h),
                      a.lineTo(0, 0)),
                      (i = this.viewData[t].v),
                      (e = s.applyToPointArray(i.v[0][0], i.v[0][1], 0)),
                      a.moveTo(e[0], e[1]);
                    for (var o = i._length, h = 1; h < o; h += 1)
                      (r = s.applyToTriplePoints(i.o[h - 1], i.i[h], i.v[h])),
                        a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                    (r = s.applyToTriplePoints(i.o[h - 1], i.i[0], i.v[0])),
                      a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                  }
                this.element.globalData.renderer.save(!0), a.clip();
              }
            }),
            (CVMaskElement.prototype.getMaskProperty =
              MaskElement.prototype.getMaskProperty),
            (CVMaskElement.prototype.destroy = function () {
              this.element = null;
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              CVShapeElement
            ),
            (CVShapeElement.prototype.initElement =
              RenderableDOMElement.prototype.initElement),
            (CVShapeElement.prototype.transformHelper = {
              opacity: 1,
              _opMdf: !1,
            }),
            (CVShapeElement.prototype.dashResetter = []),
            (CVShapeElement.prototype.createContent = function () {
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                !0,
                []
              );
            }),
            (CVShapeElement.prototype.createStyleElement = function (t, e) {
              var r = {
                  data: t,
                  type: t.ty,
                  preTransforms: this.transformsManager.addTransformSequence(e),
                  transforms: [],
                  elements: [],
                  closed: !0 === t.hd,
                },
                i = {};
              return (
                "fl" === t.ty || "st" === t.ty
                  ? ((i.c = PropertyFactory.getProp(this, t.c, 1, 255, this)),
                    i.c.k ||
                      (r.co =
                        "rgb(" +
                        bmFloor(i.c.v[0]) +
                        "," +
                        bmFloor(i.c.v[1]) +
                        "," +
                        bmFloor(i.c.v[2]) +
                        ")"))
                  : ("gf" !== t.ty && "gs" !== t.ty) ||
                    ((i.s = PropertyFactory.getProp(this, t.s, 1, null, this)),
                    (i.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                    (i.h = PropertyFactory.getProp(
                      this,
                      t.h || { k: 0 },
                      0,
                      0.01,
                      this
                    )),
                    (i.a = PropertyFactory.getProp(
                      this,
                      t.a || { k: 0 },
                      0,
                      degToRads,
                      this
                    )),
                    (i.g = new GradientProperty(this, t.g, this))),
                (i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
                "st" === t.ty || "gs" === t.ty
                  ? ((r.lc = lineCapEnum[t.lc || 2]),
                    (r.lj = lineJoinEnum[t.lj || 2]),
                    1 == t.lj && (r.ml = t.ml),
                    (i.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
                    i.w.k || (r.wi = i.w.v),
                    t.d &&
                      ((e = new DashProperty(this, t.d, "canvas", this)),
                      (i.d = e),
                      i.d.k ||
                        ((r.da = i.d.dashArray), (r.do = i.d.dashoffset[0]))))
                  : (r.r = 2 === t.r ? "evenodd" : "nonzero"),
                this.stylesList.push(r),
                (i.style = r),
                i
              );
            }),
            (CVShapeElement.prototype.createGroupElement = function () {
              return { it: [], prevViewData: [] };
            }),
            (CVShapeElement.prototype.createTransformElement = function (t) {
              return {
                transform: {
                  opacity: 1,
                  _opMdf: !1,
                  key: this.transformsManager.getNewKey(),
                  op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                  mProps: TransformPropertyFactory.getTransformProperty(
                    this,
                    t,
                    this
                  ),
                },
              };
            }),
            (CVShapeElement.prototype.createShapeElement = function (t) {
              t = new CVShapeData(
                this,
                t,
                this.stylesList,
                this.transformsManager
              );
              return this.shapes.push(t), this.addShapeToModifiers(t), t;
            }),
            (CVShapeElement.prototype.reloadShapes = function () {
              this._isFirstFrame = !0;
              for (var t = this.itemsData.length, e = 0; e < t; e += 1)
                this.prevViewData[e] = this.itemsData[e];
              for (
                this.searchShapes(
                  this.shapesData,
                  this.itemsData,
                  this.prevViewData,
                  !0,
                  []
                ),
                  t = this.dynamicProperties.length,
                  e = 0;
                e < t;
                e += 1
              )
                this.dynamicProperties[e].getValue();
              this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame);
            }),
            (CVShapeElement.prototype.addTransformToStyleList = function (t) {
              for (var e = this.stylesList.length, r = 0; r < e; r += 1)
                this.stylesList[r].closed ||
                  this.stylesList[r].transforms.push(t);
            }),
            (CVShapeElement.prototype.removeTransformFromStyleList =
              function () {
                for (var t = this.stylesList.length, e = 0; e < t; e += 1)
                  this.stylesList[e].closed ||
                    this.stylesList[e].transforms.pop();
              }),
            (CVShapeElement.prototype.closeStyles = function (t) {
              for (var e = t.length, r = 0; r < e; r += 1) t[r].closed = !0;
            }),
            (CVShapeElement.prototype.searchShapes = function (t, e, r, i, s) {
              for (
                var a,
                  n,
                  o,
                  h,
                  l,
                  p = t.length - 1,
                  m = [],
                  f = [],
                  c = [].concat(s),
                  d = p;
                0 <= d;
                --d
              ) {
                if (
                  ((o = this.searchProcessedElement(t[d]))
                    ? (e[d] = r[o - 1])
                    : (t[d]._shouldRender = i),
                  "fl" === t[d].ty ||
                    "st" === t[d].ty ||
                    "gf" === t[d].ty ||
                    "gs" === t[d].ty)
                )
                  o
                    ? (e[d].style.closed = !1)
                    : (e[d] = this.createStyleElement(t[d], c)),
                    m.push(e[d].style);
                else if ("gr" === t[d].ty) {
                  if (o)
                    for (n = e[d].it.length, a = 0; a < n; a += 1)
                      e[d].prevViewData[a] = e[d].it[a];
                  else e[d] = this.createGroupElement(t[d]);
                  this.searchShapes(t[d].it, e[d].it, e[d].prevViewData, i, c);
                } else
                  "tr" === t[d].ty
                    ? (o ||
                        ((l = this.createTransformElement(t[d])), (e[d] = l)),
                      c.push(e[d]),
                      this.addTransformToStyleList(e[d]))
                    : "sh" === t[d].ty ||
                      "rc" === t[d].ty ||
                      "el" === t[d].ty ||
                      "sr" === t[d].ty
                    ? o || (e[d] = this.createShapeElement(t[d]))
                    : "tm" === t[d].ty || "rd" === t[d].ty || "pb" === t[d].ty
                    ? (o
                        ? ((h = e[d]).closed = !1)
                        : ((h = ShapeModifiers.getModifier(t[d].ty)).init(
                            this,
                            t[d]
                          ),
                          (e[d] = h),
                          this.shapeModifiers.push(h)),
                      f.push(h))
                    : "rp" === t[d].ty &&
                      (o
                        ? ((h = e[d]).closed = !0)
                        : ((h = ShapeModifiers.getModifier(t[d].ty)),
                          (e[d] = h).init(this, t, d, e),
                          this.shapeModifiers.push(h),
                          (i = !1)),
                      f.push(h));
                this.addProcessedElement(t[d], d + 1);
              }
              for (
                this.removeTransformFromStyleList(),
                  this.closeStyles(m),
                  p = f.length,
                  d = 0;
                d < p;
                d += 1
              )
                f[d].closed = !0;
            }),
            (CVShapeElement.prototype.renderInnerContent = function () {
              (this.transformHelper.opacity = 1),
                (this.transformHelper._opMdf = !1),
                this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame),
                this.renderShape(
                  this.transformHelper,
                  this.shapesData,
                  this.itemsData,
                  !0
                );
            }),
            (CVShapeElement.prototype.renderShapeTransform = function (t, e) {
              (t._opMdf || e.op._mdf || this._isFirstFrame) &&
                ((e.opacity = t.opacity),
                (e.opacity *= e.op.v),
                (e._opMdf = !0));
            }),
            (CVShapeElement.prototype.drawLayer = function () {
              for (
                var t,
                  e,
                  r,
                  i,
                  s,
                  a,
                  n,
                  o,
                  h = this.stylesList.length,
                  l = this.globalData.renderer,
                  p = this.globalData.canvasContext,
                  m = 0;
                m < h;
                m += 1
              )
                if (
                  (("st" !== (n = (o = this.stylesList[m]).type) &&
                    "gs" !== n) ||
                    0 !== o.wi) &&
                  o.data._shouldRender &&
                  0 !== o.coOp &&
                  0 !== this.globalData.currentGlobalAlpha
                ) {
                  for (
                    l.save(),
                      s = o.elements,
                      "st" === n || "gs" === n
                        ? ((p.strokeStyle = "st" === n ? o.co : o.grd),
                          (p.lineWidth = o.wi),
                          (p.lineCap = o.lc),
                          (p.lineJoin = o.lj),
                          (p.miterLimit = o.ml || 0))
                        : (p.fillStyle = "fl" === n ? o.co : o.grd),
                      l.ctxOpacity(o.coOp),
                      "st" !== n && "gs" !== n && p.beginPath(),
                      l.ctxTransform(o.preTransforms.finalTransform.props),
                      e = s.length,
                      t = 0;
                    t < e;
                    t += 1
                  ) {
                    for (
                      ("st" !== n && "gs" !== n) ||
                        (p.beginPath(),
                        o.da &&
                          (p.setLineDash(o.da), (p.lineDashOffset = o.do))),
                        i = (a = s[t].trNodes).length,
                        r = 0;
                      r < i;
                      r += 1
                    )
                      "m" === a[r].t
                        ? p.moveTo(a[r].p[0], a[r].p[1])
                        : "c" === a[r].t
                        ? p.bezierCurveTo(
                            a[r].pts[0],
                            a[r].pts[1],
                            a[r].pts[2],
                            a[r].pts[3],
                            a[r].pts[4],
                            a[r].pts[5]
                          )
                        : p.closePath();
                    ("st" !== n && "gs" !== n) ||
                      (p.stroke(), o.da && p.setLineDash(this.dashResetter));
                  }
                  "st" !== n && "gs" !== n && p.fill(o.r), l.restore();
                }
            }),
            (CVShapeElement.prototype.renderShape = function (t, e, r, i) {
              for (var s = t, a = e.length - 1; 0 <= a; --a)
                "tr" === e[a].ty
                  ? ((s = r[a].transform), this.renderShapeTransform(t, s))
                  : "sh" === e[a].ty ||
                    "el" === e[a].ty ||
                    "rc" === e[a].ty ||
                    "sr" === e[a].ty
                  ? this.renderPath(e[a], r[a])
                  : "fl" === e[a].ty
                  ? this.renderFill(e[a], r[a], s)
                  : "st" === e[a].ty
                  ? this.renderStroke(e[a], r[a], s)
                  : "gf" === e[a].ty || "gs" === e[a].ty
                  ? this.renderGradientFill(e[a], r[a], s)
                  : "gr" === e[a].ty
                  ? this.renderShape(s, e[a].it, r[a].it)
                  : e[a].ty;
              i && this.drawLayer();
            }),
            (CVShapeElement.prototype.renderStyledShape = function (t, e) {
              if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var r,
                  i,
                  s = t.trNodes,
                  a = e.paths,
                  n = a._length;
                s.length = 0;
                for (
                  var o = t.transforms.finalTransform, h = 0;
                  h < n;
                  h += 1
                ) {
                  var l = a.shapes[h];
                  if (l && l.v) {
                    for (i = l._length, r = 1; r < i; r += 1)
                      1 === r &&
                        s.push({
                          t: "m",
                          p: o.applyToPointArray(l.v[0][0], l.v[0][1], 0),
                        }),
                        s.push({
                          t: "c",
                          pts: o.applyToTriplePoints(
                            l.o[r - 1],
                            l.i[r],
                            l.v[r]
                          ),
                        });
                    1 === i &&
                      s.push({
                        t: "m",
                        p: o.applyToPointArray(l.v[0][0], l.v[0][1], 0),
                      }),
                      l.c &&
                        i &&
                        (s.push({
                          t: "c",
                          pts: o.applyToTriplePoints(
                            l.o[r - 1],
                            l.i[0],
                            l.v[0]
                          ),
                        }),
                        s.push({ t: "z" }));
                  }
                }
                t.trNodes = s;
              }
            }),
            (CVShapeElement.prototype.renderPath = function (t, e) {
              if (!0 !== t.hd && t._shouldRender)
                for (var r = e.styledShapes.length, i = 0; i < r; i += 1)
                  this.renderStyledShape(e.styledShapes[i], e.sh);
            }),
            (CVShapeElement.prototype.renderFill = function (t, e, r) {
              var i = e.style;
              (e.c._mdf || this._isFirstFrame) &&
                (i.co =
                  "rgb(" +
                  bmFloor(e.c.v[0]) +
                  "," +
                  bmFloor(e.c.v[1]) +
                  "," +
                  bmFloor(e.c.v[2]) +
                  ")"),
                (e.o._mdf || r._opMdf || this._isFirstFrame) &&
                  (i.coOp = e.o.v * r.opacity);
            }),
            (CVShapeElement.prototype.renderGradientFill = function (t, e, r) {
              var i = e.style;
              if (
                !i.grd ||
                e.g._mdf ||
                e.s._mdf ||
                e.e._mdf ||
                (1 !== t.t && (e.h._mdf || e.a._mdf))
              ) {
                var s,
                  a,
                  n,
                  o,
                  h = this.globalData.canvasContext,
                  l = e.s.v,
                  p = e.e.v;
                o =
                  1 === t.t
                    ? h.createLinearGradient(l[0], l[1], p[0], p[1])
                    : ((s = Math.sqrt(
                        Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)
                      )),
                      (a = Math.atan2(p[1] - l[1], p[0] - l[0])),
                      1 <= (n = e.h.v) ? (n = 0.99) : n <= -1 && (n = -0.99),
                      (p = s * n),
                      (n = Math.cos(a + e.a.v) * p + l[0]),
                      (p = Math.sin(a + e.a.v) * p + l[1]),
                      h.createRadialGradient(n, p, 0, l[0], l[1], s));
                for (var m = t.g.p, f = e.g.c, c = 1, d = 0; d < m; d += 1)
                  e.g._hasOpacity && e.g._collapsable && (c = e.g.o[2 * d + 1]),
                    o.addColorStop(
                      f[4 * d] / 100,
                      "rgba(" +
                        f[4 * d + 1] +
                        "," +
                        f[4 * d + 2] +
                        "," +
                        f[4 * d + 3] +
                        "," +
                        c +
                        ")"
                    );
                i.grd = o;
              }
              i.coOp = e.o.v * r.opacity;
            }),
            (CVShapeElement.prototype.renderStroke = function (t, e, r) {
              var i = e.style,
                s = e.d;
              s &&
                (s._mdf || this._isFirstFrame) &&
                ((i.da = s.dashArray), (i.do = s.dashoffset[0])),
                (e.c._mdf || this._isFirstFrame) &&
                  (i.co =
                    "rgb(" +
                    bmFloor(e.c.v[0]) +
                    "," +
                    bmFloor(e.c.v[1]) +
                    "," +
                    bmFloor(e.c.v[2]) +
                    ")"),
                (e.o._mdf || r._opMdf || this._isFirstFrame) &&
                  (i.coOp = e.o.v * r.opacity),
                (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
            }),
            (CVShapeElement.prototype.destroy = function () {
              (this.shapesData = null),
                (this.globalData = null),
                (this.canvasContext = null),
                (this.stylesList.length = 0),
                (this.itemsData.length = 0);
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              CVSolidElement
            ),
            (CVSolidElement.prototype.initElement =
              SVGShapeElement.prototype.initElement),
            (CVSolidElement.prototype.prepareFrame =
              IImageElement.prototype.prepareFrame),
            (CVSolidElement.prototype.renderInnerContent = function () {
              var t = this.canvasContext;
              (t.fillStyle = this.data.sc),
                t.fillRect(0, 0, this.data.sw, this.data.sh);
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
                ITextElement,
              ],
              CVTextElement
            ),
            (CVTextElement.prototype.tHelper =
              createTag("canvas").getContext("2d")),
            (CVTextElement.prototype.buildNewText = function () {
              var t = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
              var e = !1;
              t.fc
                ? ((e = !0), (this.values.fill = this.buildColor(t.fc)))
                : (this.values.fill = "rgba(0,0,0,0)"),
                (this.fill = e);
              e = !1;
              t.sc &&
                ((e = !0),
                (this.values.stroke = this.buildColor(t.sc)),
                (this.values.sWidth = t.sw));
              var r,
                i,
                s,
                a,
                n,
                o,
                h,
                l,
                p,
                m = this.globalData.fontManager.getFontByName(t.f),
                f = t.l,
                c = this.mHelper;
              (this.stroke = e),
                (this.values.fValue =
                  t.finalSize +
                  "px " +
                  this.globalData.fontManager.getFontByName(t.f).fFamily);
              for (
                var d = t.finalText.length,
                  u = this.data.singleShape,
                  y = 0.001 * t.tr * t.finalSize,
                  g = 0,
                  v = 0,
                  b = !0,
                  P = 0,
                  E = 0;
                E < d;
                E += 1
              ) {
                for (
                  r =
                    ((r = this.globalData.fontManager.getCharData(
                      t.finalText[E],
                      m.fStyle,
                      this.globalData.fontManager.getFontByName(t.f).fFamily
                    )) &&
                      r.data) ||
                    {},
                    c.reset(),
                    u &&
                      f[E].n &&
                      ((g = -y), (v += t.yOffset), (v += b ? 1 : 0), (b = !1)),
                    o = (a = r.shapes ? r.shapes[0].it : []).length,
                    c.scale(t.finalSize / 100, t.finalSize / 100),
                    u &&
                      this.applyTextPropertiesToMatrix(t, c, f[E].line, g, v),
                    l = createSizedArray(o),
                    n = 0;
                  n < o;
                  n += 1
                ) {
                  for (
                    s = a[n].ks.k.i.length, h = a[n].ks.k, p = [], i = 1;
                    i < s;
                    i += 1
                  )
                    1 === i &&
                      p.push(
                        c.applyToX(h.v[0][0], h.v[0][1], 0),
                        c.applyToY(h.v[0][0], h.v[0][1], 0)
                      ),
                      p.push(
                        c.applyToX(h.o[i - 1][0], h.o[i - 1][1], 0),
                        c.applyToY(h.o[i - 1][0], h.o[i - 1][1], 0),
                        c.applyToX(h.i[i][0], h.i[i][1], 0),
                        c.applyToY(h.i[i][0], h.i[i][1], 0),
                        c.applyToX(h.v[i][0], h.v[i][1], 0),
                        c.applyToY(h.v[i][0], h.v[i][1], 0)
                      );
                  p.push(
                    c.applyToX(h.o[i - 1][0], h.o[i - 1][1], 0),
                    c.applyToY(h.o[i - 1][0], h.o[i - 1][1], 0),
                    c.applyToX(h.i[0][0], h.i[0][1], 0),
                    c.applyToY(h.i[0][0], h.i[0][1], 0),
                    c.applyToX(h.v[0][0], h.v[0][1], 0),
                    c.applyToY(h.v[0][0], h.v[0][1], 0)
                  ),
                    (l[n] = p);
                }
                u && ((g += f[E].l), (g += y)),
                  this.textSpans[P]
                    ? (this.textSpans[P].elem = l)
                    : (this.textSpans[P] = { elem: l }),
                  (P += 1);
              }
            }),
            (CVTextElement.prototype.renderInnerContent = function () {
              var t,
                e,
                r,
                i,
                s = this.canvasContext;
              (s.font = this.values.fValue),
                (s.lineCap = "butt"),
                (s.lineJoin = "miter"),
                (s.miterLimit = 4),
                this.data.singleShape ||
                  this.textAnimator.getMeasures(
                    this.textProperty.currentData,
                    this.lettersChangedFlag
                  );
              for (
                var a,
                  n,
                  o,
                  h = this.textAnimator.renderedLetters,
                  l = this.textProperty.currentData.l,
                  p = l.length,
                  m = null,
                  f = null,
                  c = null,
                  d = 0;
                d < p;
                d += 1
              )
                if (!l[d].n) {
                  if (
                    ((a = h[d]) &&
                      (this.globalData.renderer.save(),
                      this.globalData.renderer.ctxTransform(a.p),
                      this.globalData.renderer.ctxOpacity(a.o)),
                    this.fill)
                  ) {
                    for (
                      a && a.fc
                        ? m !== a.fc && ((m = a.fc), (s.fillStyle = a.fc))
                        : m !== this.values.fill &&
                          ((m = this.values.fill),
                          (s.fillStyle = this.values.fill)),
                        e = (n = this.textSpans[d].elem).length,
                        this.globalData.canvasContext.beginPath(),
                        t = 0;
                      t < e;
                      t += 1
                    )
                      for (
                        i = (o = n[t]).length,
                          this.globalData.canvasContext.moveTo(o[0], o[1]),
                          r = 2;
                        r < i;
                        r += 6
                      )
                        this.globalData.canvasContext.bezierCurveTo(
                          o[r],
                          o[r + 1],
                          o[r + 2],
                          o[r + 3],
                          o[r + 4],
                          o[r + 5]
                        );
                    this.globalData.canvasContext.closePath(),
                      this.globalData.canvasContext.fill();
                  }
                  if (this.stroke) {
                    for (
                      a && a.sw
                        ? c !== a.sw && ((c = a.sw), (s.lineWidth = a.sw))
                        : c !== this.values.sWidth &&
                          ((c = this.values.sWidth),
                          (s.lineWidth = this.values.sWidth)),
                        a && a.sc
                          ? f !== a.sc && ((f = a.sc), (s.strokeStyle = a.sc))
                          : f !== this.values.stroke &&
                            ((f = this.values.stroke),
                            (s.strokeStyle = this.values.stroke)),
                        e = (n = this.textSpans[d].elem).length,
                        this.globalData.canvasContext.beginPath(),
                        t = 0;
                      t < e;
                      t += 1
                    )
                      for (
                        i = (o = n[t]).length,
                          this.globalData.canvasContext.moveTo(o[0], o[1]),
                          r = 2;
                        r < i;
                        r += 6
                      )
                        this.globalData.canvasContext.bezierCurveTo(
                          o[r],
                          o[r + 1],
                          o[r + 2],
                          o[r + 3],
                          o[r + 4],
                          o[r + 5]
                        );
                    this.globalData.canvasContext.closePath(),
                      this.globalData.canvasContext.stroke();
                  }
                  a && this.globalData.renderer.restore();
                }
            }),
            (CVEffects.prototype.renderFrame = function () {}),
            (HBaseElement.prototype = {
              checkBlendMode: function () {},
              initRendererElement: function () {
                (this.baseElement = createTag(this.data.tg || "div")),
                  this.data.hasMask
                    ? ((this.svgElement = createNS("svg")),
                      (this.layerElement = createNS("g")),
                      (this.maskedElement = this.layerElement),
                      this.svgElement.appendChild(this.layerElement),
                      this.baseElement.appendChild(this.svgElement))
                    : (this.layerElement = this.baseElement),
                  styleDiv(this.baseElement);
              },
              createContainerElements: function () {
                (this.renderableEffectsManager = new CVEffects(this)),
                  (this.transformedElement = this.baseElement),
                  (this.maskedElement = this.layerElement),
                  this.data.ln &&
                    this.layerElement.setAttribute("id", this.data.ln),
                  this.data.cl &&
                    this.layerElement.setAttribute("class", this.data.cl),
                  0 !== this.data.bm && this.setBlendMode();
              },
              renderElement: function () {
                var t,
                  e = this.transformedElement
                    ? this.transformedElement.style
                    : {};
                this.finalTransform._matMdf &&
                  ((t = this.finalTransform.mat.toCSS()),
                  (e.transform = t),
                  (e.webkitTransform = t)),
                  this.finalTransform._opMdf &&
                    (e.opacity = this.finalTransform.mProp.o.v);
              },
              renderFrame: function () {
                this.data.hd ||
                  this.hidden ||
                  (this.renderTransform(),
                  this.renderRenderable(),
                  this.renderElement(),
                  this.renderInnerContent(),
                  this._isFirstFrame && (this._isFirstFrame = !1));
              },
              destroy: function () {
                (this.layerElement = null),
                  (this.transformedElement = null),
                  this.matteElement && (this.matteElement = null),
                  this.maskManager &&
                    (this.maskManager.destroy(), (this.maskManager = null));
              },
              createRenderableComponents: function () {
                this.maskManager = new MaskElement(
                  this.data,
                  this,
                  this.globalData
                );
              },
              addEffects: function () {},
              setMatte: function () {},
            }),
            (HBaseElement.prototype.getBaseElement =
              SVGBaseElement.prototype.getBaseElement),
            (HBaseElement.prototype.destroyBaseElement =
              HBaseElement.prototype.destroy),
            (HBaseElement.prototype.buildElementParenting =
              HybridRenderer.prototype.buildElementParenting),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
              ],
              HSolidElement
            ),
            (HSolidElement.prototype.createContent = function () {
              var t;
              this.data.hasMask
                ? ((t = createNS("rect")).setAttribute("width", this.data.sw),
                  t.setAttribute("height", this.data.sh),
                  t.setAttribute("fill", this.data.sc),
                  this.svgElement.setAttribute("width", this.data.sw),
                  this.svgElement.setAttribute("height", this.data.sh))
                : (((t = createTag("div")).style.width = this.data.sw + "px"),
                  (t.style.height = this.data.sh + "px"),
                  (t.style.backgroundColor = this.data.sc)),
                this.layerElement.appendChild(t);
            }),
            extendPrototype(
              [HybridRenderer, ICompElement, HBaseElement],
              HCompElement
            ),
            (HCompElement.prototype._createBaseContainerElements =
              HCompElement.prototype.createContainerElements),
            (HCompElement.prototype.createContainerElements = function () {
              this._createBaseContainerElements(),
                this.data.hasMask
                  ? (this.svgElement.setAttribute("width", this.data.w),
                    this.svgElement.setAttribute("height", this.data.h),
                    (this.transformedElement = this.baseElement))
                  : (this.transformedElement = this.layerElement);
            }),
            (HCompElement.prototype.addTo3dContainer = function (t, e) {
              for (var r, i = 0; i < e; )
                this.elements[i] &&
                  this.elements[i].getBaseElement &&
                  (r = this.elements[i].getBaseElement()),
                  (i += 1);
              r
                ? this.layerElement.insertBefore(t, r)
                : this.layerElement.appendChild(t);
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HSolidElement,
                SVGShapeElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              HShapeElement
            ),
            (HShapeElement.prototype._renderShapeFrame =
              HShapeElement.prototype.renderInnerContent),
            (HShapeElement.prototype.createContent = function () {
              var t, e;
              (this.baseElement.style.fontSize = 0),
                this.data.hasMask
                  ? (this.layerElement.appendChild(this.shapesContainer),
                    (t = this.svgElement))
                  : ((t = createNS("svg")),
                    (e = this.comp.data || this.globalData.compSize),
                    t.setAttribute("width", e.w),
                    t.setAttribute("height", e.h),
                    t.appendChild(this.shapesContainer),
                    this.layerElement.appendChild(t)),
                this.searchShapes(
                  this.shapesData,
                  this.itemsData,
                  this.prevViewData,
                  this.shapesContainer,
                  0,
                  [],
                  !0
                ),
                this.filterUniqueShapes(),
                (this.shapeCont = t);
            }),
            (HShapeElement.prototype.getTransformedPoint = function (t, e) {
              for (var r = t.length, i = 0; i < r; i += 1)
                e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
              return e;
            }),
            (HShapeElement.prototype.calculateShapeBoundingBox = function (
              t,
              e
            ) {
              var r,
                i,
                s,
                a,
                n,
                o = t.sh.v,
                h = t.transformers,
                l = o._length;
              if (!(l <= 1)) {
                for (r = 0; r < l - 1; r += 1)
                  (i = this.getTransformedPoint(h, o.v[r])),
                    (s = this.getTransformedPoint(h, o.o[r])),
                    (a = this.getTransformedPoint(h, o.i[r + 1])),
                    (n = this.getTransformedPoint(h, o.v[r + 1])),
                    this.checkBounds(i, s, a, n, e);
                o.c &&
                  ((i = this.getTransformedPoint(h, o.v[r])),
                  (s = this.getTransformedPoint(h, o.o[r])),
                  (a = this.getTransformedPoint(h, o.i[0])),
                  (n = this.getTransformedPoint(h, o.v[0])),
                  this.checkBounds(i, s, a, n, e));
              }
            }),
            (HShapeElement.prototype.checkBounds = function (t, e, r, i, s) {
              this.getBoundsOfCurve(t, e, r, i);
              i = this.shapeBoundingBox;
              (s.x = bmMin(i.left, s.x)),
                (s.xMax = bmMax(i.right, s.xMax)),
                (s.y = bmMin(i.top, s.y)),
                (s.yMax = bmMax(i.bottom, s.yMax));
            }),
            (HShapeElement.prototype.shapeBoundingBox = {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }),
            (HShapeElement.prototype.tempBoundingBox = {
              x: 0,
              xMax: 0,
              y: 0,
              yMax: 0,
              width: 0,
              height: 0,
            }),
            (HShapeElement.prototype.getBoundsOfCurve = function (t, e, r, i) {
              for (
                var s,
                  a,
                  n,
                  o,
                  h = [
                    [t[0], i[0]],
                    [t[1], i[1]],
                  ],
                  l = 0;
                l < 2;
                ++l
              )
                (s = 6 * t[l] - 12 * e[l] + 6 * r[l]),
                  (o = -3 * t[l] + 9 * e[l] - 9 * r[l] + 3 * i[l]),
                  (n = 3 * e[l] - 3 * t[l]),
                  (s |= 0),
                  (n |= 0),
                  (0 == (o |= 0) && 0 == s) ||
                    (0 == o
                      ? 0 < (a = -n / s) &&
                        a < 1 &&
                        h[l].push(this.calculateF(a, t, e, r, i, l))
                      : 0 <= (a = s * s - 4 * n * o) &&
                        (0 < (n = (-s + bmSqrt(a)) / (2 * o)) &&
                          n < 1 &&
                          h[l].push(this.calculateF(n, t, e, r, i, l)),
                        0 < (o = (-s - bmSqrt(a)) / (2 * o)) &&
                          o < 1 &&
                          h[l].push(this.calculateF(o, t, e, r, i, l))));
              (this.shapeBoundingBox.left = bmMin.apply(null, h[0])),
                (this.shapeBoundingBox.top = bmMin.apply(null, h[1])),
                (this.shapeBoundingBox.right = bmMax.apply(null, h[0])),
                (this.shapeBoundingBox.bottom = bmMax.apply(null, h[1]));
            }),
            (HShapeElement.prototype.calculateF = function (t, e, r, i, s, a) {
              return (
                bmPow(1 - t, 3) * e[a] +
                3 * bmPow(1 - t, 2) * t * r[a] +
                3 * (1 - t) * bmPow(t, 2) * i[a] +
                bmPow(t, 3) * s[a]
              );
            }),
            (HShapeElement.prototype.calculateBoundingBox = function (t, e) {
              for (var r = t.length, i = 0; i < r; i += 1)
                t[i] && t[i].sh
                  ? this.calculateShapeBoundingBox(t[i], e)
                  : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e);
            }),
            (HShapeElement.prototype.currentBoxContains = function (t) {
              return (
                this.currentBBox.x <= t.x &&
                this.currentBBox.y <= t.y &&
                this.currentBBox.width + this.currentBBox.x >= t.x + t.width &&
                this.currentBBox.height + this.currentBBox.y >= t.y + t.height
              );
            }),
            (HShapeElement.prototype.renderInnerContent = function () {
              var t, e;
              this._renderShapeFrame(),
                this.hidden ||
                  (!this._isFirstFrame && !this._mdf) ||
                  (((e = this.tempBoundingBox).x = t = 999999),
                  (e.xMax = -t),
                  (e.y = t),
                  (e.yMax = -t),
                  this.calculateBoundingBox(this.itemsData, e),
                  (e.width = e.xMax < e.x ? 0 : e.xMax - e.x),
                  (e.height = e.yMax < e.y ? 0 : e.yMax - e.y),
                  this.currentBoxContains(e) ||
                    ((t = !1),
                    this.currentBBox.w !== e.width &&
                      ((this.currentBBox.w = e.width),
                      this.shapeCont.setAttribute("width", e.width),
                      (t = !0)),
                    this.currentBBox.h !== e.height &&
                      ((this.currentBBox.h = e.height),
                      this.shapeCont.setAttribute("height", e.height),
                      (t = !0)),
                    (!t &&
                      this.currentBBox.x === e.x &&
                      this.currentBBox.y === e.y) ||
                      ((this.currentBBox.w = e.width),
                      (this.currentBBox.h = e.height),
                      (this.currentBBox.x = e.x),
                      (this.currentBBox.y = e.y),
                      this.shapeCont.setAttribute(
                        "viewBox",
                        this.currentBBox.x +
                          " " +
                          this.currentBBox.y +
                          " " +
                          this.currentBBox.w +
                          " " +
                          this.currentBBox.h
                      ),
                      (t = this.shapeCont.style),
                      (e =
                        "translate(" +
                        this.currentBBox.x +
                        "px," +
                        this.currentBBox.y +
                        "px)"),
                      (t.transform = e),
                      (t.webkitTransform = e))));
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement,
              ],
              HTextElement
            ),
            (HTextElement.prototype.createContent = function () {
              var t;
              (this.isMasked = this.checkMasks()),
                this.isMasked
                  ? ((this.renderType = "svg"),
                    (this.compW = this.comp.data.w),
                    (this.compH = this.comp.data.h),
                    this.svgElement.setAttribute("width", this.compW),
                    this.svgElement.setAttribute("height", this.compH),
                    (t = createNS("g")),
                    this.maskedElement.appendChild(t),
                    (this.innerElem = t))
                  : ((this.renderType = "html"),
                    (this.innerElem = this.layerElement)),
                this.checkParenting();
            }),
            (HTextElement.prototype.buildNewText = function () {
              var t = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
              var e = this.innerElem.style,
                r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
              (e.fill = r),
                (e.color = r),
                t.sc &&
                  ((e.stroke = this.buildColor(t.sc)),
                  (e.strokeWidth = t.sw + "px"));
              var i,
                s = this.globalData.fontManager.getFontByName(t.f);
              this.globalData.fontManager.chars ||
                ((e.fontSize = t.finalSize + "px"),
                (e.lineHeight = t.finalSize + "px"),
                s.fClass
                  ? (this.innerElem.className = s.fClass)
                  : ((e.fontFamily = s.fFamily),
                    (i = t.fWeight),
                    (r = t.fStyle),
                    (e.fontStyle = r),
                    (e.fontWeight = i)));
              for (
                var a,
                  n,
                  o,
                  h,
                  l,
                  p,
                  m,
                  f,
                  c = t.l,
                  d = c.length,
                  u = this.mHelper,
                  y = 0,
                  g = 0;
                g < d;
                g += 1
              )
                this.globalData.fontManager.chars
                  ? (this.textPaths[y]
                      ? (a = this.textPaths[y])
                      : ((a = createNS("path")).setAttribute(
                          "stroke-linecap",
                          lineCapEnum[1]
                        ),
                        a.setAttribute("stroke-linejoin", lineJoinEnum[2]),
                        a.setAttribute("stroke-miterlimit", "4")),
                    this.isMasked ||
                      (this.textSpans[y]
                        ? (o = (n = this.textSpans[y]).children[0])
                        : (((n = createTag("div")).style.lineHeight = 0),
                          (o = createNS("svg")).appendChild(a),
                          styleDiv(n))))
                  : this.isMasked
                  ? (a = this.textPaths[y] || createNS("text"))
                  : this.textSpans[y]
                  ? ((n = this.textSpans[y]), (a = this.textPaths[y]))
                  : (styleDiv((n = createTag("span"))),
                    styleDiv((a = createTag("span"))),
                    n.appendChild(a)),
                  this.globalData.fontManager.chars
                    ? ((p = (l = this.globalData.fontManager.getCharData(
                        t.finalText[g],
                        s.fStyle,
                        this.globalData.fontManager.getFontByName(t.f).fFamily
                      ))
                        ? l.data
                        : null),
                      u.reset(),
                      p &&
                        p.shapes &&
                        ((l = p.shapes[0].it),
                        u.scale(t.finalSize / 100, t.finalSize / 100),
                        (h = this.createPathShape(u, l)),
                        a.setAttribute("d", h)),
                      this.isMasked
                        ? this.innerElem.appendChild(a)
                        : (this.innerElem.appendChild(n),
                          p && p.shapes
                            ? (document.body.appendChild(o),
                              (f = o.getBBox()),
                              o.setAttribute("width", f.width + 2),
                              o.setAttribute("height", f.height + 2),
                              o.setAttribute(
                                "viewBox",
                                f.x -
                                  1 +
                                  " " +
                                  (f.y - 1) +
                                  " " +
                                  (f.width + 2) +
                                  " " +
                                  (f.height + 2)
                              ),
                              (p = o.style),
                              (m =
                                "translate(" +
                                (f.x - 1) +
                                "px," +
                                (f.y - 1) +
                                "px)"),
                              (p.transform = m),
                              (p.webkitTransform = m),
                              (c[g].yOffset = f.y - 1))
                            : (o.setAttribute("width", 1),
                              o.setAttribute("height", 1)),
                          n.appendChild(o)))
                    : ((a.textContent = c[g].val),
                      a.setAttributeNS(
                        "http://www.w3.org/XML/1998/namespace",
                        "xml:space",
                        "preserve"
                      ),
                      this.isMasked
                        ? this.innerElem.appendChild(a)
                        : (this.innerElem.appendChild(n),
                          (m = a.style),
                          (f = "translate3d(0," + -t.finalSize / 1.2 + "px,0)"),
                          (m.transform = f),
                          (m.webkitTransform = f))),
                  this.isMasked
                    ? (this.textSpans[y] = a)
                    : (this.textSpans[y] = n),
                  (this.textSpans[y].style.display = "block"),
                  (this.textPaths[y] = a),
                  (y += 1);
              for (; y < this.textSpans.length; )
                (this.textSpans[y].style.display = "none"), (y += 1);
            }),
            (HTextElement.prototype.renderInnerContent = function () {
              var t;
              if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                this.isMasked &&
                  this.finalTransform._matMdf &&
                  (this.svgElement.setAttribute(
                    "viewBox",
                    -this.finalTransform.mProp.p.v[0] +
                      " " +
                      -this.finalTransform.mProp.p.v[1] +
                      " " +
                      this.compW +
                      " " +
                      this.compH
                  ),
                  (t = this.svgElement.style),
                  (s =
                    "translate(" +
                    -this.finalTransform.mProp.p.v[0] +
                    "px," +
                    -this.finalTransform.mProp.p.v[1] +
                    "px)"),
                  (t.transform = s),
                  (t.webkitTransform = s));
              }
              if (
                (this.textAnimator.getMeasures(
                  this.textProperty.currentData,
                  this.lettersChangedFlag
                ),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
              ) {
                for (
                  var e,
                    r,
                    i,
                    s,
                    a = 0,
                    n = this.textAnimator.renderedLetters,
                    o = this.textProperty.currentData.l,
                    h = o.length,
                    l = 0;
                  l < h;
                  l += 1
                )
                  o[l].n
                    ? (a += 1)
                    : ((r = this.textSpans[l]),
                      (i = this.textPaths[l]),
                      (e = n[a]),
                      (a += 1),
                      e._mdf.m &&
                        (this.isMasked
                          ? r.setAttribute("transform", e.m)
                          : ((r.style.webkitTransform = e.m),
                            (r.style.transform = e.m))),
                      (r.style.opacity = e.o),
                      e.sw && e._mdf.sw && i.setAttribute("stroke-width", e.sw),
                      e.sc && e._mdf.sc && i.setAttribute("stroke", e.sc),
                      e.fc &&
                        e._mdf.fc &&
                        (i.setAttribute("fill", e.fc), (i.style.color = e.fc)));
                this.innerElem.getBBox &&
                  !this.hidden &&
                  (this._isFirstFrame || this._mdf) &&
                  ((s = this.innerElem.getBBox()),
                  this.currentBBox.w !== s.width &&
                    ((this.currentBBox.w = s.width),
                    this.svgElement.setAttribute("width", s.width)),
                  this.currentBBox.h !== s.height &&
                    ((this.currentBBox.h = s.height),
                    this.svgElement.setAttribute("height", s.height)),
                  (this.currentBBox.w === s.width + 2 &&
                    this.currentBBox.h === s.height + 2 &&
                    this.currentBBox.x === s.x - 1 &&
                    this.currentBBox.y === s.y - 1) ||
                    ((this.currentBBox.w = s.width + 2),
                    (this.currentBBox.h = s.height + 2),
                    (this.currentBBox.x = s.x - 1),
                    (this.currentBBox.y = s.y - 1),
                    this.svgElement.setAttribute(
                      "viewBox",
                      this.currentBBox.x +
                        " " +
                        this.currentBBox.y +
                        " " +
                        this.currentBBox.w +
                        " " +
                        this.currentBBox.h
                    ),
                    (t = this.svgElement.style),
                    (s =
                      "translate(" +
                      this.currentBBox.x +
                      "px," +
                      this.currentBBox.y +
                      "px)"),
                    (t.transform = s),
                    (t.webkitTransform = s)));
              }
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HSolidElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
              ],
              HImageElement
            ),
            (HImageElement.prototype.createContent = function () {
              var t = this.globalData.getAssetsPath(this.assetData),
                e = new Image();
              this.data.hasMask
                ? ((this.imageElem = createNS("image")),
                  this.imageElem.setAttribute("width", this.assetData.w + "px"),
                  this.imageElem.setAttribute(
                    "height",
                    this.assetData.h + "px"
                  ),
                  this.imageElem.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "href",
                    t
                  ),
                  this.layerElement.appendChild(this.imageElem),
                  this.baseElement.setAttribute("width", this.assetData.w),
                  this.baseElement.setAttribute("height", this.assetData.h))
                : this.layerElement.appendChild(e),
                (e.crossOrigin = "anonymous"),
                (e.src = t),
                this.data.ln &&
                  this.baseElement.setAttribute("id", this.data.ln);
            }),
            extendPrototype(
              [BaseElement, FrameElement, HierarchyElement],
              HCameraElement
            ),
            (HCameraElement.prototype.setup = function () {
              for (
                var t, e, r, i, s, a = this.comp.threeDElements.length, n = 0;
                n < a;
                n += 1
              )
                "3d" === (s = this.comp.threeDElements[n]).type &&
                  ((t = s.perspectiveElem.style),
                  (e = s.container.style),
                  (r = this.pe.v + "px"),
                  (i = "0px 0px 0px"),
                  (s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"),
                  (t.perspective = r),
                  (t.webkitPerspective = r),
                  (e.transformOrigin = i),
                  (e.mozTransformOrigin = i),
                  (e.webkitTransformOrigin = i),
                  (t.transform = s),
                  (t.webkitTransform = s));
            }),
            (HCameraElement.prototype.createElements = function () {}),
            (HCameraElement.prototype.hide = function () {}),
            (HCameraElement.prototype.renderFrame = function () {
              var t,
                e,
                r = this._isFirstFrame;
              if (this.hierarchy)
                for (h = this.hierarchy.length, l = 0; l < h; l += 1)
                  r = this.hierarchy[l].finalTransform.mProp._mdf || r;
              if (
                r ||
                this.pe._mdf ||
                (this.p && this.p._mdf) ||
                (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
                this.rx._mdf ||
                this.ry._mdf ||
                this.rz._mdf ||
                this.or._mdf ||
                (this.a && this.a._mdf)
              ) {
                if ((this.mat.reset(), this.hierarchy))
                  for (l = h = this.hierarchy.length - 1; 0 <= l; --l) {
                    var i = this.hierarchy[l].finalTransform.mProp;
                    this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]),
                      this.mat
                        .rotateX(-i.or.v[0])
                        .rotateY(-i.or.v[1])
                        .rotateZ(i.or.v[2]),
                      this.mat
                        .rotateX(-i.rx.v)
                        .rotateY(-i.ry.v)
                        .rotateZ(i.rz.v),
                      this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]),
                      this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
                  }
                this.p
                  ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
                  : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                  this.a &&
                    ((e = this.p
                      ? [
                          this.p.v[0] - this.a.v[0],
                          this.p.v[1] - this.a.v[1],
                          this.p.v[2] - this.a.v[2],
                        ]
                      : [
                          this.px.v - this.a.v[0],
                          this.py.v - this.a.v[1],
                          this.pz.v - this.a.v[2],
                        ]),
                    (t = Math.sqrt(
                      Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2)
                    )),
                    (e = [e[0] / t, e[1] / t, e[2] / t]),
                    (t = Math.sqrt(e[2] * e[2] + e[0] * e[0])),
                    (t = Math.atan2(e[1], t)),
                    (e = Math.atan2(e[0], -e[2])),
                    this.mat.rotateY(e).rotateX(-t)),
                  this.mat
                    .rotateX(-this.rx.v)
                    .rotateY(-this.ry.v)
                    .rotateZ(this.rz.v),
                  this.mat
                    .rotateX(-this.or.v[0])
                    .rotateY(-this.or.v[1])
                    .rotateZ(this.or.v[2]),
                  this.mat.translate(
                    this.globalData.compSize.w / 2,
                    this.globalData.compSize.h / 2,
                    0
                  ),
                  this.mat.translate(0, 0, this.pe.v);
                var s = !this._prevMat.equals(this.mat);
                if ((s || this.pe._mdf) && this.comp.threeDElements) {
                  for (
                    var a, n, o, h = this.comp.threeDElements.length, l = 0;
                    l < h;
                    l += 1
                  )
                    "3d" === (a = this.comp.threeDElements[l]).type &&
                      (s &&
                        ((o = this.mat.toCSS()),
                        ((n = a.container.style).transform = o),
                        (n.webkitTransform = o)),
                      this.pe._mdf &&
                        (((a = a.perspectiveElem.style).perspective =
                          this.pe.v + "px"),
                        (a.webkitPerspective = this.pe.v + "px")));
                  this.mat.clone(this._prevMat);
                }
              }
              this._isFirstFrame = !1;
            }),
            (HCameraElement.prototype.prepareFrame = function (t) {
              this.prepareProperties(t, !0);
            }),
            (HCameraElement.prototype.destroy = function () {}),
            (HCameraElement.prototype.getBaseElement = function () {
              return null;
            }),
            (HEffects.prototype.renderFrame = function () {});
          var animationManager =
              ((cJ = {}),
              (dJ = []),
              (eJ = 0),
              (fJ = 0),
              (gJ = 0),
              (hJ = !0),
              (iJ = !1),
              (cJ.registerAnimation = kJ),
              (cJ.loadAnimation = function (t) {
                var e = new AnimationItem();
                return nJ(e, null), e.setParams(t), e;
              }),
              (cJ.setSpeed = function (t, e) {
                for (var r = 0; r < fJ; r += 1) dJ[r].animation.setSpeed(t, e);
              }),
              (cJ.setDirection = function (t, e) {
                for (var r = 0; r < fJ; r += 1)
                  dJ[r].animation.setDirection(t, e);
              }),
              (cJ.play = function (t) {
                for (var e = 0; e < fJ; e += 1) dJ[e].animation.play(t);
              }),
              (cJ.pause = function (t) {
                for (var e = 0; e < fJ; e += 1) dJ[e].animation.pause(t);
              }),
              (cJ.stop = function (t) {
                for (var e = 0; e < fJ; e += 1) dJ[e].animation.stop(t);
              }),
              (cJ.togglePause = function (t) {
                for (var e = 0; e < fJ; e += 1) dJ[e].animation.togglePause(t);
              }),
              (cJ.searchAnimations = function (t, e, r) {
                for (
                  var i,
                    s = [].concat(
                      [].slice.call(document.getElementsByClassName("lottie")),
                      [].slice.call(
                        document.getElementsByClassName("bodymovin")
                      )
                    ),
                    a = s.length,
                    n = 0;
                  n < a;
                  n += 1
                )
                  r && s[n].setAttribute("data-bm-type", r), kJ(s[n], t);
                e &&
                  0 === a &&
                  ((r = r || "svg"),
                  ((i = document.getElementsByTagName("body")[0]).innerText =
                    ""),
                  ((e = createTag("div")).style.width = "100%"),
                  (e.style.height = "100%"),
                  e.setAttribute("data-bm-type", r),
                  i.appendChild(e),
                  kJ(e, t));
              }),
              (cJ.resize = function () {
                for (var t = 0; t < fJ; t += 1) dJ[t].animation.resize();
              }),
              (cJ.goToAndStop = function (t, e, r) {
                for (var i = 0; i < fJ; i += 1)
                  dJ[i].animation.goToAndStop(t, e, r);
              }),
              (cJ.destroy = function (t) {
                for (var e = fJ - 1; 0 <= e; --e) dJ[e].animation.destroy(t);
              }),
              (cJ.freeze = function () {
                iJ = !0;
              }),
              (cJ.unfreeze = function () {
                (iJ = !1), qJ();
              }),
              (cJ.setVolume = function (t, e) {
                for (var r = 0; r < fJ; r += 1) dJ[r].animation.setVolume(t, e);
              }),
              (cJ.mute = function (t) {
                for (var e = 0; e < fJ; e += 1) dJ[e].animation.mute(t);
              }),
              (cJ.unmute = function (t) {
                for (var e = 0; e < fJ; e += 1) dJ[e].animation.unmute(t);
              }),
              (cJ.getRegisteredAnimations = function () {
                for (var t = dJ.length, e = [], r = 0; r < t; r += 1)
                  e.push(dJ[r].animation);
                return e;
              }),
              cJ),
            AnimationItem = function () {
              (this._cbs = []),
                (this.name = ""),
                (this.path = ""),
                (this.isLoaded = !1),
                (this.currentFrame = 0),
                (this.currentRawFrame = 0),
                (this.firstFrame = 0),
                (this.totalFrames = 0),
                (this.frameRate = 0),
                (this.frameMult = 0),
                (this.playSpeed = 1),
                (this.playDirection = 1),
                (this.playCount = 0),
                (this.animationData = {}),
                (this.assets = []),
                (this.isPaused = !0),
                (this.autoplay = !1),
                (this.loop = !0),
                (this.renderer = null),
                (this.animationID = createElementID()),
                (this.assetsPath = ""),
                (this.timeCompleted = 0),
                (this.segmentPos = 0),
                (this.isSubframeEnabled = subframeEnabled),
                (this.segments = []),
                (this._idle = !0),
                (this._completedLoop = !1),
                (this.projectInterface = ProjectInterface()),
                (this.imagePreloader = new ImagePreloader()),
                (this.audioController = audioControllerFactory()),
                (this.markers = []);
            },
            cJ,
            dJ,
            eJ,
            fJ,
            gJ,
            hJ,
            iJ;
          function jJ(t) {
            for (var e = 0, r = t.target; e < fJ; )
              dJ[e].animation === r &&
                (dJ.splice(e, 1), --e, --fJ, r.isPaused || mJ()),
                (e += 1);
          }
          function kJ(t, e) {
            if (!t) return null;
            for (var r = 0; r < fJ; ) {
              if (dJ[r].elem === t && null !== dJ[r].elem)
                return dJ[r].animation;
              r += 1;
            }
            var i = new AnimationItem();
            return nJ(i, t), i.setData(t, e), i;
          }
          function lJ() {
            (gJ += 1), qJ();
          }
          function mJ() {
            --gJ;
          }
          function nJ(t, e) {
            t.addEventListener("destroy", jJ),
              t.addEventListener("_active", lJ),
              t.addEventListener("_idle", mJ),
              dJ.push({ elem: e, animation: t }),
              (fJ += 1);
          }
          function oJ(t) {
            for (var e = t - eJ, r = 0; r < fJ; r += 1)
              dJ[r].animation.advanceTime(e);
            (eJ = t), gJ && !iJ ? window.requestAnimationFrame(oJ) : (hJ = !0);
          }
          function pJ(t) {
            (eJ = t), window.requestAnimationFrame(oJ);
          }
          function qJ() {
            !iJ && gJ && hJ && (window.requestAnimationFrame(pJ), (hJ = !1));
          }
          extendPrototype([BaseEvent], AnimationItem),
            (AnimationItem.prototype.setParams = function (t) {
              (t.wrapper || t.container) &&
                (this.wrapper = t.wrapper || t.container);
              var e = "svg";
              switch (
                (t.animType ? (e = t.animType) : t.renderer && (e = t.renderer),
                e)
              ) {
                case "canvas":
                  this.renderer = new CanvasRenderer(this, t.rendererSettings);
                  break;
                case "svg":
                  this.renderer = new SVGRenderer(this, t.rendererSettings);
                  break;
                default:
                  this.renderer = new HybridRenderer(this, t.rendererSettings);
              }
              this.imagePreloader.setCacheType(
                e,
                this.renderer.globalData.defs
              ),
                this.renderer.setProjectInterface(this.projectInterface),
                (this.animType = e),
                "" === t.loop ||
                null === t.loop ||
                void 0 === t.loop ||
                !0 === t.loop
                  ? (this.loop = !0)
                  : !1 === t.loop
                  ? (this.loop = !1)
                  : (this.loop = parseInt(t.loop, 10)),
                (this.autoplay = !("autoplay" in t) || t.autoplay),
                (this.name = t.name || ""),
                (this.autoloadSegments =
                  !Object.prototype.hasOwnProperty.call(
                    t,
                    "autoloadSegments"
                  ) || t.autoloadSegments),
                (this.assetsPath = t.assetsPath),
                (this.initialSegment = t.initialSegment),
                t.audioFactory &&
                  this.audioController.setAudioFactory(t.audioFactory),
                t.animationData
                  ? this.configAnimation(t.animationData)
                  : t.path &&
                    (-1 !== t.path.lastIndexOf("\\")
                      ? (this.path = t.path.substr(
                          0,
                          t.path.lastIndexOf("\\") + 1
                        ))
                      : (this.path = t.path.substr(
                          0,
                          t.path.lastIndexOf("/") + 1
                        )),
                    (this.fileName = t.path.substr(
                      t.path.lastIndexOf("/") + 1
                    )),
                    (this.fileName = this.fileName.substr(
                      0,
                      this.fileName.lastIndexOf(".json")
                    )),
                    assetLoader.load(
                      t.path,
                      this.configAnimation.bind(this),
                      function () {
                        this.trigger("data_failed");
                      }.bind(this)
                    ));
            }),
            (AnimationItem.prototype.setData = function (t, e) {
              var r = {
                  wrapper: t,
                  animationData: (e =
                    e && "object" != typeof e ? JSON.parse(e) : e),
                },
                e = t.attributes;
              (r.path = e.getNamedItem("data-animation-path")
                ? e.getNamedItem("data-animation-path").value
                : e.getNamedItem("data-bm-path")
                ? e.getNamedItem("data-bm-path").value
                : e.getNamedItem("bm-path")
                ? e.getNamedItem("bm-path").value
                : ""),
                (r.animType = e.getNamedItem("data-anim-type")
                  ? e.getNamedItem("data-anim-type").value
                  : e.getNamedItem("data-bm-type")
                  ? e.getNamedItem("data-bm-type").value
                  : e.getNamedItem("bm-type")
                  ? e.getNamedItem("bm-type").value
                  : e.getNamedItem("data-bm-renderer")
                  ? e.getNamedItem("data-bm-renderer").value
                  : e.getNamedItem("bm-renderer")
                  ? e.getNamedItem("bm-renderer").value
                  : "canvas");
              t = e.getNamedItem("data-anim-loop")
                ? e.getNamedItem("data-anim-loop").value
                : e.getNamedItem("data-bm-loop")
                ? e.getNamedItem("data-bm-loop").value
                : e.getNamedItem("bm-loop")
                ? e.getNamedItem("bm-loop").value
                : "";
              "false" === t
                ? (r.loop = !1)
                : "true" === t
                ? (r.loop = !0)
                : "" !== t && (r.loop = parseInt(t, 10));
              t = e.getNamedItem("data-anim-autoplay")
                ? e.getNamedItem("data-anim-autoplay").value
                : e.getNamedItem("data-bm-autoplay")
                ? e.getNamedItem("data-bm-autoplay").value
                : !e.getNamedItem("bm-autoplay") ||
                  e.getNamedItem("bm-autoplay").value;
              (r.autoplay = "false" !== t),
                (r.name = e.getNamedItem("data-name")
                  ? e.getNamedItem("data-name").value
                  : e.getNamedItem("data-bm-name")
                  ? e.getNamedItem("data-bm-name").value
                  : e.getNamedItem("bm-name")
                  ? e.getNamedItem("bm-name").value
                  : ""),
                "false" ===
                  (e.getNamedItem("data-anim-prerender")
                    ? e.getNamedItem("data-anim-prerender").value
                    : e.getNamedItem("data-bm-prerender")
                    ? e.getNamedItem("data-bm-prerender").value
                    : e.getNamedItem("bm-prerender")
                    ? e.getNamedItem("bm-prerender").value
                    : "") && (r.prerender = !1),
                this.setParams(r);
            }),
            (AnimationItem.prototype.includeLayers = function (t) {
              t.op > this.animationData.op &&
                ((this.animationData.op = t.op),
                (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
              for (
                var e,
                  r = this.animationData.layers,
                  i = r.length,
                  s = t.layers,
                  a = s.length,
                  n = 0;
                n < a;
                n += 1
              )
                for (e = 0; e < i; ) {
                  if (r[e].id === s[n].id) {
                    r[e] = s[n];
                    break;
                  }
                  e += 1;
                }
              if (
                ((t.chars || t.fonts) &&
                  (this.renderer.globalData.fontManager.addChars(t.chars),
                  this.renderer.globalData.fontManager.addFonts(
                    t.fonts,
                    this.renderer.globalData.defs
                  )),
                t.assets)
              )
                for (i = t.assets.length, e = 0; e < i; e += 1)
                  this.animationData.assets.push(t.assets[e]);
              (this.animationData.__complete = !1),
                dataManager.completeData(
                  this.animationData,
                  this.renderer.globalData.fontManager
                ),
                this.renderer.includeLayers(t.layers),
                expressionsPlugin && expressionsPlugin.initExpressions(this),
                this.loadNextSegment();
            }),
            (AnimationItem.prototype.loadNextSegment = function () {
              var t = this.animationData.segments;
              if (!t || 0 === t.length || !this.autoloadSegments)
                return (
                  this.trigger("data_ready"),
                  void (this.timeCompleted = this.totalFrames)
                );
              t = t.shift();
              this.timeCompleted = t.time * this.frameRate;
              t = this.path + this.fileName + "_" + this.segmentPos + ".json";
              (this.segmentPos += 1),
                assetLoader.load(
                  t,
                  this.includeLayers.bind(this),
                  function () {
                    this.trigger("data_failed");
                  }.bind(this)
                );
            }),
            (AnimationItem.prototype.loadSegments = function () {
              this.animationData.segments ||
                (this.timeCompleted = this.totalFrames),
                this.loadNextSegment();
            }),
            (AnimationItem.prototype.imagesLoaded = function () {
              this.trigger("loaded_images"), this.checkLoaded();
            }),
            (AnimationItem.prototype.preloadImages = function () {
              this.imagePreloader.setAssetsPath(this.assetsPath),
                this.imagePreloader.setPath(this.path),
                this.imagePreloader.loadAssets(
                  this.animationData.assets,
                  this.imagesLoaded.bind(this)
                );
            }),
            (AnimationItem.prototype.configAnimation = function (t) {
              if (this.renderer)
                try {
                  (this.animationData = t),
                    this.initialSegment
                      ? ((this.totalFrames = Math.floor(
                          this.initialSegment[1] - this.initialSegment[0]
                        )),
                        (this.firstFrame = Math.round(this.initialSegment[0])))
                      : ((this.totalFrames = Math.floor(
                          this.animationData.op - this.animationData.ip
                        )),
                        (this.firstFrame = Math.round(this.animationData.ip))),
                    this.renderer.configAnimation(t),
                    t.assets || (t.assets = []),
                    (this.assets = this.animationData.assets),
                    (this.frameRate = this.animationData.fr),
                    (this.frameMult = this.animationData.fr / 1e3),
                    this.renderer.searchExtraCompositions(t.assets),
                    (this.markers = markerParser(t.markers || [])),
                    this.trigger("config_ready"),
                    this.preloadImages(),
                    this.loadSegments(),
                    this.updaFrameModifier(),
                    this.waitForFontsLoaded(),
                    this.isPaused && this.audioController.pause();
                } catch (t) {
                  this.triggerConfigError(t);
                }
            }),
            (AnimationItem.prototype.waitForFontsLoaded = function () {
              this.renderer &&
                (this.renderer.globalData.fontManager.isLoaded
                  ? this.checkLoaded()
                  : setTimeout(this.waitForFontsLoaded.bind(this), 20));
            }),
            (AnimationItem.prototype.checkLoaded = function () {
              !this.isLoaded &&
                this.renderer.globalData.fontManager.isLoaded &&
                (this.imagePreloader.loadedImages() ||
                  "canvas" !== this.renderer.rendererType) &&
                this.imagePreloader.loadedFootages() &&
                ((this.isLoaded = !0),
                dataManager.completeData(
                  this.animationData,
                  this.renderer.globalData.fontManager
                ),
                expressionsPlugin && expressionsPlugin.initExpressions(this),
                this.renderer.initItems(),
                setTimeout(
                  function () {
                    this.trigger("DOMLoaded");
                  }.bind(this),
                  0
                ),
                this.gotoFrame(),
                this.autoplay && this.play());
            }),
            (AnimationItem.prototype.resize = function () {
              this.renderer.updateContainerSize();
            }),
            (AnimationItem.prototype.setSubframe = function (t) {
              this.isSubframeEnabled = !!t;
            }),
            (AnimationItem.prototype.gotoFrame = function () {
              (this.currentFrame = this.isSubframeEnabled
                ? this.currentRawFrame
                : ~~this.currentRawFrame),
                this.timeCompleted !== this.totalFrames &&
                  this.currentFrame > this.timeCompleted &&
                  (this.currentFrame = this.timeCompleted),
                this.trigger("enterFrame"),
                this.renderFrame();
            }),
            (AnimationItem.prototype.renderFrame = function () {
              if (!1 !== this.isLoaded && this.renderer)
                try {
                  this.renderer.renderFrame(
                    this.currentFrame + this.firstFrame
                  );
                } catch (t) {
                  this.triggerRenderFrameError(t);
                }
            }),
            (AnimationItem.prototype.play = function (t) {
              (t && this.name !== t) ||
                (!0 === this.isPaused &&
                  ((this.isPaused = !1),
                  this.audioController.resume(),
                  this._idle && ((this._idle = !1), this.trigger("_active"))));
            }),
            (AnimationItem.prototype.pause = function (t) {
              (t && this.name !== t) ||
                (!1 === this.isPaused &&
                  ((this.isPaused = !0),
                  (this._idle = !0),
                  this.trigger("_idle"),
                  this.audioController.pause()));
            }),
            (AnimationItem.prototype.togglePause = function (t) {
              (t && this.name !== t) ||
                (!0 === this.isPaused ? this.play() : this.pause());
            }),
            (AnimationItem.prototype.stop = function (t) {
              (t && this.name !== t) ||
                (this.pause(),
                (this.playCount = 0),
                (this._completedLoop = !1),
                this.setCurrentRawFrameValue(0));
            }),
            (AnimationItem.prototype.getMarkerData = function (t) {
              for (var e, r = 0; r < this.markers.length; r += 1)
                if ((e = this.markers[r]).payload && e.payload.name === t)
                  return e;
              return null;
            }),
            (AnimationItem.prototype.goToAndStop = function (t, e, r) {
              (r && this.name !== r) ||
                ((r = Number(t)),
                isNaN(r)
                  ? (r = this.getMarkerData(t)) && this.goToAndStop(r.time, !0)
                  : e
                  ? this.setCurrentRawFrameValue(t)
                  : this.setCurrentRawFrameValue(t * this.frameModifier),
                this.pause());
            }),
            (AnimationItem.prototype.goToAndPlay = function (t, e, r) {
              var i;
              (r && this.name !== r) ||
                ((i = Number(t)),
                isNaN(i)
                  ? (t = this.getMarkerData(t)) &&
                    (t.duration
                      ? this.playSegments([t.time, t.time + t.duration], !0)
                      : this.goToAndStop(t.time, !0))
                  : this.goToAndStop(i, e, r),
                this.play());
            }),
            (AnimationItem.prototype.advanceTime = function (t) {
              var e;
              !0 !== this.isPaused &&
                !1 !== this.isLoaded &&
                ((e = !1),
                (t = this.currentRawFrame + t * this.frameModifier) >=
                  this.totalFrames - 1 && 0 < this.frameModifier
                  ? this.loop && this.playCount !== this.loop
                    ? t >= this.totalFrames
                      ? ((this.playCount += 1),
                        this.checkSegments(t % this.totalFrames) ||
                          (this.setCurrentRawFrameValue(t % this.totalFrames),
                          (this._completedLoop = !0),
                          this.trigger("loopComplete")))
                      : this.setCurrentRawFrameValue(t)
                    : this.checkSegments(
                        t > this.totalFrames ? t % this.totalFrames : 0
                      ) || ((e = !0), (t = this.totalFrames - 1))
                  : t < 0
                  ? this.checkSegments(t % this.totalFrames) ||
                    (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop)
                      ? ((e = !0), (t = 0))
                      : (this.setCurrentRawFrameValue(
                          this.totalFrames + (t % this.totalFrames)
                        ),
                        this._completedLoop
                          ? this.trigger("loopComplete")
                          : (this._completedLoop = !0)))
                  : this.setCurrentRawFrameValue(t),
                e &&
                  (this.setCurrentRawFrameValue(t),
                  this.pause(),
                  this.trigger("complete")));
            }),
            (AnimationItem.prototype.adjustSegment = function (t, e) {
              (this.playCount = 0),
                t[1] < t[0]
                  ? (0 < this.frameModifier &&
                      (this.playSpeed < 0
                        ? this.setSpeed(-this.playSpeed)
                        : this.setDirection(-1)),
                    (this.totalFrames = t[0] - t[1]),
                    (this.timeCompleted = this.totalFrames),
                    (this.firstFrame = t[1]),
                    this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
                  : t[1] > t[0] &&
                    (this.frameModifier < 0 &&
                      (this.playSpeed < 0
                        ? this.setSpeed(-this.playSpeed)
                        : this.setDirection(1)),
                    (this.totalFrames = t[1] - t[0]),
                    (this.timeCompleted = this.totalFrames),
                    (this.firstFrame = t[0]),
                    this.setCurrentRawFrameValue(0.001 + e)),
                this.trigger("segmentStart");
            }),
            (AnimationItem.prototype.setSegment = function (t, e) {
              var r = -1;
              this.isPaused &&
                (this.currentRawFrame + this.firstFrame < t
                  ? (r = t)
                  : this.currentRawFrame + this.firstFrame > e && (r = e - t)),
                (this.firstFrame = t),
                (this.totalFrames = e - t),
                (this.timeCompleted = this.totalFrames),
                -1 !== r && this.goToAndStop(r, !0);
            }),
            (AnimationItem.prototype.playSegments = function (t, e) {
              if ((e && (this.segments.length = 0), "object" == typeof t[0]))
                for (var r = t.length, i = 0; i < r; i += 1)
                  this.segments.push(t[i]);
              else this.segments.push(t);
              this.segments.length &&
                e &&
                this.adjustSegment(this.segments.shift(), 0),
                this.isPaused && this.play();
            }),
            (AnimationItem.prototype.resetSegments = function (t) {
              (this.segments.length = 0),
                this.segments.push([
                  this.animationData.ip,
                  this.animationData.op,
                ]),
                t && this.checkSegments(0);
            }),
            (AnimationItem.prototype.checkSegments = function (t) {
              return (
                !!this.segments.length &&
                (this.adjustSegment(this.segments.shift(), t), !0)
              );
            }),
            (AnimationItem.prototype.destroy = function (t) {
              (t && this.name !== t) ||
                !this.renderer ||
                (this.renderer.destroy(),
                this.imagePreloader.destroy(),
                this.trigger("destroy"),
                (this._cbs = null),
                (this.onEnterFrame = null),
                (this.onLoopComplete = null),
                (this.onComplete = null),
                (this.onSegmentStart = null),
                (this.onDestroy = null),
                (this.renderer = null),
                (this.renderer = null),
                (this.imagePreloader = null),
                (this.projectInterface = null));
            }),
            (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
              (this.currentRawFrame = t), this.gotoFrame();
            }),
            (AnimationItem.prototype.setSpeed = function (t) {
              (this.playSpeed = t), this.updaFrameModifier();
            }),
            (AnimationItem.prototype.setDirection = function (t) {
              (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
            }),
            (AnimationItem.prototype.setVolume = function (t, e) {
              (e && this.name !== e) || this.audioController.setVolume(t);
            }),
            (AnimationItem.prototype.getVolume = function () {
              return this.audioController.getVolume();
            }),
            (AnimationItem.prototype.mute = function (t) {
              (t && this.name !== t) || this.audioController.mute();
            }),
            (AnimationItem.prototype.unmute = function (t) {
              (t && this.name !== t) || this.audioController.unmute();
            }),
            (AnimationItem.prototype.updaFrameModifier = function () {
              (this.frameModifier =
                this.frameMult * this.playSpeed * this.playDirection),
                this.audioController.setRate(
                  this.playSpeed * this.playDirection
                );
            }),
            (AnimationItem.prototype.getPath = function () {
              return this.path;
            }),
            (AnimationItem.prototype.getAssetsPath = function (t) {
              var e,
                r = "";
              return (
                t.e
                  ? (r = t.p)
                  : this.assetsPath
                  ? (-1 !== (e = t.p).indexOf("images/") &&
                      (e = e.split("/")[1]),
                    (r = this.assetsPath + e))
                  : ((r = this.path), (r += t.u || ""), (r += t.p)),
                r
              );
            }),
            (AnimationItem.prototype.getAssetData = function (t) {
              for (var e = 0, r = this.assets.length; e < r; ) {
                if (t === this.assets[e].id) return this.assets[e];
                e += 1;
              }
              return null;
            }),
            (AnimationItem.prototype.hide = function () {
              this.renderer.hide();
            }),
            (AnimationItem.prototype.show = function () {
              this.renderer.show();
            }),
            (AnimationItem.prototype.getDuration = function (t) {
              return t ? this.totalFrames : this.totalFrames / this.frameRate;
            }),
            (AnimationItem.prototype.trigger = function (t) {
              if (this._cbs && this._cbs[t])
                switch (t) {
                  case "enterFrame":
                    this.triggerEvent(
                      t,
                      new BMEnterFrameEvent(
                        t,
                        this.currentFrame,
                        this.totalFrames,
                        this.frameModifier
                      )
                    );
                    break;
                  case "loopComplete":
                    this.triggerEvent(
                      t,
                      new BMCompleteLoopEvent(
                        t,
                        this.loop,
                        this.playCount,
                        this.frameMult
                      )
                    );
                    break;
                  case "complete":
                    this.triggerEvent(
                      t,
                      new BMCompleteEvent(t, this.frameMult)
                    );
                    break;
                  case "segmentStart":
                    this.triggerEvent(
                      t,
                      new BMSegmentStartEvent(
                        t,
                        this.firstFrame,
                        this.totalFrames
                      )
                    );
                    break;
                  case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                  default:
                    this.triggerEvent(t);
                }
              "enterFrame" === t &&
                this.onEnterFrame &&
                this.onEnterFrame.call(
                  this,
                  new BMEnterFrameEvent(
                    t,
                    this.currentFrame,
                    this.totalFrames,
                    this.frameMult
                  )
                ),
                "loopComplete" === t &&
                  this.onLoopComplete &&
                  this.onLoopComplete.call(
                    this,
                    new BMCompleteLoopEvent(
                      t,
                      this.loop,
                      this.playCount,
                      this.frameMult
                    )
                  ),
                "complete" === t &&
                  this.onComplete &&
                  this.onComplete.call(
                    this,
                    new BMCompleteEvent(t, this.frameMult)
                  ),
                "segmentStart" === t &&
                  this.onSegmentStart &&
                  this.onSegmentStart.call(
                    this,
                    new BMSegmentStartEvent(
                      t,
                      this.firstFrame,
                      this.totalFrames
                    )
                  ),
                "destroy" === t &&
                  this.onDestroy &&
                  this.onDestroy.call(this, new BMDestroyEvent(t, this));
            }),
            (AnimationItem.prototype.triggerRenderFrameError = function (t) {
              t = new BMRenderFrameErrorEvent(t, this.currentFrame);
              this.triggerEvent("error", t),
                this.onError && this.onError.call(this, t);
            }),
            (AnimationItem.prototype.triggerConfigError = function (t) {
              t = new BMConfigErrorEvent(t, this.currentFrame);
              this.triggerEvent("error", t),
                this.onError && this.onError.call(this, t);
            });
          var Expressions = {
              initExpressions: function (t) {
                var e = 0,
                  r = [];
                (t.renderer.compInterface = CompExpressionInterface(
                  t.renderer
                )),
                  t.renderer.globalData.projectInterface.registerComposition(
                    t.renderer
                  ),
                  (t.renderer.globalData.pushExpression = function () {
                    e += 1;
                  }),
                  (t.renderer.globalData.popExpression = function () {
                    0 == --e &&
                      (function () {
                        for (var t = r.length, e = 0; e < t; e += 1)
                          r[e].release();
                        r.length = 0;
                      })();
                  }),
                  (t.renderer.globalData.registerExpressionProperty = function (
                    t
                  ) {
                    -1 === r.indexOf(t) && r.push(t);
                  });
              },
            },
            expressionsPlugin = Expressions,
            ExpressionManager = (function () {
              var ob = {},
                Math = BMMath,
                window = null,
                document = null,
                XMLHttpRequest = null,
                fetch = null;
              function $bm_isInstanceOfArray(t) {
                return (
                  t.constructor === Array || t.constructor === Float32Array
                );
              }
              function isNumerable(t, e) {
                return (
                  "number" === t ||
                  "boolean" === t ||
                  "string" === t ||
                  e instanceof Number
                );
              }
              function $bm_neg(t) {
                var e = typeof t;
                if ("number" == e || "boolean" == e || t instanceof Number)
                  return -t;
                if ($bm_isInstanceOfArray(t)) {
                  for (var r = t.length, i = [], s = 0; s < r; s += 1)
                    i[s] = -t[s];
                  return i;
                }
                return t.propType ? t.v : -t;
              }
              var easeInBez = BezierFactory.getBezierEasing(
                  0.333,
                  0,
                  0.833,
                  0.833,
                  "easeIn"
                ).get,
                easeOutBez = BezierFactory.getBezierEasing(
                  0.167,
                  0.167,
                  0.667,
                  1,
                  "easeOut"
                ).get,
                easeInOutBez = BezierFactory.getBezierEasing(
                  0.33,
                  0,
                  0.667,
                  1,
                  "easeInOut"
                ).get;
              function sum(t, e) {
                var r = typeof t,
                  i = typeof e;
                if ("string" == r || "string" == i) return t + e;
                if (isNumerable(r, t) && isNumerable(i, e)) return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                  return ((t = t.slice(0))[0] += e), t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                  return ((e = e.slice(0))[0] = t + e[0]), e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                  for (
                    var s = 0, a = t.length, n = e.length, o = [];
                    s < a || s < n;

                  )
                    ("number" == typeof t[s] || t[s] instanceof Number) &&
                    ("number" == typeof e[s] || e[s] instanceof Number)
                      ? (o[s] = t[s] + e[s])
                      : (o[s] = void 0 === e[s] ? t[s] : t[s] || e[s]),
                      (s += 1);
                  return o;
                }
                return 0;
              }
              var add = sum;
              function sub(t, e) {
                var r = typeof t,
                  i = typeof e;
                if (isNumerable(r, t) && isNumerable(i, e))
                  return (
                    (t = "string" == r ? parseInt(t, 10) : t) -
                    (e = "string" == i ? parseInt(e, 10) : e)
                  );
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                  return ((t = t.slice(0))[0] -= e), t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                  return ((e = e.slice(0))[0] = t - e[0]), e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                  for (
                    var s = 0, a = t.length, n = e.length, o = [];
                    s < a || s < n;

                  )
                    ("number" == typeof t[s] || t[s] instanceof Number) &&
                    ("number" == typeof e[s] || e[s] instanceof Number)
                      ? (o[s] = t[s] - e[s])
                      : (o[s] = void 0 === e[s] ? t[s] : t[s] || e[s]),
                      (s += 1);
                  return o;
                }
                return 0;
              }
              function mul(t, e) {
                var r,
                  i,
                  s,
                  a = typeof t,
                  n = typeof e;
                if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                  for (
                    s = t.length, r = createTypedArray("float32", s), i = 0;
                    i < s;
                    i += 1
                  )
                    r[i] = t[i] * e;
                  return r;
                }
                if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                  for (
                    s = e.length, r = createTypedArray("float32", s), i = 0;
                    i < s;
                    i += 1
                  )
                    r[i] = t * e[i];
                  return r;
                }
                return 0;
              }
              function div(t, e) {
                var r,
                  i,
                  s,
                  a = typeof t,
                  n = typeof e;
                if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                  for (
                    s = t.length, r = createTypedArray("float32", s), i = 0;
                    i < s;
                    i += 1
                  )
                    r[i] = t[i] / e;
                  return r;
                }
                if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                  for (
                    s = e.length, r = createTypedArray("float32", s), i = 0;
                    i < s;
                    i += 1
                  )
                    r[i] = t / e[i];
                  return r;
                }
                return 0;
              }
              function mod(t, e) {
                return (
                  (t = "string" == typeof t ? parseInt(t, 10) : t) %
                  (e = "string" == typeof e ? parseInt(e, 10) : e)
                );
              }
              var $bm_sum = sum,
                $bm_sub = sub,
                $bm_mul = mul,
                $bm_div = div,
                $bm_mod = mod;
              function clamp(t, e, r) {
                var i;
                return (
                  r < e && ((i = r), (r = e), (e = i)),
                  Math.min(Math.max(t, e), r)
                );
              }
              function radiansToDegrees(t) {
                return t / degToRads;
              }
              var radians_to_degrees = radiansToDegrees;
              function degreesToRadians(t) {
                return t * degToRads;
              }
              var degrees_to_radians = radiansToDegrees,
                helperLengthArray = [0, 0, 0, 0, 0, 0];
              function length(t, e) {
                if ("number" == typeof t || t instanceof Number)
                  return Math.abs(t - (e = e || 0));
                for (
                  var r = Math.min(
                      t.length,
                      (e = e || helperLengthArray).length
                    ),
                    i = 0,
                    s = 0;
                  s < r;
                  s += 1
                )
                  i += Math.pow(e[s] - t[s], 2);
                return Math.sqrt(i);
              }
              function normalize(t) {
                return div(t, length(t));
              }
              function rgbToHsl(t) {
                var e = t[0],
                  r = t[1],
                  i = t[2],
                  s = Math.max(e, r, i),
                  a = Math.min(e, r, i);
                if (s === a) 0;
                else {
                  switch (s) {
                    case e:
                      0;
                      break;
                    case r:
                      0;
                      break;
                    case i:
                      0;
                  }
                  0;
                }
                return t[3], 1;
              }
              function hue2rgb(t, e, r) {
                return (
                  r < 0 && (r += 1),
                  1 < r && --r,
                  r < 1 / 6
                    ? t + 6 * (e - t) * r
                    : r < 0.5
                    ? e
                    : r < 2 / 3
                    ? t + (e - t) * (2 / 3 - r) * 6
                    : t
                );
              }
              function hslToRgb(t) {
                var e = t[0],
                  r = t[1],
                  i = t[2];
                return (
                  0 === r
                    ? 0
                    : (hue2rgb(
                        (r =
                          2 * i - (i = i < 0.5 ? i * (1 + r) : i + r - i * r)),
                        i,
                        e + 1 / 3
                      ),
                      hue2rgb(r, i, e),
                      hue2rgb(r, i, e - 1 / 3)),
                  t[3],
                  1
                );
              }
              function linear(t, e, r, i, s) {
                var a;
                if (
                  ((void 0 !== i && void 0 !== s) ||
                    ((i = e), (s = r), (e = 0), (r = 1)),
                  r < e && ((a = r), (r = e), (e = a)),
                  t <= e)
                )
                  return i;
                if (r <= t) return s;
                var n = r === e ? 0 : (t - e) / (r - e);
                if (!i.length) return i + (s - i) * n;
                for (
                  var o = i.length, h = createTypedArray("float32", o), l = 0;
                  l < o;
                  l += 1
                )
                  h[l] = i[l] + (s[l] - i[l]) * n;
                return h;
              }
              function random(t, e) {
                if (
                  (void 0 === e &&
                    (void 0 === t
                      ? ((t = 0), (e = 1))
                      : ((e = t), (t = void 0))),
                  e.length)
                ) {
                  var r = e.length;
                  t = t || createTypedArray("float32", r);
                  for (
                    var i = createTypedArray("float32", r),
                      s = BMMath.random(),
                      a = 0;
                    a < r;
                    a += 1
                  )
                    i[a] = t[a] + s * (e[a] - t[a]);
                  return i;
                }
                return (t = void 0 === t ? 0 : t) + BMMath.random() * (e - t);
              }
              function createPath(t, e, r, i) {
                var s = t.length,
                  a = shapePool.newElement();
                a.setPathData(!!i, s);
                for (var n, o, h = [0, 0], l = 0; l < s; l += 1)
                  (n = e && e[l] ? e[l] : h),
                    (o = r && r[l] ? r[l] : h),
                    a.setTripleAt(
                      t[l][0],
                      t[l][1],
                      o[0] + t[l][0],
                      o[1] + t[l][1],
                      n[0] + t[l][0],
                      n[1] + t[l][1],
                      l,
                      !0
                    );
                return a;
              }
              function initiateExpression(elem, data, property) {
                var val = data.x,
                  needsVelocity = /velocity(?![\w\d])/.test(val),
                  _needsRandom = -1 !== val.indexOf("random"),
                  elemType = elem.data.ty,
                  transform,
                  $bm_transform,
                  content,
                  effect,
                  thisProperty = property;
                (thisProperty.valueAtTime = thisProperty.getValueAtTime),
                  Object.defineProperty(thisProperty, "value", {
                    get: function () {
                      return thisProperty.v;
                    },
                  }),
                  (elem.comp.frameDuration =
                    1 / elem.comp.globalData.frameRate),
                  (elem.comp.displayStartTime = 0);
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                  outPoint = elem.data.op / elem.comp.globalData.frameRate,
                  width = elem.data.sw || 0,
                  height = elem.data.sh || 0,
                  name = elem.data.nm,
                  loopIn,
                  loop_in,
                  loopOut,
                  loop_out,
                  smooth,
                  toWorld,
                  fromWorld,
                  fromComp,
                  toComp,
                  fromCompToSurface,
                  position,
                  rotation,
                  anchorPoint,
                  scale,
                  thisLayer,
                  thisComp,
                  mask,
                  valueAtTime,
                  velocityAtTime,
                  scoped_bm_rt,
                  expression_function = eval(
                    "[function _expression_function(){" +
                      val +
                      ";scoped_bm_rt=$bm_rt}]"
                  )[0],
                  numKeys = property.kf ? data.k.length : 0,
                  active = !this.data || !0 !== this.data.hd,
                  wiggle = function (t, e) {
                    for (
                      var r = this.pv.length || 1,
                        i = createTypedArray("float32", r),
                        s = Math.floor(5 * time),
                        a = 0,
                        n = 0;
                      a < s;

                    ) {
                      for (n = 0; n < r; n += 1)
                        i[n] += -e + 2 * e * BMMath.random();
                      a += 1;
                    }
                    var o = 5 * time,
                      h = o - Math.floor(o),
                      l = createTypedArray("float32", r);
                    if (1 < r) {
                      for (n = 0; n < r; n += 1)
                        l[n] =
                          this.pv[n] +
                          i[n] +
                          (-e + 2 * e * BMMath.random()) * h;
                      return l;
                    }
                    return this.pv + i[0] + (-e + 2 * e * BMMath.random()) * h;
                  }.bind(this);
                function loopInDuration(t, e) {
                  return loopIn(t, e, !0);
                }
                function loopOutDuration(t, e) {
                  return loopOut(t, e, !0);
                }
                thisProperty.loopIn &&
                  ((loopIn = thisProperty.loopIn.bind(thisProperty)),
                  (loop_in = loopIn)),
                  thisProperty.loopOut &&
                    ((loopOut = thisProperty.loopOut.bind(thisProperty)),
                    (loop_out = loopOut)),
                  thisProperty.smooth &&
                    (smooth = thisProperty.smooth.bind(thisProperty)),
                  this.getValueAtTime &&
                    (valueAtTime = this.getValueAtTime.bind(this)),
                  this.getVelocityAtTime &&
                    (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(
                    elem.comp.globalData.projectInterface
                  ),
                  time,
                  velocity,
                  value,
                  text,
                  textIndex,
                  textTotal,
                  selectorValue;
                function lookAt(t, e) {
                  (t = [e[0] - t[0], e[1] - t[1], e[2] - t[2]]),
                    Math.atan2(t[0], Math.sqrt(t[1] * t[1] + t[2] * t[2]));
                  return Math.atan2(t[1], t[2]), 1;
                }
                function easeOut(t, e, r, i, s) {
                  return applyEase(easeOutBez, t, e, r, i, s);
                }
                function easeIn(t, e, r, i, s) {
                  return applyEase(easeInBez, t, e, r, i, s);
                }
                function ease(t, e, r, i, s) {
                  return applyEase(easeInOutBez, t, e, r, i, s);
                }
                function applyEase(t, e, r, i, s, a) {
                  void 0 === s ? ((s = r), (a = i)) : (e = (e - r) / (i - r)),
                    1 < e ? (e = 1) : e < 0 && (e = 0);
                  var n = t(e);
                  if ($bm_isInstanceOfArray(s)) {
                    for (
                      var o = s.length,
                        h = createTypedArray("float32", o),
                        l = 0;
                      l < o;
                      l += 1
                    )
                      h[l] = (a[l] - s[l]) * n + s[l];
                    return h;
                  }
                  return (a - s) * n + s;
                }
                function nearestKey(t) {
                  var e,
                    r,
                    i,
                    s = data.k.length;
                  if (data.k.length && "number" != typeof data.k[0])
                    if (
                      ((r = -1),
                      (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                    )
                      (r = 1), (i = data.k[0].t);
                    else {
                      for (e = 0; e < s - 1; e += 1) {
                        if (t === data.k[e].t) {
                          (r = e + 1), (i = data.k[e].t);
                          break;
                        }
                        if (t > data.k[e].t && t < data.k[e + 1].t) {
                          i =
                            t - data.k[e].t > data.k[e + 1].t - t
                              ? ((r = e + 2), data.k[e + 1].t)
                              : ((r = e + 1), data.k[e].t);
                          break;
                        }
                      }
                      -1 === r && ((r = e + 1), (i = data.k[e].t));
                    }
                  else i = r = 0;
                  var a = {};
                  return (
                    (a.index = r),
                    (a.time = i / elem.comp.globalData.frameRate),
                    a
                  );
                }
                function key(t) {
                  if (!data.k.length || "number" == typeof data.k[0])
                    throw new Error(
                      "The property has no keyframe at index " + t
                    );
                  for (
                    var e = {
                        time: data.k[--t].t / elem.comp.globalData.frameRate,
                        value: [],
                      },
                      r = Object.prototype.hasOwnProperty.call(data.k[t], "s")
                        ? data.k[t].s
                        : data.k[t - 1].e,
                      i = r.length,
                      s = 0;
                    s < i;
                    s += 1
                  )
                    (e[s] = r[s]), (e.value[s] = r[s]);
                  return e;
                }
                function framesToTime(t, e) {
                  return t / (e = e || elem.comp.globalData.frameRate);
                }
                function timeToFrames(t, e) {
                  return (
                    (t = !t && 0 !== t ? time : t) *
                    (e = e || elem.comp.globalData.frameRate)
                  );
                }
                function seedRandom(t) {
                  BMMath.seedrandom(randSeed + t);
                }
                function sourceRectAtTime() {
                  return elem.sourceRectAtTime();
                }
                function substring(t, e) {
                  return (
                    "string" == typeof value &&
                    (void 0 === e ? value.substring(t) : value.substring(t, e))
                  );
                }
                function substr(t, e) {
                  return (
                    "string" == typeof value &&
                    (void 0 === e ? value.substr(t) : value.substr(t, e))
                  );
                }
                function posterizeTime(t) {
                  (time = 0 === t ? 0 : Math.floor(time * t) / t),
                    (value = valueAtTime(time));
                }
                var index = elem.data.ind,
                  hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                  parent,
                  randSeed = Math.floor(1e6 * Math.random()),
                  globalData = elem.globalData;
                function executeExpression(t) {
                  return (
                    (value = t),
                    _needsRandom && seedRandom(randSeed),
                    this.frameExpressionId === elem.globalData.frameId &&
                    "textSelector" !== this.propType
                      ? value
                      : ("textSelector" === this.propType &&
                          ((textIndex = this.textIndex),
                          (textTotal = this.textTotal),
                          (selectorValue = this.selectorValue)),
                        thisLayer ||
                          ((text = elem.layerInterface.text),
                          (thisLayer = elem.layerInterface),
                          (thisComp = elem.comp.compInterface),
                          (toWorld = thisLayer.toWorld.bind(thisLayer)),
                          (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                          (fromComp = thisLayer.fromComp.bind(thisLayer)),
                          (toComp = thisLayer.toComp.bind(thisLayer)),
                          (mask = thisLayer.mask
                            ? thisLayer.mask.bind(thisLayer)
                            : null),
                          (fromCompToSurface = fromComp)),
                        transform ||
                          ((transform = elem.layerInterface(
                            "ADBE Transform Group"
                          )),
                          ($bm_transform = transform) &&
                            (anchorPoint = transform.anchorPoint)),
                        4 !== elemType ||
                          content ||
                          (content = thisLayer("ADBE Root Vectors Group")),
                        (effect = effect || thisLayer(4)),
                        (hasParent = !(
                          !elem.hierarchy || !elem.hierarchy.length
                        )) &&
                          !parent &&
                          (parent = elem.hierarchy[0].layerInterface),
                        (time =
                          this.comp.renderedFrame /
                          this.comp.globalData.frameRate),
                        needsVelocity && (velocity = velocityAtTime(time)),
                        expression_function(),
                        (this.frameExpressionId = elem.globalData.frameId),
                        (scoped_bm_rt =
                          "shape" === scoped_bm_rt.propType
                            ? scoped_bm_rt.v
                            : scoped_bm_rt))
                  );
                }
                return executeExpression;
              }
              return (ob.initiateExpression = initiateExpression), ob;
            })(),
            expressionHelpers = {
              searchExpressions: function (t, e, r) {
                e.x &&
                  ((r.k = !0),
                  (r.x = !0),
                  (r.initiateExpression = ExpressionManager.initiateExpression),
                  r.effectsSequence.push(
                    r.initiateExpression(t, e, r).bind(r)
                  ));
              },
              getSpeedAtTime: function (t) {
                var e = this.getValueAtTime(t),
                  r = this.getValueAtTime(t + -0.01),
                  i = 0;
                if (e.length) {
                  for (var s = 0; s < e.length; s += 1)
                    i += Math.pow(r[s] - e[s], 2);
                  i = 100 * Math.sqrt(i);
                } else i = 0;
                return i;
              },
              getVelocityAtTime: function (t) {
                if (void 0 !== this.vel) return this.vel;
                var e,
                  r,
                  i = this.getValueAtTime(t),
                  s = this.getValueAtTime(t + -0.001);
                if (i.length)
                  for (
                    e = createTypedArray("float32", i.length), r = 0;
                    r < i.length;
                    r += 1
                  )
                    e[r] = (s[r] - i[r]) / -0.001;
                else e = (s - i) / -0.001;
                return e;
              },
              getValueAtTime: function (t) {
                return (
                  (t *= this.elem.globalData.frameRate),
                  (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                    ((this._cachingAtTime.lastIndex =
                      this._cachingAtTime.lastFrame < t
                        ? this._cachingAtTime.lastIndex
                        : 0),
                    (this._cachingAtTime.value = this.interpolateValue(
                      t,
                      this._cachingAtTime
                    )),
                    (this._cachingAtTime.lastFrame = t)),
                  this._cachingAtTime.value
                );
              },
              getStaticValueAtTime: function () {
                return this.pv;
              },
              setGroupProperty: function (t) {
                this.propertyGroup = t;
              },
            };
          !(function () {
            function n(t, e, r) {
              if (!this.k || !this.keyframes) return this.pv;
              t = t ? t.toLowerCase() : "";
              var i,
                s,
                a,
                n,
                o,
                h = this.comp.renderedFrame,
                l = this.keyframes,
                p = l[l.length - 1].t;
              if (h <= p) return this.pv;
              if (
                (r
                  ? (s =
                      p -
                      (i = e
                        ? Math.abs(p - this.elem.comp.globalData.frameRate * e)
                        : Math.max(0, p - this.elem.data.ip)))
                  : ((!e || e > l.length - 1) && (e = l.length - 1),
                    (i = p - (s = l[l.length - 1 - e].t))),
                "pingpong" === t)
              ) {
                if (Math.floor((h - s) / i) % 2 != 0)
                  return this.getValueAtTime(
                    (i - ((h - s) % i) + s) / this.comp.globalData.frameRate,
                    0
                  );
              } else {
                if ("offset" === t) {
                  var m = this.getValueAtTime(
                      s / this.comp.globalData.frameRate,
                      0
                    ),
                    f = this.getValueAtTime(
                      p / this.comp.globalData.frameRate,
                      0
                    ),
                    c = this.getValueAtTime(
                      (((h - s) % i) + s) / this.comp.globalData.frameRate,
                      0
                    ),
                    d = Math.floor((h - s) / i);
                  if (this.pv.length) {
                    for (
                      n = (o = new Array(m.length)).length, a = 0;
                      a < n;
                      a += 1
                    )
                      o[a] = (f[a] - m[a]) * d + c[a];
                    return o;
                  }
                  return (f - m) * d + c;
                }
                if ("continue" === t) {
                  var u = this.getValueAtTime(
                      p / this.comp.globalData.frameRate,
                      0
                    ),
                    y = this.getValueAtTime(
                      (p - 0.001) / this.comp.globalData.frameRate,
                      0
                    );
                  if (this.pv.length) {
                    for (
                      n = (o = new Array(u.length)).length, a = 0;
                      a < n;
                      a += 1
                    )
                      o[a] =
                        u[a] +
                        ((u[a] - y[a]) *
                          ((h - p) / this.comp.globalData.frameRate)) /
                          5e-4;
                    return o;
                  }
                  return u + ((h - p) / 0.001) * (u - y);
                }
              }
              return this.getValueAtTime(
                (((h - s) % i) + s) / this.comp.globalData.frameRate,
                0
              );
            }
            function o(t, e, r) {
              if (!this.k) return this.pv;
              t = t ? t.toLowerCase() : "";
              var i,
                s,
                a,
                n,
                o,
                h = this.comp.renderedFrame,
                l = this.keyframes,
                p = l[0].t;
              if (p <= h) return this.pv;
              if (
                (r
                  ? (s =
                      p +
                      (i = e
                        ? Math.abs(this.elem.comp.globalData.frameRate * e)
                        : Math.max(0, this.elem.data.op - p)))
                  : (i =
                      (s =
                        l[(e = !e || e > l.length - 1 ? l.length - 1 : e)].t) -
                      p),
                "pingpong" === t)
              ) {
                if (Math.floor((p - h) / i) % 2 == 0)
                  return this.getValueAtTime(
                    (((p - h) % i) + p) / this.comp.globalData.frameRate,
                    0
                  );
              } else {
                if ("offset" === t) {
                  var m = this.getValueAtTime(
                      p / this.comp.globalData.frameRate,
                      0
                    ),
                    f = this.getValueAtTime(
                      s / this.comp.globalData.frameRate,
                      0
                    ),
                    c = this.getValueAtTime(
                      (i - ((p - h) % i) + p) / this.comp.globalData.frameRate,
                      0
                    ),
                    d = Math.floor((p - h) / i) + 1;
                  if (this.pv.length) {
                    for (
                      n = (o = new Array(m.length)).length, a = 0;
                      a < n;
                      a += 1
                    )
                      o[a] = c[a] - (f[a] - m[a]) * d;
                    return o;
                  }
                  return c - (f - m) * d;
                }
                if ("continue" === t) {
                  var u = this.getValueAtTime(
                      p / this.comp.globalData.frameRate,
                      0
                    ),
                    y = this.getValueAtTime(
                      (p + 0.001) / this.comp.globalData.frameRate,
                      0
                    );
                  if (this.pv.length) {
                    for (
                      n = (o = new Array(u.length)).length, a = 0;
                      a < n;
                      a += 1
                    )
                      o[a] = u[a] + ((u[a] - y[a]) * (p - h)) / 0.001;
                    return o;
                  }
                  return u + ((u - y) * (p - h)) / 0.001;
                }
              }
              return this.getValueAtTime(
                (i - (((p - h) % i) + p)) / this.comp.globalData.frameRate,
                0
              );
            }
            function h(t, e) {
              if (!this.k) return this.pv;
              if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1))
                return this.pv;
              for (
                var r,
                  i = this.comp.renderedFrame / this.comp.globalData.frameRate,
                  s = i - t,
                  a = 1 < e ? (i + t - s) / (e - 1) : 1,
                  n = 0,
                  o = 0,
                  h = this.pv.length
                    ? createTypedArray("float32", this.pv.length)
                    : 0;
                n < e;

              ) {
                if (((r = this.getValueAtTime(s + n * a)), this.pv.length))
                  for (o = 0; o < this.pv.length; o += 1) h[o] += r[o];
                else h += r;
                n += 1;
              }
              if (this.pv.length)
                for (o = 0; o < this.pv.length; o += 1) h[o] /= e;
              else h /= e;
              return h;
            }
            var i = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function (t, e, r) {
              r = i(t, e, r);
              return (
                r.dynamicProperties.length
                  ? (r.getValueAtTime = function (t) {
                      this._transformCachingAtTime ||
                        (this._transformCachingAtTime = { v: new Matrix() });
                      var e,
                        r,
                        i,
                        s,
                        a,
                        n,
                        o = this._transformCachingAtTime.v;
                      return (
                        o.cloneFromProps(this.pre.props),
                        this.appliedTransformations < 1 &&
                          ((e = this.a.getValueAtTime(t)),
                          o.translate(
                            -e[0] * this.a.mult,
                            -e[1] * this.a.mult,
                            e[2] * this.a.mult
                          )),
                        this.appliedTransformations < 2 &&
                          ((r = this.s.getValueAtTime(t)),
                          o.scale(
                            r[0] * this.s.mult,
                            r[1] * this.s.mult,
                            r[2] * this.s.mult
                          )),
                        this.sk &&
                          this.appliedTransformations < 3 &&
                          ((e = this.sk.getValueAtTime(t)),
                          (r = this.sa.getValueAtTime(t)),
                          o.skewFromAxis(-e * this.sk.mult, r * this.sa.mult)),
                        this.r && this.appliedTransformations < 4
                          ? ((i = this.r.getValueAtTime(t)),
                            o.rotate(-i * this.r.mult))
                          : !this.r &&
                            this.appliedTransformations < 4 &&
                            ((i = this.rz.getValueAtTime(t)),
                            (s = this.ry.getValueAtTime(t)),
                            (a = this.rx.getValueAtTime(t)),
                            (n = this.or.getValueAtTime(t)),
                            o
                              .rotateZ(-i * this.rz.mult)
                              .rotateY(s * this.ry.mult)
                              .rotateX(a * this.rx.mult)
                              .rotateZ(-n[2] * this.or.mult)
                              .rotateY(n[1] * this.or.mult)
                              .rotateX(n[0] * this.or.mult)),
                        this.data.p && this.data.p.s
                          ? ((s = this.px.getValueAtTime(t)),
                            (a = this.py.getValueAtTime(t)),
                            this.data.p.z
                              ? ((n = this.pz.getValueAtTime(t)),
                                o.translate(
                                  s * this.px.mult,
                                  a * this.py.mult,
                                  -n * this.pz.mult
                                ))
                              : o.translate(
                                  s * this.px.mult,
                                  a * this.py.mult,
                                  0
                                ))
                          : ((t = this.p.getValueAtTime(t)),
                            o.translate(
                              t[0] * this.p.mult,
                              t[1] * this.p.mult,
                              -t[2] * this.p.mult
                            )),
                        o
                      );
                    }.bind(r))
                  : (r.getValueAtTime = function () {
                      return this.v.clone(new Matrix());
                    }.bind(r)),
                (r.setGroupProperty = expressionHelpers.setGroupProperty),
                r
              );
            };
            var l = PropertyFactory.getProp;
            PropertyFactory.getProp = function (t, e, r, i, s) {
              var a = l(t, e, r, i, s);
              a.kf
                ? (a.getValueAtTime = expressionHelpers.getValueAtTime.bind(a))
                : (a.getValueAtTime =
                    expressionHelpers.getStaticValueAtTime.bind(a)),
                (a.setGroupProperty = expressionHelpers.setGroupProperty),
                (a.loopOut = n),
                (a.loopIn = o),
                (a.smooth = h),
                (a.getVelocityAtTime =
                  expressionHelpers.getVelocityAtTime.bind(a)),
                (a.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(a)),
                (a.numKeys = 1 === e.a ? e.k.length : 0),
                (a.propertyIndex = e.ix);
              i = 0;
              return (
                0 !== r &&
                  (i = createTypedArray(
                    "float32",
                    (1 === e.a ? e.k[0].s : e.k).length
                  )),
                (a._cachingAtTime = {
                  lastFrame: initialDefaultFrame,
                  lastIndex: 0,
                  value: i,
                }),
                expressionHelpers.searchExpressions(t, e, a),
                a.k && s.addDynamicProperty(a),
                a
              );
            };
            var t = ShapePropertyFactory.getConstructorFunction(),
              e = ShapePropertyFactory.getKeyframedConstructorFunction();
            function r() {}
            (r.prototype = {
              vertices: function (t, e) {
                this.k && this.getValue();
                for (
                  var r = this.v,
                    i = (r = void 0 !== e ? this.getValueAtTime(e, 0) : r)
                      ._length,
                    s = r[t],
                    a = r.v,
                    n = createSizedArray(i),
                    o = 0;
                  o < i;
                  o += 1
                )
                  n[o] =
                    "i" === t || "o" === t
                      ? [s[o][0] - a[o][0], s[o][1] - a[o][1]]
                      : [s[o][0], s[o][1]];
                return n;
              },
              points: function (t) {
                return this.vertices("v", t);
              },
              inTangents: function (t) {
                return this.vertices("i", t);
              },
              outTangents: function (t) {
                return this.vertices("o", t);
              },
              isClosed: function () {
                return this.v.c;
              },
              pointOnPath: function (t, e) {
                var r = this.v;
                void 0 !== e && (r = this.getValueAtTime(e, 0)),
                  this._segmentsLength ||
                    (this._segmentsLength = bez.getSegmentsLength(r));
                for (
                  var e = this._segmentsLength,
                    i = e.lengths,
                    s = e.totalLength * t,
                    a = 0,
                    n = i.length,
                    o = 0;
                  a < n;

                ) {
                  if (o + i[a].addedLength > s) {
                    var h = a,
                      l = r.c && a === n - 1 ? 0 : a + 1,
                      p = (s - o) / i[a].addedLength,
                      m = bez.getPointInSegment(
                        r.v[h],
                        r.v[l],
                        r.o[h],
                        r.i[l],
                        p,
                        i[a]
                      );
                    break;
                  }
                  (o += i[a].addedLength), (a += 1);
                }
                return (m =
                  m ||
                  (r.c
                    ? [r.v[0][0], r.v[0][1]]
                    : [r.v[r._length - 1][0], r.v[r._length - 1][1]]));
              },
              vectorOnPath: function (t, e, r) {
                1 == t ? (t = this.v.c) : 0 == t && (t = 0.999);
                var i = this.pointOnPath(t, e),
                  t = this.pointOnPath(t + 0.001, e),
                  e = t[0] - i[0],
                  t = t[1] - i[1],
                  i = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2));
                return 0 === i
                  ? [0, 0]
                  : "tangent" === r
                  ? [e / i, t / i]
                  : [-t / i, e / i];
              },
              tangentOnPath: function (t, e) {
                return this.vectorOnPath(t, e, "tangent");
              },
              normalOnPath: function (t, e) {
                return this.vectorOnPath(t, e, "normal");
              },
              setGroupProperty: expressionHelpers.setGroupProperty,
              getValueAtTime: expressionHelpers.getStaticValueAtTime,
            }),
              extendPrototype([r], t),
              extendPrototype([r], e),
              (e.prototype.getValueAtTime = function (t) {
                return (
                  this._cachingAtTime ||
                    (this._cachingAtTime = {
                      shapeValue: shapePool.clone(this.pv),
                      lastIndex: 0,
                      lastTime: initialDefaultFrame,
                    }),
                  (t *= this.elem.globalData.frameRate),
                  (t -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                    ((this._cachingAtTime.lastIndex =
                      this._cachingAtTime.lastTime < t
                        ? this._caching.lastIndex
                        : 0),
                    (this._cachingAtTime.lastTime = t),
                    this.interpolateShape(
                      t,
                      this._cachingAtTime.shapeValue,
                      this._cachingAtTime
                    )),
                  this._cachingAtTime.shapeValue
                );
              }),
              (e.prototype.initiateExpression =
                ExpressionManager.initiateExpression);
            var a = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function (t, e, r, i, s) {
              s = a(t, e, r, i, s);
              return (
                (s.propertyIndex = e.ix),
                (s.lock = !1),
                3 === r
                  ? expressionHelpers.searchExpressions(t, e.pt, s)
                  : 4 === r && expressionHelpers.searchExpressions(t, e.ks, s),
                s.k && t.addDynamicProperty(s),
                s
              );
            };
          })(),
            (TextProperty.prototype.getExpressionValue = function (t, e) {
              var r = this.calculateExpression(e);
              if (t.t === r) return t;
              e = {};
              return (
                this.copyData(e, t),
                (e.t = r.toString()),
                (e.__complete = !1),
                e
              );
            }),
            (TextProperty.prototype.searchProperty = function () {
              var t = this.searchKeyframes(),
                e = this.searchExpressions();
              return (this.kf = t || e), this.kf;
            }),
            (TextProperty.prototype.searchExpressions = function () {
              return this.data.d.x
                ? ((this.calculateExpression =
                    ExpressionManager.initiateExpression.bind(this)(
                      this.elem,
                      this.data.d,
                      this
                    )),
                  this.addEffect(this.getExpressionValue.bind(this)),
                  !0)
                : null;
            });
          var ShapePathInterface = function (t, e, r) {
              var i = e.sh;
              function s(t) {
                return "Shape" === t ||
                  "shape" === t ||
                  "Path" === t ||
                  "path" === t ||
                  "ADBE Vector Shape" === t ||
                  2 === t
                  ? s.path
                  : null;
              }
              e = propertyGroupFactory(s, r);
              return (
                i.setGroupProperty(PropertyInterface("Path", e)),
                Object.defineProperties(s, {
                  path: {
                    get: function () {
                      return i.k && i.getValue(), i;
                    },
                  },
                  shape: {
                    get: function () {
                      return i.k && i.getValue(), i;
                    },
                  },
                  _name: { value: t.nm },
                  ix: { value: t.ix },
                  propertyIndex: { value: t.ix },
                  mn: { value: t.mn },
                  propertyGroup: { value: r },
                }),
                s
              );
            },
            propertyGroupFactory = function (e, r) {
              return function (t) {
                return (t = void 0 === t ? 1 : t) <= 0 ? e : r(t - 1);
              };
            },
            PropertyInterface = function (t, e) {
              var r = { _name: t };
              return function (t) {
                return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1);
              };
            },
            ShapeExpressionInterface = function (t, e, i) {
              var s;
              function r(t) {
                if ("number" == typeof t)
                  return 0 === (t = void 0 === t ? 1 : t) ? i : s[t - 1];
                for (var e = 0, r = s.length; e < r; ) {
                  if (s[e]._name === t) return s[e];
                  e += 1;
                }
                return null;
              }
              return (
                (r.propertyGroup = propertyGroupFactory(r, function () {
                  return i;
                })),
                (s = RR(t, e, r.propertyGroup)),
                (r.numProperties = s.length),
                (r._name = "Contents"),
                r
              );
            },
            TextExpressionInterface = function (e) {
              var r;
              function i(t) {
                return "ADBE Text Document" !== t ? null : i.sourceText;
              }
              return (
                Object.defineProperty(i, "sourceText", {
                  get: function () {
                    e.textProperty.getValue();
                    var t = e.textProperty.currentData.t;
                    return (
                      void 0 !== t &&
                        ((e.textProperty.currentData.t = void 0),
                        ((r = new String(t)).value = t || new String(t))),
                      r
                    );
                  },
                }),
                i
              );
            },
            LayerExpressionInterface = function (e) {
              var r;
              function i(t) {
                switch (t) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return i.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return r;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return i.effect;
                  case "ADBE Text Properties":
                    return i.textInterface;
                  default:
                    return null;
                }
              }
              (i.getMatrix = $T),
                (i.invertPoint = eU),
                (i.applyPoint = dU),
                (i.toWorld = aU),
                (i.toWorldVec = _T),
                (i.fromWorld = cU),
                (i.fromWorldVec = bU),
                (i.toComp = aU),
                (i.fromComp = fU),
                (i.sampleImage = gU),
                (i.sourceRectAtTime = e.sourceRectAtTime.bind(e));
              var t = getDescriptor(
                (r = TransformExpressionInterface(
                  (i._elem = e).finalTransform.mProp
                )),
                "anchorPoint"
              );
              return (
                Object.defineProperties(i, {
                  hasParent: {
                    get: function () {
                      return e.hierarchy.length;
                    },
                  },
                  parent: {
                    get: function () {
                      return e.hierarchy[0].layerInterface;
                    },
                  },
                  rotation: getDescriptor(r, "rotation"),
                  scale: getDescriptor(r, "scale"),
                  position: getDescriptor(r, "position"),
                  opacity: getDescriptor(r, "opacity"),
                  anchorPoint: t,
                  anchor_point: t,
                  transform: {
                    get: function () {
                      return r;
                    },
                  },
                  active: {
                    get: function () {
                      return e.isInRange;
                    },
                  },
                }),
                (i.startTime = e.data.st),
                (i.index = e.data.ind),
                (i.source = e.data.refId),
                (i.height = 0 === e.data.ty ? e.data.h : 100),
                (i.width = 0 === e.data.ty ? e.data.w : 100),
                (i.inPoint = e.data.ip / e.comp.globalData.frameRate),
                (i.outPoint = e.data.op / e.comp.globalData.frameRate),
                (i._name = e.data.nm),
                (i.registerMaskInterface = function (t) {
                  i.mask = new MaskManagerInterface(t, e);
                }),
                (i.registerEffectsInterface = function (t) {
                  i.effect = t;
                }),
                i
              );
            },
            FootageInterface = function (t) {
              function e(t) {
                return "Data" === t ? e.dataInterface : null;
              }
              return (
                (e._name = "Data"),
                (e.dataInterface =
                  ((t = t),
                  (r._name = "Outline"),
                  (r.outlineInterface =
                    ((a = ""),
                    (n = (s = t).getFootageData()),
                    function () {
                      return (a = ""), (n = s.getFootageData()), i;
                    })),
                  r)),
                e
              );
              function r(t) {
                return "Outline" === t ? r.outlineInterface() : null;
              }
              function i(t) {
                if (n[t]) return "object" == typeof (n = n[(a = t)]) ? i : n;
                var e = t.indexOf(a);
                if (-1 === e) return "";
                e = parseInt(t.substr(e + a.length), 10);
                return "object" == typeof (n = n[e]) ? i : n;
              }
              var s, a, n;
            },
            CompExpressionInterface = function (i) {
              function t(t) {
                for (var e = 0, r = i.layers.length; e < r; ) {
                  if (i.layers[e].nm === t || i.layers[e].ind === t)
                    return i.elements[e].layerInterface;
                  e += 1;
                }
                return null;
              }
              return (
                Object.defineProperty(t, "_name", { value: i.data.nm }),
                ((t.layer = t).pixelAspect = 1),
                (t.height = i.data.h || i.globalData.compSize.h),
                (t.width = i.data.w || i.globalData.compSize.w),
                (t.pixelAspect = 1),
                (t.frameDuration = 1 / i.globalData.frameRate),
                (t.displayStartTime = 0),
                (t.numLayers = i.layers.length),
                t
              );
            },
            TransformExpressionInterface = function (t) {
              function e(t) {
                switch (t) {
                  case "scale":
                  case "Scale":
                  case "ADBE Scale":
                  case 6:
                    return e.scale;
                  case "rotation":
                  case "Rotation":
                  case "ADBE Rotation":
                  case "ADBE Rotate Z":
                  case 10:
                    return e.rotation;
                  case "ADBE Rotate X":
                    return e.xRotation;
                  case "ADBE Rotate Y":
                    return e.yRotation;
                  case "position":
                  case "Position":
                  case "ADBE Position":
                  case 2:
                    return e.position;
                  case "ADBE Position_0":
                    return e.xPosition;
                  case "ADBE Position_1":
                    return e.yPosition;
                  case "ADBE Position_2":
                    return e.zPosition;
                  case "anchorPoint":
                  case "AnchorPoint":
                  case "Anchor Point":
                  case "ADBE AnchorPoint":
                  case 1:
                    return e.anchorPoint;
                  case "opacity":
                  case "Opacity":
                  case 11:
                    return e.opacity;
                  default:
                    return null;
                }
              }
              var r, i, s, a;
              return (
                Object.defineProperty(e, "rotation", {
                  get: ExpressionPropertyInterface(t.r || t.rz),
                }),
                Object.defineProperty(e, "zRotation", {
                  get: ExpressionPropertyInterface(t.rz || t.r),
                }),
                Object.defineProperty(e, "xRotation", {
                  get: ExpressionPropertyInterface(t.rx),
                }),
                Object.defineProperty(e, "yRotation", {
                  get: ExpressionPropertyInterface(t.ry),
                }),
                Object.defineProperty(e, "scale", {
                  get: ExpressionPropertyInterface(t.s),
                }),
                t.p
                  ? (a = ExpressionPropertyInterface(t.p))
                  : ((r = ExpressionPropertyInterface(t.px)),
                    (i = ExpressionPropertyInterface(t.py)),
                    t.pz && (s = ExpressionPropertyInterface(t.pz))),
                Object.defineProperty(e, "position", {
                  get: function () {
                    return t.p ? a() : [r(), i(), s ? s() : 0];
                  },
                }),
                Object.defineProperty(e, "xPosition", {
                  get: ExpressionPropertyInterface(t.px),
                }),
                Object.defineProperty(e, "yPosition", {
                  get: ExpressionPropertyInterface(t.py),
                }),
                Object.defineProperty(e, "zPosition", {
                  get: ExpressionPropertyInterface(t.pz),
                }),
                Object.defineProperty(e, "anchorPoint", {
                  get: ExpressionPropertyInterface(t.a),
                }),
                Object.defineProperty(e, "opacity", {
                  get: ExpressionPropertyInterface(t.o),
                }),
                Object.defineProperty(e, "skew", {
                  get: ExpressionPropertyInterface(t.sk),
                }),
                Object.defineProperty(e, "skewAxis", {
                  get: ExpressionPropertyInterface(t.sa),
                }),
                Object.defineProperty(e, "orientation", {
                  get: ExpressionPropertyInterface(t.or),
                }),
                e
              );
            },
            ProjectInterface = function () {
              function t(t) {
                for (var e = 0, r = this.compositions.length; e < r; ) {
                  if (
                    this.compositions[e].data &&
                    this.compositions[e].data.nm === t
                  )
                    return (
                      this.compositions[e].prepareFrame &&
                        this.compositions[e].data.xt &&
                        this.compositions[e].prepareFrame(this.currentFrame),
                      this.compositions[e].compInterface
                    );
                  e += 1;
                }
                return null;
              }
              return (
                (t.compositions = []),
                (t.currentFrame = 0),
                (t.registerComposition = mV),
                t
              );
            },
            EffectsExpressionInterface = {
              createEffectsInterface: function (t, e) {
                if (t.effectsManager) {
                  for (
                    var r = [],
                      i = t.data.ef,
                      s = t.effectsManager.effectElements.length,
                      a = 0;
                    a < s;
                    a += 1
                  )
                    r.push(sV(i[a], t.effectsManager.effectElements[a], e, t));
                  var n = t.data.ef || [],
                    o = function (t) {
                      for (a = 0, s = n.length; a < s; ) {
                        if (t === n[a].nm || t === n[a].mn || t === n[a].ix)
                          return r[a];
                        a += 1;
                      }
                      return null;
                    };
                  return (
                    Object.defineProperty(o, "numProperties", {
                      get: function () {
                        return n.length;
                      },
                    }),
                    o
                  );
                }
                return null;
              },
            },
            MaskManagerInterface =
              (Object.defineProperty(VV.prototype, "maskPath", {
                get: function () {
                  return (
                    this._mask.prop.k && this._mask.prop.getValue(),
                    this._mask.prop
                  );
                },
              }),
              Object.defineProperty(VV.prototype, "maskOpacity", {
                get: function () {
                  return (
                    this._mask.op.k && this._mask.op.getValue(),
                    100 * this._mask.op.v
                  );
                },
              }),
              function (e) {
                for (
                  var r = createSizedArray(e.viewData.length),
                    i = e.viewData.length,
                    s = 0;
                  s < i;
                  s += 1
                )
                  r[s] = new VV(e.viewData[s], e.masksProperties[s]);
                return function (t) {
                  for (s = 0; s < i; ) {
                    if (e.masksProperties[s].nm === t) return r[s];
                    s += 1;
                  }
                  return null;
                };
              }),
            ExpressionPropertyInterface =
              ((bW = { pv: 0, v: 0, mult: 1 }),
              (cW = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 }),
              function (t) {
                return t
                  ? "unidimensional" === t.propType
                    ? ((o = 1 / (n = !((n = t) && "pv" in n) ? bW : n).mult),
                      (h = n.pv * o),
                      ((l = new Number(h)).value = h),
                      dW(l, n, "unidimensional"),
                      function () {
                        return (
                          n.k && n.getValue(),
                          (h = n.v * o),
                          l.value !== h &&
                            (((l = new Number(h)).value = h),
                            dW(l, n, "unidimensional")),
                          l
                        );
                      })
                    : ((r = 1 / (e = !((e = t) && "pv" in e) ? cW : e).mult),
                      (i = (e.data && e.data.l) || e.pv.length),
                      (s = createTypedArray("float32", i)),
                      (a = createTypedArray("float32", i)),
                      (s.value = a),
                      dW(s, e, "multidimensional"),
                      function () {
                        e.k && e.getValue();
                        for (var t = 0; t < i; t += 1)
                          (a[t] = e.v[t] * r), (s[t] = a[t]);
                        return s;
                      })
                  : eW;
                var e, r, i, s, a, n, o, h, l;
              }),
            TextExpressionSelectorPropFactory = function (t, e) {
              (this.pv = 1),
                (this.comp = t.comp),
                (this.elem = t),
                (this.mult = 0.01),
                (this.propType = "textSelector"),
                (this.textTotal = e.totalChars),
                (this.selectorValue = 100),
                (this.lastValue = [1, 1, 1]),
                (this.k = !0),
                (this.x = !0),
                (this.getValue = ExpressionManager.initiateExpression.bind(
                  this
                )(t, e, this)),
                (this.getMult = wW),
                (this.getVelocityAtTime = expressionHelpers.getVelocityAtTime),
                this.kf
                  ? (this.getValueAtTime =
                      expressionHelpers.getValueAtTime.bind(this))
                  : (this.getValueAtTime =
                      expressionHelpers.getStaticValueAtTime.bind(this)),
                (this.setGroupProperty = expressionHelpers.setGroupProperty);
            },
            propertyGetTextProp = TextSelectorProp.getTextSelectorProp,
            bW,
            cW;
          function wW(t, e) {
            return (
              (this.textIndex = t + 1),
              (this.textTotal = e),
              (this.v = this.getValue() * this.mult),
              this.v
            );
          }
          function dW(i, s, a) {
            Object.defineProperty(i, "velocity", {
              get: function () {
                return s.getVelocityAtTime(s.comp.currentFrame);
              },
            }),
              (i.numKeys = s.keyframes ? s.keyframes.length : 0),
              (i.key = function (t) {
                if (!i.numKeys) return 0;
                var e =
                    "s" in s.keyframes[t - 1]
                      ? s.keyframes[t - 1].s
                      : "e" in s.keyframes[t - 2]
                      ? s.keyframes[t - 2].e
                      : s.keyframes[t - 2].s,
                  r =
                    "unidimensional" === a
                      ? new Number(e)
                      : Object.assign({}, e);
                return (
                  (r.time =
                    s.keyframes[t - 1].t / s.elem.comp.globalData.frameRate),
                  (r.value = "unidimensional" === a ? e[0] : e),
                  r
                );
              }),
              (i.valueAtTime = s.getValueAtTime),
              (i.speedAtTime = s.getSpeedAtTime),
              (i.velocityAtTime = s.getVelocityAtTime),
              (i.propertyGroup = s.propertyGroup);
          }
          function eW() {
            return bW;
          }
          function VV(t, e) {
            (this._mask = t), (this._data = e);
          }
          function sV(s, t, e, r) {
            function i(t) {
              for (var e = s.ef, r = 0, i = e.length; r < i; ) {
                if (t === e[r].nm || t === e[r].mn || t === e[r].ix)
                  return 5 === e[r].ty ? n[r] : n[r]();
                r += 1;
              }
              throw new Error();
            }
            for (
              var a = propertyGroupFactory(i, e),
                n = [],
                o = s.ef.length,
                h = 0;
              h < o;
              h += 1
            )
              5 === s.ef[h].ty
                ? n.push(
                    sV(
                      s.ef[h],
                      t.effectElements[h],
                      t.effectElements[h].propertyGroup,
                      r
                    )
                  )
                : n.push(
                    (function (t, e, r, i) {
                      var s = ExpressionPropertyInterface(t.p);
                      return (
                        t.p.setGroupProperty &&
                          t.p.setGroupProperty(PropertyInterface("", i)),
                        function () {
                          return 10 === e ? r.comp.compInterface(t.p.v) : s();
                        }
                      );
                    })(t.effectElements[h], s.ef[h].ty, r, a)
                  );
            return (
              "ADBE Color Control" === s.mn &&
                Object.defineProperty(i, "color", {
                  get: function () {
                    return n[0]();
                  },
                }),
              Object.defineProperties(i, {
                numProperties: {
                  get: function () {
                    return s.np;
                  },
                },
                _name: { value: s.nm },
                propertyGroup: { value: a },
              }),
              (i.enabled = 0 !== s.en),
              (i.active = i.enabled),
              i
            );
          }
          function mV(t) {
            this.compositions.push(t);
          }
          function $T(t) {
            var e = new Matrix();
            return (
              void 0 !== t
                ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e)
                : this._elem.finalTransform.mProp.applyToMatrix(e),
              e
            );
          }
          function _T(t, e) {
            e = this.getMatrix(e);
            return (
              (e.props[12] = 0),
              (e.props[13] = 0),
              (e.props[14] = 0),
              this.applyPoint(e, t)
            );
          }
          function aU(t, e) {
            e = this.getMatrix(e);
            return this.applyPoint(e, t);
          }
          function bU(t, e) {
            e = this.getMatrix(e);
            return (
              (e.props[12] = 0),
              (e.props[13] = 0),
              (e.props[14] = 0),
              this.invertPoint(e, t)
            );
          }
          function cU(t, e) {
            e = this.getMatrix(e);
            return this.invertPoint(e, t);
          }
          function dU(t, e) {
            if (this._elem.hierarchy && this._elem.hierarchy.length)
              for (var r = this._elem.hierarchy.length, i = 0; i < r; i += 1)
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t);
            return t.applyToPointArray(e[0], e[1], e[2] || 0);
          }
          function eU(t, e) {
            if (this._elem.hierarchy && this._elem.hierarchy.length)
              for (var r = this._elem.hierarchy.length, i = 0; i < r; i += 1)
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t);
            return t.inversePoint(e);
          }
          function fU(t) {
            var e = new Matrix();
            if (
              (e.reset(),
              this._elem.finalTransform.mProp.applyToMatrix(e),
              this._elem.hierarchy && this._elem.hierarchy.length)
            ) {
              for (var r = this._elem.hierarchy.length, i = 0; i < r; i += 1)
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
              return e.inversePoint(t);
            }
            return e.inversePoint(t);
          }
          function gU() {
            return [1, 1, 1, 1];
          }
          function RR(t, e, r) {
            for (var i = [], s = t ? t.length : 0, a = 0; a < s; a += 1)
              "gr" === t[a].ty
                ? i.push(
                    (function (t, e, r) {
                      function s(t) {
                        switch (t) {
                          case "ADBE Vectors Group":
                          case "Contents":
                          case 2:
                            return s.content;
                          default:
                            return s.transform;
                        }
                      }
                      s.propertyGroup = propertyGroupFactory(s, r);
                      (r = (function (t, e) {
                        function r(t) {
                          for (var e = 0, r = i.length; e < r; ) {
                            if (
                              i[e]._name === t ||
                              i[e].mn === t ||
                              i[e].propertyIndex === t ||
                              i[e].ix === t ||
                              i[e].ind === t
                            )
                              return i[e];
                            e += 1;
                          }
                          return "number" == typeof t ? i[t - 1] : null;
                        }
                        var i;
                        (r.propertyGroup = propertyGroupFactory(
                          r,
                          s.propertyGroup
                        )),
                          (i = RR(t.it, e.it, r.propertyGroup)),
                          (r.numProperties = i.length);
                        e = XR(
                          t.it[t.it.length - 1],
                          e.it[e.it.length - 1],
                          r.propertyGroup
                        );
                        return (
                          (r.transform = e),
                          (r.propertyIndex = t.cix),
                          (r._name = t.nm),
                          r
                        );
                      })(t, e)),
                        (e = XR(
                          t.it[t.it.length - 1],
                          e.it[e.it.length - 1],
                          s.propertyGroup
                        ));
                      return (
                        (s.content = r),
                        (s.transform = e),
                        Object.defineProperty(s, "_name", {
                          get: function () {
                            return t.nm;
                          },
                        }),
                        (s.numProperties = t.np),
                        (s.propertyIndex = t.ix),
                        (s.nm = t.nm),
                        (s.mn = t.mn),
                        s
                      );
                    })(t[a], e[a], r)
                  )
                : "fl" === t[a].ty
                ? i.push(
                    (function (t, e, r) {
                      function i(t) {
                        return "Color" === t || "color" === t
                          ? i.color
                          : "Opacity" === t || "opacity" === t
                          ? i.opacity
                          : null;
                      }
                      return (
                        Object.defineProperties(i, {
                          color: { get: ExpressionPropertyInterface(e.c) },
                          opacity: { get: ExpressionPropertyInterface(e.o) },
                          _name: { value: t.nm },
                          mn: { value: t.mn },
                        }),
                        e.c.setGroupProperty(PropertyInterface("Color", r)),
                        e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                        i
                      );
                    })(t[a], e[a], r)
                  )
                : "st" === t[a].ty
                ? i.push(
                    (function (e, r, t) {
                      var i,
                        t = propertyGroupFactory(o, t),
                        s = propertyGroupFactory(void 0, t);
                      var a = e.d ? e.d.length : 0,
                        n = {};
                      for (i = 0; i < a; i += 1)
                        (function (t) {
                          Object.defineProperty(n, e.d[t].nm, {
                            get: ExpressionPropertyInterface(
                              r.d.dataProps[t].p
                            ),
                          });
                        })(i),
                          r.d.dataProps[i].p.setGroupProperty(s);
                      function o(t) {
                        return "Color" === t || "color" === t
                          ? o.color
                          : "Opacity" === t || "opacity" === t
                          ? o.opacity
                          : "Stroke Width" === t || "stroke width" === t
                          ? o.strokeWidth
                          : null;
                      }
                      return (
                        Object.defineProperties(o, {
                          color: { get: ExpressionPropertyInterface(r.c) },
                          opacity: { get: ExpressionPropertyInterface(r.o) },
                          strokeWidth: {
                            get: ExpressionPropertyInterface(r.w),
                          },
                          dash: {
                            get: function () {
                              return n;
                            },
                          },
                          _name: { value: e.nm },
                          mn: { value: e.mn },
                        }),
                        r.c.setGroupProperty(PropertyInterface("Color", t)),
                        r.o.setGroupProperty(PropertyInterface("Opacity", t)),
                        r.w.setGroupProperty(
                          PropertyInterface("Stroke Width", t)
                        ),
                        o
                      );
                    })(t[a], e[a], r)
                  )
                : "tm" === t[a].ty
                ? i.push(
                    (function (e, t, r) {
                      function i(t) {
                        return t === e.e.ix || "End" === t || "end" === t
                          ? i.end
                          : t === e.s.ix
                          ? i.start
                          : t === e.o.ix
                          ? i.offset
                          : null;
                      }
                      var s = propertyGroupFactory(i, r);
                      return (
                        (i.propertyIndex = e.ix),
                        t.s.setGroupProperty(PropertyInterface("Start", s)),
                        t.e.setGroupProperty(PropertyInterface("End", s)),
                        t.o.setGroupProperty(PropertyInterface("Offset", s)),
                        (i.propertyIndex = e.ix),
                        (i.propertyGroup = r),
                        Object.defineProperties(i, {
                          start: { get: ExpressionPropertyInterface(t.s) },
                          end: { get: ExpressionPropertyInterface(t.e) },
                          offset: { get: ExpressionPropertyInterface(t.o) },
                          _name: { value: e.nm },
                        }),
                        (i.mn = e.mn),
                        i
                      );
                    })(t[a], e[a], r)
                  )
                : "tr" === t[a].ty ||
                  ("el" === t[a].ty
                    ? i.push(
                        (function (e, t, r) {
                          function i(t) {
                            return e.p.ix === t
                              ? i.position
                              : e.s.ix === t
                              ? i.size
                              : null;
                          }
                          r = propertyGroupFactory(i, r);
                          i.propertyIndex = e.ix;
                          t = "tm" === t.sh.ty ? t.sh.prop : t.sh;
                          return (
                            t.s.setGroupProperty(PropertyInterface("Size", r)),
                            t.p.setGroupProperty(
                              PropertyInterface("Position", r)
                            ),
                            Object.defineProperties(i, {
                              size: { get: ExpressionPropertyInterface(t.s) },
                              position: {
                                get: ExpressionPropertyInterface(t.p),
                              },
                              _name: { value: e.nm },
                            }),
                            (i.mn = e.mn),
                            i
                          );
                        })(t[a], e[a], r)
                      )
                    : "sr" === t[a].ty
                    ? i.push(
                        (function (e, t, r) {
                          function i(t) {
                            return e.p.ix === t
                              ? i.position
                              : e.r.ix === t
                              ? i.rotation
                              : e.pt.ix === t
                              ? i.points
                              : e.or.ix === t ||
                                "ADBE Vector Star Outer Radius" === t
                              ? i.outerRadius
                              : e.os.ix === t
                              ? i.outerRoundness
                              : !e.ir ||
                                (e.ir.ix !== t &&
                                  "ADBE Vector Star Inner Radius" !== t)
                              ? e.is && e.is.ix === t
                                ? i.innerRoundness
                                : null
                              : i.innerRadius;
                          }
                          (r = propertyGroupFactory(i, r)),
                            (t = "tm" === t.sh.ty ? t.sh.prop : t.sh);
                          return (
                            (i.propertyIndex = e.ix),
                            t.or.setGroupProperty(
                              PropertyInterface("Outer Radius", r)
                            ),
                            t.os.setGroupProperty(
                              PropertyInterface("Outer Roundness", r)
                            ),
                            t.pt.setGroupProperty(
                              PropertyInterface("Points", r)
                            ),
                            t.p.setGroupProperty(
                              PropertyInterface("Position", r)
                            ),
                            t.r.setGroupProperty(
                              PropertyInterface("Rotation", r)
                            ),
                            e.ir &&
                              (t.ir.setGroupProperty(
                                PropertyInterface("Inner Radius", r)
                              ),
                              t.is.setGroupProperty(
                                PropertyInterface("Inner Roundness", r)
                              )),
                            Object.defineProperties(i, {
                              position: {
                                get: ExpressionPropertyInterface(t.p),
                              },
                              rotation: {
                                get: ExpressionPropertyInterface(t.r),
                              },
                              points: {
                                get: ExpressionPropertyInterface(t.pt),
                              },
                              outerRadius: {
                                get: ExpressionPropertyInterface(t.or),
                              },
                              outerRoundness: {
                                get: ExpressionPropertyInterface(t.os),
                              },
                              innerRadius: {
                                get: ExpressionPropertyInterface(t.ir),
                              },
                              innerRoundness: {
                                get: ExpressionPropertyInterface(t.is),
                              },
                              _name: { value: e.nm },
                            }),
                            (i.mn = e.mn),
                            i
                          );
                        })(t[a], e[a], r)
                      )
                    : "sh" === t[a].ty
                    ? i.push(ShapePathInterface(t[a], e[a], r))
                    : "rc" === t[a].ty
                    ? i.push(
                        (function (e, t, r) {
                          function i(t) {
                            return e.p.ix === t
                              ? i.position
                              : e.r.ix === t
                              ? i.roundness
                              : e.s.ix === t ||
                                "Size" === t ||
                                "ADBE Vector Rect Size" === t
                              ? i.size
                              : null;
                          }
                          (r = propertyGroupFactory(i, r)),
                            (t = "tm" === t.sh.ty ? t.sh.prop : t.sh);
                          return (
                            (i.propertyIndex = e.ix),
                            t.p.setGroupProperty(
                              PropertyInterface("Position", r)
                            ),
                            t.s.setGroupProperty(PropertyInterface("Size", r)),
                            t.r.setGroupProperty(
                              PropertyInterface("Rotation", r)
                            ),
                            Object.defineProperties(i, {
                              position: {
                                get: ExpressionPropertyInterface(t.p),
                              },
                              roundness: {
                                get: ExpressionPropertyInterface(t.r),
                              },
                              size: { get: ExpressionPropertyInterface(t.s) },
                              _name: { value: e.nm },
                            }),
                            (i.mn = e.mn),
                            i
                          );
                        })(t[a], e[a], r)
                      )
                    : "rd" === t[a].ty
                    ? i.push(
                        (function (e, t, r) {
                          function i(t) {
                            return e.r.ix === t || "Round Corners 1" === t
                              ? i.radius
                              : null;
                          }
                          r = propertyGroupFactory(i, r);
                          return (
                            (i.propertyIndex = e.ix),
                            t.rd.setGroupProperty(
                              PropertyInterface("Radius", r)
                            ),
                            Object.defineProperties(i, {
                              radius: {
                                get: ExpressionPropertyInterface(t.rd),
                              },
                              _name: { value: e.nm },
                            }),
                            (i.mn = e.mn),
                            i
                          );
                        })(t[a], e[a], r)
                      )
                    : "rp" === t[a].ty
                    ? i.push(
                        (function (e, t, r) {
                          function i(t) {
                            return e.c.ix === t || "Copies" === t
                              ? i.copies
                              : e.o.ix === t || "Offset" === t
                              ? i.offset
                              : null;
                          }
                          r = propertyGroupFactory(i, r);
                          return (
                            (i.propertyIndex = e.ix),
                            t.c.setGroupProperty(
                              PropertyInterface("Copies", r)
                            ),
                            t.o.setGroupProperty(
                              PropertyInterface("Offset", r)
                            ),
                            Object.defineProperties(i, {
                              copies: { get: ExpressionPropertyInterface(t.c) },
                              offset: { get: ExpressionPropertyInterface(t.o) },
                              _name: { value: e.nm },
                            }),
                            (i.mn = e.mn),
                            i
                          );
                        })(t[a], e[a], r)
                      )
                    : "gf" === t[a].ty
                    ? i.push(
                        (function (t, e, r) {
                          function i(t) {
                            return "Start Point" === t || "start point" === t
                              ? i.startPoint
                              : "End Point" === t || "end point" === t
                              ? i.endPoint
                              : "Opacity" === t || "opacity" === t
                              ? i.opacity
                              : null;
                          }
                          return (
                            Object.defineProperties(i, {
                              startPoint: {
                                get: ExpressionPropertyInterface(e.s),
                              },
                              endPoint: {
                                get: ExpressionPropertyInterface(e.e),
                              },
                              opacity: {
                                get: ExpressionPropertyInterface(e.o),
                              },
                              type: {
                                get: function () {
                                  return "a";
                                },
                              },
                              _name: { value: t.nm },
                              mn: { value: t.mn },
                            }),
                            e.s.setGroupProperty(
                              PropertyInterface("Start Point", r)
                            ),
                            e.e.setGroupProperty(
                              PropertyInterface("End Point", r)
                            ),
                            e.o.setGroupProperty(
                              PropertyInterface("Opacity", r)
                            ),
                            i
                          );
                        })(t[a], e[a], r)
                      )
                    : i.push(
                        (t[a],
                        e[a],
                        function () {
                          return null;
                        })
                      ));
            return i;
          }
          function XR(e, t, r) {
            function i(t) {
              return e.a.ix === t || "Anchor Point" === t
                ? i.anchorPoint
                : e.o.ix === t || "Opacity" === t
                ? i.opacity
                : e.p.ix === t || "Position" === t
                ? i.position
                : e.r.ix === t ||
                  "Rotation" === t ||
                  "ADBE Vector Rotation" === t
                ? i.rotation
                : e.s.ix === t || "Scale" === t
                ? i.scale
                : (e.sk && e.sk.ix === t) || "Skew" === t
                ? i.skew
                : (e.sa && e.sa.ix === t) || "Skew Axis" === t
                ? i.skewAxis
                : null;
            }
            var s = propertyGroupFactory(i, r);
            return (
              t.transform.mProps.o.setGroupProperty(
                PropertyInterface("Opacity", s)
              ),
              t.transform.mProps.p.setGroupProperty(
                PropertyInterface("Position", s)
              ),
              t.transform.mProps.a.setGroupProperty(
                PropertyInterface("Anchor Point", s)
              ),
              t.transform.mProps.s.setGroupProperty(
                PropertyInterface("Scale", s)
              ),
              t.transform.mProps.r.setGroupProperty(
                PropertyInterface("Rotation", s)
              ),
              t.transform.mProps.sk &&
                (t.transform.mProps.sk.setGroupProperty(
                  PropertyInterface("Skew", s)
                ),
                t.transform.mProps.sa.setGroupProperty(
                  PropertyInterface("Skew Angle", s)
                )),
              t.transform.op.setGroupProperty(PropertyInterface("Opacity", s)),
              Object.defineProperties(i, {
                opacity: {
                  get: ExpressionPropertyInterface(t.transform.mProps.o),
                },
                position: {
                  get: ExpressionPropertyInterface(t.transform.mProps.p),
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(t.transform.mProps.a),
                },
                scale: {
                  get: ExpressionPropertyInterface(t.transform.mProps.s),
                },
                rotation: {
                  get: ExpressionPropertyInterface(t.transform.mProps.r),
                },
                skew: {
                  get: ExpressionPropertyInterface(t.transform.mProps.sk),
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(t.transform.mProps.sa),
                },
                _name: { value: e.nm },
              }),
              (i.ty = "tr"),
              (i.mn = e.mn),
              (i.propertyGroup = r),
              i
            );
          }
          function SliderEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function AngleEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function ColorEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
          }
          function PointEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
          }
          function LayerIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function MaskIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function CheckboxEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function NoValueEffect() {
            this.p = {};
          }
          function EffectsManager(t, e) {
            var r = t.ef || [];
            this.effectElements = [];
            for (var i, s = r.length, a = 0; a < s; a += 1)
              (i = new GroupEffect(r[a], e)), this.effectElements.push(i);
          }
          function GroupEffect(t, e) {
            this.init(t, e);
          }
          (TextSelectorProp.getTextSelectorProp = function (t, e, r) {
            return 1 === e.t
              ? new TextExpressionSelectorPropFactory(t, e, r)
              : propertyGetTextProp(t, e, r);
          }),
            extendPrototype([DynamicPropertyContainer], GroupEffect),
            (GroupEffect.prototype.getValue =
              GroupEffect.prototype.iterateDynamicProperties),
            (GroupEffect.prototype.init = function (t, e) {
              (this.data = t),
                (this.effectElements = []),
                this.initDynamicPropertyContainer(e);
              for (
                var r, i = this.data.ef.length, s = this.data.ef, a = 0;
                a < i;
                a += 1
              ) {
                switch (((r = null), s[a].ty)) {
                  case 0:
                    r = new SliderEffect(s[a], e, this);
                    break;
                  case 1:
                    r = new AngleEffect(s[a], e, this);
                    break;
                  case 2:
                    r = new ColorEffect(s[a], e, this);
                    break;
                  case 3:
                    r = new PointEffect(s[a], e, this);
                    break;
                  case 4:
                  case 7:
                    r = new CheckboxEffect(s[a], e, this);
                    break;
                  case 10:
                    r = new LayerIndexEffect(s[a], e, this);
                    break;
                  case 11:
                    r = new MaskIndexEffect(s[a], e, this);
                    break;
                  case 5:
                    r = new EffectsManager(s[a], e, this);
                    break;
                  default:
                    r = new NoValueEffect(s[a], e, this);
                }
                r && this.effectElements.push(r);
              }
            });
          var lottie = {};
          function setLocationHref(t) {
            locationHref = t;
          }
          function searchAnimations() {
            !0 === standalone
              ? animationManager.searchAnimations(
                  animationData,
                  standalone,
                  renderer
                )
              : animationManager.searchAnimations();
          }
          function setSubframeRendering(t) {
            subframeEnabled = t;
          }
          function setIDPrefix(t) {
            idPrefix = t;
          }
          function loadAnimation(t) {
            return (
              !0 === standalone &&
                (t.animationData = JSON.parse(animationData)),
              animationManager.loadAnimation(t)
            );
          }
          function setQuality(t) {
            if ("string" == typeof t)
              switch (t) {
                case "high":
                  defaultCurveSegments = 200;
                  break;
                default:
                case "medium":
                  defaultCurveSegments = 50;
                  break;
                case "low":
                  defaultCurveSegments = 10;
              }
            else !isNaN(t) && 1 < t && (defaultCurveSegments = t);
            roundValues(!(50 <= defaultCurveSegments));
          }
          function inBrowser() {
            return "undefined" != typeof navigator;
          }
          function installPlugin(t, e) {
            "expressions" === t && (expressionsPlugin = e);
          }
          function getFactory(t) {
            switch (t) {
              case "propertyFactory":
                return PropertyFactory;
              case "shapePropertyFactory":
                return ShapePropertyFactory;
              case "matrix":
                return Matrix;
              default:
                return null;
            }
          }
          function checkReady() {
            "complete" === document.readyState &&
              (clearInterval(readyStateCheckInterval), searchAnimations());
          }
          function getQueryVariable(t) {
            for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
              var i = e[r].split("=");
              if (decodeURIComponent(i[0]) == t)
                return decodeURIComponent(i[1]);
            }
            return null;
          }
          (lottie.play = animationManager.play),
            (lottie.pause = animationManager.pause),
            (lottie.setLocationHref = setLocationHref),
            (lottie.togglePause = animationManager.togglePause),
            (lottie.setSpeed = animationManager.setSpeed),
            (lottie.setDirection = animationManager.setDirection),
            (lottie.stop = animationManager.stop),
            (lottie.searchAnimations = searchAnimations),
            (lottie.registerAnimation = animationManager.registerAnimation),
            (lottie.loadAnimation = loadAnimation),
            (lottie.setSubframeRendering = setSubframeRendering),
            (lottie.resize = animationManager.resize),
            (lottie.goToAndStop = animationManager.goToAndStop),
            (lottie.destroy = animationManager.destroy),
            (lottie.setQuality = setQuality),
            (lottie.inBrowser = inBrowser),
            (lottie.installPlugin = installPlugin),
            (lottie.freeze = animationManager.freeze),
            (lottie.unfreeze = animationManager.unfreeze),
            (lottie.setVolume = animationManager.setVolume),
            (lottie.mute = animationManager.mute),
            (lottie.unmute = animationManager.unmute),
            (lottie.getRegisteredAnimations =
              animationManager.getRegisteredAnimations),
            (lottie.setIDPrefix = setIDPrefix),
            (lottie.__getFactory = getFactory),
            (lottie.version = "5.7.13");
          var standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "",
            queryString,
            scripts,
            index,
            myScript,
            queryString,
            renderer;
          standalone &&
            ((scripts = document.getElementsByTagName("script")),
            (index = scripts.length - 1),
            (myScript = scripts[index] || { src: "" }),
            (queryString = myScript.src.replace(/^[^\?]+\??/, "")),
            (renderer = getQueryVariable("renderer")));
          var readyStateCheckInterval = setInterval(checkReady, 100);
          return lottie;
        }),
        void 0 ===
          (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return factory(root);
          }.call(exports, __webpack_require__, exports, module)) ||
          (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    },
  },
]);
