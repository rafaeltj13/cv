(function(e){function t(t){for(var a,c,i=t[0],s=t[1],l=t[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/cv/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02f1":function(e,t,n){},"12ec":function(e,t,n){"use strict";n("c526")},"1a0a":function(e,t,n){},"268e":function(e,t,n){},"3da4":function(e,t,n){"use strict";n("1a0a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function o(e,t,n,o,r,c){Object(a["L"])("Navbar");var i=Object(a["L"])("TabContainer"),s=Object(a["L"])("n-config-provider"),l=Object(a["L"])("n-notification-provider");return Object(a["C"])(),Object(a["l"])("section",null,[Object(a["o"])(l,null,{default:Object(a["S"])((function(){return[Object(a["o"])(s,{"theme-overrides":o.currentTheme},{default:Object(a["S"])((function(){return[Object(a["k"])("",!0),Object(a["o"])(i)]})),_:1},8,["theme-overrides"])]})),_:1})])}var r=n("73c1"),c=n("5927"),i=n("47e2"),s=n("5502"),l={class:"header-container"},u={class:"header-wrapper"},d={class:"name-title"},b={class:"job-description"};function p(e,t,n,o,r,c){return Object(a["C"])(),Object(a["l"])("header",l,[Object(a["o"])(a["e"],{name:"fade"},{default:Object(a["S"])((function(){return[Object(a["T"])(Object(a["m"])("div",null,[Object(a["m"])("div",u,[Object(a["m"])("div",null,[Object(a["m"])("h1",d,Object(a["N"])(o.t("name")),1),Object(a["m"])("h2",b,Object(a["N"])(o.t("navbar.job")),1)])])],512),[[a["P"],o.show]])]})),_:1})])}var m={setup:function(){var e=Object(i["b"])(),t=e.t,n=Object(a["I"])(!1);return setTimeout((function(){n.value=!0}),1e3),{t:t,show:n}}},f=(n("cf14"),n("6b0d")),j=n.n(f);const O=j()(m,[["render",p],["__scopeId","data-v-8143d164"]]);var v=O,h={common:{fontFamily:"Comfortaa",textColorBase:"#232931",primaryColor:"#232931",baseColor:"#232931",primaryColorHover:"#D2D3D5",inputColor:"#232931",borderColor:"#232931",iconColor:"#2A2E2D"},Card:{borderColor:"#333639"},Button:{textColor:"#707070"},Divider:{color:"#4ecca3"}},g={common:{fontFamily:"Comfortaa",textColorBase:"#2A2E2D",primaryColor:"#2A2E2D",baseColor:"#D2D3D5",primaryColorHover:"#2A2E2D",inputColor:"#D2D3D5",borderColor:"#D2D3D5",iconColor:"#2A2E2D"}},x={ref:"tabsContainer"},C={class:"tabs-container"},y={class:"tab-element"},w=["onClick"],k={class:"settings-container"};function S(e,t,n,o,r,c){var i=Object(a["L"])("LanguageSelector"),s=Object(a["L"])("ThemeSwticher");return Object(a["C"])(),Object(a["l"])("div",x,[Object(a["m"])("div",C,[Object(a["m"])("h4",y,Object(a["N"])(o.t("name")),1),Object(a["o"])(a["f"],{name:"list",tag:"div",class:"tab-selection-container"},{default:Object(a["S"])((function(){return[(Object(a["C"])(!0),Object(a["l"])(a["b"],null,Object(a["J"])(o.currentTabs,(function(e){return Object(a["C"])(),Object(a["l"])("p",{key:e,class:Object(a["x"])(["tab-title",{"selected-tab":o.selectedTab===e}]),onClick:function(t){return o.selectTab(e)}},Object(a["N"])(o.t("tabContainer.".concat(e))),11,w)})),128))]})),_:1}),Object(a["m"])("div",k,[Object(a["o"])(i),Object(a["o"])(s,{class:"tab-element"})])]),Object(a["o"])(a["e"],{name:"component",mode:"out-in"},{default:Object(a["S"])((function(){return[(Object(a["C"])(),Object(a["j"])(Object(a["M"])(o.selectedTab),{class:"content-container"}))]})),_:1})],512)}n("d3b7");var N={class:"theme-switcher-container"};function D(e,t,n,o,r,c){return Object(a["C"])(),Object(a["l"])("div",N,[Object(a["o"])(a["e"],{name:"fade",mode:"out-in"},{default:Object(a["S"])((function(){return["dark"===o.themeValue?(Object(a["C"])(),Object(a["l"])("i",{key:0,onClick:t[0]||(t[0]=function(e){return o.updateThemeValue("light")}),class:"far fa-sun"})):"light"===o.themeValue?(Object(a["C"])(),Object(a["l"])("i",{key:1,onClick:t[1]||(t[1]=function(e){return o.updateThemeValue("dark")}),class:"far fa-moon"})):Object(a["k"])("",!0)]})),_:1})])}var T={setup:function(){var e=Object(s["b"])(),t=Object(a["h"])((function(){return e.getters["Settings/theme"]})),n=function(t){var n=document.documentElement;localStorage.setItem("theme",t),n.setAttribute("theme",t),e.dispatch("Settings/setTheme",t)};return Object(a["A"])((function(){n("light")})),{themeValue:t,updateThemeValue:n}}};n("b288");const _=j()(T,[["render",D],["__scopeId","data-v-791b5f26"]]);var E=_,L={class:"select-container"};function A(e,t,n,o,r,c){var i=Object(a["L"])("n-select");return Object(a["C"])(),Object(a["l"])("div",L,[Object(a["o"])(i,{value:o.value,"onUpdate:value":t[0]||(t[0]=function(e){return o.value=e}),size:"small",options:o.options},null,8,["value","options"])])}var M=n("7baf"),I=n("a1e9"),P=n("5c40"),B={components:{NSelect:M["a"]},setup:function(){var e=Object(i["b"])(),t=e.t,n=e.locale,a=Object(I["m"])(n.value||"en"),o=[{label:t("language.en"),value:"en"},{label:t("language.pt"),value:"pt"}];return Object(P["Z"])(a,(function(e){n.value=e})),{value:a,options:o}}};n("e2ec");const R=j()(B,[["render",A],["__scopeId","data-v-26127808"]]);var F=R,J={class:"about-me-hey"},q={class:"about-me-name"},V={class:"about-me-description"},z=["src"],G={class:"bio-info"},W={class:"bio-info"};function U(e,t,n,o,r,c){var i=Object(a["L"])("NDivider"),s=Object(a["L"])("n-grid-item"),l=Object(a["L"])("n-grid"),u=Object(a["L"])("n-button");return Object(a["C"])(),Object(a["j"])(a["e"],{name:"about-me",tag:"section",class:"about-me-container"},{default:Object(a["S"])((function(){return[Object(a["m"])("div",null,[Object(a["m"])("h3",J,Object(a["N"])(o.t("aboutme.hey")),1),Object(a["m"])("h1",q,Object(a["N"])(o.t("name"))+" .",1),Object(a["m"])("p",V,Object(a["N"])(o.t("aboutme.description")),1),Object(a["o"])(i,{class:"divider"}),Object(a["m"])("h2",null,Object(a["N"])(o.t("aboutme.who")),1),o.profilePhotoSrc?(Object(a["C"])(),Object(a["j"])(l,{key:0,cols:"1 s:1 m:1 l:1 xl:2",responsive:"screen"},{default:Object(a["S"])((function(){return[Object(a["o"])(s,null,{default:Object(a["S"])((function(){return[Object(a["m"])("img",{src:o.profilePhotoSrc,alt:"profile-photo",class:"profile-photo"},null,8,z)]})),_:1}),Object(a["o"])(s,{class:"bio-container"},{default:Object(a["S"])((function(){return[Object(a["m"])("p",G,Object(a["N"])(o.t("aboutme.bio",{age:o.calculateAge()})),1),Object(a["m"])("p",W,Object(a["N"])(o.t("aboutme.bioWork")),1)]})),_:1})]})),_:1})):Object(a["k"])("",!0),Object(a["o"])(i,{class:"divider"}),Object(a["m"])("h2",null,Object(a["N"])(o.t("aboutme.skills")),1),Object(a["o"])(l,{cols:"2 s:2 m:4 l:6 xl:6",responsive:"screen"},{default:Object(a["S"])((function(){return[(Object(a["C"])(!0),Object(a["l"])(a["b"],null,Object(a["J"])(o.skills,(function(e){return Object(a["C"])(),Object(a["j"])(s,{key:e},{default:Object(a["S"])((function(){return[Object(a["o"])(u,{round:"",class:"skill-btn"},{default:Object(a["S"])((function(){return[Object(a["n"])(Object(a["N"])(e),1)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})])]})),_:1})}var Q=n("1da1"),H=(n("96cf"),n("bc3a")),K=n.n(H),Y=n("a9d8"),X=n("646f"),Z=n("2649"),$=n("3519"),ee={components:{NDivider:Y["a"],NGrid:X["a"],NGridItem:Z["a"],NButton:$["a"]},setup:function(){var e=Object(I["m"])(["Vue.js","Vue 3","Node.js","Express.js","React","React Native","Angular","Mongoose","MongoDB","Sequelize","SQL","Google BigQuery"]),t=Object(i["b"])(),n=t.t,a=Object(I["m"])(""),o=function(){var e=Object(Q["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,K.a.get("https://api.github.com/users/rafaeltj13");case 2:t=e.sent,n=t.data,a.value=n.avatar_url;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=new Date,t=new Date("1997-07-22"),n=e.getFullYear()-t.getFullYear(),a=e.getMonth()-t.getMonth();return(a<0||0===a&&e.getDate()<t.getDate())&&n--,n};return Object(P["F"])((function(){o()})),{skills:e,t:n,profilePhotoSrc:a,calculateAge:r}}};n("8b7e");const te=j()(ee,[["render",U],["__scopeId","data-v-0f928e9a"]]);var ne=te,ae={class:"social-media-links"};function oe(e,t,n,o,r,c){var i=Object(a["L"])("Card");return Object(a["C"])(),Object(a["l"])("section",null,[Object(a["m"])("h2",null,Object(a["N"])(o.t("contact.title")),1),Object(a["m"])("h4",null,Object(a["N"])(o.t("contact.description")),1),Object(a["o"])(i,null,{default:Object(a["S"])((function(){return[Object(a["m"])("div",ae,[Object(a["m"])("i",{class:"fab fa-github",onClick:t[0]||(t[0]=function(e){return o.openSocial("https://github.com/rafaeltj13")})}),Object(a["m"])("i",{class:"fab fa-linkedin-in",onClick:t[1]||(t[1]=function(e){return o.openSocial("https://www.linkedin.com/in/rafael-de-ara%C3%BAjo-14b5b1117/")})}),Object(a["m"])("i",{class:"far fa-envelope",onClick:t[2]||(t[2]=function(e){return o.copyData("rafael.damaciel@gmail.com",o.t("contact.copy"),o.t("contact.email"))})}),Object(a["m"])("i",{class:"fab fa-instagram",onClick:t[3]||(t[3]=function(e){return o.openSocial("https://www.instagram.com/rafaeldearaujo_/")})}),Object(a["m"])("i",{class:"fab fa-twitter",onClick:t[4]||(t[4]=function(e){return o.openSocial("https://twitter.com/liltejota")})}),Object(a["m"])("i",{class:"fab fa-whatsapp",onClick:t[5]||(t[5]=function(e){return o.copyData("+55 83 986664480",o.t("contact.copy"),o.t("contact.wa"))})})])]})),_:1})])}function re(e,t,n,o,r,c){var i=Object(a["L"])("n-card");return Object(a["C"])(),Object(a["j"])(i,{class:"custom-card",hoverable:""},{default:Object(a["S"])((function(){return[Object(a["K"])(e.$slots,"default",{},void 0,!0)]})),_:3})}var ce=n("4951"),ie={setup:function(){},components:{NCard:ce["a"]}};n("3da4");const se=j()(ie,[["render",re],["__scopeId","data-v-676ffa78"]]);var le=se,ue=n("9892"),de={setup:function(){var e=Object(i["b"])(),t=e.t,n=Object(ue["a"])(),a=function(e){window.open(e,"_blank").focus()},o=function(e,t){n["info"]({content:e,meta:t,duration:5e3})},r=function(e,t,n){navigator.clipboard.writeText(e),o(t,n)};return{t:t,openSocial:a,notify:o,copyData:r}},components:{Card:le}};n("a731");const be=j()(de,[["render",oe],["__scopeId","data-v-6cb1ebfc"]]);var pe=be,me={class:"title-container"},fe={class:"experience-title"},je={href:"/files/cv-rafael-maciel.pdf",download:"",style:{"text-decoration":"none"}},Oe={key:0,class:"margin-sections"},ve={class:"experience-title"};function he(e,t,n,o,r,c){var i=Object(a["L"])("n-button"),s=Object(a["L"])("ExperienceCard");return Object(a["C"])(),Object(a["l"])("section",null,[Object(a["m"])("div",null,[Object(a["m"])("div",me,[Object(a["m"])("h2",fe,Object(a["N"])(o.t("experience.title")),1),Object(a["m"])("a",je,[Object(a["o"])(i,null,{default:Object(a["S"])((function(){return[Object(a["n"])(Object(a["N"])(o.t("experience.cv")),1)]})),_:1})])]),Object(a["o"])(a["f"],{name:"list",tag:"div",appear:""},{default:Object(a["S"])((function(){return[(Object(a["C"])(!0),Object(a["l"])(a["b"],null,Object(a["J"])(o.experiences,(function(e){return Object(a["C"])(),Object(a["j"])(s,{key:e.title,experience:e},null,8,["experience"])})),128))]})),_:1})]),5===o.experiences.length?(Object(a["C"])(),Object(a["l"])("div",Oe,[Object(a["m"])("h2",ve,Object(a["N"])(o.t("experience.education")),1),Object(a["o"])(a["f"],{name:"list",tag:"div",appear:""},{default:Object(a["S"])((function(){return[(Object(a["C"])(!0),Object(a["l"])(a["b"],null,Object(a["J"])(o.educations,(function(e){return Object(a["C"])(),Object(a["j"])(s,{key:e.title,experience:e},null,8,["experience"])})),128))]})),_:1})])):Object(a["k"])("",!0)])}n("a4d3"),n("e01a");var ge=function(e){return Object(a["F"])("data-v-4124c4c1"),e=e(),Object(a["D"])(),e},xe={key:0,class:"experience-card-title-container"},Ce={class:"experience-card-title"},ye={key:0,class:"experience-card-duration"},we={class:"flex-container"},ke={class:"experience-card-company"},Se=ge((function(){return Object(a["m"])("i",{class:"fa-solid fa-circle"},null,-1)})),Ne={key:0,class:"experience-card-location"},De={key:1,class:"experience-card-description"},Te={key:2,class:"flex-container",style:{"margin-top":"8px"}};function _e(e,t,n,o,r,c){var i=Object(a["L"])("n-button"),s=Object(a["L"])("card");return n.experience?(Object(a["C"])(),Object(a["j"])(s,{key:0,class:"experience-card"},{default:Object(a["S"])((function(){var e,t,r,c,s;return[null!==(e=n.experience)&&void 0!==e&&e.title?(Object(a["C"])(),Object(a["l"])("div",xe,[Object(a["m"])("p",Ce,Object(a["N"])(o.t(n.experience.title)),1),null!==(t=n.experience)&&void 0!==t&&t.duration?(Object(a["C"])(),Object(a["l"])("p",ye,Object(a["N"])(o.t(n.experience.duration)),1)):Object(a["k"])("",!0)])):Object(a["k"])("",!0),Object(a["m"])("div",we,[Object(a["m"])("p",ke,Object(a["N"])(n.experience.company),1),Se,null!==(r=n.experience)&&void 0!==r&&r.location?(Object(a["C"])(),Object(a["l"])("p",Ne,Object(a["N"])(o.t(n.experience.location)),1)):Object(a["k"])("",!0)]),n.experience.description?(Object(a["C"])(),Object(a["l"])("div",De,[Object(a["m"])("p",null,Object(a["N"])(o.t(n.experience.description)),1)])):Object(a["k"])("",!0),null!==(c=n.experience)&&void 0!==c&&null!==(s=c.frameworks)&&void 0!==s&&s.length?(Object(a["C"])(),Object(a["l"])("div",Te,[(Object(a["C"])(!0),Object(a["l"])(a["b"],null,Object(a["J"])(n.experience.frameworks,(function(e){return Object(a["C"])(),Object(a["j"])(i,{key:e,round:"",class:"framework-btn"},{default:Object(a["S"])((function(){return[Object(a["n"])(Object(a["N"])(e),1)]})),_:2},1024)})),128))])):Object(a["k"])("",!0)]})),_:1})):Object(a["k"])("",!0)}var Ee={props:{experience:{type:Object,required:!0}},components:{Card:le,NButton:$["a"]},setup:function(){var e=Object(i["b"])(),t=e.t;return{t:t}}};n("12ec");const Le=j()(Ee,[["render",_e],["__scopeId","data-v-4124c4c1"]]);var Ae=Le,Me=[{company:"Trio",title:"experience.engineer",location:"experience.location.trio",duration:"experience.duration.trio",description:"experience.descriptions.trio",frameworks:["Vue.js","Express.js","Node.js","BigQuery"]},{company:"Xtra Holdings LLC",title:"experience.engineer",location:"experience.location.xtra",duration:"experience.duration.xtra",description:"experience.descriptions.xtra",frameworks:["Vue.js","Express.js","Node.js","MongoDB"]},{company:"Lella.co",title:"experience.engineer",location:"experience.location.lella",duration:"experience.duration.lella",description:"experience.descriptions.lella",frameworks:["React","Angular","Express.js","Node.js","MongoDB"]},{company:"SPLAB",title:"experience.analyst",location:"experience.location.splab",duration:"experience.duration.ingenico",description:"experience.descriptions.ingenico",frameworks:["React","Node.js","Express.js","Sequelize","SQL"]},{company:"SPLAB",title:"experience.front",location:"experience.location.splab",duration:"experience.duration.efinance",description:"experience.descriptions.efinance",frameworks:["AngularJS"]}],Ie=[{company:"UFCG",title:"experience.bachelor",location:"experience.location.splab",duration:"experience.duration.bachelor"}],Pe={components:{ExperienceCard:Ae,NButton:$["a"]},setup:function(){var e=Object(i["b"])(),t=e.t,n=Object(I["m"])([]),a=Object(I["m"])([]),o=function(e,t,n){return new Promise((function(a){setTimeout((function(){n.value.push(e),a()}),400*t)}))};return Object(P["F"])((function(){Me.forEach(function(){var e=Object(Q["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o(t,a,n);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Ie.forEach(function(){var e=Object(Q["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o(t,n,a);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())})),{t:t,experiences:n,educations:a}}};n("94c5");const Be=j()(Pe,[["render",he],["__scopeId","data-v-922fb53c"]]);var Re=Be,Fe=["AboutMe","Experience","Contact"],Je={components:{ThemeSwticher:E,LanguageSelector:F,AboutMe:ne,Contact:pe,Experience:Re},setup:function(){var e=Object(a["I"])([]),t=Object(i["b"])(),n=t.t,o=Object(a["I"])(null),r=Object(a["I"])(null);Object(a["A"])((function(){Fe.forEach((function(t){e.value.push(t)})),o.value=Fe[0]}));var c=function(e){o.value=e};return{currentTabs:e,t:n,selectedTab:o,selectTab:c,tabsContainer:r}}};n("9f0d");const qe=j()(Je,[["render",S],["__scopeId","data-v-5c73f24c"]]);var Ve=qe,ze={name:"App",components:{Navbar:v,TabContainer:Ve,NNotificationProvider:r["a"],NConfigProvider:c["b"]},setup:function(){var e=Object(i["b"])(),t=e.t,n=e.locale,o=Object(s["b"])(),r=Object(a["h"])((function(){return o.getters["Settings/theme"]})),c=Object(a["h"])((function(){return"dark"===r.value?h:g}));return Object(a["A"])((function(){"pt-BR"===navigator.language&&(n.value="pt")})),{currentTheme:c,t:t}}};n("831f");const Ge=j()(ze,[["render",o]]);var We=Ge,Ue={navbar:{job:"Software Engineer",aboutme:"About me",experience:"Experience",education:"Education",contact:"Contact"},aboutme:{hey:"Hey, my name is",name:"Rafael Maciel",description:"Software engineer with over 4 and a half years of experience in software development, \n     focused on web applications. A proactive developer working remotely for global companies for over 2 and a half\n     years, I've been part of teams with developers from around the world. Communication and teamwork make me a great\n     addition to any development team.",who:"Who am I?",bio:"I'm from Campina Grande, Paraíba, Brazil and I'm {age} years old. My favorite programming language\n     is JavaScript and my favorite framework to work is definitely Vue.js. In my free time I usually like to\n     play games, watch movies, study and spend time with my family and girlfriend.",bioWork:"I've started to study Computer Science in 2015 because of my love for gaming, after a couple of\n     semesters I've started to work in web development, inicially only on Frontend. It was a really good experience \n     for me, an then I got the oportunity to work also on the backend. After a while I became a Full Stack\n     developer.",skills:"Featured Skills"},tabContainer:{AboutMe:"About Me",Experience:"Experience",Contact:"Contact"},name:"Rafael Maciel",contact:{title:"Get in touch",description:"You can contact me through any of the social networks or email listed below. I will try to return it as soon as possible.",copy:"Copied to clipboard",wa:"Phone number successfully copied",email:"Email sucessfully copied"},experience:{title:"Work Experience",education:"Education",cv:"Download CV",engineer:"Software Engineer",analyst:"Junior System Analyst",front:"Front End Developer",bachelor:"Bachelor in Computer Science",location:{trio:"Boston, US - Remote",xtra:"Sarasota, US - Remote",lella:"Krakow, PL - Remote",splab:"Campina Grande, BR"},duration:{trio:"Jul/2021 - Current",xtra:"Nov/2020 - Jun/2021",lella:"Feb/2020 - Dec/2020",ingenico:"Jan/2019 - Feb/2020",efinance:"Dec/2017 - Nov/2018",bachelor:"Jan/2015 - Nov/2019"},descriptions:{trio:"Worked on two different projects for the same client. At first,\n       developed a traceability system that track beers all the way to their raw materials, with some data visualizations\n       about different parts of the process. The other project was about creating a demonstration project about traceability\n       for different types of materias.",xtra:"Developed a private social network for the company inspired on the huge social networks today, with a lot\n       of different features like: Posts, Groups, Chat, Stories and more.",lella:"Developed a mobile application for users to connect with professionals that offer different types of services, \n       but don’t have an actual place to perform these services. Also worked on a catalog web application to display and filter\n       all the services available.",ingenico:"Worked on three different projects. TCoM Desktop is a desktop application to test, load, clean and verify\n       the company’s credit card machines. TCoM Loader extracted the load feature from TCoM Desktop to a new desktop platform.\n       LiTT is a web application for data management and visualization for TCoM Desktop and TCoM Loader.",efinance:"Worked in a web application to provide finance management to ensure companies."}},language:{en:"EN",pt:"PT"}},Qe={navbar:{job:"Engenheiro de Software",aboutme:"Sobre",experience:"Experiência",education:"Educação",contact:"Contato"},aboutme:{hey:"Olá, meu nome é",name:"Rafael Maciel",description:"Engenheiro de Software com mais de 4 anos e meio de experiência em desenvolvimento de software,\n     com foco em aplicações web. Um desenvolvedor proativo que trabalha remotamente para empresas estrangeiras por\n     mais de 2 anos e meio, já fiz partes de times com desenvolvedores de toda parte do mundo. COmunicação e\n     trabalho em equipe me tornam uma ótima adição para qualquer time de desenvolvimento.",who:"Quem sou eu?",bio:"Sou de Campina Grande - PB, Brasil e tenho {age} anos. Minha linguagem de programação favorita é JavaScript e\n     meu framework favorito com certeza é o Vue.js. No meu tempo livre eu gosto de jogar, assistir séries e filmes, passar\n     tempo com minha família e com a minha namorada.",bioWork:"Eu comecei a estudar Ciência da Computação em 2015 por causa do meu gosto em jogos, depois de algums semestres\n     comecei a trabalhar em desenvolvimento web, inicialmente como Frontend. Foram oportunidades muito boas para mim, a partir\n     disso eu também ganhei oportunidades para trabalhar no backend das aplicações. Depois de  muito esforço me tornei um\n     desenvolvedor Full Stack.",skills:"Skills em destaque"},tabContainer:{AboutMe:"Sobre",Experience:"Experiência",Contact:"Contato"},name:"Rafael Maciel",contact:{title:"Entre em contato",description:"Pode entrar em contato comigo por qualquer uma das rede sociais ou email listado abaixo. Vou retornar o mais rápido possível.",copy:"Copiado para o clipboard",wa:"Telefone de contato copiado com sucesso",email:"Email copiado com sucesso"},experience:{title:"Experiência Profissional",education:"Educação",cv:"Download CV",engineer:"Engenheiro de Software",analyst:"Analista de Sistemas Júnior",front:"Desenvolvedor Front end",bachelor:"Bacharel em Ciência da Computação",location:{trio:"Boston, EUA - Remoto",xtra:"Sarasota, EUA - Remoto",lella:"Krakow, PL - Remoto",splab:"Campina Grande, BR"},duration:{trio:"Jul/2021 - Atualmente",xtra:"Nov/2020 - Jun/2021",lella:"Fev/2020 - Dez/2020",ingenico:"Jan/2019 - Fev/2020",efinance:"Dez/2017 - Nov/2018",bachelor:"Jan/2015 - Nov/2019"},descriptions:{trio:"Trabalhei em dois projetos diferentes para o mesmo cliente., Inicialmente, desenvolvi um sistema de rastreio\n       para analisar todo o processo de criação de cervejas, desde sua matéria prima, com visualizações de dados de todas as\n       etapas. No outro projeto desenvolvi um sistema de demonstrações para rastreio de diferentes tipos de materiais.",xtra:"Desenvolvi uma rede social privada para o cliente que se inspira nas grandes redes sociais que temos atualmente,\n      com várias funcionalidades como: Posts, Grupos, Chat, Stories e etc.",lella:"Desenvolvi uma aplicação mobile para usuários se conectarem com profissionais que oferecem diversos tipos de serviços,\n       mas nào tem local específico para realizar esses serviços. Também trabalhei em um sistema web de catálogo para mostrar\n       os serviços e os profissionais cadastrados no sistema.",ingenico:"Trabalhei em 3 projetos distintos. TCoM Desktop é um aplicativo desktop para testar, carregar, limpar e\n       verificar as máquinas de cartão de crédito da empresa cliente. TCoM Loader se criou a partir da extração da funcionalidade\n       de carregar as máquinas para outro sistema distinto. Por fim, o LiTT foi uma plataforma web para ferencia e visualização\n       de dados para o TCoM Desktop e Loader.",efinance:"Trabalhei em uma aplicação web para fornecer gestão financeira para as empresas clientes."}},language:{en:"EN",pt:"PT"}},He=Object(i["a"])({legacy:!1,locale:"en",fallbackLocale:"en",messages:{en:Ue,pt:Qe}}),Ke={theme:function(e){return e.theme}},Ye={setTheme:function(e,t){var n=e.commit;n("setTheme",t)}},Xe={setTheme:function(e,t){e.theme=t}},Ze={theme:localStorage.getItem("theme")||"light"},$e={namespaced:!0,state:Ze,getters:Ke,actions:Ye,mutations:Xe},et=!1,tt=new s["a"].Store({modules:{Settings:$e},state:{},mutations:{},actions:{},getters:{},strict:et}),nt=Object(a["i"])(We);nt.use(tt),nt.use(He),nt.mount("#app")},6863:function(e,t,n){},7056:function(e,t,n){},"7c5f":function(e,t,n){},8307:function(e,t,n){},"831f":function(e,t,n){"use strict";n("99be")},"8b7e":function(e,t,n){"use strict";n("8307")},"94c5":function(e,t,n){"use strict";n("268e")},"99be":function(e,t,n){},"9f0d":function(e,t,n){"use strict";n("7c5f")},a100:function(e,t,n){},a731:function(e,t,n){"use strict";n("02f1")},b288:function(e,t,n){"use strict";n("a100")},c526:function(e,t,n){},cf14:function(e,t,n){"use strict";n("6863")},e2ec:function(e,t,n){"use strict";n("7056")}});
//# sourceMappingURL=app.8307a8e4.js.map