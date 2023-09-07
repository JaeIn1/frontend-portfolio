import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_ITEM, UPDATE_ITEM } from "./MarketWrite.queries";
import type {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import type { IMarketWriteProps } from "./MarketWrite.types";
import type { Address } from "react-daum-postcode";
import MarketWriteUI from "./MarketWrite.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketWrite(props: IMarketWriteProps): JSX.Element {
  const router = useRouter();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([""]);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [nameError, setNameError] = useState("");
  const [remarksError, setRemarksError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [pricesError, setPriceError] = useState("");
  const [tagsError, setTagsError] = useState("");

  const [createItem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_ITEM);

  const [updateItem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_ITEM);

  const onChangeItemNamer = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }

    if (
      event.target.value !== "" &&
      remarks !== "" &&
      contents !== "" &&
      price !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeRemarks = (event: ChangeEvent<HTMLInputElement>): void => {
    setRemarks(event.target.value);
    if (event.target.value !== "") {
      setRemarksError("");
    }

    if (
      name !== "" &&
      event.target.value !== "" &&
      contents !== "" &&
      price !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    if (
      name !== "" &&
      remarks !== "" &&
      event.target.value !== "" &&
      price !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePrice = (event: ChangeEvent<HTMLInputElement>): void => {
    setPrice(event.target.value);
    if (event.target.value !== "") {
      setPriceError("");
    }

    if (name !== "" && remarks !== "" && contents !== "" && price !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTag = (event: ChangeEvent<HTMLInputElement>): void => {
    const newTag = event.target.value.split(" ");
    console.log(newTag);
    setTags(newTag);
    if (event.target.value !== "") {
      setTagsError("");
    }

    if (name !== "" && remarks !== "" && contents !== "" && price !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeAddressDetail = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = props.data?.fetchUseditem.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  const OpenKakaoMap = (data: Address): void => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=d04ecaaaaf8321b9e6f5e5d593940588&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      console.log();
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(lng, lat), // 지도의 중심좌표.
          level: 5, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        const geocoder = new window.kakao.maps.services.Geocoder();
        const callback = function (result: any, status: any): void {
          if (status === window.kakao.maps.services.Status.OK) {
            console.log(result);
            setLat(result[0].x);
            setLng(result[0].y);
          }
        };
        geocoder.addressSearch(data.address, callback);

        const coords = new window.kakao.maps.LatLng(lng, lat);

        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new window.kakao.maps.Marker({
          map,
          position: coords,
        });
      });
    };
  };

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
    OpenKakaoMap(data);
  };

  const onClickSubmit = async (): Promise<void> => {
    if (name === "") {
      setNameError("상품명을 입력해주세요.");
    }
    if (remarks === "") {
      setRemarksError("제목을 입력해주세요.");
    }
    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }
    if (price === "") {
      setPriceError("가격을 입력해주세요");
    }
    if (name !== "" && remarks !== "" && contents !== "" && price !== "") {
      try {
        const result = await createItem({
          variables: {
            createUseditemInput: {
              name,
              remarks,
              contents,
              price: Number(price),
              tags: [...tags],
              useditemAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: [...fileUrls],
            },
          },
        });
        if (result.data?.createUseditem._id === undefined) {
          alert("요청에 문제가 있습니다.");
          return;
        }
        alert("상품이 등록되었습니다.");
        void router.push(`/markets`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    if (
      name === "" &&
      remarks === "" &&
      contents === "" &&
      price === "" &&
      JSON.stringify(tags) === "" &&
      address === "" &&
      addressDetail === "" &&
      zipcode === "" &&
      !isChangedFiles
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    const updateUseditemInput: IUpdateUseditemInput = {};
    if (name !== "") updateUseditemInput.name = name;
    if (remarks !== "") updateUseditemInput.remarks = remarks;
    if (contents !== "") updateUseditemInput.contents = contents;
    if (price !== "") updateUseditemInput.price = Number(price);
    if (JSON.stringify(tags) !== "") updateUseditemInput.tags = tags;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateUseditemInput.useditemAddress = {};
      if (zipcode !== "") updateUseditemInput.useditemAddress.zipcode = zipcode;
      if (address !== "") updateUseditemInput.useditemAddress.address = address;
      if (addressDetail !== "")
        updateUseditemInput.useditemAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateUseditemInput.images = fileUrls;

    try {
      if (typeof router.query.marketId !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await updateItem({
        variables: {
          useditemId: router.query.marketId,
          updateUseditemInput,
        },
      });

      if (result.data?.updateUseditem._id === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }
      alert("상품이 수정되었습니다.");
      void router.push(`/markets/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <MarketWriteUI
      nameError={nameError}
      remarksError={remarksError}
      contentsError={contentsError}
      pricesError={pricesError}
      tagsError={tagsError}
      onChangeItemNamer={onChangeItemNamer}
      onChangeRemarks={onChangeRemarks}
      onChangeContents={onChangeContents}
      onChangePrice={onChangePrice}
      onChangeTag={onChangeTag}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeFileUrls={onChangeFileUrls}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      fileUrls={fileUrls}
    />
  );
}
