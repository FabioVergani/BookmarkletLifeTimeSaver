/*
Use the snippets panel to run longer chunks of Javascript code.
To run a snippet, type in "!YourSnippetName" into the Command Menu.
You can open up the Command Menu with the shortcut "Cmd + Shift + P".
( https://developers.google.com/web/tools/chrome-devtools/shortcuts )
If you type ? into the Command Menu,you see other options.
*/

void(
	(w=>{
		(
			w.dumpSubTreeBookmarks||(
				w.dumpSubTreeBookmarks=(w=>{
					const Bookmarks=w.chrome.bookmarks,
					d=w.document,
					nest=(a,b)=>a.appendChild(d.createElement(b)),
					markletPattern=/^(?:\s|%20)*javascript:/i,
					datauriPattern=/^(?:\s|%20)*data:/i,
					dumpTree=(m,ul)=>{
						const g=dumpTree,f=nest,re1=markletPattern,re2=datauriPattern,li=f(ul,'li');
						while(0!==m.length){
							let x=m.children;
							const n=m.shift(),p=f(li,'p'),t=(x=n.title,0!==x.length && 0!==(x=x.trim()).length)?x:null;
							if(x=n.children){
								if(0!==x.length){
									if(null!==t){
										f(p,'strong').textContent=t
									};
									g(x,f(p,'ul'))
								}
							}else{
								x=n.url;
								if(x && 0!==x.length){
									let e=null,a=e!==t,b='javascript:'===x.substring(0,11)||re1.test(x)||re2.test(x);
									if(a||b){
										e=f(p,'b');
										const s='	📜';
										e.textContent=b?a?s+'\u00A0'+t:s:t;
									};
									a=f(p,'a');
									if(null!==e){
										a.appendChild(e)
									}else{
										a.textContent=X
									};
									a.href=x;
								}
							}
						}
					},
					useTree=m=>{
						if(0!==m.length){
							const g=d.createDocumentFragment();
							let e=nest;
							e(g,'style').textContent='.tree{font:12px/normal sans-serif}';
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
						if('undefined'===x||0===x.length||(x=new w.URLSearchParams(x).get('id'),null===x)){x='1'};
						Bookmarks.getSubTree(x,useTree)
					},
					onceReady=(w,f)=>{
						if('complete'!==w.document.readyState){
							let x=o=>{
								w.removeEventListener('load',x);
								x=null;
								f(w)
							};
							w.addEventListener('load',x)
						}else{
							f(w)
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
	})(window)
);
