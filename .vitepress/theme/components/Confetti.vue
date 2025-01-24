<script setup lang="ts">
import confetti from "canvas-confetti";

/* 纸屑 */
confetti({
  particleCount: 500,
  spread: 160,
  origin: { y: 1 },
  gravity: -2,
});
onclick = e => confetti({
  origin: {
    x: e.clientX / innerWidth,
    y: e.clientY / innerHeight
  },
  gravity: 0,
  spread: 360,
  ticks: 50,
});
</script>