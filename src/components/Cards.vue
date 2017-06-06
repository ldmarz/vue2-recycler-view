<template>
    <div class="column is-12 is-mobile" @click="click(data.id)">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="data.thumbnailUrl" alt="Image" class="image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Lenin martinez</p>
              <p class="subtitle is-6">@ldmarz </p>
              
            </div>
          </div>

          <div class="content">
            {{data.title}}<br>

            <b>album: </b> <a>#{{data.albumId}}</a>
            <br>
            <small>{{Date.now()}}</small>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
console.log(VueRouter)

export default {
  props: {
    data: Object
  },
  methods: {
    click: function (id) {
      console.log(id)
    }
  }
}
</script>
