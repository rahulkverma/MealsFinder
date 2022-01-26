import React from 'react';
import {SvgXml} from 'react-native-svg';

import star from '../../assets/star';
import open from '../../assets/open';
import {Spacer} from '../Spacer';
import {Favourite} from '../Favourite';
import {Text} from '../Text';
import {View} from 'react-native';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from './styles';

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = restaurant?.item?.name,
    icon = restaurant?.item?.icon,
    photos = restaurant?.item?.photos,
    address = restaurant?.item?.address,
    isOpenNow = restaurant?.item?.isOpenNow,
    rating = restaurant?.item?.rating,
    isClosedTemporarily = restaurant?.item?.isClosedTemporarily,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{uri: icon}} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
