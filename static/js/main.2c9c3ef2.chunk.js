(this["webpackJsonpuser-list-pagination"]=this["webpackJsonpuser-list-pagination"]||[]).push([[0],[,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),s=t(4),i=t.n(s),c=(t(9),t(3)),l=(t(10),t(11),t(0)),o=function(e){var a=e.avatar,t=e.first_name,r=e.last_name,n=e.email;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:a,className:"profile-img",alt:"something"}),Object(l.jsx)("h3",{className:"name",children:"".concat(t," ").concat(r)}),Object(l.jsx)("h4",{style:{color:"#ffffff",marginTop:"15px"},children:n})]})},m=function(){var e=Object(r.useState)(0),a=Object(c.a)(e,2),t=a[0],n=a[1],s=Object(r.useState)({page:"",per_page:"",total:"",total_pages:2,data:[{id:1,email:"george.bluth@reqres.in",first_name:"George",last_name:"Bluth",avatar:"https://reqres.in/img/faces/1-image.jpg"},{id:2,email:"janet.weaver@reqres.in",first_name:"Janet",last_name:"Weaver",avatar:"https://reqres.in/img/faces/2-image.jpg"},{id:3,email:"emma.wong@reqres.in",first_name:"Emma",last_name:"Wong",avatar:"https://reqres.in/img/faces/3-image.jpg"},{id:4,email:"eve.holt@reqres.in",first_name:"Eve",last_name:"Holt",avatar:"https://reqres.in/img/faces/4-image.jpg"},{id:5,email:"charles.morris@reqres.in",first_name:"Charles",last_name:"Morris",avatar:"https://reqres.in/img/faces/5-image.jpg"},{id:6,email:"tracey.ramos@reqres.in",first_name:"Tracey",last_name:"Ramos",avatar:"https://reqres.in/img/faces/6-image.jpg"}],support:{url:"https://reqres.in/#support-heading",text:"To keep ReqRes free, contributions towards server costs are appreciated!"}}),i=Object(c.a)(s,2),m=i[0],j=i[1],h=function(){(function(){return fetch("https://reqres.in/api/users?page=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)).then((function(e){return e.json()})).catch((function(){return console.log("Error in fetching the data")}))})(t).then((function(e){j(e)}))};return Object(r.useEffect)((function(){h()}),[t]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"title-container",children:Object(l.jsx)("h1",{className:"title",children:"User List"})}),Object(l.jsx)("div",{className:"user-container",children:m.data.map((function(e){return Object(l.jsx)(o,{avatar:e.avatar,first_name:e.first_name,last_name:e.last_name,email:e.email})}))}),Object(l.jsxs)("div",{className:"page-counter-container",children:[Object(l.jsx)("h3",{children:"Select the Page:"}),Object(l.jsxs)("select",{id:"dropdown",value:t,onChange:function(e){return n(e.target.value)},children:[Object(l.jsx)("option",{value:"1",children:"1"}),Object(l.jsx)("option",{value:"2",children:"2"})]})]})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.2c9c3ef2.chunk.js.map