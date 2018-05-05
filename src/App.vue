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
        <div>
          <button @click="save">Manage</button>
          <button @click="clear">Clear</button>
        </div>
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
}
html, body {
  min-height: 100vh;
}
body {
  margin: 0;
}

.app-wrapper {
  font-family: Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
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
  padding: 1rem 0;
  box-shadow: 0 0 8px rgba(70, 70, 70, 0.15);
  z-index: 2;
  background-color: #fff;
}
main footer div {
  display: flex;
  justify-content: center;
  max-width: 10rem;
  margin: 0 auto;
}

h1 {
  color: cornflowerblue;
  font-family: 'Alfa Slab One';
  font-weight: bolder;
  font-size: calc(1rem + 7vw);
  margin-top: 2rem;
}

.logo {
  width: 5rem;
  margin-bottom: 1rem;
}

textarea {
  overflow: hidden;
  resize: none;
  font-family: Courier, monospace;
  color: #222;
  margin-top: 3rem;
}

.sleek {
  font-size: 1rem;
  line-height: 1.4rem;
  width: 500px;
  max-width: 98%;
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
  padding: 1rem 2.5rem;
  background-color: cornflowerblue;
  border-radius: 4px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1rem;
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

@media screen and (max-width: 25em) {
  html {
    font-size: 12px;
  }
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
