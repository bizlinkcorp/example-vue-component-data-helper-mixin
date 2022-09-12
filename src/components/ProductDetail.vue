<template>
  <v-container>
    <v-data-iterator :items="storeData" :items-per-page="5">
      <template #header="props">
        <!-- 明細一覧のタイトル -->
        <v-toolbar dense color="blue-grey lighten-1" flat style="margin-bottom: 1rem">
          <v-toolbar-title class="mr-auto">明細</v-toolbar-title>
          <v-toolbar-items style="padding: 0.5rem">
            <v-btn fab x-small rounded color="light-blue lighten-2" @click="onAdd(props)"><v-icon>mdi-plus</v-icon></v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </template>
      <template #default="props">
        <!-- 明細行 -->
        <v-row v-for="(item, idx) in props.items" :key="idx">
          <v-col cols="12" style="padding-bottom: 0.1rem; padding-top: 0">
            <v-card outlined rounded="0">
              <v-list dense style="padding: 0">
                <v-list-item>
                  <!-- 明細データエリア -->
                  <v-list-item-content>
                    <v-text-field
                      hide-details
                      dense
                      regular
                      readonly
                      label="no"
                      :value="idx + (props.pagination.page - 1) * props.pagination.itemsPerPage + 1"
                    />
                    <v-text-field hide-details dense regular readonly label="品目ID" :value="item.id" />
                    <v-text-field hide-details dense regular readonly label="品目名" :value="item.name" />
                    <v-text-field hide-details dense regular readonly label="単価" :value="item.unitAmount" />
                    <v-text-field hide-details dense regular readonly label="数量" :value="item.num" />
                    <v-text-field hide-details dense regular readonly label="金額" :value="item.unitAmount * item.num" />
                  </v-list-item-content>
                  <!-- 明細アクションボタン -->
                  <v-list-item-action>
                    <v-btn
                      fab
                      x-small
                      depressed
                      dark
                      color="orange"
                      @click="onEdit(idx + (props.pagination.page - 1) * props.pagination.itemsPerPage, item, props)"
                      ><v-icon>mdi-pencil</v-icon></v-btn
                    >
                    <v-btn
                      fab
                      x-small
                      depressed
                      dark
                      color="blue-grey"
                      @click="onDelete(idx + (props.pagination.page - 1) * props.pagination.itemsPerPage, item, props)"
                      ><v-icon>mdi-minus</v-icon></v-btn
                    >
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    <!-- 通知エリア -->
    <v-snackbar v-model="notice" bottom right text
      >{{ message }}
      <template #action>
        <v-btn fab x-small @click="notice = false"><v-icon>mdi-close</v-icon></v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script lang="ts" src="./ProductDetail.ts" />
<style lang="scss" scoped>
.v-text-field {
  margin: 0.5rem 0.5rem;
}
.v-list-item__action {
  flex-direction: row;
}
</style>
