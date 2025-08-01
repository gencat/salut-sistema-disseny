import"./lit-element-Dloa6E9d.js";import{x as e}from"./lit-html-D6a8R3xZ.js";import{w as p}from"./storybook-decorators-DSS85Rnr.js";const y=`
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 24px;
        max-width: 750px;
    }
`,ao={title:"Components/Accordion",argTypes:{hasSecondaryAction:{name:"Mostra l'acció secundària",control:{type:"boolean"}},showResults:{name:"Mostra els resultats",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},showNotifications:{name:"Mostra notificacions",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},accordionStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},showIcon:{name:" Mostra la icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},iconStatus:{name:"Estat de la icona",control:{type:"select"},options:["default","success","error","disabled"],if:{arg:"showIcon",truthy:!0}},showTitle:{name:" Mostra el títol",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"},if:{arg:"showTitle",truthy:!0}},type:{name:"Tipus",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},index:{name:"Index",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},results:{name:" Resultats",control:{type:"number"},if:{arg:"showResults",truthy:!0}},resultsText:{name:" Resultats Text",control:{type:"text"},if:{arg:"showResults",truthy:!0}},resultsState:{name:" Resultats Estat",control:{type:"select"},options:["ideal","critic","alert","info","info-alt","neutral"],if:{arg:"showResults",truthy:!0}},notifications:{name:"Notificacions",control:{type:"number"},if:{arg:"showNotifications",truthy:!0}},notificationsState:{name:"Estat de les notificacions",control:{type:"select"},options:["success","warning","error","info"],if:{arg:"showNotifications",truthy:!0}},hasCheckbox:{name:" Mostra els checkbox",control:{type:"boolean"}},checkboxLabel:{name:" Resultats Label",control:{type:"text"},if:{arg:"hasCheckbox",truthy:!0}},secondaryActionIcon:{name:"Icona de l'acció secundària",control:{type:"text"},if:{arg:"hasSecondaryAction",truthy:!0}},secondaryActionStatus:{name:"Estat de l'acció secundària",control:{type:"select"},options:["default","primary","success","warning","error","info"],if:{arg:"hasSecondaryAction",truthy:!0}}}},t={render:o=>e`
      <div style="width:600px">
          ${o.showTitle&&o.showIcon?o.hasSecondaryAction?e`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                    <input slot="input" id="accordionCheckbox" type="checkbox">
                                                    <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                            </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showResults?e`
                <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                  ${o.hasCheckbox?e`
                                                <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                            `:null}
                  <div class="my-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </dss-accordion>
              `:o.showNotifications?e`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                        <dss-checkbox variant="default" slot="checkbox">
                                                <input slot="input" id="accordionCheckbox" type="checkbox">
                                                <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                            </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                <input slot="input" id="accordionCheckbox" type="checkbox">
                                                <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                            </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showTitle&&!o.showIcon?o.hasSecondaryAction?e`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                        <dss-checkbox variant="default" slot="checkbox">
                                                    <input slot="input" id="accordionCheckbox" type="checkbox">
                                                    <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                            </dss-checkbox>
                                     `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showResults?e`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                                `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showNotifications?e`
            <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`<dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:!o.showTitle&&o.showIcon?o.hasSecondaryAction?e`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionStatus="${o.secondaryActionStatus}" secondaryActionIcon="${o.secondaryActionIcon}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showResults?e`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                        `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showNotifications?e`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                        <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                                `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:e`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                        <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                     `:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:!o.showTitle&&!o.showIcon?o.hasSecondaryAction?e`
            <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?hasCheckbox=${o.hasCheckbox}>
              ${o.hasCheckbox?e`
                  <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>
                                                `:null}
              <div class="my-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </dss-accordion>
            `:o.showResults?e`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:o.showNotifications?e`
            <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
              ${o.hasCheckbox?e`
                  <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
              <div class="my-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </dss-accordion>
            `:e`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?e`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">${o.checkboxLabel}</label>
                                                </dss-checkbox>`:null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            `:null}
          </div>
    `,args:{accordionStyle:"box",showIcon:!1,icon:"add_box",iconStatus:"default",showTitle:!1,title:"Accordion title",type:"Accordion type",index:"1",hasSecondaryAction:!1,secondaryActionIcon:"edit_document",secondaryActionStatus:"primary",showResults:!1,results:1,resultsText:"Resultats",resultsState:"ideal",showNotifications:!1,notifications:1,notificationsState:"info",hasCheckbox:!1,checkboxLabel:"Checkbox"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=623-19145&m=dev"}}},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion BOX">
          Define the accordion content here.
        </dss-accordion>
        <dss-accordion accordionStyle="inner" titleText="Accordion INNER">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `,decorators:[p(y,"accordion-style-style")]},n={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion open" isOpen>
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},i={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion type="Adreça" index="2">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box">
                    Define the accordion content here.
                </dss-accordion>
            </div>
    `},s={tags:["!dev"],render:()=>e`
        <div class="wrapper">
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7">
                        Define the accordion content here.
                    </dss-accordion>
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text">
                        Define the accordion content here.
                    </dss-accordion>
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text" resultsState="ideal">
                        Define the accordion content here.
                    </dss-accordion>
      </div>
    `,decorators:[p(y,"accordion-results-style")]},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" info="Error carrega" infoBadgeState="critic" infoBadgeIcon="sync_problem">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="success">
                    Define the accordion content here.
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="error">
                    Define the accordion content here.
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="alert">
                    Define the accordion content here.
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="info">
                    Define the accordion content here.
                </dss-accordion>
            </div>
    `,decorators:[p(y,"accordion-notifications-style")]},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionLabel="Secondary Action">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},u={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionLabel="Secondary Action" secondaryActionStatus="error">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},h={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionLabel="Secondary Action" secondaryActionDisabled>
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},b={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-accordion 
                    titleText="Accordion title" 
                    icon="add_box" 
                    hasSecondaryAction 
                    secondaryActionIcon="delete"
                    secondaryActionStatus="error" 
                    secondaryActionLabel="Secondary Action"
                    hasAlternativeAction
                    alternativeActionIcon="edit_document"
                    alternativeActionStatus="primary"
                    alternativeActionLabel="Alternative Action"
                    >
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},m={tags:["!dev"],render:()=>e`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
            <dss-checkbox variant="default" slot="checkbox">
                    <input slot="input" id="accordionCheckbox2" type="checkbox">
                    <label slot="label" for="accordionCheckbox2">Label</label>
            </dss-checkbox>
      Define the accordion content here.
    </dss-accordion>
  </div>
    `},x={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-accordion
                    titleText="Accordion title" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                >
                    Define the accordion content here.
                </dss-accordion>
            </div>
    `};var k,S,$;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: AccordionArgs) => {
    return html\`
      <div style="width:600px">
          \${args.showTitle && args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                    <input slot="input" id="accordionCheckbox" type="checkbox">
                                                    <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                            </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
                <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                  \${args.hasCheckbox ? html\`
                                                <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                            \` : null}
                  <div class="my-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </dss-accordion>
              \` : args.showNotifications ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox">
                                                <input slot="input" id="accordionCheckbox" type="checkbox">
                                                <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                            </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                <input slot="input" id="accordionCheckbox" type="checkbox">
                                                <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                            </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showTitle && !args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox">
                                                    <input slot="input" id="accordionCheckbox" type="checkbox">
                                                    <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                            </dss-checkbox>
                                     \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                                \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
            <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`<dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : !args.showTitle && args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionStatus="\${args.secondaryActionStatus}" secondaryActionIcon="\${args.secondaryActionIcon}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                                            <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                        \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                                \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                        <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                     \` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : !args.showTitle && !args.showIcon ? args.hasSecondaryAction ? html\`
            <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" hasSecondaryAction secondaryActionLabel="Secondary Action" secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?hasCheckbox=\${args.hasCheckbox}>
              \${args.hasCheckbox ? html\`
                  <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>
                                                \` : null}
              <div class="my-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
            <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
              \${args.hasCheckbox ? html\`
                  <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
              <div class="my-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <dss-checkbox variant="default" slot="checkbox">
                                                        <input slot="input" id="accordionCheckbox" type="checkbox">
                                                        <label slot="label" for="accordionCheckbox">\${args.checkboxLabel}</label>
                                                </dss-checkbox>\` : null}
                <div class="my-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </dss-accordion>
            \` : null}
          </div>
    \`;
  },
  args: {
    accordionStyle: 'box',
    showIcon: false,
    icon: 'add_box',
    iconStatus: 'default',
    showTitle: false,
    title: 'Accordion title',
    type: 'Accordion type',
    index: '1',
    hasSecondaryAction: false,
    secondaryActionIcon: 'edit_document',
    secondaryActionStatus: 'primary',
    showResults: false,
    results: 1,
    resultsText: 'Resultats',
    resultsState: 'ideal',
    showNotifications: false,
    notifications: 1,
    notificationsState: 'info',
    hasCheckbox: false,
    checkboxLabel: 'Checkbox'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=623-19145&m=dev'
    }
  }
}`,...($=(S=t.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var f,v,A;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion BOX">
          Define the accordion content here.
        </dss-accordion>
        <dss-accordion accordionStyle="inner" titleText="Accordion INNER">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-style-style')]
}`,...(A=(v=c.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var C,g,q;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion open" isOpen>
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(q=(g=n.parameters)==null?void 0:g.docs)==null?void 0:q.source}}};var w,T,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion type="Adreça" index="2">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(L=(T=i.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var I,_,D;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box">
                    Define the accordion content here.
                </dss-accordion>
            </div>
    \`;
  }
}`,...(D=(_=a.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var U,N,R;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7">
                        Define the accordion content here.
                    </dss-accordion>
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text">
                        Define the accordion content here.
                    </dss-accordion>
                    <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text" resultsState="ideal">
                        Define the accordion content here.
                    </dss-accordion>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-results-style')]
}`,...(R=(N=s.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,B,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" info="Error carrega" infoBadgeState="critic" infoBadgeIcon="sync_problem">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(O=(B=d.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var M,P,F;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="success">
                    Define the accordion content here.
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="error">
                    Define the accordion content here.
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="alert">
                    Define the accordion content here.
                </dss-accordion>
                <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="info">
                    Define the accordion content here.
                </dss-accordion>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-notifications-style')]
}`,...(F=(P=r.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var X,j,z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionLabel="Secondary Action">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(z=(j=l.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var W,H,J;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionLabel="Secondary Action" secondaryActionStatus="error">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,G,Q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionLabel="Secondary Action" secondaryActionDisabled>
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(Q=(G=h.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var V,Y,Z;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion 
                    titleText="Accordion title" 
                    icon="add_box" 
                    hasSecondaryAction 
                    secondaryActionIcon="delete"
                    secondaryActionStatus="error" 
                    secondaryActionLabel="Secondary Action"
                    hasAlternativeAction
                    alternativeActionIcon="edit_document"
                    alternativeActionStatus="primary"
                    alternativeActionLabel="Alternative Action"
                    >
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var oo,eo,to;m.parameters={...m.parameters,docs:{...(oo=m.parameters)==null?void 0:oo.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
            <dss-checkbox variant="default" slot="checkbox">
                    <input slot="input" id="accordionCheckbox2" type="checkbox">
                    <label slot="label" for="accordionCheckbox2">Label</label>
            </dss-checkbox>
      Define the accordion content here.
    </dss-accordion>
  </div>
    \`;
  }
}`,...(to=(eo=m.parameters)==null?void 0:eo.docs)==null?void 0:to.source}}};var co,no,io;x.parameters={...x.parameters,docs:{...(co=x.parameters)==null?void 0:co.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-accordion
                    titleText="Accordion title" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                    hasSecondaryAction
                    secondaryActionIcon="add_box"
                    secondaryActionLabel="Secondary Action"
                >
                    Define the accordion content here.
                </dss-accordion>
            </div>
    \`;
  }
}`,...(io=(no=x.parameters)==null?void 0:no.docs)==null?void 0:io.source}}};const so=["Playground","Style","Open","NoTitle","Icon","Results","Info","Notifications","SecondaryAction","SecondaryActionStatus","SecondaryActionDisabled","AlternativeAction","Checkbox","Widget"],ho=Object.freeze(Object.defineProperty({__proto__:null,AlternativeAction:b,Checkbox:m,Icon:a,Info:d,NoTitle:i,Notifications:r,Open:n,Playground:t,Results:s,SecondaryAction:l,SecondaryActionDisabled:h,SecondaryActionStatus:u,Style:c,Widget:x,__namedExportsOrder:so,default:ao},Symbol.toStringTag,{value:"Module"}));export{b as A,m as C,a as I,i as N,n as O,t as P,s as R,ho as S,x as W,c as a,d as b,r as c,l as d,u as e,h as f};
