<template>
  <div>
    <navbar />
    <sidebar />
    <div class="container">
      <div class="tasklist">
        <div class="task-mention">
          <table style="width: 100%">
            <tr>
              <th colspan="4" class="task-name">Task Name</th>
              <th>Assignee</th>
              <th>Due Date</th>
              <th>Project Name</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </table>
        </div>

        <hr />

        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-1
                class="task-status common-btn"
                >Running >
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <div class="task-mention">
                  <table style="width: 100%">
                    <tr>
                      <td colspan="4" class="task-name">{{ TaskName2 }}</td>
                      <td>
                        <img
                          class="img img-fluid assigne-img"
                          src="../../assets/demo.png"
                          alt="IMG"
                        /><img
                          class="img img-fluid assigne-img"
                          src="../../assets/demo.png"
                          alt="IMG"
                        />
                      </td>
                      <td>Due Date</td>
                      <td>{{ ProjectName }}</td>
                      <td>
                        <select
                          @click="addpriority"
                          name="Priority"
                          id="priority"
                          class="priority"
                          v-bind:class="{
                            green: this.green,
                            yellow: this.yellow,
                            red: this.red,
                            normal: this.normal,
                          }"
                          >
                          <option value="1">No Priority</option>
                          <option value="2">High</option>
                          <option value="3">Medium</option>
                          <option value="4">Low</option>
                        </select>
                      </td>
                      <td>
                        <select
                          @click="addstatus"
                          name="status"
                          id="status"
                          class="status"
                          v-bind:class="{
                            green2: this.green2,
                            blue: this.blue,
                            red2: this.red2,
                            normal2: this.normal2,
                          }"
                          >-->
                          <option value="1">No Status</option>
                          <option value="2">Running</option>
                          <option value="3">Complete</option>
                          <option value="4">Over Due</option>
                        </select>
                      </td>
                    </tr>
                  </table>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-2
                class="task-status common-btn"
                >Over Due ></b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <div class="task-mention">
                  <table style="width: 100%">
                    <tr>
                      <td colspan="4" class="task-name">{{ TaskName2 }}</td>
                      <td>
                        <img
                          class="img img-fluid assigne-img"
                          src="../../assets/demo.png"
                          alt="IMG"
                        />
                      </td>
                      <td>Due Date</td>
                      <td>{{ ProjectName }}</td>
                      <td>
                        <p style="background-color: red ; color: #0a0a0a">
                          High
                        </p>
                      </td>
                      <td>
                        <p style="background-color: red ; color: #0a0a0a">
                          Complete
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button
                block
                v-b-toggle.accordion-3
                class="task-status common-btn"
                >Complete ></b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <div class="task-mention">
                  <table style="width: 100%">
                    <tr>
                      <td colspan="4" class="task-name">{{ TaskName }}</td>
                      <td>
                        <img
                          class="img img-fluid assigne-img"
                          src="../../assets/demo.png"
                          alt="IMG"
                        />
                      </td>
                      <td>Due Date</td>
                      <td>{{ ProjectName }}</td>
                      <td>No Priority</td>
                      <td>
                        <p style="background-color: green ; color: #0a0a0a">
                          Complete
                        </p>
                      </td>
                    </tr>
                    <tr></tr>
                    <tr>
                      <td colspan="4" class="task-name">{{ TaskName2 }}</td>
                      <td>
                        <img
                          class="img img-fluid assigne-img"
                          src="../../assets/demo.png"
                          alt="IMG"
                        />
                        <img
                          class="img img-fluid assigne-img"
                          src="../../assets/demo.png"
                          alt="IMG"
                        />
                        <img
                          class="img img-fluid assigne-img"
                          src="../../assets/demo.png"
                          alt="IMG"
                        />
                      </td>
                      <td>Due Date</td>
                      <td>{{ ProjectName2 }}</td>
                      <td>No Priority</td>
                      <td>
                        <p style="background-color: green ; color: #0a0a0a">
                          Complete
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
export default {
  name: "Tasklist",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      TaskName: "Create 3 landing page",
      TaskName2: "Complete SASS Tutorial & make a web site with SASS in 7 days",
      ProjectName: "Web Design",
      ProjectName2: "Graphics Design",
      green: false,
      red: false,
      yellow: false,
      normal: false,
      green2: false,
      red2: false,
      normal2: false,
      blue: false,
      tasklist: [],
    };
  },
  methods: {
    addpriority(e) {
      if (e.target.value == 2) {
        this.green = false;
        this.yellow = false;
        this.red = true;
        this.normal = false;
      } else if (e.target.value == 3) {
        this.yellow = true;
        this.green = false;
        this.red = false;
        this.normal = false;
      } else if (e.target.value == 4) {
        this.green = true;
        this.red = false;
        this.yellow = false;
        this.normal = false;
      } else if (e.target.value == 1) {
        this.normal = true;
      }
    },
    addstatus(e) {
      if (e.target.value == 2) {
        this.blue = true;
        this.green2 = false;
        this.red2 = false;
        this.normal2 = false;
      } else if (e.target.value == 3) {
        this.green2 = true;
        this.blue = false;
        this.red2 = false;
        this.normal2 = false;
      } else if (e.target.value == 4) {
        this.red2 = true;
        this.green2 = false;
        this.blue = false;
        this.normal2 = false;
      } else if (e.target.value == 1) {
        this.normal2 = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/index";
</style>
