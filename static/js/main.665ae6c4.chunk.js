(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),o=c(2),i=c(3),l=c(5),r=c(4),s=c(1),u=c.n(s),m=(c(12),c(0)),h=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={time:new Date},e.timeUpdater=setInterval((function(){e.setState({time:new Date})}),1e3),e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){return this.timeUpdater}},{key:"componentDidUpdate",value:function(e){var t=this.state.time.toLocaleTimeString();console.log(t);var c=e.name,n=this.props.name;n!==c&&console.log("The Clock was renamed from ".concat(c," to ").concat(n))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeUpdater)}},{key:"render",value:function(){var e=this.state.time.toLocaleTimeString();return Object(m.jsx)("div",{className:"clock",children:Object(m.jsxs)("h2",{className:"clock__time",children:["Current time:",e]})})}}]),c}(u.a.Component),k=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clockName:1,isClockVisible:!0},e.generateClockName=function(){var t=Math.round(1e3*Math.random());e.setState({clockName:t})},e.hideClock=function(){e.setState({isClockVisible:!1})},e.showClock=function(){e.setState({isClockVisible:!0})},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this.state,t=e.clockName,c=e.isClockVisible;return Object(m.jsx)("div",{className:"Clock",children:Object(m.jsxs)("div",{className:"Clock__App",children:[Object(m.jsx)("h1",{children:"Clock Name: ".concat(t)}),Object(m.jsxs)("div",{className:"Clock__buttons",children:[Object(m.jsx)("button",{type:"button",onClick:this.hideClock,children:"Hide clock"}),Object(m.jsx)("button",{type:"button",onClick:this.showClock,children:"Show clock"}),Object(m.jsx)("button",{type:"button",onClick:this.generateClockName,children:"Generate name"})]}),c&&Object(m.jsx)(h,{"data-cy":"time",name:t})]})})}}]),c}(u.a.Component),b=k;a.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.665ae6c4.chunk.js.map