//import Editor from 'tui-editor';
import Viewer from 'tui-editor/dist/tui-editor-Viewer-all.min.js';
// import Viewer from 'tui-editor/dist/tui-editor-Viewer.js';

export const viewer = function() { return new Viewer({
	el: document.querySelector('#view-section'),
	height: '100%',
	initialValue: '',
	language: 'ja',
	usageStatistics: false,
	exts: ['scrollSync', 'colorSyntax', 'uml', 'chart', 'mark', 'table'],
})};
