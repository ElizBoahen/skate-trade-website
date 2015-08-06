/*!CK:2481740457!*//*1438049882,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ExgLA"]); }

__d("ReactComposerMultilingualStatus.react",["ReactComposerContextMixin","LanguageDialectNames","LeftRight.react","Link.react","LtgLanguageDialectDropdown.react","LtgLanguageDialectSelector.react","Map","MentionsInput.react","MentionsInputTypeaheadView.react","ReactComponentWithPureRenderMixin","React","XUICloseButton.react","curry","cx","fbt","immutable"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){b.__markCompiled&&b.__markCompiled();var w=' \u00b7 ',x=q,y=x.PropTypes,z=q.createClass({displayName:"ReactComposerMultilingualStatus",_subscriptions:(undefined),mixins:[p,g],propTypes:{statuses:y.instanceOf(v.List).isRequired,onAddingLanguageClick:y.func,onBlur:y.func,onChange:y.func,onLanguageCreateClick:y.func.isRequired,onLanguageRemoveClick:y.func.isRequired,onLanguageDialectChange:y.func.isRequired,onPromptClose:y.func.isRequired,onSpecifyPostLanguage:y.func.isRequired,selectingLanguageDialect:y.bool.isRequired,showingPrompt:y.bool.isRequired,specifiedPostLanguageDialect:y.string},getInitialState:function(){return {editorStateMap:this._getLanguageToEditorStateMap(this.props.statuses)};},componentWillReceiveProps:function(aa){this.setState({editorStateMap:this._getLanguageToEditorStateMap(aa.statuses)});},_getLanguageToEditorStateMap:function(aa){return new m(this.props.statuses.map(function(ba){return [ba.languageDialect,ba.editorState];}));},render:function(){var aa=this.props.statuses.size>0&&this.props.specifiedPostLanguageDialect?q.createElement("div",{className:"_3jk8"},q.createElement(k,{dialectToNamesMap:h,initialDialect:this.props.specifiedPostLanguageDialect,onSelect:this._onSpecifyPostLanguage})):null;return (q.createElement("div",null,aa,this._getTextInputs(),this._getPrompt()));},_getTextInputs:function(){var aa=this.props.statuses.map(function(ba){return q.createElement("li",{key:ba.languageDialect},q.createElement(n,{className:"_2mcl",editorState:ba.editorState,onBlur:s(this._onBlur,ba.languageDialect),onChange:s(this._onChange,ba.languageDialect),ref:ba.languageDialect,typeaheadView:o}),q.createElement("div",{className:"_3jk8"},q.createElement(k,{className:"_3jka",dialectToNamesMap:h,initialDialect:ba.languageDialect,onSelect:function(ca){return this._onLanguageDialectChange(ba.languageDialect,ca);}.bind(this)}),w,q.createElement(j,{className:"_3jkb",onClick:s(this._onLanguageRemoveClick,ba.languageDialect)},u._("Remove"))));}.bind(this));return (q.createElement("ul",null,aa));},_getPrompt:function(){if(!this.props.showingPrompt)return null;var aa=this.props.selectingLanguageDialect?this._getSelectingLanguagePrompt():this._getWriteAnotherLanguagePrompt();return (q.createElement("div",{className:"_2mcl"},aa));},_getSelectingLanguagePrompt:function(){return (q.createElement(i,null,q.createElement("div",null,u._("Select Language:"),' ',q.createElement(l,{onChange:this._onLanguageCreateClick})),q.createElement("div",{className:"_2pic"},q.createElement(j,{onClick:this._onPromptClose},u._("Cancel")))));},_getWriteAnotherLanguagePrompt:function(){return (q.createElement(i,null,q.createElement("span",{className:"_3jk9",onClick:this.props.onAddingLanguageClick},u._("+ Write post in another language")),q.createElement(r,{className:"_4uvh",onClick:this._onPromptClose,size:"medium"})));},_onLanguageCreateClick:function(aa){this.props.onLanguageCreateClick(aa.value);},_onLanguageRemoveClick:function(aa){this.props.onLanguageRemoveClick(aa);},_onLanguageDialectChange:function(aa,ba){var ca=this.state.editorStateMap.set(ba,this.state.editorStateMap.get(aa));ca["delete"](aa);this.setState({editorStateMap:ca});this.props.onLanguageDialectChange(aa,ba);},_onSpecifyPostLanguage:function(aa){this.props.onSpecifyPostLanguage(aa);},_onPromptClose:function(){this.props.onPromptClose();},_onChange:function(aa,ba){this.setState({editorStateMap:this.state.editorStateMap.set(aa,ba)});this.props.onChange&&this.props.onChange(aa,ba);},_onBlur:function(aa){this.props.onBlur&&this.props.onBlur(aa,this.state.editorStateMap&&this.state.editorStateMap.get(aa));}});e.exports=z;},null);