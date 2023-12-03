import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../../src/commons/libraries/utils";
import type { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip, Modal } from "antd";
import Slider from "react-slick";
import Link from "next/link";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <S.Wrapper>
      {props.deleteModal && (
        <Modal
          title="Basic Modal"
          open={true}
          onOk={props.onClickDeleteList}
          onCancel={props.onClickDeleteModal}
        >
          <p>정말 게시글을 삭제하시겠습니까?</p>
        </Modal>
      )}
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>
                {getDate(props.data?.fetchBoard?.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconWrapper>
            <S.LinkIcon src="/images/board/detail/link.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }`}
            >
              <S.LocationIcon src="/images/board/detail/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.ImageWrapperDiv>
            <S.ImageWrapper>
              <Slider {...props.settings}>
                {props.data?.fetchBoard.images
                  ?.filter((el) => el)
                  .map((el) => (
                    <S.SliderItem
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
              </Slider>
            </S.ImageWrapper>
          </S.ImageWrapperDiv>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          <S.YoutubeWrapper>
            {props.data?.fetchBoard.youtubeUrl !== "" && (
              <S.Youtube
                url={props.data?.fetchBoard.youtubeUrl ?? ""}
                width="486px"
                height="240px"
              />
            )}
          </S.YoutubeWrapper>
          <S.BoardLikeDiv>
            <div>
              <S.BoardLikeBtn
                src="/images/board/detail/good.png"
                onClick={props.onClickBoardLike}
              />
              <S.BoardLikeSpan>
                {props.data?.fetchBoard.likeCount}
              </S.BoardLikeSpan>
            </div>
            <div>
              <S.BoardBadBtn
                src="/images/board/detail/bad.png"
                onClick={props.onClickBoardDisLike}
              />
              <S.BoardDisLikeSpan>
                {props.data?.fetchBoard.dislikeCount}
              </S.BoardDisLikeSpan>
            </div>
          </S.BoardLikeDiv>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <Link href="/boards">
          <S.Button>목록으로</S.Button>
        </Link>
        <Link href={`/boards/${props.data?.fetchBoard._id}/edit`}>
          <S.Button>수정하기</S.Button>
        </Link>
        <S.Button onClick={props.onClickDeleteModal}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
