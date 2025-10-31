import{x as l}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const a=`
    .wrapper {
        height: 300px;
        display: flex;
        align-items: top;
        gap: 24px;
    }
`,ae={title:"Components/Form/Select",argTypes:{inputSize:{name:"Mida de l'input",control:{type:"radio"},options:["sm","md","lg"]},labelSelectAll:{name:"Text per seleccionar-ho tot",control:{type:"text"},if:{arg:"seleccionarTot",truthy:!0}},labelDeselectAll:{name:"Text per deseleccionar-ho tot",control:{type:"text"},if:{arg:"seleccionarTot",truthy:!0}},seleccionarTot:{name:"Seleccionar-ho tot",control:{type:"boolean"},if:{arg:"multiple",truthy:!0}},multiple:{name:"Múltiple",control:{type:"boolean"}},tick:{name:"Tick",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},type:{name:"Tipus",control:{type:"select"},options:["default","green"]},desselectable:{name:"Desseleccionable",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},icon:{name:"Icon",control:{type:"text"}},label:{name:"Label",control:{type:"text"}},placeHolder:{name:"Placeholder",control:{type:"text"}},required:{name:"Requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},helpText:{name:"Message for initial help"},openWithSearch:{name:"Obrir amb cerca",control:{type:"boolean"}},invalid:{name:"No vàlid",control:{type:"boolean"}},autoSort:{name:"Ordenar elements",control:{type:"boolean"}},searchThreshold:{name:"Llindar de filtre (nombre de caràcters)",control:{type:"number"}},advancedFilter:{name:"Filtre avançat",control:{type:"boolean"}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=539-1914&m=dev"}},args:{inputSize:"lg",label:"My dropdown",seleccionarTot:!0,multiple:!1,tick:!0,disabled:!1,type:"default",desselectable:!1,icon:"search",placeHolder:"Seleccionar",required:!1,readonly:!1,labelSelectAll:"Seleccionar-ho tot",labelDeselectAll:"Deseleccionar-ho tot",helpText:"Help text.",openWithSearch:!1,invalid:!1,autoSort:!1,searchThreshold:2,advancedFilter:!1},render:e=>{const te=[{label:"Diagnostics Inicial",value:"1"},{label:"Diagnostics Neutral",value:"3"},{label:"Sense resultats",value:"4"},{label:"Resultat",value:"5"},{label:"Diagnostics Crític",value:"2"},{label:"Resultat Crític",value:"6"}];return l`
            <div style="height: 300px">
                <dss-form-select
                    label="${e.label}"
                    size="${e.inputSize}"
          icon="${e.icon}"
          helpText="${e.helpText}"
          type="${e.type}"
          multiple=${e.multiple}
          tick=${e.tick}
          elements=${JSON.stringify(te)}
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
    `,decorators:[t(a,"select-style-open")]},h={tags:["!dev"],render:()=>l`
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
    `,decorators:[t(a,"select-style-advancedfilter")]};var y,f,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(f=s.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var S,x,g;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var T,w,$;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...($=(w=n.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var H,A,D;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var F,k,q;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(k=o.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var C,N,O;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var M,P,R;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var z,I,W;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(I=i.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var V,_,J;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(J=(_=p.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var B,U,j;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(j=(U=u.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var G,K,L;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(L=(K=b.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var X,Q,Y;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,le;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(le=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};const se=["Playground","Simple","Icon","Multiple","SelectAll","Predefined","Unselect","Types","NoTick","BoxStyle","States","Open","AdvancedFilter"],ce=Object.freeze(Object.defineProperty({__proto__:null,AdvancedFilter:h,BoxStyle:u,Icon:n,Multiple:c,NoTick:p,Open:v,Playground:s,Predefined:d,SelectAll:o,Simple:r,States:b,Types:i,Unselect:m,__namedExportsOrder:se,default:ae},Symbol.toStringTag,{value:"Module"}));export{h as A,u as B,n as I,c as M,p as N,v as O,s as P,ce as S,i as T,m as U,r as a,o as b,d as c,b as d};
