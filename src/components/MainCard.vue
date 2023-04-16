<template>
  <main class="main-container">
      <section class="profile">
          <div class="profile-column">
              <img src="../assets/profile.png" alt="profile-pic" id="profile-pic">
              <h3>Logan McManamon</h3>
              <p>Software Developer</p>
          </div>
          <div class="social-links">
              <a href="#">
                  <div class="link">
                      <img src="../assets/github-mark.png" alt="" class="social-icon">
                      <h2>GitHub</h2>

                  </div>
              </a>
              <a href="#">
                  <div class="link">
                      <img src="../assets/linkedin.png" alt="" class="social-icon">
                      <h2>LinkedIn</h2>
                  </div>
              </a>
          </div>
      </section>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
#profile-pic{
    max-width: 8%;
    height: auto;
}

.social-icon{
    max-width: 4%;
    height: auto;
}


</style>