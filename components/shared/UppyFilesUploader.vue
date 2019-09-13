<template>
  <div id="uppy-dashboard-uploader" />
</template>

<script>
import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';
import Dashboard from '@uppy/dashboard';

export default {
  props: {
    uploadId: {
      type: String,
      required: true
    }
  },
  mounted() {
    const isDevelopment = process.env.NODE_ENV === 'development';

    const uppy = Uppy({
      id: this.uploadId,
      autoProceed: true,
      debug: true,
      restrictions: {
        maxFileSize: null,
        maxNumberOfFiles: 5,
        allowedFileTypes:
          ['image/*', 'application/pdf', 'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/rtf',
            'application/vnd.oasis.opendocument.presentation', 'application/vnd.oasis.opendocument.spreadsheet',
            'application/vnd.oasis.opendocument.text', 'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'text/csv', 'text/plain'
          ]
      }
    });
    uppy.use(Dashboard, {
      target: '#uppy-dashboard-uploader',
      inline: true,
      replaceTargetContent: true,
      showProgressDetails: true,
      width: '100%',
      height: 200
    });
    uppy.use(AwsS3, {
      companionUrl: isDevelopment ? 'http://localhost:3001' : '/'
    });
    uppy.on('upload-success', file => {
      const filesData = {
        id: file.meta.key.match(/^cache\/(.+)/)[1],
        storage: 'cache',
        metadata: {
          size: file.size,
          filename: file.name,
          mime_type: file.type
        }
      };
      this.$emit('upload-success', filesData);
    });
  }
};
</script>
