import{g as d}from"./index-101ef9d5.js";function u(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,s;function f(){if(s)return i;s=1,i=e,e.displayName="xojo",e.aliases=[];function e(t){t.languages.xojo={comment:{pattern:/(?:'|\/\/|Rem\b).+/i,inside:{keyword:/^Rem/i}},string:{pattern:/"(?:""|[^"])*"/,greedy:!0},number:[/(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,/&[bchou][a-z\d]+/i],symbol:/#(?:If|Else|ElseIf|Endif|Pragma)\b/i,keyword:/\b(?:AddHandler|App|Array|As(?:signs)?|By(?:Ref|Val)|Break|Call|Case|Catch|Const|Continue|CurrentMethodName|Declare|Dim|Do(?:wnTo)?|Each|Else(?:If)?|End|Exit|Extends|False|Finally|For|Global|If|In|Lib|Loop|Me|Next|Nil|Optional|ParamArray|Raise(?:Event)?|ReDim|Rem|RemoveHandler|Return|Select|Self|Soft|Static|Step|Super|Then|To|True|Try|Ubound|Until|Using|Wend|While)\b/i,operator:/<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|Xor|WeakAddressOf)\b/i,punctuation:/[.,;:()]/}}return i}var l=f();const p=d(l),m=u({__proto__:null,default:p},[l]);export{m as x};
