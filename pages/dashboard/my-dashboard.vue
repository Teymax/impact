<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h4 class="dashboard__header">
          My Dashboard
        </h4>
      </v-flex>
      <v-flex xs12 class="dashboard__setup">
        <v-card>
          <v-card-title>
            First row
            <v-spacer />
            <v-btn flat>
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card>
          <v-card-title>Row 2 block 1</v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card>
          <v-card-title>Row 2 block 2</v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card>
          <v-card-title>Row 3 block 1</v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card>
          <v-card-title>Row 3 block 2</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard'
};
</script>

<style scoped>

</style>
