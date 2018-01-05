<template>
  <div class="text-input-label">
    <p>{{ label }}</p>
    <input
      :value='value'
      :type='type'
      :placeholder='placeholder'
      v-on:input='onValChanged'
    />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'TextInputLabel',
  props: {
    label: String,
    value: String,
    placeholder: {
      default: 'write a value.',
      type: String,
    },
    type: {
      default: 'text',
      type: String,
    },
  },
  data() {
    return {
      dooboo: 'hello',
    };
  },
  methods: {
    onValChanged (e: any) {
      this.$emit('value', e.target.value);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.text-input-label {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p {
    margin: 7px;
    font-size: 18px;
    text-align: left;
    color: #8c8c8c;
  }
  input {
    color: #515151;
    font-size: 18px;
    border-radius: 10px;
    background-color: #ffffff;
    border: solid 1px #d0d0d0;
    padding: 9px 15px;
  }
  input::placeholder { color: #ccc; }
}
</style>
