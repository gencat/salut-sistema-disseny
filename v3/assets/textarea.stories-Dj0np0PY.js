import{E as u,x as a}from"./iframe-CdZ_4rdx.js";import{w as r}from"./storybook-decorators-DSS85Rnr.js";const s=`
  .wrapper { display: flex; gap: 24px; }
  dss-textarea { width: 200px; }
`,g={title:"Components/Textarea",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon"}},showError:{name:"Mostrar error",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}},rows:{name:"Files visibles",control:{type:"number"}},autoHeight:{name:"Alçada automàtica",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}}},parameters:{layout:"centered"}},t={render:e=>a`
            <dss-textarea
                size=${e.size}
                label=${e.label}
                rows=${e.rows}
                ?required=${e.required}
                ?disabled=${e.disabled}
                ?readonly=${e.readonly}
                ?invalid=${e.showError}
                ?autoHeight=${e.autoHeight}
                maxlength=${e.showMaxLength?e.maxLength:u}
                icon=${e.showIcon?e.icon:u}
                helpText=${e.showDescription?e.description:u}
             ></dss-textarea> 
    `,args:{size:"lg",label:"Label",required:!1,disabled:!1,readonly:!1,showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:60,showIcon:!1,icon:"add_box",showError:!1,rows:1,autoHeight:!1}},d={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-textarea label="Label SM" size="sm"></dss-textarea>
        <dss-textarea label="Label MD" size="md"></dss-textarea>
        <dss-textarea label="Label LG" size="lg"></dss-textarea>
      </div>
    `,decorators:[r(s,"textarea-size-style")]},o={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-textarea label="Label SM" size="sm" icon="add_box"></dss-textarea>
        <dss-textarea label="Label MD" size="md" icon="add_box"></dss-textarea>
        <dss-textarea label="Label LG" size="lg" icon="add_box"></dss-textarea>
      </div>
    `,decorators:[r(s,"textarea-icon-style")]},l={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-textarea label="Label SM" size="sm" icon="add_box" disabled></dss-textarea>
        <dss-textarea label="Label MD" size="md" icon="add_box" disabled></dss-textarea>
        <dss-textarea label="Label LG" size="lg" icon="add_box" disabled></dss-textarea>
      </div>
    `,decorators:[r(s,"textarea-disabled-style")]},i={tags:["!dev"],render:()=>a`
     <div class="wrapper">
        <dss-textarea label="Label SM" size="sm" icon="add_box" readonly></dss-textarea>
        <dss-textarea label="Label MD" size="md" icon="add_box" readonly></dss-textarea>
        <dss-textarea label="Label LG" size="lg" icon="add_box" readonly></dss-textarea>
      </div>
    `,decorators:[r(s,"textarea-readonly-style")]},n={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-textarea label="Label SM" size="sm" icon="add_box" required></dss-textarea>
        <dss-textarea label="Label MD" size="md" icon="add_box" required></dss-textarea>
        <dss-textarea label="Label LG" size="lg" icon="add_box" required></dss-textarea>
      </div>
    `,decorators:[r(s,"textarea-required-style")]},c={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-textarea label="Label SM" size="sm" icon="add_box" invalid></dss-textarea>
        <dss-textarea label="Label MD" size="md" icon="add_box" invalid></dss-textarea>
        <dss-textarea label="Label LG" size="lg" icon="add_box" invalid></dss-textarea>
      </div>
    `,decorators:[r(s,"textarea-invalid-style")]},x={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-textarea label="Label" icon="add_box" helpText="Help Text"></dss-textarea>
      </div>
    `,decorators:[r(s,"textarea-description-style")]},b={tags:["!dev"],render:()=>a`
       <div class="wrapper">
        <dss-textarea label="Label" icon="add_box" placeholder="Placeholder"></dss-textarea>
      </div>
    `,decorators:[r(s,"textarea-placeholder-style")]},p={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-textarea label="Label" icon="add_box" helpText="Help Text" maxlength="60"></dss-textarea>
      </div>
    `,decorators:[r(s,"textarea-counter-style")]},m={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-textarea label="1 fila"></dss-textarea>
        <dss-textarea label="4 files" rows="4"></dss-textarea>
        <dss-textarea label="Auto" autoHeight></dss-textarea>
      </div>
    `,decorators:[r(s,"textarea-counter-style")]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            <dss-textarea
                size=\${args.size}
                label=\${args.label}
                rows=\${args.rows}
                ?required=\${args.required}
                ?disabled=\${args.disabled}
                ?readonly=\${args.readonly}
                ?invalid=\${args.showError}
                ?autoHeight=\${args.autoHeight}
                maxlength=\${args.showMaxLength ? args.maxLength : nothing}
                icon=\${args.showIcon ? args.icon : nothing}
                helpText=\${args.showDescription ? args.description : nothing}
             ></dss-textarea> 
    \`;
  },
  args: {
    size: 'lg',
    label: 'Label',
    required: false,
    disabled: false,
    readonly: false,
    showDescription: false,
    description: 'Help Text',
    showMaxLength: false,
    maxLength: 60,
    showIcon: false,
    icon: 'add_box',
    showError: false,
    rows: 1,
    autoHeight: false
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea label="Label SM" size="sm"></dss-textarea>
        <dss-textarea label="Label MD" size="md"></dss-textarea>
        <dss-textarea label="Label LG" size="lg"></dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-size-style')]
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea label="Label SM" size="sm" icon="add_box"></dss-textarea>
        <dss-textarea label="Label MD" size="md" icon="add_box"></dss-textarea>
        <dss-textarea label="Label LG" size="lg" icon="add_box"></dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-icon-style')]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea label="Label SM" size="sm" icon="add_box" disabled></dss-textarea>
        <dss-textarea label="Label MD" size="md" icon="add_box" disabled></dss-textarea>
        <dss-textarea label="Label LG" size="lg" icon="add_box" disabled></dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-disabled-style')]
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="wrapper">
        <dss-textarea label="Label SM" size="sm" icon="add_box" readonly></dss-textarea>
        <dss-textarea label="Label MD" size="md" icon="add_box" readonly></dss-textarea>
        <dss-textarea label="Label LG" size="lg" icon="add_box" readonly></dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-readonly-style')]
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea label="Label SM" size="sm" icon="add_box" required></dss-textarea>
        <dss-textarea label="Label MD" size="md" icon="add_box" required></dss-textarea>
        <dss-textarea label="Label LG" size="lg" icon="add_box" required></dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-required-style')]
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea label="Label SM" size="sm" icon="add_box" invalid></dss-textarea>
        <dss-textarea label="Label MD" size="md" icon="add_box" invalid></dss-textarea>
        <dss-textarea label="Label LG" size="lg" icon="add_box" invalid></dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-invalid-style')]
}`,...c.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea label="Label" icon="add_box" helpText="Help Text"></dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-description-style')]
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="wrapper">
        <dss-textarea label="Label" icon="add_box" placeholder="Placeholder"></dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-placeholder-style')]
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea label="Label" icon="add_box" helpText="Help Text" maxlength="60"></dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-counter-style')]
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-textarea label="1 fila"></dss-textarea>
        <dss-textarea label="4 files" rows="4"></dss-textarea>
        <dss-textarea label="Auto" autoHeight></dss-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-counter-style')]
}`,...m.parameters?.docs?.source}}};const h=["Playground","Size","Icon","Disabled","ReadOnly","Required","Invalid","Description","Placeholder","Counter","HeightConfig"],v=Object.freeze(Object.defineProperty({__proto__:null,Counter:p,Description:x,Disabled:l,HeightConfig:m,Icon:o,Invalid:c,Placeholder:b,Playground:t,ReadOnly:i,Required:n,Size:d,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{p as C,l as D,m as H,o as I,t as P,i as R,v as S,d as a,n as b,c,x as d,b as e};
