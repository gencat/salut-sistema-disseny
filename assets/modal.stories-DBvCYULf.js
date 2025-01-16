import{x as e}from"./lit-html-B2eaWknC.js";const i={title:"Components/Modal",argTypes:{open:{name:"Obert",control:{type:"boolean"}},size:{name:"Mida",control:{type:"radio"},options:["sm","lg"]},hideCloseIcon:{name:"Amagar icona de tancar",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"}},type:{name:"Tipus",control:{type:"select"},options:["default","success","alert","error","info"]},hasButtonAlternative:{name:"Botó alternatiu",control:{type:"boolean"}},hasButtonSecondary:{name:"Botó secundari",control:{type:"boolean"}},description:{name:"Descripció",control:{type:"text"}},hasCheckbox:{name:"Amb checkbox",control:{type:"boolean"}},hasDivider:{name:"Amb divider",control:{type:"boolean"}},label:{name:"Text del checkbox",control:{type:"text"},if:{arg:"hasCheckbox"}},hideFooter:{name:"Amagar footer",control:{type:"boolean"}},hasScroll:{name:"Simular scroll",control:{type:"boolean"}}},parameters:{layout:"centered"}},l={args:{size:"lg",open:!1,hideCloseIcon:!1,title:"Add Modal title here",type:"default",hasDivider:!0,hasButtonAlternative:!0,hasButtonSecondary:!0,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",hasCheckbox:!0,label:"Checkbox label",hideFooter:!1,hasScroll:!1},render:o=>{const t=e`
        <p>${o.description}</p>
        ${o.hasCheckbox?e`<div class="dss-form-field" style="margin-top:16px">
            <input type="checkbox" id="checkbox" class="dss-checkbox" />
            <label>${o.label}</label>
          </div>`:""}
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
      `,n=e`
        ${o.hasButtonAlternative?e`<button
              type="button"
              class="dss-button dss-button--lg dss-button--subtle"
            >
              Button
            </button>`:""}
          ${o.hasButtonSecondary?e`<button
              type="button"
              class="dss-button dss-button--lg dss-button--secondary"
            >
              Button
            </button>`:""}
          <button class="dss-button dss-button--primary dss-button--lg">Button</button>
      `;return e`
        ${o.hideFooter?e`
          ${o.type==="default"?e`
              <dss-modal size="${o.size}" modalTitle="${o.title}" ?open=${o.open} ?hasDivider=${o.hasDivider} ?hideCloseIcon=${o.hideCloseIcon} ?hasScroll=${o.hasScroll}>
                <div slot="body">
                  ${o.hasScroll?s:t}
                  ${o.hasScroll?s:t}
                </div>
              </dss-modal>
            `:e`
              <dss-modal size="${o.size}" modalTitle="${o.title}" ?open=${o.open} ?hasDivider=${o.hasDivider} state="${o.type}" ?hideCloseIcon=${o.hideCloseIcon} ?hasScroll=${o.hasScroll}>
                <div slot="body">
                   ${o.hasScroll?s:t}
                </div>
              </dss-modal>
            `}
         `:e`
            ${o.type==="default"?e`
                <dss-modal size="${o.size}" modalTitle="${o.title}" ?open=${o.open} ?hasDivider=${o.hasDivider} ?hideCloseIcon=${o.hideCloseIcon} ?hasScroll=${o.hasScroll}>
                  <div slot="body">
                    ${o.hasScroll?s:t}
                  </div>
                  <div class="dss-modal-footer" slot="footer">
                    ${n}
                  </div>
                </dss-modal>
              `:e`
                <dss-modal size="${o.size}" modalTitle="${o.title}" ?open=${o.open} ?hasDivider=${o.hasDivider} state="${o.type}" ?hideCloseIcon=${o.hideCloseIcon} ?hasScroll=${o.hasScroll}>
                  <div slot="body">
                    ${o.hasScroll?s:t}
                  </div>
                  <div class="dss-modal-footer" slot="footer">
                    ${n}
                  </div>
                </dss-modal>
              `}
          `}
      `}};var a,d,r;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    open: false,
    hideCloseIcon: false,
    title: 'Add Modal title here',
    type: 'default',
    hasDivider: true,
    hasButtonAlternative: true,
    hasButtonSecondary: true,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
    hasCheckbox: true,
    label: 'Checkbox label',
    hideFooter: false,
    hasScroll: false
  },
  render: (args: any) => {
    const modalBody = html\`
        <p>\${args.description}</p>
        \${args.hasCheckbox ? html\`<div class="dss-form-field" style="margin-top:16px">
            <input type="checkbox" id="checkbox" class="dss-checkbox" />
            <label>\${args.label}</label>
          </div>\` : ''}
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
        \${args.hideFooter ? html\`
          \${args.type === 'default' ? html\`
              <dss-modal size="\${args.size}" modalTitle="\${args.title}" ?open=\${args.open} ?hasDivider=\${args.hasDivider} ?hideCloseIcon=\${args.hideCloseIcon} ?hasScroll=\${args.hasScroll}>
                <div slot="body">
                  \${args.hasScroll ? modalBodyScroll : modalBody}
                  \${args.hasScroll ? modalBodyScroll : modalBody}
                </div>
              </dss-modal>
            \` : html\`
              <dss-modal size="\${args.size}" modalTitle="\${args.title}" ?open=\${args.open} ?hasDivider=\${args.hasDivider} state="\${args.type}" ?hideCloseIcon=\${args.hideCloseIcon} ?hasScroll=\${args.hasScroll}>
                <div slot="body">
                   \${args.hasScroll ? modalBodyScroll : modalBody}
                </div>
              </dss-modal>
            \`}
         \` : html\`
            \${args.type === 'default' ? html\`
                <dss-modal size="\${args.size}" modalTitle="\${args.title}" ?open=\${args.open} ?hasDivider=\${args.hasDivider} ?hideCloseIcon=\${args.hideCloseIcon} ?hasScroll=\${args.hasScroll}>
                  <div slot="body">
                    \${args.hasScroll ? modalBodyScroll : modalBody}
                  </div>
                  <div class="dss-modal-footer" slot="footer">
                    \${modalFooter}
                  </div>
                </dss-modal>
              \` : html\`
                <dss-modal size="\${args.size}" modalTitle="\${args.title}" ?open=\${args.open} ?hasDivider=\${args.hasDivider} state="\${args.type}" ?hideCloseIcon=\${args.hideCloseIcon} ?hasScroll=\${args.hasScroll}>
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
}`,...(r=(d=l.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const c=["Playground"],m=Object.freeze(Object.defineProperty({__proto__:null,Playground:l,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{l as P,m as S};
