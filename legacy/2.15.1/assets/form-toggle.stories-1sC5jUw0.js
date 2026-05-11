import{x as e}from"./lit-html-D6cejpwM.js";import{w as l}from"./storybook-decorators-DSS85Rnr.js";const g=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,j={title:"Components/Form/Toggle",argTypes:{hideLabel:{name:"Amagar label",control:{type:"boolean"}},label:{name:"Label",control:{type:"text"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},s={render:i=>e`
            <dss-form-toggle 
                name="toggle-playground" 
                label="Label" 
                ?hideLabel="${i.hideLabel}"
                ?checked="${i.checked}"
                ?disabled="${i.disabled}"
            ></dss-form-toggle>
    `,args:{validateType:!1,label:"Label",hideLabel:!1,disabled:!1,checked:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=253-7021&m=dev"}}},o={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-toggle name="toggle-sm-1" size="sm" label="My toggle" hideLabel></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-2" size="sm" label="My toggle" hideLabel checked></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-3" size="sm" label="My toggle" hideLabel disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-4" size="sm" label="My toggle" hideLabel checked disabled></dss-form-toggle>
            </div>
        `,decorators:[l(g,"toggle-sm-no-label-style")]},t={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-toggle name="toggle-md-1" size="md" label="My toggle" hideLabel></dss-form-toggle>
                <dss-form-toggle name="toggle-md-2" size="md" label="My toggle" hideLabel checked></dss-form-toggle>
                <dss-form-toggle name="toggle-md-3" size="md" label="My toggle" hideLabel disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-md-4" size="md" label="My toggle" hideLabel checked disabled></dss-form-toggle>
            </div>
    `,decorators:[l(g,"toggle-md-no-label-style")]},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-form-toggle name="toggle-lg-1" size="lg" label="My toggle" hideLabel></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-2" size="lg" label="My toggle" hideLabel checked></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-3" size="lg" label="My toggle" hideLabel disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-4" size="lg" label="My toggle" hideLabel checked disabled></dss-form-toggle>
            </div>
    `,decorators:[l(g,"toggle-lg-no-label-style")]},d={tags:["!dev"],render:()=>e`
     <div class="wrapper">
                <dss-form-toggle name="toggle-sm-1" size="sm" label="My toggle"></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-2" size="sm" label="My toggle" checked></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-3" size="sm" label="My toggle" disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-4" size="sm" label="My toggle" checked disabled></dss-form-toggle>
            </div>
    `,decorators:[l(g,"toggle-sm-style")]},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-form-toggle name="toggle-md-1" size="md" label="My toggle"></dss-form-toggle>
                <dss-form-toggle name="toggle-md-2" size="md" label="My toggle" checked></dss-form-toggle>
                <dss-form-toggle name="toggle-md-3" size="md" label="My toggle" disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-md-4" size="md" label="My toggle" checked disabled></dss-form-toggle>
            </div>
    `,decorators:[l(g,"toggle-md-style")]},m={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-form-toggle name="toggle-lg-1" size="lg" label="My toggle"></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-2" size="lg" label="My toggle" checked></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-3" size="lg" label="My toggle" disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-4" size="lg" label="My toggle" checked disabled></dss-form-toggle>
            </div>
    `,decorators:[l(g,"toggle-lg-style")]};var c,n,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            <dss-form-toggle 
                name="toggle-playground" 
                label="Label" 
                ?hideLabel="\${args.hideLabel}"
                ?checked="\${args.checked}"
                ?disabled="\${args.disabled}"
            ></dss-form-toggle>
    \`;
  },
  args: {
    validateType: false,
    label: 'Label',
    hideLabel: false,
    disabled: false,
    checked: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=253-7021&m=dev'
    }
  }
}`,...(b=(n=s.parameters)==null?void 0:n.docs)==null?void 0:b.source}}};var f,p,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-toggle name="toggle-sm-1" size="sm" label="My toggle" hideLabel></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-2" size="sm" label="My toggle" hideLabel checked></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-3" size="sm" label="My toggle" hideLabel disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-4" size="sm" label="My toggle" hideLabel checked disabled></dss-form-toggle>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-sm-no-label-style')]
}`,...(y=(p=o.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var h,M,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-form-toggle name="toggle-md-1" size="md" label="My toggle" hideLabel></dss-form-toggle>
                <dss-form-toggle name="toggle-md-2" size="md" label="My toggle" hideLabel checked></dss-form-toggle>
                <dss-form-toggle name="toggle-md-3" size="md" label="My toggle" hideLabel disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-md-4" size="md" label="My toggle" hideLabel checked disabled></dss-form-toggle>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-md-no-label-style')]
}`,...(u=(M=t.parameters)==null?void 0:M.docs)==null?void 0:u.source}}};var z,L,v;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-form-toggle name="toggle-lg-1" size="lg" label="My toggle" hideLabel></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-2" size="lg" label="My toggle" hideLabel checked></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-3" size="lg" label="My toggle" hideLabel disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-4" size="lg" label="My toggle" hideLabel checked disabled></dss-form-toggle>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-lg-no-label-style')]
}`,...(v=(L=a.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var w,S,k;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="wrapper">
                <dss-form-toggle name="toggle-sm-1" size="sm" label="My toggle"></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-2" size="sm" label="My toggle" checked></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-3" size="sm" label="My toggle" disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-4" size="sm" label="My toggle" checked disabled></dss-form-toggle>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-sm-style')]
}`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var x,T,_;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-form-toggle name="toggle-md-1" size="md" label="My toggle"></dss-form-toggle>
                <dss-form-toggle name="toggle-md-2" size="md" label="My toggle" checked></dss-form-toggle>
                <dss-form-toggle name="toggle-md-3" size="md" label="My toggle" disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-md-4" size="md" label="My toggle" checked disabled></dss-form-toggle>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-md-style')]
}`,...(_=(T=r.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var P,$,F;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-form-toggle name="toggle-lg-1" size="lg" label="My toggle"></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-2" size="lg" label="My toggle" checked></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-3" size="lg" label="My toggle" disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-4" size="lg" label="My toggle" checked disabled></dss-form-toggle>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-lg-style')]
}`,...(F=($=m.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};const A=["Playground","Small","Medium","Large","LabelSmall","LabelMedium","LabelLarge"],E=Object.freeze(Object.defineProperty({__proto__:null,LabelLarge:m,LabelMedium:r,LabelSmall:d,Large:a,Medium:t,Playground:s,Small:o,__namedExportsOrder:A,default:j},Symbol.toStringTag,{value:"Module"}));export{a as L,t as M,s as P,E as S,o as a,d as b,r as c,m as d};
