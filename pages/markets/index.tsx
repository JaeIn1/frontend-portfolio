import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function MarketsPage(): JSX.Element {
  useAuth();
  return <div>markets</div>;
}
