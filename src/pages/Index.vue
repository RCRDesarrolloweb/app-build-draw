<template>
  <q-page class="fit">
    <div class="absolute-full q-ma-lg draw rounded-borders shadow-5">
      <canvas v-touch-pan.prevent.touch="draw" ref="canvas" id="canvas" class="fit ">
      </canvas>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex'
export default defineComponent({
  name: 'PageIndex',
  setup(){
    const $store = useStore()
    return{
      canvas: ref(null),
      ctx: ref(null),
      color: $store.getters.color
    }

  },
  methods:{
    draw({ evt, ...newInfo }){

      if(newInfo.isFinal){
        console.log('a')
        this.ctx.beginPath()
      }
      else{
        this.ctx.strokeStyle = this.$store.getters.color
        this.ctx.lineWidth = 10
        this.ctx.lineCap ="round";

        this.ctx.lineTo(newInfo.position.left,newInfo.position.top)
        this.ctx.stroke()

        this.ctx.beginPath()
        this.ctx.moveTo(newInfo.position.left,newInfo.position.top)
      }



    }
  },
  mounted(){
    this.canvas = this.$refs.canvas
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth
    this.ctx = this.canvas.getContext("2d");
    console.log(this.canvas)
  }
})
</script>
<style scoped>
  .draw{
     border-style:solid;
     border-color:rgba(69,90,247,0.4);
  }
</style>
