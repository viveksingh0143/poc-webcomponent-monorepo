'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0c82adbc.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.12.4 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('core-library.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["auth-signin_2.cjs",[[1,"auth-signin",{"formTitle":[1,"form-title"],"email":[32],"password":[32],"rememberMe":[32]}],[1,"feedback-alert",{"type":[1],"needAction":[4,"need-action"],"label":[1],"description":[1],"okText":[1,"ok-text"],"cancelText":[1,"cancel-text"]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=core-library.cjs.js.map