import React, {useContext} from 'react';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

import {FavouritesContext} from '../../context/FavouriteContext';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({restaurant}) => {
  // eslint-disable-next-line prettier/prettier
  const {favourites, addToFavourites, removeFromFavourites} = useContext(
    FavouritesContext,
  );

  const isFavourite = favourites.find(
    r => r?.item?.placeId === restaurant?.item?.placeId,
  );

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }>
      <MaterialCommunityIcons
        name={isFavourite ? 'heart' : 'heart-outline'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};
