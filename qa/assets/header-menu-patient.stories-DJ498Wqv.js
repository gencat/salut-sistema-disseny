import{x as m}from"./lit-html-D6a8R3xZ.js";const l={title:"Components/Header Menu Patient",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},disabled:{name:"Deshabilitar",control:{type:"boolean"}},name:{name:"Nom del pacient"},surname:{name:"Cognom del pacient"},cip:{name:"CIP del paciente"},age:{name:"Edat del pacient"},gender:{name:"Gènere del pacient"},phoneMain:{name:"Telèfon principal"},phoneAlt:{name:"Telèfon alternatiu"},mail:{name:"Correu electrònic"},address:{name:"Adreça"},addressURL:{name:"Adreça URL"},edit:{name:'Mostrar botó "Editar usuari"',control:{type:"boolean"}},hideDetails:{name:'Amagar botó "Veure detalls"',control:{type:"boolean"}},showAssignments:{name:'Mostrar "Professionals assignats"',control:{type:"boolean"}},uab:{name:"UAB",if:{arg:"showAssignments"}},ui:{name:"UI",if:{arg:"showAssignments"}},uas:{name:"UAS",if:{arg:"showAssignments"}},center:{name:"Centre",if:{arg:"showAssignments"}},up:{name:"UP",if:{arg:"showAssignments"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-35109&m=dev"}},args:{size:"lg",disabled:!1,name:"John",surname:"Doe",cip:"CIP",age:"Edat",gender:"Gènere",phoneMain:"",phoneAlt:"",mail:"",address:"",addressURL:"",showAssignments:!1,uab:"Dr. John Smith",ui:"Dr. Jane Doe",uas:"Dr. Jane Doe",center:"Centre hospiltari",up:"Lorem ipsum dolor sit amet",edit:!1,hideDetails:!1},render:e=>m`
        <div style="width:600px;display:flex;justify-content:center;margin: 0 auto;">
        <dss-header-menu-patient 
            size="${e.size}"
            ?disabled=${e.disabled}
            name="${e.name} ${e.surname}"
            cip="${e.cip}"
            age="${e.age}"
            gender="${e.gender}"
                        phoneMain="${e.phoneMain}"
                        phoneAlt="${e.phoneAlt}"
                        mail="${e.mail}"
                        address="${e.address}"
                        addressURL="${e.addressURL}"
                        ?edit=${e.edit}
                        ?hideViewDetails=${e.hideDetails}
                        .assignments=${e.showAssignments?{uab:e.uab,ui:e.ui,uas:e.uas,center:e.center,up:e.up}:void 0}
                        >
          <dss-avatar size="xl" name="${e.name}" surname="${e.surname}" slot="avatar"></dss-avatar>
        </dss-header-menu-patient>
        </div>
      `},s={tags:["!dev"],render:()=>m`
      
    `};var n,t,r;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    phoneAlt: '',
    mail: '',
    address: '',
    addressURL: '',
    showAssignments: false,
    uab: 'Dr. John Smith',
    ui: 'Dr. Jane Doe',
    uas: 'Dr. Jane Doe',
    center: 'Centre hospiltari',
    up: 'Lorem ipsum dolor sit amet',
    edit: false,
    hideDetails: false
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
                        phoneAlt="\${args.phoneAlt}"
                        mail="\${args.mail}"
                        address="\${args.address}"
                        addressURL="\${args.addressURL}"
                        ?edit=\${args.edit}
                        ?hideViewDetails=\${args.hideDetails}
                        .assignments=\${args.showAssignments ? {
      uab: args.uab,
      ui: args.ui,
      uas: args.uas,
      center: args.center,
      up: args.up
    } : undefined}
                        >
          <dss-avatar size="xl" name="\${args.name}" surname="\${args.surname}" slot="avatar"></dss-avatar>
        </dss-header-menu-patient>
        </div>
      \`;
  }
}`,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var i,d,o;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      
    \`;
  }
}`,...(o=(d=s.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const p=["Playground","Xxxxxx"],g=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,Xxxxxx:s,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{a as P,g as S};
