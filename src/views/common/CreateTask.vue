<template>
  <div>
    <navbar />
    <sidebar />
    <div class="create">
      <div class="container">
        <form @submit.prevent="addTodo">
          <div class="create-task">
            <div class="row">
              <div class="col-lg-8 border-design">
                <input
                  class="task-input"
                  v-model="todo.tasktext"
                  type="text"
                  placeholder="Add New Task"
                />
              </div>
              <div class="col-lg-2 border-design">
                <section>
                  <date-picker
                    class="daterange"
                    v-model="todo.duDate"
                    type="date"
                    range
                    placeholder="Date range"
                  ></date-picker>
                </section>
              </div>
              <div class="col-lg-2 border-design">
                <input
                  class="task-input"
                  v-model="todo.category"
                  type="text"
                  placeholder="Add Category"
                />
              </div>
            </div>
          </div>
          <div class="submit-form ms-2">
            <button type="submit" class="btn add-task common-btn">
              Add Task
            </button>
          </div>
        </form>

        <button type="button" class="btn addbutton common-btn">
          Recently Assigned
          <span><b-icon class="arrow-right" icon="arrow-right"></b-icon></span>
        </button>
        <div class="row create-task">
          <div class="col-lg-8 border-design">
            <h5>Task Name</h5>
          </div>
          <div class="col-lg-2 border-design">
            <h5 class="daterange">Time [ From - To ]</h5>
          </div>
          <div class="col-lg-2 border-design">
            <h5>Task Category</h5>
          </div>
        </div>

        <div
          class="row create-task"
          v-for="(task, index) in todos"
          :key="index"
          v-bind:class="{ 'todo-item-done': task.done }"
        >
          <h3>
            <input
              v-if="todos[index].edit"
              v-model="todo.todoedit"
              @keydown.enter="editupdate(index)"
              type="text"
            />
          </h3>
          <div
            class="col-lg-8 border-design"
            style="display: flex;justify-content: space-between"
          >
            <h3>{{ task.tasktext }}</h3>
            <div class="modify">
              <button class="btn btn-sm" @click="Edit(index)">
                <b-icon icon="pencil"></b-icon>
              </button>
              <button
                v-if="!task.done"
                @click="masrkasdone(index)"
                class="btn btn-sm "
              >
                <b-icon icon="check-circle"></b-icon>
              </button>
              <button v-else @click="markasundone(index)" class="btn btn-sm">
                <b-icon icon="arrow-counterclockwise"></b-icon>
              </button>
              <button @click="remove(index)" class="btn btn-sm">
                <b-icon icon="x-circle"></b-icon>
              </button>
            </div>
          </div>
          <div class="col-lg-2 border-design datasetup">
            <span class="datestyle " v-for="date in task.duDate" :key="date">{{
              daterange(date)
            }}</span>
          </div>

          <div class="col-lg-2 border-design">
            <h3>{{ task.category }}</h3>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/navbar";
import moment from "moment";
import Footer from "../../components/Footer";

export default {
  name: "CreateTask",
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
  data() {
    return {
      todo: {
        tasktext: "",
        duDate: "",
        category: "",
        done: false,
        todoedit: "",
        edit: false,
      },

      todos: [],
    };
  },

  methods: {
    addTodo() {
      this.newtask = Object.assign({}, this.todo);
      this.todo.tasktext = "";
      this.todo.duDate = "";
      this.todo.category = "";
      this.todos.push(this.newtask);
      console.log(this.todos);
    },
    daterange(date) {
      return moment(date).format("ll");
    },
    remove(index) {
      if (confirm("Are You Sure? You Want to remove this Item")) {
        this.todos.splice(index, 1);
      }
    },
    masrkasdone(index) {
      this.todos[index].done = true;
    },
    markasundone(index) {
      this.todos[index].done = false;
    },
    Edit(index) {
      this.todos[index].edit = true;
      console.log(index);
    },
    editupdate(index) {
      this.todos[index].tasktext = this.todos.todoedit.value;
      this.todos.todoedit.value = "";
      this.todos[index].edit = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/index";
</style>
