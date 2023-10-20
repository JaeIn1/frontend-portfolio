import Upload01 from "../../../commons/uploads/01/Upload01.container";
import LoadingPage from "../list/Loading.container";
import * as S from "./MarketWrite.styles";
import type { IMarketWriteUIProps } from "./MarketWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function MarketWriteUI(props: IMarketWriteUIProps): JSX.Element {
  console.log(props.data?.fetchUseditem.tags);
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, "link"],
        [
          {
            color: [
              "#000000",
              "#e60000",
              "#ff9900",
              "#ffff00",
              "#008a00",
              "#0066cc",
              "#9933ff",
              "#ffffff",
              "#facccc",
              "#ffebcc",
              "#ffffcc",
              "#cce8cc",
              "#cce0f5",
              "#ebd6ff",
              "#bbbbbb",
              "#f06666",
              "#ffc266",
              "#ffff66",
              "#66b966",
              "#66a3e0",
              "#c285ff",
              "#888888",
              "#a10000",
              "#b26b00",
              "#b2b200",
              "#006100",
              "#0047b2",
              "#6b24b2",
              "#444444",
              "#5c0000",
              "#663d00",
              "#666600",
              "#003700",
              "#002966",
              "#3d1466",
              "custom-color",
            ],
          },
          { background: [] },
        ],
        ["image", "video"],
        ["clean"],
      ],
    },
  };
  return (
    <>
      {props.isOpen && (
        <S.AddressModal visible={true}>
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      {props.itemLoading && <LoadingPage LoadingToggle={props.LoadingToggle} />}
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
          <S.CustomQuill
            onChange={props.onChangeContents}
            placeholder="상품 설명을 해주세요."
            value={
              props.contents
                ? props.contents
                : props.data?.fetchUseditem.contents
            }
            modules={modules}
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
            defaultValue={props.data?.fetchUseditem.tags ?? ""}
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
            {props.imgUrls.map((el, index) => (
              <Upload01
                key={uuidv4()}
                index={index}
                imgUrl={el}
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
            disabled={props.isSubmitting}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
