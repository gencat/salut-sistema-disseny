import{x as e}from"./lit-html-CeYizTxc.js";const O={title:"Components/Chip",argTypes:{label:{name:"Text"},size:{name:"Mida",control:{type:"radio"},options:["sm","lg"]},selected:{name:"Seleccionat",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},disableSelect:{name:"Deshabilitar Toggle",control:{type:"boolean"}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",if:{arg:"showIcon"}},showIconButton:{name:"Mostrar botó de tancar",control:{type:"boolean"}}},parameters:{layout:"centered"}},d={args:{label:"Chip",size:"lg",selected:!1,disabled:!1,disableSelect:!1,showIcon:!1,icon:"add_box",showIconButton:!1},render:s=>e`
      <dss-chip 
        label="${s.label}"
        size="${s.size}"
        icon="${s.icon}"
        ?selected="${s.selected}"
        ?disabled="${s.disabled}"
        ?disableSelect="${s.disableSelect}"
        ?hasDelete="${s.showIconButton}"
      >
      </dss-chip>
    `},i={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-chip label="Chip" size="sm"></dss-chip>
        <dss-chip label="Chip" size="sm" selected></dss-chip>
        <dss-chip label="Chip"></dss-chip>
        <dss-chip label="Chip" selected></dss-chip>
      </div>
    `},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-chip label="Chip"></dss-chip>
        <dss-chip label="Chip" selected></dss-chip>
        <dss-chip label="Chip" disabled></dss-chip>
        <dss-chip label="Chip" selected disabled></dss-chip>
      </div>
    `},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-chip label="Chip" icon="add_box" size="sm"></dss-chip>
        <dss-chip label="Chip" icon="add_box" size="sm" selected></dss-chip>
        <dss-chip label="Chip" icon="add_box" size="sm" disabled></dss-chip>
        <dss-chip label="Chip" icon="add_box" size="sm" selected disabled></dss-chip>
        <dss-chip label="Chip" icon="add_box"></dss-chip>
        <dss-chip label="Chip" icon="add_box" selected></dss-chip>
        <dss-chip label="Chip" icon="add_box" disabled></dss-chip>
        <dss-chip label="Chip" icon="add_box" selected disabled></dss-chip>
      </div>
    `},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-chip label="Chip" hasDelete></dss-chip>
        <dss-chip label="Chip" selected hasDelete></dss-chip>
        <dss-chip label="Chip" disabled hasDelete></dss-chip>
        <dss-chip label="Chip" selected disabled hasDelete></dss-chip>
      </div>
    `},p={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-chip label="Chip" icon="add_box" size="sm" hasDelete></dss-chip>
        <dss-chip label="Chip" icon="add_box" size="sm" selected hasDelete></dss-chip>
        <dss-chip label="Chip" icon="add_box" size="sm" disabled hasDelete></dss-chip>
        <dss-chip label="Chip" icon="add_box" size="sm" selected disabled hasDelete></dss-chip>
      </div>
      <div class="wrapper wrapper--next">
        <dss-chip label="Chip" icon="add_box" hasDelete></dss-chip>
        <dss-chip label="Chip" icon="add_box" selected hasDelete></dss-chip>
        <dss-chip label="Chip" icon="add_box" disabled hasDelete></dss-chip>
        <dss-chip label="Chip" icon="add_box" selected disabled hasDelete></dss-chip>
      </div>
    `},n={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-chip icon="add_box" ></dss-chip>
                <dss-chip icon="add_box" selected></dss-chip>
                <dss-chip icon="add_box" disabled></dss-chip>
                <dss-chip icon="add_box" disabled selected></dss-chip>
      </div>
    `};var h,o,r;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Chip',
    size: 'lg',
    selected: false,
    disabled: false,
    disableSelect: false,
    showIcon: false,
    icon: 'add_box',
    showIconButton: false
  },
  render: (args: any) => {
    return html\`
      <dss-chip 
        label="\${args.label}"
        size="\${args.size}"
        icon="\${args.icon}"
        ?selected="\${args.selected}"
        ?disabled="\${args.disabled}"
        ?disableSelect="\${args.disableSelect}"
        ?hasDelete="\${args.showIconButton}"
      >
      </dss-chip>
    \`;
  }
}`,...(r=(o=d.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var t,b,m;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-chip label="Chip" size="sm"></dss-chip>
        <dss-chip label="Chip" size="sm" selected></dss-chip>
        <dss-chip label="Chip"></dss-chip>
        <dss-chip label="Chip" selected></dss-chip>
      </div>
    \`;
  }
}`,...(m=(b=i.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var C,_,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-chip label="Chip"></dss-chip>
        <dss-chip label="Chip" selected></dss-chip>
        <dss-chip label="Chip" disabled></dss-chip>
        <dss-chip label="Chip" selected disabled></dss-chip>
      </div>
    \`;
  }
}`,...(x=(_=a.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var u,v,g;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-chip label="Chip" icon="add_box" size="sm"></dss-chip>
        <dss-chip label="Chip" icon="add_box" size="sm" selected></dss-chip>
        <dss-chip label="Chip" icon="add_box" size="sm" disabled></dss-chip>
        <dss-chip label="Chip" icon="add_box" size="sm" selected disabled></dss-chip>
        <dss-chip label="Chip" icon="add_box"></dss-chip>
        <dss-chip label="Chip" icon="add_box" selected></dss-chip>
        <dss-chip label="Chip" icon="add_box" disabled></dss-chip>
        <dss-chip label="Chip" icon="add_box" selected disabled></dss-chip>
      </div>
    \`;
  }
}`,...(g=(v=c.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var D,z,w;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-chip label="Chip" hasDelete></dss-chip>
        <dss-chip label="Chip" selected hasDelete></dss-chip>
        <dss-chip label="Chip" disabled hasDelete></dss-chip>
        <dss-chip label="Chip" selected disabled hasDelete></dss-chip>
      </div>
    \`;
  }
}`,...(w=(z=l.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var S,y,I;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-chip label="Chip" icon="add_box" size="sm" hasDelete></dss-chip>
        <dss-chip label="Chip" icon="add_box" size="sm" selected hasDelete></dss-chip>
        <dss-chip label="Chip" icon="add_box" size="sm" disabled hasDelete></dss-chip>
        <dss-chip label="Chip" icon="add_box" size="sm" selected disabled hasDelete></dss-chip>
      </div>
      <div class="wrapper wrapper--next">
        <dss-chip label="Chip" icon="add_box" hasDelete></dss-chip>
        <dss-chip label="Chip" icon="add_box" selected hasDelete></dss-chip>
        <dss-chip label="Chip" icon="add_box" disabled hasDelete></dss-chip>
        <dss-chip label="Chip" icon="add_box" selected disabled hasDelete></dss-chip>
      </div>
    \`;
  }
}`,...(I=(y=p.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var f,$,B;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-chip icon="add_box" ></dss-chip>
                <dss-chip icon="add_box" selected></dss-chip>
                <dss-chip icon="add_box" disabled></dss-chip>
                <dss-chip icon="add_box" disabled selected></dss-chip>
      </div>
    \`;
  }
}`,...(B=($=n.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const T=["Playground","SizeType","Basic","Icon","Delete","IconAndDelete","OnlyIcon"],P=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Delete:l,Icon:c,IconAndDelete:p,OnlyIcon:n,Playground:d,SizeType:i,__namedExportsOrder:T,default:O},Symbol.toStringTag,{value:"Module"}));export{a as B,l as D,c as I,n as O,d as P,P as S,i as a,p as b};
