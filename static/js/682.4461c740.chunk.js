"use strict";(self.webpackChunksoc_net=self.webpackChunksoc_net||[]).push([[682],{7193:function(e,t,s){s.d(t,{D:function(){return f}});var n=s(8683),i=s(5671),a=s(3144),r=s(136),o=s(516),l=s(2791),u=s(8687),c=s(7689),d=s(184),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){(0,r.Z)(l,t);var s=(0,o.Z)(l);function l(){return(0,i.Z)(this,l),s.apply(this,arguments)}return(0,a.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(e,(0,n.Z)({},this.props)):(0,d.jsx)(c.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(p,{})(t)}},250:function(e,t,s){s.d(t,{N:function(){return p}});var n="AddItemArea_addItemInput__PqZC7",i="AddItemArea_scrollBar__gj14p",a="AddItemArea_textArea__NmFNC",r="AddItemArea_btnAdd__-WEpj",o=s(6139),l=s(5304),u=s(8005),c=s(184),d=(0,l.D)(100),p=function(e){var t;return(0,c.jsx)("div",{className:n,children:(0,c.jsxs)("div",{className:i,children:[(0,c.jsx)("div",{className:a,children:(0,c.jsx)(o.Z,{validate:[l.C,d],component:u.g,name:e.name,placeholder:e.userName?"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c @".concat(null!==(t=e.userName)&&void 0!==t?t:"User"):"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442",value:e.value})}),(0,c.jsx)("button",{className:r,children:(0,c.jsx)("div",{children:"+"})})]})})}},4682:function(e,t,s){s.r(t),s.d(t,{default:function(){return E}});var n=s(8683),i=s(5671),a=s(3144),r=s(136),o=s(516),l=s(2791),u="Profile_profilePage__-Mehe",c="Profile_profile__glndg",d="LargeImage_largeImg__8sWI2",p=s(4352),f=s(184),m=function(e){var t,s;return(0,f.jsx)("div",{className:d,children:(0,f.jsx)("img",{src:(null===(t=e.photo)||void 0===t?void 0:t.large)||(null===(s=e.photo)||void 0===s?void 0:s.small)||p,alt:""})})},v="ProfileAvatar_profile__Cih8Z",h="ProfileAvatar_profileBlock__bM7Zo",_="ProfileAvatar_avatar__ecARD",x=function(e){var t,s;return(0,f.jsx)("div",{className:v,children:(0,f.jsx)("div",{className:h,children:(0,f.jsx)("div",{className:_,children:(0,f.jsx)("img",{src:(null===(t=e.photo)||void 0===t?void 0:t.large)||(null===(s=e.photo)||void 0===s?void 0:s.small)||p,alt:""})})})})},j={name:"ProfileDescription_name__1gDdh",profileData:"ProfileDescription_profileData__igq5O",infoFooter:"ProfileDescription_infoFooter__A109F",profile:"ProfileDescription_profile__q4M6m"},g=(l.Component,s(885)),N=function(e){var t=(0,l.useState)(!1),s=(0,g.Z)(t,2),n=s[0],i=s[1],a=(0,l.useState)(e.status),r=(0,g.Z)(a,2),o=r[0],u=r[1];return(0,l.useEffect)((function(){u(e.status)}),[e.status]),(0,f.jsxs)(f.Fragment,{children:[!n&&(0,f.jsx)("div",{className:j.status,onDoubleClick:function(){i(!0)},children:e.status||"nothing"}),n&&(0,f.jsx)("div",{children:(0,f.jsx)("input",{type:"text",value:o,autoFocus:!0,onChange:function(e){return t=e.target.value,void u(t);var t},onBlur:function(){i(!1),e.updateStatus(o)}})})]})},A=function(e){var t;return(0,f.jsx)("div",{className:j.profile,children:(0,f.jsxs)("div",{className:j.profileData,children:[(0,f.jsx)("div",{className:j.name,children:(0,f.jsx)("div",{children:(null===(t=e.profile)||void 0===t?void 0:t.fullName)||"Anonymous"})}),(0,f.jsx)(N,{status:e.status,updateStatus:e.updateStatus})]})})},I=function(e){var t,s;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m,{photo:null===(t=e.profile)||void 0===t?void 0:t.photos}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)(x,{photo:null===(s=e.profile)||void 0===s?void 0:s.photos}),(0,f.jsx)(A,{profile:e.profile,status:e.status,updateStatus:e.updateStatus})]})]})},D=s(6070),P="ProfilePosts_createPost__UAwVX",Z=s(250),C=s(8708),S=(0,s(704).Z)({form:"posts"})((function(e){return(0,f.jsx)("form",{onSubmit:e.handleSubmit((function(t){e.addItemAction(t.post),t.post=""})),children:(0,f.jsx)(Z.N,{value:e.value,textChangeAction:e.textChangeAction,addItemAction:e.addItemAction,name:"post"})})})),F=s(8687),y=(0,F.$j)((function(e){return{posts:e.profilePage.posts,value:e.profilePage.newPostText,profile:e.profilePage.profile}}),{addItemAction:D.Wl})((function(e){var t=e.posts.map((function(t){return(0,l.createElement)(C.J,(0,n.Z)((0,n.Z)({},t),{},{avatar:e.profile.photos.small,key:t.id}))}));return(0,f.jsxs)("div",{className:P,children:[(0,f.jsx)(S,{addItemAction:e.addItemAction}),(0,f.jsx)("ul",{children:t})]})})),T=function(e){return(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)(I,{profile:e.profile,status:e.status,updateStatus:e.updateUserStatus}),(0,f.jsx)(y,{})]})},U=s(493),k=s(7193),b=s(7781),w=s(4569),M=function(e){(0,r.Z)(s,e);var t=(0,o.Z)(s);function s(){return(0,i.Z)(this,s),t.apply(this,arguments)}return(0,a.Z)(s,[{key:"componentDidMount",value:function(){var e=this.props.params.id;e||(e=this.props.id),this.props.getUser(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return this.props.isFetching||!this.props.profile?(0,f.jsx)(U.p,{}):(0,f.jsx)(T,(0,n.Z)({},this.props))}}]),s}(l.Component),E=(0,b.qC)((0,F.$j)((function(e){return{profile:e.profilePage.profile,isFetching:e.profilePage.isFetching,status:e.profilePage.status,id:e.auth.id}}),{getUser:D.C4,getUserStatus:D.fG,updateUserStatus:D.X8}),k.D,w.E)(M)},8708:function(e,t,s){s.d(t,{J:function(){return v}});var n=s(5987),i="TextItem_item__lnLmw",a="TextItem_avatar__-D5fm",r="TextItem_text__I9BRV",o="TextItem_nameAndDate__SxWMt",l="TextItem_userName__InrHg",u="TextItem_postDate__uyFiT",c="TextItem_description__EuyTX",d="TextItem_noUser__FuXyC",p=s(4352),f=s(184),m=["noUser"],v=function(e){var t,s,v=e.noUser,h=(0,n.Z)(e,m);return h.addedDate&&(t=new Date(h.addedDate),s="".concat(t.getHours(),":").concat(t.getMinutes())),v?(0,f.jsx)("li",{children:(0,f.jsx)("div",{className:d,children:(0,f.jsx)("div",{className:c,children:h.message})})}):(0,f.jsx)("li",{children:(0,f.jsxs)("div",{className:i,children:[(0,f.jsx)("div",{className:a,children:(0,f.jsx)("img",{src:(null===h||void 0===h?void 0:h.avatar)||p,alt:""})}),(0,f.jsxs)("div",{className:r,children:[(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("span",{className:l,children:(null===h||void 0===h?void 0:h.name)||"Anonymous"})," ",(0,f.jsx)("span",{className:u,children:t?"".concat(t.toLocaleDateString()," ").concat(s):""})]}),(0,f.jsx)("div",{className:c,children:h.message})]})]})},h.id)}}}]);
//# sourceMappingURL=682.4461c740.chunk.js.map