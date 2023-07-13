(function () {
	const w1 = window;
	const w2 = w1.open();
	const a = [];
	a.kind = 'native';
	const b = [];
	b.kind = 'added';
	b.open = true;
	const o = {};
	for (const key of Object.keys(w1)) {
		(w2.hasOwnProperty(key) ? a : ((o[key] = w1[key]), b)).push(key);
	}
	const d = w2.document;
	d.open();
	d.write(`Properties:\n<pre>${[b, a].map(m => `<details open="${m.open}"><summary>${m.kind}</summary><blockquote>${m.join(',\n')}</blockquote></details>`)}</pre>`);
	const safeStringify = obj => {
		const visited = new Set();
		const {
			Array: { isArray },
			Object: { hasOwn }
		} = globalThis;
		const serialize = e => {
			if (visited.has(e)) {
				return '[Circular]';
			}
			visited.add(e);
			if ('object' === typeof e) {
				const o = isArray(e) ? [] : {};
				for (const key in e) {
					if (hasOwn(e, key)) {
						o[key] = serialize(e[key]);
					}
				}
				return o;
			}
			return e;
		};
		return JSON.stringify(serialize(obj), null, 2);
	};
	d.write(`<p>Dump:\n<pre>${safeStringify(o)}</pre></p>`);
	d.close();
})();
