<template>
<div class="page4">
  <div id="viewer" style="height: 50vh;">
	  
  </div>
  <router-link to="/">前のページへ</router-link>
</div>
</template>

<script>

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
  mounted() {
    const MarkdownIt = require('markdown-it');
    const md = new MarkdownIt();

    var result = md.render('# markdown-it rulezz!');

    console.log(result);
  },
}
</script>

<style scoped lang="scss">

</style>