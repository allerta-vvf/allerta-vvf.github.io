"use strict";(self.webpackChunkallerta_vvf=self.webpackChunkallerta_vvf||[]).push([[913],{6535:(e,t,s)=>{s.d(t,{A:()=>b});var r=s(6540),a=s(4164),l=s(781),n=s(4581),i=s(8774),o=s(1312),c=s(6347),m=s(9169);function d(e){const{pathname:t}=(0,c.zy)();return(0,r.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=s(4848);function g(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,a.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,a.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,a.A)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=s(5600);function x(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function f(e){return(0,h.jsx)(p.GX,{component:x,props:e})}function j(e){let{sidebar:t}=e;const s=(0,n.l)();return t?.items.length?"mobile"===s?(0,h.jsx)(f,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function b(e){const{sidebar:t,toc:s,children:r,...n}=e,i=t&&t.items.length>0;return(0,h.jsx)(l.A,{...n,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(j,{sidebar:t}),(0,h.jsx)("main",{className:(0,a.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"https://schema.org/Blog",children:r}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},5623:(e,t,s)=>{s.d(t,{A:()=>U});var r=s(6540),a=s(4164),l=s(7131),n=s(6025),i=s(4848);function o(e){let{children:t,className:s}=e;const{frontMatter:r,assets:a,metadata:{description:o}}=(0,l.e)(),{withBaseUrl:c}=(0,n.h)(),m=a.image??r.image,d=r.keywords??[];return(0,i.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,i.jsx)("meta",{itemProp:"description",content:o}),m&&(0,i.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&(0,i.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),t]})}var c=s(8774);const m={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:s,isBlogPostPage:r}=(0,l.e)(),{permalink:n,title:o}=s,d=r?"h1":"h2";return(0,i.jsx)(d,{className:(0,a.A)(m.title,t),itemProp:"headline",children:r?o:(0,i.jsx)(c.A,{itemProp:"url",to:n,children:o})})}var u=s(1312),h=s(4586);const g=["zero","one","two","few","many","other"];function p(e){return g.filter((t=>e.includes(t)))}const x={locale:"en",pluralForms:p(["one","other"]),select:e=>1===e?"one":"other"};function f(){const{i18n:{currentLocale:e}}=(0,h.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:p(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),x}}),[e])}function j(){const e=f();return{selectMessage:(t,s)=>function(e,t,s){const r=e.split("|");if(1===r.length)return r[0];r.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=s.select(t),l=s.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(s,t,e)}}const b={container:"container_mt6G"};function v(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=j();return t=>{const s=Math.ceil(t);return e(s,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,i.jsx)(i.Fragment,{children:s(t)})}function P(e){let{date:t,formattedDate:s}=e;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function A(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function N(e){let{className:t}=e;const{metadata:s}=(0,l.e)(),{date:r,formattedDate:n,readingTime:o}=s;return(0,i.jsxs)("div",{className:(0,a.A)(b.container,"margin-vert--md",t),children:[(0,i.jsx)(P,{date:r,formattedDate:n}),void 0!==o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(A,{}),(0,i.jsx)(v,{readingTime:o})]})]})}function _(e){return e.href?(0,i.jsx)(c.A,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function k(e){let{author:t,className:s}=e;const{name:r,title:l,url:n,imageURL:o,email:c}=t,m=n||c&&`mailto:${c}`||void 0;return(0,i.jsxs)("div",{className:(0,a.A)("avatar margin-bottom--sm",s),children:[o&&(0,i.jsx)(_,{href:m,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:o,alt:r,itemProp:"image"})}),r&&(0,i.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(_,{href:m,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"name",children:r})})}),l&&(0,i.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:l})]})]})}const T={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function w(e){let{className:t}=e;const{metadata:{authors:s},assets:r}=(0,l.e)();if(0===s.length)return null;const n=s.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",n?T.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,i.jsx)("div",{className:(0,a.A)(!n&&"col col--6",n?T.imageOnlyAuthorCol:T.authorCol),children:(0,i.jsx)(k,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function I(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(d,{}),(0,i.jsx)(N,{}),(0,i.jsx)(w,{})]})}var y=s(440),F=s(5533);function L(e){let{children:t,className:s}=e;const{isBlogPostPage:r}=(0,l.e)();return(0,i.jsx)("div",{id:r?y.blogPostContainerID:void 0,className:(0,a.A)("markdown",s),itemProp:"articleBody",children:(0,i.jsx)(F.A,{children:t})})}var B=s(1943),C=s(8046);function M(){return(0,i.jsx)("b",{children:(0,i.jsx)(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function R(e){const{blogPostTitle:t,...s}=e;return(0,i.jsx)(c.A,{"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,i.jsx)(M,{})})}const O={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function D(){const{metadata:e,isBlogPostPage:t}=(0,l.e)(),{tags:s,title:r,editUrl:n,hasTruncateMarker:o}=e,c=!t&&o,m=s.length>0;return m||c||n?(0,i.jsxs)("footer",{className:(0,a.A)("row docusaurus-mt-lg",t&&O.blogPostFooterDetailsFull),children:[m&&(0,i.jsx)("div",{className:(0,a.A)("col",{"col--9":c}),children:(0,i.jsx)(C.A,{tags:s})}),t&&n&&(0,i.jsx)("div",{className:"col margin-top--sm",children:(0,i.jsx)(B.A,{editUrl:n})}),c&&(0,i.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":m}),children:(0,i.jsx)(R,{blogPostTitle:r,to:e.permalink})})]}):null}function U(e){let{children:t,className:s}=e;const r=function(){const{isBlogPostPage:e}=(0,l.e)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(o,{className:(0,a.A)(r,s),children:[(0,i.jsx)(I,{}),(0,i.jsx)(L,{children:t}),(0,i.jsx)(D,{})]})}},7131:(e,t,s)=>{s.d(t,{e:()=>o,i:()=>i});var r=s(6540),a=s(9532),l=s(4848);const n=r.createContext(null);function i(e){let{children:t,content:s,isBlogPostPage:a=!1}=e;const i=function(e){let{content:t,isBlogPostPage:s}=e;return(0,r.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:a});return(0,l.jsx)(n.Provider,{value:i,children:t})}function o(){const e=(0,r.useContext)(n);if(null===e)throw new a.dV("BlogPostProvider");return e}}}]);