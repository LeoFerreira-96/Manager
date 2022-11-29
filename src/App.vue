
<template>
<div class="body">
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
  </div>
</template>

<script setup>
import Notes from './Views/Notes.vue';
</script>

<style scoped>
.body {
  margin:50px 200px;
  padding: 20px;
  display: flex;
  justify-content: center;
  height: 650px;
  border-radius: 20px;
  border: 1px solid #5f5c5c ;
}
</style>
