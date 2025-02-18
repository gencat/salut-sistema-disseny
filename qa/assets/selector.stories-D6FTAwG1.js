import"./lit-element-DhY7bShc.js";import{x as e}from"./lit-html-B2eaWknC.js";const L={title:"Components/Selector",argTypes:{multiple:{name:"Múltiple",control:{type:"boolean"}},tick:{name:"Tick",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},tipus:{name:"Tipus",control:{type:"select"},options:["default","green"]},desselectable:{name:"Desseleccionable",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}}},parameters:{layout:"centered"}},l={render:x=>{const J=[{label:"Element 1",value:"1"},{label:"Element 2",value:"2"},{label:"Element 3",value:"3"},{label:"Element 4",value:"4"},{label:"Element 5",value:"5"},{label:"Element 6",value:"6"}];return e`
      <dss-selector
        ariaLabel="Llista d'elements"
        disabled=${x.disabled}
        multiple=${x.multiple}
        tick=${x.tick}
        type=${x.tipus}
        deselectable=${x.desselectable}
        elements=${JSON.stringify(J)}
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
    `};var m,c,v;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(c=l.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var o,b,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" disabled></dss-selector>
      </div>
    \`;
  }
}`,...(i=(b=s.parameters)==null?void 0:b.docs)==null?void 0:i.source}}};var p,E,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" disabled></dss-selector>
      </div>
    \`;
  }
}`,...(g=(E=t.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var y,f,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var w,k,$;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...($=(k=n.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var h,T,_;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(T=r.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var D,P,M;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" deselectable></dss-selector>
      </div>
    \`;
  }
}`,...(M=(P=d.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var N,O,F;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(O=u.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const V=["Playground","Simple","Multiple","TypeDefault","NoTick","TypeGreen","Unselect","SelectedValue"],U=Object.freeze(Object.defineProperty({__proto__:null,Multiple:t,NoTick:n,Playground:l,SelectedValue:u,Simple:s,TypeDefault:a,TypeGreen:r,Unselect:d,__namedExportsOrder:V,default:L},Symbol.toStringTag,{value:"Module"}));export{t as M,n as N,l as P,U as S,a as T,d as U,s as a,r as b,u as c};
