import{x as n}from"./lit-html-D6cejpwM.js";import{w as r}from"./storybook-decorators-DSS85Rnr.js";const p=`
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
`,h={title:"Components/Tooltip",argTypes:{position:{name:"Position",control:{type:"radio"},options:["top","right","bottom","left"]},interactive:{name:"Interactiú",control:{type:"boolean"}},align:{name:"Text Alignment",control:{type:"radio"},options:["left","right","center","justify"]},text:{name:"Text",control:{type:"text"}}},parameters:{layout:"centered"}},s={render:e=>n`
    <div style="position: relative; margin-top: 100px;">
      <p>Lorem ipsum.</p>
      <dss-tooltip
        position="${e.position}"
        align="${e.align}"
        ?interactive=${e.interactive}
      >
        ${e.text}
      </dss-tooltip>
    </div>
  `,args:{interactive:!0,position:"top",align:"left",text:"Write your text here. If it is longer than four lines, rewrite the text so that it takes up less space."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=137-1373&m=dev"}}},o={tags:["!dev"],render:()=>n`
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
    `,decorators:[r(p,"tooltip-position-style")]},i={tags:["!dev"],render:()=>n`
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
    `,decorators:[r(p,"tooltip-alignment-style")]},t={tags:["!dev"],render:()=>n`
    <div class="wrapper">
      <div class="box">
        <dss-icon size="sm" icon="circle"></dss-icon>
        <dss-tooltip interactive>
          <span>Position <em>left</em></span>
        </dss-tooltip>
      </div>
    </div>
    `,decorators:[r(p,"tooltip-interactive-style")]};var a,l,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => html\`
    <div style="position: relative; margin-top: 100px;">
      <p>Lorem ipsum.</p>
      <dss-tooltip
        position="\${args.position}"
        align="\${args.align}"
        ?interactive=\${args.interactive}
      >
        \${args.text}
      </dss-tooltip>
    </div>
  \`,
  args: {
    interactive: true,
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,v;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(v=(m=o.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,u,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,b,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper">
      <div class="box">
        <dss-icon size="sm" icon="circle"></dss-icon>
        <dss-tooltip interactive>
          <span>Position <em>left</em></span>
        </dss-tooltip>
      </div>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'tooltip-interactive-style')]
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const w=["Playground","Position","Alignment","Interactive"],z=Object.freeze(Object.defineProperty({__proto__:null,Alignment:i,Interactive:t,Playground:s,Position:o,__namedExportsOrder:w,default:h},Symbol.toStringTag,{value:"Module"}));export{i as A,t as I,s as P,z as S,o as a};
