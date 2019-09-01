import {Dimensions, Platform} from 'react-native';
const {width} = Dimensions.get('window');
// If screen width is larger than 375 scale by increasing font size by 5%
const m = width > 375 ? 1.05 : 1;
// Font sizes
export default {
  Title: Platform.OS === 'ios' ? 43 * m : 40 * m,
  TitleMedium: Platform.OS === 'ios' ? 36 * m : 34 * m,
  TitleSmall: Platform.OS === 'ios' ? 32 * m : 30 * m,
  TitleSmaller: Platform.OS === 'ios' ? 30 * m : 28 * m,
  Huge: Platform.OS === 'ios' ? 26 * m : 24 * m,
  Larger: Platform.OS === 'ios' ? 22 * m : 20 * m,
  Large: Platform.OS === 'ios' ? 20 * m : 18 * m,
  MediumLarge: Platform.OS === 'ios' ? 18 * m : 16 * m,
  Medium: Platform.OS === 'ios' ? 16 * m : 14 * m,
  MediumSmall: Platform.OS === 'ios' ? 14 * m : 12 * m,
  Small: Platform.OS === 'ios' ? 12 * m : 10 * m,
  Smaller: Platform.OS === 'ios' ? 12 * m : 8 * m,
};
