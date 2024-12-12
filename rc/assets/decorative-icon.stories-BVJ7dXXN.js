import{x as o}from"./lit-html-B2eaWknC.js";const w={title:"Components/Decorative Icon",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg","xl"]},color:{name:"Colors",control:{type:"select"},options:["default","success","error","disabled"]},iconType:{name:"Tipús icona",control:{type:"select"},options:["dss-icon","dss-icon dss-icon--fill"]},icon:{name:"Icona"}},parameters:{layout:"centered"}},s={render:a=>o`
    <div
      class="dss-decorative-icon dss-decorative-icon--${a.color} dss-decorative-icon--${a.size}"
    >
      <i class="${a.iconType}">${a.icon}</i>
    </div>
  `,args:{size:"xl",color:"default",icon:"add_box",iconType:"dss-icon"}},d={tags:["!dev"],render:()=>o`
      <div class="wrapper">
        <div class="dss-decorative-icon">
          <i class="dss-icon">add\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--md">
          <i class="dss-icon">add\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--lg">
          <i class="dss-icon">add\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--xl">
          <i class="dss-icon">add\_box</i>
        </div> 
      </div>
    `},i={tags:["!dev"],render:()=>o`
      <div class="wrapper">
        <div class="dss-decorative-icon dss-decorative-icon--success">
          <i class="dss-icon">add\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--success dss-decorative-icon--md">
          <i class="dss-icon">add\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--success dss-decorative-icon--lg">
          <i class="dss-icon">add\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--success dss-decorative-icon--xl">
          <i class="dss-icon">add\_box</i>
        </div>
      </div>
    `},c={tags:["!dev"],render:()=>o`
      <div class="wrapper">
        <div class="dss-decorative-icon dss-decorative-icon--error">
          <i class="dss-icon">add\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--error dss-decorative-icon--md">
          <i class="dss-icon">add\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--error dss-decorative-icon--lg">
          <i class="dss-icon">add\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--error dss-decorative-icon--xl">
          <i class="dss-icon">add\_box</i>
        </div>
      </div>
    `},e={tags:["!dev"],render:()=>o`
      <div class="wrapper">
        <div class="dss-decorative-icon dss-decorative-icon--disabled">
          <i class="dss-icon">add\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--disabled dss-decorative-icon--md">
          <i class="dss-icon">add\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--disabled dss-decorative-icon--lg">
          <i class="dss-icon">add\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--disabled dss-decorative-icon--xl">
          <i class="dss-icon">add\_box</i>
        </div>
      </div>
    `};var n,r,v;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => html\`
    <div
      class="dss-decorative-icon dss-decorative-icon--\${args.color} dss-decorative-icon--\${args.size}"
    >
      <i class="\${args.iconType}">\${args.icon}</i>
    </div>
  \`,
  args: {
    size: 'xl',
    color: 'default',
    icon: 'add_box',
    iconType: 'dss-icon'
  }
}`,...(v=(r=s.parameters)==null?void 0:r.docs)==null?void 0:v.source}}};var t,l,p;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <div class="dss-decorative-icon">
          <i class="dss-icon">add\\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--md">
          <i class="dss-icon">add\\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--lg">
          <i class="dss-icon">add\\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--xl">
          <i class="dss-icon">add\\_box</i>
        </div> 
      </div>
    \`;
  }
}`,...(p=(l=d.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var b,x,u;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <div class="dss-decorative-icon dss-decorative-icon--success">
          <i class="dss-icon">add\\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--success dss-decorative-icon--md">
          <i class="dss-icon">add\\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--success dss-decorative-icon--lg">
          <i class="dss-icon">add\\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--success dss-decorative-icon--xl">
          <i class="dss-icon">add\\_box</i>
        </div>
      </div>
    \`;
  }
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var m,_,g;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <div class="dss-decorative-icon dss-decorative-icon--error">
          <i class="dss-icon">add\\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--error dss-decorative-icon--md">
          <i class="dss-icon">add\\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--error dss-decorative-icon--lg">
          <i class="dss-icon">add\\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--error dss-decorative-icon--xl">
          <i class="dss-icon">add\\_box</i>
        </div>
      </div>
    \`;
  }
}`,...(g=(_=c.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var y,S,f;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <div class="dss-decorative-icon dss-decorative-icon--disabled">
          <i class="dss-icon">add\\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--disabled dss-decorative-icon--md">
          <i class="dss-icon">add\\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--disabled dss-decorative-icon--lg">
          <i class="dss-icon">add\\_box</i>
        </div>

        <div class="dss-decorative-icon dss-decorative-icon--disabled dss-decorative-icon--xl">
          <i class="dss-icon">add\\_box</i>
        </div>
      </div>
    \`;
  }
}`,...(f=(S=e.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const T=["Playground","ByDefault","Success","ErrorState","Disabled"],z=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:d,Disabled:e,ErrorState:c,Playground:s,Success:i,__namedExportsOrder:T,default:w},Symbol.toStringTag,{value:"Module"}));export{d as B,e as D,c as E,s as P,z as S,i as a};
