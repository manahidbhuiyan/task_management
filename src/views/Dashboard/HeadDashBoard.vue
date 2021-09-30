<template>
<div>
  <navbar />
  <sidebar />
  <div class="headDash">
  <div class="container">
   <div class="row">
     <div class="col-md-3">
       <div>
         <b-card>
           <card-header>
             Now You Can create Team and add team member
           </card-header>

         </b-card>
         <b-button v-b-modal.modal-lg>Create Team</b-button>

         <div class="modal-team">
         <b-modal id="modal-lg" size="lg" title="New Team" hide-footer>


  <b-form @submit.prevent="newTeam">
    <b-form-group
        id="form-group"
        class="form-group"
        label="Team Name">
      <b-form-input
          type="text"
          v-model="todo.name"
          placeholder="Team Name"
          class="from-input"
          required>
      </b-form-input>
    </b-form-group>

    <b-form-group
        id="form-group"
        class="form-group"
        label="About Team">
      <b-form-textarea
          id="textarea"
          v-model="todo.details"
          placeholder="Team Details"
          class="from-input"
          rows="3"
          max-rows="6"
          required>
      </b-form-textarea>
    </b-form-group>

    <b-form-group
        id="form-group"
        class="form-group"
        label="Department Name">
      <b-form-input
          type="text"
          v-model="todo.department"
          placeholder="Department Name"
          class="from-input"
          required>
      </b-form-input>
    </b-form-group>

    <b-form-group
        id="form-group"
        class="form-group"
        label="Team Member">
      <div class="member">
        <div class="row" v-for="(task,index) in todos" :key="index">
          <div class="col-sm-6">
            <div >
              <h5 style="margin-top: 10px">{{ task.text }}</h5>
            </div>
          </div>
          <div class="col-sm-2">
            <h5 style="margin-top: 10px">Member</h5>
          </div>
          <div class="col-sm-4">
            <div>
              <b-dropdown id="dropdown-right" right text="Right align" variant="primary" class="btn btn-sm">
                <b-dropdown-item href="#">Assign Leader</b-dropdown-item>
                <b-dropdown-item href="#">Remove Leader</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <hr>
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
        <button @click="memberadd" class="btn btn-primary" type="button">Add Member</button>
      </div>

    </b-form-group>
    <button class="btn btn-success" type="submit">Submit</button>

  </b-form>

         </b-modal>
         </div>
       </div>
     </div>
     <div class="col-md-9">

