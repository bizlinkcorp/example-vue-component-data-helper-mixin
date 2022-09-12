import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import tsconfigPaths from 'vite-tsconfig-paths';

// plugin説明
//   @vitejs/plugin-vue2 ⇒ vue2 vite 利用の為の plugin
//   vite-tsconfig-paths ⇒ ソースコードのalias解決(import hoge from '@/path/to/hoge' の "@" の解決）。vite.config.ts で resolve.alias を指定する方法もあるが、tsconfig.json の管理に統一する。

export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    tsconfigPaths({ loose: true }),
  ],
  // css: {
  //   devSourcemap: false,
  // },
});
