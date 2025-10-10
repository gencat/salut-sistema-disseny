import{x as a}from"./lit-html-D6cejpwM.js";const O={title:"Components/Pagination",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["md","lg"]},arrayLength:{name:"Longitud",control:{type:"range",min:20,max:100,step:1}},pageSize:{name:"Elements per pàgina",control:{type:"number",min:5,max:40,step:10}},pageSizeOptions:{name:"Mostrar opció elements per pàgina",control:{type:"boolean"}},currentIndex:{name:"Índex actual",control:{type:"number"}},resultsText:{name:"Text per -Resultats-",control:{type:"text"}},rowsPerPageText:{name:"Text per -Files per pàgina-",control:{type:"text"}}},parameters:{layout:"centered"}},t={name:"Playground - Pagination",parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=63-1096&m=dev"}},args:{size:"md",arrayLength:100,pageSize:5,currentIndex:1},argsTypes:{pageSizeOptions:{table:{disable:!0}},resultsText:{table:{disable:!0}},rowsPerPageText:{table:{disable:!0}}},render:e=>a`<dss-pagination
        length="${e.arrayLength}"
        pageSize="${e.pageSize}"
        size="${e.size}"
        currentIndex="${e.currentIndex}"
      ></dss-pagination>`},n={name:"Playground - Table Pagination",parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=73-2218&m=dev"}},args:{arrayLength:100,pageSize:5,pageSizeOptions:!1,currentIndex:1,rowsPerPageText:"Files per pàgina",resultsText:"Resultats"},argTypes:{size:{table:{disable:!0}}},render:e=>{const I=e.pageSizeOptions?[5,10,15,20,25,30]:[];return a`<dss-table-pagination
        length="${e.arrayLength}"
        pageSize="${e.pageSize}"
        currentIndex="${e.currentIndex}"
        resultsText="${e.resultsText}"
        rowsPerPageText="${e.rowsPerPageText}"
        .pageSizeOptions="${I}"
      ></dss-table-pagination>`}},r={tags:["!dev"],render:()=>a`
  <dss-pagination length="100" pageSize="10"></dss-pagination>
      
    `},s={tags:["!dev"],render:()=>a`
  <dss-pagination length="100" pageSize="10" size="lg"></dss-pagination>
    `},i={tags:["!dev"],render:()=>a`
  <dss-table-pagination length="100" pageSize="10"></dss-table-pagination>
      
    `},o={tags:["!dev"],render:()=>a`
      <dss-table-pagination
    length="100"
    pageSize="10"
    pageSizeOptions="[5,10,15,20]"
  ></dss-table-pagination>
    `};var g,p,d;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Playground - Pagination',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=63-1096&m=dev'
    }
  },
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,u,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Playground - Table Pagination',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=73-2218&m=dev'
    }
  },
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
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,S,z;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
  <dss-pagination length="100" pageSize="10"></dss-pagination>
      
    \`;
  }
}`,...(z=(S=r.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var x,b,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
  <dss-pagination length="100" pageSize="10" size="lg"></dss-pagination>
    \`;
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var T,P,h;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
  <dss-table-pagination length="100" pageSize="10"></dss-table-pagination>
      
    \`;
  }
}`,...(h=(P=i.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var w,$,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=($=o.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};const v=["PlaygroundDefault","PlaygroundTable","SizeMd","SizeLg","TableDefault","TableSelector"],F=Object.freeze(Object.defineProperty({__proto__:null,PlaygroundDefault:t,PlaygroundTable:n,SizeLg:s,SizeMd:r,TableDefault:i,TableSelector:o,__namedExportsOrder:v,default:O},Symbol.toStringTag,{value:"Module"}));export{t as P,F as S,i as T,n as a,r as b,s as c,o as d};
