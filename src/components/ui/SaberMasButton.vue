<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button class="btn-saber-mas">
    <img class="icon-svg" src="../../assets/Group.svg" alt="Group" />
    <span>{{ text }}</span>
  </button>
</template>

<style scoped>
.btn-saber-mas {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: #4a75e1;
  color: white;
  border: none;
  border-radius: 0.75rem;

  padding: 12px 24px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(74, 117, 225, 0.2);
}

.btn-saber-mas:hover {
  background-color: #3b62c2;
  transform: translateY(-2px);
}

.icon-svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
