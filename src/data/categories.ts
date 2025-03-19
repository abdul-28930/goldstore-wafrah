export interface Category {
  id: string;
  name: string;
  imageSrc: string;
  link: string;
}

export const categories: Category[] = [
  {
    id: 'necklaces',
    name: 'NECKLACES',
    imageSrc: '/categories/goldnecklace.jpg',
    link: '/categories/necklaces'
  },
  {
    id: 'earrings',
    name: 'EARRINGS',
    imageSrc: '/categories/goldearrings.jpg',
    link: '/categories/earrings'
  },
  {
    id: 'rings',
    name: 'RINGS',
    imageSrc: '/categories/goldrings.jpg',
    link: '/categories/rings'
  },
  {
    id: 'bangles',
    name: 'BANGLES',
    imageSrc: '/categories/goldbangles.jpg',
    link: '/categories/bangles'
  },
  {
    id: 'bracelets',
    name: 'BRACELETS',
    imageSrc: '/categories/goldbracelets.jpg',
    link: '/categories/bracelets'
  },
  {
    id: 'pendants',
    name: 'PENDANTS',
    imageSrc: '/categories/goldpendants.jpg',
    link: '/categories/pendants'
  },
  {
    id: 'chains',
    name: 'CHAINS',
    imageSrc: '/categories/goldchain.jpg',
    link: '/categories/chains'
  },
  {
    id: 'bridal',
    name: 'BRIDAL COLLECTION',
    imageSrc: '/categories/goldbridal.jpg',
    link: '/categories/bridal'
  }
];

export const storeLocations: Category[] = [
  {
    id: 'delhi',
    name: 'DELHI',
    imageSrc: '/stores/delhi.jpg',
    link: '/stores/delhi'
  },
  {
    id: 'hyderabad',
    name: 'HYDERABAD',
    imageSrc: '/stores/hyderabad.jpg',
    link: '/stores/hyderabad'
  },
  {
    id: 'mumbai',
    name: 'MUMBAI',
    imageSrc: '/stores/mumbai.jpg',
    link: '/stores/mumbai'
  },
  {
    id: 'bangalore',
    name: 'BANGALORE',
    imageSrc: '/stores/bangalore.jpg',
    link: '/stores/bangalore'
  }
];
