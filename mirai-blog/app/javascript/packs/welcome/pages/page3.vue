<template>
<div class="page3">
  <editor v-model="editorText" :options="editorOptions" previewStyle="vertical" height="900px" />
  <viewer :value="editorText" height="500px" />
  <router-link to="/">前のページへ</router-link>
</div>
</template>

<script>

import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css';
import 'tui-editor/dist/tui-editor-extScrollSync.js'
import 'tui-editor/dist/tui-editor-extColorSyntax.js'
import 'tui-editor/dist/tui-editor-extUML.js'
import 'tui-editor/dist/tui-editor-extChart.js'
import 'tui-editor/dist/tui-editor-extTable.js'
// import { Editor } from '@toast-ui/vue-editor'

import { Editor, Viewer } from '@toast-ui/vue-editor'
//import { Editor } from '@toast-ui/vue-editor'

const content = [
        '![image](https://cloud.githubusercontent.com/assets/389021/16107646/9729e556-33d8-11e6-933f-5b09fa3a53bb.png)',
        '# Heading 1',
        '## Heading 2',
        '### Heading 3',
        '#### Heading 4',
        '##### Heading 5',
        '###### Heading 6',
        '    code block',
        '```js',
        'console.log("fenced code block");',
        '```',
        '<pre>**HTML block**</pre>',
        '* list',
        '    * list indented',
        '1. ordered',
        '2. list',
        '    1. ordered list',
        '    2. indented',
        '',
        '- [ ] task',
        '- [x] list completed',
        '',
        '[link](https://nhnent.github.io/tui.editor/)',
        '> block quote',
        '---',
        'horizontal line',
        '***',
        '`code`, *italic*, **bold**, ~~strikethrough~~, <span style="color:#e11d21">Red color</span>',
        '|table|head|',
        '|---|---|',
        '|table|body|',
        '',
        '| @cols=2:merged |',
        '| --- | --- |',
        '| table | table |',
        '```uml',
        'partition Conductor {',
        '  (*) --> "Climbs on Platform"',
        '  --> === S1 ===',
        '  --> Bows',
        '}',
        '',
        'partition Audience #LightSkyBlue {',
        '  === S1 === --> Applauds',
        '}',
        '',
        'partition Conductor {',
        '  Bows --> === S2 ===',
        '  --> WavesArmes',
        '  Applauds --> === S2 ===',
        '}',
        '',
        'partition Orchestra #CCCCEE {',
        '  WavesArmes --> Introduction',
        '  --> "Play music"',
        '}',
        '```',
        '```chart',
        ',category1,category2',
        'Jan,21,23',
        'Feb,31,17',
        '',
        'type: column',
        'title: Monthly Revenue',
        'x.title: Amount',
        'y.title: Month',
        'y.min: 1',
        'y.max: 40',
        'y.suffix: $',
        '```'
      ].join('\n');

export default {
  components: {
    'editor': Editor,
    'viewer': Viewer,
  },
  data() {
      return {
          editorText: content,
          editorOptions: {
            initialEditType: 'markdown',
            useCommandShortcut: true,
            // height: '100%',
            // initialValue: '',
            language: 'ja',
            useDefaultHTMLSanitizer: true,
            usageStatistics: false,
            hideModeSwitch: false,
            // toolbarItems: [
            //   'heading',
            //   'bold',
            //   'italic',
            //   'strike',
            //   'divider',
            //   'hr',
            //   'quote',
            //   'divider',
            //   'ul',
            //   'ol',
            //   'task',
            //   'indent',
            //   'outdent',
            //   'divider',
            //   'table',
            //   // 'image',
            //   'link',
            //   'divider',
            //   'code',
            //   'codeblock'
            // ],
            exts: ['scrollSync', 'colorSyntax', 'uml', 'chart', 'mark', 'table'],
          }
      }
  },
}
</script>

<style scoped lang="scss">
/*:-moz-focusring
.page3 /deep/ {
  @import "codemirror/lib/codemirror.css";
  @import "tui-editor/dist/tui-editor.css";
  @import "tui-editor/dist/tui-editor-contents.css";
  @import "highlight.js/styles/github.css";
}*/
</style>