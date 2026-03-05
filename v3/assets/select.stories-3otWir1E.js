import{x as l}from"./iframe-CdZ_4rdx.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const a=`
    .wrapper {
        min-height: 170px;
        display: flex;
        align-items: center;
        gap: 24px;
    }
`,E={title:"Components/Select",argTypes:{inputSize:{name:"Mida de l'input",control:{type:"radio"},options:["sm","md","lg"]},labelSelectAll:{name:"Text per seleccionar-ho tot",control:{type:"text"},if:{arg:"seleccionarTot",truthy:!0}},labelDeselectAll:{name:"Text per deseleccionar-ho tot",control:{type:"text"},if:{arg:"seleccionarTot",truthy:!0}},seleccionarTot:{name:"Seleccionar-ho tot",control:{type:"boolean"},if:{arg:"multiple",truthy:!0}},multiple:{name:"Múltiple",control:{type:"boolean"}},tick:{name:"Tick",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},type:{name:"Tipus",control:{type:"select"},options:["default","green"]},desselectable:{name:"Desseleccionable",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},icon:{name:"Icon",control:{type:"text"}},label:{name:"Label",control:{type:"text"}},placeHolder:{name:"Placeholder",control:{type:"text"}},required:{name:"Requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},helpText:{name:"Message for initial help"},openWithSearch:{name:"Obrir amb cerca",control:{type:"boolean"}},invalid:{name:"No vàlid",control:{type:"boolean"}},autoSort:{name:"Ordenar elements",control:{type:"boolean"}},searchThreshold:{name:"Llindar de filtre (nombre de caràcters)",control:{type:"number"}},advancedFilter:{name:"Filtre avançat",control:{type:"boolean"}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=539-1914&m=dev"}},args:{inputSize:"lg",label:"My dropdown",seleccionarTot:!0,multiple:!1,tick:!0,disabled:!1,type:"default",desselectable:!1,icon:"search",placeHolder:"Seleccionar",required:!1,readonly:!1,labelSelectAll:"Seleccionar-ho tot",labelDeselectAll:"Deseleccionar-ho tot",helpText:"Help text.",openWithSearch:!1,invalid:!1,autoSort:!1,searchThreshold:2,advancedFilter:!1},render:e=>{const y=[{label:"Diagnostics Inicial",value:"1"},{label:"Diagnostics Neutral",value:"3"},{label:"Sense resultats",value:"4"},{label:"Resultat",value:"5"},{label:"Diagnostics Crític",value:"2"},{label:"Resultat Crític",value:"6"}];return l`
            <div style="height: 300px">
                <dss-select
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
                </dss-select>
            </div>
        `}},r={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-select
                    name="simple-select"
                    label="Simple"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
      </div>
    `,decorators:[t(a,"select-style-simple")]},n={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-select
                    icon="search"
                    name="icon-select"
                    label="Amb icona"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
      </div>
    `,decorators:[t(a,"select-style-simple")]},c={tags:["!dev"],render:()=>l`
            <div class="wrapper">
        <dss-select
                    multiple
                    icon="search"
                    name="multiple-select"
                    label="Multiple"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
      </div>
    `,decorators:[t(a,"select-style-multiple")]},d={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-select
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
                </dss-select>
      </div>
    `,decorators:[t(a,"select-style-selectall")]},o={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-select
                    icon="search"
                    name="predefinied-value-select"
                    label="Amb value"
                    helpText="Help text."
                    type="default"
                    multiple
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                    value='2,4'
          >
        </dss-select>
                <dss-select
                    icon="search"
                    name="predefinied-selectedValue-select"
                    label="Amb selectedValue"
                    helpText="Help text."
                    type="default"
                    multiple
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                    selectedValue='["2","4"]'
          >
        </dss-select>
      </div>
    `,decorators:[t(a,"select-style-predefined")]},i={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-select
                    name="deselectable-select"
                    label="Deseleccionable"
                    icon="search"
                    helpText="Help text."
                    type="default"
                    deselectable
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                >
                </dss-select>
      </div>
    `,decorators:[t(a,"select-style-unselect")]},p={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-select
                    name="type-default-select"
                    label="Type Default"
                    icon="search"
          helpText="Help text."
          type="default"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
        <dss-select
                    name="type-green-select"
                    label="Type Green"
                    icon="search"
          helpText="Help text."
          type="green"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
      </div>
    `,decorators:[t(a,"select-style-types")]},u={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-select
                    name="notick-select"
                    label="Sense tick"
                    icon="search"
          helpText="Help text."
                    type="default"
                    tick="false"
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                >
        </dss-select>
      </div>
    `,decorators:[t(a,"select-style-notick")]},m={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-select
          icon="search"
                    name="required-select"
                    label="Force dropdown height"
          helpText="Help text."
          type="default"
          dropdownStyle="max-height:110px;"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
      </div>
    `,decorators:[t(a,"select-style-boxstyle")]},b={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-select
                    required
                    name="required-select"
                    label="Simple"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
        <dss-select
                    disabled
                    name="disabled-select"
                    label="Simple"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
        <dss-select
          name="readonly-select"
                    label="Readonly"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          selectedValue='["1"]'
                    readonly
          >
        </dss-select>
    </div>
    `,decorators:[t(a,"select-style-states")]},v={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-select
          type="default"
                    name="open-select"
                    label="Obert per defecte"
          icon="search"
          elements=${JSON.stringify([{label:"Si",value:"s"},{label:"No",value:"n"},{label:"No ho sé",value:"x"}])}
          helpText="Help text."
          openWithSearch
          unorder
        >
        </dss-select>
      </div>
    `,decorators:[t(a,"select-style-open")]},h={tags:["!dev"],render:()=>l`
      <div class="wrapper">
        <dss-select
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
        </dss-select>
      </div>
    `,decorators:[t(a,"select-style-advancedfilter")]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
                <dss-select
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
                </dss-select>
            </div>
        \`;
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-select
                    name="simple-select"
                    label="Simple"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-simple')]
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-select
                    icon="search"
                    name="icon-select"
                    label="Amb icona"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-simple')]
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
        <dss-select
                    multiple
                    icon="search"
                    name="multiple-select"
                    label="Multiple"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-multiple')]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-select
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
                </dss-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-selectall')]
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-select
                    icon="search"
                    name="predefinied-value-select"
                    label="Amb value"
                    helpText="Help text."
                    type="default"
                    multiple
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                    value='2,4'
          >
        </dss-select>
                <dss-select
                    icon="search"
                    name="predefinied-selectedValue-select"
                    label="Amb selectedValue"
                    helpText="Help text."
                    type="default"
                    multiple
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                    selectedValue='["2","4"]'
          >
        </dss-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-predefined')]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-select
                    name="deselectable-select"
                    label="Deseleccionable"
                    icon="search"
                    helpText="Help text."
                    type="default"
                    deselectable
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                >
                </dss-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-unselect')]
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-select
                    name="type-default-select"
                    label="Type Default"
                    icon="search"
          helpText="Help text."
          type="default"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
        <dss-select
                    name="type-green-select"
                    label="Type Green"
                    icon="search"
          helpText="Help text."
          type="green"
          deselectable
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-types')]
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-select
                    name="notick-select"
                    label="Sense tick"
                    icon="search"
          helpText="Help text."
                    type="default"
                    tick="false"
                    elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
                >
        </dss-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-notick')]
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-select
          icon="search"
                    name="required-select"
                    label="Force dropdown height"
          helpText="Help text."
          type="default"
          dropdownStyle="max-height:110px;"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-boxstyle')]
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-select
                    required
                    name="required-select"
                    label="Simple"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
        <dss-select
                    disabled
                    name="disabled-select"
                    label="Simple"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
        >
        </dss-select>
        <dss-select
          name="readonly-select"
                    label="Readonly"
          icon="search"
          helpText="Help text."
          type="default"
          elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'
          selectedValue='["1"]'
                    readonly
          >
        </dss-select>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-states')]
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
        <dss-select
          type="default"
                    name="open-select"
                    label="Obert per defecte"
          icon="search"
          elements=\${JSON.stringify(options)}
          helpText="Help text."
          openWithSearch
          unorder
        >
        </dss-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-open')]
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-select
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
        </dss-select>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'select-style-advancedfilter')]
}`,...h.parameters?.docs?.source}}};const S=["Playground","Simple","Icon","Multiple","SelectAll","Predefined","Unselect","Types","NoTick","BoxStyle","States","Open","AdvancedFilter"],g=Object.freeze(Object.defineProperty({__proto__:null,AdvancedFilter:h,BoxStyle:m,Icon:n,Multiple:c,NoTick:u,Open:v,Playground:s,Predefined:o,SelectAll:d,Simple:r,States:b,Types:p,Unselect:i,__namedExportsOrder:S,default:E},Symbol.toStringTag,{value:"Module"}));export{h as A,m as B,n as I,c as M,u as N,v as O,s as P,g as S,p as T,i as U,r as a,d as b,o as c,b as d};
