import{x as m}from"./lit-html-B2eaWknC.js";const p={title:"Components/Header Menu Patient",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},disabled:{name:"Deshabilitar",control:{type:"boolean"}},name:{name:"Nom del pacient"},surname:{name:"Cognom del pacient"},cip:{name:"CIP del paciente"},age:{name:"Edat del pacient"},gender:{name:"Gènere del pacient"},phoneMain:{name:"Telèfon principal"},phoneAlt:{name:"Telèfon alternatiu"}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-35109&m=dev"}},args:{size:"lg",disabled:!1,name:"John",surname:"Doe",cip:"CIP",age:"Edat",gender:"Gènere",phoneMain:"",phoneAlt:""},render:e=>m`
        <div style="width:600px;display:flex;justify-content:center;margin: 0 auto;">
        <dss-header-menu-patient 
            size="${e.size}"
            ?disabled=${e.disabled}
            name="${e.name} ${e.surname}"
            cip="${e.cip}"
            age="${e.age}"
            gender="${e.gender}"
                        phoneMain="${e.phoneMain}"
                        phoneAlt="${e.phoneAlt}">
          <dss-avatar size="xl" name="${e.name}" surname="${e.surname}" slot="avatar"></dss-avatar>
        </dss-header-menu-patient>
        </div>
      `},n={tags:["!dev"],render:()=>m`
      
    `};var t,r,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
    gender: 'Gènere',
    phoneMain: '',
    phoneAlt: ''
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
            gender="\${args.gender}"
                        phoneMain="\${args.phoneMain}"
                        phoneAlt="\${args.phoneAlt}">
          <dss-avatar size="xl" name="\${args.name}" surname="\${args.surname}" slot="avatar"></dss-avatar>
        </dss-header-menu-patient>
        </div>
      \`;
  }
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var d,i,o;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      
    \`;
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const l=["Playground","Xxxxxx"],c=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,Xxxxxx:n,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{a as P,c as S};
