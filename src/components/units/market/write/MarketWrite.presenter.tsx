import Upload01 from "../../../commons/uploads/01/Upload01.container";
import * as S from "./MarketWrite.styles";
import type { IMarketWriteUIProps } from "./MarketWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function MarketWriteUI(props: IMarketWriteUIProps): JSX.Element {
  return (
    <>
      {props.isOpen && (
        <S.AddressModal visible={true}>
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>상품명</S.Label>
            <S.ItemName
              type="text"
              placeholder="상품명을 작성해주세요"
              onChange={props.onChangeItemNamer}
              defaultValue={props.data?.fetchUseditem.name ?? ""}
            />
            <S.Error>{props.nameError}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>한줄요약</S.Label>
          <S.ItemSummary
            type="text"
            placeholder="상품명을 작성해주세요"
            onChange={props.onChangeRemarks}
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <S.Error>{props.remarksError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품설명</S.Label>
          <S.Contents
            placeholder="상품을 설명해주세요"
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchUseditem.contents}
          />
          <S.Error>{props.contentsError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>판매 가격</S.Label>
          <S.ItemPrice
            placeholder="판매 가격을 입력해주세요"
            onChange={props.onChangePrice}
            defaultValue={String(props.data?.fetchUseditem.price ?? "")}
          />
          <S.Error>{props.pricesError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>태그입력</S.Label>
          <S.ItemTag
            placeholder="#태그 #태그 #태그"
            onChange={props.onChangeTag}
            defaultValue={String(`${props.data?.fetchUseditem.tags ?? ""}`)}
          />
          <S.Error>{props.tagsError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>거래위치</S.Label>
          <S.KakaoWrapper>
            <S.KakaoMapDiv>
              <S.KakaoMap id="map"></S.KakaoMap>
            </S.KakaoMapDiv>
            <S.KakaoMapInfo>
              <S.ZipcodeWrapper>
                <S.Zipcode
                  placeholder="07250"
                  readOnly
                  value={
                    props.zipcode !== ""
                      ? props.zipcode
                      : props.data?.fetchUseditem.useditemAddress?.zipcode ?? ""
                  }
                />
                <S.SearchButton onClick={props.onClickAddressSearch}>
                  우편번호 검색
                </S.SearchButton>
              </S.ZipcodeWrapper>
              <S.Address
                readOnly
                value={
                  props.address !== ""
                    ? props.address
                    : props.data?.fetchUseditem.useditemAddress?.address ?? ""
                }
              />
              <S.Address
                onChange={props.onChangeAddressDetail}
                defaultValue={
                  props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
                }
              />
            </S.KakaoMapInfo>
          </S.KakaoWrapper>
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          <S.UploadButtonDiv>
            {props.fileUrls.map((el, index) => (
              <Upload01
                key={uuidv4()}
                index={index}
                fileUrls={el}
                onChangeFileUrls={props.onChangeFileUrls}
                onClickDeleteImg={props.onClickDeleteImg}
              />
            ))}
          </S.UploadButtonDiv>
        </S.ImageWrapper>
        <S.OptionWrapper>
          <S.Label>메인 사진 설정</S.Label>
          <S.RadioButton type="radio" id="youtube" name="radio-button" />
          <S.RadioLabel htmlFor="youtube">사진1</S.RadioLabel>
          <S.RadioButton type="radio" id="image" name="radio-button" />
          <S.RadioLabel htmlFor="image">사진2</S.RadioLabel>
        </S.OptionWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
