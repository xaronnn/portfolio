(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,n){e.exports=n(380)},160:function(e,t,n){},164:function(e,t,n){e.exports={root:"_3XUmqoiKlzvnWZ0dNYy6vD",navList:"_3H-un8FFiAQg_jkrZI2PtM",navItem:"_1jZkMTwVuOvdd4XVmQdWAV",navItemSelected:"_38W76zWIzivaVY0cMMls9z"}},166:function(e,t,n){e.exports={root:"_335_RduMm5baKvfR7-upXT",menuIcon:"_1wtv_QmwBjA6bahr-BSzck",menuContainer:"FjZN6HSin41EUqJmVOTBX",menuContainerHidden:"_2a1rkl04aEMgiIt8nK5kLn",navItem:"_1-UzxhQkmpajaCzFH_hm0k",navItemSelected:"_3esCKLNRudEi4KQFd8Hssz"}},168:function(e,t,n){e.exports={root:"_3dP95I0fD8Nf4Me2fFJtXM",content:"_2bFCdmDgXKi4CLVUb2PKRE"}},170:function(e,t,n){e.exports={root:"_2Ph9MpVbUzOK6Qr9rFRDLC",content:"_3uixFhBl7DXcx5pfH_pk5V"}},172:function(e,t,n){e.exports={root:"_3GCBDjQ6Yz7TLJZH6hyPCu",container:"_26nIRNAK1iSvsLr1NNGcDt",title:"_3-ct6jjHTS6mzHal0I0V9t",grid:"_2dXECUASPb6Cs-c2b3F69G",gridItem:"BnXOLi5oI0ZZW8j0mCpGF"}},174:function(e,t,n){e.exports={root:"_3c9CtWkwsgYUfLwJJx1l_8",backgroundContainer:"fEgTTdtRiOlMBT4WbIk46",content:"_3YcWaT8x-8-Pkzo6w42bBw",imgMe:"_2qmGj-sjgLeDFpAQXdwSaX",name:"_3TrZUA9DmqiE9t8r_95z5_",position:"_2clGCvsOrepLbpkJizdApP",bio:"_1tpQ65RE1y6Pir8ZqKL0tG",mediumLink:"z6EGDSJN0dF4TfhwrH_8"}},176:function(e,t,n){e.exports=n.p+"static/media/me.896c2e45.jpg"},177:function(e,t,n){e.exports={root:"_1VuBC4NnHyA9xlhkcwkbXW",container:"KYZVtHUMs-if8XDVLZBGz",title:"ifcBBs06L4-YPuHBIJww-",grid:"rRDBl942t7lzKFg7QD5sH",gridItem:"_27Ldu1KkqTn0Mpf83g4b9E",gridItemList:"_1eneLOj04i2sNIAfi2CUlO",textBlock:"_3WQ2OUBAqw5OxIH4lAY04n",textBlockHeading:"_2AnepSpRStA2pdbVdzt0aV"}},374:function(e,t,n){e.exports={container:"EVco9jJqKn-r97WcQ0pYa",title:"_3K-nwA_goTNLSNsDwmwCrh",tableContainer:"_2FGIVxkIJVzlb6pNcxQxg8"}},376:function(e,t,n){e.exports={root:"_2vT9GnVgtN-WVOELa9ij7C"}},378:function(e,t,n){e.exports={root:"_3J1NRHQ37yshHmF4DX8lLX"}},380:function(e,t,n){"use strict";n.r(t);var a,l=n(0),c=n.n(l),r=n(65),i=n.n(r),o=(n(160),n(2)),m=n(13),s=n(4),u=n(3),E=n(5),d=n(66),p=n(67),N=n.n(p),h=n(92),b=n.n(h),f=n(20),v=n(37),g=n(15);!function(e){e.Home="HOME_ROUTENAME",e.Skills="SKILLS_ROUTENAME",e.Projects="PROJECTS_ROUTENAME",e.Contact="CONTACT_ROUTENAME"}(a||(a={}));var k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={routeName:a.Home},n.setRouteName=function(e){n.setState({routeName:e})},n}return Object(E.a)(t,e),t}(g.a),O=n(164),j=n(166),w=[{content:"Home",routeName:a.Home},{content:"Skills",routeName:a.Skills},{content:"Projects",routeName:a.Projects},{content:"Contact",routeName:a.Contact}],I=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},n.handleIconClick=function(){n.setState(function(e){return{open:!e.open}})},n.handleNavItemClick=function(e){return function(){document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"})}},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.createElement(g.c,{to:[k]},function(t){return l.createElement(l.Fragment,null,l.createElement(b.a,{query:"(min-width: ".concat(769,"px)")},l.createElement("nav",{className:O.root},l.createElement("ul",{className:O.navList},w.map(function(n,a){var c=N()(O.navItem,Object(d.a)({},O.navItemSelected,n.routeName===t.state.routeName));return l.createElement("li",{key:a,className:c,onClick:e.handleNavItemClick(n.routeName)},n.content)})))),l.createElement(b.a,{query:"(max-width: ".concat(768,"px)")},l.createElement("nav",{className:j.root},l.createElement("div",{className:j.menuIcon,onClick:e.handleIconClick},l.createElement(f.a,{icon:v.a,size:"2x"}))),l.createElement("div",{className:N()(j.menuContainer,Object(d.a)({},j.menuContainerHidden,!e.state.open))},l.createElement("ul",{className:j.navList},w.map(function(n,a){var c=N()(j.navItem,Object(d.a)({},j.navItemSelected,n.routeName===t.state.routeName));return l.createElement("li",{key:a,className:c,onClick:e.handleNavItemClick(n.routeName)},n.content)})))))})}}]),t}(l.Component),C=n(168),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.createElement("footer",{className:C.root},l.createElement("div",{className:C.content},l.createElement("p",null,"Im a footer")))}}]),t}(l.Component),S=n(170),y=function(e){return l.createElement("div",{className:S.root},l.createElement("div",{className:S.content},e.children))},_=n(24),L=n(172),B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.createElement(g.c,{to:[k]},function(e){return l.createElement(_.a,{onEnter:function(){return e.setRouteName(a.Projects)},fireOnRapidScroll:!0},l.createElement("section",{className:L.root,id:a.Projects},l.createElement(y,null,l.createElement("div",{className:L.container},l.createElement("div",{className:L.title},l.createElement("h1",{className:L.title},"Projects")),l.createElement("div",{className:L.grid},l.createElement("div",{className:L.gridItem}),l.createElement("div",{className:L.gridItem}),l.createElement("div",{className:L.gridItem}),l.createElement("div",{className:L.gridItem}))))))})}}]),t}(l.Component),M=n(29),H=n(174),T=n(176),A=[{icon:M.b,url:"https://www.github.com/elertan/"},{icon:M.c,url:"https://www.linkedin.com/in/denniskievits/"},{icon:v.b,url:"mailto:denkievits@gmail.com"}],z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.createElement(g.c,{to:[k]},function(e){return l.createElement(_.a,{onEnter:function(){return e.setRouteName(a.Home)},fireOnRapidScroll:!0},l.createElement("section",{className:H.root,id:a.Home},l.createElement("div",{className:H.backgroundContainer}),l.createElement("div",{className:H.content},l.createElement("img",{className:H.imgMe,src:T}),l.createElement("h1",{className:H.name},"Dennis Kievits"),l.createElement("h4",{className:H.position},"Software Engineer & Entrepeneur"),l.createElement("code",{className:H.bio},'~ $ "(ohmy)zsh" | unix --enthusiast && nvim'),l.createElement("div",null,A.map(function(e,t){return l.createElement("a",{key:t,className:H.mediumLink,href:e.url},l.createElement(f.a,{className:H.mediumIcon,icon:e.icon,size:"2x"}))})))))})}}]),t}(l.Component),R=n(177),D=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.createElement(g.c,{to:[k]},function(e){return l.createElement(_.a,{onEnter:function(){return e.setRouteName(a.Skills)}},l.createElement("section",{className:R.root,id:a.Skills},l.createElement(y,null,l.createElement(l.Fragment,null,l.createElement("div",{className:R.container},l.createElement("div",null,l.createElement("h1",{className:R.title},"Skills")),l.createElement("div",{className:R.grid},l.createElement("div",{className:R.gridItem},l.createElement("h4",null,"Languages"),l.createElement("div",{className:R.gridItemList},l.createElement("ul",null,l.createElement("li",null,"C#"),l.createElement("li",null,"Javascript"),l.createElement("li",null,"Typescript"),l.createElement("li",null,"HTML(5)"),l.createElement("li",null,"CSS(3)"),l.createElement("li",null,"SASS"),l.createElement("li",null,"Python"),l.createElement("li",null,"Rust"),l.createElement("li",null,"Dart"),l.createElement("li",null,"Lua"),l.createElement("li",null,"Java"),l.createElement("li",null,"C/C++"),l.createElement("li",null,"Swift"),l.createElement("li",null,"ASM (x86 and x86_64)")))),l.createElement("div",{className:R.gridItem},l.createElement("h4",null,"Technology Stack"),l.createElement("div",{className:R.gridItemList},l.createElement("ul",null,l.createElement("li",null,"Node"),l.createElement("li",null,"ElasticSearch"),l.createElement("li",null,"GraphQL"),l.createElement("li",null,".NET Core"),l.createElement("li",null,".NET Framework"),l.createElement("li",null,"Mono"),l.createElement("li",null,"Nginx"),l.createElement("li",null,"Docker")))),l.createElement("div",{className:R.gridItem},l.createElement("h4",null,"Frameworks/Libaries"),l.createElement("div",{className:R.gridItemList},l.createElement("ul",null,l.createElement("li",null,"React (JS / Native)",l.createElement("ul",null,l.createElement("li",null,"Redux"),l.createElement("li",null,"Formik"),l.createElement("li",null,"Material UI"),l.createElement("li",null,"Semantic UI"),l.createElement("li",null,"Apollo"))),l.createElement("li",null,"WPF / UWP"),l.createElement("li",null,"Xamarin(.Forms)",l.createElement("ul",null,l.createElement("li",null,"FFImageLoading"))),l.createElement("li",null,"Flutter")))),l.createElement("div",{className:R.gridItem},l.createElement("h4",null,"Tools"),l.createElement("div",{className:R.gridItemList},l.createElement("ul",null,l.createElement("li",null,"Photoshop"),l.createElement("li",null,"Microsoft Office"),l.createElement("li",null,"Visual Studio"),l.createElement("li",null,"JetBrains IDEs"),l.createElement("li",null,"IDA Dissasembler"),l.createElement("li",null,"Hopper"),l.createElement("li",null,"VCS (git)")))))),l.createElement("h3",{className:R.textBlockHeading},"Software"),l.createElement("div",null,l.createElement("p",{className:R.textBlock},"Experience with working with ",l.createElement("span",{className:"bold"},"Windows"),", ",l.createElement("span",{className:"bold"},"Linux"),", and ",l.createElement("span",{className:"bold"},"MacOS"),". But I do prefer working on an unix based OS."),l.createElement("p",{className:R.textBlock},"Experience with cross-platform development targetting ",l.createElement("span",{className:"bold"},"Web"),", ",l.createElement("span",{className:"bold"},"Windows"),", ",l.createElement("span",{className:"bold"},"MacOS"),", ",l.createElement("span",{className:"bold"},"iOS"),", ",l.createElement("span",{className:"bold"},"Android"),", and ",l.createElement("span",{className:"bold"},"Embedded Systems"),"."),l.createElement("p",{className:R.textBlock},"Experience with good software architecture design principles / orchestration such as ",l.createElement("span",{className:"bold"},"SOLID"),", ",l.createElement("span",{className:"bold"},"Microservices"),", and ",l.createElement("span",{className:"bold"},"Containerization"),"."),l.createElement("p",{className:R.textBlock},"Experience with Continious Integration (CI) / Continious Delivery (CD) services such as ",l.createElement("span",{className:"bold"},"Travis CI"),", and ",l.createElement("span",{className:"bold"},"Circle CI"),".")),l.createElement("h3",{className:R.textBlockHeading},"Teamwork"),l.createElement("div",null,l.createElement("p",{className:R.textBlock},"Experience working as a team using methodologies such as ",l.createElement("span",{className:"bold"},"Agile (Scrum)"),", and ",l.createElement("span",{className:"bold"},"Waterfall"),".")),l.createElement("h3",{className:R.textBlockHeading},"Future Goals"),l.createElement("div",null,l.createElement("p",{className:R.textBlock},"I'm really excited about ",l.createElement("span",{className:"bold"},"Machine Learning"),", because of the new possibilities it unlocks for the application of software on more abstract use cases."),l.createElement("p",{className:R.textBlock},"I'm currently researching / studying one of the more popular libaries from Google, ",l.createElement("span",{className:"bold"},"Tensorflow"),", and I'd love to develop something new using this technology."))))))})}}]),t}(l.Component),F=n(152),V=n(43),P=Object(V.withScriptjs)(Object(V.withGoogleMap)(function(){return l.createElement(V.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34,lng:150}},l.createElement(V.Marker,{position:{lat:-34,lng:150}},l.createElement("p",null,"test")))})),W=function(e){return l.createElement(P,{containerElement:l.createElement("div",{style:{width:"100%",height:500}}),mapElement:l.createElement("div",{style:{height:"100%"}}),googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBDa0iRq8waNYVQuDnBTiJ7fVpWVVf1cIE&v=3.exp&libraries=geometry,drawing,places",loadingElement:l.createElement("p",null,"Loading...")})},J=n(374),U=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.createElement(g.c,{to:[k]},function(e){return l.createElement(_.a,{fireOnRapidScroll:!0,onEnter:function(){return e.setRouteName(a.Contact)}},l.createElement("section",{className:J.root,id:a.Contact},l.createElement(y,null,l.createElement("div",{className:J.container},l.createElement("div",null,l.createElement("h1",{className:J.title},"Contact")),l.createElement("div",{className:J.tableContainer},l.createElement("table",null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,l.createElement(f.a,{icon:v.c,size:"2x"})),l.createElement("td",null,"+31 6 34 26 91 15")),l.createElement("tr",null,l.createElement("td",null,l.createElement(f.a,{icon:F.a,size:"2x"})),l.createElement("td",null,l.createElement("a",{href:"mailto:denkievits@gmail.com"},"denkievits@gmail.com"))),l.createElement("tr",null,l.createElement("td",null,l.createElement(f.a,{icon:M.b,size:"2x"})),l.createElement("td",null,l.createElement("a",{href:"https://www.github.com/elertan/"},"@elertan"))),l.createElement("tr",null,l.createElement("td",null,l.createElement(f.a,{icon:M.c,size:"2x"})),l.createElement("td",null,l.createElement("a",{href:"https://www.linkedin.com/in/denniskievits/"},"Dennis Kievits"))),l.createElement("tr",null,l.createElement("td",null,l.createElement(f.a,{icon:M.a,size:"2x"})),l.createElement("td",null,"Elertan#8907"))))),l.createElement("div",null,l.createElement(W,null))))))})}}]),t}(l.Component),K=n(376),G=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.createElement("div",{className:K.root},l.createElement(z,null),l.createElement(D,null),l.createElement(B,null),l.createElement(U,null))}}]),t}(l.Component),Q=n(378),X=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:Q.root},c.a.createElement(g.b,null,c.a.createElement(I,null),c.a.createElement(G,null),c.a.createElement(x,null)))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[155,2,1]]]);
//# sourceMappingURL=main.805384cd.chunk.js.map