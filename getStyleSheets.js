//javascript:
(async w=>{
	const d=w.document,
	request=(i,x)=>{
	  return new Promise(resolve=>{
		const r=new XMLHttpRequest();
		r.responseType='text';
		r.onreadystatechange=()=>{
			if(4===r.readyState){
				resolve([i,[x,200!==r.status?c2.join(x):r.response.trim()]])
			}
		};
		r.onerror=()=>resolve(c1.join(x));
		r.open('GET',x,true);
		r.send(null)
	  })
	},
	c1=['/*\n\u1F6D1:\t','\n*/'],
	c2=['/*\n\u26A0:\t','\n*/'],
	c3=['/*\nempty:\t','\n*/'],
	c4=['/*\n','\n*/'],
	promises=[],
	result=[];
	for(const sheet of d.styleSheets){
		if(!sheet.disabled){
			let x;
			if(x=sheet.href){
				if(x.length){
					const m=result,i=result.length;
					m[i]=null;
					promises.push(request(i,x))
				}
			}else{
				if(x=sheet.ownerNode){
					result.push(x.innerHTML)
				}
			}
		}
	};
	Promise.all(promises).then(a=>{
		const m=result,
		p=(
			a.forEach(v=>{
				const a=v[1],t=a[1];
				m[v[0]]=[(t.length?c4:c3).join(a[0]),t].join('\n\n')
			}),
			w.open().document.body.appendChild(d.createElement("P"))
		);
		p.style='height:100%;overflow:hidden\u0020scroll;white-space:pre-line;';
		p.textContent=m.join('\n\n');
		//console.dir(m)
	})
})(window);
