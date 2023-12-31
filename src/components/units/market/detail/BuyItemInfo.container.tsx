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
        <form onSubmit={props.handleSubmit(props.onClickBuyItem)}>
          <S.BodyDiv>
            <span>이름</span>
            <br />
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              {...props.register("name")}
            />
          </S.BodyDiv>
          <S.ErrorText style={{ color: "red" }}>
            {props.formState.errors.name?.message}
          </S.ErrorText>
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
          <S.ErrorText style={{ color: "red" }}>{props.postError}</S.ErrorText>
          <S.BodyPhoneDiv>
            <span>연락처</span>
            <br />
            <input
              type="text"
              placeholder="예) 000-0000-0000"
              {...props.register("phone")}
            />
          </S.BodyPhoneDiv>
          <S.ErrorText style={{ color: "red" }}>
            {props.formState.errors.phone?.message}
          </S.ErrorText>
          <S.BodyDiv>
            <span>이메일</span>
            <br />
            <input
              type="email"
              placeholder="이메일을 입력해주세요."
              {...props.register("email")}
            />
            <S.ErrorText style={{ color: "red" }}>
              {props.formState.errors.email?.message}
            </S.ErrorText>
          </S.BodyDiv>
          <S.BuyBtn
            isActive={props.formState.isValid}
            onClick={props.onClickBuyItem}
          >
            <img src="/images/layout/header/kakaopay.png" />
            <span>Kakaopay</span>
          </S.BuyBtn>
          <S.BuyBtn2
            isActive={props.formState.isValid}
            onClick={props.handleSubmit(props.testBuy)}
          >
            <img src="/images/layout/header/eggplant.png" />
            <span>결제하기</span>
          </S.BuyBtn2>
        </form>
      </body>
    </>
  );
}
