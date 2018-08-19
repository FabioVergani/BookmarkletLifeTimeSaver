javascript:(w=>{
	const d=w.document,v=[],m=[...d.images],f=d.createDocumentFragment().appendChild(d.createElement('p')),g=x=>f.appendChild(d.createElement(x));
	f.style='display:inline-block;text-align:center';
	g('style').innerHTML='img{vertical-align:top;margin:8px;border:8px solid #fff;box-shadow:1px 1px 1px #d6d6d6,1px 1px 4px #d4d4d4}';
	for(const e of m){
		const s=e.src,t=v;
		if(t.indexOf(s)<0){
			t[t.length]=g('img').src=e.src
		}
	};
	const b=w.open().document.body;
	b.style='background:#eee';
	b.appendChild(f)
})(window);
