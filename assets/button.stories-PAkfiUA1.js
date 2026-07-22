import{x as s}from"./iframe-Dc24GPd4.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const o=`
    .wrapper {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 8px 0;
    }
    .wrapper-width {
        width: 600px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 16px;
        padding: 8px;
        border: 1px dashed var(--color-neutral-100);
        text-align: center;
    }
`,x={title:"Components/Button",component:"dss-button",argTypes:{label:{name:"Label",description:"Text del botó"},variant:{name:"Variant",description:"Variant del botó",control:{type:"select"},options:["primary","secondary","subtle"]},status:{name:"Status",description:"Estat del botó",control:{type:"select"},options:["default","danger","warning","success","info"]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showIcon:{name:"Control: showIcon",description:"Mostrar icona",control:{type:"boolean"}},side:{name:"iconPosition",description:"Costat",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},onlyIcon:{name:"onlyIcon",description:"Botó només icona",control:{type:"boolean"},if:{arg:"showIcon"}},icon:{name:"icon",description:"Icona",if:{arg:"showIcon"}},disabled:{name:"disabled",description:"Deshabilitat"}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev"}},args:{label:"Button",variant:"primary",status:"default",size:"md",showIcon:!1,side:"left",onlyIcon:!1,icon:"add_box",disabled:!1},render:t=>s`
            <dss-button 
                label="${t.label}" 
                icon="${t.icon??void 0}"
                iconPosition="${t.icon?t.side:"left"}"
                size="${t.size}" 
                variant="${t.variant}" 
                status="${t.status}"
                ?onlyIcon=${t.onlyIcon}
                ?disabled=${t.disabled}>
            </dss-button>
        `},a={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-button variant="primary" label="Primary"></dss-button>
                <dss-button variant="secondary" label="Secondary"></dss-button>
                <dss-button variant="subtle" label="Subtle"></dss-button>
            </div>
            <div class="wrapper">
                <dss-button variant="primary" label="Primary" disabled></dss-button>
                <dss-button variant="secondary" label="Secondary" disabled></dss-button>
                <dss-button variant="subtle" label="Subtle" disabled></dss-button>
            </div>
    `,decorators:[e(o,"button-variants-style")]},r={tags:["!dev"],render:()=>w("danger"),decorators:[e(o,"button-variants-style")]},d={tags:["!dev"],render:()=>w("warning"),decorators:[e(o,"button-variants-style")]},i={tags:["!dev"],render:()=>w("success"),decorators:[e(o,"button-variants-style")]},l={tags:["!dev"],render:()=>w("info"),decorators:[e(o,"button-variants-style")]},w=t=>s`
        <div class="wrapper">
            <dss-button variant="primary" status="${t}" label="Primary"></dss-button>
            <dss-button variant="secondary" status="${t}" label="Secondary"></dss-button>
            <dss-button variant="subtle" status="${t}" label="Subtle"></dss-button>
        </div>
        <div class="wrapper">
            <dss-button variant="primary" status="${t}" label="Primary" disabled></dss-button>
            <dss-button variant="secondary" status="${t}" label="Secondary" disabled></dss-button>
            <dss-button variant="subtle" status="${t}" label="Subtle" disabled></dss-button>
        </div>
    `,u={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-button size="sm" label="Small button"></dss-button>
                <dss-button size="md" label="Medium button"></dss-button>
                <dss-button size="lg" label="Large button"></dss-button>
            </div>
            <div class="wrapper">
                <dss-button size="sm" variant="secondary" label="Small button"></dss-button>
                <dss-button size="md" variant="secondary" label="Medium button"></dss-button>
                <dss-button size="lg" variant="secondary" label="Large button"></dss-button>
            </div>
            <div class="wrapper">
                <dss-button size="sm" variant="subtle" label="Small button"></dss-button>
                <dss-button size="md" variant="subtle" label="Medium button"></dss-button>
                <dss-button size="lg" variant="subtle" label="Large button"></dss-button>
            </div>
    `},c={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Sense icona"></dss-button>
    `},b={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    `},m={tags:["!dev"],render:()=>s`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    `},p={tags:["!dev"],render:()=>s`
            <div class="wrapper-width">
                <dss-button variant="primary" label="Default max-width: Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
            </div>
            <div class="wrapper-width">
                <dss-button fullWidth variant="primary" label="Prop fullWidth: Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
            </div>
        `,decorators:[e(o,"button-max-width-style")]},v={tags:["!dev"],render:()=>s`
            
            <dss-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
        `,decorators:[e(o,"button-max-width-style")]},g={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Button" icon="add_box" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon loading></dss-button>
    `},y={tags:["!dev"],render:()=>s`
    
            <div class="wrapper">
                <div style="position: relative">
                    <dss-button size="md" icon="add_box" label="Button"></dss-button>
                    <dss-notification-badge value="3" state="error" style="position: absolute; top: -6px; right: -6px; z-index: 900"></dss-notification-badge>
                </div>
                <div style="position: relative">
                    <dss-button size="sm" icon="add_box" label="Button"></dss-button>
                    <dss-notification-badge dot state="error" style="position: absolute; top: -6px; right: -6px; z-index: 900"></dss-notification-badge>
                </div>
            </div>
        `,decorators:[e(o,"button-notification-style")]},S={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const f=document.querySelector("#manual-focus-demo");f&&f.focus()}} variant="secondary"></dss-button>
                <dss-button 
                    id="manual-focus-demo"
                    label="Button"
                ></dss-button>
            </div>
        `,decorators:[e(o,"button-focus-style")]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev'
    }
  },
  args: {
    label: 'Button',
    variant: 'primary',
    status: 'default',
    size: 'md',
    showIcon: false,
    side: 'left',
    onlyIcon: false,
    icon: 'add_box',
    disabled: false
  },
  render: (args: {
    disabled: unknown;
    label: string;
    variant: string;
    status: string;
    size: string;
    showIcon: boolean;
    side: string;
    onlyIcon: boolean;
    iconType: string;
    icon: string;
  }) => {
    return html\`
            <dss-button 
                label="\${args.label}" 
                icon="\${args.icon ?? undefined}"
                iconPosition="\${args.icon ? args.side : 'left'}"
                size="\${args.size}" 
                variant="\${args.variant}" 
                status="\${args.status}"
                ?onlyIcon=\${args.onlyIcon}
                ?disabled=\${args.disabled}>
            </dss-button>
        \`;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-button variant="primary" label="Primary"></dss-button>
                <dss-button variant="secondary" label="Secondary"></dss-button>
                <dss-button variant="subtle" label="Subtle"></dss-button>
            </div>
            <div class="wrapper">
                <dss-button variant="primary" label="Primary" disabled></dss-button>
                <dss-button variant="secondary" label="Secondary" disabled></dss-button>
                <dss-button variant="subtle" label="Subtle" disabled></dss-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return getButtonStatus('danger');
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return getButtonStatus('warning');
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return getButtonStatus('success');
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return getButtonStatus('info');
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-button size="sm" label="Small button"></dss-button>
                <dss-button size="md" label="Medium button"></dss-button>
                <dss-button size="lg" label="Large button"></dss-button>
            </div>
            <div class="wrapper">
                <dss-button size="sm" variant="secondary" label="Small button"></dss-button>
                <dss-button size="md" variant="secondary" label="Medium button"></dss-button>
                <dss-button size="lg" variant="secondary" label="Large button"></dss-button>
            </div>
            <div class="wrapper">
                <dss-button size="sm" variant="subtle" label="Small button"></dss-button>
                <dss-button size="md" variant="subtle" label="Medium button"></dss-button>
                <dss-button size="lg" variant="subtle" label="Large button"></dss-button>
            </div>
    \`;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Sense icona"></dss-button>
    \`;
  }
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    \`;
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    \`;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper-width">
                <dss-button variant="primary" label="Default max-width: Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
            </div>
            <div class="wrapper-width">
                <dss-button fullWidth variant="primary" label="Prop fullWidth: Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-max-width-style')]
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            
            <dss-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-max-width-style')]
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Button" icon="add_box" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon loading></dss-button>
    \`;
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    
            <div class="wrapper">
                <div style="position: relative">
                    <dss-button size="md" icon="add_box" label="Button"></dss-button>
                    <dss-notification-badge value="3" state="error" style="position: absolute; top: -6px; right: -6px; z-index: 900"></dss-notification-badge>
                </div>
                <div style="position: relative">
                    <dss-button size="sm" icon="add_box" label="Button"></dss-button>
                    <dss-notification-badge dot state="error" style="position: absolute; top: -6px; right: -6px; z-index: 900"></dss-notification-badge>
                </div>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-notification-style')]
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
                <dss-button label="Focus" @click=\${forceFocus} variant="secondary"></dss-button>
                <dss-button 
                    id="manual-focus-demo"
                    label="Button"
                ></dss-button>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-focus-style')]
}`,...S.parameters?.docs?.source}}};const z=["Playground","Variant","Danger","Warning","Success","Info","Size","TextNoIcon","TextIcon","IconNoText","MaxWidth","MaxWidth1","Loading","Notification","Focus"],_=Object.freeze(Object.defineProperty({__proto__:null,Danger:r,Focus:S,IconNoText:m,Info:l,Loading:g,MaxWidth:p,MaxWidth1:v,Notification:y,Playground:n,Size:u,Success:i,TextIcon:b,TextNoIcon:c,Variant:a,Warning:d,__namedExportsOrder:z,default:x},Symbol.toStringTag,{value:"Module"}));export{r as D,S as F,l as I,g as L,p as M,y as N,n as P,_ as S,c as T,a as V,d as W,i as a,u as b,b as c,m as d};
