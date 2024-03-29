<template>
  <v-flex xs12 sm10 md8>
    <v-layout column>
      <h3
        class="step__header step__header--mid"
      >
        {{ t('addPortfolio') }}
      </h3>
      <v-form>
        <v-layout column>
          <v-flex>
            <v-layout align-center>
              <SkillsInput @skill-changed="skillId => form.skillId = skillId" />
              <v-flex shrink>
                <v-btn
                  icon
                  small
                  class="xsmall step__btn-box azure--text"
                >
                  <v-icon size="28">
                    add_circle
                  </v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-layout>
              <v-flex>
                <v-layout align-center>
                  <v-flex>
                    <label
                      class="base-input-label"
                    >
                      {{ t('portfolioTitle') }}
                      <v-text-field
                        v-model="form.title"
                        v-validate="'required|min:2'"
                        :error-messages="errors.collect(t('portfolioTitle'))"
                        :data-vv-name="t('portfolioTitle')"
                        required
                        class="base-input mt-2"
                        solo
                        data-vv-validate-on="blur"
                      />
                    </label>
                  </v-flex>
                  <v-flex shrink>
                    <v-btn
                      icon
                      small
                      class="xsmall step__btn-box azure--text"
                    >
                      <span class="step__btn--mark" />
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs10 text-xs-left>
            <v-layout align-center>
              <v-flex shrink>
                <UppyImageUploader
                  upload-id="portfolio-item-uploader"
                  choose-file-label="Upload a profile picture"
                  @upload-succeed="setImageData"
                >
                  <v-btn
                    depressed
                    class="ml-0 step__add-portfolio uppy-uploader"
                  >
                    <v-icon color="white">
                      add
                    </v-icon>
                  </v-btn>
                </UppyImageUploader>
              </v-flex>
              <p> {{ t('mainImage') }}</p>
            </v-layout>
          </v-flex>
          <v-flex xs10 mt-3>
            <v-layout>
              <v-flex>
                <label class="base-input-label">
                  {{ t('url') }}
                  <v-text-field
                    v-model="form.url"
                    v-validate="'url'"
                    :error-messages="errors.collect(t('url'))"
                    :data-vv-name="t('url')"
                    required
                    class="base-input mt-2"
                    solo
                    data-vv-validate-on="blur"
                  />
                </label>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs10 mb-5>
            <label class="base-input-label">
              {{ t('description') }}
              <v-textarea
                v-model="form.description"
                solo
                class="base-input mt-2"
              />
            </label>
          </v-flex>
          <v-flex>
            <v-layout
              wrap
              class="step__btn-box--column"
            >
              <v-flex shrink>
                <v-btn
                  flat
                  round
                  large
                  class="azure white--text px-5 base text-none step__btn--large step__btn"
                  @click="addItem()"
                >
                  {{ t('addItem') }}
                </v-btn>
              </v-flex>
              <v-flex shrink>
                <v-btn
                  flat
                  round
                  large
                  class="error white--text base text-capitalize step__btn"
                  @click="backToList"
                >
                  {{ t('cancel') }}
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-form>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import uuid from 'uuid/v4';
import textTranslations from '@/mixins/textTranslations';
import UppyImageUploader from '@/components/shared/UppyImageUploader';
import SkillsInput from '@/components/shared/Inputs/SkillsInput';

export default {
  components: {
    UppyImageUploader,
    SkillsInput
  },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'setupAccount',
      form: {
        skillId: '',
        title: '',
        url: '',
        description: '',
        image: null
      }
    };
  },
  computed: {
    ...mapState({ freelancerId: state => state.auth.user.freelancer.id })
  },
  methods: {
    ...mapMutations({
      addPortfolioItem: 'setupFreelancer/ADD_PORTFOLIO_ITEM'
    }),
    async addItem() {
      const isValid = await this.$validator.validate();
      if (!isValid) return;

      this.addPortfolioItem(this.form);
      this.$emit('new-item-added');
      this.backToList();
    },
    backToList() {
      this.$emit('switch-component', 'PortfolioList');
    },
    setImageData(data) {
      const imageData = {
        id: uuid(),
        type: 'image',
        file: JSON.stringify(data)
      };
      this.form.image = imageData;
    }
  }
};
</script>
