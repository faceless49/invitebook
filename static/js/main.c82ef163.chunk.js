(this.webpackJsonpinvitebook=this.webpackJsonpinvitebook||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var A=s(1),c=s.n(A),n=s(8),a=s.n(n),r=(s(15),s(7)),l=s(6),u=s.n(l),i=s(9),d=s(10),o=s(2),b=(s(17),s(0)),j=function(e){var t=e.id,s=e.fullName,A=e.avatarUrl,c=e.email,n=e.onAdd,a=e.isAdded;return Object(b.jsxs)("div",{className:"users__box",children:[Object(b.jsxs)("div",{className:"users__left",children:[Object(b.jsx)("img",{src:A,alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(b.jsxs)("div",{className:"users__inner",children:[Object(b.jsx)("h4",{className:"users__name",children:s}),Object(b.jsx)("p",{className:"users__subtext",children:c})]})]}),Object(b.jsx)("div",{className:"users__right",children:Object(b.jsx)("button",{onClick:function(){return n(t,s,A,c)},type:"button",className:"close-btn ".concat(a?"pushed":"")})})]},s)},f=s.p+"static/media/successfully.d3426c24.svg",h=function(e){var t=e.onClose;return Object(b.jsxs)("div",{className:"success__box",children:[Object(b.jsx)("img",{src:f,alt:"Success"}),Object(b.jsx)("h3",{className:"success__title",children:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e!"}),Object(b.jsx)("p",{className:"success__text",children:"\u0412\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0431\u044b\u043b\u0438 \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u044b \u043e \u0432\u0430\u0448\u0435\u043c \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0438"}),Object(b.jsx)("button",{className:"success__btn",onClick:t,children:"\u0425\u043e\u0440\u043e\u0448\u043e"})]})};var O=function(){var e=Object(A.useState)([]),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(A.useState)(""),a=Object(o.a)(n,2),l=a[0],f=a[1],O=Object(A.useState)([]),m=Object(o.a)(O,2),v=m[0],C=m[1],p=Object(A.useState)(!0),x=Object(o.a)(p,2),N=x[0],X=x[1],k=Object(A.useState)(!1),w=Object(o.a)(k,2),S=w[0],T=w[1],g=function(e,t,s,A){v.find((function(t){return t.id===e}))?C(v.filter((function(t){return t.id!==e}))):C([].concat(Object(d.a)(v),[{id:e,avatarUrl:s,email:A,fullName:t}]))},B=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://617826619c328300175f5e53.mockapi.io/list",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({list:v})});case 2:T(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.useEffect)((function(){fetch("https://617826619c328300175f5e53.mockapi.io/users").then((function(e){return e.json()})).then((function(e){c(e),X(!1)}))}),[]),S?Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"box",children:Object(b.jsx)(h,{onClose:function(){T(!1)}})})}):Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("body",{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h3",{className:"title",children:"\u0420\u0430\u0441\u0441\u044b\u043b\u043a\u0430 \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0439"}),Object(b.jsxs)("form",{action:"#",children:[Object(b.jsx)("div",{className:"search",children:Object(b.jsxs)("label",{className:"search__label",children:[Object(b.jsx)("input",{className:"search__user search__input",type:"text",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",onChange:function(e){var t=e.currentTarget.value;f(t)},value:l}),l&&Object(b.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"search__icon-close",onClick:function(){f("")},children:Object(b.jsx)("path",{d:"M8.65082 7.004L13.6669 1.99955C13.8866 1.77989 14.01 1.48196 14.01 1.17131C14.01 0.860661 13.8866 0.562733 13.6669 0.343069C13.4473 0.123406 13.1493 0 12.8387 0C12.528 0 12.2301 0.123406 12.0104 0.343069L7.006 5.35919L2.00154 0.343069C1.78188 0.123406 1.48395 -2.31453e-09 1.1733 0C0.862651 2.31453e-09 0.564724 0.123406 0.34506 0.343069C0.125397 0.562733 0.00199082 0.860661 0.00199081 1.17131C0.00199081 1.48196 0.125397 1.77989 0.34506 1.99955L5.36118 7.004L0.34506 12.0085C0.235722 12.1169 0.148939 12.2459 0.0897152 12.3881C0.0304915 12.5302 0 12.6827 0 12.8367C0 12.9907 0.0304915 13.1432 0.0897152 13.2853C0.148939 13.4275 0.235722 13.5565 0.34506 13.6649C0.453505 13.7743 0.582525 13.8611 0.724679 13.9203C0.866832 13.9795 1.01931 14.01 1.1733 14.01C1.3273 14.01 1.47977 13.9795 1.62193 13.9203C1.76408 13.8611 1.8931 13.7743 2.00154 13.6649L7.006 8.64882L12.0104 13.6649C12.1189 13.7743 12.2479 13.8611 12.3901 13.9203C12.5322 13.9795 12.6847 14.01 12.8387 14.01C12.9927 14.01 13.1452 13.9795 13.2873 13.9203C13.4295 13.8611 13.5585 13.7743 13.6669 13.6649C13.7763 13.5565 13.8631 13.4275 13.9223 13.2853C13.9815 13.1432 14.012 12.9907 14.012 12.8367C14.012 12.6827 13.9815 12.5302 13.9223 12.3881C13.8631 12.2459 13.7763 12.1169 13.6669 12.0085L8.65082 7.004Z",fill:"#000"})})]})}),Object(b.jsx)("div",{className:"users",children:N?Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:"Skeleton"}):s.filter((function(e){return e.fullName.toLowerCase().includes(l.toLowerCase())})).map((function(e){return Object(b.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{onAdd:g,isAdded:v.find((function(t){return t.id===e.id}))}))}))}),Object(b.jsxs)("div",{className:"form__btn",children:[Object(b.jsx)("button",{className:"form__btn-cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(b.jsx)("button",{className:"form__btn-submit",type:"submit",onClick:function(){v.length?B():alert("List is empty")},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})]})})})})};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c82ef163.chunk.js.map