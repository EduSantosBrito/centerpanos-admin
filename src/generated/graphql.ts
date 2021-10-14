import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(process.env.API_URL as string, {
    method: "POST",
    ...({
    headers: new Headers({'content-type': 'application/json'}),
}
),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};




export type File = {
  __typename?: 'File';
  uri: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Client = 'CLIENT'
}

export type DefaultError = {
  __typename?: 'DefaultError';
  message?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
};

export type BadRequest = {
  __typename?: 'BadRequest';
  message?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
};

export type Unauthorized = {
  __typename?: 'Unauthorized';
  message?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
};

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Maybe<OrderProduct>>>;
  address?: Maybe<Address>;
  status?: Maybe<OrderStatus>;
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  product?: Maybe<Product>;
  outOfStockPreference?: Maybe<OutOfStockPreference>;
  outOfStockProductChange?: Maybe<Scalars['ID']>;
};

export enum OutOfStockPreference {
  RemoveProduct = 'REMOVE_PRODUCT',
  ChangeProduct = 'CHANGE_PRODUCT'
}

export enum OrderStatus {
  Created = 'CREATED',
  Confirmed = 'CONFIRMED',
  Shipped = 'SHIPPED'
}

export type OrderProductInput = {
  productId: Scalars['ID'];
  outOfStockPreference: OutOfStockPreference;
  outOfStockProductChange?: Maybe<Scalars['ID']>;
};

export type CreateOrderInput = {
  id: Scalars['ID'];
  products: Array<OrderProductInput>;
  addressId: Scalars['ID'];
};

export type CreateOrderSuccessfully = {
  __typename?: 'CreateOrderSuccessfully';
  order?: Maybe<Order>;
};

export type CreateOrderResponse = CreateOrderSuccessfully | BadRequest | Unauthorized | DefaultError;

export type EditOrderInput = {
  id: Scalars['ID'];
  products?: Maybe<Array<EditOrderProducts>>;
  productsToRemove?: Maybe<Array<Scalars['ID']>>;
};

export type EditOrderProducts = {
  oldProductId: Scalars['ID'];
  newProductId: Scalars['ID'];
};

export type EditOrderSuccessfully = {
  __typename?: 'EditOrderSuccessfully';
  order?: Maybe<Order>;
};

export type EditOrderResponse = EditOrderSuccessfully | BadRequest | Unauthorized | DefaultError;

export type MoveOrderInput = {
  id: Scalars['ID'];
};

export type MoveOrderSuccessfully = {
  __typename?: 'MoveOrderSuccessfully';
  order?: Maybe<Order>;
};

export type MoveOrderResponse = MoveOrderSuccessfully | BadRequest | Unauthorized | DefaultError;

