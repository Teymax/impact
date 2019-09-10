<template>
  <v-layout
    class="notification__container notification__container--short"
    :class="`notification__container--${messageType}`"
  >
    <v-spacer />
    <v-flex d-flex align-center>
      <v-icon
        mr-2
        size="28"
        :class="`${messageType}--text`"
      >
        {{ icon }}
      </v-icon>
      <p class="mb-0 d-inline notification__message">
        {{ message }}
      </p>
    </v-flex>
    <v-flex>
      <v-btn
        icon
        class="xxs mx-2"
        small
        @click="closeMessage"
      >
        <v-icon
          :class="`${messageType}--text`"
          size="18"
        >
          close
        </v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    messageType: {
      type: String,
      required: true,
      validator: value => ['success', 'warning', 'error', 'info'].includes(value)
    },
    message: {
      type: String,
      required: true
    }
  },
  computed: {
    icon() {
      const { messageType } = this;

      if (messageType === 'success') return 'check_circle';
      return 'error';
    }
  },
  methods: {
    closeMessage() {
      this.$emit('close-message');
    }
  }
};
</script>
