<template>
  <main class="main-container">
    <section class="profile">
      <div class="profile-column">
        <img src="../assets/profile.png" alt="profile-pic" id="profile-pic" />
        <h3>Logan McManamon</h3>
        <p>Software Developer</p>
      </div>
      <div class="social-links">
        <a href="https://github.com/loganpmcmanamon">
          <div class="link">
            <img src="../assets/github-mark.png" alt="" class="social-icon" />
            <h2>GitHub</h2>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/logan-mcmanamon/">
          <div class="link">
            <img src="../assets/linkedin.png" alt="" class="social-icon" />
            <h2>LinkedIn</h2>
          </div>
        </a>
      </div>
    </section>
    <section class="about-section">
      <article id="about-me">
        <h1>About Me</h1>
        <p>
          As a highly motivated individual with a passion for problem solving
          and a desire to explore new opportunities, I am excited to make the
          transition from food service to tech. I am eager to bring my strong
          work ethic, adaptability, and customer service skills to a new role as
          a software developer. While my background may not be in tech, I have
          always been drawn to the field and have spent countless hours learning
          about programming and exploring various technologies. I am excited to
          build on this foundation and continue to grow my skillset as a
          software developer, working alongside talented professionals who are
          passionate about creating innovative solutions.
        </p>
      </article>
      <div class="tech-section">
          <h1>Technologies:</h1>
          <div class="logos">
              <img src="../assets/java.png" alt="" class="tech-icon" />
              <img src="../assets/java-script.png" alt="" class="tech-icon" />
              <img src="../assets/logo.png" alt="" class="tech-icon">
              <img src="../assets/postgre.png" alt="" class="tech-icon">

          </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.profile{
    border: 2px solid black;
    margin-bottom: 5px;
}
.about-section{
    border: 2px solid blue;
}

#profile-pic {
  max-width: 8%;
  height: auto;
}

.social-icon {
  max-width: 4%;
  height: auto;
}

.tech-icon{
    max-width: 5%;
    height: auto;
}
</style>