<button type="button" class="btn btn-primary mb-3">Latest Team ></button>
     <div v-for="(nteam,index) in teams" :key="index" class="accordion" role="tablist">
       <b-card no-body class="mb-1">
         <b-card-header  header-tag="header" class="p-1" role="tab">
           <div class="row" >
             <div class="col-md-8">
               <h3>Team Name : {{ nteam.name }}</h3>
               <p>Team Member : {{ teammember_1 }}</p>
             </div>
             <div class="col-md-4">
               <p>Department : {{ nteam.department }}</p>
               <button type="button"  block v-b-toggle.accordion-3 variant="info" class="btn btn-primary">View Details</button>
             </div>
           </div>
         </b-card-header>


         <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
           <b-card-body>
             <b-card-text>
               <div class="row" >
                 <div class="col-md-8">
                   <h3>Team Name : {{ nteam.name }}</h3>
                   <p>Team Details : {{ nteam.details }} </p>
                 </div>
                 <div class="col-md-4">Total Member : {{ teammember_1 }}</div>
               </div>
               <div class="row">
                 <div class="col-md-6">Ishita khanom</div>
                 <div class="col-md-3">Employee</div>
                 <div class="col-md-3">
                   <div class="acc-btn">
                     <button type="button"  block v-b-toggle.accordion-4 variant="info" class="btn btn-primary">View Details</button>
                   </div>
                 </div>
               </div>
               <hr>
               <div class="row">
                 <div class="col-md-6">Masudur Rahamn</div>
                 <div class="col-md-3">Senior Officer</div>
                 <div class="col-md-3">
                   <div class="acc-btn">
                     <button type="button"  block v-b-toggle.accordion-4 variant="info" class="btn btn-primary">View Details</button>
                   </div>
                 </div>
               </div>
               <hr>
               <div class="row">
                 <div class="col-md-6">Parbin Sultana</div>
                 <div class="col-md-3">Jusnior Officer</div>
                 <div class="col-md-3">
                   <div class="acc-btn">
                     <button type="button"  block v-b-toggle.accordion-4 variant="info" class="btn btn-primary">View Details</button>
                   </div>
                 </div>
               </div>
               <hr>
               <div class="row">
                 <div class="col-md-6">Sadekur Rahman</div>
                 <div class="col-md-3">Employee</div>
                 <div class="col-md-3">
                   <div class="acc-btn">
                     <button type="button"  block v-b-toggle.accordion-4 variant="info" class="btn btn-primary">View Details</button>
                   </div>
                 </div>
               </div>


             </b-card-text>
           </b-card-body>
         </b-collapse>

         <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
           <b-card-body>
             <b-card-text>
               <div class="row">
                 <div class="col-md-6">
                   <p>Total task List : </p>
                   <div class="task-list">
                     <li>Create One Landing page -- <span>{{ currentDate() }}</span></li>
                     <li>Give Update about web design -- <span>{{ currentDate() }}</span></li>
                     <li>Complete sass tutorial -- <span>{{ currentDate() }}</span></li>
                   </div>
                 </div>

                 <div class="col-md-6">

                   <div class="pie">
                     <pie-chart :legend="legend" :data="chartData" :options="chartOptions"></pie-chart>
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
  </div>

  <div class="container">

    <div class="all-team">
      <h3>All Teams List</h3>
      <div class="no-team" v-if="no_team">
        <p>You Have no team right Now</p>
      </div>
      <div v-for="(nteam,index) in teams" :key="index" class="accordion mb-3" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header  header-tag="header" class="p-1" role="tab">
            <!--        <b-button block v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>-->

            <div class="row" >
              <div class="col-md-8">
                <h3>Team Name : {{ nteam.name }}</h3>
                <p>Team Member : {{ teammember_1 }}</p>
              </div>
              <div class="col-md-4">
                <p>Department : {{ nteam.department }}</p>
                <button type="button"  block v-b-toggle.accordion-3 variant="info" class="btn btn-primary">View Details</button>
              </div>
            </div>
          </b-card-header>


          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel" >
            <b-card-body>
              <b-card-text>
                <div class="row" >
                  <div class="col-md-8">
                    <h3>Team Name : {{ nteam.name }}</h3>
                    <p>Team Details : {{ nteam.details }} </p>
                  </div>
                  <div class="col-md-4">Total Member : {{ teammember_1 }}</div>
                </div>
                <div class="row">
                  <div class="col-md-6">Ishita khanom</div>
                  <div class="col-md-3">Employee</div>
                  <div class="col-md-3">
                    <div class="acc-btn">
                      <button type="button"  block v-b-toggle.accordion-4 variant="info" class="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-md-6">Masudur Rahamn</div>
                  <div class="col-md-3">Senior Officer</div>
                  <div class="col-md-3">
                    <div class="acc-btn">
                      <button type="button"  block v-b-toggle.accordion-4 variant="info" class="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-md-6">Parbin Sultana</div>
                  <div class="col-md-3">Jusnior Officer</div>
                  <div class="col-md-3">
                    <div class="acc-btn">
                      <button type="button"  block v-b-toggle.accordion-4 variant="info" class="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-md-6">Sadekur Rahman</div>
                  <div class="col-md-3">Employee</div>
                  <div class="col-md-3">
                    <div class="acc-btn">
                      <button type="button"  block v-b-toggle.accordion-4 variant="info" class="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>


              </b-card-text>
            </b-card-body>
          </b-collapse>

          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div class="row">
                  <div class="col-md-6">
                    <p>Total task List : </p>
                    <div class="task-list">
                      <li>Create One Landing page -- <span>{{ currentDate() }}</span></li>
                      <li>Give Update about web design -- <span>{{ currentDate() }}</span></li>
                      <li>Complete sass tutorial -- <span>{{ currentDate() }}</span></li>
                    </div>
                  </div>

                  <div class="col-md-6">

                    <div class="pie">
                      <pie-chart :legend="legend" :data="chartData" :options="chartOptions"></pie-chart>
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
<Footer></Footer>
</div>
</template>

<script>
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
import PieChart from "../chart/PieChart";
import Footer from "../../components/Footer";
export default {
  name: "HeadDashBoard",
  components: {
    Sidebar,
    Navbar,
    PieChart,
    Footer
  },

  data: function data(){
    return{
      teammember: 12,
      teamname:'Web Hunter',
      teammember_1: 10,
      teamname_1:'SSTack',
      no_team : true,
      todo: {
        name:'',
        details:'',
        department:'',
      },
      member:{
        text: '',
      },
      todos:[],
      teams:[],
      chartOptions: {
        hoverBorderWidth: 20
      },
      legend: {
        position: 'top'
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Complete", "Pending", "Overdue"],
        datasets: [
          {
            label: "Data ",
            backgroundColor: ["#41B883", "#00D8FF", "#E46651"],
            data: [4, 3, 2],
          },

        ]
      }
    }
  },
  methods:{
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    },
    memberadd(){
      this.newtask = Object.assign({}, this.member)
      this.member.text = ''
      this.todos.push(this.newtask);
      console.log(this.todos)
    },
    newTeam(){
      this.team = Object.assign({}, this.todo)
      this.todo.name = ''
      this.todo.details = ''
      this.todo.department = ''
      this.teams.push(this.team);
      this.no_team = false

    }

  }
}
</script>

<style scoped>
.headDash{
  padding: 100px 0;
}
.pie{
  width: 300px !important;
  margin: 0 auto;
  height: 300px !important;
}

.task-list li{
  text-decoration: none;
  list-style: none;
}
b-card-text hr{
  margin: 0px !important;
}
/*Modal*/

.modal-team{
  width: 600px !important;
}
.form-group{
  margin: 10px 0;
  padding: 0;
}

.add-team-member{
  display: flex;
  justify-content: space-between;

}
.member-add-box{
  width: 60%;
}
.member-add-box:focus{
  outline: 0;
  box-shadow: none;
}
.no-team{
  padding: 100px;
  text-align: center;
  color: blue;
  font-weight: bold;
}

@media (min-width:767.8px)and (max-width:991px){
.pie{
  width: 250px !important;
  margin: 0 auto;
  height: 250px !important;
}
}
</style>
