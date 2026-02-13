import{x as s}from"./iframe-DLVb3rJw.js";const u={title:"Components/Angular/Input Switch",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showLabel:{name:"Mostrar Label",control:{type:"boolean"}},label:{name:"Label",if:{arg:"showLabel"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=253-7021&m=dev"}},args:{size:"md",showLabel:!1,label:"Switch",disabled:!1},render:t=>{const o=t.showLabel?t.label:null;return s`
      <dss-ng-input-switch size="${t.size}" label="${o}">
        ${t.showLabel?s`
            <input slot="input" id="mySwitchCanvas" type="checkbox" ?disabled=${t.disabled}/>
            <label slot="label" for="mySwitchCanvas">${t.label}</label>
          `:s`
            <input slot="input" type="checkbox" aria-label="my switch label" ?disabled=${t.disabled}/>
          `}
      </dss-ng-input-switch>
    `}},i={tags:["!dev"],render:()=>s`
     <dss-ng-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox"/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox" checked/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox" disabled/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox" disabled checked/>
  </dss-ng-input-switch> 
    `},n={tags:["!dev"],render:()=>s`
        <dss-ng-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox"/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox" checked/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox" disabled/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox" disabled checked/>
  </dss-ng-input-switch>
    `},c={tags:["!dev"],render:()=>s`
      <dss-ng-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox"/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox" checked/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox" disabled/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox" disabled checked/>
  </dss-ng-input-switch>
    `},l={tags:["!dev"],render:()=>s`
      <dss-ng-input-switch size="sm">
    <input slot="input" id="switchSm1" type="checkbox"/>
    <label slot="label" for="switchSm1">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="sm">
    <input slot="input" id="switchSm2" type="checkbox" checked/>
    <label slot="label" for="switchSm2">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="sm">
    <input slot="input" id="switchSm3" type="checkbox" disabled/>
    <label slot="label" for="switchSm3">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="sm">
    <input slot="input" id="switchSm4" type="checkbox" checked disabled/>
    <label slot="label" for="switchSm4">Switch</label>
  </dss-ng-input-switch>
    `},a={tags:["!dev"],render:()=>s`
      <dss-ng-input-switch size="md">
    <input slot="input" id="switchMd1" type="checkbox"/>
    <label slot="label" for="switchMd1">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="md">
    <input slot="input" id="switchMd2" type="checkbox" checked/>
    <label slot="label" for="switchMd2">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="md">
    <input slot="input" id="switchMd3" type="checkbox" disabled/>
    <label slot="label" for="switchMd3">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="md">
    <input slot="input" id="switchMd4" type="checkbox" checked disabled/>
    <label slot="label" for="switchMd4">Switch</label>
  </dss-ng-input-switch>
    `},d={tags:["!dev"],render:()=>s`
      <dss-ng-input-switch size="lg">
    <input slot="input" id="switchLg1" type="checkbox"/>
    <label slot="label" for="switchLg1">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="lg">
    <input slot="input" id="switchLg2" type="checkbox" checked/>
    <label slot="label" for="switchLg2">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="lg">
    <input slot="input" id="switchLg3" type="checkbox" disabled/>
    <label slot="label" for="switchLg3">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="lg">
    <input slot="input" id="switchLg4" type="checkbox" checked disabled/>
    <label slot="label" for="switchLg4">Switch</label>
  </dss-ng-input-switch>
    `},p={tags:["!dev"],render:()=>s`
      <dss-ng-input-switch size="md">
    <input slot="input" id="switchMd1" type="checkbox" checked/>
    <label slot="label" for="switchMd1">Checked atribut</label>
  </dss-ng-input-switch>
    `},h={tags:["!dev"],render:()=>s`
      <dss-ng-input-switch size="md" checked>
    <input slot="input" id="switchMd1" type="checkbox"/>
    <label slot="label" for="switchMd1">Checked propietat</label>
  </dss-ng-input-switch>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=253-7021&m=dev'
    }
  },
  args: {
    size: 'md',
    showLabel: false,
    label: 'Switch',
    disabled: false
  },
  render: (args: any) => {
    const label = args.showLabel ? args.label : null;
    return html\`
      <dss-ng-input-switch size="\${args.size}" label="\${label}">
        \${args.showLabel ? html\`
            <input slot="input" id="mySwitchCanvas" type="checkbox" ?disabled=\${args.disabled}/>
            <label slot="label" for="mySwitchCanvas">\${args.label}</label>
          \` : html\`
            <input slot="input" type="checkbox" aria-label="my switch label" ?disabled=\${args.disabled}/>
          \`}
      </dss-ng-input-switch>
    \`;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-ng-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox"/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox" checked/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox" disabled/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox" disabled checked/>
  </dss-ng-input-switch> 
    \`;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-ng-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox"/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox" checked/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox" disabled/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox" disabled checked/>
  </dss-ng-input-switch>
    \`;
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox"/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox" checked/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox" disabled/>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox" disabled checked/>
  </dss-ng-input-switch>
    \`;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-input-switch size="sm">
    <input slot="input" id="switchSm1" type="checkbox"/>
    <label slot="label" for="switchSm1">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="sm">
    <input slot="input" id="switchSm2" type="checkbox" checked/>
    <label slot="label" for="switchSm2">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="sm">
    <input slot="input" id="switchSm3" type="checkbox" disabled/>
    <label slot="label" for="switchSm3">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="sm">
    <input slot="input" id="switchSm4" type="checkbox" checked disabled/>
    <label slot="label" for="switchSm4">Switch</label>
  </dss-ng-input-switch>
    \`;
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-input-switch size="md">
    <input slot="input" id="switchMd1" type="checkbox"/>
    <label slot="label" for="switchMd1">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="md">
    <input slot="input" id="switchMd2" type="checkbox" checked/>
    <label slot="label" for="switchMd2">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="md">
    <input slot="input" id="switchMd3" type="checkbox" disabled/>
    <label slot="label" for="switchMd3">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="md">
    <input slot="input" id="switchMd4" type="checkbox" checked disabled/>
    <label slot="label" for="switchMd4">Switch</label>
  </dss-ng-input-switch>
    \`;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-input-switch size="lg">
    <input slot="input" id="switchLg1" type="checkbox"/>
    <label slot="label" for="switchLg1">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="lg">
    <input slot="input" id="switchLg2" type="checkbox" checked/>
    <label slot="label" for="switchLg2">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="lg">
    <input slot="input" id="switchLg3" type="checkbox" disabled/>
    <label slot="label" for="switchLg3">Switch</label>
  </dss-ng-input-switch>
  <dss-ng-input-switch size="lg">
    <input slot="input" id="switchLg4" type="checkbox" checked disabled/>
    <label slot="label" for="switchLg4">Switch</label>
  </dss-ng-input-switch>
    \`;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-input-switch size="md">
    <input slot="input" id="switchMd1" type="checkbox" checked/>
    <label slot="label" for="switchMd1">Checked atribut</label>
  </dss-ng-input-switch>
    \`;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-input-switch size="md" checked>
    <input slot="input" id="switchMd1" type="checkbox"/>
    <label slot="label" for="switchMd1">Checked propietat</label>
  </dss-ng-input-switch>
    \`;
  }
}`,...h.parameters?.docs?.source}}};const r=["Playground","Small","Medium","Large","LabelSmall","LabelMedium","LabelLarge","Selected1","Selected2"],w=Object.freeze(Object.defineProperty({__proto__:null,LabelLarge:d,LabelMedium:a,LabelSmall:l,Large:c,Medium:n,Playground:e,Selected1:p,Selected2:h,Small:i,__namedExportsOrder:r,default:u},Symbol.toStringTag,{value:"Module"}));export{c as L,n as M,e as P,w as S,i as a,l as b,a as c,d,p as e,h as f};
