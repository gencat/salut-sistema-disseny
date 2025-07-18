import{x as n}from"./lit-html-D6a8R3xZ.js";const Y={title:"Components/Input",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},icon:{name:"Mostrar icona",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-20744&m=dev"}},name:"Playground - Text",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10},render:e=>{const l=e.showMaxLength?e.maxLength:null,t=e.showDescription?e.description:null;return n`
    ${e.showPlaceholder?n`
            <dss-input
              icon="${e.icon?"add_box":""}"
              inputSize="${e.size}"
              helpText=${t}
            >
                <label slot="label" for="myInputText" >${e.label}</label>
                ${e.showMaxLength?n`
                    <input id="myInputText" slot="input" type="text" placeholder="${e.placeholder}" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxLength=${l}/>
                  `:n`
                    <input id="myInputText" slot="input" type="text" placeholder="${e.placeholder}" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} />
                  `}
            </dss-input>
          `:n`
          <dss-input
              icon="${e.icon?"add_box":""}"
              inputSize="${e.size}"
              helpText=${t}
            >
                <label slot="label" for="myInputText" >${e.label}</label>
                ${e.showMaxLength?n`
                    <input id="myInputText" slot="input" type="text"  ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxLength=${l}/>
                  `:n`
                    <input id="myInputText" slot="input" type="text"  ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} />
                  `}
            </dss-input>
          `}
    `}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=920-29472&m=dev"}},name:"Playground - Number",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10},render:e=>{const l=e.showMaxLength?e.maxLength:null,t=e.showDescription?e.description:null;return n`
        ${e.showPlaceholder?n`
          <dss-input
            label="${e.label}"
            icon="${e.icon?"add_box":""}"
            inputSize="${e.size}"
            helpText=${t}
          >
              <label slot="label" for="myInputNumber" >${e.label}</label>
              ${e.showMaxLength?n`
                  <input id="myInputNumber" slot="input" type="number"  placeholder="${e.placeholder}" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxlength="${l}"/>
                `:n`
                  <input id="myInputNumber" slot="input" type="number"  placeholder="${e.placeholder}" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled}/>
                `}
          </dss-input>
        `:n`
          <dss-input
            label="${e.label}"
            icon="${e.icon?"add_box":""}"
            inputSize="${e.size}"
            helpText=${t}
          >
              <label slot="label" for="myInputNumber" >${e.label}</label>
              ${e.showMaxLength?n`
                  <input id="myInputNumber" slot="input" type="number"  ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxlength="${l}"/>
                `:n`
                  <input id="myInputNumber" slot="input" type="number"  ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled}/>
                `}
          </dss-input>
        `}
    `}},s={tags:["!dev"],render:()=>n`
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
    `},o={tags:["!dev"],render:()=>n`
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
    `},r={tags:["!dev"],render:()=>n`
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
    `},y={tags:["!dev"],render:()=>n`
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
    `};var x,h,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    maxLength: 10
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
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var $,v,f;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    maxLength: 10
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
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var z,I,L;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(I=s.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var _,w,S;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,q,M;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(q=o.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var R,P,O;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(P=r.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var D,k,N;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(k=p.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var H,C,F;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(C=u.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var V,A,E;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(A=b.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var J,K,X;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(K=c.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var j,G,B;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(G=m.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var Q,U,W;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(W=(U=y.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const Z=["PlaygroundText","PlaygroundNumber","Required","Disabled","ReadOnly","Invalid","Size","Help","Counter","Float","NoLabel","Masks"],ne=Object.freeze(Object.defineProperty({__proto__:null,Counter:b,Disabled:d,Float:c,Help:u,Invalid:r,Masks:y,NoLabel:m,PlaygroundNumber:i,PlaygroundText:a,ReadOnly:o,Required:s,Size:p,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{b as C,d as D,c as F,u as H,r as I,y as M,m as N,a as P,s as R,ne as S,o as a,p as b};
