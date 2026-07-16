import{x as s}from"./iframe-_r7gOCbv.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const n=`
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
`,y={title:"Collections/Split Button",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["lg","md","sm"]},variant:{name:"Variant",control:{type:"radio"},options:["primary","secondary"]},text:{name:"Text",control:{type:"text"}},showIcon:{name:"Mostra icona",control:{type:"boolean"}},mainIcon:{name:"Icon principal",control:{type:"text"},if:{arg:"showIcon"}},iconClose:{name:"Icona de acció per defecte (obrir)",control:{type:"text"}},iconOpen:{name:"Icona de acció secundària (tancar)",control:{type:"text"}},isOpen:{name:"Actiú",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},hasMenu:{name:"Habilitar menú",control:{type:"boolean"}},dropdownPosition:{name:"Posición del menú",control:{type:"select"},options:["bottom-start","bottom-end","top-start","top-end"],if:{arg:"hasMenu"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1067-2312&m=dev"}},args:{size:"lg",variant:"primary",text:"Button",showIcon:!1,mainIcon:"add_box",iconClose:"expand_more",iconOpen:"expand_less",isOpen:!1,disabled:!1,hasMenu:!1,dropdownPosition:"bottom-start"},render:t=>s`
    <dss-split-button 
        size="${t.size}" 
        variant="${t.variant}" 
        label="${t.text}"
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
            <dss-split-button variant="primary" label="Button" size="lg"></dss-split-button>
            <dss-split-button variant="primary" label="Button" size="md"></dss-split-button>
            <dss-split-button variant="primary" label="Button" size="sm"></dss-split-button>
    `,decorators:[e(n,"split-button-sizes-style")]},a={tags:["!dev"],render:()=>s`
            <dss-split-button variant="primary" label="Button"></dss-split-button>
            <dss-split-button variant="secondary" label="Button"></dss-split-button>
    `,decorators:[e(n,"split-button-types-style")]},r={tags:["!dev"],render:()=>s`
            <dss-split-button variant="primary" label="Button" isOpen></dss-split-button>
            <dss-split-button variant="secondary" label="Button" isOpen></dss-split-button>
    `,decorators:[e(n,"split-button-active-style")]},l={tags:["!dev"],render:()=>s`
            <dss-split-button variant="primary" label="Button" disabled></dss-split-button>
            <dss-split-button variant="secondary" label="Button" disabled></dss-split-button>
    `,decorators:[e(n,"split-button-disabled-style")]},d={tags:["!dev"],render:()=>s`
            <div style="height:250px">
                <dss-split-button variant="primary" label="Button" hasMenu>
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
            <dss-split-button variant="primary" label="Button" size="lg" icon="add_box"></dss-split-button>
            <dss-split-button variant="primary" label="Button" size="md" icon="add_box"></dss-split-button>
            <dss-split-button variant="primary" label="Button" size="sm" icon="add_box"></dss-split-button>
    `,decorators:[e(n,"split-button-icons-style")]},c={tags:["!dev"],render:()=>s`
      <dss-split-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-split-button>
    `,decorators:[e(n,"split-button-max-width-style")]},m={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <div style="position: relative">
                    <dss-split-button size="md" icon="add_box" label="Label"></dss-split-button>
                    <dss-notification-badge value="3" status="error" style="position: absolute; top: -6px; left: -6px; z-index: 900"></dss-notification-badge>
                </div>
                <div style="position: relative">
                    <dss-split-button size="sm" icon="add_box" label="Label"></dss-split-button>
                    <dss-notification-badge dot status="error" style="position: absolute; top: -6px; left: -6px; z-index: 900"></dss-notification-badge>
                </div>
            </div>
        `,decorators:[e(n,"split-button-notification-style")]},p={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-button variant="secondary" label="Focus" @click=${()=>{const b=document.querySelector("#manual-focus-demo");b&&b.focus()}}></dss-button>
                <dss-split-button 
                    id="manual-focus-demo"
                    variant="primary" 
                    text="Button"
                ></dss-split-button>
            </div>
        `,decorators:[e(n,"split-button-focus-style")]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        label="\${args.text}"
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" label="Button" size="lg"></dss-split-button>
            <dss-split-button variant="primary" label="Button" size="md"></dss-split-button>
            <dss-split-button variant="primary" label="Button" size="sm"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-sizes-style')]
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" label="Button"></dss-split-button>
            <dss-split-button variant="secondary" label="Button"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-types-style')]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" label="Button" isOpen></dss-split-button>
            <dss-split-button variant="secondary" label="Button" isOpen></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-active-style')]
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" label="Button" disabled></dss-split-button>
            <dss-split-button variant="secondary" label="Button" disabled></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-disabled-style')]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div style="height:250px">
                <dss-split-button variant="primary" label="Button" hasMenu>
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-split-button variant="primary" label="Button" size="lg" icon="add_box"></dss-split-button>
            <dss-split-button variant="primary" label="Button" size="md" icon="add_box"></dss-split-button>
            <dss-split-button variant="primary" label="Button" size="sm" icon="add_box"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-icons-style')]
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-split-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-split-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-max-width-style')]
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <div style="position: relative">
                    <dss-split-button size="md" icon="add_box" label="Label"></dss-split-button>
                    <dss-notification-badge value="3" status="error" style="position: absolute; top: -6px; left: -6px; z-index: 900"></dss-notification-badge>
                </div>
                <div style="position: relative">
                    <dss-split-button size="sm" icon="add_box" label="Label"></dss-split-button>
                    <dss-notification-badge dot status="error" style="position: absolute; top: -6px; left: -6px; z-index: 900"></dss-notification-badge>
                </div>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'split-button-notification-style')]
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const v=["Playground","Sizes","Types","Active","Disabled","Menu","Icons","MaxWidth","Notification","Focus"],x=Object.freeze(Object.defineProperty({__proto__:null,Active:r,Disabled:l,Focus:p,Icons:u,MaxWidth:c,Menu:d,Notification:m,Playground:o,Sizes:i,Types:a,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{r as A,l as D,p as F,u as I,d as M,m as N,o as P,x as S,a as T,i as a,c as b};
