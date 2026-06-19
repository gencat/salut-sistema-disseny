import{x as t}from"./iframe-CqPuVMaj.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const l=`
    .table-wrapper {
        width: 900px;
    }
`,g={title:"Collections/Table/Header",argTypes:{title:{name:"Títol"},info:{name:"Informació de la taula"},hideConfig:{name:"Amaga botó configurar taula",control:{type:"boolean"}},hideFilters:{name:"Amaga botó filtres",control:{type:"boolean"}},hideExpand:{name:"Amaga botó expandir/reduir",control:{type:"boolean"}},filtersVariant:{name:"Variant",control:{type:"select"},options:["none","chips","slot","combined"]},hasCustomActions:{name:"Mostra accions personalitzades",control:{type:"boolean"}},numActions:{name:"Número d'accions personalitzades",control:{type:"number",min:1,max:2},if:{arg:"hasCustomActions"}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev "}},args:{title:"Títol",info:"Actualitzat 18 de juliol 2024, 10:24 h",hideConfig:!1,hideFilters:!1,hideExpand:!1,filtersVariant:"none",hasCustomActions:!1,numActions:1},render:e=>{const y=["Lorem","Ipsum","Dolor","Sit","Amet"],v=[{label:"Filtre 1",value:"1"},{label:"Filtre 2",value:"2"},{label:"Filtre 3",value:"3"}];return t`
       <div style="width: 900px;">
                <dss-table-header
                    titleText=${e.title}
                    tableInfo=${e.info}
                    ?hideConfigAction=${e.hideConfig}
                    ?hideFilterAction=${e.hideFilters}
                    ?hideExpandAction=${e.hideExpand}
                    filtersVariant=${e.filtersVariant}
                    filters=${e.filtersVariant==="chips"||e.filtersVariant==="combined"?JSON.stringify(y):"[]"}
                    ?hasCustomActions=${e.hasCustomActions}
                    >
                    ${e.filtersVariant==="slot"||e.filtersVariant==="combined"?t`
                        <div class="dss-table-filters" slot="filters">
                            <dss-select label='Fitre 1' size="md" elements=${JSON.stringify(v)} style="width:200px"></dss-select>
                            <dss-select label='Fitre 2' size="md" elements=${JSON.stringify(v)} style="width:200px"></dss-select>
                            <dss-select label='Fitre 3' size="md" elements=${JSON.stringify(v)} style="width:200px"></dss-select>
                            <dss-button label="Netejar filtres" icon="filter_list_off" size="md" variant="subtle" style="margin-left:8px"></dss-button>
                        </div>
                    `:""}
                    ${e.hasCustomActions?t`
                        <div slot="custom-actions">
                            <dss-button icon="add_box" label="Label"></dss-button>
                            ${e.numActions===2?t`<dss-button icon="add_box" label="Label"></dss-button>`:""}
                        </div>
                    `:""}
                    
                </dss-table-header>
            </div>
    `}},a={tags:["!dev"],render:()=>t`
            XXXX
        `,decorators:[s(l,"xxxx-style")]},r={tags:["!dev"],render:()=>t`
            <div class="table-wrapper">
                <dss-table-header
                    titleText="Títol"
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h" 
                    >
                </dss-table-header>
            </div>
        `,decorators:[s(l,"theader-title-style")]},d={tags:["!dev"],render:()=>t`
            <div class="table-wrapper">
                <dss-table-header
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    >
                </dss-table-header>
            </div>
        `,decorators:[s(l,"theader-no-title-style")]},o={tags:["!dev"],render:()=>t`
            <div class="table-wrapper">
                <dss-table-header
                    titleText="Títol"
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    hideFilterAction
                    >
                </dss-table-header>
            </div>
        `,decorators:[s(l,"theader-no-action-filters-style")]},n={tags:["!dev"],render:()=>t`
            <div class="table-wrapper">
                <dss-table-header
                    titleText="Títol"
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    hideExpandAction
                    >
                </dss-table-header>
            </div>
        `,decorators:[s(l,"theader-no-action-expand-style")]},c={tags:["!dev"],render:()=>t`
            <div class="table-wrapper">
                <dss-table-header
                    titleText="Títol"
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    filtersVariant="chips"
                    filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
                    >
                </dss-table-header>
            </div>
        `,decorators:[s(l,"theader-filters-chip-style")]},b={tags:["!dev"],render:()=>t`
            <div class="table-wrapper">
                <dss-table-header
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    filtersVariant="chips"
                    filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
                    >
                </dss-table-header>
            </div>
        `,decorators:[s(l,"theader-filters-chip-no-title-style")]},p={tags:["!dev"],render:()=>{const e=[{label:"Filtre 1",value:"1"},{label:"Filtre 2",value:"2"},{label:"Filtre 3",value:"3"}];return t`
            <div class="table-wrapper table-wrapper-inputs">
                <dss-table-header
                    titleText="Títol" 
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    filtersVariant="slot"
                    >
                    <div class="dss-table-filters" slot="filters">
                        <dss-select label='Fitre 1' size="md" elements=${JSON.stringify(e)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 2' size="md" elements=${JSON.stringify(e)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 3' size="md" elements=${JSON.stringify(e)} style="width:200px"></dss-select>
                        <dss-button label="Netejar filtres" icon="filter_list_off" size="md" variant="subtle" style="margin-left:8px"></dss-button>
                    </div>
                </dss-table-header>
            </div>
        `}},m={tags:["!dev"],render:()=>{const e=[{label:"Filtre 1",value:"1"},{label:"Filtre 2",value:"2"},{label:"Filtre 3",value:"3"}];return t`
            <div class="table-wrapper table-wrapper-inputs">
                <dss-table-header
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    filtersVariant="slot"
                    >
                    <div class="dss-table-filters" slot="filters">
                        <dss-select label='Fitre 1' size="md" elements=${JSON.stringify(e)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 2' size="md" elements=${JSON.stringify(e)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 3' size="md" elements=${JSON.stringify(e)} style="width:200px"></dss-select>
                        <dss-button label="Netejar filtres" icon="filter_list_off" size="md" variant="subtle" style="margin-left:8px"></dss-button>
                    </div>
                </dss-table-header>
            </div>
        `}},u={tags:["!dev"],render:()=>{const e=[{label:"Filtre 1",value:"1"},{label:"Filtre 2",value:"2"},{label:"Filtre 3",value:"3"}];return t`
            <div class="table-wrapper">
                <dss-table-header
                    titleText="Títol"
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    filtersVariant="combined"
                    filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
                    >
                    <div class="dss-table-filters" slot="filters">
                        <dss-select label='Fitre 1' size="md" elements=${JSON.stringify(e)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 2' size="md" elements=${JSON.stringify(e)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 3' size="md" elements=${JSON.stringify(e)} style="width:200px"></dss-select>
                        <dss-button label="Netejar filtres" icon="filter_list_off" size="md" variant="subtle" style="margin-left:8px"></dss-button>
                    </div>
                </dss-table-header>
            </div>
        `}},f={tags:["!dev"],render:()=>{const e=[{label:"Filtre 1",value:"1"},{label:"Filtre 2",value:"2"},{label:"Filtre 3",value:"3"}];return t`
            <div class="table-wrapper">
                <dss-table-header
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    filtersVariant="combined"
                    filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
                    >
                    <div class="dss-table-filters" slot="filters">
                        <dss-select label='Fitre 1' size="md" elements=${JSON.stringify(e)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 2' size="md" elements=${JSON.stringify(e)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 3' size="md" elements=${JSON.stringify(e)} style="width:200px"></dss-select>
                        <dss-button label="Netejar filtres" icon="filter_list_off" size="md" variant="subtle" style="margin-left:8px"></dss-button>
                    </div>
                </dss-table-header>
            </div>
        `}},h={tags:["!dev"],render:()=>t`
            <div class="table-wrapper">
                <dss-table-header
                    titleText="Títol"
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h" 
                    hideConfigAction
                    hasCustomActions
                    >
                    <div slot="custom-actions">
                        <dss-button icon="add_box" label="Label"></dss-button>
                        <dss-button icon="add_box" label="Label"></dss-button>
                    </div>
                </dss-table-header>
            </div>
        `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev '
    }
  },
  args: {
    title: 'Títol',
    info: 'Actualitzat 18 de juliol 2024, 10:24 h',
    hideConfig: false,
    hideFilters: false,
    hideExpand: false,
    filtersVariant: 'none',
    hasCustomActions: false,
    numActions: 1
  },
  render: (args: any) => {
    const filterChips = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'];
    const filterOptions = [{
      label: 'Filtre 1',
      value: '1'
    }, {
      label: 'Filtre 2',
      value: '2'
    }, {
      label: 'Filtre 3',
      value: '3'
    }];
    return html\`
       <div style="width: 900px;">
                <dss-table-header
                    titleText=\${args.title}
                    tableInfo=\${args.info}
                    ?hideConfigAction=\${args.hideConfig}
                    ?hideFilterAction=\${args.hideFilters}
                    ?hideExpandAction=\${args.hideExpand}
                    filtersVariant=\${args.filtersVariant}
                    filters=\${args.filtersVariant === 'chips' || args.filtersVariant === 'combined' ? JSON.stringify(filterChips) : '[]'}
                    ?hasCustomActions=\${args.hasCustomActions}
                    >
                    \${args.filtersVariant === 'slot' || args.filtersVariant === 'combined' ? html\`
                        <div class="dss-table-filters" slot="filters">
                            <dss-select label='Fitre 1' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                            <dss-select label='Fitre 2' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                            <dss-select label='Fitre 3' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                            <dss-button label="Netejar filtres" icon="filter_list_off" size="md" variant="subtle" style="margin-left:8px"></dss-button>
                        </div>
                    \` : ''}
                    \${args.hasCustomActions ? html\`
                        <div slot="custom-actions">
                            <dss-button icon="add_box" label="Label"></dss-button>
                            \${args.numActions === 2 ? html\`<dss-button icon="add_box" label="Label"></dss-button>\` : ''}
                        </div>
                    \` : ''}
                    
                </dss-table-header>
            </div>
    \`;
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            XXXX
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'xxxx-style')]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="table-wrapper">
                <dss-table-header
                    titleText="Títol"
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h" 
                    >
                </dss-table-header>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'theader-title-style')]
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="table-wrapper">
                <dss-table-header
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    >
                </dss-table-header>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'theader-no-title-style')]
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="table-wrapper">
                <dss-table-header
                    titleText="Títol"
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    hideFilterAction
                    >
                </dss-table-header>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'theader-no-action-filters-style')]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="table-wrapper">
                <dss-table-header
                    titleText="Títol"
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    hideExpandAction
                    >
                </dss-table-header>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'theader-no-action-expand-style')]
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="table-wrapper">
                <dss-table-header
                    titleText="Títol"
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    filtersVariant="chips"
                    filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
                    >
                </dss-table-header>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'theader-filters-chip-style')]
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="table-wrapper">
                <dss-table-header
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    filtersVariant="chips"
                    filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
                    >
                </dss-table-header>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'theader-filters-chip-no-title-style')]
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const filterOptions = [{
      label: 'Filtre 1',
      value: '1'
    }, {
      label: 'Filtre 2',
      value: '2'
    }, {
      label: 'Filtre 3',
      value: '3'
    }];
    return html\`
            <div class="table-wrapper table-wrapper-inputs">
                <dss-table-header
                    titleText="Títol" 
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    filtersVariant="slot"
                    >
                    <div class="dss-table-filters" slot="filters">
                        <dss-select label='Fitre 1' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 2' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 3' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                        <dss-button label="Netejar filtres" icon="filter_list_off" size="md" variant="subtle" style="margin-left:8px"></dss-button>
                    </div>
                </dss-table-header>
            </div>
        \`;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const filterOptions = [{
      label: 'Filtre 1',
      value: '1'
    }, {
      label: 'Filtre 2',
      value: '2'
    }, {
      label: 'Filtre 3',
      value: '3'
    }];
    return html\`
            <div class="table-wrapper table-wrapper-inputs">
                <dss-table-header
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    filtersVariant="slot"
                    >
                    <div class="dss-table-filters" slot="filters">
                        <dss-select label='Fitre 1' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 2' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 3' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                        <dss-button label="Netejar filtres" icon="filter_list_off" size="md" variant="subtle" style="margin-left:8px"></dss-button>
                    </div>
                </dss-table-header>
            </div>
        \`;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const filterOptions = [{
      label: 'Filtre 1',
      value: '1'
    }, {
      label: 'Filtre 2',
      value: '2'
    }, {
      label: 'Filtre 3',
      value: '3'
    }];
    return html\`
            <div class="table-wrapper">
                <dss-table-header
                    titleText="Títol"
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    filtersVariant="combined"
                    filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
                    >
                    <div class="dss-table-filters" slot="filters">
                        <dss-select label='Fitre 1' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 2' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 3' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                        <dss-button label="Netejar filtres" icon="filter_list_off" size="md" variant="subtle" style="margin-left:8px"></dss-button>
                    </div>
                </dss-table-header>
            </div>
        \`;
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const filterOptions = [{
      label: 'Filtre 1',
      value: '1'
    }, {
      label: 'Filtre 2',
      value: '2'
    }, {
      label: 'Filtre 3',
      value: '3'
    }];
    return html\`
            <div class="table-wrapper">
                <dss-table-header
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
                    filtersVariant="combined"
                    filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
                    >
                    <div class="dss-table-filters" slot="filters">
                        <dss-select label='Fitre 1' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 2' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                        <dss-select label='Fitre 3' size="md" elements=\${JSON.stringify(filterOptions)} style="width:200px"></dss-select>
                        <dss-button label="Netejar filtres" icon="filter_list_off" size="md" variant="subtle" style="margin-left:8px"></dss-button>
                    </div>
                </dss-table-header>
            </div>
        \`;
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="table-wrapper">
                <dss-table-header
                    titleText="Títol"
                    tableInfo="Actualitzat 18 de juliol 2024, 10:24 h" 
                    hideConfigAction
                    hasCustomActions
                    >
                    <div slot="custom-actions">
                        <dss-button icon="add_box" label="Label"></dss-button>
                        <dss-button icon="add_box" label="Label"></dss-button>
                    </div>
                </dss-table-header>
            </div>
        \`;
  }
}`,...h.parameters?.docs?.source}}};const x=["Playground","XXXX","Title","NoTitle","NoActionFilters","NoActionExpand","FiltersChips","FiltersChipsNoTitle","FiltersSlot","FiltersSlotNoTitle","CombinedFilters","CombinedFiltersNoTitle","CustomActions"],S=Object.freeze(Object.defineProperty({__proto__:null,CombinedFilters:u,CombinedFiltersNoTitle:f,CustomActions:h,FiltersChips:c,FiltersChipsNoTitle:b,FiltersSlot:p,FiltersSlotNoTitle:m,NoActionExpand:n,NoActionFilters:o,NoTitle:d,Playground:i,Title:r,XXXX:a,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{u as C,c as F,d as N,i as P,S,r as T,o as a,n as b,b as c,p as d,m as e,f,h as g};
