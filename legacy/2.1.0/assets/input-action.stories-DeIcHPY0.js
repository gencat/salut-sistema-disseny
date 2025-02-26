import{x as e}from"./lit-html-B2eaWknC.js";const v={title:"Components/Input Action",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["md","lg"]},label:{name:"Label"},icon:{name:"Mostrar icona",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}},mainActionIcon:{name:"Icona de l'acció principal."},mainActionType:{name:"Tipus de acció principal",control:{type:"select"},options:["default","white-default","primary","error","warning","success","info"]},showSecondaryAction:{name:"Mostrar acció secundària.",control:{type:"boolean"}},secondaryActionIcon:{name:"Icona de l'acció secundària.",if:{arg:"showSecondaryAction"}},secondaryActionType:{name:"Tipus de acció secundària",control:{type:"select"},options:["default","white-default","primary","error","warning","success","info"],if:{arg:"showSecondaryAction"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=550-7833&m=dev"}},name:"Playground - Text",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,mainActionIcon:"add_box",mainActionType:"primary",showSecondaryAction:!1,secondaryActionIcon:"cancel",secondaryActionType:"error"},render:n=>{const o=n.showMaxLength?n.maxLength:null,t=n.showDescription?n.description:null;return e`
        ${n.showPlaceholder?e`
            <dss-input-action
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${t}
            >
                <label slot="label" for="myInputText" >${n.label}</label>
                ${n.showMaxLength?e`
                    <input id="myInputText" slot="input" type="text" placeholder="${n.placeholder}" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} maxLength=${o}/>
                  `:e`
                    <input id="myInputText" slot="input" type="text" placeholder="${n.placeholder}" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} />
                  `}
                <dss-icon-button slot="action" variant="${n.mainActionType}" icon="${n.mainActionIcon}" label="Task name"></dss-icon-button>
                ${n.showSecondaryAction?e`<dss-icon-button slot="secondaryAction" variant="${n.secondaryActionType}" icon="${n.secondaryActionIcon}" label="Task name"></dss-icon-button>`:null}
            </dss-input-action>
          `:e`
          <dss-input-action
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${t}
            >
                <label slot="label" for="myInputText" >${n.label}</label>
                ${n.showMaxLength?e`
                    <input id="myInputText" slot="input" type="text" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} maxLength=${o}/>
                  `:e`
                    <input id="myInputText" slot="input" type="text" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} />
                  `}
                <dss-icon-button slot="action" variant="${n.mainActionType}" icon="${n.mainActionIcon}" label="Task name"></dss-icon-button>
                ${n.showSecondaryAction?e`<dss-icon-button slot="secondaryAction" variant="${n.secondaryActionType}" icon="${n.secondaryActionIcon}" label="Task name"></dss-icon-button>`:null}
            </dss-input-action>
          `}
      `}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=550-7833&m=dev"}},name:"Playground - Number",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,mainActionIcon:"add_box",mainActionType:"primary",showSecondaryAction:!1,secondaryActionIcon:"cancel",secondaryActionType:"error"},render:n=>{const o=n.showMaxLength?n.maxLength:null,t=n.showDescription?n.description:null;return e`
          ${n.showPlaceholder?e`
            <dss-input-action
              label="${n.label}"
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${t}
            >
                <label slot="label" for="myInputNumber" >${n.label}</label>
                ${n.showMaxLength?e`
                    <input id="myInputNumber" slot="input" type="number" placeholder="${n.placeholder}" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} maxlength="${o}"/>
                  `:e`
                    <input id="myInputNumber" slot="input" type="number" placeholder="${n.placeholder}" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled}/>
                  `}
                <dss-icon-button slot="action" variant="${n.mainActionType}" icon="${n.mainActionIcon}" label="Task name"></dss-icon-button>
                ${n.showSecondaryAction?e`<dss-icon-button slot="secondaryAction" variant="${n.secondaryActionType}" icon="${n.secondaryActionIcon}" label="Task name"></dss-icon-button>`:null}
            </dss-input-action>
          `:e`
            <dss-input-action
              label="${n.label}"
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${t}
            >
                <label slot="label" for="myInputNumber" >${n.label}</label>
                ${n.showMaxLength?e`
                    <input id="myInputNumber" slot="input" type="number" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} maxlength="${o}"/>
                  `:e`
                    <input id="myInputNumber" slot="input" type="number" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled}/>
                  `}
                <dss-icon-button slot="action" variant="${n.mainActionType}" icon="${n.mainActionIcon}" label="Task name"></dss-icon-button>
                ${n.showSecondaryAction?e`<dss-icon-button slot="secondaryAction" variant="${n.secondaryActionType}" icon="${n.secondaryActionIcon}" label="Task name"></dss-icon-button>`:null}
            </dss-input-action>
          `}
      `}},s={tags:["!dev"],render:()=>e`
       <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="defaultText" >Label</label>
    <input slot="input" id="defaultText" type="text"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
  </dss-input-action>
    `},l={tags:["!dev"],render:()=>e`
      <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="secondActionText" >Label</label>
    <input slot="input" id="secondActionText" type="text"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
    <dss-icon-button slot="secondaryAction" variant="error" icon="cancel" label="Task name"></dss-icon-button>
  </dss-input-action>
    `},r={tags:["!dev"],render:()=>e`
     <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="defaultNumber" >Label</label>
    <input slot="input" id="defaultNumber" type="number"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
  </dss-input-action>
    `},c={tags:["!dev"],render:()=>e`
      <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="secondActionNumber" >Label</label>
    <input slot="input" id="secondActionNumber" type="number"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
    <dss-icon-button slot="secondaryAction" variant="error" icon="cancel" label="Task name"></dss-icon-button>
  </dss-input-action>
    `};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=550-7833&m=dev'
    }
  },
  name: 'Playground - Text',
  args: {
    size: 'lg',
    label: 'Label',
    icon: false,
    required: false,
    readonly: false,
    disabled: false,
    showPlaceholder: false,
    placeholder: 'Type here',
    showDescription: false,
    description: 'Help Text',
    showMaxLength: false,
    maxLength: 10,
    mainActionIcon: 'add_box',
    mainActionType: 'primary',
    showSecondaryAction: false,
    secondaryActionIcon: 'cancel',
    secondaryActionType: 'error'
  },
  render: (args: any) => {
    const maxlength = args.showMaxLength ? args.maxLength : null;
    const description = args.showDescription ? args.description : null;
    return html\`
        \${args.showPlaceholder ? html\`
            <dss-input-action
              icon="\${args.icon ? 'person' : ''}"
              inputSize="\${args.size}"
              helpText=\${description}
            >
                <label slot="label" for="myInputText" >\${args.label}</label>
                \${args.showMaxLength ? html\`
                    <input id="myInputText" slot="input" type="text" placeholder="\${args.placeholder}" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} maxLength=\${maxlength}/>
                  \` : html\`
                    <input id="myInputText" slot="input" type="text" placeholder="\${args.placeholder}" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} />
                  \`}
                <dss-icon-button slot="action" variant="\${args.mainActionType}" icon="\${args.mainActionIcon}" label="Task name"></dss-icon-button>
                \${args.showSecondaryAction ? html\`<dss-icon-button slot="secondaryAction" variant="\${args.secondaryActionType}" icon="\${args.secondaryActionIcon}" label="Task name"></dss-icon-button>\` : null}
            </dss-input-action>
          \` : html\`
          <dss-input-action
              icon="\${args.icon ? 'person' : ''}"
              inputSize="\${args.size}"
              helpText=\${description}
            >
                <label slot="label" for="myInputText" >\${args.label}</label>
                \${args.showMaxLength ? html\`
                    <input id="myInputText" slot="input" type="text" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} maxLength=\${maxlength}/>
                  \` : html\`
                    <input id="myInputText" slot="input" type="text" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} />
                  \`}
                <dss-icon-button slot="action" variant="\${args.mainActionType}" icon="\${args.mainActionIcon}" label="Task name"></dss-icon-button>
                \${args.showSecondaryAction ? html\`<dss-icon-button slot="secondaryAction" variant="\${args.secondaryActionType}" icon="\${args.secondaryActionIcon}" label="Task name"></dss-icon-button>\` : null}
            </dss-input-action>
          \`}
      \`;
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,m,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=550-7833&m=dev'
    }
  },
  name: 'Playground - Number',
  args: {
    size: 'lg',
    label: 'Label',
    icon: false,
    required: false,
    readonly: false,
    disabled: false,
    showPlaceholder: false,
    placeholder: 'Type here',
    showDescription: false,
    description: 'Help Text',
    showMaxLength: false,
    maxLength: 10,
    mainActionIcon: 'add_box',
    mainActionType: 'primary',
    showSecondaryAction: false,
    secondaryActionIcon: 'cancel',
    secondaryActionType: 'error'
  },
  render: (args: any) => {
    const maxlength = args.showMaxLength ? args.maxLength : null;
    const description = args.showDescription ? args.description : null;
    return html\`
          \${args.showPlaceholder ? html\`
            <dss-input-action
              label="\${args.label}"
              icon="\${args.icon ? 'person' : ''}"
              inputSize="\${args.size}"
              helpText=\${description}
            >
                <label slot="label" for="myInputNumber" >\${args.label}</label>
                \${args.showMaxLength ? html\`
                    <input id="myInputNumber" slot="input" type="number" placeholder="\${args.placeholder}" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} maxlength="\${maxlength}"/>
                  \` : html\`
                    <input id="myInputNumber" slot="input" type="number" placeholder="\${args.placeholder}" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled}/>
                  \`}
                <dss-icon-button slot="action" variant="\${args.mainActionType}" icon="\${args.mainActionIcon}" label="Task name"></dss-icon-button>
                \${args.showSecondaryAction ? html\`<dss-icon-button slot="secondaryAction" variant="\${args.secondaryActionType}" icon="\${args.secondaryActionIcon}" label="Task name"></dss-icon-button>\` : null}
            </dss-input-action>
          \` : html\`
            <dss-input-action
              label="\${args.label}"
              icon="\${args.icon ? 'person' : ''}"
              inputSize="\${args.size}"
              helpText=\${description}
            >
                <label slot="label" for="myInputNumber" >\${args.label}</label>
                \${args.showMaxLength ? html\`
                    <input id="myInputNumber" slot="input" type="number" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} maxlength="\${maxlength}"/>
                  \` : html\`
                    <input id="myInputNumber" slot="input" type="number" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled}/>
                  \`}
                <dss-icon-button slot="action" variant="\${args.mainActionType}" icon="\${args.mainActionIcon}" label="Task name"></dss-icon-button>
                \${args.showSecondaryAction ? html\`<dss-icon-button slot="secondaryAction" variant="\${args.secondaryActionType}" icon="\${args.secondaryActionIcon}" label="Task name"></dss-icon-button>\` : null}
            </dss-input-action>
          \`}
      \`;
  }
}`,...(y=(m=i.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var h,$,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="defaultText" >Label</label>
    <input slot="input" id="defaultText" type="text"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
  </dss-input-action>
    \`;
  }
}`,...(x=($=s.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var g,T,A;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="secondActionText" >Label</label>
    <input slot="input" id="secondActionText" type="text"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
    <dss-icon-button slot="secondaryAction" variant="error" icon="cancel" label="Task name"></dss-icon-button>
  </dss-input-action>
    \`;
  }
}`,...(A=(T=l.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var f,w,I;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="defaultNumber" >Label</label>
    <input slot="input" id="defaultNumber" type="number"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
  </dss-input-action>
    \`;
  }
}`,...(I=(w=r.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var S,L,q;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="secondActionNumber" >Label</label>
    <input slot="input" id="secondActionNumber" type="number"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
    <dss-icon-button slot="secondaryAction" variant="error" icon="cancel" label="Task name"></dss-icon-button>
  </dss-input-action>
    \`;
  }
}`,...(q=(L=c.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const k=["PlaygroundText","PlaygroundNumber","ByDefaultText","TextDouble","ByDefaultNumber","NumberDouble"],_=Object.freeze(Object.defineProperty({__proto__:null,ByDefaultNumber:r,ByDefaultText:s,NumberDouble:c,PlaygroundNumber:i,PlaygroundText:a,TextDouble:l,__namedExportsOrder:k,default:v},Symbol.toStringTag,{value:"Module"}));export{s as B,c as N,a as P,_ as S,l as T,r as a};
