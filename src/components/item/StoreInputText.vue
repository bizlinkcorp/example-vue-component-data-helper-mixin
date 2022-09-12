<template>
  <v-text-field
    hide-details
    regular
    :class="classAttr"
    class="store-input-text"
    v-model="storeData"
    :label="itemViewState.label"
    :disabled="itemViewState.disabled"
  />
</template>
<script lang="ts" src="./StoreInputText.ts" />
<style lang="scss" scoped>
$requiredColor: red;
$pickupColor: orange;

.v-text-field.store-input-text {
  // 必須設定の表示
  &.input-require:not(.v-input--is-disabled) {
    :deep(.v-label) {
      color: $requiredColor;

      &.v-label--active {
        color: $requiredColor !important;
      }
    }
    :deep(.v-input__control) {
      .v-input__slot:after {
        border-color: $requiredColor;
      }
    }
  }

  // 注目設定の表示
  &.input-pickup:not(.v-input--is-disabled) {
    :deep(.v-label) {
      color: $pickupColor;

      &.v-label--active {
        color: $pickupColor !important;
      }
    }
    :deep(.v-input__control) {
      .v-input__slot:after {
        border-color: $pickupColor;
      }
    }
  }
}
</style>
