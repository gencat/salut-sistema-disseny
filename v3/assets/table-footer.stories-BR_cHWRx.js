import{x as a}from"./iframe-Dh-Rqy1o.js";import{w as n}from"./storybook-decorators-DSS85Rnr.js";const r=`
  .table-wrapper {
        width: 900px;
    }
`,o={title:"Collections/Table/Footer",argTypes:{dataLength:{name:"Número d'elements de dades",control:{type:"number",min:10,max:100}},selectedLength:{name:"Número d'elements seleccionats",control:{type:"number",min:0,max:100}},numActions:{name:"Número d'accions personalitzades",control:{type:"number",min:1,max:3}}},parameters:{layout:"centered"}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev "}},args:{dataLength:100,selectedLength:1,numActions:2},render:s=>a`
      <div style="width: 900px;">
                <dss-table-footer
                    dataLength="${s.dataLength}"
                    selectedLength="${s.selectedLength}"
                    >
                    ${[...Array(s.numActions)].map(()=>a`
                        <dss-button variant="primary" size="md" label="Action"></dss-button>
                    `)}
                </dss-table-footer>
            </div>
      `},t={tags:["!dev"],render:()=>a`
            <div class="table-wrapper">
                <dss-table-footer
                    dataLength="100"
                    selectedLength="10"
                    >
                    <dss-button variant="secondary" size="md" label="Action"></dss-button>
          <dss-button variant="primary" size="md" label="Action"></dss-button>
                </dss-table-footer>
            </div>
        `,decorators:[n(r,"table-footer-by-default-style")]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev '
    }
  },
  args: {
    dataLength: 100,
    selectedLength: 1,
    numActions: 2
  },
  render: (args: any) => {
    return html\`
      <div style="width: 900px;">
                <dss-table-footer
                    dataLength="\${args.dataLength}"
                    selectedLength="\${args.selectedLength}"
                    >
                    \${[...Array(args.numActions)].map(() => html\`
                        <dss-button variant="primary" size="md" label="Action"></dss-button>
                    \`)}
                </dss-table-footer>
            </div>
      \`;
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="table-wrapper">
                <dss-table-footer
                    dataLength="100"
                    selectedLength="10"
                    >
                    <dss-button variant="secondary" size="md" label="Action"></dss-button>
          <dss-button variant="primary" size="md" label="Action"></dss-button>
                </dss-table-footer>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'table-footer-by-default-style')]
}`,...t.parameters?.docs?.source}}};const d=["Playground","ByDefault"],m=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:t,Playground:e,__namedExportsOrder:d,default:o},Symbol.toStringTag,{value:"Module"}));export{t as B,e as P,m as S};
