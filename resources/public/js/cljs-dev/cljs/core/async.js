// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22908 = arguments.length;
switch (G__22908) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22909 = (function (f,blockable,meta22910){
this.f = f;
this.blockable = blockable;
this.meta22910 = meta22910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22911,meta22910__$1){
var self__ = this;
var _22911__$1 = this;
return (new cljs.core.async.t_cljs$core$async22909(self__.f,self__.blockable,meta22910__$1));
}));

(cljs.core.async.t_cljs$core$async22909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22911){
var self__ = this;
var _22911__$1 = this;
return self__.meta22910;
}));

(cljs.core.async.t_cljs$core$async22909.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22909.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async22909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async22909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22910","meta22910",1987486813,null)], null);
}));

(cljs.core.async.t_cljs$core$async22909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22909");

(cljs.core.async.t_cljs$core$async22909.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async22909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22909.
 */
cljs.core.async.__GT_t_cljs$core$async22909 = (function cljs$core$async$__GT_t_cljs$core$async22909(f__$1,blockable__$1,meta22910){
return (new cljs.core.async.t_cljs$core$async22909(f__$1,blockable__$1,meta22910));
});

}

return (new cljs.core.async.t_cljs$core$async22909(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__22915 = arguments.length;
switch (G__22915) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__22918 = arguments.length;
switch (G__22918) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__22921 = arguments.length;
switch (G__22921) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22923 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22923);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_22923);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__22925 = arguments.length;
switch (G__22925) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___22927 = n;
var x_22928 = (0);
while(true){
if((x_22928 < n__4613__auto___22927)){
(a[x_22928] = (0));

var G__22929 = (x_22928 + (1));
x_22928 = G__22929;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22930 = (i + (1));
i = G__22930;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22931 = (function (flag,meta22932){
this.flag = flag;
this.meta22932 = meta22932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22933,meta22932__$1){
var self__ = this;
var _22933__$1 = this;
return (new cljs.core.async.t_cljs$core$async22931(self__.flag,meta22932__$1));
}));

(cljs.core.async.t_cljs$core$async22931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22933){
var self__ = this;
var _22933__$1 = this;
return self__.meta22932;
}));

(cljs.core.async.t_cljs$core$async22931.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async22931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async22931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22932","meta22932",2012744220,null)], null);
}));

(cljs.core.async.t_cljs$core$async22931.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22931");

(cljs.core.async.t_cljs$core$async22931.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async22931");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22931.
 */
cljs.core.async.__GT_t_cljs$core$async22931 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22931(flag__$1,meta22932){
return (new cljs.core.async.t_cljs$core$async22931(flag__$1,meta22932));
});

}

return (new cljs.core.async.t_cljs$core$async22931(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22934 = (function (flag,cb,meta22935){
this.flag = flag;
this.cb = cb;
this.meta22935 = meta22935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22936,meta22935__$1){
var self__ = this;
var _22936__$1 = this;
return (new cljs.core.async.t_cljs$core$async22934(self__.flag,self__.cb,meta22935__$1));
}));

(cljs.core.async.t_cljs$core$async22934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22936){
var self__ = this;
var _22936__$1 = this;
return self__.meta22935;
}));

(cljs.core.async.t_cljs$core$async22934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async22934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async22934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22935","meta22935",-2116863192,null)], null);
}));

(cljs.core.async.t_cljs$core$async22934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22934");

(cljs.core.async.t_cljs$core$async22934.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async22934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22934.
 */
cljs.core.async.__GT_t_cljs$core$async22934 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22934(flag__$1,cb__$1,meta22935){
return (new cljs.core.async.t_cljs$core$async22934(flag__$1,cb__$1,meta22935));
});

}

