<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">Notas e Lembretes</h2>
    </section>
    <Card />
  </main>
</template>

<script setup>
import Card from "../components/NoteCard.vue";
</script>

<style scopped>
.greeting {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>