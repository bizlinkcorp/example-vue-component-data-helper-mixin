<template>
  <v-container>
    <div class="button-area">
      <v-btn href="/">to home</v-btn>
      <v-btn @click="clickRegister">登録</v-btn>
    </div>
    <v-row>
      <v-col cols="6">
        <product-header :title="disp.name" :ids="disp.propsIds" :m-data="`data.${disp.id}`" :m-view-state="`viewState.${disp.id}.disp.${disp.id}`" />
      </v-col>
      <v-col cols="6">
        <template v-if="refDisp">
          <product-header
            :title="refDisp.name"
            :ids="refDisp.propsIds"
            :m-data="`data.${refDisp.id}`"
            :m-view-state="`viewState.${disp.id}.refDisp.${refDisp.id}`"
          />
        </template>
      </v-col>
    </v-row>
    <!-- FIXME vuetify 3 で v-data-iterator の方向性が定まったら設定する
    <v-row>
      <v-col cols="12">
        <store-path :m-data="`data.${disp.id}`" :m-view-state="`viewState.${disp.id}`">
          <product-detail m-id="meisai"></product-detail>
        </store-path>
      </v-col>
    </v-row>
    -->
  </v-container>
</template>
<script lang="ts" src="./ProductTemplate.ts" />
<style lang="scss" scoped>
.button-area {
  margin-bottom: 0.4rem;
}
.v-row {
  padding-bottom: 0.4rem;
}
</style>
