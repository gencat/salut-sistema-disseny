import{x as n}from"./lit-html-paDGiEfB.js";const f={title:"Components/Pagination",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["md","lg"]},arrayLength:{name:"Longitud",control:{type:"range",min:20,max:100,step:1}},pageSize:{name:"Elements per pàgina",control:{type:"number",min:5,max:40,step:10}},pageSizeOptions:{name:"Mostrar opció elements per pàgina",control:{type:"boolean"}},currentIndex:{name:"Índex actual",control:{type:"number"}},resultsText:{name:"Text per -Resultats-",control:{type:"text"}},rowsPerPageText:{name:"Text per -Files per pàgina-",control:{type:"text"}}},parameters:{layout:"centered"}},a={name:"Playground - Pagination",args:{size:"md",arrayLength:100,pageSize:5,currentIndex:1},argsTypes:{pageSizeOptions:{table:{disable:!0}},resultsText:{table:{disable:!0}},rowsPerPageText:{table:{disable:!0}}},render:e=>n`<dss-pagination
        length="${e.arrayLength}"
        pageSize="${e.pageSize}"
        size="${e.size}"
        currentIndex="${e.currentIndex}"
      ></dss-pagination>`},r={name:"Playground - Table Pagination",args:{arrayLength:100,pageSize:5,pageSizeOptions:!1,currentIndex:1,rowsPerPageText:"Files per pàgina",resultsText:"Resultats"},argTypes:{size:{table:{disable:!0}}},render:e=>{const L=e.pageSizeOptions?[5,10,15,20,25,30]:[];return n`<dss-table-pagination
        length="${e.arrayLength}"
        pageSize="${e.pageSize}"
        currentIndex="${e.currentIndex}"
        resultsText="${e.resultsText}"
        rowsPerPageText="${e.rowsPerPageText}"
        .pageSizeOptions="${L}"
      ></dss-table-pagination>`}},t={tags:["!dev"],render:()=>n`
  <dss-pagination length="100" pageSize="10"></dss-pagination>
      
    `},s={tags:["!dev"],render:()=>n`
  <dss-pagination length="100" pageSize="10" size="lg"></dss-pagination>
    `},i={tags:["!dev"],render:()=>n`
  <dss-table-pagination length="100" pageSize="10"></dss-table-pagination>
      
    `},o={tags:["!dev"],render:()=>n`
      <dss-table-pagination
    length="100"
    pageSize="10"
    pageSizeOptions="[5,10,15,20]"
  ></dss-table-pagination>
    `};var g,p,l;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Playground - Pagination',
  args: {
    size: 'md',
    arrayLength: 100,
    pageSize: 5,
    currentIndex: 1
  },
  argsTypes: {
    pageSizeOptions: {
      table: {
        disable: true
      }
    },
    resultsText: {
      table: {
        disable: true
      }
    },
    rowsPerPageText: {
      table: {
        disable: true
      }
    }
  },
  render: (args: any) => {
    return html\`<dss-pagination
        length="\${args.arrayLength}"
        pageSize="\${args.pageSize}"
        size="\${args.size}"
        currentIndex="\${args.currentIndex}"
      ></dss-pagination>\`;
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,u,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Playground - Table Pagination',
  args: {
    arrayLength: 100,
    pageSize: 5,
    pageSizeOptions: false,
    currentIndex: 1,
    rowsPerPageText: 'Files per pàgina',
    resultsText: 'Resultats'
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: (args: any) => {
    const pageSizeOptions = args.pageSizeOptions ? [5, 10, 15, 20, 25, 30] : [];
    return html\`<dss-table-pagination
        length="\${args.arrayLength}"
        pageSize="\${args.pageSize}"
        currentIndex="\${args.currentIndex}"
        resultsText="\${args.resultsText}"
        rowsPerPageText="\${args.rowsPerPageText}"
        .pageSizeOptions="\${pageSizeOptions}"
      ></dss-table-pagination>\`;
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,z,S;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
  <dss-pagination length="100" pageSize="10"></dss-pagination>
      
    \`;
  }
}`,...(S=(z=t.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var b,x,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
  <dss-pagination length="100" pageSize="10" size="lg"></dss-pagination>
    \`;
  }
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var y,P,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
  <dss-table-pagination length="100" pageSize="10"></dss-table-pagination>
      
    \`;
  }
}`,...(h=(P=i.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var $,O,I;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-table-pagination
    length="100"
    pageSize="10"
    pageSizeOptions="[5,10,15,20]"
  ></dss-table-pagination>
    \`;
  }
}`,...(I=(O=o.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const v=["PlaygroundDefault","PlaygroundTable","SizeMd","SizeLg","TableDefault","TableSelector"],_=Object.freeze(Object.defineProperty({__proto__:null,PlaygroundDefault:a,PlaygroundTable:r,SizeLg:s,SizeMd:t,TableDefault:i,TableSelector:o,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{a as P,_ as S,i as T,r as a,t as b,s as c,o as d};
