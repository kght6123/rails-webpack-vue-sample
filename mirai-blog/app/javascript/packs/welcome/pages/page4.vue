<template>
<div class="page4">
  <div style="height: 50vh;">
	  <div id="edit-section"></div>
  </div>
  <div>
    <div id="view-section"></div>
  </div>
  <router-link to="/">前のページへ</router-link>
</div>
</template>

<script>

import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css';
import 'tui-editor/dist/tui-editor-extScrollSync'
import 'tui-editor/dist/tui-editor-extColorSyntax'
import 'tui-editor/dist/tui-editor-extUML'
import 'tui-editor/dist/tui-editor-extChart'
import 'tui-editor/dist/tui-editor-extTable'

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

import { editor } from './../../shared/editor';
import { viewer } from './../../shared/viewer';

export default {
  mounted() {
    // require('codemirror/lib/codemirror.css'); // codemirror
    // require('tui-editor/dist/tui-editor.css'); // editor ui
    // require('tui-editor/dist/tui-editor-contents.css'); // editor content
    // require('highlight.js/styles/github.css'); // code block highlight

    // use editor
    editor().setMarkdown(content, false/*cursorToEndopt*/);

    // use viewer
    viewer().setMarkdown(content, false/*cursorToEndopt*/);
  },
}
</script>

<!--style scoped src="codemirror/lib/codemirror.css"></style>
<style scoped src="tui-editor/dist/tui-editor.css"></style>
<style scoped src="tui-editor/dist/tui-editor-contents.css"></style>
<style scoped src="highlight.js/styles/github.css"></style-->
<style scoped lang="scss">
</style>