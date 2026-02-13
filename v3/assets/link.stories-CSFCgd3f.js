import{x as n}from"./iframe-DLVb3rJw.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const l=`
 .none {
        display:none;
    }
    .wrapper {
        display: flex;
        align-items: center;
        gap: 16px;
    }
`,d={title:"Components/Link",argTypes:{label:{name:"Text"},href:{name:"Href"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",if:{arg:"showIcon"}},iconSize:{name:"Mida de la icona",control:{type:"select"},options:["sm","md","lg","xl"],if:{arg:"showIcon"}},iconPosition:{name:"Posició de la icona",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},target:{name:"Target",control:{type:"select"},options:["_self","_blank","_parent","_top"]},fontSize:{name:"Font-size"},fontWeight:{name:"Font-weight",control:{type:"select"},options:["regular","semibold","bold"]}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/vc3HcReFayadsJO1cEM8HS/Foundations---Design-System-HES-Salut?node-id=658-784&m=dev"}},args:{label:"Anchor link",href:"#",showIcon:!0,icon:"add_box",iconSize:"sm",iconPosition:"left",disabled:!1,target:"_self",fontSize:"14px",fontWeight:"semibold"},render:e=>n`
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
    `,decorators:[a(l,"link-disabled-style")]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-link label="Anchor link" href="#"></dss-link>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-default-style')]
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-link label="Anchor link" icon="add_box" disabled></dss-link>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'link-disabled-style')]
}`,...r.parameters?.docs?.source}}};const c=["Playground","ByDefault","FontVariants","Icons","Disabled"],g=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:o,Disabled:r,FontVariants:t,Icons:i,Playground:s,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{o as B,r as D,t as F,i as I,s as P,g as S};
