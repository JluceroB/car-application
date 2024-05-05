<template>
    <header>
      <nav>
        <ul>
          <li><a href="#about">About this Website</a></li>
          <li><a href="#inventory">Car Inventory</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header-app"
  }
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: #fff;
    padding: 1em;
  }
  
  ul {
    list-style: none;
    display: flex;
    gap: 1em;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
  </style>
  