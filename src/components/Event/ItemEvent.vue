
<template lang="pug">
  md-card#card-example(:id="event.key" @click.native="goToDetails")
    md-card-area(md-inset)

      md-card-header
        h2.md-title {{ event.name }}
        div.md-subhead
          md-icon location_on
          span {{`${event.address} `}}
          md-icon access_time
          span {{ event.date | getDefaultFormat }}

      md-card-content {{ event.description }}

    //
      md-card-content
        h3.md-subheading Horários
        div.card-reservation
          md-iconaccess_time
          md-button-toggle(md-single).md-button-group
            md-button Dia 17: 10h30 às 12h30
            md-button Dia 17: 10h30 às 12h30
            md-button Dia 17: 10h30 às 12h30

</template>

<script>
  import { getDefaultFormat } from '@/utils/filters/date.js'
  export default {
    name: 'item-event',
    filters: { getDefaultFormat },
    props: {
      event: Object
    },
    methods: {
      goToDetails() {
        this.$router.push('events/' + this.event['.key'])
      }
    }
  }
</script>

<style lang="stylus" scoped>

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
      // vertical-align: middle;
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
