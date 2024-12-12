import{x as n}from"./lit-html-B2eaWknC.js";const O={title:"Components/List Menu",argTypes:{showHeader:{name:"Mostrar capçalera",control:{type:"boolean"}},showTitle:{name:"Mostrar titol",control:{type:"boolean"},if:{arg:"showHeader"}},title:{name:"Titol",if:{arg:"showTitle"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"},if:{arg:"showHeader"}},description:{name:"Descripció",if:{arg:"showDescription"}},label:{name:"Text"},selected:{name:"Seleccionar",control:{type:"boolean"}},disabled:{name:"Deshabilitar",control:{type:"boolean"}},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},iconType:{name:"Tipús icona",control:{type:"select"},options:["dss-icon","dss-icon dss-icon--fill"],if:{arg:"showIcon"}},icon:{name:"Icona",if:{arg:"showIcon"}},showActionIcon:{name:"Mostrar icona acció",control:{type:"boolean"}},actionIcon:{name:"Icona acció",if:{arg:"showActionIcon"}}},parameters:{layout:"centered"}},i={args:{showHeader:!0,showTitle:!0,title:"Title",showDescription:!0,description:"Lorem ipsum dolor sit amet.",label:"Item",selected:!1,disabled:!1,showIcon:!0,iconType:"dss-icon",icon:"add_box",showActionIcon:!1,actionIcon:"chevron_right"},render:s=>{let o=s.selected?"dss-list-menu-item--selected ":"";return o+=s.disabled?"dss-list-menu-item--disabled":"",n`
        <div style="width: 160px;">
        <div class="dss-list-menu">
          ${s.showHeader?n`
              <div class="dss-list-menu-header">
                ${s.showTitle?n`
                    <h4 class="dss-list-menu-header-title">
                      ${s.showIcon?n` <span class="dss-decorative-icon dss-decorative-icon--md">
                        <i class="dss-icon">${s.icon}</i>
                      </span>`:null}
                      ${s.title}
                    </h4>
                  `:null}
                ${s.showDescription?n`
                    <p class="dss-list-menu-header-description">
                      ${s.description}
                    </p>
                  `:null}
              </div>
            `:null}
          
          <ul class="dss-list-menu-nav">
            <li class="dss-list-menu-item ${o}" tabindex="${s.disabled?-1:0}">
              <div class="dss-list-menu-item__content">
                ${s.showIcon?n`<i class="${s.iconType} dss-icon--md">${s.icon}</i>`:null}
                <span class="dss-list-menu-item__content-text">
                  ${s.label}
                </span>
              </div>
              ${s.showActionIcon?n`
                  <div class="dss-list-menu-item__action">
                    <i class="dss-icon dss-icon--md">${s.actionIcon}</i>
                  </div>
                  `:null}
            </li>
            <li class="dss-list-menu-item" tabindex="0">
              <div class="dss-list-menu-item__content">
                ${s.showIcon?n`<i class="${s.iconType} dss-icon--md">${s.icon}</i>`:null}
                <span class="dss-list-menu-item__content-text">
                  ${s.label}
                </span>
              </div>
            </li>
            <li class="dss-list-menu-item" tabindex="0">
              <div class="dss-list-menu-item__content">
                ${s.showIcon?n`<i class="${s.iconType} dss-icon--md">${s.icon}</i>`:null}
                <span class="dss-list-menu-item__content-text">
                  ${s.label}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      `}},e={tags:["!dev"],render:()=>n`
      <div class="list-menu-wrapper">
  <div class="dss-list-menu">
    <ul class="dss-list-menu-nav">
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>
    `},t={tags:["!dev"],render:()=>n`
      <div class="list-menu-wrapper">
  <div class="dss-list-menu">
    <ul class="dss-list-menu-nav">
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>
    `},d={tags:["!dev"],render:()=>n`
      <div class="list-menu-wrapper">
  <div class="dss-list-menu">
    <ul class="dss-list-menu-nav">
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
         <div class="dss-list-menu-item__action">
            <i class="dss-icon dss-icon--md">chevron_right</i>
          </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>
    `},l={tags:["!dev"],render:()=>n`
     <div class="list-menu-wrapper">
  <div class="dss-list-menu">
    <div class="dss-list-menu-header">
          <h4 class="dss-list-menu-header-title">
            <span class="dss-decorative-icon dss-decorative-icon--md">
              <i class="dss-icon">add_box</i>
            </span>
            Title
          </h4>
          <p class="dss-list-menu-header-description">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
    <ul class="dss-list-menu-nav">
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
    </ul>
  </div>
</div> 
    `},a={tags:["!dev"],render:()=>n`
      <div class="list-menu-wrapper">
  <div class="dss-list-menu">
    <ul class="dss-list-menu-nav">
      <li class="dss-list-menu-item dss-list-menu-item--selected" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>
    `},c={tags:["!dev"],render:()=>n`
      <div class="list-menu-wrapper">
  <div class="dss-list-menu">
    <ul class="dss-list-menu-nav">
      <li class="dss-list-menu-item dss-list-menu-item--disabled">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>
    `},m={tags:["!dev"],render:()=>n`
      <div class="list-menu-wrapper">
        <div class="dss-list-menu">
          <ul class="dss-list-menu-nav">
            <li class="dss-list-menu-item" tabindex="0">
              <div class="dss-list-menu-item__content">
                <i class="dss-icon dss-icon--md">add_box</i>
                <span class="dss-list-menu-item__content-text">
                  Item
                </span>
              </div>
              <div class="dss-list-menu-item__action">
                  <dss-notification-badge state="error" dot></dss-notification-badge>  
                  <i class="dss-icon dss-icon--md">chevron_right</i>
                </div>
            </li>
            <li class="dss-list-menu-item" tabindex="0">
              <div class="dss-list-menu-item__content">
                <i class="dss-icon dss-icon--md">add_box</i>
                <span class="dss-list-menu-item__content-text">
                  Item
                </span>
              </div>
            </li>
            <li class="dss-list-menu-item" tabindex="0">
              <div class="dss-list-menu-item__content">
                <i class="dss-icon dss-icon--md">add_box</i>
                <span class="dss-list-menu-item__content-text">
                  Item
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `};var u,r,_;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    showHeader: true,
    showTitle: true,
    title: 'Title',
    showDescription: true,
    description: 'Lorem ipsum dolor sit amet.',
    label: 'Item',
    selected: false,
    disabled: false,
    showIcon: true,
    iconType: 'dss-icon',
    icon: 'add_box',
    showActionIcon: false,
    actionIcon: 'chevron_right'
  },
  render: (args: any) => {
    let itemClass = args.selected ? 'dss-list-menu-item--selected ' : '';
    itemClass += args.disabled ? 'dss-list-menu-item--disabled' : '';
    return html\`
        <div style="width: 160px;">
        <div class="dss-list-menu">
          \${args.showHeader ? html\`
              <div class="dss-list-menu-header">
                \${args.showTitle ? html\`
                    <h4 class="dss-list-menu-header-title">
                      \${args.showIcon ? html\` <span class="dss-decorative-icon dss-decorative-icon--md">
                        <i class="dss-icon">\${args.icon}</i>
                      </span>\` : null}
                      \${args.title}
                    </h4>
                  \` : null}
                \${args.showDescription ? html\`
                    <p class="dss-list-menu-header-description">
                      \${args.description}
                    </p>
                  \` : null}
              </div>
            \` : null}
          
          <ul class="dss-list-menu-nav">
            <li class="dss-list-menu-item \${itemClass}" tabindex="\${args.disabled ? -1 : 0}">
              <div class="dss-list-menu-item__content">
                \${args.showIcon ? html\`<i class="\${args.iconType} dss-icon--md">\${args.icon}</i>\` : null}
                <span class="dss-list-menu-item__content-text">
                  \${args.label}
                </span>
              </div>
              \${args.showActionIcon ? html\`
                  <div class="dss-list-menu-item__action">
                    <i class="dss-icon dss-icon--md">\${args.actionIcon}</i>
                  </div>
                  \` : null}
            </li>
            <li class="dss-list-menu-item" tabindex="0">
              <div class="dss-list-menu-item__content">
                \${args.showIcon ? html\`<i class="\${args.iconType} dss-icon--md">\${args.icon}</i>\` : null}
                <span class="dss-list-menu-item__content-text">
                  \${args.label}
                </span>
              </div>
            </li>
            <li class="dss-list-menu-item" tabindex="0">
              <div class="dss-list-menu-item__content">
                \${args.showIcon ? html\`<i class="\${args.iconType} dss-icon--md">\${args.icon}</i>\` : null}
                <span class="dss-list-menu-item__content-text">
                  \${args.label}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      \`;
  }
}`,...(_=(r=i.parameters)==null?void 0:r.docs)==null?void 0:_.source}}};var p,v,x;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="list-menu-wrapper">
  <div class="dss-list-menu">
    <ul class="dss-list-menu-nav">
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>
    \`;
  }
}`,...(x=(v=e.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,h,I;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="list-menu-wrapper">
  <div class="dss-list-menu">
    <ul class="dss-list-menu-nav">
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>
    \`;
  }
}`,...(I=(h=t.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var w,g,$;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="list-menu-wrapper">
  <div class="dss-list-menu">
    <ul class="dss-list-menu-nav">
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
         <div class="dss-list-menu-item__action">
            <i class="dss-icon dss-icon--md">chevron_right</i>
          </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>
    \`;
  }
}`,...($=(g=d.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var T,y,f;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="list-menu-wrapper">
  <div class="dss-list-menu">
    <div class="dss-list-menu-header">
          <h4 class="dss-list-menu-header-title">
            <span class="dss-decorative-icon dss-decorative-icon--md">
              <i class="dss-icon">add_box</i>
            </span>
            Title
          </h4>
          <p class="dss-list-menu-header-description">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
    <ul class="dss-list-menu-nav">
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
    </ul>
  </div>
</div> 
    \`;
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,D,A;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="list-menu-wrapper">
  <div class="dss-list-menu">
    <ul class="dss-list-menu-nav">
      <li class="dss-list-menu-item dss-list-menu-item--selected" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>
    \`;
  }
}`,...(A=(D=a.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var M,H,C;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="list-menu-wrapper">
  <div class="dss-list-menu">
    <ul class="dss-list-menu-nav">
      <li class="dss-list-menu-item dss-list-menu-item--disabled">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
      <li class="dss-list-menu-item" tabindex="0">
        <div class="dss-list-menu-item__content">
          <i class="dss-icon dss-icon--md">add_box</i>
          <span class="dss-list-menu-item__content-text">
            Item
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>
    \`;
  }
}`,...(C=(H=c.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var L,N,P;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="list-menu-wrapper">
        <div class="dss-list-menu">
          <ul class="dss-list-menu-nav">
            <li class="dss-list-menu-item" tabindex="0">
              <div class="dss-list-menu-item__content">
                <i class="dss-icon dss-icon--md">add_box</i>
                <span class="dss-list-menu-item__content-text">
                  Item
                </span>
              </div>
              <div class="dss-list-menu-item__action">
                  <dss-notification-badge state="error" dot></dss-notification-badge>  
                  <i class="dss-icon dss-icon--md">chevron_right</i>
                </div>
            </li>
            <li class="dss-list-menu-item" tabindex="0">
              <div class="dss-list-menu-item__content">
                <i class="dss-icon dss-icon--md">add_box</i>
                <span class="dss-list-menu-item__content-text">
                  Item
                </span>
              </div>
            </li>
            <li class="dss-list-menu-item" tabindex="0">
              <div class="dss-list-menu-item__content">
                <i class="dss-icon dss-icon--md">add_box</i>
                <span class="dss-list-menu-item__content-text">
                  Item
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    \`;
  }
}`,...(P=(N=m.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const j=["Playground","NoIcons","Icons","Action","TitleDescription","Selected","Disabled","Notification"],E=Object.freeze(Object.defineProperty({__proto__:null,Action:d,Disabled:c,Icons:t,NoIcons:e,Notification:m,Playground:i,Selected:a,TitleDescription:l,__namedExportsOrder:j,default:O},Symbol.toStringTag,{value:"Module"}));export{d as A,c as D,t as I,e as N,i as P,E as S,l as T,m as a,a as b};
