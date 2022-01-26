import React from 'react';

import {CompactRestaurantInfo} from '../CompactRestaurantInfo';

export const MapCallout = ({restaurant}) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
