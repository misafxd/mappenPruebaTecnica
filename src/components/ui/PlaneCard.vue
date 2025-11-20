<script setup>
import SaberMasButton from "./SaberMasButton.vue";
import { ref } from "vue";

const props = defineProps({
  plan: {
    type: Object,
    required: true,
  },
});

const isActive = ref(false);
const isDestacado = ref(false);

isActive.value = props.plan.activo;
isDestacado.value = props.plan.destacado;
</script>

<template>
  <div
    class="feature-card"
    :class="{ destacado: isDestacado, activo: isActive }"
  >
    <span v-if="plan.categorias.length > 0" class="badge">{{
      plan.categorias[0]
    }}</span>
    <h3 class="card-title">{{ plan.nombre }}</h3>
    <p class="card-description">
      {{ plan.descripcionCorta }}
    </p>
    <SaberMasButton :text="plan.boton.texto" />
  </div>
</template>

<style scoped>
.feature-card {
  font-family: "Montserrat", sans-serif;
  background-color: #f9fafb;
  padding: 1.5rem;
  border: 1px solid #f3f4f6;
  border-radius: 0.75rem;
  transition: box-shadow 0.3s;
  text-align: center;
}

.feature-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-description {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.badge {
  background-color: #f2a125;
  color: #000;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-weight: 700;
}

.activo {
  border-color: #f2a125;
}

.destacado {
  border: 3px solid #f2a125;
  box-shadow: 4px 4px 10px 0px #ffd56240;
}
</style>
