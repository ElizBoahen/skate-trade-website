/*!CK:997359411!*//*1432788822,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["RdEk1"]); }

__d("ReactComposerImplicitLocationContainer.react",["ReactComposerImplicitLocationComponent.react","ReactComposerPropsAndStoreBasedStateMixin","ReactComposerTaggerActions","ReactComposerTaggerStore","ReactComposerTaggerType","AsyncRequest","URI","React"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o=n.createClass({displayName:"ReactComposerImplicitLocationContainer",mixins:[h(j)],statics:{calculateState:function(p,q){var r=j.getTaggerData(p,k.LOCATION)||{},s=r.implicitLocation||{};return {caption:s.citystring,hasExplicitLocation:!!r.place};}},render:function(){if(!this.state.caption)return n.createElement("noscript",null);return (n.createElement(g,n.__spread({},this.state,{onClear:this._onClear})));},_onClear:function(){var p=j.getTaggerData(this.context.composerID,k.LOCATION)||{};p.implicitLocation=null;i.setTaggerData(this.context.composerID,k.LOCATION,p);var q=new m('/ajax/places/toggle_location_sharing').addQueryData({disable:1,session_id:p.sessionID});new l(q).send();}});e.exports=o;},null);