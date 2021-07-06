<template>
  <div class="new-note">
    <div class="wrap">
      <div class="field">
        <label>Title</label>
        <input v-model="note.title" type="text">
      </div>
      <div class="field">
        <label>Select</label>
        <select v-model="selected">
          <option :value="option" v-for="(option, index) in options" :key="index">{{ option }}</option>
        </select>
      </div>
    </div>
    <label>Description</label>
    <textarea v-model="note.descr"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      require: true
    },
    selectedOption: {
      type: String,
      require: true
    },
  },
  data() {
    return {
      selected: this.selectedOption,
      options: ['standart', 'important', 'overriding'],
    }
  },
  methods: {
    addNote() {
      this.note.type = this.selected
      this.$emit('addNote', this.note)
      this.selected = 'standart'
    }    
  }
}
</script>

<style lang="scss" scoped>
  .new-note {
    text-align: center;
    margin-bottom: 60px;
  }
  .btn {
    margin-top: 20px;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    & .field {
      width: calc(50% - 20px);
    }
  }
  select {
    width: 100%;
    padding: 16px 26px;
    border-radius: 20px;
    height: 55px;
  }
</style>