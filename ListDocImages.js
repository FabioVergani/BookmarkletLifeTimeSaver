((o,p)=>{
	(o[p]||(o[p]=((w)=>{
		const at=(e,s,x)=>{const f=e.removeEventListener;f(s,x);e.addEventListener(s,x);return f},once=(e,s,x)=>{const f=o=>{g(s,x);x(o)},g=at(e,s,f)};
		let k;
		return w=>{
			if(k!==1){
				k=1;
				const d=w.document,f=loaded=>{
					const d=loaded.target,m=[...d.images];
					if(m.length){
						let e=x=>g.appendChild(d.createElement(x));
						const g=d.createDocumentFragment().appendChild(d.createElement('span')),
						A=(
							e('style').innerHTML='img{vertical-align:top;margin:8px;border:8px solid #fff;box-shadow:1px 1px 1px #d6d6d6,1px 1px 4px #d4d4d4}',
							e('p')
						),
						B=e('p'),
						v=[];
						g.style='display:inline-block;text-align:center';
						while(e=m.shift()){
							const s=e.src,t=v;
							if(t.indexOf(s)<0){
								t[t.length]=((e.naturalWidth<128||e.naturalHeight<240)?B:A).appendChild(d.createElement('img')).src=e.src
							};
						};
						v.length=0;
						e=x=>{if(x.children.length===0){x.remove()}};
						e(A);
						e(B);
						const b=w.open().document.body;
						b.style='background:#eee';
						b.appendChild(g);
					};
					k=0;
				};
				d.readyState!=='complete'?once(w,'load',f):f({target:d})
			}
		}
	})(o)))(o)
})(window,'BmListImages');
