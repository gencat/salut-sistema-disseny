import{x as e}from"./lit-html-D6cejpwM.js";import{w as u}from"./storybook-decorators-DSS85Rnr.js";const v=`
  .innerZoomElementWrapper {
    flex-direction: column;
    align-items: center;
    gap: 150px;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
  }
  .wrapper--alignment {
    height: 240px;
  }
  .box {
    position: relative;
  }
  .box + .box {
    margin-left: 50px;
  }
  .wrapper--alignment > .box + .box {
    margin-left: 100px;
  }
  .tooltip {
    display: none;
  }
  .element:hover + .tooltip {
    display: block;
  }
`,x={title:"Components/Tooltip",argTypes:{position:{name:"Position",control:{type:"radio"},options:["top","right","bottom","left"]},align:{name:"Text Alignment",control:{type:"radio"},options:["left","right","center","justify"]},text:{name:"Text",control:{type:"text"}}},parameters:{layout:"centered"}},o={render:t=>e`
    <div style="position: relative; margin-top: 100px;">
      <p>Lorem ipsum.</p>
      <dss-tooltip
        position="${t.position}"
        align="${t.align}"
        ?hide=${t.hide}
      >
        ${t.text}
      </dss-tooltip>
    </div>
  `,args:{position:"top",align:"left",text:"Write your text here. If it is longer than four lines, rewrite the text so that it takes up less space."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=137-1373&m=dev"}}},s={tags:["!dev"],render:()=>e`
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
    `,decorators:[u(v,"tooltip-position-style")]},i={tags:["!dev"],render:()=>e`
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
    `,decorators:[u(v,"tooltip-alignment-style")]};var n,r,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => html\`
    <div style="position: relative; margin-top: 100px;">
      <p>Lorem ipsum.</p>
      <dss-tooltip
        position="\${args.position}"
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
    text: 'Write your text here. If it is longer than four lines, rewrite the text so that it takes up less space.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=137-1373&m=dev'
    }
  }
}`,...(p=(r=o.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};var l,a,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tooltip-position-style')]
}`,...(d=(a=s.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var m,c,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  },
  decorators: [withStyle(wrapperStyle, 'tooltip-alignment-style')]
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const h=["Playground","Position","Alignment"],b=Object.freeze(Object.defineProperty({__proto__:null,Alignment:i,Playground:o,Position:s,__namedExportsOrder:h,default:x},Symbol.toStringTag,{value:"Module"}));export{i as A,o as P,b as S,s as a};
