const vm = Vue.createApp({
  data() {
    return {
      price: 4,
      items: 0
    }
  },
  computed: {
    taxRate() {
      return this.taxRate;
    },
    includingVat() {
      return this.price * taxRate
    }
  }
}).mount('#app');