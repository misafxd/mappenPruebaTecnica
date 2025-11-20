import { ref, onMounted, onUnmounted } from "vue";

export function useBreakPoint(breackPoint = 768) {
  const isMobile = ref(window.innerWidth < breackPoint);

  const updateIsMobile = () => {
    isMobile.value = window.innerWidth < breackPoint;
  };

  onMounted(() => {
    window.addEventListener("resize", updateIsMobile);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateIsMobile);
  });

  return {
    isMobile,
  };
}
