import{x as n}from"./lit-html-CeYizTxc.js";const B={title:"Components/Input",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["md","lg"]},label:{name:"Label"},icon:{name:"Mostrar icona",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}}},parameters:{layout:"centered"}},s={name:"Playground - Text",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10},render:e=>{const t=e.showMaxLength?e.maxLength:null,l=e.showDescription?e.description:null;return n`
    ${e.showPlaceholder?n`
            <dss-input
              icon="${e.icon?"person":""}"
              inputSize="${e.size}"
              helpText=${l}
            >
                <label slot="label" for="myInputText" >${e.label}</label>
                ${e.showMaxLength?n`
                    <input id="myInputText" slot="input" type="text" class="dss-input" placeholder="${e.placeholder}" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxLength=${t}/>
                  `:n`
                    <input id="myInputText" slot="input" type="text" class="dss-input" placeholder="${e.placeholder}" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} />
                  `}
            </dss-input>
          `:n`
          <dss-input
              icon="${e.icon?"person":""}"
              inputSize="${e.size}"
              helpText=${l}
            >
                <label slot="label" for="myInputText" >${e.label}</label>
                ${e.showMaxLength?n`
                    <input id="myInputText" slot="input" type="text" class="dss-input" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxLength=${t}/>
                  `:n`
                    <input id="myInputText" slot="input" type="text" class="dss-input" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} />
                  `}
            </dss-input>
          `}
    `}},a={name:"Playground - Number",args:{size:"lg",label:"Label",icon:!1,required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Type here",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10},render:e=>{const t=e.showMaxLength?e.maxLength:null,l=e.showDescription?e.description:null;return n`
        ${e.showPlaceholder?n`
          <dss-input
            label="${e.label}"
            icon="${e.icon?"person":""}"
            inputSize="${e.size}"
            helpText=${l}
          >
              <label slot="label" for="myInputText" >${e.label}</label>
              ${e.showMaxLength?n`
                  <input id="myInputNumber" slot="input" type="number" class="dss-input" placeholder="${e.placeholder}" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxlength="${t}"/>
                `:n`
                  <input id="myInputNumber" slot="input" type="number" class="dss-input" placeholder="${e.placeholder}" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled}/>
                `}
          </dss-input>
        `:n`
          <dss-input
            label="${e.label}"
            icon="${e.icon?"person":""}"
            inputSize="${e.size}"
            helpText=${l}
          >
              <label slot="label" for="myInputText" >${e.label}</label>
              ${e.showMaxLength?n`
                  <input id="myInputNumber" slot="input" type="number" class="dss-input" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled} maxlength="${t}"/>
                `:n`
                  <input id="myInputNumber" slot="input" type="number" class="dss-input" ?required=${e.required} ?readonly=${e.readonly} ?disabled=${e.disabled}/>
                `}
          </dss-input>
        `}
    `}},r={tags:["!dev"],render:()=>n`
        <dss-input
    icon="lock"
  >
    <label slot="label" for="input2" >Required</label>
    <input slot="input" id="input2" class="dss-input" type="text" placeholder="Type here" required/>
  </dss-input>
    `},i={tags:["!dev"],render:()=>n`
      <dss-input
    icon="person"
  >
    <label slot="label" for="input3">Disabled</label>
    <input slot="input" id="input3" class="dss-input" type="text" disabled/>
  </dss-input>
    `},o={tags:["!dev"],render:()=>n`
      <dss-input
    icon="person"
  >
    <label slot="label" for="input4">Read Only</label>
    <input slot="input" id="input4" class="dss-input" type="text" readonly="true" value="Hello world"/>
  </dss-input>
    `},d={tags:["!dev"],render:()=>n`
     <dss-input
    icon="person"
    inputSize="lg"
  >
    <label slot="label" for="input5">Size LG</label>
    <input slot="input" id="input5" class="dss-input" type="text" />
  </dss-input>
  <dss-input
    icon="person"
    inputSize="md"
  >
    <label slot="label" for="input6">Size MD</label>
    <input slot="input" id="input6" class="dss-input" type="text" />
  </dss-input> 
    `},p={tags:["!dev"],render:()=>n`
      <dss-input
    icon="live_help"
    helpText="Help Text"
  >
    <label slot="label" for="input6" >Label</label>
    <input slot="input" id="input6" class="dss-input" type="text" placeholder="Type here" />
  </dss-input>
    `},u={tags:["!dev"],render:()=>n`
      <dss-input
    icon="123"
    helpText="Help text."
  >
    <label slot="label" for="input7" >Max length</label>
    <input  slot="input" id="input7" class="dss-input" type="number" maxlength="4" />
  </dss-input>
    `},c={tags:["!dev"],render:()=>n`
      <dss-input
    icon="123"
    helpText="Help text."
  >
    <label slot="label" for="input8" >Am decimals</label>
    <input  slot="input" id="input8" class="dss-input" type="number" step="0.01"/>
  </dss-input>
    `},b={tags:["!dev"],render:()=>n`
      <dss-input
    icon="add_box"
  >
    <input slot="input" id="noLabel" class="dss-input" type="text" aria-label="My input label"/>
  </dss-input>
  <dss-input
    icon="add_box"
  >
    <input slot="input" id="noLabelPlaceholder" class="dss-input" type="text" aria-label="My input label" placeholder='Placeholder'/>
  </dss-input>
    `};var h,m,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
            </dss-input>
          \` : html\`
          <dss-input
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
            </dss-input>
          \`}
    \`;
  }
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var x,$,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          </dss-input>
        \` : html\`
          <dss-input
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
          </dss-input>
        \`}
    \`;
  }
}`,...(g=($=a.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var f,T,L;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-input
    icon="lock"
  >
    <label slot="label" for="input2" >Required</label>
    <input slot="input" id="input2" class="dss-input" type="text" placeholder="Type here" required/>
  </dss-input>
    \`;
  }
}`,...(L=(T=r.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var q,w,M;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input
    icon="person"
  >
    <label slot="label" for="input3">Disabled</label>
    <input slot="input" id="input3" class="dss-input" type="text" disabled/>
  </dss-input>
    \`;
  }
}`,...(M=(w=i.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var z,S,I;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input
    icon="person"
  >
    <label slot="label" for="input4">Read Only</label>
    <input slot="input" id="input4" class="dss-input" type="text" readonly="true" value="Hello world"/>
  </dss-input>
    \`;
  }
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var P,v,D;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-input
    icon="person"
    inputSize="lg"
  >
    <label slot="label" for="input5">Size LG</label>
    <input slot="input" id="input5" class="dss-input" type="text" />
  </dss-input>
  <dss-input
    icon="person"
    inputSize="md"
  >
    <label slot="label" for="input6">Size MD</label>
    <input slot="input" id="input6" class="dss-input" type="text" />
  </dss-input> 
    \`;
  }
}`,...(D=(v=d.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var N,H,_;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input
    icon="live_help"
    helpText="Help Text"
  >
    <label slot="label" for="input6" >Label</label>
    <input slot="input" id="input6" class="dss-input" type="text" placeholder="Type here" />
  </dss-input>
    \`;
  }
}`,...(_=(H=p.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var R,O,C;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input
    icon="123"
    helpText="Help text."
  >
    <label slot="label" for="input7" >Max length</label>
    <input  slot="input" id="input7" class="dss-input" type="number" maxlength="4" />
  </dss-input>
    \`;
  }
}`,...(C=(O=u.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var F,j,k;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input
    icon="123"
    helpText="Help text."
  >
    <label slot="label" for="input8" >Am decimals</label>
    <input  slot="input" id="input8" class="dss-input" type="number" step="0.01"/>
  </dss-input>
    \`;
  }
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var A,G,E;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-input
    icon="add_box"
  >
    <input slot="input" id="noLabel" class="dss-input" type="text" aria-label="My input label"/>
  </dss-input>
  <dss-input
    icon="add_box"
  >
    <input slot="input" id="noLabelPlaceholder" class="dss-input" type="text" aria-label="My input label" placeholder='Placeholder'/>
  </dss-input>
    \`;
  }
}`,...(E=(G=b.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};const J=["PlaygroundText","PlaygroundNumber","Required","Disabled","ReadOnly","Size","Help","Counter","Float","NoLabel"],Q=Object.freeze(Object.defineProperty({__proto__:null,Counter:u,Disabled:i,Float:c,Help:p,NoLabel:b,PlaygroundNumber:a,PlaygroundText:s,ReadOnly:o,Required:r,Size:d,__namedExportsOrder:J,default:B},Symbol.toStringTag,{value:"Module"}));export{u as C,i as D,c as F,p as H,b as N,s as P,r as R,Q as S,o as a,d as b};
