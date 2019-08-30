<template>
  <v-flex
    xs12
    sm11
    md10
    lg9
    class="job-post__summary-container"
  >
    <v-layout
      wrap
      class="base-card overflow-hidden job-post__summary-content"
    >
      <v-flex
        class="toolbar-highlight job-post__toolbar"
      >
        <v-layout
          align-center
          justify-space-between
        >
          <v-flex shrink>
            <v-layout
              align-center
              justify-start
              wrap
            >
              <Avatar
                name="W A"
                size="xxs"
              />
              <v-flex shrink>
                <h4 class="d-inline">
                  WWF Company -
                </h4>
                <p class="ma-0 d-inline">
                  non-profit,
                </p>
                <p class="ma-0 d-inline">
                  animals
                </p>
              </v-flex>
              <v-flex shrink class="ml-3">
                <v-flex class="align-center d-inline">
                  <v-icon size="20" color="aqua">
                    location_on
                  </v-icon>
                  <p class="ma-0 ml-1 d-inline">
                    France
                  </p>
                </v-flex>
                <v-flex class="align-center d-inline ml-1">
                  <v-icon size="20" color="aqua">
                    star_border
                  </v-icon>
                  <p class="ma-0 ml-1 d-inline">
                    80%
                  </p>
                </v-flex>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex shrink>
            <v-btn
              icon
              small
              class="mx-1"
            >
              <v-icon size="20">
                favorite_border
              </v-icon>
            </v-btn>
            <v-btn
              icon
              small
              class="mx-1"
            >
              <v-icon size="20">
                more_vert
              </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex
        xs12
      >
        <v-layout
          align-center
          class="job-post__edit-box"
        >
          <h2
            v-if="!isTitleEdited"
            class="job-post__header job-post__header--final"
          >
            {{ title }}
          </h2>
          <v-flex
            v-if="isTitleEdited"
          >
            <v-text-field
              v-model="title"
              class="base-input mt-3"
              solo
              flat
            />
          </v-flex>
          <ButtonEdit
            :is-edited="isTitleEdited"
            @click.native="isTitleEdited = !isTitleEdited"
          />
        </v-layout>
      </v-flex>
      <v-flex xs12 text-xs-left>
        <v-chip class="base">
          budget
        </v-chip>
        <v-chip class="base">
          Price
        </v-chip>
      </v-flex>
      <v-flex
        xs12
        class="mt-3"
      >
        <v-layout>
          <v-flex
            v-if="!isDescriptionEdited"
            class="job-post__summary-description"
          >
            <p class="ma-0 text-xs-left">
              {{ description }}
            </p>
          </v-flex>
          <v-flex
            v-else
          >
            <v-textarea
              v-model="description"
              v-validate="'required'"
              :error-messages="errors.collect(t('jobDescription'))"
              :data-vv-name="t('jobDescription')"
              class="base-input"
              solo
              required
            />
          </v-flex>
          <ButtonEdit
            :is-edited="isDescriptionEdited"
            @click.native="isDescriptionEdited = !isDescriptionEdited"
          />
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout
      justify-center
      class="mt-3"
    >
      <v-btn
        round
        flat
        outline
        class="base text-none azure azure--text"
        @click="goToPreviousStep"
      >
        {{ t('back') }}
      </v-btn>
      <v-btn
        round
        flat
        class="base text-none azure white--text"
        @click="goToNextStep"
      >
        {{ t('continue') }}
      </v-btn>
    </v-layout>
  </v-flex>
</template>

<script>
import nextStepBtn from '@/components/setupMixins/nextStepBtn';
import previousStepBtn from '@/components/setupMixins/previousStepBtn';
import textTranslations from '@/mixins/textTranslations';
import Avatar from '@/components/shared/AvatarComponent';
import ButtonEdit from '@/components/shared/ButtonEdit';

export default {
  components: { Avatar, ButtonEdit },
  mixins: [textTranslations, nextStepBtn, previousStepBtn],
  data() {
    return {
      translationScope: 'postJob',
      isTitleEdited: false,
      isDescriptionEdited: false,
      title: 'UX designer at WWF (worldwildlife.org)',
      description: 'UX Designers at worldwildlife.org are responsible for creating meaningful and relevant experiences for our end users, meeting and minimizing the amount of difficult they have in interacting with our product and brand.'
    };
  }
};
</script>
