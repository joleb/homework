import { useQuery } from "@apollo/client";
import { GET_CONTENT_NODES } from "../gql/queries";

const useGetDocumentNodes = () => {
  const {data,loading,error} = useQuery(GET_CONTENT_NODES)

  return { data, error, loading };
}

export default useGetDocumentNodes;