import{x as s}from"./lit-html-paDGiEfB.js";const W={title:"Components/Toast",argTypes:{status:{name:"Estat",control:{type:"select"},options:["error","warning","success","info"]},message:{name:"Missatge",control:{type:"text"}},withButton:{name:"Amb botó",control:{type:"boolean"},if:{arg:"withIconButton",eq:!1}},withIconButton:{name:"Amb Icon Button",control:{type:"boolean"},if:{arg:"withButton",eq:!1}},showToast:{name:"Mostrar",control:{type:"boolean"}}}},n={render:t=>{let a="",u="dss-button dss-button--sm dss-button--alternative-light";switch(t.status){case"error":a="error";break;case"warning":a="warning_amber",u="dss-button dss-button--sm dss-button--alternative-dark";break;case"success":a="check_circle";break;case"info":a="info";break}return s`
      <div class="exemple-container-toast-canvas">
        <div
          class="dss-toast dss-toast--${t.status} ${t.showToast?"dss-toast--open":""}"
        >
          <div class="dss-toast__content">
            <i class="dss-toast__icon material-symbols-rounded">${a}</i>
            <span class="dss-toast__text">${t.message}</span>
          </div>
          ${t.withButton?s`<button type="button" class="${u}">Button</button>`:""}
          ${t.withIconButton?s`<button type="button" class="dss-toast__icon-button">
                <span class="material-symbols-rounded">close</span>
              </button>`:""}
        </div>
      </div>
    `},name:"Exemple",args:{status:"error",message:"Your message, short and clear.",withButton:!1,withIconButton:!1,showToast:!0},parameters:{layout:"centered"}},o={tags:["!dev"],render:()=>s`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--error dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">error</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--warning dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">warning\_amber</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--success dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">check\_circle</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--info dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">info</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>
    `},e={tags:["!dev"],render:()=>s`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--error dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">error</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--warning dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">warning\_amber</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--success dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">check\_circle</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--info dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">info</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>
    `},d={tags:["!dev"],render:()=>s`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--error dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">error</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-light">
        Button
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--warning dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">warning\_amber</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-dark">
        Button
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--success dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">check\_circle</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-light">
        Button
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--info dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">info</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-light">
        Button
      </button>
    </div>
  </div>
    `},i={tags:["!dev"],render:()=>s`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--error dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">error</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--error dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">error</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--error dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">error</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-light">
        Button
      </button>
    </div>
  </div>
    `},c={tags:["!dev"],render:()=>s`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--warning dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">warning\_amber</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--warning dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">warning\_amber</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--warning dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">warning\_amber</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-dark">
        Button
      </button>
    </div>
  </div>
    `},r={tags:["!dev"],render:()=>s`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--success dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">check\_circle</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--success dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">check\_circle</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--success dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">check\_circle</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-light">
        Button
      </button>
    </div>
  </div>
    `},l={tags:["!dev"],render:()=>s`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--info dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">info</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--info dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">info</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--info dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">info</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-light">
        Button
      </button>
    </div>
  </div>
    `};var _,v,m;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: any) => {
    let icon = '';
    let button = 'dss-button dss-button--sm dss-button--alternative-light';
    switch (args.status) {
      case 'error':
        icon = 'error';
        break;
      case 'warning':
        icon = 'warning_amber';
        button = 'dss-button dss-button--sm dss-button--alternative-dark';
        break;
      case 'success':
        icon = 'check_circle';
        break;
      case 'info':
        icon = 'info';
        break;
    }
    return html\`
      <div class="exemple-container-toast-canvas">
        <div
          class="dss-toast dss-toast--\${args.status} \${args.showToast ? 'dss-toast--open' : ''}"
        >
          <div class="dss-toast__content">
            <i class="dss-toast__icon material-symbols-rounded">\${icon}</i>
            <span class="dss-toast__text">\${args.message}</span>
          </div>
          \${args.withButton ? html\`<button type="button" class="\${button}">Button</button>\` : ''}
          \${args.withIconButton ? html\`<button type="button" class="dss-toast__icon-button">
                <span class="material-symbols-rounded">close</span>
              </button>\` : ''}
        </div>
      </div>
    \`;
  },
  name: 'Exemple',
  args: {
    status: 'error',
    message: 'Your message, short and clear.',
    withButton: false,
    withIconButton: false,
    showToast: true
  },
  parameters: {
    layout: 'centered'
  }
}`,...(m=(v=n.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var p,b,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--error dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">error</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--warning dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">warning\\_amber</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--success dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">check\\_circle</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--info dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">info</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>
    \`;
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,h,x;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--error dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">error</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--warning dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">warning\\_amber</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--success dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">check\\_circle</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--info dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">info</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>
    \`;
  }
}`,...(x=(h=e.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var Y,w,f;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--error dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">error</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-light">
        Button
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--warning dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">warning\\_amber</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-dark">
        Button
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--success dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">check\\_circle</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-light">
        Button
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--info dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">info</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-light">
        Button
      </button>
    </div>
  </div>
    \`;
  }
}`,...(f=(w=d.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var B,k,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--error dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">error</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--error dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">error</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--error dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">error</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-light">
        Button
      </button>
    </div>
  </div>
    \`;
  }
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var $,I,T;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--warning dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">warning\\_amber</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--warning dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">warning\\_amber</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--warning dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">warning\\_amber</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-dark">
        Button
      </button>
    </div>
  </div>
    \`;
  }
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var E,A,P;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--success dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">check\\_circle</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--success dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">check\\_circle</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--success dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">check\\_circle</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-light">
        Button
      </button>
    </div>
  </div>
    \`;
  }
}`,...(P=(A=r.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var M,N,O;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    <div class="exemple-container">
    <div class="dss-toast dss-toast--info dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">info</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--info dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">info</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-toast__icon-button">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
  </div>

  <div class="exemple-container">
    <div class="dss-toast dss-toast--info dss-toast--open">
      <div class="dss-toast__content">
        <i class="dss-toast__icon material-symbols-rounded">info</i>
        <span class="dss-toast__text">Your message, short and clear.</span>
      </div>

      <button type="button" class="dss-button dss-button--sm dss-button--alternative-light">
        Button
      </button>
    </div>
  </div>
    \`;
  }
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const j=["Playground","NoAction","IconButton","Button","ErrorState","Warning","Success","Info"],z=Object.freeze(Object.defineProperty({__proto__:null,Button:d,ErrorState:i,IconButton:e,Info:l,NoAction:o,Playground:n,Success:r,Warning:c,__namedExportsOrder:j,default:W},Symbol.toStringTag,{value:"Module"}));export{d as B,i as E,e as I,o as N,n as P,z as S,c as W,r as a,l as b};
