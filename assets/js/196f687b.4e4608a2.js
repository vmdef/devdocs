"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[20840],{54269:function(e,t,i){i.r(t),i.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var a=i(83117),o=i(80102),n=(i(67294),i(3905)),s=i(13904),d=["components"],r={title:"Session fixation",sidebar_position:10,tags:["Coding guidelines","Policies","Security"]},l=void 0,c={unversionedId:"development/policies/security/session-fixation",id:"development/policies/security/session-fixation",title:"Session fixation",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/session-fixation.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/session-fixation",permalink:"/devdocs/general/development/policies/security/session-fixation",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/session-fixation.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653975038,formattedLastUpdatedAt:"31/05/2022",sidebarPosition:10,frontMatter:{title:"Session fixation",sidebar_position:10,tags:["Coding guidelines","Policies","Security"]},sidebar:"coding",previous:{title:"Configuration leakage",permalink:"/devdocs/general/development/policies/security/configinfo-leakage"},next:{title:"Denial of service",permalink:"/devdocs/general/development/policies/security/dos"}},m={},p=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],h={toc:p};function u(e){var t=e.components,i=(0,o.Z)(e,d);return(0,n.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,(0,a.Z)({frontMatter:r},void 0!==c?{metadata:c}:{},{mdxType:"MoodlePageBanner"})),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"This page forms part of the ",(0,n.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,n.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Session fixation definition from OWASP")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Session fixation")," is an attack that permits an attacker to hijack a valid user session. ","[...]"," The attack consists of obtaining a valid session ID (for example, by connecting to the application), inducing a user to authenticate himself with that session ID, and then hijacking the user-validated session by the knowledge of the used session ID. The attacker has to provide a legitimate Web application session ID and try to make the victim's browser use it. ","[...]"," The session fixation attack is a class of ",(0,n.kt)("strong",{parentName:"p"},"session hijacking"),", which steals the established session between the client and the Web Server after the user logs in. Instead, the session fixation attack fixes an established session on the victim's browser, so the attack starts before the user logs in.",(0,n.kt)("br",null)))),(0,n.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,n.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,n.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Coding"},"Coding")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://owasp.org/www-community/attacks/Session_fixation"},"Session fixation in OWASP"))))}u.isMDXComponent=!0}}]);