import{x as n}from"./iframe-DLVb3rJw.js";const y={title:"Components/Angular/Input",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},icon:{name:"Mostrar icona",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}},showUnit:{name:"Mostrar unitat",control:{type:"boolean"}},unit:{name:"Unitats",control:{type:"text"},if:{arg:"showUnit"}},showInputPrefix:{name:"Mostrar prefix",control:{type:"boolean"}},inputPrefix:{name:"Prefix",control:{type:"text"},if:{arg:"showInputPrefix"}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-20744&m=dev"}},name:"Playground - Text",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,showUnit:!1,unit:"cm",showInputPrefix:!1,inputPrefix:"1/"},render:e=>{const t=e.showMaxLength?e.maxLength:null,l=e.showDescription?e.description:null;return n`
    ${e.showPlaceholder?n`
            <dss-ng-input
              icon="${e.icon?"add_box":""}"
              inputSize="${e.size}"
              helpText=${l}
                            .unit=${e.showUnit?e.unit:""}
                            .inputPrefix=${e.showInputPrefix?e.inputPrefix:""}
            >
                <label slot="label" for="myInputText" >${e.label}</label>
                ${e.showMaxLength?n`
                    <input id="myInputText" slot="input" type="text" placeholder="${e.placeholder}" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxLength=${t}/>
                  `:n`
                    <input id="myInputText" slot="input" type="text" placeholder="${e.placeholder}" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} />
                  `}
            </dss-ng-input>
          `:n`
          <dss-ng-input
              icon="${e.icon?"add_box":""}"
              inputSize="${e.size}"
              helpText=${l}
                            .unit=${e.showUnit?e.unit:""}
                            .inputPrefix=${e.showInputPrefix?e.inputPrefix:""}
            >
                <label slot="label" for="myInputText" >${e.label}</label>
                ${e.showMaxLength?n`
                    <input id="myInputText" slot="input" type="text"  ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxLength=${t}/>
                  `:n`
                    <input id="myInputText" slot="input" type="text"  ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} />
                  `}
            </dss-ng-input>
          `}
    `}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=920-29472&m=dev"}},name:"Playground - Number",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,showUnit:!1,unit:"cm",showInputPrefix:!1,inputPrefix:"1/"},render:e=>{const t=e.showMaxLength?e.maxLength:null,l=e.showDescription?e.description:null;return n`
        ${e.showPlaceholder?n`
          <dss-ng-input
            label="${e.label}"
            icon="${e.icon?"add_box":""}"
            inputSize="${e.size}"
            helpText=${l}
                        .unit=${e.showUnit?e.unit:""}
                        .inputPrefix=${e.showInputPrefix?e.inputPrefix:""}
          >
              <label slot="label" for="myInputNumber" >${e.label}</label>
              ${e.showMaxLength?n`
                  <input id="myInputNumber" slot="input" type="number"  placeholder="${e.placeholder}" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxlength="${t}"/>
                `:n`
                  <input id="myInputNumber" slot="input" type="number"  placeholder="${e.placeholder}" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled}/>
                `}
          </dss-ng-input>
        `:n`
          <dss-ng-input
            label="${e.label}"
            icon="${e.icon?"add_box":""}"
            inputSize="${e.size}"
            helpText=${l}
                        .unit=${e.showUnit?e.unit:""}
                        .inputPrefix=${e.showInputPrefix?e.inputPrefix:""}
          >
              <label slot="label" for="myInputNumber" >${e.label}</label>
              ${e.showMaxLength?n`
                  <input id="myInputNumber" slot="input" type="number"  ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxlength="${t}"/>
                `:n`
                  <input id="myInputNumber" slot="input" type="number"  ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled}/>
                `}
          </dss-ng-input>
        `}
    `}},a={tags:["!dev"],render:()=>n`
        <dss-ng-input
    icon="lock"
  >
    <label slot="label" for="input2" >Required</label>
    <input slot="input" id="input2"  type="text" placeholder="Type here" required/>
  </dss-ng-input>
    `},d={tags:["!dev"],render:()=>n`
        <div class="inputs-sizes">
            <dss-ng-input icon="add_box" >
                <label slot="label" for="iDisabled1">Read Only</label>
                <input slot="input" id="iDisabled1"  type="text" disabled/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" >
                <label slot="label" for="iDisabled2">Read Only</label>
                <input slot="input" id="iDisabled2"  type="text" disabled placeholder="Placeholder"/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" >
                <label slot="label" for="iDisabled3">Read Only</label>
                <input slot="input" id="iDisabled3"  type="text" disabled value="Value text"/>
            </dss-ng-input>
        </div>
    `},r={tags:["!dev"],render:()=>n`
        <div class="inputs-sizes">
            <dss-ng-input icon="add_box" >
                <label slot="label" for="iReadOnly1">Read Only</label>
                <input slot="input" id="iReadOnly1"  type="text" readonly/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" >
                <label slot="label" for="iReadOnly2">Read Only</label>
                <input slot="input" id="iReadOnly2"  type="text" readonly placeholder="Placeholder"/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" >
                <label slot="label" for="iReadOnly3">Read Only</label>
                <input slot="input" id="iReadOnly3"  type="text" readonly value="Value text"/>
            </dss-ng-input>
        </div>
    `},o={tags:["!dev"],render:()=>n`
        <div class="inputs-sizes">
            <dss-ng-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid1">Label</label>
                <input slot="input" id="inputInvalid1" type="text" />
            </dss-ng-input>
            <dss-ng-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid2">Label</label>
                <input slot="input" id="inputInvalid2"  type="text" placeholder="Placeholder"/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid3">Label</label>
                <input slot="input" id="inputInvalid3"  type="text" value="Value text"/>
            </dss-ng-input>
        </div>
        <br/>
        <div class="inputs-sizes">
            <dss-ng-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid4">Read Only</label>
                <input slot="input" id="inputInvalid4"  type="text" readonly/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid5">Read Only</label>
                <input slot="input" id="inputInvalid5"  type="text" readonly placeholder="Placeholder"/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid6">Read Only</label>
                <input slot="input" id="inputInvalid6"  type="text" readonly value="Value text"/>
            </dss-ng-input>
        </div>
    `},p={tags:["!dev"],render:()=>n`
            <div class="inputs-sizes">
                <dss-ng-input
                    icon="add_box"
                    inputSize="lg"
                    >
                    <label slot="label" for="inputLg">Size LG</label>
                    <input slot="input" id="inputLg"  type="text" />
                </dss-ng-input>
                <dss-ng-input
                    icon="add_box"
                    inputSize="md"
                    >
                    <label slot="label" for="inputMd">Size MD</label>
                    <input slot="input" id="inputMd"  type="text" />
                </dss-ng-input>
                <dss-ng-input
                    icon="add_box"
                    inputSize="sm"
                    >
                    <label slot="label" for="inputMd">Size SM</label>
                    <input slot="input" id="inputMd"  type="text" />
                </dss-ng-input>  
            </div>
    `},u={tags:["!dev"],render:()=>n`
      <dss-ng-input
    icon="live_help"
    helpText="Help Text"
  >
    <label slot="label" for="input6" >Label</label>
    <input slot="input" id="input6"  type="text" placeholder="Type here" />
  </dss-ng-input>
    `},b={tags:["!dev"],render:()=>n`
      <dss-ng-input
    icon="123"
    helpText="Help text."
  >
    <label slot="label" for="input7" >Max length</label>
    <input  slot="input" id="input7"  type="number" maxlength="4" />
  </dss-ng-input>
    `},c={tags:["!dev"],render:()=>n`
      <dss-ng-input
    icon="123"
    helpText="Help text."
  >
    <label slot="label" for="input8" >Am decimals</label>
    <input  slot="input" id="input8"  type="number" step="0.01"/>
  </dss-ng-input>
    `},g={tags:["!dev"],render:()=>n`
            <div class="inputs-sizes">
                <dss-ng-input icon="add_box">
                    <input slot="input" id="noLabel"  type="text" aria-label="My input label"/>
                    </dss-ng-input>
                <dss-ng-input icon="add_box">
                    <input slot="input" id="noLabelPlaceholder"  type="text" aria-label="My input label" placeholder='Placeholder'/>
                </dss-ng-input>
            </div>
    `},m={tags:["!dev"],render:()=>n`
            <div class="inputs-sizes">
                <dss-ng-input icon="credit_card" inputsize="lg" maskRegex="/(\\d{4})(?=\\d)/g" maskReplace="$1 ">
                <label slot="label" for="mask1">Credit Card</label>
                    <input slot="input" id="mask1"  type="text" maxlength="19"/>
                </dss-ng-input>
                <dss-ng-input icon="regular_expression" inputsize="lg" maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2">
                <label slot="label" for="mask2" >Custom mask</label>					
                    <input slot="input" id="mask2" type="text" maxlength="6"/>
                </dss-ng-input>
            </div>
    `},x={tags:["!dev"],render:()=>n`
            <div class="inputs-sizes">
                <dss-ng-input icon="add_box" inputsize="sm" unit="cm">
                <label slot="label" for="unit1">Label</label>
                    <input slot="input" id="unit1"  type="number" />
                </dss-ng-input>
                <dss-ng-input icon="add_box" inputsize="md" unit="cm">
                <label slot="label" for="unit2">Label</label>
                    <input slot="input" id="unit2"  type="number" />
                </dss-ng-input>
                <dss-ng-input icon="add_box" inputsize="lg" unit="cm">
                <label slot="label" for="unit3" >Label</label>
                    <input slot="input" id="unit3" type="number" />
                </dss-ng-input>
            </div>
    `},h={tags:["!dev"],render:()=>n`
            <div class="inputs-sizes">
                <dss-ng-input icon="add_box" inputsize="sm" inputPrefix="1/">
                <label slot="label" for="prefix1">Label</label>
                    <input slot="input" id="prefix1"  type="number" />
                </dss-ng-input>
                <dss-ng-input icon="add_box" inputsize="md" inputPrefix="1/">
                <label slot="label" for="prefix2">Label</label>
                    <input slot="input" id="prefix2"  type="number" />
                </dss-ng-input>
                <dss-ng-input icon="add_box" inputsize="lg" inputPrefix="1/">
                <label slot="label" for="prefix3" >Label</label>
                    <input slot="input" id="prefix3" type="number" />
                </dss-ng-input>
            </div>
    `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-20744&m=dev'
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
            <dss-ng-input
              icon="\${args.icon ? 'add_box' : ''}"
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
            </dss-ng-input>
          \` : html\`
          <dss-ng-input
              icon="\${args.icon ? 'add_box' : ''}"
              inputSize="\${args.size}"
              helpText=\${description}
                            .unit=\${args.showUnit ? args.unit : ''}
                            .inputPrefix=\${args.showInputPrefix ? args.inputPrefix : ''}
            >
                <label slot="label" for="myInputText" >\${args.label}</label>
                \${args.showMaxLength ? html\`
                    <input id="myInputText" slot="input" type="text"  ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} maxLength=\${maxlength}/>
                  \` : html\`
                    <input id="myInputText" slot="input" type="text"  ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} />
                  \`}
            </dss-ng-input>
          \`}
    \`;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=920-29472&m=dev'
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
          <dss-ng-input
            label="\${args.label}"
            icon="\${args.icon ? 'add_box' : ''}"
            inputSize="\${args.size}"
            helpText=\${description}
                        .unit=\${args.showUnit ? args.unit : ''}
                        .inputPrefix=\${args.showInputPrefix ? args.inputPrefix : ''}
          >
              <label slot="label" for="myInputNumber" >\${args.label}</label>
              \${args.showMaxLength ? html\`
                  <input id="myInputNumber" slot="input" type="number"  placeholder="\${args.placeholder}" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} maxlength="\${maxlength}"/>
                \` : html\`
                  <input id="myInputNumber" slot="input" type="number"  placeholder="\${args.placeholder}" ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled}/>
                \`}
          </dss-ng-input>
        \` : html\`
          <dss-ng-input
            label="\${args.label}"
            icon="\${args.icon ? 'add_box' : ''}"
            inputSize="\${args.size}"
            helpText=\${description}
                        .unit=\${args.showUnit ? args.unit : ''}
                        .inputPrefix=\${args.showInputPrefix ? args.inputPrefix : ''}
          >
              <label slot="label" for="myInputNumber" >\${args.label}</label>
              \${args.showMaxLength ? html\`
                  <input id="myInputNumber" slot="input" type="number"  ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled} maxlength="\${maxlength}"/>
                \` : html\`
                  <input id="myInputNumber" slot="input" type="number"  ?required=\${args.required} ?readonly=\${args.readonly} ?disabled=\${args.disabled}/>
                \`}
          </dss-ng-input>
        \`}
    \`;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-ng-input
    icon="lock"
  >
    <label slot="label" for="input2" >Required</label>
    <input slot="input" id="input2"  type="text" placeholder="Type here" required/>
  </dss-ng-input>
    \`;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="inputs-sizes">
            <dss-ng-input icon="add_box" >
                <label slot="label" for="iDisabled1">Read Only</label>
                <input slot="input" id="iDisabled1"  type="text" disabled/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" >
                <label slot="label" for="iDisabled2">Read Only</label>
                <input slot="input" id="iDisabled2"  type="text" disabled placeholder="Placeholder"/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" >
                <label slot="label" for="iDisabled3">Read Only</label>
                <input slot="input" id="iDisabled3"  type="text" disabled value="Value text"/>
            </dss-ng-input>
        </div>
    \`;
  }
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="inputs-sizes">
            <dss-ng-input icon="add_box" >
                <label slot="label" for="iReadOnly1">Read Only</label>
                <input slot="input" id="iReadOnly1"  type="text" readonly/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" >
                <label slot="label" for="iReadOnly2">Read Only</label>
                <input slot="input" id="iReadOnly2"  type="text" readonly placeholder="Placeholder"/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" >
                <label slot="label" for="iReadOnly3">Read Only</label>
                <input slot="input" id="iReadOnly3"  type="text" readonly value="Value text"/>
            </dss-ng-input>
        </div>
    \`;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="inputs-sizes">
            <dss-ng-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid1">Label</label>
                <input slot="input" id="inputInvalid1" type="text" />
            </dss-ng-input>
            <dss-ng-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid2">Label</label>
                <input slot="input" id="inputInvalid2"  type="text" placeholder="Placeholder"/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid3">Label</label>
                <input slot="input" id="inputInvalid3"  type="text" value="Value text"/>
            </dss-ng-input>
        </div>
        <br/>
        <div class="inputs-sizes">
            <dss-ng-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid4">Read Only</label>
                <input slot="input" id="inputInvalid4"  type="text" readonly/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid5">Read Only</label>
                <input slot="input" id="inputInvalid5"  type="text" readonly placeholder="Placeholder"/>
            </dss-ng-input>
            <dss-ng-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid6">Read Only</label>
                <input slot="input" id="inputInvalid6"  type="text" readonly value="Value text"/>
            </dss-ng-input>
        </div>
    \`;
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-ng-input
                    icon="add_box"
                    inputSize="lg"
                    >
                    <label slot="label" for="inputLg">Size LG</label>
                    <input slot="input" id="inputLg"  type="text" />
                </dss-ng-input>
                <dss-ng-input
                    icon="add_box"
                    inputSize="md"
                    >
                    <label slot="label" for="inputMd">Size MD</label>
                    <input slot="input" id="inputMd"  type="text" />
                </dss-ng-input>
                <dss-ng-input
                    icon="add_box"
                    inputSize="sm"
                    >
                    <label slot="label" for="inputMd">Size SM</label>
                    <input slot="input" id="inputMd"  type="text" />
                </dss-ng-input>  
            </div>
    \`;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-input
    icon="live_help"
    helpText="Help Text"
  >
    <label slot="label" for="input6" >Label</label>
    <input slot="input" id="input6"  type="text" placeholder="Type here" />
  </dss-ng-input>
    \`;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-input
    icon="123"
    helpText="Help text."
  >
    <label slot="label" for="input7" >Max length</label>
    <input  slot="input" id="input7"  type="number" maxlength="4" />
  </dss-ng-input>
    \`;
  }
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-ng-input
    icon="123"
    helpText="Help text."
  >
    <label slot="label" for="input8" >Am decimals</label>
    <input  slot="input" id="input8"  type="number" step="0.01"/>
  </dss-ng-input>
    \`;
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-ng-input icon="add_box">
                    <input slot="input" id="noLabel"  type="text" aria-label="My input label"/>
                    </dss-ng-input>
                <dss-ng-input icon="add_box">
                    <input slot="input" id="noLabelPlaceholder"  type="text" aria-label="My input label" placeholder='Placeholder'/>
                </dss-ng-input>
            </div>
    \`;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-ng-input icon="credit_card" inputsize="lg" maskRegex="/(\\\\d{4})(?=\\\\d)/g" maskReplace="$1 ">
                <label slot="label" for="mask1">Credit Card</label>
                    <input slot="input" id="mask1"  type="text" maxlength="19"/>
                </dss-ng-input>
                <dss-ng-input icon="regular_expression" inputsize="lg" maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2">
                <label slot="label" for="mask2" >Custom mask</label>					
                    <input slot="input" id="mask2" type="text" maxlength="6"/>
                </dss-ng-input>
            </div>
    \`;
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-ng-input icon="add_box" inputsize="sm" unit="cm">
                <label slot="label" for="unit1">Label</label>
                    <input slot="input" id="unit1"  type="number" />
                </dss-ng-input>
                <dss-ng-input icon="add_box" inputsize="md" unit="cm">
                <label slot="label" for="unit2">Label</label>
                    <input slot="input" id="unit2"  type="number" />
                </dss-ng-input>
                <dss-ng-input icon="add_box" inputsize="lg" unit="cm">
                <label slot="label" for="unit3" >Label</label>
                    <input slot="input" id="unit3" type="number" />
                </dss-ng-input>
            </div>
    \`;
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-ng-input icon="add_box" inputsize="sm" inputPrefix="1/">
                <label slot="label" for="prefix1">Label</label>
                    <input slot="input" id="prefix1"  type="number" />
                </dss-ng-input>
                <dss-ng-input icon="add_box" inputsize="md" inputPrefix="1/">
                <label slot="label" for="prefix2">Label</label>
                    <input slot="input" id="prefix2"  type="number" />
                </dss-ng-input>
                <dss-ng-input icon="add_box" inputsize="lg" inputPrefix="1/">
                <label slot="label" for="prefix3" >Label</label>
                    <input slot="input" id="prefix3" type="number" />
                </dss-ng-input>
            </div>
    \`;
  }
}`,...h.parameters?.docs?.source}}};const f=["PlaygroundText","PlaygroundNumber","Required","Disabled","ReadOnly","Invalid","Size","Help","Counter","Float","NoLabel","Masks","Units","Prefix"],v=Object.freeze(Object.defineProperty({__proto__:null,Counter:b,Disabled:d,Float:c,Help:u,Invalid:o,Masks:m,NoLabel:g,PlaygroundNumber:s,PlaygroundText:i,Prefix:h,ReadOnly:r,Required:a,Size:p,Units:x,__namedExportsOrder:f,default:y},Symbol.toStringTag,{value:"Module"}));export{b as C,d as D,c as F,u as H,o as I,m as M,g as N,i as P,a as R,v as S,x as U,r as a,p as b,h as c};
