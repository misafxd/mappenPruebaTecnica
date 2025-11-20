<script setup>
import Button from "../ui/Button.vue";
import { useBreakPoint } from "../../composables/useBreakPoint";

const { isMobile } = useBreakPoint();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="alert-badge">
          <img src="@/assets/Vector.svg" alt="reloj" />
          <span>Oferta válida sólo durante el black friday</span>
        </div>

        <h2 class="footer-title">Únete a la fase beta</h2>

        <Button :style="{ width: isMobile ? '80%' : '' }"
          >Contactar ahora</Button
        >
      </div>

      <div class="footer-bottom">
        <img src="@/assets/logo.png" alt="Footer Logo" />
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  color: white;
  font-family: "Montserrat", sans-serif;
}

.footer-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  padding-inline: 1rem;
}

.alert-badge {
  background-color: #f2a12566;
  color: #f2a125;
  padding-left: 1rem;
  padding-right: 1.5rem;
  padding-block: 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  font-weight: 700;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.footer-bottom {
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 84px 64px;
}

.footer-bottom img {
  object-fit: contain;
  width: 100%;
  height: 20rem;
}

@media (min-width: 768px) {
  .footer-title {
    font-size: 3rem;
  }
}
</style>
