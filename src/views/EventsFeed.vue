<template lang="pug">
  div#events-feed
    div(v-for="event in events" :key="event._id").center-feed
      item-event(:event="event")
    md-spinner(v-if="!events.length" :md-size=125 md-indeterminate).margin-top
    fab-button(@click="$refs.newEventDialog.open()")
    new-event-dialog(ref="newEventDialog")

</template>

<script>
  import api from '@/utils/api/'

  export default {
    data: () => ({
      showModal: false
    }),
    components: {
      ItemEvent: require('@/components/Event/ItemEvent.vue'),
      FabButton: () => import('@/components/Buttons/FabButton.vue'),
      NewEventDialog: () => import('@/components/Dialogs/NewEventDialog.vue')
    },
    firebase: {
      events: api.events.orderByChild('orderDate').limitToFirst(15)
    }
  }
</script>

<style lang="stylus" scoped>

#events-feed
  background-color: rgb(220, 220, 220);
  min-height 100vh

.center-feed
  margin 0 auto
  padding-top 20px

.margin-top
  margin-top 45%

@media (min-width 612px)
  .center-feed
    width: 612px

</style>
