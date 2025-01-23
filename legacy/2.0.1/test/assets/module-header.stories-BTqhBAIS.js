import{x as n,E as B}from"./lit-html-B2eaWknC.js";const _={title:"Components/Module Header",argTypes:{title:{name:"Títol",control:{type:"text"}},withDescription:{name:"Amb descripció",control:{type:"boolean"}},legend:{name:"Descripció",control:{type:"text"},if:{arg:"withDescription"}},withButton:{name:"Amb botó",control:{type:"boolean"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"withButton"}}},parameters:{layout:"centered"}},e={render:t=>{const x=t.withButton?Array.from({length:t.buttonNumber},(D,g)=>n`
          <dss-button
            label=${`Botó ${g+1}`}
            icon="add_box"
            variant="subtle"
          ></dss-button>
        `):B;return n`
      <dss-module-header title=${t.title} legend=${t.withDescription?t.legend:null}>
                ${x}
      </dss-module-header>`},args:{title:"Title",legend:"Descriptive text",withDescription:!0,withButton:!0,buttonNumber:2}},s={tags:["!dev"],render:()=>n`
      <dss-module-header title=${"Title"}>
      </dss-module-header>
    `},d={tags:["!dev"],render:()=>n`
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
    `},o={tags:["!dev"],render:()=>n`
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
    `};var a,r,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var u,i,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-module-header title=\${'Title'}>
      </dss-module-header>
    \`;
  }
}`,...(b=(i=s.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var c,m,$;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
  }
}`,...($=(m=d.parameters)==null?void 0:m.docs)==null?void 0:$.source}}};var h,p,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
  }
}`,...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const T=["Playground","Title","Description","Buttons"],w=Object.freeze(Object.defineProperty({__proto__:null,Buttons:o,Description:d,Playground:e,Title:s,__namedExportsOrder:T,default:_},Symbol.toStringTag,{value:"Module"}));export{o as B,d as D,e as P,w as S,s as T};
