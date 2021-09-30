<template>
  <div>
    <navbar />
    <sidebar />
    <div class="headDash">
      <div class="container">

        <div class="dash">
          <div class="dashboard" v-bind:class="{newdash}">
            <div class="row no-gutters">
              <div class="col-sm-3">
                <div>
                  <b-card title="Total Task" sub-title="0">
                    <b-card-text>Task Count</b-card-text>
                  </b-card>
                </div>
              </div>
              <div class="col-sm-3">
                <b-card title="Complete Task" sub-title="0">
                  <b-card-text>Task Count</b-card-text>
                </b-card>
              </div>
              <div class="col-sm-3">
                <b-card title="Pending Task" sub-title="0">
                  <b-card-text>Task Count</b-card-text>
                </b-card>
              </div>
              <div class="col-sm-3">
                <b-card title="OverDue Task" sub-title="0">
                  <b-card-text>Task Count</b-card-text>
                </b-card>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-lg-8 col-md-6 col-sm-12">
                <div class="bar-area">
                  <div class="bar">
                    <BarChart />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="pie-area">
                  <div class="pie">
                    <pie-chart :legend="legend" :data="chartData" :options="chartOptions"></pie-chart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row">

          <div class="col-md-12">

            <div class="accordion" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <!--        <b-button block v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>-->

                  <div class="row team-list" >

                    <div class="col-md-9">
                      <h3>Team Name : {{ teamname_1 }}</h3>
                      <p>Team Member : {{ teammember_1 }}</p>
                    </div>
                    <div class="col-md-3">
                      <p>Department : Web</p>
                      <button type="button"  block v-b-toggle.accordion-3 variant="info" class="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </b-card-header>


                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="row">
                        <div class="col-md-9">  <h3>Team Name : {{ teamname_1 }}</h3></div>
                        <div class="col-md-3">Total Member : {{ teammember_1 }}</div>
                      </div>
                      <br>
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
                          <div class="employee-profile">
                            <div class="other-employee">
                              <img class="img img-fluid " src="../../assets/demo.png" alt="IMG">
                            </div>
                            <div class="div">
                              <h6> {{ employee }} </h6>
                              <h6> {{ designation }} </h6>
                            </div>
                          </div>
                          <br>
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
<Footer></Footer>
  </div>
</template>

<script>
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/navbar";
import PieChart from "../chart/PieChart";
import BarChart from "../chart/BarChart";
import Footer from "../../components/Footer";

export default {
name: "LeadDashboard",
  components: {
    Sidebar,
    Navbar,
    PieChart,
    BarChart,
    Footer
  },

  data: function data(){
    return{
      teammember_1: 10,
      teamname_1:'SSTack',
      employee : "Ishita khanom",
      designation : "Senior Developer",
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
    }
  }

}
</script>

<style scoped>
.headDash{
  padding: 20px 0;
}
.team-list{
  padding: 10px;
}
.bar{
  width: 80%;
  margin: 0 auto;
  height: 400px;
}

.pie{
  width: 380px !important;
  margin: 0 auto;
  height: 400px !important;
}

.bar-area , .pie-area{
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin: 20px 0;
  padding: 10px;
}

.task-list li{
  text-decoration: none;
  list-style: none;
}
.other-employee img{
  width: 100px;
  border-radius: 50%;
}
.employee-profile{
  display: flex;

}
.employee-profile .div{
  padding-left: 20px;
  margin-top: 30px;
}

@media (min-width:767.8px)and (max-width:991px){
  .pie{
    width: 250px !important;
    margin: 0 auto;
    height: 250px !important;
  }
}
@media (max-width:767px){
  .pie{
    width: 250px !important;
    margin: 0 auto;
    height: 250px !important;
  }
  .bar-area , .pie-area{

    margin: 10px 0;
    padding: 10px;
  }
}


</style>
