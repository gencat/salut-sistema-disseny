import{x as a}from"./iframe-PL0KlCAr.js";import{w as i}from"./storybook-decorators-DSS85Rnr.js";const s=`
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    .wrapper + .wrapper {
        margin-top: 16px;
    }

    .wrapper--interactive {
        padding: 16px;
        border-bottom: 1px solid var(--color-neutral-300);
        transition: all var(--animation-delay) ease-in-out;
    }

    .wrapper--interactive:hover {
        background-color: var(--color-primary-100);
    }

    .wrapper--interactive:active {
        background-color: var(--color-primary-50);
    }
    

`,w={title:"Components/Notification Badge",argTypes:{state:{name:"Estat",control:{type:"radio"},options:["success","error","alert","info"]},showIcon:{name:" Mostra icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},value:{name:"Valor",control:{type:"text"}},dot:{name:" Tipus dot",control:{type:"boolean"}},borderWhite:{name:" Habilitar vora: tipus blanc",control:{type:"boolean"}},borderMenu:{name:" Habilitar vora: tipus menu",control:{type:"boolean"}},type:{name:"Tipus",control:{type:"radio"},options:["default","brand"],if:{arg:"menu",truthy:!0}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=248-2945&m=dev"}},args:{state:"succes",showIcon:!1,icon:"add_box",value:"1",dot:!1,borderWhite:!1,borderMenu:!1,type:"default"},render:e=>a`
    ${e.showIcon?a`
            <dss-notification-badge icon="${e.icon}" state="${e.state}" ?borderWhite=${e.borderWhite} ?borderMenu=${e.borderMenu} type="${e.menu?e.type:"default"}" ?dot=${e.dot}></dss-notification-badge>
          `:a`
            <dss-notification-badge value="${e.value}" state="${e.state}" ?borderWhite=${e.borderWhite} ?borderMenu=${e.borderMenu} type="${e.menu?e.type:"default"}" ?dot=${e.dot}></dss-notification-badge>
          `}
    `},d={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-notification-badge value="1"></dss-notification-badge>
                <dss-notification-badge status="success" value="1"></dss-notification-badge>
                <dss-notification-badge status="alert" value="1"></dss-notification-badge>
                <dss-notification-badge status="info" value="1"></dss-notification-badge>
            </div>
    `,decorators:[i(s,"notification-badge-status-style")]},r={tags:["!dev"],render:()=>a`
     <div class="wrapper">
                <dss-notification-badge icon="add_box"></dss-notification-badge>
                <dss-notification-badge status="success" icon="add_box"></dss-notification-badge>
                <dss-notification-badge status="alert" icon="add_box"></dss-notification-badge>
                <dss-notification-badge status="info" icon="add_box"></dss-notification-badge>
            </div> 
    `,decorators:[i(s,"notification-badge-icon-style")]},c={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-notification-badge dot></dss-notification-badge>  
                <dss-notification-badge status="success" dot></dss-notification-badge>
                <dss-notification-badge status="alert" dot></dss-notification-badge>
                <dss-notification-badge status="info" dot></dss-notification-badge>
            </div>
    `,decorators:[i(s,"notification-badge-dot-style")]},b={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-notification-badge value="1"></dss-notification-badge>
                <dss-notification-badge status="success" value="1"></dss-notification-badge>
                <dss-notification-badge status="alert" value="1"></dss-notification-badge>
                <dss-notification-badge status="info" value="1"></dss-notification-badge>
            </div>
            <div class="wrapper">
                <dss-notification-badge isHover value="1"></dss-notification-badge>
                <dss-notification-badge status="success" isHover value="1"></dss-notification-badge>
                <dss-notification-badge status="alert" isHover value="1"></dss-notification-badge>
                <dss-notification-badge status="info" isHover value="1"></dss-notification-badge>
            </div>
            <div class="wrapper">
                <dss-notification-badge isActive value="1"></dss-notification-badge>
                <dss-notification-badge status="success" isActive value="1"></dss-notification-badge>
                <dss-notification-badge status="alert" isActive value="1"></dss-notification-badge>
                <dss-notification-badge status="info" isActive value="1"></dss-notification-badge>
            </div>
    `,decorators:[i(s,"notification-badge-interactive-style")]},u={tags:["!dev"],render:()=>{const e=t=>t.currentTarget.querySelector("dss-notification-badge"),m=(t,p)=>{const n=e(t);n&&(n.isHover=p)},y=(t,p)=>{const n=e(t);n&&(n.isActive=p)};return a`
      <div class="wrapper wrapper--interactive"
              @mouseenter=${t=>m(t,!0)}
                @mouseleave=${t=>m(t,!1)}
                @mousedown=${t=>y(t,!0)}
                @mouseup=${t=>y(t,!1)}
            >
                <dss-typography variant="body-3">Fila seleccionable</dss-typography>
                <div style="position: relative">
                    <dss-button size="md" icon="add_box" label="Button"></dss-button>
                    <dss-notification-badge 
                        value="3" 
                        style="position: absolute; top: -6px; right: -6px; z-index: 900"
                    ></dss-notification-badge>
                </div>
            </div>
            
    `},decorators:[i(s,"notification-badge-menu-style")]},g={tags:["!dev"],render:()=>a`
      <div class="wrapper wrapper--interactive">
                <dss-typography variant="body-3">Fila seleccionable</dss-typography>
                <dss-notification-badge 
                    value="3" 
                    hideBorder
                ></dss-notification-badge>
            </div>
    `,decorators:[i(s,"notification-badge-interactive-style")]},v={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-notification-badge variant="sidemenu" value="1"></dss-notification-badge>
                <dss-notification-badge variant="sidemenu" inverted value="1"></dss-notification-badge>
                <dss-notification-badge variant="sidemenu" isHover value="1"></dss-notification-badge>
                <dss-notification-badge variant="sidemenu" isActive value="1"></dss-notification-badge>
            </div>
            <div class="wrapper">
                <dss-notification-badge variant="sidemenu" type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge variant="sidemenu" inverted type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge variant="sidemenu" type="brand" isHover value="1"></dss-notification-badge>
                <dss-notification-badge variant="sidemenu" type="brand" isActive value="1"></dss-notification-badge>
            </div>
            
    `,decorators:[i(s,"notification-badge-menu-style")]},l={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-notification-badge dot variant="sidemenu" value="1"></dss-notification-badge>
                <dss-notification-badge dot variant="sidemenu" inverted value="1"></dss-notification-badge>
                <dss-notification-badge dot variant="sidemenu" isHover value="1"></dss-notification-badge>
                <dss-notification-badge dot variant="sidemenu" isActive value="1"></dss-notification-badge>
            </div>
            <div class="wrapper">
                <dss-notification-badge dot variant="sidemenu" type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge dot variant="sidemenu" inverted type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge dot variant="sidemenu" type="brand" isHover value="1"></dss-notification-badge>
                <dss-notification-badge dot variant="sidemenu" type="brand" isActive value="1"></dss-notification-badge>
            </div>
            
    `,decorators:[i(s,"notification-badge-menu-style")]},f={tags:["!dev"],render:()=>a`
      <div class="wrapper">
                <dss-notification-badge borderMenu value="1"></dss-notification-badge>
                <dss-notification-badge borderMenu dot></dss-notification-badge>
                <dss-notification-badge borderMenu type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge borderMenu type="brand" dot></dss-notification-badge>
            </div>
            <div class="wrapper">
                <dss-notification-badge borderWhite value="1"></dss-notification-badge>
                <dss-notification-badge borderWhite dot></dss-notification-badge>
                <dss-notification-badge borderWhite type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge borderWhite type="brand" dot></dss-notification-badge>
            </div>
    `,decorators:[i(s,"notification-badge-menu-style")]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=248-2945&m=dev'
    }
  },
  args: {
    state: 'succes',
    showIcon: false,
    icon: 'add_box',
    value: '1',
    dot: false,
    borderWhite: false,
    borderMenu: false,
    type: 'default'
  },
  render: (args: any) => {
    return html\`
    \${args.showIcon ? html\`
            <dss-notification-badge icon="\${args.icon}" state="\${args.state}" ?borderWhite=\${args.borderWhite} ?borderMenu=\${args.borderMenu} type="\${args.menu ? args.type : 'default'}" ?dot=\${args.dot}></dss-notification-badge>
          \` : html\`
            <dss-notification-badge value="\${args.value}" state="\${args.state}" ?borderWhite=\${args.borderWhite} ?borderMenu=\${args.borderMenu} type="\${args.menu ? args.type : 'default'}" ?dot=\${args.dot}></dss-notification-badge>
          \`}
    \`;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-notification-badge value="1"></dss-notification-badge>
                <dss-notification-badge status="success" value="1"></dss-notification-badge>
                <dss-notification-badge status="alert" value="1"></dss-notification-badge>
                <dss-notification-badge status="info" value="1"></dss-notification-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-status-style')]
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="wrapper">
                <dss-notification-badge icon="add_box"></dss-notification-badge>
                <dss-notification-badge status="success" icon="add_box"></dss-notification-badge>
                <dss-notification-badge status="alert" icon="add_box"></dss-notification-badge>
                <dss-notification-badge status="info" icon="add_box"></dss-notification-badge>
            </div> 
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-icon-style')]
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-notification-badge dot></dss-notification-badge>  
                <dss-notification-badge status="success" dot></dss-notification-badge>
                <dss-notification-badge status="alert" dot></dss-notification-badge>
                <dss-notification-badge status="info" dot></dss-notification-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-dot-style')]
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-notification-badge value="1"></dss-notification-badge>
                <dss-notification-badge status="success" value="1"></dss-notification-badge>
                <dss-notification-badge status="alert" value="1"></dss-notification-badge>
                <dss-notification-badge status="info" value="1"></dss-notification-badge>
            </div>
            <div class="wrapper">
                <dss-notification-badge isHover value="1"></dss-notification-badge>
                <dss-notification-badge status="success" isHover value="1"></dss-notification-badge>
                <dss-notification-badge status="alert" isHover value="1"></dss-notification-badge>
                <dss-notification-badge status="info" isHover value="1"></dss-notification-badge>
            </div>
            <div class="wrapper">
                <dss-notification-badge isActive value="1"></dss-notification-badge>
                <dss-notification-badge status="success" isActive value="1"></dss-notification-badge>
                <dss-notification-badge status="alert" isActive value="1"></dss-notification-badge>
                <dss-notification-badge status="info" isActive value="1"></dss-notification-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-interactive-style')]
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const getBadge = (event: Event) => {
      return (event.currentTarget as HTMLElement).querySelector('dss-notification-badge') as (HTMLElement & {
        isHover?: boolean;
        isActive?: boolean;
      }) | null;
    };
    const setHover = (event: Event, value: boolean) => {
      const badge = getBadge(event);
      if (!badge) {
        return;
      }
      badge.isHover = value;
    };
    const setActive = (event: Event, value: boolean) => {
      const badge = getBadge(event);
      if (!badge) {
        return;
      }
      badge.isActive = value;
    };
    return html\`
      <div class="wrapper wrapper--interactive"
              @mouseenter=\${(event: Event) => setHover(event, true)}
                @mouseleave=\${(event: Event) => setHover(event, false)}
                @mousedown=\${(event: Event) => setActive(event, true)}
                @mouseup=\${(event: Event) => setActive(event, false)}
            >
                <dss-typography variant="body-3">Fila seleccionable</dss-typography>
                <div style="position: relative">
                    <dss-button size="md" icon="add_box" label="Button"></dss-button>
                    <dss-notification-badge 
                        value="3" 
                        style="position: absolute; top: -6px; right: -6px; z-index: 900"
                    ></dss-notification-badge>
                </div>
            </div>
            
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-menu-style')]
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper wrapper--interactive">
                <dss-typography variant="body-3">Fila seleccionable</dss-typography>
                <dss-notification-badge 
                    value="3" 
                    hideBorder
                ></dss-notification-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-interactive-style')]
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-notification-badge variant="sidemenu" value="1"></dss-notification-badge>
                <dss-notification-badge variant="sidemenu" inverted value="1"></dss-notification-badge>
                <dss-notification-badge variant="sidemenu" isHover value="1"></dss-notification-badge>
                <dss-notification-badge variant="sidemenu" isActive value="1"></dss-notification-badge>
            </div>
            <div class="wrapper">
                <dss-notification-badge variant="sidemenu" type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge variant="sidemenu" inverted type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge variant="sidemenu" type="brand" isHover value="1"></dss-notification-badge>
                <dss-notification-badge variant="sidemenu" type="brand" isActive value="1"></dss-notification-badge>
            </div>
            
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-menu-style')]
}`,...v.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-notification-badge dot variant="sidemenu" value="1"></dss-notification-badge>
                <dss-notification-badge dot variant="sidemenu" inverted value="1"></dss-notification-badge>
                <dss-notification-badge dot variant="sidemenu" isHover value="1"></dss-notification-badge>
                <dss-notification-badge dot variant="sidemenu" isActive value="1"></dss-notification-badge>
            </div>
            <div class="wrapper">
                <dss-notification-badge dot variant="sidemenu" type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge dot variant="sidemenu" inverted type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge dot variant="sidemenu" type="brand" isHover value="1"></dss-notification-badge>
                <dss-notification-badge dot variant="sidemenu" type="brand" isActive value="1"></dss-notification-badge>
            </div>
            
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-menu-style')]
}`,...l.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-notification-badge borderMenu value="1"></dss-notification-badge>
                <dss-notification-badge borderMenu dot></dss-notification-badge>
                <dss-notification-badge borderMenu type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge borderMenu type="brand" dot></dss-notification-badge>
            </div>
            <div class="wrapper">
                <dss-notification-badge borderWhite value="1"></dss-notification-badge>
                <dss-notification-badge borderWhite dot></dss-notification-badge>
                <dss-notification-badge borderWhite type="brand" value="1"></dss-notification-badge>
                <dss-notification-badge borderWhite type="brand" dot></dss-notification-badge>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'notification-badge-menu-style')]
}`,...f.parameters?.docs?.source}}};const h=["Playground","Status","Icon","Dot","Interactive","InteractiveExample","HideBorder","Types","SidemenuDot","MenuStyle"],x=Object.freeze(Object.defineProperty({__proto__:null,Dot:c,HideBorder:g,Icon:r,Interactive:b,InteractiveExample:u,MenuStyle:f,Playground:o,SidemenuDot:l,Status:d,Types:v,__namedExportsOrder:h,default:w},Symbol.toStringTag,{value:"Module"}));export{c as D,g as H,r as I,o as P,x as S,v as T,d as a,b,u as c,l as d};
