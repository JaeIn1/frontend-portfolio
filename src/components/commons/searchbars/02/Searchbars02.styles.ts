import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 60%;
  height: 52px;
  border-radius: 15px;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  @media screen and ((max-width: 768px)) {
    width: 100%;
  }
`;

export const SearchIcon = styled(SearchOutlined)`
  font-size: 30px;
  cursor: pointer;
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;
