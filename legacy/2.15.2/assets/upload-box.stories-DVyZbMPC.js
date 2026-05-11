import{x as s}from"./lit-html-D6cejpwM.js";import{w as a}from"./storybook-decorators-DSS85Rnr.js";const o=`
 .innerZoomElementWrapper{
        flex-direction: column;
        align-items: flex-start;
    }
    .upload-box-wrapper {
        width: 400px;
    }
`,U={title:"Components/Upload Box",argTypes:{dragAndDropIcon:{name:"dragAndDropIcon",control:{type:"text"}},dragAndDropMessage:{name:"dragAndDropMessage",control:{type:"text"}},fileExplorerMessage:{name:"Open file explorer message",control:{type:"text"}},filesFormatMessage:{name:"filesFormatMessage",control:{type:"text"}},filesFormat:{name:"filesFormat",control:{type:"text"}},multiple:{name:"Input: multiple",control:{type:"boolean"}},disabled:{name:"Input: disabled",control:{type:"boolean"}},disableOpenFile:{name:"Deshabilitar enllaç d'arxiu",control:{type:"boolean"}},maxUploadFiles:{name:"Màxim de fitxers permesos",control:{type:"number",min:1,max:10}},description:{name:"Descripció",control:{type:"text"}}},parameters:{layout:"centered"}},r={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=3829-12492&m=dev"}},args:{dragAndDropIcon:"file_upload",fileExplorerMessage:"Clica per pujar",dragAndDropMessage:"o arrossega arxius aquí",filesFormatMessage:"PDF, JPEG o PNG de menys de 5MB",filesFormat:'["pdf","jpeg","png"]',multiple:!1,disabled:!1,disableOpenFile:!1,maxUploadFiles:3,description:"Help text."},render:e=>s`
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
  `},l={tags:["!dev"],render:()=>s`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox">
            <input type="file" slot="input" multiple />
                </dss-upload-box>
            </div>
    `,decorators:[a(o,"upload-box-default-style")]},t={tags:["!dev"],render:()=>s`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox">
        <input type="file" slot="input" disabled/>
    </dss-upload-box>
  </div>
    `,decorators:[a(o,"upload-box-disabled-style")]},d={tags:["!dev"],render:()=>s`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox" helpText="Help text.">
            <input type="file" slot="input" multiple />
                </dss-upload-box>
            </div>
    `,decorators:[a(o,"upload-box-description-style")]},p={tags:["!dev"],render:()=>s`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox" filesFormat='["zip","pptx"]' filesFormatMessage="ZIP o PPTX de menys de 5MB">
        <input type="file" slot="input"/>
    </dss-upload-box>
  </div>
    `,decorators:[a(o,"upload-box-file-format-style")]},i={tags:["!dev"],render:()=>s`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox" maxUploadFiles="1">
            <input type="file" slot="input" />
                </dss-upload-box>
            </div>
    `,decorators:[a(o,"upload-box-file-limit-single-style")]},n={tags:["!dev"],render:()=>s`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox" maxUploadFiles="3">
            <input type="file" slot="input" multiple />
                </dss-upload-box>
            </div>
    `,decorators:[a(o,"upload-box-file-limit-multiple-style")]};var u,m,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var c,g,b;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox">
            <input type="file" slot="input" multiple />
                </dss-upload-box>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'upload-box-default-style')]
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,y,F;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox">
        <input type="file" slot="input" disabled/>
    </dss-upload-box>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'upload-box-disabled-style')]
}`,...(F=(y=t.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var v,w,M;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox" helpText="Help text.">
            <input type="file" slot="input" multiple />
                </dss-upload-box>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'upload-box-description-style')]
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var S,D,h;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="upload-box-wrapper">
    <dss-upload-box id="uploadBox" filesFormat='["zip","pptx"]' filesFormatMessage="ZIP o PPTX de menys de 5MB">
        <input type="file" slot="input"/>
    </dss-upload-box>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'upload-box-file-format-style')]
}`,...(h=(D=p.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var $,B,A;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox" maxUploadFiles="1">
            <input type="file" slot="input" />
                </dss-upload-box>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'upload-box-file-limit-single-style')]
}`,...(A=(B=i.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var P,E,I;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="upload-box-wrapper">
            <dss-upload-box id="uploadBox" maxUploadFiles="3">
            <input type="file" slot="input" multiple />
                </dss-upload-box>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'upload-box-file-limit-multiple-style')]
}`,...(I=(E=n.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const O=["Playground","ByDefault","Disabled","Description","FileFormat","FileLimitSingle","FileLimitMultiple"],_=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:l,Description:d,Disabled:t,FileFormat:p,FileLimitMultiple:n,FileLimitSingle:i,Playground:r,__namedExportsOrder:O,default:U},Symbol.toStringTag,{value:"Module"}));export{l as B,t as D,p as F,r as P,_ as S,d as a,i as b,n as c};
