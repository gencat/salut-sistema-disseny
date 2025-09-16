import{x as e}from"./lit-html-D6a8R3xZ.js";const i={title:"Components/Modal",argTypes:{open:{name:"Obert",control:{type:"boolean"}},hideCloseIcon:{name:"Amagar icona de tancar",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"}},type:{name:"Tipus",control:{type:"select"},options:["default","success","alert","error","info"]},hideFooter:{name:"Amagar footer",control:{type:"boolean"}},hasButtonAlternative:{name:"Botó alternatiu",control:{type:"boolean"},if:{arg:"hideFooter",eq:!1}},hasButtonSecondary:{name:"Botó secundari",control:{type:"boolean"},if:{arg:"hideFooter",eq:!1}},hasScroll:{name:"Simular scroll",control:{type:"boolean"}}},parameters:{layout:"centered"}},t={args:{open:!1,hideCloseIcon:!1,title:"Add Modal title here",type:"default",hideFooter:!1,hasButtonAlternative:!0,hasButtonSecondary:!0,hasScroll:!1},render:o=>{const l=e`
            <p>${"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
            <div class="dss-form-field" style="margin-top:16px">
                <dss-checkbox>
                    <input slot="input" id="checkbox1" type="checkbox">
                    <label slot="label" for="checkbox1">Label</label>
                </dss-checkbox>
            </div>
        `,s=e`
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <br/><br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         <br/><br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      `,d=e`
        ${o.hasButtonAlternative?e`<dss-button label="Button" size="md" variant="subtle"></dss-button>
                        `:""}
          ${o.hasButtonSecondary?e`<dss-button label="Button" size="md" variant="secondary"></dss-button>`:""}
          <dss-button label="Button" size="md" variant="primary"></dss-button>
      `;return e`
        ${o.hideFooter?e`
          ${o.type==="default"?e`
              <dss-modal modalTitle="${o.title}" ?open=${o.open} ?hideCloseIcon=${o.hideCloseIcon} ?hasScroll=${o.hasScroll}>
                <div slot="body">
                  ${o.hasScroll?s:l}
                </div>
              </dss-modal>
            `:e`
              <dss-modal modalTitle="${o.title}" ?open=${o.open} state="${o.type}" ?hideCloseIcon=${o.hideCloseIcon} ?hasScroll=${o.hasScroll}>
                <div slot="body">
                   ${o.hasScroll?s:l}
                </div>
              </dss-modal>
            `}
         `:e`
            ${o.type==="default"?e`
                <dss-modal modalTitle="${o.title}" ?open=${o.open} ?hideCloseIcon=${o.hideCloseIcon} ?hasScroll=${o.hasScroll}>
                  <div slot="body">
                    ${o.hasScroll?s:l}
                  </div>
                  <div class="dss-modal-footer" slot="footer">
                    ${d}
                  </div>
                </dss-modal>
              `:e`
                <dss-modal modalTitle="${o.title}" ?open=${o.open} state="${o.type}" ?hideCloseIcon=${o.hideCloseIcon} ?hasScroll=${o.hasScroll}>
                  <div slot="body">
                    ${o.hasScroll?s:l}
                  </div>
                  <div class="dss-modal-footer" slot="footer">
                    ${d}
                  </div>
                </dss-modal>
              `}
          `}
      `}};var a,n,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    open: false,
    hideCloseIcon: false,
    title: 'Add Modal title here',
    type: 'default',
    hideFooter: false,
    hasButtonAlternative: true,
    hasButtonSecondary: true,
    hasScroll: false
  },
  render: (args: any) => {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const modalBody = html\`
            <p>\${description}</p>
            <div class="dss-form-field" style="margin-top:16px">
                <dss-checkbox>
                    <input slot="input" id="checkbox1" type="checkbox">
                    <label slot="label" for="checkbox1">Label</label>
                </dss-checkbox>
            </div>
        \`;
    const modalBodyScroll = html\`
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <br/><br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         <br/><br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      \`;
    const modalFooter = html\`
        \${args.hasButtonAlternative ? html\`<dss-button label="Button" size="md" variant="subtle"></dss-button>
                        \` : ''}
          \${args.hasButtonSecondary ? html\`<dss-button label="Button" size="md" variant="secondary"></dss-button>\` : ''}
          <dss-button label="Button" size="md" variant="primary"></dss-button>
      \`;
    return html\`
        \${args.hideFooter ? html\`
          \${args.type === 'default' ? html\`
              <dss-modal modalTitle="\${args.title}" ?open=\${args.open} ?hideCloseIcon=\${args.hideCloseIcon} ?hasScroll=\${args.hasScroll}>
                <div slot="body">
                  \${args.hasScroll ? modalBodyScroll : modalBody}
                </div>
              </dss-modal>
            \` : html\`
              <dss-modal modalTitle="\${args.title}" ?open=\${args.open} state="\${args.type}" ?hideCloseIcon=\${args.hideCloseIcon} ?hasScroll=\${args.hasScroll}>
                <div slot="body">
                   \${args.hasScroll ? modalBodyScroll : modalBody}
                </div>
              </dss-modal>
            \`}
         \` : html\`
            \${args.type === 'default' ? html\`
                <dss-modal modalTitle="\${args.title}" ?open=\${args.open} ?hideCloseIcon=\${args.hideCloseIcon} ?hasScroll=\${args.hasScroll}>
                  <div slot="body">
                    \${args.hasScroll ? modalBodyScroll : modalBody}
                  </div>
                  <div class="dss-modal-footer" slot="footer">
                    \${modalFooter}
                  </div>
                </dss-modal>
              \` : html\`
                <dss-modal modalTitle="\${args.title}" ?open=\${args.open} state="\${args.type}" ?hideCloseIcon=\${args.hideCloseIcon} ?hasScroll=\${args.hasScroll}>
                  <div slot="body">
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
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const c=["Playground"],b=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{b as S};
