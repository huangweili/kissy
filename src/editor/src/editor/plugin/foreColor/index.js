KISSY.add("editor/plugin/foreColor/index", function (S, Editor, Button, cmd) {

    return {
        init:function (editor) {
            cmd.init(editor);
            editor.addButton({
                cmdType:'foreColor',
                title:"文本颜色",
                contentCls:"ks-editor-toolbar-fore-color"
            }, undefined, Button);
        }
    };
}, {
    requires:['editor', '../color/btn', './cmd']
});