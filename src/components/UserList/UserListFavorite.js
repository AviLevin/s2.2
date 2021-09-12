import React, { useState } from "react";
import Text from "../Text/Text";
import Spinner from "../Spinner/Spinner";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as Style from "./style";
import _ from "lodash";
import { usePeopleFetch } from "../../hooks/usePeopleFetch";
const UserListFavorite = ({}) => {
  const { isLoading, onUserFavoriteToggle, favorites } = usePeopleFetch();
  const [hoveredUserId, setHoveredUserId] = useState();

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  return (
    <Style.UserList>
      <Style.List>
        {favorites.map((user, index) => {
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
              <Style.IconButtonWrapper
                isVisible={true}
                onClick={() => onUserFavoriteToggle(user)}
              >
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </Style.IconButtonWrapper>
            </Style.User>
          );
        })}
        {isLoading && (
          <Style.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </Style.SpinnerWrapper>
        )}
      </Style.List>
    </Style.UserList>
  );
};

export default UserListFavorite;
