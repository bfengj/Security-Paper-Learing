SyntaxHighlighter.brushes.FSharp=function()
{var keywords='abstract and as assert base begin class default delegate do done '+
'downcast downto elif else end exception extern false finally for '+
'fun function if in inherit inline interface internal lazy let '+
'match member module mutable namespace new null of open or '+
'override private public rec return static struct then to '+
'true try type upcast use val void when while with yield';var ocaml='asr land lor lsl lsr lxor mod sig';var reserved='atomic break checked component const constraint constructor '+
'continue eager event external fixed functor global include '+
'method mixin object parallel process protected pure '+
'sealed tailcall trait virtual volatile';var symbolic='let! use! do! yield! return! \\| -> <- \\. : \\( \\) \\[ \\] \\[< >\\] \\[\\| \\|\\] '+
'\\{ \\} \' # :\\?> :\\? ; ;; :> := _ \\.\\. ::';this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:'comments'},{regex:new RegExp('\\(\\*[\\s\\S]*?\\*\\)','gm'),css:'comments'},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:'string'},{regex:new RegExp('^\\s*#.*','gm'),css:'preprocessor'},{regex:new RegExp(this.getKeywords(keywords),'gm'),css:'keyword'},];}
SyntaxHighlighter.brushes.FSharp.prototype=new SyntaxHighlighter.Highlighter();SyntaxHighlighter.brushes.FSharp.aliases=['f#','f-sharp','fsharp'];