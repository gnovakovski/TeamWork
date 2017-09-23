<template lang="pug">
  div#events-feed
    md-list.md-triple-line
      md-list-item(v-for="event in events" :key="event._id")
        item-event(:event="event")
</template>

<script>
  import events from '@/utils/api/events'
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
        events.getEvents(data => {
          this.events.push(data)
        })
      }
    },
    created () {
      this.fetchEvents()
    }
  }
</script>

<style scoped>

</style>
