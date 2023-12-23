class D2UiCustomizer {
  /**
   * 設定を反映する
   */
  static customize() {
    const container = gradioApp().querySelector(".gradio-container.app");

    // 生成結果の下のボタンサイズを変更
    if (opts.d2_uic_change_button_size) {
      container.classList.add("d2_uic_change_button_size");
    } else {
      container.classList.remove("d2_uic_change_button_size");
    }

    // スライダーの表示切り替え
    if (opts.d2_uic_invisible_slider) {
      container.classList.add("d2_uic_invisible_slider");
    } else {
      container.classList.remove("d2_uic_invisible_slider");
    }

    // プロンプトフォントサイズを変更
    container.style.setProperty(
      "--d2-uic--prompt-font-size",
      opts.d2_uic_prompt_font_size
    );

    // ドロップダウンリストのアクティブ色を変更
    if (opts.d2_uic_change_dropdown_color) {
      container.classList.add("d2_uic_change_dropdown_color");
    } else {
      container.classList.remove("d2_uic_change_dropdown_color");
    }

    // ドロップダウンリストのアクティブ色
    container.style.setProperty(
      "--d2-uic--dropdown_color",
      opts.d2_uic_dropdown_color
    );

    // 機能拡張の背景色を変更
    if (opts.d2_uic_change_extension_bg_color) {
      container.classList.add("d2_uic_change_extension_bg_color");
    } else {
      container.classList.remove("d2_uic_change_extension_bg_color");
    }

    // 機能拡張の背景色：始点・終点
    container.style.setProperty(
      "--d2-uic--extension-bg-start",
      opts.d2_uic_extension_bg_color_start
    );
    container.style.setProperty(
      "--d2-uic--extension-bg-end",
      opts.d2_uic_extension_bg_color_end
    );

    // バッチ系のリセットボタンを設定
    if (opts.d2_uic_enable_batch_reset_button) {
      container.classList.add("d2_uic_enable_batch_reset_button");
    } else {
      container.classList.remove("d2_uic_enable_batch_reset_button");
    }
  }

  /**
   * バッチ系のリセットボタンを設定
   * @param {string} target
   */
  static setBatchResetButton(target) {
    const container = gradioApp().querySelector(`${target} .head`);
    const label = container.querySelector("label");

    label.addEventListener("click", () => {
      if (!opts.d2_uic_enable_batch_reset_button) return;

      const input = container.querySelector('input[type="number"]');
      input.value = 1;
      updateInput(input);
    });
  }

  /**
   * ネガティブプロンプトの非表示切替
   */
  static moveNegativePrompt(target) {
    const container = gradioApp().querySelector(target);
    const label = container.querySelector("label");

    const summary = document.createElement("summary");
    summary.textContent = "Negative prompt";

    const details = document.createElement("details");
    details.appendChild(summary);
    details.appendChild(label);

    container.appendChild(details);
  }
}

onOptionsChanged(async () => {
  // 設定反映
  D2UiCustomizer.customize();
});

onUiLoaded(async () => {
  // 設定反映
  D2UiCustomizer.customize();

  // ネガティブプロンプトの非表示切替
  D2UiCustomizer.moveNegativePrompt("#txt2img_neg_prompt");
  D2UiCustomizer.moveNegativePrompt("#img2img_neg_prompt");

  // バッチ系のリセットボタン
  D2UiCustomizer.setBatchResetButton("#txt2img_batch_count");
  D2UiCustomizer.setBatchResetButton("#txt2img_batch_size");
  D2UiCustomizer.setBatchResetButton("#img2img_batch_count");
  D2UiCustomizer.setBatchResetButton("#img2img_batch_size");
});
