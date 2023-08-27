import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./MarketWrite.presenter";
import { CREATE_ITEM } from "./MarketWrite.queries";
import type {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import type { IMarketWriteProps } from "./MarketWrite.types";
import type { Address } from "react-daum-postcode";

export default function MarketWrite(props: IMarketWriteProps): JSX.Element {
  const router = useRouter();
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

  /* const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD); */

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
    console.log(images);
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
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

  /* const onClickUpdate = async (): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    if (
      title === "" &&
      contents === "" &&
      address === "" &&
      addressDetail === "" &&
      zipcode === "" &&
      !isChangedFiles
    ) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });

      if (result.data?.updateBoard._id === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }

      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }; */

  return (
    <BoardWriteUI
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
      // onClickUpdate={onClickUpdate}
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
