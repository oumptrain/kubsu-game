// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27861){
var map__27862 = p__27861;
var map__27862__$1 = (((((!((map__27862 == null))))?(((((map__27862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27862):map__27862);
var m = map__27862__$1;
var n = cljs.core.get.call(null,map__27862__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27862__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27864_27896 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27865_27897 = null;
var count__27866_27898 = (0);
var i__27867_27899 = (0);
while(true){
if((i__27867_27899 < count__27866_27898)){
var f_27900 = cljs.core._nth.call(null,chunk__27865_27897,i__27867_27899);
cljs.core.println.call(null,"  ",f_27900);


var G__27901 = seq__27864_27896;
var G__27902 = chunk__27865_27897;
var G__27903 = count__27866_27898;
var G__27904 = (i__27867_27899 + (1));
seq__27864_27896 = G__27901;
chunk__27865_27897 = G__27902;
count__27866_27898 = G__27903;
i__27867_27899 = G__27904;
continue;
} else {
var temp__5735__auto___27905 = cljs.core.seq.call(null,seq__27864_27896);
if(temp__5735__auto___27905){
var seq__27864_27906__$1 = temp__5735__auto___27905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27864_27906__$1)){
var c__4556__auto___27907 = cljs.core.chunk_first.call(null,seq__27864_27906__$1);
var G__27908 = cljs.core.chunk_rest.call(null,seq__27864_27906__$1);
var G__27909 = c__4556__auto___27907;
var G__27910 = cljs.core.count.call(null,c__4556__auto___27907);
var G__27911 = (0);
seq__27864_27896 = G__27908;
chunk__27865_27897 = G__27909;
count__27866_27898 = G__27910;
i__27867_27899 = G__27911;
continue;
} else {
var f_27912 = cljs.core.first.call(null,seq__27864_27906__$1);
cljs.core.println.call(null,"  ",f_27912);


var G__27913 = cljs.core.next.call(null,seq__27864_27906__$1);
var G__27914 = null;
var G__27915 = (0);
var G__27916 = (0);
seq__27864_27896 = G__27913;
chunk__27865_27897 = G__27914;
count__27866_27898 = G__27915;
i__27867_27899 = G__27916;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27917 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27917);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27917)))?cljs.core.second.call(null,arglists_27917):arglists_27917));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27868_27918 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27869_27919 = null;
var count__27870_27920 = (0);
var i__27871_27921 = (0);
while(true){
if((i__27871_27921 < count__27870_27920)){
var vec__27882_27922 = cljs.core._nth.call(null,chunk__27869_27919,i__27871_27921);
var name_27923 = cljs.core.nth.call(null,vec__27882_27922,(0),null);
var map__27885_27924 = cljs.core.nth.call(null,vec__27882_27922,(1),null);
var map__27885_27925__$1 = (((((!((map__27885_27924 == null))))?(((((map__27885_27924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27885_27924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27885_27924):map__27885_27924);
var doc_27926 = cljs.core.get.call(null,map__27885_27925__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27927 = cljs.core.get.call(null,map__27885_27925__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27923);

cljs.core.println.call(null," ",arglists_27927);

if(cljs.core.truth_(doc_27926)){
cljs.core.println.call(null," ",doc_27926);
} else {
}


var G__27928 = seq__27868_27918;
var G__27929 = chunk__27869_27919;
var G__27930 = count__27870_27920;
var G__27931 = (i__27871_27921 + (1));
seq__27868_27918 = G__27928;
chunk__27869_27919 = G__27929;
count__27870_27920 = G__27930;
i__27871_27921 = G__27931;
continue;
} else {
var temp__5735__auto___27932 = cljs.core.seq.call(null,seq__27868_27918);
if(temp__5735__auto___27932){
var seq__27868_27933__$1 = temp__5735__auto___27932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27868_27933__$1)){
var c__4556__auto___27934 = cljs.core.chunk_first.call(null,seq__27868_27933__$1);
var G__27935 = cljs.core.chunk_rest.call(null,seq__27868_27933__$1);
var G__27936 = c__4556__auto___27934;
var G__27937 = cljs.core.count.call(null,c__4556__auto___27934);
var G__27938 = (0);
seq__27868_27918 = G__27935;
chunk__27869_27919 = G__27936;
count__27870_27920 = G__27937;
i__27871_27921 = G__27938;
continue;
} else {
var vec__27887_27939 = cljs.core.first.call(null,seq__27868_27933__$1);
var name_27940 = cljs.core.nth.call(null,vec__27887_27939,(0),null);
var map__27890_27941 = cljs.core.nth.call(null,vec__27887_27939,(1),null);
var map__27890_27942__$1 = (((((!((map__27890_27941 == null))))?(((((map__27890_27941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27890_27941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27890_27941):map__27890_27941);
var doc_27943 = cljs.core.get.call(null,map__27890_27942__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27944 = cljs.core.get.call(null,map__27890_27942__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27940);

cljs.core.println.call(null," ",arglists_27944);

if(cljs.core.truth_(doc_27943)){
cljs.core.println.call(null," ",doc_27943);
} else {
}


var G__27945 = cljs.core.next.call(null,seq__27868_27933__$1);
var G__27946 = null;
var G__27947 = (0);
var G__27948 = (0);
seq__27868_27918 = G__27945;
chunk__27869_27919 = G__27946;
count__27870_27920 = G__27947;
i__27871_27921 = G__27948;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__27892 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27893 = null;
var count__27894 = (0);
var i__27895 = (0);
while(true){
if((i__27895 < count__27894)){
var role = cljs.core._nth.call(null,chunk__27893,i__27895);
var temp__5735__auto___27949__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27949__$1)){
var spec_27950 = temp__5735__auto___27949__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27950));
} else {
}


var G__27951 = seq__27892;
var G__27952 = chunk__27893;
var G__27953 = count__27894;
var G__27954 = (i__27895 + (1));
seq__27892 = G__27951;
chunk__27893 = G__27952;
count__27894 = G__27953;
i__27895 = G__27954;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__27892);
if(temp__5735__auto____$1){
var seq__27892__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27892__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__27892__$1);
var G__27955 = cljs.core.chunk_rest.call(null,seq__27892__$1);
var G__27956 = c__4556__auto__;
var G__27957 = cljs.core.count.call(null,c__4556__auto__);
var G__27958 = (0);
seq__27892 = G__27955;
chunk__27893 = G__27956;
count__27894 = G__27957;
i__27895 = G__27958;
continue;
} else {
var role = cljs.core.first.call(null,seq__27892__$1);
var temp__5735__auto___27959__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27959__$2)){
var spec_27960 = temp__5735__auto___27959__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27960));
} else {
}


var G__27961 = cljs.core.next.call(null,seq__27892__$1);
var G__27962 = null;
var G__27963 = (0);
var G__27964 = (0);
seq__27892 = G__27961;
chunk__27893 = G__27962;
count__27894 = G__27963;
i__27895 = G__27964;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27965 = cljs.core.conj.call(null,via,t);
var G__27966 = cljs.core.ex_cause.call(null,t);
via = G__27965;
t = G__27966;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27969 = datafied_throwable;
var map__27969__$1 = (((((!((map__27969 == null))))?(((((map__27969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27969):map__27969);
var via = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27970 = cljs.core.last.call(null,via);
var map__27970__$1 = (((((!((map__27970 == null))))?(((((map__27970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27970):map__27970);
var type = cljs.core.get.call(null,map__27970__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__27970__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__27970__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27971 = data;
var map__27971__$1 = (((((!((map__27971 == null))))?(((((map__27971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27971):map__27971);
var problems = cljs.core.get.call(null,map__27971__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__27971__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__27971__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27972 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__27972__$1 = (((((!((map__27972 == null))))?(((((map__27972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27972):map__27972);
var top_data = map__27972__$1;
var source = cljs.core.get.call(null,map__27972__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__27977 = phase;
var G__27977__$1 = (((G__27977 instanceof cljs.core.Keyword))?G__27977.fqn:null);
switch (G__27977__$1) {
case "read-source":
var map__27978 = data;
var map__27978__$1 = (((((!((map__27978 == null))))?(((((map__27978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27978):map__27978);
var line = cljs.core.get.call(null,map__27978__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27978__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27980 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__27980__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27980,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27980);
var G__27980__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27980__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27980__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27980__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27980__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27981 = top_data;
var G__27981__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27981,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27981);
var G__27981__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27981__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27981__$1);
var G__27981__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27981__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27981__$2);
var G__27981__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27981__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27981__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27981__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27981__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27982 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27982,(0),null);
var method = cljs.core.nth.call(null,vec__27982,(1),null);
var file = cljs.core.nth.call(null,vec__27982,(2),null);
var line = cljs.core.nth.call(null,vec__27982,(3),null);
var G__27985 = top_data;
var G__27985__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__27985,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27985);
var G__27985__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__27985__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27985__$1);
var G__27985__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__27985__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27985__$2);
var G__27985__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27985__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27985__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27985__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27985__$4;
}

break;
case "execution":
var vec__27986 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27986,(0),null);
var method = cljs.core.nth.call(null,vec__27986,(1),null);
var file = cljs.core.nth.call(null,vec__27986,(2),null);
var line = cljs.core.nth.call(null,vec__27986,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__27968_SHARP_){
var or__4126__auto__ = (p1__27968_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__27968_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__27989 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27989__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__27989,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27989);
var G__27989__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27989__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27989__$1);
var G__27989__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__27989__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27989__$2);
var G__27989__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__27989__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27989__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27989__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27989__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27977__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27993){
var map__27994 = p__27993;
var map__27994__$1 = (((((!((map__27994 == null))))?(((((map__27994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27994):map__27994);
var triage_data = map__27994__$1;
var phase = cljs.core.get.call(null,map__27994__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__27994__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__27994__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27994__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__27994__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__27994__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__27994__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__27994__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27996 = phase;
var G__27996__$1 = (((G__27996 instanceof cljs.core.Keyword))?G__27996.fqn:null);
switch (G__27996__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27997_28006 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27998_28007 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27999_28008 = true;
var _STAR_print_fn_STAR__temp_val__28000_28009 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27999_28008);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28000_28009);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__27991_SHARP_){
return cljs.core.dissoc.call(null,p1__27991_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27998_28007);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27997_28006);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28001_28010 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28002_28011 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28003_28012 = true;
var _STAR_print_fn_STAR__temp_val__28004_28013 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28003_28012);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28004_28013);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__27992_SHARP_){
return cljs.core.dissoc.call(null,p1__27992_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28002_28011);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28001_28010);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27996__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1608397899599
