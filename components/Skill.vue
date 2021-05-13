<template>
  <div>
    <i
      :class="icon"
      class="colored"
    />
    <div class="profile-section__title--sm">{{ title }}</div>
    <div class="profile-section__title--sm"><i
      v-for="n in stars"
      :key="n"
      class="fa fa-star"
    /></div>
  </div>
</template>
<script>
export default {
	props: ['title', 'stars', 'icon'],
};
</script>
