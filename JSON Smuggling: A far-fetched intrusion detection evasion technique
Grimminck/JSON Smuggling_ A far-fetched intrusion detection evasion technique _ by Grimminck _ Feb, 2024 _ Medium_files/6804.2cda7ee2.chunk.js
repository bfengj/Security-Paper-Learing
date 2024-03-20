(self.webpackChunklite=self.webpackChunklite||[]).push([[6804],{56804:(e,n,t)=>{"use strict";t.d(n,{S:()=>J});var i=t(96156),a=t(67294),o=t(86706),l=t(54933),r=t(1249),s=t(29074),d=t(24291),u=t(78457),c=t(11098),p=t(20998),m=t(95983),v=t(75857),k=t(6443),f=t(39507),b=t(18733),g=t(26350),h=t(18627),C=t(66411),S=t(83486),y=t(43487),N=t(51681),w=t(50458),O=t(13195),E=t(47628),F=t(81253),P=t(75412),I=t(6342),D=t(93818),V=t(72431),j=t(32317),T=t(87329),L=t(78693),x=t(21177),H={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PostVotersDialogQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pagingOptions"}},type:{kind:"NamedType",name:{kind:"Name",value:"PagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"post"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"Field",name:{kind:"Name",value:"voterCount"}},{kind:"Field",name:{kind:"Name",value:"voters"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"Variable",name:{kind:"Name",value:"pagingOptions"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserInListDialog_user"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}}]}},{kind:"Field",name:{kind:"Name",value:"pagingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"next"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"page"}}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_post"}}]}}]}}].concat((0,T.Z)(L.s.definitions),(0,T.Z)(x.n.definitions),(0,T.Z)(L.S.definitions))},_=["__typename"];function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var B=10,Z=function(e){var n=e.post,t=e.hide,i=e.isVisible,o=e.fetchMore,l=e.loading;if(!n)return null;var r=n.title,s=n.voters,d=n.clapCount,u=n.voterCount;return a.createElement(D.x,{isVisible:i,fetchMore:o,loading:l,hide:t,title:r,clapCount:null!=d?d:0,voterCount:null!=u?u:0,voters:s?s.items.map((function(e){var t=e.user,i=e.clapCount;return t&&a.createElement(I.F,{user:t,key:t.id,followButton:a.createElement(j.B,{buttonSize:"SMALL",post:n,user:t,susiEntry:"follow_list"}),badge:a.createElement(V.g,{clapCount:i})})})):null})};function M(e){var n=e.postId,t=e.isVisible,i=e.hide;return t?a.createElement(P.A,{ssr:!1,query:H,variables:{postId:n,pagingOptions:{limit:B}},notifyOnNetworkStatusChange:!0},(function(e){var n,o=e.data,l=(o=void 0===o?{}:o).post,r=e.loading,s=e.error,d=e.fetchMore;if(s||null==l||!l.voters)return null;var u=l.voters.pagingInfo&&l.voters.pagingInfo.next;if(u){u.__typename;var c=(0,F.Z)(u,_);n=function(){return d({variables:{pagingOptions:R(R({},c),{},{limit:B})}})}}return a.createElement(Z,{hide:i,fetchMore:n,post:l,isVisible:t,loading:r})})):null}var U=t(30020),q=t(66227);function Q(e){var n=e.clapCount,t=e.hasLabel,i=void 0!==t&&t,o=e.showFullNumber,l=void 0!==o&&o,r=e.post,s=e.hasDialog,d=void 0!==s&&s,u=e.shouldShowResponsiveLabelText,c=void 0!==u&&u,p=e.shouldHideClapsText,m=void 0!==p&&p,v=e.countColor,k=e.countScale,f=e.isLoading,b=void 0!==f&&f,g=r.id;if(!(n>0||b))return null;var h=function(e){var t=e.showVoters;return a.createElement(E.$,{showVoters:t,hasLabel:i,showFullNumber:l,shouldShowResponsiveLabelText:c,shouldHideClapsText:m,clapCount:n,countColor:v,countScale:k,isLoading:b})};return d&&g&&!b?a.createElement(q.B,null,(function(e){var n=e.isVisible,t=e.show,i=e.hide;return a.createElement(a.Fragment,null,a.createElement(U._,{tooltipText:"View Claps",targetDistance:15},a.createElement(h,{showVoters:t})),n&&a.createElement(M,{isVisible:!0,hide:i,postId:g}))})):a.createElement(h,null)}var $=t(94402);function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Y=function(e){var n,t=e.post,i=e.buttonStyle,E=e.hasDialog,F=e.shouldShowResponsiveLabelText,P=void 0!==F&&F,I=e.shouldHideClapsText,D=void 0!==I&&I,V=e.shouldHideClapsCount,j=void 0!==V&&V,T=e.susiEntry,L=e.verticalClapsText,x=void 0!==L&&L,H=e.buttonColor,_=e.countScale,A=e.testId,R=(0,$.m)({post:t}),B=R.clapCount,Z=R.clapCountLoading,M=W(W({},t),{},{clapCount:B}),U=(0,O.C)(),q=(0,k.H)(),z=q.value,Y=q.loading,J=null!==(n=null==z?void 0:z.id)&&void 0!==n?n:"",K=(0,f.T)(t).viewerEdge,G=(0,y.v9)((function(e){return e.config.authDomain})),X=(0,y.b$)((function(e){return e.multiVote.clapsPerPost})),ee=(0,o.I0)(),ne=(0,h.A)(),te=(0,C.pK)(),ie=(0,N.l)(X,M,K),ae=ie.clapCount,oe=ie.viewerClapCount,le=ie.viewerHasClappedSinceFetch,re=(0,a.useCallback)((function(){if(oe&&oe>=m.S2)return"Viewer exceeded authorized claps limit.";var e;e={postId:t.id,clapCount:ae+1,viewerClapCount:oe+1,viewerHasClappedSinceFetch:!0},ee((0,S.at)(e))}),[oe,t.id,ae]),se=(0,a.useCallback)((function(e){U(M,J,e,K),ne.event("post.clientUpvote",{postId:t.id,postIds:[t.id],voteCount:e,source:te})}),[t.id,J,K,te]),de=(0,v.m)({onIncrementClaps:re,onSubmitClapsAccumulated:se}),ue=de.clappedAt,ce=de.onFloatEnd,pe=de.removeBurst,me=de.clap,ve=de.isPopping,ke=de.isShowingViewerClapCount,fe=de.burstOffsets,be=de.onPopEnd;(0,a.useEffect)((function(){return function(){var e;e={postId:t.id},ee((0,S.HQ)(e))}}),[]);var ge,he=t.collection,Ce=t.creator,Se=t.id,ye=t.isPublished,Ne=t.isLimitedState,we=(ge=!(!Ce||Ce.id!==J),Ne?"This feature is temporarily disabled":ye?ge?"You cannot applaud your own story":void 0:"You cannot applaud a draft"),Oe=(0,m.wH)(i,P),Ee=Oe.alwaysShowClapsLabel,Fe=Oe.hasClapsLabel,Pe=Oe.buttonScale,Ie=!!(oe&&oe>0),De=!!(ae&&ae>0),Ve=he&&he.slug?(0,w.JL)(G,he.slug,Se):(0,w.kI)(G,Se);return a.createElement(s.l,{verticalClapsText:x},a.createElement(u.$,{buttonStyle:i,hasClaps:De||Z},J||we?a.createElement(a.Fragment,null,ke&&a.createElement(b.N8,null,a.createElement(d.q,{count:oe,clappedAt:ue,onFloatEnd:ce})),a.createElement(p.v,{isPopping:ve,onPopEnd:be},a.createElement(r.d,{buttonColor:H,disableReason:we,isFilled:Ie,isLoading:Y||Z,onClickAndHold:me,scale:Pe,shouldHideClapsText:D,testId:A})),fe.map((function(e){return a.createElement(l.P,{key:e,offset:e,onBurstEnd:pe})}))):a.createElement(g.R,{operation:"register",post:t,user:t.creator||void 0,actionUrl:Ve,susiEntry:T,testId:A},a.createElement(r.d,{scale:Pe,buttonColor:H,shouldHideClapsText:D,testId:A}))),(De||Z)&&!j&&(!ke||Ee)&&a.createElement(c.W,{buttonStyle:i},a.createElement(Q,{post:t,clapCount:ae,showFullNumber:le,hasLabel:Fe,hasDialog:E,shouldShowResponsiveLabelText:P,shouldHideClapsText:D,countColor:H,countScale:_,isLoading:Z})))},J=function(e){var n;return a.createElement(C.cW,{source:{postId:null===(n=e.post)||void 0===n?void 0:n.id},extendSource:!0},a.createElement(Y,e))}},94402:(e,n,t)=>{"use strict";t.d(n,{m:()=>l});var i=t(64718),a=t(59764),o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ClapCountQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}}]}}]}}]}}]},l=function(e){var n=e.post,t=(0,i.a)(o,{fetchPolicy:"network-only",nextFetchPolicy:"cache-first",ssr:!1,variables:{postId:n.id}}),l=t.data,r=t.loading;return{clapCount:l&&(0,a.f)(l.postResult)?l.postResult.clapCount:null,clapCountLoading:r}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/6804.2cda7ee2.chunk.js.map