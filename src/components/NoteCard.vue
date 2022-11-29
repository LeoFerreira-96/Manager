<template>
  <Card style="width: 25em">
    <template #title>
      <section>
        <form @submit.prevent="addTodo" class="create-todo">
          <input
            v-model="newGoal"
            placeholder="Qual sua nota ou lembrete?"
            class="new-todo"
            type="text"
          />
          <Button type="Submite">Adicionar</Button>
        </form>
      </section>
    </template>
    <template #content>
      <section class="listGoals">
        <ul class="list create-todo">
          <template v-for="goal in myGoals_asc" :key="goal.createdAt">
            <li v-if="!goal.disable">
              {{ goal.name }}
              <Button class="delete" @click="removeGoal(goal)">Apagar</Button>
            </li>
            <div class="actions">
              <Button class="delete" @click="removeGoal(goal)">Apagar</Button>
            </div>
          </template>
        </ul>
      </section>
    </template>
  </Card>
</template>

<script setup>
import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";

const newGoal = ref();
const myGoals = ref([]);

const addTodo = () => {
  if (newGoal.value.trim().includes(["", undefined, null])) {
    console.log("Vazio");
    return;
  }
  myGoals.value.push({
    id: uuidv4(),
    name: newGoal.value,
    done: false,
    disable: false,
    createdAt: new Date().getTime(),
  });
  console.log(myGoals.value);
};

const removeGoal = (goal) => {
  myGoals.value = myGoals.value.filter((item) => item.id !== goal.id);
};

const myGoals_asc = computed(() =>
  myGoals.value.sort((a, b) => {
    return b.createdAt - a.createdAt;
  })
);
</script>

<style scoped>
.create-todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.new-todo {
  width: 220px;
  height: 15px;
  padding: 20px;
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>