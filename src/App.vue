<template>
  <div id="app" class="app-wrapper">
    <h1>Attend List</h1>
    <img src="/icon.svg" class="logo" alt="Coctail glass with an olive in it">

    <main v-if="editing">
      <p>Paste a list of attendees:</p>
      <textarea class="sleek" v-model="people"></textarea>
      <button @click="save">Manage</button>
    </main>

    <main v-else>
      <attend-list :people="attending" @clear="isEditing" />
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
  components: { AttendList },
  computed: {
    attending () {
      return this.people.split('\n')
    }
  },
  methods: {
    save () {
      this.$ls.set('people', this.attending)
      this.isEditing()
    },
    isEditing () {
      const editing = !this.$ls.get('people', []).length
      this.editing = editing
      return editing
    }
  },
  mounted () {
    this.isEditing()
  }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

.app-wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  width: 40rem;
  max-width: 90%;
}

main > * + * {
  margin-top: 2rem;
}

h1 {
  /* background: url("https://images.unsplash.com/photo-1504680177321-2e6a879aac86?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8111c411923b7c9dbfc11d87f5d9c48&auto=format&fit=crop&w=1350&q=80") center;
  background: url("https://images.unsplash.com/photo-1519056231101-0f83a012aed3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f5544f889b255d29e84cc01960cfa21&auto=format&fit=crop&w=1350&q=80") center;
  background: url("https://images.unsplash.com/photo-1485889397316-8393dd065127?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a21d4bcefdc4d6b83a9a13c9452328&auto=format&fit=crop&w=2090&q=80") center; */
  background: url("https://images.unsplash.com/photo-1517524365899-2b96b751f85d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=75cbb43acbe6147da7860eedb9bab683&auto=format&fit=crop&w=890&q=60") center;
  -webkit-background-clip: text;
  background-clip: text;
  font: bolder 9vw 'Alfa Slab One';
  margin: 0;
  background-size: 70%;
  color: transparent;
}

.logo {
  width: 5rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0;
}
textarea {
  width: 500px;
  max-width: 90%;
  overflow: hidden;
  color: #222;
  font-family: Courier, monospace;
  resize: none;
}

.sleek {
  font-size: 16px;
  line-height: 1.4rem;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 5px rgba(70, 70, 70, 0.2);
  border: 1px solid #FFF;
  transition: box-shadow 0.2s;
}
.sleek:hover,
.sleek:focus {
  box-shadow: 0 1px 5px rgba(70, 70, 70, 0.4);
  outline: none;
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

/* Remove scrollbar content shift on desktop */
@media screen and (min-width: 25em) {
  html {
    overflow: auto;
    margin-left: calc(100vw - 100%);
    margin-right: 0;
  }
}
</style>
