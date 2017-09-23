<template lang="pug">
  div#events-feed
    md-list.md-triple-line
      md-list-item(v-for="event in events" :key="event._id")
        item-event(:event="event")
</template>

<script>
  import api from '@/utils/api/'

  export default {
    components: {
      ItemEvent: require('@/components/Event/ItemEvent.vue')
    },
    firebase: {
      events: api.events.orderByChild('date')
    },
    methods: {
      removeEvent(key) {
        api.events.child(key).remove()
      },
      addEvent(event) {
        if (event) {
          api.events.push({
            'name': event.name,
            'date': event.date,
            'address': event.address,
            'description': event.description
          })
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>


</style>
