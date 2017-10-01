<template lang="pug">
  div.event-details(v-if="event.name")
    md-tabs
      md-tab(id="event-tab" md-label="Evento")
        span.md-title {{ event.name | capitalize }}
        div.md-subhead
          md-icon location_on
          span {{`${event.address} `}}
          md-icon access_time
          span.md-caption {{ event.date | getDefaultFormat }}
        p {{ event.description }}

      md-tab(id="event-list" md-label="Pessoas que vão")
        p Em desenvolvimento

    event-appointment(ref="appointmentDialog" from="#fab-details" :event="event")
    fab-button#fab-details(@click="$refs.appointmentDialog.open()" icon="thumb_up")
</template>

<script>
  import api from '@/utils/api/'
  import { capitalize } from '@/utils/filters/string'
  import { getDefaultFormat } from '@/utils/filters/date'

  export default {
    components: {
      FabButton: () => import('@/components/Buttons/FabButton.vue'),
      EventAppointment: () => import('@/components/Dialogs/EventAppointment.vue')
    },
    filters: { capitalize, getDefaultFormat },
    data() {
      return {
        event: {}
      }
    },
    mounted() {
      api.event(this.$route.params.id).once('value', snap => {
        this.event        = snap.val()
        this.event['key'] = snap.key
      })
    }
  }
</script>

<style lang="stylus" scoped>

</style>
