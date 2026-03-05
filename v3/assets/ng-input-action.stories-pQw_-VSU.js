import{x as e}from"./iframe-CdZ_4rdx.js";const m={title:"Components/Angular/Input Action",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},icon:{name:"Mostrar icona",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}},mainActionIcon:{name:"Icona de l'acció principal."},mainActionType:{name:"Tipus de acció principal",control:{type:"select"},options:["primary","error","warning","success","info","neutral","ghost"]},showSecondaryAction:{name:"Mostrar acció secundària.",control:{type:"boolean"}},secondaryActionIcon:{name:"Icona de l'acció secundària.",if:{arg:"showSecondaryAction"}},secondaryActionType:{name:"Tipus de acció secundària",control:{type:"select"},options:["primary","error","warning","success","info","neutral","ghost"],if:{arg:"showSecondaryAction"}},showUnit:{name:"Mostrar unitats",control:{type:"boolean"}},unit:{name:"Unitats",control:{type:"text"},if:{arg:"showUnit"}},showInputPrefix:{name:"Mostrar prefix",control:{type:"boolean"}},inputPrefix:{name:"Prefix",control:{type:"text"},if:{arg:"showInputPrefix"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=550-7833&m=dev"}},name:"Playground - Text",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,mainActionIcon:"add_box",mainActionType:"primary",showSecondaryAction:!1,secondaryActionIcon:"cancel",secondaryActionType:"error",showUnit:!1,unit:"cm",showInputPrefix:!1,inputPrefix:"1/"},render:n=>{const t=n.showMaxLength?n.maxLength:null,i=n.showDescription?n.description:null;return e`
        ${n.showPlaceholder?e`
            <dss-ng-input-action
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${i}
                            .unit=${n.showUnit?n.unit:""}
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
            </dss-ng-input-action>
          `:e`
          <dss-ng-input-action
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${i}
                            .unit=${n.showUnit?n.unit:""}
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
            </dss-ng-input-action>
          `}
      `}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=550-7833&m=dev"}},name:"Playground - Number",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,mainActionIcon:"add_box",mainActionType:"primary",showSecondaryAction:!1,secondaryActionIcon:"cancel",secondaryActionType:"error",showUnit:!1,unit:"cm",showInputPrefix:!1,inputPrefix:"1/"},render:n=>{const t=n.showMaxLength?n.maxLength:null,i=n.showDescription?n.description:null;return e`
          ${n.showPlaceholder?e`
            <dss-ng-input-action
              label="${n.label}"
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${i}
                            .unit=${n.showUnit?n.unit:""}
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
            </dss-ng-input-action>
          `:e`
            <dss-ng-input-action
              label="${n.label}"
              icon="${n.icon?"person":""}"
              inputSize="${n.size}"
              helpText=${i}
                            .unit=${n.showUnit?n.unit:""}
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
            </dss-ng-input-action>
          `}
      `}},s={tags:["!dev"],render:()=>e`
       <dss-ng-input-action
    icon="add_box"
  >
    <label slot="label" for="defaultText" >Label</label>
    <input slot="input" id="defaultText" type="text"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
  </dss-ng-input-action>
    `},l={tags:["!dev"],render:()=>e`
      <dss-ng-input-action
    icon="add_box"
  >
    <label slot="label" for="secondActionText" >Label</label>
    <input slot="input" id="secondActionText" type="text"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
    <dss-icon-button slot="secondaryAction" variant="danger" icon="cancel" label="Task name"></dss-icon-button>
  </dss-ng-input-action>
    `},r={tags:["!dev"],render:()=>e`
     <dss-ng-input-action
    icon="add_box"
  >
    <label slot="label" for="defaultNumber" >Label</label>
    <input slot="input" id="defaultNumber" type="number"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
  </dss-ng-input-action>
    `},d={tags:["!dev"],render:()=>e`
      <dss-ng-input-action
    icon="add_box"
  >
    <label slot="label" for="secondActionNumber" >Label</label>
    <input slot="input" id="secondActionNumber" type="number"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
    <dss-icon-button slot="secondaryAction" variant="danger" icon="cancel" label="Task name"></dss-icon-button>
  </dss-ng-input-action>
    `},c={tags:["!dev"],render:()=>e`
            <div class="inputs-sizes">
                <dss-ng-input-action icon="add_box" inputSize="lg">
                    <label slot="label" for="sizeLg" >Size LG</label>
                    <input slot="input" id="sizeLg" type="text"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="add_box" inputSize="md">
                    <label slot="label" for="sizeMd" >Size MD</label>
                    <input slot="input" id="sizeMd" type="text"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="add_box" inputSize="sm">
                    <label slot="label" for="sizeSm" >Size SM</label>
                    <input slot="input" id="sizeSm" type="text"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
            </div>
    `},u={tags:["!dev"],render:()=>e`
            <div class="inputs-sizes">
                <dss-ng-input-action icon="credit_card" inputsize="lg" maskRegex="/(\\d{4})(?=\\d)/g" maskReplace="$1 ">
                <label slot="label" for="mask1">Credit Card</label>
                    <input slot="input" id="mask1"  type="text" maxlength="19"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="regular_expression" inputsize="lg" maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2">
                <label slot="label" for="mask2" >Custom mask</label>					
                    <input slot="input" id="mask2" type="text" maxlength="6"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
            </div>
    `},p={tags:["!dev"],render:()=>e`
            <div class="inputs-sizes">
                <dss-ng-input-action icon="add_box" inputsize="sm" unit="cm">
                <label slot="label" for="unit1">Label</label>
                    <input slot="input" id="unit1"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="add_box" inputsize="md" unit="cm">
                <label slot="label" for="unit2">Label</label>
                    <input slot="input" id="unit2"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="add_box" inputsize="lg" unit="cm">
                <label slot="label" for="unit3" >Label</label>
                    <input slot="input" id="unit3" type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
            </div>
    `},b={tags:["!dev"],render:()=>e`
            <div class="inputs-sizes">
                <dss-ng-input-action icon="add_box" inputsize="sm" inputPrefix="1/">
                <label slot="label" for="prefix1">Label</label>
                    <input slot="input" id="prefix1"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="add_box" inputsize="md" inputPrefix="1/">
                <label slot="label" for="prefix2">Label</label>
                    <input slot="input" id="prefix2"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="add_box" inputsize="lg" inputPrefix="1/">
                <label slot="label" for="prefix3" >Label</label>
                    <input slot="input" id="prefix3" type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
            </div>
    `};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    showUnit: false,
    unit: 'cm',
    showInputPrefix: false,
    inputPrefix: '1/'
  },
  render: (args: any) => {
    const maxlength = args.showMaxLength ? args.maxLength : null;
    const description = args.showDescription ? args.description : null;
    return html\`
        \${args.showPlaceholder ? html\`
            <dss-ng-input-action
              icon="\${args.icon ? 'person' : ''}"
              inputSize="\${args.size}"
              helpText=\${description}
                            .unit=\${args.showUnit ? args.unit : ''}
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
            </dss-ng-input-action>
          \` : html\`
          <dss-ng-input-action
              icon="\${args.icon ? 'person' : ''}"
              inputSize="\${args.size}"
              helpText=\${description}
                            .unit=\${args.showUnit ? args.unit : ''}
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
            </dss-ng-input-action>
          \`}
      \`;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    showUnit: false,
    unit: 'cm',
    showInputPrefix: false,
    inputPrefix: '1/'
  },
  render: (args: any) => {
    const maxlength = args.showMaxLength ? args.maxLength : null;
    const description = args.showDescription ? args.description : null;
    return html\`
          \${args.showPlaceholder ? html\`
            <dss-ng-input-action
              label="\${args.label}"
              icon="\${args.icon ? 'person' : ''}"
              inputSize="\${args.size}"
              helpText=\${description}
                            .unit=\${args.showUnit ? args.unit : ''}
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
            </dss-ng-input-action>
          \` : html\`
            <dss-ng-input-action
              label="\${args.label}"
              icon="\${args.icon ? 'person' : ''}"
              inputSize="\${args.size}"
              helpText=\${description}
                            .unit=\${args.showUnit ? args.unit : ''}
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
            </dss-ng-input-action>
          \`}
      \`;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <dss-ng-input-action
    icon="add_box"
  >
    <label slot="label" for="defaultText" >Label</label>
    <input slot="input" id="defaultText" type="text"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
  </dss-ng-input-action>
    \`;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-input-action
    icon="add_box"
  >
    <label slot="label" for="secondActionText" >Label</label>
    <input slot="input" id="secondActionText" type="text"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
    <dss-icon-button slot="secondaryAction" variant="danger" icon="cancel" label="Task name"></dss-icon-button>
  </dss-ng-input-action>
    \`;
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-ng-input-action
    icon="add_box"
  >
    <label slot="label" for="defaultNumber" >Label</label>
    <input slot="input" id="defaultNumber" type="number"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
  </dss-ng-input-action>
    \`;
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-input-action
    icon="add_box"
  >
    <label slot="label" for="secondActionNumber" >Label</label>
    <input slot="input" id="secondActionNumber" type="number"/>
    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
    <dss-icon-button slot="secondaryAction" variant="danger" icon="cancel" label="Task name"></dss-icon-button>
  </dss-ng-input-action>
    \`;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-ng-input-action icon="add_box" inputSize="lg">
                    <label slot="label" for="sizeLg" >Size LG</label>
                    <input slot="input" id="sizeLg" type="text"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="add_box" inputSize="md">
                    <label slot="label" for="sizeMd" >Size MD</label>
                    <input slot="input" id="sizeMd" type="text"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="add_box" inputSize="sm">
                    <label slot="label" for="sizeSm" >Size SM</label>
                    <input slot="input" id="sizeSm" type="text"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
            </div>
    \`;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-ng-input-action icon="credit_card" inputsize="lg" maskRegex="/(\\\\d{4})(?=\\\\d)/g" maskReplace="$1 ">
                <label slot="label" for="mask1">Credit Card</label>
                    <input slot="input" id="mask1"  type="text" maxlength="19"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="regular_expression" inputsize="lg" maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2">
                <label slot="label" for="mask2" >Custom mask</label>					
                    <input slot="input" id="mask2" type="text" maxlength="6"/>
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
            </div>
    \`;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-ng-input-action icon="add_box" inputsize="sm" unit="cm">
                <label slot="label" for="unit1">Label</label>
                    <input slot="input" id="unit1"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="add_box" inputsize="md" unit="cm">
                <label slot="label" for="unit2">Label</label>
                    <input slot="input" id="unit2"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="add_box" inputsize="lg" unit="cm">
                <label slot="label" for="unit3" >Label</label>
                    <input slot="input" id="unit3" type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
            </div>
    \`;
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-ng-input-action icon="add_box" inputsize="sm" inputPrefix="1/">
                <label slot="label" for="prefix1">Label</label>
                    <input slot="input" id="prefix1"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="add_box" inputsize="md" inputPrefix="1/">
                <label slot="label" for="prefix2">Label</label>
                    <input slot="input" id="prefix2"  type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
                <dss-ng-input-action icon="add_box" inputsize="lg" inputPrefix="1/">
                <label slot="label" for="prefix3" >Label</label>
                    <input slot="input" id="prefix3" type="number" />
                    <dss-icon-button slot="action" variant="primary" icon="file_upload" label="Task name"></dss-icon-button>
                </dss-ng-input-action>
            </div>
    \`;
  }
}`,...b.parameters?.docs?.source}}};const y=["PlaygroundText","PlaygroundNumber","ByDefaultText","TextDouble","ByDefaultNumber","NumberDouble","Sizes","Masks","Units","Prefix"],x=Object.freeze(Object.defineProperty({__proto__:null,ByDefaultNumber:r,ByDefaultText:s,Masks:u,NumberDouble:d,PlaygroundNumber:a,PlaygroundText:o,Prefix:b,Sizes:c,TextDouble:l,Units:p,__namedExportsOrder:y,default:m},Symbol.toStringTag,{value:"Module"}));export{s as B,u as M,d as N,o as P,x as S,l as T,p as U,r as a,c as b,b as c};
