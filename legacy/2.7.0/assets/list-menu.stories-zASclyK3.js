import{x as a}from"./lit-html-D6a8R3xZ.js";const E={title:"Components/List Menu",argTypes:{title:{name:"Títol",control:{type:"text"}},description:{name:"Descripció",control:{type:"text"}},icon:{name:"Icona títol",control:{type:"text"}},label1:{name:"Text ítem 1",control:{type:"text"}},icon1:{name:"Icona ítem 1",control:{type:"text"}},hasNotification1:{name:"Notificació ítem 1",control:{type:"boolean"}},hasAction1:{name:"Acció ítem 1",control:{type:"boolean"}},disabled1:{name:"Ítem 1 deshabilitat",control:{type:"boolean"}},label2:{name:"Text ítem 2",control:{type:"text"}},icon2:{name:"Icona ítem 2",control:{type:"text"}},hasNotification2:{name:"Notificació ítem 2",control:{type:"boolean"}},hasAction2:{name:"Acció ítem 2",control:{type:"boolean"}},disabled2:{name:"Ítem 2 deshabilitat",control:{type:"boolean"}},label3:{name:"Text ítem 3",control:{type:"text"}},icon3:{name:"Icona ítem 3",control:{type:"text"}},hasNotification3:{name:"Notificació ítem 3",control:{type:"boolean"}},hasAction3:{name:"Acció ítem 3",control:{type:"boolean"}},disabled3:{name:"Ítem 3 deshabilitat",control:{type:"boolean"}}},parameters:{layout:"centered"}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=2664-1702&m=dev"}},args:{title:"Title",description:"Lorem ipsum dolor sit amet.",icon:"add_box",label1:"Item1",icon1:"add_box",hasNotification1:!0,hasAction1:!0,disabled1:!1,label2:"Item2",icon2:"add_box",hasNotification2:!1,hasAction2:!1,disabled2:!0,label3:"Item3",icon3:"add_box",hasNotification3:!0,hasAction3:!0,disabled3:!1},render:e=>{let z=e.selected?"dss-list-menu-item.selected ":"";return z+=e.disabled?"dss-list-menu-item.disabled":"",a`
        <dss-list-menu
          title="${e.title}"
          description="${e.description}"
          icon="${e.icon}"
          items='[{ "label": "${e.label1}", "icon": "${e.icon1}", "hasNotification": ${e.hasNotification1}, "hasAction": ${e.hasAction1}, "disabled": ${e.disabled1}},
                  { "label": "${e.label2}", "icon": "${e.icon2}", "hasNotification": ${e.hasNotification2}, "hasAction": ${e.hasAction2}, "disabled": ${e.disabled2} },
                  { "label": "${e.label3}", "icon": "${e.icon3}", "hasNotification": ${e.hasNotification3}, "hasAction": ${e.hasAction3}, "disabled": ${e.disabled3} }]'
        ></dss-list-menu>
      `}},s={tags:["!dev"],render:()=>a`
      <dss-list-menu
        title=""
        description=""
        icon=""
        items='[{ "label": "Item1", "icon": "", "hasNotification": false, "hasAction": false, "disabled": false},
                { "label": "Item2", "icon": "", "hasNotification": false, "hasAction": false, "disabled": false },
                { "label": "Item3", "icon": "", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    `},i={tags:["!dev"],render:()=>a`
      <dss-list-menu
      title=""
      description=""
      icon=""
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    `},o={tags:["!dev"],render:()=>a`
      <dss-list-menu
      title=""
      description=""
      icon=""
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": true, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": true, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": true, "disabled": false }]'
      ></dss-list-menu>
    `},l={tags:["!dev"],render:()=>a`
     <dss-list-menu
      title="Title"
      description="Lorem ipsum dolor sit amet."
      icon="add_box"
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    `},n={tags:["!dev"],render:()=>a`
      <dss-list-menu
        title="Title"
        description="Lorem ipsum dolor sit amet."
        icon="add_box"
        items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false},
                { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false },
                { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    `},d={tags:["!dev"],render:()=>a`
      <dss-list-menu
        title="Title"
        description="Lorem ipsum dolor sit amet."
        icon="add_box"
        items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": true},
                { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": true },
                { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": true }]'
      ></dss-list-menu>
    `},c={tags:["!dev"],render:()=>a`
      <dss-list-menu
      title=""
      description=""
      icon=""
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": true, "hasAction": false, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": true, "hasAction": false, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": true, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    `};var r,m,b;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          title="\${args.title}"
          description="\${args.description}"
          icon="\${args.icon}"
          items='[{ "label": "\${args.label1}", "icon": "\${args.icon1}", "hasNotification": \${args.hasNotification1}, "hasAction": \${args.hasAction1}, "disabled": \${args.disabled1}},
                  { "label": "\${args.label2}", "icon": "\${args.icon2}", "hasNotification": \${args.hasNotification2}, "hasAction": \${args.hasAction2}, "disabled": \${args.disabled2} },
                  { "label": "\${args.label3}", "icon": "\${args.icon3}", "hasNotification": \${args.hasNotification3}, "hasAction": \${args.hasAction3}, "disabled": \${args.disabled3} }]'
        ></dss-list-menu>
      \`;
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,h,u;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-list-menu
        title=""
        description=""
        icon=""
        items='[{ "label": "Item1", "icon": "", "hasNotification": false, "hasAction": false, "disabled": false},
                { "label": "Item2", "icon": "", "hasNotification": false, "hasAction": false, "disabled": false },
                { "label": "Item3", "icon": "", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    \`;
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var p,A,N;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-list-menu
      title=""
      description=""
      icon=""
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    \`;
  }
}`,...(N=(A=i.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var x,I,_;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-list-menu
      title=""
      description=""
      icon=""
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": true, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": true, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": true, "disabled": false }]'
      ></dss-list-menu>
    \`;
  }
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var g,$,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-list-menu
      title="Title"
      description="Lorem ipsum dolor sit amet."
      icon="add_box"
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    \`;
  }
}`,...(y=($=l.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var S,T,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-list-menu
        title="Title"
        description="Lorem ipsum dolor sit amet."
        icon="add_box"
        items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false},
                { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false },
                { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    \`;
  }
}`,...(v=(T=n.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var L,w,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-list-menu
        title="Title"
        description="Lorem ipsum dolor sit amet."
        icon="add_box"
        items='[{ "label": "Item1", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": true},
                { "label": "Item2", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": true },
                { "label": "Item3", "icon": "add_box", "hasNotification": false, "hasAction": false, "disabled": true }]'
      ></dss-list-menu>
    \`;
  }
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var C,P,F;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-list-menu
      title=""
      description=""
      icon=""
      items='[{ "label": "Item1", "icon": "add_box", "hasNotification": true, "hasAction": false, "disabled": false},
              { "label": "Item2", "icon": "add_box", "hasNotification": true, "hasAction": false, "disabled": false },
              { "label": "Item3", "icon": "add_box", "hasNotification": true, "hasAction": false, "disabled": false }]'
      ></dss-list-menu>
    \`;
  }
}`,...(F=(P=c.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};const M=["Playground","NoIcons","Icons","Action","TitleDescription","Selected","Disabled","Notification"],j=Object.freeze(Object.defineProperty({__proto__:null,Action:o,Disabled:d,Icons:i,NoIcons:s,Notification:c,Playground:t,Selected:n,TitleDescription:l,__namedExportsOrder:M,default:E},Symbol.toStringTag,{value:"Module"}));export{o as A,d as D,i as I,s as N,t as P,j as S,l as T,c as a,n as b};
