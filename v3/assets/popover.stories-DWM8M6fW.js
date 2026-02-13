import{x as t}from"./iframe-DLVb3rJw.js";import{w as o}from"./storybook-decorators-DSS85Rnr.js";const s=`
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
`,y={title:"Components/Popover",argTypes:{open:{name:"Obert",control:{type:"boolean"}},variant:{name:"Variant",control:{type:"radio"},options:["default","filter"]},hideHeader:{name:"Amagar capçalera",control:{type:"boolean"}},showCloseIcon:{name:"Icona per tancar",control:{type:"boolean"},if:{arg:"hideHeader",eq:!1}},title:{name:"Títol",control:{type:"text"},if:{arg:"hideHeader",eq:!1}},showActionIcon:{name:"Mostrar icona d'acció",control:{type:"boolean"},if:{arg:"hideHeader",eq:!1}},actionIcon:{name:"Icona d'acció",control:{type:"text"},if:{arg:"hideHeader",eq:!1}},position:{name:"Posició",control:{type:"radio"},options:["top","bottom","left","right"],if:{arg:"variant",eq:"default"}},contentType:{name:"Tipus de contingut",control:{type:"radio"},options:["Default","Item List"],if:{arg:"variant",eq:"default"}}},parameters:{layout:"centered"}},l={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=699-42485&m=dev"}},args:{open:!1,variant:"default",hideHeader:!1,showCloseIcon:!0,title:"Title",position:"top",showActionIcon:!1,actionIcon:"arrow_forward",contentType:"Default"},render:e=>{const h=t`
            <dss-popover-body slot="body">
                <dss-typography variant="body-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac velit non elit cursus sollicitudin. Sed vitae hendrerit lacus.
                </dss-typography>
                <dss-link label="Link" href="#" icon="add_box" fontWeight="semibold"></dss-link>
            </dss-popover-body>
        `,u=t`
            <dss-item-list slot="item-list">
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" decorativeIcon="add_box">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" decorativeIcon="add_box">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" decorativeIcon="add_box">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
            </dss-item-list>
        `,m=t`
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
                                titleText="${e.title}" 
                                position="${e.position}" 
                                actionIcon="${e.showActionIcon?e.actionIcon:void 0}" 
                                ?open=${e.open}
                                ?hideCloseIcon=${!e.showCloseIcon}
                                ?hideHeader=${e.hideHeader}>
                                ${e.contentType==="Default"?t`${h}`:t`${u}`}
                            </dss-popover>
                        </div>
                    </div>
                `:t`
                    <div style="height:600px;display: flex; align-items:start; justify-content:center; width:900px;">
                        <div style="width: fit-content;">
                            <dss-button variant="secondary" label="Filtres"></dss-button>
                            <dss-popover 
                                variant="filter"
                                titleText="${e.title}" 
                                ?open=${e.open}
                                ?hideCloseIcon=${!e.showCloseIcon}
                                actionIcon="${e.showActionIcon?e.actionIcon:void 0}"
                                ?hideHeader=${e.hideHeader}>
                                ${m}
                            </dss-popover>
                        </div>
                    </div>
                `}
      `}},i={tags:["!dev"],render:()=>t`
     <div class="demo-wrapper">
      <dss-button label="Obrir popover"></dss-button>
      <dss-popover titleText="Popover" position="top">
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
                <dss-popover titleText="Popover" position="top">
                    <dss-item-list slot="item-list">
                        <dss-item-list-base titleText="Títol" subtitle="Subtítol" decorativeIcon="add_box">
                            <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                        </dss-item-list-base>
                        <dss-item-list-base titleText="Títol" subtitle="Subtítol" decorativeIcon="add_box">
                            <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                        </dss-item-list-base>
                        <dss-item-list-base titleText="Títol" subtitle="Subtítol" decorativeIcon="add_box">
                            <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                        </dss-item-list-base>
                    </dss-item-list>
                </dss-popover>
            </div>
    `,decorators:[o(s,"popover-item-list-style")]},a={tags:["!dev"],render:()=>t`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover titleText="Popover" position="top">
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
                <dss-popover titleText="Popover" position="right">
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
                <dss-popover titleText="Popover" position="bottom">
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
                <dss-popover titleText="Popover" position="left">
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
                    <dss-popover variant="filter" titleText="Popover" >
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
    `,decorators:[o(s,"popover-no-header-style")]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
            <dss-item-list slot="item-list">
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" decorativeIcon="add_box">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" decorativeIcon="add_box">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
                <dss-item-list-base titleText="Títol" subtitle="Subtítol" decorativeIcon="add_box">
                    <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                </dss-item-list-base>
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
                                titleText="\${args.title}" 
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
                                titleText="\${args.title}" 
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="demo-wrapper">
      <dss-button label="Obrir popover"></dss-button>
      <dss-popover titleText="Popover" position="top">
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover titleText="Popover" position="top">
                    <dss-item-list slot="item-list">
                        <dss-item-list-base titleText="Títol" subtitle="Subtítol" decorativeIcon="add_box">
                            <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                        </dss-item-list-base>
                        <dss-item-list-base titleText="Títol" subtitle="Subtítol" decorativeIcon="add_box">
                            <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                        </dss-item-list-base>
                        <dss-item-list-base titleText="Títol" subtitle="Subtítol" decorativeIcon="add_box">
                            <dss-icon-button icon="add_box" label="Action"></dss-icon-button>
                        </dss-item-list-base>
                    </dss-item-list>
                </dss-popover>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'popover-item-list-style')]
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover titleText="Popover" position="top">
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover titleText="Popover" position="right">
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
            <dss-button label="Obrir popover"></dss-button>
                <dss-popover titleText="Popover" position="bottom">
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="demo-wrapper">
                <dss-button label="Obrir popover"></dss-button>
                <dss-popover titleText="Popover" position="left">
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="filter-wrapper">
                <div class="demo-wrapper">
                    <dss-button label="Filters" size="sm" variant="secondary"></dss-button>
                    <dss-popover variant="filter" titleText="Popover" >
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
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const x=["Playground","ByDefault","ItemList","PositionTop","PositionRight","PositionBottom","PositionLeft","FilterHeader","FilterNoHeader"],f=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:i,FilterHeader:p,FilterNoHeader:b,ItemList:d,Playground:l,PositionBottom:r,PositionLeft:c,PositionRight:n,PositionTop:a,__namedExportsOrder:x,default:y},Symbol.toStringTag,{value:"Module"}));export{i as B,p as F,d as I,l as P,f as S,a,n as b,r as c,c as d,b as e};
