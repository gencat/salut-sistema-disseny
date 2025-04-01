import{x as a}from"./lit-html-B2eaWknC.js";const H={title:"Collections/Side Menu",argTypes:{hideCreate:{name:"Amagar botó de crear ",control:{type:"boolean"}},createNotifications:{name:"Quantitat de notificacions per botó de crear",control:{type:"number",max:10,min:0}},topMenuItems:{name:"Quantitat de ítems Role Menu",control:{type:"number",max:6,min:1}},bottomMenuItems:{name:"Quantitat de ítems Global Menu",control:{type:"number",max:6,min:1}},firstItemIcon:{name:"Icona primer item",control:{type:"text"}},firstItemLabel:{name:"Label primer item",control:{type:"text"}},firstItemNotifications:{name:"Notificacions primer item",control:{type:"number",max:6,min:0}},firstItemSelected:{name:"Primer item seleccionat",control:{type:"boolean"}},firstItemDisabled:{name:"Deshabil·litar primer item",control:{type:"boolean"}},axiaHidden:{name:"Amagar botó de Axia",control:{type:"boolean"}},axiaDisabled:{name:"Deshabil·litar botó de Axia",control:{type:"boolean"}},axiaLabel:{name:"Label botó de Axia",control:{type:"text"}}}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=250-5627&m=dev"}},args:{hideCreate:!1,createNotifications:0,topMenuItems:4,bottomMenuItems:3,firstItemIcon:"home",firstItemLabel:"Menu",firstItemNotifications:0,firstItemSelected:!1,firstItemDisabled:!1,axiaHidden:!1,axiaDisabled:!1,axiaLabel:"Axia"},render:e=>{const n=[{label:"Curs clinic",notifications:e.createNotifications},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}],l=()=>{let o=[];return Array.from({length:e.topMenuItems-1},()=>{o.push({icon:"add_box",label:"Role Menu"})}),o},D=[{icon:"settings",label:"Global Menu",notifications:"3",nestedMenu:[{icon:"add_box",label:"Global child 1",notifications:2},{icon:"add_box",label:"Global child 2"},{icon:"add_box",label:"Global child 3",notifications:1}]},...(()=>{let o=[];return Array.from({length:e.bottomMenuItems-1},()=>{o.push({icon:"add_box",label:"Global Menu"})}),o})()],L=[{icon:e.firstItemIcon,label:e.firstItemLabel,notifications:e.firstItemNotifications,disabled:e.firstItemDisabled,nestedMenu:[{icon:"add_box",label:"Role child 1",notifications:e.firstItemNotifications},{icon:"add_box",label:"Role child 2"},{icon:"add_box",label:"Role child 3"}]},...l()];return a`
    <div style="height:850px">
      <dss-side-menu 
        createNotifications="${e.createNotifications}" 
        ?hideCreateMenu=${e.hideCreate}
        .roleMenuItems=${L}
        .createMenuItems=${n}
        .globalMenuItems=${D}
        ?axiaHidden=${e.axiaHidden}
        ?axiaDisabled=${e.axiaDisabled}
        axiaLabel=${e.axiaLabel}
        >
      </dss-side-menu>
    </div>
  `}},t={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic"},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `},s={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          expanded
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic"},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `},d={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          createNotifications="3"
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu",notifications:1},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic",notifications:3},{label:"Informe",selected:!0},{label:"PROM",disabled:!0},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu",notifications:2},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `},b={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          createNotifications="3"
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu",notifications:3,nestedMenu:[{icon:"add_box",label:"Role child 1",notifications:1},{icon:"add_box",label:"Role child 2"},{icon:"add_box",label:"Role child 3",notifications:2,nestedMenu:[{icon:"add_box",label:"Role subchild 1",notifications:1},{icon:"add_box",label:"Role subchild 2"},{icon:"add_box",label:"Role subchild 3",notifications:1}]}]},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic",notifications:3},{label:"Informe",selected:!0},{label:"PROM",disabled:!0},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu",notifications:2,nestedMenu:[{icon:"add_box",label:"Global child 1",notifications:1},{icon:"add_box",label:"Global child 2"},{icon:"add_box",label:"Global child 3",notifications:1,nestedMenu:[{icon:"add_box",label:"Global subchild 1",notifications:1},{icon:"add_box",label:"Global subchild 2"},{icon:"add_box",label:"Global subchild 3",notifications:1}]}]},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `},c={tags:["!dev"],render:()=>a`
      <aside class="wrapper">
        <dss-side-menu
          axiaHidden
          .roleMenuItems=${[{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"},{icon:"add_box",label:"Role Menu"}]}
          .createMenuItems=${[{label:"Curs clinic"},{label:"Informe"},{label:"PROM"},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `},r={tags:["!dev"],render:()=>a`
      <aside class="wrapper wrapper--reduced">
        <dss-side-menu
          createNotifications="3"
          .roleMenuItems=${[{icon:"add_box",label:"Role 1"},{icon:"add_box",label:"Role 2",notifications:3,nestedMenu:[{icon:"add_box",label:"Role child 1",notifications:1},{icon:"add_box",label:"Role child 2"},{icon:"add_box",label:"Role child 3",notifications:2,nestedMenu:[{icon:"add_box",label:"Role subchild 1",notifications:1},{icon:"add_box",label:"Role subchild 2"},{icon:"add_box",label:"Role subchild 3",notifications:1}]}]},{icon:"add_box",label:"Role 3"},{icon:"add_box",label:"Role 4"},{icon:"add_box",label:"Role 5"},{icon:"add_box",label:"Role 6"},{icon:"add_box",label:"Role 7"}]}
          .createMenuItems=${[{label:"Curs clinic",notifications:3},{label:"Informe",selected:!0},{label:"PROM",disabled:!0},{label:"Visita"},{label:"Prescipció"}]}
          .globalMenuItems=${[{icon:"add_box",label:"Global Menu",notifications:2,nestedMenu:[{icon:"add_box",label:"Global child 1",notifications:1},{icon:"add_box",label:"Global child 2"},{icon:"add_box",label:"Global child 3",notifications:1,nestedMenu:[{icon:"add_box",label:"Global subchild 1",notifications:1},{icon:"add_box",label:"Global subchild 2"},{icon:"add_box",label:"Global subchild 3",notifications:1}]}]},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"},{icon:"add_box",label:"Global Menu"}]}>
        </dss-side-menu>
      </aside>
    `};var u,m,M;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      let items: any[] = [];
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
      let items: any[] = [];
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
}`,...(M=(m=i.parameters)==null?void 0:m.docs)==null?void 0:M.source}}};var x,I,_;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          .roleMenuItems=\${roleMenuItems}
          .createMenuItems=\${createMenuItems}
          .globalMenuItems=\${globalMenuItems}>
        </dss-side-menu>
      </aside>
    \`;
  }
}`,...(_=(I=t.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var f,p,R;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  }
}`,...(R=(p=s.parameters)==null?void 0:p.docs)==null?void 0:R.source}}};var g,h,G;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  }
}`,...(G=(h=d.parameters)==null?void 0:h.docs)==null?void 0:G.source}}};var $,P,y;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
  }
}`,...(y=(P=b.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var N,C,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
  }
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var S,v,O;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
  }
}`,...(O=(v=r.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};const A=["Playground","ByDefault","Expanded","ListItemOptions","NestedMenu","HideAxia","ReducedHeight"],T=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:t,Expanded:s,HideAxia:c,ListItemOptions:d,NestedMenu:b,Playground:i,ReducedHeight:r,__namedExportsOrder:A,default:H},Symbol.toStringTag,{value:"Module"}));export{t as B,s as E,c as H,d as L,b as N,i as P,r as R,T as S};
