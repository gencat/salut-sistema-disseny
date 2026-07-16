import{x as e}from"./iframe-_r7gOCbv.js";import{w as n}from"./storybook-decorators-DSS85Rnr.js";const s=`
    .demo-nested {
        width: 750px;
    }
    .demo-wrapper {
        height: 250px;
    }
    .demo-parent {
        width: fit-content;
    }
    .demo-wrapper--positions {
        display: flex;
        flex-direction: column;
        gap: 24px;
        height: 450px;
        justify-content: center;
        align-items: center;
    }
    .demo-row {
        display: flex;
        gap: 24px;
        align-items: center;
    }
`,u={title:"Collections/Action Menu",argTypes:{label:{name:"Text"},elements:{name:"Nombre de ítems",control:{type:"number",max:5,min:1}},type:{name:"Tipus",control:{type:"radio"},options:["primary","error"]},showLeftIcon:{name:"Mostrar icona esquerra",control:{type:"boolean"}},leftIcon:{name:"Icona esquerra",if:{arg:"showLeftIcon"}},showRightIcon:{name:"Mostrar icona dreta",control:{type:"boolean"}},rightIcon:{name:"Icona dreta",if:{arg:"showRightIcon"}},hasNestedMenu:{name:"Habilita menú niat",control:{type:"boolean"}},showNotifications:{name:"Mostrar notificacions",control:{type:"boolean"}},notifications:{name:"Notificacions",control:{type:"number",max:10,min:0},if:{arg:"showNotifications"}},notificationsState:{name:"Estat de la notificació",control:{type:"select"},options:["error","alert","success","info"],if:{arg:"showNotifications"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}}},parameters:{layout:"centered"}},i={render:t=>e`

            <div style="height: 250px;">
            <div style="width: fit-content;">
                <dss-button variant="secondary" label="Action Menu"></dss-button>
                <dss-action-menu>
                    <dss-action-menu-item 
                        state="${t.type}"
                        label="${t.label}" 
                        .leftIcon="${t.showLeftIcon?t.leftIcon:void 0}" 
                        .rightIcon="${t.showRightIcon?t.rightIcon:void 0}" 
                        ?hasNestedMenu=${t.hasNestedMenu}
                        notifications="${t.showNotifications?t.notifications:0}"
                        notificationsState="${t.notificationsState}"
                        ?disabled=${t.disabled}
                        >
                            ${t.hasNestedMenu?e`
                                <dss-action-menu>
                                    <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
                                    <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
                                    <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
                                </dss-action-menu>
                                `:null}
                        </dss-action-menu-item>
                    ${Array.from({length:t.elements-1},()=>e`
                                <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
                            `)}
                </dss-action-menu>
            </div>
            </div>
    `,args:{label:"Action",elements:4,type:"primary",showLeftIcon:!0,leftIcon:"add_box",showRightIcon:!1,rightIcon:"add_box",hasNestedMenu:!1,showNotifications:!1,notifications:1,notificationsState:"error",disabled:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1409-9649&m=dev"}}},o={tags:["!dev"],render:()=>e`
            <div class="demo-wrapper">
                <div class="demo-parent">
                    <dss-button variant="secondary" label="Action Menu"></dss-button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    `,decorators:[n(s,"accordion-primary-style")]},a={tags:["!dev"],render:()=>e`
            <div class="demo-wrapper">
                <div class="demo-parent">
                    <dss-button variant="secondary" label="Action Menu"></dss-button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" state="error"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    `,decorators:[n(s,"accordion-primary-style")]},d={tags:["!dev"],render:()=>e`
            <div class="demo-wrapper">
                <div class="demo-parent">
                    <dss-button variant="secondary" label="Action Menu"></dss-button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" disabled></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" state="error" disabled></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    `,decorators:[n(s,"accordion-primary-style")]},c={tags:["!dev"],render:()=>e`
            <div class="demo-wrapper">
                <div class="demo-parent">
                    <dss-button variant="secondary" label="Action Menu"></dss-button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" rightIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    `,decorators:[n(s,"accordion-primary-style")]},m={tags:["!dev"],render:()=>e`
            <div class="demo-wrapper">
                <div class="demo-parent">
                    <dss-button variant="secondary" label="Action Menu"></dss-button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" notifications="1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" notifications="1" notificationsState="alert"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" rightIcon="add_box" notifications="1" notificationsState="info"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3" notifications="1" notificationsState="success"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    `,decorators:[n(s,"accordion-primary-style")]},l={tags:["!dev"],render:()=>e`
        <div class="demo-nested">
            <div class="demo-wrapper">
                <div class="demo-parent">
                    <dss-button variant="secondary" label="Action Menu"></dss-button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" notifications="1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action Nested 1" leftIcon="add_box" hasNestedMenu>
                            <dss-action-menu>
                                <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" notifications="1" hasNestedMenu>
                                    <dss-action-menu>
                                        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" notifications="1"></dss-action-menu-item>
                                        <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
                                        <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
                                        <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
                                    </dss-action-menu>
                                </dss-action-menu-item>
                                <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
                                <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
                                <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
                            </dss-action-menu>
                        </dss-action-menu-item>
                        <dss-action-menu-item label="Action Nested 2" leftIcon="add_box" hasNestedMenu>
                            <dss-action-menu>
                                <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
                                <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
                                <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
                            </dss-action-menu>
                        </dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
        </div>
    `,decorators:[n(s,"accordion-primary-style")]},r={tags:["!dev"],render:()=>e`
            <div class="demo-wrapper demo-wrapper--positions">
                <div class="demo-row">
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="top-start" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="top-start">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="bottom-start" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="bottom-start">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="left-start" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="left-start">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="right-start" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="right-start">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                </div>
                <div class="demo-row">
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="top-end" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="top-end">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="bottom-end" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="bottom-end">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="left-end" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="left-end">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="right-end" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="right-end">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                </div>
            </div>
    `,decorators:[n(s,"accordion-primary-style")]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return html\`

            <div style="height: 250px;">
            <div style="width: fit-content;">
                <dss-button variant="secondary" label="Action Menu"></dss-button>
                <dss-action-menu>
                    <dss-action-menu-item 
                        state="\${args.type}"
                        label="\${args.label}" 
                        .leftIcon="\${args.showLeftIcon ? args.leftIcon : undefined}" 
                        .rightIcon="\${args.showRightIcon ? args.rightIcon : undefined}" 
                        ?hasNestedMenu=\${args.hasNestedMenu}
                        notifications="\${args.showNotifications ? args.notifications : 0}"
                        notificationsState="\${args.notificationsState}"
                        ?disabled=\${args.disabled}
                        >
                            \${args.hasNestedMenu ? html\`
                                <dss-action-menu>
                                    <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
                                    <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
                                    <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
                                </dss-action-menu>
                                \` : null}
                        </dss-action-menu-item>
                    \${Array.from({
      length: args.elements - 1
    }, () => html\`
                                <dss-action-menu-item leftIcon="add_box" label="Action"></dss-action-menu-item>
                            \`)}
                </dss-action-menu>
            </div>
            </div>
    \`;
  },
  args: {
    label: 'Action',
    elements: 4,
    type: 'primary',
    showLeftIcon: true,
    leftIcon: 'add_box',
    showRightIcon: false,
    rightIcon: 'add_box',
    hasNestedMenu: false,
    showNotifications: false,
    notifications: 1,
    notificationsState: 'error',
    disabled: false
  } as Args,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1409-9649&m=dev'
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="demo-wrapper">
                <div class="demo-parent">
                    <dss-button variant="secondary" label="Action Menu"></dss-button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-primary-style')]
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="demo-wrapper">
                <div class="demo-parent">
                    <dss-button variant="secondary" label="Action Menu"></dss-button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" state="error"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-primary-style')]
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="demo-wrapper">
                <div class="demo-parent">
                    <dss-button variant="secondary" label="Action Menu"></dss-button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" disabled></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" state="error" disabled></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-primary-style')]
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="demo-wrapper">
                <div class="demo-parent">
                    <dss-button variant="secondary" label="Action Menu"></dss-button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" rightIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-primary-style')]
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="demo-wrapper">
                <div class="demo-parent">
                    <dss-button variant="secondary" label="Action Menu"></dss-button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" notifications="1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" notifications="1" notificationsState="alert"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" rightIcon="add_box" notifications="1" notificationsState="info"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3" notifications="1" notificationsState="success"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-primary-style')]
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <div class="demo-nested">
            <div class="demo-wrapper">
                <div class="demo-parent">
                    <dss-button variant="secondary" label="Action Menu"></dss-button>
                    <dss-action-menu>
                        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" notifications="1"></dss-action-menu-item>
                        <dss-action-menu-item label="Action Nested 1" leftIcon="add_box" hasNestedMenu>
                            <dss-action-menu>
                                <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" notifications="1" hasNestedMenu>
                                    <dss-action-menu>
                                        <dss-action-menu-item label="Action 1" leftIcon="add_box" rightIcon="add_box" notifications="1"></dss-action-menu-item>
                                        <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
                                        <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
                                        <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
                                    </dss-action-menu>
                                </dss-action-menu-item>
                                <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
                                <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
                                <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
                            </dss-action-menu>
                        </dss-action-menu-item>
                        <dss-action-menu-item label="Action Nested 2" leftIcon="add_box" hasNestedMenu>
                            <dss-action-menu>
                                <dss-action-menu-item label="Action 1" leftIcon="add_box"></dss-action-menu-item>
                                <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
                                <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
                            </dss-action-menu>
                        </dss-action-menu-item>
                        <dss-action-menu-item label="Action 2" leftIcon="add_box"></dss-action-menu-item>
                        <dss-action-menu-item label="Action 3" leftIcon="add_box"></dss-action-menu-item>
                    </dss-action-menu>
                </div>
            </div>
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-primary-style')]
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="demo-wrapper demo-wrapper--positions">
                <div class="demo-row">
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="top-start" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="top-start">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="bottom-start" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="bottom-start">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="left-start" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="left-start">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="right-start" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="right-start">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                </div>
                <div class="demo-row">
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="top-end" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="top-end">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="bottom-end" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="bottom-end">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="left-end" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="left-end">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                    <div class="demo-parent">
                        <dss-button variant="secondary" label="right-end" size="sm"></dss-button>
                        <dss-action-menu dropdownFixed position="right-end">
                            <dss-action-menu-item label="Action 1"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 2"></dss-action-menu-item>
                            <dss-action-menu-item label="Action 3"></dss-action-menu-item>
                        </dss-action-menu>
                    </div>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'accordion-primary-style')]
}`,...r.parameters?.docs?.source}}};const b=["Playground","Primary","ErrorState","Disabled","IconOptions","Notifications","NestedMenu","Position"],f=Object.freeze(Object.defineProperty({__proto__:null,Disabled:d,ErrorState:a,IconOptions:c,NestedMenu:l,Notifications:m,Playground:i,Position:r,Primary:o,__namedExportsOrder:b,default:u},Symbol.toStringTag,{value:"Module"}));export{d as D,a as E,c as I,m as N,i as P,f as S,o as a,l as b,r as c};
