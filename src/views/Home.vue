<template>
	<div>
		{{ doubleValue }}

		<button @click="doDecrement"></button>
	</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useCounterStore } from '../store';

// access the `store` variable anywhere in the component ✨
const store = useCounterStore();

// setTimeout(() => {
store.increment();
// }, 1000);

function doDecrement() {
	store.decrement();
}

// ✅ this one will be reactive
// 💡 but you could also just use `store.doubleCount` directly
const doubleValue = computed(() => store.doubleCount);
</script>

<style lang="less"></style>
