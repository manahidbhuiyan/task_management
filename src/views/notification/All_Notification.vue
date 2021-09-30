<template>
  <div>
    <div class="container">

        <b-jumbotron class="notification"
                     v-for="(task,index) in todos" :key="index">
          <div class="task-info">
            <h3>{{ task.TaskSub }}</h3>
            <h6> {{ task.TaskName }} </h6>
          </div>
          <hr>
          <div class="warning">
            <p>This Task Remaning 24 Hours Only</p>
            <b-button variant="success" href="#" @click="remove"> x </b-button>
          </div>
        </b-jumbotron>



        <br>
        <b-jumbotron class="notification"
                     v-for="(task,index) in duetask" :key="index">
          <div class="task-info">
            <h3>{{ task.TaskSub1 }}</h3>
            <h6> {{ task.TaskName1 }} </h6>
          </div>
          <hr>
          <div class="warning">
            <div>
              <b-button variant="danger" style="margin-right: 15px"> Over Due </b-button>
              <b-text style="color: red; margin-right: 15px"> {{  task.DueDate }} </b-text>
              <b-text> {{ today(date) }} </b-text>
            </div>
            <b-button variant="success" href="#" @click="removedue(index)"> x </b-button>
          </div>
        </b-jumbotron>
        <br>
        <b-jumbotron class="notification"
                     v-for="(task,index) in duetask" :key="index">
          <div class="task-info">
            <h3>{{ task.TaskSub1 }}</h3>
            <h6> {{ task.TaskName1 }} </h6>
          </div>
          <hr>
          <div class="warning">
            <div>
              <b-button variant="danger" style="margin-right: 15px"> Over Due </b-button>
              <b-text style="color: red; margin-right: 15px"> {{  task.DueDate }} </b-text>
              <b-text> {{ today(date) }} </b-text>
            </div>
            <b-button variant="success" href="#" @click="removedue(index)"> x </b-button>
          </div>
        </b-jumbotron>
        <br>
        <b-jumbotron class="notification"
                     v-for="(task,index) in duetask" :key="index">
          <div class="task-info">
            <h3>{{ task.TaskSub1 }}</h3>
            <h6> {{ task.TaskName1 }} </h6>
          </div>
          <hr>
          <div class="warning">
            <div>
              <b-button variant="danger" style="margin-right: 15px"> Over Due </b-button>
              <b-text style="color: red; margin-right: 15px"> {{  task.DueDate }} </b-text>
              <b-text> {{ today(date) }} </b-text>
            </div>
            <b-button variant="success" href="#" @click="removedue(index)"> x </b-button>
          </div>
        </b-jumbotron>

    </div>
  </div>
</template>

<script>


import moment from "moment";
export default {
  name: "New_Notification",

  data() {
    return {

      todos : [
        {TaskSub : "Web Design",
          TaskName : "Create 3 Landing Page with responsive"}
      ],
      duetask: [
        {
          TaskSub1 : "Learning Update",
          TaskName1 : "Complete Sass tutorial in 5 days and give feedback",
          DueDate : "22 Aug, 2021",
        }
      ]

    }

  },
  methods:{
    // DueDate(date){
    //   return '10 Aug, 2021'
    // },
    today(date) {
      return moment(date).format('lll')

    },
    remove(index){
      if(confirm("Are You Sure? You Want to remove this Item")){
        this.todos.splice(index,1)
      }
    },
    removedue(index){
      if(confirm("Are You Sure? You Want to remove this Item")){
        this.duetask.splice(index,1)
      }
    },

  }

}
</script>

<style scoped>

.notification{
  margin:0;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #b3aeae;
}
.task-info, .warning{
  padding:10px;
}
.warning{
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.warning p{
  margin-bottom: 0px;
  color: red;
  font-weight: bold;
  margin-top: 5px;
}
hr{
  margin: 0;
}
</style>
