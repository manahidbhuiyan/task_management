<template>
  <body>
  <div >
    <navbar />
    <sidebar />

    <h3 class="text-center  py-3">Update your Profile</h3>

  <div class="box login">
   <div class="row">
     <div class="col-12">

       <div class="">
         <p class="dp-text">Avatar</p>
         <img class="img img-fluid" src="../../assets/demo.png" alt="IMG">
         <span type="button" class="dp-btn">Upload</span>
          <span type="button" class="dp-btn">Remove</span>

       </div>
   </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <label>Name : </label>
        <input type="text" v-model="name" name="" placeholder="Name" required>

        <label>Password : </label>
        <input type="text" v-model="address" name="" placeholder="Address" required>

        <label>Designation : </label>
        <input type="text" v-model="designation" name="" placeholder="Designation" required>

        <label>Address : </label>
        <input type="text" v-model="address" name="" placeholder="Department" required>


        <label>Work Experience (if have) : </label>
        <input type="text" v-model="experience" name="" placeholder="Personal Experience (if have)" >


      </div>


      <div class="col-md-6">
        <label>Email id : </label>
        <input type="email" v-model="email" name="" placeholder="Email id" required>


        <label>Phone Number : </label>
        <input type="number" v-model="number" name="" placeholder="Phone Number" required>

        <label>Department : </label>
        <input type="text" v-model="department" name="" placeholder="Designation" required>


        <label>Educational Background : </label>
        <input type="text" v-model="degree" name="" placeholder="Educational Background" >

        <label>Personal Website (if have) : </label>
        <input type="text" v-model="website" name="" placeholder="Personal Website (if have)" >


      </div>
    </div>

   <div class="row">
     <div class="col-12">
       <div class="input_field">
         <label class="description"> Description : </label>
         <textarea class="textarea" v-model="details" placeholder="About me"></textarea>
       </div>
     </div>
   </div>

    <div class="profile-btn">
      <button class="btn btn-dark btn-cancel">Cancel</button>
      <button type="submit" @click="update_profile" class="btn btn-primary btn-done ">Save Change</button>
    </div>
  </div>
<Footer></Footer>
  </div>

  </body>
</template>

<script>
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
export default {
  name: "Profile",
  components: {Sidebar, Navbar,Footer},
  data(){
    return{
        name:'',
        email:'',
        number:'',
        designation:'',
        department: '',
        address:'',
        details:'',
        degree : '',
      experience: '',
      website : '',


    }
  },
  methods:{
    update_profile(){
      console.log(this.name + this.email+ this.number+ this.designation+ this.department+ this.address + this.details + this.degree + this.experience + this.website )
    }
  }
}
</script>

<style scoped>

/* box */
body{
  height: 100vh ;
  background: -webkit-linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
  background: -o-linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
  background: -moz-linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
  background: linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
  background-size: cover;
  background-position: 50% 21%;
  font-family: sans-serif;
}

.box{
  box-sizing: border-box;
  max-width: 60%;
  border-radius: 5px;
  background-color: white;
  overflow: hidden;
  margin: 100px auto;
  border: none;
  padding: 20px;

}

img{
  box-sizing: border-box;
  width: 75px;
  border-radius: 50%;
  border: 5px solid white ;
  padding: 3px ;
  margin-left: 2%;
  margin-bottom: 20px;
}
.dp-btn{
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: -5px;
  position: relative;
  top: -10px;
}
.dp-text{
  margin-left: 3%;
  margin-bottom: 0px !important;
}
.dp-btn:first-child{
  color: #4158d0;
}
.dp-btn:hover{
  color: #3B3A3A;
  box-shadow: 2px 2px 2px #3B3A3A;
}
label{
  margin-left: 5%;
  margin-bottom: 10px;
}
.description{
  margin-left: 2.5%;
  margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
input[type="number"]{
  display: block;
  box-sizing: border-box;
  background: #f3f5f7;
  color: black;
  padding: 10px;
  width: 90%;
  height: 32px;
  border: none;
  border: 1px solid #f3f5f7;
  border-radius: 3px;
  /* font-family: "Robot",sans-serif; */
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;
  margin: 0 auto 20px;

}

.input_field .textarea,
input[type="text"]:focus,
input[type="email"]:focus
input[type="number"]:focus{
  border: 2px solid #f3f5f7;
  border-radius: 5px;
  font-size: 15px;
  transition: 0.2s ease;
  outline: none;

}

.input_field .textarea{
  resize: none;
  height: 125px;
  display: block;
  box-sizing: border-box;
  background: #f3f5f7;
  color: black;
  padding: 10px;
  width: 95%;
  border-radius: 3px;
  border: 1px solid #f3f5f7;
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;
  margin: 0 auto 20px;
}
.profile-btn{
  display: flex;
  justify-content: space-around;
}
button{
  border: 1px solid black;
  color: white;
  width: 300px;
  border-radius: 5px;
  margin: 0px;
  transition: all 0.3s;
  cursor: pointer;
}
button:hover{
  transform: scale(1.1);
  color: white;
}
button:focus{
  outline: 0;
  box-shadow: none;
}

/*.btn-cancel{*/
/*  float: left;*/
/*  margin: 10px 0 0 18.2%;*/

/*}*/

/*.btn-done{*/
/*  float: right;*/
/*  margin: 10px 18.2% 0 0;*/

/*}*/


@media (min-width:992px) and (max-width:1199.98px){

  button{
    width: 250px;
  }
}

@media (min-width:768px) and (max-width:991.98px){
  .box {
    max-width: 100%;
    margin: 0px;
    padding: 20px 0;
  }
}

@media (min-width:576px) and (max-width:767.98px){
  .box {
    max-width: 100%;
    height: auto;
    margin: auto;
    padding: inherit;
  }
  .input_field .textarea{
    width: 90%;
  }
  .profile-btn{
    flex-direction: column;
    text-align: center;
  }

}

@media(max-width:575.98px){

  .box {
    max-width: 100%;
    margin: 0px;
    padding: 10px 0;
  }
  .input_field .textarea{
    width: 90%;
  }
  .profile-btn{
    flex-direction: column;
    text-align: center;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  button{
    width: 200px;
    margin-bottom: 10px;

  }
}
</style>
