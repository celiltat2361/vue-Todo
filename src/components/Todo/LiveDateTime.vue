<template>
  <div class="nowDateTime mr-2">
    {{ date }}
  </div>
</template>

<script>
import { format } from 'date-fns' // used for date-time format from npm library
export default {
  data() {
    return {
      date: ''
    }
  },
  methods: {
    getDate() {
     this.date = format(new Date(),  'yy.MM.d HH:mm') //sverige date-time format
    }
  },
  mounted() {
    this.getDate()
  }
};
</script>

<style>
  .nowDateTime {
    font-style: italic;
    font-size: 10px;
  }
</style>
