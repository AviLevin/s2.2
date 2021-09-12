import React, { useState } from "react";
import Text from "../Text/Text";
import Spinner from "../Spinner/Spinner";
import CheckBox from "../CheckBox/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as Style from "./style";
import { usePeopleFetch } from "../../hooks/usePeopleFetch";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

const UserList = ({}) => {
  const {
    users,
    isLoading,
    setPage,
    page,
    onUserFavoriteToggle,
    isFavorited,
    handleScroll,
    onToggleSelectNat,
  } = usePeopleFetch();
  const [hoveredUserId, setHoveredUserId] = useState();

  const nation = [
    { value: "BR", label: "Brazil" },
    { value: "AU", label: "Australia" },
    { value: "CA", label: "Canada" },
    { value: "CH", label: "Switzerland" },
    { value: "DE", label: "Germany" },
    { value: "DK", label: "Denmark" },
   
  ];

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  return (
    <Style.UserList>
      <Style.Filters>
        {/* SHOW OPTION SELECT NATION */}
        {nation.map((na, index) => (
          <CheckBox
            key={index}
            value={na.value}
            label={na.label}
            onChange={onToggleSelectNat}
          />
        ))}
      </Style.Filters>

      <Style.List id="scrollableDiv" style={{ height: 700, overflow: "auto" }}>
        <InfiniteScroll
          dataLength={users.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          scrollableTarget="scrollableDiv"
          style={{ overflow: "hidden" }}
        >
          {users &&
            users.map((user, index) => {
              return (
                <Style.User
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Style.UserPicture src={user.picture.large} alt="" />
                  <Style.UserInfo>
                    <Text size="22px" bold>
                      {user.name.title} {user.name.first} {user.name.last}
                    </Text>
                    <Text size="14px">{user.email}</Text>
                    <Text size="14px">
                      {user.location.street.number} {user.location.street.name}
                    </Text>
                    <Text size="14px">
                      {user.location.city} {user.location.country}
                    </Text>
                  </Style.UserInfo>
                  <Style.IconButtonWrapper isVisible={isFavorited(user)}>
                    <IconButton onClick={() => onUserFavoriteToggle(user)}>
                      <FavoriteIcon color="error" />
                    </IconButton>
                  </Style.IconButtonWrapper>
                </Style.User>
              );
            })}
          {isLoading && (
            <Style.SpinnerWrapper>
              <Spinner
                color="primary"
                size="45px"
                thickness={6}
                variant="indeterminate"
              />
            </Style.SpinnerWrapper>
          )}
        </InfiniteScroll>
      </Style.List>
    </Style.UserList>
  );
};

export default UserList;
