<!-- Showing off Vue's ease of styling -->

<template>
  <nav class="navbar">
    <div class="title">
      <img src="../assets/logo.svg" alt="Vue icon" width="30">
      <p id="title">ueJS Demo</p>
    </div>
    <div class="menu">
      <p><font-awesome-icon icon="bars" id="menu" /></p>
    </div>
  </nav>
</template>


<style scoped>
  .navbar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 10px;
    justify-content: space-between;
    display: flex;
  }

  .title {
    display: flex;
  }

  #title {
    font-size: xx-large;
    color: #41b883;
    font-weight: 600;
  }

  .menu {
    font-size: xx-large;
    color: #41b883;
    font-weight: 600;
    float: right;
  }
</style>