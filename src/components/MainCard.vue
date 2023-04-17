<template>
  <main class="main-container">
    <section class="profile">
      <div class="profile-column">
        <img src="../assets/profile.png" alt="profile-pic" id="profile-pic" />
        <h3>Logan McManamon</h3>
        <p>Software Developer</p>
      </div>
      <div class="social-links">
        <div class="link">
          <a href="https://github.com/loganpmcmanamon">
            <img src="../assets/github-mark.png" alt="" class="social-icon" />
            <h2>GitHub</h2>
          </a>
        </div>

        <div class="link">
          <a href="https://www.linkedin.com/in/logan-mcmanamon/">
            <img src="../assets/linkedin.png" alt="" class="social-icon" />
            <h2>LinkedIn</h2>
          </a>
        </div>
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
          <img src="../assets/logo.png" alt="" class="tech-icon" />
          <img src="../assets/postgre.png" alt="" class="tech-icon" />
        </div>
      </div>
      <div class="button-container">
        <div class="projects-button">
          <button type="button">Projects</button>
        </div>
        <div class="resume-button">
          <button type="button">Resume</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  background-color: #cecece;
}

.profile {
  border: 2px solid black;
  background-color: rgb(216, 146, 207);
  width: 30%;
  padding: 1%;
}
.about-section {
  border: 2px solid blue;
  width: 70%;
}

#profile-pic {
  max-width: 12%;
  height: auto;
  border: solid 2px red;
  border-radius: 600px;
  overflow: hidden;
}

.social-icon {
  max-width: 10%;
  height: auto;
}

.tech-icon {
  max-width: 5%;
  height: auto;
}

.link a {
  text-decoration: none;
  color: #2c3e50;
}
</style>