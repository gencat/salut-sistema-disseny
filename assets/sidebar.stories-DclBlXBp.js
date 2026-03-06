import"./lit-element-BL4lq474.js";import{x as a}from"./lit-html-D6cejpwM.js";import{w as r}from"./storybook-decorators-DSS85Rnr.js";const o=`
    .layout {
        height: 500px;
        width: 800px;
        display: flex;
        border: 1px dashed var(--color-neutral-50);

        .layout-content {
            flex: 1;
            padding: 32px 16px;
        }
    }
    .layout--reverse {
        flex-direction: row-reverse;
    }
`,w={title:"Collections/Sidebar",component:"dss-sidebar",argTypes:{showTitle:{name:"Mostrar título",control:{type:"boolean"}},titleText:{name:"Títol",if:{arg:"showTitle"}},placement:{name:"Posició del sidebar",control:{type:"radio"},options:["left","right"]},iconRight:{name:"Icona dreta"},iconLeft:{name:"Icona esquerra"}}},t={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev"}},args:{showTitle:!0,titleText:"Títol",placement:"left",iconRight:"keyboard_arrow_right",iconLeft:"keyboard_arrow_left"},render:e=>{const S=[{label:"Item1",icon:"add_box",hasAction:!0},{label:"Item2",icon:"add_box",hasAction:!0},{label:"Item3",icon:"add_box",hasAction:!0}],d=()=>a`
            <dss-sidebar
                titleText=${e.showTitle?e.titleText:void 0}
                placement=${e.placement}
                iconToggleRight=${e.iconRight}
                iconToggleLeft=${e.iconLeft}
                ?expanded=${e.expanded}
            >
                <dss-list-menu .items=${S}></dss-list-menu>
            </dss-sidebar>
        `;return a`
        <div style="height: 500px; width: 800px; display: flex;border: 1px dashed var(--color-neutral-50);">
            ${e.placement==="left"?d():null}
            <div style="flex: 1; padding: 28px 16px;">
                El component sidebar necessita estar inclòs dins d’un contenidor/layout amb una 
                alçada específica, ja sigui mitjançant píxels o mitjançant una configuració display: flex 
                que ocupi tot l’espai disponible; en cas contrari, no s’ajustarà automàticament.
            </div>
            ${e.placement==="right"?d():null}
        </div>
    `}},l=[{label:"Item1",icon:"add_box",hasAction:!0},{label:"Item2",icon:"add_box",hasAction:!0},{label:"Item3",icon:"add_box",hasAction:!0}],i={tags:["!dev"],render:()=>a`
            <div class='layout'>
                <dss-sidebar titleText="Títol">
                    <dss-list-menu .items=${l}></dss-list-menu>
                </dss-sidebar>
                <div class='layout-content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, at volutpat nisl. Sed a nunc sed ligula efficitur efficitur. Donec eget felis ac nisi commodo efficitur. Donec suscipit auctor dui, at volutpat nisl. Sed a nunc sed ligula efficitur efficitur. Donec eget felis ac nisi commodo efficitur.</p>
                </div>
            </div>
    `,decorators:[r(o,"sidebar-left-style")]},s={tags:["!dev"],render:()=>a`
            <div class='layout layout--reverse'>
                <dss-sidebar titleText="Títol" placement="right">
                    <dss-list-menu .items=${l}></dss-list-menu>
                </dss-sidebar>
                <div class='layout-content'>
                    <p>Per col·locar el sidebar a la dreta, podeu moure el contingut HTML darrere del contenidor principal o modificar la direcció del display: flex amb row-reverse.</p>
                </div>
            </div>
    `,decorators:[r(o,"sidebar-right-style")]},n={tags:["!dev"],render:()=>a`
      <div class='layout'>
                <dss-sidebar>
                    <dss-list-menu .items=${l}></dss-list-menu>
                </dss-sidebar>
                <div class='layout-content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, at volutpat nisl. Sed a nunc sed ligula efficitur efficitur. Donec eget felis ac nisi commodo efficitur. Donec suscipit auctor dui, at volutpat nisl. Sed a nunc sed ligula efficitur efficitur. Donec eget felis ac nisi commodo efficitur.</p>
                </div>
            </div>
    `,decorators:[r(o,"sidebar-no-title-style")]};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev'
    }
  },
  args: {
    showTitle: true,
    titleText: 'Títol',
    placement: 'left',
    iconRight: 'keyboard_arrow_right',
    iconLeft: 'keyboard_arrow_left'
  },
  render: (args: {
    showTitle: boolean;
    titleText: string;
    placement: string;
    iconLeft: string;
    iconRight: string;
    expanded: boolean;
  }) => {
    const listMenuItems = [{
      label: 'Item1',
      icon: 'add_box',
      hasAction: true
    }, {
      label: 'Item2',
      icon: 'add_box',
      hasAction: true
    }, {
      label: 'Item3',
      icon: 'add_box',
      hasAction: true
    }];
    const renderSidebar = () => html\`
            <dss-sidebar
                titleText=\${args.showTitle ? args.titleText : undefined}
                placement=\${args.placement}
                iconToggleRight=\${args.iconRight}
                iconToggleLeft=\${args.iconLeft}
                ?expanded=\${args.expanded}
            >
                <dss-list-menu .items=\${listMenuItems}></dss-list-menu>
            </dss-sidebar>
        \`;
    return html\`
        <div style="height: 500px; width: 800px; display: flex;border: 1px dashed var(--color-neutral-50);">
            \${args.placement === 'left' ? renderSidebar() : null}
            <div style="flex: 1; padding: 28px 16px;">
                El component sidebar necessita estar inclòs dins d’un contenidor/layout amb una 
                alçada específica, ja sigui mitjançant píxels o mitjançant una configuració display: flex 
                que ocupi tot l’espai disponible; en cas contrari, no s’ajustarà automàticament.
            </div>
            \${args.placement === 'right' ? renderSidebar() : null}
        </div>
    \`;
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,f,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class='layout'>
                <dss-sidebar titleText="Títol">
                    <dss-list-menu .items=\${renderListMenuItems}></dss-list-menu>
                </dss-sidebar>
                <div class='layout-content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, at volutpat nisl. Sed a nunc sed ligula efficitur efficitur. Donec eget felis ac nisi commodo efficitur. Donec suscipit auctor dui, at volutpat nisl. Sed a nunc sed ligula efficitur efficitur. Donec eget felis ac nisi commodo efficitur.</p>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidebar-left-style')]
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,v,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class='layout layout--reverse'>
                <dss-sidebar titleText="Títol" placement="right">
                    <dss-list-menu .items=\${renderListMenuItems}></dss-list-menu>
                </dss-sidebar>
                <div class='layout-content'>
                    <p>Per col·locar el sidebar a la dreta, podeu moure el contingut HTML darrere del contenidor principal o modificar la direcció del display: flex amb row-reverse.</p>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidebar-right-style')]
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,h,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class='layout'>
                <dss-sidebar>
                    <dss-list-menu .items=\${renderListMenuItems}></dss-list-menu>
                </dss-sidebar>
                <div class='layout-content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, at volutpat nisl. Sed a nunc sed ligula efficitur efficitur. Donec eget felis ac nisi commodo efficitur. Donec suscipit auctor dui, at volutpat nisl. Sed a nunc sed ligula efficitur efficitur. Donec eget felis ac nisi commodo efficitur.</p>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidebar-no-title-style')]
}`,...(T=(h=n.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const _=["Playground","PlacementLeft","PlacementRight","NoTitle"],D=Object.freeze(Object.defineProperty({__proto__:null,NoTitle:n,PlacementLeft:i,PlacementRight:s,Playground:t,__namedExportsOrder:_,default:w},Symbol.toStringTag,{value:"Module"}));export{n as N,t as P,D as S,i as a,s as b};
