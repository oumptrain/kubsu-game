// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e28208){if((e28208 instanceof Error)){
var e = e28208;
return "Error: Unable to stringify";
} else {
throw e28208;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__28211 = arguments.length;
switch (G__28211) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__28209_SHARP_){
if(typeof p1__28209_SHARP_ === 'string'){
return p1__28209_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__28209_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28214 = arguments.length;
var i__4737__auto___28215 = (0);
while(true){
if((i__4737__auto___28215 < len__4736__auto___28214)){
args__4742__auto__.push((arguments[i__4737__auto___28215]));

var G__28216 = (i__4737__auto___28215 + (1));
i__4737__auto___28215 = G__28216;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq28213){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28213));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28218 = arguments.length;
var i__4737__auto___28219 = (0);
while(true){
if((i__4737__auto___28219 < len__4736__auto___28218)){
args__4742__auto__.push((arguments[i__4737__auto___28219]));

var G__28220 = (i__4737__auto___28219 + (1));
i__4737__auto___28219 = G__28220;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq28217){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28217));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28221){
var map__28222 = p__28221;
var map__28222__$1 = (((((!((map__28222 == null))))?(((((map__28222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28222):map__28222);
var message = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22848__auto___28301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_28273){
var state_val_28274 = (state_28273[(1)]);
if((state_val_28274 === (7))){
var inst_28269 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
var statearr_28275_28302 = state_28273__$1;
(statearr_28275_28302[(2)] = inst_28269);

(statearr_28275_28302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (1))){
var state_28273__$1 = state_28273;
var statearr_28276_28303 = state_28273__$1;
(statearr_28276_28303[(2)] = null);

(statearr_28276_28303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (4))){
var inst_28226 = (state_28273[(7)]);
var inst_28226__$1 = (state_28273[(2)]);
var state_28273__$1 = (function (){var statearr_28277 = state_28273;
(statearr_28277[(7)] = inst_28226__$1);

return statearr_28277;
})();
if(cljs.core.truth_(inst_28226__$1)){
var statearr_28278_28304 = state_28273__$1;
(statearr_28278_28304[(1)] = (5));

} else {
var statearr_28279_28305 = state_28273__$1;
(statearr_28279_28305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (15))){
var inst_28233 = (state_28273[(8)]);
var inst_28248 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28233);
var inst_28249 = cljs.core.first.call(null,inst_28248);
var inst_28250 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28249);
var inst_28251 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28250)].join('');
var inst_28252 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28251);
var state_28273__$1 = state_28273;
var statearr_28280_28306 = state_28273__$1;
(statearr_28280_28306[(2)] = inst_28252);

(statearr_28280_28306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (13))){
var inst_28257 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
var statearr_28281_28307 = state_28273__$1;
(statearr_28281_28307[(2)] = inst_28257);

(statearr_28281_28307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (6))){
var state_28273__$1 = state_28273;
var statearr_28282_28308 = state_28273__$1;
(statearr_28282_28308[(2)] = null);

(statearr_28282_28308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (17))){
var inst_28255 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
var statearr_28283_28309 = state_28273__$1;
(statearr_28283_28309[(2)] = inst_28255);

(statearr_28283_28309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (3))){
var inst_28271 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28273__$1,inst_28271);
} else {
if((state_val_28274 === (12))){
var inst_28232 = (state_28273[(9)]);
var inst_28246 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28232,opts);
var state_28273__$1 = state_28273;
if(inst_28246){
var statearr_28284_28310 = state_28273__$1;
(statearr_28284_28310[(1)] = (15));

} else {
var statearr_28285_28311 = state_28273__$1;
(statearr_28285_28311[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (2))){
var state_28273__$1 = state_28273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28273__$1,(4),ch);
} else {
if((state_val_28274 === (11))){
var inst_28233 = (state_28273[(8)]);
var inst_28238 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28239 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28233);
var inst_28240 = cljs.core.async.timeout.call(null,(1000));
var inst_28241 = [inst_28239,inst_28240];
var inst_28242 = (new cljs.core.PersistentVector(null,2,(5),inst_28238,inst_28241,null));
var state_28273__$1 = state_28273;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28273__$1,(14),inst_28242);
} else {
if((state_val_28274 === (9))){
var inst_28233 = (state_28273[(8)]);
var inst_28259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28260 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28233);
var inst_28261 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28260);
var inst_28262 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28261)].join('');
var inst_28263 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28262);
var state_28273__$1 = (function (){var statearr_28286 = state_28273;
(statearr_28286[(10)] = inst_28259);

return statearr_28286;
})();
var statearr_28287_28312 = state_28273__$1;
(statearr_28287_28312[(2)] = inst_28263);

