export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    url.hostname = "chat.openai.com";
    return fetch(new Request(url, request));
  },
};
