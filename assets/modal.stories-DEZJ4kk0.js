import{x as t}from"./lit-html-D6cejpwM.js";const c={title:"Components/Modal",argTypes:{open:{name:"Obert",control:{type:"boolean"}},hideCloseIcon:{name:"Amagar icona de tancar",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"}},type:{name:"Tipus",control:{type:"select"},options:["default","warning","danger"]},hideFooter:{name:"Amagar footer",control:{type:"boolean"}},hasButtonAlternative:{name:"Botó alternatiu",control:{type:"boolean"},if:{arg:"hideFooter",eq:!1}},hasButtonSecondary:{name:"Botó secundari",control:{type:"boolean"},if:{arg:"hideFooter",eq:!1}},hasScroll:{name:"Simular scroll",control:{type:"boolean"}}},parameters:{layout:"centered"}},e={args:{open:!1,hideCloseIcon:!1,title:"Títol de la modal",type:"default",hideFooter:!1,hasButtonAlternative:!0,hasButtonSecondary:!0,hasScroll:!1},render:o=>{const l="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",n=t`
            <dss-typography tag="p" variant="body-2" fontweight="regular">${l}</dss-typography>
        `,a=t`
            <dss-typography tag="p" variant="body-2" fontweight="regular">${l}</dss-typography>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>

            <dss-typography tag="p" variant="body-2" fontweight="regular">${l}</dss-typography>
            <br/><br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>

            <dss-typography tag="p" variant="body-2" fontweight="regular">${l}</dss-typography>
    `,s=t`
        ${o.hasButtonAlternative?t`<dss-button label="Button" size="md" variant="subtle"></dss-button>
                        `:""}
        ${o.hasButtonSecondary?t`<dss-button label="Button" size="md" variant="secondary"></dss-button>`:""}

                ${o.type==="warning"?t`<dss-button label="Button" size="md" variant="warning"></dss-button>`:o.type==="error"||o.type==="danger"?t`<dss-button label="Button" size="md" variant="error"></dss-button>`:t`<dss-button label="Button" size="md"></dss-button>`}
      `;return t`
        ${o.hideFooter?t`
          ${o.type==="default"?t`
              <dss-modal modalTitle="${o.title}" ?open=${o.open} ?hideCloseIcon=${o.hideCloseIcon} ?hasScroll=${o.hasScroll}>
                <div slot="body" style="text-align: center;">
                  ${o.hasScroll?a:n}
                </div>
              </dss-modal>
            `:t`
              <dss-modal modalTitle="${o.title}" ?open=${o.open} state="${o.type}" ?hideCloseIcon=${o.hideCloseIcon} ?hasScroll=${o.hasScroll}>
                <div slot="body" style="text-align: center;">
                   ${o.hasScroll?a:n}
                </div>
              </dss-modal>
            `}
         `:t`
            ${o.type==="default"?t`
                <dss-modal modalTitle="${o.title}" ?open=${o.open} ?hideCloseIcon=${o.hideCloseIcon} ?hasScroll=${o.hasScroll}>
                  <div slot="body" style="text-align: center;">
                    ${o.hasScroll?a:n}
                  </div>
                  <div class="dss-modal-footer" slot="footer">
                    ${s}
                  </div>
                </dss-modal>
              `:t`
                <dss-modal modalTitle="${o.title}" ?open=${o.open} state="${o.type}" ?hideCloseIcon=${o.hideCloseIcon} ?hasScroll=${o.hasScroll}>
                  <div slot="body" style="text-align: center;">
                    ${o.hasScroll?a:n}
                  </div>
                  <div class="dss-modal-footer" slot="footer">
                    ${s}
                  </div>
                </dss-modal>
              `}
          `}
      `}};var r,d,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    open: false,
    hideCloseIcon: false,
    title: 'Títol de la modal',
    type: 'default',
    hideFooter: false,
    hasButtonAlternative: true,
    hasButtonSecondary: true,
    hasScroll: false
  },
  render: (args: any) => {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const modalBody = html\`
            <dss-typography tag="p" variant="body-2" fontweight="regular">\${description}</dss-typography>
        \`;
    const modalBodyScroll = html\`
            <dss-typography tag="p" variant="body-2" fontweight="regular">\${description}</dss-typography>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>

            <dss-typography tag="p" variant="body-2" fontweight="regular">\${description}</dss-typography>
            <br/><br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>

            <dss-typography tag="p" variant="body-2" fontweight="regular">\${description}</dss-typography>
    \`;
    const modalFooter = html\`
        \${args.hasButtonAlternative ? html\`<dss-button label="Button" size="md" variant="subtle"></dss-button>
                        \` : ''}
        \${args.hasButtonSecondary ? html\`<dss-button label="Button" size="md" variant="secondary"></dss-button>\` : ''}

                \${args.type === 'warning' ? html\`<dss-button label="Button" size="md" variant="warning"></dss-button>\` : args.type === 'error' || args.type === 'danger' ? html\`<dss-button label="Button" size="md" variant="error"></dss-button>\` : html\`<dss-button label="Button" size="md"></dss-button>\`}
      \`;
    return html\`
        \${args.hideFooter ? html\`
          \${args.type === 'default' ? html\`
              <dss-modal modalTitle="\${args.title}" ?open=\${args.open} ?hideCloseIcon=\${args.hideCloseIcon} ?hasScroll=\${args.hasScroll}>
                <div slot="body" style="text-align: center;">
                  \${args.hasScroll ? modalBodyScroll : modalBody}
                </div>
              </dss-modal>
            \` : html\`
              <dss-modal modalTitle="\${args.title}" ?open=\${args.open} state="\${args.type}" ?hideCloseIcon=\${args.hideCloseIcon} ?hasScroll=\${args.hasScroll}>
                <div slot="body" style="text-align: center;">
                   \${args.hasScroll ? modalBodyScroll : modalBody}
                </div>
              </dss-modal>
            \`}
         \` : html\`
            \${args.type === 'default' ? html\`
                <dss-modal modalTitle="\${args.title}" ?open=\${args.open} ?hideCloseIcon=\${args.hideCloseIcon} ?hasScroll=\${args.hasScroll}>
                  <div slot="body" style="text-align: center;">
                    \${args.hasScroll ? modalBodyScroll : modalBody}
                  </div>
                  <div class="dss-modal-footer" slot="footer">
                    \${modalFooter}
                  </div>
                </dss-modal>
              \` : html\`
                <dss-modal modalTitle="\${args.title}" ?open=\${args.open} state="\${args.type}" ?hideCloseIcon=\${args.hideCloseIcon} ?hasScroll=\${args.hasScroll}>
                  <div slot="body" style="text-align: center;">
                    \${args.hasScroll ? modalBodyScroll : modalBody}
                  </div>
                  <div class="dss-modal-footer" slot="footer">
                    \${modalFooter}
                  </div>
                </dss-modal>
              \`}
          \`}
      \`;
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const b=["Playground"],y=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:b,default:c},Symbol.toStringTag,{value:"Module"}));export{y as S};
