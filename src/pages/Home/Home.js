import React from "react";
import Text from "../../components/Text/Text";
import UserList from "../../components/UserList/UserList";
import { usePeopleFetch } from "../../hooks/usePeopleFetch";
import * as Style from "./style";

const Home = () => {
  const { handleScroll } = usePeopleFetch();

  // component call in folder NavBar
  return (
    <Style.Home>
      {/* <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} />
      </S.Content> */}
    </Style.Home>
  );
};

export default Home;
