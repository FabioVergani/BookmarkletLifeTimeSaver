(w=>{
	const onceAt=(e,s,f)=>{
		let x=o=>{
			e.removeEventListener(s,x);
			x=null;
			f(o)
		};
		e.addEventListener(s,x)
	},
	onceReady=(w,f)=>{
		if('complete'!==w.document.readyState){
			onceAt(w,'load',f)
		}else{
			f(w)
		}
	};
	onceReady(w,w=>{
		const d=w.document,
		frag=d.createDocumentFragment();
		frag.appendChild(d.createElement('pre')).textContent=d.documentElement.innerHTML;
		onceReady(w.open('about:blank'),w2=>{
			w2.document.body.appendChild(frag);
		})
	})
})(window);
