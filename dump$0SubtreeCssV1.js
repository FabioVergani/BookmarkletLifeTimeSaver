javascript:(w=>{const d=w.document;let s="querySelector",e=d[s](w.prompt(s,"*"));if(e){const f=w.getComputedStyle,walker=d.createTreeWalker(e,1),nest=(a,b)=>a.appendChild(d.createElement(b)),main=nest(d.createDocumentFragment(),"main"),cssPath=x=>{let e=x;const d=e.ownerDocument,n=[],m=[],v="\u0020>\u0020",t=[":nth-of-type(",")"];while(e&&d!==e){const m=[e.nodeName],i=e.id;if(i){m.push("#",i)}for(const x of e.classList){m.push(".",x)}n.unshift([e,m]);e=e.parentNode}for(const x of n){const g=d.querySelectorAll([...m,x[1].join("")].join(v));if(g?.length>1){let i=1,e=x[0];const s=e.nodeName;while((e=e.previousElementSibling)){if(s===e.nodeName){++i}}x[1].push(t.join(i))}m.push(x[1].join(""))}return m.join(v)};nest(main,"style").textContent="main{font:1rem/1 sans-serif}p{border-bottom:1px solid#eee}pre{padding:1em}";while(e){s=f(e);const l=s.length,m=[],x=nest(main,"p"),g=(a,b)=>{nest(x,a).textContent=b};g("b",cssPath(e));for(let p,i=0;i<l;++i){m.push([p=s[i],s.getPropertyValue(p)].join(":\u0020"))}g("pre",m.join(";\n"));e=walker.nextNode();}e=w.open().document.body;s=e.style;s.display="none";e.appendChild(main);s.display="block"}})(window);
/*
(w=>{
  const d=w.document;
  let s="querySelector", e=d[s](w.prompt(s,"*"));
  if(e){
    const f=w.getComputedStyle, walker=d.createTreeWalker(e,1), nest=(a,b)=>a.appendChild(d.createElement(b)), main=nest(d.createDocumentFragment(),"main"),
     cssPath = x => {
        let e = x;
        const d=e.ownerDocument, n=[], m=[], v="\u0020>\u0020", t=[":nth-of-type(",")"];
        while(e && d!==e){
          const m=[e.nodeName],i=e.id;
          if(i){
              m.push("#",i)
          }
          for(const x of e.classList){
            m.push(".", x)
          }
          n.unshift([e,m]);
          e=e.parentNode
        }
        for(const x of n){
          const g=d.querySelectorAll([...m, x[1].join("")].join(v));
          if(g?.length > 1){
            let i=1, e=x[0];
            const s=e.nodeName;
            while((e=e.previousElementSibling)){
              if(s === e.nodeName){
                ++i
              }
            }
            x[1].push(t.join(i))
          }
          m.push(x[1].join(""))
        }
        return m.join(v)
      };
    nest(main,"style").textContent="main{font:1rem/1 sans-serif}p{border-bottom:1px solid#eee}pre{padding:1em}";
    while(e){
      s=f(e);
      const l=s.length, m=[], x=nest(main,"p"), g=(a,b)=>{nest(x,a).textContent=b};
      g("b",cssPath(e));
      for(let p,i=0;i<l;++i){
        m.push([p=s[i],s.getPropertyValue(p)].join(":\u0020"))
      }
      g("pre",m.join(";\n"));
      e=walker.nextNode();
    }
    e=w.open().document.body;
    s=e.style;
    s.display="none";
    e.appendChild(main);
    s.display="block"
  }
})(window);
*/
