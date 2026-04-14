import{x as e}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
`,$={title:"Components/Decorative Icon",argTypes:{icon:{name:"Icona",description:"Icona a mostrar."},state:{name:"Estat",description:"Estat de la icona.",control:{type:"select"},options:["default","info","success","danger"],defaultValue:"default"},size:{name:"Mida",description:"Mida de la icona.",control:{type:"radio"},options:["sm","md","lg","xl"],defaultValue:"md"},disabled:{name:"Desactivat",description:"Desactiva la icona.",control:{type:"boolean"},defaultValue:!1}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5573&m=dev"}},args:{icon:"add_box",state:"default",size:"md",disabled:!1},render:n=>e`
    <dss-decorative-icon icon=${n.icon} state=${n.state} size=${n.size} ?disabled=${n.disabled}></dss-decorative-icon>
  `},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="xl"></dss-decorative-icon>
      </div>
    `,decorators:[t(r,"decorative-icon-default-style")]},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="info" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="xl"></dss-decorative-icon>
      </div>
    `,decorators:[t(r,"decorative-icon-info-style")]},i={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="success" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="xl"></dss-decorative-icon>
      </div>
    `,decorators:[t(r,"decorative-icon-success-style")]},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="danger" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="danger" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="danger" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="danger" size="xl"></dss-decorative-icon>
      </div>
    `,decorators:[t(r,"decorative-icon-error-style")]},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" size="sm" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="md" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="lg" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="xl" disabled></dss-decorative-icon>
      </div>
    `,decorators:[t(r,"decorative-icon-disabled-style")]};var v,l,p;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5573&m=dev'
    }
  },
  args: {
    icon: 'add_box',
    state: 'default',
    size: 'md',
    disabled: false
  },
  render: (args: any) => html\`
    <dss-decorative-icon icon=\${args.icon} state=\${args.state} size=\${args.size} ?disabled=\${args.disabled}></dss-decorative-icon>
  \`
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,b;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="xl"></dss-decorative-icon>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'decorative-icon-default-style')]
}`,...(b=(u=d.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,g,z;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="info" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="xl"></dss-decorative-icon>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'decorative-icon-info-style')]
}`,...(z=(g=o.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var _,y,f;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="success" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="xl"></dss-decorative-icon>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'decorative-icon-success-style')]
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var w,S,h;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="danger" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="danger" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="danger" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="danger" size="xl"></dss-decorative-icon>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'decorative-icon-error-style')]
}`,...(h=(S=a.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var D,I,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" size="sm" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="md" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="lg" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="xl" disabled></dss-decorative-icon>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'decorative-icon-disabled-style')]
}`,...(E=(I=c.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const P=["Playground","ByDefault","Info","Success","ErrorState","Disabled"],j=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:d,Disabled:c,ErrorState:a,Info:o,Playground:s,Success:i,__namedExportsOrder:P,default:$},Symbol.toStringTag,{value:"Module"}));export{d as B,c as D,a as E,o as I,s as P,j as S,i as a};
