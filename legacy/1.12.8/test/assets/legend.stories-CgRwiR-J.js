import{x as l}from"./lit-html-B2eaWknC.js";const a={title:"Components/Legend",argTypes:{orientation:{name:"Orientació",control:{type:"select"},options:["column","row"]},itemsPerRowOrColumn:{name:"Núm. Items",control:{type:"select"},options:["1","2","3","4","5"]},text:{name:"Text",control:{type:"text"}},type:{name:"Tipus",control:{type:"select"},options:["color","icon"]},color1:{name:"Color 1",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},shade1:{name:"Matís 1",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]},icon1:{name:"Icona 1",control:{type:"text"}},color2:{name:"Color 2",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},shade2:{name:"Matís 2",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]},icon2:{name:"Icona 2",control:{type:"text"}},color3:{name:"Color 3",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},shade3:{name:"Matís 3",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]},icon3:{name:"Icona 3",control:{type:"text"}},color4:{name:"Color 4",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},shade4:{name:"Matís 4",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]},icon4:{name:"Icona 4",control:{type:"text"}},color5:{name:"Color 5",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},shade5:{name:"Matís 5",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]},icon5:{name:"Icona 5",control:{type:"text"}}},parameters:{layout:"centered"}},e={render:o=>l`
        <dss-legend
                orientation="${o.orientation}"
                type="${o.type}"
                items='[
                { "color": "${o.color1}", "shade": "${o.shade1}", "label": "${o.text}", "icon": "${o.icon1||""}" },
                { "color": "${o.color2}", "shade": "${o.shade2}", "label": "${o.text}", "icon": "${o.icon2||""}" },
                { "color": "${o.color3}", "shade": "${o.shade3}", "label": "${o.text}", "icon": "${o.icon3||""}" },
                { "color": "${o.color4}", "shade": "${o.shade4}", "label": "${o.text}", "icon": "${o.icon4||""}" },
                { "color": "${o.color5}", "shade": "${o.shade5}", "label": "${o.text}", "icon": "${o.icon5||""}" }
            ]'
                itemsPerRowOrColumn="${o.itemsPerRowOrColumn}"
            ></dss-legend>
    `,args:{orientation:"row",itemsPerRowOrColumn:"5",text:"Legend",type:"color",color1:"neutral",shade1:"100",icon1:"add_box",color2:"neutral",shade2:"100",icon2:"add_box",color3:"neutral",shade3:"100",icon3:"add_box",color4:"neutral",shade4:"100",icon4:"add_box",color5:"neutral",shade5:"100",icon5:"add_box"}};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const c=["Playground"],i=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:c,default:a},Symbol.toStringTag,{value:"Module"}));export{e as P,i as S};
