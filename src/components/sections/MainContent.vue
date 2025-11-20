<script setup>
import { ref } from "vue";
import Button from "../ui/Button.vue";
import PlaneCard from "../ui/PlaneCard.vue";
import data from "../../data.json";
import { useBreakPoint } from "../../composables/useBreakPoint";

const { isMobile } = useBreakPoint();

const plans = ref(data.plans);
</script>

<template>
  <section class="container section-padding">
    <div class="wrapper">
      <div class="section-title-group">
        <h2 class="section-title">
          Optimiza tu <strong>gestión posventa</strong> desde hoy
        </h2>
      </div>

      <div class="split-content">
        <div class="content">
          <p>
            Únete al grupo exclusivo de <strong>usuarios beta</strong>.<br />

            Accede primero a nuevas funciones y comparte tus comentarios para
            ayudarnos a perfeccionar la experiencia.
          </p>
          <div class="image-container" v-if="isMobile" style="order: 2">
            <img src="../../assets/main.jpg" alt="Main Feature" />
            <div class="features">
              <span class="dot">Sin instalacion compleja</span>
              <span class="dot">Sin instalacion compleja</span>
            </div>
          </div>

          <div v-if="!isMobile" class="features">
            <span class="dot">Sin instalacion compleja</span>
            <span class="dot">Sin instalacion compleja</span>
          </div>
          <Button style="margin-top: 1rem">Ver demo</Button>
        </div>
        <div v-if="!isMobile" style="order: 2">
          <img src="../../assets/main.jpg" alt="Main Feature" />
        </div>
      </div>

      <div class="features-grid">
        <PlaneCard v-for="plan in plans" :key="plan.id" :plan="plan" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  font-family: "Montserrat", sans-serif;
  background-color: #182044;
  display: flex;
  justify-content: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  padding: 1rem;
}

.section-padding {
  padding-inline: 1rem;
}

.image-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-container .features {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}

img {
  max-width: 100%;
  display: block;
  border-radius: 1rem;
}

.section-title-group {
  text-align: center;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 500;
  color: #fff;
}

.split-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 5rem;
  max-width: 57rem;
}

.features {
  display: flex;
  gap: 1rem;
}

.content {
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-self: start;

  font-weight: 400;
  font-size: 1.125rem;
  color: #fff;
  align-items: center;
}

.split-content p {
  text-align: center;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.dot {
  color: #fff;
  font-size: 0.7rem;
  display: inline-flex;
  align-items: center;
  padding-left: 12px;
  position: relative;
}

.dot::before {
  content: "";
  background-color: #f2a125;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  left: 0;
}

@media (min-width: 768px) {
  .split-content {
    flex-direction: row;
    align-items: center;
  }
  .split-content > * {
    width: 50%;
  }
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .section-title-group {
    margin-bottom: 3rem;
  }

  .dot {
    font-size: 0.8rem;
    gap: 0.5rem;
  }
}
</style>
