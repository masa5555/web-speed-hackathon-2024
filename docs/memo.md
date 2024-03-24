- 形式: ["esm"] を忘れずに含めてください。これにより、tsup に ESM ファイルを出力するように指示されます。ESM ファイルは、ツリーシェイキングをサポートする唯一の形式です。古いバンドラーをサポートしたい場合は、cjs を出力することも選択できますが、必須ではありません。
- entry pointの分割
- api fetchのrequestウォーターフォールの解決
- svgの圧縮
- notsanserifフォントのpreload削除
- なぜSWで取得しているAPIが遅い

  https://github.com/CyberAgentHack/web-speed-hackathon-2024-scoring-tool/issues/51
  リーダーボード: https://web-speed-hackathon-scoring-server-2024.fly.dev
  課題レポジトリ: https://github.com/CyberAgentHack/web-speed-hackathon-2024
  https://web-speed-hack-2024-masa5555.koyeb.app/
```
   E2E_BASE_URL=https://web-speed-hack-2024-masa5555.koyeb.app/ pnpm
 test
````
unicode-collation-algorithm2をlazy import
画像の改善を早めに
画像の圧縮
バンドル圧縮・キャッシュヘッダー
episordの画像 650 x 450
