<template lang="pug">
  div#events-feed
    div(v-for="event in events" :key="event._id").center-feed
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

#events-feed
  background-color: rgb(220, 220, 220);

.center-feed
  max-width 70%
  margin 0 auto
  padding-top 40px

</style>
