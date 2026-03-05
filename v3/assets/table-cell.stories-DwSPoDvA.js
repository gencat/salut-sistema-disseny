import{x as s}from"./iframe-CdZ_4rdx.js";import{w as r}from"./storybook-decorators-DSS85Rnr.js";const l=`
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
  
`,S={title:"Collections/Table/Cell",argTypes:{icon:{name:"Icona",if:{arg:"variant",eq:"default"}},value:{name:"Valor"},size:{name:"Mida",control:{type:"radio"},options:["sm","md","auto"]},variant:{name:"Variant",control:{type:"radio"},options:["default","header","expanded"]},alignment:{name:"Alineació",control:{type:"radio"},options:["left","center","right"]},state:{name:"Variant",control:{type:"select"},options:["default","hover","highlight"]},showSort:{name:"Mostrar sort",control:{type:"boolean"},if:{arg:"variant",eq:"header"}},sortState:{name:"Sort State",control:{type:"radio"},options:["asc","desc","none"],if:{arg:"variant",eq:"header"}},showBorderLeft:{name:"Mostrar border left",control:{type:"boolean"}},showBorderRight:{name:"Mostrar border right",control:{type:"boolean"}},hasIndicator:{name:"Mostrar corner indicador",control:{type:"boolean"}},reverse:{name:"Invertit",control:{type:"boolean"}}}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev "}},args:{icon:"add_box",value:"Value",size:"sm",variant:"Default",alignment:"left",state:"default",showSort:!1,sortState:"none",showBorderLeft:!1,showBorderRight:!1,hasIndicator:!1,reverse:!1},render:e=>{const y=x=>{switch(x){case"sm":return 1;case"md":return 1;case"auto":return 2;case"expanded":return}};return s`
            <div style="width: 200px;" role="table">
            <div role="row">
                <dss-cell
                    variant=${e.variant}
                    size=${e.size}
                    maxLines=${y(e.size)}
                    icon=${e.variant==="default"?e.icon:void 0}
                    value=${e.variant!=="expanded"?e.value:void 0}
                    ?sort=${e.variant==="header"&&e.showSort}
                    sortState=${e.sortState}
                    align=${e.alignment}
                    ?borderLeft=${e.showBorderLeft}
                    ?borderRight=${e.showBorderRight}
                    ?hasIndicator=${e.hasIndicator}
                    ?hover=${e.state==="hover"}
                    ?highlight=${e.state==="highlight"}
                    ?reverse=${e.reverse}
                >
                    ${e.variant==="expanded"?s`
                        <div style="white-space: normal; padding:16px">
                          <dss-typography tag="p" variant="body-3" fontweight="regular">HTML Slot</dss-typography>
                        </div>
                        `:null}
                </dss-cell>
            </div>
            </div>
    `}},t={tags:["!dev"],render:()=>s`
            <div class="story-table-row" role="row">
                <dss-cell variant="header" value="Header"></dss-cell>
                <dss-cell variant="header" value="Sort" sort id="columnId"></dss-cell>
                <dss-cell variant="header" value="Sort Active" sort sortState="desc" id="columnId" currentSortedColumn="columnId"></dss-cell>
                <dss-cell variant="header" value="Align R" sort sortState="desc" align="right"></dss-cell>
                <dss-cell variant="header" value="Align C" sort sortState="desc" align="center"></dss-cell>
            </div>
        `,decorators:[r(l,"cell-column-header-style")]},o={tags:["!dev"],render:()=>s`
            <div class="story-table-row" role="row">
                <dss-cell size="sm" value="Value sm"></dss-cell>
            </div>
            <div class="story-table-row" role="row">
                <dss-cell size="md" value="Value md"></dss-cell>
            </div>
            <div class="story-table-row" role="row">
                <dss-cell size="auto" value="Auto 1 line" maxLines="2"></dss-cell>
            </div>
            <div class="story-table-row" role="row">
                <dss-cell size="auto" value="Auto 2 lines lorem ipsum dolor sit amet" maxLines="2"></dss-cell>
            </div>
        `,decorators:[r(l,"cell-column-header-style")]},d={tags:["!dev"],render:()=>s`
            <div class="story-table-row" role="row">
                <dss-cell value="Value"></dss-cell>
                <dss-cell value="Value" fontWeight="semibold"></dss-cell>
                <dss-cell value="Value" fontWeight="bold"></dss-cell>
            </div>
        `,decorators:[r(l,"cell-column-header-style")]},n={tags:["!dev"],render:()=>s`
            <div class="story-table-row" role="row">
                <dss-cell icon="add_box" value="Value">
          <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                </dss-cell>
            </div>
        `,decorators:[r(l,"cell-column-header-style")]},i={tags:["!dev"],render:()=>s`
            <div class="story-table-row" role="row">
                <dss-cell>
                    <dss-icon icon="add_box"></dss-icon>
                    <dss-link label="Link" href="#" fontsize="14px" fontweight="regular"></dss-link>
          <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                </dss-cell>
            </div>
        `,decorators:[r(l,"cell-column-header-style")]},c={tags:["!dev"],render:()=>s`
            <div class="story-table-row" role="row">
                <dss-cell icon="add_box" value="Value"></dss-cell>
            </div>
        `,decorators:[r(l,"cell-column-header-style")]},u={tags:["!dev"],render:()=>s`
            <div class="story-table-row" role="row">
                <dss-cell icon="add_box" value="Value" borderLeft borderRight></dss-cell>
                <dss-cell icon="add_box" value="Value" borderRight></dss-cell>
            </div>
        `,decorators:[r(l,"cell-column-header-style")]},v={tags:["!dev"],render:()=>s`
            <div class="story-table-row" role="row">
                <dss-cell icon="add_box" value="Left" borderLeft borderRight></dss-cell>
                <dss-cell align="center" icon="add_box" value="Center" borderRight></dss-cell>
                <dss-cell align="right" icon="add_box" value="Right" borderRight></dss-cell>
            </div>
        `,decorators:[r(l,"cell-column-header-style")]},g={tags:["!dev"],render:()=>s`
            <div class="story-table-row" role="row">
                <dss-cell icon="add_box" value="Value" borderLeft borderRight hasIndicator></dss-cell>
            </div>
        `,decorators:[r(l,"cell-column-header-style")]},b={tags:["!dev"],render:()=>s`
            <div class="story-table-row" role="row">
                <dss-cell hideDivider icon="add_box" value="Value"></dss-cell>
            </div>
        `,decorators:[r(l,"cell-column-header-style")]},m={tags:["!dev"],render:()=>s`
            <div class="story-table-row" role="row">
                <dss-cell icon="add_box" value="reverse" align="center" reverse>
                </dss-cell>
                <dss-cell icon="add_box" value="reverse" align="center" reverse>
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                </dss-cell>
            </div>
        `,decorators:[r(l,"cell-column-header-style")]},p={tags:["!dev"],render:()=>s`
            <div class="story-table-row" role="row">
                <dss-cell value="22" icon="favorite_border" reverse slotMaxWidth>
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                </dss-cell>
            </div>
        `,decorators:[r(l,"cell-column-header-style")]},h={tags:["!dev"],render:()=>s`
            <dss-table-main config=${JSON.stringify({gridTemplateColumns:"repeat(3, 200px) 50px"})}>
                <dss-tbody>
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
                </dss-tbody>
            </dss-table-main>
        `,decorators:[r(l,"xxxx-style")]},w={tags:["!dev"],render:()=>{const e={gridTemplateColumns:"50px repeat(4, 150px) 100px"},y=[{id:"delete",label:"Delete",icon:"delete"},{id:"duplicate",label:"Duplicate",icon:"content_copy"},{id:"more",label:"More",icon:"more_vert"}];return s`
            <dss-table-main config=${JSON.stringify(e)}>
                <dss-tbody>
                    <dss-row>
                        <dss-cell align="center">
                            <dss-checkbox label="Label" hideLabel/>
                        </dss-cell>

                        <dss-cell slotMaxWidth>
                            <dss-input icon="add_box" size="sm" label="Label" hideLabel />
                        </dss-cell>

                        <dss-cell align="center" icon="moving" slotMaxWidth>
                            <dss-progress-indicator percentage="68" state="info" hidePercentage></dss-progress-indicator>
                        </dss-cell>

                        <dss-cell align="center">
                            <dss-button variant="secondary" size="sm" icon="add_box" label="Label"></dss-button>
                        </dss-cell>

                        <dss-cell align="center">
                            <dss-badge state="danger-high" size="md" text="Text"></dss-badge>
                        </dss-cell>

                        <dss-cell align="center">
                            <dss-icon-button icon="edit" label="Label"></dss-icon-button>
                            <div>
                                <dss-icon-button icon="more_vert" label="Label" hideTooltip></dss-icon-button>
                                <dss-context-menu items=${JSON.stringify(y)}></dss-context-menu>
                            </div>
                        </dss-cell>
                    </dss-row>
                </dss-tbody>
            </dss-table-main>
        `},decorators:[r(l,"xxxx-style")]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev '
    }
  },
  args: {
    icon: 'add_box',
    value: 'Value',
    size: 'sm',
    variant: 'Default',
    alignment: 'left',
    state: 'default',
    showSort: false,
    sortState: 'none',
    showBorderLeft: false,
    showBorderRight: false,
    hasIndicator: false,
    reverse: false
  },
  render: (args: any) => {
    const getMaxLines = (size: string) => {
      switch (size) {
        case 'sm':
          return 1;
        case 'md':
          return 1;
        case 'auto':
          return 2;
        // Permet que el contingut defineixi les línies
        case 'expanded':
          return undefined;
        // Permet que el contingut defineixi les línies
      }
    };
    return html\`
            <div style="width: 200px;" role="table">
            <div role="row">
                <dss-cell
                    variant=\${args.variant}
                    size=\${args.size}
                    maxLines=\${getMaxLines(args.size)}
                    icon=\${args.variant === 'default' ? args.icon : undefined}
                    value=\${args.variant !== 'expanded' ? args.value : undefined}
                    ?sort=\${args.variant === 'header' && args.showSort}
                    sortState=\${args.sortState}
                    align=\${args.alignment}
                    ?borderLeft=\${args.showBorderLeft}
                    ?borderRight=\${args.showBorderRight}
                    ?hasIndicator=\${args.hasIndicator}
                    ?hover=\${args.state === 'hover'}
                    ?highlight=\${args.state === 'highlight'}
                    ?reverse=\${args.reverse}
                >
                    \${args.variant === 'expanded' ? html\`
                        <div style="white-space: normal; padding:16px">
                          <dss-typography tag="p" variant="body-3" fontweight="regular">HTML Slot</dss-typography>
                        </div>
                        \` : null}
                </dss-cell>
            </div>
            </div>
    \`;
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="story-table-row" role="row">
                <dss-cell variant="header" value="Header"></dss-cell>
                <dss-cell variant="header" value="Sort" sort id="columnId"></dss-cell>
                <dss-cell variant="header" value="Sort Active" sort sortState="desc" id="columnId" currentSortedColumn="columnId"></dss-cell>
                <dss-cell variant="header" value="Align R" sort sortState="desc" align="right"></dss-cell>
                <dss-cell variant="header" value="Align C" sort sortState="desc" align="center"></dss-cell>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'cell-column-header-style')]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="story-table-row" role="row">
                <dss-cell size="sm" value="Value sm"></dss-cell>
            </div>
            <div class="story-table-row" role="row">
                <dss-cell size="md" value="Value md"></dss-cell>
            </div>
            <div class="story-table-row" role="row">
                <dss-cell size="auto" value="Auto 1 line" maxLines="2"></dss-cell>
            </div>
            <div class="story-table-row" role="row">
                <dss-cell size="auto" value="Auto 2 lines lorem ipsum dolor sit amet" maxLines="2"></dss-cell>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'cell-column-header-style')]
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="story-table-row" role="row">
                <dss-cell value="Value"></dss-cell>
                <dss-cell value="Value" fontWeight="semibold"></dss-cell>
                <dss-cell value="Value" fontWeight="bold"></dss-cell>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'cell-column-header-style')]
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="story-table-row" role="row">
                <dss-cell icon="add_box" value="Value">
          <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                </dss-cell>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'cell-column-header-style')]
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="story-table-row" role="row">
                <dss-cell>
                    <dss-icon icon="add_box"></dss-icon>
                    <dss-link label="Link" href="#" fontsize="14px" fontweight="regular"></dss-link>
          <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                </dss-cell>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'cell-column-header-style')]
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="story-table-row" role="row">
                <dss-cell icon="add_box" value="Value"></dss-cell>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'cell-column-header-style')]
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="story-table-row" role="row">
                <dss-cell icon="add_box" value="Value" borderLeft borderRight></dss-cell>
                <dss-cell icon="add_box" value="Value" borderRight></dss-cell>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'cell-column-header-style')]
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="story-table-row" role="row">
                <dss-cell icon="add_box" value="Left" borderLeft borderRight></dss-cell>
                <dss-cell align="center" icon="add_box" value="Center" borderRight></dss-cell>
                <dss-cell align="right" icon="add_box" value="Right" borderRight></dss-cell>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'cell-column-header-style')]
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="story-table-row" role="row">
                <dss-cell icon="add_box" value="Value" borderLeft borderRight hasIndicator></dss-cell>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'cell-column-header-style')]
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="story-table-row" role="row">
                <dss-cell hideDivider icon="add_box" value="Value"></dss-cell>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'cell-column-header-style')]
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="story-table-row" role="row">
                <dss-cell icon="add_box" value="reverse" align="center" reverse>
                </dss-cell>
                <dss-cell icon="add_box" value="reverse" align="center" reverse>
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                </dss-cell>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'cell-column-header-style')]
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="story-table-row" role="row">
                <dss-cell value="22" icon="favorite_border" reverse slotMaxWidth>
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                </dss-cell>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'cell-column-header-style')]
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
                </dss-tbody>
            </dss-table-main>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'xxxx-style')]
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const tableConfig = {
      gridTemplateColumns: '50px repeat(4, 150px) 100px'
    };
    const rowMenu = [{
      id: 'delete',
      label: 'Delete',
      icon: 'delete'
    }, {
      id: 'duplicate',
      label: 'Duplicate',
      icon: 'content_copy'
    }, {
      id: 'more',
      label: 'More',
      icon: 'more_vert'
    }];
    return html\`
            <dss-table-main config=\${JSON.stringify(tableConfig)}>
                <dss-tbody>
                    <dss-row>
                        <dss-cell align="center">
                            <dss-checkbox label="Label" hideLabel/>
                        </dss-cell>

                        <dss-cell slotMaxWidth>
                            <dss-input icon="add_box" size="sm" label="Label" hideLabel />
                        </dss-cell>

                        <dss-cell align="center" icon="moving" slotMaxWidth>
                            <dss-progress-indicator percentage="68" state="info" hidePercentage></dss-progress-indicator>
                        </dss-cell>

                        <dss-cell align="center">
                            <dss-button variant="secondary" size="sm" icon="add_box" label="Label"></dss-button>
                        </dss-cell>

                        <dss-cell align="center">
                            <dss-badge state="danger-high" size="md" text="Text"></dss-badge>
                        </dss-cell>

                        <dss-cell align="center">
                            <dss-icon-button icon="edit" label="Label"></dss-icon-button>
                            <div>
                                <dss-icon-button icon="more_vert" label="Label" hideTooltip></dss-icon-button>
                                <dss-context-menu items=\${JSON.stringify(rowMenu)}></dss-context-menu>
                            </div>
                        </dss-cell>
                    </dss-row>
                </dss-tbody>
            </dss-table-main>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'xxxx-style')]
}`,...w.parameters?.docs?.source}}};const f=["Playground","ColumnHeader","Sizes","Content","HybridContent","SlotContent","Icon","Borders","Alignment","Indicator","HideDivider","Reverse","SlotMaxWidth","Expanded","UseCases"],z=Object.freeze(Object.defineProperty({__proto__:null,Alignment:v,Borders:u,ColumnHeader:t,Content:d,Expanded:h,HideDivider:b,HybridContent:n,Icon:c,Indicator:g,Playground:a,Reverse:m,Sizes:o,SlotContent:i,SlotMaxWidth:p,UseCases:w,__namedExportsOrder:f,default:S},Symbol.toStringTag,{value:"Module"}));export{v as A,u as B,t as C,h as E,n as H,c as I,a as P,m as R,z as S,w as U,d as a,i as b,o as c,g as d,b as e,p as f};
