"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[809],{66970:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={},c="Create an Identity",l={unversionedId:"examples/create_identity",id:"examples/create_identity",isDocsHomePage:!1,title:"Create an Identity",description:"This example will show how to create an basic identity. It is recommended to have a basic",source:"@site/external/integration-services/documentation/docs/examples/create_identity.mdx",sourceDirName:"examples",slug:"/examples/create_identity",permalink:"/integration-services/integration-services/examples/create_identity",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Streams",permalink:"/integration-services/integration-services/basics/streams"},next:{title:"Issue a Credential",permalink:"/integration-services/integration-services/examples/issue_credential"}},p=[{value:"Prerequisite",id:"prerequisite",children:[],level:2},{value:"Running the example",id:"running-the-example",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-an-identity"},"Create an Identity"),(0,i.kt)("p",null,"This example will show how to create an basic identity. It is recommended to have a basic\nunderstading of Decentralized Identities to get the most out of this example. Have a look at our Basics section to read further about\n",(0,i.kt)("a",{parentName:"p",href:"../basics/identity"},"Decrentralized Identities"),"."),(0,i.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You have to have a recent version of ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," installed."),(0,i.kt)("li",{parentName:"ol"},"This example uses ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/axios"},"axios")," for http requests. You can use whatever package you like for querying the API. If you want to follow along make sure to install axios by running ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install axios")," in your projects root."),(0,i.kt)("li",{parentName:"ol"},"Make sure to have the API running and connected to the database. You can test this by querying ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:3000/info"},"http://localhost:3000/info"),". If it returns some information like and identityId you are ready to go.")),(0,i.kt)("h2",{id:"running-the-example"},"Running the example"),(0,i.kt)("p",null,"This is a really barebones example on how to create an identity. For all possible parameter have a look at our ",(0,i.kt)("a",{parentName:"p",href:"../api_reference"},"API Referenece"),".\nFirst of all a user object containg just a username is created. The user object is then posted to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/identities/create")," endpoint."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import axios from 'axios';\n\nconst createIdentity = async () => {\n  const user = { username: 'example-user' };\n  const response = await axios.post('http://localhost:3000/api/v1/identities/create', user);\n  console.log(JSON.stringify(response.data, null, 4));\n};\n\ncreateIdentity();\n")),(0,i.kt)("p",null,"Output example identity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "doc": {\n    "id": "did:iota:9VoXVSn8oe2yAiHcppSzpevV9MptcMmUiDtYEjwDdEBD",\n    "authentication": [\n      {\n        "id": "did:iota:9VoXVSn8oe2yAiHcppSzpevV9MptcMmUiDtYEjwDdEBD#key",\n        "controller": "did:iota:9VoXVSn8oe2yAiHcppSzpevV9MptcMmUiDtYEjwDdEBD",\n        "type": "Ed25519VerificationKey2018"\n      }\n    ],\n    "created": "2021-11-16T08:39:12Z",\n    "updated": "2021-11-16T08:39:12Z",\n    "proof": {\n      "type": "JcsEd25519Signature2020",\n      "verificationMethod": "#key",\n      "signatureValue": "WgoRce5FWtNxS5UMqyjmdSnmEU3q3ET9XoNTySVV1BoyiLe4kC8HLCqSR8fL2ZzvREzDs47fXHaf7VXTwTYfEjQ"\n    }\n  },\n  "key": {\n    "type": "ed25519",\n    "public": "5YLhUrXqMZbu6v2PSUwThSinmiNr9Kv2FdvqhogSzWR",\n    "secret": "4wHshyqhBu7oUfKmrNH5ydr8t17m6JugAuTFQBjBiWU2",\n    "encoding": "base58"\n  },\n  "txHash": "302c3a31ee5da69b190e44cb802c96ce97503aba072d274ff9aebf99d0106fb1"\n}\n')),(0,i.kt)("p",null,"Great, you created your first identity! You can now continue by ",(0,i.kt)("a",{parentName:"p",href:"./issue_credential"},"issueing the first credential to your identity"),"."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please make sure to keep your secret key private and not share it with anyone!"))))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);