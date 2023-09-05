const vm = Vue.createApp({
  data() {
    return {
      items: [
        {
          name: 'Milk',
          price: 1.5
        },
        {
          name: 'Beer',
          price: 3.1
        },
        {
          name: 'Juice',
          price: 2.5
        }
      ],
      countries: {
        us: 'United States',
        de: 'Germany',
        br: 'Brazil'
      }
    }
  },
}).mount('#app');