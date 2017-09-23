<template lang="pug">
  div
    md-dialog.dialog-container(:md-open-from="from" :md-close-to="from" ref="dialog")
      // Title
      md-dialog-title
        div Title

      // Content
      md-dialog-content
        div Hello

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
    }
  },
  methods: {
    open() {
      this.$refs['dialog'].open()
    },
    close(resolveData) {
      this.$refs['dialog'].close()
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus">
.dialog-container > .md-dialog
  width 100vw
  max-width 100%
  height 100vh
  max-height 100%
  overflow-y auto

.md-dialog-title
  margin-bottom 35px

.md-dialog-content
  padding 0
</style>
