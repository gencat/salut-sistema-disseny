import{x as d}from"./lit-html-CeYizTxc.js";const D={title:"Components/Upload Box",argTypes:{dragAndDropIcon:{name:"dragAndDropIcon",control:{type:"text"}},dragAndDropMessage:{name:"dragAndDropMessage",control:{type:"text"}},fileExplorerMessage:{name:"Open file explorer message",control:{type:"text"}},filesFormatMessage:{name:"filesFormatMessage",control:{type:"text"}},filesFormat:{name:"filesFormat",control:{type:"text"}},multiple:{name:"Input: multiple",control:{type:"boolean"}},disabled:{name:"Input: disabled",control:{type:"boolean"}},disableOpenFile:{name:"Deshabilitar enllaç d'arxiu",control:{type:"boolean"}}},parameters:{layout:"centered"}},s={args:{dragAndDropIcon:"file_upload",fileExplorerMessage:"Clica per pujar",dragAndDropMessage:"o arrossega arxius aquí",filesFormatMessage:"PDF, JPEG o PNG de menys de 5MB",filesFormat:'["pdf","jpeg","png"]',multiple:!1,disabled:!1,disableOpenFile:!1},render:e=>d`
    <div style="width:400px">
    <dss-upload-box 
        size="${e.size}"
        dragAndDropIcon="${e.dragAndDropIcon}"
        fileExplorerMessage="${e.fileExplorerMessage}"
        filesFormatMessage="${e.filesFormatMessage}"
        dragAndDropMessage="${e.dragAndDropMessage}"
        .filesFormat="${e.filesFormat}"
        fileFormatErrorMessage="${e.fileFormatErrorMessage}"
                ?disableOpenFile="${e.disableOpenFile}"
    >
      <input type="file" slot="input" ?disabled=${e.disabled} ?multiple=${e.multiple} />
    </dss-upload-box>
    </div>
  `},a={tags:["!dev"],render:()=>d`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox">
        <input type="file" slot="input"/>
    </dss-upload-box>
  </div>
    `},r={tags:["!dev"],render:()=>d`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox">
        <input type="file" slot="input" disabled/>
    </dss-upload-box>
  </div>
    `},o={tags:["!dev"],render:()=>d`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox">
        <input type="file" slot="input" multiple/>
    </dss-upload-box>
  </div>
    `},l={tags:["!dev"],render:()=>d`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox" filesFormat='["zip","pptx"]' filesFormatMessage="ZIP o PPTX de menys de 5MB">
        <input type="file" slot="input"/>
    </dss-upload-box>
  </div>
    `};var p,n,t;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    dragAndDropIcon: 'file_upload',
    fileExplorerMessage: 'Clica per pujar',
    dragAndDropMessage: 'o arrossega arxius aquí',
    filesFormatMessage: 'PDF, JPEG o PNG de menys de 5MB',
    filesFormat: '["pdf","jpeg","png"]',
    multiple: false,
    disabled: false,
    disableOpenFile: false
  },
  render: (args: any) => {
    return html\`
    <div style="width:400px">
    <dss-upload-box 
        size="\${args.size}"
        dragAndDropIcon="\${args.dragAndDropIcon}"
        fileExplorerMessage="\${args.fileExplorerMessage}"
        filesFormatMessage="\${args.filesFormatMessage}"
        dragAndDropMessage="\${args.dragAndDropMessage}"
        .filesFormat="\${args.filesFormat}"
        fileFormatErrorMessage="\${args.fileFormatErrorMessage}"
                ?disableOpenFile="\${args.disableOpenFile}"
    >
      <input type="file" slot="input" ?disabled=\${args.disabled} ?multiple=\${args.multiple} />
    </dss-upload-box>
    </div>
  \`;
  }
}`,...(t=(n=s.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var i,u,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox">
        <input type="file" slot="input"/>
    </dss-upload-box>
  </div>
    \`;
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,c,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox">
        <input type="file" slot="input" disabled/>
    </dss-upload-box>
  </div>
    \`;
  }
}`,...(x=(c=r.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var f,b,F;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox">
        <input type="file" slot="input" multiple/>
    </dss-upload-box>
  </div>
    \`;
  }
}`,...(F=(b=o.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var M,y,v;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox" filesFormat='["zip","pptx"]' filesFormatMessage="ZIP o PPTX de menys de 5MB">
        <input type="file" slot="input"/>
    </dss-upload-box>
  </div>
    \`;
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const $=["Playground","ByDefault","Disabled","Multiple","FileFormat"],A=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:a,Disabled:r,FileFormat:l,Multiple:o,Playground:s,__namedExportsOrder:$,default:D},Symbol.toStringTag,{value:"Module"}));export{a as B,r as D,l as F,o as M,s as P,A as S};
