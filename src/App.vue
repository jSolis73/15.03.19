<template>
  <div>
    <ul class="nav justify-content-center">
      <router-link tag="li" class="nav-item" to="/">
        <a class="nav-link">Главная</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/team">
        <a class="nav-link">Наша команда</a>
      </router-link> 
      <router-link tag="li" class="nav-item" to="/about">
        <a class="nav-link">О нас</a>
      </router-link>           
    </ul>

    <router-view></router-view>  
  </div>
</template>

<script>

export default {
  
  }
  
</script>

<style>
  
</style>


