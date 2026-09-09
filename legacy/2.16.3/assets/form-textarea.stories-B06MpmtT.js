import{E as u,x as a}from"./lit-html-D6cejpwM.js";import{w as r}from"./storybook-decorators-DSS85Rnr.js";const s=`
  .wrapper { display: flex; gap: 24px; }
  dss-textarea { width: 200px; }
`,ee={title:"Components/Form/Textarea",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},label:{name:"Label"},showIcon:{name:"Mostrar icona",control:{type:"boolean"}},icon:{name:"Icona",control:{type:"text"},if:{arg:"showIcon"}},showError:{name:"Mostrar error",control:{type:"boolean"}},required:{name:"Camp requerit",control:{type:"boolean"}},showDescription:{name:"Mostrar descripció",control:{type:"boolean"}},description:{name:"Descripció",if:{arg:"showDescription"}},showMaxLength:{name:"Mostrar màxim de caràcters",control:{type:"boolean"}},maxLength:{name:"Màxim de caràcters",control:{type:"number"},if:{arg:"showMaxLength"}},rows:{name:"Files visibles",control:{type:"number"}},autoHeight:{name:"Alçada automàtica",control:{type:"boolean"}},disabled:{name:"Deshabilitat",control:{type:"boolean"}},readonly:{name:"Només lectura",control:{type:"boolean"}}},parameters:{layout:"centered"}},t={render:e=>a`
            <dss-form-textarea
                size=${e.size}
                label=${e.label}
                rows=${e.rows}
                ?required=${e.required}
                ?disabled=${e.disabled}
                ?readonly=${e.readonly}
                ?invalid=${e.showError}
                ?autoHeight=${e.autoHeight}
                maxlength=${e.showMaxLength?e.maxLength:u}
                icon=${e.showIcon?e.icon:u}
                helpText=${e.showDescription?e.description:u}
             ></dss-form-textarea> 
    `,args:{size:"lg",label:"Label",required:!1,disabled:!1,readonly:!1,showDescription:!1,description:"Help Text",showMaxLength:!1,maxLength:60,showIcon:!1,icon:"add_box",showError:!1,rows:1,autoHeight:!1}},o={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-form-textarea label="Label SM" size="sm"></dss-form-textarea>
        <dss-form-textarea label="Label MD" size="md"></dss-form-textarea>
        <dss-form-textarea label="Label LG" size="lg"></dss-form-textarea>
      </div>
    `,decorators:[r(s,"textarea-size-style")]},d={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-form-textarea label="Label SM" size="sm" icon="add_box"></dss-form-textarea>
        <dss-form-textarea label="Label MD" size="md" icon="add_box"></dss-form-textarea>
        <dss-form-textarea label="Label LG" size="lg" icon="add_box"></dss-form-textarea>
      </div>
    `,decorators:[r(s,"textarea-icon-style")]},l={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-form-textarea label="Label SM" size="sm" icon="add_box" disabled></dss-form-textarea>
        <dss-form-textarea label="Label MD" size="md" icon="add_box" disabled></dss-form-textarea>
        <dss-form-textarea label="Label LG" size="lg" icon="add_box" disabled></dss-form-textarea>
      </div>
    `,decorators:[r(s,"textarea-disabled-style")]},i={tags:["!dev"],render:()=>a`
     <div class="wrapper">
        <dss-form-textarea label="Label SM" size="sm" icon="add_box" readonly></dss-form-textarea>
        <dss-form-textarea label="Label MD" size="md" icon="add_box" readonly></dss-form-textarea>
        <dss-form-textarea label="Label LG" size="lg" icon="add_box" readonly></dss-form-textarea>
      </div>
    `,decorators:[r(s,"textarea-readonly-style")]},n={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-form-textarea label="Label SM" size="sm" icon="add_box" required></dss-form-textarea>
        <dss-form-textarea label="Label MD" size="md" icon="add_box" required></dss-form-textarea>
        <dss-form-textarea label="Label LG" size="lg" icon="add_box" required></dss-form-textarea>
      </div>
    `,decorators:[r(s,"textarea-required-style")]},c={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-form-textarea label="Label SM" size="sm" icon="add_box" invalid></dss-form-textarea>
        <dss-form-textarea label="Label MD" size="md" icon="add_box" invalid></dss-form-textarea>
        <dss-form-textarea label="Label LG" size="lg" icon="add_box" invalid></dss-form-textarea>
      </div>
    `,decorators:[r(s,"textarea-invalid-style")]},m={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-form-textarea label="Label" icon="add_box" helpText="Help Text"></dss-form-textarea>
      </div>
    `,decorators:[r(s,"textarea-description-style")]},x={tags:["!dev"],render:()=>a`
       <div class="wrapper">
        <dss-form-textarea label="Label" icon="add_box" placeholder="Placeholder"></dss-form-textarea>
      </div>
    `,decorators:[r(s,"textarea-placeholder-style")]},b={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-form-textarea label="Label" icon="add_box" helpText="Help Text" maxlength="60"></dss-form-textarea>
      </div>
    `,decorators:[r(s,"textarea-counter-style")]},p={tags:["!dev"],render:()=>a`
      <div class="wrapper">
        <dss-form-textarea label="1 fila"></dss-form-textarea>
        <dss-form-textarea label="4 files" rows="4"></dss-form-textarea>
        <dss-form-textarea label="Auto" autoHeight></dss-form-textarea>
      </div>
    `,decorators:[r(s,"textarea-counter-style")]},f={tags:["!dev"],render:()=>a`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const g=document.querySelector("#manual-focus-demo");g&&g.focus()}}></dss-button>
        <dss-form-textarea
                    id="manual-focus-demo"
                    label="1 fila"
                ></dss-form-textarea>
            </div>
        `,decorators:[r(s,"textarea-focus-style")]};var h,y,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            <dss-form-textarea
                size=\${args.size}
                label=\${args.label}
                rows=\${args.rows}
                ?required=\${args.required}
                ?disabled=\${args.disabled}
                ?readonly=\${args.readonly}
                ?invalid=\${args.showError}
                ?autoHeight=\${args.autoHeight}
                maxlength=\${args.showMaxLength ? args.maxLength : nothing}
                icon=\${args.showIcon ? args.icon : nothing}
                helpText=\${args.showDescription ? args.description : nothing}
             ></dss-form-textarea> 
    \`;
  },
  args: {
    size: 'lg',
    label: 'Label',
    required: false,
    disabled: false,
    readonly: false,
    showDescription: false,
    description: 'Help Text',
    showMaxLength: false,
    maxLength: 60,
    showIcon: false,
    icon: 'add_box',
    showError: false,
    rows: 1,
    autoHeight: false
  }
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var v,L,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-textarea label="Label SM" size="sm"></dss-form-textarea>
        <dss-form-textarea label="Label MD" size="md"></dss-form-textarea>
        <dss-form-textarea label="Label LG" size="lg"></dss-form-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-size-style')]
}`,...(S=(L=o.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var z,_,M;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-textarea label="Label SM" size="sm" icon="add_box"></dss-form-textarea>
        <dss-form-textarea label="Label MD" size="md" icon="add_box"></dss-form-textarea>
        <dss-form-textarea label="Label LG" size="lg" icon="add_box"></dss-form-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-icon-style')]
}`,...(M=(_=d.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var D,$,q;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-textarea label="Label SM" size="sm" icon="add_box" disabled></dss-form-textarea>
        <dss-form-textarea label="Label MD" size="md" icon="add_box" disabled></dss-form-textarea>
        <dss-form-textarea label="Label LG" size="lg" icon="add_box" disabled></dss-form-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-disabled-style')]
}`,...(q=($=l.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var H,T,G;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="wrapper">
        <dss-form-textarea label="Label SM" size="sm" icon="add_box" readonly></dss-form-textarea>
        <dss-form-textarea label="Label MD" size="md" icon="add_box" readonly></dss-form-textarea>
        <dss-form-textarea label="Label LG" size="lg" icon="add_box" readonly></dss-form-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-readonly-style')]
}`,...(G=(T=i.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var I,F,E;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-textarea label="Label SM" size="sm" icon="add_box" required></dss-form-textarea>
        <dss-form-textarea label="Label MD" size="md" icon="add_box" required></dss-form-textarea>
        <dss-form-textarea label="Label LG" size="lg" icon="add_box" required></dss-form-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-required-style')]
}`,...(E=(F=n.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var P,C,O;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-textarea label="Label SM" size="sm" icon="add_box" invalid></dss-form-textarea>
        <dss-form-textarea label="Label MD" size="md" icon="add_box" invalid></dss-form-textarea>
        <dss-form-textarea label="Label LG" size="lg" icon="add_box" invalid></dss-form-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-invalid-style')]
}`,...(O=(C=c.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var R,A,j;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-textarea label="Label" icon="add_box" helpText="Help Text"></dss-form-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-description-style')]
}`,...(j=(A=m.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var k,N,B;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
       <div class="wrapper">
        <dss-form-textarea label="Label" icon="add_box" placeholder="Placeholder"></dss-form-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-placeholder-style')]
}`,...(B=(N=x.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-textarea label="Label" icon="add_box" helpText="Help Text" maxlength="60"></dss-form-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-counter-style')]
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,W;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-form-textarea label="1 fila"></dss-form-textarea>
        <dss-form-textarea label="4 files" rows="4"></dss-form-textarea>
        <dss-form-textarea label="Auto" autoHeight></dss-form-textarea>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-counter-style')]
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const forceFocus = () => {
      const element = document.querySelector('#manual-focus-demo');
      if (element) {
        (element as HTMLElement).focus();
      }
    };
    return html\`
            <div class="wrapper">
                <dss-button label="Focus" @click=\${forceFocus}></dss-button>
        <dss-form-textarea
                    id="manual-focus-demo"
                    label="1 fila"
                ></dss-form-textarea>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'textarea-focus-style')]
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ae=["Playground","Size","Icon","Disabled","ReadOnly","Required","Invalid","Description","Placeholder","Counter","HeightConfig","Focus"],te=Object.freeze(Object.defineProperty({__proto__:null,Counter:b,Description:m,Disabled:l,Focus:f,HeightConfig:p,Icon:d,Invalid:c,Placeholder:x,Playground:t,ReadOnly:i,Required:n,Size:o,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{b as C,l as D,f as F,p as H,d as I,t as P,i as R,te as S,o as a,n as b,c,m as d,x as e};
