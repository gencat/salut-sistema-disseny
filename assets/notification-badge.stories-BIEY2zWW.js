import{x as a}from"./iframe-DNLJd-HG.js";import{w as i}from"./storybook-decorators-DSS85Rnr.js";const s=`
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
    

`,w={title:"Components/Notification Badge",argTypes:{variant:{name:"Variant",control:{type:"radio"},options:["default","sidemenu"]},status:{name:"Estat",control:{type:"radio"},options:["success","error","alert","info"],if:{arg:"variant",eq:"default"}},type:{name:"Tipus",control:{type:"radio"},options:["default","brand"],if:{arg:"variant",eq:"sidemenu"}},showIcon:{name:" Mostra icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon",truthy:!0}},value:{name:"Valor",control:{type:"text"}},dot:{name:" Tipus dot",control:{type:"boolean"}},inverted:{name:"Invertit",control:{type:"boolean"},if:{arg:"variant",eq:"sidemenu"}},hideBorder:{name:"Amaga el border",control:{type:"boolean"}},isHover:{name:"Hover",control:{type:"boolean"},if:{arg:"hideBorder",truthy:!1}},isActive:{name:"Active",control:{type:"boolean"},if:{arg:"hideBorder",truthy:!1}}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=248-2945&m=dev"}},args:{variant:"default",type:"default",status:"success",showIcon:!1,icon:"add_box",value:"1",dot:!1,inverted:!1,hideBorder:!1,isHover:!1,isActive:!1},render:e=>a`
      <dss-notification-badge 
                value="${e.value}"
                variant="${e.variant}"
                type="${e.type}"
                status="${e.status}" 
                .icon="${e.icon?e.icon:null}" 
                ?dot=${e.dot}
                ?inverted=${e.inverted}
                ?hideBorder=${e.hideBorder}
                ?isHover=${e.isHover}
                ?isActive=${e.isActive}
            >
            </dss-notification-badge>
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
    `,decorators:[i(s,"notification-badge-dot-style")]},v={tags:["!dev"],render:()=>a`
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
    `,decorators:[i(s,"notification-badge-interactive-style")]},b={tags:["!dev"],render:()=>{const e=t=>t.currentTarget.querySelector("dss-notification-badge"),m=(t,p)=>{const n=e(t);n&&(n.isHover=p)},y=(t,p)=>{const n=e(t);n&&(n.isActive=p)};return a`
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
            
    `},decorators:[i(s,"notification-badge-menu-style")]},u={tags:["!dev"],render:()=>a`
      <div class="wrapper wrapper--interactive">
                <dss-typography variant="body-3">Fila seleccionable</dss-typography>
                <dss-notification-badge 
                    value="3" 
                    hideBorder
                ></dss-notification-badge>
            </div>
    `,decorators:[i(s,"notification-badge-interactive-style")]},g={tags:["!dev"],render:()=>a`
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
    variant: 'default',
    type: 'default',
    status: 'success',
    showIcon: false,
    icon: 'add_box',
    value: '1',
    dot: false,
    inverted: false,
    hideBorder: false,
    isHover: false,
    isActive: false
  },
  render: (args: any) => {
    return html\`
      <dss-notification-badge 
                value="\${args.value}"
                variant="\${args.variant}"
                type="\${args.type}"
                status="\${args.status}" 
                .icon="\${args.icon ? args.icon : null}" 
                ?dot=\${args.dot}
                ?inverted=\${args.inverted}
                ?hideBorder=\${args.hideBorder}
                ?isHover=\${args.isHover}
                ?isActive=\${args.isActive}
            >
            </dss-notification-badge>
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
}`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const h=["Playground","Status","Icon","Dot","Interactive","InteractiveExample","HideBorder","Types","SidemenuDot","MenuStyle"],A=Object.freeze(Object.defineProperty({__proto__:null,Dot:c,HideBorder:u,Icon:r,Interactive:v,InteractiveExample:b,MenuStyle:f,Playground:o,SidemenuDot:l,Status:d,Types:g,__namedExportsOrder:h,default:w},Symbol.toStringTag,{value:"Module"}));export{c as D,u as H,r as I,o as P,A as S,g as T,d as a,v as b,b as c,l as d};
