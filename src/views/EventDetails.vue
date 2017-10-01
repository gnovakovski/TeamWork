<template lang="pug">
  div.event-details(v-if="event.name")
    md-tabs
      // Detalhes evento
      md-tab(id="event-tab" md-label="Evento")
        span.md-title {{ event.name | capitalize }}
        div.margin.md-subhead
          md-icon location_on
          span {{ event.address }}

          ul
            li(v-for="date in dates")
              md-icon.date access_time
              span {{ date.value }}
              div.times
                md-chip.margin.md-caption(v-for="time in date.times" :key="time.value") {{ time.value }}

        p(v-html="event.description")

      // Pessoas que vão
      md-tab.no-paddings(id="event-list" md-label="Pessoas que vão")
        md-tabs(@change="(i) => selectPeople(dates[i].times[0])")
          // Tab date
          md-tab(v-for="date in dates" :key="date.value" :md-label="date.value")
            md-chip.margin(v-for="time in date.times" :key="time.value" @click.native="selectPeople(time)") {{ time.value }}
            // Lista usuários
            md-list
              md-list-item(v-for="user in selected" :key="user") {{ user }}
                md-divider

    event-appointment(ref="appointmentDialog" from="#fab-details" :event="event")
    fab-button#fab-details(@click="$refs.appointmentDialog.open()" icon="thumb_up")
</template>

<script>
  import api from '@/utils/api/'
  import { capitalize } from '@/utils/filters/string'
  import { getDateWithoutTime } from '@/utils/filters/date'

  export default {
    components: {
      FabButton: () => import('@/components/Buttons/FabButton.vue'),
      EventAppointment: () => import('@/components/Dialogs/EventAppointment.vue')
    },
    filters: { capitalize, getDateWithoutTime },
    data() {
      return {
        event: {},
        selected: {}
      }
    },
    computed: {
      dates() {
        this.selectPeople(this.event.dates && this.event.dates[0] && this.event.dates[0].times && this.event.dates[0].times[0] ? this.event.dates[0].times[0].people : [])
        return this.event.dates.map(d => {
          return {
            value: getDateWithoutTime(d),
            times: d.times
          }
        })
      }
    },
    methods: {
      selectPeople(times = { people: [] }) {
        this.selected = times.people
      }
    },
    mounted() {
      api.event(this.$route.params.id).once('value', snap => {
        this.event        = snap.val()
        this.event['key'] = snap.key
        this.event['description'] = this.event['description'].replace(/\n/g, '<br>')
      })
    }
  }
</script>

<style lang="stylus" scoped>
.date
  padding-bottom 3px
  margin-right 5px
.times
  margin-left 30px

.no-paddings
  padding 0
.margin
  margin 5px
</style>
