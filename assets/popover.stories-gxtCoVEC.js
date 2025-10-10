import{x as t}from"./lit-html-D6cejpwM.js";const E={title:"Components/Popover",argTypes:{open:{name:"Obert",control:{type:"boolean"}},variant:{name:"Variant",control:{type:"radio"},options:["default","filter"]},hideHeader:{name:"Amagar capçalera",control:{type:"boolean"}},showCloseIcon:{name:"Icona per tancar",control:{type:"boolean"},if:{arg:"hideHeader",eq:!1}},title:{name:"Títol",control:{type:"text"},if:{arg:"hideHeader",eq:!1}},showActionIcon:{name:"Mostrar icona d'acció",control:{type:"boolean"},if:{arg:"hideHeader",eq:!1}},actionIcon:{name:"Icona d'acció",control:{type:"text"},if:{arg:"hideHeader",eq:!1}},position:{name:"Posició",control:{type:"radio"},options:["top","bottom","left","right"],if:{arg:"variant",eq:"default"}},contentType:{name:"Tipus de contingut",control:{type:"radio"},options:["Default","Item List"],if:{arg:"variant",eq:"default"}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=699-42485&m=dev"}},args:{open:!1,variant:"default",hideHeader:!1,showCloseIcon:!0,title:"Title",position:"top",showActionIcon:!1,actionIcon:"arrow_forward",contentType:"Default"},render:e=>{const q=t`
            <dss-popover-body slot="body">
                <dss-typography variant="body-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
                </dss-typography>
                <dss-link label="Link" href="#" icon="add_box" fontWeight="semibold"></dss-link>
            </dss-popover-body>
        `,j=t`
            <dss-item-list slot="item-list" items='[
                { "title": "Title 1", "subtitle": "Subitle 1", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                { "title": "Title 2", "subtitle": "Subitle 2", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                { "title": "Title 3", "subtitle": "Subitle 3", "decorativeIcon": "add_box", "actionIcon": "add_box" }
                ]'>
            </dss-item-list>
        `,W=t`
            <dss-popover-body slot="body">
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
                    <dss-input-dropdown type="default" multiple elements={myFilters}>
                        <label slot="label" htmlFor="chtDropdown1">Indicadors crónics</label>
                        <input id="chtDropdown1" slot="input" type="text" />
                    </dss-input-dropdown>
                    <dss-input-dropdown type="default" multiple elements={myFilters}>
                        <label slot="label" htmlFor="chtDropdown2">Indicadors genérics</label>
                        <input id="chtDropdown2" slot="input" type="text"/>
                    </dss-input-dropdown>
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
            <dss-popover-footer slot="footer">
                <dss-button size="md" label="Netejar" variant="subtle"></dss-button>
                <dss-button size="md" label="Aplicar"></dss-button>
            </dss-popover-footer>		
        `;return t`
            ${e.variant==="default"?t`
                    <div style="height:600px;display: flex; align-items:center; justify-content:center; width:900px;">
                        <div style="width: fit-content;">
                            <dss-button label="Obrir popover"></dss-button>
                            <dss-popover 
                                title="${e.title}" 
                                position="${e.position}" 
                                actionIcon="${e.showActionIcon?e.actionIcon:void 0}" 
                                ?open=${e.open}
                                ?hideCloseIcon=${!e.showCloseIcon}
                                ?hideHeader=${e.hideHeader}>
                                ${e.contentType==="Default"?t`${q}`:t`${j}`}
                            </dss-popover>
                        </div>
                    </div>
                `:t`
                    <div style="height:600px;display: flex; align-items:start; justify-content:center; width:900px;">
                        <div style="width: fit-content;">
                            <dss-button variant="secondary" label="Filtres"></dss-button>
                            <dss-popover 
                                variant="filter"
                                title="${e.title}" 
                                ?open=${e.open}
                                ?hideCloseIcon=${!e.showCloseIcon}
                                actionIcon="${e.showActionIcon?e.actionIcon:void 0}"
                                ?hideHeader=${e.hideHeader}>
                                ${W}
                            </dss-popover>
                        </div>
                    </div>
                `}
      `}},s={tags:["!dev"],render:()=>t`
     <div class="demo-wrapper">
      <dss-button label="Obrir popover"></dss-button>
      <dss-popover title="Popover" position="top">
        <dss-popover-body slot="body">
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                    <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
        </dss-popover-body>
      </dss-popover>
    </div> 
    `},l={tags:["!dev"],render:()=>t`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover title="Popover" position="top">
                    <dss-item-list slot="item-list" items='[
                        { "title": "Title 1", "subtitle": "Subitle 1", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                        { "title": "Title 2", "subtitle": "Subitle 2", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                        { "title": "Title 3", "subtitle": "Subitle 3", "decorativeIcon": "add_box", "actionIcon": "add_box" }
                        ]'>
                    </dss-item-list>
                </dss-popover>
            </div>
    `},i={tags:["!dev"],render:()=>t`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover title="Popover" position="top">
                    <dss-popover-body slot="body">
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                        <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                    </dss-popover-body>
                </dss-popover>
            </div>
    `},d={tags:["!dev"],render:()=>t`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover title="Popover" position="right">
                    <dss-popover-body slot="body">
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                        <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                    </dss-popover-body>
                </dss-popover>
            </div>
    `},n={tags:["!dev"],render:()=>t`
      <div class="demo-wrapper">
            <dss-button label="Obrir popover"></dss-button>
                <dss-popover title="Popover" position="bottom">
                    <dss-popover-body slot="body">
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                        <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                    </dss-popover-body>
                </dss-popover>
            </div>
    `},a={tags:["!dev"],render:()=>t`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover title="Popover" position="left">
                    <dss-popover-body slot="body">       
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                        <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                    </dss-popover-body>
                </dss-popover>
            </div>
    `},c={tags:["!dev"],render:()=>t`
            <div class="filter-wrapper">
                <div class="demo-wrapper">
                    <dss-button label="Filters" size="sm" variant="secondary"></dss-button>
                    <dss-popover variant="filter" title="Popover" >
                        <dss-popover-body slot="body">
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
                                <dss-input-dropdown type="default" multiple elements={myFilters}>
                                    <label slot="label" htmlFor="chtDropdown1">Indicadors crónics</label>
                                    <input id="chtDropdown1" slot="input" type="text" />
                                </dss-input-dropdown>
                                <dss-input-dropdown type="default" multiple elements={myFilters}>
                                    <label slot="label" htmlFor="chtDropdown2">Indicadors genérics</label>
                                    <input id="chtDropdown2" slot="input" type="text"/>
                                </dss-input-dropdown>
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
                        <dss-popover-footer slot="footer">
                            <dss-button size="md" label="Netejar" variant="subtle"></dss-button>
                            <dss-button size="md" label="Aplicar"></dss-button>
                        </dss-popover-footer>
                    </dss-popover>
                </div>
            </div>
    `},r={tags:["!dev"],render:()=>t`
            <div class="filter-wrapper">
                <div class="demo-wrapper">
                    <dss-button label="Filters" size="sm" variant="secondary"></dss-button>
                    <dss-popover variant="filter" hideHeader>
                        <dss-popover-body slot="body">
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
                                <dss-input-dropdown type="default" multiple elements={myFilters}>
                                    <label slot="label" htmlFor="chtDropdown1">Indicadors crónics</label>
                                    <input id="chtDropdown1" slot="input" type="text" />
                                </dss-input-dropdown>
                                <dss-input-dropdown type="default" multiple elements={myFilters}>
                                    <label slot="label" htmlFor="chtDropdown2">Indicadors genérics</label>
                                    <input id="chtDropdown2" slot="input" type="text"/>
                                </dss-input-dropdown>
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
                        <dss-popover-footer slot="footer">
                            <dss-button size="md" label="Netejar" variant="subtle"></dss-button>
                            <dss-button size="md" label="Aplicar"></dss-button>
                        </dss-popover-footer>
                    </dss-popover>
                </div>
            </div>
    `};var p,b,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=699-42485&m=dev'
    }
  },
  args: {
    open: false,
    variant: 'default',
    hideHeader: false,
    showCloseIcon: true,
    title: 'Title',
    position: 'top',
    showActionIcon: false,
    actionIcon: 'arrow_forward',
    contentType: 'Default'
  },
  render: (args: any) => {
    const contentTypeDefault = html\`
            <dss-popover-body slot="body">
                <dss-typography variant="body-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
                </dss-typography>
                <dss-link label="Link" href="#" icon="add_box" fontWeight="semibold"></dss-link>
            </dss-popover-body>
        \`;
    const contentTypeItemList = html\`
            <dss-item-list slot="item-list" items='[
                { "title": "Title 1", "subtitle": "Subitle 1", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                { "title": "Title 2", "subtitle": "Subitle 2", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                { "title": "Title 3", "subtitle": "Subitle 3", "decorativeIcon": "add_box", "actionIcon": "add_box" }
                ]'>
            </dss-item-list>
        \`;
    const contentTypeFilter = html\`
            <dss-popover-body slot="body">
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
                    <dss-input-dropdown type="default" multiple elements={myFilters}>
                        <label slot="label" htmlFor="chtDropdown1">Indicadors crónics</label>
                        <input id="chtDropdown1" slot="input" type="text" />
                    </dss-input-dropdown>
                    <dss-input-dropdown type="default" multiple elements={myFilters}>
                        <label slot="label" htmlFor="chtDropdown2">Indicadors genérics</label>
                        <input id="chtDropdown2" slot="input" type="text"/>
                    </dss-input-dropdown>
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
            <dss-popover-footer slot="footer">
                <dss-button size="md" label="Netejar" variant="subtle"></dss-button>
                <dss-button size="md" label="Aplicar"></dss-button>
            </dss-popover-footer>		
        \`;
    return html\`
            \${args.variant === 'default' ? html\`
                    <div style="height:600px;display: flex; align-items:center; justify-content:center; width:900px;">
                        <div style="width: fit-content;">
                            <dss-button label="Obrir popover"></dss-button>
                            <dss-popover 
                                title="\${args.title}" 
                                position="\${args.position}" 
                                actionIcon="\${args.showActionIcon ? args.actionIcon : undefined}" 
                                ?open=\${args.open}
                                ?hideCloseIcon=\${!args.showCloseIcon}
                                ?hideHeader=\${args.hideHeader}>
                                \${args.contentType === 'Default' ? html\`\${contentTypeDefault}\` : html\`\${contentTypeItemList}\`}
                            </dss-popover>
                        </div>
                    </div>
                \` : html\`
                    <div style="height:600px;display: flex; align-items:start; justify-content:center; width:900px;">
                        <div style="width: fit-content;">
                            <dss-button variant="secondary" label="Filtres"></dss-button>
                            <dss-popover 
                                variant="filter"
                                title="\${args.title}" 
                                ?open=\${args.open}
                                ?hideCloseIcon=\${!args.showCloseIcon}
                                actionIcon="\${args.showActionIcon ? args.actionIcon : undefined}"
                                ?hideHeader=\${args.hideHeader}>
                                \${contentTypeFilter}
                            </dss-popover>
                        </div>
                    </div>
                \`}
      \`;
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var u,m,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="demo-wrapper">
      <dss-button label="Obrir popover"></dss-button>
      <dss-popover title="Popover" position="top">
        <dss-popover-body slot="body">
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                    <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                    <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
        </dss-popover-body>
      </dss-popover>
    </div> 
    \`;
  }
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var v,x,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover title="Popover" position="top">
                    <dss-item-list slot="item-list" items='[
                        { "title": "Title 1", "subtitle": "Subitle 1", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                        { "title": "Title 2", "subtitle": "Subitle 2", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                        { "title": "Title 3", "subtitle": "Subitle 3", "decorativeIcon": "add_box", "actionIcon": "add_box" }
                        ]'>
                    </dss-item-list>
                </dss-popover>
            </div>
    \`;
  }
}`,...(k=(x=l.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var f,g,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover title="Popover" position="top">
                    <dss-popover-body slot="body">
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                        <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                    </dss-popover-body>
                </dss-popover>
            </div>
    \`;
  }
}`,...(w=(g=i.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var C,F,I;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover title="Popover" position="right">
                    <dss-popover-body slot="body">
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                        <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                    </dss-popover-body>
                </dss-popover>
            </div>
    \`;
  }
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var S,L,P;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
            <dss-button label="Obrir popover"></dss-button>
                <dss-popover title="Popover" position="bottom">
                    <dss-popover-body slot="body">
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                        <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                    </dss-popover-body>
                </dss-popover>
            </div>
    \`;
  }
}`,...(P=(L=n.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var z,T,D;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover title="Popover" position="left">
                    <dss-popover-body slot="body">       
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.</dss-typography>
                        <dss-typography variant="body-3" tag="p">Lorem ipsum dolor sit amet.</dss-typography>
                        <dss-link label="Custom link" href="https://zeroheight.com/12913d2f0/p/645635-sistema-de-disseny-de-salut" icon="home" fontWeight="semibold"></dss-link>
                    </dss-popover-body>
                </dss-popover>
            </div>
    \`;
  }
}`,...(D=(T=a.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var _,N,$;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="filter-wrapper">
                <div class="demo-wrapper">
                    <dss-button label="Filters" size="sm" variant="secondary"></dss-button>
                    <dss-popover variant="filter" title="Popover" >
                        <dss-popover-body slot="body">
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
                                <dss-input-dropdown type="default" multiple elements={myFilters}>
                                    <label slot="label" htmlFor="chtDropdown1">Indicadors crónics</label>
                                    <input id="chtDropdown1" slot="input" type="text" />
                                </dss-input-dropdown>
                                <dss-input-dropdown type="default" multiple elements={myFilters}>
                                    <label slot="label" htmlFor="chtDropdown2">Indicadors genérics</label>
                                    <input id="chtDropdown2" slot="input" type="text"/>
                                </dss-input-dropdown>
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
                        <dss-popover-footer slot="footer">
                            <dss-button size="md" label="Netejar" variant="subtle"></dss-button>
                            <dss-button size="md" label="Aplicar"></dss-button>
                        </dss-popover-footer>
                    </dss-popover>
                </div>
            </div>
    \`;
  }
}`,...($=(N=c.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var H,O,A;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="filter-wrapper">
                <div class="demo-wrapper">
                    <dss-button label="Filters" size="sm" variant="secondary"></dss-button>
                    <dss-popover variant="filter" hideHeader>
                        <dss-popover-body slot="body">
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
                                <dss-input-dropdown type="default" multiple elements={myFilters}>
                                    <label slot="label" htmlFor="chtDropdown1">Indicadors crónics</label>
                                    <input id="chtDropdown1" slot="input" type="text" />
                                </dss-input-dropdown>
                                <dss-input-dropdown type="default" multiple elements={myFilters}>
                                    <label slot="label" htmlFor="chtDropdown2">Indicadors genérics</label>
                                    <input id="chtDropdown2" slot="input" type="text"/>
                                </dss-input-dropdown>
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
                        <dss-popover-footer slot="footer">
                            <dss-button size="md" label="Netejar" variant="subtle"></dss-button>
                            <dss-button size="md" label="Aplicar"></dss-button>
                        </dss-popover-footer>
                    </dss-popover>
                </div>
            </div>
    \`;
  }
}`,...(A=(O=r.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const B=["Playground","ByDefault","ItemList","PositionTop","PositionRight","PositionBottom","PositionLeft","FilterHeader","FilterNoHeader"],K=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:s,FilterHeader:c,FilterNoHeader:r,ItemList:l,Playground:o,PositionBottom:n,PositionLeft:a,PositionRight:d,PositionTop:i,__namedExportsOrder:B,default:E},Symbol.toStringTag,{value:"Module"}));export{s as B,c as F,l as I,o as P,K as S,i as a,d as b,n as c,a as d,r as e};
