import http from "./httpService";
import config from "../config.json";

const apiEndPoint = `${config.apiEndpoint}/blogs`;

export function getBlogs() {
  return http.get(`${apiEndPoint}`);
}

export function getBlog(id) {
  return http.get(`${apiEndPoint}/${id}`);
}

export function addBlog(title, content) {
  return http.post(`${apiEndPoint}`, {
    title,
    content,
  });
}
