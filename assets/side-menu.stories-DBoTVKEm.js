import{x as a}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const i=`
 .wrapper {
        height: 900px;
    }
    .wrapper--reduced {
        height: 700px;
    }
`,V={title:"Collections/Side Menu",argTypes:{hideCreate:{name:"Amagar botó de crear ",control:{type:"boolean"}},createNotifications:{name:"Quantitat de notificacions per botó de crear",control:{type:"number",max:10,min:0}},topMenuItems:{name:"Quantitat de ítems Role Menu",control:{type:"number",max:6,min:1}},bottomMenuItems:{name:"Quantitat de ítems Global Menu",control:{type:"number",max:6,min:1}},firstItemIcon:{name:"Icona primer item",control:{type:"text"}},firstItemLabel:{name:"Label primer item",control:{type:"text"}},firstItemNotifications:{name:"Notificacions primer item",control:{type:"number",max:6,min:0}},firstItemSelected:{name:"Primer item seleccionat",control:{type:"boolean"}},firstItemDisabled:{name:"Deshabil·litar primer item",control:{type:"boolean"}},axiaHidden:{name:"Amagar botó de Axia",control:{type:"boolean"}},axiaDisabled:{name:"Deshabil·litar botó de Axia",control:{type:"boolean"}},axiaLabel:{name:"Label botó de Axia",control:{type:"text"}}}},d={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=250-5627&m=dev"}},args:{hideCreate:!1,createNotifications:0,topMenuItems:4,bottomMenuItems:3,firstItemIcon:"home",firstItemLabel:"Menu",firstItemNotifications:0,firstItemSelected:!1,firstItemDisabled:!1,axiaHidden:!1,axiaDisabled:!1,axiaLabel:"Axia"},render:e=>{const n=[{label:"Top menu",icon:"door_front"}],o=[{label:"Curs clinic",notifications:e.createNotifications},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}],l=()=>{const s=[];return Array.from({length:e.topMenuItems-1},()=>{s.push({icon:"add_box",label:"Role Menu"})}),s},H=[{icon:"settings",label:"Global Menu",notifications:"3",nestedMenu:[{icon:"add_box",label:"Global child 1",notifications:2},{icon:"add_box",label:"Global child 2"},{icon:"add_box",label:"Global child 3",notifications:1}]},...(()=>{const s=[];return Array.from({length:e.bottomMenuItems-1},()=>{s.push({icon:"add_box",label:"Global Menu"})}),s})()],A=[{icon:e.firstItemIcon,label:e.firstItemLabel,notifications:e.firstItemNotifications,disabled:e.firstItemDisabled,nestedMenu:[{icon:"add_box",label:"Role child 1",notifications:e.firstItemNotifications},{icon:"add_box",label:"Role child 2"},{icon:"add_box",label:"Role child 3"}]},...l()];return a`
    <div style="height:850px">
      <dss-side-menu 
        createNotifications="${e.createNotifications}" 
        ?hideCreateMenu=${e.hideCreate}
        .roleMenuItems=${A}
        .createMenuItems=${o}
        .globalMenuItems=${H}
                .topMenuItems=${n}
        ?axiaHidden=${e.axiaHidden}
        ?axiaDisabled=${e.axiaDisabled}
        axiaLabel=${e.axiaLabel}
        >
      </dss-side-menu>
    </div>
  `}},b={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
                    .topMenuItems=${[{label:"Top menu",icon:"door_front"}]}
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"open_in_new",label:"Role Menu",external:!0},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic"},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `,decorators:[t(i,"sidemenu-default-style")]},c={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          expanded
                    .topMenuItems=${[{label:"Top menu",icon:"door_front"}]}
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic"},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `,decorators:[t(i,"sidemenu-expanded-style")]},r={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          createNotifications="3"
                    .topMenuItems=${[{label:"Top menu",icon:"door_front"}]}
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu",notifications:1},{icon:"star",label:"Role Menu",selected:!0},{icon:"block",label:"Role Menu",disabled:!0},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic",notifications:3},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu",notifications:2},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `,decorators:[t(i,"sidemenu-listitem-style")]},u={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          createNotifications="3"
          .topMenuItems=${[{label:"Top menu",icon:"door_front"}]}
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu",notifications:3,nestedMenu:[{icon:"add_box",label:"Role child 1",notifications:1},{icon:"add_box",label:"Role child 2",nestedMenu:[{icon:"add_box",label:"Role subchild 1"},{icon:"add_box",label:"Role subchild 2"},{icon:"add_box",label:"Role subchild 3"}]},{icon:"add_box",label:"Role child 3",notifications:2,nestedMenu:[{icon:"add_box",label:"Role subchild 1",notifications:1},{icon:"add_box",label:"Role subchild 2"},{icon:"add_box",label:"Role subchild 3",notifications:1}]}]},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic",notifications:3},{label:"Informe",selected:!0},{label:"PROM",disabled:!0},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu",notifications:2,nestedMenu:[{icon:"add_box",label:"Global child 1",notifications:1},{icon:"add_box",label:"Global child 2"},{icon:"add_box",label:"Global child 3",notifications:1,nestedMenu:[{icon:"add_box",label:"Global subchild 1",notifications:1},{icon:"add_box",label:"Global subchild 2"},{icon:"add_box",label:"Global subchild 3",notifications:1}]}]},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `,decorators:[t(i,"sidemenu-nested-style")]},m={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          axiaHidden
                    .topMenuItems=${[{label:"Top menu",icon:"door_front"}]}
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic"},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `,decorators:[t(i,"sidemenu-hideaxia-style")]},M={tags:["!dev"],render:()=>a`
      <aside class="wrapper wrapper--reduced">
        <dss-side-menu
          createNotifications="3"
                    .topMenuItems=${[{label:"Top menu",icon:"door_front"}]}
          .roleMenuItems=${[{icon:"add_box",label:"Role 1"},{icon:"add_box",label:"Role 2",notifications:3,nestedMenu:[{icon:"add_box",label:"Role child 1",notifications:1},{icon:"add_box",label:"Role child 2"},{icon:"add_box",label:"Role child 3",notifications:2,nestedMenu:[{icon:"add_box",label:"Role subchild 1",notifications:1},{icon:"add_box",label:"Role subchild 2"},{icon:"add_box",label:"Role subchild 3",notifications:1}]}]},{icon:"add_box",label:"Role 3"},{icon:"add_box",label:"Role 4"},{icon:"add_box",label:"Role 5"},{icon:"add_box",label:"Role 6"},{icon:"add_box",label:"Role 7"}]}
          .createMenuItems=${[{label:"Curs clinic",notifications:3},{label:"Informe",selected:!0},{label:"PROM",disabled:!0},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu",notifications:2,nestedMenu:[{icon:"add_box",label:"Global child 1",notifications:1},{icon:"add_box",label:"Global child 2"},{icon:"add_box",label:"Global child 3",notifications:1,nestedMenu:[{icon:"add_box",label:"Global subchild 1",notifications:1},{icon:"add_box",label:"Global subchild 2"},{icon:"add_box",label:"Global subchild 3",notifications:1}]}]},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `,decorators:[t(i,"sidemenu-reduced-style")]};var I,x,p;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=250-5627&m=dev'
    }
  },
  args: {
    hideCreate: false,
    createNotifications: 0,
    topMenuItems: 4,
    bottomMenuItems: 3,
    firstItemIcon: 'home',
    firstItemLabel: 'Menu',
    firstItemNotifications: 0,
    firstItemSelected: false,
    firstItemDisabled: false,
    axiaHidden: false,
    axiaDisabled: false,
    axiaLabel: 'Axia'
  },
  render: (args: any) => {
    const topMenuItems = [{
      label: 'Top menu',
      icon: 'door_front'
    }];
    const createMenuItems = [{
      label: 'Curs clinic',
      notifications: args.createNotifications
    }, {
      label: 'Informe'
    }, {
      label: 'PROM'
    }, {
      label: 'Visita'
    }, {
      label: 'Prescipció'
    }];
    const generateTopItems = () => {
      const items: any[] = [];
      Array.from({
        length: args.topMenuItems - 1
      }, () => {
        items.push({
          icon: 'add_box',
          label: 'Role Menu'
        });
      });
      return items;
    };
    const generateBottomItems = () => {
      const items: any[] = [];
      Array.from({
        length: args.bottomMenuItems - 1
      }, () => {
        items.push({
          icon: 'add_box',
          label: 'Global Menu'
        });
      });
      return items;
    };
    const globalMenuItems: any[] = [{
      icon: 'settings',
      label: 'Global Menu',
      notifications: '3',
      nestedMenu: [{
        icon: 'add_box',
        label: 'Global child 1',
        notifications: 2
      }, {
        icon: 'add_box',
        label: 'Global child 2'
      }, {
        icon: 'add_box',
        label: 'Global child 3',
        notifications: 1
      }]
    }, ...generateBottomItems()];
    const roleMenuItems: any[] = [{
      icon: args.firstItemIcon,
      label: args.firstItemLabel,
      notifications: args.firstItemNotifications,
      disabled: args.firstItemDisabled,
      nestedMenu: [{
        icon: 'add_box',
        label: 'Role child 1',
        notifications: args.firstItemNotifications
      }, {
        icon: 'add_box',
        label: 'Role child 2'
      }, {
        icon: 'add_box',
        label: 'Role child 3'
      }]
    }, ...generateTopItems()];
    return html\`
    <div style="height:850px">
      <dss-side-menu 
        createNotifications="\${args.createNotifications}" 
        ?hideCreateMenu=\${args.hideCreate}
        .roleMenuItems=\${roleMenuItems}
        .createMenuItems=\${createMenuItems}
        .globalMenuItems=\${globalMenuItems}
                .topMenuItems=\${topMenuItems}
        ?axiaHidden=\${args.axiaHidden}
        ?axiaDisabled=\${args.axiaDisabled}
        axiaLabel=\${args.axiaLabel}
        >
      </dss-side-menu>
    </div>
  \`;
  }
}`,...(p=(x=d.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var _,f,h;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const topMenuItems = [{
      label: 'Top menu',
      icon: 'door_front'
    }];
    const createMenuItems = [{
      label: 'Curs clinic'
    }, {
      label: 'Informe'
    }, {
      label: 'PROM'
    }, {
      label: 'Visita'
    }, {
      label: 'Prescipció'
    }];
    const globalMenuItems = [{
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }];
    const roleMenuItems = [{
      icon: 'add_box',
      label: 'Role Menu'
    }, {
      icon: 'add_box',
      label: 'Role Menu'
    }, {
      icon: 'open_in_new',
      label: 'Role Menu',
      external: true
    }, {
      icon: 'add_box',
      label: 'Role Menu'
    }];
    return html\`
      <aside class="wrapper">
        <dss-side-menu
                    .topMenuItems=\${topMenuItems}
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidemenu-default-style')]
}`,...(h=(f=b.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var R,g,G;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const topMenuItems = [{
      label: 'Top menu',
      icon: 'door_front'
    }];
    const createMenuItems = [{
      label: 'Curs clinic'
    }, {
      label: 'Informe'
    }, {
      label: 'PROM'
    }, {
      label: 'Visita'
    }, {
      label: 'Prescipció'
    }];
    const globalMenuItems = [{
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }];
    const roleMenuItems = [{
      icon: 'add_box',
      label: 'Role Menu'
    }, {
      icon: 'add_box',
      label: 'Role Menu'
    }, {
      icon: 'add_box',
      label: 'Role Menu'
    }, {
      icon: 'add_box',
      label: 'Role Menu'
    }];
    return html\`
      <aside class="wrapper">
        <dss-side-menu
          expanded
                    .topMenuItems=\${topMenuItems}
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidemenu-expanded-style')]
}`,...(G=(g=c.parameters)==null?void 0:g.docs)==null?void 0:G.source}}};var $,y,w;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const topMenuItems = [{
      label: 'Top menu',
      icon: 'door_front'
    }];
    const createMenuItems = [{
      label: 'Curs clinic',
      notifications: 3
    }, {
      label: 'Informe'
    }, {
      label: 'PROM'
    }, {
      label: 'Visita'
    }, {
      label: 'Prescipció'
    }];
    const globalMenuItems = [{
      icon: 'add_box',
      label: 'Global Menu',
      notifications: 2
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }];
    const roleMenuItems = [{
      icon: 'add_box',
      label: 'Role Menu'
    }, {
      icon: 'add_box',
      label: 'Role Menu',
      notifications: 1
    }, {
      icon: 'star',
      label: 'Role Menu',
      selected: true
    }, {
      icon: 'block',
      label: 'Role Menu',
      disabled: true
    }, {
      icon: 'add_box',
      label: 'Role Menu'
    }];
    return html\`
      <aside class="wrapper">
        <dss-side-menu
          createNotifications="3"
                    .topMenuItems=\${topMenuItems}
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidemenu-listitem-style')]
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var P,S,N;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const topMenuItems = [{
      label: 'Top menu',
      icon: 'door_front'
    }];
    const createMenuItems = [{
      label: 'Curs clinic',
      notifications: 3
    }, {
      label: 'Informe',
      selected: true
    }, {
      label: 'PROM',
      disabled: true
    }, {
      label: 'Visita'
    }, {
      label: 'Prescipció'
    }];
    const globalMenuItems = [{
      icon: 'add_box',
      label: 'Global Menu',
      notifications: 2,
      nestedMenu: [{
        icon: 'add_box',
        label: 'Global child 1',
        notifications: 1
      }, {
        icon: 'add_box',
        label: 'Global child 2'
      }, {
        icon: 'add_box',
        label: 'Global child 3',
        notifications: 1,
        nestedMenu: [{
          icon: 'add_box',
          label: 'Global subchild 1',
          notifications: 1
        }, {
          icon: 'add_box',
          label: 'Global subchild 2'
        }, {
          icon: 'add_box',
          label: 'Global subchild 3',
          notifications: 1
        }]
      }]
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }];
    const roleMenuItems = [{
      icon: 'add_box',
      label: 'Role Menu'
    }, {
      icon: 'add_box',
      label: 'Role Menu',
      notifications: 3,
      nestedMenu: [{
        icon: 'add_box',
        label: 'Role child 1',
        notifications: 1
      }, {
        icon: 'add_box',
        label: 'Role child 2',
        nestedMenu: [{
          icon: 'add_box',
          label: 'Role subchild 1'
        }, {
          icon: 'add_box',
          label: 'Role subchild 2'
        }, {
          icon: 'add_box',
          label: 'Role subchild 3'
        }]
      }, {
        icon: 'add_box',
        label: 'Role child 3',
        notifications: 2,
        nestedMenu: [{
          icon: 'add_box',
          label: 'Role subchild 1',
          notifications: 1
        }, {
          icon: 'add_box',
          label: 'Role subchild 2'
        }, {
          icon: 'add_box',
          label: 'Role subchild 3',
          notifications: 1
        }]
      }]
    }, {
      icon: 'add_box',
      label: 'Role Menu'
    }, {
      icon: 'add_box',
      label: 'Role Menu'
    }];
    return html\`
      <aside class="wrapper">
        <dss-side-menu
          createNotifications="3"
          .topMenuItems=\${topMenuItems}
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidemenu-nested-style')]
}`,...(N=(S=u.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var C,T,v;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const topMenuItems = [{
      label: 'Top menu',
      icon: 'door_front'
    }];
    const createMenuItems = [{
      label: 'Curs clinic'
    }, {
      label: 'Informe'
    }, {
      label: 'PROM'
    }, {
      label: 'Visita'
    }, {
      label: 'Prescipció'
    }];
    const globalMenuItems = [{
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }];
    const roleMenuItems = [{
      icon: 'add_box',
      label: 'Role Menu'
    }, {
      icon: 'add_box',
      label: 'Role Menu'
    }, {
      icon: 'add_box',
      label: 'Role Menu'
    }, {
      icon: 'add_box',
      label: 'Role Menu'
    }];
    return html\`
      <aside class="wrapper">
        <dss-side-menu
          axiaHidden
                    .topMenuItems=\${topMenuItems}
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidemenu-hideaxia-style')]
}`,...(v=(T=m.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var O,D,L;M.parameters={...M.parameters,docs:{...(O=M.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const topMenuItems = [{
      label: 'Top menu',
      icon: 'door_front'
    }];
    const createMenuItems = [{
      label: 'Curs clinic',
      notifications: 3
    }, {
      label: 'Informe',
      selected: true
    }, {
      label: 'PROM',
      disabled: true
    }, {
      label: 'Visita'
    }, {
      label: 'Prescipció'
    }];
    const globalMenuItems = [{
      icon: 'add_box',
      label: 'Global Menu',
      notifications: 2,
      nestedMenu: [{
        icon: 'add_box',
        label: 'Global child 1',
        notifications: 1
      }, {
        icon: 'add_box',
        label: 'Global child 2'
      }, {
        icon: 'add_box',
        label: 'Global child 3',
        notifications: 1,
        nestedMenu: [{
          icon: 'add_box',
          label: 'Global subchild 1',
          notifications: 1
        }, {
          icon: 'add_box',
          label: 'Global subchild 2'
        }, {
          icon: 'add_box',
          label: 'Global subchild 3',
          notifications: 1
        }]
      }]
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }, {
      icon: 'add_box',
      label: 'Global Menu'
    }];
    const roleMenuItems = [{
      icon: 'add_box',
      label: 'Role 1'
    }, {
      icon: 'add_box',
      label: 'Role 2',
      notifications: 3,
      nestedMenu: [{
        icon: 'add_box',
        label: 'Role child 1',
        notifications: 1
      }, {
        icon: 'add_box',
        label: 'Role child 2'
      }, {
        icon: 'add_box',
        label: 'Role child 3',
        notifications: 2,
        nestedMenu: [{
          icon: 'add_box',
          label: 'Role subchild 1',
          notifications: 1
        }, {
          icon: 'add_box',
          label: 'Role subchild 2'
        }, {
          icon: 'add_box',
          label: 'Role subchild 3',
          notifications: 1
        }]
      }]
    }, {
      icon: 'add_box',
      label: 'Role 3'
    }, {
      icon: 'add_box',
      label: 'Role 4'
    }, {
      icon: 'add_box',
      label: 'Role 5'
    }, {
      icon: 'add_box',
      label: 'Role 6'
    }, {
      icon: 'add_box',
      label: 'Role 7'
    }];
    return html\`
      <aside class="wrapper wrapper--reduced">
        <dss-side-menu
          createNotifications="3"
                    .topMenuItems=\${topMenuItems}
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidemenu-reduced-style')]
}`,...(L=(D=M.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const B=["Playground","ByDefault","Expanded","ListItemOptions","NestedMenu","HideAxia","ReducedHeight"],z=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:b,Expanded:c,HideAxia:m,ListItemOptions:r,NestedMenu:u,Playground:d,ReducedHeight:M,__namedExportsOrder:B,default:V},Symbol.toStringTag,{value:"Module"}));export{b as B,c as E,m as H,r as L,u as N,d as P,M as R,z as S};
