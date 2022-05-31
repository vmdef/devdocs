"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[73131],{47366:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var l=a(83117),n=a(80102),i=(a(67294),a(3905)),r=a(13904),o=["components"],s={title:"Moodle 1.6.1",tags:["Release notes"],sidebar_position:1,moodleVersion:"1.6.1"},u=void 0,d={unversionedId:"releases/1.6/1.6.1",id:"releases/1.6/1.6.1",title:"Moodle 1.6.1",description:"Release date: 20th July 2006",source:"@site/general/releases/1.6/1.6.1.md",sourceDirName:"releases/1.6",slug:"/releases/1.6/1.6.1",permalink:"/devdocs/general/releases/1.6/1.6.1",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.6/1.6.1.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653975038,formattedLastUpdatedAt:"31/05/2022",sidebarPosition:1,frontMatter:{title:"Moodle 1.6.1",tags:["Release notes"],sidebar_position:1,moodleVersion:"1.6.1"},sidebar:"releaseNotes",previous:{title:"Moodle 1.6",permalink:"/devdocs/general/releases/1.6"},next:{title:"Moodle 1.6.2",permalink:"/devdocs/general/releases/1.6/1.6.2"}},p={},m=[{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"New Features",id:"new-features",level:2},{value:"Known Problems",id:"known-problems",level:2},{value:"Related",id:"related",level:2}],c={toc:m};function k(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,(0,l.Z)({frontMatter:s},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"Release date: 20th July 2006"),(0,i.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed regression in Turkish locale handling"),(0,i.kt)("li",{parentName:"ul"},"Authorize and Paypal enrolment plugin cleanup"),(0,i.kt)("li",{parentName:"ul"},"Fixed serious problem with failing Database restore"),(0,i.kt)("li",{parentName:"ul"},"Fixed restore of HotPot module containing attempts"),(0,i.kt)("li",{parentName:"ul"},"Minor Database module fixes"),(0,i.kt)("li",{parentName:"ul"},"National characters in graphs now work for most languages out of the box"),(0,i.kt)("li",{parentName:"ul"},"Reviewed and fixed all *nix locale codes in language packs"),(0,i.kt)("li",{parentName:"ul"},"Fixed problems when using Resources with Blocks on the front page"),(0,i.kt)("li",{parentName:"ul"},"Fixed missing events on the first day of month in calendar"),(0,i.kt)("li",{parentName:"ul"},"Fixed several problems in Lesson - scores, branch tables, HTML editor issues"),(0,i.kt)("li",{parentName:"ul"},"Fixed broken intermodule relinking of absolute paths - please do not use course backups from original 1.6"),(0,i.kt)("li",{parentName:"ul"},"PDF byteserving problems caused by incorrect partial content length solved"),(0,i.kt)("li",{parentName:"ul"},"Fixed several regressions in handling of multiple groups"),(0,i.kt)("li",{parentName:"ul"},"Fixed alphabet problems in Glossary"),(0,i.kt)("li",{parentName:"ul"},"Chameleon theme fixes and enhancements"),(0,i.kt)("li",{parentName:"ul"},"Fixed all hard coded admin paths"),(0,i.kt)("li",{parentName:"ul"},"Fixed moving of course sections"),(0,i.kt)("li",{parentName:"ul"},"Fixed grading of Essays in Quiz"),(0,i.kt)("li",{parentName:"ul"},"Several Quiz regrading problems solved"),(0,i.kt)("li",{parentName:"ul"},"Questions are now exported into backupdata directory"),(0,i.kt)("li",{parentName:"ul"},"Added workaround for problems when editing two quizzes in one browser"),(0,i.kt)("li",{parentName:"ul"},"Lots of other Quiz related bugs fixed - thanks Tim!"),(0,i.kt)("li",{parentName:"ul"},"Fixed IE insecure items warning on sites with https login"),(0,i.kt)("li",{parentName:"ul"},"Improved cookie test on the login page"),(0,i.kt)("li",{parentName:"ul"},"Potential security issue with unzipping maliciously-crafted zip files fixed"),(0,i.kt)("li",{parentName:"ul"},"Sanitized input parameters in help.php"),(0,i.kt)("li",{parentName:"ul"},"Calendar view.php now respects forcelogin setting"),(0,i.kt)("li",{parentName:"ul"},"And lots of other minor fixes worth upgrading")),(0,i.kt)("h2",{id:"new-features"},"New Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enhanced frontpage settings - front page can now be different for logged in users, changed category list display"),(0,i.kt)("li",{parentName:"ul"},"Improved administration page layout"),(0,i.kt)("li",{parentName:"ul"},"Possibility to change graph font for all locales - moodledata/lang/default.ttf takes precedence over lib/default.ttf"),(0,i.kt)("li",{parentName:"ul"},"Local language packs may also contain default.ttf"),(0,i.kt)("li",{parentName:"ul"},"Backported improved lang.php from HEAD"),(0,i.kt)("li",{parentName:"ul"},"New config.php option $CFG->allowvisiblecoursesinhiddencategories")),(0,i.kt)("h2",{id:"known-problems"},"Known Problems"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Broken images in published question categories"),(0,i.kt)("li",{parentName:"ul"},"Small number of sites reports problems with Quiz upgrade - please always do a full database backup before any upgrade!"),(0,i.kt)("li",{parentName:"ul"},"Workshop backup/restore and Workshop import from other course not supported"),(0,i.kt)("li",{parentName:"ul"},"Additional feature 'Sidebar Block' uses section 1000, but 1000 is not included in the backup")),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Third party modules should be already updated for 1.6.x - you must install new versions before UTF-8 migration!"),(0,i.kt)("li",{parentName:"ul"},"New integration of phpMyAdmin available - fixes upstream security problems and compatibility with PHP 5")))}k.isMDXComponent=!0}}]);