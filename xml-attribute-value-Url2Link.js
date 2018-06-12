(b=>{
	const m=b.querySelectorAll('.html-attribute-value');
	let i=m.length;
	while(i){
		const e=m[--i],p=/(\s+)*(https?:\/\/[^\s\(\)\'\"\<\>]+)(\s+)*/ig;
		let s=e.innerHTML;
		if(p.test(s)){
			e.innerHTML=s.replace(p,'<a target="_blank" href="$2">$2</a>');
		}
	}
})(document.body);
