import{x as t}from"./lit-html-D6cejpwM.js";const W={title:"Components/Custom Table Header",argTypes:{},parameters:{layout:"centered"}},e={tags:["!dev"],render:()=>t`
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
    `};var b,m,c;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var v,f,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,E,y;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(y=(E=u.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var T,x,g;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var F,N,z;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(N=s.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var A,S,I;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var j,C,_;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(C=a.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var M,L,D;q.parameters={...q.parameters,docs:{...(M=q.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(L=q.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var O,B,H;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(B=i.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var P,k,G;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(k=r.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,U,V;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const X=["Title","NoTitle","NoActionFilters","NoActionExpand","NoActionExpandButFilters","Filters","FiltersNoTitle","Inputs","InputsNoTitle","CustomActions","CombinedFilters","CombinedFiltersNoTitle"],Z=Object.freeze(Object.defineProperty({__proto__:null,CombinedFilters:d,CombinedFiltersNoTitle:p,CustomActions:r,Filters:n,FiltersNoTitle:a,Inputs:q,InputsNoTitle:i,NoActionExpand:l,NoActionExpandButFilters:s,NoActionFilters:u,NoTitle:o,Title:e,__namedExportsOrder:X,default:W},Symbol.toStringTag,{value:"Module"}));export{d as C,n as F,q as I,o as N,Z as S,e as T,u as a,l as b,s as c,a as d,i as e,p as f,r as g};
