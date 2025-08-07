import{x as s}from"./lit-html-D6a8R3xZ.js";const E={title:"Components/Upload Box",argTypes:{dragAndDropIcon:{name:"dragAndDropIcon",control:{type:"text"}},dragAndDropMessage:{name:"dragAndDropMessage",control:{type:"text"}},fileExplorerMessage:{name:"Open file explorer message",control:{type:"text"}},filesFormatMessage:{name:"filesFormatMessage",control:{type:"text"}},filesFormat:{name:"filesFormat",control:{type:"text"}},multiple:{name:"Input: multiple",control:{type:"boolean"}},disabled:{name:"Input: disabled",control:{type:"boolean"}},disableOpenFile:{name:"Deshabilitar enllaç d'arxiu",control:{type:"boolean"}},maxUploadFiles:{name:"Màxim de fitxers permesos",control:{type:"number",min:1,max:10}},description:{name:"Descripció",control:{type:"text"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=3829-12492&m=dev"}},args:{dragAndDropIcon:"file_upload",fileExplorerMessage:"Clica per pujar",dragAndDropMessage:"o arrossega arxius aquí",filesFormatMessage:"PDF, JPEG o PNG de menys de 5MB",filesFormat:'["pdf","jpeg","png"]',multiple:!1,disabled:!1,disableOpenFile:!1,maxUploadFiles:3,description:"Help text."},render:e=>s`
    <div style="width:400px">
    <dss-upload-box 
        size="${e.size}"
        dragAndDropIcon="${e.dragAndDropIcon}"
        fileExplorerMessage="${e.fileExplorerMessage}"
        filesFormatMessage="${e.filesFormatMessage}"
        dragAndDropMessage="${e.dragAndDropMessage}"
        .filesFormat="${e.filesFormat}"
        fileFormatErrorMessage="${e.fileFormatErrorMessage}"
                maxUploadFiles="${e.maxUploadFiles}"
                helpText="${e.description}"
                ?disableOpenFile="${e.disableOpenFile}"
    >
      <input type="file" slot="input" ?disabled=${e.disabled} ?multiple=${e.maxUploadFiles>1} />
    </dss-upload-box>
    </div>
  `},o={tags:["!dev"],render:()=>s`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox">
            <input type="file" slot="input" multiple />
                </dss-upload-box>
            </div>
    `},r={tags:["!dev"],render:()=>s`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox">
        <input type="file" slot="input" disabled/>
    </dss-upload-box>
  </div>
    `},l={tags:["!dev"],render:()=>s`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox" helpText="Help text.">
            <input type="file" slot="input" multiple />
                </dss-upload-box>
            </div>
    `},d={tags:["!dev"],render:()=>s`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox" filesFormat='["zip","pptx"]' filesFormatMessage="ZIP o PPTX de menys de 5MB">
        <input type="file" slot="input"/>
    </dss-upload-box>
  </div>
    `},p={tags:["!dev"],render:()=>s`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox" maxUploadFiles="1">
            <input type="file" slot="input" />
                </dss-upload-box>
            </div>
    `},t={tags:["!dev"],render:()=>s`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox" maxUploadFiles="3">
            <input type="file" slot="input" multiple />
                </dss-upload-box>
            </div>
    `};var i,n,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=3829-12492&m=dev'
    }
  },
  args: {
    dragAndDropIcon: 'file_upload',
    fileExplorerMessage: 'Clica per pujar',
    dragAndDropMessage: 'o arrossega arxius aquí',
    filesFormatMessage: 'PDF, JPEG o PNG de menys de 5MB',
    filesFormat: '["pdf","jpeg","png"]',
    multiple: false,
    disabled: false,
    disableOpenFile: false,
    maxUploadFiles: 3,
    description: 'Help text.'
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
                maxUploadFiles="\${args.maxUploadFiles}"
                helpText="\${args.description}"
                ?disableOpenFile="\${args.disableOpenFile}"
    >
      <input type="file" slot="input" ?disabled=\${args.disabled} ?multiple=\${args.maxUploadFiles > 1} />
    </dss-upload-box>
    </div>
  \`;
  }
}`,...(u=(n=a.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var m,x,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox">
            <input type="file" slot="input" multiple />
                </dss-upload-box>
            </div>
    \`;
  }
}`,...(c=(x=o.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};var g,b,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var F,v,y;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox" helpText="Help text.">
            <input type="file" slot="input" multiple />
                </dss-upload-box>
            </div>
    \`;
  }
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var M,D,$;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(D=d.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var w,B,S;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox" maxUploadFiles="1">
            <input type="file" slot="input" />
                </dss-upload-box>
            </div>
    \`;
  }
}`,...(S=(B=p.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var A,P,h;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox" maxUploadFiles="3">
            <input type="file" slot="input" multiple />
                </dss-upload-box>
            </div>
    \`;
  }
}`,...(h=(P=t.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};const I=["Playground","ByDefault","Disabled","Description","FileFormat","FileLimitSingle","FileLimitMultiple"],O=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:o,Description:l,Disabled:r,FileFormat:d,FileLimitMultiple:t,FileLimitSingle:p,Playground:a,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{o as B,r as D,d as F,a as P,O as S,l as a,p as b,t as c};
