import{x as t}from"./lit-html-D6a8R3xZ.js";const K={title:"Components/Custom Table Header",argTypes:{},parameters:{layout:"centered"}},e={tags:["!dev"],render:()=>t`
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
    `},s={tags:["!dev"],render:()=>t`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table"
          showConfig 
          hideActionExpand
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},u={tags:["!dev"],render:()=>t`
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
    `},a={tags:["!dev"],render:()=>t`
      <div class="table-wrapper">
        <dss-custom-table-header
          tableTitle="My custom table" 
          showActionFilters
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]'
          tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
          >
        </dss-custom-table-header>
      </div>
    `},n={tags:["!dev"],render:()=>t`
      <div class="table-wrapper">
        <dss-custom-table-header
          filters='["Lorem","Ipsum","Dolor","Sit","Amet"]' 
          tableInfo="Actualitzat 18 de juliol 2024"
          showActionFilters
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
    `},c={tags:["!dev"],render:()=>{const p=[{label:"Indicador 1",value:"indicador1"},{label:"Indicador 2",value:"indicador2"},{label:"Indicador 3",value:"indicador3"},{label:"Indicador 4",value:"indicador4"}];return t`
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
          <dss-popover-body slot="filters-popover-body">
                            <div style="display: flex; flex-direction: column; gap: 16px;">
                                <dss-input icon="search" helpText="Cerca un CIP de pacient" inputSize="md" >
                                    <input slot="input" aria-label="Filter CIP" id="cthPopover1" type="text" placeholder="Escriu per cercar" />
                                </dss-input>
                                <dss-accordion accordionstyle="inner" titletext="Situacions especifiques">
                                    <div style="display: flex; flex-direction: column; gap: 8px;">
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox1" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox1">Label</label>
                                        </dss-checkbox>
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox2" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox2">Label</label>
                                        </dss-checkbox>
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox3" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox3">Label</label>
                                        </dss-checkbox>
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox3" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox3">Label</label>
                                        </dss-checkbox>
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox3" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox3">Label</label>
                                        </dss-checkbox>
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox3" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox3">Label</label>
                                        </dss-checkbox>
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox3" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox3">Label</label>
                                        </dss-checkbox>
                                    </div>
                                </dss-accordion>
                <div style="position: relative;">
                  <dss-input-dropdown type="default" multiple .elements=${p}>
                    <label slot="label" htmlFor="chtDropdown1">Indicadors crónics</label>
                    <input id="chtDropdown1" slot="input" type="text" />
                  </dss-input-dropdown>
                </div>
                <div style="position: relative;">
                  <dss-input-dropdown type="default" multiple .elements=${p}>
                    <label slot="label" htmlFor="chtDropdown2">Indicadors genérics</label>
                    <input id="chtDropdown2" slot="input" type="text"/>
                  </dss-input-dropdown>
                </div>
                                <dss-input-switch size="sm">
                                    <input slot="input" id="chtSwitch1" type="checkbox" />
                                    <label slot="label" htmlFor="chtSwitch1">Només pacients centres d'acollida</label>
                                </dss-input-switch>
                                <dss-input-switch size="sm">
                                    <input slot="input" id="chtSwitch2" type="checkbox" />
                                    <label slot="label" htmlFor="chtSwitch2">Només pendents</label>
                                </dss-input-switch>
                            </div>
                        </dss-popover-body>
                        <dss-popover-footer slot="filters-popover-footer">
                            <dss-button size="md" label="Netejar" variant="subtle"></dss-button>
                            <dss-button size="md" label="Aplicar"></dss-button>
                        </dss-popover-footer>
        </dss-custom-table-header>
      </div>
    `}};var b,q,h;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(q=e.parameters)==null?void 0:q.docs)==null?void 0:h.source}}};var m,v,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,w,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var k,F,g;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(g=(F=s.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var E,T,A;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(T=u.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var C,z,I;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(z=a.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var S,N,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(N=n.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var L,_,M;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(_=i.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var D,P,$;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...($=(P=d.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var O,B,H;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(B=r.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var V,G,J;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const myFilters = [{
      label: 'Indicador 1',
      value: 'indicador1'
    }, {
      label: 'Indicador 2',
      value: 'indicador2'
    }, {
      label: 'Indicador 3',
      value: 'indicador3'
    }, {
      label: 'Indicador 4',
      value: 'indicador4'
    }];
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
          <dss-popover-body slot="filters-popover-body">
                            <div style="display: flex; flex-direction: column; gap: 16px;">
                                <dss-input icon="search" helpText="Cerca un CIP de pacient" inputSize="md" >
                                    <input slot="input" aria-label="Filter CIP" id="cthPopover1" type="text" placeholder="Escriu per cercar" />
                                </dss-input>
                                <dss-accordion accordionstyle="inner" titletext="Situacions especifiques">
                                    <div style="display: flex; flex-direction: column; gap: 8px;">
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox1" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox1">Label</label>
                                        </dss-checkbox>
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox2" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox2">Label</label>
                                        </dss-checkbox>
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox3" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox3">Label</label>
                                        </dss-checkbox>
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox3" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox3">Label</label>
                                        </dss-checkbox>
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox3" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox3">Label</label>
                                        </dss-checkbox>
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox3" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox3">Label</label>
                                        </dss-checkbox>
                                        <dss-checkbox variant="default">
                                            <input slot="input" id="chtCheckbox3" type="checkbox" />
                                            <label slot="label" htmlFor="chtCheckbox3">Label</label>
                                        </dss-checkbox>
                                    </div>
                                </dss-accordion>
                <div style="position: relative;">
                  <dss-input-dropdown type="default" multiple .elements=\${myFilters}>
                    <label slot="label" htmlFor="chtDropdown1">Indicadors crónics</label>
                    <input id="chtDropdown1" slot="input" type="text" />
                  </dss-input-dropdown>
                </div>
                <div style="position: relative;">
                  <dss-input-dropdown type="default" multiple .elements=\${myFilters}>
                    <label slot="label" htmlFor="chtDropdown2">Indicadors genérics</label>
                    <input id="chtDropdown2" slot="input" type="text"/>
                  </dss-input-dropdown>
                </div>
                                <dss-input-switch size="sm">
                                    <input slot="input" id="chtSwitch1" type="checkbox" />
                                    <label slot="label" htmlFor="chtSwitch1">Només pacients centres d'acollida</label>
                                </dss-input-switch>
                                <dss-input-switch size="sm">
                                    <input slot="input" id="chtSwitch2" type="checkbox" />
                                    <label slot="label" htmlFor="chtSwitch2">Només pendents</label>
                                </dss-input-switch>
                            </div>
                        </dss-popover-body>
                        <dss-popover-footer slot="filters-popover-footer">
                            <dss-button size="md" label="Netejar" variant="subtle"></dss-button>
                            <dss-button size="md" label="Aplicar"></dss-button>
                        </dss-popover-footer>
        </dss-custom-table-header>
      </div>
    \`;
  }
}`,...(J=(G=c.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Q=["Title","NoTitle","NoActionFilters","NoActionExpand","NoActionExpandButFilters","Filters","FiltersNoTitle","Inputs","InputsNoTitle","CustomActions","Popover"],U=Object.freeze(Object.defineProperty({__proto__:null,CustomActions:r,Filters:a,FiltersNoTitle:n,Inputs:i,InputsNoTitle:d,NoActionExpand:s,NoActionExpandButFilters:u,NoActionFilters:l,NoTitle:o,Popover:c,Title:e,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{r as C,a as F,i as I,o as N,c as P,U as S,e as T,l as a,s as b,u as c,n as d,d as e};
