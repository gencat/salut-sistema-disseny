import{x as s}from"./iframe-DLVb3rJw.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const d=`
  .table-wrapper {
    width: 900px;
    height: 600px;
  }
  .table-wrapper--sm {
    height: 400px;
  }
`,f={title:"Components/Custom Table",argTypes:{},parameters:{layout:"centered"}},e={tags:["!dev"],render:()=>s`
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
                        <span class="dss-td-content__value">John Selected</span>
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
                        <span class="dss-td-content__value">John Deleted</span>
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
                        <span class="dss-td-content__value">John Disabled</span>
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
                  <tr class="dss-tbody-row dss-tbody-row--clickable">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Clickable</span>
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
    `},decorators:[t(d,"custom-table-custom-th-style")]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
                        <span class="dss-td-content__value">John Selected</span>
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
                        <span class="dss-td-content__value">John Deleted</span>
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
                        <span class="dss-td-content__value">John Disabled</span>
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
                  <tr class="dss-tbody-row dss-tbody-row--clickable">
                    <td class="dss-td dss-td--font-bold">
                      <div class="dss-td-content">
                        <dss-badge size="md" state="info" text="NL" outlined hideIcon>
                          <dss-tooltip slot="tooltip" position="top">
                            <span>Lorem ipsum</span>
                          </dss-tooltip>
                        </dss-badge>
                        <span class="dss-td-content__value">John Clickable</span>
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const S=["Playground","RowStyles","AltHeader","HorizontalScroll","StickyColumnsCSS","StickyColumnsLIT","TableStylesHeightSM","TableStylesHeightAuto","TableStylesGrid","TableStylesGridNoDivider","TableStylesCustomDivider","TableStylesNestedRows","TableStylesHighlight","TableStylesCellHover","TableStylesCellSingleLine","TableStylesCornerAction","TableStylesCustomTh"],B=Object.freeze(Object.defineProperty({__proto__:null,AltHeader:i,HorizontalScroll:l,Playground:e,RowStyles:a,StickyColumnsCSS:o,StickyColumnsLIT:c,TableStylesCellHover:h,TableStylesCellSingleLine:x,TableStylesCornerAction:_,TableStylesCustomDivider:m,TableStylesCustomTh:y,TableStylesGrid:g,TableStylesGridNoDivider:u,TableStylesHeightAuto:b,TableStylesHeightSM:r,TableStylesHighlight:p,TableStylesNestedRows:v,__namedExportsOrder:S,default:f},Symbol.toStringTag,{value:"Module"}));export{i as A,l as H,e as P,a as R,B as S,r as T,o as a,c as b,b as c,g as d,u as e,m as f,v as g,p as h,h as i,x as j,_ as k,y as l};
