import * as S from "./BuyItem.styles";
import { IBuyItemProps } from "./BuyItem.types";

export default function BuyItemInfoPage(props: IBuyItemProps): JSX.Element {
  return (
    <>
      {props.isOpen && (
        <S.AddressModal visible={true}>
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Header>베송지 정보</S.Header>
      <body>
        <S.BodyDiv>
          <span>이름</span>
          <br />
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={props.onchangeBuyerName}
            required
          />
        </S.BodyDiv>
        <S.KakaoMapInfo>
          <span>우편번호</span>
          <S.ZipcodeWrapper>
            <S.Zipcode placeholder="07250" readOnly value={props.zipcode} />
            <S.SearchButton onClick={props.onClickAddressSearch}>
              우편번호 검색
            </S.SearchButton>
          </S.ZipcodeWrapper>
          <S.Address readOnly value={props.address} />
        </S.KakaoMapInfo>
        <S.BodyPhoneDiv>
          <span>연락처</span>
          <br />
          <input type="text" />-<input type="text" />-<input type="text" />
        </S.BodyPhoneDiv>
        <S.BodyDiv>
          <span>이메일</span>
          <br />
          <input
            type="email"
            placeholder="이메일을 입력해주세요."
            onChange={props.onchangeBuyerEmail}
            required
          />
        </S.BodyDiv>
      </body>
    </>
  );
}
