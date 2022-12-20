<script setup lang="ts">
import { useCounter } from '../entities/counter/store';

const store = useCounter()
</script>

<template>
  <span>{{store.count}}</span>
  <button @click="store.increment">increase</button>
  <button @click="store.decrement">decrement</button>
</template> 