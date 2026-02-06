import"./lit-element-BL4lq474.js";import{x as n}from"./lit-html-D6cejpwM.js";import{w as o}from"./storybook-decorators-DSS85Rnr.js";const d=`
  .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
    .container-slider{
        min-height: 200px;
        display: flex;
        align-items: center;
    }
`,$={title:"Components/Slider",argTypes:{min:{name:"Min.",control:{type:"number",min:0}},max:{name:"Màx.",control:{type:"number",min:0}},step:{name:"Pasos",control:{type:"number",min:0}},value:{name:"Valor",control:{type:"number",min:0}},orientation:{name:"Orientació",control:{type:"radio"},options:["vertical","horizontal"]},disabled:{name:"Deshabil·litar",control:{type:"boolean"}}},parameters:{layout:"centered"}},r={render:e=>n`
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
    `,args:{min:0,max:100,value:50,step:1,orientation:"horizontal",disabled:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=468-697&m=dev"}}},s={tags:["!dev"],render:()=>n`
      <div class="container-slider">
        <dss-slider max="100" value="50" step="1" orient="horizontal" />
      </div>
    `,decorators:[o(d,"slider-horizontal-style")]},a={tags:["!dev"],render:()=>n`
       <div class="container-slider">
          <dss-slider max="100" value="50" step="1" orient="vertical" />
        </div>
    `,decorators:[o(d,"slider-vertical-style")]},t={tags:["!dev"],render:()=>n`
      <div class="wrapper">
        <div class="container-slider">
          <dss-slider max="100" value="60" step="1" orient="horizontal" />
        </div>

        <div class="container-slider">
          <dss-slider max="100" value="60" step="20" orient="horizontal" />
        </div>
      </div>
    `,decorators:[o(d,"slider-steps-style")]},i={tags:["!dev"],render:()=>n`
      <div class="container-slider">
        <dss-slider max="100" value="50" step="1" orient="horizontal" disabled />
      </div>
    `,decorators:[o(d,"slider-disabled-style")]};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => {
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,v,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-slider">
        <dss-slider max="100" value="50" step="1" orient="horizontal" />
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'slider-horizontal-style')]
}`,...(u=(v=s.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var y,g,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="container-slider">
          <dss-slider max="100" value="50" step="1" orient="vertical" />
        </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'slider-vertical-style')]
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,x,b;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'slider-steps-style')]
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,z,f;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="container-slider">
        <dss-slider max="100" value="50" step="1" orient="horizontal" disabled />
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'slider-disabled-style')]
}`,...(f=(z=i.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};const P=["Playground","Horizontal","Vertical","Steps","Disabled"],F=Object.freeze(Object.defineProperty({__proto__:null,Disabled:i,Horizontal:s,Playground:r,Steps:t,Vertical:a,__namedExportsOrder:P,default:$},Symbol.toStringTag,{value:"Module"}));export{i as D,s as H,r as P,F as S,a as V,t as a};
