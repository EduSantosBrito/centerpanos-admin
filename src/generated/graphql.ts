import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  File: ResolverTypeWrapper<File>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Role: Role;
  DefaultError: ResolverTypeWrapper<DefaultError>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  BadRequest: ResolverTypeWrapper<BadRequest>;
  Unauthorized: ResolverTypeWrapper<Unauthorized>;
  Order: ResolverTypeWrapper<Order>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  OrderProduct: ResolverTypeWrapper<OrderProduct>;
  OutOfStockPreference: OutOfStockPreference;
  OrderStatus: OrderStatus;
  OrderProductInput: OrderProductInput;
  CreateOrderInput: CreateOrderInput;
  CreateOrderSuccessfully: ResolverTypeWrapper<CreateOrderSuccessfully>;
  CreateOrderResponse: ResolversTypes['CreateOrderSuccessfully'] | ResolversTypes['BadRequest'] | ResolversTypes['Unauthorized'] | ResolversTypes['DefaultError'];
  EditOrderInput: EditOrderInput;
  EditOrderProducts: EditOrderProducts;
  EditOrderSuccessfully: ResolverTypeWrapper<EditOrderSuccessfully>;
  EditOrderResponse: ResolversTypes['EditOrderSuccessfully'] | ResolversTypes['BadRequest'] | ResolversTypes['Unauthorized'] | ResolversTypes['DefaultError'];
  MoveOrderInput: MoveOrderInput;
  MoveOrderSuccessfully: ResolverTypeWrapper<MoveOrderSuccessfully>;
  MoveOrderResponse: ResolversTypes['MoveOrderSuccessfully'] | ResolversTypes['BadRequest'] | ResolversTypes['Unauthorized'] | ResolversTypes['DefaultError'];
  Mutation: ResolverTypeWrapper<{}>;
  Category: Category;
  Product: ResolverTypeWrapper<Product>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  CreateProductInput: CreateProductInput;
  CreateProductSuccessfully: ResolverTypeWrapper<CreateProductSuccessfully>;
  CreateProductResponse: ResolversTypes['CreateProductSuccessfully'] | ResolversTypes['DefaultError'] | ResolversTypes['Unauthorized'] | ResolversTypes['BadRequest'];
  EditProductInput: EditProductInput;
  EditProductSuccessfully: ResolverTypeWrapper<EditProductSuccessfully>;
  EditProductResponse: ResolversTypes['EditProductSuccessfully'] | ResolversTypes['DefaultError'] | ResolversTypes['Unauthorized'] | ResolversTypes['BadRequest'];
  DeleteProductInput: DeleteProductInput;
  DeleteProductSuccessfully: ResolverTypeWrapper<DeleteProductSuccessfully>;
  DeleteProductResponse: ResolversTypes['DeleteProductSuccessfully'] | ResolversTypes['DefaultError'] | ResolversTypes['Unauthorized'] | ResolversTypes['BadRequest'];
  ProductsSuccessfully: ResolverTypeWrapper<ProductsSuccessfully>;
  ProductsResponse: ResolversTypes['ProductsSuccessfully'] | ResolversTypes['DefaultError'];
  ProductInput: ProductInput;
  ProductSuccessfully: ResolverTypeWrapper<ProductSuccessfully>;
  ProductResponse: ResolversTypes['ProductSuccessfully'] | ResolversTypes['DefaultError'];
  Query: ResolverTypeWrapper<{}>;
  Address: ResolverTypeWrapper<Address>;
  User: ResolverTypeWrapper<User>;
  LoginSuccessfully: ResolverTypeWrapper<LoginSuccessfully>;
  LoginInput: LoginInput;
  LoginResponse: ResolversTypes['LoginSuccessfully'] | ResolversTypes['DefaultError'];
  CreateAccountInput: CreateAccountInput;
  CreateAccountResponse: ResolversTypes['LoginSuccessfully'] | ResolversTypes['DefaultError'] | ResolversTypes['Unauthorized'] | ResolversTypes['BadRequest'];
  UserInput: UserInput;
  UserSuccessfully: ResolverTypeWrapper<UserSuccessfully>;
  UserResponse: ResolversTypes['UserSuccessfully'] | ResolversTypes['DefaultError'] | ResolversTypes['Unauthorized'] | ResolversTypes['BadRequest'];
  UsersSuccessfully: ResolverTypeWrapper<UsersSuccessfully>;
  UsersResponse: ResolversTypes['UsersSuccessfully'] | ResolversTypes['DefaultError'] | ResolversTypes['Unauthorized'] | ResolversTypes['BadRequest'];
  EditAccountInput: EditAccountInput;
  EditAccountSuccessfully: ResolverTypeWrapper<EditAccountSuccessfully>;
  EditAccountResponse: ResolversTypes['EditAccountSuccessfully'] | ResolversTypes['DefaultError'] | ResolversTypes['Unauthorized'] | ResolversTypes['BadRequest'];
  DeleteAccountInput: DeleteAccountInput;
  DeleteAccountSuccessfully: ResolverTypeWrapper<DeleteAccountSuccessfully>;
  DeleteAccountResponse: ResolversTypes['DeleteAccountSuccessfully'] | ResolversTypes['DefaultError'] | ResolversTypes['Unauthorized'] | ResolversTypes['BadRequest'];
  CreateAddressInput: CreateAddressInput;
  CreateAddressSuccessfully: ResolverTypeWrapper<CreateAddressSuccessfully>;
  CreateAddressResponse: ResolversTypes['CreateAddressSuccessfully'] | ResolversTypes['DefaultError'] | ResolversTypes['Unauthorized'] | ResolversTypes['BadRequest'];
  EditAddressInput: EditAddressInput;
  EditAddressSuccessfully: ResolverTypeWrapper<EditAddressSuccessfully>;
  EditAddressResponse: ResolversTypes['EditAddressSuccessfully'] | ResolversTypes['DefaultError'] | ResolversTypes['Unauthorized'] | ResolversTypes['BadRequest'];
  DeleteAddressInput: DeleteAddressInput;
  DeleteAddressSuccessfully: ResolverTypeWrapper<DeleteAddressSuccessfully>;
  DeleteAddressResponse: ResolversTypes['DeleteAddressSuccessfully'] | ResolversTypes['DefaultError'] | ResolversTypes['Unauthorized'] | ResolversTypes['BadRequest'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Upload: Scalars['Upload'];
  File: File;
  String: Scalars['String'];
  DefaultError: DefaultError;
  Int: Scalars['Int'];
  BadRequest: BadRequest;
  Unauthorized: Unauthorized;
  Order: Order;
  ID: Scalars['ID'];
  OrderProduct: OrderProduct;
  OrderProductInput: OrderProductInput;
  CreateOrderInput: CreateOrderInput;
  CreateOrderSuccessfully: CreateOrderSuccessfully;
  CreateOrderResponse: ResolversParentTypes['CreateOrderSuccessfully'] | ResolversParentTypes['BadRequest'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['DefaultError'];
  EditOrderInput: EditOrderInput;
  EditOrderProducts: EditOrderProducts;
  EditOrderSuccessfully: EditOrderSuccessfully;
  EditOrderResponse: ResolversParentTypes['EditOrderSuccessfully'] | ResolversParentTypes['BadRequest'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['DefaultError'];
  MoveOrderInput: MoveOrderInput;
  MoveOrderSuccessfully: MoveOrderSuccessfully;
  MoveOrderResponse: ResolversParentTypes['MoveOrderSuccessfully'] | ResolversParentTypes['BadRequest'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['DefaultError'];
  Mutation: {};
  Product: Product;
  Float: Scalars['Float'];
  CreateProductInput: CreateProductInput;
  CreateProductSuccessfully: CreateProductSuccessfully;
  CreateProductResponse: ResolversParentTypes['CreateProductSuccessfully'] | ResolversParentTypes['DefaultError'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['BadRequest'];
  EditProductInput: EditProductInput;
  EditProductSuccessfully: EditProductSuccessfully;
  EditProductResponse: ResolversParentTypes['EditProductSuccessfully'] | ResolversParentTypes['DefaultError'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['BadRequest'];
  DeleteProductInput: DeleteProductInput;
  DeleteProductSuccessfully: DeleteProductSuccessfully;
  DeleteProductResponse: ResolversParentTypes['DeleteProductSuccessfully'] | ResolversParentTypes['DefaultError'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['BadRequest'];
  ProductsSuccessfully: ProductsSuccessfully;
  ProductsResponse: ResolversParentTypes['ProductsSuccessfully'] | ResolversParentTypes['DefaultError'];
  ProductInput: ProductInput;
  ProductSuccessfully: ProductSuccessfully;
  ProductResponse: ResolversParentTypes['ProductSuccessfully'] | ResolversParentTypes['DefaultError'];
  Query: {};
  Address: Address;
  User: User;
  LoginSuccessfully: LoginSuccessfully;
  LoginInput: LoginInput;
  LoginResponse: ResolversParentTypes['LoginSuccessfully'] | ResolversParentTypes['DefaultError'];
  CreateAccountInput: CreateAccountInput;
  CreateAccountResponse: ResolversParentTypes['LoginSuccessfully'] | ResolversParentTypes['DefaultError'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['BadRequest'];
  UserInput: UserInput;
  UserSuccessfully: UserSuccessfully;
  UserResponse: ResolversParentTypes['UserSuccessfully'] | ResolversParentTypes['DefaultError'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['BadRequest'];
  UsersSuccessfully: UsersSuccessfully;
  UsersResponse: ResolversParentTypes['UsersSuccessfully'] | ResolversParentTypes['DefaultError'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['BadRequest'];
  EditAccountInput: EditAccountInput;
  EditAccountSuccessfully: EditAccountSuccessfully;
  EditAccountResponse: ResolversParentTypes['EditAccountSuccessfully'] | ResolversParentTypes['DefaultError'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['BadRequest'];
  DeleteAccountInput: DeleteAccountInput;
  DeleteAccountSuccessfully: DeleteAccountSuccessfully;
  DeleteAccountResponse: ResolversParentTypes['DeleteAccountSuccessfully'] | ResolversParentTypes['DefaultError'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['BadRequest'];
  CreateAddressInput: CreateAddressInput;
  CreateAddressSuccessfully: CreateAddressSuccessfully;
  CreateAddressResponse: ResolversParentTypes['CreateAddressSuccessfully'] | ResolversParentTypes['DefaultError'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['BadRequest'];
  EditAddressInput: EditAddressInput;
  EditAddressSuccessfully: EditAddressSuccessfully;
  EditAddressResponse: ResolversParentTypes['EditAddressSuccessfully'] | ResolversParentTypes['DefaultError'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['BadRequest'];
  DeleteAddressInput: DeleteAddressInput;
  DeleteAddressSuccessfully: DeleteAddressSuccessfully;
  DeleteAddressResponse: ResolversParentTypes['DeleteAddressSuccessfully'] | ResolversParentTypes['DefaultError'] | ResolversParentTypes['Unauthorized'] | ResolversParentTypes['BadRequest'];
  Boolean: Scalars['Boolean'];
}>;

export type HasRoleDirectiveArgs = {   requires: Role;
  onlyUserSelfInfo?: Maybe<Scalars['Boolean']>; };

export type HasRoleDirectiveResolver<Result, Parent, ContextType = any, Args = HasRoleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IsAuthenticatedDirectiveArgs = {  };

export type IsAuthenticatedDirectiveResolver<Result, Parent, ContextType = any, Args = IsAuthenticatedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = ResolversObject<{
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DefaultErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['DefaultError'] = ResolversParentTypes['DefaultError']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BadRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['BadRequest'] = ResolversParentTypes['BadRequest']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnauthorizedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Unauthorized'] = ResolversParentTypes['Unauthorized']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderProduct']>>>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrderStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProduct'] = ResolversParentTypes['OrderProduct']> = ResolversObject<{
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  outOfStockPreference?: Resolver<Maybe<ResolversTypes['OutOfStockPreference']>, ParentType, ContextType>;
  outOfStockProductChange?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOrderSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOrderSuccessfully'] = ResolversParentTypes['CreateOrderSuccessfully']> = ResolversObject<{
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateOrderResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOrderResponse'] = ResolversParentTypes['CreateOrderResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CreateOrderSuccessfully' | 'BadRequest' | 'Unauthorized' | 'DefaultError', ParentType, ContextType>;
}>;

export type EditOrderSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditOrderSuccessfully'] = ResolversParentTypes['EditOrderSuccessfully']> = ResolversObject<{
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EditOrderResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditOrderResponse'] = ResolversParentTypes['EditOrderResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'EditOrderSuccessfully' | 'BadRequest' | 'Unauthorized' | 'DefaultError', ParentType, ContextType>;
}>;

export type MoveOrderSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveOrderSuccessfully'] = ResolversParentTypes['MoveOrderSuccessfully']> = ResolversObject<{
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoveOrderResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoveOrderResponse'] = ResolversParentTypes['MoveOrderResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'MoveOrderSuccessfully' | 'BadRequest' | 'Unauthorized' | 'DefaultError', ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createOrder?: Resolver<Maybe<ResolversTypes['CreateOrderResponse']>, ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'input'>>;
  editOrder?: Resolver<Maybe<ResolversTypes['EditOrderResponse']>, ParentType, ContextType, RequireFields<MutationEditOrderArgs, 'input'>>;
  moveOrderToNextStatus?: Resolver<Maybe<ResolversTypes['MoveOrderResponse']>, ParentType, ContextType, RequireFields<MutationMoveOrderToNextStatusArgs, 'input'>>;
  createProduct?: Resolver<Maybe<ResolversTypes['CreateProductResponse']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  editProduct?: Resolver<Maybe<ResolversTypes['EditProductResponse']>, ParentType, ContextType, RequireFields<MutationEditProductArgs, 'input'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['DeleteProductResponse']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'input'>>;
  login?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  createAccount?: Resolver<Maybe<ResolversTypes['CreateAccountResponse']>, ParentType, ContextType, RequireFields<MutationCreateAccountArgs, 'input'>>;
  editAccount?: Resolver<Maybe<ResolversTypes['EditAccountResponse']>, ParentType, ContextType, RequireFields<MutationEditAccountArgs, 'input'>>;
  deleteAccount?: Resolver<Maybe<ResolversTypes['DeleteAccountResponse']>, ParentType, ContextType, RequireFields<MutationDeleteAccountArgs, 'input'>>;
  createAddress?: Resolver<Maybe<ResolversTypes['CreateAddressResponse']>, ParentType, ContextType, RequireFields<MutationCreateAddressArgs, 'input'>>;
  editAddress?: Resolver<Maybe<ResolversTypes['EditAddressResponse']>, ParentType, ContextType, RequireFields<MutationEditAddressArgs, 'input'>>;
  deleteAddress?: Resolver<Maybe<ResolversTypes['DeleteAddressResponse']>, ParentType, ContextType, RequireFields<MutationDeleteAddressArgs, 'input'>>;
}>;

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  producer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateProductSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateProductSuccessfully'] = ResolversParentTypes['CreateProductSuccessfully']> = ResolversObject<{
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateProductResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateProductResponse'] = ResolversParentTypes['CreateProductResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CreateProductSuccessfully' | 'DefaultError' | 'Unauthorized' | 'BadRequest', ParentType, ContextType>;
}>;

export type EditProductSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditProductSuccessfully'] = ResolversParentTypes['EditProductSuccessfully']> = ResolversObject<{
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EditProductResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditProductResponse'] = ResolversParentTypes['EditProductResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'EditProductSuccessfully' | 'DefaultError' | 'Unauthorized' | 'BadRequest', ParentType, ContextType>;
}>;

export type DeleteProductSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteProductSuccessfully'] = ResolversParentTypes['DeleteProductSuccessfully']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteProductResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteProductResponse'] = ResolversParentTypes['DeleteProductResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DeleteProductSuccessfully' | 'DefaultError' | 'Unauthorized' | 'BadRequest', ParentType, ContextType>;
}>;

export type ProductsSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsSuccessfully'] = ResolversParentTypes['ProductsSuccessfully']> = ResolversObject<{
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsResponse'] = ResolversParentTypes['ProductsResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ProductsSuccessfully' | 'DefaultError', ParentType, ContextType>;
}>;

export type ProductSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductSuccessfully'] = ResolversParentTypes['ProductSuccessfully']> = ResolversObject<{
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductResponse'] = ResolversParentTypes['ProductResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ProductSuccessfully' | 'DefaultError', ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  products?: Resolver<Maybe<ResolversTypes['ProductsResponse']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductResponse']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'input'>>;
  users?: Resolver<Maybe<ResolversTypes['UsersResponse']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserResponse']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'input'>>;
}>;

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  houseNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  complement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neighbourhood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Address']>>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginSuccessfully'] = ResolversParentTypes['LoginSuccessfully']> = ResolversObject<{
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'LoginSuccessfully' | 'DefaultError', ParentType, ContextType>;
}>;

export type CreateAccountResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAccountResponse'] = ResolversParentTypes['CreateAccountResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'LoginSuccessfully' | 'DefaultError' | 'Unauthorized' | 'BadRequest', ParentType, ContextType>;
}>;

export type UserSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSuccessfully'] = ResolversParentTypes['UserSuccessfully']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserResponse'] = ResolversParentTypes['UserResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'UserSuccessfully' | 'DefaultError' | 'Unauthorized' | 'BadRequest', ParentType, ContextType>;
}>;

export type UsersSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersSuccessfully'] = ResolversParentTypes['UsersSuccessfully']> = ResolversObject<{
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersResponse'] = ResolversParentTypes['UsersResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'UsersSuccessfully' | 'DefaultError' | 'Unauthorized' | 'BadRequest', ParentType, ContextType>;
}>;

