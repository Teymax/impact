<template>
  <v-flex shrink>
    <div
      v-if="name"
      class="avatar"
      :class="avatarClasses"
    >
      {{ name | initials }}
    </div>
    <v-img
      v-else
      :src="img"
      :height="imageSize"
      :width="imageSize"
      contain
      class="avatar-img"
    />
  </v-flex>
</template>

<script>
export default {
  name: 'AvatarComponent',
  filters: {
    initials(text) {
      const splitedText = text.split(' ');
      return splitedText.map(word => word[0]).join('').toUpperCase();
    }
  },
  props: {
    name: {
      type: String,
      required: false,
      default: () => null
    },
    img: {
      type: String,
      required: false,
      default: () => null
    },
    size: {
      type: String,
      required: true
    }
  },
  computed: {
    avatarClasses() {
      return this.name ? `avatar--${this.size}` : `avatar-img--${this.size}`;
    },
    imageSize() {
      switch (this.size) {
        case 'xxs':
          return 28;
        case 'xs':
          return 40;
        case 'sm':
          return 48;
        default:
          return 0;
      }
    }
  }
};
</script>
