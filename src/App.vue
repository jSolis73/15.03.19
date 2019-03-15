<template>
  <div id="app"
       :class='changeBc()'
  >
    <button id ="but1"
            @click='changing=!changing'
    >Поменять цвет фона
    </button>
    <button id ="but2"
            @click='destroy'
    >Убрать кнопку
    </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello',
      changing: true
    }
  },
  beforeCreate: function(){
    console.log('Пока что тут ничего нет')
  },
  created: function(){
    console.log('Экземпляр Vue создался')
  },
  beforeMount(){
    console.log('Скоро экземпляр будет привязан к элементу Dom')
  },
  mounted(){
    console.log( 'Экземпляр привязан к this.$el')
  },
  beforeUpdate(){
    console.log('Скоро изменится цвет фона')
  },
  updated(){
    console.log('Цвет фона изменился')
  },
  beforeDestroy(){
    console.log('beforeDestroy()')
  },
  destroyed(){
    console.log('destroyed()')
  },
  methods: {
    changeBc: function(){
      return{
        'white': this.changing,
        'black': !this.changing
      }
    },
    destroy: function(){
      let node = document.querySelector('#but1')
      node.parentNode.removeChild(node)
      this.$destroy();
    }
  }
}
</script>

<style>
#app {
  width: 300px;
  height: 200px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
  border: 4px solid black;
}

.black {
  background-color: black;
}

.white {
  background-color: white;
}

#but1 {
  margin: 85px;
}

#but2 {
 
}
</style>
