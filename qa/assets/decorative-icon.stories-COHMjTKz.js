import{x as e}from"./lit-html-D6cejpwM.js";const h={title:"Components/Decorative Icon",argTypes:{icon:{name:"Icona",description:"Icona a mostrar."},state:{name:"Estat",description:"Estat de la icona.",control:{type:"select"},options:["default","info","success","error"],defaultValue:"default"},size:{name:"Mida",description:"Mida de la icona.",control:{type:"radio"},options:["sm","md","lg","xl"],defaultValue:"md"},disabled:{name:"Desactivat",description:"Desactiva la icona.",control:{type:"boolean"},defaultValue:!1}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5573&m=dev"}},args:{icon:"add_box",state:"default",size:"md",disabled:!1},render:n=>e`
    <dss-decorative-icon icon=${n.icon} state=${n.state} size=${n.size} ?disabled=${n.disabled}></dss-decorative-icon>
  `},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="xl"></dss-decorative-icon>
      </div>
    `},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="info" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="xl"></dss-decorative-icon>
      </div>
    `},i={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="success" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="xl"></dss-decorative-icon>
      </div>
    `},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="error" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="error" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="error" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="error" size="xl"></dss-decorative-icon>
      </div>
    `},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" size="sm" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="md" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="lg" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="xl" disabled></dss-decorative-icon>
      </div>
    `};var r,t,v;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(v=(t=s.parameters)==null?void 0:t.docs)==null?void 0:v.source}}};var l,m,p;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
  }
}`,...(p=(m=d.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,u,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  }
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var z,_,g;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
  }
}`,...(g=(_=i.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var f,S,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="error" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="error" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="error" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="error" size="xl"></dss-decorative-icon>
      </div>
    \`;
  }
}`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var y,D,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  }
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const E=["Playground","ByDefault","Info","Success","ErrorState","Disabled"],P=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:d,Disabled:c,ErrorState:a,Info:o,Playground:s,Success:i,__namedExportsOrder:E,default:h},Symbol.toStringTag,{value:"Module"}));export{d as B,c as D,a as E,o as I,s as P,P as S,i as a};
