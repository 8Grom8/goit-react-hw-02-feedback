(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={description:"Statistics_description__36yMe"}},function(e,t,n){e.exports={optionsContainer:"FeedbackOptions_optionsContainer__zsZ1y",btn:"FeedbackOptions_btn__3bSCH"}},,,,,,function(e,t,n){e.exports={message:"Notification_message__2SDtK"}},function(e,t,n){e.exports={title:"SectionStyles_title__2c3hF"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(5),s=n.n(c),o=(n(17),n(6)),i=n(7),r=n(8),d=n(12),b=n(11),l=n(3),u=n.n(l),j=n(0),p=function(e){var t=e.onLeaveFeedback;return Object(j.jsxs)("div",{className:u.a.optionsContainer,children:[Object(j.jsx)("button",{className:u.a.btn,type:"button",onClick:function(){return t("good")},children:"Good"}),Object(j.jsx)("button",{className:u.a.btn,type:"button",onClick:function(){return t("neutral")},children:"Neutral"}),Object(j.jsx)("button",{className:u.a.btn,type:"button",onClick:function(){return t("bad")},children:"Bad"})]})},h=n(9),O=n.n(h),f=function(e){var t=e.message;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{className:O.a.message,children:t})})},x=n(10),v=n.n(x),k=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{className:v.a.title,title:t,children:t}),n]})},g=n(2),m=n.n(g),F=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positiveFeedback;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{className:m.a.description,children:["Good: ",t]}),Object(j.jsxs)("p",{className:m.a.description,children:["Neutral: ",n]}),Object(j.jsxs)("p",{className:m.a.description,children:["Bad: ",a]}),Object(j.jsxs)("p",{className:m.a.description,children:["Total: ",c]}),Object(j.jsxs)("p",{className:m.a.description,children:["Positive feedback: ",s,"%"]})]})},N=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.onLeaveFeedback=function(t){e.setState((function(e){var n=e[t];return Object(o.a)({},t,n+1)}))},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return n?Math.round(t/n*100):0},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage(),o=c?Object(j.jsx)(F,{good:t,neutral:n,bad:a,total:c,positiveFeedback:s}):Object(j.jsx)(f,{message:"No feedback given"});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k,{title:"Please leave feedback",children:Object(j.jsx)(p,{onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(k,{title:"Statistics",children:o})]})}}]),n}(a.Component);s.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.7b996ab8.chunk.js.map