(this["webpackJsonpsmall-business"]=this["webpackJsonpsmall-business"]||[]).push([[0],{81:function(e,t,a){e.exports=a(95)},86:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),c=(a(86),a(9)),s=a(16),i=a(35),u=a(38),m=a(39),d=a(46),p=a(45),h=a(120),g=a(134),f=a(124),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",redirectHome:!1},e.handleTextChange=function(t){var a=Object(i.a)({},e.state);a[t.target.name]=t.target.value,e.setState(a)},e.login=function(t){t.preventDefault(),document.cookie="loggedIn=true;max-age=60*1000",e.props.setUser(e.state.username),console.log(e.state.username),e.setState({redirectHome:!0})},e}return Object(m.a)(a,[{key:"render",value:function(){return this.state.redirectHome?r.a.createElement(c.a,{to:"/"}):r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{maxWidth:"sm"},r.a.createElement("form",{className:"login-form",onSubmit:this.login},r.a.createElement(g.a,{required:!0,onChange:this.handleTextChange,value:this.state.username,name:"username",label:"Username",type:"text"}),r.a.createElement(g.a,{required:!0,onChange:this.handleTextChange,value:this.state.password,name:"password",label:"Password",type:"password"}),r.a.createElement(f.a,{type:"submit",className:"button",variant:"contained"},"Login"))))}}]),a}(n.Component),v=a(52),b=a.n(v),y=a(64),z=Object(s.b)((function(e){return{loggedIn:e.loggedIn}}),(function(e){return{login:function(t){return e(function(e){return{type:"LOGIN",value:e}}(t))},setUser:function(t){return e(function(e){return{type:"SET_USER",value:e}}(t))}}}))(E),w=a(125),S=a(126),C=a(127),O=a(128),k=a(129),j=a(65),I=a.n(j),x=a(20),N=function(e){return r.a.createElement(h.a,{maxWidth:"lg",className:"car-container"},r.a.createElement(w.a,null,r.a.createElement(S.a,null,r.a.createElement(C.a,null,r.a.createElement(O.a,null,r.a.createElement("h3",null,"Name")),r.a.createElement(O.a,null,r.a.createElement("h3",null,"Description")),r.a.createElement(O.a,null,r.a.createElement("h3",null,"Hours")),r.a.createElement(O.a,null,r.a.createElement("h3",null,"Address")),r.a.createElement(O.a,null,r.a.createElement("h3",null,"Delete")))),r.a.createElement(k.a,null,e.bizzes.map((function(t,a){return r.a.createElement(C.a,{key:t.id},r.a.createElement(O.a,{style:{color:"#592825"}},r.a.createElement(x.b,{to:"/bizz/".concat(t.id)},t.name)),r.a.createElement(O.a,null,t.description),r.a.createElement(O.a,{style:{color:"#592825"}},t.hours),r.a.createElement(O.a,null,t.address),r.a.createElement(O.a,null,r.a.createElement(I.a,{onClick:function(){return e.removeBizz(a)},style:{color:"#B46746"}})))})))))},D=Object(s.b)((function(e){return{bizzes:e.bizzes,loggedIn:e.loggedIn}}),(function(e){return{removeBizz:function(t){return e({type:"REMOVE_BIZZ",value:t})}}}))(N),T=a(130),B=a(72),M=a(67),W=a.n(M),A=function(e){e.text;return r.a.createElement("div",null,r.a.createElement(W.a,null))},L=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e={center:{lat:this.props.lat,lng:this.props.lng},zoom:11};return r.a.createElement("div",{style:{height:"40vh",width:"420px",marginLeft:"50px",paddingBottom:"30px"}},r.a.createElement(B.a,{bootstrapURLKeys:{key:"AIzaSyD6VnBTdxR-tgn6yan3fgFQ_HBAVb5hLSI"},defaultCenter:e.center,defaultZoom:e.zoom},r.a.createElement(A,{lat:this.props.lat,lng:this.props.lng,text:"My Marker"})))}}]),a}(n.Component),H=function(e){var t=e.match.params.id,a=e.bizzes.find((function(e){return e.id==t}));return console.log(t),r.a.createElement(h.a,{maxWidth:"sm",className:"car-container"},r.a.createElement(T.a,{className:"car-paper"},r.a.createElement("h2",null,a.name),r.a.createElement("h4",null,a.address),r.a.createElement("h4",null,a.hours),r.a.createElement("p",null,a.description)),r.a.createElement(L,{className:"map",lat:a.lat,lng:a.lng}))},R=Object(s.b)((function(e){return{bizzes:e.bizzes}}))(H),Z=a(71),_=function(e){var t=Object(n.useState)({name:"",address:"",hours:"",description:"",lat:0,lng:0,redirect:!1}),a=Object(Z.a)(t,2),l=a[0],o=a[1],s=function(e){var t=Object(i.a)({},l);t[e.target.id]=e.target.value,o(t)},u=function(t){t.preventDefault();var a=Object(i.a)({},l);a.id=e.bizzes.length+1,e.addBizz(a),o({redirect:!0})};return r.a.createElement("div",null,r.a.createElement(h.a,{maxWidth:"sm",className:"add-form"},r.a.createElement("form",{onSubmit:u},r.a.createElement(g.a,{onChange:s,placeholder:"Name",fullWidth:!0,id:"name"}),r.a.createElement(g.a,{onChange:s,placeholder:"Address",fullWidth:!0,id:"address"}),r.a.createElement(g.a,{onChange:s,placeholder:"Hours",fullWidth:!0,id:"hours"}),r.a.createElement(g.a,{onChange:s,placeholder:"Description",fullWidth:!0,id:"description"}),r.a.createElement(f.a,{variant:"contained",className:"button",type:"submit",size:"small",style:{paddingLeft:150,paddingRight:150,marginTop:25,marginBottom:30,marginLeft:100},onClick:u},"Save"),l.redirect&&r.a.createElement(c.a,{to:"/"}))))},U=Object(s.b)((function(e){return{bizzes:e.bizzes}}),(function(e){return{addBizz:function(t){return e((a=t,function(){var e=Object(y.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://maps.google.com/maps/api/geocode/json?key=AIzaSyCQwEqWmC9UH_CpoiMFQf6bh96SkTMAZ0Y&address=".concat(a.address)).then((function(e){return e.json()})).then((function(e){a.lat=e.results[0].geometry.location.lat,a.lng=e.results[0].geometry.location.lng,t({type:"ADD_BIZZ",value:a})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var a}}}))(_),G=function(){return r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/login",component:z}),r.a.createElement(c.b,{exact:!0,path:"/",component:D}),r.a.createElement(c.b,{exact:!0,path:"/add",component:U}),r.a.createElement(c.b,{exact:!0,path:"/bizz/:id",component:R}))},X=a(131),V=a(132),q=a(133),J=a(68),Q=a.n(J),F=a(69),K=a.n(F),P=function(e){var t=Q.a.parse(document.cookie);return r.a.createElement("div",null,r.a.createElement(X.a,{position:"relative",color:"#577271",className:"nav-bar"},r.a.createElement(V.a,null,r.a.createElement(q.a,{style:{color:"#D0955D"}},r.a.createElement(K.a,null)),r.a.createElement(T.a,{variant:"h5",style:{flexGrow:"1",color:"#592825",letterSpacing:"5px"}},"Coffee Buzz"),r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(f.a,null,r.a.createElement(x.b,{to:"/"},"LISTINGS"))),r.a.createElement("li",{className:"nav-list-item"},"loggedIn=true"===document.cookie&&r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(x.b,{to:"/Add"},"ADD")),r.a.createElement(f.a,{onClick:function(){document.cookie="loggedIn=",window.location.replace("/login")}},"Logout"))),r.a.createElement("li",{className:"nav-list-item"},"loggedIn=true"!==document.cookie&&r.a.createElement(f.a,{onClick:function(){document.cookie="loggedIn=",window.location.replace("/login")}},"Login"))))),r.a.createElement(T.a,{color:"text-primary"},t.loggedIn&&r.a.createElement("span",{className:"welcome-message"},"Welcome"," ",r.a.createElement("span",{style:{color:"#E8D8CC",letterSpacing:"3px",fontWeight:"bold"}},e.user),"!")))},Y=Object(s.b)((function(e){return{loggedIn:e.loggedIn,user:e.user}}))(P),$=(a(94),a(28)),ee=a(53),te=Object($.c)({bizzes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BIZZ":return[].concat(Object(ee.a)(e),[t.value]);case"REMOVE_BIZZ":var a=Object(ee.a)(e);return a.splice(t.value,1),a;default:return e}},loggedIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.value;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.value;default:return e}}}),ae=a(70),ne=Object($.d)(te,{bizzes:[{id:1,name:" Wake the Dead Coffee House",description:"Regularly hosting live events, this quirky spot offers coffee, craft brews, sandwiches & treats.",hours:"6am - 6pm",address:"1432 Old, Ranch Rd 12, San Marcos, TX 78666",lat:29.891636,lng:-97.956703},{id:2,name:" Summer Moon Coffee",description:" Summer Moon Coffee is organic, oak-roasted coffee served in our award-winning coffee shops in Austin, San Antonio, Dallas, Houston, and San Marcos",hours:"6am - 6pm",address:"1180 Thorpe Ln, San Marcos, TX 78666",lat:29.887332,lng:-97.923277},{id:3,name:"Tantra SMTX",description:"Art-filled hangout with outdoor seats, espresso drinks, cafe fare & craft beers, plus live music.",hours:"Temporarily Closed",address:"217 W Hopkins St, San Marcos, TX 78666",lat:29.882653,lng:-97.943369},{id:4,name:"Stellar Coffee co.",description:"Good Humans. Great Vibes. Stellar Coffee.",hours:"8am - 8pm",address:"232 N LBJ Dr #101, San Marcos, TX 78666",lat:29.884032,lng:-97.940062},{id:5,name:"Mochas & Javas",description:"Coffeehouse offering drinks made with locally roasted beans, plus light food, smoothies & pastries.",hours:"6am - 6pm",address:"102 Wonder World Dr # 406, San Marcos, TX 78666",lat:29.864408,lng:-97.962894}],loggedIn:!1,user:"username"},Object($.a)(ae.a));var re=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(s.a,{store:ne},r.a.createElement(x.a,null,r.a.createElement(Y,null),r.a.createElement(G,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.b2bfd15a.chunk.js.map