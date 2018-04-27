/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery"],function(e,s){e.Message=function(e,s,t){this.Init(e,s,t)},e.Message.SEVERITY_TYPE={CONFIRMATION:"confirmation",INFO:"info",WARNING:"warning",ERROR:"error",FATAL:"fatal"},e.Message.SEVERITY_LEVEL={FATAL:5,ERROR:4,WARNING:3,INFO:2,CONFIRMATION:1},e.Object.createSubclass(e.Message,e.Object,"oj.Message"),e.Message.prototype.Init=function(s,t,n){e.Message.superclass.Init.call(this),this.summary=s,this.detail=t,this.severity=n||e.Message.SEVERITY_TYPE.ERROR},e.Message.prototype.canDisplay=function(){return!0},e.Message.prototype.equals=function(s){return!(!s||e.Message.getSeverityLevel(this.severity)!==e.Message.getSeverityLevel(s.severity)||this.summary!==s.summary||this.detail!==s.detail)},e.Message.prototype.clone=function(){return new e.Message(this.summary,this.detail,this.severity)},e.Message.getSeverityLevel=function(s){var t;return s&&("string"==typeof s?s=-1===(t=e.Message._LEVEL_TO_TYPE.indexOf(s,1))?e.Message.SEVERITY_LEVEL.ERROR:t:"number"==typeof s&&(s<e.Message.SEVERITY_LEVEL.CONFIRMATION||s>e.Message.SEVERITY_LEVEL.FATAL)&&(s=e.Message.SEVERITY_LEVEL.ERROR)),s||e.Message.SEVERITY_LEVEL.ERROR},e.Message.getSeverityType=function(s){return s&&("string"==typeof s?-1===e.Message._LEVEL_TO_TYPE.indexOf(s,1)&&(s=e.Message.SEVERITY_TYPE.ERROR):"number"==typeof s&&(s=s<e.Message.SEVERITY_LEVEL.CONFIRMATION||s>e.Message.SEVERITY_LEVEL.FATAL?e.Message.SEVERITY_TYPE.ERROR:e.Message._LEVEL_TO_TYPE[s])),s||e.Message.SEVERITY_TYPE.ERROR},e.Message.getMaxSeverity=function(t){var n,o=-1;return t&&t.length>0&&s.each(t,function(s,t){t&&(n=e.Message.getSeverityLevel(t.severity)),o=o<n?n:o}),o},e.Message.isValid=function(s){return!(e.Message.getMaxSeverity(s)>=e.Message.SEVERITY_LEVEL.ERROR)},e.Message._LEVEL_TO_TYPE=["none",e.Message.SEVERITY_TYPE.CONFIRMATION,e.Message.SEVERITY_TYPE.INFO,e.Message.SEVERITY_TYPE.WARNING,e.Message.SEVERITY_TYPE.ERROR,e.Message.SEVERITY_TYPE.FATAL],e.ComponentMessage=function(e,s,t,n){this.Init(e,s,t,n)},e.Object.createSubclass(e.ComponentMessage,e.Message,"oj.ComponentMessage"),e.ComponentMessage.DISPLAY={SHOWN:"shown",HIDDEN:"hidden"},e.ComponentMessage._DEFAULT_OPTIONS={display:e.ComponentMessage.DISPLAY.SHOWN,context:""},e.ComponentMessage.prototype.Init=function(t,n,o,a){e.ComponentMessage.superclass.Init.call(this,t,n,o),this._options=s.extend({},e.ComponentMessage._DEFAULT_OPTIONS,a)},e.ComponentMessage.prototype.equals=function(s){return e.ComponentMessage.superclass.equals.call(this,s)&&this._options.display===s._options.display},e.ComponentMessage.prototype.clone=function(){return new e.ComponentMessage(this.summary,this.detail,this.severity,this._options)},e.ComponentMessage.prototype.canDisplay=function(){return!(this._options&&this._options.display&&this._options.display===e.ComponentMessage.DISPLAY.HIDDEN)},e.ComponentMessage.prototype._forceDisplayToShown=function(){return!(!this._options||e.ComponentMessage.DISPLAY.HIDDEN!==this._options.display)&&(this._options.display=e.ComponentMessage.DISPLAY.SHOWN,!0)},e.ComponentMessage.prototype._isMessageAddedByComponent=function(){return!(!this._options||!this._options.context)}});