export type Mutation = {
  __typename?: 'Mutation';
  createOrder?: Maybe<CreateOrderResponse>;
  editOrder?: Maybe<EditOrderResponse>;
  moveOrderToNextStatus?: Maybe<MoveOrderResponse>;
  createProduct?: Maybe<CreateProductResponse>;
  editProduct?: Maybe<EditProductResponse>;
  deleteProduct?: Maybe<DeleteProductResponse>;
  login?: Maybe<LoginResponse>;
  createAccount?: Maybe<CreateAccountResponse>;
  editAccount?: Maybe<EditAccountResponse>;
  deleteAccount?: Maybe<DeleteAccountResponse>;
  createAddress?: Maybe<CreateAddressResponse>;
  editAddress?: Maybe<EditAddressResponse>;
  deleteAddress?: Maybe<DeleteAddressResponse>;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationEditOrderArgs = {
  input: EditOrderInput;
};


export type MutationMoveOrderToNextStatusArgs = {
  input: MoveOrderInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationEditProductArgs = {
  input: EditProductInput;
};


export type MutationDeleteProductArgs = {
  input: DeleteProductInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationEditAccountArgs = {
  input: EditAccountInput;
};


export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};


export type MutationEditAddressArgs = {
  input: EditAddressInput;
};


export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput;
};

export enum Category {
  Amigurumi = 'AMIGURUMI',
  Cartonagem = 'CARTONAGEM'
}

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
  picture?: Maybe<File>;
  name?: Maybe<Scalars['String']>;
  producer?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Category>>>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CreateProductInput = {
  picture: Scalars['Upload'];
  name: Scalars['String'];
  producer: Scalars['String'];
  categories: Array<Category>;
  description: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
};

export type CreateProductSuccessfully = {
  __typename?: 'CreateProductSuccessfully';
  product?: Maybe<Product>;
};

export type CreateProductResponse = CreateProductSuccessfully | DefaultError | Unauthorized | BadRequest;

export type EditProductInput = {
  id: Scalars['ID'];
  picture?: Maybe<Scalars['Upload']>;
  name?: Maybe<Scalars['String']>;
  producer?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Category>>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type EditProductSuccessfully = {
  __typename?: 'EditProductSuccessfully';
  product?: Maybe<Product>;
};

export type EditProductResponse = EditProductSuccessfully | DefaultError | Unauthorized | BadRequest;

export type DeleteProductInput = {
  id: Scalars['ID'];
};

export type DeleteProductSuccessfully = {
  __typename?: 'DeleteProductSuccessfully';
  id?: Maybe<Scalars['ID']>;
};

export type DeleteProductResponse = DeleteProductSuccessfully | DefaultError | Unauthorized | BadRequest;

export type ProductsSuccessfully = {
  __typename?: 'ProductsSuccessfully';
  products?: Maybe<Array<Maybe<Product>>>;
};

export type ProductsResponse = ProductsSuccessfully | DefaultError;

export type ProductInput = {
  id: Scalars['ID'];
};

export type ProductSuccessfully = {
  __typename?: 'ProductSuccessfully';
  product?: Maybe<Product>;
};

export type ProductResponse = ProductSuccessfully | DefaultError;

export type Query = {
  __typename?: 'Query';
  products?: Maybe<ProductsResponse>;
  product?: Maybe<ProductResponse>;
  users?: Maybe<UsersResponse>;
  user?: Maybe<UserResponse>;
};


export type QueryProductArgs = {
  input: ProductInput;
};


export type QueryUserArgs = {
  input: UserInput;
};

export type Address = {
  __typename?: 'Address';
  id?: Maybe<Scalars['ID']>;
  zipCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['Int']>;
  complement?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  neighbourhood?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<Maybe<Address>>>;
  role?: Maybe<Role>;
};

export type LoginSuccessfully = {
  __typename?: 'LoginSuccessfully';
  token?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = LoginSuccessfully | DefaultError;

export type CreateAccountInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};

export type CreateAccountResponse = LoginSuccessfully | DefaultError | Unauthorized | BadRequest;

export type UserInput = {
  id: Scalars['ID'];
};

export type UserSuccessfully = {
  __typename?: 'UserSuccessfully';
  user?: Maybe<User>;
};

export type UserResponse = UserSuccessfully | DefaultError | Unauthorized | BadRequest;

export type UsersSuccessfully = {
  __typename?: 'UsersSuccessfully';
  users?: Maybe<Array<Maybe<User>>>;
};

export type UsersResponse = UsersSuccessfully | DefaultError | Unauthorized | BadRequest;

export type EditAccountInput = {
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  oldPassword?: Maybe<Scalars['String']>;
  newPassword?: Maybe<Scalars['String']>;
  confirmNewPassword?: Maybe<Scalars['String']>;
};

export type EditAccountSuccessfully = {
  __typename?: 'EditAccountSuccessfully';
  user?: Maybe<User>;
};

export type EditAccountResponse = EditAccountSuccessfully | DefaultError | Unauthorized | BadRequest;

export type DeleteAccountInput = {
  id: Scalars['ID'];
};

export type DeleteAccountSuccessfully = {
  __typename?: 'DeleteAccountSuccessfully';
  user?: Maybe<User>;
};

export type DeleteAccountResponse = DeleteAccountSuccessfully | DefaultError | Unauthorized | BadRequest;

export type CreateAddressInput = {
  id: Scalars['ID'];
  zipCode: Scalars['String'];
  street: Scalars['String'];
  houseNumber: Scalars['Int'];
  complement?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  neighbourhood: Scalars['String'];
};

export type CreateAddressSuccessfully = {
  __typename?: 'CreateAddressSuccessfully';
  user?: Maybe<User>;
};

export type CreateAddressResponse = CreateAddressSuccessfully | DefaultError | Unauthorized | BadRequest;

export type EditAddressInput = {
  id: Scalars['ID'];
  addressId: Scalars['ID'];
  zipCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['Int']>;
  complement?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  neighbourhood?: Maybe<Scalars['String']>;
};

export type EditAddressSuccessfully = {
  __typename?: 'EditAddressSuccessfully';
  user?: Maybe<User>;
};

export type EditAddressResponse = EditAddressSuccessfully | DefaultError | Unauthorized | BadRequest;

export type DeleteAddressInput = {
  id: Scalars['ID'];
  addressId: Scalars['ID'];
};

export type DeleteAddressSuccessfully = {
  __typename?: 'DeleteAddressSuccessfully';
  user?: Maybe<User>;
};

export type DeleteAddressResponse = DeleteAddressSuccessfully | DefaultError | Unauthorized | BadRequest;

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products?: { __typename: 'ProductsSuccessfully', products?: Array<{ __typename?: 'Product', id?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'DefaultError' } | null | undefined };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename: 'LoginSuccessfully', token?: string | null | undefined } | { __typename: 'DefaultError', message?: string | null | undefined, code?: number | null | undefined } | null | undefined };


export const ProductsDocument = `
    query products {
  products {
    __typename
    ... on ProductsSuccessfully {
      products {
        id
        name
      }
    }
  }
}
    `;
export const useProductsQuery = <
      TData = ProductsQuery,
      TError = unknown
    >(
      variables?: ProductsQueryVariables,
      options?: UseQueryOptions<ProductsQuery, TError, TData>
    ) =>
    useQuery<ProductsQuery, TError, TData>(
      variables === undefined ? ['products'] : ['products', variables],
      fetcher<ProductsQuery, ProductsQueryVariables>(ProductsDocument, variables),
      options
    );
useProductsQuery.getKey = (variables?: ProductsQueryVariables) => variables === undefined ? ['products'] : ['products', variables];

export const LoginDocument = `
    mutation login($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    __typename
    ... on LoginSuccessfully {
      token
    }
    ... on DefaultError {
      message
      code
    }
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );