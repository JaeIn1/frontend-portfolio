import { PulseLoader } from "react-spinners";
import * as S from "./Loading.styles";

export interface ILoadingProps {
  LoadingToggle: () => void;
}

export default function LoadingPage(props: ILoadingProps): JSX.Element {
  return (
    <S.ModalCustom
      open={true}
      onCancel={props.LoadingToggle}
      footer={null}
      mask={false}
    >
      <div>
        <S.LoadintText>잠시만 기다려주세요, 작성중입니다</S.LoadintText>
        <S.LoadintSpinner>
          <PulseLoader color="#B173D8" loading={true} size={20} />
        </S.LoadintSpinner>
      </div>
    </S.ModalCustom>
  );
}
