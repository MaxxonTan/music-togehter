(this["webpackJsonpmusic-together"]=this["webpackJsonpmusic-together"]||[]).push([[0],{14:function(e,t,n){e.exports={modal:"Modal_modal__2_j5d",header:"Modal_header__crXKq",field:"Modal_field__11sbi",submit:"Modal_submit__11rRN",invalid:"Modal_invalid__ux5Nr",roomInfo:"Modal_roomInfo__1n45X",roomId:"Modal_roomId__3qTqy",users:"Modal_users__35vFy",user:"Modal_user__Q_AbX",overlay:"Modal_overlay__3Q3c3"}},15:function(e,t,n){e.exports={app:"App_app__1OWQ3",lyrics:"App_lyrics__1pagf",queue:"App_queue__3qMEr",main:"App_main__3BfB4",lyric:"App_lyric__21DlY",player:"App_player__LYUPf",wrongLyrics:"App_wrongLyrics__2hC7c",desc:"App_desc__2k7uE"}},18:function(e,t,n){e.exports={navbar:"Navbar_navbar__3FojS",overlay:"Navbar_overlay__3h38R",container:"Navbar_container__1dv6E",together:"Navbar_together__1PkNL",form:"Navbar_form__11p4w",search:"Navbar_search__3RCj6",cancel:"Navbar_cancel__24JmP",searchResults:"Navbar_searchResults__2dpG7"}},20:function(e,t,n){e.exports={player:"Player_player__jUBSj",details:"Player_details__3Asoa",seeker:"Player_seeker__1ODAF",volume:"Player_volume__2D9wT",name:"Player_name__2eRk1",controls:"Player_controls__dUG8T"}},22:function(e,t,n){e.exports={queue:"Queue_queue__2Q5GP",buttons:"Queue_buttons__2Jz3M",play:"Queue_play__3eKnY",songs:"Queue_songs__1CI2L",tut:"Queue_tut__2Sij8"}},36:function(e,t,n){e.exports={song:"Song_song__cAklu",content:"Song_content__3LK2H"}},38:function(e,t,n){e.exports={searchResults:"SearchResults_searchResults__2Sx3q",container:"SearchResults_container__2Y1SG"}},59:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),o=n(21),r=n.n(o),c=n(27),i=n.n(c),u=n(5),l=n(52),d=n(10),j=n(15),b=n.n(j),m=(n(59),n(25)),f=n(20),O=n.n(f),v=n(39);v.a.initializeApp({apiKey:"AIzaSyDsOlP2febwsRdCoj_5VVLtQio9VOL-QkU",authDomain:"ytmusic-clone.firebaseapp.com",projectId:"ytmusic-clone",storageBucket:"ytmusic-clone.appspot.com",messagingSenderId:"250950387255",appId:"1:250950387255:web:58db6ca91f6ebc37cae1b2",measurementId:"G-FLSQRV1XC3",databaseURL:"https://ytmusic-clone-default-rtdb.firebaseio.com/"});var x=v.a.database(),h=n(3),p=function(){var e,t,n,s=Object(a.useContext)(K),o=s.songQueue,r=s.setSongQueue,c=s.currentSongStatus,i=s.setCurrentSongStatus,l=s.videoPlayer,j=s.userInfo,b=s.setUserInfo,f=Object(a.useState)(0),v=Object(d.a)(f,2),p=v[0],g=v[1],_=Object(a.useState)(0),S=Object(d.a)(_,2),I=S[0],y=S[1],k=Object(a.useState)(0),N=Object(d.a)(k,2),C=N[0],R=N[1];Object(a.useEffect)((function(){var e=setInterval((function(){var e,t,n,a,s;void 0!==l.current&&void 0!==(null===(e=l.current)||void 0===e?void 0:e.getCurrentTime())&&(null!==(null===(t=l.current)||void 0===t?void 0:t.getCurrentTime())&&(R(null===(n=l.current)||void 0===n?void 0:n.getCurrentTime()),g((null===(a=l.current)||void 0===a?void 0:a.getCurrentTime())/(null===(s=l.current)||void 0===s?void 0:s.getDuration())*100)))}),500);return function(){clearInterval(e)}}),[l]),Object(a.useEffect)((function(){j.isInRoom&&(x.ref("rooms/"+j.roomId+"/seekTo").on("value",(function(e){var t,n;null===(t=l.current)||void 0===t||t.seekTo(e.val(),"seconds"),g(100*e.val()/(null===(n=l.current)||void 0===n?void 0:n.getDuration()))})),x.ref("rooms/"+j.roomId+"/currentSongStatus").on("value",(function(e){i(e.val())})))}),[j.isInRoom,i,j.roomId,l]);var P=function(e){return(e-(e%=60))/60+(9<e?":":":0")+e},Q={backgroundSize:p+"% 100%"},q={backgroundSize:100*I+"% 100%"};return Object(h.jsxs)("div",{className:O.a.player,children:[Object(h.jsx)("div",{className:O.a.details,children:0===o.length?Object(h.jsx)("p",{children:"---"}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{src:null===(e=o[c.index])||void 0===e?void 0:e.thumbnail.url,alt:"thumbnail"}),Object(h.jsx)("p",{className:O.a.name,children:null===(t=o[c.index])||void 0===t?void 0:t.title})]})}),Object(h.jsxs)("div",{className:O.a.controls,children:[Object(h.jsx)("i",{class:"fa fa-random","aria-hidden":"true",onClick:function(){for(var e,t=Object(m.a)(o),n=t.length;0!==n;){e=Math.floor(Math.random()*n),n--;var a=[t[e],t[n]];t[n]=a[0],t[e]=a[1]}i(Object(u.a)(Object(u.a)({},c),{},{isPlaying:!1})),r(t),i(Object(u.a)(Object(u.a)({},c),{},{isPlaying:!0})),x.ref("rooms/"+j.roomId).set({songQueue:t,currentSongStatus:Object(u.a)(Object(u.a)({},c),{},{isPlaying:!0})})}}),Object(h.jsx)("i",{class:"fa fa-backward","aria-hidden":"true",onClick:function(){c.index-1===-1||(i(Object(u.a)(Object(u.a)({},c),{},{index:c.index-1})),j.isInRoom&&x.ref("rooms/"+j.roomId+"/currentSongStatus/index").set(c.index-1))}}),Object(h.jsx)("i",{class:c.isPlaying?"fa fa-pause":"fa fa-play","aria-hidden":"true",onClick:function(){i(Object(u.a)(Object(u.a)({},c),{},{isPlaying:!c.isPlaying})),j.isInRoom&&x.ref("rooms/"+j.roomId+"/currentSongStatus/isPlaying").set(!c.isPlaying)}}),Object(h.jsx)("i",{class:"fas fa-forward",onClick:function(){switch(c.queueStatus){case"noRepeat":c.index+1===o.length?console.log("no more songs"):(i(Object(u.a)(Object(u.a)({},c),{},{index:c.index+1})),j.isInRoom&&x.ref("rooms/"+j.roomId+"/currentSongStatus/index").set(c.index+1));break;case"repeat":c.index+1===o.length?(i(Object(u.a)(Object(u.a)({},c),{},{index:0})),x.ref("rooms/"+j.roomId+"/currentSongStatus/index").set(0)):(i(Object(u.a)(Object(u.a)({},c),{},{index:c.index+1})),j.isInRoom&&x.ref("rooms/"+j.roomId+"/currentSongStatus/index").set(c.index+1))}}}),function(e){switch(e){case"noRepeat":return Object(h.jsx)("i",{class:"fas fa-redo",onClick:function(){i(Object(u.a)(Object(u.a)({},c),{},{queueStatus:"repeat"})),j.isInRoom&&x.ref("rooms/"+j.roomId+"/currentSongStatus/queueStatus").set("repeat")}});case"repeat":return Object(h.jsx)("i",{class:"fas fa-redo",style:{color:"#F6C90E"},onClick:function(){i(Object(u.a)(Object(u.a)({},c),{},{queueStatus:"loop"})),j.isInRoom&&x.ref("rooms/"+j.roomId+"/currentSongStatus/queueStatus").set("loop")}});case"loop":return Object(h.jsx)("i",{class:"fas fa-infinity",style:{color:"#F6C90E"},onClick:function(){i(Object(u.a)(Object(u.a)({},c),{},{queueStatus:"noRepeat"})),j.isInRoom&&x.ref("rooms/"+j.roomId+"/currentSongStatus/queueStatus").set("noRepeat")}})}}(c.queueStatus)]}),Object(h.jsxs)("div",{className:O.a.seeker,children:[Object(h.jsx)("label",{htmlFor:"seeker",children:void 0!==l.current?P(parseInt(C)):""}),Object(h.jsx)("input",{type:"range",name:"seeker",min:0,max:99,step:"0.02",style:Q,value:p,onInput:function(e){var t;null===(t=l.current)||void 0===t||t.seekTo(e.target.value*l.current.getDuration()/100,"seconds"),g(e.target.value),j.isInRoom&&x.ref("rooms/"+j.roomId+"/seekTo").set(e.target.value*l.current.getDuration()/100)}}),Object(h.jsx)("label",{htmlFor:"seeker",children:void 0!==l.current?P(parseInt(null===(n=l.current)||void 0===n?void 0:n.getDuration())):"0:00"})]}),Object(h.jsxs)("div",{className:O.a.volume,children:[Object(h.jsx)("i",{class:"fa fa-volume-up","aria-hidden":"true"}),Object(h.jsx)("input",{type:"range",name:"seeker",min:0,max:.999,step:"any",style:q,value:j.volume,onInput:function(e){b(Object(u.a)(Object(u.a)({},j),{},{volume:e.target.value})),y(e.target.value)}})]})]})},g=n(22),_=n.n(g),S=n(36),I=n.n(S),y=n(24),k=function(e){var t=Object(a.useContext)(K),n=t.songQueue,s=t.setSongQueue,o=t.currentSongStatus,r=t.setCurrentSongStatus,c=t.userInfo,i=function(){var t=Array.from(n);t.splice(e.index,1),e.index===n.length-1?(r(Object(u.a)(Object(u.a)({},o),{},{index:e.index-1})),x.ref("rooms/"+c.roomId+"/songQueue").set(t),x.ref("rooms/"+c.roomId+"/currentSongStatus/index").set(e.index-1)):0===n.length&&r(Object(u.a)(Object(u.a)({},o),{},{index:0})),x.ref("rooms/"+c.roomId+"/songQueue").set(t),x.ref("rooms/"+c.roomId+"/currentSongStatus/index").set(0),s(t)},l=function(){r(Object(u.a)(Object(u.a)({},o),{},{index:e.index,isPlaying:!0})),c.isInRoom&&x.ref("rooms/"+c.roomId+"/currentSongStatus").set(Object(u.a)(Object(u.a)({},o),{},{index:e.index,isPlaying:!0}))};return Object(h.jsx)(y.b,{draggableId:e.video.title,index:e.index,children:function(t){return Object(h.jsxs)("div",Object(u.a)(Object(u.a)(Object(u.a)({className:I.a.song,ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:[Object(h.jsx)("i",{class:"fas fa-play",onClick:l}),Object(h.jsxs)("div",{className:I.a.content,children:[Object(h.jsx)("p",{children:e.video.title}),Object(h.jsx)("p",{children:e.video.artist})]}),Object(h.jsx)("p",{children:e.video.duration}),Object(h.jsx)("i",{class:"fas fa-trash-alt",onClick:i}),Object(h.jsx)("i",{class:"fa fa-bars","aria-hidden":"true"})]}))}})},N=n(19),C=n(14),R=n.n(C),P=n(17),Q=function(e){var t=Object(a.useContext)(K),n=t.songQueue,s=t.setSongQueue,o=t.currentSongStatus,r=t.setCurrentSongStatus,c=t.userInfo,i=t.setUserInfo,l=Object(a.useState)(""),j=Object(d.a)(l,2),b=j[0],m=j[1],f=Object(a.useState)([]),O=Object(d.a)(f,2),v=O[0],p=O[1],g=Object(a.useState)(""),_=Object(d.a)(g,2),S=_[0],I=_[1],y=Object(a.useState)(!1),k=Object(d.a)(y,2),C=k[0],Q=k[1];Object(a.useEffect)((function(){c.isInRoom&&x.ref("rooms/"+c.roomId+"/users").on("value",(function(e){p(Object.values(e.val()))}))}),[c.isInRoom,c.roomId]);var q=function(){return(Math.random()+1).toString(36).substring(7)},w=function(e){x.ref("rooms/"+e+"/songQueue").on("value",(function(e){e.val()?s(e.val()):s([])}))};return Object(a.useEffect)((function(){!0===c.isInRoom&&x.ref("rooms/"+c.roomId+"/users/"+c.userId).onDisconnect().remove()}),[c]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:R.a.overlay,onClick:function(){return e.handler()}}),Object(h.jsxs)("div",{className:R.a.modal,children:[Object(h.jsxs)("div",{className:R.a.header,children:[Object(h.jsx)("h1",{children:"Listen with others"}),Object(h.jsx)("i",{class:"fa fa-times","aria-hidden":"true",onClick:function(){return e.handler()}})]}),c.isInRoom?Object(h.jsxs)("div",{className:R.a.roomInfo,children:[Object(h.jsxs)("div",{className:R.a.roomId,onClick:function(e){navigator.clipboard.writeText(c.roomId),Object(P.b)("Copied to clipboard")},children:[Object(h.jsxs)("h1",{children:["Room : ",c.roomId]}),Object(h.jsx)("i",{class:"far fa-clone"})]}),Object(h.jsx)("h2",{children:"Users"}),Object(h.jsx)("div",{className:R.a.users,children:v.map((function(e){return Object(h.jsx)("p",{className:R.a.user,children:e})}))})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:R.a.field,children:[Object(h.jsx)("label",{htmlFor:"name",children:Object(h.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})}),Object(h.jsx)("input",{type:"text",id:"name",autoComplete:"off",placeholder:"Name",value:S,onInput:function(e){return I(e.target.value)}})]}),Object(h.jsxs)("div",{className:R.a.field,children:[Object(h.jsx)("label",{htmlFor:"roomId",children:Object(h.jsx)("i",{className:"fas fa-id-card-alt"})}),Object(h.jsx)("input",{type:"text",id:"roomId",autoComplete:"off",placeholder:"Room ID",value:b,onInput:function(e){return m(e.target.value)}})]}),Object(h.jsxs)("button",{className:R.a.submit,onClick:function(){var e=q();if(""!==b)x.ref("rooms/"+b).once("value",(function(t){t.exists()?(i({name:S,userId:e,isInRoom:!0,roomId:b}),x.ref("rooms/"+b+"/users").set(Object(u.a)(Object(u.a)({},t.val().users),{},Object(N.a)({},e,S))),x.ref("rooms/"+b+"/users").once("value",(function(e){p(Object.values(e.val()))})),x.ref("rooms/"+b+"/users").on("child_added",(function(e){Object(P.b)(e.val()+" joined the room")})),x.ref("rooms/"+b+"/users").on("child_removed",(function(e){Object(P.b)(e.val()+" left the room")})),t.child("songQueue").exists()&&s(t.val().songQueue),r(t.val().currentSongStatus),x.ref("rooms/"+b+"/currentSongStatus/isPlaying").set(!1),x.ref("rooms/"+b+"/seekTo").set(.001)):Q(!0)})),w(b);else{var t=q();i({name:S,userId:e,isInRoom:!0,roomId:t}),x.ref("rooms/"+t).set({users:Object(N.a)({},e,S),seekTo:0,songQueue:n,currentSongStatus:o}),x.ref("rooms/"+t+"/users").once("value",(function(e){p(Object.values(e.val()))})),x.ref("rooms/"+t+"/users").on("child_added",(function(e){Object(P.b)(e.val()+" joined the room")})),x.ref("rooms/"+t+"/users").on("child_removed",(function(e){Object(P.b)(e.val()+" left the room")})),w(t),m(t)}},disabled:""===S,children:[b?"Join":"Create"," room"]}),C?Object(h.jsx)("p",{className:R.a.invalid,children:"Invalid room id"}):Object(h.jsx)("p",{children:"*Leave room Id blank to create room"})]})]})]})},q=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)("Queue"),r=Object(d.a)(o,2),c=r[0],i=r[1],l=Object(a.useContext)(K),j=l.songQueue,b=l.setSongQueue,m=l.currentSongStatus,f=l.setCurrentSongStatus,O=l.userInfo;return Object(h.jsxs)(h.Fragment,{children:[n?Object(h.jsx)(Q,{modalOpen:n,handler:function(){s(!1)}}):"",Object(h.jsx)(y.a,{onDragEnd:function(e){var t=Array.from(j),n=t.splice(e.source.index,1),a=Object(d.a)(n,1)[0];t.splice(e.destination.index,0,a),b(t),x.ref("rooms/"+O.roomId+"/songQueue").set(t)},children:Object(h.jsxs)("div",{className:_.a.queue,children:[Object(h.jsx)("input",{type:"text",value:c,onInput:function(e){return i(e.target.value)}}),Object(h.jsxs)("div",{className:_.a.buttons,children:[Object(h.jsx)("button",{className:_.a.play,onClick:function(){f(Object(u.a)(Object(u.a)({},m),{},{index:0,isPlaying:!0})),x.ref("rooms/"+O.roomId+"/currentSongStatus").set(Object(u.a)(Object(u.a)({},m),{},{index:0,isPlaying:!0}))},children:Object(h.jsx)("i",{class:"fa fa-play","aria-hidden":"true"})}),Object(h.jsx)("button",{onClick:function(){var e=j;e.sort((function(){return Math.random()-.5})),f(Object(u.a)(Object(u.a)({},m),{},{isPlaying:!1})),b(e),f(Object(u.a)(Object(u.a)({},m),{},{isPlaying:!0})),x.ref("rooms/"+O.roomId+"/songQueue").set(e),x.ref("rooms/"+O.roomId+"/currentSongStatus/isPlaying").set(!0)},children:Object(h.jsx)("i",{class:"fa fa-random","aria-hidden":"true"})}),Object(h.jsx)("button",{onClick:function(){return s(!0)},children:Object(h.jsx)("i",{class:"fas fa-users"})})]}),Object(h.jsx)(y.c,{droppableId:"queue",children:function(e){return Object(h.jsxs)("div",Object(u.a)(Object(u.a)({className:_.a.songs,ref:e.innerRef},e.droppableProps),{},{children:[j.length>0?j.map((function(e,t){return Object(h.jsx)(k,{video:e,index:t},e.videoId)})):Object(h.jsx)("h1",{className:_.a.tut,children:"(Use search bar to add songs)"}),e.placeholder]}))}})]})})]})},w=n(53),E=n.n(w),F=n(30),M=n.n(F),A=n(18),L=n.n(A),T=n(38),D=n.n(T),U=n(29),B=n.n(U),z=function(e){var t=Object(a.useContext)(K),n=t.songQueue,s=t.setSongQueue,o=t.userInfo;return Object(h.jsxs)("div",{className:D.a.searchResults,onClick:function(){B.a.get("https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=".concat(e.video.videoId,"&key=AIzaSyCd9R94NO8BnSE5xx0kqKAp_Br_OVo6RI4")).then((function(t){var a=t.data.items[0].contentDetails.duration,r=a.match(/\d[HMS]+/g),c=e.video.artist;c.includes("- Topic")&&(c=c.replace("- Topic",""));var i=0,u=!1,l=0,d=0,j=!1;r.forEach((function(e){e.includes("H")&&(u=!0,i=e.substr(0,e.indexOf("H"))),e.includes("M")&&(l=e.substr(0,e.indexOf("M"))),e.includes("S")&&(d=e.substr(0,e.indexOf("S")))})),i<10&&!0===u&&(i="0"+i),l<10&&!0===u&&(l="0"+l),d<10&&(d="0"+d),a="".concat(u?i+":"+l+":"+d:l+":"+d);var b={title:e.video.title,artist:c,videoId:e.video.videoId,thumbnail:e.video.thumbnail,duration:a};n.forEach((function(e){e.title===b.title&&(j=!0)})),!1===j&&(s([].concat(Object(m.a)(n),[b])),o.isInRoom&&x.ref("rooms/"+o.roomId+"/songQueue").set([].concat(Object(m.a)(n),[b])))})).catch((function(e){return console.log(e)}))},children:[Object(h.jsxs)("div",{className:D.a.container,children:[Object(h.jsx)("p",{children:e.video.title}),Object(h.jsx)("p",{children:e.video.artist})]}),Object(h.jsx)("img",{src:e.video.thumbnail.url,alt:"thumbnail"})]})},J=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(""),r=Object(d.a)(o,2),c=r[0],i=r[1],u=Object(a.useState)(!1),l=Object(d.a)(u,2),j=l[0],b=l[1],m=Object(a.useState)([]),f=Object(d.a)(m,2),O=f[0],v=f[1];Object(a.useEffect)((function(){c?b(!0):(b(!1),v([]))}),[c]);return Object(h.jsxs)("div",{className:L.a.navbar,children:[0!==O.length?Object(h.jsx)("div",{className:L.a.overlay}):"",Object(h.jsx)("div",{className:L.a.container,children:Object(h.jsxs)("div",{className:"".concat(L.a.search," ").concat(n?L.a.focus:""),children:[Object(h.jsx)("i",{className:"fas fa-search"}),Object(h.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),v([]),B.a.get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&videoCategoryId=10&q=".concat(c,"&key=").concat("AIzaSyBirYxW0LnElB27J9k800OPbiqIpKa5veg")).then((function(e){v(e.data.items.map((function(e){return{title:e.snippet.title,artist:e.snippet.channelTitle,videoId:e.id.videoId,thumbnail:e.snippet.thumbnails.default}})))})).catch((function(e){return console.log(e)}))}(e)},className:L.a.form,children:Object(h.jsx)("input",{autoComplete:"off",value:c,type:"text",id:"search",placeholder:"Search",onFocus:function(){return s(!0)},onBlur:function(){s(!1)},onInput:function(e){return i(e.target.value)}})}),j?Object(h.jsx)("i",{className:"fas fa-times cancel",onClick:function(){return i("")}}):"",0!==O.length?Object(h.jsx)("div",{className:L.a.searchResults,children:O.map((function(e){return Object(h.jsx)(z,{video:e},e.videoId)}))}):""]})})]})},K=Object(a.createContext)(null);var G=function(){var e,t,n=Object(a.useRef)(),s=Object(a.useState)({name:"",userId:0,isInRoom:!1,volume:0,roomId:0}),o=Object(d.a)(s,2),r=o[0],c=o[1],j=Object(a.useState)([]),m=Object(d.a)(j,2),f=m[0],O=m[1],v=Object(a.useState)(""),x=Object(d.a)(v,2),g=x[0],_=x[1],S=Object(a.useState)({index:0,isPlaying:!1,queueStatus:"noRepeat"}),I=Object(d.a)(S,2),y=I[0],k=I[1];function N(e){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(i.a.mark((function e(t){var a,s,o,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,void 0===n){e.next=17;break}if(a="",!t){e.next=9;break}return e.next=6,M.a.requestLyricsFor((null===(s=f[y.index])||void 0===s?void 0:s.title)+(null===(o=f[y.index])||void 0===o?void 0:o.artist));case 6:a=e.sent,e.next=12;break;case 9:return e.next=11,M.a.requestLyricsFor(null===(r=f[y.index])||void 0===r?void 0:r.title);case 11:a=e.sent;case 12:if(void 0!==a){e.next=16;break}return e.next=15,M.a.requestLyricsFor(null===(c=f[y.index])||void 0===c?void 0:c.title);case 15:a=e.sent;case 16:_(a);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){f.length>0&&N(!1)}),[null===(e=f[y.index])||void 0===e?void 0:e.title,f.length]),Object(h.jsxs)(K.Provider,{value:{songQueue:f,setSongQueue:O,currentSongStatus:y,setCurrentSongStatus:k,userInfo:r,setUserInfo:c,videoPlayer:n},children:[Object(h.jsx)(P.a,{position:"top-right",toastOptions:{style:{border:"2px solid #F6C90E",background:"#303841",color:"#EEEEEE",fontFamily:"Lato, sans-serif"}}}),Object(h.jsxs)("div",{className:b.a.app,children:[Object(h.jsx)(J,{}),Object(h.jsxs)("section",{className:b.a.main,children:[Object(h.jsxs)("div",{className:b.a.lyrics,children:[0!==f.length?Object(h.jsx)(E.a,{url:"https://www.youtube-nocookie.com/watch?v=".concat(null===(t=f[y.index])||void 0===t?void 0:t.videoId),volume:r.volume,className:b.a.player,ref:n,playing:y.isPlaying,loop:"loop"===y.queueStatus,onEnded:function(){switch(y.queueStatus){case"noRepeat":y.index+1===f.length?console.log("no more songs"):k(Object(u.a)(Object(u.a)({},y),{},{index:y.index+1}));break;case"repeat":y.index+1===f.length?k(Object(u.a)(Object(u.a)({},y),{},{index:0})):k(Object(u.a)(Object(u.a)({},y),{},{index:y.index+1}))}}}):"",Object(h.jsx)("h1",{children:"Lyrics"}),Object(h.jsx)("p",{className:b.a.lyric,children:g}),Object(h.jsx)("button",{onClick:function(){return N(!0)},className:b.a.wrongLyrics,children:"Wrong lyrics?"}),Object(h.jsx)("p",{className:b.a.desc,children:"(Use this if lyrics are wrong)"})]}),Object(h.jsx)("div",{className:b.a.queue,children:Object(h.jsx)(q,{})}),Object(h.jsx)(p,{})]})]})]})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.07096536.chunk.js.map