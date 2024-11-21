import"./lit-element-vV9fql9z.js";import{x as e}from"./lit-html-paDGiEfB.js";const U={title:"Components/Selector",argTypes:{multiple:{name:"Múltiple",control:{type:"boolean"}},tick:{name:"Tick",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},tipus:{name:"Tipus",control:{type:"select"},options:["default","green"]},desselectable:{name:"Desseleccionable",control:{type:"boolean"},if:{arg:"multiple",truthy:!1}}},parameters:{layout:"centered"}},l={render:x=>{const V=[{label:"Element 1",value:"1"},{label:"Element 2",value:"2"},{label:"Element 3",value:"3"},{label:"Element 4",value:"4"},{label:"Element 5",value:"5"},{label:"Element 6",value:"6"}];return e`
      <dss-selector
        ariaLabel="Llista d'elements"
        disabled=${x.disabled}
        multiple=${x.multiple}
        tick=${x.tick}
        type=${x.tipus}
        deselectable=${x.desselectable}
        elements=${JSON.stringify(V)}
        selectedValue=${"2"}
      ></dss-selector>
    `},args:{multiple:!1,tick:!0,disabled:!1,tipus:"default",desselectable:!1}},s={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" disabled></dss-selector>
      </div>
    `},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" disabled></dss-selector>
      </div>
    `},t={tags:["!dev"],render:()=>e`
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
}`,...(i=(b=s.parameters)==null?void 0:b.docs)==null?void 0:i.source}}};var E,p,g;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" multiple selectedvalue="[1, 3]" disabled></dss-selector>
      </div>
    \`;
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,f,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var k,w,$;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...($=(w=n.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var h,T,_;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(T=r.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var M,N,O;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2"></dss-selector>
        <dss-selector elements="[{&#x22;label&#x22;:&#x22;Element 1&#x22;,&#x22;value&#x22;:&#x22;1&#x22;},{&#x22;label&#x22;:&#x22;Element 2&#x22;,&#x22;value&#x22;:&#x22;2&#x22;},{&#x22;label&#x22;:&#x22;Element 3&#x22;,&#x22;value&#x22;:&#x22;3&#x22;}]" selectedvalue="2" deselectable></dss-selector>
      </div>
    \`;
  }
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var D,L,P;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(L=u.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const j=["Playground","Simple","Multiple","TypeDefault","NoTick","TypeGreen","Unselect","SelectedValue"],z=Object.freeze(Object.defineProperty({__proto__:null,Multiple:a,NoTick:n,Playground:l,SelectedValue:u,Simple:s,TypeDefault:t,TypeGreen:r,Unselect:d,__namedExportsOrder:j,default:U},Symbol.toStringTag,{value:"Module"}));export{a as M,n as N,l as P,z as S,t as T,d as U,s as a,r as b,u as c};
