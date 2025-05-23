import{x as e}from"./lit-html-D6a8R3xZ.js";const j={title:"Components/Textarea",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["Mitjá","Petit"]},label:{name:"Label"},clearable:{name:"Accionable",control:{type:"boolean"}},icon:{name:"Mostrar icona",control:{type:"boolean"}},showError:{name:"Mostrar error",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}}},parameters:{layout:"centered"}},t={render:a=>a.required?e`
        ${a.showMaxLength?e`
              <dss-textarea ?showError=${a.showError}>
                <label for="textarea-story" slot="label">${a.label}</label>
                <textarea
                  id="textarea-story"
                  slot="textarea"
                  rows="1"
                  required
                  maxlength="60"
                ></textarea>
                ${a.showDescription?e`<span slot="description">${a.description}</span>`:e``}
              </dss-textarea>
            `:e`
              <dss-textarea ?showError=${a.showError}>
                <label for="textarea-story" slot="label">${a.label}</label>
                <textarea id="textarea-story" slot="textarea" rows="1" required></textarea>
                ${a.showDescription?e`<span slot="description">${a.description}</span>`:e``}
              </dss-textarea>
            `}
      `:e`
      ${a.showMaxLength?e`
            <dss-textarea ?showError=${a.showError}>
              <label for="textarea-story" slot="label">${a.label}</label>
              <textarea id="textarea-story" slot="textarea" rows="1" maxlength="60"></textarea>
              ${a.showDescription?e`<span slot="description">${a.description}</span>`:e``}
            </dss-textarea>
          `:e`
            <dss-textarea ?showError=${a.showError}>
              <label for="textarea-story" slot="label">${a.label}</label>
              <textarea id="textarea-story" slot="textarea" rows="1"></textarea>
              ${a.showDescription?e`<span slot="description">${a.description}</span>`:e``}
            </dss-textarea>
          `}
    `,args:{label:"Label",required:!1,showDescription:!1,description:"Help Text",showMaxLength:!1},argTypes:{size:{table:{disable:!0}},icon:{table:{disable:!0}},clearable:{table:{disable:!0}}}},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
      </div>
    `},s={tags:["!dev"],render:()=>e`
      <div class="wrapper">
      <dss-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" value="Value" disabled></textarea>
      </dss-textarea>
      <dss-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" disabled placeholder="Placeholder" ></textarea>
      </dss-textarea>
      <dss-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" disabled >Value text</textarea>
      </dss-textarea>
      </div>
    `},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
      <dss-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" value="Value" readOnly></textarea>
      </dss-textarea>
      <dss-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" readOnly placeholder="Placeholder"></textarea>
      </dss-textarea>
      <dss-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" readOnly>Text value</textarea>
      </dss-textarea>
      </div>
    `},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" value="Value" required></textarea>
        </dss-textarea>
        <dss-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" required placeholder="Placeholder"></textarea>
        </dss-textarea>
        <dss-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" required>Value text</textarea>
        </dss-textarea>
      </div>
    `},n={tags:["!dev"],render:()=>e`
      <div class="wrapper">
      <dss-textarea>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" value="Value" required ></textarea>
  </dss-textarea>

  <dss-textarea showError>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" required ></textarea>
  </dss-textarea> 
      </div>
    `},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
      <dss-textarea>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" ></textarea>

    <span slot="description">Descripció</span>
  </dss-textarea>

  <dss-textarea showError>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" required ></textarea>

    <span slot="description">Descripció</span>
  </dss-textarea>
      </div>
    `},x={tags:["!dev"],render:()=>e`
      <div class="wrapper">
      <dss-textarea>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" ></textarea>
  </dss-textarea>

  <dss-textarea showError>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" required ></textarea>
  </dss-textarea>

  <dss-textarea>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" ></textarea>

    <span slot="description">Descripció</span>
  </dss-textarea>

  <dss-textarea showError>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" required ></textarea>

    <span slot="description">Descripció</span>
  </dss-textarea>
      </div>
    `},i={tags:["!dev"],render:()=>e`
      <div class="wrapper">
      <dss-textarea>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" ></textarea>
  </dss-textarea>

  <dss-textarea showError>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" required ></textarea>
  </dss-textarea>

  <dss-textarea>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" ></textarea>

    <span slot="description">Descripció</span>
  </dss-textarea>

  <dss-textarea showError>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" required ></textarea>

    <span slot="description">Descripció</span>
  </dss-textarea>
      </div>
    `};var b,c,p;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: any) => {
    if (args.required) {
      return html\`
        \${args.showMaxLength ? html\`
              <dss-textarea ?showError=\${args.showError}>
                <label for="textarea-story" slot="label">\${args.label}</label>
                <textarea
                  id="textarea-story"
                  slot="textarea"
                  rows="1"
                  required
                  maxlength="60"
                ></textarea>
                \${args.showDescription ? html\`<span slot="description">\${args.description}</span>\` : html\`\`}
              </dss-textarea>
            \` : html\`
              <dss-textarea ?showError=\${args.showError}>
                <label for="textarea-story" slot="label">\${args.label}</label>
                <textarea id="textarea-story" slot="textarea" rows="1" required></textarea>
                \${args.showDescription ? html\`<span slot="description">\${args.description}</span>\` : html\`\`}
              </dss-textarea>
            \`}
      \`;
    }
    return html\`
      \${args.showMaxLength ? html\`
            <dss-textarea ?showError=\${args.showError}>
              <label for="textarea-story" slot="label">\${args.label}</label>
              <textarea id="textarea-story" slot="textarea" rows="1" maxlength="60"></textarea>
              \${args.showDescription ? html\`<span slot="description">\${args.description}</span>\` : html\`\`}
            </dss-textarea>
          \` : html\`
            <dss-textarea ?showError=\${args.showError}>
              <label for="textarea-story" slot="label">\${args.label}</label>
              <textarea id="textarea-story" slot="textarea" rows="1"></textarea>
              \${args.showDescription ? html\`<span slot="description">\${args.description}</span>\` : html\`\`}
            </dss-textarea>
          \`}
    \`;
  },
  args: {
    label: 'Label',
    required: false,
    showDescription: false,
    description: 'Help Text',
    showMaxLength: false
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    clearable: {
      table: {
        disable: true
      }
    }
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,u,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
      </div>
    \`;
  }
}`,...(w=(u=r.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var m,g,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
      <dss-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" value="Value" disabled></textarea>
      </dss-textarea>
      <dss-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" disabled placeholder="Placeholder" ></textarea>
      </dss-textarea>
      <dss-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" disabled >Value text</textarea>
      </dss-textarea>
      </div>
    \`;
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var L,y,$;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
      <dss-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" value="Value" readOnly></textarea>
      </dss-textarea>
      <dss-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" readOnly placeholder="Placeholder"></textarea>
      </dss-textarea>
      <dss-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" readOnly>Text value</textarea>
      </dss-textarea>
      </div>
    \`;
  }
}`,...($=(y=l.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var q,D,E;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" value="Value" required></textarea>
        </dss-textarea>
        <dss-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" required placeholder="Placeholder"></textarea>
        </dss-textarea>
        <dss-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" required>Value text</textarea>
        </dss-textarea>
      </div>
    \`;
  }
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var f,P,M;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
      <dss-textarea>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" value="Value" required ></textarea>
  </dss-textarea>

  <dss-textarea showError>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" required ></textarea>
  </dss-textarea> 
      </div>
    \`;
  }
}`,...(M=(P=n.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var S,V,O;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
      <dss-textarea>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" ></textarea>

    <span slot="description">Descripció</span>
  </dss-textarea>

  <dss-textarea showError>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" required ></textarea>

    <span slot="description">Descripció</span>
  </dss-textarea>
      </div>
    \`;
  }
}`,...(O=(V=d.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var H,T,_;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
      <dss-textarea>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" ></textarea>
  </dss-textarea>

  <dss-textarea showError>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" required ></textarea>
  </dss-textarea>

  <dss-textarea>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" ></textarea>

    <span slot="description">Descripció</span>
  </dss-textarea>

  <dss-textarea showError>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" required ></textarea>

    <span slot="description">Descripció</span>
  </dss-textarea>
      </div>
    \`;
  }
}`,...(_=(T=x.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var z,C,R;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
      <dss-textarea>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" ></textarea>
  </dss-textarea>

  <dss-textarea showError>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" required ></textarea>
  </dss-textarea>

  <dss-textarea>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" ></textarea>

    <span slot="description">Descripció</span>
  </dss-textarea>

  <dss-textarea showError>
    <label slot="label">Label</label>

    <textarea slot="textarea" rows="1" maxlength="60" required ></textarea>

    <span slot="description">Descripció</span>
  </dss-textarea>
      </div>
    \`;
  }
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const I=["Playground","Size","Disabled","ReadOnly","Required","Invalid","Description","Placeholder","Counter"],k=Object.freeze(Object.defineProperty({__proto__:null,Counter:i,Description:d,Disabled:s,Invalid:n,Placeholder:x,Playground:t,ReadOnly:l,Required:o,Size:r,__namedExportsOrder:I,default:j},Symbol.toStringTag,{value:"Module"}));export{i as C,s as D,n as I,t as P,l as R,k as S,r as a,o as b,d as c,x as d};
