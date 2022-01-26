import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, FlatList} from 'react-native';

import {FavouritesContext} from '../../context/FavouriteContext';

import {SafeArea} from '../../components/SafeArea';
import {Text} from '../../components/Text';
import {Spacer} from '../../components/Spacer';

import {RestaurantInfoCard} from '../../components/RestaurantInfoCard';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({navigation}) => {
  const {favourites} = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
