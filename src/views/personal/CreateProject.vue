<template>
<div>
  <Navbar />
  <div class="full-content">
    <div class="side-content">
      <Sidebar />
    </div>
    <div class="main-content">
      <!--Modal start    -->
      <div class="project-div">
      <div>
        <b-button v-b-modal.modal-project class="create-team"
        >Create Project</b-button
        >
        <!--Project modal-->
        <div class="modal-team">
          <b-modal id="modal-project" size="lg" title="New project" hide-footer>
            <b-form @submit.prevent="newProject">


              <b-form-group
                  id="form-group"
                  class="form-group"
                  label="Project Name"
              >
                <b-form-input
                    id="form-group"
                    v-model="codo.project"
                    placeholder="Project Name"
                    class="from-input"
                    required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                  id="form-group"
                  class="form-group"
                  label="Assign Leader"
              >
                <b-form-input
                    id="form-group"
                    v-model="codo.project_leader"
                    placeholder="Leader"
                    class="from-input"
                    required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group id="form-group" class="form-group" label="Date">
                <b-form-input
                    type="text"
                    v-model="codo.date"
                    placeholder="Date"
                    class="from-input"
                    required
                >
                </b-form-input>
              </b-form-group>
              <button class="btn btn-success" type="submit">Submit</button>
            </b-form>
          </b-modal>
        </div>
      </div>

      <!--Modal end-->

      <h3 class="team-table-head"><b>Project list & details</b></h3>

      <div class="task-mention">
        <table style="width: 100%">
          <tr>
            <th >Project Name</th>
            <th>Leader</th>
            <th>Date</th>
            <th>Brainstorming</th>
            <th>Execution</th>
            <th>Lunch</th>
          </tr>
          <tr  v-for="(nproject, index) in projects"
               :key="index">
            <td >{{ nproject.project }}</td>
            <!--            <td> <img class="img img-fluid assigne-img" src="../../assets/demo.png" alt="IMG"><img class="img img-fluid assigne-img" src="../../assets/demo.png" alt="IMG"> </td>-->
            <td >{{ nproject.project_leader }}</td>
            <td >{{ nproject.date }}</td>
            <td  v-bind:class="{'green' : green,'red' : red,'yellow' : yellow, 'normal': normal}">
              <select
                  @click="addbrainstorming"
                  name="brainstorming"
                  id="brainstorming"
                  class="brainstorming no-border"
                  v-bind:class="{'green' : green,'red' : red,'yellow' : yellow, 'normal': normal}"
              >
                <option value="1">Normal &nbsp;&nbsp; </option>
                <option value="2">Stuck </option>
                <option value="3">Working on it &nbsp;&nbsp;</option>
                <option value="4">Done </option>
              </select>
            </td>
            <td v-bind:class="{'green' : green2,'red' : red2,'yellow' : yellow2, 'normal': normal2}">
              <select
                  @click="addexecution"
                  name="execution"
                  id="execution"
                  class="execution no-border"
                  v-bind:class="{'green' : green2,'red' : red2,'yellow' : yellow2, 'normal': normal2}"
              >
                <option value="1">Normal</option>
                <option value="2">Stuck</option>
                <option value="3">Working on it</option>
                <option value="4">Done</option>
              </select>
            </td>
            <td v-bind:class="{'green' : green3,'red' : red3,'yellow' : yellow3, 'normal': normal3}">
              <select @click="addlunch"
                      name="lunch"
                      id="lunch"
                      class="lunch no-border"
                      v-bind:class="{'green' : green3,'red' : red3,'yellow' : yellow3, 'normal': normal3}">
                <option value="1">Normal</option>
                <option value="2">Stuck</option>
                <option value="3">Working on it</option>
                <option value="4">Done</option>
              </select>
            </td>
          </tr>
        </table>
      </div>

      <div class="no-team" v-if="no_project">
        <p>You Have no Project right Now</p>
      </div>


      </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
export default {
name: "Create-Team",
  components:{
    Navbar,
    Sidebar,
    Footer
  },
  data(){
  return{
    no_project: true,
    green: true,
    red: true,
    yellow: true,
    green2: true,
    red2: true,
    yellow2: true,
    green3: true,
    red3: true,
    yellow3: true,
    normal: true,
    normal2: true,
    normal3: true,
    codo: {
      project: " ",
      project_leader: "",
      date: "",
    },
    projects: [],
   }
  },
  methods:{
    newProject() {
      this.sampleproject = Object.assign({}, this.codo);
      this.codo.project = "";
      this.codo.project_leader = "";
      this.codo.date = "";
      this.projects.push(this.sampleproject);
      this.no_project = false;
    },
    addbrainstorming(e) {
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
    addexecution(e) {
      if (e.target.value == 2) {
        this.green2 = false;
        this.yellow2 = false;
        this.red2 = true;
        this.normal2 = false;
      } else if (e.target.value == 3) {
        this.yellow2 = true;
        this.green2 = false;
        this.red2 = false;
        this.normal2 = false;
      } else if (e.target.value == 4) {
        this.green2 = true;
        this.red2 = false;
        this.yellow2 = false;
        this.normal2 = false;
      } else if (e.target.value == 1) {
        this.normal2 = true;
      }
    },
    addlunch(e) {
      if (e.target.value == 2) {
        this.green3 = false;
        this.yellow3 = false;
        this.red3 = true;
        this.normal3 = false;
      } else if (e.target.value == 3) {
        this.yellow3 = true;
        this.green3 = false;
        this.red3 = false;
        this.normal3 = false;
      } else if (e.target.value == 4) {
        this.green3 = true;
        this.red3 = false;
        this.yellow3 = false;
        this.normal3 = false;
      } else if (e.target.value == 1) {
        this.normal3 = true;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/index";
.project-div{
  width: 100%;
  padding: 100px 0;
  min-height: calc(100vh - 374px);
}
.team-table-head {
  padding: 0px;
  margin: 30px 0 20px;
}
th,td{
  text-align: center;
  border-bottom: 2px solid #6e6a6a;
}
th{
  border-right: 2px solid #6e6a6a;
}
th:last-child{
  border-right: none;
}

.modal-team {
  width: 600px !important;
}
.form-group {
  margin: 10px 0;
  padding: 0;
}
.no-team{
  width: 300px;
  margin: 100px auto;
}
.green{
  background-color: green;
  font-weight: bold;
}
.yellow{
  background-color: yellow;
  font-weight: bold;
}
.red{
  background-color: red;
  font-weight: bold;
}

.normal{
  background-color: white;
  font-weight: normal;
}
.no-border{
  border: none !important;
}
.no-border {
  border: none !important;
}
.no-border:active{
  border: none;
  box-shadow: none;
}


</style>
