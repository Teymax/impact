import { mapActions } from 'vuex';
import uuid from 'uuid/v4';

export default {
  methods: {
    ...mapActions({
      updateProfileImage: 'profileImage/updateProfileImage'
    }),
    async saveProfileImageData(imageData, ownerId, ownerType) {
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
      const imageType = { type: 'Avatar' };
      this.updateProfileImage(this.serializeDataWithCustomAttribute(payload, imageType));
    }
  }
};
