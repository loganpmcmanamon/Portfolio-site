<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact id="home" class="nav-link"
          >Home</router-link
        >
      </li>
      <li>
        <router-link v-bind:to="{name: 'portfolio'}" class="nav-link">Portfolio</router-link>
      </li>
      <li>
        <router-link v-bind:to="{name: 'contact'}" class="nav-link">Connect</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

.nav-link {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav-link:hover{
    background-color: #111;
}

.nav-link.router-link-active{
    background-color: #0423aa;
}
</style>