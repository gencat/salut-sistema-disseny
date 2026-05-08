import{x as a}from"./lit-html-D6cejpwM.js";import{w as p}from"./storybook-decorators-DSS85Rnr.js";const g=`
 .innerZoomElementWrapper {
        flex-direction: column;
    }

    .innerZoomElementWrapper > * {
        width:100% !important;
    }

    #root-inner {
        width: 600px
    }
`,L={title:"Components/Pagination",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["md","lg"]},arrayLength:{name:"Longitud",control:{type:"range",min:20,max:100,step:1}},pageSize:{name:"Elements per pàgina",control:{type:"number",min:5,max:40,step:10}},pageSizeOptions:{name:"Mostrar opció elements per pàgina",control:{type:"boolean"}},currentIndex:{name:"Índex actual",control:{type:"number"}},resultsText:{name:"Text per -Resultats-",control:{type:"text"}},rowsPerPageText:{name:"Text per -Files per pàgina-",control:{type:"text"}}},parameters:{layout:"centered"}},t={name:"Playground - Pagination",parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=63-1096&m=dev"}},args:{size:"md",arrayLength:100,pageSize:5,currentIndex:1},argsTypes:{pageSizeOptions:{table:{disable:!0}},resultsText:{table:{disable:!0}},rowsPerPageText:{table:{disable:!0}}},render:e=>a`
            <div style="width: 600px;">
                <dss-pagination
                    length="${e.arrayLength}"
                    pageSize="${e.pageSize}"
                    size="${e.size}"
                    currentIndex="${e.currentIndex}"
                ></dss-pagination>
            </div>
            `},r={name:"Playground - Table Pagination",parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=73-2218&m=dev"}},args:{arrayLength:100,pageSize:5,pageSizeOptions:!1,currentIndex:1,rowsPerPageText:"Files per pàgina",resultsText:"Resultats"},argTypes:{size:{table:{disable:!0}}},render:e=>{const O=e.pageSizeOptions?[5,10,15,20,25,30]:[];return a`
            <div style="width: 600px;">
                <dss-table-pagination
                    length="${e.arrayLength}"
                    pageSize="${e.pageSize}"
                    currentIndex="${e.currentIndex}"
                    resultsText="${e.resultsText}"
                    rowsPerPageText="${e.rowsPerPageText}"
                    .pageSizeOptions="${O}"
                ></dss-table-pagination>
            </div>
        `}},s={tags:["!dev"],render:()=>a`
        <dss-pagination length="100" pageSize="10"></dss-pagination>
    `,decorators:[p(g,"pagination-size-md-style")]},n={tags:["!dev"],render:()=>a`
         <dss-pagination length="100" pageSize="10" size="lg"></dss-pagination>
    `,decorators:[p(g,"pagination-size-lg-style")]},i={tags:["!dev"],render:()=>a`
         <dss-table-pagination length="100" pageSize="10"></dss-table-pagination>
    `,decorators:[p(g,"pagination-table-default-style")]},o={tags:["!dev"],render:()=>a`
      <dss-table-pagination
                length="100"
                pageSize="10"
                pageSizeOptions="[5,10,15,20]"
            ></dss-table-pagination>
    `,decorators:[p(g,"pagination-table-selector-style")]};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    return html\`
            <div style="width: 600px;">
                <dss-pagination
                    length="\${args.arrayLength}"
                    pageSize="\${args.pageSize}"
                    size="\${args.size}"
                    currentIndex="\${args.currentIndex}"
                ></dss-pagination>
            </div>
            \`;
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,c,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    return html\`
            <div style="width: 600px;">
                <dss-table-pagination
                    length="\${args.arrayLength}"
                    pageSize="\${args.pageSize}"
                    currentIndex="\${args.currentIndex}"
                    resultsText="\${args.resultsText}"
                    rowsPerPageText="\${args.rowsPerPageText}"
                    .pageSizeOptions="\${pageSizeOptions}"
                ></dss-table-pagination>
            </div>
        \`;
  }
}`,...(S=(c=r.parameters)==null?void 0:c.docs)==null?void 0:S.source}}};var y,z,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-pagination length="100" pageSize="10"></dss-pagination>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'pagination-size-md-style')]
}`,...(x=(z=s.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var b,h,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
         <dss-pagination length="100" pageSize="10" size="lg"></dss-pagination>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'pagination-size-lg-style')]
}`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var T,P,f;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
         <dss-table-pagination length="100" pageSize="10"></dss-table-pagination>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'pagination-table-default-style')]
}`,...(f=(P=i.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var v,$,I;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-table-pagination
                length="100"
                pageSize="10"
                pageSizeOptions="[5,10,15,20]"
            ></dss-table-pagination>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'pagination-table-selector-style')]
}`,...(I=($=o.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};const F=["PlaygroundDefault","PlaygroundTable","SizeMd","SizeLg","TableDefault","TableSelector"],_=Object.freeze(Object.defineProperty({__proto__:null,PlaygroundDefault:t,PlaygroundTable:r,SizeLg:n,SizeMd:s,TableDefault:i,TableSelector:o,__namedExportsOrder:F,default:L},Symbol.toStringTag,{value:"Module"}));export{t as P,_ as S,i as T,r as a,s as b,n as c,o as d};
