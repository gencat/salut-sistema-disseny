import{x as m}from"./lit-html-B2eaWknC.js";const l={title:"Components/Header Menu Patient",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},disabled:{name:"Deshabilitar",control:{type:"boolean"}},name:{name:"Nom del pacient"},surname:{name:"Cognom del pacient"},cip:{name:"CIP del paciente"},age:{name:"Edat del pacient"},gender:{name:"Gènere del pacient"}},parameters:{layout:"centered"}},a={args:{size:"lg",disabled:!1,name:"John",surname:"Doe",cip:"CIP",age:"Edat",gender:"Gènere"},render:e=>m`
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
      `},r={tags:["!dev"],render:()=>m`
      
    `};var n,s,t;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var d,i,o;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      
    \`;
  }
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const p=["Playground","Xxxxxx"],u=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,Xxxxxx:r,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{a as P,u as S};
