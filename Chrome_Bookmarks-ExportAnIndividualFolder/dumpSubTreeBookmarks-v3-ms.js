console.clear();
(w=>{
	(
		w.dumpBookmarksFolder||(
			w.dumpBookmarksFolder='bookmarks'!==w.document.domain?w.alert:(
				w=>{
					const JsOrDataProtocolPattern=/(?:^\s*(?:javascript|data):)/i,
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
								w.chrome.bookmarks.getSubTree((w=>{
									let x=w.location.search;
									if('undefined'===x||0===x.length||null===(x=new w.URLSearchParams(x).get('id'))){
										x='1'
									};
									return x
								})(w),treeNodes=>{
									if(0!==treeNodes.length){
										const d=w.document,
										frag=d.createDocumentFragment(),
										nest=(a,b)=>a.appendChild(d.createElement(b)),
										dumpTree=(nodes,ul)=>{
											if(0!==nodes.length){
												const f=nest,li=f(ul,'li'),re=JsOrDataProtocolPattern;
												while(0!==nodes.length){
													const div=f(li,'div'),node=nodes.shift();
													let x=node.title;
													if(x && 0!==(x=x.trim()).length){
														f(div,'b').textContent=x;
														f(div,'br')
													};
													if((x=node.children) && 0!==x.length){
														dumpTree(x,f(div,'ul'))
													}else if(x=node.url){
														const a=f(div,'a');
														a.textContent=re.test(a.href=x)?x.substring(0,36)+'\u2026':x;
													}
												}
											}
										};
										//
										dumpTree(treeNodes,nest(frag,'ul'));
										//
										onceReady(w.open('about:blank'),w2=>{
											const d2=w2.document;
											//d2.title='Bookmarks\xa0#'+foldID;
											d2.body.appendChild(frag);
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
