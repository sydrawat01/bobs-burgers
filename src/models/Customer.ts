export interface Customer {
  name?: string;
  email?: string;
  address?: {
    street?: string;
    city?: string;
    zip?: string;
  };
}
