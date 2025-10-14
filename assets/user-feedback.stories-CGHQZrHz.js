import{x as t}from"./lit-html-D6cejpwM.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .innerZoomElementWrapper #root-inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--dss-spacing-xl);
  }
  .wrapper-horizontal {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--dss-spacing-xl);
  }
`,Z={title:"Components/User Feedback",argTypes:{status:{name:"Estats",control:{type:"radio"},options:["error","empty","not-found","success","warning","work-in-progress"]},variant:{name:"Variant",control:{type:"radio"},options:["default","horizontal"]},size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},title:{name:"Títol",control:{type:"text"}},description:{name:"Descripció",control:{type:"text"}},showButtonPrimary:{name:"Mostrar botó principal",control:{type:"boolean"}},showButtonSecondary:{name:"Mostrar botó secundari",control:{type:"boolean"},if:{arg:"showButtonPrimary",eq:!0}},showDetails:{name:"Mostrar enllaç a detalls",control:{type:"boolean"}},detailsLabel:{name:"Etiqueta de l'enllaç",control:{type:"text"},if:{arg:"showDetails",eq:!0}},detailsMessage:{name:"Metssage de detalls",control:{type:"text"},if:{arg:"showDetails",eq:!0}},hideFooter:{name:"Amaga footer",control:{type:"boolean"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1472-3948&m=dev"}},args:{status:"error",variant:"default",size:"lg",title:"Title",description:"Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space.",showButtonPrimary:!0,showButtonSecondary:!1,showDetails:!1,detailsLabel:"Veure detalls",detailsMessage:"This message could be also HTML code using the details slot. In case using HTML you would need to apply your own style to meet the corresponding design.",hideFooter:!1},render:e=>{const f=e.size==="sm"?"md":"lg",g=t`
        ${e.showButtonSecondary?t`<dss-button label="Button" variant="secondary" size="${f}"></dss-button>`:""} 
        ${e.showButtonPrimary?t`<dss-button label="Button" size="${f}"></dss-button>`:""}
      `;return t`
        ${e.showDetails?t`
            <dss-user-feedback
              variant="${e.variant}"
              size="${e.size}"
              status="${e.status}"
              imageAlt="Alternative text for image"
              title="${e.title}"
              description="${e.description}"
              ?hasDetails=${e.showDetails}
              detailsLabel="${e.detailsLabel}"
              ?hideFooter=${e.hideFooter}
            >
              <div slot="details">
                ${e.detailsMessage}
              </div>
              ${g}
            </dss-user-feedback>
          `:t`
            <dss-user-feedback
              variant="${e.variant}"
              size="${e.size}"
              status="${e.status}"
              title="${e.title}"
              description="${e.description}"
              ?hideFooter=${e.hideFooter}
            >
              ${g}
            </dss-user-feedback>
          `}
      `}},i={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        size='lg'
        status='success'
        title="Title (lg)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        size='md'
        status='success'
        title="Title (md)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        size='sm'
        status='success'
        title="Title (sm)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="md"></dss-button>
        <dss-button label="Button" size="md"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-sizes-style")]},o={tags:["!dev"],render:()=>t`
    <div class="wrapper-horizontal">
      <dss-user-feedback
        variant='horizontal'
        size='lg'
        status='error'
        title="Title (lg)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        variant='horizontal'
        size='md'
        status='error'
        title="Title (md)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        variant='horizontal'
        size='sm'
        status='error'
        title="Title (sm)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="md"></dss-button>
        <dss-button label="Button" size="md"></dss-button>
      </dss-user-feedback>
    </div>
    `,decorators:[s(r,"user-feedback-horizontal-style")]},n={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-builder-style")]},l={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-success-style")]},d={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='warning'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='warning'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='warning'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-warning-style")]},u={tags:["!dev"],render:()=>t`
     <dss-user-feedback
        status='error'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='error'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='error'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback> 
    `,decorators:[s(r,"user-feedback-error-style")]},c={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='empty'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='empty'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='empty'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-empty-style")]},b={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='not-found'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='not-found'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='not-found'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-notfound-style")]},h={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='work-in-progress'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='work-in-progress'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='work-in-progress'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-in-progress-style")]},p={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
        hasDetails
      >
        <div slot="details">
          Lorem ipsum dolor sit amaet.
        </div>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
        hasDetails
      >
        <div slot="details">
          Lorem ipsum dolor sit amaet.
        </div>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
        hasDetails
      >
        <div slot="details">
          Lorem ipsum dolor sit amaet.
        </div>
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-link-style")]};var k,y,m;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1472-3948&m=dev'
    }
  },
  args: {
    status: 'error',
    variant: 'default',
    size: 'lg',
    title: 'Title',
    description: 'Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space.',
    showButtonPrimary: true,
    showButtonSecondary: false,
    showDetails: false,
    detailsLabel: 'Veure detalls',
    detailsMessage: 'This message could be also HTML code using the details slot. In case using HTML you would need to apply your own style to meet the corresponding design.',
    hideFooter: false
  },
  render: (args: any) => {
    const buttonSize = args.size === 'sm' ? 'md' : 'lg';
    const buttonGroup = html\`
        \${args.showButtonSecondary ? html\`<dss-button label="Button" variant="secondary" size="\${buttonSize}"></dss-button>\` : ''} 
        \${args.showButtonPrimary ? html\`<dss-button label="Button" size="\${buttonSize}"></dss-button>\` : ''}
      \`;
    return html\`
        \${args.showDetails ? html\`
            <dss-user-feedback
              variant="\${args.variant}"
              size="\${args.size}"
              status="\${args.status}"
              imageAlt="Alternative text for image"
              title="\${args.title}"
              description="\${args.description}"
              ?hasDetails=\${args.showDetails}
              detailsLabel="\${args.detailsLabel}"
              ?hideFooter=\${args.hideFooter}
            >
              <div slot="details">
                \${args.detailsMessage}
              </div>
              \${buttonGroup}
            </dss-user-feedback>
          \` : html\`
            <dss-user-feedback
              variant="\${args.variant}"
              size="\${args.size}"
              status="\${args.status}"
              title="\${args.title}"
              description="\${args.description}"
              ?hideFooter=\${args.hideFooter}
            >
              \${buttonGroup}
            </dss-user-feedback>
          \`}
      \`;
  }
}`,...(m=(y=a.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var x,w,z;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        size='lg'
        status='success'
        title="Title (lg)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        size='md'
        status='success'
        title="Title (md)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        size='sm'
        status='success'
        title="Title (sm)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="md"></dss-button>
        <dss-button label="Button" size="md"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-sizes-style')]
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var v,B,T;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper-horizontal">
      <dss-user-feedback
        variant='horizontal'
        size='lg'
        status='error'
        title="Title (lg)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        variant='horizontal'
        size='md'
        status='error'
        title="Title (md)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        variant='horizontal'
        size='sm'
        status='error'
        title="Title (sm)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="md"></dss-button>
        <dss-button label="Button" size="md"></dss-button>
      </dss-user-feedback>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-horizontal-style')]
}`,...(T=(B=o.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var I,W,S;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-builder-style')]
}`,...(S=(W=n.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var $,D,L;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-success-style')]
}`,...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var F,M,P;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='warning'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='warning'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='warning'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-warning-style')]
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var E,H,A;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-user-feedback
        status='error'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='error'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='error'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback> 
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-error-style')]
}`,...(A=(H=u.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var _,q,G;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='empty'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='empty'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='empty'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-empty-style')]
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var j,C,N;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='not-found'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='not-found'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='not-found'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-notfound-style')]
}`,...(N=(C=b.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var O,V,J;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='work-in-progress'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='work-in-progress'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='work-in-progress'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-in-progress-style')]
}`,...(J=(V=h.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var K,X,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
        hasDetails
      >
        <div slot="details">
          Lorem ipsum dolor sit amaet.
        </div>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
        hasDetails
      >
        <div slot="details">
          Lorem ipsum dolor sit amaet.
        </div>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        title="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
        hasDetails
      >
        <div slot="details">
          Lorem ipsum dolor sit amaet.
        </div>
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-link-style')]
}`,...(U=(X=p.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};const Q=["Playground","Sizes","Horizontal","Builder","Success","Warning","ErrorState","Empty","NotFound","InProgress","Link"],ee=Object.freeze(Object.defineProperty({__proto__:null,Builder:n,Empty:c,ErrorState:u,Horizontal:o,InProgress:h,Link:p,NotFound:b,Playground:a,Sizes:i,Success:l,Warning:d,__namedExportsOrder:Q,default:Z},Symbol.toStringTag,{value:"Module"}));export{n as B,u as E,o as H,h as I,p as L,b as N,a as P,ee as S,d as W,i as a,l as b,c};
