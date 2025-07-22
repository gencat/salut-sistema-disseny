import{x as e}from"./lit-html-D6a8R3xZ.js";const B={title:"Components/Textarea",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["Mitjá","Petit"]},label:{name:"Label"},clearable:{name:"Accionable",control:{type:"boolean"}},icon:{name:"Mostrar icona",control:{type:"boolean"}},showError:{name:"Mostrar error",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}}},parameters:{layout:"centered"}},t={render:a=>a.required?e`
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
      <style>
        .wrapper { display: flex; align-items: start; gap: 24px; }
        dss-textarea { width: 200px; }
      </style>
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
    `},s={tags:["!dev"],render:()=>e`
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
    `},l={tags:["!dev"],render:()=>e`
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
    `},o={tags:["!dev"],render:()=>e`
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
    `},n={tags:["!dev"],render:()=>e`
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
    `},d={tags:["!dev"],render:()=>e`
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
    `},x={tags:["!dev"],render:()=>e`
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
    `},b={tags:["!dev"],render:()=>e`
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
    `};var c,p,w;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(w=(p=t.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var h,m,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <style>
        .wrapper { display: flex; align-items: start; gap: 24px; }
        dss-textarea { width: 200px; }
      </style>
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
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,v,L;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  }
}`,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var y,$,E;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=($=l.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var q,D,f;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var S,P,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(P=n.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var M,_,O;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
  }
}`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var H,V,T;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(T=(V=x.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var I,C,R;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(C=b.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var j,A,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(k=(A=i.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};const F=["Playground","Size","Icon","Disabled","ReadOnly","Required","Invalid","Description","Placeholder","Counter"],J=Object.freeze(Object.defineProperty({__proto__:null,Counter:i,Description:x,Disabled:l,Icon:s,Invalid:d,Placeholder:b,Playground:t,ReadOnly:o,Required:n,Size:r,__namedExportsOrder:F,default:B},Symbol.toStringTag,{value:"Module"}));export{i as C,l as D,s as I,b as P,o as R,J as S,r as a,n as b,d as c,x as d};
