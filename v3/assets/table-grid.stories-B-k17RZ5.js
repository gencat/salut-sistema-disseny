import{x as r}from"./iframe-DVq4slBB.js";import{w as c}from"./storybook-decorators-DSS85Rnr.js";const p=`
  .table-wrapper {
        width: 750px;
        overflow: hidden;
    }
    .grid-description {
        font-family: var(--dss-font-family);
        font-size: var(--dss-font-size-xs);
    }
    .grid-description__css {	
        color: var(--color-primary-500);
    }
`,u={title:"Collections/Table/Grid",argTypes:{enableGrid:{name:"Habilitar mode grid",control:{type:"boolean"}},scrollable:{name:"Habilitar scroll horitzontal",control:{type:"boolean"}},gridTemplateColumnsDefault:{name:"Definir grid-template-columns Default",control:{type:"text"},if:{arg:"scrollable",truthy:!1}},gridTemplateColumnsScroll:{name:"Definir grid-template-columns Scroll",control:{type:"text"},if:{arg:"scrollable",truthy:!0}},hasStickyColumnsLeft:{name:"Habilitar columnas sticky esquerra",control:{type:"boolean"},if:{arg:"scrollable",truthy:!0}},hasStickyColumnsRight:{name:"Habilitar columnas sticky dreta",control:{type:"boolean"},if:{arg:"scrollable",truthy:!0}},stickyColumnsCountLeft:{name:"Número de columnas sticky izquierda",control:{type:"number",min:1,max:2},if:{arg:"hasStickyColumnsLeft",truthy:!0}},stickyColumnsCountRight:{name:"Número de columnas sticky derecha",control:{type:"number",min:1,max:2},if:{arg:"hasStickyColumnsRight",truthy:!0}}},parameters:{layout:"centered"}},l={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev "}},args:{enableGrid:!1,scrollable:!1,gridTemplateColumnsDefault:"50px repeat(3, minmax(150px, 1fr)) 100px 50px",gridTemplateColumnsScroll:"50px repeat(3, 300px) 100px 50px",hasStickyColumnsLeft:!1,stickyColumnsCountLeft:2,hasStickyColumnsRight:!1,stickyColumnsCountRight:1},render:e=>{const s={gridTemplateColumns:e.scrollable?e.gridTemplateColumnsScroll:e.gridTemplateColumnsDefault,scrollable:e.scrollable,leftStickyColumns:e.hasStickyColumnsLeft?e.stickyColumnsCountLeft:0,rightStickyColumns:e.hasStickyColumnsRight?e.stickyColumnsCountRight:0};return r`
            <div style="width: fit-content; min-width: 650px; max-width: 800px;">
                <dss-table-grid config=${JSON.stringify(s)}>
                    <dss-thead>
                        ${o(e.enableGrid)}
                    </dss-thead>
                    <dss-tbody>
                        ${d(3,e.enableGrid)}
                    </dss-tbody>
                </dss-table-grid>
            </div>
    `}},o=(e=!1)=>r`
        <dss-row>
            <dss-cell variant="header" align="center" value="Select all" srOnly ?borderTop=${e} ?borderLeft=${e} ?borderRight=${e}></dss-cell>
            <dss-cell variant="header" value="Name" sort id="columnId" ?borderTop=${e} ?borderRight=${e}></dss-cell>
            <dss-cell variant="header" value="Age" align="right" ?borderTop=${e} ?borderRight=${e}></dss-cell>
            <dss-cell variant="header" value="Date" align="center" ?borderTop=${e} ?borderRight=${e}></dss-cell>
            <dss-cell variant="header" value="Risk" align="right" ?borderTop=${e} ?borderRight=${e}></dss-cell>
            <dss-cell variant="header" align="center" value="Actions" srOnly ?borderTop=${e} ?borderRight=${e}></dss-cell>
        </dss-row>
    `,d=(e,s=!1)=>Array.from({length:e},(b,m)=>{const t=m===e-1&&!s;return r`
                <dss-row>
                    <dss-cell align="center" ?hideDivider=${t} ?borderLeft=${s} ?borderRight=${s}>
                        <dss-checkbox label="Label" hideLabel/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name" ?hideDivider=${t} ?borderRight=${s}></dss-cell>
                    <dss-cell value="22" align="right" ?hideDivider=${t} ?borderRight=${s}></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY" align="center" ?hideDivider=${t} ?borderRight=${s}></dss-cell>
                    <dss-cell value="99" reverse ?hideDivider=${t} ?borderRight=${s}>
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center" ?hideDivider=${t} ?borderRight=${s}>
                        <dss-icon-button icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            `}),a={tags:["!dev"],render:()=>r`
            <div class="grid-description">
                gridTemplateColumns:
                <span class="grid-description__css">50px repeat(3, 1fr) 100px 50px</span>
            </div>
            <div class="table-wrapper">
                <dss-table-grid config=${JSON.stringify({gridTemplateColumns:"50px repeat(3, 1fr) 100px 50px"})}>
                    <dss-thead>
                        ${o(!1)}
                    </dss-thead>
                    <dss-tbody>
                        ${d(3,!1)}
                    </dss-tbody>
                </dss-table-grid>
            </div>
        `,decorators:[c(p,"table-main-auto-grid-style")]},n={tags:["!dev"],render:()=>r`
        <div class="grid-description">
                gridTemplateColumns:
                <span class="grid-description__css">50px repeat(3, minmax(250px, 1fr)) 150px 50px</span>
            </div>
            <div class="table-wrapper">
                <dss-table-grid config=${JSON.stringify({gridTemplateColumns:"50px repeat(3, minmax(250px, 1fr)) 150px 50px",scrollable:!0})}>
                    <dss-thead>
                        ${o(!1)}
                    </dss-thead>
                    <dss-tbody>
                        ${d(3,!1)}
                    </dss-tbody>
                </dss-table-grid>
            </div>
        `,decorators:[c(p,"table-main-scrollable-grid-style")]},i={tags:["!dev"],render:()=>r`
            <div class="table-wrapper">
                <dss-table-grid config=${JSON.stringify({gridTemplateColumns:"50px repeat(3, minmax(250px, 1fr)) 150px 50px",scrollable:!0,leftStickyColumns:2,rightStickyColumns:1})}>
                    <dss-thead>
                        ${o(!1)}
                    </dss-thead>
                    <dss-tbody>
                        ${d(3,!1)}
                    </dss-tbody>
                </dss-table-grid>
            </div>
        `,decorators:[c(p,"table-main-sticky-columns-style")]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev '
    }
  },
  args: {
    enableGrid: false,
    scrollable: false,
    gridTemplateColumnsDefault: '50px repeat(3, minmax(150px, 1fr)) 100px 50px',
    gridTemplateColumnsScroll: '50px repeat(3, 300px) 100px 50px',
    hasStickyColumnsLeft: false,
    stickyColumnsCountLeft: 2,
    hasStickyColumnsRight: false,
    stickyColumnsCountRight: 1
  },
  render: (args: any) => {
    const tableConfig = {
      gridTemplateColumns: args.scrollable ? args.gridTemplateColumnsScroll : args.gridTemplateColumnsDefault,
      scrollable: args.scrollable,
      leftStickyColumns: args.hasStickyColumnsLeft ? args.stickyColumnsCountLeft : 0,
      rightStickyColumns: args.hasStickyColumnsRight ? args.stickyColumnsCountRight : 0
    };
    return html\`
            <div style="width: fit-content; min-width: 650px; max-width: 800px;">
                <dss-table-grid config=\${JSON.stringify(tableConfig)}>
                    <dss-thead>
                        \${renderHeaders(args.enableGrid)}
                    </dss-thead>
                    <dss-tbody>
                        \${renderRows(3, args.enableGrid)}
                    </dss-tbody>
                </dss-table-grid>
            </div>
    \`;
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: '50px repeat(3, 1fr) 100px 50px'
    };
    return html\`
            <div class="grid-description">
                gridTemplateColumns:
                <span class="grid-description__css">50px repeat(3, 1fr) 100px 50px</span>
            </div>
            <div class="table-wrapper">
                <dss-table-grid config=\${JSON.stringify(tableConfig)}>
                    <dss-thead>
                        \${renderHeaders(false)}
                    </dss-thead>
                    <dss-tbody>
                        \${renderRows(3, false)}
                    </dss-tbody>
                </dss-table-grid>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'table-main-auto-grid-style')]
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: '50px repeat(3, minmax(250px, 1fr)) 150px 50px',
      scrollable: true
    };
    return html\`
        <div class="grid-description">
                gridTemplateColumns:
                <span class="grid-description__css">50px repeat(3, minmax(250px, 1fr)) 150px 50px</span>
            </div>
            <div class="table-wrapper">
                <dss-table-grid config=\${JSON.stringify(tableConfig)}>
                    <dss-thead>
                        \${renderHeaders(false)}
                    </dss-thead>
                    <dss-tbody>
                        \${renderRows(3, false)}
                    </dss-tbody>
                </dss-table-grid>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'table-main-scrollable-grid-style')]
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: '50px repeat(3, minmax(250px, 1fr)) 150px 50px',
      scrollable: true,
      leftStickyColumns: 2,
      rightStickyColumns: 1
    };
    return html\`
            <div class="table-wrapper">
                <dss-table-grid config=\${JSON.stringify(tableConfig)}>
                    <dss-thead>
                        \${renderHeaders(false)}
                    </dss-thead>
                    <dss-tbody>
                        \${renderRows(3, false)}
                    </dss-tbody>
                </dss-table-grid>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'table-main-sticky-columns-style')]
}`,...i.parameters?.docs?.source}}};const g=["Playground","AutoGrid","ScrollableGrid","StickyColumns"],C=Object.freeze(Object.defineProperty({__proto__:null,AutoGrid:a,Playground:l,ScrollableGrid:n,StickyColumns:i,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{a as A,l as P,C as S,n as a,i as b};
