/*!CK:3804877265!*//*1438049882,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Q15xc"]); }

__d("LtgLanguageDialectDropdown.react",["React","ReactComponentWithPureRenderMixin","PopoverMenu.react","ReactXUIMenu","fbt"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();'use strict';var l=j.Item,m=g,n=m.PropTypes,o=g.createClass({displayName:"LtgLanguageDialectDropdown",mixins:[h],getInitialState:function(){return {selectedDialect:this.props.initialDialect};},propTypes:{className:n.string,dialectToNamesMap:n.object.isRequired,initialDialect:n.string.isRequired,onSelect:n.func.isRequired},render:function(){var p=g.createElement(j,{onItemClick:this._onItemClick},this._getLanguagesMenuItems()),q=this.props.dialectToNamesMap[this.state.selectedDialect];return (g.createElement(i,{className:this.props.className,menu:p},g.createElement("a",{title:this._getDisplayToolTipString()},q)));},_getLanguagesMenuItems:function(){return Object.keys(this.props.dialectToNamesMap).map(function(p){return p!==this.state.selectedLanguageDialect?g.createElement(l,{key:p,value:p},this.props.dialectToNamesMap[p]):null;}.bind(this));},_onItemClick:function(p,q){var r=q.item.getValue();this.setState({selectedDialect:r});this.props.onSelect(r);},_getDisplayToolTipString:function(){return (k._("Show available languages"));}});e.exports=o;},null);