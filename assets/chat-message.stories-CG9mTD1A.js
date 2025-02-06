import{x as a}from"./lit-html-B2eaWknC.js";import{a as l}from"./avatar-doctor-BBv5l1RE.js";const V={title:"Components/Chat Message",argTypes:{text:{name:"Missatge",control:{type:"text"}},date:{name:"Data",control:{type:"text"}},username:{name:"Nom",control:{type:"text"}},who:{name:"Identitat",control:{type:"radio"},options:["patient","doctor"]},showAttachments:{name:"Mostrar fitxers adjunts",control:{type:"boolean"}},showAvatarImage:{name:"Mostrar imatge de avatar",control:{type:"boolean"}},avatarImageURL:{name:"Imatge de avatar URL",control:{type:"text"},if:{arg:"showAvatarImage",truthy:!0}},avatarName:{name:"Avatar: Imatge URL",control:{type:"text"},if:{arg:"showAvatarImage",truthy:!1}},avatarLastname:{name:"Avatar: Cognom",control:{type:"text"},if:{arg:"showAvatarImage",truthy:!1}}},parameters:{layout:"centered"}},t={args:{text:"Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod.",date:"16/08/2023 02:59",username:"Nom del patient o professional - Rol",who:"patient",showAvatarImage:!1,avatarImageURL:l,avatarName:"John",avatarLastname:"Doe",showAttachments:!1},render:e=>{const c=a`
            <div slot="attachments">
              <dss-button-link label=" nom-arxiu.pdf" linkhref="#" icon="picture_as_pdf"></dss-button-link>
              <dss-button-link label=" nom-arxiu.png" linkhref="#" icon="image"></dss-button-link>
              <dss-button-link label=" nom-arxiu.png" linkhref="#" icon="image"></dss-button-link>
            </div>
        `;let m=a``;return e.showAvatarImage?m=a`
        <dss-chat-message 
            who="${e.who}"
            avatarImageUrl="${e.avatarImageURL}"
            username="${e.username}"
            message="${e.text}"
            date="${e.date}">
            ${e.showAttachments?c:null}
        </dss-chat-message>
      `:m=a`
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
        ${m}
      </div>
    `}},s={tags:["!dev"],render:()=>a`
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
              <dss-button-link label=" nom-arxiu.pdf" linkhref="#" icon="picture_as_pdf"></dss-button-link>
              <dss-button-link label=" nom-arxiu.png" linkhref="#" icon="image"></dss-button-link>
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
      </div>`},u={tags:["!dev"],render:()=>a`
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
              <dss-button-link label=" nom-arxiu.pdf" linkhref="#" icon="picture_as_pdf"></dss-button-link>
              <dss-button-link label=" nom-arxiu.png" linkhref="#" icon="image"></dss-button-link>
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
      </div>`};var d,h,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
              <dss-button-link label=" nom-arxiu.pdf" linkhref="#" icon="picture_as_pdf"></dss-button-link>
              <dss-button-link label=" nom-arxiu.png" linkhref="#" icon="image"></dss-button-link>
              <dss-button-link label=" nom-arxiu.png" linkhref="#" icon="image"></dss-button-link>
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
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,v,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,w,N;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
              <dss-button-link label=" nom-arxiu.pdf" linkhref="#" icon="picture_as_pdf"></dss-button-link>
              <dss-button-link label=" nom-arxiu.png" linkhref="#" icon="image"></dss-button-link>
          </div>
        </dss-chat-message>
      </div>\`;
  }
}`,...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var x,k,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(k=i.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var $,U,L;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(U=r.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var I,A,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(A=o.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var T,D,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
              <dss-button-link label=" nom-arxiu.pdf" linkhref="#" icon="picture_as_pdf"></dss-button-link>
              <dss-button-link label=" nom-arxiu.png" linkhref="#" icon="image"></dss-button-link>
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
}`,...(_=(D=u.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const J=["Playground","SentByDoctor","Attachments","SentByPatient","ImageAvatar","NameAvatar","FullChat"],M=Object.freeze(Object.defineProperty({__proto__:null,Attachments:n,FullChat:u,ImageAvatar:r,NameAvatar:o,Playground:t,SentByDoctor:s,SentByPatient:i,__namedExportsOrder:J,default:V},Symbol.toStringTag,{value:"Module"}));export{n as A,M as C,u as F,r as I,t as P,i as S,s as a};
