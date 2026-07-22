import{x as s}from"./iframe-DNLJd-HG.js";const d={title:"Collections/Table",argTypes:{hideHeader:{name:"Ocultar header",control:{type:"boolean"}},hideFooter:{name:"Ocultar footer",control:{type:"boolean"}},hidePaginator:{name:"Ocultar paginador",control:{type:"boolean"}},enableGrid:{name:"Habilitar mode grid",control:{type:"boolean"}},scrollable:{name:"Habilitar scroll horitzontal",control:{type:"boolean"}},gridTemplateColumnsDefault:{name:"Definir grid-template-columns Default",control:{type:"text"},if:{arg:"scrollable",truthy:!1}},gridTemplateColumnsScroll:{name:"Definir grid-template-columns Scroll",control:{type:"text"},if:{arg:"scrollable",truthy:!0}},hasStickyColumnsLeft:{name:"Habilitar columnas sticky esquerra",control:{type:"boolean"},if:{arg:"scrollable",truthy:!0}},hasStickyColumnsRight:{name:"Habilitar columnas sticky dreta",control:{type:"boolean"},if:{arg:"scrollable",truthy:!0}},stickyColumnsCountLeft:{name:"Número de columnas sticky izquierda",control:{type:"number",min:1,max:2},if:{arg:"hasStickyColumnsLeft",truthy:!0}},stickyColumnsCountRight:{name:"Número de columnas sticky derecha",control:{type:"number",min:1,max:2},if:{arg:"hasStickyColumnsRight",truthy:!0}}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:" "}},args:{hideHeader:!1,hideFooter:!1,hidePaginator:!1,enableGrid:!1,scrollable:!1,gridTemplateColumnsDefault:"50px repeat(3, minmax(150px, 1fr)) 100px 50px",gridTemplateColumnsScroll:"50px repeat(3, 300px) 100px 50px",hasStickyColumnsLeft:!1,stickyColumnsCountLeft:2,hasStickyColumnsRight:!1,stickyColumnsCountRight:1},render:e=>{const t={gridTemplateColumns:e.scrollable?e.gridTemplateColumnsScroll:e.gridTemplateColumnsDefault,scrollable:e.scrollable,leftStickyColumns:e.hasStickyColumnsLeft?e.stickyColumnsCountLeft:0,rightStickyColumns:e.hasStickyColumnsRight?e.stickyColumnsCountRight:0};return s`
            <div style="width: 750px; height: 550px;">
                <dss-table>
                    ${e.hideHeader?"":s`
                        <dss-table-header
                            titleText="Títol"
                            tableInfo="Actualitzat 10/03/2026, 10:46 h"
                            filtersVariant="chips"
                            filters='["Name","22"]'
                            >
                        </dss-table-header>
                    `}
                    <dss-table-grid config=${JSON.stringify(t)}>
                        <dss-thead>
                            ${c(e.enableGrid)}
                        </dss-thead>
                        <dss-tbody>
                            ${a(1,e.enableGrid)}
                            ${a(1,e.enableGrid,!0)}
                            ${a(4,e.enableGrid)}
                            ${a(1,e.enableGrid,!0)}
                            ${a(3,e.enableGrid,!1,!0)}
                        </dss-tbody>
                    </dss-table-grid>
                    ${e.hideFooter?"":s`
                        <dss-table-footer
                            dataLength="100"
                            selectedLength="2"
                            >
                            <dss-button variant="secondary" size="md" label="Action"></dss-button>
                            <dss-button variant="primary" size="md" label="Action"></dss-button>
                        </dss-table-footer>
                    `}
                    ${e.hidePaginator?"":s`
                        <dss-table-pagination
              length="100"
              currentIndex="1"
              pageSize="10" 
            ></dss-table-pagination>
                    `}
                </dss-table>
            </div>
        `}},c=(e=!1)=>s`
        <dss-row>
            <dss-cell variant="header" align="center" value="Select all" srOnly ?borderTop=${e} ?borderLeft=${e} ?borderRight=${e}></dss-cell>
            <dss-cell variant="header" value="Name" sort id="columnId" ?borderTop=${e} ?borderRight=${e}></dss-cell>
            <dss-cell variant="header" value="Age" align="right" ?borderTop=${e} ?borderRight=${e}></dss-cell>
            <dss-cell variant="header" value="Date" align="center" ?borderTop=${e} ?borderRight=${e}></dss-cell>
            <dss-cell variant="header" value="Risk" align="right" ?borderTop=${e} ?borderRight=${e}></dss-cell>
            <dss-cell variant="header" align="center" value="Actions" srOnly ?borderTop=${e} ?borderRight=${e}></dss-cell>
        </dss-row>
    `,a=(e,t=!1,r=!1,o=!1)=>Array.from({length:e},(b,i)=>{const l=i===e-1&&!t&&o;return s`
                <dss-row>
                    <dss-cell align="center" ?hideDivider=${l} ?borderLeft=${t} ?borderRight=${t}>
                        <dss-checkbox label="Label" hideLabel ?checked=${r}/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name" ?hideDivider=${l} ?borderRight=${t}></dss-cell>
                    <dss-cell value="22" align="right" ?hideDivider=${l} ?borderRight=${t}></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY" align="center" ?hideDivider=${l} ?borderRight=${t}></dss-cell>
                    <dss-cell value="99" reverse ?hideDivider=${l} ?borderRight=${t}>
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center" ?hideDivider=${l} ?borderRight=${t}>
                        <dss-icon-button icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            `});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: ' '
    }
  },
  args: {
    hideHeader: false,
    hideFooter: false,
    hidePaginator: false,
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
            <div style="width: 750px; height: 550px;">
                <dss-table>
                    \${args.hideHeader ? '' : html\`
                        <dss-table-header
                            titleText="Títol"
                            tableInfo="Actualitzat 10/03/2026, 10:46 h"
                            filtersVariant="chips"
                            filters='["Name","22"]'
                            >
                        </dss-table-header>
                    \`}
                    <dss-table-grid config=\${JSON.stringify(tableConfig)}>
                        <dss-thead>
                            \${renderHeaders(args.enableGrid)}
                        </dss-thead>
                        <dss-tbody>
                            \${renderRows(1, args.enableGrid)}
                            \${renderRows(1, args.enableGrid, true)}
                            \${renderRows(4, args.enableGrid)}
                            \${renderRows(1, args.enableGrid, true)}
                            \${renderRows(3, args.enableGrid, false, true)}
                        </dss-tbody>
                    </dss-table-grid>
                    \${args.hideFooter ? '' : html\`
                        <dss-table-footer
                            dataLength="100"
                            selectedLength="2"
                            >
                            <dss-button variant="secondary" size="md" label="Action"></dss-button>
                            <dss-button variant="primary" size="md" label="Action"></dss-button>
                        </dss-table-footer>
                    \`}
                    \${args.hidePaginator ? '' : html\`
                        <dss-table-pagination
              length="100"
              currentIndex="1"
              pageSize="10" 
            ></dss-table-pagination>
                    \`}
                </dss-table>
            </div>
        \`;
  }
}`,...n.parameters?.docs?.source}}};const u=["Playground"],g=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{n as P,g as S};
