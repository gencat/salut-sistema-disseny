import{x as l}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const a=`
    .wrapper {
        height: 300px;
        display: flex;
        align-items: top;
        gap: 24px;
    }
`,ce={title:"Components/Form/Select",argTypes:{inputSize:{name:"Mida de l'input",control:{type:"radio"},options:["sm","md","lg"]},labelSelectAll:{name:"Text per seleccionar-ho tot",control:{type:"text"},if:{arg:"seleccionarTot",truthy:!0}},labelDeselectAll:{name:"Text per deseleccionar-ho tot",control:{type:"text"},if:{arg:"seleccionarTot",truthy:!0}},seleccionarTot:{name:"Seleccionar-ho tot",control:{type:"boolean"},if:{arg:"multiple",truthy:!0}},multiple:{name:"Múltiple",control:{type:"boolean"}},tick:{name:"Tick",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},type:{name:"Tipus",control:{type:"select"},options:["default","green"]},desselectable:{name:"Desseleccionable",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},icon:{name:"Icon",control:{type:"text"}},label:{name:"Label",control:{type:"text"}},placeHolder:{name:"Placeholder",control:{type:"text"}},required:{name:"Requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},helpText:{name:"Message for initial help"},openWithSearch:{name:"Obrir amb cerca",control:{type:"boolean"}},invalid:{name:"No vàlid",control:{type:"boolean"}},autoSort:{name:"Ordenar elements",control:{type:"boolean"}},searchThreshold:{name:"Llindar de filtre (nombre de caràcters)",control:{type:"number"}},advancedFilter:{name:"Filtre avançat",control:{type:"boolean"}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=539-1914&m=dev"}},args:{inputSize:"lg",label:"My dropdown",seleccionarTot:!0,multiple:!1,tick:!0,disabled:!1,type:"default",desselectable:!1,icon:"search",placeHolder:"Seleccionar",required:!1,readonly:!1,labelSelectAll:"Seleccionar-ho tot",labelDeselectAll:"Deseleccionar-ho tot",helpText:"Help text.",openWithSearch:!1,invalid:!1,autoSort:!1,searchThreshold:2,advancedFilter:!1},render:e=>{const y=[{label:"Diagnostics Inicial",value:"1"},{label:"Diagnostics Neutral",value:"3"},{label:"Sense resultats",value:"4"},{label:"Resultat",value:"5"},{label:"Diagnostics Crític",value:"2"},{label:"Resultat Crític",value:"6"}];return l`
            <div style="height: 300px">
                <dss-form-select
                    label="${e.label}"
                    size="${e.inputSize}"
          icon="${e.icon}"
          helpText="${e.helpText}"
          type="${e.type}"
          multiple=${e.multiple}
          tick=${e.tick}
          elements=${JSON.stringify(y)}
          selectAll=${e.seleccionarTot}
          labelSelectAll=${e.labelSelectAll}
          labelDeselectAll=${e.labelDeselectAll}
          deselectable=${e.desselectable}
          dropdownPlaceholder=${e.placeHolder}
          ?openWithSearch=${e.openWithSearch}
          ?invalid=${e.invalid}
          ?autoSort=${e.autoSort}
          searchThreshold=${e.searchThreshold}
          ?advancedFilter=${e.advancedFilter}
                    ?required=${e.required}
          ?disabled=${e.disabled}
          ?readonly=${e.readonly}
                >
                </dss-form-select>
            </div>
        `}},r={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-form-select
                    name="simple-select"
                    label="Simple"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
      </div>
    `,decorators:[t(a,"select-style-simple")]},n={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-form-select
                    icon="search"
                    name="icon-select"
                    label="Amb icona"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
      </div>
    `,decorators:[t(a,"select-style-simple")]},c={tags:["!dev"],render:()=>l`
            <div class="wrapper">
        <dss-form-select
                    multiple
                    icon="search"
                    name="multiple-select"
                    label="Multiple"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
      </div>
    `,decorators:[t(a,"select-style-multiple")]},o={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-form-select
                    icon="search"
                    name="selectall-select"
                    label="Select All"
                    helpText="Help text."
                    type="default"
                    multiple
                    selectAll
                    labelSelectAll='Custom select all'
                    labelDeselectAll='Custom unselect all'
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                >
                </dss-form-select>
      </div>
    `,decorators:[t(a,"select-style-selectall")]},d={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-form-select
                    icon="search"
                    name="predefinied-value-select"
                    label="Amb value"
                    helpText="Help text."
                    type="default"
                    multiple
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                    value='2,4'
          >
        </dss-form-select>
                <dss-form-select
                    icon="search"
                    name="predefinied-selectedValue-select"
                    label="Amb selectedValue"
                    helpText="Help text."
                    type="default"
                    multiple
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                    selectedValue='["2","4"]'
          >
        </dss-form-select>
      </div>
    `,decorators:[t(a,"select-style-predefined")]},m={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-form-select
                    name="deselectable-select"
                    label="Deseleccionable"
                    icon="search"
                    helpText="Help text."
                    type="default"
                    deselectable
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                >
                </dss-form-select>
      </div>
    `,decorators:[t(a,"select-style-unselect")]},i={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-form-select
                    name="type-default-select"
                    label="Type Default"
                    icon="search"
          helpText="Help text."
          type="default"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
        <dss-form-select
                    name="type-green-select"
                    label="Type Green"
                    icon="search"
          helpText="Help text."
          type="green"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
      </div>
    `,decorators:[t(a,"select-style-types")]},p={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-form-select
                    name="notick-select"
                    label="Sense tick"
                    icon="search"
          helpText="Help text."
                    type="default"
                    tick="false"
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                >
        </dss-form-select>
      </div>
    `,decorators:[t(a,"select-style-notick")]},u={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-form-select
          icon="search"
                    name="required-select"
                    label="Force dropdown height"
          helpText="Help text."
          type="default"
          dropdownStyle="max-height:110px;"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
      </div>
    `,decorators:[t(a,"select-style-boxstyle")]},b={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-form-select
                    required
                    name="required-select"
                    label="Simple"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
        <dss-form-select
                    disabled
                    name="disabled-select"
                    label="Simple"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
        <dss-form-select
          name="readonly-select"
                    label="Readonly"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          selectedValue='["1"]'
                    readonly
          >
        </dss-form-select>
    </div>
    `,decorators:[t(a,"select-style-states")]},v={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-form-select
          type="default"
                    name="open-select"
                    label="Obert per defecte"
          icon="search"
          elements=${JSON.stringify([{label:"Si",value:"s"},{label:"No",value:"n"},{label:"No ho sé",value:"x"}])}
          helpText="Help text."
          openWithSearch
          unorder
        >
        </dss-form-select>
      </div>
    `,decorators:[t(a,"select-style-open")]},f={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-form-select
                    name="advanced-filter-select"
                    label="Filtre avançat"
          icon="search"
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
        </dss-form-select>
      </div>
    `,decorators:[t(a,"select-style-advancedfilter")]},h={tags:["!dev"],render:()=>l`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const y=document.querySelector("#manual-focus-demo");y&&y.focus()}}></dss-button>
        <dss-form-select
                    id="manual-focus-demo"
                    name="advanced-filter-select"
                    label="Filtre avançat"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[
            {"label":"Diagnóstics Inicial", "value":"1"},
            {"label":"Diagnóstics Crític", "value":"2"},
            {"label":"Resultat", "value":"3"},
            {"label":"Resultat Crític", "value":"4"}
          ]'
        >
        </dss-form-select>
      </div>
    `,decorators:[t(a,"select-style-focus")]};var S,E,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    autoSort: false,
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
    return html\`
            <div style="height: 300px">
                <dss-form-select
                    label="\${args.label}"
                    size="\${args.inputSize}"
          icon="\${args.icon}"
          helpText="\${args.helpText}"
          type="\${args.type}"
          multiple=\${args.multiple}
          tick=\${args.tick}
          elements=\${JSON.stringify(elements)}
          selectAll=\${args.seleccionarTot}
          labelSelectAll=\${args.labelSelectAll}
          labelDeselectAll=\${args.labelDeselectAll}
          deselectable=\${args.desselectable}
          dropdownPlaceholder=\${args.placeHolder}
          ?openWithSearch=\${args.openWithSearch}
          ?invalid=\${args.invalid}
          ?autoSort=\${args.autoSort}
          searchThreshold=\${args.searchThreshold}
          ?advancedFilter=\${args.advancedFilter}
                    ?required=\${args.required}
          ?disabled=\${args.disabled}
          ?readonly=\${args.readonly}
                >
                </dss-form-select>
            </div>
        \`;
  }
}`,...(x=(E=s.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var g,T,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-select
                    name="simple-select"
                    label="Simple"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-simple')]
}`,...(w=(T=r.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var $,H,A;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-select
                    icon="search"
                    name="icon-select"
                    label="Amb icona"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-simple')]
}`,...(A=(H=n.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var D,F,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
        <dss-form-select
                    multiple
                    icon="search"
                    name="multiple-select"
                    label="Multiple"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-multiple')]
}`,...(k=(F=c.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var C,q,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-select
                    icon="search"
                    name="selectall-select"
                    label="Select All"
                    helpText="Help text."
                    type="default"
                    multiple
                    selectAll
                    labelSelectAll='Custom select all'
                    labelDeselectAll='Custom unselect all'
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                >
                </dss-form-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-selectall')]
}`,...(N=(q=o.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var R,O,I;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-select
                    icon="search"
                    name="predefinied-value-select"
                    label="Amb value"
                    helpText="Help text."
                    type="default"
                    multiple
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                    value='2,4'
          >
        </dss-form-select>
                <dss-form-select
                    icon="search"
                    name="predefinied-selectedValue-select"
                    label="Amb selectedValue"
                    helpText="Help text."
                    type="default"
                    multiple
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                    selectedValue='["2","4"]'
          >
        </dss-form-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-predefined')]
}`,...(I=(O=d.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var M,P,z;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-select
                    name="deselectable-select"
                    label="Deseleccionable"
                    icon="search"
                    helpText="Help text."
                    type="default"
                    deselectable
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                >
                </dss-form-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-unselect')]
}`,...(z=(P=m.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var W,V,_;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-select
                    name="type-default-select"
                    label="Type Default"
                    icon="search"
          helpText="Help text."
          type="default"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
        <dss-form-select
                    name="type-green-select"
                    label="Type Green"
                    icon="search"
          helpText="Help text."
          type="green"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-types')]
}`,...(_=(V=i.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var J,B,L;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-select
                    name="notick-select"
                    label="Sense tick"
                    icon="search"
          helpText="Help text."
                    type="default"
                    tick="false"
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                >
        </dss-form-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-notick')]
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var U,j,G;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-select
          icon="search"
                    name="required-select"
                    label="Force dropdown height"
          helpText="Help text."
          type="default"
          dropdownStyle="max-height:110px;"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-boxstyle')]
}`,...(G=(j=u.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var K,X,Q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-select
                    required
                    name="required-select"
                    label="Simple"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
        <dss-form-select
                    disabled
                    name="disabled-select"
                    label="Simple"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-form-select>
        <dss-form-select
          name="readonly-select"
                    label="Readonly"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          selectedValue='["1"]'
                    readonly
          >
        </dss-form-select>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-states')]
}`,...(Q=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const options = [{
      label: 'Si',
      value: 's'
    }, {
      label: 'No',
      value: 'n'
    }, {
      label: 'No ho sé',
      value: 'x'
    }];
    return html\`
      <div class="wrapper">
        <dss-form-select
          type="default"
                    name="open-select"
                    label="Obert per defecte"
          icon="search"
          elements=\${JSON.stringify(options)}
          helpText="Help text."
          openWithSearch
          unorder
        >
        </dss-form-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-open')]
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var le,te,ae;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-select
                    name="advanced-filter-select"
                    label="Filtre avançat"
          icon="search"
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
        </dss-form-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-advancedfilter')]
}`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,re,ne;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const forceFocus = () => {
      const select = document.querySelector('#manual-focus-demo');
      if (select) {
        (select as HTMLElement).focus();
      }
    };
    return html\`
            <div class="wrapper">
                <dss-button label="Focus" @click=\${forceFocus}></dss-button>
        <dss-form-select
                    id="manual-focus-demo"
                    name="advanced-filter-select"
                    label="Filtre avançat"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[
            {"label":"Diagnóstics Inicial", "value":"1"},
            {"label":"Diagnóstics Crític", "value":"2"},
            {"label":"Resultat", "value":"3"},
            {"label":"Resultat Crític", "value":"4"}
          ]'
        >
        </dss-form-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-focus')]
}`,...(ne=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const oe=["Playground","Simple","Icon","Multiple","SelectAll","Predefined","Unselect","Types","NoTick","BoxStyle","States","Open","AdvancedFilter","Focus"],ie=Object.freeze(Object.defineProperty({__proto__:null,AdvancedFilter:f,BoxStyle:u,Focus:h,Icon:n,Multiple:c,NoTick:p,Open:v,Playground:s,Predefined:d,SelectAll:o,Simple:r,States:b,Types:i,Unselect:m,__namedExportsOrder:oe,default:ce},Symbol.toStringTag,{value:"Module"}));export{f as A,u as B,h as F,n as I,c as M,p as N,v as O,s as P,ie as S,i as T,m as U,r as a,o as b,d as c,b as d};
