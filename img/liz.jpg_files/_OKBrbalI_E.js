/*!CK:358593189!*//*1438572769,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["PbryN"]); }

__d("ReactComposerStatusFooter.react",["ReactComposerActivityTaggerButton.react","ReactComposerActivityTaggerContainer.react","ReactComposerAttachmentType","ReactComposerAudienceSelectorContainer.react","ReactComposerBackdateTaggerButton.react","ReactComposerBackdateTaggerContainer.react","ReactComposerConfig","ReactComposerContextMixin","ReactComposerFooter.react","ReactComposerFooterActions.react","ReactComposerImplicitLocationContainer.react","ReactComposerLocationTaggerButton.react","ReactComposerLocationTaggerContainer.react","ReactComposerPeopleTaggerButton.react","ReactComposerPeopleTaggerContainer.react","ReactComposerPostButtonContainer.react","ReactComposerPhotoTaggerButtonContainer.react","ReactComposerTaggerButtons.react","ReactComposerTaggers.react","ReactComposerTaggerType","ReactComposerTaggerViewStyles","ComposerEntryPointRef","ComposerTargetData","LeftRight.react","PlaceSearchConstants","React","ReactComponentWithPureRenderMixin","cx","BasicTypeaheadLoggerJSConstants"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha){b.__markCompiled&&b.__markCompiled();var ia=b('BasicTypeaheadLoggerJSConstants').EventNames,ja=fa,ka=ja.PropTypes,la=fa.createClass({displayName:"ReactComposerStatusFooter",mixins:[ga,n],propTypes:{additionalTaggers:ka.arrayOf(ka.shape({button:ka.element.isRequired,container:ka.element.isRequired})),audienceXHP:ka.instanceOf(HTMLElement),attachmentsConfig:ka.object.isRequired,config:m.isRequired,hasImplicitLocation:ka.bool,locationTaggerPlaceholder:ka.string,mediaAcceptParam:ka.shape({photos:ka.string,both:ka.string}),peopleTaggerPlaceholder:ka.string,placeID:ka.string,postButtonModule:ka.func,taggersConfig:ka.object.isRequired,taggersData:ka.object,targetData:ka.instanceOf(ca).isRequired},getDefaultProps:function(){return {taggersData:{}};},render:function(){var ma=((this.props.hasImplicitLocation?"_icv":'')),na=this.props.config.showExpandedComposer?'white':'light-wash';return (fa.createElement("div",null,this._getTaggers(),fa.createElement(o,{background:na,className:ma},fa.createElement(da,null,this._getButtons(),this._getFooterActions()))));},_getTaggers:function(){var ma=this.props.taggersConfig,na=ma[z.PEOPLE].enabled?fa.createElement(u,{placeholder:this.props.peopleTaggerPlaceholder,taggerData:this._getTaggerData(z.PEOPLE),showEntriesOnFocus:false,actorID:this.context.actorID,peopleTaggerConfig:ma[z.PEOPLE]}):null,oa=ma[z.LOCATION].enabled?fa.createElement(s,{implicitLocationEnabled:ma[z.LOCATION].implicitLocationEnabled,placeholder:this.props.locationTaggerPlaceholder,taggerData:this._getTaggerData(z.LOCATION),taggerViewStyle:aa.SCROLLABLE,typeaheadLoggerEventName:ia.REACT_COMPOSER_LOCATION_TAGGER,typeaheadSearchSource:ea.SOURCE_W_COMPOSER}):null,pa=this.context.composerType===ba.TIMELINE,qa=ma[z.OG].enabled?fa.createElement(h,{actionTypeIDsWithNoFreeForm:ma[z.OG].actionTypeIDsWithNoFreeForm,actorID:this.context.actorID,isPersonalTimeline:pa,objectTaggerViewStyle:aa.SCROLLABLE,placeID:this.props.placeID,actionTypeIDsToPrefetch:ma[z.OG].actionTypeIDsToPrefetch,rankVerbs:ma[z.OG].rankVerbs,taggerData:this._getTaggerData(z.ACTIVITY),typeaheadLoggerEventName:ia.REACT_COMPOSER_OG_TAGGER}):null,ra=ma[z.BACKDATE].enabled?fa.createElement(l,null):null,sa=this.props.additionalTaggers?this.props.additionalTaggers.map(function(ta){return ta.container;}):null;return (fa.createElement(y,null,na,oa,qa,ra,sa));},_getTaggerData:function(ma){return this.props.taggersData?this.props.taggersData[ma]:undefined;},_getButtons:function(){var ma=this.props.taggersConfig,na=this.props.attachmentsConfig[i.MEDIA].photoLimit,oa=ma[z.CAMERA].enabled?fa.createElement(w,{photoLimit:na,mediaAcceptParam:this.props.mediaAcceptParam,targetData:this.props.targetData}):null,pa=ma[z.PEOPLE].enabled?fa.createElement(t,null):null,qa=ma[z.OG].enabled?fa.createElement(g,null):null,ra=ma[z.LOCATION].enabled?fa.createElement(r,null,fa.createElement(q,null)):null,sa=ma[z.BACKDATE].enabled?fa.createElement(k,null):null,ta=this.props.additionalTaggers?this.props.additionalTaggers.map(function(ua){return ua.button;}):null;return (fa.createElement(x,null,oa,pa,qa,ra,sa,ta));},_getFooterActions:function(){var ma=this.props.audienceXHP?fa.createElement(j,{audienceXHP:this.props.audienceXHP,viewerIsTarget:this.props.targetData.viewerIsTarget}):null,na=this.props.postButtonModule||v,oa=fa.createElement(na,{config:this.props.config});return (fa.createElement(p,null,ma,oa));}});e.exports=la;},null);