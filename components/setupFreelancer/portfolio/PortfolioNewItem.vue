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
              <v-flex>
                <label class="base-input-label">
                  {{ t('expertise') }}
                  <v-select
                    v-model="form.speclialization"
                    v-validate="'required'"
                    :items="specializationItems"
                    return-object
                    append-icon="keyboard_arrow_down"
                    :data-vv-name="t('expertise')"
                    :error-messages="errors.collect(t('expertise'))"
                    required
                    class="base-input mt-2"
                    solo
                  />
                </label>
              </v-flex>
              <v-flex shrink>
                <v-btn
                  depressed
                  fab
                  class="xsmall azure white--text step__btn-box"
                >
                  <v-icon class="step__btn">
                    add
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
                        v-model="form.portfolioTitle"
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
                    <v-btn depressed fab class="xsmall step__btn-box">
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
import { mapMutations } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import UppyImageUploader from '@/components/shared/UppyImageUploader';

export default {
  components: { UppyImageUploader },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'setupAccount',
      form: {
        speclialization: '',
        portfolioTitle: '',
        url: '',
        description: '',
        imageData: ''
      }
    };
  },
  computed: {
    specializationItems() {
      return ['Design | UX/UI design', 'Developer | front-end', 'Developer | back-end'];
    }
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
      this.form.imageData = data;
    }
  }
};
</script>
