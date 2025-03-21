import{x as o}from"./lit-html-B2eaWknC.js";const l={title:"Components/Header Menu Patient",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},disabled:{name:"Deshabilitar",control:{type:"boolean"}},name:{name:"Nom del pacient"},surname:{name:"Cognom del pacient"},cip:{name:"CIP del paciente"},age:{name:"Edat del pacient"},gender:{name:"Gènere del pacient"}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-35109&m=dev"}},args:{size:"lg",disabled:!1,name:"John",surname:"Doe",cip:"CIP",age:"Edat",gender:"Gènere"},render:e=>o`
        <div style="width:600px;display:flex;justify-content:center;margin: 0 auto;">
        <dss-header-menu-patient 
            size="${e.size}"
            ?disabled=${e.disabled}
            name="${e.name} ${e.surname}"
            cip="${e.cip}"
            age="${e.age}"
            gender="${e.gender}">
          <dss-avatar size="xl" name="${e.name}" surname="${e.surname}" slot="avatar"></dss-avatar>
        </dss-header-menu-patient>
        </div>
      `},n={tags:["!dev"],render:()=>o`
      
    `};var r,s,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-35109&m=dev'
    }
  },
  args: {
    size: 'lg',
    disabled: false,
    name: 'John',
    surname: 'Doe',
    cip: 'CIP',
    age: 'Edat',
    gender: 'Gènere'
  },
  render: (args: any) => {
    return html\`
        <div style="width:600px;display:flex;justify-content:center;margin: 0 auto;">
        <dss-header-menu-patient 
            size="\${args.size}"
            ?disabled=\${args.disabled}
            name="\${args.name} \${args.surname}"
            cip="\${args.cip}"
            age="\${args.age}"
            gender="\${args.gender}">
          <dss-avatar size="xl" name="\${args.name}" surname="\${args.surname}" slot="avatar"></dss-avatar>
        </dss-header-menu-patient>
        </div>
      \`;
  }
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var d,i,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      
    \`;
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const p=["Playground","Xxxxxx"],c=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,Xxxxxx:n,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{a as P,c as S};
