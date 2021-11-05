<template>
  <div>
    <div class="container">
    <div class="banner-write">
        <h1>Who We Are ?</h1>
        <p class="text-center">
          <b
            >Task management software are made for analysis employees or
            personal work with digital system. contact with each other, manage
            team , analysis company</b
          >
        </p>
        <p>
          Safetravel started its journey in 2020 with the intent to make life
          easy for the masses of Bangladesh. It began by addressing the most
          challenging problems Bangladeshis faced in their day to day life by
          digitizing the online ticket booking process. Safetravel is an
          innovative technology platform that intends to empower people by
          solving & simplifying their daily needs problem. Safetravel is on its
          way to become the trusted one stop solution for users enabling them to
          focus on enjoying their lives hassle-free.
        </p>
      </div>
    </div>

    <div class="banner-team">
      <h1 class="text-center p-3">Leadership Team</h1>
      <div class="row no-gutters">
        <div class="col-sm-12">
          <div class="team">
            <img
              class="img img-fluid rounded-circle img-thumbnail"
              src="../../assets/mahabub.jpg"
              alt="IMG"
            />
            <h5>Mahabub Alam Bhuiyan</h5>
            <p>front-End Developer</p>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-sm-6">
          <div class="team">
            <img
              class="img img-fluid rounded-circle img-thumbnail"
              src="../../assets/sagor.jpg"
              alt="IMG"
            />
            <h5>Asfaqur Alam</h5>
            <p>Back-End Developer</p>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="team">
            <img
              class="img img-fluid rounded-circle img-thumbnail"
              src="../../assets/shi.jpg"
              alt="IMG"
            />
            <h5>Raisul Kabir</h5>
            <p>Back-End Developer</p>
          </div>
        </div>
      </div>
      </div>


    <!-- mission area start -->

    <div class="mission">
      <h1>Our Mission</h1>
      <h5>
        Save People time and make life more easier and smarter by making the
        world more productive
      </h5>
    </div>

      <div class="value">
        <div class="container">
        <h1>Our Value</h1>
        <div class="row no-gutters">
          <div class="col-md-6 col-lg-4">
            <div class="box">
              <img
                class="img img-fluid"
                src="../../assets/value.png"
                alt="IMG"
              />
              <h5>We Value People</h5>
              <p>
                <small
                  >Safetravel.com is a people-centric organization. We recognize
                  that our employees and service provides are the key reason for
                  the success and growth of Shohoz.</small
                >
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="box">
              <img
                class="img img-fluid"
                src="../../assets/safe1.png"
                alt="IMG"
              />
              <h5>We Care About Safety</h5>
              <p>
                <small
                  >safetravel.com goes the extra mile to address the road safety
                  challenges in a holistic manner. We are working very hard with
                  passengers and key stakeholders to make the roads
                  safer.</small
                >
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="box">
              <img
                class="img img-fluid"
                src="../../assets/hand.png"
                alt="IMG"
              />
              <h5>We believe in empowerment</h5>
              <p>
                <small
                  >Safetravel.com gives its service providers the economic
                  empowerment to pursue a better life and offers freedom to
                  choose from its multiple services to make life easier.</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>

</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
@import "../../scss/index";

.banner-team {
  background-image: url("../../assets/about-banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
}
</style>
