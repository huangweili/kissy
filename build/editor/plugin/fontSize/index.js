﻿/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 5 21:37
*/
/**
 * font formatting for kissy editor
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/fontSize/index", function (S, Editor, ui,cmd) {


    return {
        init:function (editor) {

            cmd.init(editor);

            function wrapFont(vs) {
                var v = [];
                S.each(vs, function (n) {
                    v.push({
                        name:n,
                        value:n
                    });
                });
                return v;
            }

            var pluginConfig = editor.get("pluginConfig"),
                fontSizes = pluginConfig["fontSize"];

            fontSizes = fontSizes || {};

            S.mix(fontSizes, {
                items:wrapFont([
                    "8px", "10px", "12px",
                    "14px", "18px", "24px",
                    "36px", "48px", "60px",
                    "72px", "84px", "96px"
                ]),
                width:"55px"
            }, false);

            editor.addSelect({
                cmdType:"fontSize",
                title:"大小",
                width:"30px",
                mode:Editor.WYSIWYG_MODE,
                showValue:true,
                defaultValue:fontSizes.defaultValue,
                popUpWidth:fontSizes.width,
                items:fontSizes.items
            }, undefined, ui.Select);
        }};
}, {
    requires:['editor', '../font/ui','./cmd']
});
