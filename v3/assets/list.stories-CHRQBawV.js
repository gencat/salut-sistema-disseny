import{x as e}from"./iframe-CdZ_4rdx.js";const n={title:"Components/List",argTypes:{label:{name:"Text"},items:{name:"Quantitat de elements",control:{type:"select"},options:[1,2,3,4,5]},type:{name:"Tipus",control:{type:"select"},options:["unstyled","ordered","unordered"]}},parameters:{layout:"centered"}},s={render:d=>{const a=d.type!=="unstyled"?` dss-list--${d.type}`:"";return e`
      <ol class="dss-list${a}">
        ${Array.from({length:d.items},()=>e`<li class="dss-list__item">${d.label}</li>`)}
      </ol>
    `},args:{label:"List item text.",items:1,type:"unstyled"}},t={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <ol class="dss-list">
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>
      </div>
    `},i={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <ol class="dss-list dss-list--ordered">
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list dss-list--ordered">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list dss-list--ordered">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list dss-list--ordered">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>
      </div>
    `},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <ol class="dss-list dss-list--unordered">
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list dss-list--unordered">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list dss-list--unordered">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list dss-list--unordered">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>
      </div>
    `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const cssClass = args.type !== 'unstyled' ? \` dss-list--\${args.type}\` : '';
    return html\`
      <ol class="dss-list\${cssClass}">
        \${Array.from({
      length: args.items
    }, () => html\`<li class="dss-list__item">\${args.label}</li>\`)}
      </ol>
    \`;
  },
  args: {
    label: 'List item text.',
    items: 1,
    type: 'unstyled'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <ol class="dss-list">
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>
      </div>
    \`;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <ol class="dss-list dss-list--ordered">
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list dss-list--ordered">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list dss-list--ordered">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list dss-list--ordered">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>
      </div>
    \`;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <ol class="dss-list dss-list--unordered">
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list dss-list--unordered">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list dss-list--unordered">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>

        <ol class="dss-list dss-list--unordered">
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
          <li class="dss-list__item">List item text.</li>
        </ol>
      </div>
    \`;
  }
}`,...l.parameters?.docs?.source}}};const r=["Playground","NoStyle","Order","Unorder"],o=Object.freeze(Object.defineProperty({__proto__:null,NoStyle:t,Order:i,Playground:s,Unorder:l,__namedExportsOrder:r,default:n},Symbol.toStringTag,{value:"Module"}));export{t as N,i as O,s as P,o as S,l as U};
