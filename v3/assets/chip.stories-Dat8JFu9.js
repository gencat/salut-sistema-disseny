import{x as s}from"./iframe-PL0KlCAr.js";import{w as d}from"./storybook-decorators-DSS85Rnr.js";const i=`
 .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
    .wrapper--next {
        margin-top: 24px;
    }
`,n={title:"Components/Chip",argTypes:{label:{name:"Text"},size:{name:"Mida",control:{type:"radio"},options:["xs","sm","lg"]},selected:{name:"Seleccionat",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},disableSelect:{name:"Deshabilitar Toggle",control:{type:"boolean"}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",if:{arg:"showIcon"}},showIconButton:{name:"Mostrar botó de tancar",control:{type:"boolean"}}},parameters:{layout:"centered"}},c={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-17244&m=dev"}},args:{label:"Chip",size:"lg",selected:!1,disabled:!1,disableSelect:!1,showIcon:!1,icon:"add_box",showIconButton:!1},render:e=>s`
      <dss-chip 
        label="${e.label}"
        size="${e.size}"
        icon="${e.icon}"
        ?selected="${e.selected}"
        ?disabled="${e.disabled}"
        ?disableSelect="${e.disableSelect}"
        ?hasDelete="${e.showIconButton}"
      >
      </dss-chip>
    `},a={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-chip label="Chip" size="sm"></dss-chip>
        <dss-chip label="Chip" size="sm" selected></dss-chip>
        <dss-chip label="Chip"></dss-chip>
        <dss-chip label="Chip" selected></dss-chip>
      </div>
    `,decorators:[d(i,"chip-size-type-style")]},l={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-chip label="Chip"></dss-chip>
        <dss-chip label="Chip" selected></dss-chip>
        <dss-chip label="Chip" disabled></dss-chip>
        <dss-chip label="Chip" selected disabled></dss-chip>
      </div>
    `,decorators:[d(i,"chip-basic-style")]},p={tags:["!dev"],render:()=>s`
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
    `,decorators:[d(i,"chip-icon-style")]},o={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-chip label="Chip" hasDelete></dss-chip>
        <dss-chip label="Chip" selected hasDelete></dss-chip>
        <dss-chip label="Chip" disabled hasDelete></dss-chip>
        <dss-chip label="Chip" selected disabled hasDelete></dss-chip>
      </div>
    `,decorators:[d(i,"chip-delete-style")]},t={tags:["!dev"],render:()=>s`
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
    `,decorators:[d(i,"chip-icon-and-delete-style")]},h={tags:["!dev"],render:()=>s`
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
    `,decorators:[d(i,"chip-only-icon-style")]},r={tags:["!dev"],render:()=>s`
      <div class="wrapper">
                <dss-chip icon="add_box" label="Chip" size="lg" disableSelect></dss-chip>
                <dss-chip icon="add_box" label="Chip" size="lg" selected disableSelect></dss-chip>
                <dss-chip icon="add_box" size="lg" disableSelect></dss-chip>
                <dss-chip icon="add_box" size="lg" selected disableSelect></dss-chip>
      </div>
    `,decorators:[d(i,"chip-only-icon-style")]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-chip icon="add_box" label="Chip" size="lg" disableSelect></dss-chip>
                <dss-chip icon="add_box" label="Chip" size="lg" selected disableSelect></dss-chip>
                <dss-chip icon="add_box" size="lg" disableSelect></dss-chip>
                <dss-chip icon="add_box" size="lg" selected disableSelect></dss-chip>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'chip-only-icon-style')]
}`,...r.parameters?.docs?.source}}};const b=["Playground","SizeType","Basic","Icon","Delete","IconAndDelete","OnlyIcon","NoInteractive"],_=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Delete:o,Icon:p,IconAndDelete:t,NoInteractive:r,OnlyIcon:h,Playground:c,SizeType:a,__namedExportsOrder:b,default:n},Symbol.toStringTag,{value:"Module"}));export{l as B,o as D,p as I,r as N,h as O,c as P,_ as S,a,t as b};
