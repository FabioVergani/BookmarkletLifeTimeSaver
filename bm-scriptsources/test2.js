void((w=>{
	const f=w=>{
		const d=w.document, scripts=d.scripts;
		if(0!==scripts.length){
			const Promise=w.Promise, promises=[];
			for(const script of scripts){
				const s=script.src, m=promises;
				m[m.length]=0!==s.length ? fetch(s).then(r=>r.text().then(t=>[1,s,t])).catch(e=>[0,s,e.message]) : [2,script.textContent||'']
			};
			if(0!==promises.length){
				Promise.all(promises).then(results=>{
					let i=results.length;
					while(i){
						const r=results, m=r[--i], n=m.shift();
						if(0!==n){
							const a=m[0];
							if(1!==n){
								if(0!==a.length){
									let s=a.trim();
									if(s.length){
										r[i]=s+'\n'
									}else{
										r.splice(i,1)
									};
								}else{
									r.splice(i,1)
								}
							}else{
								r[i]=['//',a,'\n',m[1]].join('')
							}
						}else{
							m[m.unshift('/*')]='*/\n';
							r[i]=m.join('\n')
						}
					};
					const a=d.createElement('a');
					a.href='data:text/plain;charset=utf-8,'+encodeURIComponent(results.join('\n'))
					a.download='scripts';
					a.style.display='none';
					d.body.appendChild(a);
					a.click();
					a.remove();
				})
			}
		}
	};
	if('complete'!==w.document.readyState){
		const g=event=>{
			const w=event.currentTarget;
			w.removeEventListener('load',g);
			f(w)
		};
		w.addEventListener('load',g)
	}else{
		f(w)
	}
})(window));