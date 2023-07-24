import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;


export default function BoardsEditPage() {
  const router = useRouter()
  if(!router || typeof router.query.boardId !== "string") return <></>
  
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, { 
    variables: { boardId: router.query.boardId } 
  });

  return <BoardWrite isEdit={true} data={data} />;
}
