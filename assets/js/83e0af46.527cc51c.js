"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Build From Source"},i=void 0,p={unversionedId:"new/build-source",id:"new/build-source",title:"Build From Source",description:"This guide provides step-by-step instructions for building Nitro from source on Linux, macOS, and Windows systems.",source:"@site/docs/new/build-source.md",sourceDirName:"new",slug:"/new/build-source",permalink:"/new/build-source",draft:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/new/build-source.md",tags:[],version:"current",lastUpdatedBy:"automaticcat",lastUpdatedAt:1700543200,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{title:"Build From Source"},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/install"},next:{title:"Nitro Features",permalink:"/features/feat"}},o={},s=[{value:"Clone the Repository",id:"clone-the-repository",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Generate build file",id:"generate-build-file",level:2},{value:"Build the Application",id:"build-the-application",level:2},{value:"Start process",id:"start-process",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide provides step-by-step instructions for building Nitro from source on Linux, macOS, and Windows systems."),(0,r.kt)("h2",{id:"clone-the-repository"},"Clone the Repository"),(0,r.kt)("p",null,"First, you need to clone the Nitro repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recurse https://github.com/janhq/nitro\n")),(0,r.kt)("p",null,"If you don't have git, you can download the source code as a file archive from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/janhq/nitro"},"Nitro GitHub"),". Each ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/caddyserver/caddy/releases"},"release")," also has source snapshots."),(0,r.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("p",null,"Next, let's install the necessary dependencies."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"On MacOS with Apple Silicon:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./install_deps.sh\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"On Windows:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cmake -S ./nitro_deps -B ./build_deps/nitro_deps\ncmake --build ./build_deps/nitro_deps --config Release\n")))),(0,r.kt)("p",null,"This creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"build_deps")," folder."),(0,r.kt)("h2",{id:"generate-build-file"},"Generate build file"),(0,r.kt)("p",null,"Now, let's generate the build files."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"On MacOS, Linux, and Windows:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir build && cd build\ncmake ..\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"On MacOS with Intel processors:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir build && cd build\ncmake -DLLAMA_METAL=OFF .. \n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"On Linux with CUDA:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir build && cd build\ncmake -DLLAMA_CUBLAS=ON ..\n")))),(0,r.kt)("h2",{id:"build-the-application"},"Build the Application"),(0,r.kt)("p",null,"Time to build Nitro!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"On MacOS:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make -j $(sysctl -n hw.physicalcpu)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"On Linux:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make -j $(%NUMBER_OF_PROCESSORS%)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"On Windows:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --build . --config Release\n")))),(0,r.kt)("h2",{id:"start-process"},"Start process"),(0,r.kt)("p",null,"Finally, let's start Nitro."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"On MacOS and Linux:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./nitro\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"On Windows:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd Release\ncopy ..\\..\\build_deps\\_install\\bin\\zlib.dll .\nnitro.exe\n")))),(0,r.kt)("p",null,"To verify if the build was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:3928/healthz\n")))}d.isMDXComponent=!0}}]);