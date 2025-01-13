import{x as e}from"./lit-html-B2eaWknC.js";const _={title:"Components/Input Action",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["md","lg"]},label:{name:"Label"},icon:{name:"Mostrar icona",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}},mainActionIcon:{name:"Icona de l'acció principal."},mainActionType:{name:"Tipus de acció principal",control:{type:"select"},options:["default","white-default","primary","error","warning","success","info"]},showSecondaryAction:{name:"Mostrar acció secundària.",control:{type:"boolean"}},secondaryActionIcon:{name:"Icona de l'acció secundària.",if:{arg:"showSecondaryAction"}},secondaryActionType:{name:"Tipus de acció secundària",control:{type:"select"},options:["default","white-default","primary","error","warning","success","info"],if:{arg:"showSecondaryAction"}}},parameters:{layout:"centered"}},s={name:"Playground - Text",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,mainActionIcon:"add_box",mainActionType:"primary",showSecondaryAction:!1,secondaryActionIcon:"cancel",secondaryActionType:"error"},render:n=>{const o=n.showMaxLength?n.maxLength:null,t=n.showDescription?n.description:null;return e`
        ${n.showPlaceholder?e`
            <dss-input-action
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${t}
            >
                <label slot="label" for="myInputText" >${n.label}</label>
                ${n.showMaxLength?e`
                    <input id="myInputText" slot="input" type="text" class="dss-input" placeholder="${n.placeholder}" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} maxLength=${o}/>
                  `:e`
                    <input id="myInputText" slot="input" type="text" class="dss-input" placeholder="${n.placeholder}" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} />
                  `}
                <dss-icon-button slot="action" type="${n.mainActionType}" icon="${n.mainActionIcon}"></dss-icon-button>
                ${n.showSecondaryAction?e`<dss-icon-button slot="secondaryAction" type="${n.secondaryActionType}" icon="${n.secondaryActionIcon}"></dss-icon-button>`:null}
            </dss-input-action>
          `:e`
          <dss-input-action
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${t}
            >
                <label slot="label" for="myInputText" >${n.label}</label>
                ${n.showMaxLength?e`
                    <input id="myInputText" slot="input" type="text" class="dss-input" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} maxLength=${o}/>
                  `:e`
                    <input id="myInputText" slot="input" type="text" class="dss-input" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} />
                  `}
                <dss-icon-button slot="action" type="${n.mainActionType}" icon="${n.mainActionIcon}"></dss-icon-button>
                ${n.showSecondaryAction?e`<dss-icon-button slot="secondaryAction" type="${n.secondaryActionType}" icon="${n.secondaryActionIcon}"></dss-icon-button>`:null}
            </dss-input-action>
          `}
      `}},i={name:"Playground - Number",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,mainActionIcon:"add_box",mainActionType:"primary",showSecondaryAction:!1,secondaryActionIcon:"cancel",secondaryActionType:"error"},render:n=>{const o=n.showMaxLength?n.maxLength:null,t=n.showDescription?n.description:null;return e`
          ${n.showPlaceholder?e`
            <dss-input-action
              label="${n.label}"
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${t}
            >
                <label slot="label" for="myInputText" >${n.label}</label>
                ${n.showMaxLength?e`
                    <input id="myInputNumber" slot="input" type="number" class="dss-input" placeholder="${n.placeholder}" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} maxlength="${o}"/>
                  `:e`
                    <input id="myInputNumber" slot="input" type="number" class="dss-input" placeholder="${n.placeholder}" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled}/>
                  `}
                <dss-icon-button slot="action" type="${n.mainActionType}" icon="${n.mainActionIcon}"></dss-icon-button>
                ${n.showSecondaryAction?e`<dss-icon-button slot="secondaryAction" type="${n.secondaryActionType}" icon="${n.secondaryActionIcon}"></dss-icon-button>`:null}
            </dss-input-action>
          `:e`
            <dss-input-action
              label="${n.label}"
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${t}
            >
                <label slot="label" for="myInputText" >${n.label}</label>
                ${n.showMaxLength?e`
                    <input id="myInputNumber" slot="input" type="number" class="dss-input" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled} maxlength="${o}"/>
                  `:e`
                    <input id="myInputNumber" slot="input" type="number" class="dss-input" ?required=${n.required} ?readonly=${n.readonly} ?disabled=${n.disabled}/>
                  `}
                <dss-icon-button slot="action" type="${n.mainActionType}" icon="${n.mainActionIcon}"></dss-icon-button>
                ${n.showSecondaryAction?e`<dss-icon-button slot="secondaryAction" type="${n.secondaryActionType}" icon="${n.secondaryActionIcon}"></dss-icon-button>`:null}
            </dss-input-action>
          `}
      `}},a={tags:["!dev"],render:()=>e`
       <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="defaultText" >Label</label>
    <input slot="input" id="defaultText" class="dss-input" type="text"/>
    <dss-icon-button slot="action" type="primary" icon="file_upload"></dss-icon-button>
  </dss-input-action>
    `},l={tags:["!dev"],render:()=>e`
      <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="secondActionText" >Label</label>
    <input slot="input" id="secondActionText" class="dss-input" type="text"/>
    <dss-icon-button slot="action" type="primary" icon="file_upload"></dss-icon-button>
    <dss-icon-button slot="secondaryAction" type="error" icon="cancel"></dss-icon-button>
  </dss-input-action>
    `},r={tags:["!dev"],render:()=>e`
     <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="defaultNumber" >Label</label>
    <input slot="input" id="defaultNumber" class="dss-input" type="number"/>
    <dss-icon-button slot="action" type="primary" icon="file_upload"></dss-icon-button>
  </dss-input-action>
    `},c={tags:["!dev"],render:()=>e`
      <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="secondActionNumber" >Label</label>
    <input slot="input" id="secondActionNumber" class="dss-input" type="number"/>
    <dss-icon-button slot="action" type="primary" icon="file_upload"></dss-icon-button>
    <dss-icon-button slot="secondaryAction" type="error" icon="cancel"></dss-icon-button>
  </dss-input-action>
    `};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
                    <input id="myInputText" slot="input" type="text" class="dss-input" placeholder="\${args.placeholder}" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} maxLength=\${maxlength}/>
                  \` : html\`
                    <input id="myInputText" slot="input" type="text" class="dss-input" placeholder="\${args.placeholder}" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} />
                  \`}
                <dss-icon-button slot="action" type="\${args.mainActionType}" icon="\${args.mainActionIcon}"></dss-icon-button>
                \${args.showSecondaryAction ? html\`<dss-icon-button slot="secondaryAction" type="\${args.secondaryActionType}" icon="\${args.secondaryActionIcon}"></dss-icon-button>\` : null}
            </dss-input-action>
          \` : html\`
          <dss-input-action
              icon="\${args.icon ? 'person' : ''}"
              inputSize="\${args.size}"
              helpText=\${description}
            >
                <label slot="label" for="myInputText" >\${args.label}</label>
                \${args.showMaxLength ? html\`
                    <input id="myInputText" slot="input" type="text" class="dss-input" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} maxLength=\${maxlength}/>
                  \` : html\`
                    <input id="myInputText" slot="input" type="text" class="dss-input" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} />
                  \`}
                <dss-icon-button slot="action" type="\${args.mainActionType}" icon="\${args.mainActionIcon}"></dss-icon-button>
                \${args.showSecondaryAction ? html\`<dss-icon-button slot="secondaryAction" type="\${args.secondaryActionType}" icon="\${args.secondaryActionIcon}"></dss-icon-button>\` : null}
            </dss-input-action>
          \`}
      \`;
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,y,m;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
                <label slot="label" for="myInputText" >\${args.label}</label>
                \${args.showMaxLength ? html\`
                    <input id="myInputNumber" slot="input" type="number" class="dss-input" placeholder="\${args.placeholder}" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} maxlength="\${maxlength}"/>
                  \` : html\`
                    <input id="myInputNumber" slot="input" type="number" class="dss-input" placeholder="\${args.placeholder}" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled}/>
                  \`}
                <dss-icon-button slot="action" type="\${args.mainActionType}" icon="\${args.mainActionIcon}"></dss-icon-button>
                \${args.showSecondaryAction ? html\`<dss-icon-button slot="secondaryAction" type="\${args.secondaryActionType}" icon="\${args.secondaryActionIcon}"></dss-icon-button>\` : null}
            </dss-input-action>
          \` : html\`
            <dss-input-action
              label="\${args.label}"
              icon="\${args.icon ? 'person' : ''}"
              inputSize="\${args.size}"
              helpText=\${description}
            >
                <label slot="label" for="myInputText" >\${args.label}</label>
                \${args.showMaxLength ? html\`
                    <input id="myInputNumber" slot="input" type="number" class="dss-input" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} maxlength="\${maxlength}"/>
                  \` : html\`
                    <input id="myInputNumber" slot="input" type="number" class="dss-input" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled}/>
                  \`}
                <dss-icon-button slot="action" type="\${args.mainActionType}" icon="\${args.mainActionIcon}"></dss-icon-button>
                \${args.showSecondaryAction ? html\`<dss-icon-button slot="secondaryAction" type="\${args.secondaryActionType}" icon="\${args.secondaryActionIcon}"></dss-icon-button>\` : null}
            </dss-input-action>
          \`}
      \`;
  }
}`,...(m=(y=i.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var h,$,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="defaultText" >Label</label>
    <input slot="input" id="defaultText" class="dss-input" type="text"/>
    <dss-icon-button slot="action" type="primary" icon="file_upload"></dss-icon-button>
  </dss-input-action>
    \`;
  }
}`,...(x=($=a.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var A,g,f;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="secondActionText" >Label</label>
    <input slot="input" id="secondActionText" class="dss-input" type="text"/>
    <dss-icon-button slot="action" type="primary" icon="file_upload"></dss-icon-button>
    <dss-icon-button slot="secondaryAction" type="error" icon="cancel"></dss-icon-button>
  </dss-input-action>
    \`;
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var T,w,I;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="defaultNumber" >Label</label>
    <input slot="input" id="defaultNumber" class="dss-input" type="number"/>
    <dss-icon-button slot="action" type="primary" icon="file_upload"></dss-icon-button>
  </dss-input-action>
    \`;
  }
}`,...(I=(w=r.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var L,q,S;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input-action
    icon="add_box"
  >
    <label slot="label" for="secondActionNumber" >Label</label>
    <input slot="input" id="secondActionNumber" class="dss-input" type="number"/>
    <dss-icon-button slot="action" type="primary" icon="file_upload"></dss-icon-button>
    <dss-icon-button slot="secondaryAction" type="error" icon="cancel"></dss-icon-button>
  </dss-input-action>
    \`;
  }
}`,...(S=(q=c.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};const M=["PlaygroundText","PlaygroundNumber","ByDefaultText","TextDouble","ByDefaultNumber","NumberDouble"],z=Object.freeze(Object.defineProperty({__proto__:null,ByDefaultNumber:r,ByDefaultText:a,NumberDouble:c,PlaygroundNumber:i,PlaygroundText:s,TextDouble:l,__namedExportsOrder:M,default:_},Symbol.toStringTag,{value:"Module"}));export{a as B,c as N,s as P,z as S,l as T,r as a};
