"use strict";(self.webpackChunksoc_net=self.webpackChunksoc_net||[]).push([[847],{7193:function(e,s,a){a.d(s,{D:function(){return g}});var i=a(8683),n=a(5671),r=a(3144),t=a(136),d=a(516),l=a(2791),o=a(8687),u=a(7689),c=a(184),m=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var s=function(s){(0,t.Z)(l,s);var a=(0,d.Z)(l);function l(){return(0,n.Z)(this,l),a.apply(this,arguments)}return(0,r.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(e,(0,i.Z)({},this.props)):(0,c.jsx)(u.Fg,{to:"/login"})}}]),l}(l.Component);return(0,o.$j)(m,{})(s)}},250:function(e,s,a){a.d(s,{N:function(){return m}});var i="AddItemArea_addItemInput__PqZC7",n="AddItemArea_scrollBar__gj14p",r="AddItemArea_textArea__NmFNC",t="AddItemArea_btnAdd__-WEpj",d=a(6139),l=a(5304),o=a(8005),u=a(184),c=(0,l.D)(100),m=function(e){var s;return(0,u.jsx)("div",{className:i,children:(0,u.jsxs)("div",{className:n,children:[(0,u.jsx)("div",{className:r,children:(0,u.jsx)(d.Z,{validate:[l.C,c],component:o.g,name:e.name,placeholder:e.userName?"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c @".concat(null!==(s=e.userName)&&void 0!==s?s:"User"):"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442",value:e.value})}),(0,u.jsx)("button",{className:t,children:(0,u.jsx)("div",{children:"+"})})]})})}},3847:function(e,s,a){a.r(s),a.d(s,{default:function(){return O}});var i=a(8683),n=a(4165),r=a(5861),t=a(5671),d=a(3144),l=a(136),o=a(516),u=a(8687),c="Dialogs_dialogsPage__nfQF1",m="Dialogs_dialogsSideBar__y3cBA",g=a(5987),h={dialogsScroller:"DialogItems_dialogsScroller__bxX4g",dialogs:"DialogItems_dialogs__VQyG7"},v=a(184),_=["dialogs"],p=function(e){var s=e.dialogs;(0,g.Z)(e,_);return(0,v.jsxs)("div",{className:h.dialogsScroller,children:[(0,v.jsx)("div",{className:h.newMessage,children:"\u041b\u0438\u0447\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}),(0,v.jsx)("ul",{className:h.dialogs,children:s})]})},x="Dialog_dialog__41daL",j="Dialog_active__BQyrg",f="Dialog_avatar__BQlz+",N="Dialog_name__JaQwe",I=a(1087),D=a(4352),A=["isActive"],Z=function(e){var s="/dialogs/".concat(e.id);return(0,v.jsxs)(I.OL,{to:s,className:function(e){var s=e.isActive;(0,g.Z)(e,A);return s?"".concat(x," ").concat(j):x},children:[(0,v.jsx)("div",{className:f,children:(0,v.jsx)("img",{src:e.photos.small||e.photos.large||D,alt:""})}),(0,v.jsx)("div",{className:N,children:e.userName})]})},U=a(2807),M="Messages_messagesPage__5rJ0A",y="Messages_messages__GKcw8",T=a(8708),k=["messages"],F=function(e){var s=e.messages,a=(0,g.Z)(e,k),i=s.map((function(e,s,i){var n=a.authId===e.senderId?a.authAvatar:a.userAvatar;return 0===s?(0,v.jsx)(T.J,{avatar:n||D,message:e.message,name:e.name,addedDate:e.addedDate},e.id):i[s-1].senderId===e.senderId?(0,v.jsx)(T.J,{message:e.message,noUser:!0,name:e.name,addedDate:e.addedDate},e.id):(0,v.jsx)(T.J,{avatar:n||D,message:e.message,name:e.name,addedDate:e.addedDate},e.id)}));return(0,v.jsx)("ul",{children:i})},w="MessagesUserBar_userName__BNaux",B="MessagesUserBar_messagePreName__kw+e+",C="MessagesUserBar_messageName__D-0CU",P="MessagesUserBar_messageAka__X3e0o",J=function(e){return(0,v.jsxs)("div",{className:w,children:[(0,v.jsx)("div",{className:B,children:"@"}),(0,v.jsx)("div",{className:C,children:e.fullName}),(0,v.jsx)("div",{className:P,children:"AKA"}),(0,v.jsx)(I.OL,{to:"/profile/".concat(e.userId),children:e.fullName})]})},S=a(250),b=a(704),L=a(493),Q=(0,b.Z)({form:"dialog"})((function(e){var s;return(0,v.jsx)("form",{onSubmit:e.handleSubmit((function(s){var a={authId:e.authId,userId:e.userId,name:e.senderName};e.sendMessageToUser(a,s.message),s.message=""})),children:(0,v.jsx)(S.N,{userName:null!==(s=e.userName)&&void 0!==s?s:"User",senderName:e.senderName,name:"message",authId:e.authId,userId:e.userId})})})),X=(0,u.$j)((function(e){return{messages:e.dialogsPage.messages,dialog:e.dialogsPage.dialog,authId:e.auth.id,profile:e.profilePage.profile,messagesIsFetching:e.dialogsPage.messagesIsFetching}}),{addItemAction:U.kJ,sendMessageToUser:U.F7})((function(e){var s,a,i,n,r,t,d,l,o,u,c;return(0,v.jsxs)("div",{className:M,children:[e.messagesIsFetching&&(0,v.jsx)(L.p,{}),(0,v.jsx)(J,{fullName:null!==(s=null===(a=e.dialog)||void 0===a?void 0:a.fullName)&&void 0!==s?s:"User",userId:null===(i=e.dialog)||void 0===i?void 0:i.userId}),(0,v.jsx)("div",{className:y,children:(0,v.jsx)(F,{messages:e.messages,userAvatar:(null===(n=e.dialog)||void 0===n?void 0:n.photos.small)||(null===(r=e.dialog)||void 0===r?void 0:r.photos.large)||D,authAvatar:(null===(t=e.profile)||void 0===t?void 0:t.photos.small)||(null===(d=e.profile)||void 0===d?void 0:d.photos.large)||D,authId:e.authId})}),(0,v.jsx)(Q,{userName:null!==(l=null===(o=e.dialog)||void 0===o?void 0:o.fullName)&&void 0!==l?l:"User",senderName:null===(u=e.profile)||void 0===u?void 0:u.fullName,authId:e.authId,userId:null===(c=e.dialog)||void 0===c?void 0:c.userId,sendMessageToUser:e.sendMessageToUser})]})})),E="WithoutMessages_main__Vw4zd",G=function(e){return(0,v.jsx)("div",{className:E,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0442"})},V=function(e){var s=e.dialogs.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(Z,(0,i.Z)({},e))},e.id)}));return(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)("div",{className:m,children:(0,v.jsx)(p,{dialogs:s})}),e.params.id?(0,v.jsx)(X,{}):(0,v.jsx)(G,{})]})},W=a(7781),$=a(2791),q=a(4569),z=a(7193),H=a(6070),K=function(e){(0,l.Z)(a,e);var s=(0,o.Z)(a);function a(){return(0,t.Z)(this,a),s.apply(this,arguments)}return(0,d.Z)(a,[{key:"componentDidMount",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.getDialogs(),this.props.params.id&&this.props.getMessages(this.props.params.id),e.next=4,this.props.getUser(this.props.authId);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,s,a){e.params.id!==this.props.params.id&&this.props.getMessages(this.props.params.id)}},{key:"render",value:function(){return this.props.isFetching?(0,v.jsx)(L.p,{}):(0,v.jsx)(V,(0,i.Z)({},this.props))}}]),a}($.Component),O=(0,W.qC)((0,u.$j)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,authId:e.auth.id,isFetching:e.dialogsPage.isFetching}}),{getDialogs:U.kp,getMessages:U.GJ,getUser:H.C4}),q.E,z.D)(K)},8708:function(e,s,a){a.d(s,{J:function(){return v}});var i=a(5987),n="TextItem_item__lnLmw",r="TextItem_avatar__-D5fm",t="TextItem_text__I9BRV",d="TextItem_nameAndDate__SxWMt",l="TextItem_userName__InrHg",o="TextItem_postDate__uyFiT",u="TextItem_description__EuyTX",c="TextItem_noUser__FuXyC",m=a(4352),g=a(184),h=["noUser"],v=function(e){var s,a,v=e.noUser,_=(0,i.Z)(e,h);return _.addedDate&&(s=new Date(_.addedDate),a="".concat(s.getHours(),":").concat(s.getMinutes())),v?(0,g.jsx)("li",{children:(0,g.jsx)("div",{className:c,children:(0,g.jsx)("div",{className:u,children:_.message})})}):(0,g.jsx)("li",{children:(0,g.jsxs)("div",{className:n,children:[(0,g.jsx)("div",{className:r,children:(0,g.jsx)("img",{src:(null===_||void 0===_?void 0:_.avatar)||m,alt:""})}),(0,g.jsxs)("div",{className:t,children:[(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("span",{className:l,children:(null===_||void 0===_?void 0:_.name)||"Anonymous"})," ",(0,g.jsx)("span",{className:o,children:s?"".concat(s.toLocaleDateString()," ").concat(a):""})]}),(0,g.jsx)("div",{className:u,children:_.message})]})]})},_.id)}}}]);
//# sourceMappingURL=847.f679f4a0.chunk.js.map