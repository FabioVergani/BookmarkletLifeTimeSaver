(w=>{
	const d=w.document,b=d.body,m=b.querySelectorAll('.html-attribute-value'),p=/(?:\s+)*(https?:\/\/[^\s\(\)\'\"\<\>]+)(?:\s+)*/ig;
	w.addEventListener('error',(x)=>{
		const m=x.path;
		if(m.length){
			const e=m[0],n=e.tagName;
			if(n && n==='img'){
				const o=e.style;
				o.width=o.height='256px';
				o.background='#e60000';
				console.warn(e.src);
			}
		}
	},true);
	let i=m.length;
	while(i){
		const e=m[--i];
		let s=e.innerHTML;
		if(p.test(s)){
			if(s.indexOf('/images')<0){
				s=s.replace(p,'<a target="_blank" href="$1">$1</a>');
			}else{
				s=s.replace(p,'<img src="$1" />');
				e.style.display='block';
			};
			e.innerHTML=s;
		}
	}
})(window);
