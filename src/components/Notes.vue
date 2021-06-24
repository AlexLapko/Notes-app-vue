<template>
  <div class="notes" :class="{ full: !grid }">
    <div class="note" :class=note.type v-for="(note, index) in notes" :key="index">
      <div class="note-header" :class="{ full: !grid }">
        <p>{{ note.title }}</p>
        <p style="cursor: pointer" @click="removeNote(index)">x</p>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      require: true
    },
    grid: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    removeNote(index) {
      this.$emit('remove', index)
    }
  }
}
</script>

<style lang="scss">
.notes {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
  &.full {
    width: 100%;
    & .note {
      width: 100%;
      text-align: center;
    }
  }
}
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(0,0,0,0.04);
  background-color: #fff;
  transition: 0.25s;
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,0.04);
    transform: translate(0, -6px);
  }
  &.important {
    border-color: yellow;
    &:hover {
      box-shadow: 0 30px 30px rgba(251, 255, 19, 0.3);
    }
  }
  &.overriding {
    border-color: red;
    &:hover {
      box-shadow: 0 30px 30px rgba(255, 18, 18, 0.3);
    }
  }
}
.note-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 22px;
    color: #402caf;
  }
  svg {
    margin-left: 12px;
    color: #999;
    cursor: pointer;
    &.active {
      color: #402caf;
    }
  }
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  & .edit-title {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999;
  }
}
</style>