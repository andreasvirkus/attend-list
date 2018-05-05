<template>
  <div id="app" class="app-wrapper">
    <main v-if="editing">
      <p>Paste a list of attendees:</p>
      <textarea v-model="people"></textarea>
      <button @click="editing = false">Manage</button>
    </main>

    <main v-else>
      <attend-list :people="attending" />
    </main>
  </div>
</template>

<script>
import AttendList from './components/AttendList'

export default {
  name: 'App',
  data () {
    return {
      people: '',
      editing: true
    }
  },
  computed: {
    attending () {
      return this.people.split('\n')
    }
  },
  components: { AttendList }
}
</script>

<style>
.app-wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

main {
  width: 40rem;
  max-width: 90%;
}

main > * + * {
  margin-top: 1rem;
}

textarea {
  width:500px;
  overflow:hidden;
  color: #222;
  font-family:Courier, monospace;
  font-weight: normal;
  font-size: 16px;
  resize: none;
  line-height: 1.4rem;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 5px rgba(70, 70, 70, 0.2);
  border: 1px solid #FFF;
}

button {
  background: none;
  border: 1px solid transparent;
  padding: 1rem 3rem;
  background-color: cornflowerblue;
  border-radius: 4px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.2s;
}
button:hover {
  background-color: #87adf1;
  box-shadow: 4px 4px 0 #2f71e7;
  transform: translate(-4px, -4px);
}
</style>
