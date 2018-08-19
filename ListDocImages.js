((o,p)=>{
	(o[p]||(o[p]=((w)=>{
		const at=(e,s,x)=>{const f=e.removeEventListener;f(s,x);e.addEventListener(s,x);return f},once=(e,s,x)=>{const f=o=>{g(s,x);x(o)},g=at(e,s,f)};
		let k;
		return w=>{
			if(k!==1){
				k=1;
				const d=w.document,f=loads=>{
					const d=loads.target;
					if(d.images.length){
						let e=x=>g.appendChild(d.createElement(x));
						const m=[...d.images],g=d.createDocumentFragment().appendChild(d.createElement('span')),
						A=(e('style').innerHTML='img{box-sizing:border-box;max-width:100%;vertical-align:top;margin:8px;border:8px solid #fff;box-shadow:1px 1px 1px #d6d6d6,1px 1px 4px #d4d4d4;outline: 2px solid transparent;transition:outline-color .2s ease-out}img:hover{transition-timing-function:linear;transition-duration:.1s;outline-color:red}',e('p')),
						B=e('p'),
						v=[];
						g.style='display:inline-block;text-align:center;max-width:100%';
						while(e=m.shift()){
							const s=e.src,t=v;
							if(t.indexOf(s)<0){t[t.length]=((e.naturalWidth<128||e.naturalHeight<240)?B:A).appendChild(d.createElement('img')).src=e.src}
						};
						v.length=0;
						e=x=>{if(x.children.length===0){x.remove()}};
						e(A);
						e(B);
						at(g,'click',o=>{
							if(o.ctrlKey){
								const e=o.target;
								if(e.tagName==='IMG'){e.remove()}
							}
						});
						e=w.open().document.body;
						e.style='background:#eee';
						e.appendChild(g);
						e=null
					};
					k=0
				};
				d.readyState!=='complete'?once(w,'load',f):f({target:d})
			}
		}
	})(o)))(o)
})(window,'BmListImages');
