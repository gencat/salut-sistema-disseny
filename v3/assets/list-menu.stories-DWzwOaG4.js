import{x as a}from"./iframe-DLVb3rJw.js";const m={title:"Components/List Menu",argTypes:{title:{name:"Títol",control:{type:"text"}},description:{name:"Descripció",control:{type:"text"}},icon:{name:"Icona títol",control:{type:"text"}},label1:{name:"Text ítem 1",control:{type:"text"}},icon1:{name:"Icona ítem 1",control:{type:"text"}},hasNotification1:{name:"Notificació ítem 1",control:{type:"boolean"}},hasAction1:{name:"Acció ítem 1",control:{type:"boolean"}},disabled1:{name:"Ítem 1 deshabilitat",control:{type:"boolean"}},label2:{name:"Text ítem 2",control:{type:"text"}},icon2:{name:"Icona ítem 2",control:{type:"text"}},hasNotification2:{name:"Notificació ítem 2",control:{type:"boolean"}},hasAction2:{name:"Acció ítem 2",control:{type:"boolean"}},disabled2:{name:"Ítem 2 deshabilitat",control:{type:"boolean"}},label3:{name:"Text ítem 3",control:{type:"text"}},icon3:{name:"Icona ítem 3",control:{type:"text"}},hasNotification3:{name:"Notificació ítem 3",control:{type:"boolean"}},hasAction3:{name:"Acció ítem 3",control:{type:"boolean"}},disabled3:{name:"Ítem 3 deshabilitat",control:{type:"boolean"}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=2664-1702&m=dev"}},args:{title:"Title",description:"Lorem ipsum dolor sit amet.",icon:"add_box",label1:"Item1",icon1:"add_box",hasNotification1:!0,hasAction1:!0,disabled1:!1,label2:"Item2",icon2:"add_box",hasNotification2:!1,hasAction2:!1,disabled2:!0,label3:"Item3",icon3:"add_box",hasNotification3:!0,hasAction3:!0,disabled3:!1},render:e=>{let r=e.selected?"dss-list-menu-item.selected ":"";return r+=e.disabled?"dss-list-menu-item.disabled":"",a`
        <dss-list-menu
          titleText="${e.title}"
          description="${e.description}"
          icon="${e.icon}"
          items='[{ "label": "${e.label1}", "icon": "${e.icon1}", "hasNotification": ${e.hasNotification1}, "hasAction": ${e.hasAction1}, "disabled": ${e.disabled1}},
                  { "label": "${e.label2}", "icon": "${e.icon2}", "hasNotification": ${e.hasNotification2}, "hasAction": ${e.hasAction2}, "disabled": ${e.disabled2} },
                  { "label": "${e.label3}", "icon": "${e.icon3}", "hasNotification": ${e.hasNotification3}, "hasAction": ${e.hasAction3}, "disabled": ${e.disabled3} }]'
        ></dss-list-menu>
      `}},s={tags:["!dev"],render:()=>a`
      <dss-list-menu
        titleText=""
        description=""
        icon=""
        items='[{ "label": "Item1", "icon": "", "hasNotification": false, "hasAction": false, "disabled": false},
                { "label": "Item2", "icon": "", "hasNotification": false, "hasAction": false, "disabled": false },
                { "label": "Item3", "icon": "", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    `},i={tags:["!dev"],render:()=>a`
      <dss-list-menu
      titleText=""
      description=""
      icon=""
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    `},o={tags:["!dev"],render:()=>a`
      <dss-list-menu
      titleText=""
      description=""
      icon=""
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": true, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": true, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": true, "disabled": false }]'
      ></dss-list-menu>
    `},l={tags:["!dev"],render:()=>a`
     <dss-list-menu
      titleText="Title"
      description="Lorem ipsum dolor sit amet."
      icon="add_box"
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    `},n={tags:["!dev"],render:()=>a`
      <dss-list-menu
        titleText="Title"
        description="Lorem ipsum dolor sit amet."
        icon="add_box"
        items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false},
                { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false },
                { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    `},d={tags:["!dev"],render:()=>a`
      <dss-list-menu
        titleText="Title"
        description="Lorem ipsum dolor sit amet."
        icon="add_box"
        items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": true},
                { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": true },
                { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": true }]'
      ></dss-list-menu>
    `},c={tags:["!dev"],render:()=>a`
      <dss-list-menu
      titleText=""
      description=""
      icon=""
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": true, "hasAction": false, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": true, "hasAction": false, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": true, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=2664-1702&m=dev'
    }
  },
  args: {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet.',
    icon: 'add_box',
    label1: 'Item1',
    icon1: 'add_box',
    hasNotification1: true,
    hasAction1: true,
    disabled1: false,
    label2: 'Item2',
    icon2: 'add_box',
    hasNotification2: false,
    hasAction2: false,
    disabled2: true,
    label3: 'Item3',
    icon3: 'add_box',
    hasNotification3: true,
    hasAction3: true,
    disabled3: false
  },
  render: (args: any) => {
    let itemClass = args.selected ? 'dss-list-menu-item.selected ' : '';
    itemClass += args.disabled ? 'dss-list-menu-item.disabled' : '';
    return html\`
        <dss-list-menu
          titleText="\${args.title}"
          description="\${args.description}"
          icon="\${args.icon}"
          items='[{ "label": "\${args.label1}", "icon": "\${args.icon1}", "hasNotification": \${args.hasNotification1}, "hasAction": \${args.hasAction1}, "disabled": \${args.disabled1}},
                  { "label": "\${args.label2}", "icon": "\${args.icon2}", "hasNotification": \${args.hasNotification2}, "hasAction": \${args.hasAction2}, "disabled": \${args.disabled2} },
                  { "label": "\${args.label3}", "icon": "\${args.icon3}", "hasNotification": \${args.hasNotification3}, "hasAction": \${args.hasAction3}, "disabled": \${args.disabled3} }]'
        ></dss-list-menu>
      \`;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-list-menu
        titleText=""
        description=""
        icon=""
        items='[{ "label": "Item1", "icon": "", "hasNotification": false, "hasAction": false, "disabled": false},
                { "label": "Item2", "icon": "", "hasNotification": false, "hasAction": false, "disabled": false },
                { "label": "Item3", "icon": "", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    \`;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-list-menu
      titleText=""
      description=""
      icon=""
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    \`;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-list-menu
      titleText=""
      description=""
      icon=""
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": true, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": true, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": true, "disabled": false }]'
      ></dss-list-menu>
    \`;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-list-menu
      titleText="Title"
      description="Lorem ipsum dolor sit amet."
      icon="add_box"
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    \`;
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-list-menu
        titleText="Title"
        description="Lorem ipsum dolor sit amet."
        icon="add_box"
        items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false},
                { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false },
                { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    \`;
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-list-menu
        titleText="Title"
        description="Lorem ipsum dolor sit amet."
        icon="add_box"
        items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": true},
                { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": true },
                { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": true }]'
      ></dss-list-menu>
    \`;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-list-menu
      titleText=""
      description=""
      icon=""
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": true, "hasAction": false, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": true, "hasAction": false, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": true, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    \`;
  }
}`,...c.parameters?.docs?.source}}};const b=["Playground","NoIcons","Icons","Action","TitleDescription","Selected","Disabled","Notification"],h=Object.freeze(Object.defineProperty({__proto__:null,Action:o,Disabled:d,Icons:i,NoIcons:s,Notification:c,Playground:t,Selected:n,TitleDescription:l,__namedExportsOrder:b,default:m},Symbol.toStringTag,{value:"Module"}));export{o as A,d as D,i as I,s as N,t as P,h as S,l as T,c as a,n as b};
