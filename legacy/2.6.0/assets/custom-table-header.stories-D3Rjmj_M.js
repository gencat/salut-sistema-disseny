import{x as t}from"./lit-html-D6a8R3xZ.js";const H={title:"Components/Custom Table Header",argTypes:{},parameters:{layout:"centered"}},e={tags:["!dev"],render:()=>t`
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
    `},l={tags:["!dev"],render:()=>t`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},u={tags:["!dev"],render:()=>t`
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
          showConfig 
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]' 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},a={tags:["!dev"],render:()=>t`
      <div class="table-wrapper">
        <dss-custom-table-header
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]' 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},i={tags:["!dev"],render:()=>t`
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
    `},d={tags:["!dev"],render:()=>t`
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
      <div class="table-wrapper table-wrapper-popover">
        <dss-custom-table-header
          tableTitle="My custom table" 
          showConfig 
          showActionFilters
          filtersVariant="popover"
          filtersPopoverTitle="Filtres de la taula"
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]' 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
          <div slot="filters-popover-body">
            <div style="padding-top:8px;">
              <dss-input icon="search" helpText="Cerca un CIP de pacient" inputSize="md" >
                <input slot="input" aria-label="Filter CIP" id="cthPopover1" type="text" placeholder="Escriu per cercar" />
              </dss-input>
            </div>

            <dss-accordion accordionstyle="inner" titletext="Situacions especifiques">
              <div style="display:flex; flex-direction:column; gap:8px;">
                <dss-checkbox variant="default">
                  <input slot="input" id="chtCheckbox1" type="checkbox">
                  <label slot="label" for="chtCheckbox1">Label</label>
                </dss-checkbox>
                <dss-checkbox variant="default">
                  <input slot="input" id="chtCheckbox2" type="checkbox">
                  <label slot="label" for="chtCheckbox2">Label</label>
                </dss-checkbox>
                <dss-checkbox variant="default">
                  <input slot="input" id="chtCheckbox3" type="checkbox">
                  <label slot="label" for="chtCheckbox3">Label</label>
                </dss-checkbox>
              </div>
            </dss-accordion>

            <div style="position:relative;margin-top:16px;">
              <dss-input-dropdown type="default" multiple elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
                <label slot="label" for="chtDropdown1">Indicadors crónics</label>
                <input id="chtDropdown1" slot="input" type="text"/>
              </dss-input-dropdown>
            </div>

            <div style="position:relative;margin-top:16px;">
              <dss-input-dropdown type="default" multiple elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
                <label slot="label" for="chtDropdown2">Indicadors genérics</label>
                <input id="chtDropdown2" slot="input" type="text"/>
              </dss-input-dropdown>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px; margin-top:16px;">
              <dss-input-switch size="md">
                <input slot="input" id="chtSwitch1" type="checkbox">
                <label slot="label" for="chtSwitch1">Només pacients centres d'acollida</label>
              </dss-input-switch>
              <dss-input-switch size="md">
                <input slot="input" id="chtSwitch2" type="checkbox">
                <label slot="label" for="chtSwitch2">Només pendents</label>
              </dss-input-switch>
            </div>

            <div style="display:flex; justify-content:end; gap:4px; margin-top:16px;">
              <dss-button size="md" label="Netejar" variant="subtle"></dss-button>
              <dss-button size="md" label="Aplicar"></dss-button>
            </div>

                    
              </div>
        </dss-custom-table-header>
      </div>
    `};var q,p,c;e.parameters={...e.parameters,docs:{...(q=e.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var b,m,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var v,f,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var x,y,E;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(y=u.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var g,T,z;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(z=(T=s.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var A,S,I;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table" 
          showConfig 
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]' 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var C,F,N;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table-header
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]' 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...(N=(F=a.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var k,j,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(M=(j=i.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var _,D,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var P,O,B;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper-popover">
        <dss-custom-table-header
          tableTitle="My custom table" 
          showConfig 
          showActionFilters
          filtersVariant="popover"
          filtersPopoverTitle="Filtres de la taula"
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]' 
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
          <div slot="filters-popover-body">
            <div style="padding-top:8px;">
              <dss-input icon="search" helpText="Cerca un CIP de pacient" inputSize="md" >
                <input slot="input" aria-label="Filter CIP" id="cthPopover1" type="text" placeholder="Escriu per cercar" />
              </dss-input>
            </div>

            <dss-accordion accordionstyle="inner" titletext="Situacions especifiques">
              <div style="display:flex; flex-direction:column; gap:8px;">
                <dss-checkbox variant="default">
                  <input slot="input" id="chtCheckbox1" type="checkbox">
                  <label slot="label" for="chtCheckbox1">Label</label>
                </dss-checkbox>
                <dss-checkbox variant="default">
                  <input slot="input" id="chtCheckbox2" type="checkbox">
                  <label slot="label" for="chtCheckbox2">Label</label>
                </dss-checkbox>
                <dss-checkbox variant="default">
                  <input slot="input" id="chtCheckbox3" type="checkbox">
                  <label slot="label" for="chtCheckbox3">Label</label>
                </dss-checkbox>
              </div>
            </dss-accordion>

            <div style="position:relative;margin-top:16px;">
              <dss-input-dropdown type="default" multiple elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
                <label slot="label" for="chtDropdown1">Indicadors crónics</label>
                <input id="chtDropdown1" slot="input" type="text"/>
              </dss-input-dropdown>
            </div>

            <div style="position:relative;margin-top:16px;">
              <dss-input-dropdown type="default" multiple elements="[{&quot;label&quot;:&quot;Element 1&quot;, &quot;value&quot;:&quot;1&quot;},{&quot;label&quot;:&quot;Element 2&quot;, &quot;value&quot;:&quot;2&quot;},{&quot;label&quot;:&quot;Element 3&quot;, &quot;value&quot;:&quot;3&quot;},{&quot;label&quot;:&quot;Element 4&quot;, &quot;value&quot;:&quot;4&quot;}]">
                <label slot="label" for="chtDropdown2">Indicadors genérics</label>
                <input id="chtDropdown2" slot="input" type="text"/>
              </dss-input-dropdown>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px; margin-top:16px;">
              <dss-input-switch size="md">
                <input slot="input" id="chtSwitch1" type="checkbox">
                <label slot="label" for="chtSwitch1">Només pacients centres d'acollida</label>
              </dss-input-switch>
              <dss-input-switch size="md">
                <input slot="input" id="chtSwitch2" type="checkbox">
                <label slot="label" for="chtSwitch2">Només pendents</label>
              </dss-input-switch>
            </div>

            <div style="display:flex; justify-content:end; gap:4px; margin-top:16px;">
              <dss-button size="md" label="Netejar" variant="subtle"></dss-button>
              <dss-button size="md" label="Aplicar"></dss-button>
            </div>

                    
              </div>
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...(B=(O=r.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const V=["Title","NoTitle","NoActionFilters","NoActionExpand","NoActionExpandButFilters","Filters","FiltersNoTitle","Inputs","InputsNoTitle","Popover"],J=Object.freeze(Object.defineProperty({__proto__:null,Filters:n,FiltersNoTitle:a,Inputs:i,InputsNoTitle:d,NoActionExpand:u,NoActionExpandButFilters:s,NoActionFilters:l,NoTitle:o,Popover:r,Title:e,__namedExportsOrder:V,default:H},Symbol.toStringTag,{value:"Module"}));export{n as F,i as I,o as N,r as P,J as S,e as T,l as a,u as b,s as c,a as d,d as e};
