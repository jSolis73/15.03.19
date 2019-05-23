<template>
  <div>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Главная</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="'/team'">Наша команда</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">О нас</router-link>
      </li>
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


