import { b as bootstrapLazy } from './index-161b8da3.js';
export { s as setNonce } from './index-161b8da3.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["auth-signin_2",[[1,"auth-signin",{"formTitle":[1,"form-title"],"email":[32],"password":[32],"rememberMe":[32]}],[1,"feedback-alert",{"type":[1],"needAction":[4,"need-action"],"label":[1],"description":[1],"okText":[1,"ok-text"],"cancelText":[1,"cancel-text"]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map