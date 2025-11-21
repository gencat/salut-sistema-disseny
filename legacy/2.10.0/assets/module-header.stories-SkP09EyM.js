import{x as n,E as _}from"./lit-html-D6cejpwM.js";import{w as r}from"./storybook-decorators-DSS85Rnr.js";const a=`
  #root-inner {
        width: 900px
    }
`,w={title:"Components/Module Header",argTypes:{title:{name:"Títol",control:{type:"text"}},withDescription:{name:"Amb descripció",control:{type:"boolean"}},legend:{name:"Descripció",control:{type:"text"},if:{arg:"withDescription"}},withButton:{name:"Amb botó",control:{type:"boolean"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"withButton"}}},parameters:{layout:"centered"}},e={render:t=>{const y=t.withButton?Array.from({length:t.buttonNumber},(D,B)=>n`
          <dss-button
            label=${`Botó ${B+1}`}
            icon="add_box"
            variant="subtle"
          ></dss-button>
        `):_;return n`
      <dss-module-header title=${t.title} legend=${t.withDescription?t.legend:null}>
                ${y}
      </dss-module-header>`},args:{title:"Title",legend:"Descriptive text",withDescription:!0,withButton:!0,buttonNumber:2},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=314-572&m=dev"}}},s={tags:["!dev"],render:()=>n`
      <dss-module-header title=${"Title"}>
      </dss-module-header>
    `,decorators:[r(a,"module-header-title-style")]},d={tags:["!dev"],render:()=>n`
      <dss-module-header title=${"Title"} legend=${"Descriptive text"}>
      </dss-module-header>

      <dss-module-header title=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>
    `,decorators:[r(a,"module-header-description-style")]},o={tags:["!dev"],render:()=>n`
      <dss-module-header title=${"Title"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=${"Title"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="secondary"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="primary"></dss-button>
      </dss-module-header>
    `,decorators:[r(a,"module-header-buttons-style")]};var l,i,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => {
    const buttons = args.withButton ? Array.from({
      length: args.buttonNumber
    }, (_, i) => html\`
          <dss-button
            label=\${\`Botó \${i + 1}\`}
            icon="add_box"
            variant="subtle"
          ></dss-button>
        \`) : nothing;
    return html\`
      <dss-module-header title=\${args.title} legend=\${args.withDescription ? args.legend : null}>
                \${buttons}
      </dss-module-header>\`;
  },
  args: {
    title: 'Title',
    legend: 'Descriptive text',
    withDescription: true,
    withButton: true,
    buttonNumber: 2
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=314-572&m=dev'
    }
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var b,c,m;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-module-header title=\${'Title'}>
      </dss-module-header>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'module-header-title-style')]
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,h,$;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-module-header title=\${'Title'} legend=\${'Descriptive text'}>
      </dss-module-header>

      <dss-module-header title=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'module-header-description-style')]
}`,...($=(h=d.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};var g,v,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-module-header title=\${'Title'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=\${'Title'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="secondary"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="primary"></dss-button>
      </dss-module-header>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'module-header-buttons-style')]
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const T=["Playground","Title","Description","Buttons"],A=Object.freeze(Object.defineProperty({__proto__:null,Buttons:o,Description:d,Playground:e,Title:s,__namedExportsOrder:T,default:w},Symbol.toStringTag,{value:"Module"}));export{o as B,d as D,e as P,A as S,s as T};
