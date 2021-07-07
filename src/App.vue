<template>
  <div class="wrapper">

    <div class="wrapper-content">
      <section>
        <div class="container">

          <!-- error message -->
          <Message v-if="message" :message="message"/>

          <!-- new note -->
          <NewNote 
            :note="note" 
            @addNote="addNote" 
            :selectedOption="selectedOption"
          />

          <div class="note-header">
            <!-- title -->
            <h1>{{ title }}</h1>

            <!-- search -->
            <Search :value="search" placeholder="Find your note" @search="$store.state.search = $event"/>

            <!-- icons controls -->
            <div class="icons">
              <svg :class="{ active: grid }" @click="$store.state.grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="$store.state.grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>

          <!-- note list -->
          <Notes :notes="notesFilter" @remove="removeNote" :grid="grid"/>

        </div>
      </section>
    </div>
  
  </div>
</template>

<script>
import Message from './components/Message.vue'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import Search from './components/Search'

export default {
  components: {Message, NewNote, Notes, Search},

  computed: {
    notesFilter() { return this.$store.getters.notesFilter },
    title() { return this.$store.state.title },
    search() { return this.$store.state.search },
    message() { return this.$store.state.message },
    grid() { return this.$store.state.grid },
    selectedOption() { return this.$store.state.selectedOption },
    note() { return this.$store.state.note }
  },
  methods: {
    addNote() {
      this.$store.dispatch('addNote')
    },
    removeNote(index) {
      this.$store.dispatch('removeNote', index)
    }
  },
}
</script>

<style>

</style>
