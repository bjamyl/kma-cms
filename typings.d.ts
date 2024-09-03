type SanityBase = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

interface Post extends SanityBase {
  _type: "post";
  page_id: string;
  title: string;
  category: string;
  body: string;
}
