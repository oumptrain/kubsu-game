// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__26245 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__26245 == null)){
return null;
} else {
return goog.object.get(G__26245,"requires");
}
}):(function (path){
var G__26246 = goog.object.get(goog.dependencies_.requires,path);
if((G__26246 == null)){
return null;
} else {
return goog.object.getKeys(G__26246);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26247_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26247_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__26248 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__26248__$1 = (((G__26248 == null))?null:goog.object.get(G__26248,"provides"));
if((G__26248__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__26248__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__26249 = cljs.core.seq.call(null,provides);
var chunk__26250 = null;
var count__26251 = (0);
var i__26252 = (0);
while(true){
if((i__26252 < count__26251)){
var prov = cljs.core._nth.call(null,chunk__26250,i__26252);
var seq__26261_26273 = cljs.core.seq.call(null,requires);
var chunk__26262_26274 = null;
var count__26263_26275 = (0);
var i__26264_26276 = (0);
while(true){
if((i__26264_26276 < count__26263_26275)){
var req_26277 = cljs.core._nth.call(null,chunk__26262_26274,i__26264_26276);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26277,prov);


var G__26278 = seq__26261_26273;
var G__26279 = chunk__26262_26274;
var G__26280 = count__26263_26275;
var G__26281 = (i__26264_26276 + (1));
seq__26261_26273 = G__26278;
chunk__26262_26274 = G__26279;
count__26263_26275 = G__26280;
i__26264_26276 = G__26281;
continue;
} else {
var temp__5735__auto___26282 = cljs.core.seq.call(null,seq__26261_26273);
if(temp__5735__auto___26282){
var seq__26261_26283__$1 = temp__5735__auto___26282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26261_26283__$1)){
var c__4556__auto___26284 = cljs.core.chunk_first.call(null,seq__26261_26283__$1);
var G__26285 = cljs.core.chunk_rest.call(null,seq__26261_26283__$1);
var G__26286 = c__4556__auto___26284;
var G__26287 = cljs.core.count.call(null,c__4556__auto___26284);
var G__26288 = (0);
seq__26261_26273 = G__26285;
chunk__26262_26274 = G__26286;
count__26263_26275 = G__26287;
i__26264_26276 = G__26288;
continue;
} else {
var req_26289 = cljs.core.first.call(null,seq__26261_26283__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26289,prov);


var G__26290 = cljs.core.next.call(null,seq__26261_26283__$1);
var G__26291 = null;
var G__26292 = (0);
var G__26293 = (0);
seq__26261_26273 = G__26290;
chunk__26262_26274 = G__26291;
count__26263_26275 = G__26292;
i__26264_26276 = G__26293;
continue;
}
} else {
}
}
break;
}


var G__26294 = seq__26249;
var G__26295 = chunk__26250;
var G__26296 = count__26251;
var G__26297 = (i__26252 + (1));
seq__26249 = G__26294;
chunk__26250 = G__26295;
count__26251 = G__26296;
i__26252 = G__26297;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26249);
if(temp__5735__auto__){
var seq__26249__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26249__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__26249__$1);
var G__26298 = cljs.core.chunk_rest.call(null,seq__26249__$1);
var G__26299 = c__4556__auto__;
var G__26300 = cljs.core.count.call(null,c__4556__auto__);
var G__26301 = (0);
seq__26249 = G__26298;
chunk__26250 = G__26299;
count__26251 = G__26300;
i__26252 = G__26301;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26249__$1);
var seq__26265_26302 = cljs.core.seq.call(null,requires);
var chunk__26266_26303 = null;
var count__26267_26304 = (0);
var i__26268_26305 = (0);
while(true){
if((i__26268_26305 < count__26267_26304)){
var req_26306 = cljs.core._nth.call(null,chunk__26266_26303,i__26268_26305);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26306,prov);


var G__26307 = seq__26265_26302;
var G__26308 = chunk__26266_26303;
var G__26309 = count__26267_26304;
var G__26310 = (i__26268_26305 + (1));
seq__26265_26302 = G__26307;
chunk__26266_26303 = G__26308;
count__26267_26304 = G__26309;
i__26268_26305 = G__26310;
continue;
} else {
var temp__5735__auto___26311__$1 = cljs.core.seq.call(null,seq__26265_26302);
if(temp__5735__auto___26311__$1){
var seq__26265_26312__$1 = temp__5735__auto___26311__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26265_26312__$1)){
var c__4556__auto___26313 = cljs.core.chunk_first.call(null,seq__26265_26312__$1);
var G__26314 = cljs.core.chunk_rest.call(null,seq__26265_26312__$1);
var G__26315 = c__4556__auto___26313;
var G__26316 = cljs.core.count.call(null,c__4556__auto___26313);
var G__26317 = (0);
seq__26265_26302 = G__26314;
chunk__26266_26303 = G__26315;
count__26267_26304 = G__26316;
i__26268_26305 = G__26317;
continue;
} else {
var req_26318 = cljs.core.first.call(null,seq__26265_26312__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26318,prov);


var G__26319 = cljs.core.next.call(null,seq__26265_26312__$1);
var G__26320 = null;
var G__26321 = (0);
var G__26322 = (0);
seq__26265_26302 = G__26319;
chunk__26266_26303 = G__26320;
count__26267_26304 = G__26321;
i__26268_26305 = G__26322;
continue;
}
} else {
}
}
break;
}


