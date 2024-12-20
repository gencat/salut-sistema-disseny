import"./lit-element-DhY7bShc.js";import{x as e}from"./lit-html-B2eaWknC.js";const v={title:"Components/List",argTypes:{label:{name:"Text"},items:{name:"Quantitat de elements",control:{type:"select"},options:[1,2,3,4,5]},type:{name:"Tipus",control:{type:"select"},options:["unstyled","ordered","unordered"]}},parameters:{layout:"centered"}},s={render:d=>{const g=d.type!=="unstyled"?` dss-list--${d.type}`:"";return e`
      <ol class="dss-list${g}">
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
    `};var a,n,r;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(n=s.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var m,o,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var _,x,L;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=(x=i.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var p,u,y;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(y=(u=l.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const S=["Playground","NoStyle","Order","Unorder"],h=Object.freeze(Object.defineProperty({__proto__:null,NoStyle:t,Order:i,Playground:s,Unorder:l,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{t as N,i as O,s as P,h as S,l as U};
