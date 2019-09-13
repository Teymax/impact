<template>
  <div>
    <div @click="$refs.upload.click()">
      <slot />
    </div>
    <input
      ref="upload"
      class="visibility--hidden"
      :style="{'height': '1px', 'width': '1px', 'position': 'absolute'}"
      type="file"
      @change="addFile"
    >
    <p> {{ message }}</p>
  </div>
</template>

<script>
import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations],
  props: {
    uploadId: {
      type: String,
      required: true
    },
    chooseFileLabel: {
      type: String,
      default: 'Choose file'
    }
  },
  data() {
    return {
      translationScope: 'uploads',
      message: '',
      uppy: Uppy({
        id: this.uploadId,
        autoProceed: true,
        debug: true,
        restrictions: {
          maxFileSize: null,
          allowedFileTypes: ['image/*']
        }
      })
    };
  },
  mounted() {
    const isDevelopment = process.env.NODE_ENV === 'development';

    this.uppy.use(AwsS3, {
      companionUrl: isDevelopment ? 'http://localhost:3001' : '/'
    });
    this.uppy.on('upload-success', (file, response) => {
      const imageData = {
        file: file.meta.key.match(/^uploads\/(.+)/)[1],
        filename: file.name,
        mimeType: file.type,
        size: file.size,
        url: response.uploadURL
      };
      this.$emit('upload-succeed', imageData);
      this.message = this.t('imageUploadSucceed');
    });
    this.uppy.on('upload-error', () => {
      this.message = this.t('imageUploadFailed');
    });
  },
  methods: {
    addFile(e) {
      const file = e.target.files[0];

      this.uppy.addFile({
        name: file.name,
        type: file.type,
        data: file
      });
    }
  }
};
</script>
