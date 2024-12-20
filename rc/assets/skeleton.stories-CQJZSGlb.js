import{x as i}from"./lit-html-B2eaWknC.js";import"./skeleton-BKFiTEZb.js";const c={title:"Components/Skeleton",component:"dss-skeleton",argTypes:{width:{name:"Amplada",description:"L'amplada del skeleton amb el tipus d'unitat (px, em, rem, %, etc.). Si no s'especifica el tipus d'unitat, es considerarà percentatge (%)."},height:{name:"Alçada",description:"L'alçada del skeleton amb el tipus d'unitat (px, em, rem, %, etc.). Si no s'especifica el tipus d'unitat, es considerarà percentatge (%)."}},parameters:{layout:"centered"}},e={args:{width:"",height:""},render:t=>i`
      <div class="exemple-container-skeleton-canvas">
        <dss-skeleton width=${t.width} height=${t.height}></dss-skeleton>
      </div>
    `},s={tags:["!dev"],render:()=>i`
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
    `};var n,d,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(d=e.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var a,l,r;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(l=s.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const p=["Playground","Example"],h=Object.freeze(Object.defineProperty({__proto__:null,Example:s,Playground:e,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{s as E,e as P,h as S};
