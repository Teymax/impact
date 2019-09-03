<template>
  <v-flex xs12 mt-3>
    <v-layout align-center>
      <v-flex xs12 text-xs-left>
        <label
          class="base-input-label"
        >
          {{ questionContent.name }}
          <v-text-field
            v-if="!questionContent.question"
            v-model="questionInput"
            v-validate="'required|min:5'"
            class="base-input mt-2"
            :error-messages="errors.collect(questionContent.name)"
            :data-vv-name="questionContent.name"
            solo
            @change="emitQuestion"
          />
          <p
            v-else
            class="step__custom-question"
          >
            {{ questionContent.question }}
          </p>
        </label>
      </v-flex>
      <v-btn
        icon
        :class="{ 'mt-4': questionContent.question }"
        @click="$emit('remove-question', id)"
      >
        <v-icon color="baseGrey">
          close
        </v-icon>
      </v-btn>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  props: {
    questionContent: {
      required: true,
      type: Object
    },
    id: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      questionInput: null
    };
  },
  watch: {
    id() {
      this.questionInput = this.questionContent.question;
    }
  },
  mounted() {
    this.questionInput = this.questionContent.question || null;
  },
  methods: {
    emitQuestion() {
      this.$emit('emit-question', {
        value: this.questionInput, id: this.id
      });
    }
  }
};
</script>
