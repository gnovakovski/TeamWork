<template lang="pug">
  div
    md-dialog.dialog-container(:md-open-from="from" :md-close-to="from" ref="new-event-dialog")

      div.form-container

        // Title
        md-dialog-title
          div Novo Evento

        md-dialog-content
          <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
              <label>Nome</label>
              <md-input required v-model="name"></md-input>
            </md-input-container>

            <md-input-container>
              <label>Descrição</label>
              <md-textarea required maxlength="150" v-model="description"></md-textarea>
            </md-input-container>

            <md-input-container>
              <md-icon>location_on</md-icon>
              <label>Local</label>
              <md-input required v-model="address"></md-input>
            </md-input-container>

            <md-input-container>
              <md-icon>access_time</md-icon>
              <label>Data e Hora</label>
              <md-input required v-model="date"></md-input>
            </md-input-container>

          </form>

          md-layout.dialog-actions
            md-layout(md-flex="50")
              md-button(@click="close(false)").md-primary Cancelar
            md-layout(md-align="end")
              md-button(@click="close(true)").md-primary.md-raised Criar

    snackbar(ref="snackbar")
</template>

<script>

export default {
  name: 'new-event-dialog',
  components: {
    Snackbar: require('@/components/SnackBar.vue')
  },
  props: ['from'],
  data() {
    return {
      name: null,
      description: null,
      address: null,
      date: null
    }
  },
  methods: {
    open() {
      this.$refs['new-event-dialog'].open()
    },
    close(saveIt) {
      if (saveIt) {
        this.$emit('addEvent', {
          name: this.name,
          description: this.description,
          address: this.address,
          date: this.date,
          username: localStorage.getItem('USERNAME')
        })
      }
      this.name = null
      this.description = null
      this.address = null
      this.date = null
      this.$refs['new-event-dialog'].close()
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
