"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[65167],{70954:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(83117),l=a(80102),o=(a(67294),a(3905)),i=a(13904),r=["components"],s={title:"Moodle 1.5",tags:["Release notes"],sidebar_position:-105,moodleVersion:"1.5"},u=void 0,p={unversionedId:"releases/1.5",id:"releases/1.5",title:"Moodle 1.5",description:"Release date: 5th June 2005",source:"@site/general/releases/1.5.md",sourceDirName:"releases",slug:"/releases/1.5",permalink:"/devdocs/general/releases/1.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655188563,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:-105,frontMatter:{title:"Moodle 1.5",tags:["Release notes"],sidebar_position:-105,moodleVersion:"1.5"},sidebar:"releaseNotes",previous:{title:"Moodle 1.6.9",permalink:"/devdocs/general/releases/1.6/1.6.9"},next:{title:"Moodle 1.5.1",permalink:"/devdocs/general/releases/1.5/1.5.1"}},d={},m=[{value:"Headline features",id:"headline-features",level:3},{value:"Other major system-wide improvements",id:"other-major-system-wide-improvements",level:3},{value:"Activity module improvements",id:"activity-module-improvements",level:3},{value:"Translations",id:"translations",level:2}],c={toc:m};function h(e){var t=e.components,a=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,(0,n.Z)({frontMatter:s},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,o.kt)("p",null,"Release date: 5th June 2005"),(0,o.kt)("p",null,"Here you can find the release notes of the current stable version of Moodle. ",(0,o.kt)("strong",{parentName:"p"},"If you experience any bugs in this release, please report them at ",(0,o.kt)("a",{parentName:"strong",href:"http://moodle.org/bugs"},"moodle.org/bugs")," so we can fix them in the next release.")),(0,o.kt)("h3",{id:"headline-features"},"Headline features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Web pages are compliant with XHTML Transitional 1.0"),(0,o.kt)("li",{parentName:"ul"},"Improved ",(0,o.kt)("strong",{parentName:"li"},"Accessibility"),", aiming for compliance with WAI (W3C), SENDA (UK) and Section 508 (US) criteria."),(0,o.kt)("li",{parentName:"ul"},"Very strong ",(0,o.kt)("strong",{parentName:"li"},"new Themes system"),", allowing cascading themes, user themes, course themes, with very fine control of every page in Moodle via CSS."),(0,o.kt)("li",{parentName:"ul"},"Integrated ",(0,o.kt)("strong",{parentName:"li"},"Messaging")," feature for direct communication between all users in the site, featuring realtime popup windows, notification, email copies, blocking, history, WYSIWYG editor, etc"),(0,o.kt)("li",{parentName:"ul"},"Forum read/unread tracking with highlights allows you to see new postings at a glance and to control how these are displayed (per forum, per user or per site)."),(0,o.kt)("li",{parentName:"ul"},"New ",(0,o.kt)("strong",{parentName:"li"},"Blocks")," system, allowing multiple copies of blocks and better block configuration"),(0,o.kt)("li",{parentName:"ul"},"Full support for ",(0,o.kt)("strong",{parentName:"li"},"Daylight Savings Time")," in every locality around the globe, so everyone always see the correct local time for all events."),(0,o.kt)("li",{parentName:"ul"},"New ",(0,o.kt)("strong",{parentName:"li"},"extended gradebook")," allowing custom weighting of different activities, setting extra grades (or taking out others) and improved display and sorting options"),(0,o.kt)("li",{parentName:"ul"},"Users can be required to agree to a '''Site Policy\n'''")),(0,o.kt)("h3",{id:"other-major-system-wide-improvements"},"Other major system-wide improvements"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Admin")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'New "maintenance mode" allows the admin to temporarily disable a site (during upgrades, for example).'),(0,o.kt)("li",{parentName:"ul"},"Moodle can automatically download a new list of timezones from moodle.org or elsewhere and install it to the database (Olson files are supported too)"),(0,o.kt)("li",{parentName:"ul"},"New version of Moodle MySQL Admin module (available separately)"),(0,o.kt)("li",{parentName:"ul"},"New calendar options page provides user interface to configure the behavior of the calendar")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Authentication")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New Shibboleth Support"),(0,o.kt)("li",{parentName:"ul"},"New CAS Support"),(0,o.kt)("li",{parentName:"ul"},"New PAM Support"),(0,o.kt)("li",{parentName:"ul"},"Improved LDAP integration, so that LDAP can now control course creation, group assignments. Increased performance and scalability performing user synchronisation."),(0,o.kt)("li",{parentName:"ul"},"Certain user fields can be locked by the admin when using external authentication"),(0,o.kt)("li",{parentName:"ul"},'Improved session handling now detects "crossover" sessions that we have found in some buggy PHP installations and prevents them'),(0,o.kt)("li",{parentName:"ul"},"Sessions can now be stored in the database (good for clustered installations!)"),(0,o.kt)("li",{parentName:"ul"},"Users can be forced to change their password")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Files")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Standardised file browsing in all areas"),(0,o.kt)("li",{parentName:"ul"},"Improved uploading, with support for automated Virus scanning of new documents using ClamAV."),(0,o.kt)("li",{parentName:"ul"},"Slasharguments now work also on IIS (upgrade to PHP 4.3.11 needed for ISAPI)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Filters")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Standardised filter library makes it trivial to write new filters that require searching and highlighting of text."),(0,o.kt)("li",{parentName:"ul"},"Huge efficiency improvements for complex filters like the Glossary filter"),(0,o.kt)("li",{parentName:"ul"},"New Tidy filter uses the W3C Tidy program to (optionally) clean all user-entered texts throughout the site and convert it to valid XHTML code"),(0,o.kt)("li",{parentName:"ul"},'Improved censorship filter, now "blacks out" words using styles and uses a word list from the language packs.'),(0,o.kt)("li",{parentName:"ul"},"Improved Flash MP3 player, now shows progress bar while downloading and playing"),(0,o.kt)("li",{parentName:"ul"},"Improved Multi-language filter is faster, more forgiving of syntax errors, and uses new editor-friendly syntax: ",(0,o.kt)("span",{lang:"en"})),(0,o.kt)("li",{parentName:"ul"},"Auto-linking filters (glossary, activities) can work to link all the occurrences (old behaviour), once for each text block or only once for the whole page ($CFG->filtermatchonepertext, $CFG->filtermatchoneperpage)."),(0,o.kt)("li",{parentName:"ul"},"More text can now be filtered in Moodle, including activity names, headings and other such small texts. This makes it possible to design completely multi-lingual sites in Moodle that fully appears in the user's chosen language.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Themes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modules can provide standard styles"),(0,o.kt)("li",{parentName:"ul"},"Themes can override required styles of other themes"),(0,o.kt)("li",{parentName:"ul"},"Users and courses can choose their own themes if the admin allows it"),(0,o.kt)("li",{parentName:"ul"},"Implementation of tabs interface on many pages"),(0,o.kt)("li",{parentName:"ul"},"Modules, Blocks and Languages can define their own standard styles")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"HTML Editor")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The toolbuttons offered in the editor toolbar are now configurable by the admin"),(0,o.kt)("li",{parentName:"ul"},"Search and Replace text within the editor text area (with optional use of regular expressions)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Course management")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transparent Blackboard 5.5 course importing (partial 6.0 support)"),(0,o.kt)("li",{parentName:"ul"},"The new meta-courses allow to get users automatically enroled in a general course (the metacourse) when enroled in any of the metacourse-linked courses"),(0,o.kt)("li",{parentName:"ul"},"New tool to copy content from a course to other.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New blocks")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTML block: allowing to place arbitrary content (text, images links) in any course mainpage"),(0,o.kt)("li",{parentName:"ul"},"Remote RSS feed: allows to display external news channels inside a Moodle course"),(0,o.kt)("li",{parentName:"ul"},"Glossary Selection: to choose and display content from a Moodle glossary in course mainpage")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Calendar")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Major speed improvements for sites with a large number of courses using groups"),(0,o.kt)("li",{parentName:"ul"},"Repeating events can now be modified or deleted all at the same time or separately as before"),(0,o.kt)("li",{parentName:"ul"},'New "remember filter settings" preference that allows calendar filters to remember their status between logins')),(0,o.kt)("h3",{id:"activity-module-improvements"},"Activity module improvements"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Assignment")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Completely refactored into a new class-based design, allowing new plugin-assignment types"),(0,o.kt)("li",{parentName:"ul"},"New Online Text assignment type that doesn't require files and allows inline comments when grading - this new type effectively replaces the old Journal module"),(0,o.kt)("li",{parentName:"ul"},"Vastly improved grading interface for handling large classes"),(0,o.kt)("li",{parentName:"ul"},"New configuration options to disable late submission and to e-mail alerts to teachers when students submit new work")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Chat")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Streamlined interface looks smoother, works faster, even without using the optional server daemon"),(0,o.kt)("li",{parentName:"ul"},"Blocks can now be added to chat pages (e.g. for additional information)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Choice")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rewritten to allow any number of choices"),(0,o.kt)("li",{parentName:"ul"},'The number of users per choice can be limited, which allows it to be used as tool for "signing up" to an array of options.'),(0,o.kt)("li",{parentName:"ul"},"You can now download the results of the choice to XLS or a TXT file")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Forum")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Powerful new Google-like forum searching tools"),(0,o.kt)("li",{parentName:"ul"},"Forum read/unread tracking - unread messages are highlighted on the course page, forum page, discussion listing and the discussion view"),(0,o.kt)("li",{parentName:"ul"},"The tracking system may be disabled by teachers/users"),(0,o.kt)("li",{parentName:"ul"},"User profiles show all posts by a user, as well as all discussions"),(0,o.kt)("li",{parentName:"ul"},"When admins edit user messages, a notice is attached"),(0,o.kt)("li",{parentName:"ul"},"Discussion listing shows the last user who posted to each discussion and when it was, with a direct link to that post"),(0,o.kt)("li",{parentName:"ul"},"In group-enabled forums the discussion listing shows the group the thread applies to, with a link to the group description page.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Glossary")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New setting to enable/disable the print view of each glossary."),(0,o.kt)("li",{parentName:"ul"},"New search system looks for words everywhere (instead of doing exact phrase match)."),(0,o.kt)("li",{parentName:"ul"},"More information is sent to logs to be able to track activity better.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Journal")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Journal module has not changed since 1.4, and is now deprecated. The upgrade procedure will convert all your Journal activities into Online Assignments, and hide all the old Journal activities. If you don't want this to happen, then define this in your config.php: $CFG->noconvertjournals = true;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Lesson")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now supports timed Lessons"),(0,o.kt)("li",{parentName:"ul"},"Can create practice Lessons (grades are not stored)"),(0,o.kt)("li",{parentName:"ul"},"Option for students to view points earned while taking the Lesson"),(0,o.kt)("li",{parentName:"ul"},"Allow students to review their answers before submitting the Lesson"),(0,o.kt)("li",{parentName:"ul"},"New Slide Show Mode (only branch tables are displayed as slides)"),(0,o.kt)("li",{parentName:"ul"},"New Left Menu (for enabled branch tables only)"),(0,o.kt)("li",{parentName:"ul"},"Lessons can now be Password Protected"),(0,o.kt)("li",{parentName:"ul"},"A Tree View can be used for the Lesson creation screen"),(0,o.kt)("li",{parentName:"ul"},"Students can post their high scores"),(0,o.kt)("li",{parentName:"ul"},"New option to save a Lesson's settings as defaults for new lessons in the same course"),(0,o.kt)("li",{parentName:"ul"},"Can delete a student's attempts"),(0,o.kt)("li",{parentName:"ul"},"New page Jumps:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Previous Page"),(0,o.kt)("li",{parentName:"ul"},"Unseen question within a branch"),(0,o.kt)("li",{parentName:"ul"},"Random question within a branch"),(0,o.kt)("li",{parentName:"ul"},"Unseen question within a cluster"))),(0,o.kt)("li",{parentName:"ul"},"Added functionality to view Lesson statistics"),(0,o.kt)("li",{parentName:"ul"},"New question type: Essay. Teachers can view each essay and write comments, assign a grade, and then email it all to the student"),(0,o.kt)("li",{parentName:"ul"},"New question creation interface")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quiz")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can handle adaptive questions, i.e., questions that allow the student to interact with them repeatedly within the same quiz attempt and that can change in response to student answers."),(0,o.kt)("li",{parentName:"ul"},"Student can be allowed to try a question again immediately within the same quiz attempt until they get the answer right."),(0,o.kt)("li",{parentName:"ul"},"There is a penalty mechanism that deducts a specified fraction of the mark for each wrong attempt at a question."),(0,o.kt)("li",{parentName:"ul"},"Allows questions rendered and scored externally (e.g., by mathematical assessment engines) to be integrated seamlessly into Moodle quizzes via the RQP web services protocol."),(0,o.kt)("li",{parentName:"ul"},"Is prepared for the handling of IMS QTI questions once web services for these become available."),(0,o.kt)("li",{parentName:"ul"},"New tabbed teacher interface for previewing, editing, and reviewing quizzes."),(0,o.kt)("li",{parentName:"ul"},'New "improved security" mode shows quiz in a separate full-screen window, with many browser features disabled'),(0,o.kt)("li",{parentName:"ul"},"Quizzes can be presented to students in several pages. The number of questions per page is selectable by the teacher."),(0,o.kt)("li",{parentName:"ul"},"Blocks can now be added to quiz pages (to show results table, or additional information etc)"),(0,o.kt)("li",{parentName:"ul"},"Better and cleaner interface for question selection and management in the database. Selected questions can be added to quiz, moved to other categories or deleted en mass."),(0,o.kt)("li",{parentName:"ul"},"Random questions are now added to the quiz question list with a dedicated button, leaving a cleaner interface at questions database without phantom placeholders"),(0,o.kt)("li",{parentName:"ul"},"Final grade can be a fractional number, with teacher-defined decimal figures"),(0,o.kt)("li",{parentName:"ul"},"Improved results page with user-selectable display of columns, cleaner sorting and new mark display options"),(0,o.kt)("li",{parentName:"ul"},"Questions can be edited with one click from the improved quiz preview and question preview screens."),(0,o.kt)("li",{parentName:"ul"},"Questions can be copied with one click, to allow question variations to be created with ease."),(0,o.kt)("li",{parentName:"ul"},"Revamped question categories structures and editing interface."),(0,o.kt)("li",{parentName:"ul"},"Categories now can contain nested subcategories and can be re-ordered."),(0,o.kt)("li",{parentName:"ul"},"It is possible to select whether questions from categories, and or their subcategories are displayed on the question edit page."),(0,o.kt)("li",{parentName:"ul"},"It is now possible to select whether to add random questions from a parent category alone, or from a parent category and its sub-categories."),(0,o.kt)("li",{parentName:"ul"},"Quiz creators are prevented from changing the question set of quizes that have had student responses."),(0,o.kt)("li",{parentName:"ul"},"Recognition, and rejection, of overlapping/redundant questions has been improved."),(0,o.kt)("li",{parentName:"ul"},"The display of questions in longer quiz categories on the quiz editing page is now paginated."),(0,o.kt)("li",{parentName:"ul"},"New export types - IMS QTI (2.0) and xhtml. Improvements & fixes to others."),(0,o.kt)("li",{parentName:"ul"},"New import type - Hot Potato. Improvements & fixes to others.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scorm")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The module is now fully conformant with the SCORM 1.2 standard."),(0,o.kt)("li",{parentName:"ul"},"User result data storage and reporting was improved."),(0,o.kt)("li",{parentName:"ul"},"AICC packages can now be imported.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Survey")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Graph formatting has been improved (labels are more readable)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Wiki")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Changes to wiki pages are now monitored and displayed in Recent Activity block"),(0,o.kt)("li",{parentName:"ul"},"Several under the hood improvements to backup/restore and other routines that enhance the reliability of wikis")),(0,o.kt)("h2",{id:"translations"},"Translations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.5"},"Notes de mise \xe0 jour de Moodle 1.5"))))}h.isMDXComponent=!0}}]);