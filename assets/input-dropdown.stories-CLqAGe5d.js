import{x as l}from"./lit-html-D6cejpwM.js";const le={title:"Components/Input Dropdown",argTypes:{inputSize:{name:"Mida de l'input",control:{type:"radio"},options:["sm","md","lg"]},labelSelectAll:{name:"Text per seleccionar-ho tot",control:{type:"text"},if:{arg:"seleccionarTot",truthy:!0}},labelDeselectAll:{name:"Text per deseleccionar-ho tot",control:{type:"text"},if:{arg:"seleccionarTot",truthy:!0}},seleccionarTot:{name:"Seleccionar-ho tot",control:{type:"boolean"},if:{arg:"multiple",truthy:!0}},multiple:{name:"Múltiple",control:{type:"boolean"}},tick:{name:"Tick",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},type:{name:"Tipus",control:{type:"select"},options:["default","green"]},desselectable:{name:"Desseleccionable",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},icon:{name:"Icon",control:{type:"text"}},label:{name:"Label",control:{type:"text"}},placeHolder:{name:"Placeholder",control:{type:"text"}},required:{name:"Requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},helpText:{name:"Message for initial help"},openWithSearch:{name:"Obrir amb cerca",control:{type:"boolean"}},invalid:{name:"No vàlid",control:{type:"boolean"}},unorder:{name:"Desordenar elements",control:{type:"boolean"}},searchThreshold:{name:"Llindar de filtre (nombre de caràcters)",control:{type:"number"}},advancedFilter:{name:"Filtre avançat",control:{type:"boolean"}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=539-1914&m=dev"}},args:{inputSize:"lg",label:"My dropdown",seleccionarTot:!0,multiple:!1,tick:!0,disabled:!1,type:"default",desselectable:!1,icon:"search",placeHolder:"Seleccionar",required:!1,readonly:!1,labelSelectAll:"Seleccionar-ho tot",labelDeselectAll:"Deseleccionar-ho tot",helpText:"Help text.",openWithSearch:!1,invalid:!1,unorder:!1,searchThreshold:2,advancedFilter:!1},render:e=>{const v=[{label:"Diagnostics Inicial",value:"1"},{label:"Diagnostics Neutral",value:"3"},{label:"Sense resultats",value:"4"},{label:"Resultat",value:"5"},{label:"Diagnostics Crític",value:"2"},{label:"Resultat Crític",value:"6"}];return e.openWithSearch?l`
      <div style="height: 300px">
        <dss-input-dropdown
          inputSize="${e.inputSize}"
          icon="${e.icon}"
          helpText="${e.helpText}"
          type="${e.type}"
          multiple=${e.multiple}
          tick=${e.tick}
          elements=${JSON.stringify(v)}
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
          ?advancedFilter=${e.advancedFilter}
        >
          <label slot="label" for="playground">${e.label}</label>
          <input
            slot="input"
            id="playground"
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
            elements=${JSON.stringify(v)}
            selectedValue=${JSON.stringify(["2","5"])}
            selectAll=${e.seleccionarTot}
            labelSelectAll=${e.labelSelectAll}
            labelDeselectAll=${e.labelDeselectAll}
            deselectable=${e.desselectable}
            dropdownPlaceholder=${e.placeHolder}
            ?invalid=${e.invalid}
            searchThreshold=${e.searchThreshold}
            ?advancedFilter=${e.advancedFilter}
          >
            <label slot="label" for="playground">${e.label}</label>
            <input
              slot="input"
              id="playground"
              type="text"
              ?required=${e.required}
              ?disabled=${e.disabled}
              ?readonly=${e.readonly}
              />
          </dss-input-dropdown>
        </div>
    `}},a={tags:["!dev"],render:()=>l`
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
    `},n={tags:["!dev"],render:()=>l`
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
    `},s={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
            helpText="Help text."
            type="default"
            multiple
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
            selectedValue='["2","4"]'
          >
            <label slot="label" for="dropdownPredefined">Default</label>
            <input id="dropdownPredefined" slot="input" type="text" />
          </dss-input-dropdown>
      </div>
    `},d={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
            helpText="Help text."
            type="default"
            deselectable
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="unselect">Default</label>
            <input id="unselect" slot="input" type="text" />
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
          <label slot="label" for="dropdownTypeDefault">Type Default</label>
          <input id="dropdownTypeDefault" slot="input" type="text" />
        </dss-input-dropdown>
      <dss-input-dropdown
          helpText="Help text."
          type="green"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdownTypeGreen">Type Green</label>
          <input id="dropdownTypeGreen" slot="input" type="text" />
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
            <label slot="label" for="noTick">Sense tick</label>
            <input id="noTick" slot="input" type="text" />
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
          <label slot="label" for="inputIcon">Sense tick</label>
          <input id="inputIcon" slot="input" type="text" />
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
          <label slot="label" for="boxStyle">Force component width</label>
          <input id="boxStyle" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    `},c={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
<dss-input-dropdown
            helpText="Help text."
            type="default"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="states1">Simple</label>
            <input id="states1" slot="input" type="text"  required/>
          </dss-input-dropdown>
<dss-input-dropdown
            helpText="Help text."
            type="default"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="states2">Simple</label>
            <input id="states2" slot="input" type="text"  disabled/>
          </dss-input-dropdown>
<dss-input-dropdown
            icon="person"
            helpText="Help text."
            type="default"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
            selectedValue='["1"]'
            >
              <label slot="label" for="states3">Readonly</label>
              <input id="states3" slot="input" type="text" readonly/>
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
          <label slot="label" for="dropdownOpen">Simple</label>
          <input id="dropdownOpen" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    `},m={tags:["!dev"],render:()=>l`
      <div class="container-dropdownlist">
        <dss-input-dropdown
          icon="person"
          helpText="Help text."
          type="default"
          multiple
          advancedFilter
          searchThreshold="2"
          elements='[
            {"label":"Diagnóstics Inicial", "value":"1"},
            {"label":"Diagnóstics Crític", "value":"2"},
            {"label":"Resultat", "value":"3"},
            {"label":"Resultat Crític", "value":"4"}
          ]'
        >
          <label slot="label" for="advancedFilter">Filtre avançat</label>
          <input id="advancedFilter" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    `};var y,h,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    searchThreshold: 2,
    advancedFilter: false
  },
  render: (args: any) => {
    const elements = [{
      label: 'Diagnostics Inicial',
      value: '1'
    }, {
      label: 'Diagnostics Neutral',
      value: '3'
    }, {
      label: 'Sense resultats',
      value: '4'
    }, {
      label: 'Resultat',
      value: '5'
    }, {
      label: 'Diagnostics Crític',
      value: '2'
    }, {
      label: 'Resultat Crític',
      value: '6'
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
          ?advancedFilter=\${args.advancedFilter}
        >
          <label slot="label" for="playground">\${args.label}</label>
          <input
            slot="input"
            id="playground"
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
            ?advancedFilter=\${args.advancedFilter}
          >
            <label slot="label" for="playground">\${args.label}</label>
            <input
              slot="input"
              id="playground"
              type="text"
              ?required=\${args.required}
              ?disabled=\${args.disabled}
              ?readonly=\${args.readonly}
              />
          </dss-input-dropdown>
        </div>
    \`;
  }
}`,...(w=(h=t.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var x,f,E;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(f=a.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var S,g,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(g=n.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var $,D,A;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(A=(D=o.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var H,F,k;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
            <label slot="label" for="dropdownPredefined">Default</label>
            <input id="dropdownPredefined" slot="input" type="text" />
          </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(k=(F=s.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var O,P,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
            <label slot="label" for="unselect">Default</label>
            <input id="unselect" slot="input" type="text" />
          </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var C,I,N;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
          <label slot="label" for="dropdownTypeDefault">Type Default</label>
          <input id="dropdownTypeDefault" slot="input" type="text" />
        </dss-input-dropdown>
      <dss-input-dropdown
          helpText="Help text."
          type="green"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
          <label slot="label" for="dropdownTypeGreen">Type Green</label>
          <input id="dropdownTypeGreen" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(N=(I=r.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var z,M,R;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
            <label slot="label" for="noTick">Sense tick</label>
            <input id="noTick" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(R=(M=p.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var J,W,V;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
          <label slot="label" for="inputIcon">Sense tick</label>
          <input id="inputIcon" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(V=(W=i.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var _,G,B;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
          <label slot="label" for="boxStyle">Force component width</label>
          <input id="boxStyle" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(B=(G=u.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var U,j,K;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
<dss-input-dropdown
            helpText="Help text."
            type="default"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="states1">Simple</label>
            <input id="states1" slot="input" type="text"  required/>
          </dss-input-dropdown>
<dss-input-dropdown
            helpText="Help text."
            type="default"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          >
            <label slot="label" for="states2">Simple</label>
            <input id="states2" slot="input" type="text"  disabled/>
          </dss-input-dropdown>
<dss-input-dropdown
            icon="person"
            helpText="Help text."
            type="default"
            elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
            selectedValue='["1"]'
            >
              <label slot="label" for="states3">Readonly</label>
              <input id="states3" slot="input" type="text" readonly/>
          </dss-input-dropdown>
</div>
    \`;
  }
}`,...(K=(j=c.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var L,X,Q;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <label slot="label" for="dropdownOpen">Simple</label>
          <input id="dropdownOpen" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(Q=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-dropdownlist">
        <dss-input-dropdown
          icon="person"
          helpText="Help text."
          type="default"
          multiple
          advancedFilter
          searchThreshold="2"
          elements='[
            {"label":"Diagnóstics Inicial", "value":"1"},
            {"label":"Diagnóstics Crític", "value":"2"},
            {"label":"Resultat", "value":"3"},
            {"label":"Resultat Crític", "value":"4"}
          ]'
        >
          <label slot="label" for="advancedFilter">Filtre avançat</label>
          <input id="advancedFilter" slot="input" type="text" />
        </dss-input-dropdown>
      </div>
    \`;
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const te=["Playground","Simple","Multiple","SelectAll","Predefined","Unselect","Types","NoTick","Icon","BoxStyle","States","Open","AdvancedFilter"],ne=Object.freeze(Object.defineProperty({__proto__:null,AdvancedFilter:m,BoxStyle:u,Icon:i,Multiple:n,NoTick:p,Open:b,Playground:t,Predefined:s,SelectAll:o,Simple:a,States:c,Types:r,Unselect:d,__namedExportsOrder:te,default:le},Symbol.toStringTag,{value:"Module"}));export{m as A,u as B,i as I,n as M,p as N,b as O,t as P,ne as S,r as T,d as U,a,o as b,s as c,c as d};
