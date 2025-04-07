import{x as l}from"./lit-html-B2eaWknC.js";const Q={title:"Components/Input Dropdown",argTypes:{inputSize:{name:"Mida de l'input",control:{type:"radio"},options:["sm","md","lg"]},labelSelectAll:{name:"Text per seleccionar-ho tot",control:{type:"text"},if:{arg:"seleccionarTot",truthy:!0}},labelDeselectAll:{name:"Text per deseleccionar-ho tot",control:{type:"text"},if:{arg:"seleccionarTot",truthy:!0}},seleccionarTot:{name:"Seleccionar-ho tot",control:{type:"boolean"},if:{arg:"multiple",truthy:!0}},multiple:{name:"Múltiple",control:{type:"boolean"}},tick:{name:"Tick",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},type:{name:"Tipus",control:{type:"select"},options:["default","green"]},desselectable:{name:"Desseleccionable",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},icon:{name:"Icon",control:{type:"text"}},label:{name:"Label",control:{type:"text"}},placeHolder:{name:"Placeholder",control:{type:"text"}},required:{name:"Requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},helpText:{name:"Message for initial help"},openWithSearch:{name:"Obrir amb cerca",control:{type:"boolean"}},invalid:{name:"No vàlid",control:{type:"boolean"}},unorder:{name:"Desordenar elements",control:{type:"boolean"}},searchThreshold:{name:"Llindar de filtre (nombre de caràcters)",control:{type:"number"}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=539-1914&m=dev"}},args:{inputSize:"lg",label:"My dropdown",seleccionarTot:!0,multiple:!1,tick:!0,disabled:!1,type:"default",desselectable:!1,icon:"search",placeHolder:"Seleccionar",required:!1,readonly:!1,labelSelectAll:"Seleccionar-ho tot",labelDeselectAll:"Deseleccionar-ho tot",helpText:"Help text.",openWithSearch:!1,invalid:!1,unorder:!1,searchThreshold:1},render:e=>{const m=[{label:"XElement 1",value:"1"},{label:"HElement 2",value:"2"},{label:"AElement 3",value:"3"},{label:"PElement 4",value:"4"},{label:"WElement 5",value:"5"}];return e.openWithSearch?l`
      <div style="height: 300px">
        <dss-input-dropdown
          inputSize="${e.inputSize}"
          icon="${e.icon}"
          helpText="${e.helpText}"
          type="${e.type}"
          multiple=${e.multiple}
          tick=${e.tick}
          elements=${JSON.stringify(m)}
          selectedValue=${JSON.stringify(["2","5"])}
          selectAll=${e.seleccionarTot}
          labelSelectAll=${e.labelSelectAll}
          labelDeselectAll=${e.labelDeselectAll}
          deselectable=${e.desselectable}
          dropdownPlaceholder=${e.placeHolder}
          openWithSearch
          ?invalid=${e.invalid}
          ?unorder=${e.unorder}
          searchThreshold=${e.searchThreshold}
        >
          <label slot="label" for="dropdown1">${e.label}</label>
          <input
            slot="input"
            id="dropdown1"
            type="text"
            ?required=${e.required}
            ?disabled=${e.disabled}
            ?readonly=${e.readonly}
            />
        </dss-input-dropdown>
      </div>
      `:l`
        <div style="height: 300px">
          <dss-input-dropdown
            inputSize="${e.inputSize}"
            icon="${e.icon}"
            helpText="${e.helpText}"
            type="${e.type}"
            multiple=${e.multiple}
            tick=${e.tick}
            elements=${JSON.stringify(m)}
            selectedValue=${JSON.stringify(["2","5"])}
            selectAll=${e.seleccionarTot}
            labelSelectAll=${e.labelSelectAll}
            labelDeselectAll=${e.labelDeselectAll}
            deselectable=${e.desselectable}
            dropdownPlaceholder=${e.placeHolder}
            ?invalid=${e.invalid}
            searchThreshold=${e.searchThreshold}
          >
            <label slot="label" for="dropdown1">${e.label}</label>
            <input
              slot="input"
              id="dropdown1"
              type="text"
              ?required=${e.required}
              ?disabled=${e.disabled}
              ?readonly=${e.readonly}
              />
          </dss-input-dropdown>
        </div>
    `}},n={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
              helpText="Help text."
              type="default"
              elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
            >
              <label slot="label" for="dropdown1">Simple</label>
              <input id="dropdown1" slot="input" type="text" />
            </dss-input-dropdown>
        </div>
    `},a={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
          helpText="Help text."
          type="default"
          multiple
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdown9">Multiple</label>
          <input id="dropdown9" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    `},o={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
            helpText="Help text."
            type="default"
            multiple
            selectAll
            labelSelectAll='Custom select all'
            labelDeselectAll='Custom unselect all'
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="dropdown10">Select All</label>
            <input id="dropdown10" slot="input" type="text" />
          </dss-input-dropdown>
      </div>
    `},d={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
            helpText="Help text."
            type="default"
            multiple
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
            selectedValue='["2","4"]'
          >
            <label slot="label" for="dropdown1">Default</label>
            <input id="dropdown1" slot="input" type="text" />
          </dss-input-dropdown>
      </div>
    `},r={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
            helpText="Help text."
            type="default"
            deselectable
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="dropdown1">Default</label>
            <input id="dropdown1" slot="input" type="text" />
          </dss-input-dropdown>
      </div>
    `},s={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
          helpText="Help text."
          type="default"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdown1">Type Default</label>
          <input id="dropdown1" slot="input" type="text" />
        </dss-input-dropdown>
      <dss-input-dropdown
          helpText="Help text."
          type="green"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdown1">Type Green</label>
          <input id="dropdown1" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    `},p={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
            helpText="Help text."
            type="default"
            tick="false"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="dropdown1">Sense tick</label>
            <input id="dropdown1" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    `},i={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
          icon="person"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdown1">Sense tick</label>
          <input id="dropdown1" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    `},u={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
          icon="person"
          helpText="Help text."
          type="default"
          boxStyle="width:400px;"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdown1">Force component width</label>
          <input id="dropdown1" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    `},c={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
<dss-input-dropdown
            helpText="Help text."
            type="default"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="dropdown1">Simple</label>
            <input id="dropdown1" slot="input" type="text"  required/>
          </dss-input-dropdown>
<dss-input-dropdown
            helpText="Help text."
            type="default"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="dropdown1">Simple</label>
            <input id="dropdown1" slot="input" type="text"  disabled/>
          </dss-input-dropdown>
<dss-input-dropdown
            icon="person"
            helpText="Help text."
            type="default"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
            selectedValue='["1"]'
            >
              <label slot="label" for="dropdown4">Readonly</label>
              <input id="dropdown4" slot="input" type="text" readonly/>
          </dss-input-dropdown>
</div>
    `},b={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
          helpText="Help text."
          type="default"
          openWithSearch
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdown900">Simple</label>
          <input id="dropdown900" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    `};var v,w,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=539-1914&m=dev'
    }
  },
  args: {
    inputSize: 'lg',
    label: 'My dropdown',
    seleccionarTot: true,
    multiple: false,
    tick: true,
    disabled: false,
    type: 'default',
    desselectable: false,
    icon: 'search',
    placeHolder: 'Seleccionar',
    required: false,
    readonly: false,
    labelSelectAll: 'Seleccionar-ho tot',
    labelDeselectAll: 'Deseleccionar-ho tot',
    helpText: 'Help text.',
    openWithSearch: false,
    invalid: false,
    unorder: false,
    searchThreshold: 1
  },
  render: (args: any) => {
    const elements = [{
      label: 'XElement 1',
      value: '1'
    }, {
      label: 'HElement 2',
      value: '2'
    }, {
      label: 'AElement 3',
      value: '3'
    }, {
      label: 'PElement 4',
      value: '4'
    }, {
      label: 'WElement 5',
      value: '5'
    }];
    return args.openWithSearch ? html\`
      <div style="height: 300px">
        <dss-input-dropdown
          inputSize="\${args.inputSize}"
          icon="\${args.icon}"
          helpText="\${args.helpText}"
          type="\${args.type}"
          multiple=\${args.multiple}
          tick=\${args.tick}
          elements=\${JSON.stringify(elements)}
          selectedValue=\${JSON.stringify(['2', '5'])}
          selectAll=\${args.seleccionarTot}
          labelSelectAll=\${args.labelSelectAll}
          labelDeselectAll=\${args.labelDeselectAll}
          deselectable=\${args.desselectable}
          dropdownPlaceholder=\${args.placeHolder}
          openWithSearch
          ?invalid=\${args.invalid}
          ?unorder=\${args.unorder}
          searchThreshold=\${args.searchThreshold}
        >
          <label slot="label" for="dropdown1">\${args.label}</label>
          <input
            slot="input"
            id="dropdown1"
            type="text"
            ?required=\${args.required}
            ?disabled=\${args.disabled}
            ?readonly=\${args.readonly}
            />
        </dss-input-dropdown>
      </div>
      \` : html\`
        <div style="height: 300px">
          <dss-input-dropdown
            inputSize="\${args.inputSize}"
            icon="\${args.icon}"
            helpText="\${args.helpText}"
            type="\${args.type}"
            multiple=\${args.multiple}
            tick=\${args.tick}
            elements=\${JSON.stringify(elements)}
            selectedValue=\${JSON.stringify(['2', '5'])}
            selectAll=\${args.seleccionarTot}
            labelSelectAll=\${args.labelSelectAll}
            labelDeselectAll=\${args.labelDeselectAll}
            deselectable=\${args.desselectable}
            dropdownPlaceholder=\${args.placeHolder}
            ?invalid=\${args.invalid}
            searchThreshold=\${args.searchThreshold}
          >
            <label slot="label" for="dropdown1">\${args.label}</label>
            <input
              slot="input"
              id="dropdown1"
              type="text"
              ?required=\${args.required}
              ?disabled=\${args.disabled}
              ?readonly=\${args.readonly}
              />
          </dss-input-dropdown>
        </div>
    \`;
  }
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var h,E,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
        <dss-input-dropdown
              helpText="Help text."
              type="default"
              elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
            >
              <label slot="label" for="dropdown1">Simple</label>
              <input id="dropdown1" slot="input" type="text" />
            </dss-input-dropdown>
        </div>
    \`;
  }
}`,...(x=(E=n.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var f,S,$;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
        <dss-input-dropdown
          helpText="Help text."
          type="default"
          multiple
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdown9">Multiple</label>
          <input id="dropdown9" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    \`;
  }
}`,...($=(S=a.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var g,T,H;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
        <dss-input-dropdown
            helpText="Help text."
            type="default"
            multiple
            selectAll
            labelSelectAll='Custom select all'
            labelDeselectAll='Custom unselect all'
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="dropdown10">Select All</label>
            <input id="dropdown10" slot="input" type="text" />
          </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(H=(T=o.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var A,D,k;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
        <dss-input-dropdown
            helpText="Help text."
            type="default"
            multiple
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
            selectedValue='["2","4"]'
          >
            <label slot="label" for="dropdown1">Default</label>
            <input id="dropdown1" slot="input" type="text" />
          </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(k=(D=d.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var q,O,P;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
        <dss-input-dropdown
            helpText="Help text."
            type="default"
            deselectable
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="dropdown1">Default</label>
            <input id="dropdown1" slot="input" type="text" />
          </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(P=(O=r.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var z,N,M;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
        <dss-input-dropdown
          helpText="Help text."
          type="default"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdown1">Type Default</label>
          <input id="dropdown1" slot="input" type="text" />
        </dss-input-dropdown>
      <dss-input-dropdown
          helpText="Help text."
          type="green"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdown1">Type Green</label>
          <input id="dropdown1" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(M=(N=s.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var W,J,V;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
        <dss-input-dropdown
            helpText="Help text."
            type="default"
            tick="false"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="dropdown1">Sense tick</label>
            <input id="dropdown1" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(V=(J=p.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var C,I,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
        <dss-input-dropdown
          icon="person"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdown1">Sense tick</label>
          <input id="dropdown1" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(_=(I=i.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var F,X,B;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
        <dss-input-dropdown
          icon="person"
          helpText="Help text."
          type="default"
          boxStyle="width:400px;"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdown1">Force component width</label>
          <input id="dropdown1" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(B=(X=u.parameters)==null?void 0:X.docs)==null?void 0:B.source}}};var R,U,j;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
<dss-input-dropdown
            helpText="Help text."
            type="default"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="dropdown1">Simple</label>
            <input id="dropdown1" slot="input" type="text"  required/>
          </dss-input-dropdown>
<dss-input-dropdown
            helpText="Help text."
            type="default"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="dropdown1">Simple</label>
            <input id="dropdown1" slot="input" type="text"  disabled/>
          </dss-input-dropdown>
<dss-input-dropdown
            icon="person"
            helpText="Help text."
            type="default"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
            selectedValue='["1"]'
            >
              <label slot="label" for="dropdown4">Readonly</label>
              <input id="dropdown4" slot="input" type="text" readonly/>
          </dss-input-dropdown>
</div>
    \`;
  }
}`,...(j=(U=c.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var G,K,L;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
        <dss-input-dropdown
          helpText="Help text."
          type="default"
          openWithSearch
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdown900">Simple</label>
          <input id="dropdown900" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(L=(K=b.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const Y=["Playground","Simple","Multiple","SelectAll","Predefined","Unselect","Types","NoTick","Icon","BoxStyle","States","Open"],ee=Object.freeze(Object.defineProperty({__proto__:null,BoxStyle:u,Icon:i,Multiple:a,NoTick:p,Open:b,Playground:t,Predefined:d,SelectAll:o,Simple:n,States:c,Types:s,Unselect:r,__namedExportsOrder:Y,default:Q},Symbol.toStringTag,{value:"Module"}));export{u as B,i as I,a as M,p as N,b as O,t as P,ee as S,s as T,r as U,n as a,o as b,d as c,c as d};
