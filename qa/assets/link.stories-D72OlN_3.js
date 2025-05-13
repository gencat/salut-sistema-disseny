import"./lit-element-Dloa6E9d.js";import{x as n}from"./lit-html-D6a8R3xZ.js";import"./link-Onzw2b7V.js";const v={title:"Components/Link",argTypes:{label:{name:"Text"},href:{name:"Href"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",if:{arg:"showIcon"}},iconSize:{name:"Mida de la icona",control:{type:"select"},options:["sm","md","lg","xl"],if:{arg:"showIcon"}},iconPosition:{name:"Posició de la icona",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},target:{name:"Target",control:{type:"select"},options:["_self","_blank","_parent","_top"]},fontSize:{name:"Font-size"},fontWeight:{name:"Font-weight",control:{type:"select"},options:["regular","semibold","bold"]}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/vc3HcReFayadsJO1cEM8HS/Foundations---Design-System-HES-Salut?node-id=658-784&m=dev"}},args:{label:"Anchor link",href:"#",showIcon:!0,icon:"add_box",iconSize:"sm",iconPosition:"left",disabled:!1,target:"_self",fontSize:"14px",fontWeight:"semibold"},render:e=>n`
    ${e.showIcon?n`
        <dss-link label="${e.label}" href="${e.url}" target="${e.target}" icon="${e.icon}" iconSize="${e.iconSize}" iconPosition="${e.iconPosition}" fontSize="${e.fontSize}" fontWeight="${e.fontWeight}" ?disabled="${e.disabled}"></dss-link>
      `:n`
        <dss-link label="${e.label}" href="${e.url}" target="${e.target}" fontSize="${e.fontSize}" fontWeight="${e.fontWeight}" ?disabled="${e.disabled}"></dss-link>
      `}
    `},s={tags:["!dev"],render:()=>n`
            <dss-link label="Anchor link" href="#"></dss-link>
    `},i={tags:["!dev"],render:()=>n`
            <div class="wrapper">
                <dss-link label="Regular link" href="#" fontSize="14px" fontWeight="regular"></dss-link>
                <dss-link label="Semibold link" href="#" fontSize="14px" fontWeight="semibold"></dss-link>
                <dss-link label="Bold link" href="#" fontSize="14px" fontWeight="bold"></dss-link>
            </div>
    `},t={tags:["!dev"],render:()=>n`
    <div class="wrapper">
    <dss-link label="Left icon" href="#" icon="add_box"></dss-link>
    <dss-link label="Right icon" href="#" icon="add_box" iconPosition="right"></dss-link>
  </div>
    
    `},r={tags:["!dev"],render:()=>n`
      <dss-link label="Anchor link" icon="add_box" disabled></dss-link>
    `};var a,l,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/vc3HcReFayadsJO1cEM8HS/Foundations---Design-System-HES-Salut?node-id=658-784&m=dev'
    }
  },
  args: {
    label: 'Anchor link',
    href: '#',
    showIcon: true,
    icon: 'add_box',
    iconSize: 'sm',
    iconPosition: 'left',
    disabled: false,
    target: '_self',
    fontSize: '14px',
    fontWeight: 'semibold'
  },
  render: (args: any) => {
    return html\`
    \${args.showIcon ? html\`
        <dss-link label="\${args.label}" href="\${args.url}" target="\${args.target}" icon="\${args.icon}" iconSize="\${args.iconSize}" iconPosition="\${args.iconPosition}" fontSize="\${args.fontSize}" fontWeight="\${args.fontWeight}" ?disabled="\${args.disabled}"></dss-link>
      \` : html\`
        <dss-link label="\${args.label}" href="\${args.url}" target="\${args.target}" fontSize="\${args.fontSize}" fontWeight="\${args.fontWeight}" ?disabled="\${args.disabled}"></dss-link>
      \`}
    \`;
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,f,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-link label="Anchor link" href="#"></dss-link>
    \`;
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var m,h,b;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-link label="Regular link" href="#" fontSize="14px" fontWeight="regular"></dss-link>
                <dss-link label="Semibold link" href="#" fontSize="14px" fontWeight="semibold"></dss-link>
                <dss-link label="Bold link" href="#" fontSize="14px" fontWeight="bold"></dss-link>
            </div>
    \`;
  }
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var p,k,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
    <dss-link label="Left icon" href="#" icon="add_box"></dss-link>
    <dss-link label="Right icon" href="#" icon="add_box" iconPosition="right"></dss-link>
  </div>
    
    \`;
  }
}`,...(u=(k=t.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var S,$,z;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-link label="Anchor link" icon="add_box" disabled></dss-link>
    \`;
  }
}`,...(z=($=r.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const x=["Playground","ByDefault","FontVariants","Icons","Disabled"],W=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:s,Disabled:r,FontVariants:i,Icons:t,Playground:o,__namedExportsOrder:x,default:v},Symbol.toStringTag,{value:"Module"}));export{s as B,r as D,i as F,t as I,o as P,W as S};
