/*!CK:2317446828!*//*1437403697,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["FDshA"]); }

__d("ReactComposerMultilingualStatusActions",["ReactComposerDispatcher","ReactComposerMultilingualStatusActionType","ReactComposerMultilingualStatusStore"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();b('ReactComposerMultilingualStatusStore');function i(){"use strict";}i.prototype.languageCreated=function(j,k,l){"use strict";g.dispatch({composerID:j,type:h.LANGUAGE_CREATED,languageDialect:k,languageConfig:l});};i.prototype.languageRemoved=function(j,k){"use strict";g.dispatch({composerID:j,type:h.LANGUAGE_REMOVED,languageDialect:k});};i.prototype.languageChanged=function(j,k,l){"use strict";g.dispatch({composerID:j,type:h.LANGUAGE_CHANGED,oldLanguageDialect:k,newLanguageDialect:l});};i.prototype.setEditorState=function(j,k,l){"use strict";g.dispatch({composerID:j,type:h.SET_LANGUAGE_EDITOR_STATE,languageDialect:k,editorState:l});};i.prototype.setSpecifiedPostLanguage=function(j,k){"use strict";g.dispatch({composerID:j,type:h.SET_SPECIFIED_POST_LANGUAGE,languageDialect:k});};e.exports=new i();},null);