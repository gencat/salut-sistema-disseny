import"./lit-element-Dloa6E9d.js";import{x as n}from"./lit-html-D6a8R3xZ.js";const s={title:"Discontinuat/Dropdown-list ⚠️",argTypes:{labelSelectAll:{name:"Text per seleccionar-ho tot",control:{type:"text"},if:{arg:"seleccionarTot",truthy:!0}},labelDeselectAll:{name:"Text per deseleccionar-ho tot",control:{type:"text"},if:{arg:"seleccionarTot",truthy:!0}},seleccionarTot:{name:"Seleccionar-ho tot",control:{type:"boolean"},if:{arg:"multiple",truthy:!0}},multiple:{name:"Múltiple",control:{type:"boolean"}},tick:{name:"Tick",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},tipus:{name:"Tipus",control:{type:"select"},options:["default","green"]},desselectable:{name:"Desseleccionable",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},icon:{name:"Icon",control:{type:"text"}},label:{name:"Label",control:{type:"text"}},placeHolder:{name:"Placeholder",control:{type:"text"}},required:{name:"Requerit",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}},openWithSearch:{name:"Obrir amb cerca",control:{type:"boolean"}}},parameters:{layout:"centered"}},l={render:e=>{const t=[{label:"Element 1",value:"1"},{label:"Element 2",value:"2"},{label:"Element 3",value:"3"},{label:"Element 4",value:"4"},{label:"Element 5",value:"5"},{label:"Element 6",value:"6"}];return e.openWithSearch?n`
          <div style="height: 350px">
            <dss-dropdownlist
              ?disabled=${e.disabled}
              ?required=${e.required}
              ?readonly=${e.readonly}
              openWithSearch="true"
              placeHolder=${e.placeHolder}
              multiple=${e.multiple}
              tick=${e.tick}
              type=${e.tipus}
              deselectable=${e.desselectable}
              elements=${JSON.stringify(t)}
              icon=${e.icon}
              label=${e.label}
              selectedValue=${JSON.stringify(["2","5"])}
              inputStyle=${e.inputStyle}
              boxStyle=${e.boxStyle}
              selectAll=${e.seleccionarTot}
              labelSelectAll=${e.labelSelectAll}
              labelDeselectAll=${e.labelDeselectAll}
            ></dss-dropdownlist>
          </div>
        `:n`
          <div style="height: 350px">
            <dss-dropdownlist
              ?disabled=${e.disabled}
              ?required=${e.required}
              ?readonly=${e.readonly}
              placeHolder=${e.placeHolder}
              multiple=${e.multiple}
              tick=${e.tick}
              type=${e.tipus}
              deselectable=${e.desselectable}
              elements=${JSON.stringify(t)}
              icon=${e.icon}
              label=${e.label}
              selectedValue=${JSON.stringify(["2","5"])}
              inputStyle=${e.inputStyle}
              boxStyle=${e.boxStyle}
              selectAll=${e.seleccionarTot}
              labelSelectAll=${e.labelSelectAll}
              labelDeselectAll=${e.labelDeselectAll}
            ></dss-dropdownlist>
          </div>
        `},name:"Exemple",args:{seleccionarTot:!0,multiple:!1,tick:!0,disabled:!1,tipus:"default",desselectable:!1,icon:"search",label:"Label",placeHolder:"Placeholder",required:!1,readonly:!1,openWithSearch:!1,labelSelectAll:"Seleccionar-ho tot",labelDeselectAll:"Deseleccionar-ho tot"}};var a,o,r;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => {
    const elements = [{
      label: 'Element 1',
      value: '1'
    }, {
      label: 'Element 2',
      value: '2'
    }, {
      label: 'Element 3',
      value: '3'
    }, {
      label: 'Element 4',
      value: '4'
    }, {
      label: 'Element 5',
      value: '5'
    }, {
      label: 'Element 6',
      value: '6'
    }];
    return args.openWithSearch ? html\`
          <div style="height: 350px">
            <dss-dropdownlist
              ?disabled=\${args.disabled}
              ?required=\${args.required}
              ?readonly=\${args.readonly}
              openWithSearch="true"
              placeHolder=\${args.placeHolder}
              multiple=\${args.multiple}
              tick=\${args.tick}
              type=\${args.tipus}
              deselectable=\${args.desselectable}
              elements=\${JSON.stringify(elements)}
              icon=\${args.icon}
              label=\${args.label}
              selectedValue=\${JSON.stringify(['2', '5'])}
              inputStyle=\${args.inputStyle}
              boxStyle=\${args.boxStyle}
              selectAll=\${args.seleccionarTot}
              labelSelectAll=\${args.labelSelectAll}
              labelDeselectAll=\${args.labelDeselectAll}
            ></dss-dropdownlist>
          </div>
        \` : html\`
          <div style="height: 350px">
            <dss-dropdownlist
              ?disabled=\${args.disabled}
              ?required=\${args.required}
              ?readonly=\${args.readonly}
              placeHolder=\${args.placeHolder}
              multiple=\${args.multiple}
              tick=\${args.tick}
              type=\${args.tipus}
              deselectable=\${args.desselectable}
              elements=\${JSON.stringify(elements)}
              icon=\${args.icon}
              label=\${args.label}
              selectedValue=\${JSON.stringify(['2', '5'])}
              inputStyle=\${args.inputStyle}
              boxStyle=\${args.boxStyle}
              selectAll=\${args.seleccionarTot}
              labelSelectAll=\${args.labelSelectAll}
              labelDeselectAll=\${args.labelDeselectAll}
            ></dss-dropdownlist>
          </div>
        \`;
  },
  name: 'Exemple',
  args: {
    seleccionarTot: true,
    multiple: false,
    tick: true,
    disabled: false,
    tipus: 'default',
    desselectable: false,
    icon: 'search',
    label: 'Label',
    placeHolder: 'Placeholder',
    required: false,
    readonly: false,
    openWithSearch: false,
    labelSelectAll: 'Seleccionar-ho tot',
    labelDeselectAll: 'Deseleccionar-ho tot'
  }
}`,...(r=(o=l.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const i=["Playground"],p=Object.freeze(Object.defineProperty({__proto__:null,Playground:l,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{l as P,p as S};
