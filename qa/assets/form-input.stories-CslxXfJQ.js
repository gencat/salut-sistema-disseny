import{x as e}from"./lit-html-D6cejpwM.js";const ln={title:"Components/Form/Input",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},hideLabel:{name:"Amagar label",control:{type:"boolean"}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon"}},required:{name:"Camp requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},showPlaceholder:{name:"Mostrar placeholder",control:{type:"boolean"}},placeholder:{name:"Placeholder",if:{arg:"showPlaceholder"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}},min:{name:"Valor mínim",control:{type:"number"}},max:{name:"Valor màxim",control:{type:"number"}},step:{name:"Passos",control:{type:"number"}},showUnit:{name:"Mostrar unitat",control:{type:"boolean"}},unit:{name:"Unitats",control:{type:"text"},if:{arg:"showUnit"}},showInputPrefix:{name:"Mostrar prefix",control:{type:"boolean"}},inputPrefix:{name:"Prefix",control:{type:"text"},if:{arg:"showInputPrefix"}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=892-20744&m=dev"}},name:"Playground - Text",args:{size:"lg",label:"Label",hideLabel:!1,showIcon:!0,icon:"person",required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Escriu aquí",showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:10,showUnit:!1,unit:"cm",showInputPrefix:!1,inputPrefix:"1/"},render:n=>{const h=n.showMaxLength?n.maxLength:null,on=n.showDescription?n.description:null;return e`
            <div style="width:200px">
                <dss-form-input
                    name="myInputText"
                    size="${n.size}"
                    .icon="${n.showIcon?n.icon:null}"
                    label="${n.label}"
                    ?hideLabel=${n.hideLabel}
                    .placeholder="${n.showPlaceholder?n.placeholder:""}" 
                    ?required=${n.required} 
                    ?readonly=${n.readonly} 
                    ?disabled=${n.disabled}
                    helpText=${on}
                    .unit=${n.showUnit?n.unit:null}
                    .inputPrefix=${n.showInputPrefix?n.inputPrefix:null}
                    maxLength=${h}
                ></dss-form-input>
            </div>

        `}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=920-29472&m=dev"}},name:"Playground - Number",args:{size:"lg",label:"Label",hideLabel:!1,showIcon:!0,icon:"person",required:!1,readonly:!1,disabled:!1,showPlaceholder:!1,placeholder:"Escriu aquí",showDescription:!1,description:"Help Text",showMaxLength:!1,min:0,max:100,step:1,showUnit:!1,unit:"cm",showInputPrefix:!1,inputPrefix:"1/"},render:n=>{const h=n.showDescription?n.description:null;return e`
            <div style="width:200px">
                <dss-form-input
                    type="number"
                    name="myInputNumber"
                    size="${n.size}"
                    .icon="${n.showIcon?n.icon:null}"
                    label="${n.label}"
                    ?hideLabel=${n.hideLabel}
                    .placeholder="${n.showPlaceholder?n.placeholder:""}" 
                    ?required=${n.required} 
                    ?readonly=${n.readonly} 
                    ?disabled=${n.disabled}
                    helpText=${h}
                    .unit=${n.showUnit?n.unit:null}
                    .inputPrefix=${n.showInputPrefix?n.inputPrefix:null}
                    min=${n.min}
                    max=${n.max}
                    step=${n.step}
                ></dss-form-input>
            </div>
    `}},i={tags:["!dev"],render:()=>e`
            <dss-form-input
                name="inputRequired"
                icon="lock"
                label="Required"
                required
            >
            </dss-form-input>
    `},r={tags:["!dev"],render:()=>e`
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
    `},o={tags:["!dev"],render:()=>e`
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
    `},l={tags:["!dev"],render:()=>e`
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
    `},d={tags:["!dev"],render:()=>e`
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
    `},t={tags:["!dev"],render:()=>e`
            <dss-form-input
                name="inputHelp"
                icon="live_help"
                label="Label"
            helpText="Help Text"
            >
            </dss-form-input>
    `},m={tags:["!dev"],render:()=>e`
            <dss-form-input
                name="inputCounter"
                icon="123"
                label="Label"
            helpText="Help Text"
                maxLength="4"
            >
            </dss-form-input>
    `},p={tags:["!dev"],render:()=>e`
            <dss-form-input
                type="number"
                name="inputFloat"
                icon="123"
                label="Amb decimals"
            helpText="Help Text"
                step="0.01"
            >
            </dss-form-input>
    `},u={tags:["!dev"],render:()=>e`
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
    `},c={tags:["!dev"],render:()=>e`
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
    `},b={tags:["!dev"],render:()=>e`
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
    `},f={tags:["!dev"],render:()=>e`
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
    `};var x,g,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    inputPrefix: '1/'
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
                ></dss-form-input>
            </div>

        \`;
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,w,L;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    inputPrefix: '1/'
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
                ></dss-form-input>
            </div>
    \`;
  }
}`,...(L=(w=a.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var z,P,$;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...($=(P=i.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var I,_,S;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
  }
}`,...(S=(_=r.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var D,T,q;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
  }
}`,...(q=(T=o.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var A,R,M;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  }
}`,...(M=(R=l.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var k,H,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
  }
}`,...(C=(H=d.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var O,F,N;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(N=(F=t.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var U,E,J;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(E=m.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var K,X,j;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(j=(X=p.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var G,V,B;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
  }
}`,...(B=(V=u.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var Q,W,Y;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
  }
}`,...(Y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,nn,en;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
  }
}`,...(en=(nn=b.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var sn,an,rn;f.parameters={...f.parameters,docs:{...(sn=f.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
  }
}`,...(rn=(an=f.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};const dn=["PlaygroundText","PlaygroundNumber","Required","Disabled","ReadOnly","Invalid","Size","Help","Counter","Float","NoLabel","Masks","Units","Prefix"],mn=Object.freeze(Object.defineProperty({__proto__:null,Counter:m,Disabled:r,Float:p,Help:t,Invalid:l,Masks:c,NoLabel:u,PlaygroundNumber:a,PlaygroundText:s,Prefix:f,ReadOnly:o,Required:i,Size:d,Units:b,__namedExportsOrder:dn,default:ln},Symbol.toStringTag,{value:"Module"}));export{m as C,r as D,p as F,t as H,l as I,c as M,u as N,s as P,i as R,mn as S,b as U,o as a,d as b,f as c};
