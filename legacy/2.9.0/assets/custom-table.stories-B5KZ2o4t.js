import{x as s}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const d=`
  .table-wrapper {
    width: 900px;
    height: 600px;
  }
  .table-wrapper--sm {
    height: 400px;
  }
`,zs={title:"Components/Custom Table",argTypes:{},parameters:{layout:"centered"}},e={tags:["!dev"],render:()=>s`
      <div class="table-wrapper">
        <dss-custom-table multiselect tableTitle="My custom table" showConfig filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
            tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
            columnsHeader='[
              {"column":"name","label":"Nom","sortType":"string"},
              {"column":"age","label":"Edat","sortType":"number","align":"right"},
              {"column":"badge","label":"Estat","align":"center"},
              {"column":"result","label":"Resultat","align":"center"},
              {"column":"review","label":"Revisat","align":"center"},
              {"column":"button","label":""},
              {"column":"actions","label":""}
            ]' data='[
              {"name":"John", "age":22, "badge":"text", "result": 120},
              {"name":"William", "age":43, "badge":"text", "result": 44},
              {"name":"Anna", "age":12, "badge":"text", "result": 22},
              {"name":"Maria", "age":87, "badge":"text", "result": 83},
              {"name":"Joe", "age":66, "badge":"text", "result": 180},
              {"name":"Odette", "age":55, "badge":"text", "result": 120},
              {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
              {"name":"Uta", "age":56, "badge":"text", "result": 22},
              {"name":"Leila", "age":71, "badge":"text", "result": 83},
              {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
              {"name":"Lea", "age":22, "badge":"text", "result": 120},
              {"name":"Donita", "age":43, "badge":"text", "result": 44},
              {"name":"Sonya", "age":12, "badge":"text", "result": 22},
              {"name":"Thomas", "age":87, "badge":"text", "result": 83},
              {"name":"Shayla", "age":66, "badge":"text", "result": 180},
              {"name":"Marlene", "age":55, "badge":"text", "result": 120},
              {"name":"Frederic", "age":16, "badge":"text", "result": 44},
              {"name":"Jamie", "age":56, "badge":"text", "result": 22},
              {"name":"Carmen", "age":71, "badge":"text", "result": 83},
              {"name":"Joseph", "age":32, "badge":"text", "result": 180}
            ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <dss-checkbox>
                            <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                          </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">John XXX</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <dss-button variant="subtle" size="md" label="Button"></dss-button>
              <dss-button variant="secondary" size="md" label="Button"></dss-button>
              <dss-button variant="primary" size="md" label="Button"></dss-button>
            </div>
          </dss-custom-table>
      </div>
    `},a={tags:["!dev"],render:()=>s`
      <div class="table-wrapper">
        <dss-custom-table hideHeader hidePaginator
            columnsHeader='[
              {"column":"name","label":"Nom","sortType":"string"},
              {"column":"age","label":"Edat","sortType":"number","align":"right"},
              {"column":"badge","label":"Estat","align":"center"},
              {"column":"result","label":"Resultat","align":"center"},
              {"column":"review","label":"Revisat","align":"center"},
              {"column":"button","label":""},
              {"column":"actions","label":""}
            ]' data='[
              {"name":"John", "age":22, "badge":"text", "result": 120},
              {"name":"William", "age":43, "badge":"text", "result": 44},
              {"name":"Anna", "age":12, "badge":"text", "result": 22},
              {"name":"Maria", "age":87, "badge":"text", "result": 83},
              {"name":"Joe", "age":66, "badge":"text", "result": 180},
              {"name":"Odette", "age":55, "badge":"text", "result": 120},
              {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
              {"name":"Uta", "age":56, "badge":"text", "result": 22},
              {"name":"Leila", "age":71, "badge":"text", "result": 83},
              {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
              {"name":"Lea", "age":22, "badge":"text", "result": 120},
              {"name":"Donita", "age":43, "badge":"text", "result": 44},
              {"name":"Sonya", "age":12, "badge":"text", "result": 22},
              {"name":"Thomas", "age":87, "badge":"text", "result": 83},
              {"name":"Shayla", "age":66, "badge":"text", "result": 180},
              {"name":"Marlene", "age":55, "badge":"text", "result": 120},
              {"name":"Frederic", "age":16, "badge":"text", "result": 44},
              {"name":"Jamie", "age":56, "badge":"text", "result": 22},
              {"name":"Carmen", "age":71, "badge":"text", "result": 83},
              {"name":"Joseph", "age":32, "badge":"text", "result": 180}
            ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row dss-tbody-row--selected">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--deleted">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234" disabled>
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble disabled></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar" disabled>
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--disabled">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234" disabled>
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble disabled></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar" disabled>
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--expanded">
                    <td class="dss-td" colspan="7">
                      Row expanded.
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      End row.
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <dss-button variant="subtle" size="md" label="Button"></dss-button>
              <dss-button variant="secondary" size="md" label="Button"></dss-button>
              <dss-button variant="primary" size="md" label="Button"></dss-button>
            </div>
          </dss-custom-table>
      </div>  
    `,decorators:[t(d,"custom-table-row-style")]},i={tags:["!dev"],render:()=>s`
      <div class="table-wrapper">
        <dss-custom-table multiselect tableTitle="My custom table" innerFilters showConfig pageSizeOptions="[5,10,20]"
            columnsHeader='[
              {"column":"name","label":"Nom","sortType":"string"},
              {"column":"age","label":"Edat","sortType":"number","align":"right"},
              {"column":"badge","label":"Estat","align":"center"},
              {"column":"result","label":"Resultat","align":"center"},
              {"column":"review","label":"Revisat","align":"center"},
              {"column":"button","label":""},
              {"column":"actions","label":""}
            ]' data='[
              {"name":"John", "age":22, "badge":"text", "result": 120},
              {"name":"William", "age":43, "badge":"text", "result": 44},
              {"name":"Anna", "age":12, "badge":"text", "result": 22},
              {"name":"Maria", "age":87, "badge":"text", "result": 83},
              {"name":"Joe", "age":66, "badge":"text", "result": 180},
              {"name":"Odette", "age":55, "badge":"text", "result": 120},
              {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
              {"name":"Uta", "age":56, "badge":"text", "result": 22},
              {"name":"Leila", "age":71, "badge":"text", "result": 83},
              {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
              {"name":"Lea", "age":22, "badge":"text", "result": 120},
              {"name":"Donita", "age":43, "badge":"text", "result": 44},
              {"name":"Sonya", "age":12, "badge":"text", "result": 22},
              {"name":"Thomas", "age":87, "badge":"text", "result": 83},
              {"name":"Shayla", "age":66, "badge":"text", "result": 180},
              {"name":"Marlene", "age":55, "badge":"text", "result": 120},
              {"name":"Frederic", "age":16, "badge":"text", "result": 44},
              {"name":"Jamie", "age":56, "badge":"text", "result": 22},
              {"name":"Carmen", "age":71, "badge":"text", "result": 83},
              {"name":"Joseph", "age":32, "badge":"text", "result": 180}
            ]'>
            <div class="dss-table-filters" slot="filters">
              <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                  <label slot="label" for="dropdown1">Filter 1</label>
                  <input id="dropdown1" slot="input" type="text" />
              </dss-input-dropdown>
              <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                <label slot="label" for="dropdown2">Filter 2</label>
                <input id="dropdown2" slot="input" type="text" />
              </dss-input-dropdown>
              <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                <label slot="label" for="dropdown3">Filter 3</label>
                <input id="dropdown3" slot="input" type="text" />
              </dss-input-dropdown>
            </div>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <dss-button variant="subtle" size="md" label="Button"></dss-button>
              <dss-button variant="secondary" size="md" label="Button"></dss-button>
              <dss-button variant="primary" size="md" label="Button"></dss-button>
            </div>
          </dss-custom-table>
      </div>
    `,decorators:[t(d,"custom-table-alt-header-style")]},l={tags:["!dev"],render:()=>s`
      <div class="table-wrapper">
     <dss-custom-table tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:300px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":""},
          {"column":"actions","label":""}
        ]' data='[
          {"name":"John", "age":22, "badge":"text", "result": 120},
          {"name":"William", "age":43, "badge":"text", "result": 44},
          {"name":"Anna", "age":12, "badge":"text", "result": 22},
          {"name":"Maria", "age":87, "badge":"text", "result": 83},
          {"name":"Joe", "age":66, "badge":"text", "result": 180},
          {"name":"Odette", "age":55, "badge":"text", "result": 120},
          {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
          {"name":"Uta", "age":56, "badge":"text", "result": 22},
          {"name":"Leila", "age":71, "badge":"text", "result": 83},
          {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
          {"name":"Lea", "age":22, "badge":"text", "result": 120},
          {"name":"Donita", "age":43, "badge":"text", "result": 44},
          {"name":"Sonya", "age":12, "badge":"text", "result": 22},
          {"name":"Thomas", "age":87, "badge":"text", "result": 83},
          {"name":"Shayla", "age":66, "badge":"text", "result": 180},
          {"name":"Marlene", "age":55, "badge":"text", "result": 120},
          {"name":"Frederic", "age":16, "badge":"text", "result": 44},
          {"name":"Jamie", "age":56, "badge":"text", "result": 22},
          {"name":"Carmen", "age":71, "badge":"text", "result": 83},
          {"name":"Joseph", "age":32, "badge":"text", "result": 180}
        ]'>
        <div class="dss-table-container" slot="table">
          <table class="dss-custom-table dss-custom-table--max-content-width">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                  </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                      <dss-tooltip slot="tooltip" position="top">
                        <span>Lorem ipsum</span>
                      </dss-tooltip>
                    </dss-badge>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    `,decorators:[t(d,"custom-table-horizontal-scroll-style")]},o={tags:["!dev"],render:()=>s`
      <div class="table-wrapper">
     <dss-custom-table radioselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:200px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":"","style":"width:150px;"},
          {"column":"actions","label":"","style":"width:100px;"}
        ]' data='[
          {"name":"John", "age":22, "badge":"text", "result": 120},
          {"name":"William", "age":43, "badge":"text", "result": 44},
          {"name":"Anna", "age":12, "badge":"text", "result": 22},
          {"name":"Maria", "age":87, "badge":"text", "result": 83},
          {"name":"Joe", "age":66, "badge":"text", "result": 180},
          {"name":"Odette", "age":55, "badge":"text", "result": 120},
          {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
          {"name":"Uta", "age":56, "badge":"text", "result": 22},
          {"name":"Leila", "age":71, "badge":"text", "result": 83},
          {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
          {"name":"Lea", "age":22, "badge":"text", "result": 120},
          {"name":"Donita", "age":43, "badge":"text", "result": 44},
          {"name":"Sonya", "age":12, "badge":"text", "result": 22},
          {"name":"Thomas", "age":87, "badge":"text", "result": 83},
          {"name":"Shayla", "age":66, "badge":"text", "result": 180},
          {"name":"Marlene", "age":55, "badge":"text", "result": 120},
          {"name":"Frederic", "age":16, "badge":"text", "result": 44},
          {"name":"Jamie", "age":56, "badge":"text", "result": 22},
          {"name":"Carmen", "age":71, "badge":"text", "result": 83},
          {"name":"Joseph", "age":32, "badge":"text", "result": 180}
        ]'>
        <div class="dss-table-container" slot="table">
          <table class="dss-custom-table dss-custom-table--max-content-width dss-custom-table--sticky-columns-radioselect">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                  </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                      <dss-tooltip slot="tooltip" position="top">
                        <span>Lorem ipsum</span>
                      </dss-tooltip>
                    </dss-badge>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                   <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    `,decorators:[t(d,"custom-table-sticky-style")]},c={tags:["!dev"],render:()=>s`
      <div class="table-wrapper">
     <dss-custom-table fixedColumnsBefore="2" fixedColumnsAfter="1" radioselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:200px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":"","style":"width:150px;"},
          {"column":"actions","label":"","style":"width:100px;"}
        ]' data='[
          {"name":"John", "age":22, "badge":"text", "result": 120},
          {"name":"William", "age":43, "badge":"text", "result": 44},
          {"name":"Anna", "age":12, "badge":"text", "result": 22},
          {"name":"Maria", "age":87, "badge":"text", "result": 83},
          {"name":"Joe", "age":66, "badge":"text", "result": 180},
          {"name":"Odette", "age":55, "badge":"text", "result": 120},
          {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
          {"name":"Uta", "age":56, "badge":"text", "result": 22},
          {"name":"Leila", "age":71, "badge":"text", "result": 83},
          {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
          {"name":"Lea", "age":22, "badge":"text", "result": 120},
          {"name":"Donita", "age":43, "badge":"text", "result": 44},
          {"name":"Sonya", "age":12, "badge":"text", "result": 22},
          {"name":"Thomas", "age":87, "badge":"text", "result": 83},
          {"name":"Shayla", "age":66, "badge":"text", "result": 180},
          {"name":"Marlene", "age":55, "badge":"text", "result": 120},
          {"name":"Frederic", "age":16, "badge":"text", "result": 44},
          {"name":"Jamie", "age":56, "badge":"text", "result": 22},
          {"name":"Carmen", "age":71, "badge":"text", "result": 83},
          {"name":"Joseph", "age":32, "badge":"text", "result": 180}
        ]'>
        <div class="dss-table-container" slot="table">
          <table class="dss-custom-table">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                  </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                      <dss-tooltip slot="tooltip" position="top">
                        <span>Lorem ipsum</span>
                      </dss-tooltip>
                    </dss-badge>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    `,decorators:[t(d,"custom-table-sticky-lit-style")]},r={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--height-sm">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `,decorators:[t(d,"custom-table-height-sm-style")]},b={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--height-auto">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Awesome Lastname Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `,decorators:[t(d,"custom-table-height-auto-style")]},g={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--grid">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `,decorators:[t(d,"custom-table-grid-style")]},u={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--grid dss-custom-table--grid-hide-divider">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `,decorators:[t(d,"custom-table-grid-no-divider-style")]},m={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--divider-dark">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--hide-divider">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value"></span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-right">123</td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--hide-divider">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value"></span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-right">123</td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--divider-dark">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `,decorators:[t(d,"custom-table-custom-divider-style")]},v={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--grid">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--nested">
                    <td class="dss-td dss-td--font-bold" colspan="5">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                     <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_less" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--nested">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Lorem</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--nested">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Ipsum</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `,decorators:[t(d,"custom-table-nested-rows-style")]},p={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center","highlight":true},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `,decorators:[t(d,"custom-table-highlight-style")]},h={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center","highlight":true},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--cell-hover">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `,decorators:[t(d,"custom-table-cell-hover-style")]},x={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"single","label":"Una fila","align":"center"},
            {"column":"double","label":"Doble fila","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--cell-hover">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--single-line">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--single-line">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--single-line">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--single-line">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `,decorators:[t(d,"custom-table-cell-single-line-style")]},_={tags:["!dev"],render:()=>s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--cell-hover">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `,decorators:[t(d,"custom-table-corner-action-style")]},y={tags:["!dev"],render:()=>{const k=[{column:"name",label:"Nom",sortType:"string"},{column:"age",label:"Edat"},{column:"badge",label:"Estat",align:"center"},{column:"result",label:"Resultat",align:"center"},{column:"review",label:"Revisat",align:"center"},{column:"button",label:""},{column:"actions",label:""}];return k[1].renderTemplate=()=>{const w=document.createElement("div");w.style.maxWidth="100%";const z=document.createElement("dss-datepicker");z.setAttribute("inputSize","sm"),z.style.width="100%";const n=document.createElement("input");return n.setAttribute("slot","input"),n.setAttribute("id","myDatepicker"),n.setAttribute("type","text"),n.setAttribute("class","dss-input"),n.setAttribute("aria-label","Age picker"),z.appendChild(n),w.appendChild(z),w},s`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          .columnsHeader=${k} 
          data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    `},decorators:[t(d,"custom-table-custom-th-style")]};var f,J,S;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table multiselect tableTitle="My custom table" showConfig filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
            tableInfo="Actualitzat 18 de juliol 2024, 10:24 h"
            columnsHeader='[
              {"column":"name","label":"Nom","sortType":"string"},
              {"column":"age","label":"Edat","sortType":"number","align":"right"},
              {"column":"badge","label":"Estat","align":"center"},
              {"column":"result","label":"Resultat","align":"center"},
              {"column":"review","label":"Revisat","align":"center"},
              {"column":"button","label":""},
              {"column":"actions","label":""}
            ]' data='[
              {"name":"John", "age":22, "badge":"text", "result": 120},
              {"name":"William", "age":43, "badge":"text", "result": 44},
              {"name":"Anna", "age":12, "badge":"text", "result": 22},
              {"name":"Maria", "age":87, "badge":"text", "result": 83},
              {"name":"Joe", "age":66, "badge":"text", "result": 180},
              {"name":"Odette", "age":55, "badge":"text", "result": 120},
              {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
              {"name":"Uta", "age":56, "badge":"text", "result": 22},
              {"name":"Leila", "age":71, "badge":"text", "result": 83},
              {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
              {"name":"Lea", "age":22, "badge":"text", "result": 120},
              {"name":"Donita", "age":43, "badge":"text", "result": 44},
              {"name":"Sonya", "age":12, "badge":"text", "result": 22},
              {"name":"Thomas", "age":87, "badge":"text", "result": 83},
              {"name":"Shayla", "age":66, "badge":"text", "result": 180},
              {"name":"Marlene", "age":55, "badge":"text", "result": 120},
              {"name":"Frederic", "age":16, "badge":"text", "result": 44},
              {"name":"Jamie", "age":56, "badge":"text", "result": 22},
              {"name":"Carmen", "age":71, "badge":"text", "result": 83},
              {"name":"Joseph", "age":32, "badge":"text", "result": 180}
            ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                          <dss-checkbox>
                            <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                          </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">John XXX</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <dss-button variant="subtle" size="md" label="Button"></dss-button>
              <dss-button variant="secondary" size="md" label="Button"></dss-button>
              <dss-button variant="primary" size="md" label="Button"></dss-button>
            </div>
          </dss-custom-table>
      </div>
    \`;
  }
}`,...(S=(J=e.parameters)==null?void 0:J.docs)==null?void 0:S.source}}};var D,B,T;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table hideHeader hidePaginator
            columnsHeader='[
              {"column":"name","label":"Nom","sortType":"string"},
              {"column":"age","label":"Edat","sortType":"number","align":"right"},
              {"column":"badge","label":"Estat","align":"center"},
              {"column":"result","label":"Resultat","align":"center"},
              {"column":"review","label":"Revisat","align":"center"},
              {"column":"button","label":""},
              {"column":"actions","label":""}
            ]' data='[
              {"name":"John", "age":22, "badge":"text", "result": 120},
              {"name":"William", "age":43, "badge":"text", "result": 44},
              {"name":"Anna", "age":12, "badge":"text", "result": 22},
              {"name":"Maria", "age":87, "badge":"text", "result": 83},
              {"name":"Joe", "age":66, "badge":"text", "result": 180},
              {"name":"Odette", "age":55, "badge":"text", "result": 120},
              {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
              {"name":"Uta", "age":56, "badge":"text", "result": 22},
              {"name":"Leila", "age":71, "badge":"text", "result": 83},
              {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
              {"name":"Lea", "age":22, "badge":"text", "result": 120},
              {"name":"Donita", "age":43, "badge":"text", "result": 44},
              {"name":"Sonya", "age":12, "badge":"text", "result": 22},
              {"name":"Thomas", "age":87, "badge":"text", "result": 83},
              {"name":"Shayla", "age":66, "badge":"text", "result": 180},
              {"name":"Marlene", "age":55, "badge":"text", "result": 120},
              {"name":"Frederic", "age":16, "badge":"text", "result": 44},
              {"name":"Jamie", "age":56, "badge":"text", "result": 22},
              {"name":"Carmen", "age":71, "badge":"text", "result": 83},
              {"name":"Joseph", "age":32, "badge":"text", "result": 180}
            ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row dss-tbody-row--selected">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--deleted">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234" disabled>
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble disabled></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar" disabled>
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--disabled">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234" disabled>
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble disabled></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar" disabled>
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--expanded">
                    <td class="dss-td" colspan="7">
                      Row expanded.
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      End row.
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <dss-button variant="subtle" size="md" label="Button"></dss-button>
              <dss-button variant="secondary" size="md" label="Button"></dss-button>
              <dss-button variant="primary" size="md" label="Button"></dss-button>
            </div>
          </dss-custom-table>
      </div>  
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-row-style')]
}`,...(T=(B=a.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var V,L,M;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
        <dss-custom-table multiselect tableTitle="My custom table" innerFilters showConfig pageSizeOptions="[5,10,20]"
            columnsHeader='[
              {"column":"name","label":"Nom","sortType":"string"},
              {"column":"age","label":"Edat","sortType":"number","align":"right"},
              {"column":"badge","label":"Estat","align":"center"},
              {"column":"result","label":"Resultat","align":"center"},
              {"column":"review","label":"Revisat","align":"center"},
              {"column":"button","label":""},
              {"column":"actions","label":""}
            ]' data='[
              {"name":"John", "age":22, "badge":"text", "result": 120},
              {"name":"William", "age":43, "badge":"text", "result": 44},
              {"name":"Anna", "age":12, "badge":"text", "result": 22},
              {"name":"Maria", "age":87, "badge":"text", "result": 83},
              {"name":"Joe", "age":66, "badge":"text", "result": 180},
              {"name":"Odette", "age":55, "badge":"text", "result": 120},
              {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
              {"name":"Uta", "age":56, "badge":"text", "result": 22},
              {"name":"Leila", "age":71, "badge":"text", "result": 83},
              {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
              {"name":"Lea", "age":22, "badge":"text", "result": 120},
              {"name":"Donita", "age":43, "badge":"text", "result": 44},
              {"name":"Sonya", "age":12, "badge":"text", "result": 22},
              {"name":"Thomas", "age":87, "badge":"text", "result": 83},
              {"name":"Shayla", "age":66, "badge":"text", "result": 180},
              {"name":"Marlene", "age":55, "badge":"text", "result": 120},
              {"name":"Frederic", "age":16, "badge":"text", "result": 44},
              {"name":"Jamie", "age":56, "badge":"text", "result": 22},
              {"name":"Carmen", "age":71, "badge":"text", "result": 83},
              {"name":"Joseph", "age":32, "badge":"text", "result": 180}
            ]'>
            <div class="dss-table-filters" slot="filters">
              <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                  <label slot="label" for="dropdown1">Filter 1</label>
                  <input id="dropdown1" slot="input" type="text" />
              </dss-input-dropdown>
              <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                <label slot="label" for="dropdown2">Filter 2</label>
                <input id="dropdown2" slot="input" type="text" />
              </dss-input-dropdown>
              <dss-input-dropdown type="default" elements='[{"label":"Element 1", "value":"1"},{"label":"Element 2", "value":"2"},{"label":"Element 3", "value":"3"},{"label":"Element 4", "value":"4"}]'>
                <label slot="label" for="dropdown3">Filter 3</label>
                <input id="dropdown3" slot="input" type="text" />
              </dss-input-dropdown>
            </div>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--multiselect">
                    <td class="dss-td dss-td--font-bold">
                        <div class="dss-td-content">
                        <dss-checkbox>
                          <input class="dss-checkbox dss-checkbox--multiselect" slot="input" type="checkbox" aria-label="Seleccionar la fila">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="lg" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="md" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-footer-actions" slot="footer-actions">
              <dss-button variant="subtle" size="md" label="Button"></dss-button>
              <dss-button variant="secondary" size="md" label="Button"></dss-button>
              <dss-button variant="primary" size="md" label="Button"></dss-button>
            </div>
          </dss-custom-table>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-alt-header-style')]
}`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var E,F,H;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
     <dss-custom-table tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:300px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":""},
          {"column":"actions","label":""}
        ]' data='[
          {"name":"John", "age":22, "badge":"text", "result": 120},
          {"name":"William", "age":43, "badge":"text", "result": 44},
          {"name":"Anna", "age":12, "badge":"text", "result": 22},
          {"name":"Maria", "age":87, "badge":"text", "result": 83},
          {"name":"Joe", "age":66, "badge":"text", "result": 180},
          {"name":"Odette", "age":55, "badge":"text", "result": 120},
          {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
          {"name":"Uta", "age":56, "badge":"text", "result": 22},
          {"name":"Leila", "age":71, "badge":"text", "result": 83},
          {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
          {"name":"Lea", "age":22, "badge":"text", "result": 120},
          {"name":"Donita", "age":43, "badge":"text", "result": 44},
          {"name":"Sonya", "age":12, "badge":"text", "result": 22},
          {"name":"Thomas", "age":87, "badge":"text", "result": 83},
          {"name":"Shayla", "age":66, "badge":"text", "result": 180},
          {"name":"Marlene", "age":55, "badge":"text", "result": 120},
          {"name":"Frederic", "age":16, "badge":"text", "result": 44},
          {"name":"Jamie", "age":56, "badge":"text", "result": 22},
          {"name":"Carmen", "age":71, "badge":"text", "result": 83},
          {"name":"Joseph", "age":32, "badge":"text", "result": 180}
        ]'>
        <div class="dss-table-container" slot="table">
          <table class="dss-custom-table dss-custom-table--max-content-width">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                  </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                      <dss-tooltip slot="tooltip" position="top">
                        <span>Lorem ipsum</span>
                      </dss-tooltip>
                    </dss-badge>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-horizontal-scroll-style')]
}`,...(H=(F=l.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var R,O,C;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
     <dss-custom-table radioselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:200px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":"","style":"width:150px;"},
          {"column":"actions","label":"","style":"width:100px;"}
        ]' data='[
          {"name":"John", "age":22, "badge":"text", "result": 120},
          {"name":"William", "age":43, "badge":"text", "result": 44},
          {"name":"Anna", "age":12, "badge":"text", "result": 22},
          {"name":"Maria", "age":87, "badge":"text", "result": 83},
          {"name":"Joe", "age":66, "badge":"text", "result": 180},
          {"name":"Odette", "age":55, "badge":"text", "result": 120},
          {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
          {"name":"Uta", "age":56, "badge":"text", "result": 22},
          {"name":"Leila", "age":71, "badge":"text", "result": 83},
          {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
          {"name":"Lea", "age":22, "badge":"text", "result": 120},
          {"name":"Donita", "age":43, "badge":"text", "result": 44},
          {"name":"Sonya", "age":12, "badge":"text", "result": 22},
          {"name":"Thomas", "age":87, "badge":"text", "result": 83},
          {"name":"Shayla", "age":66, "badge":"text", "result": 180},
          {"name":"Marlene", "age":55, "badge":"text", "result": 120},
          {"name":"Frederic", "age":16, "badge":"text", "result": 44},
          {"name":"Jamie", "age":56, "badge":"text", "result": 22},
          {"name":"Carmen", "age":71, "badge":"text", "result": 83},
          {"name":"Joseph", "age":32, "badge":"text", "result": 180}
        ]'>
        <div class="dss-table-container" slot="table">
          <table class="dss-custom-table dss-custom-table--max-content-width dss-custom-table--sticky-columns-radioselect">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                  </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                      <dss-tooltip slot="tooltip" position="top">
                        <span>Lorem ipsum</span>
                      </dss-tooltip>
                    </dss-badge>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                   <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-sticky-style')]
}`,...(C=(O=o.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var A,W,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper">
     <dss-custom-table fixedColumnsBefore="2" fixedColumnsAfter="1" radioselect tableTitle="My custom table" filters='["Filter1","Filter2"]' pageSizeOptions="[5,10,20]"
        columnsHeader='[
          {"column":"name","label":"Nom","sortType":"string","style":"width:200px;"},
          {"column":"age","label":"Edat","sortType":"number","align":"right","style":"width:300px;"},
          {"column":"badge","label":"Estat","align":"center","style":"width:300px;"},
          {"column":"result","label":"Resultat","align":"center","style":"width:300px;"},
          {"column":"review","label":"Revisat","align":"center","style":"width:300px;"},
          {"column":"button","label":"","style":"width:150px;"},
          {"column":"actions","label":"","style":"width:100px;"}
        ]' data='[
          {"name":"John", "age":22, "badge":"text", "result": 120},
          {"name":"William", "age":43, "badge":"text", "result": 44},
          {"name":"Anna", "age":12, "badge":"text", "result": 22},
          {"name":"Maria", "age":87, "badge":"text", "result": 83},
          {"name":"Joe", "age":66, "badge":"text", "result": 180},
          {"name":"Odette", "age":55, "badge":"text", "result": 120},
          {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
          {"name":"Uta", "age":56, "badge":"text", "result": 22},
          {"name":"Leila", "age":71, "badge":"text", "result": 83},
          {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
          {"name":"Lea", "age":22, "badge":"text", "result": 120},
          {"name":"Donita", "age":43, "badge":"text", "result": 44},
          {"name":"Sonya", "age":12, "badge":"text", "result": 22},
          {"name":"Thomas", "age":87, "badge":"text", "result": 83},
          {"name":"Shayla", "age":66, "badge":"text", "result": 180},
          {"name":"Marlene", "age":55, "badge":"text", "result": 120},
          {"name":"Frederic", "age":16, "badge":"text", "result": 44},
          {"name":"Jamie", "age":56, "badge":"text", "result": 22},
          {"name":"Carmen", "age":71, "badge":"text", "result": 83},
          {"name":"Joseph", "age":32, "badge":"text", "result": 180}
        ]'>
        <div class="dss-table-container" slot="table">
          <table class="dss-custom-table">
            <tbody>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                  <div class="dss-td-content">
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <span class="dss-td-content__value">John Doe</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">
                <div class="dss-td-content">
                    <span class="dss-td-content__value">123</span>
                    <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                  </div>
                  </td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
              <tr class="dss-tbody-row">
                <td class="dss-td dss-td--font-bold">
                    <div class="dss-td-content">
                      <dss-radio-button>
                        <input slot="input" name="custom-table-row2" type="radio" aria-label="Seleccionar la fila">
                      </dss-radio-button>
                  </div>
                </td>
                <td class="dss-td dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                      <dss-tooltip slot="tooltip" position="top">
                        <span>Lorem ipsum</span>
                      </dss-tooltip>
                    </dss-badge>
                    <span class="dss-td-content__value">John Doe</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-right">123</td>
                <td class="dss-td dss-td--align-center">
                  <dss-badge size="lg" state="danger-high" text="1234">
                  </dss-badge>
                </td>
                <td class="dss-td dss-td--align-center dss-td--font-bold">
                  <div class="dss-td-content">
                    <dss-icon-badge size="sm" state="slight-high" icon="arrow_upward" bubble></dss-icon-badge>
                    <span class="dss-td-content__value">123</span>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content">
                    <dss-checkbox variant="validation">
                      <input slot="input" type="checkbox" aria-label="Validar">
                    </dss-checkbox>
                  </div>
                </td>
                <td class="dss-td dss-td--align-center">
                  <dss-button variant="secondary" size="md" label="Button"></dss-button>
                </td>
                <td class="dss-td dss-td--align-center">
                  <div class="dss-td-content dss-td-content--sm">
                    <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                    <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </dss-custom-table>
  </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-sticky-lit-style')]
}`,...(N=(W=c.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var U,K,P;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--height-sm">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-height-sm-style')]
}`,...(P=(K=r.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var I,X,j;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--height-auto">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Awesome Lastname Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-height-auto-style')]
}`,...(j=(X=b.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var G,$,q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--grid">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-grid-style')]
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var Q,Y,Z;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--grid dss-custom-table--grid-hide-divider">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-grid-no-divider-style')]
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ss,ts,ds;m.parameters={...m.parameters,docs:{...(ss=m.parameters)==null?void 0:ss.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--divider-dark">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--hide-divider">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value"></span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-right">123</td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--hide-divider">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value"></span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-right">123</td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--divider dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--divider-dark">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-custom-divider-style')]
}`,...(ds=(ts=m.parameters)==null?void 0:ts.docs)==null?void 0:ds.source}}};var ns,es,as;v.parameters={...v.parameters,docs:{...(ns=v.parameters)==null?void 0:ns.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--grid">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--nested">
                    <td class="dss-td dss-td--font-bold" colspan="5">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                     <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_less" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--nested">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Lorem</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row dss-tbody-row--nested">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Ipsum</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-nested-rows-style')]
}`,...(as=(es=v.parameters)==null?void 0:es.docs)==null?void 0:as.source}}};var is,ls,os;p.parameters={...p.parameters,docs:{...(is=p.parameters)==null?void 0:is.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center","highlight":true},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-highlight-style')]
}`,...(os=(ls=p.parameters)==null?void 0:ls.docs)==null?void 0:os.source}}};var cs,rs,bs;h.parameters={...h.parameters,docs:{...(cs=h.parameters)==null?void 0:cs.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center","highlight":true},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--cell-hover">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--highlight">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-cell-hover-style')]
}`,...(bs=(rs=h.parameters)==null?void 0:rs.docs)==null?void 0:bs.source}}};var gs,us,ms;x.parameters={...x.parameters,docs:{...(gs=x.parameters)==null?void 0:gs.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"single","label":"Una fila","align":"center"},
            {"column":"double","label":"Doble fila","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--cell-hover">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--single-line">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--single-line">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--single-line">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--single-line">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas et dolor eu pharetra</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-cell-single-line-style')]
}`,...(ms=(us=x.parameters)==null?void 0:us.docs)==null?void 0:ms.source}}};var vs,ps,hs;_.parameters={..._.parameters,docs:{...(vs=_.parameters)==null?void 0:vs.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          columnsHeader='[
            {"column":"name","label":"Nom","sortType":"string"},
            {"column":"age","label":"Edat","sortType":"number","align":"right"},
            {"column":"badge","label":"Estat","align":"center"},
            {"column":"result","label":"Resultat","align":"center"},
            {"column":"review","label":"Revisat","align":"center"},
            {"column":"button","label":""},
            {"column":"actions","label":""}
          ]' data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table dss-custom-table--cell-hover">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold dss-td--corner-action">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-corner-action-style')]
}`,...(hs=(ps=_.parameters)==null?void 0:ps.docs)==null?void 0:hs.source}}};var xs,_s,ys;y.parameters={...y.parameters,docs:{...(xs=y.parameters)==null?void 0:xs.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const columnsHeader = [{
      column: 'name',
      label: 'Nom',
      sortType: 'string'
    }, {
      column: 'age',
      label: 'Edat'
    }, {
      column: 'badge',
      label: 'Estat',
      align: 'center'
    }, {
      column: 'result',
      label: 'Resultat',
      align: 'center'
    }, {
      column: 'review',
      label: 'Revisat',
      align: 'center'
    }, {
      column: 'button',
      label: ''
    }, {
      column: 'actions',
      label: ''
    }];
    columnsHeader[1].renderTemplate = () => {
      const container = document.createElement('div');
      container.style.maxWidth = '100%';
      const datepicker = document.createElement('dss-datepicker');
      datepicker.setAttribute('inputSize', 'sm');
      datepicker.style.width = '100%';
      const input = document.createElement('input');
      input.setAttribute('slot', 'input');
      input.setAttribute('id', 'myDatepicker');
      input.setAttribute('type', 'text');
      input.setAttribute('class', 'dss-input');
      input.setAttribute('aria-label', 'Age picker');
      datepicker.appendChild(input);
      container.appendChild(datepicker);
      return container;
    };
    return html\`
      <div class="table-wrapper table-wrapper--sm">
        <dss-custom-table 
          hideHeader
          hidePaginator
          pageSizeOptions="[5,10,20]"
          .columnsHeader=\${columnsHeader} 
          data='[
            {"name":"John", "age":22, "badge":"text", "result": 120},
            {"name":"William", "age":43, "badge":"text", "result": 44},
            {"name":"Anna", "age":12, "badge":"text", "result": 22},
            {"name":"Maria", "age":87, "badge":"text", "result": 83},
            {"name":"Joe", "age":66, "badge":"text", "result": 180},
            {"name":"Odette", "age":55, "badge":"text", "result": 120},
            {"name":"Kimberley", "age":16, "badge":"text", "result": 44},
            {"name":"Uta", "age":56, "badge":"text", "result": 22},
            {"name":"Leila", "age":71, "badge":"text", "result": 83},
            {"name":"Fitzgeral", "age":32, "badge":"text", "result": 180},
            {"name":"Lea", "age":22, "badge":"text", "result": 120},
            {"name":"Donita", "age":43, "badge":"text", "result": 44},
            {"name":"Sonya", "age":12, "badge":"text", "result": 22},
            {"name":"Thomas", "age":87, "badge":"text", "result": 83},
            {"name":"Shayla", "age":66, "badge":"text", "result": 180},
            {"name":"Marlene", "age":55, "badge":"text", "result": 120},
            {"name":"Frederic", "age":16, "badge":"text", "result": 44},
            {"name":"Jamie", "age":56, "badge":"text", "result": 22},
            {"name":"Carmen", "age":71, "badge":"text", "result": 83},
            {"name":"Joseph", "age":32, "badge":"text", "result": 180}
          ]'>
            <div class="dss-table-container" slot="table">
              <table class="dss-custom-table">
                <tbody>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">John Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Jane Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                      <div class="dss-td-content">
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="above-high"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">William Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">
                    <div class="dss-td-content">
                        <span class="dss-td-content__value">123</span>
                        <dss-icon class="dss-td-content__icon" size="md" icon="add_box"></dss-icon>
                      </div>
                      </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                  <tr class="dss-tbody-row">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <span class="dss-td-content__value">Misty Doe</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-right">123</td>
                    <td class="dss-td dss-td--align-center">
                      <dss-badge size="sm" state="danger-high" text="1234">
                      </dss-badge>
                    </td>
                    <td class="dss-td dss-td--align-center dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-icon-badge state="below-low"></dss-icon-badge>
                        <span class="dss-td-content__value">123</span>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content">
                        <dss-checkbox variant="validation">
                          <input slot="input" type="checkbox" aria-label="Validar">
                        </dss-checkbox>
                      </div>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <dss-button variant="secondary" size="sm" label="Button"></dss-button>
                    </td>
                    <td class="dss-td dss-td--align-center">
                      <div class="dss-td-content dss-td-content--sm">
                        <dss-icon-button icon="more_vert" size="md" variant="primary"></dss-icon-button>
                        <dss-icon-button icon="expand_more" size="md" variant="primary"></dss-icon-button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </dss-custom-table>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'custom-table-custom-th-style')]
}`,...(ys=(_s=y.parameters)==null?void 0:_s.docs)==null?void 0:ys.source}}};const ws=["Playground","RowStyles","AltHeader","HorizontalScroll","StickyColumnsCSS","StickyColumnsLIT","TableStylesHeightSM","TableStylesHeightAuto","TableStylesGrid","TableStylesGridNoDivider","TableStylesCustomDivider","TableStylesNestedRows","TableStylesHighlight","TableStylesCellHover","TableStylesCellSingleLine","TableStylesCornerAction","TableStylesCustomTh"],Js=Object.freeze(Object.defineProperty({__proto__:null,AltHeader:i,HorizontalScroll:l,Playground:e,RowStyles:a,StickyColumnsCSS:o,StickyColumnsLIT:c,TableStylesCellHover:h,TableStylesCellSingleLine:x,TableStylesCornerAction:_,TableStylesCustomDivider:m,TableStylesCustomTh:y,TableStylesGrid:g,TableStylesGridNoDivider:u,TableStylesHeightAuto:b,TableStylesHeightSM:r,TableStylesHighlight:p,TableStylesNestedRows:v,__namedExportsOrder:ws,default:zs},Symbol.toStringTag,{value:"Module"}));export{i as A,l as H,e as P,a as R,Js as S,r as T,o as a,c as b,b as c,g as d,u as e,m as f,v as g,p as h,h as i,x as j,_ as k,y as l};
