import { withAuth } from "../../src/components/commons/hocs/withAuth";

function MyPages(): JSX.Element {
  return <div>mypages</div>;
}

export default withAuth(MyPages);
