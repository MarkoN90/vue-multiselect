
Vue.component('multi-select', {
  props: ['options'],
  data() {
    return {
      options: this.options,
      selectOrNot: false,
      selectStringDefault: 'Model',
      count: 0,
      message: 'Hello'

    }
  },
  template: `
    <div>
       <div class="select-box">{{ selectString }}</div>

      <ul style="border: 1px solid gray;">
      
        <li class="border-bottom"><input @click="toggleAll(selectOrNot)" type="checkbox"> Sve</li>
        <li v-for="option in options" @click="toggleOne(option)"><input v-model="option.selected" type="checkbox"> {{ option.marka }}</li>

      </ul>
    </div>
  `,
  methods: {
    toggleAll(selectOrNot) {
      this.selectOrNot = !selectOrNot;
      this.options.forEach((option) => {
        option.selected = this.selectOrNot;
      })
    },

    toggleOne(option) {
       option.selected = !option.selected;

       if(option.selected) {
         this.count++;
       } else {
         this.count--;
       }
    }
 },

 computed: {
   selectString: function() {

     if(this.count == 0) {
       return this.selectStringDefault;
     }

     if(this.count > 3) {
       return `Odabrano: ${this.count}`;
     } else {
       let selected = this.options.filter(option => option.selected == true);
       return selected.map(selected => selected.marka).join(',');

     }
   }
 }
});

let app = new Vue({
  el: '#root',
  data: {
    message: 'hi'
  }
});
