import{x as a}from"./lit-html-D6cejpwM.js";import{w as o}from"./storybook-decorators-DSS85Rnr.js";const i=`
 .wrapper {
        height: 900px;
    }
    .wrapper--reduced {
        height: 700px;
    }
`,V={title:"Collections/Side Menu",argTypes:{hideCreate:{name:"Amagar botó de crear ",control:{type:"boolean"}},createNotifications:{name:"Quantitat de notificacions per botó de crear",control:{type:"number",max:10,min:0}},topMenuItems:{name:"Quantitat de ítems Role Menu",control:{type:"number",max:6,min:1}},bottomMenuItems:{name:"Quantitat de ítems Global Menu",control:{type:"number",max:6,min:1}},firstItemIcon:{name:"Icona primer item",control:{type:"text"}},firstItemLabel:{name:"Label primer item",control:{type:"text"}},firstItemNotifications:{name:"Notificacions primer item",control:{type:"number",max:6,min:0}},firstItemSelected:{name:"Primer item seleccionat",control:{type:"boolean"}},firstItemDisabled:{name:"Deshabil·litar primer item",control:{type:"boolean"}},axiaHidden:{name:"Amagar botó de Axia",control:{type:"boolean"}},axiaDisabled:{name:"Deshabil·litar botó de Axia",control:{type:"boolean"}},axiaLabel:{name:"Label botó de Axia",control:{type:"text"}}}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=250-5627&m=dev"}},args:{hideCreate:!1,createNotifications:0,topMenuItems:4,bottomMenuItems:3,firstItemIcon:"home",firstItemLabel:"Menu",firstItemNotifications:0,firstItemSelected:!1,firstItemDisabled:!1,axiaHidden:!1,axiaDisabled:!1,axiaLabel:"Axia"},render:e=>{const n=[{label:"Curs clinic",notifications:e.createNotifications},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}],l=()=>{const t=[];return Array.from({length:e.topMenuItems-1},()=>{t.push({icon:"add_box",label:"Role Menu"})}),t},H=[{icon:"settings",label:"Global Menu",notifications:"3",nestedMenu:[{icon:"add_box",label:"Global child 1",notifications:2},{icon:"add_box",label:"Global child 2"},{icon:"add_box",label:"Global child 3",notifications:1}]},...(()=>{const t=[];return Array.from({length:e.bottomMenuItems-1},()=>{t.push({icon:"add_box",label:"Global Menu"})}),t})()],A=[{icon:e.firstItemIcon,label:e.firstItemLabel,notifications:e.firstItemNotifications,disabled:e.firstItemDisabled,nestedMenu:[{icon:"add_box",label:"Role child 1",notifications:e.firstItemNotifications},{icon:"add_box",label:"Role child 2"},{icon:"add_box",label:"Role child 3"}]},...l()];return a`
    <div style="height:850px">
      <dss-side-menu 
        createNotifications="${e.createNotifications}" 
        ?hideCreateMenu=${e.hideCreate}
        .roleMenuItems=${A}
        .createMenuItems=${n}
        .globalMenuItems=${H}
        ?axiaHidden=${e.axiaHidden}
        ?axiaDisabled=${e.axiaDisabled}
        axiaLabel=${e.axiaLabel}
        >
      </dss-side-menu>
    </div>
  `}},d={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"open_in_new",label:"Role Menu",external:!0},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic"},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `,decorators:[o(i,"sidemenu-default-style")]},b={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          expanded
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic"},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `,decorators:[o(i,"sidemenu-expanded-style")]},c={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          createNotifications="3"
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu",notifications:1},{icon:"star",label:"Role Menu",selected:!0},{icon:"block",label:"Role Menu",disabled:!0},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic",notifications:3},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu",notifications:2},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `,decorators:[o(i,"sidemenu-listitem-style")]},r={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          createNotifications="3"
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu",notifications:3,nestedMenu:[{icon:"add_box",label:"Role child 1",notifications:1},{icon:"add_box",label:"Role child 2",nestedMenu:[{icon:"add_box",label:"Role subchild 1"},{icon:"add_box",label:"Role subchild 2"},{icon:"add_box",label:"Role subchild 3"}]},{icon:"add_box",label:"Role child 3",notifications:2,nestedMenu:[{icon:"add_box",label:"Role subchild 1",notifications:1},{icon:"add_box",label:"Role subchild 2"},{icon:"add_box",label:"Role subchild 3",notifications:1}]}]},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic",notifications:3},{label:"Informe",selected:!0},{label:"PROM",disabled:!0},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu",notifications:2,nestedMenu:[{icon:"add_box",label:"Global child 1",notifications:1},{icon:"add_box",label:"Global child 2"},{icon:"add_box",label:"Global child 3",notifications:1,nestedMenu:[{icon:"add_box",label:"Global subchild 1",notifications:1},{icon:"add_box",label:"Global subchild 2"},{icon:"add_box",label:"Global subchild 3",notifications:1}]}]},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `,decorators:[o(i,"sidemenu-nested-style")]},u={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          axiaHidden
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic"},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `,decorators:[o(i,"sidemenu-hideaxia-style")]},m={tags:["!dev"],render:()=>a`
      <aside class="wrapper wrapper--reduced">
        <dss-side-menu
          createNotifications="3"
          .roleMenuItems=${[{icon:"add_box",label:"Role 1"},{icon:"add_box",label:"Role 2",notifications:3,nestedMenu:[{icon:"add_box",label:"Role child 1",notifications:1},{icon:"add_box",label:"Role child 2"},{icon:"add_box",label:"Role child 3",notifications:2,nestedMenu:[{icon:"add_box",label:"Role subchild 1",notifications:1},{icon:"add_box",label:"Role subchild 2"},{icon:"add_box",label:"Role subchild 3",notifications:1}]}]},{icon:"add_box",label:"Role 3"},{icon:"add_box",label:"Role 4"},{icon:"add_box",label:"Role 5"},{icon:"add_box",label:"Role 6"},{icon:"add_box",label:"Role 7"}]}
          .createMenuItems=${[{label:"Curs clinic",notifications:3},{label:"Informe",selected:!0},{label:"PROM",disabled:!0},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu",notifications:2,nestedMenu:[{icon:"add_box",label:"Global child 1",notifications:1},{icon:"add_box",label:"Global child 2"},{icon:"add_box",label:"Global child 3",notifications:1,nestedMenu:[{icon:"add_box",label:"Global subchild 1",notifications:1},{icon:"add_box",label:"Global subchild 2"},{icon:"add_box",label:"Global subchild 3",notifications:1}]}]},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `,decorators:[o(i,"sidemenu-reduced-style")]};var M,x,I;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        ?axiaHidden=\${args.axiaHidden}
        ?axiaDisabled=\${args.axiaDisabled}
        axiaLabel=\${args.axiaLabel}
        >
      </dss-side-menu>
    </div>
  \`;
  }
}`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var _,f,p;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
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
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidemenu-default-style')]
}`,...(p=(f=d.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var h,R,g;b.parameters={...b.parameters,docs:{...(h=b.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
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
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidemenu-expanded-style')]
}`,...(g=(R=b.parameters)==null?void 0:R.docs)==null?void 0:g.source}}};var G,y,$;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
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
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidemenu-listitem-style')]
}`,...($=(y=c.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var w,P,S;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
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
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidemenu-nested-style')]
}`,...(S=(P=r.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var N,C,v;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
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
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidemenu-hideaxia-style')]
}`,...(v=(C=u.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var O,D,L;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
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
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'sidemenu-reduced-style')]
}`,...(L=(D=m.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const B=["Playground","ByDefault","Expanded","ListItemOptions","NestedMenu","HideAxia","ReducedHeight"],F=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:d,Expanded:b,HideAxia:u,ListItemOptions:c,NestedMenu:r,Playground:s,ReducedHeight:m,__namedExportsOrder:B,default:V},Symbol.toStringTag,{value:"Module"}));export{d as B,b as E,u as H,c as L,r as N,s as P,m as R,F as S};
