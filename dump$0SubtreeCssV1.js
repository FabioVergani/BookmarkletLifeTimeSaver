javascript:(()=>{
	if($0){
	  let e=$0;
	  const
		d=e.ownerDocument,
		walker=d.createTreeWalker(e,1),
		f=d.defaultView.getComputedStyle,
		nest=(a,b)=>a.appendChild(d.createElement(b)),
		main=nest(d.createDocumentFragment(),'main'),
		rgx=/([^:]+:\s[^;]+;)\s/g;
		cssPath=node=>{
		  let e=node;
		  const d=e.ownerDocument,n=[],m=[],v=' > ',t=[':nth-of-type(',')'];
		  while(e && d!==e){
			const m=[e.nodeName];
			if(e.id){m.push('#',e.id)};
			for(const x of e.classList){m.push('.',x)};
			n.unshift([e,m]);
			e=e.parentNode
		  };
		  for(const x of n){
			const g=d.querySelectorAll([...m,x[1].join('')].join(v));
			if(g?.length>1){
			  let i=1, e=x[0];
			  const s=e.nodeName;
			  while(e=e.previousElementSibling){
				if(s===e.nodeName){++i}
			  };
			  x[1].push(t.join(i))
			};
			m.push(x[1].join(''))
		  };
		  return m.join(v)
		};
	  nest(main,'style').textContent='main{font:1rem/1 sans-serif}p{border-bottom:1px solid #eee}pre{padding:1em}';
	  while(e){
		const x=nest(main,'p'),g=(y,z)=>{nest(x,y).textContent=z};
		g('b',cssPath(e));
		g('pre',f(e).cssText.replace(rgx, '$1\n'));
		e=walker.nextNode();
	  };
	  e=window.open().document.body;
	  e.style.display='none';
	  e.appendChild(main);
	  e.style.display='block';
}})();
