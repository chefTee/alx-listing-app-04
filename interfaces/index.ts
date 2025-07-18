// Interface for Card component props
export interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

// Interface for Button component props
export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

// // Interface for Property listing (for future use)
// export interface Property {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   location: string;
//   rating: number;
//   amenities: string[];
// }

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}