<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        Notas e Lembretes
      </h2>
    </section>
    <section class="create-todo">
        <form @submit.prevent="addTodo">
          <input
            v-model="newGoal"
            placeholder="Qual sua nota ou lembrete?"
            class="new-todo"
            type="text"
          >
          <Button type="submit">Adicionar</Button>
        </form>
    </section>
    <section class="listGoals">
      <div class="list">
        <template v-for="goal in myGoals_asc" :key="goal.createdAt">
          <div v-if="!goal.disable">{{goal.name}}</div>
          <div class="actions">
            <Button class="delete" @click="removeGoal(goal)">Apagar</Button>
          </div>
            
        </template>
      </div>
    </section>
  </main>
  
</template>

<script setup>
import { ref, computed } from "vue";
import { v4 as uuidv4 } from 'uuid';

const newGoal = ref();
const myGoals = ref([])

const addTodo = () => {
  if(newGoal.value.trim().includes(["",undefined, null])) {
    console.log("Vazio")
    return 
  }
  myGoals.value.push({
    id: uuidv4(),
    name:newGoal.value,
    done: false,
    disable: false,
    createdAt: new Date().getTime(),
  })
  console.log(myGoals.value)
}

  const removeGoal = (goal) => {
    myGoals.value = myGoals.value.filter(item => item.id !== goal.id)

  }

const myGoals_asc = computed(() => myGoals.value.sort((a,b) => {
  return b.createdAt - a.createdAt
}))

</script>
