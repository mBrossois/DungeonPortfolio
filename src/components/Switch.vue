<template>
    <label tabindex="0" class="switch">
        <input :class="{'isChecked': isChecked}" type="checkbox">
        <span class="slider" @click="onClick"></span>
    </label>
</template>

<script setup>
const emit = defineEmits(['toggle'])
defineProps({isChecked: Boolean})

function onClick() {
  emit('toggle')
}
</script>

<style>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 2rem;
  height: 1rem;
  border-radius: 2px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
  visibility: hidden;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--nav-foreground);
  -webkit-transition: transform .4s;
  transition: transform .4s;
  border-radius: 2px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.5rem;
  width: 1.5rem;
  left: -.4rem;
  bottom: -.25rem;
  background-color: var(--menu-foreground);
  -webkit-transition: transform .4s;
  transition: transform .4s;
  border-radius: 2px;
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--color-2);
}

input.isChecked + .slider:before {
  -webkit-transform: translateX(1.5rem);
  -ms-transform: translateX(1.5rem);
  transform: translateX(1.5rem);
}

</style>