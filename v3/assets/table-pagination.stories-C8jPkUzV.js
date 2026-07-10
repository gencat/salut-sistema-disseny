import{x as s}from"./iframe-Dh-Rqy1o.js";import{w as n}from"./storybook-decorators-DSS85Rnr.js";const i=`
 .innerZoomElementWrapper {
        flex-direction: column;
    }

    .innerZoomElementWrapper > * {
        width:100% !important;
    }

    .wrapper {
        width: 600px
    }
`,p={title:"Collections/Table/Pagination",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["md","lg"]},arrayLength:{name:"Longitud",control:{type:"range",min:20,max:100,step:1}},pageSize:{name:"Elements per pàgina",control:{type:"number",min:5,max:40,step:10}},pageSizeOptions:{name:"Mostrar opció elements per pàgina",control:{type:"boolean"}},currentIndex:{name:"Índex actual",control:{type:"number"}},resultsText:{name:"Text per -Resultats-",control:{type:"text"}},rowsPerPageText:{name:"Text per -Files per pàgina-",control:{type:"text"}}},parameters:{layout:"centered"}},t={name:"Playground",parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=73-2218&m=dev"}},args:{arrayLength:100,pageSize:5,pageSizeOptions:!1,currentIndex:1,rowsPerPageText:"Files per pàgina",resultsText:"Resultats"},argTypes:{size:{table:{disable:!0}}},render:e=>{const o=e.pageSizeOptions?[5,10,15,20,25,30]:[];return s`
            <div style="width: 600px;">
                <dss-table-pagination
                    length="${e.arrayLength}"
                    pageSize="${e.pageSize}"
                    currentIndex="${e.currentIndex}"
                    resultsText="${e.resultsText}"
                    rowsPerPageText="${e.rowsPerPageText}"
                    .pageSizeOptions="${o}"
                ></dss-table-pagination>
            </div>
        `}},a={tags:["!dev"],render:()=>s`
        <div class="wrapper">
            <dss-table-pagination length="100" pageSize="10"></dss-table-pagination>
    </div>
    `,decorators:[n(i,"pagination-table-default-style")]},r={tags:["!dev"],render:()=>s`
        <div class="wrapper">
            <dss-table-pagination
            length="100"
            pageSize="10"
            pageSizeOptions="[5,10,15,20]"
            ></dss-table-pagination>
    </div>
    `,decorators:[n(i,"pagination-table-selector-style")]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-table-pagination length="100" pageSize="10"></dss-table-pagination>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'pagination-table-default-style')]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-table-pagination
            length="100"
            pageSize="10"
            pageSizeOptions="[5,10,15,20]"
            ></dss-table-pagination>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'pagination-table-selector-style')]
}`,...r.parameters?.docs?.source}}};const l=["Playground","TableDefault","TableSelector"],c=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,TableDefault:a,TableSelector:r,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{t as P,c as S,a as T,r as a};
