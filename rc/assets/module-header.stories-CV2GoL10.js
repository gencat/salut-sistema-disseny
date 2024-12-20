import{x as n,E as B}from"./lit-html-B2eaWknC.js";const _={title:"Components/Module Header",argTypes:{title:{name:"Títol",control:{type:"text"}},withDescription:{name:"Amb descripció",control:{type:"boolean"}},legend:{name:"Descripció",control:{type:"text"},if:{arg:"withDescription"}},withButton:{name:"Amb botó",control:{type:"boolean"}},buttonNumber:{name:"Quantitat de botons",control:{type:"select"},options:[1,2],if:{arg:"withButton"}}},parameters:{layout:"centered"}},t={render:e=>{const y=e.withButton?Array.from({length:e.buttonNumber},(D,g)=>n`
          <dss-button
            label=${`Botó ${g+1}`}
            icon="add_box"
            type="subtle"
          ></dss-button>
        `):B;return n`
      <dss-module-header title=${e.title} legend=${e.withDescription?e.legend:null}>
                ${y}
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
          type="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          type="subtle"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          type="subtle"></dss-button>
      </dss-module-header>
    `},o={tags:["!dev"],render:()=>n`
      <dss-module-header title=${"Title"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          type="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          type="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=${"Title"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          type="subtle"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          type="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          type="subtle"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          type="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=${"Title"} legend=${"Descriptive text"}>
        <dss-button
          label=${"Button"}
          icon="add_box"
          type="subtle"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          type="secondary"></dss-button>
        <dss-button
          label=${"Button"}
          icon="add_box"
          type="primary"></dss-button>
      </dss-module-header>
    `};var l,r,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => {
    const buttons = args.withButton ? Array.from({
      length: args.buttonNumber
    }, (_, i) => html\`
          <dss-button
            label=\${\`Botó \${i + 1}\`}
            icon="add_box"
            type="subtle"
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
}`,...(u=(r=t.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var a,i,b;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-module-header title=\${'Title'}>
      </dss-module-header>
    \`;
  }
}`,...(b=(i=s.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var c,m,p;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-module-header title=\${'Title'} legend=\${'Descriptive text'}>
      </dss-module-header>

      <dss-module-header title=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          type="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          type="subtle"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          type="subtle"></dss-button>
      </dss-module-header>
    \`;
  }
}`,...(p=(m=d.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var $,h,x;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-module-header title=\${'Title'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          type="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          type="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=\${'Title'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          type="subtle"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          type="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          type="subtle"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          type="subtle"></dss-button>
      </dss-module-header>

      <dss-module-header title=\${'Title'} legend=\${'Descriptive text'}>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          type="subtle"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          type="secondary"></dss-button>
        <dss-button
          label=\${'Button'}
          icon="add_box"
          type="primary"></dss-button>
      </dss-module-header>
    \`;
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const T=["Playground","Title","Description","Buttons"],w=Object.freeze(Object.defineProperty({__proto__:null,Buttons:o,Description:d,Playground:t,Title:s,__namedExportsOrder:T,default:_},Symbol.toStringTag,{value:"Module"}));export{o as B,d as D,t as P,w as S,s as T};
