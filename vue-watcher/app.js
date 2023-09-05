const vm = Vue.createApp({
  data() {
    return {
      name: '',
      gender: 'Unknown'
    };
  },
  computed: {
    prefix() {
      switch (this.gender) {
        case 'male': return "Mr ";
        case 'female': return 'Ms ';
        default: return '';
      }
    },
    message() {
      return `Hello ${this.prefix}${this.name}`;
    }
  },
  watch: {
    name(newName, oldName) {
      console.log(newName);
      console.log(oldName);

      fetch(`https://api.genderize.io?name=${newName}`)
        .then(response => response.json())
        .then(json => {
          // Update gender and trigger message recomputation
          this.gender = json.gender;
        });
    }
  }
}).mount('#app');
