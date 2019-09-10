<template>
  <v-flex shrink>
    <div
      v-if="!img && name"
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
    },
    mobileSize: {
      type: String,
      required: false,
      default: () => 'sm'
    }
  },
  computed: {
    avatarClasses() {
      return [`avatar--${this.size}`, `avatar-mobile--${this.mobileSize}`];
    },
    imageSize() {
      switch (this.size) {
        case 'xxs':
          return 28;
        case 'xs':
          return 40;
        case 'sm':
          return 48;
        case 'md':
          return 72;
        case 'lg':
          return 96;
        case 'xl':
          return 120;
        default:
          return 0;
      }
    }
  }
};
</script>
