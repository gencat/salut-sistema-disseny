import{x as t}from"./lit-html-B2eaWknC.js";const U={title:"Components/User Feedback",argTypes:{type:{name:"Tipus de error",control:{type:"radio"},options:["Error","Empty","Not Found","Success","Work in Progress"]},variant:{name:"Variant",control:{type:"radio"},options:["default","horizontal"]},size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},title:{name:"Títol",control:{type:"text"}},description:{name:"Descripció",control:{type:"text"}},showButtonPrimary:{name:"Mostrar botó principal",control:{type:"boolean"}},showButtonSecondary:{name:"Mostrar botó secundari",control:{type:"boolean"},if:{arg:"showButtonPrimary",eq:!0}},showDetails:{name:"Mostrar enllaç a detalls",control:{type:"boolean"}},detailsLabel:{name:"Etiqueta de l'enllaç",control:{type:"text"},if:{arg:"showDetails",eq:!0}},detailsMessage:{name:"Metssage de detalls",control:{type:"text"},if:{arg:"showDetails",eq:!0}},hideFooter:{name:"Amaga footer",control:{type:"boolean"}}},parameters:{layout:"centered"}},r={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1472-3948&m=dev"}},args:{type:"Error",variant:"default",size:"lg",title:"Title",description:"Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space.",showButtonPrimary:!0,showButtonSecondary:!1,showDetails:!1,detailsLabel:"Veure detalls",detailsMessage:"This message could be also HTML code using the details slot. In case using HTML you would need to apply your own style to meet the corresponding design.",hideFooter:!1},render:e=>{let s="";switch(e.type){case"Error":s="feedback-error.svg";break;case"Empty":s="feedback-empty.svg";break;case"Not Found":s="feedback-not_found.svg";break;case"Success":s="feedback-success.svg";break;case"Work in Progress":s="feedback-work_in_progress.svg";break}const h=e.size==="sm"?"md":"lg",p=t`
        ${e.showButtonSecondary?t`<dss-button label="Button" variant="secondary" size="${h}"></dss-button>`:""} 
        ${e.showButtonPrimary?t`<dss-button label="Button" size="${h}"></dss-button>`:""}
      `;return t`
        ${e.showDetails?t`
            <dss-user-feedback
              variant="${e.variant}"
              size="${e.size}"
              imageSrc="../../assets/img/${s}"
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
              imageSrc="../../assets/img/${s}"
              title="${e.title}"
              description="${e.description}"
              ?hideFooter=${e.hideFooter}
            >
              ${p}
            </dss-user-feedback>
          `}
      `}},a={tags:["!dev"],render:()=>t`
      <dss-user-feedback
        size='lg'
        imageSrc="../../assets/img/feedback-error.svg"
        title="Title (lg)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        size='md'
        imageSrc="../../assets/img/feedback-error.svg"
        title="Title (md)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        size='sm'
        imageSrc="../../assets/img/feedback-error.svg"
        title="Title (sm)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="md"></dss-button>
        <dss-button label="Button" size="md"></dss-button>
      </dss-user-feedback>
    `},i={tags:["!dev"],render:()=>t`
    <div class="wrapper-horizontal">
      <dss-user-feedback
        variant='horizontal'
        size='lg'
        imageSrc="../../assets/img/feedback-error.svg"
        title="Title (lg)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        variant='horizontal'
        size='md'
        imageSrc="../../assets/img/feedback-error.svg"
        title="Title (md)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        variant='horizontal'
        size='sm'
        imageSrc="../../assets/img/feedback-error.svg"
        title="Title (sm)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="md"></dss-button>
        <dss-button label="Button" size="md"></dss-button>
      </dss-user-feedback>
    </div>
    `},n={tags:["!dev"],render:()=>t`
      <dss-user-feedback
    imageSrc="../../assets/img/feedback-error.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-error.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-error.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
    `},o={tags:["!dev"],render:()=>t`
       <dss-user-feedback
    imageSrc="../../assets/img/feedback-success.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-success.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-success.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
    `},d={tags:["!dev"],render:()=>t`
      <dss-user-feedback
    imageSrc="../../assets/img/feedback-warning.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-warning.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-warning.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
    `},l={tags:["!dev"],render:()=>t`
     <dss-user-feedback
    imageSrc="../../assets/img/feedback-error.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-error.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-error.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback> 
    `},u={tags:["!dev"],render:()=>t`
      <dss-user-feedback
    imageSrc="../../assets/img/feedback-empty.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-empty.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-empty.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
    `},c={tags:["!dev"],render:()=>t`
      <dss-user-feedback
    imageSrc="../../assets/img/feedback-not_found.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-not_found.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-not_found.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
    `},b={tags:["!dev"],render:()=>t`
      <dss-user-feedback
    imageSrc="../../assets/img/feedback-work_in_progress.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-work_in_progress.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-work_in_progress.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
    `},g={tags:["!dev"],render:()=>t`
      <dss-user-feedback
    imageSrc="../../assets/img/feedback-success.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
    hasDetails
  >
    <div slot="details">
      Lorem ipsum dolor sit amaet.
    </div>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-success.svg"
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
    imageSrc="../../assets/img/feedback-success.svg"
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
    `};var m,f,k;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1472-3948&m=dev'
    }
  },
  args: {
    type: 'Error',
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
    let image = '';
    switch (args.type) {
      case 'Error':
        image = 'feedback-error.svg';
        break;
      case 'Empty':
        image = 'feedback-empty.svg';
        break;
      case 'Not Found':
        image = 'feedback-not_found.svg';
        break;
      case 'Success':
        image = 'feedback-success.svg';
        break;
      case 'Work in Progress':
        image = 'feedback-work_in_progress.svg';
        break;
    }
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
              imageSrc="../../assets/img/\${image}"
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
              imageSrc="../../assets/img/\${image}"
              title="\${args.title}"
              description="\${args.description}"
              ?hideFooter=\${args.hideFooter}
            >
              \${buttonGroup}
            </dss-user-feedback>
          \`}
      \`;
  }
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,y,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
        size='lg'
        imageSrc="../../assets/img/feedback-error.svg"
        title="Title (lg)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        size='md'
        imageSrc="../../assets/img/feedback-error.svg"
        title="Title (md)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        size='sm'
        imageSrc="../../assets/img/feedback-error.svg"
        title="Title (sm)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="md"></dss-button>
        <dss-button label="Button" size="md"></dss-button>
      </dss-user-feedback>
    \`;
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var z,w,S;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="wrapper-horizontal">
      <dss-user-feedback
        variant='horizontal'
        size='lg'
        imageSrc="../../assets/img/feedback-error.svg"
        title="Title (lg)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        variant='horizontal'
        size='md'
        imageSrc="../../assets/img/feedback-error.svg"
        title="Title (md)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="lg"></dss-button>
        <dss-button label="Button" size="lg"></dss-button>
      </dss-user-feedback>
      <dss-user-feedback
        variant='horizontal'
        size='sm'
        imageSrc="../../assets/img/feedback-error.svg"
        title="Title (sm)"
        description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
      >
        <dss-button label="Button" variant="secondary" size="md"></dss-button>
        <dss-button label="Button" size="md"></dss-button>
      </dss-user-feedback>
    </div>
    \`;
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var B,T,I;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
    imageSrc="../../assets/img/feedback-error.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-error.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-error.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
    \`;
  }
}`,...(I=(T=n.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var W,$,_;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <dss-user-feedback
    imageSrc="../../assets/img/feedback-success.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-success.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-success.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
    \`;
  }
}`,...(_=($=o.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var F,D,L;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
    imageSrc="../../assets/img/feedback-warning.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-warning.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-warning.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
    \`;
  }
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var E,P,M;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <dss-user-feedback
    imageSrc="../../assets/img/feedback-error.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-error.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-error.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback> 
    \`;
  }
}`,...(M=(P=l.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var H,A,q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
    imageSrc="../../assets/img/feedback-empty.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-empty.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-empty.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
    \`;
  }
}`,...(q=(A=u.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var N,G,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
    imageSrc="../../assets/img/feedback-not_found.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-not_found.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-not_found.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
    \`;
  }
}`,...(C=(G=c.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var O,V,j;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
    imageSrc="../../assets/img/feedback-work_in_progress.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-work_in_progress.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-work_in_progress.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
  >
    <dss-button label="Button" variant="secondary" size="lg"></dss-button>
    <dss-button label="Button" size="lg"></dss-button>
  </dss-user-feedback>
    \`;
  }
}`,...(j=(V=b.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var J,K,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-user-feedback
    imageSrc="../../assets/img/feedback-success.svg"
    title="Title"
    description="Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space."
    hasDetails
  >
    <div slot="details">
      Lorem ipsum dolor sit amaet.
    </div>
  </dss-user-feedback>
  <dss-user-feedback
    imageSrc="../../assets/img/feedback-success.svg"
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
    imageSrc="../../assets/img/feedback-success.svg"
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
}`,...(X=(K=g.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const Q=["Playground","Sizes","Horizontal","Builder","Success","Warning","ErrorState","Empty","NotFound","InProgress","Link"],Y=Object.freeze(Object.defineProperty({__proto__:null,Builder:n,Empty:u,ErrorState:l,Horizontal:i,InProgress:b,Link:g,NotFound:c,Playground:r,Sizes:a,Success:o,Warning:d,__namedExportsOrder:Q,default:U},Symbol.toStringTag,{value:"Module"}));export{n as B,l as E,i as H,b as I,g as L,c as N,r as P,Y as S,d as W,a,o as b,u as c};
