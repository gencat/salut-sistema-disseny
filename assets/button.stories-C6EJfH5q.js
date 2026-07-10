import"./lit-element-BL4lq474.js";import{x as s}from"./lit-html-D6cejpwM.js";import{w as e}from"./storybook-decorators-DSS85Rnr.js";const o=`
    .wrapper {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 8px 0;
    }
`,it={title:"Components/Button",component:"dss-button",argTypes:{label:{name:"Label",description:"Text del botó"},variant:{name:"Variant",description:"Variant del botó",control:{type:"select"},options:["primary","secondary","subtle"]},status:{name:"Status",description:"Estat del botó",control:{type:"select"},options:["default","danger","warning","success","info"]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showIcon:{name:"Control: showIcon",description:"Mostrar icona",control:{type:"boolean"}},side:{name:"iconPosition",description:"Costat",control:{type:"radio"},options:["left","right"],if:{arg:"showIcon"}},onlyIcon:{name:"onlyIcon",description:"Botó només icona",control:{type:"boolean"},if:{arg:"showIcon"}},icon:{name:"icon",description:"Icona",if:{arg:"showIcon"}},disabled:{name:"disabled",description:"Deshabilitat"}},parameters:{layout:"centered"}},n={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=19-193&m=dev"}},args:{label:"Button",variant:"primary",status:"default",size:"md",showIcon:!1,side:"left",onlyIcon:!1,icon:"add_box",disabled:!1},render:t=>s`
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
    `,decorators:[e(o,"button-variants-style")]},r={tags:["!dev"],render:()=>S("danger"),decorators:[e(o,"button-variants-style")]},d={tags:["!dev"],render:()=>S("warning"),decorators:[e(o,"button-variants-style")]},i={tags:["!dev"],render:()=>S("success"),decorators:[e(o,"button-variants-style")]},l={tags:["!dev"],render:()=>S("info"),decorators:[e(o,"button-variants-style")]},S=t=>s`
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
    `,u={tags:["!dev"],render:()=>s`
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
    `},b={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Sense icona"></dss-button>
    `},c={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    `},m={tags:["!dev"],render:()=>s`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    `},p={tags:["!dev"],render:()=>s`
            <dss-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
        `,decorators:[e(o,"button-max-width-style")]},v={tags:["!dev"],render:()=>s`
      <dss-button size="md" label="Button" icon="add_box" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon loading></dss-button>
    `},g={tags:["!dev"],render:()=>s`
    
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
        `,decorators:[e(o,"button-notification-style")]},y={tags:["!dev"],render:()=>s`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const w=document.querySelector("#manual-focus-demo");w&&w.focus()}} variant="secondary"></dss-button>
                <dss-button 
                    id="manual-focus-demo"
                    label="Button"
                ></dss-button>
            </div>
        `,decorators:[e(o,"button-focus-style")]};var f,z,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(z=n.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var h,I,_;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(I=a.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var $,B,L;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return getButtonStatus('danger');
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...(L=(B=r.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var P,T,F;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return getButtonStatus('warning');
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...(F=(T=d.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var M,N,A;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return getButtonStatus('success');
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var D,k,C;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return getButtonStatus('info');
  },
  decorators: [withStyle(wrapperStyle, 'button-variants-style')]
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var E,V,W;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var q,H,O;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Sense icona"></dss-button>
    \`;
  }
}`,...(O=(H=b.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var j,J,K;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Amb icona" icon="add_box"></dss-button>
      <dss-button size="md" label="Amb icona" icon="add_box" iconPosition="right"></dss-button>
    \`;
  }
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,G,Q;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="sm" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="md" icon="add_box" label="Button" onlyIcon></dss-button>
      <dss-button size="lg" icon="add_box" label="Button" onlyIcon></dss-button>
    \`;
  }
}`,...(Q=(G=m.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var R,U,Y;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <dss-button variant="primary" label="Lorem ipsum dolor sit amet consecutur ipsum" size="md"></dss-button>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-max-width-style')]
}`,...(Y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,tt,st;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-button size="md" label="Button" icon="add_box" loading></dss-button>
      <dss-button size="md" label="Button" icon="add_box" onlyIcon loading></dss-button>
    \`;
  }
}`,...(st=(tt=v.parameters)==null?void 0:tt.docs)==null?void 0:st.source}}};var et,ot,nt;g.parameters={...g.parameters,docs:{...(et=g.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(ot=g.parameters)==null?void 0:ot.docs)==null?void 0:nt.source}}};var at,rt,dt;y.parameters={...y.parameters,docs:{...(at=y.parameters)==null?void 0:at.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const forceFocus = () => {
      const element = document.querySelector('#manual-focus-demo');
      if (element) {
        (element as HTMLElement).focus();
      }
    };
    return html\`
            <div class="wrapper">
                <dss-button label="Focus" @click=\${forceFocus} variant="secondary"></dss-button>
                <dss-button 
                    id="manual-focus-demo"
                    label="Button"
                ></dss-button>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-focus-style')]
}`,...(dt=(rt=y.parameters)==null?void 0:rt.docs)==null?void 0:dt.source}}};const lt=["Playground","Variant","Danger","Warning","Success","Info","Size","TextNoIcon","TextIcon","IconNoText","MaxWidth","Loading","Notification","Focus"],mt=Object.freeze(Object.defineProperty({__proto__:null,Danger:r,Focus:y,IconNoText:m,Info:l,Loading:v,MaxWidth:p,Notification:g,Playground:n,Size:u,Success:i,TextIcon:c,TextNoIcon:b,Variant:a,Warning:d,__namedExportsOrder:lt,default:it},Symbol.toStringTag,{value:"Module"}));export{r as D,y as F,l as I,v as L,p as M,g as N,n as P,mt as S,b as T,a as V,d as W,i as a,u as b,c,m as d};
