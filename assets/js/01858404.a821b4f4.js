"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[50381],{13164:function(e,t,s){s.r(t),s.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return f},toc:function(){return u}});var i=s(83117),n=s(80102),r=(s(67294),s(3905)),l=s(13904),a=["components"],o={title:"File Browser API",tags:["File API","Files"]},d=void 0,f={unversionedId:"apis/subsystems/files/browsing",id:"apis/subsystems/files/browsing",title:"File Browser API",description:"The File Browser API is a supplemental API which can be used to fetch information relating to Files stored in the Moodle File API.",source:"@site/docs/apis/subsystems/files/browsing.md",sourceDirName:"apis/subsystems/files",slug:"/apis/subsystems/files/browsing",permalink:"/devdocs/docs/apis/subsystems/files/browsing",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/files/browsing.md",tags:[{label:"File API",permalink:"/devdocs/docs/tags/file-api"},{label:"Files",permalink:"/devdocs/docs/tags/files"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653975038,formattedLastUpdatedAt:"31/05/2022",frontMatter:{title:"File Browser API",tags:["File API","Files"]},sidebar:"docs",previous:{title:"File API",permalink:"/devdocs/docs/apis/subsystems/files/"},next:{title:"File API internals",permalink:"/devdocs/docs/apis/subsystems/files/internals"}},c={},u=[{value:"Fetch a series of breadcrumbs to the requested file",id:"fetch-a-series-of-breadcrumbs-to-the-requested-file",level:3}],p={toc:u};function m(e){var t=e.components,s=(0,n.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,(0,i.Z)({frontMatter:o},void 0!==f?{metadata:f}:{},{mdxType:"MoodlePageBanner"})),(0,r.kt)("p",null,"The File Browser API is a supplemental API which can be used to fetch information relating to Files stored in the ",(0,r.kt)("a",{parentName:"p",href:"/devdocs/docs/apis/subsystems/files/"},"Moodle File API"),"."),(0,r.kt)("h3",{id:"fetch-a-series-of-breadcrumbs-to-the-requested-file"},"Fetch a series of breadcrumbs to the requested file"),(0,r.kt)("p",null,"This example demonstrates using the ",(0,r.kt)("inlineCode",{parentName:"p"},"filebrowser")," API to fetch the parent folders of a file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function get_file_breadcrumbs(\\stored_file $file): ?array {\n    $browser = get_file_browser();\n    $context = get_system_context();\n\n    $fileinfo = $browser->get_file_info(\n        \\context::instance_by_id($file->get_contextid()),\n        $file->get_component(),\n        $file->get_filearea(),\n        $file->get_itemid(),\n        $file->get_filepath(),\n        $file->get_filename()\n    )\n\n    if ($fileinfo) {\n        // Build a Breadcrumb trail\n        $level = $fileinfo->get_parent();\n        while ($level) {\n            $path[] = [\n                'name' => $level->get_visible_name(),\n            ];\n            $level = $level->get_parent();\n        }\n\n        $path = array_reverse($path);\n\n        return $path;\n    }\n\n    return null;\n}\n")))}m.isMDXComponent=!0}}]);