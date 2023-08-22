import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function MyPages(): JSX.Element {
  useAuth();
  return <div>mypages</div>;
}
