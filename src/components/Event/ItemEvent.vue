<template lang="pug">
  //
    md-whiteframe(:id="event.key" md-elevation="2")
      h3 {{ event.name }}
      p {{ event.description }}
      h5 {{ event.date | getDefaultFormat }}{{` em ${event.address}`}}

  md-card#card-example
    md-card-area(md-inset)

      md-card-header
        h2.md-title {{ event.name }}
        div.md-subhead
          md-iconlocation_on
          span2 {{ event.date | getDefaultFormat }}{{` em ${event.address}`}}

      md-card-content
        Illy {{ event.description }}

    //
      md-card-content
        h3.md-subheading Horários
        div.card-reservation
          md-iconaccess_time
          md-button-toggle(md-single).md-button-group
            md-button Dia 17: 10h30 às 12h30
            md-button Dia 17: 10h30 às 12h30
            md-button Dia 17: 10h30 às 12h30

    md-card-actions
      md-button.md-primary Eu Vou!

</template>

<script>
  import { getDefaultFormat } from '@/utils/filters/date.js'
  export default {
    name: 'item-event',
    filters: { getDefaultFormat },
    props: {
      event: Object
    }
  }
</script>

<style lang="stylus" scoped>

/*
.md-whiteframe
  width 100%
  padding 10px
  margin-bottom 10px
  background-color white
*/

.card-example {
  .md-subhead {
    .md-icon {
      width: 16px;
      min-width: 16px;
      height: 16px;
      min-height: 16px;
      font-size: 16px;
      line-height: 16px;
    }

    span {
      vertical-align: middle;
    }
  }

  .card-reservation {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .md-icon {
      margin: 8px;
      color: rgba(#000, .54) !important;
    }

    .md-button {
      border-radius: 2px !important;
    }
  }

}

</style>
