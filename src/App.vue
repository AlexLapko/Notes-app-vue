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
            :options="options"  
          />

          <div class="note-header">
            <!-- title -->
            <h1>{{ title }}</h1>

            <!-- search -->
            <Search :value="search" placeholder="Find your note" @search="search = $event"/>

            <!-- icons controls -->
            <div class="icons">
              <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
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
  
  data() {
    return {
      title: 'Notes App',
      search: '',
      message: null,
      grid: true,
      selectedOption : 'standart',
      options: ['standart', 'important', 'overriding'],
      note: {
        title: '',
        descr: '',
        type: ''
      },
      notes: [
        {
          title: 'First Note',
          descr: 'Description for first note',
          type: 'important',
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: 'Second Note',
          descr: 'Description for second note',
          type: 'standart',
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: 'Third Note',
          descr: 'Description for third note',
          type: 'standart',
          date: new Date(Date.now()).toLocaleString(),
        },
      ]
    }      
  },
  computed: {
    notesFilter() {
      let array = this.notes,
          search = this.search
      
      if(!search) return array

      search = search.trim().toLowerCase()

      array = array.filter(function (item) {
        if(item.title.toLowerCase().indexOf(search) !== -1){
          return item
        }
      })
      return array
    }
  },
  methods: {
    addNote() {
      let {title, descr, type} = this.note

      if (title === '') {
        this.message = "title can't be blank"
        return false 
      }
      this.notes.push({
        title,
        descr,
        type,
        date: new Date(Date.now()).toLocaleString(),
      })
    
      this.note.title = ''
      this.note.descr = ''
      this.message = null
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    }
  },
}
</script>

<style>

</style>
