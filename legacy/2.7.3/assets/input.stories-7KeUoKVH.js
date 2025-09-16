import{x as n}from"./lit-html-D6a8R3xZ.js";const ae={title:"Components/Input",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},icon:{name:"Mostrar icona",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}},showUnit:{name:"Mostrar unitat",control:{type:"boolean"}},unit:{name:"Unitats",control:{type:"text"},if:{arg:"showUnit"}},showInputPrefix:{name:"Mostrar prefix",control:{type:"boolean"}},inputPrefix:{name:"Prefix",control:{type:"text"},if:{arg:"showInputPrefix"}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-20744&m=dev"}},name:"Playground - Text",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,showUnit:!1,unit:"cm",showInputPrefix:!1,inputPrefix:"1/"},render:e=>{const t=e.showMaxLength?e.maxLength:null,l=e.showDescription?e.description:null;return n`
    ${e.showPlaceholder?n`
            <dss-input
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
            </dss-input>
          `:n`
          <dss-input
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
            </dss-input>
          `}
    `}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=920-29472&m=dev"}},name:"Playground - Number",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,showUnit:!1,unit:"cm",showInputPrefix:!1,inputPrefix:"1/"},render:e=>{const t=e.showMaxLength?e.maxLength:null,l=e.showDescription?e.description:null;return n`
        ${e.showPlaceholder?n`
          <dss-input
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
          </dss-input>
        `:n`
          <dss-input
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
          </dss-input>
        `}
    `}},a={tags:["!dev"],render:()=>n`
        <dss-input
    icon="lock"
  >
    <label slot="label" for="input2" >Required</label>
    <input slot="input" id="input2"  type="text" placeholder="Type here" required/>
  </dss-input>
    `},d={tags:["!dev"],render:()=>n`
        <div class="inputs-sizes">
            <dss-input icon="add_box" >
                <label slot="label" for="iDisabled1">Read Only</label>
                <input slot="input" id="iDisabled1"  type="text" disabled/>
            </dss-input>
            <dss-input icon="add_box" >
                <label slot="label" for="iDisabled2">Read Only</label>
                <input slot="input" id="iDisabled2"  type="text" disabled placeholder="Placeholder"/>
            </dss-input>
            <dss-input icon="add_box" >
                <label slot="label" for="iDisabled3">Read Only</label>
                <input slot="input" id="iDisabled3"  type="text" disabled value="Value text"/>
            </dss-input>
        </div>
    `},r={tags:["!dev"],render:()=>n`
        <div class="inputs-sizes">
            <dss-input icon="add_box" >
                <label slot="label" for="iReadOnly1">Read Only</label>
                <input slot="input" id="iReadOnly1"  type="text" readonly/>
            </dss-input>
            <dss-input icon="add_box" >
                <label slot="label" for="iReadOnly2">Read Only</label>
                <input slot="input" id="iReadOnly2"  type="text" readonly placeholder="Placeholder"/>
            </dss-input>
            <dss-input icon="add_box" >
                <label slot="label" for="iReadOnly3">Read Only</label>
                <input slot="input" id="iReadOnly3"  type="text" readonly value="Value text"/>
            </dss-input>
        </div>
    `},o={tags:["!dev"],render:()=>n`
        <div class="inputs-sizes">
            <dss-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid1">Label</label>
                <input slot="input" id="inputInvalid1" type="text" />
            </dss-input>
            <dss-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid2">Label</label>
                <input slot="input" id="inputInvalid2"  type="text" placeholder="Placeholder"/>
            </dss-input>
            <dss-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid3">Label</label>
                <input slot="input" id="inputInvalid3"  type="text" value="Value text"/>
            </dss-input>
        </div>
        <br/>
        <div class="inputs-sizes">
            <dss-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid4">Read Only</label>
                <input slot="input" id="inputInvalid4"  type="text" readonly/>
            </dss-input>
            <dss-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid5">Read Only</label>
                <input slot="input" id="inputInvalid5"  type="text" readonly placeholder="Placeholder"/>
            </dss-input>
            <dss-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid6">Read Only</label>
                <input slot="input" id="inputInvalid6"  type="text" readonly value="Value text"/>
            </dss-input>
        </div>
    `},p={tags:["!dev"],render:()=>n`
            <div class="inputs-sizes">
                <dss-input
                    icon="add_box"
                    inputSize="lg"
                    >
                    <label slot="label" for="inputLg">Size LG</label>
                    <input slot="input" id="inputLg"  type="text" />
                </dss-input>
                <dss-input
                    icon="add_box"
                    inputSize="md"
                    >
                    <label slot="label" for="inputMd">Size MD</label>
                    <input slot="input" id="inputMd"  type="text" />
                </dss-input>
                <dss-input
                    icon="add_box"
                    inputSize="sm"
                    >
                    <label slot="label" for="inputMd">Size SM</label>
                    <input slot="input" id="inputMd"  type="text" />
                </dss-input>  
            </div>
    `},u={tags:["!dev"],render:()=>n`
      <dss-input
    icon="live_help"
    helpText="Help Text"
  >
    <label slot="label" for="input6" >Label</label>
    <input slot="input" id="input6"  type="text" placeholder="Type here" />
  </dss-input>
    `},b={tags:["!dev"],render:()=>n`
      <dss-input
    icon="123"
    helpText="Help text."
  >
    <label slot="label" for="input7" >Max length</label>
    <input  slot="input" id="input7"  type="number" maxlength="4" />
  </dss-input>
    `},c={tags:["!dev"],render:()=>n`
      <dss-input
    icon="123"
    helpText="Help text."
  >
    <label slot="label" for="input8" >Am decimals</label>
    <input  slot="input" id="input8"  type="number" step="0.01"/>
  </dss-input>
    `},m={tags:["!dev"],render:()=>n`
            <div class="inputs-sizes">
                <dss-input icon="add_box">
                    <input slot="input" id="noLabel"  type="text" aria-label="My input label"/>
                    </dss-input>
                <dss-input icon="add_box">
                    <input slot="input" id="noLabelPlaceholder"  type="text" aria-label="My input label" placeholder='Placeholder'/>
                </dss-input>
            </div>
    `},x={tags:["!dev"],render:()=>n`
            <div class="inputs-sizes">
                <dss-input icon="credit_card" inputsize="lg" maskRegex="/(\\d{4})(?=\\d)/g" maskReplace="$1 ">
                <label slot="label" for="mask1">Credit Card</label>
                    <input slot="input" id="mask1"  type="text" maxlength="19"/>
                </dss-input>
                <dss-input icon="regular_expression" inputsize="lg" maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2">
                <label slot="label" for="mask2" >Custom mask</label>					
                    <input slot="input" id="mask2" type="text" maxlength="6"/>
                </dss-input>
            </div>
    `},h={tags:["!dev"],render:()=>n`
            <div class="inputs-sizes">
                <dss-input icon="add_box" inputsize="sm" unit="cm">
                <label slot="label" for="unit1">Label</label>
                    <input slot="input" id="unit1"  type="number" />
                </dss-input>
                <dss-input icon="add_box" inputsize="md" unit="cm">
                <label slot="label" for="unit2">Label</label>
                    <input slot="input" id="unit2"  type="number" />
                </dss-input>
                <dss-input icon="add_box" inputsize="lg" unit="cm">
                <label slot="label" for="unit3" >Label</label>
                    <input slot="input" id="unit3" type="number" />
                </dss-input>
            </div>
    `},y={tags:["!dev"],render:()=>n`
            <div class="inputs-sizes">
                <dss-input icon="add_box" inputsize="sm" inputPrefix="1/">
                <label slot="label" for="prefix1">Label</label>
                    <input slot="input" id="prefix1"  type="number" />
                </dss-input>
                <dss-input icon="add_box" inputsize="md" inputPrefix="1/">
                <label slot="label" for="prefix2">Label</label>
                    <input slot="input" id="prefix2"  type="number" />
                </dss-input>
                <dss-input icon="add_box" inputsize="lg" inputPrefix="1/">
                <label slot="label" for="prefix3" >Label</label>
                    <input slot="input" id="prefix3" type="number" />
                </dss-input>
            </div>
    `};var f,g,$;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
            <dss-input
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
            </dss-input>
          \` : html\`
          <dss-input
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
            </dss-input>
          \`}
    \`;
  }
}`,...($=(g=i.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var v,w,P;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
          <dss-input
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
          </dss-input>
        \` : html\`
          <dss-input
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
          </dss-input>
        \`}
    \`;
  }
}`,...(P=(w=s.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var z,I,L;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-input
    icon="lock"
  >
    <label slot="label" for="input2" >Required</label>
    <input slot="input" id="input2"  type="text" placeholder="Type here" required/>
  </dss-input>
    \`;
  }
}`,...(L=(I=a.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var _,S,T;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="inputs-sizes">
            <dss-input icon="add_box" >
                <label slot="label" for="iDisabled1">Read Only</label>
                <input slot="input" id="iDisabled1"  type="text" disabled/>
            </dss-input>
            <dss-input icon="add_box" >
                <label slot="label" for="iDisabled2">Read Only</label>
                <input slot="input" id="iDisabled2"  type="text" disabled placeholder="Placeholder"/>
            </dss-input>
            <dss-input icon="add_box" >
                <label slot="label" for="iDisabled3">Read Only</label>
                <input slot="input" id="iDisabled3"  type="text" disabled value="Value text"/>
            </dss-input>
        </div>
    \`;
  }
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var q,M,R;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="inputs-sizes">
            <dss-input icon="add_box" >
                <label slot="label" for="iReadOnly1">Read Only</label>
                <input slot="input" id="iReadOnly1"  type="text" readonly/>
            </dss-input>
            <dss-input icon="add_box" >
                <label slot="label" for="iReadOnly2">Read Only</label>
                <input slot="input" id="iReadOnly2"  type="text" readonly placeholder="Placeholder"/>
            </dss-input>
            <dss-input icon="add_box" >
                <label slot="label" for="iReadOnly3">Read Only</label>
                <input slot="input" id="iReadOnly3"  type="text" readonly value="Value text"/>
            </dss-input>
        </div>
    \`;
  }
}`,...(R=(M=r.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var O,D,k;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="inputs-sizes">
            <dss-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid1">Label</label>
                <input slot="input" id="inputInvalid1" type="text" />
            </dss-input>
            <dss-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid2">Label</label>
                <input slot="input" id="inputInvalid2"  type="text" placeholder="Placeholder"/>
            </dss-input>
            <dss-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid3">Label</label>
                <input slot="input" id="inputInvalid3"  type="text" value="Value text"/>
            </dss-input>
        </div>
        <br/>
        <div class="inputs-sizes">
            <dss-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid4">Read Only</label>
                <input slot="input" id="inputInvalid4"  type="text" readonly/>
            </dss-input>
            <dss-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid5">Read Only</label>
                <input slot="input" id="inputInvalid5"  type="text" readonly placeholder="Placeholder"/>
            </dss-input>
            <dss-input icon="add_box" invalid>
                <label slot="label" for="inputInvalid6">Read Only</label>
                <input slot="input" id="inputInvalid6"  type="text" readonly value="Value text"/>
            </dss-input>
        </div>
    \`;
  }
}`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var N,U,H;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input
                    icon="add_box"
                    inputSize="lg"
                    >
                    <label slot="label" for="inputLg">Size LG</label>
                    <input slot="input" id="inputLg"  type="text" />
                </dss-input>
                <dss-input
                    icon="add_box"
                    inputSize="md"
                    >
                    <label slot="label" for="inputMd">Size MD</label>
                    <input slot="input" id="inputMd"  type="text" />
                </dss-input>
                <dss-input
                    icon="add_box"
                    inputSize="sm"
                    >
                    <label slot="label" for="inputMd">Size SM</label>
                    <input slot="input" id="inputMd"  type="text" />
                </dss-input>  
            </div>
    \`;
  }
}`,...(H=(U=p.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var C,F,V;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input
    icon="live_help"
    helpText="Help Text"
  >
    <label slot="label" for="input6" >Label</label>
    <input slot="input" id="input6"  type="text" placeholder="Type here" />
  </dss-input>
    \`;
  }
}`,...(V=(F=u.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var A,E,J;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input
    icon="123"
    helpText="Help text."
  >
    <label slot="label" for="input7" >Max length</label>
    <input  slot="input" id="input7"  type="number" maxlength="4" />
  </dss-input>
    \`;
  }
}`,...(J=(E=b.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var K,X,j;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input
    icon="123"
    helpText="Help text."
  >
    <label slot="label" for="input8" >Am decimals</label>
    <input  slot="input" id="input8"  type="number" step="0.01"/>
  </dss-input>
    \`;
  }
}`,...(j=(X=c.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var G,B,Q;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input icon="add_box">
                    <input slot="input" id="noLabel"  type="text" aria-label="My input label"/>
                    </dss-input>
                <dss-input icon="add_box">
                    <input slot="input" id="noLabelPlaceholder"  type="text" aria-label="My input label" placeholder='Placeholder'/>
                </dss-input>
            </div>
    \`;
  }
}`,...(Q=(B=m.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};var W,Y,Z;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input icon="credit_card" inputsize="lg" maskRegex="/(\\\\d{4})(?=\\\\d)/g" maskReplace="$1 ">
                <label slot="label" for="mask1">Credit Card</label>
                    <input slot="input" id="mask1"  type="text" maxlength="19"/>
                </dss-input>
                <dss-input icon="regular_expression" inputsize="lg" maskRegex="/^(.{2})(.*)$/" maskReplace="$1-$2">
                <label slot="label" for="mask2" >Custom mask</label>					
                    <input slot="input" id="mask2" type="text" maxlength="6"/>
                </dss-input>
            </div>
    \`;
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input icon="add_box" inputsize="sm" unit="cm">
                <label slot="label" for="unit1">Label</label>
                    <input slot="input" id="unit1"  type="number" />
                </dss-input>
                <dss-input icon="add_box" inputsize="md" unit="cm">
                <label slot="label" for="unit2">Label</label>
                    <input slot="input" id="unit2"  type="number" />
                </dss-input>
                <dss-input icon="add_box" inputsize="lg" unit="cm">
                <label slot="label" for="unit3" >Label</label>
                    <input slot="input" id="unit3" type="number" />
                </dss-input>
            </div>
    \`;
  }
}`,...(te=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var le,ie,se;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="inputs-sizes">
                <dss-input icon="add_box" inputsize="sm" inputPrefix="1/">
                <label slot="label" for="prefix1">Label</label>
                    <input slot="input" id="prefix1"  type="number" />
                </dss-input>
                <dss-input icon="add_box" inputsize="md" inputPrefix="1/">
                <label slot="label" for="prefix2">Label</label>
                    <input slot="input" id="prefix2"  type="number" />
                </dss-input>
                <dss-input icon="add_box" inputsize="lg" inputPrefix="1/">
                <label slot="label" for="prefix3" >Label</label>
                    <input slot="input" id="prefix3" type="number" />
                </dss-input>
            </div>
    \`;
  }
}`,...(se=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const de=["PlaygroundText","PlaygroundNumber","Required","Disabled","ReadOnly","Invalid","Size","Help","Counter","Float","NoLabel","Masks","Units","Prefix"],oe=Object.freeze(Object.defineProperty({__proto__:null,Counter:b,Disabled:d,Float:c,Help:u,Invalid:o,Masks:x,NoLabel:m,PlaygroundNumber:s,PlaygroundText:i,Prefix:y,ReadOnly:r,Required:a,Size:p,Units:h,__namedExportsOrder:de,default:ae},Symbol.toStringTag,{value:"Module"}));export{b as C,d as D,c as F,u as H,o as I,x as M,m as N,i as P,a as R,oe as S,h as U,r as a,p as b,y as c};
