<template>
    <canvas ref="canvas" :width="width" :height="height"></canvas>
</template>


<script setup>
import { Rive, Fit, Alignment, Layout } from '@rive-app/canvas';
import { ref, nextTick, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    src: String,
    autoplay: {
        type: Boolean,
        default: true
    },
    width: Number,
    height: Number
})

const canvas = ref()

nextTick(() => {
    const rive = new Rive({
        canvas: canvas.value,
        src: props.src,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
        autoplay: props.autoplay
      })

})

</script>
