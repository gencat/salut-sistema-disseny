import{x as e}from"./iframe-DLVb3rJw.js";const c={title:"Components/Angular/Selector",argTypes:{multiple:{name:"Múltiple",control:{type:"boolean"}},tick:{name:"Tick",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},tipus:{name:"Tipus",control:{type:"select"},options:["default","green"]},desselectable:{name:"Desseleccionable",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}}},parameters:{layout:"centered"}},l={render:x=>{const m=[{label:"Element 1",value:"1"},{label:"Element 2",value:"2"},{label:"Element 3",value:"3"},{label:"Element 4",value:"4"},{label:"Element 5",value:"5"},{label:"Element 6",value:"6"}];return e`
      <dss-selector
        ariaLabel="Llista d'elements"
        disabled=${x.disabled}
        multiple=${x.multiple}
        tick=${x.tick}
        type=${x.tipus}
        deselectable=${x.desselectable}
        elements=${JSON.stringify(m)}
        selectedValue=${"2"}
      ></dss-selector>
    `},args:{multiple:!1,tick:!0,disabled:!1,tipus:"default",desselectable:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=560-6455&m=dev"}}},s={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" disabled></dss-selector>
      </div>
    `},t={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" disabled></dss-selector>
      </div>
    `},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" type="default"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" disabled type="default"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" type="default"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" disabled type="default"></dss-selector>
      </div>
    `},n={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" tick="false"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" disabled tick="false"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" tick="false"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" disabled tick="false"></dss-selector>
      </div>
    `},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" type="green"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" disabled type="green"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" type="green"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" disabled type="green"></dss-selector>
      </div>
    `},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" deselectable></dss-selector>
      </div>
    `},u={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]"></dss-selector>
      </div>
    `};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    return html\`
      <dss-selector
        ariaLabel="Llista d'elements"
        disabled=\${args.disabled}
        multiple=\${args.multiple}
        tick=\${args.tick}
        type=\${args.tipus}
        deselectable=\${args.desselectable}
        elements=\${JSON.stringify(elements)}
        selectedValue=\${'2'}
      ></dss-selector>
    \`;
  },
  args: {
    multiple: false,
    tick: true,
    disabled: false,
    tipus: 'default',
    desselectable: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=560-6455&m=dev'
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" disabled></dss-selector>
      </div>
    \`;
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" disabled></dss-selector>
      </div>
    \`;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" type="default"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" disabled type="default"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" type="default"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" disabled type="default"></dss-selector>
      </div>
    \`;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" tick="false"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" disabled tick="false"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" tick="false"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" disabled tick="false"></dss-selector>
      </div>
    \`;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" type="green"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" disabled type="green"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" type="green"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" disabled type="green"></dss-selector>
      </div>
    \`;
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" deselectable></dss-selector>
      </div>
    \`;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]"></dss-selector>
      </div>
    \`;
  }
}`,...u.parameters?.docs?.source}}};const v=["Playground","Simple","Multiple","TypeDefault","NoTick","TypeGreen","Unselect","SelectedValue"],b=Object.freeze(Object.defineProperty({__proto__:null,Multiple:t,NoTick:n,Playground:l,SelectedValue:u,Simple:s,TypeDefault:a,TypeGreen:r,Unselect:d,__namedExportsOrder:v,default:c},Symbol.toStringTag,{value:"Module"}));export{t as M,n as N,l as P,b as S,a as T,d as U,s as a,r as b,u as c};
