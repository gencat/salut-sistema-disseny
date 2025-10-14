import{x as s}from"./lit-html-D6cejpwM.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const n=`
 .css-1sqhzee {
    display:none
  }
  .innerZoomElementWrapper {
    flex-direction: row;
    align-items: center;
        gap: 16px;
  }
`,C={title:"Components/Split Button",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["lg","md","sm"]},variant:{name:"Variant",control:{type:"radio"},options:["primary","secondary"]},text:{name:"Text",control:{type:"text"}},showIcon:{name:"Mostra icona",control:{type:"boolean"}},mainIcon:{name:"Icon principal",control:{type:"text"},if:{arg:"showIcon"}},iconClose:{name:"Icona de acció per defecte (obrir)",control:{type:"text"}},iconOpen:{name:"Icona de acció secundària (tancar)",control:{type:"text"}},isOpen:{name:"Actiú",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},hasMenu:{name:"Habilitar menú",control:{type:"boolean"}},dropdownPosition:{name:"Posición del menú",control:{type:"select"},options:["bottom-start","bottom-end","top-start","top-end"],if:{arg:"hasMenu"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1067-2312&m=dev"}},args:{size:"lg",variant:"primary",text:"Button",showIcon:!1,mainIcon:"add_box",iconClose:"expand_more",iconOpen:"expand_less",isOpen:!1,disabled:!1,hasMenu:!1,dropdownPosition:"bottom-start"},render:t=>s`
    <dss-split-button 
        size="${t.size}" 
        variant="${t.variant}" 
        text="${t.text}"
                icon="${t.showIcon?t.mainIcon:void 0}"
        iconClose="${t.iconClose}"
        iconOpen="${t.iconOpen}"
        ?isOpen=${t.isOpen}
        ?disabled=${t.disabled}
        ?hasMenu=${t.hasMenu}
        >
      ${t.hasMenu?s`
        <dss-action-menu slot="menu" position="${t.dropdownPosition}">
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
        </dss-action-menu>
       `:null}
    </dss-split-button>
  `},i={tags:["!dev"],render:()=>s`
        <dss-split-button variant="primary" text="Button" size="lg"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="md"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="sm"></dss-split-button>
    `,decorators:[e(n,"split-button-sizes-style")]},a={tags:["!dev"],render:()=>s`
        <dss-split-button variant="primary" text="Button"></dss-split-button>
        <dss-split-button variant="secondary" text="Button"></dss-split-button>
    `,decorators:[e(n,"split-button-types-style")]},r={tags:["!dev"],render:()=>s`
        <dss-split-button variant="primary" text="Button" isOpen></dss-split-button>
        <dss-split-button variant="secondary" text="Button" isOpen></dss-split-button>
    `,decorators:[e(n,"split-button-active-style")]},d={tags:["!dev"],render:()=>s`
        <dss-split-button variant="primary" text="Button" disabled></dss-split-button>
        <dss-split-button variant="secondary" text="Button" disabled></dss-split-button>
    `,decorators:[e(n,"split-button-disabled-style")]},l={tags:["!dev"],render:()=>s`
            <div style="height:250px">
                <dss-split-button variant="primary" text="Button" hasMenu>
                    <dss-action-menu slot="menu" position="bottom-start">
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                    </dss-action-menu>
                </dss-split-button>
            </div>
    `,decorators:[e(n,"split-button-menu-style")]},p={tags:["!dev"],render:()=>s`
        <dss-split-button variant="primary" text="Button" size="lg" icon="add_box"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="md" icon="add_box"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="sm" icon="add_box"></dss-split-button>
    `,decorators:[e(n,"split-button-icons-style")]};var u,m,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1067-2312&m=dev'
    }
  },
  args: {
    size: 'lg',
    variant: 'primary',
    text: 'Button',
    showIcon: false,
    mainIcon: 'add_box',
    iconClose: 'expand_more',
    iconOpen: 'expand_less',
    isOpen: false,
    disabled: false,
    hasMenu: false,
    dropdownPosition: 'bottom-start'
  },
  render: (args: any) => {
    return html\`
    <dss-split-button 
        size="\${args.size}" 
        variant="\${args.variant}" 
        text="\${args.text}"
                icon="\${args.showIcon ? args.mainIcon : undefined}"
        iconClose="\${args.iconClose}"
        iconOpen="\${args.iconOpen}"
        ?isOpen=\${args.isOpen}
        ?disabled=\${args.disabled}
        ?hasMenu=\${args.hasMenu}
        >
      \${args.hasMenu ? html\`
        <dss-action-menu slot="menu" position="\${args.dropdownPosition}">
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
          <dss-action-menu-item label="Action menu"></dss-action-menu-item>
        </dss-action-menu>
       \` : null}
    </dss-split-button>
  \`;
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var b,y,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button" size="lg"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="md"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="sm"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-sizes-style')]
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,g,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button"></dss-split-button>
        <dss-split-button variant="secondary" text="Button"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-types-style')]
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var w,S,B;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button" isOpen></dss-split-button>
        <dss-split-button variant="secondary" text="Button" isOpen></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-active-style')]
}`,...(B=(S=r.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var z,f,$;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button" disabled></dss-split-button>
        <dss-split-button variant="secondary" text="Button" disabled></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-disabled-style')]
}`,...($=(f=d.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var O,I,_;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div style="height:250px">
                <dss-split-button variant="primary" text="Button" hasMenu>
                    <dss-action-menu slot="menu" position="bottom-start">
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                    </dss-action-menu>
                </dss-split-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-menu-style')]
}`,...(_=(I=l.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var A,M,P;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-split-button variant="primary" text="Button" size="lg" icon="add_box"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="md" icon="add_box"></dss-split-button>
                <dss-split-button variant="primary" text="Button" size="sm" icon="add_box"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-icons-style')]
}`,...(P=(M=p.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const T=["Playground","Sizes","Types","Active","Disabled","Menu","Icons"],F=Object.freeze(Object.defineProperty({__proto__:null,Active:r,Disabled:d,Icons:p,Menu:l,Playground:o,Sizes:i,Types:a,__namedExportsOrder:T,default:C},Symbol.toStringTag,{value:"Module"}));export{r as A,d as D,p as I,l as M,o as P,F as S,a as T,i as a};
