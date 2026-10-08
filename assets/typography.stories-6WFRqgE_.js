import{x as n}from"./iframe-AY5fCmFZ.js";import{w as g}from"./storybook-decorators-DSS85Rnr.js";const y=`
 .typography-columns {
        display: grid;
        width: 100%;
        min-width: 850px;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }
    p {
        margin: 0;
        padding: 0;
        color: inherit !important;
    }
    .highlight {
        font-weight: bold;
    }
`,h={title:"Foundations/Typography",component:"dss-typography",argTypes:{text:{name:"Text"},tag:{name:"HTML Tag",control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","div","p","span"]},variant:{name:"Variant",control:{type:"select"},options:["headline-1","headline-2","headline-3","headline-4","subtitle-1","subtitle-2","subtitle-3","subtitle-4","body-1","body-2","body-3"]},fontWeight:{name:"Font weight",control:{type:"select"},options:["ihnerit","regular","semibold","bold"]},underline:{name:"Underline",control:{type:"boolean"}}},decorators:[(t,a)=>{const d=a.args.variant.startsWith("body-");return a.argTypes.underline.table={...a.argTypes.underline.table,disable:!d},a.argTypes.fontWeight.table={...a.argTypes.fontWeight.table,disable:!d},t(a.args,a)}]},i={text:"Lorem ipsum dolor sit amet.",tag:"div",variant:"body-3",fontWeight:"regular",underline:!1},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/vc3HcReFayadsJO1cEM8HS/Foundations---Design-System-HES-Salut?node-id=20-284&m=dev"}},args:{text:"Lorem ipsum dolor sit amet.",tag:"div",variant:"body-3",fontWeight:"regular",underline:!1},render:t=>n`
            <dss-typography tag="${t.tag}" variant="${t.variant}" fontWeight="${t.fontWeight}" ?underline=${t.underline}>
                ${t.text}
            </dss-typography>
        `},r={tags:["!dev"],render:()=>n`
      <dss-typography tag="h1" variant="headline-1">Lorem ipsum 38px</dss-typography>
      <dss-typography tag="h2" variant="headline-2">Lorem ipsum 30px</dss-typography>
      <dss-typography tag="h3" variant="headline-3">Lorem ipsum 24px</dss-typography>
      <dss-typography tag="h4" variant="headline-4">Lorem ipsum 20px</dss-typography>
    `,args:{...i}},p={tags:["!dev"],render:()=>n`
      <dss-typography tag="h2" variant="subtitle-1">Lorem ipsum 20px</dss-typography>
      <dss-typography tag="h3" variant="subtitle-2">Lorem ipsum 18px</dss-typography>
      <dss-typography tag="h4" variant="subtitle-3">Lorem ipsum 16px</dss-typography>
      <dss-typography tag="h5" variant="subtitle-4">Lorem ipsum 14px</dss-typography>
    `,args:{...i}},e={tags:["!dev"],render:()=>n`
      <dss-typography tag="p" variant="body-1" fontWeight="regular">Lorem ipsum 18px</dss-typography>
      <dss-typography tag="p" variant="body-1" fontWeight="regular" underline>Lorem ipsum 18px</dss-typography>
      <dss-typography tag="p" variant="body-1" fontWeight="semibold">Lorem ipsum 18px</dss-typography>
      <dss-typography tag="p" variant="body-1" fontWeight="bold">Lorem ipsum 18px</dss-typography>
            <br/>
            <dss-typography tag="p" variant="body-2" fontWeight="regular">Lorem ipsum 16px</dss-typography>
      <dss-typography tag="p" variant="body-2" fontWeight="regular" underline>Lorem ipsum 16px</dss-typography>
      <dss-typography tag="p" variant="body-2" fontWeight="semibold">Lorem ipsum 16px</dss-typography>
      <dss-typography tag="p" variant="body-2" fontWeight="bold">Lorem ipsum 16px</dss-typography>
            <br/>
            <dss-typography tag="p" variant="body-3" fontWeight="regular">Lorem ipsum 14px</dss-typography>
      <dss-typography tag="p" variant="body-3" fontWeight="regular" underline>Lorem ipsum 14px</dss-typography>
      <dss-typography tag="p" variant="body-3" fontWeight="semibold">Lorem ipsum 14px</dss-typography>
      <dss-typography tag="p" variant="body-3" fontWeight="bold">Lorem ipsum 14px</dss-typography>
    `,args:{...i}},o={tags:["!dev"],render:()=>n`
     <div class="typography-columns">
         <div>
          <dss-typography tag="h4" variant="headline-4">Element individual</dss-typography>
                <dss-typography tag="p" variant="body-3">Lorem ipsum dolor sit amet.</dss-typography>
                <dss-typography tag="p" variant="body-3">Lorem ipsum <span class="highlight">dolor</span> sit amet.</dss-typography>
                <dss-typography tag="p" variant="body-3">Lorem ipsum dolor sit amet.</dss-typography>
            </div>
            <dss-typography variant="body-3">
          <dss-typography tag="h4" variant="headline-4">Contenidor</dss-typography>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum <span class="highlight">dolor</span> sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </dss-typography>
     </div>
    `,args:{...i},decorators:[g(y,"typography-columns")]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/vc3HcReFayadsJO1cEM8HS/Foundations---Design-System-HES-Salut?node-id=20-284&m=dev'
    }
  },
  args: {
    text: 'Lorem ipsum dolor sit amet.',
    tag: 'div',
    variant: 'body-3',
    fontWeight: 'regular',
    underline: false
  },
  render: (args: {
    text: unknown;
    tag: string;
    variant: string;
    fontWeight: string;
    underline: boolean;
  }) => {
    return html\`
            <dss-typography tag="\${args.tag}" variant="\${args.variant}" fontWeight="\${args.fontWeight}" ?underline=\${args.underline}>
                \${args.text}
            </dss-typography>
        \`;
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-typography tag="h1" variant="headline-1">Lorem ipsum 38px</dss-typography>
      <dss-typography tag="h2" variant="headline-2">Lorem ipsum 30px</dss-typography>
      <dss-typography tag="h3" variant="headline-3">Lorem ipsum 24px</dss-typography>
      <dss-typography tag="h4" variant="headline-4">Lorem ipsum 20px</dss-typography>
    \`;
  },
  args: {
    ...defaultArgs
  }
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-typography tag="h2" variant="subtitle-1">Lorem ipsum 20px</dss-typography>
      <dss-typography tag="h3" variant="subtitle-2">Lorem ipsum 18px</dss-typography>
      <dss-typography tag="h4" variant="subtitle-3">Lorem ipsum 16px</dss-typography>
      <dss-typography tag="h5" variant="subtitle-4">Lorem ipsum 14px</dss-typography>
    \`;
  },
  args: {
    ...defaultArgs
  }
}`,...p.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-typography tag="p" variant="body-1" fontWeight="regular">Lorem ipsum 18px</dss-typography>
      <dss-typography tag="p" variant="body-1" fontWeight="regular" underline>Lorem ipsum 18px</dss-typography>
      <dss-typography tag="p" variant="body-1" fontWeight="semibold">Lorem ipsum 18px</dss-typography>
      <dss-typography tag="p" variant="body-1" fontWeight="bold">Lorem ipsum 18px</dss-typography>
            <br/>
            <dss-typography tag="p" variant="body-2" fontWeight="regular">Lorem ipsum 16px</dss-typography>
      <dss-typography tag="p" variant="body-2" fontWeight="regular" underline>Lorem ipsum 16px</dss-typography>
      <dss-typography tag="p" variant="body-2" fontWeight="semibold">Lorem ipsum 16px</dss-typography>
      <dss-typography tag="p" variant="body-2" fontWeight="bold">Lorem ipsum 16px</dss-typography>
            <br/>
            <dss-typography tag="p" variant="body-3" fontWeight="regular">Lorem ipsum 14px</dss-typography>
      <dss-typography tag="p" variant="body-3" fontWeight="regular" underline>Lorem ipsum 14px</dss-typography>
      <dss-typography tag="p" variant="body-3" fontWeight="semibold">Lorem ipsum 14px</dss-typography>
      <dss-typography tag="p" variant="body-3" fontWeight="bold">Lorem ipsum 14px</dss-typography>
    \`;
  },
  args: {
    ...defaultArgs
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="typography-columns">
         <div>
          <dss-typography tag="h4" variant="headline-4">Element individual</dss-typography>
                <dss-typography tag="p" variant="body-3">Lorem ipsum dolor sit amet.</dss-typography>
                <dss-typography tag="p" variant="body-3">Lorem ipsum <span class="highlight">dolor</span> sit amet.</dss-typography>
                <dss-typography tag="p" variant="body-3">Lorem ipsum dolor sit amet.</dss-typography>
            </div>
            <dss-typography variant="body-3">
          <dss-typography tag="h4" variant="headline-4">Contenidor</dss-typography>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum <span class="highlight">dolor</span> sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </dss-typography>
     </div>
    \`;
  },
  args: {
    ...defaultArgs
  },
  decorators: [withStyle(styles, 'typography-columns')]
}`,...o.parameters?.docs?.source}}};const m=["Playground","Headline","Subtitle","Body","UseCases"],b=Object.freeze(Object.defineProperty({__proto__:null,Body:e,Headline:r,Playground:s,Subtitle:p,UseCases:o,__namedExportsOrder:m,default:h},Symbol.toStringTag,{value:"Module"}));export{e as B,r as H,s as P,b as S,o as U,p as a};
