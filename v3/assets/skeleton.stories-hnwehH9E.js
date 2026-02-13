import{x as n}from"./iframe-DLVb3rJw.js";const d={title:"Components/Skeleton",component:"dss-skeleton",argTypes:{width:{name:"Amplada",description:"L'amplada del skeleton amb el tipus d'unitat (px, em, rem, %, etc.). Si no s'especifica el tipus d'unitat, es considerarà percentatge (%)."},height:{name:"Alçada",description:"L'alçada del skeleton amb el tipus d'unitat (px, em, rem, %, etc.). Si no s'especifica el tipus d'unitat, es considerarà percentatge (%)."}},parameters:{layout:"centered"}},e={args:{width:"",height:""},render:t=>n`
      <div class="exemple-container-skeleton-canvas">
        <dss-skeleton width=${t.width} height=${t.height}></dss-skeleton>
      </div>
    `},s={tags:["!dev"],render:()=>n`
        <div class="exemple-container-skeleton-example">
          <dss-skeleton width="50"></dss-skeleton>
          <dss-skeleton width="50"></dss-skeleton>
        </div>
        <div class="exemple-container-skeleton-example">
          <dss-skeleton width="25"></dss-skeleton>
          <dss-skeleton width="75"></dss-skeleton>
        </div>
        <div class="exemple-container-skeleton-example">
          <dss-skeleton width="75"></dss-skeleton>
          <dss-skeleton width="25"></dss-skeleton>
        </div>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    width: '',
    height: ''
  },
  render: (args: any) => {
    return html\`
      <div class="exemple-container-skeleton-canvas">
        <dss-skeleton width=\${args.width} height=\${args.height}></dss-skeleton>
      </div>
    \`;
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="exemple-container-skeleton-example">
          <dss-skeleton width="50"></dss-skeleton>
          <dss-skeleton width="50"></dss-skeleton>
        </div>
        <div class="exemple-container-skeleton-example">
          <dss-skeleton width="25"></dss-skeleton>
          <dss-skeleton width="75"></dss-skeleton>
        </div>
        <div class="exemple-container-skeleton-example">
          <dss-skeleton width="75"></dss-skeleton>
          <dss-skeleton width="25"></dss-skeleton>
        </div>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const o=["Playground","Example"],l=Object.freeze(Object.defineProperty({__proto__:null,Example:s,Playground:e,__namedExportsOrder:o,default:d},Symbol.toStringTag,{value:"Module"}));export{s as E,e as P,l as S};
