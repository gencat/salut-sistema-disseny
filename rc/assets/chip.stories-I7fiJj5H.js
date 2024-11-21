import{x as n}from"./lit-html-paDGiEfB.js";const A={title:"Components/Chip",argTypes:{label:{name:"Text"},size:{name:"Mida",control:{type:"radio"},options:["sm","md"]},active:{name:"Active",control:{type:"boolean"}},disabled:{name:"Disabled",control:{type:"boolean"}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},iconType:{name:"Tipús icona",control:{type:"select"},options:["dss-icon","dss-icon dss-icon--fill"],if:{arg:"showIcon"}},icon:{name:"Icona",if:{arg:"showIcon"}},showIconButton:{name:"Mostrar Icon Button",control:{type:"boolean"}}},parameters:{layout:"centered"}},i={render:s=>{const O=s.size==="sm"?"dss-chip--sm":"",M=s.active?"dss-chip--active":"",P=s.disabled?"disabled":"";return n`
      <span
        class="dss-chip ${O} ${M} ${P}"
        tabIndex="0"
      >
        ${s.showIcon&&s.size==="sm"?n`<i class="dss-icon dss-icon--sm ${s.iconType}"
              >${s.icon}</i
            >`:null}
        ${s.showIcon&&s.size==="md"?n`<i class="dss-icon dss-icon--md ${s.iconType}"
              >${s.icon}</i
            >`:null}
        ${s.label}
        ${s.showIconButton&&!s.disabled?n`<button class="dss-chip__icon-button">
              <i class="dss-icon">close</i>
            </button>`:null}
        ${s.showIconButton&&s.disabled?n`<button class="dss-chip__icon-button" disabled>
              <i class="dss-icon">close</i>
            </button>`:null}
      </span>
    `},args:{label:"Chip",size:"md",active:!1,disabled:!1,showIconButton:!1,showIcon:!1,iconType:"dss-icon",icon:"add_box"}},a={tags:["!dev"],render:()=>n`
      <div class="wrapper">
        <span tabindex="0" class="dss-chip">
          Chip
        </span>
        <span tabindex="0" class="dss-chip dss-chip--active">
          Chip
        </span>
        <span tabindex="0" class="dss-chip dss-chip--sm">
          Chip
        </span>
        <span tabindex="0" class="dss-chip dss-chip--active dss-chip--sm">
          Chip
        </span>
      </div>
    `},c={tags:["!dev"],render:()=>n`
      <div class="wrapper">
        <span tabindex="0" class="dss-chip">
          Chip
        </span>
        <span tabindex="0" class="dss-chip dss-chip--active">
          Chip
        </span>
        <span tabindex="0" class="dss-chip disabled">
          Chip
        </span>
        <span tabindex="0" class="dss-chip dss-chip--active disabled">
          Chip
        </span>
      </div>
    `},d={tags:["!dev"],render:()=>n`
      <div class="wrapper">
      <span tabindex="0" class="dss-chip dss-chip--sm">
    <i class="dss-icon dss-icon--sm">add\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip dss-chip--active dss-chip--sm">
    <i class="dss-icon dss-icon--sm">add\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip dss-chip--sm disabled">
    <i class="dss-icon dss-icon--sm">add\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip dss-chip--active dss-chip--sm disabled">
    <i class="dss-icon dss-icon--sm">add\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip">
    <i class="dss-icon dss-icon--md">add\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip dss-chip--active">
    <i class="dss-icon dss-icon--md">add\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip disabled">
    <i class="dss-icon dss-icon--md">add\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip dss-chip--active disabled">
    <i class="dss-icon dss-icon--md">add\_box</i>Chip
  </span>
      </div>
    `},o={tags:["!dev"],render:()=>n`
      <div class="wrapper">
      <span tabindex="0" class="dss-chip">
    Chip

    <button class="dss-chip__icon-button">
      <i class="dss-icon">close</i>
    </button>
  </span>

  <span tabindex="0" class="dss-chip dss-chip--active">
    Chip

    <button class="dss-chip__icon-button">
      <i class="dss-icon">close</i>
    </button>
  </span>

  <span tabindex="0" class="dss-chip disabled">
    Chip

    <button class="dss-chip__icon-button" disabled>
      <i class="dss-icon">close</i>
    </button>
  </span>

  <span tabindex="0" class="dss-chip dss-chip--active disabled">
    Chip

    <button class="dss-chip__icon-button" disabled>
      <i class="dss-icon">close</i>
    </button>
  </span>
      </div>
    `},p={tags:["!dev"],render:()=>n`
      <div class="wrapper">
        <span tabindex="0" class="dss-chip dss-chip--sm">
          <i class="dss-icon dss-icon--sm">add\_box</i>Chip

          <button class="dss-chip__icon-button">
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--sm dss-chip--active">
          <i class="dss-icon dss-icon--sm">add\_box</i>Chip

          <button class="dss-chip__icon-button">
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--sm disabled">
          <i class="dss-icon dss-icon--sm">add\_box</i>Chip

          <button class="dss-chip__icon-button" disabled>
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--sm dss-chip--active disabled">
          <i class="dss-icon dss-icon--sm">add\_box</i>Chip

          <button class="dss-chip__icon-button" disabled>
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip">
          <i class="dss-icon dss-icon--md">add\_box</i>Chip

          <button class="dss-chip__icon-button">
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--active">
          <i class="dss-icon dss-icon--md">add\_box</i>Chip

          <button class="dss-chip__icon-button">
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip disabled">
          <i class="dss-icon dss-icon--md">add\_box</i>Chip

          <button class="dss-chip__icon-button" disabled>
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--active disabled">
          <i class="dss-icon dss-icon--md">add\_box</i>Chip

          <button class="dss-chip__icon-button" disabled>
            <i class="dss-icon">close</i>
          </button>
        </span>
      </div>
    `},e={tags:["!dev"],render:()=>n`
      <div class="wrapper">
        <span tabindex="0" class="dss-chip dss-chip--sm">
          <i class="dss-icon dss-icon--sm">add\_box</i>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--sm dss-chip--active">
          <i class="dss-icon dss-icon--sm">add\_box</i>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--sm disabled">
          <i class="dss-icon dss-icon--sm">add\_box</i>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--sm dss-chip--active disabled">
          <i class="dss-icon dss-icon--sm">add\_box</i>
        </span>

        <span tabindex="0" class="dss-chip">
          <i class="dss-icon dss-icon--md">add\_box</i>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--active">
          <i class="dss-icon dss-icon--md">add\_box</i>
        </span>

        <span tabindex="0" class="dss-chip disabled">
          <i class="dss-icon dss-icon--md">add\_box</i>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--active disabled">
          <i class="dss-icon dss-icon--md">add\_box</i>
        </span>
      </div>
    `};var t,l,b;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => {
    const cssClass = args.size === 'sm' ? 'dss-chip--sm' : '';
    const activeClass = args.active ? 'dss-chip--active' : '';
    const disabledClass = args.disabled ? 'disabled' : '';
    return html\`
      <span
        class="dss-chip \${cssClass} \${activeClass} \${disabledClass}"
        tabIndex="0"
      >
        \${args.showIcon && args.size === 'sm' ? html\`<i class="dss-icon dss-icon--sm \${args.iconType}"
              >\${args.icon}</i
            >\` : null}
        \${args.showIcon && args.size === 'md' ? html\`<i class="dss-icon dss-icon--md \${args.iconType}"
              >\${args.icon}</i
            >\` : null}
        \${args.label}
        \${args.showIconButton && !args.disabled ? html\`<button class="dss-chip__icon-button">
              <i class="dss-icon">close</i>
            </button>\` : null}
        \${args.showIconButton && args.disabled ? html\`<button class="dss-chip__icon-button" disabled>
              <i class="dss-icon">close</i>
            </button>\` : null}
      </span>
    \`;
  },
  args: {
    label: 'Chip',
    size: 'md',
    active: false,
    disabled: false,
    showIconButton: false,
    showIcon: false,
    iconType: 'dss-icon',
    icon: 'add_box'
  }
}`,...(b=(l=i.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var h,r,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <span tabindex="0" class="dss-chip">
          Chip
        </span>
        <span tabindex="0" class="dss-chip dss-chip--active">
          Chip
        </span>
        <span tabindex="0" class="dss-chip dss-chip--sm">
          Chip
        </span>
        <span tabindex="0" class="dss-chip dss-chip--active dss-chip--sm">
          Chip
        </span>
      </div>
    \`;
  }
}`,...(u=(r=a.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var m,x,_;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <span tabindex="0" class="dss-chip">
          Chip
        </span>
        <span tabindex="0" class="dss-chip dss-chip--active">
          Chip
        </span>
        <span tabindex="0" class="dss-chip disabled">
          Chip
        </span>
        <span tabindex="0" class="dss-chip dss-chip--active disabled">
          Chip
        </span>
      </div>
    \`;
  }
}`,...(_=(x=c.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var v,C,I;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
      <span tabindex="0" class="dss-chip dss-chip--sm">
    <i class="dss-icon dss-icon--sm">add\\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip dss-chip--active dss-chip--sm">
    <i class="dss-icon dss-icon--sm">add\\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip dss-chip--sm disabled">
    <i class="dss-icon dss-icon--sm">add\\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip dss-chip--active dss-chip--sm disabled">
    <i class="dss-icon dss-icon--sm">add\\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip">
    <i class="dss-icon dss-icon--md">add\\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip dss-chip--active">
    <i class="dss-icon dss-icon--md">add\\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip disabled">
    <i class="dss-icon dss-icon--md">add\\_box</i>Chip
  </span>

  <span tabindex="0" class="dss-chip dss-chip--active disabled">
    <i class="dss-icon dss-icon--md">add\\_box</i>Chip
  </span>
      </div>
    \`;
  }
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var g,w,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
      <span tabindex="0" class="dss-chip">
    Chip

    <button class="dss-chip__icon-button">
      <i class="dss-icon">close</i>
    </button>
  </span>

  <span tabindex="0" class="dss-chip dss-chip--active">
    Chip

    <button class="dss-chip__icon-button">
      <i class="dss-icon">close</i>
    </button>
  </span>

  <span tabindex="0" class="dss-chip disabled">
    Chip

    <button class="dss-chip__icon-button" disabled>
      <i class="dss-icon">close</i>
    </button>
  </span>

  <span tabindex="0" class="dss-chip dss-chip--active disabled">
    Chip

    <button class="dss-chip__icon-button" disabled>
      <i class="dss-icon">close</i>
    </button>
  </span>
      </div>
    \`;
  }
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var $,f,B;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <span tabindex="0" class="dss-chip dss-chip--sm">
          <i class="dss-icon dss-icon--sm">add\\_box</i>Chip

          <button class="dss-chip__icon-button">
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--sm dss-chip--active">
          <i class="dss-icon dss-icon--sm">add\\_box</i>Chip

          <button class="dss-chip__icon-button">
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--sm disabled">
          <i class="dss-icon dss-icon--sm">add\\_box</i>Chip

          <button class="dss-chip__icon-button" disabled>
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--sm dss-chip--active disabled">
          <i class="dss-icon dss-icon--sm">add\\_box</i>Chip

          <button class="dss-chip__icon-button" disabled>
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip">
          <i class="dss-icon dss-icon--md">add\\_box</i>Chip

          <button class="dss-chip__icon-button">
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--active">
          <i class="dss-icon dss-icon--md">add\\_box</i>Chip

          <button class="dss-chip__icon-button">
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip disabled">
          <i class="dss-icon dss-icon--md">add\\_box</i>Chip

          <button class="dss-chip__icon-button" disabled>
            <i class="dss-icon">close</i>
          </button>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--active disabled">
          <i class="dss-icon dss-icon--md">add\\_box</i>Chip

          <button class="dss-chip__icon-button" disabled>
            <i class="dss-icon">close</i>
          </button>
        </span>
      </div>
    \`;
  }
}`,...(B=(f=p.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var S,T,z;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <span tabindex="0" class="dss-chip dss-chip--sm">
          <i class="dss-icon dss-icon--sm">add\\_box</i>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--sm dss-chip--active">
          <i class="dss-icon dss-icon--sm">add\\_box</i>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--sm disabled">
          <i class="dss-icon dss-icon--sm">add\\_box</i>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--sm dss-chip--active disabled">
          <i class="dss-icon dss-icon--sm">add\\_box</i>
        </span>

        <span tabindex="0" class="dss-chip">
          <i class="dss-icon dss-icon--md">add\\_box</i>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--active">
          <i class="dss-icon dss-icon--md">add\\_box</i>
        </span>

        <span tabindex="0" class="dss-chip disabled">
          <i class="dss-icon dss-icon--md">add\\_box</i>
        </span>

        <span tabindex="0" class="dss-chip dss-chip--active disabled">
          <i class="dss-icon dss-icon--md">add\\_box</i>
        </span>
      </div>
    \`;
  }
}`,...(z=(T=e.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const j=["Playground","SizeType","Basic","Icon","IconButton","IconAndIconButton","OnlyIcon"],E=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,Icon:d,IconAndIconButton:p,IconButton:o,OnlyIcon:e,Playground:i,SizeType:a,__namedExportsOrder:j,default:A},Symbol.toStringTag,{value:"Module"}));export{c as B,d as I,e as O,i as P,E as S,a,o as b,p as c};
