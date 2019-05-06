(w=>{
	(
		w.dumpBookmarksFolder||(
			w.dumpBookmarksFolder=(
				w=>{
					const markletOrDataUriPattern=/^(?:\s|%20)*((?:javascript|data):)(.{1,36})/i,
					onceAt=(e,s,f)=>{
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
					let canDump=true;
					return w=>{
						if(canDump){
							canDump=false;
							onceReady(w,w=>{
								let foldID=w.location.search;
								if('undefined'===foldID||0===foldID.length||null===(foldID=new w.URLSearchParams(foldID).get('id'))){
									foldID='1'
								};
								w.chrome.bookmarks.getSubTree(foldID,treeNodes=>{
									if(0!==treeNodes.length){
										const d=w.document,
										frag=d.createDocumentFragment(),
										nest=(a,b)=>a.appendChild(d.createElement(b)),
										dumpTree=(m,ul)=>{
											const f=nest;
											while(0!==m.length){
												const p=f(li,'p'),node=m.shift();
												let x=node.title;
												if(x && 0!==(x=x.trim()).length){
													f(p,'b').textContent=x
												};
												x=node.children;
												if(0!==x.length){
													dumpTree(x,f(p,'ul'))
												}else{
													x=node.url;
													if(x && 0!==(x=x.trim()).length){
														const a=f(p,'a'),m=(a.href=x).match(markletOrDataUriPattern);
														a.textContent=null!==m?m.join()+'...':x
													}
												}
											}
										};
										nest(frag,'style').textContent='.tree{font:12px/normal sans-serif}';

										dumpTree(treeNodes,nest(frag,'ul'));

										onceReady(w.open('about:blank'),w2=>{
											w2.title=foldID;
											w2.document.body.appendChild(frag);
											canDump=true
										})
									}else{
										canDump=true
									}
								})
							})
						}
					}
				}
			)(w)
		)
	)(w)
})(window);

