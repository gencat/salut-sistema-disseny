import{x as n,E as u}from"./iframe-CdZ_4rdx.js";import{w as r}from"./storybook-decorators-DSS85Rnr.js";const a=`
  #root-inner {
        width: 900px
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,b={title:"Components/Module Header",argTypes:{title:{name:"Títol",control:{type:"text"}},withDescription:{name:"Amb descripció",control:{type:"boolean"}},legend:{name:"Descripció",control:{type:"text"},if:{arg:"withDescription"}},withButton:{name:"Amb botó",control:{type:"boolean"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"withButton"}}},parameters:{layout:"centered"}},t={render:e=>{const l=e.withButton?Array.from({length:e.buttonNumber},(m,i)=>n`
          <dss-button
            label=${`Botó ${i+1}`}
            icon="add_box"
            variant="subtle"
          ></dss-button>
        `):u;return n`
      <dss-module-header titleText=${e.title} legend=${e.withDescription?e.legend:null}>
                ${l}
      </dss-module-header>`},args:{title:"Title",legend:"Descriptive text",withDescription:!0,withButton:!0,buttonNumber:2},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=314-572&m=dev"}}},s={tags:["!dev"],render:()=>n`
      <dss-module-header titleText=${"Title"}>
      </dss-module-header>
    `,decorators:[r(a,"module-header-title-style")]},d={tags:["!dev"],render:()=>n`
        <div class="wrapper">
      <dss-module-header titleText=${"Title"} legend=${"Descriptive text"}>
      </dss-module-header>

      <dss-module-header titleText=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header titleText=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>
        </div>
    `,decorators:[r(a,"module-header-description-style")]},o={tags:["!dev"],render:()=>n`
        <div class="wrapper">
      <dss-module-header titleText=${"Title"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header titleText=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header titleText=${"Title"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header titleText=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header titleText=${"Title"} legend=${"Descriptive text"}>
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
        </div>
    `,decorators:[r(a,"module-header-buttons-style")]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
      <dss-module-header titleText=\${args.title} legend=\${args.withDescription ? args.legend : null}>
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-module-header titleText=\${'Title'}>
      </dss-module-header>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'module-header-title-style')]
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
      <dss-module-header titleText=\${'Title'} legend=\${'Descriptive text'}>
      </dss-module-header>

      <dss-module-header titleText=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header titleText=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'module-header-description-style')]
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
      <dss-module-header titleText=\${'Title'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header titleText=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header titleText=\${'Title'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header titleText=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          variant="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header titleText=\${'Title'} legend=\${'Descriptive text'}>
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
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'module-header-buttons-style')]
}`,...o.parameters?.docs?.source}}};const c=["Playground","Title","Description","Buttons"],x=Object.freeze(Object.defineProperty({__proto__:null,Buttons:o,Description:d,Playground:t,Title:s,__namedExportsOrder:c,default:b},Symbol.toStringTag,{value:"Module"}));export{o as B,d as D,t as P,x as S,s as T};
