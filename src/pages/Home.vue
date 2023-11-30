<script setup>

import HomeInner from './HomeInner.vue';

</script>

<template>

	<h4>Home page</h4>

	<HomeInner>

		<template v-slot:header>
			<p>Header</p>
		</template>

		<template v-slot:footer>
			<p>Footer</p>
		</template>

	</HomeInner>

</template>
