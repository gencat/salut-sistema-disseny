import{x as n}from"./lit-html-B2eaWknC.js";const _={title:"Discontinuat/Floating Button ⚠️",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},ifText:{name:"Amb text",control:{type:"boolean"}},text:{name:"Text",control:{type:"text"},if:{arg:"ifText"}}},parameters:{layout:"centered"}},s={render:t=>{const f=t.disabled?n`<button
          class="dss-floating-button dss-floating-button--${t.size}"
          disabled
        >
          <i class="dss-floating-button__icon material-symbols-rounded"
            >add_box</i
          >
          ${t.ifText?n`<span class="dss-floating-button__text">${t.text}</span>`:""}
        </button>`:n`<button
          class="dss-floating-button dss-floating-button--${t.size}"
        >
          <i class="dss-floating-button__icon material-symbols-rounded"
            >add_box</i
          >
          ${t.ifText?n`<span class="dss-floating-button__text">${t.text}</span>`:""}
        </button>`;return n`${f}`},args:{size:"md",disabled:!1,ifText:!1,text:"Floating Button"}},o={tags:["!dev"],render:()=>n`
      <div class="wrapper">
        <button class="dss-floating-button dss-floating-button--lg">
          <i class="dss-floating-button__icon material-symbols-rounded">add\_box</i>
        </button>

        <button class="dss-floating-button dss-floating-button--md">
          <i class="dss-floating-button__icon material-symbols-rounded">add\_box</i>
        </button>

        <button class="dss-floating-button dss-floating-button--sm">
          <i class="dss-floating-button__icon material-symbols-rounded">add\_box</i>
        </button>
      </div>
    `},a={tags:["!dev"],render:()=>n`
      <div class="wrapper">
        <button class="dss-floating-button dss-floating-button--lg">
          <i class="dss-floating-button__icon material-symbols-rounded">add\_box</i>
          <span class="dss-floating-button__text">Floating Button</span>
        </button>

        <button class="dss-floating-button dss-floating-button--md">
          <i class="dss-floating-button__icon material-symbols-rounded">add\_box</i>
          <span class="dss-floating-button__text">Floating Button</span>
        </button>

        <button class="dss-floating-button dss-floating-button--sm">
          <i class="dss-floating-button__icon material-symbols-rounded">add\_box</i>
          <span class="dss-floating-button__text">Floating Button</span>
        </button>
      </div>
    `};var l,i,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => {
    const button = args.disabled ? html\`<button
          class="dss-floating-button dss-floating-button--\${args.size}"
          disabled
        >
          <i class="dss-floating-button__icon material-symbols-rounded"
            >add_box</i
          >
          \${args.ifText ? html\`<span class="dss-floating-button__text">\${args.text}</span>\` : ''}
        </button>\` : html\`<button
          class="dss-floating-button dss-floating-button--\${args.size}"
        >
          <i class="dss-floating-button__icon material-symbols-rounded"
            >add_box</i
          >
          \${args.ifText ? html\`<span class="dss-floating-button__text">\${args.text}</span>\` : ''}
        </button>\`;
    return html\`\${button}\`;
  },
  args: {
    size: 'md',
    disabled: false,
    ifText: false,
    text: 'Floating Button'
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var e,u,b;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <button class="dss-floating-button dss-floating-button--lg">
          <i class="dss-floating-button__icon material-symbols-rounded">add\\_box</i>
        </button>

        <button class="dss-floating-button dss-floating-button--md">
          <i class="dss-floating-button__icon material-symbols-rounded">add\\_box</i>
        </button>

        <button class="dss-floating-button dss-floating-button--sm">
          <i class="dss-floating-button__icon material-symbols-rounded">add\\_box</i>
        </button>
      </div>
    \`;
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var r,c,g;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <button class="dss-floating-button dss-floating-button--lg">
          <i class="dss-floating-button__icon material-symbols-rounded">add\\_box</i>
          <span class="dss-floating-button__text">Floating Button</span>
        </button>

        <button class="dss-floating-button dss-floating-button--md">
          <i class="dss-floating-button__icon material-symbols-rounded">add\\_box</i>
          <span class="dss-floating-button__text">Floating Button</span>
        </button>

        <button class="dss-floating-button dss-floating-button--sm">
          <i class="dss-floating-button__icon material-symbols-rounded">add\\_box</i>
          <span class="dss-floating-button__text">Floating Button</span>
        </button>
      </div>
    \`;
  }
}`,...(g=(c=a.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const m=["Playground","OnlyIcon","IconText"],x=Object.freeze(Object.defineProperty({__proto__:null,IconText:a,OnlyIcon:o,Playground:s,__namedExportsOrder:m,default:_},Symbol.toStringTag,{value:"Module"}));export{a as I,o as O,s as P,x as S};
