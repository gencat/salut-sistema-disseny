import{x as u}from"./lit-html-paDGiEfB.js";const l={title:"Components/Breadcrumb",argTypes:{breadNumber:{name:"Quantitat de pàgines",control:{type:"select"},options:[2,3,4,5]}},parameters:{layout:"centered"}},a={render:_=>{const e=document.createElement("div");e.className="dss-breadcrumb";let r="";for(let d=1;d<=_.breadNumber;d++)r+='<a class="dss-breadcrumb__item">Page</a>';return e.innerHTML+=r,u`${e}`},args:{breadNumber:3}},s={tags:["!dev"],render:()=>u`
      <div class="wrapper">
      <div class="dss-breadcrumb">
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
            </div>

            <div class="dss-breadcrumb">
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
            </div>

            <div class="dss-breadcrumb">
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
            </div>

            <div class="dss-breadcrumb">
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
            </div>
      </div>
    `};var c,m,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: any) => {
    const container = document.createElement('div');
    container.className = 'dss-breadcrumb';
    let items = '';
    for (let i = 1; i <= args.breadNumber; i++) {
      items += \`<a class="dss-breadcrumb__item">Page</a>\`;
    }
    container.innerHTML += items;
    return html\`\${container}\`;
  },
  args: {
    breadNumber: 3
  }
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var n,t,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
      <div class="dss-breadcrumb">
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
            </div>

            <div class="dss-breadcrumb">
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
            </div>

            <div class="dss-breadcrumb">
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
            </div>

            <div class="dss-breadcrumb">
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
                <a class="dss-breadcrumb__item">Page</a>
            </div>
      </div>
    \`;
  }
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const o=["Playground","More"],P=Object.freeze(Object.defineProperty({__proto__:null,More:s,Playground:a,__namedExportsOrder:o,default:l},Symbol.toStringTag,{value:"Module"}));export{P as B,s as M,a as P};
