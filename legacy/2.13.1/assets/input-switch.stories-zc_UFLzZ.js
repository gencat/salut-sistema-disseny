import{x as s}from"./lit-html-D6cejpwM.js";const A={title:"Components/Input Switch",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showLabel:{name:"Mostrar Label",control:{type:"boolean"}},label:{name:"Label",if:{arg:"showLabel"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=253-7021&m=dev"}},args:{size:"md",showLabel:!1,label:"Switch",disabled:!1},render:t=>{const q=t.showLabel?t.label:null;return s`
      <dss-input-switch size="${t.size}" label="${q}">
        ${t.showLabel?s`
            <input slot="input" id="mySwitchCanvas" type="checkbox" ?disabled=${t.disabled}/>
            <label slot="label" for="mySwitchCanvas">${t.label}</label>
          `:s`
            <input slot="input" type="checkbox" aria-label="my switch label" ?disabled=${t.disabled}/>
          `}
      </dss-input-switch>
    `}},i={tags:["!dev"],render:()=>s`
     <dss-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox"/>
  </dss-input-switch>
  <dss-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox" checked/>
  </dss-input-switch>
  <dss-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox" disabled/>
  </dss-input-switch>
  <dss-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox" disabled checked/>
  </dss-input-switch> 
    `},n={tags:["!dev"],render:()=>s`
        <dss-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox"/>
  </dss-input-switch>
  <dss-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox" checked/>
  </dss-input-switch>
  <dss-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox" disabled/>
  </dss-input-switch>
  <dss-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox" disabled checked/>
  </dss-input-switch>
    `},c={tags:["!dev"],render:()=>s`
      <dss-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox"/>
  </dss-input-switch>
  <dss-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox" checked/>
  </dss-input-switch>
  <dss-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox" disabled/>
  </dss-input-switch>
  <dss-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox" disabled checked/>
  </dss-input-switch>
    `},l={tags:["!dev"],render:()=>s`
      <dss-input-switch size="sm">
    <input slot="input" id="switchSm1" type="checkbox"/>
    <label slot="label" for="switchSm1">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="sm">
    <input slot="input" id="switchSm2" type="checkbox" checked/>
    <label slot="label" for="switchSm2">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="sm">
    <input slot="input" id="switchSm3" type="checkbox" disabled/>
    <label slot="label" for="switchSm3">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="sm">
    <input slot="input" id="switchSm4" type="checkbox" checked disabled/>
    <label slot="label" for="switchSm4">Switch</label>
  </dss-input-switch>
    `},a={tags:["!dev"],render:()=>s`
      <dss-input-switch size="md">
    <input slot="input" id="switchMd1" type="checkbox"/>
    <label slot="label" for="switchMd1">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="md">
    <input slot="input" id="switchMd2" type="checkbox" checked/>
    <label slot="label" for="switchMd2">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="md">
    <input slot="input" id="switchMd3" type="checkbox" disabled/>
    <label slot="label" for="switchMd3">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="md">
    <input slot="input" id="switchMd4" type="checkbox" checked disabled/>
    <label slot="label" for="switchMd4">Switch</label>
  </dss-input-switch>
    `},d={tags:["!dev"],render:()=>s`
      <dss-input-switch size="lg">
    <input slot="input" id="switchLg1" type="checkbox"/>
    <label slot="label" for="switchLg1">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="lg">
    <input slot="input" id="switchLg2" type="checkbox" checked/>
    <label slot="label" for="switchLg2">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="lg">
    <input slot="input" id="switchLg3" type="checkbox" disabled/>
    <label slot="label" for="switchLg3">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="lg">
    <input slot="input" id="switchLg4" type="checkbox" checked disabled/>
    <label slot="label" for="switchLg4">Switch</label>
  </dss-input-switch>
    `},p={tags:["!dev"],render:()=>s`
      <dss-input-switch size="md">
    <input slot="input" id="switchMd1" type="checkbox" checked/>
    <label slot="label" for="switchMd1">Checked atribut</label>
  </dss-input-switch>
    `},h={tags:["!dev"],render:()=>s`
      <dss-input-switch size="md" checked>
    <input slot="input" id="switchMd1" type="checkbox"/>
    <label slot="label" for="switchMd1">Checked propietat</label>
  </dss-input-switch>
    `};var o,u,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      <dss-input-switch size="\${args.size}" label="\${label}">
        \${args.showLabel ? html\`
            <input slot="input" id="mySwitchCanvas" type="checkbox" ?disabled=\${args.disabled}/>
            <label slot="label" for="mySwitchCanvas">\${args.label}</label>
          \` : html\`
            <input slot="input" type="checkbox" aria-label="my switch label" ?disabled=\${args.disabled}/>
          \`}
      </dss-input-switch>
    \`;
  }
}`,...(r=(u=e.parameters)==null?void 0:u.docs)==null?void 0:r.source}}};var b,w,m;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox"/>
  </dss-input-switch>
  <dss-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox" checked/>
  </dss-input-switch>
  <dss-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox" disabled/>
  </dss-input-switch>
  <dss-input-switch size="sm">
    <input slot="input" aria-label="my switch" type="checkbox" disabled checked/>
  </dss-input-switch> 
    \`;
  }
}`,...(m=(w=i.parameters)==null?void 0:w.docs)==null?void 0:m.source}}};var y,k,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox"/>
  </dss-input-switch>
  <dss-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox" checked/>
  </dss-input-switch>
  <dss-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox" disabled/>
  </dss-input-switch>
  <dss-input-switch size="md">
    <input slot="input" aria-label="my switch" type="checkbox" disabled checked/>
  </dss-input-switch>
    \`;
  }
}`,...(g=(k=n.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var S,z,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox"/>
  </dss-input-switch>
  <dss-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox" checked/>
  </dss-input-switch>
  <dss-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox" disabled/>
  </dss-input-switch>
  <dss-input-switch size="lg">
    <input slot="input" aria-label="my switch" type="checkbox" disabled checked/>
  </dss-input-switch>
    \`;
  }
}`,...(x=(z=c.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var f,L,M;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input-switch size="sm">
    <input slot="input" id="switchSm1" type="checkbox"/>
    <label slot="label" for="switchSm1">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="sm">
    <input slot="input" id="switchSm2" type="checkbox" checked/>
    <label slot="label" for="switchSm2">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="sm">
    <input slot="input" id="switchSm3" type="checkbox" disabled/>
    <label slot="label" for="switchSm3">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="sm">
    <input slot="input" id="switchSm4" type="checkbox" checked disabled/>
    <label slot="label" for="switchSm4">Switch</label>
  </dss-input-switch>
    \`;
  }
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var v,$,C;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input-switch size="md">
    <input slot="input" id="switchMd1" type="checkbox"/>
    <label slot="label" for="switchMd1">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="md">
    <input slot="input" id="switchMd2" type="checkbox" checked/>
    <label slot="label" for="switchMd2">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="md">
    <input slot="input" id="switchMd3" type="checkbox" disabled/>
    <label slot="label" for="switchMd3">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="md">
    <input slot="input" id="switchMd4" type="checkbox" checked disabled/>
    <label slot="label" for="switchMd4">Switch</label>
  </dss-input-switch>
    \`;
  }
}`,...(C=($=a.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var _,P,F;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input-switch size="lg">
    <input slot="input" id="switchLg1" type="checkbox"/>
    <label slot="label" for="switchLg1">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="lg">
    <input slot="input" id="switchLg2" type="checkbox" checked/>
    <label slot="label" for="switchLg2">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="lg">
    <input slot="input" id="switchLg3" type="checkbox" disabled/>
    <label slot="label" for="switchLg3">Switch</label>
  </dss-input-switch>
  <dss-input-switch size="lg">
    <input slot="input" id="switchLg4" type="checkbox" checked disabled/>
    <label slot="label" for="switchLg4">Switch</label>
  </dss-input-switch>
    \`;
  }
}`,...(F=(P=d.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var T,D,E;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input-switch size="md">
    <input slot="input" id="switchMd1" type="checkbox" checked/>
    <label slot="label" for="switchMd1">Checked atribut</label>
  </dss-input-switch>
    \`;
  }
}`,...(E=(D=p.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,O,j;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input-switch size="md" checked>
    <input slot="input" id="switchMd1" type="checkbox"/>
    <label slot="label" for="switchMd1">Checked propietat</label>
  </dss-input-switch>
    \`;
  }
}`,...(j=(O=h.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const H=["Playground","Small","Medium","Large","LabelSmall","LabelMedium","LabelLarge","Selected1","Selected2"],K=Object.freeze(Object.defineProperty({__proto__:null,LabelLarge:d,LabelMedium:a,LabelSmall:l,Large:c,Medium:n,Playground:e,Selected1:p,Selected2:h,Small:i,__namedExportsOrder:H,default:A},Symbol.toStringTag,{value:"Module"}));export{c as L,n as M,e as P,K as S,i as a,l as b,a as c,d,p as e,h as f};
