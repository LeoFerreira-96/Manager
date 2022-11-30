
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
import Resume from "./Views/Resume.vue";
import Notes from "./Views/Notes.vue";
import Invoices from "./Views/Invoices.vue";
import Configurations from "./Views/Configurations.vue";
</script>

<style>
.p-tabview-nav {
  display: flex;
  justify-content: center;
}
</style>
