import{x as a}from"./iframe-DLVb3rJw.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const r=`
  .wrapper { display: flex; gap: 24px; }
  dss-textarea { width: 200px; }
`,g={title:"Components/Angular/Textarea",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["lg","md","sm"]},label:{name:"Label"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon"}},showError:{name:"Mostrar error",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}}},parameters:{layout:"centered"}},s={render:e=>e.required?a`
        ${e.showMaxLength?a`
              <dss-ng-textarea size=${e.size} ?showError=${e.showError} icon=${e.showIcon?e.icon:void 0}>
                <label for="textarea-story" slot="label">${e.label}</label>
                <textarea
                  id="textarea-story"
                  slot="textarea"
                  rows="1"
                  required
                  maxlength="60"
                ></textarea>
                ${e.showDescription?a`<span slot="description">${e.description}</span>`:a``}
              </dss-ng-textarea>
            `:a`
              <dss-ng-textarea size=${e.size} ?showError=${e.showError} icon=${e.showIcon?e.icon:void 0}>
                <label for="textarea-story" slot="label">${e.label}</label>
                <textarea id="textarea-story" slot="textarea" rows="1" required></textarea>
                ${e.showDescription?a`<span slot="description">${e.description}</span>`:a``}
              </dss-ng-textarea>
            `}
      `:a`
      ${e.showMaxLength?a`
            <dss-ng-textarea size=${e.size} ?showError=${e.showError} icon=${e.showIcon?e.icon:void 0} >
              <label for="textarea-story" slot="label">${e.label}</label>
              <textarea id="textarea-story" slot="textarea" rows="1" maxlength="60"></textarea>
              ${e.showDescription?a`<span slot="description">${e.description}</span>`:a``}
            </dss-ng-textarea>
          `:a`
            <dss-ng-textarea size=${e.size} ?showError=${e.showError} icon=${e.showIcon?e.icon:void 0}>
              <label for="textarea-story" slot="label">${e.label}</label>
              <textarea id="textarea-story" slot="textarea" rows="1"></textarea>
              ${e.showDescription?a`<span slot="description">${e.description}</span>`:a``}
            </dss-ng-textarea>
          `}
    `,args:{size:"lg",label:"Label",required:!1,showDescription:!1,description:"Help Text",showMaxLength:!1,showIcon:!1,icon:"add_box",showError:!1}},l={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-ng-textarea>
          <label slot="label">Size lg</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea size="md">
          <label slot="label">Size md</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea size="sm">
          <label slot="label">Size sm</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-ng-textarea>
      </div>
    `,decorators:[t(r,"textarea-size-style")]},o={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-ng-textarea icon="add_box">
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea size="md" icon="add_box">
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea size="sm" icon="add_box">
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-ng-textarea>
      </div>
    `,decorators:[t(r,"textarea-icon-style")]},n={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" value="Value" disabled></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" disabled placeholder="Placeholder" ></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" disabled >Value text</textarea>
        </dss-ng-textarea>
      </div>
    `,decorators:[t(r,"textarea-disabled-style")]},d={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" value="Value" readOnly></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" readOnly placeholder="Placeholder"></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" readOnly>Text value</textarea>
        </dss-ng-textarea>
      </div>
    `,decorators:[t(r,"textarea-readonly-style")]},x={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" value="Value" required></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" required placeholder="Placeholder"></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" required>Value text</textarea>
        </dss-ng-textarea>
      </div>
    `,decorators:[t(r,"textarea-required-style")]},i={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-ng-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" required></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1">Invalid value</textarea>
        </dss-ng-textarea>
      </div>
    `,decorators:[t(r,"textarea-invalid-style")]},c={tags:["!dev"],render:()=>a`
      <div class="wrapper">
      <dss-ng-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" ></textarea>
        <span slot="description">Descripció</span>
      </dss-ng-textarea>
      <dss-ng-textarea showError>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" required ></textarea>
        <span slot="description">Descripció</span>
      </dss-ng-textarea>
      </div>
    `,decorators:[t(r,"textarea-description-style")]},b={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" ></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" required ></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" ></textarea>
          <span slot="description">Descripció</span>
        </dss-ng-textarea>
        <dss-ng-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" required ></textarea>
          <span slot="description">Descripció</span>
        </dss-ng-textarea>
      </div>
    `,decorators:[t(r,"textarea-placeholder-style")]},p={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" ></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" required ></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" ></textarea>
          <span slot="description">Descripció</span>
        </dss-ng-textarea>
        <dss-ng-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" required ></textarea>
          <span slot="description">Descripció</span>
        </dss-ng-textarea>
      </div>
    `,decorators:[t(r,"textarea-counter-style")]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    if (args.required) {
      return html\`
        \${args.showMaxLength ? html\`
              <dss-ng-textarea size=\${args.size} ?showError=\${args.showError} icon=\${args.showIcon ? args.icon : undefined}>
                <label for="textarea-story" slot="label">\${args.label}</label>
                <textarea
                  id="textarea-story"
                  slot="textarea"
                  rows="1"
                  required
                  maxlength="60"
                ></textarea>
                \${args.showDescription ? html\`<span slot="description">\${args.description}</span>\` : html\`\`}
              </dss-ng-textarea>
            \` : html\`
              <dss-ng-textarea size=\${args.size} ?showError=\${args.showError} icon=\${args.showIcon ? args.icon : undefined}>
                <label for="textarea-story" slot="label">\${args.label}</label>
                <textarea id="textarea-story" slot="textarea" rows="1" required></textarea>
                \${args.showDescription ? html\`<span slot="description">\${args.description}</span>\` : html\`\`}
              </dss-ng-textarea>
            \`}
      \`;
    }
    return html\`
      \${args.showMaxLength ? html\`
            <dss-ng-textarea size=\${args.size} ?showError=\${args.showError} icon=\${args.showIcon ? args.icon : undefined} >
              <label for="textarea-story" slot="label">\${args.label}</label>
              <textarea id="textarea-story" slot="textarea" rows="1" maxlength="60"></textarea>
              \${args.showDescription ? html\`<span slot="description">\${args.description}</span>\` : html\`\`}
            </dss-ng-textarea>
          \` : html\`
            <dss-ng-textarea size=\${args.size} ?showError=\${args.showError} icon=\${args.showIcon ? args.icon : undefined}>
              <label for="textarea-story" slot="label">\${args.label}</label>
              <textarea id="textarea-story" slot="textarea" rows="1"></textarea>
              \${args.showDescription ? html\`<span slot="description">\${args.description}</span>\` : html\`\`}
            </dss-ng-textarea>
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-ng-textarea>
          <label slot="label">Size lg</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea size="md">
          <label slot="label">Size md</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea size="sm">
          <label slot="label">Size sm</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-ng-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-size-style')]
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-ng-textarea icon="add_box">
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea size="md" icon="add_box">
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea size="sm" icon="add_box">
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1"></textarea>
        </dss-ng-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-icon-style')]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" value="Value" disabled></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" disabled placeholder="Placeholder" ></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" disabled >Value text</textarea>
        </dss-ng-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-disabled-style')]
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" value="Value" readOnly></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" readOnly placeholder="Placeholder"></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" readOnly>Text value</textarea>
        </dss-ng-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-readonly-style')]
}`,...d.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" value="Value" required></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" required placeholder="Placeholder"></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" required>Value text</textarea>
        </dss-ng-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-required-style')]
}`,...x.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-ng-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" required></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1">Invalid value</textarea>
        </dss-ng-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-invalid-style')]
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
      <dss-ng-textarea>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" ></textarea>
        <span slot="description">Descripció</span>
      </dss-ng-textarea>
      <dss-ng-textarea showError>
        <label slot="label">Label</label>
        <textarea slot="textarea" rows="1" required ></textarea>
        <span slot="description">Descripció</span>
      </dss-ng-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-description-style')]
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" ></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" required ></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" ></textarea>
          <span slot="description">Descripció</span>
        </dss-ng-textarea>
        <dss-ng-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" placeholder="PlaceHolder" required ></textarea>
          <span slot="description">Descripció</span>
        </dss-ng-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-placeholder-style')]
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" ></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" required ></textarea>
        </dss-ng-textarea>
        <dss-ng-textarea>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" ></textarea>
          <span slot="description">Descripció</span>
        </dss-ng-textarea>
        <dss-ng-textarea showError>
          <label slot="label">Label</label>
          <textarea slot="textarea" rows="1" maxlength="60" required ></textarea>
          <span slot="description">Descripció</span>
        </dss-ng-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-counter-style')]
}`,...p.parameters?.docs?.source}}};const w=["Playground","Size","Icon","Disabled","ReadOnly","Required","Invalid","Description","Placeholder","Counter"],u=Object.freeze(Object.defineProperty({__proto__:null,Counter:p,Description:c,Disabled:n,Icon:o,Invalid:i,Placeholder:b,Playground:s,ReadOnly:d,Required:x,Size:l,__namedExportsOrder:w,default:g},Symbol.toStringTag,{value:"Module"}));export{p as C,n as D,o as I,s as P,d as R,u as S,l as a,x as b,i as c,c as d,b as e};
