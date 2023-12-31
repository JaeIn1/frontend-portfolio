/* eslint-disable no-unneeded-ternary */
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { empty, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_ITEM, UPDATE_ITEM, UPLOAD_FILE } from "./MarketWrite.queries";
import type {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import type { IMarketWriteProps } from "./MarketWrite.types";
import type { Address } from "react-daum-postcode";
import MarketWriteUI from "./MarketWrite.presenter";
import { Modal } from "antd";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketWrite(props: IMarketWriteProps): JSX.Element {
  const router = useRouter();
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubMitting] = useState(false);

  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([""]);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [imgUrls, setImgUrls] = useState<string[]>(["", "", ""]);
  // eslint-disable-next-line @typescript-eslint/array-type
  const [fileUrls, setFileUrls] = useState<(File | string)[]>([]);
  const [itemLoading, setItemLoading] = useState(false);

  const [nameError, setNameError] = useState("");
  const [remarksError, setRemarksError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [pricesError, setPriceError] = useState("");
  const [tagsError, setTagsError] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

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

  const onChangeContents = (value: string): void => {
    console.log(value);
    setContents(value === "<p><br></p>" ? "" : value);
    if (value !== "") {
      setContentsError("");
    }

    if (name !== "" && remarks !== "" && value !== "" && price !== "") {
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
    setTags([...newTag]);
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

  const onChangeFileUrls = (
    fileUrl: File,
    imgUrl: string,
    index: number
  ): void => {
    const tempUrls = [...fileUrls];
    tempUrls[index] = fileUrl;
    setFileUrls(tempUrls);

    const tempImgUrls = [...imgUrls];
    tempImgUrls[index] = imgUrl;
    setImgUrls(tempImgUrls);

    console.log(tempUrls);
  };

  const onClickDeleteImg = (index: any): void => {
    const tempImgUrl = [...imgUrls];
    tempImgUrl[index] = "";
    setImgUrls(tempImgUrl);

    const tempUrl = [...fileUrls];
    tempUrl[index] = "";
    setFileUrls(tempUrl);
  };

  useEffect(() => {
    const tempArr = ["", "", ""];
    const images = props.data?.fetchUseditem.images;
    if (images !== undefined && images !== null) {
      for (let i = 0; i < tempArr.length; i++) {
        tempArr[i] = images[i] ?? "";
      }
    }
    setImgUrls(tempArr);
    setFileUrls(tempArr);
  }, [props.data]);

  const OpenKakaoMap = (data: string): void => {
    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      const callback = function (result: any, status: any): void {
        if (status === window.kakao.maps.services.Status.OK) {
          console.log(result);
          setLng(result[0].x);
          setLat(result[0].y);
        }
      };
      geocoder.addressSearch(data, callback);
    });
  };

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
      const options = {
        // 지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표.
        level: 5, // 지도의 레벨(확대, 축소 정도)
      };
      const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      console.log(map);

      const coords = new window.kakao.maps.LatLng(lat, lng);

      // 결과값으로 받은 위치를 마커로 표시합니다
      const marker = new window.kakao.maps.Marker({
        map,
        position: coords,
      });
      console.log(marker);
    });
  }, [lat, lng]);

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
    OpenKakaoMap(data.address);
  };

  const LoadingToggle = (): void => {
    setItemLoading((prev) => !prev);
  };

  const onClickSubmit = async (): Promise<void> => {
    LoadingToggle();

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
    if (
      name !== "" &&
      remarks !== "" &&
      contents !== "" &&
      price !== "" &&
      lat &&
      lng
    ) {
      try {
        setIsSubMitting(true);
        const results = await Promise.all(
          fileUrls.map(async (el) => {
            if (el instanceof File) {
              const result = await uploadFile({
                variables: { file: el },
              });
              return result;
              // eslint-disable-next-line no-useless-return
            } else return;
          })
        );
        const resultUrls = results.map((el) => el?.data?.uploadFile.url ?? "");

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
                lat: Number(lat),
                lng: Number(lng),
              },
              images: resultUrls,
            },
          },
        });
        if (result.data?.createUseditem._id === undefined) {
          alert("요청에 문제가 있습니다.");
          return;
        }
        LoadingToggle();
        void router.push(`/markets`);
        Modal.success({
          content: "상품이 등록되었습니다.",
        });
        setIsSubMitting(false);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    LoadingToggle();
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    console.log(JSON.stringify(tags));
    if (
      name === "" &&
      remarks === "" &&
      contents === "" &&
      price === "" &&
      address === "" &&
      JSON.stringify(tags) &&
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
      if (props.data?.fetchUseditem.useditemAddress?.lng)
        updateUseditemInput.useditemAddress.lng = Number(lng);
      if (props.data?.fetchUseditem.useditemAddress?.lat)
        updateUseditemInput.useditemAddress.lat = Number(lat);
    }
    for (let i = 0; i < 3; i++) {
      if (fileUrls[i] === (undefined && empty)) {
        fileUrls.splice(i, 1);
      }
    }
    const results = await Promise.all(
      fileUrls.map(async (el) => {
        if (el instanceof File) {
          const result = await uploadFile({
            variables: { file: el },
          });
          return result.data?.uploadFile.url ?? "";
        } else return el ?? "";
      })
    );
    console.log(results);

    /* const resultUrls = results.map((el) => el?.data?.uploadFile.url ?? "");
    console.log(resultUrls); */
    if (isChangedFiles) updateUseditemInput.images = results;

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
      LoadingToggle();
      void router.push(`/mypages/${result.data?.updateUseditem._id}`);
      Modal.success({
        content: "상품이 수정되었습니다.",
      });
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
      imgUrls={imgUrls}
      onClickDeleteImg={onClickDeleteImg}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isSubmitting={isSubmitting}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      contents={contents}
      itemLoading={itemLoading}
      LoadingToggle={LoadingToggle}
    />
  );
}
