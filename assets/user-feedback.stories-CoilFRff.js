import{x as t}from"./lit-html-D6cejpwM.js";const X={title:"Components/User Feedback",argTypes:{status:{name:"Estats",control:{type:"radio"},options:["error","empty","not-found","success","warning","work-in-progress"]},variant:{name:"Variant",control:{type:"radio"},options:["default","horizontal"]},size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},title:{name:"Títol",control:{type:"text"}},description:{name:"Descripció",control:{type:"text"}},showButtonPrimary:{name:"Mostrar botó principal",control:{type:"boolean"}},showButtonSecondary:{name:"Mostrar botó secundari",control:{type:"boolean"},if:{arg:"showButtonPrimary",eq:!0}},showDetails:{name:"Mostrar enllaç a detalls",control:{type:"boolean"}},detailsLabel:{name:"Etiqueta de l'enllaç",control:{type:"text"},if:{arg:"showDetails",eq:!0}},detailsMessage:{name:"Metssage de detalls",control:{type:"text"},if:{arg:"showDetails",eq:!0}},hideFooter:{name:"Amaga footer",control:{type:"boolean"}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1472-3948&m=dev"}},args:{status:"error",variant:"default",size:"lg",title:"Title",description:"Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space.",showButtonPrimary:!0,showButtonSecondary:!1,showDetails:!1,detailsLabel:"Veure detalls",detailsMessage:"This message could be also HTML code using the details slot. In case using HTML you would need to apply your own style to meet the corresponding design.",hideFooter:!1},render:e=>{const h=e.size==="sm"?"md":"lg",p=t`
        ${e.showButtonSecondary?t`<dss-button label="Button" variant="secondary" size="${h}"></dss-button>`:""} 
        ${e.showButtonPrimary?t`<dss-button label="Button" size="${h}"></dss-button>`:""}
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
              ${p}
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
              ${p}
            </dss-user-feedback>
          `}
      `}},r={tags:["!dev"],render:()=>t`
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
    `},a={tags:["!dev"],render:()=>t`
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
    `},i={tags:["!dev"],render:()=>t`
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
    `},o={tags:["!dev"],render:()=>t`
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
    `},n={tags:["!dev"],render:()=>t`
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
    `},d={tags:["!dev"],render:()=>t`
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
    `},l={tags:["!dev"],render:()=>t`
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
    `},u={tags:["!dev"],render:()=>t`
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
    `},c={tags:["!dev"],render:()=>t`
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
    `},b={tags:["!dev"],render:()=>t`
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
    `};var g,f,k;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var m,y,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var z,w,v;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
  }
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var B,T,I;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
  }
}`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var W,$,S;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
  }
}`,...(S=($=o.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var D,L,F;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
  }
}`,...(F=(L=n.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var M,P,E;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
  }
}`,...(E=(P=d.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var H,A,_;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
  }
}`,...(_=(A=l.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var q,G,C;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
  }
}`,...(C=(G=u.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var N,O,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
  }
}`,...(V=(O=c.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var j,J,K;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const U=["Playground","Sizes","Horizontal","Builder","Success","Warning","ErrorState","Empty","NotFound","InProgress","Link"],R=Object.freeze(Object.defineProperty({__proto__:null,Builder:i,Empty:l,ErrorState:d,Horizontal:a,InProgress:c,Link:b,NotFound:u,Playground:s,Sizes:r,Success:o,Warning:n,__namedExportsOrder:U,default:X},Symbol.toStringTag,{value:"Module"}));export{i as B,d as E,a as H,c as I,b as L,u as N,s as P,R as S,n as W,r as a,o as b,l as c};
