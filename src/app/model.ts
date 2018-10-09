export interface order {
    line_items:lineitem[],
    billing_address:billingAddress,
    email:string,
    financial_status:string,
    gateway:string
}

export interface billingAddress {
  address1: string;
  address2: string;
  city: string;
  company: string;
  country: string;
  country_code: string;
  first_name: string;
  last_name: string;
  latitude: any;
  longitude: any;
  name: string;
  phone: string;
  province:string;
  province_code: string;
  zip: string;
}

export interface lineitem {
    product_id:number,
    quantity:number,
    sku:string,
    title:string,
    total_discount:string,
    vendor:string,
    price:string,
    name:string,
    grams:number,
    requires_shipping:boolean,
    product_exists:boolean,
    taxable:boolean
}
