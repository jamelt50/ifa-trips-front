<template>
  <div
    :id="message.id"
    :class="{
      'items-start': message.from_id != $auth.user.id,
      'items-end': message.from_id == $auth.user.id,
    }"
    class="w-full flex flex-col my-2 px-4"
  >
    <div
      :class="{
        'bg-blue text-white': message.from_id != $auth.user.id,
        'border-blue border text-blue': message.from_id == $auth.user.id,
      }"
      class="px-3 py-2 rounded-2xl"
    >
      {{ message.content }}
    </div>
    <span class="opacity-70 text-sm">
      {{
        new Date(message.created_at).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })
      }}</span
    >
  </div>
</template>

<script>
export default {
  props: { message: { type: Object } },
}
</script>

<style>
</style>