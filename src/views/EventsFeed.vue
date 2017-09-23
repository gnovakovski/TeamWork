<template lang="pug">
  div#events-feed
    div(v-for="event in events" :key="event._id").center-feed
      item-event(:event="event")
    fab-button(@click="openModal")

</template>

<script>
  import api from '@/utils/api/'

  export default {
    components: {
      ItemEvent: require('@/components/Event/ItemEvent.vue'),
      FabButton: () => import('@/components/Buttons/FabButton.vue'),
      NewEventDialog: () => import('@/components/Dialogs/NewEventDialog.vue')
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
  margin 0 auto
  padding-top 20px

@media (min-width 612px)
  .center-feed
    width: 612px

</style>
