import { useQuery } from "@apollo/client";

import { GET_CONTENT_NODES } from "@/gql/queries";

interface PaginationVariables {
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
}

const useGetDocumentNodes = ({
  before = null,
  after = null,
  first = null,
  last = null,
}: PaginationVariables) => {
  const { data, loading, error, fetchMore } = useQuery(GET_CONTENT_NODES, {
    variables: { before, after, first, last },
  });
  return { data, error, loading, fetchMore };
};

export default useGetDocumentNodes;
