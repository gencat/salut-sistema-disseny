import{x as e}from"./lit-html-D6cejpwM.js";import{w as i}from"./storybook-decorators-DSS85Rnr.js";const o=`
  .innerZoomElementWrapper{
        flex-direction: column;
        align-items: flex-start;
    }
    .wrapper {
            display: block;
            width: 400px;
            max-width: 400px;
    }
`,K={title:"Components/Item List",argTypes:{elements:{name:"Nombre de ítems",control:{type:"number",max:5,min:1}},title:{name:"Titol",control:{type:"text"}},subtitle:{name:"Subtitol",control:{type:"text"}},showDecorativeIcon:{name:"Mostrar decorative icon",control:{type:"boolean"}},decorativeIcon:{name:"Decorative Icon",control:{type:"text"},if:{arg:"showDecorativeIcon",truthy:!0}},decorativeIconType:{name:"Decorative Icon Tipus",control:{type:"select"},options:["default","success","error","info","disabled"],if:{arg:"showDecorativeIcon",truthy:!0}},showActionIcon:{name:"Mostrar action icon",control:{type:"boolean"}},actionIcon:{name:"Action Icon",control:{type:"text"},if:{arg:"showActionIcon",truthy:!0}},actionIconType:{name:"Decorative Icon Tipus",control:{type:"select"},options:["default","primary","error","warning","success","info"],if:{arg:"showActionIcon",truthy:!0}},showBadge:{name:"Mostrar badge",control:{type:"boolean"}},badgeText:{name:"Badge Text",control:{type:"text"},if:{arg:"showBadge",truthy:!0}},badgeSize:{name:"Badge mida",control:{type:"select"},options:["sm","md","lg"],if:{arg:"showBadge",truthy:!0}},badgeState:{name:"Decorative Icon Tipus",control:{type:"select"},options:["danger-high","danger","danger-low","moderate-high","moderate","moderate-low","slight-high","slight","slight-low","correct","undeterminated","critic","alert","ideal","info","info-alt","neutral"],if:{arg:"showBadge",truthy:!0}},showChip:{name:"Mostrar chip",control:{type:"boolean"}},chipText:{name:"Chip Label",control:{type:"text"},if:{arg:"showChip",truthy:!0}},chipIcon:{name:"Chip icona",control:{type:"text"},if:{arg:"showChip",truthy:!0}},chipSelected:{name:"Chip seleccionat",control:{type:"boolean"},if:{arg:"showChip",truthy:!0}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5499&m=dev"}},args:{elements:3,title:"Title",subtitle:"Subtitle",showDecorativeIcon:"true",decorativeIcon:"add_box",decorativeIconType:"default",showActionIcon:!0,actionIcon:"add_box",actionIconType:"primary",showBadge:!1,badgeText:"Text",badgeSize:"sm",badgeState:"correct",showChip:!1,chipText:"Chip",chipIcon:"add_box",chipSelected:!1},render:t=>e`
      <div style="width:500px">
        <dss-item-list .items="${(()=>{const u=[];return Array.from({length:t.elements},()=>u.push({title:t.title,subtitle:t.subtitle,decorativeIcon:t.showDecorativeIcon?t.decorativeIcon:null,decorativeIconType:t.decorativeIconType,actionLabel:"Action name",actionIcon:t.showActionIcon?t.actionIcon:null,actionIconType:t.actionIconType,badgeText:t.showBadge?t.badgeText:null,badgeSize:t.badgeSize,badgeState:t.badgeState,chipText:t.showChip?t.chipText:null,chipIcon:t.chipIcon,chipSelected:t.chipSelected})),u})()}"></dss-item-list>
      </div>
    `},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
            <dss-item-list id="dssItemList" items='[
            { "title": "Title", "subtitle": "Subitle" },
            { "title": "Title", "subtitle": "Subitle" },
            { "title": "Title", "subtitle": "Subitle" }
            ]'></dss-item-list>
            </div>
    `,decorators:[i(o,"item-list-default-style")]},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box" }
      ]'></dss-item-list>
  </div>
    `,decorators:[i(o,"item-list-decorative-icon-style")]},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "actionIcon": "add_box", "actionLabel": "Action name" }
      ]'></dss-item-list>
    </div>
    `,decorators:[i(o,"item-list-action-icon-style")]},n={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title 1", "subtitle": "Default", "decorativeIcon": "add_box", "actionIcon": "add_box" },
        { "title": "Title 2", "subtitle": "Success", "decorativeIcon": "add_box", "decorativeIconType": "success", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title 2", "subtitle": "Error", "decorativeIcon": "add_box", "decorativeIconType": "error", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title 2", "subtitle": "Info", "decorativeIcon": "add_box", "decorativeIconType": "info", "actionIcon": "add_box", "actionLabel": "Action name" },
        { "title": "Title 2", "subtitle": "Disabled", "decorativeIcon": "add_box", "decorativeIconType": "disabled", "actionIcon": "add_box", "actionLabel": "Action name" }
      ]'></dss-item-list>
    </div>
    `,decorators:[i(o,"item-list-types-decorative-icon-style")]},l={tags:["!dev"],render:()=>e`
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
    `,decorators:[i(o,"item-list-types-action-icon-style")]},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "correct" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "moderate-high", "badgeSize": "md" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "badgeText": "Text", "badgeState": "danger-high", "badgeSize": "lg", "badgeIcon": "add_box" }
      ]'></dss-item-list>
    </div>
    `,decorators:[i(o,"item-list-badge-style")]},p={tags:["!dev"],render:()=>e`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "chipText": "Chip" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "chipText": "Chip", "chipIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "chipText": "Chip", "chipIcon": "add_box", "chipSelected": true }
      ]'></dss-item-list>
    </div>
    `,decorators:[i(o,"item-list-chip-style")]},b={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-item-list
                    id="dssItemListWidget"
                    widget 
                    items='[
                        { "title": "Title", "subtitle": "Subitle", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeLabel":"Criticitat", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] },
                        { "title": "Lorem ipsum dolor sit amet.", "subtitle": "Subitle", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeLabel":"Criticitat", "iconBadgeRightState":"danger-high", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] },
                        { "title": "Title", "subtitle": "Lorem ipsum dolor sit amet.", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeLabel":"Criticitat", "iconBadgeRightState":"danger-high", "chipText": "Chip", "chipIcon": "add_box", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] }
                    ]'>
                </dss-item-list>
    </div>
    `,decorators:[i(o,"item-list-widget-default-style")]},m={tags:["!dev"],render:()=>e`
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
                        <div>
                            <dss-icon icon="add_box"></dss-icon>
                            <dss-tooltip position="top">Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-icon-badge size="sm" state="danger-high">
                            <dss-tooltip slot="tooltip" position="left">
                                <span>Tooltip</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                    </div>
                    <div slot="item-custom-id2">
                        <span style="font-size:14px;color:var(--color-neutral-500);">TIPOLOGÍA</span>
                        <div>
                            <dss-icon icon="add_box" size="md"></dss-icon>
                            <dss-tooltip>Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-badge text="1" size="sm" state="info" outlined hideicon></dss-badge>
                        <dss-icon-badge size="sm" state="info" outlined>
                            <dss-tooltip slot="tooltip" position="left">
                                <span>Tooltip</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <dss-icon-badge size="sm" state="danger-high">
                            <dss-tooltip slot="tooltip" position="bottom">
                                <span>Tooltip</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                    </div>
                    <div slot="item-custom-id3">
                        <div>
                            <dss-icon icon="add_box" size="md"></dss-icon>
                            <dss-tooltip>Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-badge text="1" size="sm" state="info" outlined hideicon></dss-badge>
                        <dss-chip label="Chip" size="sm" icon="add_box" disableSelect></dss-chip>
                        <dss-icon-badge size="sm" state="info" outlined>
                            <dss-tooltip slot="tooltip" position="left">
                                <span>Tooltip</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <dss-icon-badge size="sm" state="danger-high">
                            <dss-tooltip slot="tooltip" position="bottom">
                                <span>Tooltip</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                    </div>
                </dss-item-list>
    </div>
    `,decorators:[i(o,"item-list-widget-custom-style")]};var g,h,I;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    badgeState: 'correct',
    showChip: false,
    chipText: 'Chip',
    chipIcon: 'add_box',
    chipSelected: false
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
        badgeState: args.badgeState,
        chipText: args.showChip ? args.chipText : null,
        chipIcon: args.chipIcon,
        chipSelected: args.chipSelected
      }));
      return storyItems;
    };
    return html\`
      <div style="width:500px">
        <dss-item-list .items="\${getItems()}"></dss-item-list>
      </div>
    \`;
  }
}`,...(I=(h=s.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var v,x,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'item-list-default-style')]
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var T,S,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'item-list-decorative-icon-style')]
}`,...(_=(S=d.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var w,L,f;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'item-list-action-icon-style')]
}`,...(f=(L=c.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var A,B,z;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'item-list-types-decorative-icon-style')]
}`,...(z=(B=n.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var C,D,O;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'item-list-types-action-icon-style')]
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var P,W,G;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'item-list-badge-style')]
}`,...(G=(W=r.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var E,R,M;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-item-list id="dssItemList" items='[
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "chipText": "Chip" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "chipText": "Chip", "chipIcon": "add_box" },
        { "title": "Title", "subtitle": "Subitle", "decorativeIcon": "add_box", "chipText": "Chip", "chipIcon": "add_box", "chipSelected": true }
      ]'></dss-item-list>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-chip-style')]
}`,...(M=(R=p.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var F,k,j;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
                        { "title": "Title", "subtitle": "Lorem ipsum dolor sit amet.", "iconBadgeLeftState":"danger-high", "date":"20/03/2024", "description": "TIPOLOGÍA", "iconBadgeLabel":"Criticitat", "iconBadgeRightState":"danger-high", "chipText": "Chip", "chipIcon": "add_box", "icons":[{"icon":"add_box"},{"icon":"home"}], "actions":[{"icon":"save","type":"primary","action":"save","label":"label"},{"icon":"edit","type":"primary","action":"edit","label":"label"}] }
                    ]'>
                </dss-item-list>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-widget-default-style')]
}`,...(j=(k=b.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var q,H,J;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
                        <div>
                            <dss-icon icon="add_box"></dss-icon>
                            <dss-tooltip position="top">Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-icon-badge size="sm" state="danger-high">
                            <dss-tooltip slot="tooltip" position="left">
                                <span>Tooltip</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                    </div>
                    <div slot="item-custom-id2">
                        <span style="font-size:14px;color:var(--color-neutral-500);">TIPOLOGÍA</span>
                        <div>
                            <dss-icon icon="add_box" size="md"></dss-icon>
                            <dss-tooltip>Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-badge text="1" size="sm" state="info" outlined hideicon></dss-badge>
                        <dss-icon-badge size="sm" state="info" outlined>
                            <dss-tooltip slot="tooltip" position="left">
                                <span>Tooltip</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <dss-icon-badge size="sm" state="danger-high">
                            <dss-tooltip slot="tooltip" position="bottom">
                                <span>Tooltip</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                    </div>
                    <div slot="item-custom-id3">
                        <div>
                            <dss-icon icon="add_box" size="md"></dss-icon>
                            <dss-tooltip>Lorem ipsum</dss-tooltip>
                        </div>
                        <dss-badge text="1" size="sm" state="info" outlined hideicon></dss-badge>
                        <dss-chip label="Chip" size="sm" icon="add_box" disableSelect></dss-chip>
                        <dss-icon-badge size="sm" state="info" outlined>
                            <dss-tooltip slot="tooltip" position="left">
                                <span>Tooltip</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <dss-icon-badge size="sm" state="danger-high">
                            <dss-tooltip slot="tooltip" position="bottom">
                                <span>Tooltip</span>
                            </dss-tooltip>
                        </dss-icon-badge>
                        <dss-icon-button variant="primary" icon="add_box" label="Action"></dss-icon-button>
                    </div>
                </dss-item-list>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'item-list-widget-custom-style')]
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const X=["Playground","ByDefault","DecorativeIcon","ActionIcon","TypesDecorativeIcon","TypesActionIcon","Badge","Chip","WidgetDefault","WidgetCustom"],Q=Object.freeze(Object.defineProperty({__proto__:null,ActionIcon:c,Badge:r,ByDefault:a,Chip:p,DecorativeIcon:d,Playground:s,TypesActionIcon:l,TypesDecorativeIcon:n,WidgetCustom:m,WidgetDefault:b,__namedExportsOrder:X,default:K},Symbol.toStringTag,{value:"Module"}));export{c as A,a as B,p as C,d as D,s as P,Q as S,n as T,b as W,l as a,r as b,m as c};