(statearr_28287_28312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (5))){
var inst_28226 = (state_28273[(7)]);
var inst_28228 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28229 = (new cljs.core.PersistentArrayMap(null,2,inst_28228,null));
var inst_28230 = (new cljs.core.PersistentHashSet(null,inst_28229,null));
var inst_28231 = figwheel.client.focus_msgs.call(null,inst_28230,inst_28226);
var inst_28232 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28231);
var inst_28233 = cljs.core.first.call(null,inst_28231);
var inst_28234 = figwheel.client.autoload_QMARK_.call(null);
var state_28273__$1 = (function (){var statearr_28288 = state_28273;
(statearr_28288[(9)] = inst_28232);

(statearr_28288[(8)] = inst_28233);

return statearr_28288;
})();
if(cljs.core.truth_(inst_28234)){
var statearr_28289_28313 = state_28273__$1;
(statearr_28289_28313[(1)] = (8));

} else {
var statearr_28290_28314 = state_28273__$1;
(statearr_28290_28314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (14))){
var inst_28244 = (state_28273[(2)]);
var state_28273__$1 = state_28273;
var statearr_28291_28315 = state_28273__$1;
(statearr_28291_28315[(2)] = inst_28244);

(statearr_28291_28315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (16))){
var state_28273__$1 = state_28273;
var statearr_28292_28316 = state_28273__$1;
(statearr_28292_28316[(2)] = null);

(statearr_28292_28316[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (10))){
var inst_28265 = (state_28273[(2)]);
var state_28273__$1 = (function (){var statearr_28293 = state_28273;
(statearr_28293[(11)] = inst_28265);

return statearr_28293;
})();
var statearr_28294_28317 = state_28273__$1;
(statearr_28294_28317[(2)] = null);

(statearr_28294_28317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28274 === (8))){
var inst_28232 = (state_28273[(9)]);
var inst_28236 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28232,opts);
var state_28273__$1 = state_28273;
if(cljs.core.truth_(inst_28236)){
var statearr_28295_28318 = state_28273__$1;
(statearr_28295_28318[(1)] = (11));

} else {
var statearr_28296_28319 = state_28273__$1;
(statearr_28296_28319[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22754__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22754__auto____0 = (function (){
var statearr_28297 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28297[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22754__auto__);

(statearr_28297[(1)] = (1));

return statearr_28297;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22754__auto____1 = (function (state_28273){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_28273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e28298){if((e28298 instanceof Object)){
var ex__22757__auto__ = e28298;
var statearr_28299_28320 = state_28273;
(statearr_28299_28320[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28321 = state_28273;
state_28273 = G__28321;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22754__auto__ = function(state_28273){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22754__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22754__auto____1.call(this,state_28273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22754__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22754__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_28300 = f__22849__auto__.call(null);
(statearr_28300[(6)] = c__22848__auto___28301);

return statearr_28300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28322_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28322_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28328 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28324 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28325 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28326 = true;
var _STAR_print_fn_STAR__temp_val__28327 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28326);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28327);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28325);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28324);
}}catch (e28323){if((e28323 instanceof Error)){
var e = e28323;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28328], null));
} else {
var e = e28323;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28329){
var map__28330 = p__28329;
var map__28330__$1 = (((((!((map__28330 == null))))?(((((map__28330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28330):map__28330);
var opts = map__28330__$1;
var build_id = cljs.core.get.call(null,map__28330__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__28332){
var vec__28333 = p__28332;
var seq__28334 = cljs.core.seq.call(null,vec__28333);
var first__28335 = cljs.core.first.call(null,seq__28334);
var seq__28334__$1 = cljs.core.next.call(null,seq__28334);
var map__28336 = first__28335;
var map__28336__$1 = (((((!((map__28336 == null))))?(((((map__28336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28336):map__28336);
var msg = map__28336__$1;
var msg_name = cljs.core.get.call(null,map__28336__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28334__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28338){
var vec__28339 = p__28338;
var seq__28340 = cljs.core.seq.call(null,vec__28339);
var first__28341 = cljs.core.first.call(null,seq__28340);
var seq__28340__$1 = cljs.core.next.call(null,seq__28340);
var map__28342 = first__28341;
var map__28342__$1 = (((((!((map__28342 == null))))?(((((map__28342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28342):map__28342);
var msg = map__28342__$1;
var msg_name = cljs.core.get.call(null,map__28342__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28340__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28344){
var map__28345 = p__28344;
var map__28345__$1 = (((((!((map__28345 == null))))?(((((map__28345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28345):map__28345);
var on_compile_warning = cljs.core.get.call(null,map__28345__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28345__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__28347){
var vec__28348 = p__28347;
var seq__28349 = cljs.core.seq.call(null,vec__28348);
var first__28350 = cljs.core.first.call(null,seq__28349);
var seq__28349__$1 = cljs.core.next.call(null,seq__28349);
var map__28351 = first__28350;
var map__28351__$1 = (((((!((map__28351 == null))))?(((((map__28351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28351):map__28351);
var msg = map__28351__$1;
var msg_name = cljs.core.get.call(null,map__28351__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28349__$1;
var pred__28353 = cljs.core._EQ_;
var expr__28354 = msg_name;
if(cljs.core.truth_(pred__28353.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28354))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28353.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28354))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_28443){
var state_val_28444 = (state_28443[(1)]);
if((state_val_28444 === (7))){
var inst_28363 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
if(cljs.core.truth_(inst_28363)){
var statearr_28445_28492 = state_28443__$1;
(statearr_28445_28492[(1)] = (8));

} else {
var statearr_28446_28493 = state_28443__$1;
(statearr_28446_28493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (20))){
var inst_28437 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28447_28494 = state_28443__$1;
(statearr_28447_28494[(2)] = inst_28437);

(statearr_28447_28494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (27))){
var inst_28433 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28448_28495 = state_28443__$1;
(statearr_28448_28495[(2)] = inst_28433);

(statearr_28448_28495[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (1))){
var inst_28356 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28443__$1 = state_28443;
if(cljs.core.truth_(inst_28356)){
var statearr_28449_28496 = state_28443__$1;
(statearr_28449_28496[(1)] = (2));

} else {
var statearr_28450_28497 = state_28443__$1;
(statearr_28450_28497[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (24))){
var inst_28435 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28451_28498 = state_28443__$1;
(statearr_28451_28498[(2)] = inst_28435);

(statearr_28451_28498[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (4))){
var inst_28441 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28443__$1,inst_28441);
} else {
if((state_val_28444 === (15))){
var inst_28439 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28452_28499 = state_28443__$1;
(statearr_28452_28499[(2)] = inst_28439);

(statearr_28452_28499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (21))){
var inst_28392 = (state_28443[(2)]);
var inst_28393 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28394 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28393);
var state_28443__$1 = (function (){var statearr_28453 = state_28443;
(statearr_28453[(7)] = inst_28392);

return statearr_28453;
})();
var statearr_28454_28500 = state_28443__$1;
(statearr_28454_28500[(2)] = inst_28394);

(statearr_28454_28500[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (31))){
var inst_28422 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28443__$1 = state_28443;
if(inst_28422){
var statearr_28455_28501 = state_28443__$1;
(statearr_28455_28501[(1)] = (34));

} else {
var statearr_28456_28502 = state_28443__$1;
(statearr_28456_28502[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (32))){
var inst_28431 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28457_28503 = state_28443__$1;
(statearr_28457_28503[(2)] = inst_28431);

(statearr_28457_28503[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (33))){
var inst_28418 = (state_28443[(2)]);
var inst_28419 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28420 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28419);
var state_28443__$1 = (function (){var statearr_28458 = state_28443;
(statearr_28458[(8)] = inst_28418);

return statearr_28458;
})();
var statearr_28459_28504 = state_28443__$1;
(statearr_28459_28504[(2)] = inst_28420);

(statearr_28459_28504[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (13))){
var inst_28377 = figwheel.client.heads_up.clear.call(null);
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(16),inst_28377);
} else {
if((state_val_28444 === (22))){
var inst_28398 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28399 = figwheel.client.heads_up.append_warning_message.call(null,inst_28398);
var state_28443__$1 = state_28443;
var statearr_28460_28505 = state_28443__$1;
(statearr_28460_28505[(2)] = inst_28399);

(statearr_28460_28505[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (36))){
var inst_28429 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28461_28506 = state_28443__$1;
(statearr_28461_28506[(2)] = inst_28429);

(statearr_28461_28506[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (29))){
var inst_28409 = (state_28443[(2)]);
var inst_28410 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28411 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28410);
var state_28443__$1 = (function (){var statearr_28462 = state_28443;
(statearr_28462[(9)] = inst_28409);

return statearr_28462;
})();
var statearr_28463_28507 = state_28443__$1;
(statearr_28463_28507[(2)] = inst_28411);

(statearr_28463_28507[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (6))){
var inst_28358 = (state_28443[(10)]);
var state_28443__$1 = state_28443;
var statearr_28464_28508 = state_28443__$1;
(statearr_28464_28508[(2)] = inst_28358);

(statearr_28464_28508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (28))){
var inst_28405 = (state_28443[(2)]);
var inst_28406 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28407 = figwheel.client.heads_up.display_warning.call(null,inst_28406);
var state_28443__$1 = (function (){var statearr_28465 = state_28443;
(statearr_28465[(11)] = inst_28405);

return statearr_28465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(29),inst_28407);
} else {
if((state_val_28444 === (25))){
var inst_28403 = figwheel.client.heads_up.clear.call(null);
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(28),inst_28403);
} else {
if((state_val_28444 === (34))){
var inst_28424 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(37),inst_28424);
} else {
if((state_val_28444 === (17))){
var inst_28383 = (state_28443[(2)]);
var inst_28384 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28385 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28384);
var state_28443__$1 = (function (){var statearr_28466 = state_28443;
(statearr_28466[(12)] = inst_28383);

return statearr_28466;
})();
var statearr_28467_28509 = state_28443__$1;
(statearr_28467_28509[(2)] = inst_28385);

(statearr_28467_28509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (3))){
var inst_28375 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28443__$1 = state_28443;
if(inst_28375){
var statearr_28468_28510 = state_28443__$1;
(statearr_28468_28510[(1)] = (13));

} else {
var statearr_28469_28511 = state_28443__$1;
(statearr_28469_28511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (12))){
var inst_28371 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28470_28512 = state_28443__$1;
(statearr_28470_28512[(2)] = inst_28371);

(statearr_28470_28512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (2))){
var inst_28358 = (state_28443[(10)]);
var inst_28358__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28443__$1 = (function (){var statearr_28471 = state_28443;
(statearr_28471[(10)] = inst_28358__$1);

return statearr_28471;
})();
if(cljs.core.truth_(inst_28358__$1)){
var statearr_28472_28513 = state_28443__$1;
(statearr_28472_28513[(1)] = (5));

} else {
var statearr_28473_28514 = state_28443__$1;
(statearr_28473_28514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (23))){
var inst_28401 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28443__$1 = state_28443;
if(inst_28401){
var statearr_28474_28515 = state_28443__$1;
(statearr_28474_28515[(1)] = (25));

} else {
var statearr_28475_28516 = state_28443__$1;
(statearr_28475_28516[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (35))){
var state_28443__$1 = state_28443;
var statearr_28476_28517 = state_28443__$1;
(statearr_28476_28517[(2)] = null);

(statearr_28476_28517[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (19))){
var inst_28396 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28443__$1 = state_28443;
if(inst_28396){
var statearr_28477_28518 = state_28443__$1;
(statearr_28477_28518[(1)] = (22));

} else {
var statearr_28478_28519 = state_28443__$1;
(statearr_28478_28519[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (11))){
var inst_28367 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28479_28520 = state_28443__$1;
(statearr_28479_28520[(2)] = inst_28367);

(statearr_28479_28520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (9))){
var inst_28369 = figwheel.client.heads_up.clear.call(null);
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(12),inst_28369);
} else {
if((state_val_28444 === (5))){
var inst_28360 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28443__$1 = state_28443;
var statearr_28480_28521 = state_28443__$1;
(statearr_28480_28521[(2)] = inst_28360);

(statearr_28480_28521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (14))){
var inst_28387 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28443__$1 = state_28443;
if(inst_28387){
var statearr_28481_28522 = state_28443__$1;
(statearr_28481_28522[(1)] = (18));

} else {
var statearr_28482_28523 = state_28443__$1;
(statearr_28482_28523[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (26))){
var inst_28413 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28443__$1 = state_28443;
if(inst_28413){
var statearr_28483_28524 = state_28443__$1;
(statearr_28483_28524[(1)] = (30));

} else {
var statearr_28484_28525 = state_28443__$1;
(statearr_28484_28525[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (16))){
var inst_28379 = (state_28443[(2)]);
var inst_28380 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28381 = figwheel.client.heads_up.display_exception.call(null,inst_28380);
var state_28443__$1 = (function (){var statearr_28485 = state_28443;
(statearr_28485[(13)] = inst_28379);

return statearr_28485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(17),inst_28381);
} else {
if((state_val_28444 === (30))){
var inst_28415 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28416 = figwheel.client.heads_up.display_warning.call(null,inst_28415);
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(33),inst_28416);
} else {
if((state_val_28444 === (10))){
var inst_28373 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28486_28526 = state_28443__$1;
(statearr_28486_28526[(2)] = inst_28373);

(statearr_28486_28526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (18))){
var inst_28389 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28390 = figwheel.client.heads_up.display_exception.call(null,inst_28389);
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(21),inst_28390);
} else {
if((state_val_28444 === (37))){
var inst_28426 = (state_28443[(2)]);
var state_28443__$1 = state_28443;
var statearr_28487_28527 = state_28443__$1;
(statearr_28487_28527[(2)] = inst_28426);

(statearr_28487_28527[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28444 === (8))){
var inst_28365 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28443__$1 = state_28443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28443__$1,(11),inst_28365);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22754__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22754__auto____0 = (function (){
var statearr_28488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28488[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22754__auto__);

(statearr_28488[(1)] = (1));

return statearr_28488;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22754__auto____1 = (function (state_28443){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_28443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e28489){if((e28489 instanceof Object)){
var ex__22757__auto__ = e28489;
var statearr_28490_28528 = state_28443;
(statearr_28490_28528[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28529 = state_28443;
state_28443 = G__28529;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22754__auto__ = function(state_28443){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22754__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22754__auto____1.call(this,state_28443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22754__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22754__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_28491 = f__22849__auto__.call(null);
(statearr_28491[(6)] = c__22848__auto__);

return statearr_28491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));

return c__22848__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22848__auto___28558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_28544){
var state_val_28545 = (state_28544[(1)]);
if((state_val_28545 === (1))){
var state_28544__$1 = state_28544;
var statearr_28546_28559 = state_28544__$1;
(statearr_28546_28559[(2)] = null);

(statearr_28546_28559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (2))){
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28544__$1,(4),ch);
} else {
if((state_val_28545 === (3))){
var inst_28542 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28544__$1,inst_28542);
} else {
if((state_val_28545 === (4))){
var inst_28532 = (state_28544[(7)]);
var inst_28532__$1 = (state_28544[(2)]);
var state_28544__$1 = (function (){var statearr_28547 = state_28544;
(statearr_28547[(7)] = inst_28532__$1);

return statearr_28547;
})();
if(cljs.core.truth_(inst_28532__$1)){
var statearr_28548_28560 = state_28544__$1;
(statearr_28548_28560[(1)] = (5));

} else {
var statearr_28549_28561 = state_28544__$1;
(statearr_28549_28561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (5))){
var inst_28532 = (state_28544[(7)]);
var inst_28534 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28532);
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28544__$1,(8),inst_28534);
} else {
if((state_val_28545 === (6))){
var state_28544__$1 = state_28544;
var statearr_28550_28562 = state_28544__$1;
(statearr_28550_28562[(2)] = null);

(statearr_28550_28562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (7))){
var inst_28540 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
var statearr_28551_28563 = state_28544__$1;
(statearr_28551_28563[(2)] = inst_28540);

(statearr_28551_28563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (8))){
var inst_28536 = (state_28544[(2)]);
var state_28544__$1 = (function (){var statearr_28552 = state_28544;
(statearr_28552[(8)] = inst_28536);

return statearr_28552;
})();
var statearr_28553_28564 = state_28544__$1;
(statearr_28553_28564[(2)] = null);

(statearr_28553_28564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22754__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22754__auto____0 = (function (){
var statearr_28554 = [null,null,null,null,null,null,null,null,null];
(statearr_28554[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22754__auto__);

(statearr_28554[(1)] = (1));

return statearr_28554;
});
var figwheel$client$heads_up_plugin_$_state_machine__22754__auto____1 = (function (state_28544){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_28544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e28555){if((e28555 instanceof Object)){
var ex__22757__auto__ = e28555;
var statearr_28556_28565 = state_28544;
(statearr_28556_28565[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28566 = state_28544;
state_28544 = G__28566;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22754__auto__ = function(state_28544){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22754__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22754__auto____1.call(this,state_28544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22754__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22754__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_28557 = f__22849__auto__.call(null);
(statearr_28557[(6)] = c__22848__auto___28558);

return statearr_28557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_28572){
var state_val_28573 = (state_28572[(1)]);
if((state_val_28573 === (1))){
var inst_28567 = cljs.core.async.timeout.call(null,(3000));
var state_28572__$1 = state_28572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28572__$1,(2),inst_28567);
} else {
if((state_val_28573 === (2))){
var inst_28569 = (state_28572[(2)]);
var inst_28570 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28572__$1 = (function (){var statearr_28574 = state_28572;
(statearr_28574[(7)] = inst_28569);

return statearr_28574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28572__$1,inst_28570);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22754__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22754__auto____0 = (function (){
var statearr_28575 = [null,null,null,null,null,null,null,null];
(statearr_28575[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22754__auto__);

(statearr_28575[(1)] = (1));

return statearr_28575;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22754__auto____1 = (function (state_28572){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_28572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e28576){if((e28576 instanceof Object)){
var ex__22757__auto__ = e28576;
var statearr_28577_28579 = state_28572;
(statearr_28577_28579[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28580 = state_28572;
state_28572 = G__28580;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22754__auto__ = function(state_28572){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22754__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22754__auto____1.call(this,state_28572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22754__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22754__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_28578 = f__22849__auto__.call(null);
(statearr_28578[(6)] = c__22848__auto__);

return statearr_28578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));

return c__22848__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_28587){
var state_val_28588 = (state_28587[(1)]);
if((state_val_28588 === (1))){
var inst_28581 = cljs.core.async.timeout.call(null,(2000));
var state_28587__$1 = state_28587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28587__$1,(2),inst_28581);
} else {
if((state_val_28588 === (2))){
var inst_28583 = (state_28587[(2)]);
var inst_28584 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28585 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28584);
var state_28587__$1 = (function (){var statearr_28589 = state_28587;
(statearr_28589[(7)] = inst_28583);

return statearr_28589;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28587__$1,inst_28585);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22754__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22754__auto____0 = (function (){
var statearr_28590 = [null,null,null,null,null,null,null,null];
(statearr_28590[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22754__auto__);

(statearr_28590[(1)] = (1));

return statearr_28590;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22754__auto____1 = (function (state_28587){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_28587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e28591){if((e28591 instanceof Object)){
var ex__22757__auto__ = e28591;
var statearr_28592_28594 = state_28587;
(statearr_28592_28594[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28595 = state_28587;
state_28587 = G__28595;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22754__auto__ = function(state_28587){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22754__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22754__auto____1.call(this,state_28587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22754__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22754__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_28593 = f__22849__auto__.call(null);
(statearr_28593[(6)] = c__22848__auto__);

return statearr_28593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));

return c__22848__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28596){
var map__28597 = p__28596;
var map__28597__$1 = (((((!((map__28597 == null))))?(((((map__28597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28597):map__28597);
var file = cljs.core.get.call(null,map__28597__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28597__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28597__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28599 = "";
var G__28599__$1 = (cljs.core.truth_(file)?[G__28599,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28599);
var G__28599__$2 = (cljs.core.truth_(line)?[G__28599__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28599__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__28599__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28599__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28600){
var map__28601 = p__28600;
var map__28601__$1 = (((((!((map__28601 == null))))?(((((map__28601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28601):map__28601);
var ed = map__28601__$1;
var exception_data = cljs.core.get.call(null,map__28601__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28601__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_28604 = (function (){var G__28603 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28603)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__28603;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_28604);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28605){
var map__28606 = p__28605;
var map__28606__$1 = (((((!((map__28606 == null))))?(((((map__28606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28606):map__28606);
var w = map__28606__$1;
var message = cljs.core.get.call(null,map__28606__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/javascripts/cljs-dev/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/javascripts/cljs-dev/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28608 = cljs.core.seq.call(null,plugins);
var chunk__28609 = null;
var count__28610 = (0);
var i__28611 = (0);
while(true){
if((i__28611 < count__28610)){
var vec__28618 = cljs.core._nth.call(null,chunk__28609,i__28611);
var k = cljs.core.nth.call(null,vec__28618,(0),null);
var plugin = cljs.core.nth.call(null,vec__28618,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28624 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28608,chunk__28609,count__28610,i__28611,pl_28624,vec__28618,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28624.call(null,msg_hist);
});})(seq__28608,chunk__28609,count__28610,i__28611,pl_28624,vec__28618,k,plugin))
);
} else {
}


var G__28625 = seq__28608;
var G__28626 = chunk__28609;
var G__28627 = count__28610;
var G__28628 = (i__28611 + (1));
seq__28608 = G__28625;
chunk__28609 = G__28626;
count__28610 = G__28627;
i__28611 = G__28628;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28608);
if(temp__5735__auto__){
var seq__28608__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28608__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28608__$1);
var G__28629 = cljs.core.chunk_rest.call(null,seq__28608__$1);
var G__28630 = c__4556__auto__;
var G__28631 = cljs.core.count.call(null,c__4556__auto__);
var G__28632 = (0);
seq__28608 = G__28629;
chunk__28609 = G__28630;
count__28610 = G__28631;
i__28611 = G__28632;
continue;
} else {
var vec__28621 = cljs.core.first.call(null,seq__28608__$1);
var k = cljs.core.nth.call(null,vec__28621,(0),null);
var plugin = cljs.core.nth.call(null,vec__28621,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28633 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28608,chunk__28609,count__28610,i__28611,pl_28633,vec__28621,k,plugin,seq__28608__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28633.call(null,msg_hist);
});})(seq__28608,chunk__28609,count__28610,i__28611,pl_28633,vec__28621,k,plugin,seq__28608__$1,temp__5735__auto__))
);
} else {
}


var G__28634 = cljs.core.next.call(null,seq__28608__$1);
var G__28635 = null;
var G__28636 = (0);
var G__28637 = (0);
seq__28608 = G__28634;
chunk__28609 = G__28635;
count__28610 = G__28636;
i__28611 = G__28637;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__28639 = arguments.length;
switch (G__28639) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__28640_28645 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28641_28646 = null;
var count__28642_28647 = (0);
var i__28643_28648 = (0);
while(true){
if((i__28643_28648 < count__28642_28647)){
var msg_28649 = cljs.core._nth.call(null,chunk__28641_28646,i__28643_28648);
figwheel.client.socket.handle_incoming_message.call(null,msg_28649);


var G__28650 = seq__28640_28645;
var G__28651 = chunk__28641_28646;
var G__28652 = count__28642_28647;
var G__28653 = (i__28643_28648 + (1));
seq__28640_28645 = G__28650;
chunk__28641_28646 = G__28651;
count__28642_28647 = G__28652;
i__28643_28648 = G__28653;
continue;
} else {
var temp__5735__auto___28654 = cljs.core.seq.call(null,seq__28640_28645);
if(temp__5735__auto___28654){
var seq__28640_28655__$1 = temp__5735__auto___28654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28640_28655__$1)){
var c__4556__auto___28656 = cljs.core.chunk_first.call(null,seq__28640_28655__$1);
var G__28657 = cljs.core.chunk_rest.call(null,seq__28640_28655__$1);
var G__28658 = c__4556__auto___28656;
var G__28659 = cljs.core.count.call(null,c__4556__auto___28656);
var G__28660 = (0);
seq__28640_28645 = G__28657;
chunk__28641_28646 = G__28658;
count__28642_28647 = G__28659;
i__28643_28648 = G__28660;
continue;
} else {
var msg_28661 = cljs.core.first.call(null,seq__28640_28655__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28661);


var G__28662 = cljs.core.next.call(null,seq__28640_28655__$1);
var G__28663 = null;
var G__28664 = (0);
var G__28665 = (0);
seq__28640_28645 = G__28662;
chunk__28641_28646 = G__28663;
count__28642_28647 = G__28664;
i__28643_28648 = G__28665;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28670 = arguments.length;
var i__4737__auto___28671 = (0);
while(true){
if((i__4737__auto___28671 < len__4736__auto___28670)){
args__4742__auto__.push((arguments[i__4737__auto___28671]));

var G__28672 = (i__4737__auto___28671 + (1));
i__4737__auto___28671 = G__28672;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28667){
var map__28668 = p__28667;
var map__28668__$1 = (((((!((map__28668 == null))))?(((((map__28668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28668):map__28668);
var opts = map__28668__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28666){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28666));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28673){if((e28673 instanceof Error)){
var e = e28673;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28673;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__28674){
var map__28675 = p__28674;
var map__28675__$1 = (((((!((map__28675 == null))))?(((((map__28675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28675):map__28675);
var msg_name = cljs.core.get.call(null,map__28675__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1608397900057
