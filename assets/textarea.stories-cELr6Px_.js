import{x as a}from"./lit-html-D6a8R3xZ.js";const B={title:"Components/Textarea",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["lg","md","sm"]},label:{name:"Label"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon"}},showError:{name:"Mostrar error",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}}},parameters:{layout:"centered"}},t={render:e=>e.required?a`
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
    `,args:{size:"lg",label:"Label",required:!1,showDescription:!1,description:"Help Text",showMaxLength:!1,showIcon:!1,icon:"add_box",showError:!1}},r={tags:["!dev"],render:()=>a`
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
    `,parameters:{docs:{transformSource:e=>e.replace(/<style>[\s\S]*?<\/style>/,"").trim()}}},s={tags:["!dev"],render:()=>a`
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
    `},l={tags:["!dev"],render:()=>a`
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
    `},o={tags:["!dev"],render:()=>a`
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
    `},n={tags:["!dev"],render:()=>a`
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
    `},d={tags:["!dev"],render:()=>a`
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
    `},x={tags:["!dev"],render:()=>a`
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
    `},i={tags:["!dev"],render:()=>a`
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
    `},b={tags:["!dev"],render:()=>a`
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
  },
  parameters: {
    docs: {
      transformSource: (src: string) => {
        // Elimina el bloque <style> para que no aparezca en el código mostrado
        return src.replace(/<style>[\\s\\S]*?<\\/style>/, '').trim();
      }
    }
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
}`,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var $,y,z;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(z=(y=l.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var f,E,q;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(q=(E=o.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var D,S,I;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var P,M,_;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(M=d.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var O,H,V;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(H=x.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var T,C,R;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var j,k,A;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(k=b.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const F=["Playground","Size","Icon","Disabled","ReadOnly","Required","Invalid","Description","Placeholder","Counter"],J=Object.freeze(Object.defineProperty({__proto__:null,Counter:b,Description:x,Disabled:l,Icon:s,Invalid:d,Placeholder:i,Playground:t,ReadOnly:o,Required:n,Size:r,__namedExportsOrder:F,default:B},Symbol.toStringTag,{value:"Module"}));export{b as C,l as D,s as I,i as P,o as R,J as S,r as a,n as b,d as c,x as d};
