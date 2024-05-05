<template>
  <div>
      <Header></Header>
      <CarList></CarList>
  </div>
</template>

<script>
import Header from './Header.vue';
import CarList from './CarList.vue';

export default {
  components: {
      Header,
      CarList
  }
}
</script>
