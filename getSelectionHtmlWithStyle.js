(w=>{
	const onceWhen=(e,s,c)=>{const f=()=>{e.removeEventListener(s,g)},g=o=>{f();c(o)};e.addEventListener(s,g);return f},onceReady=(x,f)=>{if('complete'!==x.document.readyState){onceWhen(x,'load',f)}else{f({currentTarget:x})}};
	if(!w.runningBookmarklet_getSelectionHtmlWithStyle){
		w.runningBookmarklet_getSelectionHtmlWithStyle=true;
		onceReady(w,readyEvent1=>{
			const w1=readyEvent1.currentTarget,sel=w1.getSelection();
			if(''!==sel.toString()){
				let len=sel.rangeCount;
				if(0!==len){
					const d=w1.document,frag=d.createDocumentFragment();
					let i=0;
					while(i<len){
						frag.appendChild(sel.getRangeAt(i).cloneContents());
						++i
					};
					onceReady(w1.open('about:blank'),readyEvent2=>{
						const w2=readyEvent2.currentTarget;
						w2.stop();
						w2.document.body.appendChild(frag);
						runningBookmarklet_getSelectionHtmlWithStyle=false;
					})
				}else{
					runningBookmarklet_getSelectionHtmlWithStyle=false;
				}
			}
		})
	}
})(window);
