(w=>{
	let e=w.observer;
	if(e){
		console.log('records taken:%O',e.takeRecords());
		e.disconnect()
	}else{
		e=new w.MutationObserver(m=>{m.forEach((v,i)=>{console.log('mutation:%d%O',i,v)})});
		e.b=w.document.body;
		e.c={
			attributes:true,
			attributeOldValue:true,
			characterData:true,
			characterDataOldValue:true,
			childList:true,
			subtree:true
		}
	};
	e.observe(e.b,e.c)
})(window);
