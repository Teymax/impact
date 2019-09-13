import { mapActions } from 'vuex';
import uuid from 'uuid/v4';
import serializeData from '@/mixins/serializeData';

export default {
  mixins: [serializeData],
  data() {
    return {
      isImageUploaded: false
    };
  },
  methods: {
    ...mapActions({
      updateProfileImage: 'profileImage/updateProfileImage'
    }),
    async saveProfileImageData(imageData, ownerId, ownerType, imageType) {
      const payload = {
        id: await uuid(),
        type: 'image',
        file: JSON.stringify(imageData),
        owner: {
          id: ownerId,
          type: ownerType
        },
        relationshipNames: ['owner']
      };
      const { file } = await this.updateProfileImage(this.serializeDataWithCustomAttribute(payload, imageType));

      return file || null;
    }
  }
};
