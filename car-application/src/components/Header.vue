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
    name: "Header"
  }
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: #fff;
    padding: 1em;
    text-align: center;
  }
  
  nav {
    display: flex;
    justify-content: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1em;
  }
  
  li {
   
  