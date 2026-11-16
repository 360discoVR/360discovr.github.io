const canonicalHost = '360discovr.com';

export default {
  fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === `www.${canonicalHost}` ||
        (url.hostname === canonicalHost && url.protocol === 'http:')) {
      url.protocol = 'https:';
      url.hostname = canonicalHost;
      url.port = '';
      return Response.redirect(url, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
