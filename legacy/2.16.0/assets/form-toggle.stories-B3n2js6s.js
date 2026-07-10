import{x as e}from"./lit-html-D6cejpwM.js";import{w as l}from"./storybook-decorators-DSS85Rnr.js";const s=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,D={title:"Components/Form/Toggle",argTypes:{hideLabel:{name:"Amagar label",control:{type:"boolean"}},label:{name:"Label",control:{type:"text"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},g={render:c=>e`
            <dss-form-toggle 
                name="toggle-playground" 
                label="Label" 
                ?hideLabel="${c.hideLabel}"
                ?checked="${c.checked}"
                ?disabled="${c.disabled}"
            ></dss-form-toggle>
    `,args:{validateType:!1,label:"Label",hideLabel:!1,disabled:!1,checked:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=253-7021&m=dev"}}},o={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-toggle name="toggle-sm-1" size="sm" label="My toggle" hideLabel></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-2" size="sm" label="My toggle" hideLabel checked></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-3" size="sm" label="My toggle" hideLabel disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-4" size="sm" label="My toggle" hideLabel checked disabled></dss-form-toggle>
            </div>
        `,decorators:[l(s,"toggle-sm-no-label-style")]},t={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-form-toggle name="toggle-md-1" size="md" label="My toggle" hideLabel></dss-form-toggle>
                <dss-form-toggle name="toggle-md-2" size="md" label="My toggle" hideLabel checked></dss-form-toggle>
                <dss-form-toggle name="toggle-md-3" size="md" label="My toggle" hideLabel disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-md-4" size="md" label="My toggle" hideLabel checked disabled></dss-form-toggle>
            </div>
    `,decorators:[l(s,"toggle-md-no-label-style")]},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-form-toggle name="toggle-lg-1" size="lg" label="My toggle" hideLabel></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-2" size="lg" label="My toggle" hideLabel checked></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-3" size="lg" label="My toggle" hideLabel disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-4" size="lg" label="My toggle" hideLabel checked disabled></dss-form-toggle>
            </div>
    `,decorators:[l(s,"toggle-lg-no-label-style")]},d={tags:["!dev"],render:()=>e`
     <div class="wrapper">
                <dss-form-toggle name="toggle-sm-1" size="sm" label="My toggle"></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-2" size="sm" label="My toggle" checked></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-3" size="sm" label="My toggle" disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-sm-4" size="sm" label="My toggle" checked disabled></dss-form-toggle>
            </div>
    `,decorators:[l(s,"toggle-sm-style")]},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-form-toggle name="toggle-md-1" size="md" label="My toggle"></dss-form-toggle>
                <dss-form-toggle name="toggle-md-2" size="md" label="My toggle" checked></dss-form-toggle>
                <dss-form-toggle name="toggle-md-3" size="md" label="My toggle" disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-md-4" size="md" label="My toggle" checked disabled></dss-form-toggle>
            </div>
    `,decorators:[l(s,"toggle-md-style")]},m={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-form-toggle name="toggle-lg-1" size="lg" label="My toggle"></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-2" size="lg" label="My toggle" checked></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-3" size="lg" label="My toggle" disabled></dss-form-toggle>
                <dss-form-toggle name="toggle-lg-4" size="lg" label="My toggle" checked disabled></dss-form-toggle>
            </div>
    `,decorators:[l(s,"toggle-lg-style")]},i={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const n=document.querySelector("#manual-focus-demo");n&&n.focus()}}></dss-button>
                <dss-form-toggle 
                    id="manual-focus-demo"
                    name="toggle-focus" 
                    size="md" 
                    label="Toggle amb focus"
                ></dss-form-toggle>
            </div>
        `,decorators:[l(s,"toggle-focus-style")]};var b,f,p;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(p=(f=g.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var y,u,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var M,z,L;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(L=(z=t.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var v,w,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,F,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(T=(F=d.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var x,$,_;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(_=($=r.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var P,q,E;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(q=m.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var j,A,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
                <dss-button label="Focus" @click=\${forceFocus}></dss-button>
                <dss-form-toggle 
                    id="manual-focus-demo"
                    name="toggle-focus" 
                    size="md" 
                    label="Toggle amb focus"
                ></dss-form-toggle>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-focus-style')]
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const H=["Playground","Small","Medium","Large","LabelSmall","LabelMedium","LabelLarge","Focus"],J=Object.freeze(Object.defineProperty({__proto__:null,Focus:i,LabelLarge:m,LabelMedium:r,LabelSmall:d,Large:a,Medium:t,Playground:g,Small:o,__namedExportsOrder:H,default:D},Symbol.toStringTag,{value:"Module"}));export{i as F,a as L,t as M,g as P,J as S,o as a,d as b,r as c,m as d};
