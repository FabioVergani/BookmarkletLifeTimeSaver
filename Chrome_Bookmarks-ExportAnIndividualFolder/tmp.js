(w=>{

	let m=x=>{
		let e=d.getElementById(x);
		if(null===e){
			e=d.createElement('div');
			const o=e.style;
			o.display='none';
			o.backgroundColor='#fffcdf';
			o.overflowX='hidden';
			o.overflowY='scroll';
			o.maxHeight='calc(100vh - 82px)';
			o.padding='1em';
			e.id=x;
			b.prepend(e)
		};
		return e
	};

	const d=w.document,b=d.body,r=m('myDiv');

	m=b.querySelector('bookmarks-app');
	if(null!==m){
		m=m.querySelectorAll('::shadow bookmarks-list::shadow #list bookmarks-item');
		if(null!==m){

				m=Array.from(m,e=>{
					let n=e.querySelector('::shadow #icon.folder-icon');
					return null!==n?'':[
							null!==(n=e.querySelector('::shadow #website-title'))?n.textContent.trim():'',
							null!==(n=e.querySelector('::shadow #website-url'))?n.textContent.trim():''
					].join('\r\n\t')
				});

			const o=r.style;
			o.display='none';
			if(0!==m.length){
				r.innerText=m.join('\r\n\r\n');
				o.display='block'
			}

		}
	}

})(window);
