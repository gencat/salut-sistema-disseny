import{x as r}from"./lit-html-CeYizTxc.js";const b={title:"Components/Drawer",argTypes:{open:{name:"Obert",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"}},contentScroll:{name:"Contingut amb scroll",control:{type:"boolean"}},hasButtonAlternative:{name:"Botó alternatiu",control:{type:"boolean"}},hasButtonSecondary:{name:"Botó secundari",control:{type:"boolean"}},description:{name:"Descripció",control:{type:"text"}},size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},variant:{name:"Variant",control:{type:"radio"},options:["default","filter"]}},parameters:{layout:"centered"}},n={args:{open:!1,title:"Drawer title",size:"md",variant:"default",contentScroll:!1,hasButtonAlternative:!0,hasButtonSecondary:!0,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore."},render:t=>{const a=r`
        <p>${t.description}</p>
      `,i=r`
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p><br/><br/><br/><br/>
        <p>${t.description}</p>
      `,d=r`
        ${t.hasButtonAlternative?r`<button
              type="button"
              class="dss-button dss-button--lg dss-button--subtle"
            >
              Button
            </button>`:""}
          ${t.hasButtonSecondary?r`<button
              type="button"
              class="dss-button dss-button--lg dss-button--secondary"
            >
              Button
            </button>`:""}
          <button class="dss-button dss-button--primary dss-button--lg">Button</button>
      `;return r`
        <dss-drawer title="${t.title}" ?open=${t.open} size="${t.size}" variant="${t.variant}">
          <div slot="drawer-body">
            ${t.contentScroll?i:a}
          </div>
          <div slot="drawer-footer">
            ${d}
          </div>
        </dss-drawer>
      `}};var o,e,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    open: false,
    title: 'Drawer title',
    size: 'md',
    variant: 'default',
    contentScroll: false,
    hasButtonAlternative: true,
    hasButtonSecondary: true,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.'
  },
  render: (args: any) => {
    const drawerBody = html\`
        <p>\${args.description}</p>
      \`;
    const drawerBodyScroll = html\`
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p><br/><br/><br/><br/>
        <p>\${args.description}</p>
      \`;
    const drawerFooter = html\`
        \${args.hasButtonAlternative ? html\`<button
              type="button"
              class="dss-button dss-button--lg dss-button--subtle"
            >
              Button
            </button>\` : ''}
          \${args.hasButtonSecondary ? html\`<button
              type="button"
              class="dss-button dss-button--lg dss-button--secondary"
            >
              Button
            </button>\` : ''}
          <button class="dss-button dss-button--primary dss-button--lg">Button</button>
      \`;
    return html\`
        <dss-drawer title="\${args.title}" ?open=\${args.open} size="\${args.size}" variant="\${args.variant}">
          <div slot="drawer-body">
            \${args.contentScroll ? drawerBodyScroll : drawerBody}
          </div>
          <div slot="drawer-footer">
            \${drawerFooter}
          </div>
        </dss-drawer>
      \`;
  }
}`,...(s=(e=n.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const l=["Playground"],c=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:l,default:b},Symbol.toStringTag,{value:"Module"}));export{n as P,c as S};
