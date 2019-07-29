(w=>{
	const d=w.document,dE=d.documentElement;
	if(0!==dE.children.length){
		const U=w.URL,
		b=d.body,
		a=d.createDocumentFragment().appendChild(d.createElement('a'));
		a.style.display='none';
		let x=w.location.pathname;
		a.download=x.substring(x.lastIndexOf('/')+1);
		x=d.doctype;
		if(x){
			let v,t=['<!DOCTYPE'];
			const s='\u0020';
			if(v=x.name){t.push(s,v)};
			if(v=x.publicId){t.push(s,'PUBLIC',s,v)};
			if(v=x.systemId){t.push(s,'SYSTEM',s,v)};
			t.push('>');
			x=t.join('')
		}else{
			x=''
		};
		a.href=x=U.createObjectURL(new w.Blob([x,dE.outerHTML],{type:'text/html'}));
		b.appendChild(a);
		a.click();
		b.removeChild(a);
		w.setTimeout(()=>{U.revokeObjectURL(x)},1E3);
	}
})(window);
