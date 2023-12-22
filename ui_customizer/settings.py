from modules import shared

def on_ui_settings():
    section = "d2_ui_customizer", "D2 UI Customizer"

    shared.opts.add_option(
        key="d2_uic_change_button_size",
        info=shared.OptionInfo(
            True,
            label="生成結果の下のボタンサイズを大きくする",
            section=section,
        ),
    )

    shared.opts.add_option(
        key="d2_uic_invisible_slider",
        info=shared.OptionInfo(
            True,
            label="width, height, batch countなどのスライダーを非表示にする",
            section=section,
        ),
    )

    shared.opts.add_option(
        key="d2_uic_prompt_font_size",
        info=shared.OptionInfo(
            "1.2rem",
            label="プロンプトのフォントサイズ（初期値: 1.2rem）",
            section=section,
        ),
    )

    shared.opts.add_option(
        key="d2_uic_change_dropdown_color",
        info=shared.OptionInfo(
            True,
            label="ドロップダウンリストのアクティブ色を変更する",
            section=section,
        ),
    )

    shared.opts.add_option(
        key="d2_uic_dropdown_color",
        info=shared.OptionInfo(
            "#ccc",
            label="ドロップダウンリストのアクティブ色（初期値: #ccc）",
            section=section,
        ),
    )

    shared.opts.add_option(
        key="d2_uic_change_extension_bg_color",
        info=shared.OptionInfo(
            True,
            label="機能拡張の背景色を変更する",
            section=section,
        ),
    )

    shared.opts.add_option(
        key="d2_uic_extension_bg_color_start",
        info=shared.OptionInfo(
            "#eee",
            label="機能拡張の背景色・始点（初期値: #eee）",
            section=section,
        ),
    )

    shared.opts.add_option(
        key="d2_uic_extension_bg_color_end",
        info=shared.OptionInfo(
            "#fff",
            label="機能拡張の背景色・終点（初期値: #fff）",
            section=section,
        ),
    )

    shared.opts.add_option(
        key="d2_uic_enable_batch_reset_button",
        info=shared.OptionInfo(
            True,
            label="Batch count、Batch size を「1」に設定するボタンを有効にする",
            section=section,
        ),
    )
