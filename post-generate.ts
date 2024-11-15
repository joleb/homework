import fs from "fs";
import path from "path";

const GENERATED_DIR = path.join(__dirname, "./gql/_generated/");
const FILES_TO_MODIFY = ["graphql.ts"];

// for whatever reason the generated code includes these types, which are duplicates
// therefore we delete them
const ENTRIES_TO_DELETE = [
  "export type DeleteTagInput = {",
  "export type DeleteTagPayload = {",
  "export type BaseData = {",
];

FILES_TO_MODIFY.forEach((file) => {
  const filePath = path.join(GENERATED_DIR, file);
  let fileContent = fs.readFileSync(filePath, "utf8");

  ENTRIES_TO_DELETE.forEach((entry) => {
    const entryStartIndex = fileContent.indexOf(entry);
    if (entryStartIndex !== -1) {
      const entryEndIndex = fileContent.indexOf("};", entryStartIndex) + 2;
      fileContent =
        fileContent.slice(0, entryStartIndex) +
        fileContent.slice(entryEndIndex);
    }
  });

  fs.writeFileSync(filePath, fileContent, "utf8");
});
