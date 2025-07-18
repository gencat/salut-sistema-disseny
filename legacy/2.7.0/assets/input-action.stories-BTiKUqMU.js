import{x as e}from"./lit-html-D6a8R3xZ.js";const M={title:"Components/Input Action",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},icon:{name:"Mostrar icona",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}},mainActionIcon:{name:"Icona de l'acció principal."},mainActionType:{name:"Tipus de acció principal",control:{type:"select"},options:["primary","error","warning","success","info","neutral","ghost"]},showSecondaryAction:{name:"Mostrar acció secundària.",control:{type:"boolean"}},secondaryActionIcon:{name:"Icona de l'acció secundària.",if:{arg:"showSecondaryAction"}},secondaryActionType:{name:"Tipus de acció secundària",control:{type:"select"},options:["primary","error","warning","success","info","neutral","ghost"],if:{arg:"showSecondaryAction"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=550-7833&m=dev"}},name:"Playground - Text",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,mainActionIcon:"add_box",mainActionType:"primary",showSecondaryAction:!1,secondaryActionIcon:"cancel",secondaryActionType:"error"},render:n=>{const t=n.showMaxLength?n.maxLength:null,o=n.showDescription?n.description:null;return e`
        ${n.showPlaceholder?e`
            <dss-input-action
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${o}
            >
                <label slot="label" for="myInputText" >${n.label}</label>
                ${n.showMaxLength?e`
                    <input id="myInputText" slot="input" type="text" placeholder="${n.placeholder}" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} maxLength=${t}/>
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
              helpText=${o}
            >
                <label slot="label" for="myInputText" >${n.label}</label>
                ${n.showMaxLength?e`
                    <input id="myInputText" slot="input" type="text" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} maxLength=${t}/>
                  `:e`
                    <input id="myInputText" slot="input" type="text" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} />
                  `}
                <dss-icon-button slot="action" variant="${n.mainActionType}" icon="${n.mainActionIcon}" label="Task name"></dss-icon-button>
                ${n.showSecondaryAction?e`<dss-icon-button slot="secondaryAction" variant="${n.secondaryActionType}" icon="${n.secondaryActionIcon}" label="Task name"></dss-icon-button>`:null}
            </dss-input-action>
          `}
      `}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=550-7833&m=dev"}},name:"Playground - Number",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,mainActionIcon:"add_box",mainActionType:"primary",showSecondaryAction:!1,secondaryActionIcon:"cancel",secondaryActionType:"error"},render:n=>{const t=n.showMaxLength?n.maxLength:null,o=n.showDescription?n.description:null;return e`
          ${n.showPlaceholder?e`
            <dss-input-action
              label="${n.label}"
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${o}
            >
                <label slot="label" for="myInputNumber" >${n.label}</label>
                ${n.showMaxLength?e`
                    <input id="myInputNumber" slot="input" type="number" placeholder="${n.placeholder}" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} maxlength="${t}"/>
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
              helpText=${o}
            >
                <label slot="label" for="myInputNumber" >${n.label}</label>
                ${n.showMaxLength?e`
                    <input id="myInputNumber" slot="input" type="number" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} maxlength="${t}"/>
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
    `},d={tags:["!dev"],render:()=>e`
            <div class="inputs-sizes">
                <dss-input-action icon="add_box" inputSize="lg">
                    <label slot="label" for="sizeLg" >Size LG</label>
                    <input slot="input" id="sizeLg" type="text"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="add_box" inputSize="md">
                    <label slot="label" for="sizeMd" >Size MD</label>
                    <input slot="input" id="sizeMd" type="text"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="add_box" inputSize="sm">
                    <label slot="label" for="sizeSm" >Size SM</label>
                    <input slot="input" id="sizeSm" type="text"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
            </div>
    `};var u,p,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var m,y,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var $,x,g;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var T,f,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(f=l.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var w,S,I;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var z,v,L;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(v=c.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var q,_,k;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input-action icon="add_box" inputSize="lg">
                    <label slot="label" for="sizeLg" >Size LG</label>
                    <input slot="input" id="sizeLg" type="text"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="add_box" inputSize="md">
                    <label slot="label" for="sizeMd" >Size MD</label>
                    <input slot="input" id="sizeMd" type="text"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="add_box" inputSize="sm">
                    <label slot="label" for="sizeSm" >Size SM</label>
                    <input slot="input" id="sizeSm" type="text"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
            </div>
    \`;
  }
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const N=["PlaygroundText","PlaygroundNumber","ByDefaultText","TextDouble","ByDefaultNumber","NumberDouble","Sizes"],P=Object.freeze(Object.defineProperty({__proto__:null,ByDefaultNumber:r,ByDefaultText:s,NumberDouble:c,PlaygroundNumber:i,PlaygroundText:a,Sizes:d,TextDouble:l,__namedExportsOrder:N,default:M},Symbol.toStringTag,{value:"Module"}));export{s as B,c as N,a as P,P as S,l as T,r as a,d as b};
