<template lang="pug">
  div
    md-dialog.dialog-container(:md-open-from="from" :md-close-to="from" ref="dialog")

      div.form-container

        // Title
        md-dialog-title
          div Novo Evento

        md-dialog-content
          <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
              <label>Title</label>
              <md-input></md-input>
            </md-input-container>

            <md-input-container>
              <label>Descrição</label>
              <md-textarea maxlength="200"></md-textarea>
            </md-input-container>

            <md-input-container>
              <md-icon>location_on</md-icon>
              <label>Local</label>
              <md-input></md-input>
            </md-input-container>

            <md-input-container>
              <md-icon>access_time</md-icon>
              <label>Data e Hora</label>
              <md-input type="tel"></md-input>
            </md-input-container>

          </form>

          md-layout.dialog-actions
            md-layout(md-flex="50")
              md-button.md-primary Cancelar
            md-layout(md-align="end")
              md-button.md-primary.md-raised Criar

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
      title: null,
      description: null,
      address: null,
      date: null
    }
  },
  methods: {
    open() {
      this.$refs['dialog'].open()
    },
    close(resolveData) {
      this.$refs['dialog'].close()
      this.$emit('close', resolveData)
    },
    cancel() {

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
