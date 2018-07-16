(w=>{
	const a=[],b=[],d=w.document;
	for(const link of d.links){
		const s=link.href;
		let x=s.substring(s.lastIndexOf('/')+1);
		if(x.length){
			x=a;
		}else{
			x=b;
		};
		x[x.length]=s;
	};
	a.sort();console.dir(a);
	b.sort();console.dir(b);
})(window);