export type EditAccountSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditAccountSuccessfully'] = ResolversParentTypes['EditAccountSuccessfully']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EditAccountResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditAccountResponse'] = ResolversParentTypes['EditAccountResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'EditAccountSuccessfully' | 'DefaultError' | 'Unauthorized' | 'BadRequest', ParentType, ContextType>;
}>;

export type DeleteAccountSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteAccountSuccessfully'] = ResolversParentTypes['DeleteAccountSuccessfully']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteAccountResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteAccountResponse'] = ResolversParentTypes['DeleteAccountResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DeleteAccountSuccessfully' | 'DefaultError' | 'Unauthorized' | 'BadRequest', ParentType, ContextType>;
}>;

export type CreateAddressSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAddressSuccessfully'] = ResolversParentTypes['CreateAddressSuccessfully']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateAddressResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAddressResponse'] = ResolversParentTypes['CreateAddressResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CreateAddressSuccessfully' | 'DefaultError' | 'Unauthorized' | 'BadRequest', ParentType, ContextType>;
}>;

export type EditAddressSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditAddressSuccessfully'] = ResolversParentTypes['EditAddressSuccessfully']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EditAddressResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditAddressResponse'] = ResolversParentTypes['EditAddressResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'EditAddressSuccessfully' | 'DefaultError' | 'Unauthorized' | 'BadRequest', ParentType, ContextType>;
}>;

export type DeleteAddressSuccessfullyResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteAddressSuccessfully'] = ResolversParentTypes['DeleteAddressSuccessfully']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteAddressResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteAddressResponse'] = ResolversParentTypes['DeleteAddressResponse']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DeleteAddressSuccessfully' | 'DefaultError' | 'Unauthorized' | 'BadRequest', ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Upload?: GraphQLScalarType;
  File?: FileResolvers<ContextType>;
  DefaultError?: DefaultErrorResolvers<ContextType>;
  BadRequest?: BadRequestResolvers<ContextType>;
  Unauthorized?: UnauthorizedResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderProduct?: OrderProductResolvers<ContextType>;
  CreateOrderSuccessfully?: CreateOrderSuccessfullyResolvers<ContextType>;
  CreateOrderResponse?: CreateOrderResponseResolvers<ContextType>;
  EditOrderSuccessfully?: EditOrderSuccessfullyResolvers<ContextType>;
  EditOrderResponse?: EditOrderResponseResolvers<ContextType>;
  MoveOrderSuccessfully?: MoveOrderSuccessfullyResolvers<ContextType>;
  MoveOrderResponse?: MoveOrderResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  CreateProductSuccessfully?: CreateProductSuccessfullyResolvers<ContextType>;
  CreateProductResponse?: CreateProductResponseResolvers<ContextType>;
  EditProductSuccessfully?: EditProductSuccessfullyResolvers<ContextType>;
  EditProductResponse?: EditProductResponseResolvers<ContextType>;
  DeleteProductSuccessfully?: DeleteProductSuccessfullyResolvers<ContextType>;
  DeleteProductResponse?: DeleteProductResponseResolvers<ContextType>;
  ProductsSuccessfully?: ProductsSuccessfullyResolvers<ContextType>;
  ProductsResponse?: ProductsResponseResolvers<ContextType>;
  ProductSuccessfully?: ProductSuccessfullyResolvers<ContextType>;
  ProductResponse?: ProductResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  LoginSuccessfully?: LoginSuccessfullyResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  CreateAccountResponse?: CreateAccountResponseResolvers<ContextType>;
  UserSuccessfully?: UserSuccessfullyResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
  UsersSuccessfully?: UsersSuccessfullyResolvers<ContextType>;
  UsersResponse?: UsersResponseResolvers<ContextType>;
  EditAccountSuccessfully?: EditAccountSuccessfullyResolvers<ContextType>;
  EditAccountResponse?: EditAccountResponseResolvers<ContextType>;
  DeleteAccountSuccessfully?: DeleteAccountSuccessfullyResolvers<ContextType>;
  DeleteAccountResponse?: DeleteAccountResponseResolvers<ContextType>;
  CreateAddressSuccessfully?: CreateAddressSuccessfullyResolvers<ContextType>;
  CreateAddressResponse?: CreateAddressResponseResolvers<ContextType>;
  EditAddressSuccessfully?: EditAddressSuccessfullyResolvers<ContextType>;
  EditAddressResponse?: EditAddressResponseResolvers<ContextType>;
  DeleteAddressSuccessfully?: DeleteAddressSuccessfullyResolvers<ContextType>;
  DeleteAddressResponse?: DeleteAddressResponseResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  hasRole?: HasRoleDirectiveResolver<any, any, ContextType>;
  isAuthenticated?: IsAuthenticatedDirectiveResolver<any, any, ContextType>;
}>;


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;