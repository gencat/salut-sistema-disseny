import{x as n}from"./lit-html-paDGiEfB.js";const s={title:"Components/Legend",argTypes:{orientation:{name:"Orientació",control:{type:"select"},options:["column","row"]},text:{name:"Text",control:{type:"text"}},color1:{name:"Color 1",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},matiz1:{name:"Matís 1",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]},color2:{name:"Color 2",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},matiz2:{name:"Matís 2",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]},color3:{name:"Color 3",control:{type:"select"},options:["primary","red","yellow","green","blue","purple","neutral"]},matiz3:{name:"Matís 3",control:{type:"select"},options:["50","100","200","300","400","500","600","700","800","900"]}},parameters:{layout:"centered"}},o={render:e=>n`<ul
      class="dss-legend ${e.orientation==="column"?"dss-legend--column":""} 
        "
    >
      <li
        class="dss-legend__item"
        style="--legend-bg-color: var(--color-${e.color1}-${e.matiz1});"
      >
        ${e.text}
      </li>
      <li
        class="dss-legend__item"
        style="--legend-bg-color: var(--color-${e.color2}-${e.matiz2});"
      >
        ${e.text}
      </li>
      <li
        class="dss-legend__item"
        style="--legend-bg-color: var(--color-${e.color3}-${e.matiz3});"
      >
        ${e.text}
      </li>
    </ul>`,args:{orientation:"row",text:"Legend",color1:"neutral",matiz1:"100",color2:"neutral",matiz2:"100",color3:"neutral",matiz3:"100"}};var l,t,r;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`<ul
      class="dss-legend \${args.orientation === 'column' ? 'dss-legend--column' : ''} 
        "
    >
      <li
        class="dss-legend__item"
        style="--legend-bg-color: var(--color-\${args.color1}-\${args.matiz1});"
      >
        \${args.text}
      </li>
      <li
        class="dss-legend__item"
        style="--legend-bg-color: var(--color-\${args.color2}-\${args.matiz2});"
      >
        \${args.text}
      </li>
      <li
        class="dss-legend__item"
        style="--legend-bg-color: var(--color-\${args.color3}-\${args.matiz3});"
      >
        \${args.text}
      </li>
    </ul>\`;
  },
  args: {
    orientation: 'row',
    text: 'Legend',
    color1: 'neutral',
    matiz1: '100',
    color2: 'neutral',
    matiz2: '100',
    color3: 'neutral',
    matiz3: '100'
  }
}`,...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const a=["Playground"],i=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:a,default:s},Symbol.toStringTag,{value:"Module"}));export{o as P,i as S};
