import{x as d}from"./lit-html-B2eaWknC.js";const m={title:"Discontinuat/Input Field ⚠️",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["Mitjá","Petit"]},label:{name:"Label"},clearable:{name:"Accionable",control:{type:"boolean"}},icon:{name:"Mostrar icona",control:{type:"boolean"}},showError:{name:"Mostrar error",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}}},parameters:{layout:"centered"}},n={render:e=>{const s=e.showMaxLength?e.maxLength:null,a=e.showDescription?e.description:null;return d`
      <dss-input-field
        type="text"
        label="${e.label}"
        icon="${e.icon?"person":""}"
        ?small=${e.size==="Petit"}
        ?clearable=${e.clearable}
        ?showError=${e.showError}
        ?required=${e.required}
        .maxLength=${s}
        description=${a}
      >
      </dss-input-field>
    `},name:"Input Text",args:{size:"md",label:"Label",icon:!1,showError:!1,required:!1,clearable:!1,showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10}},r={render:e=>{const s=e.showMaxLength?e.maxLength:null,a=e.showDescription?e.description:null;return d`
      <dss-input-field
        type="number"
        label="${e.label}"
        icon="${e.icon?"person":""}"
        ?small=${e.size==="Petit"}
        ?showError=${e.showError}
        ?required=${e.required}
        maxLength=${s}
        description=${a}
      >
      </dss-input-field>
    `},name:"Input Number",args:{size:"md",label:"Label",icon:!1,required:!1,clearable:!1,showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,showError:!1},argTypes:{clearable:{table:{disable:!0}}}};var t,o,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => {
    const maxlength = args.showMaxLength ? args.maxLength : null;
    const description = args.showDescription ? args.description : null;
    return html\`
      <dss-input-field
        type="text"
        label="\${args.label}"
        icon="\${args.icon ? 'person' : ''}"
        ?small=\${args.size === 'Petit'}
        ?clearable=\${args.clearable}
        ?showError=\${args.showError}
        ?required=\${args.required}
        .maxLength=\${maxlength}
        description=\${description}
      >
      </dss-input-field>
    \`;
  },
  name: 'Input Text',
  args: {
    size: 'md',
    label: 'Label',
    icon: false,
    showError: false,
    required: false,
    clearable: false,
    showDescription: false,
    description: 'Help Text',
    showMaxLength: false,
    maxLength: 10
  }
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => {
    const maxlength = args.showMaxLength ? args.maxLength : null;
    const description = args.showDescription ? args.description : null;
    return html\`
      <dss-input-field
        type="number"
        label="\${args.label}"
        icon="\${args.icon ? 'person' : ''}"
        ?small=\${args.size === 'Petit'}
        ?showError=\${args.showError}
        ?required=\${args.required}
        maxLength=\${maxlength}
        description=\${description}
      >
      </dss-input-field>
    \`;
  },
  name: 'Input Number',
  args: {
    size: 'md',
    label: 'Label',
    icon: false,
    required: false,
    clearable: false,
    showDescription: false,
    description: 'Help Text',
    showMaxLength: false,
    maxLength: 10,
    showError: false
  },
  argTypes: {
    clearable: {
      table: {
        disable: true
      }
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const u=["InputText","InputNumber"],b=Object.freeze(Object.defineProperty({__proto__:null,InputNumber:r,InputText:n,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{n as I,b as S,r as a};
