(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"1Z3a":function(e,t,a){},"2uLe":function(e,t,a){"use strict";var n=a("mj2O"),c=a.n(n),r=a("7SM1"),i=a("8Epr"),o=a("Hvhg"),s=a("ERkP"),u=a("uDfI"),l=a("vTYT"),d=a("7oto");t.a=function useSetPreviewHeight(){var e=Object(s.useRef)(null),t=Object(u.c)(function(e){return!!e.conversations.activeConversation}),a=Object(u.c)(o.b).showBranding,n=void 0!==a&&a,b=Object(i.a)().noPolicy,f=Object(u.c)(function(e){return e.session.gdpr}),O=f.hasConsent,m=f.declinedConsent,j=Object(s.useCallback)(function(){var e=0,t=!n&&b;return m&&(e+=40),t&&(e+=18),O||(e+=t?14:7),e},[m,O,b,n]),v=Object(s.useCallback)(function(){return e.current?e.current.clientHeight:200},[e]),p=Object(s.useCallback)(function(){var e=Object(r.a)(c.a.mark(function _callee(e){var a,n,r,i,o=arguments;return c.a.wrap(function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(a=o.length>1&&void 0!==o[1]&&o[1],!t||!O){c.next=3;break}return c.abrupt("return");case 3:n=j(),r=v(),i=e?"".concat(r+155-n,"px"):"0px",Object(d.a)({topic:"set-frame-height",message:{height:i,name:l.b.CHAT,transition:!0,transitionHeight:a}});case 7:case"end":return c.stop()}},_callee)}));return function(t){return e.apply(this,arguments)}}(),[t,O,j,v]),h=Object(s.useCallback)(Object(r.a)(c.a.mark(function _callee2(){var e;return c.a.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:e=v(),Object(d.a)({topic:"set-frame-height",message:{height:"".concat(e+80,"px"),name:l.b.SLIDER,transition:!0,transitionHeight:!1}});case 2:case"end":return t.stop()}},_callee2)})),[v]),g=Object(s.useCallback)(Object(r.a)(c.a.mark(function _callee3(){var e;return c.a.wrap(function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:e=v(),Object(d.a)({topic:"set-frame-height",message:{height:"".concat(e+35,"px"),name:l.b.EMAIL_CAPTURE,transition:!0,transitionHeight:!1}});case 2:case"end":return t.stop()}},_callee3)})),[v]);return{previewRef:e,setChatHeight:p,setSliderHeight:h,setEmailCaptureHeight:g}}},"9Hpm":function(e,t,a){},G5CQ:function(e,t,a){},Ldxc:function(e,t,a){"use strict";a.d(t,"b",function(){return d}),a.d(t,"a",function(){return b});var n=a("mj2O"),c=a.n(n),r=a("7SM1"),i=a("SsZN"),o=a("vjCh"),s=a("qixE"),u=a("6lNa"),l=a("0lfv"),d=function(){var e=Object(r.a)(c.a.mark(function _callee(e,t){return c.a.wrap(function _callee$(a){for(;;)switch(a.prev=a.next){case 0:try{Object(o.j)(t.id,t.playbookId),Object(s.a)(u.b.SUBMITTED),Object(s.a)(u.b.LEAD_CAPTURED,{email:e})}catch(n){Object(l.w)(["Failed to capture lead for email announcement playbook",n])}case 1:case"end":return a.stop()}},_callee)}));return function captureLeadForEmailAnnouncementPlaybook(t,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(c.a.mark(function _callee2(e){return c.a.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:try{Object(o.j)(e.id,e.playbookId),Object(i.c)(u.b.CLICKED,e.id),Object(s.a)(u.b.CLICKED)}catch(a){Object(l.w)(["Failed to capture CTA click for takeover playbook",a])}case 1:case"end":return t.stop()}},_callee2)}));return function captureCTAClickForAnnouncementPlaybook(t){return e.apply(this,arguments)}}()},MWt3:function(e,t,a){},SrLZ:function(e,t,a){"use strict";a.r(t);var n,c=a("mj2O"),r=a.n(c),i=a("7SM1"),o=a("s8DI"),s=a("OE2q"),u=a("O94r"),l=a.n(u),d=a("Rqwx"),b=a("fTFZ"),f=a("vkRn"),O=a("CwrG"),m=a("HXmn"),j=a("8eKL"),v=a("slYP"),p=a("BY8A"),h=a("+/Je"),g=a("fw6E"),E=a("1b8i"),w=a("gRD2"),y=a("fpJs"),C=a("6wvX"),k=a("Sn8X"),T=a("fJrp"),_=a("8Epr"),S=a("lE29"),L=a("swFs"),A=a("+Kbs"),N=a("nQD+"),I=a("jm9a"),H=a("12GJ"),M=a("noex"),R=a("mZ4K"),x=a("SsZN"),F=a("qixE"),D=a("g6eD"),P=a("LVcX"),U=a("ERkP"),B=a.n(U),G=a("uDfI"),V=a("6lNa"),Z=a("7oto"),K=a("nedb"),J=function createCampaignDismissedEvent(e,t){return Object(x.c)(V.b.CLICKED,t.id),"number"!==typeof e?null:Object(F.a)(V.b.DISMISSED,{conversationId:e})},$=function useCloseChat(){var e=Object(K.a)(),t=Object(G.c)(function(e){return e.session.endUser}),a=Object(G.b)(),n=Object(U.useState)(!1),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(G.c)(function(e){return e.view.isChatTakeover}),u=Object(G.c)(function(e){return Object(P.a)(null,["view","closeChatRedirectUrl"],e)}),l=Object(G.c)(function(e){return e.conversations.activeConversation}),d=Object(G.c)(function(e){return Object(P.a)(!1,["conversations","conversationStatus",l,"endUserResponded"],e)});Object(U.useEffect)(function(){r&&(a(Object(D.c)({chatOpen:!1,isChatTakeover:!1})),i(!1))},[r,a]);var b=Object(U.useCallback)(function(){var a;if(Object(Z.a)({topic:"remove-chat-takeover",message:{classNamesToRemove:["drift-frame-chat__takeover"]}}),!d){var n=[J(l,e)];if(e&&e.id){var c={campaignId:e.id,endUserId:t.id};e.attributes.playbookId&&(c.playbookId=e.attributes.playbookId),n.push(Object(Z.a)({topic:"send-usage-metric-event",message:{name:"Campaign Dismissed",attributes:c,publishImmediately:!0}}))}a=Promise.all(n)}if(u){var r=function redirect(){return Object(Z.a)({topic:"redirect-to-url",message:{url:u}})};a?a.then(r):r()}},[e,l,u,t.id,d]);return Object(U.useCallback)(function closeChat(){i(!0),s&&b()},[s,b])},W=a("58kB"),X=(a("1Z3a"),function ChatTakeover(){var e=Object(G.c)(function(e){return e.conversations.activeConversation}),t=Object(R.a)(),a=Object(W.a)(t).recipient,n=Object(S.a)().conversationHeaderTextStyles,c=$();return B.a.createElement("div",{className:"drift-widget-active-conversation-header"},e&&B.a.createElement(B.a.Fragment,null,B.a.createElement(M.a,{size:"SMALL",id:a.id}),B.a.createElement("h1",{className:"drift-widget-recipient-name",style:n},a.name)),B.a.createElement(N.a,{onClick:c,className:"drift-widget-chat-takeover-close-button"},B.a.createElement(A.j,{width:16,height:16})))}),Y=a("nJ3u"),Q=a("GtSE"),q=function Time(e){var t=e.height,a=void 0===t?24:t,n=e.width,c=void 0===n?24:n,r=e.fill,i=void 0===r?"#FFF":r;return B.a.createElement("svg",{className:"drift-default-icon drift-default-icon--Time",width:c,height:a,viewBox:"0 0 20 20"},B.a.createElement("path",{d:"M3.55,10.3l.79-.78a.77.77,0,0,1,1.09,1.09L3.3,12.74a.79.79,0,0,1-1.11,0l-2-2.13A.77.77,0,1,1,1.33,9.54l.69.73V10a9,9,0,1,1,3.07,6.77.77.77,0,1,1,1-1.16A7.45,7.45,0,1,0,3.56,10C3.56,10.08,3.56,10.18,3.55,10.3Zm7.72-4.93v4.87h3.34a.77.77,0,0,1,0,1.54H10.5A.76.76,0,0,1,9.73,11V5.37a.77.77,0,0,1,1.54,0Z",fill:i}))},z=a("z24s"),ee=a("Tr4L"),te=(a("9Hpm"),function ConversationHeader(){var e=Object(U.useRef)(null),t=Object(z.a)(e),a=Object(ee.a)().t,n=Object(R.a)(),c=Object(W.a)(n).recipient,r=Object(G.c)(function(e){return e.conversations.conversations}),i=Object(S.a)(),o=i.backgroundStyles,s=i.conversationHeaderTextStyles,u=i.widgetSecondaryColor,d=Object(C.a)(),b=Object(g.a)(),f=b.conversationHistoryEnabled,O=b.conversationHistoryOpen,m=b.onToggleConversationHistory,j=f&&!O&&Object.keys(r).length>1,v=Object(U.useRef)(),p=Object(z.a)(v);return Object(U.useEffect)(function(){v.current&&v.current.focus()},[O]),B.a.createElement("div",{className:"drift-widget-active-conversation-header"},B.a.createElement(M.a,{size:"SMALL",id:c.id}),B.a.createElement("h1",{"aria-hidden":O,className:"drift-widget-recipient-name",style:s},c.name),B.a.createElement("div",{className:l()("drift-widget-conversation-history-header",{"drift-widget-conversation-history-header--open":O}),style:o,"aria-hidden":!O},B.a.createElement("style",null,"\n            .drift-widget-history-back-button.keyboard-focused svg {\n              ".concat(Object(Y.d)(o.background.toString().replace("#",""),u.replace("#","")),"\n            }\n          ")),B.a.createElement(N.a,{ref:v,className:l()("drift-widget-history-back-button",{"keyboard-focused":p}),onClick:function onClick(){return m(!O)},"aria-label":"Back to conversation",disabled:!O},B.a.createElement(Q.a,{color:u,width:20,height:20})),B.a.createElement("h1",{style:s},a("history.headerTitle"))),j&&B.a.createElement(B.a.Fragment,null,B.a.createElement("style",null,"\n              .drift-widget-history.keyboard-focused {\n                ".concat(Object(Y.b)(u.replace("#","")),"\n              }\n            ")),B.a.createElement(N.a,{className:l()("drift-widget-history",{"drift-widget-history--mobile":d,"drift-widget-history--open":O,"keyboard-focused":t}),"aria-label":"Open conversation history",disabled:O,onClick:function onClick(){return m(!O)},ref:e},B.a.createElement(q,{fill:u,height:20,width:20}))))}),ae=a("NFvl"),ne=function useDefaultGreeting(){var e=Object(ee.a)().t,t=Object(G.c)(function(t){var a=Object(ae.a)(["embed","configuration","theme","welcomeMessage"],t);return a||e("greeting.onlineMessage")}),a=Object(G.c)(function(e){return e.view.matchedHours}),n=Object(G.c)(function(t){var a=Object(ae.a)(["embed","configuration","theme","awayMessage"],t);return a||e("greeting.awayMessage")});return a?t:n},ce=a("Vk0e"),re=a("hm8b"),ie=a("Ztgx"),oe=(a("txDs"),function GreetingMessage(e){var t=e.previewRef,a=ne(),n=Object(R.b)(),c=Object(G.c)(function(e){return e.view}).chatOpen,r=Object(T.a)(c),i=Object(G.c)(function(e){return e.view.matchedHours});Object(U.useEffect)(function(){Object(re.a)(r)||c===r||(i?Object(x.s)(c):Object(x.a)(c))},[r,c,i]);var o=n.length>1;return Object(ce.a)(),B.a.createElement("div",{className:l()("drift-widget-greeting",{"greeting-multiple-senders":o})},B.a.createElement(ie.a,{senderIds:n}),B.a.createElement("p",{ref:t,className:"drift-widget-greeting-content"},a))}),se=a("xyhj"),ue=a("hSLT"),le=a("Wjfv"),de=a("Ldxc"),be=a("PjZB"),fe=(a("Uo75"),function WelcomeMessage(e){var t=e.previewRef,a=Object(G.b)(),n=Object(G.c)(function(e){return e.view}).chatOpen,c=Object(R.b)(),o=Object(ue.a)();if(!n)return null;var s=function(){var e=Object(i.a)(r.a.mark(function _callee(){return r.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:Object(de.a)(o),a(Object(le.a)()),o.ctaType===be.a.LINK_TO_URL&&a(Object(D.c)({chatOpen:!1}));case 3:case"end":return e.stop()}},_callee)}));return function onCtaClicked(){return e.apply(this,arguments)}}();return B.a.createElement("div",{className:"drift-widget-greeting"},B.a.createElement(ie.a,{senderIds:c}),B.a.createElement("div",{ref:t,className:"drift-widget-welcome-message-content"},B.a.createElement("div",{dangerouslySetInnerHTML:{__html:'\n              <div class="drift-welcome-message-content--body">\n                '.concat(o.body,"\n              </div>\n            ")}})),o.ctaCopy&&o.ctaType!==be.a.CHAT_RESPONSE&&B.a.createElement("div",{className:"drift-widget-greeting-cta-wrapper"},B.a.createElement(se.a,{ctaUrl:o.ctaUrl,ctaType:o.ctaType,ctaCopy:o.ctaCopy,onClick:s})))}),Oe="GREETING",me="CHAT_TAKEOVER",je="CONVERSATION",ve="GDPR",pe="WELCOME_MESSAGE",he=(n={},Object(I.a)(n,pe,function(e){return B.a.createElement(fe,e)}),Object(I.a)(n,Oe,function(e){return B.a.createElement(oe,e)}),Object(I.a)(n,je,function(e){return B.a.createElement(te,e)}),Object(I.a)(n,ve,function(e){return B.a.createElement(H.a,e)}),Object(I.a)(n,me,function(e){return B.a.createElement(X,e)}),n),ge=a("2uLe"),Ee=(a("SwvN"),function HeaderLayout(e){var t=e.activeConversation,a=e.chatHidden,n=e.isChatTakeover,c=void 0!==n&&n,r=Object(G.b)(),i=Object(S.a)(),s=i.backgroundStyles,u=i.conversationHeaderTextStyles,d=Object(G.c)(function(e){return e.campaigns.activeCampaign}).id,b=Object(G.c)(function(e){return e.session.gdpr}).hasConsent,f=Object(C.a)(),O=Object(ge.a)(),m=O.setChatHeight,j=O.previewRef,v=Object(G.c)(function(e){return e.view}).chatOpen,p=Object(U.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return b?c?me:e?je:d?pe:Oe:ve},[t,b,c,d]),h=Object(U.useState)(p()),g=Object(o.a)(h,2),E=g[0],w=g[1],y=Object(T.a)(E),k=E!==y;Object(U.useLayoutEffect)(function(){v&&!a&&m(v,k)},[v,a,m,k]),Object(U.useEffect)(function(){var e=p(t);e!==E&&w(e)},[t,d,b,p,E]);var _=he[E],I=E!==je,H=f&&!c;return B.a.createElement("header",{className:l()("drift-widget-header",{"drift-widget-header--collapsed":I,"drift-widget-header--gdpr-consent":!b})},B.a.createElement(L.a,{style:s}),B.a.createElement("div",{className:"drift-widget-header--content"},B.a.createElement(_,{previewRef:j,resetChatHeight:function resetChatHeight(){m(v,!0)}})),H&&B.a.createElement(N.a,{onClick:function doToggleChat(){r(Object(D.c)({chatOpen:!1}))},className:"drift-widget-mobile-close","aria-label":"Close chat",style:u},B.a.createElement(A.j,{width:16,height:16})))}),we=a("vjCh"),ye=a("K7i0"),Ce=a("bYXQ"),ke=a("Hvhg"),Te=a("da4L"),_e=a("Gxm1"),Se=a("TbSn"),Le=a("kNJ0"),Ae=a("oPI6"),Ne=a("MFhO"),Ie=a("0lfv"),He=a("VpmR"),Me=a("4c+F"),Re=a("HSQL"),xe=(a("sXTY"),null),Fe=function ChatLayout(){var e=Object(G.b)(),t=Object(C.a)(),a=Object(U.useState)(!0),n=Object(o.a)(a,2),c=n[0],u=n[1];Object(k.a)();var d=Object(G.c)(function(e){return e.view}),L=d.chatOpen,A=d.isChatTakeover,N=Object(G.c)(ke.b).showBranding,I=void 0!==N&&N,H=Object(_.a)().noPolicy,M=!I&&H;Object(U.useLayoutEffect)(function(){A&&L&&Object(Z.a)({topic:"set-frame-width-and-height",message:{className:"drift-frame-chat__takeover",height:"100%",max:!0,name:"chat",width:"100%"}})},[A,L]);var R=Object(G.c)(function(e){return e.conversations.activeConversation}),F=Object(w.a)().fetchMessages,D=Object(T.a)(R),K=Object(G.c)(function(e){return e.conversations.conversations}),J=Object(G.c)(function(e){return e.conversations.messages}),$=Object(G.c)(function(e){return Object(P.a)({},["conversations","messages",e.conversations.activeConversation],e)}),W=Object(G.c)(function(e){return Object(P.a)(!1,["conversations","conversationStatus",e.conversations.activeConversation,"permaclosed"],e)}),X=Object(U.useMemo)(function(){return Object(Te.n)($)},[$]),Y=Object(G.c)(function(e){return e.campaigns.activeCampaign}),Q=Object(U.useMemo)(function(){return Object(P.a)(null,["attributes","campaignDisplayType"],Y)===Ne.a.WELCOME_MESSAGE},[Y]),q=Object(G.c)(function(e){return e.session.gdpr}).hasConsent,z=Object(G.c)(function(e){return Object(P.a)(!1,["conversations","conversationStatus",R,"endUserResponded"],e)}),ee=Object(g.a)(),te=ee.conversationHistoryOpen,ae=ee.conversationHistoryEnabled,ne=Object(S.a)().widgetBackgroundStyles;Object(U.useEffect)(function(){(function(){var t=Object(i.a)(r.a.mark(function _callee(){var t,a,n,c,i;return r.a.wrap(function _callee$(r){for(;;)switch(r.prev=r.next){case 0:if(t=!R||R===h.a,a=D===R,n=!!K[R]&&!!J[R],!(t||a||n||Object(Ce.c)(R))){r.next=5;break}return r.abrupt("return");case 5:return r.prev=5,r.next=8,Object(s.h)(R);case 8:c=r.sent,i=c.data,e(Object(ye.h)({conversation:i})),F({}),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(5),Object(Ie.f)("Failed to fetch messages or active conversation",r.t0);case 17:case"end":return r.stop()}},_callee,null,[[5,14]])}));return function fetchInfoForActiveConversation(){return t.apply(this,arguments)}})()()},[R,e,F,D,K,J]),Object(U.useEffect)(function(){L?(function(){var e=Object(i.a)(r.a.mark(function _callee2(){return r.a.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.a)({topic:"focus-frame",message:{name:"chat"}});case 2:case"end":return e.stop()}},_callee2)}));return function focus(){return e.apply(this,arguments)}}()(),xe&&clearTimeout(xe),u(!1)):xe=setTimeout(function delaySetReflowHidden(){u(!0)},350)},[L]);var ce=Object(U.useMemo)(function(){if(!q||!L)return!1;if(Y&&Y.id&&!R){var e=!!Object(P.a)(null,["attributes","cta"],Y),t="CHAT_RESPONSE"!==Object(P.a)(null,["attributes","cta","CtaType"],Y);if(e&&t)return!1}var a=X.length>0&&X.length<=2&&!Object(Te.f)(X[0]);return!A||a||X.length>2},[Y,R,q,A,X,L]);Object(U.useEffect)(function(){Object(Re.b)("WIDGET_CHAT_FRAME.start")},[]);var re=Object(U.useRef)(!1);Object(U.useEffect)(function(){if(!re.current&&A&&X.length>0){var e=Object(_e.b)("post_form_takeover_tti"),t=Object(_e.b)("post_form_takeover_show");e&&Object(Me.d)("Post Form Takeover TTI",e),t&&Object(Me.d)("Post Form Takeover Show",t),re.current=!0}},[A,X]);var ie=Object(U.useMemo)(function(){if(W)return b.a.UNAVAILABLE;var e=Object(Se.a)(X);if(!e)return b.a.AVAILABLE;var t=Object(Le.a)(-2,X),a=Object(Te.f)(t)&&Object(Te.h)(e);return Object(Te.f)(e)||a||Object(Te.i)(e)?b.a.UNAVAILABLE_BUTTONS:Object(Te.k)(e)||Object(Te.k)(t)&&Object(Te.h)(e)?b.a.AVAILABLE_BUTTONS:b.a.AVAILABLE},[X,W]),oe=ie===b.a.AVAILABLE||ie===b.a.AVAILABLE_BUTTONS,se=Object(E.a)(X,R),ue=Object(U.useMemo)(function(){return Object(Te.d)(se)},[se]),le=Object(U.useMemo)(function(){return B.a.createElement(j.a,{messageGroups:ue,messages:se,reflowHidden:c,disabled:te})},[ue,se,c,te]),de=Object(y.a)(),be=Object(U.useMemo)(function(){if(se&&se.length){var e=Object(Se.a)(se);if(e&&Object(Te.j)(e))return e}return null},[se]),fe=q&&(!!R||A),Oe=!ce||!oe;return B.a.createElement("main",{className:l()("drift-widget-chat-layout",{"drift-widget-chat-layout__takeover":A&&!t,"drift-widget-chat-layout__takeover--noResponse":A&&!t&&!z}),role:"main","aria-label":"Chat window"},B.a.createElement(p.a,null),B.a.createElement("div",{className:l()("drift-widget-chat-wrapper",{"drift-widget-chat-wrapper__open":L,"drift-widget-chat-wrapper__closed":!L,"drift-widget-chat-wrapper__reflow-hidden":c,"drift-widget-chat-wrapper__active-conversation":fe,"drift-widget-chat-wrapper__no-footer-content":M&&Oe})},B.a.createElement(Ee,{activeConversation:R,chatHidden:c,isChatTakeover:A}),!A&&ae&&B.a.createElement(f.a,null),fe&&B.a.createElement("div",{className:l()("drift-widget-message-history",{"drift-widget-message-history--with-footer":de,"drift-widget-message-history--no-composer":Oe}),style:ne},le,0===X.length&&B.a.createElement(m.a,null)),B.a.createElement("div",{className:"drift-widget-chat-bottom"},ce&&B.a.createElement(b.b,{state:ie,disabled:te,onSubmit:function doSendMessage(t){if((Q||A)&&!R){var a=Object(P.a)(null,["attributes","playbookId"],Y);!function sendSubmittedEventForChatResponseCampaign(){Y&&"CHAT_RESPONSE"===Object(P.a)(null,["attributes","cta","CtaType"],Y)&&Object(x.c)(V.b.SUBMITTED,Y.id)}(),Object(we.j)(Y.id,a)}e(Object(ye.m)(t))},chatHidden:c,activeConversationId:R}),B.a.createElement(O.a,null)),R&&!!be&&B.a.createElement(v.a,{message:be})))};t.default=function(e){var t=Object(U.useState)(!1),a=Object(o.a)(t,2),n=a[0],c=a[1],s=Object(G.c)(function(e){return e.view.initComplete}),u=Object(G.c)(function(e){return Object(P.a)("en",["embed","configuration","locale"],e)});return Object(U.useEffect)(function(){s&&!n&&function(){var e=Object(i.a)(r.a.mark(function _callee3(){return r.a.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(He.a)(u);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),Object(Ie.n)({data:["i18n failed to load - ".concat(e.t0.message),e.t0],type:"warn"});case 8:c(!0);case 9:case"end":return e.stop()}},_callee3,null,[[0,5]])}));return function runAsync(){return e.apply(this,arguments)}}()()},[s,n,u]),B.a.createElement(Ae.a,null,s&&n?B.a.createElement(Fe,e):B.a.createElement(d.a,null))}},SwvN:function(e,t,a){},Uo75:function(e,t,a){},hSLT:function(e,t,a){"use strict";var n=a("LVcX"),c=a("uDfI");t.a=function useActiveAnnouncementCampaign(){var e=Object(c.c)(function(e){return Object(n.a)({},["campaigns","activeCampaign"],e)}),t=e.attributes,a=void 0===t?{}:t;return{id:e.id,playbookId:Object(n.a)(null,["playbookId"],a),ctaType:Object(n.a)(null,["cta","CtaType"],a),ctaCopy:Object(n.a)("",["cta","copy"],a),ctaUrl:Object(n.a)("",["cta","UrlLink"],a),body:a.message||"",title:a.title||"",thanksTitle:a.thankYouHeadline||"",thanksMessage:a.thankYouMessage||"",senderId:a.senderId,type:a.campaignDisplayType}}},sXTY:function(e,t,a){},swFs:function(e,t,a){"use strict";var n=a("ERkP"),c=a.n(n);a("G5CQ");t.a=function TopLine(e){var t=e.style;return c.a.createElement("div",{className:"drift-widget-header-top-line",style:t})}},txDs:function(e,t,a){},xyhj:function(e,t,a){"use strict";var n=a("nfbA"),c=a("nJ3u"),r=a("O94r"),i=a.n(r),o=a("z24s"),s=a("o3t1"),u=a("lE29"),l=a("ERkP"),d=a.n(l),b=a("uDfI"),f=a("PjZB"),O=a("7oto"),m=a("rTkt");a("MWt3");t.a=function CtaButton(e){var t=e.ctaUrl,a=e.ctaCopy,r=e.ctaType,j=e.onClick,v=e.ariaHidden,p=Object(s.a)(),h=p.hoverProps,g=p.isHovered,E=Object(u.a)(),w=E.activeColor,y=E.backgroundStyles,C=Object(b.c)(function(e){return e.campaigns.activeCampaign}),k=Object(l.useRef)(null),T=Object(o.a)(k),_=Object(l.useMemo)(function(){var e=g?Object(m.c)(y.background,-5):y.background;return Object(n.a)(Object(n.a)({},y),{},{background:e})},[y,g]),S=function onCtaClick(e){r===f.a.CHAT_RESPONSE?Object(O.a)({topic:"drift-api:open-chat"}):r===f.a.SCHEDULE_MEETING&&Object(O.a)({topic:"drift-api:schedule-meeting",message:{scheduleMeetingWith:C.attributes.senderId,options:{activeCampaign:C}}}),j&&j(e)};return Object(l.useEffect)(function(){var e=k;return setTimeout(function(){return e.current&&e.current.focus()},50),function(){return e.current&&e.current.blur()}},[]),r===f.a.LINK_TO_URL?d.a.createElement(d.a.Fragment,null,d.a.createElement("style",null,"\n            .drift-widget-announcement-cta-link-wrapper a.keyboard-focused {\n              ".concat(Object(c.d)("FFFFFF",w),"\n            }\n          ")),d.a.createElement("div",{className:"drift-widget-announcement-cta drift-widget-announcement-cta-link-wrapper",hidden:v},d.a.createElement("a",Object.assign({className:i()("drift-widget-announcement-cta-link",{"keyboard-focused":T&&!v}),href:t,onClick:S,target:"_blank",rel:"noopener noreferrer",ref:k,"aria-describedby":"drift-widget-announcement-cta-description",style:_,"aria-hidden":v},h),a),d.a.createElement("span",{hidden:!0,id:"drift-widget-announcement-cta-description"},a+"; opens an external site in a new window"))):d.a.createElement(d.a.Fragment,null,d.a.createElement("style",null,"\n          .drift-widget-announcement-cta.keyboard-focused {\n            ".concat(Object(c.d)("FFFFFF",w),"\n          }\n        ")),d.a.createElement("button",Object.assign({className:i()("drift-widget-announcement-cta",{"keyboard-focused":T}),onClick:S,style:_,ref:k},h),a))}}}]);