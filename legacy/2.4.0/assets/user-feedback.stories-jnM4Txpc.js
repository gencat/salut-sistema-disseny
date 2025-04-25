import{x as t}from"./lit-html-B2eaWknC.js";const J={title:"Components/User Feedback",argTypes:{type:{name:"Tipus de error",control:{type:"radio"},options:["Error","Empty","Not Found","Success","Work in Progress"]},size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},title:{name:"Títol",control:{type:"text"}},description:{name:"Descripció",control:{type:"text"}},showButtonPrimary:{name:"Mostrar botó principal",control:{type:"boolean"}},showButtonSecondary:{name:"Mostrar botó secundari",control:{type:"boolean"},if:{arg:"showButtonPrimary",eq:!0}},showDetails:{name:"Mostrar enllaç a detalls",control:{type:"boolean"}},detailsLabel:{name:"Etiqueta de l'enllaç",control:{type:"text"},if:{arg:"showDetails",eq:!0}},detailsMessage:{name:"Metssage de detalls",control:{type:"text"},if:{arg:"showDetails",eq:!0}},hideFooter:{name:"Amaga footer",control:{type:"boolean"}}},parameters:{layout:"centered"}},r={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1472-3948&m=dev"}},args:{type:"Error",size:"lg",title:"Title",description:"Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space.",showButtonPrimary:!0,showButtonSecondary:!1,showDetails:!1,detailsLabel:"Veure detalls",detailsMessage:"This message could be also HTML code using the details slot. In case using HTML you would need to apply your own style to meet the corresponding design.",hideFooter:!1},render:e=>{let s="";switch(e.type){case"Error":s="feedback-error.svg";break;case"Empty":s="feedback-empty.svg";break;case"Not Found":s="feedback-not_found.svg";break;case"Success":s="feedback-success.svg";break;case"Work in Progress":s="feedback-work_in_progress.svg";break}const g=e.size==="sm"?"md":"lg",h=t`
        ${e.showButtonSecondary?t`<dss-button label="Button" variant="secondary" size="${g}"></dss-button>`:""} 
        ${e.showButtonPrimary?t`<dss-button label="Button" size="${g}"></dss-button>`:""}
      `;return t`
        ${e.showDetails?t`
            <dss-user-feedback
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
              ${h}
            </dss-user-feedback>
          `:t`
            <dss-user-feedback
              size="${e.size}"
              imageSrc="../../assets/img/${s}"
              title="${e.title}"
              description="${e.description}"
              ?hideFooter=${e.hideFooter}
            >
              ${h}
            </dss-user-feedback>
          `}
      `}},n={tags:["!dev"],render:()=>t`
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
    `},a={tags:["!dev"],render:()=>t`
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
    `},i={tags:["!dev"],render:()=>t`
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
    `},o={tags:["!dev"],render:()=>t`
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
    `},d={tags:["!dev"],render:()=>t`
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
    `},l={tags:["!dev"],render:()=>t`
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
    `},u={tags:["!dev"],render:()=>t`
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
    `},c={tags:["!dev"],render:()=>t`
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
    `},b={tags:["!dev"],render:()=>t`
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
    `};var p,m,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1472-3948&m=dev'
    }
  },
  args: {
    type: 'Error',
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
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var k,y,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,w,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var z,B,T;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var I,W,$;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...($=(W=o.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var _,F,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(F=d.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var L,E,P;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(E=l.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var M,A,q;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(A=u.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var H,N,G;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(N=c.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var C,O,j;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(O=b.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const K=["Playground","Sizes","Builder","Success","Warning","ErrorState","Empty","NotFound","InProgress","Link"],X=Object.freeze(Object.defineProperty({__proto__:null,Builder:a,Empty:l,ErrorState:d,InProgress:c,Link:b,NotFound:u,Playground:r,Sizes:n,Success:i,Warning:o,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{a as B,d as E,c as I,b as L,u as N,r as P,X as S,o as W,n as a,i as b,l as c};
