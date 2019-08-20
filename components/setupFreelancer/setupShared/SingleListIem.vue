<template>
  <v-layout
    align-center
    justify-space-between
    class="setup-item__block"
  >
    <v-flex
      class="setup-item__img"
      shrink
    >
      <v-img
        v-if="itemContent.img"
        contain
        :src="itemImage"
      />

      <v-icon
        v-else
      >
        attachment
      </v-icon>
    </v-flex>

    <v-flex shrink>
      <h3 class="setup-item__header">
        {{ itemContent.header }}
      </h3>
    </v-flex>

    <v-flex shrink>
      <v-btn
        icon
        small
        class="baseGrey--text"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  props: {
    itemContent: {
      required: true,
      type: Object
    }
  }
};
</script>
