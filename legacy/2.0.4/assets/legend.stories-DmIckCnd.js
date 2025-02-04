import{x as l}from"./lit-html-CeYizTxc.js";const u={title:"Components/Legend",argTypes:{orientation:{name:"Orientació",control:{type:"select"},options:["column","row"]},itemsPerRowOrColumn:{name:"Núm. Items",control:{type:"select"},options:["1","2","3","4","5"]},text:{name:"Text",control:{type:"text"}},type:{name:"Tipus",control:{type:"select"},options:["color","icon"]},color1:{name:"Color 1",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},shade1:{name:"Matís 1",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]},icon1:{name:"Icona 1",control:{type:"text"}},color2:{name:"Color 2",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},shade2:{name:"Matís 2",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]},icon2:{name:"Icona 2",control:{type:"text"}},color3:{name:"Color 3",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},shade3:{name:"Matís 3",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]},icon3:{name:"Icona 3",control:{type:"text"}},color4:{name:"Color 4",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},shade4:{name:"Matís 4",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]},icon4:{name:"Icona 4",control:{type:"text"}},color5:{name:"Color 5",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},shade5:{name:"Matís 5",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]},icon5:{name:"Icona 5",control:{type:"text"}}},parameters:{layout:"centered"}},o={render:e=>l`
        <dss-legend
                orientation="${e.orientation}"
                type="${e.type}"
                items='[
                { "color": "${e.color1}", "shade": "${e.shade1}", "label": "${e.text}", "icon": "${e.icon1||""}" },
                { "color": "${e.color2}", "shade": "${e.shade2}", "label": "${e.text}", "icon": "${e.icon2||""}" },
                { "color": "${e.color3}", "shade": "${e.shade3}", "label": "${e.text}", "icon": "${e.icon3||""}" },
                { "color": "${e.color4}", "shade": "${e.shade4}", "label": "${e.text}", "icon": "${e.icon4||""}" },
                { "color": "${e.color5}", "shade": "${e.shade5}", "label": "${e.text}", "icon": "${e.icon5||""}" }
            ]'
                itemsPerRowOrColumn="${e.itemsPerRowOrColumn}"
            ></dss-legend>
    `,args:{orientation:"row",itemsPerRowOrColumn:"5",text:"Legend",type:"color",color1:"neutral",shade1:"100",icon1:"add_box",color2:"neutral",shade2:"100",icon2:"add_box",color3:"neutral",shade3:"100",icon3:"add_box",color4:"neutral",shade4:"100",icon4:"add_box",color5:"neutral",shade5:"100",icon5:"add_box"}},n={tags:["!dev"],render:()=>l`
            <dss-legend .items=${[{label:"Label",color:"primary",shade:500},{label:"Label",color:"red",shade:500},{label:"Label",color:"yellow",shade:500}]} type="color"></dss-legend>
    `},r={tags:["!dev"],render:()=>l`
            <dss-legend .items=${[{label:"Label",icon:"add_box"},{label:"Label",icon:"add_box"},{label:"Label",icon:"add_box"}]} type="icon"></dss-legend>
    `};var t,a,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
        <dss-legend
                orientation="\${args.orientation}"
                type="\${args.type}"
                items='[
                { "color": "\${args.color1}", "shade": "\${args.shade1}", "label": "\${args.text}", "icon": "\${args.icon1 || ''}" },
                { "color": "\${args.color2}", "shade": "\${args.shade2}", "label": "\${args.text}", "icon": "\${args.icon2 || ''}" },
                { "color": "\${args.color3}", "shade": "\${args.shade3}", "label": "\${args.text}", "icon": "\${args.icon3 || ''}" },
                { "color": "\${args.color4}", "shade": "\${args.shade4}", "label": "\${args.text}", "icon": "\${args.icon4 || ''}" },
                { "color": "\${args.color5}", "shade": "\${args.shade5}", "label": "\${args.text}", "icon": "\${args.icon5 || ''}" }
            ]'
                itemsPerRowOrColumn="\${args.itemsPerRowOrColumn}"
            ></dss-legend>
    \`;
  },
  args: {
    orientation: 'row',
    itemsPerRowOrColumn: '5',
    text: 'Legend',
    type: 'color',
    color1: 'neutral',
    shade1: '100',
    icon1: 'add_box',
    color2: 'neutral',
    shade2: '100',
    icon2: 'add_box',
    color3: 'neutral',
    shade3: '100',
    icon3: 'add_box',
    color4: 'neutral',
    shade4: '100',
    icon4: 'add_box',
    color5: 'neutral',
    shade5: '100',
    icon5: 'add_box'
  }
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,d,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const legends = [{
      label: 'Label',
      color: 'primary',
      shade: 500
    }, {
      label: 'Label',
      color: 'red',
      shade: 500
    }, {
      label: 'Label',
      color: 'yellow',
      shade: 500
    }];
    return html\`
            <dss-legend .items=\${legends} type="color"></dss-legend>
    \`;
  }
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,m,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const legends = [{
      label: 'Label',
      icon: 'add_box'
    }, {
      label: 'Label',
      icon: 'add_box'
    }, {
      label: 'Label',
      icon: 'add_box'
    }];
    return html\`
            <dss-legend .items=\${legends} type="icon"></dss-legend>
    \`;
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const y=["Playground","Color","Icon"],g=Object.freeze(Object.defineProperty({__proto__:null,Color:n,Icon:r,Playground:o,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{n as C,r as I,o as P,g as S};
