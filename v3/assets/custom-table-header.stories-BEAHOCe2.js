import{x as t}from"./iframe-CdZ_4rdx.js";const b={title:"Components/Custom Table Header",argTypes:{},parameters:{layout:"centered"}},e={tags:["!dev"],render:()=>t`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          showActionFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h" 
          >
        </dss-custom-table-header>
      </div>
    `},o={tags:["!dev"],render:()=>t`
      <div class="table-wrapper">
        <dss-custom-table-header
          showConfig 
          showActionFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},u={tags:["!dev"],render:()=>t`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},l={tags:["!dev"],render:()=>t`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          hideActionExpand
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},s={tags:["!dev"],render:()=>t`
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
    `},n={tags:["!dev"],render:()=>t`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table" 
          showActionFilters
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},a={tags:["!dev"],render:()=>t`
      <div class="table-wrapper">
        <dss-custom-table-header
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]' 
          tableInfo="Actualitzat 18 de juliol 2024"
          showActionFilters
          >
        </dss-custom-table-header>
      </div>
    `},q={tags:["!dev"],render:()=>t`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          tableTitle="My custom table" 
          showConfig 
          innerFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
          <div class="dss-table-filters" slot="filters">
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
                <label slot="label" for="inputsTitle1">Filter 1</label>
                <input id="inputsTitle1" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsTitle2">Filter 2</label>
              <input id="inputsTitle2" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsTitle3">Filter 3</label>
              <input id="inputsTitle3" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-button label="Netejar filtres" icon="filter_list_off" size="sm" variant="subtle" style="margin-left:8px"></dss-button>
          </div>
        </dss-custom-table-header>
      </div>
    `},i={tags:["!dev"],render:()=>t`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          showConfig 
          innerFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
          <div class="dss-table-filters" slot="filters">
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
                <label slot="label" for="inputsNoTitle1">Filter 1</label>
                <input id="inputsNoTitle1" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsNoTitle2">Filter 2</label>
              <input id="inputsNoTitle2" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsNoTitle3">Filter 3</label>
              <input id="inputsNoTitle3" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-button label="Netejar filtres" icon="filter_list_off" size="sm" variant="subtle" style="margin-left:8px"></dss-button>
          </div>
        </dss-custom-table-header>
      </div>
    `},r={tags:["!dev"],render:()=>t`
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
    `},d={tags:["!dev"],render:()=>t`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          tableTitle="Títol de la taula"
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          showConfig 
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
          innerFilters
          enableCombinedFilters
          >
          <div class="dss-table-filters" slot="filters">
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
                <label slot="label" for="inputsNoTitle1">Filter 1</label>
                <input id="inputsNoTitle1" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsNoTitle2">Filter 2</label>
              <input id="inputsNoTitle2" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsNoTitle3">Filter 3</label>
              <input id="inputsNoTitle3" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-button label="Netejar filtres" icon="filter_list_off" size="sm" variant="subtle" style="margin-left:8px"></dss-button>
          </div>
        </dss-custom-table-header>
      </div>
    `},p={tags:["!dev"],render:()=>t`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          showConfig 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
          innerFilters
          enableCombinedFilters
          >
          <div class="dss-table-filters" slot="filters">
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
                <label slot="label" for="inputsNoTitle1">Filter 1</label>
                <input id="inputsNoTitle1" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsNoTitle2">Filter 2</label>
              <input id="inputsNoTitle2" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsNoTitle3">Filter 3</label>
              <input id="inputsNoTitle3" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-button label="Netejar filtres" icon="filter_list_off" size="sm" variant="subtle" style="margin-left:8px"></dss-button>
          </div>
        </dss-custom-table-header>
      </div>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
          <div class="dss-table-filters" slot="filters">
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
                <label slot="label" for="inputsTitle1">Filter 1</label>
                <input id="inputsTitle1" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsTitle2">Filter 2</label>
              <input id="inputsTitle2" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsTitle3">Filter 3</label>
              <input id="inputsTitle3" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-button label="Netejar filtres" icon="filter_list_off" size="sm" variant="subtle" style="margin-left:8px"></dss-button>
          </div>
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...q.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper-inputs">
        <dss-custom-table-header
          showConfig 
          innerFilters
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
          <div class="dss-table-filters" slot="filters">
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
                <label slot="label" for="inputsNoTitle1">Filter 1</label>
                <input id="inputsNoTitle1" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsNoTitle2">Filter 2</label>
              <input id="inputsNoTitle2" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsNoTitle3">Filter 3</label>
              <input id="inputsNoTitle3" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-button label="Netejar filtres" icon="filter_list_off" size="sm" variant="subtle" style="margin-left:8px"></dss-button>
          </div>
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          <div class="dss-table-filters" slot="filters">
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
                <label slot="label" for="inputsNoTitle1">Filter 1</label>
                <input id="inputsNoTitle1" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsNoTitle2">Filter 2</label>
              <input id="inputsNoTitle2" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsNoTitle3">Filter 3</label>
              <input id="inputsNoTitle3" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-button label="Netejar filtres" icon="filter_list_off" size="sm" variant="subtle" style="margin-left:8px"></dss-button>
          </div>
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
          <div class="dss-table-filters" slot="filters">
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
                <label slot="label" for="inputsNoTitle1">Filter 1</label>
                <input id="inputsNoTitle1" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsNoTitle2">Filter 2</label>
              <input id="inputsNoTitle2" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-input-dropdown style="width:200px" inputSize="md" type="default" elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
              <label slot="label" for="inputsNoTitle3">Filter 3</label>
              <input id="inputsNoTitle3" slot="input" type="text"/>
            </dss-input-dropdown>
            <dss-button label="Netejar filtres" icon="filter_list_off" size="sm" variant="subtle" style="margin-left:8px"></dss-button>
          </div>
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...p.parameters?.docs?.source}}};const m=["Title","NoTitle","NoActionFilters","NoActionExpand","NoActionExpandButFilters","Filters","FiltersNoTitle","Inputs","InputsNoTitle","CustomActions","CombinedFilters","CombinedFiltersNoTitle"],v=Object.freeze(Object.defineProperty({__proto__:null,CombinedFilters:d,CombinedFiltersNoTitle:p,CustomActions:r,Filters:n,FiltersNoTitle:a,Inputs:q,InputsNoTitle:i,NoActionExpand:l,NoActionExpandButFilters:s,NoActionFilters:u,NoTitle:o,Title:e,__namedExportsOrder:m,default:b},Symbol.toStringTag,{value:"Module"}));export{d as C,n as F,q as I,o as N,v as S,e as T,u as a,l as b,s as c,a as d,i as e,p as f,r as g};
