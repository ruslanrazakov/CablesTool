var CABLES = function (t) {
	var e = {
	};
	function i(s) {
	  if (e[s]) return e[s].exports;
	  var r = e[s] = {
		i: s,
		l: !1,
		exports: {
		}
	  };
	  return t[s].call(r.exports, r, r.exports, i),
	  r.l = !0,
	  r.exports
	}
	return i.m = t,
	i.c = e,
	i.d = function (t, e, s) {
	  i.o(t, e) || Object.defineProperty(t, e, {
		enumerable: !0,
		get: s
	  })
	},
	i.r = function (t) {
	  'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
		value: 'Module'
	  }),
	  Object.defineProperty(t, '__esModule', {
		value: !0
	  })
	},
	i.t = function (t, e) {
	  if (1 & e && (t = i(t)), 8 & e) return t;
	  if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
	  var s = Object.create(null);
	  if (i.r(s), Object.defineProperty(s, 'default', {
		enumerable: !0,
		value: t
	  }), 2 & e && 'string' != typeof t) for (var r in t) i.d(s, r, function (e) {
		return t[e]
	  }.bind(null, r));
	  return s
	},
	i.n = function (t) {
	  var e = t && t.__esModule ? function () {
		return t.default
	  }
	   : function () {
		return t
	  };
	  return i.d(e, 'a', e),
	  e
	},
	i.o = function (t, e) {
	  return Object.prototype.hasOwnProperty.call(t, e)
	},
	i.p = '',
	i(i.s = 0)
  }([function (t, e, i) {
	t.exports = i(2)
  },
  function (t, e) {
	t.exports = {
	  timestamp: 1613640494342,
	  created: '2021-02-18T09:28:14.342Z',
	  git: {
		branch: 'master',
		commit: 'ab0be0cc5ed6dda831b8bfda8568acf427215457',
		date: '2021-02-18T09:24:02.000Z'
	  }
	}
  },
  function (t, e, i) {
	'use strict';
	i.r(e);
	var s = {
	};
	i.r(s),
	i.d(s, 'base64Chars', (function () {
	  return h
	})),
	i.d(s, 'base64lookup', (function () {
	  return l
	})),
	i.d(s, 'b64encTypesArray', (function () {
	  return u
	})),
	i.d(s, 'b64decTypedArray', (function () {
	  return c
	}));
	var r = {
	};
	i.r(r),
	i.d(r, 'shuffleArray', (function () {
	  return g
	})),
	i.d(r, 'shortId', (function () {
	  return T
	})),
	i.d(r, 'uuid', (function () {
	  return A
	})),
	i.d(r, 'generateUUID', (function () {
	  return y
	})),
	i.d(r, 'simpleId', (function () {
	  return v
	})),
	i.d(r, 'smoothStep', (function () {
	  return I
	})),
	i.d(r, 'smootherStep', (function () {
	  return O
	})),
	i.d(r, 'map', (function () {
	  return R
	})),
	i.d(r, 'cacheBust', (function () {
	  return N
	})),
	i.d(r, 'basename', (function () {
	  return F
	})),
	i.d(r, 'jsonp', (function () {
	  return S
	})),
	i.d(r, 'ajaxSync', (function () {
	  return C
	})),
	i.d(r, 'ajax', (function () {
	  return M
	})),
	i.d(r, 'request', (function () {
	  return w
	})),
	i.d(r, 'UTILS', (function () {
	  return f
	}));
	var n = {
	};
	i.r(n),
	i.d(n, 'easeExpoIn', (function () {
	  return z
	})),
	i.d(n, 'easeExpoOut', (function () {
	  return Y
	})),
	i.d(n, 'easeExpoInOut', (function () {
	  return W
	})),
	i.d(n, 'easeCubicIn', (function () {
	  return K
	})),
	i.d(n, 'easeCubicOut', (function () {
	  return X
	})),
	i.d(n, 'easeCubicInOut', (function () {
	  return j
	})),
	i.d(n, 'ANIM', (function () {
	  return H
	})),
	i.d(n, 'Anim', (function () {
	  return q
	})),
	i.d(n, 'TL', (function () {
	  return Q
	}));
	var o = {
	};
	i.r(o),
	i.d(o, 'PatchConnectionReceiver', (function () {
	  return Ut
	})),
	i.d(o, 'PatchConnectionSender', (function () {
	  return Lt
	})),
	i.d(o, 'PatchConnectorBroadcastChannel', (function () {
	  return Bt
	}));
	const h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
	a = new Uint8Array(256);
	for (let t = 0; t < h.length; t++) a[h.charCodeAt(t)] = t;
	const l = a,
	u = function (t) {
	  t.buffer && (t = t.buffer);
	  let e,
	  i = new Uint8Array(t),
	  s = i.length,
	  r = '';
	  for (e = 0; e < s; e += 3) r += h[i[e] >> 2],
	  r += h[(3 & i[e]) << 4 | i[e + 1] >> 4],
	  r += h[(15 & i[e + 1]) << 2 | i[e + 2] >> 6],
	  r += h[63 & i[e + 2]];
	  return s % 3 == 2 ? r = r.substring(0, r.length - 1) + '=' : s % 3 == 1 && (r = r.substring(0, r.length - 2) + '=='),
	  r
	},
	c = function (t) {
	  let e,
	  i,
	  s,
	  r,
	  n,
	  o = 0.75 * t.length,
	  h = t.length,
	  a = 0;
	  '=' === t[t.length - 1] && (o--, '=' === t[t.length - 2] && o--);
	  let u = new ArrayBuffer(o),
	  c = new Uint8Array(u);
	  for (e = 0; e < h; e += 4) i = l[t.charCodeAt(e)],
	  s = l[t.charCodeAt(e + 1)],
	  r = l[t.charCodeAt(e + 2)],
	  n = l[t.charCodeAt(e + 3)],
	  c[a++] = i << 2 | s >> 4,
	  c[a++] = (15 & s) << 4 | r >> 2,
	  c[a++] = (3 & r) << 6 | 63 & n;
	  return u
	};
	let p = !1;
	const d = {
	  log() {
		if (p) return;
		const t = [
		  '[core]'
		];
		t.push.apply(t, arguments),
		Function.prototype.apply.apply(console.log, [
		  console,
		  t
		])
	  },
	  warn(t) {
		if (p) return;
		const e = [
		  '[core]'
		];
		e.push.apply(e, arguments),
		Function.prototype.apply.apply(console.warn, [
		  console,
		  e
		])
	  },
	  error(t) {
		const e = [
		  '[core]'
		];
		e.push.apply(e, arguments),
		Function.prototype.apply.apply(console.error, [
		  console,
		  e
		])
	  },
	  setSilent(t) {
		p = t
	  },
	  stack() {
		console.log((new Error).stack)
	  }
	},
	_ = function () {
	  this._eventCallbacks = {
	  },
	  this._logName = '',
	  this._log = !1,
	  this._listeners = {
	  },
	  this.addEventListener = this.on = function (t, e, i) {
		const s = {
		  id: (i || '') + CABLES.uuid(),
		  name: t,
		  cb: e
		};
		return this._eventCallbacks[t] ? this._eventCallbacks[t].push(s) : this._eventCallbacks[t] = [
		  s
		],
		this._listeners[s.id] = s,
		s.id
	  },
	  this.hasEventListener = function (t, e) {
		if (console.warn('old eventtarget function haseventlistener!'), t && e) {
		  if (this._eventCallbacks[t]) {
			return - 1 != this._eventCallbacks[t].indexOf(e)
		  }
		} else d.warn('hasListener: missing parameters')
	  },
	  this.removeEventListener = this.off = function (t, e) {
		if (null == t) return;
		if (!e) {
		  const e = this._listeners[t];
		  if (!e) return;
		  let i = !0;
		  for (; i; ) {
			i = !1;
			let s = - 1;
			for (let r = 0; r < this._eventCallbacks[e.name].length; r++) 0 === this._eventCallbacks[e.name][r].id.indexOf(t) && (i = !0, s = r);
			- 1 !== s && (this._eventCallbacks[e.name].splice(s, 1), delete this._listeners[t])
		  }
		  return
		}
		console.warn('[eventtarget] old function signature: removeEventListener!');
		let i = null;
		for (let s = 0; s < this._eventCallbacks[t].length; s++) this._eventCallbacks[t][s].cb == e && (i = s);
		null !== i ? delete this._eventCallbacks[i] : console.warn('[removeEventListener] not found ' + t)
	  },
	  this.logEvents = function (t, e) {
		this._log = t,
		this._logName = e
	  },
	  this.emitEvent = function (t, e, i, s, r, n, o) {
		if (this._log && console.log('[event] ', this._logName, t, this._eventCallbacks), this._eventCallbacks[t]) for (let h = 0; h < this._eventCallbacks[t].length; h++) this._eventCallbacks[t][h] && this._eventCallbacks[t][h].cb(e, i, s, r, n, o);
		 else this._log && console.log('[event] has no event callback', t, this._eventCallbacks)
	  }
	},
	f = {
	  float32Concat: function (t, e) {
		t instanceof Float32Array || (t = new Float32Array(t)),
		e instanceof Float32Array || (e = new Float32Array(e));
		const i = new Float32Array(t.length + e.length);
		return i.set(t),
		i.set(e, t.length),
		i
	  }
	},
	g = function (t) {
	  for (let e = t.length - 1; e > 0; e--) {
		const i = Math.floor(Math.seededRandom() * (e + 1)),
		s = t[e];
		t[e] = t[i],
		t[i] = s
	  }
	  return t
	},
	m = {
	},
	E = function () {
	  let t = Math.random().toString(36).substr(2, 9);
	  return m.hasOwnProperty(t) && (t = E()),
	  m[t] = !0,
	  t
	},
	T = E,
	b = function () {
	  let t = (new Date).getTime();
	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, e=>{
		const i = (t + 16 * Math.random()) % 16 | 0;
		return t = Math.floor(t / 16),
		('x' == e ? i : 3 & i | 8).toString(16)
	  })
	},
	A = b,
	y = b;
	let x = 0;
	const v = function () {
	  return x++,
	  x
	},
	I = function (t) {
	  const e = Math.max(0, Math.min(1, (t - 0) / 1));
	  return t = e * e * (3 - 2 * e)
	},
	O = function (t) {
	  const e = Math.max(0, Math.min(1, (t - 0) / 1));
	  return t = e * e * e * (e * (6 * e - 15) + 10)
	},
	R = function (t, e, i, s, r, n) {
	  if (t >= i) return r;
	  if (t <= e) return s;
	  let o = !1;
	  const h = Math.min(e, i),
	  a = Math.max(e, i);
	  h != e && (o = !0);
	  let l = !1;
	  const u = Math.min(s, r),
	  c = Math.max(s, r);
	  u != s && (l = !0);
	  let p = 0,
	  d = 0;
	  return p = o ? (a - t) * (c - u) / (a - h) : (t - h) * (c - u) / (a - h),
	  d = l ? c - p : p + u,
	  n ? 1 == n ? s + (t = Math.max(0, Math.min(1, (d - s) / (r - s)))) * t * (3 - 2 * t) * (r - s) : 2 == n ? s + (t = Math.max(0, Math.min(1, (d - s) / (r - s)))) * t * t * (t * (6 * t - 15) + 10) * (r - s) : d : d
	};
	Math.randomSeed = 1,
	Math.seededRandom = function (t, e) {
	  0 === Math.randomSeed && (Math.randomSeed = 999 * Math.random()),
	  t = t || 1,
	  e = e || 0,
	  Math.randomSeed = (9301 * Math.randomSeed + 49297) % 233280;
	  return e + Math.randomSeed / 233280 * (t - e)
	},
	f.arrayWriteToEnd = function (t, e) {
	  for (let e = 1; e < t.length; e++) t[e - 1] = t[e];
	  t[t.length - 1] = e
	},
	f.isNumeric = function (t) {
	  return !isNaN(parseFloat(t)) && isFinite(t)
	},
	f.isArray = function (t) {
	  return '[object Array]' === Object.prototype.toString.call(t)
	},
	String.prototype.endl = function () {
	  return this + '\n'
	},
	String.prototype.startsWith = function (t) {
	  return 0 === this.indexOf(t)
	},
	String.prototype.endsWith = function (t) {
	  return this.match(t + '$') == t
	};
	const N = function (t) {
	  return t.indexOf('?') > - 1 ? t += '&' : t += '?',
	  t + 'cb=' + CABLES.uuid()
	},
	F = function (t) {
	  let e = '';
	  if (!t) return '';
	  const i = (t + '').split('/');
	  if (i.length > 0) {
		let t = i[i.length - 1].split('?');
		e = t[0],
		t = e.split('.'),
		e = t[0]
	  }
	  return e
	};
	let P = null;
	const S = function (t, e) {
	  P = P || 0,
	  P++;
	  const i = P;
	  CABLES['jsonpFunc' + i] = function (t) {
		e(!1, t)
	  };
	  let s = '?';
	  t.indexOf(s) > - 1 && (s = '&');
	  const r = document.createElement('script');
	  r.setAttribute('src', t + s + 'callback=CABLES.jsonpFunc' + i),
	  document.body.appendChild(r)
	},
	C = function (t, e, i, s, r) {
	  w({
		url: t,
		cb: e,
		method: i,
		data: s,
		contenttype: r,
		sync: !0
	  })
	},
	M = function (t, e, i, s, r, n, o = {
	}) {
	  w({
		url: t,
		cb: e,
		method: i,
		data: s,
		contenttype: r,
		sync: !1,
		jsonP: n,
		headers: o
	  })
	},
	w = function (t) {
	  let e;
	  t.hasOwnProperty('asynch') || (t.asynch = !0);
	  try {
		e = new XMLHttpRequest
	  } catch (t) {
	  }
	  if (e.onreadystatechange = function () {
		4 == e.readyState && t.cb && (200 == e.status || 0 == e.status ? t.cb(!1, e.responseText, e) : t.cb(!0, e.responseText, e))
	  }, e.addEventListener('progress', t=>{
	  }), e.open(t.method ? t.method.toUpperCase() : 'GET', t.url, !t.sync), 'object' == typeof t.headers) {
		const i = Object.keys(t.headers);
		for (let s = 0; s < i.length; s++) {
		  const r = i[s],
		  n = t.headers[r];
		  e.setRequestHeader(r, n)
		}
	  }
	  t.post || t.data ? (e.setRequestHeader('Content-type', t.contenttype ? t.contenttype : 'application/x-www-form-urlencoded'), e.send(t.data || t.post)) : e.send()
	};
	window.performance = window.performance || {
	  offset: Date.now(),
	  now: function () {
		return Date.now() - this.offset
	  }
	};
	const k = {
	  EASINGS: [
		'linear',
		'absolute',
		'smoothstep',
		'smootherstep',
		'Cubic In',
		'Cubic Out',
		'Cubic In Out',
		'Expo In',
		'Expo Out',
		'Expo In Out',
		'Sin In',
		'Sin Out',
		'Sin In Out',
		'Quart In',
		'Quart Out',
		'Quart In Out',
		'Quint In',
		'Quint Out',
		'Quint In Out',
		'Back In',
		'Back Out',
		'Back In Out',
		'Elastic In',
		'Elastic Out',
		'Bounce In',
		'Bounce Out'
	  ],
	  EASING_LINEAR: 0,
	  EASING_ABSOLUTE: 1,
	  EASING_SMOOTHSTEP: 2,
	  EASING_SMOOTHERSTEP: 3,
	  EASING_BEZIER: 4,
	  EASING_CUBIC_IN: 5,
	  EASING_CUBIC_OUT: 6,
	  EASING_CUBIC_INOUT: 7,
	  EASING_EXPO_IN: 8,
	  EASING_EXPO_OUT: 9,
	  EASING_EXPO_INOUT: 10,
	  EASING_SIN_IN: 11,
	  EASING_SIN_OUT: 12,
	  EASING_SIN_INOUT: 13,
	  EASING_BACK_IN: 14,
	  EASING_BACK_OUT: 15,
	  EASING_BACK_INOUT: 16,
	  EASING_ELASTIC_IN: 17,
	  EASING_ELASTIC_OUT: 18,
	  EASING_BOUNCE_IN: 19,
	  EASING_BOUNCE_OUT: 21,
	  EASING_QUART_IN: 22,
	  EASING_QUART_OUT: 23,
	  EASING_QUART_INOUT: 24,
	  EASING_QUINT_IN: 25,
	  EASING_QUINT_OUT: 26,
	  EASING_QUINT_INOUT: 27
	},
	U = {
	  OP_PORT_TYPE_VALUE: 0,
	  OP_PORT_TYPE_FUNCTION: 1,
	  OP_PORT_TYPE_OBJECT: 2,
	  OP_PORT_TYPE_TEXTURE: 2,
	  OP_PORT_TYPE_ARRAY: 3,
	  OP_PORT_TYPE_DYNAMIC: 4,
	  OP_PORT_TYPE_STRING: 5,
	  OP_VERSION_PREFIX: '_v'
	},
	L = {
	  PORT_DIR_IN: 0,
	  PORT_DIR_OUT: 1
	},
	B = {
	  PACO_CLEAR: 0,
	  PACO_VALUECHANGE: 1,
	  PACO_OP_DELETE: 2,
	  PACO_UNLINK: 3,
	  PACO_LINK: 4,
	  PACO_LOAD: 5,
	  PACO_OP_CREATE: 6,
	  PACO_OP_ENABLE: 7,
	  PACO_OP_DISABLE: 8
	},
	V = function (t, e, i, s) {
	  _.apply(this),
	  this.data = {
	  },
	  this.direction = L.PORT_DIR_IN,
	  this.id = y(),
	  this.parent = t,
	  this.links = [
	  ],
	  this.value = 0,
	  this.name = e,
	  this.type = i || U.OP_PORT_TYPE_VALUE,
	  this.uiAttribs = s || {
	  },
	  this.anim = null,
	  this._oldAnimVal = - 5711,
	  this.defaultValue = null,
	  this._uiActiveState = !0,
	  this.ignoreValueSerialize = !1,
	  this.onLinkChanged = null,
	  this.crashed = !1,
	  this._valueBeforeLink = null,
	  this._lastAnimFrame = - 1,
	  this._animated = !1,
	  this.onValueChanged = null,
	  this.onTriggered = null,
	  this.onUiActiveStateChange = null,
	  this.changeAlways = !1,
	  this._warnedDeprecated = !1,
	  this._useVariableName = null,
	  this._tempLastUiValue = null,
	  Object.defineProperty(this, 'val', {
		get() {
		  return this._warnedDeprecated = !0,
		  this.get()
		},
		set(t) {
		  this.setValue(t),
		  this._warnedDeprecated = !0
		}
	  })
	};
	V.prototype.getValueForDisplay = function () {
	  let t = String(this.val);
	  return !this.uiAttribs || 'bool' != this.uiAttribs.display && 'bool' != this.uiAttribs.type ? t.length > 100 && (t = t.substring(0, 100)) : t = this.val ? 'true' : 'false',
	  t
	},
	V.prototype.onAnimToggle = function () {
	},
	V.prototype._onAnimToggle = function () {
	  this.onAnimToggle()
	},
	V.prototype.hidePort = function () {
	  this.setUiAttribs({
		hidePort: !0
	  })
	},
	V.prototype.remove = function () {
	  this.removeLinks(),
	  this.parent.removePort(this)
	},
	V.prototype.setUiAttribs = function (t) {
	  let e = !1;
	  this.uiAttribs || (this.uiAttribs = {
	  });
	  for (const i in t) this.uiAttribs[i] != t[i] && (e = !0),
	  this.uiAttribs[i] = t[i];
	  e && this.emitEvent('onUiAttrChange', t)
	},
	V.prototype.getUiAttribs = function () {
	  return this.uiAttribs
	},
	V.prototype.getUiAttrib = function (t) {
	  return this.uiAttribs && this.uiAttribs.hasOwnProperty(t) ? this.uiAttribs[t] : null
	},
	V.prototype.get = function () {
	  return this._animated && this._lastAnimFrame != this.parent.patch.getFrameNum() && (this._lastAnimFrame = this.parent.patch.getFrameNum(), this.value = this.anim.getValue(this.parent.patch.timer.getTime()), this._oldAnimVal = this.value, this.forceChange()),
	  this.value
	},
	V.prototype.set = V.prototype.setValue = function (t) {
	  if (void 0 !== t && this.parent.enabled && !this.crashed && (t !== this.value || this.changeAlways || this.type == U.OP_PORT_TYPE_TEXTURE || this.type == U.OP_PORT_TYPE_ARRAY)) {
		if (this._animated) this.anim.setValue(this.parent.patch.timer.getTime(), t);
		 else {
		  try {
			this.value = t,
			this.forceChange()
		  } catch (t) {
			this.crashed = !0,
			this.setValue = function (t) {
			},
			this.onTriggered = function () {
			},
			console.error('onvaluechanged exception cought', t),
			d.log(t.stack),
			d.log('exception in: ' + this.parent.name),
			this.parent.patch.isEditorMode() && gui.showOpCrash(this.parent),
			this.parent.patch.emitEvent('exception'.ex, this.parent)
		  }
		  this.parent.patch.isEditorMode() && this.type == U.OP_PORT_TYPE_TEXTURE && gui.texturePreview().updateTexturePort(this)
		}
		if (this.direction == L.PORT_DIR_OUT) for (let t = 0; t < this.links.length; ++t) this.links[t].setValue()
	  }
	},
	V.prototype.updateAnim = function () {
	  this._animated && (this.value = this.get(), (this._oldAnimVal != this.value || this.changeAlways) && (this._oldAnimVal = this.value, this.forceChange()), this._oldAnimVal = this.value)
	},
	V.args = function (t) {
	  return (t + '').replace(/[/][/].*$/gm, '').replace(/\s+/g, '').replace(/[/][*][^/*]*[*][/]/g, '').split('){', 1) [0].replace(/^[^(]*[(]/, '').replace(/=[^,]+/g, '').split(',').filter(Boolean)
	},
	V.prototype.forceChange = function () {
	  this.onValueChanged || this.onChange,
	  this.emitEvent('change', this.value, this),
	  this.onChange ? this.onChange(this, this.value) : this.onValueChanged && this.onValueChanged(this, this.value)
	},
	V.prototype.getTypeString = function () {
	  return this.type == U.OP_PORT_TYPE_VALUE ? 'Number' : this.type == U.OP_PORT_TYPE_FUNCTION ? 'Trigger' : this.type == U.OP_PORT_TYPE_OBJECT ? 'Object' : this.type == U.OP_PORT_TYPE_DYNAMIC ? 'Dynamic' : this.type == U.OP_PORT_TYPE_ARRAY ? 'Array' : this.type == U.OP_PORT_TYPE_STRING ? 'String' : 'Unknown'
	},
	V.prototype.getSerialized = function () {
	  const t = {
	  };
	  if (t.name = this.getName(), this.ignoreValueSerialize || 0 !== this.links.length || this.type == U.OP_PORT_TYPE_OBJECT && this.value && this.value.tex || (t.value = this.value), this._useVariableName && (t.useVariable = this._useVariableName), this._animated && (t.animated = !0), this.anim && (t.anim = this.anim.getSerialized()), 'file' == this.uiAttribs.display && (t.display = this.uiAttribs.display), this.direction == L.PORT_DIR_IN && this.links.length > 0) {
		t.links = [
		];
		for (const e in this.links) this.links[e].portIn && this.links[e].portOut && t.links.push(this.links[e].getSerialized())
	  }
	  return t
	},
	V.prototype.shouldLink = function () {
	  return !0
	},
	V.prototype.removeLinks = function () {
	  let t = 0;
	  for (; this.links.length > 0; ) {
		if (t++, t > 5000) {
		  console.warn('could not delete links... / infinite loop'),
		  this.links.length = 0;
		  break
		}
		this.links[0].remove()
	  }
	},
	V.prototype.removeLink = function (t) {
	  for (const e in this.links) this.links[e] == t && this.links.splice(e, 1);
	  this.direction == L.PORT_DIR_IN && (this.type == U.OP_PORT_TYPE_VALUE ? this.setValue(this._valueBeforeLink || 0) : this.setValue(this._valueBeforeLink || null)),
	  this.onLinkChanged && this.onLinkChanged(),
	  this.emitEvent('onLinkChanged')
	},
	V.prototype.getName = function () {
	  return this.name
	},
	V.prototype.addLink = function (t) {
	  this._valueBeforeLink = this.value,
	  this.links.push(t),
	  this.onLinkChanged && this.onLinkChanged(),
	  this.emitEvent('onLinkChanged')
	},
	V.prototype.getLinkTo = function (t) {
	  for (const e in this.links) if (this.links[e].portIn == t || this.links[e].portOut == t) return this.links[e]
	},
	V.prototype.removeLinkTo = function (t) {
	  for (const e in this.links) if (this.links[e].portIn == t || this.links[e].portOut == t) return this.links[e].remove(),
	  this.onLinkChanged && this.onLinkChanged(),
	  void this.emitEvent('onLinkChanged')
	},
	V.prototype.isLinkedTo = function (t) {
	  for (const e in this.links) if (this.links[e].portIn == t || this.links[e].portOut == t) return !0;
	  return !1
	},
	V.prototype.trigger = function () {
	  if (0 === this.links.length) return;
	  if (!this.parent.enabled) return;
	  let t = null;
	  try {
		for (let e = 0; e < this.links.length; ++e) this.links[e].portIn && (t = this.links[e].portIn, t._onTriggered()),
		this.links[e] && this.links[e].activity()
	  } catch (e) {
		this.parent.enabled = !1,
		this.parent.patch.isEditorMode() && (this.parent.patch.emitEvent('exception', e, t.parent), this.parent.patch.emitEvent('opcrash', t)),
		d.log('exception!'),
		console.error('ontriggered exception cought', e),
		d.log(e.stack),
		d.log('exception in: ' + t.parent.name)
	  }
	},
	V.prototype.call = function () {
	  d.log('call deprecated - use trigger() '),
	  this.trigger()
	},
	V.prototype.execute = function () {
	  d.log('### execute port: ' + this.getName(), this.goals.length)
	},
	V.prototype.setVariableName = function (t) {
	  this._useVariableName = t
	},
	V.prototype.getVariableName = function () {
	  return this._useVariableName
	},
	V.prototype.setVariable = function (t) {
	  this.setAnimated(!1);
	  const e = {
		useVariable: !1
	  };
	  this._variableIn && (this._variableIn.removeListener(this.set.bind(this)), this._variableIn = null),
	  t ? (this._variableIn = this.parent.patch.getVar(t), this._variableIn ? (this.type == U.OP_PORT_TYPE_OBJECT ? this._variableIn.addListener(() =>{
		this.set(null),
		this.set(this._variableIn.getValue())
	  }) : this._variableIn.addListener(this.set.bind(this)), this.set(this._variableIn.getValue())) : console.log('PORT VAR NOT FOUND!!!'), this._useVariableName = t, e.useVariable = !0, e.variableName = this._useVariableName) : (e.variableName = this._useVariableName = null, e.useVariable = !1),
	  this.setUiAttribs(e)
	},
	V.prototype.setAnimated = function (t) {
	  this._animated != t && (this._animated = t, this._animated && !this.anim && (this.anim = new q), this._onAnimToggle()),
	  this.setUiAttribs({
		isAnimated: this._animated
	  })
	},
	V.prototype.toggleAnim = function (t) {
	  this._animated = !this._animated,
	  this._animated && !this.anim && (this.anim = new q),
	  this.setAnimated(this._animated),
	  this._onAnimToggle(),
	  this.setUiAttribs({
		isAnimated: this._animated
	  })
	},
	V.prototype.getType = function () {
	  return this.type
	},
	V.prototype.isLinked = function () {
	  return this.links.length > 0
	},
	V.prototype.isBoundToVar = function () {
	  return null != this._useVariableName
	},
	V.prototype.isAnimated = function () {
	  return this._animated
	},
	V.prototype.isHidden = function () {
	  return this.uiAttribs.hidePort
	},
	V.prototype._onTriggered = function (t) {
	  this.parent.updateAnims(),
	  this.parent.enabled && this.onTriggered && this.onTriggered(t)
	},
	V.prototype._onSetProfiling = function (t) {
	  this.parent.patch.profiler.add('port', this),
	  this.setValue(t),
	  this.parent.patch.profiler.add('port', null)
	},
	V.prototype._onTriggeredProfiling = function () {
	  this.parent.enabled && this.onTriggered && (this.parent.patch.profiler.add('port', this), this.onTriggered(), this.parent.patch.profiler.add('port', null))
	},
	V.prototype.onValueChange = function (t) {
	  this.onChange = t
	},
	V.prototype.getUiActiveState = function () {
	  return this._uiActiveState
	},
	V.prototype.setUiActiveState = function (t) {
	  this._uiActiveState = t,
	  this.onUiActiveStateChange && this.onUiActiveStateChange()
	},
	V.portTypeNumberToString = function (t) {
	  return t == U.OP_PORT_TYPE_VALUE ? 'value' : t == U.OP_PORT_TYPE_FUNCTION ? 'function' : t == U.OP_PORT_TYPE_OBJECT ? 'object' : t == U.OP_PORT_TYPE_ARRAY ? 'array' : t == U.OP_PORT_TYPE_STRING ? 'string' : t == U.OP_PORT_TYPE_DYNAMIC ? 'dynamic' : 'unknown'
	};
	class D extends V {
	  constructor(t, e, i, s, r) {
		super (t, e, i, s),
		this.indexPort = r,
		this.indexPort.set = t=>{
		  const e = s.values;
		  if (!e) return;
		  let i = Math.floor(t);
		  i = Math.min(i, e.length - 1),
		  i = Math.max(i, 0),
		  this.indexPort.setValue(i),
		  this.set(e[i]),
		  this.parent.patch.isEditorMode() && window.gui && gui.patchView.isCurrentOp(this.parent) && gui.opParams.show(this.parent)
		}
	  }
	  setUiAttribs(t) {
		const e = t.hidePort;
		t.hidePort = !0,
		super.setUiAttribs(t),
		void 0 !== e && this.indexPort.setUiAttribs({
		  hidePort: e
		})
	  }
	}
	class G extends D {
	}
	const H = {
	  Key: function (t) {
		this.time = 0,
		this.value = 0,
		this.ui = {
		},
		this.onChange = null,
		this._easing = 0,
		this.bezTime = 0.5,
		this.bezValue = 0,
		this.bezTimeIn = - 0.5,
		this.bezValueIn = 0,
		this.cb = null,
		this.cbTriggered = !1;
		this._updateBezier = !1,
		this.setEasing(k.EASING_LINEAR),
		this.set(t)
	  }
	};
	H.Key.linear = function (t, e, i) {
	  return parseFloat(e.value) + parseFloat(i.value - e.value) * t
	},
	H.Key.easeLinear = function (t, e) {
	  return H.Key.linear(t, this, e)
	},
	H.Key.easeAbsolute = function (t, e) {
	  return this.value
	};
	const z = function (t) {
	  return Math.pow(2, 10 * (t - 1))
	};
	H.Key.easeExpoIn = function (t, e) {
	  return t = z(t),
	  H.Key.linear(t, this, e)
	};
	const Y = function (t) {
	  return t = 1 - Math.pow(2, - 10 * t)
	};
	H.Key.easeExpoOut = function (t, e) {
	  return t = Y(t),
	  H.Key.linear(t, this, e)
	};
	const W = function (t) {
	  return (t *= 2) < 1 ? t = 0.5 * Math.pow(2, 10 * (t - 1)) : (t--, t = 0.5 * (2 - Math.pow(2, - 10 * t))),
	  t
	};
	H.Key.easeExpoInOut = function (t, e) {
	  return t = W(t),
	  H.Key.linear(t, this, e)
	},
	H.Key.easeSinIn = function (t, e) {
	  return t = - 1 * Math.cos(t * Math.PI / 2) + 1,
	  H.Key.linear(t, this, e)
	},
	H.Key.easeSinOut = function (t, e) {
	  return t = Math.sin(t * Math.PI / 2),
	  H.Key.linear(t, this, e)
	},
	H.Key.easeSinInOut = function (t, e) {
	  return t = - 0.5 * (Math.cos(Math.PI * t) - 1),
	  H.Key.linear(t, this, e)
	};
	const K = function (t) {
	  return t *= t * t
	};
	H.Key.easeCubicIn = function (t, e) {
	  return t = K(t),
	  H.Key.linear(t, this, e)
	},
	H.Key.easeInQuint = function (t, e) {
	  return t *= t * t * t * t,
	  H.Key.linear(t, this, e)
	},
	H.Key.easeOutQuint = function (t, e) {
	  return t = (t -= 1) * t * t * t * t + 1,
	  H.Key.linear(t, this, e)
	},
	H.Key.easeInOutQuint = function (t, e) {
	  return (t /= 0.5) < 1 ? t *= 0.5 * t * t * t * t : t = 0.5 * ((t -= 2) * t * t * t * t + 2),
	  H.Key.linear(t, this, e)
	},
	H.Key.easeInQuart = function (t, e) {
	  return t *= t * t * t,
	  H.Key.linear(t, this, e)
	},
	H.Key.easeOutQuart = function (t, e) {
	  return t = - 1 * ((t -= 1) * t * t * t - 1),
	  H.Key.linear(t, this, e)
	},
	H.Key.easeInOutQuart = function (t, e) {
	  return (t /= 0.5) < 1 ? t *= 0.5 * t * t * t : t = - 0.5 * ((t -= 2) * t * t * t - 2),
	  H.Key.linear(t, this, e)
	},
	H.Key.bounce = function (t) {
	  return (t /= 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375,
	  t
	},
	H.Key.easeInBounce = function (t, e) {
	  return H.Key.linear(H.Key.bounce(t), this, e)
	},
	H.Key.easeOutBounce = function (t, e) {
	  return H.Key.linear(H.Key.bounce(t), this, e)
	},
	H.Key.easeInElastic = function (t, e) {
	  let i = 1.70158,
	  s = 0,
	  r = 1;
	  return 0 === t ? t = 0 : 1 == (t /= 1) ? t = 1 : (s || (s = 0.3), r < Math.abs(1) ? (r = 1, i = s / 4) : i = s / (2 * Math.PI) * Math.asin(1 / r), t = - r * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - i) * (2 * Math.PI) / s) + 0),
	  H.Key.linear(t, this, e)
	},
	H.Key.easeOutElastic = function (t, e) {
	  let i = 1.70158,
	  s = 0,
	  r = 1;
	  return 0 === t ? t = 0 : 1 == (t /= 1) ? t = 1 : (s || (s = 0.3), r < Math.abs(1) ? (r = 1, i = s / 4) : i = s / (2 * Math.PI) * Math.asin(1 / r), t = r * Math.pow(2, - 10 * t) * Math.sin((1 * t - i) * (2 * Math.PI) / s) + 1 + 0),
	  H.Key.linear(t, this, e)
	},
	H.Key.easeInBack = function (t, e) {
	  const i = 1.70158;
	  return t = t * t * ((i + 1) * t - i),
	  H.Key.linear(t, this, e)
	},
	H.Key.easeOutBack = function (t, e) {
	  const i = 1.70158;
	  return t = (t = t / 1 - 1) * t * ((i + 1) * t + i) + 1,
	  H.Key.linear(t, this, e)
	},
	H.Key.easeInOutBack = function (t, e) {
	  let i = 1.70158;
	  return t = (t /= 0.5) < 1 ? t * t * ((1 + (i *= 1.525)) * t - i) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2),
	  H.Key.linear(t, this, e)
	};
	const X = function (t) {
	  return t = --t * t * t + 1
	};
	H.Key.easeCubicOut = function (t, e) {
	  return t = X(t),
	  H.Key.linear(t, this, e)
	};
	const j = function (t) {
	  return (t *= 2) < 1 ? t *= 0.5 * t * t : t = 0.5 * ((t -= 2) * t * t + 2),
	  t
	};
	H.Key.easeCubicInOut = function (t, e) {
	  return t = j(t),
	  H.Key.linear(t, this, e)
	},
	H.Key.easeSmoothStep = function (t, e) {
	  const i = Math.max(0, Math.min(1, t));
	  return t = i * i * (3 - 2 * i),
	  H.Key.linear(t, this, e)
	},
	H.Key.easeSmootherStep = function (t, e) {
	  const i = Math.max(0, Math.min(1, (t - 0) / 1));
	  return t = i * i * i * (i * (6 * i - 15) + 10),
	  H.Key.linear(t, this, e)
	},
	H.Key.prototype.setEasing = function (t) {
	  this._easing = t,
	  this._easing == k.EASING_ABSOLUTE ? this.ease = H.Key.easeAbsolute : this._easing == k.EASING_SMOOTHSTEP ? this.ease = H.Key.easeSmoothStep : this._easing == k.EASING_SMOOTHERSTEP ? this.ease = H.Key.easeSmootherStep : this._easing == k.EASING_CUBIC_IN ? this.ease = H.Key.easeCubicIn : this._easing == k.EASING_CUBIC_OUT ? this.ease = H.Key.easeCubicOut : this._easing == k.EASING_CUBIC_INOUT ? this.ease = H.Key.easeCubicInOut : this._easing == k.EASING_EXPO_IN ? this.ease = H.Key.easeExpoIn : this._easing == k.EASING_EXPO_OUT ? this.ease = H.Key.easeExpoOut : this._easing == k.EASING_EXPO_INOUT ? this.ease = H.Key.easeExpoInOut : this._easing == k.EASING_SIN_IN ? this.ease = H.Key.easeSinIn : this._easing == k.EASING_SIN_OUT ? this.ease = H.Key.easeSinOut : this._easing == k.EASING_SIN_INOUT ? this.ease = H.Key.easeSinInOut : this._easing == k.EASING_BACK_OUT ? this.ease = H.Key.easeOutBack : this._easing == k.EASING_BACK_IN ? this.ease = H.Key.easeInBack : this._easing == k.EASING_BACK_INOUT ? this.ease = H.Key.easeInOutBack : this._easing == k.EASING_ELASTIC_IN ? this.ease = H.Key.easeInElastic : this._easing == k.EASING_ELASTIC_OUT ? this.ease = H.Key.easeOutElastic : this._easing == k.EASING_ELASTIC_INOUT ? this.ease = H.Key.easeElasticInOut : this._easing == k.EASING_BOUNCE_IN ? this.ease = H.Key.easeInBounce : this._easing == k.EASING_BOUNCE_OUT ? this.ease = H.Key.easeOutBounce : this._easing == k.EASING_QUART_OUT ? this.ease = H.Key.easeOutQuart : this._easing == k.EASING_QUART_IN ? this.ease = H.Key.easeInQuart : this._easing == k.EASING_QUART_INOUT ? this.ease = H.Key.easeInOutQuart : this._easing == k.EASING_QUINT_OUT ? this.ease = H.Key.easeOutQuint : this._easing == k.EASING_QUINT_IN ? this.ease = H.Key.easeInQuint : this._easing == k.EASING_QUINT_INOUT ? this.ease = H.Key.easeInOutQuint : this._easing == k.EASING_BEZIER ? (this._updateBezier = !0, this.ease = H.Key.easeBezier) : (this._easing = k.EASING_LINEAR, this.ease = H.Key.easeLinear)
	},
	H.Key.prototype.trigger = function () {
	  this.cb(),
	  this.cbTriggered = !0
	},
	H.Key.prototype.setValue = function (t) {
	  this.value = t,
	  this._updateBezier = !0,
	  null !== this.onChange && this.onChange()
	},
	H.Key.prototype.set = function (t) {
	  t && (t.e && this.setEasing(t.e), t.cb && (this.cb = t.cb, this.cbTriggered = !1), t.b && (this.bezTime = t.b[0], this.bezValue = t.b[1], this.bezTimeIn = t.b[2], this.bezValueIn = t.b[3], this._updateBezier = !0), t.hasOwnProperty('t') && (this.time = t.t), t.hasOwnProperty('time') && (this.time = t.time), t.hasOwnProperty('v') ? this.value = t.v : t.hasOwnProperty('value') && (this.value = t.value)),
	  null !== this.onChange && this.onChange()
	},
	H.Key.prototype.getSerialized = function () {
	  const t = {
	  };
	  return t.t = this.time,
	  t.v = this.value,
	  t.e = this._easing,
	  this._easing == k.EASING_BEZIER && (t.b = [
		this.bezTime,
		this.bezValue,
		this.bezTimeIn,
		this.bezValueIn
	  ]),
	  t
	},
	H.Key.prototype.getEasing = function () {
	  return this._easing
	};
	const q = function (t) {
	  t = t || {
	  },
	  this.keys = [
	  ],
	  this.onChange = null,
	  this.stayInTimeline = !1,
	  this.loop = !1,
	  this.defaultEasing = t.defaultEasing || k.EASING_LINEAR,
	  this.onLooped = null,
	  this._timesLooped = 0,
	  this._needsSort = !1
	};
	q.prototype.forceChangeCallback = function () {
	  null !== this.onChange && this.onChange()
	},
	q.prototype.hasEnded = function (t) {
	  return 0 === this.keys.length || this.keys[this.keys.length - 1].time <= t
	},
	q.prototype.isRising = function (t) {
	  if (this.hasEnded(t)) return !1;
	  const e = this.getKeyIndex(t);
	  return this.keys[e].value < this.keys[e + 1].value
	},
	q.prototype.clearBefore = function (t) {
	  const e = this.getValue(t),
	  i = this.getKeyIndex(t);
	  this.setValue(t, e),
	  i > 1 && this.keys.splice(0, i)
	},
	q.prototype.clear = function (t) {
	  let e = 0;
	  t && (e = this.getValue(t)),
	  this.keys.length = 0,
	  t && this.setValue(t, e),
	  null !== this.onChange && this.onChange()
	},
	q.prototype.sortKeys = function () {
	  this.keys.sort((t, e) =>parseFloat(t.time) - parseFloat(e.time)),
	  this._needsSort = !1
	},
	q.prototype.getLength = function () {
	  return 0 === this.keys.length ? 0 : this.keys[this.keys.length - 1].time
	},
	q.prototype.getKeyIndex = function (t) {
	  let e = 0;
	  for (let i = 0; i < this.keys.length; i++) if (t >= this.keys[i].time && (e = i), this.keys[i].time > t) return e;
	  return e
	},
	q.prototype.setValue = function (t, e, i) {
	  let s = !1;
	  for (const r in this.keys) if (this.keys[r].time == t) {
		s = this.keys[r],
		this.keys[r].setValue(e),
		this.keys[r].cb = i;
		break
	  }
	  s || this.keys.push(new H.Key({
		time: t,
		value: e,
		e: this.defaultEasing,
		cb: i
	  })),
	  this.onChange && this.onChange(),
	  this._needsSort = !0
	},
	q.prototype.getSerialized = function () {
	  const t = {
		keys: [
		]
	  };
	  t.loop = this.loop;
	  for (const e in this.keys) t.keys.push(this.keys[e].getSerialized());
	  return t
	},
	q.prototype.getKey = function (t) {
	  const e = this.getKeyIndex(t);
	  return this.keys[e]
	},
	q.prototype.getNextKey = function (t) {
	  let e = this.getKeyIndex(t) + 1;
	  return e >= this.keys.length && (e = this.keys.length - 1),
	  this.keys[e]
	},
	q.prototype.isFinished = function (t) {
	  return this.keys.length <= 0 || t > this.keys[this.keys.length - 1].time
	},
	q.prototype.isStarted = function (t) {
	  return !(this.keys.length <= 0) && t >= this.keys[0].time
	},
	q.prototype.getValue = function (t) {
	  if (0 === this.keys.length) return 0;
	  if (this._needsSort && this.sortKeys(), t < this.keys[0].time) return this.keys[0].value;
	  const e = this.keys.length - 1;
	  if (this.loop && t > this.keys[e].time) {
		t / this.keys[e].time > this._timesLooped && (this._timesLooped++, this.onLooped && this.onLooped()),
		t = (t - this.keys[0].time) % (this.keys[e].time - this.keys[0].time),
		t += this.keys[0].time
	  }
	  const i = this.getKeyIndex(t);
	  if (i >= e) return this.keys[e].cb && !this.keys[e].cbTriggered && this.keys[e].trigger(),
	  this.keys[e].value;
	  const s = parseInt(i, 10) + 1,
	  r = this.keys[i],
	  n = this.keys[s];
	  if (r.cb && !r.cbTriggered && r.trigger(), !n) return - 1;
	  const o = (t - r.time) / (n.time - r.time);
	  return r.ease || console.log('has no ease', r, n),
	  r.ease(o, n)
	},
	q.prototype.addKey = function (t) {
	  void 0 === t.time ? d.log('key time undefined, ignoring!') : (this.keys.push(t), null !== this.onChange && this.onChange())
	},
	q.prototype.easingFromString = function (t) {
	  return 'linear' == t ? k.EASING_LINEAR : 'absolute' == t ? k.EASING_ABSOLUTE : 'smoothstep' == t ? k.EASING_SMOOTHSTEP : 'smootherstep' == t ? k.EASING_SMOOTHERSTEP : 'Cubic In' == t ? k.EASING_CUBIC_IN : 'Cubic Out' == t ? k.EASING_CUBIC_OUT : 'Cubic In Out' == t ? k.EASING_CUBIC_INOUT : 'Expo In' == t ? k.EASING_EXPO_IN : 'Expo Out' == t ? k.EASING_EXPO_OUT : 'Expo In Out' == t ? k.EASING_EXPO_INOUT : 'Sin In' == t ? k.EASING_SIN_IN : 'Sin Out' == t ? k.EASING_SIN_OUT : 'Sin In Out' == t ? k.EASING_SIN_INOUT : 'Back In' == t ? k.EASING_BACK_IN : 'Back Out' == t ? k.EASING_BACK_OUT : 'Back In Out' == t ? k.EASING_BACK_INOUT : 'Elastic In' == t ? k.EASING_ELASTIC_IN : 'Elastic Out' == t ? k.EASING_ELASTIC_OUT : 'Bounce In' == t ? k.EASING_BOUNCE_IN : 'Bounce Out' == t ? k.EASING_BOUNCE_OUT : 'Quart Out' == t ? k.EASING_QUART_OUT : 'Quart In' == t ? k.EASING_QUART_IN : 'Quart In Out' == t ? k.EASING_QUART_INOUT : 'Quint Out' == t ? k.EASING_QUINT_OUT : 'Quint In' == t ? k.EASING_QUINT_IN : 'Quint In Out' == t ? k.EASING_QUINT_INOUT : void 0
	},
	q.prototype.createPort = function (t, e, i) {
	  const s = t.inDropDown(e, k.EASINGS);
	  return s.set('linear'),
	  s.defaultValue = 'linear',
	  s.onChange = function () {
		this.defaultEasing = this.easingFromString(s.get()),
		i && i()
	  }.bind(this),
	  s
	},
	q.slerpQuaternion = function (t, e, i, s, r, n) {
	  q.slerpQuaternion.q1 || (q.slerpQuaternion.q1 = quat.create(), q.slerpQuaternion.q2 = quat.create());
	  const o = i.getKeyIndex(t);
	  let h = o + 1;
	  if (h >= i.keys.length && (h = i.keys.length - 1), o == h) quat.set(e, i.keys[o].value, s.keys[o].value, r.keys[o].value, n.keys[o].value);
	   else {
		const a = i.keys[o].time,
		l = (t - a) / (i.keys[h].time - a);
		quat.set(q.slerpQuaternion.q1, i.keys[o].value, s.keys[o].value, r.keys[o].value, n.keys[o].value),
		quat.set(q.slerpQuaternion.q2, i.keys[h].value, s.keys[h].value, r.keys[h].value, n.keys[h].value),
		quat.slerp(e, q.slerpQuaternion.q1, q.slerpQuaternion.q2, l)
	  }
	  return e
	};
	const Q = H;
	Q.Anim = q;
	const J = function (t) {
	  _.apply(this),
	  this.id = CABLES.uuid(),
	  this.portIn = null,
	  this.portOut = null,
	  this.scene = t,
	  this.activityCounter = 0
	};
	J.prototype.setValue = function (t) {
	  void 0 === t ? this._setValue() : this.portIn.set(t)
	},
	J.prototype.activity = function () {
	  this.activityCounter++
	},
	J.prototype._setValue = function () {
	  if (!this.portOut) return void this.remove();
	  const t = this.portOut.get();
	  t == t && (this.portIn.type != U.OP_PORT_TYPE_FUNCTION && this.activity(), (this.portIn.get() !== t || this.portIn.changeAlways) && this.portIn.set(t))
	},
	J.prototype.getOtherPort = function (t) {
	  return t == this.portIn ? this.portOut : this.portIn
	},
	J.prototype.remove = function () {
	  this.portIn && this.portIn.removeLink(this),
	  this.portOut && this.portOut.removeLink(this),
	  this.scene && this.scene.emitEvent('onUnLink', this.portIn, this.portOut, this),
	  !this.portIn || this.portIn.type != U.OP_PORT_TYPE_OBJECT && this.portIn.type != U.OP_PORT_TYPE_ARRAY || (this.portIn.set(null), this.portIn.links.length > 0 && this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get())),
	  this.portIn && this.portIn.parent._checkLinksNeededToWork(),
	  this.portOut && this.portOut.parent._checkLinksNeededToWork(),
	  this.portIn = null,
	  this.portOut = null,
	  this.scene = null
	},
	J.prototype.link = function (t, e) {
	  if (!J.canLink(t, e)) return d.log('cannot link ports!'),
	  !1;
	  t.direction == L.PORT_DIR_IN ? (this.portIn = t, this.portOut = e) : (this.portIn = e, this.portOut = t),
	  t.addLink(this),
	  e.addLink(this),
	  this.setValue(),
	  t.onLink && t.onLink(this),
	  e.onLink && e.onLink(this),
	  t.parent._checkLinksNeededToWork(),
	  e.parent._checkLinksNeededToWork()
	},
	J.prototype.getSerialized = function () {
	  const t = {
	  };
	  return t.portIn = this.portIn.getName(),
	  t.portOut = this.portOut.getName(),
	  t.objIn = this.portIn.parent.id,
	  t.objOut = this.portOut.parent.id,
	  t
	},
	J.canLinkText = function (t, e) {
	  if (t.direction == e.direction) {
		let t = '(out)';
		return e.direction == L.PORT_DIR_IN && (t = '(in)'),
		'can not link: same direction ' + t
	  }
	  return t.parent == e.parent ? 'can not link: same op' : t.type != U.OP_PORT_TYPE_DYNAMIC && e.type != U.OP_PORT_TYPE_DYNAMIC && t.type != e.type ? 'can not link: different type' : t ? e ? t.direction == L.PORT_DIR_IN && t.isAnimated() || e.direction == L.PORT_DIR_IN && e.isAnimated() ? 'can not link: is animated' : t.isLinkedTo(e) ? 'ports already linked' : t.canLink && !t.canLink(e) || e.canLink && !e.canLink(t) ? 'Incompatible' : 'can link' : 'can not link: port 2 invalid' : 'can not link: port 1 invalid'
	},
	J.canLink = function (t, e) {
	  return !!t && (!!e && ((t.direction != L.PORT_DIR_IN || !t.isAnimated()) && ((e.direction != L.PORT_DIR_IN || !e.isAnimated()) && (!t.isHidden() && !e.isHidden() && (!t.isLinkedTo(e) && (t.direction != e.direction && ((t.type == e.type || t.type == U.OP_PORT_TYPE_DYNAMIC || e.type == U.OP_PORT_TYPE_DYNAMIC) && (t.type == U.OP_PORT_TYPE_DYNAMIC || e.type == U.OP_PORT_TYPE_DYNAMIC || t.parent != e.parent && (!(t.canLink && !t.canLink(e)) && !(e.canLink && !e.canLink(t)))))))))))
	};
	const Z = function () {
	  if (_.apply(this), this.data = {
	  }, this.objName = '', this.portsOut = [
	  ], this.portsIn = [
	  ], this.portsInData = [
	  ], this.opId = '', this.uiAttribs = {
	  }, this.enabled = !0, this.patch = arguments[0], this.name = arguments[1], this._needsLinkedToWork = [
	  ], this._needsParentOp = null, this._shortOpName = '', this.hasUiErrors = !1, this._uiErrors = {
	  }, arguments[1]) {
		if (this._shortOpName = arguments[1].split('.') [arguments[1].split('.').length - 1], this._shortOpName.indexOf(U.OP_VERSION_PREFIX) > 0) {
		  const t = this._shortOpName.split(U.OP_VERSION_PREFIX) [1];
		  this._shortOpName = this._shortOpName.substring(0, this._shortOpName.length - (U.OP_VERSION_PREFIX + t).length)
		}
		this.uiAttribs.title = this._shortOpName
	  }
	  this.id = arguments[2] || A(),
	  this.onAddPort = null,
	  this.onCreate = null,
	  this.onResize = null,
	  this.onLoaded = null,
	  this.onDelete = null,
	  this.onUiAttrChange = null,
	  this._eventCallbacks = {
	  },
	  this._instances = null,
	  this.preRender = null,
	  this.init = null
	};
	{
	  Z.prototype.clearUiAttrib = function (t) {
		const e = {
		  name: null
		};
		this.uiAttrib(e)
	  },
	  Z.prototype.getTitle = function (t) {
		return this.uiAttribs.title || this.name
	  },
	  Z.prototype.setTitle = function (t) {
		const e = this.name != t;
		this.name = t,
		this.uiAttr({
		  title: t
		}),
		e && this.fireEvent('onTitleChange', t)
	  };
	  const t = function (t) {
		if (t) {
		  t.error && console.warn('old ui warning attribute in ' + this.name + ', use op.setUiError !'),
		  t.warning && console.warn('old ui warning attribute in ' + this.name + ', use op.setUiError !'),
		  t.hint && console.warn('old ui hint attribute in ' + this.name + ', use op.setUiError !'),
		  'object' != typeof t && console.error('op.uiAttrib attribs are not string'),
		  this.uiAttribs || (this.uiAttribs = {
		  });
		  for (const e in t) this.uiAttribs[e] = t[e];
		  t.title && t.title != this.name && this.setTitle(t.title),
		  this.fireEvent('onUiAttribsChange', t)
		}
	  };
	  Z.prototype.setUiAttrib = t,
	  Z.prototype.uiAttr = t,
	  Z.prototype.getName = function () {
		return this.uiAttribs.name ? this.uiAttribs.name : this.objName.split('.')
	  },
	  Z.prototype.addOutPort = function (t) {
		return t.direction = L.PORT_DIR_OUT,
		t.parent = this,
		this.portsOut.push(t),
		this.onAddPort && this.onAddPort(t),
		this.fireEvent('onPortAdd', t),
		t
	  },
	  Z.prototype.hasDynamicPort = function () {
		let t = 0;
		for (t = 0; t < this.portsIn.length; t++) {
		  if (this.portsIn[t].type == U.OP_PORT_TYPE_DYNAMIC) return !0;
		  if ('dyn' == this.portsIn[t].getName()) return !0
		}
		for (t = 0; t < this.portsOut.length; t++) {
		  if (this.portsOut[t].type == U.OP_PORT_TYPE_DYNAMIC) return !0;
		  if ('dyn' == this.portsOut[t].getName()) return !0
		}
		return !1
	  },
	  Z.prototype.addInPort = function (t) {
		if (!(t instanceof V)) throw new Error('parameter is not a port!');
		return t.direction = L.PORT_DIR_IN,
		t.parent = this,
		this.portsIn.push(t),
		this.onAddPort && this.onAddPort(t),
		t
	  },
	  Z.prototype.inFunction = Z.prototype.inTrigger = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_FUNCTION));
		return void 0 !== e && i.set(e),
		i
	  },
	  Z.prototype.inFunctionButton = Z.prototype.inTriggerButton = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_FUNCTION, {
		  display: 'button'
		}));
		return void 0 !== e && i.set(e),
		i
	  },
	  Z.prototype.inFunctionButton = Z.prototype.inUiTriggerButtons = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_FUNCTION, {
		  display: 'buttons'
		}));
		return void 0 !== e && i.set(e),
		i
	  },
	  Z.prototype.inValueFloat = Z.prototype.inValue = Z.prototype.inFloat = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_VALUE));
		return void 0 !== e && (i.set(e), i.defaultValue = e),
		i
	  },
	  Z.prototype.inValueBool = Z.prototype.inBool = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_VALUE, {
		  display: 'bool'
		}));
		return void 0 !== e && (i.set(e), i.defaultValue = e),
		i
	  },
	  Z.prototype.inValueString = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_VALUE, {
		  type: 'string'
		}));
		return i.value = '',
		void 0 !== e && (i.set(e), i.defaultValue = e),
		i
	  },
	  Z.prototype.inString = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_STRING, {
		  type: 'string'
		}));
		return e = e || '',
		i.value = e,
		i.set(e),
		i.defaultValue = e,
		i
	  },
	  Z.prototype.inValueText = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_VALUE, {
		  type: 'string',
		  display: 'text'
		}));
		return i.value = '',
		void 0 !== e && (i.set(e), i.defaultValue = e),
		i
	  },
	  Z.prototype.inTextarea = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_STRING, {
		  type: 'string',
		  display: 'text'
		}));
		return i.value = '',
		void 0 !== e && (i.set(e), i.defaultValue = e),
		i
	  },
	  Z.prototype.inStringEditor = function (t, e, i, s = !0) {
		const r = this.addInPort(new V(this, t, U.OP_PORT_TYPE_STRING, {
		  type: 'string',
		  display: 'editor',
		  editorSyntax: i,
		  hideFormatButton: s
		}));
		return r.value = '',
		void 0 !== e && (r.set(e), r.defaultValue = e),
		r
	  },
	  Z.prototype.inValueEditor = function (t, e, i, s = !0) {
		const r = this.addInPort(new V(this, t, U.OP_PORT_TYPE_VALUE, {
		  type: 'string',
		  display: 'editor',
		  editorSyntax: i,
		  hideFormatButton: s
		}));
		return r.value = '',
		void 0 !== e && (r.set(e), r.defaultValue = e),
		r
	  },
	  Z.prototype.inValueSelect = Z.prototype.inDropDown = function (t, e, i, s) {
		let r = null;
		if (s) {
		  const i = new V(this, t, U.OP_PORT_TYPE_VALUE, {
			display: 'dropdown',
			hidePort: !0,
			type: 'string',
			values: e
		  });
		  r = this.addInPort(i)
		} else {
		  const s = new V(this, t + ' index', U.OP_PORT_TYPE_VALUE, {
			increment: 'integer',
			hideParam: !0
		  }),
		  n = this.addInPort(s),
		  o = new G(this, t, U.OP_PORT_TYPE_VALUE, {
			display: 'dropdown',
			hidePort: !0,
			type: 'string',
			values: e
		  }, n);
		  if (s.onLinkChanged = function () {
			o.setUiAttribs({
			  greyout: s.isLinked()
			})
		  }, r = this.addInPort(o), void 0 !== i) {
			r.set(i);
			const t = e.findIndex(t=>t == i);
			n.setValue(t),
			r.defaultValue = i,
			n.defaultValue = t
		  }
		}
		return r
	  },
	  Z.prototype.inSwitch = function (t, e, i, s) {
		let r = null;
		if (s) {
		  const i = new V(this, t, U.OP_PORT_TYPE_STRING, {
			display: 'switch',
			hidePort: !0,
			type: 'string',
			values: e
		  });
		  r = this.addInPort(i)
		} else {
		  const s = new V(this, t + ' index', U.OP_PORT_TYPE_VALUE, {
			increment: 'integer',
			hideParam: !0
		  }),
		  n = this.addInPort(s),
		  o = new D(this, t, U.OP_PORT_TYPE_STRING, {
			display: 'switch',
			hidePort: !0,
			type: 'string',
			values: e
		  }, n);
		  if (s.onLinkChanged = function () {
			o.setUiAttribs({
			  greyout: s.isLinked()
			})
		  }, r = this.addInPort(o), void 0 !== i) {
			r.set(i);
			const t = e.findIndex(t=>t == i);
			n.setValue(t),
			r.defaultValue = i,
			n.defaultValue = t
		  }
		}
		return r
	  },
	  Z.prototype.inValueInt = Z.prototype.inInt = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_VALUE, {
		  increment: 'integer'
		}));
		return void 0 !== e && (i.set(e), i.defaultValue = e),
		i
	  },
	  Z.prototype.inFile = function (t, e, i) {
		const s = this.addInPort(new V(this, t, U.OP_PORT_TYPE_VALUE, {
		  display: 'file',
		  type: 'string',
		  filter: e
		}));
		return void 0 !== i && (s.set(i), s.defaultValue = i),
		s
	  },
	  Z.prototype.inUrl = function (t, e, i) {
		const s = this.addInPort(new V(this, t, U.OP_PORT_TYPE_STRING, {
		  display: 'file',
		  type: 'string',
		  filter: e
		}));
		return void 0 !== i && (s.set(i), s.defaultValue = i),
		s
	  },
	  Z.prototype.inTexture = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_OBJECT, {
		  display: 'texture',
		  objType: 'texture',
		  preview: !0
		}));
		return void 0 !== e && i.set(e),
		i
	  },
	  Z.prototype.inObject = function (t, e, i) {
		const s = this.addInPort(new V(this, t, U.OP_PORT_TYPE_OBJECT, {
		  objType: i
		}));
		return void 0 !== e && s.set(e),
		s
	  },
	  Z.prototype.inGradient = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_VALUE, {
		  display: 'gradient',
		  hidePort: !0
		}));
		return void 0 !== e && i.set(e),
		i
	  },
	  Z.prototype.inArray = function (t, e) {
		const i = this.addInPort(new V(this, t, U.OP_PORT_TYPE_ARRAY));
		return void 0 !== e && i.set(e),
		i
	  },
	  Z.prototype.inValueSlider = Z.prototype.inFloatSlider = function (t, e, i, s) {
		const r = {
		  display: 'range'
		};
		null != i && null != s && (r.min = i, r.max = s);
		const n = this.addInPort(new V(this, t, U.OP_PORT_TYPE_VALUE, r));
		return void 0 !== e && (n.set(e), n.defaultValue = e),
		n
	  },
	  Z.prototype.outFunction = Z.prototype.outTrigger = function (t, e) {
		const i = this.addOutPort(new V(this, t, U.OP_PORT_TYPE_FUNCTION));
		return void 0 !== e && i.set(e),
		i
	  },
	  Z.prototype.outValue = Z.prototype.outNumber = function (t, e) {
		const i = this.addOutPort(new V(this, t, U.OP_PORT_TYPE_VALUE));
		return void 0 !== e && i.set(e),
		i
	  },
	  Z.prototype.outValueBool = Z.prototype.outBool = function (t, e) {
		const i = this.addOutPort(new V(this, t, U.OP_PORT_TYPE_VALUE, {
		  display: 'bool'
		}));
		return void 0 !== e ? i.set(e) : i.set(!1),
		i
	  },
	  Z.prototype.outValueString = function (t, e) {
		const i = this.addOutPort(new V(this, t, U.OP_PORT_TYPE_VALUE, {
		  type: 'string'
		}));
		return void 0 !== e && i.set(e),
		i
	  },
	  Z.prototype.outString = function (t, e) {
		const i = this.addOutPort(new V(this, t, U.OP_PORT_TYPE_STRING, {
		  type: 'string'
		}));
		return void 0 !== e ? i.set(e) : i.set(''),
		i
	  },
	  Z.prototype.outObject = function (t, e, i) {
		const s = this.addOutPort(new V(this, t, U.OP_PORT_TYPE_OBJECT, {
		  objType: i || null
		}));
		return void 0 !== e && s.set(e),
		s.ignoreValueSerialize = !0,
		s
	  },
	  Z.prototype.outArray = function (t, e) {
		const i = this.addOutPort(new V(this, t, U.OP_PORT_TYPE_ARRAY));
		return void 0 !== e && i.set(e),
		i.ignoreValueSerialize = !0,
		i
	  },
	  Z.prototype.outTexture = function (t, e) {
		const i = this.addOutPort(new V(this, t, U.OP_PORT_TYPE_OBJECT, {
		  preview: !0,
		  objType: 'texture'
		}));
		return void 0 !== e && i.set(e),
		i.ignoreValueSerialize = !0,
		i
	  },
	  Z.prototype.inDynamic = function (t, e, i, s) {
		const r = new V(this, t, U.OP_PORT_TYPE_DYNAMIC, i);
		return r.shouldLink = function (t, i) {
		  if (e && f.isArray(e)) {
			for (let s = 0; s < e.length; s++) {
			  if (t == this && i.type === e[s]) return !0;
			  if (i == this && t.type === e[s]) return !0
			}
			return !1
		  }
		  return !0
		},
		this.addInPort(r),
		void 0 !== s && (r.set(s), r.defaultValue = s),
		r
	  },
	  Z.prototype.printInfo = function () {
		for (let t = 0; t < this.portsIn.length; t++) d.log('in: ' + this.portsIn[t].getName());
		for (const t in this.portsOut) d.log('out: ' + this.portsOut[t].getName())
	  },
	  Z.prototype.getOutChilds = function () {
		const t = [
		];
		for (const e in this.portsOut) for (const i in this.portsOut[e].links) this.portsOut[e].type == U.OP_PORT_TYPE_FUNCTION && t.push(this.portsOut[e].links[i].portIn.parent);
		return t
	  },
	  Z.prototype.markChilds = function () {
		this.marked = !0;
		for (const t in this.portsOut) for (const e in this.portsOut[t].links) this.portsOut[t].parent.marked = !0,
		this.portsOut[t].links[e].portIn.parent != this && this.portsOut[t].links[e].portIn.parent.markChilds()
	  },
	  Z.prototype.selectChilds = function () {
		this.setUiAttrib({
		  selected: !0
		});
		for (const t in this.portsOut) for (const e in this.portsOut[t].links) this.portsOut[t].parent.setUiAttrib({
		  selected: !0
		}),
		this.portsOut[t].links[e].portIn.parent != this && this.portsOut[t].links[e].portIn.parent.selectChilds()
	  },
	  Z.prototype.deleteChilds = function () {
		const t = [
		];
		for (const e in this.portsOut) for (const i in this.portsOut[e].links) this.portsOut[e].links[i].portIn.parent != this && (this.portsOut[e].parent != this && t.push(this.portsOut[e].parent), t.push(this.portsOut[e].links[i].portIn.parent), this.portsOut[e].links[i].portIn.parent.deleteChilds());
		for (const e in t) this.patch.deleteOp(t[e].id)
	  },
	  Z.prototype.removeLinks = function () {
		for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].removeLinks();
		for (let t = 0; t < this.portsOut.length; t++) this.portsOut[t].removeLinks()
	  },
	  Z.prototype.countFittingPorts = function (t) {
		let e = 0;
		for (const i in this.portsOut) J.canLink(t, this.portsOut[i]) && e++;
		for (const i in this.portsIn) J.canLink(t, this.portsIn[i]) && e++;
		return e
	  },
	  Z.prototype.findFittingPort = function (t, e = !1) {
		if (e) {
		  for (const e in this.portsIn) if (J.canLink(t, this.portsIn[e])) return this.portsIn[e];
		  for (const e in this.portsOut) if (J.canLink(t, this.portsOut[e])) return this.portsOut[e]
		} else {
		  for (const e in this.portsOut) if (J.canLink(t, this.portsOut[e])) return this.portsOut[e];
		  for (const e in this.portsIn) if (J.canLink(t, this.portsIn[e])) return this.portsIn[e]
		}
	  },
	  Z.prototype.getSerialized = function (t) {
		const e = {
		};
		this.opId && (e.opId = this.opId),
		e.objName = this.objName,
		e.id = this.id,
		e.uiAttribs = this.uiAttribs,
		this.uiAttribs.title == this._shortOpName && delete this.uiAttribs.title,
		this.uiAttribs.hasOwnProperty('working') && 1 == this.uiAttribs.working && delete this.uiAttribs.working,
		t && this.uiAttribs.hasOwnProperty('uierrors') && delete this.uiAttribs.uierrors,
		e.portsIn = [
		],
		e.portsOut = [
		];
		for (let t = 0; t < this.portsIn.length; t++) e.portsIn.push(this.portsIn[t].getSerialized());
		for (const t in this.portsOut) e.portsOut.push(this.portsOut[t].getSerialized());
		return e
	  },
	  Z.prototype.getFirstOutPortByType = function (t) {
		for (const e in this.portsOut) if (this.portsOut[e].type == t) return this.portsOut[e]
	  },
	  Z.prototype.getPort = Z.prototype.getPortByName = function (t, e) {
		if (e) {
		  for (let e = 0; e < this.portsIn.length; e++) if (this.portsIn[e].getName().toLowerCase() == t) return this.portsIn[e];
		  for (let e = 0; e < this.portsOut.length; e++) if (this.portsOut[e].getName().toLowerCase() == t) return this.portsOut[e]
		} else {
		  for (let e = 0; e < this.portsIn.length; e++) if (this.portsIn[e].getName() == t) return this.portsIn[e];
		  for (let e = 0; e < this.portsOut.length; e++) if (this.portsOut[e].getName() == t) return this.portsOut[e]
		}
	  },
	  Z.prototype.getPortById = function (t) {
		for (let e = 0; e < this.portsIn.length; e++) if (this.portsIn[e].id == t) return this.portsIn[e];
		for (let e = 0; e < this.portsOut.length; e++) if (this.portsOut[e].id == t) return this.portsOut[e]
	  },
	  Z.prototype.updateAnims = function () {
		for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].updateAnim()
	  },
	  Z.prototype.log = function () {
		if (this.patch.silent) return;
		const t = [
		  '[op ' + this._shortOpName + ']'
		];
		t.push.apply(t, arguments),
		Function.prototype.apply.apply(console.log, [
		  console,
		  t
		])
	  },
	  Z.prototype.error = function () {
		if (this.patch.silent) return;
		const t = [
		  '[op ' + this._shortOpName + ']'
		];
		t.push.apply(t, arguments),
		Function.prototype.apply.apply(console.error, [
		  console,
		  t
		])
	  },
	  Z.prototype.warn = function () {
		if (this.patch.silent) return;
		const t = [
		  '[op ' + this._shortOpName + ']'
		];
		t.push.apply(t, arguments),
		Function.prototype.apply.apply(console.warn, [
		  console,
		  t
		])
	  },
	  Z.prototype.unLink = function () {
		for (let t = 0; t < this.portsOut.length; t++) this.portsOut[t].removeLinks();
		for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].removeLinks()
	  },
	  Z.unLinkTempReLinkP1 = null,
	  Z.unLinkTempReLinkP2 = null,
	  Z.prototype.undoUnLinkTemporary = function () {
		if (this.shakeLink && this.shakeLink.remove(), this.shakeLink = null, this.oldLinks) {
		  for (let t = 0; t < this.oldLinks.length; t++) this.patch.link(this.oldLinks[t].in.parent, this.oldLinks[t].in.getName(), this.oldLinks[t].out.parent, this.oldLinks[t].out.getName());
		  this.oldLinks.length = 0
		}
		Z.unLinkTempReLinkP1 = null,
		Z.unLinkTempReLinkP2 = null
	  },
	  Z.prototype.unLinkTemporary = function () {
		let t = 0;
		this.shakeLink = null,
		this.oldLinks = [
		],
		this.portsIn.length > 0 && this.portsIn[0].isLinked() && this.portsOut.length > 0 && this.portsOut[0].isLinked() && this.portsIn[0].getType() == this.portsOut[0].getType() && (Z.unLinkTempReLinkP1 = this.portsIn[0].links[0].getOtherPort(this.portsIn[0]), Z.unLinkTempReLinkP2 = this.portsOut[0].links[0].getOtherPort(this.portsOut[0]));
		for (let e = 0; e < this.portsIn.length; e++) for (t = 0; t < this.portsIn[e].links.length; t++) this.oldLinks.push({
		  in : this.portsIn[e].links[t].portIn,
		  out: this.portsIn[e].links[t].portOut
		});
		for (let e = 0; e < this.portsOut.length; e++) for (t = 0; t < this.portsOut[e].links.length; t++) this.oldLinks.push({
		  in : this.portsOut[e].links[t].portIn,
		  out: this.portsOut[e].links[t].portOut
		});
		this.unLink(),
		Z.unLinkTempReLinkP1 && Z.unLinkTempReLinkP2 && (this.shakeLink = this.patch.link(Z.unLinkTempReLinkP1.parent, Z.unLinkTempReLinkP1.getName(), Z.unLinkTempReLinkP2.parent, Z.unLinkTempReLinkP2.getName()))
	  },
	  Z.prototype.profile = function (t) {
		for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t]._onTriggered = this.portsIn[t]._onTriggeredProfiling,
		this.portsIn[t].set = this.portsIn[t]._onSetProfiling
	  },
	  Z.prototype.findParent = function (t) {
		for (let e = 0; e < this.portsIn.length; e++) if (this.portsIn[e].isLinked()) {
		  if (this.portsIn[e].links[0].portOut.parent.objName == t) return this.portsIn[e].links[0].portOut.parent;
		  let i = null;
		  if (i = this.portsIn[e].links[0].portOut.parent.findParent(t), i) return i
		}
		return null
	  },
	  Z.prototype.cleanUp = function () {
		if (this._instances) {
		  for (let t = 0; t < this._instances.length; t++) this._instances[t].onDelete && this._instances[t].onDelete();
		  this._instances.length = 0
		}
	  },
	  Z.prototype.instanced = function (t) {
		if (0 === this.patch.instancing.numCycles()) return !1;
		let e = 0,
		i = 0;
		if (!this._instances || this._instances.length != this.patch.instancing.numCycles()) {
		  for (this._instances || (this._instances = [
		  ]), d.log('creating instances of ', this.objName, this.patch.instancing.numCycles(), this._instances.length), this._instances.length = this.patch.instancing.numCycles(), e = 0; e < this._instances.length; e++) {
			this._instances[e] = this.patch.createOp(this.objName, !0),
			this._instances[e].instanced = function () {
			  return !1
			},
			this._instances[e].uiAttr(this.uiAttribs);
			for (let t = 0; t < this.portsOut.length; t++) this.portsOut[t].type == U.OP_PORT_TYPE_FUNCTION && (this._instances[e].getPortByName(this.portsOut[t].name).trigger = this.portsOut[t].trigger.bind(this.portsOut[t]))
		  }
		  for (i = 0; i < this.portsIn.length; i++) this.portsIn[i].onChange = null,
		  this.portsIn[i].onValueChanged = null
		}
		for (i = 0; i < this.portsIn.length; i++) this.portsIn[i].type != U.OP_PORT_TYPE_VALUE && this.portsIn[i].type != U.OP_PORT_TYPE_ARRAY || this._instances[this.patch.instancing.index()].portsIn[i].set(this.portsIn[i].get()),
		this.portsIn[i].type,
		U.OP_PORT_TYPE_FUNCTION;
		for (i = 0; i < this.portsOut.length; i++) this.portsOut[i].type == U.OP_PORT_TYPE_VALUE && this.portsOut[i].set(this._instances[this.patch.instancing.index()].portsOut[i].get());
		return !0
	  },
	  Z.prototype.initInstancable = function () {
	  },
	  Z.prototype.setValues = function (t) {
		for (const e in t) {
		  const i = this.getPortByName(e);
		  i ? i.set(t[e]) : d.log('op.setValues: port not found:', e)
		}
	  },
	  Z.prototype.setUiError = function (t, e, i) {
		if (!e && !this.hasUiErrors) return;
		if (!e && !this._uiErrors.hasOwnProperty(t)) return;
		if (this._uiErrors.hasOwnProperty(t) && this._uiErrors[t].txt == e) return;
		t.indexOf(' ') > - 1 && console.warn('setuierror id cant have spaces!'),
		!e && this._uiErrors.hasOwnProperty(t) ? delete this._uiErrors[t] : !e || this._uiErrors.hasOwnProperty(t) && this._uiErrors[t].txt == e || (null == i && (i = 2), this._uiErrors[t] = {
		  txt: e,
		  level: i,
		  id: t
		});
		const s = [
		];
		for (const t in this._uiErrors) s.push(this._uiErrors[t]);
		this.uiAttr({
		  uierrors: s
		}),
		this.hasUiErrors = Object.keys(this._uiErrors).length
	  },
	  Z.prototype.setError = function (t, e) {
		if (console.warn('old error message op.error() - use op.setUiError()'), void 0 === e) this.uiAttr({
		  error: t
		});
		 else if (this._uiErrors[t] != e) {
		  this._uiErrors[t] = e,
		  e || delete this._uiErrors[t];
		  const i = [
		  ];
		  for (const t in this._uiErrors) i.push(this._uiErrors[t]);
		  this.uiAttr({
			errors: i
		  }),
		  console.log(i)
		}
	  },
	  Z.prototype.addListener = Z.prototype.addEventListener = function (t, e) {
		this._eventCallbacks[t] ? this._eventCallbacks[t].push(e) : this._eventCallbacks[t] = [
		  e
		]
	  },
	  Z.prototype.hasEventListener = function (t, e) {
		if (t && e) {
		  if (this._eventCallbacks[t]) {
			return - 1 != this._eventCallbacks[t].indexOf(e)
		  }
		} else d.log('hasListener: missing parameters')
	  },
	  Z.prototype.removeEventListener = function (t, e) {
		if (this._eventCallbacks[t]) {
		  const i = this._eventCallbacks[t].indexOf(e);
		  - 1 == i ? d.log('eventlistener ' + t + ' not found...') : this._eventCallbacks[t].slice(i)
		}
	  },
	  Z.prototype.fireEvent = function (t, e) {
		if (this._eventCallbacks[t]) for (let i = 0; i < this._eventCallbacks[t].length; i++) this._eventCallbacks[t][i] && this._eventCallbacks[t][i].cb(e);
		this.onUiAttrChange && 'onUiAttribsChange' == t && this.onUiAttrChange(e)
	  },
	  Z.prototype.setEnabled = function (t) {
		this.enabled = t,
		this.fireEvent('onEnabledChange', t)
	  },
	  Z.prototype.setPortGroup = function (t, e) {
		for (let i = 0; i < e.length; i++) e[i] && e[i].setUiAttribs ? e[i].setUiAttribs({
		  group: t
		}) : console.error('setPortGroup: invalid port!')
	  },
	  Z.prototype.setUiAxisPorts = function (t, e, i) {
		t && t.setUiAttribs({
		  axis: 'X'
		}),
		e && e.setUiAttribs({
		  axis: 'Y'
		}),
		i && i.setUiAttribs({
		  axis: 'Z'
		})
	  },
	  Z.prototype.removePort = function (t) {
		for (let e = 0; e < this.portsIn.length; e++) if (this.portsIn[e] == t) return this.portsIn.splice(e, 1),
		this.fireEvent('onUiAttribsChange', {
		}),
		void this.fireEvent('onPortRemoved', {
		})
	  },
	  Z.prototype._checkLinksNeededToWork = function () {
	  },
	  Z.prototype.toWorkNeedsParent = function (t) {
		this.patch.isEditorMode() && (this._needsParentOp = t)
	  },
	  Z.prototype.toWorkPortsNeedToBeLinked = function () {
		if (this.patch.isEditorMode()) for (let t = 0; t < arguments.length; t++) - 1 == this._needsLinkedToWork.indexOf(arguments[t]) && this._needsLinkedToWork.push(arguments[t])
	  },
	  Z.prototype.toWorkPortsNeedToBeLinkedReset = function () {
		this.patch.isEditorMode() && (this._needsLinkedToWork.length = 0, this.checkLinkTimeWarnings && this.checkLinkTimeWarnings())
	  },
	  Z.prototype.initVarPorts = function () {
		for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].getVariableName() && this.portsIn[t].setVariable(this.portsIn[t].getVariableName())
	  },
	  Z.prototype.refreshParams = function () {
		this.patch && this.patch.isEditorMode() && this.isCurrentUiOp() && gui.opParams.show(this)
	  },
	  Z.prototype.isCurrentUiOp = function () {
		if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this)
	  }
	}
	Z.getNamespaceClassName = function (t) {
	  return t ? t.startsWith('Ops.Gl') ? 'gl' : t.startsWith('Ops.WebAudio') ? 'audio' : t.startsWith('Ops.Devices') ? 'devices' : t.startsWith('Ops.Html') || t.startsWith('Ops.Sidebar') ? 'html' : t.startsWith('Ops.Math') ? 'math' : t.startsWith('Ops.User') ? 'user' : 'default' : 'default'
	},
	Z.isSubpatchOp = function (t) {
	  return 'Ops.Ui.Patch' == t || 'Ops.Ui.SubPatch' == t
	};
	const $ = new class {
	  constructor() {
		this._lastTime = 0,
		this.pause = !1,
		this.profileUniformCount = 0,
		this.profileShaderBinds = 0,
		this.profileUniformCount = 0,
		this.profileShaderCompiles = 0,
		this.profileVideosPlaying = 0,
		this.profileMVPMatrixCount = 0,
		this.profileEffectBuffercreate = 0,
		this.profileShaderGetUniform = 0,
		this.profileFrameBuffercreate = 0,
		this.profileMeshSetGeom = 0,
		this.profileTextureNew = 0,
		this.profileGenMipMap = 0,
		this.profileOnAnimFrameOps = 0,
		this.profileMainloopMs = 0,
		this.profileMeshDraw = 0,
		this.profileTextureEffect = 0,
		this.profileTexPreviews = 0,
		this.shaderCompileTime = 0,
		this.profileMeshNumElements = 0,
		this.profileMeshAttributes = 0
	  }
	  clear() {
		this.profileMeshAttributes = 0,
		this.profileUniformCount = 0,
		this.profileShaderGetUniform = 0,
		this.profileShaderCompiles = 0,
		this.profileShaderBinds = 0,
		this.profileTextureResize = 0,
		this.profileFrameBuffercreate = 0,
		this.profileEffectBuffercreate = 0,
		this.profileTextureDelete = 0,
		this.profileMeshSetGeom = 0,
		this.profileVideosPlaying = 0,
		this.profileMVPMatrixCount = 0,
		this.profileNonTypedAttrib = 0,
		this.profileNonTypedAttribNames = '',
		this.profileTextureNew = 0,
		this.profileGenMipMap = 0,
		this.profileFramebuffer = 0,
		this.profileMeshDraw = 0,
		this.profileTextureEffect = 0,
		this.profileTexPreviews = 0,
		this.profileMeshNumElements = 0
	  }
	},
	tt = function (t, e) {
	  if (!t) throw new Error('no cgl');
	  this._cgl = t,
	  this.tex = this._cgl.gl.createTexture(),
	  this.id = A(),
	  this.width = 0,
	  this.height = 0,
	  this.loading = !1,
	  this.flip = !0,
	  this.flipped = !1,
	  this.shadowMap = !1,
	  this.anisotropic = 0,
	  this.filter = tt.FILTER_NEAREST,
	  this.wrap = tt.WRAP_CLAMP_TO_EDGE,
	  this.texTarget = this._cgl.gl.TEXTURE_2D,
	  e && e.type && (this.texTarget = e.type),
	  this.textureType = tt.TYPE_DEFAULT,
	  this.unpackAlpha = !0,
	  this._fromData = !0,
	  this.name = 'unknown',
	  e ? (this.name = e.name || this.name, e.isDepthTexture && (this.textureType = tt.TYPE_DEPTH), e.isFloatingPointTexture && (this.textureType = tt.TYPE_FLOAT), 'textureType' in e && (this.textureType = e.textureType), 'filter' in e && (this.filter = e.filter), 'wrap' in e && (this.wrap = e.wrap), 'unpackAlpha' in e && (this.unpackAlpha = e.unpackAlpha), 'flip' in e && (this.flip = e.flip), 'shadowMap' in e && (this.shadowMap = e.shadowMap), 'anisotropic' in e && (this.anisotropic = e.anisotropic)) : e = {
	  },
	  e.width || (e.width = 8),
	  e.height || (e.height = 8),
	  $.profileTextureNew++,
	  this.setSize(e.width, e.height)
	};
	tt.prototype.compareSettings = function (t) {
	  return !!t && (t.width == this.width && t.height == this.height && t.filter == this.filter && t.wrap == this.wrap && t.textureType == this.textureType && t.unpackAlpha == this.unpackAlpha && t.flip == this.flip)
	},
	tt.prototype.clone = function () {
	  const t = new tt(this._cgl, {
		name: this.name,
		filter: this.filter,
		wrap: this.wrap,
		textureType: this.textureType,
		unpackAlpha: this.unpackAlpha,
		flip: this.flip,
		width: this.width,
		height: this.height
	  });
	  return this.compareSettings(t) || (console.error('Cloned texture settings do not compare!'), d.log(this), d.log(t)),
	  t
	},
	tt.prototype.setSize = function (t, e) {
	  if ((t != t || t <= 0 || !t) && (t = 8), (e != e || e <= 0 || !e) && (e = 8), (t > this._cgl.maxTexSize || e > this._cgl.maxTexSize) && console.error('texture size too big! ' + t + 'x' + e + ' / max: ' + this._cgl.maxTexSize), t = Math.min(t, this._cgl.maxTexSize), e = Math.min(e, this._cgl.maxTexSize), t = Math.floor(t), e = Math.floor(e), this.width == t && this.height == e) return;
	  this.width = t,
	  this.height = e,
	  this._cgl.gl.bindTexture(this.texTarget, this.tex),
	  $.profileTextureResize++;
	  if (this.textureType != tt.TYPE_FLOAT || this.filter != tt.FILTER_LINEAR || this._cgl.gl.getExtension('OES_texture_float_linear') || (console.warn('this graphics card does not support floating point texture linear interpolation! using NEAREST'), this.filter = tt.FILTER_NEAREST), this._setFilter(), this.textureType == tt.TYPE_FLOAT) if (1 == this._cgl.glVersion) if (this._cgl.glUseHalfFloatTex) {
		const i = this._cgl.gl.getExtension('OES_texture_half_float');
		if (1 == this._cgl.glVersion && !i) throw new Error('no half float texture extension');
		this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, i.HALF_FLOAT_OES, null)
	  } else {
		this._cgl.gl.getExtension('OES_texture_float');
		this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null)
	  } else this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA32F, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null);
	   else if (this.textureType == tt.TYPE_DEPTH) if (1 == this._cgl.glVersion) {
		const i = this._cgl.gl.DEPTH_COMPONENT;
		this._cgl.gl.texImage2D(this.texTarget, 0, i, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.UNSIGNED_SHORT, null)
	  } else {
		const i = this._cgl.gl.DEPTH_COMPONENT32F;
		this._cgl.gl.texImage2D(this.texTarget, 0, i, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.FLOAT, null)
	  } else this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, null);
	  this._cgl.printError('cgltex') && (this.printInfo(), console.log((new Error).stack)),
	  this.updateMipMap(),
	  this._cgl.gl.bindTexture(this.texTarget, null)
	},
	tt.prototype.initFromData = function (t, e, i, s, r) {
	  this.filter = s,
	  this.wrap = r,
	  null == s && (this.filter = tt.FILTER_LINEAR),
	  null == r && (this.wrap = tt.CLAMP_TO_EDGE),
	  this.width = e,
	  this.height = i,
	  this._fromData = !0,
	  this._cgl.gl.bindTexture(this.texTarget, this.tex),
	  this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, e, i, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t),
	  this._setFilter(),
	  this.updateMipMap(),
	  this._cgl.gl.bindTexture(this.texTarget, null)
	},
	tt.prototype.updateMipMap = function () {
	  2 != this._cgl.glVersion && !this.isPowerOfTwo() || this.filter != tt.FILTER_MIPMAP || (this._cgl.gl.generateMipmap(this.texTarget), $.profileGenMipMap++)
	},
	tt.prototype.initTexture = function (t, e) {
	  this._cgl.checkFrameStarted('texture inittexture'),
	  this._fromData = !1,
	  this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha),
	  t.width && (this.width = t.width),
	  t.height && (this.height = t.height),
	  e && (this.filter = e),
	  t.width > this._cgl.maxTexSize && console.error('[cgl_texture] texture size to big!!!', t.width, this._cgl.maxTexSize),
	  t.height > this._cgl.maxTexSize && console.error('[cgl_texture] texture size to big!!!', t.height, this._cgl.maxTexSize),
	  this._cgl.gl.bindTexture(this.texTarget, this.tex),
	  this.flipped = !this.flip,
	  this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flipped),
	  this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t),
	  this._setFilter(),
	  this.updateMipMap(),
	  this._cgl.gl.bindTexture(this.texTarget, null),
	  this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1)
	},
	tt.prototype.delete = function () {
	  this.loading ? setTimeout(this.delete.bind(this), 50) : (this.width = 0, this.height = 0, $.profileTextureDelete++, this._cgl.gl.deleteTexture(this.tex))
	},
	tt.prototype.isPowerOfTwo = function () {
	  return tt.isPowerOfTwo(this.width) && tt.isPowerOfTwo(this.height)
	},
	tt.prototype.printInfo = function () {
	  d.log(this.getInfo())
	},
	tt.prototype.getInfoReadable = function () {
	  const t = this.getInfo();
	  let e = '';
	  t.name = t.name.substr(0, t.name.indexOf('?rnd='));
	  for (const i in t) e += '* ' + i + ':  **' + t[i] + '**\n';
	  return e
	},
	tt.prototype.getInfo = function () {
	  const t = {
	  };
	  t.name = this.name,
	  t['power of two'] = this.isPowerOfTwo(),
	  t.size = this.width + ' x ' + this.height;
	  let e = this.texTarget;
	  return this.texTarget == this._cgl.gl.TEXTURE_2D && (e = 'TEXTURE_2D'),
	  t.target = e,
	  t.unpackAlpha = this.unpackAlpha,
	  this.textureType == tt.TYPE_FLOAT ? t.textureType = 'TYPE_FLOAT' : this.textureType == tt.TYPE_DEPTH ? t.textureType = 'TYPE_DEPTH' : this.textureType == tt.TYPE_DEFAULT ? t.textureType = 'TYPE_DEFAULT' : t.textureType = 'UNKNOWN',
	  this.wrap == tt.WRAP_CLAMP_TO_EDGE ? t.wrap = 'CLAMP_TO_EDGE' : this.wrap == tt.WRAP_REPEAT ? t.wrap = 'WRAP_REPEAT' : this.wrap == tt.WRAP_MIRRORED_REPEAT ? t.wrap = 'WRAP_MIRRORED_REPEAT' : t.wrap = 'UNKNOWN',
	  this.filter == tt.FILTER_NEAREST ? t.filter = 'FILTER_NEAREST' : this.filter == tt.FILTER_LINEAR ? t.filter = 'FILTER_LINEAR' : this.filter == tt.FILTER_MIPMAP ? t.filter = 'FILTER_MIPMAP' : t.filter = 'UNKNOWN',
	  t
	},
	tt.prototype._setFilter = function () {
	  if (this._fromData || this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha), this.shadowMap && (d.log('shadowmap tex'), this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE), this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL)), this.textureType == tt.TYPE_FLOAT && this.filter == tt.FILTER_MIPMAP && (d.log('texture: HDR and mipmap filtering at the same time is not possible'), this.filter = tt.FILTER_LINEAR, d.stack()), 1 != this._cgl.glVersion || this.isPowerOfTwo()) {
		if (this.wrap == tt.WRAP_CLAMP_TO_EDGE ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE)) : this.wrap == tt.WRAP_REPEAT ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT)) : this.wrap == tt.WRAP_MIRRORED_REPEAT && (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT)), this.filter == tt.FILTER_NEAREST) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST),
		this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);
		 else if (this.filter == tt.FILTER_LINEAR) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR),
		this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
		 else {
		  if (this.filter != tt.FILTER_MIPMAP) throw d.log('unknown texture filter!', this.filter),
		  new Error('unknown texture filter!' + this.filter);
		  this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR),
		  this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR)
		}
		if (this.anisotropic) {
		  const t = this._cgl.gl.getExtension('EXT_texture_filter_anisotropic');
		  if (t) {
			const e = this._cgl.gl.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
			this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, t.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e, this.anisotropic))
		  }
		}
	  } else this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST),
	  this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST),
	  this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE),
	  this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE),
	  this.filter = tt.FILTER_NEAREST,
	  this.wrap = tt.WRAP_CLAMP_TO_EDGE
	},
	tt.load = function (t, e, i, s) {
	  const r = t.patch.loading.start('texture', e),
	  n = new tt(t);
	  return n.name = e,
	  t.patch.isEditorMode() && gui.jobs().start({
		id: 'loadtexture' + r,
		title: 'loading texture ' + CABLES.basename(e)
	  }),
	  n.image = new Image,
	  n.image.crossOrigin = 'anonymous',
	  n.loading = !0,
	  s && s.hasOwnProperty('filter') && (n.filter = s.filter),
	  s && s.hasOwnProperty('flip') && (n.flip = s.flip),
	  s && s.hasOwnProperty('wrap') && (n.wrap = s.wrap),
	  s && s.hasOwnProperty('anisotropic') && (n.anisotropic = s.anisotropic),
	  s && s.hasOwnProperty('unpackAlpha') && (n.unpackAlpha = s.unpackAlpha),
	  n.image.onabort = n.image.onerror = s=>{
		d.warn('[cgl.texture.load] error loading texture', e, s),
		n.loading = !1,
		t.patch.loading.finished(r);
		i && i({
		  error: !0
		}),
		t.patch.isEditorMode() && gui.jobs().finish('loadtexture' + r)
	  },
	  n.image.onload = function (e) {
		t.addNextFrameOnceCallback(() =>{
		  n.initTexture(n.image),
		  t.patch.loading.finished(r),
		  n.loading = !1,
		  t.patch.isEditorMode() && gui.jobs().finish('loadtexture' + r),
		  i && i(null, n)
		})
	  },
	  n.image.src = e,
	  n
	},
	tt.getTempTexture = function (t) {
	  return t || console.error('[getTempTexture] no cgl!'),
	  t.tempTexture || (t.tempTexture = tt.getTemporaryTexture(t, 256, tt.FILTER_LINEAR, tt.REPEAT)),
	  t.tempTexture
	},
	tt.getEmptyTexture = function (t) {
	  if (t || console.error('[getEmptyTexture] no cgl!'), t.tempTextureEmpty) return t.tempTextureEmpty;
	  t.tempTextureEmpty = new tt(t, {
		name: 'emptyTexture'
	  });
	  const e = new Uint8Array(256);
	  return t.tempTextureEmpty.initFromData(e, 8, 8, tt.FILTER_NEAREST, tt.WRAP_REPEAT),
	  t.tempTextureEmpty
	},
	tt.getRandomTexture = function (t) {
	  if (t || console.error('[getRandomTexture] no cgl!'), t.randomTexture) return t.randomTexture;
	  const e = new Uint8Array(262144);
	  for (let t = 0; t < 65536; t++) e[4 * t + 0] = 255 * Math.random(),
	  e[4 * t + 1] = 255 * Math.random(),
	  e[4 * t + 2] = 255 * Math.random(),
	  e[4 * t + 3] = 255;
	  return t.randomTexture = new tt(t),
	  t.randomTexture.initFromData(e, 256, 256, tt.FILTER_NEAREST, tt.WRAP_REPEAT),
	  t.randomTexture
	},
	tt.getTempGradientTexture = function (t) {
	  if (t || console.error('[getTempGradientTexture] no cgl!'), t.tempTextureGradient) return t.tempTextureGradient;
	  const e = new tt(t),
	  i = new Uint8Array(262144);
	  for (let t = 0; t < 256; t++) for (let e = 0; e < 256; e++) i[4 * (e + 256 * t) + 0] = i[4 * (e + 256 * t) + 1] = i[4 * (e + 256 * t) + 2] = 255 - t,
	  i[4 * (e + 256 * t) + 3] = 255;
	  return e.initFromData(i, 256, 256, tt.FILTER_NEAREST, tt.WRAP_REPEAT),
	  t.tempTextureGradient = e,
	  e
	},
	tt.getTemporaryTexture = function (t, e, i, s) {
	  const r = new tt(t),
	  n = [
	  ];
	  for (let t = 0; t < e; t++) for (let i = 0; i < e; i++) (i + t) % 64 < 32 ? (n.push(200 + t / e * 25 + i / e * 25), n.push(200 + t / e * 25 + i / e * 25), n.push(200 + t / e * 25 + i / e * 25)) : (n.push(40 + t / e * 25 + i / e * 25), n.push(40 + t / e * 25 + i / e * 25), n.push(40 + t / e * 25 + i / e * 25)),
	  n.push(255);
	  const o = new Uint8Array(n);
	  return r.initFromData(o, e, e, i, s),
	  r
	},
	tt.createFromImage = function (t, e, i) {
	  const s = new tt(t, i = i || {
	  });
	  return s.flip = !1,
	  s.image = e,
	  s.width = e.width,
	  s.height = e.height,
	  s.initTexture(e, i.filter),
	  s
	},
	tt.fromImage = function (t, e, i, s) {
	  d.error('deprecated texture from image...');
	  const r = new tt(t);
	  return r.flip = !1,
	  i && (r.filter = i),
	  s && (r.wrap = s),
	  r.image = e,
	  r.initTexture(e),
	  r
	},
	tt.isPowerOfTwo = function (t) {
	  return 1 == t || 2 == t || 4 == t || 8 == t || 16 == t || 32 == t || 64 == t || 128 == t || 256 == t || 512 == t || 1024 == t || 2048 == t || 4096 == t || 8192 == t || 16384 == t
	},
	tt.FILTER_NEAREST = 0,
	tt.FILTER_LINEAR = 1,
	tt.FILTER_MIPMAP = 2,
	tt.WRAP_REPEAT = 0,
	tt.WRAP_MIRRORED_REPEAT = 1,
	tt.WRAP_CLAMP_TO_EDGE = 2,
	tt.TYPE_DEFAULT = 0,
	tt.TYPE_DEPTH = 1,
	tt.TYPE_FLOAT = 2;
	const et = function (t, e, i, s) {
	  this.Framebuffer2DrawTargetsDefault = null,
	  this.Framebuffer2BlittingFramebuffer = null,
	  this.Framebuffer2FinalFramebuffer = null,
	  this._cgl = t,
	  this._width = 0,
	  this._height = 0,
	  this._depthRenderbuffer = null,
	  this._frameBuffer = null,
	  this._textureFrameBuffer = null,
	  this._colorRenderbuffers = [
	  ],
	  this._drawTargetArray = [
	  ],
	  this.Framebuffer2BlittingFramebuffer || (this.Framebuffer2BlittingFramebuffer = t.gl.createFramebuffer()),
	  this.Framebuffer2FinalFramebuffer || (this.Framebuffer2FinalFramebuffer = t.gl.createFramebuffer()),
	  this.Framebuffer2DrawTargetsDefault || (this.Framebuffer2DrawTargetsDefault = [
		t.gl.COLOR_ATTACHMENT0
	  ]),
	  this._options = s || {
		isFloatingPointTexture: !1
	  },
	  this.name = this._options.name || 'unknown',
	  this._options.hasOwnProperty('numRenderBuffers') || (this._options.numRenderBuffers = 1),
	  this._options.hasOwnProperty('depth') || (this._options.depth = !0),
	  this._options.hasOwnProperty('clear') || (this._options.clear = !0),
	  this._options.hasOwnProperty('multisampling') || (this._options.multisampling = !1, this._options.multisamplingSamples = 0),
	  this._options.multisamplingSamples && (this._cgl.glSlowRenderer && (this._options.multisamplingSamples = 0), this._cgl.gl.MAX_SAMPLES ? this._options.multisamplingSamples = Math.min(this._cgl.maxSamples, this._options.multisamplingSamples) : this._options.multisamplingSamples = 0),
	  this._options.hasOwnProperty('filter') || (this._options.filter = tt.FILTER_LINEAR),
	  this._options.hasOwnProperty('wrap') || (this._options.wrap = tt.WRAP_REPEAT),
	  this._numRenderBuffers = this._options.numRenderBuffers,
	  this._colorTextures = [
	  ];
	  for (let e = 0; e < this._numRenderBuffers; e++) this._colorTextures[e] = new tt(t, {
		name: 'fb2 ' + this.name + ' ' + e,
		isFloatingPointTexture: this._options.isFloatingPointTexture,
		filter: this._options.filter,
		wrap: this._options.wrap
	  });
	  let r = tt.FILTER_NEAREST;
	  this._options.shadowMap && (r = tt.FILTER_LINEAR);
	  this._options.depth && (this._textureDepth = new tt(t, {
		name: 'fb2 depth ' + this.name,
		isDepthTexture: !0,
		filter: r,
		shadowMap: this._options.shadowMap || !1,
		width: e || 512,
		height: i || 512
	  })),
	  t.aborted || this.setSize(e || 512, i || 512)
	};
	et.prototype.getWidth = function () {
	  return this._width
	},
	et.prototype.getHeight = function () {
	  return this._height
	},
	et.prototype.getGlFrameBuffer = function () {
	  return this._frameBuffer
	},
	et.prototype.getDepthRenderBuffer = function () {
	  return this._depthRenderbuffer
	},
	et.prototype.getTextureColor = function () {
	  return this._colorTextures[0]
	},
	et.prototype.getTextureColorNum = function (t) {
	  return this._colorTextures[t]
	},
	et.prototype.getTextureDepth = function () {
	  return this._textureDepth
	},
	et.prototype.setFilter = function (t) {
	  for (let e = 0; e < this._numRenderBuffers; e++) this._colorTextures[e].filter = t,
	  this._colorTextures[e].setSize(this._width, this._height)
	},
	et.prototype.delete = et.prototype.dispose = function () {
	  let t = 0;
	  for (t = 0; t < this._numRenderBuffers; t++) this._colorTextures[t].delete();
	  for (this._textureDepth && this._textureDepth.delete(), t = 0; t < this._numRenderBuffers; t++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[t]);
	  this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),
	  this._cgl.gl.deleteFramebuffer(this._frameBuffer),
	  this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
	},
	et.prototype.setSize = function (t, e) {
	  let i = 0;
	  if (this._width = Math.floor(t), this._height = Math.floor(e), this._width = Math.min(this._width, this._cgl.maxTexSize), this._height = Math.min(this._height, this._cgl.maxTexSize), $.profileFrameBuffercreate++, this._frameBuffer) {
		for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
		this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),
		this._cgl.gl.deleteFramebuffer(this._frameBuffer),
		this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
	  }
	  this._frameBuffer = this._cgl.gl.createFramebuffer(),
	  this._textureFrameBuffer = this._cgl.gl.createFramebuffer();
	  const s = this._options.depth;
	  for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].setSize(this._width, this._height);
	  for (i = 0; i < this._numRenderBuffers; i++) {
		const t = this._cgl.gl.createRenderbuffer();
		this._cgl.gl.getExtension('EXT_color_buffer_float');
		this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer),
		this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, t),
		this._options.isFloatingPointTexture ? this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.RGBA32F, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA32F, this._width, this._height) : this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.RGBA8, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA8, this._width, this._height),
		this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, t),
		this._colorRenderbuffers[i] = t
	  }
	  for (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer), i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
	  this._options.depth && this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0),
	  this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
	  let r = this._cgl.gl.DEPTH_COMPONENT32F;
	  for (this._cgl.glSlowRenderer && (r = this._cgl.gl.DEPTH_COMPONENT16), s && (this._textureDepth.setSize(this._width, this._height), this._depthRenderbuffer = this._cgl.gl.createRenderbuffer(), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer), this._options.isFloatingPointTexture, this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, r, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, r, this._width, this._height), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer)), this._drawTargetArray.length = 0, i = 0; i < this._numRenderBuffers; i++) this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);
	  const n = this._cgl.printError('fb setsize1');
	  n && console.log(n),
	  this._cgl.gl.isFramebuffer(this._textureFrameBuffer) || console.warn('invalid framebuffer');
	  const o = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);
	  if (o != this._cgl.gl.FRAMEBUFFER_COMPLETE) switch (console.log('framebuffer incomplete: ' + this.name, this), o) {
		case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
		  throw d.warn('FRAMEBUFFER_INCOMPLETE_ATTACHMENT...', this),
		  new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT');
		case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
		  throw d.warn('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'),
		  new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT');
		case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
		  throw d.warn('FRAMEBUFFER_INCOMPLETE_DIMENSIONS'),
		  new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS');
		case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
		  throw d.warn('FRAMEBUFFER_UNSUPPORTED'),
		  new Error('Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED');
		default:
		  throw d.warn('incomplete framebuffer', o),
		  new Error('Incomplete framebuffer: ' + o)
	  }
	  this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null),
	  this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null),
	  this._cgl.printError('fb setsize')
	},
	et.prototype.renderStart = function () {
	  this._cgl.checkFrameStarted('fb2 renderstart'),
	  this._cgl.pushModelMatrix(),
	  this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer),
	  this._cgl.pushGlFrameBuffer(this._frameBuffer),
	  this._cgl.pushFrameBuffer(this),
	  this._cgl.pushPMatrix(),
	  this._cgl.gl.viewport(0, 0, this._width, this._height),
	  this._cgl.gl.drawBuffers(this._drawTargetArray),
	  this._options.clear && (this._cgl.gl.clearColor(0, 0, 0, 0), this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT))
	},
	et.prototype.renderEnd = function () {
	  if (this._cgl.popPMatrix(), $.profileFramebuffer++, this._numRenderBuffers <= 1) this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer),
	  this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer),
	  this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [
		0,
		0,
		0,
		1
	  ]),
	  this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT, this._cgl.gl.NEAREST);
	   else {
		this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer),
		this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer),
		this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer),
		this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);
		for (let t = 0; t < this._numRenderBuffers; t++) {
		  this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer),
		  this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.RENDERBUFFER, this._colorRenderbuffers[t]),
		  this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer),
		  this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._colorTextures[t].tex, 0),
		  this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null),
		  this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer),
		  this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer),
		  this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [
			0,
			0,
			0,
			1
		  ]);
		  let e = this._cgl.gl.COLOR_BUFFER_BIT;
		  0 == t && (e |= this._cgl.gl.DEPTH_BUFFER_BIT),
		  this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, e, this._cgl.gl.NEAREST)
		}
	  }
	  if (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()), this._cgl.popFrameBuffer(), this._cgl.popModelMatrix(), this._cgl.resetViewPort(), this._colorTextures[0].filter == tt.FILTER_MIPMAP) for (let t = 0; t < this._numRenderBuffers; t++) this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[t].tex),
	  this._colorTextures[t].updateMipMap(),
	  this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)
	};
	class it {
	  constructor(t) {
		this._max = [
		  - Number.MAX_VALUE,
		  - Number.MAX_VALUE,
		  - Number.MAX_VALUE
		],
		this._min = [
		  Number.MAX_VALUE,
		  Number.MAX_VALUE,
		  Number.MAX_VALUE
		],
		this._center = [
		],
		this._size = [
		],
		this._first = !0,
		this._wireMesh = null,
		t && this.apply(t)
	  }
	  get maxAxis() {
		return this._maxAxis
	  }
	  get size() {
		return this._size
	  }
	  get center() {
		return this._center
	  }
	  get x() {
		return this._center[0]
	  }
	  get y() {
		return this._center[1]
	  }
	  get z() {
		return this._center[2]
	  }
	  get minX() {
		return this._min[0]
	  }
	  get minY() {
		return this._min[1]
	  }
	  get minZ() {
		return this._min[2]
	  }
	  get maxX() {
		return this._max[0]
	  }
	  get maxY() {
		return this._max[1]
	  }
	  get maxZ() {
		return this._max[2]
	  }
	  apply(t, e) {
		if (t) {
		  if (t instanceof it) {
			const e = t;
			this.applyPos(e.maxX, e.maxY, e.maxZ),
			this.applyPos(e.minX, e.minY, e.minZ)
		  } else {
			let e = 0;
			for (e = 0; e < t.vertices.length; e += 3) t.vertices[e + 0] == t.vertices[e + 0] && this.applyPos(t.vertices[e + 0], t.vertices[e + 1], t.vertices[e + 2])
		  }
		  this.calcCenterSize()
		}
	  }
	  copy() {
		return new it(this)
	  }
	  get changed() {
		return !(this._max[0] == - Number.MAX_VALUE && this._max[1] == - Number.MAX_VALUE && this._max[2] == - Number.MAX_VALUE)
	  }
	  applyPos(t, e, i) {
		if (this._first) return this._max[0] = t,
		this._max[1] = e,
		this._max[2] = i,
		this._min[0] = t,
		this._min[1] = e,
		this._min[2] = i,
		void (this._first = !1);
		this._max[0] = Math.max(this._max[0], t),
		this._max[1] = Math.max(this._max[1], e),
		this._max[2] = Math.max(this._max[2], i),
		this._min[0] = Math.min(this._min[0], t),
		this._min[1] = Math.min(this._min[1], e),
		this._min[2] = Math.min(this._min[2], i)
	  }
	  calcCenterSize() {
		this._size[0] = this._max[0] - this._min[0],
		this._size[1] = this._max[1] - this._min[1],
		this._size[2] = this._max[2] - this._min[2],
		this._center[0] = (this._min[0] + this._max[0]) / 2,
		this._center[1] = (this._min[1] + this._max[1]) / 2,
		this._center[2] = (this._min[2] + this._max[2]) / 2,
		this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1]))
	  }
	  mulMat4(t) {
		vec3.transformMat4(this._max, this._max, t),
		vec3.transformMat4(this._min, this._min, t),
		this.calcCenterSize()
	  }
	  render(t, e) {
		this._wireMesh || (this._wireMesh = new CGL.WireCube(t)),
		t.pushModelMatrix(),
		mat4.translate(t.mMatrix, t.mMatrix, this._center),
		this._wireMesh.render(t, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2),
		t.popModelMatrix()
	  }
	}
	const st = function (t) {
	  this.name = t,
	  this.faceVertCount = 3,
	  this._vertices = [
	  ],
	  this.verticesIndices = [
	  ],
	  this.texCoords = new Float32Array,
	  this.texCoordsIndices = [
	  ],
	  this.vertexNormals = [
	  ],
	  this.tangents = [
	  ],
	  this.biTangents = [
	  ],
	  this.barycentrics = [
	  ],
	  this.morphTargets = [
	  ],
	  this.vertexColors = [
	  ],
	  this._attributes = {
	  },
	  this.glPrimitive = null,
	  Object.defineProperty(this, 'vertices', {
		get() {
		  return this._vertices
		},
		set(t) {
		  this.setVertices(t)
		}
	  })
	};
	st.prototype.clear = function () {
	  this.vertices = new Float32Array([]),
	  this.verticesIndices.length = 0,
	  this.texCoords = new Float32Array([]),
	  this.texCoordsIndices.length = 0,
	  this.vertexNormals = new Float32Array([])
	},
	st.prototype.getAttributes = function () {
	  return this._attributes
	},
	st.prototype.getAttribute = function (t) {
	  for (const e in this._attributes) if (this._attributes[e].name == t) return this._attributes[e];
	  return null
	},
	st.prototype.setAttribute = function (t, e, i) {
	  let s = '';
	  1 == i ? s = 'float' : 2 == i ? s = 'vec2' : 3 == i ? s = 'vec3' : 4 == i && (s = 'vec4');
	  const r = {
		name: t,
		data: e,
		itemSize: i,
		type: s
	  };
	  this._attributes[t] = r
	},
	st.prototype.setVertices = function (t) {
	  t instanceof Float32Array ? this._vertices = t : this._vertices = new Float32Array(t)
	},
	st.prototype.setTexCoords = function (t) {
	  t instanceof Float32Array ? this.texCoords = t : this.texCoords = new Float32Array(t)
	},
	st.prototype.calcNormals = function (t) {
	  t || this.unIndex(),
	  this.calculateNormals({
	  })
	},
	st.prototype.setPointVertices = function (t) {
	  if (t.length % 3 == 0) {
		t instanceof Float32Array ? this.vertices = t : this.vertices = new Float32Array(t),
		this.texCoords instanceof Float32Array || (this.texCoords = new Float32Array(t.length / 3 * 2)),
		this.verticesIndices.length = t.length / 3;
		for (let e = 0; e < t.length / 3; e++) this.verticesIndices[e] = e,
		this.texCoords[2 * e] = 0,
		this.texCoords[2 * e + 1] = 0
	  } else console.error('CGL MESH : SetPointVertices: Array must be multiple of three.')
	},
	st.prototype.merge = function (t) {
	  if (!t) return;
	  const e = this.verticesIndices.length,
	  i = this.vertices.length / 3;
	  this.verticesIndices.length = this.verticesIndices.length + t.verticesIndices.length;
	  for (let s = 0; s < t.verticesIndices.length; s++) this.verticesIndices[e + s] = t.verticesIndices[s] + i;
	  this.vertices = f.float32Concat(this.vertices, t.vertices),
	  this.texCoords = f.float32Concat(this.texCoords, t.texCoords),
	  this.vertexNormals = f.float32Concat(this.vertexNormals, t.vertexNormals),
	  this.tangents = f.float32Concat(this.tangents, t.tangents),
	  this.bitangents = f.float32Concat(this.bitangents, t.bitangents)
	},
	st.prototype.copy = function () {
	  let t = 0;
	  const e = new st;
	  if (e.faceVertCount = this.faceVertCount, e.setVertices(this._vertices.slice(0)), this.verticesIndices) for (e.verticesIndices.length = this.verticesIndices.length, t = 0; t < this.verticesIndices.length; t++) e.verticesIndices[t] = this.verticesIndices[t];
	  for (e.texCoords = new Float32Array(this.texCoords.length), t = 0; t < this.texCoords.length; t++) e.texCoords[t] = this.texCoords[t];
	  for (e.texCoordsIndices.length = this.texCoordsIndices.length, t = 0; t < this.texCoordsIndices.length; t++) e.texCoordsIndices[t] = this.texCoordsIndices[t];
	  for (e.vertexNormals = new Float32Array(this.vertexNormals.length), t = 0; t < this.vertexNormals.length; t++) e.vertexNormals[t] = this.vertexNormals[t];
	  if (this.tangents) for (e.tangents = [
	  ], e.tangents.length = this.tangents.length, t = 0; t < this.tangents.length; t++) e.tangents[t] = this.tangents[t];
	  if (this.biTangents) for (e.biTangents = [
	  ], e.biTangents.length = this.biTangents.length, t = 0; t < this.biTangents.length; t++) e.biTangents[t] = this.biTangents[t];
	  for (e.barycentrics.length = this.barycentrics.length, t = 0; t < this.barycentrics.length; t++) e.barycentrics[t] = this.barycentrics[t];
	  for (e.morphTargets.length = this.morphTargets.length, t = 0; t < this.morphTargets.length; t++) e.morphTargets[t] = this.morphTargets[t];
	  for (e.vertexColors.length = this.vertexColors.length, t = 0; t < this.vertexColors.length; t++) e.vertexColors[t] = this.vertexColors[t];
	  return e
	},
	st.prototype.calculateNormals = function (t) {
	  const e = vec3.create(),
	  i = vec3.create(),
	  s = vec3.create();
	  function r(r) {
		return vec3.subtract(e, r[0], r[1]),
		vec3.subtract(i, r[0], r[2]),
		vec3.cross(s, e, i),
		vec3.normalize(s, s),
		t && t.forceZUp && s[2] < 0 && (s[0] *= - 1, s[1] *= - 1, s[2] *= - 1),
		s
	  }
	  this.getVertexVec = function (t) {
		const e = [
		  0,
		  0,
		  0
		];
		return e[0] = this.vertices[3 * t + 0],
		e[1] = this.vertices[3 * t + 1],
		e[2] = this.vertices[3 * t + 2],
		e
	  },
	  this.vertexNormals instanceof Float32Array && this.vertexNormals.length == this.vertices.length || (this.vertexNormals = new Float32Array(this.vertices.length));
	  for (let t = 0; t < this.vertices.length; t++) this.vertexNormals[t] = 0;
	  if (this.isIndexed()) {
		const t = [
		];
		t.length = this.verticesIndices.length / 3;
		for (let e = 0; e < this.verticesIndices.length; e += 3) {
		  const i = [
			this.getVertexVec(this.verticesIndices[e + 0]),
			this.getVertexVec(this.verticesIndices[e + 1]),
			this.getVertexVec(this.verticesIndices[e + 2])
		  ];
		  t[e / 3] = r(i),
		  this.vertexNormals[3 * this.verticesIndices[e + 0] + 0] += t[e / 3][0],
		  this.vertexNormals[3 * this.verticesIndices[e + 0] + 1] += t[e / 3][1],
		  this.vertexNormals[3 * this.verticesIndices[e + 0] + 2] += t[e / 3][2],
		  this.vertexNormals[3 * this.verticesIndices[e + 1] + 0] += t[e / 3][0],
		  this.vertexNormals[3 * this.verticesIndices[e + 1] + 1] += t[e / 3][1],
		  this.vertexNormals[3 * this.verticesIndices[e + 1] + 2] += t[e / 3][2],
		  this.vertexNormals[3 * this.verticesIndices[e + 2] + 0] += t[e / 3][0],
		  this.vertexNormals[3 * this.verticesIndices[e + 2] + 1] += t[e / 3][1],
		  this.vertexNormals[3 * this.verticesIndices[e + 2] + 2] += t[e / 3][2]
		}
		for (let t = 0; t < this.verticesIndices.length; t += 3) for (let e = 0; e < 3; e++) {
		  const i = [
			this.vertexNormals[3 * this.verticesIndices[t + e] + 0],
			this.vertexNormals[3 * this.verticesIndices[t + e] + 1],
			this.vertexNormals[3 * this.verticesIndices[t + e] + 2]
		  ];
		  vec3.normalize(i, i),
		  this.vertexNormals[3 * this.verticesIndices[t + e] + 0] = i[0],
		  this.vertexNormals[3 * this.verticesIndices[t + e] + 1] = i[1],
		  this.vertexNormals[3 * this.verticesIndices[t + e] + 2] = i[2]
		}
	  } else {
		const t = [
		];
		for (let e = 0; e < this.vertices.length; e += 9) {
		  const i = r([[this.vertices[e + 0],
		  this.vertices[e + 1],
		  this.vertices[e + 2]],
		  [
			this.vertices[e + 3],
			this.vertices[e + 4],
			this.vertices[e + 5]
		  ],
		  [
			this.vertices[e + 6],
			this.vertices[e + 7],
			this.vertices[e + 8]
		  ]]);
		  t.push(i[0], i[1], i[2], i[0], i[1], i[2], i[0], i[1], i[2])
		}
		this.vertexNormals = t
	  }
	},
	st.prototype.calcTangentsBitangents = function () {
	  if (!this.vertices.length) return void console.error('Cannot calculate tangents/bitangents without vertices.');
	  if (!this.vertexNormals.length) return void console.error('Cannot calculate tangents/bitangents without normals.');
	  if (!this.texCoords.length) {
		console.warn('No texcoords. Replacing with default values [0, 0].');
		const t = this.vertices.length / 3 * 2;
		this.texCoords = new Float32Array(t);
		for (let e = 0; e < t; e += 1) this.texCoords[e] = 0
	  }
	  if (!this.verticesIndices || !this.verticesIndices.length) return void console.error('Cannot calculate tangents/bitangents without vertex indices.');
	  if (this.verticesIndices.length % 3 != 0) return void console.error('Vertex indices mismatch!');
	  const t = this.verticesIndices.length / 3,
	  e = this.vertices.length / 3;
	  this.tangents = new Float32Array(this.vertexNormals.length),
	  this.biTangents = new Float32Array(this.vertexNormals.length);
	  const i = [
	  ];
	  i.length = 2 * e;
	  const s = vec3.create(),
	  r = vec3.create(),
	  n = vec3.create(),
	  o = vec2.create(),
	  h = vec2.create(),
	  a = vec2.create(),
	  l = vec3.create(),
	  u = vec3.create();
	  for (let c = 0; c < t; c += 1) {
		const t = this.verticesIndices[3 * c],
		p = this.verticesIndices[3 * c + 1],
		d = this.verticesIndices[3 * c + 2];
		vec3.set(s, this.vertices[3 * t], this.vertices[3 * t + 1], this.vertices[3 * t + 2]),
		vec3.set(r, this.vertices[3 * p], this.vertices[3 * p + 1], this.vertices[3 * p + 2]),
		vec3.set(n, this.vertices[3 * d], this.vertices[3 * d + 1], this.vertices[3 * d + 2]),
		vec2.set(o, this.texCoords[2 * t], this.texCoords[2 * t + 1]),
		vec2.set(h, this.texCoords[2 * p], this.texCoords[2 * p + 1]),
		vec2.set(a, this.texCoords[2 * d], this.texCoords[2 * d + 1]);
		const _ = r[0] - s[0],
		f = n[0] - s[0],
		g = r[1] - s[1],
		m = n[1] - s[1],
		E = r[2] - s[2],
		T = n[2] - s[2],
		b = h[0] - o[0],
		A = a[0] - o[0],
		y = h[1] - o[1],
		x = a[1] - o[1],
		v = 1 / (b * x - A * y);
		vec3.set(l, (x * _ - y * f) * v, (x * g - y * m) * v, (x * E - y * T) * v),
		vec3.set(u, (b * f - A * _) * v, (b * m - A * g) * v, (b * T - A * E) * v),
		i[t] = l,
		i[p] = l,
		i[d] = l,
		i[t + e] = u,
		i[p + e] = u,
		i[d + e] = u
	  }
	  const c = vec3.create(),
	  p = vec3.create(),
	  d = vec3.create(),
	  _ = vec3.create(),
	  f = vec3.create(),
	  g = vec3.create(),
	  m = vec3.create(),
	  E = vec3.create();
	  for (let t = 0; t < e; t += 1) {
		if (!i[t]) continue;
		vec3.set(c, this.vertexNormals[3 * t], this.vertexNormals[3 * t + 1], this.vertexNormals[3 * t + 2]),
		vec3.set(p, i[t][0], i[t][1], i[t][2]);
		const s = vec3.dot(c, p);
		vec3.scale(f, c, s),
		vec3.subtract(g, p, f),
		vec3.normalize(E, g),
		vec3.cross(m, c, p);
		vec3.dot(m, i[t + e]);
		const r = 1;
		vec3.scale(d, E, 1 / r),
		vec3.cross(_, c, d),
		this.tangents[3 * t + 0] = d[0],
		this.tangents[3 * t + 1] = d[1],
		this.tangents[3 * t + 2] = d[2],
		this.biTangents[3 * t + 0] = _[0],
		this.biTangents[3 * t + 1] = _[1],
		this.biTangents[3 * t + 2] = _[2]
	  }
	},
	st.prototype.isIndexed = function () {
	  return 0 != this.verticesIndices.length
	},
	st.prototype.unIndex = function (t) {
	  const e = [
	  ],
	  i = [
	  ],
	  s = [
	  ],
	  r = [
	  ];
	  let n = 0,
	  o = 0;
	  for (this.vertexNormals = [
	  ], o = 0; o < this.verticesIndices.length; o += 3) e.push(this.vertices[3 * this.verticesIndices[o + 0] + 0]),
	  e.push(this.vertices[3 * this.verticesIndices[o + 0] + 1]),
	  e.push(this.vertices[3 * this.verticesIndices[o + 0] + 2]),
	  r.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 0]),
	  r.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 1]),
	  r.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 2]),
	  this.texCoords ? (s.push(this.texCoords[2 * this.verticesIndices[o + 0] + 0]), s.push(this.texCoords[2 * this.verticesIndices[o + 0] + 1])) : (s.push(0), s.push(0)),
	  i.push(n),
	  n++,
	  e.push(this.vertices[3 * this.verticesIndices[o + 1] + 0]),
	  e.push(this.vertices[3 * this.verticesIndices[o + 1] + 1]),
	  e.push(this.vertices[3 * this.verticesIndices[o + 1] + 2]),
	  r.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 0]),
	  r.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 1]),
	  r.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 2]),
	  this.texCoords ? (s.push(this.texCoords[2 * this.verticesIndices[o + 1] + 0]), s.push(this.texCoords[2 * this.verticesIndices[o + 1] + 1])) : (s.push(0), s.push(0)),
	  i.push(n),
	  n++,
	  e.push(this.vertices[3 * this.verticesIndices[o + 2] + 0]),
	  e.push(this.vertices[3 * this.verticesIndices[o + 2] + 1]),
	  e.push(this.vertices[3 * this.verticesIndices[o + 2] + 2]),
	  r.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 0]),
	  r.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 1]),
	  r.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 2]),
	  this.texCoords ? (s.push(this.texCoords[2 * this.verticesIndices[o + 2] + 0]), s.push(this.texCoords[2 * this.verticesIndices[o + 2] + 1])) : (s.push(0), s.push(0)),
	  i.push(n),
	  n++;
	  this.vertices = e,
	  this.texCoords = s,
	  this.vertexNormals = r,
	  this.verticesIndices.length = 0,
	  t && (this.verticesIndices = i),
	  this.calculateNormals()
	},
	st.prototype.calcBarycentric = function () {
	  this.barycentrics.length = this.vertices.length;
	  let t = 0;
	  for (t = 0; t < this.vertices.length; t++) this.barycentrics[t] = 0;
	  let e = 0;
	  for (t = 0; t < this.vertices.length; t += 3) this.barycentrics[t + e] = 1,
	  e++,
	  3 == e && (e = 0)
	},
	st.prototype.getBounds = function () {
	  return new it(this)
	},
	st.prototype.center = function (t, e, i) {
	  void 0 === t && (t = !0, e = !0, i = !0);
	  let s = 0;
	  const r = this.getBounds(),
	  n = [
		r.minX + (r.maxX - r.minX) / 2,
		r.minY + (r.maxY - r.minY) / 2,
		r.minZ + (r.maxZ - r.minZ) / 2
	  ];
	  for (s = 0; s < this.vertices.length; s += 3) this.vertices[s + 0] == this.vertices[s + 0] && (t && (this.vertices[s + 0] -= n[0]), e && (this.vertices[s + 1] -= n[1]), i && (this.vertices[s + 2] -= n[2]));
	  return n
	},
	st.prototype.mapTexCoords2d = function () {
	  const t = this.getBounds(),
	  e = this.vertices.length / 3;
	  this.texCoords = new Float32Array(2 * e);
	  for (let i = 0; i < e; i++) {
		const e = this.vertices[3 * i + 0],
		s = this.vertices[3 * i + 1];
		this.texCoords[2 * i + 0] = e / (t.maxX - t.minX) + 0.5,
		this.texCoords[2 * i + 1] = 1 - s / (t.maxY - t.minY) + 0.5
	  }
	},
	st.buildFromFaces = function (t) {
	  const e = [
	  ],
	  i = [
	  ];
	  for (let s = 0; s < t.length; s += 3) {
		const r = t[s + 0],
		n = t[s + 1],
		o = t[s + 2],
		h = [
		  - 1,
		  - 1,
		  - 1
		];
		for (let t = 0; t < e; t += 3) e[t + 0] == r[0] && e[t + 1] == r[1] && e[t + 2] == r[2] && (h[0] = t / 3),
		e[t + 0] == n[0] && e[t + 1] == n[1] && e[t + 2] == n[2] && (h[1] = t / 3),
		e[t + 0] == o[0] && e[t + 1] == o[1] && e[t + 2] == o[2] && (h[2] = t / 3);
		- 1 == h[0] && (e.push(r[0], r[1], r[2]), h[0] = (e.length - 1) / 3),
		- 1 == h[1] && (e.push(n[0], n[1], n[2]), h[1] = (e.length - 1) / 3),
		- 1 == h[2] && (e.push(o[0], o[1], o[2]), h[2] = (e.length - 1) / 3),
		i.push(parseInt(h[0], 10)),
		i.push(parseInt(h[1], 10)),
		i.push(parseInt(h[2], 10))
	  }
	  const s = new st;
	  return s.vertices = e,
	  s.verticesIndices = i,
	  s
	},
	st.json2geom = function (t) {
	  const e = new st;
	  if (e.verticesIndices = [
	  ], e.vertices = t.vertices || [
	  ], e.vertexNormals = t.normals || [
	  ], e.vertexColors = t.colors || [
	  ], e.tangents = t.tangents || [
	  ], e.biTangents = t.bitangents || [
	  ], t.texturecoords && e.setTexCoords(t.texturecoords[0]), t.vertices_b64 && (e.vertices = new Float32Array(c(t.vertices_b64))), t.normals_b64 && (e.vertexNormals = new Float32Array(c(t.normals_b64))), t.tangents_b64 && (e.tangents = new Float32Array(c(t.tangents_b64))), t.bitangents_b64 && (e.biTangents = new Float32Array(c(t.bitangents_b64))), t.texturecoords_b64 && e.setTexCoords(new Float32Array(c(t.texturecoords_b64[0]))), t.faces_b64) e.verticesIndices = new Uint32Array(c(t.faces_b64));
	   else {
		e.verticesIndices.length = 3 * t.faces.length;
		for (let i = 0; i < t.faces.length; i++) e.verticesIndices[3 * i] = t.faces[i][0],
		e.verticesIndices[3 * i + 1] = t.faces[i][1],
		e.verticesIndices[3 * i + 2] = t.faces[i][2]
	  }
	  return e
	};
	const rt = function (t, e, i, s, r, n, o, h, a, l) {
	  if (this._loc = - 1, this._type = e, this._name = i, this._shader = t, this._value = 0.00001, this._oldValue = null, this._port = null, this._structName = a, this._structUniformName = h, this._propertyName = l, this._shader._addUniform(this), this.needsUpdate = !0, this.shaderType = null, this.comment = null, 'f' == e) this.set = this.setValue = this.setValueF.bind(this),
	  this.updateValue = this.updateValueF.bind(this);
	   else if ('f[]' == e) this.set = this.setValue = this.setValueArrayF.bind(this),
	  this.updateValue = this.updateValueArrayF.bind(this);
	   else if ('2f[]' == e) this.set = this.setValue = this.setValueArray2F.bind(this),
	  this.updateValue = this.updateValueArray2F.bind(this);
	   else if ('3f[]' == e) this.set = this.setValue = this.setValueArray3F.bind(this),
	  this.updateValue = this.updateValueArray3F.bind(this);
	   else if ('4f[]' == e) this.set = this.setValue = this.setValueArray4F.bind(this),
	  this.updateValue = this.updateValueArray4F.bind(this);
	   else if ('i' == e) this.set = this.setValue = this.setValueI.bind(this),
	  this.updateValue = this.updateValueI.bind(this);
	   else if ('2i' == e) this.set = this.setValue = this.setValue2I.bind(this),
	  this.updateValue = this.updateValue2I.bind(this);
	   else if ('3i' == e) this.set = this.setValue = this.setValue3I.bind(this),
	  this.updateValue = this.updateValue3I.bind(this);
	   else if ('4i' == e) this.set = this.setValue = this.setValue4I.bind(this),
	  this.updateValue = this.updateValue4I.bind(this);
	   else if ('b' == e) this.set = this.setValue = this.setValueBool.bind(this),
	  this.updateValue = this.updateValueBool.bind(this);
	   else if ('4f' == e) this.set = this.setValue = this.setValue4F.bind(this),
	  this.updateValue = this.updateValue4F.bind(this);
	   else if ('3f' == e) this.set = this.setValue = this.setValue3F.bind(this),
	  this.updateValue = this.updateValue3F.bind(this);
	   else if ('2f' == e) this.set = this.setValue = this.setValue2F.bind(this),
	  this.updateValue = this.updateValue2F.bind(this);
	   else if ('t' == e) this.set = this.setValue = this.setValueT.bind(this),
	  this.updateValue = this.updateValueT.bind(this);
	   else if ('tc' == e) this.set = this.setValue = this.setValueT.bind(this),
	  this.updateValue = this.updateValueT.bind(this);
	   else if ('t[]' == e) this.set = this.setValue = this.setValueArrayT.bind(this),
	  this.updateValue = this.updateValueArrayT.bind(this);
	   else {
		if ('m4' != e) throw new Error('Unknown uniform type');
		this.set = this.setValue = this.setValueM4.bind(this),
		this.updateValue = this.updateValueM4.bind(this)
	  }
	  'object' == typeof s && s instanceof V ? (this._port = s, this._value = this._port.get(), r && n && o ? (r instanceof V && n instanceof V && o instanceof V || console.error('[cgl_uniform] mixed port/value parameter for vec4 ', this._name), this._value = [
		0,
		0,
		0,
		0
	  ], this._port2 = r, this._port3 = n, this._port4 = o, this._port.on('change', this.updateFromPort4f.bind(this)), this._port2.on('change', this.updateFromPort4f.bind(this)), this._port3.on('change', this.updateFromPort4f.bind(this)), this._port4.on('change', this.updateFromPort4f.bind(this)), this.updateFromPort4f()) : r && n ? (r instanceof V && n instanceof V || console.error('[cgl_uniform] mixed port/value parameter for vec4 ', this._name), this._value = [
		0,
		0,
		0
	  ], this._port2 = r, this._port3 = n, this._port.on('change', this.updateFromPort3f.bind(this)), this._port2.on('change', this.updateFromPort3f.bind(this)), this._port3.on('change', this.updateFromPort3f.bind(this)), this.updateFromPort3f()) : r ? (r instanceof V || console.error('[cgl_uniform] mixed port/value parameter for vec4 ', this._name), this._value = [
		0,
		0
	  ], this._port2 = r, this._port.on('change', this.updateFromPort2f.bind(this)), this._port2.on('change', this.updateFromPort2f.bind(this)), this.updateFromPort2f()) : this._port.on('change', this.updateFromPort.bind(this))) : this._value = s,
	  this.setValue(this._value),
	  this.needsUpdate = !0
	};
	rt.prototype.copy = function (t) {
	  const e = new rt(t, this._type, this._name, this._value, this._port2, this._port3, this._port4, this._structUniformName, this._structName, this._propertyName);
	  return e.shaderType = this.shaderType,
	  e
	},
	rt.prototype.getGlslTypeString = function () {
	  return 'f' == this._type ? 'float' : 'i' == this._type ? 'int' : '2i' == this._type ? 'ivec2' : '2f' == this._type ? 'vec2' : '3f' == this._type ? 'vec3' : '4f' == this._type ? 'vec4' : 'm4' == this._type ? 'mat4' : 't' == this._type ? 'sampler2D' : 'tc' == this._type ? 'samplerCube' : void console.log('[CGL UNIFORM] unknown glsl type string ', this._type)
	},
	rt.prototype._isValidLoc = function () {
	  return - 1 != this._loc
	},
	rt.prototype.getType = function () {
	  return this._type
	},
	rt.prototype.getName = function () {
	  return this._name
	},
	rt.prototype.getValue = function () {
	  return this._value
	},
	rt.prototype.getShaderType = function () {
	  return this.shaderType
	},
	rt.prototype.isStructMember = function () {
	  return !!this._structName
	},
	rt.prototype.resetLoc = function () {
	  this._loc = - 1,
	  this.needsUpdate = !0
	},
	rt.prototype.bindTextures = function () {
	  return this._value
	},
	rt.prototype.resetLoc = function () {
	  this._loc = - 1,
	  this.needsUpdate = !0
	},
	rt.prototype.bindTextures = function () {
	},
	rt.prototype.getLoc = function () {
	  return this._loc
	},
	rt.prototype.updateFromPort4f = function () {
	  this._value[0] = this._port.get(),
	  this._value[1] = this._port2.get(),
	  this._value[2] = this._port3.get(),
	  this._value[3] = this._port4.get(),
	  this.setValue(this._value)
	},
	rt.prototype.updateFromPort3f = function () {
	  this._value[0] = this._port.get(),
	  this._value[1] = this._port2.get(),
	  this._value[2] = this._port3.get(),
	  this.setValue(this._value)
	},
	rt.prototype.updateFromPort2f = function () {
	  this._value[0] = this._port.get(),
	  this._value[1] = this._port2.get(),
	  this.setValue(this._value)
	},
	rt.prototype.updateFromPort = function () {
	  this.setValue(this._port.get())
	},
	rt.prototype.updateValueF = function () {
	  this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name),
	  this._shader.getCgl().gl.uniform1f(this._loc, this._value),
	  $.profileUniformCount++
	},
	rt.prototype.setValueF = function (t) {
	  t != this._value && (this.needsUpdate = !0, this._value = t)
	},
	rt.prototype.updateValueI = function () {
	  this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name),
	  this._shader.getCgl().gl.uniform1i(this._loc, this._value),
	  $.profileUniformCount++
	},
	rt.prototype.updateValue2I = function () {
	  this._value && (this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), $.profileShaderGetUniform++, $.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1]), this.needsUpdate = !1, $.profileUniformCount++)
	},
	rt.prototype.updateValue3I = function () {
	  this._value && (this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), $.profileShaderGetUniform++, $.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2]), this.needsUpdate = !1, $.profileUniformCount++)
	},
	rt.prototype.updateValue4I = function () {
	  this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), $.profileShaderGetUniform++, $.profileShaderGetUniformName = this._name),
	  this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]),
	  $.profileUniformCount++
	},
	rt.prototype.setValueI = function (t) {
	  t != this._value && (this.needsUpdate = !0, this._value = t)
	},
	rt.prototype.setValue2I = function (t) {
	  t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this.needsUpdate = !0) : (this._oldValue = [
		t[0] - 1,
		1
	  ], this.needsUpdate = !0), this._value = t)
	},
	rt.prototype.setValue3I = function (t) {
	  t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this._oldValue[2] = t[2], this.needsUpdate = !0) : (this._oldValue = [
		t[0] - 1,
		1,
		2
	  ], this.needsUpdate = !0), this._value = t)
	},
	rt.prototype.setValue4I = function (t) {
	  this.needsUpdate = !0,
	  this._value = t || vec4.create()
	},
	rt.prototype.updateValueBool = function () {
	  this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name),
	  this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0),
	  $.profileUniformCount++
	},
	rt.prototype.setValueBool = function (t) {
	  t != this._value && (this.needsUpdate = !0, this._value = t)
	},
	rt.prototype.setValueArray4F = function (t) {
	  this.needsUpdate = !0,
	  this._value = t
	},
	rt.prototype.updateValueArray4F = function () {
	  this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name),
	  this._value && (this._shader.getCgl().gl.uniform4fv(this._loc, this._value), $.profileUniformCount++)
	},
	rt.prototype.setValueArray3F = function (t) {
	  this.needsUpdate = !0,
	  this._value = t
	},
	rt.prototype.updateValueArray3F = function () {
	  this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name),
	  this._value && (this._shader.getCgl().gl.uniform3fv(this._loc, this._value), $.profileUniformCount++)
	},
	rt.prototype.setValueArray2F = function (t) {
	  this.needsUpdate = !0,
	  this._value = t
	},
	rt.prototype.updateValueArray2F = function () {
	  this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name),
	  this._value && (this._shader.getCgl().gl.uniform2fv(this._loc, this._value), $.profileUniformCount++)
	},
	rt.prototype.setValueArrayF = function (t) {
	  this.needsUpdate = !0,
	  this._value = t
	},
	rt.prototype.updateValueArrayF = function () {
	  this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name),
	  this._value && (this._shader.getCgl().gl.uniform1fv(this._loc, this._value), $.profileUniformCount++)
	},
	rt.prototype.setValueArrayT = function (t) {
	  this.needsUpdate = !0,
	  this._value = t
	},
	rt.prototype.updateValueArrayT = function () {
	  this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name),
	  this._value && (this._shader.getCgl().gl.uniform1iv(this._loc, this._value), $.profileUniformCount++)
	},
	rt.prototype.updateValue3F = function () {
	  this._value && (this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), $.profileShaderGetUniform++, $.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]), this.needsUpdate = !1, $.profileUniformCount++)
	},
	rt.prototype.setValue3F = function (t) {
	  t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this._oldValue[2] = t[2], this.needsUpdate = !0) : (this._oldValue = [
		t[0] - 1,
		1,
		2
	  ], this.needsUpdate = !0), this._value = t)
	},
	rt.prototype.updateValue2F = function () {
	  this._value && (this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), $.profileShaderGetUniform++, $.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]), this.needsUpdate = !1, $.profileUniformCount++)
	},
	rt.prototype.setValue2F = function (t) {
	  t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this.needsUpdate = !0) : (this._oldValue = [
		t[0] - 1,
		1
	  ], this.needsUpdate = !0), this._value = t)
	},
	rt.prototype.updateValue4F = function () {
	  this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), $.profileShaderGetUniform++, $.profileShaderGetUniformName = this._name),
	  this._value || (console.log('no value for uniform', this._name, this), this._value = [
		0,
		0,
		0,
		0
	  ]),
	  this.needsUpdate = !1,
	  this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]),
	  $.profileUniformCount++
	},
	rt.prototype.setValue4F = function (t) {
	  'number' == typeof this.value && (this.value = vec4.create()),
	  t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2] && t[3] == this._oldValue[3] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this._oldValue[2] = t[2], this.needsUpdate = !0) : (this._oldValue = [
		t[0] - 1,
		1,
		2,
		3
	  ], this.needsUpdate = !0), this._value = t)
	},
	rt.prototype.updateValueM4 = function () {
	  this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), $.profileShaderGetUniform++, $.profileShaderGetUniformName = this._name),
	  this._shader.getCgl().gl.uniformMatrix4fv(this._loc, !1, this._value),
	  $.profileUniformCount++
	},
	rt.prototype.setValueM4 = function (t) {
	  this.needsUpdate = !0,
	  this._value = t || mat4.create()
	},
	rt.prototype.updateValueT = function () {
	  this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), $.profileShaderGetUniform++, $.profileShaderGetUniformName = this._name),
	  $.profileUniformCount++,
	  this._shader.getCgl().gl.uniform1i(this._loc, this._value),
	  this.needsUpdate = !1
	},
	rt.prototype.setValueT = function (t) {
	  this.needsUpdate = !0,
	  this._value = t
	};
	const nt = 180 / Math.PI,
	ot = {
	  MATH: {
		DEG2RAD: Math.PI / 180,
		RAD2DEG: nt
	  },
	  SHADER: {
		SHADERVAR_VERTEX_POSITION: 'vPosition',
		SHADERVAR_VERTEX_NUMBER: 'attrVertIndex',
		SHADERVAR_VERTEX_NORMAL: 'attrVertNormal',
		SHADERVAR_VERTEX_TEXCOORD: 'attrTexCoord',
		SHADERVAR_INSTANCE_MMATRIX: 'instMat',
		SHADERVAR_UNI_PROJMAT: 'projMatrix',
		SHADERVAR_UNI_VIEWMAT: 'viewMatrix',
		SHADERVAR_UNI_MODELMAT: 'modelMatrix',
		SHADERVAR_UNI_NORMALMAT: 'normalMatrix',
		SHADERVAR_UNI_INVVIEWMAT: 'inverseViewMatrix',
		SHADERVAR_UNI_VIEWPOS: 'camPos'
	  },
	  BLEND_MODES: {
		BLEND_NONE: 0,
		BLEND_NORMAL: 1,
		BLEND_ADD: 2,
		BLEND_SUB: 3,
		BLEND_MUL: 4
	  }
	};
	const ht = {
	  lastMesh: null
	},
	at = function (t, e, i) {
	  this._cgl = t,
	  this._bufVertexAttrib = null,
	  this._bufVerticesIndizes = this._cgl.gl.createBuffer(),
	  this._attributes = [
	  ],
	  this._attribLocs = {
	  },
	  this._geom = null,
	  this._lastShader = null,
	  this._numInstances = 0,
	  this._glPrimitive = i,
	  this._preWireframeGeom = null,
	  this.addVertexNumbers = !1,
	  this.feedBackAttributes = [
	  ],
	  this.setGeom(e),
	  this._feedBacks = [
	  ],
	  this._feedBacksChanged = !1,
	  this._transformFeedBackLoc = - 1,
	  this._lastAttrUpdate = 0,
	  Object.defineProperty(this, 'numInstances', {
		get() {
		  return this._numInstances
		},
		set(t) {
		  this.setNumInstances(t)
		}
	  })
	};
	var lt;
	at.prototype.updateVertices = function (t) {
	  this.setAttribute(ot.SHADER.SHADERVAR_VERTEX_POSITION, t.vertices, 3)
	},
	at.prototype.setAttributePointer = function (t, e, i, s) {
	  for (let r = 0; r < this._attributes.length; r++) this._attributes[r].name == t && (this._attributes[r].pointer || (this._attributes[r].pointer = [
	  ]), this._attributes[r].pointer.push({
		loc: - 1,
		name: e,
		stride: i,
		offset: s,
		instanced: t == ot.SHADER.SHADERVAR_INSTANCE_MMATRIX
	  }))
	},
	at.prototype.getAttribute = function (t) {
	  for (let e = 0; e < this._attributes.length; e++) if (this._attributes[e].name == t) return this._attributes[e]
	},
	at.prototype.setAttributeRange = function (t, e, i, s) {
	  t && (i || s) && (this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, t.buffer), $.profileMeshAttributes += s - i || 0, this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 4 * i, e, i, s - i))
	},
	at.prototype._bufferArray = function (t, e) {
	  let i = null;
	  t && (this._cgl.debugOneFrame && console.log('_bufferArray', t.length, e.name), t instanceof Float32Array ? i = t : e && e.floatArray && e.floatArray.length == t.length ? (e.floatArray.set(t), i = e.floatArray) : (i = new Float32Array(t), this._cgl.debugOneFrame && console.log('_bufferArray create new float32array', t.length, e.name), $.profileNonTypedAttrib++, $.profileNonTypedAttribNames = this._geom.name + ' ' + e.name), e && i && (e.floatArray = i), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, i, this._cgl.gl.DYNAMIC_DRAW))
	},
	at.prototype.addAttribute = at.prototype.updateAttribute = at.prototype.setAttribute = function (t, e, i, s) {
	  let r = null,
	  n = !1,
	  o = 0;
	  const h = e.length / i;
	  for ($.profileMeshAttributes += h || 0, 0 === h && console.warn('CGL_MESH: ' + this._geom.name + ' num items in attribute ' + t + ' is ZERO'), 'function' == typeof s && (r = s), 'object' == typeof s && (s.cb && (r = s.cb), s.instanced && (n = s.instanced)), t == ot.SHADER.SHADERVAR_INSTANCE_MMATRIX && (n = !0), o = 0; o < this._attributes.length; o++) if (this._attributes[o].name == t) return this._attributes[o].numItems = h,
	  this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, this._attributes[o].buffer),
	  this._bufferArray(e, this._attributes[o]),
	  this._attributes[o];
	  const a = this._cgl.gl.createBuffer();
	  this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, a);
	  let l = this._cgl.gl.FLOAT;
	  s && s.type && (l = s.type);
	  const u = {
		buffer: a,
		name: t,
		cb: r,
		itemSize: i,
		numItems: h,
		startItem: 0,
		instanced: n,
		type: l
	  };
	  return this._bufferArray(e, u),
	  t == ot.SHADER.SHADERVAR_VERTEX_POSITION && (this._bufVertexAttrib = u),
	  this._attributes.push(u),
	  this._attribLocs = {
	  },
	  u
	},
	at.prototype.getAttributes = function () {
	  return this._attributes
	},
	at.prototype.updateTexCoords = function (t) {
	  if (t.texCoords && t.texCoords.length > 0) this.setAttribute(ot.SHADER.SHADERVAR_VERTEX_TEXCOORD, t.texCoords, 2);
	   else {
		const e = new Float32Array(Math.round(t.vertices.length / 3 * 2));
		this.setAttribute(ot.SHADER.SHADERVAR_VERTEX_TEXCOORD, e, 2)
	  }
	},
	at.prototype.updateNormals = function (t) {
	  if (t.vertexNormals && t.vertexNormals.length > 0) this.setAttribute('attrVertNormal', t.vertexNormals, 3);
	   else {
		const e = new Float32Array(Math.round(t.vertices.length));
		this.setAttribute('attrVertNormal', e, 3)
	  }
	},
	at.prototype._setVertexNumbers = function () {
	  const t = this._geom.vertices.length / 3;
	  if (!this._verticesNumbers || this._verticesNumbers.length != t) {
		this._verticesNumbers = new Float32Array(t);
		for (let e = 0; e < t; e++) this._verticesNumbers[e] = e;
		this.setAttribute(ot.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, (e, i, s) =>{
		  s.uniformNumVertices || (s.uniformNumVertices = new rt(s, 'f', 'numVertices', t)),
		  s.uniformNumVertices.setValue(t)
		})
	  }
	},
	at.prototype.setVertexIndices = function (t) {
	  if (this._bufVerticesIndizes) if (t.length > 0) {
		for (let e = 0; e < t.length; e++) if (t[e] >= this._geom.vertices.length / 3) return void console.warn('invalid index in ' + this._geom.name);
		this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes),
		t instanceof Uint16Array ? this.vertIndicesTyped = t : this.vertIndicesTyped = new Uint16Array(t),
		this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW),
		this._bufVerticesIndizes.itemSize = 1,
		this._bufVerticesIndizes.numItems = t.length
	  } else this._bufVerticesIndizes.numItems = 0;
	   else d.warn('no bufVerticesIndizes')
	},
	at.prototype.setGeom = function (t) {
	  this._geom = t,
	  null != t.glPrimitive && (this._glPrimitive = t.glPrimitive),
	  ht.lastMesh = null,
	  $.profileMeshSetGeom++,
	  this._disposeAttributes(),
	  this.updateVertices(this._geom),
	  this.setVertexIndices(this._geom.verticesIndices),
	  this.updateTexCoords(this._geom),
	  this.updateNormals(this._geom),
	  this._geom.hasOwnProperty('tangents') && this._geom.tangents && this._geom.tangents.length > 0 && this.setAttribute('attrTangent', this._geom.tangents, 3),
	  this._geom.hasOwnProperty('biTangents') && this._geom.biTangents && this._geom.biTangents.length > 0 && this.setAttribute('attrBiTangent', this._geom.biTangents, 3),
	  this._geom.vertexColors.length > 0 && (this._geom.vertexColors.flat && this._geom.vertexColors.flat(100), this.setAttribute('attrVertColor', this._geom.vertexColors, 4)),
	  this.addVertexNumbers && this._setVertexNumbers();
	  const e = this._geom.getAttributes();
	  for (const t in e) this.setAttribute(t, e[t].data, e[t].itemSize)
	},
	at.prototype._preBind = function (t) {
	  for (let e = 0; e < this._attributes.length; e++) this._attributes[e].cb && this._attributes[e].cb(this._attributes[e], this._geom, t)
	},
	at.prototype._checkAttrLengths = function () {
	  for (let t = 0; t < this._attributes.length; t++) this._attributes[0].floatArray.length,
	  this._attributes[0].itemSize,
	  this._attributes[t].floatArray.length,
	  this._attributes[t].itemSize
	},
	at.prototype._bind = function (t) {
	  if (!t.isValid()) return;
	  t != this._lastShader && this.unBind();
	  let e = [
	  ];
	  this._attribLocs[t.id] ? e = this._attribLocs[t.id] : this._attribLocs[t.id] = e,
	  this._lastShader = t;
	  let i = 0;
	  if (t.lastCompile > this._lastAttrUpdate || e.length != this._attributes.length) {
		for (this._lastAttrUpdate = t.lastCompile, i = 0; i < this._attributes.length; i++) e[i] = - 1;
		this._checkAttrLengths()
	  }
	  for (i = 0; i < this._attributes.length; i++) {
		const s = this._attributes[i];
		if ( - 1 == e[i] && s._attrLocationLastShaderTime != t.lastCompile && (s._attrLocationLastShaderTime = t.lastCompile, e[i] = this._cgl.glGetAttribLocation(t.getProgram(), s.name), $.profileAttrLoc++), - 1 != e[i]) if (this._cgl.gl.enableVertexAttribArray(e[i]), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.buffer), s.instanced) if (s.itemSize <= 4) s.itemSize && 0 != s.itemSize || d.log('instanced attrib itemsize error', this._geom.name, s),
		this._cgl.gl.vertexAttribPointer(e[i], s.itemSize, s.type, !1, 4 * s.itemSize, 0),
		this._cgl.gl.vertexAttribDivisor(e[i], 1);
		 else if (16 == s.itemSize) {
		  const t = 64;
		  this._cgl.gl.vertexAttribPointer(e[i], 4, s.type, !1, t, 0),
		  this._cgl.gl.enableVertexAttribArray(e[i] + 1),
		  this._cgl.gl.vertexAttribPointer(e[i] + 1, 4, s.type, !1, t, 16),
		  this._cgl.gl.enableVertexAttribArray(e[i] + 2),
		  this._cgl.gl.vertexAttribPointer(e[i] + 2, 4, s.type, !1, t, 32),
		  this._cgl.gl.enableVertexAttribArray(e[i] + 3),
		  this._cgl.gl.vertexAttribPointer(e[i] + 3, 4, s.type, !1, t, 48),
		  this._cgl.gl.vertexAttribDivisor(e[i], 1),
		  this._cgl.gl.vertexAttribDivisor(e[i] + 1, 1),
		  this._cgl.gl.vertexAttribDivisor(e[i] + 2, 1),
		  this._cgl.gl.vertexAttribDivisor(e[i] + 3, 1)
		} else d.log('unknown instance attrib size', s.name);
		 else {
		  if (s.itemSize && 0 != s.itemSize || d.log('attrib itemsize error', this._geom.name, s), this._cgl.gl.vertexAttribPointer(e[i], s.itemSize, s.type, !1, 4 * s.itemSize, 0), s.pointer) for (let e = 0; e < s.pointer.length; e++) {
			const i = s.pointer[e];
			- 1 == i.loc && (i.loc = this._cgl.glGetAttribLocation(t.getProgram(), i.name)),
			$.profileAttrLoc++,
			this._cgl.gl.enableVertexAttribArray(i.loc),
			this._cgl.gl.vertexAttribPointer(i.loc, s.itemSize, s.type, !1, i.stride, i.offset)
		  }
		  this.bindFeedback(s)
		}
	  }
	  0 !== this._bufVerticesIndizes.numItems && this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes)
	},
	at.prototype.unBind = function () {
	  const t = this._lastShader;
	  if (this._lastShader = null, !t) return;
	  let e = [
	  ];
	  this._attribLocs[t.id] ? e = this._attribLocs[t.id] : this._attribLocs[t.id] = e,
	  ht.lastMesh = null;
	  for (let t = 0; t < this._attributes.length; t++) this._attributes[t].instanced && (this._attributes[t].itemSize <= 4 ? ( - 1 != e[t] && this._cgl.gl.vertexAttribDivisor(e[t], 0), e[t] >= 0 && this._cgl.gl.disableVertexAttribArray(e[t])) : (this._cgl.gl.vertexAttribDivisor(e[t], 0), this._cgl.gl.vertexAttribDivisor(e[t] + 1, 0), this._cgl.gl.vertexAttribDivisor(e[t] + 2, 0), this._cgl.gl.vertexAttribDivisor(e[t] + 3, 0), this._cgl.gl.disableVertexAttribArray(e[t] + 1), this._cgl.gl.disableVertexAttribArray(e[t] + 2), this._cgl.gl.disableVertexAttribArray(e[t] + 3))),
	  - 1 != e[t] && this._cgl.gl.disableVertexAttribArray(e[t])
	},
	at.prototype.meshChanged = function () {
	  return this._cgl.lastMesh && this._cgl.lastMesh != this
	},
	at.prototype.printDebug = function (t) {
	  d.log('--attributes');
	  for (let t = 0; t < this._attributes.length; t++) d.log('attribute ' + t + ' ' + this._attributes[t].name)
	},
	at.prototype.setNumVertices = function (t) {
	  this._bufVertexAttrib.numItems = t
	},
	at.prototype.render = function (t) {
	  if (!t || !t.isValid()) return;
	  t.wireframe || this._geom.isIndexed() || !this._preWireframeGeom || this.setGeom(this._preWireframeGeom),
	  t.wireframe && this._geom.isIndexed() && (this._preWireframeGeom = this._geom, this._geom = this._geom.copy(), this._geom.unIndex(), this._geom.calcBarycentric(), this.setGeom(this._geom), this.setAttribute('attrBarycentric', this._geom.barycentrics, 3));
	  let e = !1;
	  ht.lastMesh != this && (ht.lastMesh && ht.lastMesh.unBind(), e = !0),
	  e && this._preBind(t),
	  t.bind(),
	  t.bindTextures && t.bindTextures(),
	  this._bind(t),
	  this.addVertexNumbers && this._setVertexNumbers(),
	  ht.lastMesh = this;
	  let i = this._cgl.gl.TRIANGLES;
	  void 0 !== this._glPrimitive && (i = this._glPrimitive),
	  null !== t.glPrimitive && (i = t.glPrimitive);
	  let s = 1;
	  this.hasFeedbacks() ? this.drawFeedbacks(t, i) : 0 === this._bufVerticesIndizes.numItems ? (i == this._cgl.gl.TRIANGLES && (s = 3), 0 === this._numInstances ? this._cgl.gl.drawArrays(i, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem) : this._cgl.gl.drawArraysInstanced(i, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances)) : 0 === this._numInstances ? this._cgl.gl.drawElements(i, this._bufVerticesIndizes.numItems, this._cgl.gl.UNSIGNED_SHORT, 0) : this._cgl.gl.drawElementsInstanced(i, this._bufVerticesIndizes.numItems, this._cgl.gl.UNSIGNED_SHORT, 0, this._numInstances),
	  $.profileMeshNumElements += this._bufVertexAttrib.numItems / s * (this._numInstances || 1),
	  $.profileMeshDraw++
	},
	at.prototype.setNumInstances = function (t) {
	  if (t = Math.max(0, t), this._numInstances != t) {
		this._numInstances = t;
		const e = new Float32Array(t);
		for (let i = 0; i < t; i++) e[i] = i;
		this.setAttribute('instanceIndex', e, 1, {
		  instanced: !0
		})
	  }
	},
	at.prototype._disposeAttributes = function () {
	  if (this._attributes) {
		for (let t = 0; t < this._attributes.length; t++) this._attributes[t].buffer && (this._cgl.gl.deleteBuffer(this._attributes[t].buffer), this._attributes[t].buffer = null);
		this._attributes.length = 0
	  }
	},
	at.prototype.dispose = function () {
	  this._bufVertexAttrib && this._bufVertexAttrib.buffer && this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer),
	  this._bufVerticesIndizes && this._cgl.gl.deleteBuffer(this._bufVerticesIndizes),
	  this._disposeAttributes()
	},
	(lt = at).prototype.hasFeedbacks = function () {
	  return this._feedBacks.length > 0
	},
	lt.prototype.removeFeedbacks = function (t) {
	  this._feedbacks && (this._feedbacks.length = 0, this._feedBacksChanged = !0)
	},
	lt.prototype.setAttributeFeedback = function () {
	},
	lt.prototype.setFeedback = function (t, e, i) {
	  let s = {
		nameOut: e
	  },
	  r = !1;
	  this.unBindFeedbacks();
	  for (let t = 0; t < this._feedBacks.length; t++) this._feedBacks[t].nameOut == e && (s = this._feedBacks[t], r = !0);
	  return r || (this._feedBacksChanged = !0),
	  s.initialArr = i,
	  s.attrib = t,
	  s.outBuffer && this._cgl.gl.deleteBuffer(s.outBuffer),
	  s.outBuffer = this._cgl.gl.createBuffer(),
	  this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.outBuffer),
	  this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, s.initialArr, this._cgl.gl.STATIC_DRAW),
	  this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.attrib.buffer),
	  this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, s.initialArr, this._cgl.gl.STATIC_DRAW),
	  r || this._feedBacks.push(s),
	  s
	},
	lt.prototype.bindFeedback = function (t) {
	  if (!this._feedBacks || 0 === this._feedBacks.length) return;
	  - 1 == this._transformFeedBackLoc && (this._transformFeedBackLoc = this._cgl.gl.createTransformFeedback()),
	  this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc);
	  let e = !1;
	  for (let i = 0; i < this._feedBacks.length; i++) {
		const s = this._feedBacks[i];
		s.attrib == t && (e = !0, this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, s.outBuffer))
	  }
	},
	lt.prototype.drawFeedbacks = function (t, e) {
	  let i = 0;
	  if (this._feedBacksChanged) {
		const e = [
		];
		for (this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc), i = 0; i < this._feedBacks.length; i++) e.push(this._feedBacks[i].nameOut);
		return t.setFeedbackNames(e),
		d.log('feedbacknames', e),
		t.compile(),
		this._feedBacksChanged = !1,
		this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null),
		void d.log('changed finished')
	  }
	  this._cgl.gl.beginTransformFeedback(this.glPrimitive),
	  this._cgl.gl.drawArrays(e, 0, this._feedBacks[0].attrib.numItems),
	  this._cgl.gl.endTransformFeedback(),
	  this.unBindFeedbacks(),
	  this.feedBacksSwapBuffers()
	},
	lt.prototype.unBindFeedbacks = function () {
	  for (let t = 0; t < this._feedBacks.length; t++) this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, t, null);
	  this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null)
	},
	lt.prototype.feedBacksSwapBuffers = function () {
	  for (let t = 0; t < this._feedBacks.length; t++) {
		const e = this._feedBacks[t].attrib.buffer;
		this._feedBacks[t].attrib.buffer = this._feedBacks[t].outBuffer,
		this._feedBacks[t].outBuffer = e
	  }
	};
	const ut = {
	  getSimpleRect: function (t, e) {
		const i = new st(e);
		return i.vertices = [
		  1,
		  1,
		  0,
		  - 1,
		  1,
		  0,
		  1,
		  - 1,
		  0,
		  - 1,
		  - 1,
		  0
		],
		i.texCoords = [
		  1,
		  1,
		  0,
		  1,
		  1,
		  0,
		  0,
		  0
		],
		i.verticesIndices = [
		  0,
		  1,
		  2,
		  2,
		  1,
		  3
		],
		i.vertexNormals = [
		  0,
		  0,
		  0,
		  0,
		  0,
		  0,
		  0,
		  0,
		  0,
		  0,
		  0,
		  0
		],
		new at(t, i)
	  }
	},
	ct = function (t, e) {
	  this._cgl = t,
	  t.TextureEffectMesh || this.createMesh(),
	  this._textureSource = null,
	  this._options = e,
	  this._textureTarget = null,
	  this._frameBuf = this._cgl.gl.createFramebuffer(),
	  this._frameBuf2 = this._cgl.gl.createFramebuffer(),
	  this._renderbuffer = this._cgl.gl.createRenderbuffer(),
	  this._renderbuffer2 = this._cgl.gl.createRenderbuffer(),
	  this.switched = !1,
	  this.depth = !1
	};
	ct.prototype.setSourceTexture = function (t) {
	  t.textureType == tt.TYPE_FLOAT && this._cgl.gl.getExtension('EXT_color_buffer_float'),
	  null === t ? (this._textureSource = new tt(this._cgl), this._textureSource.setSize(16, 16)) : this._textureSource = t,
	  this._textureSource.compareSettings(this._textureTarget) || (this._textureTarget && this._textureTarget.delete(), this._textureTarget = this._textureSource.clone(), $.profileEffectBuffercreate++, this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer), this.depth && this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0), this.depth && this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2), this.depth && this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0), this.depth && this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null))
	},
	ct.prototype.startEffect = function () {
	  this._textureTarget ? (this.switched = !1, this._cgl.pushDepthTest(!1), this._cgl.pushModelMatrix(), this._cgl.pushPMatrix(), this._cgl.gl.viewport(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height), mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, 0.1, 1100), this._cgl.pushPMatrix(), mat4.identity(this._cgl.pMatrix), this._cgl.pushViewMatrix(), mat4.identity(this._cgl.vMatrix), this._cgl.pushModelMatrix(), mat4.identity(this._cgl.mvMatrix)) : d.log('effect has no target')
	},
	ct.prototype.endEffect = function () {
	  this._cgl.popDepthTest(!1),
	  this._cgl.popModelMatrix(),
	  this._cgl.popPMatrix(),
	  this._cgl.popModelMatrix(),
	  this._cgl.popViewMatrix(),
	  this._cgl.popPMatrix(),
	  this._cgl.resetViewPort()
	},
	ct.prototype.bind = function () {
	  null !== this._textureSource ? this.switched ? (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2), this._cgl.pushGlFrameBuffer(this._frameBuf2)) : (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf), this._cgl.pushGlFrameBuffer(this._frameBuf)) : d.log('no base texture set!')
	},
	ct.prototype.finish = function () {
	  null !== this._textureSource ? (this._cgl.TextureEffectMesh.render(this._cgl.getShader()), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()), $.profileTextureEffect++, this._textureTarget.filter == tt.FILTER_MIPMAP && (this.switched ? (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex), this._textureSource.updateMipMap()) : (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex), this._textureTarget.updateMipMap()), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)), this.switched = !this.switched) : d.log('no base texture set!')
	},
	ct.prototype.getCurrentTargetTexture = function () {
	  return this.switched ? this._textureSource : this._textureTarget
	},
	ct.prototype.getCurrentSourceTexture = function () {
	  return this.switched ? this._textureTarget : this._textureSource
	},
	ct.prototype.delete = function () {
	  this._textureTarget && this._textureTarget.delete(),
	  this._textureSource && this._textureSource.delete(),
	  this._cgl.gl.deleteRenderbuffer(this._renderbuffer),
	  this._cgl.gl.deleteFramebuffer(this._frameBuf)
	},
	ct.prototype.createMesh = function () {
	  this._cgl.TextureEffectMesh = ut.getSimpleRect(this._cgl, 'textureEffect rect')
	},
	ct.checkOpNotInTextureEffect = function (t) {
	  return t.uiAttribs.error && !t.patch.cgl.currentTextureEffect ? (t.uiAttr({
		error: null
	  }), !0) : !t.patch.cgl.currentTextureEffect || (t.patch.cgl.currentTextureEffect && !t.uiAttribs.error ? (t.setUiError('textureeffect', 'This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.', 0), !1) : !t.patch.cgl.currentTextureEffect)
	},
	ct.checkOpInEffect = function (t) {
	  return t.patch.cgl.currentTextureEffect && t.uiAttribs.error ? (t.uiAttr({
		error: null
	  }), !0) : !!t.patch.cgl.currentTextureEffect || (t.patch.cgl.currentTextureEffect || t.uiAttribs.error ? !!t.patch.cgl.currentTextureEffect : (t.setUiError('texeffect', 'This op must be a child of an ImageCompose op! More infos <a href="https://docs.cables.gl/image_composition/image_composition.html" target="_blank">here</a>.', 1), !1))
	},
	ct.getBlendCode = function () {
	  return ''.endl() + 'vec3 _blend(vec3 base,vec3 blend)'.endl() + '{'.endl() + '   vec3 colNew=blend;'.endl() + '   #ifdef BM_MULTIPLY'.endl() + '       colNew=base*blend;'.endl() + '   #endif'.endl() + '   #ifdef BM_MULTIPLY_INV'.endl() + '       colNew=base* vec3(1.0)-blend;'.endl() + '   #endif'.endl() + '   #ifdef BM_AVERAGE'.endl() + '       colNew=((base + blend) / 2.0);'.endl() + '   #endif'.endl() + '   #ifdef BM_ADD'.endl() + '       colNew=min(base + blend, vec3(1.0));'.endl() + '   #endif'.endl() + '   #ifdef BM_SUBSTRACT'.endl() + '       colNew=max(base + blend - vec3(1.0), vec3(0.0));'.endl() + '   #endif'.endl() + '   #ifdef BM_DIFFERENCE'.endl() + '       colNew=abs(base - blend);'.endl() + '   #endif'.endl() + '   #ifdef BM_NEGATION'.endl() + '       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));'.endl() + '   #endif'.endl() + '   #ifdef BM_EXCLUSION'.endl() + '       colNew=(base + blend - 2.0 * base * blend);'.endl() + '   #endif'.endl() + '   #ifdef BM_LIGHTEN'.endl() + '       colNew=max(blend, base);'.endl() + '   #endif'.endl() + '   #ifdef BM_DARKEN'.endl() + '       colNew=min(blend, base);'.endl() + '   #endif'.endl() + '   #ifdef BM_OVERLAY'.endl() + '      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))'.endl() + '      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));'.endl() + '   #endif'.endl() + '   #ifdef BM_SCREEN'.endl() + '      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))'.endl() + '      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));'.endl() + '   #endif'.endl() + '   #ifdef BM_SOFTLIGHT'.endl() + '      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))'.endl() + '      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));'.endl() + '   #endif'.endl() + '   #ifdef BM_HARDLIGHT'.endl() + '      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))'.endl() + '      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));'.endl() + '   #endif'.endl() + '   #ifdef BM_COLORDODGE'.endl() + '      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))'.endl() + '      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));'.endl() + '   #endif'.endl() + '   #ifdef BM_COLORBURN'.endl() + '      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))'.endl() + '      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));'.endl() + '   #endif'.endl() + '   return colNew;'.endl() + '}'.endl() + 'vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)'.endl() + '{'.endl() + '   vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);'.endl() + '   col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);'.endl() + '   return col;'.endl() + '}'
	},
	ct.onChangeBlendSelect = function (t, e) {
	  'normal' == e ? t.define('BM_NORMAL') : t.removeDefine('BM_NORMAL'),
	  'multiply' == e ? t.define('BM_MULTIPLY') : t.removeDefine('BM_MULTIPLY'),
	  'multiply invert' == e ? t.define('BM_MULTIPLY_INV') : t.removeDefine('BM_MULTIPLY_INV'),
	  'average' == e ? t.define('BM_AVERAGE') : t.removeDefine('BM_AVERAGE'),
	  'add' == e ? t.define('BM_ADD') : t.removeDefine('BM_ADD'),
	  'substract' == e ? t.define('BM_SUBSTRACT') : t.removeDefine('BM_SUBSTRACT'),
	  'difference' == e ? t.define('BM_DIFFERENCE') : t.removeDefine('BM_DIFFERENCE'),
	  'negation' == e ? t.define('BM_NEGATION') : t.removeDefine('BM_NEGATION'),
	  'exclusion' == e ? t.define('BM_EXCLUSION') : t.removeDefine('BM_EXCLUSION'),
	  'lighten' == e ? t.define('BM_LIGHTEN') : t.removeDefine('BM_LIGHTEN'),
	  'darken' == e ? t.define('BM_DARKEN') : t.removeDefine('BM_DARKEN'),
	  'overlay' == e ? t.define('BM_OVERLAY') : t.removeDefine('BM_OVERLAY'),
	  'screen' == e ? t.define('BM_SCREEN') : t.removeDefine('BM_SCREEN'),
	  'softlight' == e ? t.define('BM_SOFTLIGHT') : t.removeDefine('BM_SOFTLIGHT'),
	  'hardlight' == e ? t.define('BM_HARDLIGHT') : t.removeDefine('BM_HARDLIGHT'),
	  'color dodge' == e ? t.define('BM_COLORDODGE') : t.removeDefine('BM_COLORDODGE'),
	  'color burn' == e ? t.define('BM_COLORBURN') : t.removeDefine('BM_COLORBURN')
	},
	ct.AddBlendSelect = function (t, e) {
	  return t.inValueSelect(e, [
		'normal',
		'lighten',
		'darken',
		'multiply',
		'multiply invert',
		'average',
		'add',
		'substract',
		'difference',
		'negation',
		'exclusion',
		'overlay',
		'screen',
		'color dodge',
		'color burn',
		'softlight',
		'hardlight'
	  ], 'normal')
	},
	ct.setupBlending = function (t, e, i, s) {
	  t.setPortGroup('Blending', [
		i,
		s
	  ]),
	  i.onChange = function () {
		ct.onChangeBlendSelect(e, i.get());
		let s = i.get();
		'normal' == s ? s = null : 'multiply' == s ? s = 'mul' : 'multiply invert' == s ? s = 'mulinv' : 'lighten' == s ? s = 'light' : 'darken' == s ? s = 'darken' : 'average' == s ? s = 'avg' : 'substract' == s ? s = 'sub' : 'difference' == s ? s = 'diff' : 'negation' == s || 'negation' == s || 'negation' == s ? s = 'neg' : 'exclusion' == s ? s = 'exc' : 'overlay' == s ? s = 'ovl' : 'color dodge' == s ? s = 'dodge' : 'color burn' == s ? s = 'burn' : 'softlight' == s ? s = 'soft' : 'hardlight' == s && (s = 'hard'),
		t.setUiAttrib({
		  extendTitle: s
		})
	  }
	};
	const pt = {
	  'CGL.BLENDMODES': function () {
		this.name = 'blendmodes',
		this.srcHeadFrag = ct.getBlendCode()
	  },
	  'CGL.RANDOM_OLD': function () {
		this.name = 'randomNumber',
		this.srcHeadFrag = ''.endl() + 'float cgl_random(vec2 co)'.endl() + '{'.endl() + '    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);'.endl() + '}'.endl() + 'vec3 cgl_random3(vec2 co)'.endl() + '{'.endl() + '    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));'.endl() + '}'
	  },
	  'CGL.RANDOM_LOW': function () {
		this.name = 'randomNumber',
		this.srcHeadFrag = ''.endl() + 'float cgl_random(vec2 co)'.endl() + '{'.endl() + '    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);'.endl() + '}'.endl() + 'vec3 cgl_random3(vec2 co)'.endl() + '{'.endl() + '    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));'.endl() + '}'
	  },
	  'CGL.RANDOM_TEX': function () {
		this.name = 'randomNumbertex',
		this.srcHeadFrag = ''.endl() + 'UNI sampler2D CGLRNDTEX;'.endl() + 'float cgl_random(vec2 co)'.endl() + '{'.endl() + '    return texture(CGLRNDTEX,co*5711.0).r;'.endl() + '}'.endl() + 'vec3 cgl_random3(vec2 co)'.endl() + '{'.endl() + '    return texture(CGLRNDTEX,co*5711.0).rgb;'.endl() + '}',
		this.initUniforms = function (t) {
		  return [new rt(t, 't', 'CGLRNDTEX', 7)]
		},
		this.onBind = function (t, e) {
		  tt.getRandomTexture(t),
		  t.setTexture(7, tt.getRandomTexture(t).tex)
		}
	  }
	},
	dt = function () {
	  return window.performance.now()
	},
	_t = function () {
	  return dt()
	},
	ft = function () {
	  this._timeStart = dt(),
	  this._timeOffset = 0,
	  this._currentTime = 0,
	  this._lastTime = 0,
	  this._paused = !0,
	  this._delay = 0,
	  this._eventsPaused = !1,
	  this.overwriteTime = - 1,
	  this.cbPlayPause = [
	  ],
	  this.cbTimeChange = [
	  ]
	};
	ft.prototype._getTime = function () {
	  return this._lastTime = (dt() - this._timeStart) / 1000,
	  this._lastTime + this._timeOffset
	},
	ft.prototype._eventPlayPause = function () {
	  if (!this._eventsPaused) for (const t in this.cbPlayPause) this.cbPlayPause[t]()
	},
	ft.prototype._eventTimeChange = function () {
	  if (!this._eventsPaused) for (const t in this.cbTimeChange) this.cbTimeChange[t]()
	},
	ft.prototype.setDelay = function (t) {
	  this._delay = t,
	  this._eventTimeChange()
	},
	ft.prototype.isPlaying = function () {
	  return !this._paused
	},
	ft.prototype.update = function () {
	  if (!this._paused) return this._currentTime = this._getTime(),
	  this._currentTime
	},
	ft.prototype.getMillis = function () {
	  return 1000 * this.get()
	},
	ft.prototype.get = ft.prototype.getTime = function () {
	  return this.overwriteTime >= 0 ? this.overwriteTime - this._delay : this._currentTime - this._delay
	},
	ft.prototype.togglePlay = function () {
	  this._paused ? this.play() : this.pause()
	},
	ft.prototype.setTime = function (t) {
	  t < 0 && (t = 0),
	  this._timeStart = dt(),
	  this._timeOffset = t,
	  this._currentTime = t,
	  this._eventTimeChange()
	},
	ft.prototype.setOffset = function (t) {
	  this._currentTime + t < 0 ? (this._timeStart = dt(), this._timeOffset = 0, this._currentTime = 0) : (this._timeOffset += t, this._currentTime = this._lastTime + this._timeOffset),
	  this._eventTimeChange()
	},
	ft.prototype.play = function () {
	  this._timeStart = dt(),
	  this._paused = !1,
	  this._eventPlayPause()
	},
	ft.prototype.pause = function () {
	  this._timeOffset = this._currentTime,
	  this._paused = !0,
	  this._eventPlayPause()
	},
	ft.prototype.pauseEvents = function (t) {
	  this._eventsPaused = t
	},
	ft.prototype.onPlayPause = function (t) {
	  t && 'function' == typeof t && this.cbPlayPause.push(t)
	},
	ft.prototype.onTimeChange = function (t) {
	  t && 'function' == typeof t && this.cbTimeChange.push(t)
	};
	const gt = Math.PI / 180,
	mt = (Math.PI, - 1 != window.navigator.userAgent.indexOf('Windows')),
	Et = function (t) {
	  let e;
	  if (t.wheelDelta) e = t.wheelDelta % 120 - 0 == - 0 ? t.wheelDelta / 120 : t.wheelDelta / 30,
	  e *= - 1.5,
	  mt && (e *= 2);
	   else {
		let i = t.deltaY;
		t.shiftKey && (i = t.deltaX);
		const s = i || t.detail;
		e = - (s % 3 ? 10 * s : s / 3),
		e *= - 3
	  }
	  return e > 20 && (e = 20),
	  e < - 20 && (e = - 20),
	  e
	},
	Tt = Et,
	bt = Et,
	At = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  '\'': '&#39;'
	},
	yt = /[&<>"']/g,
	xt = RegExp(yt.source),
	vt = function (t, e) {
	  if (!t) throw new Error('shader constructed without cgl ' + e);
	  this._cgl = t,
	  this._name = e || 'unknown',
	  this.glslVersion = 0,
	  t.glVersion > 1 && (this.glslVersion = 300),
	  this.id = v(),
	  this._isValid = !0,
	  this._program = null,
	  this._uniforms = [
	  ],
	  this._drawBuffers = [
		!0
	  ],
	  this._defines = [
	  ],
	  this._needsRecompile = !0,
	  this._projMatrixUniform = null,
	  this._mvMatrixUniform = null,
	  this._mMatrixUniform = null,
	  this._vMatrixUniform = null,
	  this._camPosUniform = null,
	  this._normalMatrixUniform = null,
	  this._inverseViewMatrixUniform = null,
	  this._attrVertexPos = - 1,
	  this.precision = t.patch.config.glslPrecision || 'highp',
	  this._pMatrixState = - 1,
	  this._vMatrixState = - 1,
	  this._modGroupCount = 0,
	  this._feedBackNames = [
	  ],
	  this._attributes = [
	  ],
	  this.glPrimitive = null,
	  this.offScreenPass = !1,
	  this._extensions = [
	  ],
	  this.srcVert = this.getDefaultVertexShader(),
	  this.srcFrag = this.getDefaultFragmentShader(),
	  this.lastCompile = 0,
	  this._moduleNames = [
	  ],
	  this._modules = [
	  ],
	  this._moduleNumId = 0,
	  this._libs = [
	  ],
	  this._structNames = [
	  ],
	  this._structUniformNames = [
	  ],
	  this._textureStackUni = [
	  ],
	  this._textureStackTex = [
	  ],
	  this._textureStackType = [
	  ],
	  this._textureStackTexCgl = [
	  ],
	  this._tempNormalMatrix = mat4.create(),
	  this._tempCamPosMatrix = mat4.create(),
	  this._tempInverseViewMatrix = mat4.create(),
	  this.setModules(['MODULE_VERTEX_POSITION',
	  'MODULE_COLOR',
	  'MODULE_BEGIN_FRAG'])
	};
	vt.prototype.isValid = function () {
	  return this._isValid
	},
	vt.prototype.getCgl = function () {
	  return this._cgl
	},
	vt.prototype.getName = function () {
	  return this._name
	},
	vt.prototype.enableExtension = function (t) {
	  this.setWhyCompile('enable extension ' + t),
	  this._needsRecompile = !0,
	  this._extensions.push(t)
	},
	vt.prototype.getAttrVertexPos = function () {
	  return this._attrVertexPos
	},
	vt.prototype.hasTextureUniforms = function () {
	  for (let t = 0; t < this._uniforms.length; t++) if ('t' == this._uniforms[t].getType()) return !0;
	  return !1
	},
	vt.prototype.setWhyCompile = function (t) {
	},
	vt.prototype.copyUniformValues = function (t) {
	  for (let e = 0; e < t._uniforms.length; e++) this._uniforms[e] && this._uniforms[e].set(t._uniforms[e].getValue());
	  this.popTextures();
	  for (let e = 0; e < t._textureStackUni.length; e++) this._textureStackUni[e] = t._textureStackUni[e],
	  this._textureStackTex[e] = t._textureStackTex[e],
	  this._textureStackType[e] = t._textureStackType[e],
	  this._textureStackTexCgl[e] = t._textureStackTexCgl[e]
	},
	vt.prototype.copy = function () {
	  const t = new vt(this._cgl, this._name + ' copy');
	  t.setSource(this.srcVert, this.srcFrag),
	  t._modules = JSON.parse(JSON.stringify(this._modules)),
	  t._defines = JSON.parse(JSON.stringify(this._defines)),
	  t._modGroupCount = this._modGroupCount,
	  t._moduleNames = this._moduleNames,
	  t.glPrimitive = this.glPrimitive,
	  t.offScreenPass = this.offScreenPass,
	  t._extensions = this._extensions;
	  for (let e = 0; e < this._uniforms.length; e++) {
		this._uniforms[e].copy(t).resetLoc()
	  }
	  return t._needsRecompile = !0,
	  t
	},
	vt.prototype.setSource = function (t, e) {
	  this.srcVert = t,
	  this.srcFrag = e,
	  this.setWhyCompile('Source changed'),
	  this._needsRecompile = !0
	},
	vt.prototype._addLibs = function (t) {
	  for (const e in pt) if (t.indexOf(e) > - 1) {
		const i = new pt[e];
		t = t.replace('{{' + e + '}}', i.srcHeadFrag),
		this._libs.push(i),
		i.initUniforms && i.initUniforms(this)
	  }
	  return t
	},
	vt.prototype.createStructUniforms = function () {
	  let t = '',
	  e = '';
	  this._structNames = [
	  ],
	  this._injectedStringsFrag = {
	  },
	  this._injectedStringsVert = {
	  },
	  this._structUniformNamesIndicesFrag = [
	  ],
	  this._structUniformNamesIndicesVert = [
	  ];
	  for (let i = 0; i < this._uniforms.length; i++) if (this._uniforms[i].isStructMember()) {
		const s = '{{INJECTION_POINT_STRUCT_' + this._uniforms[i]._structName + '}}';
		if ( - 1 === this._structNames.indexOf(this._uniforms[i]._structName)) {
		  const r = 'struct ' + this._uniforms[i]._structName + ' {'.endl() + s + '};'.endl().endl();
		  'both' !== this._uniforms[i].getShaderType() && 'frag' !== this._uniforms[i].getShaderType() || (t = t.concat(r)),
		  'both' !== this._uniforms[i].getShaderType() && 'vert' !== this._uniforms[i].getShaderType() || (e = e.concat(r)),
		  this._structNames.push(this._uniforms[i]._structName),
		  this._injectedStringsFrag[this._uniforms[i]._structName] = [
		  ],
		  this._injectedStringsVert[this._uniforms[i]._structName] = [
		  ]
		}
		let r = '';
		this._uniforms[i].comment && (r = ' // ' + this._uniforms[i].comment);
		let n = '';
		if (null == this._uniforms[i].getGlslTypeString() && (n += '//'), n += '  ' + this._uniforms[i].getGlslTypeString() + ' ' + this._uniforms[i]._propertyName + ';' + r, 'both' === this._uniforms[i].getShaderType()) {
		  if ( - 1 === this._injectedStringsFrag[this._uniforms[i]._structName].indexOf(n) && - 1 === this._injectedStringsVert[this._uniforms[i]._structName].indexOf(n)) {
			const r = t.lastIndexOf(s),
			o = e.lastIndexOf(s);
			t = t.slice(0, r) + n + t.slice(r - 1),
			e = e.slice(0, o) + n + e.slice(o - 1),
			this._injectedStringsFrag[this._uniforms[i]._structName].push(n),
			this._injectedStringsVert[this._uniforms[i]._structName].push(n)
		  }
		  - 1 === this._structUniformNamesIndicesFrag.indexOf(i) && this._structUniformNamesIndicesFrag.push(i),
		  - 1 === this._structUniformNamesIndicesVert.indexOf(i) && this._structUniformNamesIndicesVert.push(i)
		} else if ('frag' === this._uniforms[i].getShaderType()) {
		  if ( - 1 === this._injectedStringsFrag[this._uniforms[i]._structName].indexOf(n)) {
			const e = t.lastIndexOf(s);
			t = t.slice(0, e) + n + t.slice(e - 1),
			this._injectedStringsFrag[this._uniforms[i]._structName].push(n)
		  }
		  - 1 === this._structUniformNamesIndicesFrag.indexOf(i) && this._structUniformNamesIndicesFrag.push(i)
		} else if ('vert' === this._uniforms[i].getShaderType()) {
		  if ( - 1 === this._injectedStringsVert[this._uniforms[i]._structName].indexOf(n)) {
			const t = e.lastIndexOf(s);
			e = e.slice(0, t) + n + e.slice(t - 1),
			this._injectedStringsVert[this._uniforms[i]._structName].push(n)
		  }
		  - 1 === this._structUniformNamesIndicesVert.indexOf(i) && this._structUniformNamesIndicesVert.push(i)
		}
	  }
	  this._uniDeclarationsFrag = [
	  ],
	  this._uniDeclarationsVert = [
	  ];
	  for (let e = 0; e < this._structUniformNamesIndicesFrag.length; e += 1) {
		const i = this._structUniformNamesIndicesFrag[e],
		s = 'UNI ' + this._uniforms[i]._structName + ' ' + this._uniforms[i]._structUniformName + ';'.endl();
		if ( - 1 === this._uniDeclarationsFrag.indexOf(s)) {
		  const e = '{{INJECTION_POINT_STRUCT_' + this._uniforms[i]._structName + '}}';
		  t = t.replace(e, ''),
		  t += s,
		  this._uniDeclarationsFrag.push(s)
		}
	  }
	  for (let t = 0; t < this._structUniformNamesIndicesVert.length; t += 1) {
		const i = this._structUniformNamesIndicesVert[t],
		s = 'UNI ' + this._uniforms[i]._structName + ' ' + this._uniforms[i]._structUniformName + ';'.endl();
		if ( - 1 === this._uniDeclarationsVert.indexOf(s)) {
		  const t = '{{INJECTION_POINT_STRUCT_' + this._uniforms[i]._structName + '}}';
		  e = e.replace(t, ''),
		  e += s,
		  this._uniDeclarationsVert.push(s)
		}
	  }
	  return [e,
	  t]
	},
	vt.prototype.compile = function () {
	  const t = performance.now();
	  $.profileShaderCompiles++,
	  $.profileShaderCompileName = this._name;
	  let e = '';
	  if (this._extensions) for (let t = 0; t < this._extensions.length; t++) e += '#extension ' + this._extensions[t] + ' : enable'.endl();
	  let i = '';
	  this._defines.length && (i = '\n// cgl generated'.endl());
	  for (let t = 0; t < this._defines.length; t++) i += '#define ' + this._defines[t][0] + ' ' + this._defines[t][1] + ''.endl();
	  const s = this.createStructUniforms();
	  if (this._uniforms) {
		const t = this._uniforms.map(t=>t._name),
		e = [
		];
		for (let i = 0; i < this._uniforms.length; i++) {
		  const s = this._uniforms[i];
		  t.indexOf(s._name, i + 1) > - 1 && e.push(i)
		}
		for (let t = this._uniforms.length - 1; t >= 0; t -= 1) e.indexOf(t) > - 1 ? this._uniforms.splice(t, 1) : this._uniforms[t].resetLoc()
	  }
	  this.hasTextureUniforms() && (i += '#define HAS_TEXTURES'.endl());
	  let r = '',
	  n = '';
	  if (this.srcFrag || (console.error('[cgl shader] has no fragment source!'), this.srcVert = this.getDefaultVertexShader(), this.srcFrag = this.getDefaultFragmentShader()), 300 == this.glslVersion) {
		let t = '';
		if (this.srcFrag.indexOf('outColor0') > - 1 && (this._drawBuffers[0] = !0), this.srcFrag.indexOf('outColor1') > - 1 && (this._drawBuffers[1] = !0), this.srcFrag.indexOf('outColor2') > - 1 && (this._drawBuffers[2] = !0), this.srcFrag.indexOf('outColor3') > - 1 && (this._drawBuffers[3] = !0), 1 == this._drawBuffers.length) t = 'out vec4 outColor;'.endl(),
		t += '#define gl_FragColor outColor'.endl();
		 else {
		  let e = 0;
		  t += 'vec4 outColor;'.endl();
		  for (let i = 0; i < this._drawBuffers.length; i++) 0 == e && (t += '#define gl_FragColor outColor' + i + ''.endl()),
		  t += 'layout(location = ' + i + ') out vec4 outColor' + i + ';'.endl(),
		  e++
		}
		r = '#version 300 es'.endl() + '// '.endl() + '// vertex shader ' + this._name.endl() + '// '.endl() + 'precision ' + this.precision + ' float;'.endl() + ''.endl() + '#define WEBGL2'.endl() + '#define texture2D texture'.endl() + '#define UNI uniform'.endl() + '#define IN in'.endl() + '#define OUT out'.endl(),
		n = '#version 300 es'.endl() + '// '.endl() + '// fragment shader ' + this._name.endl() + '// '.endl() + 'precision ' + this.precision + ' float;'.endl() + ''.endl() + '#define WEBGL2'.endl() + '#define texture2D texture'.endl() + '#define IN in'.endl() + '#define UNI uniform'.endl() + t.endl()
	  } else n = ''.endl() + '// '.endl() + '// fragment shader ' + this._name.endl() + '// '.endl() + '#define WEBGL1'.endl() + '#define texture texture2D'.endl() + '#define outColor gl_FragColor'.endl() + '#define IN varying'.endl() + '#define UNI uniform'.endl(),
	  r = ''.endl() + '// '.endl() + '// vertex shader ' + this._name.endl() + '// '.endl() + '#define WEBGL1'.endl() + '#define texture texture2D'.endl() + '#define OUT varying'.endl() + '#define IN attribute'.endl() + '#define UNI uniform'.endl();
	  let o = '\n// cgl generated'.endl(),
	  h = '\n// cgl generated'.endl();
	  n += '\n// active mods: --------------- ',
	  r += '\n// active mods: --------------- ';
	  let a = !1,
	  l = !1;
	  for (let t = 0; t < this._moduleNames.length; t++) for (let e = 0; e < this._modules.length; e++) this._modules[e].name == this._moduleNames[t] && ((this._modules[e].srcBodyFrag || this._modules[e].srcHeadFrag) && (a = !0, n += '\n// ' + t + '.' + e + '. ' + this._modules[e].title + ' (' + this._modules[e].name + ')'), (this._modules[e].srcBodyVert || this._modules[e].srcHeadVert) && (r += '\n// ' + t + '.' + e + '. ' + this._modules[e].title + ' (' + this._modules[e].name + ')', l = !0));
	  l || (n += '\n// no mods used...'),
	  a || (n += '\n// no mods used...'),
	  n += '\n',
	  r += '\n';
	  for (let t = 0; t < this._uniforms.length; t++) if (this._uniforms[t].shaderType && !this._uniforms[t].isStructMember()) {
		let e = '';
		this._uniforms[t].getGlslTypeString() || (e += '// '),
		e += 'UNI ' + this._uniforms[t].getGlslTypeString() + ' ' + this._uniforms[t].getName();
		let i = '';
		this._uniforms[t].comment && (i = ' // ' + this._uniforms[t].comment),
		'vert' != this._uniforms[t].shaderType && 'both' != this._uniforms[t].shaderType || - 1 == this.srcVert.indexOf(e) && - 1 == this.srcVert.indexOf('uniform ' + this._uniforms[t].getGlslTypeString() + ' ' + this._uniforms[t].getName()) && (o += e + ';' + i.endl()),
		'frag' != this._uniforms[t].shaderType && 'both' != this._uniforms[t].shaderType || - 1 == this.srcFrag.indexOf(e) && - 1 == this.srcFrag.indexOf('uniform ' + this._uniforms[t].getGlslTypeString() + ' ' + this._uniforms[t].getName()) && (h += e + ';' + i.endl())
	  }
	  let u = 0,
	  c = 0;
	  for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].shaderType && !this._uniforms[t].isStructMember() && ('vert' != this._uniforms[t].shaderType && 'both' != this._uniforms[t].shaderType || c++, 'frag' != this._uniforms[t].shaderType && 'both' != this._uniforms[t].shaderType || u++);
	  u >= this._cgl.maxUniformsFrag && console.warn('[cgl_shader] num uniforms frag: ' + u + ' / ' + this._cgl.maxUniformsFrag),
	  c >= this._cgl.maxUniformsVert && console.warn('[cgl_shader] num uniforms vert: ' + c + ' / ' + this._cgl.maxUniformsVert),
	  - 1 == n.indexOf('precision') && (n = 'precision ' + this.precision + ' float;'.endl() + n),
	  - 1 == r.indexOf('precision') && (r = 'precision ' + this.precision + ' float;'.endl() + r),
	  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (n += '#define MOBILE'.endl(), r += '#define MOBILE'.endl()),
	  r = e + r + i + s[0] + o + '\n// -- \n' + this.srcVert,
	  n = e + n + i + s[1] + h + '\n// -- \n' + this.srcFrag;
	  let p = '',
	  d = '';
	  this._modules.sort((function (t, e) {
		return t.group - e.group
	  })),
	  this._modules.sort((function (t, e) {
		return t.priority || 0 - e.priority || 0
	  }));
	  let _ = !1;
	  for (let t = 0; t < this._moduleNames.length; t++) {
		let e = '',
		i = '';
		for (let s = 0; s < this._modules.length; s++) if (this._modules[s].name == this._moduleNames[t]) {
		  if (p += '\n//---- MOD: group:' + this._modules[s].group + ': idx:' + s + ' - prfx:' + this._modules[s].prefix + ' - ' + this._modules[s].title + ' ------\n', d += '\n//---- MOD: group:' + this._modules[s].group + ': idx:' + s + ' - prfx:' + this._modules[s].prefix + ' - ' + this._modules[s].title + ' ------\n', e += '\n\n//---- MOD: ' + this._modules[s].title + ' ------\n', i += '\n\n//---- MOD: ' + this._modules[s].title + ' ------\n', !_) {
			_ = !0;
			for (let t = 0; t < this._attributes.length; t++) this._attributes[t].name && this._attributes[t].type && (p += ''.endl() + '#ifndef ATTRIB_' + this._attributes[t].name.endl() + '  #define ATTRIB_' + this._attributes[t].name.endl() + '  IN ' + this._attributes[t].type + ' ' + this._attributes[t].name + ';'.endl() + '#endif', this._attributes[t].nameFrag && (p += ''.endl() + '#ifndef ATTRIB_' + this._attributes[t].nameFrag.endl() + '  #define ATTRIB_' + this._attributes[t].nameFrag.endl() + '  OUT ' + this._attributes[t].type + ' ' + this._attributes[t].nameFrag + ';'.endl() + '#endif', e += ''.endl() + this._attributes[t].nameFrag + '=' + this._attributes[t].name + ';'), d += ''.endl() + '#ifndef ATTRIB_' + this._attributes[t].nameFrag.endl() + '  #define ATTRIB_' + this._attributes[t].nameFrag.endl() + '  IN ' + this._attributes[t].type + ' ' + this._attributes[t].nameFrag + ';'.endl() + '#endif')
		  }
		  p += this._modules[s].srcHeadVert || '',
		  d += this._modules[s].srcHeadFrag || '',
		  e += this._modules[s].srcBodyVert || '',
		  i += this._modules[s].srcBodyFrag || '',
		  p += '\n//---- end mod ------\n',
		  d += '\n//---- end mod ------\n',
		  e += '\n//---- end mod ------\n',
		  i += '\n//---- end mod ------\n',
		  e = e.replace(/{{mod}}/g, this._modules[s].prefix),
		  i = i.replace(/{{mod}}/g, this._modules[s].prefix),
		  p = p.replace(/{{mod}}/g, this._modules[s].prefix),
		  d = d.replace(/{{mod}}/g, this._modules[s].prefix),
		  e = e.replace(/MOD_/g, this._modules[s].prefix),
		  i = i.replace(/MOD_/g, this._modules[s].prefix),
		  p = p.replace(/MOD_/g, this._modules[s].prefix),
		  d = d.replace(/MOD_/g, this._modules[s].prefix)
		}
		r = r.replace('{{' + this._moduleNames[t] + '}}', e),
		n = n.replace('{{' + this._moduleNames[t] + '}}', i)
	  }
	  if (r = r.replace('{{MODULES_HEAD}}', p), n = n.replace('{{MODULES_HEAD}}', d), r = this._addLibs(r), n = this._addLibs(n), this._program) {
		this._program = this._createProgram(r, n),
		this._projMatrixUniform = null;
		for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].resetLoc()
	  } else this._program = this._createProgram(r, n);
	  this.finalShaderFrag = n,
	  this.finalShaderVert = r,
	  ht.lastMesh = null,
	  ht.lastShader = null,
	  this._needsRecompile = !1,
	  this.lastCompile = _t(),
	  this._cgl.printError('shader compile'),
	  CGL.profileData.shaderCompileTime += performance.now() - t
	},
	vt.hasChanged = function () {
	  return this._needsRecompile
	},
	vt.prototype.bind = function () {
	  if (this._isValid) {
		if (ht.lastShader = this, this._program && !this._needsRecompile || this.compile(), !this._projMatrixUniform) {
		  this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, ot.SHADER.SHADERVAR_VERTEX_POSITION),
		  this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, ot.SHADER.SHADERVAR_UNI_PROJMAT),
		  this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, 'mvMatrix'),
		  this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, ot.SHADER.SHADERVAR_UNI_VIEWMAT),
		  this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, ot.SHADER.SHADERVAR_UNI_MODELMAT),
		  this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, ot.SHADER.SHADERVAR_UNI_VIEWPOS),
		  this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, ot.SHADER.SHADERVAR_UNI_NORMALMAT),
		  this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, ot.SHADER.SHADERVAR_UNI_INVVIEWMAT);
		  for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].needsUpdate = !0
		}
		this._cgl.currentProgram != this._program && ($.profileShaderBinds++, this._cgl.gl.useProgram(this._program), this._cgl.currentProgram = this._program);
		for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].needsUpdate && this._uniforms[t].updateValue();
		if (this._pMatrixState != this._cgl.getProjectionMatrixStateCount() && (this._pMatrixState = this._cgl.getProjectionMatrixStateCount(), this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, !1, this._cgl.pMatrix), $.profileMVPMatrixCount++), this._vMatrixUniform) this._vMatrixState != this._cgl.getViewMatrixStateCount() && (this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, !1, this._cgl.vMatrix), $.profileMVPMatrixCount++, this._vMatrixState = this._cgl.getViewMatrixStateCount(), this._inverseViewMatrixUniform && (mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix), this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, !1, this._tempInverseViewMatrix), $.profileMVPMatrixCount++)),
		this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, !1, this._cgl.mMatrix),
		$.profileMVPMatrixCount++,
		this._camPosUniform && (mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix), this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]), $.profileMVPMatrixCount++);
		 else {
		  const t = mat4.create();
		  mat4.mul(t, this._cgl.vMatrix, this._cgl.mMatrix),
		  this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, !1, t),
		  $.profileMVPMatrixCount++
		}
		this._normalMatrixUniform && (mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix), mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix), this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, !1, this._tempNormalMatrix), $.profileMVPMatrixCount++);
		for (let t = 0; t < this._libs.length; t++) this._libs[t].onBind && this._libs[t].onBind.bind(this._libs[t]) (this._cgl, this);
		this._bindTextures()
	  }
	},
	vt.prototype.toggleDefine = function (t, e) {
	  e && 'object' == typeof e && e.addEventListener && (e.removeEventListener('change', e.onToggleDefine), e.onToggleDefine = e=>{
		this.toggleDefine(t, e)
	  }, e.on('change', e.onToggleDefine), e = e.get()),
	  e ? this.define(t) : this.removeDefine(t)
	},
	vt.prototype.define = function (t, e) {
	  null == e && (e = ''),
	  'object' == typeof e && (e.removeEventListener('change', e.onDefineChange), e.onDefineChange = e=>{
		this.define(t, e)
	  }, e.on('change', e.onDefineChange), e = e.get());
	  for (let i = 0; i < this._defines.length; i++) {
		if (this._defines[i][0] == t && this._defines[i][1] == e) return;
		if (this._defines[i][0] == t) return this._defines[i][1] = e,
		void (this._needsRecompile = !0)
	  }
	  this._defines.push([t,
	  e]),
	  this._needsRecompile = !0,
	  this.setWhyCompile('define ' + t + ' ' + e)
	},
	vt.prototype.getDefines = function () {
	  return this._defines
	},
	vt.prototype.getDefine = function (t) {
	  for (let e = 0; e < this._defines.length; e++) if (this._defines[e][0] == t) return this._defines[e][1];
	  return null
	},
	vt.prototype.hasDefine = function (t) {
	  for (let e = 0; e < this._defines.length; e++) if (this._defines[e][0] == t) return !0
	},
	vt.prototype.removeDefine = function (t) {
	  for (let e = 0; e < this._defines.length; e++) if (this._defines[e][0] == t) return this._defines.splice(e, 1),
	  void (this._needsRecompile = !0)
	},
	vt.prototype.removeModule = function (t) {
	  for (let e = 0; e < this._modules.length; e++) if (t && t.id && (this._modules[e].id == t.id || !this._modules[e])) {
		let i = !0;
		for (; i; ) {
		  i = !1;
		  for (let e = 0; e < this._uniforms.length; e++) 0 != this._uniforms[e].getName().indexOf(t.prefix) || (this._uniforms.splice(e, 1), i = !0)
		}
		this._needsRecompile = !0,
		this.setWhyCompile('remove module ' + t.title),
		this._modules.splice(e, 1);
		break
	  }
	},
	vt.prototype.getNumModules = function () {
	  return this._modules.length
	},
	vt.prototype.getCurrentModules = function () {
	  return this._modules
	},
	vt.prototype.addModule = function (t, e) {
	  return t.id || (t.id = y()),
	  t.numId || (t.numId = this._moduleNumId),
	  t.num || (t.num = this._modules.length),
	  e && !e.group && (e.group = v()),
	  t.group || (t.group = e ? e.group : v()),
	  t.prefix = 'mod' + t.group + '_',
	  this._modules.push(t),
	  this._needsRecompile = !0,
	  this.setWhyCompile('add module ' + t.title),
	  this._moduleNumId++,
	  t
	},
	vt.prototype.hasModule = function (t) {
	  for (let e = 0; e < this._modules.length; e++) if (this._modules[e].id == t) return !0;
	  return !1
	},
	vt.prototype.setModules = function (t) {
	  this._moduleNames = t
	},
	vt.prototype.dispose = function () {
	  this._cgl.gl.deleteProgram(this._program)
	},
	vt.prototype.setDrawBuffers = function (t) {
	  this._drawBuffers = t,
	  this._needsRecompile = !0
	},
	vt.prototype.getUniforms = function () {
	  return this._uniforms
	},
	vt.prototype.getUniform = function (t) {
	  for (let e = 0; e < this._uniforms.length; e++) if (this._uniforms[e].getName() == t) return this._uniforms[e];
	  return null
	},
	vt.prototype.removeUniform = function (t) {
	  for (let e = 0; e < this._uniforms.length; e++) this._uniforms[e].getName() == t && this._uniforms.splice(e, 1);
	  this._needsRecompile = !0,
	  this.setWhyCompile('remove uniform ' + t)
	},
	vt.prototype._addUniform = function (t) {
	  this._uniforms.push(t),
	  this.setWhyCompile('add uniform ' + name),
	  this._needsRecompile = !0
	},
	vt.prototype.addUniformFrag = function (t, e, i, s, r, n) {
	  const o = new CGL.Uniform(this, t, e, i, s, r, n);
	  return o.shaderType = 'frag',
	  o
	},
	vt.prototype.addUniformVert = function (t, e, i, s, r, n) {
	  const o = new CGL.Uniform(this, t, e, i, s, r, n);
	  return o.shaderType = 'vert',
	  o
	},
	vt.prototype.addUniformBoth = function (t, e, i, s, r, n) {
	  const o = new CGL.Uniform(this, t, e, i, s, r, n);
	  return o.shaderType = 'both',
	  o
	},
	vt.prototype.addUniformStructFrag = function (t, e, i) {
	  const s = {
	  };
	  if (!i) return s;
	  for (let r = 0; r < i.length; r += 1) {
		const n = i[r];
		if (!this.hasUniform(e + '.' + n.name)) {
		  const i = new CGL.Uniform(this, n.type, e + '.' + n.name, n.v1, n.v2, n.v3, n.v4, e, t, n.name);
		  i.shaderType = 'frag',
		  s[e + '.' + n.name] = i
		}
	  }
	  return s
	},
	vt.prototype.addUniformStructVert = function (t, e, i) {
	  const s = {
	  };
	  if (!i) return s;
	  for (let r = 0; r < i.length; r += 1) {
		const n = i[r];
		if (!this.hasUniform(e + '.' + n.name)) {
		  const i = new CGL.Uniform(this, n.type, e + '.' + n.name, n.v1, n.v2, n.v3, n.v4, e, t, n.name);
		  i.shaderType = 'vert',
		  s[e + '.' + n.name] = i
		}
	  }
	  return s
	},
	vt.prototype.addUniformStructBoth = function (t, e, i) {
	  const s = {
	  };
	  if (!i) return s;
	  for (let r = 0; r < i.length; r += 1) {
		const n = i[r];
		if ('2i' !== n.type && 'i' !== n.type && '3i' !== n.type || console.error('Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:', t, ' with member:', n.name, ' of type:', n.type, '.'), !this.hasUniform(e + '.' + n.name)) {
		  const i = new CGL.Uniform(this, n.type, e + '.' + n.name, n.v1, n.v2, n.v3, n.v4, e, t, n.name);
		  i.shaderType = 'both',
		  s[e + '.' + n.name] = i
		}
	  }
	  return s
	},
	vt.prototype.hasUniform = function (t) {
	  for (let e = 0; e < this._uniforms.length; e++) if (this._uniforms[e].getName() == t) return !0;
	  return !1
	},
	vt.prototype._createProgram = function (t, e) {
	  const i = this._cgl.gl.createProgram();
	  return this.vshader = vt.createShader(this._cgl, t, this._cgl.gl.VERTEX_SHADER, this),
	  this.fshader = vt.createShader(this._cgl, e, this._cgl.gl.FRAGMENT_SHADER, this),
	  this._cgl.gl.attachShader(i, this.vshader),
	  this._cgl.gl.attachShader(i, this.fshader),
	  this._linkProgram(i),
	  i
	},
	vt.prototype.hasErrors = function () {
	  return this._hasErrors
	},
	vt.prototype._linkProgram = function (t) {
	  this._feedBackNames.length > 0 && this._cgl.gl.transformFeedbackVaryings(t, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS),
	  this._cgl.gl.linkProgram(t),
	  this._isValid = !0,
	  !1 !== this._cgl.patch.config.glValidateShader && (this._cgl.gl.validateProgram(t), this._cgl.gl.getProgramParameter(t, this._cgl.gl.LINK_STATUS) || (console.warn(this._cgl.gl.getShaderInfoLog(this.fshader) || 'empty shader infolog'), console.warn(this._cgl.gl.getShaderInfoLog(this.vshader) || 'empty shader infolog'), console.error(name + ' shader linking fail...'), d.log('srcFrag', this.srcFrag), d.log('srcVert', this.srcVert), d.log(name + ' programinfo: ', this._cgl.gl.getProgramInfoLog(t)), d.log('--------------------------------------'), d.log(this), d.log('--------------------------------------'), this._isValid = !1, this._name = 'errorshader', this.setSource(vt.getDefaultVertexShader(), vt.getErrorFragmentShader())))
	},
	vt.prototype.getProgram = function () {
	  return this._program
	},
	vt.prototype.setFeedbackNames = function (t) {
	  this._needsRecompile = !0,
	  this._feedBackNames = t
	},
	vt.prototype.getDefaultVertexShader = vt.getDefaultVertexShader = function () {
	  return ''.endl() + '{{MODULES_HEAD}}'.endl() + 'IN vec3 vPosition;'.endl() + 'IN vec2 attrTexCoord;'.endl() + 'IN vec3 attrVertNormal;'.endl() + 'IN vec3 attrTangent,attrBiTangent;'.endl() + 'IN float attrVertIndex;'.endl() + 'OUT vec2 texCoord;'.endl() + 'OUT vec3 norm;'.endl() + 'UNI mat4 projMatrix;'.endl() + 'UNI mat4 viewMatrix;'.endl() + 'UNI mat4 modelMatrix;'.endl() + 'void main()'.endl() + '{'.endl() + '   texCoord=attrTexCoord;'.endl() + '   norm=attrVertNormal;'.endl() + '   vec4 pos=vec4(vPosition,  1.0);'.endl() + '   mat4 mMatrix=modelMatrix;'.endl() + '   {{MODULE_VERTEX_POSITION}}'.endl() + '   gl_Position = projMatrix * (viewMatrix*mMatrix) * pos;'.endl() + '}'
	},
	vt.prototype.getDefaultFragmentShader = vt.getDefaultFragmentShader = function (t, e, i) {
	  return null == t && (t = 0.5, e = 0.5, i = 0.5),
	  ''.endl() + 'IN vec2 texCoord;'.endl() + '{{MODULES_HEAD}}'.endl() + 'void main()'.endl() + '{'.endl() + '    vec4 col=vec4(' + t + ',' + e + ',' + i + ',1.0);'.endl() + '    {{MODULE_COLOR}}'.endl() + '    outColor = col;'.endl() + '}'
	},
	vt.prototype.addAttribute = function (t) {
	  for (let e = 0; e < this._attributes.length; e++) if (this._attributes[e].name == t.name && this._attributes[e].nameFrag == t.nameFrag) return;
	  this._attributes.push(t),
	  this._needsRecompile = !0
	},
	vt.prototype.bindTextures = vt.prototype._bindTextures = function () {
	  this._textureStackTex.length > this._cgl.maxTextureUnits && console.log('[shader._bindTextures] too many textures bound', this._textureStackTex.length + '/' + this._cgl.maxTextureUnits);
	  for (let t = 0; t < this._textureStackTex.length; t++) this._textureStackTex[t] ? this._textureStackUni[t] ? (this._textureStackUni[t].setValue(t), this._cgl.setTexture(t, this._textureStackTex[t], this._textureStackType[t])) : (console.log('no uniform for pushtexture', this._name), this._cgl.setTexture(t, this._textureStackTex[t], this._textureStackType[t])) : console.log('no texture for pushtexture', this._name)
	},
	vt.prototype.setUniformTexture = function (t, e) {
	  for (let i = 0; i < this._textureStackTex.length; i++) if (this._textureStackUni[i] == t) {
		const t = this._textureStackTex[i];
		return this._textureStackTex[i] = e,
		t
	  }
	  return null
	},
	vt.prototype.pushTexture = function (t, e, i) {
	  if (!t) throw new Error('no uniform given to texturestack');
	  e && (e instanceof WebGLTexture ? (this._textureStackUni.push(t), e.tex ? (this._textureStackTexCgl.push(e), this._textureStackTex.push(e.tex)) : (this._textureStackTexCgl.push(null), this._textureStackTex.push(e)), this._textureStackType.push(i)) : console.warn('[cgl_shader] invalid texture', e))
	},
	vt.prototype.popTexture = function () {
	  this._textureStackUni.pop(),
	  this._textureStackTex.pop(),
	  this._textureStackType.pop()
	},
	vt.prototype.popTextures = function () {
	  this._textureStackTex.length = this._textureStackTexCgl.length = this._textureStackType.length = this._textureStackUni.length = 0
	},
	vt.getErrorFragmentShader = function () {
	  return ''.endl() + 'void main()'.endl() + '{'.endl() + '   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;'.endl() + '   g= step(0.1,g);'.endl() + '   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);'.endl() + '}'
	},
	vt.createShader = function (t, e, i, s) {
	  if (t.aborted) return;
	  t.printError('shader create1');
	  const r = t.gl.createShader(i);
	  if (t.gl.shaderSource(r, e), t.gl.compileShader(r), !t.gl.getShaderParameter(r, t.gl.COMPILE_STATUS)) {
		d.log('compile status: '),
		i == t.gl.VERTEX_SHADER && d.log('VERTEX_SHADER'),
		i == t.gl.FRAGMENT_SHADER && d.log('FRAGMENT_SHADER');
		let o = t.gl.getShaderInfoLog(r) || 'empty shader info log';
		const h = function (t) {
		  const e = [
		  ],
		  i = t.split('\n');
		  for (const t in i) {
			const s = i[t].split(':');
			parseInt(s[2], 10) && e.push(parseInt(s[2], 10))
		  }
		  return e
		}(o);
		let a = '<div class="shaderErrorCode">';
		const l = e.match(/^.*((\r\n|\n|\r)|$)/gm);
		for (const t in l) {
		  const e = parseInt(t, 10) + 1,
		  i = e + ': ' + l[t];
		  d.log(i);
		  let s = !1;
		  for (const t in h) h[t] == e && (s = !0);
		  s && (a += '<span class="error">'),
		  a += (n = i) && xt.test(n) ? n.replace(yt, (function (t) {
			return At[t]
		  })) : n || '',
		  s && (a += '</span>')
		}
		console.warn(o),
		o = o.replace(/\n/g, '<br/>'),
		a = o + '<br/>' + a + '<br/><br/>',
		t.patch.emitEvent('criticalError', 'Shader error ' + name, a),
		t.patch.isEditorMode() && d.log('Shader error ' + name, a),
		a += '</div>',
		this._name = 'errorshader',
		s.setSource(vt.getDefaultVertexShader(), vt.getErrorFragmentShader())
	  }
	  var n;
	  return t.printError('shader create2'),
	  r
	};
	const It = function () {
	  this._arr = [
		mat4.create()
	  ],
	  this._index = 0,
	  this.stateCounter = 0
	};
	It.prototype.push = function (t) {
	  if (this._index++, this.stateCounter++, this._index == this._arr.length) {
		const t = mat4.create();
		this._arr.push(t)
	  }
	  return mat4.copy(this._arr[this._index], t || this._arr[this._index - 1]),
	  this._arr[this._index]
	},
	It.prototype.pop = function () {
	  return this.stateCounter++,
	  this._index--,
	  this._index < 0 && (this._index = 0),
	  this._arr[this._index]
	},
	It.prototype.length = function () {
	  return this._index
	};
	const Ot = function (t) {
	  _.apply(this);
	  const e = [
		0,
		0,
		0,
		0
	  ];
	  this.glVersion = 0,
	  this.glUseHalfFloatTex = !1,
	  this.clearCanvasTransparent = !0,
	  this.clearCanvasDepth = !0,
	  this.patch = t,
	  this.debugOneFrame = !1,
	  this.maxTextureUnits = 0,
	  this.currentProgram = null,
	  this._hadStackError = !1,
	  this.glSlowRenderer = !1,
	  this.temporaryTexture = null,
	  this.frameStore = {
	  },
	  this._onetimeCallbacks = [
	  ],
	  this.gl = null,
	  this._cursor = 'auto',
	  this._currentCursor = '',
	  this.pMatrix = mat4.create(),
	  this.mMatrix = mat4.create(),
	  this.vMatrix = mat4.create(),
	  this._textureslots = [
	  ],
	  this._pMatrixStack = new It,
	  this._mMatrixStack = new It,
	  this._vMatrixStack = new It,
	  this._glFrameBufferStack = [
	  ],
	  this._frameBufferStack = [
	  ],
	  this._shaderStack = [
	  ],
	  Object.defineProperty(this, 'mvMatrix', {
		get() {
		  return this.mMatrix
		},
		set(t) {
		  this.mMatrix = t
		}
	  }),
	  this.canvas = null,
	  this.pixelDensity = 1,
	  mat4.identity(this.mMatrix),
	  mat4.identity(this.vMatrix);
	  const i = new vt(this, 'simpleshader');
	  i.setModules(['MODULE_VERTEX_POSITION',
	  'MODULE_COLOR',
	  'MODULE_BEGIN_FRAG']),
	  i.setSource(vt.getDefaultVertexShader(), vt.getDefaultFragmentShader());
	  let s = i;
	  this.aborted = !1;
	  const r = [
	  ];
	  this.addEventListener = function (t, e) {
		'resize' == t && r.push(e)
	  },
	  this.removeEventListener = function (t, e) {
		if ('resize' == t) for (const t in r) if (r[t] == e) return void r.splice(t, 1)
	  },
	  this.exitError = function (t, e) {
		this.patch.exitError(t, e),
		this.aborted = !0
	  },
	  this.setCanvas = function (t) {
		if (this.canvas = 'string' == typeof t ? document.getElementById(t) : t, this.patch.config.canvas || (this.patch.config.canvas = {
		}), this.patch.config.canvas.hasOwnProperty('preserveDrawingBuffer') || (this.patch.config.canvas.preserveDrawingBuffer = !1), this.patch.config.canvas.hasOwnProperty('premultipliedAlpha') || (this.patch.config.canvas.premultipliedAlpha = !1), this.patch.config.canvas.hasOwnProperty('alpha') || (this.patch.config.canvas.alpha = !1), this.patch.config.hasOwnProperty('clearCanvasColor') && (this.clearCanvasTransparent = this.patch.config.clearCanvasColor), this.patch.config.hasOwnProperty('clearCanvasDepth') && (this.clearCanvasDepth = this.patch.config.clearCanvasDepth), this.patch.config.canvas.forceWebGl1 || (this.gl = this.canvas.getContext('webgl2', this.patch.config.canvas)), this.gl && 'WebGL 1.0' != this.gl.getParameter(this.gl.VERSION) ? this.glVersion = 2 : (this.gl = this.canvas.getContext('webgl', this.patch.config.canvas) || this.canvas.getContext('experimental-webgl', this.patch.config.canvas), this.glVersion = 1, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (this.glUseHalfFloatTex = !0), /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && (this.patch.config.canvas.hasOwnProperty('powerPreference') || (this.patch.config.canvas.powerPreference = 'high-performance'))), !this.gl) return void this.exitError('NO_WEBGL', 'sorry, could not initialize WebGL. Please check if your Browser supports WebGL.');
		const e = this.gl.getExtension('WEBGL_debug_renderer_info');
		if (e) {
		  'Google SwiftShader' === this.gl.getParameter(e.UNMASKED_RENDERER_WEBGL) && (this.glSlowRenderer = !0)
		}
		this.gl.getExtension('OES_standard_derivatives');
		const i = this.gl.getExtension('ANGLE_instanced_arrays') || this.gl;
		this.canvas.addEventListener('webglcontextlost', t=>{
		  console.log('canvas lost...', t),
		  this.aborted = !0
		}),
		this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS),
		this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE),
		this.maxUniformsFrag = this.gl.getParameter(this.gl.MAX_FRAGMENT_UNIFORM_VECTORS),
		this.maxUniformsVert = this.gl.getParameter(this.gl.MAX_VERTEX_UNIFORM_VECTORS),
		this.maxSamples = 0,
		this.gl.MAX_SAMPLES && (this.maxSamples = this.gl.getParameter(this.gl.MAX_SAMPLES)),
		i.vertexAttribDivisorANGLE && (this.gl.vertexAttribDivisor = i.vertexAttribDivisorANGLE.bind(i), this.gl.drawElementsInstanced = i.drawElementsInstancedANGLE.bind(i)),
		this.updateSize()
	  },
	  this.updateSize = function () {
		this.canvas.width = this.canvasWidth = this.canvas.clientWidth * this.pixelDensity,
		this.canvas.height = this.canvasHeight = this.canvas.clientHeight * this.pixelDensity
	  },
	  this.canvasWidth = - 1,
	  this.canvasHeight = - 1,
	  this.canvasScale = 1;
	  let n = - 1,
	  o = - 1;
	  this.getViewPort = function () {
		return e
	  },
	  this.resetViewPort = function () {
		this.gl.viewport(e[0], e[1], e[2], e[3])
	  },
	  this.setViewPort = function (t, i, s, r) {
		e[0] = Math.round(t),
		e[1] = Math.round(i),
		e[2] = Math.round(s),
		e[3] = Math.round(r),
		this.gl.viewport(e[0], e[1], e[2], e[3])
	  },
	  this.screenShot = function (t, e, i, s) {
		e && (this.gl.clearColor(1, 1, 1, 1), this.gl.colorMask(!1, !1, !1, !0), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.colorMask(!0, !0, !0, !0)),
		this.canvas && this.canvas.toBlob && this.canvas.toBlob(e=>{
		  t ? t(e) : d.log('no screenshot callback...')
		}, i, s)
	  },
	  this.endFrame = function () {
		if (this.patch.isEditorMode() && CABLES.GL_MARKER.drawMarkerLayer(this), this.setPreviousShader(), this._vMatrixStack.length() > 0 && this.logStackError('view matrix stack length !=0 at end of rendering...'), this._mMatrixStack.length() > 0 && this.logStackError('mvmatrix stack length !=0 at end of rendering...'), this._pMatrixStack.length() > 0 && this.logStackError('pmatrix stack length !=0 at end of rendering...'), this._glFrameBufferStack.length > 0 && this.logStackError('glFrameBuffer stack length !=0 at end of rendering...'), this._stackDepthTest.length > 0 && this.logStackError('depthtest stack length !=0 at end of rendering...'), this._stackDepthWrite.length > 0 && this.logStackError('depthwrite stack length !=0 at end of rendering...'), this._stackDepthFunc.length > 0 && this.logStackError('depthfunc stack length !=0 at end of rendering...'), this._stackBlend.length > 0 && this.logStackError('blend stack length !=0 at end of rendering...'), this._stackBlendMode.length > 0 && this.logStackError('blendMode stack length !=0 at end of rendering...'), this._shaderStack.length > 0 && this.logStackError('this._shaderStack length !=0 at end of rendering...'), this._stackCullFace.length > 0 && this.logStackError('this._stackCullFace length !=0 at end of rendering...'), this._stackCullFaceFacing.length > 0 && this.logStackError('this._stackCullFaceFacing length !=0 at end of rendering...'), this._frameStarted = !1, n != this.canvasWidth || o != this.canvasHeight) {
		  n = this.canvasWidth,
		  o = this.canvasHeight,
		  this.setSize(this.canvasWidth / this.pixelDensity, this.canvasHeight / this.pixelDensity),
		  this.updateSize();
		  for (let t = 0; t < r.length; t++) r[t]()
		}
		this._cursor != this._currentCursor && (this._currentCursor = this.canvas.style.cursor = this._cursor)
	  },
	  this.logStackError = function (t) {
		this._hadStackError || (this._hadStackError = !0, console.warn(t))
	  },
	  this.getShader = function () {
		if (s && (!this.frameStore || !0 === this.frameStore.renderOffscreen == s.offScreenPass == !0)) return s;
		for (let t = this._shaderStack.length - 1; t >= 0; t--) if (this._shaderStack[t] && this.frameStore.renderOffscreen == this._shaderStack[t].offScreenPass) return this._shaderStack[t]
	  },
	  this.getDefaultShader = function () {
		return i
	  },
	  this.pushShader = this.setShader = function (t) {
		this._shaderStack.push(t),
		s = t
	  },
	  this.popShader = this.setPreviousShader = function () {
		if (0 === this._shaderStack.length) throw new Error('Invalid shader stack pop!');
		this._shaderStack.pop(),
		s = this._shaderStack[this._shaderStack.length - 1]
	  },
	  this.pushGlFrameBuffer = function (t) {
		this._glFrameBufferStack.push(t)
	  },
	  this.popGlFrameBuffer = function () {
		return 0 == this._glFrameBufferStack.length ? null : (this._glFrameBufferStack.pop(), this._glFrameBufferStack[this._glFrameBufferStack.length - 1])
	  },
	  this.getCurrentGlFrameBuffer = function () {
		return 0 === this._glFrameBufferStack.length ? null : this._glFrameBufferStack[this._glFrameBufferStack.length - 1]
	  },
	  this.pushFrameBuffer = function (t) {
		this._frameBufferStack.push(t)
	  },
	  this.popFrameBuffer = function () {
		return 0 == this._frameBufferStack.length ? null : (this._frameBufferStack.pop(), this._frameBufferStack[this._frameBufferStack.length - 1])
	  },
	  this.getCurrentFrameBuffer = function () {
		return 0 === this._frameBufferStack.length ? null : this._frameBufferStack[this._frameBufferStack.length - 1]
	  };
	  const h = vec3.create();
	  vec3.set(h, 0, 0, 2);
	  const a = vec3.create();
	  vec3.set(a, 0, 0, 0),
	  this.renderStart = function (t, e, s) {
		e || (e = a),
		s || (s = h),
		this.pushDepthTest(!0),
		this.pushDepthWrite(!0),
		this.pushDepthFunc(t.gl.LEQUAL),
		this.pushCullFaceFacing(t.gl.BACK),
		this.pushCullFace(!1),
		this.clearCanvasTransparent && (t.gl.clearColor(0, 0, 0, 0), t.gl.clear(t.gl.COLOR_BUFFER_BIT)),
		this.clearCanvasDepth && t.gl.clear(t.gl.DEPTH_BUFFER_BIT),
		t.setViewPort(0, 0, t.canvasWidth, t.canvasHeight),
		mat4.perspective(t.pMatrix, 45, t.canvasWidth / t.canvasHeight, 0.1, 1000),
		mat4.identity(t.mMatrix),
		mat4.identity(t.vMatrix),
		mat4.translate(t.mMatrix, t.mMatrix, e),
		mat4.translate(t.vMatrix, t.vMatrix, s),
		t.pushPMatrix(),
		t.pushModelMatrix(),
		t.pushViewMatrix(),
		t.pushBlendMode(ot.BLEND_MODES.BLEND_NORMAL, !1);
		for (let t = 0; t < this._textureslots.length; t++) this._textureslots[t] = null;
		if (this.pushShader(i), this._frameStarted = !0, this._onetimeCallbacks.length > 0) {
		  for (let t = 0; t < this._onetimeCallbacks.length; t++) this._onetimeCallbacks[t]();
		  this._onetimeCallbacks.length = 0
		}
		this.emitEvent('beginFrame')
	  },
	  this.renderEnd = function (t) {
		t.popViewMatrix(),
		t.popModelMatrix(),
		t.popPMatrix(),
		this.popDepthTest(),
		this.popDepthWrite(),
		this.popDepthFunc(),
		this.popCullFaceFacing(),
		this.popCullFace(),
		this.popBlend(),
		this.popBlendMode(),
		t.endFrame(),
		this.emitEvent('endFrame')
	  },
	  this.getTexture = function (t) {
		return this._textureslots[t]
	  },
	  this.checkFrameStarted = function (t) {
		this._frameStarted || console.warn('frame not started ' + t)
	  },
	  this.setTexture = function (t, e, i) {
		this.checkFrameStarted('cgl setTexture'),
		this._textureslots[t] != e && (this.gl.activeTexture(this.gl.TEXTURE0 + t), this.gl.bindTexture(i || this.gl.TEXTURE_2D, e), this._textureslots[t] = e)
	  },
	  this.fullScreen = function () {
		this.canvas.requestFullscreen ? this.canvas.requestFullscreen() : this.canvas.mozRequestFullScreen ? this.canvas.mozRequestFullScreen() : this.canvas.webkitRequestFullscreen ? this.canvas.webkitRequestFullscreen() : this.canvas.msRequestFullscreen && this.canvas.msRequestFullscreen()
	  },
	  this.setSize = function (t, e, i) {
		i || (this.canvas.style.width = t + 'px', this.canvas.style.height = e + 'px'),
		this.canvas.width = t * this.pixelDensity,
		this.canvas.height = e * this.pixelDensity,
		this.updateSize()
	  },
	  this._resizeToWindowSize = function () {
		this.setSize(window.innerWidth, window.innerHeight),
		this.updateSize()
	  },
	  this._resizeToParentSize = function () {
		const t = this.canvas.parentElement;
		t ? (this.setSize(t.clientWidth, t.clientHeight), this.updateSize()) : console.error('cables: can not resize to container element')
	  },
	  this.setAutoResize = function (t) {
		window.removeEventListener('resize', this._resizeToWindowSize.bind(this)),
		window.removeEventListener('resize', this._resizeToParentSize.bind(this)),
		'window' == t && (window.addEventListener('resize', this._resizeToWindowSize.bind(this)), window.addEventListener('orientationchange', this._resizeToWindowSize.bind(this)), this._resizeToWindowSize()),
		'parent' == t && (window.addEventListener('resize', this._resizeToParentSize.bind(this)), this._resizeToParentSize())
	  },
	  this.printError = function (t) {
		const e = this.gl.getError();
		if (e != this.gl.NO_ERROR) {
		  let i = '';
		  return e == this.gl.OUT_OF_MEMORY && (i = 'OUT_OF_MEMORY'),
		  e == this.gl.INVALID_ENUM && (i = 'INVALID_ENUM'),
		  e == this.gl.INVALID_OPERATION && (i = 'INVALID_OPERATION'),
		  e == this.gl.INVALID_FRAMEBUFFER_OPERATION && (i = 'INVALID_FRAMEBUFFER_OPERATION'),
		  e == this.gl.INVALID_VALUE && (i = 'INVALID_VALUE'),
		  e == this.gl.CONTEXT_LOST_WEBGL && (this.aborted = !0, i = 'CONTEXT_LOST_WEBGL'),
		  e == this.gl.NO_ERROR && (i = 'NO_ERROR'),
		  d.log('gl error: ', t, e, i),
		  !0
		}
		return !1
	  },
	  this.saveScreenshot = function (t, e, i, s, r) {
		this.patch.renderOneFrame();
		let n = this.canvas.clientWidth,
		o = this.canvas.clientHeight;
		function h(t, e, i) {
		  return Array(e - String(t).length + 1).join(i || '0') + t
		}
		i && (this.canvas.width = i, n = i),
		s && (this.canvas.height = s, o = s);
		const a = new Date,
		l = ''.concat(String(a.getFullYear()) + String(a.getMonth() + 1) + String(a.getDate()), '_').concat(h(a.getHours(), 2)).concat(h(a.getMinutes(), 2)).concat(h(a.getSeconds(), 2));
		t ? t += '.png' : t = 'cables_' + l + '.png',
		this.patch.cgl.screenShot(function (i) {
		  if (this.canvas.width = n, this.canvas.height = o, i) {
			const s = document.createElement('a');
			s.download = t,
			s.href = URL.createObjectURL(i),
			setTimeout((function () {
			  s.click(),
			  e && e(i)
			}), 100)
		  } else d.log('screenshot: no blob')
		}.bind(this), r)
	  }
	};
	Ot.prototype.addNextFrameOnceCallback = function (t) {
	  t && this._onetimeCallbacks.push(t)
	},
	Ot.prototype.pushViewMatrix = function () {
	  this.vMatrix = this._vMatrixStack.push(this.vMatrix)
	},
	Ot.prototype.popViewMatrix = function () {
	  this.vMatrix = this._vMatrixStack.pop()
	},
	Ot.prototype.getViewMatrixStateCount = function () {
	  return this._vMatrixStack.stateCounter
	},
	Ot.prototype.pushPMatrix = function () {
	  this.pMatrix = this._pMatrixStack.push(this.pMatrix)
	},
	Ot.prototype.popPMatrix = function () {
	  return this.pMatrix = this._pMatrixStack.pop(),
	  this.pMatrix
	},
	Ot.prototype.getProjectionMatrixStateCount = function () {
	  return this._pMatrixStack.stateCounter
	},
	Ot.prototype.pushMvMatrix = Ot.prototype.pushModelMatrix = function () {
	  this.mMatrix = this._mMatrixStack.push(this.mMatrix)
	},
	Ot.prototype.popMvMatrix = Ot.prototype.popmMatrix = Ot.prototype.popModelMatrix = function () {
	  return this.mMatrix = this._mMatrixStack.pop(),
	  this.mMatrix
	},
	Ot.prototype.modelMatrix = function () {
	  return this.mMatrix
	},
	Ot.prototype._stackDepthTest = [
	],
	Ot.prototype.pushDepthTest = function (t) {
	  this._stackDepthTest.push(t),
	  t ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST)
	},
	Ot.prototype.stateDepthTest = function () {
	  return this._stackDepthTest[this._stackDepthTest.length - 1]
	},
	Ot.prototype.popDepthTest = function () {
	  this._stackDepthTest.pop(),
	  this._stackDepthTest[this._stackDepthTest.length - 1] ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST)
	},
	Ot.prototype._stackDepthWrite = [
	],
	Ot.prototype.pushDepthWrite = function (t) {
	  this._stackDepthWrite.push(t),
	  this.gl.depthMask(t)
	},
	Ot.prototype.stateDepthWrite = function () {
	  return this._stackDepthWrite[this._stackDepthWrite.length - 1]
	},
	Ot.prototype.popDepthWrite = function () {
	  this._stackDepthWrite.pop(),
	  this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1])
	},
	Ot.prototype._stackCullFace = [
	],
	Ot.prototype.pushCullFace = function (t) {
	  this._stackCullFace.push(t),
	  t ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE)
	},
	Ot.prototype.stateCullFace = function () {
	  return this._stackCullFace[this._stackCullFace.length - 1]
	},
	Ot.prototype.popCullFace = function () {
	  this._stackCullFace.pop(),
	  this._stackCullFace[this._stackCullFace.length - 1] ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE)
	},
	Ot.prototype._stackCullFaceFacing = [
	],
	Ot.prototype.pushCullFaceFacing = function (t) {
	  this._stackCullFaceFacing.push(t),
	  this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1])
	},
	Ot.prototype.stateCullFaceFacing = function () {
	  return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]
	},
	Ot.prototype.popCullFaceFacing = function () {
	  this._stackCullFaceFacing.pop(),
	  this._stackCullFaceFacing.length > 0 && this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1])
	},
	Ot.prototype._stackDepthFunc = [
	],
	Ot.prototype.pushDepthFunc = function (t) {
	  this._stackDepthFunc.push(t),
	  this.gl.depthFunc(t)
	},
	Ot.prototype.stateDepthFunc = function () {
	  return this._stackDepthFunc.length > 0 && this._stackDepthFunc[this._stackDepthFunc.length - 1]
	},
	Ot.prototype.popDepthFunc = function () {
	  this._stackDepthFunc.pop(),
	  this._stackDepthFunc.length > 0 && this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1])
	},
	Ot.prototype._stackBlend = [
	],
	Ot.prototype.pushBlend = function (t) {
	  this._stackBlend.push(t),
	  t ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND)
	},
	Ot.prototype.popBlend = function () {
	  this._stackBlend.pop(),
	  this._stackBlend[this._stackBlend.length - 1] ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND)
	},
	Ot.prototype.stateBlend = function () {
	  return this._stackBlend[this._stackBlend.length - 1]
	};
	Ot.prototype._stackBlendMode = [
	],
	Ot.prototype._stackBlendModePremul = [
	],
	Ot.prototype.pushBlendMode = function (t, e) {
	  this._stackBlendMode.push(t),
	  this._stackBlendModePremul.push(e);
	  const i = this._stackBlendMode.length - 1;
	  this.pushBlend(this._stackBlendMode[i] !== ot.BLEND_MODES.BLEND_NONE),
	  this._setBlendMode(this._stackBlendMode[i], this._stackBlendModePremul[i])
	},
	Ot.prototype.popBlendMode = function () {
	  this._stackBlendMode.pop(),
	  this._stackBlendModePremul.pop();
	  const t = this._stackBlendMode.length - 1;
	  this.popBlend(this._stackBlendMode[t] !== ot.BLEND_MODES.BLEND_NONE),
	  t >= 0 && this._setBlendMode(this._stackBlendMode[t], this._stackBlendModePremul[t])
	},
	Ot.prototype.glGetAttribLocation = function (t, e) {
	  const i = this.gl.getAttribLocation(t, e);
	  return i
	},
	Ot.prototype.shouldDrawHelpers = function (t) {
	  return !this.frameStore.shadowPass && (!!t.patch.isEditorMode() && (CABLES.UI.renderHelper || CABLES.UI.renderHelperCurrent && t.isCurrentUiOp()))
	},
	Ot.prototype._setBlendMode = function (t, e) {
	  const i = this.gl;
	  t == ot.BLEND_MODES.BLEND_NONE || (t == ot.BLEND_MODES.BLEND_ADD ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE, i.ONE, i.ONE)) : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.SRC_ALPHA, i.ONE)) : t == ot.BLEND_MODES.BLEND_SUB ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ONE_MINUS_SRC_ALPHA)) : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.ONE_MINUS_SRC_COLOR)) : t == ot.BLEND_MODES.BLEND_MUL ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA)) : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.SRC_COLOR)) : t == ot.BLEND_MODES.BLEND_NORMAL ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA)) : (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA)) : d.log('setblendmode: unknown blendmode'))
	},
	Ot.prototype.setCursor = function (t) {
	  this._cursor = t
	};
	const Rt = Object.assign({
	  Framebuffer: function (t, e, i, s) {
		const r = t,
		n = r.gl.getExtension('WEBGL_depth_texture') || r.gl.getExtension('WEBKIT_WEBGL_depth_texture') || r.gl.getExtension('MOZ_WEBGL_depth_texture') || r.gl.DEPTH_TEXTURE;
		n || r.exitError('NO_DEPTH_TEXTURE', 'no depth texture support');
		let o = e || 512,
		h = i || 512;
		(s = s || {
		  isFloatingPointTexture: !1
		}).hasOwnProperty('filter') || (s.filter = tt.FILTER_LINEAR);
		const a = new tt(r, {
		  isFloatingPointTexture: s.isFloatingPointTexture,
		  filter: s.filter,
		  wrap: s.wrap || tt.CLAMP_TO_EDGE
		});
		let l = null;
		n && (l = new tt(r, {
		  isDepthTexture: !0
		}));
		const u = r.gl.createFramebuffer(),
		c = r.gl.createRenderbuffer();
		this.getWidth = function () {
		  return o
		},
		this.getHeight = function () {
		  return h
		},
		this.getGlFrameBuffer = function () {
		  return u
		},
		this.getDepthRenderBuffer = function () {
		  return c
		},
		this.getTextureColor = function () {
		  return a
		},
		this.getTextureDepth = function () {
		  return l
		},
		this.setFilter = function (t) {
		  a.filter = t,
		  a.setSize(o, h)
		},
		this.setSize = function (t, e) {
		  if (t < 2 && (t = 2), e < 2 && (e = 2), o = Math.ceil(t), h = Math.ceil(e), $.profileFrameBuffercreate++, r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u), r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, c), a.setSize(o, h), l && l.setSize(o, h), n && r.gl.renderbufferStorage(r.gl.RENDERBUFFER, r.gl.DEPTH_COMPONENT16, o, h), r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER, r.gl.COLOR_ATTACHMENT0, r.gl.TEXTURE_2D, a.tex, 0), n && (r.gl.framebufferRenderbuffer(r.gl.FRAMEBUFFER, r.gl.DEPTH_ATTACHMENT, r.gl.RENDERBUFFER, c), r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER, r.gl.DEPTH_ATTACHMENT, r.gl.TEXTURE_2D, l.tex, 0)), !r.gl.isFramebuffer(u)) throw new Error('Invalid framebuffer');
		  const i = r.gl.checkFramebufferStatus(r.gl.FRAMEBUFFER);
		  switch (i) {
			case r.gl.FRAMEBUFFER_COMPLETE:
			  break;
			case r.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
			  throw d.warn('FRAMEBUFFER_INCOMPLETE_ATTACHMENT...', o, h, a.tex, c),
			  new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT');
			case r.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
			  throw d.warn('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'),
			  new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT');
			case r.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
			  throw d.warn('FRAMEBUFFER_INCOMPLETE_DIMENSIONS'),
			  new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS');
			case r.gl.FRAMEBUFFER_UNSUPPORTED:
			  throw d.warn('FRAMEBUFFER_UNSUPPORTED'),
			  new Error('Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED');
			case 36059:
			  d.warn('Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.');
			  break;
			default:
			  throw d.warn('incomplete framebuffer', i),
			  new Error('Incomplete framebuffer: ' + i)
		  }
		  r.gl.bindTexture(r.gl.TEXTURE_2D, null),
		  r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, null),
		  r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, null)
		},
		this.renderStart = function () {
		  r.pushModelMatrix(),
		  r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u),
		  r.pushGlFrameBuffer(u),
		  r.pushFrameBuffer(this),
		  r.pushPMatrix(),
		  r.gl.viewport(0, 0, o, h),
		  r.gl.clearColor(0, 0, 0, 0),
		  r.gl.clear(r.gl.COLOR_BUFFER_BIT | r.gl.DEPTH_BUFFER_BIT)
		},
		this.renderEnd = function () {
		  r.popPMatrix(),
		  r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, r.popGlFrameBuffer()),
		  r.popFrameBuffer(),
		  r.popModelMatrix(),
		  r.resetViewPort()
		},
		this.delete = function () {
		  a.delete(),
		  l && l.delete(),
		  r.gl.deleteRenderbuffer(c),
		  r.gl.deleteFramebuffer(u)
		},
		this.setSize(o, h)
	  },
	  Framebuffer2: et,
	  Geometry: st,
	  BoundingBox: it,
	  Marker: function (t) {
		const e = new st('marker');
		e.setPointVertices([0.00001,
		0,
		0,
		1,
		0,
		0,
		0,
		0.00001,
		0,
		0,
		1,
		0,
		0,
		0,
		0.00001,
		0,
		0,
		1]);
		const i = new at(t, e, t.gl.LINES);
		i.setGeom(e);
		const s = new vt(t, 'markermaterial'),
		r = ''.endl() + 'precision highp float;'.endl() + 'IN vec3 axisColor;'.endl() + 'void main()'.endl() + '{'.endl() + '    vec4 col=vec4(axisColor,1.0);'.endl() + '    outColor = col;'.endl() + '}',
		n = ''.endl() + 'IN vec3 vPosition;'.endl() + 'UNI mat4 projMatrix;'.endl() + 'UNI mat4 mvMatrix;'.endl() + 'OUT vec3 axisColor;'.endl() + 'void main()'.endl() + '{'.endl() + '   vec4 pos=vec4(vPosition, 1.0);'.endl() + '   if(pos.x!=0.0)axisColor=vec3(1.0,0.3,0.0);'.endl() + '   if(pos.y!=0.0)axisColor=vec3(0.0,1.0,0.2);'.endl() + '   if(pos.z!=0.0)axisColor=vec3(0.0,0.5,1.0);'.endl() + '   gl_Position = projMatrix * mvMatrix * pos;'.endl() + '}';
		s.setSource(n, r),
		this._vScale = vec3.create(),
		this.draw = function (t, e, r) {
		  const n = e || 2;
		  t.pushModelMatrix(),
		  t.pushShader(s),
		  vec3.set(this._vScale, n, n, n),
		  mat4.scale(t.mvMatrix, t.mvMatrix, this._vScale),
		  t.pushDepthTest(1 == r),
		  i.render(t.getShader()),
		  t.popDepthTest(),
		  t.popShader(),
		  t.popModelMatrix()
		}
	  },
	  WirePoint: function (t) {
		const e = t.gl.createBuffer(),
		i = vec3.create();
		this.render = function (t, s) {
		  t.pushModelMatrix(),
		  vec3.set(i, s, s, s),
		  mat4.scale(t.mvMatrix, t.mvMatrix, i);
		  const r = t.getShader();
		  r.bind(),
		  t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
		  t.gl.vertexAttribPointer(r.getAttrVertexPos(), e.itemSize, t.gl.FLOAT, !1, 0, 0),
		  t.gl.enableVertexAttribArray(r.getAttrVertexPos()),
		  t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
		  t.gl.drawArrays(t.gl.LINE_STRIP, 0, e.numItems),
		  t.popModelMatrix()
		},
		function () {
		  const i = [
		  ];
		  let s = 0,
		  r = 0;
		  for (s = 0; s <= Math.round(24); s++) r = 360 / Math.round(24) * s * gt,
		  i.push(0.5 * Math.cos(r)),
		  i.push(0),
		  i.push(0.5 * Math.sin(r));
		  for (s = 0; s <= Math.round(24); s++) r = 360 / Math.round(24) * s * gt,
		  i.push(0.5 * Math.cos(r)),
		  i.push(0.5 * Math.sin(r)),
		  i.push(0);
		  for (s = 0; s <= Math.round(24); s++) r = 360 / Math.round(24) * s * gt,
		  i.push(0),
		  i.push(0.5 * Math.cos(r)),
		  i.push(0.5 * Math.sin(r));
		  t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
		  t.gl.bufferData(t.gl.ARRAY_BUFFER, new Float32Array(i), t.gl.STATIC_DRAW),
		  e.itemSize = 3,
		  e.numItems = i.length / e.itemSize
		}()
	  },
	  WireCube: function (t) {
		const e = t.gl.createBuffer(),
		i = vec3.create();
		this.render = function (t, s, r, n) {
		  t.pushModelMatrix(),
		  vec3.set(i, s || 1, r || 1, n || 1),
		  mat4.scale(t.mvMatrix, t.mvMatrix, i);
		  const o = t.getShader();
		  o.bind(),
		  t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
		  t.gl.vertexAttribPointer(o.getAttrVertexPos(), e.itemSize, t.gl.FLOAT, !1, 0, 0),
		  t.gl.enableVertexAttribArray(o.getAttrVertexPos()),
		  t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
		  t.gl.drawArrays(t.gl.LINE_STRIP, 0, e.numItems),
		  t.popModelMatrix()
		},
		function () {
		  const i = [
		  ];
		  i.push( - 1, - 1, 1),
		  i.push(1, - 1, 1),
		  i.push(1, 1, 1),
		  i.push( - 1, 1, 1),
		  i.push( - 1, - 1, 1),
		  i.push( - 1, - 1, - 1),
		  i.push(1, - 1, - 1),
		  i.push(1, 1, - 1),
		  i.push( - 1, 1, - 1),
		  i.push( - 1, - 1, - 1),
		  i.push( - 1, - 1, - 1),
		  i.push( - 1, 1, - 1),
		  i.push( - 1, 1, 1),
		  i.push( - 1, - 1, 1),
		  i.push( - 1, - 1, - 1),
		  i.push(1, - 1, - 1),
		  i.push(1, 1, - 1),
		  i.push(1, 1, 1),
		  i.push(1, - 1, 1),
		  i.push(1, - 1, - 1),
		  t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
		  t.gl.bufferData(t.gl.ARRAY_BUFFER, new Float32Array(i), t.gl.STATIC_DRAW),
		  e.itemSize = 3,
		  e.numItems = i.length / e.itemSize
		}()
	  },
	  MatrixStack: It,
	  Mesh: at,
	  MESH: ht,
	  ShaderLibMods: pt,
	  Shader: vt,
	  Uniform: rt,
	  MESHES: ut,
	  Context: Ot,
	  Texture: tt,
	  TextureEffect: ct,
	  isWindows: mt,
	  getWheelSpeed: Tt,
	  getWheelDelta: bt,
	  onLoadingAssetsFinished: null,
	  profileData: $,
	  UniColorShader: class {
		constructor(t) {
		  this.shader = new CGL.Shader(t, 'markermaterial');
		  const e = ''.endl() + 'void main()'.endl() + '{'.endl() + '    outColor = vec4(color.rgb,1.0);'.endl() + '}',
		  i = ''.endl() + 'IN vec3 vPosition;'.endl() + 'UNI mat4 projMatrix;'.endl() + 'UNI mat4 mvMatrix;'.endl() + 'void main()'.endl() + '{'.endl() + '   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);'.endl() + '}';
		  this.shader.setSource(i, e),
		  this.coloruni = this.shader.addUniformFrag('4f', 'color', [
			1,
			0.777,
			1,
			1
		  ])
		}
		setColor(t, e, i, s) {
		  this.coloruni.set(t, e, i, s)
		}
	  }
	}, ot.BLEND_MODES, ot.SHADER, ot.MATH, ot.BLEND_MODES);
	window.CGL = Rt;
	const Nt = function (t) {
	  this._loadingAssets = {
	  },
	  this._cbFinished = [
	  ],
	  this._assetTasks = [
	  ],
	  this._percent = 0,
	  this._count = 0,
	  this._countFinished = 0,
	  this._order = 0,
	  this._startTime = 0,
	  this._patch = t,
	  this._wasFinishedPrinted = !1,
	  this._loadingAssetTaskCb = !1
	};
	Nt.prototype.setOnFinishedLoading = function (t) {
	  this._cbFinished.push(t)
	},
	Nt.prototype.getNumAssets = function () {
	  return this._countFinished
	},
	Nt.prototype.getProgress = function () {
	  return this._percent
	},
	Nt.prototype.checkStatus = function () {
	  this._countFinished = 0,
	  this._count = 0;
	  for (const t in this._loadingAssets) this._count++,
	  this._loadingAssets[t].finished || this._countFinished++;
	  if (this._percent = (this._count - this._countFinished) / this._count, 0 === this._countFinished) {
		for (let t = 0; t < this._cbFinished.length; t++) if (this._cbFinished[t]) {
		  const e = this._cbFinished[t];
		  setTimeout(() =>{
			e(this._patch)
		  }, 200)
		}
		this._wasFinishedPrinted || (this._wasFinishedPrinted = !0, this.print())
	  }
	},
	Nt.prototype.print = function () {
	  if (this._patch.config.silent) return;
	  const t = [
	  ];
	  for (const e in this._loadingAssets) t.push([this._loadingAssets[e].order,
	  this._loadingAssets[e].type,
	  this._loadingAssets[e].name,
	  (this._loadingAssets[e].timeEnd - this._loadingAssets[e].timeStart) / 1000 + 's']);
	  console.groupCollapsed('finished loading ' + this._order + ' assets in ' + (Date.now() - this._startTime) / 1000 + 's'),
	  console.table(t),
	  console.groupEnd()
	},
	Nt.prototype.finished = function (t) {
	  this._loadingAssets[t] && (this._loadingAssets[t].finished = !0, this._loadingAssets[t].timeEnd = Date.now()),
	  this.checkStatus()
	},
	Nt.prototype._startAssetTasks = function () {
	  for (let t = 0; t < this._assetTasks.length; t++) this._assetTasks[t]();
	  this._assetTasks.length = 0
	},
	Nt.prototype.addAssetLoadingTask = function (t) {
	  this._patch.isEditorMode() && !CABLES.UI.loaded ? (this._assetTasks.push(t), this._loadingAssetTaskCb || window.gui.addEventListener('uiloaded', this._startAssetTasks.bind(this)), this._loadingAssetTaskCb = !0) : t()
	},
	Nt.prototype.start = function (t, e) {
	  0 == this._startTime && (this._startTime = Date.now());
	  const i = y();
	  return this._loadingAssets[i] = {
		id: i,
		type: t,
		name: e,
		finished: !1,
		timeStart: Date.now(),
		order: this._order
	  },
	  this._order++,
	  i
	};
	const Ft = function () {
	  this._loops = [
	  ],
	  this._indizes = [
	  ],
	  this._index = 0
	};
	Ft.prototype.pushLoop = function (t) {
	  this._loops.push(Math.abs(Math.floor(t))),
	  this._indizes.push(this._index)
	},
	Ft.prototype.popLoop = function () {
	  this._loops.pop(),
	  this._index = this._indizes.pop(),
	  0 === this._loops.length && (this._index = 0)
	},
	Ft.prototype.numLoops = function () {
	  return this._loops.length
	},
	Ft.prototype.numCycles = function () {
	  if (0 === this._loops.length) return 0;
	  let t = this._loops[0];
	  for (let e = 1; e < this._loops.length; e++) t *= this._loops[e];
	  return t
	},
	Ft.prototype.inLoop = function () {
	  return this._loops.length > 0
	},
	Ft.prototype.increment = function () {
	  this._index++
	},
	Ft.prototype.index = function () {
	  return this._index
	};
	const Pt = function () {
	  let t = {
	  },
	  e = null,
	  i = 0;
	  this.getItems = function () {
		return t
	  },
	  this.clear = function () {
		t = {
		}
	  },
	  this.add = function (s, r) {
		null !== e && (r && r.id == e || t[e] && (t[e].timeUsed += performance.now() - i, (!t[e].peakTime || _t() - t[e].peakTime > 5000) && (t[e].peak = 0, t[e].peakTime = _t()), t[e].peak = Math.max(t[e].peak, performance.now() - i))),
		null !== r ? (t[r.id] || (t[r.id] = {
		  numTriggers: 0,
		  timeUsed: 0
		}), t[r.id].numTriggers++, t[r.id].opid = r.parent.id, t[r.id].title = r.parent.name + '.' + r.name, t[r.id].subPatch = r.parent.uiAttribs.subPatch, e = r.id, i = performance.now()) : e = null
	  },
	  this.print = function () {
		d.log('--------');
		for (const e in t) d.log(t[e].title + ': ' + t[e].numTriggers + ' / ' + t[e].timeUsed)
	  }
	},
	St = function (t) {
	  this._patch = t,
	  this.result = [
	  ]
	};
	St.MIDI = 0,
	St.POINTERLOCK = 1,
	St.WEBAUDIO = 2,
	St.WEBGL2 = 3,
	(St.infos = [
	]) [St.POINTERLOCK] = {
	  title: 'pointerLock',
	  caniuse: 'https://caniuse.com/#search=pointerlock'
	},
	St.infos[St.MIDI] = {
	  title: 'midi API',
	  caniuse: 'https://caniuse.com/#search=midi'
	},
	St.infos[St.WEBAUDIO] = {
	  title: 'web audio',
	  caniuse: 'https://caniuse.com/#search=webaudio'
	},
	St.infos[St.WEBGL2] = {
	  title: 'WebGL 2'
	},
	St.prototype.checkRequirement = function (t, e) {
	  switch (this.result = [
		], t) {
		case St.WEBGL2:
		  return e.patch.cgl.glVersion >= 2;
		case St.POINTERLOCK:
		  return 'exitPointerLock' in document;
		case St.MIDI:
		  return 'MIDIAccess' in window;
		case St.WEBAUDIO:
		  let t = !1;
		  return window.audioContext && (t = !0),
		  t || !('webkitAudioContext' in window) && !('AudioContext' in window) || (t = !0),
		  t
	  }
	},
	St.prototype.checkOp = function (t) {
	  if (t && t.requirements) for (let e = 0; e < t.requirements.length; e++) {
		const i = t.requirements[e];
		if (!this.result[i]) {
		  const e = this.checkRequirement(i, t);
		  if (!e) {
			t.patch.cgl && t.patch.cgl.canvas && t.patch.cgl.canvas.remove();
			let e = St.infos[i].title;
			throw St.infos[i].caniuse && (e = '<a href="' + St.infos[i].caniuse + '" target="_blank">' + St.infos[i].title + ' (' + t.objName + ')</a>'),
			new Error('this browser does not meet requirement: ' + St.infos[i].title + ' (' + t.objName + ')')
		  }
		  this.result[i] = {
			success: e,
			info: St.infos[i]
		  }
		}
	  }
	};
	const Ct = function (t) {
	  _.apply(this),
	  this.ops = [
	  ],
	  this.settings = {
	  },
	  this.config = t || {
		glCanvasResizeToWindow: !1,
		prefixAssetPath: '',
		silent: !1,
		onError: null,
		onFinishedLoading: null,
		onFirstFrameRendered: null,
		onPatchLoaded: null,
		fpsLimit: 0
	  },
	  this.timer = new ft,
	  this.freeTimer = new ft,
	  this.animFrameOps = [
	  ],
	  this.animFrameCallbacks = [
	  ],
	  this.gui = !1,
	  this.silent = !1,
	  this.profiler = null,
	  this.onLoadStart = null,
	  this.onLoadEnd = null,
	  this.aborted = !1,
	  this._crashedOps = [
	  ],
	  this._renderOneFrame = !1,
	  this._animReq = null,
	  this._opIdCache = {
	  },
	  this.loading = new Nt(this),
	  this._perf = {
		fps: 0,
		ms: 0,
		_fpsFrameCount: 0,
		_fpsMsCount: 0,
		_fpsStart: 0
	  },
	  this._volumeListeners = [
	  ],
	  this._paused = !1,
	  this._frameNum = 0,
	  this.instancing = new Ft,
	  this.onOneFrameRendered = null,
	  this.namedTriggers = {
	  },
	  this._origData = null,
	  this._frameNext = 0,
	  this._frameInterval = 0,
	  this._lastFrameTime = 0,
	  this._frameWasdelayed = !0,
	  function () {
		return !this
	  }() || console.log('not in strict mode: core patch'),
	  this._isLocal = 0 === document.location.href.indexOf('file:'),
	  d.setSilent(this.config.silent),
	  this.config.hasOwnProperty('doRequestAnimation') || (this.config.doRequestAnimation = !0),
	  this.config.prefixAssetPath || (this.config.prefixAssetPath = ''),
	  this.config.masterVolume || (this.config.masterVolume = 1),
	  this._variables = {
	  },
	  this._variableListeners = [
	  ],
	  this.vars = {
	  },
	  t && t.vars && (this.vars = t.vars),
	  this.cgl = new Ot(this),
	  this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || 'glcanvas'),
	  !0 === this.config.glCanvasResizeToWindow && this.cgl.setAutoResize('window'),
	  !0 === this.config.glCanvasResizeToParent && this.cgl.setAutoResize('parent'),
	  this.loading.setOnFinishedLoading(this.config.onFinishedLoading),
	  this.cgl.aborted && (this.aborted = !0),
	  this.cgl.silent && (this.silent = !0),
	  this.freeTimer.play(),
	  this.exec(),
	  this.aborted || (this.config.patch ? this.deSerialize(this.config.patch) : this.config.patchFile && M(this.config.patchFile, (t, e) =>{
		const i = JSON.parse(e);
		if (t) {
		  return d.error('err', t),
		  d.error('data', i),
		  void d.error('data', i.msg)
		}
		this.deSerialize(i)
	  }), this.timer.play()),
	  console.log('made with https://cables.gl')
	};
	Ct.prototype.isPlaying = function () {
	  return !this._paused
	},
	Ct.prototype.isRenderingOneFrame = function () {
	  return this._renderOneFrame
	},
	Ct.prototype.renderOneFrame = function () {
	  this._paused = !0,
	  this._renderOneFrame = !0,
	  this.exec(),
	  this._renderOneFrame = !1
	},
	Ct.prototype.getFPS = function () {
	  return this._perf.fps
	},
	Ct.prototype.isEditorMode = function () {
	  return !0 === this.config.editorMode
	},
	Ct.prototype.pause = function () {
	  cancelAnimationFrame(this._animReq),
	  this.emitEvent('pause'),
	  this._animReq = null,
	  this._paused = !0,
	  this.freeTimer.pause()
	},
	Ct.prototype.resume = function () {
	  this._paused && (cancelAnimationFrame(this._animReq), this.emitEvent('resume'), this._paused = !1, this.freeTimer.play(), this.exec())
	},
	Ct.prototype.setVolume = function (t) {
	  this.config.masterVolume = t;
	  for (let e = 0; e < this._volumeListeners.length; e++) this._volumeListeners[e].onMasterVolumeChanged(t)
	},
	Ct.prototype.getAssetPath = function () {
	  if (this.isEditorMode()) return '/assets/' + gui.project()._id + '/';
	  if (document.location.href.indexOf('cables.gl') > 0) {
		const t = document.location.href.split('/');
		return '/assets/' + t[t.length - 1] + '/'
	  }
	  return 'assets/'
	},
	Ct.prototype.getFilePath = function (t) {
	  return this._isLocal && !this.config.allowLocalFileAccess && this.exitError('localAccess', 'Browser security forbids loading files directly without a webserver. Upload files to a server to work. use allowLocalFileAccess:true to ignore this.'),
	  t ? 0 === (t = String(t)).indexOf('https:') || 0 === t.indexOf('http:') ? t : (t = t.replace('//', '/'), this.config.prefixAssetPath + t + (this.config.suffixAssetPath || '')) : t
	},
	Ct.prototype.clear = function () {
	  for (this.cgl.TextureEffectMesh = null, this.animFrameOps.length = 0, this.timer = new ft; this.ops.length > 0; ) this.deleteOp(this.ops[0].id)
	},
	Ct.getOpClass = function (t) {
	  const e = t.split('.');
	  let i = null;
	  try {
		return 2 == e.length ? i = window[e[0]][e[1]] : 3 == e.length ? i = window[e[0]][e[1]][e[2]] : 4 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]] : 5 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]] : 6 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]] : 7 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]] : 8 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]] : 9 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]] : 10 == e.length && (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]][e[9]]),
		i
	  } catch (t) {
		return null
	  }
	},
	Ct.prototype.createOp = function (t, e) {
	  const i = t.split('.');
	  let s = null,
	  r = '';
	  try {
		if ( - 1 == t.indexOf('Ops.')) {
		  const i = t;
		  if (!CABLES.OPS[i]) throw new Error('could not find op by id: ' + i);
		  r = CABLES.OPS[i].objName,
		  s = new CABLES.OPS[i].f(this, r, e, i),
		  s.opId = i
		}
		if (!s) {
		  r = t;
		  if (!Ct.getOpClass(r)) throw this.emitEvent('criticalError', 'unknown op', 'unknown op: ' + r),
		  d.error('unknown op: ' + r),
		  new Error('unknown op: ' + r);
		  if (2 == i.length ? s = new window[i[0]][i[1]](this, r, e) : 3 == i.length ? s = new window[i[0]][i[1]][i[2]](this, r, e) : 4 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]](this, r, e) : 5 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]](this, r, e) : 6 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]](this, r, e) : 7 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]](this, r, e) : 8 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]](this, r, e) : 9 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]](this, r, e) : 10 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]](this, r, e) : d.log('parts.length', i.length), s) {
			s.opId = null;
			for (const t in CABLES.OPS) CABLES.OPS[t].objName == r && (s.opId = t)
		  }
		}
	  } catch (t) {
		if (this._crashedOps.push(r), console.error(t), this.emitEvent('exceptionOp', t, r), !this.isEditorMode()) throw d.log(t),
		d.error('[instancing error] ' + r, t),
		CABLES.api && CABLES.api.sendErrorReport(t),
		this.exitError('INSTANCE_ERR', 'Instancing Error ' + r, t),
		new Error('instancing error ' + r)
	  }
	  return s ? (s.objName = r, s.patch = this) : console.log('no op was created!?'),
	  s
	},
	Ct.prototype.addOp = function (t, e, i) {
	  const s = this.createOp(t, i);
	  return s ? (e && e.hasOwnProperty('errors') && delete e.errors, e && e.hasOwnProperty('error') && delete e.error, s.uiAttr(e), s.onCreate && s.onCreate(), s.hasOwnProperty('onAnimFrame') && this.addOnAnimFrame(s), s.hasOwnProperty('onMasterVolumeChanged') && this._volumeListeners.push(s), this.ops.push(s), this._opIdCache[s.id] = s, this.emitEvent('onOpAdd', s), s.init && s.init()) : console.error('addop: no op.....'),
	  s
	},
	Ct.prototype.addOnAnimFrame = function (t) {
	  for (let e = 0; e < this.animFrameOps.length; e++) if (this.animFrameOps[e] == t) return;
	  this.animFrameOps.push(t)
	},
	Ct.prototype.removeOnAnimFrame = function (t) {
	  for (let e = 0; e < this.animFrameOps.length; e++) if (this.animFrameOps[e] == t) return void this.animFrameOps.splice(e, 1)
	},
	Ct.prototype.addOnAnimFrameCallback = function (t) {
	  this.animFrameCallbacks.push(t)
	},
	Ct.prototype.removeOnAnimCallback = function (t) {
	  for (let e = 0; e < this.animFrameCallbacks.length; e++) if (this.animFrameCallbacks[e] == t) return void this.animFrameCallbacks.splice(e, 1)
	},
	Ct.prototype.deleteOp = function (t, e, i) {
	  let s = !1;
	  for (const r in this.ops) if (this.ops[r].id == t) {
		let n = null,
		o = null;
		if (this.ops[r]) {
		  s = !0,
		  e && this.ops[r].portsIn.length > 0 && this.ops[r].portsIn[0].isLinked() && this.ops[r].portsOut.length > 0 && this.ops[r].portsOut[0].isLinked() && this.ops[r].portsIn[0].getType() == this.ops[r].portsOut[0].getType() && (n = this.ops[r].portsIn[0].links[0].getOtherPort(this.ops[r].portsIn[0]), o = this.ops[r].portsOut[0].links[0].getOtherPort(this.ops[r].portsOut[0]));
		  const h = this.ops[r];
		  h.removeLinks(),
		  this.onDelete && (d.warn('deprecated this.onDelete', this.onDelete), this.onDelete(h)),
		  this.ops.splice(r, 1),
		  this.emitEvent('onOpDelete', h, i),
		  h.onDelete && h.onDelete(i),
		  h.cleanUp(),
		  null !== n && null !== o && this.link(n.parent, n.getName(), o.parent, o.getName()),
		  delete this._opIdCache[t]
		}
	  }
	  s || console.log('core patch deleteop: not found...')
	},
	Ct.prototype.getFrameNum = function () {
	  return this._frameNum
	},
	Ct.prototype.renderFrame = function (t) {
	  this.timer.update(),
	  this.freeTimer.update();
	  const e = this.timer.getTime(),
	  i = performance.now();
	  for (let t = 0; t < this.animFrameCallbacks.length; ++t) this.animFrameCallbacks[t] && this.animFrameCallbacks[t](e, this._frameNum);
	  for (let t = 0; t < this.animFrameOps.length; ++t) this.animFrameOps[t].onAnimFrame && this.animFrameOps[t].onAnimFrame(e);
	  CGL.profileData.profileOnAnimFrameOps = performance.now() - i,
	  this.emitEvent('onRenderFrame', e),
	  this._frameNum++,
	  1 == this._frameNum && this.config.onFirstFrameRendered && this.config.onFirstFrameRendered()
	},
	Ct.prototype.exec = function (t) {
	  if (!this._renderOneFrame && (this._paused || this.aborted)) return;
	  this.config.fpsLimit = this.config.fpsLimit || 0,
	  this.config.fpsLimit && (this._frameInterval = 1000 / this.config.fpsLimit);
	  const e = CABLES.now(),
	  i = e - this._frameNext;
	  if (this.isEditorMode() && !this._renderOneFrame && e - this._lastFrameTime >= 500 && 0 !== this._lastFrameTime && !this._frameWasdelayed) return this._lastFrameTime = 0,
	  setTimeout(this.exec.bind(this), 500),
	  this.emitEvent('renderDelayStart'),
	  void (this._frameWasdelayed = !0);
	  if (this._renderOneFrame || 0 === this.config.fpsLimit || i > this._frameInterval || this._frameWasdelayed) {
		const t = CABLES.now();
		this.renderFrame(),
		this._perf._lastFrameTime = CABLES.now(),
		this._perf._fpsFrameCount++,
		this._perf._fpsMsCount += CABLES.now() - t,
		this._frameInterval && (this._frameNext = e - i % this._frameInterval)
	  }
	  this._frameWasdelayed && (this.emitEvent('renderDelayEnd'), this._frameWasdelayed = !1),
	  this._renderOneFrame && (this.onOneFrameRendered && this.onOneFrameRendered(), this.emitEvent('renderedOneFrame'), this._renderOneFrame = !1),
	  CABLES.now() - this._perf._fpsStart >= 1000 && this._perf.fps != this._perf._fpsFrameCount && (this._perf.fps = this._perf._fpsFrameCount, this._perf.ms = Math.round(this._perf._fpsMsCount / this._perf._fpsFrameCount), this.emitEvent('performance', this._perf), this._perf._fpsFrameCount = 0, this._perf._fpsMsCount = 0, this._perf._fpsStart = CABLES.now()),
	  this.config.doRequestAnimation && (this._animReq = requestAnimationFrame(this.exec.bind(this)))
	},
	Ct.prototype.link = function (t, e, i, s, r) {
	  if (!t) return void d.log('link: op1 is null ');
	  if (!i) return void d.log('link: op2 is null');
	  const n = t.getPort(e, r),
	  o = i.getPort(s, r);
	  if (n) if (o) {
		if (!n.shouldLink(n, o) || !o.shouldLink(n, o)) return !1;
		if (J.canLink(n, o)) {
		  const t = new J(this);
		  return t.link(n, o),
		  this.emitEvent('onLink', n, o, t),
		  t
		}
	  } else console.warn('port not found! ' + s + ' of ' + i.name + '(' + i.objName + ')');
	   else console.warn('port not found! ' + e + '(' + t.objName + ')')
	},
	Ct.prototype.serialize = function (t) {
	  const e = {
		ops: [
		]
	  };
	  e.settings = this.settings;
	  for (const t in this.ops) e.ops.push(this.ops[t].getSerialized());
	  return t ? e : JSON.stringify(e)
	},
	Ct.prototype.getOpById = function (t) {
	  return this._opIdCache[t]
	},
	Ct.prototype.getOpsById = function (t) {
	  const e = [
	  ];
	  for (const i in this.ops) for (let s = 0; s < t.length; s++) if (this.ops[i].id === t[s]) {
		e.push(this.ops[i]);
		break
	  }
	  return e
	},
	Ct.prototype.getOpsByName = function (t) {
	  const e = [
	  ];
	  for (const i in this.ops) this.ops[i].name == t && e.push(this.ops[i]);
	  return e
	},
	Ct.prototype.getOpsByObjName = function (t) {
	  const e = [
	  ];
	  for (const i in this.ops) this.ops[i].objName == t && e.push(this.ops[i]);
	  return e
	},
	Ct.prototype.loadLib = function (t) {
	  C('/ui/libs/' + t + '.js', (t, e) =>{
		const i = document.createElement('script');
		i.type = 'text/javascript',
		i.text = e,
		document.getElementsByTagName('head') [0].appendChild(i)
	  }, 'GET')
	},
	Ct.prototype.reloadOp = function (t, e) {
	  let i = 0;
	  const s = [
	  ],
	  r = [
	  ];
	  for (const e in this.ops) this.ops[e].objName == t && r.push(this.ops[e]);
	  for (let e = 0; e < r.length; e++) {
		i++;
		const n = r[e];
		n.deleted = !0;
		const o = this,
		h = this.addOp(t, n.uiAttribs);
		let a,
		l;
		for (a in s.push(h), n.portsIn) if (0 === n.portsIn[a].links.length) {
		  const t = h.getPort(n.portsIn[a].name);
		  t ? t.set(n.portsIn[a].get()) : d.error('[reloadOp] could not set port ' + n.portsIn[a].name + ', propably renamed port ?')
		} else for (; n.portsIn[a].links.length; ) {
		  const t = n.portsIn[a].links[0].portIn.name,
		  e = n.portsIn[a].links[0].portOut.name,
		  i = n.portsIn[a].links[0].portOut.parent;
		  n.portsIn[a].links[0].remove(),
		  l = o.link(h, t, i, e),
		  l ? l.setValue() : d.log('[reloadOp] relink after op reload not successfull for port ' + e)
		}
		for (a in n.portsOut) for (; n.portsOut[a].links.length; ) {
		  const t = n.portsOut[a].links[0].portOut.name,
		  e = n.portsOut[a].links[0].portIn.name,
		  i = n.portsOut[a].links[0].portIn.parent;
		  n.portsOut[a].links[0].remove(),
		  l = o.link(h, t, i, e),
		  l ? l.setValue() : d.log('relink after op reload not successfull for port ' + e)
		}
		this.deleteOp(n.id, !1, !0)
	  }
	  e(i, s)
	},
	Ct.prototype.getSubPatchOps = function (t) {
	  const e = [
	  ];
	  for (const i in this.ops) this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == t && e.push(this.ops[i]);
	  return e
	},
	Ct.prototype.getSubPatchOp = function (t, e) {
	  for (const i in this.ops) if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == t && this.ops[i].objName == e) return this.ops[i];
	  return !1
	},
	Ct.prototype.deSerialize = function (t, e) {
	  if (this.aborted) return;
	  const i = this.loading.start('core', 'deserialize');
	  this.onLoadStart && this.onLoadStart(),
	  this.namespace = t.namespace || '',
	  this.name = t.name || '',
	  'string' == typeof t && (t = JSON.parse(t));
	  const s = this;
	  this.settings = t.settings;
	  const r = new St(this);
	  for (const i in t.ops) {
		const s = CABLES.now(),
		n = t.ops[i];
		let o = null;
		try {
		  o = n.opId ? this.addOp(n.opId, n.uiAttribs, n.id) : this.addOp(n.objName, n.uiAttribs, n.id)
		} catch (t) {
		  throw console.warn('[instancing error] op data:', n, t),
		  new Error('instancing error: ' + n.objName)
		}
		if (r.checkOp(o), o) {
		  e && (o.id = A()),
		  o.portsInData = n.portsIn,
		  o._origData = n;
		  for (const t in n.portsIn) {
			const e = n.portsIn[t],
			i = o.getPort(e.name);
			if (!i || 'bool' != i.uiAttribs.display && 'bool' != i.uiAttribs.type || isNaN(e.value) || (e.value = !0 === e.value), i && void 0 !== e.value && i.type != U.OP_PORT_TYPE_TEXTURE && i.set(e.value), i && e && e.animated && i.setAnimated(e.animated), i && e && e.useVariable && i.setVariableName(e.useVariable), i && e && e.anim) {
			  i.anim || (i.anim = new q),
			  e.anim.loop && (i.anim.loop = e.anim.loop);
			  for (const t in e.anim.keys) i.anim.keys.push(new H.Key(e.anim.keys[t]))
			}
		  }
		  for (const e in n.portsOut) {
			const s = o.getPort(n.portsOut[e].name);
			s && s.type != U.OP_PORT_TYPE_TEXTURE && n.portsOut[e].hasOwnProperty('value') && s.set(t.ops[i].portsOut[e].value)
		  }
		}
		const h = Math.round(100 * (CABLES.now() - s)) / 100;
		!this.silent && h > 200 && console.warn('long op init ', t.ops[i].objName, h)
	  }
	  for (const t in this.ops) this.ops[t].onLoadedValueSet && (this.ops[t].onLoadedValueSet(this.ops[t]._origData), this.ops[t].onLoadedValueSet = null, this.ops[t]._origData = null);
	  if (t.ops) for (let e = 0; e < t.ops.length; e++) if (t.ops[e].portsIn) for (let i = 0; i < t.ops[e].portsIn.length; i++) if (t.ops[e].portsIn[i].links) for (let r = 0; r < t.ops[e].portsIn[i].links.length; r++) t.ops[e].portsIn[i].links[r] && (n = t.ops[e].portsIn[i].links[r].objIn, o = t.ops[e].portsIn[i].links[r].objOut, h = t.ops[e].portsIn[i].links[r].portIn, a = t.ops[e].portsIn[i].links[r].portOut, s.link(s.getOpById(n), h, s.getOpById(o), a));
	  var n,
	  o,
	  h,
	  a;
	  for (const t in this.ops) this.ops[t].onLoaded && (this.ops[t].onLoaded(), this.ops[t].onLoaded = null);
	  for (const t in this.ops) this.ops[t].init && (this.ops[t].init(), this.ops[t].init = null);
	  if (this.config.variables) for (const t in this.config.variables) this.setVarValue(t, this.config.variables[t]);
	  for (const t in this.ops) this.ops[t].initVarPorts();
	  setTimeout(() =>{
		this.loading.finished(i)
	  }, 100),
	  this.config.onPatchLoaded && this.config.onPatchLoaded(this),
	  this.onLoadEnd && this.onLoadEnd()
	},
	Ct.prototype.profile = function (t) {
	  this.profiler = new Pt;
	  for (const e in this.ops) this.ops[e].profile(t)
	},
	(Ct.Variable = function (t, e, i) {
	  this._name = t,
	  this._changeListeners = [
	  ],
	  this.type = i,
	  this.setValue(e)
	}).prototype.getValue = function () {
	  return this._v
	},
	Ct.Variable.prototype.getName = function () {
	  return this._name
	},
	Ct.Variable.prototype.setValue = function (t) {
	  this._v = t;
	  for (let e = 0; e < this._changeListeners.length; e++) this._changeListeners[e](t)
	},
	Ct.Variable.prototype.addListener = function (t) {
	  this._changeListeners.push(t)
	},
	Ct.Variable.prototype.removeListener = function (t) {
	  const e = this._changeListeners.indexOf(t);
	  this._changeListeners.splice(e, 1)
	},
	Ct.prototype.setVariable = function (t, e) {
	  this._variables.hasOwnProperty(t) ? this._variables[t].setValue(e) : console.warn('variable ' + t + ' not found!')
	},
	Ct.prototype._sortVars = function () {
	  if (!this.isEditorMode()) return;
	  const t = {
	  };
	  Object.keys(this._variables).sort().forEach(e=>{
		t[e] = this._variables[e]
	  }),
	  this._variables = t
	},
	Ct.prototype.hasVar = function (t) {
	  return this._variables.hasOwnProperty('name')
	},
	Ct.prototype.setVarValue = function (t, e) {
	  return this._variables.hasOwnProperty(t) ? this._variables[t].setValue(e) : (this._variables[t] = new Ct.Variable(t, e), this._sortVars(), this.emitEvent('variablesChanged')),
	  this._variables[t]
	},
	Ct.prototype.getVarValue = function (t, e) {
	  if (this._variables.hasOwnProperty(t)) return this._variables[t].getValue()
	},
	Ct.prototype.getVar = function (t) {
	  if (this._variables.hasOwnProperty(t)) return this._variables[t]
	},
	Ct.prototype.getVars = function () {
	  return this._variables
	},
	Ct.prototype.deleteVar = function (t) {
	  for (let e = 0; e < this.ops.length; e++) for (let i = 0; i < this.ops[e].portsIn.length; i++) this.ops[e].portsIn[i].getVariableName() == t && this.ops[e].portsIn[i].setVariable(null);
	  delete this._variables[t],
	  this.emitEvent('variableDeleted', t),
	  this.emitEvent('variablesChanged')
	},
	Ct.prototype.getVars = function () {
	  return this._variables
	},
	Ct.prototype.exitError = function (t, e, i) {
	  if (this.aborted = !0, this && this.config && this.config.onError) this.config.onError(t, e);
	   else if (!this.isEditorMode()) {
		const s = document.createElement('div'),
		r = this.cgl.canvas.getBoundingClientRect();
		s.setAttribute('style', 'position:absolute;border:5px solid red;padding:15px;background-color:black;color:white;font-family:monospace;'),
		s.style.top = r.top + 'px',
		s.style.left = r.left + 'px';
		let n = 'cables - An error occured:<br/>';
		n += '[' + t + '] - ' + e,
		i && (n += '<br/>Exception: ' + i.message),
		s.innerHTML = n;
		const o = this.cgl.canvas.parentElement;
		for (; o.hasChildNodes(); ) o.removeChild(o.lastChild);
		document.body.appendChild(s)
	  }
	},
	Ct.prototype.preRenderOps = function () {
	  d.log('prerendering...');
	  let t = null;
	  CABLES.StopWatch && (t = new CABLES.StopWatch('prerendering'));
	  for (let t = 0; t < this.ops.length; t++) this.ops[t].preRender && (this.ops[t].preRender(), d.log('prerender ' + this.ops[t].objName));
	  t && t.stop('prerendering')
	},
	Ct.prototype.dispose = function () {
	  this.pause(),
	  this.clear()
	};
	var Mt = Ct;
	const wt = {
	  addPatch: function (t, e) {
		let i = t,
		s = y();
		if ('string' == typeof t && (s = t, i = document.getElementById(s), !i)) return void console.error(s + ' Polyshape Container Element not found!');
		const r = document.createElement('canvas');
		return r.id = 'glcanvas_' + s,
		r.width = i.clientWidth,
		r.height = i.clientHeight,
		window.addEventListener('resize', function () {
		  this.setAttribute('width', i.clientWidth),
		  this.height = i.clientHeight
		}.bind(r)),
		i.appendChild(r),
		(e = e || {
		}).glCanvasId = r.id,
		e.onError || (e.onError = function (t) {
		  d.error(t)
		}),
		CABLES.patch = new Mt(e),
		r
	  }
	},
	kt = {
	  toneJsInitialized: !1,
	  createAudioContext: function (t) {
		if (window.AudioContext = window.AudioContext || window.webkitAudioContext, window.AudioContext) return window.audioContext || (window.audioContext = new AudioContext),
		window.Tone && !kt.toneJsInitialized && (Tone.setContext(window.audioContext), kt.toneJsInitialized = !0),
		window.audioContext;
		t.patch.config.onError('NO_WEBAUDIO', 'Web Audio is not supported in this browser.')
	  },
	  getAudioContext: function () {
		return window.audioContext
	  },
	  createAudioInPort: function (t, e, i, s) {
		if (!t || !e || !i) {
		  const e = 'ERROR: createAudioInPort needs three parameters, op, portName and audioNode';
		  throw t.log(e),
		  new Error(e)
		}
		s || (s = 0),
		t.webAudio = t.webAudio || {
		},
		t.webAudio.audioInPorts = t.webAudio.audioInPorts || [
		];
		const r = t.inObject(e);
		return r.webAudio = {
		},
		r.webAudio.previousAudioInNode = null,
		r.webAudio.audioNode = i,
		t.webAudio.audioInPorts[e] = r,
		r.onChange = function () {
		  const e = r.get();
		  if (e) try {
			e.connect ? (e.connect(r.webAudio.audioNode, 0, s), t.setUiError('audioCtx', null)) : t.setUiError('audioCtx', 'The passed input is not an audio context. Please make sure you connect an audio context to the input.', 2)
		  } catch (i) {
			throw t.log('Error: Failed to connect web audio node!', i),
			t.log('port.webAudio.audioNode', r.webAudio.audioNode),
			t.log('audioInNode: ', e),
			t.log('inputChannelIndex:', s),
			t.log('audioInNode.connect: ', e.connect),
			i
		  } else if (r.webAudio.previousAudioInNode) try {
			r.webAudio.previousAudioInNode.disconnect && r.webAudio.previousAudioInNode.disconnect(r.webAudio.audioNode, 0, s),
			t.setUiError('audioCtx', null)
		  } catch (e) {
			try {
			  r.webAudio.previousAudioInNode.disconnect(r.webAudio.audioNode)
			} catch (i) {
			  throw t.log('Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ', e),
			  e.printStackTrace && e.printStackTrace(),
			  e
			}
		  }
		  r.webAudio.previousAudioInNode = e
		},
		r
	  },
	  replaceNodeInPort: function (t, e, i) {
		const s = t.webAudio.previousAudioInNode;
		if (s && s.disconnect) {
		  try {
			s.disconnect(e)
		  } catch (t) {
			throw t.printStackTrace && t.printStackTrace(),
			new Error('replaceNodeInPort: Could not disconnect old audio node. ' + t.name + ' ' + t.message)
		  }
		  t.webAudio.audioNode = i;
		  try {
			s.connect(i)
		  } catch (t) {
			throw t.printStackTrace && t.printStackTrace(),
			new Error('replaceNodeInPort: Could not connect to new node. ' + t.name + ' ' + t.message)
		  }
		}
	  },
	  createAudioOutPort: function (t, e, i) {
		if (!t || !e || !i) {
		  const e = 'ERROR: createAudioOutPort needs three parameters, op, portName and audioNode';
		  throw t.log(e),
		  new Error(e)
		}
		const s = t.outObject(e);
		return s.set(i),
		s
	  },
	  createAudioParamInPort: function (t, e, i, s, r) {
		if (!t || !e || !i) return t.log('ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode'),
		t && t.name && t.log('opname: ', t.name),
		t.log('portName', e),
		void t.log('audioNode: ', i);
		t.webAudio = t.webAudio || {
		},
		t.webAudio.audioInPorts = t.webAudio.audioInPorts || [
		];
		const n = t.inDynamic(e, [
		  U.OP_PORT_TYPE_VALUE,
		  U.OP_PORT_TYPE_OBJECT
		], s, r);
		return n.webAudio = {
		},
		n.webAudio.previousAudioInNode = null,
		n.webAudio.audioNode = i,
		t.webAudio.audioInPorts[e] = n,
		n.onChange = function () {
		  const e = n.get(),
		  i = n.webAudio.audioNode,
		  s = kt.getAudioContext();
		  if (null != e) if ('object' == typeof e && e.connect) {
			try {
			  e.connect(i)
			} catch (e) {
			  throw t.log('Could not connect audio node: ', e),
			  e.printStackTrace && e.printStackTrace(),
			  e
			}
			n.webAudio.previousAudioInNode = e
		  } else {
			if (i._param && i._param.minValue && i._param.maxValue) if (e >= i._param.minValue && e <= i._param.maxValue) try {
			  i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : i.value = e
			} catch (e) {
			  throw t.log('Possible AudioParam problem with tone.js op: ', e),
			  e.printStackTrace && e.printStackTrace(),
			  e
			} else t.log('Warning: The value for an audio parameter is out of range!');
			 else if (i.minValue && i.maxValue) if (e >= i.minValue && e <= i.maxValue) try {
			  i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : i.value = e
			} catch (e) {
			  throw t.log('AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ', e),
			  e.printStackTrace && e.printStackTrace(),
			  e
			} else t.log('Warning: The value for an audio parameter is out of range!');
			 else try {
			  i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : i.value = e
			} catch (e) {
			  throw t.log('Possible AudioParam problem (without minValue / maxValue): ', e),
			  e.printStackTrace && e.printStackTrace(),
			  e
			}
			if (n.webAudio.previousAudioInNode && n.webAudio.previousAudioInNode.disconnect) {
			  try {
				n.webAudio.previousAudioInNode.disconnect(i)
			  } catch (e) {
				throw t.log('Could not disconnect previous audio node: ', e),
				e
			  }
			  n.webAudio.previousAudioInNode = void 0
			}
		  } else n.webAudio.previousAudioInNode
		},
		n
	  },
	  loadAudioFile: function (t, e, i, s) {
		const r = kt.createAudioContext(),
		n = t.loading.start('audio', e);
		t.isEditorMode() && gui.jobs().start({
		  id: 'loadaudio' + n,
		  title: ' loading audio (' + e + ')'
		});
		const o = new XMLHttpRequest;
		e && (o.open('GET', e, !0), o.responseType = 'arraybuffer', o.onload = function () {
		  t.loading.finished(n),
		  t.isEditorMode() && gui.jobs().finish('loadaudio' + n),
		  r.decodeAudioData(o.response, i, s)
		}, o.send())
	  },
	  isValidToneTime: function (t) {
		try {
		  new Tone.Time(t)
		} catch (t) {
		  return !1
		}
		return !0
	  },
	  isValidToneNote: function (t) {
		try {
		  Tone.Frequency(t)
		} catch (t) {
		  return !1
		}
		return !0
	  }
	},
	Ut = function (t, e, i) {
	  this._patch = t,
	  this.connector = i
	};
	Ut.prototype._receive = function (t) {
	  console.log('ev', t);
	  let e = {
	  };
	  if (e = t.hasOwnProperty('event') ? t : JSON.parse(t.data), e.event == B.PACO_OP_CREATE) {
		if (d.log('op create: data.vars.objName'), this._patch.getOpById(e.vars.opId)) return;
		let t = null;
		window.gui ? gui.serverOps.loadOpLibs(e.vars.objName, () =>{
		  t = this._patch.addOp(e.vars.objName, null, e.vars.opId),
		  t.id = e.vars.opId
		}) : (t = this._patch.addOp(e.vars.objName, null, e.vars.opId), t.id = e.vars.opId)
	  } else if (e.event == B.PACO_LOAD) d.log('PACO load patch.....'),
	  this._patch.clear(),
	  this._patch.deSerialize(e.vars.patch);
	   else if (e.event == B.PACO_CLEAR) this._patch.clear(),
	  d.log('clear');
	   else if (e.event == B.PACO_OP_DELETE) d.log('op delete'),
	  this._patch.deleteOp(e.vars.op, !0);
	   else if (e.event == B.PACO_OP_ENABLE) {
		const t = this._patch.getOpById(e.vars.op);
		t && (t.enabled = !0)
	  } else if (e.event == B.PACO_OP_DISABLE) {
		const t = this._patch.getOpById(e.vars.op);
		t && (t.enabled = !1)
	  } else if (e.event == B.PACO_UNLINK) {
		const t = this._patch.getOpById(e.vars.op1),
		i = this._patch.getOpById(e.vars.op2);
		if (!t || !i) return void console.log('[paco] unlink op not found ');
		const s = t.getPort(e.vars.port1),
		r = i.getPort(e.vars.port2);
		s.removeLinkTo(r)
	  } else if (e.event == B.PACO_LINK) {
		const t = this._patch.getOpById(e.vars.op1),
		i = this._patch.getOpById(e.vars.op2);
		this._patch.link(t, e.vars.port1, i, e.vars.port2)
	  } else if (e.event == B.PACO_VALUECHANGE) {
		this._patch.getOpById(e.vars.op).getPort(e.vars.port).set(e.vars.v)
	  } else d.log('unknown patchConnectionEvent!', t)
	};
	const Lt = function (t) {
	  this.connectors = [
	  ],
	  t.addEventListener('onOpDelete', t=>{
		this.send(CABLES.PACO_OP_DELETE, {
		  op: t.id
		})
	  }),
	  t.addEventListener('onOpAdd', t=>{
		this.send(CABLES.PACO_OP_CREATE, {
		  opId: t.id,
		  objName: t.objName
		})
	  }),
	  t.addEventListener('onUnLink', (t, e) =>{
		this.send(CABLES.PACO_UNLINK, {
		  op1: t.parent.id,
		  op2: e.parent.id,
		  port1: t.getName(),
		  port2: e.getName()
		})
	  }),
	  t.addEventListener('onLink', (t, e) =>{
		this.send(CABLES.PACO_LINK, {
		  op1: t.parent.id,
		  op2: e.parent.id,
		  port1: t.name,
		  port2: e.name
		})
	  })
	};
	Lt.prototype.send = function (t, e) {
	  for (let i = 0; i < this.connectors.length; i++) this.connectors[i].send(t, e)
	};
	const Bt = function () {
	  window.BroadcastChannel && (this.bc = new BroadcastChannel('test_channel'))
	};
	Bt.prototype.receive = function (t) {
	  this.bc && (d.log('init'), this.bc.onmessage = t._receive.bind(t))
	},
	Bt.prototype.send = function (t, e) {
	  if (!this.bc) return;
	  const i = {
	  };
	  i.event = t,
	  i.vars = e,
	  this.bc.postMessage(JSON.stringify(i))
	};
	const Vt = Object.assign({
	  EventTarget: _,
	  EMBED: wt,
	  Link: J,
	  Port: V,
	  Op: Z,
	  Profiler: Pt,
	  Requirements: St,
	  Patch: Mt,
	  Instancing: Ft,
	  Timer: ft,
	  WEBAUDIO: kt,
	  Variable: function () {
		let t = null;
		const e = [
		];
		this.onChanged = function (t) {
		  e.push(t)
		},
		this.getValue = function () {
		  return t
		},
		this.setValue = function (e) {
		  t = e,
		  this.emitChanged()
		},
		this.emitChanged = function () {
		  for (let t = 0; t < e.length; t++) e[t]()
		}
	  },
	  LoadingStatus: Nt,
	  now: _t,
	  internalNow: dt
	}, s, r, n, k, o, L, B, k, U);
	Vt.build = i(1);
	e.default = Vt;
	(function () {
	  return !this
	}) () || console.log('not in strict mode: index core')
  }
  ]).default;
  //# sourceMappingURL=cables.min.js.map
  /*!
  @fileoverview gl-matrix - High performance matrix and vector operations
  @author Brandon Jones
  @author Colin MacKenzie IV
  @version 3.1.0
  
  Copyright (c) 2015-2019, Brandon Jones, Colin MacKenzie IV.
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  
  */
  !function ololo1(t, n) {
	'object' == typeof exports && 'undefined' != typeof module ? n(exports) : 'function' == typeof define && define.amd ? define(['exports'], n) : n((t = t || self).glMatrix = {
	})
  }(this, function (t) {
	'use strict';
	var n = 0.000001,
	a = 'undefined' != typeof Float32Array ? Float32Array : Array,
	r = Math.random;
	var u = Math.PI / 180;
	Math.hypot || (Math.hypot = function () {
	  for (var t = 0, n = arguments.length; n--; ) t += arguments[n] * arguments[n];
	  return Math.sqrt(t)
	});
	var e = Object.freeze({
	  EPSILON: n,
	  get ARRAY_TYPE() {
		return a
	  },
	  RANDOM: r,
	  setMatrixArrayType: function (t) {
		a = t
	  },
	  toRadian: function (t) {
		return t * u
	  },
	  equals: function (t, a) {
		return Math.abs(t - a) <= n * Math.max(1, Math.abs(t), Math.abs(a))
	  }
	});
	function o(t, n, a) {
	  var r = n[0],
	  u = n[1],
	  e = n[2],
	  o = n[3],
	  i = a[0],
	  c = a[1],
	  h = a[2],
	  s = a[3];
	  return t[0] = r * i + e * c,
	  t[1] = u * i + o * c,
	  t[2] = r * h + e * s,
	  t[3] = u * h + o * s,
	  t
	}
	function i(t, n, a) {
	  return t[0] = n[0] - a[0],
	  t[1] = n[1] - a[1],
	  t[2] = n[2] - a[2],
	  t[3] = n[3] - a[3],
	  t
	}
	var c = o,
	h = i,
	s = Object.freeze({
	  create: function () {
		var t = new a(4);
		return a != Float32Array && (t[1] = 0, t[2] = 0),
		t[0] = 1,
		t[3] = 1,
		t
	  },
	  clone: function (t) {
		var n = new a(4);
		return n[0] = t[0],
		n[1] = t[1],
		n[2] = t[2],
		n[3] = t[3],
		n
	  },
	  copy: function (t, n) {
		return t[0] = n[0],
		t[1] = n[1],
		t[2] = n[2],
		t[3] = n[3],
		t
	  },
	  identity: function (t) {
		return t[0] = 1,
		t[1] = 0,
		t[2] = 0,
		t[3] = 1,
		t
	  },
	  fromValues: function (t, n, r, u) {
		var e = new a(4);
		return e[0] = t,
		e[1] = n,
		e[2] = r,
		e[3] = u,
		e
	  },
	  set: function (t, n, a, r, u) {
		return t[0] = n,
		t[1] = a,
		t[2] = r,
		t[3] = u,
		t
	  },
	  transpose: function (t, n) {
		if (t === n) {
		  var a = n[1];
		  t[1] = n[2],
		  t[2] = a
		} else t[0] = n[0],
		t[1] = n[2],
		t[2] = n[1],
		t[3] = n[3];
		return t
	  },
	  invert: function (t, n) {
		var a = n[0],
		r = n[1],
		u = n[2],
		e = n[3],
		o = a * e - u * r;
		return o ? (o = 1 / o, t[0] = e * o, t[1] = - r * o, t[2] = - u * o, t[3] = a * o, t) : null
	  },
	  adjoint: function (t, n) {
		var a = n[0];
		return t[0] = n[3],
		t[1] = - n[1],
		t[2] = - n[2],
		t[3] = a,
		t
	  },
	  determinant: function (t) {
		return t[0] * t[3] - t[2] * t[1]
	  },
	  multiply: o,
	  rotate: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2],
		o = n[3],
		i = Math.sin(a),
		c = Math.cos(a);
		return t[0] = r * c + e * i,
		t[1] = u * c + o * i,
		t[2] = r * - i + e * c,
		t[3] = u * - i + o * c,
		t
	  },
	  scale: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2],
		o = n[3],
		i = a[0],
		c = a[1];
		return t[0] = r * i,
		t[1] = u * i,
		t[2] = e * c,
		t[3] = o * c,
		t
	  },
	  fromRotation: function (t, n) {
		var a = Math.sin(n),
		r = Math.cos(n);
		return t[0] = r,
		t[1] = a,
		t[2] = - a,
		t[3] = r,
		t
	  },
	  fromScaling: function (t, n) {
		return t[0] = n[0],
		t[1] = 0,
		t[2] = 0,
		t[3] = n[1],
		t
	  },
	  str: function (t) {
		return 'mat2(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')'
	  },
	  frob: function (t) {
		return Math.hypot(t[0], t[1], t[2], t[3])
	  },
	  LDU: function (t, n, a, r) {
		return t[2] = r[2] / r[0],
		a[0] = r[0],
		a[1] = r[1],
		a[3] = r[3] - t[2] * a[1],
		[
		  t,
		  n,
		  a
		]
	  },
	  add: function (t, n, a) {
		return t[0] = n[0] + a[0],
		t[1] = n[1] + a[1],
		t[2] = n[2] + a[2],
		t[3] = n[3] + a[3],
		t
	  },
	  subtract: i,
	  exactEquals: function (t, n) {
		return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
	  },
	  equals: function (t, a) {
		var r = t[0],
		u = t[1],
		e = t[2],
		o = t[3],
		i = a[0],
		c = a[1],
		h = a[2],
		s = a[3];
		return Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) && Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
	  },
	  multiplyScalar: function (t, n, a) {
		return t[0] = n[0] * a,
		t[1] = n[1] * a,
		t[2] = n[2] * a,
		t[3] = n[3] * a,
		t
	  },
	  multiplyScalarAndAdd: function (t, n, a, r) {
		return t[0] = n[0] + a[0] * r,
		t[1] = n[1] + a[1] * r,
		t[2] = n[2] + a[2] * r,
		t[3] = n[3] + a[3] * r,
		t
	  },
	  mul: c,
	  sub: h
	});
	function M(t, n, a) {
	  var r = n[0],
	  u = n[1],
	  e = n[2],
	  o = n[3],
	  i = n[4],
	  c = n[5],
	  h = a[0],
	  s = a[1],
	  M = a[2],
	  f = a[3],
	  l = a[4],
	  v = a[5];
	  return t[0] = r * h + e * s,
	  t[1] = u * h + o * s,
	  t[2] = r * M + e * f,
	  t[3] = u * M + o * f,
	  t[4] = r * l + e * v + i,
	  t[5] = u * l + o * v + c,
	  t
	}
	function f(t, n, a) {
	  return t[0] = n[0] - a[0],
	  t[1] = n[1] - a[1],
	  t[2] = n[2] - a[2],
	  t[3] = n[3] - a[3],
	  t[4] = n[4] - a[4],
	  t[5] = n[5] - a[5],
	  t
	}
	var l = M,
	v = f,
	b = Object.freeze({
	  create: function () {
		var t = new a(6);
		return a != Float32Array && (t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0),
		t[0] = 1,
		t[3] = 1,
		t
	  },
	  clone: function (t) {
		var n = new a(6);
		return n[0] = t[0],
		n[1] = t[1],
		n[2] = t[2],
		n[3] = t[3],
		n[4] = t[4],
		n[5] = t[5],
		n
	  },
	  copy: function (t, n) {
		return t[0] = n[0],
		t[1] = n[1],
		t[2] = n[2],
		t[3] = n[3],
		t[4] = n[4],
		t[5] = n[5],
		t
	  },
	  identity: function (t) {
		return t[0] = 1,
		t[1] = 0,
		t[2] = 0,
		t[3] = 1,
		t[4] = 0,
		t[5] = 0,
		t
	  },
	  fromValues: function (t, n, r, u, e, o) {
		var i = new a(6);
		return i[0] = t,
		i[1] = n,
		i[2] = r,
		i[3] = u,
		i[4] = e,
		i[5] = o,
		i
	  },
	  set: function (t, n, a, r, u, e, o) {
		return t[0] = n,
		t[1] = a,
		t[2] = r,
		t[3] = u,
		t[4] = e,
		t[5] = o,
		t
	  },
	  invert: function (t, n) {
		var a = n[0],
		r = n[1],
		u = n[2],
		e = n[3],
		o = n[4],
		i = n[5],
		c = a * e - r * u;
		return c ? (c = 1 / c, t[0] = e * c, t[1] = - r * c, t[2] = - u * c, t[3] = a * c, t[4] = (u * i - e * o) * c, t[5] = (r * o - a * i) * c, t) : null
	  },
	  determinant: function (t) {
		return t[0] * t[3] - t[1] * t[2]
	  },
	  multiply: M,
	  rotate: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2],
		o = n[3],
		i = n[4],
		c = n[5],
		h = Math.sin(a),
		s = Math.cos(a);
		return t[0] = r * s + e * h,
		t[1] = u * s + o * h,
		t[2] = r * - h + e * s,
		t[3] = u * - h + o * s,
		t[4] = i,
		t[5] = c,
		t
	  },
	  scale: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2],
		o = n[3],
		i = n[4],
		c = n[5],
		h = a[0],
		s = a[1];
		return t[0] = r * h,
		t[1] = u * h,
		t[2] = e * s,
		t[3] = o * s,
		t[4] = i,
		t[5] = c,
		t
	  },
	  translate: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2],
		o = n[3],
		i = n[4],
		c = n[5],
		h = a[0],
		s = a[1];
		return t[0] = r,
		t[1] = u,
		t[2] = e,
		t[3] = o,
		t[4] = r * h + e * s + i,
		t[5] = u * h + o * s + c,
		t
	  },
	  fromRotation: function (t, n) {
		var a = Math.sin(n),
		r = Math.cos(n);
		return t[0] = r,
		t[1] = a,
		t[2] = - a,
		t[3] = r,
		t[4] = 0,
		t[5] = 0,
		t
	  },
	  fromScaling: function (t, n) {
		return t[0] = n[0],
		t[1] = 0,
		t[2] = 0,
		t[3] = n[1],
		t[4] = 0,
		t[5] = 0,
		t
	  },
	  fromTranslation: function (t, n) {
		return t[0] = 1,
		t[1] = 0,
		t[2] = 0,
		t[3] = 1,
		t[4] = n[0],
		t[5] = n[1],
		t
	  },
	  str: function (t) {
		return 'mat2d(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + ')'
	  },
	  frob: function (t) {
		return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1)
	  },
	  add: function (t, n, a) {
		return t[0] = n[0] + a[0],
		t[1] = n[1] + a[1],
		t[2] = n[2] + a[2],
		t[3] = n[3] + a[3],
		t[4] = n[4] + a[4],
		t[5] = n[5] + a[5],
		t
	  },
	  subtract: f,
	  multiplyScalar: function (t, n, a) {
		return t[0] = n[0] * a,
		t[1] = n[1] * a,
		t[2] = n[2] * a,
		t[3] = n[3] * a,
		t[4] = n[4] * a,
		t[5] = n[5] * a,
		t
	  },
	  multiplyScalarAndAdd: function (t, n, a, r) {
		return t[0] = n[0] + a[0] * r,
		t[1] = n[1] + a[1] * r,
		t[2] = n[2] + a[2] * r,
		t[3] = n[3] + a[3] * r,
		t[4] = n[4] + a[4] * r,
		t[5] = n[5] + a[5] * r,
		t
	  },
	  exactEquals: function (t, n) {
		return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5]
	  },
	  equals: function (t, a) {
		var r = t[0],
		u = t[1],
		e = t[2],
		o = t[3],
		i = t[4],
		c = t[5],
		h = a[0],
		s = a[1],
		M = a[2],
		f = a[3],
		l = a[4],
		v = a[5];
		return Math.abs(r - h) <= n * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(u - s) <= n * Math.max(1, Math.abs(u), Math.abs(s)) && Math.abs(e - M) <= n * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(o - f) <= n * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(i - l) <= n * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(c - v) <= n * Math.max(1, Math.abs(c), Math.abs(v))
	  },
	  mul: l,
	  sub: v
	});
	function m() {
	  var t = new a(9);
	  return a != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0),
	  t[0] = 1,
	  t[4] = 1,
	  t[8] = 1,
	  t
	}
	function d(t, n, a) {
	  var r = n[0],
	  u = n[1],
	  e = n[2],
	  o = n[3],
	  i = n[4],
	  c = n[5],
	  h = n[6],
	  s = n[7],
	  M = n[8],
	  f = a[0],
	  l = a[1],
	  v = a[2],
	  b = a[3],
	  m = a[4],
	  d = a[5],
	  x = a[6],
	  p = a[7],
	  y = a[8];
	  return t[0] = f * r + l * o + v * h,
	  t[1] = f * u + l * i + v * s,
	  t[2] = f * e + l * c + v * M,
	  t[3] = b * r + m * o + d * h,
	  t[4] = b * u + m * i + d * s,
	  t[5] = b * e + m * c + d * M,
	  t[6] = x * r + p * o + y * h,
	  t[7] = x * u + p * i + y * s,
	  t[8] = x * e + p * c + y * M,
	  t
	}
	function x(t, n, a) {
	  return t[0] = n[0] - a[0],
	  t[1] = n[1] - a[1],
	  t[2] = n[2] - a[2],
	  t[3] = n[3] - a[3],
	  t[4] = n[4] - a[4],
	  t[5] = n[5] - a[5],
	  t[6] = n[6] - a[6],
	  t[7] = n[7] - a[7],
	  t[8] = n[8] - a[8],
	  t
	}
	var p = d,
	y = x,
	q = Object.freeze({
	  create: m,
	  fromMat4: function (t, n) {
		return t[0] = n[0],
		t[1] = n[1],
		t[2] = n[2],
		t[3] = n[4],
		t[4] = n[5],
		t[5] = n[6],
		t[6] = n[8],
		t[7] = n[9],
		t[8] = n[10],
		t
	  },
	  clone: function (t) {
		var n = new a(9);
		return n[0] = t[0],
		n[1] = t[1],
		n[2] = t[2],
		n[3] = t[3],
		n[4] = t[4],
		n[5] = t[5],
		n[6] = t[6],
		n[7] = t[7],
		n[8] = t[8],
		n
	  },
	  copy: function (t, n) {
		return t[0] = n[0],
		t[1] = n[1],
		t[2] = n[2],
		t[3] = n[3],
		t[4] = n[4],
		t[5] = n[5],
		t[6] = n[6],
		t[7] = n[7],
		t[8] = n[8],
		t
	  },
	  fromValues: function (t, n, r, u, e, o, i, c, h) {
		var s = new a(9);
		return s[0] = t,
		s[1] = n,
		s[2] = r,
		s[3] = u,
		s[4] = e,
		s[5] = o,
		s[6] = i,
		s[7] = c,
		s[8] = h,
		s
	  },
	  set: function (t, n, a, r, u, e, o, i, c, h) {
		return t[0] = n,
		t[1] = a,
		t[2] = r,
		t[3] = u,
		t[4] = e,
		t[5] = o,
		t[6] = i,
		t[7] = c,
		t[8] = h,
		t
	  },
	  identity: function (t) {
		return t[0] = 1,
		t[1] = 0,
		t[2] = 0,
		t[3] = 0,
		t[4] = 1,
		t[5] = 0,
		t[6] = 0,
		t[7] = 0,
		t[8] = 1,
		t
	  },
	  transpose: function (t, n) {
		if (t === n) {
		  var a = n[1],
		  r = n[2],
		  u = n[5];
		  t[1] = n[3],
		  t[2] = n[6],
		  t[3] = a,
		  t[5] = n[7],
		  t[6] = r,
		  t[7] = u
		} else t[0] = n[0],
		t[1] = n[3],
		t[2] = n[6],
		t[3] = n[1],
		t[4] = n[4],
		t[5] = n[7],
		t[6] = n[2],
		t[7] = n[5],
		t[8] = n[8];
		return t
	  },
	  invert: function (t, n) {
		var a = n[0],
		r = n[1],
		u = n[2],
		e = n[3],
		o = n[4],
		i = n[5],
		c = n[6],
		h = n[7],
		s = n[8],
		M = s * o - i * h,
		f = - s * e + i * c,
		l = h * e - o * c,
		v = a * M + r * f + u * l;
		return v ? (v = 1 / v, t[0] = M * v, t[1] = ( - s * r + u * h) * v, t[2] = (i * r - u * o) * v, t[3] = f * v, t[4] = (s * a - u * c) * v, t[5] = ( - i * a + u * e) * v, t[6] = l * v, t[7] = ( - h * a + r * c) * v, t[8] = (o * a - r * e) * v, t) : null
	  },
	  adjoint: function (t, n) {
		var a = n[0],
		r = n[1],
		u = n[2],
		e = n[3],
		o = n[4],
		i = n[5],
		c = n[6],
		h = n[7],
		s = n[8];
		return t[0] = o * s - i * h,
		t[1] = u * h - r * s,
		t[2] = r * i - u * o,
		t[3] = i * c - e * s,
		t[4] = a * s - u * c,
		t[5] = u * e - a * i,
		t[6] = e * h - o * c,
		t[7] = r * c - a * h,
		t[8] = a * o - r * e,
		t
	  },
	  determinant: function (t) {
		var n = t[0],
		a = t[1],
		r = t[2],
		u = t[3],
		e = t[4],
		o = t[5],
		i = t[6],
		c = t[7],
		h = t[8];
		return n * (h * e - o * c) + a * ( - h * u + o * i) + r * (c * u - e * i)
	  },
	  multiply: d,
	  translate: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2],
		o = n[3],
		i = n[4],
		c = n[5],
		h = n[6],
		s = n[7],
		M = n[8],
		f = a[0],
		l = a[1];
		return t[0] = r,
		t[1] = u,
		t[2] = e,
		t[3] = o,
		t[4] = i,
		t[5] = c,
		t[6] = f * r + l * o + h,
		t[7] = f * u + l * i + s,
		t[8] = f * e + l * c + M,
		t
	  },
	  rotate: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2],
		o = n[3],
		i = n[4],
		c = n[5],
		h = n[6],
		s = n[7],
		M = n[8],
		f = Math.sin(a),
		l = Math.cos(a);
		return t[0] = l * r + f * o,
		t[1] = l * u + f * i,
		t[2] = l * e + f * c,
		t[3] = l * o - f * r,
		t[4] = l * i - f * u,
		t[5] = l * c - f * e,
		t[6] = h,
		t[7] = s,
		t[8] = M,
		t
	  },
	  scale: function (t, n, a) {
		var r = a[0],
		u = a[1];
		return t[0] = r * n[0],
		t[1] = r * n[1],
		t[2] = r * n[2],
		t[3] = u * n[3],
		t[4] = u * n[4],
		t[5] = u * n[5],
		t[6] = n[6],
		t[7] = n[7],
		t[8] = n[8],
		t
	  },
	  fromTranslation: function (t, n) {
		return t[0] = 1,
		t[1] = 0,
		t[2] = 0,
		t[3] = 0,
		t[4] = 1,
		t[5] = 0,
		t[6] = n[0],
		t[7] = n[1],
		t[8] = 1,
		t
	  },
	  fromRotation: function (t, n) {
		var a = Math.sin(n),
		r = Math.cos(n);
		return t[0] = r,
		t[1] = a,
		t[2] = 0,
		t[3] = - a,
		t[4] = r,
		t[5] = 0,
		t[6] = 0,
		t[7] = 0,
		t[8] = 1,
		t
	  },
	  fromScaling: function (t, n) {
		return t[0] = n[0],
		t[1] = 0,
		t[2] = 0,
		t[3] = 0,
		t[4] = n[1],
		t[5] = 0,
		t[6] = 0,
		t[7] = 0,
		t[8] = 1,
		t
	  },
	  fromMat2d: function (t, n) {
		return t[0] = n[0],
		t[1] = n[1],
		t[2] = 0,
		t[3] = n[2],
		t[4] = n[3],
		t[5] = 0,
		t[6] = n[4],
		t[7] = n[5],
		t[8] = 1,
		t
	  },
	  fromQuat: function (t, n) {
		var a = n[0],
		r = n[1],
		u = n[2],
		e = n[3],
		o = a + a,
		i = r + r,
		c = u + u,
		h = a * o,
		s = r * o,
		M = r * i,
		f = u * o,
		l = u * i,
		v = u * c,
		b = e * o,
		m = e * i,
		d = e * c;
		return t[0] = 1 - M - v,
		t[3] = s - d,
		t[6] = f + m,
		t[1] = s + d,
		t[4] = 1 - h - v,
		t[7] = l - b,
		t[2] = f - m,
		t[5] = l + b,
		t[8] = 1 - h - M,
		t
	  },
	  normalFromMat4: function (t, n) {
		var a = n[0],
		r = n[1],
		u = n[2],
		e = n[3],
		o = n[4],
		i = n[5],
		c = n[6],
		h = n[7],
		s = n[8],
		M = n[9],
		f = n[10],
		l = n[11],
		v = n[12],
		b = n[13],
		m = n[14],
		d = n[15],
		x = a * i - r * o,
		p = a * c - u * o,
		y = a * h - e * o,
		q = r * c - u * i,
		g = r * h - e * i,
		A = u * h - e * c,
		w = s * b - M * v,
		R = s * m - f * v,
		z = s * d - l * v,
		P = M * m - f * b,
		j = M * d - l * b,
		I = f * d - l * m,
		S = x * I - p * j + y * P + q * z - g * R + A * w;
		return S ? (S = 1 / S, t[0] = (i * I - c * j + h * P) * S, t[1] = (c * z - o * I - h * R) * S, t[2] = (o * j - i * z + h * w) * S, t[3] = (u * j - r * I - e * P) * S, t[4] = (a * I - u * z + e * R) * S, t[5] = (r * z - a * j - e * w) * S, t[6] = (b * A - m * g + d * q) * S, t[7] = (m * y - v * A - d * p) * S, t[8] = (v * g - b * y + d * x) * S, t) : null
	  },
	  projection: function (t, n, a) {
		return t[0] = 2 / n,
		t[1] = 0,
		t[2] = 0,
		t[3] = 0,
		t[4] = - 2 / a,
		t[5] = 0,
		t[6] = - 1,
		t[7] = 1,
		t[8] = 1,
		t
	  },
	  str: function (t) {
		return 'mat3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + ', ' + t[6] + ', ' + t[7] + ', ' + t[8] + ')'
	  },
	  frob: function (t) {
		return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
	  },
	  add: function (t, n, a) {
		return t[0] = n[0] + a[0],
		t[1] = n[1] + a[1],
		t[2] = n[2] + a[2],
		t[3] = n[3] + a[3],
		t[4] = n[4] + a[4],
		t[5] = n[5] + a[5],
		t[6] = n[6] + a[6],
		t[7] = n[7] + a[7],
		t[8] = n[8] + a[8],
		t
	  },
	  subtract: x,
	  multiplyScalar: function (t, n, a) {
		return t[0] = n[0] * a,
		t[1] = n[1] * a,
		t[2] = n[2] * a,
		t[3] = n[3] * a,
		t[4] = n[4] * a,
		t[5] = n[5] * a,
		t[6] = n[6] * a,
		t[7] = n[7] * a,
		t[8] = n[8] * a,
		t
	  },
	  multiplyScalarAndAdd: function (t, n, a, r) {
		return t[0] = n[0] + a[0] * r,
		t[1] = n[1] + a[1] * r,
		t[2] = n[2] + a[2] * r,
		t[3] = n[3] + a[3] * r,
		t[4] = n[4] + a[4] * r,
		t[5] = n[5] + a[5] * r,
		t[6] = n[6] + a[6] * r,
		t[7] = n[7] + a[7] * r,
		t[8] = n[8] + a[8] * r,
		t
	  },
	  exactEquals: function (t, n) {
		return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8]
	  },
	  equals: function (t, a) {
		var r = t[0],
		u = t[1],
		e = t[2],
		o = t[3],
		i = t[4],
		c = t[5],
		h = t[6],
		s = t[7],
		M = t[8],
		f = a[0],
		l = a[1],
		v = a[2],
		b = a[3],
		m = a[4],
		d = a[5],
		x = a[6],
		p = a[7],
		y = a[8];
		return Math.abs(r - f) <= n * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(u - l) <= n * Math.max(1, Math.abs(u), Math.abs(l)) && Math.abs(e - v) <= n * Math.max(1, Math.abs(e), Math.abs(v)) && Math.abs(o - b) <= n * Math.max(1, Math.abs(o), Math.abs(b)) && Math.abs(i - m) <= n * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(c - d) <= n * Math.max(1, Math.abs(c), Math.abs(d)) && Math.abs(h - x) <= n * Math.max(1, Math.abs(h), Math.abs(x)) && Math.abs(s - p) <= n * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(M - y) <= n * Math.max(1, Math.abs(M), Math.abs(y))
	  },
	  mul: p,
	  sub: y
	});
	function g(t) {
	  return t[0] = 1,
	  t[1] = 0,
	  t[2] = 0,
	  t[3] = 0,
	  t[4] = 0,
	  t[5] = 1,
	  t[6] = 0,
	  t[7] = 0,
	  t[8] = 0,
	  t[9] = 0,
	  t[10] = 1,
	  t[11] = 0,
	  t[12] = 0,
	  t[13] = 0,
	  t[14] = 0,
	  t[15] = 1,
	  t
	}
	function A(t, n, a) {
	  var r = n[0],
	  u = n[1],
	  e = n[2],
	  o = n[3],
	  i = n[4],
	  c = n[5],
	  h = n[6],
	  s = n[7],
	  M = n[8],
	  f = n[9],
	  l = n[10],
	  v = n[11],
	  b = n[12],
	  m = n[13],
	  d = n[14],
	  x = n[15],
	  p = a[0],
	  y = a[1],
	  q = a[2],
	  g = a[3];
	  return t[0] = p * r + y * i + q * M + g * b,
	  t[1] = p * u + y * c + q * f + g * m,
	  t[2] = p * e + y * h + q * l + g * d,
	  t[3] = p * o + y * s + q * v + g * x,
	  p = a[4],
	  y = a[5],
	  q = a[6],
	  g = a[7],
	  t[4] = p * r + y * i + q * M + g * b,
	  t[5] = p * u + y * c + q * f + g * m,
	  t[6] = p * e + y * h + q * l + g * d,
	  t[7] = p * o + y * s + q * v + g * x,
	  p = a[8],
	  y = a[9],
	  q = a[10],
	  g = a[11],
	  t[8] = p * r + y * i + q * M + g * b,
	  t[9] = p * u + y * c + q * f + g * m,
	  t[10] = p * e + y * h + q * l + g * d,
	  t[11] = p * o + y * s + q * v + g * x,
	  p = a[12],
	  y = a[13],
	  q = a[14],
	  g = a[15],
	  t[12] = p * r + y * i + q * M + g * b,
	  t[13] = p * u + y * c + q * f + g * m,
	  t[14] = p * e + y * h + q * l + g * d,
	  t[15] = p * o + y * s + q * v + g * x,
	  t
	}
	function w(t, n, a) {
	  var r = n[0],
	  u = n[1],
	  e = n[2],
	  o = n[3],
	  i = r + r,
	  c = u + u,
	  h = e + e,
	  s = r * i,
	  M = r * c,
	  f = r * h,
	  l = u * c,
	  v = u * h,
	  b = e * h,
	  m = o * i,
	  d = o * c,
	  x = o * h;
	  return t[0] = 1 - (l + b),
	  t[1] = M + x,
	  t[2] = f - d,
	  t[3] = 0,
	  t[4] = M - x,
	  t[5] = 1 - (s + b),
	  t[6] = v + m,
	  t[7] = 0,
	  t[8] = f + d,
	  t[9] = v - m,
	  t[10] = 1 - (s + l),
	  t[11] = 0,
	  t[12] = a[0],
	  t[13] = a[1],
	  t[14] = a[2],
	  t[15] = 1,
	  t
	}
	function R(t, n) {
	  return t[0] = n[12],
	  t[1] = n[13],
	  t[2] = n[14],
	  t
	}
	function z(t, n) {
	  var a = n[0],
	  r = n[1],
	  u = n[2],
	  e = n[4],
	  o = n[5],
	  i = n[6],
	  c = n[8],
	  h = n[9],
	  s = n[10];
	  return t[0] = Math.hypot(a, r, u),
	  t[1] = Math.hypot(e, o, i),
	  t[2] = Math.hypot(c, h, s),
	  t
	}
	function P(t, n) {
	  var r = new a(3);
	  z(r, n);
	  var u = 1 / r[0],
	  e = 1 / r[1],
	  o = 1 / r[2],
	  i = n[0] * u,
	  c = n[1] * e,
	  h = n[2] * o,
	  s = n[4] * u,
	  M = n[5] * e,
	  f = n[6] * o,
	  l = n[8] * u,
	  v = n[9] * e,
	  b = n[10] * o,
	  m = i + M + b,
	  d = 0;
	  return m > 0 ? (d = 2 * Math.sqrt(m + 1), t[3] = 0.25 * d, t[0] = (f - v) / d, t[1] = (l - h) / d, t[2] = (c - s) / d) : i > M && i > b ? (d = 2 * Math.sqrt(1 + i - M - b), t[3] = (f - v) / d, t[0] = 0.25 * d, t[1] = (c + s) / d, t[2] = (l + h) / d) : M > b ? (d = 2 * Math.sqrt(1 + M - i - b), t[3] = (l - h) / d, t[0] = (c + s) / d, t[1] = 0.25 * d, t[2] = (f + v) / d) : (d = 2 * Math.sqrt(1 + b - i - M), t[3] = (c - s) / d, t[0] = (l + h) / d, t[1] = (f + v) / d, t[2] = 0.25 * d),
	  t
	}
	function j(t, n, a) {
	  return t[0] = n[0] - a[0],
	  t[1] = n[1] - a[1],
	  t[2] = n[2] - a[2],
	  t[3] = n[3] - a[3],
	  t[4] = n[4] - a[4],
	  t[5] = n[5] - a[5],
	  t[6] = n[6] - a[6],
	  t[7] = n[7] - a[7],
	  t[8] = n[8] - a[8],
	  t[9] = n[9] - a[9],
	  t[10] = n[10] - a[10],
	  t[11] = n[11] - a[11],
	  t[12] = n[12] - a[12],
	  t[13] = n[13] - a[13],
	  t[14] = n[14] - a[14],
	  t[15] = n[15] - a[15],
	  t
	}
	var I = A,
	S = j,
	E = Object.freeze({
	  create: function () {
		var t = new a(16);
		return a != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0),
		t[0] = 1,
		t[5] = 1,
		t[10] = 1,
		t[15] = 1,
		t
	  },
	  clone: function (t) {
		var n = new a(16);
		return n[0] = t[0],
		n[1] = t[1],
		n[2] = t[2],
		n[3] = t[3],
		n[4] = t[4],
		n[5] = t[5],
		n[6] = t[6],
		n[7] = t[7],
		n[8] = t[8],
		n[9] = t[9],
		n[10] = t[10],
		n[11] = t[11],
		n[12] = t[12],
		n[13] = t[13],
		n[14] = t[14],
		n[15] = t[15],
		n
	  },
	  copy: function (t, n) {
		return t[0] = n[0],
		t[1] = n[1],
		t[2] = n[2],
		t[3] = n[3],
		t[4] = n[4],
		t[5] = n[5],
		t[6] = n[6],
		t[7] = n[7],
		t[8] = n[8],
		t[9] = n[9],
		t[10] = n[10],
		t[11] = n[11],
		t[12] = n[12],
		t[13] = n[13],
		t[14] = n[14],
		t[15] = n[15],
		t
	  },
	  fromValues: function (t, n, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
		var d = new a(16);
		return d[0] = t,
		d[1] = n,
		d[2] = r,
		d[3] = u,
		d[4] = e,
		d[5] = o,
		d[6] = i,
		d[7] = c,
		d[8] = h,
		d[9] = s,
		d[10] = M,
		d[11] = f,
		d[12] = l,
		d[13] = v,
		d[14] = b,
		d[15] = m,
		d
	  },
	  set: function (t, n, a, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
		return t[0] = n,
		t[1] = a,
		t[2] = r,
		t[3] = u,
		t[4] = e,
		t[5] = o,
		t[6] = i,
		t[7] = c,
		t[8] = h,
		t[9] = s,
		t[10] = M,
		t[11] = f,
		t[12] = l,
		t[13] = v,
		t[14] = b,
		t[15] = m,
		t
	  },
	  identity: g,
	  transpose: function (t, n) {
		if (t === n) {
		  var a = n[1],
		  r = n[2],
		  u = n[3],
		  e = n[6],
		  o = n[7],
		  i = n[11];
		  t[1] = n[4],
		  t[2] = n[8],
		  t[3] = n[12],
		  t[4] = a,
		  t[6] = n[9],
		  t[7] = n[13],
		  t[8] = r,
		  t[9] = e,
		  t[11] = n[14],
		  t[12] = u,
		  t[13] = o,
		  t[14] = i
		} else t[0] = n[0],
		t[1] = n[4],
		t[2] = n[8],
		t[3] = n[12],
		t[4] = n[1],
		t[5] = n[5],
		t[6] = n[9],
		t[7] = n[13],
		t[8] = n[2],
		t[9] = n[6],
		t[10] = n[10],
		t[11] = n[14],
		t[12] = n[3],
		t[13] = n[7],
		t[14] = n[11],
		t[15] = n[15];
		return t
	  },
	  invert: function (t, n) {
		var a = n[0],
		r = n[1],
		u = n[2],
		e = n[3],
		o = n[4],
		i = n[5],
		c = n[6],
		h = n[7],
		s = n[8],
		M = n[9],
		f = n[10],
		l = n[11],
		v = n[12],
		b = n[13],
		m = n[14],
		d = n[15],
		x = a * i - r * o,
		p = a * c - u * o,
		y = a * h - e * o,
		q = r * c - u * i,
		g = r * h - e * i,
		A = u * h - e * c,
		w = s * b - M * v,
		R = s * m - f * v,
		z = s * d - l * v,
		P = M * m - f * b,
		j = M * d - l * b,
		I = f * d - l * m,
		S = x * I - p * j + y * P + q * z - g * R + A * w;
		return S ? (S = 1 / S, t[0] = (i * I - c * j + h * P) * S, t[1] = (u * j - r * I - e * P) * S, t[2] = (b * A - m * g + d * q) * S, t[3] = (f * g - M * A - l * q) * S, t[4] = (c * z - o * I - h * R) * S, t[5] = (a * I - u * z + e * R) * S, t[6] = (m * y - v * A - d * p) * S, t[7] = (s * A - f * y + l * p) * S, t[8] = (o * j - i * z + h * w) * S, t[9] = (r * z - a * j - e * w) * S, t[10] = (v * g - b * y + d * x) * S, t[11] = (M * y - s * g - l * x) * S, t[12] = (i * R - o * P - c * w) * S, t[13] = (a * P - r * R + u * w) * S, t[14] = (b * p - v * q - m * x) * S, t[15] = (s * q - M * p + f * x) * S, t) : null
	  },
	  adjoint: function (t, n) {
		var a = n[0],
		r = n[1],
		u = n[2],
		e = n[3],
		o = n[4],
		i = n[5],
		c = n[6],
		h = n[7],
		s = n[8],
		M = n[9],
		f = n[10],
		l = n[11],
		v = n[12],
		b = n[13],
		m = n[14],
		d = n[15];
		return t[0] = i * (f * d - l * m) - M * (c * d - h * m) + b * (c * l - h * f),
		t[1] = - (r * (f * d - l * m) - M * (u * d - e * m) + b * (u * l - e * f)),
		t[2] = r * (c * d - h * m) - i * (u * d - e * m) + b * (u * h - e * c),
		t[3] = - (r * (c * l - h * f) - i * (u * l - e * f) + M * (u * h - e * c)),
		t[4] = - (o * (f * d - l * m) - s * (c * d - h * m) + v * (c * l - h * f)),
		t[5] = a * (f * d - l * m) - s * (u * d - e * m) + v * (u * l - e * f),
		t[6] = - (a * (c * d - h * m) - o * (u * d - e * m) + v * (u * h - e * c)),
		t[7] = a * (c * l - h * f) - o * (u * l - e * f) + s * (u * h - e * c),
		t[8] = o * (M * d - l * b) - s * (i * d - h * b) + v * (i * l - h * M),
		t[9] = - (a * (M * d - l * b) - s * (r * d - e * b) + v * (r * l - e * M)),
		t[10] = a * (i * d - h * b) - o * (r * d - e * b) + v * (r * h - e * i),
		t[11] = - (a * (i * l - h * M) - o * (r * l - e * M) + s * (r * h - e * i)),
		t[12] = - (o * (M * m - f * b) - s * (i * m - c * b) + v * (i * f - c * M)),
		t[13] = a * (M * m - f * b) - s * (r * m - u * b) + v * (r * f - u * M),
		t[14] = - (a * (i * m - c * b) - o * (r * m - u * b) + v * (r * c - u * i)),
		t[15] = a * (i * f - c * M) - o * (r * f - u * M) + s * (r * c - u * i),
		t
	  },
	  determinant: function (t) {
		var n = t[0],
		a = t[1],
		r = t[2],
		u = t[3],
		e = t[4],
		o = t[5],
		i = t[6],
		c = t[7],
		h = t[8],
		s = t[9],
		M = t[10],
		f = t[11],
		l = t[12],
		v = t[13],
		b = t[14],
		m = t[15];
		return (n * o - a * e) * (M * m - f * b) - (n * i - r * e) * (s * m - f * v) + (n * c - u * e) * (s * b - M * v) + (a * i - r * o) * (h * m - f * l) - (a * c - u * o) * (h * b - M * l) + (r * c - u * i) * (h * v - s * l)
	  },
	  multiply: A,
	  translate: function (t, n, a) {
		var r,
		u,
		e,
		o,
		i,
		c,
		h,
		s,
		M,
		f,
		l,
		v,
		b = a[0],
		m = a[1],
		d = a[2];
		return n === t ? (t[12] = n[0] * b + n[4] * m + n[8] * d + n[12], t[13] = n[1] * b + n[5] * m + n[9] * d + n[13], t[14] = n[2] * b + n[6] * m + n[10] * d + n[14], t[15] = n[3] * b + n[7] * m + n[11] * d + n[15]) : (r = n[0], u = n[1], e = n[2], o = n[3], i = n[4], c = n[5], h = n[6], s = n[7], M = n[8], f = n[9], l = n[10], v = n[11], t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = i, t[5] = c, t[6] = h, t[7] = s, t[8] = M, t[9] = f, t[10] = l, t[11] = v, t[12] = r * b + i * m + M * d + n[12], t[13] = u * b + c * m + f * d + n[13], t[14] = e * b + h * m + l * d + n[14], t[15] = o * b + s * m + v * d + n[15]),
		t
	  },
	  scale: function (t, n, a) {
		var r = a[0],
		u = a[1],
		e = a[2];
		return t[0] = n[0] * r,
		t[1] = n[1] * r,
		t[2] = n[2] * r,
		t[3] = n[3] * r,
		t[4] = n[4] * u,
		t[5] = n[5] * u,
		t[6] = n[6] * u,
		t[7] = n[7] * u,
		t[8] = n[8] * e,
		t[9] = n[9] * e,
		t[10] = n[10] * e,
		t[11] = n[11] * e,
		t[12] = n[12],
		t[13] = n[13],
		t[14] = n[14],
		t[15] = n[15],
		t
	  },
	  rotate: function (t, a, r, u) {
		var e,
		o,
		i,
		c,
		h,
		s,
		M,
		f,
		l,
		v,
		b,
		m,
		d,
		x,
		p,
		y,
		q,
		g,
		A,
		w,
		R,
		z,
		P,
		j,
		I = u[0],
		S = u[1],
		E = u[2],
		O = Math.hypot(I, S, E);
		return O < n ? null : (I *= O = 1 / O, S *= O, E *= O, e = Math.sin(r), i = 1 - (o = Math.cos(r)), c = a[0], h = a[1], s = a[2], M = a[3], f = a[4], l = a[5], v = a[6], b = a[7], m = a[8], d = a[9], x = a[10], p = a[11], y = I * I * i + o, q = S * I * i + E * e, g = E * I * i - S * e, A = I * S * i - E * e, w = S * S * i + o, R = E * S * i + I * e, z = I * E * i + S * e, P = S * E * i - I * e, j = E * E * i + o, t[0] = c * y + f * q + m * g, t[1] = h * y + l * q + d * g, t[2] = s * y + v * q + x * g, t[3] = M * y + b * q + p * g, t[4] = c * A + f * w + m * R, t[5] = h * A + l * w + d * R, t[6] = s * A + v * w + x * R, t[7] = M * A + b * w + p * R, t[8] = c * z + f * P + m * j, t[9] = h * z + l * P + d * j, t[10] = s * z + v * P + x * j, t[11] = M * z + b * P + p * j, a !== t && (t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t)
	  },
	  rotateX: function (t, n, a) {
		var r = Math.sin(a),
		u = Math.cos(a),
		e = n[4],
		o = n[5],
		i = n[6],
		c = n[7],
		h = n[8],
		s = n[9],
		M = n[10],
		f = n[11];
		return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]),
		t[4] = e * u + h * r,
		t[5] = o * u + s * r,
		t[6] = i * u + M * r,
		t[7] = c * u + f * r,
		t[8] = h * u - e * r,
		t[9] = s * u - o * r,
		t[10] = M * u - i * r,
		t[11] = f * u - c * r,
		t
	  },
	  rotateY: function (t, n, a) {
		var r = Math.sin(a),
		u = Math.cos(a),
		e = n[0],
		o = n[1],
		i = n[2],
		c = n[3],
		h = n[8],
		s = n[9],
		M = n[10],
		f = n[11];
		return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]),
		t[0] = e * u - h * r,
		t[1] = o * u - s * r,
		t[2] = i * u - M * r,
		t[3] = c * u - f * r,
		t[8] = e * r + h * u,
		t[9] = o * r + s * u,
		t[10] = i * r + M * u,
		t[11] = c * r + f * u,
		t
	  },
	  rotateZ: function (t, n, a) {
		var r = Math.sin(a),
		u = Math.cos(a),
		e = n[0],
		o = n[1],
		i = n[2],
		c = n[3],
		h = n[4],
		s = n[5],
		M = n[6],
		f = n[7];
		return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]),
		t[0] = e * u + h * r,
		t[1] = o * u + s * r,
		t[2] = i * u + M * r,
		t[3] = c * u + f * r,
		t[4] = h * u - e * r,
		t[5] = s * u - o * r,
		t[6] = M * u - i * r,
		t[7] = f * u - c * r,
		t
	  },
	  fromTranslation: function (t, n) {
		return t[0] = 1,
		t[1] = 0,
		t[2] = 0,
		t[3] = 0,
		t[4] = 0,
		t[5] = 1,
		t[6] = 0,
		t[7] = 0,
		t[8] = 0,
		t[9] = 0,
		t[10] = 1,
		t[11] = 0,
		t[12] = n[0],
		t[13] = n[1],
		t[14] = n[2],
		t[15] = 1,
		t
	  },
	  fromScaling: function (t, n) {
		return t[0] = n[0],
		t[1] = 0,
		t[2] = 0,
		t[3] = 0,
		t[4] = 0,
		t[5] = n[1],
		t[6] = 0,
		t[7] = 0,
		t[8] = 0,
		t[9] = 0,
		t[10] = n[2],
		t[11] = 0,
		t[12] = 0,
		t[13] = 0,
		t[14] = 0,
		t[15] = 1,
		t
	  },
	  fromRotation: function (t, a, r) {
		var u,
		e,
		o,
		i = r[0],
		c = r[1],
		h = r[2],
		s = Math.hypot(i, c, h);
		return s < n ? null : (i *= s = 1 / s, c *= s, h *= s, u = Math.sin(a), o = 1 - (e = Math.cos(a)), t[0] = i * i * o + e, t[1] = c * i * o + h * u, t[2] = h * i * o - c * u, t[3] = 0, t[4] = i * c * o - h * u, t[5] = c * c * o + e, t[6] = h * c * o + i * u, t[7] = 0, t[8] = i * h * o + c * u, t[9] = c * h * o - i * u, t[10] = h * h * o + e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
	  },
	  fromXRotation: function (t, n) {
		var a = Math.sin(n),
		r = Math.cos(n);
		return t[0] = 1,
		t[1] = 0,
		t[2] = 0,
		t[3] = 0,
		t[4] = 0,
		t[5] = r,
		t[6] = a,
		t[7] = 0,
		t[8] = 0,
		t[9] = - a,
		t[10] = r,
		t[11] = 0,
		t[12] = 0,
		t[13] = 0,
		t[14] = 0,
		t[15] = 1,
		t
	  },
	  fromYRotation: function (t, n) {
		var a = Math.sin(n),
		r = Math.cos(n);
		return t[0] = r,
		t[1] = 0,
		t[2] = - a,
		t[3] = 0,
		t[4] = 0,
		t[5] = 1,
		t[6] = 0,
		t[7] = 0,
		t[8] = a,
		t[9] = 0,
		t[10] = r,
		t[11] = 0,
		t[12] = 0,
		t[13] = 0,
		t[14] = 0,
		t[15] = 1,
		t
	  },
	  fromZRotation: function (t, n) {
		var a = Math.sin(n),
		r = Math.cos(n);
		return t[0] = r,
		t[1] = a,
		t[2] = 0,
		t[3] = 0,
		t[4] = - a,
		t[5] = r,
		t[6] = 0,
		t[7] = 0,
		t[8] = 0,
		t[9] = 0,
		t[10] = 1,
		t[11] = 0,
		t[12] = 0,
		t[13] = 0,
		t[14] = 0,
		t[15] = 1,
		t
	  },
	  fromRotationTranslation: w,
	  fromQuat2: function (t, n) {
		var r = new a(3),
		u = - n[0],
		e = - n[1],
		o = - n[2],
		i = n[3],
		c = n[4],
		h = n[5],
		s = n[6],
		M = n[7],
		f = u * u + e * e + o * o + i * i;
		return f > 0 ? (r[0] = 2 * (c * i + M * u + h * o - s * e) / f, r[1] = 2 * (h * i + M * e + s * u - c * o) / f, r[2] = 2 * (s * i + M * o + c * e - h * u) / f) : (r[0] = 2 * (c * i + M * u + h * o - s * e), r[1] = 2 * (h * i + M * e + s * u - c * o), r[2] = 2 * (s * i + M * o + c * e - h * u)),
		w(t, n, r),
		t
	  },
	  getTranslation: R,
	  getScaling: z,
	  getRotation: P,
	  fromRotationTranslationScale: function (t, n, a, r) {
		var u = n[0],
		e = n[1],
		o = n[2],
		i = n[3],
		c = u + u,
		h = e + e,
		s = o + o,
		M = u * c,
		f = u * h,
		l = u * s,
		v = e * h,
		b = e * s,
		m = o * s,
		d = i * c,
		x = i * h,
		p = i * s,
		y = r[0],
		q = r[1],
		g = r[2];
		return t[0] = (1 - (v + m)) * y,
		t[1] = (f + p) * y,
		t[2] = (l - x) * y,
		t[3] = 0,
		t[4] = (f - p) * q,
		t[5] = (1 - (M + m)) * q,
		t[6] = (b + d) * q,
		t[7] = 0,
		t[8] = (l + x) * g,
		t[9] = (b - d) * g,
		t[10] = (1 - (M + v)) * g,
		t[11] = 0,
		t[12] = a[0],
		t[13] = a[1],
		t[14] = a[2],
		t[15] = 1,
		t
	  },
	  fromRotationTranslationScaleOrigin: function (t, n, a, r, u) {
		var e = n[0],
		o = n[1],
		i = n[2],
		c = n[3],
		h = e + e,
		s = o + o,
		M = i + i,
		f = e * h,
		l = e * s,
		v = e * M,
		b = o * s,
		m = o * M,
		d = i * M,
		x = c * h,
		p = c * s,
		y = c * M,
		q = r[0],
		g = r[1],
		A = r[2],
		w = u[0],
		R = u[1],
		z = u[2],
		P = (1 - (b + d)) * q,
		j = (l + y) * q,
		I = (v - p) * q,
		S = (l - y) * g,
		E = (1 - (f + d)) * g,
		O = (m + x) * g,
		T = (v + p) * A,
		D = (m - x) * A,
		F = (1 - (f + b)) * A;
		return t[0] = P,
		t[1] = j,
		t[2] = I,
		t[3] = 0,
		t[4] = S,
		t[5] = E,
		t[6] = O,
		t[7] = 0,
		t[8] = T,
		t[9] = D,
		t[10] = F,
		t[11] = 0,
		t[12] = a[0] + w - (P * w + S * R + T * z),
		t[13] = a[1] + R - (j * w + E * R + D * z),
		t[14] = a[2] + z - (I * w + O * R + F * z),
		t[15] = 1,
		t
	  },
	  fromQuat: function (t, n) {
		var a = n[0],
		r = n[1],
		u = n[2],
		e = n[3],
		o = a + a,
		i = r + r,
		c = u + u,
		h = a * o,
		s = r * o,
		M = r * i,
		f = u * o,
		l = u * i,
		v = u * c,
		b = e * o,
		m = e * i,
		d = e * c;
		return t[0] = 1 - M - v,
		t[1] = s + d,
		t[2] = f - m,
		t[3] = 0,
		t[4] = s - d,
		t[5] = 1 - h - v,
		t[6] = l + b,
		t[7] = 0,
		t[8] = f + m,
		t[9] = l - b,
		t[10] = 1 - h - M,
		t[11] = 0,
		t[12] = 0,
		t[13] = 0,
		t[14] = 0,
		t[15] = 1,
		t
	  },
	  frustum: function (t, n, a, r, u, e, o) {
		var i = 1 / (a - n),
		c = 1 / (u - r),
		h = 1 / (e - o);
		return t[0] = 2 * e * i,
		t[1] = 0,
		t[2] = 0,
		t[3] = 0,
		t[4] = 0,
		t[5] = 2 * e * c,
		t[6] = 0,
		t[7] = 0,
		t[8] = (a + n) * i,
		t[9] = (u + r) * c,
		t[10] = (o + e) * h,
		t[11] = - 1,
		t[12] = 0,
		t[13] = 0,
		t[14] = o * e * 2 * h,
		t[15] = 0,
		t
	  },
	  perspective: function (t, n, a, r, u) {
		var e,
		o = 1 / Math.tan(n / 2);
		return t[0] = o / a,
		t[1] = 0,
		t[2] = 0,
		t[3] = 0,
		t[4] = 0,
		t[5] = o,
		t[6] = 0,
		t[7] = 0,
		t[8] = 0,
		t[9] = 0,
		t[11] = - 1,
		t[12] = 0,
		t[13] = 0,
		t[15] = 0,
		null != u && u !== 1 / 0 ? (e = 1 / (r - u), t[10] = (u + r) * e, t[14] = 2 * u * r * e) : (t[10] = - 1, t[14] = - 2 * r),
		t
	  },
	  perspectiveFromFieldOfView: function (t, n, a, r) {
		var u = Math.tan(n.upDegrees * Math.PI / 180),
		e = Math.tan(n.downDegrees * Math.PI / 180),
		o = Math.tan(n.leftDegrees * Math.PI / 180),
		i = Math.tan(n.rightDegrees * Math.PI / 180),
		c = 2 / (o + i),
		h = 2 / (u + e);
		return t[0] = c,
		t[1] = 0,
		t[2] = 0,
		t[3] = 0,
		t[4] = 0,
		t[5] = h,
		t[6] = 0,
		t[7] = 0,
		t[8] = - (o - i) * c * 0.5,
		t[9] = (u - e) * h * 0.5,
		t[10] = r / (a - r),
		t[11] = - 1,
		t[12] = 0,
		t[13] = 0,
		t[14] = r * a / (a - r),
		t[15] = 0,
		t
	  },
	  ortho: function (t, n, a, r, u, e, o) {
		var i = 1 / (n - a),
		c = 1 / (r - u),
		h = 1 / (e - o);
		return t[0] = - 2 * i,
		t[1] = 0,
		t[2] = 0,
		t[3] = 0,
		t[4] = 0,
		t[5] = - 2 * c,
		t[6] = 0,
		t[7] = 0,
		t[8] = 0,
		t[9] = 0,
		t[10] = 2 * h,
		t[11] = 0,
		t[12] = (n + a) * i,
		t[13] = (u + r) * c,
		t[14] = (o + e) * h,
		t[15] = 1,
		t
	  },
	  lookAt: function (t, a, r, u) {
		var e,
		o,
		i,
		c,
		h,
		s,
		M,
		f,
		l,
		v,
		b = a[0],
		m = a[1],
		d = a[2],
		x = u[0],
		p = u[1],
		y = u[2],
		q = r[0],
		A = r[1],
		w = r[2];
		return Math.abs(b - q) < n && Math.abs(m - A) < n && Math.abs(d - w) < n ? g(t) : (M = b - q, f = m - A, l = d - w, e = p * (l *= v = 1 / Math.hypot(M, f, l)) - y * (f *= v), o = y * (M *= v) - x * l, i = x * f - p * M, (v = Math.hypot(e, o, i)) ? (e *= v = 1 / v, o *= v, i *= v) : (e = 0, o = 0, i = 0), c = f * i - l * o, h = l * e - M * i, s = M * o - f * e, (v = Math.hypot(c, h, s)) ? (c *= v = 1 / v, h *= v, s *= v) : (c = 0, h = 0, s = 0), t[0] = e, t[1] = c, t[2] = M, t[3] = 0, t[4] = o, t[5] = h, t[6] = f, t[7] = 0, t[8] = i, t[9] = s, t[10] = l, t[11] = 0, t[12] = - (e * b + o * m + i * d), t[13] = - (c * b + h * m + s * d), t[14] = - (M * b + f * m + l * d), t[15] = 1, t)
	  },
	  targetTo: function (t, n, a, r) {
		var u = n[0],
		e = n[1],
		o = n[2],
		i = r[0],
		c = r[1],
		h = r[2],
		s = u - a[0],
		M = e - a[1],
		f = o - a[2],
		l = s * s + M * M + f * f;
		l > 0 && (s *= l = 1 / Math.sqrt(l), M *= l, f *= l);
		var v = c * f - h * M,
		b = h * s - i * f,
		m = i * M - c * s;
		return (l = v * v + b * b + m * m) > 0 && (v *= l = 1 / Math.sqrt(l), b *= l, m *= l),
		t[0] = v,
		t[1] = b,
		t[2] = m,
		t[3] = 0,
		t[4] = M * m - f * b,
		t[5] = f * v - s * m,
		t[6] = s * b - M * v,
		t[7] = 0,
		t[8] = s,
		t[9] = M,
		t[10] = f,
		t[11] = 0,
		t[12] = u,
		t[13] = e,
		t[14] = o,
		t[15] = 1,
		t
	  },
	  str: function (t) {
		return 'mat4(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + ', ' + t[6] + ', ' + t[7] + ', ' + t[8] + ', ' + t[9] + ', ' + t[10] + ', ' + t[11] + ', ' + t[12] + ', ' + t[13] + ', ' + t[14] + ', ' + t[15] + ')'
	  },
	  frob: function (t) {
		return Math.hypot(t[0], t[1], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
	  },
	  add: function (t, n, a) {
		return t[0] = n[0] + a[0],
		t[1] = n[1] + a[1],
		t[2] = n[2] + a[2],
		t[3] = n[3] + a[3],
		t[4] = n[4] + a[4],
		t[5] = n[5] + a[5],
		t[6] = n[6] + a[6],
		t[7] = n[7] + a[7],
		t[8] = n[8] + a[8],
		t[9] = n[9] + a[9],
		t[10] = n[10] + a[10],
		t[11] = n[11] + a[11],
		t[12] = n[12] + a[12],
		t[13] = n[13] + a[13],
		t[14] = n[14] + a[14],
		t[15] = n[15] + a[15],
		t
	  },
	  subtract: j,
	  multiplyScalar: function (t, n, a) {
		return t[0] = n[0] * a,
		t[1] = n[1] * a,
		t[2] = n[2] * a,
		t[3] = n[3] * a,
		t[4] = n[4] * a,
		t[5] = n[5] * a,
		t[6] = n[6] * a,
		t[7] = n[7] * a,
		t[8] = n[8] * a,
		t[9] = n[9] * a,
		t[10] = n[10] * a,
		t[11] = n[11] * a,
		t[12] = n[12] * a,
		t[13] = n[13] * a,
		t[14] = n[14] * a,
		t[15] = n[15] * a,
		t
	  },
	  multiplyScalarAndAdd: function (t, n, a, r) {
		return t[0] = n[0] + a[0] * r,
		t[1] = n[1] + a[1] * r,
		t[2] = n[2] + a[2] * r,
		t[3] = n[3] + a[3] * r,
		t[4] = n[4] + a[4] * r,
		t[5] = n[5] + a[5] * r,
		t[6] = n[6] + a[6] * r,
		t[7] = n[7] + a[7] * r,
		t[8] = n[8] + a[8] * r,
		t[9] = n[9] + a[9] * r,
		t[10] = n[10] + a[10] * r,
		t[11] = n[11] + a[11] * r,
		t[12] = n[12] + a[12] * r,
		t[13] = n[13] + a[13] * r,
		t[14] = n[14] + a[14] * r,
		t[15] = n[15] + a[15] * r,
		t
	  },
	  exactEquals: function (t, n) {
		return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8] && t[9] === n[9] && t[10] === n[10] && t[11] === n[11] && t[12] === n[12] && t[13] === n[13] && t[14] === n[14] && t[15] === n[15]
	  },
	  equals: function (t, a) {
		var r = t[0],
		u = t[1],
		e = t[2],
		o = t[3],
		i = t[4],
		c = t[5],
		h = t[6],
		s = t[7],
		M = t[8],
		f = t[9],
		l = t[10],
		v = t[11],
		b = t[12],
		m = t[13],
		d = t[14],
		x = t[15],
		p = a[0],
		y = a[1],
		q = a[2],
		g = a[3],
		A = a[4],
		w = a[5],
		R = a[6],
		z = a[7],
		P = a[8],
		j = a[9],
		I = a[10],
		S = a[11],
		E = a[12],
		O = a[13],
		T = a[14],
		D = a[15];
		return Math.abs(r - p) <= n * Math.max(1, Math.abs(r), Math.abs(p)) && Math.abs(u - y) <= n * Math.max(1, Math.abs(u), Math.abs(y)) && Math.abs(e - q) <= n * Math.max(1, Math.abs(e), Math.abs(q)) && Math.abs(o - g) <= n * Math.max(1, Math.abs(o), Math.abs(g)) && Math.abs(i - A) <= n * Math.max(1, Math.abs(i), Math.abs(A)) && Math.abs(c - w) <= n * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(h - R) <= n * Math.max(1, Math.abs(h), Math.abs(R)) && Math.abs(s - z) <= n * Math.max(1, Math.abs(s), Math.abs(z)) && Math.abs(M - P) <= n * Math.max(1, Math.abs(M), Math.abs(P)) && Math.abs(f - j) <= n * Math.max(1, Math.abs(f), Math.abs(j)) && Math.abs(l - I) <= n * Math.max(1, Math.abs(l), Math.abs(I)) && Math.abs(v - S) <= n * Math.max(1, Math.abs(v), Math.abs(S)) && Math.abs(b - E) <= n * Math.max(1, Math.abs(b), Math.abs(E)) && Math.abs(m - O) <= n * Math.max(1, Math.abs(m), Math.abs(O)) && Math.abs(d - T) <= n * Math.max(1, Math.abs(d), Math.abs(T)) && Math.abs(x - D) <= n * Math.max(1, Math.abs(x), Math.abs(D))
	  },
	  mul: I,
	  sub: S
	});
	function O() {
	  var t = new a(3);
	  return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0),
	  t
	}
	function T(t) {
	  var n = t[0],
	  a = t[1],
	  r = t[2];
	  return Math.hypot(n, a, r)
	}
	function D(t, n, r) {
	  var u = new a(3);
	  return u[0] = t,
	  u[1] = n,
	  u[2] = r,
	  u
	}
	function F(t, n, a) {
	  return t[0] = n[0] - a[0],
	  t[1] = n[1] - a[1],
	  t[2] = n[2] - a[2],
	  t
	}
	function L(t, n, a) {
	  return t[0] = n[0] * a[0],
	  t[1] = n[1] * a[1],
	  t[2] = n[2] * a[2],
	  t
	}
	function V(t, n, a) {
	  return t[0] = n[0] / a[0],
	  t[1] = n[1] / a[1],
	  t[2] = n[2] / a[2],
	  t
	}
	function Q(t, n) {
	  var a = n[0] - t[0],
	  r = n[1] - t[1],
	  u = n[2] - t[2];
	  return Math.hypot(a, r, u)
	}
	function Y(t, n) {
	  var a = n[0] - t[0],
	  r = n[1] - t[1],
	  u = n[2] - t[2];
	  return a * a + r * r + u * u
	}
	function X(t) {
	  var n = t[0],
	  a = t[1],
	  r = t[2];
	  return n * n + a * a + r * r
	}
	function Z(t, n) {
	  var a = n[0],
	  r = n[1],
	  u = n[2],
	  e = a * a + r * r + u * u;
	  return e > 0 && (e = 1 / Math.sqrt(e)),
	  t[0] = n[0] * e,
	  t[1] = n[1] * e,
	  t[2] = n[2] * e,
	  t
	}
	function _(t, n) {
	  return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
	}
	function B(t, n, a) {
	  var r = n[0],
	  u = n[1],
	  e = n[2],
	  o = a[0],
	  i = a[1],
	  c = a[2];
	  return t[0] = u * c - e * i,
	  t[1] = e * o - r * c,
	  t[2] = r * i - u * o,
	  t
	}
	var N,
	k = F,
	U = L,
	W = V,
	C = Q,
	G = Y,
	H = T,
	J = X,
	K = (N = O(), function (t, n, a, r, u, e) {
	  var o,
	  i;
	  for (n || (n = 3), a || (a = 0), i = r ? Math.min(r * n + a, t.length) : t.length, o = a; o < i; o += n) N[0] = t[o],
	  N[1] = t[o + 1],
	  N[2] = t[o + 2],
	  u(N, N, e),
	  t[o] = N[0],
	  t[o + 1] = N[1],
	  t[o + 2] = N[2];
	  return t
	}),
	$ = Object.freeze({
	  create: O,
	  clone: function (t) {
		var n = new a(3);
		return n[0] = t[0],
		n[1] = t[1],
		n[2] = t[2],
		n
	  },
	  length: T,
	  fromValues: D,
	  copy: function (t, n) {
		return t[0] = n[0],
		t[1] = n[1],
		t[2] = n[2],
		t
	  },
	  set: function (t, n, a, r) {
		return t[0] = n,
		t[1] = a,
		t[2] = r,
		t
	  },
	  add: function (t, n, a) {
		return t[0] = n[0] + a[0],
		t[1] = n[1] + a[1],
		t[2] = n[2] + a[2],
		t
	  },
	  subtract: F,
	  multiply: L,
	  divide: V,
	  ceil: function (t, n) {
		return t[0] = Math.ceil(n[0]),
		t[1] = Math.ceil(n[1]),
		t[2] = Math.ceil(n[2]),
		t
	  },
	  floor: function (t, n) {
		return t[0] = Math.floor(n[0]),
		t[1] = Math.floor(n[1]),
		t[2] = Math.floor(n[2]),
		t
	  },
	  min: function (t, n, a) {
		return t[0] = Math.min(n[0], a[0]),
		t[1] = Math.min(n[1], a[1]),
		t[2] = Math.min(n[2], a[2]),
		t
	  },
	  max: function (t, n, a) {
		return t[0] = Math.max(n[0], a[0]),
		t[1] = Math.max(n[1], a[1]),
		t[2] = Math.max(n[2], a[2]),
		t
	  },
	  round: function (t, n) {
		return t[0] = Math.round(n[0]),
		t[1] = Math.round(n[1]),
		t[2] = Math.round(n[2]),
		t
	  },
	  scale: function (t, n, a) {
		return t[0] = n[0] * a,
		t[1] = n[1] * a,
		t[2] = n[2] * a,
		t
	  },
	  scaleAndAdd: function (t, n, a, r) {
		return t[0] = n[0] + a[0] * r,
		t[1] = n[1] + a[1] * r,
		t[2] = n[2] + a[2] * r,
		t
	  },
	  distance: Q,
	  squaredDistance: Y,
	  squaredLength: X,
	  negate: function (t, n) {
		return t[0] = - n[0],
		t[1] = - n[1],
		t[2] = - n[2],
		t
	  },
	  inverse: function (t, n) {
		return t[0] = 1 / n[0],
		t[1] = 1 / n[1],
		t[2] = 1 / n[2],
		t
	  },
	  normalize: Z,
	  dot: _,
	  cross: B,
	  lerp: function (t, n, a, r) {
		var u = n[0],
		e = n[1],
		o = n[2];
		return t[0] = u + r * (a[0] - u),
		t[1] = e + r * (a[1] - e),
		t[2] = o + r * (a[2] - o),
		t
	  },
	  hermite: function (t, n, a, r, u, e) {
		var o = e * e,
		i = o * (2 * e - 3) + 1,
		c = o * (e - 2) + e,
		h = o * (e - 1),
		s = o * (3 - 2 * e);
		return t[0] = n[0] * i + a[0] * c + r[0] * h + u[0] * s,
		t[1] = n[1] * i + a[1] * c + r[1] * h + u[1] * s,
		t[2] = n[2] * i + a[2] * c + r[2] * h + u[2] * s,
		t
	  },
	  bezier: function (t, n, a, r, u, e) {
		var o = 1 - e,
		i = o * o,
		c = e * e,
		h = i * o,
		s = 3 * e * i,
		M = 3 * c * o,
		f = c * e;
		return t[0] = n[0] * h + a[0] * s + r[0] * M + u[0] * f,
		t[1] = n[1] * h + a[1] * s + r[1] * M + u[1] * f,
		t[2] = n[2] * h + a[2] * s + r[2] * M + u[2] * f,
		t
	  },
	  random: function (t, n) {
		n = n || 1;
		var a = 2 * r() * Math.PI,
		u = 2 * r() - 1,
		e = Math.sqrt(1 - u * u) * n;
		return t[0] = Math.cos(a) * e,
		t[1] = Math.sin(a) * e,
		t[2] = u * n,
		t
	  },
	  transformMat4: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2],
		o = a[3] * r + a[7] * u + a[11] * e + a[15];
		return o = o || 1,
		t[0] = (a[0] * r + a[4] * u + a[8] * e + a[12]) / o,
		t[1] = (a[1] * r + a[5] * u + a[9] * e + a[13]) / o,
		t[2] = (a[2] * r + a[6] * u + a[10] * e + a[14]) / o,
		t
	  },
	  transformMat3: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2];
		return t[0] = r * a[0] + u * a[3] + e * a[6],
		t[1] = r * a[1] + u * a[4] + e * a[7],
		t[2] = r * a[2] + u * a[5] + e * a[8],
		t
	  },
	  transformQuat: function (t, n, a) {
		var r = a[0],
		u = a[1],
		e = a[2],
		o = a[3],
		i = n[0],
		c = n[1],
		h = n[2],
		s = u * h - e * c,
		M = e * i - r * h,
		f = r * c - u * i,
		l = u * f - e * M,
		v = e * s - r * f,
		b = r * M - u * s,
		m = 2 * o;
		return s *= m,
		M *= m,
		f *= m,
		l *= 2,
		v *= 2,
		b *= 2,
		t[0] = i + s + l,
		t[1] = c + M + v,
		t[2] = h + f + b,
		t
	  },
	  rotateX: function (t, n, a, r) {
		var u = [
		],
		e = [
		];
		return u[0] = n[0] - a[0],
		u[1] = n[1] - a[1],
		u[2] = n[2] - a[2],
		e[0] = u[0],
		e[1] = u[1] * Math.cos(r) - u[2] * Math.sin(r),
		e[2] = u[1] * Math.sin(r) + u[2] * Math.cos(r),
		t[0] = e[0] + a[0],
		t[1] = e[1] + a[1],
		t[2] = e[2] + a[2],
		t
	  },
	  rotateY: function (t, n, a, r) {
		var u = [
		],
		e = [
		];
		return u[0] = n[0] - a[0],
		u[1] = n[1] - a[1],
		u[2] = n[2] - a[2],
		e[0] = u[2] * Math.sin(r) + u[0] * Math.cos(r),
		e[1] = u[1],
		e[2] = u[2] * Math.cos(r) - u[0] * Math.sin(r),
		t[0] = e[0] + a[0],
		t[1] = e[1] + a[1],
		t[2] = e[2] + a[2],
		t
	  },
	  rotateZ: function (t, n, a, r) {
		var u = [
		],
		e = [
		];
		return u[0] = n[0] - a[0],
		u[1] = n[1] - a[1],
		u[2] = n[2] - a[2],
		e[0] = u[0] * Math.cos(r) - u[1] * Math.sin(r),
		e[1] = u[0] * Math.sin(r) + u[1] * Math.cos(r),
		e[2] = u[2],
		t[0] = e[0] + a[0],
		t[1] = e[1] + a[1],
		t[2] = e[2] + a[2],
		t
	  },
	  angle: function (t, n) {
		var a = D(t[0], t[1], t[2]),
		r = D(n[0], n[1], n[2]);
		Z(a, a),
		Z(r, r);
		var u = _(a, r);
		return u > 1 ? 0 : u < - 1 ? Math.PI : Math.acos(u)
	  },
	  zero: function (t) {
		return t[0] = 0,
		t[1] = 0,
		t[2] = 0,
		t
	  },
	  str: function (t) {
		return 'vec3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')'
	  },
	  exactEquals: function (t, n) {
		return t[0] === n[0] && t[1] === n[1] && t[2] === n[2]
	  },
	  equals: function (t, a) {
		var r = t[0],
		u = t[1],
		e = t[2],
		o = a[0],
		i = a[1],
		c = a[2];
		return Math.abs(r - o) <= n * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(u - i) <= n * Math.max(1, Math.abs(u), Math.abs(i)) && Math.abs(e - c) <= n * Math.max(1, Math.abs(e), Math.abs(c))
	  },
	  sub: k,
	  mul: U,
	  div: W,
	  dist: C,
	  sqrDist: G,
	  len: H,
	  sqrLen: J,
	  forEach: K
	});
	function tt() {
	  var t = new a(4);
	  return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0),
	  t
	}
	function nt(t) {
	  var n = new a(4);
	  return n[0] = t[0],
	  n[1] = t[1],
	  n[2] = t[2],
	  n[3] = t[3],
	  n
	}
	function at(t, n, r, u) {
	  var e = new a(4);
	  return e[0] = t,
	  e[1] = n,
	  e[2] = r,
	  e[3] = u,
	  e
	}
	function rt(t, n) {
	  return t[0] = n[0],
	  t[1] = n[1],
	  t[2] = n[2],
	  t[3] = n[3],
	  t
	}
	function ut(t, n, a, r, u) {
	  return t[0] = n,
	  t[1] = a,
	  t[2] = r,
	  t[3] = u,
	  t
	}
	function et(t, n, a) {
	  return t[0] = n[0] + a[0],
	  t[1] = n[1] + a[1],
	  t[2] = n[2] + a[2],
	  t[3] = n[3] + a[3],
	  t
	}
	function ot(t, n, a) {
	  return t[0] = n[0] - a[0],
	  t[1] = n[1] - a[1],
	  t[2] = n[2] - a[2],
	  t[3] = n[3] - a[3],
	  t
	}
	function it(t, n, a) {
	  return t[0] = n[0] * a[0],
	  t[1] = n[1] * a[1],
	  t[2] = n[2] * a[2],
	  t[3] = n[3] * a[3],
	  t
	}
	function ct(t, n, a) {
	  return t[0] = n[0] / a[0],
	  t[1] = n[1] / a[1],
	  t[2] = n[2] / a[2],
	  t[3] = n[3] / a[3],
	  t
	}
	function ht(t, n, a) {
	  return t[0] = n[0] * a,
	  t[1] = n[1] * a,
	  t[2] = n[2] * a,
	  t[3] = n[3] * a,
	  t
	}
	function st(t, n) {
	  var a = n[0] - t[0],
	  r = n[1] - t[1],
	  u = n[2] - t[2],
	  e = n[3] - t[3];
	  return Math.hypot(a, r, u, e)
	}
	function Mt(t, n) {
	  var a = n[0] - t[0],
	  r = n[1] - t[1],
	  u = n[2] - t[2],
	  e = n[3] - t[3];
	  return a * a + r * r + u * u + e * e
	}
	function ft(t) {
	  var n = t[0],
	  a = t[1],
	  r = t[2],
	  u = t[3];
	  return Math.hypot(n, a, r, u)
	}
	function lt(t) {
	  var n = t[0],
	  a = t[1],
	  r = t[2],
	  u = t[3];
	  return n * n + a * a + r * r + u * u
	}
	function vt(t, n) {
	  var a = n[0],
	  r = n[1],
	  u = n[2],
	  e = n[3],
	  o = a * a + r * r + u * u + e * e;
	  return o > 0 && (o = 1 / Math.sqrt(o)),
	  t[0] = a * o,
	  t[1] = r * o,
	  t[2] = u * o,
	  t[3] = e * o,
	  t
	}
	function bt(t, n) {
	  return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
	}
	function mt(t, n, a, r) {
	  var u = n[0],
	  e = n[1],
	  o = n[2],
	  i = n[3];
	  return t[0] = u + r * (a[0] - u),
	  t[1] = e + r * (a[1] - e),
	  t[2] = o + r * (a[2] - o),
	  t[3] = i + r * (a[3] - i),
	  t
	}
	function dt(t, n) {
	  return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
	}
	function xt(t, a) {
	  var r = t[0],
	  u = t[1],
	  e = t[2],
	  o = t[3],
	  i = a[0],
	  c = a[1],
	  h = a[2],
	  s = a[3];
	  return Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) && Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
	}
	var pt = ot,
	yt = it,
	qt = ct,
	gt = st,
	At = Mt,
	wt = ft,
	Rt = lt,
	zt = function () {
	  var t = tt();
	  return function (n, a, r, u, e, o) {
		var i,
		c;
		for (a || (a = 4), r || (r = 0), c = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < c; i += a) t[0] = n[i],
		t[1] = n[i + 1],
		t[2] = n[i + 2],
		t[3] = n[i + 3],
		e(t, t, o),
		n[i] = t[0],
		n[i + 1] = t[1],
		n[i + 2] = t[2],
		n[i + 3] = t[3];
		return n
	  }
	}(),
	Pt = Object.freeze({
	  create: tt,
	  clone: nt,
	  fromValues: at,
	  copy: rt,
	  set: ut,
	  add: et,
	  subtract: ot,
	  multiply: it,
	  divide: ct,
	  ceil: function (t, n) {
		return t[0] = Math.ceil(n[0]),
		t[1] = Math.ceil(n[1]),
		t[2] = Math.ceil(n[2]),
		t[3] = Math.ceil(n[3]),
		t
	  },
	  floor: function (t, n) {
		return t[0] = Math.floor(n[0]),
		t[1] = Math.floor(n[1]),
		t[2] = Math.floor(n[2]),
		t[3] = Math.floor(n[3]),
		t
	  },
	  min: function (t, n, a) {
		return t[0] = Math.min(n[0], a[0]),
		t[1] = Math.min(n[1], a[1]),
		t[2] = Math.min(n[2], a[2]),
		t[3] = Math.min(n[3], a[3]),
		t
	  },
	  max: function (t, n, a) {
		return t[0] = Math.max(n[0], a[0]),
		t[1] = Math.max(n[1], a[1]),
		t[2] = Math.max(n[2], a[2]),
		t[3] = Math.max(n[3], a[3]),
		t
	  },
	  round: function (t, n) {
		return t[0] = Math.round(n[0]),
		t[1] = Math.round(n[1]),
		t[2] = Math.round(n[2]),
		t[3] = Math.round(n[3]),
		t
	  },
	  scale: ht,
	  scaleAndAdd: function (t, n, a, r) {
		return t[0] = n[0] + a[0] * r,
		t[1] = n[1] + a[1] * r,
		t[2] = n[2] + a[2] * r,
		t[3] = n[3] + a[3] * r,
		t
	  },
	  distance: st,
	  squaredDistance: Mt,
	  length: ft,
	  squaredLength: lt,
	  negate: function (t, n) {
		return t[0] = - n[0],
		t[1] = - n[1],
		t[2] = - n[2],
		t[3] = - n[3],
		t
	  },
	  inverse: function (t, n) {
		return t[0] = 1 / n[0],
		t[1] = 1 / n[1],
		t[2] = 1 / n[2],
		t[3] = 1 / n[3],
		t
	  },
	  normalize: vt,
	  dot: bt,
	  cross: function (t, n, a, r) {
		var u = a[0] * r[1] - a[1] * r[0],
		e = a[0] * r[2] - a[2] * r[0],
		o = a[0] * r[3] - a[3] * r[0],
		i = a[1] * r[2] - a[2] * r[1],
		c = a[1] * r[3] - a[3] * r[1],
		h = a[2] * r[3] - a[3] * r[2],
		s = n[0],
		M = n[1],
		f = n[2],
		l = n[3];
		return t[0] = M * h - f * c + l * i,
		t[1] = - s * h + f * o - l * e,
		t[2] = s * c - M * o + l * u,
		t[3] = - s * i + M * e - f * u,
		t
	  },
	  lerp: mt,
	  random: function (t, n) {
		var a,
		u,
		e,
		o,
		i,
		c;
		n = n || 1;
		do {
		  i = (a = 2 * r() - 1) * a + (u = 2 * r() - 1) * u
		} while (i >= 1);
		do {
		  c = (e = 2 * r() - 1) * e + (o = 2 * r() - 1) * o
		} while (c >= 1);
		var h = Math.sqrt((1 - i) / c);
		return t[0] = n * a,
		t[1] = n * u,
		t[2] = n * e * h,
		t[3] = n * o * h,
		t
	  },
	  transformMat4: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2],
		o = n[3];
		return t[0] = a[0] * r + a[4] * u + a[8] * e + a[12] * o,
		t[1] = a[1] * r + a[5] * u + a[9] * e + a[13] * o,
		t[2] = a[2] * r + a[6] * u + a[10] * e + a[14] * o,
		t[3] = a[3] * r + a[7] * u + a[11] * e + a[15] * o,
		t
	  },
	  transformQuat: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2],
		o = a[0],
		i = a[1],
		c = a[2],
		h = a[3],
		s = h * r + i * e - c * u,
		M = h * u + c * r - o * e,
		f = h * e + o * u - i * r,
		l = - o * r - i * u - c * e;
		return t[0] = s * h + l * - o + M * - c - f * - i,
		t[1] = M * h + l * - i + f * - o - s * - c,
		t[2] = f * h + l * - c + s * - i - M * - o,
		t[3] = n[3],
		t
	  },
	  zero: function (t) {
		return t[0] = 0,
		t[1] = 0,
		t[2] = 0,
		t[3] = 0,
		t
	  },
	  str: function (t) {
		return 'vec4(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')'
	  },
	  exactEquals: dt,
	  equals: xt,
	  sub: pt,
	  mul: yt,
	  div: qt,
	  dist: gt,
	  sqrDist: At,
	  len: wt,
	  sqrLen: Rt,
	  forEach: zt
	});
	function jt() {
	  var t = new a(4);
	  return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0),
	  t[3] = 1,
	  t
	}
	function It(t, n, a) {
	  a *= 0.5;
	  var r = Math.sin(a);
	  return t[0] = r * n[0],
	  t[1] = r * n[1],
	  t[2] = r * n[2],
	  t[3] = Math.cos(a),
	  t
	}
	function St(t, n, a) {
	  var r = n[0],
	  u = n[1],
	  e = n[2],
	  o = n[3],
	  i = a[0],
	  c = a[1],
	  h = a[2],
	  s = a[3];
	  return t[0] = r * s + o * i + u * h - e * c,
	  t[1] = u * s + o * c + e * i - r * h,
	  t[2] = e * s + o * h + r * c - u * i,
	  t[3] = o * s - r * i - u * c - e * h,
	  t
	}
	function Et(t, n, a) {
	  a *= 0.5;
	  var r = n[0],
	  u = n[1],
	  e = n[2],
	  o = n[3],
	  i = Math.sin(a),
	  c = Math.cos(a);
	  return t[0] = r * c + o * i,
	  t[1] = u * c + e * i,
	  t[2] = e * c - u * i,
	  t[3] = o * c - r * i,
	  t
	}
	function Ot(t, n, a) {
	  a *= 0.5;
	  var r = n[0],
	  u = n[1],
	  e = n[2],
	  o = n[3],
	  i = Math.sin(a),
	  c = Math.cos(a);
	  return t[0] = r * c - e * i,
	  t[1] = u * c + o * i,
	  t[2] = e * c + r * i,
	  t[3] = o * c - u * i,
	  t
	}
	function Tt(t, n, a) {
	  a *= 0.5;
	  var r = n[0],
	  u = n[1],
	  e = n[2],
	  o = n[3],
	  i = Math.sin(a),
	  c = Math.cos(a);
	  return t[0] = r * c + u * i,
	  t[1] = u * c - r * i,
	  t[2] = e * c + o * i,
	  t[3] = o * c - e * i,
	  t
	}
	function Dt(t, n) {
	  var a = n[0],
	  r = n[1],
	  u = n[2],
	  e = n[3],
	  o = Math.sqrt(a * a + r * r + u * u),
	  i = Math.exp(e),
	  c = o > 0 ? i * Math.sin(o) / o : 0;
	  return t[0] = a * c,
	  t[1] = r * c,
	  t[2] = u * c,
	  t[3] = i * Math.cos(o),
	  t
	}
	function Ft(t, n) {
	  var a = n[0],
	  r = n[1],
	  u = n[2],
	  e = n[3],
	  o = Math.sqrt(a * a + r * r + u * u),
	  i = o > 0 ? Math.atan2(o, e) / o : 0;
	  return t[0] = a * i,
	  t[1] = r * i,
	  t[2] = u * i,
	  t[3] = 0.5 * Math.log(a * a + r * r + u * u + e * e),
	  t
	}
	function Lt(t, a, r, u) {
	  var e,
	  o,
	  i,
	  c,
	  h,
	  s = a[0],
	  M = a[1],
	  f = a[2],
	  l = a[3],
	  v = r[0],
	  b = r[1],
	  m = r[2],
	  d = r[3];
	  return (o = s * v + M * b + f * m + l * d) < 0 && (o = - o, v = - v, b = - b, m = - m, d = - d),
	  1 - o > n ? (e = Math.acos(o), i = Math.sin(e), c = Math.sin((1 - u) * e) / i, h = Math.sin(u * e) / i) : (c = 1 - u, h = u),
	  t[0] = c * s + h * v,
	  t[1] = c * M + h * b,
	  t[2] = c * f + h * m,
	  t[3] = c * l + h * d,
	  t
	}
	function Vt(t, n) {
	  var a,
	  r = n[0] + n[4] + n[8];
	  if (r > 0) a = Math.sqrt(r + 1),
	  t[3] = 0.5 * a,
	  a = 0.5 / a,
	  t[0] = (n[5] - n[7]) * a,
	  t[1] = (n[6] - n[2]) * a,
	  t[2] = (n[1] - n[3]) * a;
	   else {
		var u = 0;
		n[4] > n[0] && (u = 1),
		n[8] > n[3 * u + u] && (u = 2);
		var e = (u + 1) % 3,
		o = (u + 2) % 3;
		a = Math.sqrt(n[3 * u + u] - n[3 * e + e] - n[3 * o + o] + 1),
		t[u] = 0.5 * a,
		a = 0.5 / a,
		t[3] = (n[3 * e + o] - n[3 * o + e]) * a,
		t[e] = (n[3 * e + u] + n[3 * u + e]) * a,
		t[o] = (n[3 * o + u] + n[3 * u + o]) * a
	  }
	  return t
	}
	var Qt,
	Yt,
	Xt,
	Zt,
	_t,
	Bt,
	Nt = nt,
	kt = at,
	Ut = rt,
	Wt = ut,
	Ct = et,
	Gt = St,
	Ht = ht,
	Jt = bt,
	Kt = mt,
	$t = ft,
	tn = $t,
	nn = lt,
	an = nn,
	rn = vt,
	un = dt,
	en = xt,
	on = (Qt = O(), Yt = D(1, 0, 0), Xt = D(0, 1, 0), function (t, n, a) {
	  var r = _(n, a);
	  return r < - 0.999999 ? (B(Qt, Yt, n), H(Qt) < 0.000001 && B(Qt, Xt, n), Z(Qt, Qt), It(t, Qt, Math.PI), t) : r > 0.999999 ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (B(Qt, n, a), t[0] = Qt[0], t[1] = Qt[1], t[2] = Qt[2], t[3] = 1 + r, rn(t, t))
	}),
	cn = (Zt = jt(), _t = jt(), function (t, n, a, r, u, e) {
	  return Lt(Zt, n, u, e),
	  Lt(_t, a, r, e),
	  Lt(t, Zt, _t, 2 * e * (1 - e)),
	  t
	}),
	hn = (Bt = m(), function (t, n, a, r) {
	  return Bt[0] = a[0],
	  Bt[3] = a[1],
	  Bt[6] = a[2],
	  Bt[1] = r[0],
	  Bt[4] = r[1],
	  Bt[7] = r[2],
	  Bt[2] = - n[0],
	  Bt[5] = - n[1],
	  Bt[8] = - n[2],
	  rn(t, Vt(t, Bt))
	}),
	sn = Object.freeze({
	  create: jt,
	  identity: function (t) {
		return t[0] = 0,
		t[1] = 0,
		t[2] = 0,
		t[3] = 1,
		t
	  },
	  setAxisAngle: It,
	  getAxisAngle: function (t, a) {
		var r = 2 * Math.acos(a[3]),
		u = Math.sin(r / 2);
		return u > n ? (t[0] = a[0] / u, t[1] = a[1] / u, t[2] = a[2] / u) : (t[0] = 1, t[1] = 0, t[2] = 0),
		r
	  },
	  getAngle: function (t, n) {
		var a = Jt(t, n);
		return Math.acos(2 * a * a - 1)
	  },
	  multiply: St,
	  rotateX: Et,
	  rotateY: Ot,
	  rotateZ: Tt,
	  calculateW: function (t, n) {
		var a = n[0],
		r = n[1],
		u = n[2];
		return t[0] = a,
		t[1] = r,
		t[2] = u,
		t[3] = Math.sqrt(Math.abs(1 - a * a - r * r - u * u)),
		t
	  },
	  exp: Dt,
	  ln: Ft,
	  pow: function (t, n, a) {
		return Ft(t, n),
		Ht(t, t, a),
		Dt(t, t),
		t
	  },
	  slerp: Lt,
	  random: function (t) {
		var n = r(),
		a = r(),
		u = r(),
		e = Math.sqrt(1 - n),
		o = Math.sqrt(n);
		return t[0] = e * Math.sin(2 * Math.PI * a),
		t[1] = e * Math.cos(2 * Math.PI * a),
		t[2] = o * Math.sin(2 * Math.PI * u),
		t[3] = o * Math.cos(2 * Math.PI * u),
		t
	  },
	  invert: function (t, n) {
		var a = n[0],
		r = n[1],
		u = n[2],
		e = n[3],
		o = a * a + r * r + u * u + e * e,
		i = o ? 1 / o : 0;
		return t[0] = - a * i,
		t[1] = - r * i,
		t[2] = - u * i,
		t[3] = e * i,
		t
	  },
	  conjugate: function (t, n) {
		return t[0] = - n[0],
		t[1] = - n[1],
		t[2] = - n[2],
		t[3] = n[3],
		t
	  },
	  fromMat3: Vt,
	  fromEuler: function (t, n, a, r) {
		var u = 0.5 * Math.PI / 180;
		n *= u,
		a *= u,
		r *= u;
		var e = Math.sin(n),
		o = Math.cos(n),
		i = Math.sin(a),
		c = Math.cos(a),
		h = Math.sin(r),
		s = Math.cos(r);
		return t[0] = e * c * s - o * i * h,
		t[1] = o * i * s + e * c * h,
		t[2] = o * c * h - e * i * s,
		t[3] = o * c * s + e * i * h,
		t
	  },
	  str: function (t) {
		return 'quat(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')'
	  },
	  clone: Nt,
	  fromValues: kt,
	  copy: Ut,
	  set: Wt,
	  add: Ct,
	  mul: Gt,
	  scale: Ht,
	  dot: Jt,
	  lerp: Kt,
	  length: $t,
	  len: tn,
	  squaredLength: nn,
	  sqrLen: an,
	  normalize: rn,
	  exactEquals: un,
	  equals: en,
	  rotationTo: on,
	  sqlerp: cn,
	  setAxes: hn
	});
	function Mn(t, n, a) {
	  var r = 0.5 * a[0],
	  u = 0.5 * a[1],
	  e = 0.5 * a[2],
	  o = n[0],
	  i = n[1],
	  c = n[2],
	  h = n[3];
	  return t[0] = o,
	  t[1] = i,
	  t[2] = c,
	  t[3] = h,
	  t[4] = r * h + u * c - e * i,
	  t[5] = u * h + e * o - r * c,
	  t[6] = e * h + r * i - u * o,
	  t[7] = - r * o - u * i - e * c,
	  t
	}
	function fn(t, n) {
	  return t[0] = n[0],
	  t[1] = n[1],
	  t[2] = n[2],
	  t[3] = n[3],
	  t[4] = n[4],
	  t[5] = n[5],
	  t[6] = n[6],
	  t[7] = n[7],
	  t
	}
	var ln = Ut;
	var vn = Ut;
	function bn(t, n, a) {
	  var r = n[0],
	  u = n[1],
	  e = n[2],
	  o = n[3],
	  i = a[4],
	  c = a[5],
	  h = a[6],
	  s = a[7],
	  M = n[4],
	  f = n[5],
	  l = n[6],
	  v = n[7],
	  b = a[0],
	  m = a[1],
	  d = a[2],
	  x = a[3];
	  return t[0] = r * x + o * b + u * d - e * m,
	  t[1] = u * x + o * m + e * b - r * d,
	  t[2] = e * x + o * d + r * m - u * b,
	  t[3] = o * x - r * b - u * m - e * d,
	  t[4] = r * s + o * i + u * h - e * c + M * x + v * b + f * d - l * m,
	  t[5] = u * s + o * c + e * i - r * h + f * x + v * m + l * b - M * d,
	  t[6] = e * s + o * h + r * c - u * i + l * x + v * d + M * m - f * b,
	  t[7] = o * s - r * i - u * c - e * h + v * x - M * b - f * m - l * d,
	  t
	}
	var mn = bn;
	var dn = Jt;
	var xn = $t,
	pn = xn,
	yn = nn,
	qn = yn;
	var gn = Object.freeze({
	  create: function () {
		var t = new a(8);
		return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0),
		t[3] = 1,
		t
	  },
	  clone: function (t) {
		var n = new a(8);
		return n[0] = t[0],
		n[1] = t[1],
		n[2] = t[2],
		n[3] = t[3],
		n[4] = t[4],
		n[5] = t[5],
		n[6] = t[6],
		n[7] = t[7],
		n
	  },
	  fromValues: function (t, n, r, u, e, o, i, c) {
		var h = new a(8);
		return h[0] = t,
		h[1] = n,
		h[2] = r,
		h[3] = u,
		h[4] = e,
		h[5] = o,
		h[6] = i,
		h[7] = c,
		h
	  },
	  fromRotationTranslationValues: function (t, n, r, u, e, o, i) {
		var c = new a(8);
		c[0] = t,
		c[1] = n,
		c[2] = r,
		c[3] = u;
		var h = 0.5 * e,
		s = 0.5 * o,
		M = 0.5 * i;
		return c[4] = h * u + s * r - M * n,
		c[5] = s * u + M * t - h * r,
		c[6] = M * u + h * n - s * t,
		c[7] = - h * t - s * n - M * r,
		c
	  },
	  fromRotationTranslation: Mn,
	  fromTranslation: function (t, n) {
		return t[0] = 0,
		t[1] = 0,
		t[2] = 0,
		t[3] = 1,
		t[4] = 0.5 * n[0],
		t[5] = 0.5 * n[1],
		t[6] = 0.5 * n[2],
		t[7] = 0,
		t
	  },
	  fromRotation: function (t, n) {
		return t[0] = n[0],
		t[1] = n[1],
		t[2] = n[2],
		t[3] = n[3],
		t[4] = 0,
		t[5] = 0,
		t[6] = 0,
		t[7] = 0,
		t
	  },
	  fromMat4: function (t, n) {
		var r = jt();
		P(r, n);
		var u = new a(3);
		return R(u, n),
		Mn(t, r, u),
		t
	  },
	  copy: fn,
	  identity: function (t) {
		return t[0] = 0,
		t[1] = 0,
		t[2] = 0,
		t[3] = 1,
		t[4] = 0,
		t[5] = 0,
		t[6] = 0,
		t[7] = 0,
		t
	  },
	  set: function (t, n, a, r, u, e, o, i, c) {
		return t[0] = n,
		t[1] = a,
		t[2] = r,
		t[3] = u,
		t[4] = e,
		t[5] = o,
		t[6] = i,
		t[7] = c,
		t
	  },
	  getReal: ln,
	  getDual: function (t, n) {
		return t[0] = n[4],
		t[1] = n[5],
		t[2] = n[6],
		t[3] = n[7],
		t
	  },
	  setReal: vn,
	  setDual: function (t, n) {
		return t[4] = n[0],
		t[5] = n[1],
		t[6] = n[2],
		t[7] = n[3],
		t
	  },
	  getTranslation: function (t, n) {
		var a = n[4],
		r = n[5],
		u = n[6],
		e = n[7],
		o = - n[0],
		i = - n[1],
		c = - n[2],
		h = n[3];
		return t[0] = 2 * (a * h + e * o + r * c - u * i),
		t[1] = 2 * (r * h + e * i + u * o - a * c),
		t[2] = 2 * (u * h + e * c + a * i - r * o),
		t
	  },
	  translate: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2],
		o = n[3],
		i = 0.5 * a[0],
		c = 0.5 * a[1],
		h = 0.5 * a[2],
		s = n[4],
		M = n[5],
		f = n[6],
		l = n[7];
		return t[0] = r,
		t[1] = u,
		t[2] = e,
		t[3] = o,
		t[4] = o * i + u * h - e * c + s,
		t[5] = o * c + e * i - r * h + M,
		t[6] = o * h + r * c - u * i + f,
		t[7] = - r * i - u * c - e * h + l,
		t
	  },
	  rotateX: function (t, n, a) {
		var r = - n[0],
		u = - n[1],
		e = - n[2],
		o = n[3],
		i = n[4],
		c = n[5],
		h = n[6],
		s = n[7],
		M = i * o + s * r + c * e - h * u,
		f = c * o + s * u + h * r - i * e,
		l = h * o + s * e + i * u - c * r,
		v = s * o - i * r - c * u - h * e;
		return Et(t, n, a),
		r = t[0],
		u = t[1],
		e = t[2],
		o = t[3],
		t[4] = M * o + v * r + f * e - l * u,
		t[5] = f * o + v * u + l * r - M * e,
		t[6] = l * o + v * e + M * u - f * r,
		t[7] = v * o - M * r - f * u - l * e,
		t
	  },
	  rotateY: function (t, n, a) {
		var r = - n[0],
		u = - n[1],
		e = - n[2],
		o = n[3],
		i = n[4],
		c = n[5],
		h = n[6],
		s = n[7],
		M = i * o + s * r + c * e - h * u,
		f = c * o + s * u + h * r - i * e,
		l = h * o + s * e + i * u - c * r,
		v = s * o - i * r - c * u - h * e;
		return Ot(t, n, a),
		r = t[0],
		u = t[1],
		e = t[2],
		o = t[3],
		t[4] = M * o + v * r + f * e - l * u,
		t[5] = f * o + v * u + l * r - M * e,
		t[6] = l * o + v * e + M * u - f * r,
		t[7] = v * o - M * r - f * u - l * e,
		t
	  },
	  rotateZ: function (t, n, a) {
		var r = - n[0],
		u = - n[1],
		e = - n[2],
		o = n[3],
		i = n[4],
		c = n[5],
		h = n[6],
		s = n[7],
		M = i * o + s * r + c * e - h * u,
		f = c * o + s * u + h * r - i * e,
		l = h * o + s * e + i * u - c * r,
		v = s * o - i * r - c * u - h * e;
		return Tt(t, n, a),
		r = t[0],
		u = t[1],
		e = t[2],
		o = t[3],
		t[4] = M * o + v * r + f * e - l * u,
		t[5] = f * o + v * u + l * r - M * e,
		t[6] = l * o + v * e + M * u - f * r,
		t[7] = v * o - M * r - f * u - l * e,
		t
	  },
	  rotateByQuatAppend: function (t, n, a) {
		var r = a[0],
		u = a[1],
		e = a[2],
		o = a[3],
		i = n[0],
		c = n[1],
		h = n[2],
		s = n[3];
		return t[0] = i * o + s * r + c * e - h * u,
		t[1] = c * o + s * u + h * r - i * e,
		t[2] = h * o + s * e + i * u - c * r,
		t[3] = s * o - i * r - c * u - h * e,
		i = n[4],
		c = n[5],
		h = n[6],
		s = n[7],
		t[4] = i * o + s * r + c * e - h * u,
		t[5] = c * o + s * u + h * r - i * e,
		t[6] = h * o + s * e + i * u - c * r,
		t[7] = s * o - i * r - c * u - h * e,
		t
	  },
	  rotateByQuatPrepend: function (t, n, a) {
		var r = n[0],
		u = n[1],
		e = n[2],
		o = n[3],
		i = a[0],
		c = a[1],
		h = a[2],
		s = a[3];
		return t[0] = r * s + o * i + u * h - e * c,
		t[1] = u * s + o * c + e * i - r * h,
		t[2] = e * s + o * h + r * c - u * i,
		t[3] = o * s - r * i - u * c - e * h,
		i = a[4],
		c = a[5],
		h = a[6],
		s = a[7],
		t[4] = r * s + o * i + u * h - e * c,
		t[5] = u * s + o * c + e * i - r * h,
		t[6] = e * s + o * h + r * c - u * i,
		t[7] = o * s - r * i - u * c - e * h,
		t
	  },
	  rotateAroundAxis: function (t, a, r, u) {
		if (Math.abs(u) < n) return fn(t, a);
		var e = Math.hypot(r[0], r[1], r[2]);
		u *= 0.5;
		var o = Math.sin(u),
		i = o * r[0] / e,
		c = o * r[1] / e,
		h = o * r[2] / e,
		s = Math.cos(u),
		M = a[0],
		f = a[1],
		l = a[2],
		v = a[3];
		t[0] = M * s + v * i + f * h - l * c,
		t[1] = f * s + v * c + l * i - M * h,
		t[2] = l * s + v * h + M * c - f * i,
		t[3] = v * s - M * i - f * c - l * h;
		var b = a[4],
		m = a[5],
		d = a[6],
		x = a[7];
		return t[4] = b * s + x * i + m * h - d * c,
		t[5] = m * s + x * c + d * i - b * h,
		t[6] = d * s + x * h + b * c - m * i,
		t[7] = x * s - b * i - m * c - d * h,
		t
	  },
	  add: function (t, n, a) {
		return t[0] = n[0] + a[0],
		t[1] = n[1] + a[1],
		t[2] = n[2] + a[2],
		t[3] = n[3] + a[3],
		t[4] = n[4] + a[4],
		t[5] = n[5] + a[5],
		t[6] = n[6] + a[6],
		t[7] = n[7] + a[7],
		t
	  },
	  multiply: bn,
	  mul: mn,
	  scale: function (t, n, a) {
		return t[0] = n[0] * a,
		t[1] = n[1] * a,
		t[2] = n[2] * a,
		t[3] = n[3] * a,
		t[4] = n[4] * a,
		t[5] = n[5] * a,
		t[6] = n[6] * a,
		t[7] = n[7] * a,
		t
	  },
	  dot: dn,
	  lerp: function (t, n, a, r) {
		var u = 1 - r;
		return dn(n, a) < 0 && (r = - r),
		t[0] = n[0] * u + a[0] * r,
		t[1] = n[1] * u + a[1] * r,
		t[2] = n[2] * u + a[2] * r,
		t[3] = n[3] * u + a[3] * r,
		t[4] = n[4] * u + a[4] * r,
		t[5] = n[5] * u + a[5] * r,
		t[6] = n[6] * u + a[6] * r,
		t[7] = n[7] * u + a[7] * r,
		t
	  },
	  invert: function (t, n) {
		var a = yn(n);
		return t[0] = - n[0] / a,
		t[1] = - n[1] / a,
		t[2] = - n[2] / a,
		t[3] = n[3] / a,
		t[4] = - n[4] / a,
		t[5] = - n[5] / a,
		t[6] = - n[6] / a,
		t[7] = n[7] / a,
		t
	  },
	  conjugate: function (t, n) {
		return t[0] = - n[0],
		t[1] = - n[1],
		t[2] = - n[2],
		t[3] = n[3],
		t[4] = - n[4],
		t[5] = - n[5],
		t[6] = - n[6],
		t[7] = n[7],
		t
	  },
	  length: xn,
	  len: pn,
	  squaredLength: yn,
	  sqrLen: qn,
	  normalize: function (t, n) {
		var a = yn(n);
		if (a > 0) {
		  a = Math.sqrt(a);
		  var r = n[0] / a,
		  u = n[1] / a,
		  e = n[2] / a,
		  o = n[3] / a,
		  i = n[4],
		  c = n[5],
		  h = n[6],
		  s = n[7],
		  M = r * i + u * c + e * h + o * s;
		  t[0] = r,
		  t[1] = u,
		  t[2] = e,
		  t[3] = o,
		  t[4] = (i - r * M) / a,
		  t[5] = (c - u * M) / a,
		  t[6] = (h - e * M) / a,
		  t[7] = (s - o * M) / a
		}
		return t
	  },
	  str: function (t) {
		return 'quat2(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + ', ' + t[6] + ', ' + t[7] + ')'
	  },
	  exactEquals: function (t, n) {
		return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7]
	  },
	  equals: function (t, a) {
		var r = t[0],
		u = t[1],
		e = t[2],
		o = t[3],
		i = t[4],
		c = t[5],
		h = t[6],
		s = t[7],
		M = a[0],
		f = a[1],
		l = a[2],
		v = a[3],
		b = a[4],
		m = a[5],
		d = a[6],
		x = a[7];
		return Math.abs(r - M) <= n * Math.max(1, Math.abs(r), Math.abs(M)) && Math.abs(u - f) <= n * Math.max(1, Math.abs(u), Math.abs(f)) && Math.abs(e - l) <= n * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(o - v) <= n * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(i - b) <= n * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(c - m) <= n * Math.max(1, Math.abs(c), Math.abs(m)) && Math.abs(h - d) <= n * Math.max(1, Math.abs(h), Math.abs(d)) && Math.abs(s - x) <= n * Math.max(1, Math.abs(s), Math.abs(x))
	  }
	});
	function An() {
	  var t = new a(2);
	  return a != Float32Array && (t[0] = 0, t[1] = 0),
	  t
	}
	function wn(t, n, a) {
	  return t[0] = n[0] - a[0],
	  t[1] = n[1] - a[1],
	  t
	}
	function Rn(t, n, a) {
	  return t[0] = n[0] * a[0],
	  t[1] = n[1] * a[1],
	  t
	}
	function zn(t, n, a) {
	  return t[0] = n[0] / a[0],
	  t[1] = n[1] / a[1],
	  t
	}
	function Pn(t, n) {
	  var a = n[0] - t[0],
	  r = n[1] - t[1];
	  return Math.hypot(a, r)
	}
	function jn(t, n) {
	  var a = n[0] - t[0],
	  r = n[1] - t[1];
	  return a * a + r * r
	}
	function In(t) {
	  var n = t[0],
	  a = t[1];
	  return Math.hypot(n, a)
	}
	function Sn(t) {
	  var n = t[0],
	  a = t[1];
	  return n * n + a * a
	}
	var En = In,
	On = wn,
	Tn = Rn,
	Dn = zn,
	Fn = Pn,
	Ln = jn,
	Vn = Sn,
	Qn = function () {
	  var t = An();
	  return function (n, a, r, u, e, o) {
		var i,
		c;
		for (a || (a = 2), r || (r = 0), c = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < c; i += a) t[0] = n[i],
		t[1] = n[i + 1],
		e(t, t, o),
		n[i] = t[0],
		n[i + 1] = t[1];
		return n
	  }
	}(),
	Yn = Object.freeze({
	  create: An,
	  clone: function (t) {
		var n = new a(2);
		return n[0] = t[0],
		n[1] = t[1],
		n
	  },
	  fromValues: function (t, n) {
		var r = new a(2);
		return r[0] = t,
		r[1] = n,
		r
	  },
	  copy: function (t, n) {
		return t[0] = n[0],
		t[1] = n[1],
		t
	  },
	  set: function (t, n, a) {
		return t[0] = n,
		t[1] = a,
		t
	  },
	  add: function (t, n, a) {
		return t[0] = n[0] + a[0],
		t[1] = n[1] + a[1],
		t
	  },
	  subtract: wn,
	  multiply: Rn,
	  divide: zn,
	  ceil: function (t, n) {
		return t[0] = Math.ceil(n[0]),
		t[1] = Math.ceil(n[1]),
		t
	  },
	  floor: function (t, n) {
		return t[0] = Math.floor(n[0]),
		t[1] = Math.floor(n[1]),
		t
	  },
	  min: function (t, n, a) {
		return t[0] = Math.min(n[0], a[0]),
		t[1] = Math.min(n[1], a[1]),
		t
	  },
	  max: function (t, n, a) {
		return t[0] = Math.max(n[0], a[0]),
		t[1] = Math.max(n[1], a[1]),
		t
	  },
	  round: function (t, n) {
		return t[0] = Math.round(n[0]),
		t[1] = Math.round(n[1]),
		t
	  },
	  scale: function (t, n, a) {
		return t[0] = n[0] * a,
		t[1] = n[1] * a,
		t
	  },
	  scaleAndAdd: function (t, n, a, r) {
		return t[0] = n[0] + a[0] * r,
		t[1] = n[1] + a[1] * r,
		t
	  },
	  distance: Pn,
	  squaredDistance: jn,
	  length: In,
	  squaredLength: Sn,
	  negate: function (t, n) {
		return t[0] = - n[0],
		t[1] = - n[1],
		t
	  },
	  inverse: function (t, n) {
		return t[0] = 1 / n[0],
		t[1] = 1 / n[1],
		t
	  },
	  normalize: function (t, n) {
		var a = n[0],
		r = n[1],
		u = a * a + r * r;
		return u > 0 && (u = 1 / Math.sqrt(u)),
		t[0] = n[0] * u,
		t[1] = n[1] * u,
		t
	  },
	  dot: function (t, n) {
		return t[0] * n[0] + t[1] * n[1]
	  },
	  cross: function (t, n, a) {
		var r = n[0] * a[1] - n[1] * a[0];
		return t[0] = t[1] = 0,
		t[2] = r,
		t
	  },
	  lerp: function (t, n, a, r) {
		var u = n[0],
		e = n[1];
		return t[0] = u + r * (a[0] - u),
		t[1] = e + r * (a[1] - e),
		t
	  },
	  random: function (t, n) {
		n = n || 1;
		var a = 2 * r() * Math.PI;
		return t[0] = Math.cos(a) * n,
		t[1] = Math.sin(a) * n,
		t
	  },
	  transformMat2: function (t, n, a) {
		var r = n[0],
		u = n[1];
		return t[0] = a[0] * r + a[2] * u,
		t[1] = a[1] * r + a[3] * u,
		t
	  },
	  transformMat2d: function (t, n, a) {
		var r = n[0],
		u = n[1];
		return t[0] = a[0] * r + a[2] * u + a[4],
		t[1] = a[1] * r + a[3] * u + a[5],
		t
	  },
	  transformMat3: function (t, n, a) {
		var r = n[0],
		u = n[1];
		return t[0] = a[0] * r + a[3] * u + a[6],
		t[1] = a[1] * r + a[4] * u + a[7],
		t
	  },
	  transformMat4: function (t, n, a) {
		var r = n[0],
		u = n[1];
		return t[0] = a[0] * r + a[4] * u + a[12],
		t[1] = a[1] * r + a[5] * u + a[13],
		t
	  },
	  rotate: function (t, n, a, r) {
		var u = n[0] - a[0],
		e = n[1] - a[1],
		o = Math.sin(r),
		i = Math.cos(r);
		return t[0] = u * i - e * o + a[0],
		t[1] = u * o + e * i + a[1],
		t
	  },
	  angle: function (t, n) {
		var a = t[0],
		r = t[1],
		u = n[0],
		e = n[1],
		o = a * a + r * r;
		o > 0 && (o = 1 / Math.sqrt(o));
		var i = u * u + e * e;
		i > 0 && (i = 1 / Math.sqrt(i));
		var c = (a * u + r * e) * o * i;
		return c > 1 ? 0 : c < - 1 ? Math.PI : Math.acos(c)
	  },
	  zero: function (t) {
		return t[0] = 0,
		t[1] = 0,
		t
	  },
	  str: function (t) {
		return 'vec2(' + t[0] + ', ' + t[1] + ')'
	  },
	  exactEquals: function (t, n) {
		return t[0] === n[0] && t[1] === n[1]
	  },
	  equals: function (t, a) {
		var r = t[0],
		u = t[1],
		e = a[0],
		o = a[1];
		return Math.abs(r - e) <= n * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(u - o) <= n * Math.max(1, Math.abs(u), Math.abs(o))
	  },
	  len: En,
	  sub: On,
	  mul: Tn,
	  div: Dn,
	  dist: Fn,
	  sqrDist: Ln,
	  sqrLen: Vn,
	  forEach: Qn
	});
	t.glMatrix = e,
	t.mat2 = s,
	t.mat2d = b,
	t.mat3 = q,
	t.mat4 = E,
	t.quat = sn,
	t.quat2 = gn,
	t.vec2 = Yn,
	t.vec3 = $,
	t.vec4 = Pt,
	Object.defineProperty(t, '__esModule', {
	  value: !0
	})
  });
  // ["glMatrix", "mat2", "mat2d", "mat3", "mat4", "quat", "quat2", "vec2", "vec3", "vec4"]
  window.glMatrix = glMatrix;
  window.mat2 = glMatrix.mat2;
  window.mat2d = glMatrix.mat2d;
  window.mat3 = glMatrix.mat3;
  window.mat4 = glMatrix.mat4;
  window.quat = glMatrix.quat;
  window.quat2 = glMatrix.quat2;
  window.vec2 = glMatrix.vec2;
  window.vec3 = glMatrix.vec3;
  window.vec4 = glMatrix.vec4;
  CABLES.exportedPatches || (CABLES.exportedPatches = {
  }),
  CABLES.exportedPatches['J-mSeE'] = {
	settings: {
	  opExample: [
	  ],
	  licence: 'none',
	  isPublic: !1
	},
	ops: [
	  {
		opId: 'a466bc1f-06e9-4595-8849-bffb9fe22f99',
		objName: 'Ops.Sequence',
		id: '7646f0a2-aec7-4b9a-8985-feb60dbe8ae8',
		uiAttribs: {
		  subPatch: 0,
		  notWorkingMsg: null,
		  selected: !1
		},
		portsIn: [
		  {
			name: 'Clean up connections',
			value: 0
		  },
		  {
			name: 'exe',
			links: [
			  {
				portIn: 'exe',
				portOut: 'Trigger Out',
				objIn: '7646f0a2-aec7-4b9a-8985-feb60dbe8ae8',
				objOut: '0448e586-fa06-4561-8188-11002cdf9a7b'
			  }
			]
		  },
		  {
			name: 'exe 0',
			value: 0
		  },
		  {
			name: 'exe 1',
			value: 0
		  },
		  {
			name: 'exe 2',
			value: 0
		  },
		  {
			name: 'exe 3',
			value: 0
		  },
		  {
			name: 'exe 4',
			value: 0
		  },
		  {
			name: 'exe 5',
			value: 0
		  },
		  {
			name: 'exe 6',
			value: 0
		  },
		  {
			name: 'exe 7',
			value: 0
		  },
		  {
			name: 'exe 8',
			value: 0
		  },
		  {
			name: 'exe 9',
			value: 0
		  },
		  {
			name: 'exe 10',
			value: 0
		  },
		  {
			name: 'exe 11',
			value: 0
		  },
		  {
			name: 'exe 12',
			value: 0
		  },
		  {
			name: 'exe 13',
			value: 0
		  },
		  {
			name: 'exe 14',
			value: 0
		  }
		],
		portsOut: [
		  {
			name: 'trigger 0',
			value: 0
		  },
		  {
			name: 'trigger 1',
			value: 0
		  },
		  {
			name: 'trigger 2',
			value: 0
		  },
		  {
			name: 'trigger 3'
		  },
		  {
			name: 'trigger 4',
			value: 0
		  },
		  {
			name: 'trigger 5',
			value: 0
		  },
		  {
			name: 'trigger 6',
			value: 0
		  },
		  {
			name: 'trigger 7',
			value: 0
		  },
		  {
			name: 'trigger 8'
		  },
		  {
			name: 'trigger 9',
			value: 0
		  },
		  {
			name: 'trigger 10',
			value: 0
		  },
		  {
			name: 'trigger 11',
			value: 0
		  },
		  {
			name: 'trigger 12'
		  },
		  {
			name: 'trigger 13',
			value: 0
		  },
		  {
			name: 'trigger 14',
			value: 0
		  },
		  {
			name: 'trigger 15'
		  }
		]
	  },
	  {
		opId: '322d8c8d-851b-481d-9bee-ec1cf7d57a35',
		objName: 'Ops.Gl.MeshInstancer_v4',
		id: 'c8d15247-48cb-458e-94aa-8621eda8764d',
		uiAttribs: {
		  subPatch: 0,
		  notWorkingMsg: null,
		  selected: !1
		},
		portsIn: [
		  {
			name: 'exe',
			links: [
			  {
				portIn: 'exe',
				portOut: 'Trigger Out',
				objIn: 'c8d15247-48cb-458e-94aa-8621eda8764d',
				objOut: '3761ace7-4f3f-4a44-9962-0947f695b9e8'
			  }
			]
		  },
		  {
			name: 'geom',
			links: [
			  {
				portIn: 'geom',
				portOut: 'geometry',
				objIn: 'c8d15247-48cb-458e-94aa-8621eda8764d',
				objOut: '0e2743d3-153b-416a-864f-cd0530adddb8'
			  }
			]
		  },
		  {
			name: 'Scale',
			value: 1
		  },
		  {
			name: 'Limit Instances',
			value: !1
		  },
		  {
			name: 'Limit',
			value: 100
		  },
		  {
			name: 'positions',
			links: [
			  {
				portIn: 'positions',
				portOut: 'Array out',
				objIn: 'c8d15247-48cb-458e-94aa-8621eda8764d',
				objOut: '3357d320-4929-413d-90a5-cedc629ee990'
			  }
			]
		  },
		  {
			name: 'Scale Array',
			value: null
		  },
		  {
			name: 'Rotations',
			links: [
			  {
				portIn: 'Rotations',
				portOut: 'Array out',
				objIn: 'c8d15247-48cb-458e-94aa-8621eda8764d',
				objOut: 'db078415-b0f6-4683-8e4d-94073dff2d64'
			  }
			]
		  },
		  {
			name: 'Rotation Type index',
			value: 0
		  },
		  {
			name: 'Rotation Type',
			value: 'Euler'
		  },
		  {
			name: 'Material blend mode index',
			value: 0
		  },
		  {
			name: 'Material blend mode',
			value: 'Multiply'
		  },
		  {
			name: 'Colors',
			value: 0
		  }
		],
		portsOut: [
		  {
			name: 'Trigger Out',
			value: 0
		  },
		  {
			name: 'Num',
			value: 3
		  }
		]
	  },
	  {
		opId: 'cf3544e4-e392-432b-89fd-fcfb5c974388',
		objName: 'Ops.Trigger.TriggerOnce',
		id: 'f9284ca5-ea24-4ee1-9c56-eb5e6e08054e',
		uiAttribs: {
		  subPatch: 0,
		  notWorkingMsg: null,
		  selected: !1
		},
		portsIn: [
		  {
			name: 'Exec',
			links: [
			  {
				portIn: 'Exec',
				portOut: 'Trigger Out',
				objIn: 'f9284ca5-ea24-4ee1-9c56-eb5e6e08054e',
				objOut: '3761ace7-4f3f-4a44-9962-0947f695b9e8'
			  }
			]
		  },
		  {
			name: 'Reset',
			value: 0
		  }
		],
		portsOut: [
		  {
			name: 'Next'
		  },
		  {
			name: 'Was Triggered',
			value: !0
		  }
		]
	  },
	  {
		opId: '37b92ba4-cea5-42ae-bf28-a513ca28549c',
		objName: 'Ops.Gl.Meshes.Cube_v2',
		id: '0e2743d3-153b-416a-864f-cd0530adddb8',
		uiAttribs: {
		  subPatch: 0,
		  notWorkingMsg: null,
		  selected: !1
		},
		portsIn: [
		  {
			name: 'Render',
			links: [
			  {
				portIn: 'Render',
				portOut: 'Next',
				objIn: '0e2743d3-153b-416a-864f-cd0530adddb8',
				objOut: 'f9284ca5-ea24-4ee1-9c56-eb5e6e08054e'
			  }
			]
		  },
		  {
			name: 'Render Mesh',
			value: !0
		  },
		  {
			name: 'Width',
			value: 1
		  },
		  {
			name: 'Length',
			value: 1
		  },
		  {
			name: 'Height',
			value: 1
		  },
		  {
			name: 'Center',
			value: !0
		  },
		  {
			name: 'Mapping index',
			value: 0
		  },
		  {
			name: 'Mapping',
			value: 'Side'
		  },
		  {
			name: 'Bias',
			value: 0
		  },
		  {
			name: 'Flip X',
			value: !0
		  },
		  {
			name: 'Top',
			value: !0
		  },
		  {
			name: 'Bottom',
			value: !0
		  },
		  {
			name: 'Left',
			value: !0
		  },
		  {
			name: 'Right',
			value: !0
		  },
		  {
			name: 'Front',
			value: !0
		  },
		  {
			name: 'Back',
			value: !0
		  }
		],
		portsOut: [
		  {
			name: 'Next',
			value: 0
		  },
		  {
			name: 'geometry'
		  }
		]
	  },
	  {
		opId: 'ca9219d2-9f06-4516-9cf2-98e61f84d4bb',
		objName: 'Ops.Array.Array_v2',
		id: 'ad0dab62-ed4b-4449-9fe7-85bc59ecf4fd',
		uiAttribs: {
		  extendTitle: '1,2,3,4',
		  subPatch: 0,
		  notWorkingMsg: null,
		  selected: !1
		},
		portsIn: [
		  {
			name: 'Array length',
			links: [
			  {
				portIn: 'Array length',
				portOut: 'result',
				objIn: 'ad0dab62-ed4b-4449-9fe7-85bc59ecf4fd',
				objOut: '22f37fe4-25ed-459f-81c9-1be9b767dea4'
			  }
			]
		  },
		  {
			name: 'Mode select index',
			value: 0
		  },
		  {
			name: 'Mode select',
			value: '1,2,3,4'
		  },
		  {
			name: 'Default Value',
			value: 0
		  }
		],
		portsOut: [
		  {
			name: 'Array'
		  },
		  {
			name: 'Array length out',
			value: 3
		  }
		]
	  },
	  {
		opId: 'eaf4f7ce-08a3-4d1b-b9f4-ebc0b7b1cde1',
		objName: 'Ops.Gl.Matrix.OrbitControls',
		id: 'c5a4c18b-fc36-4c35-b0bd-33814a3b5a98',
		uiAttribs: {
		  subPatch: 0,
		  notWorkingMsg: null,
		  selected: !1
		},
		portsIn: [
		  {
			name: 'render',
			links: [
			  {
				portIn: 'render',
				portOut: 'trigger 0',
				objIn: 'c5a4c18b-fc36-4c35-b0bd-33814a3b5a98',
				objOut: '1a34db46-3bba-434e-8a92-82a855087283'
			  }
			]
		  },
		  {
			name: 'min distance',
			value: 0.05
		  },
		  {
			name: 'max distance',
			value: 99999
		  },
		  {
			name: 'min rot y',
			value: 0
		  },
		  {
			name: 'max rot y',
			value: 0
		  },
		  {
			name: 'initial radius',
			value: 9
		  },
		  {
			name: 'initial axis y',
			value: 0.7
		  },
		  {
			name: 'initial axis x',
			value: 0
		  },
		  {
			name: 'mul',
			value: 1
		  },
		  {
			name: 'Smoothness',
			value: 1
		  },
		  {
			name: 'Speed X',
			value: 1
		  },
		  {
			name: 'Speed Y',
			value: 1
		  },
		  {
			name: 'Active',
			value: !0
		  },
		  {
			name: 'Allow Panning',
			value: !0
		  },
		  {
			name: 'Allow Zooming',
			value: !0
		  },
		  {
			name: 'Allow Rotation',
			value: !0
		  },
		  {
			name: 'restricted',
			value: !0
		  },
		  {
			name: 'Pointerlock',
			value: !1
		  },
		  {
			name: 'Reset',
			value: 0
		  }
		],
		portsOut: [
		  {
			name: 'trigger'
		  },
		  {
			name: 'radius',
			value: 9
		  },
		  {
			name: 'Rot X',
			value: - 14.094761760218246
		  },
		  {
			name: 'Rot Y',
			value: 134.27999999999997
		  }
		]
	  },
	  {
		opId: 'b0472a1d-db16-4ba6-8787-f300fbdc77bb',
		objName: 'Ops.Gl.MainLoop',
		id: '327bcb35-91d1-4e98-867f-350bdcf066f5',
		uiAttribs: {
		  subPatch: 0,
		  notWorkingMsg: null,
		  selected: !1
		},
		portsIn: [
		  {
			name: 'FPS Limit',
			value: 0
		  },
		  {
			name: 'Reduce FPS not focussed',
			value: !0
		  },
		  {
			name: 'Reduce FPS loading',
			value: !1
		  },
		  {
			name: 'Clear',
			value: !0
		  },
		  {
			name: 'ClearAlpha',
			value: !0
		  },
		  {
			name: 'Fullscreen Button',
			value: !1
		  },
		  {
			name: 'Active',
			value: !0
		  },
		  {
			name: 'Hires Displays',
			value: !1
		  }
		],
		portsOut: [
		  {
			name: 'trigger'
		  },
		  {
			name: 'width',
			value: 618
		  },
		  {
			name: 'height',
			value: 360
		  }
		]
	  },
	  {
		opId: 'ca9219d2-9f06-4516-9cf2-98e61f84d4bb',
		objName: 'Ops.Array.Array_v2',
		id: '7ad39cc7-d97e-4949-aae1-6b6f686f02b3',
		uiAttribs: {
		  extendTitle: 'Number',
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Array length',
			links: [
			  {
				portIn: 'Array length',
				portOut: 'result',
				objIn: '7ad39cc7-d97e-4949-aae1-6b6f686f02b3',
				objOut: '22f37fe4-25ed-459f-81c9-1be9b767dea4'
			  }
			]
		  },
		  {
			name: 'Mode select index',
			value: 0
		  },
		  {
			name: 'Mode select',
			value: 'Number'
		  },
		  {
			name: 'Default Value',
			links: [
			  {
				portIn: 'Default Value',
				portOut: 'result',
				objIn: '7ad39cc7-d97e-4949-aae1-6b6f686f02b3',
				objOut: 'ff66d0f1-4bd6-45dd-b130-9c4e9bce8f26'
			  }
			]
		  }
		],
		portsOut: [
		  {
			name: 'Array'
		  },
		  {
			name: 'Array length out',
			value: 3
		  }
		]
	  },
	  {
		opId: '2bcf32fe-3cbd-48fd-825a-61255bebda9b',
		objName: 'Ops.Array.ArrayPack3',
		id: 'db078415-b0f6-4683-8e4d-94073dff2d64',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Trigger in',
			links: [
			  {
				portIn: 'Trigger in',
				portOut: 'trigger 15',
				objIn: 'db078415-b0f6-4683-8e4d-94073dff2d64',
				objOut: '7646f0a2-aec7-4b9a-8985-feb60dbe8ae8'
			  }
			]
		  },
		  {
			name: 'Array 1',
			links: [
			  {
				portIn: 'Array 1',
				portOut: 'Result Array',
				objIn: 'db078415-b0f6-4683-8e4d-94073dff2d64',
				objOut: '9aab49c1-78c2-4668-908b-a41f439fb365'
			  }
			]
		  },
		  {
			name: 'Array 2',
			links: [
			  {
				portIn: 'Array 2',
				portOut: 'Array',
				objIn: 'db078415-b0f6-4683-8e4d-94073dff2d64',
				objOut: 'c1c176ac-cbb0-4596-9925-5be7b313fcaf'
			  }
			]
		  },
		  {
			name: 'Array 3',
			links: [
			  {
				portIn: 'Array 3',
				portOut: 'Array',
				objIn: 'db078415-b0f6-4683-8e4d-94073dff2d64',
				objOut: 'c1c176ac-cbb0-4596-9925-5be7b313fcaf'
			  }
			]
		  }
		],
		portsOut: [
		  {
			name: 'Trigger out'
		  },
		  {
			name: 'Array out'
		  },
		  {
			name: 'Num Points',
			value: 3
		  },
		  {
			name: 'Array length',
			value: 9
		  }
		]
	  },
	  {
		opId: '8fb2bb5d-665a-4d0a-8079-12710ae453be',
		objName: 'Ops.Value.Number',
		id: '22f37fe4-25ed-459f-81c9-1be9b767dea4',
		uiAttribs: {
		  title: 'length',
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'value',
			links: [
			  {
				portIn: 'value',
				portOut: 'Result',
				objIn: '22f37fe4-25ed-459f-81c9-1be9b767dea4',
				objOut: 'e843f4a0-da9c-4a86-8bb3-6b1033d9d5d1'
			  }
			]
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: 'aac7f721-208f-411a-adb3-79adae2e471a',
		objName: 'Ops.Anim.Timer_v2',
		id: 'f36b3e87-be57-48a2-9dd1-1679e2a5195d',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Speed',
			value: 90
		  },
		  {
			name: 'Play',
			value: !0
		  },
		  {
			name: 'Reset',
			value: 0
		  },
		  {
			name: 'Sync to timeline',
			value: !1
		  }
		],
		portsOut: [
		  {
			name: 'Time'
		  }
		]
	  },
	  {
		opId: 'a01c344b-4129-4b01-9c8f-36cefe86d7cc',
		objName: 'Ops.Array.ArrayMultiply',
		id: '324b8f28-3df8-4a11-8d41-4c1456097c19',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'In',
			links: [
			  {
				portIn: 'In',
				portOut: 'Array',
				objIn: '324b8f28-3df8-4a11-8d41-4c1456097c19',
				objOut: 'ad0dab62-ed4b-4449-9fe7-85bc59ecf4fd'
			  }
			]
		  },
		  {
			name: 'Value',
			links: [
			  {
				portIn: 'Value',
				portOut: 'result',
				objIn: '324b8f28-3df8-4a11-8d41-4c1456097c19',
				objOut: 'e3b839d2-00cc-41a7-ba8b-36dbef2b947c'
			  }
			]
		  }
		],
		portsOut: [
		  {
			name: 'Result'
		  }
		]
	  },
	  {
		opId: 'd24da018-9f3d-428b-85c9-6ff14d77548b',
		objName: 'Ops.Math.Sine',
		id: 'e3b839d2-00cc-41a7-ba8b-36dbef2b947c',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'value',
			links: [
			  {
				portIn: 'value',
				portOut: 'result',
				objIn: 'e3b839d2-00cc-41a7-ba8b-36dbef2b947c',
				objOut: '52514969-e07d-4526-8687-bd2e9e8e00c0'
			  }
			]
		  },
		  {
			name: 'phase',
			value: 0
		  },
		  {
			name: 'frequency',
			value: 1
		  },
		  {
			name: 'amplitude',
			links: [
			  {
				portIn: 'amplitude',
				portOut: 'result',
				objIn: 'e3b839d2-00cc-41a7-ba8b-36dbef2b947c',
				objOut: '5307f767-f1ca-4a2c-bbaa-8380d6286c57'
			  }
			]
		  },
		  {
			name: 'asine',
			value: !1
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: 'dec567c3-231d-4146-964d-891fde8924f1',
		objName: 'Ops.Math.Sqrt',
		id: '85a38940-e4e5-4115-af2d-57eb56b07461',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'number',
			value: 0.5
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: '86fcfd8c-038d-4b91-9820-a08114f6b7eb',
		objName: 'Ops.Math.Divide',
		id: '5307f767-f1ca-4a2c-bbaa-8380d6286c57',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'number1',
			links: [
			  {
				portIn: 'number1',
				portOut: 'result',
				objIn: '5307f767-f1ca-4a2c-bbaa-8380d6286c57',
				objOut: '85a38940-e4e5-4115-af2d-57eb56b07461'
			  }
			]
		  },
		  {
			name: 'number2',
			value: 1.75
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: '2bcf32fe-3cbd-48fd-825a-61255bebda9b',
		objName: 'Ops.Array.ArrayPack3',
		id: '3357d320-4929-413d-90a5-cedc629ee990',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Trigger in',
			links: [
			  {
				portIn: 'Trigger in',
				portOut: 'Trigger out',
				objIn: '3357d320-4929-413d-90a5-cedc629ee990',
				objOut: 'db078415-b0f6-4683-8e4d-94073dff2d64'
			  }
			]
		  },
		  {
			name: 'Array 1',
			links: [
			  {
				portIn: 'Array 1',
				portOut: 'Array',
				objIn: '3357d320-4929-413d-90a5-cedc629ee990',
				objOut: 'c1c176ac-cbb0-4596-9925-5be7b313fcaf'
			  }
			]
		  },
		  {
			name: 'Array 2',
			links: [
			  {
				portIn: 'Array 2',
				portOut: 'Result',
				objIn: '3357d320-4929-413d-90a5-cedc629ee990',
				objOut: '060b448b-1958-4371-a0d7-b8a558e4c32a'
			  }
			]
		  },
		  {
			name: 'Array 3',
			links: [
			  {
				portIn: 'Array 3',
				portOut: 'Array',
				objIn: '3357d320-4929-413d-90a5-cedc629ee990',
				objOut: 'c1c176ac-cbb0-4596-9925-5be7b313fcaf'
			  }
			]
		  }
		],
		portsOut: [
		  {
			name: 'Trigger out',
			value: 0
		  },
		  {
			name: 'Array out'
		  },
		  {
			name: 'Num Points',
			value: 3
		  },
		  {
			name: 'Array length',
			value: 9
		  }
		]
	  },
	  {
		opId: 'c6b5bf63-0be8-4eea-acc0-9d32973e665a',
		objName: 'Ops.Array.ArraySum',
		id: '060b448b-1958-4371-a0d7-b8a558e4c32a',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'In',
			links: [
			  {
				portIn: 'In',
				portOut: 'Array result',
				objIn: '060b448b-1958-4371-a0d7-b8a558e4c32a',
				objOut: '17f27187-d2cb-410d-8c34-d5446f3c8dc6'
			  }
			]
		  },
		  {
			name: 'Value',
			links: [
			  {
				portIn: 'Value',
				portOut: 'result',
				objIn: '060b448b-1958-4371-a0d7-b8a558e4c32a',
				objOut: 'e460eebd-3d90-4e72-b3dc-df1433e0280c'
			  }
			]
		  }
		],
		portsOut: [
		  {
			name: 'Result'
		  }
		]
	  },
	  {
		opId: 'ebc13b25-3705-4265-8f06-5f985b6a7bb1',
		objName: 'Ops.Math.Modulo',
		id: 'ba50e604-1bfc-4d77-8312-28bf789b7042',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'number1',
			links: [
			  {
				portIn: 'number1',
				portOut: 'Time',
				objIn: 'ba50e604-1bfc-4d77-8312-28bf789b7042',
				objOut: 'f36b3e87-be57-48a2-9dd1-1679e2a5195d'
			  }
			]
		  },
		  {
			name: 'number2',
			value: 90
		  },
		  {
			name: 'pingpong',
			value: !0
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: '2617b407-60a0-4ff6-b4a7-18136cfa7817',
		objName: 'Ops.Math.MapRange',
		id: '52514969-e07d-4526-8687-bd2e9e8e00c0',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'value',
			links: [
			  {
				portIn: 'value',
				portOut: 'result',
				objIn: '52514969-e07d-4526-8687-bd2e9e8e00c0',
				objOut: 'ba50e604-1bfc-4d77-8312-28bf789b7042'
			  }
			]
		  },
		  {
			name: 'old min',
			value: 0
		  },
		  {
			name: 'old max',
			value: 90
		  },
		  {
			name: 'new min',
			value: 0
		  },
		  {
			name: 'new max',
			links: [
			  {
				portIn: 'new max',
				portOut: 'Pi',
				objIn: '52514969-e07d-4526-8687-bd2e9e8e00c0',
				objOut: '51d0ed5e-9a23-440d-a12e-0483f9f263f0'
			  }
			]
		  },
		  {
			name: 'Easing index',
			value: 0
		  },
		  {
			name: 'Easing',
			value: 'Linear'
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: '311e8179-9a7c-43de-9eb2-84577d702974',
		objName: 'Ops.Math.Pi',
		id: '51d0ed5e-9a23-440d-a12e-0483f9f263f0',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Multiply amount',
			value: 0.5
		  }
		],
		portsOut: [
		  {
			name: 'Pi'
		  }
		]
	  },
	  {
		opId: 'f31a1764-ce14-41de-9b3f-dc2fe249bb52',
		objName: 'Ops.Array.ArrayMathArray',
		id: '17f27187-d2cb-410d-8c34-d5446f3c8dc6',
		uiAttribs: {
		  extendTitle: '+',
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'array 0',
			links: [
			  {
				portIn: 'array 0',
				portOut: 'Array',
				objIn: '17f27187-d2cb-410d-8c34-d5446f3c8dc6',
				objOut: 'ad0dab62-ed4b-4449-9fe7-85bc59ecf4fd'
			  }
			]
		  },
		  {
			name: 'array 1',
			links: [
			  {
				portIn: 'array 1',
				portOut: 'Result',
				objIn: '17f27187-d2cb-410d-8c34-d5446f3c8dc6',
				objOut: '324b8f28-3df8-4a11-8d41-4c1456097c19'
			  }
			]
		  },
		  {
			name: 'Math function index',
			value: 0
		  },
		  {
			name: 'Math function',
			value: '+'
		  }
		],
		portsOut: [
		  {
			name: 'Array result'
		  },
		  {
			name: 'Array length',
			value: 3
		  }
		]
	  },
	  {
		opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
		objName: 'Ops.Gl.Matrix.Transform',
		id: 'da36bce5-cc81-4a8f-93d5-0ab971f11bc2',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'render',
			links: [
			  {
				portIn: 'render',
				portOut: 'Trigger Out',
				objIn: 'da36bce5-cc81-4a8f-93d5-0ab971f11bc2',
				objOut: 'd3b726cc-08e6-4a14-963f-6aed01f781b7'
			  }
			]
		  },
		  {
			name: 'posX',
			value: - 30
		  },
		  {
			name: 'posY',
			value: - 0.5
		  },
		  {
			name: 'posZ',
			value: 0
		  },
		  {
			name: 'scale',
			value: 1
		  },
		  {
			name: 'rotX',
			value: - 90
		  },
		  {
			name: 'rotY',
			value: 0
		  },
		  {
			name: 'rotZ',
			value: 0
		  }
		],
		portsOut: [
		  {
			name: 'trigger'
		  }
		]
	  },
	  {
		opId: 'c8fb181e-0b03-4b41-9e55-06b6267bc634',
		objName: 'Ops.Math.Sum',
		id: 'e460eebd-3d90-4e72-b3dc-df1433e0280c',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'number1',
			links: [
			  {
				portIn: 'number1',
				portOut: 'result',
				objIn: 'e460eebd-3d90-4e72-b3dc-df1433e0280c',
				objOut: '3ad1888e-b727-4093-bf8e-4f9b79dc6758'
			  }
			]
		  },
		  {
			name: 'number2',
			value: 0.5
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: '86fcfd8c-038d-4b91-9820-a08114f6b7eb',
		objName: 'Ops.Math.Divide',
		id: '3ad1888e-b727-4093-bf8e-4f9b79dc6758',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'number1',
			links: [
			  {
				portIn: 'number1',
				portOut: 'result',
				objIn: '3ad1888e-b727-4093-bf8e-4f9b79dc6758',
				objOut: 'e3b839d2-00cc-41a7-ba8b-36dbef2b947c'
			  }
			]
		  },
		  {
			name: 'number2',
			value: 2
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: '1943e09f-014c-4411-b39e-5db9d49a4972',
		objName: 'Ops.Gl.TextureEffects.Stripes_v3',
		id: 'cbfb7b44-0235-446e-973c-27f90e2079c1',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Render',
			links: [
			  {
				portIn: 'Render',
				portOut: 'trigger',
				objIn: 'cbfb7b44-0235-446e-973c-27f90e2079c1',
				objOut: 'cd84a874-5ac2-42b1-a736-afe52db0c31b'
			  }
			]
		  },
		  {
			name: 'Blend Mode index',
			value: 0
		  },
		  {
			name: 'Blend Mode',
			value: 'normal'
		  },
		  {
			name: 'Amount',
			value: 1
		  },
		  {
			name: 'Num',
			value: 80
		  },
		  {
			name: 'Width',
			value: 0.4
		  },
		  {
			name: 'Rotate',
			value: 0
		  },
		  {
			name: 'Offset',
			links: [
			  {
				portIn: 'Offset',
				portOut: 'result',
				objIn: 'cbfb7b44-0235-446e-973c-27f90e2079c1',
				objOut: '222a49b3-7ab9-4718-a1e5-7563cd0c1f64'
			  }
			]
		  },
		  {
			name: 'Gradients',
			value: !0
		  },
		  {
			name: 'Circular',
			value: !1
		  },
		  {
			name: 'Invert',
			value: !1
		  },
		  {
			name: 'r',
			value: 1
		  },
		  {
			name: 'g',
			value: 1
		  },
		  {
			name: 'b',
			value: 1
		  }
		],
		portsOut: [
		  {
			name: 'trigger',
			value: 0
		  }
		]
	  },
	  {
		opId: '5c04608d-1e42-4e36-be00-1be4a81fc309',
		objName: 'Ops.Gl.TextureEffects.ImageCompose',
		id: 'cd84a874-5ac2-42b1-a736-afe52db0c31b',
		uiAttribs: {
		  hint: null,
		  warning: null,
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null,
		  comment: 'Fake floor'
		},
		portsIn: [
		  {
			name: 'render',
			links: [
			  {
				portIn: 'render',
				portOut: 'trigger 5',
				objIn: 'cd84a874-5ac2-42b1-a736-afe52db0c31b',
				objOut: '1a34db46-3bba-434e-8a92-82a855087283'
			  }
			]
		  },
		  {
			name: 'use viewport size',
			value: !1
		  },
		  {
			name: 'width',
			value: 32
		  },
		  {
			name: 'height',
			value: 2048
		  },
		  {
			name: 'filter index',
			value: 1
		  },
		  {
			name: 'filter',
			value: 'linear'
		  },
		  {
			name: 'wrap index',
			value: 0
		  },
		  {
			name: 'wrap',
			value: 'repeat'
		  },
		  {
			name: 'HDR',
			value: !1
		  },
		  {
			name: 'Background Alpha',
			value: 1
		  }
		],
		portsOut: [
		  {
			name: 'trigger'
		  },
		  {
			name: 'texture_out'
		  },
		  {
			name: 'Aspect Ratio',
			value: 0.015625
		  }
		]
	  },
	  {
		opId: '1bbdae06-fbb2-489b-9bcc-36c9d65bd441',
		objName: 'Ops.Math.Multiply',
		id: 'd879e3c7-2161-4d6e-a03f-ae1b3f9d9a48',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'number1',
			links: [
			  {
				portIn: 'number1',
				portOut: 'result',
				objIn: 'd879e3c7-2161-4d6e-a03f-ae1b3f9d9a48',
				objOut: 'b2af22a6-ecc5-463c-b8ae-406ef5de3b39'
			  }
			]
		  },
		  {
			name: 'number2',
			value: - 0.05
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: '86fcfd8c-038d-4b91-9820-a08114f6b7eb',
		objName: 'Ops.Math.Divide',
		id: 'b2af22a6-ecc5-463c-b8ae-406ef5de3b39',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'number1',
			links: [
			  {
				portIn: 'number1',
				portOut: 'Time',
				objIn: 'b2af22a6-ecc5-463c-b8ae-406ef5de3b39',
				objOut: 'f36b3e87-be57-48a2-9dd1-1679e2a5195d'
			  }
			]
		  },
		  {
			name: 'number2',
			value: 90
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: 'c8fb181e-0b03-4b41-9e55-06b6267bc634',
		objName: 'Ops.Math.Sum',
		id: 'bdd8b7f2-bff6-41b9-95f0-6b23a6ab15e9',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'number1',
			links: [
			  {
				portIn: 'number1',
				portOut: 'result',
				objIn: 'bdd8b7f2-bff6-41b9-95f0-6b23a6ab15e9',
				objOut: 'd879e3c7-2161-4d6e-a03f-ae1b3f9d9a48'
			  }
			]
		  },
		  {
			name: 'number2',
			value: 0.016
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: 'f5214bd2-575d-4c0c-a7a9-4eff76915ac1',
		objName: 'Ops.Gl.ShaderEffects.Shadow_v2',
		id: 'd3b726cc-08e6-4a14-963f-6aed01f781b7',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Trigger In',
			links: [
			  {
				portIn: 'Trigger In',
				portOut: 'next',
				objIn: 'd3b726cc-08e6-4a14-963f-6aed01f781b7',
				objOut: '0ba104bc-d7e5-476f-a76d-69dd8f884be8'
			  }
			]
		  },
		  {
			name: 'Cast Shadow',
			value: !0
		  },
		  {
			name: 'Receive Shadow',
			value: !0
		  },
		  {
			name: 'Algorithm index',
			value: 0
		  },
		  {
			name: 'Algorithm',
			value: 'Default'
		  },
		  {
			name: 'Samples index',
			value: 2
		  },
		  {
			name: 'Samples',
			value: '2'
		  },
		  {
			name: 'Sample Distribution',
			value: 250
		  },
		  {
			name: 'R',
			value: 0
		  },
		  {
			name: 'G',
			value: 0
		  },
		  {
			name: 'B',
			value: 0
		  },
		  {
			name: 'Discard Transparent',
			value: !1
		  },
		  {
			name: 'Opacity Threshold',
			value: 0.5
		  },
		  {
			name: 'Alpha Mask Source index',
			value: 0
		  },
		  {
			name: 'Alpha Mask Source',
			value: 'Luminance'
		  },
		  {
			name: 'Opacity Texture',
			value: 0
		  }
		],
		portsOut: [
		  {
			name: 'Trigger Out'
		  }
		]
	  },
	  {
		opId: '76418c17-abd5-401b-82e2-688db6f966ee',
		objName: 'Ops.Gl.Phong.SpotLight_v5',
		id: '0448e586-fa06-4561-8188-11002cdf9a7b',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Trigger In',
			links: [
			  {
				portIn: 'Trigger In',
				portOut: 'trigger',
				objIn: '0448e586-fa06-4561-8188-11002cdf9a7b',
				objOut: 'c5a4c18b-fc36-4c35-b0bd-33814a3b5a98'
			  }
			]
		  },
		  {
			name: 'Cast Light',
			value: !0
		  },
		  {
			name: 'Intensity',
			value: 8
		  },
		  {
			name: 'Radius',
			value: 15
		  },
		  {
			name: 'X',
			links: [
			  {
				portIn: 'X',
				portOut: 'result',
				objIn: '0448e586-fa06-4561-8188-11002cdf9a7b',
				objOut: '40563941-509f-4881-9124-74d90915a525'
			  }
			]
		  },
		  {
			name: 'Y',
			value: 10
		  },
		  {
			name: 'Z',
			links: [
			  {
				portIn: 'Z',
				portOut: 'result',
				objIn: '0448e586-fa06-4561-8188-11002cdf9a7b',
				objOut: 'd4a22e03-f459-4fbf-be32-2e54b7f0395c'
			  }
			]
		  },
		  {
			name: 'Point At X',
			value: 0
		  },
		  {
			name: 'Point At Y',
			value: 2
		  },
		  {
			name: 'Point At Z',
			value: 0
		  },
		  {
			name: 'R',
			value: 1
		  },
		  {
			name: 'G',
			value: 1
		  },
		  {
			name: 'B',
			value: 1
		  },
		  {
			name: 'Specular R',
			value: 0.1
		  },
		  {
			name: 'Specular G',
			value: 0.1
		  },
		  {
			name: 'Specular B',
			value: 0.1
		  },
		  {
			name: 'Cone Angle',
			value: 142.06
		  },
		  {
			name: 'Inner Cone Angle',
			value: 59.05
		  },
		  {
			name: 'Spot Exponent',
			value: 0.67
		  },
		  {
			name: 'Falloff',
			value: 0.586
		  },
		  {
			name: 'Cast Shadow',
			value: !0
		  },
		  {
			name: 'Rendering Active',
			value: !0
		  },
		  {
			name: 'Map Size index',
			value: 1
		  },
		  {
			name: 'Map Size',
			value: '1024'
		  },
		  {
			name: 'Shadow Strength',
			value: 1
		  },
		  {
			name: 'Near',
			value: 1
		  },
		  {
			name: 'Far',
			value: 50
		  },
		  {
			name: 'Bias',
			value: 0
		  },
		  {
			name: 'Polygon Offset',
			value: 0
		  },
		  {
			name: 'Normal Offset',
			value: 0
		  },
		  {
			name: 'Blur Amount',
			value: 0
		  },
		  {
			name: 'Enable Advanced',
			value: !1
		  },
		  {
			name: 'MSAA index',
			value: 0
		  },
		  {
			name: 'MSAA',
			value: 'none'
		  },
		  {
			name: 'Texture Filter index',
			value: 0
		  },
		  {
			name: 'Texture Filter',
			value: 'Linear'
		  },
		  {
			name: 'Anisotropic index',
			value: 0
		  },
		  {
			name: 'Anisotropic',
			value: '0'
		  }
		],
		portsOut: [
		  {
			name: 'Trigger Out'
		  },
		  {
			name: 'Shadow Map'
		  },
		  {
			name: 'World Position X',
			value: 9.115159034729004
		  },
		  {
			name: 'World Position Y',
			value: 10
		  },
		  {
			name: 'World Position Z',
			value: 6.338021278381348
		  }
		]
	  },
	  {
		opId: 'f5214bd2-575d-4c0c-a7a9-4eff76915ac1',
		objName: 'Ops.Gl.ShaderEffects.Shadow_v2',
		id: '3761ace7-4f3f-4a44-9962-0947f695b9e8',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Trigger In',
			links: [
			  {
				portIn: 'Trigger In',
				portOut: 'Trigger Out',
				objIn: '3761ace7-4f3f-4a44-9962-0947f695b9e8',
				objOut: 'c59b884b-cc0c-4f67-9e76-48a1a10f1c24'
			  }
			]
		  },
		  {
			name: 'Cast Shadow',
			value: !0
		  },
		  {
			name: 'Receive Shadow',
			value: !0
		  },
		  {
			name: 'Algorithm index',
			value: 0
		  },
		  {
			name: 'Algorithm',
			value: 'Default'
		  },
		  {
			name: 'Samples index',
			value: 2
		  },
		  {
			name: 'Samples',
			value: 4
		  },
		  {
			name: 'Sample Distribution',
			value: 250
		  },
		  {
			name: 'R',
			value: 0
		  },
		  {
			name: 'G',
			value: 0
		  },
		  {
			name: 'B',
			value: 0
		  },
		  {
			name: 'Discard Transparent',
			value: !1
		  },
		  {
			name: 'Opacity Threshold',
			value: 0.5
		  },
		  {
			name: 'Alpha Mask Source index',
			value: 0
		  },
		  {
			name: 'Alpha Mask Source',
			value: 'Luminance'
		  },
		  {
			name: 'Opacity Texture',
			value: 0
		  }
		],
		portsOut: [
		  {
			name: 'Trigger Out'
		  }
		]
	  },
	  {
		opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
		objName: 'Ops.Gl.Matrix.Transform',
		id: '446ab9a7-117f-448a-9ed5-91c0ecd469e2',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'render',
			value: null
		  },
		  {
			name: 'posX',
			value: - 1.4
		  },
		  {
			name: 'posY',
			value: 0.4
		  },
		  {
			name: 'posZ',
			value: 0
		  },
		  {
			name: 'scale',
			value: 1
		  },
		  {
			name: 'rotX',
			value: 0
		  },
		  {
			name: 'rotY',
			value: 0
		  },
		  {
			name: 'rotZ',
			value: 0
		  }
		],
		portsOut: [
		  {
			name: 'trigger'
		  }
		]
	  },
	  {
		opId: 'ec55d252-3843-41b1-b731-0482dbd9e72b',
		objName: 'Ops.Gl.Shader.BasicMaterial_v3',
		id: 'c0af899b-e07e-46a7-9083-3abbd728cdd6',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'render',
			links: [
			  {
				portIn: 'render',
				portOut: 'trigger',
				objIn: 'c0af899b-e07e-46a7-9083-3abbd728cdd6',
				objOut: '446ab9a7-117f-448a-9ed5-91c0ecd469e2'
			  }
			]
		  },
		  {
			name: 'r',
			value: 0.6130106444454928
		  },
		  {
			name: 'g',
			value: 0.887071616497495
		  },
		  {
			name: 'b',
			value: 0.7907116621920303
		  },
		  {
			name: 'a',
			value: 1
		  },
		  {
			name: 'texture',
			links: [
			  {
				portIn: 'texture',
				portOut: 'Shadow Map',
				objIn: 'c0af899b-e07e-46a7-9083-3abbd728cdd6',
				objOut: '0448e586-fa06-4561-8188-11002cdf9a7b'
			  }
			]
		  },
		  {
			name: 'colorizeTexture',
			value: !1
		  },
		  {
			name: 'textureOpacity',
			value: 0
		  },
		  {
			name: 'Alpha Mask Source index',
			value: 0
		  },
		  {
			name: 'Alpha Mask Source',
			value: 'Luminance'
		  },
		  {
			name: 'Opacity TexCoords Transform',
			value: !1
		  },
		  {
			name: 'Discard Transparent Pixels',
			value: !1
		  },
		  {
			name: 'diffuseRepeatX',
			value: 1
		  },
		  {
			name: 'diffuseRepeatY',
			value: 1
		  },
		  {
			name: 'Tex Offset X',
			value: 0
		  },
		  {
			name: 'Tex Offset Y',
			value: 0
		  },
		  {
			name: 'Crop TexCoords',
			value: !1
		  },
		  {
			name: 'billboard',
			value: !1
		  }
		],
		portsOut: [
		  {
			name: 'trigger'
		  },
		  {
			name: 'shader'
		  }
		]
	  },
	  {
		opId: 'fc5718d6-11a5-496e-8f16-1c78b1a2824c',
		objName: 'Ops.Gl.Meshes.Rectangle_v2',
		id: 'dae0cc7b-a7b9-481e-9f9c-6cb1fda7b1c1',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'render',
			links: [
			  {
				portIn: 'render',
				portOut: 'trigger',
				objIn: 'dae0cc7b-a7b9-481e-9f9c-6cb1fda7b1c1',
				objOut: 'c0af899b-e07e-46a7-9083-3abbd728cdd6'
			  }
			]
		  },
		  {
			name: 'width',
			value: 1
		  },
		  {
			name: 'height',
			value: 1
		  },
		  {
			name: 'pivot x index',
			value: 0
		  },
		  {
			name: 'pivot x',
			value: 'center'
		  },
		  {
			name: 'pivot y index',
			value: 0
		  },
		  {
			name: 'pivot y',
			value: 'center'
		  },
		  {
			name: 'num columns',
			value: 1
		  },
		  {
			name: 'num rows',
			value: 1
		  },
		  {
			name: 'axis index',
			value: 0
		  },
		  {
			name: 'axis',
			value: 'xy'
		  },
		  {
			name: 'Active',
			value: !0
		  }
		],
		portsOut: [
		  {
			name: 'trigger',
			value: 0
		  },
		  {
			name: 'geometry'
		  }
		]
	  },
	  {
		opId: 'a466bc1f-06e9-4595-8849-bffb9fe22f99',
		objName: 'Ops.Sequence',
		id: '1a34db46-3bba-434e-8a92-82a855087283',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Clean up connections',
			value: 0
		  },
		  {
			name: 'exe',
			links: [
			  {
				portIn: 'exe',
				portOut: 'childs',
				objIn: '1a34db46-3bba-434e-8a92-82a855087283',
				objOut: '2a764e1a-f7a4-4e54-8b39-635e91e79cc1'
			  }
			]
		  },
		  {
			name: 'exe 0',
			value: 0
		  },
		  {
			name: 'exe 1',
			value: 0
		  },
		  {
			name: 'exe 2',
			value: 0
		  },
		  {
			name: 'exe 3',
			value: 0
		  },
		  {
			name: 'exe 4',
			value: 0
		  },
		  {
			name: 'exe 5',
			value: 0
		  },
		  {
			name: 'exe 6',
			value: 0
		  },
		  {
			name: 'exe 7',
			value: 0
		  },
		  {
			name: 'exe 8',
			value: 0
		  },
		  {
			name: 'exe 9',
			value: 0
		  },
		  {
			name: 'exe 10',
			value: 0
		  },
		  {
			name: 'exe 11',
			value: 0
		  },
		  {
			name: 'exe 12',
			value: 0
		  },
		  {
			name: 'exe 13',
			value: 0
		  },
		  {
			name: 'exe 14',
			value: 0
		  }
		],
		portsOut: [
		  {
			name: 'trigger 0'
		  },
		  {
			name: 'trigger 1'
		  },
		  {
			name: 'trigger 2'
		  },
		  {
			name: 'trigger 3',
			value: 0
		  },
		  {
			name: 'trigger 4',
			value: 0
		  },
		  {
			name: 'trigger 5'
		  },
		  {
			name: 'trigger 6',
			value: 0
		  },
		  {
			name: 'trigger 7',
			value: 0
		  },
		  {
			name: 'trigger 8',
			value: 0
		  },
		  {
			name: 'trigger 9',
			value: 0
		  },
		  {
			name: 'trigger 10',
			value: 0
		  },
		  {
			name: 'trigger 11',
			value: 0
		  },
		  {
			name: 'trigger 12',
			value: 0
		  },
		  {
			name: 'trigger 13',
			value: 0
		  },
		  {
			name: 'trigger 14',
			value: 0
		  },
		  {
			name: 'trigger 15',
			value: 0
		  }
		]
	  },
	  {
		opId: '2d2e5f0e-b69f-4789-9a48-1ee6ade5049a',
		objName: 'Ops.Anim.RandomAnim',
		id: '40563941-509f-4881-9124-74d90915a525',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'exe',
			links: [
			  {
				portIn: 'exe',
				portOut: 'trigger 1',
				objIn: '40563941-509f-4881-9124-74d90915a525',
				objOut: '1a34db46-3bba-434e-8a92-82a855087283'
			  }
			]
		  },
		  {
			name: 'min',
			value: 5
		  },
		  {
			name: 'max',
			value: 15
		  },
		  {
			name: 'random seed',
			value: 0
		  },
		  {
			name: 'duration',
			value: 6.23
		  },
		  {
			name: 'pause between',
			value: 0
		  },
		  {
			name: 'easing index',
			value: 0
		  },
		  {
			name: 'easing',
			value: 'linear'
		  }
		],
		portsOut: [
		  {
			name: 'Next',
			value: 0
		  },
		  {
			name: 'result'
		  },
		  {
			name: 'Looped',
			value: 0
		  }
		]
	  },
	  {
		opId: '2d2e5f0e-b69f-4789-9a48-1ee6ade5049a',
		objName: 'Ops.Anim.RandomAnim',
		id: 'd4a22e03-f459-4fbf-be32-2e54b7f0395c',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'exe',
			links: [
			  {
				portIn: 'exe',
				portOut: 'trigger 2',
				objIn: 'd4a22e03-f459-4fbf-be32-2e54b7f0395c',
				objOut: '1a34db46-3bba-434e-8a92-82a855087283'
			  }
			]
		  },
		  {
			name: 'min',
			value: 3
		  },
		  {
			name: 'max',
			value: 8
		  },
		  {
			name: 'random seed',
			value: 0
		  },
		  {
			name: 'duration',
			value: 6.87
		  },
		  {
			name: 'pause between',
			value: 0
		  },
		  {
			name: 'easing index',
			value: 0
		  },
		  {
			name: 'easing',
			value: 'linear'
		  }
		],
		portsOut: [
		  {
			name: 'Next',
			value: 0
		  },
		  {
			name: 'result'
		  },
		  {
			name: 'Looped',
			value: 0
		  }
		]
	  },
	  {
		opId: '450b4d68-2278-4d9f-9849-0abdfa37ef69',
		objName: 'Ops.Gl.Meshes.Sphere_v2',
		id: 'c4b7b2e0-57da-431a-aef0-09d2c0da9c07',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'render',
			links: [
			  {
				portIn: 'render',
				portOut: 'trigger',
				objIn: 'c4b7b2e0-57da-431a-aef0-09d2c0da9c07',
				objOut: 'e0b7b832-9d4d-4163-b0f2-abaf85d7efa8'
			  }
			]
		  },
		  {
			name: 'radius',
			value: 0.1
		  },
		  {
			name: 'stacks',
			value: 32
		  },
		  {
			name: 'slices',
			value: 32
		  },
		  {
			name: 'Filloffset',
			value: 1
		  },
		  {
			name: 'Render',
			value: !0
		  }
		],
		portsOut: [
		  {
			name: 'trigger',
			value: 0
		  },
		  {
			name: 'geometry'
		  }
		]
	  },
	  {
		opId: 'ec55d252-3843-41b1-b731-0482dbd9e72b',
		objName: 'Ops.Gl.Shader.BasicMaterial_v3',
		id: 'e0b7b832-9d4d-4163-b0f2-abaf85d7efa8',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'render',
			links: [
			  {
				portIn: 'render',
				portOut: 'trigger',
				objIn: 'e0b7b832-9d4d-4163-b0f2-abaf85d7efa8',
				objOut: '860473a8-f188-4965-a5e4-7a330f06f60a'
			  }
			]
		  },
		  {
			name: 'r',
			value: 1
		  },
		  {
			name: 'g',
			value: 1
		  },
		  {
			name: 'b',
			value: 1
		  },
		  {
			name: 'a',
			value: 1
		  },
		  {
			name: 'texture',
			value: 0
		  },
		  {
			name: 'colorizeTexture',
			value: !1
		  },
		  {
			name: 'textureOpacity',
			value: 0
		  },
		  {
			name: 'Alpha Mask Source index',
			value: 0
		  },
		  {
			name: 'Alpha Mask Source',
			value: 'Luminance'
		  },
		  {
			name: 'Opacity TexCoords Transform',
			value: !1
		  },
		  {
			name: 'Discard Transparent Pixels',
			value: !1
		  },
		  {
			name: 'diffuseRepeatX',
			value: 1
		  },
		  {
			name: 'diffuseRepeatY',
			value: 1
		  },
		  {
			name: 'Tex Offset X',
			value: 0
		  },
		  {
			name: 'Tex Offset Y',
			value: 0
		  },
		  {
			name: 'Crop TexCoords',
			value: !1
		  },
		  {
			name: 'billboard',
			value: !1
		  }
		],
		portsOut: [
		  {
			name: 'trigger'
		  },
		  {
			name: 'shader'
		  }
		]
	  },
	  {
		opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
		objName: 'Ops.Gl.Matrix.Transform',
		id: '860473a8-f188-4965-a5e4-7a330f06f60a',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'render',
			links: [
			  {
				portIn: 'render',
				portOut: 'trigger 12',
				objIn: '860473a8-f188-4965-a5e4-7a330f06f60a',
				objOut: '7646f0a2-aec7-4b9a-8985-feb60dbe8ae8'
			  }
			]
		  },
		  {
			name: 'posX',
			links: [
			  {
				portIn: 'posX',
				portOut: 'result',
				objIn: '860473a8-f188-4965-a5e4-7a330f06f60a',
				objOut: '40563941-509f-4881-9124-74d90915a525'
			  }
			]
		  },
		  {
			name: 'posY',
			value: 6
		  },
		  {
			name: 'posZ',
			links: [
			  {
				portIn: 'posZ',
				portOut: 'result',
				objIn: '860473a8-f188-4965-a5e4-7a330f06f60a',
				objOut: 'd4a22e03-f459-4fbf-be32-2e54b7f0395c'
			  }
			]
		  },
		  {
			name: 'scale',
			value: 1
		  },
		  {
			name: 'rotX',
			value: 0
		  },
		  {
			name: 'rotY',
			value: 0
		  },
		  {
			name: 'rotZ',
			value: 0
		  }
		],
		portsOut: [
		  {
			name: 'trigger'
		  }
		]
	  },
	  {
		opId: 'fc5718d6-11a5-496e-8f16-1c78b1a2824c',
		objName: 'Ops.Gl.Meshes.Rectangle_v2',
		id: 'f70b834d-e8ba-4cd0-bb15-b744562fed86',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: 'This op can not do anything without at least connecting those ports: RENDER',
		  working: !1
		},
		portsIn: [
		  {
			name: 'render',
			value: null
		  },
		  {
			name: 'width',
			value: 10
		  },
		  {
			name: 'height',
			value: 20
		  },
		  {
			name: 'pivot x index',
			value: 0
		  },
		  {
			name: 'pivot x',
			value: 'center'
		  },
		  {
			name: 'pivot y index',
			value: 0
		  },
		  {
			name: 'pivot y',
			value: 'center'
		  },
		  {
			name: 'num columns',
			value: 1
		  },
		  {
			name: 'num rows',
			value: 1
		  },
		  {
			name: 'axis index',
			value: 0
		  },
		  {
			name: 'axis',
			value: 'xy'
		  },
		  {
			name: 'Active',
			value: !0
		  }
		],
		portsOut: [
		  {
			name: 'trigger',
			value: 0
		  },
		  {
			name: 'geometry'
		  }
		]
	  },
	  {
		opId: '37b92ba4-cea5-42ae-bf28-a513ca28549c',
		objName: 'Ops.Gl.Meshes.Cube_v2',
		id: '8724ed96-70dc-4a12-be02-059d27908a5e',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Render',
			links: [
			  {
				portIn: 'Render',
				portOut: 'trigger',
				objIn: '8724ed96-70dc-4a12-be02-059d27908a5e',
				objOut: 'da36bce5-cc81-4a8f-93d5-0ab971f11bc2'
			  }
			]
		  },
		  {
			name: 'Render Mesh',
			value: !0
		  },
		  {
			name: 'Width',
			value: 100
		  },
		  {
			name: 'Length',
			value: 1
		  },
		  {
			name: 'Height',
			value: 80
		  },
		  {
			name: 'Center',
			value: !0
		  },
		  {
			name: 'Mapping index',
			value: 0
		  },
		  {
			name: 'Mapping',
			value: 'Side'
		  },
		  {
			name: 'Bias',
			value: 0
		  },
		  {
			name: 'Flip X',
			value: !0
		  },
		  {
			name: 'Top',
			value: !0
		  },
		  {
			name: 'Bottom',
			value: !0
		  },
		  {
			name: 'Left',
			value: !0
		  },
		  {
			name: 'Right',
			value: !0
		  },
		  {
			name: 'Front',
			value: !0
		  },
		  {
			name: 'Back',
			value: !0
		  }
		],
		portsOut: [
		  {
			name: 'Next',
			value: 0
		  },
		  {
			name: 'geometry'
		  }
		]
	  },
	  {
		opId: '9cd2d9de-000f-4a14-bd13-e7d5f057583c',
		objName: 'Ops.Gl.Performance',
		id: '2a764e1a-f7a4-4e54-8b39-635e91e79cc1',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'exe',
			links: [
			  {
				portIn: 'exe',
				portOut: 'trigger',
				objIn: '2a764e1a-f7a4-4e54-8b39-635e91e79cc1',
				objOut: '327bcb35-91d1-4e98-867f-350bdcf066f5'
			  }
			]
		  },
		  {
			name: 'Visible',
			value: !1
		  },
		  {
			name: 'Position index',
			value: 0
		  },
		  {
			name: 'Position',
			value: 'top'
		  },
		  {
			name: 'Open',
			value: !1
		  },
		  {
			name: 'Smooth Graph',
			value: !0
		  },
		  {
			name: 'Scale',
			value: 4
		  },
		  {
			name: 'Size',
			value: 128
		  }
		],
		portsOut: [
		  {
			name: 'childs'
		  },
		  {
			name: 'FPS',
			value: 57
		  }
		]
	  },
	  {
		opId: '1bbdae06-fbb2-489b-9bcc-36c9d65bd441',
		objName: 'Ops.Math.Multiply',
		id: '222a49b3-7ab9-4718-a1e5-7563cd0c1f64',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null,
		  comment: 'adjust speed to match rotation'
		},
		portsIn: [
		  {
			name: 'number1',
			links: [
			  {
				portIn: 'number1',
				portOut: 'result',
				objIn: '222a49b3-7ab9-4718-a1e5-7563cd0c1f64',
				objOut: 'bdd8b7f2-bff6-41b9-95f0-6b23a6ab15e9'
			  }
			]
		  },
		  {
			name: 'number2',
			value: 0.25
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: '32977fd9-d73e-44ec-aa20-396b6d78f849',
		objName: 'Ops.Gl.Phong.PhongMaterial_v5',
		id: 'c59b884b-cc0c-4f67-9e76-48a1a10f1c24',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Trigger In',
			links: [
			  {
				portIn: 'Trigger In',
				portOut: 'trigger 8',
				objIn: 'c59b884b-cc0c-4f67-9e76-48a1a10f1c24',
				objOut: '7646f0a2-aec7-4b9a-8985-feb60dbe8ae8'
			  }
			]
		  },
		  {
			name: 'R',
			value: 0.14599609375
		  },
		  {
			name: 'G',
			value: 0.7187728881835938
		  },
		  {
			name: 'B',
			value: 0.8125
		  },
		  {
			name: 'A',
			value: 1
		  },
		  {
			name: 'Enable',
			value: !1
		  },
		  {
			name: 'Albedo',
			value: 0.707
		  },
		  {
			name: 'Roughness',
			value: 0.835
		  },
		  {
			name: 'Active',
			value: !1
		  },
		  {
			name: 'Fresnel Intensity',
			value: 0.741
		  },
		  {
			name: 'Fresnel Width',
			value: 1
		  },
		  {
			name: 'Fresnel Exponent',
			value: 6
		  },
		  {
			name: 'Fresnel R',
			value: 1
		  },
		  {
			name: 'Fresnel G',
			value: 1
		  },
		  {
			name: 'Fresnel B',
			value: 1
		  },
		  {
			name: 'Emissive Active',
			value: !1
		  },
		  {
			name: 'Color Intensity',
			value: 0.076
		  },
		  {
			name: 'Emissive R',
			value: 0.6097033007733739
		  },
		  {
			name: 'Emissive G',
			value: 0.9967068327262478
		  },
		  {
			name: 'Emissive B',
			value: 0.30092153894990403
		  },
		  {
			name: 'Shininess',
			value: 5
		  },
		  {
			name: 'Specular Amount',
			value: 1
		  },
		  {
			name: 'Specular Model index',
			value: 0
		  },
		  {
			name: 'Specular Model',
			value: 'Phong'
		  },
		  {
			name: 'Energy Conservation',
			value: !1
		  },
		  {
			name: 'Double Sided Material',
			value: !1
		  },
		  {
			name: 'Falloff Mode index',
			value: 0
		  },
		  {
			name: 'Falloff Mode',
			value: 'A'
		  },
		  {
			name: 'Diffuse Texture',
			value: 0
		  },
		  {
			name: 'Specular Texture',
			value: 0
		  },
		  {
			name: 'Normal Map',
			value: 0
		  },
		  {
			name: 'AO Texture',
			value: 0
		  },
		  {
			name: 'Emissive Texture',
			value: 0
		  },
		  {
			name: 'Opacity Texture',
			value: 0
		  },
		  {
			name: 'Environment Map',
			value: 0
		  },
		  {
			name: 'Env Map Mask',
			value: 0
		  },
		  {
			name: 'Colorize Texture',
			value: !1
		  },
		  {
			name: 'Diffuse Repeat X',
			value: 1
		  },
		  {
			name: 'Diffuse Repeat Y',
			value: 1
		  },
		  {
			name: 'Texture Offset X',
			value: 0
		  },
		  {
			name: 'Texture Offset Y',
			value: 0
		  },
		  {
			name: 'Specular Intensity',
			value: 1
		  },
		  {
			name: 'Normal Map Intensity',
			value: 0.5
		  },
		  {
			name: 'AO Intensity',
			value: 1
		  },
		  {
			name: 'Emissive Intensity',
			value: 1
		  },
		  {
			name: 'Env Map Intensity',
			value: 1
		  },
		  {
			name: 'Env Mask Intensity',
			value: 1
		  },
		  {
			name: 'Alpha Mask Source index',
			value: 0
		  },
		  {
			name: 'Alpha Mask Source',
			value: 'Luminance'
		  },
		  {
			name: 'Discard Transparent Pixels',
			value: !1
		  }
		],
		portsOut: [
		  {
			name: 'Trigger Out'
		  },
		  {
			name: 'Shader'
		  }
		]
	  },
	  {
		opId: 'd69316f1-bde9-4645-8280-c635a8982e0d',
		objName: 'Ops.Gl.Phong.LambertMaterial_v2',
		id: '0ba104bc-d7e5-476f-a76d-69dd8f884be8',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Execute',
			links: [
			  {
				portIn: 'Execute',
				portOut: 'trigger 3',
				objIn: '0ba104bc-d7e5-476f-a76d-69dd8f884be8',
				objOut: '7646f0a2-aec7-4b9a-8985-feb60dbe8ae8'
			  }
			]
		  },
		  {
			name: 'Diffuse R',
			value: 0.039215686274509796
		  },
		  {
			name: 'Diffuse G',
			value: 0.6669117647058823
		  },
		  {
			name: 'Diffuse B',
			value: 0.8117647058823529
		  },
		  {
			name: 'Diffuse A',
			value: 1
		  },
		  {
			name: 'Double Sided',
			value: !1
		  },
		  {
			name: 'Diffuse Texture',
			links: [
			  {
				portIn: 'Diffuse Texture',
				portOut: 'texture_out',
				objIn: '0ba104bc-d7e5-476f-a76d-69dd8f884be8',
				objOut: 'cd84a874-5ac2-42b1-a736-afe52db0c31b'
			  }
			]
		  },
		  {
			name: 'Colorize Texture',
			value: !0
		  }
		],
		portsOut: [
		  {
			name: 'next'
		  },
		  {
			name: 'Shader'
		  }
		]
	  },
	  {
		opId: 'ca9219d2-9f06-4516-9cf2-98e61f84d4bb',
		objName: 'Ops.Array.Array_v2',
		id: 'c1c176ac-cbb0-4596-9925-5be7b313fcaf',
		uiAttribs: {
		  extendTitle: 'Number',
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Array length',
			links: [
			  {
				portIn: 'Array length',
				portOut: 'result',
				objIn: 'c1c176ac-cbb0-4596-9925-5be7b313fcaf',
				objOut: '22f37fe4-25ed-459f-81c9-1be9b767dea4'
			  }
			]
		  },
		  {
			name: 'Mode select index',
			value: 0
		  },
		  {
			name: 'Mode select',
			value: 'Number'
		  },
		  {
			name: 'Default Value',
			value: 0
		  }
		],
		portsOut: [
		  {
			name: 'Array'
		  },
		  {
			name: 'Array length out',
			value: 3
		  }
		]
	  },
	  {
		opId: 'ebc13b25-3705-4265-8f06-5f985b6a7bb1',
		objName: 'Ops.Math.Modulo',
		id: 'ff66d0f1-4bd6-45dd-b130-9c4e9bce8f26',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'number1',
			links: [
			  {
				portIn: 'number1',
				portOut: 'Time',
				objIn: 'ff66d0f1-4bd6-45dd-b130-9c4e9bce8f26',
				objOut: 'f36b3e87-be57-48a2-9dd1-1679e2a5195d'
			  }
			]
		  },
		  {
			name: 'number2',
			value: 90
		  },
		  {
			name: 'pingpong',
			value: !1
		  }
		],
		portsOut: [
		  {
			name: 'result'
		  }
		]
	  },
	  {
		opId: '5a681c35-78ce-4cb3-9858-bc79c34c6819',
		objName: 'Ops.Sidebar.Sidebar',
		id: '3cdb6b58-6aa1-41aa-abc9-8f2df33a509e',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'Visible',
			value: !0
		  },
		  {
			name: 'Opacity',
			value: 1
		  },
		  {
			name: 'Default Minimized',
			value: !1
		  },
		  {
			name: 'Minimized Opacity',
			value: 0.5
		  },
		  {
			name: 'Show undo button',
			value: !1
		  },
		  {
			name: 'Title',
			value: 'Sidebar'
		  },
		  {
			name: 'Side',
			value: !0
		  }
		],
		portsOut: [
		  {
			name: 'childs'
		  }
		]
	  },
	  {
		opId: '2f3b9d8a-228b-4ff8-948a-13a7eb9d8241',
		objName: 'Ops.Sidebar.Slider_v2',
		id: 'e843f4a0-da9c-4a86-8bb3-6b1033d9d5d1',
		uiAttribs: {
		  title: 'Slider: # Cubes',
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'link',
			links: [
			  {
				portIn: 'link',
				portOut: 'childs',
				objIn: 'e843f4a0-da9c-4a86-8bb3-6b1033d9d5d1',
				objOut: '3cdb6b58-6aa1-41aa-abc9-8f2df33a509e'
			  }
			]
		  },
		  {
			name: 'Text',
			value: '# Cubes'
		  },
		  {
			name: 'Min',
			value: 1
		  },
		  {
			name: 'Max',
			value: 6
		  },
		  {
			name: 'Step',
			value: 1
		  },
		  {
			name: 'Grey Out',
			value: !1
		  },
		  {
			name: 'Visible',
			value: !0
		  },
		  {
			name: 'Input',
			value: 3
		  },
		  {
			name: 'Set Default',
			value: 0
		  },
		  {
			name: 'Reset',
			value: 0
		  },
		  {
			name: 'Default',
			value: 3
		  }
		],
		portsOut: [
		  {
			name: 'childs'
		  },
		  {
			name: 'Result'
		  }
		]
	  },
	  {
		opId: '663e32a2-45a1-4141-a387-d8a44d4977d5',
		objName: 'Ops.Array.ArrayMathExpression',
		id: '9aab49c1-78c2-4668-908b-a41f439fb365',
		uiAttribs: {
		  subPatch: 0,
		  selected: !1,
		  notWorkingMsg: null
		},
		portsIn: [
		  {
			name: 'A',
			links: [
			  {
				portIn: 'A',
				portOut: 'Array',
				objIn: '9aab49c1-78c2-4668-908b-a41f439fb365',
				objOut: '7ad39cc7-d97e-4949-aae1-6b6f686f02b3'
			  }
			]
		  },
		  {
			name: 'B',
			value: 0
		  },
		  {
			name: 'C',
			value: 0
		  },
		  {
			name: 'X',
			value: 1
		  },
		  {
			name: 'Y',
			value: 1
		  },
		  {
			name: 'Z',
			value: 1
		  },
		  {
			name: 'Expression',
			value: 'a*cos(i*Math.PI)'
		  }
		],
		portsOut: [
		  {
			name: 'Result Array'
		  },
		  {
			name: 'Array Length',
			value: 3
		  },
		  {
			name: 'Expression Valid',
			value: !0
		  }
		]
	  }
	],
	users: [
	],
	userOps: [
	],
	tags: [
	],
	_id: '60c868d098b8ca16849ad43d',
	name: 'copy of Cubes with Shadow ',
	userId: '60c86610e098427302b28b21',
	created: '2021-06-15T08:46:08.023Z',
	cloneOf: '60c866f798b8ca16849ad438',
	updated: '2021-06-15T08:46:08.227Z',
	log: [
	  {
		_id: '60c868d098b8ca16849ad43f',
		key: 'collabsatcreate',
		text: 'initial list of collaborators:'
	  }
	],
	__v: 2,
	shortId: 'J-mSeE',
	buildInfo: {
	  core: {
		timestamp: 1613640494342,
		created: '2021-02-18T09:28:14.342Z',
		git: {
		  branch: 'master',
		  commit: 'ab0be0cc5ed6dda831b8bfda8568acf427215457',
		  date: '2021-02-18T09:24:02.000Z'
		}
	  },
	  ui: {
		timestamp: 1614079345086,
		created: '2021-02-23T11:22:25.086Z',
		git: {
		  branch: 'master',
		  commit: '411bd4eedeb347eac9da2ad2611e9e5946027dc0',
		  date: '2021-02-23T11:21:54.000Z'
		}
	  },
	  host: 'cables.gl',
	  api: {
		timestamp: 1613741585480,
		created: '2021-02-19T13:33:05.480Z',
		git: {
		  branch: 'master',
		  commit: 'b8779729bea8457b42b8339d967d5657d0a4641d',
		  date: '2021-02-19T13:32:42.000Z'
		}
	  }
	},
	opsHash: 'd3ee504ac1f637014f14196c2a91393a0f51f56e',
	ui: {
	  viewBox: {
		x: - 1132,
		y: - 420,
		w: 2432,
		h: 1780.1044546850999
	  },
	  timeLineLength: 20,
	  bookmarks: [
	  ],
	  subPatchViewBoxes: [
	  ],
	  renderer: {
		w: 618,
		h: 360,
		s: 1
	  }
	},
	updatedByUser: 'koobalack',
	exports: 1
  },
  CABLES.exportedPatch || (CABLES.exportedPatch = CABLES.exportedPatches['J-mSeE']);
  var CABLES = CABLES || {
  };
  CABLES.OPS = CABLES.OPS || {
  };
  var Ops = Ops || {
  };
  Ops.Gl = Ops.Gl || {
  },
  Ops.Anim = Ops.Anim || {
  },
  Ops.Math = Ops.Math || {
  },
  Ops.Array = Ops.Array || {
  },
  Ops.Value = Ops.Value || {
  },
  Ops.Sidebar = Ops.Sidebar || {
  },
  Ops.Trigger = Ops.Trigger || {
  },
  Ops.Gl.Phong = Ops.Gl.Phong || {
  },
  Ops.Gl.Matrix = Ops.Gl.Matrix || {
  },
  Ops.Gl.Meshes = Ops.Gl.Meshes || {
  },
  Ops.Gl.Shader = Ops.Gl.Shader || {
  },
  Ops.Gl.ShaderEffects = Ops.Gl.ShaderEffects || {
  },
  Ops.Gl.TextureEffects = Ops.Gl.TextureEffects || {
  },
  Ops.Sequence = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inTriggerButton('Clean up connections'),
	n = [
	],
	a = [
	];
	let i = null;
	e.inTrigger('exe').onTriggered = r,
	t.onTriggered = function () {
	  let t = 0;
	  for (let n = 0; n < a.length; n++) {
		let i = [
		];
		if (a[n].links.length > 1) for (let o = 1; o < a[n].links.length; o++) {
		  for (; a[t].links.length > 0; ) t++;
		  i.push(a[n].links[o]);
		  const r = a[n].links[o].getOtherPort(a[n]);
		  e.patch.link(e, 'trigger ' + t, r.parent, r.name),
		  t++
		}
		for (let e = 0; e < i.length; e++) i[e].remove()
	  }
	  o()
	},
	t.hidePort();
	for (let t = 0; t < 16; t++) {
	  const i = e.outTrigger('trigger ' + t);
	  if (a.push(i), i.onLinkChanged = o, t < 15) {
		let a = e.inTrigger('exe ' + t);
		a.onTriggered = r,
		n.push(a)
	  }
	}
	function o() {
	  clearTimeout(i),
	  i = setTimeout(() =>{
		let n = !1;
		for (let e = 0; e < a.length; e++) a[e].links.length > 1 && (n = !0);
		t.setUiAttribs({
		  hideParam: !n
		}),
		e.isCurrentUiOp() && e.refreshParams()
	  }, 60)
	}
	function r() {
	  for (let e = 0; e < a.length; e++) a[e].trigger()
	}
  },
  Ops.Sequence.prototype = new CABLES.Op,
  CABLES.OPS['a466bc1f-06e9-4595-8849-bffb9fe22f99'] = {
	f: Ops.Sequence,
	objName: 'Ops.Sequence'
  },
  Ops.Gl.MeshInstancer_v4 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = '#ifdef COLORIZE_INSTANCES\n    #ifdef BLEND_MODE_MULTIPLY\n        col.rgb *= frag_instColor.rgb;\n        col.a *= frag_instColor.a;\n    #endif\n\n    #ifdef BLEND_MODE_ADD\n        col.rgb += frag_instColor.rgb;\n        col.a += frag_instColor.a;\n    #endif\n\n    #ifdef BLEND_MODE_NONE\n        col.rgb = frag_instColor.rgb;\n        col.a = frag_instColor.a;\n    #endif\n#endif\n',
	n = '\nmMatrix*=instMat;\npos.xyz*=MOD_scale;\nfrag_instColor=instColor;\n\n',
	a = 'IN vec4 frag_instColor;\n',
	i = '\nIN mat4 instMat;\nIN vec4 instColor;\nOUT mat4 instModelMat;\nOUT vec4 frag_instColor;\n\n#define INSTANCING',
	o = e.inTrigger('exe'),
	r = e.inObject('geom'),
	s = e.inValue('Scale', 1),
	l = e.inValueBool('Limit Instances', !1),
	c = e.inValueInt('Limit', 100),
	d = e.inArray('positions'),
	u = e.inArray('Scale Array'),
	f = e.inArray('Rotations'),
	h = e.inSwitch('Rotation Type', [
	  'Euler',
	  'Quaternions'
	], 'Euler'),
	g = e.inSwitch('Material blend mode', [
	  'Multiply',
	  'Add',
	  'Normal'
	], 'Multiply'),
	p = e.inArray('Colors'),
	m = e.outTrigger('Trigger Out'),
	_ = e.outValue('Num');
	e.setPortGroup('Limit Number of Instances', [
	  c,
	  l
	]),
	e.setPortGroup('Parameters', [
	  u,
	  f,
	  d,
	  h
	]),
	e.toWorkPortsNeedToBeLinked(r),
	e.toWorkPortsNeedToBeLinked(o),
	r.ignoreValueSerialize = !0;
	const b = e.patch.cgl,
	E = mat4.create();
	let I = new Float32Array(1),
	v = new Float32Array(1),
	M = null,
	L = !0,
	T = 0,
	S = !0,
	A = !0;
	const D = new CGL.ShaderModifier(b, e.name);
	function x() {
	  D.toggleDefine('COLORIZE_INSTANCES', p.get()),
	  D.toggleDefine('BLEND_MODE_MULTIPLY', 'Multiply' === g.get()),
	  D.toggleDefine('BLEND_MODE_ADD', 'Add' === g.get()),
	  D.toggleDefine('BLEND_MODE_NONE', 'Normal' === g.get())
	}
	function O() {
	  c.setUiAttribs({
		hidePort: !l.get(),
		greyout: !l.get()
	  })
	}
	D.addModule({
	  name: 'MODULE_VERTEX_POSITION',
	  title: e.name,
	  priority: - 2,
	  srcHeadVert: i,
	  srcBodyVert: n
	}),
	D.addModule({
	  name: 'MODULE_COLOR',
	  priority: - 2,
	  title: e.name,
	  srcHeadFrag: a,
	  srcBodyFrag: t
	}),
	D.addUniformVert('f', 'MOD_scale', s),
	g.onChange = x,
	l.onChange = O,
	o.onTriggered = function () {
	  if (!M) return;
	  L && function () {
		if (!M) return;
		let e = d.get();
		e || (e = [
		  0,
		  0,
		  0
		]);
		T = Math.floor(e.length / 3);
		const t = p.get(),
		n = u.get();
		I.length != 16 * T && (I = new Float32Array(16 * T));
		v.length != 4 * T && (S = !0, v = new Float32Array(4 * T));
		const a = f.get(),
		i = 'Quaternions' == h.get();
		for (let o = 0; o < T; o++) {
		  if (mat4.identity(E), mat4.translate(E, E, [
			e[3 * o],
			e[3 * o + 1],
			e[3 * o + 2]
		  ]), a) if (i) {
			const e = mat4.create();
			mat4.fromQuat(e, [
			  a[4 * o + 0],
			  a[4 * o + 1],
			  a[4 * o + 2],
			  a[4 * o + 3]
			]),
			mat4.mul(E, E, e)
		  } else mat4.rotateX(E, E, a[3 * o + 0] * CGL.DEG2RAD),
		  mat4.rotateY(E, E, a[3 * o + 1] * CGL.DEG2RAD),
		  mat4.rotateZ(E, E, a[3 * o + 2] * CGL.DEG2RAD);
		  S && t && (v[4 * o + 0] = t[4 * o + 0], v[4 * o + 1] = t[4 * o + 1], v[4 * o + 2] = t[4 * o + 2], v[4 * o + 3] = t[4 * o + 3]),
		  S && !t && (v[4 * o + 0] = 1, v[4 * o + 1] = 1, v[4 * o + 2] = 1, v[4 * o + 3] = 1),
		  n && n.length > o ? mat4.scale(E, E, [
			n[3 * o],
			n[3 * o + 1],
			n[3 * o + 2]
		  ]) : mat4.scale(E, E, [
			1,
			1,
			1
		  ]);
		  for (let e = 0; e < 16; e++) I[16 * o + e] = E[e]
		}
		M.numInstances = T,
		A && M.addAttribute('instMat', I, 16);
		S && M.addAttribute('instColor', v, 4, {
		  instanced: !0
		});
		S = !1,
		L = !1
	  }();
	  D.bind(),
	  l.get() ? M.numInstances = Math.min(T, c.get()) : M.numInstances = T;
	  _.set(M.numInstances),
	  M.numInstances > 0 && M.render(b.getShader());
	  D.toggleDefine('COLORIZE_INSTANCES', p.get()),
	  m.trigger(),
	  D.unbind()
	},
	o.onLinkChanged = function () {
	  o.isLinked()
	},
	O(),
	f.onChange = u.onChange = d.onChange = h.onChange = function () {
	  A = !0,
	  L = !0
	},
	p.onChange = function () {
	  S = !0,
	  L = !0,
	  x()
	},
	r.onChange = function () {
	  M && M.dispose(),
	  r.get() ? (M = new CGL.Mesh(b, r.get()), S = !0, A = !0, L = !0) : M = null
	}
  },
  Ops.Gl.MeshInstancer_v4.prototype = new CABLES.Op,
  CABLES.OPS['322d8c8d-851b-481d-9bee-ec1cf7d57a35'] = {
	f: Ops.Gl.MeshInstancer_v4,
	objName: 'Ops.Gl.MeshInstancer_v4'
  },
  Ops.Trigger.TriggerOnce = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inTriggerButton('Exec'),
	n = e.inTriggerButton('Reset'),
	a = e.outTrigger('Next');
	var i = e.outValue('Was Triggered'),
	o = !1;
	e.toWorkPortsNeedToBeLinked(t),
	n.onTriggered = function () {
	  o = !1,
	  i.set(o)
	},
	t.onTriggered = function () {
	  o || (o = !0, a.trigger(), i.set(o))
	}
  },
  Ops.Trigger.TriggerOnce.prototype = new CABLES.Op,
  CABLES.OPS['cf3544e4-e392-432b-89fd-fcfb5c974388'] = {
	f: Ops.Trigger.TriggerOnce,
	objName: 'Ops.Trigger.TriggerOnce'
  },
  Ops.Gl.Meshes.Cube_v2 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inTrigger('Render'),
	n = e.inValueBool('Render Mesh', !0),
	a = e.inValue('Width', 1),
	i = e.inValue('Length', 1),
	o = e.inValue('Height', 1),
	r = e.inValueBool('Center', !0),
	s = e.inSwitch('Mapping', [
	  'Side',
	  'Cube +-'
	], 'Side'),
	l = e.inValue('Bias', 0),
	c = e.inValueBool('Flip X', !0),
	d = e.inValueBool('Top', !0),
	u = e.inValueBool('Bottom', !0),
	f = e.inValueBool('Left', !0),
	h = e.inValueBool('Right', !0),
	g = e.inValueBool('Front', !0),
	p = e.inValueBool('Back', !0),
	m = e.outTrigger('Next'),
	_ = e.outObject('geometry'),
	b = e.patch.cgl;
	e.toWorkPortsNeedToBeLinked(t),
	e.setPortGroup('Mapping', [
	  s,
	  l,
	  c
	]),
	e.setPortGroup('Geometry', [
	  a,
	  o,
	  i,
	  r
	]),
	e.setPortGroup('Sides', [
	  d,
	  u,
	  f,
	  h,
	  g,
	  p
	]);
	let E = null,
	I = null,
	v = !0,
	M = !0;
	function L() {
	  E || (E = new CGL.Geometry('cubemesh')),
	  E.clear();
	  let e = a.get(),
	  t = - 1 * a.get(),
	  n = o.get(),
	  m = - 1 * o.get(),
	  L = i.get(),
	  T = - 1 * i.get();
	  r.get() ? (e *= 0.5, t *= 0.5, n *= 0.5, m *= 0.5, L *= 0.5, T *= 0.5) : (t = 0, m = 0, T = 0),
	  'Side' == s.get() ? function (e, t, n, a, i, o, r) {
		e.vertices = [
		  i,
		  o,
		  a,
		  t,
		  o,
		  a,
		  t,
		  n,
		  a,
		  i,
		  n,
		  a,
		  i,
		  o,
		  r,
		  i,
		  n,
		  r,
		  t,
		  n,
		  r,
		  t,
		  o,
		  r,
		  i,
		  n,
		  r,
		  i,
		  n,
		  a,
		  t,
		  n,
		  a,
		  t,
		  n,
		  r,
		  i,
		  o,
		  r,
		  t,
		  o,
		  r,
		  t,
		  o,
		  a,
		  i,
		  o,
		  a,
		  t,
		  o,
		  r,
		  t,
		  n,
		  r,
		  t,
		  n,
		  a,
		  t,
		  o,
		  a,
		  i,
		  o,
		  r,
		  i,
		  o,
		  a,
		  i,
		  n,
		  a,
		  i,
		  n,
		  r
		];
		const s = l.get();
		let d = 1,
		u = 0;
		c.get() && (d = 0, u = 1);
		e.setTexCoords([u + s,
		1 - s,
		d - s,
		1 - s,
		d - s,
		0 + s,
		u + s,
		0 + s,
		d - s,
		1 - s,
		d - s,
		0 + s,
		u + s,
		0 + s,
		u + s,
		1 - s,
		u + s,
		0 + s,
		u + s,
		1 - s,
		d - s,
		1 - s,
		d - s,
		0 + s,
		d - s,
		0 + s,
		u + s,
		0 + s,
		u + s,
		1 - s,
		d - s,
		1 - s,
		d - s,
		1 - s,
		d - s,
		0 + s,
		u + s,
		0 + s,
		u + s,
		1 - s,
		u + s,
		1 - s,
		d - s,
		1 - s,
		d - s,
		0 + s,
		u + s,
		0 + s]),
		e.vertexNormals = new Float32Array([0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0]),
		e.tangents = new Float32Array([ - 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1]),
		e.biTangents = new Float32Array([0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0])
	  }(E, e, n, L, t, m, T) : function (e, t, n, a, i, o, r) {
		e.vertices = [
		  i,
		  o,
		  a,
		  t,
		  o,
		  a,
		  t,
		  n,
		  a,
		  i,
		  n,
		  a,
		  i,
		  o,
		  r,
		  i,
		  n,
		  r,
		  t,
		  n,
		  r,
		  t,
		  o,
		  r,
		  i,
		  n,
		  r,
		  i,
		  n,
		  a,
		  t,
		  n,
		  a,
		  t,
		  n,
		  r,
		  i,
		  o,
		  r,
		  t,
		  o,
		  r,
		  t,
		  o,
		  a,
		  i,
		  o,
		  a,
		  t,
		  o,
		  r,
		  t,
		  n,
		  r,
		  t,
		  n,
		  a,
		  t,
		  o,
		  a,
		  i,
		  o,
		  r,
		  i,
		  o,
		  a,
		  i,
		  n,
		  a,
		  i,
		  n,
		  r
		];
		const s = 0.25,
		d = 1 / 3,
		u = l.get();
		let f = 0;
		c.get() && (f = 1);
		const h = [
		];
		h.push(f + s + u, 2 * d - u, f + 0.5 - u, 2 * d - u, f + 0.5 - u, d + u, f + s + u, d + u, f + 1 - u, 2 * d - u, f + 1 - u, d + u, f + 0.75 + u, d + u, f + 0.75 + u, 2 * d - u),
		c.get() ? h.push(s + u, 0 - u, 0.5 - u, 0 - u, 0.5 - u, 1 * d + u, s + u, 1 * d + u, s + u, 1 + u, s + u, 2 * d - u, 0.5 - u, 2 * d - u, 0.5 - u, 1 + u) : h.push(s + u, 0 + u, s + u, 1 * d - u, 0.5 - u, 1 * d - u, 0.5 - u, 0 + u, s + u, 1 - u, 0.5 - u, 1 - u, 0.5 - u, 2 * d + u, s + u, 2 * d + u);
		h.push(f + 0.75 - u, 1 - d - u, f + 0.75 - u, 1 - 2 * d + u, f + 0.5 + u, 1 - 2 * d + u, f + 0.5 + u, 1 - d - u, f + 0 + u, 1 - d - u, f + 0.25 - u, 1 - d - u, f + 0.25 - u, 1 - 2 * d + u, f + 0 + u, 1 - 2 * d + u),
		e.setTexCoords(h),
		e.vertexNormals = [
		  0,
		  0,
		  1,
		  0,
		  0,
		  1,
		  0,
		  0,
		  1,
		  0,
		  0,
		  1,
		  0,
		  0,
		  - 1,
		  0,
		  0,
		  - 1,
		  0,
		  0,
		  - 1,
		  0,
		  0,
		  - 1,
		  0,
		  1,
		  0,
		  0,
		  1,
		  0,
		  0,
		  1,
		  0,
		  0,
		  1,
		  0,
		  0,
		  - 1,
		  0,
		  0,
		  - 1,
		  0,
		  0,
		  - 1,
		  0,
		  0,
		  - 1,
		  0,
		  1,
		  0,
		  0,
		  1,
		  0,
		  0,
		  1,
		  0,
		  0,
		  1,
		  0,
		  0,
		  - 1,
		  0,
		  0,
		  - 1,
		  0,
		  0,
		  - 1,
		  0,
		  0,
		  - 1,
		  0,
		  0
		],
		e.tangents = new Float32Array([ - 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1]),
		e.biTangents = new Float32Array([0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		- 1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0,
		0,
		1,
		0])
	  }(E, e, n, L, t, m, T),
	  E.verticesIndices = [
	  ],
	  d.get() && E.verticesIndices.push(8, 9, 10, 8, 10, 11),
	  u.get() && E.verticesIndices.push(12, 13, 14, 12, 14, 15),
	  f.get() && E.verticesIndices.push(20, 21, 22, 20, 22, 23),
	  h.get() && E.verticesIndices.push(16, 17, 18, 16, 18, 19),
	  p.get() && E.verticesIndices.push(4, 5, 6, 4, 6, 7),
	  g.get() && E.verticesIndices.push(0, 1, 2, 0, 2, 3),
	  v = 0 !== E.verticesIndices.length,
	  I && I.dispose(),
	  I = new CGL.Mesh(b, E),
	  _.set(null),
	  _.set(E),
	  M = !1
	}
	l.onChange = c.onChange = d.onChange = u.onChange = f.onChange = h.onChange = g.onChange = p.onChange = s.onChange = a.onChange = o.onChange = i.onChange = r.onChange = function () {
	  M = !0
	},
	t.onLinkChanged = function () {
	  t.isLinked() ? L() : _.set(null)
	},
	t.onTriggered = function () {
	  M && L(),
	  n.get() && I && v && I.render(b.getShader()),
	  m.trigger()
	},
	e.preRender = function () {
	  L(),
	  I.render(b.getShader())
	},
	e.onDelete = function () {
	  I && I.dispose()
	}
  },
  Ops.Gl.Meshes.Cube_v2.prototype = new CABLES.Op,
  CABLES.OPS['37b92ba4-cea5-42ae-bf28-a513ca28549c'] = {
	f: Ops.Gl.Meshes.Cube_v2,
	objName: 'Ops.Gl.Meshes.Cube_v2'
  },
  Ops.Array.Array_v2 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inValueInt('Array length', 10),
	n = e.inSwitch('Mode select', [
	  'Number',
	  '1,2,3,4',
	  '0-1',
	  '1-0'
	], 'Number'),
	a = e.inValueFloat('Default Value'),
	i = e.outArray('Array'),
	o = e.outNumber('Array length out');
	var r = [
	],
	s = 0;
	const l = 0,
	c = 1,
	d = 2,
	u = 3;
	function f() {
	  var t = n.get();
	  'Number' === t ? s = l : '1,2,3,4' === t ? s = c : '0-1' === t ? s = d : '1-0' === t && (s = u),
	  s === l ? a.setUiAttribs({
		greyout: !1
	  }) : s === c ? a.setUiAttribs({
		greyout: !0
	  }) : s === d ? a.setUiAttribs({
		greyout: !0
	  }) : s === u && a.setUiAttribs({
		greyout: !0
	  }),
	  e.setUiAttrib({
		extendTitle: n.get()
	  }),
	  h()
	}
	function h() {
	  r.length = 0;
	  var e,
	  n = t.get(),
	  f = a.get();
	  if (s === l) for (e = 0; e < n; e++) r[e] = f;
	   else if (s === c) for (e = 0; e < n; e++) r[e] = e;
	   else if (s === d) for (e = 0; e < n; e++) r[e] = e / n;
	   else if (s === u) for (e = 0; e < n; e++) r[e] = 1 - e / n;
	  i.set(null),
	  i.set(r),
	  o.set(r.length)
	}
	f(),
	a.onChange = t.onChange = function () {
	  h()
	},
	n.onChange = f,
	h()
  },
  Ops.Array.Array_v2.prototype = new CABLES.Op,
  CABLES.OPS['ca9219d2-9f06-4516-9cf2-98e61f84d4bb'] = {
	f: Ops.Array.Array_v2,
	objName: 'Ops.Array.Array_v2'
  },
  Ops.Gl.Matrix.OrbitControls = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inTrigger('render'),
	n = e.inValueFloat('min distance'),
	a = e.inValueFloat('max distance'),
	i = e.inValue('min rot y', 0),
	o = e.inValue('max rot y', 0),
	r = e.inValue('initial radius', 0),
	s = e.inValueSlider('initial axis y'),
	l = e.inValueSlider('initial axis x'),
	c = e.inValueFloat('mul'),
	d = e.inValueSlider('Smoothness', 1),
	u = e.inValue('Speed X', 1),
	f = e.inValue('Speed Y', 1),
	h = e.inValueBool('Active', !0),
	g = e.inValueBool('Allow Panning', !0),
	p = e.inValueBool('Allow Zooming', !0),
	m = e.inValueBool('Allow Rotation', !0),
	_ = e.inValueBool('restricted', !0),
	b = e.inValueBool('Pointerlock', !1),
	E = e.outTrigger('trigger'),
	I = e.outValue('radius'),
	v = e.outValue('Rot X'),
	M = e.outValue('Rot Y'),
	L = e.inTriggerButton('Reset');
	e.setPortGroup('Initial Values', [
	  s,
	  l,
	  r
	]),
	e.setPortGroup('Interaction', [
	  c,
	  d,
	  u,
	  f
	]),
	e.setPortGroup('Boundaries', [
	  i,
	  o,
	  n,
	  a
	]),
	c.set(1),
	n.set(0.05),
	a.set(99999),
	L.onTriggered = Z;
	const T = e.patch.cgl;
	let S = vec3.create();
	const A = vec3.create(),
	D = vec3.create(),
	x = mat4.create(),
	O = (mat4.create(), vec3.create());
	vec3.create();
	s.set(0.5);
	let C = !1,
	N = 5;
	I.set(N);
	let y = 0,
	w = 0,
	P = 0,
	G = 0;
	vec3.set(D, 0, 0, 0),
	vec3.set(A, 0, 1, 0);
	const U = vec3.create(),
	R = vec3.create(),
	F = vec3.create(),
	H = vec3.create();
	let B = 0,
	X = 0,
	k = 1,
	j = null;
	Y(),
	e.onDelete = re;
	let V = !1;
	b.onChange = function () {
	  V = b.get(),
	  e.log('doLockPointer', V)
	};
	const z = Math.PI,
	W = 2 * Math.PI;
	function Z() {
	  let e = 0;
	  B % W < - z ? (e = - W, B %= - W) : B % W > z ? (e = W, B %= W) : B %= W,
	  X %= Math.PI,
	  vec3.set(O, 0, 0, 0),
	  vec3.set(D, 0, 0, 0),
	  vec3.set(A, 0, 1, 0),
	  P = l.get() * Math.PI * 2 + e,
	  G = s.get() - 0.5,
	  N = r.get(),
	  S = q(G)
	}
	function Y() {
	  k = 10 * d.get() + 1
	}
	d.onChange = Y;
	let J = !0;
	function K(e, t) {
	  return J ? t : e + (t - e) / k
	}
	let Q = 0;
	function q(e) {
	  const t = c.get();
	  N < n.get() * t && (N = n.get() * t),
	  N > a.get() * t && (N = a.get() * t),
	  I.set(N * t);
	  let i = 0;
	  const o = vec3.create();
	  return i = 360 * e / 2 * CGL.DEG2RAD,
	  vec3.set(o, Math.cos(i) * N * t, Math.sin(i) * N * t, 0),
	  o
	}
	function $(e) {
	  if (!C) return;
	  const t = e.clientX,
	  n = e.clientY;
	  let a = t - y,
	  i = n - w;
	  V && (a = e.movementX * c.get(), i = e.movementY * c.get()),
	  a *= u.get(),
	  i *= f.get(),
	  2 == e.buttons && g.get() ? (O[2] += 0.01 * a * c.get(), O[1] += 0.01 * i * c.get()) : 4 == e.buttons && p.get() ? (N += 0.05 * i, S = q(G)) : m.get() && (P += 0.003 * a, G += 0.002 * i, _.get() && (G > 0.5 && (G = 0.5), G < - 0.5 && (G = - 0.5))),
	  y = t,
	  w = n
	}
	function ee(t) {
	  y = t.clientX,
	  w = t.clientY,
	  C = !0;
	  try {
		j.setPointerCapture(t.pointerId)
	  } catch (e) {
	  }
	  if (V) {
		const t = e.patch.cgl.canvas;
		t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock,
		t.requestPointerLock ? t.requestPointerLock() : e.warn('no requestPointerLock found'),
		document.addEventListener('pointerlockchange', ne, !1),
		document.addEventListener('mozpointerlockchange', ne, !1),
		document.addEventListener('webkitpointerlockchange', ne, !1)
	  }
	}
	function te(e) {
	  C = !1;
	  try {
		j.releasePointerCapture(e.pointerId)
	  } catch (e) {
	  }
	  V && (document.removeEventListener('pointerlockchange', ne, !1), document.removeEventListener('mozpointerlockchange', ne, !1), document.removeEventListener('webkitpointerlockchange', ne, !1), document.exitPointerLock && document.exitPointerLock(), document.removeEventListener('mousemove', b, !1))
	}
	function ne() {
	  const t = e.patch.cgl.canvas;
	  document.pointerLockElement !== t && document.mozPointerLockElement !== t && document.webkitPointerLockElement !== t || document.addEventListener('mousemove', $, !1)
	}
	function ae(e) {
	}
	t.onTriggered = function () {
	  T.pushViewMatrix(),
	  B = K(B, P);
	  let e = 180 * ((X = K(X, G)) + 0.5);
	  0 !== i.get() && e < i.get() ? (e = i.get(), X = Q) : 0 !== o.get() && e > o.get() ? (e = o.get(), X = Q) : Q = X;
	  const t = B * CGL.RAD2DEG;
	  M.set(e),
	  v.set(t),
	  function (e, t) {
		const i = c.get();
		N < n.get() * i && (N = n.get() * i);
		N > a.get() * i && (N = a.get() * i);
		I.set(N * i);
		let o = 0;
		o = 360 * t / 2 * CGL.DEG2RAD,
		vec3.set(e, Math.cos(o) * N * i, Math.sin(o) * N * i, 0)
	  }(S, X),
	  vec3.add(U, S, O),
	  vec3.add(F, D, O),
	  R[0] = K(R[0], U[0]),
	  R[1] = K(R[1], U[1]),
	  R[2] = K(R[2], U[2]),
	  H[0] = K(H[0], F[0]),
	  H[1] = K(H[1], F[1]),
	  H[2] = K(H[2], F[2]);
	  vec3.create();
	  mat4.lookAt(x, R, H, A),
	  mat4.rotate(x, x, B, A),
	  mat4.multiply(T.vMatrix, T.vMatrix, x),
	  E.trigger(),
	  T.popViewMatrix(),
	  J = !1
	},
	r.onChange = function () {
	  N = r.get(),
	  Z()
	},
	l.onChange = function () {
	  B = P = l.get() * Math.PI * 2
	},
	s.onChange = function () {
	  X = G = s.get() - 0.5,
	  S = q(G)
	};
	const ie = function (e) {
	  if (p.get()) {
		const t = 0.06 * CGL.getWheelSpeed(e);
		N += 1.2 * parseFloat(t),
		S = q(G)
	  }
	};
	function oe() {
	  j.addEventListener('pointermove', $),
	  j.addEventListener('pointerdown', ee),
	  j.addEventListener('pointerup', te),
	  j.addEventListener('pointerleave', te),
	  j.addEventListener('pointerenter', ae),
	  j.addEventListener('contextmenu', function (e) {
		e.preventDefault()
	  }),
	  j.addEventListener('wheel', ie, {
		passive: !0
	  })
	}
	function re() {
	  j && (j.removeEventListener('pointermove', $), j.removeEventListener('pointerdown', ee), j.removeEventListener('pointerup', te), j.removeEventListener('pointerleave', te), j.removeEventListener('pointerenter', te), j.removeEventListener('wheel', ie))
	}
	var se;
	h.onChange = function () {
	  h.get() ? oe() : re()
	},
	S = q(0),
	se = T.canvas,
	re(),
	j = se,
	oe(),
	oe(),
	l.set(0.25),
	r.set(0.05)
  },
  Ops.Gl.Matrix.OrbitControls.prototype = new CABLES.Op,
  CABLES.OPS['eaf4f7ce-08a3-4d1b-b9f4-ebc0b7b1cde1'] = {
	f: Ops.Gl.Matrix.OrbitControls,
	objName: 'Ops.Gl.Matrix.OrbitControls'
  },
  Ops.Gl.MainLoop = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inValue('FPS Limit', 0),
	n = e.outTrigger('trigger'),
	a = e.outValue('width'),
	i = e.outValue('height'),
	o = e.inValueBool('Reduce FPS not focussed', !0),
	r = e.inValueBool('Reduce FPS loading'),
	s = e.inValueBool('Clear', !0),
	l = e.inValueBool('ClearAlpha', !0),
	c = e.inValueBool('Fullscreen Button', !1),
	d = e.inValueBool('Active', !0),
	u = e.inValueBool('Hires Displays', !1);
	e.onAnimFrame = v,
	u.onChange = function () {
	  u.get() ? e.patch.cgl.pixelDensity = window.devicePixelRatio : e.patch.cgl.pixelDensity = 1,
	  e.patch.cgl.updateSize(),
	  CABLES.UI && gui.setLayout()
	},
	d.onChange = function () {
	  e.patch.removeOnAnimFrame(e),
	  d.get() ? (e.setUiAttrib({
		extendTitle: ''
	  }), e.onAnimFrame = v, e.patch.addOnAnimFrame(e), e.log('adding again!')) : e.setUiAttrib({
		extendTitle: 'Inactive'
	  })
	};
	const f = e.patch.cgl;
	let h = 0,
	g = 0;
	e.patch.cgl || e.uiAttr({
	  error: 'No webgl cgl context'
	});
	const p = vec3.create();
	vec3.set(p, 0, 0, 0);
	const m = vec3.create();
	vec3.set(m, 0, 0, - 2),
	c.onChange = I,
	setTimeout(I, 100);
	let _ = null,
	b = !0,
	E = !0;
	function I() {
	  function t() {
		_ && (_.style.display = 'block')
	  }
	  if (e.patch.cgl.canvas.addEventListener('mouseleave', function () {
		_ && (_.style.display = 'none')
	  }), e.patch.cgl.canvas.addEventListener('mouseenter', t), c.get()) {
		if (!_) {
		  _ = document.createElement('div');
		  const n = e.patch.cgl.canvas.parentElement;
		  n && n.appendChild(_),
		  _.addEventListener('mouseenter', t),
		  _.addEventListener('click', function (e) {
			CABLES.UI && !e.shiftKey ? gui.cycleRendererSize() : f.fullScreen()
		  })
		}
		_.style.padding = '10px',
		_.style.position = 'absolute',
		_.style.right = '5px',
		_.style.top = '5px',
		_.style.width = '20px',
		_.style.height = '20px',
		_.style.cursor = 'pointer',
		_.style['border-radius'] = '40px',
		_.style.background = '#444',
		_.style['z-index'] = '9999',
		_.style.display = 'none',
		_.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:20px;height:20px;" xml:space="preserve" width="512px" height="512px"><g><path d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z" fill="#FFFFFF"/><path d="M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z" fill="#FFFFFF"/><path d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z" fill="#FFFFFF"/><path d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z" fill="#FFFFFF"/></g></svg>'
	  } else _ && (_.style.display = 'none', _.remove(), _ = null)
	}
	function v(c) {
	  if (!d.get()) return;
	  if (f.aborted || 0 === f.canvas.clientWidth || 0 === f.canvas.clientHeight) return;
	  const u = performance.now();
	  e.patch.config.fpsLimit = function () {
		if (r.get() && e.patch.loading.getProgress() < 1) return 5;
		if (o.get()) {
		  if (!E) return 10;
		  if (!b) return 30
		}
		return t.get()
	  }(),
	  - 1 != f.canvasWidth ? (f.canvasWidth == a.get() && f.canvasHeight == i.get() || (a.set(f.canvasWidth), i.set(f.canvasHeight)), CABLES.now() - g > 1000 && (CGL.fpsReport = CGL.fpsReport || [
	  ], e.patch.loading.getProgress() >= 1 && 0 !== g && CGL.fpsReport.push(h), h = 0, g = CABLES.now()), CGL.MESH.lastShader = null, CGL.MESH.lastMesh = null, f.renderStart(f, p, m), s.get() && (f.gl.clearColor(0, 0, 0, 1), f.gl.clear(f.gl.COLOR_BUFFER_BIT | f.gl.DEPTH_BUFFER_BIT)), n.trigger(), CGL.MESH.lastMesh && CGL.MESH.lastMesh.unBind(), CGL.Texture.previewTexture && (CGL.Texture.texturePreviewer || (CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(f)), CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture)), f.renderEnd(f), l.get() && (f.gl.clearColor(1, 1, 1, 1), f.gl.colorMask(!1, !1, !1, !0), f.gl.clear(f.gl.COLOR_BUFFER_BIT), f.gl.colorMask(!0, !0, !0, !0)), f.frameStore.phong || (f.frameStore.phong = {
	  }), h++, CGL.profileData.profileMainloopMs = performance.now() - u) : f.setCanvas(e.patch.config.glCanvasId)
	}
	window.addEventListener('blur', () =>{
	  b = !1
	}),
	window.addEventListener('focus', () =>{
	  b = !0
	}),
	document.addEventListener('visibilitychange', () =>{
	  E = !document.hidden
	}),
	e.onDelete = function () {
	  f.gl.clearColor(0, 0, 0, 0),
	  f.gl.clear(f.gl.COLOR_BUFFER_BIT | f.gl.DEPTH_BUFFER_BIT)
	}
  },
  Ops.Gl.MainLoop.prototype = new CABLES.Op,
  CABLES.OPS['b0472a1d-db16-4ba6-8787-f300fbdc77bb'] = {
	f: Ops.Gl.MainLoop,
	objName: 'Ops.Gl.MainLoop'
  },
  Ops.Array.ArrayPack3 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inTrigger('Trigger in'),
	n = e.inArray('Array 1'),
	a = e.inArray('Array 2'),
	i = e.inArray('Array 3'),
	o = e.outTrigger('Trigger out'),
	r = e.outArray('Array out'),
	s = e.outValue('Num Points'),
	l = e.outNumber('Array length');
	let c = [
	],
	d = [
	],
	u = !0;
	t.onTriggered = function () {
	  let t = n.get(),
	  f = a.get(),
	  h = i.get();
	  if (!t && !f && !h) return r.set(null),
	  void s.set(0);
	  if (u) {
		let n = 0;
		if (!t || !f || !h) {
		  if (t ? n = t.length : f ? n = f.length : h && (n = h.length), d.length != n) for (var g = 0; g < n; g++) d[g] = 0;
		  t || (t = d),
		  f || (f = d),
		  h || (h = d)
		}
		if (t.length !== f.length || f.length !== h.length) return void e.setUiError('arraylen', 'Arrays do not have the same length !');
		e.setUiError('arraylen', null),
		c.length = t.length;
		for (var g = 0; g < t.length; g++) c[3 * g + 0] = t[g],
		c[3 * g + 1] = f[g],
		c[3 * g + 2] = h[g];
		u = !1,
		r.set(null),
		r.set(c),
		s.set(c.length / 3),
		l.set(c.length)
	  }
	  o.trigger()
	},
	n.onChange = a.onChange = i.onChange = function () {
	  u = !0
	}
  },
  Ops.Array.ArrayPack3.prototype = new CABLES.Op,
  CABLES.OPS['2bcf32fe-3cbd-48fd-825a-61255bebda9b'] = {
	f: Ops.Array.ArrayPack3,
	objName: 'Ops.Array.ArrayPack3'
  },
  Ops.Value.Number = function () {
	CABLES.Op.apply(this, arguments);
	const e = this.inValueFloat('value'),
	t = this.outValue('result');
	e.onChange = function () {
	  t.set(e.get())
	}
  },
  Ops.Value.Number.prototype = new CABLES.Op,
  CABLES.OPS['8fb2bb5d-665a-4d0a-8079-12710ae453be'] = {
	f: Ops.Value.Number,
	objName: 'Ops.Value.Number'
  },
  Ops.Anim.Timer_v2 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inValue('Speed', 1),
	n = e.inValueBool('Play', !0),
	a = e.inTriggerButton('Reset'),
	i = e.inValueBool('Sync to timeline', !1),
	o = e.outValue('Time');
	e.setPortGroup('Controls', [
	  n,
	  a,
	  t
	]);
	const r = new CABLES.Timer;
	let s = null,
	l = 0,
	c = !1;
	function d() {
	  n.get() ? (r.play(), e.patch.addOnAnimFrame(e)) : (r.pause(), e.patch.removeOnAnimFrame(e))
	}
	n.onChange = d,
	d(),
	a.onTriggered = function () {
	  l = 0,
	  s = null,
	  r.setTime(0),
	  o.set(0)
	},
	i.onChange = function () {
	  c = i.get(),
	  n.setUiAttribs({
		greyout: c
	  }),
	  a.setUiAttribs({
		greyout: c
	  })
	},
	e.onAnimFrame = function (e) {
	  if (r.isPlaying()) if (void 0 !== CABLES.overwriteTime) console.log('overwritten time!', CABLES.overwriteTime),
	  o.set(CABLES.overwriteTime * t.get());
	   else if (c) o.set(e * t.get());
	   else {
		r.update();
		const e = r.get();
		if (null === s) return void (s = e);
		const n = Math.abs(e - s);
		s = e,
		(l += n * t.get()) != l && (l = 0),
		o.set(l)
	  }
	}
  },
  Ops.Anim.Timer_v2.prototype = new CABLES.Op,
  CABLES.OPS['aac7f721-208f-411a-adb3-79adae2e471a'] = {
	f: Ops.Anim.Timer_v2,
	objName: 'Ops.Anim.Timer_v2'
  },
  Ops.Array.ArrayMultiply = function () {
	CABLES.Op.apply(this, arguments);
	var e = this.inArray('In'),
	t = this.inValue('Value', 1),
	n = this.outArray('Result'),
	a = [
	];
	n.set(a),
	e.onChange = t.onChange = e.onChange = function () {
	  var i = e.get();
	  if (i) {
		var o = t.get();
		a.length != i.length && (a.length = i.length);
		for (var r = 0; r < i.length; r++) a[r] = i[r] * o;
		n.set(null),
		n.set(a)
	  }
	}
  },
  Ops.Array.ArrayMultiply.prototype = new CABLES.Op,
  CABLES.OPS['a01c344b-4129-4b01-9c8f-36cefe86d7cc'] = {
	f: Ops.Array.ArrayMultiply,
	objName: 'Ops.Array.ArrayMultiply'
  },
  Ops.Math.Sine = function () {
	CABLES.Op.apply(this, arguments);
	const e = this;
	var t = e.inValue('value'),
	n = e.inValue('phase', 0),
	a = e.inValue('frequency', 1),
	i = e.inValue('amplitude', 1),
	o = e.inValueBool('asine', !1),
	r = e.outValue('result'),
	s = Math.sin;
	n.onChange = t.onChange = function () {
	  r.set(i.get() * s(t.get() * a.get() + n.get()))
	},
	o.onChange = function () {
	  s = o.get() ? Math.asin : Math.sin
	}
  },
  Ops.Math.Sine.prototype = new CABLES.Op,
  CABLES.OPS['d24da018-9f3d-428b-85c9-6ff14d77548b'] = {
	f: Ops.Math.Sine,
	objName: 'Ops.Math.Sine'
  },
  Ops.Math.Sqrt = function () {
	CABLES.Op.apply(this, arguments);
	const e = this.inValue('number'),
	t = this.outValue('result');
	e.onChange = function () {
	  let n = Math.sqrt(e.get());
	  isNaN(n) && (n = 0),
	  t.set(n)
	}
  },
  Ops.Math.Sqrt.prototype = new CABLES.Op,
  CABLES.OPS['dec567c3-231d-4146-964d-891fde8924f1'] = {
	f: Ops.Math.Sqrt,
	objName: 'Ops.Math.Sqrt'
  },
  Ops.Math.Divide = function () {
	CABLES.Op.apply(this, arguments);
	const e = this.inValueFloat('number1', 1),
	t = this.inValueFloat('number2', 2),
	n = this.outValue('result');
	function a() {
	  n.set(e.get() / t.get())
	}
	e.onChange = t.onChange = a,
	a()
  },
  Ops.Math.Divide.prototype = new CABLES.Op,
  CABLES.OPS['86fcfd8c-038d-4b91-9820-a08114f6b7eb'] = {
	f: Ops.Math.Divide,
	objName: 'Ops.Math.Divide'
  },
  Ops.Array.ArraySum = function () {
	CABLES.Op.apply(this, arguments);
	var e = this.inArray('In'),
	t = this.inValue('Value', 1),
	n = this.outArray('Result'),
	a = [
	];
	n.set(a),
	t.onChange = e.onChange = function () {
	  var i = e.get();
	  if (i) {
		var o = t.get();
		a.length != i.length && (a.length = i.length);
		for (var r = 0; r < i.length; r++) a[r] = i[r] + o;
		n.set(null),
		n.set(a)
	  }
	}
  },
  Ops.Array.ArraySum.prototype = new CABLES.Op,
  CABLES.OPS['c6b5bf63-0be8-4eea-acc0-9d32973e665a'] = {
	f: Ops.Array.ArraySum,
	objName: 'Ops.Array.ArraySum'
  },
  Ops.Math.Modulo = function () {
	CABLES.Op.apply(this, arguments);
	const e = this.outValue('result'),
	t = this.inValueFloat('number1'),
	n = this.inValueFloat('number2'),
	a = this.inValueBool('pingpong');
	var i = r;
	function o() {
	  var a = n.get(),
	  o = t.get();
	  e.set(i(o, a))
	}
	function r(e, t) {
	  var n = (e % t + t) % t;
	  return n != n && (n = 0),
	  n
	}
	function s(e, t) {
	  var n = (e % t + t) % t * 2;
	  return n > t ? 2 * t - n : n
	}
	t.onChange = o,
	n.onChange = o,
	t.set(1),
	n.set(2),
	a.onChange = function () {
	  i = a.get() ? s : r
	}
  },
  Ops.Math.Modulo.prototype = new CABLES.Op,
  CABLES.OPS['ebc13b25-3705-4265-8f06-5f985b6a7bb1'] = {
	f: Ops.Math.Modulo,
	objName: 'Ops.Math.Modulo'
  },
  Ops.Math.MapRange = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.outValue('result');
	var n = e.inValueFloat('value'),
	a = e.inValueFloat('old min'),
	i = e.inValueFloat('old max'),
	o = e.inValueFloat('new min'),
	r = e.inValueFloat('new max'),
	s = e.inValueSelect('Easing', [
	  'Linear',
	  'Smoothstep',
	  'Smootherstep'
	], 'Linear');
	e.setPortGroup('Input Range', [
	  a,
	  i
	]),
	e.setPortGroup('Output Range', [
	  o,
	  r
	]);
	var l = 0,
	c = 0;
	function d() {
	  if (n.get() >= Math.max(i.get(), a.get())) t.set(r.get());
	   else if (n.get() <= Math.min(i.get(), a.get())) t.set(o.get());
	   else {
		var e = o.get(),
		s = r.get(),
		d = a.get(),
		u = i.get(),
		f = n.get(),
		h = !1,
		g = Math.min(d, u),
		p = Math.max(d, u);
		g != d && (h = !0);
		var m = !1,
		_ = Math.min(e, s),
		b = Math.max(e, s);
		_ != e && (m = !0);
		var E = 0;
		E = h ? (p - f) * (b - _) / (p - g) : (f - g) * (b - _) / (p - g),
		c = m ? b - E : E + _,
		0 === l ? t.set(c) : 1 == l ? (f = Math.max(0, Math.min(1, (c - e) / (s - e))), t.set(e + f * f * (3 - 2 * f) * (s - e))) : 2 == l && (f = Math.max(0, Math.min(1, (c - e) / (s - e))), t.set(e + f * f * f * (f * (6 * f - 15) + 10) * (s - e)))
	  }
	}
	s.onChange = function () {
	  l = 'Smoothstep' == s.get() ? 1 : 'Smootherstep' == s.get() ? 2 : 0
	},
	n.set(0),
	a.set(0),
	i.set(1),
	o.set( - 1),
	r.set(1),
	n.onChange = d,
	a.onChange = d,
	i.onChange = d,
	o.onChange = d,
	r.onChange = d,
	t.set(0),
	d()
  },
  Ops.Math.MapRange.prototype = new CABLES.Op,
  CABLES.OPS['2617b407-60a0-4ff6-b4a7-18136cfa7817'] = {
	f: Ops.Math.MapRange,
	objName: 'Ops.Math.MapRange'
  },
  Ops.Math.Pi = function () {
	CABLES.Op.apply(this, arguments);
	const e = this.inValueFloat('Multiply amount', 1);
	var t = this.outValue('Pi', Math.PI);
	e.onChange = function () {
	  t.setValue(Math.PI * e.get())
	}
  },
  Ops.Math.Pi.prototype = new CABLES.Op,
  CABLES.OPS['311e8179-9a7c-43de-9eb2-84577d702974'] = {
	f: Ops.Math.Pi,
	objName: 'Ops.Math.Pi'
  },
  Ops.Array.ArrayMathArray = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inArray('array 0'),
	n = e.inArray('array 1'),
	a = e.inSwitch('Math function', [
	  '+',
	  '-',
	  '*',
	  '/',
	  '%',
	  'min',
	  'max'
	], '+'),
	i = e.outArray('Array result'),
	o = e.outNumber('Array length');
	let r;
	const s = [
	];
	function l() {
	  const t = a.get();
	  '+' === t ? r = function (e, t) {
		return e + t
	  }
	   : '-' === t ? r = function (e, t) {
		return e - t
	  }
	   : '*' === t ? r = function (e, t) {
		return e * t
	  }
	   : '/' === t ? r = function (e, t) {
		return e / t
	  }
	   : '%' === t ? r = function (e, t) {
		return e % t
	  }
	   : 'min' === t ? r = function (e, t) {
		return Math.min(e, t)
	  }
	   : 'max' === t && (r = function (e, t) {
		return Math.max(e, t)
	  }),
	  c(),
	  e.setUiAttrib({
		extendTitle: t
	  })
	}
	function c() {
	  const a = t.get(),
	  l = n.get();
	  if (s.length = 0, !a || !l) return i.set(null),
	  void o.set(0);
	  if (a.length !== l.length) return i.set(null),
	  o.set(0),
	  void e.setUiError('errorlength', 'Arrays do not have the same length !');
	  e.setUiError('errorlength', null),
	  s.length = a.length;
	  let c = 0;
	  for (c = 0; c < a.length; c++) s[c] = r(a[c], l[c]);
	  i.set(null),
	  o.set(s.length),
	  i.set(s)
	}
	e.toWorkPortsNeedToBeLinked(n, t),
	a.onChange = l,
	t.onChange = n.onChange = c,
	l()
  },
  Ops.Array.ArrayMathArray.prototype = new CABLES.Op,
  CABLES.OPS['f31a1764-ce14-41de-9b3f-dc2fe249bb52'] = {
	f: Ops.Array.ArrayMathArray,
	objName: 'Ops.Array.ArrayMathArray'
  },
  Ops.Gl.Matrix.Transform = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inTrigger('render'),
	n = e.inValue('posX', 0),
	a = e.inValue('posY', 0),
	i = e.inValue('posZ', 0),
	o = e.inValue('scale', 1),
	r = e.inValue('rotX', 0),
	s = e.inValue('rotY', 0),
	l = e.inValue('rotZ', 0),
	c = e.outTrigger('trigger');
	e.setPortGroup('Rotation', [
	  r,
	  s,
	  l
	]),
	e.setPortGroup('Position', [
	  n,
	  a,
	  i
	]),
	e.setPortGroup('Scale', [
	  o
	]),
	e.setUiAxisPorts(n, a, i);
	const d = e.patch.cgl,
	u = vec3.create(),
	f = vec3.create(),
	h = mat4.create();
	mat4.identity(h);
	let g = !1,
	p = !1,
	m = !0,
	_ = !0,
	b = !0;
	function E() {
	  mat4.identity(h),
	  p && mat4.translate(h, h, u),
	  0 !== r.get() && mat4.rotateX(h, h, r.get() * CGL.DEG2RAD),
	  0 !== s.get() && mat4.rotateY(h, h, s.get() * CGL.DEG2RAD),
	  0 !== l.get() && mat4.rotateZ(h, h, l.get() * CGL.DEG2RAD),
	  g && mat4.scale(h, h, f),
	  b = !1
	}
	r.onChange = s.onChange = l.onChange = function () {
	  b = !0
	},
	n.onChange = a.onChange = i.onChange = function () {
	  m = !0
	},
	o.onChange = function () {
	  _ = !0
	},
	t.onTriggered = function () {
	  let t = !1;
	  m && (!function () {
		p = !1,
		(0 !== n.get() || 0 !== a.get() || 0 !== i.get()) && (p = !0);
		vec3.set(u, n.get(), a.get(), i.get()),
		m = !1
	  }(), t = !0),
	  _ && (g = !0, vec3.set(f, o.get(), o.get(), o.get()), _ = !1, t = !0),
	  b && (t = !0),
	  t && E(),
	  d.pushModelMatrix(),
	  mat4.multiply(d.mMatrix, d.mMatrix, h),
	  c.trigger(),
	  d.popModelMatrix(),
	  CABLES.UI && CABLES.UI.showCanvasTransforms && gui.setTransform(e.id, n.get(), a.get(), i.get()),
	  e.isCurrentUiOp() && gui.setTransformGizmo({
		posX: n,
		posY: a,
		posZ: i
	  })
	},
	e.transform3d = function () {
	  return {
		pos: [
		  n,
		  a,
		  i
		]
	  }
	},
	E()
  },
  Ops.Gl.Matrix.Transform.prototype = new CABLES.Op,
  CABLES.OPS['650baeb1-db2d-4781-9af6-ab4e9d4277be'] = {
	f: Ops.Gl.Matrix.Transform,
	objName: 'Ops.Gl.Matrix.Transform'
  },
  Ops.Math.Sum = function () {
	CABLES.Op.apply(this, arguments);
	const e = this.inValueFloat('number1', 1),
	t = this.inValueFloat('number2', 1),
	n = this.outValue('result');
	function a() {
	  const a = e.get() + t.get();
	  isNaN(a) || n.set(a)
	}
	e.onChange = t.onChange = a,
	a()
  },
  Ops.Math.Sum.prototype = new CABLES.Op,
  CABLES.OPS['c8fb181e-0b03-4b41-9e55-06b6267bc634'] = {
	f: Ops.Math.Sum,
	objName: 'Ops.Math.Sum'
  },
  Ops.Gl.TextureEffects.Stripes_v3 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inTrigger('Render'),
	n = CGL.TextureEffect.AddBlendSelect(e, 'Blend Mode', 'normal'),
	a = e.inValueSlider('Amount', 1),
	i = e.inValue('Num', 5),
	o = e.inValue('Width', 0.5),
	r = e.inValueSlider('Rotate', 0),
	s = e.inValue('Offset', 0),
	l = e.inValueBool('Gradients'),
	c = e.inValueBool('Circular'),
	d = e.inValueBool('Invert'),
	u = e.inValueSlider('r', Math.random()),
	f = e.inValueSlider('g', Math.random()),
	h = e.inValueSlider('b', Math.random()),
	g = e.outTrigger('trigger');
	function p() {
	  _.toggleDefine('STRIPES_SMOOTHED', l.get()),
	  _.toggleDefine('CIRCULAR', c.get()),
	  _.toggleDefine('INVERT', d.get())
	}
	u.setUiAttribs({
	  colorPick: !0
	}),
	l.onChange = p,
	c.onChange = p,
	d.onChange = p;
	const m = e.patch.cgl,
	_ = new CGL.Shader(m, 'textureeffect stripes');
	_.setSource(_.getDefaultVertexShader(), 'IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float amount;\nUNI float num;\nUNI float width;\nUNI float axis;\nUNI float offset;\nUNI float rotate;\n\nUNI float r;\nUNI float g;\nUNI float b;\n\n\n{{CGL.BLENDMODES}}\n\n#define PI 3.14159265\n#define TAU (2.0*PI)\n\nvoid pR(inout vec2 p, float a)\n{\n\tp = cos(a)*p + sin(a)*vec2(p.y, -p.x);\n}\nvoid main()\n{\n    vec2 uv = texCoord-0.5;\n    pR(uv.xy,rotate*TAU);\n    float stripe=0.0;\n\n    float v=0.0;\n    float c=1.0;\n    v=uv.y;\n    v+=offset;\n\n    float m=mod(v,1.0/num);\n\n    #ifdef CIRCULAR\n        m=mod((length(uv)+offset)*1.5,1.0/num);\n    #endif\n\n    float rm=width*2.0*1.0/num/2.0;\n\n    if(m>rm)\n       stripe=mix(stripe,1.,1.0);\n\n    #ifdef STRIPES_SMOOTHED\n       m*=2.0;\n       stripe= r * smoothstep(0.,1., abs((((m-rm) )/(rm))));\n    #endif\n\n    #ifdef INVERT\n    stripe=1.0-stripe;\n    #endif\n\n    //blend section\n    vec4 col=vec4(vec3(r,g,b),1.0);\n    vec4 base=texture(tex,texCoord);\n\n    outColor=cgl_blend(base,col,amount*stripe);\n}\n');
	new CGL.Uniform(_, 't', 'tex', 0),
	new CGL.Uniform(_, 'f', 'amount', a),
	new CGL.Uniform(_, 'f', 'rotate', r),
	new CGL.Uniform(_, 'f', 'num', i),
	new CGL.Uniform(_, 'f', 'width', o),
	new CGL.Uniform(_, 'f', 'offset', s),
	new CGL.Uniform(_, 'f', 'r', u),
	new CGL.Uniform(_, 'f', 'g', f),
	new CGL.Uniform(_, 'f', 'b', h);
	CGL.TextureEffect.setupBlending(e, _, n, a),
	t.onTriggered = function () {
	  CGL.TextureEffect.checkOpInEffect(e) && (m.pushShader(_), m.currentTextureEffect.bind(), m.setTexture(0, m.currentTextureEffect.getCurrentSourceTexture().tex), m.currentTextureEffect.finish(), m.popShader(), g.trigger())
	}
  },
  Ops.Gl.TextureEffects.Stripes_v3.prototype = new CABLES.Op,
  CABLES.OPS['1943e09f-014c-4411-b39e-5db9d49a4972'] = {
	f: Ops.Gl.TextureEffects.Stripes_v3,
	objName: 'Ops.Gl.TextureEffects.Stripes_v3'
  },
  Ops.Gl.TextureEffects.ImageCompose = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inTrigger('render'),
	n = e.inBool('use viewport size'),
	a = e.inValueInt('width'),
	i = e.inValueInt('height'),
	o = e.inSwitch('filter', [
	  'nearest',
	  'linear',
	  'mipmap'
	], 'linear'),
	r = e.inValueSelect('wrap', [
	  'clamp to edge',
	  'repeat',
	  'mirrored repeat'
	]),
	s = e.inValueBool('HDR'),
	l = e.outTrigger('trigger'),
	c = e.outTexture('texture_out'),
	d = e.inValueSlider('Background Alpha', 0),
	u = e.outValue('Aspect Ratio');
	e.setPortGroup('Texture Size', [
	  n,
	  a,
	  i
	]),
	e.setPortGroup('Texture Settings', [
	  r,
	  o,
	  s
	]);
	const f = e.patch.cgl;
	c.set(CGL.Texture.getEmptyTexture(f));
	let h = null,
	g = null,
	p = 8,
	m = 8;
	const _ = [
	  0,
	  0,
	  0,
	  0
	];
	let b = !0;
	const E = ''.endl() + 'uniform float a;'.endl() + 'void main()'.endl() + '{'.endl() + '   outColor= vec4(0.0,0.0,0.0,a);'.endl() + '}',
	I = new CGL.Shader(f, 'imgcompose bg');
	I.setSource(I.getDefaultVertexShader(), E);
	new CGL.Uniform(I, 'f', 'a', d);
	let v = CGL.Texture.FILTER_LINEAR,
	M = CGL.Texture.WRAP_CLAMP_TO_EDGE;
	function L() {
	  h && h.delete(),
	  g && g.delete(),
	  h = new CGL.TextureEffect(f, {
		isFloatingPointTexture: s.get()
	  }),
	  g = new CGL.Texture(f, {
		name: 'image compose',
		isFloatingPointTexture: s.get(),
		filter: v,
		wrap: M,
		width: Math.ceil(a.get()),
		height: Math.ceil(i.get())
	  }),
	  h.setSourceTexture(g),
	  c.set(CGL.Texture.getEmptyTexture(f)),
	  b = !1
	}
	function T() {
	  h || L(),
	  n.get() ? (p = f.getViewPort() [2], m = f.getViewPort() [3]) : (p = Math.ceil(a.get()), m = Math.ceil(i.get())),
	  p == g.width && m == g.height || 0 === p || 0 === m || (i.set(m), a.set(p), g.setSize(p, m), u.set(p / m), h.setSourceTexture(g), c.set(CGL.Texture.getEmptyTexture(f)), c.set(g)),
	  c.get() && v != CGL.Texture.FILTER_NEAREST ? c.get().isPowerOfTwo() ? e.setUiError('hintnpot', null, 0) : e.setUiError('hintnpot', 'texture dimensions not power of two! - texture filtering when scaling will not work on ios devices.', 0) : e.setUiError('hintnpot', null, 0)
	}
	function S() {
	  n.get() ? (a.setUiAttribs({
		greyout: !0
	  }), i.setUiAttribs({
		greyout: !0
	  })) : (a.setUiAttribs({
		greyout: !1
	  }), i.setUiAttribs({
		greyout: !1
	  }))
	}
	s.onChange = function () {
	  b = !0
	},
	n.onChange = function () {
	  S(),
	  n.get() ? (a.onChange = null, i.onChange = null) : (a.onChange = T, i.onChange = T),
	  T()
	},
	e.preRender = function () {
	  A(),
	  I.bind()
	};
	var A = function () {
	  h && !b || L();
	  const e = f.getViewPort();
	  _[0] = e[0],
	  _[1] = e[1],
	  _[2] = e[2],
	  _[3] = e[3],
	  f.gl.blendFunc(f.gl.SRC_ALPHA, f.gl.ONE_MINUS_SRC_ALPHA),
	  T(),
	  f.currentTextureEffect = h,
	  h.setSourceTexture(g),
	  h.startEffect(),
	  f.pushShader(I),
	  f.currentTextureEffect.bind(),
	  f.setTexture(0, f.currentTextureEffect.getCurrentSourceTexture().tex),
	  f.currentTextureEffect.finish(),
	  f.popShader(),
	  l.trigger(),
	  c.set(h.getCurrentSourceTexture()),
	  h.endEffect(),
	  f.setViewPort(_[0], _[1], _[2], _[3]),
	  f.gl.blendFunc(f.gl.SRC_ALPHA, f.gl.ONE_MINUS_SRC_ALPHA),
	  f.currentTextureEffect = null
	};
	function D() {
	  'repeat' == r.get() && (M = CGL.Texture.WRAP_REPEAT),
	  'mirrored repeat' == r.get() && (M = CGL.Texture.WRAP_MIRRORED_REPEAT),
	  'clamp to edge' == r.get() && (M = CGL.Texture.WRAP_CLAMP_TO_EDGE),
	  b = !0,
	  T()
	}
	function x() {
	  'nearest' == o.get() && (v = CGL.Texture.FILTER_NEAREST),
	  'linear' == o.get() && (v = CGL.Texture.FILTER_LINEAR),
	  'mipmap' == o.get() && (v = CGL.Texture.FILTER_MIPMAP),
	  b = !0,
	  T()
	}
	r.set('repeat'),
	r.onChange = D,
	o.set('linear'),
	o.onChange = x,
	n.set(!0),
	t.onTriggered = A,
	e.preRender = A,
	a.set(640),
	i.set(360),
	x(),
	D(),
	S()
  },
  Ops.Gl.TextureEffects.ImageCompose.prototype = new CABLES.Op,
  CABLES.OPS['5c04608d-1e42-4e36-be00-1be4a81fc309'] = {
	f: Ops.Gl.TextureEffects.ImageCompose,
	objName: 'Ops.Gl.TextureEffects.ImageCompose'
  },
  Ops.Math.Multiply = function () {
	CABLES.Op.apply(this, arguments);
	const e = this.inValueFloat('number1', 1),
	t = this.inValueFloat('number2', 2),
	n = this.outValue('result');
	function a() {
	  const a = e.get(),
	  i = t.get();
	  n.set(a * i)
	}
	e.onChange = t.onChange = a,
	a()
  },
  Ops.Math.Multiply.prototype = new CABLES.Op,
  CABLES.OPS['1bbdae06-fbb2-489b-9bcc-36c9d65bd441'] = {
	f: Ops.Math.Multiply,
	objName: 'Ops.Math.Multiply'
  },
  Ops.Gl.ShaderEffects.Shadow_v2 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = {
	  head_frag: '#define CAST_SHADOW y\n\n#define NEAR x\n#define FAR y\n#define MAP_SIZE z\n#define BIAS w\n\n#ifdef WEBGL2\n    #define textureCube texture\n#endif\n\nfloat MOD_when_gt(float x, float y) { return max(sign(x - y), 0.0); } // comparator function\nfloat MOD_when_eq(float x, float y) { return 1. - abs(sign(x - y)); } // comparator function\nfloat MOD_when_neq(float x, float y) { return abs(sign(x - y)); } // comparator function\n\n#ifdef MODE_VSM\n    float MOD_linstep(float value, float low, float high) {\n        return clamp((value - low)/(high-low), 0., 1.);\n    }\n#endif\n\n\n\n\n\n#ifdef MODE_DEFAULT\n    float MOD_ShadowFactorDefault(float shadowMapSample, float shadowMapDepth, float bias, float shadowStrength) {\n        return step(shadowMapDepth - bias, shadowMapSample);\n    }\n#endif\n\n#ifdef MODE_PCF\n\n    #ifdef WEBGL2\n        vec3 MOD_offsets[20] = vec3[]\n        (\n           vec3( 1,  1,  1), vec3( 1, -1,  1), vec3(-1, -1,  1), vec3(-1,  1,  1),\n           vec3( 1,  1, -1), vec3( 1, -1, -1), vec3(-1, -1, -1), vec3(-1,  1, -1),\n           vec3( 1,  1,  0), vec3( 1, -1,  0), vec3(-1, -1,  0), vec3(-1,  1,  0),\n           vec3( 1,  0,  1), vec3(-1,  0,  1), vec3( 1,  0, -1), vec3(-1,  0, -1),\n           vec3( 0,  1,  1), vec3( 0, -1,  1), vec3( 0, -1, -1), vec3( 0,  1, -1)\n        );\n    #endif\n    #ifdef WEBGL1\n        vec3 MOD_offsets[20];\n        int MOD_CALLED_FILL_PCF_ARRAY = 0;\n        void MOD_FillPCFArray() {\n            if (MOD_CALLED_FILL_PCF_ARRAY == 1) return;\n            MOD_offsets[0] = vec3( 1,  1,  1);\n            MOD_offsets[1] = vec3( 1, -1,  1);\n            MOD_offsets[2] = vec3(-1, -1,  1);\n            MOD_offsets[3] = vec3(-1,  1,  1);\n            MOD_offsets[4] = vec3( 1,  1, -1);\n            MOD_offsets[5] = vec3( 1, -1, -1);\n            MOD_offsets[6] = vec3(-1, -1, -1);\n            MOD_offsets[7] = vec3(-1,  1, -1);\n            MOD_offsets[8] = vec3( 1,  1,  0);\n            MOD_offsets[9] = vec3( 1, -1,  0);\n            MOD_offsets[10] = vec3(-1, -1,  0);\n            MOD_offsets[11] = vec3(-1,  1,  0);\n            MOD_offsets[12] = vec3( 1,  0,  1);\n            MOD_offsets[13] = vec3(-1,  0,  1);\n            MOD_offsets[14] = vec3( 1,  0, -1);\n            MOD_offsets[15] = vec3(-1,  0, -1);\n            MOD_offsets[16] = vec3( 0,  1,  1);\n            MOD_offsets[17] = vec3( 0, -1,  1);\n            MOD_offsets[18] = vec3( 0, -1, -1);\n            MOD_offsets[19] = vec3( 0,  1, -1);\n            MOD_CALLED_FILL_PCF_ARRAY = 1;\n        }\n    #endif\n    // float diskRadius = 0.05;\n    #define RIGHT_BOUND float((SAMPLE_AMOUNT-1.)/2.)\n    #define LEFT_BOUND -RIGHT_BOUND\n    #define PCF_DIVISOR float(SAMPLE_AMOUNT*SAMPLE_AMOUNT)\n\n    #define SAMPLE_AMOUNT_POINT int(SAMPLE_AMOUNT * 2. + 4.)\n    // https://learnopengl.com/Advanced-Lighting/Shadows/Point-Shadows\n    float MOD_ShadowFactorPointPCF(\n        samplerCube shadowMap,\n        vec3 lightDirection,\n        float shadowMapDepth,\n        float nearPlane,\n        float farPlane,\n        float bias,\n        float shadowStrength,\n        vec3 modelPos,\n        vec3 camPos,\n        float sampleSpread\n    ) {\n        #ifdef WEBGL1\n            MOD_FillPCFArray();\n        #endif\n\n        float visibility  = 0.0;\n        float viewDistance = length(camPos - modelPos.xyz);\n        float diskRadius = (1.0 + ((viewDistance) / (farPlane - nearPlane))) / sampleSpread;\n\n        for (int i = 0; i < SAMPLE_AMOUNT_POINT; i++) {\n            float shadowMapSample = textureCube(shadowMap, -lightDirection + MOD_offsets[i] * diskRadius).r;\n            visibility += step(shadowMapDepth - bias, shadowMapSample);\n        }\n        visibility /= float(SAMPLE_AMOUNT_POINT);\n        return clamp(visibility, 0., 1.);\n    }\n\n    float MOD_ShadowFactorPCF(sampler2D shadowMap, vec2 shadowMapLookup, float shadowMapSize, float shadowMapDepth, float bias, float shadowStrength) {\n        float texelSize = 1. / shadowMapSize;\n        float visibility = 0.;\n\n        // sample neighbouring pixels & get mean value\n        for (float x = LEFT_BOUND; x <= RIGHT_BOUND; x += 1.0) {\n            for (float y = LEFT_BOUND; y <= RIGHT_BOUND; y += 1.0) {\n                float texelDepth = texture(shadowMap, shadowMapLookup + vec2(x, y) * texelSize).r;\n                visibility += step(shadowMapDepth - bias, texelDepth);\n            }\n        }\n\n        return clamp(visibility / PCF_DIVISOR, 0., 1.);\n    }\n#endif\n\n\n#ifdef MODE_POISSON\n    #ifdef WEBGL2\n        vec2 MOD_poissonDisk[16] = vec2[16](\n        vec2( -0.94201624, -0.39906216 ),\n        vec2( 0.94558609, -0.76890725 ),\n        vec2( -0.094184101, -0.92938870 ),\n        vec2( 0.34495938, 0.29387760 ),\n        vec2( -0.91588581, 0.45771432 ),\n        vec2( -0.81544232, -0.87912464 ),\n        vec2( -0.38277543, 0.27676845 ),\n        vec2( 0.97484398, 0.75648379 ),\n        vec2( 0.44323325, -0.97511554 ),\n        vec2( 0.53742981, -0.47373420 ),\n        vec2( -0.26496911, -0.41893023 ),\n        vec2( 0.79197514, 0.19090188 ),\n        vec2( -0.24188840, 0.99706507 ),\n        vec2( -0.81409955, 0.91437590 ),\n        vec2( 0.19984126, 0.78641367 ),\n        vec2( 0.14383161, -0.14100790 )\n        );\n    #endif\n    #ifdef WEBGL1\n    int MOD_CALLED_FILL_POISSON_ARRAY = 0;\n    // cannot allocate arrays like above in webgl1\n        vec2 MOD_poissonDisk[16];\n        void FillPoissonArray() {\n            if (MOD_CALLED_FILL_POISSON_ARRAY == 1) return;\n            MOD_poissonDisk[0] = vec2( -0.94201624, -0.39906216 );\n            MOD_poissonDisk[1] = vec2( 0.94558609, -0.76890725 );\n            MOD_poissonDisk[2] = vec2( -0.094184101, -0.92938870 );\n            MOD_poissonDisk[3] = vec2( 0.34495938, 0.29387760 );\n            MOD_poissonDisk[4] = vec2( -0.91588581, 0.45771432 );\n            MOD_poissonDisk[5] = vec2( -0.81544232, -0.87912464 );\n            MOD_poissonDisk[6] = vec2( -0.38277543, 0.27676845 );\n            MOD_poissonDisk[7] = vec2( 0.97484398, 0.75648379 );\n            MOD_poissonDisk[8] = vec2( 0.44323325, -0.97511554 );\n            MOD_poissonDisk[9] = vec2( 0.53742981, -0.47373420 );\n            MOD_poissonDisk[10] = vec2( -0.26496911, -0.41893023 );\n            MOD_poissonDisk[11] = vec2( 0.79197514, 0.19090188 );\n            MOD_poissonDisk[12] = vec2( -0.24188840, 0.99706507 );\n            MOD_poissonDisk[13] = vec2( -0.81409955, 0.91437590 );\n            MOD_poissonDisk[14] = vec2( 0.19984126, 0.78641367 );\n            MOD_poissonDisk[15] = vec2( 0.14383161, -0.14100790);\n            MOD_CALLED_FILL_POISSON_ARRAY = 1;\n        }\n    #endif\n#define SAMPLE_AMOUNT_INT int(SAMPLE_AMOUNT)\n#define INV_SAMPLE_AMOUNT 1./SAMPLE_AMOUNT\n    float MOD_ShadowFactorPointPoisson(samplerCube shadowCubeMap, vec3 lightDirection, float shadowMapDepth, float bias, float sampleSpread) {\n        float visibility = 1.;\n\n        for (int i = 0; i < SAMPLE_AMOUNT_INT; i++) {\n            visibility -= INV_SAMPLE_AMOUNT * step(textureCube(shadowCubeMap, (-lightDirection + MOD_poissonDisk[i].xyx/sampleSpread)).r, shadowMapDepth - bias);\n        }\n\n        return clamp(visibility, 0., 1.);\n    }\n\n    float MOD_ShadowFactorPoisson(sampler2D shadowMap, vec2 shadowMapLookup, float shadowMapDepth, float bias, float sampleSpread) {\n        float visibility = 1.;\n\n        for (int i = 0; i < SAMPLE_AMOUNT_INT; i++) {\n            visibility -= INV_SAMPLE_AMOUNT * step(texture(shadowMap, (shadowMapLookup + MOD_poissonDisk[i]/sampleSpread)).r, shadowMapDepth - bias);\n        }\n\n        return clamp(visibility, 0., 1.);\n    }\n#endif\n\n#ifdef MODE_VSM\n    float MOD_ShadowFactorVSM(vec2 moments, float shadowBias, float shadowMapDepth, float shadowStrength) {\n\n            float depthScale = shadowBias * 0.01 * shadowMapDepth; // - shadowBias;\n            float minVariance = depthScale*depthScale; // = 0.00001\n\n            float distanceTo = shadowMapDepth; //shadowMapDepth; // - shadowBias;\n\n                // retrieve previously stored moments & variance\n            float p = step(distanceTo, moments.x);\n            float variance =  max(moments.y - (moments.x * moments.x), 0.00001);\n\n            float distanceToMean = distanceTo - moments.x;\n\n            //there is a very small probability that something is being lit when its not\n            // little hack: clamp pMax 0.2 - 1. then subtract - 0,2\n            // bottom line helps make the shadows darker\n            // float pMax = linstep((variance - bias) / (variance - bias + (distanceToMean * distanceToMean)), 0.0001, 1.);\n            float pMax = MOD_linstep((variance) / (variance + (distanceToMean * distanceToMean)), shadowBias, 1.);\n            //float pMax = clamp(variance / (variance + distanceToMean*distanceToMean), 0.2, 1.) - 0.2;\n            //pMax = variance / (variance + distanceToMean*distanceToMean);\n            // visibility = clamp(pMax, 1., p);\n            float visibility = min(max(p, pMax), 1.);\n\n            return visibility;\n    }\n#endif\n',
	  head_vert: '',
	  shadow_body_directional_frag: '\n// FRAGMENT BODY type: DIRECTIONAL count: {{LIGHT_INDEX}}\n#ifdef RECEIVE_SHADOW\n    #ifdef HAS_SHADOW_MAP_{{LIGHT_INDEX}}\n            if (MOD_light{{LIGHT_INDEX}}.typeCastShadow.CAST_SHADOW == 1) {\n                vec2 shadowMapLookup{{LIGHT_INDEX}} = MOD_shadowCoord{{LIGHT_INDEX}}.xy / MOD_shadowCoord{{LIGHT_INDEX}}.w;\n                float shadowMapDepth{{LIGHT_INDEX}} = MOD_shadowCoord{{LIGHT_INDEX}}.z  / MOD_shadowCoord{{LIGHT_INDEX}}.w;\n                float shadowStrength{{LIGHT_INDEX}} = MOD_light{{LIGHT_INDEX}}.shadowStrength;\n                vec2 shadowMapSample{{LIGHT_INDEX}} = texture(MOD_shadowMap{{LIGHT_INDEX}}, shadowMapLookup{{LIGHT_INDEX}}).rg;\n                float bias{{LIGHT_INDEX}} = MOD_light{{LIGHT_INDEX}}.shadowProperties.BIAS;\n\n                #ifdef MODE_DEFAULT\n                    float MOD_shadowFactor{{LIGHT_INDEX}} = MOD_ShadowFactorDefault(shadowMapSample{{LIGHT_INDEX}}.r, shadowMapDepth{{LIGHT_INDEX}}, bias{{LIGHT_INDEX}}, shadowStrength{{LIGHT_INDEX}});\n                    MOD_shadowFactor{{LIGHT_INDEX}} = clamp((MOD_shadowFactor{{LIGHT_INDEX}} + ((1. - shadowStrength{{LIGHT_INDEX}}))), 0., 1.);\n                    vec3 MOD_shadowColor{{LIGHT_INDEX}} = (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                    col.rgb -= (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                #endif\n\n                #ifdef MODE_PCF\n                    float MOD_shadowFactor{{LIGHT_INDEX}} = MOD_ShadowFactorPCF(MOD_shadowMap{{LIGHT_INDEX}}, shadowMapLookup{{LIGHT_INDEX}}, MOD_light{{LIGHT_INDEX}}.shadowProperties.MAP_SIZE, shadowMapDepth{{LIGHT_INDEX}}, bias{{LIGHT_INDEX}}, shadowStrength{{LIGHT_INDEX}});\n                    MOD_shadowFactor{{LIGHT_INDEX}} = clamp((MOD_shadowFactor{{LIGHT_INDEX}} + ((1. - shadowStrength{{LIGHT_INDEX}}))), 0., 1.);\n                    vec3 MOD_shadowColor{{LIGHT_INDEX}} = (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                    col.rgb -= (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                #endif\n\n                #ifdef MODE_POISSON\n                    #ifdef WEBGL1\n                        FillPoissonArray();\n                    #endif\n\n                    float MOD_shadowFactor{{LIGHT_INDEX}} = MOD_ShadowFactorPoisson(MOD_shadowMap{{LIGHT_INDEX}}, shadowMapLookup{{LIGHT_INDEX}}, shadowMapDepth{{LIGHT_INDEX}}, bias{{LIGHT_INDEX}}, MOD_sampleSpread);\n                    MOD_shadowFactor{{LIGHT_INDEX}} = clamp((MOD_shadowFactor{{LIGHT_INDEX}} + ((1. - shadowStrength{{LIGHT_INDEX}}))), 0., 1.);\n                    vec3 MOD_shadowColor{{LIGHT_INDEX}} = (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                    col.rgb -= (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                #endif\n\n                #ifdef MODE_VSM\n                    float MOD_shadowFactor{{LIGHT_INDEX}} = MOD_ShadowFactorVSM(shadowMapSample{{LIGHT_INDEX}}, MOD_light{{LIGHT_INDEX}}.shadowProperties.BIAS, shadowMapDepth{{LIGHT_INDEX}}, shadowStrength{{LIGHT_INDEX}});\n                    MOD_shadowFactor{{LIGHT_INDEX}} = clamp((MOD_shadowFactor{{LIGHT_INDEX}} + ((1. - shadowStrength{{LIGHT_INDEX}}))), 0., 1.);\n                    vec3 MOD_shadowColor{{LIGHT_INDEX}} = (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                    col.rgb -= (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                #endif\n            }\n    #endif\n#endif',
	  shadow_body_directional_vert: '// VERTEX BODY type: DIRECTIONAL count: {{LIGHT_INDEX}}\n#ifdef RECEIVE_SHADOW\n    #ifdef HAS_SHADOW_MAP_{{LIGHT_INDEX}}\n        MOD_modelPos{{LIGHT_INDEX}} = mMatrix*pos;\n        MOD_shadowCoord{{LIGHT_INDEX}} = MOD_lightMatrix{{LIGHT_INDEX}} * (MOD_modelPos{{LIGHT_INDEX}} + vec4(norm, 1) * MOD_normalOffset{{LIGHT_INDEX}});\n    #endif\n#endif\n',
	  shadow_body_point_frag: '// FRAGMENT BODY type: POINT count: {{LIGHT_INDEX}}\n #ifdef HAS_SHADOW_MAP_{{LIGHT_INDEX}}\n        if (MOD_light{{LIGHT_INDEX}}.typeCastShadow.CAST_SHADOW == 1) {\n            vec3 lightDirectionMOD{{LIGHT_INDEX}} = normalize(MOD_light{{LIGHT_INDEX}}.position - MOD_modelPos{{LIGHT_INDEX}}.xyz);\n            float shadowStrength{{LIGHT_INDEX}} = MOD_light{{LIGHT_INDEX}}.shadowStrength;\n\n            float cameraNear{{LIGHT_INDEX}} = MOD_light{{LIGHT_INDEX}}.shadowProperties.NEAR; // uniforms\n            float cameraFar{{LIGHT_INDEX}} =  MOD_light{{LIGHT_INDEX}}.shadowProperties.FAR;\n\n            float fromLightToFrag{{LIGHT_INDEX}} = (length(MOD_modelPos{{LIGHT_INDEX}}.xyz - MOD_light{{LIGHT_INDEX}}.position) - cameraNear{{LIGHT_INDEX}}) / (cameraFar{{LIGHT_INDEX}} - cameraNear{{LIGHT_INDEX}});\n\n            float shadowMapDepth{{LIGHT_INDEX}} = fromLightToFrag{{LIGHT_INDEX}};\n            // float bias{{LIGHT_INDEX}} = clamp(MOD_light{{LIGHT_INDEX}}.shadowProperties.BIAS, 0., 1.);\n            float lambert{{LIGHT_INDEX}} = clamp(dot(lightDirectionMOD{{LIGHT_INDEX}}, normalize(MOD_normal{{LIGHT_INDEX}})), 0., 1.);\n            float bias{{LIGHT_INDEX}} = clamp(MOD_light{{LIGHT_INDEX}}.shadowProperties.BIAS * tan(acos(lambert{{LIGHT_INDEX}})), 0., 0.1);\n            vec2 shadowMapSample{{LIGHT_INDEX}} = textureCube(MOD_shadowMapCube{{LIGHT_INDEX}}, -lightDirectionMOD{{LIGHT_INDEX}}).rg;\n\n\n\n\n            #ifdef MODE_DEFAULT\n                float MOD_shadowFactor{{LIGHT_INDEX}} = MOD_ShadowFactorDefault(shadowMapSample{{LIGHT_INDEX}}.r, shadowMapDepth{{LIGHT_INDEX}}, bias{{LIGHT_INDEX}}, shadowStrength{{LIGHT_INDEX}});\n                MOD_shadowFactor{{LIGHT_INDEX}} = clamp((MOD_shadowFactor{{LIGHT_INDEX}} + ((1. - shadowStrength{{LIGHT_INDEX}}))), 0., 1.);\n                vec3 MOD_shadowColor{{LIGHT_INDEX}} = (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                col.rgb -= (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n            #endif\n            #ifdef MODE_PCF\n                 float MOD_shadowFactor{{LIGHT_INDEX}} = MOD_ShadowFactorPointPCF(\n                    MOD_shadowMapCube{{LIGHT_INDEX}},\n                    lightDirectionMOD{{LIGHT_INDEX}},\n                    shadowMapDepth{{LIGHT_INDEX}},\n                    cameraNear{{LIGHT_INDEX}},\n                    cameraFar{{LIGHT_INDEX}},\n                    bias{{LIGHT_INDEX}},\n                    shadowStrength{{LIGHT_INDEX}},\n                    MOD_modelPos{{LIGHT_INDEX}}.xyz,\n                    MOD_camPos,\n                    MOD_sampleSpread\n                );\n                MOD_shadowFactor{{LIGHT_INDEX}} = clamp((MOD_shadowFactor{{LIGHT_INDEX}} + ((1. - shadowStrength{{LIGHT_INDEX}}))), 0., 1.);\n                vec3 MOD_shadowColor{{LIGHT_INDEX}} = (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                col.rgb -= (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n            #endif\n            #ifdef MODE_POISSON\n                #ifdef WEBGL1\n                    FillPoissonArray();\n                #endif\n\n                float MOD_shadowFactor{{LIGHT_INDEX}} = MOD_ShadowFactorPointPoisson(MOD_shadowMapCube{{LIGHT_INDEX}}, lightDirectionMOD{{LIGHT_INDEX}}, shadowMapDepth{{LIGHT_INDEX}}, bias{{LIGHT_INDEX}}, MOD_sampleSpread);\n                MOD_shadowFactor{{LIGHT_INDEX}} = clamp((MOD_shadowFactor{{LIGHT_INDEX}} + ((1. - shadowStrength{{LIGHT_INDEX}}))), 0., 1.);\n                vec3 MOD_shadowColor{{LIGHT_INDEX}} = (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                col.rgb -= (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n            #endif\n\n            #ifdef MODE_VSM\n                float MOD_shadowFactor{{LIGHT_INDEX}} = MOD_ShadowFactorVSM(shadowMapSample{{LIGHT_INDEX}}, MOD_light{{LIGHT_INDEX}}.shadowProperties.BIAS, shadowMapDepth{{LIGHT_INDEX}}, shadowStrength{{LIGHT_INDEX}});\n                MOD_shadowFactor{{LIGHT_INDEX}} = clamp((MOD_shadowFactor{{LIGHT_INDEX}} + ((1. - shadowStrength{{LIGHT_INDEX}}))), 0., 1.);\n                vec3 MOD_shadowColor{{LIGHT_INDEX}} = (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                col.rgb -= (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n            #endif\n        }\n#endif\n',
	  shadow_body_point_vert: '// VERTEX BODY type: POINT count: {{LIGHT_INDEX}}\n#ifdef HAS_SHADOW_MAP_{{LIGHT_INDEX}}\n    MOD_modelPos{{LIGHT_INDEX}} = mMatrix * pos;\n    MOD_normal{{LIGHT_INDEX}} = norm;\n#endif\n',
	  shadow_body_spot_frag: '// FRAGMENT BODY type: SPOT count: {{LIGHT_INDEX}}\n #ifdef HAS_SHADOW_MAP_{{LIGHT_INDEX}}\n        if (MOD_light{{LIGHT_INDEX}}.typeCastShadow.CAST_SHADOW == 1) {\n            vec3 lightDirectionMOD{{LIGHT_INDEX}} = normalize(MOD_light{{LIGHT_INDEX}}.position - MOD_modelPos{{LIGHT_INDEX}}.xyz);\n            vec2 shadowMapLookup{{LIGHT_INDEX}} = MOD_shadowCoord{{LIGHT_INDEX}}.xy / MOD_shadowCoord{{LIGHT_INDEX}}.w;\n            float shadowMapDepth{{LIGHT_INDEX}} = MOD_shadowCoord{{LIGHT_INDEX}}.z  / MOD_shadowCoord{{LIGHT_INDEX}}.w;\n            float shadowStrength{{LIGHT_INDEX}} = MOD_light{{LIGHT_INDEX}}.shadowStrength;\n            vec2 shadowMapSample{{LIGHT_INDEX}} = texture(MOD_shadowMap{{LIGHT_INDEX}}, shadowMapLookup{{LIGHT_INDEX}}).rg;\n            float lambert{{LIGHT_INDEX}} = clamp(dot(lightDirectionMOD{{LIGHT_INDEX}}, normalize(MOD_normal{{LIGHT_INDEX}})), 0., 1.);\n            float bias{{LIGHT_INDEX}} = clamp(MOD_light{{LIGHT_INDEX}}.shadowProperties.BIAS * tan(acos(lambert{{LIGHT_INDEX}})), 0., 0.1);\n\n            #ifdef MODE_DEFAULT\n                float MOD_shadowFactor{{LIGHT_INDEX}} = MOD_ShadowFactorDefault(shadowMapSample{{LIGHT_INDEX}}.r, shadowMapDepth{{LIGHT_INDEX}}, bias{{LIGHT_INDEX}}, shadowStrength{{LIGHT_INDEX}});\n                MOD_shadowFactor{{LIGHT_INDEX}} = clamp((MOD_shadowFactor{{LIGHT_INDEX}} + ((1. - shadowStrength{{LIGHT_INDEX}}))), 0., 1.);\n                vec3 MOD_shadowColor{{LIGHT_INDEX}} = (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                col.rgb -= (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n            #endif\n\n            #ifdef MODE_PCF\n                float MOD_shadowFactor{{LIGHT_INDEX}} = MOD_ShadowFactorPCF(MOD_shadowMap{{LIGHT_INDEX}}, shadowMapLookup{{LIGHT_INDEX}}, MOD_light{{LIGHT_INDEX}}.shadowProperties.MAP_SIZE, shadowMapDepth{{LIGHT_INDEX}}, bias{{LIGHT_INDEX}}, shadowStrength{{LIGHT_INDEX}});\n                MOD_shadowFactor{{LIGHT_INDEX}} = clamp((MOD_shadowFactor{{LIGHT_INDEX}} + ((1. - shadowStrength{{LIGHT_INDEX}}))), 0., 1.);\n                vec3 MOD_shadowColor{{LIGHT_INDEX}} = (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                col.rgb -= (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n            #endif\n\n            #ifdef MODE_POISSON\n                #ifdef WEBGL1\n                    FillPoissonArray();\n                #endif\n\n                float MOD_shadowFactor{{LIGHT_INDEX}} = MOD_ShadowFactorPoisson(MOD_shadowMap{{LIGHT_INDEX}}, shadowMapLookup{{LIGHT_INDEX}}, shadowMapDepth{{LIGHT_INDEX}}, bias{{LIGHT_INDEX}}, MOD_sampleSpread);\n                MOD_shadowFactor{{LIGHT_INDEX}} = clamp((MOD_shadowFactor{{LIGHT_INDEX}} + ((1. - shadowStrength{{LIGHT_INDEX}}))), 0., 1.);\n                vec3 MOD_shadowColor{{LIGHT_INDEX}} = (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                col.rgb -= (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n            #endif\n\n            #ifdef MODE_VSM\n                float MOD_shadowFactor{{LIGHT_INDEX}} = MOD_ShadowFactorVSM(shadowMapSample{{LIGHT_INDEX}}, MOD_light{{LIGHT_INDEX}}.shadowProperties.BIAS, shadowMapDepth{{LIGHT_INDEX}}, shadowStrength{{LIGHT_INDEX}});\n                MOD_shadowFactor{{LIGHT_INDEX}} = clamp((MOD_shadowFactor{{LIGHT_INDEX}} + ((1. - shadowStrength{{LIGHT_INDEX}}))), 0., 1.);\n                vec3 MOD_shadowColor{{LIGHT_INDEX}} = (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n                col.rgb -= (1. - MOD_shadowFactor{{LIGHT_INDEX}}) * (vec3(1.) - MOD_shadowColor);\n            #endif\n        }\n    #endif\n',
	  shadow_body_spot_vert: '// VERTEX BODY type: SPOT count: {{LIGHT_INDEX}}\n#ifdef HAS_SHADOW_MAP_{{LIGHT_INDEX}}\n    MOD_modelPos{{LIGHT_INDEX}} = mMatrix*pos;\n    MOD_shadowCoord{{LIGHT_INDEX}} = MOD_lightMatrix{{LIGHT_INDEX}} * (MOD_modelPos{{LIGHT_INDEX}} + vec4(norm, 1) * MOD_normalOffset{{LIGHT_INDEX}});\n    MOD_normal{{LIGHT_INDEX}} = norm;\n#endif\n',
	  shadow_head_directional_frag: '// FRAGMENT HEAD type: SPOT count: {{LIGHT_INDEX}}\n\n#ifdef RECEIVE_SHADOW\n    #ifdef HAS_SHADOW_MAP_{{LIGHT_INDEX}}\n        IN vec4 MOD_modelPos{{LIGHT_INDEX}};\n        IN vec4 MOD_shadowCoord{{LIGHT_INDEX}};\n    #endif\n#endif\n',
	  shadow_head_directional_vert: '// VERTEX HEAD type: DIRECTIONAL count: {{LIGHT_INDEX}}\n#ifdef RECEIVE_SHADOW\n    #ifdef HAS_SHADOW_MAP_{{LIGHT_INDEX}}\n        OUT vec4 MOD_modelPos{{LIGHT_INDEX}};\n        OUT vec4 MOD_shadowCoord{{LIGHT_INDEX}};\n    #endif\n#endif\n',
	  shadow_head_point_frag: '// FRAGMENT HEAD type: POINT count: {{LIGHT_INDEX}}\n#ifdef HAS_SHADOW_MAP_{{LIGHT_INDEX}}\n    IN vec4 MOD_modelPos{{LIGHT_INDEX}};\n    IN vec3 MOD_normal{{LIGHT_INDEX}};\n#endif\n',
	  shadow_head_point_vert: '// VERTEX HEAD type: POINT count: {{LIGHT_INDEX}}\n#ifdef HAS_SHADOW_MAP_{{LIGHT_INDEX}}\n    OUT vec4 MOD_modelPos{{LIGHT_INDEX}};\n    OUT vec3 MOD_normal{{LIGHT_INDEX}};\n#endif\n',
	  shadow_head_spot_frag: '// FRAGMENT HEAD type: SPOT count: {{LIGHT_INDEX}}\nIN vec4 MOD_modelPos{{LIGHT_INDEX}};\nIN vec3 MOD_normal{{LIGHT_INDEX}};\n\n#ifdef HAS_SHADOW_MAP_{{LIGHT_INDEX}}\n    IN vec4 MOD_shadowCoord{{LIGHT_INDEX}};\n#endif\n',
	  shadow_head_spot_vert: '// VERTEX HEAD type: SPOT count: {{LIGHT_INDEX}}\n#ifdef HAS_SHADOW_MAP_{{LIGHT_INDEX}}\n    OUT vec4 MOD_modelPos{{LIGHT_INDEX}};\n    OUT vec3 MOD_normal{{LIGHT_INDEX}};\n    OUT vec4 MOD_shadowCoord{{LIGHT_INDEX}};\n#endif\n'
	},
	n = e.patch.cgl,
	a = new RegExp('{{LIGHT_INDEX}}', 'g'),
	i = {
	  point: 0,
	  directional: 1,
	  spot: 2
	};
	function o(e, t, n) {
	  return Math.min(Math.max(e, t), n)
	}
	const r = e.inTrigger('Trigger In'),
	s = e.inBool('Cast Shadow', !0),
	l = e.inBool('Receive Shadow', !0),
	c = [
	  'Default',
	  'PCF',
	  'Poisson',
	  'VSM'
	],
	d = e.inSwitch('Algorithm', c, 'Default'),
	u = e.inSwitch('Samples', [
	  1,
	  2,
	  4,
	  8
	], 4),
	f = e.inInt('Sample Distribution', 250),
	h = e.inFloatSlider('R', 0),
	g = e.inFloatSlider('G', 0),
	p = e.inFloatSlider('B', 0);
	h.setUiAttribs({
	  colorPick: !0
	});
	const m = e.inBool('Discard Transparent', !1),
	_ = e.inFloatSlider('Opacity Threshold', 0.5),
	b = e.inSwitch('Alpha Mask Source', [
	  'Luminance',
	  'R',
	  'G',
	  'B',
	  'A'
	], 'Luminance'),
	E = e.inTexture('Opacity Texture');
	function I() {
	  if (!l.get()) return u.setUiAttribs({
		greyout: !0
	  }),
	  void f.setUiAttribs({
		greyout: !0
	  });
	  'PCF' === d.get() || 'Poisson' === d.get() ? (u.setUiAttribs({
		greyout: !1
	  }), f.setUiAttribs({
		greyout: !1
	  })) : (u.setUiAttribs({
		greyout: !0
	  }), f.setUiAttribs({
		greyout: !0
	  }))
	}
	_.setUiAttribs({
	  greyout: !m.get()
	}),
	b.setUiAttribs({
	  greyout: !m.get()
	}),
	u.setUiAttribs({
	  greyout: !0
	}),
	f.setUiAttribs({
	  greyout: !0
	}),
	e.setPortGroup('', [
	  s,
	  l
	]),
	e.setPortGroup('Shadow Settings', [
	  d,
	  u,
	  f,
	  h,
	  g,
	  p
	]),
	e.setPortGroup('', [
	  m
	]),
	e.setPortGroup('Opacity Settings', [
	  _,
	  b,
	  E
	]),
	l.get() && ('PCF' === d.get() || 'Poisson' === d.get() ? (u.setUiAttribs({
	  greyout: !1
	}), f.setUiAttribs({
	  greyout: !1
	})) : 'VSM' !== d.get() && 'Default' !== d.get() || (u.setUiAttribs({
	  greyout: !0
	}), f.setUiAttribs({
	  greyout: !0
	}))),
	m.onChange = (() =>{
	  _.setUiAttribs({
		greyout: !m.get()
	  }),
	  b.setUiAttribs({
		greyout: !m.get()
	  })
	}),
	b.onChange = (() =>{
	  x.toggleDefine('MOD_ALPHA_MASK_LUMINANCE', 'Luminance' === b.get()),
	  x.toggleDefine('MOD_ALPHA_MASK_R', 'R' === b.get()),
	  x.toggleDefine('MOD_ALPHA_MASK_G', 'G' === b.get()),
	  x.toggleDefine('MOD_ALPHA_MASK_B', 'B' === b.get()),
	  x.toggleDefine('MOD_ALPHA_MASK_A', 'A' === b.get())
	}),
	l.onChange = (() =>{
	  d.setUiAttribs({
		greyout: !l.get()
	  }),
	  I()
	}),
	d.onChange = (() =>{
	  const e = d.get();
	  c.forEach(t=>R.toggleDefine('MODE_' + t.toUpperCase(), t === e)),
	  I()
	}),
	u.onChange = (() =>{
	  R.define('SAMPLE_AMOUNT', 'float(' + o(Number(u.get()), 1, 16).toString() + ')')
	});
	const v = e.outTrigger('Trigger Out'),
	M = (e, n) =>'ambient' === n ? '' : 'point' === n ? t.shadow_head_point_vert.replace(a, e) : 'spot' === n ? t.shadow_head_spot_vert.replace(a, e) : 'directional' === n ? t.shadow_head_directional_vert.replace(a, e) : void 0,
	L = (e, n) =>'ambient' === n ? '' : 'point' === n ? t.shadow_body_point_vert.replace(a, e) : 'spot' === n ? t.shadow_body_spot_vert.replace(a, e) : 'directional' === n ? t.shadow_body_directional_vert.replace(a, e) : void 0,
	T = (e, n) =>'ambient' === n ? '' : 'point' === n ? t.shadow_head_point_frag.replace(a, e) : 'spot' === n ? t.shadow_head_spot_frag.replace(a, e) : 'directional' === n ? t.shadow_head_directional_frag.replace(a, e) : void 0,
	S = (e, n) =>{
	  if ('ambient' === n) return '';
	  let i = '';
	  return 'spot' === n ? i = i.concat(t.shadow_body_spot_frag.replace(a, e)) : 'directional' === n ? i = i.concat(t.shadow_body_directional_frag.replace(a, e)) : 'point' === n && (i = i.concat(t.shadow_body_point_frag.replace(a, e))),
	  i
	},
	A = {
	  lastLength: 0,
	  updating: !1
	};
	function D() {
	  A.updating = !0,
	  function () {
		for (let e = 0; e < A.lastLength; e += 1) R.removeUniformStruct('MOD_light' + e),
		R.removeUniform('MOD_shadowMap' + e),
		R.removeUniform('MOD_shadowMapCube' + e),
		R.removeUniform('MOD_normalOffset' + e),
		R.removeUniform('MOD_lightMatrix' + e),
		R.removeDefine('HAS_SHADOW_MAP_' + e);
		A.lastLength > 0 && (R.removeUniform('MOD_sampleSpread'), R.removeUniform('MOD_camPos'));
		F.length = 0,
		H.length = 0
	  }();
	  let t = '',
	  a = '',
	  i = '',
	  o = '';
	  for (let e = 0; e < n.frameStore.lightStack.length; e += 1) {
		const r = n.frameStore.lightStack[e];
		t = t.concat(M(e, r.type)),
		i = i.concat(L(e, r.type)),
		a = a.concat(T(e, r.type)),
		o = o.concat(S(e, r.type, r.castShadow))
	  }
	  w = O.concat(t),
	  P = C.concat(i),
	  G = N.concat(a),
	  U = y.concat(o),
	  R.removeModule(e.objName),
	  R.addModule({
		name: 'MODULE_VERTEX_POSITION',
		title: e.objName,
		srcHeadVert: w,
		srcBodyVert: P
	  }),
	  R.addModule({
		name: 'MODULE_COLOR',
		title: e.objName,
		srcHeadFrag: G,
		srcBodyFrag: U
	  }),
	  function () {
		for (let e = 0; e < n.frameStore.lightStack.length; e += 1) {
		  const t = n.frameStore.lightStack[e];
		  R.addUniformStructFrag('MOD_Light', 'MOD_light' + e, [
			{
			  type: '3f',
			  name: 'position',
			  v1: null
			},
			{
			  type: '2i',
			  name: 'typeCastShadow',
			  v1: null
			},
			{
			  type: '4f',
			  name: 'shadowProperties',
			  v1: null
			},
			{
			  type: 'f',
			  name: 'shadowStrength',
			  v1: t.shadowStrength
			}
		  ]),
		  F[e] = !1,
		  H[e] = !1,
		  'point' !== t.type ? (R.addUniformVert('m4', 'MOD_lightMatrix' + e, mat4.create(), null, null, null), R.addUniformVert('f', 'MOD_normalOffset' + e, 0, null, null, null, null), R.addUniformFrag('t', 'MOD_shadowMap' + e, 0, null, null, null)) : R.addUniformFrag('tc', 'MOD_shadowMapCube' + e, 0, null, null, null)
		}
		n.frameStore.lightStack.length > 0 && (R.addUniformFrag('3f', 'MOD_shadowColor', h, g, p, null), R.addUniformFrag('f', 'MOD_sampleSpread', f, null, null, null), - 1 !== n.frameStore.lightStack.map(e=>e.type).indexOf('point') && R.addUniformFrag('3f', 'MOD_camPos', [
		  0,
		  0,
		  0
		], null, null, null));
		A.lastLength = n.frameStore.lightStack.length,
		A.updating = !1
	  }()
	}
	const x = new CGL.ShaderModifier(n, 'shadowPassModifier');
	x.addModule({
	  name: 'MODULE_COLOR',
	  title: e.objName + 'shadowPass',
	  srcHeadFrag: '',
	  srcBodyFrag: '\n    #ifdef MOD_HAS_TEXTURE_OPACITY\n        #ifdef MOD_ALPHA_MASK_LUMINANCE\n            outColor.a *= dot(vec3(0.2126,0.7152,0.0722), texture(MOD_texOpacity, texCoord).rgb);\n        #endif\n        #ifdef MOD_ALPHA_MASK_R\n            outColor.a *= texture(MOD_texOpacity, texCoord).r;\n        #endif\n        #ifdef MOD_ALPHA_MASK_G\n            outColor.a *= texture(MOD_texOpacity, texCoord).g;\n        #endif\n        #ifdef MOD_ALPHA_MASK_B\n            outColor.a *= texture(MOD_texOpacity, texCoord).b;\n        #endif\n        #ifdef MOD_ALPHA_MASK_A\n            outColor.a *= texture(MOD_texOpacity, texCoord).a;\n        #endif\n        if (outColor.a < MOD_inOpacityThreshold) discard;\n    #endif\n    '
	}),
	x.addUniformFrag('f', 'MOD_inOpacityThreshold', _),
	x.toggleDefine('MOD_ALPHA_MASK_LUMINANCE', 'Luminance' === b.get()),
	x.toggleDefine('MOD_ALPHA_MASK_R', 'R' === b.get()),
	x.toggleDefine('MOD_ALPHA_MASK_G', 'G' === b.get()),
	x.toggleDefine('MOD_ALPHA_MASK_B', 'B' === b.get()),
	x.toggleDefine('MOD_ALPHA_MASK_A', 'A' === b.get());
	const O = t.head_vert,
	C = '',
	N = t.head_frag,
	y = '';
	let w = O,
	P = C,
	G = N,
	U = y;
	const R = new CGL.ShaderModifier(n, 'shadowModule');
	R.define('SAMPLE_AMOUNT', 'float(' + o(Number(u.get()), 1, 16).toString() + ')'),
	R.toggleDefine('RECEIVE_SHADOW', l),
	c.forEach(e=>R.toggleDefine('MODE_' + e.toUpperCase(), e === d.get()));
	const F = [
	],
	H = [
	];
	function B() {
	  n.frameStore.lightStack.length !== A.lastLength && D(),
	  function () {
		if (A.updating) return;
		l.get();
		for (let e = 0; e < n.frameStore.lightStack.length; e += 1) {
		  const t = n.frameStore.lightStack[e];
		  'ambient' !== t.type && (t.isUsed || (t.isUsed = !0), 'point' !== t.type ? R.setUniformValue('MOD_light' + e + '.position', t.position) : R.setUniformValue('MOD_light' + e + '.position', t.positionForShadowMap), R.setUniformValue('MOD_light' + e + '.typeCastShadow', [
			i[t.type],
			Number(t.castShadow)
		  ]), R.setUniformValue('MOD_light' + e + '.shadowStrength', t.shadowStrength), t.shadowMap ? (F[e] || (F[e] = !0, H[e] = !1), R.hasDefine('HAS_SHADOW_MAP_' + e) || R.define('HAS_SHADOW_MAP_' + e, !0), 'point' !== t.type && (R.setUniformValue('MOD_lightMatrix' + e, t.lightMatrix), R.setUniformValue('MOD_normalOffset' + e, t.normalOffset)), R.setUniformValue('MOD_light' + e + '.shadowProperties', [
			t.nearFar[0],
			t.nearFar[1],
			t.shadowMap.width,
			t.shadowBias
		  ]), 'point' === t.type && R.setUniformValue('MOD_camPos', [
			X[12],
			X[13],
			X[14]
		  ]), F[e] && t.shadowMap.tex && R.pushTexture('MOD_shadowMap' + e, t.shadowMap.tex)) : t.shadowCubeMap ? (H[e] || (H[e] = !0, F[e] = !1), R.hasDefine('HAS_SHADOW_MAP_' + e) || R.define('HAS_SHADOW_MAP_' + e, ''), R.setUniformValue('MOD_light' + e + '.shadowProperties', [
			t.nearFar[0],
			t.nearFar[1],
			t.shadowCubeMap.size,
			t.shadowBias
		  ]), H[e] && t.shadowCubeMap.cubemap && R.pushTexture('MOD_shadowMapCube' + e, t.shadowCubeMap.cubemap, n.gl.TEXTURE_CUBE_MAP)) : F[e] ? (R.hasDefine('HAS_SHADOW_MAP_' + e) && R.removeDefine('HAS_SHADOW_MAP_' + e), F[e] = !1) : H[e] && (R.hasDefine('HAS_SHADOW_MAP_' + e) && R.removeDefine('HAS_SHADOW_MAP_' + e), H[e] = !1))
		}
	  }()
	}
	r.onLinkChanged = function () {
	  r.isLinked() || (A.lastLength = 0),
	  F.length = 0,
	  H.length = 0
	},
	v.onLinkChanged = function () {
	  v.isLinked() || (A.lastLength = 0),
	  F.length = 0,
	  H.length = 0
	};
	const X = mat4.create();
	r.onTriggered = (() =>{
	  if (A.updating) v.trigger();
	   else if (n.frameStore.shadowPass) {
		if (!s.get()) return;
		m.get() ? (E.get() ? (x.hasUniform('MOD_texOpacity') || x.addUniformFrag('t', 'MOD_texOpacity', 0), x.hasDefine('MOD_HAS_TEXTURE_OPACITY') || x.define('MOD_HAS_TEXTURE_OPACITY', ''), x.pushTexture('MOD_texOpacity', E.get().tex)) : (x.hasUniform('MOD_texOpacity') && x.removeUniform('MOD_texOpacity'), x.hasDefine('MOD_HAS_TEXTURE_OPACITY') && x.removeDefine('MOD_HAS_TEXTURE_OPACITY')), x.bind(), v.trigger(), x.unbind()) : v.trigger()
	  } else l.get() ? (!function () {
		if (n.frameStore.lightStack) if (0 === n.frameStore.lightStack.length) e.setUiError('nolights', 'There are no lights in the patch. Please add lights before this op and activate their "Cast Shadow" property to be able to use shadows.', 1);
		 else {
		  e.setUiError('nolights', null);
		  let t = !1,
		  a = !0;
		  for (let e = 0; e < n.frameStore.lightStack.length; e += 1) t = t || n.frameStore.lightStack[e].castShadow,
		  n.frameStore.lightStack[e].castShadow && 'point' !== n.frameStore.lightStack[e].type && (a = a && n.frameStore.lightStack[e].blurAmount > 0);
		  t ? (e.setUiError('nolights2', null), l.get() ? e.setUiError('inReceiveShadowActive', null) : e.setUiError('inReceiveShadowActive', 'Your lights cast shadows but the "Receive Shadow" option in this op is not active. Please enable it to use shadows.', 1)) : (e.setUiError('nolights2', 'There are lights in the patch but none that cast shadows. Please activate the "Cast Shadow" property of one of your lights in the patch to make shadows visible.', 1), e.setUiError('inReceiveShadowActive', null)),
		  a ? e.setUiError('vsmBlurZero', null) : 'VSM' === d.get() ? e.setUiError('vsmBlurZero', 'You chose the VSM algorithm but one of your lights still has a blur amount of 0. For VSM to work correctly, consider raising the blur amount in your lights.', 1) : e.setUiError('vsmBlurZero', null)
		} else e.setUiError('nolights', 'There are no lights in the patch. Please add lights before this op and activate their "Cast Shadow" property to be able to use shadows.', 1)
	  }(), mat4.invert(X, n.vMatrix), n.frameStore.lightStack ? n.frameStore.lightStack.length ? (B(), R.bind(), v.trigger(), R.unbind()) : (v.trigger(), A.lastLength = 0, F.length = 0, H.length = 0) : v.trigger()) : v.trigger()
	})
  },
  Ops.Gl.ShaderEffects.Shadow_v2.prototype = new CABLES.Op,
  CABLES.OPS['f5214bd2-575d-4c0c-a7a9-4eff76915ac1'] = {
	f: Ops.Gl.ShaderEffects.Shadow_v2,
	objName: 'Ops.Gl.ShaderEffects.Shadow_v2'
  },
  Ops.Gl.Phong.SpotLight_v5 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.patch.cgl,
	n = e.inTrigger('Trigger In'),
	a = e.inBool('Cast Light', !0),
	i = e.inFloat('Intensity', 2),
	o = e.inFloat('Radius', 10),
	r = e.inFloat('X', 1),
	s = e.inFloat('Y', 3),
	l = e.inFloat('Z', 1),
	c = [
	  r,
	  s,
	  l
	];
	e.setPortGroup('Position', c);
	const d = e.inFloat('Point At X', 0),
	u = e.inFloat('Point At Y', 0),
	f = e.inFloat('Point At Z', 0),
	h = [
	  d,
	  u,
	  f
	];
	e.setPortGroup('Point At', h);
	const g = e.inFloatSlider('R', 1),
	p = e.inFloatSlider('G', 1),
	m = e.inFloatSlider('B', 1);
	g.setUiAttribs({
	  colorPick: !0
	});
	const _ = [
	  g,
	  p,
	  m
	];
	e.setPortGroup('Color', _);
	const b = e.inFloatSlider('Specular R', 1),
	E = e.inFloatSlider('Specular G', 1),
	I = e.inFloatSlider('Specular B', 1);
	b.setUiAttribs({
	  colorPick: !0
	});
	const v = [
	  b,
	  E,
	  I
	];
	e.setPortGroup('Specular Color', v);
	const M = e.inFloat('Cone Angle', 120),
	L = e.inFloat('Inner Cone Angle', 60),
	T = e.inFloat('Spot Exponent', 0.97),
	S = [
	  M,
	  L,
	  T
	];
	e.setPortGroup('Cone Attributes', S);
	const A = e.inFloatSlider('Falloff', 0.00001),
	D = [
	  a,
	  i,
	  o
	];
	e.setPortGroup('Light Attributes', D);
	const x = e.inBool('Cast Shadow', !1),
	O = e.inBool('Rendering Active', !0),
	C = e.inSwitch('Map Size', [
	  256,
	  512,
	  1024,
	  2048
	], 512),
	N = e.inFloatSlider('Shadow Strength', 0.99),
	y = e.inFloat('Near', 0.1),
	w = e.inFloat('Far', 30),
	P = e.inFloatSlider('Bias', 0.0001),
	G = e.inInt('Polygon Offset', 0),
	U = e.inFloatSlider('Normal Offset', 0),
	R = e.inFloatSlider('Blur Amount', 0);
	e.setPortGroup('', [
	  x
	]),
	e.setPortGroup('Shadow Map Settings', [
	  C,
	  O,
	  N,
	  y,
	  w,
	  P,
	  G,
	  U,
	  R
	]),
	C.setUiAttribs({
	  greyout: !0,
	  hidePort: !0
	}),
	O.setUiAttribs({
	  greyout: !0
	}),
	N.setUiAttribs({
	  greyout: !0
	}),
	y.setUiAttribs({
	  greyout: !0,
	  hidePort: !0
	}),
	w.setUiAttribs({
	  greyout: !0,
	  hidePort: !0
	}),
	R.setUiAttribs({
	  greyout: !0,
	  hidePort: !0
	}),
	G.setUiAttribs({
	  greyout: !0,
	  hidePort: !0
	}),
	U.setUiAttribs({
	  greyout: !0,
	  hidePort: !0
	}),
	P.setUiAttribs({
	  greyout: !0,
	  hidePort: !0
	});
	const F = e.inBool('Enable Advanced', !1),
	H = e.inSwitch('MSAA', [
	  'none',
	  '2x',
	  '4x',
	  '8x'
	], 'none'),
	B = e.inSwitch('Texture Filter', [
	  'Linear',
	  'Nearest',
	  'Mip Map'
	], 'Linear'),
	X = e.inSwitch('Anisotropic', [
	  0,
	  1,
	  2,
	  4,
	  8,
	  16
	], '0');
	H.setUiAttribs({
	  greyout: !0,
	  hidePort: !0
	}),
	B.setUiAttribs({
	  greyout: !0,
	  hidePort: !0
	}),
	X.setUiAttribs({
	  greyout: !0,
	  hidePort: !0
	}),
	e.setPortGroup('Advanced Options', [
	  F,
	  H,
	  B,
	  X
	]);
	let k = !1;
	F.setUiAttribs({
	  hidePort: !0
	}),
	F.onChange = function () {
	  H.setUiAttribs({
		greyout: !F.get()
	  }),
	  B.setUiAttribs({
		greyout: !F.get()
	  }),
	  X.setUiAttribs({
		greyout: !F.get()
	  })
	};
	const j = e.outTrigger('Trigger Out'),
	V = e.outTexture('Shadow Map'),
	z = e.outNumber('World Position X'),
	W = e.outNumber('World Position Y'),
	Z = e.outNumber('World Position Z'),
	Y = new CGL.Light(t, {
	  type: 'spot',
	  position: [
		0,
		1,
		2
	  ].map(function (e) {
		return c[e].get()
	  }),
	  color: [
		0,
		1,
		2
	  ].map(function (e) {
		return _[e].get()
	  }),
	  specular: [
		0,
		1,
		2
	  ].map(function (e) {
		return v[e].get()
	  }),
	  conePointAt: [
		0,
		1,
		2
	  ].map(function (e) {
		return h[e].get()
	  }),
	  intensity: i.get(),
	  radius: o.get(),
	  falloff: A.get(),
	  cosConeAngleInner: Math.cos(CGL.DEG2RAD * L.get()),
	  cosConeAngle: Math.cos(CGL.DEG2RAD * M.get()),
	  spotExponent: T.get(),
	  castShadow: !1,
	  shadowStrength: N.get(),
	  shadowBias: P.get(),
	  normalOffset: U.get()
	});
	Y.castLight = a.get();
	let J = !1;
	g.onChange = p.onChange = m.onChange = b.onChange = E.onChange = I.onChange = d.onChange = u.onChange = f.onChange = r.onChange = s.onChange = l.onChange,
	a.onChange = i.onChange = o.onChange = A.onChange = M.onChange = L.onChange = T.onChange = N.onChange = y.onChange = w.onChange = function () {
	  J = !0
	},
	x.onChange = function () {
	  k = !0;
	  const e = x.get();
	  C.setUiAttribs({
		greyout: !e
	  }),
	  O.setUiAttribs({
		greyout: !e
	  }),
	  N.setUiAttribs({
		greyout: !e
	  }),
	  y.setUiAttribs({
		greyout: !e
	  }),
	  w.setUiAttribs({
		greyout: !e
	  }),
	  U.setUiAttribs({
		greyout: !e
	  }),
	  R.setUiAttribs({
		greyout: !e
	  }),
	  P.setUiAttribs({
		greyout: !e
	  }),
	  G.setUiAttribs({
		greyout: !e
	  }),
	  J = !0
	};
	let K = 1 / Number(C.get());
	function Q() {
	  const e = Number(C.get());
	  K = 1 / e,
	  x.get() && (Y.createFramebuffer(Number(C.get()), Number(C.get()), {
	  }), Y.createShadowMapShader(), Y.createBlurEffect({
	  }), Y.createBlurShader(), Y.updateProjectionMatrix(null, y.get(), w.get(), M.get())),
	  F.get() && function () {
		const e = Number(H.get().charAt(0));
		let t = null;
		const n = Number(X.get());
		'Linear' == B.get() ? t = CGL.Texture.FILTER_LINEAR : 'Nearest' == B.get() ? t = CGL.Texture.FILTER_NEAREST : 'Mip Map' == B.get() && (t = CGL.Texture.FILTER_MIPMAP);
		const a = Number(C.get()),
		i = {
		  isFloatingPointTexture: !0,
		  filter: t
		};
		e && Object.assign(i, {
		  multisampling: !0,
		  multisamplingSamples: e
		}),
		Object.assign(i, {
		  anisotropic: n
		}),
		Y.createFramebuffer(a, a, i),
		Y.createBlurEffect(i)
	  }(),
	  k = !1
	}
	H.onChange = X.onChange = B.onChange = C.onChange = function () {
	  k = !0
	};
	const q = vec3.create(),
	$ = vec3.create(),
	ee = vec3.create(),
	te = vec3.create();
	let ne = !1;
	n.onTriggered = function () {
	  if (k) {
		if (t.frameStore.shadowPass) return;
		Q()
	  }
	  if (t.frameStore.shadowPass || (Y.isUsed || ne ? !Y.isUsed && ne || (Y.isUsed && ne ? (e.setUiError('lightUsed', null), ne = !1) : Y.isUsed) : (e.setUiError('lightUsed', 'No operator is using this light. Make sure this op is positioned before an operator that uses lights. Also make sure there is an operator that uses lights after this.', 1), ne = !0), Y.isUsed = !1), J && (Y.position = [
		0,
		1,
		2
	  ].map(function (e) {
		return c[e].get()
	  }), Y.color = [
		0,
		1,
		2
	  ].map(function (e) {
		return _[e].get()
	  }), Y.specular = [
		0,
		1,
		2
	  ].map(function (e) {
		return v[e].get()
	  }), Y.conePointAt = [
		0,
		1,
		2
	  ].map(function (e) {
		return h[e].get()
	  }), Y.intensity = i.get(), Y.castLight = a.get(), Y.radius = o.get(), Y.falloff = A.get(), Y.cosConeAngleInner = Math.cos(CGL.DEG2RAD * L.get()), Y.cosConeAngle = Math.cos(CGL.DEG2RAD * M.get()), Y.spotExponent = T.get(), Y.castShadow = x.get(), Y.updateProjectionMatrix(null, y.get(), w.get(), M.get())), t.frameStore.lightStack || (t.frameStore.lightStack = [
	  ]), vec3.set(q, r.get(), s.get(), l.get()), vec3.set($, d.get(), u.get(), f.get()), vec3.transformMat4(ee, q, t.mMatrix), vec3.transformMat4(te, $, t.mMatrix), Y.position = ee, Y.conePointAt = te, z.set(Y.position[0]), W.set(Y.position[1]), Z.set(Y.position[2]), t.frameStore.shadowPass || t.frameStore.shadowPass || t.shouldDrawHelpers(e) && (gui.setTransformGizmo({
		posX: r,
		posY: s,
		posZ: l
	  }), CABLES.GL_MARKER.drawLineSourceDest({
		op: e,
		sourceX: Y.position[0],
		sourceY: Y.position[1],
		sourceZ: Y.position[2],
		destX: Y.conePointAt[0],
		destY: Y.conePointAt[1],
		destZ: Y.conePointAt[2]
	  })), t.frameStore.lightStack.push(Y), x.get()) {
		const e = 1.5 * R.get() * K;
		O.get() && Y.renderPasses(G.get(), e, function () {
		  j.trigger()
		}),
		V.set(null),
		V.set(Y.getShadowMapDepth()),
		t.frameStore.lightStack.pop(),
		Y.castShadow = x.get(),
		Y.blurAmount = R.get(),
		Y.normalOffset = U.get(),
		Y.shadowBias = P.get(),
		Y.shadowStrength = N.get(),
		t.frameStore.lightStack.push(Y)
	  }
	  j.trigger(),
	  t.frameStore.lightStack.pop()
	}
  },
  Ops.Gl.Phong.SpotLight_v5.prototype = new CABLES.Op,
  CABLES.OPS['76418c17-abd5-401b-82e2-688db6f966ee'] = {
	f: Ops.Gl.Phong.SpotLight_v5,
	objName: 'Ops.Gl.Phong.SpotLight_v5'
  },
  Ops.Gl.Shader.BasicMaterial_v3 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = '{{MODULES_HEAD}}\n\nIN vec2 texCoord;\n\n#ifdef HAS_TEXTURES\n    IN vec2 texCoordOrig;\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D tex;\n    #endif\n    #ifdef HAS_TEXTURE_OPACITY\n        UNI sampler2D texOpacity;\n   #endif\n#endif\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col=color;\n\n    #ifdef HAS_TEXTURES\n        vec2 uv=texCoord;\n\n        #ifdef CROP_TEXCOORDS\n            if(uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) discard;\n        #endif\n\n        #ifdef HAS_TEXTURE_DIFFUSE\n            col=texture(tex,uv);\n\n            #ifdef COLORIZE_TEXTURE\n                col.r*=color.r;\n                col.g*=color.g;\n                col.b*=color.b;\n            #endif\n        #endif\n        col.a*=color.a;\n        #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                uv=texCoordOrig;\n            #endif\n            #ifdef ALPHA_MASK_ALPHA\n                col.a*=texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_LUMI\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\n            #endif\n            #ifdef ALPHA_MASK_R\n                col.a*=texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_G\n                col.a*=texture(texOpacity,uv).g;\n            #endif\n            #ifdef ALPHA_MASK_B\n                col.a*=texture(texOpacity,uv).b;\n            #endif\n            // #endif\n        #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n    outColor = col;\n}\n',
	n = 'IN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN float attrVertIndex;\n\n{{MODULES_HEAD}}\n\nOUT vec3 norm;\nOUT vec2 texCoord;\nOUT vec2 texCoordOrig;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI float diffuseRepeatX;\n    UNI float diffuseRepeatY;\n    UNI float texOffsetX;\n    UNI float texOffsetY;\n#endif\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    mat4 mvMatrix;\n\n    norm=attrVertNormal;\n    texCoordOrig=attrTexCoord;\n    texCoord=attrTexCoord;\n    #ifdef HAS_TEXTURES\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\n        texCoord.y=(1.0-texCoord.y)*diffuseRepeatY+texOffsetY;\n    #endif\n\n    vec4 pos = vec4(vPosition, 1.0);\n\n    #ifdef BILLBOARD\n       vec3 position=vPosition;\n       mvMatrix=viewMatrix*modelMatrix;\n\n       gl_Position = projMatrix * mvMatrix * vec4((\n           position.x * vec3(\n               mvMatrix[0][0],\n               mvMatrix[1][0],\n               mvMatrix[2][0] ) +\n           position.y * vec3(\n               mvMatrix[0][1],\n               mvMatrix[1][1],\n               mvMatrix[2][1]) ), 1.0);\n    #endif\n\n    {{MODULE_VERTEX_POSITION}}\n\n    #ifndef BILLBOARD\n        mvMatrix=viewMatrix * mMatrix;\n    #endif\n\n\n    #ifndef BILLBOARD\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n        gl_Position = projMatrix * mvMatrix * pos;\n    #endif\n}\n',
	a = e.inTrigger('render'),
	i = e.outTrigger('trigger'),
	o = e.outObject('shader', null, 'shader');
	o.ignoreValueSerialize = !0,
	e.toWorkPortsNeedToBeLinked(a);
	const r = e.patch.cgl,
	s = new CGL.Shader(r, 'basicmaterialnew');
	s.setModules(['MODULE_VERTEX_POSITION',
	'MODULE_COLOR',
	'MODULE_BEGIN_FRAG']),
	s.setSource(n, t),
	o.set(s),
	a.onTriggered = A;
	const l = e.inValueSlider('r', Math.random()),
	c = e.inValueSlider('g', Math.random()),
	d = e.inValueSlider('b', Math.random()),
	u = e.inValueSlider('a', 1);
	l.setUiAttribs({
	  colorPick: !0
	}),
	s.addUniformFrag('4f', 'color', l, c, d, u);
	const f = e.inTexture('texture');
	let h = null;
	f.onChange = x;
	const g = e.inValueBool('colorizeTexture', !1),
	p = e.inTexture('textureOpacity');
	let m = null;
	const _ = e.inSwitch('Alpha Mask Source', [
	  'Luminance',
	  'R',
	  'G',
	  'B',
	  'A'
	], 'Luminance');
	_.setUiAttribs({
	  greyout: !0
	}),
	p.onChange = D;
	const b = e.inValueBool('Opacity TexCoords Transform', !1),
	E = e.inValueBool('Discard Transparent Pixels'),
	I = e.inValue('diffuseRepeatX', 1),
	v = e.inValue('diffuseRepeatY', 1),
	M = e.inValue('Tex Offset X', 0),
	L = e.inValue('Tex Offset Y', 0),
	T = e.inBool('Crop TexCoords', !1);
	s.addUniformFrag('f', 'diffuseRepeatX', I),
	s.addUniformFrag('f', 'diffuseRepeatY', v),
	s.addUniformFrag('f', 'texOffsetX', M),
	s.addUniformFrag('f', 'texOffsetY', L);
	const S = e.inValueBool('billboard', !1);
	function A() {
	  s && (r.pushShader(s), s.popTextures(), h && f.get() && s.pushTexture(h, f.get().tex), m && p.get() && s.pushTexture(m, p.get().tex), i.trigger(), r.popShader())
	}
	function D() {
	  if (p.get()) {
		if (null !== m) return;
		s.removeUniform('texOpacity'),
		s.define('HAS_TEXTURE_OPACITY'),
		m || (m = new CGL.Uniform(s, 't', 'texOpacity')),
		_.setUiAttribs({
		  greyout: !1
		}),
		b.setUiAttribs({
		  greyout: !1
		})
	  } else s.removeUniform('texOpacity'),
	  s.removeDefine('HAS_TEXTURE_OPACITY'),
	  m = null,
	  _.setUiAttribs({
		greyout: !0
	  }),
	  b.setUiAttribs({
		greyout: !0
	  });
	  O()
	}
	function x() {
	  f.get() ? (s.hasDefine('HAS_TEXTURE_DIFFUSE') || s.define('HAS_TEXTURE_DIFFUSE'), h || (h = new CGL.Uniform(s, 't', 'texDiffuse')), I.setUiAttribs({
		greyout: !1
	  }), v.setUiAttribs({
		greyout: !1
	  }), M.setUiAttribs({
		greyout: !1
	  }), L.setUiAttribs({
		greyout: !1
	  }), g.setUiAttribs({
		greyout: !1
	  })) : (s.removeUniform('texDiffuse'), s.removeDefine('HAS_TEXTURE_DIFFUSE'), h = null, I.setUiAttribs({
		greyout: !0
	  }), v.setUiAttribs({
		greyout: !0
	  }), M.setUiAttribs({
		greyout: !0
	  }), L.setUiAttribs({
		greyout: !0
	  }), g.setUiAttribs({
		greyout: !0
	  }))
	}
	function O() {
	  s.toggleDefine('CROP_TEXCOORDS', T.get()),
	  s.toggleDefine('COLORIZE_TEXTURE', g.get()),
	  s.toggleDefine('TRANSFORMALPHATEXCOORDS', b.get()),
	  s.toggleDefine('DISCARDTRANS', E.get()),
	  s.toggleDefine('BILLBOARD', S.get()),
	  s.toggleDefine('ALPHA_MASK_ALPHA', 'A' == _.get()),
	  s.toggleDefine('ALPHA_MASK_LUMI', 'Luminance' == _.get()),
	  s.toggleDefine('ALPHA_MASK_R', 'R' == _.get()),
	  s.toggleDefine('ALPHA_MASK_G', 'G' == _.get()),
	  s.toggleDefine('ALPHA_MASK_B', 'B' == _.get())
	}
	_.onChange = S.onChange = E.onChange = b.onChange = T.onChange = g.onChange = O,
	e.setPortGroup('Color', [
	  l,
	  c,
	  d,
	  u
	]),
	e.setPortGroup('Color Texture', [
	  f,
	  g
	]),
	e.setPortGroup('Opacity', [
	  p,
	  _,
	  E,
	  b
	]),
	e.setPortGroup('Texture Transform', [
	  I,
	  v,
	  M,
	  L,
	  T
	]),
	D(),
	x(),
	e.preRender = function () {
	  s.bind(),
	  A()
	}
  },
  Ops.Gl.Shader.BasicMaterial_v3.prototype = new CABLES.Op,
  CABLES.OPS['ec55d252-3843-41b1-b731-0482dbd9e72b'] = {
	f: Ops.Gl.Shader.BasicMaterial_v3,
	objName: 'Ops.Gl.Shader.BasicMaterial_v3'
  },
  Ops.Gl.Meshes.Rectangle_v2 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inTrigger('render'),
	n = e.outTrigger('trigger'),
	a = e.inValue('width', 1),
	i = e.inValue('height', 1),
	o = e.inSwitch('pivot x', [
	  'left',
	  'center',
	  'right'
	]),
	r = e.inSwitch('pivot y', [
	  'top',
	  'center',
	  'bottom'
	]),
	s = e.inValueInt('num columns', 1),
	l = e.inValueInt('num rows', 1),
	c = e.inSwitch('axis', [
	  'xy',
	  'xz'
	], 'xy'),
	d = e.inValueBool('Active', !0),
	u = e.outObject('geometry', null, 'geometry');
	u.ignoreValueSerialize = !0;
	const f = e.patch.cgl;
	c.set('xy'),
	o.set('center'),
	r.set('center'),
	e.setPortGroup('Pivot', [
	  o,
	  r
	]),
	e.setPortGroup('Size', [
	  a,
	  i
	]),
	e.setPortGroup('Structure', [
	  s,
	  l
	]),
	e.toWorkPortsNeedToBeLinked(t);
	const h = new CGL.Geometry('rectangle');
	let g = null,
	p = !1;
	function m() {
	  let e = a.get(),
	  t = parseFloat(i.get()),
	  n = 0,
	  d = 0;
	  'string' == typeof e && (e = parseFloat(e)),
	  'string' == typeof t && (t = parseFloat(t)),
	  'center' == o.get() ? n = 0 : 'right' == o.get() ? n = - e / 2 : 'left' == o.get() && (n = + e / 2),
	  'center' == r.get() ? d = 0 : 'top' == r.get() ? d = - t / 2 : 'bottom' == r.get() && (d = + t / 2);
	  const m = [
	  ],
	  _ = [
	  ],
	  b = [
	  ],
	  E = [
	  ],
	  I = [
	  ],
	  v = [
	  ],
	  M = Math.round(l.get()),
	  L = Math.round(s.get()),
	  T = e / L,
	  S = t / M;
	  let A,
	  D,
	  x;
	  for (x = c.get(), D = 0; D <= M; D++) for (A = 0; A <= L; A++) m.push(A * T - a.get() / 2 + n),
	  'xz' == x && m.push(0),
	  m.push(D * S - i.get() / 2 + d),
	  'xy' == x && m.push(0),
	  _.push(A / L),
	  _.push(1 - D / M),
	  'xz' == x ? (b.push(0, 1, 0), E.push(1, 0, 0), I.push(0, 0, 1)) : 'xy' == x && (b.push(0, 0, 1), E.push( - 1, 0, 0), I.push(0, - 1, 0));
	  for (A = 0; A < L; A++) for (D = 0; D < M; D++) {
		const e = A + (L + 1) * D,
		t = e,
		n = e + 1,
		a = e + L + 1,
		i = e + 1 + L + 1;
		v.push(t),
		v.push(a),
		v.push(n),
		v.push(n),
		v.push(a),
		v.push(i)
	  }
	  h.clear(),
	  h.vertices = m,
	  h.texCoords = _,
	  h.verticesIndices = v,
	  h.vertexNormals = b,
	  h.tangents = E,
	  h.biTangents = I,
	  L * M > 64000 && h.unIndex(),
	  g ? g.setGeom(h) : g = new CGL.Mesh(f, h),
	  u.set(null),
	  u.set(h),
	  p = !1
	}
	c.onChange = o.onChange = r.onChange = a.onChange = i.onChange = l.onChange = s.onChange = function () {
	  p = !0
	},
	m(),
	e.preRender = t.onTriggered = function () {
	  CGL.TextureEffect.checkOpNotInTextureEffect(e) && (p && m(), d.get() && g && g.render(f.getShader()), n.trigger())
	},
	e.onDelete = function () {
	  g && g.dispose()
	}
  },
  Ops.Gl.Meshes.Rectangle_v2.prototype = new CABLES.Op,
  CABLES.OPS['fc5718d6-11a5-496e-8f16-1c78b1a2824c'] = {
	f: Ops.Gl.Meshes.Rectangle_v2,
	objName: 'Ops.Gl.Meshes.Rectangle_v2'
  },
  Ops.Anim.RandomAnim = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inTrigger('exe'),
	n = e.inValue('min', 0),
	a = e.inValue('max', 1),
	i = e.inValue('random seed', 0),
	o = e.inValue('duration', 0.5),
	r = e.inValue('pause between', 0),
	s = e.outTrigger('Next'),
	l = e.outValue('result'),
	c = e.outTrigger('Looped'),
	d = new CABLES.Anim;
	d.createPort(e, 'easing', g),
	e.setPortGroup('Timing', [
	  o,
	  r
	]),
	e.setPortGroup('Value', [
	  n,
	  a,
	  i
	]),
	e.toWorkPortsNeedToBeLinked(t);
	let u = 0;
	n.onChange = a.onChange = r.onChange = i.onChange = o.onChange = function () {
	  f = !0
	};
	let f = !0;
	function h() {
	  const e = n.get();
	  return Math.seededRandom() * (a.get() - e) + e
	}
	function g() {
	  Math.randomSeed = i.get() + 100 * u,
	  p(h()),
	  f = !1
	}
	function p(t) {
	  d.clear(),
	  d.setValue(e.patch.freeTimer.get(), t),
	  0 !== r.get() && d.setValue(e.patch.freeTimer.get() + r.get(), t),
	  d.setValue(o.get() + e.patch.freeTimer.get() + r.get(), h())
	}
	t.onTriggered = function () {
	  f && g();
	  const t = e.patch.freeTimer.get(),
	  n = d.getValue(t);
	  d.hasEnded(t) && (u++, d.clear(), p(n), c.trigger());
	  l.set(n),
	  s.trigger()
	}
  },
  Ops.Anim.RandomAnim.prototype = new CABLES.Op,
  CABLES.OPS['2d2e5f0e-b69f-4789-9a48-1ee6ade5049a'] = {
	f: Ops.Anim.RandomAnim,
	objName: 'Ops.Anim.RandomAnim'
  },
  Ops.Gl.Meshes.Sphere_v2 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = 2 * Math.PI,
	n = e.patch.cgl,
	a = e.inTrigger('render'),
	i = e.inValue('radius', 1),
	o = e.inValue('stacks', 32),
	r = e.inValue('slices', 32),
	s = e.inValueSlider('Filloffset', 1),
	l = e.inValueBool('Render', !0),
	c = e.outTrigger('trigger'),
	d = e.outObject('geometry'),
	u = vec3.fromValues(0, 1, 0),
	f = vec3.fromValues(1, 0, 0);
	let h,
	g = new CGL.Geometry('Sphere'),
	p = vec3.create(),
	m = vec3.create(),
	_ = !0;
	a.onTriggered = function () {
	  _ && function () {
		const e = Math.max(o.get(), 2),
		a = Math.max(r.get(), 3),
		l = Math.min(Math.max(s.get() * e, 1), e),
		c = i.get();
		let b,
		E,
		I,
		v,
		M,
		L,
		T,
		S,
		A,
		D,
		x,
		O = [
		],
		C = [
		],
		N = [
		],
		y = [
		],
		w = [
		],
		P = [
		];
		for (D = T = 0; D < e + 1; D++) {
		  for (A = (D / e - 0.5) * Math.PI, E = Math.sin(A), L = Math.cos(A), x = a; x >= 0; x--) S = x / a * t,
		  b = Math.cos(S) * L,
		  I = Math.sin(S) * L,
		  O.push(b * c, E * c, I * c),
		  C.push(x / a, D / (e + 1)),
		  v = Math.sqrt(b * b + E * E + I * I),
		  N.push(p[0] = b / v, p[1] = E / v, p[2] = I / v),
		  M = E == v ? f : u,
		  vec3.cross(m, p, M),
		  vec3.normalize(m, m),
		  Array.prototype.push.apply(y, m),
		  vec3.cross(m, m, p),
		  Array.prototype.push.apply(w, m);
		  if (!(0 == D || D > l)) {
			for (x = 0; x < a; x++, T++) P.push(T, T + 1, T + a + 1, T + 1, T + a + 2, T + a + 1);
			T++
		  }
		}
		g.clear(),
		g.vertices = O,
		g.texCoords = C,
		g.vertexNormals = N,
		g.tangents = y,
		g.biTangents = w,
		g.verticesIndices = P,
		d.set(null),
		d.set(g),
		h ? h.setGeom(g) : h = new CGL.Mesh(n, g),
		_ = !1
	  }(),
	  l.get() && h.render(n.getShader()),
	  c.trigger()
	},
	o.onChange = r.onChange = s.onChange = i.onChange = function () {
	  _ = !0
	},
	e.onDelete = function () {
	  h && h.dispose()
	}
  },
  Ops.Gl.Meshes.Sphere_v2.prototype = new CABLES.Op,
  CABLES.OPS['450b4d68-2278-4d9f-9849-0abdfa37ef69'] = {
	f: Ops.Gl.Meshes.Sphere_v2,
	objName: 'Ops.Gl.Meshes.Sphere_v2'
  },
  Ops.Gl.Performance = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inTrigger('exe'),
	n = e.inValueBool('Visible', !0),
	a = e.outTrigger('childs'),
	i = e.inSwitch('Position', [
	  'top',
	  'bottom'
	], 'top'),
	o = e.inBool('Open', !1),
	r = e.inBool('Smooth Graph', !0),
	s = e.inFloat('Scale', 4),
	l = e.inFloat('Size', 128),
	c = e.outValue('FPS'),
	d = e.patch.cgl,
	u = document.createElement('div');
	let f = null,
	h = null,
	g = !1,
	p = 0,
	m = 0,
	_ = 0,
	b = 0,
	E = 0;
	const I = [
	],
	v = [
	],
	M = [
	],
	L = [
	];
	let T = 0,
	S = 0,
	A = null,
	D = 0,
	x = 0;
	const O = [
	  '|',
	  '/',
	  '-',
	  '\\'
	];
	let C = !0;
	const N = '#ffffff',
	y = '#222222',
	w = '#003f5c',
	P = '#7a5195',
	G = '#ef5675',
	U = '#ffa600';
	let R = !1,
	F = 0,
	H = 0,
	B = 0;
	const X = e.patch.cgl.gl,
	k = X.getExtension('EXT_disjoint_timer_query_webgl2');
	let j = null;
	t.onLinkChanged = n.onChange = W,
	i.onChange = z,
	l.onChange = Z,
	u.id = 'performance',
	u.style.position = 'absolute',
	u.style.left = '0px',
	u.style.opacity = '0.8',
	u.style.padding = '10px',
	u.style.cursor = 'pointer',
	u.style.background = '#222',
	u.style.color = 'white',
	u.style['font-family'] = 'monospace',
	u.style['font-size'] = '12px',
	u.style['z-index'] = '99999',
	u.innerHTML = '&nbsp;',
	u.addEventListener('click', Y);
	const V = e.patch.cgl.canvas.parentElement;
	function z() {
	  A.style['pointer-events'] = 'none',
	  'top' == i.get() ? (A.style.top = u.style.top = '0px', A.style.bottom = u.style.bottom = 'initial') : (A.style.bottom = u.style.bottom = '0px', A.style.top = u.style.top = 'initial')
	}
	function W() {
	  n.get() && t.isLinked() ? (u.style.display = 'block', u.style.opacity = 1, A.style.display = 'block') : (u.style.display = 'none', u.style.opacity = 0, A.style.display = 'none')
	}
	function Z() {
	  if (!A) return;
	  const e = Math.max(0, parseInt(l.get()));
	  A.width = e,
	  A.height = e,
	  u.style.left = e + 'px',
	  I.length = 0,
	  v.length = 0,
	  M.length = 0,
	  L.length = 0;
	  for (let t = 0; t < e; t++) I[t] = - 1,
	  v[t] = - 1,
	  M[t] = - 1,
	  L[t] = - 1
	}
	function Y() {
	  n.get() && (u.style.opacity = 1, g = !g, J())
	}
	function J() {
	  K(),
	  A || ((A = document.createElement('canvas')).id = 'performance_' + e.patch.config.glCanvasId, A.width = l.get(), A.height = l.get(), A.style.display = 'block', A.style.opacity = 0.9, A.style.position = 'absolute', A.style.left = '0px', A.style.cursor = 'pointer', A.style.top = '-64px', A.style['z-index'] = '99998', V.appendChild(A), h = A.getContext('2d'), A.addEventListener('click', Y), Z()),
	  g ? (A.style.display = 'block', u.style.left = l.get() + 'px', u.style['min-height'] = '56px') : (A.style.display = 'none', u.style.left = '0px', u.style['min-height'] = 'auto')
	}
	function K() {
	  if (!n.get()) return;
	  let t = '';
	  CGL.profileData.profileShaderCompiles > 0 && (t += 'Shader compile (' + CGL.profileData.profileShaderCompileName + ') '),
	  CGL.profileData.profileShaderGetUniform > 0 && (t += 'Shader get uni loc! (' + CGL.profileData.profileShaderGetUniformName + ')'),
	  CGL.profileData.profileTextureResize > 0 && (t += 'Texture resize! '),
	  CGL.profileData.profileFrameBuffercreate > 0 && (t += 'Framebuffer create! '),
	  CGL.profileData.profileEffectBuffercreate > 0 && (t += 'Effectbuffer create! '),
	  CGL.profileData.profileTextureDelete > 0 && (t += 'Texture delete! '),
	  CGL.profileData.profileNonTypedAttrib > 0 && (t += 'Not-Typed Buffer Attrib! ' + CGL.profileData.profileNonTypedAttribNames),
	  CGL.profileData.profileTextureNew > 0 && (t += 'new texture created! '),
	  CGL.profileData.profileGenMipMap > 0 && (t += 'generating mip maps!'),
	  t.length > 0 && (t = '| <span style="color:#f80;">WARNING: ' + t + '<span>');
	  let a = '';
	  if (g ? (a += '<span style="color:' + w + '">■</span> ' + m + ' fps ', a += '<span style="color:' + P + '">■</span> ' + Math.round(100 * H) / 100 + 'ms mainloop ', a += '<span style="color:' + G + '">■</span> ' + Math.round(100 * B) / 100 + 'ms onframe ', k && (a += '<span style="color:' + U + '">■</span> ' + Math.round(100 * F) / 100 + 'ms GPU'), a += t, u.innerHTML = a) : (a += m + ' fps / ', a += 'CPU: ' + Math.round(100 * (H + CGL.profileData.profileOnAnimFrameOps - CGL.profileData.profileMainloopMs)) / 100 + 'ms / ', k && F && (a += 'GPU: ' + Math.round(100 * F) / 100 + 'ms  '), u.innerHTML = a), 1 != e.patch.loading.getProgress() && (u.innerHTML += '<br/>loading ' + Math.round(100 * e.patch.loading.getProgress()) + '% ' + O[++x % O.length]), g) {
		let e = 0;
		T = 0,
		E = 0;
		for (let t = I.length; t > I.length - I.length / 3; t--) I[t] > - 1 && (T += I[t], e++),
		v[t] > - 1 && (E += v[t]);
		T /= e,
		E /= e,
		u.innerHTML += '<br/> ' + d.canvasWidth + ' x ' + d.canvasHeight + ' (x' + d.pixelDensity + ') ',
		u.innerHTML += '<br/>frame avg: ' + Math.round(100 * E) / 100 + ' ms (' + Math.round(E / T * 100) + '%) / ' + Math.round(100 * T) / 100 + ' ms',
		u.innerHTML += ' (self: ' + Math.round(100 * S) / 100 + ' ms) ',
		u.innerHTML += '<br/>shader binds: ' + Math.ceil(CGL.profileData.profileShaderBinds / m) + ' uniforms: ' + Math.ceil(CGL.profileData.profileUniformCount / m) + ' mvp_uni_mat4: ' + Math.ceil(CGL.profileData.profileMVPMatrixCount / m) + ' num glPrimitives: ' + Math.ceil(CGL.profileData.profileMeshNumElements / m) + ' mesh.setGeom: ' + CGL.profileData.profileMeshSetGeom + ' videos: ' + CGL.profileData.profileVideosPlaying + ' tex preview: ' + CGL.profileData.profileTexPreviews,
		u.innerHTML += ' draw meshes: ' + Math.ceil(CGL.profileData.profileMeshDraw / m) + ' framebuffer blit: ' + Math.ceil(CGL.profileData.profileFramebuffer / m) + ' texeffect blit: ' + Math.ceil(CGL.profileData.profileTextureEffect / m),
		u.innerHTML += ' all shader compiletime: ' + Math.round(100 * CGL.profileData.shaderCompileTime) / 100
	  }
	  CGL.profileData.clear()
	}
	function Q() {
	  if (!CGL.performanceMeasures) return;
	  f || (e.log('create measure ele'), (f = document.createElement('div')).style.width = '100%', f.style['background-color'] = '#444', f.style.bottom = '10px', f.style.height = '100px', f.style.opacity = '1', f.style.position = 'absolute', f.style['z-index'] = '99999', f.innerHTML = '', V.appendChild(f));
	  let t = 0;
	  const n = CGL.performanceMeasures[0];
	  for (let e = 0; e < n.childs.length; e++) t += n.childs[e].used;
	  !function e(t, n, a, i) {
		if (t.usedAvg = t.usedAvg || t.used, !t.ele || C) {
		  const e = document.createElement('div');
		  t.ele = e,
		  t.childs && t.childs.length > 0 ? e.style.height = '500px' : e.style.height = '20px',
		  e.style.overflow = 'hidden',
		  e.style.display = 'inline-block',
		  t.isRoot || (e.innerHTML = '<div style="min-height:20px;width:100%;overflow:hidden;color:black;position:relative">&nbsp;' + t.name + '</div>', e.style['background-color'] = 'rgb(' + t.colR + ',' + t.colG + ',' + t.colB + ')', e.style['border-left'] = '1px solid black'),
		  n.appendChild(e)
		}
		if (t.isRoot ? (t.ele.style.width = '100%', t.ele.style.clear = 'both', t.ele.style.float = 'none') : (performance.now() - t.lastTime > 200 ? (t.ele.style.display = 'none', t.hidden = !0) : t.hidden && (t.ele.style.display = 'inline-block', t.hidden = !1), t.ele.style.float = 'left', t.ele.style.width = Math.floor(t.usedAvg / a * 98) + '%'), t && t.childs && t.childs.length > 0) {
		  let n = 0;
		  for (var o = 0; o < t.childs.length; o++) t.childs[o].usedAvg = 0.95 * (t.childs[o].usedAvg || t.childs[o].used) + 0.05 * t.childs[o].used,
		  n += t.childs[o].usedAvg;
		  for (o = 0; o < t.childs.length; o++) e(t.childs[o], t.ele, n, i + 1)
		}
	  }(CGL.performanceMeasures[0], f, t, 0),
	  n.childs.length = 0,
	  function e(t) {
		for (let n = 0; n < t.childs.length; n++) e(t.childs[n]);
		t.childs.length = 0
	  }(CGL.performanceMeasures[0]),
	  CGL.performanceMeasures.length = 0,
	  C = !1
	}
	V.appendChild(u),
	Z(),
	J(),
	z(),
	W(),
	e.onDelete = function () {
	  A && A.remove(),
	  u && u.remove()
	},
	o.onChange = function () {
	  g = o.get(),
	  J()
	},
	t.onTriggered = function () {
	  const e = performance.now();
	  if (p++, 0 === _ && (_ = Date.now()), Date.now() - _ >= 1000 && (m = p, p = 0, c.set(m), n.get() && K(), _ = Date.now()), n.get() && (Q(), g && !CGL.profileData.pause)) {
		const e = performance.now() - D;
		I.push(e),
		I.shift(),
		v.push(b),
		v.shift(),
		M.push(CGL.profileData.profileOnAnimFrameOps - CGL.profileData.profileMainloopMs),
		M.shift(),
		L.push(F),
		L.shift(),
		function () {
		  const e = A.height,
		  t = s.get();
		  h.fillStyle = y,
		  h.fillRect(0, 0, A.width, e),
		  h.fillStyle = w;
		  let n = 0;
		  const a = Math.max(0, parseInt(l.get()));
		  for (n = a; n >= 0; n--) I[n] > 30 && (h.fillStyle = N),
		  h.fillRect(a - n, e - I[n] * t, 1, I[n] * t),
		  I[n] > 30 && (h.fillStyle = w);
		  for (n = a; n >= 0; n--) {
			let i = 0;
			h.fillStyle = P,
			i = v[n],
			h.fillRect(a - n, e - i * t, 1, v[n] * t),
			h.fillStyle = G,
			i += M[n],
			h.fillRect(a - n, e - i * t, 1, M[n] * t),
			h.fillStyle = U,
			i += L[n],
			h.fillRect(a - n, e - i * t, 1, L[n] * t)
		  }
		}()
	  }
	  D = performance.now(),
	  S = performance.now() - e;
	  const t = performance.now();
	  !function () {
		if (!k) return;
		j || (j = X.createQuery(), X.beginQuery(k.TIME_ELAPSED_EXT, j), R = !0)
	  }(),
	  a.trigger(),
	  function () {
		if (!k) return;
		j && R && (X.endQuery(k.TIME_ELAPSED_EXT), R = !1);
		if (j) {
		  const e = X.getQueryParameter(j, X.QUERY_RESULT_AVAILABLE);
		  if (e) {
			const e = X.getQueryParameter(j, X.QUERY_RESULT);
			F = e / 1000000,
			j = null
		  }
		}
	  }();
	  const i = performance.now() - t,
	  o = CGL.profileData.profileMainloopMs,
	  d = CGL.profileData.profileOnAnimFrameOps - H;
	  r.get() ? (b = 0.9 * b + 0.1 * i, H = 0.9 * H + 0.1 * o, B = 0.9 * B + 0.1 * d) : (b = i, H = o, B = d)
	}
  },
  Ops.Gl.Performance.prototype = new CABLES.Op,
  CABLES.OPS['9cd2d9de-000f-4a14-bd13-e7d5f057583c'] = {
	f: Ops.Gl.Performance,
	objName: 'Ops.Gl.Performance'
  },
  Ops.Gl.Phong.PhongMaterial_v5 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = {
	  phong_frag: 'IN vec3 viewDirection;\nIN vec3 normInterpolated;\nIN vec2 texCoord;\n\n#ifdef ENABLE_FRESNEL\n    IN vec4 cameraSpace_pos;\n#endif\n\n// IN mat3 normalMatrix; // when instancing...\n\n#ifdef HAS_TEXTURE_NORMAL\n    IN mat3 TBN_Matrix; // tangent bitangent normal space transform matrix\n#endif\n\nIN vec3 fragPos;\nIN vec3 v_viewDirection;\n\nUNI vec4 inDiffuseColor;\nUNI vec4 inMaterialProperties;\n\n#ifdef ADD_EMISSIVE_COLOR\n    UNI vec4 inEmissiveColor; // .w = intensity\n#endif\n\n#ifdef ENABLE_FRESNEL\n    UNI mat4 viewMatrix;\n    UNI vec4 inFresnel;\n    UNI vec2 inFresnelWidthExponent;\n#endif\n\n#ifdef ENVMAP_MATCAP\n    IN vec3 viewSpaceNormal;\n    IN vec3 viewSpacePosition;\n#endif\n\nstruct Light {\n    vec3 color;\n    vec3 position;\n    vec3 specular;\n\n\n    // * SPOT LIGHT * //\n    #ifdef HAS_SPOT\n        vec3 conePointAt;\n        #define COSCONEANGLE x\n        #define COSCONEANGLEINNER y\n        #define SPOTEXPONENT z\n        vec3 spotProperties;\n    #endif\n\n    #define INTENSITY x\n    #define ATTENUATION y\n    #define FALLOFF z\n    #define RADIUS w\n    vec4 lightProperties;\n\n    int castLight;\n};\n\n/* CONSTANTS */\n#define NONE -1\n#define ALBEDO x\n#define ROUGHNESS y\n#define SHININESS z\n#define SPECULAR_AMT w\n#define NORMAL x\n#define AO y\n#define SPECULAR z\n#define EMISSIVE w\nconst float PI = 3.1415926535897932384626433832795;\nconst float TWO_PI = (2. * PI);\nconst float EIGHT_PI = (8. * PI);\n\n#define RECIPROCAL_PI 1./PI\n#define RECIPROCAL_PI2 RECIPROCAL_PI/2.\n\n// TEXTURES\n#ifdef HAS_TEXTURES\n    UNI vec4 inTextureIntensities;\n\n    #ifdef HAS_TEXTURE_ENV\n        #ifdef TEX_FORMAT_CUBEMAP\n            UNI samplerCube texEnv;\n            #ifndef WEBGL1\n                #define SAMPLETEX textureLod\n            #endif\n            #ifdef WEBGL1\n                #define SAMPLETEX textureCubeLodEXT\n            #endif\n        #endif\n\n        #ifdef TEX_FORMAT_EQUIRECT\n            UNI sampler2D texEnv;\n            #ifdef WEBGL1\n                // #extension GL_EXT_shader_texture_lod : enable\n                #ifdef GL_EXT_shader_texture_lod\n                    #define textureLod texture2DLodEXT\n                #endif\n                // #define textureLod texture2D\n            #endif\n\n            #define SAMPLETEX sampleEquirect\n\n            const vec2 invAtan = vec2(0.1591, 0.3183);\n            vec4 sampleEquirect(sampler2D tex,vec3 direction,float lod)\n            {\n                #ifndef WEBGL1\n                    vec3 newDirection = normalize(direction);\n            \t\tvec2 sampleUV;\n            \t\tsampleUV.x = -1. * (atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.75);\n            \t\tsampleUV.y = asin( clamp(direction.y, -1., 1.) ) * RECIPROCAL_PI + 0.5;\n                #endif\n\n                #ifdef WEBGL1\n                    vec3 newDirection = normalize(direction);\n                \t\tvec2 sampleUV = vec2(atan(newDirection.z, newDirection.x), asin(newDirection.y+1e-6));\n                        sampleUV *= vec2(0.1591, 0.3183);\n                        sampleUV += 0.5;\n                #endif\n                return textureLod(tex, sampleUV, lod);\n            }\n        #endif\n        #ifdef ENVMAP_MATCAP\n            UNI sampler2D texEnv;\n            #ifdef WEBGL1\n                // #extension GL_EXT_shader_texture_lod : enable\n                #ifdef GL_EXT_shader_texture_lod\n                    #define textureLod texture2DLodEXT\n                #endif\n                // #define textureLod texture2D\n            #endif\n\n\n            // * taken & modified from https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderLib/meshmatcap_frag.glsl.js\n            vec2 getMatCapUV(vec3 viewSpacePosition, vec3 viewSpaceNormal) {\n                vec3 viewDir = normalize(-viewSpacePosition);\n            \tvec3 x = normalize(vec3(viewDir.z, 0.0, - viewDir.x));\n            \tvec3 y = normalize(cross(viewDir, x));\n            \tvec2 uv = vec2(dot(x, viewSpaceNormal), dot(y, viewSpaceNormal)) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks\n            \treturn uv;\n            }\n        #endif\n\n        UNI float inEnvMapIntensity;\n        UNI float inEnvMapWidth;\n    #endif\n\n    #ifdef HAS_TEXTURE_LUMINANCE_MASK\n        UNI sampler2D texLuminance;\n        UNI float inLuminanceMaskIntensity;\n    #endif\n\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D texDiffuse;\n    #endif\n\n    #ifdef HAS_TEXTURE_SPECULAR\n        UNI sampler2D texSpecular;\n    #endif\n\n    #ifdef HAS_TEXTURE_NORMAL\n        UNI sampler2D texNormal;\n    #endif\n\n    #ifdef HAS_TEXTURE_AO\n        UNI sampler2D texAO;\n    #endif\n\n    #ifdef HAS_TEXTURE_EMISSIVE\n        UNI sampler2D texEmissive;\n    #endif\n    #ifdef HAS_TEXTURE_ALPHA\n        UNI sampler2D texAlpha;\n    #endif\n#endif\n\n{{MODULES_HEAD}}\n\nfloat when_gt(float x, float y) { return max(sign(x - y), 0.0); } // comparator function\nfloat when_lt(float x, float y) { return max(sign(y - x), 0.0); }\nfloat when_eq(float x, float y) { return 1. - abs(sign(x - y)); } // comparator function\nfloat when_neq(float x, float y) { return abs(sign(x - y)); } // comparator function\nfloat when_ge(float x, float y) { return 1.0 - when_lt(x, y); }\nfloat when_le(float x, float y) { return 1.0 - when_gt(x, y); }\n\n#ifdef FALLOFF_MODE_A\n    float CalculateFalloff(float distance, vec3 lightDirection, float falloff, float radius) {\n        // * original falloff\n        float denom = distance / radius + 1.0;\n        float attenuation = 1.0 / (denom*denom);\n        float t = (attenuation - falloff) / (1.0 - falloff);\n        return max(t, 0.0);\n    }\n#endif\n\n#ifdef FALLOFF_MODE_B\n    float CalculateFalloff(float distance, vec3 lightDirection, float falloff, float radius) {\n        float distanceSquared = dot(lightDirection, lightDirection);\n        float factor = distanceSquared * falloff;\n        float smoothFactor = clamp(1. - factor * factor, 0., 1.);\n        float attenuation = smoothFactor * smoothFactor;\n\n        return attenuation * 1. / max(distanceSquared, 0.00001);\n    }\n#endif\n\n#ifdef FALLOFF_MODE_C\n    float CalculateFalloff(float distance, vec3 lightDirection, float falloff, float radius) {\n        // https://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf\n        float falloffNumerator = 1. - pow(distance/radius, 4.);\n        falloffNumerator = clamp(falloffNumerator, 0., 1.);\n        falloffNumerator *= falloffNumerator;\n\n        float denominator = distance*distance + falloff;\n\n        return falloffNumerator/denominator;\n    }\n#endif\n\n#ifdef FALLOFF_MODE_D\n    float CalculateFalloff(float distance, vec3 lightDirection, float falloff, float radius) {\n        // inverse square falloff, "physically correct"\n        return 1.0 / max(distance * distance, 0.0001);\n    }\n#endif\n\n#ifdef ENABLE_FRESNEL\n    float CalculateFresnel(vec3 direction, vec3 normal)\n    {\n        vec3 nDirection = normalize( direction );\n        vec3 nNormal = normalize( mat3(viewMatrix) * normal );\n        vec3 halfDirection = normalize( nNormal + nDirection );\n\n        float cosine = dot( halfDirection, nDirection );\n        float product = max( cosine, 0.0 );\n        float factor = pow(product, inFresnelWidthExponent.y);\n\n        return 5. * factor;\n    }\n#endif\n\n#ifdef CONSERVE_ENERGY\n    // http://www.rorydriscoll.com/2009/01/25/energy-conservation-in-games/\n    // http://www.farbrausch.de/~fg/articles/phong.pdf\n    float EnergyConservation(float shininess) {\n        #ifdef SPECULAR_PHONG\n            return (shininess + 2.)/TWO_PI;\n        #endif\n        #ifdef SPECULAR_BLINN\n            return (shininess + 8.)/EIGHT_PI;\n        #endif\n\n        #ifdef SPECULAR_SCHLICK\n            return (shininess + 8.)/EIGHT_PI;\n        #endif\n\n        #ifdef SPECULAR_GAUSS\n            return (shininess + 8.)/EIGHT_PI;\n        #endif\n    }\n#endif\n\n#ifdef ENABLE_OREN_NAYAR_DIFFUSE\n    float CalculateOrenNayar(vec3 lightDirection, vec3 viewDirection, vec3 normal) {\n        float LdotV = dot(lightDirection, viewDirection);\n        float NdotL = dot(lightDirection, normal);\n        float NdotV = dot(normal, viewDirection);\n\n        float albedo = inMaterialProperties.ALBEDO;\n        albedo *= 1.8;\n        float s = LdotV - NdotL * NdotV;\n        float t = mix(1., max(NdotL, NdotV), step(0., s));\n\n        float roughness = inMaterialProperties.ROUGHNESS;\n        float sigma2 = roughness * roughness;\n        float A = 1. + sigma2 * (albedo / (sigma2 + 0.13) + 0.5 / (sigma2 + 0.33));\n        float B = 0.45 * sigma2 / (sigma2 + 0.09);\n\n        float factor = albedo * max(0., NdotL) * (A + B * s / t) / PI;\n\n        return factor;\n\n    }\n#endif\n\nvec3 CalculateDiffuseColor(\n    vec3 lightDirection,\n    vec3 viewDirection,\n    vec3 normal,\n    vec3 lightColor,\n    vec3 materialColor,\n    inout float lambert\n) {\n    #ifndef ENABLE_OREN_NAYAR_DIFFUSE\n        lambert = clamp(dot(lightDirection, normal), 0., 1.);\n    #endif\n\n    #ifdef ENABLE_OREN_NAYAR_DIFFUSE\n        lambert = CalculateOrenNayar(lightDirection, viewDirection, normal);\n    #endif\n\n    vec3 diffuseColor = lambert * lightColor * materialColor;\n    return diffuseColor;\n}\n\nvec3 CalculateSpecularColor(\n    vec3 specularColor,\n    float specularCoefficient,\n    float shininess,\n    vec3 lightDirection,\n    vec3 viewDirection,\n    vec3 normal,\n    float lambertian\n) {\n    vec3 resultColor = vec3(0.);\n\n    #ifdef SPECULAR_PHONG\n        vec3 reflectDirection = reflect(-lightDirection, normal);\n        float specularAngle = max(dot(reflectDirection, viewDirection), 0.);\n        float specularFactor = pow(specularAngle, max(0., shininess));\n    resultColor = lambertian * specularFactor * specularCoefficient * specularColor;\n    #endif\n\n    #ifdef SPECULAR_BLINN\n        vec3 halfDirection = normalize(lightDirection + viewDirection);\n        float specularAngle = max(dot(halfDirection, normal), 0.);\n        float specularFactor = pow(specularAngle, max(0., shininess));\n        resultColor = lambertian * specularFactor * specularCoefficient * specularColor;\n    #endif\n\n    #ifdef SPECULAR_SCHLICK\n        vec3 halfDirection = normalize(lightDirection + viewDirection);\n        float specularAngle = dot(halfDirection, normal);\n        float schlickShininess = max(0., shininess);\n        float specularFactor = specularAngle / (schlickShininess - schlickShininess*specularAngle + specularAngle);\n        resultColor = lambertian * specularFactor * specularCoefficient * specularColor;\n    #endif\n\n    #ifdef SPECULAR_GAUSS\n        vec3 halfDirection = normalize(lightDirection + viewDirection);\n        float specularAngle = acos(max(dot(halfDirection, normal), 0.));\n        float exponent = specularAngle * shininess * 0.17;\n        exponent = -(exponent*exponent);\n        float specularFactor = exp(exponent);\n\n        resultColor = lambertian * specularFactor * specularCoefficient * specularColor;\n    #endif\n\n    #ifdef CONSERVE_ENERGY\n        float conserveEnergyFactor = EnergyConservation(shininess);\n        resultColor = conserveEnergyFactor * resultColor;\n    #endif\n\n    return resultColor;\n}\n\n#ifdef HAS_SPOT\n    float CalculateSpotLightEffect(vec3 lightPosition, vec3 conePointAt, float cosConeAngle, float cosConeAngleInner, float spotExponent, vec3 lightDirection) {\n        vec3 spotLightDirection = normalize(lightPosition-conePointAt);\n        float spotAngle = dot(-lightDirection, spotLightDirection);\n        float epsilon = cosConeAngle - cosConeAngleInner;\n\n        float spotIntensity = clamp((spotAngle - cosConeAngle)/epsilon, 0.0, 1.0);\n        spotIntensity = pow(spotIntensity, max(0.01, spotExponent));\n\n        return max(0., spotIntensity);\n    }\n#endif\n\n\n\n{{PHONG_FRAGMENT_HEAD}}\n\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n\n    vec4 col=vec4(0., 0., 0., inDiffuseColor.a);\n    vec3 calculatedColor = vec3(0.);\n    vec3 normal = normalize(normInterpolated);\n    vec3 baseColor = inDiffuseColor.rgb;\n\n    {{MODULE_BASE_COLOR}}\n\n\n    vec3 viewDirection = normalize(v_viewDirection);\n\n    #ifdef DOUBLE_SIDED\n        if(!gl_FrontFacing) normal = normal * -1.0;\n    #endif\n\n    #ifdef HAS_TEXTURES\n        #ifdef HAS_TEXTURE_DIFFUSE\n            baseColor = texture(texDiffuse, texCoord).rgb;\n\n            #ifdef COLORIZE_TEXTURE\n                baseColor *= inDiffuseColor.rgb;\n            #endif\n        #endif\n\n        #ifdef HAS_TEXTURE_NORMAL\n            normal = texture(texNormal, texCoord).rgb;\n            normal = normalize(normal * 2. - 1.);\n            float normalIntensity = inTextureIntensities.NORMAL;\n            normal = normalize(mix(vec3(0., 0., 1.), normal, 2. * normalIntensity));\n            normal = normalize(TBN_Matrix * normal);\n        #endif\n    #endif\n\n    {{PHONG_FRAGMENT_BODY}}\n\n\n\n\n\n\n    #ifdef ENABLE_FRESNEL\n        calculatedColor += inFresnel.rgb * (CalculateFresnel(vec3(cameraSpace_pos), normal) * inFresnel.w * inFresnelWidthExponent.x);\n    #endif\n\n     #ifdef HAS_TEXTURE_ALPHA\n        #ifdef ALPHA_MASK_ALPHA\n            col.a*=texture(texAlpha,texCoord).a;\n        #endif\n        #ifdef ALPHA_MASK_LUMI\n            col.a*= dot(vec3(0.2126,0.7152,0.0722), texture(texAlpha,texCoord).rgb);\n        #endif\n        #ifdef ALPHA_MASK_R\n            col.a*=texture(texAlpha,texCoord).r;\n        #endif\n        #ifdef ALPHA_MASK_G\n            col.a*=texture(texAlpha,texCoord).g;\n        #endif\n        #ifdef ALPHA_MASK_B\n            col.a*=texture(texAlpha,texCoord).b;\n        #endif\n    #endif\n\n    #ifdef ADD_EMISSIVE_COLOR\n        vec3 emissiveRadiance = inEmissiveColor.rgb * inEmissiveColor.w; // .w = intensity of color;\n\n        #ifdef HAS_TEXTURE_EMISSIVE\n            float emissiveIntensity = inTextureIntensities.EMISSIVE;\n            // calculatedColor += emissiveIntensity * baseColor * texture(texEmissive, texCoord).r;\n            emissiveRadiance *= (emissiveIntensity * texture(texEmissive, texCoord).rgb);\n        #endif\n\n        calculatedColor += emissiveRadiance;\n    #endif\n\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n\n    #ifdef HAS_TEXTURE_ENV\n        vec3 luminanceColor = vec3(0.);\n\n        #ifndef ENVMAP_MATCAP\n            float environmentMapWidth = inEnvMapWidth;\n            float glossyExponent = inMaterialProperties.SHININESS;\n            float glossyCoefficient = inMaterialProperties.SPECULAR_AMT;\n\n            vec3 envMapNormal =  normal;\n            vec3 reflectDirection = reflect(normalize(-viewDirection), normal);\n\n            float lambertianCoefficient = dot(viewDirection, reflectDirection); //0.44; // TODO: need prefiltered map for this\n            // lambertianCoefficient = 1.;\n            float specularAngle = max(dot(reflectDirection, viewDirection), 0.);\n            float specularFactor = pow(specularAngle, max(0., inMaterialProperties.SHININESS));\n\n            glossyExponent = specularFactor;\n\n            float maxMIPLevel = 10.;\n            float MIPlevel = log2(environmentMapWidth / 1024. * sqrt(3.)) - 0.5 * log2(glossyExponent + 1.);\n\n            luminanceColor = inEnvMapIntensity * (\n                inDiffuseColor.rgb *\n                SAMPLETEX(texEnv, envMapNormal, maxMIPLevel).rgb\n                +\n                glossyCoefficient * SAMPLETEX(texEnv, reflectDirection, MIPlevel).rgb\n            );\n        #endif\n        #ifdef ENVMAP_MATCAP\n            luminanceColor = inEnvMapIntensity * (\n                texture(texEnv, getMatCapUV(viewSpacePosition, viewSpaceNormal)).rgb\n                //inDiffuseColor.rgb\n                //* textureLod(texEnv, getMatCapUV(envMapNormal), maxMIPLevel).rgb\n                //+\n                //glossyCoefficient * textureLod(texEnv, getMatCapUV(reflectDirection), MIPlevel).rgb\n            );\n        #endif\n\n\n\n        #ifdef HAS_TEXTURE_LUMINANCE_MASK\n            luminanceColor *= texture(texLuminance, texCoord).r * inLuminanceMaskIntensity;\n        #endif\n\n        #ifdef HAS_TEXTURE_AO\n            luminanceColor *= mix(vec3(1.), texture(texAO, texCoord).rgb, inTextureIntensities.AO);\n        #endif\n\n        calculatedColor.rgb += luminanceColor;\n    #endif\n\n    col.rgb = clamp(calculatedColor, 0., 1.);\n\n\n    {{MODULE_COLOR}}\n\n    outColor = col;\n}\n',
	  phong_vert: '\n{{MODULES_HEAD}}\n\n#define NONE -1\n#define AMBIENT 0\n#define POINT 1\n#define DIRECTIONAL 2\n#define SPOT 3\n\n#define TEX_REPEAT_X x;\n#define TEX_REPEAT_Y y;\n#define TEX_OFFSET_X z;\n#define TEX_OFFSET_Y w;\n\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN float attrVertIndex;\nIN vec3 attrTangent;\nIN vec3 attrBiTangent;\n\nOUT vec2 texCoord;\nOUT vec3 normInterpolated;\nOUT vec3 fragPos;\n\n#ifdef HAS_TEXTURE_NORMAL\n    OUT mat3 TBN_Matrix; // tangent bitangent normal space transform matrix\n#endif\n\n#ifdef ENABLE_FRESNEL\n    OUT vec4 cameraSpace_pos;\n#endif\n\nOUT vec3 v_viewDirection;\nOUT mat3 normalMatrix;\nOUT mat4 mvMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI vec4 inTextureRepeatOffset;\n#endif\n\nUNI vec3 camPos;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\n#ifdef ENVMAP_MATCAP\n    OUT vec3 viewSpaceNormal;\n    OUT vec3 viewSpacePosition;\n#endif\n\n\nmat3 transposeMat3(mat3 m)\n{\n    return mat3(m[0][0], m[1][0], m[2][0],\n        m[0][1], m[1][1], m[2][1],\n        m[0][2], m[1][2], m[2][2]);\n}\n\nmat3 inverseMat3(mat3 m)\n{\n    float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];\n    float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];\n    float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];\n\n    float b01 = a22 * a11 - a12 * a21;\n    float b11 = -a22 * a10 + a12 * a20;\n    float b21 = a21 * a10 - a11 * a20;\n\n    float det = a00 * b01 + a01 * b11 + a02 * b21;\n\n    return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),\n        b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),\n        b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;\n}\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    vec4 pos=vec4(vPosition,  1.0);\n\n    texCoord=attrTexCoord;\n    texCoord.y = 1. - texCoord.y;\n    vec3 norm=attrVertNormal;\n\n    vec3 tangent = attrTangent;\n    vec3 bitangent = attrBiTangent;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    normalMatrix = transposeMat3(inverseMat3(mat3(mMatrix)));\n    mvMatrix = (viewMatrix * mMatrix);\n\n\n\n    #ifdef ENABLE_FRESNEL\n        cameraSpace_pos = mvMatrix * pos;\n    #endif\n\n    #ifdef HAS_TEXTURES\n        float repeatX = inTextureRepeatOffset.TEX_REPEAT_X;\n        float offsetX = inTextureRepeatOffset.TEX_OFFSET_X;\n        float repeatY = inTextureRepeatOffset.TEX_REPEAT_Y;\n        float offsetY = inTextureRepeatOffset.TEX_OFFSET_Y;\n\n        texCoord.x *= repeatX;\n        texCoord.x += offsetX;\n        texCoord.y *= repeatY;\n        texCoord.y += offsetY;\n    #endif\n\n   normInterpolated = vec3(normalMatrix*norm);\n\n    #ifdef HAS_TEXTURE_NORMAL\n        vec3 normCameraSpace = normalize((vec4(normInterpolated, 0.0)).xyz);\n        vec3 tangCameraSpace = normalize((mMatrix * vec4(attrTangent, 0.0)).xyz);\n        vec3 bitangCameraSpace = normalize((mMatrix * vec4(attrBiTangent, 0.0)).xyz);\n\n        // re orthogonalization for smoother normals\n        tangCameraSpace = normalize(tangCameraSpace - dot(tangCameraSpace, normCameraSpace) * normCameraSpace);\n        bitangCameraSpace = cross(normCameraSpace, tangCameraSpace);\n\n        TBN_Matrix = mat3(tangCameraSpace, bitangCameraSpace, normCameraSpace);\n    #endif\n\n    fragPos = vec3((mMatrix) * pos);\n    v_viewDirection = normalize(camPos - fragPos);\n    // modelPos=mMatrix*pos;\n\n    #ifdef ENVMAP_MATCAP\n        mat3 viewSpaceNormalMatrix = normalMatrix = transposeMat3(inverseMat3(mat3(mvMatrix)));\n        viewSpaceNormal = normalize(viewSpaceNormalMatrix * norm);\n        viewSpacePosition = vec3(mvMatrix * pos);\n    #endif\n    gl_Position = projMatrix * mvMatrix * pos;\n}\n',
	  snippet_body_ambient_frag: '    // * AMBIENT LIGHT {{LIGHT_INDEX}} *\n    vec3 diffuseColor{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.lightProperties.INTENSITY*phongLight{{LIGHT_INDEX}}.color;\n    calculatedColor += diffuseColor{{LIGHT_INDEX}};\n',
	  snippet_body_directional_frag: '    // * DIRECTIONAL LIGHT {{LIGHT_INDEX}} *\n\n    if (phongLight{{LIGHT_INDEX}}.castLight == 1) {\n        vec3 phongLightDirection{{LIGHT_INDEX}} = normalize(phongLight{{LIGHT_INDEX}}.position);\n\n        float phongLambert{{LIGHT_INDEX}} = 1.; // inout variable\n\n        vec3 lightColor{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.color;\n        vec3 lightSpecular{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.specular;\n\n        #ifdef HAS_TEXTURES\n            #ifdef HAS_TEXTURE_AO\n                lightColor{{LIGHT_INDEX}} *= mix(vec3(1.), texture(texAO, texCoord).rgb, inTextureIntensities.AO);\n            #endif\n\n            #ifdef HAS_TEXTURE_SPECULAR\n                lightSpecular{{LIGHT_INDEX}} *= mix(1., texture(texSpecular, texCoord).r, inTextureIntensities.SPECULAR);\n            #endif\n        #endif\n\n        vec3 diffuseColor{{LIGHT_INDEX}} = CalculateDiffuseColor(phongLightDirection{{LIGHT_INDEX}}, viewDirection, normal, lightColor{{LIGHT_INDEX}}, baseColor, phongLambert{{LIGHT_INDEX}});\n        vec3 specularColor{{LIGHT_INDEX}} = CalculateSpecularColor(\n            lightSpecular{{LIGHT_INDEX}},\n            inMaterialProperties.SPECULAR_AMT,\n            inMaterialProperties.SHININESS,\n            phongLightDirection{{LIGHT_INDEX}},\n            viewDirection,\n            normal,\n            phongLambert{{LIGHT_INDEX}}\n        );\n\n        vec3 combinedColor{{LIGHT_INDEX}} = (diffuseColor{{LIGHT_INDEX}} + specularColor{{LIGHT_INDEX}});\n\n        vec3 lightModelDiff{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.position - fragPos.xyz;\n\n        combinedColor{{LIGHT_INDEX}} *= phongLight{{LIGHT_INDEX}}.lightProperties.INTENSITY;\n        calculatedColor += combinedColor{{LIGHT_INDEX}};\n    }',
	  snippet_body_point_frag: '// * POINT LIGHT {{LIGHT_INDEX}} *\n    if (phongLight{{LIGHT_INDEX}}.castLight == 1) {\n        vec3 phongLightDirection{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.position - fragPos.xyz;\n        // * get length before normalization for falloff calculation\n        phongLightDirection{{LIGHT_INDEX}} = normalize(phongLightDirection{{LIGHT_INDEX}});\n        float phongLightDistance{{LIGHT_INDEX}} = length(phongLightDirection{{LIGHT_INDEX}});\n\n        float phongLambert{{LIGHT_INDEX}} = 1.; // inout variable\n\n        vec3 lightColor{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.color;\n        vec3 lightSpecular{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.specular;\n\n        #ifdef HAS_TEXTURES\n            #ifdef HAS_TEXTURE_AO\n                lightColor{{LIGHT_INDEX}} *= mix(vec3(1.), texture(texAO, texCoord).rgb, inTextureIntensities.AO);\n            #endif\n\n            #ifdef HAS_TEXTURE_SPECULAR\n                lightSpecular{{LIGHT_INDEX}} *= mix(1., texture(texSpecular, texCoord).r, inTextureIntensities.SPECULAR);\n            #endif\n        #endif\n\n        vec3 diffuseColor{{LIGHT_INDEX}} = CalculateDiffuseColor(phongLightDirection{{LIGHT_INDEX}}, viewDirection, normal, lightColor{{LIGHT_INDEX}}, baseColor, phongLambert{{LIGHT_INDEX}});\n        vec3 specularColor{{LIGHT_INDEX}} = CalculateSpecularColor(\n            lightSpecular{{LIGHT_INDEX}},\n            inMaterialProperties.SPECULAR_AMT,\n            inMaterialProperties.SHININESS,\n            phongLightDirection{{LIGHT_INDEX}},\n            viewDirection,\n            normal,\n            phongLambert{{LIGHT_INDEX}}\n        );\n\n        vec3 combinedColor{{LIGHT_INDEX}} = (diffuseColor{{LIGHT_INDEX}} + specularColor{{LIGHT_INDEX}});\n\n        combinedColor{{LIGHT_INDEX}} *= phongLight{{LIGHT_INDEX}}.lightProperties.INTENSITY;\n\n        float attenuation{{LIGHT_INDEX}} = CalculateFalloff(\n            phongLightDistance{{LIGHT_INDEX}},\n            phongLightDirection{{LIGHT_INDEX}},\n            phongLight{{LIGHT_INDEX}}.lightProperties.FALLOFF,\n            phongLight{{LIGHT_INDEX}}.lightProperties.RADIUS\n        );\n\n        attenuation{{LIGHT_INDEX}} *= when_gt(phongLambert{{LIGHT_INDEX}}, 0.);\n        combinedColor{{LIGHT_INDEX}} *= attenuation{{LIGHT_INDEX}};\n\n        calculatedColor += combinedColor{{LIGHT_INDEX}};\n    }\n',
	  snippet_body_spot_frag: '    // * SPOT LIGHT {{LIGHT_INDEX}} *\n    if (phongLight{{LIGHT_INDEX}}.castLight == 1) {\n        vec3 phongLightDirection{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.position - fragPos.xyz;\n        phongLightDirection{{LIGHT_INDEX}} = normalize( phongLightDirection{{LIGHT_INDEX}});\n        float phongLightDistance{{LIGHT_INDEX}} = length(phongLightDirection{{LIGHT_INDEX}});\n\n        float phongLambert{{LIGHT_INDEX}} = 1.; // inout variable\n\n        vec3 lightColor{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.color;\n        vec3 lightSpecular{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.specular;\n\n        #ifdef HAS_TEXTURES\n            #ifdef HAS_TEXTURE_AO\n                lightColor{{LIGHT_INDEX}} *= mix(vec3(1.), texture(texAO, texCoord).rgb, inTextureIntensities.AO);\n            #endif\n\n            #ifdef HAS_TEXTURE_SPECULAR\n                lightSpecular{{LIGHT_INDEX}} *= mix(1., texture(texSpecular, texCoord).r, inTextureIntensities.SPECULAR);\n            #endif\n        #endif\n\n        vec3 diffuseColor{{LIGHT_INDEX}} = CalculateDiffuseColor(phongLightDirection{{LIGHT_INDEX}}, viewDirection, normal, lightColor{{LIGHT_INDEX}}, baseColor, phongLambert{{LIGHT_INDEX}});\n        vec3 specularColor{{LIGHT_INDEX}} = CalculateSpecularColor(\n            lightSpecular{{LIGHT_INDEX}},\n            inMaterialProperties.SPECULAR_AMT,\n            inMaterialProperties.SHININESS,\n            phongLightDirection{{LIGHT_INDEX}},\n            viewDirection,\n            normal,\n            phongLambert{{LIGHT_INDEX}}\n        );\n\n        vec3 combinedColor{{LIGHT_INDEX}} = (diffuseColor{{LIGHT_INDEX}} + specularColor{{LIGHT_INDEX}});\n\n        float spotIntensity{{LIGHT_INDEX}} = CalculateSpotLightEffect(\n            phongLight{{LIGHT_INDEX}}.position, phongLight{{LIGHT_INDEX}}.conePointAt, phongLight{{LIGHT_INDEX}}.spotProperties.COSCONEANGLE,\n            phongLight{{LIGHT_INDEX}}.spotProperties.COSCONEANGLEINNER, phongLight{{LIGHT_INDEX}}.spotProperties.SPOTEXPONENT,\n            phongLightDirection{{LIGHT_INDEX}}\n        );\n\n        combinedColor{{LIGHT_INDEX}} *= spotIntensity{{LIGHT_INDEX}};\n\n        vec3 lightModelDiff{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.position - fragPos.xyz;\n\n        float attenuation{{LIGHT_INDEX}} = CalculateFalloff(\n            phongLightDistance{{LIGHT_INDEX}},\n            phongLightDirection{{LIGHT_INDEX}},\n            phongLight{{LIGHT_INDEX}}.lightProperties.FALLOFF,\n            phongLight{{LIGHT_INDEX}}.lightProperties.RADIUS\n        );\n\n        attenuation{{LIGHT_INDEX}} *= when_gt(phongLambert{{LIGHT_INDEX}}, 0.);\n\n        combinedColor{{LIGHT_INDEX}} *= attenuation{{LIGHT_INDEX}};\n\n        combinedColor{{LIGHT_INDEX}} *= phongLight{{LIGHT_INDEX}}.lightProperties.INTENSITY;\n        calculatedColor += combinedColor{{LIGHT_INDEX}};\n    }',
	  snippet_head_frag: 'UNI Light phongLight{{LIGHT_INDEX}};\n'
	},
	n = e.patch.cgl,
	a = t.snippet_head_frag,
	i = {
	  point: t.snippet_body_point_frag,
	  spot: t.snippet_body_spot_frag,
	  ambient: t.snippet_body_ambient_frag,
	  directional: t.snippet_body_directional_frag,
	  area: t.snippet_body_area_frag
	},
	o = new RegExp('{{LIGHT_INDEX}}', 'g'),
	r = e=>a.replace('{{LIGHT_INDEX}}', e),
	s = (e, t) =>i[t].replace(o, e);
	const l = e.inTrigger('Trigger In'),
	c = e.inFloat('R', Math.random()),
	d = e.inFloat('G', Math.random()),
	u = e.inFloat('B', Math.random()),
	f = e.inFloatSlider('A', 1),
	h = [
	  c,
	  d,
	  u,
	  f
	];
	e.setPortGroup('Diffuse Color', h);
	const g = e.inBool('Enable', !1),
	p = e.inFloatSlider('Albedo', 0.707),
	m = e.inFloatSlider('Roughness', 0.835);
	g.setUiAttribs({
	  hidePort: !0
	}),
	p.setUiAttribs({
	  greyout: !0
	}),
	m.setUiAttribs({
	  greyout: !0
	}),
	c.setUiAttribs({
	  colorPick: !0
	}),
	e.setPortGroup('Oren-Nayar Diffuse', [
	  g,
	  p,
	  m
	]),
	g.onChange = function () {
	  ce.toggleDefine('ENABLE_OREN_NAYAR_DIFFUSE', g),
	  p.setUiAttribs({
		greyout: !g.get()
	  }),
	  m.setUiAttribs({
		greyout: !g.get()
	  })
	};
	const _ = e.inValueBool('Active', !1);
	_.setUiAttribs({
	  hidePort: !0
	});
	const b = e.inValueSlider('Fresnel Intensity', 0.7),
	E = e.inFloat('Fresnel Width', 1),
	I = e.inFloat('Fresnel Exponent', 6),
	v = e.inFloat('Fresnel R', 1),
	M = e.inFloat('Fresnel G', 1),
	L = e.inFloat('Fresnel B', 1);
	v.setUiAttribs({
	  colorPick: !0
	});
	const T = [
	  b,
	  E,
	  I,
	  v,
	  M,
	  L
	];
	T.forEach(function (e) {
	  e.setUiAttribs({
		greyout: !0
	  })
	}),
	e.setPortGroup('Fresnel', T.concat([_]));
	let S = null,
	A = null;
	_.onChange = function () {
	  ce.toggleDefine('ENABLE_FRESNEL', _),
	  _.get() ? (S || (S = new CGL.Uniform(ce, '4f', 'inFresnel', v, M, L, b)), A || (A = new CGL.Uniform(ce, '2f', 'inFresnelWidthExponent', E, I))) : (S && (ce.removeUniform('inFresnel'), S = null), A && (ce.removeUniform('inFresnelWidthExponent'), A = null)),
	  T.forEach(function (e) {
		e.setUiAttribs({
		  greyout: !_.get()
		})
	  })
	};
	const D = e.inBool('Emissive Active', !1),
	x = e.inFloatSlider('Color Intensity', 0.3),
	O = e.inFloatSlider('Emissive R', Math.random()),
	C = e.inFloatSlider('Emissive G', Math.random()),
	N = e.inFloatSlider('Emissive B', Math.random());
	O.setUiAttribs({
	  colorPick: !0
	}),
	e.setPortGroup('Emissive Color', [
	  D,
	  x,
	  O,
	  C,
	  N
	]),
	x.setUiAttribs({
	  greyout: !D.get()
	}),
	O.setUiAttribs({
	  greyout: !D.get()
	}),
	C.setUiAttribs({
	  greyout: !D.get()
	}),
	N.setUiAttribs({
	  greyout: !D.get()
	}),
	D.onChange = (() =>{
	  ce.toggleDefine('ADD_EMISSIVE_COLOR', D),
	  x.setUiAttribs({
		greyout: !D.get()
	  }),
	  O.setUiAttribs({
		greyout: !D.get()
	  }),
	  C.setUiAttribs({
		greyout: !D.get()
	  }),
	  N.setUiAttribs({
		greyout: !D.get()
	  })
	});
	const y = e.inFloat('Shininess', 4),
	w = e.inFloatSlider('Specular Amount', 0.5),
	P = e.inSwitch('Specular Model', [
	  'Blinn',
	  'Schlick',
	  'Phong',
	  'Gauss'
	], 'Blinn');
	P.setUiAttribs({
	  hidePort: !0
	});
	const G = [
	  y,
	  w,
	  P
	];
	e.setPortGroup('Specular', G);
	const U = e.inValueBool('Energy Conservation', !1),
	R = e.inBool('Double Sided Material', !1),
	F = e.inSwitch('Falloff Mode', [
	  'A',
	  'B',
	  'C',
	  'D'
	], 'A');
	U.setUiAttribs({
	  hidePort: !0
	}),
	R.setUiAttribs({
	  hidePort: !0
	}),
	F.setUiAttribs({
	  hidePort: !0
	}),
	F.onChange = (() =>{
	  ce.define('FALLOFF_MODE_' + F.get()),
	  [
		'A',
		'B',
		'C',
		'D'
	  ].filter(e=>e !== F.get()).forEach(e=>ce.removeDefine('FALLOFF_MODE_' + e))
	});
	const H = [
	  U,
	  R,
	  F
	];
	e.setPortGroup('Light Options', H);
	const B = e.inTexture('Diffuse Texture'),
	X = e.inTexture('Specular Texture'),
	k = e.inTexture('Normal Map'),
	j = e.inTexture('AO Texture'),
	V = e.inTexture('Emissive Texture'),
	z = e.inTexture('Opacity Texture'),
	W = e.inTexture('Environment Map'),
	Z = e.inTexture('Env Map Mask');
	e.setPortGroup('Textures', [
	  B,
	  X,
	  k,
	  j,
	  V,
	  z,
	  W,
	  Z
	]);
	const Y = e.inBool('Colorize Texture', !1),
	J = e.inFloat('Diffuse Repeat X', 1),
	K = e.inFloat('Diffuse Repeat Y', 1),
	Q = e.inFloat('Texture Offset X', 0),
	q = e.inFloat('Texture Offset Y', 0),
	$ = e.inFloatSlider('Specular Intensity', 1),
	ee = e.inFloatSlider('Normal Map Intensity', 0.5),
	te = e.inFloatSlider('AO Intensity', 1),
	ne = e.inFloatSlider('Emissive Intensity', 1),
	ae = e.inFloatSlider('Env Map Intensity', 1),
	ie = e.inFloatSlider('Env Mask Intensity', 1);
	Y.setUiAttribs({
	  hidePort: !0
	}),
	e.setPortGroup('Texture Transforms', [
	  Y,
	  K,
	  J,
	  q,
	  Q
	]),
	e.setPortGroup('Texture Intensities', [
	  ee,
	  te,
	  $,
	  ne,
	  ae,
	  ie
	]);
	const oe = e.inSwitch('Alpha Mask Source', [
	  'Luminance',
	  'R',
	  'G',
	  'B',
	  'A'
	], 'Luminance');
	oe.setUiAttribs({
	  greyout: !0
	});
	const re = e.inValueBool('Discard Transparent Pixels');
	re.setUiAttribs({
	  hidePort: !0
	}),
	e.setPortGroup('Opacity Texture', [
	  oe,
	  re
	]);
	const se = e.outTrigger('Trigger Out'),
	le = e.outObject('Shader');
	le.ignoreValueSerialize = !0;
	const ce = new CGL.Shader(n, 'simosphong');
	ce.setModules(['MODULE_VERTEX_POSITION',
	'MODULE_COLOR',
	'MODULE_BEGIN_FRAG',
	'MODULE_BASE_COLOR']),
	ce.setSource(t.simosphong_vert, t.simosphong_frag);
	let de = !1;
	ce.define('FALLOFF_MODE_A'),
	n.glVersion < 2 && (n.gl.getExtension('OES_texture_float'), n.gl.getExtension('OES_texture_float_linear'), n.gl.getExtension('OES_texture_half_float'), n.gl.getExtension('OES_texture_half_float_linear'), ce.enableExtension('GL_OES_standard_derivatives'), ce.enableExtension('GL_OES_texture_float'), ce.enableExtension('GL_OES_texture_float_linear'), ce.enableExtension('GL_OES_texture_half_float'), ce.enableExtension('GL_OES_texture_half_float_linear'));
	const ue = new RegExp('{{PHONG_FRAGMENT_HEAD}}', 'g'),
	fe = new RegExp('{{PHONG_FRAGMENT_BODY}}', 'g'),
	he = {
	  directional: !1,
	  spot: !1,
	  ambient: !1,
	  point: !1
	};
	function ge(e) {
	  let n = t.phong_frag,
	  a = '',
	  i = '';
	  he.directional = !1,
	  he.spot = !1,
	  he.ambient = !1,
	  he.point = !1;
	  for (let t = 0; t < e.length; t += 1) {
		const n = e[t],
		o = n.type;
		he[o] || (he[o] = !0),
		a = a.concat(r(t)),
		i = i.concat(s(t, n.type))
	  }
	  n = (n = n.replace(ue, a)).replace(fe, i),
	  ce.setSource(t.phong_vert, n);
	  for (let e = 0, t = Object.keys(he); e < t.length; e += 1) {
		const n = t[e];
		he[n] ? ce.hasDefine('HAS_' + n.toUpperCase()) || ce.define('HAS_' + n.toUpperCase()) : ce.hasDefine('HAS_' + n.toUpperCase()) && ce.removeDefine('HAS_' + n.toUpperCase())
	  }
	}
	le.set(ce);
	let pe = null,
	me = null,
	_e = null,
	be = null,
	Ee = null,
	Ie = null,
	ve = null,
	Me = null,
	Le = null,
	Te = null,
	Se = null;
	function Ae() {
	  B.get() ? ce.hasDefine('HAS_TEXTURE_DIFFUSE') || (ce.define('HAS_TEXTURE_DIFFUSE'), pe || (pe = new CGL.Uniform(ce, 't', 'texDiffuse', 0))) : (ce.removeUniform('texDiffuse'), ce.removeDefine('HAS_TEXTURE_DIFFUSE'), pe = null)
	}
	function De() {
	  X.get() ? ce.hasDefine('HAS_TEXTURE_SPECULAR') || (ce.define('HAS_TEXTURE_SPECULAR'), me || (me = new CGL.Uniform(ce, 't', 'texSpecular', 0))) : (ce.removeUniform('texSpecular'), ce.removeDefine('HAS_TEXTURE_SPECULAR'), me = null)
	}
	function xe() {
	  k.get() ? ce.hasDefine('HAS_TEXTURE_NORMAL') || (ce.define('HAS_TEXTURE_NORMAL'), _e || (_e = new CGL.Uniform(ce, 't', 'texNormal', 0))) : (ce.removeUniform('texNormal'), ce.removeDefine('HAS_TEXTURE_NORMAL'), _e = null)
	}
	function Oe() {
	  j.get() ? ce.hasDefine('HAS_TEXTURE_AO') || (ce.define('HAS_TEXTURE_AO'), be || (be = new CGL.Uniform(ce, 't', 'texAO', 0))) : (ce.removeUniform('texAO'), ce.removeDefine('HAS_TEXTURE_AO'), be = null)
	}
	function Ce() {
	  V.get() ? ce.hasDefine('HAS_TEXTURE_EMISSIVE') || (ce.define('HAS_TEXTURE_EMISSIVE'), Ee || (Ee = new CGL.Uniform(ce, 't', 'texEmissive', 0))) : (ce.removeUniform('texEmissive'), ce.removeDefine('HAS_TEXTURE_EMISSIVE'), Ee = null)
	}
	function Ne() {
	  'Alpha Channel' == oe.get() ? ce.define('ALPHA_MASK_ALPHA') : ce.removeDefine('ALPHA_MASK_ALPHA'),
	  'Luminance' == oe.get() ? ce.define('ALPHA_MASK_LUMI') : ce.removeDefine('ALPHA_MASK_LUMI'),
	  'R' == oe.get() ? ce.define('ALPHA_MASK_R') : ce.removeDefine('ALPHA_MASK_R'),
	  'G' == oe.get() ? ce.define('ALPHA_MASK_G') : ce.removeDefine('ALPHA_MASK_G'),
	  'B' == oe.get() ? ce.define('ALPHA_MASK_B') : ce.removeDefine('ALPHA_MASK_B')
	}
	function ye() {
	  if (z.get()) {
		if (null !== Ie) return;
		ce.removeUniform('texAlpha'),
		ce.define('HAS_TEXTURE_ALPHA'),
		Ie || (Ie = new CGL.Uniform(ce, 't', 'texAlpha', 0)),
		oe.setUiAttribs({
		  greyout: !1
		}),
		re.setUiAttribs({
		  greyout: !1
		})
	  } else ce.removeUniform('texAlpha'),
	  ce.removeDefine('HAS_TEXTURE_ALPHA'),
	  Ie = null,
	  oe.setUiAttribs({
		greyout: !0
	  }),
	  re.setUiAttribs({
		greyout: !0
	  });
	  Ne()
	}
	Y.onChange = function () {
	  ce.toggleDefine('COLORIZE_TEXTURE', Y.get())
	},
	oe.onChange = Ne,
	re.onChange = function () {
	  ce.toggleDefine('DISCARDTRANS', re.get())
	},
	B.onChange = Ae,
	X.onChange = De,
	k.onChange = xe,
	j.onChange = Oe,
	V.onChange = Ce,
	z.onChange = ye,
	W.onChange = function () {
	  W.get() ? (ce.hasDefine('HAS_TEXTURE_ENV') || (ce.define('HAS_TEXTURE_ENV'), ve || (ve = new CGL.Uniform(ce, 't', 'texEnv', 0))), W.get().cubemap ? (ce.define('TEX_FORMAT_CUBEMAP'), ce.removeDefine('TEX_FORMAT_EQUIRECT'), ce.removeDefine('ENVMAP_MATCAP'), Me = new CGL.Uniform(ce, 'f', 'inEnvMapIntensity', ae), Le = new CGL.Uniform(ce, 'f', 'inEnvMapWidth', W.get().cubemap.width)) : (ce.removeDefine('TEX_FORMAT_CUBEMAP'), W.get().width === W.get().height ? (ce.define('ENVMAP_MATCAP'), ce.removeDefine('TEX_FORMAT_EQUIRECT')) : (ce.removeDefine('ENVMAP_MATCAP'), ce.define('TEX_FORMAT_EQUIRECT')), Me = new CGL.Uniform(ce, 'f', 'inEnvMapIntensity', ae), Le = new CGL.Uniform(ce, 'f', 'inEnvMapWidth', W.get().width))) : (ce.removeUniform('inEnvMapIntensity'), ce.removeUniform('inEnvMapWidth'), ce.removeUniform('texEnv'), ce.removeDefine('HAS_TEXTURE_ENV'), ce.removeDefine('ENVMAP_MATCAP'), ve = null, Me = null)
	},
	Z.onChange = function () {
	  Z.get() ? Te || (ce.define('HAS_TEXTURE_LUMINANCE_MASK'), Te = new CGL.Uniform(ce, 't', 'texLuminance', 0), Se = new CGL.Uniform(ce, 'f', 'inLuminanceMaskIntensity', ie)) : (ce.removeDefine('HAS_TEXTURE_LUMINANCE_MASK'), ce.removeUniform('inLuminanceMaskIntensity'), ce.removeUniform('texLuminance'), Te = null, Se = null)
	};
	const we = 64 === n.maxUniformsFrag ? 6 : 16;
	ce.define('MAX_LIGHTS', we.toString()),
	ce.define('SPECULAR_PHONG'),
	P.onChange = function () {
	  'Phong' === P.get() ? (ce.define('SPECULAR_PHONG'), ce.removeDefine('SPECULAR_BLINN'), ce.removeDefine('SPECULAR_GAUSS'), ce.removeDefine('SPECULAR_SCHLICK')) : 'Blinn' === P.get() ? (ce.define('SPECULAR_BLINN'), ce.removeDefine('SPECULAR_PHONG'), ce.removeDefine('SPECULAR_GAUSS'), ce.removeDefine('SPECULAR_SCHLICK')) : 'Gauss' === P.get() ? (ce.define('SPECULAR_GAUSS'), ce.removeDefine('SPECULAR_BLINN'), ce.removeDefine('SPECULAR_PHONG'), ce.removeDefine('SPECULAR_SCHLICK')) : 'Schlick' === P.get() && (ce.define('SPECULAR_SCHLICK'), ce.removeDefine('SPECULAR_BLINN'), ce.removeDefine('SPECULAR_PHONG'), ce.removeDefine('SPECULAR_GAUSS'))
	},
	U.onChange = function () {
	  ce.toggleDefine('CONSERVE_ENERGY', U.get())
	},
	R.onChange = function () {
	  ce.toggleDefine('DOUBLE_SIDED', R.get())
	};
	new CGL.Uniform(ce, '4f', 'inMaterialProperties', p, m, y, w),
	new CGL.Uniform(ce, '4f', 'inDiffuseColor', c, d, u, f),
	new CGL.Uniform(ce, '4f', 'inTextureIntensities', ee, te, $, ne),
	new CGL.Uniform(ce, '4f', 'inTextureRepeatOffset', J, K, Q, q),
	new CGL.Uniform(ce, '4f', 'inEmissiveColor', O, C, N, x);
	const Pe = [
	];
	let Ge = 0;
	function Ue(e) {
	  for (let e = 0; e < Pe.length; e += 1) Pe[e] = null;
	  for (let t = 0; t < e; t += 1) Pe[t] = null,
	  Pe[t] || (Pe[t] = {
		color: new CGL.Uniform(ce, '3f', 'phongLight' + t + '.color', [
		  1,
		  1,
		  1
		]),
		position: new CGL.Uniform(ce, '3f', 'phongLight' + t + '.position', [
		  0,
		  11,
		  0
		]),
		specular: new CGL.Uniform(ce, '3f', 'phongLight' + t + '.specular', [
		  1,
		  1,
		  1
		]),
		lightProperties: new CGL.Uniform(ce, '4f', 'phongLight' + t + '.lightProperties', [
		  1,
		  1,
		  1,
		  1
		]),
		conePointAt: new CGL.Uniform(ce, '3f', 'phongLight' + t + '.conePointAt', vec3.create()),
		spotProperties: new CGL.Uniform(ce, '3f', 'phongLight' + t + '.spotProperties', [
		  0,
		  0,
		  0,
		  0
		]),
		castLight: new CGL.Uniform(ce, 'i', 'phongLight' + t + '.castLight', 1)
	  })
	}
	function Re(e) {
	  for (let t = 0; t < e.length; t += 1) {
		const n = e[t];
		n.isUsed = !0,
		Pe[t].position.setValue(n.position),
		Pe[t].color.setValue(n.color),
		Pe[t].specular.setValue(n.specular),
		Pe[t].lightProperties.setValue([n.intensity,
		n.attenuation,
		n.falloff,
		n.radius]),
		Pe[t].conePointAt.setValue(n.conePointAt),
		Pe[t].spotProperties.setValue([n.cosConeAngle,
		n.cosConeAngleInner,
		n.spotExponent]),
		Pe[t].castLight.setValue(n.castLight)
	  }
	}
	let Fe = null;
	const He = [
	  {
		type: 'point',
		position: [
		  5,
		  5,
		  5
		],
		color: [
		  1,
		  1,
		  1
		],
		specular: [
		  1,
		  1,
		  1
		],
		intensity: 1,
		attenuation: 0,
		falloff: 0.5,
		radius: 80,
		castLight: 1
	  }
	],
	Be = mat4.create();
	function Xe() {
	  var a,
	  i;
	  n.frameStore.lightStack && (0 === n.frameStore.lightStack.length ? e.setUiError('deflight', 'Default light is enabled. Please add lights to your patch to make this warning disappear.', 1) : e.setUiError('deflight', null)),
	  n.frameStore.lightStack && n.frameStore.lightStack.length ? ce && n.frameStore.lightStack && n.frameStore.lightStack.length && (Fe = null, (a = n.frameStore.lightStack).length !== Ge ? (ge(a), Ue(a.length), Ge = a.length, Re(a), de = !1) : (de && (ge(a), Ue(a.length), de = !1), Re(a))) : (Fe || (!function () {
		const e = t.phong_vert;
		let n = t.phong_frag,
		a = '',
		i = '';
		a = a.concat(r(0)),
		i = i.concat(s(0, He[0].type)),
		n = (n = n.replace(ue, a)).replace(fe, i),
		ce.setSource(e, n),
		ce.define('HAS_POINT'),
		ce.removeDefine('HAS_SPOT'),
		ce.removeDefine('HAS_DIRECTIONAL'),
		ce.removeDefine('HAS_AMBIENT')
	  }(), Fe = {
		color: new CGL.Uniform(ce, '3f', 'phongLight0.color', [
		  1,
		  1,
		  1
		]),
		specular: new CGL.Uniform(ce, '3f', 'phongLight0.specular', [
		  1,
		  1,
		  1
		]),
		position: new CGL.Uniform(ce, '3f', 'phongLight0.position', [
		  0,
		  11,
		  0
		]),
		lightProperties: new CGL.Uniform(ce, '4f', 'phongLight0.lightProperties', [
		  1,
		  1,
		  1,
		  1
		]),
		conePointAt: new CGL.Uniform(ce, '3f', 'phongLight0.conePointAt', vec3.create()),
		spotProperties: new CGL.Uniform(ce, '3f', 'phongLight0.spotProperties', [
		  0,
		  0,
		  0,
		  0
		]),
		castLight: new CGL.Uniform(ce, 'i', 'phongLight0.castLight', 1)
	  }), mat4.invert(Be, n.vMatrix), He[0].position = [
		Be[12],
		Be[13],
		Be[14]
	  ], i = He[0], Fe.position.setValue(i.position), Fe.color.setValue(i.color), Fe.specular.setValue(i.specular), Fe.lightProperties.setValue([i.intensity,
	  i.attenuation,
	  i.falloff,
	  i.radius]), Fe.conePointAt.setValue(i.conePointAt), Fe.spotProperties.setValue([i.cosConeAngle,
	  i.cosConeAngleInner,
	  i.spotExponent]), Ge = - 1)
	}
	e.preRender = function () {
	  ce.bind(),
	  ce ? (n.pushShader(ce), ce.popTextures(), se.trigger(), n.popShader()) : e.log('NO SHADER')
	};
	mat4.create(),
	vec3.create(),
	vec3.create();
	l.onTriggered = function () {
	  ce ? (n.setShader(ce), ce.popTextures(), B.get() && ce.pushTexture(pe, B.get().tex), X.get() && ce.pushTexture(me, X.get().tex), k.get() && ce.pushTexture(_e, k.get().tex), j.get() && ce.pushTexture(be, j.get().tex), V.get() && ce.pushTexture(Ee, V.get().tex), z.get() && ce.pushTexture(Ie, z.get().tex), W.get() && (W.get().cubemap ? ce.pushTexture(ve, W.get().cubemap, n.gl.TEXTURE_CUBE_MAP) : ce.pushTexture(ve, W.get().tex)), Z.get() && ce.pushTexture(Te, Z.get().tex), Xe(), se.trigger(), n.setPreviousShader()) : e.log('phong has no shader...')
	},
	1 == n.glVersion && (n.gl.getExtension('EXT_shader_texture_lod') ? (ce.enableExtension('GL_EXT_shader_texture_lod'), n.gl.getExtension('OES_texture_float'), n.gl.getExtension('OES_texture_float_linear'), n.gl.getExtension('OES_texture_half_float'), n.gl.getExtension('OES_texture_half_float_linear'), ce.enableExtension('GL_OES_standard_derivatives'), ce.enableExtension('GL_OES_texture_float'), ce.enableExtension('GL_OES_texture_float_linear'), ce.enableExtension('GL_OES_texture_half_float'), ce.enableExtension('GL_OES_texture_half_float_linear')) : e.log('no EXT_shader_texture_lod texture extension')),
	Ae(),
	De(),
	xe(),
	Oe(),
	ye(),
	Ce()
  },
  Ops.Gl.Phong.PhongMaterial_v5.prototype = new CABLES.Op,
  CABLES.OPS['32977fd9-d73e-44ec-aa20-396b6d78f849'] = {
	f: Ops.Gl.Phong.PhongMaterial_v5,
	objName: 'Ops.Gl.Phong.PhongMaterial_v5'
  },
  Ops.Gl.Phong.LambertMaterial_v2 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = '{{MODULES_HEAD}}\n\n#define AMBIENT 0\n#define POINT 1\n#define DIRECTIONAL 2\n#define SPOT 3\n\nIN vec3 norm;\nIN vec4 modelPos;\n\n// UNI mat4 normalMatrix;\nIN mat3 normalMatrix; // when instancing...\n\nIN vec2 texCoord;\n\nIN vec3 mvNormal;\nIN vec3 mvTangent;\nIN vec3 mvBiTangent;\n\nUNI vec4 materialColor;//r,g,b,a;\n\nstruct Light {\n    vec3 position;\n    vec3 color;\n    // * SPOT LIGHT * //\n    #ifdef HAS_SPOT\n        vec3 conePointAt;\n        #define COSCONEANGLE x\n        #define COSCONEANGLEINNER y\n        #define SPOTEXPONENT z\n        vec3 spotProperties;\n    #endif\n\n    #define INTENSITY x\n    #define ATTENUATION y\n    #define FALLOFF z\n    #define RADIUS w\n    vec4 lightProperties;\n\n    int type;\n    int castLight;\n    #define CASTLIGHT x\n    #define TYPE y\n    ivec2 castLightType;\n};\n#ifdef HAS_TEXTURES\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D texDiffuse;\n    #endif\n#endif\n\nUNI Light lights[NUM_LIGHTS];\n\n// * UTILITY FUNCTIONS */\nfloat when_gt(float x, float y) { return max(sign(x - y), 0.0); } // comparator function\nfloat when_eq(float x, float y) { return 1. - abs(sign(x - y)); } // comparator function\nfloat when_neq(float x, float y) { return abs(sign(x - y)); } // comparator function\n\n\n// * LIGHT CALCULATIONS */\nfloat CalculateFalloff(float radius, float falloff, float distLight)\n{\n    float denom = distLight / radius + 1.0;\n    float attenuation = 1.0 / (denom*denom);\n    float t = (attenuation - 0.1) / (1.0 - 0.1);\n\n    t = t * (20.0 * (1. - falloff) * 20.0 * (1. - falloff));\n\n    return min(1.0,max(t, 0.0));\n}\n\nfloat Falloff2(vec3 lightDirection, float falloff) {\n    float distanceSquared = dot(lightDirection, lightDirection);\n    float factor = distanceSquared * falloff;\n    float smoothFactor = clamp(1. - factor * factor, 0., 1.);\n    float attenuation = smoothFactor * smoothFactor;\n\n    return attenuation * 1. / max(distanceSquared, 0.00001);\n}\n\n#ifdef HAS_SPOT\n    float CalculateSpotLightEffect(vec3 lightPosition, vec3 conePointAt, float cosConeAngle, float cosConeAngleInner, float spotExponent, vec3 lightDirection) {\n        vec3 spotLightDirection = normalize(lightPosition-conePointAt);\n        float spotAngle = dot(-lightDirection, spotLightDirection);\n        float epsilon = cosConeAngle - cosConeAngleInner;\n\n        float spotIntensity = clamp((spotAngle - cosConeAngle)/epsilon, 0.0, 1.0);\n        spotIntensity = pow(spotIntensity, max(0.01, spotExponent));\n\n        return max(0., spotIntensity);\n    }\n#endif\nvec3 CalculateDiffuseColor(vec3 lightDirection, vec3 normal, vec3 lightColor, vec3 materialColor, inout float lambert) {\n    lambert = clamp(dot(lightDirection, normal), 0., 1.);\n    vec3 diffuseColor = lambert * lightColor * materialColor;\n    return diffuseColor;\n}\n\n\n// MAIN\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n\n    vec4 col=vec4(0.0);\n    vec3 normal = normalize(mat3(normalMatrix)*norm);\n\n    #ifdef DOUBLE_SIDED\n        if(!gl_FrontFacing) normal = normal*-1.0;\n    #endif\n\n    vec3 matColor = materialColor.rgb;\n\n    #ifdef HAS_TEXTURES\n        #ifdef HAS_TEXTURE_DIFFUSE\n            matColor = texture(texDiffuse, texCoord).rgb;\n            #ifdef COLORIZE_TEXTURE\n                matColor *= materialColor.rgb;\n            #endif\n        #endif\n    #endif\n\n    for(int l=0;l<NUM_LIGHTS;l++) {\n        if (lights[l].castLightType.TYPE == AMBIENT) {\n            col.rgb += lights[l].lightProperties.INTENSITY * lights[l].color;\n        } else {\n            if (lights[l].castLightType.CASTLIGHT == 0) continue;\n\n            vec3 lightModelDiff= lights[l].position - modelPos.xyz;\n            vec3 lightDirection = normalize(lightModelDiff);\n\n            if (lights[l].castLightType.TYPE == DIRECTIONAL) lightDirection = lights[l].position;\n\n            float lambert = 1.; // inout variable\n            vec3 diffuseColor = CalculateDiffuseColor(lightDirection, normal, lights[l].color, matColor, lambert);\n\n            if (lights[l].castLightType.TYPE != DIRECTIONAL) diffuseColor *= Falloff2(lightDirection, lights[l].lightProperties.FALLOFF);\n\n            #ifdef HAS_SPOT\n                if (lights[l].castLightType.TYPE == SPOT) diffuseColor *= CalculateSpotLightEffect(\n                    lights[l].position, lights[l].conePointAt, lights[l].spotProperties.COSCONEANGLE,\n                    lights[l].spotProperties.COSCONEANGLEINNER, lights[l].spotProperties.SPOTEXPONENT,\n                    lightDirection\n                );\n            #endif\n\n            diffuseColor *= lights[l].lightProperties.INTENSITY;\n            col.rgb += diffuseColor;\n        }\n    }\n\n\n    col.a = materialColor.a;\n\n    {{MODULE_COLOR}}\n\n    outColor = col;\n}\n',
	n = '#define TEX_REPEAT_X x;\n#define TEX_REPEAT_Y y;\n#define TEX_OFFSET_X z;\n#define TEX_OFFSET_Y w;\n\nIN vec3 vPosition;\nIN vec3 attrVertNormal;\nIN vec2 attrTexCoord;\n\nIN vec3 attrTangent;\nIN vec3 attrBiTangent;\nIN float attrVertIndex;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nOUT vec3 norm;\nOUT mat4 mvMatrix;\nOUT mat3 normalMatrix;\nOUT vec4 modelPos;\nOUT vec2 texCoord;\n{{MODULES_HEAD}}\n\nmat3 transposeMat3(mat3 m)\n{\n    return mat3(m[0][0], m[1][0], m[2][0],\n        m[0][1], m[1][1], m[2][1],\n        m[0][2], m[1][2], m[2][2]);\n}\n\nmat3 inverseMat3(mat3 m)\n{\n    float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];\n    float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];\n    float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];\n\n    float b01 = a22 * a11 - a12 * a21;\n    float b11 = -a22 * a10 + a12 * a20;\n    float b21 = a21 * a10 - a11 * a20;\n\n    float det = a00 * b01 + a01 * b11 + a02 * b21;\n\n    return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),\n        b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),\n        b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;\n}\n\nvoid main()\n{\n    vec4 pos = vec4( vPosition, 1. );\n    mat4 mMatrix=modelMatrix;\n    vec3 tangent=attrTangent,\n        bitangent=attrBiTangent;\n\n    texCoord=attrTexCoord;\n    texCoord.y = 1. - texCoord.y;\n\n    norm=attrVertNormal;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    normalMatrix = transposeMat3(inverseMat3(mat3(mMatrix)));\n\n\n    // this needs only to be done when instancing....\n\n    mvMatrix=viewMatrix*mMatrix;\n    modelPos=mMatrix*pos;\n\n    gl_Position = projMatrix * mvMatrix * pos;\n}\n',
	a = {
	  ambient: 0,
	  point: 1,
	  directional: 2,
	  spot: 3
	},
	i = e.inTrigger('Execute'),
	o = e.inValueSlider('Diffuse R', Math.random()),
	r = e.inValueSlider('Diffuse G', Math.random()),
	s = e.inValueSlider('Diffuse B', Math.random()),
	l = e.inValueSlider('Diffuse A', 1);
	o.setUiAttribs({
	  colorPick: !0
	}),
	e.setPortGroup('Diffuse Color', [
	  o,
	  r,
	  s,
	  l
	]);
	const c = e.inBool('Double Sided', !1);
	c.setUiAttribs({
	  hidePort: !0
	}),
	c.onChange = function () {
	  m.toggleDefine('DOUBLE_SIDED', c.get())
	},
	e.setPortGroup('Material Properties', [
	  c
	]);
	const d = e.inTexture('Diffuse Texture');
	let u = null;
	d.onChange = h;
	const f = e.inBool('Colorize Texture', !1);
	function h() {
	  d.get() ? m.hasDefine('HAS_TEXTURE_DIFFUSE') || (m.define('HAS_TEXTURE_DIFFUSE'), u || (u = new CGL.Uniform(m, 't', 'texDiffuse', 0))) : (m.removeUniform('texDiffuse'), m.removeDefine('HAS_TEXTURE_DIFFUSE'), u = null)
	}
	f.onChange = function () {
	  m.toggleDefine('COLORIZE_TEXTURE', f.get())
	},
	e.setPortGroup('Texture', [
	  d,
	  f
	]);
	const g = e.outTrigger('next'),
	p = e.patch.cgl,
	m = new CGL.Shader(p, 'LambertMaterial');
	m.define('NUM_LIGHTS', '1');
	new CGL.Uniform(m, '4f', 'materialColor', o, r, s, l);
	e.outObject('Shader').set(m);
	const _ = 64 === p.maxUniformsFrag ? 6 : 16;
	m.setSource(n, t);
	const b = [
	  {
		type: 'point',
		position: [
		  0,
		  2,
		  1
		],
		intensity: 1,
		attenuation: 0,
		falloff: 0.5,
		radius: 80,
		castLight: 1
	  }
	];
	m.define('MAX_LIGHTS', _.toString());
	let E = null;
	const I = [
	],
	v = {
	  directional: !1,
	  spot: !1,
	  ambient: !1,
	  point: !1
	};
	function M(e) {
	  for (let t = 0; t < e.length; t += 1) {
		const n = e[t];
		n.isUsed = !0,
		I[t].position.setValue(n.position),
		I[t].color.setValue(n.color),
		I[t].lightProperties.setValue([n.intensity,
		n.attenuation,
		n.falloff,
		n.radius]),
		I[t].conePointAt.setValue(n.conePointAt),
		I[t].spotProperties.setValue([n.cosConeAngle,
		n.cosConeAngleInner,
		n.spotExponent]),
		I[t].castLightType.setValue([Number(n.castLight),
		a[n.type]])
	  }
	}
	let L = 0;
	function T(e) {
	  e.length !== L ? (!function (e) {
		for (let e = 0; e < I.length; e += 1) I[e] = null;
		v.directional = !1,
		v.spot = !1,
		v.ambient = !1,
		v.point = !1;
		for (let t = 0; t < e.length; t += 1) {
		  if (t === _) return;
		  I[t] = null;
		  const n = e[t].type;
		  v[n] || (v[n] = !0),
		  I[t] || (I[t] = {
			color: new CGL.Uniform(m, '3f', 'lights[' + t + '].color', [
			  1,
			  1,
			  1
			]),
			position: new CGL.Uniform(m, '3f', 'lights[' + t + '].position', [
			  0,
			  11,
			  0
			]),
			lightProperties: new CGL.Uniform(m, '4f', 'lights[' + t + '].lightProperties', [
			  1,
			  1,
			  1,
			  1
			]),
			conePointAt: new CGL.Uniform(m, '3f', 'lights[' + t + '].conePointAt', vec3.create()),
			spotProperties: new CGL.Uniform(m, '3f', 'lights[' + t + '].spotProperties', [
			  0,
			  0,
			  0,
			  0
			]),
			castLightType: new CGL.Uniform(m, '2i', 'lights[' + t + '].castLightType', [
			  0,
			  0
			])
		  })
		}
		for (let e = 0, t = Object.keys(v); e < t.length; e += 1) {
		  const n = t[e];
		  m.toggleDefine('HAS_' + n.toUpperCase(), v[n])
		}
	  }(e), L = e.length, m.define('NUM_LIGHTS', '' + Math.max(L, 1)), M(e)) : M(e)
	}
	const S = mat4.create();
	function A() {
	  var e;
	  p.frameStore.lightStack && p.frameStore.lightStack.length ? m && p.frameStore.lightStack && p.frameStore.lightStack.length && (E = null, T(p.frameStore.lightStack)) : (E || (E = {
		color: new CGL.Uniform(m, '3f', 'lights[0].color', [
		  1,
		  1,
		  1
		]),
		position: new CGL.Uniform(m, '3f', 'lights[0].position', [
		  0,
		  11,
		  0
		]),
		lightProperties: new CGL.Uniform(m, '4f', 'lights[0].lightProperties', [
		  1,
		  1,
		  1,
		  1
		]),
		conePointAt: new CGL.Uniform(m, '3f', 'lights[0].conePointAt', vec3.create()),
		spotProperties: new CGL.Uniform(m, '3f', 'lights[0].spotProperties', [
		  0,
		  0,
		  0,
		  0
		]),
		castLightType: new CGL.Uniform(m, '2i', 'lights[0].castLightType', [
		  0,
		  0
		])
	  }), mat4.invert(S, p.vMatrix), b[0].position = [
		S[12],
		S[13],
		S[14]
	  ], e = b[0], m.define('NUM_LIGHTS', '1'), m.hasDefine('HAS_SPOT') && m.removeDefine('HAS_SPOT'), m.hasDefine('HAS_DIRECTIONAL') && m.removeDefine('HAS_DIRECTIONAL'), m.hasDefine('HAS_AMBIENT') && m.removeDefine('HAS_AMBIENT'), m.hasDefine('HAS_POINT') || m.define('HAS_POINT'), E.position.setValue(e.position), E.color.setValue(e.color), E.lightProperties.setValue([e.intensity,
	  e.attenuation,
	  e.falloff,
	  e.radius]), E.castLightType.setValue([1,
	  a[e.type]]), E.conePointAt.setValue(e.conePointAt), E.spotProperties.setValue([e.cosConeAngle,
	  e.cosConeAngleInner,
	  e.spotExponent]), L = - 1)
	}
	i.onTriggered = function () {
	  m ? (p.frameStore.lightStack && (0 === p.frameStore.lightStack.length ? e.setUiError('deflight', 'Default light is enabled. Please add lights to your patch to make this warning disappear.', 1) : e.setUiError('deflight', null)), p.pushShader(m), m.popTextures(), A(), d.get() && m.pushTexture(u, d.get().tex), g.trigger(), p.popShader()) : e.log('lambert has no shader...')
	},
	h()
  },
  Ops.Gl.Phong.LambertMaterial_v2.prototype = new CABLES.Op,
  CABLES.OPS['d69316f1-bde9-4645-8280-c635a8982e0d'] = {
	f: Ops.Gl.Phong.LambertMaterial_v2,
	objName: 'Ops.Gl.Phong.LambertMaterial_v2'
  },
  Ops.Sidebar.Sidebar = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = {
	  style_css: '/*\n * SIDEBAR\n  http://danielstern.ca/range.css/#/\n  https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-progress-value\n */\n\n\n.icon-chevron-down {\n    top: 2px;\n    right: 9px;\n}\n\n.iconsidebar-chevron-up {\n\tbackground-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n    top: 2px;\n    right: 9px;\n}\n\n.sidebar-cables-right\n{\n    right: 0px;\n    left: initial !important;\n}\n\n.sidebar-cables {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    border-radius: 10px;\n    /*border:10px solid #1a1a1a;*/\n    z-index: 100000;\n    color: #BBBBBB;\n    width: 220px;\n    max-height: 100%;\n    box-sizing: border-box;\n    overflow-y: auto;\n    overflow-x: hidden;\n    font-size: 13px;\n    font-family: Arial;\n    line-height: 1em; /* prevent emojis from breaking height of the title */\n    --sidebar-border-radius: 4px;\n    --sidebar-monospace-font-stack: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\n    --sidebar-hover-transition-time: .2s;\n}\n\n.sidebar-cables::selection {\n    background-color: #24baa7;\n    color: #EEEEEE;\n}\n\n.sidebar-cables::-webkit-scrollbar {\n    background-color: transparent;\n    --cables-scrollbar-width: 8px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-track {\n    background-color: transparent;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-thumb {\n    background-color: #333333;\n    border-radius: 4px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables--closed {\n    width: auto;\n}\n\n.sidebar__close-button {\n    background-color: #222;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    transition: background-color var(--sidebar-hover-transition-time);\n    color: #CCCCCC;\n    height: 12px;\n    box-sizing: border-box;\n    padding-top: 2px;\n    text-align: center;\n    cursor: pointer;\n    /*border-top: 1px solid #272727;*/\n    border-radius: 0 0 var(--sidebar-border-radius) var(--sidebar-border-radius);\n    opacity: 1.0;\n    transition: opacity 0.3s;\n    overflow: hidden;\n}\n\n.sidebar__close-button-icon {\n    display: inline-block;\n    /*opacity: 0;*/\n    width: 21px;\n    height: 20px;\n    position: relative;\n    top: -1px;\n    /*background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);*/\n    /*background-size: cover;*/\n    /*background-repeat: no-repeat;*/\n    /*background-repeat: no-repeat;*/\n    /*background-position: 0 -1px;*/\n}\n\n.sidebar--closed {\n    width: auto;\n    margin-right: 20px;\n}\n\n.sidebar--closed .sidebar__close-button {\n    margin-top: 8px;\n    margin-left: 8px;\n    padding-top: 13px;\n    padding-left: 11px;\n    padding-right: 11px;\n    width: 46px;\n    height: 46px;\n    border-radius: 50%;\n    cursor: pointer;\n    opacity: 0.3;\n}\n\n.sidebar--closed .sidebar__group\n{\n    display:none;\n\n}\n.sidebar--closed .sidebar__close-button-icon {\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyMnB4IiBoZWlnaHQ9IjE3cHgiIHZpZXdCb3g9IjAgMCAyMiAxNyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5Hcm91cCAzPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IkNhbnZhcy1TaWRlYmFyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJEZXNrdG9wLWdyZWVuLWJsdWlzaC1Db3B5LTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMC4wMDAwMDAsIC0yMi4wMDAwMDApIj4gICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCAyMi4wMDAwMDApIj4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNSwyLjUgTDIuNSwyLjUiIGlkPSJMaW5lLTIiIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAuNSwyLjUgTDIxLjUsMi41IiBpZD0iTGluZS0yIiBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvcGF0aD4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNSw4LjUgTDExLjUsOC41IiBpZD0iTGluZS0yIiBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvcGF0aD4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5LjUsOC41IEwyMS41LDguNSIgaWQ9IkxpbmUtMiIgc3Ryb2tlPSIjOTc5Nzk3IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L3BhdGg+ICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjUsMTQuNSBMNS41LDE0LjUiIGlkPSJMaW5lLTIiIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuNSwxNC41IEwyMS41LDE0LjUiIGlkPSJMaW5lLTIiIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTMiIGZpbGw9IiM5Nzk3OTciIGN4PSI2LjUiIGN5PSIyLjUiIHI9IjIuNSI+PC9jaXJjbGU+ICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMyIgZmlsbD0iIzk3OTc5NyIgY3g9IjE1LjUiIGN5PSI4LjUiIHI9IjIuNSI+PC9jaXJjbGU+ICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMyIgZmlsbD0iIzk3OTc5NyIgY3g9IjkuNSIgY3k9IjE0LjUiIHI9IjIuNSI+PC9jaXJjbGU+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);\n    background-position: 0px 0px;\n}\n\n.sidebar__close-button:hover {\n    background-color: #111111;\n    opacity: 1.0 !important;\n}\n\n/*\n * SIDEBAR ITEMS\n */\n\n.sidebar__items {\n    /* max-height: 1000px; */\n    /* transition: max-height 0.5;*/\n    background-color: #222;\n}\n\n.sidebar--closed .sidebar__items {\n    /* max-height: 0; */\n    height: 0;\n    display: none;\n    pointer-interactions: none;\n}\n\n.sidebar__item__right {\n    float: right;\n}\n\n/*\n * SIDEBAR GROUP\n */\n\n.sidebar__group {\n    /*background-color: #1A1A1A;*/\n    overflow: hidden;\n    box-sizing: border-box;\n    animate: height;\n    /* max-height: 1000px; */\n    /* transition: max-height 0.5s; */\n--sidebar-group-header-height: 33px;\n}\n\n.sidebar__group-items\n{\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.sidebar__group--closed {\n    /* max-height: 13px; */\n    height: var(--sidebar-group-header-height);\n}\n\n.sidebar__group-header {\n    box-sizing: border-box;\n    color: #EEEEEE;\n    background-color: #151515;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    height: var(--sidebar-group-header-height);\n    padding-top: 7px;\n    text-transform: uppercase;\n    letter-spacing: 0.08em;\n    cursor: pointer;\n    transition: background-color var(--sidebar-hover-transition-time);\n    position: relative;\n}\n\n.sidebar__group-header:hover {\n  background-color: #111111;\n}\n\n.sidebar__group-header-title {\n  float: left;\n  overflow: hidden;\n  padding: 0 15px;\n  padding-top:5px;\n  font-weight:bold;\n}\n\n.sidebar__group-header-undo {\n    float: right;\n    overflow: hidden;\n    padding-right: 15px;\n    padding-top:5px;\n    font-weight:bold;\n  }\n\n.sidebar__group-header-icon {\n    width: 17px;\n    height: 14px;\n    background-repeat: no-repeat;\n    display: inline-block;\n    position: absolute;\n    background-size: cover;\n\n    /* icon open */\n    /* feather icon: chevron up */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n    top: 4px;\n    right: 5px;\n    opacity: 0.0;\n    transition: opacity 0.3;\n}\n\n.sidebar__group-header:hover .sidebar__group-header-icon {\n    opacity: 1.0;\n}\n\n/* icon closed */\n.sidebar__group--closed .sidebar__group-header-icon {\n    /* feather icon: chevron down */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);\n    top: 4px;\n    right: 5px;\n}\n\n/*\n * SIDEBAR ITEM\n */\n\n.sidebar__item\n{\n    box-sizing: border-box;\n    padding: 7px;\n    padding-left:15px;\n    padding-right:15px;\n\n    overflow: hidden;\n    position: relative;\n}\n\n.sidebar__item-label {\n    display: inline-block;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    width: calc(50% - 7px);\n    margin-right: 7px;\n    margin-top: 2px;\n    text-overflow: ellipsis;\n    /* overflow: hidden; */\n}\n\n.sidebar__item-value-label {\n    font-family: var(--sidebar-monospace-font-stack);\n    display: inline-block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 60%;\n}\n\n.sidebar__item-value-label::selection {\n    background-color: #24baa7;\n    color: #EEEEEE;\n}\n\n.sidebar__item + .sidebar__item,\n.sidebar__item + .sidebar__group,\n.sidebar__group + .sidebar__item,\n.sidebar__group + .sidebar__group {\n    /*border-top: 1px solid #272727;*/\n}\n\n/*\n * SIDEBAR ITEM TOGGLE\n */\n\n.sidebar__toggle {\n    cursor: pointer;\n}\n\n.sidebar__toggle-input {\n    --sidebar-toggle-input-color: #CCCCCC;\n    --sidebar-toggle-input-color-hover: #EEEEEE;\n    --sidebar-toggle-input-border-size: 2px;\n    display: inline;\n    float: right;\n    box-sizing: border-box;\n    border-radius: 50%;\n    cursor: pointer;\n    --toggle-size: 11px;\n    margin-top: 2px;\n    background-color: transparent !important;\n    border: var(--sidebar-toggle-input-border-size) solid var(--sidebar-toggle-input-color);\n    width: var(--toggle-size);\n    height: var(--toggle-size);\n    transition: background-color var(--sidebar-hover-transition-time);\n    transition: border-color var(--sidebar-hover-transition-time);\n}\n.sidebar__toggle:hover .sidebar__toggle-input {\n    border-color: var(--sidebar-toggle-input-color-hover);\n}\n\n.sidebar__toggle .sidebar__item-value-label {\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    max-width: calc(50% - 12px);\n}\n.sidebar__toggle-input::after { clear: both; }\n\n.sidebar__toggle--active .icon_toggle\n{\n\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjMDZmNzhiIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzA2Zjc4YiIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjMDZmNzhiIiBzdHJva2U9IiMwNmY3OGIiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNmY3OGIiIHN0cm9rZT0iIzA2Zjc4YiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\n    opacity: 1;\n    transform: rotate(0deg);\n}\n\n\n.icon_toggle\n{\n    float: right;\n    width:40px;\n    height:18px;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjYWFhYWFhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2FhYWFhYSIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjYWFhYWFhIiBzdHJva2U9IiNhYWFhYWEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNhYWFhYWEiIHN0cm9rZT0iI2FhYWFhYSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\n    background-size: 50px 37px;\n    background-position: -6px -10px;\n    transform: rotate(180deg);\n    opacity: 0.4;\n}\n\n\n\n/*.sidebar__toggle--active .sidebar__toggle-input {*/\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\n/*    background-color: var(--sidebar-toggle-input-color);*/\n/*}*/\n/*.sidebar__toggle--active .sidebar__toggle-input:hover*/\n/*{*/\n/*    background-color: var(--sidebar-toggle-input-color-hover);*/\n/*    border-color: var(--sidebar-toggle-input-color-hover);*/\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\n/*    transition: border-color var(--sidebar-hover-transition-time);*/\n/*}*/\n\n/*\n * SIDEBAR ITEM BUTTON\n */\n\n.sidebar__button {}\n\n.sidebar__button-input {\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    height: 24px;\n    background-color: transparent;\n    color: #CCCCCC;\n    box-sizing: border-box;\n    padding-top: 3px;\n    text-align: center;\n    border-radius: 125px;\n    border:2px solid #555;\n    cursor: pointer;\n}\n\n.sidebar__button-input.plus, .sidebar__button-input.minus {\n    display: inline-block;\n    min-width: 20px;\n}\n\n.sidebar__button-input:hover {\n  background-color: #333;\n  border:2px solid #07f78c;\n}\n\n/*\n * VALUE DISPLAY (shows a value)\n */\n\n.sidebar__value-display {}\n\n/*\n * SLIDER\n */\n\n.sidebar__slider {\n    --sidebar-slider-input-height: 3px;\n}\n\n.sidebar__slider-input-wrapper {\n    width: 100%;\n    margin-top: 8px;\n    position: relative;\n}\n\n.sidebar__slider-input {\n    -webkit-appearance: none;\n    appearance: none;\n    margin: 0;\n    width: 100%;\n    height: var(--sidebar-slider-input-height);\n    background: #555;\n    cursor: pointer;\n    outline: 0;\n\n    -webkit-transition: .2s;\n    transition: background-color .2s;\n    border: none;\n}\n\n.sidebar__slider-input:focus, .sidebar__slider-input:hover {\n    border: none;\n}\n\n.sidebar__slider-input-active-track {\n    user-select: none;\n    position: absolute;\n    z-index: 11;\n    top: 0;\n    left: 0;\n    background-color: #07f78c;\n    pointer-events: none;\n    height: var(--sidebar-slider-input-height);\n\n    /* width: 10px; */\n}\n\n/* Mouse-over effects */\n.sidebar__slider-input:hover {\n    /*background-color: #444444;*/\n}\n\n/*.sidebar__slider-input::-webkit-progress-value {*/\n/*    background-color: green;*/\n/*    color:green;*/\n\n/*    }*/\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\n\n.sidebar__slider-input::-moz-range-thumb\n{\n    position: absolute;\n    height: 15px;\n    width: 15px;\n    z-index: 900 !important;\n    border-radius: 20px !important;\n    cursor: pointer;\n    background: #07f78c !important;\n    user-select: none;\n\n}\n\n.sidebar__slider-input::-webkit-slider-thumb\n{\n    position: relative;\n    appearance: none;\n    -webkit-appearance: none;\n    user-select: none;\n    height: 15px;\n    width: 15px;\n    display: block;\n    z-index: 900 !important;\n    border: 0;\n    border-radius: 20px !important;\n    cursor: pointer;\n    background: #777 !important;\n}\n\n.sidebar__slider-input:hover ::-webkit-slider-thumb {\n    background-color: #EEEEEE !important;\n}\n\n/*.sidebar__slider-input::-moz-range-thumb {*/\n\n/*    width: 0 !important;*/\n/*    height: var(--sidebar-slider-input-height);*/\n/*    background: #EEEEEE;*/\n/*    cursor: pointer;*/\n/*    border-radius: 0 !important;*/\n/*    border: none;*/\n/*    outline: 0;*/\n/*    z-index: 100 !important;*/\n/*}*/\n\n.sidebar__slider-input::-moz-range-track {\n    background-color: transparent;\n    z-index: 11;\n}\n\n/*.sidebar__slider-input::-moz-range-thumb:hover {*/\n  /* background-color: #EEEEEE; */\n/*}*/\n\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input-active-track {*/\n/*    background-color: #EEEEEE;*/\n/*}*/\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input::-moz-range-thumb {*/\n/*    background-color: #fff !important;*/\n/*}*/\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input::-webkit-slider-thumb {*/\n/*    background-color: #EEEEEE;*/\n/*}*/\n\n.sidebar__slider input[type=text] {\n    box-sizing: border-box;\n    /*background-color: #333333;*/\n    text-align: right;\n    color: #BBBBBB;\n    display: inline-block;\n    background-color: transparent !important;\n\n    width: 40%;\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n}\n\n.sidebar__slider input[type=text]:active,\n.sidebar__slider input[type=text]:focus,\n.sidebar__slider input[type=text]:hover {\n\n    color: #EEEEEE;\n}\n\n/*\n * TEXT / DESCRIPTION\n */\n\n.sidebar__text .sidebar__item-label {\n    width: auto;\n    display: block;\n    max-height: none;\n    margin-right: 0;\n    line-height: 1.1em;\n}\n\n/*\n * SIDEBAR INPUT\n */\n.sidebar__text-input textarea,\n.sidebar__text-input input[type=text] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: 50%;\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    border:1px solid #666;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n}\n\n.sidebar__color-picker .sidebar__item-label\n{\n    width:45%;\n}\n\n.sidebar__text-input textarea,\n.sidebar__text-input input[type=text]:active,\n.sidebar__text-input input[type=text]:focus,\n.sidebar__text-input input[type=text]:hover {\n    background-color: transparent;\n    color: #EEEEEE;\n}\n\n.sidebar__text-input textarea\n{\n    margin-top:10px;\n    height:60px;\n    width:100%;\n}\n\n/*\n * SIDEBAR SELECT\n */\n\n\n\n .sidebar__select {}\n .sidebar__select-select {\n    color: #BBBBBB;\n    /*-webkit-appearance: none;*/\n    /*-moz-appearance: none;*/\n    appearance: none;\n    /*box-sizing: border-box;*/\n    width: 50%;\n    height: 20px;\n    background-color: #333333;\n    /*background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);*/\n    background-repeat: no-repeat;\n    background-position: right center;\n    background-size: 16px 16px;\n    margin: 0;\n    /*padding: 0 2 2 6px;*/\n    border-radius: 5px;\n    border: 1px solid #777;\n    background-color: #444;\n    cursor: pointer;\n    outline: none;\n    padding-left: 5px;\n\n }\n\n.sidebar__select-select:hover,\n.sidebar__select-select:active,\n.sidebar__select-select:active {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\n/*\n * COLOR PICKER\n */\n\n .sidebar__color-picker-color-input {}\n\n .sidebar__color-picker input[type=text] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: calc(50% - 21px); /* 50% minus space of picker circle */\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n    margin-right: 7px;\n}\n\n.sidebar__color-picker input[type=text]:active,\n.sidebar__color-picker input[type=text]:focus,\n.sidebar__color-picker input[type=text]:hover {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\n.sidebar__color-picker input[type=color],\n.sidebar__palette-picker input[type=color] {\n    display: inline-block;\n    border-radius: 100%;\n    height: 14px;\n    width: 14px;\n    padding: 0;\n    border: none;\n    border-color: transparent;\n    outline: none;\n    background: none;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    cursor: pointer;\n    position: relative;\n    top: 3px;\n}\n.sidebar__color-picker input[type=color]:focus,\n.sidebar__palette-picker input[type=color]:focus {\n    outline: none;\n}\n.sidebar__color-picker input[type=color]::-moz-color-swatch,\n.sidebar__palette-picker input[type=color]::-moz-color-swatch {\n    border: none;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch-wrapper,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch-wrapper {\n    padding: 0;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch {\n    border: none;\n    border-radius: 100%;\n}\n\n/*\n * Palette Picker\n */\n.sidebar__palette-picker .sidebar__palette-picker-color-input.first {\n    margin-left: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input.last {\n    margin-right: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input {\n    margin: 0 4px;\n}\n\n.sidebar__palette-picker .circlebutton {\n    width: 14px;\n    height: 14px;\n    border-radius: 1em;\n    display: inline-block;\n    top: 3px;\n    position: relative;\n}\n\n/*\n * Preset\n */\n.sidebar__item-presets-preset\n{\n    padding:4px;\n    cursor:pointer;\n    padding-left:8px;\n    padding-right:8px;\n    margin-right:4px;\n    background-color:#444;\n}\n\n.sidebar__item-presets-preset:hover\n{\n    background-color:#666;\n}\n\n.sidebar__greyout\n{\n    background: #222;\n    opacity: 0.8;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 1000;\n    right: 0;\n    top: 0;\n}\n'
	},
	n = 'cables-sidebar-style',
	a = 'cables-sidebar-dynamic-style',
	i = 'sidebar-cables',
	o = 'sidebar' + CABLES.uuid(),
	r = 'sidebar__items',
	s = 'sidebar__close-button',
	l = 'sidebar__close-button-icon',
	c = '',
	d = '';
	let u = null,
	f = null,
	h = null;
	const g = e.inValueBool('Visible', !0),
	p = e.inValueSlider('Opacity', 1),
	m = e.inValueBool('Default Minimized'),
	_ = e.inValueSlider('Minimized Opacity', 0.5),
	b = e.inValueBool('Show undo button', !1),
	E = e.inString('Title', 'Sidebar'),
	I = e.inValueBool('Side'),
	v = e.outObject('childs');
	let M = document.querySelector('.' + o);
	M || (M = function () {
	  const t = document.createElement('div');
	  t.classList.add(i),
	  t.classList.add(o);
	  const n = e.patch.cgl.canvas.parentElement,
	  a = document.createElement('div');
	  a.classList.add('sidebar__group'),
	  t.appendChild(a);
	  const c = document.createElement('div');
	  c.classList.add('sidebar__group-header'),
	  t.appendChild(c);
	  const d = document.createElement('span');
	  if (d.classList.add('sidebar__group-header-title'), (h = document.createElement('span')).classList.add('sidebar__group-header-title-text'), h.innerHTML = E.get(), d.appendChild(h), c.appendChild(d), T(c), a.appendChild(c), t.appendChild(a), a.addEventListener('click', D), !n) return void e.warn('[sidebar] no canvas parentelement found...');
	  n.appendChild(t);
	  const g = document.createElement('div');
	  return g.classList.add(r),
	  t.appendChild(g),
	  (u = document.createElement('div')).classList.add(s),
	  u.addEventListener('click', D),
	  t.appendChild(u),
	  (f = document.createElement('span')).classList.add(l),
	  u.appendChild(f),
	  t
	}());
	const L = M.querySelector('.' + r);
	function T(e) {
	  if (e) {
		const t = document.querySelector('.sidebar-cables .sidebar__group-header .sidebar__group-header-undo');
		if (t) b.get() || e.removeChild(t);
		 else if (b.get()) {
		  const t = document.createElement('span');
		  t.classList.add('sidebar__group-header-undo'),
		  t.classList.add('fa'),
		  t.classList.add('fa-undo'),
		  t.addEventListener('click', function (e) {
			e.stopPropagation();
			const t = document.querySelectorAll('.sidebar-cables .sidebar__reloadable'),
			n = document.createEvent('MouseEvents');
			n.initEvent('dblclick', !0, !0),
			t.forEach(e=>{
			  e.dispatchEvent(n)
			})
		  }),
		  e.appendChild(t)
		}
	  }
	}
	function S() {
	  u && (m.get() ? M.classList.add('sidebar--closed') : M.classList.remove('sidebar--closed'))
	}
	function A() {
	  const e = document.querySelectorAll('.' + a);
	  e && e.forEach(function (e) {
		e.parentNode.removeChild(e)
	  });
	  const t = document.createElement('style');
	  t.classList.add(a);
	  let n = '.sidebar--closed .sidebar__close-button { ';
	  n += 'opacity: ' + _.get(),
	  n += '}';
	  const i = document.createTextNode(n);
	  t.appendChild(i),
	  document.body.appendChild(t)
	}
	function D(t) {
	  if (t.stopPropagation(), !M) return void e.error('Sidebar could not be closed...');
	  M.classList.toggle('sidebar--closed');
	  t.target;
	  let n = c;
	  M.classList.contains('sidebar--closed') && (n = d)
	}
	v.set({
	  parentElement: L,
	  parentOp: e
	}),
	S(),
	function () {
	  const e = document.querySelectorAll('.' + n);
	  e && e.forEach(function (e) {
		e.parentNode.removeChild(e)
	  });
	  const a = document.createElement('style');
	  a.innerHTML = t.style_css,
	  a.classList.add(n),
	  document.body.appendChild(a)
	}(),
	A(),
	g.onChange = function () {
	  g.get() ? M.style.display = 'block' : M.style.display = 'none'
	},
	p.onChange = function () {
	  const e = p.get();
	  M.style.opacity = e
	},
	m.onChange = S,
	_.onChange = function () {
	  A()
	},
	b.onChange = function () {
	  const e = document.querySelector('.sidebar-cables .sidebar__group-header');
	  e && T(e)
	},
	e.onDelete = function () {
	  e = M,
	  e && e.parentNode && e.parentNode.removeChild && e.parentNode.removeChild(e);
	  var e
	},
	I.onChange = function () {
	  I.get() ? M.classList.add('sidebar-cables-right') : M.classList.remove('sidebar-cables-right')
	},
	I.onChanged = function () {
	},
	E.onChange = function () {
	  h && (h.innerHTML = E.get())
	}
  },
  Ops.Sidebar.Sidebar.prototype = new CABLES.Op,
  CABLES.OPS['5a681c35-78ce-4cb3-9858-bc79c34c6819'] = {
	f: Ops.Sidebar.Sidebar,
	objName: 'Ops.Sidebar.Sidebar'
  },
  Ops.Sidebar.Slider_v2 = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inObject('link'),
	n = e.inValueString('Text', 'Slider'),
	a = e.inValue('Min', 0),
	i = e.inValue('Max', 1),
	o = e.inValue('Step', 0.00001),
	r = e.inBool('Grey Out', !1),
	s = e.inBool('Visible', !0),
	l = e.inValue('Input', 0.5),
	c = e.inTriggerButton('Set Default'),
	d = e.inTriggerButton('Reset'),
	u = e.inValue('Default', 0.5);
	u.setUiAttribs({
	  hidePort: !0,
	  greyout: !0
	});
	const f = e.outObject('childs'),
	h = e.outValue('Result', u.get());
	e.toWorkNeedsParent('Ops.Sidebar.Sidebar'),
	e.setPortGroup('Range', [
	  a,
	  i,
	  o
	]),
	e.setPortGroup('Visibility', [
	  r,
	  s
	]);
	const g = document.createElement('div');
	g.classList.add('sidebar__item'),
	g.classList.add('sidebar__slider');
	const p = document.createElement('div');
	p.classList.add('sidebar__item-label');
	const m = document.createElement('div');
	m.classList.add('sidebar__greyout'),
	g.appendChild(m),
	m.style.display = 'none';
	const _ = document.createTextNode(n.get());
	p.appendChild(_),
	g.appendChild(p);
	const b = document.createElement('input');
	b.value = u.get(),
	b.classList.add('sidebar__text-input-input'),
	b.setAttribute('type', 'text'),
	b.addEventListener('input', M),
	b.addEventListener('blur', function (t) {
	  let n = parseFloat(t.target.value);
	  isNaN(n) && (n = 0);
	  const o = a.get(),
	  r = i.get();
	  if (blur) {
		let e = !1;
		n < o ? (n = o, e = !0) : n > r && (n = r, e = !0),
		e && (b.removeEventListener('input', M), b.value = n, v.value = n, b.addEventListener('input', M))
	  }
	  h.set(n),
	  L(),
	  l.set(n),
	  e.isCurrentUiOp() && gui.opParams.show(e)
	}),
	g.appendChild(b);
	const E = document.createElement('div');
	E.classList.add('sidebar__slider-input-wrapper'),
	g.appendChild(E);
	const I = document.createElement('div');
	I.classList.add('sidebar__slider-input-active-track'),
	E.appendChild(I);
	const v = document.createElement('input');
	function M(t, n) {
	  let a = parseFloat(t.target.value);
	  isNaN(a) && (a = 0),
	  h.set(a),
	  L(),
	  l.set(a),
	  e.isCurrentUiOp() && gui.opParams.show(e)
	}
	function L(e) {
	  let t = parseFloat(v.value);
	  void 0 !== e && (t = e);
	  let n = v.offsetWidth;
	  0 === n && (n = 206);
	  const a = CABLES.map(t, parseFloat(v.min), parseFloat(v.max), 0, n - 16);
	  I.style.width = a + 'px'
	}
	function T() {
	  const e = a.get();
	  v.setAttribute('min', e),
	  L()
	}
	function S() {
	  const e = i.get();
	  v.setAttribute('max', e),
	  L()
	}
	v.classList.add('sidebar__slider-input'),
	v.setAttribute('min', a.get()),
	v.setAttribute('max', i.get()),
	v.setAttribute('type', 'range'),
	v.setAttribute('step', o.get()),
	v.setAttribute('value', u.get()),
	v.style.display = 'block',
	E.appendChild(v),
	L(),
	v.addEventListener('input', function (t) {
	  t.preventDefault(),
	  t.stopPropagation(),
	  b.value = t.target.value;
	  const n = parseFloat(t.target.value);
	  h.set(n),
	  l.set(n),
	  e.isCurrentUiOp() && gui.opParams.show(e);
	  return L(),
	  !1
	}),
	t.onChange = function () {
	  const e = t.get();
	  e && e.parentElement ? (e.parentElement.appendChild(g), f.set(null), f.set(e)) : g.parentElement && g.parentElement.removeChild(g)
	},
	n.onChange = function () {
	  const t = n.get();
	  p.textContent = t,
	  CABLES.UI && e.setTitle('Slider: ' + t)
	},
	l.onChange = function () {
	  let e = parseFloat(l.get());
	  const t = a.get(),
	  n = i.get();
	  b.value = e,
	  e > n ? e = n : e < t && (e = t);
	  v.value = e,
	  h.set(e),
	  L()
	},
	u.onChange = function () {
	  const e = u.get();
	  h.set(parseFloat(e)),
	  T(),
	  S(),
	  v.value = e,
	  b.value = e,
	  L(e)
	},
	c.onTriggered = function () {
	  let t = parseFloat(l.get());
	  const n = a.get(),
	  o = i.get();
	  t > o ? t = o : t < n && (t = n);
	  b.value = t,
	  v.value = t,
	  h.set(t),
	  u.set(t),
	  e.isCurrentUiOp() && gui.opParams.show(e);
	  L()
	},
	a.onChange = T,
	i.onChange = S,
	o.onChange = function () {
	  const e = o.get();
	  v.setAttribute('step', e),
	  L()
	},
	e.onDelete = function () {
	  !function (e) {
		e && e.parentNode && e.parentNode.removeChild && e.parentNode.removeChild(e)
	  }(g)
	},
	e.onLoaded = e.onInit = function () {
	  e.patch.config.sidebar ? (e.patch.config.sidebar[n.get()], h.set(e.patch.config.sidebar[n.get()])) : (h.set(parseFloat(u.get())), l.set(parseFloat(u.get())))
	},
	d.onTriggered = function () {
	  const e = parseFloat(u.get());
	  h.set(e),
	  b.value = e,
	  v.value = e,
	  l.set(e),
	  L()
	},
	r.onChange = function () {
	  m.style.display = r.get() ? 'block' : 'none'
	},
	s.onChange = function () {
	  g.style.display = s.get() ? 'block' : 'none'
	}
  },
  Ops.Sidebar.Slider_v2.prototype = new CABLES.Op,
  CABLES.OPS['2f3b9d8a-228b-4ff8-948a-13a7eb9d8241'] = {
	f: Ops.Sidebar.Slider_v2,
	objName: 'Ops.Sidebar.Slider_v2'
  },
  Ops.Array.ArrayMathExpression = function () {
	CABLES.Op.apply(this, arguments);
	const e = this,
	t = e.inArray('A'),
	n = e.inArray('B'),
	a = e.inArray('C'),
	i = e.inFloat('X', 1),
	o = e.inFloat('Y', 1),
	r = e.inFloat('Z', 1);
	e.setPortGroup('Parameters', [
	  t,
	  n,
	  a,
	  i,
	  o,
	  r
	]);
	const s = e.inString('Expression', 'a*(b+c+d)');
	e.setPortGroup('Expression', [
	  s
	]);
	const l = e.outArray('Result Array'),
	c = e.outNumber('Array Length'),
	d = e.outBool('Expression Valid');
	let u = s.get(),
	f = !1;
	const h = [
	];
	let g = !1;
	const p = () =>{
	  const s = [
		t.get(),
		n.get(),
		a.get()
	  ],
	  p = i.get(),
	  m = o.get(),
	  _ = r.get();
	  if (0 === s.filter(Boolean).length) return l.set(null),
	  c.set(0),
	  void l.set(null);
	  {
		const t = s.map(e=>e ? e.length : void 0),
		n = t.find(Boolean);
		let a = [
		];
		if (t.filter(Boolean).every(e=>e === n)) {
		  e.setUiError('notsamelength', null);
		  const t = s.find(Boolean);
		  if (a = s.map((e, t) =>(e || (e = s.find(Boolean).map(e=>0)), e)), h.length = t.length, f) {
			for (let e = 0; e < t.length; e += 1) h[e] = u(Math, a[0][e], a[1][e], a[2][e], p, m, _, e, h.length);
			l.set(null),
			l.set(h),
			c.set(h.length)
		  }
		} else l.set(null),
		c.set(0),
		e.setUiError('notsamelength', 'Arrays do not have the same length!', 2),
		g = !0
	  }
	  d.set(f)
	};
	t.onChange = n.onChange = a.onChange = i.onChange = o.onChange = r.onChange = p,
	s.onChange = (() =>{
	  try {
		u = new Function('m', 'a', 'b', 'c', 'x', 'y', 'z', 'i', 'len', `with(m) { return ${ s.get() } }`),
		f = !0,
		p(),
		d.set(f)
	  } catch (e) {
		if (f = !1, d.set(f), l.set(null), e instanceof ReferenceError || e instanceof SyntaxError) return
	  }
	})
  },
  Ops.Array.ArrayMathExpression.prototype = new CABLES.Op,
  CABLES.OPS['663e32a2-45a1-4141-a387-d8a44d4977d5'] = {
	f: Ops.Array.ArrayMathExpression,
	objName: 'Ops.Array.ArrayMathExpression'
  },
  window.addEventListener('load', function (e) {
	CABLES.jsLoaded = new Event('CABLES.jsLoaded'),
	document.dispatchEvent(CABLES.jsLoaded)
  }),
  this.CGL = this.CGL || {
  },
  this.CGL.COREMODULES = this.CGL.COREMODULES || {
  },
  this.CGL.COREMODULES.Shadermodifier = function (e) {
	var t = {
	};
	function n(a) {
	  if (t[a]) return t[a].exports;
	  var i = t[a] = {
		i: a,
		l: !1,
		exports: {
		}
	  };
	  return e[a].call(i.exports, i, i.exports, n),
	  i.l = !0,
	  i.exports
	}
	return n.m = e,
	n.c = t,
	n.d = function (e, t, a) {
	  n.o(e, t) || Object.defineProperty(e, t, {
		enumerable: !0,
		get: a
	  })
	},
	n.r = function (e) {
	  'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
		value: 'Module'
	  }),
	  Object.defineProperty(e, '__esModule', {
		value: !0
	  })
	},
	n.t = function (e, t) {
	  if (1 & t && (e = n(e)), 8 & t) return e;
	  if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
	  var a = Object.create(null);
	  if (n.r(a), Object.defineProperty(a, 'default', {
		enumerable: !0,
		value: e
	  }), 2 & t && 'string' != typeof e) for (var i in e) n.d(a, i, function (t) {
		return e[t]
	  }.bind(null, i));
	  return a
	},
	n.n = function (e) {
	  var t = e && e.__esModule ? function () {
		return e.default
	  }
	   : function () {
		return e
	  };
	  return n.d(t, 'a', t),
	  t
	},
	n.o = function (e, t) {
	  return Object.prototype.hasOwnProperty.call(e, t)
	},
	n.p = '',
	n(n.s = 0)
  }([function (e, t, n) {
	'use strict';
	n.r(t),
	CGL.ShaderModifier = class {
	  constructor(e, t, n) {
		this._cgl = e,
		this._name = t,
		this._origShaders = {
		},
		this._uniforms = [
		],
		this._structUniforms = [
		],
		this._definesToggled = {
		},
		this._defines = {
		},
		this._mods = [
		],
		this._textures = [
		],
		this._boundShader = null,
		this._changedDefines = !0,
		this._changedUniforms = !0,
		this._modulesChanged = !1,
		this.needsTexturePush = !1,
		this._lastShader = null,
		1 == this._cgl.glVersion && (this._cgl.gl.getExtension('OES_texture_float'), this._cgl.gl.getExtension('OES_texture_float_linear'), this._cgl.gl.getExtension('OES_texture_half_float'), this._cgl.gl.getExtension('OES_texture_half_float_linear'))
	  }
	  bind() {
		const e = this._cgl.getShader();
		if (!e) return;
		this._boundShader = this._origShaders[e.id];
		let t = !1;
		if (this._boundShader && this._lastShader != this._boundShader.shader && (this._boundShader.shader.hasModule(this._mods[0].id) || (t = !0)), (t || !this._boundShader || e.lastCompile != this._boundShader.lastCompile || this._modulesChanged || e._needsRecompile) && (this._boundShader && this._boundShader.shader.dispose(), e._needsRecompile && e.compile(), this._boundShader = this._origShaders[e.id] = {
		  lastCompile: e.lastCompile,
		  orig: e,
		  shader: e.copy()
		}, 1 == this._cgl.glVersion && (this._boundShader.shader.enableExtension('GL_OES_standard_derivatives'), this._boundShader.shader.enableExtension('GL_OES_texture_float'), this._boundShader.shader.enableExtension('GL_OES_texture_float_linear'), this._boundShader.shader.enableExtension('GL_OES_texture_half_float'), this._boundShader.shader.enableExtension('GL_OES_texture_half_float_linear')), this._addModulesToShader(this._boundShader.shader), this._updateDefinesShader(this._boundShader.shader), this._updateUniformsShader(this._boundShader.shader)), this._changedDefines && this._updateDefines(), this._changedUniforms && this._updateUniforms(), this._cgl.pushShader(this._boundShader.shader), this._boundShader.shader.copyUniformValues(this._boundShader.orig), this.needsTexturePush) {
		  for (let e = 0; e < this._textures.length; e += 1) {
			const t = this._textures[e][0],
			n = this._textures[e][1],
			a = this._textures[e][2];
			if (this._getUniform(t)) {
			  const e = this.getPrefixedName(t),
			  i = this._boundShader.shader.getUniform(e);
			  i && this._boundShader.shader.pushTexture(i, n, a)
			}
		  }
		  this.needsTexturePush = !1,
		  this._textures.length = 0
		}
		this._modulesChanged = !1
	  }
	  unbind() {
		this._boundShader && this._cgl.popShader(),
		this._boundShader = null
	  }
	  _addModulesToShader(e) {
		let t;
		this._mods.length > 1 && (t = this._mods[0]);
		for (let n = 0; n < this._mods.length; n++) e.addModule(this._mods[n], t)
	  }
	  _removeModulesFromShader(e) {
		for (const t in this._origShaders) this._origShaders[t].shader.removeModule(e)
	  }
	  addModule(e) {
		this._mods.push(e),
		this._modulesChanged = !0
	  }
	  removeModule(e) {
		const t = [
		];
		for (let n = 0; n < this._mods.length; n++) this._mods[n].title == e && (this._removeModulesFromShader(this._mods[n]), t.push(n));
		for (let e = t.length - 1; e >= 0; e -= 1) this._mods.splice(t[e], 1);
		this._modulesChanged = !0
	  }
	  _updateUniformsShader(e) {
		for (let t = 0; t < this._uniforms.length; t++) {
		  const n = this._uniforms[t],
		  a = this.getPrefixedName(n.name);
		  if (!e.hasUniform(a) && !n.structName) {
			let t = null;
			'both' === n.shaderType ? (t = e.addUniformBoth(n.type, a, n.v1, n.v2, n.v3, n.v4)).comment = 'mod: ' + this._name : 'frag' === n.shaderType ? (t = e.addUniformFrag(n.type, a, n.v1, n.v2, n.v3, n.v4)).comment = 'mod: ' + this._name : 'vert' === n.shaderType && ((t = e.addUniformVert(n.type, a, n.v1, n.v2, n.v3, n.v4)).comment = 'mod: ' + this._name)
		  }
		}
		for (let t = 0; t < this._structUniforms.length; t += 1) {
		  const n = this._structUniforms[t];
		  let a = n.uniformName,
		  i = n.structName;
		  const o = n.members;
		  n.propertyName,
		  a = this.getPrefixedName(n.uniformName),
		  i = this.getPrefixedName(n.structName),
		  'frag' === n.shaderType && e.addUniformStructFrag(i, a, o),
		  'vert' === n.shaderType && e.addUniformStructVert(i, a, o),
		  'both' === n.shaderType && e.addUniformStructBoth(i, a, o)
		}
	  }
	  _updateUniforms() {
		for (const e in this._origShaders) this._updateUniformsShader(this._origShaders[e].shader);
		this._changedUniforms = !1
	  }
	  _setUniformValue(e, t, n) {
		const a = e.getUniform(t);
		a && a.setValue(n)
	  }
	  setUniformValue(e, t) {
		if (!this._getUniform(e)) return;
		const n = this.getPrefixedName(e);
		for (const e in this._origShaders) this._setUniformValue(this._origShaders[e].shader, n, t)
	  }
	  hasUniform(e) {
		return this._getUniform(e)
	  }
	  _getUniform(e) {
		for (let t = 0; t < this._uniforms.length; t++) {
		  if (this._uniforms[t].name == e) return this._uniforms[t];
		  if (this._uniforms[t].structName && this._uniforms[t].propertyName == e) return this._uniforms[t]
		}
		return !1
	  }
	  _getStructUniform(e) {
		for (let t = 0; t < this._structUniforms.length; t += 1) if (this._structUniforms[t].uniformName === e) return this._structUniforms[t];
		return null
	  }
	  _isStructUniform(e) {
		for (let t = 0; t < this._uniforms.length; t++) {
		  if (this._uniforms[t].name == e) return !1;
		  if (this._uniforms[t].structName && this._uniforms[t].propertyName == e) return !0
		}
		return !1
	  }
	  addUniform(e, t, n, a, i, o, r, s, l, c) {
		if (!this._getUniform(t)) {
		  let d = 'both';
		  c && (d = c),
		  this._uniforms.push({
			type: e,
			name: t,
			v1: n,
			v2: a,
			v3: i,
			v4: o,
			structUniformName: r,
			structName: s,
			propertyName: l,
			shaderType: d
		  }),
		  this._changedUniforms = !0
		}
	  }
	  addUniformFrag(e, t, n, a, i, o) {
		this.addUniform(e, t, n, a, i, o, null, null, null, 'frag')
	  }
	  addUniformVert(e, t, n, a, i, o) {
		this.addUniform(e, t, n, a, i, o, null, null, null, 'vert')
	  }
	  addUniformBoth(e, t, n, a, i, o) {
		this.addUniform(e, t, n, a, i, o, null, null, null, 'both')
	  }
	  addUniformStruct(e, t, n, a) {
		for (let i = 0; i < n.length; i += 1) {
		  const o = n[i];
		  '2i' !== o.type && 'i' !== o.type && '3i' !== o.type || 'both' !== a || console.error('Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:', e, ' with member:', o.name, ' of type:', o.type, '.'),
		  this._getUniform(t + '.' + o.name) || this.addUniform(o.type, t + '.' + o.name, o.v1, o.v2, o.v3, o.v4, t, e, o.name, a)
		}
		this._getStructUniform(t) || this._structUniforms.push({
		  structName: e,
		  uniformName: t,
		  members: n,
		  shaderType: a
		})
	  }
	  addUniformStructVert(e, t, n) {
		this.addUniformStruct(e, t, n, 'vert')
	  }
	  addUniformStructFrag(e, t, n) {
		this.addUniformStruct(e, t, n, 'frag')
	  }
	  addUniformStructBoth(e, t, n) {
		this.addUniformStruct(e, t, n, 'both')
	  }
	  pushTexture(e, t, n) {
		if (!t) throw new Error('no texture given to texturestack');
		this._textures.push([e,
		t,
		n]),
		this.needsTexturePush = !0
	  }
	  _removeUniformFromShader(e, t) {
		t.hasUniform(e) && t.removeUniform(e)
	  }
	  removeUniform(e) {
		if (this._getUniform(e)) {
		  for (let t = this._uniforms.length - 1; t >= 0; t -= 1) {
			const n = e;
			if (this._uniforms[t].name == e && !this._uniforms[t].structName) {
			  for (const e in this._origShaders) this._removeUniformFromShader(this.getPrefixedName(n), this._origShaders[e].shader);
			  this._uniforms.splice(t, 1)
			}
		  }
		  this._changedUniforms = !0
		}
	  }
	  removeUniformStruct(e) {
		if (this._getStructUniform(e)) {
		  for (let t = this._structUniforms.length - 1; t >= 0; t -= 1) {
			const n = this._structUniforms[t];
			if (n.uniformName === e) {
			  for (const e in this._origShaders) for (let t = 0; t < n.members.length; t += 1) {
				const a = n.members[t];
				this._removeUniformFromShader(this.getPrefixedName(a.name), this._origShaders[e].shader)
			  }
			  this._structUniforms.splice(t, 1)
			}
		  }
		  this._changedUniforms = !0
		}
	  }
	  getPrefixedName(e) {
		const t = this._mods[0].group;
		if (void 0 !== t) return 0 == e.indexOf('MOD_') && (e = 'mod' + t + '_' + (e = e.substr('MOD_'.length))),
		e
	  }
	  _updateDefinesShader(e) {
		for (const t in this._defines) {
		  const n = this.getPrefixedName(t);
		  null !== this._defines[t] && void 0 !== this._defines[t] ? e.define(n, this._defines[t]) : e.removeDefine(n)
		}
		for (const t in this._definesToggled) {
		  const n = this.getPrefixedName(t);
		  e.toggleDefine(n, this._definesToggled[t])
		}
	  }
	  _updateDefines() {
		for (const e in this._origShaders) this._updateDefinesShader(this._origShaders[e].shader);
		this._changedDefines = !1
	  }
	  define(e, t) {
		this._defines[e] = t,
		this._changedDefines = !0
	  }
	  removeDefine(e) {
		this._defines[e] = null,
		this._changedDefines = !0
	  }
	  hasDefine(e) {
		return null !== this._defines[e] && void 0 !== this._defines[e]
	  }
	  toggleDefine(e, t) {
		this._changedDefines = !0,
		this._definesToggled[e] = t
	  }
	  currentShader() {
		return this._boundShader.shader
	  }
	  dispose() {
	  }
	}
  }
  ]).Shadermodifier,
  this.CGL = this.CGL || {
  },
  this.CGL.COREMODULES = this.CGL.COREMODULES || {
  },
  this.CGL.COREMODULES.Cubemap = function (e) {
	var t = {
	};
	function n(a) {
	  if (t[a]) return t[a].exports;
	  var i = t[a] = {
		i: a,
		l: !1,
		exports: {
		}
	  };
	  return e[a].call(i.exports, i, i.exports, n),
	  i.l = !0,
	  i.exports
	}
	return n.m = e,
	n.c = t,
	n.d = function (e, t, a) {
	  n.o(e, t) || Object.defineProperty(e, t, {
		enumerable: !0,
		get: a
	  })
	},
	n.r = function (e) {
	  'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
		value: 'Module'
	  }),
	  Object.defineProperty(e, '__esModule', {
		value: !0
	  })
	},
	n.t = function (e, t) {
	  if (1 & t && (e = n(e)), 8 & t) return e;
	  if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
	  var a = Object.create(null);
	  if (n.r(a), Object.defineProperty(a, 'default', {
		enumerable: !0,
		value: e
	  }), 2 & t && 'string' != typeof e) for (var i in e) n.d(a, i, function (t) {
		return e[t]
	  }.bind(null, i));
	  return a
	},
	n.n = function (e) {
	  var t = e && e.__esModule ? function () {
		return e.default
	  }
	   : function () {
		return e
	  };
	  return n.d(t, 'a', t),
	  t
	},
	n.o = function (e, t) {
	  return Object.prototype.hasOwnProperty.call(e, t)
	},
	n.p = '',
	n(n.s = 0)
  }([function (e, t, n) {
	'use strict';
	n.r(t);
	class a {
	  constructor(e, t) {
		t || (t = {
		  width: 8,
		  height: 8
		}),
		this._cgl = e,
		this._cubemapFaces = [
		  this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
		  this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
		  this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
		  this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
		  this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
		  this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
		],
		this.tex = this._cgl.gl.createTexture(),
		this.cubemap = this.tex,
		this.id = CABLES.uuid(),
		this.texTarget = this._cgl.gl.TEXTURE_CUBE_MAP,
		this.anisotropic = 0,
		this.filter = t.filter || CGL.Texture.FILTER_NEAREST,
		this.wrap = t.wrap || CGL.Texture.WRAP_CLAMP_TO_EDGE,
		this.unpackAlpha = t.unpackAlpha || !0,
		this.flip = t.flip || !0,
		this.flipped = !1,
		this._fromData = !0,
		this.name = 'cubemap unknown',
		CGL.profileData.profileTextureNew++,
		this.setSize(t.width, t.height)
	  }
	  setSize(e, t) {
		if ((e != e || e <= 0 || !e) && (e = 8), (t != t || t <= 0 || !t) && (t = 8), (e > this._cgl.maxTexSize || t > this._cgl.maxTexSize) && console.error('texture size too big! ' + e + 'x' + t + ' / max: ' + this._cgl.maxTexSize), e = Math.min(e, this._cgl.maxTexSize), t = Math.min(t, this._cgl.maxTexSize), e = Math.floor(e), t = Math.floor(t), this.width != e || this.height != t) {
		  this.width = e,
		  this.height = t,
		  this._cgl.gl.bindTexture(this.texTarget, this.tex),
		  CGL.profileData.profileTextureResize++,
		  this.textureType != CGL.Texture.TYPE_FLOAT || this.filter != CGL.Texture.FILTER_LINEAR || this._cgl.gl.getExtension('OES_texture_float_linear') || (console.warn('this graphics card does not support floating point texture linear interpolation! using NEAREST'), this.filter = CGL.Texture.FILTER_NEAREST),
		  this._setFilter();
		  for (let e = 0; e < 6; e++) if (1 == this._cgl.glVersion) if (this._cgl.glUseHalfFloatTex) {
			const t = this._cgl.gl.getExtension('OES_texture_half_float');
			if (1 == this._cgl.glVersion && !t) throw new Error('no half float texture extension');
			this._cgl.gl.texImage2D(this._cubemapFaces[e], 0, this._cgl.gl.RGBA, this.width, this.height, 0, this._cgl.gl.RGBA, t.HALF_FLOAT_OES, null)
		  } else this._cgl.gl.getExtension('OES_texture_float'),
		  this._cgl.gl.texImage2D(this._cubemapFaces[e], 0, this._cgl.gl.RGBA, this.width, this.height, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null);
		   else this._cgl.gl.texImage2D(this._cubemapFaces[e], 0, this._cgl.gl.RGBA, this.width, this.height, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, null);
		  this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_CUBE_MAP, null)
		}
	  }
	  _setFilter() {
		if (this._fromData || this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha), this.textureType == CGL.Texture.TYPE_FLOAT && this.filter == CGL.Texture.FILTER_MIPMAP && (console.log('texture: HDR and mipmap filtering at the same time is not possible'), this.filter = CGL.Texture.FILTER_LINEAR), 1 != this._cgl.glVersion || this.isPowerOfTwo()) if (this.wrap == CGL.Texture.WRAP_CLAMP_TO_EDGE ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE)) : this.wrap == CGL.Texture.WRAP_REPEAT ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT)) : this.wrap == CGL.Texture.WRAP_MIRRORED_REPEAT && (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT)), this.filter == CGL.Texture.FILTER_NEAREST) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST),
		this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);
		 else if (this.filter == CGL.Texture.FILTER_LINEAR) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR),
		this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
		 else {
		  if (this.filter != CGL.Texture.FILTER_MIPMAP) throw console.log('unknown texture filter!', this.filter),
		  new Error('unknown texture filter!' + this.filter);
		  this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR),
		  this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR)
		} else this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST),
		this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST),
		this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE),
		this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE),
		this.filter = CGL.Texture.FILTER_NEAREST,
		this.wrap = CGL.Texture.WRAP_CLAMP_TO_EDGE
	  }
	  isPowerOfTwo(e) {
		return 1 == e || 2 == e || 4 == e || 8 == e || 16 == e || 32 == e || 64 == e || 128 == e || 256 == e || 512 == e || 1024 == e || 2048 == e || 4096 == e || 8192 == e || 16384 == e
	  }
	}
	class i {
	  constructor(e, t, n, i) {
		this._cgl = e,
		this.width = t || 8,
		this.height = n || 8,
		this._cubemapProperties = [
		  {
			face: this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
			lookAt: vec3.fromValues(1, 0, 0),
			up: vec3.fromValues(0, - 1, 0)
		  },
		  {
			face: this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
			lookAt: vec3.fromValues( - 1, 0, 0),
			up: vec3.fromValues(0, - 1, 0)
		  },
		  {
			face: this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
			lookAt: vec3.fromValues(0, 1, 0),
			up: vec3.fromValues(0, 0, 1)
		  },
		  {
			face: this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
			lookAt: vec3.fromValues(0, - 1, 0),
			up: vec3.fromValues(0, 0, - 1)
		  },
		  {
			face: this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
			lookAt: vec3.fromValues(0, 0, 1),
			up: vec3.fromValues(0, - 1, 0)
		  },
		  {
			face: this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
			lookAt: vec3.fromValues(0, 0, - 1),
			up: vec3.fromValues(0, - 1, 0)
		  }
		],
		this._lookAtTemp = vec3.fromValues(0, 0, 0),
		this.camPos = vec3.fromValues(0, 0, 0),
		this._modelMatrix = mat4.create(),
		this._viewMatrix = mat4.create(),
		this._projectionMatrix = mat4.perspective(mat4.create(), 90 * CGL.DEG2RAD, 1, 0.1, 1000),
		this._depthRenderbuffer = null,
		this._framebuffer = null,
		this._depthbuffer = null,
		this._textureFrameBuffer = null,
		this._textureDepth = null,
		this._options = i || {
		  isFloatingPointTexture: !1
		},
		this._options.hasOwnProperty('numRenderBuffers') || (this._options.numRenderBuffers = 1),
		this._options.hasOwnProperty('depth') || (this._options.depth = !0),
		this._options.hasOwnProperty('clear') || (this._options.clear = !0),
		this._options.hasOwnProperty('multisampling') || (this._options.multisampling = !1, this._options.multisamplingSamples = 0),
		this._options.multisamplingSamples && (this._cgl.glSlowRenderer && (this._options.multisamplingSamples = 0), this._cgl.gl.MAX_SAMPLES ? this._options.multisamplingSamples = Math.min(this._cgl.gl.getParameter(this._cgl.gl.MAX_SAMPLES), this._options.multisamplingSamples) : this._options.multisamplingSamples = 0),
		this._options.hasOwnProperty('filter') || (this._options.filter = CGL.Texture.FILTER_LINEAR),
		this.texture = new a(this._cgl, {
		  width: this.width,
		  height: this.height,
		  isFloatingPointTexture: !0,
		  filter: CGL.Texture.FILTER_LINEAR,
		  wrap: CGL.Texture.WRAP_CLAMP_TO_EDGE
		}),
		this.initializeRenderbuffers(),
		this.setSize(this.width, this.height)
	  }
	  initializeRenderbuffers() {
		this._framebuffer = this._cgl.gl.createFramebuffer(),
		this._depthbuffer = this._cgl.gl.createRenderbuffer(),
		this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._framebuffer),
		this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthbuffer),
		this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this.width, this.height),
		this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthbuffer),
		this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null),
		this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null)
	  }
	  getWidth() {
		return this.width
	  }
	  getHeight() {
		return this.height
	  }
	  getGlFrameBuffer() {
		return this._framebuffer
	  }
	  getDepthRenderBuffer() {
		return this._depthRenderbuffer
	  }
	  getTextureColor() {
		return this.texture
	  }
	  getTextureDepth() {
		return this._textureDepth
	  }
	  dispose() {
		this.texture = null,
		this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),
		this._cgl.gl.deleteFramebuffer(this._framebuffer),
		this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
	  }
	  delete () {
		this.dispose()
	  }
	  setSize(e, t) {
		if (this.width = Math.floor(e), this.height = Math.floor(t), this.width = Math.min(this.width, this._cgl.maxTexSize), this.height = Math.min(this.height, this._cgl.maxTexSize), CGL.profileData.profileFrameBuffercreate++, this._framebuffer && (this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer), this._cgl.gl.deleteFramebuffer(this._framebuffer)), this._framebuffer = this._cgl.gl.createFramebuffer(), this._depthbuffer = this._cgl.gl.createRenderbuffer(), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._framebuffer), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthbuffer), this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this.width, this.height), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthbuffer), this.texture.setSize(this.width, this.height), !this._cgl.gl.isFramebuffer(this._framebuffer)) throw new Error('Invalid framebuffer');
		const n = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);
		this.checkErrorsByStatus(n),
		this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_CUBE_MAP, null),
		this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null),
		this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null)
	  }
	  checkErrorsByStatus(e) {
		switch (e) {
		  case this._cgl.gl.FRAMEBUFFER_COMPLETE:
			break;
		  case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
			throw console.error('FRAMEBUFFER_INCOMPLETE_ATTACHMENT...', this.width, this.height, this.texture.tex, this._depthBuffer),
			new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT');
		  case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
			throw console.error('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'),
			new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT');
		  case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
			throw console.error('FRAMEBUFFER_INCOMPLETE_DIMENSIONS'),
			new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS');
		  case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
			throw console.error('FRAMEBUFFER_UNSUPPORTED'),
			new Error('Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED');
		  case 36059:
			console.error('Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.');
			break;
		  default:
			throw console.error('incomplete framebuffer', e),
			new Error('Incomplete framebuffer: ' + e)
		}
	  }
	  setFilter(e) {
		this.texture.filter = e,
		this.texture.setSize(this.width, this.height)
	  }
	  setCamPos(e) {
		this.camPos = e || this.camPos
	  }
	  setMatrices(e, t, n) {
		this._modelMatrix = e || this._modelMatrix,
		this._viewMatrix = t || this._viewMatrix,
		this._projectionMatrix = n || this._projectionMatrix
	  }
	  renderStart() {
		this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_CUBE_MAP, this.texture.tex),
		this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._framebuffer),
		this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthbuffer),
		this._cgl.gl.viewport(0, 0, this.width, this.height),
		this._cgl.pushGlFrameBuffer(this._framebuffer),
		this._cgl.pushFrameBuffer(this)
	  }
	  renderStartCubemapFace(e) {
		this._cgl.pushModelMatrix(),
		this._cgl.pushViewMatrix(),
		this._cgl.pushPMatrix(),
		this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cubemapProperties[e].face, this.texture.tex, 0),
		this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthbuffer),
		this._options.clear && (this._cgl.gl.clearColor(1, 1, 1, 1), this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT)),
		this.setMatricesCubemapFace(e)
	  }
	  setMatricesCubemapFace(e) {
		mat4.copy(this._cgl.mMatrix, this._modelMatrix),
		vec3.add(this._lookAtTemp, this.camPos, this._cubemapProperties[e].lookAt),
		mat4.lookAt(this._cgl.vMatrix, this.camPos, this._lookAtTemp, this._cubemapProperties[e].up),
		mat4.copy(this._cgl.pMatrix, this._projectionMatrix)
	  }
	  renderEndCubemapFace() {
		this._cgl.popPMatrix(),
		this._cgl.popModelMatrix(),
		this._cgl.popViewMatrix()
	  }
	  renderEnd() {
		CGL.profileData.profileFramebuffer++,
		1 !== this._cgl.glVersion && (this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._framebuffer), this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer)),
		this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()),
		this._cgl.popFrameBuffer(),
		this._cgl.resetViewPort()
	  }
	}
	CGL.CubemapFramebuffer = i;
	const o = function (e, t) {
	  this._cgl = e,
	  this._modelMatrix = mat4.create(),
	  this._projectionMatrix = mat4.perspective(mat4.create(), 90 * CGL.DEG2RAD, 1, 0.1, 10),
	  this._viewMatrix = mat4.create(),
	  this._lookAtTemp = vec3.fromValues(0, 0, 0),
	  this.cubemap = null,
	  this.isInitialized = !1,
	  this.size = t.size || 512,
	  this.camPos = t.camPos || vec3.fromValues(0, 0, 0),
	  this._framebuffer = new i(this._cgl, this.size, this.size, {
	  }),
	  this._framebuffer.setMatrices(this._modelMatrix, null, this._projectionMatrix),
	  this._framebuffer.setCamPos(this.camPos),
	  this._depthbuffer = null,
	  this.depthAttachment = null,
	  this.colorAttachment = null,
	  this._cubemapProperties = [
		{
		  face: this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
		  lookAt: vec3.fromValues(1, 0, 0),
		  up: vec3.fromValues(0, - 1, 0)
		},
		{
		  face: this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
		  lookAt: vec3.fromValues( - 1, 0, 0),
		  up: vec3.fromValues(0, - 1, 0)
		},
		{
		  face: this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
		  lookAt: vec3.fromValues(0, 1, 0),
		  up: vec3.fromValues(0, 0, 1)
		},
		{
		  lookAt: vec3.fromValues(0, - 1, 0),
		  up: vec3.fromValues(0, 0, - 1),
		  face: this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y
		},
		{
		  face: this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
		  lookAt: vec3.fromValues(0, 0, 1),
		  up: vec3.fromValues(0, - 1, 0)
		},
		{
		  face: this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
		  lookAt: vec3.fromValues(0, 0, - 1),
		  up: vec3.fromValues(0, - 1, 0)
		}
	  ]
	};
	o.prototype.setMatrices = function (e, t, n) {
	  this._modelMatrix = e || this._modelMatrix,
	  this._viewMatrix = t || this._viewMatrix,
	  this._projectionMatrix = n || this._projectionMatrix,
	  this._framebuffer.setMatrices(e, t, n)
	},
	o.prototype.setCamPos = function (e) {
	  this.camPos = e || this.camPos,
	  this._framebuffer.setCamPos(this.camPos)
	},
	o.prototype.hasFramebuffer = function () {
	  return !!this._framebuffer
	},
	o.prototype.deleteFramebuffer = function () {
	  this._framebuffer && this._framebuffer.dispose()
	},
	o.prototype.setSize = function (e) {
	  this.size = e,
	  this.isInitialized = !1,
	  this.initializeCubemap()
	},
	o.prototype.checkError = function (e) {
	  const t = this._cgl.gl.getError();
	  t != this._cgl.gl.NO_ERROR && (console.log('error ' + e), console.log('error size', this.size), t == this._cgl.gl.NO_ERROR && console.error('NO_ERROR'), t == this._cgl.gl.OUT_OF_MEMORY && console.error('OUT_OF_MEMORY'), t == this._cgl.gl.INVALID_ENUM && console.error('INVALID_ENUM'), t == this._cgl.gl.INVALID_OPERATION && console.error('INVALID_OPERATION'), t == this._cgl.gl.INVALID_FRAMEBUFFER_OPERATION && console.error('INVALID_FRAMEBUFFER_OPERATION'), t == this._cgl.gl.INVALID_VALUE && console.error('INVALID_VALUE'), t == this._cgl.gl.CONTEXT_LOST_WEBGL && console.error('CONTEXT_LOST_WEBGL'))
	},
	o.prototype.initializeCubemap = function () {
	  this.checkError(221),
	  this.cubemap || (this.cubemap = new i(this._cgl, this.size, this.size, {
	  })),
	  this.isInitialized = !0
	},
	o.prototype.getCubemap = function () {
	  return this._framebuffer ? this._framebuffer.getTextureColor() : null
	},
	o.prototype.renderCubemap = function (e) {
	  this._framebuffer.renderStart();
	  for (let t = 0; t < 6; t += 1) this._framebuffer.renderStartCubemapFace(t),
	  e && e(),
	  this._framebuffer.renderEndCubemapFace();
	  this._framebuffer.renderEnd()
	},
	CGL.Cubemap = o
  }
  ]).Cubemap,
  this.CGL = this.CGL || {
  },
  this.CGL.COREMODULES = this.CGL.COREMODULES || {
  },
  this.CGL.COREMODULES.Light = function (e) {
	var t = {
	};
	function n(a) {
	  if (t[a]) return t[a].exports;
	  var i = t[a] = {
		i: a,
		l: !1,
		exports: {
		}
	  };
	  return e[a].call(i.exports, i, i.exports, n),
	  i.l = !0,
	  i.exports
	}
	return n.m = e,
	n.c = t,
	n.d = function (e, t, a) {
	  n.o(e, t) || Object.defineProperty(e, t, {
		enumerable: !0,
		get: a
	  })
	},
	n.r = function (e) {
	  'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
		value: 'Module'
	  }),
	  Object.defineProperty(e, '__esModule', {
		value: !0
	  })
	},
	n.t = function (e, t) {
	  if (1 & t && (e = n(e)), 8 & t) return e;
	  if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
	  var a = Object.create(null);
	  if (n.r(a), Object.defineProperty(a, 'default', {
		enumerable: !0,
		value: e
	  }), 2 & t && 'string' != typeof e) for (var i in e) n.d(a, i, function (t) {
		return e[t]
	  }.bind(null, i));
	  return a
	},
	n.n = function (e) {
	  var t = e && e.__esModule ? function () {
		return e.default
	  }
	   : function () {
		return e
	  };
	  return n.d(t, 'a', t),
	  t
	},
	n.o = function (e, t) {
	  return Object.prototype.hasOwnProperty.call(e, t)
	},
	n.p = '',
	n(n.s = 0)
  }([function (e, t, n) {
	'use strict';
	function a(e, t) {
	  return this.type = t.type || 'point',
	  this.color = t.color || [
		1,
		1,
		1
	  ],
	  this.specular = t.specular || [
		0,
		0,
		0
	  ],
	  this.position = t.position || null,
	  this.intensity = t.intensity || 1,
	  this.radius = t.radius || 1,
	  this.falloff = t.falloff || 1,
	  this.spotExponent = t.spotExponent || 1,
	  this.cosConeAngleInner = t.cosConeAngleInner || 0,
	  this.cosConeAngle = t.cosConeAngle || 0,
	  this.conePointAt = t.conePointAt || [
		0,
		0,
		0
	  ],
	  this.castShadow = t.castShadow || !1,
	  this.nearFar = t.nearFar || [
		0,
		0
	  ],
	  this.normalOffset = t.normalOffset || 0,
	  this.shadowBias = t.shadowBias || 0,
	  this.shadowStrength = t.shadowStrength || 0,
	  this.lightMatrix = null,
	  this.shadowMap = null,
	  this.shadowMapDepth = null,
	  this.shadowCubeMap = null,
	  this._cgl = e,
	  this.state = {
		isUpdating: !1
	  },
	  this._framebuffer = null,
	  this._shaderShadowMap = {
		shader: null,
		uniforms: {
		  lightPosition: null,
		  nearFar: null
		},
		matrices: {
		  modelMatrix: mat4.create(),
		  viewMatrix: mat4.create(),
		  projMatrix: mat4.create(),
		  biasMatrix: mat4.fromValues(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0.5, 0.5, 0.5, 1)
		},
		vectors: {
		  lookAt: vec3.create(),
		  camPos: vec3.create(),
		  up: vec3.fromValues(0, 1, 0)
		}
	  },
	  this._effectBlur = null,
	  this._shaderBlur = {
		shader: null,
		uniforms: {
		  XY: null
		}
	  },
	  this._cubemap = null,
	  this
	}
	n.r(t),
	a.prototype.getModifiableParameters = function () {
	  return ['color',
	  'specular',
	  'position',
	  'intensity',
	  'radius',
	  'falloff',
	  'spotExponent',
	  'cosConeAngleInner',
	  'cosConeAngle',
	  'conePointAt']
	},
	a.prototype.createProjectionMatrix = a.prototype.updateProjectionMatrix = function (e, t, n, a) {
	  'spot' === this.type ? mat4.perspective(this._shaderShadowMap.matrices.projMatrix, - 2 * CGL.DEG2RAD * a, 1, t, n) : 'directional' === this.type ? mat4.ortho(this._shaderShadowMap.matrices.projMatrix, - 1 * e, e, - 1 * e, e, t, n) : 'point' === this.type && (mat4.perspective(this._shaderShadowMap.matrices.projMatrix, 90 * CGL.DEG2RAD, 1, t, n), this.nearFar = [
		t,
		n
	  ])
	},
	a.prototype.hasFramebuffer = function () {
	  return !!this._framebuffer
	},
	a.prototype.hasShadowMapShader = function () {
	  return !!this._shaderShadowMap.shader
	},
	a.prototype.hasBlurShader = function () {
	  return !!this._shaderBlur.shader
	},
	a.prototype.hasBlurEffect = function () {
	  return !!this._effectBlur
	},
	a.prototype.getShadowMap = function () {
	  return 'point' === this.type ? null : this._framebuffer.getTextureColor()
	},
	a.prototype.getShadowMapDepth = function () {
	  return 'point' === this.type ? null : this._framebuffer.getTextureDepth()
	},
	a.prototype.createFramebuffer = function (e, t, n) {
	  this.state.isUpdating = !0;
	  const a = e || 512,
	  i = t || 512;
	  if ('point' === this.type) return this.hasCubemap() || (this._cubemap = new CGL.Cubemap(this._cgl, {
		camPos: this.position,
		cullFaces: !0,
		size: a,
		isShadowMap: !0
	  })),
	  this._cubemap.initializeCubemap(),
	  void (this.state.isUpdating = !1);
	  this.hasFramebuffer() && this._framebuffer.delete(),
	  n && n.filter && (n.isFloatingPointTexture = n.filter !== CGL.Texture.FILTER_MIPMAP),
	  1 == this._cgl.glVersion ? this._framebuffer = new CGL.Framebuffer(this._cgl, a, i, Object.assign({
		isFloatingPointTexture: !0,
		filter: CGL.Texture.FILTER_LINEAR,
		wrap: CGL.Texture.WRAP_CLAMP_TO_EDGE
	  }, n)) : this._framebuffer = new CGL.Framebuffer2(this._cgl, a, i, Object.assign({
		isFloatingPointTexture: !0,
		filter: CGL.Texture.FILTER_LINEAR,
		wrap: CGL.Texture.WRAP_CLAMP_TO_EDGE
	  }, n)),
	  this.state.isUpdating = !1
	},
	a.prototype.hasCubemap = function () {
	  return !!this._cubemap
	},
	a.prototype.setFramebufferSize = function (e) {
	  this.hasFramebuffer() && this._framebuffer.setSize(e, e)
	},
	a.prototype.createShadowMapShader = function (e, t) {
	  if (this.hasShadowMapShader()) return;
	  this.state.isUpdating = !0,
	  this._shaderShadowMap.shader = new CGL.Shader(this._cgl, 'shadowPass' + this.type.charAt(0).toUpperCase() + this.type.slice(1)),
	  this._shaderShadowMap.shader.setModules(['MODULE_VERTEX_POSITION',
	  'MODULE_COLOR',
	  'MODULE_BEGIN_FRAG']);
	  const n = e || this.getShadowPassVertexShader(),
	  a = t || this.getShadowPassFragmentShader();
	  this._shaderShadowMap.shader.setSource(n, a),
	  this._shaderShadowMap.shader.offScreenPass = !0,
	  'point' === this.type && (this._shaderShadowMap.uniforms.lightPosition = new CGL.Uniform(this._shaderShadowMap.shader, '3f', 'inLightPosition', vec3.create()), this._shaderShadowMap.uniforms.nearFar = new CGL.Uniform(this._shaderShadowMap.shader, '2f', 'inNearFar', vec2.create())),
	  1 == this._cgl.glVersion && (this._cgl.gl.getExtension('OES_texture_float'), this._cgl.gl.getExtension('OES_texture_float_linear'), this._cgl.gl.getExtension('OES_texture_half_float'), this._cgl.gl.getExtension('OES_texture_half_float_linear'), this._shaderShadowMap.shader.enableExtension('GL_OES_standard_derivatives'), this._shaderShadowMap.shader.enableExtension('GL_OES_texture_float'), this._shaderShadowMap.shader.enableExtension('GL_OES_texture_float_linear'), this._shaderShadowMap.shader.enableExtension('GL_OES_texture_half_float'), this._shaderShadowMap.shader.enableExtension('GL_OES_texture_half_float_linear')),
	  this.state.isUpdating = !1
	},
	a.prototype.createBlurEffect = function (e) {
	  'point' !== this.type && (this.state.isUpdating = !0, this.hasBlurEffect() && this._effectBlur.delete(), this._effectBlur = new CGL.TextureEffect(this._cgl, Object.assign({
		isFloatingPointTexture: !0,
		filter: CGL.Texture.FILTER_LINEAR,
		wrap: CGL.Texture.WRAP_CLAMP_TO_EDGE
	  }, e)), this.state.isUpdating = !1)
	},
	a.prototype.createBlurShader = function (e, t) {
	  if (this.hasBlurShader()) return;
	  if ('point' === this.type) return;
	  this.state.isUpdating = !0;
	  const n = e || this.getBlurPassVertexShader(),
	  a = t || this.getBlurPassFragmentShader();
	  this._shaderBlur.shader = new CGL.Shader(this._cgl, 'blurPass' + this.type.charAt(0).toUpperCase() + this.type.slice(1)),
	  this._shaderBlur.shader.setModules(['MODULE_VERTEX_POSITION',
	  'MODULE_COLOR',
	  'MODULE_BEGIN_FRAG']),
	  this._shaderBlur.shader.setSource(n, a),
	  this._shaderBlur.uniforms.XY = new CGL.Uniform(this._shaderBlur.shader, '2f', 'inXY', vec2.create()),
	  this._shaderBlur.shader.offScreenPass = !0,
	  this.state.isUpdating = !1
	},
	a.prototype.renderPasses = function (e, t, n) {
	  this.state.isUpdating || this._cgl.frameStore.shadowPass || (this._cgl.pushCullFace(!0), this._cgl.pushCullFaceFacing(this._cgl.gl.FRONT), this._cgl.gl.enable(this._cgl.gl.POLYGON_OFFSET_FILL), this._cgl.gl.polygonOffset(e, e), this._cgl.frameStore.renderOffscreen = !0, this._cgl.frameStore.shadowPass = !0, this._cgl.pushBlend(!1), this._cgl.gl.colorMask(!0, !0, 'point' === this.type, 'point' === this.type), this.renderShadowPass(n), this._cgl.gl.cullFace(this._cgl.gl.BACK), this._cgl.gl.disable(this._cgl.gl.CULL_FACE), this._cgl.gl.disable(this._cgl.gl.POLYGON_OFFSET_FILL), 'point' !== this.type && this.renderBlurPass(t), this._cgl.gl.colorMask(!0, !0, !0, !0), this._cgl.popBlend(), this._cgl.popCullFaceFacing(), this._cgl.popCullFace(), this._cgl.frameStore.shadowPass = !1, this._cgl.frameStore.renderOffscreen = !1, 'point' !== this.type ? (this.shadowMap = this._framebuffer.getTextureColor(), this.shadowMapDepth = this._framebuffer.getTextureDepth()) : (this.shadowMap = null, this.shadowMapDepth = null))
	},
	a.prototype.renderShadowPass = function (e) {
	  if (!this.state.isUpdating) {
		if ('point' === this.type) return this._shaderShadowMap.uniforms.nearFar.setValue(this.nearFar),
		this._shaderShadowMap.uniforms.lightPosition.setValue(this.position),
		this._cubemap.setCamPos(this.position),
		this._cubemap.setMatrices(this._shaderShadowMap.matrices.modelMatrix, this._shaderShadowMap.matrices.viewMatrix, this._shaderShadowMap.matrices.projMatrix),
		this._cgl.pushShader(this._shaderShadowMap.shader),
		this._cubemap.renderCubemap(e),
		this._cgl.popShader(),
		void (this.shadowCubeMap = this._cubemap._framebuffer.getTextureColor());
		this._cgl.pushShader(this._shaderShadowMap.shader),
		this._cgl.pushModelMatrix(),
		this._cgl.pushViewMatrix(),
		this._cgl.pushPMatrix(),
		this._framebuffer.renderStart(this._cgl),
		mat4.copy(this._cgl.mMatrix, this._shaderShadowMap.matrices.modelMatrix),
		vec3.set(this._shaderShadowMap.vectors.camPos, this.position[0], this.position[1], this.position[2]),
		'spot' === this.type && vec3.set(this._shaderShadowMap.vectors.lookAt, this.conePointAt[0], this.conePointAt[1], this.conePointAt[2]),
		mat4.lookAt(this._cgl.vMatrix, this._shaderShadowMap.vectors.camPos, this._shaderShadowMap.vectors.lookAt, this._shaderShadowMap.vectors.up),
		mat4.copy(this._cgl.pMatrix, this._shaderShadowMap.matrices.projMatrix),
		this.lightMatrix || (this.lightMatrix = mat4.create()),
		mat4.mul(this.lightMatrix, this._cgl.pMatrix, this._cgl.vMatrix),
		mat4.mul(this.lightMatrix, this._cgl.mMatrix, this.lightMatrix),
		mat4.mul(this.lightMatrix, this._shaderShadowMap.matrices.biasMatrix, this.lightMatrix),
		this._cgl.gl.clearColor(1, 1, 1, 1),
		this._cgl.gl.clear(this._cgl.gl.DEPTH_BUFFER_BIT | this._cgl.gl.COLOR_BUFFER_BIT),
		e && e(),
		this._framebuffer.renderEnd(this._cgl),
		this._cgl.popPMatrix(),
		this._cgl.popModelMatrix(),
		this._cgl.popViewMatrix(),
		this._cgl.popShader()
	  }
	},
	a.prototype.renderBlurPass = function (e) {
	  this.state.isUpdating || (this._cgl.pushShader(this._shaderBlur.shader), this._effectBlur.setSourceTexture(this._framebuffer.getTextureColor()), this._effectBlur.startEffect(), this._effectBlur.bind(), this._cgl.setTexture(0, this._effectBlur.getCurrentSourceTexture().tex), this._shaderBlur.uniforms.XY.setValue([e,
	  0]), this._effectBlur.finish(), this._effectBlur.bind(), this._cgl.setTexture(0, this._effectBlur.getCurrentSourceTexture().tex), this._shaderBlur.uniforms.XY.setValue([0,
	  e]), this._effectBlur.finish(), this._effectBlur.endEffect(), this._cgl.popShader())
	},
	a.prototype.getShadowPassVertexShader = function () {
	  return `
  {{MODULES_HEAD}}
  IN vec3 vPosition;
  IN vec2 attrTexCoord;
  IN vec3 attrVertNormal;
  IN float attrVertIndex;
  
  UNI mat4 projMatrix;
  UNI mat4 modelMatrix;
  UNI mat4 viewMatrix;
  
  
  OUT vec2 texCoord;
  OUT vec3 norm;
  
  ${ 'point' === this.type ? 'OUT vec3 modelPos;' : '' }
  void main() {
	  texCoord=attrTexCoord;
	  texCoord.y = 1. - texCoord.y;
	  norm=attrVertNormal;
	  vec4 pos = vec4(vPosition, 1.0);
	  mat4 mMatrix=modelMatrix;
  
  
	  {{MODULE_VERTEX_POSITION}}
  
	  mat4 mvMatrix=viewMatrix * mMatrix;
	  vec4 vPos = projMatrix * mvMatrix * vec4(vPosition, 1.);
	  ${ 'point' === this.type ? 'modelPos = (mMatrix * pos).xyz;' : '' }
	  gl_Position = vPos;
  }
  `
	},
	a.prototype.getShadowPassFragmentShader = function () {
	  return `
	 {{MODULES_HEAD}}
	 ${ 'point' === this.type ? 'IN vec3 modelPos;' : '' }
	 ${ 'point' === this.type ? 'UNI vec3 inLightPosition;' : '' }
	 ${ 'point' === this.type ? 'UNI vec2 inNearFar;' : '' }
  
	  IN vec2 texCoord;
  
	  void main() {
		  {{MODULE_BEGIN_FRAG}}
		  vec4 col = vec4(1.);
  
  
		  outColor = vec4(1.);
  
		  {{MODULE_COLOR}}
  
		  ${ 'point' === this.type ? 'vec3 fromLightToFrag = (modelPos - inLightPosition);' : '' }
  
  
		  ${ 'point' === this.type ? 'float depth = (length(fromLightToFrag) - inNearFar.x) / (inNearFar.y - inNearFar.x);' : 'float depth = gl_FragCoord.z;' }
  
		  float dx = dFdx(depth); // for biasing depth-per-pixel
		  float dy = dFdy(depth); // for biasing depth-per-pixel
  
		  float clampedDerivative = clamp(dot(dx, dx) + dot(dy, dy), 0., 1.);
		  float moment2 = dot(depth, depth) + 0.25 * clampedDerivative;
  
		  outColor.x = depth;
		  outColor.y = moment2;
		  outColor.z = depth;
	  }
  `
	},
	a.prototype.getBlurPassVertexShader = function () {
	  return 'point' === this.type ? '' : '\n\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\n\nOUT vec2 texCoord;\nOUT vec2 coord0;\nOUT vec2 coord1;\nOUT vec2 coord2;\nOUT vec2 coord3;\nOUT vec2 coord4;\nOUT vec2 coord5;\nOUT vec2 coord6;\n\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\nUNI mat4 modelMatrix;\n\nUNI vec2 inXY;\n\nvoid main() {\n    texCoord=attrTexCoord;\n\n    vec4 pos = vec4(vPosition,  1.0);\n\n    {{MODULE_VERTEX_POSITION}}\n\n    coord3 = attrTexCoord;\n\n\n    coord0 = attrTexCoord + (-3.0368997744118595 * inXY);\n    coord0 = clamp(coord0, 0., 1.);\n    coord1 = attrTexCoord + (-2.089778445362373 * inXY);\n    coord1 = clamp(coord1, 0., 1.);\n    coord2 = attrTexCoord + (-1.2004366090034069 * inXY);\n    coord2 = clamp(coord2, 0., 1.);\n    coord4 = attrTexCoord + (1.2004366090034069 * inXY);\n    coord4 = clamp(coord4, 0., 1.);\n    coord5 = attrTexCoord + (2.089778445362373* inXY);\n    coord5 = clamp(coord5, 0., 1.);\n    coord6 = attrTexCoord + (3.0368997744118595 * inXY);\n    coord6 = clamp(coord6, 0., 1.);\n\n    gl_Position = projMatrix * mvMatrix * pos;\n}\n    '
	},
	a.prototype.getBlurPassFragmentShader = function () {
	  return 'point' === this.type ? '' : '\nUNI sampler2D tex;\n\nIN vec2 coord0;\nIN vec2 coord1;\nIN vec2 coord2;\nIN vec2 coord3;\nIN vec2 coord4;\nIN vec2 coord5;\nIN vec2 coord6;\n\nvoid main() {\n\n    vec4 color = vec4(0.0);\n\n\n    color.xyz += texture(tex, coord0).xyz * 0.06927096443792478;  // 1/64\n    color.xyz += texture(tex, coord1).xyz * 0.1383328848652136;   // 6/64\n    color.xyz += texture(tex, coord2).xyz * 0.21920904690397863;  // 15/64\n    color.xyz += texture(tex, coord3).xyz * 0.14637421;           // 20/64\n    color.xyz += texture(tex, coord4).xyz * 0.21920904690397863;  // 15/64\n    color.xyz += texture(tex, coord5).xyz * 0.1383328848652136;   // 6/64\n    color.xyz += texture(tex, coord6).xyz * 0.06927096443795711;  // 1/64\n\n    color.a = 1.;\n\n    outColor = color;\n}\n    '
	},
	CGL.Light = a
  }
  ]).Light;