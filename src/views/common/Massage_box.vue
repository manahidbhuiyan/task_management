<template>
  <div>
    <navbar/>
    <sidebar/>
    <div class="container">
      <div class="heading"><h3>Massage Box</h3></div>
      <div class="head">
        <div class="head-left">
          <a href="#">New</a>
          <a href="#">See All</a>
        </div>
        <div class="head-right">
          <a href="#">Assigned me</a>
          <a href="#">Massage I've Sent</a>

        </div>
      </div>

      <div class="notification">

        <div>
          <b-button class="btn msz-btn" @click="modalShow = !modalShow">Send Massage</b-button>

          <b-modal v-model="modalShow" title="New Massage"  hide-footer>
            <input class="send-msz" type="text" placeholder="Add Subject" v-model="msz.subject">
            <input class="send-msz" type="email" placeholder="To : " required v-model="msz.email">
            <textarea class="send-msz" name="" id="" rows="10" placeholder="You can use @ to mention" v-model="msz.text"></textarea>
<!--            <footer class="modal-footer">-->
<!--              <b-button type="button" class="btn btn-secondary" data-dismiss="modal">Close</b-button>-->
<!--              <b-button type="submit" class="btn btn-primary" @submit.prevent="addmsz">send</b-button>-->
<!--            </footer>-->
            <button type="submit" class="btn btn-primary" @click="addmsz">Send</button>
          </b-modal>

        </div>
        <hr>
        <div class="massage-show">
          <div class="row msz-group">
            <div class="col-sm-6 col-border">
              <p>Massage Name</p>
            </div>
            <div class="col-sm-3 col-border">
              <p>Colaborations</p>
            </div>
            <div class="col-sm-3 col-border">
              <p>Teams</p>
            </div>
          </div>

<!--          <div class="row msz-group-item" >-->
<!--            <div class="col-sm-6 col-border">-->
<!--              <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">-->
<!--                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>-->
<!--              </svg> &nbsp; Complete your defense project as soon as possible</p>-->
<!--            </div>-->
<!--            <div class="col-sm-3 col-border">-->
<!--              <b-avatar variant="info" src="https://placekitten.com/30/30" ></b-avatar>-->
<!--            </div>-->
<!--            <div class="col-sm-3 col-border">-->
<!--              <p>Web Hunter</p>-->
<!--            </div>-->
<!--          </div>-->
          <div class="no-massage" v-if="awesome">
            <p>You have no massage</p>
          </div>


            <div id="my-table"
                 class="row msz-group-item " v-for="(msz,index) in newmsz" :key="index" @click="showModal(msz)" v-bind:class="{ active: mszActive }" :page-count="4" >
              <div class="col-sm-6 col-border">
                <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                </svg> {{ msz.text }}</p>
              </div>
              <div class="col-sm-3 col-border">
                {{ msz.email }}
                <!--              <div class="colabor-image">-->
                <!--                <b-avatar variant="info" src="https://placekitten.com/30/30" ></b-avatar>-->
                <!--                <b-avatar variant="info" src="https://placekitten.com/30/30" ></b-avatar>-->
                <!--              </div>-->
              </div>
              <div class="col-sm-3 col-border">
                <p>Web Hunter</p>
              </div>
            </div>



            <b-modal  ref="my-modal" hide-footer hide-header>
              <div class="div">
              <div class="h3"><bold>Subject : </bold>{{ modalMsz.subject }}</div>
                <hr>
              <div class="d-block ">
                <p>{{ modalMsz.text }}</p>
                <hr>
                <small><bold>Your email : </bold>{{ modalMsz.email }}</small><br>
                <small>  Author email :   {{ modalMsz.author }} </small><br>
                <small>  date :   {{ modalMsz.msztime }}</small>
                <!--              <h3>{{ msz.text }}</h3>-->
              </div>
              <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
              </div>
            </b-modal>

        </div>



      </div>

    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";



export default {
  name: "Notification",
  components: {Navbar,
    Sidebar,
  Footer
  },
  data() {
    return {
      page: 3,
      modalShow: false,
      awesome: true,
      msz: {
        subject: "",
        email: "",
        text: "",
        author: "mahabub15-10794@diu.edu.bd",
        msztime : new Date(),
        perPage: 3,
        currentPage: 1
      },
      newmsz: [],
      modalMsz: {}
    }
  },
  methods: {
    addmsz() {
      this.mewmassage = Object.assign({}, this.msz)
      this.msz.text = ''
      this.msz.duDate = ''
      this.msz.category = ''
      this.newmsz.push(this.mewmassage);
      this.modalShow = !this.modalShow
      this.awesome = false
      console.log(this.newmsz)


    },
    showModal(msz) {
      this.modalMsz = Object.assign({}, msz);
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
            this.subject = ""
            this.email = ""
            this.text = ""
            this.author = ""


    },
  },
}
</script>

<style scoped>
.heading h3{
  margin-top: 50px;
}
.head{
  display: flex;
  justify-content: space-between;
}
.head-left{
  display: flex;
}
.head-left a, .head-right a{
  margin-left: 20px;
  color: #3B3A3A;
  text-decoration: none;
  padding: 5px;
}
.head-left a:first-child{
  margin-left: 0;
}
.head-left a:hover{
  border-bottom: 1px solid #37a7e3;
}
.head-right a:hover{

  border-radius: 30px;
  background-color: #37a7e3;
  transition: 0.2s ;
}

.notification{
  margin-top: 10px;
  padding: 20px 10px;
  background-color: #fff;
}

.msz-btn{
  background: #fff !important;
  color: black !important;
  border: 1px solid black;
  margin-right: 20px;
}
.msz-btn:focus{
  box-shadow: none;
  outline: 0;
}
.send-msz{
  width: 100%;
  margin: 5px 0;
  border: none;
  border-bottom: 1px solid #6e6a6a !important;
}
.massage-show{
  padding: 10px;
}

.msz-group p, .msz-group-item p{
  margin-bottom: 0px;
}
.col-border{
  border-left: 1px solid #3B3A3A;
  border-right: 1px solid #3B3A3A;
  border-bottom: 1px solid #3B3A3A;
  padding: 5px;
}
.col-border:first-child{
  border-left: none;
}
.col-border:last-child{
  border-right: none;
}
.msz-group-item{
  cursor: pointer;
}
.msz-group-item:hover{
  background-color: #c9c9c9;
}
.no-massage{
  padding: 100px;
  text-align: center;
}

</style>
