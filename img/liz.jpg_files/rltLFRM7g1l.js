/*!CK:4064895116!*//*1438049882,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["+4O2Z"]); }

__d("ReactComposerMultilingualStatusContainer.react",["ReactComposerContextMixin","ReactComposerMultilingualStatusStore","ReactComposerPropsAndStoreBasedStateMixin","ReactComposerMultilingualStatus.react","ReactComposerMultilingualStatusActions","ReactComponentWithPureRenderMixin","React","createEmptyEditorState","getMentionsInputDecorator"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=m,q=p.PropTypes,r=m.createClass({displayName:"ReactComposerMultilingualStatusContainer",mixins:[l,g,i(h)],propTypes:{onChange:q.func},getInitialState:function(){return {selectingLanguageDialect:false,showingPrompt:true};},statics:{calculateState:function(s,t){return {specifiedPostLanguage:h.getSpecifiedPostLanguage(s),statuses:h.getStatuses(s)};}},render:function(){return (m.createElement(j,{onAddingLanguageClick:this._onAddingLanguageClick,onBlur:this._onBlur,onChange:this._onChange,onLanguageCreateClick:this._onLanguageCreateClick,onLanguageRemoveClick:this._onLanguageRemoveClick,onLanguageDialectChange:this._onLanguageDialectChange,onPromptClose:this._onPromptClose,onSpecifyPostLanguage:this._onSpecifyPostLanguage,selectingLanguageDialect:this.state.selectingLanguageDialect,showingPrompt:this.state.showingPrompt,specifiedPostLanguageDialect:this._getSpecifiedPostLanguage(),statuses:this.state.statuses}));},_onAddingLanguageClick:function(){this.setState({selectingLanguageDialect:true});},_onLanguageCreateClick:function(s){k.languageCreated(this.context.composerID,s,{editorState:n(o())});this.setState({selectingLanguageDialect:false});},_onLanguageRemoveClick:function(s){k.languageRemoved(this.context.composerID,s);},_onLanguageDialectChange:function(s,t){k.languageChanged(this.context.composerID,s,t);},_onBlur:function(s,t){k.setEditorState(this.context.composerID,s,t);},_onChange:function(s,t){k.setEditorState(this.context.composerID,s,t);},_onSpecifyPostLanguage:function(s){k.setSpecifiedPostLanguage(this.context.composerID,s);},_onPromptClose:function(){this.setState({showingPrompt:false,selectingLanguageDialect:false});},_getSpecifiedPostLanguage:function(){return this.state.specifiedPostLanguage||'en_US';}});e.exports=r;},null);