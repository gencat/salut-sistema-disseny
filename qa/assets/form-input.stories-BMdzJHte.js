import{x as s}from"./lit-html-D6cejpwM.js";import{w as n}from"./storybook-decorators-DSS85Rnr.js";const a=`
 .inputs-sizes {
        display: flex;
        gap: 16px;
        align-items: end;
    }
`,me={title:"Components/Form/Input",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},hideLabel:{name:"Amagar label",control:{type:"boolean"}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}},min:{name:"Valor mínim",control:{type:"number"}},max:{name:"Valor màxim",control:{type:"number"}},step:{name:"Passos",control:{type:"number"}},showUnit:{name:"Mostrar unitat",control:{type:"boolean"}},unit:{name:"Unitats",control:{type:"text"},if:{arg:"showUnit"}},showInputPrefix:{name:"Mostrar prefix",control:{type:"boolean"}},inputPrefix:{name:"Prefix",control:{type:"text"},if:{arg:"showInputPrefix"}},hasActions:{name:"Amb accions",control:{type:"boolean"}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-20744&m=dev"}},name:"Playground - Text",args:{size:"lg",label:"Label",hideLabel:!1,showIcon:!0,icon:"person",required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Escriu aquí",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,showUnit:!1,unit:"cm",showInputPrefix:!1,inputPrefix:"1/",hasActions:!1},render:e=>{const v=e.showMaxLength?e.maxLength:null,ue=e.showDescription?e.description:null;return s`
            <div style="width:200px">
                <dss-form-input
                    name="myInputText"
                    size="${e.size}"
                    .icon="${e.showIcon?e.icon:null}"
                    label="${e.label}"
                    ?hideLabel=${e.hideLabel}
                    .placeholder="${e.showPlaceholder?e.placeholder:""}" 
                    ?required=${e.required} 
                    ?readonly=${e.readonly} 
                    ?disabled=${e.disabled}
                    helpText=${ue}
                    .unit=${e.showUnit?e.unit:null}
                    .inputPrefix=${e.showInputPrefix?e.inputPrefix:null}
                    maxLength=${v}
                    ?hasActions=${e.hasActions}
                >	
                    ${e.hasActions?s`
                        <dss-icon-button icon="edit" ariaLabel="Edit"></dss-icon-button>
                        <dss-icon-button icon="delete" ariaLabel="Delete" variant="error"></dss-icon-button>
                    `:null}
                </dss-form-input>
            </div>

        `}},r={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=920-29472&m=dev"}},name:"Playground - Number",args:{size:"lg",label:"Label",hideLabel:!1,showIcon:!0,icon:"person",required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Escriu aquí",showDescription:!1,description:"Help Text",showMaxLength:!1,min:0,max:100,step:1,showUnit:!1,unit:"cm",showInputPrefix:!1,inputPrefix:"1/",hasActions:!1},render:e=>{const v=e.showDescription?e.description:null;return s`
            <div style="width:200px">
                <dss-form-input
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
                    min=${e.min}
                    max=${e.max}
                    step=${e.step}
                    ?hasActions=${e.hasActions}
                >
                    ${e.hasActions?s`
                    <dss-icon-button icon="edit" ariaLabel="Edit"></dss-icon-button>
                    <dss-icon-button icon="delete" ariaLabel="Delete" variant="error"></dss-icon-button>
                    `:null}
                </dss-form-input>
            </div>
    `}},t={tags:["!dev"],render:()=>s`
            <dss-form-input
                name="inputRequired"
                icon="lock"
                label="Required"
                required
            >
            </dss-form-input>
    `},o={tags:["!dev"],render:()=>s`
        <div class="inputs-sizes">
            <dss-form-input
                name="iDisabled1"
                icon="add_box"
                label="Disabled"
                disabled
            ></dss-form-input>
            <dss-form-input
                name="iDisabled2"
                icon="add_box"
                label="Disabled"
                placeholder="Amb placeholder"
                disabled
            ></dss-form-input>
            <dss-form-input
                name="iDisabled3"
                icon="add_box"
                label="Disabled"
                value="Amb value"
                disabled
            ></dss-form-input>
        </div>
    `,decorators:[n(a,"input-disabled-style")]},l={tags:["!dev"],render:()=>s`
        <div class="inputs-sizes">
            <dss-form-input
                name="iReadOnly1"
                icon="add_box"
                label="Read Only"
                readonly
            ></dss-form-input>
            <dss-form-input
                name="iReadOnly2"
                icon="add_box"
                label="Read Only"
                placeholder="Amb placeholder"
                readonly
            ></dss-form-input>
            <dss-form-input
                name="iReadOnly3"
                icon="add_box"
                label="Read Only"
                value="Amb value"
                readonly
            ></dss-form-input>
        </div>
    `,decorators:[n(a,"input-readonly-style")]},d={tags:["!dev"],render:()=>s`
        <div class="inputs-sizes">
            <dss-form-input
                name="inputInvalid1"
                icon="add_box"
                label="Invalid"
                invalid
            ></dss-form-input>
            <dss-form-input
                name="inputInvalid2"
                icon="add_box"
                label="Invalid"
                placeholder="Amb placeholder"
                invalid
            ></dss-form-input>
            <dss-form-input
                name="inputInvalid3"
                icon="add_box"
                label="Invalid"
                value="Amb value"
                invalid
            ></dss-form-input>
        </div>
        <br/>
        <div class="inputs-sizes">
            <dss-form-input
                name="inputInvalid4"
                icon="add_box"
                label="Invalid"
                readonly
                invalid
            ></dss-form-input>
            <dss-form-input
                name="inputInvalid5"
                icon="add_box"
                label="Invalid"
                placeholder="Amb placeholder"
                readonly
                invalid
            ></dss-form-input>
            <dss-form-input
                name="inputInvalid6"
                icon="add_box"
                label="Invalid"
                value="Amb value"
                readonly
                invalid
            ></dss-form-input>
        </div>
    `,decorators:[n(a,"input-invalid-style")]},p={tags:["!dev"],render:()=>s`
            <div class="inputs-sizes">
                <dss-form-input
                    name="inputSM"
                    icon="person"
                    label="Size sm"
                    size="sm"
                >
                </dss-form-input>
                <dss-form-input
                    name="inputMD"
                    icon="person"
                    label="Size md"
                    size="md"
                >
                </dss-form-input>
                <dss-form-input
                    name="inputLG"
                    icon="person"
                    label="Size lg"
                    size="lg"
                >
                </dss-form-input>
            </div>
    `,decorators:[n(a,"input-sizes-style")]},u={tags:["!dev"],render:()=>s`
            <dss-form-input
                name="inputHelp"
                icon="live_help"
                label="Label"
            helpText="Help Text"
            >
            </dss-form-input>
    `},m={tags:["!dev"],render:()=>s`
            <dss-form-input
                name="inputCounter"
                icon="123"
                label="Label"
            helpText="Help Text"
                maxLength="4"
            >
            </dss-form-input>
    `},c={tags:["!dev"],render:()=>s`
            <dss-form-input
                type="number"
                name="inputFloat"
                icon="123"
                label="Amb decimals"
            helpText="Help Text"
                step="0.01"
            >
            </dss-form-input>
    `},b={tags:["!dev"],render:()=>s`
            <div class="inputs-sizes">
                <dss-form-input
                    name="inputNoLabel"
                    icon="add_box"
                    label="Accesibility Label"
                    hideLabel
                >
                </dss-form-input>	
                <dss-form-input
                    name="inputNoLabelPlaceholder"
                    icon="add_box"
                    label="Accesibility Label"
                    hideLabel
                    placeholder="Amb placeholder"
                >
                </dss-form-input>	
            </div>
    `,decorators:[n(a,"input-no-label-style")]},f={tags:["!dev"],render:()=>s`
            <div class="inputs-sizes">
                <dss-form-input
                    name="mask1"
                    icon="credit_card"
                    label="Credit card"
                    maskRegex="/(\\d{4})(?=\\d)/g" 
                    maskReplace="$1 "
                    allowedChars="/[0-9]/g"
                    maxLength="19"
                >
                </dss-form-input>	
                <dss-form-input
                    name="mask2"
                    icon="regular_expression"
                    label="Custom mask"
                    maskRegex="/^(.{2})(.*)$/"
                    maskReplace="$1-$2"
                    maxLength="6"
                >
                </dss-form-input>	
            </div>
    `,decorators:[n(a,"input-masks-style")]},h={tags:["!dev"],render:()=>s`
            <div class="inputs-sizes">
                <dss-form-input
                    type="number"
                    name="unit1"
                    icon="add_box"
                    label="Label"
                    unit="cm"
                    size="sm"
                >
                </dss-form-input>
                <dss-form-input
                    type="number"
                    name="unit2"
                    icon="add_box"
                    label="Label"
                    unit="cm"
                    size="md"
                >
                </dss-form-input>
                <dss-form-input
                    type="number"
                    name="unit3"
                    icon="add_box"
                    label="Label"
                    unit="cm"
                    size="lg"
                >
                </dss-form-input>
            </div>
    `,decorators:[n(a,"input-units-style")]},x={tags:["!dev"],render:()=>s`
            <div class="inputs-sizes">
                <dss-form-input
                    type="number"
                    name="prefix1"
                    icon="add_box"
                    label="Label"
                    inputPrefix="1/"
                    size="sm"
                >
                </dss-form-input>
                <dss-form-input
                    type="number"
                    name="prefix2"
                    icon="add_box"
                    label="Label"
                    inputPrefix="1/"
                    size="md"
                >
                </dss-form-input>
                <dss-form-input
                    type="number"
                    name="prefix3"
                    icon="add_box"
                    label="Label"
                    inputPrefix="1/"
                    size="lg"
                >
                </dss-form-input>
            </div>
    `,decorators:[n(a,"input-prefix-style")]},y={tags:["!dev"],render:()=>{const e=s`
            <dss-icon-button icon="edit" ariaLabel="Edit"></dss-icon-button>
            <dss-icon-button icon="delete" ariaLabel="Delete" variant="error"></dss-icon-button>
        `;return s`
            <div class="inputs-sizes">
                <dss-form-input
                    type="text"
                    name="actions1"
                    icon="add_box"
                    label="Label"
                    size="lg"
                    hasActions
                >
                    ${e}
                </dss-form-input>
                <dss-form-input
                    type="number"
                    name="actions2"
                    icon="add_box"
                    label="Label"
                    size="lg"
                    hasActions
                >
                    ${e}
                </dss-form-input>
            </div>
    `},decorators:[n(a,"input-actions-style")]};var g,w,L;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
                <dss-form-input
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
                    maxLength=\${maxlength}
                    ?hasActions=\${args.hasActions}
                >	
                    \${args.hasActions ? html\`
                        <dss-icon-button icon="edit" ariaLabel="Edit"></dss-icon-button>
                        <dss-icon-button icon="delete" ariaLabel="Delete" variant="error"></dss-icon-button>
                    \` : null}
                </dss-form-input>
            </div>

        \`;
  }
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var $,z,S;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
                <dss-form-input
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
                    min=\${args.min}
                    max=\${args.max}
                    step=\${args.step}
                    ?hasActions=\${args.hasActions}
                >
                    \${args.hasActions ? html\`
                    <dss-icon-button icon="edit" ariaLabel="Edit"></dss-icon-button>
                    <dss-icon-button icon="delete" ariaLabel="Delete" variant="error"></dss-icon-button>
                    \` : null}
                </dss-form-input>
            </div>
    \`;
  }
}`,...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var P,I,_;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-form-input
                name="inputRequired"
                icon="lock"
                label="Required"
                required
            >
            </dss-form-input>
    \`;
  }
}`,...(_=(I=t.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var A,D,T;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="inputs-sizes">
            <dss-form-input
                name="iDisabled1"
                icon="add_box"
                label="Disabled"
                disabled
            ></dss-form-input>
            <dss-form-input
                name="iDisabled2"
                icon="add_box"
                label="Disabled"
                placeholder="Amb placeholder"
                disabled
            ></dss-form-input>
            <dss-form-input
                name="iDisabled3"
                icon="add_box"
                label="Disabled"
                value="Amb value"
                disabled
            ></dss-form-input>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-disabled-style')]
}`,...(T=(D=o.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var q,R,k;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="inputs-sizes">
            <dss-form-input
                name="iReadOnly1"
                icon="add_box"
                label="Read Only"
                readonly
            ></dss-form-input>
            <dss-form-input
                name="iReadOnly2"
                icon="add_box"
                label="Read Only"
                placeholder="Amb placeholder"
                readonly
            ></dss-form-input>
            <dss-form-input
                name="iReadOnly3"
                icon="add_box"
                label="Read Only"
                value="Amb value"
                readonly
            ></dss-form-input>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-readonly-style')]
}`,...(k=(R=l.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var M,H,C;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="inputs-sizes">
            <dss-form-input
                name="inputInvalid1"
                icon="add_box"
                label="Invalid"
                invalid
            ></dss-form-input>
            <dss-form-input
                name="inputInvalid2"
                icon="add_box"
                label="Invalid"
                placeholder="Amb placeholder"
                invalid
            ></dss-form-input>
            <dss-form-input
                name="inputInvalid3"
                icon="add_box"
                label="Invalid"
                value="Amb value"
                invalid
            ></dss-form-input>
        </div>
        <br/>
        <div class="inputs-sizes">
            <dss-form-input
                name="inputInvalid4"
                icon="add_box"
                label="Invalid"
                readonly
                invalid
            ></dss-form-input>
            <dss-form-input
                name="inputInvalid5"
                icon="add_box"
                label="Invalid"
                placeholder="Amb placeholder"
                readonly
                invalid
            ></dss-form-input>
            <dss-form-input
                name="inputInvalid6"
                icon="add_box"
                label="Invalid"
                value="Amb value"
                readonly
                invalid
            ></dss-form-input>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-invalid-style')]
}`,...(C=(H=d.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var O,E,F;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-form-input
                    name="inputSM"
                    icon="person"
                    label="Size sm"
                    size="sm"
                >
                </dss-form-input>
                <dss-form-input
                    name="inputMD"
                    icon="person"
                    label="Size md"
                    size="md"
                >
                </dss-form-input>
                <dss-form-input
                    name="inputLG"
                    icon="person"
                    label="Size lg"
                    size="lg"
                >
                </dss-form-input>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-sizes-style')]
}`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var N,U,J;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-form-input
                name="inputHelp"
                icon="live_help"
                label="Label"
            helpText="Help Text"
            >
            </dss-form-input>
    \`;
  }
}`,...(J=(U=u.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,X,j;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-form-input
                name="inputCounter"
                icon="123"
                label="Label"
            helpText="Help Text"
                maxLength="4"
            >
            </dss-form-input>
    \`;
  }
}`,...(j=(X=m.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var G,V,B;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-form-input
                type="number"
                name="inputFloat"
                icon="123"
                label="Amb decimals"
            helpText="Help Text"
                step="0.01"
            >
            </dss-form-input>
    \`;
  }
}`,...(B=(V=c.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var Q,W,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-form-input
                    name="inputNoLabel"
                    icon="add_box"
                    label="Accesibility Label"
                    hideLabel
                >
                </dss-form-input>	
                <dss-form-input
                    name="inputNoLabelPlaceholder"
                    icon="add_box"
                    label="Accesibility Label"
                    hideLabel
                    placeholder="Amb placeholder"
                >
                </dss-form-input>	
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-no-label-style')]
}`,...(Y=(W=b.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,ee,se;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-form-input
                    name="mask1"
                    icon="credit_card"
                    label="Credit card"
                    maskRegex="/(\\\\d{4})(?=\\\\d)/g" 
                    maskReplace="$1 "
                    allowedChars="/[0-9]/g"
                    maxLength="19"
                >
                </dss-form-input>	
                <dss-form-input
                    name="mask2"
                    icon="regular_expression"
                    label="Custom mask"
                    maskRegex="/^(.{2})(.*)$/"
                    maskReplace="$1-$2"
                    maxLength="6"
                >
                </dss-form-input>	
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-masks-style')]
}`,...(se=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ne,ae,ie;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-form-input
                    type="number"
                    name="unit1"
                    icon="add_box"
                    label="Label"
                    unit="cm"
                    size="sm"
                >
                </dss-form-input>
                <dss-form-input
                    type="number"
                    name="unit2"
                    icon="add_box"
                    label="Label"
                    unit="cm"
                    size="md"
                >
                </dss-form-input>
                <dss-form-input
                    type="number"
                    name="unit3"
                    icon="add_box"
                    label="Label"
                    unit="cm"
                    size="lg"
                >
                </dss-form-input>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-units-style')]
}`,...(ie=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var re,te,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-form-input
                    type="number"
                    name="prefix1"
                    icon="add_box"
                    label="Label"
                    inputPrefix="1/"
                    size="sm"
                >
                </dss-form-input>
                <dss-form-input
                    type="number"
                    name="prefix2"
                    icon="add_box"
                    label="Label"
                    inputPrefix="1/"
                    size="md"
                >
                </dss-form-input>
                <dss-form-input
                    type="number"
                    name="prefix3"
                    icon="add_box"
                    label="Label"
                    inputPrefix="1/"
                    size="lg"
                >
                </dss-form-input>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-prefix-style')]
}`,...(oe=(te=x.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,de,pe;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const actions = html\`
            <dss-icon-button icon="edit" ariaLabel="Edit"></dss-icon-button>
            <dss-icon-button icon="delete" ariaLabel="Delete" variant="error"></dss-icon-button>
        \`;
    return html\`
            <div class="inputs-sizes">
                <dss-form-input
                    type="text"
                    name="actions1"
                    icon="add_box"
                    label="Label"
                    size="lg"
                    hasActions
                >
                    \${actions}
                </dss-form-input>
                <dss-form-input
                    type="number"
                    name="actions2"
                    icon="add_box"
                    label="Label"
                    size="lg"
                    hasActions
                >
                    \${actions}
                </dss-form-input>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'input-actions-style')]
}`,...(pe=(de=y.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const ce=["PlaygroundText","PlaygroundNumber","Required","Disabled","ReadOnly","Invalid","Size","Help","Counter","Float","NoLabel","Masks","Units","Prefix","Actions"],he=Object.freeze(Object.defineProperty({__proto__:null,Actions:y,Counter:m,Disabled:o,Float:c,Help:u,Invalid:d,Masks:f,NoLabel:b,PlaygroundNumber:r,PlaygroundText:i,Prefix:x,ReadOnly:l,Required:t,Size:p,Units:h,__namedExportsOrder:ce,default:me},Symbol.toStringTag,{value:"Module"}));export{y as A,m as C,o as D,c as F,u as H,d as I,f as M,b as N,i as P,t as R,he as S,h as U,l as a,p as b,x as c};
