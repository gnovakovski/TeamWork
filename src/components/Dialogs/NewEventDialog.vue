<template lang="pug">
  div
    md-dialog.dialog-container(:md-open-from="from" :md-close-to="from" ref="new-event-dialog")

      div.form-container

        // Title
        md-dialog-title
          div Novo Evento

        md-dialog-content
          form(novalidate @submit.stop.prevent="submit")
            md-input-container
              label Nome
              md-input(required v-model="event.name")

            md-input-container
              label Descrição
              md-textarea(required maxlength="150" v-model="event.description")

            md-input-container
              md-icon location_on
              label Local
              md-input(required v-model="event.address")

            div(v-for="(date, dateIndex) in event.dates" :key="dateIndex")

              md-input-container
                md-icon event_available
                label Data
                md-input(required v-model="date.value" type="date")

              div(v-for="(time, timeIndex) in date.times" :key="timeIndex")

                md-input-container
                  md-icon access_time
                  label hh:mm às hh:mm
                  md-input(required v-model="time.value" placeholder="Horário")

          md-layout.dialog-actions
            md-layout(md-flex="50")
              md-button(@click="close(false)").md-primary Cancelar
            md-layout(md-align="end")
              md-button(@click="close(true)").md-primary.md-raised Criar

    snackbar(ref="snackbar")
</template>

<script>

import api from '@/utils/api/'

export default {
  name: 'new-event-dialog',
  components: {
    Snackbar: require('@/components/SnackBar.vue')
  },
  firebase: {
    events: api.events.orderByChild('date')
  },
  props: ['from'],
  data() {
    return {
      event: this.setInitialValues()
    }
  },
  methods: {
    open() {
      this.$refs['new-event-dialog'].open()
    },
    close(saveIt) {
      if (saveIt) {
        if (this.isFormValid() === false) {
          return
        }
        this.addEvent()
      }
      this.event = this.setInitialValues()
      this.$refs['new-event-dialog'].close()
    },
    addEvent() {
      api.events.push({
        'name': this.event.name,
        'address': this.event.address,
        'description': this.event.description,
        'dates': this.event.dates,
        'lastDate': this.event.lastDate,
        'username': localStorage.getItem('USERNAME')
      })
    },
    removeEvent(key) {
      api.events.child(key).remove()
    },
    isFormValid() {
      if (this.event.name !== null &&
          this.event.date !== null &&
          this.event.address !== null &&
          this.event.description !== null)
        return true
      return false
    },
    setInitialValues() {
      return {
        name: null,
        description: null,
        address: null,
        dates: [
          {
            value: null,
            times: [
              {
                value: '',
                people: []
              }
            ]
          }
        ],
        lastDate: null
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.dialog-container >>> .md-dialog
  width 100vw
  max-width 100%
  height 100vh
  max-height 100%
  overflow-y auto

.form-container
  margin 0 auto
  width 90%

.md-dialog-title
  margin-bottom 35px

.md-dialog-content
  padding 0

.dialog-actions
  padding-top 20px

@media (min-width 612px)
  .form-container
    width 75%
</style>
