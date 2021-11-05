<template>
  <div>
  <Navbar />

  <!--    Team Create Area Start-->
<div class="full-content">
  <div class="side-content">
    <Sidebar />
  </div>
  <div class="main-content">

    <div class="team-section">
      <div>
        <b-button v-b-modal.modal-lg class="create-team"
        >Create Team</b-button
        >

        <div class="modal-team">
          <b-modal id="modal-lg" size="lg" title="New Team" hide-footer>
            <b-form @submit.prevent="newTeam">
              <b-form-group
                  id="form-group"
                  class="form-group"
                  label="Team Name"
              >
                <b-form-input
                    type="text"
                    v-model="todo.name"
                    placeholder="Team Name"
                    class="from-input"
                    required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                  id="form-group"
                  class="form-group"
                  label="About Team"
              >
                <b-form-textarea
                    id="textarea"
                    v-model="todo.details"
                    placeholder="Team Details"
                    class="from-input"
                    rows="3"
                    max-rows="6"
                    required
                >
                </b-form-textarea>
              </b-form-group>

              <b-form-group
                  id="form-group"
                  class="form-group"
                  label="Department Name"
              >
                <b-form-input
                    type="text"
                    v-model="todo.department"
                    placeholder="Department Name"
                    class="from-input"
                    required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                  id="form-group"
                  class="form-group"
                  label="Team Member"
              >
                <div class="member">
                  <div
                      class="row"
                      v-for="(task, index) in todos"
                      :key="index"
                  >
                    <div class="col-sm-6">
                      <div>
                        <h5>{{ task.text }}</h5>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <h5>Member</h5>
                    </div>
                    <div class="col-sm-4">
                      <div style="margin-bottom: 10px">
                        <b-dropdown
                            id="dropdown-right"
                            right
                            text="Assign"
                            variant="info"
                            class="btn btn-sm"
                        >
                          <b-dropdown-item href="#"
                          >Assign Leader</b-dropdown-item
                          >
                          <b-dropdown-item href="#"
                          >Remove Leader</b-dropdown-item
                          >
                        </b-dropdown>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>

                <div class="add-team-member">
                  <b-form-input
                      class="member-add-box"
                      type="text"
                      placeholder="Add Member"
                      v-model="member.text"
                  >
                  </b-form-input>
                  <button
                      @click="memberadd"
                      class="btn btn-primary"
                      type="button"
                  >
                    Add Member
                  </button>
                </div>
              </b-form-group>
              <button class="btn btn-success" type="submit">Submit</button>
            </b-form>
          </b-modal>
        </div>
      </div>

      <!--     Team Show Area-->

      <h3 class="team-table-head"><b>Team list & details</b></h3>
      <div class="no-team" v-if="no_team">
        <p>You Have no team right Now</p>
      </div>
      <div
          v-for="(nteam, index) in teams"
          :key="index"
          class="accordion"
          role="tablist"
      >
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="team-table" role="tab">
            <div class="row">
              <div class="col-md-8">
                <h3>Team Name : {{ nteam.name }}</h3>
                <p>Team Member : {{ teammember_1 }}</p>
              </div>
              <div class="col-md-4">
                <p>Department : {{ nteam.department }}</p>
                <button
                    type="button"
                    block
                    v-b-toggle.accordion-3
                    class="btn common-btn"
                >
                  View Details
                </button>
              </div>
            </div>
          </b-card-header>

          <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
          >
            <b-card-body>
              <b-card-text>
                <div class="row">
                  <div class="col-md-8">
                    <h3>Team Name : {{ nteam.name }}</h3>
                    <p>Team Details : {{ nteam.details }}</p>
                  </div>
                  <div class="col-md-4">
                    Total Member : {{ teammember_1 }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">Ishita khanom</div>
                  <div class="col-md-3">Employee</div>
                  <div class="col-md-3">
                    <div class="acc-btn">
                      <button
                          type="button"
                          block
                          v-b-toggle.accordion-4
                          class="btn common-btn"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-md-6">Masudur Rahamn</div>
                  <div class="col-md-3">Senior Officer</div>
                  <div class="col-md-3">
                    <div class="acc-btn">
                      <button
                          type="button"
                          block
                          v-b-toggle.accordion-4
                          class="btn common-btn"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-md-6">Parbin Sultana</div>
                  <div class="col-md-3">Jusnior Officer</div>
                  <div class="col-md-3">
                    <div class="acc-btn">
                      <button
                          type="button"
                          block
                          v-b-toggle.accordion-4
                          class="btn common-btn"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-md-6">Sadekur Rahman</div>
                  <div class="col-md-3">Employee</div>
                  <div class="col-md-3">
                    <div class="acc-btn">
                      <button
                          type="button"
                          block
                          v-b-toggle.accordion-4
                          class="btn common-btn"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </b-card-text>
            </b-card-body>
          </b-collapse>

          <b-collapse
              id="accordion-4"
              accordion="my-accordion"
              role="tabpanel"
          >
            <b-card-body>
              <b-card-text>
                <div class="row">
                  <div class="col-md-6">
                    <p>Total task List :</p>
                    <div class="task-list">
                      <li>
                        Create One Landing page --
                        <span>{{ currentDate() }}</span>
                      </li>
                      <li>
                        Give Update about web design --
                        <span>{{ currentDate() }}</span>
                      </li>
                      <li>
                        Complete sass tutorial --
                        <span>{{ currentDate() }}</span>
                      </li>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="pie">
                      <pie-chart
                          :legend="legend"
                          :data="chartData"
                          :options="chartOptions"
                      ></pie-chart>
                    </div>
                  </div>
                </div>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>

  </div>
</div>

  <!--    Team Area End-->
  <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import PieChart from "../chart/PieChart";
export default {
  name: "Create-Project",
  components:{
    Navbar,
    Sidebar,
    Footer,
    PieChart,
  },
  data(){
    return{
      teammember: 12,
      teamname: "Web Hunter",
      teammember_1: 10,
      teamname_1: "SSTack",
      no_team: true,
      member: {
        text: "",
      },
      teams: [],
      todo: {
        name: "",
        details: "",
        department: "",
      },
      todos: [],
      chartOptions: {
        hoverBorderWidth: 20,
      },
      legend: {
        position: "top",
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Complete", "Progress"],
        datasets: [
          {
            label: "Data ",
            backgroundColor: ["#41B883", "#00D8FF"],
            data: [9, 3],
          },
        ],
      },
    }

  },
  methods:{
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${
          current.getMonth() + 1
      }/${current.getFullYear()}`;
      return date;
    },
    memberadd() {
      this.newtask = Object.assign({}, this.member);
      this.member.text = "";
      this.todos.push(this.newtask);
      console.log(this.todos);
    },
    newTeam() {
      this.team = Object.assign({}, this.todo);
      this.todo.name = "";
      this.todo.details = "";
      this.todo.department = "";
      this.teams.push(this.team);
      this.no_team = false;
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/index.scss";

/*  */

.team-section {
  width: 100%;
  padding: 100px 0;
  min-height: calc(100vh - 374px);
}

.task-list li {
  text-decoration: none;
  list-style: none;
}
b-card-text hr {
  margin: 0px !important;
}
.from-input:focus {
  box-shadow: none !important;
  outline: 0 !important;
}
.create-team:focus,
.btn-success:focus {
  outline: 0 !important;
  box-shadow: none !important;
}
.team-table-head {
  padding: 0px;
  margin: 30px 0 20px;
}
.form-group {
  margin: 10px 0;
  padding: 0;
}
.add-team-member {
  display: flex;
  justify-content: space-between;
}
.member-add-box {
  width: 60%;
}
.member-add-box:focus {
  outline: 0 !important;
  box-shadow: none !important;
}
.no-team {
  width: 250px;
 margin: 100px auto;

}
/* Chart Area */

.chartjs-render-monitor{
  width: 400px !important;
  margin: 0 auto;
  height: 400px !important;
}
</style>
