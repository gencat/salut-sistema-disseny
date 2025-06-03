import{x as e}from"./lit-html-D6a8R3xZ.js";const T={title:"Components/Chip",argTypes:{label:{name:"Text"},size:{name:"Mida",control:{type:"radio"},options:["xs","sm","lg"]},selected:{name:"Seleccionat",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},disableSelect:{name:"Deshabilitar Toggle",control:{type:"boolean"}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",if:{arg:"showIcon"}},showIconButton:{name:"Mostrar botó de tancar",control:{type:"boolean"}}},parameters:{layout:"centered"}},d={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-17244&m=dev"}},args:{label:"Chip",size:"lg",selected:!1,disabled:!1,disableSelect:!1,showIcon:!1,icon:"add_box",showIconButton:!1},render:s=>e`
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-17244&m=dev'
    }
  },
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
}`,...(m=(b=i.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var C,u,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var _,g,v;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var D,w,z;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(w=l.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var S,y,f;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(y=p.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var I,$,B;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=($=n.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const O=["Playground","SizeType","Basic","Icon","Delete","IconAndDelete","OnlyIcon"],A=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,Delete:l,Icon:c,IconAndDelete:p,OnlyIcon:n,Playground:d,SizeType:i,__namedExportsOrder:O,default:T},Symbol.toStringTag,{value:"Module"}));export{a as B,l as D,c as I,n as O,d as P,A as S,i as a,p as b};
