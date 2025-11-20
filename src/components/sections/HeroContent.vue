<script setup>
import Button from "../ui/Button.vue";
import { useBreakPoint } from "../../composables/useBreakPoint";

const { isMobile } = useBreakPoint();
</script>

<template>
  <section class="hero-section">
    <div class="hero-bg">
      <img src="../../assets/Banner.png" alt="Hero Background" />
    </div>

    <div class="hero-content-wrapper">
      <div class="hero-card">
        <div>
          <p class="descuento">
            <span class="numero">35</span><span class="ofertas">% OFF</span>
          </p>
          <p class="descripcion">En nuestra <br />plataforma posventa</p>
        </div>

        <Button v-if="!isMobile">Obtener 35% off</Button>
      </div>
    </div>

    <Button v-if="isMobile">Obtener 35% off</Button>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  position: relative;
  color: white;
  align-items: center;
}

.hero-bg {
  width: 100%;
  height: 50vh;
  position: relative;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content-wrapper {
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 10%;
}

.hero-card {
  max-width: 21rem;
  text-align: center;
  color: white;
  font-family: "Staatliches", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.descuento {
  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 2.5rem;
}
.numero {
  font-size: 6.5rem;
  font-weight: 400;
}
.ofertas {
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  align-items: center;
  margin-left: 0.5rem;
  font-weight: 700;
  font-size: 3.125rem;
  width: 3ch;
  line-height: 0.75;
}
.descripcion {
  font-size: 1.125rem;
}

button {
  margin-block: 3rem;
}

@media (min-width: 768px) {
  .hero-section {
    display: block;
  }
  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .hero-content-wrapper {
    height: 100%;
    max-width: 1280px;
    top: 0;
    justify-content: center;
    align-items: flex-start;
    z-index: 10;
  }
  .hero-card {
    margin: 0;
  }

  .ofertas {
    font-size: 3.125rem;
  }

  .descuento {
    max-height: 6.5rem;
    margin: 0;
  }
  .descripcion {
    font-size: 2.5rem;
    margin: 0;
  }

  button {
    margin: 0;
  }
}
</style>
