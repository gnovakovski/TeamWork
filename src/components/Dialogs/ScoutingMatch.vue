<template lang="pug">
  div.scouting-match
    md-dialog.dialog-container(:md-open-from="from" :md-close-to="from" ref="scouting-match")
      // Title
      md-dialog-title
        div Partida

      md-dialog-content
        md-tabs(id="tabs" @change="(index) => (tabSelected = index)")
          md-tab(v-for="tab in tabs" :key="tab" :md-label="tab") {{ fields[tab] }}

      md-dialog-actions(v-if="tabSelected === 2")
        md-button(@click="close(false)").md-primary Cancelar
        md-button(@click="close(true)").md-primary.md-raised Salvar

    snackbar(ref="snackbar")
</template>

<script>
  import forms from '@/utils/api/scouting/forms'

  export default {
    name: 'scouting-match',
    components: {
      Snackbar: require('@/components/SnackBar.vue')
    },
    props: ['from'],
    data() {
      return {
        tabs: ['autonomous', 'teleop', 'concluir'],
        tabSelected: 0,
        fields: Object.create(null)
      }
    },
    methods: {
      open() {
        this.buildFields()
        this.$refs['scouting-match'].open()
      },
      close(isSave) {
        if (isSave) {
          this.saveAppoinment()
        }
        this.$refs['scouting-match'].close()
      },

      // Dialog business
      buildFields() {
        this.eachFormsFields(field => {
          if (field.tabs)
            field.tabs.map(tab => {
              this.fields[tab] = this.fields[tab] || []
              this.fields[tab].push(field)
            })
        })
      },

      // Forms business
      eachFormsFields(cb) {
        Object.keys(forms).map(key => {
          if (forms[key])
            cb(forms[key])
        })
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

  .dialog-container >>> .md-dialog > .md-dialog-content
    padding 0
</style>
