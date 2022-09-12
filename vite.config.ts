import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import tsconfigPaths from 'vite-tsconfig-paths';
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';

// plugin説明
//   @vitejs/plugin-vue2 ⇒ vue2 vite 利用の為の plugin
//   vite-tsconfig-paths ⇒ ソースコードのalias解決(import hoge from '@/path/to/hoge' の "@" の解決）。vite.config.ts で resolve.alias を指定する方法もあるが、tsconfig.json の管理に統一する。

export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths(),
    Components({
      // Vuetify コンポーネントを import するための設定です。
      resolvers: [VuetifyResolver()],
      // プロジェクトルートに型定義ファイルを出力してくれるのですが
      // 型チェックのエラーを解消できなかったため無効化しています。
      dts: false,
    }),
  ],
  // css: {
  //   devSourcemap: false,
  // },
});
