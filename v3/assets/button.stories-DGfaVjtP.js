import{x as s}from"./iframe-DIl293iJ.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const n=`
    .wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 0;
    }
`,y={title:"Components/Button",component:"dss-button",argTypes:{label:{name:"Label",description:"Text del botó"},variant:{name:"Variant",description:"Variant del botó",control:{type:"select"},options:["primary","secondary","subtle"]},status:{name:"Status",description:"Estat del botó",control:{type:"select"},options:["default","danger","warning","success","info"]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showIcon:{name:"Control: showIcon",description:"Mostrar icona",control:{type:"boolean"}},side:{name:"iconPosition",description:"Costat",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},onlyIcon:{name:"onlyIcon",description:"Botó només icona",control:{type:"boolean"},if:{arg:"showIcon"}},icon:{name:"icon",description:"Icona",if:{arg:"showIcon"}},disabled:{name:"disabled",description:"Deshabilitat"}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev"}},args:{label:"Button",variant:"primary",status:"default",size:"md",showIcon:!1,side:"left",onlyIcon:!1,icon:"add_box",disabled:!1},render:t=>s`
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
        `},o={tags:["!dev"],render:()=>s`
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
    `,decorators:[e(n,"button-variants-style")]},r={tags:["!dev"],render:()=>v("danger"),decorators:[e(n,"button-variants-style")]},d={tags:["!dev"],render:()=>v("warning"),decorators:[e(n,"button-variants-style")]},i={tags:["!dev"],render:()=>v("success"),decorators:[e(n,"button-variants-style")]},l={tags:["!dev"],render:()=>v("info"),decorators:[e(n,"button-variants-style")]},v=t=>s`
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
    `},b={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Sense icona"></dss-button>
    `},c={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    `},m={tags:["!dev"],render:()=>s`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    `},p={tags:["!dev"],render:()=>s`
            <dss-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
        `,decorators:[e(n,"button-max-width-style")]},g={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Button" icon="add_box" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon loading></dss-button>
    `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Sense icona"></dss-button>
    \`;
  }
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    \`;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
            <dss-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-max-width-style')]
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Button" icon="add_box" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon loading></dss-button>
    \`;
  }
}`,...g.parameters?.docs?.source}}};const S=["Playground","Variant","Danger","Warning","Success","Info","Size","TextNoIcon","TextIcon","IconNoText","MaxWidth","Loading"],I=Object.freeze(Object.defineProperty({__proto__:null,Danger:r,IconNoText:m,Info:l,Loading:g,MaxWidth:p,Playground:a,Size:u,Success:i,TextIcon:c,TextNoIcon:b,Variant:o,Warning:d,__namedExportsOrder:S,default:y},Symbol.toStringTag,{value:"Module"}));export{r as D,l as I,g as L,p as M,a as P,I as S,b as T,o as V,d as W,i as a,u as b,c,m as d};
