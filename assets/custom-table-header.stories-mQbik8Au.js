import{x as e}from"./iframe-DNLJd-HG.js";const h={title:"Collections/Custom Table/Header",argTypes:{},parameters:{layout:"centered"}},t={tags:["!dev"],render:()=>e`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          showActionFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h" 
          >
        </dss-custom-table-header>
      </div>
    `},s={tags:["!dev"],render:()=>e`
      <div class="table-wrapper">
        <dss-custom-table-header
          showConfig 
          showActionFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},a={tags:["!dev"],render:()=>e`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},r={tags:["!dev"],render:()=>e`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          hideActionExpand
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},l={tags:["!dev"],render:()=>e`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          showActionFilters
          hideActionExpand
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},n={tags:["!dev"],render:()=>e`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table" 
          showActionFilters
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},o={tags:["!dev"],render:()=>e`
      <div class="table-wrapper">
        <dss-custom-table-header
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]' 
          tableInfo="Actualitzat 18 de juliol 2024"
          showActionFilters
          >
        </dss-custom-table-header>
      </div>
    `},d={tags:["!dev"],render:()=>e`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          tableTitle="My custom table" 
          showConfig 
          innerFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
          ${m()}
        </dss-custom-table-header>
      </div>
    `},i={tags:["!dev"],render:()=>e`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          showConfig 
          innerFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
          ${m()}
        </dss-custom-table-header>
      </div>
    `},c={tags:["!dev"],render:()=>e`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h" 
          customActions
          >
          <div slot="header-custom-actions">
                        <dss-button icon="add_box" label="Label"></dss-button>
                        <dss-button icon="add_box" label="Label"></dss-button>
                    </div>
        </dss-custom-table-header>
      </div>
    `},u={tags:["!dev"],render:()=>e`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          tableTitle="Títol de la taula"
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          showConfig 
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
          innerFilters
          enableCombinedFilters
          >
          ${m()}
        </dss-custom-table-header>
      </div>
    `},b={tags:["!dev"],render:()=>e`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          showConfig 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
          innerFilters
          enableCombinedFilters
          >
          ${m()}
        </dss-custom-table-header>
      </div>
    `},m=()=>{const p=[{label:"Element 1",value:"1"},{label:"Element 2",value:"2"},{label:"Element 3",value:"3"},{label:"Element 4",value:"4"}];return e`
    <div class="dss-table-filters" slot="filters">
      <dss-select label="Filter 1" size="md" elements='${JSON.stringify(p)}' style="width:200px"></dss-select>
      <dss-select label="Filter 2" size="md" elements='${JSON.stringify(p)}' style="width:200px"></dss-select>
      <dss-select label="Filter 3" size="md" elements='${JSON.stringify(p)}' style="width:200px"></dss-select>
      <dss-button label="Netejar filtres" icon="filter_list_off" size="md" variant="subtle"></dss-button>
    </div>
  `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          showActionFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h" 
          >
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table-header
          showConfig 
          showActionFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          hideActionExpand
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          showActionFilters
          hideActionExpand
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table" 
          showActionFilters
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table-header
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]' 
          tableInfo="Actualitzat 18 de juliol 2024"
          showActionFilters
          >
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          tableTitle="My custom table" 
          showConfig 
          innerFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
          \${renderFiltersSlot()}
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          showConfig 
          innerFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
          \${renderFiltersSlot()}
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h" 
          customActions
          >
          <div slot="header-custom-actions">
                        <dss-button icon="add_box" label="Label"></dss-button>
                        <dss-button icon="add_box" label="Label"></dss-button>
                    </div>
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          tableTitle="Títol de la taula"
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          showConfig 
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
          innerFilters
          enableCombinedFilters
          >
          \${renderFiltersSlot()}
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          showConfig 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
          innerFilters
          enableCombinedFilters
          >
          \${renderFiltersSlot()}
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...b.parameters?.docs?.source}}};const v=["Title","NoTitle","NoActionFilters","NoActionExpand","NoActionExpandButFilters","Filters","FiltersNoTitle","Inputs","InputsNoTitle","CustomActions","CombinedFilters","CombinedFiltersNoTitle"],w=Object.freeze(Object.defineProperty({__proto__:null,CombinedFilters:u,CombinedFiltersNoTitle:b,CustomActions:c,Filters:n,FiltersNoTitle:o,Inputs:d,InputsNoTitle:i,NoActionExpand:r,NoActionExpandButFilters:l,NoActionFilters:a,NoTitle:s,Title:t,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{u as C,n as F,d as I,s as N,w as S,t as T,a,r as b,l as c,o as d,i as e,b as f,c as g};
