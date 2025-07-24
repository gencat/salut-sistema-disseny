import{x as a}from"./lit-html-D6a8R3xZ.js";const t=(e,h)=>K=>{const N=K();if(!document.getElementById(h)){const w=document.createElement("style");w.id=h,w.textContent=e,document.head.appendChild(w)}return N},r=`
  .wrapper { display: flex; gap: 24px; }
  dss-textarea { width: 200px; }
`,Q={title:"Components/Textarea",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["lg","md","sm"]},label:{name:"Label"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon"}},showError:{name:"Mostrar error",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}}},parameters:{layout:"centered"}},s={render:e=>e.required?a`
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
    `,decorators:[t(r,"textarea-counter-style")]};var m,u,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,v,L;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var $,S,z;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var E,f,q;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(q=(f=d.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};var D,I,P;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(I=x.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var M,_,O;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(_=n.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var H,V,C;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(C=(V=i.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var T,R,j;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(j=(R=c.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var B,k,A;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(k=b.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var F,G,J;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const U=["Playground","Size","Icon","Disabled","ReadOnly","Required","Invalid","Description","Placeholder","Counter"],X=Object.freeze(Object.defineProperty({__proto__:null,Counter:p,Description:c,Disabled:d,Icon:o,Invalid:i,Placeholder:b,Playground:s,ReadOnly:x,Required:n,Size:l,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{p as C,d as D,o as I,s as P,x as R,X as S,l as a,n as b,i as c,c as d,b as e};
