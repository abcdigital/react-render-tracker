"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/socket.io-client/dist/socket.io.slim.js
  var require_socket_io_slim = __commonJS({
    "node_modules/socket.io-client/dist/socket.io.slim.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.io = e() : t.io = e();
      }(exports, function() {
        return function(t) {
          function e(n) {
            if (r[n])
              return r[n].exports;
            var o = r[n] = { exports: {}, id: n, loaded: false };
            return t[n].call(o.exports, o, o.exports, e), o.loaded = true, o.exports;
          }
          var r = {};
          return e.m = t, e.c = r, e.p = "", e(0);
        }([function(t, e, r) {
          "use strict";
          function n(t2, e2) {
            "object" === ("undefined" == typeof t2 ? "undefined" : o(t2)) && (e2 = t2, t2 = void 0), e2 = e2 || {};
            var r2, n2 = i(t2), s2 = n2.source, p = n2.id, h = n2.path, u = c[p] && h in c[p].nsps, f = e2.forceNew || e2["force new connection"] || false === e2.multiplex || u;
            return f ? r2 = a(s2, e2) : (c[p] || (c[p] = a(s2, e2)), r2 = c[p]), n2.query && !e2.query && (e2.query = n2.query), r2.socket(n2.path, e2);
          }
          var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, i = r(1), s = r(4), a = r(9);
          r(3)("socket.io-client");
          t.exports = e = n;
          var c = e.managers = {};
          e.protocol = s.protocol, e.connect = n, e.Manager = r(9), e.Socket = r(34);
        }, function(t, e, r) {
          "use strict";
          function n(t2, e2) {
            var r2 = t2;
            e2 = e2 || "undefined" != typeof location && location, null == t2 && (t2 = e2.protocol + "//" + e2.host), "string" == typeof t2 && ("/" === t2.charAt(0) && (t2 = "/" === t2.charAt(1) ? e2.protocol + t2 : e2.host + t2), /^(https?|wss?):\/\//.test(t2) || (t2 = "undefined" != typeof e2 ? e2.protocol + "//" + t2 : "https://" + t2), r2 = o(t2)), r2.port || (/^(http|ws)$/.test(r2.protocol) ? r2.port = "80" : /^(http|ws)s$/.test(r2.protocol) && (r2.port = "443")), r2.path = r2.path || "/";
            var n2 = r2.host.indexOf(":") !== -1, i = n2 ? "[" + r2.host + "]" : r2.host;
            return r2.id = r2.protocol + "://" + i + ":" + r2.port, r2.href = r2.protocol + "://" + i + (e2 && e2.port === r2.port ? "" : ":" + r2.port), r2;
          }
          var o = r(2);
          r(3)("socket.io-client:url");
          t.exports = n;
        }, function(t, e) {
          function r(t2, e2) {
            var r2 = /\/{2,9}/g, n2 = e2.replace(r2, "/").split("/");
            return "/" != e2.substr(0, 1) && 0 !== e2.length || n2.splice(0, 1), "/" == e2.substr(e2.length - 1, 1) && n2.splice(n2.length - 1, 1), n2;
          }
          function n(t2, e2) {
            var r2 = {};
            return e2.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t3, e3, n2) {
              e3 && (r2[e3] = n2);
            }), r2;
          }
          var o = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, i = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
          t.exports = function(t2) {
            var e2 = t2, s = t2.indexOf("["), a = t2.indexOf("]");
            s != -1 && a != -1 && (t2 = t2.substring(0, s) + t2.substring(s, a).replace(/:/g, ";") + t2.substring(a, t2.length));
            for (var c = o.exec(t2 || ""), p = {}, h = 14; h--; )
              p[i[h]] = c[h] || "";
            return s != -1 && a != -1 && (p.source = e2, p.host = p.host.substring(1, p.host.length - 1).replace(/;/g, ":"), p.authority = p.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), p.ipv6uri = true), p.pathNames = r(p, p.path), p.queryKey = n(p, p.query), p;
          };
        }, function(t, e) {
          "use strict";
          t.exports = function() {
            return function() {
            };
          };
        }, function(t, e, r) {
          function n() {
          }
          function o(t2) {
            var r2 = "" + t2.type;
            if (e.BINARY_EVENT !== t2.type && e.BINARY_ACK !== t2.type || (r2 += t2.attachments + "-"), t2.nsp && "/" !== t2.nsp && (r2 += t2.nsp + ","), null != t2.id && (r2 += t2.id), null != t2.data) {
              var n2 = i(t2.data);
              if (n2 === false)
                return m;
              r2 += n2;
            }
            return r2;
          }
          function i(t2) {
            try {
              return JSON.stringify(t2);
            } catch (t3) {
              return false;
            }
          }
          function s(t2, e2) {
            function r2(t3) {
              var r3 = l.deconstructPacket(t3), n2 = o(r3.packet), i2 = r3.buffers;
              i2.unshift(n2), e2(i2);
            }
            l.removeBlobs(t2, r2);
          }
          function a() {
            this.reconstructor = null;
          }
          function c(t2) {
            var r2 = 0, n2 = { type: Number(t2.charAt(0)) };
            if (null == e.types[n2.type])
              return u("unknown packet type " + n2.type);
            if (e.BINARY_EVENT === n2.type || e.BINARY_ACK === n2.type) {
              for (var o2 = ""; "-" !== t2.charAt(++r2) && (o2 += t2.charAt(r2), r2 != t2.length); )
                ;
              if (o2 != Number(o2) || "-" !== t2.charAt(r2))
                throw new Error("Illegal attachments");
              n2.attachments = Number(o2);
            }
            if ("/" === t2.charAt(r2 + 1))
              for (n2.nsp = ""; ++r2; ) {
                var i2 = t2.charAt(r2);
                if ("," === i2)
                  break;
                if (n2.nsp += i2, r2 === t2.length)
                  break;
              }
            else
              n2.nsp = "/";
            var s2 = t2.charAt(r2 + 1);
            if ("" !== s2 && Number(s2) == s2) {
              for (n2.id = ""; ++r2; ) {
                var i2 = t2.charAt(r2);
                if (null == i2 || Number(i2) != i2) {
                  --r2;
                  break;
                }
                if (n2.id += t2.charAt(r2), r2 === t2.length)
                  break;
              }
              n2.id = Number(n2.id);
            }
            if (t2.charAt(++r2)) {
              var a2 = p(t2.substr(r2)), c2 = a2 !== false && (n2.type === e.ERROR || d(a2));
              if (!c2)
                return u("invalid payload");
              n2.data = a2;
            }
            return n2;
          }
          function p(t2) {
            try {
              return JSON.parse(t2);
            } catch (t3) {
              return false;
            }
          }
          function h(t2) {
            this.reconPack = t2, this.buffers = [];
          }
          function u(t2) {
            return { type: e.ERROR, data: "parser error: " + t2 };
          }
          var f = (r(3)("socket.io-parser"), r(5)), l = r(6), d = r(7), y = r(8);
          e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = n, e.Decoder = a;
          var m = e.ERROR + '"encode error"';
          n.prototype.encode = function(t2, r2) {
            if (e.BINARY_EVENT === t2.type || e.BINARY_ACK === t2.type)
              s(t2, r2);
            else {
              var n2 = o(t2);
              r2([n2]);
            }
          }, f(a.prototype), a.prototype.add = function(t2) {
            var r2;
            if ("string" == typeof t2)
              r2 = c(t2), e.BINARY_EVENT === r2.type || e.BINARY_ACK === r2.type ? (this.reconstructor = new h(r2), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", r2)) : this.emit("decoded", r2);
            else {
              if (!y(t2) && !t2.base64)
                throw new Error("Unknown type: " + t2);
              if (!this.reconstructor)
                throw new Error("got binary data when not reconstructing a packet");
              r2 = this.reconstructor.takeBinaryData(t2), r2 && (this.reconstructor = null, this.emit("decoded", r2));
            }
          }, a.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction();
          }, h.prototype.takeBinaryData = function(t2) {
            if (this.buffers.push(t2), this.buffers.length === this.reconPack.attachments) {
              var e2 = l.reconstructPacket(this.reconPack, this.buffers);
              return this.finishedReconstruction(), e2;
            }
            return null;
          }, h.prototype.finishedReconstruction = function() {
            this.reconPack = null, this.buffers = [];
          };
        }, function(t, e, r) {
          function n(t2) {
            if (t2)
              return o(t2);
          }
          function o(t2) {
            for (var e2 in n.prototype)
              t2[e2] = n.prototype[e2];
            return t2;
          }
          t.exports = n, n.prototype.on = n.prototype.addEventListener = function(t2, e2) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t2] = this._callbacks["$" + t2] || []).push(e2), this;
          }, n.prototype.once = function(t2, e2) {
            function r2() {
              this.off(t2, r2), e2.apply(this, arguments);
            }
            return r2.fn = e2, this.on(t2, r2), this;
          }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t2, e2) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
              return this._callbacks = {}, this;
            var r2 = this._callbacks["$" + t2];
            if (!r2)
              return this;
            if (1 == arguments.length)
              return delete this._callbacks["$" + t2], this;
            for (var n2, o2 = 0; o2 < r2.length; o2++)
              if (n2 = r2[o2], n2 === e2 || n2.fn === e2) {
                r2.splice(o2, 1);
                break;
              }
            return 0 === r2.length && delete this._callbacks["$" + t2], this;
          }, n.prototype.emit = function(t2) {
            this._callbacks = this._callbacks || {};
            for (var e2 = new Array(arguments.length - 1), r2 = this._callbacks["$" + t2], n2 = 1; n2 < arguments.length; n2++)
              e2[n2 - 1] = arguments[n2];
            if (r2) {
              r2 = r2.slice(0);
              for (var n2 = 0, o2 = r2.length; n2 < o2; ++n2)
                r2[n2].apply(this, e2);
            }
            return this;
          }, n.prototype.listeners = function(t2) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + t2] || [];
          }, n.prototype.hasListeners = function(t2) {
            return !!this.listeners(t2).length;
          };
        }, function(t, e, r) {
          function n(t2, e2) {
            if (!t2)
              return t2;
            if (s(t2)) {
              var r2 = { _placeholder: true, num: e2.length };
              return e2.push(t2), r2;
            }
            if (i(t2)) {
              for (var o2 = new Array(t2.length), a2 = 0; a2 < t2.length; a2++)
                o2[a2] = n(t2[a2], e2);
              return o2;
            }
            if ("object" == typeof t2 && !(t2 instanceof Date)) {
              var o2 = {};
              for (var c2 in t2)
                o2[c2] = n(t2[c2], e2);
              return o2;
            }
            return t2;
          }
          function o(t2, e2) {
            if (!t2)
              return t2;
            if (t2 && t2._placeholder)
              return e2[t2.num];
            if (i(t2))
              for (var r2 = 0; r2 < t2.length; r2++)
                t2[r2] = o(t2[r2], e2);
            else if ("object" == typeof t2)
              for (var n2 in t2)
                t2[n2] = o(t2[n2], e2);
            return t2;
          }
          var i = r(7), s = r(8), a = Object.prototype.toString, c = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === a.call(Blob), p = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === a.call(File);
          e.deconstructPacket = function(t2) {
            var e2 = [], r2 = t2.data, o2 = t2;
            return o2.data = n(r2, e2), o2.attachments = e2.length, { packet: o2, buffers: e2 };
          }, e.reconstructPacket = function(t2, e2) {
            return t2.data = o(t2.data, e2), t2.attachments = void 0, t2;
          }, e.removeBlobs = function(t2, e2) {
            function r2(t3, a2, h) {
              if (!t3)
                return t3;
              if (c && t3 instanceof Blob || p && t3 instanceof File) {
                n2++;
                var u = new FileReader();
                u.onload = function() {
                  h ? h[a2] = this.result : o2 = this.result, --n2 || e2(o2);
                }, u.readAsArrayBuffer(t3);
              } else if (i(t3))
                for (var f = 0; f < t3.length; f++)
                  r2(t3[f], f, t3);
              else if ("object" == typeof t3 && !s(t3))
                for (var l in t3)
                  r2(t3[l], l, t3);
            }
            var n2 = 0, o2 = t2;
            r2(o2), n2 || e2(o2);
          };
        }, function(t, e) {
          var r = {}.toString;
          t.exports = Array.isArray || function(t2) {
            return "[object Array]" == r.call(t2);
          };
        }, function(t, e) {
          function r(t2) {
            return n && Buffer.isBuffer(t2) || o && (t2 instanceof ArrayBuffer || i(t2));
          }
          t.exports = r;
          var n = "function" == typeof Buffer && "function" == typeof Buffer.isBuffer, o = "function" == typeof ArrayBuffer, i = function(t2) {
            return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t2) : t2.buffer instanceof ArrayBuffer;
          };
        }, function(t, e, r) {
          "use strict";
          function n(t2, e2) {
            if (!(this instanceof n))
              return new n(t2, e2);
            t2 && "object" === ("undefined" == typeof t2 ? "undefined" : o(t2)) && (e2 = t2, t2 = void 0), e2 = e2 || {}, e2.path = e2.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e2, this.reconnection(e2.reconnection !== false), this.reconnectionAttempts(e2.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e2.reconnectionDelay || 1e3), this.reconnectionDelayMax(e2.reconnectionDelayMax || 5e3), this.randomizationFactor(e2.randomizationFactor || 0.5), this.backoff = new f({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e2.timeout ? 2e4 : e2.timeout), this.readyState = "closed", this.uri = t2, this.connecting = [], this.lastPing = null, this.encoding = false, this.packetBuffer = [];
            var r2 = e2.parser || c;
            this.encoder = new r2.Encoder(), this.decoder = new r2.Decoder(), this.autoConnect = e2.autoConnect !== false, this.autoConnect && this.open();
          }
          var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, i = r(10), s = r(34), a = r(5), c = r(4), p = r(36), h = r(37), u = (r(3)("socket.io-client:manager"), r(33)), f = r(38), l = Object.prototype.hasOwnProperty;
          t.exports = n, n.prototype.emitAll = function() {
            this.emit.apply(this, arguments);
            for (var t2 in this.nsps)
              l.call(this.nsps, t2) && this.nsps[t2].emit.apply(this.nsps[t2], arguments);
          }, n.prototype.updateSocketIds = function() {
            for (var t2 in this.nsps)
              l.call(this.nsps, t2) && (this.nsps[t2].id = this.generateId(t2));
          }, n.prototype.generateId = function(t2) {
            return ("/" === t2 ? "" : t2 + "#") + this.engine.id;
          }, a(n.prototype), n.prototype.reconnection = function(t2) {
            return arguments.length ? (this._reconnection = !!t2, this) : this._reconnection;
          }, n.prototype.reconnectionAttempts = function(t2) {
            return arguments.length ? (this._reconnectionAttempts = t2, this) : this._reconnectionAttempts;
          }, n.prototype.reconnectionDelay = function(t2) {
            return arguments.length ? (this._reconnectionDelay = t2, this.backoff && this.backoff.setMin(t2), this) : this._reconnectionDelay;
          }, n.prototype.randomizationFactor = function(t2) {
            return arguments.length ? (this._randomizationFactor = t2, this.backoff && this.backoff.setJitter(t2), this) : this._randomizationFactor;
          }, n.prototype.reconnectionDelayMax = function(t2) {
            return arguments.length ? (this._reconnectionDelayMax = t2, this.backoff && this.backoff.setMax(t2), this) : this._reconnectionDelayMax;
          }, n.prototype.timeout = function(t2) {
            return arguments.length ? (this._timeout = t2, this) : this._timeout;
          }, n.prototype.maybeReconnectOnOpen = function() {
            !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
          }, n.prototype.open = n.prototype.connect = function(t2, e2) {
            if (~this.readyState.indexOf("open"))
              return this;
            this.engine = i(this.uri, this.opts);
            var r2 = this.engine, n2 = this;
            this.readyState = "opening", this.skipReconnect = false;
            var o2 = p(r2, "open", function() {
              n2.onopen(), t2 && t2();
            }), s2 = p(r2, "error", function(e3) {
              if (n2.cleanup(), n2.readyState = "closed", n2.emitAll("connect_error", e3), t2) {
                var r3 = new Error("Connection error");
                r3.data = e3, t2(r3);
              } else
                n2.maybeReconnectOnOpen();
            });
            if (false !== this._timeout) {
              var a2 = this._timeout;
              0 === a2 && o2.destroy();
              var c2 = setTimeout(function() {
                o2.destroy(), r2.close(), r2.emit("error", "timeout"), n2.emitAll("connect_timeout", a2);
              }, a2);
              this.subs.push({ destroy: function() {
                clearTimeout(c2);
              } });
            }
            return this.subs.push(o2), this.subs.push(s2), this;
          }, n.prototype.onopen = function() {
            this.cleanup(), this.readyState = "open", this.emit("open");
            var t2 = this.engine;
            this.subs.push(p(t2, "data", h(this, "ondata"))), this.subs.push(p(t2, "ping", h(this, "onping"))), this.subs.push(p(t2, "pong", h(this, "onpong"))), this.subs.push(p(t2, "error", h(this, "onerror"))), this.subs.push(p(t2, "close", h(this, "onclose"))), this.subs.push(p(this.decoder, "decoded", h(this, "ondecoded")));
          }, n.prototype.onping = function() {
            this.lastPing = new Date(), this.emitAll("ping");
          }, n.prototype.onpong = function() {
            this.emitAll("pong", new Date() - this.lastPing);
          }, n.prototype.ondata = function(t2) {
            this.decoder.add(t2);
          }, n.prototype.ondecoded = function(t2) {
            this.emit("packet", t2);
          }, n.prototype.onerror = function(t2) {
            this.emitAll("error", t2);
          }, n.prototype.socket = function(t2, e2) {
            function r2() {
              ~u(o2.connecting, n2) || o2.connecting.push(n2);
            }
            var n2 = this.nsps[t2];
            if (!n2) {
              n2 = new s(this, t2, e2), this.nsps[t2] = n2;
              var o2 = this;
              n2.on("connecting", r2), n2.on("connect", function() {
                n2.id = o2.generateId(t2);
              }), this.autoConnect && r2();
            }
            return n2;
          }, n.prototype.destroy = function(t2) {
            var e2 = u(this.connecting, t2);
            ~e2 && this.connecting.splice(e2, 1), this.connecting.length || this.close();
          }, n.prototype.packet = function(t2) {
            var e2 = this;
            t2.query && 0 === t2.type && (t2.nsp += "?" + t2.query), e2.encoding ? e2.packetBuffer.push(t2) : (e2.encoding = true, this.encoder.encode(t2, function(r2) {
              for (var n2 = 0; n2 < r2.length; n2++)
                e2.engine.write(r2[n2], t2.options);
              e2.encoding = false, e2.processPacketQueue();
            }));
          }, n.prototype.processPacketQueue = function() {
            if (this.packetBuffer.length > 0 && !this.encoding) {
              var t2 = this.packetBuffer.shift();
              this.packet(t2);
            }
          }, n.prototype.cleanup = function() {
            for (var t2 = this.subs.length, e2 = 0; e2 < t2; e2++) {
              var r2 = this.subs.shift();
              r2.destroy();
            }
            this.packetBuffer = [], this.encoding = false, this.lastPing = null, this.decoder.destroy();
          }, n.prototype.close = n.prototype.disconnect = function() {
            this.skipReconnect = true, this.reconnecting = false, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
          }, n.prototype.onclose = function(t2) {
            this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t2), this._reconnection && !this.skipReconnect && this.reconnect();
          }, n.prototype.reconnect = function() {
            if (this.reconnecting || this.skipReconnect)
              return this;
            var t2 = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
              this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = false;
            else {
              var e2 = this.backoff.duration();
              this.reconnecting = true;
              var r2 = setTimeout(function() {
                t2.skipReconnect || (t2.emitAll("reconnect_attempt", t2.backoff.attempts), t2.emitAll("reconnecting", t2.backoff.attempts), t2.skipReconnect || t2.open(function(e3) {
                  e3 ? (t2.reconnecting = false, t2.reconnect(), t2.emitAll("reconnect_error", e3.data)) : t2.onreconnect();
                }));
              }, e2);
              this.subs.push({ destroy: function() {
                clearTimeout(r2);
              } });
            }
          }, n.prototype.onreconnect = function() {
            var t2 = this.backoff.attempts;
            this.reconnecting = false, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t2);
          };
        }, function(t, e, r) {
          t.exports = r(11), t.exports.parser = r(19);
        }, function(t, e, r) {
          function n(t2, e2) {
            return this instanceof n ? (e2 = e2 || {}, t2 && "object" == typeof t2 && (e2 = t2, t2 = null), t2 ? (t2 = p(t2), e2.hostname = t2.host, e2.secure = "https" === t2.protocol || "wss" === t2.protocol, e2.port = t2.port, t2.query && (e2.query = t2.query)) : e2.host && (e2.hostname = p(e2.host).host), this.secure = null != e2.secure ? e2.secure : "undefined" != typeof location && "https:" === location.protocol, e2.hostname && !e2.port && (e2.port = this.secure ? "443" : "80"), this.agent = e2.agent || false, this.hostname = e2.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e2.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = e2.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = false !== e2.upgrade, this.path = (e2.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e2.forceJSONP, this.jsonp = false !== e2.jsonp, this.forceBase64 = !!e2.forceBase64, this.enablesXDR = !!e2.enablesXDR, this.withCredentials = false !== e2.withCredentials, this.timestampParam = e2.timestampParam || "t", this.timestampRequests = e2.timestampRequests, this.transports = e2.transports || ["polling", "websocket"], this.transportOptions = e2.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e2.policyPort || 843, this.rememberUpgrade = e2.rememberUpgrade || false, this.binaryType = null, this.onlyBinaryUpgrades = e2.onlyBinaryUpgrades, this.perMessageDeflate = false !== e2.perMessageDeflate && (e2.perMessageDeflate || {}), true === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e2.pfx || null, this.key = e2.key || null, this.passphrase = e2.passphrase || null, this.cert = e2.cert || null, this.ca = e2.ca || null, this.ciphers = e2.ciphers || null, this.rejectUnauthorized = void 0 === e2.rejectUnauthorized || e2.rejectUnauthorized, this.forceNode = !!e2.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (e2.extraHeaders && Object.keys(e2.extraHeaders).length > 0 && (this.extraHeaders = e2.extraHeaders), e2.localAddress && (this.localAddress = e2.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, void this.open()) : new n(t2, e2);
          }
          function o(t2) {
            var e2 = {};
            for (var r2 in t2)
              t2.hasOwnProperty(r2) && (e2[r2] = t2[r2]);
            return e2;
          }
          var i = r(12), s = r(5), a = (r(3)("engine.io-client:socket"), r(33)), c = r(19), p = r(2), h = r(27);
          t.exports = n, n.priorWebsocketSuccess = false, s(n.prototype), n.protocol = c.protocol, n.Socket = n, n.Transport = r(18), n.transports = r(12), n.parser = r(19), n.prototype.createTransport = function(t2) {
            var e2 = o(this.query);
            e2.EIO = c.protocol, e2.transport = t2;
            var r2 = this.transportOptions[t2] || {};
            this.id && (e2.sid = this.id);
            var n2 = new i[t2]({ query: e2, socket: this, agent: r2.agent || this.agent, hostname: r2.hostname || this.hostname, port: r2.port || this.port, secure: r2.secure || this.secure, path: r2.path || this.path, forceJSONP: r2.forceJSONP || this.forceJSONP, jsonp: r2.jsonp || this.jsonp, forceBase64: r2.forceBase64 || this.forceBase64, enablesXDR: r2.enablesXDR || this.enablesXDR, withCredentials: r2.withCredentials || this.withCredentials, timestampRequests: r2.timestampRequests || this.timestampRequests, timestampParam: r2.timestampParam || this.timestampParam, policyPort: r2.policyPort || this.policyPort, pfx: r2.pfx || this.pfx, key: r2.key || this.key, passphrase: r2.passphrase || this.passphrase, cert: r2.cert || this.cert, ca: r2.ca || this.ca, ciphers: r2.ciphers || this.ciphers, rejectUnauthorized: r2.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: r2.perMessageDeflate || this.perMessageDeflate, extraHeaders: r2.extraHeaders || this.extraHeaders, forceNode: r2.forceNode || this.forceNode, localAddress: r2.localAddress || this.localAddress, requestTimeout: r2.requestTimeout || this.requestTimeout, protocols: r2.protocols || void 0, isReactNative: this.isReactNative });
            return n2;
          }, n.prototype.open = function() {
            var t2;
            if (this.rememberUpgrade && n.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
              t2 = "websocket";
            else {
              if (0 === this.transports.length) {
                var e2 = this;
                return void setTimeout(function() {
                  e2.emit("error", "No transports available");
                }, 0);
              }
              t2 = this.transports[0];
            }
            this.readyState = "opening";
            try {
              t2 = this.createTransport(t2);
            } catch (t3) {
              return this.transports.shift(), void this.open();
            }
            t2.open(), this.setTransport(t2);
          }, n.prototype.setTransport = function(t2) {
            var e2 = this;
            this.transport && this.transport.removeAllListeners(), this.transport = t2, t2.on("drain", function() {
              e2.onDrain();
            }).on("packet", function(t3) {
              e2.onPacket(t3);
            }).on("error", function(t3) {
              e2.onError(t3);
            }).on("close", function() {
              e2.onClose("transport close");
            });
          }, n.prototype.probe = function(t2) {
            function e2() {
              if (u.onlyBinaryUpgrades) {
                var t3 = !this.supportsBinary && u.transport.supportsBinary;
                h2 = h2 || t3;
              }
              h2 || (p2.send([{ type: "ping", data: "probe" }]), p2.once("packet", function(t4) {
                if (!h2)
                  if ("pong" === t4.type && "probe" === t4.data) {
                    if (u.upgrading = true, u.emit("upgrading", p2), !p2)
                      return;
                    n.priorWebsocketSuccess = "websocket" === p2.name, u.transport.pause(function() {
                      h2 || "closed" !== u.readyState && (c2(), u.setTransport(p2), p2.send([{ type: "upgrade" }]), u.emit("upgrade", p2), p2 = null, u.upgrading = false, u.flush());
                    });
                  } else {
                    var e3 = new Error("probe error");
                    e3.transport = p2.name, u.emit("upgradeError", e3);
                  }
              }));
            }
            function r2() {
              h2 || (h2 = true, c2(), p2.close(), p2 = null);
            }
            function o2(t3) {
              var e3 = new Error("probe error: " + t3);
              e3.transport = p2.name, r2(), u.emit("upgradeError", e3);
            }
            function i2() {
              o2("transport closed");
            }
            function s2() {
              o2("socket closed");
            }
            function a2(t3) {
              p2 && t3.name !== p2.name && r2();
            }
            function c2() {
              p2.removeListener("open", e2), p2.removeListener("error", o2), p2.removeListener("close", i2), u.removeListener("close", s2), u.removeListener("upgrading", a2);
            }
            var p2 = this.createTransport(t2, { probe: 1 }), h2 = false, u = this;
            n.priorWebsocketSuccess = false, p2.once("open", e2), p2.once("error", o2), p2.once("close", i2), this.once("close", s2), this.once("upgrading", a2), p2.open();
          }, n.prototype.onOpen = function() {
            if (this.readyState = "open", n.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause)
              for (var t2 = 0, e2 = this.upgrades.length; t2 < e2; t2++)
                this.probe(this.upgrades[t2]);
          }, n.prototype.onPacket = function(t2) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
              switch (this.emit("packet", t2), this.emit("heartbeat"), t2.type) {
                case "open":
                  this.onHandshake(JSON.parse(t2.data));
                  break;
                case "pong":
                  this.setPing(), this.emit("pong");
                  break;
                case "error":
                  var e2 = new Error("server error");
                  e2.code = t2.data, this.onError(e2);
                  break;
                case "message":
                  this.emit("data", t2.data), this.emit("message", t2.data);
              }
          }, n.prototype.onHandshake = function(t2) {
            this.emit("handshake", t2), this.id = t2.sid, this.transport.query.sid = t2.sid, this.upgrades = this.filterUpgrades(t2.upgrades), this.pingInterval = t2.pingInterval, this.pingTimeout = t2.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
          }, n.prototype.onHeartbeat = function(t2) {
            clearTimeout(this.pingTimeoutTimer);
            var e2 = this;
            e2.pingTimeoutTimer = setTimeout(function() {
              "closed" !== e2.readyState && e2.onClose("ping timeout");
            }, t2 || e2.pingInterval + e2.pingTimeout);
          }, n.prototype.setPing = function() {
            var t2 = this;
            clearTimeout(t2.pingIntervalTimer), t2.pingIntervalTimer = setTimeout(function() {
              t2.ping(), t2.onHeartbeat(t2.pingTimeout);
            }, t2.pingInterval);
          }, n.prototype.ping = function() {
            var t2 = this;
            this.sendPacket("ping", function() {
              t2.emit("ping");
            });
          }, n.prototype.onDrain = function() {
            this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
          }, n.prototype.flush = function() {
            "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
          }, n.prototype.write = n.prototype.send = function(t2, e2, r2) {
            return this.sendPacket("message", t2, e2, r2), this;
          }, n.prototype.sendPacket = function(t2, e2, r2, n2) {
            if ("function" == typeof e2 && (n2 = e2, e2 = void 0), "function" == typeof r2 && (n2 = r2, r2 = null), "closing" !== this.readyState && "closed" !== this.readyState) {
              r2 = r2 || {}, r2.compress = false !== r2.compress;
              var o2 = { type: t2, data: e2, options: r2 };
              this.emit("packetCreate", o2), this.writeBuffer.push(o2), n2 && this.once("flush", n2), this.flush();
            }
          }, n.prototype.close = function() {
            function t2() {
              n2.onClose("forced close"), n2.transport.close();
            }
            function e2() {
              n2.removeListener("upgrade", e2), n2.removeListener("upgradeError", e2), t2();
            }
            function r2() {
              n2.once("upgrade", e2), n2.once("upgradeError", e2);
            }
            if ("opening" === this.readyState || "open" === this.readyState) {
              this.readyState = "closing";
              var n2 = this;
              this.writeBuffer.length ? this.once("drain", function() {
                this.upgrading ? r2() : t2();
              }) : this.upgrading ? r2() : t2();
            }
            return this;
          }, n.prototype.onError = function(t2) {
            n.priorWebsocketSuccess = false, this.emit("error", t2), this.onClose("transport error", t2);
          }, n.prototype.onClose = function(t2, e2) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
              var r2 = this;
              clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t2, e2), r2.writeBuffer = [], r2.prevBufferLen = 0;
            }
          }, n.prototype.filterUpgrades = function(t2) {
            for (var e2 = [], r2 = 0, n2 = t2.length; r2 < n2; r2++)
              ~a(this.transports, t2[r2]) && e2.push(t2[r2]);
            return e2;
          };
        }, function(t, e, r) {
          function n(t2) {
            var e2, r2 = false, n2 = false, a2 = false !== t2.jsonp;
            if ("undefined" != typeof location) {
              var c = "https:" === location.protocol, p = location.port;
              p || (p = c ? 443 : 80), r2 = t2.hostname !== location.hostname || p !== t2.port, n2 = t2.secure !== c;
            }
            if (t2.xdomain = r2, t2.xscheme = n2, e2 = new o(t2), "open" in e2 && !t2.forceJSONP)
              return new i(t2);
            if (!a2)
              throw new Error("JSONP disabled");
            return new s(t2);
          }
          var o = r(13), i = r(16), s = r(30), a = r(31);
          e.polling = n, e.websocket = a;
        }, function(t, e, r) {
          var n = r(14), o = r(15);
          t.exports = function(t2) {
            var e2 = t2.xdomain, r2 = t2.xscheme, i = t2.enablesXDR;
            try {
              if ("undefined" != typeof XMLHttpRequest && (!e2 || n))
                return new XMLHttpRequest();
            } catch (t3) {
            }
            try {
              if ("undefined" != typeof XDomainRequest && !r2 && i)
                return new XDomainRequest();
            } catch (t3) {
            }
            if (!e2)
              try {
                return new o[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
              } catch (t3) {
              }
          };
        }, function(t, e) {
          try {
            t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
          } catch (e2) {
            t.exports = false;
          }
        }, function(t, e) {
          t.exports = function() {
            return "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
          }();
        }, function(t, e, r) {
          function n() {
          }
          function o(t2) {
            if (c.call(this, t2), this.requestTimeout = t2.requestTimeout, this.extraHeaders = t2.extraHeaders, "undefined" != typeof location) {
              var e2 = "https:" === location.protocol, r2 = location.port;
              r2 || (r2 = e2 ? 443 : 80), this.xd = "undefined" != typeof location && t2.hostname !== location.hostname || r2 !== t2.port, this.xs = t2.secure !== e2;
            }
          }
          function i(t2) {
            this.method = t2.method || "GET", this.uri = t2.uri, this.xd = !!t2.xd, this.xs = !!t2.xs, this.async = false !== t2.async, this.data = void 0 !== t2.data ? t2.data : null, this.agent = t2.agent, this.isBinary = t2.isBinary, this.supportsBinary = t2.supportsBinary, this.enablesXDR = t2.enablesXDR, this.withCredentials = t2.withCredentials, this.requestTimeout = t2.requestTimeout, this.pfx = t2.pfx, this.key = t2.key, this.passphrase = t2.passphrase, this.cert = t2.cert, this.ca = t2.ca, this.ciphers = t2.ciphers, this.rejectUnauthorized = t2.rejectUnauthorized, this.extraHeaders = t2.extraHeaders, this.create();
          }
          function s() {
            for (var t2 in i.requests)
              i.requests.hasOwnProperty(t2) && i.requests[t2].abort();
          }
          var a = r(13), c = r(17), p = r(5), h = r(28), u = (r(3)("engine.io-client:polling-xhr"), r(15));
          if (t.exports = o, t.exports.Request = i, h(o, c), o.prototype.supportsBinary = true, o.prototype.request = function(t2) {
            return t2 = t2 || {}, t2.uri = this.uri(), t2.xd = this.xd, t2.xs = this.xs, t2.agent = this.agent || false, t2.supportsBinary = this.supportsBinary, t2.enablesXDR = this.enablesXDR, t2.withCredentials = this.withCredentials, t2.pfx = this.pfx, t2.key = this.key, t2.passphrase = this.passphrase, t2.cert = this.cert, t2.ca = this.ca, t2.ciphers = this.ciphers, t2.rejectUnauthorized = this.rejectUnauthorized, t2.requestTimeout = this.requestTimeout, t2.extraHeaders = this.extraHeaders, new i(t2);
          }, o.prototype.doWrite = function(t2, e2) {
            var r2 = "string" != typeof t2 && void 0 !== t2, n2 = this.request({ method: "POST", data: t2, isBinary: r2 }), o2 = this;
            n2.on("success", e2), n2.on("error", function(t3) {
              o2.onError("xhr post error", t3);
            }), this.sendXhr = n2;
          }, o.prototype.doPoll = function() {
            var t2 = this.request(), e2 = this;
            t2.on("data", function(t3) {
              e2.onData(t3);
            }), t2.on("error", function(t3) {
              e2.onError("xhr poll error", t3);
            }), this.pollXhr = t2;
          }, p(i.prototype), i.prototype.create = function() {
            var t2 = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
            t2.pfx = this.pfx, t2.key = this.key, t2.passphrase = this.passphrase, t2.cert = this.cert, t2.ca = this.ca, t2.ciphers = this.ciphers, t2.rejectUnauthorized = this.rejectUnauthorized;
            var e2 = this.xhr = new a(t2), r2 = this;
            try {
              e2.open(this.method, this.uri, this.async);
              try {
                if (this.extraHeaders) {
                  e2.setDisableHeaderCheck && e2.setDisableHeaderCheck(true);
                  for (var n2 in this.extraHeaders)
                    this.extraHeaders.hasOwnProperty(n2) && e2.setRequestHeader(n2, this.extraHeaders[n2]);
                }
              } catch (t3) {
              }
              if ("POST" === this.method)
                try {
                  this.isBinary ? e2.setRequestHeader("Content-type", "application/octet-stream") : e2.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                } catch (t3) {
                }
              try {
                e2.setRequestHeader("Accept", "*/*");
              } catch (t3) {
              }
              "withCredentials" in e2 && (e2.withCredentials = this.withCredentials), this.requestTimeout && (e2.timeout = this.requestTimeout), this.hasXDR() ? (e2.onload = function() {
                r2.onLoad();
              }, e2.onerror = function() {
                r2.onError(e2.responseText);
              }) : e2.onreadystatechange = function() {
                if (2 === e2.readyState)
                  try {
                    var t3 = e2.getResponseHeader("Content-Type");
                    (r2.supportsBinary && "application/octet-stream" === t3 || "application/octet-stream; charset=UTF-8" === t3) && (e2.responseType = "arraybuffer");
                  } catch (t4) {
                  }
                4 === e2.readyState && (200 === e2.status || 1223 === e2.status ? r2.onLoad() : setTimeout(function() {
                  r2.onError("number" == typeof e2.status ? e2.status : 0);
                }, 0));
              }, e2.send(this.data);
            } catch (t3) {
              return void setTimeout(function() {
                r2.onError(t3);
              }, 0);
            }
            "undefined" != typeof document && (this.index = i.requestsCount++, i.requests[this.index] = this);
          }, i.prototype.onSuccess = function() {
            this.emit("success"), this.cleanup();
          }, i.prototype.onData = function(t2) {
            this.emit("data", t2), this.onSuccess();
          }, i.prototype.onError = function(t2) {
            this.emit("error", t2), this.cleanup(true);
          }, i.prototype.cleanup = function(t2) {
            if ("undefined" != typeof this.xhr && null !== this.xhr) {
              if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = n : this.xhr.onreadystatechange = n, t2)
                try {
                  this.xhr.abort();
                } catch (t3) {
                }
              "undefined" != typeof document && delete i.requests[this.index], this.xhr = null;
            }
          }, i.prototype.onLoad = function() {
            var t2;
            try {
              var e2;
              try {
                e2 = this.xhr.getResponseHeader("Content-Type");
              } catch (t3) {
              }
              t2 = "application/octet-stream" === e2 || "application/octet-stream; charset=UTF-8" === e2 ? this.xhr.response || this.xhr.responseText : this.xhr.responseText;
            } catch (t3) {
              this.onError(t3);
            }
            null != t2 && this.onData(t2);
          }, i.prototype.hasXDR = function() {
            return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR;
          }, i.prototype.abort = function() {
            this.cleanup();
          }, i.requestsCount = 0, i.requests = {}, "undefined" != typeof document) {
            if ("function" == typeof attachEvent)
              attachEvent("onunload", s);
            else if ("function" == typeof addEventListener) {
              var f = "onpagehide" in u ? "pagehide" : "unload";
              addEventListener(f, s, false);
            }
          }
        }, function(t, e, r) {
          function n(t2) {
            var e2 = t2 && t2.forceBase64;
            p && !e2 || (this.supportsBinary = false), o.call(this, t2);
          }
          var o = r(18), i = r(27), s = r(19), a = r(28), c = r(29);
          r(3)("engine.io-client:polling");
          t.exports = n;
          var p = function() {
            var t2 = r(13), e2 = new t2({ xdomain: false });
            return null != e2.responseType;
          }();
          a(n, o), n.prototype.name = "polling", n.prototype.doOpen = function() {
            this.poll();
          }, n.prototype.pause = function(t2) {
            function e2() {
              r2.readyState = "paused", t2();
            }
            var r2 = this;
            if (this.readyState = "pausing", this.polling || !this.writable) {
              var n2 = 0;
              this.polling && (n2++, this.once("pollComplete", function() {
                --n2 || e2();
              })), this.writable || (n2++, this.once("drain", function() {
                --n2 || e2();
              }));
            } else
              e2();
          }, n.prototype.poll = function() {
            this.polling = true, this.doPoll(), this.emit("poll");
          }, n.prototype.onData = function(t2) {
            var e2 = this, r2 = function(t3, r3, n2) {
              return "opening" === e2.readyState && "open" === t3.type && e2.onOpen(), "close" === t3.type ? (e2.onClose(), false) : void e2.onPacket(t3);
            };
            s.decodePayload(t2, this.socket.binaryType, r2), "closed" !== this.readyState && (this.polling = false, this.emit("pollComplete"), "open" === this.readyState && this.poll());
          }, n.prototype.doClose = function() {
            function t2() {
              e2.write([{ type: "close" }]);
            }
            var e2 = this;
            "open" === this.readyState ? t2() : this.once("open", t2);
          }, n.prototype.write = function(t2) {
            var e2 = this;
            this.writable = false;
            var r2 = function() {
              e2.writable = true, e2.emit("drain");
            };
            s.encodePayload(t2, this.supportsBinary, function(t3) {
              e2.doWrite(t3, r2);
            });
          }, n.prototype.uri = function() {
            var t2 = this.query || {}, e2 = this.secure ? "https" : "http", r2 = "";
            false !== this.timestampRequests && (t2[this.timestampParam] = c()), this.supportsBinary || t2.sid || (t2.b64 = 1), t2 = i.encode(t2), this.port && ("https" === e2 && 443 !== Number(this.port) || "http" === e2 && 80 !== Number(this.port)) && (r2 = ":" + this.port), t2.length && (t2 = "?" + t2);
            var n2 = this.hostname.indexOf(":") !== -1;
            return e2 + "://" + (n2 ? "[" + this.hostname + "]" : this.hostname) + r2 + this.path + t2;
          };
        }, function(t, e, r) {
          function n(t2) {
            this.path = t2.path, this.hostname = t2.hostname, this.port = t2.port, this.secure = t2.secure, this.query = t2.query, this.timestampParam = t2.timestampParam, this.timestampRequests = t2.timestampRequests, this.readyState = "", this.agent = t2.agent || false, this.socket = t2.socket, this.enablesXDR = t2.enablesXDR, this.withCredentials = t2.withCredentials, this.pfx = t2.pfx, this.key = t2.key, this.passphrase = t2.passphrase, this.cert = t2.cert, this.ca = t2.ca, this.ciphers = t2.ciphers, this.rejectUnauthorized = t2.rejectUnauthorized, this.forceNode = t2.forceNode, this.isReactNative = t2.isReactNative, this.extraHeaders = t2.extraHeaders, this.localAddress = t2.localAddress;
          }
          var o = r(19), i = r(5);
          t.exports = n, i(n.prototype), n.prototype.onError = function(t2, e2) {
            var r2 = new Error(t2);
            return r2.type = "TransportError", r2.description = e2, this.emit("error", r2), this;
          }, n.prototype.open = function() {
            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
          }, n.prototype.close = function() {
            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
          }, n.prototype.send = function(t2) {
            if ("open" !== this.readyState)
              throw new Error("Transport not open");
            this.write(t2);
          }, n.prototype.onOpen = function() {
            this.readyState = "open", this.writable = true, this.emit("open");
          }, n.prototype.onData = function(t2) {
            var e2 = o.decodePacket(t2, this.socket.binaryType);
            this.onPacket(e2);
          }, n.prototype.onPacket = function(t2) {
            this.emit("packet", t2);
          }, n.prototype.onClose = function() {
            this.readyState = "closed", this.emit("close");
          };
        }, function(t, e, r) {
          function n(t2, r2) {
            var n2 = "b" + e.packets[t2.type] + t2.data.data;
            return r2(n2);
          }
          function o(t2, r2, n2) {
            if (!r2)
              return e.encodeBase64Packet(t2, n2);
            var o2 = t2.data, i2 = new Uint8Array(o2), s2 = new Uint8Array(1 + o2.byteLength);
            s2[0] = v[t2.type];
            for (var a2 = 0; a2 < i2.length; a2++)
              s2[a2 + 1] = i2[a2];
            return n2(s2.buffer);
          }
          function i(t2, r2, n2) {
            if (!r2)
              return e.encodeBase64Packet(t2, n2);
            var o2 = new FileReader();
            return o2.onload = function() {
              e.encodePacket({ type: t2.type, data: o2.result }, r2, true, n2);
            }, o2.readAsArrayBuffer(t2.data);
          }
          function s(t2, r2, n2) {
            if (!r2)
              return e.encodeBase64Packet(t2, n2);
            if (g)
              return i(t2, r2, n2);
            var o2 = new Uint8Array(1);
            o2[0] = v[t2.type];
            var s2 = new w([o2.buffer, t2.data]);
            return n2(s2);
          }
          function a(t2) {
            try {
              t2 = d.decode(t2, { strict: false });
            } catch (t3) {
              return false;
            }
            return t2;
          }
          function c(t2, e2, r2) {
            for (var n2 = new Array(t2.length), o2 = l(t2.length, r2), i2 = function(t3, r3, o3) {
              e2(r3, function(e3, r4) {
                n2[t3] = r4, o3(e3, n2);
              });
            }, s2 = 0; s2 < t2.length; s2++)
              i2(s2, t2[s2], o2);
          }
          var p, h = r(20), u = r(21), f = r(22), l = r(23), d = r(24);
          "undefined" != typeof ArrayBuffer && (p = r(25));
          var y = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), m = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), g = y || m;
          e.protocol = 3;
          var v = e.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 }, b = h(v), k = { type: "error", data: "parser error" }, w = r(26);
          e.encodePacket = function(t2, e2, r2, i2) {
            "function" == typeof e2 && (i2 = e2, e2 = false), "function" == typeof r2 && (i2 = r2, r2 = null);
            var a2 = void 0 === t2.data ? void 0 : t2.data.buffer || t2.data;
            if ("undefined" != typeof ArrayBuffer && a2 instanceof ArrayBuffer)
              return o(t2, e2, i2);
            if ("undefined" != typeof w && a2 instanceof w)
              return s(t2, e2, i2);
            if (a2 && a2.base64)
              return n(t2, i2);
            var c2 = v[t2.type];
            return void 0 !== t2.data && (c2 += r2 ? d.encode(String(t2.data), { strict: false }) : String(t2.data)), i2("" + c2);
          }, e.encodeBase64Packet = function(t2, r2) {
            var n2 = "b" + e.packets[t2.type];
            if ("undefined" != typeof w && t2.data instanceof w) {
              var o2 = new FileReader();
              return o2.onload = function() {
                var t3 = o2.result.split(",")[1];
                r2(n2 + t3);
              }, o2.readAsDataURL(t2.data);
            }
            var i2;
            try {
              i2 = String.fromCharCode.apply(null, new Uint8Array(t2.data));
            } catch (e2) {
              for (var s2 = new Uint8Array(t2.data), a2 = new Array(s2.length), c2 = 0; c2 < s2.length; c2++)
                a2[c2] = s2[c2];
              i2 = String.fromCharCode.apply(null, a2);
            }
            return n2 += btoa(i2), r2(n2);
          }, e.decodePacket = function(t2, r2, n2) {
            if (void 0 === t2)
              return k;
            if ("string" == typeof t2) {
              if ("b" === t2.charAt(0))
                return e.decodeBase64Packet(t2.substr(1), r2);
              if (n2 && (t2 = a(t2), t2 === false))
                return k;
              var o2 = t2.charAt(0);
              return Number(o2) == o2 && b[o2] ? t2.length > 1 ? { type: b[o2], data: t2.substring(1) } : { type: b[o2] } : k;
            }
            var i2 = new Uint8Array(t2), o2 = i2[0], s2 = f(t2, 1);
            return w && "blob" === r2 && (s2 = new w([s2])), { type: b[o2], data: s2 };
          }, e.decodeBase64Packet = function(t2, e2) {
            var r2 = b[t2.charAt(0)];
            if (!p)
              return { type: r2, data: { base64: true, data: t2.substr(1) } };
            var n2 = p.decode(t2.substr(1));
            return "blob" === e2 && w && (n2 = new w([n2])), { type: r2, data: n2 };
          }, e.encodePayload = function(t2, r2, n2) {
            function o2(t3) {
              return t3.length + ":" + t3;
            }
            function i2(t3, n3) {
              e.encodePacket(t3, !!s2 && r2, false, function(t4) {
                n3(null, o2(t4));
              });
            }
            "function" == typeof r2 && (n2 = r2, r2 = null);
            var s2 = u(t2);
            return r2 && s2 ? w && !g ? e.encodePayloadAsBlob(t2, n2) : e.encodePayloadAsArrayBuffer(t2, n2) : t2.length ? void c(t2, i2, function(t3, e2) {
              return n2(e2.join(""));
            }) : n2("0:");
          }, e.decodePayload = function(t2, r2, n2) {
            if ("string" != typeof t2)
              return e.decodePayloadAsBinary(t2, r2, n2);
            "function" == typeof r2 && (n2 = r2, r2 = null);
            var o2;
            if ("" === t2)
              return n2(k, 0, 1);
            for (var i2, s2, a2 = "", c2 = 0, p2 = t2.length; c2 < p2; c2++) {
              var h2 = t2.charAt(c2);
              if (":" === h2) {
                if ("" === a2 || a2 != (i2 = Number(a2)))
                  return n2(k, 0, 1);
                if (s2 = t2.substr(c2 + 1, i2), a2 != s2.length)
                  return n2(k, 0, 1);
                if (s2.length) {
                  if (o2 = e.decodePacket(s2, r2, false), k.type === o2.type && k.data === o2.data)
                    return n2(k, 0, 1);
                  var u2 = n2(o2, c2 + i2, p2);
                  if (false === u2)
                    return;
                }
                c2 += i2, a2 = "";
              } else
                a2 += h2;
            }
            return "" !== a2 ? n2(k, 0, 1) : void 0;
          }, e.encodePayloadAsArrayBuffer = function(t2, r2) {
            function n2(t3, r3) {
              e.encodePacket(t3, true, true, function(t4) {
                return r3(null, t4);
              });
            }
            return t2.length ? void c(t2, n2, function(t3, e2) {
              var n3 = e2.reduce(function(t4, e3) {
                var r3;
                return r3 = "string" == typeof e3 ? e3.length : e3.byteLength, t4 + r3.toString().length + r3 + 2;
              }, 0), o2 = new Uint8Array(n3), i2 = 0;
              return e2.forEach(function(t4) {
                var e3 = "string" == typeof t4, r3 = t4;
                if (e3) {
                  for (var n4 = new Uint8Array(t4.length), s2 = 0; s2 < t4.length; s2++)
                    n4[s2] = t4.charCodeAt(s2);
                  r3 = n4.buffer;
                }
                e3 ? o2[i2++] = 0 : o2[i2++] = 1;
                for (var a2 = r3.byteLength.toString(), s2 = 0; s2 < a2.length; s2++)
                  o2[i2++] = parseInt(a2[s2]);
                o2[i2++] = 255;
                for (var n4 = new Uint8Array(r3), s2 = 0; s2 < n4.length; s2++)
                  o2[i2++] = n4[s2];
              }), r2(o2.buffer);
            }) : r2(new ArrayBuffer(0));
          }, e.encodePayloadAsBlob = function(t2, r2) {
            function n2(t3, r3) {
              e.encodePacket(t3, true, true, function(t4) {
                var e2 = new Uint8Array(1);
                if (e2[0] = 1, "string" == typeof t4) {
                  for (var n3 = new Uint8Array(t4.length), o2 = 0; o2 < t4.length; o2++)
                    n3[o2] = t4.charCodeAt(o2);
                  t4 = n3.buffer, e2[0] = 0;
                }
                for (var i2 = t4 instanceof ArrayBuffer ? t4.byteLength : t4.size, s2 = i2.toString(), a2 = new Uint8Array(s2.length + 1), o2 = 0; o2 < s2.length; o2++)
                  a2[o2] = parseInt(s2[o2]);
                if (a2[s2.length] = 255, w) {
                  var c2 = new w([e2.buffer, a2.buffer, t4]);
                  r3(null, c2);
                }
              });
            }
            c(t2, n2, function(t3, e2) {
              return r2(new w(e2));
            });
          }, e.decodePayloadAsBinary = function(t2, r2, n2) {
            "function" == typeof r2 && (n2 = r2, r2 = null);
            for (var o2 = t2, i2 = []; o2.byteLength > 0; ) {
              for (var s2 = new Uint8Array(o2), a2 = 0 === s2[0], c2 = "", p2 = 1; 255 !== s2[p2]; p2++) {
                if (c2.length > 310)
                  return n2(k, 0, 1);
                c2 += s2[p2];
              }
              o2 = f(o2, 2 + c2.length), c2 = parseInt(c2);
              var h2 = f(o2, 0, c2);
              if (a2)
                try {
                  h2 = String.fromCharCode.apply(null, new Uint8Array(h2));
                } catch (t3) {
                  var u2 = new Uint8Array(h2);
                  h2 = "";
                  for (var p2 = 0; p2 < u2.length; p2++)
                    h2 += String.fromCharCode(u2[p2]);
                }
              i2.push(h2), o2 = f(o2, c2);
            }
            var l2 = i2.length;
            i2.forEach(function(t3, o3) {
              n2(e.decodePacket(t3, r2, true), o3, l2);
            });
          };
        }, function(t, e) {
          t.exports = Object.keys || function(t2) {
            var e2 = [], r = Object.prototype.hasOwnProperty;
            for (var n in t2)
              r.call(t2, n) && e2.push(n);
            return e2;
          };
        }, function(t, e, r) {
          function n(t2) {
            if (!t2 || "object" != typeof t2)
              return false;
            if (o(t2)) {
              for (var e2 = 0, r2 = t2.length; e2 < r2; e2++)
                if (n(t2[e2]))
                  return true;
              return false;
            }
            if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(t2) || "function" == typeof ArrayBuffer && t2 instanceof ArrayBuffer || s && t2 instanceof Blob || a && t2 instanceof File)
              return true;
            if (t2.toJSON && "function" == typeof t2.toJSON && 1 === arguments.length)
              return n(t2.toJSON(), true);
            for (var i2 in t2)
              if (Object.prototype.hasOwnProperty.call(t2, i2) && n(t2[i2]))
                return true;
            return false;
          }
          var o = r(7), i = Object.prototype.toString, s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob), a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
          t.exports = n;
        }, function(t, e) {
          t.exports = function(t2, e2, r) {
            var n = t2.byteLength;
            if (e2 = e2 || 0, r = r || n, t2.slice)
              return t2.slice(e2, r);
            if (e2 < 0 && (e2 += n), r < 0 && (r += n), r > n && (r = n), e2 >= n || e2 >= r || 0 === n)
              return new ArrayBuffer(0);
            for (var o = new Uint8Array(t2), i = new Uint8Array(r - e2), s = e2, a = 0; s < r; s++, a++)
              i[a] = o[s];
            return i.buffer;
          };
        }, function(t, e) {
          function r(t2, e2, r2) {
            function o(t3, n2) {
              if (o.count <= 0)
                throw new Error("after called too many times");
              --o.count, t3 ? (i = true, e2(t3), e2 = r2) : 0 !== o.count || i || e2(null, n2);
            }
            var i = false;
            return r2 = r2 || n, o.count = t2, 0 === t2 ? e2() : o;
          }
          function n() {
          }
          t.exports = r;
        }, function(t, e) {
          function r(t2) {
            for (var e2, r2, n2 = [], o2 = 0, i2 = t2.length; o2 < i2; )
              e2 = t2.charCodeAt(o2++), e2 >= 55296 && e2 <= 56319 && o2 < i2 ? (r2 = t2.charCodeAt(o2++), 56320 == (64512 & r2) ? n2.push(((1023 & e2) << 10) + (1023 & r2) + 65536) : (n2.push(e2), o2--)) : n2.push(e2);
            return n2;
          }
          function n(t2) {
            for (var e2, r2 = t2.length, n2 = -1, o2 = ""; ++n2 < r2; )
              e2 = t2[n2], e2 > 65535 && (e2 -= 65536, o2 += d(e2 >>> 10 & 1023 | 55296), e2 = 56320 | 1023 & e2), o2 += d(e2);
            return o2;
          }
          function o(t2, e2) {
            if (t2 >= 55296 && t2 <= 57343) {
              if (e2)
                throw Error("Lone surrogate U+" + t2.toString(16).toUpperCase() + " is not a scalar value");
              return false;
            }
            return true;
          }
          function i(t2, e2) {
            return d(t2 >> e2 & 63 | 128);
          }
          function s(t2, e2) {
            if (0 == (4294967168 & t2))
              return d(t2);
            var r2 = "";
            return 0 == (4294965248 & t2) ? r2 = d(t2 >> 6 & 31 | 192) : 0 == (4294901760 & t2) ? (o(t2, e2) || (t2 = 65533), r2 = d(t2 >> 12 & 15 | 224), r2 += i(t2, 6)) : 0 == (4292870144 & t2) && (r2 = d(t2 >> 18 & 7 | 240), r2 += i(t2, 12), r2 += i(t2, 6)), r2 += d(63 & t2 | 128);
          }
          function a(t2, e2) {
            e2 = e2 || {};
            for (var n2, o2 = false !== e2.strict, i2 = r(t2), a2 = i2.length, c2 = -1, p2 = ""; ++c2 < a2; )
              n2 = i2[c2], p2 += s(n2, o2);
            return p2;
          }
          function c() {
            if (l >= f)
              throw Error("Invalid byte index");
            var t2 = 255 & u[l];
            if (l++, 128 == (192 & t2))
              return 63 & t2;
            throw Error("Invalid continuation byte");
          }
          function p(t2) {
            var e2, r2, n2, i2, s2;
            if (l > f)
              throw Error("Invalid byte index");
            if (l == f)
              return false;
            if (e2 = 255 & u[l], l++, 0 == (128 & e2))
              return e2;
            if (192 == (224 & e2)) {
              if (r2 = c(), s2 = (31 & e2) << 6 | r2, s2 >= 128)
                return s2;
              throw Error("Invalid continuation byte");
            }
            if (224 == (240 & e2)) {
              if (r2 = c(), n2 = c(), s2 = (15 & e2) << 12 | r2 << 6 | n2, s2 >= 2048)
                return o(s2, t2) ? s2 : 65533;
              throw Error("Invalid continuation byte");
            }
            if (240 == (248 & e2) && (r2 = c(), n2 = c(), i2 = c(), s2 = (7 & e2) << 18 | r2 << 12 | n2 << 6 | i2, s2 >= 65536 && s2 <= 1114111))
              return s2;
            throw Error("Invalid UTF-8 detected");
          }
          function h(t2, e2) {
            e2 = e2 || {};
            var o2 = false !== e2.strict;
            u = r(t2), f = u.length, l = 0;
            for (var i2, s2 = []; (i2 = p(o2)) !== false; )
              s2.push(i2);
            return n(s2);
          }
          var u, f, l, d = String.fromCharCode;
          t.exports = { version: "2.1.2", encode: a, decode: h };
        }, function(t, e) {
          !function(t2) {
            "use strict";
            e.encode = function(e2) {
              var r, n = new Uint8Array(e2), o = n.length, i = "";
              for (r = 0; r < o; r += 3)
                i += t2[n[r] >> 2], i += t2[(3 & n[r]) << 4 | n[r + 1] >> 4], i += t2[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], i += t2[63 & n[r + 2]];
              return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i;
            }, e.decode = function(e2) {
              var r, n, o, i, s, a = 0.75 * e2.length, c = e2.length, p = 0;
              "=" === e2[e2.length - 1] && (a--, "=" === e2[e2.length - 2] && a--);
              var h = new ArrayBuffer(a), u = new Uint8Array(h);
              for (r = 0; r < c; r += 4)
                n = t2.indexOf(e2[r]), o = t2.indexOf(e2[r + 1]), i = t2.indexOf(e2[r + 2]), s = t2.indexOf(e2[r + 3]), u[p++] = n << 2 | o >> 4, u[p++] = (15 & o) << 4 | i >> 2, u[p++] = (3 & i) << 6 | 63 & s;
              return h;
            };
          }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
        }, function(t, e) {
          function r(t2) {
            return t2.map(function(t3) {
              if (t3.buffer instanceof ArrayBuffer) {
                var e2 = t3.buffer;
                if (t3.byteLength !== e2.byteLength) {
                  var r2 = new Uint8Array(t3.byteLength);
                  r2.set(new Uint8Array(e2, t3.byteOffset, t3.byteLength)), e2 = r2.buffer;
                }
                return e2;
              }
              return t3;
            });
          }
          function n(t2, e2) {
            e2 = e2 || {};
            var n2 = new i();
            return r(t2).forEach(function(t3) {
              n2.append(t3);
            }), e2.type ? n2.getBlob(e2.type) : n2.getBlob();
          }
          function o(t2, e2) {
            return new Blob(r(t2), e2 || {});
          }
          var i = "undefined" != typeof i ? i : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder, s = function() {
            try {
              var t2 = new Blob(["hi"]);
              return 2 === t2.size;
            } catch (t3) {
              return false;
            }
          }(), a = s && function() {
            try {
              var t2 = new Blob([new Uint8Array([1, 2])]);
              return 2 === t2.size;
            } catch (t3) {
              return false;
            }
          }(), c = i && i.prototype.append && i.prototype.getBlob;
          "undefined" != typeof Blob && (n.prototype = Blob.prototype, o.prototype = Blob.prototype), t.exports = function() {
            return s ? a ? Blob : o : c ? n : void 0;
          }();
        }, function(t, e) {
          e.encode = function(t2) {
            var e2 = "";
            for (var r in t2)
              t2.hasOwnProperty(r) && (e2.length && (e2 += "&"), e2 += encodeURIComponent(r) + "=" + encodeURIComponent(t2[r]));
            return e2;
          }, e.decode = function(t2) {
            for (var e2 = {}, r = t2.split("&"), n = 0, o = r.length; n < o; n++) {
              var i = r[n].split("=");
              e2[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
            }
            return e2;
          };
        }, function(t, e) {
          t.exports = function(t2, e2) {
            var r = function() {
            };
            r.prototype = e2.prototype, t2.prototype = new r(), t2.prototype.constructor = t2;
          };
        }, function(t, e) {
          "use strict";
          function r(t2) {
            var e2 = "";
            do
              e2 = s[t2 % a] + e2, t2 = Math.floor(t2 / a);
            while (t2 > 0);
            return e2;
          }
          function n(t2) {
            var e2 = 0;
            for (h = 0; h < t2.length; h++)
              e2 = e2 * a + c[t2.charAt(h)];
            return e2;
          }
          function o() {
            var t2 = r(+new Date());
            return t2 !== i ? (p = 0, i = t2) : t2 + "." + r(p++);
          }
          for (var i, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, c = {}, p = 0, h = 0; h < a; h++)
            c[s[h]] = h;
          o.encode = r, o.decode = n, t.exports = o;
        }, function(t, e, r) {
          function n() {
          }
          function o(t2) {
            i.call(this, t2), this.query = this.query || {}, c || (c = a.___eio = a.___eio || []), this.index = c.length;
            var e2 = this;
            c.push(function(t3) {
              e2.onData(t3);
            }), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", function() {
              e2.script && (e2.script.onerror = n);
            }, false);
          }
          var i = r(17), s = r(28), a = r(15);
          t.exports = o;
          var c, p = /\n/g, h = /\\n/g;
          s(o, i), o.prototype.supportsBinary = false, o.prototype.doClose = function() {
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), i.prototype.doClose.call(this);
          }, o.prototype.doPoll = function() {
            var t2 = this, e2 = document.createElement("script");
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e2.async = true, e2.src = this.uri(), e2.onerror = function(e3) {
              t2.onError("jsonp poll error", e3);
            };
            var r2 = document.getElementsByTagName("script")[0];
            r2 ? r2.parentNode.insertBefore(e2, r2) : (document.head || document.body).appendChild(e2), this.script = e2;
            var n2 = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
            n2 && setTimeout(function() {
              var t3 = document.createElement("iframe");
              document.body.appendChild(t3), document.body.removeChild(t3);
            }, 100);
          }, o.prototype.doWrite = function(t2, e2) {
            function r2() {
              n2(), e2();
            }
            function n2() {
              if (o2.iframe)
                try {
                  o2.form.removeChild(o2.iframe);
                } catch (t4) {
                  o2.onError("jsonp polling iframe removal error", t4);
                }
              try {
                var t3 = '<iframe src="javascript:0" name="' + o2.iframeId + '">';
                i2 = document.createElement(t3);
              } catch (t4) {
                i2 = document.createElement("iframe"), i2.name = o2.iframeId, i2.src = "javascript:0";
              }
              i2.id = o2.iframeId, o2.form.appendChild(i2), o2.iframe = i2;
            }
            var o2 = this;
            if (!this.form) {
              var i2, s2 = document.createElement("form"), a2 = document.createElement("textarea"), c2 = this.iframeId = "eio_iframe_" + this.index;
              s2.className = "socketio", s2.style.position = "absolute", s2.style.top = "-1000px", s2.style.left = "-1000px", s2.target = c2, s2.method = "POST", s2.setAttribute("accept-charset", "utf-8"), a2.name = "d", s2.appendChild(a2), document.body.appendChild(s2), this.form = s2, this.area = a2;
            }
            this.form.action = this.uri(), n2(), t2 = t2.replace(h, "\\\n"), this.area.value = t2.replace(p, "\\n");
            try {
              this.form.submit();
            } catch (t3) {
            }
            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
              "complete" === o2.iframe.readyState && r2();
            } : this.iframe.onload = r2;
          };
        }, function(t, e, r) {
          function n(t2) {
            var e2 = t2 && t2.forceBase64;
            e2 && (this.supportsBinary = false), this.perMessageDeflate = t2.perMessageDeflate, this.usingBrowserWebSocket = o && !t2.forceNode, this.protocols = t2.protocols, this.usingBrowserWebSocket || (u = i), s.call(this, t2);
          }
          var o, i, s = r(18), a = r(19), c = r(27), p = r(28), h = r(29);
          r(3)("engine.io-client:websocket");
          if ("undefined" != typeof WebSocket ? o = WebSocket : "undefined" != typeof self && (o = self.WebSocket || self.MozWebSocket), "undefined" == typeof window)
            try {
              i = r(32);
            } catch (t2) {
            }
          var u = o || i;
          t.exports = n, p(n, s), n.prototype.name = "websocket", n.prototype.supportsBinary = true, n.prototype.doOpen = function() {
            if (this.check()) {
              var t2 = this.uri(), e2 = this.protocols, r2 = {};
              this.isReactNative || (r2.agent = this.agent, r2.perMessageDeflate = this.perMessageDeflate, r2.pfx = this.pfx, r2.key = this.key, r2.passphrase = this.passphrase, r2.cert = this.cert, r2.ca = this.ca, r2.ciphers = this.ciphers, r2.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (r2.headers = this.extraHeaders), this.localAddress && (r2.localAddress = this.localAddress);
              try {
                this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e2 ? new u(t2, e2) : new u(t2) : new u(t2, e2, r2);
              } catch (t3) {
                return this.emit("error", t3);
              }
              void 0 === this.ws.binaryType && (this.supportsBinary = false), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = true, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
            }
          }, n.prototype.addEventListeners = function() {
            var t2 = this;
            this.ws.onopen = function() {
              t2.onOpen();
            }, this.ws.onclose = function() {
              t2.onClose();
            }, this.ws.onmessage = function(e2) {
              t2.onData(e2.data);
            }, this.ws.onerror = function(e2) {
              t2.onError("websocket error", e2);
            };
          }, n.prototype.write = function(t2) {
            function e2() {
              r2.emit("flush"), setTimeout(function() {
                r2.writable = true, r2.emit("drain");
              }, 0);
            }
            var r2 = this;
            this.writable = false;
            for (var n2 = t2.length, o2 = 0, i2 = n2; o2 < i2; o2++)
              !function(t3) {
                a.encodePacket(t3, r2.supportsBinary, function(o3) {
                  if (!r2.usingBrowserWebSocket) {
                    var i3 = {};
                    if (t3.options && (i3.compress = t3.options.compress), r2.perMessageDeflate) {
                      var s2 = "string" == typeof o3 ? Buffer.byteLength(o3) : o3.length;
                      s2 < r2.perMessageDeflate.threshold && (i3.compress = false);
                    }
                  }
                  try {
                    r2.usingBrowserWebSocket ? r2.ws.send(o3) : r2.ws.send(o3, i3);
                  } catch (t4) {
                  }
                  --n2 || e2();
                });
              }(t2[o2]);
          }, n.prototype.onClose = function() {
            s.prototype.onClose.call(this);
          }, n.prototype.doClose = function() {
            "undefined" != typeof this.ws && this.ws.close();
          }, n.prototype.uri = function() {
            var t2 = this.query || {}, e2 = this.secure ? "wss" : "ws", r2 = "";
            this.port && ("wss" === e2 && 443 !== Number(this.port) || "ws" === e2 && 80 !== Number(this.port)) && (r2 = ":" + this.port), this.timestampRequests && (t2[this.timestampParam] = h()), this.supportsBinary || (t2.b64 = 1), t2 = c.encode(t2), t2.length && (t2 = "?" + t2);
            var n2 = this.hostname.indexOf(":") !== -1;
            return e2 + "://" + (n2 ? "[" + this.hostname + "]" : this.hostname) + r2 + this.path + t2;
          }, n.prototype.check = function() {
            return !(!u || "__initialize" in u && this.name === n.prototype.name);
          };
        }, function(t, e) {
        }, function(t, e) {
          var r = [].indexOf;
          t.exports = function(t2, e2) {
            if (r)
              return t2.indexOf(e2);
            for (var n = 0; n < t2.length; ++n)
              if (t2[n] === e2)
                return n;
            return -1;
          };
        }, function(t, e, r) {
          "use strict";
          function n(t2, e2, r2) {
            this.io = t2, this.nsp = e2, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = false, this.disconnected = true, this.flags = {}, r2 && r2.query && (this.query = r2.query), this.io.autoConnect && this.open();
          }
          var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, i = r(4), s = r(5), a = r(35), c = r(36), p = r(37), h = (r(3)("socket.io-client:socket"), r(27)), u = r(21);
          t.exports = e = n;
          var f = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 }, l = s.prototype.emit;
          s(n.prototype), n.prototype.subEvents = function() {
            if (!this.subs) {
              var t2 = this.io;
              this.subs = [c(t2, "open", p(this, "onopen")), c(t2, "packet", p(this, "onpacket")), c(t2, "close", p(this, "onclose"))];
            }
          }, n.prototype.open = n.prototype.connect = function() {
            return this.connected ? this : (this.subEvents(), this.io.reconnecting || this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this);
          }, n.prototype.send = function() {
            var t2 = a(arguments);
            return t2.unshift("message"), this.emit.apply(this, t2), this;
          }, n.prototype.emit = function(t2) {
            if (f.hasOwnProperty(t2))
              return l.apply(this, arguments), this;
            var e2 = a(arguments), r2 = { type: (void 0 !== this.flags.binary ? this.flags.binary : u(e2)) ? i.BINARY_EVENT : i.EVENT, data: e2 };
            return r2.options = {}, r2.options.compress = !this.flags || false !== this.flags.compress, "function" == typeof e2[e2.length - 1] && (this.acks[this.ids] = e2.pop(), r2.id = this.ids++), this.connected ? this.packet(r2) : this.sendBuffer.push(r2), this.flags = {}, this;
          }, n.prototype.packet = function(t2) {
            t2.nsp = this.nsp, this.io.packet(t2);
          }, n.prototype.onopen = function() {
            if ("/" !== this.nsp)
              if (this.query) {
                var t2 = "object" === o(this.query) ? h.encode(this.query) : this.query;
                this.packet({ type: i.CONNECT, query: t2 });
              } else
                this.packet({ type: i.CONNECT });
          }, n.prototype.onclose = function(t2) {
            this.connected = false, this.disconnected = true, delete this.id, this.emit("disconnect", t2);
          }, n.prototype.onpacket = function(t2) {
            var e2 = t2.nsp === this.nsp, r2 = t2.type === i.ERROR && "/" === t2.nsp;
            if (e2 || r2)
              switch (t2.type) {
                case i.CONNECT:
                  this.onconnect();
                  break;
                case i.EVENT:
                  this.onevent(t2);
                  break;
                case i.BINARY_EVENT:
                  this.onevent(t2);
                  break;
                case i.ACK:
                  this.onack(t2);
                  break;
                case i.BINARY_ACK:
                  this.onack(t2);
                  break;
                case i.DISCONNECT:
                  this.ondisconnect();
                  break;
                case i.ERROR:
                  this.emit("error", t2.data);
              }
          }, n.prototype.onevent = function(t2) {
            var e2 = t2.data || [];
            null != t2.id && e2.push(this.ack(t2.id)), this.connected ? l.apply(this, e2) : this.receiveBuffer.push(e2);
          }, n.prototype.ack = function(t2) {
            var e2 = this, r2 = false;
            return function() {
              if (!r2) {
                r2 = true;
                var n2 = a(arguments);
                e2.packet({ type: u(n2) ? i.BINARY_ACK : i.ACK, id: t2, data: n2 });
              }
            };
          }, n.prototype.onack = function(t2) {
            var e2 = this.acks[t2.id];
            "function" == typeof e2 && (e2.apply(this, t2.data), delete this.acks[t2.id]);
          }, n.prototype.onconnect = function() {
            this.connected = true, this.disconnected = false, this.emit("connect"), this.emitBuffered();
          }, n.prototype.emitBuffered = function() {
            var t2;
            for (t2 = 0; t2 < this.receiveBuffer.length; t2++)
              l.apply(this, this.receiveBuffer[t2]);
            for (this.receiveBuffer = [], t2 = 0; t2 < this.sendBuffer.length; t2++)
              this.packet(this.sendBuffer[t2]);
            this.sendBuffer = [];
          }, n.prototype.ondisconnect = function() {
            this.destroy(), this.onclose("io server disconnect");
          }, n.prototype.destroy = function() {
            if (this.subs) {
              for (var t2 = 0; t2 < this.subs.length; t2++)
                this.subs[t2].destroy();
              this.subs = null;
            }
            this.io.destroy(this);
          }, n.prototype.close = n.prototype.disconnect = function() {
            return this.connected && this.packet({ type: i.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
          }, n.prototype.compress = function(t2) {
            return this.flags.compress = t2, this;
          }, n.prototype.binary = function(t2) {
            return this.flags.binary = t2, this;
          };
        }, function(t, e) {
          function r(t2, e2) {
            var r2 = [];
            e2 = e2 || 0;
            for (var n = e2 || 0; n < t2.length; n++)
              r2[n - e2] = t2[n];
            return r2;
          }
          t.exports = r;
        }, function(t, e) {
          "use strict";
          function r(t2, e2, r2) {
            return t2.on(e2, r2), { destroy: function() {
              t2.removeListener(e2, r2);
            } };
          }
          t.exports = r;
        }, function(t, e) {
          var r = [].slice;
          t.exports = function(t2, e2) {
            if ("string" == typeof e2 && (e2 = t2[e2]), "function" != typeof e2)
              throw new Error("bind() requires a function");
            var n = r.call(arguments, 2);
            return function() {
              return e2.apply(t2, n.concat(r.call(arguments)));
            };
          };
        }, function(t, e) {
          function r(t2) {
            t2 = t2 || {}, this.ms = t2.min || 100, this.max = t2.max || 1e4, this.factor = t2.factor || 2, this.jitter = t2.jitter > 0 && t2.jitter <= 1 ? t2.jitter : 0, this.attempts = 0;
          }
          t.exports = r, r.prototype.duration = function() {
            var t2 = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
              var e2 = Math.random(), r2 = Math.floor(e2 * this.jitter * t2);
              t2 = 0 == (1 & Math.floor(10 * e2)) ? t2 - r2 : t2 + r2;
            }
            return 0 | Math.min(t2, this.max);
          }, r.prototype.reset = function() {
            this.attempts = 0;
          }, r.prototype.setMin = function(t2) {
            this.ms = t2;
          }, r.prototype.setMax = function(t2) {
            this.max = t2;
          }, r.prototype.setJitter = function(t2) {
            this.jitter = t2;
          };
        }]);
      });
    }
  });

  // node_modules/semver/internal/debug.js
  var require_debug = __commonJS({
    "node_modules/semver/internal/debug.js"(exports, module) {
      var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
      };
      module.exports = debug;
    }
  });

  // node_modules/semver/internal/constants.js
  var require_constants = __commonJS({
    "node_modules/semver/internal/constants.js"(exports, module) {
      var SEMVER_SPEC_VERSION = "2.0.0";
      var MAX_LENGTH = 256;
      var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
      var MAX_SAFE_COMPONENT_LENGTH = 16;
      module.exports = {
        SEMVER_SPEC_VERSION,
        MAX_LENGTH,
        MAX_SAFE_INTEGER,
        MAX_SAFE_COMPONENT_LENGTH
      };
    }
  });

  // node_modules/semver/internal/re.js
  var require_re = __commonJS({
    "node_modules/semver/internal/re.js"(exports, module) {
      var { MAX_SAFE_COMPONENT_LENGTH } = require_constants();
      var debug = require_debug();
      exports = module.exports = {};
      var re = exports.re = [];
      var src = exports.src = [];
      var t = exports.t = {};
      var R = 0;
      var createToken = (name, value, isGlobal) => {
        const index = R++;
        debug(name, index, value);
        t[name] = index;
        src[index] = value;
        re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      };
      createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
      createToken("NUMERICIDENTIFIERLOOSE", "[0-9]+");
      createToken("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
      createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
      createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
      createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
      createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
      createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
      createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
      createToken("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
      createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
      createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
      createToken("FULL", `^${src[t.FULLPLAIN]}$`);
      createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
      createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
      createToken("GTLT", "((?:<|>)?=?)");
      createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
      createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
      createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
      createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
      createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
      createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
      createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
      createToken("COERCERTL", src[t.COERCE], true);
      createToken("LONETILDE", "(?:~>?)");
      createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
      exports.tildeTrimReplace = "$1~";
      createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
      createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
      createToken("LONECARET", "(?:\\^)");
      createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
      exports.caretTrimReplace = "$1^";
      createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
      createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
      createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
      createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
      createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
      exports.comparatorTrimReplace = "$1$2$3";
      createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
      createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
      createToken("STAR", "(<|>)?=?\\s*\\*");
      createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
      createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
    }
  });

  // node_modules/semver/internal/parse-options.js
  var require_parse_options = __commonJS({
    "node_modules/semver/internal/parse-options.js"(exports, module) {
      var opts = ["includePrerelease", "loose", "rtl"];
      var parseOptions = (options) => !options ? {} : typeof options !== "object" ? { loose: true } : opts.filter((k) => options[k]).reduce((o, k) => {
        o[k] = true;
        return o;
      }, {});
      module.exports = parseOptions;
    }
  });

  // node_modules/semver/internal/identifiers.js
  var require_identifiers = __commonJS({
    "node_modules/semver/internal/identifiers.js"(exports, module) {
      var numeric = /^[0-9]+$/;
      var compareIdentifiers = (a, b) => {
        const anum = numeric.test(a);
        const bnum = numeric.test(b);
        if (anum && bnum) {
          a = +a;
          b = +b;
        }
        return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
      };
      var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
      module.exports = {
        compareIdentifiers,
        rcompareIdentifiers
      };
    }
  });

  // node_modules/semver/classes/semver.js
  var require_semver = __commonJS({
    "node_modules/semver/classes/semver.js"(exports, module) {
      var debug = require_debug();
      var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
      var { re, t } = require_re();
      var parseOptions = require_parse_options();
      var { compareIdentifiers } = require_identifiers();
      var SemVer = class {
        constructor(version2, options) {
          options = parseOptions(options);
          if (version2 instanceof SemVer) {
            if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
              return version2;
            } else {
              version2 = version2.version;
            }
          } else if (typeof version2 !== "string") {
            throw new TypeError(`Invalid Version: ${version2}`);
          }
          if (version2.length > MAX_LENGTH) {
            throw new TypeError(
              `version is longer than ${MAX_LENGTH} characters`
            );
          }
          debug("SemVer", version2, options);
          this.options = options;
          this.loose = !!options.loose;
          this.includePrerelease = !!options.includePrerelease;
          const m = version2.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
          if (!m) {
            throw new TypeError(`Invalid Version: ${version2}`);
          }
          this.raw = version2;
          this.major = +m[1];
          this.minor = +m[2];
          this.patch = +m[3];
          if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError("Invalid major version");
          }
          if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError("Invalid minor version");
          }
          if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError("Invalid patch version");
          }
          if (!m[4]) {
            this.prerelease = [];
          } else {
            this.prerelease = m[4].split(".").map((id) => {
              if (/^[0-9]+$/.test(id)) {
                const num = +id;
                if (num >= 0 && num < MAX_SAFE_INTEGER) {
                  return num;
                }
              }
              return id;
            });
          }
          this.build = m[5] ? m[5].split(".") : [];
          this.format();
        }
        format() {
          this.version = `${this.major}.${this.minor}.${this.patch}`;
          if (this.prerelease.length) {
            this.version += `-${this.prerelease.join(".")}`;
          }
          return this.version;
        }
        toString() {
          return this.version;
        }
        compare(other) {
          debug("SemVer.compare", this.version, this.options, other);
          if (!(other instanceof SemVer)) {
            if (typeof other === "string" && other === this.version) {
              return 0;
            }
            other = new SemVer(other, this.options);
          }
          if (other.version === this.version) {
            return 0;
          }
          return this.compareMain(other) || this.comparePre(other);
        }
        compareMain(other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
        }
        comparePre(other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          if (this.prerelease.length && !other.prerelease.length) {
            return -1;
          } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
          } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
          }
          let i = 0;
          do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug("prerelease compare", i, a, b);
            if (a === void 0 && b === void 0) {
              return 0;
            } else if (b === void 0) {
              return 1;
            } else if (a === void 0) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i);
        }
        compareBuild(other) {
          if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
          }
          let i = 0;
          do {
            const a = this.build[i];
            const b = other.build[i];
            debug("prerelease compare", i, a, b);
            if (a === void 0 && b === void 0) {
              return 0;
            } else if (b === void 0) {
              return 1;
            } else if (a === void 0) {
              return -1;
            } else if (a === b) {
              continue;
            } else {
              return compareIdentifiers(a, b);
            }
          } while (++i);
        }
        inc(release, identifier) {
          switch (release) {
            case "premajor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor = 0;
              this.major++;
              this.inc("pre", identifier);
              break;
            case "preminor":
              this.prerelease.length = 0;
              this.patch = 0;
              this.minor++;
              this.inc("pre", identifier);
              break;
            case "prepatch":
              this.prerelease.length = 0;
              this.inc("patch", identifier);
              this.inc("pre", identifier);
              break;
            case "prerelease":
              if (this.prerelease.length === 0) {
                this.inc("patch", identifier);
              }
              this.inc("pre", identifier);
              break;
            case "major":
              if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                this.major++;
              }
              this.minor = 0;
              this.patch = 0;
              this.prerelease = [];
              break;
            case "minor":
              if (this.patch !== 0 || this.prerelease.length === 0) {
                this.minor++;
              }
              this.patch = 0;
              this.prerelease = [];
              break;
            case "patch":
              if (this.prerelease.length === 0) {
                this.patch++;
              }
              this.prerelease = [];
              break;
            case "pre":
              if (this.prerelease.length === 0) {
                this.prerelease = [0];
              } else {
                let i = this.prerelease.length;
                while (--i >= 0) {
                  if (typeof this.prerelease[i] === "number") {
                    this.prerelease[i]++;
                    i = -2;
                  }
                }
                if (i === -1) {
                  this.prerelease.push(0);
                }
              }
              if (identifier) {
                if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                  if (isNaN(this.prerelease[1])) {
                    this.prerelease = [identifier, 0];
                  }
                } else {
                  this.prerelease = [identifier, 0];
                }
              }
              break;
            default:
              throw new Error(`invalid increment argument: ${release}`);
          }
          this.format();
          this.raw = this.version;
          return this;
        }
      };
      module.exports = SemVer;
    }
  });

  // node_modules/semver/functions/compare.js
  var require_compare = __commonJS({
    "node_modules/semver/functions/compare.js"(exports, module) {
      var SemVer = require_semver();
      var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
      module.exports = compare;
    }
  });

  // node_modules/semver/functions/gte.js
  var require_gte = __commonJS({
    "node_modules/semver/functions/gte.js"(exports, module) {
      var compare = require_compare();
      var gte2 = (a, b, loose) => compare(a, b, loose) >= 0;
      module.exports = gte2;
    }
  });

  // node_modules/lodash.debounce/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.debounce/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var NAN = 0 / 0;
      var symbolTag = "[object Symbol]";
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      var now = function() {
        return root.Date.now();
      };
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
          return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = debounce2;
    }
  });

  // node_modules/source-map-js/lib/base64.js
  var require_base64 = __commonJS({
    "node_modules/source-map-js/lib/base64.js"(exports) {
      var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      exports.encode = function(number) {
        if (0 <= number && number < intToCharMap.length) {
          return intToCharMap[number];
        }
        throw new TypeError("Must be between 0 and 63: " + number);
      };
      exports.decode = function(charCode) {
        var bigA = 65;
        var bigZ = 90;
        var littleA = 97;
        var littleZ = 122;
        var zero = 48;
        var nine = 57;
        var plus = 43;
        var slash = 47;
        var littleOffset = 26;
        var numberOffset = 52;
        if (bigA <= charCode && charCode <= bigZ) {
          return charCode - bigA;
        }
        if (littleA <= charCode && charCode <= littleZ) {
          return charCode - littleA + littleOffset;
        }
        if (zero <= charCode && charCode <= nine) {
          return charCode - zero + numberOffset;
        }
        if (charCode == plus) {
          return 62;
        }
        if (charCode == slash) {
          return 63;
        }
        return -1;
      };
    }
  });

  // node_modules/source-map-js/lib/base64-vlq.js
  var require_base64_vlq = __commonJS({
    "node_modules/source-map-js/lib/base64-vlq.js"(exports) {
      var base64 = require_base64();
      var VLQ_BASE_SHIFT = 5;
      var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
      var VLQ_BASE_MASK = VLQ_BASE - 1;
      var VLQ_CONTINUATION_BIT = VLQ_BASE;
      function toVLQSigned(aValue) {
        return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
      }
      function fromVLQSigned(aValue) {
        var isNegative = (aValue & 1) === 1;
        var shifted = aValue >> 1;
        return isNegative ? -shifted : shifted;
      }
      exports.encode = function base64VLQ_encode(aValue) {
        var encoded = "";
        var digit;
        var vlq = toVLQSigned(aValue);
        do {
          digit = vlq & VLQ_BASE_MASK;
          vlq >>>= VLQ_BASE_SHIFT;
          if (vlq > 0) {
            digit |= VLQ_CONTINUATION_BIT;
          }
          encoded += base64.encode(digit);
        } while (vlq > 0);
        return encoded;
      };
      exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
        var strLen = aStr.length;
        var result = 0;
        var shift = 0;
        var continuation, digit;
        do {
          if (aIndex >= strLen) {
            throw new Error("Expected more digits in base 64 VLQ value.");
          }
          digit = base64.decode(aStr.charCodeAt(aIndex++));
          if (digit === -1) {
            throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
          }
          continuation = !!(digit & VLQ_CONTINUATION_BIT);
          digit &= VLQ_BASE_MASK;
          result = result + (digit << shift);
          shift += VLQ_BASE_SHIFT;
        } while (continuation);
        aOutParam.value = fromVLQSigned(result);
        aOutParam.rest = aIndex;
      };
    }
  });

  // node_modules/source-map-js/lib/util.js
  var require_util = __commonJS({
    "node_modules/source-map-js/lib/util.js"(exports) {
      function getArg(aArgs, aName, aDefaultValue) {
        if (aName in aArgs) {
          return aArgs[aName];
        } else if (arguments.length === 3) {
          return aDefaultValue;
        } else {
          throw new Error('"' + aName + '" is a required argument.');
        }
      }
      exports.getArg = getArg;
      var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
      var dataUrlRegexp = /^data:.+\,.+$/;
      function urlParse(aUrl) {
        var match = aUrl.match(urlRegexp);
        if (!match) {
          return null;
        }
        return {
          scheme: match[1],
          auth: match[2],
          host: match[3],
          port: match[4],
          path: match[5]
        };
      }
      exports.urlParse = urlParse;
      function urlGenerate(aParsedUrl) {
        var url = "";
        if (aParsedUrl.scheme) {
          url += aParsedUrl.scheme + ":";
        }
        url += "//";
        if (aParsedUrl.auth) {
          url += aParsedUrl.auth + "@";
        }
        if (aParsedUrl.host) {
          url += aParsedUrl.host;
        }
        if (aParsedUrl.port) {
          url += ":" + aParsedUrl.port;
        }
        if (aParsedUrl.path) {
          url += aParsedUrl.path;
        }
        return url;
      }
      exports.urlGenerate = urlGenerate;
      var MAX_CACHED_INPUTS = 32;
      function lruMemoize(f) {
        var cache2 = [];
        return function(input) {
          for (var i = 0; i < cache2.length; i++) {
            if (cache2[i].input === input) {
              var temp = cache2[0];
              cache2[0] = cache2[i];
              cache2[i] = temp;
              return cache2[0].result;
            }
          }
          var result = f(input);
          cache2.unshift({
            input,
            result
          });
          if (cache2.length > MAX_CACHED_INPUTS) {
            cache2.pop();
          }
          return result;
        };
      }
      var normalize2 = lruMemoize(function normalize3(aPath) {
        var path = aPath;
        var url = urlParse(aPath);
        if (url) {
          if (!url.path) {
            return aPath;
          }
          path = url.path;
        }
        var isAbsolute = exports.isAbsolute(path);
        var parts = [];
        var start = 0;
        var i = 0;
        while (true) {
          start = i;
          i = path.indexOf("/", start);
          if (i === -1) {
            parts.push(path.slice(start));
            break;
          } else {
            parts.push(path.slice(start, i));
            while (i < path.length && path[i] === "/") {
              i++;
            }
          }
        }
        for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
          part = parts[i];
          if (part === ".") {
            parts.splice(i, 1);
          } else if (part === "..") {
            up++;
          } else if (up > 0) {
            if (part === "") {
              parts.splice(i + 1, up);
              up = 0;
            } else {
              parts.splice(i, 2);
              up--;
            }
          }
        }
        path = parts.join("/");
        if (path === "") {
          path = isAbsolute ? "/" : ".";
        }
        if (url) {
          url.path = path;
          return urlGenerate(url);
        }
        return path;
      });
      exports.normalize = normalize2;
      function join(aRoot, aPath) {
        if (aRoot === "") {
          aRoot = ".";
        }
        if (aPath === "") {
          aPath = ".";
        }
        var aPathUrl = urlParse(aPath);
        var aRootUrl = urlParse(aRoot);
        if (aRootUrl) {
          aRoot = aRootUrl.path || "/";
        }
        if (aPathUrl && !aPathUrl.scheme) {
          if (aRootUrl) {
            aPathUrl.scheme = aRootUrl.scheme;
          }
          return urlGenerate(aPathUrl);
        }
        if (aPathUrl || aPath.match(dataUrlRegexp)) {
          return aPath;
        }
        if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
          aRootUrl.host = aPath;
          return urlGenerate(aRootUrl);
        }
        var joined = aPath.charAt(0) === "/" ? aPath : normalize2(aRoot.replace(/\/+$/, "") + "/" + aPath);
        if (aRootUrl) {
          aRootUrl.path = joined;
          return urlGenerate(aRootUrl);
        }
        return joined;
      }
      exports.join = join;
      exports.isAbsolute = function(aPath) {
        return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
      };
      function relative(aRoot, aPath) {
        if (aRoot === "") {
          aRoot = ".";
        }
        aRoot = aRoot.replace(/\/$/, "");
        var level = 0;
        while (aPath.indexOf(aRoot + "/") !== 0) {
          var index = aRoot.lastIndexOf("/");
          if (index < 0) {
            return aPath;
          }
          aRoot = aRoot.slice(0, index);
          if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
            return aPath;
          }
          ++level;
        }
        return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
      }
      exports.relative = relative;
      var supportsNullProto = function() {
        var obj = /* @__PURE__ */ Object.create(null);
        return !("__proto__" in obj);
      }();
      function identity(s) {
        return s;
      }
      function toSetString(aStr) {
        if (isProtoString(aStr)) {
          return "$" + aStr;
        }
        return aStr;
      }
      exports.toSetString = supportsNullProto ? identity : toSetString;
      function fromSetString(aStr) {
        if (isProtoString(aStr)) {
          return aStr.slice(1);
        }
        return aStr;
      }
      exports.fromSetString = supportsNullProto ? identity : fromSetString;
      function isProtoString(s) {
        if (!s) {
          return false;
        }
        var length = s.length;
        if (length < 9) {
          return false;
        }
        if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
          return false;
        }
        for (var i = length - 10; i >= 0; i--) {
          if (s.charCodeAt(i) !== 36) {
            return false;
          }
        }
        return true;
      }
      function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
        var cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0 || onlyCompareOriginal) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByOriginalPositions = compareByOriginalPositions;
      function compareByOriginalPositionsNoSource(mappingA, mappingB, onlyCompareOriginal) {
        var cmp;
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0 || onlyCompareOriginal) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByOriginalPositionsNoSource = compareByOriginalPositionsNoSource;
      function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0 || onlyCompareGenerated) {
          return cmp;
        }
        cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
          return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
      function compareByGeneratedPositionsDeflatedNoLine(mappingA, mappingB, onlyCompareGenerated) {
        var cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0 || onlyCompareGenerated) {
          return cmp;
        }
        cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
          return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByGeneratedPositionsDeflatedNoLine = compareByGeneratedPositionsDeflatedNoLine;
      function strcmp(aStr1, aStr2) {
        if (aStr1 === aStr2) {
          return 0;
        }
        if (aStr1 === null) {
          return 1;
        }
        if (aStr2 === null) {
          return -1;
        }
        if (aStr1 > aStr2) {
          return 1;
        }
        return -1;
      }
      function compareByGeneratedPositionsInflated(mappingA, mappingB) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
          return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
      function parseSourceMapInput(str) {
        return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
      }
      exports.parseSourceMapInput = parseSourceMapInput;
      function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
        sourceURL = sourceURL || "";
        if (sourceRoot) {
          if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
            sourceRoot += "/";
          }
          sourceURL = sourceRoot + sourceURL;
        }
        if (sourceMapURL) {
          var parsed = urlParse(sourceMapURL);
          if (!parsed) {
            throw new Error("sourceMapURL could not be parsed");
          }
          if (parsed.path) {
            var index = parsed.path.lastIndexOf("/");
            if (index >= 0) {
              parsed.path = parsed.path.substring(0, index + 1);
            }
          }
          sourceURL = join(urlGenerate(parsed), sourceURL);
        }
        return normalize2(sourceURL);
      }
      exports.computeSourceURL = computeSourceURL;
    }
  });

  // node_modules/source-map-js/lib/array-set.js
  var require_array_set = __commonJS({
    "node_modules/source-map-js/lib/array-set.js"(exports) {
      var util = require_util();
      var has = Object.prototype.hasOwnProperty;
      var hasNativeMap = typeof Map !== "undefined";
      function ArraySet() {
        this._array = [];
        this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
      }
      ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
        var set = new ArraySet();
        for (var i = 0, len = aArray.length; i < len; i++) {
          set.add(aArray[i], aAllowDuplicates);
        }
        return set;
      };
      ArraySet.prototype.size = function ArraySet_size() {
        return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
      };
      ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
        var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
        var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
        var idx = this._array.length;
        if (!isDuplicate || aAllowDuplicates) {
          this._array.push(aStr);
        }
        if (!isDuplicate) {
          if (hasNativeMap) {
            this._set.set(aStr, idx);
          } else {
            this._set[sStr] = idx;
          }
        }
      };
      ArraySet.prototype.has = function ArraySet_has(aStr) {
        if (hasNativeMap) {
          return this._set.has(aStr);
        } else {
          var sStr = util.toSetString(aStr);
          return has.call(this._set, sStr);
        }
      };
      ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
        if (hasNativeMap) {
          var idx = this._set.get(aStr);
          if (idx >= 0) {
            return idx;
          }
        } else {
          var sStr = util.toSetString(aStr);
          if (has.call(this._set, sStr)) {
            return this._set[sStr];
          }
        }
        throw new Error('"' + aStr + '" is not in the set.');
      };
      ArraySet.prototype.at = function ArraySet_at(aIdx) {
        if (aIdx >= 0 && aIdx < this._array.length) {
          return this._array[aIdx];
        }
        throw new Error("No element indexed by " + aIdx);
      };
      ArraySet.prototype.toArray = function ArraySet_toArray() {
        return this._array.slice();
      };
      exports.ArraySet = ArraySet;
    }
  });

  // node_modules/source-map-js/lib/mapping-list.js
  var require_mapping_list = __commonJS({
    "node_modules/source-map-js/lib/mapping-list.js"(exports) {
      var util = require_util();
      function generatedPositionAfter(mappingA, mappingB) {
        var lineA = mappingA.generatedLine;
        var lineB = mappingB.generatedLine;
        var columnA = mappingA.generatedColumn;
        var columnB = mappingB.generatedColumn;
        return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
      }
      function MappingList() {
        this._array = [];
        this._sorted = true;
        this._last = { generatedLine: -1, generatedColumn: 0 };
      }
      MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
        this._array.forEach(aCallback, aThisArg);
      };
      MappingList.prototype.add = function MappingList_add(aMapping) {
        if (generatedPositionAfter(this._last, aMapping)) {
          this._last = aMapping;
          this._array.push(aMapping);
        } else {
          this._sorted = false;
          this._array.push(aMapping);
        }
      };
      MappingList.prototype.toArray = function MappingList_toArray() {
        if (!this._sorted) {
          this._array.sort(util.compareByGeneratedPositionsInflated);
          this._sorted = true;
        }
        return this._array;
      };
      exports.MappingList = MappingList;
    }
  });

  // node_modules/source-map-js/lib/source-map-generator.js
  var require_source_map_generator = __commonJS({
    "node_modules/source-map-js/lib/source-map-generator.js"(exports) {
      var base64VLQ = require_base64_vlq();
      var util = require_util();
      var ArraySet = require_array_set().ArraySet;
      var MappingList = require_mapping_list().MappingList;
      function SourceMapGenerator(aArgs) {
        if (!aArgs) {
          aArgs = {};
        }
        this._file = util.getArg(aArgs, "file", null);
        this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
        this._skipValidation = util.getArg(aArgs, "skipValidation", false);
        this._sources = new ArraySet();
        this._names = new ArraySet();
        this._mappings = new MappingList();
        this._sourcesContents = null;
      }
      SourceMapGenerator.prototype._version = 3;
      SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
        var sourceRoot = aSourceMapConsumer.sourceRoot;
        var generator = new SourceMapGenerator({
          file: aSourceMapConsumer.file,
          sourceRoot
        });
        aSourceMapConsumer.eachMapping(function(mapping) {
          var newMapping = {
            generated: {
              line: mapping.generatedLine,
              column: mapping.generatedColumn
            }
          };
          if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) {
              newMapping.source = util.relative(sourceRoot, newMapping.source);
            }
            newMapping.original = {
              line: mapping.originalLine,
              column: mapping.originalColumn
            };
            if (mapping.name != null) {
              newMapping.name = mapping.name;
            }
          }
          generator.addMapping(newMapping);
        });
        aSourceMapConsumer.sources.forEach(function(sourceFile) {
          var sourceRelative = sourceFile;
          if (sourceRoot !== null) {
            sourceRelative = util.relative(sourceRoot, sourceFile);
          }
          if (!generator._sources.has(sourceRelative)) {
            generator._sources.add(sourceRelative);
          }
          var content = aSourceMapConsumer.sourceContentFor(sourceFile);
          if (content != null) {
            generator.setSourceContent(sourceFile, content);
          }
        });
        return generator;
      };
      SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
        var generated = util.getArg(aArgs, "generated");
        var original = util.getArg(aArgs, "original", null);
        var source = util.getArg(aArgs, "source", null);
        var name = util.getArg(aArgs, "name", null);
        if (!this._skipValidation) {
          this._validateMapping(generated, original, source, name);
        }
        if (source != null) {
          source = String(source);
          if (!this._sources.has(source)) {
            this._sources.add(source);
          }
        }
        if (name != null) {
          name = String(name);
          if (!this._names.has(name)) {
            this._names.add(name);
          }
        }
        this._mappings.add({
          generatedLine: generated.line,
          generatedColumn: generated.column,
          originalLine: original != null && original.line,
          originalColumn: original != null && original.column,
          source,
          name
        });
      };
      SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
        var source = aSourceFile;
        if (this._sourceRoot != null) {
          source = util.relative(this._sourceRoot, source);
        }
        if (aSourceContent != null) {
          if (!this._sourcesContents) {
            this._sourcesContents = /* @__PURE__ */ Object.create(null);
          }
          this._sourcesContents[util.toSetString(source)] = aSourceContent;
        } else if (this._sourcesContents) {
          delete this._sourcesContents[util.toSetString(source)];
          if (Object.keys(this._sourcesContents).length === 0) {
            this._sourcesContents = null;
          }
        }
      };
      SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
        var sourceFile = aSourceFile;
        if (aSourceFile == null) {
          if (aSourceMapConsumer.file == null) {
            throw new Error(
              `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
            );
          }
          sourceFile = aSourceMapConsumer.file;
        }
        var sourceRoot = this._sourceRoot;
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        var newSources = new ArraySet();
        var newNames = new ArraySet();
        this._mappings.unsortedForEach(function(mapping) {
          if (mapping.source === sourceFile && mapping.originalLine != null) {
            var original = aSourceMapConsumer.originalPositionFor({
              line: mapping.originalLine,
              column: mapping.originalColumn
            });
            if (original.source != null) {
              mapping.source = original.source;
              if (aSourceMapPath != null) {
                mapping.source = util.join(aSourceMapPath, mapping.source);
              }
              if (sourceRoot != null) {
                mapping.source = util.relative(sourceRoot, mapping.source);
              }
              mapping.originalLine = original.line;
              mapping.originalColumn = original.column;
              if (original.name != null) {
                mapping.name = original.name;
              }
            }
          }
          var source = mapping.source;
          if (source != null && !newSources.has(source)) {
            newSources.add(source);
          }
          var name = mapping.name;
          if (name != null && !newNames.has(name)) {
            newNames.add(name);
          }
        }, this);
        this._sources = newSources;
        this._names = newNames;
        aSourceMapConsumer.sources.forEach(function(sourceFile2) {
          var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
          if (content != null) {
            if (aSourceMapPath != null) {
              sourceFile2 = util.join(aSourceMapPath, sourceFile2);
            }
            if (sourceRoot != null) {
              sourceFile2 = util.relative(sourceRoot, sourceFile2);
            }
            this.setSourceContent(sourceFile2, content);
          }
        }, this);
      };
      SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
        if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
          throw new Error(
            "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
          );
        }
        if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
          return;
        } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
          return;
        } else {
          throw new Error("Invalid mapping: " + JSON.stringify({
            generated: aGenerated,
            source: aSource,
            original: aOriginal,
            name: aName
          }));
        }
      };
      SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
        var previousGeneratedColumn = 0;
        var previousGeneratedLine = 1;
        var previousOriginalColumn = 0;
        var previousOriginalLine = 0;
        var previousName = 0;
        var previousSource = 0;
        var result = "";
        var next;
        var mapping;
        var nameIdx;
        var sourceIdx;
        var mappings = this._mappings.toArray();
        for (var i = 0, len = mappings.length; i < len; i++) {
          mapping = mappings[i];
          next = "";
          if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while (mapping.generatedLine !== previousGeneratedLine) {
              next += ";";
              previousGeneratedLine++;
            }
          } else {
            if (i > 0) {
              if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
                continue;
              }
              next += ",";
            }
          }
          next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
          previousGeneratedColumn = mapping.generatedColumn;
          if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            next += base64VLQ.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
              nameIdx = this._names.indexOf(mapping.name);
              next += base64VLQ.encode(nameIdx - previousName);
              previousName = nameIdx;
            }
          }
          result += next;
        }
        return result;
      };
      SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
        return aSources.map(function(source) {
          if (!this._sourcesContents) {
            return null;
          }
          if (aSourceRoot != null) {
            source = util.relative(aSourceRoot, source);
          }
          var key = util.toSetString(source);
          return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
        }, this);
      };
      SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
        var map = {
          version: this._version,
          sources: this._sources.toArray(),
          names: this._names.toArray(),
          mappings: this._serializeMappings()
        };
        if (this._file != null) {
          map.file = this._file;
        }
        if (this._sourceRoot != null) {
          map.sourceRoot = this._sourceRoot;
        }
        if (this._sourcesContents) {
          map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
        }
        return map;
      };
      SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
        return JSON.stringify(this.toJSON());
      };
      exports.SourceMapGenerator = SourceMapGenerator;
    }
  });

  // node_modules/source-map-js/lib/binary-search.js
  var require_binary_search = __commonJS({
    "node_modules/source-map-js/lib/binary-search.js"(exports) {
      exports.GREATEST_LOWER_BOUND = 1;
      exports.LEAST_UPPER_BOUND = 2;
      function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
        var mid = Math.floor((aHigh - aLow) / 2) + aLow;
        var cmp = aCompare(aNeedle, aHaystack[mid], true);
        if (cmp === 0) {
          return mid;
        } else if (cmp > 0) {
          if (aHigh - mid > 1) {
            return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
          }
          if (aBias == exports.LEAST_UPPER_BOUND) {
            return aHigh < aHaystack.length ? aHigh : -1;
          } else {
            return mid;
          }
        } else {
          if (mid - aLow > 1) {
            return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
          }
          if (aBias == exports.LEAST_UPPER_BOUND) {
            return mid;
          } else {
            return aLow < 0 ? -1 : aLow;
          }
        }
      }
      exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
        if (aHaystack.length === 0) {
          return -1;
        }
        var index = recursiveSearch(
          -1,
          aHaystack.length,
          aNeedle,
          aHaystack,
          aCompare,
          aBias || exports.GREATEST_LOWER_BOUND
        );
        if (index < 0) {
          return -1;
        }
        while (index - 1 >= 0) {
          if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
            break;
          }
          --index;
        }
        return index;
      };
    }
  });

  // node_modules/source-map-js/lib/quick-sort.js
  var require_quick_sort = __commonJS({
    "node_modules/source-map-js/lib/quick-sort.js"(exports) {
      function SortTemplate(comparator) {
        function swap(ary, x, y) {
          var temp = ary[x];
          ary[x] = ary[y];
          ary[y] = temp;
        }
        function randomIntInRange(low, high) {
          return Math.round(low + Math.random() * (high - low));
        }
        function doQuickSort(ary, comparator2, p, r) {
          if (p < r) {
            var pivotIndex = randomIntInRange(p, r);
            var i = p - 1;
            swap(ary, pivotIndex, r);
            var pivot = ary[r];
            for (var j = p; j < r; j++) {
              if (comparator2(ary[j], pivot, false) <= 0) {
                i += 1;
                swap(ary, i, j);
              }
            }
            swap(ary, i + 1, j);
            var q = i + 1;
            doQuickSort(ary, comparator2, p, q - 1);
            doQuickSort(ary, comparator2, q + 1, r);
          }
        }
        return doQuickSort;
      }
      function cloneSort(comparator) {
        let template = SortTemplate.toString();
        let templateFn = new Function(`return ${template}`)();
        return templateFn(comparator);
      }
      var sortCache = /* @__PURE__ */ new WeakMap();
      exports.quickSort = function(ary, comparator, start = 0) {
        let doQuickSort = sortCache.get(comparator);
        if (doQuickSort === void 0) {
          doQuickSort = cloneSort(comparator);
          sortCache.set(comparator, doQuickSort);
        }
        doQuickSort(ary, comparator, start, ary.length - 1);
      };
    }
  });

  // node_modules/source-map-js/lib/source-map-consumer.js
  var require_source_map_consumer = __commonJS({
    "node_modules/source-map-js/lib/source-map-consumer.js"(exports) {
      var util = require_util();
      var binarySearch = require_binary_search();
      var ArraySet = require_array_set().ArraySet;
      var base64VLQ = require_base64_vlq();
      var quickSort = require_quick_sort().quickSort;
      function SourceMapConsumer2(aSourceMap, aSourceMapURL) {
        var sourceMap = aSourceMap;
        if (typeof aSourceMap === "string") {
          sourceMap = util.parseSourceMapInput(aSourceMap);
        }
        return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
      }
      SourceMapConsumer2.fromSourceMap = function(aSourceMap, aSourceMapURL) {
        return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
      };
      SourceMapConsumer2.prototype._version = 3;
      SourceMapConsumer2.prototype.__generatedMappings = null;
      Object.defineProperty(SourceMapConsumer2.prototype, "_generatedMappings", {
        configurable: true,
        enumerable: true,
        get: function() {
          if (!this.__generatedMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
          }
          return this.__generatedMappings;
        }
      });
      SourceMapConsumer2.prototype.__originalMappings = null;
      Object.defineProperty(SourceMapConsumer2.prototype, "_originalMappings", {
        configurable: true,
        enumerable: true,
        get: function() {
          if (!this.__originalMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
          }
          return this.__originalMappings;
        }
      });
      SourceMapConsumer2.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
        var c = aStr.charAt(index);
        return c === ";" || c === ",";
      };
      SourceMapConsumer2.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        throw new Error("Subclasses must implement _parseMappings");
      };
      SourceMapConsumer2.GENERATED_ORDER = 1;
      SourceMapConsumer2.ORIGINAL_ORDER = 2;
      SourceMapConsumer2.GREATEST_LOWER_BOUND = 1;
      SourceMapConsumer2.LEAST_UPPER_BOUND = 2;
      SourceMapConsumer2.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
        var context = aContext || null;
        var order = aOrder || SourceMapConsumer2.GENERATED_ORDER;
        var mappings;
        switch (order) {
          case SourceMapConsumer2.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
          case SourceMapConsumer2.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
          default:
            throw new Error("Unknown order of iteration.");
        }
        var sourceRoot = this.sourceRoot;
        var boundCallback = aCallback.bind(context);
        var names = this._names;
        var sources = this._sources;
        var sourceMapURL = this._sourceMapURL;
        for (var i = 0, n = mappings.length; i < n; i++) {
          var mapping = mappings[i];
          var source = mapping.source === null ? null : sources.at(mapping.source);
          source = util.computeSourceURL(sourceRoot, source, sourceMapURL);
          boundCallback({
            source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : names.at(mapping.name)
          });
        }
      };
      SourceMapConsumer2.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
        var line = util.getArg(aArgs, "line");
        var needle = {
          source: util.getArg(aArgs, "source"),
          originalLine: line,
          originalColumn: util.getArg(aArgs, "column", 0)
        };
        needle.source = this._findSourceIndex(needle.source);
        if (needle.source < 0) {
          return [];
        }
        var mappings = [];
        var index = this._findMapping(
          needle,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          util.compareByOriginalPositions,
          binarySearch.LEAST_UPPER_BOUND
        );
        if (index >= 0) {
          var mapping = this._originalMappings[index];
          if (aArgs.column === void 0) {
            var originalLine = mapping.originalLine;
            while (mapping && mapping.originalLine === originalLine) {
              mappings.push({
                line: util.getArg(mapping, "generatedLine", null),
                column: util.getArg(mapping, "generatedColumn", null),
                lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
              });
              mapping = this._originalMappings[++index];
            }
          } else {
            var originalColumn = mapping.originalColumn;
            while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
              mappings.push({
                line: util.getArg(mapping, "generatedLine", null),
                column: util.getArg(mapping, "generatedColumn", null),
                lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
              });
              mapping = this._originalMappings[++index];
            }
          }
        }
        return mappings;
      };
      exports.SourceMapConsumer = SourceMapConsumer2;
      function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
        var sourceMap = aSourceMap;
        if (typeof aSourceMap === "string") {
          sourceMap = util.parseSourceMapInput(aSourceMap);
        }
        var version2 = util.getArg(sourceMap, "version");
        var sources = util.getArg(sourceMap, "sources");
        var names = util.getArg(sourceMap, "names", []);
        var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
        var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
        var mappings = util.getArg(sourceMap, "mappings");
        var file = util.getArg(sourceMap, "file", null);
        if (version2 != this._version) {
          throw new Error("Unsupported version: " + version2);
        }
        if (sourceRoot) {
          sourceRoot = util.normalize(sourceRoot);
        }
        sources = sources.map(String).map(util.normalize).map(function(source) {
          return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
        });
        this._names = ArraySet.fromArray(names.map(String), true);
        this._sources = ArraySet.fromArray(sources, true);
        this._absoluteSources = this._sources.toArray().map(function(s) {
          return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
        });
        this.sourceRoot = sourceRoot;
        this.sourcesContent = sourcesContent;
        this._mappings = mappings;
        this._sourceMapURL = aSourceMapURL;
        this.file = file;
      }
      BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer2.prototype);
      BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer2;
      BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
        var relativeSource = aSource;
        if (this.sourceRoot != null) {
          relativeSource = util.relative(this.sourceRoot, relativeSource);
        }
        if (this._sources.has(relativeSource)) {
          return this._sources.indexOf(relativeSource);
        }
        var i;
        for (i = 0; i < this._absoluteSources.length; ++i) {
          if (this._absoluteSources[i] == aSource) {
            return i;
          }
        }
        return -1;
      };
      BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
        var smc = Object.create(BasicSourceMapConsumer.prototype);
        var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
        var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
        smc.sourceRoot = aSourceMap._sourceRoot;
        smc.sourcesContent = aSourceMap._generateSourcesContent(
          smc._sources.toArray(),
          smc.sourceRoot
        );
        smc.file = aSourceMap._file;
        smc._sourceMapURL = aSourceMapURL;
        smc._absoluteSources = smc._sources.toArray().map(function(s) {
          return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
        });
        var generatedMappings = aSourceMap._mappings.toArray().slice();
        var destGeneratedMappings = smc.__generatedMappings = [];
        var destOriginalMappings = smc.__originalMappings = [];
        for (var i = 0, length = generatedMappings.length; i < length; i++) {
          var srcMapping = generatedMappings[i];
          var destMapping = new Mapping();
          destMapping.generatedLine = srcMapping.generatedLine;
          destMapping.generatedColumn = srcMapping.generatedColumn;
          if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) {
              destMapping.name = names.indexOf(srcMapping.name);
            }
            destOriginalMappings.push(destMapping);
          }
          destGeneratedMappings.push(destMapping);
        }
        quickSort(smc.__originalMappings, util.compareByOriginalPositions);
        return smc;
      };
      BasicSourceMapConsumer.prototype._version = 3;
      Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
        get: function() {
          return this._absoluteSources.slice();
        }
      });
      function Mapping() {
        this.generatedLine = 0;
        this.generatedColumn = 0;
        this.source = null;
        this.originalLine = null;
        this.originalColumn = null;
        this.name = null;
      }
      var compareGenerated = util.compareByGeneratedPositionsDeflatedNoLine;
      function sortGenerated(array, start) {
        let l = array.length;
        let n = array.length - start;
        if (n <= 1) {
          return;
        } else if (n == 2) {
          let a = array[start];
          let b = array[start + 1];
          if (compareGenerated(a, b) > 0) {
            array[start] = b;
            array[start + 1] = a;
          }
        } else if (n < 20) {
          for (let i = start; i < l; i++) {
            for (let j = i; j > start; j--) {
              let a = array[j - 1];
              let b = array[j];
              if (compareGenerated(a, b) <= 0) {
                break;
              }
              array[j - 1] = b;
              array[j] = a;
            }
          }
        } else {
          quickSort(array, compareGenerated, start);
        }
      }
      BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        var generatedLine = 1;
        var previousGeneratedColumn = 0;
        var previousOriginalLine = 0;
        var previousOriginalColumn = 0;
        var previousSource = 0;
        var previousName = 0;
        var length = aStr.length;
        var index = 0;
        var cachedSegments = {};
        var temp = {};
        var originalMappings = [];
        var generatedMappings = [];
        var mapping, str, segment, end, value;
        let subarrayStart = 0;
        while (index < length) {
          if (aStr.charAt(index) === ";") {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
            sortGenerated(generatedMappings, subarrayStart);
            subarrayStart = generatedMappings.length;
          } else if (aStr.charAt(index) === ",") {
            index++;
          } else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine;
            for (end = index; end < length; end++) {
              if (this._charIsMappingSeparator(aStr, end)) {
                break;
              }
            }
            str = aStr.slice(index, end);
            segment = [];
            while (index < end) {
              base64VLQ.decode(aStr, index, temp);
              value = temp.value;
              index = temp.rest;
              segment.push(value);
            }
            if (segment.length === 2) {
              throw new Error("Found a source, but no line and column");
            }
            if (segment.length === 3) {
              throw new Error("Found a source and line, but no column");
            }
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
              mapping.source = previousSource + segment[1];
              previousSource += segment[1];
              mapping.originalLine = previousOriginalLine + segment[2];
              previousOriginalLine = mapping.originalLine;
              mapping.originalLine += 1;
              mapping.originalColumn = previousOriginalColumn + segment[3];
              previousOriginalColumn = mapping.originalColumn;
              if (segment.length > 4) {
                mapping.name = previousName + segment[4];
                previousName += segment[4];
              }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === "number") {
              let currentSource = mapping.source;
              while (originalMappings.length <= currentSource) {
                originalMappings.push(null);
              }
              if (originalMappings[currentSource] === null) {
                originalMappings[currentSource] = [];
              }
              originalMappings[currentSource].push(mapping);
            }
          }
        }
        sortGenerated(generatedMappings, subarrayStart);
        this.__generatedMappings = generatedMappings;
        for (var i = 0; i < originalMappings.length; i++) {
          if (originalMappings[i] != null) {
            quickSort(originalMappings[i], util.compareByOriginalPositionsNoSource);
          }
        }
        this.__originalMappings = [].concat(...originalMappings);
      };
      BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
        if (aNeedle[aLineName] <= 0) {
          throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
        }
        if (aNeedle[aColumnName] < 0) {
          throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
        }
        return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
      };
      BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
        for (var index = 0; index < this._generatedMappings.length; ++index) {
          var mapping = this._generatedMappings[index];
          if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
              mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
              continue;
            }
          }
          mapping.lastGeneratedColumn = Infinity;
        }
      };
      BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
        var needle = {
          generatedLine: util.getArg(aArgs, "line"),
          generatedColumn: util.getArg(aArgs, "column")
        };
        var index = this._findMapping(
          needle,
          this._generatedMappings,
          "generatedLine",
          "generatedColumn",
          util.compareByGeneratedPositionsDeflated,
          util.getArg(aArgs, "bias", SourceMapConsumer2.GREATEST_LOWER_BOUND)
        );
        if (index >= 0) {
          var mapping = this._generatedMappings[index];
          if (mapping.generatedLine === needle.generatedLine) {
            var source = util.getArg(mapping, "source", null);
            if (source !== null) {
              source = this._sources.at(source);
              source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
            }
            var name = util.getArg(mapping, "name", null);
            if (name !== null) {
              name = this._names.at(name);
            }
            return {
              source,
              line: util.getArg(mapping, "originalLine", null),
              column: util.getArg(mapping, "originalColumn", null),
              name
            };
          }
        }
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      };
      BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
        if (!this.sourcesContent) {
          return false;
        }
        return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
          return sc == null;
        });
      };
      BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
        if (!this.sourcesContent) {
          return null;
        }
        var index = this._findSourceIndex(aSource);
        if (index >= 0) {
          return this.sourcesContent[index];
        }
        var relativeSource = aSource;
        if (this.sourceRoot != null) {
          relativeSource = util.relative(this.sourceRoot, relativeSource);
        }
        var url;
        if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
          var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
          if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
            return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
          }
          if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
            return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
          }
        }
        if (nullOnMissing) {
          return null;
        } else {
          throw new Error('"' + relativeSource + '" is not in the SourceMap.');
        }
      };
      BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
        var source = util.getArg(aArgs, "source");
        source = this._findSourceIndex(source);
        if (source < 0) {
          return {
            line: null,
            column: null,
            lastColumn: null
          };
        }
        var needle = {
          source,
          originalLine: util.getArg(aArgs, "line"),
          originalColumn: util.getArg(aArgs, "column")
        };
        var index = this._findMapping(
          needle,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          util.compareByOriginalPositions,
          util.getArg(aArgs, "bias", SourceMapConsumer2.GREATEST_LOWER_BOUND)
        );
        if (index >= 0) {
          var mapping = this._originalMappings[index];
          if (mapping.source === needle.source) {
            return {
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            };
          }
        }
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      };
      exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
      function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
        var sourceMap = aSourceMap;
        if (typeof aSourceMap === "string") {
          sourceMap = util.parseSourceMapInput(aSourceMap);
        }
        var version2 = util.getArg(sourceMap, "version");
        var sections = util.getArg(sourceMap, "sections");
        if (version2 != this._version) {
          throw new Error("Unsupported version: " + version2);
        }
        this._sources = new ArraySet();
        this._names = new ArraySet();
        var lastOffset = {
          line: -1,
          column: 0
        };
        this._sections = sections.map(function(s) {
          if (s.url) {
            throw new Error("Support for url field in sections not implemented.");
          }
          var offset = util.getArg(s, "offset");
          var offsetLine = util.getArg(offset, "line");
          var offsetColumn = util.getArg(offset, "column");
          if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
            throw new Error("Section offsets must be ordered and non-overlapping.");
          }
          lastOffset = offset;
          return {
            generatedOffset: {
              generatedLine: offsetLine + 1,
              generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer2(util.getArg(s, "map"), aSourceMapURL)
          };
        });
      }
      IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer2.prototype);
      IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer2;
      IndexedSourceMapConsumer.prototype._version = 3;
      Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
        get: function() {
          var sources = [];
          for (var i = 0; i < this._sections.length; i++) {
            for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
              sources.push(this._sections[i].consumer.sources[j]);
            }
          }
          return sources;
        }
      });
      IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
        var needle = {
          generatedLine: util.getArg(aArgs, "line"),
          generatedColumn: util.getArg(aArgs, "column")
        };
        var sectionIndex = binarySearch.search(
          needle,
          this._sections,
          function(needle2, section2) {
            var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
            if (cmp) {
              return cmp;
            }
            return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
          }
        );
        var section = this._sections[sectionIndex];
        if (!section) {
          return {
            source: null,
            line: null,
            column: null,
            name: null
          };
        }
        return section.consumer.originalPositionFor({
          line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
          column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
          bias: aArgs.bias
        });
      };
      IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
        return this._sections.every(function(s) {
          return s.consumer.hasContentsOfAllSources();
        });
      };
      IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          var content = section.consumer.sourceContentFor(aSource, true);
          if (content) {
            return content;
          }
        }
        if (nullOnMissing) {
          return null;
        } else {
          throw new Error('"' + aSource + '" is not in the SourceMap.');
        }
      };
      IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) {
            continue;
          }
          var generatedPosition = section.consumer.generatedPositionFor(aArgs);
          if (generatedPosition) {
            var ret = {
              line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
              column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
          }
        }
        return {
          line: null,
          column: null
        };
      };
      IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        this.__generatedMappings = [];
        this.__originalMappings = [];
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          var sectionMappings = section.consumer._generatedMappings;
          for (var j = 0; j < sectionMappings.length; j++) {
            var mapping = sectionMappings[j];
            var source = section.consumer._sources.at(mapping.source);
            source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
            this._sources.add(source);
            source = this._sources.indexOf(source);
            var name = null;
            if (mapping.name) {
              name = section.consumer._names.at(mapping.name);
              this._names.add(name);
              name = this._names.indexOf(name);
            }
            var adjustedMapping = {
              source,
              generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
              generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
              originalLine: mapping.originalLine,
              originalColumn: mapping.originalColumn,
              name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === "number") {
              this.__originalMappings.push(adjustedMapping);
            }
          }
        }
        quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
        quickSort(this.__originalMappings, util.compareByOriginalPositions);
      };
      exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
    }
  });

  // node_modules/source-map-js/lib/source-node.js
  var require_source_node = __commonJS({
    "node_modules/source-map-js/lib/source-node.js"(exports) {
      var SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
      var util = require_util();
      var REGEX_NEWLINE = /(\r?\n)/;
      var NEWLINE_CODE = 10;
      var isSourceNode = "$$$isSourceNode$$$";
      function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
        this.children = [];
        this.sourceContents = {};
        this.line = aLine == null ? null : aLine;
        this.column = aColumn == null ? null : aColumn;
        this.source = aSource == null ? null : aSource;
        this.name = aName == null ? null : aName;
        this[isSourceNode] = true;
        if (aChunks != null)
          this.add(aChunks);
      }
      SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
        var node = new SourceNode();
        var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
        var remainingLinesIndex = 0;
        var shiftNextLine = function() {
          var lineContents = getNextLine();
          var newLine = getNextLine() || "";
          return lineContents + newLine;
          function getNextLine() {
            return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
          }
        };
        var lastGeneratedLine = 1, lastGeneratedColumn = 0;
        var lastMapping = null;
        aSourceMapConsumer.eachMapping(function(mapping) {
          if (lastMapping !== null) {
            if (lastGeneratedLine < mapping.generatedLine) {
              addMappingWithCode(lastMapping, shiftNextLine());
              lastGeneratedLine++;
              lastGeneratedColumn = 0;
            } else {
              var nextLine = remainingLines[remainingLinesIndex] || "";
              var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
              remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
              lastGeneratedColumn = mapping.generatedColumn;
              addMappingWithCode(lastMapping, code);
              lastMapping = mapping;
              return;
            }
          }
          while (lastGeneratedLine < mapping.generatedLine) {
            node.add(shiftNextLine());
            lastGeneratedLine++;
          }
          if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
          }
          lastMapping = mapping;
        }, this);
        if (remainingLinesIndex < remainingLines.length) {
          if (lastMapping) {
            addMappingWithCode(lastMapping, shiftNextLine());
          }
          node.add(remainingLines.splice(remainingLinesIndex).join(""));
        }
        aSourceMapConsumer.sources.forEach(function(sourceFile) {
          var content = aSourceMapConsumer.sourceContentFor(sourceFile);
          if (content != null) {
            if (aRelativePath != null) {
              sourceFile = util.join(aRelativePath, sourceFile);
            }
            node.setSourceContent(sourceFile, content);
          }
        });
        return node;
        function addMappingWithCode(mapping, code) {
          if (mapping === null || mapping.source === void 0) {
            node.add(code);
          } else {
            var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new SourceNode(
              mapping.originalLine,
              mapping.originalColumn,
              source,
              code,
              mapping.name
            ));
          }
        }
      };
      SourceNode.prototype.add = function SourceNode_add(aChunk) {
        if (Array.isArray(aChunk)) {
          aChunk.forEach(function(chunk) {
            this.add(chunk);
          }, this);
        } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
          if (aChunk) {
            this.children.push(aChunk);
          }
        } else {
          throw new TypeError(
            "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
          );
        }
        return this;
      };
      SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
        if (Array.isArray(aChunk)) {
          for (var i = aChunk.length - 1; i >= 0; i--) {
            this.prepend(aChunk[i]);
          }
        } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
          this.children.unshift(aChunk);
        } else {
          throw new TypeError(
            "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
          );
        }
        return this;
      };
      SourceNode.prototype.walk = function SourceNode_walk(aFn) {
        var chunk;
        for (var i = 0, len = this.children.length; i < len; i++) {
          chunk = this.children[i];
          if (chunk[isSourceNode]) {
            chunk.walk(aFn);
          } else {
            if (chunk !== "") {
              aFn(chunk, {
                source: this.source,
                line: this.line,
                column: this.column,
                name: this.name
              });
            }
          }
        }
      };
      SourceNode.prototype.join = function SourceNode_join(aSep) {
        var newChildren;
        var i;
        var len = this.children.length;
        if (len > 0) {
          newChildren = [];
          for (i = 0; i < len - 1; i++) {
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
          }
          newChildren.push(this.children[i]);
          this.children = newChildren;
        }
        return this;
      };
      SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
        var lastChild = this.children[this.children.length - 1];
        if (lastChild[isSourceNode]) {
          lastChild.replaceRight(aPattern, aReplacement);
        } else if (typeof lastChild === "string") {
          this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
        } else {
          this.children.push("".replace(aPattern, aReplacement));
        }
        return this;
      };
      SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
        this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
      };
      SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
        for (var i = 0, len = this.children.length; i < len; i++) {
          if (this.children[i][isSourceNode]) {
            this.children[i].walkSourceContents(aFn);
          }
        }
        var sources = Object.keys(this.sourceContents);
        for (var i = 0, len = sources.length; i < len; i++) {
          aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
        }
      };
      SourceNode.prototype.toString = function SourceNode_toString() {
        var str = "";
        this.walk(function(chunk) {
          str += chunk;
        });
        return str;
      };
      SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
        var generated = {
          code: "",
          line: 1,
          column: 0
        };
        var map = new SourceMapGenerator(aArgs);
        var sourceMappingActive = false;
        var lastOriginalSource = null;
        var lastOriginalLine = null;
        var lastOriginalColumn = null;
        var lastOriginalName = null;
        this.walk(function(chunk, original) {
          generated.code += chunk;
          if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
              map.addMapping({
                source: original.source,
                original: {
                  line: original.line,
                  column: original.column
                },
                generated: {
                  line: generated.line,
                  column: generated.column
                },
                name: original.name
              });
            }
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
          } else if (sourceMappingActive) {
            map.addMapping({
              generated: {
                line: generated.line,
                column: generated.column
              }
            });
            lastOriginalSource = null;
            sourceMappingActive = false;
          }
          for (var idx = 0, length = chunk.length; idx < length; idx++) {
            if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
              generated.line++;
              generated.column = 0;
              if (idx + 1 === length) {
                lastOriginalSource = null;
                sourceMappingActive = false;
              } else if (sourceMappingActive) {
                map.addMapping({
                  source: original.source,
                  original: {
                    line: original.line,
                    column: original.column
                  },
                  generated: {
                    line: generated.line,
                    column: generated.column
                  },
                  name: original.name
                });
              }
            } else {
              generated.column++;
            }
          }
        });
        this.walkSourceContents(function(sourceFile, sourceContent) {
          map.setSourceContent(sourceFile, sourceContent);
        });
        return { code: generated.code, map };
      };
      exports.SourceNode = SourceNode;
    }
  });

  // node_modules/source-map-js/source-map.js
  var require_source_map = __commonJS({
    "node_modules/source-map-js/source-map.js"(exports) {
      exports.SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
      exports.SourceMapConsumer = require_source_map_consumer().SourceMapConsumer;
      exports.SourceNode = require_source_node().SourceNode;
    }
  });

  // node_modules/semver/functions/gt.js
  var require_gt = __commonJS({
    "node_modules/semver/functions/gt.js"(exports, module) {
      var compare = require_compare();
      var gt2 = (a, b, loose) => compare(a, b, loose) > 0;
      module.exports = gt2;
    }
  });

  // node_modules/rempl/lib/utils/global.js
  function check(it) {
    return it && it.Math === Math && it;
  }
  var resolvedGlobalThis = check(typeof globalThis === "object" && globalThis) || check(typeof window === "object" && window) || check(typeof self === "object" && self) || check(typeof global === "object" && global) || function() {
    return this;
  }() || Function("return this")();
  var resolvedTop = resolvedGlobalThis.top || resolvedGlobalThis;
  var resolvedParent = resolvedGlobalThis.parent || resolvedGlobalThis;
  var resolvedOpener = resolvedGlobalThis.opener || null;

  // node_modules/rempl/lib/classes/ReactiveValue.js
  var ReactiveValue = class {
    value;
    handler = null;
    constructor(value) {
      this.value = value;
    }
    set(value) {
      if (!Object.is(this.value, value)) {
        this.value = value;
        this.apply();
      }
    }
    get() {
      return this.value;
    }
    on(fn, context) {
      let cursor = this.handler;
      while (cursor !== null) {
        if (cursor.fn === fn && cursor.context === context) {
          console.warn("ReactiveValue#on: duplicate fn & context pair");
        }
        cursor = cursor.handler;
      }
      this.handler = {
        fn,
        context,
        handler: this.handler
      };
    }
    link(fn, context) {
      this.on(fn, context);
      fn.call(context, this.value);
    }
    off(fn, context) {
      let cursor = this.handler;
      let prev = this;
      while (cursor !== null) {
        if (cursor.fn === fn && cursor.context === context) {
          cursor.fn = function() {
          };
          prev.handler = cursor.handler;
          return;
        }
        prev = cursor;
        cursor = cursor.handler;
      }
      console.warn("ReactiveValue#off: fn & context pair not found, nothing was removed");
    }
    apply() {
      let cursor = this.handler;
      while (cursor !== null) {
        cursor.fn.call(cursor.context, this.value);
        cursor = cursor.handler;
      }
    }
  };

  // node_modules/rempl/lib/classes/EndpointList.js
  function normalize(oldList, newList) {
    const uniqueItems = [...new Set(Array.isArray(newList) ? newList : [])];
    const diff = uniqueItems.length !== oldList.length || uniqueItems.some((endpoint) => !oldList.includes(endpoint));
    return diff ? uniqueItems : oldList;
  }
  var EndpointList = class extends ReactiveValue {
    constructor(list) {
      super(normalize([], list));
    }
    set(newValue) {
      super.set(normalize(this.value, newValue));
    }
  };

  // node_modules/rempl/lib/classes/EndpointListSet.js
  var EndpointListSet = class extends EndpointList {
    endpointLists = /* @__PURE__ */ new Set();
    constructor() {
      super([]);
    }
    set() {
      super.set(
        [].concat(
          ...[...this.endpointLists].map((endpointList) => endpointList.value)
        )
      );
    }
    add(endpointList) {
      if (!this.endpointLists.has(endpointList)) {
        this.endpointLists.add(endpointList);
        endpointList.on(this.set, this);
        this.set();
      }
    }
    remove(endpointList) {
      if (this.endpointLists.has(endpointList)) {
        this.endpointLists.delete(endpointList);
        endpointList.off(this.set, this);
        this.set();
      }
    }
  };

  // node_modules/rempl/lib/utils/index.js
  function genUID(len) {
    function base36(val) {
      return Math.round(val).toString(36);
    }
    let result = base36(10 + 25 * Math.random());
    if (!len) {
      len = 16;
    }
    while (result.length < len) {
      result += base36(Date.now() * Math.random());
    }
    return result.substr(0, len);
  }
  function subscribe(list, item) {
    list.push(item);
    return () => {
      const idx = list.indexOf(item);
      if (idx !== -1) {
        list.splice(idx, 1);
      }
    };
  }

  // node_modules/rempl/lib/transport/event.js
  var DEBUG_PREFIX = "[rempl][event-transport] ";
  var allTransports = [];
  var EventTransport = class {
    static get(name, connectTo, win) {
      if (!win) {
        win = resolvedGlobalThis;
      }
      const transport2 = allTransports.find(
        (transport3) => transport3.name === name && transport3.connectTo === connectTo && transport3.realm === win
      );
      return transport2 || new EventTransport(name, connectTo, win);
    }
    name;
    connectTo;
    realm;
    inputChannelId;
    connections = /* @__PURE__ */ new Map();
    connected = new ReactiveValue(false);
    endpointGetUI = /* @__PURE__ */ new Map();
    ownEndpoints = new EndpointList();
    remoteEndpoints = new EndpointListSet();
    initCallbacks = [];
    dataCallbacks = [];
    sendCallbacks = /* @__PURE__ */ new Map();
    inited = false;
    constructor(name, connectTo, win) {
      if (allTransports.length === 0 && typeof addEventListener === "function") {
        addEventListener(
          "message",
          (e) => {
            for (const transport2 of allTransports) {
              transport2._onMessage(e);
            }
          },
          false
        );
      }
      allTransports.push(this);
      this.name = name;
      this.connectTo = connectTo;
      this.inputChannelId = `${name}/${genUID()}`;
      this.realm = win || resolvedGlobalThis;
      this.ownEndpoints.on((endpoints2) => {
        if (this.connected.value) {
          this.send({
            type: "endpoints",
            data: [endpoints2]
          });
        }
      });
      if (typeof this.realm.postMessage !== "function" || typeof addEventListener !== "function") {
        console.warn(DEBUG_PREFIX + "Event (postMessage) transport isn't supported");
        return;
      }
      this._handshake(false);
    }
    _handshake(inited) {
      this._send(`${this.connectTo}:connect`, {
        type: "handshake",
        initiator: this.name,
        inited,
        endpoints: this.ownEndpoints.value
      });
    }
    _onMessage(event) {
      if (event.source !== this.realm || event.target !== resolvedGlobalThis) {
        return;
      }
      const data = event.data || {};
      const connectTo = `${this.name}:connect`;
      switch (data.to) {
        case connectTo:
          if (data.payload?.initiator === this.connectTo) {
            this._onConnect(data.from, data.payload);
          }
          break;
        case this.inputChannelId:
          if (this.connections.has(data.from)) {
            this._onData(data.from, data.payload);
          } else {
            console.warn(DEBUG_PREFIX + "unknown incoming connection", data.from);
          }
          break;
      }
    }
    _onConnect(from, payload) {
      if (!payload.inited) {
        this._handshake(true);
      }
      if (!this.connections.has(from)) {
        const endpoints2 = new EndpointList(payload.endpoints);
        this.remoteEndpoints.add(endpoints2);
        this.connections.set(from, {
          ttl: Date.now(),
          endpoints: endpoints2
        });
        this._send(from, {
          type: "connect",
          endpoints: this.ownEndpoints.value
        });
      }
      this.inited = true;
    }
    _onData(from, payload) {
      switch (payload.type) {
        case "connect": {
          this.connections.get(from)?.endpoints.set(payload.endpoints);
          this.connected.set(true);
          this.initCallbacks.splice(0).forEach((args) => this.onInit(...args));
          break;
        }
        case "endpoints": {
          this.connections.get(from)?.endpoints.set(payload.data[0]);
          break;
        }
        case "disconnect": {
          this.connections.get(from)?.endpoints.set([]);
          this.connected.set(false);
          break;
        }
        case "callback": {
          if (payload.callback) {
            const callback = this.sendCallbacks.get(payload.callback);
            if (typeof callback === "function") {
              callback(...payload.data);
              this.sendCallbacks.delete(payload.callback);
            }
          }
          break;
        }
        case "data": {
          let args = payload.data;
          const callback = payload.callback;
          if (callback) {
            args = args.concat(this._wrapCallback(from, callback));
          }
          for (const { endpoint, fn } of this.dataCallbacks) {
            if (endpoint === payload.endpoint) {
              fn(...args);
            }
          }
          break;
        }
        case "getRemoteUI": {
          if (!payload.endpoint) {
            return;
          }
          const getUI = this.endpointGetUI.get(payload.endpoint);
          if (typeof getUI !== "function") {
            console.warn(
              DEBUG_PREFIX + "receive unknown endpoint for getRemoteUI(): " + payload.endpoint
            );
            if (payload.callback) {
              this._wrapCallback(
                from,
                payload.callback
              )("Wrong endpoint \u2013 " + payload.endpoint);
            }
          } else {
            if (payload.callback) {
              const callback = this._wrapCallback(from, payload.callback);
              getUI(payload.data[0] || {}).catch((error) => ({ error: String(error?.message) })).then((res) => {
                if ("error" in res) {
                  callback(res.error);
                } else {
                  callback(null, res.type, res.value);
                }
              });
            }
          }
          break;
        }
        default:
          console.warn(
            DEBUG_PREFIX + "Unknown message type `" + payload.type + "` for `" + this.name + "`",
            payload
          );
      }
    }
    _wrapCallback(to, callback) {
      return (...args) => this._send(to, {
        type: "callback",
        callback,
        data: args
      });
    }
    _send(to, payload) {
      if (typeof this.realm.postMessage === "function") {
        const message = {
          from: this.inputChannelId,
          to,
          payload
        };
        this.realm.postMessage(message, "*");
      }
    }
    subscribeToEndpoint(endpoint, fn) {
      return subscribe(this.dataCallbacks, {
        endpoint,
        fn
      });
    }
    sendToEndpoint(endpoint, type, ...args) {
      let callback = null;
      if (args.length && typeof args[args.length - 1] === "function") {
        callback = genUID();
        this.sendCallbacks.set(callback, args.pop());
      }
      this.send({
        type,
        endpoint,
        data: args,
        callback
      });
    }
    send(payload) {
      for (const channelId of this.connections.keys()) {
        this._send(channelId, payload);
      }
    }
    onInit(endpoint, callback) {
      const id = endpoint.id || null;
      if (id) {
        this.ownEndpoints.set(this.ownEndpoints.value.concat(id));
        if (typeof endpoint.getRemoteUI === "function") {
          this.endpointGetUI.set(id, endpoint.getRemoteUI);
        }
      }
      if (this.inited) {
        callback({
          connected: this.connected,
          subscribe: this.subscribeToEndpoint.bind(this, id),
          getRemoteUI: this.sendToEndpoint.bind(this, id, "getRemoteUI"),
          send: this.sendToEndpoint.bind(this, id, "data")
        });
      } else {
        this.initCallbacks.push([endpoint, callback]);
      }
      return this;
    }
    sync(endpoint) {
      const channel = genUID(8) + ":" + this.connectTo;
      this.onInit(endpoint, (api) => {
        api.subscribe(endpoint.processInput.bind(endpoint));
        api.connected.link((connected) => {
          endpoint.setupChannel(channel, api.send, this.remoteEndpoints, connected);
        });
      });
      return this;
    }
  };

  // node_modules/rempl/lib/classes/Namespace.js
  var Namespace = class {
    name;
    owner;
    methods = /* @__PURE__ */ Object.create(null);
    remoteMethodWrappers = /* @__PURE__ */ Object.create(null);
    remoteMethods = [];
    listeners = null;
    constructor(name, owner) {
      this.name = name;
      this.owner = owner;
      this.methods = /* @__PURE__ */ Object.create(null);
    }
    isMethodProvided(methodName) {
      return methodName in this.methods;
    }
    provide(methodName, fn) {
      if (typeof methodName === "string") {
        if (typeof fn === "function") {
          this.methods[methodName] = fn;
          this.owner.scheduleProvidedMethodsUpdate();
        }
      } else {
        const methods = methodName;
        for (const [methodName2, fn2] of Object.entries(methods)) {
          if (typeof fn2 === "function") {
            this.methods[methodName2] = fn2;
            this.owner.scheduleProvidedMethodsUpdate();
          }
        }
      }
    }
    revoke(methodName) {
      if (Array.isArray(methodName)) {
        methodName.forEach(this.revoke, this);
      } else {
        if (this.isMethodProvided(methodName)) {
          delete this.methods[methodName];
          this.owner.scheduleProvidedMethodsUpdate();
        }
      }
    }
    isRemoteMethodExists(methodName) {
      return this.remoteMethods.includes(methodName);
    }
    callRemote(method, ...args) {
      let callback = null;
      if (args.length && typeof args[args.length - 1] === "function") {
        callback = args.pop();
        console.warn(
          "[rempl] Using a callback for Namespace#callMethod() is deprecated, use returned promise value instead"
        );
      }
      return new Promise((resolve) => {
        const callPacket = {
          type: "call",
          ns: this.name,
          method,
          args
        };
        this.owner.send(callPacket, (...args2) => {
          resolve(args2[0]);
          callback?.(...args2);
        });
      });
    }
    getRemoteMethod(methodName) {
      let methodWrapper = this.remoteMethodWrappers[methodName];
      if (typeof methodWrapper !== "function") {
        methodWrapper = this.remoteMethodWrappers[methodName] = Object.assign(
          (...args) => {
            if (methodWrapper.available) {
              return this.callRemote(methodName, ...args);
            }
            return Promise.reject(
              new Error(
                `[rempl] ${this.owner.getName()} ns("${this.name}") has no available remote method "${methodName}`
              )
            );
          },
          {
            available: this.remoteMethods.indexOf(methodName) !== -1
          }
        );
      }
      return methodWrapper;
    }
    onRemoteMethodsChanged(callback) {
      const listener = {
        event: "remoteMethodsChanged",
        callback,
        listeners: this.listeners
      };
      this.listeners = listener;
      callback([...this.remoteMethods]);
      return () => {
        let cursor = this.listeners;
        let prev = this;
        while (cursor !== null) {
          if (cursor === listener) {
            prev.listeners = cursor.listeners;
            break;
          }
          prev = cursor;
          cursor = cursor.listeners;
        }
      };
    }
    static invoke(namespace, method, args, callback) {
      let callbackCalled = false;
      args = args.concat((...args2) => {
        callbackCalled = true;
        callback(...args2);
        console.warn(
          "[rempl] Using a callback in provided methods has been deprecated, just return a value or promise instead"
        );
      });
      Promise.resolve(namespace.methods[method].apply(null, args)).then((value) => {
        if (!callbackCalled) {
          callback(value);
        }
      });
    }
    static notifyRemoteMethodsChanged(namespace) {
      let cursor = namespace.listeners;
      for (const method in namespace.remoteMethodWrappers) {
        namespace.remoteMethodWrappers[method].available = namespace.remoteMethods.includes(method);
      }
      while (cursor !== null) {
        if (cursor.event === "remoteMethodsChanged") {
          cursor.callback.call(null, [...namespace.remoteMethods]);
        }
        cursor = cursor.listeners;
      }
    }
  };

  // node_modules/rempl/lib/classes/Endpoint.js
  var Endpoint = class {
    id;
    namespaces;
    get namespaceClass() {
      return Namespace;
    }
    type = "Endpoint";
    channels = [];
    connected = new ReactiveValue(false);
    remoteEndpoints = new EndpointListSet();
    providedMethodsUpdateTimer;
    constructor(id) {
      this.id = id || null;
      this.namespaces = /* @__PURE__ */ Object.create(null);
      this.remoteEndpoints.on((endpoints2) => {
        this.connected.set(endpoints2.includes(this.id || "*"));
      }, this);
    }
    getName() {
      return this.type + (this.id ? "#" + this.id : "");
    }
    ns(name) {
      let namespace = this.namespaces[name];
      if (!namespace) {
        namespace = Object.assign(new this.namespaceClass(name, this));
        this.namespaces[name] = namespace;
      }
      return namespace;
    }
    send(packet, callback = null) {
      for (const { send: send2 } of this.channels) {
        send2(packet, callback);
      }
    }
    requestRemoteApi() {
      this.send({ type: "getProvidedMethods" }, (methods) => {
        this.setRemoteApi(methods);
      });
    }
    setRemoteApi(api) {
      const changed = [];
      if (!api) {
        api = {};
      }
      for (const name in api) {
        if (Array.isArray(api[name])) {
          const ns = this.ns(name);
          const methods = api[name].slice().sort();
          const different = ns.remoteMethods.length !== methods.length || ns.remoteMethods.some(function(value, idx) {
            return value !== methods[idx];
          });
          if (different) {
            ns.remoteMethods = methods;
            changed.push(ns);
          }
        }
      }
      for (const name in this.namespaces) {
        if (Array.isArray(api[name]) === false) {
          const ns = this.namespaces[name];
          ns.remoteMethods = [];
          changed.push(ns);
        }
      }
      changed.forEach((ns) => Namespace.notifyRemoteMethodsChanged(ns));
    }
    getProvidedApi() {
      const api = /* @__PURE__ */ Object.create(null);
      for (const name in this.namespaces) {
        api[name] = Object.keys(this.namespaces[name].methods).sort();
      }
      return api;
    }
    scheduleProvidedMethodsUpdate() {
      if (!this.providedMethodsUpdateTimer) {
        this.providedMethodsUpdateTimer = setTimeout(() => {
          this.providedMethodsUpdateTimer = null;
          this.send({
            type: "remoteMethods",
            methods: this.getProvidedApi()
          });
        }, 0);
      }
    }
    processInput(packet, callback) {
      switch (packet.type) {
        case "call": {
          const thePacket = packet;
          const ns = this.ns(thePacket.ns || "*");
          if (!ns.isMethodProvided(thePacket.method)) {
            return console.warn(
              `[rempl][sync] ${this.getName()} (namespace: ${thePacket.ns || "default"}) has no remote method:`,
              thePacket.method
            );
          }
          Namespace.invoke(ns, thePacket.method, thePacket.args, callback);
          break;
        }
        case "remoteMethods": {
          const thePacket = packet;
          this.setRemoteApi(thePacket.methods);
          break;
        }
        case "getProvidedMethods":
          callback(this.getProvidedApi());
          break;
        default:
          console.warn(
            "[rempl][sync] " + this.getName() + "Unknown packet type:",
            packet.type
          );
      }
    }
    setupChannel(type, send2, remoteEndpoints, available) {
      if (available) {
        this.channels.push({
          type,
          send: send2
        });
        this.remoteEndpoints.add(remoteEndpoints);
      } else {
        for (let i = 0; i < this.channels.length; i++) {
          if (this.channels[i].type === type && this.channels[i].send === send2) {
            this.remoteEndpoints.remove(remoteEndpoints);
            this.channels.splice(i, 1);
            break;
          }
        }
      }
    }
  };

  // node_modules/rempl/lib/classes/Publisher.js
  var PublisherNamespace = class extends Namespace {
    _lastData = null;
    publish;
    constructor(name, owner) {
      super(name, owner);
      this.provide("init", () => this._lastData);
      this.publish = (payload) => {
        this._lastData = payload;
        owner.send({
          type: "data",
          ns: this.name,
          payload
        });
      };
    }
  };
  var Publisher = class extends Endpoint {
    type = "Publisher";
    get namespaceClass() {
      return PublisherNamespace;
    }
  };

  // node_modules/rempl/lib/sandbox/browser/sandbox-init.js
  function initSandboxScript() {
    addEventListener("message", function handleMessage(event) {
      const { action, scripts } = event.data || {};
      if (action === "rempl-sandbox-init-scripts" && scripts) {
        removeEventListener("message", handleMessage);
        for (const [sourceURL, source] of Object.entries(scripts)) {
          Function(`${source}
//# sourceURL=${sourceURL}`)();
        }
      }
    });
  }

  // node_modules/rempl/lib/sandbox/browser/index.js
  var initEnvSubscriberMessage = /* @__PURE__ */ new WeakMap();
  if (resolvedParent !== resolvedGlobalThis) {
    addEventListener(
      "message",
      function(event) {
        const data = event.data || {};
        if (event.source && data.to === "rempl-env-publisher:connect") {
          initEnvSubscriberMessage.set(event.source, data);
        }
      },
      true
    );
  }
  function createSandbox(settings2, callback) {
    function initSandbox(sandboxWindow) {
      if (settings2.type === "script") {
        sandboxWindow.postMessage(
          {
            action: "rempl-sandbox-init-scripts",
            scripts: settings2.content
          },
          "*"
        );
      }
      if (resolvedParent !== resolvedGlobalThis && sandboxWindow !== resolvedGlobalThis) {
        let toSandbox = NaN;
        let toEnv = NaN;
        if (onEnvMessage) {
          removeEventListener("message", onEnvMessage, true);
          onEnvMessage = null;
        }
        addEventListener(
          "message",
          onEnvMessage = function(event) {
            const data = event.data || {};
            switch (data.to) {
              case "rempl-env-subscriber:connect":
              case toSandbox:
                toEnv = data.from;
                sandboxWindow.postMessage(data, "*");
                break;
              case "rempl-env-publisher:connect":
              case toEnv:
                toSandbox = data.from;
                resolvedParent.postMessage(data);
                break;
            }
          },
          true
        );
        if (settings2.type !== "script") {
          const initMessage = initEnvSubscriberMessage.get(sandboxWindow);
          if (initMessage) {
            toSandbox = initMessage.from;
            resolvedParent.postMessage(initMessage);
          }
        }
      }
      transport2 = EventTransport.get("rempl-sandbox", "rempl-subscriber", sandboxWindow).onInit(
        {},
        (api) => callback(api)
      );
      if (connected) {
        transport2.ownEndpoints.set(["*"]);
      }
    }
    let iframe = null;
    let onEnvMessage = null;
    let transport2 = null;
    let connected = false;
    settings2 = settings2 || {};
    if (settings2.window) {
      initSandbox(settings2.window);
    } else {
      iframe = document.createElement("iframe");
      iframe.name = genUID();
      iframe.onload = () => iframe?.contentWindow && initSandbox(iframe.contentWindow);
      iframe.setAttribute("sandbox", "allow-scripts allow-forms allow-popups allow-modals");
      if (settings2.type === "url") {
        iframe.src = settings2.content;
      } else if (settings2.sandboxSrc) {
        iframe.src = settings2.sandboxSrc;
      } else {
        iframe.srcdoc = "<!doctype html><script>(" + String(initSandboxScript) + ")()<\/script>";
      }
      (settings2.container || document.documentElement).appendChild(iframe);
    }
    const sandbox2 = {
      setConnected(state) {
        connected = state;
        if (transport2) {
          transport2.ownEndpoints.set(connected ? ["*"] : []);
        }
      },
      destroy() {
        if (onEnvMessage) {
          removeEventListener("message", onEnvMessage, true);
          onEnvMessage = null;
        }
        if (transport2) {
          transport2.ownEndpoints.set([]);
        }
        if (iframe !== null) {
          iframe.remove();
          iframe.setAttribute("srcdoc", "");
          iframe.setAttribute("src", "");
          iframe = null;
        }
      }
    };
    return sandbox2;
  }

  // node_modules/rempl/lib/host/in-page/createElement.js
  function createElement(config2) {
    function createElement2(options) {
      const element = document.createElement(options.tagName || "div");
      for (const [name, value] of Object.entries(options)) {
        switch (name) {
          case "tagName":
            break;
          case "ref":
            if (typeof value === "string") {
              map[value] = element;
            }
            break;
          case "style":
            element.setAttribute(
              "style",
              Object.entries(value).map(([property, value2]) => property + ":" + value2).join(";")
            );
            break;
          case "events":
            for (const event in options.events) {
              element.addEventListener(event, options.events[event], false);
            }
            break;
          case "children":
            options.children?.forEach(function(child) {
              element.appendChild(
                typeof child === "string" ? document.createTextNode(child) : createElement2(child)
              );
            });
            break;
          default:
            element.setAttribute(name, value);
        }
      }
      return element;
    }
    const map = {};
    map.element = createElement2(config2);
    return map;
  }

  // node_modules/rempl/lib/host/in-page/style.js
  var styles = ':host{position:fixed;z-index:100000;inset:0;background:rgba(255,255,255,.8);backdrop-filter:blur(8px);opacity:1;font-family:Tahoma,Verdana,Arial,sans-serif;font-size:12px;transition:all cubic-bezier(.25,.59,0,1.11) .2s;border:0 solid #aaa}@supports not (backdrop-filter: blur(8px)){:host{background:rgba(255,255,255,.95)}}:host([side="left"]){right:50%;border-right-width:2px}:host([side="right"]){left:50%;border-left-width:2px}:host([side="top"]){bottom:50%;border-bottom-width:2px}:host([side="bottom"]){top:50%;border-top-width:2px}.host{display:flex;flex-direction:column;height:100%}.toolbar{display:flex;padding:0 0 0 24px;background:#f8f8f8 no-repeat 4px center / 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2YTJlMWRlYi1kYzVhLTFiNDEtYTQ2OC0xYmU4ZjEyYzdkMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkNGQUMzNTZCQkM4MTFFNjg1QjhENzFGM0IzRkMzNjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkNGQUMzNTVCQkM4MTFFNjg1QjhENzFGM0IzRkMzNjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MmE1NDdhODktNWJjOC05MzQ2LWI2NTctYzAwMGQ4ZjQxOTg4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZhMmUxZGViLWRjNWEtMWI0MS1hNDY4LTFiZThmMTJjN2QzMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn3Ab4gAAAPQSURBVHjatFfNSxtBFH+JiZootWojFBUqmtioiZUWbLUt1YOI9A9QaIsWSw/1mIMInryqN8EiVKVCKx48VFA8SLUeqlSUxI+qaGyhBy1RbNQkxmT7Zt1Ns7uzcTfaBz8Sdmbe783M+xrNGqgSG+Ixwo64h8jgvu8jviGciBmES6lCjQIDEhCvES8RdxXqXUC8Q7xFhGJN1F6gqB6xiehRQQ7c3B5ubX28BvQjPiDyIH7J43T0qzGAHPkXRCNcnTRyOhPEAzrK5FnEfbUMSampYCwpAYPNBklFRZBYXg6BmRnYaW3lpzzkdD+I5YTvEc9iEel0OjAWFoLBaoVkux30SJpgsYAmPx8gOVkwl1ldhfXiYrGKIcRz2gk8FZMbs7PZXRGiJCRMQGiRDDIylIUYrtdotcCEw9GfCccwYkx8AiSW08mfgsFB0FVVAeTmXvryf1kKwbu5If58wOcQ3glf8eTssVRUUMkDTid812io2O/qguD2tmSNwW6j2ZXOcUYMcESP+kdHVe90z+GALfQDsRHJNpvcEgdvgBVhEex0eflCwtsME8Gt2VnQo2MS8XR3C+Ylog/JCOG0EgNqxCM+BQYIdllZCTcc54cYWBPGFXHcGFJDDCgTfz1yYS3x+1UZETo8PPcfk0kYCWYz6BOT5JaVabnKJpCzYBCYjQ3F5McTE6wPELneKEqgej2k3imVW2oneSCTNnKGR6m322VJieeLJXd8HFJqa6WRgI54MD9PU5MpW4yCKvzAUF0N+VtbVHLWEaXZUFCMPLQBv8ulKApu9vWBb2oKftbVUfMAewvyBni0XBcjkROnU9Hu05qbIbO9HYLr67DX1kbvaLA4yYiTGLBINWBnB5PzviIj0lta2F/v8DD8GRmRTsjJAYMpi7Z0kRgwSRsJ4/GGsZopEV1WFnsVRH7jaTDHx5I5xlKqQ08SA0jmoMbcmUIDiFxraGCzIbmKg95eqaNKMyLhXOOjoJOmNKAiEjQpKWDq6IjUBbFDGuslrWGnbDmOBCmWZBN6+GWE2d1lk1pgehp+4PWIy3F0Q/IC8UmQ4ZaWwKSUyesFZnMTQkh2iiFMwvgEr/DY7RY3JDyXpCMa49qlSFfkP0BDj44AsN/75xhnwKDSMBKRZBVYWQEfIXItQ/A0oMTUIb4bojWlpFcriG5KT7E70qSlgX9uDnxkV0jq93jivZGv0f2g3MuItM6fuS72KoV0xE/ELyVaLSATHiEGrpB8gNMZUvMyakI0INyXIHZzOprifRt+RJgRb7gHp1JZ4NaYOR2Xeh3/1+f5XwEGANZLOnq2peEfAAAAAElFTkSuQmCC);border-bottom:1px solid #ddd;white-space:nowrap}.tab{display:inline-block;padding:5px 10px;color:#666;line-height:1;cursor:pointer;border-bottom:1px solid transparent}.tab:hover{background:#eee}.tab_selected{color:#444;border-bottom:2px solid rgba(62,130,247,.6);margin-bottom:-1px}.layout-buttons{display:flex}.layout-button{display:flex;align-items:center;justify-content:center;flex:0 0 auto;width:28px;height:24px;color:#646464;cursor:pointer}.layout-button:hover{background:rgb(66,128,236);color:#fff}.layout-button:before{content:"";width:15px;height:13px;border:2px solid currentColor;box-sizing:border-box}:host([side="left"]) .layout-button[side=left],:host([side="right"]) .layout-button[side=right],:host([side="top"]) .layout-button[side=top],:host([side="bottom"]) .layout-button[side=bottom],:host([side="fit the page"]) .layout-button[side="fit the page"]{color:#4280ec;background:none;cursor:default}.layout-button[side=external]:before{height:10px;width:13px;border-width:0 0 2px 2px;margin-bottom:-3px}.layout-button[side=external]:after{content:"";height:10px;width:13px;border:2px solid currentColor;box-sizing:border-box;margin-top:-3px;margin-left:-10px}.layout-button[side=top]:before{border-top-width:5px}.layout-button[side=right]:before{border-right-width:5px}.layout-button[side=bottom]:before{border-bottom-width:5px}.layout-button[side=left]:before{border-left-width:5px}.close-button{position:relative;width:28px;text-align:center;font:20px Arial,sans-serif;color:#5a5a5a;cursor:pointer}.close-button:hover{color:#000}.close-button:after{content:"\\d7";line-height:24px}.sandbox{flex:1 1 auto;position:relative}iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0;background:transparent}\n';

  // node_modules/rempl/lib/host/in-page/view.js
  var publishers = [];
  var selectedPublisher = null;
  var selectPublisher = () => {
  };
  var view = null;
  var onClose;
  var settings = {};
  function setSetting(name, value) {
    settings[name] = value;
    try {
      localStorage.rempl = JSON.stringify(settings);
    } catch (e) {
    }
  }
  function updateTabSelectedState(tabEl) {
    tabEl.classList.toggle("tab_selected", tabEl.getAttribute("publisher") === selectedPublisher);
  }
  function updatePublisherList() {
    const { tabs } = getView();
    tabs.innerHTML = "";
    for (const publisher2 of publishers) {
      const { element } = createElement({
        publisher: publisher2,
        class: "tab",
        children: [publisher2],
        events: {
          click() {
            selectPublisher(publisher2);
          }
        }
      });
      updateTabSelectedState(element);
      tabs.appendChild(element);
    }
  }
  function getView() {
    if (view === null) {
      const wrapperEl = document.createElement("div");
      const shadow = wrapperEl.attachShadow({ mode: "open" });
      const styleEl = document.createElement("style");
      const content = createElement({
        class: "host",
        children: [
          {
            class: "toolbar",
            children: [
              {
                ref: "tabs",
                style: {
                  display: "flex",
                  flex: "1"
                }
              },
              {
                ref: "buttons",
                class: "layout-buttons",
                children: [
                  ...["left", "top", "bottom", "right", "fit the page"].map((side) => ({
                    side,
                    title: `Dock to ${side}`,
                    class: "layout-button",
                    events: {
                      click() {
                        wrapperEl.setAttribute("side", side);
                        setSetting("host-dock", side);
                      }
                    }
                  })),
                  {
                    class: "close-button",
                    events: {
                      click() {
                        onClose?.();
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            ref: "sandbox",
            class: "sandbox"
          }
        ]
      });
      try {
        Object.assign(settings, JSON.parse(localStorage.rempl || "{}"));
      } catch (e) {
      }
      wrapperEl.setAttribute("side", settings["host-dock"] || "bottom");
      styleEl.append(document.createTextNode(styles));
      shadow.append(styleEl);
      shadow.append(content.element);
      view = {
        wrapper: wrapperEl,
        ...content
      };
      updatePublisherList();
    }
    return view;
  }
  function showView(closeCallback) {
    const { wrapper } = getView();
    onClose = closeCallback;
    wrapper.style.display = "";
    if (!document.contains(wrapper)) {
      (document.body || document.documentElement).append(wrapper);
    }
  }
  function softHideView() {
    getView().wrapper.style.display = "none";
  }
  function hideView() {
    getView().wrapper.remove();
  }
  var view$1 = {
    show: showView,
    hide: hideView,
    softHide: softHideView,
    getSandboxContainer() {
      return getView().sandbox;
    },
    setPublisherList(publisherList, selectPublisherFn) {
      publishers = publisherList;
      selectPublisher = selectPublisherFn;
      updatePublisherList();
    },
    selectPublisher(id) {
      if (selectedPublisher !== id) {
        selectedPublisher = id;
        if (view) {
          Array.from(getView().tabs.children).forEach(
            (el) => updateTabSelectedState(el)
          );
        }
      }
    }
  };

  // node_modules/rempl/lib/host/in-page/index.js
  var publishers2 = [];
  var selectedPublisherId = null;
  var autoSelectPublisher = false;
  var teardownTimer;
  var transport = null;
  var sandbox = null;
  var host = null;
  function cleanupSandbox() {
    if (sandbox !== null) {
      sandbox.destroy();
      sandbox = null;
    }
  }
  function selectPublisher2(publisherId = null) {
    if (!publisherId) {
      publisherId = null;
    }
    if (publisherId !== selectedPublisherId) {
      autoSelectPublisher = false;
      selectedPublisherId = publisherId;
      if (selectedPublisherId) {
        view$1.selectPublisher(selectedPublisherId);
        view$1.show(host.deactivate);
        transport.onInit(
          { id: selectedPublisherId },
          function initSandbox(papi) {
            papi.getRemoteUI((error, type, content) => {
              const sandboxContainerEl = view$1.getSandboxContainer();
              cleanupSandbox();
              if (error) {
                const errorEl = document.createElement("div");
                errorEl.append("Error on loading UI: ", error);
                errorEl.setAttribute(
                  "style",
                  "margin:10px;padding:5px 10px;border-radius:3px;border:1px solid #eba8a8;color:#f34040;background:#ffe0e0;"
                );
                sandboxContainerEl.innerHTML = "";
                sandboxContainerEl.append(errorEl);
              } else {
                sandbox = createSandbox(
                  {
                    container: sandboxContainerEl,
                    type,
                    content
                  },
                  (api) => {
                    papi.subscribe(api.send);
                    api.subscribe(papi.send);
                  }
                );
                sandbox.setConnected(true);
              }
            });
          }
        );
      } else {
        view$1.hide();
        cleanupSandbox();
      }
    }
  }
  function getHost() {
    if (host !== null) {
      return host;
    }
    transport = EventTransport.get("rempl-inpage-host", "rempl-inpage-publisher");
    transport.remoteEndpoints.on((endpoints2) => {
      publishers2 = endpoints2;
      view$1.setPublisherList(publishers2, selectPublisher2);
      if (autoSelectPublisher && !selectedPublisherId && publishers2.length) {
        selectPublisher2(publishers2[0]);
      }
    });
    return host = {
      activate(publisher2) {
        const publisherId = typeof publisher2 === "string" ? publisher2 : publisher2?.id || selectedPublisherId || publishers2[0] || null;
        clearTimeout(teardownTimer);
        selectPublisher2(publisherId);
        view$1.show(host.deactivate);
        if (!selectedPublisherId) {
          autoSelectPublisher = true;
        }
      },
      deactivate(publisher2) {
        const publisherId = typeof publisher2 === "string" ? publisher2 : publisher2?.id || null;
        autoSelectPublisher = false;
        if (!publisherId || publisherId === selectedPublisherId) {
          view$1.softHide();
          clearTimeout(teardownTimer);
          teardownTimer = setTimeout(() => selectPublisher2(), 15e3);
        }
      }
    };
  }

  // node_modules/rempl/lib/publisher/TransportPublisher.js
  var TransportPublisher = class extends Publisher {
    getRemoteUI;
    options;
    constructor(id, getRemoteUI, options) {
      super(id);
      this.options = options || {};
      this.getRemoteUI = (settings2) => {
        try {
          return Promise.resolve(getRemoteUI(settings2)).then((result) => {
            if (result.type === "script") {
              return {
                type: "script",
                value: {
                  "publisher-ui.js": result.value
                }
              };
            }
            return result;
          });
        } catch (e) {
          return Promise.reject(e);
        }
      };
    }
  };

  // node_modules/rempl/lib/publisher/factory.js
  var publishers3 = /* @__PURE__ */ new Map();
  var ws = null;
  function getPublisher(id, getRemoteUI, options) {
    let publisher2 = publishers3.get(id);
    if (publisher2) {
      console.warn(`[rempl] Publisher with ID "${id}" has been already created`);
      return publisher2;
    }
    publisher2 = new TransportPublisher(id, getRemoteUI, options);
    publishers3.set(id, publisher2);
    if (ws) {
      ws.sync(publisher2);
    }
    return publisher2;
  }
  function resolveWsUri(settings2, uri) {
    switch (uri) {
      case "implicit":
      case void 0:
        return settings2.explicit || settings2.implicit;
      case "explicit":
        return settings2.explicit;
    }
    return uri;
  }
  function connect(auto, createWsTransport, fetchWsSettings2, uri) {
    if (ws === null) {
      uri = auto ? fetchWsSettings2().explicit : resolveWsUri(fetchWsSettings2(), uri);
      if (typeof uri === "string") {
        ws = createWsTransport(uri);
        for (const publisher2 of publishers3.values()) {
          ws.sync(publisher2);
        }
      } else if (!auto) {
        console.warn(
          "[rempl] Connection to WS server doesn't established since bad value for URI",
          uri
        );
      }
    } else {
      console.warn("[rempl] Connection to WS server already set");
    }
  }

  // node_modules/rempl/lib/publisher/browser/transport-ws.js
  var import_socket_io_slim = __toESM(require_socket_io_slim(), 1);

  // node_modules/rempl/lib/transport/ws.js
  var endpoints = /* @__PURE__ */ Object.create(null);
  var INFO_UPDATE_TIME = 100;
  function valuesChanged(a, b) {
    for (const key of Object.keys(a)) {
      const value1 = a[key];
      const value2 = b[key];
      if (Array.isArray(value1)) {
        if (valuesChanged(value1, value2)) {
          return true;
        }
      } else {
        if (String(value1) !== String(value2)) {
          return true;
        }
      }
    }
    return false;
  }
  function normalizeUri(uri) {
    uri = String(uri);
    if (/^\d+$/.test(uri)) {
      return "ws://localhost:" + uri;
    }
    return uri.replace(/^http:\/\//i, "ws://").replace(/^https:\/\//i, "wss://").replace(/^([a-z]+:\/\/)|^/i, function(m, protocol) {
      protocol = protocol ? protocol.toLowerCase() : "";
      return protocol === "ws://" || protocol === "wss://" ? protocol : "ws://";
    });
  }
  function subscribe2(endpoint, fn) {
    return subscribe(this.dataCallbacks, {
      endpoint,
      fn
    });
  }
  function send(endpoint, callback) {
    this.send("rempl:from publisher", endpoint, callback);
  }
  function onConnect() {
    clearInterval(this.sendInfoTimer);
    this.connected.set(true);
    this.info = this.getInfo();
    this.send("rempl:endpoint connect", this.info, (data) => {
      if ("id" in data) {
        this.setClientId(data.id);
      }
      this.sendInfoTimer = setInterval(this.sendInfo.bind(this), INFO_UPDATE_TIME);
    });
  }
  function onGetUI(id, settings2, callback) {
    const publisherMeta = this.publishersMap.get(id);
    if (!publisherMeta) {
      callback("Publisher `" + id + "` isn't registered");
      return;
    }
    return publisherMeta.getRemoteUI(settings2 || {}).catch((error) => ({ error: String(error?.message) })).then((res) => {
      if ("error" in res) {
        callback(res.error);
      } else {
        callback(null, res.type, res.value);
      }
    });
  }
  function onData(id, ...args) {
    if (!this.publishersMap.has(id)) {
      return;
    }
    this.dataCallbacks.forEach(function(callback) {
      if (callback.endpoint === id) {
        callback.fn.apply(null, args);
      }
    });
  }
  function onDisconnect() {
    clearInterval(this.sendInfoTimer);
    this.connected.set(false);
  }
  var WsTransport = class {
    static get(endpoint, socketIO2) {
      if (endpoint in endpoints) {
        return endpoints[endpoint];
      }
      return endpoints[endpoint] = new this(endpoint, socketIO2);
    }
    publishers = [];
    publishersMap = /* @__PURE__ */ new Map();
    dataCallbacks = [];
    connected = new ReactiveValue(false);
    ownEndpoints = new EndpointList();
    remoteEndpoints = new EndpointList();
    socket;
    sessionId = genUID();
    id = null;
    sendInfoTimer = null;
    info = this.getInfo();
    constructor(uri, socketIO2) {
      this.socket = socketIO2.connect(normalizeUri(uri), { transports: ["websocket"] }).on("connect", onConnect.bind(this)).on("disconnect", onDisconnect.bind(this)).on("rempl:get ui", onGetUI.bind(this)).on("rempl:to publisher", onData.bind(this));
    }
    get type() {
      return "unknown";
    }
    setClientId(id) {
      this.id = id;
    }
    send(name, arg, callback) {
      this.socket.emit(name, arg, callback);
    }
    getInfo() {
      return {
        id: this.id,
        sessionId: this.sessionId,
        type: this.type,
        publishers: [...this.publishers]
      };
    }
    sendInfo() {
      const newInfo = this.getInfo();
      if (valuesChanged(this.info, newInfo)) {
        this.info = newInfo;
        this.send("rempl:endpoint info", this.info);
      }
    }
    createApi(publisher2) {
      if (this.publishersMap.has(publisher2.id)) {
        return;
      }
      if (publisher2.id) {
        this.publishers.push(publisher2.id);
        this.publishersMap.set(publisher2.id, {
          getRemoteUI: publisher2.getRemoteUI
        });
      }
      this.sendInfo();
      return {
        connected: this.connected,
        send: send.bind(this, publisher2.id),
        subscribe: subscribe2.bind(this, publisher2.id)
      };
    }
    sync(publisher2) {
      const api = this.createApi(publisher2);
      if (api) {
        api.subscribe(publisher2.processInput.bind(publisher2));
        api.connected.link((connected) => {
          publisher2.setupChannel("ws", api.send, this.remoteEndpoints, connected);
        });
      }
    }
  };

  // node_modules/rempl/lib/publisher/browser/identify/style.js
  var __CSS__ = ":host{position:fixed;overflow:auto;inset:0;z-index:100000000;background:rgba(255,255,255,.9);text-align:center;line-height:1.5;font-family:Tahoma,Verdana,Arial,sans-serif}h1{font-size:100px;font-size:33vh;font-size:clamp(20px,33vh,100px);font-weight:400;margin:0}button{font-size:18px;line-height:1;padding:12px 24px;background:#3bafda;color:#fff;border:none;border-radius:3px;cursor:pointer}\n";

  // node_modules/rempl/lib/publisher/browser/identify/index.js
  var identifyWidgetId = "rempl-identify-widget";
  var cancelOverlay = null;
  function createOverlay(origin, num) {
    const overlayEl = document.createElement("div");
    const shadow = overlayEl.attachShadow({ mode: "closed" });
    const styleEl = document.createElement("style");
    const buttonsEl = document.createElement("div");
    const headerEl = document.createElement("h1");
    overlayEl.id = identifyWidgetId;
    overlayEl.dataset.origin = origin;
    headerEl.textContent = num;
    styleEl.textContent = __CSS__;
    shadow.append(styleEl, headerEl, buttonsEl);
    return {
      overlayEl,
      createButton(name, pickPublisher) {
        const wrapperEl = buttonsEl.appendChild(document.createElement("div"));
        const buttonEl = wrapperEl.appendChild(document.createElement("button"));
        wrapperEl.setAttribute("style", "margin-bottom:5px");
        buttonEl.textContent = name;
        buttonEl.addEventListener("click", pickPublisher);
      }
    };
  }
  function postIdentifyMessage(params) {
    postMessage({ to: identifyWidgetId, ...params });
  }
  function startIdentify(origin, num, callback) {
    if (typeof document === "undefined") {
      return;
    }
    const existingWidget = document.querySelector("#" + identifyWidgetId);
    if (!existingWidget || existingWidget.dataset.origin !== origin) {
      if (existingWidget) {
        postMessage({ op: "stop-identify" });
      }
      const { overlayEl, createButton } = createOverlay(origin, String(num));
      const documentStyleOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.body.appendChild(overlayEl);
      const onMessageCallback = (event) => {
        const { data } = event;
        if (data?.to === identifyWidgetId) {
          switch (data.op) {
            case "add-publisher":
              createButton(data.name || data.id, () => callback(data.id));
              break;
            case "stop-identify":
              console.log("stop-indentify");
              cancelOverlay?.();
              break;
          }
        }
      };
      addEventListener("message", onMessageCallback);
      cancelOverlay = () => {
        removeEventListener("message", onMessageCallback);
        document.body.style.overflow = documentStyleOverflow;
        overlayEl.remove();
        cancelOverlay = null;
      };
    }
  }
  function stopIdentify() {
    if (typeof cancelOverlay === "function") {
      cancelOverlay();
    }
  }

  // node_modules/rempl/lib/publisher/browser/transport-ws.js
  var STORAGE_KEY = "rempl:id";
  function fetchWsSettings() {
    function fetchEnvVariable() {
      if (typeof REMPL_SERVER !== "undefined" && REMPL_SERVER !== resolvedGlobalThis.REMPL_SERVER) {
        return REMPL_SERVER;
      }
    }
    function fetchMeta() {
      const meta = typeof document !== "undefined" ? document.querySelector('meta[name="rempl:server"]') : void 0;
      return meta && meta.getAttribute("content") || void 0;
    }
    const implicitUri = location.protocol + "//" + (location.hostname || "localhost") + ":8177";
    let explicitUri = void 0;
    let setup = fetchEnvVariable();
    if (setup === void 0) {
      setup = fetchMeta();
    }
    switch (setup) {
      case "none":
      case void 0:
      case false:
        break;
      case "implicit":
      case "auto":
      case true:
        explicitUri = implicitUri;
        break;
      default:
        if (typeof setup === "string") {
          explicitUri = setup;
        }
    }
    return {
      explicit: explicitUri,
      implicit: implicitUri
    };
  }
  var BrowserWsTransport = class extends WsTransport {
    constructor(uri) {
      super(uri, import_socket_io_slim.default);
      const self2 = this;
      try {
        this.id = sessionStorage[STORAGE_KEY];
      } catch (e) {
      }
      this.socket.on(
        "rempl:identify",
        function(num, callback) {
          startIdentify(this.io.uri, num, callback);
          for (const publisherId of self2.publishers) {
            postIdentifyMessage({
              op: "add-publisher",
              id: publisherId,
              name: publisherId
            });
          }
        }
      ).on("rempl:stop identify", stopIdentify).on("disconnect", stopIdentify);
    }
    get type() {
      return "browser";
    }
    setClientId(id) {
      super.setClientId(id);
      try {
        sessionStorage[STORAGE_KEY] = this.id;
      } catch (e) {
      }
    }
    getInfo() {
      return {
        ...super.getInfo(),
        location: String(location),
        title: resolvedTop?.document?.title || resolvedTop?.location?.href || "Unknown"
      };
    }
  };
  function createBrowserWsTransport(uri) {
    return new BrowserWsTransport(uri);
  }

  // node_modules/rempl/lib/publisher/browser/index.js
  function createPublisher(id, getRemoteUI, options) {
    connect(true, createBrowserWsTransport, fetchWsSettings);
    const publisher2 = getPublisher(id, getRemoteUI, options);
    EventTransport.get("rempl-browser-extension-publisher", "rempl-browser-extension-host").sync(
      publisher2
    );
    EventTransport.get("rempl-inpage-publisher", "rempl-inpage-host").sync(publisher2);
    EventTransport.get("rempl-self-publisher", "rempl-self-subscriber").sync(publisher2);
    return Object.assign(publisher2.ns("*"), {
      ns: publisher2.ns.bind(publisher2)
    });
  }

  // src/publisher/config.ts
  var config = {};
  function normBasedir(basedir) {
    basedir = basedir.trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
    basedir = basedir ? `/${basedir}/` : "/";
    return basedir;
  }
  function normOpenSourceLoc(value) {
    if (!value) {
      return void 0;
    }
    let {
      pattern,
      projectRoot = "",
      basedir = "",
      basedirJsx = null
    } = typeof value === "string" ? { pattern: value } : value;
    if (typeof pattern !== "string") {
      return void 0;
    } else {
      pattern = /^[a-z]+:/.test(pattern) ? pattern : new URL(pattern, location.origin).href;
    }
    if (typeof projectRoot !== "string") {
      projectRoot = "";
    } else {
      projectRoot = projectRoot.trim().replace(/\\/g, "/").replace(/\/+$/, "");
    }
    basedir = typeof basedir !== "string" ? "" : normBasedir(basedir);
    basedirJsx = typeof basedirJsx !== "string" ? basedir : normBasedir(basedirJsx);
    return { pattern, projectRoot, basedir, basedirJsx };
  }
  if (typeof document !== "undefined") {
    const rawConfig = document.currentScript?.dataset.config;
    if (typeof rawConfig === "string") {
      try {
        const parsedConfig = Function(`return{${rawConfig}}`)();
        const parsedOpenSourceSettings = normOpenSourceLoc(
          parsedConfig.openSourceLoc
        );
        config = {
          ...parsedConfig,
          openSourceLoc: parsedOpenSourceSettings
        };
      } catch (error) {
        console.error(
          `[React Render Tracker] Config parse error
Config: ${rawConfig}
`,
          error
        );
      }
    }
  }
  var config_default = config;

  // src/publisher/utils/renderer-info.ts
  var import_gte = __toESM(require_gte());
  var MIN_SUPPORTED_VERSION = "16.9.0";
  var BUNDLE_TYPE_PROD = 0;
  var BUNDLE_TYPE_DEV = 1;
  function resolveBundleType(bundleType, version2, injectProfilingHooks) {
    if (bundleType === BUNDLE_TYPE_DEV) {
      return "development";
    }
    if (bundleType === BUNDLE_TYPE_PROD) {
      if (version2 !== "unknown" && (0, import_gte.default)(version2, "18.0.0") && typeof injectProfilingHooks === "function") {
        return "profiling";
      }
      return "production";
    }
    return "unknown";
  }
  function getRendererInfo({
    rendererPackageName,
    version: version2,
    bundleType,
    injectProfilingHooks
  }) {
    if (typeof version2 !== "string" || !/^\d+\.\d+\.\d+(-\S+)?$/.test(version2)) {
      version2 = "unknown";
    }
    return {
      name: rendererPackageName || "unknown",
      version: version2,
      bundleType: resolveBundleType(bundleType, version2, injectProfilingHooks)
    };
  }
  function isUnsupportedRenderer(renderer) {
    const info = getRendererInfo(renderer);
    if (info.name !== "react-dom" && info.name !== "react-native-renderer") {
      return {
        reason: `Unsupported renderer name, only "react-dom" is supported`,
        info
      };
    }
    if (info.version === "unknown" || !(0, import_gte.default)(info.version, MIN_SUPPORTED_VERSION)) {
      return {
        reason: `Unsupported renderer version, only v${MIN_SUPPORTED_VERSION}+ is supported`,
        info
      };
    }
    return false;
  }

  // src/publisher/react-devtools-hook.ts
  function createReactDevtoolsHook(attachRenderer, onUnsupportedRenderer, existing) {
    const attachedIntegrations = /* @__PURE__ */ new Map();
    let rendererSeedId = 0;
    const renderers = /* @__PURE__ */ new Map();
    const reactDevtoolsHook = {
      supportsFiber: true,
      renderers,
      inject(renderer) {
        let id = ++rendererSeedId;
        if (typeof existing.inject === "function") {
          id = existing.inject(renderer);
        } else {
          renderers.set(id, renderer);
        }
        const unsupportedRender = isUnsupportedRenderer(renderer);
        if (unsupportedRender) {
          console.warn(
            `[react-render-tracker] ${unsupportedRender.reason}`,
            unsupportedRender.info
          );
          onUnsupportedRenderer({
            id,
            ...unsupportedRender.info,
            reason: unsupportedRender.reason
          });
        } else {
          if (attachedIntegrations.size === 0) {
            attachedIntegrations.set(id, attachRenderer(id, renderer));
          } else {
            console.warn(
              `[react-render-tracker] Only one React instance per page is supported for now, but one more React instance (${renderer.rendererPackageName} v${renderer.version}) was detected`
            );
          }
        }
        return id;
      },
      onCommitFiberUnmount(rendererId, fiber) {
        if (typeof existing.onCommitFiberUnmount === "function") {
          existing.onCommitFiberUnmount(rendererId, fiber);
        }
        const integration = attachedIntegrations.get(rendererId);
        if (integration) {
          try {
            integration.handleCommitFiberUnmount(fiber);
          } catch (e) {
            console.error("[react-render-tracker]", e);
          }
        }
      },
      onCommitFiberRoot(rendererId, root, priorityLevel) {
        if (typeof existing.onCommitFiberRoot === "function") {
          existing.onCommitFiberRoot(rendererId, root, priorityLevel);
        }
        const integration = attachedIntegrations.get(rendererId);
        if (integration) {
          try {
            integration.handleCommitFiberRoot(root, priorityLevel);
          } catch (e) {
            console.error("[react-render-tracker]", e);
          }
        }
      },
      onPostCommitFiberRoot(rendererId, root) {
        if (typeof existing.onPostCommitFiberRoot === "function") {
          existing.onPostCommitFiberRoot(rendererId, root);
        }
        const integration = attachedIntegrations.get(rendererId);
        if (integration) {
          try {
            integration.handlePostCommitFiberRoot(root);
          } catch (e) {
            console.error("[react-render-tracker]", e);
          }
        }
      }
    };
    return reactDevtoolsHook;
  }
  var hookName = "__REACT_DEVTOOLS_GLOBAL_HOOK__";
  var MARKER = Symbol();
  function installReactDevtoolsHook(target, attachRenderer, onUnsupportedRenderer) {
    const existingHook = target[hookName];
    if (target.hasOwnProperty(hookName)) {
      if (existingHook[MARKER] === MARKER) {
        return existingHook;
      }
    }
    const hook2 = createReactDevtoolsHook(attachRenderer, onUnsupportedRenderer, {
      ...existingHook
    });
    if (existingHook) {
      existingHook[MARKER] = MARKER;
      for (const [key, value] of Object.entries(hook2)) {
        if (typeof value === "function") {
          delete existingHook[key];
          existingHook[key] = value;
        }
      }
    } else {
      Object.defineProperty(target, hookName, {
        configurable: false,
        enumerable: false,
        get() {
          return hook2;
        }
      });
    }
    return target[hookName];
  }

  // src/publisher/rempl-publisher.ts
  var import_lodash = __toESM(require_lodash());

  // src/common/constants.ts
  var ToolId = "React Render Tracker";
  var ElementTypeClass = 1;
  var ElementTypeFunction = 2;
  var ElementTypeMemo = 3;
  var ElementTypeForwardRef = 4;
  var ElementTypeProvider = 5;
  var ElementTypeConsumer = 6;
  var ElementTypeHostRoot = 7;
  var ElementTypeHostComponent = 8;
  var ElementTypeHostText = 9;
  var ElementTypeHostPortal = 10;
  var ElementTypeSuspense = 11;
  var ElementTypeSuspenseList = 12;
  var ElementTypeProfiler = 13;
  var ElementTypeOtherOrUnknown = 14;
  var FiberTypeName = {
    [ElementTypeClass]: "Class component",
    [ElementTypeFunction]: "Function component",
    [ElementTypeMemo]: "Memo",
    [ElementTypeForwardRef]: "ForwardRef",
    [ElementTypeProvider]: "Provider",
    [ElementTypeConsumer]: "Consumer",
    [ElementTypeHostRoot]: "Render root",
    [ElementTypeHostComponent]: "Host component",
    [ElementTypeHostText]: "Host text",
    [ElementTypeHostPortal]: "Host portal",
    [ElementTypeSuspense]: "Suspense",
    [ElementTypeSuspenseList]: "Suspense list",
    [ElementTypeProfiler]: "Profiler",
    [ElementTypeOtherOrUnknown]: "Unknown"
  };
  var LegacyRoot = 0;
  var ConcurrentRoot = 1;
  var fiberRootMode = {
    [LegacyRoot]: "Legacy Mode",
    [ConcurrentRoot]: "Concurrent Mode"
  };
  var TrackingObjectFiber = 0;
  var TrackingObjectAlternate = 1;
  var TrackingObjectStateNode = 2;
  var TrackingObjectHook = 3;
  var TrackingObjectTypeName = {
    [TrackingObjectFiber]: "fiber",
    [TrackingObjectAlternate]: "alternate",
    [TrackingObjectStateNode]: "stateNode",
    [TrackingObjectHook]: "hook"
  };
  var FeatureMemLeaks = false;

  // src/publisher/utils/resolveSourceLoc.ts
  var import_source_map_js = __toESM(require_source_map());
  var cache = /* @__PURE__ */ new Map();
  var knownWebpackChunks = /* @__PURE__ */ new Map();
  var sourceMapsResolve = /* @__PURE__ */ new Map();
  var noResolve = (loc) => {
    cache.set(loc, loc);
    return loc;
  };
  var needWebpackSync = true;
  var callAsap = typeof requestIdleCallback === "function" ? requestIdleCallback : (fn) => Promise.resolve().then(fn);
  function extractSourceMap(source) {
    try {
      const [, sourceMapBase64] = String(source).match(
        /\/\/# sourceMappingURL=.+?;base64,([a-zA-Z0-9\+\/=]+)/
      ) || [];
      if (sourceMapBase64) {
        return new import_source_map_js.SourceMapConsumer(JSON.parse(atob(sourceMapBase64)));
      }
    } catch (e) {
      console.warn("[React Render Tracker] Source map parse error:", e);
    }
    return null;
  }
  function sourceToResolve(filepath, source) {
    let resolve = null;
    const lazyResolve = (loc, line, column) => {
      if (resolve !== null) {
        return resolve(loc, line, column);
      }
      const sourceMap = extractSourceMap(String(source));
      if (sourceMap) {
        resolve = (loc2, line2, column2) => {
          const {
            source: source2,
            line: origLine,
            column: origColumn
          } = sourceMap.originalPositionFor({
            line: line2,
            column: column2
          });
          const resolvedLoc = source2 ? `${source2.replace(/^webpack:\/\//, "").replace(/\?.*$/, "")}:${origLine}:${origColumn + 1}` : loc2;
          cache.set(loc2, resolvedLoc);
          return resolvedLoc;
        };
      } else {
        resolve = noResolve;
      }
      sourceMapsResolve.set(filepath, resolve);
      return resolve(loc, line, column);
    };
    sourceMapsResolve.set(filepath, lazyResolve);
    return lazyResolve;
  }
  function asyncSourceToResolve(filepath, sourcePromise) {
    const promiseResolve = sourcePromise.then((source) => sourceToResolve(filepath, source)).catch(() => {
      sourceMapsResolve.set(filepath, noResolve);
      return noResolve;
    });
    sourceMapsResolve.set(
      filepath,
      (loc, line, column) => {
        const resolvedLoc = promiseResolve.then(
          (resolve) => resolve(loc, line, column)
        );
        cache.set(loc, resolvedLoc);
        return resolvedLoc;
      }
    );
  }
  function syncWebpackSourceMapsIfNeeded() {
    if (!needWebpackSync) {
      return;
    }
    needWebpackSync = false;
    callAsap(() => needWebpackSync = true);
    for (const name of Object.keys(window)) {
      if (!name.startsWith("webpackChunk_")) {
        continue;
      }
      const knownSize = knownWebpackChunks.get(name) || 0;
      const storage = window[name];
      if (!Array.isArray(storage)) {
        continue;
      }
      for (let i = knownSize; i < storage.length; i++) {
        const storageEntry = storage[i];
        if (Array.isArray(storageEntry) && storageEntry[1] && typeof storageEntry[1] === "object") {
          for (const [filepath, fn] of Object.entries(storageEntry[1])) {
            sourceToResolve(filepath, fn);
          }
        }
      }
      knownWebpackChunks.set(name, storage.length);
    }
  }
  function fetchIfNeeded(filepath) {
    if (!sourceMapsResolve.has(filepath)) {
      asyncSourceToResolve(
        filepath,
        fetch(filepath).then((res) => res.text())
      );
    }
  }
  function resolveSourceLoc(loc) {
    const cachedValue = cache.get(loc);
    if (cachedValue !== void 0) {
      return cachedValue;
    }
    const [, filepath, rawLine, rawColumn] = loc.replace(/^webpack-internal:\/\/\//, "").match(/^(.+?)(?::(\d+)(?::(\d+))?)?$/) || [];
    const genLine = rawLine ? parseInt(rawLine, 10) : 1;
    const genColumn = rawColumn ? parseInt(rawColumn, 10) : 1;
    syncWebpackSourceMapsIfNeeded();
    fetchIfNeeded(filepath);
    const resolve = sourceMapsResolve.get(filepath) || noResolve;
    return resolve(loc, genLine, genColumn);
  }

  // src/publisher/rempl-publisher.ts
  var eventIdSeed = 0;
  var { openSourceLoc } = config_default;
  var events = [];
  var publisher = createPublisher(ToolId, () => {
    if (false) {
      const origin = "http://localhost:3000";
      return fetch(`${origin}/subscriber.js`).then((res) => res.text()).then((script) => ({ type: "script", value: script }));
    } else {
    }
  });
  var reactRenderers = [];
  var reactUnsupportedRenderers = [];
  var reactRenderersChannel = publisher.ns("react-renderers");
  reactRenderersChannel.publish(getReactRenderersData());
  function getReactRenderersData() {
    return {
      renderers: reactRenderers,
      unsupportedRenderers: reactUnsupportedRenderers
    };
  }
  function publishReactUnsupportedRenderer(rendererInfo) {
    reactUnsupportedRenderers.push(rendererInfo);
    reactRenderersChannel.publish(getReactRenderersData());
  }
  function publishReactRenderer(id, renderer) {
    const channelId = `events:${id}`;
    reactRenderers.push({
      id,
      ...getRendererInfo(renderer),
      channelId
    });
    const eventLogChannel = publisher.ns(channelId);
    const getEventsState = () => ({
      count: events.length
    });
    const publishEventsDebounced = (0, import_lodash.default)(
      () => eventLogChannel.publish(getEventsState()),
      50,
      { maxWait: 50 }
    );
    const recordEvent = (payload) => {
      const id2 = eventIdSeed++;
      events.push({
        id: id2,
        ...payload
      });
      publishEventsDebounced();
      return id2;
    };
    reactRenderersChannel.publish(getReactRenderersData());
    eventLogChannel.publish(getEventsState());
    eventLogChannel.provide({
      getEventsState() {
        publishEventsDebounced.flush();
        return getEventsState();
      },
      getEvents(offset, count) {
        if (isNaN(offset) || isNaN(count)) {
          return [];
        }
        publishEventsDebounced.flush();
        const start = Math.max(0, Math.floor(offset));
        let end = start + Math.min(Math.max(0, Math.floor(count)), events.length - start);
        if (end > start) {
          const { commitId } = events[end - 1];
          for (; end < events.length; end++) {
            if (events[end].commitId !== commitId) {
              break;
            }
          }
        }
        return events.slice(start, end);
      }
    });
    return recordEvent;
  }
  publisher.ns("open-source-settings").publish(openSourceLoc || null);
  publisher.provide(
    "resolve-source-locations",
    (locations) => Promise.all(locations.map(resolveSourceLoc)).then(
      (result) => result.map((resolved, idx) => ({ loc: locations[idx], resolved }))
    )
  );
  function remoteCommands({
    breakLeakedObjectRefs,
    getExposedToGlobalLeaksState,
    subscribeToExposedToGlobalLeaksState,
    cancelExposingLeakedObjectsToGlobal,
    exposeLeakedObjectsToGlobal,
    highlightApi
  }) {
    const memoryLeaksNs = publisher.ns("memory-leaks");
    memoryLeaksNs.publish(getExposedToGlobalLeaksState());
    subscribeToExposedToGlobalLeaksState((state) => memoryLeaksNs.publish(state));
    memoryLeaksNs.provide({
      breakLeakedObjectRefs,
      exposeLeakedObjectsToGlobal,
      cancelExposingLeakedObjectsToGlobal
    });
    const { startHighlight, stopHighlight, startInspect, stopInspect } = highlightApi;
    highlightApi.subscribe((state) => publisher.ns("highlighting").publish(state));
    publisher.ns("highlighting").provide({
      startHighlight,
      stopHighlight,
      startInspect,
      stopInspect
    });
  }

  // src/publisher/react-integration/utils/getInternalReactConstants.ts
  var import_gt = __toESM(require_gt());
  var import_gte2 = __toESM(require_gte());

  // src/publisher/react-integration/utils/constants.ts
  var CONCURRENT_MODE_NUMBER = 60111;
  var CONCURRENT_MODE_SYMBOL_STRING = "Symbol(react.concurrent_mode)";
  var CONTEXT_NUMBER = 60110;
  var CONTEXT_SYMBOL_STRING = "Symbol(react.context)";
  var DEPRECATED_ASYNC_MODE_SYMBOL_STRING = "Symbol(react.async_mode)";
  var FORWARD_REF_NUMBER = 60112;
  var FORWARD_REF_SYMBOL_STRING = "Symbol(react.forward_ref)";
  var FRAGMENT_SYMBOL_STRING = "Symbol(react.fragment)";
  var LAZY_SYMBOL_STRING = "Symbol(react.lazy)";
  var MEMO_NUMBER = 60115;
  var MEMO_SYMBOL_STRING = "Symbol(react.memo)";
  var PROFILER_NUMBER = 60114;
  var PROFILER_SYMBOL_STRING = "Symbol(react.profiler)";
  var PROVIDER_NUMBER = 60109;
  var PROVIDER_SYMBOL_STRING = "Symbol(react.provider)";
  var SCOPE_NUMBER = 60119;
  var SCOPE_SYMBOL_STRING = "Symbol(react.scope)";
  var STRICT_MODE_NUMBER = 60108;
  var STRICT_MODE_SYMBOL_STRING = "Symbol(react.strict_mode)";

  // src/publisher/react-integration/utils/getDisplayName.ts
  var cachedDisplayNames = /* @__PURE__ */ new WeakMap();
  var usedDisplayNames = /* @__PURE__ */ new Map();
  function getDisplayName(type, kind = "") {
    const displayNameFromCache = cachedDisplayNames.get(type);
    if (typeof displayNameFromCache === "string") {
      return displayNameFromCache;
    }
    let displayName;
    if (type) {
      if (typeof type.displayName === "string") {
        displayName = type.displayName;
      } else if (typeof type.name === "string" && type.name !== "") {
        displayName = type.name;
      }
    }
    if (!displayName) {
      displayName = "Anonymous" + kind;
    }
    if (usedDisplayNames.has(displayName)) {
      const num = usedDisplayNames.get(displayName) || 2;
      usedDisplayNames.set(displayName, num + 1);
      displayName += `\`${String(num)}`;
    } else {
      usedDisplayNames.set(displayName, 2);
    }
    cachedDisplayNames.set(type, displayName);
    return displayName;
  }

  // src/publisher/react-integration/utils/getInternalReactConstants.ts
  function getInternalReactConstants(version2) {
    const ReactTypeOfSideEffect = {
      DidCapture: 128,
      NoFlags: 0,
      PerformedWork: 1,
      Placement: 2,
      Incomplete: 8192
    };
    let ReactPriorityLevels = {
      ImmediatePriority: 99,
      UserBlockingPriority: 98,
      NormalPriority: 97,
      LowPriority: 96,
      IdlePriority: 95,
      NoPriority: 90
    };
    if ((0, import_gt.default)(version2, "17.0.2")) {
      ReactPriorityLevels = {
        ImmediatePriority: 1,
        UserBlockingPriority: 2,
        NormalPriority: 3,
        LowPriority: 4,
        IdlePriority: 5,
        NoPriority: 0
      };
    }
    let ReactTypeOfWork = null;
    if ((0, import_gt.default)(version2, "17.0.1")) {
      ReactTypeOfWork = {
        CacheComponent: 24,
        ClassComponent: 1,
        ContextConsumer: 9,
        ContextProvider: 10,
        CoroutineComponent: -1,
        CoroutineHandlerPhase: -1,
        DehydratedSuspenseComponent: 18,
        ForwardRef: 11,
        Fragment: 7,
        FunctionComponent: 0,
        HostComponent: 5,
        HostPortal: 4,
        HostRoot: 3,
        HostText: 6,
        IncompleteClassComponent: 17,
        IndeterminateComponent: 2,
        LazyComponent: 16,
        LegacyHiddenComponent: 23,
        MemoComponent: 14,
        Mode: 8,
        OffscreenComponent: 22,
        Profiler: 12,
        ScopeComponent: 21,
        SimpleMemoComponent: 15,
        SuspenseComponent: 13,
        SuspenseListComponent: 19,
        YieldComponent: -1
      };
    } else if ((0, import_gte2.default)(version2, "17.0.0-alpha")) {
      ReactTypeOfWork = {
        CacheComponent: -1,
        ClassComponent: 1,
        ContextConsumer: 9,
        ContextProvider: 10,
        CoroutineComponent: -1,
        CoroutineHandlerPhase: -1,
        DehydratedSuspenseComponent: 18,
        ForwardRef: 11,
        Fragment: 7,
        FunctionComponent: 0,
        HostComponent: 5,
        HostPortal: 4,
        HostRoot: 3,
        HostText: 6,
        IncompleteClassComponent: 17,
        IndeterminateComponent: 2,
        LazyComponent: 16,
        LegacyHiddenComponent: 24,
        MemoComponent: 14,
        Mode: 8,
        OffscreenComponent: 23,
        Profiler: 12,
        ScopeComponent: 21,
        SimpleMemoComponent: 15,
        SuspenseComponent: 13,
        SuspenseListComponent: 19,
        YieldComponent: -1
      };
    } else if ((0, import_gte2.default)(version2, "16.6.0-beta.0")) {
      ReactTypeOfWork = {
        CacheComponent: -1,
        ClassComponent: 1,
        ContextConsumer: 9,
        ContextProvider: 10,
        CoroutineComponent: -1,
        CoroutineHandlerPhase: -1,
        DehydratedSuspenseComponent: 18,
        ForwardRef: 11,
        Fragment: 7,
        FunctionComponent: 0,
        HostComponent: 5,
        HostPortal: 4,
        HostRoot: 3,
        HostText: 6,
        IncompleteClassComponent: 17,
        IndeterminateComponent: 2,
        LazyComponent: 16,
        LegacyHiddenComponent: -1,
        MemoComponent: 14,
        Mode: 8,
        OffscreenComponent: -1,
        Profiler: 12,
        ScopeComponent: -1,
        SimpleMemoComponent: 15,
        SuspenseComponent: 13,
        SuspenseListComponent: 19,
        YieldComponent: -1
      };
    } else if ((0, import_gte2.default)(version2, "16.4.3-alpha")) {
      ReactTypeOfWork = {
        CacheComponent: -1,
        ClassComponent: 2,
        ContextConsumer: 11,
        ContextProvider: 12,
        CoroutineComponent: -1,
        CoroutineHandlerPhase: -1,
        DehydratedSuspenseComponent: -1,
        ForwardRef: 13,
        Fragment: 9,
        FunctionComponent: 0,
        HostComponent: 7,
        HostPortal: 6,
        HostRoot: 5,
        HostText: 8,
        IncompleteClassComponent: -1,
        IndeterminateComponent: 4,
        LazyComponent: -1,
        LegacyHiddenComponent: -1,
        MemoComponent: -1,
        Mode: 10,
        OffscreenComponent: -1,
        Profiler: 15,
        ScopeComponent: -1,
        SimpleMemoComponent: -1,
        SuspenseComponent: 16,
        SuspenseListComponent: -1,
        YieldComponent: -1
      };
    } else {
      ReactTypeOfWork = {
        CacheComponent: -1,
        ClassComponent: 2,
        ContextConsumer: 12,
        ContextProvider: 13,
        CoroutineComponent: 7,
        CoroutineHandlerPhase: 8,
        DehydratedSuspenseComponent: -1,
        ForwardRef: 14,
        Fragment: 10,
        FunctionComponent: 1,
        HostComponent: 5,
        HostPortal: 4,
        HostRoot: 3,
        HostText: 6,
        IncompleteClassComponent: -1,
        IndeterminateComponent: 0,
        LazyComponent: -1,
        LegacyHiddenComponent: -1,
        MemoComponent: -1,
        Mode: 11,
        OffscreenComponent: -1,
        Profiler: 15,
        ScopeComponent: -1,
        SimpleMemoComponent: -1,
        SuspenseComponent: 16,
        SuspenseListComponent: -1,
        YieldComponent: 9
      };
    }
    function getTypeSymbol(type) {
      const symbolOrNumber = typeof type === "object" && type !== null ? type.$$typeof : type;
      return typeof symbolOrNumber === "symbol" ? symbolOrNumber.toString() : symbolOrNumber;
    }
    const {
      CacheComponent,
      ClassComponent,
      IncompleteClassComponent,
      FunctionComponent,
      IndeterminateComponent,
      ForwardRef,
      HostRoot,
      HostComponent,
      HostPortal,
      HostText,
      Fragment,
      LazyComponent,
      LegacyHiddenComponent,
      MemoComponent,
      OffscreenComponent,
      Profiler,
      ScopeComponent,
      SimpleMemoComponent,
      SuspenseComponent,
      SuspenseListComponent
    } = ReactTypeOfWork;
    function resolveFiberType(type) {
      const typeSymbol = getTypeSymbol(type);
      switch (typeSymbol) {
        case MEMO_NUMBER:
        case MEMO_SYMBOL_STRING:
          return resolveFiberType(type.type);
        case FORWARD_REF_NUMBER:
        case FORWARD_REF_SYMBOL_STRING:
          return type.render;
        default:
          return type;
      }
    }
    function getDisplayNameForFiber(fiber) {
      const { elementType, type, tag } = fiber;
      let resolvedType = type;
      if (typeof type === "object" && type !== null) {
        resolvedType = resolveFiberType(type);
      }
      switch (tag) {
        case CacheComponent:
          return "Cache";
        case ClassComponent:
        case IncompleteClassComponent:
        case FunctionComponent:
        case IndeterminateComponent:
          return getDisplayName(resolvedType);
        case ForwardRef:
          return type?.displayName || getDisplayName(resolvedType);
        case HostRoot:
          return "HostRoot";
        case HostComponent:
          return "<" + type + ">";
        case HostPortal:
          return "#portal";
        case HostText:
          return "#text";
        case Fragment:
          return "Fragment";
        case LazyComponent:
          return "Lazy";
        case MemoComponent:
        case SimpleMemoComponent:
          return elementType?.displayName || type?.displayName || getDisplayName(resolvedType);
        case SuspenseComponent:
          return "Suspense";
        case LegacyHiddenComponent:
          return "LegacyHidden";
        case OffscreenComponent:
          return "Offscreen";
        case ScopeComponent:
          return "Scope";
        case SuspenseListComponent:
          return "SuspenseList";
        case Profiler:
          return "Profiler";
        default:
          const typeSymbol = getTypeSymbol(type);
          switch (typeSymbol) {
            case CONCURRENT_MODE_NUMBER:
            case CONCURRENT_MODE_SYMBOL_STRING:
            case DEPRECATED_ASYNC_MODE_SYMBOL_STRING:
              return null;
            case PROVIDER_NUMBER:
            case PROVIDER_SYMBOL_STRING: {
              const resolvedContext = fiber.type._context || fiber.type.context;
              return `${getDisplayName(resolvedContext, "Context")}.Provider`;
            }
            case CONTEXT_NUMBER:
            case CONTEXT_SYMBOL_STRING: {
              const resolvedContext = fiber.type._context || fiber.type;
              return `${getDisplayName(resolvedContext, "Context")}.Consumer`;
            }
            case STRICT_MODE_NUMBER:
            case STRICT_MODE_SYMBOL_STRING:
              return "StrictMode";
            case PROFILER_NUMBER:
            case PROFILER_SYMBOL_STRING:
              return `Profiler(${fiber.memoizedProps.id})`;
            case SCOPE_NUMBER:
            case SCOPE_SYMBOL_STRING:
              return "Scope";
            default:
              return null;
          }
      }
    }
    return {
      getDisplayNameForFiber,
      getTypeSymbol,
      ReactPriorityLevels,
      ReactTypeOfWork,
      ReactTypeOfSideEffect
    };
  }

  // src/publisher/react-integration/utils/getFiberFlags.ts
  function getFiberFlags(fiber) {
    return (fiber.flags !== void 0 ? fiber.flags : fiber.effectTag) ?? 0;
  }

  // src/publisher/react-integration/unmounted-fiber-leak-detector.ts
  var DEBUG_OUTPUT = false;
  var fiberProps = [
    "alternate",
    "child",
    "sibling",
    "return",
    "current",
    "dependencies",
    "stateNode",
    "_debugOwner",
    "firstEffect",
    "lastEffect",
    "nextEffect",
    "updateQueue",
    "memoizedState",
    "memoizedProps",
    "pendingProps"
  ];
  var stateNodeProps = ["_reactInternals", "_reactInternalInstance"];
  var _a;
  var FakeWeakRef = class {
    constructor() {
      this[_a] = "WeakRef";
    }
    deref() {
      return void 0;
    }
  };
  _a = Symbol.toStringTag;
  var WeakRefBase = typeof WeakRef === "undefined" ? FakeWeakRef : WeakRef;
  var TrackingObjectWeakRef = class extends WeakRefBase {
    constructor(target, fiberId, type, displayName, hookIdx = null) {
      super(target);
      this.fiberId = fiberId;
      this.type = type;
      this.displayName = displayName;
      this.hookIdx = hookIdx;
    }
    get tag() {
      return `${this.displayName || "unknown"} #${this.fiberId} (${TrackingObjectTypeName[this.type]}${this.hookIdx !== null ? " " + this.hookIdx : ""})`;
    }
    get descriptor() {
      return {
        fiberId: this.fiberId,
        type: this.type,
        hookIdx: this.hookIdx
      };
    }
    get alive() {
      return this.deref() !== void 0;
    }
  };
  var LeakedObjectsRRTMarker = {
    LeakedObjectsRRTMarker: class {
      constructor(objects) {
        this.objects = objects;
      }
    }
  }[String("LeakedObjectsRRTMarker")];
  function createUnmountedFiberLeakDetectionApi(recordEvent, roots, fiberToId) {
    const knownObjects = /* @__PURE__ */ new WeakSet();
    const candidatesByCanary = /* @__PURE__ */ new Set();
    const leakedObjects = /* @__PURE__ */ new Set();
    const leaksAdded = /* @__PURE__ */ new Set();
    const leaksRemoved = /* @__PURE__ */ new Set();
    const lastStat = { candidates: 0, leaks: 0 };
    let newCandidates = /* @__PURE__ */ new Set();
    let updateTimer = null;
    let debugOutputTimer = null;
    let trackingNewCandidatesTimer = null;
    const canariesRegistry = new FinalizationRegistry(
      (candidates) => {
        candidatesByCanary.delete(candidates);
        for (const candidate of candidates) {
          const target = candidate.deref();
          if (target !== void 0) {
            leaksRegistry.register(target, candidate);
            leakedObjects.add(candidate);
            leaksAdded.add(candidate);
          }
        }
        scheduleUpdate();
      }
    );
    const leaksRegistry = new FinalizationRegistry(
      (leak) => {
        leakedObjects.delete(leak);
        if (leaksAdded.has(leak)) {
          leaksAdded.delete(leak);
        } else {
          leaksRemoved.add(leak);
        }
        scheduleUpdate();
      }
    );
    function getLeakedObjectsProbe(fibersIds) {
      const fiberFilter = Array.isArray(fibersIds) ? new Set(fibersIds) : false;
      let markedLeakedObjects = new LeakedObjectsRRTMarker(/* @__PURE__ */ Object.create(null));
      for (const weakRef of [...leakedObjects].sort(
        (a, b) => a.tag < b.tag ? -1 : 1
      )) {
        const object = weakRef.deref();
        if (object !== void 0 && (!fiberFilter || fiberFilter.has(weakRef.fiberId))) {
          markedLeakedObjects.objects[weakRef.tag] = weakRef;
        }
      }
      return {
        get objects() {
          return markedLeakedObjects?.objects || null;
        },
        get markedObjects() {
          return markedLeakedObjects;
        },
        release() {
          markedLeakedObjects = null;
        }
      };
    }
    function debugOutput() {
      const candidates = [];
      const leaks = [...leakedObjects].map((ref) => ref.tag);
      if (debugOutputTimer !== null) {
        clearTimeout(debugOutputTimer);
        debugOutputTimer = null;
      }
      for (const canaryCandidates of candidatesByCanary) {
        for (const candidate of canaryCandidates) {
          if (candidate.alive) {
            candidates.push(candidate.tag);
          }
        }
      }
      console.log(
        `[React Render Tracker] Track React objects for memory leaks (candidates: ${lastStat.candidates !== candidates.length ? `${lastStat.candidates} \u2192 ${candidates.length}` : candidates.length}, leaks: ${lastStat.leaks !== leakedObjects.size ? `${lastStat.leaks} \u2192 ${leakedObjects.size}` : leakedObjects.size}):`,
        { candidates, leaks }
      );
      lastStat.candidates = candidates.length;
      lastStat.leaks = leakedObjects.size;
    }
    function scheduleDebugOutput() {
      if (DEBUG_OUTPUT && debugOutputTimer === null) {
        debugOutputTimer = setTimeout(debugOutput, 10);
      }
    }
    function recordUpdate() {
      if (updateTimer !== null) {
        clearTimeout(updateTimer);
        updateTimer = null;
      }
      if (leaksAdded.size || leaksRemoved.size) {
        recordEvent({
          op: "maybe-leaks",
          commitId: -1,
          added: [...leaksAdded].map((leak) => leak.descriptor),
          removed: [...leaksRemoved].map((leak) => leak.descriptor)
        });
        leaksAdded.clear();
        leaksRemoved.clear();
      }
      scheduleDebugOutput();
    }
    function scheduleUpdate() {
      if (updateTimer === null) {
        updateTimer = setTimeout(recordUpdate, 100);
      }
    }
    function startTrackingNewCandidates() {
      const canary = {};
      canariesRegistry.register(canary, newCandidates);
      candidatesByCanary.add(newCandidates);
      newCandidates = /* @__PURE__ */ new Set();
      trackingNewCandidatesTimer = null;
      scheduleDebugOutput();
    }
    function trackObjectForLeaking(target, fiberId, type, displayName = null, hookIdx = null) {
      if (!FeatureMemLeaks) {
        return;
      }
      if (knownObjects.has(target)) {
        console.warn("[React Render Tracker] An object is already tracking", {
          fiberId,
          type,
          displayName
        });
        return;
      }
      newCandidates.add(
        new TrackingObjectWeakRef(target, fiberId, type, displayName, hookIdx)
      );
      if (trackingNewCandidatesTimer === null) {
        trackingNewCandidatesTimer = setTimeout(startTrackingNewCandidates, 1e3);
      }
    }
    function breakObjectRefs(object, props) {
      for (const prop of props) {
        if (object[prop]) {
          object[prop] = null;
        }
      }
    }
    function breakLeakedObjectRefsInternal(trackingTrackingWeakRefs) {
      for (const trackingObjectWeakRef of trackingTrackingWeakRefs) {
        const object = trackingObjectWeakRef.deref();
        if (object !== void 0) {
          switch (trackingObjectWeakRef.type) {
            case TrackingObjectFiber:
            case TrackingObjectAlternate: {
              breakObjectRefs(object, fiberProps);
              break;
            }
            case TrackingObjectStateNode: {
              if (object instanceof HTMLElement) {
                for (const prop of Object.getOwnPropertyNames(object)) {
                  const value = object[prop];
                  if (value !== null && typeof value === "object") {
                    object[prop] = null;
                  }
                }
                object.remove();
              }
              breakObjectRefs(object, stateNodeProps);
              break;
            }
          }
        }
      }
    }
    function cleanupAliveTreeFiber(fiber) {
      if (fiber.firstEffect && !fiberToId.has(fiber.firstEffect)) {
        fiber.firstEffect = null;
      }
      if (fiber.lastEffect && !fiberToId.has(fiber.lastEffect)) {
        fiber.lastEffect = null;
      }
      if (fiber.child && !fiberToId.has(fiber.child)) {
        fiber.child = null;
      }
      if (fiber.sibling && !fiberToId.has(fiber.sibling)) {
        fiber.sibling = null;
      }
    }
    function cleanupAliveTree(root) {
      cleanupAliveTreeFiber(root);
      if (root.alternate) {
        cleanupAliveTreeFiber(root.alternate);
      }
      if (root.child) {
        cleanupAliveTree(root.child);
      }
      if (root.sibling) {
        cleanupAliveTree(root.sibling);
      }
    }
    function breakLeakedObjectRefs() {
      breakLeakedObjectRefsInternal(leakedObjects);
      for (const candidates of candidatesByCanary) {
        breakLeakedObjectRefsInternal(candidates);
      }
      for (const root of roots.values()) {
        cleanupAliveTree(root);
      }
    }
    const exportToGlobalName = "LeakedObjectsRRTMarker";
    let exposedLeaksStateSubscriptions = [];
    let exposedToGlobalLeaksState = null;
    let exposedToGlobalProbe = null;
    function subscribeToExposedToGlobalLeaksState(fn) {
      const subscription = { fn };
      exposedLeaksStateSubscriptions.push(subscription);
      return () => {
        exposedLeaksStateSubscriptions = exposedLeaksStateSubscriptions.filter(
          (item) => item !== subscription
        );
      };
    }
    function notifyExposedToGlobalLeaksStateChange() {
      for (const { fn } of exposedLeaksStateSubscriptions) {
        fn(exposedToGlobalLeaksState);
      }
    }
    function cancelExposingLeakedObjectsToGlobalInternal() {
      const global2 = window;
      if (exposedToGlobalProbe !== null) {
        exposedToGlobalProbe.release();
        exposedToGlobalProbe = null;
      }
      if (exposedToGlobalLeaksState !== null) {
        delete global2[exposedToGlobalLeaksState.globalName];
        exposedToGlobalLeaksState = null;
      }
    }
    function cancelExposingLeakedObjectsToGlobal() {
      if (exposedToGlobalLeaksState === null) {
        return;
      }
      cancelExposingLeakedObjectsToGlobalInternal();
      notifyExposedToGlobalLeaksStateChange();
    }
    function exposeLeakedObjectsToGlobal(fibersIds) {
      const global2 = window;
      const prevExposedToGlobalLeaksState = exposedToGlobalLeaksState;
      cancelExposingLeakedObjectsToGlobalInternal();
      let nameIdx = 0;
      let name = exportToGlobalName;
      while (name in global2) {
        nameIdx++;
        name = exportToGlobalName + nameIdx;
      }
      const probe = getLeakedObjectsProbe(fibersIds);
      const objectRefsCount = Object.keys(probe.objects || {}).length;
      const fiberIds = [
        ...new Set(Object.values(probe.objects || {}).map((ref) => ref.fiberId))
      ];
      if (objectRefsCount > 0) {
        global2[name] = probe.markedObjects;
        exposedToGlobalProbe = probe;
        exposedToGlobalLeaksState = {
          globalName: name,
          objectRefsCount,
          fiberIds
        };
      }
      if (exposedToGlobalLeaksState !== prevExposedToGlobalLeaksState) {
        notifyExposedToGlobalLeaksStateChange();
      }
      return exposedToGlobalLeaksState;
    }
    return {
      trackObjectForLeaking,
      getLeakedObjectsProbe,
      breakLeakedObjectRefs,
      getExposedToGlobalLeaksState: () => exposedToGlobalLeaksState,
      subscribeToExposedToGlobalLeaksState,
      exposeLeakedObjectsToGlobal,
      cancelExposingLeakedObjectsToGlobal
    };
  }

  // src/publisher/react-integration/core.ts
  function createIntegrationCore(renderer, recordEvent) {
    const version2 = renderer.reconcilerVersion || renderer.version || "";
    const {
      getDisplayNameForFiber,
      getTypeSymbol,
      ReactPriorityLevels,
      ReactTypeOfWork,
      ReactTypeOfSideEffect
    } = getInternalReactConstants(version2);
    const { PerformedWork } = ReactTypeOfSideEffect;
    const {
      ClassComponent,
      DehydratedSuspenseComponent,
      ForwardRef,
      Fragment,
      FunctionComponent,
      HostRoot,
      HostPortal,
      HostComponent,
      HostText,
      IncompleteClassComponent,
      IndeterminateComponent,
      LegacyHiddenComponent,
      MemoComponent,
      OffscreenComponent,
      Profiler,
      SimpleMemoComponent,
      SuspenseComponent,
      SuspenseListComponent,
      ContextConsumer,
      LazyComponent
    } = ReactTypeOfWork;
    const fiberToId = /* @__PURE__ */ new WeakMap();
    let fiberIdSeed = 0;
    const idToArbitraryFiber = /* @__PURE__ */ new Map();
    let typeIdSeed = 1;
    const fiberTypeId = /* @__PURE__ */ new WeakMap();
    const fiberTypeIdNonWeakRef = /* @__PURE__ */ new Map();
    const rootPseudoKeys = /* @__PURE__ */ new Map();
    const rootDisplayNameCounter = /* @__PURE__ */ new Map();
    const roots = /* @__PURE__ */ new Map();
    const { trackObjectForLeaking, ...memoryLeaksApi } = createUnmountedFiberLeakDetectionApi(recordEvent, roots, fiberToId);
    function shouldFilterFiber(fiber) {
      switch (fiber.tag) {
        case DehydratedSuspenseComponent:
          return true;
        case HostText:
        case Fragment:
        case LegacyHiddenComponent:
        case OffscreenComponent:
          return true;
        case HostRoot:
          return false;
        default:
          switch (getTypeSymbol(fiber.type)) {
            case CONCURRENT_MODE_NUMBER:
            case CONCURRENT_MODE_SYMBOL_STRING:
            case DEPRECATED_ASYNC_MODE_SYMBOL_STRING:
              return true;
            default:
              return false;
          }
      }
    }
    function getElementTypeForFiber(fiber) {
      switch (fiber.tag) {
        case ClassComponent:
        case IncompleteClassComponent:
          return ElementTypeClass;
        case FunctionComponent:
        case IndeterminateComponent:
          return ElementTypeFunction;
        case MemoComponent:
        case SimpleMemoComponent:
          return ElementTypeMemo;
        case ForwardRef:
          return ElementTypeForwardRef;
        case HostRoot:
          return ElementTypeHostRoot;
        case HostComponent:
          return ElementTypeHostComponent;
        case HostText:
          return ElementTypeHostText;
        case HostPortal:
          return ElementTypeHostPortal;
        case Profiler:
          return ElementTypeProfiler;
        case SuspenseComponent:
          return ElementTypeSuspense;
        case SuspenseListComponent:
          return ElementTypeSuspenseList;
        case Fragment:
          return ElementTypeOtherOrUnknown;
        default:
          switch (getTypeSymbol(fiber.type)) {
            case PROVIDER_NUMBER:
            case PROVIDER_SYMBOL_STRING:
              return ElementTypeProvider;
            case CONTEXT_NUMBER:
            case CONTEXT_SYMBOL_STRING:
              return ElementTypeConsumer;
            case PROFILER_NUMBER:
            case PROFILER_SYMBOL_STRING:
              return ElementTypeProfiler;
            case CONCURRENT_MODE_NUMBER:
            case CONCURRENT_MODE_SYMBOL_STRING:
            case DEPRECATED_ASYNC_MODE_SYMBOL_STRING:
            case STRICT_MODE_NUMBER:
            case STRICT_MODE_SYMBOL_STRING:
            default:
              return ElementTypeOtherOrUnknown;
          }
      }
    }
    function getFiberTypeId(type, tag) {
      if (type === null) {
        switch (tag) {
          case HostText:
            type = "#text";
            break;
          default:
            return -1;
        }
      }
      if (typeof type !== "object" && typeof type !== "function") {
        const replacement = fiberTypeIdNonWeakRef.get(type);
        if (replacement === void 0) {
          fiberTypeIdNonWeakRef.set(type, type = {});
        } else {
          type = replacement;
        }
      }
      let typeId = fiberTypeId.get(type);
      if (typeId === void 0) {
        fiberTypeId.set(type, typeId = typeIdSeed++);
      }
      return typeId;
    }
    function getDisplayNameForRoot(fiber) {
      let preferredDisplayName = null;
      let fallbackDisplayName = null;
      let child = fiber.child;
      for (let i = 0; i < 3; i++) {
        if (child === null) {
          break;
        }
        const displayName = getDisplayNameForFiber(child);
        if (displayName !== null) {
          if (typeof child.type === "function") {
            preferredDisplayName = displayName;
          } else if (fallbackDisplayName === null) {
            fallbackDisplayName = displayName;
          }
        }
        if (preferredDisplayName !== null) {
          break;
        }
        child = child.child;
      }
      return preferredDisplayName || fallbackDisplayName || "Anonymous";
    }
    function getOrGenerateFiberId(fiber) {
      let id;
      const { alternate } = fiber;
      if (fiberToId.has(fiber)) {
        id = fiberToId.get(fiber);
      } else {
        if (alternate !== null && fiberToId.has(alternate)) {
          id = fiberToId.get(alternate);
        }
      }
      if (typeof id === "undefined") {
        id = ++fiberIdSeed;
      }
      if (!fiberToId.has(fiber)) {
        fiberToId.set(fiber, id);
        idToArbitraryFiber.set(id, fiber);
      }
      if (alternate !== null && !fiberToId.has(alternate)) {
        fiberToId.set(alternate, id);
      }
      return id;
    }
    function getFiberIdUnsafe(fiber) {
      if (fiberToId.has(fiber)) {
        return fiberToId.get(fiber) || null;
      }
      const { alternate } = fiber;
      if (alternate !== null && fiberToId.has(alternate)) {
        return fiberToId.get(alternate) || null;
      }
      return null;
    }
    function getFiberIdThrows(fiber) {
      const id = getFiberIdUnsafe(fiber);
      if (id === null) {
        throw Error(
          `Could not find ID for Fiber "${getDisplayNameForFiber(fiber) || ""}"`
        );
      }
      return id;
    }
    function getFiberOwnerId(fiber) {
      const { _debugOwner = null } = fiber;
      if (_debugOwner !== null) {
        return getOrGenerateFiberId(_debugOwner);
      }
      let { return: parentFiber = null } = fiber;
      while (parentFiber !== null) {
        if (shouldFilterFiber(parentFiber)) {
          parentFiber = parentFiber.return;
          continue;
        }
        if (parentFiber._debugOwner) {
          return getOrGenerateFiberId(parentFiber);
        }
        if (parentFiber.tag === ForwardRef || parentFiber.tag === MemoComponent || parentFiber.tag === LazyComponent) {
          return getFiberOwnerId(parentFiber);
        }
        break;
      }
      return -1;
    }
    function getFiberById(id) {
      return idToArbitraryFiber.get(id) || null;
    }
    function findFiberByHostInstance(hostInstance) {
      return renderer.findFiberByHostInstance(hostInstance);
    }
    function removeFiber(fiber, refs) {
      const displayName = getDisplayNameForFiber(fiber);
      const { stateNode, alternate, memoizedState } = refs || fiber;
      const id = getFiberIdUnsafe(fiber);
      if (typeof id !== "number") {
        console.error(
          "[React Render Tracker] removeFiber can't resolve an id by a given fiber"
        );
        return;
      }
      idToArbitraryFiber.delete(id);
      fiberToId.delete(fiber);
      trackObjectForLeaking(fiber, id, TrackingObjectFiber, displayName, null);
      if (stateNode) {
        trackObjectForLeaking(
          stateNode,
          id,
          TrackingObjectStateNode,
          displayName,
          null
        );
      }
      if (alternate) {
        fiberToId.delete(alternate);
        trackObjectForLeaking(
          alternate,
          id,
          TrackingObjectAlternate,
          displayName,
          null
        );
      }
      if (memoizedState && "next" in memoizedState) {
        let cursor = memoizedState;
        while (cursor !== null) {
          if (typeof cursor.queue?.dispatch === "function") {
            trackObjectForLeaking(
              cursor.queue.dispatch,
              id,
              TrackingObjectHook,
              displayName,
              cursor.queue.dispatch.hookIdx
            );
          } else if (typeof cursor.memoizedState?.create === "function") {
            trackObjectForLeaking(
              cursor.memoizedState.create,
              id,
              TrackingObjectHook,
              displayName,
              cursor.memoizedState.create.hookIdx
            );
          }
          cursor = cursor.next;
        }
      }
    }
    function isFiberRoot(fiber) {
      return fiber.tag === HostRoot;
    }
    function setRootPseudoKey(id, fiber) {
      const name = getDisplayNameForRoot(fiber);
      const counter = rootDisplayNameCounter.get(name) || 0;
      const pseudoKey = `${name}:${counter}`;
      rootDisplayNameCounter.set(name, counter + 1);
      rootPseudoKeys.set(id, pseudoKey);
      roots.set(id, fiber);
    }
    function getRootPseudoKey(id) {
      return rootPseudoKeys.get(id) || null;
    }
    function removeRootPseudoKey(id) {
      roots.delete(id);
      const pseudoKey = rootPseudoKeys.get(id);
      if (pseudoKey === void 0) {
        throw new Error("Expected root pseudo key to be known.");
      }
      const name = pseudoKey.substring(0, pseudoKey.lastIndexOf(":"));
      const counter = rootDisplayNameCounter.get(name);
      if (counter === void 0) {
        throw new Error("Expected counter to be known.");
      }
      if (counter > 1) {
        rootDisplayNameCounter.set(name, counter - 1);
      } else {
        rootDisplayNameCounter.delete(name);
      }
      rootPseudoKeys.delete(id);
    }
    function didFiberRender(prevFiber, nextFiber) {
      switch (nextFiber.tag) {
        case ClassComponent:
        case FunctionComponent:
        case ContextConsumer:
        case MemoComponent:
        case SimpleMemoComponent:
          return (getFiberFlags(nextFiber) & PerformedWork) === PerformedWork;
        default:
          return prevFiber.memoizedProps !== nextFiber.memoizedProps || prevFiber.memoizedState !== nextFiber.memoizedState || prevFiber.ref !== nextFiber.ref;
      }
    }
    return {
      ReactTypeOfSideEffect,
      ReactTypeOfWork,
      ReactPriorityLevels,
      getElementTypeForFiber,
      getFiberTypeId,
      getOrGenerateFiberId,
      getFiberIdThrows,
      getFiberIdUnsafe,
      getFiberById,
      getFiberOwnerId,
      removeFiber,
      getDisplayNameForFiber,
      getDisplayNameForRoot,
      isFiberRoot,
      setRootPseudoKey,
      getRootPseudoKey,
      removeRootPseudoKey,
      didFiberRender,
      shouldFilterFiber,
      findFiberByHostInstance,
      memoryLeaksApi
    };
  }

  // src/publisher/react-integration/utils/separateDisplayNameAndHOCs.ts
  function separateDisplayNameAndHOCs(displayName, type) {
    if (displayName === null) {
      return { displayName, hocDisplayNames: null };
    }
    let hocDisplayNames = [];
    if (type === ElementTypeClass || type === ElementTypeFunction || type === ElementTypeForwardRef || type === ElementTypeMemo) {
      if (displayName.includes("(")) {
        const matches = displayName.match(/[^()]+/g);
        if (matches !== null) {
          displayName = matches.pop() || "";
          hocDisplayNames = matches;
        }
      }
    }
    if (type === ElementTypeMemo) {
      hocDisplayNames.unshift("Memo");
    } else if (type === ElementTypeForwardRef) {
      hocDisplayNames.unshift("ForwardRef");
    }
    return {
      displayName,
      hocDisplayNames: hocDisplayNames.length > 0 ? hocDisplayNames : null
    };
  }

  // src/publisher/react-integration/utils/getDisplayNameFromJsx.ts
  function getDisplayNameFromJsx(type) {
    if (type) {
      switch (typeof type) {
        case "string":
          return type;
        case "function":
          return getDisplayName(type);
        case "symbol":
          if (String(type) === FRAGMENT_SYMBOL_STRING) {
            return "";
          }
        default:
          if (type.$$typeof) {
            switch (String(type.$$typeof)) {
              case FRAGMENT_SYMBOL_STRING:
                return "";
              case MEMO_SYMBOL_STRING:
              case FORWARD_REF_SYMBOL_STRING:
              case LAZY_SYMBOL_STRING:
                return getDisplayName(type);
              case PROVIDER_SYMBOL_STRING: {
                const resolvedContext = type._context || type.context;
                return `${getDisplayName(resolvedContext, "Context")}.Provider`;
              }
              case CONTEXT_SYMBOL_STRING: {
                const resolvedContext = type._context || type.context;
                return `${getDisplayName(resolvedContext, "Context")}.Provider`;
              }
              default:
                return String(type.$$typeof);
            }
          }
      }
    }
    return "Unknown";
  }

  // src/publisher/react-integration/utils/simpleValueSerialization.ts
  var { hasOwnProperty, toString } = Object.prototype;
  function isPlainObject(value) {
    return typeof value === "object" && value !== null && value.constructor === Object;
  }
  function simpleValueSerialization(value) {
    switch (typeof value) {
      case "boolean":
      case "undefined":
      case "number":
      case "bigint":
      case "symbol":
        return String(value);
      case "function":
        return "\u0192n";
      case "string":
        return JSON.stringify(
          value.length > 20 ? value.slice(0, 20) + "\u2026" : value
        );
      case "object":
        if (value === null) {
          return "null";
        }
        if (Array.isArray(value)) {
          return value.length ? "[\u2026]" : "[]";
        }
        if (typeof value.$$typeof === "symbol" && String(value.$$typeof) === "Symbol(react.element)") {
          const name = getDisplayNameFromJsx(value.type);
          return `<${name}${Object.keys(value.props).length > 0 ? " \u2026" : ""}/>`;
        }
        if (isPlainObject(value)) {
          for (const key in value) {
            if (hasOwnProperty.call(value, key)) {
              return "{\u2026}";
            }
          }
          return "{}";
        }
        const tagString = toString.call(value).slice(8, -1);
        if (tagString === "Object") {
          const constructor = Object.getPrototypeOf(value)?.constructor;
          if (typeof constructor === "function") {
            return `${constructor.displayName || constructor.name || ""}{\u2026}`;
          }
        }
        return `${tagString}{\u2026}`;
    }
  }

  // src/publisher/react-integration/utils/isPlainObject.ts
  function isPlainObject2(value) {
    return value !== null && typeof value === "object" && value.constructor === Object && typeof value.$$typeof !== "symbol";
  }

  // src/publisher/react-integration/utils/objectDiff.ts
  var { hasOwnProperty: hasOwnProperty2 } = Object.prototype;
  function objectDiff(prev, next) {
    if (isPlainObject2(prev) && isPlainObject2(next)) {
      const sample = [];
      let keys = 0;
      let diffKeys = 0;
      for (const name in prev) {
        if (hasOwnProperty2.call(prev, name)) {
          keys++;
          if (!hasOwnProperty2.call(next, name)) {
            diffKeys++ < 3 && sample.push({ name, prev: simpleValueSerialization(prev[name]) });
          } else if (!Object.is(prev[name], next[name])) {
            diffKeys++ < 3 && sample.push({
              name,
              prev: simpleValueSerialization(prev[name]),
              next: simpleValueSerialization(next[name])
            });
          }
        }
      }
      for (const name in next) {
        if (hasOwnProperty2.call(next, name)) {
          if (!hasOwnProperty2.call(prev, name)) {
            keys++;
            diffKeys++ < 3 && sample.push({ name, next: simpleValueSerialization(next[name]) });
          }
        }
      }
      return diffKeys > 0 ? { keys, diffKeys, sample } : false;
    }
    return void 0;
  }

  // src/publisher/react-integration/utils/arrayDiff.ts
  function arrayDiff(prev, next) {
    if (Array.isArray(prev) && Array.isArray(next)) {
      let eqLeft = 0;
      let eqRight = 0;
      for (let i = 0; i < prev.length; i++, eqLeft++) {
        if (!Object.is(prev[i], next[i])) {
          break;
        }
      }
      for (let i = prev.length - 1; i > eqLeft; i--, eqRight++) {
        if (!Object.is(prev[i], next[i])) {
          break;
        }
      }
      return prev.length !== next.length || eqLeft !== prev.length ? { prevLength: prev.length, nextLength: next.length, eqLeft, eqRight } : false;
    }
    return void 0;
  }

  // src/publisher/react-integration/utils/stackTrace.ts
  var UNKNOWN_FUNCTION = "<unknown>";
  var hasOwn = Object.hasOwn || ((target, prop) => Object.prototype.hasOwnProperty.call(target, prop));
  function lazyParseArray(array, parse) {
    const cache2 = [];
    return new Proxy(array, {
      get(target, prop) {
        if (typeof prop === "string") {
          const index = Number(prop);
          if (isFinite(index) && hasOwn(array, prop)) {
            if (typeof cache2[index] === "undefined") {
              cache2[index] = parse(array[index]);
            }
            return cache2[index];
          }
        }
        return target[prop];
      }
    });
  }
  function extractCallLoc(depth) {
    const parsed = getParsedStackTrace()[depth + 2];
    if (parsed && parsed.loc) {
      return parsed.loc;
    }
    return null;
  }
  function getParsedStackTrace(skip = 1, limit = 25) {
    const prevPrepareStackTrace = Error.prepareStackTrace;
    const prevStackTraceLimit = Error.stackTraceLimit;
    try {
      Error.stackTraceLimit = limit;
      Error.prepareStackTrace = (_, callSites) => {
        result = lazyParseArray(callSites.slice(skip), parseCallSite);
        return "";
      };
      let result = null;
      const stack = new Error().stack;
      if (result === null && stack) {
        const lines = stack.trim().split("\n");
        result = lazyParseArray(
          lines.slice(lines[0] === "Error" ? skip + 1 : skip),
          parseStackTraceLine
        );
      }
      return result || [];
    } finally {
      Error.stackTraceLimit = prevStackTraceLimit;
      Error.prepareStackTrace = prevPrepareStackTrace;
    }
  }
  function parseCallSite(callSite) {
    const filename = typeof callSite.getScriptNameOrSourceURL === "function" ? callSite.getScriptNameOrSourceURL() : callSite.getFileName();
    let functionName = callSite.getFunctionName();
    if (functionName !== null && functionName.includes(".")) {
      const typeName = callSite.getTypeName();
      const methodName = callSite.getMethodName();
      if (typeName && methodName) {
        functionName = `${typeName}#${methodName}`;
      } else {
        functionName = functionName.replace(/.*?\.([^\.]+(?:\.[^\.]+)?)$/, "$1");
      }
    }
    return {
      loc: filename ? `${filename}:${callSite.getLineNumber()}:${callSite.getColumnNumber()}` : null,
      name: functionName || UNKNOWN_FUNCTION
    };
  }
  function parseStackTraceLine(line) {
    return parseChrome(line) || parseGecko(line) || parseJSC(line);
  }
  var chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)?\)?\s*$/i;
  var chromeRe2 = /^\s*at ()((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)\s*$/i;
  var chromeEvalRe = /\((\S*)\)/;
  function parseChrome(line) {
    const parts = chromeRe.exec(line) || chromeRe2.exec(line);
    if (!parts) {
      return null;
    }
    let loc = parts[2];
    const isNative = loc && loc.indexOf("native") === 0;
    const isEval = loc && loc.indexOf("eval") === 0;
    const submatch = chromeEvalRe.exec(loc);
    if (isEval && submatch != null) {
      loc = submatch[1];
    }
    return {
      loc: !isNative ? parts[2] : null,
      name: parts[1] || UNKNOWN_FUNCTION
    };
  }
  var geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)\s*$/i;
  var geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  function parseGecko(line) {
    const parts = geckoRe.exec(line);
    if (!parts) {
      return null;
    }
    let name = parts[1];
    let loc = parts[3];
    const isEval = loc && loc.indexOf(" > eval") > -1;
    const submatch = geckoEvalRe.exec(loc);
    if (isEval && submatch != null) {
      loc = submatch[1];
    }
    if (name && name.includes("/")) {
      name = name.replace(/^.*\/([^\/]+)$/, "$1").replace(/\.prototype\./, "#");
    }
    return {
      loc: parts[3],
      name: name || UNKNOWN_FUNCTION
    };
  }
  var javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?)\s*$/i;
  function parseJSC(line) {
    const parts = javaScriptCoreRe.exec(line);
    if (!parts) {
      return null;
    }
    return {
      loc: parts[3],
      name: parts[1] || UNKNOWN_FUNCTION
    };
  }

  // src/publisher/react-integration/devtools-hook-handlers.ts
  function valueDiff(prev, next) {
    return Array.isArray(prev) ? arrayDiff(prev, next) : objectDiff(prev, next);
  }
  var PATCHED_UPDATER = Symbol("react-render-tracker-patched-updater");
  function createReactDevtoolsHookHandlers({
    ReactTypeOfWork,
    getFiberTypeId,
    getOrGenerateFiberId,
    getFiberIdThrows,
    getFiberIdUnsafe,
    getFiberOwnerId,
    getFiberById,
    removeFiber,
    getElementTypeForFiber,
    getDisplayNameForFiber,
    setRootPseudoKey,
    didFiberRender,
    removeRootPseudoKey,
    shouldFilterFiber
  }, {
    getDispatchHookIndex,
    getFiberTypeHookInfo,
    flushDispatchCalls
  }, recordEvent) {
    const { HostRoot, SuspenseComponent, OffscreenComponent, ContextProvider } = ReactTypeOfWork;
    const idToOwnerId = /* @__PURE__ */ new Map();
    const commitUpdatedFiberId = /* @__PURE__ */ new Map();
    const commitTriggeredFiberId = /* @__PURE__ */ new Set();
    const commitClassFiberUpdateCalls = /* @__PURE__ */ new Map();
    const commitFiberUpdateCalls = /* @__PURE__ */ new Map();
    const commitContext = /* @__PURE__ */ new Map();
    let currentRootId = -1;
    let currentCommitId = -1;
    let commitIdSeed = 0;
    let classComponentUpdateCalls = [];
    const classComponentInstanceToFiber = /* @__PURE__ */ new WeakMap();
    const recordedTypeDef = /* @__PURE__ */ new Map();
    const unmountedFiberIds = /* @__PURE__ */ new Set();
    const unmountedFiberIdsByOwnerId = /* @__PURE__ */ new Map();
    const unmountedFiberIdBeforeSiblingId = /* @__PURE__ */ new Map();
    const unmountedFiberIdForParentId = /* @__PURE__ */ new Map();
    const unmountedFiberRefs = /* @__PURE__ */ new WeakMap();
    const untrackFibersSet = /* @__PURE__ */ new Set();
    let untrackFibersTimer = null;
    function untrackFiber(fiber) {
      untrackFibersSet.add(fiber);
      if (untrackFibersTimer === null) {
        untrackFibersTimer = setTimeout(untrackFibers, 900);
      }
    }
    function untrackFibers() {
      if (untrackFibersTimer !== null) {
        clearTimeout(untrackFibersTimer);
        untrackFibersTimer = null;
      }
      for (const fiber of untrackFibersSet) {
        removeFiber(fiber, unmountedFiberRefs.get(fiber));
        unmountedFiberRefs.delete(fiber);
      }
      untrackFibersSet.clear();
    }
    function getComponentChange(prevFiber, nextFiber) {
      const type = getElementTypeForFiber(nextFiber);
      if (type === ElementTypeHostComponent) {
        return {
          props: getPropsChanges(
            prevFiber.memoizedProps,
            nextFiber.memoizedProps
          )
        };
      }
      if (type === ElementTypeHostText) {
        if (prevFiber.memoizedProps === nextFiber.memoizedProps) {
          return null;
        }
        return {
          props: getPropsChanges(
            { "#text": prevFiber.memoizedProps },
            { "#text": nextFiber.memoizedProps }
          )
        };
      }
      if (type !== ElementTypeClass && type !== ElementTypeFunction && type !== ElementTypeMemo && type !== ElementTypeForwardRef && type !== ElementTypeProvider && type !== ElementTypeConsumer) {
        return null;
      }
      const isElementTypeClass = prevFiber.stateNode !== null;
      const data = {
        props: getPropsChanges(prevFiber.memoizedProps, nextFiber.memoizedProps),
        ...isElementTypeClass ? {
          context: getClassContextChanges(nextFiber),
          state: getStateChanges(
            prevFiber.memoizedState,
            nextFiber.memoizedState,
            prevFiber
          )
        } : {
          context: getFunctionContextChanges(nextFiber),
          state: getStateHooksChanges(
            prevFiber.memoizedState,
            nextFiber.memoizedState
          ),
          memos: getMemoHookChanges(nextFiber)
        }
      };
      return data;
    }
    function getContextsForClassFiber(fiber) {
      const instance = fiber.stateNode || null;
      if (instance !== null) {
        return instance.constructor?.contextType || null;
      }
      return null;
    }
    function getClassContextChanges(fiber) {
      const context = getContextsForClassFiber(fiber);
      if (context !== null) {
        const valueChangedEventId = commitContext.get(context)?.valueChangedEventId || null;
        if (valueChangedEventId !== null) {
          return [
            {
              context: 0,
              valueChangedEventId
            }
          ];
        }
      }
      return;
    }
    function getContextsForFunctionFiber(fiber) {
      let cursor = fiber.dependencies?.firstContext || fiber.contextDependencies?.first || null;
      if (cursor !== null) {
        const contexts = [];
        while (cursor !== null) {
          contexts.push(cursor.context);
          cursor = cursor.next;
        }
        return contexts;
      }
      return null;
    }
    function getFunctionContextChanges(fiber) {
      const contexts = getContextsForFunctionFiber(fiber);
      if (contexts !== null) {
        const seenContexts = /* @__PURE__ */ new Set();
        const changes = [];
        const typeId = getFiberTypeId(fiber.type, fiber.tag);
        const hookContextIndecies = recordedTypeDef.get(typeId)?.hookContextIndecies;
        for (const context of contexts) {
          const contextIndex = hookContextIndecies?.get(context);
          const valueChangedEventId = commitContext.get(context)?.valueChangedEventId || null;
          if (typeof contextIndex === "number" && valueChangedEventId !== null && !seenContexts.has(contextIndex)) {
            seenContexts.add(contextIndex);
            changes.push({
              context: contextIndex,
              valueChangedEventId
            });
          }
        }
        if (changes.length > 0) {
          return changes;
        }
      }
      return;
    }
    function getStateHooksChanges(prev = null, next = null) {
      if (prev === null || next === null || prev === next) {
        return;
      }
      const changes = [];
      while (next !== null && prev !== null) {
        if (next.queue) {
          const prevValue = prev.memoizedState;
          const nextValue = next.memoizedState;
          if (!Object.is(prevValue, nextValue)) {
            let dispatch = next.queue.dispatch || next.queue.getSnapshot;
            let hookIdx = getDispatchHookIndex(dispatch);
            if (hookIdx === null && next.next && typeof next.next.memoizedState === "function") {
              next = next.next;
              prev = prev.next;
              dispatch = next.memoizedState;
              hookIdx = getDispatchHookIndex(dispatch);
            }
            const dispatchCalls = commitFiberUpdateCalls.get(dispatch);
            changes.push({
              hook: hookIdx,
              prev: simpleValueSerialization(prevValue),
              next: simpleValueSerialization(nextValue),
              diff: valueDiff(prevValue, nextValue),
              calls: dispatchCalls?.map((entry) => ({
                name: entry.dispatchName,
                loc: entry.loc
              }))
            });
          }
        }
        next = next.next;
        prev = prev.next;
      }
      return changes.length > 0 ? changes : void 0;
    }
    function getPropsChanges(prev, next) {
      if (prev == null || next == null || prev === next) {
        return void 0;
      }
      const keys = /* @__PURE__ */ new Set([...Object.keys(prev), ...Object.keys(next)]);
      const changedProps = [];
      for (const key of keys) {
        if (!Object.is(prev[key], next[key])) {
          changedProps.push({
            name: key,
            prev: simpleValueSerialization(prev[key]),
            next: simpleValueSerialization(next[key]),
            diff: valueDiff(prev[key], next[key])
          });
        }
      }
      return changedProps;
    }
    function getStateChanges(prev, next, fiber) {
      if (prev == null || next == null || Object.is(prev, next)) {
        return void 0;
      }
      const fiberId = getFiberIdUnsafe(fiber);
      const calls = fiberId !== null ? commitClassFiberUpdateCalls.get(fiberId) : null;
      const setStateCall = calls?.find((call) => call.type === "setState");
      const changes = {
        hook: null,
        prev: simpleValueSerialization(prev),
        next: simpleValueSerialization(next),
        diff: valueDiff(prev, next),
        calls: setStateCall ? [
          {
            name: "setState",
            loc: setStateCall.loc
          }
        ] : null
      };
      return [changes];
    }
    function getMemoHookChanges(fiber) {
      const hookMemoIndecies = recordedTypeDef.get(getFiberTypeId(fiber.type, fiber.tag))?.hookMemoIndecies || [];
      const changes = [];
      let nextState = fiber.memoizedState || null;
      let prevState = fiber.alternate?.memoizedState || null;
      let stateIndex = 0;
      while (nextState !== null && prevState !== null) {
        if (nextState.queue === null && Array.isArray(nextState.memoizedState)) {
          const [prevValue, prevDeps] = prevState.memoizedState;
          const [nextValue, nextDeps] = nextState.memoizedState;
          const memoHookIndex = hookMemoIndecies[stateIndex++];
          const changedDeps = [];
          if (prevDeps !== nextDeps) {
            if (prevDeps !== null && nextDeps !== null) {
              for (let i = 0; i < prevDeps.length; i++) {
                if (!Object.is(prevDeps[i], nextDeps[i])) {
                  changedDeps.push({
                    index: i,
                    prev: simpleValueSerialization(prevDeps[i]),
                    next: simpleValueSerialization(nextDeps[i]),
                    diff: valueDiff(prevDeps[i], nextDeps[i])
                  });
                }
              }
            }
            changes.push({
              hook: memoHookIndex,
              prev: simpleValueSerialization(prevValue),
              next: simpleValueSerialization(nextValue),
              diff: valueDiff(prevValue, nextValue),
              deps: changedDeps
            });
          }
        }
        nextState = nextState.next || null;
        prevState = prevState.next || null;
      }
      return changes.length > 0 ? changes : void 0;
    }
    function getFiberContexts(fiber, fiberType, fiberHooks) {
      if (fiber.stateNode !== null) {
        const context = getContextsForClassFiber(fiber);
        if (context === null) {
          return null;
        }
        return [
          {
            name: getDisplayName(context, "Context"),
            providerId: commitContext.get(context)?.providerId
          }
        ];
      }
      if (fiberType === ElementTypeConsumer) {
        const context = fiber.type._context || fiber.type.context || fiber.type;
        return [
          {
            name: getDisplayName(context, "Context"),
            providerId: commitContext.get(context)?.providerId
          }
        ];
      }
      const hookContexts = fiberHooks.reduce(
        (contexts, hook2) => hook2.context != null ? contexts.add(hook2.context) : contexts,
        /* @__PURE__ */ new Set()
      );
      if (hookContexts.size) {
        return [...hookContexts].map((context) => ({
          name: getDisplayName(context, "Context"),
          providerId: commitContext.get(context)?.providerId
        }));
      }
      return null;
    }
    function recordFiberTypeDefIfNeeded(fiber, typeId, fiberType) {
      if (recordedTypeDef.has(typeId)) {
        return;
      }
      const hooks = getFiberTypeHookInfo(typeId);
      const contexts = getFiberContexts(fiber, fiberType, hooks);
      const hookContextIndecies = /* @__PURE__ */ new Map();
      const hookMemoIndecies = [];
      const transferHooks = [];
      for (const hook2 of hooks) {
        let hookContext = null;
        if (hook2.context) {
          hookContext = hookContextIndecies.get(hook2.context);
          if (hookContext === void 0) {
            hookContextIndecies.set(
              hook2.context,
              hookContext = hookContextIndecies.size
            );
          }
        }
        if (hook2.name === "useMemo" || hook2.name === "useCallback") {
          hookMemoIndecies.push(transferHooks.length);
        }
        transferHooks.push({
          ...hook2,
          context: hookContext
        });
      }
      if (fiberType === ElementTypeClass) {
        const { updater } = fiber.stateNode;
        if (updater.enqueueForceUpdate.patched !== PATCHED_UPDATER) {
          const { enqueueForceUpdate, enqueueSetState } = updater;
          Object.defineProperties(updater, {
            enqueueForceUpdate: {
              value: Object.assign(
                function(inst, callback) {
                  const classComponentInstance = classComponentInstanceToFiber.get(inst);
                  if (classComponentInstance !== void 0) {
                    const { fiberId, rootId } = classComponentInstance;
                    classComponentUpdateCalls.push({
                      type: "forceUpdate",
                      fiberId,
                      rootId,
                      loc: extractCallLoc(2)
                    });
                  }
                  return enqueueForceUpdate(inst, callback);
                },
                { patched: PATCHED_UPDATER }
              )
            },
            enqueueSetState: {
              value(inst, payload, callback) {
                const classComponentInstance = classComponentInstanceToFiber.get(inst);
                if (classComponentInstance !== void 0) {
                  const { fiberId, rootId } = classComponentInstance;
                  classComponentUpdateCalls.push({
                    type: "setState",
                    fiberId,
                    rootId,
                    loc: extractCallLoc(1)
                  });
                }
                return enqueueSetState(inst, payload, callback);
              }
            }
          });
        }
      }
      recordedTypeDef.set(typeId, {
        hookContextIndecies,
        hookMemoIndecies,
        hooks: transferHooks
      });
      recordEvent({
        op: "fiber-type-def",
        commitId: currentCommitId,
        typeId,
        definition: {
          contexts,
          hooks: transferHooks
        }
      });
    }
    function locFromDebugSource({
      fileName,
      lineNumber,
      columnNumber
    }) {
      return typeof fileName === "string" && typeof lineNumber === "number" && lineNumber > 0 ? `${fileName}:${lineNumber}${typeof columnNumber === "number" && columnNumber > 0 ? ":" + columnNumber : ""}` : null;
    }
    function recordMount(fiber, parentFiber) {
      const isRoot = fiber.tag === HostRoot;
      const fiberId = getOrGenerateFiberId(fiber);
      let props = [];
      let transferFiber;
      let triggerEventId;
      if (isRoot) {
        transferFiber = {
          id: fiberId,
          type: ElementTypeHostRoot,
          typeId: 0,
          rootMode: fiber.stateNode.tag || 0,
          key: fiber.stateNode.containerInfo.id || null,
          ownerId: 0,
          parentId: 0,
          displayName: null,
          hocDisplayNames: null,
          loc: null
        };
      } else {
        const { key, type, tag } = fiber;
        const elementType = getElementTypeForFiber(fiber);
        const parentId = parentFiber ? getFiberIdThrows(parentFiber) : 0;
        const ownerIdCandidate = getFiberOwnerId(fiber);
        const ownerId = ownerIdCandidate !== -1 ? ownerIdCandidate : currentRootId;
        const { displayName, hocDisplayNames } = separateDisplayNameAndHOCs(
          getDisplayNameForFiber(fiber),
          elementType
        );
        triggerEventId = commitUpdatedFiberId.get(ownerId);
        transferFiber = {
          id: fiberId,
          type: elementType,
          typeId: getFiberTypeId(type, tag),
          key: key === null ? null : String(key),
          ownerId,
          parentId,
          displayName,
          hocDisplayNames,
          loc: fiber._debugSource ? locFromDebugSource(fiber._debugSource) : null
        };
        props = Object.keys(
          elementType !== ElementTypeHostText ? fiber.memoizedProps : { "#text": fiber.memoizedProps }
        );
      }
      recordFiberTypeDefIfNeeded(fiber, transferFiber.typeId, transferFiber.type);
      const { selfTime, totalTime } = getDurations(fiber);
      const eventId = recordEvent({
        op: "mount",
        commitId: currentCommitId,
        fiberId,
        fiber: transferFiber,
        props,
        selfTime,
        totalTime,
        trigger: triggerEventId
      });
      idToOwnerId.set(fiberId, transferFiber.ownerId);
      commitUpdatedFiberId.set(fiberId, triggerEventId ?? eventId);
      if (transferFiber.type === ElementTypeClass) {
        classComponentInstanceToFiber.set(fiber.stateNode, {
          rootId: currentRootId,
          fiberId
        });
      }
    }
    function recordUnmount(fiberId) {
      const ownerId = idToOwnerId.get(fiberId);
      const triggerEventId = commitUpdatedFiberId.get(ownerId);
      const fiber = getFiberById(fiberId);
      if (fiber !== null) {
        untrackFiber(fiber);
        if (fiber.stateNode || fiber.alternate) {
          unmountedFiberRefs.set(fiber, {
            stateNode: fiber.stateNode,
            alternate: fiber.alternate,
            memoizedState: fiber.memoizedState
          });
        }
      }
      const eventId = recordEvent({
        op: "unmount",
        commitId: currentCommitId,
        fiberId,
        trigger: triggerEventId
      });
      commitUpdatedFiberId.set(fiberId, triggerEventId ?? eventId);
      idToOwnerId.delete(fiberId);
    }
    function recordSubtreeUnmount(fiberId) {
      unmountedFiberIds.delete(fiberId);
      recordUnmount(fiberId);
      const ownerUnmountedFiberIds = unmountedFiberIdsByOwnerId.get(fiberId);
      if (ownerUnmountedFiberIds !== void 0) {
        unmountedFiberIdsByOwnerId.delete(fiberId);
        for (const fiberId2 of ownerUnmountedFiberIds) {
          recordSubtreeUnmount(fiberId2);
        }
      }
    }
    function recordPreviousSiblingUnmount(fiberId) {
      const siblingUnmountId = unmountedFiberIdBeforeSiblingId.get(fiberId);
      if (siblingUnmountId !== void 0) {
        recordPreviousSiblingUnmount(siblingUnmountId);
        recordSubtreeUnmount(siblingUnmountId);
      }
    }
    function recordLastChildUnmounts(fiberId) {
      const lastChildUnmountId = unmountedFiberIdForParentId.get(fiberId);
      if (lastChildUnmountId !== void 0) {
        recordPreviousSiblingUnmount(lastChildUnmountId);
        recordSubtreeUnmount(lastChildUnmountId);
      }
    }
    function unmountFiber(fiber) {
      const id = getFiberIdUnsafe(fiber);
      if (id === null) {
        return;
      }
      const isRoot = fiber.tag === HostRoot;
      if (isRoot || !shouldFilterFiber(fiber)) {
        if (currentCommitId !== -1) {
          recordSubtreeUnmount(id);
        } else {
          const ownerId = idToOwnerId.get(id) || 0;
          const siblingId = fiber.sibling ? getFiberIdUnsafe(fiber.sibling) : null;
          if (siblingId !== null) {
            unmountedFiberIdBeforeSiblingId.set(siblingId, id);
          } else {
            const parentId = fiber.return ? getFiberIdUnsafe(fiber.return) : null;
            if (parentId !== null) {
              unmountedFiberIdForParentId.set(parentId, id);
            }
          }
          if (unmountedFiberIdsByOwnerId.has(ownerId)) {
            unmountedFiberIdsByOwnerId.get(ownerId)?.add(id);
          } else {
            unmountedFiberIdsByOwnerId.set(ownerId, /* @__PURE__ */ new Set([id]));
          }
          unmountedFiberIds.add(id);
          if (fiber.stateNode || fiber.alternate) {
            unmountedFiberRefs.set(fiber, {
              stateNode: fiber.stateNode,
              alternate: fiber.alternate,
              memoizedState: fiber.memoizedState
            });
          }
        }
      } else {
        removeFiber(fiber);
        unmountedFiberRefs.delete(fiber);
      }
      if (!fiber._debugNeedsRemount) {
      }
    }
    function mountFiberRecursively(firstChild, parentFiber, traverseSiblings) {
      let fiber = firstChild;
      while (fiber !== null) {
        const shouldIncludeInTree = !shouldFilterFiber(fiber);
        const isSuspense = fiber.tag === SuspenseComponent;
        const isProvider = fiber.tag === ContextProvider;
        const context = isProvider ? fiber.type._context || fiber.type.context : null;
        let prevCommitContextValue;
        const fiberId = getOrGenerateFiberId(fiber);
        if (context !== null) {
          prevCommitContextValue = commitContext.get(context);
          commitContext.set(context, {
            providerId: fiberId,
            valueChangedEventId: null
          });
        }
        if (shouldIncludeInTree) {
          recordMount(fiber, parentFiber);
        }
        if (isSuspense) {
          const isTimedOut = fiber.memoizedState !== null;
          if (isTimedOut) {
            const primaryChildFragment = fiber.child;
            const fallbackChildFragment = primaryChildFragment?.sibling;
            const fallbackChild = fallbackChildFragment?.child || null;
            if (fallbackChild !== null) {
              mountFiberRecursively(
                fallbackChild,
                shouldIncludeInTree ? fiber : parentFiber,
                true
              );
            }
          } else {
            let primaryChild = null;
            const areSuspenseChildrenConditionallyWrapped = OffscreenComponent === -1;
            if (areSuspenseChildrenConditionallyWrapped) {
              primaryChild = fiber.child;
            } else if (fiber.child !== null) {
              primaryChild = fiber.child.child;
            }
            if (primaryChild !== null) {
              mountFiberRecursively(
                primaryChild,
                shouldIncludeInTree ? fiber : parentFiber,
                true
              );
            }
          }
        } else {
          if (fiber.child !== null) {
            mountFiberRecursively(
              fiber.child,
              shouldIncludeInTree ? fiber : parentFiber,
              true
            );
          }
        }
        if (context !== null) {
          commitContext.set(context, prevCommitContextValue);
        }
        fiber = traverseSiblings ? fiber.sibling : null;
      }
    }
    function unmountFiberChildrenRecursively(fiber) {
      const isTimedOutSuspense = fiber.tag === SuspenseComponent && fiber.memoizedState !== null;
      let child = fiber.child;
      if (isTimedOutSuspense) {
        const primaryChildFragment = fiber.child;
        const fallbackChildFragment = primaryChildFragment?.sibling || null;
        child = fallbackChildFragment?.child || null;
      }
      while (child !== null) {
        if (child.return !== null) {
          unmountFiber(child);
          unmountFiberChildrenRecursively(child);
        }
        child = child.sibling;
      }
    }
    function getDurations(fiber) {
      const totalTime = fiber.actualDuration ?? 0;
      let selfTime = totalTime;
      let child = fiber.child;
      while (totalTime > 0 && child !== null) {
        selfTime -= child.actualDuration || 0;
        child = child.sibling;
      }
      return { totalTime, selfTime };
    }
    function recordUpdate(fiber) {
      const { alternate = null } = fiber;
      if (alternate === null) {
        return;
      }
      const fiberId = getFiberIdThrows(fiber);
      const ownerId = getFiberOwnerId(fiber);
      const triggerEventId = fiber.memoizedProps !== alternate.memoizedProps ? commitUpdatedFiberId.get(ownerId) : void 0;
      if (didFiberRender(alternate, fiber)) {
        const { selfTime, totalTime } = getDurations(fiber);
        const changes = getComponentChange(alternate, fiber);
        const classUpdateCalls = commitClassFiberUpdateCalls.get(fiberId);
        const specialReasons = [];
        if (classUpdateCalls !== void 0) {
          for (const call of classUpdateCalls) {
            if (call.type === "forceUpdate") {
              specialReasons.push({ name: "forceUpdate", loc: call.loc });
            }
          }
        }
        if (changes === null && commitUpdatedFiberId.has(ownerId)) {
          specialReasons.push({ name: "ownerUpdate", loc: null });
        }
        const eventId = recordEvent({
          op: "update",
          commitId: currentCommitId,
          fiberId,
          selfTime,
          totalTime,
          changes,
          specialReasons: specialReasons.length ? specialReasons : null,
          trigger: triggerEventId
        });
        commitUpdatedFiberId.set(fiberId, triggerEventId || eventId);
        if (changes !== null && getElementTypeForFiber(fiber) === ElementTypeProvider) {
          const valueChange = changes.props?.find((prop) => prop.name === "value");
          if (valueChange !== void 0) {
            const contextInfo = commitContext.get(
              fiber.type._context || fiber.type.context
            );
            if (contextInfo !== void 0) {
              contextInfo.valueChangedEventId = eventId;
            }
          }
        }
      } else if (fiber.stateNode && fiber.updateQueue !== alternate.updateQueue) {
        recordEvent({
          op: "update-bailout-scu",
          commitId: currentCommitId,
          fiberId,
          changes: {
            props: getPropsChanges(fiber.memoizedProps, alternate.memoizedProps),
            state: getStateChanges(
              fiber.memoizedState,
              alternate.memoizedState,
              fiber
            )
          },
          trigger: triggerEventId
        });
      } else if (commitTriggeredFiberId.has(fiberId)) {
        recordEvent({
          op: "update-bailout-state",
          commitId: currentCommitId,
          fiberId,
          trigger: triggerEventId
        });
      } else if (commitUpdatedFiberId.has(ownerId) && getElementTypeForFiber(fiber) === ElementTypeMemo) {
        recordEvent({
          op: "update-bailout-memo",
          commitId: currentCommitId,
          fiberId,
          trigger: triggerEventId
        });
      }
    }
    function updateFiberRecursively(nextFiber, prevFiber, parentFiber) {
      const fiberId = getOrGenerateFiberId(nextFiber);
      const shouldIncludeInTree = !shouldFilterFiber(nextFiber);
      const isSuspense = nextFiber.tag === SuspenseComponent;
      const isProvider = nextFiber.tag === ContextProvider;
      const context = isProvider ? nextFiber.type._context || nextFiber.type.context : null;
      let prevCommitContextValue;
      recordPreviousSiblingUnmount(fiberId);
      if (context !== null) {
        prevCommitContextValue = commitContext.get(context);
        commitContext.set(context, {
          providerId: fiberId,
          valueChangedEventId: null
        });
      }
      if (shouldIncludeInTree) {
        recordUpdate(nextFiber);
      }
      const prevDidTimeout = isSuspense && prevFiber.memoizedState !== null;
      const nextDidTimeOut = isSuspense && nextFiber.memoizedState !== null;
      if (prevDidTimeout && nextDidTimeOut) {
        const nextFallbackChildSet = nextFiber.child?.sibling || null;
        const prevFallbackChildSet = prevFiber.child?.sibling || null;
        if (nextFallbackChildSet !== null && prevFallbackChildSet !== null) {
          updateFiberRecursively(
            nextFallbackChildSet,
            prevFallbackChildSet,
            nextFiber
          );
        }
      } else if (prevDidTimeout && !nextDidTimeOut) {
        const nextPrimaryChildSet = nextFiber.child;
        if (nextPrimaryChildSet !== null) {
          mountFiberRecursively(
            nextPrimaryChildSet,
            shouldIncludeInTree ? nextFiber : parentFiber,
            true
          );
        }
      } else if (!prevDidTimeout && nextDidTimeOut) {
        unmountFiberChildrenRecursively(prevFiber);
        const nextFallbackChildSet = nextFiber.child?.sibling || null;
        if (nextFallbackChildSet !== null) {
          mountFiberRecursively(
            nextFallbackChildSet,
            shouldIncludeInTree ? nextFiber : parentFiber,
            true
          );
        }
      } else {
        if (nextFiber.child !== prevFiber.child) {
          let nextChild = nextFiber.child;
          while (nextChild) {
            if (nextChild.alternate) {
              const prevChild = nextChild.alternate;
              updateFiberRecursively(
                nextChild,
                prevChild,
                shouldIncludeInTree ? nextFiber : parentFiber
              );
            } else {
              mountFiberRecursively(
                nextChild,
                shouldIncludeInTree ? nextFiber : parentFiber,
                false
              );
            }
            nextChild = nextChild.sibling;
          }
        }
      }
      if (context !== null) {
        commitContext.set(context, prevCommitContextValue);
      }
      recordLastChildUnmounts(fiberId);
    }
    function recordCommitStart(root, initialMount) {
      const dispatchCalls = flushDispatchCalls(root);
      const triggers = [];
      if (initialMount) {
        triggers.push({
          type: "initial-mount",
          kind: "mount",
          fiberId: currentRootId,
          loc: null
        });
      }
      for (const call of dispatchCalls) {
        const fiberId = getOrGenerateFiberId(call.fiber);
        let fiberDispatchCalls = commitFiberUpdateCalls.get(call.dispatch);
        if (fiberDispatchCalls === void 0) {
          commitFiberUpdateCalls.set(call.dispatch, fiberDispatchCalls = []);
        }
        fiberDispatchCalls.push(call);
        commitTriggeredFiberId.add(fiberId);
        if (call.effectFiber) {
          triggers.push({
            type: call.effectName || "unknown",
            kind: call.dispatchName === "setState" ? "useState" : "useReducer",
            fiberId,
            relatedFiberId: getOrGenerateFiberId(call.effectFiber),
            loc: call.loc
          });
        } else if (call.event) {
          triggers.push({
            type: "event",
            kind: call.dispatchName === "setState" ? "useState" : "useReducer",
            fiberId,
            event: call.event,
            loc: call.loc
          });
        } else if (!call.renderFiber) {
          triggers.push({
            type: "unknown",
            kind: call.dispatchName === "setState" ? "useState" : "useReducer",
            fiberId,
            loc: call.loc
          });
        }
      }
      classComponentUpdateCalls = classComponentUpdateCalls.filter((call) => {
        const fiberId = call.fiberId;
        if (fiberId && call.rootId === currentRootId) {
          let fiberDispatchCalls = commitClassFiberUpdateCalls.get(fiberId);
          if (fiberDispatchCalls === void 0) {
            commitClassFiberUpdateCalls.set(fiberId, fiberDispatchCalls = []);
          }
          fiberDispatchCalls.push(call);
          commitTriggeredFiberId.add(fiberId);
          triggers.push({
            type: "unknown",
            kind: call.type,
            fiberId,
            loc: call.loc
          });
          return false;
        }
        return true;
      });
      recordEvent({
        op: "commit-start",
        commitId: currentCommitId,
        triggers
      });
    }
    function handleCommitFiberUnmount(fiber) {
      unmountFiber(fiber);
    }
    function handlePostCommitFiberRoot() {
    }
    function handleCommitFiberRoot(root) {
      const { current } = root;
      const { alternate } = current;
      untrackFibers();
      currentCommitId = commitIdSeed++;
      currentRootId = getOrGenerateFiberId(current);
      const wasMounted = alternate !== null && Boolean(alternate.memoizedState?.element);
      const isMounted = Boolean(current.memoizedState?.element);
      recordCommitStart(root, !wasMounted && isMounted);
      if (!wasMounted && isMounted) {
        setRootPseudoKey(currentRootId, current);
        mountFiberRecursively(current, null, false);
      } else if (wasMounted && isMounted) {
        updateFiberRecursively(current, alternate, null);
      } else if (wasMounted && !isMounted) {
        removeRootPseudoKey(currentRootId);
        unmountFiber(current);
      }
      for (const fiberId of unmountedFiberIds) {
        recordUnmount(fiberId);
      }
      currentCommitId = -1;
      commitTriggeredFiberId.clear();
      commitUpdatedFiberId.clear();
      commitFiberUpdateCalls.clear();
      commitContext.clear();
      unmountedFiberIds.clear();
      unmountedFiberIdsByOwnerId.clear();
      unmountedFiberIdBeforeSiblingId.clear();
      unmountedFiberIdForParentId.clear();
    }
    return {
      handleCommitFiberRoot,
      handlePostCommitFiberRoot,
      handleCommitFiberUnmount
    };
  }

  // src/publisher/react-integration/interaction-api.ts
  function createReactInteractionApi({
    ReactTypeOfWork,
    getFiberIdThrows,
    getFiberById,
    getElementTypeForFiber,
    getDisplayNameForFiber,
    getRootPseudoKey,
    shouldFilterFiber,
    findFiberByHostInstance
  }) {
    const { HostRoot, HostComponent, HostText, SuspenseComponent } = ReactTypeOfWork;
    function findAllCurrentHostFibers(id) {
      const fibers = [];
      const fiber = getFiberById(id);
      if (!fiber) {
        return fibers;
      }
      let node = fiber;
      while (true) {
        if (node.tag === HostComponent || node.tag === HostText) {
          fibers.push(node);
        } else if (node.child) {
          node.child.return = node;
          node = node.child;
          continue;
        }
        if (node === fiber) {
          return fibers;
        }
        while (!node.sibling) {
          if (!node.return || node.return === fiber) {
            return fibers;
          }
          node = node.return;
        }
        node.sibling.return = node.return;
        node = node.sibling;
      }
    }
    function findNativeNodesForFiberId(id) {
      try {
        let fiber = getFiberById(id);
        if (fiber === null) {
          return null;
        }
        const isTimedOutSuspense = fiber.tag === SuspenseComponent && fiber.memoizedState !== null;
        if (isTimedOutSuspense) {
          const maybeFallbackFiber = fiber.child && fiber.child.sibling;
          if (maybeFallbackFiber != null) {
            fiber = maybeFallbackFiber;
          }
        }
        const hostFibers = findAllCurrentHostFibers(id);
        return hostFibers.map((hostFiber) => hostFiber.stateNode).filter(Boolean);
      } catch (err) {
        return null;
      }
    }
    function getDisplayNameForFiberId(id) {
      const fiber = getFiberById(id);
      return fiber !== null ? getDisplayNameForFiber(fiber) : null;
    }
    function getFiberIDForNative(hostInstance, findNearestUnfilteredAncestor = false) {
      let fiber = findFiberByHostInstance(hostInstance);
      if (fiber === null) {
        return null;
      }
      if (findNearestUnfilteredAncestor) {
        while (fiber !== null && shouldFilterFiber(fiber)) {
          fiber = fiber.return;
        }
      }
      return fiber && getFiberIdThrows(fiber);
    }
    function fiberToSerializedElement(fiber) {
      return {
        displayName: getDisplayNameForFiber(fiber) || "Anonymous",
        id: getFiberIdThrows(fiber),
        key: fiber.key,
        type: getElementTypeForFiber(fiber)
      };
    }
    function getOwnersList(id) {
      const fiber = getFiberById(id);
      if (fiber === null) {
        return null;
      }
      const { _debugOwner = null } = fiber;
      const owners = [fiberToSerializedElement(fiber)];
      if (_debugOwner) {
        let owner = _debugOwner;
        while (owner !== null) {
          owners.unshift(fiberToSerializedElement(owner));
          owner = owner._debugOwner || null;
        }
      }
      return owners;
    }
    function getPathFrame(fiber) {
      const { key } = fiber;
      const index = fiber.index;
      let displayName = getDisplayNameForFiber(fiber);
      switch (fiber.tag) {
        case HostRoot:
          const id = getFiberIdThrows(fiber);
          const pseudoKey = getRootPseudoKey(id);
          if (pseudoKey === null) {
            throw new Error("Expected mounted root to have known pseudo key.");
          }
          displayName = pseudoKey;
          break;
        case HostComponent:
          displayName = fiber.type;
          break;
      }
      return {
        displayName,
        key,
        index
      };
    }
    function getPathForElement(id) {
      let fiber = getFiberById(id);
      if (fiber === null) {
        return null;
      }
      const keyPath = [];
      while (fiber !== null) {
        keyPath.push(getPathFrame(fiber));
        fiber = fiber.return;
      }
      return keyPath.reverse();
    }
    return {
      findNativeNodesForFiberId,
      getDisplayNameForFiberId,
      getFiberIdForNative: getFiberIDForNative,
      getOwnersList,
      getPathForElement
    };
  }

  // src/publisher/overlay.ts
  var assign = Object.assign;
  var OverlayRect = class {
    constructor(doc, container) {
      this.node = doc.createElement("div");
      this.border = doc.createElement("div");
      this.padding = doc.createElement("div");
      this.content = doc.createElement("div");
      this.border.style.borderColor = overlayStyles.border;
      this.padding.style.borderColor = overlayStyles.padding;
      this.content.style.backgroundColor = overlayStyles.background;
      assign(this.node.style, {
        borderColor: overlayStyles.margin,
        pointerEvents: "none",
        position: "fixed"
      });
      this.node.style.zIndex = "99999";
      this.node.appendChild(this.border);
      this.border.appendChild(this.padding);
      this.padding.appendChild(this.content);
      container.appendChild(this.node);
    }
    remove() {
      this.node.remove();
    }
    update(box, dims) {
      boxWrap(dims, "margin", this.node);
      boxWrap(dims, "border", this.border);
      boxWrap(dims, "padding", this.padding);
      assign(this.content.style, {
        height: `${box.height - dims.borderTop - dims.borderBottom - dims.paddingTop - dims.paddingBottom}px`,
        width: `${box.width - dims.borderLeft - dims.borderRight - dims.paddingLeft - dims.paddingRight}px`
      });
      assign(this.node.style, {
        top: box.top - dims.marginTop + "px",
        left: box.left - dims.marginLeft + "px"
      });
    }
  };
  var OverlayTip = class {
    constructor(doc, container) {
      this.el = doc.createElement("div");
      assign(this.el.style, {
        display: "flex",
        flexFlow: "row nowrap",
        backgroundColor: "#333740",
        borderRadius: "2px",
        fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
        fontWeight: "bold",
        padding: "3px 5px",
        pointerEvents: "none",
        position: "fixed",
        fontSize: "12px",
        whiteSpace: "nowrap"
      });
      this.nameEl = doc.createElement("span");
      this.el.appendChild(this.nameEl);
      assign(this.nameEl.style, {
        color: "#ee78e6",
        borderRight: "1px solid #aaaaaa",
        paddingRight: "0.5rem",
        marginRight: "0.5rem"
      });
      this.dimEl = doc.createElement("span");
      this.el.appendChild(this.dimEl);
      assign(this.dimEl.style, {
        color: "#d7d7d7"
      });
      this.el.style.zIndex = "99999";
      container.appendChild(this.el);
    }
    remove() {
      this.el.remove();
    }
    updateText(name, width, height) {
      this.nameEl.textContent = name;
      this.dimEl.textContent = Math.round(width) + "px \xD7 " + Math.round(height) + "px";
    }
    updatePosition(dims, bounds) {
      const tipRect = this.el.getBoundingClientRect();
      const tipPos = findTipPos(dims, bounds, {
        width: tipRect.width,
        height: tipRect.height
      });
      assign(this.el.style, tipPos.style);
    }
  };
  var Overlay = class {
    constructor() {
      const currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
      this.window = currentWindow;
      const tipBoundsWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
      this.tipBoundsWindow = tipBoundsWindow;
      const doc = currentWindow.document;
      this.container = doc.createElement("div");
      this.container.style.zIndex = "99999";
      this.tip = new OverlayTip(doc, this.container);
      this.rects = [];
    }
    remove() {
      this.tip.remove();
      this.rects.forEach((rect) => {
        rect.remove();
      });
      this.rects.length = 0;
      this.container.remove();
    }
    inspect(nodes, name, ownerName) {
      const elements = nodes.filter((node) => node.nodeType === Node.ELEMENT_NODE);
      while (this.rects.length > elements.length) {
        this.rects.pop()?.remove();
      }
      if (elements.length === 0) {
        return;
      }
      while (this.rects.length < elements.length) {
        this.rects.push(new OverlayRect(this.window.document, this.container));
      }
      const outerBox = {
        top: Number.POSITIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        left: Number.POSITIVE_INFINITY
      };
      elements.forEach((element, index) => {
        const box = getNestedBoundingClientRect(element, this.window);
        const dims = getElementDimensions(element);
        outerBox.top = Math.min(outerBox.top, box.top - dims.marginTop);
        outerBox.right = Math.max(
          outerBox.right,
          box.left + box.width + dims.marginRight
        );
        outerBox.bottom = Math.max(
          outerBox.bottom,
          box.top + box.height + dims.marginBottom
        );
        outerBox.left = Math.min(outerBox.left, box.left - dims.marginLeft);
        this.rects[index].update(box, dims);
      });
      if (!name) {
        name = elements[0].nodeName.toLowerCase();
        if (ownerName) {
          name += " (in " + ownerName + ")";
        }
      }
      this.tip.updateText(
        name,
        outerBox.right - outerBox.left,
        outerBox.bottom - outerBox.top
      );
      const tipBounds = getNestedBoundingClientRect(
        this.tipBoundsWindow.document.documentElement,
        this.window
      );
      this.tip.updatePosition(
        {
          top: outerBox.top,
          left: outerBox.left,
          height: outerBox.bottom - outerBox.top,
          width: outerBox.right - outerBox.left
        },
        {
          top: tipBounds.top + this.tipBoundsWindow.scrollY,
          left: tipBounds.left + this.tipBoundsWindow.scrollX,
          height: this.tipBoundsWindow.innerHeight,
          width: this.tipBoundsWindow.innerWidth
        }
      );
      this.container.appendChild(this.tip.el);
      this.window.document.body.appendChild(this.container);
    }
  };
  function boxWrap(dims, what, node) {
    assign(node.style, {
      borderTopWidth: `${dims[`${what}Top`]}px`,
      borderLeftWidth: `${dims[`${what}Left`]}px`,
      borderRightWidth: `${dims[`${what}Right`]}px`,
      borderBottomWidth: `${dims[`${what}Bottom`]}px`,
      borderStyle: "solid"
    });
  }
  var overlayStyles = {
    background: "rgba(120, 170, 210, 0.7)",
    padding: "rgba(77, 200, 0, 0.3)",
    margin: "rgba(255, 155, 0, 0.3)",
    border: "rgba(255, 200, 50, 0.3)"
  };
  function findTipPos(dims, bounds, tipSize) {
    const tipHeight = Math.max(tipSize.height, 20);
    const tipWidth = Math.max(tipSize.width, 60);
    const margin = 5;
    let top;
    if (dims.top + dims.height + tipHeight <= bounds.top + bounds.height) {
      if (dims.top + dims.height < bounds.top + 0) {
        top = bounds.top + margin;
      } else {
        top = dims.top + dims.height + margin;
      }
    } else if (dims.top - tipHeight <= bounds.top + bounds.height) {
      if (dims.top - tipHeight - margin < bounds.top + margin) {
        top = bounds.top + margin;
      } else {
        top = dims.top - tipHeight - margin;
      }
    } else {
      top = bounds.top + bounds.height - tipHeight - margin;
    }
    let left = dims.left + margin;
    if (dims.left < bounds.left) {
      left = bounds.left + margin;
    }
    if (dims.left + tipWidth > bounds.left + bounds.width) {
      left = bounds.left + bounds.width - tipWidth - margin;
    }
    return {
      style: { top: top + "px", left: left + "px" }
    };
  }
  function getOwnerWindow(node) {
    return node.ownerDocument?.defaultView || null;
  }
  function getOwnerIframe(node) {
    return getOwnerWindow(node)?.frameElement || null;
  }
  function getBoundingClientRectWithBorderOffset(node) {
    const dimensions = getElementDimensions(node);
    return mergeRectOffsets([
      node.getBoundingClientRect(),
      {
        top: dimensions.borderTop,
        left: dimensions.borderLeft,
        bottom: dimensions.borderBottom,
        right: dimensions.borderRight,
        width: 0,
        height: 0
      }
    ]);
  }
  function mergeRectOffsets(rects) {
    return rects.reduce((previousRect, rect) => {
      if (previousRect == null) {
        return rect;
      }
      return {
        top: previousRect.top + rect.top,
        left: previousRect.left + rect.left,
        width: previousRect.width,
        height: previousRect.height,
        bottom: previousRect.bottom + rect.bottom,
        right: previousRect.right + rect.right
      };
    });
  }
  function getNestedBoundingClientRect(node, boundaryWindow) {
    const ownerIframe = getOwnerIframe(node);
    if (ownerIframe) {
      const rects = [node.getBoundingClientRect()];
      let currentIframe = ownerIframe;
      let onlyOneMore = false;
      while (currentIframe) {
        const rect = getBoundingClientRectWithBorderOffset(currentIframe);
        rects.push(rect);
        currentIframe = getOwnerIframe(currentIframe);
        if (onlyOneMore) {
          break;
        }
        if (currentIframe && getOwnerWindow(currentIframe) === boundaryWindow) {
          onlyOneMore = true;
        }
      }
      return mergeRectOffsets(rects);
    } else {
      return node.getBoundingClientRect();
    }
  }
  function getElementDimensions(domElement) {
    const calculatedStyle = window.getComputedStyle(domElement);
    return {
      borderLeft: parseInt(calculatedStyle.borderLeftWidth, 10),
      borderRight: parseInt(calculatedStyle.borderRightWidth, 10),
      borderTop: parseInt(calculatedStyle.borderTopWidth, 10),
      borderBottom: parseInt(calculatedStyle.borderBottomWidth, 10),
      marginLeft: parseInt(calculatedStyle.marginLeft, 10),
      marginRight: parseInt(calculatedStyle.marginRight, 10),
      marginTop: parseInt(calculatedStyle.marginTop, 10),
      marginBottom: parseInt(calculatedStyle.marginBottom, 10),
      paddingLeft: parseInt(calculatedStyle.paddingLeft, 10),
      paddingRight: parseInt(calculatedStyle.paddingRight, 10),
      paddingTop: parseInt(calculatedStyle.paddingTop, 10),
      paddingBottom: parseInt(calculatedStyle.paddingBottom, 10)
    };
  }

  // src/publisher/react-integration/highlight-api.ts
  function createHighlightApi({
    getFiberIdForNative,
    findNativeNodesForFiberId,
    getDisplayNameForFiberId
  }) {
    const overlay = new Overlay();
    let subscriptions = [];
    let isInspectEnabled = false;
    let hoveredFiberId = null;
    function subscribe3(fn) {
      let handler = { fn };
      subscriptions.push(handler);
      return function() {
        subscriptions = subscriptions.filter((elem) => elem.fn !== fn);
        handler = null;
      };
    }
    function notify() {
      for (const { fn } of subscriptions) {
        fn({
          inspecting: isInspectEnabled,
          hoveredFiberId
        });
      }
    }
    function onClick(event) {
      event.preventDefault();
      event.stopPropagation();
      stopInspect();
      selectFiberForNode(event.target, true);
      notify();
    }
    function onMouseEvent(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    function onPointerDown(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    function onPointerOver(event) {
      event.preventDefault();
      event.stopPropagation();
      if (event.target) {
        const node = event.target;
        const fiberId = getFiberIdForNative(node, true);
        const ownerName = fiberId ? getDisplayNameForFiberId(fiberId) || void 0 : void 0;
        overlay.inspect([node], void 0, ownerName);
        selectFiberForNode(node);
      }
    }
    function onPointerUp(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    function selectFiberForNode(node, selected = false) {
      const fiberId = getFiberIdForNative(node, true);
      if (fiberId !== hoveredFiberId) {
        hoveredFiberId = fiberId;
        if (selected) {
          stopInspect();
        } else {
          notify();
        }
      }
    }
    function startHighlight(fiberId) {
      let nodes = findNativeNodesForFiberId(fiberId);
      if (!nodes || !nodes.length) {
        return;
      }
      nodes = nodes.filter((node) => node.nodeType === 1);
      if (nodes.length) {
        overlay.inspect(nodes, getDisplayNameForFiberId(fiberId) || "Unknown");
      } else {
        overlay.remove();
      }
    }
    function stopHighlight() {
      overlay.remove();
    }
    function startInspect() {
      if (isInspectEnabled) {
        return;
      }
      window.addEventListener("click", onClick, true);
      window.addEventListener("mousedown", onMouseEvent, true);
      window.addEventListener("mouseover", onMouseEvent, true);
      window.addEventListener("mouseup", onMouseEvent, true);
      window.addEventListener("pointerdown", onPointerDown, true);
      window.addEventListener("pointerover", onPointerOver, true);
      window.addEventListener("pointerup", onPointerUp, true);
      isInspectEnabled = true;
      hoveredFiberId = null;
      notify();
    }
    function stopInspect() {
      window.removeEventListener("click", onClick, true);
      window.removeEventListener("mousedown", onMouseEvent, true);
      window.removeEventListener("mouseover", onMouseEvent, true);
      window.removeEventListener("mouseup", onMouseEvent, true);
      window.removeEventListener("pointerdown", onPointerDown, true);
      window.removeEventListener("pointerover", onPointerOver, true);
      window.removeEventListener("pointerup", onPointerUp, true);
      overlay.remove();
      isInspectEnabled = false;
      notify();
    }
    return {
      subscribe: subscribe3,
      startHighlight,
      stopHighlight,
      startInspect,
      stopInspect
    };
  }

  // src/publisher/react-integration/dispatcher-trap.ts
  function extractHookPath(depth = 0, stopHookPathLocation) {
    const stack = getParsedStackTrace(depth + 4);
    const path = [];
    const result = {
      path: void 0,
      loc: null
    };
    let prev = result;
    for (const parsed of stack) {
      if (!parsed) {
        break;
      }
      if (parsed.loc === stopHookPathLocation) {
        path.shift();
        path.shift();
        break;
      }
      prev.loc = parsed.loc;
      path.unshift(
        prev = {
          name: parsed.name,
          loc: null
        }
      );
    }
    if (path.length) {
      result.path = path;
    }
    return result;
  }
  function createDispatcherTrap(renderer, { getFiberTypeId, isFiberRoot }) {
    let currentDispatcher = null;
    let currentRoot = null;
    let currentFiber = null;
    let currentFiberCollectInfo = null;
    let currentEffectFiber = null;
    let currentEffectName = null;
    let currentFiberHookIndex = 0;
    let dispatchCalls = [];
    let stopHookPathLocation = null;
    const knownDispatcher = /* @__PURE__ */ new Set();
    const ignoreDispatcherTransition = /* @__PURE__ */ new Set();
    const fiberTypeInfo = /* @__PURE__ */ new Map();
    const fiberRoot = /* @__PURE__ */ new WeakMap();
    const rerenderStates = /* @__PURE__ */ new WeakMap();
    const fiberComputedMemo = /* @__PURE__ */ new WeakMap();
    const fiberSyncStorageHooks = /* @__PURE__ */ new WeakMap();
    function trackUseHook(name, deps = null, context = null) {
      if (currentFiberCollectInfo !== null) {
        currentFiberCollectInfo.hooks.push({
          name,
          deps,
          context,
          trace: extractHookPath(1, stopHookPathLocation)
        });
      }
      return currentFiberHookIndex++;
    }
    function patchMemoHook(hookName2, dispatcher) {
      const orig = dispatcher[hookName2];
      dispatcher[hookName2] = (fn, deps) => {
        trackUseHook(hookName2, Array.isArray(deps) ? deps.length : null);
        return orig(fn, deps);
      };
    }
    function patchEffectHook(hookName2, dispatcher) {
      const orig = dispatcher[hookName2];
      dispatcher[hookName2] = function(create, deps) {
        const hookIdx = trackUseHook(hookName2);
        const hookOwnerFiber = currentFiber;
        const wrappedCreate = () => {
          currentEffectFiber = hookOwnerFiber;
          currentEffectName = hookName2 === "useEffect" ? "effect" : "layout-effect";
          const destroy = create();
          currentEffectFiber = null;
          currentEffectName = null;
          if (typeof destroy === "function") {
            return () => {
              return destroy();
            };
          }
          return destroy;
        };
        wrappedCreate.hookIdx = hookIdx;
        return orig(wrappedCreate, deps);
      };
    }
    function patchStateHook(hookName2, dispatcher) {
      const orig = dispatcher[hookName2];
      const dispatchName = hookName2 === "useState" ? "setState" : hookName2 === "useTransition" ? "startTransition" : "dispatch";
      dispatcher[hookName2] = (...args) => {
        const currentFiberHookIndex2 = trackUseHook(hookName2);
        const [state, dispatch] = orig(...args);
        if (typeof dispatch.wrapper !== "function") {
          const hookOwnerFiber = currentFiber;
          const hookOwnerFiberRoot = currentRoot;
          dispatch.hookIdx = currentFiberHookIndex2;
          dispatch.wrapper = (value) => {
            dispatchCalls.push({
              dispatch,
              dispatchName,
              root: hookOwnerFiberRoot,
              fiber: hookOwnerFiber,
              renderFiber: currentFiber,
              effectFiber: currentEffectFiber,
              effectName: currentEffectName,
              event: !currentFiber && !currentEffectFiber && window.event?.type || null,
              loc: extractCallLoc(0)
            });
            return dispatch(value);
          };
        }
        return [state, dispatch.wrapper];
      };
    }
    function patchContextHook(dispatcher) {
      const orig = dispatcher.useContext;
      const hookName2 = "useContext";
      dispatcher[hookName2] = (context, ...args) => {
        trackUseHook(hookName2, null, context);
        const value = orig(context, ...args);
        return value;
      };
    }
    function patchSyncExternalStorage(dispatcher) {
      const orig = dispatcher.useSyncExternalStore;
      if (typeof orig !== "function") {
        return;
      }
      const hookName2 = "useSyncExternalStore";
      dispatcher[hookName2] = (subscribe3, getSnapshot, getServerSnapshot) => {
        const hookIdx = trackUseHook(hookName2);
        if (currentFiber === null) {
          return orig(subscribe3, getSnapshot, getServerSnapshot);
        }
        const hookOwnerFiber = currentFiber;
        const hookOwnerFiberRoot = currentRoot;
        const alternate = currentFiber.alternate;
        let fiberHooks = fiberSyncStorageHooks.get(currentFiber) || (alternate !== null ? fiberSyncStorageHooks.get(alternate) : void 0);
        if (fiberHooks === void 0) {
          fiberSyncStorageHooks.set(currentFiber, fiberHooks = []);
        }
        if (fiberHooks.length < hookIdx + 1) {
          fiberHooks[hookIdx] = {
            subscribe: void 0,
            getSnapshot: void 0,
            wrappedSubscribe: () => void 0,
            wrappedGetSnapshot: () => void 0
          };
        }
        const wrapper = fiberHooks[hookIdx];
        if (wrapper.subscribe !== subscribe3) {
          wrapper.subscribe = subscribe3;
          wrapper.wrappedSubscribe = function(listener) {
            return subscribe3((prev, next) => {
              dispatchCalls.push({
                dispatch: wrapper.wrappedGetSnapshot,
                dispatchName: "externalStorageSync",
                root: hookOwnerFiberRoot,
                fiber: hookOwnerFiber,
                renderFiber: currentFiber,
                effectFiber: currentEffectFiber,
                effectName: currentEffectName,
                event: !currentFiber && !currentEffectFiber && window.event?.type || null,
                loc: extractCallLoc(0)
              });
              listener(prev, next);
            });
          };
        }
        if (wrapper.getSnapshot !== getSnapshot) {
          wrapper.getSnapshot = getSnapshot;
          wrapper.wrappedGetSnapshot = Object.assign(() => getSnapshot(), {
            hookIdx
          });
        }
        const value = orig(
          wrapper.wrappedSubscribe,
          wrapper.wrappedGetSnapshot,
          getServerSnapshot
        );
        return value;
      };
    }
    function patchDispatcher(dispatcher) {
      if (dispatcher && !knownDispatcher.has(dispatcher)) {
        knownDispatcher.add(dispatcher);
        if (dispatcher.useRef === dispatcher.useImperativeHandle) {
          ignoreDispatcherTransition.add(dispatcher);
        } else if (/warnInvalidContextAccess\(\)/.test(dispatcher.readContext.toString())) {
          ignoreDispatcherTransition.add(dispatcher);
        }
        patchStateHook("useState", dispatcher);
        patchStateHook("useReducer", dispatcher);
        patchMemoHook("useMemo", dispatcher);
        patchMemoHook("useCallback", dispatcher);
        patchEffectHook("useEffect", dispatcher);
        patchEffectHook("useLayoutEffect", dispatcher);
        patchContextHook(dispatcher);
        patchSyncExternalStorage(dispatcher);
        if (typeof dispatcher.useTransition === "function") {
          patchStateHook("useTransition", dispatcher);
        }
      }
      return dispatcher;
    }
    if (typeof renderer.getCurrentFiber === "function") {
      Object.defineProperty(renderer.currentDispatcherRef, "current", {
        get: () => currentDispatcher,
        set(nextDispatcher) {
          const nextCurrentFiber = renderer.getCurrentFiber();
          const prevDispatcher = currentDispatcher;
          currentDispatcher = patchDispatcher(nextDispatcher);
          if (nextCurrentFiber !== currentFiber) {
            currentFiber = nextCurrentFiber;
            currentFiberCollectInfo = null;
            currentFiberHookIndex = 0;
            currentRoot = null;
            if (currentFiber !== null) {
              const alternate = currentFiber.alternate;
              if (alternate === null) {
                const fiberTypeId = getFiberTypeId(
                  currentFiber.type,
                  currentFiber.tag
                );
                if (!fiberTypeInfo.has(fiberTypeId)) {
                  stopHookPathLocation = extractCallLoc(1);
                  fiberTypeInfo.set(
                    fiberTypeId,
                    currentFiberCollectInfo = {
                      hooks: []
                    }
                  );
                }
              } else {
                fiberComputedMemo.delete(currentFiber);
              }
              let nextCurrentRoot = fiberRoot.get(currentFiber) || alternate !== null && fiberRoot.get(alternate) || null;
              if (nextCurrentRoot === null) {
                let cursor = currentFiber.return;
                while (cursor !== null) {
                  const root = fiberRoot.get(currentFiber);
                  if (root !== void 0) {
                    nextCurrentRoot = root;
                    break;
                  }
                  if (isFiberRoot(cursor)) {
                    nextCurrentRoot = cursor.stateNode;
                    break;
                  }
                  cursor = cursor.return;
                }
                if (nextCurrentRoot !== null) {
                  fiberRoot.set(currentFiber, nextCurrentRoot);
                }
              }
              currentRoot = nextCurrentRoot;
            }
          } else if (currentFiber !== null && prevDispatcher !== null && nextDispatcher !== null && !ignoreDispatcherTransition.has(prevDispatcher) && !ignoreDispatcherTransition.has(nextDispatcher)) {
            currentFiberCollectInfo = null;
            currentFiberHookIndex = 0;
          } else if (nextDispatcher !== null && nextDispatcher.useRef === nextDispatcher.useImperativeHandle) {
            currentFiberCollectInfo = null;
            currentFiberHookIndex = 0;
          }
        }
      });
    }
    return {
      getDispatchHookIndex(dispatch) {
        return dispatch.hookIdx ?? null;
      },
      getFiberTypeHookInfo(fiberTypeId) {
        return fiberTypeInfo.get(fiberTypeId)?.hooks || [];
      },
      getFiberComputes(fiber) {
        return fiberComputedMemo.get(fiber) || [];
      },
      getFiberRerenders(fiber) {
        return rerenderStates.get(fiber);
      },
      flushDispatchCalls(root) {
        const accepted = [];
        const rejected = [];
        for (const dispatchCall of dispatchCalls) {
          if (dispatchCall.root === root) {
            accepted.push(dispatchCall);
          } else {
            rejected.push(dispatchCall);
          }
        }
        dispatchCalls = rejected;
        return accepted;
      }
    };
  }

  // src/publisher/react-integration/index.ts
  function attach(renderer, recordEvent, removeCommands) {
    const integrationCore = createIntegrationCore(renderer, recordEvent);
    const dispatcherApi = createDispatcherTrap(renderer, integrationCore);
    const interactionApi = createReactInteractionApi(integrationCore);
    const highlightApi = createHighlightApi(interactionApi);
    removeCommands({
      highlightApi,
      ...integrationCore.memoryLeaksApi
    });
    return {
      ...createReactDevtoolsHookHandlers(
        integrationCore,
        dispatcherApi,
        recordEvent
      ),
      ...interactionApi,
      ...integrationCore.memoryLeaksApi
    };
  }

  // src/publisher/index.ts
  var hook = installReactDevtoolsHook(
    window,
    (id, renderer) => attach(renderer, publishReactRenderer(id, renderer), remoteCommands),
    publishReactUnsupportedRenderer
  );
  if (config_default.inpage) {
    getHost().activate();
  }
})();
/*!
 * Socket.IO v2.4.0
 * (c) 2014-2021 Guillermo Rauch
 * Released under the MIT License.
 */
/*! https://mths.be/utf8js v2.1.2 by @mathias */