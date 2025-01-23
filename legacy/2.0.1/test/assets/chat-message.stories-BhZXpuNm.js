import{x as a}from"./lit-html-B2eaWknC.js";import{a as u}from"./avatar-doctor-BBv5l1RE.js";const V={title:"Components/Chat Message",argTypes:{text:{name:"Missatge",control:{type:"text"}},date:{name:"Data",control:{type:"text"}},username:{name:"Nom",control:{type:"text"}},who:{name:"Identitat",control:{type:"radio"},options:["patient","doctor"]},showAttachments:{name:"Mostrar fitxers adjunts",control:{type:"boolean"}},showAvatarImage:{name:"Mostrar imatge de avatar",control:{type:"boolean"}},avatarImageURL:{name:"Imatge de avatar URL",control:{type:"text"},if:{arg:"showAvatarImage",truthy:!0}},avatarName:{name:"Avatar: Imatge URL",control:{type:"text"},if:{arg:"showAvatarImage",truthy:!1}},avatarLastname:{name:"Avatar: Cognom",control:{type:"text"},if:{arg:"showAvatarImage",truthy:!1}}},parameters:{layout:"centered"}},e={args:{text:"Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod.",date:"16/08/2023 02:59",username:"Nom del patient o professional - Rol",who:"patient",showAvatarImage:!1,avatarImageURL:u,avatarName:"John",avatarLastname:"Doe",showAttachments:!1},render:s=>{const m=a`
            <div slot="attachments">
                <a href="#" class="dss-button-link ">
                <i class="dss-icon dss-icon--sm dss-button-link-icon">picture_as_pdf</i>
                <span class="dss-button-link-text">
                    nom-arxiu.pdf
                </span>
                </a>
                <a href="#" class="dss-button-link ">
                <i class="dss-icon dss-icon--sm dss-button-link-icon">image</i>
                <span class="dss-button-link-text">
                    nom-arxiu.png
                </span>
                </a>
                <a href="#" class="dss-button-link ">
                <i class="dss-icon dss-icon--sm dss-button-link-icon">image</i>
                <span class="dss-button-link-text">
                    nom-arxiu.png
                </span>
                </a>
            </div>
        `;let l=a``;return s.showAvatarImage?l=a`
        <dss-chat-message 
            who="${s.who}"
            avatarImageUrl="${s.avatarImageURL}"
            username="${s.username}"
            message="${s.text}"
            date="${s.date}">
            ${s.showAttachments?m:null}
        </dss-chat-message>
      `:l=a`
        <dss-chat-message 
            who="${s.who}"
            avatarName="${s.avatarName}" 
            avatarSurname="${s.avatarLastname}" 
            username="${s.username}"
            message="${s.text}"
            date="${s.date}">
            ${s.showAttachments?m:null}
        </dss-chat-message>
      `,a`
      <div style="width:600px">
        ${l}
      </div>
    `}},t={tags:["!dev"],render:()=>a`
      <div style="width:600px">
        <dss-chat-message 
              who="doctor" 
              avatarImageUrl="${u}" 
              username="Nom del patient"
              date="16/08/23 02:59h"
              message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
          </dss-chat-message>
      </div>`},n={tags:["!dev"],render:()=>a`
      <div style="width:600px">
        <dss-chat-message 
            who="doctor" 
            avatarImageUrl=${u} 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
            <div slot="attachments">
            <a href="#" class="dss-button-link ">
              <i class="dss-icon dss-icon--sm dss-button-link-icon">picture_as_pdf</i>
              <span class="dss-button-link-text">
                nom-arxiu.pdf
              </span>
            </a>
            <a href="#" class="dss-button-link ">
              <i class="dss-icon dss-icon--sm dss-button-link-icon">image</i>
              <span class="dss-button-link-text">
                nom-arxiu.png
              </span>
            </a>
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
              avatarImageUrl=${u} 
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
      </div>`},c={tags:["!dev"],render:()=>a`
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
            avatarImageUrl=${u} 
            username="Nom del patient"
            date="16/08/23 02:59h"
            message="Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra. Ullamcorper nascetur nisl facilisi lacus facilisi senectus laoreet euismod. Non vestibulum nibh in ipsum. Volutpat sagittis ut faucibus sit lectus. ">
            <div slot="attachments">
            <a href="#" class="dss-button-link ">
              <i class="dss-icon dss-icon--sm dss-button-link-icon">picture_as_pdf</i>
              <span class="dss-button-link-text">
                nom-arxiu.pdf
              </span>
            </a>
            <a href="#" class="dss-button-link ">
              <i class="dss-icon dss-icon--sm dss-button-link-icon">image</i>
              <span class="dss-button-link-text">
                nom-arxiu.png
              </span>
            </a>
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
      </div>`};var d,p,h;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
                <a href="#" class="dss-button-link ">
                <i class="dss-icon dss-icon--sm dss-button-link-icon">picture_as_pdf</i>
                <span class="dss-button-link-text">
                    nom-arxiu.pdf
                </span>
                </a>
                <a href="#" class="dss-button-link ">
                <i class="dss-icon dss-icon--sm dss-button-link-icon">image</i>
                <span class="dss-button-link-text">
                    nom-arxiu.png
                </span>
                </a>
                <a href="#" class="dss-button-link ">
                <i class="dss-icon dss-icon--sm dss-button-link-icon">image</i>
                <span class="dss-button-link-text">
                    nom-arxiu.png
                </span>
                </a>
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
}`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,v,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,x,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
            <a href="#" class="dss-button-link ">
              <i class="dss-icon dss-icon--sm dss-button-link-icon">picture_as_pdf</i>
              <span class="dss-button-link-text">
                nom-arxiu.pdf
              </span>
            </a>
            <a href="#" class="dss-button-link ">
              <i class="dss-icon dss-icon--sm dss-button-link-icon">image</i>
              <span class="dss-button-link-text">
                nom-arxiu.png
              </span>
            </a>
          </div>
        </dss-chat-message>
      </div>\`;
  }
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var N,k,y;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(S=(A=o.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var T,D,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
            <a href="#" class="dss-button-link ">
              <i class="dss-icon dss-icon--sm dss-button-link-icon">picture_as_pdf</i>
              <span class="dss-button-link-text">
                nom-arxiu.pdf
              </span>
            </a>
            <a href="#" class="dss-button-link ">
              <i class="dss-icon dss-icon--sm dss-button-link-icon">image</i>
              <span class="dss-button-link-text">
                nom-arxiu.png
              </span>
            </a>
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
}`,...(_=(D=c.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const J=["Playground","SentByDoctor","Attachments","SentByPatient","ImageAvatar","NameAvatar","FullChat"],M=Object.freeze(Object.defineProperty({__proto__:null,Attachments:n,FullChat:c,ImageAvatar:r,NameAvatar:o,Playground:e,SentByDoctor:t,SentByPatient:i,__namedExportsOrder:J,default:V},Symbol.toStringTag,{value:"Module"}));export{n as A,M as C,c as F,r as I,e as P,i as S,t as a};
