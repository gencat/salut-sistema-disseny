import"./lit-element-DhY7bShc.js";import{x as c}from"./lit-html-B2eaWknC.js";import"./accordion-Bot-XpTA.js";const U={title:"Components/Accordion",argTypes:{hasSecondaryAction:{name:"Mostra l'acció secundària",control:{type:"boolean"}},showResults:{name:"Mostra els resultats",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},showNotifications:{name:"Mostra notificacions",control:{type:"boolean"},if:{arg:"hasSecondaryAction",truthy:!1}},accordionStyle:{name:"Estil",control:{type:"radio"},options:["box","inner"]},showIcon:{name:" Mostra la icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},iconStatus:{name:"Estat de la icona",control:{type:"select"},options:["default","success","error","disabled"],if:{arg:"showIcon",truthy:!0}},showTitle:{name:" Mostra el títol",control:{type:"boolean"}},title:{name:"Títol",control:{type:"text"},if:{arg:"showTitle",truthy:!0}},type:{name:"Tipus",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},index:{name:"Index",control:{type:"text"},if:{arg:"showTitle",truthy:!1}},results:{name:" Resultats",control:{type:"number"},if:{arg:"showResults",truthy:!0}},resultsText:{name:" Resultats Text",control:{type:"text"},if:{arg:"showResults",truthy:!0}},resultsState:{name:" Resultats Estat",control:{type:"select"},options:["ideal","critic","alert","info","info-alt","neutral"],if:{arg:"showResults",truthy:!0}},notifications:{name:"Notificacions",control:{type:"number"},if:{arg:"showNotifications",truthy:!0}},notificationsState:{name:"Estat de les notificacions",control:{type:"select"},options:["success","warning","error","info"],if:{arg:"showNotifications",truthy:!0}},hasCheckbox:{name:" Mostra els checkbox",control:{type:"boolean"}},checkboxLabel:{name:" Resultats Label",control:{type:"text"},if:{arg:"hasCheckbox",truthy:!0}},secondaryActionIcon:{name:"Icona de l'acció secundària",control:{type:"text"},if:{arg:"hasSecondaryAction",truthy:!0}},secondaryActionStatus:{name:"Estat de l'acció secundària",control:{type:"select"},options:["default","primary","success","warning","error","info"],if:{arg:"hasSecondaryAction",truthy:!0}}}},e={render:o=>c`
      <div style="width:600px">
          ${o.showTitle&&o.showIcon?o.hasSecondaryAction?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" hasSecondaryAction secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showResults?c`
                <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                  ${o.hasCheckbox?c`
                      <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                      <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                      `:null}
                  <div class="my-content">
                    Hello world.
                  </div>
                </dss-accordion>
              `:o.showNotifications?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" icon="${o.icon}" iconStatus="${o.iconStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showTitle&&!o.showIcon?o.hasSecondaryAction?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" hasSecondaryAction secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showResults?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showNotifications?c`
            <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:c`
              <dss-accordion accordionStyle="${o.accordionStyle}" titleText="${o.title}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:!o.showTitle&&o.showIcon?o.hasSecondaryAction?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" hasSecondaryAction secondaryActionStatus="${o.secondaryActionStatus}" secondaryActionIcon="${o.secondaryActionIcon}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showResults?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showNotifications?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" icon="${o.icon}" iconStatus="${o.iconStatus}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:!o.showTitle&&!o.showIcon?o.hasSecondaryAction?c`
            <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" hasSecondaryAction secondaryActionIcon="${o.secondaryActionIcon}" secondaryActionStatus="${o.secondaryActionStatus}" ?hasCheckbox=${o.hasCheckbox}>
              ${o.hasCheckbox?c`
                  <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                  <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                  `:null}
              <div class="my-content">
                Hello world.
              </div>
            </dss-accordion>
            `:o.showResults?c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" results="${o.results}" resultsText="${o.resultsText}" resultsState="${o.resultsState}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:o.showNotifications?c`
            <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" notifications="${o.notifications}" notificationsState="${o.notificationsState}" ?hasCheckbox=${o.hasCheckbox}>
              ${o.hasCheckbox?c`
                  <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                  <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                  `:null}
              <div class="my-content">
                Hello world.
              </div>
            </dss-accordion>
            `:c`
              <dss-accordion accordionStyle="${o.accordionStyle}" type="${o.type}" index="${o.index}" ?hasCheckbox=${o.hasCheckbox}>
                ${o.hasCheckbox?c`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">${o.checkboxLabel}</label>
                    `:null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            `:null}
          </div>
    `,args:{accordionStyle:"box",showIcon:!1,icon:"add_box",iconStatus:"default",showTitle:!1,title:"Accordion title",type:"Accordion type",index:"1",hasSecondaryAction:!1,secondaryActionIcon:"edit_document",secondaryActionStatus:"primary",showResults:!1,results:1,resultsText:"Resultats",resultsState:"ideal",showNotifications:!1,notifications:1,notificationsState:"info",hasCheckbox:!1,checkboxLabel:"Checkbox"}},n={tags:["!dev"],render:()=>c`
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
    `},t={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion open" isOpen>
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},s={tags:["!dev"],render:()=>c`
       <div class="wrapper">
        <dss-accordion type="Adreça" index="2">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},a={tags:["!dev"],render:()=>c`
      <div class="wrapper">
    <dss-accordion titleText="Accordion title" icon="add_box">
      Define the accordion content here.
    </dss-accordion>
  </div>
    `},i={tags:["!dev"],render:()=>c`
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
    `},d={tags:["!dev"],render:()=>c`
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
    `},l={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},r={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionStatus="error">
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},h={tags:["!dev"],render:()=>c`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionDisabled>
          Define the accordion content here.
        </dss-accordion>
      </div>
    `},b={tags:["!dev"],render:()=>c`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
      <input slot="checkbox" type="checkbox" id="accordionCheckbox2" class="dss-checkbox" />

      <label slot="checkboxLabel" for="accordionCheckbox2" class="dss-checkbox-label">Label</label>
      Define the accordion content here.
    </dss-accordion>
  </div>
    `},x={tags:["!dev"],render:()=>c`
      <div class="wrapper">
                <dss-accordion
                    titleText="Accordion title" 
                    icon="add_box" 
                    widget
                    widgetBadgeText="7"
                    widgetBadgeState="neutral"
                    widgetShowNext
                    widgetShowClose
                >
                    Define the accordion content here.
                </dss-accordion>
            </div>
    `};var k,u,y;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: AccordionArgs) => {
    return html\`
      <div style="width:600px">
          \${args.showTitle && args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" hasSecondaryAction secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
                <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                  \${args.hasCheckbox ? html\`
                      <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                      <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                      \` : null}
                  <div class="my-content">
                    Hello world.
                  </div>
                </dss-accordion>
              \` : args.showNotifications ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showTitle && !args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" hasSecondaryAction secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
            <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" titleText="\${args.title}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : !args.showTitle && args.showIcon ? args.hasSecondaryAction ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" hasSecondaryAction secondaryActionStatus="\${args.secondaryActionStatus}" secondaryActionIcon="\${args.secondaryActionIcon}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" icon="\${args.icon}" iconStatus="\${args.iconStatus}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : !args.showTitle && !args.showIcon ? args.hasSecondaryAction ? html\`
            <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" hasSecondaryAction secondaryActionIcon="\${args.secondaryActionIcon}" secondaryActionStatus="\${args.secondaryActionStatus}" ?hasCheckbox=\${args.hasCheckbox}>
              \${args.hasCheckbox ? html\`
                  <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                  <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                  \` : null}
              <div class="my-content">
                Hello world.
              </div>
            </dss-accordion>
            \` : args.showResults ? html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" results="\${args.results}" resultsText="\${args.resultsText}" resultsState="\${args.resultsState}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
                </div>
              </dss-accordion>
            \` : args.showNotifications ? html\`
            <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" notifications="\${args.notifications}" notificationsState="\${args.notificationsState}" ?hasCheckbox=\${args.hasCheckbox}>
              \${args.hasCheckbox ? html\`
                  <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                  <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                  \` : null}
              <div class="my-content">
                Hello world.
              </div>
            </dss-accordion>
            \` : html\`
              <dss-accordion accordionStyle="\${args.accordionStyle}" type="\${args.type}" index="\${args.index}" ?hasCheckbox=\${args.hasCheckbox}>
                \${args.hasCheckbox ? html\`
                    <input slot="checkbox" type="checkbox" id="accordionCheckbox" class="dss-checkbox" />
                    <label slot="checkboxLabel" for="accordionCheckbox" class="dss-checkbox-label">\${args.checkboxLabel}</label>
                    \` : null}
                <div class="my-content">
                  Hello world.
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
  }
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var p,$,S;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=($=n.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var f,C,m;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(m=(C=t.parameters)==null?void 0:C.docs)==null?void 0:m.source}}};var v,w,A;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var T,g,L;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(g=a.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var I,_,D;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(_=i.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var H,N,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(N=d.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var O,E,M;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var B,P,W;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionStatus="error">
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(W=(P=r.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var j,X,z;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-accordion titleText="Accordion title" icon="add_box" hasSecondaryAction secondaryActionIcon="edit_document" secondaryActionDisabled>
          Define the accordion content here.
        </dss-accordion>
      </div>
    \`;
  }
}`,...(z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var q,F,G;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
    <dss-accordion hasCheckbox>
      <input slot="checkbox" type="checkbox" id="accordionCheckbox2" class="dss-checkbox" />

      <label slot="checkboxLabel" for="accordionCheckbox2" class="dss-checkbox-label">Label</label>
      Define the accordion content here.
    </dss-accordion>
  </div>
    \`;
  }
}`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
                >
                    Define the accordion content here.
                </dss-accordion>
            </div>
    \`;
  }
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const V=["Playground","Style","Open","NoTitle","Icon","Results","Notifications","SecondaryAction","SecondaryActionStatus","SecondaryActionDisabled","Checkbox","Widget"],co=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:b,Icon:a,NoTitle:s,Notifications:d,Open:t,Playground:e,Results:i,SecondaryAction:l,SecondaryActionDisabled:h,SecondaryActionStatus:r,Style:n,Widget:x,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{co as A,b as C,a as I,s as N,t as O,e as P,i as R,n as S,x as W,d as a,l as b,r as c,h as d};
