import"./lit-element-vV9fql9z.js";import{x as o}from"./lit-html-paDGiEfB.js";import"./button-link-AVTPQ2S6.js";const h={title:"Components/Button Link",argTypes:{label:{name:"Text"},url:{name:"URL"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",if:{arg:"showIcon"}},iconPosition:{name:"Posició de la icona",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}}},parameters:{layout:"centered"}},e={args:{label:"Button Link",url:"#",showIcon:!0,icon:"add_box",iconPosition:"left",disabled:!1},render:n=>o`
    ${n.showIcon?o`
        <dss-button-link label="${n.label}" linkHref="${n.url}" icon="${n.icon}" iconPosition="${n.iconPosition}" ?disabled="${n.disabled}"></dss-button-link>
      `:o`
        <dss-button-link label="${n.label}" linkHref="${n.url}" ?disabled="${n.disabled}"></dss-button-link>
      `}
    `},t={tags:["!dev"],render:()=>o`
    <dss-button-link label="Button link" linkHref="#"></dss-button-link>
    `},s={tags:["!dev"],render:()=>o`
    <div class="wrapper">
    <dss-button-link label="Left icon" linkHref="#" icon="add_box"></dss-button-link>
    <dss-button-link label="Right icon" linkHref="#" icon="add_box" iconPosition="right"></dss-button-link>
  </div>
    
    `},r={tags:["!dev"],render:()=>o`
      <dss-button-link label="Left icon" linkHref="javascript:void(0)" icon="add_box" disabled></dss-button-link>
    `};var i,a,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Button Link',
    url: '#',
    showIcon: true,
    icon: 'add_box',
    iconPosition: 'left',
    disabled: false
  },
  render: (args: any) => {
    return html\`
    \${args.showIcon ? html\`
        <dss-button-link label="\${args.label}" linkHref="\${args.url}" icon="\${args.icon}" iconPosition="\${args.iconPosition}" ?disabled="\${args.disabled}"></dss-button-link>
      \` : html\`
        <dss-button-link label="\${args.label}" linkHref="\${args.url}" ?disabled="\${args.disabled}"></dss-button-link>
      \`}
    \`;
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,c,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <dss-button-link label="Button link" linkHref="#"></dss-button-link>
    \`;
  }
}`,...(b=(c=t.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var u,k,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
    <dss-button-link label="Left icon" linkHref="#" icon="add_box"></dss-button-link>
    <dss-button-link label="Right icon" linkHref="#" icon="add_box" iconPosition="right"></dss-button-link>
  </div>
    
    \`;
  }
}`,...(m=(k=s.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var p,f,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button-link label="Left icon" linkHref="javascript:void(0)" icon="add_box" disabled></dss-button-link>
    \`;
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const $=["Playground","ByDefault","Icons","Disabled"],x=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:t,Disabled:r,Icons:s,Playground:e,__namedExportsOrder:$,default:h},Symbol.toStringTag,{value:"Module"}));export{t as B,r as D,s as I,e as P,x as S};
