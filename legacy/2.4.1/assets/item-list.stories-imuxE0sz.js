import{x as e}from"./lit-html-B2eaWknC.js";const q={title:"Components/Item List",argTypes:{elements:{name:"Nombre de ítems",control:{type:"number",max:5,min:1}},title:{name:"Titol",control:{type:"text"}},subtitle:{name:"Subtitol",control:{type:"text"}},showDecorativeIcon:{name:"Mostrar decorative icon",control:{type:"boolean"}},decorativeIcon:{name:"Decorative Icon",control:{type:"text"},if:{arg:"showDecorativeIcon",truthy:!0}},decorativeIconType:{name:"Decorative Icon Tipus",control:{type:"select"},options:["default","success","error","info","disabled"],if:{arg:"showDecorativeIcon",truthy:!0}},showActionIcon:{name:"Mostrar action icon",control:{type:"boolean"}},actionIcon:{name:"Action Icon",control:{type:"text"},if:{arg:"showActionIcon",truthy:!0}},actionIconType:{name:"Decorative Icon Tipus",control:{type:"select"},options:["default","primary","error","warning","success","info"],if:{arg:"showActionIcon",truthy:!0}},showBadge:{name:"Mostrar badge",control:{type:"boolean"}},badgeText:{name:"Badge Text",control:{type:"text"},if:{arg:"showBadge",truthy:!0}},badgeSize:{name:"Badge mida",control:{type:"select"},options:["sm","md","lg"],if:{arg:"showBadge",truthy:!0}},badgeState:{name:"Decorative Icon Tipus",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"showBadge",truthy:!0}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5499&m=dev"}},args:{elements:3,title:"Title",subtitle:"Subtitle",showDecorativeIcon:"true",decorativeIcon:"add_box",decorativeIconType:"default",showActionIcon:!0,actionIcon:"add_box",actionIconType:"primary",showBadge:!1,badgeText:"Text",badgeSize:"sm",badgeState:"correct"},render:t=>e`
      <div style="width:500px">
         <dss-item-list .items="${(()=>{const b=[];return Array.from({length:t.elements},()=>b.push({title:t.title,subtitle:t.subtitle,decorativeIcon:t.showDecorativeIcon?t.decorativeIcon:null,decorativeIconType:t.decorativeIconType,actionLabel:"Action name",actionIcon:t.showActionIcon?t.actionIcon:null,actionIconType:t.actionIconType,badgeText:t.showBadge?t.badgeText:null,badgeSize:t.badgeSize,badgeState:t.badgeState})),b})()}"></dss-item-list>
      </div>
    `},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
<dss-item-list id="dssItemList" items='[
 { "title": "Title", "subtitle": "Subitle" },
 { "title": "Title", "subtitle": "Subitle" },
 { "title": "Title", "subtitle": "Subitle" }
]'></dss-item-list>
</div>
    `},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box" }
      ]'></dss-item-list>
  </div>
    `},s={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" }
      ]'></dss-item-list>
    </div>
    `},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title 1", "subtitle": "Default", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Success", "decorativeIcon": "add_box", "decorativeIconType": "success", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title 2", "subtitle": "Error", "decorativeIcon": "add_box", "decorativeIconType": "error", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title 2", "subtitle": "Info", "decorativeIcon": "add_box", "decorativeIconType": "info", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title 2", "subtitle": "Disabled", "decorativeIcon": "add_box", "decorativeIconType": "disabled", "actionIcon": "add_box", "actionLabel": "Action name" }
      ]'></dss-item-list>
    </div>
    `},n={tags:["!dev"],render:()=>e`
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
    `},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "correct" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "moderate-high", "badgeSize": "md" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "danger-high", "badgeSize": "lg", "badgeIcon": "add_box" }
      ]'></dss-item-list>
    </div>
    `},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-item-list
                    id="dssItemListWidget"
                    widget 
                    items='[
                        { "title": "Title", "subtitle": "Subitle", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeLabel":"Criticitat", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] },
                        { "title": "Lorem ipsum dolor sit amet.", "subtitle": "Subitle", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeLabel":"Criticitat", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] },
                        { "title": "Title", "subtitle": "Lorem ipsum dolor sit amet.", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeLabel":"Criticitat", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] }
                    ]'>
                </dss-item-list>
    </div>
    `},l={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-item-list
                    id="dssItemListWidget"
                    widget 
                    items='[
                        { "id":"id1", "title": "Title", "subtitle": "Subitle", "iconBadgeLeftState":"danger-high", "date":"20/03/2024" },
                        { "id":"id2", "title": "Lorem ipsum dolor sit amet.", "subtitle": "Subitle", "iconBadgeLeftState":"danger-high", "date":"20/03/2024" },
                        { "id":"id3", "title": "Title", "subtitle": "Lorem ipsum dolor sit amet.", "iconBadgeLeftState":"danger-high", "date":"20/03/2024" }
                    ]'>
                    <div slot="item-custom-id1">
                        <span style="font-size:14px;color:var(--color-neutral-500);">TIPOLOGÍA</span>
                        <dss-icon-badge size="sm" state="danger-high">
                            <dss-tooltip slot="tooltip" position="left">
                                <span>Indicar info</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <div>
                            <dss-icon icon="add_box"></dss-icon>
                            <dss-tooltip position="top">Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                    </div>
                    <div slot="item-custom-id2">
                        <dss-badge text="10" size="md" state="neutral" outlined hideicon></dss-badge>
                        <div>
                            <dss-icon icon="question_mark"></dss-icon>
                            <dss-tooltip>Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-icon-badge size="sm" state="danger-high">
                            <dss-tooltip slot="tooltip" position="left">
                                <span>Indicar info</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <span>1</span>
                        <div>
                            <dss-icon icon="restart_alt"></dss-icon>
                            <dss-tooltip position="left">Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                    </div>
                    <div slot="item-custom-id3">
                        <span style="font-size:14px;color:var(--color-neutral-500);">TIPOLOGÍA</span>
                        <dss-icon-badge size="sm" state="danger-high">
                            <dss-tooltip slot="tooltip" position="left">
                                <span>Indicar info</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <div>
                            <dss-icon icon="add_box"></dss-icon>
                            <dss-tooltip position="top">Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                    </div>
                </dss-item-list>
    </div>
    `};var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,I,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(I=o.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var x,T,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(T=a.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var y,_,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(_=s.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var L,f,A;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(f=d.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var w,B,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var z,O,P;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var C,W,G;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-item-list
                    id="dssItemListWidget"
                    widget 
                    items='[
                        { "title": "Title", "subtitle": "Subitle", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeLabel":"Criticitat", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] },
                        { "title": "Lorem ipsum dolor sit amet.", "subtitle": "Subitle", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeLabel":"Criticitat", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] },
                        { "title": "Title", "subtitle": "Lorem ipsum dolor sit amet.", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeLabel":"Criticitat", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] }
                    ]'>
                </dss-item-list>
    </div>
    \`;
  }
}`,...(G=(W=r.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var E,R,k;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-item-list
                    id="dssItemListWidget"
                    widget 
                    items='[
                        { "id":"id1", "title": "Title", "subtitle": "Subitle", "iconBadgeLeftState":"danger-high", "date":"20/03/2024" },
                        { "id":"id2", "title": "Lorem ipsum dolor sit amet.", "subtitle": "Subitle", "iconBadgeLeftState":"danger-high", "date":"20/03/2024" },
                        { "id":"id3", "title": "Title", "subtitle": "Lorem ipsum dolor sit amet.", "iconBadgeLeftState":"danger-high", "date":"20/03/2024" }
                    ]'>
                    <div slot="item-custom-id1">
                        <span style="font-size:14px;color:var(--color-neutral-500);">TIPOLOGÍA</span>
                        <dss-icon-badge size="sm" state="danger-high">
                            <dss-tooltip slot="tooltip" position="left">
                                <span>Indicar info</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <div>
                            <dss-icon icon="add_box"></dss-icon>
                            <dss-tooltip position="top">Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                    </div>
                    <div slot="item-custom-id2">
                        <dss-badge text="10" size="md" state="neutral" outlined hideicon></dss-badge>
                        <div>
                            <dss-icon icon="question_mark"></dss-icon>
                            <dss-tooltip>Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-icon-badge size="sm" state="danger-high">
                            <dss-tooltip slot="tooltip" position="left">
                                <span>Indicar info</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <span>1</span>
                        <div>
                            <dss-icon icon="restart_alt"></dss-icon>
                            <dss-tooltip position="left">Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                    </div>
                    <div slot="item-custom-id3">
                        <span style="font-size:14px;color:var(--color-neutral-500);">TIPOLOGÍA</span>
                        <dss-icon-badge size="sm" state="danger-high">
                            <dss-tooltip slot="tooltip" position="left">
                                <span>Indicar info</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <div>
                            <dss-icon icon="add_box"></dss-icon>
                            <dss-tooltip position="top">Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                    </div>
                </dss-item-list>
    </div>
    \`;
  }
}`,...(k=(R=l.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const F=["Playground","ByDefault","DecorativeIcon","ActionIcon","TypesDecorativeIcon","TypesActionIcon","Badge","WidgetDefault","WidgetCustom"],H=Object.freeze(Object.defineProperty({__proto__:null,ActionIcon:s,Badge:c,ByDefault:o,DecorativeIcon:a,Playground:i,TypesActionIcon:n,TypesDecorativeIcon:d,WidgetCustom:l,WidgetDefault:r,__namedExportsOrder:F,default:q},Symbol.toStringTag,{value:"Module"}));export{s as A,o as B,a as D,i as P,H as S,d as T,r as W,n as a,c as b,l as c};
