<template>
  <ul>
    <li>attendList: {{ attending }}</li>
    <li v-for="(person, i) in attending" :key="i"
      :class="{ disabled: person.attended }">
      <span class='person'>{{ person.name }}</span>
      <button @click="person.attended = true">Arrived</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AttendList',
  props: ['people'],
  computed: {
    attending () {
      console.log(
        'attending:',
        this.people.map(person => ({ name: person, attended: false }))
      )
      // return this.people;
      return this.people.map(person => ({
        name: person,
        attended: false
      }))
    }
  },
  methods: {
    setStatus (indx) {}
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 1rem auto;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  color: #42b983;
}
</style>
