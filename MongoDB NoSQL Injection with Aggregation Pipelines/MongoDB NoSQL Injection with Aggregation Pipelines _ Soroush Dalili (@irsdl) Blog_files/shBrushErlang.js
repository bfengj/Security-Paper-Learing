;(function()
{SyntaxHighlighter=SyntaxHighlighter||(typeof require!=='undefined'?require('shCore').SyntaxHighlighter:null);function Brush()
{var keywords='after and andalso band begin bnot bor bsl bsr bxor '+
'case catch cond div end fun if let not of or orelse '+
'query receive rem try when xor'+
' module export import define';this.regexList=[{regex:new RegExp("[A-Z][A-Za-z0-9_]+",'g'),css:'constants'},{regex:new RegExp("\\%.+",'gm'),css:'comments'},{regex:new RegExp("\\?[A-Za-z0-9_]+",'g'),css:'preprocessor'},{regex:new RegExp("[a-z0-9_]+:[a-z0-9_]+",'g'),css:'functions'},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:'string'},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:'string'},{regex:new RegExp(this.getKeywords(keywords),'gm'),css:'keyword'}];};Brush.prototype=new SyntaxHighlighter.Highlighter();Brush.aliases=['erl','erlang'];SyntaxHighlighter.brushes.Erlang=Brush;typeof(exports)!='undefined'?exports.Brush=Brush:null;})();