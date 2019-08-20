<template>
  <v-layout row fluid justify-center wrap>
    <v-flex
      v-for="item in itemsList"
      :key="getItemName(item)"
      xs12
      sm9
      class="setup-item__container"
    >
      <SingleItem
        :item-content="{header: getItemName(item)}"
      />
    </v-flex>
    <v-flex xs12 sm9 d-flex justify-center>
      <v-btn
        block
        outline
        round
        large
        class="step__add-btn azure--text px-3"
        :class="{'mt-5': itemsList.length}"
        @click="$emit('switch-component')"
      >
        <v-layout>
          <v-icon>add</v-icon>
          <v-spacer />
          <p class="ma-0">
            {{ t(textProps.addButon) }}
          </p>
          <v-spacer />
        </v-layout>
      </v-btn>
    </v-flex>
    <v-flex
      v-if="itemsList.length"
      d-flex
      justify-center
      xs12
      sm7
      md4
      mt-5
    >
      <v-btn
        v-if="itemsList.length"
        block
        flat
        round
        class="azure white--text text-none base step__btn--large"
        @click="$emit('next-step', true)"
      >
        {{ t('saveContinue') }}
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';
import SingleItem from './SingleListIem';

export default {
  components: { SingleItem },
  mixins: [textTranslations],
  props: {
    itemsList: {
      type: Array,
      required: true
    },
    textProps: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      translationScope: 'setupAccount'
    };
  },
  methods: {
    getItemName(item) {
      return item.portfolioTitle ? item.portfolioTitle : item;
    }
  }
};
</script>
