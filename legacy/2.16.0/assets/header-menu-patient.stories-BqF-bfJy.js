import{x as r}from"./lit-html-D6cejpwM.js";const v={title:"Components/Header Menu Patient",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},disabled:{name:"Deshabilitar",control:{type:"boolean"}},name:{name:"Nom del pacient"},surname:{name:"Cognom del pacient"},cip:{name:"CIP del paciente"},age:{name:"Edat del pacient"},gender:{name:"Gènere del pacient"},phoneMain:{name:"Telèfon principal"},phoneAlt:{name:"Telèfon alternatiu"},mail:{name:"Correu electrònic"},address:{name:"Adreça"},addressURL:{name:"Adreça URL"},edit:{name:'Mostrar botó "Editar usuari"',control:{type:"boolean"}},hideDetails:{name:'Amagar botó "Veure detalls"',control:{type:"boolean"}},showAssignments:{name:'Mostrar "Professionals assignats"',control:{type:"boolean"}},uab:{name:"UAB",if:{arg:"showAssignments"}},ui:{name:"UI",if:{arg:"showAssignments"}},uas:{name:"UAS",if:{arg:"showAssignments"}},center:{name:"Centre",if:{arg:"showAssignments"}},up:{name:"UP",control:{type:"boolean"},if:{arg:"showAssignments"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4096-35109&m=dev"}},args:{size:"lg",disabled:!1,name:"John",surname:"Doe",cip:"CIP",age:"Edat",gender:"Gènere",phoneMain:"",phoneAlt:"",mail:"",address:"",addressURL:"",showAssignments:!1,uab:"Dr. John Smith",ui:"Dr. Jane Doe",uas:"Dr. Jane Doe",center:"Centre hospiltari",up:!0,edit:!1,hideDetails:!1},render:e=>r`
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
      `},s={tags:["!dev"],render:()=>r`
            <dss-header-menu-patient
                name="Nom de l'usuari"
                cip="Número CIP"
                age="40"
                ageLabel="anys"
                gender="Gènere"
                phoneMain="Telèfon 1"
                phoneAlt="Telèfon 2"
            >
                <dss-avatar size="xl" slot="avatar" name="John" surname="Doe"></dss-avatar>
            </dss-header-menu-patient>
        `},n={tags:["!dev"],render:()=>r`
            <dss-header-menu-patient
                name="Nom de l'usuari"
                cip="Número CIP"
                age="40"
                ageLabel="anys"
                gender="Gènere"
                hideViewDetails
            >
                <dss-avatar size="xl" slot="avatar" name="John" surname="Doe"></dss-avatar>
            </dss-header-menu-patient>
        `},t={tags:["!dev"],render:()=>{const e={uab:"John Smith",ui:"Jane Doe",uas:"William Clarke",center:"Centre hospitalari",up:!0},i="123 Main St, Anytown, USA, 12345-6789";return r`
            <dss-header-menu-patient 
                slot="patient-menu"
                edit
                assignments=${JSON.stringify(e)}
                name="Nom de l'usuari"
                cip="12345678912345" 
                age="33" 
                ageLabel="anys"
                gender="Femení" 
                mail="john.doe@example.xyz"
                mailHref="mailto:john.doe@example.xyz"
                address=${i}
                addressURL=${`https://www.google.com/maps?q=${encodeURIComponent(i)}`}
                phonemain="000 000 000" 
                hasPhoneMainCall
                hasPhoneMainChat
                phonealt="111 111 111"
            >
                <dss-avatar size="xl" slot="avatar" name="John" surname="Doe"></dss-avatar>
            </dss-header-menu-patient>
        `}};var d,o,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    up: true,
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
}`,...(m=(o=a.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var l,p,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-menu-patient
                name="Nom de l'usuari"
                cip="Número CIP"
                age="40"
                ageLabel="anys"
                gender="Gènere"
                phoneMain="Telèfon 1"
                phoneAlt="Telèfon 2"
            >
                <dss-avatar size="xl" slot="avatar" name="John" surname="Doe"></dss-avatar>
            </dss-header-menu-patient>
        \`;
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,c;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-header-menu-patient
                name="Nom de l'usuari"
                cip="Número CIP"
                age="40"
                ageLabel="anys"
                gender="Gènere"
                hideViewDetails
            >
                <dss-avatar size="xl" slot="avatar" name="John" surname="Doe"></dss-avatar>
            </dss-header-menu-patient>
        \`;
  }
}`,...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var $,f,y;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const assignments = {
      uab: 'John Smith',
      ui: 'Jane Doe',
      uas: 'William Clarke',
      center: 'Centre hospitalari',
      up: true
    };
    const patientAddress = '123 Main St, Anytown, USA, 12345-6789';
    return html\`
            <dss-header-menu-patient 
                slot="patient-menu"
                edit
                assignments=\${JSON.stringify(assignments)}
                name="Nom de l'usuari"
                cip="12345678912345" 
                age="33" 
                ageLabel="anys"
                gender="Femení" 
                mail="john.doe@example.xyz"
                mailHref="mailto:john.doe@example.xyz"
                address=\${patientAddress}
                addressURL=\${\`https://www.google.com/maps?q=\${encodeURIComponent(patientAddress)}\`}
                phonemain="000 000 000" 
                hasPhoneMainCall
                hasPhoneMainChat
                phonealt="111 111 111"
            >
                <dss-avatar size="xl" slot="avatar" name="John" surname="Doe"></dss-avatar>
            </dss-header-menu-patient>
        \`;
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const A=["Playground","ByDefault","External","Extended"],b=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:s,Extended:t,External:n,Playground:a,__namedExportsOrder:A,default:v},Symbol.toStringTag,{value:"Module"}));export{s as B,n as E,a as P,b as S,t as a};
