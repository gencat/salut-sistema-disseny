import{x as t}from"./lit-html-paDGiEfB.js";const P={title:"Components/Item List",argTypes:{elements:{name:"Nombre de ítems",control:{type:"number",max:5,min:1}},title:{name:"Titol",control:{type:"text"}},subtitle:{name:"Subtitol",control:{type:"text"}},showDecorativeIcon:{name:"Mostrar decorative icon",control:{type:"boolean"}},decorativeIcon:{name:"Decorative Icon",control:{type:"text"},if:{arg:"showDecorativeIcon",truthy:!0}},decorativeIconType:{name:"Decorative Icon Tipus",control:{type:"select"},options:["default","success","error","info","disabled"],if:{arg:"showDecorativeIcon",truthy:!0}},showActionIcon:{name:"Mostrar action icon",control:{type:"boolean"}},actionIcon:{name:"Action Icon",control:{type:"text"},if:{arg:"showActionIcon",truthy:!0}},actionIconType:{name:"Decorative Icon Tipus",control:{type:"select"},options:["default","primary","error","warning","success","info"],if:{arg:"showActionIcon",truthy:!0}},showBadge:{name:"Mostrar badge",control:{type:"boolean"}},badgeText:{name:"Badge Text",control:{type:"text"},if:{arg:"showBadge",truthy:!0}},badgeSize:{name:"Badge mida",control:{type:"select"},options:["sm","md","lg"],if:{arg:"showBadge",truthy:!0}},badgeState:{name:"Decorative Icon Tipus",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"showBadge",truthy:!0}}},parameters:{layout:"centered"}},o={args:{elements:3,title:"Title",subtitle:"Subtitle",showDecorativeIcon:"true",decorativeIcon:"add_box",decorativeIconType:"default",showActionIcon:!0,actionIcon:"add_box",actionIconType:"primary",showBadge:!1,badgeText:"Text",badgeSize:"sm",badgeState:"correct"},render:e=>t`
      <div style="width:500px">
         <dss-item-list .items="${(()=>{const n=[];return Array.from({length:e.elements},()=>n.push({title:e.title,subtitle:e.subtitle,decorativeIcon:e.showDecorativeIcon?e.decorativeIcon:null,decorativeIconType:e.decorativeIconType,actionIcon:e.showActionIcon?e.actionIcon:null,actionIconType:e.actionIconType,badgeText:e.showBadge?e.badgeText:null,badgeSize:e.badgeSize,badgeState:e.badgeState})),n})()}"></dss-item-list>
      </div>
    `},i={tags:["!dev"],render:()=>t`
      <div class="wrapper">
<dss-item-list id="dssItemList" items='[
 { "title": "Title", "subtitle": "Subitle" },
 { "title": "Title", "subtitle": "Subitle" },
 { "title": "Title", "subtitle": "Subitle" }
]'></dss-item-list>
</div>
    `},a={tags:["!dev"],render:()=>t`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box" }
      ]'></dss-item-list>
  </div>
    `},d={tags:["!dev"],render:()=>t`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box" }
      ]'></dss-item-list>
    </div>
    `},s={tags:["!dev"],render:()=>t`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title 1", "subtitle": "Default", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Success", "decorativeIcon": "add_box", "decorativeIconType": "success", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Error", "decorativeIcon": "add_box", "decorativeIconType": "error", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Info", "decorativeIcon": "add_box", "decorativeIconType": "info", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Disabled", "decorativeIcon": "add_box", "decorativeIconType": "disabled", "actionIcon": "add_box" }
      ]'></dss-item-list>
    </div>
    `},c={tags:["!dev"],render:()=>t`
       <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Primary", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title", "subtitle": "Default", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "default" },
        { "title": "Title", "subtitle": "Error", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "error" },
        { "title": "Title", "subtitle": "Warning", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "warning" },
        { "title": "Title", "subtitle": "Success", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "success" },
        { "title": "Title", "subtitle": "Info", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "info" }
      ]'></dss-item-list>
    </div>
    `},r={tags:["!dev"],render:()=>t`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "correct" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "moderate-high", "badgeSize": "md" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "danger-high", "badgeSize": "lg", "badgeIcon": "add_box" }
      ]'></dss-item-list>
    </div>
    `};var l,b,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    elements: 3,
    title: 'Title',
    subtitle: 'Subtitle',
    showDecorativeIcon: 'true',
    decorativeIcon: 'add_box',
    decorativeIconType: 'default',
    showActionIcon: true,
    actionIcon: 'add_box',
    actionIconType: 'primary',
    showBadge: false,
    badgeText: 'Text',
    badgeSize: 'sm',
    badgeState: 'correct'
  },
  render: (args: any) => {
    const getItems = () => {
      const storyItems: any[] = [];
      Array.from({
        length: args.elements
      }, () => storyItems.push({
        title: args.title,
        subtitle: args.subtitle,
        decorativeIcon: args.showDecorativeIcon ? args.decorativeIcon : null,
        decorativeIconType: args.decorativeIconType,
        actionIcon: args.showActionIcon ? args.actionIcon : null,
        actionIconType: args.actionIconType,
        badgeText: args.showBadge ? args.badgeText : null,
        badgeSize: args.badgeSize,
        badgeState: args.badgeState
      }));
      return storyItems;
    };
    return html\`
      <div style="width:500px">
         <dss-item-list .items="\${getItems()}"></dss-item-list>
      </div>
    \`;
  }
}`,...(u=(b=o.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var I,m,p;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
<dss-item-list id="dssItemList" items='[
 { "title": "Title", "subtitle": "Subitle" },
 { "title": "Title", "subtitle": "Subitle" },
 { "title": "Title", "subtitle": "Subitle" }
]'></dss-item-list>
</div>
    \`;
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,g,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box" }
      ]'></dss-item-list>
  </div>
    \`;
  }
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var x,_,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box" }
      ]'></dss-item-list>
    </div>
    \`;
  }
}`,...(y=(_=d.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var S,h,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title 1", "subtitle": "Default", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Success", "decorativeIcon": "add_box", "decorativeIconType": "success", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Error", "decorativeIcon": "add_box", "decorativeIconType": "error", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Info", "decorativeIcon": "add_box", "decorativeIconType": "info", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Disabled", "decorativeIcon": "add_box", "decorativeIconType": "disabled", "actionIcon": "add_box" }
      ]'></dss-item-list>
    </div>
    \`;
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,D,A;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Primary", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title", "subtitle": "Default", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "default" },
        { "title": "Title", "subtitle": "Error", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "error" },
        { "title": "Title", "subtitle": "Warning", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "warning" },
        { "title": "Title", "subtitle": "Success", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "success" },
        { "title": "Title", "subtitle": "Info", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "info" }
      ]'></dss-item-list>
    </div>
    \`;
  }
}`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var B,L,z;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "correct" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "moderate-high", "badgeSize": "md" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "danger-high", "badgeSize": "lg", "badgeIcon": "add_box" }
      ]'></dss-item-list>
    </div>
    \`;
  }
}`,...(z=(L=r.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const E=["Playground","ByDefault","DecorativeIcon","ActionIcon","TypesDecorativeIcon","TypesActionIcon","Badge"],j=Object.freeze(Object.defineProperty({__proto__:null,ActionIcon:d,Badge:r,ByDefault:i,DecorativeIcon:a,Playground:o,TypesActionIcon:c,TypesDecorativeIcon:s,__namedExportsOrder:E,default:P},Symbol.toStringTag,{value:"Module"}));export{d as A,i as B,a as D,o as P,j as S,s as T,c as a,r as b};
