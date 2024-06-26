;(function()
{SyntaxHighlighter=SyntaxHighlighter||(typeof require!=='undefined'?require('shCore').SyntaxHighlighter:null);function Brush()
{var keywords='break case catch class continue '+
'default delete do else enum export extends false  '+
'for function if implements import in instanceof '+
'interface let new null package private protected '+
'static return super switch '+
'this throw true try typeof var while with yield '+
'async await';var r=SyntaxHighlighter.regexLib;this.regexList=[{regex:r.multiLineDoubleQuotedString,css:'string'},{regex:r.multiLineSingleQuotedString,css:'string'},{regex:r.singleLineCComments,css:'comments'},{regex:r.multiLineCComments,css:'comments'},{regex:/\s*#.*/gm,css:'preprocessor'},{regex:new RegExp(this.getKeywords(keywords),'gm'),css:'keyword'}];this.forHtmlScript(r.scriptScriptTags);};Brush.prototype=new SyntaxHighlighter.Highlighter();Brush.aliases=['js','jscript','javascript','json'];SyntaxHighlighter.brushes.JScript=Brush;typeof(exports)!='undefined'?exports.Brush=Brush:null;})();