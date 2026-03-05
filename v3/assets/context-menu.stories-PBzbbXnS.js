import{x as a}from"./iframe-CdZ_4rdx.js";import{w as d}from"./storybook-decorators-DSS85Rnr.js";const c=`
    .wrapper {
        height: 150px;
    }
`,b={title:"Components/Context Menu",argTypes:{label:{name:"Text"},elements:{name:"Nombre de ítems",control:{type:"number",max:5,min:1}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",if:{arg:"showIcon"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}}},parameters:{layout:"centered"}},t={render:e=>a`
            <div style="height: 200px; display: flex; align-items: center; justify-content: center;">
                <dss-icon-button icon="more_vert" variant="primary" label="Menu" hideTooltip></dss-icon-button>
                <dss-context-menu .items=${(i=>Array.from({length:i},(m,o)=>({id:`item-${o+1}`,label:`${e.label} ${o+1}`,icon:e.showIcon?e.icon:void 0,disabled:e.disabled})))(e.elements)}></dss-context-menu>
            </div>
    `,args:{label:"Menu",elements:4,showIcon:!0,icon:"add_box",disabled:!1}},n={tags:["!dev"],render:()=>a`
            <div class="wrapper">
                <dss-icon-button icon="more_vert" variant="primary" label="Menu" hideTooltip></dss-icon-button>
                <dss-context-menu .items=${l(4,"Menu",!1,"",!1)}></dss-context-menu>
            </div>
    `,decorators:[d(c,"context-menu-default-style")]},r={tags:["!dev"],render:()=>a`
            <div class="wrapper">
                <dss-icon-button icon="more_vert" variant="primary" label="Menu" hideTooltip></dss-icon-button>
                <dss-context-menu .items=${l(4,"Menu",!0,"add_box",!1)}></dss-context-menu>
            </div>
    `,decorators:[d(c,"context-menu-with-icons-style")]},s={tags:["!dev"],render:()=>a`
            <div class="wrapper">
                <dss-icon-button icon="more_vert" variant="primary" label="Menu" hideTooltip></dss-icon-button>
                <dss-context-menu .items=${l(4,"Menu",!0,"add_box",!0)}></dss-context-menu>
            </div>
    `,decorators:[d(c,"context-menu-disabled-style")]},l=(e,u,i,m,o)=>Array.from({length:e},(v,p)=>({id:`item-${p+1}`,label:`${u} ${p+1}`,icon:i?m:void 0,disabled:o}));t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const getItems = (count: number) => {
      return Array.from({
        length: count
      }, (_, i) => ({
        id: \`item-\${i + 1}\`,
        label: \`\${args.label} \${i + 1}\`,
        icon: args.showIcon ? args.icon : undefined,
        disabled: args.disabled
      }));
    };
    return html\`
            <div style="height: 200px; display: flex; align-items: center; justify-content: center;">
                <dss-icon-button icon="more_vert" variant="primary" label="Menu" hideTooltip></dss-icon-button>
                <dss-context-menu .items=\${getItems(args.elements)}></dss-context-menu>
            </div>
    \`;
  },
  args: {
    label: 'Menu',
    elements: 4,
    showIcon: true,
    icon: 'add_box',
    disabled: false
  } as Args
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-icon-button icon="more_vert" variant="primary" label="Menu" hideTooltip></dss-icon-button>
                <dss-context-menu .items=\${generateMenuItems(4, 'Menu', false, '', false)}></dss-context-menu>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'context-menu-default-style')]
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-icon-button icon="more_vert" variant="primary" label="Menu" hideTooltip></dss-icon-button>
                <dss-context-menu .items=\${generateMenuItems(4, 'Menu', true, 'add_box', false)}></dss-context-menu>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'context-menu-with-icons-style')]
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-icon-button icon="more_vert" variant="primary" label="Menu" hideTooltip></dss-icon-button>
                <dss-context-menu .items=\${generateMenuItems(4, 'Menu', true, 'add_box', true)}></dss-context-menu>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'context-menu-disabled-style')]
}`,...s.parameters?.docs?.source}}};const y=["Playground","ByDefault","WithIcons","Disabled"],h=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:n,Disabled:s,Playground:t,WithIcons:r,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{n as B,s as D,t as P,h as S,r as W};
