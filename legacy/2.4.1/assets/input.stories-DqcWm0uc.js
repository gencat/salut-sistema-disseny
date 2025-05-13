import{x as n}from"./lit-html-B2eaWknC.js";const X={title:"Components/Input",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},icon:{name:"Mostrar icona",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-20744&m=dev"}},name:"Playground - Text",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10},render:e=>{const t=e.showMaxLength?e.maxLength:null,l=e.showDescription?e.description:null;return n`
    ${e.showPlaceholder?n`
            <dss-input
              icon="${e.icon?"add_box":""}"
              inputSize="${e.size}"
              helpText=${l}
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
            >
                <label slot="label" for="myInputText" >${e.label}</label>
                ${e.showMaxLength?n`
                    <input id="myInputText" slot="input" type="text"  ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxLength=${t}/>
                  `:n`
                    <input id="myInputText" slot="input" type="text"  ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} />
                  `}
            </dss-input>
          `}
    `}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=920-29472&m=dev"}},name:"Playground - Number",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10},render:e=>{const t=e.showMaxLength?e.maxLength:null,l=e.showDescription?e.description:null;return n`
        ${e.showPlaceholder?n`
          <dss-input
            label="${e.label}"
            icon="${e.icon?"add_box":""}"
            inputSize="${e.size}"
            helpText=${l}
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
          >
              <label slot="label" for="myInputNumber" >${e.label}</label>
              ${e.showMaxLength?n`
                  <input id="myInputNumber" slot="input" type="number"  ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxlength="${t}"/>
                `:n`
                  <input id="myInputNumber" slot="input" type="number"  ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled}/>
                `}
          </dss-input>
        `}
    `}},i={tags:["!dev"],render:()=>n`
        <dss-input
    icon="lock"
  >
    <label slot="label" for="input2" >Required</label>
    <input slot="input" id="input2"  type="text" placeholder="Type here" required/>
  </dss-input>
    `},r={tags:["!dev"],render:()=>n`
      <dss-input
    icon="add_box"
  >
    <label slot="label" for="input3">Disabled</label>
    <input slot="input" id="input3"  type="text" disabled/>
  </dss-input>
    `},d={tags:["!dev"],render:()=>n`
      <dss-input
    icon="add_box"
  >
    <label slot="label" for="input4">Read Only</label>
    <input slot="input" id="input4"  type="text" readonly value="Hello world"/>
  </dss-input>
    `},o={tags:["!dev"],render:()=>n`
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
                    <label slot="label" for="inputMd">Size MD</label>
                    <input slot="input" id="inputMd"  type="text" />
                </dss-input>  
            </div>
    `},p={tags:["!dev"],render:()=>n`
      <dss-input
    icon="live_help"
    helpText="Help Text"
  >
    <label slot="label" for="input6" >Label</label>
    <input slot="input" id="input6"  type="text" placeholder="Type here" />
  </dss-input>
    `},u={tags:["!dev"],render:()=>n`
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
    `},b={tags:["!dev"],render:()=>n`
            <div class="inputs-sizes">
                <dss-input icon="add_box">
                    <input slot="input" id="noLabel"  type="text" aria-label="My input label"/>
                    </dss-input>
                <dss-input icon="add_box">
                    <input slot="input" id="noLabelPlaceholder"  type="text" aria-label="My input label" placeholder='Placeholder'/>
                </dss-input>
            </div>
    `};var m,h,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,g,$;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...($=(g=s.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var f,w,L;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var T,q,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input
    icon="add_box"
  >
    <label slot="label" for="input3">Disabled</label>
    <input slot="input" id="input3"  type="text" disabled/>
  </dss-input>
    \`;
  }
}`,...(S=(q=r.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var z,M,v;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input
    icon="add_box"
  >
    <label slot="label" for="input4">Read Only</label>
    <input slot="input" id="input4"  type="text" readonly value="Hello world"/>
  </dss-input>
    \`;
  }
}`,...(v=(M=d.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var _,I,P;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
                    <label slot="label" for="inputMd">Size MD</label>
                    <input slot="input" id="inputMd"  type="text" />
                </dss-input>  
            </div>
    \`;
  }
}`,...(P=(I=o.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var D,N,H;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(N=p.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var F,C,R;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(C=u.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var O,k,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var E,J,K;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const j=["PlaygroundText","PlaygroundNumber","Required","Disabled","ReadOnly","Size","Help","Counter","Float","NoLabel"],B=Object.freeze(Object.defineProperty({__proto__:null,Counter:u,Disabled:r,Float:c,Help:p,NoLabel:b,PlaygroundNumber:s,PlaygroundText:a,ReadOnly:d,Required:i,Size:o,__namedExportsOrder:j,default:X},Symbol.toStringTag,{value:"Module"}));export{u as C,r as D,c as F,p as H,b as N,a as P,i as R,B as S,d as a,o as b};
