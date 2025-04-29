// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"4m8RJ":[function(require,module,exports,__globalThis) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "668310ba708118db";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "655c6fb457dca4d2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"btV7f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _client = require("react-dom/client");
var _mainView = require("./components/MainView/MainView");
var _indexScss = require("./index.scss");
var _container = require("react-bootstrap/Container");
var _containerDefault = parcelHelpers.interopDefault(_container);
// Main component (will eventually use all the others)
const MyFlixApplication = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _containerDefault.default), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _mainView.MainView), {}, void 0, false, {
            fileName: "src/index.jsx",
            lineNumber: 10,
            columnNumber: 13
        }, undefined)
    }, void 0, false, {
        fileName: "src/index.jsx",
        lineNumber: 9,
        columnNumber: 9
    }, undefined);
};
// Finds the root of your app
const container = document.querySelector("#root");
const root = (0, _client.createRoot)(container);
// Tells React to render your app in the root DOM element
root.render(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(MyFlixApplication, {}, void 0, false, {
    fileName: "src/index.jsx",
    lineNumber: 20,
    columnNumber: 13
}, undefined));

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-dom/client":"react-dom/client","./components/MainView/MainView":"1Q54c","./index.scss":"hlAnh","react-bootstrap/Container":"react-bootstrap/Container","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"1Q54c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainView", ()=>MainView);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _movieCard = require("../MovieCard/MovieCard");
var _movieView = require("../MovieView/MovieView");
var _loginView = require("../LoginView/LoginView");
var _signupView = require("../SignupView/SignupView");
var _profileView = require("../UsersProfileView/ProfileView");
var _navbarView = require("../NavbarView/NavbarView");
var _reactBootstrap = require("react-bootstrap");
//import { BrowserRouter,Route, Routes, Navigate } from "react-router-dom";
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const MainView = ({ onBackClick, onClick, onShowProfile, onShowFavorites, onLoggedIn, onLogout, onHide, onMovieClick })=>{
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = (0, _react.useState)(storedUser ? storedUser : null);
    const [token, setToken] = (0, _react.useState)(storedToken ? storedToken : null);
    const [movies, setMovies] = (0, _react.useState)([]);
    const [selectedMovie, setSelectedMovie] = (0, _react.useState)(null);
    // const [favoriteMovies, setFavoriteMovies] = useState([]);
    // const [favoriteMovieIds, setFavoriteMovieIds] = useState([]);
    // const [showSignup, setShowSignup] = useState(false);
    const [showProfile, setShowProfile] = (0, _react.useState)(()=>{
        return JSON.parse(localStorage.getItem("showProfile")) || false;
    });
    const [showFavorites, setShowFavorites] = (0, _react.useState)(()=>{
        return JSON.parse(localStorage.getItem("showFavorites")) || false;
    });
    // let similarMoviesByGenre = [];
    // let similarMoviesByDirector = [];
    (0, _react.useEffect)(()=>{
        console.log(user, token);
        if (!user || !token) return;
        fetch("https://gb-movies-api-cab43a70da98.herokuapp.com/movies", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>response.json()).then((movies)=>{
            setMovies(movies);
            const moviesFromApi = movies.map((doc)=>{
                return {
                    id: doc._id,
                    title: doc.Title,
                    releaseYear: doc.ReleaseYear,
                    setting: doc.Setting,
                    description: doc.Description,
                    genre: {
                        name: doc.Genre.Name,
                        description: doc.Genre.Description
                    },
                    director: {
                        name: doc.Director.Name,
                        bio: doc.Director.Bio,
                        dateOfBirth: doc.Director.DateOfBirth,
                        deathYear: doc.Director.DeathYear
                    },
                    //actors: [],
                    featured: doc.Featured,
                    image: doc.ImageURL
                };
            });
            console.log(moviesFromApi);
            setMovies(moviesFromApi);
        }).catch((error)=>{
            console.error("Error loading movies:", error);
        });
    }, [
        user,
        token
    ]);
    if (selectedMovie) {
        similarMoviesByGenre = movies.filter((movie)=>movie.genre.name === selectedMovie.genre.name && movie.id !== selectedMovie.id);
        similarMoviesByDirector = movies.filter((movie)=>movie.director.name === selectedMovie.director.name && movie.id !== selectedMovie.id);
    }
    const isFavorite = selectedMovie && user?.FavoriteMovies?.includes(selectedMovie.id);
    const toggleFavorite = (MovieId)=>{
        if (!user || !token) return;
        const isFav = user.FavoriteMovies.includes(MovieId);
        const method = isFav ? "POST" : "PUT";
        fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}/movies/${MovieId}`, {
            method: method,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((res)=>{
            if (!res.ok) throw new Error("Failed to update favorites");
            return res.json();
        }).then((updatedUser)=>{
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
        }).catch((error)=>console.error("Toggle favorite error:", error));
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Container), {
        children: [
            user && (selectedMovie || movies.length > 0) && //  NVBAR
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _navbarView.NavbarView), {
                onSearch: ()=>{},
                onLogout: ()=>{
                    setUser(null);
                    setToken(null);
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                },
                onShowProfile: ()=>{
                    setShowProfile(true);
                    localStorage.setItem("showProfile", true);
                },
                // onShowFavorites={() => {
                //   setShowFavorites(true);
                //   localStorage.setItem("showFavorites", true);
                // }}
                onBackClick: ()=>{
                    setShowProfile(false);
                    setSelectedMovie(null);
                    localStorage.setItem("showProfile", false);
                }
            }, void 0, false, {
                fileName: "src/components/MainView/MainView.jsx",
                lineNumber: 122,
                columnNumber: 9
            }, undefined),
            !user ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                    md: 5,
                    className: "mb-1 p-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _loginView.LoginView), {
                                onLoggedIn: (user, token)=>{
                                    setUser(user);
                                    setToken(token);
                                    localStorage.setItem("user", JSON.stringify(user));
                                    localStorage.setItem("token", token);
                                }
                            }, void 0, false, {
                                fileName: "src/components/MainView/MainView.jsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/MainView/MainView.jsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _signupView.SignupView), {}, void 0, false, {
                                fileName: "src/components/MainView/MainView.jsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/MainView/MainView.jsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/MainView/MainView.jsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/MainView/MainView.jsx",
                lineNumber: 149,
                columnNumber: 9
            }, undefined) : showProfile ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _profileView.ProfileView), {
                        user: user,
                        movies: movies,
                        onClick: (updatedUser)=>{
                            setUser(updatedUser);
                            localStorage.setItem("user", JSON.stringify(updatedUser));
                        }
                    }, void 0, false, {
                        fileName: "src/components/MainView/MainView.jsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/MainView/MainView.jsx",
                    lineNumber: 180,
                    columnNumber: 13
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/MainView/MainView.jsx",
                lineNumber: 179,
                columnNumber: 11
            }, undefined) : selectedMovie ? // MovieView MODAL bzw. SELECTED MOVIE
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _movieView.MovieView), {
                show: !!selectedMovie,
                movie: selectedMovie,
                movies: movies,
                isFavorite: isFavorite,
                toggleFavorite: toggleFavorite,
                onHide: ()=>setSelectedMovie(null),
                onBackClick: ()=>setSelectedMovie(null),
                onMovieClick: (movie)=>setSelectedMovie(movie),
                similarMoviesByDirector: similarMoviesByDirector,
                similarMoviesByGenre: similarMoviesByGenre
            }, void 0, false, {
                fileName: "src/components/MainView/MainView.jsx",
                lineNumber: 193,
                columnNumber: 13
            }, undefined) : movies.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: "The list is empty!"
            }, void 0, false, {
                fileName: "src/components/MainView/MainView.jsx",
                lineNumber: 207,
                columnNumber: 9
            }, undefined) : // MOVIE CARDS IN MAIN VIEW bzw LIST OF MOVIES
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                className: "g-4",
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                mb: 3,
                children: movies.map((movie)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                        xs: 12,
                        sm: 6,
                        md: 4,
                        lg: 3,
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _movieCard.MovieCard), {
                            movie: movie,
                            onMovieClick: ()=>setSelectedMovie(movie)
                        }, void 0, false, {
                            fileName: "src/components/MainView/MainView.jsx",
                            lineNumber: 213,
                            columnNumber: 15
                        }, undefined)
                    }, movie.id, false, {
                        fileName: "src/components/MainView/MainView.jsx",
                        lineNumber: 212,
                        columnNumber: 13
                    }, undefined))
            }, void 0, false, {
                fileName: "src/components/MainView/MainView.jsx",
                lineNumber: 210,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/MainView/MainView.jsx",
        lineNumber: 119,
        columnNumber: 5
    }, undefined);
};
MainView.propTypes = {
    // movie: PropTypes.shape({
    //   title: PropTypes.string.isRequired,
    //   releaseYear: PropTypes.string.isRequired,
    //   setting: PropTypes.string,
    //   description: PropTypes.string.isRequired,
    //   genre: PropTypes.shape({
    //     name: PropTypes.string.isRequired,
    //     description: PropTypes.string.isRequired,
    //   }),
    //   director: PropTypes.shape({
    //     name: PropTypes.string.isRequired,
    //     bio: PropTypes.string.isRequired,
    //     dateOfBirth: PropTypes.string.isRequired,
    //     deathYear: PropTypes.string,
    //   }),
    //   image: PropTypes.string.isRequired,
    //   featured: PropTypes.bool.isRequired,
    // }).isRequired,
    onBackClick: (0, _propTypesDefault.default).func.isRequired,
    onClick: (0, _propTypesDefault.default).func.isRequired,
    onHide: (0, _propTypesDefault.default).func.isRequired,
    onShowProfile: (0, _propTypesDefault.default).func.isRequired,
    onLoggedIn: (0, _propTypesDefault.default).func.isRequired,
    onLoggedOut: (0, _propTypesDefault.default).func.isRequired
};

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","../MovieCard/MovieCard":"9RkbZ","../MovieView/MovieView":"8ukly","../LoginView/LoginView":"fTRNK","../SignupView/SignupView":"1ojTG","../UsersProfileView/ProfileView":"aunKW","../NavbarView/NavbarView":"fzYNF","react-bootstrap":"react-bootstrap","prop-types":"prop-types","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"9RkbZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MovieCard", ()=>MovieCard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _reactBootstrap = require("react-bootstrap");
//import  { Link } from "react-router-dom";
var _movieCardScss = require("./MovieCard.scss");
const MovieCard = ({ movie, onMovieClick })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "MovieCard",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card), {
            className: "h-100",
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Body, {
                className: "d-flex flex-column justify-content-between",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Img, {
                        variant: "top",
                        src: movie.image,
                        style: {
                            height: "70%",
                            objectFit: "cover"
                        }
                    }, void 0, false, {
                        fileName: "src/components/MovieCard/MovieCard.jsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Title, {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                            children: [
                                " ",
                                movie.title,
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "src/components/MovieCard/MovieCard.jsx",
                            lineNumber: 12,
                            columnNumber: 47
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/MovieCard/MovieCard.jsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                        onClick: ()=>onMovieClick(movie),
                        className: "btn btn-primary",
                        type: "button",
                        children: " Open "
                    }, void 0, false, {
                        fileName: "src/components/MovieCard/MovieCard.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/MovieCard/MovieCard.jsx",
                lineNumber: 10,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "src/components/MovieCard/MovieCard.jsx",
            lineNumber: 9,
            columnNumber: 8
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/MovieCard/MovieCard.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, undefined);
};
MovieCard.propTypes = {
    movie: (0, _propTypesDefault.default).shape({
        title: (0, _propTypesDefault.default).string.isRequired,
        releaseYear: (0, _propTypesDefault.default).string,
        setting: (0, _propTypesDefault.default).string,
        description: (0, _propTypesDefault.default).string,
        genre: (0, _propTypesDefault.default).shape({
            name: (0, _propTypesDefault.default).string,
            description: (0, _propTypesDefault.default).string
        }),
        director: (0, _propTypesDefault.default).shape({
            name: (0, _propTypesDefault.default).string,
            bio: (0, _propTypesDefault.default).string,
            dateOfBirth: (0, _propTypesDefault.default).string,
            deathYear: (0, _propTypesDefault.default).string
        }),
        image: (0, _propTypesDefault.default).string.isRequired,
        featured: (0, _propTypesDefault.default).bool
    }).isRequired,
    onMovieClick: (0, _propTypesDefault.default).func.isRequired
};

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","prop-types":"prop-types","react-bootstrap":"react-bootstrap","./MovieCard.scss":"iemp6","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"iemp6":[function() {},{}],"3IjXM":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8ukly":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MovieView", ()=>MovieView);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _reactBootstrap = require("react-bootstrap");
var _fa = require("react-icons/fa");
var _similarMoviesBySections = require("../SimilarMovies/SimilarMoviesBySections");
var _movieViewScss = require("./MovieView.scss");
const MovieView = ({ movie, show, isFavorite, toggleFavorite, onHide, movies, similarMoviesByDirector, similarMoviesByGenre, onMovieClick })=>{
    if (!movie) return null;
    console.log({
        toggleFavorite
    });
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Modal), {
        show: !!movie,
        onHide: ()=>setMovie(null),
        size: "xl",
        centered: true,
        scrollable: true,
        dialogClassName: "modal-90w",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Modal).Header, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Modal).Title, {
                        children: [
                            movie.title,
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                                variant: "link",
                                onClick: ()=>toggleFavorite(movie.id),
                                className: "ms-3 p-0",
                                style: {
                                    color: isFavorite ? "red" : "gray",
                                    fontSize: "1.5rem"
                                },
                                children: isFavorite ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _fa.FaHeart), {}, void 0, false, {
                                    fileName: "src/components/MovieView/MovieView.jsx",
                                    lineNumber: 30,
                                    columnNumber: 35
                                }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _fa.FaRegHeart), {}, void 0, false, {
                                    fileName: "src/components/MovieView/MovieView.jsx",
                                    lineNumber: 30,
                                    columnNumber: 49
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/MovieView/MovieView.jsx",
                                lineNumber: 24,
                                columnNumber: 19
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/MovieView/MovieView.jsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                        onClick: onHide,
                        className: "backButton ms-auto",
                        style: {
                            cursor: "pointer"
                        },
                        children: "Back"
                    }, void 0, false, {
                        fileName: "src/components/MovieView/MovieView.jsx",
                        lineNumber: 33,
                        columnNumber: 15
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/MovieView/MovieView.jsx",
                lineNumber: 22,
                columnNumber: 11
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Modal).Body, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                    src: movie.image,
                                    alt: movie.title
                                }, void 0, false, {
                                    fileName: "src/components/MovieView/MovieView.jsx",
                                    lineNumber: 42,
                                    columnNumber: 9
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/MovieView/MovieView.jsx",
                                lineNumber: 41,
                                columnNumber: 7
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "Title: "
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 45,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: movie.title
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 46,
                                        columnNumber: 9
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/MovieView/MovieView.jsx",
                                lineNumber: 44,
                                columnNumber: 7
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "Release Year: "
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 49,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: movie.releaseYear
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 50,
                                        columnNumber: 9
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/MovieView/MovieView.jsx",
                                lineNumber: 48,
                                columnNumber: 7
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "Setting: "
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 53,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: movie.setting
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 54,
                                        columnNumber: 9
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/MovieView/MovieView.jsx",
                                lineNumber: 52,
                                columnNumber: 7
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "Description: "
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 57,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: movie.description
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 58,
                                        columnNumber: 9
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/MovieView/MovieView.jsx",
                                lineNumber: 56,
                                columnNumber: 7
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "Director: "
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 61,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: movie.director.name
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 62,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: movie.director.bio
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 63,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: movie.director.dateOfBirth
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 64,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: movie.director.deathYear
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 65,
                                        columnNumber: 9
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/MovieView/MovieView.jsx",
                                lineNumber: 60,
                                columnNumber: 7
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "Genre: "
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 68,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: movie.genre.name
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 69,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: movie.genre.description
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 70,
                                        columnNumber: 9
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/MovieView/MovieView.jsx",
                                lineNumber: 67,
                                columnNumber: 7
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "Featured: "
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 73,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: movie.featured ? "Yes" : "No"
                                    }, void 0, false, {
                                        fileName: "src/components/MovieView/MovieView.jsx",
                                        lineNumber: 74,
                                        columnNumber: 9
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/MovieView/MovieView.jsx",
                                lineNumber: 72,
                                columnNumber: 7
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/MovieView/MovieView.jsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("hr", {}, void 0, false, {
                        fileName: "src/components/MovieView/MovieView.jsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        children: " Similar Movies "
                    }, void 0, false, {
                        fileName: "src/components/MovieView/MovieView.jsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _similarMoviesBySections.SimilarMoviesBySections), {
                        title: "By Genre",
                        movies: similarMoviesByGenre,
                        onMovieClick: onMovieClick
                    }, void 0, false, {
                        fileName: "src/components/MovieView/MovieView.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("hr", {}, void 0, false, {
                        fileName: "src/components/MovieView/MovieView.jsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _similarMoviesBySections.SimilarMoviesBySections), {
                        title: "By Director",
                        movies: similarMoviesByDirector,
                        onMovieClick: onMovieClick
                    }, void 0, false, {
                        fileName: "src/components/MovieView/MovieView.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/MovieView/MovieView.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/MovieView/MovieView.jsx",
        lineNumber: 15,
        columnNumber: 1
    }, undefined);
};
MovieView.propTypes = {
    show: (0, _propTypesDefault.default).bool.isRequired,
    isFavorite: (0, _propTypesDefault.default).bool.isRequired,
    toggleFavorite: (0, _propTypesDefault.default).func.isRequired,
    onHide: (0, _propTypesDefault.default).func.isRequired,
    movies: (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).object).isRequired,
    onMovieClick: (0, _propTypesDefault.default).func.isRequired,
    similarMoviesByGenre: (0, _propTypesDefault.default).array.isRequired,
    similarMoviesByDirector: (0, _propTypesDefault.default).array.isRequired,
    movie: (0, _propTypesDefault.default).shape({
        id: (0, _propTypesDefault.default).string.isRequired,
        title: (0, _propTypesDefault.default).string.isRequired,
        releaseYear: (0, _propTypesDefault.default).string.isRequired,
        setting: (0, _propTypesDefault.default).string,
        description: (0, _propTypesDefault.default).string.isRequired,
        image: (0, _propTypesDefault.default).string.isRequired,
        featured: (0, _propTypesDefault.default).bool.isRequired,
        director: (0, _propTypesDefault.default).shape({
            name: (0, _propTypesDefault.default).string.isRequired,
            bio: (0, _propTypesDefault.default).string.isRequired,
            dateOfBirth: (0, _propTypesDefault.default).string.isRequired,
            deathYear: (0, _propTypesDefault.default).string
        }).isRequired,
        genre: (0, _propTypesDefault.default).shape({
            name: (0, _propTypesDefault.default).string.isRequired,
            description: (0, _propTypesDefault.default).string.isRequired
        }).isRequired
    }).isRequired
};

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","prop-types":"prop-types","react-bootstrap":"react-bootstrap","react-icons/fa":"react-icons/fa","../SimilarMovies/SimilarMoviesBySections":"gOabx","./MovieView.scss":"kmJDa","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"gOabx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SimilarMoviesBySections", ()=>SimilarMoviesBySections);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _reactBootstrap = require("react-bootstrap");
var _movieCard = require("../MovieCard/MovieCard");
const SimilarMoviesBySections = ({ movies, title, onMovieClick })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                children: title
            }, void 0, false, {
                fileName: "src/components/SimilarMovies/SimilarMoviesBySections.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.CardGroup), {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                    className: "g-3",
                    children: movies.map((movie)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                            xs: 12,
                            sm: 6,
                            md: 4,
                            lg: 3,
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _movieCard.MovieCard), {
                                movie: movie,
                                onMovieClick: ()=>onMovieClick(movie)
                            }, void 0, false, {
                                fileName: "src/components/SimilarMovies/SimilarMoviesBySections.jsx",
                                lineNumber: 14,
                                columnNumber: 21
                            }, undefined)
                        }, movie.id, false, {
                            fileName: "src/components/SimilarMovies/SimilarMoviesBySections.jsx",
                            lineNumber: 13,
                            columnNumber: 25
                        }, undefined))
                }, void 0, false, {
                    fileName: "src/components/SimilarMovies/SimilarMoviesBySections.jsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/SimilarMovies/SimilarMoviesBySections.jsx",
                lineNumber: 10,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true);
};
SimilarMoviesBySections.propTypes = {
    movies: (0, _propTypesDefault.default).array.isRequired,
    title: (0, _propTypesDefault.default).string.isRequired,
    onMovieClick: (0, _propTypesDefault.default).func.isRequired
};

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","prop-types":"prop-types","react-bootstrap":"react-bootstrap","../MovieCard/MovieCard":"9RkbZ","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"kmJDa":[function() {},{}],"fTRNK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoginView", ()=>LoginView);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactBootstrap = require("react-bootstrap");
var _passwordInput = require("../PasswordInput");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _loginViewScss = require("./LoginView.scss");
const LoginView = ({ onLoggedIn })=>{
    const [username, setUsername] = (0, _react.useState)("");
    const [password, setPassword] = (0, _react.useState)("");
    const [error, setError] = (0, _react.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {
            Username: username,
            Password: password
        };
        fetch("https://gb-movies-api-cab43a70da98.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response)=>response.json()).then((data)=>{
            console.log("Login response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
            } else alert("No such user");
        }).catch((error)=>{
            setError("Something went wrong");
        });
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form), {
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card), {
            className: "shadow-lg rounded-4 my-3",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Header, {
                    className: "text-center bg-primary opacity: 2 text-white rounded-4 my-0",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("b", {
                            children: "LOG IN"
                        }, void 0, false, {
                            fileName: "src/components/LoginView/LoginView.jsx",
                            lineNumber: 50,
                            columnNumber: 15
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/LoginView/LoginView.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/LoginView/LoginView.jsx",
                    lineNumber: 49,
                    columnNumber: 7
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Body, {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Title, {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                                children: "Please log in here to view the selecction of British movies:"
                            }, void 0, false, {
                                fileName: "src/components/LoginView/LoginView.jsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/LoginView/LoginView.jsx",
                            lineNumber: 53,
                            columnNumber: 9
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                controlId: "loginUsername",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                        column: "lg",
                                        children: "Username:"
                                    }, void 0, false, {
                                        fileName: "src/components/LoginView/LoginView.jsx",
                                        lineNumber: 57,
                                        columnNumber: 7
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                        lg: "auto",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                            type: "text",
                                            value: username,
                                            onChange: (e)=>setUsername(e.target.value),
                                            required: true,
                                            minLength: "5",
                                            maxLength: "12",
                                            className: "mb-2 bg-light text-dark",
                                            placeholder: "Enter your name"
                                        }, void 0, false, {
                                            fileName: "src/components/LoginView/LoginView.jsx",
                                            lineNumber: 61,
                                            columnNumber: 9
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/LoginView/LoginView.jsx",
                                        lineNumber: 60,
                                        columnNumber: 9
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/LoginView/LoginView.jsx",
                                lineNumber: 56,
                                columnNumber: 7
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/LoginView/LoginView.jsx",
                            lineNumber: 55,
                            columnNumber: 7
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                            className: "align-items-center",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                controlId: "loginPassword",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                        lg: "auto",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                            children: "Password (8 characters minimum):"
                                        }, void 0, false, {
                                            fileName: "src/components/LoginView/LoginView.jsx",
                                            lineNumber: 77,
                                            columnNumber: 9
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/LoginView/LoginView.jsx",
                                        lineNumber: 76,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                        lg: "auto",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _passwordInput.PasswordInput), {
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            className: "mb-2 bg-light text-dark"
                                        }, void 0, false, {
                                            fileName: "src/components/LoginView/LoginView.jsx",
                                            lineNumber: 82,
                                            columnNumber: 11
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/LoginView/LoginView.jsx",
                                        lineNumber: 81,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Check, {
                                            type: "checkbox",
                                            id: "rememberMeLogin",
                                            className: "mb-2",
                                            label: "Remember me"
                                        }, void 0, false, {
                                            fileName: "src/components/LoginView/LoginView.jsx",
                                            lineNumber: 89,
                                            columnNumber: 21
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/LoginView/LoginView.jsx",
                                        lineNumber: 88,
                                        columnNumber: 11
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/LoginView/LoginView.jsx",
                                lineNumber: 75,
                                columnNumber: 7
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/LoginView/LoginView.jsx",
                            lineNumber: 74,
                            columnNumber: 7
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/LoginView/LoginView.jsx",
                    lineNumber: 52,
                    columnNumber: 7
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Footer, {
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                            type: "submit",
                            className: "mb-2",
                            lg: "auto",
                            children: "Log in"
                        }, void 0, false, {
                            fileName: "src/components/LoginView/LoginView.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/LoginView/LoginView.jsx",
                        lineNumber: 100,
                        columnNumber: 15
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/LoginView/LoginView.jsx",
                    lineNumber: 99,
                    columnNumber: 15
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/LoginView/LoginView.jsx",
            lineNumber: 48,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/LoginView/LoginView.jsx",
        lineNumber: 47,
        columnNumber: 3
    }, undefined);
};
LoginView.propTypes = {
    onLoggedIn: (0, _propTypesDefault.default).func.isRequired
};

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-bootstrap":"react-bootstrap","../PasswordInput":"7t4uK","prop-types":"prop-types","./LoginView.scss":"1FgFE","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"7t4uK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PasswordInput", ()=>PasswordInput);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactBootstrap = require("react-bootstrap");
var _eye = require("react-bootstrap-icons/dist/icons/eye");
var _eyeDefault = parcelHelpers.interopDefault(_eye);
var _eyeSlash = require("react-bootstrap-icons/dist/icons/eye-slash");
var _eyeSlashDefault = parcelHelpers.interopDefault(_eyeSlash);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const PasswordInput = ({ value, onChange, onClick })=>{
    const [showPassword, setShowPassword] = (0, _react.useState)(false);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.InputGroup), {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                        type: showPassword ? "text" : "password",
                        value: value,
                        onChange: onChange,
                        required: true,
                        minLength: "8",
                        maxLength: "15",
                        autoComplete: "current-password",
                        className: "bg-light text-dark",
                        placeholder: "Enter your password"
                    }, void 0, false, {
                        fileName: "src/components/PasswordInput.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                        variant: "outline-secondary",
                        onClick: ()=>setShowPassword(!showPassword),
                        children: showPassword ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _eyeSlashDefault.default), {}, void 0, false, {
                            fileName: "src/components/PasswordInput.jsx",
                            lineNumber: 29,
                            columnNumber: 27
                        }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _eyeDefault.default), {}, void 0, false, {
                            fileName: "src/components/PasswordInput.jsx",
                            lineNumber: 29,
                            columnNumber: 42
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/PasswordInput.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/PasswordInput.jsx",
                lineNumber: 13,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "src/components/PasswordInput.jsx",
            lineNumber: 12,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/PasswordInput.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, undefined);
};
PasswordInput.propTypes = {
    value: (0, _propTypesDefault.default).string.isRequired,
    onChange: (0, _propTypesDefault.default).func.isRequired
};

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-bootstrap":"react-bootstrap","react-bootstrap-icons/dist/icons/eye":"react-bootstrap-icons/dist/icons/eye","react-bootstrap-icons/dist/icons/eye-slash":"react-bootstrap-icons/dist/icons/eye-slash","prop-types":"prop-types","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"1FgFE":[function() {},{}],"1ojTG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SignupView", ()=>SignupView);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactBootstrap = require("react-bootstrap");
var _passwordInput = require("../PasswordInput");
var _signupViewScss = require("./SignupView.scss");
const SignupView = ()=>{
    const [username, setUsername] = (0, _react.useState)("");
    const [password, setPassword] = (0, _react.useState)("");
    const [email, setEmail] = (0, _react.useState)("");
    const [dateOfBirth, setDateOfBirth] = (0, _react.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {
            Username: username,
            Password: password,
            Email: email,
            DateOfBirth: dateOfBirth
        };
        fetch("https://gb-movies-api-cab43a70da98.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response)=>response.json()).then((data)=>{
            console.log("Signup response: ", data);
            if (data.message === "User already exists") alert("Username already exists! Choose a different username OR log in.");
            else alert("Signup successful! Please log in.");
        }).catch((e)=>{
            alert("Something went wrong");
        });
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form), {
        onSubmit: handleSubmit,
        className: "align-items-center",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card), {
            className: "shadow-lg rounded-4 my-4",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Header, {
                    className: "text-center bg-primary opacity-8 text-white rounded-4 my-0",
                    column: "lg",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("b", {
                            children: "REGISTER"
                        }, void 0, false, {
                            fileName: "src/components/SignupView/SignupView.jsx",
                            lineNumber: 46,
                            columnNumber: 15
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/SignupView/SignupView.jsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/SignupView/SignupView.jsx",
                    lineNumber: 45,
                    columnNumber: 7
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Body, {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Title, {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                                children: "Please log in here to view the selecction of British movies:"
                            }, void 0, false, {
                                fileName: "src/components/SignupView/SignupView.jsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/SignupView/SignupView.jsx",
                            lineNumber: 49,
                            columnNumber: 9
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                controlId: "signupUsername",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                    lg: "auto",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                            children: "Username:"
                                        }, void 0, false, {
                                            fileName: "src/components/SignupView/SignupView.jsx",
                                            lineNumber: 54,
                                            columnNumber: 13
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                            type: "text",
                                            value: username,
                                            onChange: (e)=>setUsername(e.target.value),
                                            required: true,
                                            minLength: "5",
                                            maxLength: "12",
                                            className: "mb-2 bg-light text-dark",
                                            placeholder: "Enter your name"
                                        }, void 0, false, {
                                            fileName: "src/components/SignupView/SignupView.jsx",
                                            lineNumber: 57,
                                            columnNumber: 13
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/SignupView/SignupView.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/SignupView/SignupView.jsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/SignupView/SignupView.jsx",
                            lineNumber: 51,
                            columnNumber: 9
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                            className: "align-items-center",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                controlId: "signupPassword",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                        lg: "auto",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                            children: "Password (8 characters minimum):"
                                        }, void 0, false, {
                                            fileName: "src/components/SignupView/SignupView.jsx",
                                            lineNumber: 73,
                                            columnNumber: 9
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/SignupView/SignupView.jsx",
                                        lineNumber: 72,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                        lg: "auto",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _passwordInput.PasswordInput), {
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            className: "mb-2"
                                        }, void 0, false, {
                                            fileName: "src/components/SignupView/SignupView.jsx",
                                            lineNumber: 78,
                                            columnNumber: 11
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/SignupView/SignupView.jsx",
                                        lineNumber: 77,
                                        columnNumber: 9
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Check, {
                                            type: "checkbox",
                                            id: "rememberMeSignup",
                                            className: "mb-2",
                                            label: "Remember me"
                                        }, void 0, false, {
                                            fileName: "src/components/SignupView/SignupView.jsx",
                                            lineNumber: 85,
                                            columnNumber: 21
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/SignupView/SignupView.jsx",
                                        lineNumber: 84,
                                        columnNumber: 11
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/SignupView/SignupView.jsx",
                                lineNumber: 71,
                                columnNumber: 7
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/SignupView/SignupView.jsx",
                            lineNumber: 70,
                            columnNumber: 7
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                    lg: "auto",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                            children: "Email: "
                                        }, void 0, false, {
                                            fileName: "src/components/SignupView/SignupView.jsx",
                                            lineNumber: 97,
                                            columnNumber: 9
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            required: true,
                                            pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
                                            size: "30",
                                            placeholder: "sophie@example.com",
                                            className: "mb-2 bg-light text-dark"
                                        }, void 0, false, {
                                            fileName: "src/components/SignupView/SignupView.jsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/SignupView/SignupView.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/SignupView/SignupView.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/SignupView/SignupView.jsx",
                            lineNumber: 94,
                            columnNumber: 9
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                    lg: "auto",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                            children: "Date of Birth: "
                                        }, void 0, false, {
                                            fileName: "src/components/SignupView/SignupView.jsx",
                                            lineNumber: 114,
                                            columnNumber: 13
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                            type: "date",
                                            value: dateOfBirth,
                                            onChange: (e)=>setDateOfBirth(e.target.value),
                                            required: true,
                                            placeholder: "01-01-2000",
                                            className: "mb-2 bg-light text-dark"
                                        }, void 0, false, {
                                            fileName: "src/components/SignupView/SignupView.jsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/SignupView/SignupView.jsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/SignupView/SignupView.jsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/SignupView/SignupView.jsx",
                            lineNumber: 111,
                            columnNumber: 9
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/SignupView/SignupView.jsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Card).Footer, {
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                            type: "submit",
                            className: "mb-2",
                            lg: "auto",
                            children: "Sign Up"
                        }, void 0, false, {
                            fileName: "src/components/SignupView/SignupView.jsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/SignupView/SignupView.jsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/SignupView/SignupView.jsx",
                    lineNumber: 128,
                    columnNumber: 7
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/SignupView/SignupView.jsx",
            lineNumber: 44,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/SignupView/SignupView.jsx",
        lineNumber: 43,
        columnNumber: 3
    }, undefined);
};

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-bootstrap":"react-bootstrap","../PasswordInput":"7t4uK","./SignupView.scss":"3VjPJ","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"3VjPJ":[function() {},{}],"aunKW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileView", ()=>ProfileView);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _deleteAccountButton = require("./DeleteAccountButton");
var _updateDataButton = require("./UpdateDataButton");
var _favoritesView = require("./FavoritesView");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const ProfileView = ({ user, movies, onMovieClick })=>{
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const [profileUser, setProfileUser] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        if (!user || !user.Username) return;
        fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            if (!response.ok) throw new Error("Failed to fetch user data");
            return response.json();
        }).then((data)=>{
            const userFromApi = {
                id: data._id,
                username: data.Username,
                password: data.Password,
                email: data.Email,
                dateOfBirth: data.DateOfBirth,
                favoriteMovies: data.FavoriteMovies || []
            };
            setProfileUser(userFromApi);
            console.log("Fetched profile user:", userFromApi);
        }).catch((error)=>{
            console.error("Error fetching user data:", error);
        });
    }, [
        user
    ]);
    if (!user) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: "User not found. Please log in again."
    }, void 0, false, {
        fileName: "src/components/UsersProfileView/ProfileView.jsx",
        lineNumber: 45,
        columnNumber: 23
    }, undefined);
    if (!profileUser) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: "Loading profile..."
    }, void 0, false, {
        fileName: "src/components/UsersProfileView/ProfileView.jsx",
        lineNumber: 46,
        columnNumber: 30
    }, undefined);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                children: "Your Profile"
            }, void 0, false, {
                fileName: "src/components/UsersProfileView/ProfileView.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        children: "Username: "
                    }, void 0, false, {
                        fileName: "src/components/UsersProfileView/ProfileView.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        children: profileUser.username
                    }, void 0, false, {
                        fileName: "src/components/UsersProfileView/ProfileView.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/UsersProfileView/ProfileView.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        children: "Password: "
                    }, void 0, false, {
                        fileName: "src/components/UsersProfileView/ProfileView.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        children: profileUser.password
                    }, void 0, false, {
                        fileName: "src/components/UsersProfileView/ProfileView.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/UsersProfileView/ProfileView.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        children: "Email: "
                    }, void 0, false, {
                        fileName: "src/components/UsersProfileView/ProfileView.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        children: profileUser.email
                    }, void 0, false, {
                        fileName: "src/components/UsersProfileView/ProfileView.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/UsersProfileView/ProfileView.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        children: "Date of Birth: "
                    }, void 0, false, {
                        fileName: "src/components/UsersProfileView/ProfileView.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        children: profileUser.dateOfBirth
                    }, void 0, false, {
                        fileName: "src/components/UsersProfileView/ProfileView.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/UsersProfileView/ProfileView.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("hr", {}, void 0, false, {
                fileName: "src/components/UsersProfileView/ProfileView.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _deleteAccountButton.DeleteAccountButton), {
                user: profileUser,
                token: token
            }, void 0, false, {
                fileName: "src/components/UsersProfileView/ProfileView.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _updateDataButton.UpdateDataButton), {
                user: user,
                token: token
            }, void 0, false, {
                fileName: "src/components/UsersProfileView/ProfileView.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("hr", {}, void 0, false, {
                fileName: "src/components/UsersProfileView/ProfileView.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                className: "mt-3",
                children: "Favorite Movies"
            }, void 0, false, {
                fileName: "src/components/UsersProfileView/ProfileView.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _favoritesView.FavoritesView), {
                favoriteMoviesIds: profileUser.favoriteMovies || [],
                movies: movies,
                onMovieClick: onMovieClick
            }, void 0, false, {
                fileName: "src/components/UsersProfileView/ProfileView.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/UsersProfileView/ProfileView.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, undefined);
};
ProfileView.propTypes = {
    user: (0, _propTypesDefault.default).object.isRequired,
    movies: (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).object).isRequired,
    onMovieClick: (0, _propTypesDefault.default).func.isRequired,
    onClick: (0, _propTypesDefault.default).func.isRequired
};

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","./DeleteAccountButton":"9qtQU","./UpdateDataButton":"8bWha","./FavoritesView":"h4UD6","prop-types":"prop-types","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"9qtQU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DeleteAccountButton", ()=>DeleteAccountButton);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _button = require("react-bootstrap/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _modal = require("react-bootstrap/Modal");
var _modalDefault = parcelHelpers.interopDefault(_modal);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const DeleteAccountButton = ({ user, token })=>{
    const [showModal, setShowModal] = (0, _react.useState)(false);
    const handleDeleteClick = ()=>setShowModal(true);
    const handleClose = ()=>setShowModal(false);
    const confirmDelete = ()=>{
        fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            if (!response.ok) throw new Error("Failed to delete account");
            return response.text();
        }).then((message)=>{
            alert(message);
            setShowModal(false);
        }).catch((err)=>{
            console.error("Error deleting account:", err);
            setShowModal(false);
        });
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                variant: "danger",
                onClick: handleDeleteClick,
                children: "Delete Account"
            }, void 0, false, {
                fileName: "src/components/UsersProfileView/DeleteAccountButton.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _modalDefault.default), {
                show: showModal,
                onHide: handleClose,
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _modalDefault.default).Header, {
                        closeButton: true,
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _modalDefault.default).Title, {
                            children: "Confirm Delete"
                        }, void 0, false, {
                            fileName: "src/components/UsersProfileView/DeleteAccountButton.jsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/UsersProfileView/DeleteAccountButton.jsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _modalDefault.default).Body, {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                            children: [
                                "Are you sure you want to delete your account/username? ",
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/components/UsersProfileView/DeleteAccountButton.jsx",
                                    lineNumber: 47,
                                    columnNumber: 80
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("b", {
                                    children: "This cannot be undone!"
                                }, void 0, false, {
                                    fileName: "src/components/UsersProfileView/DeleteAccountButton.jsx",
                                    lineNumber: 47,
                                    columnNumber: 89
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/UsersProfileView/DeleteAccountButton.jsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/UsersProfileView/DeleteAccountButton.jsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _modalDefault.default).Footer, {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                                variant: "secondary",
                                onClick: handleClose,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "src/components/UsersProfileView/DeleteAccountButton.jsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                                variant: "danger",
                                onClick: confirmDelete,
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "src/components/UsersProfileView/DeleteAccountButton.jsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/UsersProfileView/DeleteAccountButton.jsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/UsersProfileView/DeleteAccountButton.jsx",
                lineNumber: 42,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true);
};
DeleteAccountButton.propTypes = {
    user: (0, _propTypesDefault.default).shape({
        Username: (0, _propTypesDefault.default).string.isRequired
    }).isRequired,
    token: (0, _propTypesDefault.default).string.isRequired
};

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-bootstrap/Button":"react-bootstrap/Button","react-bootstrap/Modal":"react-bootstrap/Modal","prop-types":"prop-types","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"8bWha":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UpdateDataButton", ()=>UpdateDataButton);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _passwordInput = require("../PasswordInput");
var _reactBootstrap = require("react-bootstrap");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const UpdateDataButton = ({ user, token })=>{
    const [showModal, setShowModal] = (0, _react.useState)(false);
    const handleEditClick = ()=>setShowModal(true);
    const handleClose = ()=>setShowModal(false);
    const [username, setUsername] = (0, _react.useState)("");
    const [password, setPassword] = (0, _react.useState)("");
    const [email, setEmail] = (0, _react.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        confirmEdit();
    };
    const updateData = ()=>{
        fetch(`https://gb-movies-api-cab43a70da98.herokuapp.com/users/${user.Username}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify({
                Username: username,
                Password: password,
                Email: email
            })
        }).then((response)=>{
            if (!user || !user.Username) {
                console.warn("User data not available");
                return null;
            }
            if (!response.ok) throw new Error("Failed to update user data");
            return response.JSON();
        }).then((message)=>{
            alert(message);
            setShowModal(false);
        }).then((updatedUser)=>{
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
            alert("User info updated successfully!");
            setShowModal(false);
        }).catch((err)=>{
            console.error("Error updating data:", err);
            setShowModal(false);
        });
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                variant: "danger",
                onClick: handleEditClick,
                children: "Edit Data"
            }, void 0, false, {
                fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                lineNumber: 65,
                columnNumber: 9
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Modal), {
                show: showModal,
                onHide: handleClose,
                centered: true,
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Modal).Header, {
                        closeButton: true,
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Modal).Title, {
                            children: "Edit User Data:"
                        }, void 0, false, {
                            fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Modal).Body, {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form), {
                            onSubmit: handleSubmit,
                            className: "align-items-center",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                        controlId: "updateUsername",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                            lg: "auto",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                                    children: "Username:"
                                                }, void 0, false, {
                                                    fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                                    type: "text",
                                                    value: username,
                                                    onChange: (e)=>setUsername(e.target.value),
                                                    required: true,
                                                    minLength: "5",
                                                    maxLength: "12",
                                                    className: "mb-2 bg-light text-dark",
                                                    placeholder: "Enter your name"
                                                }, void 0, false, {
                                                    fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                            lineNumber: 77,
                                            columnNumber: 21
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                                    className: "align-items-center",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                        controlId: "updatePassword",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                                lg: "auto",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                                    children: "Password (8 characters minimum):"
                                                }, void 0, false, {
                                                    fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                                lineNumber: 96,
                                                columnNumber: 21
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                                lg: "auto",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _passwordInput.PasswordInput), {
                                                    value: password,
                                                    onChange: (e)=>setPassword(e.target.value),
                                                    className: "mb-2"
                                                }, void 0, false, {
                                                    fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                                lineNumber: 101,
                                                columnNumber: 21
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Group, {
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                            lg: "auto",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Label, {
                                                    children: "Email:"
                                                }, void 0, false, {
                                                    fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                                    type: "email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    required: true,
                                                    pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
                                                    size: "30",
                                                    placeholder: "sophie@example.com",
                                                    className: "mb-2 bg-light text-dark"
                                                }, void 0, false, {
                                                    fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                            lineNumber: 120,
                                            columnNumber: 21
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Modal).Footer, {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h4", {
                                    children: "Are you sure you want to change your user data?"
                                }, void 0, false, {
                                    fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                lineNumber: 139,
                                columnNumber: 17
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                                variant: "secondary",
                                onClick: handleClose,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                                variant: "danger",
                                onClick: updateData,
                                children: "Confirm"
                            }, void 0, false, {
                                fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                                lineNumber: 143,
                                columnNumber: 21
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                        lineNumber: 138,
                        columnNumber: 13
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/UsersProfileView/UpdateDataButton.jsx",
                lineNumber: 69,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true);
};
UpdateDataButton.propTypes = {
    user: (0, _propTypesDefault.default).shape({
        Username: (0, _propTypesDefault.default).string.isRequired,
        Password: (0, _propTypesDefault.default).string.isRequired,
        Email: (0, _propTypesDefault.default).string.isRequired
    }).isRequired,
    token: (0, _propTypesDefault.default).string.isRequired
};

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","../PasswordInput":"7t4uK","react-bootstrap":"react-bootstrap","prop-types":"prop-types","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"h4UD6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FavoritesView", ()=>FavoritesView);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactBootstrap = require("react-bootstrap");
var _movieCard = require("../MovieCard/MovieCard");
const FavoritesView = ({ favoriteMoviesIds, movies, onMovieClick })=>{
    const favoriteMovies = movies.filter((movie)=>movie._id && favoriteMoviesIds.includes(movie._id.toString()));
    if (!favoriteMoviesIds || !Array.isArray(favoriteMoviesIds)) favoriteMoviesIds = [];
    if (favoriteMovies.length === 0) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
            children: "This list is empty! Start adding some movies to Favorites to fill this list."
        }, void 0, false, {
            fileName: "src/components/UsersProfileView/FavoritesView.jsx",
            lineNumber: 18,
            columnNumber: 12
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/UsersProfileView/FavoritesView.jsx",
        lineNumber: 18,
        columnNumber: 7
    }, undefined);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
        children: favoriteMovies.map((movie)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                xs: 10,
                sm: 8,
                md: 6,
                lg: 4,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _movieCard.MovieCard), {
                    movie: movie,
                    onMovieClick: onMovieClick
                }, void 0, false, {
                    fileName: "src/components/UsersProfileView/FavoritesView.jsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, undefined)
            }, movie._id, false, {
                fileName: "src/components/UsersProfileView/FavoritesView.jsx",
                lineNumber: 25,
                columnNumber: 9
            }, undefined))
    }, void 0, false, {
        fileName: "src/components/UsersProfileView/FavoritesView.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, undefined);
};
(0, _movieCard.MovieCard).propTypes = {
    favoriteMoviesIds: (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).string).isRequired,
    movies: (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).object).isRequired,
    onMovieClick: (0, _propTypesDefault.default).func.isRequired
};

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","prop-types":"prop-types","react":"react","react-bootstrap":"react-bootstrap","../MovieCard/MovieCard":"9RkbZ","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"fzYNF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavbarView", ()=>NavbarView);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _reactBootstrap = require("react-bootstrap");
const NavbarView = ({ onLogout, onShowProfile, onBackClick, onSearch })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Navbar), {
        sticky: "top",
        className: "Navbar justify-content-between",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form), {
                className: "d-flex",
                onSubmit: (e)=>{
                    e.preventDefault();
                    onSearch(searchTerm);
                },
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                            xs: "auto",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form).Control, {
                                type: "text",
                                placeholder: "Search",
                                className: "mr-sm-2 SearchBar"
                            }, void 0, false, {
                                fileName: "src/components/NavbarView/NavbarView.jsx",
                                lineNumber: 77,
                                columnNumber: 25
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/NavbarView/NavbarView.jsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                            xs: "auto",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                                type: "submit",
                                className: "RegularButton",
                                children: "Submit"
                            }, void 0, false, {
                                fileName: "src/components/NavbarView/NavbarView.jsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/NavbarView/NavbarView.jsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/NavbarView/NavbarView.jsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/NavbarView/NavbarView.jsx",
                lineNumber: 70,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Form), {
                className: "d-flex justify-content-md-end",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Row), {
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.ButtonGroup), {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                xs: "auto",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                                    className: "RegularButton mb-3",
                                    onClick: onShowProfile,
                                    children: "Profile"
                                }, void 0, false, {
                                    fileName: "src/components/NavbarView/NavbarView.jsx",
                                    lineNumber: 92,
                                    columnNumber: 29
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/NavbarView/NavbarView.jsx",
                                lineNumber: 91,
                                columnNumber: 25
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                xs: "auto",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                                    onClick: onBackClick,
                                    className: "mb-3",
                                    children: "Back to Home"
                                }, void 0, false, {
                                    fileName: "src/components/NavbarView/NavbarView.jsx",
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/NavbarView/NavbarView.jsx",
                                lineNumber: 105,
                                columnNumber: 25
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Col), {
                                xs: "auto",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactBootstrap.Button), {
                                    className: "btn RegularButton me-md-2",
                                    onClick: onLogout,
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "src/components/NavbarView/NavbarView.jsx",
                                    lineNumber: 111,
                                    columnNumber: 29
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/NavbarView/NavbarView.jsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/NavbarView/NavbarView.jsx",
                        lineNumber: 90,
                        columnNumber: 21
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/NavbarView/NavbarView.jsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/NavbarView/NavbarView.jsx",
                lineNumber: 88,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/NavbarView/NavbarView.jsx",
        lineNumber: 68,
        columnNumber: 9
    }, undefined);
};
NavbarView.propTypes = {
    onLogout: (0, _propTypesDefault.default).func.isRequired,
    onShowProfile: (0, _propTypesDefault.default).func.isRequired,
    onShowFavorites: (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).object).isRequired,
    onBackClick: (0, _propTypesDefault.default).func.isRequired,
    onSearch: (0, _propTypesDefault.default).func.isRequired
};

},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","prop-types":"prop-types","react-bootstrap":"react-bootstrap","@parcel/transformer-js/src/esmodule-helpers.js":"3IjXM"}],"hlAnh":[function() {},{}]},["4m8RJ","btV7f"], "btV7f", "parcelRequireaec4", {})

//# sourceMappingURL=myFlix-client.57dca4d2.js.map
