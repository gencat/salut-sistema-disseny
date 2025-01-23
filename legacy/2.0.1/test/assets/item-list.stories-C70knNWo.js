import{x as t}from"./lit-html-B2eaWknC.js";const R={title:"Components/Item List",argTypes:{elements:{name:"Nombre de ítems",control:{type:"number",max:5,min:1}},title:{name:"Titol",control:{type:"text"}},subtitle:{name:"Subtitol",control:{type:"text"}},showDecorativeIcon:{name:"Mostrar decorative icon",control:{type:"boolean"}},decorativeIcon:{name:"Decorative Icon",control:{type:"text"},if:{arg:"showDecorativeIcon",truthy:!0}},decorativeIconType:{name:"Decorative Icon Tipus",control:{type:"select"},options:["default","success","error","info","disabled"],if:{arg:"showDecorativeIcon",truthy:!0}},showActionIcon:{name:"Mostrar action icon",control:{type:"boolean"}},actionIcon:{name:"Action Icon",control:{type:"text"},if:{arg:"showActionIcon",truthy:!0}},actionIconType:{name:"Decorative Icon Tipus",control:{type:"select"},options:["default","primary","error","warning","success","info"],if:{arg:"showActionIcon",truthy:!0}},showBadge:{name:"Mostrar badge",control:{type:"boolean"}},badgeText:{name:"Badge Text",control:{type:"text"},if:{arg:"showBadge",truthy:!0}},badgeSize:{name:"Badge mida",control:{type:"select"},options:["sm","md","lg"],if:{arg:"showBadge",truthy:!0}},badgeState:{name:"Decorative Icon Tipus",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"showBadge",truthy:!0}}},parameters:{layout:"centered"}},i={args:{elements:3,title:"Title",subtitle:"Subtitle",showDecorativeIcon:"true",decorativeIcon:"add_box",decorativeIconType:"default",showActionIcon:!0,actionIcon:"add_box",actionIconType:"primary",showBadge:!1,badgeText:"Text",badgeSize:"sm",badgeState:"correct"},render:e=>t`
      <div style="width:500px">
         <dss-item-list .items="${(()=>{const l=[];return Array.from({length:e.elements},()=>l.push({title:e.title,subtitle:e.subtitle,decorativeIcon:e.showDecorativeIcon?e.decorativeIcon:null,decorativeIconType:e.decorativeIconType,actionIcon:e.showActionIcon?e.actionIcon:null,actionIconType:e.actionIconType,badgeText:e.showBadge?e.badgeText:null,badgeSize:e.badgeSize,badgeState:e.badgeState})),l})()}"></dss-item-list>
      </div>
    `},o={tags:["!dev"],render:()=>t`
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
    `},c={tags:["!dev"],render:()=>t`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title 1", "subtitle": "Default", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Success", "decorativeIcon": "add_box", "decorativeIconType": "success", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Error", "decorativeIcon": "add_box", "decorativeIconType": "error", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Info", "decorativeIcon": "add_box", "decorativeIconType": "info", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Disabled", "decorativeIcon": "add_box", "decorativeIconType": "disabled", "actionIcon": "add_box" }
      ]'></dss-item-list>
    </div>
    `},s={tags:["!dev"],render:()=>t`
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
    `},n={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-item-list
                    id="dssItemListWidget"
                    widget 
                    items='[
                        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] },
                        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] },
                        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] }
                    ]'>
                </dss-item-list>
    </div>
    `};var b,u,I;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(u=i.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};var m,g,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var v,x,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(x=a.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var y,_,h;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(_=d.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var S,w,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(w=c.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var L,B,D;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(D=(B=s.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var A,O,z;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(O=r.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var P,W,G;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-item-list
                    id="dssItemListWidget"
                    widget 
                    items='[
                        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] },
                        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] },
                        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save"},{"icon":"edit","type":"primary","action":"edit"}] }
                    ]'>
                </dss-item-list>
    </div>
    \`;
  }
}`,...(G=(W=n.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const E=["Playground","ByDefault","DecorativeIcon","ActionIcon","TypesDecorativeIcon","TypesActionIcon","Badge","Widget"],$=Object.freeze(Object.defineProperty({__proto__:null,ActionIcon:d,Badge:r,ByDefault:o,DecorativeIcon:a,Playground:i,TypesActionIcon:s,TypesDecorativeIcon:c,Widget:n,__namedExportsOrder:E,default:R},Symbol.toStringTag,{value:"Module"}));export{d as A,o as B,a as D,i as P,$ as S,c as T,n as W,s as a,r as b};
