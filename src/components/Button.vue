<!-- Showing off Vue's ease of scripting -->

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },

    methods: {
      increment() {
        this.count++;
      },

      decrement() {
        this.count--;
      },

      reset() {
        this.count = 0;
      }
    }
  }
</script>

<template>
  <div class="content">
    <div class="counter">
      <p>Count: {{ count }}</p>
    </div>
    <div class="buttons">
      <button @click="decrement()" id="incButton">Count -1</button>
      <button @click="reset()" id="incButton">Reset Count</button>
      <button @click="increment()" id="incButton">Count +1</button>
    </div>
  </div>
</template>

<style scoped>
  .content {
    display: table-column;
    /* justify-items: center; */
    left: 50%;
    background-color: hsla(1, 100%, 0%, 0.5);
    border-radius: 5px;
    padding: 20px;
  }
  .counter {
    display: block;
    place-items: center;
    justify-content: center;
    font-size: xx-large;
    margin-bottom: 20px;
    margin-left: 25%;
  }
  .buttons {
    display: flex;
    place-items: center;
    justify-content: center;
  }

  #incButton {
    font-size: large;
  }
</style>