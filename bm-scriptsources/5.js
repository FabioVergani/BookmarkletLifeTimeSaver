void(w=>{
	const f=w=>{
		const d=w.document,scripts=d.scripts;
		if(0!==scripts.length){
			const Promise=w.Promise,promises=[],titleOriginal=w.String(d.title);
			d.title='\u231B';
			for(const script of scripts){
				const s=script.src,m=promises;
				if(0!==s.length){
					m[m.length]=fetch(s).then(r=>r.text().then(t=>[1,s,t])).catch(e=>[0,s,e.message])
				}else{
					const s=script.textContent.trim();
					if(0!==s.length){
						m[m.length]=[2,s]
					}
				}
			};
			if(0!==promises.length){
				Promise.all(promises).then(results=>{
					let i=results.length;
					while(i){
						const r=results,m=r[--i],n=m.shift();
						if(0!==n){
							const a=m[0];
							r[i]=1!==n?a+'\n':['//',a,'\n',m[1]].join('')
						}else{
							m[m.unshift('/*')]='*/\n';
							r[i]=m.join('\n')
						}
					};
					const d2=w.open().document,URL=w.URL,o=URL.createObjectURL(new w.Blob([results.join('\n')],{type:'text/plain'})),e=d.createDocumentFragment().appendChild(d.createElement('a'));
					 e.style.display='none';
					e.href=o;
					e.setAttribute('download',d2.title='scripts'+results.length);
					d2.body.appendChild(e).click();
					w.setTimeout(()=>{URL.revokeObjectURL(o)},1e3);
					d.title=titleOriginal
				})
			}
		}
	};
	if('complete'!==w.document.readyState){
		const g=e=>{
			const w=e.currentTarget;
			w.removeEventListener('load',g);
			f(w)
		};
		w.addEventListener('load',g);
	}else{
		f(w)
	}
})(window);