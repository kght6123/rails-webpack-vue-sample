
//import Editor from 'tui-editor';
import Editor from 'tui-editor/dist/tui-editor-Editor-all.js';
// import Editor from 'tui-editor/dist/tui-editor-Editor.js';

export const editor = function() { return new Editor({
	el: document.querySelector('#edit-section'),
	//viewer: true,
	initialEditType: 'markdown',
	useCommandShortcut: true,
	previewStyle: 'vertical',
	height: '100%',
	initialValue: '',
	language: 'ja',
	//usageStatistics: false,
	toolbarItems: [
		'heading',
		'bold',
		'italic',
		'strike',
		'divider',
		'hr',
		'quote',
		'divider',
		'ul',
		'ol',
		'task',
		'indent',
		'outdent',
		'divider',
		'table',
		// 'image',
		'link',
		'divider',
		'code',
		'codeblock'
	],
	exts: ['scrollSync', 'colorSyntax', 'uml', 'chart', 'mark', 'table'],
})};
