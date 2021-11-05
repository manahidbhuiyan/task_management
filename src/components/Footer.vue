<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <div class="fot-left">
              <h3>Task Management</h3>
              <p>
                Task management software are made for analysis employees or
                personal work with digital system. contact with each other, manage
                team , analysis company
              </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="fot-mid">
              <h3>Further Information</h3>
              <li>
                <router-link to="/terms_conditions"
                >Terms & Conditions</router-link
                >
              </li>
              <li><router-link to="/privacy">Privacy policy</router-link></li>
              <li><router-link to="/about">About Us</router-link></li>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="fot-right">
              <h3>Contact Us</h3>
              <p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pin-map-fill"
                    viewBox="0 0 16 16"
                >
                  <path
                      fill-rule="evenodd"
                      d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                  />
                  <path
                      fill-rule="evenodd"
                      d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                  />
                </svg>
                &nbsp; Uttara , Dhaka
              </p>
              <p>
                <b-icon icon="envelope-fill"></b-icon> &nbsp; Email :
                taskamanagement@gmail.com.bd
              </p>
              <p>
                <b-icon icon="telephone-fill"></b-icon> &nbsp; Phone : 01254154684
              </p>
            </div>
          </div>
        </div>
        <hr />
        <p class="footer-last">@2021 ! All Right Reserved TaskManagement</p>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "Footer.vue",
};
</script>

<style scoped></style>
