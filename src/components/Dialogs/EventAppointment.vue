<template lang="pug">
  div.event-appointment
    md-dialog.dialog-container(:md-open-from="from" :md-close-to="from" ref="event-appointment")
      // Title
      md-dialog-title
        div Escolha seu horário

      md-dialog-content
        form(novalidate @submit.stop.prevent="submit")
          ul
            li(v-for="date in datesParsed") {{ date | getDateWithoutTime }}
              ul
                li(v-for="time in date.times")
                  md-checkbox(v-model="time.isSelected") {{ time.value }}

      md-dialog-actions
        md-button(@click="close(false)").md-primary Cancelar
        md-button(@click="close(true)").md-primary.md-raised Confirmar

    snackbar(ref="snackbar")
</template>

<script>
  import api from '@/utils/api/'
  import { getDateWithoutTime } from '@/utils/filters/date'

  export default {
    name: 'event-appointment',
    components: {
      Snackbar: require('@/components/SnackBar.vue')
    },
    filters: { getDateWithoutTime },
    props: ['from', 'event'],
    computed: {
      datesParsed() {
        this.username = api.getUser().username

        this.event.dates.map(d => {
          d.times.map(t => {
            t.isSelected = (t.people || []).indexOf(this.username) !== -1
          })
        })

        return this.event.dates
      }
    },
    methods: {
      saveAppoinment() {
        let i

        this.username = api.getUser().username

        this.event.dates.map(d => {
          d.times.map(t => {
            t.people = t.people || []
            i = t.people.indexOf(this.username)

            if (t.isSelected) {
              if (i === -1)
                t.people.push(this.username)
            } else {
              if (i > -1)
                t.people.splice(i, 1)
            }

            delete t.isSelected
          })
        })

        api.events.child(this.event['key']).set(this.event)
          .then(() => this.$refs['snackbar'].show('Confirmado'))
          .catch(() => this.$refs['snackbar'].show('Desculpe, tente novamente mais tarde'))
      },
      open() {
        this.$refs['event-appointment'].open()
      },
      close(isSave) {
        if (isSave) {
          this.saveAppoinment()
        }
        this.$refs['event-appointment'].close()
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
