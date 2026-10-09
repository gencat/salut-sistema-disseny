import{x as n}from"./iframe-UwRFcghS.js";const{useState:a}=__STORYBOOK_MODULE_PREVIEW_API__,u={title:"Collections/Toast Manager",argTypes:{status:{name:"Next toast status",control:{type:"radio"},options:["info","success","warning","error"]},text:{name:"Text",description:"El text que es mostrarà en el toast.",control:{type:"text"}},duration:{name:"Duració del toast",description:"Durada en ms que es mostrarà el toast. Si és 0, el toast no es tancará automàticament.",control:{type:"number"}},maxVisibleToasts:{name:"Màxim de toasts visibles",description:"El nombre màxim de toasts que es poden mostrar simultàniament.",control:{type:"number"}}}},e={decorators:[(t,o)=>o.viewMode==="docs"?n`
                    <div style="position: relative; width: 700px; min-height: 320px; padding: 24px;display:flex;justify-content:end;border: 1px solid #ccc;">
                    <div style="position: absolute; top: 0; left: 0;height:100%;width:72px;background-color:#F5F5F5;"></div>
                    <div style="position: absolute; bottom: 0; left: 0;height:40px;width:100%;background-color:#F5F5F5;"></div>
                    ${t()}
                    </div>`:t()],parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=245-3714&m=dev"}},args:{status:"info",text:"Your message, short and clear.",duration:0,maxVisibleToasts:3},render:t=>{const[o,r]=a([]),[i,d]=a(0);return n`
            <dss-button label="Push Toast" @click=${()=>{const s=i+1;d(s),r([...o,{status:t.status,text:`${s}: ${t.text}`,duration:t.duration}])}}></dss-button>
      <dss-toast-manager
                maxVisibleToasts="${t.maxVisibleToasts}"
            >
                <dss-toast managed state="info" text="Default toast from storybook" hasButtonClose></dss-toast>
                ${o.map(s=>n`
                    <dss-toast
                        managed
                        state="${s.status}"
                        text="${s.text}"
                        duration="${s.duration}"
                        hasButtonClose
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
                \${toastQueue.map(toast => html\`
                    <dss-toast
                        managed
                        state="\${toast.status}"
                        text="\${toast.text}"
                        duration="\${toast.duration}"
                        hasButtonClose
                    ></dss-toast>
                \`)}
            </dss-toast-manager>
    \`;
  }
}`,...e.parameters?.docs?.source}}};const l=["Playground"],p=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:l,default:u},Symbol.toStringTag,{value:"Module"}));export{e as P,p as S};
