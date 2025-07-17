import{x as e}from"./lit-html-D6a8R3xZ.js";const K={title:"Components/Input Action",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},icon:{name:"Mostrar icona",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}},mainActionIcon:{name:"Icona de l'acció principal."},mainActionType:{name:"Tipus de acció principal",control:{type:"select"},options:["primary","error","warning","success","info","neutral","ghost"]},showSecondaryAction:{name:"Mostrar acció secundària.",control:{type:"boolean"}},secondaryActionIcon:{name:"Icona de l'acció secundària.",if:{arg:"showSecondaryAction"}},secondaryActionType:{name:"Tipus de acció secundària",control:{type:"select"},options:["primary","error","warning","success","info","neutral","ghost"],if:{arg:"showSecondaryAction"}},showUnits:{name:"Mostrar unitats",control:{type:"boolean"}},units:{name:"Unitats",control:{type:"text"},if:{arg:"showUnits"}},showInputPrefix:{name:"Mostrar prefix",control:{type:"boolean"}},inputPrefix:{name:"Prefix",control:{type:"text"},if:{arg:"showInputPrefix"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=550-7833&m=dev"}},name:"Playground - Text",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,mainActionIcon:"add_box",mainActionType:"primary",showSecondaryAction:!1,secondaryActionIcon:"cancel",secondaryActionType:"error",showUnits:!1,units:"cm",showInputPrefix:!1,inputPrefix:"1/"},render:n=>{const t=n.showMaxLength?n.maxLength:null,i=n.showDescription?n.description:null;return e`
        ${n.showPlaceholder?e`
            <dss-input-action
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${i}
                            .units=${n.showUnits?n.units:""}
                            .inputPrefix=${n.showInputPrefix?n.inputPrefix:""}
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
              helpText=${i}
                            .units=${n.showUnits?n.units:""}
                            .inputPrefix=${n.showInputPrefix?n.inputPrefix:""}
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
      `}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=550-7833&m=dev"}},name:"Playground - Number",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,mainActionIcon:"add_box",mainActionType:"primary",showSecondaryAction:!1,secondaryActionIcon:"cancel",secondaryActionType:"error",showUnits:!1,units:"cm",showInputPrefix:!1,inputPrefix:"1/"},render:n=>{const t=n.showMaxLength?n.maxLength:null,i=n.showDescription?n.description:null;return e`
          ${n.showPlaceholder?e`
            <dss-input-action
              label="${n.label}"
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${i}
                            .units=${n.showUnits?n.units:""}
                            .inputPrefix=${n.showInputPrefix?n.inputPrefix:""}
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
              helpText=${i}
                            .units=${n.showUnits?n.units:""}
                            .inputPrefix=${n.showInputPrefix?n.inputPrefix:""}
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
    `},u={tags:["!dev"],render:()=>e`
            <div class="inputs-sizes">
                <dss-input-action icon="credit_card" inputsize="lg" maskRegex="/(\\d{4})(?=\\d)/g" maskReplace="$1 ">
                <label slot="label" for="mask1">Credit Card</label>
                    <input slot="input" id="mask1"  type="text" maxlength="19"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="regular_expression" inputsize="lg" maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2">
                <label slot="label" for="mask2" >Custom mask</label>					
                    <input slot="input" id="mask2" type="text" maxlength="6"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
            </div>
    `},p={tags:["!dev"],render:()=>e`
            <div class="inputs-sizes">
                <dss-input-action icon="add_box" inputsize="sm" units="cm">
                <label slot="label" for="units1">Label</label>
                    <input slot="input" id="units1"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="add_box" inputsize="md" units="cm">
                <label slot="label" for="units2">Label</label>
                    <input slot="input" id="units2"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="add_box" inputsize="lg" units="cm">
                <label slot="label" for="units3" >Label</label>
                    <input slot="input" id="units3" type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
            </div>
    `},b={tags:["!dev"],render:()=>e`
            <div class="inputs-sizes">
                <dss-input-action icon="add_box" inputsize="sm" inputPrefix="1/">
                <label slot="label" for="prefix1">Label</label>
                    <input slot="input" id="prefix1"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="add_box" inputsize="md" inputPrefix="1/">
                <label slot="label" for="prefix2">Label</label>
                    <input slot="input" id="prefix2"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="add_box" inputsize="lg" inputPrefix="1/">
                <label slot="label" for="prefix3" >Label</label>
                    <input slot="input" id="prefix3" type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
            </div>
    `};var m,y,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    secondaryActionType: 'error',
    showUnits: false,
    units: 'cm',
    showInputPrefix: false,
    inputPrefix: '1/'
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
                            .units=\${args.showUnits ? args.units : ''}
                            .inputPrefix=\${args.showInputPrefix ? args.inputPrefix : ''}
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
                            .units=\${args.showUnits ? args.units : ''}
                            .inputPrefix=\${args.showInputPrefix ? args.inputPrefix : ''}
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
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,f,$;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    secondaryActionType: 'error',
    showUnits: false,
    units: 'cm',
    showInputPrefix: false,
    inputPrefix: '1/'
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
                            .units=\${args.showUnits ? args.units : ''}
                            .inputPrefix=\${args.showInputPrefix ? args.inputPrefix : ''}
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
                            .units=\${args.showUnits ? args.units : ''}
                            .inputPrefix=\${args.showInputPrefix ? args.inputPrefix : ''}
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
}`,...($=(f=a.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var g,T,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var A,v,z;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(v=l.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var k,I,_;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=(I=r.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,S,L;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(S=c.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var q,M,N;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var D,U,C;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input-action icon="credit_card" inputsize="lg" maskRegex="/(\\\\d{4})(?=\\\\d)/g" maskReplace="$1 ">
                <label slot="label" for="mask1">Credit Card</label>
                    <input slot="input" id="mask1"  type="text" maxlength="19"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="regular_expression" inputsize="lg" maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2">
                <label slot="label" for="mask2" >Custom mask</label>					
                    <input slot="input" id="mask2" type="text" maxlength="6"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
            </div>
    \`;
  }
}`,...(C=(U=u.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var F,H,R;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input-action icon="add_box" inputsize="sm" units="cm">
                <label slot="label" for="units1">Label</label>
                    <input slot="input" id="units1"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="add_box" inputsize="md" units="cm">
                <label slot="label" for="units2">Label</label>
                    <input slot="input" id="units2"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="add_box" inputsize="lg" units="cm">
                <label slot="label" for="units3" >Label</label>
                    <input slot="input" id="units3" type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
            </div>
    \`;
  }
}`,...(R=(H=p.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var B,E,J;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input-action icon="add_box" inputsize="sm" inputPrefix="1/">
                <label slot="label" for="prefix1">Label</label>
                    <input slot="input" id="prefix1"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="add_box" inputsize="md" inputPrefix="1/">
                <label slot="label" for="prefix2">Label</label>
                    <input slot="input" id="prefix2"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
                <dss-input-action icon="add_box" inputsize="lg" inputPrefix="1/">
                <label slot="label" for="prefix3" >Label</label>
                    <input slot="input" id="prefix3" type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-input-action>
            </div>
    \`;
  }
}`,...(J=(E=b.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};const X=["PlaygroundText","PlaygroundNumber","ByDefaultText","TextDouble","ByDefaultNumber","NumberDouble","Sizes","Masks","Units","Prefix"],j=Object.freeze(Object.defineProperty({__proto__:null,ByDefaultNumber:r,ByDefaultText:s,Masks:u,NumberDouble:c,PlaygroundNumber:a,PlaygroundText:o,Prefix:b,Sizes:d,TextDouble:l,Units:p,__namedExportsOrder:X,default:K},Symbol.toStringTag,{value:"Module"}));export{s as B,u as M,c as N,o as P,j as S,l as T,p as U,r as a,d as b,b as c};
