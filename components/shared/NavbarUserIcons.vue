<template>
  <v-flex
    class="hidden-md-and-down"
    shrink
  >
    <v-layout align-end>
      <v-btn
        icon
        large
        class="baseGrey--text mb-2"
      >
        <v-icon class="main-navbar__action-icon">
          description
        </v-icon>
      </v-btn>

      <v-btn
        icon
        large
        class="baseGrey--text"
      >
        <v-badge
          right
          overlap
          class="main-navbar__badge-icon"
        >
          <template v-slot:badge>
            3
          </template>
          <v-icon class="main-navbar__action-icon">
            mail
          </v-icon>
        </v-badge>
      </v-btn>

      <v-btn
        icon
        large
        class="baseGrey--text"
      >
        <v-badge
          right
          overlap
          class="main-navbar__badge-icon"
        >
          <template v-slot:badge>
            3
          </template>

          <v-icon class="main-navbar__action-icon">
            notifications
          </v-icon>
        </v-badge>
      </v-btn>

      <v-btn
        icon
        large
        class="main-navbar__more-btn baseGrey--text"
      >
        <v-icon class="main-navbar__action-icon">
          more_vert
        </v-icon>
      </v-btn>
    </v-layout>
  </v-flex>
</template>
