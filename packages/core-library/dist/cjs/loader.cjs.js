'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0c82adbc.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["auth-signin_2.cjs",[[1,"auth-signin",{"formTitle":[1,"form-title"],"email":[32],"password":[32],"rememberMe":[32]}],[1,"feedback-alert",{"type":[1],"needAction":[4,"need-action"],"label":[1],"description":[1],"okText":[1,"ok-text"],"cancelText":[1,"cancel-text"]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map