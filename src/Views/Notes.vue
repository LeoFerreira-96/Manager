<template>
  <main class="app">
    <section class="notes">
      <h2>Notas e Lembretes</h2>
      <Button
        :label="TitleCard"
        icon="pi pi-plus"
        class="p-button-lg"
        @click="cards++"
        :disabled="disable"
      />
    </section>
    <div class="cards">
      <template v-for="card in cards" :key="card">
        <Card v-on:closeList="cards--" />
      </template>
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import Card from "../components/NoteCard.vue";

const cards = ref(1);
const disable = ref(false);

watch(cards, (cardValue) => {
  if (cardValue < 0 || cardValue >= 3) {
    disable.value = true;
  } else {
    disable.value = false;
  }
});

const TitleCard = computed(() => {
  return `${cards.value} / 3`;
});
</script>

<style scopped>
.notes {
  display: flex;
  align-items: center;
  justify-content: center;
}
.notes Button {
  margin-left: 20px;
}

.cards {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
</style>