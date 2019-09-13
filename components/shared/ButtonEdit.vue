<template>
  <v-btn
    fab
    depressed
    small
    color="azure"
    class="xxs"
    :class="{'mb-4': isEdited}"
  >
    <v-icon size="20" color="white">
      {{ isEdited ? 'done' : 'edit' }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    isEdited: {
      type: Boolean,
      required: true
    }
  }
};
</script>
