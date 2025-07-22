import"./lit-element-Dloa6E9d.js";import{x as e}from"./lit-html-D6a8R3xZ.js";import"./accordion-CsFtoVXR.js";const oo={title:"Components/Accordion",argTypes:{hasSecondaryAction:{name:"Mostra l'acció secundària",control:{type:"boolean"}},showResults:{name:"Mostra els resultats",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},showNotifications:{name:"Mostra notificacions",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},accordionStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},showIcon:{name:" Mostra la icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},iconStatus:{name:"Estat de la icona",control:{type:"select"},options:["default","success","error","disabled"],if:{arg:"showIcon",truthy:!0}},showTitle:{name:" Mostra el títol",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"},if:{arg:"showTitle",truthy:!0}},type:{name:"Tipus",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},index:{name:"Index",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},results:{name:" Resultats",control:{type:"number"},if:{arg:"showResults",truthy:!0}},resultsText:{name:" Resultats Text",control:{type:"text"},if:{arg:"showResults",truthy:!0}},resultsState:{name:" Resultats Estat",control:{type:"select"},options:["ideal","critic","alert","info","info-alt","neutral"],if:{arg:"showResults",truthy:!0}},notifications:{name:"Notificacions",control:{type:"number"},if:{arg:"showNotifications",truthy:!0}},notificationsState:{name:"Estat de les notificacions",control:{type:"select"},options:["success","warning","error","info"],if:{arg:"showNotifications",truthy:!0}},hasCheckbox:{name:" Mostra els checkbox",control:{type:"boolean"}},checkboxLabel:{name:" Resultats Label",control:{type:"text"},if:{arg:"hasCheckbox",truthy:!0}},secondaryActionIcon:{name:"Icona de l'acció secundària",control:{type:"text"},if:{arg:"hasSecondaryAction",truthy:!0}},secondaryActionStatus:{name:"Estat de l'acció secundària",control:{type:"select"},options:["default","primary","success","warning","error","info"],if:{arg:"hasSecondaryAction",truthy:!0}}}},t={render:o=>e`
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
      </div>
      <div class="wrapper">
        <dss-accordion accordionStyle="inner" titleText="Accordion INNER">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},n={tags:["!dev"],render:()=>e`
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
      </div>

      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text">
          Define the accordion content here.
        </dss-accordion>
      </div>

      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text" resultsState="ideal">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},d={tags:["!dev"],render:()=>e`
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
  </div>

  <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="error">
      Define the accordion content here.
    </dss-accordion>
  </div>

  <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="alert">
      Define the accordion content here.
    </dss-accordion>
  </div>

  <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="info">
      Define the accordion content here.
    </dss-accordion>
  </div>
    `},l={tags:["!dev"],render:()=>e`
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
    <dss-accordion hasCheckbox>
            <dss-checkbox variant="default" slot="checkbox">
                    <input slot="input" id="accordionCheckbox2" type="checkbox">
                    <label slot="label" for="accordionCheckbox2">Label</label>
            </dss-checkbox>
      Define the accordion content here.
    </dss-accordion>
  </div>
    `},m={tags:["!dev"],render:()=>e`
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
    `};var x,p,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(p=t.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var y,$,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion BOX">
          Define the accordion content here.
        </dss-accordion>
      </div>
      <div class="wrapper">
        <dss-accordion accordionStyle="inner" titleText="Accordion INNER">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(S=($=c.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var f,v,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var A,g,q;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(q=(g=i.parameters)==null?void 0:g.docs)==null?void 0:q.source}}};var w,T,L;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(L=(T=a.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var I,_,D;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" results="7">
          Define the accordion content here.
        </dss-accordion>
      </div>

      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text">
          Define the accordion content here.
        </dss-accordion>
      </div>

      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" results="7" resultsText="Custom text" resultsState="ideal">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(D=(_=s.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var U,N,R;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(R=(N=d.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,B,O;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="success">
      Define the accordion content here.
    </dss-accordion>
  </div>

  <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="error">
      Define the accordion content here.
    </dss-accordion>
  </div>

  <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="alert">
      Define the accordion content here.
    </dss-accordion>
  </div>

  <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box" notifications="7" notificationsState="info">
      Define the accordion content here.
    </dss-accordion>
  </div>
    \`;
  }
}`,...(O=(B=r.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var M,P,F;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(P=l.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var X,z,W;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(W=(z=u.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var j,H,J;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,G,Q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(G=b.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var V,Y,Z;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const eo=["Playground","Style","Open","NoTitle","Icon","Results","Info","Notifications","SecondaryAction","SecondaryActionStatus","SecondaryActionDisabled","Checkbox","Widget"],io=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:b,Icon:a,Info:d,NoTitle:i,Notifications:r,Open:n,Playground:t,Results:s,SecondaryAction:l,SecondaryActionDisabled:h,SecondaryActionStatus:u,Style:c,Widget:m,__namedExportsOrder:eo,default:oo},Symbol.toStringTag,{value:"Module"}));export{io as A,b as C,a as I,i as N,n as O,t as P,s as R,c as S,m as W,d as a,r as b,l as c,u as d,h as e};
