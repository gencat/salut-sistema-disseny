import{x as s}from"./iframe-DLVb3rJw.js";import{w as n}from"./storybook-decorators-DSS85Rnr.js";const a=`
 .inputs-sizes {
        display: flex;
        gap: 16px;
        align-items: end;
    }
`,w={title:"Components/Input",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},hideLabel:{name:"Amagar label",control:{type:"boolean"}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}},min:{name:"Valor mínim",control:{type:"number"}},max:{name:"Valor màxim",control:{type:"number"}},step:{name:"Passos",control:{type:"number"}},showUnit:{name:"Mostrar unitat",control:{type:"boolean"}},unit:{name:"Unitats",control:{type:"text"},if:{arg:"showUnit"}},showInputPrefix:{name:"Mostrar prefix",control:{type:"boolean"}},inputPrefix:{name:"Prefix",control:{type:"text"},if:{arg:"showInputPrefix"}},hasActions:{name:"Amb accions",control:{type:"boolean"}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-20744&m=dev"}},name:"Playground - Text",args:{size:"lg",label:"Label",hideLabel:!1,showIcon:!0,icon:"person",required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Escriu aquí",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,showUnit:!1,unit:"cm",showInputPrefix:!1,inputPrefix:"1/",hasActions:!1},render:e=>{const v=e.showMaxLength?e.maxLength:null,f=e.showDescription?e.description:null;return s`
            <div style="width:200px">
                <dss-input
                    name="myInputText"
                    size="${e.size}"
                    .icon="${e.showIcon?e.icon:null}"
                    label="${e.label}"
                    ?hideLabel=${e.hideLabel}
                    .placeholder="${e.showPlaceholder?e.placeholder:""}" 
                    ?required=${e.required} 
                    ?readonly=${e.readonly} 
                    ?disabled=${e.disabled}
                    helpText=${f}
                    .unit=${e.showUnit?e.unit:null}
                    .inputPrefix=${e.showInputPrefix?e.inputPrefix:null}
                    .maxLength=${v}
                    ?hasActions=${e.hasActions}
                >	
                    ${e.hasActions?s`
                        <dss-icon-button icon="edit" ariaLabel="Edit"></dss-icon-button>
                        <dss-icon-button icon="delete" ariaLabel="Delete" variant="danger"></dss-icon-button>
                    `:null}
                </dss-input>
            </div>

        `}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=920-29472&m=dev"}},name:"Playground - Number",args:{size:"lg",label:"Label",hideLabel:!1,showIcon:!0,icon:"person",required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Escriu aquí",showDescription:!1,description:"Help Text",showMaxLength:!1,min:0,max:100,step:1,showUnit:!1,unit:"cm",showInputPrefix:!1,inputPrefix:"1/",hasActions:!1},render:e=>{const v=e.showDescription?e.description:null;return s`
            <div style="width:200px">
                <dss-input
                    type="number"
                    name="myInputNumber"
                    size="${e.size}"
                    .icon="${e.showIcon?e.icon:null}"
                    label="${e.label}"
                    ?hideLabel=${e.hideLabel}
                    .placeholder="${e.showPlaceholder?e.placeholder:""}" 
                    ?required=${e.required} 
                    ?readonly=${e.readonly} 
                    ?disabled=${e.disabled}
                    helpText=${v}
                    .unit=${e.showUnit?e.unit:null}
                    .inputPrefix=${e.showInputPrefix?e.inputPrefix:null}
                    .min=${e.min}
                    .max=${e.max}
                    .step=${e.step}
                    ?hasActions=${e.hasActions}
                >
                    ${e.hasActions?s`
                    <dss-icon-button icon="edit" ariaLabel="Edit"></dss-icon-button>
                    <dss-icon-button icon="delete" ariaLabel="Delete" variant="danger"></dss-icon-button>
                    `:null}
                </dss-input>
            </div>
    `}},l={tags:["!dev"],render:()=>s`
            <dss-input
                name="inputRequired"
                icon="lock"
                label="Required"
                required
            >
            </dss-input>
    `},d={tags:["!dev"],render:()=>s`
        <div class="inputs-sizes">
            <dss-input
                name="iDisabled1"
                icon="add_box"
                label="Disabled"
                disabled
            ></dss-input>
            <dss-input
                name="iDisabled2"
                icon="add_box"
                label="Disabled"
                placeholder="Amb placeholder"
                disabled
            ></dss-input>
            <dss-input
                name="iDisabled3"
                icon="add_box"
                label="Disabled"
                value="Amb value"
                disabled
            ></dss-input>
        </div>
    `,decorators:[n(a,"input-disabled-style")]},r={tags:["!dev"],render:()=>s`
        <div class="inputs-sizes">
            <dss-input
                name="iReadOnly1"
                icon="add_box"
                label="Read Only"
                readonly
            ></dss-input>
            <dss-input
                name="iReadOnly2"
                icon="add_box"
                label="Read Only"
                placeholder="Amb placeholder"
                readonly
            ></dss-input>
            <dss-input
                name="iReadOnly3"
                icon="add_box"
                label="Read Only"
                value="Amb value"
                readonly
            ></dss-input>
        </div>
    `,decorators:[n(a,"input-readonly-style")]},o={tags:["!dev"],render:()=>s`
        <div class="inputs-sizes">
            <dss-input
                name="inputInvalid1"
                icon="add_box"
                label="Invalid"
                invalid
            ></dss-input>
            <dss-input
                name="inputInvalid2"
                icon="add_box"
                label="Invalid"
                placeholder="Amb placeholder"
                invalid
            ></dss-input>
            <dss-input
                name="inputInvalid3"
                icon="add_box"
                label="Invalid"
                value="Amb value"
                invalid
            ></dss-input>
        </div>
        <br/>
        <div class="inputs-sizes">
            <dss-input
                name="inputInvalid4"
                icon="add_box"
                label="Invalid"
                readonly
                invalid
            ></dss-input>
            <dss-input
                name="inputInvalid5"
                icon="add_box"
                label="Invalid"
                placeholder="Amb placeholder"
                readonly
                invalid
            ></dss-input>
            <dss-input
                name="inputInvalid6"
                icon="add_box"
                label="Invalid"
                value="Amb value"
                readonly
                invalid
            ></dss-input>
        </div>
    `,decorators:[n(a,"input-invalid-style")]},p={tags:["!dev"],render:()=>s`
            <div class="inputs-sizes">
                <dss-input
                    name="inputSM"
                    icon="person"
                    label="Size sm"
                    size="sm"
                >
                </dss-input>
                <dss-input
                    name="inputMD"
                    icon="person"
                    label="Size md"
                    size="md"
                >
                </dss-input>
                <dss-input
                    name="inputLG"
                    icon="person"
                    label="Size lg"
                    size="lg"
                >
                </dss-input>
            </div>
    `,decorators:[n(a,"input-sizes-style")]},u={tags:["!dev"],render:()=>s`
            <dss-input
                name="inputHelp"
                icon="live_help"
                label="Label"
            helpText="Help Text"
            >
            </dss-input>
    `},c={tags:["!dev"],render:()=>s`
            <dss-input
                name="inputCounter"
                icon="123"
                label="Label"
            helpText="Help Text"
                maxLength="4"
            >
            </dss-input>
    `},m={tags:["!dev"],render:()=>s`
            <dss-input
                type="number"
                name="inputFloat"
                icon="123"
                label="Amb decimals"
            helpText="Help Text"
                step="0.01"
            >
            </dss-input>
    `},b={tags:["!dev"],render:()=>s`
            <div class="inputs-sizes">
                <dss-input
                    name="inputNoLabel"
                    icon="add_box"
                    label="Accesibility Label"
                    hideLabel
                >
                </dss-input>	
                <dss-input
                    name="inputNoLabelPlaceholder"
                    icon="add_box"
                    label="Accesibility Label"
                    hideLabel
                    placeholder="Amb placeholder"
                >
                </dss-input>	
            </div>
    `,decorators:[n(a,"input-no-label-style")]},h={tags:["!dev"],render:()=>s`
            <div class="inputs-sizes">
                <dss-input
                    name="mask1"
                    icon="credit_card"
                    label="Credit card"
                    maskRegex="/(\\d{4})(?=\\d)/g" 
                    maskReplace="$1 "
                    allowedChars="/[0-9]/g"
                    maxLength="19"
                >
                </dss-input>	
                <dss-input
                    name="mask2"
                    icon="regular_expression"
                    label="Custom mask"
                    maskRegex="/^(.{2})(.*)$/"
                    maskReplace="$1-$2"
                    maxLength="6"
                >
                </dss-input>	
            </div>
    `,decorators:[n(a,"input-masks-style")]},x={tags:["!dev"],render:()=>s`
            <div class="inputs-sizes">
                <dss-input
                    type="number"
                    name="unit1"
                    icon="add_box"
                    label="Label"
                    unit="cm"
                    size="sm"
                >
                </dss-input>
                <dss-input
                    type="number"
                    name="unit2"
                    icon="add_box"
                    label="Label"
                    unit="cm"
                    size="md"
                >
                </dss-input>
                <dss-input
                    type="number"
                    name="unit3"
                    icon="add_box"
                    label="Label"
                    unit="cm"
                    size="lg"
                >
                </dss-input>
            </div>
    `,decorators:[n(a,"input-units-style")]},y={tags:["!dev"],render:()=>s`
            <div class="inputs-sizes">
                <dss-input
                    type="number"
                    name="prefix1"
                    icon="add_box"
                    label="Label"
                    inputPrefix="1/"
                    size="sm"
                >
                </dss-input>
                <dss-input
                    type="number"
                    name="prefix2"
                    icon="add_box"
                    label="Label"
                    inputPrefix="1/"
                    size="md"
                >
                </dss-input>
                <dss-input
                    type="number"
                    name="prefix3"
                    icon="add_box"
                    label="Label"
                    inputPrefix="1/"
                    size="lg"
                >
                </dss-input>
            </div>
    `,decorators:[n(a,"input-prefix-style")]},g={tags:["!dev"],render:()=>{const e=s`
            <dss-icon-button icon="edit" ariaLabel="Edit"></dss-icon-button>
            <dss-icon-button icon="delete" ariaLabel="Delete" variant="danger"></dss-icon-button>
        `;return s`
            <div class="inputs-sizes">
                <dss-input
                    type="text"
                    name="actions1"
                    icon="add_box"
                    label="Label"
                    size="lg"
                    hasActions
                >
                    ${e}
                </dss-input>
                <dss-input
                    type="number"
                    name="actions2"
                    icon="add_box"
                    label="Label"
                    size="lg"
                    hasActions
                >
                    ${e}
                </dss-input>
            </div>
    `},decorators:[n(a,"input-actions-style")]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    hideLabel: false,
    showIcon: true,
    icon: 'person',
    required: false,
    readonly: false,
    disabled: false,
    showPlaceholder: false,
    placeholder: 'Escriu aquí',
    showDescription: false,
    description: 'Help Text',
    showMaxLength: false,
    maxLength: 10,
    showUnit: false,
    unit: 'cm',
    showInputPrefix: false,
    inputPrefix: '1/',
    hasActions: false
  },
  render: (args: any) => {
    const maxlength = args.showMaxLength ? args.maxLength : null;
    const description = args.showDescription ? args.description : null;
    return html\`
            <div style="width:200px">
                <dss-input
                    name="myInputText"
                    size="\${args.size}"
                    .icon="\${args.showIcon ? args.icon : null}"
                    label="\${args.label}"
                    ?hideLabel=\${args.hideLabel}
                    .placeholder="\${args.showPlaceholder ? args.placeholder : ''}" 
                    ?required=\${args.required} 
                    ?readonly=\${args.readonly} 
                    ?disabled=\${args.disabled}
                    helpText=\${description}
                    .unit=\${args.showUnit ? args.unit : null}
                    .inputPrefix=\${args.showInputPrefix ? args.inputPrefix : null}
                    .maxLength=\${maxlength}
                    ?hasActions=\${args.hasActions}
                >	
                    \${args.hasActions ? html\`
                        <dss-icon-button icon="edit" ariaLabel="Edit"></dss-icon-button>
                        <dss-icon-button icon="delete" ariaLabel="Delete" variant="danger"></dss-icon-button>
                    \` : null}
                </dss-input>
            </div>

        \`;
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    hideLabel: false,
    showIcon: true,
    icon: 'person',
    required: false,
    readonly: false,
    disabled: false,
    showPlaceholder: false,
    placeholder: 'Escriu aquí',
    showDescription: false,
    description: 'Help Text',
    showMaxLength: false,
    min: 0,
    max: 100,
    step: 1,
    showUnit: false,
    unit: 'cm',
    showInputPrefix: false,
    inputPrefix: '1/',
    hasActions: false
  },
  render: (args: any) => {
    const description = args.showDescription ? args.description : null;
    return html\`
            <div style="width:200px">
                <dss-input
                    type="number"
                    name="myInputNumber"
                    size="\${args.size}"
                    .icon="\${args.showIcon ? args.icon : null}"
                    label="\${args.label}"
                    ?hideLabel=\${args.hideLabel}
                    .placeholder="\${args.showPlaceholder ? args.placeholder : ''}" 
                    ?required=\${args.required} 
                    ?readonly=\${args.readonly} 
                    ?disabled=\${args.disabled}
                    helpText=\${description}
                    .unit=\${args.showUnit ? args.unit : null}
                    .inputPrefix=\${args.showInputPrefix ? args.inputPrefix : null}
                    .min=\${args.min}
                    .max=\${args.max}
                    .step=\${args.step}
                    ?hasActions=\${args.hasActions}
                >
                    \${args.hasActions ? html\`
                    <dss-icon-button icon="edit" ariaLabel="Edit"></dss-icon-button>
                    <dss-icon-button icon="delete" ariaLabel="Delete" variant="danger"></dss-icon-button>
                    \` : null}
                </dss-input>
            </div>
    \`;
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-input
                name="inputRequired"
                icon="lock"
                label="Required"
                required
            >
            </dss-input>
    \`;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="inputs-sizes">
            <dss-input
                name="iDisabled1"
                icon="add_box"
                label="Disabled"
                disabled
            ></dss-input>
            <dss-input
                name="iDisabled2"
                icon="add_box"
                label="Disabled"
                placeholder="Amb placeholder"
                disabled
            ></dss-input>
            <dss-input
                name="iDisabled3"
                icon="add_box"
                label="Disabled"
                value="Amb value"
                disabled
            ></dss-input>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-disabled-style')]
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="inputs-sizes">
            <dss-input
                name="iReadOnly1"
                icon="add_box"
                label="Read Only"
                readonly
            ></dss-input>
            <dss-input
                name="iReadOnly2"
                icon="add_box"
                label="Read Only"
                placeholder="Amb placeholder"
                readonly
            ></dss-input>
            <dss-input
                name="iReadOnly3"
                icon="add_box"
                label="Read Only"
                value="Amb value"
                readonly
            ></dss-input>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-readonly-style')]
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="inputs-sizes">
            <dss-input
                name="inputInvalid1"
                icon="add_box"
                label="Invalid"
                invalid
            ></dss-input>
            <dss-input
                name="inputInvalid2"
                icon="add_box"
                label="Invalid"
                placeholder="Amb placeholder"
                invalid
            ></dss-input>
            <dss-input
                name="inputInvalid3"
                icon="add_box"
                label="Invalid"
                value="Amb value"
                invalid
            ></dss-input>
        </div>
        <br/>
        <div class="inputs-sizes">
            <dss-input
                name="inputInvalid4"
                icon="add_box"
                label="Invalid"
                readonly
                invalid
            ></dss-input>
            <dss-input
                name="inputInvalid5"
                icon="add_box"
                label="Invalid"
                placeholder="Amb placeholder"
                readonly
                invalid
            ></dss-input>
            <dss-input
                name="inputInvalid6"
                icon="add_box"
                label="Invalid"
                value="Amb value"
                readonly
                invalid
            ></dss-input>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-invalid-style')]
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input
                    name="inputSM"
                    icon="person"
                    label="Size sm"
                    size="sm"
                >
                </dss-input>
                <dss-input
                    name="inputMD"
                    icon="person"
                    label="Size md"
                    size="md"
                >
                </dss-input>
                <dss-input
                    name="inputLG"
                    icon="person"
                    label="Size lg"
                    size="lg"
                >
                </dss-input>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-sizes-style')]
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-input
                name="inputHelp"
                icon="live_help"
                label="Label"
            helpText="Help Text"
            >
            </dss-input>
    \`;
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-input
                name="inputCounter"
                icon="123"
                label="Label"
            helpText="Help Text"
                maxLength="4"
            >
            </dss-input>
    \`;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-input
                type="number"
                name="inputFloat"
                icon="123"
                label="Amb decimals"
            helpText="Help Text"
                step="0.01"
            >
            </dss-input>
    \`;
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input
                    name="inputNoLabel"
                    icon="add_box"
                    label="Accesibility Label"
                    hideLabel
                >
                </dss-input>	
                <dss-input
                    name="inputNoLabelPlaceholder"
                    icon="add_box"
                    label="Accesibility Label"
                    hideLabel
                    placeholder="Amb placeholder"
                >
                </dss-input>	
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-no-label-style')]
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input
                    name="mask1"
                    icon="credit_card"
                    label="Credit card"
                    maskRegex="/(\\\\d{4})(?=\\\\d)/g" 
                    maskReplace="$1 "
                    allowedChars="/[0-9]/g"
                    maxLength="19"
                >
                </dss-input>	
                <dss-input
                    name="mask2"
                    icon="regular_expression"
                    label="Custom mask"
                    maskRegex="/^(.{2})(.*)$/"
                    maskReplace="$1-$2"
                    maxLength="6"
                >
                </dss-input>	
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-masks-style')]
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input
                    type="number"
                    name="unit1"
                    icon="add_box"
                    label="Label"
                    unit="cm"
                    size="sm"
                >
                </dss-input>
                <dss-input
                    type="number"
                    name="unit2"
                    icon="add_box"
                    label="Label"
                    unit="cm"
                    size="md"
                >
                </dss-input>
                <dss-input
                    type="number"
                    name="unit3"
                    icon="add_box"
                    label="Label"
                    unit="cm"
                    size="lg"
                >
                </dss-input>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-units-style')]
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input
                    type="number"
                    name="prefix1"
                    icon="add_box"
                    label="Label"
                    inputPrefix="1/"
                    size="sm"
                >
                </dss-input>
                <dss-input
                    type="number"
                    name="prefix2"
                    icon="add_box"
                    label="Label"
                    inputPrefix="1/"
                    size="md"
                >
                </dss-input>
                <dss-input
                    type="number"
                    name="prefix3"
                    icon="add_box"
                    label="Label"
                    inputPrefix="1/"
                    size="lg"
                >
                </dss-input>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-prefix-style')]
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const actions = html\`
            <dss-icon-button icon="edit" ariaLabel="Edit"></dss-icon-button>
            <dss-icon-button icon="delete" ariaLabel="Delete" variant="danger"></dss-icon-button>
        \`;
    return html\`
            <div class="inputs-sizes">
                <dss-input
                    type="text"
                    name="actions1"
                    icon="add_box"
                    label="Label"
                    size="lg"
                    hasActions
                >
                    \${actions}
                </dss-input>
                <dss-input
                    type="number"
                    name="actions2"
                    icon="add_box"
                    label="Label"
                    size="lg"
                    hasActions
                >
                    \${actions}
                </dss-input>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-actions-style')]
}`,...g.parameters?.docs?.source}}};const L=["PlaygroundText","PlaygroundNumber","Required","Disabled","ReadOnly","Invalid","Size","Help","Counter","Float","NoLabel","Masks","Units","Prefix","Actions"],S=Object.freeze(Object.defineProperty({__proto__:null,Actions:g,Counter:c,Disabled:d,Float:m,Help:u,Invalid:o,Masks:h,NoLabel:b,PlaygroundNumber:t,PlaygroundText:i,Prefix:y,ReadOnly:r,Required:l,Size:p,Units:x,__namedExportsOrder:L,default:w},Symbol.toStringTag,{value:"Module"}));export{g as A,c as C,d as D,m as F,u as H,o as I,h as M,b as N,i as P,l as R,S,x as U,r as a,p as b,y as c};
