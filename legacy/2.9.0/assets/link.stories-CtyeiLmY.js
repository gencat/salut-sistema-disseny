import"./lit-element-BL4lq474.js";import{x as n}from"./lit-html-D6cejpwM.js";import"./link-Cve3DMmB.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const l=`
 .none {
        display:none;
    }
    .wrapper {
        display: flex;
        align-items: center;
        gap: 16px;
    }
`,v={title:"Components/Link",argTypes:{label:{name:"Text"},href:{name:"Href"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",if:{arg:"showIcon"}},iconSize:{name:"Mida de la icona",control:{type:"select"},options:["sm","md","lg","xl"],if:{arg:"showIcon"}},iconPosition:{name:"Posició de la icona",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},target:{name:"Target",control:{type:"select"},options:["_self","_blank","_parent","_top"]},fontSize:{name:"Font-size"},fontWeight:{name:"Font-weight",control:{type:"select"},options:["regular","semibold","bold"]}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/vc3HcReFayadsJO1cEM8HS/Foundations---Design-System-HES-Salut?node-id=658-784&m=dev"}},args:{label:"Anchor link",href:"#",showIcon:!0,icon:"add_box",iconSize:"sm",iconPosition:"left",disabled:!1,target:"_self",fontSize:"14px",fontWeight:"semibold"},render:e=>n`
    ${e.showIcon?n`
        <dss-link label="${e.label}" href="${e.url}" target="${e.target}" icon="${e.icon}" iconSize="${e.iconSize}" iconPosition="${e.iconPosition}" fontSize="${e.fontSize}" fontWeight="${e.fontWeight}" ?disabled="${e.disabled}"></dss-link>
      `:n`
        <dss-link label="${e.label}" href="${e.url}" target="${e.target}" fontSize="${e.fontSize}" fontWeight="${e.fontWeight}" ?disabled="${e.disabled}"></dss-link>
      `}
    `},o={tags:["!dev"],render:()=>n`
            <dss-link label="Anchor link" href="#"></dss-link>
    `,decorators:[a(l,"link-default-style")]},t={tags:["!dev"],render:()=>n`
            <div class="wrapper">
                <dss-link label="Regular link" href="#" fontSize="14px" fontWeight="regular"></dss-link>
                <dss-link label="Semibold link" href="#" fontSize="14px" fontWeight="semibold"></dss-link>
                <dss-link label="Bold link" href="#" fontSize="14px" fontWeight="bold"></dss-link>
            </div>
    `,decorators:[a(l,"link-font-variants-style")]},i={tags:["!dev"],render:()=>n`
    <div class="wrapper">
            <dss-link label="Left icon" href="#" icon="add_box"></dss-link>
            <dss-link label="Right icon" href="#" icon="add_box" iconPosition="right"></dss-link>
        </div>
    `,decorators:[a(l,"link-icons-style")]},r={tags:["!dev"],render:()=>n`
      <dss-link label="Anchor link" icon="add_box" disabled></dss-link>
    `,decorators:[a(l,"link-disabled-style")]};var d,c,f;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(c=s.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var p,g,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-link label="Anchor link" href="#"></dss-link>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-default-style')]
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var m,b,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-link label="Regular link" href="#" fontSize="14px" fontWeight="regular"></dss-link>
                <dss-link label="Semibold link" href="#" fontSize="14px" fontWeight="semibold"></dss-link>
                <dss-link label="Bold link" href="#" fontSize="14px" fontWeight="bold"></dss-link>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-font-variants-style')]
}`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var u,S,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
            <dss-link label="Left icon" href="#" icon="add_box"></dss-link>
            <dss-link label="Right icon" href="#" icon="add_box" iconPosition="right"></dss-link>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-icons-style')]
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var $,w,z;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-link label="Anchor link" icon="add_box" disabled></dss-link>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-disabled-style')]
}`,...(z=(w=r.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const x=["Playground","ByDefault","FontVariants","Icons","Disabled"],F=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:o,Disabled:r,FontVariants:t,Icons:i,Playground:s,__namedExportsOrder:x,default:v},Symbol.toStringTag,{value:"Module"}));export{o as B,r as D,t as F,i as I,s as P,F as S};
