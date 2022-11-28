
<template>
  <TabView>
    <TabPanel header="Resumo">
      <Resume />
    </TabPanel>
    <TabPanel header="Anotações">
      <Notes />
    </TabPanel>
    <TabPanel header="Contas">
      <Invoices />
    </TabPanel>
    <TabPanel header="Configurações">
      <Configurations />
    </TabPanel>
  </TabView>
</template>

<script setup>
import Notes from './Views/Notes.vue';
</script>

<style scoped>

</style>
