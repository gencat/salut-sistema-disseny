import{c,x as n}from"./iframe-CSkTF4zm.js";const{useState:i}=__STORYBOOK_MODULE_PREVIEW_API__,m={title:"Collections/Toast Manager",argTypes:{status:{name:"Next toast status",control:{type:"radio"},options:["info","success","warning","error"]},text:{name:"Text",description:"El text que es mostrarà en el toast.",control:{type:"text"}},duration:{name:"Duració del toast",description:"Durada en ms que es mostrarà el toast. Si és 0, el toast no es tancará automàticament.",control:{type:"number"}},maxVisibleToasts:{name:"Màxim de toasts visibles",description:"El nombre màxim de toasts que es poden mostrar simultàniament.",control:{type:"number"}}}},e={decorators:[(s,o)=>o.viewMode==="docs"?n`
                    <div style="position: relative; width: 700px; min-height: 320px; padding: 24px;display:flex;justify-content:end;border: 1px solid #ccc;">
                    <div style="position: absolute; top: 0; left: 0;height:100%;width:72px;background-color:#F5F5F5;"></div>
                    <div style="position: absolute; bottom: 0; left: 0;height:40px;width:100%;background-color:#F5F5F5;"></div>
                    ${s()}
                    </div>`:s()],parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=245-3714&m=dev"}},args:{status:"info",text:"Your message, short and clear.",duration:0,maxVisibleToasts:3},render:s=>{const[o,a]=i([]),[r,d]=i(0);return n`
            <dss-button label="Push Toast" @click=${()=>{const t=r+1;d(t),a([...o,{id:t,status:s.status,text:`${t}: ${s.text}`,duration:s.duration}])}}></dss-button>
      <dss-toast-manager
                maxVisibleToasts="${s.maxVisibleToasts}"
            >
                <dss-toast managed state="info" text="Default toast from storybook" hasButtonClose></dss-toast>
                ${c(o,t=>t.id,t=>n`
                    <dss-toast
                        managed
                        state="${t.status}"
                        text="${t.text}"
                        duration="${t.duration}"
                        hasButtonClose
                        @close=${()=>a(u=>u.filter(l=>l.id!==t.id))}
                    ></dss-toast>
                `)}
            </dss-toast-manager>
    `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  decorators: [(story: () => unknown, context: {
    viewMode: string;
  }) => context.viewMode === 'docs' ? html\`
                    <div style="position: relative; width: 700px; min-height: 320px; padding: 24px;display:flex;justify-content:end;border: 1px solid #ccc;">
                    <div style="position: absolute; top: 0; left: 0;height:100%;width:72px;background-color:#F5F5F5;"></div>
                    <div style="position: absolute; bottom: 0; left: 0;height:40px;width:100%;background-color:#F5F5F5;"></div>
                    \${story()}
                    </div>\` : story()],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=245-3714&m=dev'
    }
  },
  args: {
    status: 'info',
    text: 'Your message, short and clear.',
    duration: 0,
    maxVisibleToasts: 3
  },
  render: (args: any) => {
    const [toastQueue, setToastQueue] = useState<any[]>([]);
    const [counter, setCounter] = useState(0);
    const pushToast = () => {
      const nextCounter = counter + 1;
      setCounter(nextCounter);
      setToastQueue([...toastQueue, {
        id: nextCounter,
        status: args.status,
        text: \`\${nextCounter}: \${args.text}\`,
        duration: args.duration
      }]);
    };
    return html\`
            <dss-button label="Push Toast" @click=\${pushToast}></dss-button>
      <dss-toast-manager
                maxVisibleToasts="\${args.maxVisibleToasts}"
            >
                <dss-toast managed state="info" text="Default toast from storybook" hasButtonClose></dss-toast>
                \${repeat(toastQueue, toast => toast.id, toast => html\`
                    <dss-toast
                        managed
                        state="\${toast.status}"
                        text="\${toast.text}"
                        duration="\${toast.duration}"
                        hasButtonClose
                        @close=\${() => setToastQueue(queue => queue.filter(item => item.id !== toast.id))}
                    ></dss-toast>
                \`)}
            </dss-toast-manager>
    \`;
  }
}`,...e.parameters?.docs?.source}}};const p=["Playground"],h=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,h as S};
