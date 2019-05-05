(w=>{
	(
		w.dumpSubTreeBookmarks||(
			w.dumpSubTreeBookmarks=(w=>{
				const Bookmarks=w.chrome.bookmarks,
				d=w.document,
				nest=(a,b)=>a.appendChild(d.createElement(b)),
				dumpTree=(m,ul)=>{
					const g=dumpTree,f=nest,li=f(ul,'li');
					while(0!==m.length){
						const n=m.shift(),t=n.title;
						let x=n.children;
						if(x){
							if(0!==x.length){
								const p=f(li,'p');
								f(p,'b').appendChild(d.createTextNode(t));
								g(x,f(p,'ul'))
							}
						}else{
							x=n.url;
							if(x && 0!==x.length){
								const a=f(li,'a');
								a.textContent=t||x;
								a.href=x;
								a.after(d.createTextNode('\r\n'))
							}
						}
					}
				},
				useTree=m=>{
					if(0!==m.length){
						const g=d.createDocumentFragment();
						let e=nest;
						e(g,'style').textContent='.tree{font:12px/normal sans-serif;white-space:pre}';
						e=e(g,'ul');
						e.className='tree';
						dumpTree(m,e);
						onceReady(w.open('about:blank'),w=>{
							w.document.body.appendChild(g);
							canDump=true
						})
					}else{
						canDump=true
					}
				},
				startDump=w=>{
					let x=w.location.search;
					if(('undefined'===x)||(0===x.length)||(x=new w.URLSearchParams(x).get('id'),null===x)){x='1'};
					Bookmarks.getSubTree(x,useTree)
				},
				onceReady=(w,ƒ)=>{
					if('complete'!==w.document.readyState){
						let x=o=>{
							w.removeEventListener('load',x);
							x=null;
							ƒ(w)
						};
						w.addEventListener('load',x)
					}else{
						ƒ(w)
					}
				};
				let canDump=true;
				return w=>{
					if(canDump){
						canDump=false;
						onceReady(w,startDump)
					}
				}
			})(w)
		)
	)(w)
})(window);
