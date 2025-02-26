import{x as n}from"./lit-html-B2eaWknC.js";const u={title:"Components/Tooltip",argTypes:{position:{name:"Position",control:{type:"radio"},options:["top","right","bottom","left"]},align:{name:"Text Alignment",control:{type:"radio"},options:["left","right","center","justify"]},hideArrow:{name:"Amaga la fletxa",control:{type:"boolean"}},text:{name:"Text",control:{type:"text"}}},parameters:{layout:"centered"}},o={render:s=>n`
    <div style="position: relative; margin-top: 100px;">
      <p>Lorem ipsum.</p>
      <dss-tooltip
        position="${s.position}"
        hideArrow="${s.hideArrow}"
        align="${s.align}"
        ?hide=${s.hide}
      >
        ${s.text}
      </dss-tooltip>
    </div>
  `,args:{position:"top",align:"left",hideArrow:!1,text:"Write your text here. If it is longer than four lines, rewrite the text so that it takes up less space."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=137-1373&m=dev"}}},i={tags:["!dev"],render:()=>n`
    <div class="wrapper">
    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="left">
        <span>Position <em>left</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="top">
        <span>Position <em>top</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="bottom">
        <span>Position <em>bottom</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="right">
        <span>Position <em>right</em></span>
      </dss-tooltip>
    </div>
  </div>
    `},t={tags:["!dev"],render:()=>n`
    <div class="wrapper wrapper--alignment">
    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="left" align="left">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="top" align="center">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="bottom" align="justify">
        <span>
          Lorem ipsum dolor sit duo.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="right" align="right">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>
  </div>
    `};var e,r,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => html\`
    <div style="position: relative; margin-top: 100px;">
      <p>Lorem ipsum.</p>
      <dss-tooltip
        position="\${args.position}"
        hideArrow="\${args.hideArrow}"
        align="\${args.align}"
        ?hide=\${args.hide}
      >
        \${args.text}
      </dss-tooltip>
    </div>
  \`,
  args: {
    position: 'top',
    align: 'left',
    hideArrow: false,
    text: 'Write your text here. If it is longer than four lines, rewrite the text so that it takes up less space.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=137-1373&m=dev'
    }
  }
}`,...(p=(r=o.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};var d,a,l;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="left">
        <span>Position <em>left</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="top">
        <span>Position <em>top</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="bottom">
        <span>Position <em>bottom</em></span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="right">
        <span>Position <em>right</em></span>
      </dss-tooltip>
    </div>
  </div>
    \`;
  }
}`,...(l=(a=i.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var m,c,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper wrapper--alignment">
    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="left" align="left">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="top" align="center">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="bottom" align="justify">
        <span>
          Lorem ipsum dolor sit duo.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>

    <div class="box">
      <dss-icon size="sm" icon="circle"></dss-icon>
      <dss-tooltip position="right" align="right">
        <span>
          Lorem ipsum dolor sit.
          Lorem ipsum dolor sit amae.
          Lorem ipsum dolor.
        </span>
      </dss-tooltip>
    </div>
  </div>
    \`;
  }
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const v=["Playground","Position","Alignment"],h=Object.freeze(Object.defineProperty({__proto__:null,Alignment:t,Playground:o,Position:i,__namedExportsOrder:v,default:u},Symbol.toStringTag,{value:"Module"}));export{t as A,o as P,h as S,i as a};
