import{x as d}from"./lit-html-paDGiEfB.js";const S={title:"Components/Divider",argTypes:{weight:{name:"Ample",control:{type:"check"},options:["dss-divider--bold"]},dashed:{name:"Dashed",control:{type:"check"},options:["dss-divider--dashed"]}},parameters:{layout:"centered"}},e={render:t=>d`<hr style="width: 300px" class="${t.weight} ${t.dashed}" />`,args:{weight:"",dashed:""}},r={tags:["!dev"],render:()=>d`
      <hr />
    `},s={tags:["!dev"],render:()=>d`
      <hr class="dss-divider--bold" />
    `},a={tags:["!dev"],render:()=>d`
      <hr class="dss-divider--dashed" />
    `};var n,o,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => html\`<hr style="width: 300px" class="\${args.weight} \${args.dashed}" />\`,
  args: {
    weight: '',
    dashed: ''
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,l,h;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <hr />
    \`;
  }
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <hr class="dss-divider--bold" />
    \`;
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,v,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <hr class="dss-divider--dashed" />
    \`;
  }
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const w=["Playground","ByDefault","Bold","Dashed"],_=Object.freeze(Object.defineProperty({__proto__:null,Bold:s,ByDefault:r,Dashed:a,Playground:e,__namedExportsOrder:w,default:S},Symbol.toStringTag,{value:"Module"}));export{r as B,a as D,e as P,_ as S,s as a};
