<template>
  <div>
    <Header />
    <CarList />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import CarList from './components/CarList.vue';

export default {
  components: {
    Header,
    CarList
  }
}
</script>
