<template>
  <div>
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="container">
      <div class="profesional-profile">
        <div class="row no-gutters">
          <div class="col-sm-12 col-md-3">
            <div class="pro-profile">
              <h3>Professional Profile</h3>
              <hr />
              <img
                class="img img-fluid employee_img"
                src="../../assets/demo.png"
                alt="IMG"
              />
              <div class="pro-text">
                <p><b>Employee Name : </b> {{ employee }}</p>
                <p><b>Designation : </b> {{ designation }}</p>
                <p><b>Department Name : </b> {{ department }}</p>
                <p><b>Email : </b> {{ email }}</p>
              </div>
            </div>
          </div>
          <div class="col-sm-1"></div>
          <div class="col-sm-12 col-md-8">
            <div class="my-site">
              <h3>About Me</h3>
              <hr />
              <div class="row no-gutters">
                <div class="col-sm-12 col-md-6">
                  <p><b>Name : </b> Mahabub Alam</p>
                  <p><b>Age : </b> 24</p>
                  <p><b>Email : </b> ma.nahid960@gmail.com</p>
                  <p><b>Phone : </b> 01834960466</p>
                </div>
                <div class="col-sm-12 col-md-6">
                  <p><b>Location : </b> Uttara , Dhaka</p>
                  <p><b>Degree : </b> BSc</p>
                  <p><b>Experience : </b>5 years</p>
                  <p><b>Website : </b></p>
                </div>
              </div>
              <div class="my-bio">
                <h3>Junior Developer</h3>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus dolorem dolores dolorum, enim, esse eveniet harum
                  ipsa laudantium officiis quas qui repellendus veniam vero.
                  Animi fuga quia ut vero voluptates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="team">
        <h3>My Teams</h3>
        <hr />
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <!--        <b-button block v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>-->

              <div class="row team-list">
                <div class="col-md-9">
                  <h3>Team Name : {{ teamname_1 }}</h3>
                  <p>Team Member : {{ teammember_1 }}</p>
                </div>
                <div class="col-md-3">
                  <p>Department : Web</p>
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
                    <div class="col-md-9">
                      <h3>Team Name : {{ teamname_1 }}</h3>
                    </div>
                    <div class="col-md-3">
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
                      <div class="employee-profile">
                        <div class="other-employee">
                          <img
                            class="img img-fluid "
                            src="../../assets/demo.png"
                            alt="IMG"
                          />
                        </div>
                        <div class="div">
                          <h5>{{ employee }}</h5>
                          <h6>{{ designation }}</h6>
                        </div>
                      </div>
                      <br />
                      <h3>Total task List :</h3>

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
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
import PieChart from "../chart/PieChart";
import Footer from "../../components/Footer";
export default {
  name: "Teams",
  components: { Sidebar, Navbar, PieChart, Footer },
  data() {
    return {
      company_name: "The IT Group",
      employee: "Mahabub Alam",
      designation: "Junior Developer",
      department: "Developer",
      teammember_1: 10,
      teamname_1: "SSTack",
      chartOptions: {
        hoverBorderWidth: 20,
      },
      legend: {
        position: "top",
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
        ],
      },
    };
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth() +
        1}/${current.getFullYear()}`;
      return date;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/index";

p {
  font-size: 15px;
}

.pro-profile {
  margin: 50px 0;
  padding: 10px 10px;
  border: 1px solid transparent;
  background-color: white;
  box-shadow: 0px 0px 4px #444141;
  height: 550px;
  border-radius: 10px;
  color: #3b3a3a;
}
.pro-profile p {
  margin-bottom: 0;
}
.pro-text {
  padding: 20px 0 0 0;
}
.my-site {
  margin: 50px 0 20px 0;
  padding: 10px 10px;
  border: 1px solid transparent;
  background-color: white;
  box-shadow: 0px 0px 4px #444141;
  height: 550px;
  border-radius: 10px;
  color: #3b3a3a;
}
.my-site p {
  text-align: left;
  margin-bottom: 0;
}
.my-bio {
  padding: 40px 0;
}

.team {
  margin-bottom: 60px;
  padding: 10px 10px;
  border: 1px solid transparent;
  background-color: white;
  box-shadow: 0px 0px 4px #444141;
  text-align: start !important;
}
.pie {
  width: 300px !important;
  height: 300px;
  margin: 0 auto;
}
.other-employee img {
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
.employee-profile {
  display: flex;
}
.employee-profile .div {
  padding-left: 20px;
  margin-top: 30px;
}
.team h5 {
  padding: 0;
}

@media (min-width: 767.8px) and (max-width: 991px) {
  .pie {
    width: 250px !important;
    margin: 0 auto;
    height: 250px !important;
  }
}
</style>
