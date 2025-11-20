<script setup>
import { useBreakPoint } from "../../composables/useBreakPoint";
const { isMobile } = useBreakPoint();
</script>

<template>
  <section class="container">
    <div class="wrapper">
      <h2 v-if="!isMobile" class="section-title">¿Cómo funciona?</h2>
      <div class="reverse-split-container">
        <div class="info-box">
          <img src="../../assets/logo.png" alt="Team" />
          <h4>
            Control total,<br />
            <strong>operación eficiente</strong>
          </h4>
          <p>
            Optimiza la gestión posventa con una plataforma diseñada para
            maximizar eficiencia.
          </p>
          <img v-if="isMobile" src="../../assets/image-2.jpg" alt="celular" />
        </div>

        <div class="mock-container">
          <h2 v-if="isMobile" class="section-title">¿Cómo funciona?</h2>
          <img src="../../assets/video-mock.png" alt="Stats" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
}

.wrapper {
  padding: 0;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #393f4f;
}

h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
}

.reverse-split-container {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
}

.info-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  padding-block: 1.5rem;

  background-color: #fff;
  text-align: center;
  max-width: 100vw;
}

.info-box p {
  font-size: 0.875rem;
  margin: 0;
}

.info-box img {
  padding: 1rem;
  border-radius: 2rem;
}

.mock-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 1rem;
  margin: 2rem;
}

.mock-container img {
  width: 100%;
}

@media (min-width: 768px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1280px;
    padding-inline: 5rem;
    padding: 2rem;
  }
  .container {
    background-color: #fff;
    padding: 0;
    margin: 0;
  }

  .mock-container {
    margin: 0;
    padding: 0;
    min-width: 50%;
  }

  .info-box {
    flex: 1;
    padding: 1rem 5.25rem;
  }

  h4 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    color: #182430;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  img {
    width: 100%;
    height: auto;
  }
  .reverse-split-container {
    flex-direction: row;
  }
}
</style>
