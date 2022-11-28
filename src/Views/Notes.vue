<template>
  <h3>Notas</h3>
  <div class="mini-box">
    <InputText type="text" v-model="textgoal" /> {{ textgoal }}
    <Button icon="pi pi-check" class="p-button-rounded" @click="insertGoal" />
  </div>
  <div>
    <ul>
      <template v-for="( goal) in goals" :key="goal.id">
        <li v-if="goal.disable === 1">{{ goal.field }}<Button icon="pi pi-trash" class="p-button-rounded"
            @click="deleteGoal(goal.id)" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const textgoal = ref()

let goals = reactive([{
  "id": 1,
  "field": "um",
  "disable": 1
},
{
  "id": 2,
  "field": "dois",
  "disable": 1
}])

const insertGoal = () => {
  if (![null, undefined, 0, " "].includes(textgoal.value)) {
    goals.push({ "id": goals.length, "field": textgoal.value, "disable": 1 }),
      textgoal = ""
    return
  }
}

const deleteGoal = (id) => {
  console.log(id)
  goals.filter(item => {
    item.id == id ? item.disable = 0 : item.disable
  })
  goals.push({ "field": textgoal.value, "disable": 1 }),
    textgoal = ""
  return
}

</script>

<style scoped>
.mini-box {
  width: 500px;
  height: 100px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.mini-box button {
  margin-left: 20px;
}
</style>