var G__26323 = cljs.core.next.call(null,seq__26249__$1);
var G__26324 = null;
var G__26325 = (0);
var G__26326 = (0);
seq__26249 = G__26323;
chunk__26250 = G__26324;
count__26251 = G__26325;
i__26252 = G__26326;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__26269 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__26270 = null;
var count__26271 = (0);
var i__26272 = (0);
while(true){
if((i__26272 < count__26271)){
var prov = cljs.core._nth.call(null,chunk__26270,i__26272);
goog.object.forEach(deps,((function (seq__26269,chunk__26270,count__26271,i__26272,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__26269,chunk__26270,count__26271,i__26272,prov,requires))
);


var G__26327 = seq__26269;
var G__26328 = chunk__26270;
var G__26329 = count__26271;
var G__26330 = (i__26272 + (1));
seq__26269 = G__26327;
chunk__26270 = G__26328;
count__26271 = G__26329;
i__26272 = G__26330;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26269);
if(temp__5735__auto__){
var seq__26269__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26269__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__26269__$1);
var G__26331 = cljs.core.chunk_rest.call(null,seq__26269__$1);
var G__26332 = c__4556__auto__;
var G__26333 = cljs.core.count.call(null,c__4556__auto__);
var G__26334 = (0);
seq__26269 = G__26331;
chunk__26270 = G__26332;
count__26271 = G__26333;
i__26272 = G__26334;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26269__$1);
goog.object.forEach(deps,((function (seq__26269,chunk__26270,count__26271,i__26272,prov,seq__26269__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__26269,chunk__26270,count__26271,i__26272,prov,seq__26269__$1,temp__5735__auto__,requires))
);


var G__26335 = cljs.core.next.call(null,seq__26269__$1);
var G__26336 = null;
var G__26337 = (0);
var G__26338 = (0);
seq__26269 = G__26335;
chunk__26270 = G__26336;
count__26271 = G__26337;
i__26272 = G__26338;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26339){
var vec__26340 = p__26339;
var _ = cljs.core.nth.call(null,vec__26340,(0),null);
var v = cljs.core.nth.call(null,vec__26340,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__26343){
var vec__26344 = p__26343;
var k = cljs.core.nth.call(null,vec__26344,(0),null);
var v = cljs.core.nth.call(null,vec__26344,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26356_26364 = cljs.core.seq.call(null,deps);
var chunk__26357_26365 = null;
var count__26358_26366 = (0);
var i__26359_26367 = (0);
while(true){
if((i__26359_26367 < count__26358_26366)){
var dep_26368 = cljs.core._nth.call(null,chunk__26357_26365,i__26359_26367);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_26368;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26368));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26368,(depth + (1)),state);
} else {
}


var G__26369 = seq__26356_26364;
var G__26370 = chunk__26357_26365;
var G__26371 = count__26358_26366;
var G__26372 = (i__26359_26367 + (1));
seq__26356_26364 = G__26369;
chunk__26357_26365 = G__26370;
count__26358_26366 = G__26371;
i__26359_26367 = G__26372;
continue;
} else {
var temp__5735__auto___26373 = cljs.core.seq.call(null,seq__26356_26364);
if(temp__5735__auto___26373){
var seq__26356_26374__$1 = temp__5735__auto___26373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26356_26374__$1)){
var c__4556__auto___26375 = cljs.core.chunk_first.call(null,seq__26356_26374__$1);
var G__26376 = cljs.core.chunk_rest.call(null,seq__26356_26374__$1);
var G__26377 = c__4556__auto___26375;
var G__26378 = cljs.core.count.call(null,c__4556__auto___26375);
var G__26379 = (0);
seq__26356_26364 = G__26376;
chunk__26357_26365 = G__26377;
count__26358_26366 = G__26378;
i__26359_26367 = G__26379;
continue;
} else {
var dep_26380 = cljs.core.first.call(null,seq__26356_26374__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_26380;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26380));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26380,(depth + (1)),state);
} else {
}


var G__26381 = cljs.core.next.call(null,seq__26356_26374__$1);
var G__26382 = null;
var G__26383 = (0);
var G__26384 = (0);
seq__26356_26364 = G__26381;
chunk__26357_26365 = G__26382;
count__26358_26366 = G__26383;
i__26359_26367 = G__26384;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26360){
var vec__26361 = p__26360;
var seq__26362 = cljs.core.seq.call(null,vec__26361);
var first__26363 = cljs.core.first.call(null,seq__26362);
var seq__26362__$1 = cljs.core.next.call(null,seq__26362);
var x = first__26363;
var xs = seq__26362__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__26347_SHARP_){
return clojure.set.difference.call(null,p1__26347_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__26385_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__26385_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26386 = cljs.core.seq.call(null,provides);
var chunk__26387 = null;
var count__26388 = (0);
var i__26389 = (0);
while(true){
if((i__26389 < count__26388)){
var prov = cljs.core._nth.call(null,chunk__26387,i__26389);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26398_26406 = cljs.core.seq.call(null,requires);
var chunk__26399_26407 = null;
var count__26400_26408 = (0);
var i__26401_26409 = (0);
while(true){
if((i__26401_26409 < count__26400_26408)){
var req_26410 = cljs.core._nth.call(null,chunk__26399_26407,i__26401_26409);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26410,prov);


var G__26411 = seq__26398_26406;
var G__26412 = chunk__26399_26407;
var G__26413 = count__26400_26408;
var G__26414 = (i__26401_26409 + (1));
seq__26398_26406 = G__26411;
chunk__26399_26407 = G__26412;
count__26400_26408 = G__26413;
i__26401_26409 = G__26414;
continue;
} else {
var temp__5735__auto___26415 = cljs.core.seq.call(null,seq__26398_26406);
if(temp__5735__auto___26415){
var seq__26398_26416__$1 = temp__5735__auto___26415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26398_26416__$1)){
var c__4556__auto___26417 = cljs.core.chunk_first.call(null,seq__26398_26416__$1);
var G__26418 = cljs.core.chunk_rest.call(null,seq__26398_26416__$1);
var G__26419 = c__4556__auto___26417;
var G__26420 = cljs.core.count.call(null,c__4556__auto___26417);
var G__26421 = (0);
seq__26398_26406 = G__26418;
chunk__26399_26407 = G__26419;
count__26400_26408 = G__26420;
i__26401_26409 = G__26421;
continue;
} else {
var req_26422 = cljs.core.first.call(null,seq__26398_26416__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26422,prov);


var G__26423 = cljs.core.next.call(null,seq__26398_26416__$1);
var G__26424 = null;
var G__26425 = (0);
var G__26426 = (0);
seq__26398_26406 = G__26423;
chunk__26399_26407 = G__26424;
count__26400_26408 = G__26425;
i__26401_26409 = G__26426;
continue;
}
} else {
}
}
break;
}


var G__26427 = seq__26386;
var G__26428 = chunk__26387;
var G__26429 = count__26388;
var G__26430 = (i__26389 + (1));
seq__26386 = G__26427;
chunk__26387 = G__26428;
count__26388 = G__26429;
i__26389 = G__26430;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26386);
if(temp__5735__auto__){
var seq__26386__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26386__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__26386__$1);
var G__26431 = cljs.core.chunk_rest.call(null,seq__26386__$1);
var G__26432 = c__4556__auto__;
var G__26433 = cljs.core.count.call(null,c__4556__auto__);
var G__26434 = (0);
seq__26386 = G__26431;
chunk__26387 = G__26432;
count__26388 = G__26433;
i__26389 = G__26434;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26386__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26402_26435 = cljs.core.seq.call(null,requires);
var chunk__26403_26436 = null;
var count__26404_26437 = (0);
var i__26405_26438 = (0);
while(true){
if((i__26405_26438 < count__26404_26437)){
var req_26439 = cljs.core._nth.call(null,chunk__26403_26436,i__26405_26438);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26439,prov);


var G__26440 = seq__26402_26435;
var G__26441 = chunk__26403_26436;
var G__26442 = count__26404_26437;
var G__26443 = (i__26405_26438 + (1));
seq__26402_26435 = G__26440;
chunk__26403_26436 = G__26441;
count__26404_26437 = G__26442;
i__26405_26438 = G__26443;
continue;
} else {
var temp__5735__auto___26444__$1 = cljs.core.seq.call(null,seq__26402_26435);
if(temp__5735__auto___26444__$1){
var seq__26402_26445__$1 = temp__5735__auto___26444__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26402_26445__$1)){
var c__4556__auto___26446 = cljs.core.chunk_first.call(null,seq__26402_26445__$1);
var G__26447 = cljs.core.chunk_rest.call(null,seq__26402_26445__$1);
var G__26448 = c__4556__auto___26446;
var G__26449 = cljs.core.count.call(null,c__4556__auto___26446);
var G__26450 = (0);
seq__26402_26435 = G__26447;
chunk__26403_26436 = G__26448;
count__26404_26437 = G__26449;
i__26405_26438 = G__26450;
continue;
} else {
var req_26451 = cljs.core.first.call(null,seq__26402_26445__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26451,prov);


var G__26452 = cljs.core.next.call(null,seq__26402_26445__$1);
var G__26453 = null;
var G__26454 = (0);
var G__26455 = (0);
seq__26402_26435 = G__26452;
chunk__26403_26436 = G__26453;
count__26404_26437 = G__26454;
i__26405_26438 = G__26455;
continue;
}
} else {
}
}
break;
}


