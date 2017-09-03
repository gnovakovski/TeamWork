<template>
  <div id="events-feed">

    <md-list class="md-triple-line">

      <md-list-item v-for="event in events" :key="event._id">
        <item-event :event="event"></item-event>
        <md-divider></md-divider>
      </md-list-item>

    </md-list>

  </div>
</template>

<script>
  // import axios from 'axios'

  import ItemEvent from '@/components/Event/ItemEvent.vue'

  export default {
    components: {
      ItemEvent
    },
    data: () => ({
      events: []
    }),
    methods: {
      fetchEvents () {
      }
    },
    created () {
      this.fetchEvents()
    }
  }
</script>

<style scoped>

</style>
