"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[96334],{39195:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return u},toc:function(){return m}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),i=r(13904),l=["components"],n={title:"Moodle 2.2.6",tags:["Release notes","Moodle 2.2"],sidebar_position:6,moodleVersion:"2.2.6"},d=void 0,u={unversionedId:"releases/2.2/2.2.6",id:"releases/2.2/2.2.6",title:"Moodle 2.2.6",description:"Release date: 12 November, 2012",source:"@site/general/releases/2.2/2.2.6.md",sourceDirName:"releases/2.2",slug:"/releases/2.2/2.2.6",permalink:"/devdocs/general/releases/2.2/2.2.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.2/2.2.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.2",permalink:"/devdocs/general/tags/moodle-2-2"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653975038,formattedLastUpdatedAt:"31/05/2022",sidebarPosition:6,frontMatter:{title:"Moodle 2.2.6",tags:["Release notes","Moodle 2.2"],sidebar_position:6,moodleVersion:"2.2.6"},sidebar:"releaseNotes",previous:{title:"Moodle 2.2.5",permalink:"/devdocs/general/releases/2.2/2.2.5"},next:{title:"Moodle 2.2.7",permalink:"/devdocs/general/releases/2.2/2.2.7"}},p={},m=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:m};function h(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,a.Z)({frontMatter:n},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 12 November, 2012"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.2.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.2.6"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-21801"},"MDL-21801")," - References to the non-functional Powerpoint import option have been removed from the Lesson module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33166"},"MDL-33166")," - A capability has been introduced to consistently exempt specific users from forum auto-subscriptions and forced subscriptions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34607"},"MDL-34607")," - Folder resources now show files in sorted order")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35370"},"MDL-35370")," - Blank answers in Cloze type quiz questions are treated accordingly, when an answer of zero is expected"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33374"},"MDL-33374")," - When adding or updating a user profile, the action button displays 'Create user' and 'Update user' relatively"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27786"},"MDL-27786"),' - The title field of a new calendar event is now labelled "Event title" instead of "Name"'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28235"},"MDL-28235")," - The close button on help dialogues have changed to provide greater accessibility. ",(0,s.kt)("em",{parentName:"li"},"(Note: if debugging is turned on, a string error will appear during the upgrade process. This is expected and will be resolved once the upgrade process is complete.)"))),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30667"},"MDL-30667")," - Maximum upload limits are enforced consistently in relation to various system variables")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=216155"},"MSA-12-0057")," Access issue through repository"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=216156"},"MSA-12-0058")," Possible form data manipulation issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=216157"},"MSA-12-0059")," Information leak in Database activity module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=216158"},"MSA-12-0060")," Cross-site scripting vulnerability in YUI2"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=216159"},"MSA-12-0061")," Remote code execution through Portfolio API"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=216160"},"MSA-12-0062")," Information leak in Database activity module")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35397"},"MDL-35397")," - Notifications page 'many other contributors' link leads to appropriate credits page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35754"},"MDL-35754")," - Quizzes in pop-up windows now work correctly")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.2.6"},"Notes de mise \xe0 jour de Moodle 2.2.6"))))}h.isMDXComponent=!0}}]);