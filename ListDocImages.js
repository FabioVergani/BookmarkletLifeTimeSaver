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
						A=(e('style').innerHTML='img{box-sizing:border-box;max-width:calc(100% - 16px);vertical-align:top;margin:8px;border:8px solid #fff;box-shadow:1px 1px 1px #d6d6d6,1px 1px 4px #d4d4d4;outline: 2px solid transparent;transition:outline-color .2s ease-out}img:hover{transition-timing-function:linear;transition-duration:.1s;outline-color:red}',e('div')),
						B=e('div'),
						v=[];
						while(e=m.shift()){
							const s=e.src,t=v;
							if(t.indexOf(s)<0){t[t.length]=((e.naturalWidth<128||e.naturalHeight<240)?B:A).appendChild(d.createElement('img')).src=e.src}
						};
						v.length=0;
						v[0]=o=>{
							const e=o.target;
							//e.labelNum.innerHTML=e.children.length-1
						};
						e=x=>{
							const m=x.children,l=m.length;
							if(l!==0){
								const e=x.insertBefore(d.createElement('p'),m[0]);
								e.innerHTML='tot:\u2009';
								e.appendChild(x.labelNum=d.createElement('b')).innerHTML=l;
								e.style='text-align:right;color:#a7a7a7';
								at(e,'click',v[0]);
								return true
							}else{
								x.remove()
							}
						};
						if(e(A)===(e=e(B))&&e){
							B.style='margin-top:22px;border-top:2px dashed #e8e5e5'
						};
						e=w.open().document.body;
						e.style='font:11px/normal sans-serif;text-align:center;background:#eee';
						at(g,'click',o=>{
							if(o.ctrlKey){
								const e=o.target;
								if(e.tagName==='IMG'){
									const x=e.parentElement,l=x.children.length-1;
									e.remove();
									if(l<2){
										x.remove()
									}else{
										x.labelNum.innerHTML=l-1
									}
								}
							}
						});
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
