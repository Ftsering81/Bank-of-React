(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{41:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(33),r=n.n(s),i=(n(41),n(20)),o=n.n(i),j=n(34),b=n(23),l=n(17),d=n(9),u=n(10),x=n(12),h=n(11),O=n(3),m=n(2),p=(n(43),n(0)),f=function(e){Object(x.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"balance",children:Object(p.jsxs)("p",{style:{fontSize:"large"},children:[" Balance: ",this.props.accountBalance," "]})})}}]),n}(c.Component),v=f;n(45);var g=function(e){return"Home"===e.forView?Object(p.jsxs)("div",{className:"homeNav",children:[Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/login",style:{textDecoration:"none"},children:"Log in"})," "]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/userProfile",style:{textDecoration:"none"},children:"User Profile"})," "]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/debits",style:{textDecoration:"none"},children:"Debits"})," "]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/credits",style:{textDecoration:"none"},children:"Credits"}),"  "]})]}):"Debit"===e.forView?Object(p.jsxs)("div",{className:"debitNav",children:[Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/login",style:{textDecoration:"none"},children:"Log in"})," "]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/userProfile",style:{textDecoration:"none"},children:"User Profile"})," "]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/credits",style:{textDecoration:"none"},children:"Credits"}),"  "]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/",style:{textDecoration:"none"},children:"Home"})," "]})]}):"Credit"===e.forView?Object(p.jsxs)("div",{className:"creditNav",children:[Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/login",style:{textDecoration:"none"},children:"Log in"})," "]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/userProfile",style:{textDecoration:"none"},children:"User Profile"})," "]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/debits",style:{textDecoration:"none"},children:"Debits"})," "]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/",style:{textDecoration:"none"},children:"Home"})," "]})]}):"Login"===e.forView?Object(p.jsx)("div",{className:"loginNav",children:Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/",style:{textDecoration:"none"},children:" Back Home"})," "]})}):"UserProfile"===e.forView?Object(p.jsxs)("div",{className:"userProfileNav",children:[Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/login",style:{textDecoration:"none"},children:"Log in"})," "]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/debits",style:{textDecoration:"none"},children:"Debits"})," "]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/credits",style:{textDecoration:"none"},children:"Credits"}),"  "]}),Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(O.b,{to:"/",style:{textDecoration:"none"},children:"Home"})," "]})]}):void 0},D=function(e){Object(x.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Home",children:[Object(p.jsx)("img",{src:"bank.jpeg",alt:"bank"}),Object(p.jsx)("h1",{children:"Bank of React"}),Object(p.jsx)(g,{forView:"Home"})," ",Object(p.jsx)("h2",{children:" Account Balance"}),Object(p.jsx)(v,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),y=D,B=(n(51),function(e){Object(x.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"UserProfile",children:[Object(p.jsx)("img",{src:"bank.jpeg",alt:"bank"}),Object(p.jsx)("h1",{children:" User Profile"}),Object(p.jsxs)("div",{className:"userName",children:[" Username: ",this.props.userName," "]}),Object(p.jsxs)("div",{className:"memberSince",children:[" Member Since: ",this.props.memberSince," "]}),Object(p.jsx)(g,{forView:"UserProfile"}),Object(p.jsx)(v,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component)),N=B,k=(n(52),function(e){Object(x.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(l.a)({},e.state.user),c=t.target.name,a=t.target.value;n[c]=a,e.setState({user:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogin(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(u.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(p.jsx)(m.a,{to:"/userProfile"}):Object(p.jsxs)("div",{className:"Login",children:[Object(p.jsx)("img",{src:"bank.jpeg",alt:"bank"}),Object(p.jsx)("h1",{children:" Log In "}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(p.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"text",name:"password"})]}),Object(p.jsx)("button",{id:"LoginButton",children:"Log In"})]}),Object(p.jsx)(g,{forView:"Login"})]})}}]),n}(c.Component)),S=n(22),C=n.n(S);n(71);var w=function(e){var t=e.debits.map((function(e,t){var n="";return n=""===e.id?t.toString():e.id,Object(p.jsxs)("li",{children:[" ",e.amount," ",e.description," ",e.date.slice(0,10)," "]},n)}));return Object(p.jsxs)("div",{className:"Debits",children:[Object(p.jsx)("img",{src:"bank.jpeg",alt:"bank"}),Object(p.jsx)("h1",{children:" DEBITS "}),Object(p.jsx)("div",{className:"debitsList",children:Object(p.jsxs)("ul",{children:[" ",t," "]})}),Object(p.jsxs)("form",{onSubmit:e.addDebit,children:[Object(p.jsx)("label",{htmlFor:"description",children:" Description: "}),Object(p.jsx)("input",{type:"text",name:"description"}),Object(p.jsx)("label",{htmlFor:"amount",children:" Amount: "}),Object(p.jsx)("input",{type:"text",name:"amount"}),Object(p.jsx)("button",{type:"submit",id:"addButton",children:" Add Debit "})]}),Object(p.jsx)(g,{forView:"Debit"})," ",Object(p.jsx)(v,{accountBalance:e.accountBalance})]})};var F=function(e){var t=e.credits.map((function(e,t){var n="";return n=""===e.id?t.toString():e.id,Object(p.jsxs)("li",{children:[" ",e.description," ",e.amount," ",e.date]},n)}));return Object(p.jsxs)("div",{className:"Credits",children:[Object(p.jsx)("img",{src:"bank.jpeg",alt:"bank"}),Object(p.jsx)("h1",{children:" CREDITS "}),Object(p.jsxs)("ul",{children:[" ",t," "]}),Object(p.jsxs)("form",{onSubmit:e.addCredit,children:[Object(p.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(p.jsx)("input",{type:"text",name:"description"}),Object(p.jsx)("label",{htmlFor:"amount",children:"Amount: "}),Object(p.jsx)("input",{type:"text",name:"amount"}),Object(p.jsx)("button",{type:"submit",children:" Add Credit "})]}),Object(p.jsx)(g,{forView:"Credit"})," ",Object(p.jsx)(v,{accountBalance:e.accountBalance})]})},L=function(e){Object(x.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).getTodayDate=function(){var e=new Date,t=e.getFullYear().toString(),n=(e.getMonth()+1).toString();2!==n.length&&(n="0"+n);var c=e.getDate().toString();return 2!==c.length&&(c="0"+c),t+"-"+n+"-"+c},e.mockLogIn=function(t){var n=Object(l.a)({},e.state.currentUser);n.memberSince=e.getTodayDate(),n.userName=t.userName,e.setState({currentUser:n})},e.addDebit=function(t){t.preventDefault();var n=parseFloat(t.target.amount.value),c={id:"",amount:n,description:t.target.description.value,date:e.getTodayDate()},a=Object(b.a)(e.state.debits);a.push(c);var s=(e.state.accountBalance-n).toFixed(2);e.setState({debits:a,accountBalance:s})},e.addCredit=function(t){t.preventDefault();var n=t.target.description.value,c={id:"",amount:parseFloat(t.target.amount.value),description:n,date:e.getTodayDate()},a=Object(b.a)(e.state.credits);a.push(c);var s=(parseFloat(e.state.accountBalance)+c.amount).toFixed(2);e.setState({credits:a,accountBalance:s})},e.state={accountBalance:0,currentUser:{userName:"",memberSince:""},debits:[],credits:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://moj-api.herokuapp.com/debits");case 2:return t=e.sent,e.next=5,C.a.get("https://moj-api.herokuapp.com/credits");case 5:n=e.sent,t=t.data,n=n.data,c=0,a=0,t.forEach((function(e){c+=e.amount})),n.forEach((function(e){a+=e.amount})),s=(a-c).toFixed(2),this.setState({accountBalance:s,debits:t,credits:n});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsx)(O.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(y,{accountBalance:e.state.accountBalance})}}),"  ",Object(p.jsx)(m.b,{exact:!0,path:"/userProfile",render:function(){return Object(p.jsx)(N,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince,accountBalance:e.state.accountBalance})}}),Object(p.jsx)(m.b,{exact:!0,path:"/login",render:function(){return Object(p.jsx)(k,{user:e.state.currentUser,mockLogin:e.mockLogIn})}}),Object(p.jsx)(m.b,{exact:!0,path:"/debits",render:function(){return Object(p.jsx)(w,{addDebit:e.addDebit,debits:e.state.debits,accountBalance:e.state.accountBalance})}}),Object(p.jsx)(m.b,{exact:!0,path:"/credits",render:function(){return Object(p.jsx)(F,{addCredit:e.addCredit,credits:e.state.credits,accountBalance:e.state.accountBalance})}})]})})}}]),n}(c.Component),P=L,U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root")),U()}},[[72,1,2]]]);
//# sourceMappingURL=main.7a1cb95b.chunk.js.map