<template>
  <q-layout view="lHr lpr lFr">

    <q-header elevated class="bg-light-blue-13 text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="flex flex-center">

          <q-icon size="xl" name="sports_esports" class="q-mr-md" />

          <div class="text-subtitle2">
            APP BUILD DRAW
          </div>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item @click="showLoading" clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <div class="q-pa-md">
        <div class="q-pa-md text-h5 text-bold text-grey">
          Herramientas
        </div>
        <div class="column q-pa-xl">
          <q-fab direction="down" square class="q-ma-md" color="purple-11" size="xl" icon="palette">
            <q-fab-action flat>
              <q-color v-model="color" no-header no-footer class="my-picker" />
            </q-fab-action>
          </q-fab>
          <q-btn @Click="edit" class="q-ma-md" color="blue-5" size="xl" icon="edit" />
          <q-btn @Click="clean" class="q-ma-md" color="amber-5" size="xl" icon="cleaning_services" />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-pink-13 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-caption">Informacion del Sistema de Juego</div>
        </q-toolbar-title>
        <div class="text-caption">
          Hora del servidor: 12:00:00
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useQuasar, QSpinnerPie } from 'quasar'
import { useStore } from 'vuex'
import { onBeforeUnmount } from 'vue'
export default {
  setup () {
    const $store = useStore()
    const $q = useQuasar()
    let timer

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })
    const menuList = [
  {
    icon: 'map',
    label: 'Mapa',
    separator: false
  },
  {
    icon: 'account_circle',
    label: 'Cuenta',
    separator: false
  },
  {
    icon: 'help',
    label: 'Ayuda',
    separator: true
  },
  {
    icon: 'logout',
    label: 'Cerrar Sesion',
    separator: false
  }
]

    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      hex: ref(null),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      menuList
    }
  },
  computed:{
    color: {
    // getter
    get() {
      return this.hex
    },
    // setter
    set(newValue) {
      this.hex = newValue
      this.$store.commit('set_color', newValue)
    }
   }
 },
 methods:{
   clean(){
     this.$store.commit('set_color', 'white')
   },
   edit(){
     this.$store.commit('set_color', this.hex)
   }
 }
}
</script>
