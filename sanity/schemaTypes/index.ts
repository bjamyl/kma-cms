import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { menuCategory } from "./menu";
import { link } from "./link";
import { about } from "./about";
import { assemblyMember } from "./assemblyMember";
import { department } from "./department";
import { departmentHead } from "./departmentHead";
import { mce } from "./mce";
import { metrodirector } from "./metrodirector";
import { project } from "./project";
import { submetro } from "./submetro";
import { event } from "./event";
import { imageAsset } from "./imageAsset";
import { settings } from "./settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    link,
    menuCategory,
    about,
    assemblyMember,
    department,
    departmentHead,
    mce,
    submetro,
    project,
    metrodirector,
    imageAsset,
    settings,
  ],
};
