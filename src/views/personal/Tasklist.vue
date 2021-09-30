<template>
<div>
  <navbar />
  <sidebar />
  <div class="tasklist">

     <div class="task-mention">
       <div class="row no-padding">
         <div class="col-sm-7 no-padding">
           <p class="task-name">Task Name</p>
         </div>
         <div class="col-sm-1 no-padding">
           <p>Assignee</p>
         </div>
         <div class="col-sm-1 no-padding">
           <p>Due Date</p>
         </div>
         <div class="col-sm-1 no-padding">
           <p>Project</p>
         </div>
         <div class="col-sm-1 no-padding">
           <p>Priority</p>
         </div>
         <div class="col-sm-1 no-padding">
           <p class="status">Status</p>
         </div>
       </div>
     </div>

    <hr>

    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info" class="task-status">Running  > </b-button>
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="task-mention" >
              <div class="row no-padding">
                <div class="col-sm-7 no-padding">
                  <p class="task-name">{{ TaskName }}</p>
                </div>
                <div class="col-sm-1 no-padding">
                  <p>Assignee</p>
                </div>
                <div class="col-sm-1 no-padding">
                  <p>Due Date</p>
                </div>
                <div class="col-sm-1 no-padding">
                  <p>{{ ProjectName }}</p>
                </div>
                <div class="col-sm-1 no-padding" style="border-right: 1px solid black" v-bind:class="{'green' : this.green,'yellow' : this.yellow,'red' : this.red, 'normal':this.normal}">
                  <select @click="addpriority" name="Priority" id="priority" class="priority" v-bind:class="{'green' : this.green,'yellow' : this.yellow,'red' : this.red, 'normal':this.normal}">
                    <option value="1">No Priority</option>
                    <option value="2">High</option>
                    <option value="3">Medium</option>
                    <option value="4">Low</option>
                  </select>
                </div>
                <div class="col-sm-1 no-padding" >
                  <select  @click="addstatus" name="status" id="status" class="status" v-bind:class="{'green2' : this.green2,'blue' : this.blue,'red2' : this.red2, 'normal2':this.normal2}">
                    <option value="1">No Status</option>
                    <option value="2">Running</option>
                    <option value="3">Complete</option>
                    <option value="4">Over Due</option>
                  </select>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info" class="task-status">Over Due  ></b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="task-mention">
              <div class="row no-padding">
                <div class="col-sm-12 col-md-7">
                  <p class="task-name">{{ TaskName }}</p>
                </div>
                <div class="col-sm-12 col-md-1 no-padding">
                  <p>Assignee</p>
                </div>
                <div class="col-sm-12 col-md-1 no-padding">
                  <p>Due Date</p>
                </div>
                <div class="col-sm-12 col-md-1 no-padding">
                  <p>{{ ProjectName }}</p>
                </div>
                <div class="col-sm-12 col-md-1 no-padding" style="background-color: red">
                  <p>High</p>
                </div>
                <div class="col-sm-12 col-md-1 no-padding "  >
                  <p class="last-child" style="background-color: red">Over Due</p>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info" class="task-status">Complete  ></b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="task-mention">
              <div class="row no-padding">
                <div class="col-sm-12 col-md-7">
                  <p class="task-name">{{ TaskName }}</p>
                </div>
                <div class="col-sm-12 col-md-1 no-padding">
                  <p>Assignee</p>
                </div>
                <div class="col-sm-12 col-md-1 no-padding">
                  <p>Due Date</p>
                </div>
                <div class="col-sm-12 col-md-1 no-padding">
                  <p>{{ ProjectName }}</p>
                </div>
                <div class="col-sm-12 col-md-1 no-padding" >
                  <p>No Priority</p>
                </div>
                <div class="col-sm-12 col-md-1 no-padding "  >
                  <p class="last-child" style="background-color: green">Complete</p>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>

    </div>

  </div>
<Footer ></Footer>
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
    // Sidebar,
    Navbar,
    Footer
  },
  data(){
  return{
    TaskName : "Create 3 landing page",
    TaskName2 : "Complete SASS Tutorial & make a web site with SASS in 7 days",
    ProjectName:"Web Design",
    ProjectName2:"Graphics Design",
    green: false,
    red: false,
    yellow: false,
    normal: false,
    green2: false,
    red2: false,
       normal2: false,
    blue: false,
    tasklist : []
  }
  },
  methods: {
    addpriority(e){
      if (e.target.value == 2){
        this.green = false
        this.yellow = false
        this.red = true
        this.normal = false
      }
      else if (e.target.value == 3){
        this.yellow = true
        this.green = false
        this.red = false
        this.normal = false
      }
      else if (e.target.value == 4) {
        this.green = true
        this.red = false
        this.yellow = false
        this.normal = false
      }
      else if(e.target.value == 1) {
        this.normal = true
      }
    },
    addstatus(e){
      if (e.target.value == 2){
        this.blue = true
        this.green2 = false
        this.red2 = false
        this.normal2 = false
      }
      else if (e.target.value == 3){
        this.green2 = true
        this.blue = false
        this.red2 = false
        this.normal2 = false
      }
      else if (e.target.value == 4) {
        this.red2 = true
        this.green2 = false
        this.blue = false
        this.normal2 = false
      }
      else if(e.target.value == 1) {
        this.normal2 = true
      }
    }

},

}
</script>

<style scoped>
.no-padding{
  padding: 0;
}
.tasklist{
  margin: 60px ;
}


.task-mention{
  border: 1px solid #737373;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 2px 4px #3B3A3A;
}
.task-mention p{
  color: #0c0c0c;
  margin-bottom: 0px ;
  text-align: center;
  padding: 10px ;
  border-right: 1px solid black;
}
.task-mention .last-child{
  width: 93%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.task-name{
  text-align: start !important;
  padding-left: 20px !important;
}
.status{
  width: 93%;
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  /*border: none !important;*/
}
.task-status{
  width: 150px;
}
.priority, .status{

  border: none;
  cursor: pointer;
  margin-bottom: 0px;
  padding: 10px;

}

.priority:focus, .status:focus{
  border: none;
  outline: 0;
}
.green, .green2{
  background-color: green;
  font-weight: bold;
}
.yellow{
  background-color: yellow;
  font-weight: bold;
}
.red, .red2{
  background-color: red;
  font-weight: bold;
}
.blue{
  background-color: #37a7e3;
  font-weight: bold;
}
.normal, .normal2{
  background-color: white;
}
</style>
