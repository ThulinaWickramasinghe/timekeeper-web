import{g as f}from"./index-101ef9d5.js";import{r as s}from"./markup-templating-793f47eb.js";import{r as b}from"./ruby-89b11700.js";function p(n,o){for(var t=0;t<o.length;t++){const r=o[t];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in n)){const a=Object.getOwnPropertyDescriptor(r,e);a&&Object.defineProperty(n,e,a.get?a:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var u,i;function c(){if(i)return u;i=1;var n=s(),o=b();u=t,t.displayName="erb",t.aliases=[];function t(r){r.register(n),r.register(o),function(e){e.languages.erb=e.languages.extend("ruby",{}),e.languages.insertBefore("erb","comment",{delimiter:{pattern:/^<%=?|%>$/,alias:"punctuation"}}),e.hooks.add("before-tokenize",function(a){var l=/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm;e.languages["markup-templating"].buildPlaceholders(a,"erb",l)}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"erb")})}(r)}return u}var g=c();const d=f(g),v=p({__proto__:null,default:d},[g]);export{v as e};
