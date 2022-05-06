(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,function(e,t,n){"use strict";var c=n(23),r=n.n(c),s=n(0);t.a=function(){return Object(s.jsx)("div",{className:r.a.spinner})}},,function(e,t,n){"use strict";var c=n(11),r=n(8),s=n(5),a=n(4),o=n.n(a),i=n(1);function u(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(i.useReducer)(u,{status:t?"pending":null,data:null,error:null}),a=Object(s.a)(n,2),j=a[0],l=a[1],d=Object(i.useCallback)(function(){var t=Object(r.a)(o.a.mark((function t(n){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,l({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),l({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(c.a)({sendRequest:d},j)}},function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return j})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return x}));var c=n(11),r=n(8),s=n(4),a=n.n(s),o="https://quotemaker-77257-default-rtdb.firebaseio.com";function i(){return u.apply(this,arguments)}function u(){return(u=Object(r.a)(a.a.mark((function e(){var t,n,r,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in r=[],n)i=Object(c.a)({id:s},n[s]),r.push(i);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(a.a.mark((function e(t){var n,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not fetch quote.");case 8:return s=Object(c.a)({id:t},r),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(a.a.mark((function e(t){var n,r,s,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not get comments.");case 8:for(i in s=[],r)u=Object(c.a)({id:i},r[i]),s.push(u);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},,function(e,t,n){e.exports={header:"MainNavigation_header__3RRDq",logo:"MainNavigation_logo__3louK",nav:"MainNavigation_nav__2eFU4",active:"MainNavigation_active__PSsEs"}},,function(e,t,n){e.exports={form:"NewCommentForm_form__3AehX",loading:"NewCommentForm_loading__1AgF-",control:"NewCommentForm_control__BJo9A",actions:"NewCommentForm_actions__He8rh"}},,,function(e,t,n){e.exports={list:"QuoteList_list__2YGDG",sorting:"QuoteList_sorting__EUKN3"}},function(e,t,n){"use strict";var c=n(5),r=n(1),s=n(2),a=n(9),o=n(10),i=n(7),u=n(24),j=n.n(u),l=n(14),d=n.n(l),m=n(0),b=function(e){var t=Object(r.useRef)(),n=e.quoteId,c=e.onAddedComment,s=Object(a.a)(o.a),u=s.sendRequest,j=s.status,l=s.error;Object(r.useEffect)((function(){if("completed"!==j||l||c(t),l)return Object(m.jsx)("div",{className:"centered",children:l})}),[j,l,c]);var b=function(c){c.preventDefault();var r=t.current.value;console.log({text:r},n),u({commentData:{text:r},quoteId:e.quoteId})};return Object(m.jsxs)("form",{className:d.a.form,onSubmit:b,children:["pending"===j&&Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(i.a,{})}),Object(m.jsxs)("div",{className:d.a.control,onSubmit:b,children:[Object(m.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(m.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(m.jsx)("div",{className:d.a.actions,children:Object(m.jsx)("button",{className:"btn",children:"Add Comment"})})]})},f=n(25),x=n.n(f),h=function(e){return Object(m.jsx)("li",{className:x.a.item,children:Object(m.jsx)("p",{children:e.text})})},p=n(26),O=n.n(p),v=function(e){return Object(m.jsx)("ul",{className:O.a.comments,children:e.comments.map((function(e){return Object(m.jsx)(h,{text:e.text},e.id)}))})};t.a=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],u=t[1],l=Object(a.a)(o.c),d=l.sendRequest,f=l.status,x=l.data,h=Object(s.h)().quoteId;Object(r.useEffect)((function(){d(h)}),[d,h]);var p,O=Object(r.useCallback)((function(){d(h)}),[d,h]);return"pending"===f&&(p=Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(i.a,{})})),"completed"===f&&x&&(p=Object(m.jsx)(v,{comments:x})),"completed"!==f||x&&0!==x.length||(p=Object(m.jsx)("div",{className:"centered",children:"No comments were added yet."})),Object(m.jsxs)("section",{className:j.a.comments,children:[Object(m.jsx)("h2",{children:"User Comments"}),!n&&Object(m.jsx)("button",{className:"btn",onClick:function(){u(!0)},children:"Add a Comment"}),n&&Object(m.jsx)(b,{quoteId:h,onAddedComment:O}),Object(m.jsx)("p",{children:"Comments..."}),p]})}},,function(e,t,n){e.exports={main:"Layout_main__eaOV1"}},function(e,t,n){e.exports={item:"QuoteItem_item__rIKWE"}},function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__I2v2c"}},function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__c5q10"}},function(e,t,n){e.exports={comments:"Comments_comments___ktyJ"}},function(e,t,n){e.exports={item:"CommentItem_item__1gNwb"}},function(e,t,n){e.exports={comments:"CommentsList_comments__32_DG"}},,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(19),r=n.n(c),s=(n(30),n(1)),a=n.n(s),o=n(2),i=n(15),u=n(20),j=n.n(u),l=n(6),d=n(12),m=n.n(d),b=n(0);var f=function(){var e=function(e){return e.isActive?m.a.active:""};return Object(b.jsxs)("header",{className:m.a.header,children:[Object(b.jsx)("div",{className:m.a.logo,children:"Quote Maker"}),Object(b.jsx)("nav",{className:m.a.nav,children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/quotes",className:e,children:"All Quotes"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.c,{to:"/new-quote",className:e,children:"Add Quote"})})]})})]})};var x=function(e){return Object(b.jsxs)(i.Fragment,{children:[Object(b.jsx)(f,{}),Object(b.jsx)("main",{className:j.a.main,children:e.children})]})},h=n(5),p=n(21),O=n.n(p),v=function(e){var t=Object(o.g)();return Object(b.jsxs)("li",{className:O.a.item,children:[Object(b.jsxs)("figure",{children:[Object(b.jsx)("blockquote",{children:Object(b.jsx)("p",{children:e.text})}),Object(b.jsx)("figcaption",{children:e.author})]}),Object(b.jsx)("a",{className:"btn",onClick:function(){t("/quotes/".concat(e.id))},children:"View Fullscreen"})]})},_=n(17),g=n.n(_),N=function(e){var t,n,c=Object(s.useState)("Ascending"),r=Object(h.a)(c,2),a=r[0],i=r[1],u=Object(o.g)(),j=Object(o.f)(),l="asc"===new URLSearchParams(j.search).get("sort");t=e.quotes,n=l,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1}));return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)("div",{className:g.a.sorting,children:Object(b.jsxs)("button",{onClick:function(){i((function(e){return"Ascending"===a?"Descending":"Ascending"})),u("/quotes?sort=".concat("Ascending"===a?"asc":"desc"))},children:["Sort ",a]})}),Object(b.jsx)("ul",{className:g.a.list,children:e.quotes.map((function(e){return Object(b.jsx)(v,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},w=n(22),q=n.n(w),y=function(){return Object(b.jsxs)("div",{className:q.a.noquotes,children:[Object(b.jsx)("p",{children:"No quotes found!"}),Object(b.jsx)(l.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},C=n(7),k=n(9),S=n(10);var E=function(){var e=Object(k.a)(S.d,!0),t=e.sendRequest,n=e.status,c=e.data,r=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===n?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(C.a,{})}):r?Object(b.jsx)("p",{className:"centered focused",children:r}):"completed"!==n||c&&0!==c.length?Object(b.jsx)(N,{quotes:c}):Object(b.jsx)(y,{})},A=n(18),R=a.a.lazy((function(){return Promise.all([n.e(6),n.e(3)]).then(n.bind(null,39))})),I=a.a.lazy((function(){return n.e(4).then(n.bind(null,40))})),D=a.a.lazy((function(){return n.e(5).then(n.bind(null,38))}));var F=function(){return Object(b.jsx)(x,{children:Object(b.jsx)(s.Suspense,{fallback:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(C.a,{})}),children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",element:Object(b.jsx)(o.a,{replace:!0,to:"/quotes"}),exact:!0}),Object(b.jsx)(o.b,{path:"quotes",element:Object(b.jsx)(E,{}),exact:!0}),Object(b.jsx)(o.b,{path:"quotes/:quoteId",element:Object(b.jsx)(I,{}),children:Object(b.jsx)(o.b,{path:"comments",element:Object(b.jsx)(A.a,{})})}),Object(b.jsx)(o.b,{path:"new-quote",element:Object(b.jsx)(R,{}),exact:!0}),Object(b.jsx)(o.b,{path:"*",element:Object(b.jsx)(D,{}),exact:!0})]})})})};r.a.render(Object(b.jsx)(l.a,{children:Object(b.jsx)(F,{})}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.c2e039b5.chunk.js.map