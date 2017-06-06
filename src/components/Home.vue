<template>
    <div>
      <router-link v-bind:to="'Detail'">Home</router-link>
      <RecyclerView
      style="height: calc(100vh - 50px)"
      :fetch="fetch" 
      :item="Cards"
      :tombstone="MiTomstone"
    ></RecyclerView>
    </div>
    
</template>




<script>
import Cards from './Cards'
import MiTomstone from './Tombstone'
// import VueResource from 'vue-resource'

export default {
  name: 'home',
  props: ['listCards'],
  components: {Cards},
  data () {
    return {
      Cards,
      MiTomstone,
      i: 0
    }
  },
  methods: {
    query: function (page) {
      return this.$http.get('https://jsonplaceholder.typicode.com/photos?_page=' + page)
      .then(({status, body}) => {
        return body
      })
    },
    fetch: function (limit, skip) {
      this.i++
      return this.query(this.i)
      .then(list => {
        return {
          list: list,
          count: 500
        }
      })
    }
  }
}
</script>
