# D2 UI Customizer

## About

Stable Diffusion webui AUTOMATIC1111版（以下 webui）のUIをカスタマイズします。

- プロンプトの文字サイズを変更
- ネガティブプロンプトの非表示・表示切替
- 幅、高さ、Sampling steps などのスライダーの非表示・表示切替
- Batch count、Batch size を「1」にするボタン
- 生成画像の下のボタン（send to 系）のサイズを変更
- プルダウンメニューのアクティブ色を変更
- 機能拡張パネルの背景色を変更
- Inpaint設定の非表示・表示切り替え（2024.3.24追加）

### English

This customizes the user interface (UI) of the Stable Diffusion webui AUTOMATIC1111 version.

- Change the font size of the prompt
- Toggle display of negative prompts
- Toggle display of sliders for width, height, and sampling steps
- Button to set Batch count and Batch size to '1'
- Change the size of the buttons below the generated image (send to series)
- Change the active color of the dropdown menu
- Change the background color of the feature extension panel


## Installation

1. "Extensions" タブを開く
2. "Install from URL" を開く
3. `https://github.com/da2el-ai/sd-d2-ui-customizer` を "URL of the extension repository" に入力
4. "Install" をクリックしてインストールが完了するのを待つ
5. "Installed" を開き、"Apply and restart the UI" をクリック

## Extention panel active color

機能拡張がアクティブ時の背景色の変更は下記に対応しています。（2023.12.26 現在）

- ControlNet
- Tiled Diffusion
- Tiled VAE
- ADetailer
- Regional Prompter

自分で追加したい時は `{webui}/extensions/sd-d2-ui-customizer/user.css` を編集してください。

```css
/* TiledVAE */
.d2_uic_change_extension_bg_color {
  #txt2img_script_container > .styler,
  #img2img_script_container > .styler {
    & > .gradio-group:has(#MD-t2i-enable input[type="checkbox"]:checked),
    & > .gradio-group:has(#MD-i2i-enable input[type="checkbox"]:checked) {
```

これは TiledVAE を例にしたものです。
ほとんどの機能拡張は `#MD-t2i-enable`、`#MD-i2i-enable` に該当する部分を変更すれば対応できます。

`<input type="checkbox">` の上層に固有のIDが割り当てられていないと対応できません。
例えば Ranbooru は対応できません。


## Update

- 2024.03.24
  - Inpaint設定を非表示にする設定を追加
- 2023.12.26
  - feat: ネガティブプロンプトの非表示切替の設定を追加
  - feat: 機能拡張がアクティブ時の背景色設定を追加
  - fix: ネガティブプロンプトの文字サイズが反映されていないのを修正
