(this.webpackJsonpfacebook_clone=this.webpackJsonpfacebook_clone||[]).push([[0],{72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},79:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c(2),n=c.n(a),i=c(20),r=c.n(i),o=(c(72),c(14)),j=(c(73),c(74),c(28)),d=j.a.initializeApp({apiKey:"AIzaSyB2IvnXL4tXDHUCit3nvA3KXx8W8fcouUU",authDomain:"facebook-clone-cfca6.firebaseapp.com",databaseURL:"https://facebook-clone-cfca6.firebaseio.com",projectId:"facebook-clone-cfca6",storageBucket:"facebook-clone-cfca6.appspot.com",messagingSenderId:"902371412048",appId:"1:902371412048:web:eb3b6017738f61928d6955",measurementId:"G-MVN19X98TZ"}),l=d.firestore(),b=d.auth(),h=new j.a.auth.GoogleAuthProvider,f=l,m=c(109),u=(c(79),c(41)),p=c.n(u),O=c(42),x=c.n(O),v=c(43),g=c.n(v),_=Object(a.createContext)(),N=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(s.jsx)(_.Provider,{value:Object(a.useReducer)(t,c),children:n})},A=function(){return Object(a.useContext)(_)};var P=function(){var e=A(),t=Object(o.a)(e,2),c=t[0].User,n=(t[1],Object(a.useState)("")),i=Object(o.a)(n,2),r=i[0],d=i[1],l=Object(a.useState)(""),b=Object(o.a)(l,2),h=b[0],u=b[1];return Object(s.jsxs)("div",{className:"messagesender",children:[Object(s.jsxs)("div",{className:"messagesender__top",children:[Object(s.jsx)(m.a,{src:c.photoURL}),Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{className:"messagesender__input",value:r,onChange:function(e){return d(e.target.value)},placeholder:"What's on your mind ".concat(c.displayName)}),Object(s.jsx)("input",{placeholder:"image URL (optional)",value:h,onChange:function(e){return u(e.target.value)}}),Object(s.jsx)("button",{onClick:function(e){e.preventDefault(),f.collection("tan").add({message:r,timestamps:j.a.firestore.FieldValue.serverTimestamp(),profilepic:c.photoURL,image:h,username:c.displayName}),u(""),d("")},type:"submit",children:"hidden submit"})]})]}),Object(s.jsxs)("div",{className:"messagesender__bottom",children:[Object(s.jsxs)("div",{className:"messagesender__option",children:[Object(s.jsx)(p.a,{style:{color:"red"}}),Object(s.jsx)("h4",{children:"Live Video"})]}),Object(s.jsxs)("div",{className:"messagesender__option",children:[Object(s.jsx)(x.a,{style:{color:"green"}}),Object(s.jsx)("h4",{children:"Photo/Video"})]}),Object(s.jsxs)("div",{className:"messagesender__option",children:[Object(s.jsx)(g.a,{style:{color:"orange"}}),Object(s.jsx)("h4",{children:"Feeling/Activity"})]})]})]})},F=(c(85),c(44)),X=c.n(F),q=c(45),z=c.n(q),L=c(46),w=c.n(L),I=c(22),U=c.n(I),V=c(47),C=c.n(V);var S=function(e){var t=e.profilepic,c=e.image,a=e.username,n=e.message,i=e.timestamps;return Object(s.jsxs)("div",{className:"post",children:[Object(s.jsxs)("div",{className:"post__top",children:[Object(s.jsx)(m.a,{src:t,className:"post__avatar"}),Object(s.jsxs)("div",{className:"post__topinfo",children:[Object(s.jsx)("h3",{children:a}),Object(s.jsx)("p",{children:new Date(null===i||void 0===i?void 0:i.toDate()).toUTCString()})]})]}),Object(s.jsx)("div",{className:"post__bottom",children:Object(s.jsx)("p",{children:n})}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"post__image",children:c?Object(s.jsx)("img",{src:c}):null}),Object(s.jsxs)("div",{className:"post__options",children:[Object(s.jsxs)("div",{className:"post__option",children:[Object(s.jsx)(X.a,{}),Object(s.jsx)("p",{children:"Like"})]}),Object(s.jsxs)("div",{className:"post__option",children:[Object(s.jsx)(z.a,{}),Object(s.jsx)("p",{children:"Comment"})]}),Object(s.jsxs)("div",{className:"post__option",children:[Object(s.jsx)(w.a,{}),Object(s.jsx)("p",{children:"Share"})]}),Object(s.jsxs)("div",{className:"post__option",children:[Object(s.jsx)(C.a,{}),Object(s.jsx)(U.a,{})]})]})]})};c(86);var E=function(e){var t=e.image,c=e.profilescr,a=e.title;return Object(s.jsxs)("div",{className:"story",style:{backgroundImage:"url(".concat(t,")"),opacity:"0.8"},children:[Object(s.jsx)(m.a,{className:"avatar",src:c}),Object(s.jsx)("h4",{children:a})]})};c(87);var y=function(){return Object(s.jsxs)("div",{className:"storyreels",children:[Object(s.jsx)(E,{image:"https://source.unsplash.com/user/erondu",title:"Tanmaygoyal",profilescr:"https://instagram.fudr1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/30593277_2061077250815941_5041742047258607616_n.jpg?_nc_ht=instagram.fudr1-1.fna.fbcdn.net&_nc_ohc=v4qhUcWl4fYAX8IHDC3&tp=1&oh=96ae256790f9af5ea9f2748469bc22e3&oe=5FE9C35E"}),Object(s.jsx)(E,{image:"https://source.unsplash.com/random",title:"RaghavSharma",profilescr:"https://instagram.fudr1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/118146733_318998959301337_4396177217362773999_n.jpg?_nc_ht=instagram.fudr1-1.fna.fbcdn.net&_nc_ohc=9CjQM7h7hXkAX8tAf1h&tp=1&oh=271e8fa3cd3badfa848728dd56e080dc&oe=5FEA016A"}),Object(s.jsx)(E,{image:"https://source.unsplash.com/collection/190727/1600x900",title:"VivekSharma",profilescr:"https://instagram.fudr1-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.392.720.720a/s150x150/88400680_211404156728529_5776612255982630902_n.jpg?_nc_ht=instagram.fudr1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=6i_bSzWz5s4AX-vATx9&tp=1&oh=45fd6252d426de5cca46cdcc6ee2b04d&oe=5FC3FCF7"}),Object(s.jsx)(E,{image:"https://source.unsplash.com/user/erondu/daily",title:"AnuragGupta",profilescr:"https://instagram.fudr1-1.fna.fbcdn.net/v/t51.2885-15/e15/c0.139.720.720a/s150x150/116884804_106879587710413_4446557626400588546_n.jpg?_nc_ht=instagram.fudr1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=iNbJZkZxn14AX-d1Rhi&tp=1&oh=9bddc67664f7acdf79cf5e3496021e25&oe=5FC3C453"}),Object(s.jsx)(E,{image:"https://source.unsplash.com/WLUHO9A_xik/1600x900",title:"VivekGoyal",profilescr:"https://instagram.fudr1-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.392.720.720a/s150x150/88400680_211404156728529_5776612255982630902_n.jpg?_nc_ht=instagram.fudr1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=6i_bSzWz5s4AX-vATx9&tp=1&oh=45fd6252d426de5cca46cdcc6ee2b04d&oe=5FC3FCF7"})]})};var B=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){f.collection("tan").orderBy("timestamps","desc").onSnapshot((function(e){n(e.docs.map((function(e){return e.data()})))}))}),[]),console.log(c),Object(s.jsxs)("div",{className:"feed",children:[Object(s.jsx)(y,{}),Object(s.jsx)(P,{}),c.map((function(e){return Object(s.jsx)(S,{profilepic:e.profilepic,message:e.message,username:e.username,image:e.image,timestamps:e.timestamps})}))]})},T=(c(88),c(48)),R=c.n(T),k=c(49),M=c.n(k),W=c(50),G=c.n(W),H=c(51),Q=c.n(H),D=c(52),Z=c.n(D),J=c(53),K=c.n(J),Y=c(107),$=c(54),ee=c.n($),te=c(55),ce=c.n(te),se=c(56),ae=c.n(se);var ne=function(){var e=A(),t=Object(o.a)(e,2),c=t[0].User;return t[1],Object(s.jsxs)("div",{className:"header",children:[Object(s.jsxs)("div",{className:"header__left",children:[Object(s.jsx)("img",{alt:"image not found",src:"https://www.flaticon.com/svg/static/icons/svg/174/174848.svg"}),Object(s.jsxs)("div",{className:"header__input",children:[Object(s.jsx)(R.a,{}),Object(s.jsx)("input",{type:"text",placeholder:"Search facebook"})]})]}),Object(s.jsxs)("div",{className:"header__middle",children:[Object(s.jsx)("div",{className:"header__option header__option__active",children:Object(s.jsx)(M.a,{fontSize:"large"})}),Object(s.jsx)("div",{className:"header__option",children:Object(s.jsx)(G.a,{fontSize:"large"})}),Object(s.jsx)("div",{className:"header__option",children:Object(s.jsx)(Q.a,{fontSize:"large"})}),Object(s.jsx)("div",{className:"header__option",children:Object(s.jsx)(Z.a,{fontSize:"large"})}),Object(s.jsx)("div",{className:"header__option",children:Object(s.jsx)(K.a,{fontSize:"large"})})]}),Object(s.jsxs)("div",{className:"header__right",children:[Object(s.jsxs)("div",{className:"header__info",children:[Object(s.jsx)(m.a,{src:c.photoURL}),Object(s.jsx)("h4",{children:c.displayName})]}),Object(s.jsx)(Y.a,{children:Object(s.jsx)(ee.a,{})}),Object(s.jsx)(Y.a,{children:Object(s.jsx)(ce.a,{})}),Object(s.jsx)(Y.a,{children:Object(s.jsx)(ae.a,{})}),Object(s.jsx)(Y.a,{children:Object(s.jsx)(U.a,{})})]})]})},ie=c(108);c(89);var re=function(){var e=A(),t=Object(o.a)(e,2),c=(t[0],t[1]);return Object(s.jsxs)("div",{className:"login",children:[Object(s.jsx)("div",{className:"login__logo",children:Object(s.jsx)("img",{alt:"imahe not found",src:"https://www.flaticon.com/svg/static/icons/svg/1384/1384053.svg"})}),Object(s.jsx)("div",{className:"login__logo",children:Object(s.jsx)("img",{alt:"imahe not found",src:"data:image/png;base64,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"})}),Object(s.jsx)(ie.a,{onClick:function(){b.signInWithPopup(h).then((function(e){c({type:"SET_USER",user:e.user})})).catch((function(e){return console.log(e)}))},type:"submit",children:"Login with google"})]})};c(90),c(91);var oe=function(e){var t=e.title,c=e.src,a=e.Icon;return Object(s.jsxs)("div",{className:"sidebar_row",children:[c&&Object(s.jsx)(m.a,{src:c}),a&&Object(s.jsx)(a,{}),Object(s.jsx)("h4",{children:t})]})},je=c(57),de=c.n(je),le=c(58),be=c.n(le),he=c(59),fe=c.n(he),me=c(60),ue=c.n(me),pe=c(61),Oe=c.n(pe),xe=c(62),ve=c.n(xe);var ge=function(){var e=A(),t=Object(o.a)(e,2),c=t[0].User;return t[1],Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)(oe,{title:c.displayName,src:c.photoURL}),Object(s.jsx)(oe,{title:"COVID-19 Information Center",Icon:de.a}),Object(s.jsx)(oe,{title:"Pages",Icon:be.a}),Object(s.jsx)(oe,{title:"Friends",Icon:fe.a}),Object(s.jsx)(oe,{title:"Messanger",Icon:ue.a}),Object(s.jsx)(oe,{title:"Marketplace",Icon:Oe.a}),Object(s.jsx)(oe,{title:"Videos",Icon:ve.a}),Object(s.jsx)(oe,{title:"Marketplace",Icon:U.a})]})};c(92);var _e=function(){return Object(s.jsx)("div",{className:"widget",children:Object(s.jsx)("iframe",{src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWHO&tabs=timeline&width=340&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",width:"340",height:"1000",scrolling:"no",frameborder:"0",style:{border:"none",overflow:"hidden"},allowfullscreen:"true",allow:" encrypted-media; "})})};var Ne=function(){var e=A(),t=Object(o.a)(e,2),c=t[0].User;return t[1],console.log(c),Object(s.jsx)("div",{className:"app",children:c?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(ne,{}),Object(s.jsxs)("div",{className:"app__body",children:[Object(s.jsx)(ge,{}),Object(s.jsx)(B,{}),Object(s.jsx)(_e,{})]})]}):Object(s.jsx)(re,{})})},Ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))},Pe=c(33),Fe="SET_USER",Xe=function(e,t){switch(t.type){case Fe:return Object(Pe.a)(Object(Pe.a)({},e),{},{User:t.user});default:return e}};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(N,{initialState:{User:null},reducer:Xe,children:Object(s.jsx)(Ne,{})})}),document.getElementById("root")),Ae()}},[[93,1,2]]]);
//# sourceMappingURL=main.89813f5a.chunk.js.map