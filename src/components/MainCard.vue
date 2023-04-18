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
        <router-link v-bind:to="{name: 'portfolio'}">
        <div class="projects-button">
          <button type="button">Projects</button>
        </div>
        </router-link>

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
  border-radius: 40px;
}

.profile {
  border-radius: 40px;
  background-color: rgb(161, 146, 216);
  width: 30%;
  padding: 1%;
}
.about-section {
  width: 70%;
}


.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.projects-button{
    margin: 5px;
    padding: 5px;
}

.resumer-button{
    padding: 5px;
    margin: 5px;
}

#about-me {
  text-align: left;
  margin: 2%;
}

#profile-pic {
  max-width: 20%;
  height: auto;
  border: solid 1px black;
  border-radius: 600px;
  overflow: hidden;
}

.social-icon {
  max-width: 10%;
  height: auto;
}

.tech-icon {
  max-width: 4%;
  height: auto;
  margin: 5px;
}

.link a {
  text-decoration: none;
  color: #2c3e50;
}

.projects-button button {
  background-color: white;
  color: #2c3e50;
  border: 2px solid red;
  border-radius: 12px;
  transition-duration: 0.4s;
  font-size: 20px;
}

.projects-button button:hover {
  background-color: red;
  color: white;
}

.resume-button button {
  background-color: white;
  color: #2c3e50;
  border: 2px solid blue;
  border-radius: 12px;
  transition-duration: 0.4s;
  font-size: 20px;
}

.resume-button button:hover {
  background-color: blue;
  color: white;
}
</style>