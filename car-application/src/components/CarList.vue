<template>
    <div>
      <ul v-if="cars.length">
        <li v-for="car in cars" :key="car.model">
          {{ car.make }} - {{ car.model }} - {{ car.year }}
        </li>
      </ul>
      <p v-else>Loading cars...</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cars: []
      };
    },
    mounted() {
      fetch('/api')
        .then(response => response.json())
        .then(data => {
          this.cars = data;
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }
  </script>
  