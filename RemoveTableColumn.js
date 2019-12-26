(w=>{
	const e=w.$0;
	if(e && e.tagName==='TABLE'){
		const r=e.rows, n=prompt('Delete column:',0);
		let i=r.length;
		while(i){
			r[--i].deleteCell(n)
		}
	}
})(window);
