<script setup>
import { ref, onMounted } from "vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
  document.body.classList.add("modal-open");
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.classList.remove("modal-open");
};

onMounted(() => {
  setTimeout(openModal, 100);
  setTimeout(openModal, 100);
});

const handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};
</script>
<template>
  <div v-if="isModalOpen" class="modal-backdrop" @click="handleBackdropClick">
    <div
      class="modal-container"
      @click.stop
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div id="modal-title" class="modal-image-wrapper">
        <img
          src="../../assets/blackf.png"
          alt="Imagen de fondo promocional"
          class="modal-image"
        />
      </div>

      <button
        @click="closeModal"
        class="close-button"
        aria-label="Cerrar modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="close-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  transition: opacity 300ms;
}

.modal-container {
  position: relative;
  width: clamp(300px, 300px, 500px);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: scale(1);
  transition: transform 300ms;
}

.modal-image-wrapper {
  width: 100%;
  height: auto;
  max-height: 400px;
  overflow: hidden;
  background-color: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.close-button {
  position: absolute;
  top: -12px;
  right: -12px;
  z-index: 10;
  padding: 0.5rem;
  color: #1f2937;
  background-color: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color 150ms ease-in-out, transform 150ms ease-in-out;
}

.close-icon {
  height: 1.5rem;
  width: 1.5rem;
}
:global(body.modal-open) {
  overflow: hidden;
}
</style>
