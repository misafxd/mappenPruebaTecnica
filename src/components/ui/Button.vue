<script setup></script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  line-height: 100%;
  background-color: #f2a125;
  color: black;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  transition: transform 0.2s, background-color 0.2s;
  z-index: 1;
  width: 10.75rem;
  height: 3rem;
  border: none;
  box-shadow: 4px 4px 10px 0px #ffd56240;
}
</style>
