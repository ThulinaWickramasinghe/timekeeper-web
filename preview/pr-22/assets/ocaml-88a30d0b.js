import{g as s}from"./index-101ef9d5.js";function u(e,a){for(var o=0;o<a.length;o++){const t=a[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,l;function d(){if(l)return i;l=1,i=e,e.displayName="ocaml",e.aliases=[];function e(a){a.languages.ocaml={comment:/\(\*[\s\S]*?\*\)/,string:[{pattern:/"(?:\\.|[^\\\r\n"])*"/,greedy:!0},{pattern:/(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,greedy:!0}],number:/\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,type:{pattern:/\B['`]\w*/,alias:"variable"},directive:{pattern:/\B#\w+/,alias:"function"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,boolean:/\b(?:false|true)\b/,operator:/:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,punctuation:/[(){}\[\]|_.,:;]/}}return i}var c=d();const f=s(c),p=u({__proto__:null,default:f},[c]);export{p as o};
