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
`,K={title:"Components/Split Button",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["lg","md","sm"]},variant:{name:"Variant",control:{type:"radio"},options:["primary","secondary"]},text:{name:"Text",control:{type:"text"}},showIcon:{name:"Mostra icona",control:{type:"boolean"}},mainIcon:{name:"Icon principal",control:{type:"text"},if:{arg:"showIcon"}},iconClose:{name:"Icona de acció per defecte (obrir)",control:{type:"text"}},iconOpen:{name:"Icona de acció secundària (tancar)",control:{type:"text"}},isOpen:{name:"Actiú",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},hasMenu:{name:"Habilitar menú",control:{type:"boolean"}},dropdownPosition:{name:"Posición del menú",control:{type:"select"},options:["bottom-start","bottom-end","top-start","top-end"],if:{arg:"hasMenu"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1067-2312&m=dev"}},args:{size:"lg",variant:"primary",text:"Button",showIcon:!1,mainIcon:"add_box",iconClose:"expand_more",iconOpen:"expand_less",isOpen:!1,disabled:!1,hasMenu:!1,dropdownPosition:"bottom-start"},render:t=>s`
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
    `,decorators:[e(n,"split-button-disabled-style")]},u={tags:["!dev"],render:()=>s`
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
    `,decorators:[e(n,"split-button-menu-style")]},l={tags:["!dev"],render:()=>s`
            <dss-split-button variant="primary" text="Button" size="lg" icon="add_box"></dss-split-button>
            <dss-split-button variant="primary" text="Button" size="md" icon="add_box"></dss-split-button>
            <dss-split-button variant="primary" text="Button" size="sm" icon="add_box"></dss-split-button>
    `,decorators:[e(n,"split-button-icons-style")]},c={tags:["!dev"],render:()=>s`
      <dss-split-button variant="primary" text="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-split-button>
    `,decorators:[e(n,"split-button-max-width-style")]},m={tags:["!dev"],render:()=>s`
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
        `,decorators:[e(n,"button-notification-style")]},p={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-button variant="secondary" label="Focus" @click=${()=>{const b=document.querySelector("#manual-focus-demo");b&&b.focus()}}></dss-button>
                <dss-split-button 
                    id="manual-focus-demo"
                    variant="primary" 
                    text="Button"
                ></dss-split-button>
            </div>
        `,decorators:[e(n,"split-button-focus-style")]};var y,x,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,h,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" text="Button" size="lg"></dss-split-button>
            <dss-split-button variant="primary" text="Button" size="md"></dss-split-button>
            <dss-split-button variant="primary" text="Button" size="sm"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-sizes-style')]
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var w,S,z;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" text="Button"></dss-split-button>
            <dss-split-button variant="secondary" text="Button"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-types-style')]
}`,...(z=(S=a.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var B,A,M;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" text="Button" isOpen></dss-split-button>
            <dss-split-button variant="secondary" text="Button" isOpen></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-active-style')]
}`,...(M=(A=r.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var $,_,O;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" text="Button" disabled></dss-split-button>
            <dss-split-button variant="secondary" text="Button" disabled></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-disabled-style')]
}`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var I,F,P;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(F=u.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var C,T,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" text="Button" size="lg" icon="add_box"></dss-split-button>
            <dss-split-button variant="primary" text="Button" size="md" icon="add_box"></dss-split-button>
            <dss-split-button variant="primary" text="Button" size="sm" icon="add_box"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-icons-style')]
}`,...(L=(T=l.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var N,D,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-split-button variant="primary" text="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-max-width-style')]
}`,...(q=(D=c.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var E,k,H;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(k=m.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var W,j,J;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const forceFocus = () => {
      const element = document.querySelector('#manual-focus-demo');
      if (element) {
        (element as HTMLElement).focus();
      }
    };
    return html\`
            <div class="wrapper">
                <dss-button variant="secondary" label="Focus" @click=\${forceFocus}></dss-button>
                <dss-split-button 
                    id="manual-focus-demo"
                    variant="primary" 
                    text="Button"
                ></dss-split-button>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-focus-style')]
}`,...(J=(j=p.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};const X=["Playground","Sizes","Types","Active","Disabled","Menu","Icons","MaxWidth","Notification","Focus"],G=Object.freeze(Object.defineProperty({__proto__:null,Active:r,Disabled:d,Focus:p,Icons:l,MaxWidth:c,Menu:u,Notification:m,Playground:o,Sizes:i,Types:a,__namedExportsOrder:X,default:K},Symbol.toStringTag,{value:"Module"}));export{r as A,d as D,p as F,l as I,u as M,m as N,o as P,G as S,a as T,i as a,c as b};
