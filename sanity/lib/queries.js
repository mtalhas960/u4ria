import { defineQuery } from "next-sanity";

export const CONTENT_QUERY = defineQuery(`*[
  _id == $sectionId
][0]`);

export const BLOG_QUERY = defineQuery(`*[
  _type == "blog"
]`);

export const RETREAT_QUERY = defineQuery(`*[
  _type == "retreat"
]`);