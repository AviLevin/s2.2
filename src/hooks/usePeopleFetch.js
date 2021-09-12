import { useEffect, useContext, useCallback } from "react";
import axios from "axios";
import _ from "lodash";
import AppContext from "../AppContext";

export const usePeopleFetch = () => {
  const {
    users,
    setUsers,
    isLoading,
    setIsLoading,
    page,
    setPage,
    selectNat,
    favorites,
    setSelectNat,
    setFavorites,
  } = useContext(AppContext);

  // SCROLL LOAD MORE USER
  const handleScroll = useCallback(
    (e) => {
      const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
      if (scrollHeight - scrollTop === clientHeight) {
        // Increase the page
        setPage(page + 1);
      }
    },
    [page]
  );

  // FUNCTION CHECKBOX FILTER
  const onToggleSelectNat = useCallback(
    (value) => {
      let newArray = selectNat;
      let index = selectNat.indexOf(value);
      if (index === -1) {
        newArray.push(value);
      } else {
        newArray.splice(index, 1);
      }
      setSelectNat([...newArray]);
    },
    [selectNat]
  );

  const isFavorited = (user) => {
    const isExised = _.find(favorites, (favoritedUser) => {
      return favoritedUser.login.uuid === user.login.uuid;
    });
    return isExised;
  };

  const onUserFavoriteToggle = useCallback(
    (selectUser) => {
      // Check if the user have been already favorited
      const isExised = _.find(favorites, (user) => {
        return user.login.uuid === selectUser.login.uuid;
      });

      if (isExised) {
        // Remove it
        const newFavoritesList = _.reject(
          favorites,
          (favoritedUser) => favoritedUser.login.uuid === selectUser.login.uuid
        );
        setFavorites([...newFavoritesList]);
      } else {
        // Add to the favoriteList
        setFavorites([...favorites, selectUser]);
      }
    },
    [favorites]
  );

  /**
   * Fetch Users Data from API
   */
  const fetchUsers = async (page, nats) => {
    const { data } = await axios.get(
      `https://randomuser.me/api/?results=5&page=${page}${
        nats.length > 0 ? "&nat=" + nats.join(",") : ""
      }`
    );
    if (data.results) {
      return data.results;
    }
  };

  // Re-fetch after select new nations
  useEffect(() => {
    //Reset
    setUsers([]);
    setPage(1);

    setIsLoading(true);

    fetchUsers(page, selectNat)
      .then((data) => {
        setUsers([...data]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectNat]);

  //Handle Change when infinity scroll
  useEffect(() => {
    setIsLoading(true);
    fetchUsers(page, selectNat)
      .then((data) => {
        setUsers([...users, ...data]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  return {
    users,
    isLoading,
    fetchUsers,
    setUsers,
    page,
    setPage,
    selectNat,
    onUserFavoriteToggle,
    onToggleSelectNat,
    isFavorited,
    setSelectNat,
    favorites,
    handleScroll,
  };
};
