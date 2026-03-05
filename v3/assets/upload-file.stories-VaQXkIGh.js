import{x as l}from"./iframe-CdZ_4rdx.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const i=`
 .innerZoomElementWrapper{
        flex-direction: column;
        align-items: flex-start;
    }
    .upload-file-wrapper {
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`,d={title:"Components/Upload File",argTypes:{state:{name:"Estat",control:{type:"radio"},options:["uploading","error","uploaded"]},fileName:{name:"Nom del fitxer",control:{type:"text"}},errorMessage:{name:"Missatge d'error",control:{type:"text"}},disableOpenFile:{name:"Deshabilitar enllaç d'arxiu",control:{type:"boolean"}},disableActions:{name:"Deshabilitar accions",control:{type:"boolean"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=3829-12492&m=dev"}},args:{fileName:"nom_arxiu.pdf",state:"uploading",errorMessage:"Error al pujar el fitxer",disableOpenFile:!1,disableActions:!1},render:e=>l`
    <div style="width:300px">
            <dss-upload-file
                fileName="${e.fileName}"
                state="${e.state}"
                message="${e.errorMessage}" 
                ?disableActions="${e.disableActions}"
                ?disableOpenFile="${e.disableOpenFile}"
                >
            </dss-upload-file>
        </div>
    `},s={tags:["!dev"],render:()=>l`
      <div class="upload-file-wrapper">
            <dss-upload-file fileName="nom_arxiu.pdf" state="uploading"></dss-upload-file>
            <dss-upload-file fileName="nom_arxiu.pdf" state="error" message="Error al pujar el fitxer"></dss-upload-file>
            <dss-upload-file fileName="nom_arxiu.pdf" state="uploaded"></dss-upload-file>
            </div>
    `,decorators:[t(i,"upload-file-states-style")]},r={tags:["!dev"],render:()=>l`
      <div class="upload-file-wrapper">
                <dss-upload-file fileName="nom_arxiu.pdf" state="uploaded" disableOpenFile></dss-upload-file>
            </div>
    `,decorators:[t(i,"upload-file-disabled-style")]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=3829-12492&m=dev'
    }
  },
  args: {
    fileName: 'nom_arxiu.pdf',
    state: 'uploading',
    errorMessage: 'Error al pujar el fitxer',
    disableOpenFile: false,
    disableActions: false
  },
  render: (args: any) => {
    return html\`
    <div style="width:300px">
            <dss-upload-file
                fileName="\${args.fileName}"
                state="\${args.state}"
                message="\${args.errorMessage}" 
                ?disableActions="\${args.disableActions}"
                ?disableOpenFile="\${args.disableOpenFile}"
                >
            </dss-upload-file>
        </div>
    \`;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="upload-file-wrapper">
            <dss-upload-file fileName="nom_arxiu.pdf" state="uploading"></dss-upload-file>
            <dss-upload-file fileName="nom_arxiu.pdf" state="error" message="Error al pujar el fitxer"></dss-upload-file>
            <dss-upload-file fileName="nom_arxiu.pdf" state="uploaded"></dss-upload-file>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'upload-file-states-style')]
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="upload-file-wrapper">
                <dss-upload-file fileName="nom_arxiu.pdf" state="uploaded" disableOpenFile></dss-upload-file>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'upload-file-disabled-style')]
}`,...r.parameters?.docs?.source}}};const o=["Playground","States","DisableOpen"],u=Object.freeze(Object.defineProperty({__proto__:null,DisableOpen:r,Playground:a,States:s,__namedExportsOrder:o,default:d},Symbol.toStringTag,{value:"Module"}));export{r as D,a as P,u as S,s as a};
