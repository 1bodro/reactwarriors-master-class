(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){return e?void 0:"Field is required"},r=function(e){return function(t){return t&&t.length>e?"Max length ".concat(e," symbol"):void 0}}},13:function(e,t,n){"use strict";var a=n(139),r=a.create({headers:{"API-KEY":"00d2fa15-e31d-4426-b266-27f25c4e7bcb"},baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0});t.a=r},132:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(49),r=n(5),o=n(48),c=function(e){return{type:"SEND-MESSAGE",newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n={idUser:111,idMsg:14,text:t.newMessageText};return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},135:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(16),c=n(49),i=n(5),s=n(13),l={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return s.a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},followUser:function(e){return s.a.post("follow/".concat(e)).then(function(e){return e.data})},unFollowUser:function(e){return s.a.delete("follow/".concat(e)).then(function(e){return e.data})}},u=n(61);n.d(t,"d",function(){return h}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return g});var p={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isLoading:!1,followingInProgress:[]},f=function(e){return{type:"FOLLOW",userId:e}},m=function(e){return{type:"UNFOLLOW",userId:e}},d=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},_=function(e){return{type:"TOGGLE-IS-LOADING",isLoading:e}},h=function(e,t){return{type:"TOGGLE-IS-FOLLOWING",isFollowing:e,userId:t}},b=function(e,t){return function(){var n=Object(o.a)(r.a.mark(function n(a){var o;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(_(!0)),a(d(e)),n.next=4,l.getUsers(e,t);case 4:o=n.sent,a({type:"SET-USERS",users:o.items}),a({type:"SET-TOTAL-USERS_-COUNT",totalUsersCount:o.totalCount}),a(_(!1));case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var n=Object(o.a)(r.a.mark(function n(a){var o,c;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(h(!0,e)),o=t?l.followUser:l.unFollowUser,c=t?f:m,n.next=5,o(e);case 5:0===n.sent.resultCode&&a(c(e)),a(h(!1,e));case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USERS":return Object(i.a)({},e,{users:t.users});case"LOAD-USERS":return Object(i.a)({},e);case"SET-CURRENT-PAGE":return Object(i.a)({},e,{currentPage:t.currentPage});case"SET-TOTAL-USERS_-COUNT":return Object(i.a)({},e,{totalUsersCount:t.totalUsersCount});case"TOGGLE-IS-LOADING":return Object(i.a)({},e,{isLoading:t.isLoading});case"TOGGLE-IS-FOLLOWING":return Object(i.a)({},e,{followingInProgress:t.isFollowing?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});case"FOLLOW":return Object(i.a)({},e,{users:Object(u.c)(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(i.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(i.a)({},e,{followed:!1}):e})});default:return e}}},14:function(e,t,n){e.exports={container:"Sidebar_container__AFz1K",navLink:"Sidebar_navLink__2EuT4",active:"Sidebar_active__3uByd"}},140:function(e,t,n){e.exports=n.p+"static/media/loading.6fd2c60b.svg"},141:function(e,t,n){e.exports={container:"Preloader_container__1lhVi"}},142:function(e,t,n){e.exports=n.p+"static/media/beach.d5ec859f.jpg"},143:function(e,t,n){e.exports={contact:"Contacts_contact__YdAX4"}},144:function(e,t,n){e.exports={container:"Profile_container__X_iAe"}},145:function(e,t,n){e.exports=n.p+"static/media/logo.3b2b1eec.jpg"},172:function(e,t,n){e.exports=n(299)},18:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(16),c=n(49),i=n(5),s=n(48),l=n(13),u={getProfile:function(e){return l.a.get("profile/".concat(e))},getStatus:function(e){return l.a.get("profile/status/".concat(e)).then(function(e){return e.data})},updateStatus:function(e){return l.a.put("profile/status",{status:e}).then(function(e){return e.data})},savePhoto:function(e){var t=new FormData;return t.append("img",e),l.a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data})},saveProfile:function(e){return l.a.put("profile",e).then(function(e){return e.data})}},p=n(58);n.d(t,"a",function(){return f}),n.d(t,"h",function(){return _}),n.d(t,"c",function(){return h}),n.d(t,"e",function(){return b}),n.d(t,"d",function(){return g}),n.d(t,"f",function(){return E}),n.d(t,"g",function(){return v});var f=function(e){return{type:"ADD-POST",newPostText:e}},m=function(e){return{type:"TOGGLE-IS-LOADING-PROFILE",isLoading:e}},d=function(e){return{type:"GET-USER-STATUS",status:e}},_=function(e){return{type:"SET-AUTH-USER-PROFILE",authUser:e}},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(a){n&&a(m(!0)),u.getProfile(e).then(function(e){a({type:"SET-USER-PROFILE",profile:e.data}),n&&a(m(!1)),t&&a(_(e.data))}).catch(function(e){return console.log(e)})}},b=function(e){return function(t){u.getStatus(e).then(function(e){t(d(e))})}},g=function(e){return function(t){u.updateStatus(e).then(function(n){0===n.resultCode&&t(d(e))})}},E=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.savePhoto(e);case 2:0===(a=t.sent).resultCode&&n({type:"SAVE-PHOTO-SUCCESS",photos:a.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n,a){var o,c,s,l,f;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return f=function(e){return e?e[0].toLowerCase()+e.slice(1):e},o=a().auth.id,t.next=4,u.saveProfile(e);case 4:if(0!==(c=t.sent).resultCode){t.next=10;break}return n(h(o,!0)),t.abrupt("return",Promise.resolve(!0));case 10:throw s=c.messages,l={contacts:{}},s.forEach(function(e){var t=e.split("("),n=t[0].trim(),a=t[1].replace(")","").split("->");1===a.length?l[f(a[0])]=n:l.contacts[f(a[1])]=n}),new p.a(Object(i.a)({},l));case 14:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:123,text:t.newPostText,likesCount:0};return Object(i.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[n])});case"SET-USER-PROFILE":return Object(i.a)({},e,{profile:t.profile});case"TOGGLE-IS-LOADING-PROFILE":return Object(i.a)({},e,{isLoading:t.isLoading});case"GET-USER-STATUS":return Object(i.a)({},e,{status:t.status});case"SAVE-PHOTO-SUCCESS":return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:t.photos})});case"SET-AUTH-USER-PROFILE":return Object(i.a)({},e,{authUser:t.authUser});default:return e}}},20:function(e,t,n){e.exports={banner:"ProfileInfo_banner__2_g-8",info:"ProfileInfo_info__2KGgj",info__account:"ProfileInfo_info__account__1-B3w",info__account__name:"ProfileInfo_info__account__name__1Y7Hb",info__status:"ProfileInfo_info__status__1GwAH",info__description:"ProfileInfo_info__description__3JNAU",info__footer:"ProfileInfo_info__footer__39mCU",info__editButton:"ProfileInfo_info__editButton__2pCNK",info__contacts:"ProfileInfo_info__contacts__2a0pg",editProfilePopup:"ProfileInfo_editProfilePopup__2dDYe",open:"ProfileInfo_open__3WQ-R"}},24:function(e,t,n){e.exports={photo:"Avatar_photo__25RZB",sm:"Avatar_sm__2lBbz",md:"Avatar_md__1RHww",lg:"Avatar_lg__3c-mV",changePhoto:"Avatar_changePhoto__1neBq",changePhotoBlock:"Avatar_changePhotoBlock__3vMkL",changePhotoButton:"Avatar_changePhotoButton__2sb1m",pulsing:"Avatar_pulsing__2s8jM",hideInput:"Avatar_hideInput__3iOmS"}},298:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(72),c=n.n(o),i=n(11),s=n(27),l=n(28),u=n(30),p=n(29),f=n(31),m=n(34),d=n(14),_=n.n(d),h=function(){return r.a.createElement("nav",{className:_.a.container},r.a.createElement(i.b,{to:"/profile",className:_.a.navLink,activeClassName:_.a.active},"Profile"),r.a.createElement(i.b,{to:"/messages/",className:_.a.navLink,activeClassName:_.a.active},"Messages"),r.a.createElement(i.b,{exact:!0,to:"/news",className:_.a.navLink,activeClassName:_.a.active},"News"),r.a.createElement(i.b,{exact:!0,to:"/music",className:_.a.navLink,activeClassName:_.a.active},"Music"),r.a.createElement(i.b,{exact:!0,to:"/users",className:_.a.navLink,activeClassName:_.a.active},"Find users"),r.a.createElement(i.b,{exact:!0,to:"/settings",className:_.a.navLink,activeClassName:_.a.active},"Settings"))},b=n(51),g=n(75),E=n.n(g),v=function(e){var t=e.message,n=e.likesCount,a=e.photo;return r.a.createElement("div",{className:E.a.container},r.a.createElement(b.a,{size:"sm",src:a}),r.a.createElement("div",{className:E.a.text},t||"server didn't find message"),r.a.createElement("span",{className:E.a.like},"Like: ",n))},O=n(62),P=n.n(O),S=n(94),w=n(133),y=n(100),N=n(39),j=Object(y.a)(30),x=r.a.memo(function(e){var t=e.sendPost,n=e.userPhoto,a=e.posts.map(function(e){return r.a.createElement(v,{key:e.id,message:e.text,likesCount:e.likesCount,photo:n})});return r.a.createElement("div",{className:P.a.container},r.a.createElement(k,{onSubmit:function(e){t(e.newPostText)}}),r.a.createElement("div",{className:"".concat(P.a.storage," customScrollbar")},a))}),k=Object(w.a)({form:"profileAddPostsForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:P.a.write},r.a.createElement(S.a,{component:N.b,name:"newPostText",className:"textarea",placeholder:"Write posts here",validate:[j]}),r.a.createElement("button",{className:P.a.btnSend},"send"))}),C=n(18),U=n(10),A=Object(U.b)(function(e){return{userPhoto:e.profilePage.authUser.photos.large,posts:e.profilePage.posts}},function(e){return{sendPost:function(t){e(Object(C.a)(t))}}})(x),L=n(9),I=n.n(L),T=n(16),M=n(57),F=n(20),D=n.n(F),z=n(43),G=n(77),R=n.n(G),B=function(e){var t=e.status,n=e.getUpdateUserStatus,o=e.isOwner,c=Object(a.useState)(!1),i=Object(M.a)(c,2),s=i[0],l=i[1],u=Object(a.useState)(t),p=Object(M.a)(u,2),f=p[0],m=p[1];Object(a.useEffect)(function(){m(t)},[t]);return r.a.createElement(r.a.Fragment,null,s&&o?r.a.createElement("div",{className:R.a.changeStatus},r.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},onBlur:function(){l(!1),n(f)},value:f,autoFocus:!0})):r.a.createElement("span",{className:"".concat(R.a.staticStatus).concat(o?" ".concat(R.a.hoverEffect):""),onClick:function(){l(!0)}},t||"Have a nice day"))},q=n(38),H=n(7),J=n.n(H),V=function(e){var t=e.profile;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:J.a.aboutMe},r.a.createElement("span",{className:J.a.profile__title},"About me:"),r.a.createElement("p",{className:J.a.profile__desc},t.aboutMe?t.aboutMe:null)),r.a.createElement("div",{className:J.a.aboutMe},r.a.createElement("span",{className:J.a.profile__title},"My profile skills:",r.a.createElement("span",{className:"".concat(J.a.profile__label," ").concat(t.lookingForAJob?J.a.profile__label__green:J.a.profile__label__red)},t.lookingForAJob?"":"no ","looking for a job")),r.a.createElement("p",{className:J.a.profile__desc},t.lookingForAJobDescription?t.lookingForAJobDescription:null)))},X=Object(w.a)({form:"profileForm"})(function(e){var t=e.initialValues,n=e.handleSubmit,a=e.onClosePopup,o=Object(q.a)(e,["initialValues","handleSubmit","onClosePopup"]);return r.a.createElement("form",{className:J.a.profile__popup,onSubmit:n},r.a.createElement("div",{className:J.a.profile__popup__part},r.a.createElement("div",{className:J.a.profile__popup__field},r.a.createElement("span",{className:J.a.profile__popup__label},"full name:"),r.a.createElement(S.a,{type:"text",placeholder:"Full name",name:"fullName",component:N.a})),r.a.createElement("div",{className:J.a.profile__popup__field},r.a.createElement("span",{className:J.a.profile__popup__label},"About me:")," ",r.a.createElement(S.a,{component:N.b,name:"aboutMe",className:"textarea customScrollbar",placeholder:"About me"})),r.a.createElement("div",{className:"".concat(J.a.profile__popup__field," ").concat(J.a.checkbox)},r.a.createElement("span",{className:J.a.profile__popup__label},"looking for a job:")," ",r.a.createElement(S.a,{type:"checkbox",component:"input",name:"lookingForAJob"})),r.a.createElement("div",{className:J.a.profile__popup__field},r.a.createElement("span",{className:J.a.profile__popup__label},"My profile skills:"),r.a.createElement(S.a,{component:N.b,name:"lookingForAJobDescription",className:"textarea customScrollbar",placeholder:"My profile skills"}))),r.a.createElement("div",{className:"".concat(J.a.profile__popup__part," ").concat(J.a.contacts)},r.a.createElement("span",{className:J.a.profile__popup__label},"Contacts:"),Object.keys(t.contacts).map(function(e,n){return r.a.createElement("div",{key:n,className:J.a.profile__popup__field},r.a.createElement(S.a,{type:"text",placeholder:e,component:N.a,name:"contacts.".concat(e),value:t.contacts[e]}))})),r.a.createElement("button",{className:J.a.profile__popup__buttonSend},"save"),o.error&&r.a.createElement("div",{className:J.a.summaryError},o.error),r.a.createElement("span",{className:J.a.profile__popup__buttonClose,onClick:a}))}),K=n(142),W=n.n(K),Z=n(143),Q=n.n(Z),Y=function(e){var t=e.contactName,n=e.contactValue;return n&&r.a.createElement("a",{className:Q.a.contact,href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{viewBox:"0 0 24 24",xmlnsXlink:"http://www.w3.org/2000/xlink"},r.a.createElement("use",{xlinkHref:"#".concat(t),x:0,y:0})),r.a.createElement("span",null,t))},$=function(e){var t=e.contacts;return Object.keys(t).some(function(e){return null!==t[e]&&""!==t[e]})?Object.keys(t).map(function(e,n){return r.a.createElement(Y,{key:n,contactName:e,contactValue:t[e]})}):r.a.createElement("b",null,"not added")},ee=function(e){var t=e.profile,n=e.status,o=e.isLoading,c=e.getUpdateUserStatus,i=e.isOwner,s=e.savePhoto,l=e.saveProfile,u=Object(a.useState)(!1),p=Object(M.a)(u,2),f=p[0],m=p[1],d=function(){var e=Object(T.a)(I.a.mark(function e(t){return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:e.sent&&m(!1);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(z.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:D.a.banner},r.a.createElement("div",{className:"content__img"},r.a.createElement("img",{src:W.a,alt:"wallpaper"}))),r.a.createElement("div",{className:D.a.info},r.a.createElement("div",{className:D.a.info__status},r.a.createElement(B,{getUpdateUserStatus:c,status:n,isOwner:i})),r.a.createElement("div",{className:D.a.info__account},i?r.a.createElement(b.b,{size:"lg",src:t.photos?t.photos.large:null,id:t.userId,savePhoto:s}):r.a.createElement(b.a,{size:"lg",src:t.photos?t.photos.large:null,id:t.userId}),r.a.createElement("span",{className:D.a.info__account__name},t.fullName)),r.a.createElement("div",{className:D.a.info__description},r.a.createElement(V,{profile:t})),r.a.createElement("div",{className:D.a.info__footer},i&&r.a.createElement("button",{className:D.a.info__editButton,onClick:function(){return m(!0)}},"edit"),r.a.createElement("div",{className:D.a.info__contacts},r.a.createElement("span",null,"Contacts:"),r.a.createElement($,{contacts:t.contacts})))),r.a.createElement("div",{className:"".concat(D.a.editProfilePopup," ").concat(f?D.a.open:"")},f&&r.a.createElement(X,{initialValues:t,onSubmit:d,onClosePopup:function(){return m(!1)}}))))},te=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getProfile,n=e.getUserStatus,a=e.userId;t(a,e.isOwner,!0),n(a)}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.getProfile,r=n.getUserStatus,o=n.userId,c=n.isOwner;e.userId!==o&&(a(o,c,!0),r(o))}},{key:"render",value:function(){var e=this.props,t=e.profile,n=e.status,a=e.isLoading,o=e.getUpdateUserStatus,c=e.isOwner,i=e.savePhoto,s=e.saveProfile;return r.a.createElement(ee,{profile:t,status:n,isLoading:a,getUpdateUserStatus:o,isOwner:c,savePhoto:i,saveProfile:s})}}]),t}(r.a.PureComponent),ne=Object(U.b)(function(e){return{profile:e.profilePage.profile,isLoading:e.profilePage.isLoading,authUserId:e.auth.id,isAuth:e.auth.isAuth,status:e.profilePage.status}},{getProfile:C.c,getUserStatus:C.e,getUpdateUserStatus:C.d,savePhoto:C.f,saveProfile:C.g})(te),ae=n(144),re=n.n(ae),oe=n(8),ce=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:0,height:0,visibility:"hidden"}},r.a.createElement("symbol",{id:"facebook",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})),r.a.createElement("symbol",{id:"github",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})),r.a.createElement("symbol",{id:"instagram",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})),r.a.createElement("symbol",{id:"website",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"})),r.a.createElement("symbol",{id:"mainLink",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.834 9.686l-4.166.575 3.032 2.914-.74 4.139 3.708-1.982 3.708 1.983-.74-4.139 3.032-2.915-4.166-.575-1.834-3.784-1.834 3.784z"})),r.a.createElement("symbol",{id:"twitter",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})),r.a.createElement("symbol",{id:"vk",viewBox:"0 0 24 24"},r.a.createElement("path",{className:"st0",d:"M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"})),r.a.createElement("symbol",{id:"youtube",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})))},ie=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,n=e.authUserId,a=t.params.userId||n,o=!(t.params.userId||!n);return a?r.a.createElement("div",{className:re.a.container},r.a.createElement(ce,null),r.a.createElement(ne,{userId:a,isOwner:o}),o?r.a.createElement(A,null):null):r.a.createElement(m.a,{to:"/login"})}}]),t}(r.a.PureComponent),se=Object(oe.d)(Object(U.b)(function(e){return{authUserId:e.auth.id,profile:e.profilePage}},null),m.f)(ie),le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Music"),r.a.createElement("span",null,"Music"))},ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"News"),r.a.createElement("span",null,"News"))},pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Settings"),r.a.createElement("span",null,"Settings"))},fe=n(50),me=n.n(fe),de=n(145),_e=n.n(de),he=function(e){var t=e.isAuth,n=e.login,a=e.setLogoutUser;return r.a.createElement("header",{className:me.a.container},r.a.createElement("div",{className:me.a.logo},r.a.createElement("img",{src:_e.a,alt:"logo"})),t?r.a.createElement("div",null,r.a.createElement(i.b,{to:"/profile",className:me.a.name},n),r.a.createElement("button",{className:me.a.btn,onClick:a},"logout")):r.a.createElement(i.b,{to:"/login",className:me.a.btn},"Login"))},be=n(44),ge=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(he,this.props)}}]),t}(r.a.Component),Ee=Object(U.b)(function(e){return{login:e.auth.login,isLoading:e.auth.isLoading,isAuth:e.auth.isAuth}},{setLogoutUser:be.d})(ge),ve=n(5),Oe={isLoading:!1,initialized:!1},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED-SUCCESS":return Object(ve.a)({},e,{initialized:!0});default:return e}},Se=function(e){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(z.a,null)},r.a.createElement(e,null))},we=n(61),ye=r.a.lazy(function(){return n.e(4).then(n.bind(null,311))}),Ne=r.a.lazy(function(){return n.e(3).then(n.bind(null,310))}),je=r.a.lazy(function(){return n.e(5).then(n.bind(null,312))}),xe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),Object(we.a)()}},{key:"componentWillUnmount",value:function(){Object(we.b)()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ee,null),r.a.createElement(h,null),r.a.createElement("div",{className:"content"},r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(se,null)}}),r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(se,null)}}),r.a.createElement(m.b,{path:"/messages",render:function(){return Se(Ne)}}),r.a.createElement(m.b,{path:"/users",render:function(){return Se(ye)}}),r.a.createElement(m.b,{path:"/music",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(m.b,{path:"/news",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(m.b,{path:"/settings",render:function(){return r.a.createElement(pe,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return Se(je)}}),r.a.createElement(m.b,{path:"*",render:function(){return r.a.createElement("div",null,"NOT FOUND")}}))):r.a.createElement(z.a,null)}}]),t}(r.a.Component),ke=Object(oe.d)(m.f,Object(U.b)(function(e){return{initialized:e.app.initialized,profile:e.profilePage}},{initializeApp:function(){return function(e){var t=e(Object(be.b)());Promise.all([t]).then(function(){var t;e({type:"INITIALIZED-SUCCESS",initialized:t})})}}}))(xe),Ce=(n(297),n(298),n(132)),Ue={},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;arguments.length>1&&arguments[1];return e},Le=n(48),Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le.c;arguments.length>1&&arguments[1];return e},Te=n(135),Me=n(146),Fe=n(134),De=Object(oe.c)({profilePage:C.b,dialogsPage:Ce.a,sidebar:Ae,user:Ie,findUsersPage:Te.a,auth:be.a,form:Fe.a,app:Pe}),ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.d,Ge=Object(oe.e)(De,ze(Object(oe.a)(Me.a)));window.store=Ge;var Re=Ge;c.a.render(r.a.createElement(i.a,{basemname:"/reactwarriors-master-class"},r.a.createElement(U.a,{store:Re},r.a.createElement(ke,null))),document.getElementById("root"))},39:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return l});var a=n(38),r=n(0),o=n.n(r),c=n(63),i=n.n(c),s=(n(94),function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]);return o.a.createElement("div",{className:"".concat(i.a.formControl," ").concat(n.error&&n.touched&&i.a.error)},o.a.createElement("textarea",Object.assign({},r,t)),o.a.createElement("span",null,n.error))}),l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]);return o.a.createElement("div",{className:"".concat(i.a.formControl," ").concat(n.error&&n.touched&&i.a.error)},o.a.createElement("input",Object.assign({},r,t)),o.a.createElement("span",null,n.error))}},43:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),r=n.n(a),o=n(140),c=n.n(o),i=n(141),s=n.n(i),l=function(){return r.a.createElement("div",{className:s.a.container},r.a.createElement("img",{src:c.a,alt:"Preload"}))}},44:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(16),c=n(5),i=n(13),s=function(){return i.a.get("auth/me").then(function(e){return e.data})},l=function(e){return i.a.post("/auth/login",Object(c.a)({rememberMe:!1,captcha:null},e)).then(function(e){return e.data})},u=function(){return i.a.delete("/auth/login").then(function(e){return e.data})},p=n(35),f=n(18),m=function(){return i.a.get("security/get-captcha-url").then(function(e){return e.data})};n.d(t,"b",function(){return h}),n.d(t,"c",function(){return b}),n.d(t,"d",function(){return g});var d={id:null,email:null,login:null,isLoading:!1,isAuth:!1,captchaUrl:null},_=function(e){return{type:"SET-USER-DATA",payload:e}},h=function(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:0===(n=e.sent).resultCode&&t(_(Object(c.a)({},n.data,{isAuth:!0})));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:0===(a=t.sent).resultCode?n(h()):10===a.resultCode?n(E()):n(Object(p.a)("loginUser",{_error:"".concat(a.messages||"email or password is wrong")}));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e);case 2:a=t.sent,o={id:null,email:null,login:null,isAuth:!1},0===a.resultCode&&(n(_(o)),n(Object(f.h)(null)));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var e=Object(o.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:n=e.sent,t({type:"GET-CAPTCHA-URL-SUCCESS",payload:{captchaUrl:n.url}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":case"GET-CAPTCHA-URL-SUCCESS":return Object(c.a)({},e,t.payload);default:return e}}},48:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o});var a={chats:[{id:1,name:"Oleg",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQFcpYKqisnRqx3SsfJjs7ME3XspbX3u81KprS2gvGUN0k9ipu&usqp=CAU"},{id:5,name:"Mariusz",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIiP5QEbMyxe3ECk50ttuLQtxZlcEFC-IylJ1nM3XkbE_kKKjV&usqp=CAU"},{id:7,name:"Nastya",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutulh2jefGmRfWlymj5ud4X3A5jP8n_PEgwQkg59kATxDzqiX&s"},{id:14,name:"Andrew",photo:"https://i.pinimg.com/236x/a8/63/8a/a8638ab3fe610ee12e14793716bf4cdf--adventure-time.jpg"},{id:9,name:"Kostya",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXqZcCaOGqS11R987XRUigBILp6F6jbM7_XtH6cZBa7Cwv84&s"},{id:16,name:"Carl",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaE17LvgaiY6b6iOADw_VPun2nsnZb2olbi-FUmFc9iCAFMLXh&s"},{id:17,name:"Igor",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6x7CnL6sr0E5H0g4djyb4PqmLlcgQVToF2-u_ewiszUtfxvt&s"}],messages:[{idUser:12,idMsg:13015,text:"Hello, Kate, are you coming to my party today?"},{idUser:111,idMsg:15,text:"Hello, on what occasion is the party?"},{idUser:12,idMsg:135,text:"On the occasion of my arrival from Spain."},{idUser:111,idMsg:14,text:"Oh, my God, I completely forgot, sorry, of course, I\u2019ll be there!"},{idUser:12,idMsg:1305,text:"And who else is invited"},{idUser:111,idMsg:175,text:"Lily, Marry, Jenny \u2013 you know them, and a couple of good-looking guys!"},{idUser:12,idMsg:1335,text:"\u041eh, it \u2018ll be fun! What shall I bring with me?"},{idUser:111,idMsg:12345,text:"Please, take a few bottles of Cola and some snacks: crisps, for example."}]},r={posts:[{id:100,text:"Hello, Kate, are you coming to my party today?",likesCount:11},{id:101,text:"Hello, on what occasion is the party?",likesCount:3},{id:102,text:"On the occasion of my arrival from Spain.",likesCount:7},{id:103,text:"Oh, my God, I completely forgot, sorry, of course, I\u2019ll be there!",likesCount:9},{id:104,text:"And who else is invited",likesCount:18},{id:105,text:"Lily, Marry, Jenny \u2013 you know them, and a couple of good-looking guys!",likesCount:1},{id:106,text:"\u041eh, it \u2018ll be fun! What shall I bring with me?",likesCount:7},{id:107,text:"Please, take a few bottles of Cola and some snacks: crisps, for example.",likesCount:4}],profile:null,isLoading:!0,status:"",authUser:{photos:{large:null}}},o={id:111,name:"Andrew",desc:"Description",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz5DhqhLRNZLqOkCKuyJg5rZ_vCTrFQcUliE-T4TuhP7rAkBWD&usqp=CAU"}},50:function(e,t,n){e.exports={container:"Header_container__2MEIn",logo:"Header_logo__37oeD",btn:"Header_btn__3QMw6",name:"Header_name__1fLLC"}},51:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return p});var a=n(38),r=n(0),o=n.n(r),c=n(24),i=n.n(c),s=n(11),l=function(e){var t=e.src;return o.a.createElement("div",{className:"content__img"},o.a.createElement("img",{src:"".concat(t||"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAJAKZq1P0A1fdBSNnqfQG-Hhu6X86SBL3gYO-497l-DTQjZYq&usqp=CAU"),alt:"ava"}))},u=function(e){var t=e.size,n=e.src,a=e.id,r=void 0===a?"":a;return o.a.createElement(s.b,{to:"/profile/".concat(r),className:"".concat(i.a.photo," ").concat(i.a[t])},o.a.createElement(l,{src:n}))},p=function(e){var t=e.savePhoto,n=e.size,r=e.src;e.id,Object(a.a)(e,["savePhoto","size","src","id"]);return o.a.createElement("label",{className:i.a.changePhoto,htmlFor:"loadingImg"},o.a.createElement("div",{className:"".concat(i.a.photo," ").concat(i.a[n])},o.a.createElement(l,{src:r})),o.a.createElement("div",{className:i.a.changePhotoBlock},o.a.createElement("input",{className:i.a.hideInput,id:"loadingImg",type:"file",onChange:function(e){e.target.files&&t(e.target.files[0])}})),o.a.createElement("span",{className:i.a.changePhotoButton},"update"))}},61:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var a=n(5),r=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(a.a)({},e,r):e})},o=function(){window.addEventListener("unhandledrejection",function(e){console.warn("\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u041d\u0435\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 Promise. \u041f\u043e\u0437\u043e\u0440 \u0432\u0430\u043c! \u041f\u0440\u0438\u0447\u0438\u043d\u0430: "+e.reason)})},c=function(){window.removeEventListener("unhandledrejection",function(e){console.warn("\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u041d\u0435\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 Promise. \u041f\u043e\u0437\u043e\u0440 \u0432\u0430\u043c! \u041f\u0440\u0438\u0447\u0438\u043d\u0430: "+e.reason)})}},62:function(e,t,n){e.exports={container:"Posts_container__3MVK5",storage:"Posts_storage__2eEeW",write:"Posts_write__trrFq",btnSend:"Posts_btnSend__2Vygo"}},63:function(e,t,n){e.exports={formControl:"FormsControl_formControl__1N0fI",error:"FormsControl_error__19xYU"}},7:function(e,t,n){e.exports={aboutMe:"ProfileData_aboutMe__3Zby3",profile__label:"ProfileData_profile__label__3izy5",profile__label__red:"ProfileData_profile__label__red__1xf1L",profile__label__green:"ProfileData_profile__label__green__3dwnn",profile__title:"ProfileData_profile__title__JbyVZ",profile__popup:"ProfileData_profile__popup__3HciD",profile__popup__part:"ProfileData_profile__popup__part__xAcMJ",contacts:"ProfileData_contacts__3Ou3m",profile__popup__field:"ProfileData_profile__popup__field__1Y_zQ",checkbox:"ProfileData_checkbox__1hg8P",profile__popup__label:"ProfileData_profile__popup__label__3NeqG",profile__popup__buttonSend:"ProfileData_profile__popup__buttonSend__2osUD",profile__popup__buttonClose:"ProfileData_profile__popup__buttonClose__1dbap",summaryError:"ProfileData_summaryError__Jz74N"}},75:function(e,t,n){e.exports={container:"Post_container___0Jwk",text:"Post_text__31E6-",like:"Post_like__2795U"}},77:function(e,t,n){e.exports={changeStatus:"ProfileStatus_changeStatus__1jakO",staticStatus:"ProfileStatus_staticStatus__3j094",hoverEffect:"ProfileStatus_hoverEffect__2muJR"}}},[[172,1,2]]]);
//# sourceMappingURL=main.df8e1ad4.chunk.js.map