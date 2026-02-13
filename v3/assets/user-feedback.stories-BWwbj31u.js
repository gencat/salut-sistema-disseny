import{x as t}from"./iframe-DLVb3rJw.js";import{w as s}from"./storybook-decorators-DSS85Rnr.js";const r=`
  #root-inner {
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
`,k={title:"Components/User Feedback",argTypes:{status:{name:"Estats",control:{type:"radio"},options:["error","empty","not-found","success","warning","work-in-progress"]},variant:{name:"Variant",control:{type:"radio"},options:["default","horizontal"]},size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},title:{name:"Títol",control:{type:"text"}},description:{name:"Descripció",control:{type:"text"}},showButtonPrimary:{name:"Mostrar botó principal",control:{type:"boolean"}},showButtonSecondary:{name:"Mostrar botó secundari",control:{type:"boolean"},if:{arg:"showButtonPrimary",eq:!0}},showDetails:{name:"Mostrar enllaç a detalls",control:{type:"boolean"}},detailsLabel:{name:"Etiqueta de l'enllaç",control:{type:"text"},if:{arg:"showDetails",eq:!0}},detailsMessage:{name:"Metssage de detalls",control:{type:"text"},if:{arg:"showDetails",eq:!0}},hideFooter:{name:"Amaga footer",control:{type:"boolean"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1472-3948&m=dev"}},args:{status:"error",variant:"default",size:"lg",title:"Title",description:"Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space.",showButtonPrimary:!0,showButtonSecondary:!1,showDetails:!1,detailsLabel:"Veure detalls",detailsMessage:"This message could be also HTML code using the details slot. In case using HTML you would need to apply your own style to meet the corresponding design.",hideFooter:!1},render:e=>{const f=e.size==="sm"?"md":"lg",g=t`
        ${e.showButtonSecondary?t`<dss-button label="Button" variant="secondary" size="${f}"></dss-button>`:""} 
        ${e.showButtonPrimary?t`<dss-button label="Button" size="${f}"></dss-button>`:""}
      `;return t`
        ${e.showDetails?t`
            <dss-user-feedback
              variant="${e.variant}"
              size="${e.size}"
              status="${e.status}"
              imageAlt="Alternative text for image"
              titleText="${e.title}"
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
              titleText="${e.title}"
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
        titleText="Title (lg)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        size='md'
        status='success'
        titleText="Title (md)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        size='sm'
        status='success'
        titleText="Title (sm)"
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
        titleText="Title (lg)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        variant='horizontal'
        size='md'
        status='error'
        titleText="Title (md)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        variant='horizontal'
        size='sm'
        status='error'
        titleText="Title (sm)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="md"></dss-button>
        <dss-button label="Button" size="md"></dss-button>
      </dss-user-feedback>
    </div>
    `,decorators:[s(r,"user-feedback-horizontal-style")]},n={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-builder-style")]},l={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-success-style")]},d={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='warning'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='warning'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='warning'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-warning-style")]},u={tags:["!dev"],render:()=>t`
     <dss-user-feedback
        status='error'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='error'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='error'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback> 
    `,decorators:[s(r,"user-feedback-error-style")]},c={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='empty'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='empty'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='empty'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-empty-style")]},b={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='not-found'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='not-found'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='not-found'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-notfound-style")]},h={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='work-in-progress'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='work-in-progress'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='work-in-progress'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-in-progress-style")]},p={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
        hasDetails
      >
        <div slot="details">
          Lorem ipsum dolor sit amaet.
        </div>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        titleText="Title"
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
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
        hasDetails
      >
        <div slot="details">
          Lorem ipsum dolor sit amaet.
        </div>
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    `,decorators:[s(r,"user-feedback-link-style")]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
              titleText="\${args.title}"
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
              titleText="\${args.title}"
              description="\${args.description}"
              ?hideFooter=\${args.hideFooter}
            >
              \${buttonGroup}
            </dss-user-feedback>
          \`}
      \`;
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        size='lg'
        status='success'
        titleText="Title (lg)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        size='md'
        status='success'
        titleText="Title (md)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        size='sm'
        status='success'
        titleText="Title (sm)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="md"></dss-button>
        <dss-button label="Button" size="md"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-sizes-style')]
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper-horizontal">
      <dss-user-feedback
        variant='horizontal'
        size='lg'
        status='error'
        titleText="Title (lg)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        variant='horizontal'
        size='md'
        status='error'
        titleText="Title (md)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        variant='horizontal'
        size='sm'
        status='error'
        titleText="Title (sm)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="md"></dss-button>
        <dss-button label="Button" size="md"></dss-button>
      </dss-user-feedback>
    </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-horizontal-style')]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-builder-style')]
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-success-style')]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='warning'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='warning'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='warning'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-warning-style')]
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-user-feedback
        status='error'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='error'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='error'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback> 
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-error-style')]
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='empty'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='empty'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='empty'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-empty-style')]
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='not-found'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='not-found'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='not-found'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-notfound-style')]
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='work-in-progress'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
      </dss-user-feedback>
      <dss-user-feedback
        status='work-in-progress'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        status='work-in-progress'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'user-feedback-in-progress-style')]
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        status='success'
        titleText="Title"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
        hasDetails
      >
        <div slot="details">
          Lorem ipsum dolor sit amaet.
        </div>
      </dss-user-feedback>
      <dss-user-feedback
        status='success'
        titleText="Title"
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
        titleText="Title"
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
}`,...p.parameters?.docs?.source}}};const x=["Playground","Sizes","Horizontal","Builder","Success","Warning","ErrorState","Empty","NotFound","InProgress","Link"],w=Object.freeze(Object.defineProperty({__proto__:null,Builder:n,Empty:c,ErrorState:u,Horizontal:o,InProgress:h,Link:p,NotFound:b,Playground:a,Sizes:i,Success:l,Warning:d,__namedExportsOrder:x,default:k},Symbol.toStringTag,{value:"Module"}));export{n as B,u as E,o as H,h as I,p as L,b as N,a as P,w as S,d as W,i as a,l as b,c};
