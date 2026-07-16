import{x as s}from"./iframe-D7EeAtJA.js";import{w as n}from"./storybook-decorators-DSS85Rnr.js";const i=`
 .innerZoomElementWrapper {
        flex-direction: column;
    }

    .innerZoomElementWrapper > * {
        width:100% !important;
    }

    .wrapper {
        width: 600px
    }
`,o={title:"Collections/Pagination",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["md","lg"]},arrayLength:{name:"Longitud",control:{type:"range",min:20,max:100,step:1}},pageSize:{name:"Elements per pàgina",control:{type:"number",min:5,max:40,step:10}},pageSizeOptions:{name:"Mostrar opció elements per pàgina",control:{type:"boolean"}},currentIndex:{name:"Índex actual",control:{type:"number"}},resultsText:{name:"Text per -Resultats-",control:{type:"text"}},rowsPerPageText:{name:"Text per -Files per pàgina-",control:{type:"text"}}},parameters:{layout:"centered"}},e={name:"Playground",parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=63-1096&m=dev"}},args:{size:"md",arrayLength:100,pageSize:5,currentIndex:1},argsTypes:{pageSizeOptions:{table:{disable:!0}},resultsText:{table:{disable:!0}},rowsPerPageText:{table:{disable:!0}}},render:a=>s`
            <div style="width: 600px;">
                <dss-pagination
                    length="${a.arrayLength}"
                    pageSize="${a.pageSize}"
                    size="${a.size}"
                    currentIndex="${a.currentIndex}"
                ></dss-pagination>
            </div>
            `},t={tags:["!dev"],render:()=>s`
        <div class="wrapper">
            <dss-pagination length="100" pageSize="10"></dss-pagination>
    </div>
    `,decorators:[n(i,"pagination-size-md-style")]},r={tags:["!dev"],render:()=>s`
        <div class="wrapper">
            <dss-pagination length="100" pageSize="10" size="lg"></dss-pagination>
    </div>
    `,decorators:[n(i,"pagination-size-lg-style")]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-pagination length="100" pageSize="10"></dss-pagination>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'pagination-size-md-style')]
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
            <dss-pagination length="100" pageSize="10" size="lg"></dss-pagination>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'pagination-size-lg-style')]
}`,...r.parameters?.docs?.source}}};const p=["Playground","SizeMd","SizeLg"],l=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,SizeLg:r,SizeMd:t,__namedExportsOrder:p,default:o},Symbol.toStringTag,{value:"Module"}));export{e as P,l as S,t as a,r as b};
