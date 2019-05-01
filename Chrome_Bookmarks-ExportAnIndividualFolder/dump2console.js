(w=>{
	console.clear();

	const dump=m=>{
		if(0!==m.length){
			while(0!==m.length){//dumpNode!
				const n=m.shift(),t=n.title||n.id,c=n.children;
				if(c){
					if(0!==c.length){
						//console.info('%o',n);
						console.groupCollapsed(t);
						dump(c);
						console.groupEnd()
					}
				}else{
					console.dir(n);
				}
			}
		}
	};

	w.chrome.bookmarks.getTree(dump);
})(window);
