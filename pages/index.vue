<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Statzy-P22' })
</script>

<template>
  <AwesomeWelcome :with-alert="true" />
</template>
