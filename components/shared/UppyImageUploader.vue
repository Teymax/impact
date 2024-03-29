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
    this.uppy.on('upload-success', file => {
      const imageData = {
        id: file.meta.key.match(/^cache\/(.+)/)[1],
        storage: 'cache',
        metadata: {
          size: file.size,
          filename: file.name,
          mime_type: file.type
        }
      };
      this.handleImageUppload(imageData);
    });
    this.uppy.on('upload-error', () => {
      this.handleImageUppload(null);
    });
  },
  methods: {
    addFile(e) {
      const file = e.target.files[0];

      try {
        this.uppy.addFile({
          name: file.name,
          type: file.type,
          data: file
        });
      } catch (error) {
        this.handleImageUppload(null);
      }
    },
    handleImageUppload(data) {
      this.$emit('handle-image-uppload', data);
    }
  }
};
</script>
