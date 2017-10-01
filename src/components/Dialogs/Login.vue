<template lang="pug">
  div
    md-dialog.dialog-container(md-open-from="#app" md-close-to="#app" ref="login-dialog" :md-click-outside-to-close="false")
      // Title
      md-dialog-title
        div Login

      // Content
      md-dialog-content
        form(@keyup.enter="login")
          md-input-container
            label Email
            md-input(type="email" v-model="email")
          md-input-container(md-has-password)
            label Password
            md-input(type="password" v-model="password")

      md-dialog-actions
        md-button.md-primary(@click="login") Ok

    snackbar(ref="snackbar")
</template>

<script>
import api from '@/utils/api/'

const errorsCode = {
  'auth/invalid-email'  : 'Email inválido',
  'auth/user-disabled'  : 'Usuário desabilitado',
  'auth/user-not-found' : 'Usuário não encontrado',
  'auth/wrong-password' : 'Senha errada'
}

export default {
  name: 'login-dialog',
  components: {
    Snackbar: require('@/components/SnackBar.vue')
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    open() {
      this.$refs['login-dialog'].open()
    },
    close() {
      this.$refs['login-dialog'].close()
    },
    login() {
      api.login(this.email, this.password)
        .then(() => {
          this.$router.go({
            path: this.$router.path,
            query: {
              t: +new Date()
            }
          })
          this.close()
        })
        .catch(error => {
          this.$refs['snackbar'].show(errorsCode[error.code] ? errorsCode[error.code] : 'Desculpe tente novamente mais tarde')
        })
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!localStorage['USER'])
        this.open()
    })
  }
}
</script>

<style lang="stylus" scoped>
.dialog-container > .md-dialog
  width 90vw
  max-width 100%
  max-height 100%
  overflow-y auto

.md-dialog-title
  margin-bottom 10px

.md-dialog-content
  padding 10px
</style>
