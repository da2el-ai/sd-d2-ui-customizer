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

    // アクティブな機能拡張の背景色：始点・終点
    container.style.setProperty(
      "--d2-uic--extension-bg-start-active",
      opts.d2_uic_extension_bg_color_start_active
    );
    container.style.setProperty(
      "--d2-uic--extension-bg-end-active",
      opts.d2_uic_extension_bg_color_end_active
    );

    // バッチ系のリセットボタンを設定
    if (opts.d2_uic_enable_batch_reset_button) {
      container.classList.add("d2_uic_enable_batch_reset_button");
    } else {
      container.classList.remove("d2_uic_enable_batch_reset_button");
    }

    // ネガティブプロンプトを非表示
    D2UiCustomizer.moveNegativePrompt("#txt2img_neg_prompt");
    D2UiCustomizer.moveNegativePrompt("#img2img_neg_prompt");
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
    const enable = opts.d2_uic_enable_invisible_negative;
    const container = gradioApp().querySelector(target);
    const label = container.querySelector("label");

    if (enable && !container.querySelector("details")) {
      // 非表示にする
      const summary = document.createElement("summary");
      summary.textContent = "Negative prompt";

      const details = document.createElement("details");
      details.appendChild(summary);
      details.appendChild(label);

      container.appendChild(details);
      //
    } else if (!enable && container.querySelector("details")) {
      // 非表示されているものを戻す
      container.appendChild(label);
      const details = container.querySelector("details");
      container.removeChild(details);
    }
  }

  /**
   * ユーザー定義cssを読み込む
   */
  static loadUserStyle() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/file=extensions/sd-d2-ui-customizer/user.css?" + Date.now();
    document.head.appendChild(link);
  }
}

onOptionsChanged(async () => {
  // 設定反映
  D2UiCustomizer.customize();
});

onUiLoaded(async () => {
  // ユーザー定義cssを読み込む
  D2UiCustomizer.loadUserStyle();

  // 設定反映
  D2UiCustomizer.customize();

  // バッチ系のリセットボタン
  D2UiCustomizer.setBatchResetButton("#txt2img_batch_count");
  D2UiCustomizer.setBatchResetButton("#txt2img_batch_size");
  D2UiCustomizer.setBatchResetButton("#img2img_batch_count");
  D2UiCustomizer.setBatchResetButton("#img2img_batch_size");
});
