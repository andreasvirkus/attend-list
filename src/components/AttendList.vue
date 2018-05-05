<template>
  <main>
    <label>
      Filter names:
      <input v-model="search" type="text" class="sleek">
    </label>
    <ul>
      <li v-for="(person, i) in filtered" :key="i"
        :class="{ disabled: person.attended }"
        class="sleek">
        <span>{{ person.name }}</span>
        <button v-if="!person.attended" @click="update(i, true)">Arrived</button>
        <button class="gray" v-if="person.attended" @click="update(i, false)">Undo</button>
      </li>
    </ul>

    <footer>
      <button @click="back">Clear</button>
    </footer>
  </main>
</template>

<script>
export default {
  name: 'AttendList',
  data () {
    return {
      search: '',
      attending: this.$ls.get('attendList') || this.$ls.get('people', []).map(person => ({
        name: person,
        attended: false
      }))
    }
  },
  computed: {
    filtered () {
      return this.search
        ? this.attending.filter(person => person.name.toLowerCase().includes(this.search))
        : this.attending
    }
  },
  methods: {
    back () {
      this.$ls.remove('people')
      this.$ls.remove('attendList')
      this.$emit('clear')
    },
    update (i, state) {
      this.attending[i].attended = state
      this.$ls.set('attendList', this.attending)
    }
  },
  created () {
    this.$ls.set('attendList', this.attending)
  }
}
</script>

<style scoped>
label {
  display: block;
}
input {
  display: block;
  background: none;
  line-height: 2rem;
  width: 400px;
  max-width: 90%;
  margin: 1em auto 2rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 1rem auto;
  width: 400px;
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  color: #42b983;
}

button.gray {
  background-color: #cacaca;
}
button.gray:hover {

  box-shadow: 4px 4px 0 #7e7e7e;
  background-color: #d3d3d3;
}

section > button {
  margin: 3rem 0;
}
</style>
