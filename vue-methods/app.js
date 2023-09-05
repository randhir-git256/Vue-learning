const app = Vue.createApp({
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++;
    }
  }
});
const vm = app.mount('#app');



// All reactive properties, computers, properties and other methods are available under this keyword