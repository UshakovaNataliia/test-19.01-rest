(this["webpackJsonptest-19.01-rest"]=this["webpackJsonptest-19.01-rest"]||[]).push([[0],{33:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=(n(33),n(21)),d=n(22),l=n(27),u=n(26),j=n(3),p=n(5),b=n.n(p),O=document.querySelector("#modal-root"),f=function(t){var e=t.id,n=Object(a.useState)([]),r=Object(j.a)(n,2),i=r[0],s=r[1],d=Object(a.useState)(null),l=Object(j.a)(d,2),u=(l[0],l[1]);Object(a.useEffect)((function(){b.a.get("https://jsonplaceholder.typicode.com/posts/".concat(e)).then((function(t){var e=t.data;s(e)})).catch((function(t){u(t),alert(t)})),window.addEventListener("keydown",f),O.classList.remove("close")}),[]);var p=function(){O.classList.add("close")},f=function(t){"Escape"===t.code&&p()};return window.removeEventListener("keydown",f),Object(o.createPortal)(Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"Overlay",onClick:function(t){t.currentTarget===t.target&&p()},children:Object(c.jsxs)("div",{className:"Modal",children:[Object(c.jsxs)("p",{children:["ID: ",i.id]}),Object(c.jsxs)("p",{children:["USERID: ",i.userId]}),Object(c.jsx)("span",{children:"TITLE:"}),Object(c.jsxs)("p",{children:[" ",i.title]}),Object(c.jsx)("span",{children:"BODY: "}),Object(c.jsx)("p",{children:i.body})]})},i.id)}),O)},h=n(7),x=n(8);function g(){var t=Object(h.a)(["\nheight: 150px;\ntext-align: center;\nfont-size: 24px;\ncolor:  rgb(178, 196, 24);\nfont-weight: 500;\nmargin-bottom: 10px;\n"]);return g=function(){return t},t}function v(){var t=Object(h.a)(["\n  list-style: none;\n  border: 1px solid rgb(178, 196, 24);\n  border-radius: 10px;\n  width: 300px;\n  padding: 10px;\n  margin: 10px auto;\n"]);return v=function(){return t},t}function m(){var t=Object(h.a)(["\n  padding: 30px;\n  font-size: 16px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n"]);return m=function(){return t},t}var y=x.a.ul(m()),w=x.a.li(v()),M=x.a.p(g()),S=function(t){var e=t.openModal,n=Object(a.useState)([]),r=Object(j.a)(n,2),o=r[0],i=r[1],s=Object(a.useState)(null),d=Object(j.a)(s,2),l=(d[0],d[1]);return Object(a.useEffect)((function(){b.a.get("https://jsonplaceholder.typicode.com/posts/").then((function(t){var e=t.data;return i(e)})).catch((function(t){l(t),alert(t)}))}),[]),Object(c.jsx)(y,{children:o.map((function(t){var n=t.id,a=t.title,r=t.body;return Object(c.jsxs)(w,{onClick:e,id:n,children:[Object(c.jsx)(M,{children:a}),Object(c.jsx)("p",{children:r})]},n)}))})},k=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={isOpenModal:!1,id:0},t.getData=function(e){t.setState({id:e.currentTarget.id}),t.toggleModal()},t.toggleModal=function(){t.setState({isOpenModal:!t.state.isOpenModal})},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isOpenModal,n=t.id;return console.log(e),Object(c.jsxs)("div",{children:[Object(c.jsx)(S,{openModal:this.getData}),e&&Object(c.jsx)(f,{onClick:this.toggleModal,id:n})]})}}]),n}(a.Component);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.9cb0b262.chunk.js.map