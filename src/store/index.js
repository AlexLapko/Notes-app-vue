import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'Notes App',
        search: '',
        message: null,
        grid: true,
        selectedOption : 'standart',
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
    },
    mutations: {
        addNote(state, payload) {
            state.notes.push(payload)
        },
        removeNote(state, payload) {
            state.notes.splice(payload, 1);
        }
    },
    actions: {
        addNote({state, commit}) {
            let {title, descr, type} = state.note

            if (title === '') {
                state.message = "title can't be blank"
                return false
            }
            commit('addNote', {
                title,
                descr,
                type,
                date: new Date(Date.now()).toLocaleString(),
            })

            state.note.title = ''
            state.note.descr = ''
            state.message = null
        },
        removeNote({commit}, index) {
            commit('removeNote', index)
        }
    },
    getters: {
        notesFilter(state) {
            let array = state.notes,
                search = state.search

            if(!search) return array

            search = search.trim().toLowerCase()

            array = array.filter(function (item) {
                if(item.title.toLowerCase().indexOf(search) !== -1){
                    return item
                }
            })
            return array
        }
    }
})