import{x as t}from"./lit-html-B2eaWknC.js";const G={title:"Components/Item List",argTypes:{elements:{name:"Nombre de ítems",control:{type:"number",max:5,min:1}},title:{name:"Titol",control:{type:"text"}},subtitle:{name:"Subtitol",control:{type:"text"}},showDecorativeIcon:{name:"Mostrar decorative icon",control:{type:"boolean"}},decorativeIcon:{name:"Decorative Icon",control:{type:"text"},if:{arg:"showDecorativeIcon",truthy:!0}},decorativeIconType:{name:"Decorative Icon Tipus",control:{type:"select"},options:["default","success","error","info","disabled"],if:{arg:"showDecorativeIcon",truthy:!0}},showActionIcon:{name:"Mostrar action icon",control:{type:"boolean"}},actionIcon:{name:"Action Icon",control:{type:"text"},if:{arg:"showActionIcon",truthy:!0}},actionIconType:{name:"Decorative Icon Tipus",control:{type:"select"},options:["default","primary","error","warning","success","info"],if:{arg:"showActionIcon",truthy:!0}},showBadge:{name:"Mostrar badge",control:{type:"boolean"}},badgeText:{name:"Badge Text",control:{type:"text"},if:{arg:"showBadge",truthy:!0}},badgeSize:{name:"Badge mida",control:{type:"select"},options:["sm","md","lg"],if:{arg:"showBadge",truthy:!0}},badgeState:{name:"Decorative Icon Tipus",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"showBadge",truthy:!0}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5499&m=dev"}},args:{elements:3,title:"Title",subtitle:"Subtitle",showDecorativeIcon:"true",decorativeIcon:"add_box",decorativeIconType:"default",showActionIcon:!0,actionIcon:"add_box",actionIconType:"primary",showBadge:!1,badgeText:"Text",badgeSize:"sm",badgeState:"correct"},render:e=>t`
      <div style="width:500px">
         <dss-item-list .items="${(()=>{const l=[];return Array.from({length:e.elements},()=>l.push({title:e.title,subtitle:e.subtitle,decorativeIcon:e.showDecorativeIcon?e.decorativeIcon:null,decorativeIconType:e.decorativeIconType,actionLabel:"Action name",actionIcon:e.showActionIcon?e.actionIcon:null,actionIconType:e.actionIconType,badgeText:e.showBadge?e.badgeText:null,badgeSize:e.badgeSize,badgeState:e.badgeState})),l})()}"></dss-item-list>
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
    `},c={tags:["!dev"],render:()=>t`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" }
      ]'></dss-item-list>
    </div>
    `},d={tags:["!dev"],render:()=>t`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title 1", "subtitle": "Default", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Success", "decorativeIcon": "add_box", "decorativeIconType": "success", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title 2", "subtitle": "Error", "decorativeIcon": "add_box", "decorativeIconType": "error", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title 2", "subtitle": "Info", "decorativeIcon": "add_box", "decorativeIconType": "info", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title 2", "subtitle": "Disabled", "decorativeIcon": "add_box", "decorativeIconType": "disabled", "actionIcon": "add_box", "actionLabel": "Action name" }
      ]'></dss-item-list>
    </div>
    `},n={tags:["!dev"],render:()=>t`
       <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Primary", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Default", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "default", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Error", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "error", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Warning", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "warning", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Success", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "success", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Info", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "info", "actionLabel": "Action name" }
      ]'></dss-item-list>
    </div>
    `},s={tags:["!dev"],render:()=>t`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "correct" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "moderate-high", "badgeSize": "md" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "danger-high", "badgeSize": "lg", "badgeIcon": "add_box" }
      ]'></dss-item-list>
    </div>
    `},r={tags:["!dev"],render:()=>t`
      <div class="wrapper">
                <dss-item-list
                    id="dssItemListWidget"
                    widget 
                    items='[
                        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] },
                        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] },
                        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] }
                    ]'>
                </dss-item-list>
    </div>
    `};var b,m,u;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5499&m=dev'
    }
  },
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
        actionLabel: 'Action name',
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
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var I,g,p;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(x=a.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var y,_,h;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" }
      ]'></dss-item-list>
    </div>
    \`;
  }
}`,...(h=(_=c.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var S,L,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title 1", "subtitle": "Default", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Success", "decorativeIcon": "add_box", "decorativeIconType": "success", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title 2", "subtitle": "Error", "decorativeIcon": "add_box", "decorativeIconType": "error", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title 2", "subtitle": "Info", "decorativeIcon": "add_box", "decorativeIconType": "info", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title 2", "subtitle": "Disabled", "decorativeIcon": "add_box", "decorativeIconType": "disabled", "actionIcon": "add_box", "actionLabel": "Action name" }
      ]'></dss-item-list>
    </div>
    \`;
  }
}`,...(w=(L=d.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var A,f,B;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Primary", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Default", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "default", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Error", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "error", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Warning", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "warning", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Success", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "success", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Info", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionIconType": "info", "actionLabel": "Action name" }
      ]'></dss-item-list>
    </div>
    \`;
  }
}`,...(B=(f=n.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var D,O,z;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(O=s.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var P,E,W;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-item-list
                    id="dssItemListWidget"
                    widget 
                    items='[
                        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] },
                        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] },
                        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] }
                    ]'>
                </dss-item-list>
    </div>
    \`;
  }
}`,...(W=(E=r.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const R=["Playground","ByDefault","DecorativeIcon","ActionIcon","TypesDecorativeIcon","TypesActionIcon","Badge","Widget"],C=Object.freeze(Object.defineProperty({__proto__:null,ActionIcon:c,Badge:s,ByDefault:o,DecorativeIcon:a,Playground:i,TypesActionIcon:n,TypesDecorativeIcon:d,Widget:r,__namedExportsOrder:R,default:G},Symbol.toStringTag,{value:"Module"}));export{c as A,o as B,a as D,i as P,C as S,d as T,r as W,n as a,s as b};
