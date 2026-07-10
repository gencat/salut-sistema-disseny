import"./lit-element-BL4lq474.js";import{x as s}from"./lit-html-D6cejpwM.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const n=`
    .wrapper {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 8px 0;
    }
`,nt={title:"Components/Button",component:"dss-button",argTypes:{label:{name:"Label",description:"Text del botó"},variant:{name:"Variant",description:"Variant del botó",control:{type:"select"},options:["primary","secondary","subtle"]},status:{name:"Status",description:"Estat del botó",control:{type:"select"},options:["default","danger","warning","success","info"]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showIcon:{name:"Control: showIcon",description:"Mostrar icona",control:{type:"boolean"}},side:{name:"iconPosition",description:"Costat",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},onlyIcon:{name:"onlyIcon",description:"Botó només icona",control:{type:"boolean"},if:{arg:"showIcon"}},icon:{name:"icon",description:"Icona",if:{arg:"showIcon"}},disabled:{name:"disabled",description:"Deshabilitat"}},parameters:{layout:"centered"}},o={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev"}},args:{label:"Button",variant:"primary",status:"default",size:"md",showIcon:!1,side:"left",onlyIcon:!1,icon:"add_box",disabled:!1},render:t=>s`
            <dss-button 
                label="${t.label}" 
                icon="${t.icon??void 0}"
                iconPosition="${t.icon?t.side:"left"}"
                size="${t.size}" 
                variant="${t.variant}" 
                status="${t.status}"
                ?onlyIcon=${t.onlyIcon}
                ?disabled=${t.disabled}
            >
            </dss-button>
        `},a={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-button variant="primary" label="Primary"></dss-button>
                <dss-button variant="secondary" label="Secondary"></dss-button>
                <dss-button variant="subtle" label="Subtle"></dss-button>
            </div>
            <div class="wrapper">
                <dss-button variant="primary" label="Primary" disabled></dss-button>
                <dss-button variant="secondary" label="Secondary" disabled></dss-button>
                <dss-button variant="subtle" label="Subtle" disabled></dss-button>
            </div>
    `,decorators:[e(n,"button-variants-style")]},r={tags:["!dev"],render:()=>y("danger"),decorators:[e(n,"button-variants-style")]},d={tags:["!dev"],render:()=>y("warning"),decorators:[e(n,"button-variants-style")]},i={tags:["!dev"],render:()=>y("success"),decorators:[e(n,"button-variants-style")]},l={tags:["!dev"],render:()=>y("info"),decorators:[e(n,"button-variants-style")]},y=t=>s`
        <div class="wrapper">
            <dss-button variant="primary" status="${t}" label="Primary"></dss-button>
            <dss-button variant="secondary" status="${t}" label="Secondary"></dss-button>
            <dss-button variant="subtle" status="${t}" label="Subtle"></dss-button>
        </div>
        <div class="wrapper">
            <dss-button variant="primary" status="${t}" label="Primary" disabled></dss-button>
            <dss-button variant="secondary" status="${t}" label="Secondary" disabled></dss-button>
            <dss-button variant="subtle" status="${t}" label="Subtle" disabled></dss-button>
        </div>
    `,b={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-button size="sm" label="Small button"></dss-button>
                <dss-button size="md" label="Medium button"></dss-button>
                <dss-button size="lg" label="Large button"></dss-button>
            </div>
            <div class="wrapper">
                <dss-button size="sm" variant="secondary" label="Small button"></dss-button>
                <dss-button size="md" variant="secondary" label="Medium button"></dss-button>
                <dss-button size="lg" variant="secondary" label="Large button"></dss-button>
            </div>
            <div class="wrapper">
                <dss-button size="sm" variant="subtle" label="Small button"></dss-button>
                <dss-button size="md" variant="subtle" label="Medium button"></dss-button>
                <dss-button size="lg" variant="subtle" label="Large button"></dss-button>
            </div>
    `},u={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Sense icona"></dss-button>
    `},c={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    `},p={tags:["!dev"],render:()=>s`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    `},m={tags:["!dev"],render:()=>s`
            <dss-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
        `,decorators:[e(n,"button-max-width-style")]},g={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Button" icon="add_box" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon loading></dss-button>
    `},v={tags:["!dev"],render:()=>s`
    
            <div class="wrapper">
                <div style="position: relative">
                    <dss-button size="md" icon="add_box" label="Label"></dss-button>
                    <dss-notification-badge value="3" state="error" style="position: absolute; top: -10px; right: -10px; z-index: 900;border: 2px solid white;border-radius:50%"></dss-notification-badge>
                </div>
                <div style="position: relative">
                    <dss-button size="md" icon="add_box" label="Label"></dss-button>
                    <dss-notification-badge dot state="error" style="position: absolute; top: -6px; right: -6px; z-index: 900;border: 2px solid white;border-radius:50%"></dss-notification-badge>
                </div>
            </div>
        `,decorators:[e(n,"button-notification-style")]};var S,w,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev'
    }
  },
  args: {
    label: 'Button',
    variant: 'primary',
    status: 'default',
    size: 'md',
    showIcon: false,
    side: 'left',
    onlyIcon: false,
    icon: 'add_box',
    disabled: false
  },
  render: (args: {
    disabled: unknown;
    label: string;
    variant: string;
    status: string;
    size: string;
    showIcon: boolean;
    side: string;
    onlyIcon: boolean;
    iconType: string;
    icon: string;
  }) => {
    return html\`
            <dss-button 
                label="\${args.label}" 
                icon="\${args.icon ?? undefined}"
                iconPosition="\${args.icon ? args.side : 'left'}"
                size="\${args.size}" 
                variant="\${args.variant}" 
                status="\${args.status}"
                ?onlyIcon=\${args.onlyIcon}
                ?disabled=\${args.disabled}
            >
            </dss-button>
        \`;
  }
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var x,f,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-button variant="primary" label="Primary"></dss-button>
                <dss-button variant="secondary" label="Secondary"></dss-button>
                <dss-button variant="subtle" label="Subtle"></dss-button>
            </div>
            <div class="wrapper">
                <dss-button variant="primary" label="Primary" disabled></dss-button>
                <dss-button variant="secondary" label="Secondary" disabled></dss-button>
                <dss-button variant="subtle" label="Subtle" disabled></dss-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var I,_,$;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return getButtonStatus('danger');
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...($=(_=r.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var B,P,L;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return getButtonStatus('warning');
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...(L=(P=d.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var T,M,N;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return getButtonStatus('success');
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var A,D,C;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return getButtonStatus('info');
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var V,W,E;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-button size="sm" label="Small button"></dss-button>
                <dss-button size="md" label="Medium button"></dss-button>
                <dss-button size="lg" label="Large button"></dss-button>
            </div>
            <div class="wrapper">
                <dss-button size="sm" variant="secondary" label="Small button"></dss-button>
                <dss-button size="md" variant="secondary" label="Medium button"></dss-button>
                <dss-button size="lg" variant="secondary" label="Large button"></dss-button>
            </div>
            <div class="wrapper">
                <dss-button size="sm" variant="subtle" label="Small button"></dss-button>
                <dss-button size="md" variant="subtle" label="Medium button"></dss-button>
                <dss-button size="lg" variant="subtle" label="Large button"></dss-button>
            </div>
    \`;
  }
}`,...(E=(W=b.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var F,k,O;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Sense icona"></dss-button>
    \`;
  }
}`,...(O=(k=u.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var j,q,H;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    \`;
  }
}`,...(H=(q=c.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    \`;
  }
}`,...(X=(K=p.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var G,Q,R;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-max-width-style')]
}`,...(R=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,Y,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Button" icon="add_box" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon loading></dss-button>
    \`;
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,st,et;v.parameters={...v.parameters,docs:{...(tt=v.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    
            <div class="wrapper">
                <div style="position: relative">
                    <dss-button size="md" icon="add_box" label="Label"></dss-button>
                    <dss-notification-badge value="3" state="error" style="position: absolute; top: -10px; right: -10px; z-index: 900;border: 2px solid white;border-radius:50%"></dss-notification-badge>
                </div>
                <div style="position: relative">
                    <dss-button size="md" icon="add_box" label="Label"></dss-button>
                    <dss-notification-badge dot state="error" style="position: absolute; top: -6px; right: -6px; z-index: 900;border: 2px solid white;border-radius:50%"></dss-notification-badge>
                </div>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-notification-style')]
}`,...(et=(st=v.parameters)==null?void 0:st.docs)==null?void 0:et.source}}};const ot=["Playground","Variant","Danger","Warning","Success","Info","Size","TextNoIcon","TextIcon","IconNoText","MaxWidth","Loading","Notification"],it=Object.freeze(Object.defineProperty({__proto__:null,Danger:r,IconNoText:p,Info:l,Loading:g,MaxWidth:m,Notification:v,Playground:o,Size:b,Success:i,TextIcon:c,TextNoIcon:u,Variant:a,Warning:d,__namedExportsOrder:ot,default:nt},Symbol.toStringTag,{value:"Module"}));export{r as D,l as I,g as L,m as M,v as N,o as P,it as S,u as T,a as V,d as W,i as a,b,c,p as d};
