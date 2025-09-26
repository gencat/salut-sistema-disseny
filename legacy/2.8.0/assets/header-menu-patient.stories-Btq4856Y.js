import{x as i}from"./lit-html-D6a8R3xZ.js";const r={title:"Components/Header Menu Patient",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},disabled:{name:"Deshabilitar",control:{type:"boolean"}},name:{name:"Nom del pacient"},surname:{name:"Cognom del pacient"},cip:{name:"CIP del paciente"},age:{name:"Edat del pacient"},gender:{name:"Gènere del pacient"},phoneMain:{name:"Telèfon principal"},phoneAlt:{name:"Telèfon alternatiu"},mail:{name:"Correu electrònic"},address:{name:"Adreça"},addressURL:{name:"Adreça URL"},edit:{name:'Mostrar botó "Editar usuari"',control:{type:"boolean"}},hideDetails:{name:'Amagar botó "Veure detalls"',control:{type:"boolean"}},showAssignments:{name:'Mostrar "Professionals assignats"',control:{type:"boolean"}},uab:{name:"UAB",if:{arg:"showAssignments"}},ui:{name:"UI",if:{arg:"showAssignments"}},uas:{name:"UAS",if:{arg:"showAssignments"}},center:{name:"Centre",if:{arg:"showAssignments"}},up:{name:"UP",if:{arg:"showAssignments"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-35109&m=dev"}},args:{size:"lg",disabled:!1,name:"John",surname:"Doe",cip:"CIP",age:"Edat",gender:"Gènere",phoneMain:"",phoneAlt:"",mail:"",address:"",addressURL:"",showAssignments:!1,uab:"Dr. John Smith",ui:"Dr. Jane Doe",uas:"Dr. Jane Doe",center:"Centre hospiltari",up:"Lorem ipsum dolor sit amet",edit:!1,hideDetails:!1},render:e=>i`
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
      `};var s,n,t;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const d=["Playground"],m=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,__namedExportsOrder:d,default:r},Symbol.toStringTag,{value:"Module"}));export{a as P,m as S};
