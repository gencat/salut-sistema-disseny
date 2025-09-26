import{x as a}from"./lit-html-D6a8R3xZ.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const r=`
  .wrapper { display: flex; gap: 24px; }
  dss-textarea { width: 200px; }
`,G={title:"Components/Textarea",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["lg","md","sm"]},label:{name:"Label"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon"}},showError:{name:"Mostrar error",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}}},parameters:{layout:"centered"}},s={render:e=>e.required?a`
        ${e.showMaxLength?a`
              <dss-textarea size=${e.size} ?showError=${e.showError} icon=${e.showIcon?e.icon:void 0}>
                <label for="textarea-story" slot="label">${e.label}</label>
                <textarea
                  id="textarea-story"
                  slot="textarea"
                  rows="1"
                  required
                  maxlength="60"
                ></textarea>
                ${e.showDescription?a`<span slot="description">${e.description}</span>`:a``}
              </dss-textarea>
            `:a`
              <dss-textarea size=${e.size} ?showError=${e.showError} icon=${e.showIcon?e.icon:void 0}>
                <label for="textarea-story" slot="label">${e.label}</label>
                <textarea id="textarea-story" slot="textarea" rows="1" required></textarea>
                ${e.showDescription?a`<span slot="description">${e.description}</span>`:a``}
              </dss-textarea>
            `}
      `:a`
      ${e.showMaxLength?a`
            <dss-textarea size=${e.size} ?showError=${e.showError} icon=${e.showIcon?e.icon:void 0} >
              <label for="textarea-story" slot="label">${e.label}</label>
              <textarea id="textarea-story" slot="textarea" rows="1" maxlength="60"></textarea>
              ${e.showDescription?a`<span slot="description">${e.description}</span>`:a``}
            </dss-textarea>
          `:a`
            <dss-textarea size=${e.size} ?showError=${e.showError} icon=${e.showIcon?e.icon:void 0}>
              <label for="textarea-story" slot="label">${e.label}</label>
              <textarea id="textarea-story" slot="textarea" rows="1"></textarea>
              ${e.showDescription?a`<span slot="description">${e.description}</span>`:a``}
            </dss-textarea>
          `}
    `,args:{size:"lg",label:"Label",required:!1,showDescription:!1,description:"Help Text",showMaxLength:!1,showIcon:!1,icon:"add_box",showError:!1}},l={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-textarea>
          <label slot="label">Size lg</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
        <dss-textarea size="md">
          <label slot="label">Size md</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
        <dss-textarea size="sm">
          <label slot="label">Size sm</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
      </div>
    `,decorators:[t(r,"textarea-size-style")]},o={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-textarea icon="add_box">
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
        <dss-textarea size="md" icon="add_box">
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
        <dss-textarea size="sm" icon="add_box">
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
      </div>
    `,decorators:[t(r,"textarea-icon-style")]},d={tags:["!dev"],render:()=>a`
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
    `,decorators:[t(r,"textarea-disabled-style")]},x={tags:["!dev"],render:()=>a`
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
    `,decorators:[t(r,"textarea-readonly-style")]},n={tags:["!dev"],render:()=>a`
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
    `,decorators:[t(r,"textarea-required-style")]},i={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" required></textarea>
        </dss-textarea>
        <dss-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1">Invalid value</textarea>
        </dss-textarea>
      </div>
    `,decorators:[t(r,"textarea-invalid-style")]},c={tags:["!dev"],render:()=>a`
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
    `,decorators:[t(r,"textarea-description-style")]},b={tags:["!dev"],render:()=>a`
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
    `,decorators:[t(r,"textarea-placeholder-style")]},p={tags:["!dev"],render:()=>a`
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
    `,decorators:[t(r,"textarea-counter-style")]};var w,h,m;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: any) => {
    if (args.required) {
      return html\`
        \${args.showMaxLength ? html\`
              <dss-textarea size=\${args.size} ?showError=\${args.showError} icon=\${args.showIcon ? args.icon : undefined}>
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
              <dss-textarea size=\${args.size} ?showError=\${args.showError} icon=\${args.showIcon ? args.icon : undefined}>
                <label for="textarea-story" slot="label">\${args.label}</label>
                <textarea id="textarea-story" slot="textarea" rows="1" required></textarea>
                \${args.showDescription ? html\`<span slot="description">\${args.description}</span>\` : html\`\`}
              </dss-textarea>
            \`}
      \`;
    }
    return html\`
      \${args.showMaxLength ? html\`
            <dss-textarea size=\${args.size} ?showError=\${args.showError} icon=\${args.showIcon ? args.icon : undefined} >
              <label for="textarea-story" slot="label">\${args.label}</label>
              <textarea id="textarea-story" slot="textarea" rows="1" maxlength="60"></textarea>
              \${args.showDescription ? html\`<span slot="description">\${args.description}</span>\` : html\`\`}
            </dss-textarea>
          \` : html\`
            <dss-textarea size=\${args.size} ?showError=\${args.showError} icon=\${args.showIcon ? args.icon : undefined}>
              <label for="textarea-story" slot="label">\${args.label}</label>
              <textarea id="textarea-story" slot="textarea" rows="1"></textarea>
              \${args.showDescription ? html\`<span slot="description">\${args.description}</span>\` : html\`\`}
            </dss-textarea>
          \`}
    \`;
  },
  args: {
    size: 'lg',
    label: 'Label',
    required: false,
    showDescription: false,
    description: 'Help Text',
    showMaxLength: false,
    showIcon: false,
    icon: 'add_box',
    showError: false
  }
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var u,y,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea>
          <label slot="label">Size lg</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
        <dss-textarea size="md">
          <label slot="label">Size md</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
        <dss-textarea size="sm">
          <label slot="label">Size sm</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-size-style')]
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,L,$;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea icon="add_box">
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
        <dss-textarea size="md" icon="add_box">
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
        <dss-textarea size="sm" icon="add_box">
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-icon-style')]
}`,...($=(L=o.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var S,z,E;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'textarea-disabled-style')]
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var f,q,D;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'textarea-readonly-style')]
}`,...(D=(q=x.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var I,P,M;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'textarea-required-style')]
}`,...(M=(P=n.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var _,O,H;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" required></textarea>
        </dss-textarea>
        <dss-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1">Invalid value</textarea>
        </dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-invalid-style')]
}`,...(H=(O=i.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var V,T,C;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'textarea-description-style')]
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var R,j,k;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'textarea-placeholder-style')]
}`,...(k=(j=b.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var A,B,F;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'textarea-counter-style')]
}`,...(F=(B=p.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const J=["Playground","Size","Icon","Disabled","ReadOnly","Required","Invalid","Description","Placeholder","Counter"],Q=Object.freeze(Object.defineProperty({__proto__:null,Counter:p,Description:c,Disabled:d,Icon:o,Invalid:i,Placeholder:b,Playground:s,ReadOnly:x,Required:n,Size:l,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{p as C,d as D,o as I,s as P,x as R,Q as S,l as a,n as b,i as c,c as d,b as e};
