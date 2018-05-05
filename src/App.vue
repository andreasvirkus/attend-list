<template>
  <div id="app" class="app-wrapper">
    <h1>Attend List</h1>

    <main v-if="editing">
      <textarea class="sleek"
        placeholder="Paste a list of names"
        :style="{ height: textareaHeight + 'px' }"
        v-model="people"
        ref="text"></textarea>

      <footer>
        <button @click="save">Manage</button>
        <button @click="clear">Clear</button>
      </footer>
    </main>

    <template v-else>
      <attend-list :people="attending" @clear="isEditing" />
    </template>
  </div>
</template>

<script>
import AttendList from './components/AttendList'

export default {
  name: 'App',
  data () {
    return {
      people: '',
      editing: true,
      textareaHeight: 80
    }
  },
  components: { AttendList },
  computed: {
    attending () {
      return this.people.split('\n').filter(p => p.length)
    }
  },
  methods: {
    save () {
      this.$ls.set('people', this.attending)
      this.isEditing()
    },
    clear () {
      this.$ls.set('people', [])
      this.people = ''
    },
    isEditing () {
      const editing = !this.$ls.get('people', []).length
      this.editing = editing
      return editing
    }
  },
  watch: {
    people () {
      this.textareaHeight = this.people ? this.$refs.text.scrollHeight : 80
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
  min-height: 100vh;
}

.app-wrapper {
  font-family: Courier, monospace;
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
  padding-bottom: 140px;
}

main > * + * {
  margin-top: 2rem;
}

main footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  box-shadow: 0 0 8px rgba(70, 70, 70, 0.15);
  z-index: 2;
  background-color: #fff;
}

h1 {
  /* background: url("https://images.unsplash.com/photo-1504680177321-2e6a879aac86?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8111c411923b7c9dbfc11d87f5d9c48&auto=format&fit=crop&w=850&q=60") center;
  background: url("https://images.unsplash.com/photo-1519056231101-0f83a012aed3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f5544f889b255d29e84cc01960cfa21&auto=format&fit=crop&w=850&q=60") center;
  background: url("https://images.unsplash.com/photo-1485889397316-8393dd065127?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a21d4bcefdc4d6b83a9a13c9452328&auto=format&fit=crop&w=890&q=60") center;
  background: url("https://images.unsplash.com/photo-1511180427842-5878e7a53e2c?ixlib=rb-0.3.5&s=526cdecd25599e8c14c884bb1bb9c504&auto=format&fit=crop&w=850&q=60") center; */
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
  resize: none;
  font-family: Courier, monospace;
  color: #222;
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
  letter-spacing: 3px;
  cursor: pointer;
  transition: all 0.2s;
}
button:hover {
  background-color: #87adf1;
  box-shadow: 4px 4px 0 #2f71e7;
  transform: translate(-4px, -4px);
  color: white;
}
button + button {
  margin-left: 1rem;
  background-color: transparent;
  border-color: cornflowerblue;
  color: cornflowerblue;
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
