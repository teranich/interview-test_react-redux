(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,n){e.exports=n(297)},136:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(15),c=n.n(r),i=n(24),s=n(25),o=n(28),u=n(26),d=n(29),h=(n(136),n(126)),m=n.n(h),p=n(128),E=n.n(p),f=n(127),v=n.n(f),b=n(21),C=n.n(b),g=n(86),O=n.n(g),y=n(66),j=n.n(y),k=n(87),w=n.n(k),S=n(62),T=n(16),A=n.n(T),L=n(42),x=n.n(L),D=n(40),N=n.n(D),_=n(43),V=n.n(_),F=n(41),I=n.n(F),R=n(64),B=n.n(R),G=n(82),J=n.n(G),U=n(125),W=n.n(U),X=n(81),M=n.n(X),$=n(51),q=n.n($),z=n(44),H=n.n(z),K=n(27),P="ADD_EVENT",Q="CLEAR_EVENTS",Y="SELECTALL_EVENTS",Z="DESELECTALL_EVENTS",ee="TOGGLE_EVENT",te=function(){return{type:Y}},ne=function(){return{type:Z}},ae=function(){return{type:Q}},le=function(e){return{type:"FILTER_TEXT",text:e}},re=n(68),ce=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).cities=["\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434","\u0410\u0440\u0437\u0430\u043c\u0430\u0441","\u041c\u043e\u0441\u043a\u0432\u0430"],n.state={open:!1,name:"",date:new Date,address:""},n.handleChange=function(e){return function(t){n.setState(Object(S.a)({},e,t.target.value))}},n.handleDateChange=function(e){n.setState({date:e})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleAdd",value:function(){var e=this.cities[this.state.address],t=this.state.date.toLocaleDateString();this.props.dispatch(function(e,t,n){return{type:P,name:e,date:t,address:n}}(this.state.name,t,e)),this.setState({open:!1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(A.a,{onClick:this.handleClickOpen.bind(this)},"+"),l.a.createElement(N.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},l.a.createElement(B.a,null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"),l.a.createElement(I.a,null,l.a.createElement(H.a,null,l.a.createElement(H.a,null,l.a.createElement(x.a,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",value:this.state.name,onChange:this.handleChange("name")})),l.a.createElement(H.a,null,l.a.createElement(re.a,{margin:"normal",label:"\u0414\u0430\u0442\u0430",value:this.state.date,onChange:this.handleDateChange})),l.a.createElement(H.a,null,l.a.createElement(M.a,{htmlFor:"addr-select"},"\u0410\u0434\u0440\u0435\u0441"),l.a.createElement(J.a,{value:this.state.address,input:l.a.createElement(q.a,{name:"age",id:"addr-select"}),onChange:this.handleChange("address")},this.cities.map(function(e,t){return l.a.createElement(W.a,{value:t,key:t},e)}))))),l.a.createElement(V.a,null,l.a.createElement(A.a,{onClick:this.handleClose.bind(this),color:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),l.a.createElement(A.a,{onClick:this.handleAdd.bind(this),color:"primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))}}]),t}(a.Component),ie=Object(K.b)()(ce),se=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},n.handleClearEvents=function(e){n.props.dispatch(ae()),n.setState({open:!1})},n.isSelected=function(){return!n.props.events.find(function(e){return e.selected})},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(A.a,{disabled:this.isSelected(),onClick:this.handleClickOpen},"-"),l.a.createElement(N.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},l.a.createElement(B.a,null,"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"),l.a.createElement(I.a,null,"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f?"),l.a.createElement(V.a,null,l.a.createElement(A.a,{onClick:this.handleClose,color:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),l.a.createElement(A.a,{onClick:this.handleClearEvents,color:"primary"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))}}]),t}(a.Component),oe=Object(K.b)(function(e){return{events:e.events}})(se),ue=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).filterText=function(){return function(e){n.props.dispatch(le(e.target.value))}},n.onSelectAllClick=function(){return function(e){e.target.checked?n.props.dispatch(te()):n.props.dispatch(ne())}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleToggle",value:function(e){var t;this.props.dispatch((t=e.id,{type:ee,id:t}))}},{key:"render",value:function(){var e=this,t=this.props.events;return l.a.createElement("div",null,l.a.createElement(j.a,null,l.a.createElement(ie,null),l.a.createElement(oe,null),l.a.createElement(x.a,{onChange:this.filterText(),placeholder:"\u041f\u043e\u0438\u0441\u043a"})),l.a.createElement(m.a,null,l.a.createElement(v.a,null,l.a.createElement(O.a,null,l.a.createElement(C.a,null,l.a.createElement(w.a,{onChange:this.onSelectAllClick()})),l.a.createElement(C.a,null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),l.a.createElement(C.a,null,"\u0414\u0430\u0442\u0430"),l.a.createElement(C.a,null,"\u0410\u0434\u0440\u0435\u0441"))),l.a.createElement(E.a,null,t.map(function(t){return l.a.createElement(O.a,{key:t.id},l.a.createElement(C.a,null,l.a.createElement(w.a,{checked:t.selected,onChange:e.handleToggle.bind(e,t)})),l.a.createElement(C.a,null,t.name),l.a.createElement(C.a,null,t.date),l.a.createElement(C.a,null,t.address))}))))}}]),t}(a.Component),de=Object(K.b)(function(e){return{events:(t=e.events,n=e.filters,t.filter(function(e){return e.name.toUpperCase().includes(n.text.toUpperCase())}))};var t,n})(ue),he=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"}),l.a.createElement(de,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=n(129),pe=n(39),Ee=n(67),fe=n(130),ve=[{id:0,name:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435 1",date:"20.08.2017",address:"\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434",selected:!1},{id:1,name:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435 2",date:"13.09.2017",address:"\u0421\u0430\u0440\u043e\u0432",selected:!0},{id:2,name:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435 3",date:"03.10.2017",address:"\u0410\u0440\u0437\u0430\u043c\u0430\u0441",selected:!1}];var be={text:""},Ce=Object(pe.b)({events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return[].concat(Object(fe.a)(e),[{id:e.reduce(function(e,t){return Math.max(t.id,e)},-1)+1,name:t.name,date:t.date,address:t.address,selected:!1}]);case Q:return e.filter(function(e){return!e.selected});case ee:return e.map(function(e){return e.id===t.id?Object(Ee.a)({},e,{selected:!e.selected}):e});case Y:return e.map(function(e){return Object.assign(e,{selected:!0})});case Z:return e.map(function(e){return Object.assign(e,{selected:!1})});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_TEXT":return Object(Ee.a)({},e,{text:t.text});default:return e}}}),ge=Object(pe.c)(Ce);c.a.render(l.a.createElement(K.a,{store:ge},l.a.createElement(re.b,{utils:me.a},l.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,2,1]]]);
//# sourceMappingURL=main.c29174c2.chunk.js.map