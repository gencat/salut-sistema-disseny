import{x as e}from"./lit-html-D6cejpwM.js";import{w as d}from"./storybook-decorators-DSS85Rnr.js";const i=`
 .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
    .wrapper--next {
        margin-top: 24px;
    }
`,P={title:"Components/Chip",argTypes:{label:{name:"Text"},size:{name:"Mida",control:{type:"radio"},options:["xs","sm","lg"]},selected:{name:"Seleccionat",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},disableSelect:{name:"Deshabilitar Toggle",control:{type:"boolean"}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",if:{arg:"showIcon"}},showIconButton:{name:"Mostrar botó de tancar",control:{type:"boolean"}}},parameters:{layout:"centered"}},c={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-17244&m=dev"}},args:{label:"Chip",size:"lg",selected:!1,disabled:!1,disableSelect:!1,showIcon:!1,icon:"add_box",showIconButton:!1},render:s=>e`
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
    `},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-chip label="Chip" size="sm"></dss-chip>
        <dss-chip label="Chip" size="sm" selected></dss-chip>
        <dss-chip label="Chip"></dss-chip>
        <dss-chip label="Chip" selected></dss-chip>
      </div>
    `,decorators:[d(i,"chip-size-type-style")]},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-chip label="Chip"></dss-chip>
        <dss-chip label="Chip" selected></dss-chip>
        <dss-chip label="Chip" disabled></dss-chip>
        <dss-chip label="Chip" selected disabled></dss-chip>
      </div>
    `,decorators:[d(i,"chip-basic-style")]},p={tags:["!dev"],render:()=>e`
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
    `,decorators:[d(i,"chip-icon-style")]},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-chip label="Chip" hasDelete></dss-chip>
        <dss-chip label="Chip" selected hasDelete></dss-chip>
        <dss-chip label="Chip" disabled hasDelete></dss-chip>
        <dss-chip label="Chip" selected disabled hasDelete></dss-chip>
      </div>
    `,decorators:[d(i,"chip-delete-style")]},h={tags:["!dev"],render:()=>e`
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
    `,decorators:[d(i,"chip-icon-and-delete-style")]},t={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-chip icon="add_box" size="xs" ></dss-chip>
                <dss-chip icon="add_box" size="xs" selected></dss-chip>
                <dss-chip icon="add_box" size="xs" disabled></dss-chip>
                <dss-chip icon="add_box" size="xs" disabled selected></dss-chip>
      </div>
            <br/>
            <div class="wrapper">
        <dss-chip icon="add_box" size="sm"></dss-chip>
                <dss-chip icon="add_box" size="sm" selected></dss-chip>
                <dss-chip icon="add_box" size="sm" disabled></dss-chip>
                <dss-chip icon="add_box" size="sm" disabled selected></dss-chip>
      </div>
            <br/>
            <div class="wrapper">
        <dss-chip icon="add_box" ></dss-chip>
                <dss-chip icon="add_box" selected></dss-chip>
                <dss-chip icon="add_box" disabled></dss-chip>
                <dss-chip icon="add_box" disabled selected></dss-chip>
      </div>
    `,decorators:[d(i,"chip-only-icon-style")]};var r,n,b;c.parameters={...c.parameters,docs:{...(r=c.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(b=(n=c.parameters)==null?void 0:n.docs)==null?void 0:b.source}}};var m,x,_;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'chip-size-type-style')]
}`,...(_=(x=a.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var C,w,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'chip-basic-style')]
}`,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var u,v,z;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'chip-icon-style')]
}`,...(z=(v=p.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var g,S,D;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'chip-delete-style')]
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var f,I,$;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'chip-icon-and-delete-style')]
}`,...($=(I=h.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var B,T,O;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-chip icon="add_box" size="xs" ></dss-chip>
                <dss-chip icon="add_box" size="xs" selected></dss-chip>
                <dss-chip icon="add_box" size="xs" disabled></dss-chip>
                <dss-chip icon="add_box" size="xs" disabled selected></dss-chip>
      </div>
            <br/>
            <div class="wrapper">
        <dss-chip icon="add_box" size="sm"></dss-chip>
                <dss-chip icon="add_box" size="sm" selected></dss-chip>
                <dss-chip icon="add_box" size="sm" disabled></dss-chip>
                <dss-chip icon="add_box" size="sm" disabled selected></dss-chip>
      </div>
            <br/>
            <div class="wrapper">
        <dss-chip icon="add_box" ></dss-chip>
                <dss-chip icon="add_box" selected></dss-chip>
                <dss-chip icon="add_box" disabled></dss-chip>
                <dss-chip icon="add_box" disabled selected></dss-chip>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'chip-only-icon-style')]
}`,...(O=(T=t.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const A=["Playground","SizeType","Basic","Icon","Delete","IconAndDelete","OnlyIcon"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Delete:o,Icon:p,IconAndDelete:h,OnlyIcon:t,Playground:c,SizeType:a,__namedExportsOrder:A,default:P},Symbol.toStringTag,{value:"Module"}));export{l as B,o as D,p as I,t as O,c as P,j as S,a,h as b};
