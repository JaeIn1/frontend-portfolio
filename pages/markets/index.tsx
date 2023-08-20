import { withAuth } from "../../src/components/commons/hocs/withAuth";

function MarketsPage(): JSX.Element {
  return <div>markets</div>;
}

export default withAuth(MarketsPage);
