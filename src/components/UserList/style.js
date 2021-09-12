import styled from "styled-components";

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 65%;
  margin-block-start: 30px;
  margin: 35px auto;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 25px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 128px;
  width: 250px;
  gap: 2px;
  overflow: hidden;
`;

export const UserPicture = styled.img`
  border-radius: 45%;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  :hover {
    opacity: 1;
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 70%;
  & > * {
    margin-inline-end: 8px;
  }
`;
