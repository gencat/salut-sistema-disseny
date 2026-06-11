import{x as l}from"./iframe-PL0KlCAr.js";import{w as y}from"./storybook-decorators-DSS85Rnr.js";const $=`
    .story-table-row {
        display: flex;

        dss-cell {
            width: 150px;
        }
    }

    .story-table-row--expanded {
        dss-cell {
            width: 300px;
        }
    }

    .story-table-slot {
        padding: 16px;
    }  
`,C={title:"Collections/Table/Row",argTypes:{hover:{name:"Habilitar estat hover",control:{type:"boolean"}},clickable:{name:"Habilitar estat clickable",control:{type:"boolean"}},selected:{name:"Marcar como seleccionada",control:{type:"boolean"}},disabled:{name:"Marcar como deshabilitada",control:{type:"boolean"}},deleted:{name:"Marcar como eliminada",control:{type:"boolean"}},highlight:{name:"Ressaltar fila",control:{type:"boolean"}},gridTemplateColumns:{name:"Definir grid-template-columns",control:{type:"text"}}},parameters:{layout:"centered"}},r={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev "}},args:{hover:!1,clickable:!1,selected:!1,disabled:!1,deleted:!1,highlight:!1,gridTemplateColumns:"50px repeat(3, minmax(150px, 1fr)) 100px 50px"},render:e=>{const d={gridTemplateColumns:e.gridTemplateColumns};return l`
        <dss-table-main config=${JSON.stringify(d)}>
            <dss-tbody>
                <dss-row
                    ?hover=${e.hover}
                    ?clickable=${e.clickable}
                    ?selected=${e.selected}
                    ?disabled=${e.disabled}
                    ?deleted=${e.deleted}
                    ?highlight=${e.highlight}
                >
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel ?disabled=${e.disabled}/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge ?disabled=${e.disabled} size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                        <dss-icon-button icon="edit" label="Label" hideTooltip ?disabled=${e.disabled}></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    `}},i={tags:["!dev"],render:()=>l`
        <dss-table-main config=${JSON.stringify({gridTemplateColumns:"50px repeat(3, minmax(150px, 1fr)) 100px 50px"})}>
            <dss-tbody>
                <dss-row hover>
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                    <dss-icon-button icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    `},c={tags:["!dev"],render:()=>l`
        <dss-table-main config=${JSON.stringify({gridTemplateColumns:"50px repeat(3, minmax(150px, 1fr)) 100px 50px"})}>
            <dss-tbody>
                <dss-row clickable>
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                    <dss-icon-button icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    `},b={tags:["!dev"],render:()=>l`
        <dss-table-main config=${JSON.stringify({gridTemplateColumns:"50px repeat(3, minmax(150px, 1fr)) 100px 50px"})}>
            <dss-tbody>
                <dss-row selected>
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                    <dss-icon-button icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    `},u={tags:["!dev"],render:()=>l`
        <dss-table-main config=${JSON.stringify({gridTemplateColumns:"50px repeat(3, minmax(150px, 1fr)) 100px 50px"})}>
            <dss-tbody>
                <dss-row highlight>
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                    <dss-icon-button icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    `},p={tags:["!dev"],render:()=>l`
        <dss-table-main config=${JSON.stringify({gridTemplateColumns:"50px repeat(3, minmax(150px, 1fr)) 100px 50px"})}>
            <dss-tbody>
                <dss-row deleted>
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                    <dss-icon-button icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    `},g={tags:["!dev"],render:()=>l`
        <dss-table-main config=${JSON.stringify({gridTemplateColumns:"50px repeat(3, minmax(150px, 1fr)) 100px 50px"})}>
            <dss-tbody>
                <dss-row disabled>
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel disabled/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge disabled size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                    <dss-icon-button disabled icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    `},m={tags:["!dev"],render:()=>l`
            <dss-table-main config=${JSON.stringify({gridTemplateColumns:"repeat(3, 200px) 50px"})}>
                <dss-tbody>
                    <dss-row>
                        <dss-cell icon="person" value="Value"></dss-cell>
                        <dss-cell value="Value"></dss-cell>
                        <dss-cell value="Value"></dss-cell>
                        <dss-cell>
                            <dss-icon-button icon="expand_more" label="collapse" hideTooltip></dss-icon-button>
                        </dss-cell>
                    </dss-row>
                    <dss-row>
                        <dss-cell icon="person" value="Value"></dss-cell>
                        <dss-cell value="Value"></dss-cell>
                        <dss-cell value="Value"></dss-cell>
                        <dss-cell>
                            <dss-icon-button icon="expand_less" label="collapse" hideTooltip></dss-icon-button>
                        </dss-cell>
                    </dss-row>
                    <dss-row>
                        <dss-cell variant="expanded" colSpan="4">
                            <div class="TO-REPLACE story-table-slot">
                                <dss-typography tag="p" variant="body-3" fontweight="regular">Replace with your HTML</dss-typography>
                            </div>
                        </dss-cell>
                    </dss-row>
                    <dss-row>
                        <dss-cell icon="person" value="Value"></dss-cell>
                        <dss-cell value="Value"></dss-cell>
                        <dss-cell value="Value"></dss-cell>
                        <dss-cell>
                            <dss-icon-button icon="expand_more" label="collapse" hideTooltip></dss-icon-button>
                        </dss-cell>
                    </dss-row>
                </dss-tbody>
            </dss-table-main>
        `,decorators:[y($,"table-row-expanded-style")]},h={tags:["!dev"],render:()=>l`
        <dss-table-main config=${JSON.stringify({gridTemplateColumns:"repeat(3, minmax(150px, 1fr)) 100px 80px"})}>
            <dss-thead>
                ${x(!0)}
            </dss-thead>
            <dss-tbody>
                ${s(1,"Group 1",!0,!1,!1,!1)}
                ${s(1,"Group 1",!0,!0,!1,!1)}
                ${s(1,"Group 2",!0,!1,!1,!1,"expand_less")}
                ${s(3,"Subvariable",!0,!1,!1,!0,"none")}
                ${s(1,"Variable",!0,!1,!1,!1)}
                ${s(1,"Group 2",!0,!0,!1,!1)}
                ${s(1,"Group 3",!0,!1,!1,!1)}
                ${s(1,"Group 3",!0,!1,!1,!1)}
                ${s(1,"Group 3",!0,!1,!1,!1)}
            </dss-tbody>
        </dss-table-main>
    `},f={tags:["!dev"],render:()=>l`
        <dss-table-main config=${JSON.stringify({gridTemplateColumns:"repeat(3, minmax(150px, 1fr)) 100px 80px"})}>
            <dss-thead>
                ${x(!0)}
            </dss-thead>
            <dss-tbody>
                ${s(1,"Variable",!0,!1,!1,!1)}
                ${s(1,"Variable",!0,!1,!1,!1,"expand_less")}
                ${s(3,"Subvariable",!0,!1,!1,!0,"none")}
                ${s(1,"Variable",!0,!1,!1,!1)}
            </dss-tbody>
        </dss-table-main>
    `},s=(e,d="Variable",a=!1,o=!1,n=!1,w=!1,v="expand_more")=>Array.from({length:e},(Y,t)=>l`
                <dss-row>
                    <dss-cell value=${d} divider=${o?"group":"default"} ?hideDivider=${n} ?borderLeft=${a} ?borderRight=${a} ?borderTop=${a&&t===0} ?nested=${w}></dss-cell>
                    <dss-cell value="22" align="right" divider=${o?"group":"default"} ?hideDivider=${n} ?borderRight=${a} ?borderTop=${a&&t===0} ></dss-cell>
                    <dss-cell icon="calendar_today" divider=${o?"group":"default"} value="DD/MM/YYYY" align="center" ?hideDivider=${n} ?borderRight=${a} ?borderTop=${a&&t===0} ></dss-cell>
                    <dss-cell value="99" reverse divider=${o?"group":"default"} ?hideDivider=${n} ?borderRight=${a} ?borderTop=${a&&t===0}>
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell ?hideDivider=${n} ?borderRight=${a} divider=${o?"group":"default"} ?borderTop=${a&&t===0} 	>
                        <dss-icon-button icon='more_vert' label="Label" hideTooltip></dss-icon-button>
                        ${v!=="none"?l`
                        <dss-icon-button icon=${v} label="Label" hideTooltip></dss-icon-button>
                        `:""}
                    </dss-cell>
                </dss-row>
            `),x=(e=!1)=>l`
        <dss-row>
            <dss-cell variant='header' value="Column" ?borderLeft=${e} ?borderRight=${e} ?borderTop=${e}></dss-cell>
            <dss-cell variant='header' value="Column" align="right" ?borderRight=${e} ?borderTop=${e}></dss-cell>
            <dss-cell variant='header' value="Column" align="center"  ?borderRight=${e} ?borderTop=${e}></dss-cell>
            <dss-cell variant='header' value="Column" align="center" ?borderRight=${e} ?borderTop=${e}></dss-cell>
            <dss-cell variant='header' value="Column" srOnly align="center" ?borderRight=${e} ?borderTop=${e}></dss-cell>
        </dss-row>
    `;r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev '
    }
  },
  args: {
    hover: false,
    clickable: false,
    selected: false,
    disabled: false,
    deleted: false,
    highlight: false,
    gridTemplateColumns: '50px repeat(3, minmax(150px, 1fr)) 100px 50px'
  },
  render: (args: any) => {
    const tableConfig = {
      gridTemplateColumns: args.gridTemplateColumns
    };
    return html\`
        <dss-table-main config=\${JSON.stringify(tableConfig)}>
            <dss-tbody>
                <dss-row
                    ?hover=\${args.hover}
                    ?clickable=\${args.clickable}
                    ?selected=\${args.selected}
                    ?disabled=\${args.disabled}
                    ?deleted=\${args.deleted}
                    ?highlight=\${args.highlight}
                >
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel ?disabled=\${args.disabled}/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge ?disabled=\${args.disabled} size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                        <dss-icon-button icon="edit" label="Label" hideTooltip ?disabled=\${args.disabled}></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    \`;
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: '50px repeat(3, minmax(150px, 1fr)) 100px 50px'
    };
    return html\`
        <dss-table-main config=\${JSON.stringify(tableConfig)}>
            <dss-tbody>
                <dss-row hover>
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                    <dss-icon-button icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    \`;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: '50px repeat(3, minmax(150px, 1fr)) 100px 50px'
    };
    return html\`
        <dss-table-main config=\${JSON.stringify(tableConfig)}>
            <dss-tbody>
                <dss-row clickable>
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                    <dss-icon-button icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    \`;
  }
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: '50px repeat(3, minmax(150px, 1fr)) 100px 50px'
    };
    return html\`
        <dss-table-main config=\${JSON.stringify(tableConfig)}>
            <dss-tbody>
                <dss-row selected>
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                    <dss-icon-button icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    \`;
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: '50px repeat(3, minmax(150px, 1fr)) 100px 50px'
    };
    return html\`
        <dss-table-main config=\${JSON.stringify(tableConfig)}>
            <dss-tbody>
                <dss-row highlight>
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                    <dss-icon-button icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    \`;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: '50px repeat(3, minmax(150px, 1fr)) 100px 50px'
    };
    return html\`
        <dss-table-main config=\${JSON.stringify(tableConfig)}>
            <dss-tbody>
                <dss-row deleted>
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                    <dss-icon-button icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    \`;
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: '50px repeat(3, minmax(150px, 1fr)) 100px 50px'
    };
    return html\`
        <dss-table-main config=\${JSON.stringify(tableConfig)}>
            <dss-tbody>
                <dss-row disabled>
                    <dss-cell align="center">
                        <dss-checkbox label="Label" hideLabel disabled/>
                    </dss-cell>
                    <dss-cell icon="person" value="Name"></dss-cell>
                    <dss-cell value="22" align="right"></dss-cell>
                    <dss-cell icon="calendar_today" value="DD/MM/YYYY"></dss-cell>
                    <dss-cell value="99" reverse>
            <dss-icon-badge disabled size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    </dss-cell>
                    <dss-cell align="center">
                    <dss-icon-button disabled icon="edit" label="Label" hideTooltip></dss-icon-button>
                    </dss-cell>
                </dss-row>
            </dss-tbody>
        </dss-table-main>
    \`;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: 'repeat(3, 200px) 50px'
    };
    return html\`
            <dss-table-main config=\${JSON.stringify(tableConfig)}>
                <dss-tbody>
                    <dss-row>
                        <dss-cell icon="person" value="Value"></dss-cell>
                        <dss-cell value="Value"></dss-cell>
                        <dss-cell value="Value"></dss-cell>
                        <dss-cell>
                            <dss-icon-button icon="expand_more" label="collapse" hideTooltip></dss-icon-button>
                        </dss-cell>
                    </dss-row>
                    <dss-row>
                        <dss-cell icon="person" value="Value"></dss-cell>
                        <dss-cell value="Value"></dss-cell>
                        <dss-cell value="Value"></dss-cell>
                        <dss-cell>
                            <dss-icon-button icon="expand_less" label="collapse" hideTooltip></dss-icon-button>
                        </dss-cell>
                    </dss-row>
                    <dss-row>
                        <dss-cell variant="expanded" colSpan="4">
                            <div class="TO-REPLACE story-table-slot">
                                <dss-typography tag="p" variant="body-3" fontweight="regular">Replace with your HTML</dss-typography>
                            </div>
                        </dss-cell>
                    </dss-row>
                    <dss-row>
                        <dss-cell icon="person" value="Value"></dss-cell>
                        <dss-cell value="Value"></dss-cell>
                        <dss-cell value="Value"></dss-cell>
                        <dss-cell>
                            <dss-icon-button icon="expand_more" label="collapse" hideTooltip></dss-icon-button>
                        </dss-cell>
                    </dss-row>
                </dss-tbody>
            </dss-table-main>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'table-row-expanded-style')]
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: 'repeat(3, minmax(150px, 1fr)) 100px 80px'
    };
    const hasGrid = true;
    return html\`
        <dss-table-main config=\${JSON.stringify(tableConfig)}>
            <dss-thead>
                \${renderRowHeader(hasGrid)}
            </dss-thead>
            <dss-tbody>
                \${renderRows(1, 'Group 1', true, false, false, false)}
                \${renderRows(1, 'Group 1', true, true, false, false)}
                \${renderRows(1, 'Group 2', true, false, false, false, 'expand_less')}
                \${renderRows(3, 'Subvariable', true, false, false, true, 'none')}
                \${renderRows(1, 'Variable', true, false, false, false)}
                \${renderRows(1, 'Group 2', true, true, false, false)}
                \${renderRows(1, 'Group 3', true, false, false, false)}
                \${renderRows(1, 'Group 3', true, false, false, false)}
                \${renderRows(1, 'Group 3', true, false, false, false)}
            </dss-tbody>
        </dss-table-main>
    \`;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: 'repeat(3, minmax(150px, 1fr)) 100px 80px'
    };
    const hasGrid = true;
    // const isGrouped = true;
    // const hideDivider = true;
    return html\`
        <dss-table-main config=\${JSON.stringify(tableConfig)}>
            <dss-thead>
                \${renderRowHeader(hasGrid)}
            </dss-thead>
            <dss-tbody>
                \${renderRows(1, 'Variable', true, false, false, false)}
                \${renderRows(1, 'Variable', true, false, false, false, 'expand_less')}
                \${renderRows(3, 'Subvariable', true, false, false, true, 'none')}
                \${renderRows(1, 'Variable', true, false, false, false)}
            </dss-tbody>
        </dss-table-main>
    \`;
  }
}`,...f.parameters?.docs?.source}}};const T=["Playground","Hover","Clickable","Selected","Highlighted","Deleted","Disabled","Expanded","Grouped","Nested"],_=Object.freeze(Object.defineProperty({__proto__:null,Clickable:c,Deleted:p,Disabled:g,Expanded:m,Grouped:h,Highlighted:u,Hover:i,Nested:f,Playground:r,Selected:b,__namedExportsOrder:T,default:C},Symbol.toStringTag,{value:"Module"}));export{c as C,g as D,m as E,h as G,i as H,f as N,r as P,_ as S,b as a,u as b,p as c};
