"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5097],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?o.createElement(y,i(i({ref:n},s),{},{components:t})):o.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={title:"Nitro with openai-python"},i=void 0,l={unversionedId:"examples/openai-python",id:"examples/openai-python",title:"Nitro with openai-python",description:"You can migrate from OAI API or Azure OpenAI to Nitro using your existing Python code quickly",source:"@site/docs/examples/openai-python.md",sourceDirName:"examples",slug:"/examples/openai-python",permalink:"/examples/openai-python",draft:!1,editUrl:"https://github.com/janhq/nitro/tree/main/docs/docs/examples/openai-python.md",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1700707618,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{title:"Nitro with openai-python"},sidebar:"docsSidebar",previous:{title:"Nitro with openai-node",permalink:"/examples/openai-node"},next:{title:"FAQs",permalink:"/faq"}},p={},c=[{value:"Chat Completion",id:"chat-completion",level:2},{value:"Embedding",id:"embedding",level:2},{value:"Audio",id:"audio",level:2},{value:"How to reproduce",id:"how-to-reproduce",level:2}],s={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can migrate from OAI API or Azure OpenAI to Nitro using your existing Python code quickly"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ONLY thing you need to do is to override ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"openai")," init with ",(0,r.kt)("inlineCode",{parentName:"p"},"Nitro")," URL"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Python OpenAI SDK: ",(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/openai/"},"https://pypi.org/project/openai/")))),(0,r.kt)("h2",{id:"chat-completion"},"Chat Completion"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null," Engine ")," ",(0,r.kt)("td",null," Python Code ")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Nitro "),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import asyncio\n\nfrom openai import AsyncOpenAI\n\n# gets API Key from environment variable OPENAI_API_KEY\nclient = AsyncOpenAI(base_url="http://localhost:3928/v1/", api_key="sk-xxx")\n\n\nasync def main() -> None:\n    stream = await client.chat.completions.create(\n        model="gpt-4",\n        messages=[{"role": "user", "content": "Say this is a test"}],\n        stream=True,\n    )\n    async for completion in stream:\n        print(completion.choices[0].delta.content, end="")\n    print()\n\nasyncio.run(main())\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null," OAI "),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import asyncio\n\nfrom openai import AsyncOpenAI\n\n# gets API Key from environment variable OPENAI_API_KEY\nclient = AsyncOpenAI(api_key="sk-xxx")\n\n\nasync def main() -> None:\n    stream = await client.chat.completions.create(\n        model="gpt-4",\n        messages=[{"role": "user", "content": "Say this is a test"}],\n        stream=True,\n    )\n    async for completion in stream:\n        print(completion.choices[0].delta.content, end="")\n    print()\n\nasyncio.run(main())\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null," Azure OAI "),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openai import AzureOpenAI\n\nopenai.api_key = \'...\' # Default is environment variable AZURE_OPENAI_API_KEY\n\nstream = AzureOpenAI(\n    api_version=api_version,\n    # https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource\n    azure_endpoint="https://example-endpoint.openai.azure.com",\n)\n\ncompletion = client.chat.completions.create(\n    model="deployment-name",  # e.g. gpt-35-instant\n    messages=[\n        {\n            "role": "user",\n            "content": "How do I output all files in a directory using Python?",\n        },\n    ],\n    stream=True,\n)\nfor part in stream:\n    print(part.choices[0].delta.content or "")\n'))))),(0,r.kt)("h2",{id:"embedding"},"Embedding"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null," Engine ")," ",(0,r.kt)("td",null," Embedding ")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Nitro "),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\n\nfrom openai import AsyncOpenAI\n\n# gets API Key from environment variable OPENAI_API_KEY\nclient = AsyncOpenAI(base_url=\"http://localhost:3928/v1/\", api_key=\"sk-xxx\")\n\n\nasync def main() -> None:\n    embedding = await client.embeddings.create(input='Hello How are you?', model='text-embedding-ada-002')\n    print(embedding)\n\nasyncio.run(main())\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null," OAI "),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\n\nfrom openai import AsyncOpenAI\n\n# gets API Key from environment variable OPENAI_API_KEY\nclient = AsyncOpenAI(api_key=\"sk-xxx\")\n\n\nasync def main() -> None:\n    embedding = await client.embeddings.create(input='Hello How are you?', model='text-embedding-ada-002')\n    print(embedding)\n\nasyncio.run(main())\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null," Azure OAI "),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import openai\n\nopenai.api_type = "azure"\nopenai.api_key = YOUR_API_KEY\nopenai.api_base = "https://YOUR_RESOURCE_NAME.openai.azure.com"\nopenai.api_version = "2023-05-15"\n\nresponse = openai.embedding.create(\n    input="Your text string goes here",\n    engine="YOUR_DEPLOYMENT_NAME"\n)\nembeddings = response[\'data\'][0][\'embedding\']\nprint(embeddings)\n'))))),(0,r.kt)("h2",{id:"audio"},"Audio"),(0,r.kt)("p",null,"Coming soon"),(0,r.kt)("h2",{id:"how-to-reproduce"},"How to reproduce"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Step 1: Dependencies installation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip install openai\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Step 2: Fill ",(0,r.kt)("inlineCode",{parentName:"li"},"index.py")," file with code"),(0,r.kt)("li",{parentName:"ol"},"Step 3: Run the code with ",(0,r.kt)("inlineCode",{parentName:"li"},"python index.py")),(0,r.kt)("li",{parentName:"ol"},"Step 5: Enjoy!")))}u.isMDXComponent=!0}}]);