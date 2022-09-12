<template>
  <v-container>
    <h2 :class="{ 'header-disabled': headerDisabled }">{{ title }}</h2>
    <v-row>
      <v-col cols="6">
        <store-input-text :m-id="ids.status" />
        <store-input-text :m-id="ids.no" />
        <store-input-text :m-id="ids.date" />
        <store-input-text :m-id="ids.name" />
        <store-input-text :m-id="ids.customer" />
        <store-input-text :m-id="ids.destination" />
      </v-col>
      <v-col cols="6">
        <store-input-text :m-id="ids.amount" />
        <store-input-text :m-id="ids.deliveryDate" />
        <store-input-text :m-id="ids.charge" />
        <store-input-text :m-id="ids.absDate" />
        <store-input-text :m-id="ids.remarks" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" src="./ProductHeader.ts" />
<style lang="scss" scoped>
.header-disabled {
  color: rgba(0, 0, 0, 0.38);
}
</style>