var G__26456 = cljs.core.next.call(null,seq__26386__$1);
var G__26457 = null;
var G__26458 = (0);
var G__26459 = (0);
seq__26386 = G__26456;
chunk__26387 = G__26457;
count__26388 = G__26458;
i__26389 = G__26459;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26460_26464 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26461_26465 = null;
var count__26462_26466 = (0);
var i__26463_26467 = (0);
while(true){
if((i__26463_26467 < count__26462_26466)){
var ns_26468 = cljs.core._nth.call(null,chunk__26461_26465,i__26463_26467);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26468);


var G__26469 = seq__26460_26464;
var G__26470 = chunk__26461_26465;
var G__26471 = count__26462_26466;
var G__26472 = (i__26463_26467 + (1));
seq__26460_26464 = G__26469;
chunk__26461_26465 = G__26470;
count__26462_26466 = G__26471;
i__26463_26467 = G__26472;
continue;
} else {
var temp__5735__auto___26473 = cljs.core.seq.call(null,seq__26460_26464);
if(temp__5735__auto___26473){
var seq__26460_26474__$1 = temp__5735__auto___26473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26460_26474__$1)){
var c__4556__auto___26475 = cljs.core.chunk_first.call(null,seq__26460_26474__$1);
var G__26476 = cljs.core.chunk_rest.call(null,seq__26460_26474__$1);
var G__26477 = c__4556__auto___26475;
var G__26478 = cljs.core.count.call(null,c__4556__auto___26475);
var G__26479 = (0);
seq__26460_26464 = G__26476;
chunk__26461_26465 = G__26477;
count__26462_26466 = G__26478;
i__26463_26467 = G__26479;
continue;
} else {
var ns_26480 = cljs.core.first.call(null,seq__26460_26474__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26480);


var G__26481 = cljs.core.next.call(null,seq__26460_26474__$1);
var G__26482 = null;
var G__26483 = (0);
var G__26484 = (0);
seq__26460_26464 = G__26481;
chunk__26461_26465 = G__26482;
count__26462_26466 = G__26483;
i__26463_26467 = G__26484;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__26485__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26486__i = 0, G__26486__a = new Array(arguments.length -  0);
while (G__26486__i < G__26486__a.length) {G__26486__a[G__26486__i] = arguments[G__26486__i + 0]; ++G__26486__i;}
  args = new cljs.core.IndexedSeq(G__26486__a,0,null);
} 
return G__26485__delegate.call(this,args);};
G__26485.cljs$lang$maxFixedArity = 0;
G__26485.cljs$lang$applyTo = (function (arglist__26487){
var args = cljs.core.seq(arglist__26487);
return G__26485__delegate(args);
});
G__26485.cljs$core$IFn$_invoke$arity$variadic = G__26485__delegate;
return G__26485;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__26488_SHARP_,p2__26489_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26488_SHARP_)),p2__26489_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__26490_SHARP_,p2__26491_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26490_SHARP_),p2__26491_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26492 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26492.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__26492.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__26492;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26493){if((e26493 instanceof Error)){
var e = e26493;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26493;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26494){if((e26494 instanceof Error)){
var e = e26494;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26494;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26495 = cljs.core._EQ_;
var expr__26496 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26495.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26496))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26495.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26496))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26495.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26496))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26498,callback){
var map__26499 = p__26498;
var map__26499__$1 = (((((!((map__26499 == null))))?(((((map__26499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26499):map__26499);
var file_msg = map__26499__$1;
var request_url = cljs.core.get.call(null,map__26499__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_26537){
var state_val_26538 = (state_26537[(1)]);
if((state_val_26538 === (7))){
var inst_26533 = (state_26537[(2)]);
var state_26537__$1 = state_26537;
var statearr_26539_26565 = state_26537__$1;
(statearr_26539_26565[(2)] = inst_26533);

(statearr_26539_26565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (1))){
var state_26537__$1 = state_26537;
var statearr_26540_26566 = state_26537__$1;
(statearr_26540_26566[(2)] = null);

(statearr_26540_26566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (4))){
var inst_26503 = (state_26537[(7)]);
var inst_26503__$1 = (state_26537[(2)]);
var state_26537__$1 = (function (){var statearr_26541 = state_26537;
(statearr_26541[(7)] = inst_26503__$1);

return statearr_26541;
})();
if(cljs.core.truth_(inst_26503__$1)){
var statearr_26542_26567 = state_26537__$1;
(statearr_26542_26567[(1)] = (5));

} else {
var statearr_26543_26568 = state_26537__$1;
(statearr_26543_26568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (15))){
var inst_26518 = (state_26537[(8)]);
var inst_26516 = (state_26537[(9)]);
var inst_26520 = inst_26518.call(null,inst_26516);
var state_26537__$1 = state_26537;
var statearr_26544_26569 = state_26537__$1;
(statearr_26544_26569[(2)] = inst_26520);

(statearr_26544_26569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (13))){
var inst_26527 = (state_26537[(2)]);
var state_26537__$1 = state_26537;
var statearr_26545_26570 = state_26537__$1;
(statearr_26545_26570[(2)] = inst_26527);

(statearr_26545_26570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (6))){
var state_26537__$1 = state_26537;
var statearr_26546_26571 = state_26537__$1;
(statearr_26546_26571[(2)] = null);

(statearr_26546_26571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (17))){
var inst_26524 = (state_26537[(2)]);
var state_26537__$1 = state_26537;
var statearr_26547_26572 = state_26537__$1;
(statearr_26547_26572[(2)] = inst_26524);

(statearr_26547_26572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (3))){
var inst_26535 = (state_26537[(2)]);
var state_26537__$1 = state_26537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26537__$1,inst_26535);
} else {
if((state_val_26538 === (12))){
var state_26537__$1 = state_26537;
var statearr_26548_26573 = state_26537__$1;
(statearr_26548_26573[(2)] = null);

(statearr_26548_26573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (2))){
var state_26537__$1 = state_26537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26537__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26538 === (11))){
var inst_26508 = (state_26537[(10)]);
var inst_26514 = figwheel.client.file_reloading.blocking_load.call(null,inst_26508);
var state_26537__$1 = state_26537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26537__$1,(14),inst_26514);
} else {
if((state_val_26538 === (9))){
var inst_26508 = (state_26537[(10)]);
var state_26537__$1 = state_26537;
if(cljs.core.truth_(inst_26508)){
var statearr_26549_26574 = state_26537__$1;
(statearr_26549_26574[(1)] = (11));

} else {
var statearr_26550_26575 = state_26537__$1;
(statearr_26550_26575[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (5))){
var inst_26503 = (state_26537[(7)]);
var inst_26509 = (state_26537[(11)]);
var inst_26508 = cljs.core.nth.call(null,inst_26503,(0),null);
var inst_26509__$1 = cljs.core.nth.call(null,inst_26503,(1),null);
var state_26537__$1 = (function (){var statearr_26551 = state_26537;
(statearr_26551[(11)] = inst_26509__$1);

(statearr_26551[(10)] = inst_26508);

return statearr_26551;
})();
if(cljs.core.truth_(inst_26509__$1)){
var statearr_26552_26576 = state_26537__$1;
(statearr_26552_26576[(1)] = (8));

} else {
var statearr_26553_26577 = state_26537__$1;
(statearr_26553_26577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (14))){
var inst_26518 = (state_26537[(8)]);
var inst_26508 = (state_26537[(10)]);
var inst_26516 = (state_26537[(2)]);
var inst_26517 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26518__$1 = cljs.core.get.call(null,inst_26517,inst_26508);
var state_26537__$1 = (function (){var statearr_26554 = state_26537;
(statearr_26554[(8)] = inst_26518__$1);

(statearr_26554[(9)] = inst_26516);

return statearr_26554;
})();
if(cljs.core.truth_(inst_26518__$1)){
var statearr_26555_26578 = state_26537__$1;
(statearr_26555_26578[(1)] = (15));

} else {
var statearr_26556_26579 = state_26537__$1;
(statearr_26556_26579[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (16))){
var inst_26516 = (state_26537[(9)]);
var inst_26522 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26516);
var state_26537__$1 = state_26537;
var statearr_26557_26580 = state_26537__$1;
(statearr_26557_26580[(2)] = inst_26522);

(statearr_26557_26580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (10))){
var inst_26529 = (state_26537[(2)]);
var state_26537__$1 = (function (){var statearr_26558 = state_26537;
(statearr_26558[(12)] = inst_26529);

return statearr_26558;
})();
var statearr_26559_26581 = state_26537__$1;
(statearr_26559_26581[(2)] = null);

(statearr_26559_26581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (8))){
var inst_26509 = (state_26537[(11)]);
var inst_26511 = eval(inst_26509);
var state_26537__$1 = state_26537;
var statearr_26560_26582 = state_26537__$1;
(statearr_26560_26582[(2)] = inst_26511);

(statearr_26560_26582[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__22754__auto__ = null;
var figwheel$client$file_reloading$state_machine__22754__auto____0 = (function (){
var statearr_26561 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26561[(0)] = figwheel$client$file_reloading$state_machine__22754__auto__);

(statearr_26561[(1)] = (1));

return statearr_26561;
});
var figwheel$client$file_reloading$state_machine__22754__auto____1 = (function (state_26537){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_26537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e26562){if((e26562 instanceof Object)){
var ex__22757__auto__ = e26562;
var statearr_26563_26583 = state_26537;
(statearr_26563_26583[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26584 = state_26537;
state_26537 = G__26584;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22754__auto__ = function(state_26537){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22754__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22754__auto____1.call(this,state_26537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22754__auto____0;
figwheel$client$file_reloading$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22754__auto____1;
return figwheel$client$file_reloading$state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_26564 = f__22849__auto__.call(null);
(statearr_26564[(6)] = c__22848__auto__);

return statearr_26564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));

return c__22848__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__26586 = arguments.length;
switch (G__26586) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26588,callback){
var map__26589 = p__26588;
var map__26589__$1 = (((((!((map__26589 == null))))?(((((map__26589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26589):map__26589);
var file_msg = map__26589__$1;
var namespace = cljs.core.get.call(null,map__26589__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__26591){
var map__26592 = p__26591;
var map__26592__$1 = (((((!((map__26592 == null))))?(((((map__26592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26592):map__26592);
var file_msg = map__26592__$1;
var namespace = cljs.core.get.call(null,map__26592__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26594){
var map__26595 = p__26594;
var map__26595__$1 = (((((!((map__26595 == null))))?(((((map__26595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26595):map__26595);
var file_msg = map__26595__$1;
var namespace = cljs.core.get.call(null,map__26595__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26597,callback){
var map__26598 = p__26597;
var map__26598__$1 = (((((!((map__26598 == null))))?(((((map__26598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26598):map__26598);
var file_msg = map__26598__$1;
var request_url = cljs.core.get.call(null,map__26598__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26598__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22848__auto___26648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_26633){
var state_val_26634 = (state_26633[(1)]);
if((state_val_26634 === (1))){
var inst_26607 = cljs.core.seq.call(null,files);
var inst_26608 = cljs.core.first.call(null,inst_26607);
var inst_26609 = cljs.core.next.call(null,inst_26607);
var inst_26610 = files;
var state_26633__$1 = (function (){var statearr_26635 = state_26633;
(statearr_26635[(7)] = inst_26609);

(statearr_26635[(8)] = inst_26610);

(statearr_26635[(9)] = inst_26608);

return statearr_26635;
})();
var statearr_26636_26649 = state_26633__$1;
(statearr_26636_26649[(2)] = null);

(statearr_26636_26649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (2))){
var inst_26610 = (state_26633[(8)]);
var inst_26616 = (state_26633[(10)]);
var inst_26615 = cljs.core.seq.call(null,inst_26610);
var inst_26616__$1 = cljs.core.first.call(null,inst_26615);
var inst_26617 = cljs.core.next.call(null,inst_26615);
var inst_26618 = (inst_26616__$1 == null);
var inst_26619 = cljs.core.not.call(null,inst_26618);
var state_26633__$1 = (function (){var statearr_26637 = state_26633;
(statearr_26637[(10)] = inst_26616__$1);

(statearr_26637[(11)] = inst_26617);

return statearr_26637;
})();
if(inst_26619){
var statearr_26638_26650 = state_26633__$1;
(statearr_26638_26650[(1)] = (4));

} else {
var statearr_26639_26651 = state_26633__$1;
(statearr_26639_26651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (3))){
var inst_26631 = (state_26633[(2)]);
var state_26633__$1 = state_26633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26633__$1,inst_26631);
} else {
if((state_val_26634 === (4))){
var inst_26616 = (state_26633[(10)]);
var inst_26621 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26616);
var state_26633__$1 = state_26633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26633__$1,(7),inst_26621);
} else {
if((state_val_26634 === (5))){
var inst_26627 = cljs.core.async.close_BANG_.call(null,out);
var state_26633__$1 = state_26633;
var statearr_26640_26652 = state_26633__$1;
(statearr_26640_26652[(2)] = inst_26627);

(statearr_26640_26652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (6))){
var inst_26629 = (state_26633[(2)]);
var state_26633__$1 = state_26633;
var statearr_26641_26653 = state_26633__$1;
(statearr_26641_26653[(2)] = inst_26629);

(statearr_26641_26653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26634 === (7))){
var inst_26617 = (state_26633[(11)]);
var inst_26623 = (state_26633[(2)]);
var inst_26624 = cljs.core.async.put_BANG_.call(null,out,inst_26623);
var inst_26610 = inst_26617;
var state_26633__$1 = (function (){var statearr_26642 = state_26633;
(statearr_26642[(12)] = inst_26624);

(statearr_26642[(8)] = inst_26610);

return statearr_26642;
})();
var statearr_26643_26654 = state_26633__$1;
(statearr_26643_26654[(2)] = null);

(statearr_26643_26654[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22754__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22754__auto____0 = (function (){
var statearr_26644 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26644[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22754__auto__);

(statearr_26644[(1)] = (1));

return statearr_26644;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22754__auto____1 = (function (state_26633){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_26633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e26645){if((e26645 instanceof Object)){
var ex__22757__auto__ = e26645;
var statearr_26646_26655 = state_26633;
(statearr_26646_26655[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26656 = state_26633;
state_26633 = G__26656;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22754__auto__ = function(state_26633){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22754__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22754__auto____1.call(this,state_26633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22754__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22754__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_26647 = f__22849__auto__.call(null);
(statearr_26647[(6)] = c__22848__auto___26648);

return statearr_26647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26657,opts){
var map__26658 = p__26657;
var map__26658__$1 = (((((!((map__26658 == null))))?(((((map__26658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26658):map__26658);
var eval_body = cljs.core.get.call(null,map__26658__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26658__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26660){var e = e26660;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__26661_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26661_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26662){
var vec__26663 = p__26662;
var k = cljs.core.nth.call(null,vec__26663,(0),null);
var v = cljs.core.nth.call(null,vec__26663,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26666){
var vec__26667 = p__26666;
var k = cljs.core.nth.call(null,vec__26667,(0),null);
var v = cljs.core.nth.call(null,vec__26667,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26673,p__26674){
var map__26675 = p__26673;
var map__26675__$1 = (((((!((map__26675 == null))))?(((((map__26675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26675):map__26675);
var opts = map__26675__$1;
var before_jsload = cljs.core.get.call(null,map__26675__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26675__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26675__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26676 = p__26674;
var map__26676__$1 = (((((!((map__26676 == null))))?(((((map__26676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26676):map__26676);
var msg = map__26676__$1;
var files = cljs.core.get.call(null,map__26676__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26676__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26676__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_26830){
var state_val_26831 = (state_26830[(1)]);
if((state_val_26831 === (7))){
var inst_26693 = (state_26830[(7)]);
var inst_26692 = (state_26830[(8)]);
var inst_26691 = (state_26830[(9)]);
var inst_26690 = (state_26830[(10)]);
var inst_26698 = cljs.core._nth.call(null,inst_26691,inst_26693);
var inst_26699 = figwheel.client.file_reloading.eval_body.call(null,inst_26698,opts);
var inst_26700 = (inst_26693 + (1));
var tmp26832 = inst_26692;
var tmp26833 = inst_26691;
var tmp26834 = inst_26690;
var inst_26690__$1 = tmp26834;
var inst_26691__$1 = tmp26833;
var inst_26692__$1 = tmp26832;
var inst_26693__$1 = inst_26700;
var state_26830__$1 = (function (){var statearr_26835 = state_26830;
(statearr_26835[(7)] = inst_26693__$1);

(statearr_26835[(8)] = inst_26692__$1);

(statearr_26835[(9)] = inst_26691__$1);

(statearr_26835[(10)] = inst_26690__$1);

(statearr_26835[(11)] = inst_26699);

return statearr_26835;
})();
var statearr_26836_26919 = state_26830__$1;
(statearr_26836_26919[(2)] = null);

(statearr_26836_26919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (20))){
var inst_26733 = (state_26830[(12)]);
var inst_26741 = figwheel.client.file_reloading.sort_files.call(null,inst_26733);
var state_26830__$1 = state_26830;
var statearr_26837_26920 = state_26830__$1;
(statearr_26837_26920[(2)] = inst_26741);

(statearr_26837_26920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (27))){
var state_26830__$1 = state_26830;
var statearr_26838_26921 = state_26830__$1;
(statearr_26838_26921[(2)] = null);

(statearr_26838_26921[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (1))){
var inst_26682 = (state_26830[(13)]);
var inst_26679 = before_jsload.call(null,files);
var inst_26680 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26681 = (function (){return (function (p1__26670_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26670_SHARP_);
});
})();
var inst_26682__$1 = cljs.core.filter.call(null,inst_26681,files);
var inst_26683 = cljs.core.not_empty.call(null,inst_26682__$1);
var state_26830__$1 = (function (){var statearr_26839 = state_26830;
(statearr_26839[(13)] = inst_26682__$1);

(statearr_26839[(14)] = inst_26680);

(statearr_26839[(15)] = inst_26679);

return statearr_26839;
})();
if(cljs.core.truth_(inst_26683)){
var statearr_26840_26922 = state_26830__$1;
(statearr_26840_26922[(1)] = (2));

} else {
var statearr_26841_26923 = state_26830__$1;
(statearr_26841_26923[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (24))){
var state_26830__$1 = state_26830;
var statearr_26842_26924 = state_26830__$1;
(statearr_26842_26924[(2)] = null);

(statearr_26842_26924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (39))){
var inst_26783 = (state_26830[(16)]);
var state_26830__$1 = state_26830;
var statearr_26843_26925 = state_26830__$1;
(statearr_26843_26925[(2)] = inst_26783);

(statearr_26843_26925[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (46))){
var inst_26825 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
var statearr_26844_26926 = state_26830__$1;
(statearr_26844_26926[(2)] = inst_26825);

(statearr_26844_26926[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (4))){
var inst_26727 = (state_26830[(2)]);
var inst_26728 = cljs.core.List.EMPTY;
var inst_26729 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26728);
var inst_26730 = (function (){return (function (p1__26671_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26671_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26671_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__26671_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_26731 = cljs.core.filter.call(null,inst_26730,files);
var inst_26732 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26733 = cljs.core.concat.call(null,inst_26731,inst_26732);
var state_26830__$1 = (function (){var statearr_26845 = state_26830;
(statearr_26845[(17)] = inst_26727);

(statearr_26845[(18)] = inst_26729);

(statearr_26845[(12)] = inst_26733);

return statearr_26845;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26846_26927 = state_26830__$1;
(statearr_26846_26927[(1)] = (16));

} else {
var statearr_26847_26928 = state_26830__$1;
(statearr_26847_26928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (15))){
var inst_26717 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
var statearr_26848_26929 = state_26830__$1;
(statearr_26848_26929[(2)] = inst_26717);

(statearr_26848_26929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (21))){
var inst_26743 = (state_26830[(19)]);
var inst_26743__$1 = (state_26830[(2)]);
var inst_26744 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26743__$1);
var state_26830__$1 = (function (){var statearr_26849 = state_26830;
(statearr_26849[(19)] = inst_26743__$1);

return statearr_26849;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26830__$1,(22),inst_26744);
} else {
if((state_val_26831 === (31))){
var inst_26828 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26830__$1,inst_26828);
} else {
if((state_val_26831 === (32))){
var inst_26783 = (state_26830[(16)]);
var inst_26788 = inst_26783.cljs$lang$protocol_mask$partition0$;
var inst_26789 = (inst_26788 & (64));
var inst_26790 = inst_26783.cljs$core$ISeq$;
var inst_26791 = (cljs.core.PROTOCOL_SENTINEL === inst_26790);
var inst_26792 = ((inst_26789) || (inst_26791));
var state_26830__$1 = state_26830;
if(cljs.core.truth_(inst_26792)){
var statearr_26850_26930 = state_26830__$1;
(statearr_26850_26930[(1)] = (35));

} else {
var statearr_26851_26931 = state_26830__$1;
(statearr_26851_26931[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (40))){
var inst_26805 = (state_26830[(20)]);
var inst_26804 = (state_26830[(2)]);
var inst_26805__$1 = cljs.core.get.call(null,inst_26804,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26806 = cljs.core.get.call(null,inst_26804,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26807 = cljs.core.not_empty.call(null,inst_26805__$1);
var state_26830__$1 = (function (){var statearr_26852 = state_26830;
(statearr_26852[(20)] = inst_26805__$1);

(statearr_26852[(21)] = inst_26806);

return statearr_26852;
})();
if(cljs.core.truth_(inst_26807)){
var statearr_26853_26932 = state_26830__$1;
(statearr_26853_26932[(1)] = (41));

} else {
var statearr_26854_26933 = state_26830__$1;
(statearr_26854_26933[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (33))){
var state_26830__$1 = state_26830;
var statearr_26855_26934 = state_26830__$1;
(statearr_26855_26934[(2)] = false);

(statearr_26855_26934[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (13))){
var inst_26703 = (state_26830[(22)]);
var inst_26707 = cljs.core.chunk_first.call(null,inst_26703);
var inst_26708 = cljs.core.chunk_rest.call(null,inst_26703);
var inst_26709 = cljs.core.count.call(null,inst_26707);
var inst_26690 = inst_26708;
var inst_26691 = inst_26707;
var inst_26692 = inst_26709;
var inst_26693 = (0);
var state_26830__$1 = (function (){var statearr_26856 = state_26830;
(statearr_26856[(7)] = inst_26693);

(statearr_26856[(8)] = inst_26692);

(statearr_26856[(9)] = inst_26691);

(statearr_26856[(10)] = inst_26690);

return statearr_26856;
})();
var statearr_26857_26935 = state_26830__$1;
(statearr_26857_26935[(2)] = null);

(statearr_26857_26935[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (22))){
var inst_26743 = (state_26830[(19)]);
var inst_26751 = (state_26830[(23)]);
var inst_26747 = (state_26830[(24)]);
var inst_26746 = (state_26830[(25)]);
var inst_26746__$1 = (state_26830[(2)]);
var inst_26747__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26746__$1);
var inst_26748 = (function (){var all_files = inst_26743;
var res_SINGLEQUOTE_ = inst_26746__$1;
var res = inst_26747__$1;
return (function (p1__26672_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26672_SHARP_));
});
})();
var inst_26749 = cljs.core.filter.call(null,inst_26748,inst_26746__$1);
var inst_26750 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26751__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26750);
var inst_26752 = cljs.core.not_empty.call(null,inst_26751__$1);
var state_26830__$1 = (function (){var statearr_26858 = state_26830;
(statearr_26858[(23)] = inst_26751__$1);

(statearr_26858[(24)] = inst_26747__$1);

(statearr_26858[(26)] = inst_26749);

(statearr_26858[(25)] = inst_26746__$1);

return statearr_26858;
})();
if(cljs.core.truth_(inst_26752)){
var statearr_26859_26936 = state_26830__$1;
(statearr_26859_26936[(1)] = (23));

} else {
var statearr_26860_26937 = state_26830__$1;
(statearr_26860_26937[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (36))){
var state_26830__$1 = state_26830;
var statearr_26861_26938 = state_26830__$1;
(statearr_26861_26938[(2)] = false);

(statearr_26861_26938[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (41))){
var inst_26805 = (state_26830[(20)]);
var inst_26809 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26810 = cljs.core.map.call(null,inst_26809,inst_26805);
var inst_26811 = cljs.core.pr_str.call(null,inst_26810);
var inst_26812 = ["figwheel-no-load meta-data: ",inst_26811].join('');
var inst_26813 = figwheel.client.utils.log.call(null,inst_26812);
var state_26830__$1 = state_26830;
var statearr_26862_26939 = state_26830__$1;
(statearr_26862_26939[(2)] = inst_26813);

(statearr_26862_26939[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (43))){
var inst_26806 = (state_26830[(21)]);
var inst_26816 = (state_26830[(2)]);
var inst_26817 = cljs.core.not_empty.call(null,inst_26806);
var state_26830__$1 = (function (){var statearr_26863 = state_26830;
(statearr_26863[(27)] = inst_26816);

return statearr_26863;
})();
if(cljs.core.truth_(inst_26817)){
var statearr_26864_26940 = state_26830__$1;
(statearr_26864_26940[(1)] = (44));

} else {
var statearr_26865_26941 = state_26830__$1;
(statearr_26865_26941[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (29))){
var inst_26743 = (state_26830[(19)]);
var inst_26783 = (state_26830[(16)]);
var inst_26751 = (state_26830[(23)]);
var inst_26747 = (state_26830[(24)]);
var inst_26749 = (state_26830[(26)]);
var inst_26746 = (state_26830[(25)]);
var inst_26779 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26782 = (function (){var all_files = inst_26743;
var res_SINGLEQUOTE_ = inst_26746;
var res = inst_26747;
var files_not_loaded = inst_26749;
var dependencies_that_loaded = inst_26751;
return (function (p__26781){
var map__26866 = p__26781;
var map__26866__$1 = (((((!((map__26866 == null))))?(((((map__26866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26866):map__26866);
var namespace = cljs.core.get.call(null,map__26866__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_26783__$1 = cljs.core.group_by.call(null,inst_26782,inst_26749);
var inst_26785 = (inst_26783__$1 == null);
var inst_26786 = cljs.core.not.call(null,inst_26785);
var state_26830__$1 = (function (){var statearr_26868 = state_26830;
(statearr_26868[(16)] = inst_26783__$1);

(statearr_26868[(28)] = inst_26779);

return statearr_26868;
})();
if(inst_26786){
var statearr_26869_26942 = state_26830__$1;
(statearr_26869_26942[(1)] = (32));

} else {
var statearr_26870_26943 = state_26830__$1;
(statearr_26870_26943[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (44))){
var inst_26806 = (state_26830[(21)]);
var inst_26819 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26806);
var inst_26820 = cljs.core.pr_str.call(null,inst_26819);
var inst_26821 = ["not required: ",inst_26820].join('');
var inst_26822 = figwheel.client.utils.log.call(null,inst_26821);
var state_26830__$1 = state_26830;
var statearr_26871_26944 = state_26830__$1;
(statearr_26871_26944[(2)] = inst_26822);

(statearr_26871_26944[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (6))){
var inst_26724 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
var statearr_26872_26945 = state_26830__$1;
(statearr_26872_26945[(2)] = inst_26724);

(statearr_26872_26945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (28))){
var inst_26749 = (state_26830[(26)]);
var inst_26776 = (state_26830[(2)]);
var inst_26777 = cljs.core.not_empty.call(null,inst_26749);
var state_26830__$1 = (function (){var statearr_26873 = state_26830;
(statearr_26873[(29)] = inst_26776);

return statearr_26873;
})();
if(cljs.core.truth_(inst_26777)){
var statearr_26874_26946 = state_26830__$1;
(statearr_26874_26946[(1)] = (29));

} else {
var statearr_26875_26947 = state_26830__$1;
(statearr_26875_26947[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (25))){
var inst_26747 = (state_26830[(24)]);
var inst_26763 = (state_26830[(2)]);
var inst_26764 = cljs.core.not_empty.call(null,inst_26747);
var state_26830__$1 = (function (){var statearr_26876 = state_26830;
(statearr_26876[(30)] = inst_26763);

return statearr_26876;
})();
if(cljs.core.truth_(inst_26764)){
var statearr_26877_26948 = state_26830__$1;
(statearr_26877_26948[(1)] = (26));

} else {
var statearr_26878_26949 = state_26830__$1;
(statearr_26878_26949[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (34))){
var inst_26799 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
if(cljs.core.truth_(inst_26799)){
var statearr_26879_26950 = state_26830__$1;
(statearr_26879_26950[(1)] = (38));

} else {
var statearr_26880_26951 = state_26830__$1;
(statearr_26880_26951[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (17))){
var state_26830__$1 = state_26830;
var statearr_26881_26952 = state_26830__$1;
(statearr_26881_26952[(2)] = recompile_dependents);

(statearr_26881_26952[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (3))){
var state_26830__$1 = state_26830;
var statearr_26882_26953 = state_26830__$1;
(statearr_26882_26953[(2)] = null);

(statearr_26882_26953[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (12))){
var inst_26720 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
var statearr_26883_26954 = state_26830__$1;
(statearr_26883_26954[(2)] = inst_26720);

(statearr_26883_26954[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (2))){
var inst_26682 = (state_26830[(13)]);
var inst_26689 = cljs.core.seq.call(null,inst_26682);
var inst_26690 = inst_26689;
var inst_26691 = null;
var inst_26692 = (0);
var inst_26693 = (0);
var state_26830__$1 = (function (){var statearr_26884 = state_26830;
(statearr_26884[(7)] = inst_26693);

(statearr_26884[(8)] = inst_26692);

(statearr_26884[(9)] = inst_26691);

(statearr_26884[(10)] = inst_26690);

return statearr_26884;
})();
var statearr_26885_26955 = state_26830__$1;
(statearr_26885_26955[(2)] = null);

(statearr_26885_26955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (23))){
var inst_26743 = (state_26830[(19)]);
var inst_26751 = (state_26830[(23)]);
var inst_26747 = (state_26830[(24)]);
var inst_26749 = (state_26830[(26)]);
var inst_26746 = (state_26830[(25)]);
var inst_26754 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26756 = (function (){var all_files = inst_26743;
var res_SINGLEQUOTE_ = inst_26746;
var res = inst_26747;
var files_not_loaded = inst_26749;
var dependencies_that_loaded = inst_26751;
return (function (p__26755){
var map__26886 = p__26755;
var map__26886__$1 = (((((!((map__26886 == null))))?(((((map__26886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26886):map__26886);
var request_url = cljs.core.get.call(null,map__26886__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_26757 = cljs.core.reverse.call(null,inst_26751);
var inst_26758 = cljs.core.map.call(null,inst_26756,inst_26757);
var inst_26759 = cljs.core.pr_str.call(null,inst_26758);
var inst_26760 = figwheel.client.utils.log.call(null,inst_26759);
var state_26830__$1 = (function (){var statearr_26888 = state_26830;
(statearr_26888[(31)] = inst_26754);

return statearr_26888;
})();
var statearr_26889_26956 = state_26830__$1;
(statearr_26889_26956[(2)] = inst_26760);

(statearr_26889_26956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (35))){
var state_26830__$1 = state_26830;
var statearr_26890_26957 = state_26830__$1;
(statearr_26890_26957[(2)] = true);

(statearr_26890_26957[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (19))){
var inst_26733 = (state_26830[(12)]);
var inst_26739 = figwheel.client.file_reloading.expand_files.call(null,inst_26733);
var state_26830__$1 = state_26830;
var statearr_26891_26958 = state_26830__$1;
(statearr_26891_26958[(2)] = inst_26739);

(statearr_26891_26958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (11))){
var state_26830__$1 = state_26830;
var statearr_26892_26959 = state_26830__$1;
(statearr_26892_26959[(2)] = null);

(statearr_26892_26959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (9))){
var inst_26722 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
var statearr_26893_26960 = state_26830__$1;
(statearr_26893_26960[(2)] = inst_26722);

(statearr_26893_26960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (5))){
var inst_26693 = (state_26830[(7)]);
var inst_26692 = (state_26830[(8)]);
var inst_26695 = (inst_26693 < inst_26692);
var inst_26696 = inst_26695;
var state_26830__$1 = state_26830;
if(cljs.core.truth_(inst_26696)){
var statearr_26894_26961 = state_26830__$1;
(statearr_26894_26961[(1)] = (7));

} else {
var statearr_26895_26962 = state_26830__$1;
(statearr_26895_26962[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (14))){
var inst_26703 = (state_26830[(22)]);
var inst_26712 = cljs.core.first.call(null,inst_26703);
var inst_26713 = figwheel.client.file_reloading.eval_body.call(null,inst_26712,opts);
var inst_26714 = cljs.core.next.call(null,inst_26703);
var inst_26690 = inst_26714;
var inst_26691 = null;
var inst_26692 = (0);
var inst_26693 = (0);
var state_26830__$1 = (function (){var statearr_26896 = state_26830;
(statearr_26896[(7)] = inst_26693);

(statearr_26896[(8)] = inst_26692);

(statearr_26896[(9)] = inst_26691);

(statearr_26896[(10)] = inst_26690);

(statearr_26896[(32)] = inst_26713);

return statearr_26896;
})();
var statearr_26897_26963 = state_26830__$1;
(statearr_26897_26963[(2)] = null);

(statearr_26897_26963[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (45))){
var state_26830__$1 = state_26830;
var statearr_26898_26964 = state_26830__$1;
(statearr_26898_26964[(2)] = null);

(statearr_26898_26964[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (26))){
var inst_26743 = (state_26830[(19)]);
var inst_26751 = (state_26830[(23)]);
var inst_26747 = (state_26830[(24)]);
var inst_26749 = (state_26830[(26)]);
var inst_26746 = (state_26830[(25)]);
var inst_26766 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26768 = (function (){var all_files = inst_26743;
var res_SINGLEQUOTE_ = inst_26746;
var res = inst_26747;
var files_not_loaded = inst_26749;
var dependencies_that_loaded = inst_26751;
return (function (p__26767){
var map__26899 = p__26767;
var map__26899__$1 = (((((!((map__26899 == null))))?(((((map__26899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26899):map__26899);
var namespace = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_26769 = cljs.core.map.call(null,inst_26768,inst_26747);
var inst_26770 = cljs.core.pr_str.call(null,inst_26769);
var inst_26771 = figwheel.client.utils.log.call(null,inst_26770);
var inst_26772 = (function (){var all_files = inst_26743;
var res_SINGLEQUOTE_ = inst_26746;
var res = inst_26747;
var files_not_loaded = inst_26749;
var dependencies_that_loaded = inst_26751;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_26773 = setTimeout(inst_26772,(10));
var state_26830__$1 = (function (){var statearr_26901 = state_26830;
(statearr_26901[(33)] = inst_26766);

(statearr_26901[(34)] = inst_26771);

return statearr_26901;
})();
var statearr_26902_26965 = state_26830__$1;
(statearr_26902_26965[(2)] = inst_26773);

(statearr_26902_26965[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (16))){
var state_26830__$1 = state_26830;
var statearr_26903_26966 = state_26830__$1;
(statearr_26903_26966[(2)] = reload_dependents);

(statearr_26903_26966[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (38))){
var inst_26783 = (state_26830[(16)]);
var inst_26801 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26783);
var state_26830__$1 = state_26830;
var statearr_26904_26967 = state_26830__$1;
(statearr_26904_26967[(2)] = inst_26801);

(statearr_26904_26967[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (30))){
var state_26830__$1 = state_26830;
var statearr_26905_26968 = state_26830__$1;
(statearr_26905_26968[(2)] = null);

(statearr_26905_26968[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (10))){
var inst_26703 = (state_26830[(22)]);
var inst_26705 = cljs.core.chunked_seq_QMARK_.call(null,inst_26703);
var state_26830__$1 = state_26830;
if(inst_26705){
var statearr_26906_26969 = state_26830__$1;
(statearr_26906_26969[(1)] = (13));

} else {
var statearr_26907_26970 = state_26830__$1;
(statearr_26907_26970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (18))){
var inst_26737 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
if(cljs.core.truth_(inst_26737)){
var statearr_26908_26971 = state_26830__$1;
(statearr_26908_26971[(1)] = (19));

} else {
var statearr_26909_26972 = state_26830__$1;
(statearr_26909_26972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (42))){
var state_26830__$1 = state_26830;
var statearr_26910_26973 = state_26830__$1;
(statearr_26910_26973[(2)] = null);

(statearr_26910_26973[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (37))){
var inst_26796 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
var statearr_26911_26974 = state_26830__$1;
(statearr_26911_26974[(2)] = inst_26796);

(statearr_26911_26974[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (8))){
var inst_26690 = (state_26830[(10)]);
var inst_26703 = (state_26830[(22)]);
var inst_26703__$1 = cljs.core.seq.call(null,inst_26690);
var state_26830__$1 = (function (){var statearr_26912 = state_26830;
(statearr_26912[(22)] = inst_26703__$1);

return statearr_26912;
})();
if(inst_26703__$1){
var statearr_26913_26975 = state_26830__$1;
(statearr_26913_26975[(1)] = (10));

} else {
var statearr_26914_26976 = state_26830__$1;
(statearr_26914_26976[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22754__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22754__auto____0 = (function (){
var statearr_26915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26915[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22754__auto__);

(statearr_26915[(1)] = (1));

return statearr_26915;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22754__auto____1 = (function (state_26830){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_26830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e26916){if((e26916 instanceof Object)){
var ex__22757__auto__ = e26916;
var statearr_26917_26977 = state_26830;
(statearr_26917_26977[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26978 = state_26830;
state_26830 = G__26978;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22754__auto__ = function(state_26830){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22754__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22754__auto____1.call(this,state_26830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22754__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22754__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_26918 = f__22849__auto__.call(null);
(statearr_26918[(6)] = c__22848__auto__);

return statearr_26918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));

return c__22848__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26981,link){
var map__26982 = p__26981;
var map__26982__$1 = (((((!((map__26982 == null))))?(((((map__26982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26982):map__26982);
var file = cljs.core.get.call(null,map__26982__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__26979_SHARP_,p2__26980_SHARP_){
if(cljs.core._EQ_.call(null,p1__26979_SHARP_,p2__26980_SHARP_)){
return p1__26979_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26985){
var map__26986 = p__26985;
var map__26986__$1 = (((((!((map__26986 == null))))?(((((map__26986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26986):map__26986);
var match_length = cljs.core.get.call(null,map__26986__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26986__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26984_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26984_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26988_SHARP_,p2__26989_SHARP_){
return cljs.core.assoc.call(null,p1__26988_SHARP_,cljs.core.get.call(null,p2__26989_SHARP_,key),p2__26989_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_26990 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_26990);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_26990);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26991,p__26992){
var map__26993 = p__26991;
var map__26993__$1 = (((((!((map__26993 == null))))?(((((map__26993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26993):map__26993);
var on_cssload = cljs.core.get.call(null,map__26993__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__26994 = p__26992;
var map__26994__$1 = (((((!((map__26994 == null))))?(((((map__26994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26994):map__26994);
var files_msg = map__26994__$1;
var files = cljs.core.get.call(null,map__26994__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1608397898441
