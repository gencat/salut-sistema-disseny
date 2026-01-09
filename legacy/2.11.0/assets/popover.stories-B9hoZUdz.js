import{x as t}from"./lit-html-D6cejpwM.js";import{w as o}from"./storybook-decorators-DSS85Rnr.js";const s=`
 .innerZoomElementWrapper{
        height: 600px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .filter-wrapper {
        height: 600px;
        display: flex;
        flex-direction: column;
        margin-top: 32px;
    }
    .demo-wrapper {
        position: relative;
        width: fit-content;
    }
    .demo-wrapper--filter {
        align-self: start;
    }
    .demo-related-content {
        font-size: 12px;
        color: lightgray;
    }
`,J={title:"Components/Popover",argTypes:{open:{name:"Obert",control:{type:"boolean"}},variant:{name:"Variant",control:{type:"radio"},options:["default","filter"]},hideHeader:{name:"Amagar capçalera",control:{type:"boolean"}},showCloseIcon:{name:"Icona per tancar",control:{type:"boolean"},if:{arg:"hideHeader",eq:!1}},title:{name:"Títol",control:{type:"text"},if:{arg:"hideHeader",eq:!1}},showActionIcon:{name:"Mostrar icona d'acció",control:{type:"boolean"},if:{arg:"hideHeader",eq:!1}},actionIcon:{name:"Icona d'acció",control:{type:"text"},if:{arg:"hideHeader",eq:!1}},position:{name:"Posició",control:{type:"radio"},options:["top","bottom","left","right"],if:{arg:"variant",eq:"default"}},contentType:{name:"Tipus de contingut",control:{type:"radio"},options:["Default","Item List"],if:{arg:"variant",eq:"default"}}},parameters:{layout:"centered"}},l={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=699-42485&m=dev"}},args:{open:!1,variant:"default",hideHeader:!1,showCloseIcon:!0,title:"Title",position:"top",showActionIcon:!1,actionIcon:"arrow_forward",contentType:"Default"},render:e=>{const W=t`
            <dss-popover-body slot="body">
                <dss-typography variant="body-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
                </dss-typography>
                <dss-link label="Link" href="#" icon="add_box" fontWeight="semibold"></dss-link>
            </dss-popover-body>
        `,E=t`
            <dss-item-list slot="item-list" items='[
                { "title": "Title 1", "subtitle": "Subitle 1", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                { "title": "Title 2", "subtitle": "Subitle 2", "decorativeIcon": "add_box", "actionIcon": "add_box" },
                { "title": "Title 3", "subtitle": "Subitle 3", "decorativeIcon": "add_box", "actionIcon": "add_box" }
                ]'>
            </dss-item-list>
        `,B=t`
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
                                ${e.contentType==="Default"?t`${W}`:t`${E}`}
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
                                ${B}
                            </dss-popover>
                        </div>
                    </div>
                `}
      `}},i={tags:["!dev"],render:()=>t`
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
    `,decorators:[o(s,"popover-default-style")]},d={tags:["!dev"],render:()=>t`
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
    `,decorators:[o(s,"popover-item-list-style")]},a={tags:["!dev"],render:()=>t`
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
    `,decorators:[o(s,"popover-position-top-style")]},n={tags:["!dev"],render:()=>t`
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
    `,decorators:[o(s,"popover-position-right-style")]},r={tags:["!dev"],render:()=>t`
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
    `,decorators:[o(s,"popover-position-bottom-style")]},c={tags:["!dev"],render:()=>t`
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
    `,decorators:[o(s,"popover-position-left-style")]},p={tags:["!dev"],render:()=>t`
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
    `,decorators:[o(s,"popover-no-header-style")]},b={tags:["!dev"],render:()=>t`
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
    `,decorators:[o(s,"popover-no-header-style")]};var h,u,m;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,v,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'popover-default-style')]
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var k,f,g;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'popover-item-list-style')]
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var w,C,F;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'popover-position-top-style')]
}`,...(F=(C=a.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var S,I,L;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'popover-position-right-style')]
}`,...(L=(I=n.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var z,P,T;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'popover-position-bottom-style')]
}`,...(T=(P=r.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var D,_,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'popover-position-left-style')]
}`,...(N=(_=c.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var $,H,O;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'popover-no-header-style')]
}`,...(O=(H=p.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var A,q,j;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'popover-no-header-style')]
}`,...(j=(q=b.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};const K=["Playground","ByDefault","ItemList","PositionTop","PositionRight","PositionBottom","PositionLeft","FilterHeader","FilterNoHeader"],X=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:i,FilterHeader:p,FilterNoHeader:b,ItemList:d,Playground:l,PositionBottom:r,PositionLeft:c,PositionRight:n,PositionTop:a,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{i as B,p as F,d as I,l as P,X as S,a,n as b,r as c,c as d,b as e};
