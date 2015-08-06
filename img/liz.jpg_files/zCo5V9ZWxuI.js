/*!CK:2726782134!*//*1438004210,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["rH0qu"]); }

__d("InteractionLogger",["Arbiter","Banzai","Event","PageEvents"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l,m){m=m||{};this.profiler={};this.log={};this.lastInteraction=Date.now();this.interactionTime=0;this.eventSequence=[];this.projectName=l;if(m.trackInteractionTime)i.listen(document.body,'mousemove',this._pingActive.bind(this));if(m.submitOnLeave||m.submitOnLeave===(void 0))this.arbiterToken=g.subscribe(j.AJAXPIPE_ONUNLOAD,function(){this.submit();this.arbiterToken.unsubscribe();}.bind(this));}Object.assign(k,{IDLE_LIMIT:20000});Object.assign(k.prototype,{set:function(l,m){this.log[l]=m;},tap:function(l){this.eventSequence.push(l);},bump:function(l,m){if(m===(void 0))m=1;this.log[l]=(this.log[l]||0)+m;},bumpTap:function(l,m){this.tap(l);this.bump(l,m);},startRun:function(l){if(!this.profiler[l])this.profiler[l]={average:0,count:0};this.profiler[l].start=+new Date();},endRun:function(l){if(!this.profiler[l]||!this.profiler[l].start)return;this._recordRun(l,new Date()-this.profiler[l].start);this.profiler[l].start=null;},getLog:function(){this._updateLog();return this.log;},submit:function(){this._updateLog();h.post(this.projectName,this.log);},_pingActive:function(){var l=Date.now(),m=l-this.lastInteraction;if(m<(k.IDLE_LIMIT))this.interactionTime+=m;this.lastInteraction=l;},_updateLog:function(){for(var l in this.profiler){this.log[l+'-count']=this.profiler[l].count;this.log[l+'-average']=this.profiler[l].average;}if(this.interactionTime)this.log['interaction-time']=this.interactionTime;if(this.eventSequence.length)this.log['event-sequence']=this.eventSequence;},_recordRun:function(l,m){var n=this.profiler[l];n.average=(n.average*n.count+m)/(n.count+1);n.count++;}});e.exports=k;},null);
__d("MapPager",["ArbiterMixin","Event","mixin"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=i(g);for(var k in j)if(j.hasOwnProperty(k))m[k]=j[k];var l=j===null?null:j.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=j;function m(n,o){"use strict";j.call(this);h.listen(n,'click',this.inform.bind(this,'previous'));h.listen(o,'click',this.inform.bind(this,'next'));}e.exports=m;},null);
__d("TimelineMapFilter",["Arbiter","CSS","DOM","Event","NumberFormatConfig","PageTransitions","ProfileTabConst","StickyPlaceholderInput","TimelineURI","$","cx","ads-lib-formatters","ge","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b.__markCompiled&&b.__markCompiled();var u='pagelet_timeline_medley_map';function v(x){return o.getTabKeyFromURI(x)===m.MAP;}function w(){}Object.assign(w.prototype,{init:function(x,y,z,aa,ba){this._classes={count:"_3d0",filter:"_3c_",selected:"_3s-",text:"_3sz"};this.catNames=[];this.catIndex=0;this.categoryButtons=[];this.mapController=x;this.stickies=y||[];this.tagUnit=s('fbTimelineMapTagUnit');this.tagUnitInited=false;this.mapID=z;this.pluralMap=aa;this.initialCatName=ba;var ca={},da,ea;for(da=0;da<this.stickies.length;da++){ea=this.stickies[da].name[2];ca[ea]=this.stickies[da].countOnlyUnique;this.categoryButtons[da]=this.stickies[da].buttonID&&s(this.stickies[da].buttonID);if(this.categoryButtons[da])j.listen(this.categoryButtons[da],'click',this.handleTabClick.bind(this,da));}this.mapController.setCategoryCountUnique(ca);t([g.subscribe('TimelineMap/updateCategories',this.updateCategories.bind(this))]);},setCategory:function(x){this.mapController.setCategory(this.catNames[x]);var y=p(u),z=i.scry(y,'.fbTimelineStickyHeaderPlaceComposer input.skiptowant')[0];if(z)z.setAttribute('value',this.stickies[x].name.skip_to_want);var aa=i.scry(y,'.fbTimelineStickyHeaderPlaceComposer div.uiStickyPlaceholderInput')[0];if(aa)n.setPlaceholderText(aa,this.stickies[x].name.placeholder);var ba=i.scry(y,'div.'+"_4_zv")[0];if(ba)i.setContent(ba,this.stickies[x].name.section_title);},handleTabClick:function(x,y){var z=l.getCurrentURI().getUnqualifiedURI();y&&!y.isDefaultRequested()&&y.prevent();if(v(z)&&this.stickies[x].uri)l.rewriteCurrentURI(z,this.stickies[x].uri);this.setCategory(x);this.mapController.zoomToVisible();},setFilter:function(x,y,z,aa,ba){var ca=this.categoryButtons[x];if(!ca)return;var da=z||0;if(da>=200)da=(da%100)+100;da=y[this.pluralMap[da]];this.catNames[x]=y[2];i.setContent(i.find(ca,'.'+this._classes.text),da);if(z){i.setContent(i.find(ca,'.'+this._classes.count),r.formatNumber(z,0,k.numberDelimiter,''));}else i.empty(i.find(ca,'.'+this._classes.count));h.conditionClass(ca.firstChild,aa,!!aa);if(ba)ca.setAttribute('href',ba);h.show(ca);},updateCategories:function(x,y){if(y._instanceid!==this.mapID)return;var z=this.mapController.getCategories(),aa=this.catNames[this.catIndex]||this.initialCatName;this.catNames=[];var ba=0;for(var ca=0;ca<this.stickies.length;ca++){var da=this.stickies[ca],ea=da.name,fa=0,ga=da.domClass,ha=ea[2];if(z[ha]){fa=z[ha].count;delete z[ha];}if(da.showWhenZero||fa!==0){this.setFilter(ba,ea,fa,ga,da.uri);ba++;}}var ia=[];for(var ja in z)ia.push(z[ja]);ia=ia.sort(function(na,oa){return oa.count-na.count;});for(var ka=0;ka<this.categoryButtons.length-ba;ka++){var la=ia[ka];if(la){this.setFilter(ka+ba,la.name,la.count);}else h.hide(this.filters[ka+ba]);}if(aa){this.initialCatName=null;var ma=this.catNames.indexOf(aa);if(ma!=-1){this.setCategory(ma);}else this.setCategory(0);}}});Object.assign(w,{init:function(){var x=new w();x.init.apply(x,arguments);}});e.exports=w;},null);
__d("TimelineMapStickyHeaderComposer",["Arbiter","AsyncRequest","Bootloader","CSS","$","bind","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();function n(){g.subscribe('TimelineMapStickyHeaderComposer/showPhotoTagUnit',this.showPhotoTagUnit.bind(this));g.subscribe('TimelineMapStickyHeaderComposer/hidePhotoTagUnit',this.hidePhotoTagUnit.bind(this));}Object.assign(n.prototype,{initPlaceTypeahead:function(o){o.subscribe('focus',function(){i.loadModules(["TimelineMLE"],function(p){p.hideFlyout();});g.inform('TimelineMapStickyHeaderComposer/typeaheadFocus');}.bind(this));o.subscribe('blur',function(){g.inform('TimelineMapStickyHeaderComposer/typeaheadBlur');}.bind(this));o.subscribe('select',function(){g.inform('TimelineMapStickyHeaderComposer/typeaheadSelect');}.bind(this));},showPhotoTagUnit:function(o,p){this.tagUnit=k('fbTimelineMapTagUnit');j.show(this.tagUnit);var q=m('mainContainer');q&&j.addClass(q,'photoTaggingMode');if(!this.tagUnitInited){this.tagUnitInited=true;this.indicator=k('fbTimelineMapAddPhotoLoading');j.show(this.indicator);var r=p?p.sid:null;new h().setURI('/ajax/timeline/map/photo_strip.php').setData({div_id:'fbTimelineMapTagUnit',sid:r}).setReadOnly(true).setHandler(l(this,'_onLoadPhotoStrip')).send();}else this._onLoadPhotoStrip();},hidePhotoTagUnit:function(){this.tagUnit=k('fbTimelineMapTagUnit');j.hide(this.tagUnit);var o=m('mainContainer');o&&j.removeClass(o,'photoTaggingMode');},_onLoadPhotoStrip:function(){j.hide(this.indicator);}});e.exports=n;},null);
__d("legacy:TimelineMapStickyHeaderComposer",["TimelineMapStickyHeaderComposer"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.TimelineMapStickyHeaderComposer=b('TimelineMapStickyHeaderComposer');},3);
__d("TypeaheadTimelineHighlightMapPlace",["Arbiter"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){this._typeahead=i;}Object.assign(h.prototype,{_subscription:null,enable:function(){this._subscription=this._typeahead.subscribe(['reset','select','highlight'],function(i,j){if(i==='highlight'&&j.index!==-1&&j.selected.type!='freeform'&&j.selected.latitude&&j.selected.longitude&&!j.selected.changeCity&&j.index!=this.lastDataIdx){var k=j.selected.place_type=='city'?10:15;g.inform('TimelineMap/highlightMapPlace',{placeID:j.selected.uid,center:{latitude:j.selected.latitude,longitude:j.selected.longitude},zoom:k});}else if(i==='highlight'&&j.index==-1){g.inform('TimelineMap/highlightMapPlace',{dismiss:true});}else if(i==='select'){g.inform('TimelineMap/highlightMapPlace',{selected:true});}else if(i==='reset')g.inform('TimelineMap/highlightMapPlace',{dismiss:true});this.lastDataIdx=j&&j.index;});},disable:function(){this._typeahead.unsubscribe(this._subscription);this._subscription=null;}});e.exports=h;},null);
__d("TypeaheadTimelineShowThrobberOnSelect",["Arbiter"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){this._typeahead=i;}Object.assign(h.prototype,{_subscription:null,enable:function(){this._subscription=this._typeahead.subscribe(['select'],function(i,j){g.inform('TimelineMap/highlightMapPlace',{showThrobber:true});});},disable:function(){this._typeahead.unsubscribe(this._subscription);this._subscription=null;}});e.exports=h;},null);
__d("legacy:TimelineMapPlaceTypeaheadBehaviors",["TypeaheadTimelineHighlightMapPlace","TypeaheadTimelineShowThrobberOnSelect"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.highlightMapPlace=function(i){i.enableBehavior(g);};a.TypeaheadBehaviors.showThrobberOnSelect=function(i){i.enableBehavior(h);};},3);
__d("PlacesAppAddPlacesCuration",["Arbiter","TimelineAppSectionCuration"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={registerContent:function(j){h.register(j,function(k,l,m){g.inform('TimelineMapStickyHeaderComposer/showPhotoTagUnit');m.unsubscribe();});}};e.exports=i;},null);
__d("TimelineLifeEventPhotoPreviewGrid",["ActorURI","AsyncUploadRequest","AsyncRequest","Bootloader","CSS","DOM","FileInputUploader","Parent","ProgressBar","SortableGroup","TimelineLifeEventPhotoConfig","fbt","Button","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b.__markCompiled&&b.__markCompiled();var u=1,v=2,w=3,x=[null,'mleOnePhoto','mleTwoPhotos','mleManyPhotos'];function y(ca,da,ea,fa){"use strict";this._container=ca;this._containerID=ca.id;this._grid=da;this._photoLimit=ea;this._profileID=fa;this._progressBarMarkup=q.progressBarMarkup;this._loadingIndicators=[];this._pendingPhotoRequests=0;this._photoDisplayType=0;this._tempPhotoRef=[];this._saveButton=l.find(this._container,"._5mlk");if(!q.enableDrag)return;this._sortableGroup=new p().setGrabCallback(aa).setDropCallback(ba);var ga=l.scry(da,'.mlePhotoPreviewThumb');for(var ha=0;ha<ga.length;ha++)this._bindPhoto(ga[ha]);this._updatePhotoDisplayType(ga.length);}y.prototype.destroy=function(){"use strict";this._sortableGroup&&this._sortableGroup.destroy();};y.prototype._getNumPhotos=function(){"use strict";return l.scry(this._grid,'.mlePhotoPreviewThumb').length+l.scry(this._grid,'.mlePhotoPlaceholder').length;};y.prototype._getPhotoType=function(ca){"use strict";switch(ca){case 0:case 1:return u;case 2:return v;default:if((ca<0)||(ca>this._photoLimit))throw new Error('invalid number of photos');return w;}};y.prototype._updatePhotoDisplayType=function(ca){"use strict";var da=x[this._photoDisplayType];da&&k.removeClass(this._container,da);this._photoDisplayType=this._getPhotoType(ca);k.addClass(this._container,x[this._photoDisplayType]);};y.prototype._updateAddMorePhotosClass=function(){"use strict";if(this._pendingPhotoRequests>0){k.addClass(l.find(this._container,'.mleAddMorePhotoButtons'),'disabled');}else k.removeClass(l.find(this._container,'.mleAddMorePhotoButtons'),'disabled');};y.prototype._updatePhotos=function(ca,da){"use strict";var ea=da,fa=[],ga=this._photoDisplayType;this._updatePhotoDisplayType(ca);if(this._photoDisplayType!==ga){var ha=l.scry(this._grid,'.mlePhotoPreviewThumb');for(var ia=0;ia<ha.length;ia++){var ja=l.find(ha[ia],'.mlePhotoPreviewInput').value;fa.push(ja);if((this._photoDisplayType===w)||(ga===w)){this._unbindPhoto(ha[ia]);l.remove(ha[ia]);this.createPlaceholder(ja);}else{k.addClass(ha[ia],'photoLoading');k.hide(l.find(ha[ia],'.detachPhotoIcon'));k.show(l.find(ha[ia],'.photoLoadingSpinner'));this._unbindPhoto(ha[ia]);this._tempPhotoRef[ja]=ha[ia];}}}var ka=ea.concat(fa);if(ka.length>0){this._pendingPhotoRequests+=ka.length;if(this._photoDisplayType!==w)this._updateAddMorePhotosClass();var la=g.create('/ajax/timeline/mle_photo_select.php',this._profileID);new i().setURI(la).setData({display_elem:this._containerID,existing_image_ids:fa,field_name:'photos',image_ids:ea,profile_id:this._profileID,total_photos:ca}).setMethod('POST').send();}};y.prototype._bindPhoto=function(ca){"use strict";this._sortableGroup&&this._sortableGroup.addSortable(l.find(ca,'input').getAttribute('value'),ca);};y.prototype._unbindPhoto=function(ca){"use strict";this._sortableGroup&&this._sortableGroup.removeSortable(l.find(ca,'input').getAttribute('value'));};y.prototype.filterPhotoClick=function(event){"use strict";if((this._pendingPhotoRequests>0)&&(this._photoDisplayType!=w))event.kill();};y.prototype.attachPhoto=function(ca,da){"use strict";if((!this._loadingIndicators[da])&&(!this._tempPhotoRef[da]))return;if(this._tempPhotoRef[da]){l.replace(this._tempPhotoRef[da],ca);this._bindPhoto(ca);delete this._tempPhotoRef[da];}else{var ea=this._loadingIndicators[da].getRoot();if(n.byTag(ea,'body')){l.replace(ea,ca);this._bindPhoto(ca);}delete this._loadingIndicators[da];}if(--this._pendingPhotoRequests===0)this._updateAddMorePhotosClass();};y.prototype.detachPhoto=function(ca){"use strict";if(this._pendingPhotoRequests>0)return;this._unbindPhoto(ca);l.remove(ca);var da=this._getNumPhotos();this._updatePhotos(da,[]);if(da===0){k.show(l.find(this._container,'.mlePhotoButtons'));k.hide(l.find(this._container,'.mleAddMorePhotoButtons'));}else if(da===this._photoLimit-1)k.show(l.find(this._container,'.mleAddMorePhotoButtons'));};y.prototype.createPlaceholder=function(ca){"use strict";var da=this._progressBarMarkup.cloneNode(true);da=l.appendContent(this._grid,da)[0];this._loadingIndicators[ca]=new o(da);return da;};y.prototype.addPhotos=function(ca){"use strict";var da=this._getNumPhotos(),ea=ca.length,fa=da+ea;if(fa>this._photoLimit){var ga=r._("The maximum number of photos you can add to this life event is {limit}. Please remove some photos and try again.",[r.param("limit",this._photoLimit)]);j.loadModules(["Dialog"],function(ja){new ja().setTitle(r._("Too Many Photos")).setBody(ga).setButtons(ja.OK).setCausalElement(this._container).show();}.bind(this));return;}if(fa===this._photoLimit)k.hide(l.find(this._container,'.mleAddMorePhotoButtons'));var ha=ca.slice(0,ea);this._updatePhotos(fa,ha);for(var ia=0;ia<ea;ia++)this.createPlaceholder(ca[ia]);};y.prototype.destroyPlaceholder=function(ca){"use strict";if(!this._loadingIndicators[ca])return;l.remove(this._loadingIndicators[ca].getRoot());delete this._loadingIndicators[ca];};y.prototype.initUploader=function(ca,da){"use strict";var ea=ca.getInput();ea.multiple=h.isSupported();ca.subscribe('change',this._uploadPhotos.bind(this,ea,da));};y.prototype._setSaveButtonEnabled=function(ca){"use strict";s.setEnabled(this._saveButton,ca);};y.prototype._uploadPhotos=function(ca,da){"use strict";k.hide(l.find(this._container,'.mlePhotoButtons'));k.show(l.find(this._container,'.mleAddMorePhotoButtons'));var ea=this._getNumPhotos(),fa=ca.files?ca.files.length:1,ga=ea+fa;if(ga>this._photoLimit){var ha=r._({"*":"The maximum number of photos you can add to this life event is {limit}. Please remove some photos and try again."},[r.param("limit",this._photoLimit,[0])]);j.loadModules(["Dialog"],function(ma){new ma().setTitle(r._("Too Many Photos")).setBody(ha).setButtons(ma.OK).setCausalElement(this._container).show();}.bind(this));z(ca);return;}var ia,ja;for(var ka=0;ka<fa;ka++){ja=ca.files?ca.files[ka].name:ca.value.split('\\').pop();ia=this.createPlaceholder(ja);}this._updatePhotos(ga,[]);da.uploadData.total_photos=ga;if(this._photoDisplayType!=w)this._pendingPhotoRequests+=fa;var la=new m(ca).setURI(da.uploadURI).setData(da.uploadData).setAllowCrossOrigin(true).setUploadInParallel(true);la.subscribe('progress',this._onProgress.bind(this));la.subscribe('success',this._onSuccess.bind(this));la.subscribe('failure',this._onFailure.bind(this,ja));la.send();this._setSaveButtonEnabled(false);z(ca);};y.prototype._onProgress=function(ca,da){"use strict";var event=da.event,ea=this._loadingIndicators[da.upload.getFile().name];k.hide(l.find(ea.getRoot(),'.mlePhotoLoadingIndicator'));k.show(l.find(ea.getRoot(),'.mlePhotoProgressBar'));if(event.loaded==event.total){ea.setPosition(50);ea.setTarget(100,2000);}else ea.setPosition(50*event.loaded/event.total);};y.prototype._onSuccess=function(ca,da){"use strict";this._setSaveButtonEnabled(true);};y.prototype._onFailure=function(ca){"use strict";this.destroyPlaceholder(ca);this._setSaveButtonEnabled(true);};function z(ca){ca.value='';ca.files=null;}function aa(ca){k.addClass(ca,'dragging');}function ba(ca,da){k.removeClass(da,'dragging');}e.exports=y;},null);
__d("RelationshipStatusConst",["fbt"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();e.exports={UNDEFINED:0,SINGLE:1,IN_A_RELATIONSHIP:2,OPEN_RELATIONSHIP:3,MARRIED:4,ENGAGED:5,COMPLICATED:6,WIDOWED:7,SEPARATED:8,DIVORCED:9,CIVIL_UNION:10,DOMESTIC_PATNERSHIP:11,isUnilateralStatus:function(h){return (h==this.UNDEFINED||h==this.SINGLE||h==this.WIDOWED||h==this.SEPARATED||h==this.DIVORCED);},getAnniversaryText:function(h){switch(h){case this.IN_A_RELATIONSHIP:case this.OPEN_RELATIONSHIP:case this.MARRIED:case this.CIVIL_UNION:case this.DOMESTIC_PARTNERSHIP:return (g._("Anniversary"));case this.ENGAGED:case this.COMPLICATED:return (g._("Since"));default:throw new Error('Relationship status doesn\'t support anniversaries');}},willCreateLifeEvent:function(h,i,j,k){if(this.isUnilateralStatus(i))return false;if(i==this.COMPLICATED&&!this.isUnilateralStatus(h))return false;if(i!=h)return true;if(j>0&&k>0&&j!=k)return true;return false;}};},null);
__d("TimelineMLEPhotoPreview",["Event","CSS","Dialog","DOM","Layer","Parent","TimelineLifeEventPhotoPreviewGrid","$"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o=[],p={initPreviewGrid:function(q,r,s){var t=l.byClass(q,'mleContainer');p.destroyPreviewGrid(t);o[t.id]=new m(t,q,r,s);g.listen(j.find(t,'.mleAddMorePhotoButtons'),'click',function(event){o[t.id].filterPhotoClick(event);});},destroyPreviewGrid:function(q){if(o[q.id]){o[q.id].destroy();delete o[q.id];}},initUploader:function(q,r,s){if(o[r])o[r].initUploader(q,s);},attachPhoto:function(q,r,s){if(o[q])o[q].attachPhoto(r,s);},listenForDetach:function(q,r){var s=o[r];g.listen(j.find(q,'.detachPhotoIcon'),'click',s.detachPhoto.bind(s,q));},listenForPhotoSelect:function(q,r){var s=n(r.display_elem),t=false;g.listen(q,'click',function(){if(t)return;t=true;h.hide(j.find(s,'.mlePhotoButtons'));h.show(j.find(s,'.mleAddMorePhotoButtons'));var u=i.getCurrent();if(u)u.hide();var v=o[s.id];if(v)v.addPhotos([r.photo_fbid]);});},listenForSubmit:function(q,r,s){var t=n(s);q.subscribe('confirm',function(){var u=j.scry(q.getContentRoot(),'input[name="'+r+'"]'),v=[];for(var w=0;w<u.length;w++){var x=u[w];if(x.checked===true)v.push(x.value);}h.hide(j.find(t,'.mlePhotoButtons'));h.show(j.find(t,'.mleAddMorePhotoButtons'));var y;if(y=i.getCurrent())y.hide();if(y=k.getTopmostLayer())y.hide();if(o[t.id])o[t.id].addPhotos(v);});}};e.exports=p;},null);
__d("XFamilyNonUserCreationFormController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/family\/create\/form\/",{show_intro:{type:"Bool",defaultValue:false},name:{type:"String"},relation:{type:"Int"},existing_relationship_id:{type:"Int"},prefilled_data:{type:"StringToStringMap"},source:{type:"String",defaultValue:"unknown"},waterfall_id:{type:"String"},birth_month:{type:"Int"},birth_day:{type:"Int"},birth_year:{type:"Int"},privacy_row:{type:"StringToIntMap"},__asyncDialog:{type:"Int"}});},null);
__d("TimelineMLE",["Animation","Arbiter","AsyncRequest","Bootloader","ComposerXController","CSS","DOM","DOMScroll","Event","Form","Parent","ProgressiveDatepicker","ReactComposerActions","ReactComposerIDGenerator","RelationshipStatusConst","TimelineComposerUtilities","TimelineContentLoader","TimelineMLEPhotoPreview","XFamilyNonUserCreationFormController","$","areJSONRepresentationsEqual","cssVar","csx","cx","fbt","ge","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga){b.__markCompiled&&b.__markCompiled();var ha=0,ia={},ja=null,ka=null,la=50;function ma(ya){return q.byClass(ya,'mleFlyoutForm');}function na(ya){var za=q.byClass(ya.getContext(),'fbTimelineCapsule');if(za)return za;return w.capsuleForCurrentSection();}function oa(ya){var za=p.serialize(ya);qa(ya,za);pa(ya,za);if(!aa(za,ia.state)){ra(ya);new i().setData(za).setURI('/ajax/timeline/mle_header.php').setRelativeTo(ya).setFinallyHandler(h.inform.bind(h,'TimelineMLE/mleHeaderUpdated')).send();}}function pa(ya,za){var ab=m.scry(ya,"._594n")[0];if(!ab)return;var bb=za.hasOwnProperty('name')?za.name:za.text_with&&za.text_with[0];if(bb)m.setContent(ab,ea._("{name} will be added to the Family section on your profile.",[ea.param("name",bb)]));l.conditionClass(ab,'hidden_elem',!bb);}function qa(ya,za){var ab=parseInt(za.type,10),bb=za['with'],cb=m.scry(ya,'input.updateRelationshipStatus')[0];if(!cb)return;var db=m.scry(ya,'li.relationshipConfirmation')[0];if(!db)return;var eb=m.find(ya,'li.relationshipTooManyPartners');if(bb&&bb.length>1){l.hide(db);l.show(eb);cb.checked=false;cb.disabled=true;return;}l.hide(eb);cb.disabled=false;var fb=bb&&bb[0],gb=m.find(ya,'input.relationshipCurrentPartnerID').value,hb=m.find(ya,'input.relationshipCurrentStatus').value,ib=u.isUnilateralStatus(ab),jb=cb.checked&&!ib&&fb&&(gb!=fb||hb!=ab);if(fb){var kb=za.text_with[0],lb=m.find(ya,'span.relationshipPartnerName');m.setContent(lb,kb);}l.conditionClass(db,'hidden_elem',!jb);}function ra(ya){ya=ya||ia.element;if(!ya)return;ia={element:ya,state:p.serialize(ya)};}function sa(event){var ya=event.getTarget(),za=ya.options[ya.selectedIndex];h.inform('TimelineMLE/mleSelectUpdated',ya);var ab=q.byClass(za,'mleFormContainer');oa(ab);var bb=m.scry(ab,'.mleOtherLabel'),cb=m.scry(ab,'.mleOtherField');if(bb.length)bb=bb[0];if(cb.length)cb=cb[0];if(l.hasClass(za,'mleOther')){l.show(bb);l.show(cb);var db=m.find(cb,'.inputOuter').firstChild;db.focus();}else{l.hide(bb);l.hide(cb);}}function ta(){if(!ja)return;var ya=ja,za=m.scry(ya.getInnerContent(),'.mleContainer')[0];za&&x.destroyPreviewGrid(za);ya.hide();ia={};ja=null;h.inform('TimelineMLE/mleFlyoutHidden');}function ua(ya,za){m.replace(z(ya),za);}function va(ya){if(ya)o.listen(ya,'change',sa);}function wa(ya,za){new g(ya).to('background',za).duration(la).go();}var xa={addRequiredValidationToField:function(ya){var za=ea._("This field is required."),ab=ya.placeholder;o.listen(ya,'blur',function(bb){if(ya.value===null||ya.value.length===0){ya.placeholder=za;var cb="#ffbaba";wa(ya,cb);}});o.listen(ya,'focus',function(bb){if(ya.placeholder===za){ya.placeholder=ab;wa(ya,"#ffffff");}});},cancel:function(ya){if(ma(ya)){xa.hideFlyout();}else{var za=q.byClass(ya,'mleContainer');za&&x.destroyPreviewGrid(za);var ab=q.byClass(ya,'fbTimelineNewMLE');if(ab){m.remove(ab);}else{ab=q.byClass(ya,'fbTimelineEditMLE');l.removeClass(ab,'fbTimelineEditMLE');m.remove(m.scry(ab,'.timelineUnitContainer')[0]);l.show(m.scry(ab,'.timelineUnitContainer')[0]);}if(l.hasClass(ab,'fbTimelineNotStarred')){l.removeClass(ab,'fbTimelineNotStarred');j.loadModules(["TimelineStar"],function(bb){bb.unstarUnit(ab.childNodes[0],null,true);});}h.inform('TimelineMap/resizeCallout');}ia={};return false;},registerButtons:function(ya,za,ab,bb){ga(o.listen(za,'mousedown',function(){ya.standalone?ja.setStackable(false):m.setContent(m.find(bb,'.mleInlineErrorMsg'),'');}));if(ab)ga(o.listen(ab,'click',function(cb){cb.prevent();if(ya.location==='map')h.inform('TimelineMap/cancelCreation');ya.standalone?xa.hideFlyout():xa.cancel(ab);}));},registerStickyPrivacyFlyout:function(ya){h.subscribe('TimelineMLE/mleFlyoutHidden',ya.hide.bind(ya));h.subscribe('TimelineMLE/mleHeaderUpdated',ya.updatePosition.bind(ya));},replace:function(ya,za){var ab=q.byClass(ya,'mleContainer');ab&&x.destroyPreviewGrid(ab);if(ma(ya)){var bb=q.byClass(ya,'fbTimelineEditMLEFlyout');if(bb){ya=q.byClass(z(za.relativeElementID),'fbTimelineEditMLE');xa.hideFlyout();m.replace(ya,za.streamStory);ya=z(za.streamStory);}else{var cb=function(eb){var fb=fa(za.relativeElementID);if(t.isComposerID(fb.id)){s.reset(fb.id);}else fb&&k.reset(fb);eb.publish(za,za.streamStory);xa.hideFlyout();};if(za.isFinch){j.loadModules(["PagesStoryPublisher"],cb);}else j.loadModules(["TimelineStoryPublisher"],cb);ya=z(za.streamStory);}}var db=m.scry(ya,'div.keepStarred')[0];if(db)j.loadModules(["TimelineStar"],function(eb){eb.starUnit(db,null,true);});return false;},startEdit:function(ya,za){xa.hideFlyout();var ab=m.scry(ya,'div.timelineUnitContainer')[0];l.hide(ab);l.addClass(ya,'fbTimelineEditMLE');if(!za)l.addClass(ya,'fbTimelineNotStarred');},showFlyout:function(ya,za,ab){xa.hideFlyout();ja=ya;ha=0;h.subscribe('TimelineMLE/mleSelectUpdated',function(fb,gb){var hb=q.byClass(gb,'mleFormOuterContainer'),ib=m.scry(hb,'.registrationLink');if(!ib.length)return;var jb=gb.selectedIndex;l.hide(ib[ha]);l.show(ib[jb]);ha=jb;});ya.show();if(za==='edit'){var bb=z(ab),cb=q.byClass(bb,"_5jmm")||q.byClass(bb,'lifeEventContainer');l.addClass(cb,'fbTimelineEditMLE');var db=m.find(ya.getInnerContent(),'.timelineUnitContainer');l.addClass(db,'fbTimelineEditMLEFlyout');n.ensureVisible(db,null,100);}if(za!='map'){var eb=m.scry(ya.getInnerContent(),'.mleSelect');if(eb.length)va(eb[0]);}if(za!=='edit')xa.setEstimatedDate(ya);h.inform('TimelineMLE/mleFlyoutShown',ya);},showPrivacyNotice:function(ya,za){if(!za||!ya)return;var ab=m.find(ya.getInnerContent(),'.audienceSelector');za.setContext(ab).show();ka=za;o.listen(ab,'click',za.hide.bind(za));o.listen(m.find(za.getContent(),'input'),'click',za.hide.bind(za));h.subscribe('TimelineMLE/mleFlyoutHidden',za.hide.bind(za));},hideFlyout:ta,getFlyout:function(){return ja;},listenForEditChanges:function(ya){var za=m.find(ya,'form.mleFormContainer'),ab=za.elements;for(var bb=0;bb<ab.length;++bb){if(q.byClass(ab[bb],'uiTypeahead')||q.byClass(ab[bb],'uiTokenizer')||l.hasClass(ab[bb],'mleSelect'))continue;if(l.hasClass(ab[bb],'inputradio')){o.listen(ab[bb],'click',oa.bind(null,za));}else if(q.byClass(ab[bb],'mleDatepicker')){o.listen(ab[bb],'change',oa.bind(null,za));}else o.listen(ab[bb],'blur',oa.bind(null,za));}ia={element:za,state:p.serialize(za)};var cb=m.scry(ya,'input.updateRelationshipStatus')[0];if(cb)ga(o.listen(cb,'change',function(){var db=p.serialize(za);qa(za,db);}));},updateHeader:function(ya){oa(q.byClass(ya,'mleFormContainer'));},setEstimatedDate:function(ya){var za=m.scry(ya.getContentRoot(),'.fbTimelineComposerUnit')[0];if(!za){var ab=r.getInstance(m.scry(ya.getInnerContent(),'.uiProgressiveDatepicker')[0]);if(ab)v.setEstimatedDate(ab,na(ya));}},updatePrivacyNoticePosition:function(){ka&&ka.updatePosition();},registerOptionHandler:function(ya){var za=m.scry(ya,'.lifeEventContainer')[0],ab=m.scry(za,'.mleSelect');if(ab.length)va(ab[0]);},subscribeToTypeahead:function(ya,za){ya.subscribe(['select','reset','blur'],xa.updateHeader.bind(null,za));},subscribeToTokenizer:function(ya,za){ya.subscribe(['addToken','removeToken'],xa.updateHeader.bind(null,za));},replaceYearlySummary:function(ya){ua('pagelet_yearly',ya);ta();},replaceHometown:function(ya){ua('pagelet_hometown',ya);ta();},showScrapbookPopover:function(ya){var za=y.getURIBuilder().getURI();new i().setURI(za).setData({experience_id:ya.experience_id,existing_relationship_id:ya.existing_relationship_id,name:ya.name,relation:ya.relation,source:ya.source,birth_month:ya.birth_month,birth_day:ya.birth_day,birth_year:ya.birth_year,privacy_row:ya.privacy_row}).send();}};e.exports=a.TimelineMLE||xa;},null);