<template>
  <div>
    <navbar />
    <sidebar />

    <h3 class="text-center profile-head"><b>Update Your Profile</b></h3>

    <div class="profile-box profile-login">
      <div class="row">
        <div class="col-12">
          <div class="">
            <p class="dp-text">Avatar</p>
            <img class="img img-fluid" src="../../assets/demo.png" alt="IMG" />
            <span type="button" class="dp-btn">Upload</span>
            <span type="button" class="dp-btn">Remove</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <label>Name : </label>
          <input
            type="text"
            v-model="name"
            name="name"
            placeholder="Name"
            required
          />

          <label>Password : </label>
          <input
            type="text"
            v-model="address"
            name="password"
            placeholder="Password"
            required
          />

          <label>Designation : </label>
          <input
            type="text"
            v-model="designation"
            name="designation"
            placeholder="Designation"
            required
          />

          <label>Address : </label>
          <input
            type="text"
            v-model="address"
            name="address"
            placeholder="Address"
            required
          />

          <label>Work Experience (if have) : </label>
          <input
            type="text"
            v-model="experience"
            name="experience"
            placeholder="Professional Experience (if have)"
          />
        </div>

        <div class="col-md-6">
          <label>Email id : </label>
          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="Email id"
            required
          />

          <label>Phone Number : </label>
          <input
            type="number"
            v-model="number"
            name="number"
            placeholder="Phone Number"
            required
          />

          <label>Department : </label>
          <input
            type="text"
            v-model="department"
            name="department"
            placeholder="Department"
            required
          />

          <label>Educational Background : </label>
          <input
            type="text"
            v-model="degree"
            name="education"
            placeholder="Educational Background"
          />

          <label>Personal Website (if have) : </label>
          <input
            type="text"
            v-model="website"
            name="website"
            placeholder="Personal Website (if have)"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="input_field">
            <label class="description"> Description : </label>
            <textarea
              class="textarea"
              v-model="details"
              placeholder="About me"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="profile-btn">
        <button class="btn btn-dark ">Cancel</button>
        <button type="submit" @click="update_profile" class="btn btn-primary ">
          Save Change
        </button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
export default {
  name: "Profile",
  components: { Sidebar, Navbar, Footer },
  data() {
    return {
      name: "",
      email: "",
      number: "",
      designation: "",
      department: "",
      address: "",
      details: "",
      degree: "",
      experience: "",
      website: "",
    };
  },
  methods: {
    update_profile() {
      console.log(
        this.name +
          this.email +
          this.number +
          this.designation +
          this.department +
          this.address +
          this.details +
          this.degree +
          this.experience +
          this.website
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/index";

/* box */
.profile-head {
  margin: 100px 0 -80px;
}
.profile-box {
  box-sizing: border-box;
  max-width: 60% !important;
  border-radius: 5px;
  background-color: white;
  overflow: hidden;
  margin: 100px auto;
  border: none;
  padding: 20px;
}

img {
  box-sizing: border-box;
  width: 75px;
  border-radius: 50%;
  border: 5px solid white;
  padding: 3px;
  margin-left: 2%;
  margin-bottom: 20px;
}
.dp-btn {
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: -5px;
  position: relative;
  top: -10px;
}
.dp-text {
  margin-left: 3%;
  margin-bottom: 0px !important;
}
.dp-btn:first-child {
  color: #4158d0;
}
.dp-btn:hover {
  color: #3b3a3a;
  box-shadow: 2px 2px 2px #3b3a3a;
}
label {
  margin-left: 5%;
  margin-bottom: 10px;
}
.description {
  margin-left: 2.5%;
  margin-bottom: 10px;
}

input[type="text"],
input[type="email"],
input[type="number"],
input[type="password"] {
  display: block;
  box-sizing: border-box;
  background: #f3f5f7;
  color: black;
  padding: 10px;
  width: 90%;
  height: 32px;
  border: none;
  //border: 1px solid #f3f5f7;
  border-radius: 3px;
  /* font-family: "Robot",sans-serif; */
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;
  margin: 0 auto 20px;
}

.input_field .textarea,
input[type="text"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="password"]:focus {
  //border: 2px solid #f3f5f7;
  border-radius: 5px;
  font-size: 15px;
  transition: 0.2s ease;
  outline: none;
}

.input_field .textarea {
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
.profile-btn {
  display: flex;
  justify-content: space-around;
}
button {
  border: 1px solid black;
  color: white;
  width: 300px;
  border-radius: 5px;
  margin: 0px;
  transition: all 0.3s;
  cursor: pointer;
}
button:hover {
  transform: scale(1.1);
  transition: 0.3s;
}
button:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  button {
    width: 250px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .profile-box {
    max-width: 100%;
    margin: 0px;
    padding: 20px 0;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .profile-box {
    max-width: 100%;
    height: auto;
    margin: auto;
    padding: inherit;
  }
  .input_field .textarea {
    width: 90%;
  }
  .profile-btn {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 575.98px) {
  .profile-box {
    max-width: 100%;
    margin: 0px;
    padding: 10px 0;
  }
  .input_field .textarea {
    width: 90%;
  }
  .profile-btn {
    flex-direction: column;
    text-align: center;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  button {
    width: 200px;
    margin-bottom: 10px;
  }
}
</style>
