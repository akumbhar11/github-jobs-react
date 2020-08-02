(this["webpackJsonpgithub-jobs-react"]=this["webpackJsonpgithub-jobs-react"]||[]).push([[0],{158:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),o=(t(57),t(19)),m=t(7),s=t(11),i=t(12),u=t.n(i),b="make-request",p="get-data",E="error",d="update-has-next-page",g="https://jobs.github.com/positions.json";function f(e,a){switch(a.type){case b:return{loading:!0,jobs:[]};case p:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case E:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:a.payload.error,jobs:[]});case d:return Object(m.a)(Object(m.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}}var h=t(162),j=t(165),y=t(160),v=t(161),k=t(164),N=t(30),O=t.n(N);function x(e){var a=e.job,t=Object(n.useState)(!1),c=Object(s.a)(t,2),l=c[0],o=c[1];return r.a.createElement(j.a,{className:"mb-3"},r.a.createElement(j.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(j.a.Title,null,a.title," - ",r.a.createElement("span",{className:"text-muted font-weight-light"},a.company)),r.a.createElement(j.a.Subtitle,{className:"text-muted mb-2"},new Date(a.created_at).toLocaleDateString()),r.a.createElement(y.a,{variant:"secondary",className:"mr-2"},a.type),r.a.createElement(y.a,{variant:"secondary"},a.location),r.a.createElement("div",{style:{wordBreak:"break-all"}},r.a.createElement(O.a,{source:a.how_to_apply}))),r.a.createElement("img",{className:"d-none d-md-block",height:"50",alt:a.company,src:a.company_logo})),r.a.createElement(j.a.Text,null,r.a.createElement(v.a,{onClick:function(){return o((function(e){return!e}))},variant:"primary"},l?"Hide Details":"View Details")),r.a.createElement(k.a,{in:l},r.a.createElement("div",{className:"mt-4"},r.a.createElement(O.a,{source:a.description})))))}var C=t(166);function P(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function c(e){t((function(a){return a+e}))}return r.a.createElement(C.a,null,1!==a&&r.a.createElement(C.a.Prev,{onClick:function(){return c(-1)}}),1!==a&&r.a.createElement(C.a.Item,{onClick:function(){return t(1)}},"1"),a>2&&r.a.createElement(C.a.Ellipsis,null),a>2&&r.a.createElement(C.a.Item,{onClick:function(){return c(-1)}},a-1),r.a.createElement(C.a.Item,{active:!0},a),n&&r.a.createElement(C.a.Item,{onClick:function(){return c(1)}},a+1),n&&r.a.createElement(C.a.Next,{onClick:function(){return c(1)}}))}var w=t(163),T=t(51);function S(e){var a=e.params,t=e.onParamChange;return r.a.createElement(w.a,{className:"mb-4"},r.a.createElement(w.a.Row,{className:"align-items-end"},r.a.createElement(w.a.Group,{as:T.a},r.a.createElement(w.a.Label,null,"Description"),r.a.createElement(w.a.Control,{onChange:t,value:a.description,name:"description",type:"text"})),r.a.createElement(w.a.Group,{as:T.a},r.a.createElement(w.a.Label,null,"Location"),r.a.createElement(w.a.Control,{onChange:t,value:a.location,name:"location",type:"text"})),r.a.createElement(w.a.Group,{as:T.a,xs:"auto",className:"ml-2"},r.a.createElement(w.a.Check,{onChange:t,value:a.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox",className:"mb-2"}))))}var _=function(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(1),i=Object(s.a)(l,2),j=i[0],y=i[1],v=function(e,a){var t=Object(n.useReducer)(f,{jobs:[],loading:!0}),r=Object(s.a)(t,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var t=u.a.CancelToken.source();l({type:b}),u.a.get(g,{cancelToken:t.token,params:Object(m.a)({markdown:!0,page:a},e)}).then((function(e){l({type:p,payload:{jobs:e.data}})})).catch((function(e){u.a.isCancel(e)||l({type:E,payload:{error:e}})}));var n=u.a.CancelToken.source();return u.a.get(g,{cancelToken:n.token,params:Object(m.a)({markdown:!0,page:a+1},e)}).then((function(e){l({type:d,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){u.a.isCancel(e)||l({type:E,payload:{error:e}})})),function(){t.cancel(),n.cancel()}}),[e,a]),c}(t,j),k=v.jobs,N=v.loading,O=v.error,C=v.hasNextPage;return r.a.createElement(h.a,{className:"my-4"},r.a.createElement("h1",{className:"mb-4"},"GitHub Jobs"),r.a.createElement(S,{params:t,onParamChange:function(e){var a=e.target.name,t=e.target.value;y(1),c((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(o.a)({},a,t))}))}}),r.a.createElement(P,{page:j,setPage:y,hasNextPage:C}),N&&r.a.createElement("h1",null,"Loading..."),O&&r.a.createElement("h1",null,"Error. Try Refreshing."),k.map((function(e){return r.a.createElement(x,{key:e.id,job:e})})),r.a.createElement(P,{page:j,setPage:y,hasNextPage:C}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))},52:function(e,a,t){e.exports=t(158)},57:function(e,a,t){}},[[52,1,2]]]);
//# sourceMappingURL=main.aae41569.chunk.js.map