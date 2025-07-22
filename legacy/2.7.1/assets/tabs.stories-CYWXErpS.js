import{x as a}from"./lit-html-D6a8R3xZ.js";const H={title:"Components/Tabs",argTypes:{label:{name:"Tabs label: internal wai aria-label",control:{type:"text"}},addTabEnabled:{name:"Enable add tab",control:{type:"boolean"}},addTabText:{name:"Text per afegir tab",control:{type:"text"},if:{arg:"addTabEnabled",truthy:!0}}}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=361-3737&m=dev"}},render:b=>{const o=[{id:"tab-1",text:"First tab",panel:"tabpanel-1",selected:!0},{id:"tab-2",text:"Second tab",panel:"tabpanel-2"},{id:"tab-3",text:"Last tab",panel:"tabpanel-3"}];return a`
      ${b.addTabEnabled?a`
            <dss-tabs-list
              dssTabsId="tabsDemo1"
              label="${b.label}"
              tabs=${JSON.stringify(o)}
              addTabEnabled
              addTabText="${b.addTabText}"
              aria-activedescendent="tabOptions"
            >
              <br />
              <dss-tabs-panel
                id="tabpanel-1"
                panelId="tabpanel-1"
                label="First tab"
                linkedTo="tabsDemo1"
                selected
              >
                <h4>Tab 1 content</h4>
                <div>
                  You can add style to this HTML so remove br tag from this
                  example :) in your final apps
                </div>
              </dss-tabs-panel>
              <dss-tabs-panel
                id="tabpanel-2"
                panelId="tabpanel-2"
                label="Second tab"
                linkedTo="tabsDemo1"
              >
                <h4>Tab 2 content</h4>
                <div>Include here your HTML</div>
              </dss-tabs-panel>
              <dss-tabs-panel
                id="tabpanel-3"
                panelId="tabpanel-3"
                label="Last tab"
                linkedTo="tabsDemo1"
              >
                <h4>Tab 3 content</h4>
                <div>Include here your HTML</div>
              </dss-tabs-panel>
            </dss-tabs-list>
          `:a`
            <dss-tabs-list
              dssTabsId="tabsDemo1"
              label="${b.label}"
              tabs=${JSON.stringify(o)}
            >
              <br />
              <dss-tabs-panel
                id="tabpanel-1"
                panelId="tabpanel-1"
                label="First tab"
                linkedTo="tabsDemo1"
                selected
              >
                <h4>Tab 1 content</h4>
                <div>
                  You can add style to this HTML so remove br tag from this
                  example :) in your final apps
                </div>
              </dss-tabs-panel>
              <dss-tabs-panel
                id="tabpanel-2"
                panelId="tabpanel-2"
                label="Second tab"
                linkedTo="tabsDemo1"
              >
                <h4>Tab 2 content</h4>
                <div>Include here your HTML</div>
              </dss-tabs-panel>
              <dss-tabs-panel
                id="tabpanel-3"
                panelId="tabpanel-3"
                label="Last tab"
                linkedTo="tabsDemo1"
              >
                <h4>Tab 3 content</h4>
                <div>Include here your HTML</div>
              </dss-tabs-panel>
            </dss-tabs-list>
          `}
    `},args:{label:"My tabs section",addTabEnabled:!1,addTabText:"Afegir tab"}},t={tags:["!dev"],render:()=>a`
      <dss-tabs-list
    dssTabsId="tabsDemo2"
    label="My profile tabs"
    tabs="[
{&#x22;id&#x22;:&#x22;tab-1&#x22;, &#x22;text&#x22;:&#x22;First tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-1&#x22;, &#x22;selected&#x22;:true },
{&#x22;id&#x22;:&#x22;tab-2&#x22;, &#x22;text&#x22;:&#x22;Second tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-2&#x22; },
{&#x22;id&#x22;:&#x22;tab-3&#x22;, &#x22;text&#x22;:&#x22;Last tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-3&#x22; }
]"
  >
    <br />

    <dss-tabs-panel panelId="tabpanel-1" label="First tab" linkedTo="tabsDemo2" selected>
      <h4>Tab 1 content</h4>
      <div>You can add style to this HTML so remove br tag from this example :) in your final apps</div>
    </dss-tabs-panel>

    <dss-tabs-panel panelId="tabpanel-2" label="Second tab" linkedTo="tabsDemo2">
      <h4>Tab 2 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>

    <dss-tabs-panel panelId="tabpanel-3" label="Last tab" linkedTo="tabsDemo2">
      <h4>Tab 3 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
  </dss-tabs-list>
    `},s={tags:["!dev"],render:()=>a`
      <dss-tabs-list
    dssTabsId="tabsDemo3"
    label="My profile tabs"
    tabs="[
{&#x22;id&#x22;:&#x22;tab-4&#x22;, &#x22;text&#x22;:&#x22;First tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-5&#x22;, &#x22;selected&#x22;:true },
{&#x22;id&#x22;:&#x22;tab-5&#x22;, &#x22;text&#x22;:&#x22;Second tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-6&#x22; },
{&#x22;id&#x22;:&#x22;tab-6&#x22;, &#x22;text&#x22;:&#x22;Last tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-7&#x22; }
]"
    addTabEnabled
    addTabText="Custom add tab text"
  >
    <br />

    <dss-tabs-panel panelId="tabpanel-5" label="First tab" linkedTo="tabsDemo3" selected>
      <h4>Tab 1 content</h4>
      <div>You can add style to this HTML so remove br tag from this example :) in your final apps</div>
    </dss-tabs-panel>

    <dss-tabs-panel panelId="tabpanel-6" label="Second tab" linkedTo="tabsDemo3">
      <h4>Tab 2 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>

    <dss-tabs-panel panelId="tabpanel-7" label="Last tab" linkedTo="tabsDemo3">
      <h4>Tab 3 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
  </dss-tabs-list>
    `},n={tags:["!dev"],render:()=>a`
      <dss-tabs-list
    dssTabsId="tabsDemo100"
    label="My profile tabs"
    tabs="[
{&#x22;id&#x22;:&#x22;tab-101&#x22;, &#x22;text&#x22;:&#x22;First tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-101&#x22;, &#x22;selected&#x22;:true },
{&#x22;id&#x22;:&#x22;tab-102&#x22;, &#x22;text&#x22;:&#x22;Second tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-102&#x22; },
{&#x22;id&#x22;:&#x22;tab-103&#x22;, &#x22;text&#x22;:&#x22;Last tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-103&#x22; }
]"
    addTabEnabled
  >
    <dss-icon-badge slot="badge-tab-101" size="md" state="ideal">
      <dss-tooltip slot="tooltip" position="right">
        <span>Indicar info</span>
      </dss-tooltip>
    </dss-icon-badge>

    <dss-icon-badge slot="badge-tab-103" size="md" state="slight-high">
      <dss-tooltip slot="tooltip" position="right">
        <span>Indicar info</span>
      </dss-tooltip>
    </dss-icon-badge>

    <br />

    <dss-tabs-panel panelId="tabpanel-101" label="First tab" linkedTo="tabsDemo100" selected>
      <h4>Tab 1 content</h4>
      <div>You can add style to this HTML so remove br tag from this example :) in your final apps</div>
    </dss-tabs-panel>

    <dss-tabs-panel panelId="tabpanel-102" label="Second tab" linkedTo="tabsDemo100">
      <h4>Tab 2 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>

    <dss-tabs-panel panelId="tabpanel-103" label="Last tab" linkedTo="tabsDemo100">
      <h4>Tab 3 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
  </dss-tabs-list>
    `},l={tags:["!dev"],render:()=>a`
      <dss-tabs-list 
    dssTabsId="tabsScroll"
    label="My profile tabs"
    tabs='[
    {"id":"tab-101", "text":"Tab sample 1", "panel":"tabpanel-101", "selected":true },
    {"id":"tab-102", "text":"Tab sample 2", "panel":"tabpanel-102" },
    {"id":"tab-103", "text":"Tab sample 3", "panel":"tabpanel-103" },
    {"id":"tab-104", "text":"Tab sample 4", "panel":"tabpanel-104" },
    {"id":"tab-105", "text":"Tab sample 5", "panel":"tabpanel-105" },
    {"id":"tab-106", "text":"Tab sample 6", "panel":"tabpanel-106" },
    {"id":"tab-107", "text":"Tab sample 7", "panel":"tabpanel-107" },
    {"id":"tab-108", "text":"Tab sample 8", "panel":"tabpanel-108" },
    {"id":"tab-109", "text":"Tab sample 9", "panel":"tabpanel-109" },
    {"id":"tab-110", "text":"Tab sample 10", "panel":"tabpanel-110" }
    ]'
  >
    <dss-icon-badge slot="badge-tab-102" size="md" state="ideal">
      <dss-tooltip slot="tooltip" position="right">
        <span>Indicar info</span>
      </dss-tooltip>
    </dss-icon-badge>
    <br/>
    <dss-tabs-panel panelId="tabpanel-101" label="First tab" linkedTo="tabsScroll" selected>
      <h4>Tab 1 content</h4>
      <div>You can add style to this HTML so remove br tag from this example :) in your final apps</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-102" label="Second tab" linkedTo="tabsScroll">
      <h4>Tab 2 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-103" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 3 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-104" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 4 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-105" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 5 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-106" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 6 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-107" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 7 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-108" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 8 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-109" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 9 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-110" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 10 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
  </dss-tabs-list>
    `},d={tags:["!dev"],render:()=>a`
      <div style="height:400px;">
        <dss-tabs-list
          dssTabsId="tabsDemo2"
          label="My profile tabs"
          tabs="[
            {&#x22;id&#x22;:&#x22;tab-1&#x22;, &#x22;text&#x22;:&#x22;First tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-1&#x22;, &#x22;selected&#x22;:true },
            {&#x22;id&#x22;:&#x22;tab-2&#x22;, &#x22;text&#x22;:&#x22;Second tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-2&#x22; },
            {&#x22;id&#x22;:&#x22;tab-3&#x22;, &#x22;text&#x22;:&#x22;Last tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-3&#x22; }
          ]"
          fullHeight
        >
          <div style="padding:8px">
            <dss-tabs-panel panelId="tabpanel-1" label="First tab" linkedTo="tabsDemo2" selected>
              <h4>Tab 1 content</h4>
              <div>This is just a demo forcing scroll adding fake content. Lorem ipsum dolor sit amet.</div>
              <br/><br/><br/>
              <br/><br/><br/>
              <div>This is just a demo forcing scroll adding fake content. Lorem ipsum dolor sit amet.</div>
              <br/><br/><br/>
              <br/><br/><br/>
              <div>This is just a demo forcing scroll adding fake content. Lorem ipsum dolor sit amet.</div>
              <br/><br/><br/>
              <br/><br/><br/>
              <div>This is just a demo forcing scroll adding fake content. Lorem ipsum dolor sit amet.</div>
            </dss-tabs-panel>

            <dss-tabs-panel panelId="tabpanel-2" label="Second tab" linkedTo="tabsDemo2">
              <h4>Tab 2 content</h4>
              <div>Include here your HTML</div>
            </dss-tabs-panel>

            <dss-tabs-panel panelId="tabpanel-3" label="Last tab" linkedTo="tabsDemo2">
              <h4>Tab 3 content</h4>
              <div>Include here your HTML</div>
            </dss-tabs-panel>
          </dss-tabs-list>
        </div>
      </div>
    `};var i,p,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=361-3737&m=dev'
    }
  },
  render: (args: any) => {
    const tabsItem = [{
      id: 'tab-1',
      text: 'First tab',
      panel: 'tabpanel-1',
      selected: true
    }, {
      id: 'tab-2',
      text: 'Second tab',
      panel: 'tabpanel-2'
    }, {
      id: 'tab-3',
      text: 'Last tab',
      panel: 'tabpanel-3'
    }];
    return html\`
      \${args.addTabEnabled ? html\`
            <dss-tabs-list
              dssTabsId="tabsDemo1"
              label="\${args.label}"
              tabs=\${JSON.stringify(tabsItem)}
              addTabEnabled
              addTabText="\${args.addTabText}"
              aria-activedescendent="tabOptions"
            >
              <br />
              <dss-tabs-panel
                id="tabpanel-1"
                panelId="tabpanel-1"
                label="First tab"
                linkedTo="tabsDemo1"
                selected
              >
                <h4>Tab 1 content</h4>
                <div>
                  You can add style to this HTML so remove br tag from this
                  example :) in your final apps
                </div>
              </dss-tabs-panel>
              <dss-tabs-panel
                id="tabpanel-2"
                panelId="tabpanel-2"
                label="Second tab"
                linkedTo="tabsDemo1"
              >
                <h4>Tab 2 content</h4>
                <div>Include here your HTML</div>
              </dss-tabs-panel>
              <dss-tabs-panel
                id="tabpanel-3"
                panelId="tabpanel-3"
                label="Last tab"
                linkedTo="tabsDemo1"
              >
                <h4>Tab 3 content</h4>
                <div>Include here your HTML</div>
              </dss-tabs-panel>
            </dss-tabs-list>
          \` : html\`
            <dss-tabs-list
              dssTabsId="tabsDemo1"
              label="\${args.label}"
              tabs=\${JSON.stringify(tabsItem)}
            >
              <br />
              <dss-tabs-panel
                id="tabpanel-1"
                panelId="tabpanel-1"
                label="First tab"
                linkedTo="tabsDemo1"
                selected
              >
                <h4>Tab 1 content</h4>
                <div>
                  You can add style to this HTML so remove br tag from this
                  example :) in your final apps
                </div>
              </dss-tabs-panel>
              <dss-tabs-panel
                id="tabpanel-2"
                panelId="tabpanel-2"
                label="Second tab"
                linkedTo="tabsDemo1"
              >
                <h4>Tab 2 content</h4>
                <div>Include here your HTML</div>
              </dss-tabs-panel>
              <dss-tabs-panel
                id="tabpanel-3"
                panelId="tabpanel-3"
                label="Last tab"
                linkedTo="tabsDemo1"
              >
                <h4>Tab 3 content</h4>
                <div>Include here your HTML</div>
              </dss-tabs-panel>
            </dss-tabs-list>
          \`}
    \`;
  },
  args: {
    label: 'My tabs section',
    addTabEnabled: false,
    addTabText: 'Afegir tab'
  }
}`,...(r=(p=e.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};var x,c,T;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-tabs-list
    dssTabsId="tabsDemo2"
    label="My profile tabs"
    tabs="[
{&#x22;id&#x22;:&#x22;tab-1&#x22;, &#x22;text&#x22;:&#x22;First tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-1&#x22;, &#x22;selected&#x22;:true },
{&#x22;id&#x22;:&#x22;tab-2&#x22;, &#x22;text&#x22;:&#x22;Second tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-2&#x22; },
{&#x22;id&#x22;:&#x22;tab-3&#x22;, &#x22;text&#x22;:&#x22;Last tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-3&#x22; }
]"
  >
    <br />

    <dss-tabs-panel panelId="tabpanel-1" label="First tab" linkedTo="tabsDemo2" selected>
      <h4>Tab 1 content</h4>
      <div>You can add style to this HTML so remove br tag from this example :) in your final apps</div>
    </dss-tabs-panel>

    <dss-tabs-panel panelId="tabpanel-2" label="Second tab" linkedTo="tabsDemo2">
      <h4>Tab 2 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>

    <dss-tabs-panel panelId="tabpanel-3" label="Last tab" linkedTo="tabsDemo2">
      <h4>Tab 3 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
  </dss-tabs-list>
    \`;
  }
}`,...(T=(c=t.parameters)==null?void 0:c.docs)==null?void 0:T.source}}};var h,m,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-tabs-list
    dssTabsId="tabsDemo3"
    label="My profile tabs"
    tabs="[
{&#x22;id&#x22;:&#x22;tab-4&#x22;, &#x22;text&#x22;:&#x22;First tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-5&#x22;, &#x22;selected&#x22;:true },
{&#x22;id&#x22;:&#x22;tab-5&#x22;, &#x22;text&#x22;:&#x22;Second tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-6&#x22; },
{&#x22;id&#x22;:&#x22;tab-6&#x22;, &#x22;text&#x22;:&#x22;Last tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-7&#x22; }
]"
    addTabEnabled
    addTabText="Custom add tab text"
  >
    <br />

    <dss-tabs-panel panelId="tabpanel-5" label="First tab" linkedTo="tabsDemo3" selected>
      <h4>Tab 1 content</h4>
      <div>You can add style to this HTML so remove br tag from this example :) in your final apps</div>
    </dss-tabs-panel>

    <dss-tabs-panel panelId="tabpanel-6" label="Second tab" linkedTo="tabsDemo3">
      <h4>Tab 2 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>

    <dss-tabs-panel panelId="tabpanel-7" label="Last tab" linkedTo="tabsDemo3">
      <h4>Tab 3 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
  </dss-tabs-list>
    \`;
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,I,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-tabs-list
    dssTabsId="tabsDemo100"
    label="My profile tabs"
    tabs="[
{&#x22;id&#x22;:&#x22;tab-101&#x22;, &#x22;text&#x22;:&#x22;First tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-101&#x22;, &#x22;selected&#x22;:true },
{&#x22;id&#x22;:&#x22;tab-102&#x22;, &#x22;text&#x22;:&#x22;Second tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-102&#x22; },
{&#x22;id&#x22;:&#x22;tab-103&#x22;, &#x22;text&#x22;:&#x22;Last tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-103&#x22; }
]"
    addTabEnabled
  >
    <dss-icon-badge slot="badge-tab-101" size="md" state="ideal">
      <dss-tooltip slot="tooltip" position="right">
        <span>Indicar info</span>
      </dss-tooltip>
    </dss-icon-badge>

    <dss-icon-badge slot="badge-tab-103" size="md" state="slight-high">
      <dss-tooltip slot="tooltip" position="right">
        <span>Indicar info</span>
      </dss-tooltip>
    </dss-icon-badge>

    <br />

    <dss-tabs-panel panelId="tabpanel-101" label="First tab" linkedTo="tabsDemo100" selected>
      <h4>Tab 1 content</h4>
      <div>You can add style to this HTML so remove br tag from this example :) in your final apps</div>
    </dss-tabs-panel>

    <dss-tabs-panel panelId="tabpanel-102" label="Second tab" linkedTo="tabsDemo100">
      <h4>Tab 2 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>

    <dss-tabs-panel panelId="tabpanel-103" label="Last tab" linkedTo="tabsDemo100">
      <h4>Tab 3 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
  </dss-tabs-list>
    \`;
  }
}`,...(g=(I=n.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var y,L,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-tabs-list 
    dssTabsId="tabsScroll"
    label="My profile tabs"
    tabs='[
    {"id":"tab-101", "text":"Tab sample 1", "panel":"tabpanel-101", "selected":true },
    {"id":"tab-102", "text":"Tab sample 2", "panel":"tabpanel-102" },
    {"id":"tab-103", "text":"Tab sample 3", "panel":"tabpanel-103" },
    {"id":"tab-104", "text":"Tab sample 4", "panel":"tabpanel-104" },
    {"id":"tab-105", "text":"Tab sample 5", "panel":"tabpanel-105" },
    {"id":"tab-106", "text":"Tab sample 6", "panel":"tabpanel-106" },
    {"id":"tab-107", "text":"Tab sample 7", "panel":"tabpanel-107" },
    {"id":"tab-108", "text":"Tab sample 8", "panel":"tabpanel-108" },
    {"id":"tab-109", "text":"Tab sample 9", "panel":"tabpanel-109" },
    {"id":"tab-110", "text":"Tab sample 10", "panel":"tabpanel-110" }
    ]'
  >
    <dss-icon-badge slot="badge-tab-102" size="md" state="ideal">
      <dss-tooltip slot="tooltip" position="right">
        <span>Indicar info</span>
      </dss-tooltip>
    </dss-icon-badge>
    <br/>
    <dss-tabs-panel panelId="tabpanel-101" label="First tab" linkedTo="tabsScroll" selected>
      <h4>Tab 1 content</h4>
      <div>You can add style to this HTML so remove br tag from this example :) in your final apps</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-102" label="Second tab" linkedTo="tabsScroll">
      <h4>Tab 2 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-103" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 3 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-104" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 4 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-105" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 5 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-106" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 6 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-107" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 7 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-108" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 8 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-109" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 9 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
    <dss-tabs-panel panelId="tabpanel-110" label="Last tab" linkedTo="tabsScroll">
      <h4>Tab 10 content</h4>
      <div>Include here your HTML</div>
    </dss-tabs-panel>
  </dss-tabs-list>
    \`;
  }
}`,...(f=(L=l.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var S,M,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="height:400px;">
        <dss-tabs-list
          dssTabsId="tabsDemo2"
          label="My profile tabs"
          tabs="[
            {&#x22;id&#x22;:&#x22;tab-1&#x22;, &#x22;text&#x22;:&#x22;First tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-1&#x22;, &#x22;selected&#x22;:true },
            {&#x22;id&#x22;:&#x22;tab-2&#x22;, &#x22;text&#x22;:&#x22;Second tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-2&#x22; },
            {&#x22;id&#x22;:&#x22;tab-3&#x22;, &#x22;text&#x22;:&#x22;Last tab&#x22;, &#x22;panel&#x22;:&#x22;tabpanel-3&#x22; }
          ]"
          fullHeight
        >
          <div style="padding:8px">
            <dss-tabs-panel panelId="tabpanel-1" label="First tab" linkedTo="tabsDemo2" selected>
              <h4>Tab 1 content</h4>
              <div>This is just a demo forcing scroll adding fake content. Lorem ipsum dolor sit amet.</div>
              <br/><br/><br/>
              <br/><br/><br/>
              <div>This is just a demo forcing scroll adding fake content. Lorem ipsum dolor sit amet.</div>
              <br/><br/><br/>
              <br/><br/><br/>
              <div>This is just a demo forcing scroll adding fake content. Lorem ipsum dolor sit amet.</div>
              <br/><br/><br/>
              <br/><br/><br/>
              <div>This is just a demo forcing scroll adding fake content. Lorem ipsum dolor sit amet.</div>
            </dss-tabs-panel>

            <dss-tabs-panel panelId="tabpanel-2" label="Second tab" linkedTo="tabsDemo2">
              <h4>Tab 2 content</h4>
              <div>Include here your HTML</div>
            </dss-tabs-panel>

            <dss-tabs-panel panelId="tabpanel-3" label="Last tab" linkedTo="tabsDemo2">
              <h4>Tab 3 content</h4>
              <div>Include here your HTML</div>
            </dss-tabs-panel>
          </dss-tabs-list>
        </div>
      </div>
    \`;
  }
}`,...(k=(M=d.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const D=["Playground","Default","AddTab","IconBadge","Scroll","FullHeight"],E=Object.freeze(Object.defineProperty({__proto__:null,AddTab:s,Default:t,FullHeight:d,IconBadge:n,Playground:e,Scroll:l,__namedExportsOrder:D,default:H},Symbol.toStringTag,{value:"Module"}));export{s as A,t as D,d as F,n as I,e as P,E as S,l as a};
