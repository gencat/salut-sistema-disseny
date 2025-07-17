import{x as a}from"./lit-html-D6a8R3xZ.js";import{a as l}from"./avatar-doctor-BBv5l1RE.js";const V={title:"Components/Chat Message",argTypes:{text:{name:"Missatge",control:{type:"text"}},date:{name:"Data",control:{type:"text"}},username:{name:"Nom",control:{type:"text"}},who:{name:"Identitat",control:{type:"radio"},options:["patient","doctor"]},showAttachments:{name:"Mostrar fitxers adjunts",control:{type:"boolean"}},showAvatarImage:{name:"Mostrar imatge de avatar",control:{type:"boolean"}},avatarImageURL:{name:"Imatge de avatar URL",control:{type:"text"},if:{arg:"showAvatarImage",truthy:!0}},avatarName:{name:"Avatar: Imatge URL",control:{type:"text"},if:{arg:"showAvatarImage",truthy:!1}},avatarLastname:{name:"Avatar: Cognom",control:{type:"text"},if:{arg:"showAvatarImage",truthy:!1}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1924-354&m=dev"}},args:{text:"Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod.",date:"16/08/2023 02:59",username:"Nom del patient o professional - Rol",who:"patient",showAvatarImage:!1,avatarImageURL:l,avatarName:"John",avatarLastname:"Doe",showAttachments:!1},render:e=>{const c=a`
            <div slot="attachments">
              <dss-link label=" nom-arxiu.pdf" href="#" icon="picture_as_pdf"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
            </div>
        `;let u=a``;return e.showAvatarImage?u=a`
        <dss-chat-message 
            who="${e.who}"
            avatarImageUrl="${e.avatarImageURL}"
            username="${e.username}"
            message="${e.text}"
            date="${e.date}">
            ${e.showAttachments?c:null}
        </dss-chat-message>
      `:u=a`
        <dss-chat-message 
            who="${e.who}"
            avatarName="${e.avatarName}" 
            avatarSurname="${e.avatarLastname}" 
            username="${e.username}"
            message="${e.text}"
            date="${e.date}">
            ${e.showAttachments?c:null}
        </dss-chat-message>
      `,a`
      <div style="width:600px">
        ${u}
      </div>
    `}},t={tags:["!dev"],render:()=>a`
      <div style="width:600px">
        <dss-chat-message 
              who="doctor" 
              avatarImageUrl="${l}" 
              username="Nom del patient"
              date="16/08/23 02:59h"
              message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
          </dss-chat-message>
      </div>`},n={tags:["!dev"],render:()=>a`
      <div style="width:600px">
        <dss-chat-message 
            who="doctor" 
            avatarImageUrl=${l} 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
            <div slot="attachments">
              <dss-link label=" nom-arxiu.pdf" href="#" icon="picture_as_pdf"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
          </div>
        </dss-chat-message>
      </div>`},i={tags:["!dev"],render:()=>a`
      <div style="width:600px">
        <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe" 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
      </div>`},r={tags:["!dev"],render:()=>a`
      <div style="width:600px">
        <dss-chat-message 
              who="patient" 
              avatarImageUrl=${l} 
              username="Nom del patient"
              date="16/08/23 02:59h"
              message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
          </dss-chat-message>
      </div>`},o={tags:["!dev"],render:()=>a`
      <div style="width:600px">
        <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe" 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
      </div>`},m={tags:["!dev"],render:()=>a`
      <div style="width:600px">
      <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe" 
            username="Nom del patient"
            date="22/04/24 10:21h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
        <dss-chat-message 
            who="doctor" 
            avatarImageUrl=${l} 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
            <div slot="attachments">
              <dss-link label=" nom-arxiu.pdf" href="#" icon="picture_as_pdf"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
          </div>
        </dss-chat-message>
        <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe"
            username="Nom del patient"
            date="22/04/24 10:23h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
      </div>`};var d,p,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1924-354&m=dev'
    }
  },
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod.',
    date: '16/08/2023 02:59',
    username: 'Nom del patient o professional - Rol',
    who: 'patient',
    showAvatarImage: false,
    avatarImageURL: avatarDoctor,
    avatarName: 'John',
    avatarLastname: 'Doe',
    showAttachments: false
  },
  render: args => {
    const slotAttachments = html\`
            <div slot="attachments">
              <dss-link label=" nom-arxiu.pdf" href="#" icon="picture_as_pdf"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
            </div>
        \`;
    let messageEl = html\`\`;
    args.showAvatarImage ? messageEl = html\`
        <dss-chat-message 
            who="\${args.who}"
            avatarImageUrl="\${args.avatarImageURL}"
            username="\${args.username}"
            message="\${args.text}"
            date="\${args.date}">
            \${args.showAttachments ? slotAttachments : null}
        </dss-chat-message>
      \` : messageEl = html\`
        <dss-chat-message 
            who="\${args.who}"
            avatarName="\${args.avatarName}" 
            avatarSurname="\${args.avatarLastname}" 
            username="\${args.username}"
            message="\${args.text}"
            date="\${args.date}">
            \${args.showAttachments ? slotAttachments : null}
        </dss-chat-message>
      \`;
    return html\`
      <div style="width:600px">
        \${messageEl}
      </div>
    \`;
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,v,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="width:600px">
        <dss-chat-message 
              who="doctor" 
              avatarImageUrl="\${avatarDoctor}" 
              username="Nom del patient"
              date="16/08/23 02:59h"
              message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
          </dss-chat-message>
      </div>\`;
  }
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,w,N;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="width:600px">
        <dss-chat-message 
            who="doctor" 
            avatarImageUrl=\${avatarDoctor} 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
            <div slot="attachments">
              <dss-link label=" nom-arxiu.pdf" href="#" icon="picture_as_pdf"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
          </div>
        </dss-chat-message>
      </div>\`;
  }
}`,...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var x,y,$;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="width:600px">
        <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe" 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
      </div>\`;
  }
}`,...($=(y=i.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var U,I,S;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="width:600px">
        <dss-chat-message 
              who="patient" 
              avatarImageUrl=\${avatarDoctor} 
              username="Nom del patient"
              date="16/08/23 02:59h"
              message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
          </dss-chat-message>
      </div>\`;
  }
}`,...(S=(I=r.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var k,A,L;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="width:600px">
        <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe" 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
      </div>\`;
  }
}`,...(L=(A=o.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var T,D,_;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="width:600px">
      <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe" 
            username="Nom del patient"
            date="22/04/24 10:21h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
        <dss-chat-message 
            who="doctor" 
            avatarImageUrl=\${avatarDoctor} 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
            <div slot="attachments">
              <dss-link label=" nom-arxiu.pdf" href="#" icon="picture_as_pdf"></dss-link>
              <dss-link label=" nom-arxiu.png" href="#" icon="image"></dss-link>
          </div>
        </dss-chat-message>
        <dss-chat-message 
            who="patient" 
            avatarName="John" 
            avatarSurname="Doe"
            username="Nom del patient"
            date="22/04/24 10:23h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
        </dss-chat-message>
      </div>\`;
  }
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const J=["Playground","SentByDoctor","Attachments","SentByPatient","ImageAvatar","NameAvatar","FullChat"],E=Object.freeze(Object.defineProperty({__proto__:null,Attachments:n,FullChat:m,ImageAvatar:r,NameAvatar:o,Playground:s,SentByDoctor:t,SentByPatient:i,__namedExportsOrder:J,default:V},Symbol.toStringTag,{value:"Module"}));export{n as A,E as C,m as F,r as I,s as P,i as S,t as a};
