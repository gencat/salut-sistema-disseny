import{x as e}from"./lit-html-B2eaWknC.js";const N={title:"Components/User Feedback",argTypes:{type:{name:"Tipus de error",control:{type:"radio"},options:["Error","Empty","Not Found","Success","Work in Progress"]},title:{name:"Títol",control:{type:"text"}},description:{name:"Descripció",control:{type:"text"}},showButtonPrimary:{name:"Mostrar botó principal",control:{type:"boolean"}},showButtonSecondary:{name:"Mostrar botó secundari",control:{type:"boolean"},if:{arg:"showButtonPrimary",eq:!0}},showDetails:{name:"Mostrar enllaç a detalls",control:{type:"boolean"}},detailsLabel:{name:"Etiqueta de l'enllaç",control:{type:"text"},if:{arg:"showDetails",eq:!0}},detailsMessage:{name:"Metssage de detalls",control:{type:"text"},if:{arg:"showDetails",eq:!0}},hideFooter:{name:"Amaga footer",control:{type:"boolean"}}},parameters:{layout:"centered"}},r={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1472-3948&m=dev"}},args:{type:"Error",title:"Title",description:"Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space.",showButtonPrimary:!0,showButtonSecondary:!1,showDetails:!1,detailsLabel:"Veure detalls",detailsMessage:"This message could be also HTML code using the details slot. In case using HTML you would need to apply your own style to meet the corresponding design.",hideFooter:!1},render:t=>{let s="";switch(t.type){case"Error":s="feedback-error.svg";break;case"Empty":s="feedback-empty.svg";break;case"Not Found":s="feedback-not_found.svg";break;case"Success":s="feedback-success.svg";break;case"Work in Progress":s="feedback-work_in_progress.svg";break}const g=e`
        ${t.showButtonSecondary?e`<dss-button label="Button" variant="secondary" size="lg"></dss-button>`:""} 
        ${t.showButtonPrimary?e`<dss-button label="Button" size="lg"></dss-button>`:""}
      `;return e`
        ${t.showDetails?e`
            <dss-user-feedback
              imageSrc="../../assets/img/${s}"
              imageAlt="Alternative text for image"
              title="${t.title}"
              description="${t.description}"
              ?hasDetails=${t.showDetails}
              detailsLabel="${t.detailsLabel}"
              ?hideFooter=${t.hideFooter}
            >
              <div slot="details">
                ${t.detailsMessage}
              </div>
              ${g}
            </dss-user-feedback>
          `:e`
            <dss-user-feedback
              imageSrc="../../assets/img/${s}"
              title="${t.title}"
              description="${t.description}"
              ?hideFooter=${t.hideFooter}
            >
              ${g}
            </dss-user-feedback>
          `}
      `}},n={tags:["!dev"],render:()=>e`
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
    `},a={tags:["!dev"],render:()=>e`
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
    `},i={tags:["!dev"],render:()=>e`
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
    `},o={tags:["!dev"],render:()=>e`
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
    `},d={tags:["!dev"],render:()=>e`
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
    `},l={tags:["!dev"],render:()=>e`
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
    `},u={tags:["!dev"],render:()=>e`
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
    `},c={tags:["!dev"],render:()=>e`
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
    `};var b,h,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1472-3948&m=dev'
    }
  },
  args: {
    type: 'Error',
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
    const buttonGroup = html\`
        \${args.showButtonSecondary ? html\`<dss-button label="Button" variant="secondary" size="lg"></dss-button>\` : ''} 
        \${args.showButtonPrimary ? html\`<dss-button label="Button" size="lg"></dss-button>\` : ''}
      \`;
    return html\`
        \${args.showDetails ? html\`
            <dss-user-feedback
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
}`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var f,k,m;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(m=(k=n.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var y,v,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,S,B;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(S=i.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var T,I,W;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(I=o.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var z,$,_;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=($=d.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var F,D,L;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var E,P,M;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(P=u.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var A,q,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(H=(q=c.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const G=["Playground","Builder","Success","Warning","ErrorState","Empty","NotFound","InProgress","Link"],O=Object.freeze(Object.defineProperty({__proto__:null,Builder:n,Empty:d,ErrorState:o,InProgress:u,Link:c,NotFound:l,Playground:r,Success:a,Warning:i,__namedExportsOrder:G,default:N},Symbol.toStringTag,{value:"Module"}));export{n as B,o as E,u as I,c as L,l as N,r as P,O as S,i as W,a,d as b};
