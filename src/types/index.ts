import { AdminQuery } from "../gql/_generated/graphql";

import { ArrayElement } from "./helper";

export type ContentNodeEdge = ArrayElement<
  NonNullable<AdminQuery["Admin"]["Tree"]["GetContentNodes"]["edges"]>
>;
