
// Define a type for Category
type Category = {
  id: number;
  name: string;
  value: string;
  icon: string;
};

// Define a type for Rating
type Rating = {
  id: number;
  name: number;
  icon: string;
};

// Data for Category List
const CategoryListData: Category[] = [
  {
    id: 1,
    name: 'Indian',
    value: 'Indian restaurant',
    icon: 'indian.png',
  },
  {
    id: 2,
    name: 'South Indian',
    value: 'South Indian restaurant',
    icon: 'masala-dosa.png',
  },
  {
    id: 3,
    name: 'Chinese',
    value: 'Chinese restaurant',
    icon: 'chinese.png',
  }
];

// Data for Rating List
const ratingList: Rating[] = [
  {
    id: 1,
    name: 1,
    icon: '⭐',
  },
  {
    id: 2,
    name: 2,
    icon: '⭐⭐',
  },
  {
    id: 3,
    name: 3,
    icon: '⭐⭐⭐',
  },
  {
    id: 4,
    name: 4,
    icon: '⭐⭐⭐⭐',
  },
  {
    id: 5,
    name: 5,
    icon: '⭐⭐⭐⭐⭐',
  },
];

export default {
  CategoryListData,
  ratingList,
};