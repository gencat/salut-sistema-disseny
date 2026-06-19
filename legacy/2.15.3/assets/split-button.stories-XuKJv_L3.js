import{x as s}from"./lit-html-D6cejpwM.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const n=`
 .css-1sqhzee {
    display:none
  }
  .innerZoomElementWrapper {
    flex-direction: row;
    align-items: center;
        gap: 16px;
  }
    .wrapper {
        display: flex;
        align-items: center;
        gap: 16px;
    }
`,H={title:"Components/Split Button",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["lg","md","sm"]},variant:{name:"Variant",control:{type:"radio"},options:["primary","secondary"]},text:{name:"Text",control:{type:"text"}},showIcon:{name:"Mostra icona",control:{type:"boolean"}},mainIcon:{name:"Icon principal",control:{type:"text"},if:{arg:"showIcon"}},iconClose:{name:"Icona de acció per defecte (obrir)",control:{type:"text"}},iconOpen:{name:"Icona de acció secundària (tancar)",control:{type:"text"}},isOpen:{name:"Actiú",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},hasMenu:{name:"Habilitar menú",control:{type:"boolean"}},dropdownPosition:{name:"Posición del menú",control:{type:"select"},options:["bottom-start","bottom-end","top-start","top-end"],if:{arg:"hasMenu"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1067-2312&m=dev"}},args:{size:"lg",variant:"primary",text:"Button",showIcon:!1,mainIcon:"add_box",iconClose:"expand_more",iconOpen:"expand_less",isOpen:!1,disabled:!1,hasMenu:!1,dropdownPosition:"bottom-start"},render:t=>s`
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
                        <dss-action-menu-item label="Action menu" hasNestedMenu>
                            <dss-action-menu>
                                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                            </dss-action-menu>
                        </dss-action-menu-item>
                        <dss-action-menu-item label="Action menu" hasNestedMenu>
                            <dss-action-menu>
                                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                            </dss-action-menu>
                        </dss-action-menu-item>
                    </dss-action-menu>
                </dss-split-button>
            </div>
    `,decorators:[e(n,"split-button-menu-style")]},u={tags:["!dev"],render:()=>s`
            <dss-split-button variant="primary" text="Button" size="lg" icon="add_box"></dss-split-button>
            <dss-split-button variant="primary" text="Button" size="md" icon="add_box"></dss-split-button>
            <dss-split-button variant="primary" text="Button" size="sm" icon="add_box"></dss-split-button>
    `,decorators:[e(n,"split-button-icons-style")]},m={tags:["!dev"],render:()=>s`
      <dss-split-button variant="primary" text="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-split-button>
    `,decorators:[e(n,"split-button-max-width-style")]},p={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <div style="position: relative">
                    <dss-split-button size="md" icon="add_box" text="Label"></dss-split-button>
                    <dss-notification-badge value="3" state="error" style="position: absolute; top: -8px; left: -8px; z-index: 900;border: 2px solid white;border-radius:50%"></dss-notification-badge>
                </div>
                <div style="position: relative">
                    <dss-split-button size="sm" icon="add_box" text="Label"></dss-split-button>
                    <dss-notification-badge dot state="error" style="position: absolute; top: -6px; left: -6px; z-index: 900;border: 2px solid white;border-radius:50%"></dss-notification-badge>
                </div>
            </div>
        `,decorators:[e(n,"button-notification-style")]};var c,b,y;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,v,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" text="Button" size="lg"></dss-split-button>
            <dss-split-button variant="primary" text="Button" size="md"></dss-split-button>
            <dss-split-button variant="primary" text="Button" size="sm"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-sizes-style')]
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,w,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" text="Button"></dss-split-button>
            <dss-split-button variant="secondary" text="Button"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-types-style')]
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var f,z,A;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" text="Button" isOpen></dss-split-button>
            <dss-split-button variant="secondary" text="Button" isOpen></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-active-style')]
}`,...(A=(z=r.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,M,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" text="Button" disabled></dss-split-button>
            <dss-split-button variant="secondary" text="Button" disabled></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-disabled-style')]
}`,...(_=(M=d.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var $,O,I;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div style="height:250px">
                <dss-split-button variant="primary" text="Button" hasMenu>
                    <dss-action-menu slot="menu" position="bottom-start">
                        <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                        <dss-action-menu-item label="Action menu" hasNestedMenu>
                            <dss-action-menu>
                                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                            </dss-action-menu>
                        </dss-action-menu-item>
                        <dss-action-menu-item label="Action menu" hasNestedMenu>
                            <dss-action-menu>
                                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                                <dss-action-menu-item label="Action menu"></dss-action-menu-item>
                            </dss-action-menu>
                        </dss-action-menu-item>
                    </dss-action-menu>
                </dss-split-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-menu-style')]
}`,...(I=(O=l.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var P,C,T;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" text="Button" size="lg" icon="add_box"></dss-split-button>
            <dss-split-button variant="primary" text="Button" size="md" icon="add_box"></dss-split-button>
            <dss-split-button variant="primary" text="Button" size="sm" icon="add_box"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-icons-style')]
}`,...(T=(C=u.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var N,D,L;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-split-button variant="primary" text="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-max-width-style')]
}`,...(L=(D=m.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var E,F,q;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <div style="position: relative">
                    <dss-split-button size="md" icon="add_box" text="Label"></dss-split-button>
                    <dss-notification-badge value="3" state="error" style="position: absolute; top: -8px; left: -8px; z-index: 900;border: 2px solid white;border-radius:50%"></dss-notification-badge>
                </div>
                <div style="position: relative">
                    <dss-split-button size="sm" icon="add_box" text="Label"></dss-split-button>
                    <dss-notification-badge dot state="error" style="position: absolute; top: -6px; left: -6px; z-index: 900;border: 2px solid white;border-radius:50%"></dss-notification-badge>
                </div>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-notification-style')]
}`,...(q=(F=p.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};const W=["Playground","Sizes","Types","Active","Disabled","Menu","Icons","MaxWidth","Notification"],J=Object.freeze(Object.defineProperty({__proto__:null,Active:r,Disabled:d,Icons:u,MaxWidth:m,Menu:l,Notification:p,Playground:o,Sizes:i,Types:a,__namedExportsOrder:W,default:H},Symbol.toStringTag,{value:"Module"}));export{r as A,d as D,u as I,l as M,p as N,o as P,J as S,a as T,i as a,m as b};
