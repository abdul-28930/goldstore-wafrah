export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageSrc: string;
  category: string;
  isNewArrival?: boolean;
  isTrending?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

export const products: Product[] = [
  {
    id: 'gold-necklace-traditional',
    name: 'TRADITIONAL GOLD NECKLACE',
    brand: 'Wafrah Signature',
    price: 89999,
    imageSrc: '/products/goldnecklace1.jpg',
    category: 'necklaces',
    isNewArrival: true
  },
  {
    id: 'diamond-pendant-floral',
    name: 'FLORAL DIAMOND PENDANT',
    brand: 'Wafrah Signature',
    price: 45999,
    imageSrc: '/products/goldpendants1.jpg',
    category: 'pendants',
    isNewArrival: true
  },
  {
    id: 'gold-bangles-set',
    name: 'TRADITIONAL BANGLES SET',
    brand: 'Wafrah Signature',
    price: 75999,
    imageSrc: '/products/goldearrings1.jpg',
    category: 'bangles',
    isNewArrival: true
  },
  {
    id: 'diamond-earrings-drop',
    name: 'DIAMOND DROP EARRINGS',
    brand: 'Wafrah Signature',
    price: 35999,
    imageSrc: '/products/goldearrings1.jpg',
    category: 'earrings',
    isNewArrival: true
  },
  {
    id: 'gold-ring-solitaire',
    name: 'SOLITAIRE DIAMOND RING',
    brand: 'Royal Gold',
    price: 125999,
    imageSrc: '/products/goldring1.jpg',
    category: 'rings',
    isTrending: true
  },
  {
    id: 'gold-bracelet-chain',
    name: 'GOLD CHAIN BRACELET',
    brand: 'Royal Gold',
    price: 42999,
    imageSrc: '/products/goldearrings2.jpg',
    category: 'bracelets',
    isTrending: true
  },
  {
    id: 'gold-necklace-antique',
    name: 'ANTIQUE GOLD NECKLACE',
    brand: 'Heritage Collection',
    price: 95999,
    imageSrc: '/products/goldnecklace2.jpg',
    category: 'necklaces',
    isTrending: true
  },
  {
    id: 'diamond-earrings-studs',
    name: 'DIAMOND STUD EARRINGS',
    brand: 'Diamond Elite',
    price: 29999,
    imageSrc: '/products/goldearrings2.jpg',
    category: 'earrings',
    isTrending: true
  },
  {
    id: 'gold-necklace-bridal',
    name: 'BRIDAL GOLD NECKLACE SET',
    brand: 'Wafrah Bridal',
    price: 159999,
    salePrice: 129999,
    imageSrc: '/products/goldnecklace3.jpg',
    category: 'bridal',
    isSale: true
  },
  {
    id: 'gold-bangles-broad',
    name: 'BROAD GOLD BANGLES',
    brand: 'Heritage Collection',
    price: 85999,
    salePrice: 69999,
    imageSrc: '/products/goldearrings3.jpg',
    category: 'bangles',
    isSale: true
  },
  {
    id: 'gold-earrings-jhumka',
    name: 'TRADITIONAL JHUMKA EARRINGS',
    brand: 'Heritage Collection',
    price: 45999,
    salePrice: 38999,
    imageSrc: '/products/goldearrings3.jpg',
    category: 'earrings',
    isSale: true
  },
  {
    id: 'gold-chain-mens',
    name: 'MEN\'S GOLD CHAIN',
    brand: 'Royal Gold',
    price: 65999,
    salePrice: 55999,
    imageSrc: '/products/goldring3.jpg',
    category: 'chains',
    isSale: true
  }
];

export const getNewArrivals = () => products.filter(product => product.isNewArrival);
export const getTrendingProducts = () => products.filter(product => product.isTrending);
export const getSaleProducts = () => products.filter(product => product.isSale);
export const getProductsByCategory = (category: string) => 
  products.filter(product => product.category === category);
