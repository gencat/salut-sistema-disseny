import"./lit-element-DhY7bShc.js";import{x as i}from"./lit-html-B2eaWknC.js";const $={title:"Components/Slider",argTypes:{min:{name:"Min.",control:{type:"number",min:0}},max:{name:"Màx.",control:{type:"number",min:0}},step:{name:"Pasos",control:{type:"number",min:0}},value:{name:"Valor",control:{type:"number",min:0}},orientation:{name:"Orientació",control:{type:"radio"},options:["vertical","horizontal"]},disabled:{name:"Deshabil·litar",control:{type:"boolean"}}},parameters:{layout:"centered"}},r={render:e=>i`
      <div class="container-slider">
        <dss-slider
          min="${e.min}"
          max="${e.max}"
          value="${e.value}"
          step="${e.step}"
          orient="${e.orientation}"
          .disabled="${e.disabled}"
        ></dss-slider>
      </div>
    `,args:{min:0,max:100,value:50,step:1,orientation:"horizontal",disabled:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=468-697&m=dev"}}},n={tags:["!dev"],render:()=>i`
      <div class="container-slider">
        <dss-slider max="100" value="50" step="1" orient="horizontal" />
      </div>
    `},s={tags:["!dev"],render:()=>i`
       <div class="container-slider">
          <dss-slider max="100" value="50" step="1" orient="vertical" />
        </div>
    `},a={tags:["!dev"],render:()=>i`
      <div class="wrapper">
        <div class="container-slider">
          <dss-slider max="100" value="60" step="1" orient="horizontal" />
        </div>

        <div class="container-slider">
          <dss-slider max="100" value="60" step="20" orient="horizontal" />
        </div>
      </div>
    `},t={tags:["!dev"],render:()=>i`
      <div class="container-slider">
        <dss-slider max="100" value="50" step="1" orient="horizontal" disabled />
      </div>
    `};var o,d,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <div class="container-slider">
        <dss-slider
          min="\${args.min}"
          max="\${args.max}"
          value="\${args.value}"
          step="\${args.step}"
          orient="\${args.orientation}"
          .disabled="\${args.disabled}"
        ></dss-slider>
      </div>
    \`;
  },
  args: {
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    orientation: 'horizontal',
    disabled: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=468-697&m=dev'
    }
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,c,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-slider">
        <dss-slider max="100" value="50" step="1" orient="horizontal" />
      </div>
    \`;
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var v,u,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="container-slider">
          <dss-slider max="100" value="50" step="1" orient="vertical" />
        </div>
    \`;
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <div class="container-slider">
          <dss-slider max="100" value="60" step="1" orient="horizontal" />
        </div>

        <div class="container-slider">
          <dss-slider max="100" value="60" step="20" orient="horizontal" />
        </div>
      </div>
    \`;
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var S,y,z;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-slider">
        <dss-slider max="100" value="50" step="1" orient="horizontal" disabled />
      </div>
    \`;
  }
}`,...(z=(y=t.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};const f=["Playground","Horizontal","Vertical","Steps","Disabled"],_=Object.freeze(Object.defineProperty({__proto__:null,Disabled:t,Horizontal:n,Playground:r,Steps:a,Vertical:s,__namedExportsOrder:f,default:$},Symbol.toStringTag,{value:"Module"}));export{t as D,n as H,r as P,_ as S,s as V,a};
