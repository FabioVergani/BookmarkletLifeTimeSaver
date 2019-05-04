console.clear();
(d=>{
	if('bookmarks'===d.domain){
		const onceAt=(e,s,ƒ)=>{
			let g=o=>{
				e.removeEventListener(s,g);
				g=null;
				ƒ(o)
			};
			e.addEventListener(s,g)
		},
		onceReady=(w,ƒ)=>{
			const d=w.document;
			if('complete'!==d.readyState){
				onceAt(w,'load',ƒ)
			}else{
				ƒ({target:d})
			}
		};
		onceReady(d.defaultView,loadEvent=>{
			const d=loadEvent.target, w=d.defaultView, chrome=w.chrome;
			if(chrome){
				let n=w.location.search;
				if('undefined'!==n && 0!==n.length && (n=new w.URLSearchParams(n).get('id'))){
					if('2'!==n){
						//subfolder
					}else{
						//Altri-Preferiti
					}
				}else{
					//Barra-dei-Preferiti
				}
			}
		})
	}
})(document);
