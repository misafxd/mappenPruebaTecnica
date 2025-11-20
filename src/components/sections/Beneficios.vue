<script setup>
const getIconURl = (path) => {
  return new URL(path, import.meta.url).href;
};

const beneficios = {
  beneficios: [
    {
      id: 1,
      icon: getIconURl("/iconos/icono-1.svg"),
      title: "Vicios ocultos",
      description:
        "Registra y da seguimiento a problemas estructurales sin complicaciones.",
    },
    {
      id: 2,
      icon: getIconURl("/iconos/icono-2.svg"),
      title: "Reportes de garantías",
      description:
        "Informa fallas o desperfectos de tu unidad directamente desde la app.",
    },
    {
      id: 3,
      icon: getIconURl("/iconos/icono-3.svg"),
      title: "Gestión centralizada",
      description:
        "Todo en un solo lugar, con historial y notidicaciones en tiempo real.",
    },
    {
      id: 4,
      icon: getIconURl("/iconos/icono-4.svg"),
      title: "Gestión centralizada",
      description:
        "Accede y gestiona espacios comunes de manera rápida y sencilla.",
    },
  ],
};
</script>

<template>
  <section class="container">
    <div class="wrapper">
      <h2 class="section-title">Beneficios para los residentes</h2>

      <div class="services-grid">
        <article
          class="beneficio-card"
          v-for="beneficio in beneficios.beneficios"
          :key="beneficio.id"
        >
          <div class="card-content">
            <div class="icon-container">
              <img :src="beneficio.icon" />
            </div>

            <h4>
              {{ beneficio.title }}
            </h4>
          </div>

          <p>
            {{ beneficio.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  padding-bottom: 2rem;
}

.wrapper {
  text-align: center;
  padding: 1rem;
}
.section-title {
  width: 100%;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;

  color: #393f4f;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin: 1rem;
}

.beneficio-card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #4b75df;
  font-weight: 600;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4b75df;
  width: fit-content;
  padding: 0.2rem;
  border-radius: 0.125rem;
  margin: 0.2rem;
}

.icon-container img {
  width: 1rem;
  height: 1rem;
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.card-content h4 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.card-content p {
  font-size: 1rem;
}

.mobile-icon {
  position: absolute;
}

@media (min-width: 768px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-title {
    font-size: 1.875rem;
  }

  .card-content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    margin: 4rem;
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