return (new cljs.core.async.t_cljs$core$async22934(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22937_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22937_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22938_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22938_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22939 = (i + (1));
i = G__22939;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22945 = arguments.length;
var i__4737__auto___22946 = (0);
while(true){
if((i__4737__auto___22946 < len__4736__auto___22945)){
args__4742__auto__.push((arguments[i__4737__auto___22946]));

var G__22947 = (i__4737__auto___22946 + (1));
i__4737__auto___22946 = G__22947;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22942){
var map__22943 = p__22942;
var map__22943__$1 = (((((!((map__22943 == null))))?(((((map__22943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22943):map__22943);
var opts = map__22943__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22940){
var G__22941 = cljs.core.first.call(null,seq22940);
var seq22940__$1 = cljs.core.next.call(null,seq22940);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22941,seq22940__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__22949 = arguments.length;
switch (G__22949) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22848__auto___22995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_22973){
var state_val_22974 = (state_22973[(1)]);
if((state_val_22974 === (7))){
var inst_22969 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
var statearr_22975_22996 = state_22973__$1;
(statearr_22975_22996[(2)] = inst_22969);

(statearr_22975_22996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (1))){
var state_22973__$1 = state_22973;
var statearr_22976_22997 = state_22973__$1;
(statearr_22976_22997[(2)] = null);

(statearr_22976_22997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (4))){
var inst_22952 = (state_22973[(7)]);
var inst_22952__$1 = (state_22973[(2)]);
var inst_22953 = (inst_22952__$1 == null);
var state_22973__$1 = (function (){var statearr_22977 = state_22973;
(statearr_22977[(7)] = inst_22952__$1);

return statearr_22977;
})();
if(cljs.core.truth_(inst_22953)){
var statearr_22978_22998 = state_22973__$1;
(statearr_22978_22998[(1)] = (5));

} else {
var statearr_22979_22999 = state_22973__$1;
(statearr_22979_22999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (13))){
var state_22973__$1 = state_22973;
var statearr_22980_23000 = state_22973__$1;
(statearr_22980_23000[(2)] = null);

(statearr_22980_23000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (6))){
var inst_22952 = (state_22973[(7)]);
var state_22973__$1 = state_22973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22973__$1,(11),to,inst_22952);
} else {
if((state_val_22974 === (3))){
var inst_22971 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22973__$1,inst_22971);
} else {
if((state_val_22974 === (12))){
var state_22973__$1 = state_22973;
var statearr_22981_23001 = state_22973__$1;
(statearr_22981_23001[(2)] = null);

(statearr_22981_23001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (2))){
var state_22973__$1 = state_22973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22973__$1,(4),from);
} else {
if((state_val_22974 === (11))){
var inst_22962 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
if(cljs.core.truth_(inst_22962)){
var statearr_22982_23002 = state_22973__$1;
(statearr_22982_23002[(1)] = (12));

} else {
var statearr_22983_23003 = state_22973__$1;
(statearr_22983_23003[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (9))){
var state_22973__$1 = state_22973;
var statearr_22984_23004 = state_22973__$1;
(statearr_22984_23004[(2)] = null);

(statearr_22984_23004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (5))){
var state_22973__$1 = state_22973;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22985_23005 = state_22973__$1;
(statearr_22985_23005[(1)] = (8));

} else {
var statearr_22986_23006 = state_22973__$1;
(statearr_22986_23006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (14))){
var inst_22967 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
var statearr_22987_23007 = state_22973__$1;
(statearr_22987_23007[(2)] = inst_22967);

(statearr_22987_23007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (10))){
var inst_22959 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
var statearr_22988_23008 = state_22973__$1;
(statearr_22988_23008[(2)] = inst_22959);

(statearr_22988_23008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (8))){
var inst_22956 = cljs.core.async.close_BANG_.call(null,to);
var state_22973__$1 = state_22973;
var statearr_22989_23009 = state_22973__$1;
(statearr_22989_23009[(2)] = inst_22956);

(statearr_22989_23009[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__22754__auto__ = null;
var cljs$core$async$state_machine__22754__auto____0 = (function (){
var statearr_22990 = [null,null,null,null,null,null,null,null];
(statearr_22990[(0)] = cljs$core$async$state_machine__22754__auto__);

(statearr_22990[(1)] = (1));

return statearr_22990;
});
var cljs$core$async$state_machine__22754__auto____1 = (function (state_22973){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_22973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e22991){if((e22991 instanceof Object)){
var ex__22757__auto__ = e22991;
var statearr_22992_23010 = state_22973;
(statearr_22992_23010[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23011 = state_22973;
state_22973 = G__23011;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$state_machine__22754__auto__ = function(state_22973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22754__auto____1.call(this,state_22973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22754__auto____0;
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22754__auto____1;
return cljs$core$async$state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_22993 = f__22849__auto__.call(null);
(statearr_22993[(6)] = c__22848__auto___22995);

return statearr_22993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__23012){
var vec__23013 = p__23012;
var v = cljs.core.nth.call(null,vec__23013,(0),null);
var p = cljs.core.nth.call(null,vec__23013,(1),null);
var job = vec__23013;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22848__auto___23184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_23020){
var state_val_23021 = (state_23020[(1)]);
if((state_val_23021 === (1))){
var state_23020__$1 = state_23020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23020__$1,(2),res,v);
} else {
if((state_val_23021 === (2))){
var inst_23017 = (state_23020[(2)]);
var inst_23018 = cljs.core.async.close_BANG_.call(null,res);
var state_23020__$1 = (function (){var statearr_23022 = state_23020;
(statearr_23022[(7)] = inst_23017);

return statearr_23022;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23020__$1,inst_23018);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0 = (function (){
var statearr_23023 = [null,null,null,null,null,null,null,null];
(statearr_23023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__);

(statearr_23023[(1)] = (1));

return statearr_23023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1 = (function (state_23020){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_23020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e23024){if((e23024 instanceof Object)){
var ex__22757__auto__ = e23024;
var statearr_23025_23185 = state_23020;
(statearr_23025_23185[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23186 = state_23020;
state_23020 = G__23186;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__ = function(state_23020){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1.call(this,state_23020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_23026 = f__22849__auto__.call(null);
(statearr_23026[(6)] = c__22848__auto___23184);

return statearr_23026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__23027){
var vec__23028 = p__23027;
var v = cljs.core.nth.call(null,vec__23028,(0),null);
var p = cljs.core.nth.call(null,vec__23028,(1),null);
var job = vec__23028;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___23187 = n;
var __23188 = (0);
while(true){
if((__23188 < n__4613__auto___23187)){
var G__23031_23189 = type;
var G__23031_23190__$1 = (((G__23031_23189 instanceof cljs.core.Keyword))?G__23031_23189.fqn:null);
switch (G__23031_23190__$1) {
case "compute":
var c__22848__auto___23192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23188,c__22848__auto___23192,G__23031_23189,G__23031_23190__$1,n__4613__auto___23187,jobs,results,process,async){
return (function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = ((function (__23188,c__22848__auto___23192,G__23031_23189,G__23031_23190__$1,n__4613__auto___23187,jobs,results,process,async){
return (function (state_23044){
var state_val_23045 = (state_23044[(1)]);
if((state_val_23045 === (1))){
var state_23044__$1 = state_23044;
var statearr_23046_23193 = state_23044__$1;
(statearr_23046_23193[(2)] = null);

(statearr_23046_23193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23045 === (2))){
var state_23044__$1 = state_23044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23044__$1,(4),jobs);
} else {
if((state_val_23045 === (3))){
var inst_23042 = (state_23044[(2)]);
var state_23044__$1 = state_23044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23044__$1,inst_23042);
} else {
if((state_val_23045 === (4))){
var inst_23034 = (state_23044[(2)]);
var inst_23035 = process.call(null,inst_23034);
var state_23044__$1 = state_23044;
if(cljs.core.truth_(inst_23035)){
var statearr_23047_23194 = state_23044__$1;
(statearr_23047_23194[(1)] = (5));

} else {
var statearr_23048_23195 = state_23044__$1;
(statearr_23048_23195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23045 === (5))){
var state_23044__$1 = state_23044;
var statearr_23049_23196 = state_23044__$1;
(statearr_23049_23196[(2)] = null);

(statearr_23049_23196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23045 === (6))){
var state_23044__$1 = state_23044;
var statearr_23050_23197 = state_23044__$1;
(statearr_23050_23197[(2)] = null);

(statearr_23050_23197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23045 === (7))){
var inst_23040 = (state_23044[(2)]);
var state_23044__$1 = state_23044;
var statearr_23051_23198 = state_23044__$1;
(statearr_23051_23198[(2)] = inst_23040);

(statearr_23051_23198[(1)] = (3));


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
});})(__23188,c__22848__auto___23192,G__23031_23189,G__23031_23190__$1,n__4613__auto___23187,jobs,results,process,async))
;
return ((function (__23188,switch__22753__auto__,c__22848__auto___23192,G__23031_23189,G__23031_23190__$1,n__4613__auto___23187,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0 = (function (){
var statearr_23052 = [null,null,null,null,null,null,null];
(statearr_23052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__);

(statearr_23052[(1)] = (1));

return statearr_23052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1 = (function (state_23044){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_23044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e23053){if((e23053 instanceof Object)){
var ex__22757__auto__ = e23053;
var statearr_23054_23199 = state_23044;
(statearr_23054_23199[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23200 = state_23044;
state_23044 = G__23200;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__ = function(state_23044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1.call(this,state_23044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__;
})()
;})(__23188,switch__22753__auto__,c__22848__auto___23192,G__23031_23189,G__23031_23190__$1,n__4613__auto___23187,jobs,results,process,async))
})();
var state__22850__auto__ = (function (){var statearr_23055 = f__22849__auto__.call(null);
(statearr_23055[(6)] = c__22848__auto___23192);

return statearr_23055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
});})(__23188,c__22848__auto___23192,G__23031_23189,G__23031_23190__$1,n__4613__auto___23187,jobs,results,process,async))
);


break;
case "async":
var c__22848__auto___23201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23188,c__22848__auto___23201,G__23031_23189,G__23031_23190__$1,n__4613__auto___23187,jobs,results,process,async){
return (function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = ((function (__23188,c__22848__auto___23201,G__23031_23189,G__23031_23190__$1,n__4613__auto___23187,jobs,results,process,async){
return (function (state_23068){
var state_val_23069 = (state_23068[(1)]);
if((state_val_23069 === (1))){
var state_23068__$1 = state_23068;
var statearr_23070_23202 = state_23068__$1;
(statearr_23070_23202[(2)] = null);

(statearr_23070_23202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23069 === (2))){
var state_23068__$1 = state_23068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23068__$1,(4),jobs);
} else {
if((state_val_23069 === (3))){
var inst_23066 = (state_23068[(2)]);
var state_23068__$1 = state_23068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23068__$1,inst_23066);
} else {
if((state_val_23069 === (4))){
var inst_23058 = (state_23068[(2)]);
var inst_23059 = async.call(null,inst_23058);
var state_23068__$1 = state_23068;
if(cljs.core.truth_(inst_23059)){
var statearr_23071_23203 = state_23068__$1;
(statearr_23071_23203[(1)] = (5));

} else {
var statearr_23072_23204 = state_23068__$1;
(statearr_23072_23204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23069 === (5))){
var state_23068__$1 = state_23068;
var statearr_23073_23205 = state_23068__$1;
(statearr_23073_23205[(2)] = null);

(statearr_23073_23205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23069 === (6))){
var state_23068__$1 = state_23068;
var statearr_23074_23206 = state_23068__$1;
(statearr_23074_23206[(2)] = null);

(statearr_23074_23206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23069 === (7))){
var inst_23064 = (state_23068[(2)]);
var state_23068__$1 = state_23068;
var statearr_23075_23207 = state_23068__$1;
(statearr_23075_23207[(2)] = inst_23064);

(statearr_23075_23207[(1)] = (3));


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
});})(__23188,c__22848__auto___23201,G__23031_23189,G__23031_23190__$1,n__4613__auto___23187,jobs,results,process,async))
;
return ((function (__23188,switch__22753__auto__,c__22848__auto___23201,G__23031_23189,G__23031_23190__$1,n__4613__auto___23187,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0 = (function (){
var statearr_23076 = [null,null,null,null,null,null,null];
(statearr_23076[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__);

(statearr_23076[(1)] = (1));

return statearr_23076;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1 = (function (state_23068){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_23068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e23077){if((e23077 instanceof Object)){
var ex__22757__auto__ = e23077;
var statearr_23078_23208 = state_23068;
(statearr_23078_23208[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23209 = state_23068;
state_23068 = G__23209;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__ = function(state_23068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1.call(this,state_23068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__;
})()
;})(__23188,switch__22753__auto__,c__22848__auto___23201,G__23031_23189,G__23031_23190__$1,n__4613__auto___23187,jobs,results,process,async))
})();
var state__22850__auto__ = (function (){var statearr_23079 = f__22849__auto__.call(null);
(statearr_23079[(6)] = c__22848__auto___23201);

return statearr_23079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
});})(__23188,c__22848__auto___23201,G__23031_23189,G__23031_23190__$1,n__4613__auto___23187,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23031_23190__$1)].join('')));

}

var G__23210 = (__23188 + (1));
__23188 = G__23210;
continue;
} else {
}
break;
}

var c__22848__auto___23211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_23101){
var state_val_23102 = (state_23101[(1)]);
if((state_val_23102 === (7))){
var inst_23097 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
var statearr_23103_23212 = state_23101__$1;
(statearr_23103_23212[(2)] = inst_23097);

(statearr_23103_23212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (1))){
var state_23101__$1 = state_23101;
var statearr_23104_23213 = state_23101__$1;
(statearr_23104_23213[(2)] = null);

(statearr_23104_23213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (4))){
var inst_23082 = (state_23101[(7)]);
var inst_23082__$1 = (state_23101[(2)]);
var inst_23083 = (inst_23082__$1 == null);
var state_23101__$1 = (function (){var statearr_23105 = state_23101;
(statearr_23105[(7)] = inst_23082__$1);

return statearr_23105;
})();
if(cljs.core.truth_(inst_23083)){
var statearr_23106_23214 = state_23101__$1;
(statearr_23106_23214[(1)] = (5));

} else {
var statearr_23107_23215 = state_23101__$1;
(statearr_23107_23215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (6))){
var inst_23087 = (state_23101[(8)]);
var inst_23082 = (state_23101[(7)]);
var inst_23087__$1 = cljs.core.async.chan.call(null,(1));
var inst_23088 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23089 = [inst_23082,inst_23087__$1];
var inst_23090 = (new cljs.core.PersistentVector(null,2,(5),inst_23088,inst_23089,null));
var state_23101__$1 = (function (){var statearr_23108 = state_23101;
(statearr_23108[(8)] = inst_23087__$1);

return statearr_23108;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23101__$1,(8),jobs,inst_23090);
} else {
if((state_val_23102 === (3))){
var inst_23099 = (state_23101[(2)]);
var state_23101__$1 = state_23101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23101__$1,inst_23099);
} else {
if((state_val_23102 === (2))){
var state_23101__$1 = state_23101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23101__$1,(4),from);
} else {
if((state_val_23102 === (9))){
var inst_23094 = (state_23101[(2)]);
var state_23101__$1 = (function (){var statearr_23109 = state_23101;
(statearr_23109[(9)] = inst_23094);

return statearr_23109;
})();
var statearr_23110_23216 = state_23101__$1;
(statearr_23110_23216[(2)] = null);

(statearr_23110_23216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (5))){
var inst_23085 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23101__$1 = state_23101;
var statearr_23111_23217 = state_23101__$1;
(statearr_23111_23217[(2)] = inst_23085);

(statearr_23111_23217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23102 === (8))){
var inst_23087 = (state_23101[(8)]);
var inst_23092 = (state_23101[(2)]);
var state_23101__$1 = (function (){var statearr_23112 = state_23101;
(statearr_23112[(10)] = inst_23092);

return statearr_23112;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23101__$1,(9),results,inst_23087);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0 = (function (){
var statearr_23113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__);

(statearr_23113[(1)] = (1));

return statearr_23113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1 = (function (state_23101){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_23101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e23114){if((e23114 instanceof Object)){
var ex__22757__auto__ = e23114;
var statearr_23115_23218 = state_23101;
(statearr_23115_23218[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23219 = state_23101;
state_23101 = G__23219;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__ = function(state_23101){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1.call(this,state_23101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_23116 = f__22849__auto__.call(null);
(statearr_23116[(6)] = c__22848__auto___23211);

return statearr_23116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


var c__22848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_23154){
var state_val_23155 = (state_23154[(1)]);
if((state_val_23155 === (7))){
var inst_23150 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23156_23220 = state_23154__$1;
(statearr_23156_23220[(2)] = inst_23150);

(statearr_23156_23220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (20))){
var state_23154__$1 = state_23154;
var statearr_23157_23221 = state_23154__$1;
(statearr_23157_23221[(2)] = null);

(statearr_23157_23221[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (1))){
var state_23154__$1 = state_23154;
var statearr_23158_23222 = state_23154__$1;
(statearr_23158_23222[(2)] = null);

(statearr_23158_23222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (4))){
var inst_23119 = (state_23154[(7)]);
var inst_23119__$1 = (state_23154[(2)]);
var inst_23120 = (inst_23119__$1 == null);
var state_23154__$1 = (function (){var statearr_23159 = state_23154;
(statearr_23159[(7)] = inst_23119__$1);

return statearr_23159;
})();
if(cljs.core.truth_(inst_23120)){
var statearr_23160_23223 = state_23154__$1;
(statearr_23160_23223[(1)] = (5));

} else {
var statearr_23161_23224 = state_23154__$1;
(statearr_23161_23224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (15))){
var inst_23132 = (state_23154[(8)]);
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23154__$1,(18),to,inst_23132);
} else {
if((state_val_23155 === (21))){
var inst_23145 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23162_23225 = state_23154__$1;
(statearr_23162_23225[(2)] = inst_23145);

(statearr_23162_23225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (13))){
var inst_23147 = (state_23154[(2)]);
var state_23154__$1 = (function (){var statearr_23163 = state_23154;
(statearr_23163[(9)] = inst_23147);

return statearr_23163;
})();
var statearr_23164_23226 = state_23154__$1;
(statearr_23164_23226[(2)] = null);

(statearr_23164_23226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (6))){
var inst_23119 = (state_23154[(7)]);
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23154__$1,(11),inst_23119);
} else {
if((state_val_23155 === (17))){
var inst_23140 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
if(cljs.core.truth_(inst_23140)){
var statearr_23165_23227 = state_23154__$1;
(statearr_23165_23227[(1)] = (19));

} else {
var statearr_23166_23228 = state_23154__$1;
(statearr_23166_23228[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (3))){
var inst_23152 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23154__$1,inst_23152);
} else {
if((state_val_23155 === (12))){
var inst_23129 = (state_23154[(10)]);
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23154__$1,(14),inst_23129);
} else {
if((state_val_23155 === (2))){
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23154__$1,(4),results);
} else {
if((state_val_23155 === (19))){
var state_23154__$1 = state_23154;
var statearr_23167_23229 = state_23154__$1;
(statearr_23167_23229[(2)] = null);

(statearr_23167_23229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (11))){
var inst_23129 = (state_23154[(2)]);
var state_23154__$1 = (function (){var statearr_23168 = state_23154;
(statearr_23168[(10)] = inst_23129);

return statearr_23168;
})();
var statearr_23169_23230 = state_23154__$1;
(statearr_23169_23230[(2)] = null);

(statearr_23169_23230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (9))){
var state_23154__$1 = state_23154;
var statearr_23170_23231 = state_23154__$1;
(statearr_23170_23231[(2)] = null);

(statearr_23170_23231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (5))){
var state_23154__$1 = state_23154;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23171_23232 = state_23154__$1;
(statearr_23171_23232[(1)] = (8));

} else {
var statearr_23172_23233 = state_23154__$1;
(statearr_23172_23233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (14))){
var inst_23132 = (state_23154[(8)]);
var inst_23132__$1 = (state_23154[(2)]);
var inst_23133 = (inst_23132__$1 == null);
var inst_23134 = cljs.core.not.call(null,inst_23133);
var state_23154__$1 = (function (){var statearr_23173 = state_23154;
(statearr_23173[(8)] = inst_23132__$1);

return statearr_23173;
})();
if(inst_23134){
var statearr_23174_23234 = state_23154__$1;
(statearr_23174_23234[(1)] = (15));

} else {
var statearr_23175_23235 = state_23154__$1;
(statearr_23175_23235[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (16))){
var state_23154__$1 = state_23154;
var statearr_23176_23236 = state_23154__$1;
(statearr_23176_23236[(2)] = false);

(statearr_23176_23236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (10))){
var inst_23126 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23177_23237 = state_23154__$1;
(statearr_23177_23237[(2)] = inst_23126);

(statearr_23177_23237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (18))){
var inst_23137 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23178_23238 = state_23154__$1;
(statearr_23178_23238[(2)] = inst_23137);

(statearr_23178_23238[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (8))){
var inst_23123 = cljs.core.async.close_BANG_.call(null,to);
var state_23154__$1 = state_23154;
var statearr_23179_23239 = state_23154__$1;
(statearr_23179_23239[(2)] = inst_23123);

(statearr_23179_23239[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0 = (function (){
var statearr_23180 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23180[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__);

(statearr_23180[(1)] = (1));

return statearr_23180;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1 = (function (state_23154){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_23154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e23181){if((e23181 instanceof Object)){
var ex__22757__auto__ = e23181;
var statearr_23182_23240 = state_23154;
(statearr_23182_23240[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23241 = state_23154;
state_23154 = G__23241;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__ = function(state_23154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1.call(this,state_23154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22754__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_23183 = f__22849__auto__.call(null);
(statearr_23183[(6)] = c__22848__auto__);

return statearr_23183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));

return c__22848__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23243 = arguments.length;
switch (G__23243) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23246 = arguments.length;
switch (G__23246) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23249 = arguments.length;
switch (G__23249) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22848__auto___23298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_23275){
var state_val_23276 = (state_23275[(1)]);
if((state_val_23276 === (7))){
var inst_23271 = (state_23275[(2)]);
var state_23275__$1 = state_23275;
var statearr_23277_23299 = state_23275__$1;
(statearr_23277_23299[(2)] = inst_23271);

(statearr_23277_23299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23276 === (1))){
var state_23275__$1 = state_23275;
var statearr_23278_23300 = state_23275__$1;
(statearr_23278_23300[(2)] = null);

(statearr_23278_23300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23276 === (4))){
var inst_23252 = (state_23275[(7)]);
var inst_23252__$1 = (state_23275[(2)]);
var inst_23253 = (inst_23252__$1 == null);
var state_23275__$1 = (function (){var statearr_23279 = state_23275;
(statearr_23279[(7)] = inst_23252__$1);

return statearr_23279;
})();
if(cljs.core.truth_(inst_23253)){
var statearr_23280_23301 = state_23275__$1;
(statearr_23280_23301[(1)] = (5));

} else {
var statearr_23281_23302 = state_23275__$1;
(statearr_23281_23302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23276 === (13))){
var state_23275__$1 = state_23275;
var statearr_23282_23303 = state_23275__$1;
(statearr_23282_23303[(2)] = null);

(statearr_23282_23303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23276 === (6))){
var inst_23252 = (state_23275[(7)]);
var inst_23258 = p.call(null,inst_23252);
var state_23275__$1 = state_23275;
if(cljs.core.truth_(inst_23258)){
var statearr_23283_23304 = state_23275__$1;
(statearr_23283_23304[(1)] = (9));

} else {
var statearr_23284_23305 = state_23275__$1;
(statearr_23284_23305[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23276 === (3))){
var inst_23273 = (state_23275[(2)]);
var state_23275__$1 = state_23275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23275__$1,inst_23273);
} else {
if((state_val_23276 === (12))){
var state_23275__$1 = state_23275;
var statearr_23285_23306 = state_23275__$1;
(statearr_23285_23306[(2)] = null);

(statearr_23285_23306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23276 === (2))){
var state_23275__$1 = state_23275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23275__$1,(4),ch);
} else {
if((state_val_23276 === (11))){
var inst_23252 = (state_23275[(7)]);
var inst_23262 = (state_23275[(2)]);
var state_23275__$1 = state_23275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23275__$1,(8),inst_23262,inst_23252);
} else {
if((state_val_23276 === (9))){
var state_23275__$1 = state_23275;
var statearr_23286_23307 = state_23275__$1;
(statearr_23286_23307[(2)] = tc);

(statearr_23286_23307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23276 === (5))){
var inst_23255 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23256 = cljs.core.async.close_BANG_.call(null,fc);
var state_23275__$1 = (function (){var statearr_23287 = state_23275;
(statearr_23287[(8)] = inst_23255);

return statearr_23287;
})();
var statearr_23288_23308 = state_23275__$1;
(statearr_23288_23308[(2)] = inst_23256);

(statearr_23288_23308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23276 === (14))){
var inst_23269 = (state_23275[(2)]);
var state_23275__$1 = state_23275;
var statearr_23289_23309 = state_23275__$1;
(statearr_23289_23309[(2)] = inst_23269);

(statearr_23289_23309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23276 === (10))){
var state_23275__$1 = state_23275;
var statearr_23290_23310 = state_23275__$1;
(statearr_23290_23310[(2)] = fc);

(statearr_23290_23310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23276 === (8))){
var inst_23264 = (state_23275[(2)]);
var state_23275__$1 = state_23275;
if(cljs.core.truth_(inst_23264)){
var statearr_23291_23311 = state_23275__$1;
(statearr_23291_23311[(1)] = (12));

} else {
var statearr_23292_23312 = state_23275__$1;
(statearr_23292_23312[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__22754__auto__ = null;
var cljs$core$async$state_machine__22754__auto____0 = (function (){
var statearr_23293 = [null,null,null,null,null,null,null,null,null];
(statearr_23293[(0)] = cljs$core$async$state_machine__22754__auto__);

(statearr_23293[(1)] = (1));

return statearr_23293;
});
var cljs$core$async$state_machine__22754__auto____1 = (function (state_23275){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_23275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e23294){if((e23294 instanceof Object)){
var ex__22757__auto__ = e23294;
var statearr_23295_23313 = state_23275;
(statearr_23295_23313[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23314 = state_23275;
state_23275 = G__23314;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$state_machine__22754__auto__ = function(state_23275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22754__auto____1.call(this,state_23275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22754__auto____0;
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22754__auto____1;
return cljs$core$async$state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_23296 = f__22849__auto__.call(null);
(statearr_23296[(6)] = c__22848__auto___23298);

return statearr_23296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_23335){
var state_val_23336 = (state_23335[(1)]);
if((state_val_23336 === (7))){
var inst_23331 = (state_23335[(2)]);
var state_23335__$1 = state_23335;
var statearr_23337_23355 = state_23335__$1;
(statearr_23337_23355[(2)] = inst_23331);

(statearr_23337_23355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (1))){
var inst_23315 = init;
var state_23335__$1 = (function (){var statearr_23338 = state_23335;
(statearr_23338[(7)] = inst_23315);

return statearr_23338;
})();
var statearr_23339_23356 = state_23335__$1;
(statearr_23339_23356[(2)] = null);

(statearr_23339_23356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (4))){
var inst_23318 = (state_23335[(8)]);
var inst_23318__$1 = (state_23335[(2)]);
var inst_23319 = (inst_23318__$1 == null);
var state_23335__$1 = (function (){var statearr_23340 = state_23335;
(statearr_23340[(8)] = inst_23318__$1);

return statearr_23340;
})();
if(cljs.core.truth_(inst_23319)){
var statearr_23341_23357 = state_23335__$1;
(statearr_23341_23357[(1)] = (5));

} else {
var statearr_23342_23358 = state_23335__$1;
(statearr_23342_23358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (6))){
var inst_23315 = (state_23335[(7)]);
var inst_23322 = (state_23335[(9)]);
var inst_23318 = (state_23335[(8)]);
var inst_23322__$1 = f.call(null,inst_23315,inst_23318);
var inst_23323 = cljs.core.reduced_QMARK_.call(null,inst_23322__$1);
var state_23335__$1 = (function (){var statearr_23343 = state_23335;
(statearr_23343[(9)] = inst_23322__$1);

return statearr_23343;
})();
if(inst_23323){
var statearr_23344_23359 = state_23335__$1;
(statearr_23344_23359[(1)] = (8));

} else {
var statearr_23345_23360 = state_23335__$1;
(statearr_23345_23360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (3))){
var inst_23333 = (state_23335[(2)]);
var state_23335__$1 = state_23335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23335__$1,inst_23333);
} else {
if((state_val_23336 === (2))){
var state_23335__$1 = state_23335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23335__$1,(4),ch);
} else {
if((state_val_23336 === (9))){
var inst_23322 = (state_23335[(9)]);
var inst_23315 = inst_23322;
var state_23335__$1 = (function (){var statearr_23346 = state_23335;
(statearr_23346[(7)] = inst_23315);

return statearr_23346;
})();
var statearr_23347_23361 = state_23335__$1;
(statearr_23347_23361[(2)] = null);

(statearr_23347_23361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (5))){
var inst_23315 = (state_23335[(7)]);
var state_23335__$1 = state_23335;
var statearr_23348_23362 = state_23335__$1;
(statearr_23348_23362[(2)] = inst_23315);

(statearr_23348_23362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (10))){
var inst_23329 = (state_23335[(2)]);
var state_23335__$1 = state_23335;
var statearr_23349_23363 = state_23335__$1;
(statearr_23349_23363[(2)] = inst_23329);

(statearr_23349_23363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23336 === (8))){
var inst_23322 = (state_23335[(9)]);
var inst_23325 = cljs.core.deref.call(null,inst_23322);
var state_23335__$1 = state_23335;
var statearr_23350_23364 = state_23335__$1;
(statearr_23350_23364[(2)] = inst_23325);

(statearr_23350_23364[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__22754__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22754__auto____0 = (function (){
var statearr_23351 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23351[(0)] = cljs$core$async$reduce_$_state_machine__22754__auto__);

(statearr_23351[(1)] = (1));

return statearr_23351;
});
var cljs$core$async$reduce_$_state_machine__22754__auto____1 = (function (state_23335){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_23335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e23352){if((e23352 instanceof Object)){
var ex__22757__auto__ = e23352;
var statearr_23353_23365 = state_23335;
(statearr_23353_23365[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23366 = state_23335;
state_23335 = G__23366;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22754__auto__ = function(state_23335){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22754__auto____1.call(this,state_23335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22754__auto____0;
cljs$core$async$reduce_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22754__auto____1;
return cljs$core$async$reduce_$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_23354 = f__22849__auto__.call(null);
(statearr_23354[(6)] = c__22848__auto__);

return statearr_23354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));

return c__22848__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_23372){
var state_val_23373 = (state_23372[(1)]);
if((state_val_23373 === (1))){
var inst_23367 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23372__$1 = state_23372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23372__$1,(2),inst_23367);
} else {
if((state_val_23373 === (2))){
var inst_23369 = (state_23372[(2)]);
var inst_23370 = f__$1.call(null,inst_23369);
var state_23372__$1 = state_23372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23372__$1,inst_23370);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__22754__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22754__auto____0 = (function (){
var statearr_23374 = [null,null,null,null,null,null,null];
(statearr_23374[(0)] = cljs$core$async$transduce_$_state_machine__22754__auto__);

(statearr_23374[(1)] = (1));

return statearr_23374;
});
var cljs$core$async$transduce_$_state_machine__22754__auto____1 = (function (state_23372){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_23372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e23375){if((e23375 instanceof Object)){
var ex__22757__auto__ = e23375;
var statearr_23376_23378 = state_23372;
(statearr_23376_23378[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23379 = state_23372;
state_23372 = G__23379;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22754__auto__ = function(state_23372){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22754__auto____1.call(this,state_23372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22754__auto____0;
cljs$core$async$transduce_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22754__auto____1;
return cljs$core$async$transduce_$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_23377 = f__22849__auto__.call(null);
(statearr_23377[(6)] = c__22848__auto__);

return statearr_23377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));

return c__22848__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23381 = arguments.length;
switch (G__23381) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_23406){
var state_val_23407 = (state_23406[(1)]);
if((state_val_23407 === (7))){
var inst_23388 = (state_23406[(2)]);
var state_23406__$1 = state_23406;
var statearr_23408_23429 = state_23406__$1;
(statearr_23408_23429[(2)] = inst_23388);

(statearr_23408_23429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (1))){
var inst_23382 = cljs.core.seq.call(null,coll);
var inst_23383 = inst_23382;
var state_23406__$1 = (function (){var statearr_23409 = state_23406;
(statearr_23409[(7)] = inst_23383);

return statearr_23409;
})();
var statearr_23410_23430 = state_23406__$1;
(statearr_23410_23430[(2)] = null);

(statearr_23410_23430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (4))){
var inst_23383 = (state_23406[(7)]);
var inst_23386 = cljs.core.first.call(null,inst_23383);
var state_23406__$1 = state_23406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23406__$1,(7),ch,inst_23386);
} else {
if((state_val_23407 === (13))){
var inst_23400 = (state_23406[(2)]);
var state_23406__$1 = state_23406;
var statearr_23411_23431 = state_23406__$1;
(statearr_23411_23431[(2)] = inst_23400);

(statearr_23411_23431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (6))){
var inst_23391 = (state_23406[(2)]);
var state_23406__$1 = state_23406;
if(cljs.core.truth_(inst_23391)){
var statearr_23412_23432 = state_23406__$1;
(statearr_23412_23432[(1)] = (8));

} else {
var statearr_23413_23433 = state_23406__$1;
(statearr_23413_23433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (3))){
var inst_23404 = (state_23406[(2)]);
var state_23406__$1 = state_23406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23406__$1,inst_23404);
} else {
if((state_val_23407 === (12))){
var state_23406__$1 = state_23406;
var statearr_23414_23434 = state_23406__$1;
(statearr_23414_23434[(2)] = null);

(statearr_23414_23434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (2))){
var inst_23383 = (state_23406[(7)]);
var state_23406__$1 = state_23406;
if(cljs.core.truth_(inst_23383)){
var statearr_23415_23435 = state_23406__$1;
(statearr_23415_23435[(1)] = (4));

} else {
var statearr_23416_23436 = state_23406__$1;
(statearr_23416_23436[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (11))){
var inst_23397 = cljs.core.async.close_BANG_.call(null,ch);
var state_23406__$1 = state_23406;
var statearr_23417_23437 = state_23406__$1;
(statearr_23417_23437[(2)] = inst_23397);

(statearr_23417_23437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (9))){
var state_23406__$1 = state_23406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23418_23438 = state_23406__$1;
(statearr_23418_23438[(1)] = (11));

} else {
var statearr_23419_23439 = state_23406__$1;
(statearr_23419_23439[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (5))){
var inst_23383 = (state_23406[(7)]);
var state_23406__$1 = state_23406;
var statearr_23420_23440 = state_23406__$1;
(statearr_23420_23440[(2)] = inst_23383);

(statearr_23420_23440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (10))){
var inst_23402 = (state_23406[(2)]);
var state_23406__$1 = state_23406;
var statearr_23421_23441 = state_23406__$1;
(statearr_23421_23441[(2)] = inst_23402);

(statearr_23421_23441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (8))){
var inst_23383 = (state_23406[(7)]);
var inst_23393 = cljs.core.next.call(null,inst_23383);
var inst_23383__$1 = inst_23393;
var state_23406__$1 = (function (){var statearr_23422 = state_23406;
(statearr_23422[(7)] = inst_23383__$1);

return statearr_23422;
})();
var statearr_23423_23442 = state_23406__$1;
(statearr_23423_23442[(2)] = null);

(statearr_23423_23442[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__22754__auto__ = null;
var cljs$core$async$state_machine__22754__auto____0 = (function (){
var statearr_23424 = [null,null,null,null,null,null,null,null];
(statearr_23424[(0)] = cljs$core$async$state_machine__22754__auto__);

(statearr_23424[(1)] = (1));

return statearr_23424;
});
var cljs$core$async$state_machine__22754__auto____1 = (function (state_23406){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_23406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e23425){if((e23425 instanceof Object)){
var ex__22757__auto__ = e23425;
var statearr_23426_23443 = state_23406;
(statearr_23426_23443[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23444 = state_23406;
state_23406 = G__23444;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$state_machine__22754__auto__ = function(state_23406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22754__auto____1.call(this,state_23406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22754__auto____0;
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22754__auto____1;
return cljs$core$async$state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_23427 = f__22849__auto__.call(null);
(statearr_23427[(6)] = c__22848__auto__);

return statearr_23427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));

return c__22848__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_23445 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_23445.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_23446 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_23446.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_23447 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_23447.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_23448 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_23448.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23449 = (function (ch,cs,meta23450){
this.ch = ch;
this.cs = cs;
this.meta23450 = meta23450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23451,meta23450__$1){
var self__ = this;
var _23451__$1 = this;
return (new cljs.core.async.t_cljs$core$async23449(self__.ch,self__.cs,meta23450__$1));
}));

(cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23451){
var self__ = this;
var _23451__$1 = this;
return self__.meta23450;
}));

(cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async23449.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async23449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23450","meta23450",-31854318,null)], null);
}));

(cljs.core.async.t_cljs$core$async23449.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23449");

(cljs.core.async.t_cljs$core$async23449.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23449");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23449.
 */
cljs.core.async.__GT_t_cljs$core$async23449 = (function cljs$core$async$mult_$___GT_t_cljs$core$async23449(ch__$1,cs__$1,meta23450){
return (new cljs.core.async.t_cljs$core$async23449(ch__$1,cs__$1,meta23450));
});

}

return (new cljs.core.async.t_cljs$core$async23449(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__22848__auto___23671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_23586){
var state_val_23587 = (state_23586[(1)]);
if((state_val_23587 === (7))){
var inst_23582 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23588_23672 = state_23586__$1;
(statearr_23588_23672[(2)] = inst_23582);

(statearr_23588_23672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (20))){
var inst_23485 = (state_23586[(7)]);
var inst_23497 = cljs.core.first.call(null,inst_23485);
var inst_23498 = cljs.core.nth.call(null,inst_23497,(0),null);
var inst_23499 = cljs.core.nth.call(null,inst_23497,(1),null);
var state_23586__$1 = (function (){var statearr_23589 = state_23586;
(statearr_23589[(8)] = inst_23498);

return statearr_23589;
})();
if(cljs.core.truth_(inst_23499)){
var statearr_23590_23673 = state_23586__$1;
(statearr_23590_23673[(1)] = (22));

} else {
var statearr_23591_23674 = state_23586__$1;
(statearr_23591_23674[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (27))){
var inst_23527 = (state_23586[(9)]);
var inst_23454 = (state_23586[(10)]);
var inst_23529 = (state_23586[(11)]);
var inst_23534 = (state_23586[(12)]);
var inst_23534__$1 = cljs.core._nth.call(null,inst_23527,inst_23529);
var inst_23535 = cljs.core.async.put_BANG_.call(null,inst_23534__$1,inst_23454,done);
var state_23586__$1 = (function (){var statearr_23592 = state_23586;
(statearr_23592[(12)] = inst_23534__$1);

return statearr_23592;
})();
if(cljs.core.truth_(inst_23535)){
var statearr_23593_23675 = state_23586__$1;
(statearr_23593_23675[(1)] = (30));

} else {
var statearr_23594_23676 = state_23586__$1;
(statearr_23594_23676[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (1))){
var state_23586__$1 = state_23586;
var statearr_23595_23677 = state_23586__$1;
(statearr_23595_23677[(2)] = null);

(statearr_23595_23677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (24))){
var inst_23485 = (state_23586[(7)]);
var inst_23504 = (state_23586[(2)]);
var inst_23505 = cljs.core.next.call(null,inst_23485);
var inst_23463 = inst_23505;
var inst_23464 = null;
var inst_23465 = (0);
var inst_23466 = (0);
var state_23586__$1 = (function (){var statearr_23596 = state_23586;
(statearr_23596[(13)] = inst_23466);

(statearr_23596[(14)] = inst_23464);

(statearr_23596[(15)] = inst_23463);

(statearr_23596[(16)] = inst_23465);

(statearr_23596[(17)] = inst_23504);

return statearr_23596;
})();
var statearr_23597_23678 = state_23586__$1;
(statearr_23597_23678[(2)] = null);

(statearr_23597_23678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (39))){
var state_23586__$1 = state_23586;
var statearr_23601_23679 = state_23586__$1;
(statearr_23601_23679[(2)] = null);

(statearr_23601_23679[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (4))){
var inst_23454 = (state_23586[(10)]);
var inst_23454__$1 = (state_23586[(2)]);
var inst_23455 = (inst_23454__$1 == null);
var state_23586__$1 = (function (){var statearr_23602 = state_23586;
(statearr_23602[(10)] = inst_23454__$1);

return statearr_23602;
})();
if(cljs.core.truth_(inst_23455)){
var statearr_23603_23680 = state_23586__$1;
(statearr_23603_23680[(1)] = (5));

} else {
var statearr_23604_23681 = state_23586__$1;
(statearr_23604_23681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (15))){
var inst_23466 = (state_23586[(13)]);
var inst_23464 = (state_23586[(14)]);
var inst_23463 = (state_23586[(15)]);
var inst_23465 = (state_23586[(16)]);
var inst_23481 = (state_23586[(2)]);
var inst_23482 = (inst_23466 + (1));
var tmp23598 = inst_23464;
var tmp23599 = inst_23463;
var tmp23600 = inst_23465;
var inst_23463__$1 = tmp23599;
var inst_23464__$1 = tmp23598;
var inst_23465__$1 = tmp23600;
var inst_23466__$1 = inst_23482;
var state_23586__$1 = (function (){var statearr_23605 = state_23586;
(statearr_23605[(18)] = inst_23481);

(statearr_23605[(13)] = inst_23466__$1);

(statearr_23605[(14)] = inst_23464__$1);

(statearr_23605[(15)] = inst_23463__$1);

(statearr_23605[(16)] = inst_23465__$1);

return statearr_23605;
})();
var statearr_23606_23682 = state_23586__$1;
(statearr_23606_23682[(2)] = null);

(statearr_23606_23682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (21))){
var inst_23508 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23610_23683 = state_23586__$1;
(statearr_23610_23683[(2)] = inst_23508);

(statearr_23610_23683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (31))){
var inst_23534 = (state_23586[(12)]);
var inst_23538 = done.call(null,null);
var inst_23539 = cljs.core.async.untap_STAR_.call(null,m,inst_23534);
var state_23586__$1 = (function (){var statearr_23611 = state_23586;
(statearr_23611[(19)] = inst_23538);

return statearr_23611;
})();
var statearr_23612_23684 = state_23586__$1;
(statearr_23612_23684[(2)] = inst_23539);

(statearr_23612_23684[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (32))){
var inst_23527 = (state_23586[(9)]);
var inst_23529 = (state_23586[(11)]);
var inst_23528 = (state_23586[(20)]);
var inst_23526 = (state_23586[(21)]);
var inst_23541 = (state_23586[(2)]);
var inst_23542 = (inst_23529 + (1));
var tmp23607 = inst_23527;
var tmp23608 = inst_23528;
var tmp23609 = inst_23526;
var inst_23526__$1 = tmp23609;
var inst_23527__$1 = tmp23607;
var inst_23528__$1 = tmp23608;
var inst_23529__$1 = inst_23542;
var state_23586__$1 = (function (){var statearr_23613 = state_23586;
(statearr_23613[(22)] = inst_23541);

(statearr_23613[(9)] = inst_23527__$1);

(statearr_23613[(11)] = inst_23529__$1);

(statearr_23613[(20)] = inst_23528__$1);

(statearr_23613[(21)] = inst_23526__$1);

return statearr_23613;
})();
var statearr_23614_23685 = state_23586__$1;
(statearr_23614_23685[(2)] = null);

(statearr_23614_23685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (40))){
var inst_23554 = (state_23586[(23)]);
var inst_23558 = done.call(null,null);
var inst_23559 = cljs.core.async.untap_STAR_.call(null,m,inst_23554);
var state_23586__$1 = (function (){var statearr_23615 = state_23586;
(statearr_23615[(24)] = inst_23558);

return statearr_23615;
})();
var statearr_23616_23686 = state_23586__$1;
(statearr_23616_23686[(2)] = inst_23559);

(statearr_23616_23686[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (33))){
var inst_23545 = (state_23586[(25)]);
var inst_23547 = cljs.core.chunked_seq_QMARK_.call(null,inst_23545);
var state_23586__$1 = state_23586;
if(inst_23547){
var statearr_23617_23687 = state_23586__$1;
(statearr_23617_23687[(1)] = (36));

} else {
var statearr_23618_23688 = state_23586__$1;
(statearr_23618_23688[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (13))){
var inst_23475 = (state_23586[(26)]);
var inst_23478 = cljs.core.async.close_BANG_.call(null,inst_23475);
var state_23586__$1 = state_23586;
var statearr_23619_23689 = state_23586__$1;
(statearr_23619_23689[(2)] = inst_23478);

(statearr_23619_23689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (22))){
var inst_23498 = (state_23586[(8)]);
var inst_23501 = cljs.core.async.close_BANG_.call(null,inst_23498);
var state_23586__$1 = state_23586;
var statearr_23620_23690 = state_23586__$1;
(statearr_23620_23690[(2)] = inst_23501);

(statearr_23620_23690[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (36))){
var inst_23545 = (state_23586[(25)]);
var inst_23549 = cljs.core.chunk_first.call(null,inst_23545);
var inst_23550 = cljs.core.chunk_rest.call(null,inst_23545);
var inst_23551 = cljs.core.count.call(null,inst_23549);
var inst_23526 = inst_23550;
var inst_23527 = inst_23549;
var inst_23528 = inst_23551;
var inst_23529 = (0);
var state_23586__$1 = (function (){var statearr_23621 = state_23586;
(statearr_23621[(9)] = inst_23527);

(statearr_23621[(11)] = inst_23529);

(statearr_23621[(20)] = inst_23528);

(statearr_23621[(21)] = inst_23526);

return statearr_23621;
})();
var statearr_23622_23691 = state_23586__$1;
(statearr_23622_23691[(2)] = null);

(statearr_23622_23691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (41))){
var inst_23545 = (state_23586[(25)]);
var inst_23561 = (state_23586[(2)]);
var inst_23562 = cljs.core.next.call(null,inst_23545);
var inst_23526 = inst_23562;
var inst_23527 = null;
var inst_23528 = (0);
var inst_23529 = (0);
var state_23586__$1 = (function (){var statearr_23623 = state_23586;
(statearr_23623[(9)] = inst_23527);

(statearr_23623[(27)] = inst_23561);

(statearr_23623[(11)] = inst_23529);

(statearr_23623[(20)] = inst_23528);

(statearr_23623[(21)] = inst_23526);

return statearr_23623;
})();
var statearr_23624_23692 = state_23586__$1;
(statearr_23624_23692[(2)] = null);

(statearr_23624_23692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (43))){
var state_23586__$1 = state_23586;
var statearr_23625_23693 = state_23586__$1;
(statearr_23625_23693[(2)] = null);

(statearr_23625_23693[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (29))){
var inst_23570 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23626_23694 = state_23586__$1;
(statearr_23626_23694[(2)] = inst_23570);

(statearr_23626_23694[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (44))){
var inst_23579 = (state_23586[(2)]);
var state_23586__$1 = (function (){var statearr_23627 = state_23586;
(statearr_23627[(28)] = inst_23579);

return statearr_23627;
})();
var statearr_23628_23695 = state_23586__$1;
(statearr_23628_23695[(2)] = null);

(statearr_23628_23695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (6))){
var inst_23518 = (state_23586[(29)]);
var inst_23517 = cljs.core.deref.call(null,cs);
var inst_23518__$1 = cljs.core.keys.call(null,inst_23517);
var inst_23519 = cljs.core.count.call(null,inst_23518__$1);
var inst_23520 = cljs.core.reset_BANG_.call(null,dctr,inst_23519);
var inst_23525 = cljs.core.seq.call(null,inst_23518__$1);
var inst_23526 = inst_23525;
var inst_23527 = null;
var inst_23528 = (0);
var inst_23529 = (0);
var state_23586__$1 = (function (){var statearr_23629 = state_23586;
(statearr_23629[(30)] = inst_23520);

(statearr_23629[(29)] = inst_23518__$1);

(statearr_23629[(9)] = inst_23527);

(statearr_23629[(11)] = inst_23529);

(statearr_23629[(20)] = inst_23528);

(statearr_23629[(21)] = inst_23526);

return statearr_23629;
})();
var statearr_23630_23696 = state_23586__$1;
(statearr_23630_23696[(2)] = null);

(statearr_23630_23696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (28))){
var inst_23545 = (state_23586[(25)]);
var inst_23526 = (state_23586[(21)]);
var inst_23545__$1 = cljs.core.seq.call(null,inst_23526);
var state_23586__$1 = (function (){var statearr_23631 = state_23586;
(statearr_23631[(25)] = inst_23545__$1);

return statearr_23631;
})();
if(inst_23545__$1){
var statearr_23632_23697 = state_23586__$1;
(statearr_23632_23697[(1)] = (33));

} else {
var statearr_23633_23698 = state_23586__$1;
(statearr_23633_23698[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (25))){
var inst_23529 = (state_23586[(11)]);
var inst_23528 = (state_23586[(20)]);
var inst_23531 = (inst_23529 < inst_23528);
var inst_23532 = inst_23531;
var state_23586__$1 = state_23586;
if(cljs.core.truth_(inst_23532)){
var statearr_23634_23699 = state_23586__$1;
(statearr_23634_23699[(1)] = (27));

} else {
var statearr_23635_23700 = state_23586__$1;
(statearr_23635_23700[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (34))){
var state_23586__$1 = state_23586;
var statearr_23636_23701 = state_23586__$1;
(statearr_23636_23701[(2)] = null);

(statearr_23636_23701[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (17))){
var state_23586__$1 = state_23586;
var statearr_23637_23702 = state_23586__$1;
(statearr_23637_23702[(2)] = null);

(statearr_23637_23702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (3))){
var inst_23584 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23586__$1,inst_23584);
} else {
if((state_val_23587 === (12))){
var inst_23513 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23638_23703 = state_23586__$1;
(statearr_23638_23703[(2)] = inst_23513);

(statearr_23638_23703[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (2))){
var state_23586__$1 = state_23586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23586__$1,(4),ch);
} else {
if((state_val_23587 === (23))){
var state_23586__$1 = state_23586;
var statearr_23639_23704 = state_23586__$1;
(statearr_23639_23704[(2)] = null);

(statearr_23639_23704[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (35))){
var inst_23568 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23640_23705 = state_23586__$1;
(statearr_23640_23705[(2)] = inst_23568);

(statearr_23640_23705[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (19))){
var inst_23485 = (state_23586[(7)]);
var inst_23489 = cljs.core.chunk_first.call(null,inst_23485);
var inst_23490 = cljs.core.chunk_rest.call(null,inst_23485);
var inst_23491 = cljs.core.count.call(null,inst_23489);
var inst_23463 = inst_23490;
var inst_23464 = inst_23489;
var inst_23465 = inst_23491;
var inst_23466 = (0);
var state_23586__$1 = (function (){var statearr_23641 = state_23586;
(statearr_23641[(13)] = inst_23466);

(statearr_23641[(14)] = inst_23464);

(statearr_23641[(15)] = inst_23463);

(statearr_23641[(16)] = inst_23465);

return statearr_23641;
})();
var statearr_23642_23706 = state_23586__$1;
(statearr_23642_23706[(2)] = null);

(statearr_23642_23706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (11))){
var inst_23463 = (state_23586[(15)]);
var inst_23485 = (state_23586[(7)]);
var inst_23485__$1 = cljs.core.seq.call(null,inst_23463);
var state_23586__$1 = (function (){var statearr_23643 = state_23586;
(statearr_23643[(7)] = inst_23485__$1);

return statearr_23643;
})();
if(inst_23485__$1){
var statearr_23644_23707 = state_23586__$1;
(statearr_23644_23707[(1)] = (16));

} else {
var statearr_23645_23708 = state_23586__$1;
(statearr_23645_23708[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (9))){
var inst_23515 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23646_23709 = state_23586__$1;
(statearr_23646_23709[(2)] = inst_23515);

(statearr_23646_23709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (5))){
var inst_23461 = cljs.core.deref.call(null,cs);
var inst_23462 = cljs.core.seq.call(null,inst_23461);
var inst_23463 = inst_23462;
var inst_23464 = null;
var inst_23465 = (0);
var inst_23466 = (0);
var state_23586__$1 = (function (){var statearr_23647 = state_23586;
(statearr_23647[(13)] = inst_23466);

(statearr_23647[(14)] = inst_23464);

(statearr_23647[(15)] = inst_23463);

(statearr_23647[(16)] = inst_23465);

return statearr_23647;
})();
var statearr_23648_23710 = state_23586__$1;
(statearr_23648_23710[(2)] = null);

(statearr_23648_23710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (14))){
var state_23586__$1 = state_23586;
var statearr_23649_23711 = state_23586__$1;
(statearr_23649_23711[(2)] = null);

(statearr_23649_23711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (45))){
var inst_23576 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23650_23712 = state_23586__$1;
(statearr_23650_23712[(2)] = inst_23576);

(statearr_23650_23712[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (26))){
var inst_23518 = (state_23586[(29)]);
var inst_23572 = (state_23586[(2)]);
var inst_23573 = cljs.core.seq.call(null,inst_23518);
var state_23586__$1 = (function (){var statearr_23651 = state_23586;
(statearr_23651[(31)] = inst_23572);

return statearr_23651;
})();
if(inst_23573){
var statearr_23652_23713 = state_23586__$1;
(statearr_23652_23713[(1)] = (42));

} else {
var statearr_23653_23714 = state_23586__$1;
(statearr_23653_23714[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (16))){
var inst_23485 = (state_23586[(7)]);
var inst_23487 = cljs.core.chunked_seq_QMARK_.call(null,inst_23485);
var state_23586__$1 = state_23586;
if(inst_23487){
var statearr_23654_23715 = state_23586__$1;
(statearr_23654_23715[(1)] = (19));

} else {
var statearr_23655_23716 = state_23586__$1;
(statearr_23655_23716[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (38))){
var inst_23565 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23656_23717 = state_23586__$1;
(statearr_23656_23717[(2)] = inst_23565);

(statearr_23656_23717[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (30))){
var state_23586__$1 = state_23586;
var statearr_23657_23718 = state_23586__$1;
(statearr_23657_23718[(2)] = null);

(statearr_23657_23718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (10))){
var inst_23466 = (state_23586[(13)]);
var inst_23464 = (state_23586[(14)]);
var inst_23474 = cljs.core._nth.call(null,inst_23464,inst_23466);
var inst_23475 = cljs.core.nth.call(null,inst_23474,(0),null);
var inst_23476 = cljs.core.nth.call(null,inst_23474,(1),null);
var state_23586__$1 = (function (){var statearr_23658 = state_23586;
(statearr_23658[(26)] = inst_23475);

return statearr_23658;
})();
if(cljs.core.truth_(inst_23476)){
var statearr_23659_23719 = state_23586__$1;
(statearr_23659_23719[(1)] = (13));

} else {
var statearr_23660_23720 = state_23586__$1;
(statearr_23660_23720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (18))){
var inst_23511 = (state_23586[(2)]);
var state_23586__$1 = state_23586;
var statearr_23661_23721 = state_23586__$1;
(statearr_23661_23721[(2)] = inst_23511);

(statearr_23661_23721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (42))){
var state_23586__$1 = state_23586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23586__$1,(45),dchan);
} else {
if((state_val_23587 === (37))){
var inst_23545 = (state_23586[(25)]);
var inst_23454 = (state_23586[(10)]);
var inst_23554 = (state_23586[(23)]);
var inst_23554__$1 = cljs.core.first.call(null,inst_23545);
var inst_23555 = cljs.core.async.put_BANG_.call(null,inst_23554__$1,inst_23454,done);
var state_23586__$1 = (function (){var statearr_23662 = state_23586;
(statearr_23662[(23)] = inst_23554__$1);

return statearr_23662;
})();
if(cljs.core.truth_(inst_23555)){
var statearr_23663_23722 = state_23586__$1;
(statearr_23663_23722[(1)] = (39));

} else {
var statearr_23664_23723 = state_23586__$1;
(statearr_23664_23723[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23587 === (8))){
var inst_23466 = (state_23586[(13)]);
var inst_23465 = (state_23586[(16)]);
var inst_23468 = (inst_23466 < inst_23465);
var inst_23469 = inst_23468;
var state_23586__$1 = state_23586;
if(cljs.core.truth_(inst_23469)){
var statearr_23665_23724 = state_23586__$1;
(statearr_23665_23724[(1)] = (10));

} else {
var statearr_23666_23725 = state_23586__$1;
(statearr_23666_23725[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__22754__auto__ = null;
var cljs$core$async$mult_$_state_machine__22754__auto____0 = (function (){
var statearr_23667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23667[(0)] = cljs$core$async$mult_$_state_machine__22754__auto__);

(statearr_23667[(1)] = (1));

return statearr_23667;
});
var cljs$core$async$mult_$_state_machine__22754__auto____1 = (function (state_23586){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_23586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e23668){if((e23668 instanceof Object)){
var ex__22757__auto__ = e23668;
var statearr_23669_23726 = state_23586;
(statearr_23669_23726[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23727 = state_23586;
state_23586 = G__23727;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22754__auto__ = function(state_23586){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22754__auto____1.call(this,state_23586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22754__auto____0;
cljs$core$async$mult_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22754__auto____1;
return cljs$core$async$mult_$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_23670 = f__22849__auto__.call(null);
(statearr_23670[(6)] = c__22848__auto___23671);

return statearr_23670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__23729 = arguments.length;
switch (G__23729) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_23731 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_23731.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_23732 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_23732.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_23733 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_23733.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_23734 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_23734.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_23735 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_23735.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23746 = arguments.length;
var i__4737__auto___23747 = (0);
while(true){
if((i__4737__auto___23747 < len__4736__auto___23746)){
args__4742__auto__.push((arguments[i__4737__auto___23747]));

var G__23748 = (i__4737__auto___23747 + (1));
i__4737__auto___23747 = G__23748;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23740){
var map__23741 = p__23740;
var map__23741__$1 = (((((!((map__23741 == null))))?(((((map__23741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23741):map__23741);
var opts = map__23741__$1;
var statearr_23743_23749 = state;
(statearr_23743_23749[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_23744_23750 = state;
(statearr_23744_23750[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_23745_23751 = state;
(statearr_23745_23751[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23736){
var G__23737 = cljs.core.first.call(null,seq23736);
var seq23736__$1 = cljs.core.next.call(null,seq23736);
var G__23738 = cljs.core.first.call(null,seq23736__$1);
var seq23736__$2 = cljs.core.next.call(null,seq23736__$1);
var G__23739 = cljs.core.first.call(null,seq23736__$2);
var seq23736__$3 = cljs.core.next.call(null,seq23736__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23737,G__23738,G__23739,seq23736__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23752 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23753){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23753 = meta23753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23754,meta23753__$1){
var self__ = this;
var _23754__$1 = this;
return (new cljs.core.async.t_cljs$core$async23752(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23753__$1));
}));

(cljs.core.async.t_cljs$core$async23752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23754){
var self__ = this;
var _23754__$1 = this;
return self__.meta23753;
}));

(cljs.core.async.t_cljs$core$async23752.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23752.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async23752.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23752.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23752.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23752.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23752.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23752.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23753","meta23753",-2006048235,null)], null);
}));

(cljs.core.async.t_cljs$core$async23752.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23752");

(cljs.core.async.t_cljs$core$async23752.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23752");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23752.
 */
cljs.core.async.__GT_t_cljs$core$async23752 = (function cljs$core$async$mix_$___GT_t_cljs$core$async23752(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23753){
return (new cljs.core.async.t_cljs$core$async23752(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23753));
});

}

return (new cljs.core.async.t_cljs$core$async23752(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22848__auto___23916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_23856){
var state_val_23857 = (state_23856[(1)]);
if((state_val_23857 === (7))){
var inst_23771 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23858_23917 = state_23856__$1;
(statearr_23858_23917[(2)] = inst_23771);

(statearr_23858_23917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (20))){
var inst_23783 = (state_23856[(7)]);
var state_23856__$1 = state_23856;
var statearr_23859_23918 = state_23856__$1;
(statearr_23859_23918[(2)] = inst_23783);

(statearr_23859_23918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (27))){
var state_23856__$1 = state_23856;
var statearr_23860_23919 = state_23856__$1;
(statearr_23860_23919[(2)] = null);

(statearr_23860_23919[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (1))){
var inst_23758 = (state_23856[(8)]);
var inst_23758__$1 = calc_state.call(null);
var inst_23760 = (inst_23758__$1 == null);
var inst_23761 = cljs.core.not.call(null,inst_23760);
var state_23856__$1 = (function (){var statearr_23861 = state_23856;
(statearr_23861[(8)] = inst_23758__$1);

return statearr_23861;
})();
if(inst_23761){
var statearr_23862_23920 = state_23856__$1;
(statearr_23862_23920[(1)] = (2));

} else {
var statearr_23863_23921 = state_23856__$1;
(statearr_23863_23921[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (24))){
var inst_23807 = (state_23856[(9)]);
var inst_23830 = (state_23856[(10)]);
var inst_23816 = (state_23856[(11)]);
var inst_23830__$1 = inst_23807.call(null,inst_23816);
var state_23856__$1 = (function (){var statearr_23864 = state_23856;
(statearr_23864[(10)] = inst_23830__$1);

return statearr_23864;
})();
if(cljs.core.truth_(inst_23830__$1)){
var statearr_23865_23922 = state_23856__$1;
(statearr_23865_23922[(1)] = (29));

} else {
var statearr_23866_23923 = state_23856__$1;
(statearr_23866_23923[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (4))){
var inst_23774 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
if(cljs.core.truth_(inst_23774)){
var statearr_23867_23924 = state_23856__$1;
(statearr_23867_23924[(1)] = (8));

} else {
var statearr_23868_23925 = state_23856__$1;
(statearr_23868_23925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (15))){
var inst_23801 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
if(cljs.core.truth_(inst_23801)){
var statearr_23869_23926 = state_23856__$1;
(statearr_23869_23926[(1)] = (19));

} else {
var statearr_23870_23927 = state_23856__$1;
(statearr_23870_23927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (21))){
var inst_23806 = (state_23856[(12)]);
var inst_23806__$1 = (state_23856[(2)]);
var inst_23807 = cljs.core.get.call(null,inst_23806__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23808 = cljs.core.get.call(null,inst_23806__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23809 = cljs.core.get.call(null,inst_23806__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23856__$1 = (function (){var statearr_23871 = state_23856;
(statearr_23871[(12)] = inst_23806__$1);

(statearr_23871[(9)] = inst_23807);

(statearr_23871[(13)] = inst_23808);

return statearr_23871;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23856__$1,(22),inst_23809);
} else {
if((state_val_23857 === (31))){
var inst_23838 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
if(cljs.core.truth_(inst_23838)){
var statearr_23872_23928 = state_23856__$1;
(statearr_23872_23928[(1)] = (32));

} else {
var statearr_23873_23929 = state_23856__$1;
(statearr_23873_23929[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (32))){
var inst_23815 = (state_23856[(14)]);
var state_23856__$1 = state_23856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23856__$1,(35),out,inst_23815);
} else {
if((state_val_23857 === (33))){
var inst_23806 = (state_23856[(12)]);
var inst_23783 = inst_23806;
var state_23856__$1 = (function (){var statearr_23874 = state_23856;
(statearr_23874[(7)] = inst_23783);

return statearr_23874;
})();
var statearr_23875_23930 = state_23856__$1;
(statearr_23875_23930[(2)] = null);

(statearr_23875_23930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (13))){
var inst_23783 = (state_23856[(7)]);
var inst_23790 = inst_23783.cljs$lang$protocol_mask$partition0$;
var inst_23791 = (inst_23790 & (64));
var inst_23792 = inst_23783.cljs$core$ISeq$;
var inst_23793 = (cljs.core.PROTOCOL_SENTINEL === inst_23792);
var inst_23794 = ((inst_23791) || (inst_23793));
var state_23856__$1 = state_23856;
if(cljs.core.truth_(inst_23794)){
var statearr_23876_23931 = state_23856__$1;
(statearr_23876_23931[(1)] = (16));

} else {
var statearr_23877_23932 = state_23856__$1;
(statearr_23877_23932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (22))){
var inst_23815 = (state_23856[(14)]);
var inst_23816 = (state_23856[(11)]);
var inst_23814 = (state_23856[(2)]);
var inst_23815__$1 = cljs.core.nth.call(null,inst_23814,(0),null);
var inst_23816__$1 = cljs.core.nth.call(null,inst_23814,(1),null);
var inst_23817 = (inst_23815__$1 == null);
var inst_23818 = cljs.core._EQ_.call(null,inst_23816__$1,change);
var inst_23819 = ((inst_23817) || (inst_23818));
var state_23856__$1 = (function (){var statearr_23878 = state_23856;
(statearr_23878[(14)] = inst_23815__$1);

(statearr_23878[(11)] = inst_23816__$1);

return statearr_23878;
})();
if(cljs.core.truth_(inst_23819)){
var statearr_23879_23933 = state_23856__$1;
(statearr_23879_23933[(1)] = (23));

} else {
var statearr_23880_23934 = state_23856__$1;
(statearr_23880_23934[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (36))){
var inst_23806 = (state_23856[(12)]);
var inst_23783 = inst_23806;
var state_23856__$1 = (function (){var statearr_23881 = state_23856;
(statearr_23881[(7)] = inst_23783);

return statearr_23881;
})();
var statearr_23882_23935 = state_23856__$1;
(statearr_23882_23935[(2)] = null);

(statearr_23882_23935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (29))){
var inst_23830 = (state_23856[(10)]);
var state_23856__$1 = state_23856;
var statearr_23883_23936 = state_23856__$1;
(statearr_23883_23936[(2)] = inst_23830);

(statearr_23883_23936[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (6))){
var state_23856__$1 = state_23856;
var statearr_23884_23937 = state_23856__$1;
(statearr_23884_23937[(2)] = false);

(statearr_23884_23937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (28))){
var inst_23826 = (state_23856[(2)]);
var inst_23827 = calc_state.call(null);
var inst_23783 = inst_23827;
var state_23856__$1 = (function (){var statearr_23885 = state_23856;
(statearr_23885[(7)] = inst_23783);

(statearr_23885[(15)] = inst_23826);

return statearr_23885;
})();
var statearr_23886_23938 = state_23856__$1;
(statearr_23886_23938[(2)] = null);

(statearr_23886_23938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (25))){
var inst_23852 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23887_23939 = state_23856__$1;
(statearr_23887_23939[(2)] = inst_23852);

(statearr_23887_23939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (34))){
var inst_23850 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23888_23940 = state_23856__$1;
(statearr_23888_23940[(2)] = inst_23850);

(statearr_23888_23940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (17))){
var state_23856__$1 = state_23856;
var statearr_23889_23941 = state_23856__$1;
(statearr_23889_23941[(2)] = false);

(statearr_23889_23941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (3))){
var state_23856__$1 = state_23856;
var statearr_23890_23942 = state_23856__$1;
(statearr_23890_23942[(2)] = false);

(statearr_23890_23942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (12))){
var inst_23854 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23856__$1,inst_23854);
} else {
if((state_val_23857 === (2))){
var inst_23758 = (state_23856[(8)]);
var inst_23763 = inst_23758.cljs$lang$protocol_mask$partition0$;
var inst_23764 = (inst_23763 & (64));
var inst_23765 = inst_23758.cljs$core$ISeq$;
var inst_23766 = (cljs.core.PROTOCOL_SENTINEL === inst_23765);
var inst_23767 = ((inst_23764) || (inst_23766));
var state_23856__$1 = state_23856;
if(cljs.core.truth_(inst_23767)){
var statearr_23891_23943 = state_23856__$1;
(statearr_23891_23943[(1)] = (5));

} else {
var statearr_23892_23944 = state_23856__$1;
(statearr_23892_23944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (23))){
var inst_23815 = (state_23856[(14)]);
var inst_23821 = (inst_23815 == null);
var state_23856__$1 = state_23856;
if(cljs.core.truth_(inst_23821)){
var statearr_23893_23945 = state_23856__$1;
(statearr_23893_23945[(1)] = (26));

} else {
var statearr_23894_23946 = state_23856__$1;
(statearr_23894_23946[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (35))){
var inst_23841 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
if(cljs.core.truth_(inst_23841)){
var statearr_23895_23947 = state_23856__$1;
(statearr_23895_23947[(1)] = (36));

} else {
var statearr_23896_23948 = state_23856__$1;
(statearr_23896_23948[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (19))){
var inst_23783 = (state_23856[(7)]);
var inst_23803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23783);
var state_23856__$1 = state_23856;
var statearr_23897_23949 = state_23856__$1;
(statearr_23897_23949[(2)] = inst_23803);

(statearr_23897_23949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (11))){
var inst_23783 = (state_23856[(7)]);
var inst_23787 = (inst_23783 == null);
var inst_23788 = cljs.core.not.call(null,inst_23787);
var state_23856__$1 = state_23856;
if(inst_23788){
var statearr_23898_23950 = state_23856__$1;
(statearr_23898_23950[(1)] = (13));

} else {
var statearr_23899_23951 = state_23856__$1;
(statearr_23899_23951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (9))){
var inst_23758 = (state_23856[(8)]);
var state_23856__$1 = state_23856;
var statearr_23900_23952 = state_23856__$1;
(statearr_23900_23952[(2)] = inst_23758);

(statearr_23900_23952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (5))){
var state_23856__$1 = state_23856;
var statearr_23901_23953 = state_23856__$1;
(statearr_23901_23953[(2)] = true);

(statearr_23901_23953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (14))){
var state_23856__$1 = state_23856;
var statearr_23902_23954 = state_23856__$1;
(statearr_23902_23954[(2)] = false);

(statearr_23902_23954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (26))){
var inst_23816 = (state_23856[(11)]);
var inst_23823 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23816);
var state_23856__$1 = state_23856;
var statearr_23903_23955 = state_23856__$1;
(statearr_23903_23955[(2)] = inst_23823);

(statearr_23903_23955[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (16))){
var state_23856__$1 = state_23856;
var statearr_23904_23956 = state_23856__$1;
(statearr_23904_23956[(2)] = true);

(statearr_23904_23956[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (38))){
var inst_23846 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23905_23957 = state_23856__$1;
(statearr_23905_23957[(2)] = inst_23846);

(statearr_23905_23957[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (30))){
var inst_23807 = (state_23856[(9)]);
var inst_23808 = (state_23856[(13)]);
var inst_23816 = (state_23856[(11)]);
var inst_23833 = cljs.core.empty_QMARK_.call(null,inst_23807);
var inst_23834 = inst_23808.call(null,inst_23816);
var inst_23835 = cljs.core.not.call(null,inst_23834);
var inst_23836 = ((inst_23833) && (inst_23835));
var state_23856__$1 = state_23856;
var statearr_23906_23958 = state_23856__$1;
(statearr_23906_23958[(2)] = inst_23836);

(statearr_23906_23958[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (10))){
var inst_23758 = (state_23856[(8)]);
var inst_23779 = (state_23856[(2)]);
var inst_23780 = cljs.core.get.call(null,inst_23779,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23781 = cljs.core.get.call(null,inst_23779,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23782 = cljs.core.get.call(null,inst_23779,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23783 = inst_23758;
var state_23856__$1 = (function (){var statearr_23907 = state_23856;
(statearr_23907[(16)] = inst_23781);

(statearr_23907[(7)] = inst_23783);

(statearr_23907[(17)] = inst_23782);

(statearr_23907[(18)] = inst_23780);

return statearr_23907;
})();
var statearr_23908_23959 = state_23856__$1;
(statearr_23908_23959[(2)] = null);

(statearr_23908_23959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (18))){
var inst_23798 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23909_23960 = state_23856__$1;
(statearr_23909_23960[(2)] = inst_23798);

(statearr_23909_23960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (37))){
var state_23856__$1 = state_23856;
var statearr_23910_23961 = state_23856__$1;
(statearr_23910_23961[(2)] = null);

(statearr_23910_23961[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (8))){
var inst_23758 = (state_23856[(8)]);
var inst_23776 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23758);
var state_23856__$1 = state_23856;
var statearr_23911_23962 = state_23856__$1;
(statearr_23911_23962[(2)] = inst_23776);

(statearr_23911_23962[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__22754__auto__ = null;
var cljs$core$async$mix_$_state_machine__22754__auto____0 = (function (){
var statearr_23912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23912[(0)] = cljs$core$async$mix_$_state_machine__22754__auto__);

(statearr_23912[(1)] = (1));

return statearr_23912;
});
var cljs$core$async$mix_$_state_machine__22754__auto____1 = (function (state_23856){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_23856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e23913){if((e23913 instanceof Object)){
var ex__22757__auto__ = e23913;
var statearr_23914_23963 = state_23856;
(statearr_23914_23963[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23964 = state_23856;
state_23856 = G__23964;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22754__auto__ = function(state_23856){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22754__auto____1.call(this,state_23856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22754__auto____0;
cljs$core$async$mix_$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22754__auto____1;
return cljs$core$async$mix_$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_23915 = f__22849__auto__.call(null);
(statearr_23915[(6)] = c__22848__auto___23916);

return statearr_23915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_23967 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_23967.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_23968 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_23968.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_23969 = (function() {
var G__23970 = null;
var G__23970__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__23970__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__23970 = function(p,v){
switch(arguments.length){
case 1:
return G__23970__1.call(this,p);
case 2:
return G__23970__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23970.cljs$core$IFn$_invoke$arity$1 = G__23970__1;
G__23970.cljs$core$IFn$_invoke$arity$2 = G__23970__2;
return G__23970;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23966 = arguments.length;
switch (G__23966) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23969.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23969.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__23974 = arguments.length;
switch (G__23974) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__23972_SHARP_){
if(cljs.core.truth_(p1__23972_SHARP_.call(null,topic))){
return p1__23972_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23972_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23975 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23976){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23976 = meta23976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23977,meta23976__$1){
var self__ = this;
var _23977__$1 = this;
return (new cljs.core.async.t_cljs$core$async23975(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23976__$1));
}));

(cljs.core.async.t_cljs$core$async23975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23977){
var self__ = this;
var _23977__$1 = this;
return self__.meta23976;
}));

(cljs.core.async.t_cljs$core$async23975.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23975.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23975.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23975.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async23975.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async23975.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async23975.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async23975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23976","meta23976",1232376033,null)], null);
}));

(cljs.core.async.t_cljs$core$async23975.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23975");

(cljs.core.async.t_cljs$core$async23975.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async23975");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23975.
 */
cljs.core.async.__GT_t_cljs$core$async23975 = (function cljs$core$async$__GT_t_cljs$core$async23975(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23976){
return (new cljs.core.async.t_cljs$core$async23975(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23976));
});

}

return (new cljs.core.async.t_cljs$core$async23975(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22848__auto___24095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_24049){
var state_val_24050 = (state_24049[(1)]);
if((state_val_24050 === (7))){
var inst_24045 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
var statearr_24051_24096 = state_24049__$1;
(statearr_24051_24096[(2)] = inst_24045);

(statearr_24051_24096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (20))){
var state_24049__$1 = state_24049;
var statearr_24052_24097 = state_24049__$1;
(statearr_24052_24097[(2)] = null);

(statearr_24052_24097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (1))){
var state_24049__$1 = state_24049;
var statearr_24053_24098 = state_24049__$1;
(statearr_24053_24098[(2)] = null);

(statearr_24053_24098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (24))){
var inst_24028 = (state_24049[(7)]);
var inst_24037 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24028);
var state_24049__$1 = state_24049;
var statearr_24054_24099 = state_24049__$1;
(statearr_24054_24099[(2)] = inst_24037);

(statearr_24054_24099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (4))){
var inst_23980 = (state_24049[(8)]);
var inst_23980__$1 = (state_24049[(2)]);
var inst_23981 = (inst_23980__$1 == null);
var state_24049__$1 = (function (){var statearr_24055 = state_24049;
(statearr_24055[(8)] = inst_23980__$1);

return statearr_24055;
})();
if(cljs.core.truth_(inst_23981)){
var statearr_24056_24100 = state_24049__$1;
(statearr_24056_24100[(1)] = (5));

} else {
var statearr_24057_24101 = state_24049__$1;
(statearr_24057_24101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (15))){
var inst_24022 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
var statearr_24058_24102 = state_24049__$1;
(statearr_24058_24102[(2)] = inst_24022);

(statearr_24058_24102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (21))){
var inst_24042 = (state_24049[(2)]);
var state_24049__$1 = (function (){var statearr_24059 = state_24049;
(statearr_24059[(9)] = inst_24042);

return statearr_24059;
})();
var statearr_24060_24103 = state_24049__$1;
(statearr_24060_24103[(2)] = null);

(statearr_24060_24103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (13))){
var inst_24004 = (state_24049[(10)]);
var inst_24006 = cljs.core.chunked_seq_QMARK_.call(null,inst_24004);
var state_24049__$1 = state_24049;
if(inst_24006){
var statearr_24061_24104 = state_24049__$1;
(statearr_24061_24104[(1)] = (16));

} else {
var statearr_24062_24105 = state_24049__$1;
(statearr_24062_24105[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (22))){
var inst_24034 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
if(cljs.core.truth_(inst_24034)){
var statearr_24063_24106 = state_24049__$1;
(statearr_24063_24106[(1)] = (23));

} else {
var statearr_24064_24107 = state_24049__$1;
(statearr_24064_24107[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (6))){
var inst_24028 = (state_24049[(7)]);
var inst_23980 = (state_24049[(8)]);
var inst_24030 = (state_24049[(11)]);
var inst_24028__$1 = topic_fn.call(null,inst_23980);
var inst_24029 = cljs.core.deref.call(null,mults);
var inst_24030__$1 = cljs.core.get.call(null,inst_24029,inst_24028__$1);
var state_24049__$1 = (function (){var statearr_24065 = state_24049;
(statearr_24065[(7)] = inst_24028__$1);

(statearr_24065[(11)] = inst_24030__$1);

return statearr_24065;
})();
if(cljs.core.truth_(inst_24030__$1)){
var statearr_24066_24108 = state_24049__$1;
(statearr_24066_24108[(1)] = (19));

} else {
var statearr_24067_24109 = state_24049__$1;
(statearr_24067_24109[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (25))){
var inst_24039 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
var statearr_24068_24110 = state_24049__$1;
(statearr_24068_24110[(2)] = inst_24039);

(statearr_24068_24110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (17))){
var inst_24004 = (state_24049[(10)]);
var inst_24013 = cljs.core.first.call(null,inst_24004);
var inst_24014 = cljs.core.async.muxch_STAR_.call(null,inst_24013);
var inst_24015 = cljs.core.async.close_BANG_.call(null,inst_24014);
var inst_24016 = cljs.core.next.call(null,inst_24004);
var inst_23990 = inst_24016;
var inst_23991 = null;
var inst_23992 = (0);
var inst_23993 = (0);
var state_24049__$1 = (function (){var statearr_24069 = state_24049;
(statearr_24069[(12)] = inst_23990);

(statearr_24069[(13)] = inst_23991);

(statearr_24069[(14)] = inst_23992);

(statearr_24069[(15)] = inst_23993);

(statearr_24069[(16)] = inst_24015);

return statearr_24069;
})();
var statearr_24070_24111 = state_24049__$1;
(statearr_24070_24111[(2)] = null);

(statearr_24070_24111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (3))){
var inst_24047 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24049__$1,inst_24047);
} else {
if((state_val_24050 === (12))){
var inst_24024 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
var statearr_24071_24112 = state_24049__$1;
(statearr_24071_24112[(2)] = inst_24024);

(statearr_24071_24112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (2))){
var state_24049__$1 = state_24049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24049__$1,(4),ch);
} else {
if((state_val_24050 === (23))){
var state_24049__$1 = state_24049;
var statearr_24072_24113 = state_24049__$1;
(statearr_24072_24113[(2)] = null);

(statearr_24072_24113[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (19))){
var inst_23980 = (state_24049[(8)]);
var inst_24030 = (state_24049[(11)]);
var inst_24032 = cljs.core.async.muxch_STAR_.call(null,inst_24030);
var state_24049__$1 = state_24049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24049__$1,(22),inst_24032,inst_23980);
} else {
if((state_val_24050 === (11))){
var inst_23990 = (state_24049[(12)]);
var inst_24004 = (state_24049[(10)]);
var inst_24004__$1 = cljs.core.seq.call(null,inst_23990);
var state_24049__$1 = (function (){var statearr_24073 = state_24049;
(statearr_24073[(10)] = inst_24004__$1);

return statearr_24073;
})();
if(inst_24004__$1){
var statearr_24074_24114 = state_24049__$1;
(statearr_24074_24114[(1)] = (13));

} else {
var statearr_24075_24115 = state_24049__$1;
(statearr_24075_24115[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (9))){
var inst_24026 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
var statearr_24076_24116 = state_24049__$1;
(statearr_24076_24116[(2)] = inst_24026);

(statearr_24076_24116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (5))){
var inst_23987 = cljs.core.deref.call(null,mults);
var inst_23988 = cljs.core.vals.call(null,inst_23987);
var inst_23989 = cljs.core.seq.call(null,inst_23988);
var inst_23990 = inst_23989;
var inst_23991 = null;
var inst_23992 = (0);
var inst_23993 = (0);
var state_24049__$1 = (function (){var statearr_24077 = state_24049;
(statearr_24077[(12)] = inst_23990);

(statearr_24077[(13)] = inst_23991);

(statearr_24077[(14)] = inst_23992);

(statearr_24077[(15)] = inst_23993);

return statearr_24077;
})();
var statearr_24078_24117 = state_24049__$1;
(statearr_24078_24117[(2)] = null);

(statearr_24078_24117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (14))){
var state_24049__$1 = state_24049;
var statearr_24082_24118 = state_24049__$1;
(statearr_24082_24118[(2)] = null);

(statearr_24082_24118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (16))){
var inst_24004 = (state_24049[(10)]);
var inst_24008 = cljs.core.chunk_first.call(null,inst_24004);
var inst_24009 = cljs.core.chunk_rest.call(null,inst_24004);
var inst_24010 = cljs.core.count.call(null,inst_24008);
var inst_23990 = inst_24009;
var inst_23991 = inst_24008;
var inst_23992 = inst_24010;
var inst_23993 = (0);
var state_24049__$1 = (function (){var statearr_24083 = state_24049;
(statearr_24083[(12)] = inst_23990);

(statearr_24083[(13)] = inst_23991);

(statearr_24083[(14)] = inst_23992);

(statearr_24083[(15)] = inst_23993);

return statearr_24083;
})();
var statearr_24084_24119 = state_24049__$1;
(statearr_24084_24119[(2)] = null);

(statearr_24084_24119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (10))){
var inst_23990 = (state_24049[(12)]);
var inst_23991 = (state_24049[(13)]);
var inst_23992 = (state_24049[(14)]);
var inst_23993 = (state_24049[(15)]);
var inst_23998 = cljs.core._nth.call(null,inst_23991,inst_23993);
var inst_23999 = cljs.core.async.muxch_STAR_.call(null,inst_23998);
var inst_24000 = cljs.core.async.close_BANG_.call(null,inst_23999);
var inst_24001 = (inst_23993 + (1));
var tmp24079 = inst_23990;
var tmp24080 = inst_23991;
var tmp24081 = inst_23992;
var inst_23990__$1 = tmp24079;
var inst_23991__$1 = tmp24080;
var inst_23992__$1 = tmp24081;
var inst_23993__$1 = inst_24001;
var state_24049__$1 = (function (){var statearr_24085 = state_24049;
(statearr_24085[(12)] = inst_23990__$1);

(statearr_24085[(17)] = inst_24000);

(statearr_24085[(13)] = inst_23991__$1);

(statearr_24085[(14)] = inst_23992__$1);

(statearr_24085[(15)] = inst_23993__$1);

return statearr_24085;
})();
var statearr_24086_24120 = state_24049__$1;
(statearr_24086_24120[(2)] = null);

(statearr_24086_24120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (18))){
var inst_24019 = (state_24049[(2)]);
var state_24049__$1 = state_24049;
var statearr_24087_24121 = state_24049__$1;
(statearr_24087_24121[(2)] = inst_24019);

(statearr_24087_24121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24050 === (8))){
var inst_23992 = (state_24049[(14)]);
var inst_23993 = (state_24049[(15)]);
var inst_23995 = (inst_23993 < inst_23992);
var inst_23996 = inst_23995;
var state_24049__$1 = state_24049;
if(cljs.core.truth_(inst_23996)){
var statearr_24088_24122 = state_24049__$1;
(statearr_24088_24122[(1)] = (10));

} else {
var statearr_24089_24123 = state_24049__$1;
(statearr_24089_24123[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__22754__auto__ = null;
var cljs$core$async$state_machine__22754__auto____0 = (function (){
var statearr_24090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24090[(0)] = cljs$core$async$state_machine__22754__auto__);

(statearr_24090[(1)] = (1));

return statearr_24090;
});
var cljs$core$async$state_machine__22754__auto____1 = (function (state_24049){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_24049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e24091){if((e24091 instanceof Object)){
var ex__22757__auto__ = e24091;
var statearr_24092_24124 = state_24049;
(statearr_24092_24124[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24125 = state_24049;
state_24049 = G__24125;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$state_machine__22754__auto__ = function(state_24049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22754__auto____1.call(this,state_24049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22754__auto____0;
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22754__auto____1;
return cljs$core$async$state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_24093 = f__22849__auto__.call(null);
(statearr_24093[(6)] = c__22848__auto___24095);

return statearr_24093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24127 = arguments.length;
switch (G__24127) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24130 = arguments.length;
switch (G__24130) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24133 = arguments.length;
switch (G__24133) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__22848__auto___24200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_24172){
var state_val_24173 = (state_24172[(1)]);
if((state_val_24173 === (7))){
var state_24172__$1 = state_24172;
var statearr_24174_24201 = state_24172__$1;
(statearr_24174_24201[(2)] = null);

(statearr_24174_24201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (1))){
var state_24172__$1 = state_24172;
var statearr_24175_24202 = state_24172__$1;
(statearr_24175_24202[(2)] = null);

(statearr_24175_24202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (4))){
var inst_24136 = (state_24172[(7)]);
var inst_24138 = (inst_24136 < cnt);
var state_24172__$1 = state_24172;
if(cljs.core.truth_(inst_24138)){
var statearr_24176_24203 = state_24172__$1;
(statearr_24176_24203[(1)] = (6));

} else {
var statearr_24177_24204 = state_24172__$1;
(statearr_24177_24204[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (15))){
var inst_24168 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24178_24205 = state_24172__$1;
(statearr_24178_24205[(2)] = inst_24168);

(statearr_24178_24205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (13))){
var inst_24161 = cljs.core.async.close_BANG_.call(null,out);
var state_24172__$1 = state_24172;
var statearr_24179_24206 = state_24172__$1;
(statearr_24179_24206[(2)] = inst_24161);

(statearr_24179_24206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (6))){
var state_24172__$1 = state_24172;
var statearr_24180_24207 = state_24172__$1;
(statearr_24180_24207[(2)] = null);

(statearr_24180_24207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (3))){
var inst_24170 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24172__$1,inst_24170);
} else {
if((state_val_24173 === (12))){
var inst_24158 = (state_24172[(8)]);
var inst_24158__$1 = (state_24172[(2)]);
var inst_24159 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24158__$1);
var state_24172__$1 = (function (){var statearr_24181 = state_24172;
(statearr_24181[(8)] = inst_24158__$1);

return statearr_24181;
})();
if(cljs.core.truth_(inst_24159)){
var statearr_24182_24208 = state_24172__$1;
(statearr_24182_24208[(1)] = (13));

} else {
var statearr_24183_24209 = state_24172__$1;
(statearr_24183_24209[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (2))){
var inst_24135 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24136 = (0);
var state_24172__$1 = (function (){var statearr_24184 = state_24172;
(statearr_24184[(9)] = inst_24135);

(statearr_24184[(7)] = inst_24136);

return statearr_24184;
})();
var statearr_24185_24210 = state_24172__$1;
(statearr_24185_24210[(2)] = null);

(statearr_24185_24210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (11))){
var inst_24136 = (state_24172[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24172,(10),Object,null,(9));
var inst_24145 = chs__$1.call(null,inst_24136);
var inst_24146 = done.call(null,inst_24136);
var inst_24147 = cljs.core.async.take_BANG_.call(null,inst_24145,inst_24146);
var state_24172__$1 = state_24172;
var statearr_24186_24211 = state_24172__$1;
(statearr_24186_24211[(2)] = inst_24147);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (9))){
var inst_24136 = (state_24172[(7)]);
var inst_24149 = (state_24172[(2)]);
var inst_24150 = (inst_24136 + (1));
var inst_24136__$1 = inst_24150;
var state_24172__$1 = (function (){var statearr_24187 = state_24172;
(statearr_24187[(10)] = inst_24149);

(statearr_24187[(7)] = inst_24136__$1);

return statearr_24187;
})();
var statearr_24188_24212 = state_24172__$1;
(statearr_24188_24212[(2)] = null);

(statearr_24188_24212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (5))){
var inst_24156 = (state_24172[(2)]);
var state_24172__$1 = (function (){var statearr_24189 = state_24172;
(statearr_24189[(11)] = inst_24156);

return statearr_24189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24172__$1,(12),dchan);
} else {
if((state_val_24173 === (14))){
var inst_24158 = (state_24172[(8)]);
var inst_24163 = cljs.core.apply.call(null,f,inst_24158);
var state_24172__$1 = state_24172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24172__$1,(16),out,inst_24163);
} else {
if((state_val_24173 === (16))){
var inst_24165 = (state_24172[(2)]);
var state_24172__$1 = (function (){var statearr_24190 = state_24172;
(statearr_24190[(12)] = inst_24165);

return statearr_24190;
})();
var statearr_24191_24213 = state_24172__$1;
(statearr_24191_24213[(2)] = null);

(statearr_24191_24213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (10))){
var inst_24140 = (state_24172[(2)]);
var inst_24141 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24172__$1 = (function (){var statearr_24192 = state_24172;
(statearr_24192[(13)] = inst_24140);

return statearr_24192;
})();
var statearr_24193_24214 = state_24172__$1;
(statearr_24193_24214[(2)] = inst_24141);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24173 === (8))){
var inst_24154 = (state_24172[(2)]);
var state_24172__$1 = state_24172;
var statearr_24194_24215 = state_24172__$1;
(statearr_24194_24215[(2)] = inst_24154);

(statearr_24194_24215[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__22754__auto__ = null;
var cljs$core$async$state_machine__22754__auto____0 = (function (){
var statearr_24195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24195[(0)] = cljs$core$async$state_machine__22754__auto__);

(statearr_24195[(1)] = (1));

return statearr_24195;
});
var cljs$core$async$state_machine__22754__auto____1 = (function (state_24172){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_24172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e24196){if((e24196 instanceof Object)){
var ex__22757__auto__ = e24196;
var statearr_24197_24216 = state_24172;
(statearr_24197_24216[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24217 = state_24172;
state_24172 = G__24217;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$state_machine__22754__auto__ = function(state_24172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22754__auto____1.call(this,state_24172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22754__auto____0;
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22754__auto____1;
return cljs$core$async$state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_24198 = f__22849__auto__.call(null);
(statearr_24198[(6)] = c__22848__auto___24200);

return statearr_24198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24220 = arguments.length;
switch (G__24220) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22848__auto___24274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_24252){
var state_val_24253 = (state_24252[(1)]);
if((state_val_24253 === (7))){
var inst_24232 = (state_24252[(7)]);
var inst_24231 = (state_24252[(8)]);
var inst_24231__$1 = (state_24252[(2)]);
var inst_24232__$1 = cljs.core.nth.call(null,inst_24231__$1,(0),null);
var inst_24233 = cljs.core.nth.call(null,inst_24231__$1,(1),null);
var inst_24234 = (inst_24232__$1 == null);
var state_24252__$1 = (function (){var statearr_24254 = state_24252;
(statearr_24254[(7)] = inst_24232__$1);

(statearr_24254[(9)] = inst_24233);

(statearr_24254[(8)] = inst_24231__$1);

return statearr_24254;
})();
if(cljs.core.truth_(inst_24234)){
var statearr_24255_24275 = state_24252__$1;
(statearr_24255_24275[(1)] = (8));

} else {
var statearr_24256_24276 = state_24252__$1;
(statearr_24256_24276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (1))){
var inst_24221 = cljs.core.vec.call(null,chs);
var inst_24222 = inst_24221;
var state_24252__$1 = (function (){var statearr_24257 = state_24252;
(statearr_24257[(10)] = inst_24222);

return statearr_24257;
})();
var statearr_24258_24277 = state_24252__$1;
(statearr_24258_24277[(2)] = null);

(statearr_24258_24277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (4))){
var inst_24222 = (state_24252[(10)]);
var state_24252__$1 = state_24252;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24252__$1,(7),inst_24222);
} else {
if((state_val_24253 === (6))){
var inst_24248 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24259_24278 = state_24252__$1;
(statearr_24259_24278[(2)] = inst_24248);

(statearr_24259_24278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (3))){
var inst_24250 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24252__$1,inst_24250);
} else {
if((state_val_24253 === (2))){
var inst_24222 = (state_24252[(10)]);
var inst_24224 = cljs.core.count.call(null,inst_24222);
var inst_24225 = (inst_24224 > (0));
var state_24252__$1 = state_24252;
if(cljs.core.truth_(inst_24225)){
var statearr_24261_24279 = state_24252__$1;
(statearr_24261_24279[(1)] = (4));

} else {
var statearr_24262_24280 = state_24252__$1;
(statearr_24262_24280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (11))){
var inst_24222 = (state_24252[(10)]);
var inst_24241 = (state_24252[(2)]);
var tmp24260 = inst_24222;
var inst_24222__$1 = tmp24260;
var state_24252__$1 = (function (){var statearr_24263 = state_24252;
(statearr_24263[(11)] = inst_24241);

(statearr_24263[(10)] = inst_24222__$1);

return statearr_24263;
})();
var statearr_24264_24281 = state_24252__$1;
(statearr_24264_24281[(2)] = null);

(statearr_24264_24281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (9))){
var inst_24232 = (state_24252[(7)]);
var state_24252__$1 = state_24252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24252__$1,(11),out,inst_24232);
} else {
if((state_val_24253 === (5))){
var inst_24246 = cljs.core.async.close_BANG_.call(null,out);
var state_24252__$1 = state_24252;
var statearr_24265_24282 = state_24252__$1;
(statearr_24265_24282[(2)] = inst_24246);

(statearr_24265_24282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (10))){
var inst_24244 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24266_24283 = state_24252__$1;
(statearr_24266_24283[(2)] = inst_24244);

(statearr_24266_24283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (8))){
var inst_24232 = (state_24252[(7)]);
var inst_24233 = (state_24252[(9)]);
var inst_24222 = (state_24252[(10)]);
var inst_24231 = (state_24252[(8)]);
var inst_24236 = (function (){var cs = inst_24222;
var vec__24227 = inst_24231;
var v = inst_24232;
var c = inst_24233;
return (function (p1__24218_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24218_SHARP_);
});
})();
var inst_24237 = cljs.core.filterv.call(null,inst_24236,inst_24222);
var inst_24222__$1 = inst_24237;
var state_24252__$1 = (function (){var statearr_24267 = state_24252;
(statearr_24267[(10)] = inst_24222__$1);

return statearr_24267;
})();
var statearr_24268_24284 = state_24252__$1;
(statearr_24268_24284[(2)] = null);

(statearr_24268_24284[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__22754__auto__ = null;
var cljs$core$async$state_machine__22754__auto____0 = (function (){
var statearr_24269 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24269[(0)] = cljs$core$async$state_machine__22754__auto__);

(statearr_24269[(1)] = (1));

return statearr_24269;
});
var cljs$core$async$state_machine__22754__auto____1 = (function (state_24252){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_24252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e24270){if((e24270 instanceof Object)){
var ex__22757__auto__ = e24270;
var statearr_24271_24285 = state_24252;
(statearr_24271_24285[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24286 = state_24252;
state_24252 = G__24286;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$state_machine__22754__auto__ = function(state_24252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22754__auto____1.call(this,state_24252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22754__auto____0;
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22754__auto____1;
return cljs$core$async$state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_24272 = f__22849__auto__.call(null);
(statearr_24272[(6)] = c__22848__auto___24274);

return statearr_24272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24288 = arguments.length;
switch (G__24288) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22848__auto___24333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_24312){
var state_val_24313 = (state_24312[(1)]);
if((state_val_24313 === (7))){
var inst_24294 = (state_24312[(7)]);
var inst_24294__$1 = (state_24312[(2)]);
var inst_24295 = (inst_24294__$1 == null);
var inst_24296 = cljs.core.not.call(null,inst_24295);
var state_24312__$1 = (function (){var statearr_24314 = state_24312;
(statearr_24314[(7)] = inst_24294__$1);

return statearr_24314;
})();
if(inst_24296){
var statearr_24315_24334 = state_24312__$1;
(statearr_24315_24334[(1)] = (8));

} else {
var statearr_24316_24335 = state_24312__$1;
(statearr_24316_24335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (1))){
var inst_24289 = (0);
var state_24312__$1 = (function (){var statearr_24317 = state_24312;
(statearr_24317[(8)] = inst_24289);

return statearr_24317;
})();
var statearr_24318_24336 = state_24312__$1;
(statearr_24318_24336[(2)] = null);

(statearr_24318_24336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (4))){
var state_24312__$1 = state_24312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24312__$1,(7),ch);
} else {
if((state_val_24313 === (6))){
var inst_24307 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24319_24337 = state_24312__$1;
(statearr_24319_24337[(2)] = inst_24307);

(statearr_24319_24337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (3))){
var inst_24309 = (state_24312[(2)]);
var inst_24310 = cljs.core.async.close_BANG_.call(null,out);
var state_24312__$1 = (function (){var statearr_24320 = state_24312;
(statearr_24320[(9)] = inst_24309);

return statearr_24320;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24312__$1,inst_24310);
} else {
if((state_val_24313 === (2))){
var inst_24289 = (state_24312[(8)]);
var inst_24291 = (inst_24289 < n);
var state_24312__$1 = state_24312;
if(cljs.core.truth_(inst_24291)){
var statearr_24321_24338 = state_24312__$1;
(statearr_24321_24338[(1)] = (4));

} else {
var statearr_24322_24339 = state_24312__$1;
(statearr_24322_24339[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (11))){
var inst_24289 = (state_24312[(8)]);
var inst_24299 = (state_24312[(2)]);
var inst_24300 = (inst_24289 + (1));
var inst_24289__$1 = inst_24300;
var state_24312__$1 = (function (){var statearr_24323 = state_24312;
(statearr_24323[(8)] = inst_24289__$1);

(statearr_24323[(10)] = inst_24299);

return statearr_24323;
})();
var statearr_24324_24340 = state_24312__$1;
(statearr_24324_24340[(2)] = null);

(statearr_24324_24340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (9))){
var state_24312__$1 = state_24312;
var statearr_24325_24341 = state_24312__$1;
(statearr_24325_24341[(2)] = null);

(statearr_24325_24341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (5))){
var state_24312__$1 = state_24312;
var statearr_24326_24342 = state_24312__$1;
(statearr_24326_24342[(2)] = null);

(statearr_24326_24342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (10))){
var inst_24304 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24327_24343 = state_24312__$1;
(statearr_24327_24343[(2)] = inst_24304);

(statearr_24327_24343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (8))){
var inst_24294 = (state_24312[(7)]);
var state_24312__$1 = state_24312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24312__$1,(11),out,inst_24294);
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
});
return (function() {
var cljs$core$async$state_machine__22754__auto__ = null;
var cljs$core$async$state_machine__22754__auto____0 = (function (){
var statearr_24328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24328[(0)] = cljs$core$async$state_machine__22754__auto__);

(statearr_24328[(1)] = (1));

return statearr_24328;
});
var cljs$core$async$state_machine__22754__auto____1 = (function (state_24312){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_24312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e24329){if((e24329 instanceof Object)){
var ex__22757__auto__ = e24329;
var statearr_24330_24344 = state_24312;
(statearr_24330_24344[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24345 = state_24312;
state_24312 = G__24345;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$state_machine__22754__auto__ = function(state_24312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22754__auto____1.call(this,state_24312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22754__auto____0;
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22754__auto____1;
return cljs$core$async$state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_24331 = f__22849__auto__.call(null);
(statearr_24331[(6)] = c__22848__auto___24333);

return statearr_24331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24347 = (function (f,ch,meta24348){
this.f = f;
this.ch = ch;
this.meta24348 = meta24348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24349,meta24348__$1){
var self__ = this;
var _24349__$1 = this;
return (new cljs.core.async.t_cljs$core$async24347(self__.f,self__.ch,meta24348__$1));
}));

(cljs.core.async.t_cljs$core$async24347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24349){
var self__ = this;
var _24349__$1 = this;
return self__.meta24348;
}));

(cljs.core.async.t_cljs$core$async24347.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24347.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24347.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24350 = (function (f,ch,meta24348,_,fn1,meta24351){
this.f = f;
this.ch = ch;
this.meta24348 = meta24348;
this._ = _;
this.fn1 = fn1;
this.meta24351 = meta24351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24352,meta24351__$1){
var self__ = this;
var _24352__$1 = this;
return (new cljs.core.async.t_cljs$core$async24350(self__.f,self__.ch,self__.meta24348,self__._,self__.fn1,meta24351__$1));
}));

(cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24352){
var self__ = this;
var _24352__$1 = this;
return self__.meta24351;
}));

(cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__24346_SHARP_){
return f1.call(null,(((p1__24346_SHARP_ == null))?null:self__.f.call(null,p1__24346_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async24350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24348","meta24348",-1890164551,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24347","cljs.core.async/t_cljs$core$async24347",920760060,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24351","meta24351",1542069447,null)], null);
}));

(cljs.core.async.t_cljs$core$async24350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24350");

(cljs.core.async.t_cljs$core$async24350.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24350.
 */
cljs.core.async.__GT_t_cljs$core$async24350 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24350(f__$1,ch__$1,meta24348__$1,___$2,fn1__$1,meta24351){
return (new cljs.core.async.t_cljs$core$async24350(f__$1,ch__$1,meta24348__$1,___$2,fn1__$1,meta24351));
});

}

return (new cljs.core.async.t_cljs$core$async24350(self__.f,self__.ch,self__.meta24348,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async24347.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async24347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24348","meta24348",-1890164551,null)], null);
}));

(cljs.core.async.t_cljs$core$async24347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24347");

(cljs.core.async.t_cljs$core$async24347.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24347.
 */
cljs.core.async.__GT_t_cljs$core$async24347 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24347(f__$1,ch__$1,meta24348){
return (new cljs.core.async.t_cljs$core$async24347(f__$1,ch__$1,meta24348));
});

}

return (new cljs.core.async.t_cljs$core$async24347(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24353 = (function (f,ch,meta24354){
this.f = f;
this.ch = ch;
this.meta24354 = meta24354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24355,meta24354__$1){
var self__ = this;
var _24355__$1 = this;
return (new cljs.core.async.t_cljs$core$async24353(self__.f,self__.ch,meta24354__$1));
}));

(cljs.core.async.t_cljs$core$async24353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24355){
var self__ = this;
var _24355__$1 = this;
return self__.meta24354;
}));

(cljs.core.async.t_cljs$core$async24353.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24353.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24353.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24353.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24353.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24353.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async24353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24354","meta24354",-1010726284,null)], null);
}));

(cljs.core.async.t_cljs$core$async24353.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24353");

(cljs.core.async.t_cljs$core$async24353.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24353");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24353.
 */
cljs.core.async.__GT_t_cljs$core$async24353 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24353(f__$1,ch__$1,meta24354){
return (new cljs.core.async.t_cljs$core$async24353(f__$1,ch__$1,meta24354));
});

}

return (new cljs.core.async.t_cljs$core$async24353(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24356 = (function (p,ch,meta24357){
this.p = p;
this.ch = ch;
this.meta24357 = meta24357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24358,meta24357__$1){
var self__ = this;
var _24358__$1 = this;
return (new cljs.core.async.t_cljs$core$async24356(self__.p,self__.ch,meta24357__$1));
}));

(cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24358){
var self__ = this;
var _24358__$1 = this;
return self__.meta24357;
}));

(cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async24356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24357","meta24357",-863697096,null)], null);
}));

(cljs.core.async.t_cljs$core$async24356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24356");

(cljs.core.async.t_cljs$core$async24356.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async24356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24356.
 */
cljs.core.async.__GT_t_cljs$core$async24356 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24356(p__$1,ch__$1,meta24357){
return (new cljs.core.async.t_cljs$core$async24356(p__$1,ch__$1,meta24357));
});

}

return (new cljs.core.async.t_cljs$core$async24356(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24360 = arguments.length;
switch (G__24360) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22848__auto___24400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_24381){
var state_val_24382 = (state_24381[(1)]);
if((state_val_24382 === (7))){
var inst_24377 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
var statearr_24383_24401 = state_24381__$1;
(statearr_24383_24401[(2)] = inst_24377);

(statearr_24383_24401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (1))){
var state_24381__$1 = state_24381;
var statearr_24384_24402 = state_24381__$1;
(statearr_24384_24402[(2)] = null);

(statearr_24384_24402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (4))){
var inst_24363 = (state_24381[(7)]);
var inst_24363__$1 = (state_24381[(2)]);
var inst_24364 = (inst_24363__$1 == null);
var state_24381__$1 = (function (){var statearr_24385 = state_24381;
(statearr_24385[(7)] = inst_24363__$1);

return statearr_24385;
})();
if(cljs.core.truth_(inst_24364)){
var statearr_24386_24403 = state_24381__$1;
(statearr_24386_24403[(1)] = (5));

} else {
var statearr_24387_24404 = state_24381__$1;
(statearr_24387_24404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (6))){
var inst_24363 = (state_24381[(7)]);
var inst_24368 = p.call(null,inst_24363);
var state_24381__$1 = state_24381;
if(cljs.core.truth_(inst_24368)){
var statearr_24388_24405 = state_24381__$1;
(statearr_24388_24405[(1)] = (8));

} else {
var statearr_24389_24406 = state_24381__$1;
(statearr_24389_24406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (3))){
var inst_24379 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24381__$1,inst_24379);
} else {
if((state_val_24382 === (2))){
var state_24381__$1 = state_24381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24381__$1,(4),ch);
} else {
if((state_val_24382 === (11))){
var inst_24371 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
var statearr_24390_24407 = state_24381__$1;
(statearr_24390_24407[(2)] = inst_24371);

(statearr_24390_24407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (9))){
var state_24381__$1 = state_24381;
var statearr_24391_24408 = state_24381__$1;
(statearr_24391_24408[(2)] = null);

(statearr_24391_24408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (5))){
var inst_24366 = cljs.core.async.close_BANG_.call(null,out);
var state_24381__$1 = state_24381;
var statearr_24392_24409 = state_24381__$1;
(statearr_24392_24409[(2)] = inst_24366);

(statearr_24392_24409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (10))){
var inst_24374 = (state_24381[(2)]);
var state_24381__$1 = (function (){var statearr_24393 = state_24381;
(statearr_24393[(8)] = inst_24374);

return statearr_24393;
})();
var statearr_24394_24410 = state_24381__$1;
(statearr_24394_24410[(2)] = null);

(statearr_24394_24410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (8))){
var inst_24363 = (state_24381[(7)]);
var state_24381__$1 = state_24381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24381__$1,(11),out,inst_24363);
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
});
return (function() {
var cljs$core$async$state_machine__22754__auto__ = null;
var cljs$core$async$state_machine__22754__auto____0 = (function (){
var statearr_24395 = [null,null,null,null,null,null,null,null,null];
(statearr_24395[(0)] = cljs$core$async$state_machine__22754__auto__);

(statearr_24395[(1)] = (1));

return statearr_24395;
});
var cljs$core$async$state_machine__22754__auto____1 = (function (state_24381){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_24381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e24396){if((e24396 instanceof Object)){
var ex__22757__auto__ = e24396;
var statearr_24397_24411 = state_24381;
(statearr_24397_24411[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24412 = state_24381;
state_24381 = G__24412;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$state_machine__22754__auto__ = function(state_24381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22754__auto____1.call(this,state_24381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22754__auto____0;
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22754__auto____1;
return cljs$core$async$state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_24398 = f__22849__auto__.call(null);
(statearr_24398[(6)] = c__22848__auto___24400);

return statearr_24398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24414 = arguments.length;
switch (G__24414) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22848__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_24477){
var state_val_24478 = (state_24477[(1)]);
if((state_val_24478 === (7))){
var inst_24473 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24479_24517 = state_24477__$1;
(statearr_24479_24517[(2)] = inst_24473);

(statearr_24479_24517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (20))){
var inst_24443 = (state_24477[(7)]);
var inst_24454 = (state_24477[(2)]);
var inst_24455 = cljs.core.next.call(null,inst_24443);
var inst_24429 = inst_24455;
var inst_24430 = null;
var inst_24431 = (0);
var inst_24432 = (0);
var state_24477__$1 = (function (){var statearr_24480 = state_24477;
(statearr_24480[(8)] = inst_24432);

(statearr_24480[(9)] = inst_24454);

(statearr_24480[(10)] = inst_24431);

(statearr_24480[(11)] = inst_24429);

(statearr_24480[(12)] = inst_24430);

return statearr_24480;
})();
var statearr_24481_24518 = state_24477__$1;
(statearr_24481_24518[(2)] = null);

(statearr_24481_24518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (1))){
var state_24477__$1 = state_24477;
var statearr_24482_24519 = state_24477__$1;
(statearr_24482_24519[(2)] = null);

(statearr_24482_24519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (4))){
var inst_24418 = (state_24477[(13)]);
var inst_24418__$1 = (state_24477[(2)]);
var inst_24419 = (inst_24418__$1 == null);
var state_24477__$1 = (function (){var statearr_24483 = state_24477;
(statearr_24483[(13)] = inst_24418__$1);

return statearr_24483;
})();
if(cljs.core.truth_(inst_24419)){
var statearr_24484_24520 = state_24477__$1;
(statearr_24484_24520[(1)] = (5));

} else {
var statearr_24485_24521 = state_24477__$1;
(statearr_24485_24521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (15))){
var state_24477__$1 = state_24477;
var statearr_24489_24522 = state_24477__$1;
(statearr_24489_24522[(2)] = null);

(statearr_24489_24522[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (21))){
var state_24477__$1 = state_24477;
var statearr_24490_24523 = state_24477__$1;
(statearr_24490_24523[(2)] = null);

(statearr_24490_24523[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (13))){
var inst_24432 = (state_24477[(8)]);
var inst_24431 = (state_24477[(10)]);
var inst_24429 = (state_24477[(11)]);
var inst_24430 = (state_24477[(12)]);
var inst_24439 = (state_24477[(2)]);
var inst_24440 = (inst_24432 + (1));
var tmp24486 = inst_24431;
var tmp24487 = inst_24429;
var tmp24488 = inst_24430;
var inst_24429__$1 = tmp24487;
var inst_24430__$1 = tmp24488;
var inst_24431__$1 = tmp24486;
var inst_24432__$1 = inst_24440;
var state_24477__$1 = (function (){var statearr_24491 = state_24477;
(statearr_24491[(14)] = inst_24439);

(statearr_24491[(8)] = inst_24432__$1);

(statearr_24491[(10)] = inst_24431__$1);

(statearr_24491[(11)] = inst_24429__$1);

(statearr_24491[(12)] = inst_24430__$1);

return statearr_24491;
})();
var statearr_24492_24524 = state_24477__$1;
(statearr_24492_24524[(2)] = null);

(statearr_24492_24524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (22))){
var state_24477__$1 = state_24477;
var statearr_24493_24525 = state_24477__$1;
(statearr_24493_24525[(2)] = null);

(statearr_24493_24525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (6))){
var inst_24418 = (state_24477[(13)]);
var inst_24427 = f.call(null,inst_24418);
var inst_24428 = cljs.core.seq.call(null,inst_24427);
var inst_24429 = inst_24428;
var inst_24430 = null;
var inst_24431 = (0);
var inst_24432 = (0);
var state_24477__$1 = (function (){var statearr_24494 = state_24477;
(statearr_24494[(8)] = inst_24432);

(statearr_24494[(10)] = inst_24431);

(statearr_24494[(11)] = inst_24429);

(statearr_24494[(12)] = inst_24430);

return statearr_24494;
})();
var statearr_24495_24526 = state_24477__$1;
(statearr_24495_24526[(2)] = null);

(statearr_24495_24526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (17))){
var inst_24443 = (state_24477[(7)]);
var inst_24447 = cljs.core.chunk_first.call(null,inst_24443);
var inst_24448 = cljs.core.chunk_rest.call(null,inst_24443);
var inst_24449 = cljs.core.count.call(null,inst_24447);
var inst_24429 = inst_24448;
var inst_24430 = inst_24447;
var inst_24431 = inst_24449;
var inst_24432 = (0);
var state_24477__$1 = (function (){var statearr_24496 = state_24477;
(statearr_24496[(8)] = inst_24432);

(statearr_24496[(10)] = inst_24431);

(statearr_24496[(11)] = inst_24429);

(statearr_24496[(12)] = inst_24430);

return statearr_24496;
})();
var statearr_24497_24527 = state_24477__$1;
(statearr_24497_24527[(2)] = null);

(statearr_24497_24527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (3))){
var inst_24475 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24477__$1,inst_24475);
} else {
if((state_val_24478 === (12))){
var inst_24463 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24498_24528 = state_24477__$1;
(statearr_24498_24528[(2)] = inst_24463);

(statearr_24498_24528[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (2))){
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24477__$1,(4),in$);
} else {
if((state_val_24478 === (23))){
var inst_24471 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24499_24529 = state_24477__$1;
(statearr_24499_24529[(2)] = inst_24471);

(statearr_24499_24529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (19))){
var inst_24458 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24500_24530 = state_24477__$1;
(statearr_24500_24530[(2)] = inst_24458);

(statearr_24500_24530[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (11))){
var inst_24443 = (state_24477[(7)]);
var inst_24429 = (state_24477[(11)]);
var inst_24443__$1 = cljs.core.seq.call(null,inst_24429);
var state_24477__$1 = (function (){var statearr_24501 = state_24477;
(statearr_24501[(7)] = inst_24443__$1);

return statearr_24501;
})();
if(inst_24443__$1){
var statearr_24502_24531 = state_24477__$1;
(statearr_24502_24531[(1)] = (14));

} else {
var statearr_24503_24532 = state_24477__$1;
(statearr_24503_24532[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (9))){
var inst_24465 = (state_24477[(2)]);
var inst_24466 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24477__$1 = (function (){var statearr_24504 = state_24477;
(statearr_24504[(15)] = inst_24465);

return statearr_24504;
})();
if(cljs.core.truth_(inst_24466)){
var statearr_24505_24533 = state_24477__$1;
(statearr_24505_24533[(1)] = (21));

} else {
var statearr_24506_24534 = state_24477__$1;
(statearr_24506_24534[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (5))){
var inst_24421 = cljs.core.async.close_BANG_.call(null,out);
var state_24477__$1 = state_24477;
var statearr_24507_24535 = state_24477__$1;
(statearr_24507_24535[(2)] = inst_24421);

(statearr_24507_24535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (14))){
var inst_24443 = (state_24477[(7)]);
var inst_24445 = cljs.core.chunked_seq_QMARK_.call(null,inst_24443);
var state_24477__$1 = state_24477;
if(inst_24445){
var statearr_24508_24536 = state_24477__$1;
(statearr_24508_24536[(1)] = (17));

} else {
var statearr_24509_24537 = state_24477__$1;
(statearr_24509_24537[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (16))){
var inst_24461 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24510_24538 = state_24477__$1;
(statearr_24510_24538[(2)] = inst_24461);

(statearr_24510_24538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (10))){
var inst_24432 = (state_24477[(8)]);
var inst_24430 = (state_24477[(12)]);
var inst_24437 = cljs.core._nth.call(null,inst_24430,inst_24432);
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24477__$1,(13),out,inst_24437);
} else {
if((state_val_24478 === (18))){
var inst_24443 = (state_24477[(7)]);
var inst_24452 = cljs.core.first.call(null,inst_24443);
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24477__$1,(20),out,inst_24452);
} else {
if((state_val_24478 === (8))){
var inst_24432 = (state_24477[(8)]);
var inst_24431 = (state_24477[(10)]);
var inst_24434 = (inst_24432 < inst_24431);
var inst_24435 = inst_24434;
var state_24477__$1 = state_24477;
if(cljs.core.truth_(inst_24435)){
var statearr_24511_24539 = state_24477__$1;
(statearr_24511_24539[(1)] = (10));

} else {
var statearr_24512_24540 = state_24477__$1;
(statearr_24512_24540[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22754__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22754__auto____0 = (function (){
var statearr_24513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24513[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22754__auto__);

(statearr_24513[(1)] = (1));

return statearr_24513;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22754__auto____1 = (function (state_24477){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_24477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e24514){if((e24514 instanceof Object)){
var ex__22757__auto__ = e24514;
var statearr_24515_24541 = state_24477;
(statearr_24515_24541[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24542 = state_24477;
state_24477 = G__24542;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22754__auto__ = function(state_24477){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22754__auto____1.call(this,state_24477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22754__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22754__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_24516 = f__22849__auto__.call(null);
(statearr_24516[(6)] = c__22848__auto__);

return statearr_24516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));

return c__22848__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24544 = arguments.length;
switch (G__24544) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24547 = arguments.length;
switch (G__24547) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24550 = arguments.length;
switch (G__24550) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22848__auto___24597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_24574){
var state_val_24575 = (state_24574[(1)]);
if((state_val_24575 === (7))){
var inst_24569 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24576_24598 = state_24574__$1;
(statearr_24576_24598[(2)] = inst_24569);

(statearr_24576_24598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (1))){
var inst_24551 = null;
var state_24574__$1 = (function (){var statearr_24577 = state_24574;
(statearr_24577[(7)] = inst_24551);

return statearr_24577;
})();
var statearr_24578_24599 = state_24574__$1;
(statearr_24578_24599[(2)] = null);

(statearr_24578_24599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (4))){
var inst_24554 = (state_24574[(8)]);
var inst_24554__$1 = (state_24574[(2)]);
var inst_24555 = (inst_24554__$1 == null);
var inst_24556 = cljs.core.not.call(null,inst_24555);
var state_24574__$1 = (function (){var statearr_24579 = state_24574;
(statearr_24579[(8)] = inst_24554__$1);

return statearr_24579;
})();
if(inst_24556){
var statearr_24580_24600 = state_24574__$1;
(statearr_24580_24600[(1)] = (5));

} else {
var statearr_24581_24601 = state_24574__$1;
(statearr_24581_24601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (6))){
var state_24574__$1 = state_24574;
var statearr_24582_24602 = state_24574__$1;
(statearr_24582_24602[(2)] = null);

(statearr_24582_24602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (3))){
var inst_24571 = (state_24574[(2)]);
var inst_24572 = cljs.core.async.close_BANG_.call(null,out);
var state_24574__$1 = (function (){var statearr_24583 = state_24574;
(statearr_24583[(9)] = inst_24571);

return statearr_24583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24574__$1,inst_24572);
} else {
if((state_val_24575 === (2))){
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(4),ch);
} else {
if((state_val_24575 === (11))){
var inst_24554 = (state_24574[(8)]);
var inst_24563 = (state_24574[(2)]);
var inst_24551 = inst_24554;
var state_24574__$1 = (function (){var statearr_24584 = state_24574;
(statearr_24584[(7)] = inst_24551);

(statearr_24584[(10)] = inst_24563);

return statearr_24584;
})();
var statearr_24585_24603 = state_24574__$1;
(statearr_24585_24603[(2)] = null);

(statearr_24585_24603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (9))){
var inst_24554 = (state_24574[(8)]);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24574__$1,(11),out,inst_24554);
} else {
if((state_val_24575 === (5))){
var inst_24551 = (state_24574[(7)]);
var inst_24554 = (state_24574[(8)]);
var inst_24558 = cljs.core._EQ_.call(null,inst_24554,inst_24551);
var state_24574__$1 = state_24574;
if(inst_24558){
var statearr_24587_24604 = state_24574__$1;
(statearr_24587_24604[(1)] = (8));

} else {
var statearr_24588_24605 = state_24574__$1;
(statearr_24588_24605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (10))){
var inst_24566 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24589_24606 = state_24574__$1;
(statearr_24589_24606[(2)] = inst_24566);

(statearr_24589_24606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (8))){
var inst_24551 = (state_24574[(7)]);
var tmp24586 = inst_24551;
var inst_24551__$1 = tmp24586;
var state_24574__$1 = (function (){var statearr_24590 = state_24574;
(statearr_24590[(7)] = inst_24551__$1);

return statearr_24590;
})();
var statearr_24591_24607 = state_24574__$1;
(statearr_24591_24607[(2)] = null);

(statearr_24591_24607[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__22754__auto__ = null;
var cljs$core$async$state_machine__22754__auto____0 = (function (){
var statearr_24592 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24592[(0)] = cljs$core$async$state_machine__22754__auto__);

(statearr_24592[(1)] = (1));

return statearr_24592;
});
var cljs$core$async$state_machine__22754__auto____1 = (function (state_24574){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_24574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e24593){if((e24593 instanceof Object)){
var ex__22757__auto__ = e24593;
var statearr_24594_24608 = state_24574;
(statearr_24594_24608[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24609 = state_24574;
state_24574 = G__24609;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$state_machine__22754__auto__ = function(state_24574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22754__auto____1.call(this,state_24574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22754__auto____0;
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22754__auto____1;
return cljs$core$async$state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_24595 = f__22849__auto__.call(null);
(statearr_24595[(6)] = c__22848__auto___24597);

return statearr_24595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24611 = arguments.length;
switch (G__24611) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22848__auto___24677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_24649){
var state_val_24650 = (state_24649[(1)]);
if((state_val_24650 === (7))){
var inst_24645 = (state_24649[(2)]);
var state_24649__$1 = state_24649;
var statearr_24651_24678 = state_24649__$1;
(statearr_24651_24678[(2)] = inst_24645);

(statearr_24651_24678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24650 === (1))){
var inst_24612 = (new Array(n));
var inst_24613 = inst_24612;
var inst_24614 = (0);
var state_24649__$1 = (function (){var statearr_24652 = state_24649;
(statearr_24652[(7)] = inst_24613);

(statearr_24652[(8)] = inst_24614);

return statearr_24652;
})();
var statearr_24653_24679 = state_24649__$1;
(statearr_24653_24679[(2)] = null);

(statearr_24653_24679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24650 === (4))){
var inst_24617 = (state_24649[(9)]);
var inst_24617__$1 = (state_24649[(2)]);
var inst_24618 = (inst_24617__$1 == null);
var inst_24619 = cljs.core.not.call(null,inst_24618);
var state_24649__$1 = (function (){var statearr_24654 = state_24649;
(statearr_24654[(9)] = inst_24617__$1);

return statearr_24654;
})();
if(inst_24619){
var statearr_24655_24680 = state_24649__$1;
(statearr_24655_24680[(1)] = (5));

} else {
var statearr_24656_24681 = state_24649__$1;
(statearr_24656_24681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24650 === (15))){
var inst_24639 = (state_24649[(2)]);
var state_24649__$1 = state_24649;
var statearr_24657_24682 = state_24649__$1;
(statearr_24657_24682[(2)] = inst_24639);

(statearr_24657_24682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24650 === (13))){
var state_24649__$1 = state_24649;
var statearr_24658_24683 = state_24649__$1;
(statearr_24658_24683[(2)] = null);

(statearr_24658_24683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24650 === (6))){
var inst_24614 = (state_24649[(8)]);
var inst_24635 = (inst_24614 > (0));
var state_24649__$1 = state_24649;
if(cljs.core.truth_(inst_24635)){
var statearr_24659_24684 = state_24649__$1;
(statearr_24659_24684[(1)] = (12));

} else {
var statearr_24660_24685 = state_24649__$1;
(statearr_24660_24685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24650 === (3))){
var inst_24647 = (state_24649[(2)]);
var state_24649__$1 = state_24649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24649__$1,inst_24647);
} else {
if((state_val_24650 === (12))){
var inst_24613 = (state_24649[(7)]);
var inst_24637 = cljs.core.vec.call(null,inst_24613);
var state_24649__$1 = state_24649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24649__$1,(15),out,inst_24637);
} else {
if((state_val_24650 === (2))){
var state_24649__$1 = state_24649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24649__$1,(4),ch);
} else {
if((state_val_24650 === (11))){
var inst_24629 = (state_24649[(2)]);
var inst_24630 = (new Array(n));
var inst_24613 = inst_24630;
var inst_24614 = (0);
var state_24649__$1 = (function (){var statearr_24661 = state_24649;
(statearr_24661[(7)] = inst_24613);

(statearr_24661[(8)] = inst_24614);

(statearr_24661[(10)] = inst_24629);

return statearr_24661;
})();
var statearr_24662_24686 = state_24649__$1;
(statearr_24662_24686[(2)] = null);

(statearr_24662_24686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24650 === (9))){
var inst_24613 = (state_24649[(7)]);
var inst_24627 = cljs.core.vec.call(null,inst_24613);
var state_24649__$1 = state_24649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24649__$1,(11),out,inst_24627);
} else {
if((state_val_24650 === (5))){
var inst_24613 = (state_24649[(7)]);
var inst_24617 = (state_24649[(9)]);
var inst_24614 = (state_24649[(8)]);
var inst_24622 = (state_24649[(11)]);
var inst_24621 = (inst_24613[inst_24614] = inst_24617);
var inst_24622__$1 = (inst_24614 + (1));
var inst_24623 = (inst_24622__$1 < n);
var state_24649__$1 = (function (){var statearr_24663 = state_24649;
(statearr_24663[(12)] = inst_24621);

(statearr_24663[(11)] = inst_24622__$1);

return statearr_24663;
})();
if(cljs.core.truth_(inst_24623)){
var statearr_24664_24687 = state_24649__$1;
(statearr_24664_24687[(1)] = (8));

} else {
var statearr_24665_24688 = state_24649__$1;
(statearr_24665_24688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24650 === (14))){
var inst_24642 = (state_24649[(2)]);
var inst_24643 = cljs.core.async.close_BANG_.call(null,out);
var state_24649__$1 = (function (){var statearr_24667 = state_24649;
(statearr_24667[(13)] = inst_24642);

return statearr_24667;
})();
var statearr_24668_24689 = state_24649__$1;
(statearr_24668_24689[(2)] = inst_24643);

(statearr_24668_24689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24650 === (10))){
var inst_24633 = (state_24649[(2)]);
var state_24649__$1 = state_24649;
var statearr_24669_24690 = state_24649__$1;
(statearr_24669_24690[(2)] = inst_24633);

(statearr_24669_24690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24650 === (8))){
var inst_24613 = (state_24649[(7)]);
var inst_24622 = (state_24649[(11)]);
var tmp24666 = inst_24613;
var inst_24613__$1 = tmp24666;
var inst_24614 = inst_24622;
var state_24649__$1 = (function (){var statearr_24670 = state_24649;
(statearr_24670[(7)] = inst_24613__$1);

(statearr_24670[(8)] = inst_24614);

return statearr_24670;
})();
var statearr_24671_24691 = state_24649__$1;
(statearr_24671_24691[(2)] = null);

(statearr_24671_24691[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__22754__auto__ = null;
var cljs$core$async$state_machine__22754__auto____0 = (function (){
var statearr_24672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24672[(0)] = cljs$core$async$state_machine__22754__auto__);

(statearr_24672[(1)] = (1));

return statearr_24672;
});
var cljs$core$async$state_machine__22754__auto____1 = (function (state_24649){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_24649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e24673){if((e24673 instanceof Object)){
var ex__22757__auto__ = e24673;
var statearr_24674_24692 = state_24649;
(statearr_24674_24692[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24693 = state_24649;
state_24649 = G__24693;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$state_machine__22754__auto__ = function(state_24649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22754__auto____1.call(this,state_24649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22754__auto____0;
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22754__auto____1;
return cljs$core$async$state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_24675 = f__22849__auto__.call(null);
(statearr_24675[(6)] = c__22848__auto___24677);

return statearr_24675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24695 = arguments.length;
switch (G__24695) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22848__auto___24765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22849__auto__ = (function (){var switch__22753__auto__ = (function (state_24737){
var state_val_24738 = (state_24737[(1)]);
if((state_val_24738 === (7))){
var inst_24733 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
var statearr_24739_24766 = state_24737__$1;
(statearr_24739_24766[(2)] = inst_24733);

(statearr_24739_24766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (1))){
var inst_24696 = [];
var inst_24697 = inst_24696;
var inst_24698 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24737__$1 = (function (){var statearr_24740 = state_24737;
(statearr_24740[(7)] = inst_24698);

(statearr_24740[(8)] = inst_24697);

return statearr_24740;
})();
var statearr_24741_24767 = state_24737__$1;
(statearr_24741_24767[(2)] = null);

(statearr_24741_24767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (4))){
var inst_24701 = (state_24737[(9)]);
var inst_24701__$1 = (state_24737[(2)]);
var inst_24702 = (inst_24701__$1 == null);
var inst_24703 = cljs.core.not.call(null,inst_24702);
var state_24737__$1 = (function (){var statearr_24742 = state_24737;
(statearr_24742[(9)] = inst_24701__$1);

return statearr_24742;
})();
if(inst_24703){
var statearr_24743_24768 = state_24737__$1;
(statearr_24743_24768[(1)] = (5));

} else {
var statearr_24744_24769 = state_24737__$1;
(statearr_24744_24769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (15))){
var inst_24727 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
var statearr_24745_24770 = state_24737__$1;
(statearr_24745_24770[(2)] = inst_24727);

(statearr_24745_24770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (13))){
var state_24737__$1 = state_24737;
var statearr_24746_24771 = state_24737__$1;
(statearr_24746_24771[(2)] = null);

(statearr_24746_24771[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (6))){
var inst_24697 = (state_24737[(8)]);
var inst_24722 = inst_24697.length;
var inst_24723 = (inst_24722 > (0));
var state_24737__$1 = state_24737;
if(cljs.core.truth_(inst_24723)){
var statearr_24747_24772 = state_24737__$1;
(statearr_24747_24772[(1)] = (12));

} else {
var statearr_24748_24773 = state_24737__$1;
(statearr_24748_24773[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (3))){
var inst_24735 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24737__$1,inst_24735);
} else {
if((state_val_24738 === (12))){
var inst_24697 = (state_24737[(8)]);
var inst_24725 = cljs.core.vec.call(null,inst_24697);
var state_24737__$1 = state_24737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24737__$1,(15),out,inst_24725);
} else {
if((state_val_24738 === (2))){
var state_24737__$1 = state_24737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24737__$1,(4),ch);
} else {
if((state_val_24738 === (11))){
var inst_24705 = (state_24737[(10)]);
var inst_24701 = (state_24737[(9)]);
var inst_24715 = (state_24737[(2)]);
var inst_24716 = [];
var inst_24717 = inst_24716.push(inst_24701);
var inst_24697 = inst_24716;
var inst_24698 = inst_24705;
var state_24737__$1 = (function (){var statearr_24749 = state_24737;
(statearr_24749[(7)] = inst_24698);

(statearr_24749[(11)] = inst_24715);

(statearr_24749[(12)] = inst_24717);

(statearr_24749[(8)] = inst_24697);

return statearr_24749;
})();
var statearr_24750_24774 = state_24737__$1;
(statearr_24750_24774[(2)] = null);

(statearr_24750_24774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (9))){
var inst_24697 = (state_24737[(8)]);
var inst_24713 = cljs.core.vec.call(null,inst_24697);
var state_24737__$1 = state_24737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24737__$1,(11),out,inst_24713);
} else {
if((state_val_24738 === (5))){
var inst_24698 = (state_24737[(7)]);
var inst_24705 = (state_24737[(10)]);
var inst_24701 = (state_24737[(9)]);
var inst_24705__$1 = f.call(null,inst_24701);
var inst_24706 = cljs.core._EQ_.call(null,inst_24705__$1,inst_24698);
var inst_24707 = cljs.core.keyword_identical_QMARK_.call(null,inst_24698,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24708 = ((inst_24706) || (inst_24707));
var state_24737__$1 = (function (){var statearr_24751 = state_24737;
(statearr_24751[(10)] = inst_24705__$1);

return statearr_24751;
})();
if(cljs.core.truth_(inst_24708)){
var statearr_24752_24775 = state_24737__$1;
(statearr_24752_24775[(1)] = (8));

} else {
var statearr_24753_24776 = state_24737__$1;
(statearr_24753_24776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (14))){
var inst_24730 = (state_24737[(2)]);
var inst_24731 = cljs.core.async.close_BANG_.call(null,out);
var state_24737__$1 = (function (){var statearr_24755 = state_24737;
(statearr_24755[(13)] = inst_24730);

return statearr_24755;
})();
var statearr_24756_24777 = state_24737__$1;
(statearr_24756_24777[(2)] = inst_24731);

(statearr_24756_24777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (10))){
var inst_24720 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
var statearr_24757_24778 = state_24737__$1;
(statearr_24757_24778[(2)] = inst_24720);

(statearr_24757_24778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (8))){
var inst_24705 = (state_24737[(10)]);
var inst_24701 = (state_24737[(9)]);
var inst_24697 = (state_24737[(8)]);
var inst_24710 = inst_24697.push(inst_24701);
var tmp24754 = inst_24697;
var inst_24697__$1 = tmp24754;
var inst_24698 = inst_24705;
var state_24737__$1 = (function (){var statearr_24758 = state_24737;
(statearr_24758[(7)] = inst_24698);

(statearr_24758[(14)] = inst_24710);

(statearr_24758[(8)] = inst_24697__$1);

return statearr_24758;
})();
var statearr_24759_24779 = state_24737__$1;
(statearr_24759_24779[(2)] = null);

(statearr_24759_24779[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__22754__auto__ = null;
var cljs$core$async$state_machine__22754__auto____0 = (function (){
var statearr_24760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24760[(0)] = cljs$core$async$state_machine__22754__auto__);

(statearr_24760[(1)] = (1));

return statearr_24760;
});
var cljs$core$async$state_machine__22754__auto____1 = (function (state_24737){
while(true){
var ret_value__22755__auto__ = (function (){try{while(true){
var result__22756__auto__ = switch__22753__auto__.call(null,state_24737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22756__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22756__auto__;
}
break;
}
}catch (e24761){if((e24761 instanceof Object)){
var ex__22757__auto__ = e24761;
var statearr_24762_24780 = state_24737;
(statearr_24762_24780[(5)] = ex__22757__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24781 = state_24737;
state_24737 = G__24781;
continue;
} else {
return ret_value__22755__auto__;
}
break;
}
});
cljs$core$async$state_machine__22754__auto__ = function(state_24737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22754__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22754__auto____1.call(this,state_24737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22754__auto____0;
cljs$core$async$state_machine__22754__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22754__auto____1;
return cljs$core$async$state_machine__22754__auto__;
})()
})();
var state__22850__auto__ = (function (){var statearr_24763 = f__22849__auto__.call(null);
(statearr_24763[(6)] = c__22848__auto___24765);

return statearr_24763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22850__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1608397896496
